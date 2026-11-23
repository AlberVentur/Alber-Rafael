#!/usr/bin/env python3
"""
Generador de videos verticales "Llena la nave" (formato 9:16 para TikTok / Reels / Shorts).

Idea: una nave con N cápsulas. Cada seguidor nuevo ocupa una cápsula, los que comentan
aparecen con su nombre, y al llegar a la meta la nave despega.

Uso:
    python3 generar_video.py                       # usa config.json
    python3 generar_video.py --seguidores 152      # actualiza el contador
    python3 generar_video.py --nombres "Ana,Leo"   # agrega tripulantes (de los comentarios)
    python3 generar_video.py --sin-voz             # sin narración (solo música)
    python3 generar_video.py --rapido              # vista previa a 540x960
"""
import argparse
import json
import math
import os
import random
import shutil
import subprocess
import sys
import tempfile

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

BASE = os.path.dirname(os.path.abspath(__file__))
FPS = 30
AMARILLO = (255, 200, 61)
NARANJA = (255, 150, 40)
BLANCO = (255, 255, 255)

# ---------------------------------------------------------------- utilidades


def buscar_fuente(negrita=True):
    candidatas = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if negrita else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
        "C:/Windows/Fonts/arialbd.ttf" if negrita else "C:/Windows/Fonts/arial.ttf",
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "/Library/Fonts/Arial Bold.ttf",
    ]
    for c in candidatas:
        if os.path.exists(c):
            return c
    return None


RUTA_FUENTE = buscar_fuente(True)
_cache_fuentes = {}


def fuente(tam):
    tam = max(8, int(tam))
    if tam not in _cache_fuentes:
        _cache_fuentes[tam] = ImageFont.truetype(RUTA_FUENTE, tam) if RUTA_FUENTE else ImageFont.load_default()
    return _cache_fuentes[tam]


def miles(n):
    return f"{n:,}".replace(",", ".")


def suave(t):
    t = max(0.0, min(1.0, t))
    return t * t * (3 - 2 * t)


def duracion_audio(ruta):
    out = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration",
                          "-of", "default=nw=1:nk=1", ruta], capture_output=True, text=True)
    try:
        return float(out.stdout.strip())
    except ValueError:
        return 0.0


def texto_limpio(texto):
    return texto.replace("*", "")


# ---------------------------------------------------------------- dibujo base


class Lienzo:
    def __init__(self, W, H, cfg):
        self.W, self.H = W, H
        self.s = W / 1080.0  # escala respecto a 1080x1920
        self.cfg = cfg
        rnd = random.Random(7)
        # Fondo: degradado azul profundo
        y = np.linspace(0, 1, H)[:, None]
        top = np.array([8, 22, 60]); bot = np.array([2, 6, 24])
        grad = (top * (1 - y) + bot * y)[:, None, :].repeat(W, axis=1)
        self.fondo = Image.fromarray(grad.reshape(H, W, 3).astype(np.uint8))
        self.estrellas = [(rnd.random() * W, rnd.random() * H, rnd.random() * 2.2 + 0.5, rnd.random())
                          for _ in range(260)]
        self._naves = {}

    def fondo_espacio(self, t, deriva=40):
        img = self.fondo.copy()
        d = ImageDraw.Draw(img)
        for x, y, r, fase in self.estrellas:
            yy = (y + t * deriva * self.s * (0.3 + fase)) % self.H
            brillo = int(140 + 115 * (0.5 + 0.5 * math.sin(t * 3 + fase * 10)))
            rr = r * self.s
            d.ellipse([x - rr, yy - rr, x + rr, yy + rr], fill=(brillo, brillo, 255))
        return img

    # --- La nave (cohete visto de frente, con cuadrícula de cápsulas)
    def nave(self, ocupadas, capacidad):
        clave = (ocupadas, capacidad)
        if clave in self._naves:
            return self._naves[clave]
        s = self.s
        w, h = int(520 * s), int(1250 * s)
        pad = int(160 * s)
        img = Image.new("RGBA", (w + 2 * pad, h + 2 * pad + int(120 * s)), (0, 0, 0, 0))
        d = ImageDraw.Draw(img)
        x0, y0, x1, y1 = pad, pad, pad + w, pad + h
        # aletas
        for lado in (-1, 1):
            bx = x0 if lado < 0 else x1
            d.polygon([(bx, y1 - 330 * s), (bx + lado * 150 * s, y1 - 80 * s), (bx + lado * 150 * s, y1 + 40 * s),
                       (bx, y1 - 60 * s)], fill=(200, 210, 230), outline=(120, 130, 160))
            # luces de las alas
        # cuerpo
        d.rounded_rectangle([x0, y0 + 160 * s, x1, y1], radius=int(90 * s), fill=(215, 222, 238))
        d.ellipse([x0, y0, x1, y0 + 420 * s], fill=(215, 222, 238))
        # ventana de la punta
        cx = (x0 + x1) / 2
        d.ellipse([cx - 55 * s, y0 + 70 * s, cx + 55 * s, y0 + 180 * s], fill=(40, 120, 220), outline=(90, 100, 130),
                  width=int(8 * s))
        # panel de cápsulas
        px0, py0, px1, py1 = x0 + 40 * s, y0 + 230 * s, x1 - 40 * s, y1 - 50 * s
        d.rounded_rectangle([px0, py0, px1, py1], radius=int(40 * s), fill=(18, 26, 52), outline=(150, 160, 190),
                            width=int(4 * s))
        # cuadrícula: elegir columnas/filas según la capacidad
        aspecto = (py1 - py0) / (px1 - px0)
        cols = max(4, int(round(math.sqrt(capacidad / aspecto))))
        filas = math.ceil(capacidad / cols)
        cw = (px1 - px0 - 20 * s) / cols
        ch = (py1 - py0 - 20 * s) / filas
        rnd = random.Random(capacidad)
        orden = list(range(capacidad))
        # se llenan de arriba hacia abajo (así el marcador no las tapa)
        orden.sort(key=lambda i: (i // cols, rnd.random()))
        llenas = set(orden[:ocupadas])
        hueco = max(1.0, min(cw, ch) * 0.18)
        for i in range(capacidad):
            c, f = i % cols, i // cols
            cx0 = px0 + 10 * s + c * cw
            cy0 = py0 + 10 * s + f * ch
            col = NARANJA if i in llenas else (44, 56, 92)
            d.rectangle([cx0 + hueco / 2, cy0 + hueco / 2, cx0 + cw - hueco / 2, cy0 + ch - hueco / 2], fill=col)
        # motor
        d.rectangle([cx - 120 * s, y1, cx + 120 * s, y1 + 70 * s], fill=(90, 95, 115))
        d.polygon([(cx - 140 * s, y1 + 70 * s), (cx + 140 * s, y1 + 70 * s), (cx + 170 * s, y1 + 120 * s),
                   (cx - 170 * s, y1 + 120 * s)], fill=(70, 75, 95))
        info = {"img": img, "base_y": y1 + 120 * s, "cx": cx}
        self._naves[clave] = info
        return info

    def pegar_nave(self, frame, info, cx, cy, escala, angulo=0.0):
        im = info["img"]
        if escala != 1.0:
            im = im.resize((max(1, int(im.width * escala)), max(1, int(im.height * escala))), Image.BILINEAR)
        if angulo:
            im = im.rotate(angulo, resample=Image.BILINEAR, expand=True)
        frame.paste(im, (int(cx - im.width / 2), int(cy - im.height / 2)), im)

    def llamas(self, frame, cx, base_y, escala, t, fuerza=1.0):
        d = ImageDraw.Draw(frame, "RGBA")
        s = self.s * escala
        rnd = random.Random(int(t * 60))
        for k in range(14):
            largo = (220 + rnd.random() * 260) * s * fuerza
            ancho = (60 + rnd.random() * 90) * s
            off = (rnd.random() - 0.5) * 120 * s
            col = (255, int(120 + rnd.random() * 120), 30, 170)
            d.polygon([(cx + off - ancho / 2, base_y), (cx + off + ancho / 2, base_y), (cx + off, base_y + largo)], fill=col)
        d.ellipse([cx - 90 * s, base_y - 10 * s, cx + 90 * s, base_y + 90 * s * fuerza], fill=(255, 250, 220, 220))

    def marcador(self, frame, cx, y, arriba, valor, total=None):
        s = self.s
        d = ImageDraw.Draw(frame, "RGBA")
        texto = miles(valor) + (f" / {miles(total)}" if total else "")
        f1, f2 = fuente(26 * s), fuente(64 * s)
        w = max(d.textlength(texto, font=f2), d.textlength(arriba, font=f1)) + 70 * s
        h = 140 * s
        d.rounded_rectangle([cx - w / 2, y, cx + w / 2, y + h], radius=int(22 * s), fill=(10, 14, 30, 235),
                            outline=AMARILLO, width=int(5 * s))
        d.text((cx, y + 30 * s), arriba, font=f1, fill=BLANCO, anchor="mm")
        d.text((cx, y + 92 * s), texto, font=f2, fill=AMARILLO, anchor="mm")

    def marca_agua(self, frame):
        s = self.s
        d = ImageDraw.Draw(frame, "RGBA")
        d.text((self.W - 40 * s, 560 * s), self.cfg["cuenta"], font=fuente(30 * s), fill=(255, 255, 255, 200), anchor="rm")

    def subtitulo(self, frame, texto, progreso):
        """Muestra el texto palabra por palabra. *palabra* = resaltada en amarillo."""
        s = self.s
        palabras = []
        for p in texto.split():
            res = p.startswith("*") or p.endswith("*") or p.strip(".,¿?¡!").startswith("*")
            palabras.append((p.replace("*", ""), res))
        n = len(palabras)
        visibles = min(n, int(progreso * n * 1.25) + 1)
        f = fuente(82 * s)
        d = ImageDraw.Draw(frame)
        maxw = self.W - 120 * s
        lineas, actual, ancho = [], [], 0
        esp = d.textlength(" ", font=f)
        for p, r in palabras:
            wp = d.textlength(p, font=f)
            if actual and ancho + esp + wp > maxw:
                lineas.append((actual, ancho)); actual, ancho = [], 0
            ancho += (esp if actual else 0) + wp
            actual.append((p, r, wp))
        if actual:
            lineas.append((actual, ancho))
        # franja oscura detrás del texto para que siempre se lea
        banda = Image.new("RGBA", (self.W, int(560 * s)), (0, 0, 0, 0))
        alfa = np.linspace(170, 0, banda.height).astype(np.uint8)
        banda.putalpha(Image.fromarray(np.repeat(alfa[:, None], self.W, axis=1)))
        frame.paste(Image.new("RGB", banda.size, (0, 0, 0)), (0, 0), banda)
        d = ImageDraw.Draw(frame)
        y = 300 * s - (len(lineas) - 1) * 50 * s
        k = 0
        for linea, ancho in lineas:
            x = (self.W - ancho) / 2
            for p, r, wp in linea:
                if k < visibles:
                    d.text((x, y), p, font=f, fill=AMARILLO if r else BLANCO, stroke_width=int(7 * s),
                           stroke_fill=(0, 0, 0), anchor="lm")
                x += wp + esp
                k += 1
            y += 100 * s


# ---------------------------------------------------------------- escenas


def escena_zoom_nave(L, t, dur, cfg, ocupadas):
    fr = L.fondo_espacio(t)
    info = L.nave(ocupadas, cfg["capacidad"])
    esc = 2.6 - 1.5 * suave(t / dur)
    L.pegar_nave(fr, info, L.W / 2, L.H * 0.62 + (esc - 1.1) * 250 * L.s, esc)
    return fr


def escena_nave(L, t, dur, cfg, ocupadas, angulo_max=10):
    fr = L.fondo_espacio(t)
    info = L.nave(ocupadas, cfg["capacidad"])
    ang = angulo_max * math.sin(t * 0.9) * suave(t)
    esc = 0.85
    cy = L.H * 0.62 + 12 * L.s * math.sin(t * 2)
    L.pegar_nave(fr, info, L.W / 2, cy, esc, ang)
    L.marcador(fr, L.W / 2, L.H * 0.80, "TRIPULANTES A BORDO", ocupadas, cfg["capacidad"])
    return fr


def escena_pasillo(L, t, dur, cfg, ocupadas):
    W, H, s = L.W, L.H, L.s
    fr = Image.new("RGB", (W, H), (4, 8, 20))
    d = ImageDraw.Draw(fr, "RGBA")
    cx, cy = W / 2, H * 0.55
    avance = t * 2.2
    for i in range(40, 0, -1):
        z = i - (avance % 1.0)
        if z <= 0.2:
            continue
        k = 1.0 / z
        hw, hh = W * 0.9 * k, H * 0.42 * k
        alfa = int(255 * min(1, 2.5 * k))
        # marcos de cápsulas a ambos lados
        for lado in (-1, 1):
            x_ext = cx + lado * hw
            x_int = cx + lado * hw * 0.62
            for fila in range(3):
                ya = cy - hh + fila * (2 * hh / 3)
                yb = ya + 2 * hh / 3 * 0.86
                d.rectangle([min(x_ext, x_int), ya, max(x_ext, x_int), yb], outline=(150, 175, 220, alfa),
                            width=max(1, int(6 * k * s * 3)), fill=(20, 30, 60, alfa // 2))
                num = int(i + avance) * 6 + fila * 2 + (lado > 0)
                if k > 0.08:
                    d.text(((x_ext + x_int) / 2, ya - 14 * k * s * 3), f"{num:04d}", font=fuente(22 * k * s * 3),
                           fill=(180, 200, 230, alfa), anchor="mm")
        # luces del techo y suelo
        d.rectangle([cx - 200 * k * s * 3, cy - hh * 1.15, cx + 200 * k * s * 3, cy - hh * 1.08], fill=(90, 170, 255, alfa))
        d.rectangle([cx - 30 * k * s * 3, cy + hh * 1.05, cx + 30 * k * s * 3, cy + hh * 1.1], fill=(90, 170, 255, alfa))
    brillo = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(brillo).ellipse([cx - 160 * s, cy - 160 * s, cx + 160 * s, cy + 160 * s], fill=(120, 190, 255, 150))
    fr.paste(brillo.filter(ImageFilter.GaussianBlur(60 * s)), (0, 0), brillo.filter(ImageFilter.GaussianBlur(60 * s)))
    return fr


def dibujar_capsula(d, x, y, w, h, s, encendida, nombre=None, grande=False):
    d.rounded_rectangle([x, y, x + w, y + h], radius=int(h * 0.45), fill=(150, 158, 175), outline=(70, 75, 90),
                        width=int(5 * s))
    vx0, vy0, vx1, vy1 = x + w * 0.06, y + h * 0.16, x + w * 0.78, y + h * 0.84
    d.rounded_rectangle([vx0, vy0, vx1, vy1], radius=int(h * 0.32),
                        fill=NARANJA if encendida else (34, 40, 58), outline=(60, 66, 80), width=int(4 * s))
    d.rounded_rectangle([x + w * 0.83, y + h * 0.22, x + w * 0.95, y + h * 0.78], radius=int(6 * s), fill=(60, 66, 82))
    d.ellipse([x + w * 0.865, y + h * 0.58, x + w * 0.915, y + h * 0.58 + w * 0.05],
              fill=AMARILLO if encendida else (60, 140, 255))
    if nombre:
        tam = (70 if grande else 34) * s
        f = fuente(tam)
        while d.textlength(nombre, font=f) > (vx1 - vx0) * 0.9 and tam > 10:
            tam -= 2; f = fuente(tam)
        d.text(((vx0 + vx1) / 2, (vy0 + vy1) / 2), nombre, font=f, fill=BLANCO if not grande else (255, 255, 255),
               stroke_width=int(4 * s), stroke_fill=(120, 60, 0), anchor="mm")


def escena_capsulas(L, t, dur, cfg, ocupadas, nombres=None):
    W, H, s = L.W, L.H, L.s
    fr = Image.new("RGB", (W, H), (28, 30, 40))
    d = ImageDraw.Draw(fr, "RGBA")
    cols, w, h = 3, 330 * s, 150 * s
    gx, gy = 30 * s, 40 * s
    desplaz = -(t * 120 * s) % (h + gy)
    rnd = random.Random(3)
    zoom_tu = suave((t - dur * 0.55) / (dur * 0.3)) if nombres is None else 0
    nombres = nombres or []
    for f in range(-1, 14):
        for c in range(cols):
            x = (W - (cols * w + (cols - 1) * gx)) / 2 + c * (w + gx)
            y = f * (h + gy) + desplaz
            idx = f * cols + c
            on = rnd.random() < 0.35
            nombre = None
            if nombres:
                nombre = nombres[(idx + int(t * 2) * 0) % len(nombres)] if idx % 2 == 0 and idx >= 0 else None
                on = nombre is not None or on
            dibujar_capsula(d, x, y, w, h, s, on, nombre)
    if zoom_tu > 0:
        # la cápsula "TÚ" se acerca a pantalla
        ww, hh = w + (W * 1.05 - w) * zoom_tu, h + (h * 3.0 - h) * zoom_tu
        oscurecer = Image.new("RGBA", (W, H), (0, 0, 0, int(150 * zoom_tu)))
        fr.paste(oscurecer, (0, 0), oscurecer)
        d = ImageDraw.Draw(fr, "RGBA")
        dibujar_capsula(d, (W - ww) / 2, H * 0.62 - hh / 2, ww, hh, s, True, "TÚ", grande=True)
    return fr


def escena_nombres(L, t, dur, cfg, ocupadas):
    return escena_capsulas(L, t, dur, cfg, ocupadas, nombres=cfg["tripulantes"] or ["TU NOMBRE"])


def escena_meta(L, t, dur, cfg, ocupadas, meta=100):
    fr = L.fondo_espacio(t)
    info = L.nave(min(ocupadas, cfg["capacidad"]), cfg["capacidad"])
    esc, cx, cy = 0.85, L.W / 2, L.H * 0.62
    temblor = 6 * L.s * suave(t / dur)
    cx += random.uniform(-temblor, temblor)
    L.pegar_nave(fr, info, cx, cy, esc)
    base = cy - info["img"].height * esc / 2 + info["base_y"] * esc
    L.llamas(fr, cx, base, esc, t, fuerza=0.25 + 0.5 * suave(t / dur))
    L.marcador(fr, L.W / 2, L.H * 0.80, "META: TRIPULANTES", meta)
    return fr


def escena_despegue(L, t, dur, cfg, ocupadas):
    fr = L.fondo_espacio(t, deriva=40 + 600 * suave(t / dur))
    info = L.nave(cfg["capacidad"], cfg["capacidad"])
    esc = 0.85
    sube = suave((t - 0.4) / (dur - 0.4)) * L.H * 0.9
    cx = L.W / 2 + random.uniform(-8, 8) * L.s
    cy = L.H * 0.62 - sube
    L.pegar_nave(fr, info, cx, cy, esc)
    base = cy - info["img"].height * esc / 2 + info["base_y"] * esc
    L.llamas(fr, cx, base, esc, t, fuerza=1.3)
    # humo
    d = ImageDraw.Draw(fr, "RGBA")
    rnd = random.Random(11)
    for _ in range(26):
        x = L.W / 2 + (rnd.random() - 0.5) * L.W * 1.2 * suave(t / dur + 0.2)
        y = L.H * 0.95 + (rnd.random() - 0.5) * 200 * L.s
        r = (120 + rnd.random() * 160) * L.s
        d.ellipse([x - r, y - r, x + r, y + r], fill=(230, 235, 245, 120))
    return fr


def escena_cta(L, t, dur, cfg, ocupadas):
    fr = escena_nave(L, t, dur, cfg, ocupadas, angulo_max=4)
    d = ImageDraw.Draw(fr, "RGBA")
    s = L.s
    pulso = 1 + 0.06 * math.sin(t * 6)
    w, h = 640 * s * pulso, 120 * s * pulso
    y = L.H * 0.5
    d.rounded_rectangle([L.W / 2 - w / 2, y - h / 2, L.W / 2 + w / 2, y + h / 2], radius=int(h / 2),
                        fill=(255, 60, 90, 240))
    d.text((L.W / 2, y), "+ SEGUIR  ·  COMENTA", font=fuente(48 * s * pulso), fill=BLANCO, anchor="mm")
    return fr


ESCENAS = {
    "zoom_nave": escena_zoom_nave,
    "nave": escena_nave,
    "pasillo": escena_pasillo,
    "capsulas": escena_capsulas,
    "nombres": escena_nombres,
    "meta": escena_meta,
    "despegue": escena_despegue,
    "cta": escena_cta,
}


# ---------------------------------------------------------------- audio


def generar_voces(cfg, carpeta, usar_voz):
    """Devuelve la lista de rutas mp3 (o None) por escena."""
    rutas = [None] * len(cfg["escenas"])
    if not usar_voz:
        return rutas
    try:
        import edge_tts  # noqa: F401
    except ImportError:
        print("  (edge-tts no instalado: el video irá sin narración)")
        return rutas
    for i, esc in enumerate(cfg["escenas"]):
        ruta = os.path.join(carpeta, f"voz_{i}.mp3")
        texto = texto_limpio(esc["texto"]).replace("1.000", "mil")
        r = subprocess.run([sys.executable, "-m", "edge_tts", "--voice", cfg.get("voz", "es-MX-JorgeNeural"),
                            "--rate", "+8%", "--text", texto, "--write-media", ruta], capture_output=True)
        if r.returncode != 0 or not os.path.exists(ruta):
            print("  (no se pudo generar la voz — ¿sin internet? — el video irá sin narración)")
            return [None] * len(cfg["escenas"])
        rutas[i] = ruta
    return rutas


def generar_audio(voces, duraciones, carpeta):
    total = sum(duraciones)
    musica = os.path.join(carpeta, "musica.wav")
    # Música ambiental espacial sintetizada (acorde grave con trémolo) + pulso
    expr = ("0.10*sin(2*PI*55*t)+0.07*sin(2*PI*82.4*t)*(0.6+0.4*sin(2*PI*0.25*t))"
            "+0.05*sin(2*PI*110*t)*(0.5+0.5*sin(2*PI*0.5*t))+0.04*sin(2*PI*164.8*t)*(0.5+0.5*sin(2*PI*0.125*t))"
            "+0.06*sin(2*PI*48*t)*exp(-8*mod(t\\,0.75))")
    subprocess.run(["ffmpeg", "-y", "-v", "error", "-f", "lavfi", "-i",
                    f"aevalsrc={expr}:s=44100:d={total:.2f}",
                    "-af", f"afade=in:d=1,afade=out:st={max(0, total - 1.5):.2f}:d=1.5,aecho=0.8:0.7:400:0.35",
                    musica], check=True)
    pistas = [(r, sum(duraciones[:i])) for i, r in enumerate(voces) if r]
    if not pistas:
        return musica
    salida = os.path.join(carpeta, "audio.wav")
    cmd = ["ffmpeg", "-y", "-v", "error", "-i", musica]
    filtros, etiquetas = [], ["[0]"]
    for k, (r, ini) in enumerate(pistas, start=1):
        cmd += ["-i", r]
        ms = int(ini * 1000) + 150
        filtros.append(f"[{k}]adelay={ms}|{ms},volume=1.6[v{k}]")
        etiquetas.append(f"[v{k}]")
    filtros.append("".join(etiquetas) + f"amix=inputs={len(etiquetas)}:normalize=0[a]")
    cmd += ["-filter_complex", ";".join(filtros), "-map", "[a]", salida]
    subprocess.run(cmd, check=True)
    return salida


# ---------------------------------------------------------------- principal


def main():
    ap = argparse.ArgumentParser(description="Genera un video 'Llena la nave'")
    ap.add_argument("--config", default=os.path.join(BASE, "config.json"))
    ap.add_argument("--seguidores", type=int, help="seguidores actuales (cápsulas ocupadas)")
    ap.add_argument("--nombres", help="nombres separados por coma para agregar como tripulantes")
    ap.add_argument("--sin-voz", action="store_true")
    ap.add_argument("--rapido", action="store_true", help="vista previa en 540x960")
    ap.add_argument("--salida", default=None)
    a = ap.parse_args()

    if not shutil.which("ffmpeg"):
        sys.exit("Falta ffmpeg. Ejecuta primero instalar.sh / instalar.bat")

    with open(a.config, encoding="utf-8") as fh:
        cfg = json.load(fh)
    if a.seguidores is not None:
        cfg["seguidores_actuales"] = a.seguidores
    if a.nombres:
        nuevos = [n.strip() for n in a.nombres.split(",") if n.strip()]
        cfg["tripulantes"] = list(dict.fromkeys(cfg.get("tripulantes", []) + nuevos))
    if a.seguidores is not None or a.nombres:
        with open(a.config, "w", encoding="utf-8") as fh:
            json.dump(cfg, fh, ensure_ascii=False, indent=2)

    W, H = (540, 960) if a.rapido else (1080, 1920)
    L = Lienzo(W, H, cfg)
    ocupadas = min(cfg["seguidores_actuales"], cfg["capacidad"])
    salida = a.salida or os.path.join(BASE, "salida", f"nave_{ocupadas}_de_{cfg['capacidad']}.mp4")
    os.makedirs(os.path.dirname(salida), exist_ok=True)

    tmp = tempfile.mkdtemp(prefix="nave_")
    try:
        print("1/3 Narración...")
        voces = generar_voces(cfg, tmp, cfg.get("narracion", True) and not a.sin_voz)
        duraciones = []
        for i, esc in enumerate(cfg["escenas"]):
            base = esc.get("duracion", 2.2 + 0.28 * len(texto_limpio(esc["texto"]).split()))
            if voces[i]:
                base = max(base, duracion_audio(voces[i]) + 0.6)
            duraciones.append(base)
        audio = generar_audio(voces, duraciones, tmp)

        print(f"2/3 Dibujando {int(sum(duraciones) * FPS)} cuadros ({W}x{H})...")
        video_mudo = os.path.join(tmp, "video.mp4")
        ff = subprocess.Popen(["ffmpeg", "-y", "-v", "error", "-f", "rawvideo", "-pix_fmt", "rgb24",
                               "-s", f"{W}x{H}", "-r", str(FPS), "-i", "-", "-c:v", "libx264",
                               "-preset", "veryfast" if a.rapido else "medium", "-crf", "20",
                               "-pix_fmt", "yuv420p", video_mudo], stdin=subprocess.PIPE)
        for i, esc in enumerate(cfg["escenas"]):
            fn = ESCENAS[esc["tipo"]]
            dur = duraciones[i]
            n = int(dur * FPS)
            extra = {"meta": esc["meta"]} if esc["tipo"] == "meta" and "meta" in esc else {}
            for k in range(n):
                t = k / FPS
                fr = fn(L, t, dur, cfg, ocupadas, **extra)
                L.subtitulo(fr, esc["texto"], t / max(0.1, dur * 0.7))
                L.marca_agua(fr)
                # fundido corto entre escenas
                if k < 4:
                    fr = Image.blend(Image.new("RGB", (W, H)), fr, (k + 1) / 5)
                ff.stdin.write(fr.convert("RGB").tobytes())
            print(f"   escena {i + 1}/{len(cfg['escenas'])} ({esc['tipo']}) lista")
        ff.stdin.close()
        ff.wait()

        print("3/3 Uniendo audio y video...")
        subprocess.run(["ffmpeg", "-y", "-v", "error", "-i", video_mudo, "-i", audio, "-c:v", "copy",
                        "-c:a", "aac", "-b:a", "160k", "-shortest", "-movflags", "+faststart", salida], check=True)
    finally:
        shutil.rmtree(tmp, ignore_errors=True)

    # Texto sugerido para publicar
    falta = max(0, cfg["capacidad"] - ocupadas)
    texto = (f"🚀 Llevamos {miles(ocupadas)} / {miles(cfg['capacidad'])} tripulantes a bordo. "
             f"¡Faltan {miles(falta)} para despegar!\n\n"
             "👉 Síguenos para ocupar tu cápsula\n"
             "💬 Comenta tu nombre y lo pongo en la nave en el próximo video\n\n"
             "#llenalanave #nave #espacio #reto #comunidad #fyp #parati")
    with open(os.path.splitext(salida)[0] + "_descripcion.txt", "w", encoding="utf-8") as fh:
        fh.write(texto + "\n")
    print(f"\n✅ Video listo: {salida}")
    print(f"   Descripción sugerida: {os.path.splitext(salida)[0]}_descripcion.txt")


if __name__ == "__main__":
    main()
