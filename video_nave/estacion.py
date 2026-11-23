#!/usr/bin/env python3
"""
Video "La estación de las 1.000 ventanas" sincronizado con TU audio narrado.

    python3 estacion.py                          # usa estacion.json
    python3 estacion.py --audio mi_voz.mp3 --suscriptores 152
    python3 estacion.py --rapido                 # vista previa 540x960

El script detecta las pausas del audio y asigna una frase de `lineas` a cada tramo hablado,
así los subtítulos y las escenas quedan sincronizados con la voz.
"""
import argparse
import json
import math
import os
import random
import re
import shutil
import subprocess
import sys
import tempfile

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

from generar_video import AMARILLO, BLANCO, FPS, Lienzo, duracion_audio, fuente, miles, suave, texto_limpio

BASE = os.path.dirname(os.path.abspath(__file__))
CALIDA = (255, 196, 90)
APAGADA = (30, 40, 62)
COLA = 1.6  # segundos extra al final


# ---------------------------------------------------------------- sincronización con el audio


def tramos_de_voz(ruta, total):
    out = subprocess.run(["ffmpeg", "-i", ruta, "-af", "silencedetect=noise=-35dB:d=0.3", "-f", "null", "-"],
                         capture_output=True, text=True).stderr
    ini = [float(x) for x in re.findall(r"silence_start: ([\d.]+)", out)]
    fin = [float(x) for x in re.findall(r"silence_end: ([\d.]+)", out)]
    tramos, cursor = [], 0.0
    for a, b in zip(ini, fin + [total] * (len(ini) - len(fin))):
        if a - cursor > 0.15:
            tramos.append((cursor, a))
        cursor = b
    if total - cursor > 0.15:
        tramos.append((cursor, total))
    return tramos


def asignar_lineas(lineas, tramos, total):
    """Devuelve (inicio, fin) por línea."""
    if len(tramos) == len(lineas):
        return tramos
    # Si no coincide el número de pausas, reparte según la longitud del texto.
    pesos = [len(texto_limpio(l["texto"])) for l in lineas]
    inicio = tramos[0][0] if tramos else 0
    fin_voz = tramos[-1][1] if tramos else total
    acum, res = inicio, []
    for p in pesos:
        d = (fin_voz - inicio) * p / sum(pesos)
        res.append((acum, acum + d))
        acum += d
    return res


# ---------------------------------------------------------------- elementos


class Estacion:
    def __init__(self, L, capacidad):
        self.L, self.cap = L, capacidad
        s = L.s
        self.R = int(470 * s)
        lado = 2 * self.R + int(80 * s)
        self.lado = lado
        rnd = random.Random(5)
        # posiciones de las ventanas en 5 anillos concéntricos
        radios = [self.R * f for f in (0.80, 0.84, 0.88, 0.92, 0.96)]
        circ = sum(radios)
        self.ventanas = []
        for r in radios:
            n = round(capacidad * r / circ)
            for k in range(n):
                a = 2 * math.pi * (k + 0.5 * (radios.index(r) % 2)) / n
                self.ventanas.append((lado / 2 + r * math.cos(a), lado / 2 + r * math.sin(a)))
        self.ventanas = self.ventanas[:capacidad]
        while len(self.ventanas) < capacidad:
            self.ventanas.append(self.ventanas[-1])
        self.orden = list(range(capacidad))
        rnd.shuffle(self.orden)
        self.base = self._casco()
        self._cache = {}

    def _casco(self):
        s, R, lado = self.L.s, self.R, self.lado
        c = lado / 2
        img = Image.new("RGBA", (lado, lado), (0, 0, 0, 0))
        d = ImageDraw.Draw(img)
        # radios (brazos) y núcleo
        for k in range(6):
            a = k * math.pi / 3
            d.line([(c, c), (c + R * 0.76 * math.cos(a), c + R * 0.76 * math.sin(a))], fill=(150, 160, 185),
                   width=int(26 * s))
        d.ellipse([c - R * 0.22, c - R * 0.22, c + R * 0.22, c + R * 0.22], fill=(200, 208, 228),
                  outline=(110, 120, 150), width=int(6 * s))
        d.ellipse([c - R * 0.1, c - R * 0.1, c + R * 0.1, c + R * 0.1], fill=(60, 140, 230))
        # anillo
        d.ellipse([c - R, c - R, c + R, c + R], fill=(205, 212, 230))
        d.ellipse([c - R * 0.76, c - R * 0.76, c + R * 0.76, c + R * 0.76], fill=(0, 0, 0, 0))
        d.ellipse([c - R, c - R, c + R, c + R], outline=(120, 130, 160), width=int(6 * s))
        d.ellipse([c - R * 0.76, c - R * 0.76, c + R * 0.76, c + R * 0.76], outline=(120, 130, 160), width=int(6 * s))
        # rehacer el hueco central con los brazos visibles
        hueco = Image.new("L", (lado, lado), 0)
        ImageDraw.Draw(hueco).ellipse([c - R * 0.76, c - R * 0.76, c + R * 0.76, c + R * 0.76], fill=255)
        brazos = Image.new("RGBA", (lado, lado), (0, 0, 0, 0))
        db = ImageDraw.Draw(brazos)
        for k in range(6):
            a = k * math.pi / 3
            db.line([(c, c), (c + R * 0.78 * math.cos(a), c + R * 0.78 * math.sin(a))], fill=(150, 160, 185),
                    width=int(26 * s))
        db.ellipse([c - R * 0.22, c - R * 0.22, c + R * 0.22, c + R * 0.22], fill=(200, 208, 228),
                   outline=(110, 120, 150), width=int(6 * s))
        db.ellipse([c - R * 0.1, c - R * 0.1, c + R * 0.1, c + R * 0.1], fill=(60, 140, 230))
        transparente = Image.new("RGBA", (lado, lado), (0, 0, 0, 0))
        img.paste(transparente, (0, 0), hueco)
        img.alpha_composite(brazos)
        # paneles
        for k in range(24):
            a = k * math.pi / 12
            d.line([(c + R * 0.76 * math.cos(a), c + R * 0.76 * math.sin(a)), (c + R * math.cos(a), c + R * math.sin(a))],
                   fill=(165, 172, 195), width=int(3 * s))
        return img

    def imagen(self, encendidas):
        encendidas = max(0, min(self.cap, int(encendidas)))
        if encendidas in self._cache:
            return self._cache[encendidas]
        s = self.L.s
        img = self.base.copy()
        brillo = Image.new("RGBA", img.size, (0, 0, 0, 0))
        d, db = ImageDraw.Draw(img), ImageDraw.Draw(brillo)
        on = set(self.orden[:encendidas])
        r = 5.2 * s
        for i, (x, y) in enumerate(self.ventanas):
            if i in on:
                d.ellipse([x - r, y - r, x + r, y + r], fill=CALIDA)
                db.ellipse([x - 3 * r, y - 3 * r, x + 3 * r, y + 3 * r], fill=(255, 170, 60, 110))
            else:
                d.ellipse([x - r, y - r, x + r, y + r], fill=APAGADA)
        if encendidas:
            img = Image.alpha_composite(brillo.filter(ImageFilter.GaussianBlur(6 * s)), img)
        if len(self._cache) > 40:
            self._cache.clear()
        self._cache[encendidas] = img
        return img

    def pegar(self, frame, encendidas, cx, cy, escala, angulo, inclinacion=0.5):
        im = self.imagen(encendidas).rotate(angulo, resample=Image.BILINEAR)
        w = max(2, int(im.width * escala))
        h = max(2, int(im.height * escala * inclinacion))
        im = im.resize((w, h), Image.BILINEAR)
        frame.alpha_composite(im, (int(cx - w / 2), int(cy - h / 2))) if frame.mode == "RGBA" else \
            frame.paste(im, (int(cx - w / 2), int(cy - h / 2)), im)


def dibujar_planeta(L, cache={}):
    clave = L.W
    if clave in cache:
        return cache[clave]
    s = L.s
    R = int(900 * s)
    img = Image.new("RGBA", (2 * R + int(120 * s), 2 * R + int(120 * s)), (0, 0, 0, 0))
    c = img.width / 2
    halo = Image.new("RGBA", img.size, (0, 0, 0, 0))
    ImageDraw.Draw(halo).ellipse([c - R - 40 * s, c - R - 40 * s, c + R + 40 * s, c + R + 40 * s], fill=(90, 170, 255, 160))
    img.alpha_composite(halo.filter(ImageFilter.GaussianBlur(30 * s)))
    d = ImageDraw.Draw(img)
    d.ellipse([c - R, c - R, c + R, c + R], fill=(28, 90, 170))
    rnd = random.Random(2)
    for _ in range(40):  # continentes
        x, y = c + (rnd.random() - 0.5) * 1.4 * R, c + (rnd.random() - 0.5) * 1.4 * R
        if (x - c) ** 2 + (y - c) ** 2 > (0.9 * R) ** 2:
            continue
        rr = (40 + rnd.random() * 130) * s
        d.ellipse([x - rr, y - rr * 0.6, x + rr, y + rr * 0.6], fill=(40, 130, 90))
    for _ in range(25):  # nubes
        x, y = c + (rnd.random() - 0.5) * 1.6 * R, c + (rnd.random() - 0.5) * 1.6 * R
        if (x - c) ** 2 + (y - c) ** 2 > (0.92 * R) ** 2:
            continue
        rr = (50 + rnd.random() * 120) * s
        d.ellipse([x - rr, y - rr * 0.25, x + rr, y + rr * 0.25], fill=(235, 240, 250, 150))
    # sombra (lado nocturno)
    sombra = Image.new("RGBA", img.size, (0, 0, 0, 0))
    ImageDraw.Draw(sombra).ellipse([c - R * 0.7, c - R * 1.3, c + R * 1.5, c + R * 0.9], fill=(0, 0, 20, 150))
    mascara = Image.new("L", img.size, 0)
    ImageDraw.Draw(mascara).ellipse([c - R, c - R, c + R, c + R], fill=255)
    sombra = sombra.filter(ImageFilter.GaussianBlur(80 * s))
    sombra.putalpha(Image.fromarray(np.minimum(np.array(sombra.getchannel("A")), np.array(mascara))))
    img.alpha_composite(sombra)
    cache[clave] = img
    return img


def pegar_planeta(L, frame, cy, escala=1.0):
    p = dibujar_planeta(L)
    if escala != 1.0:
        p = p.resize((max(2, int(p.width * escala)), max(2, int(p.height * escala))), Image.BILINEAR)
    frame.alpha_composite(p, (int(L.W / 2 - p.width / 2), int(cy - p.height / 2)))


def fondo(L, t, deriva=20):
    return L.fondo_espacio(t, deriva).convert("RGBA")


def ventana_redonda(d, cx, cy, r, s, encendida, tu=False, alfa=255):
    d.ellipse([cx - r * 1.28, cy - r * 1.28, cx + r * 1.28, cy + r * 1.28], fill=(150, 158, 178, alfa),
              outline=(80, 86, 104, alfa), width=max(1, int(r * 0.06)))
    for k in range(8):
        a = k * math.pi / 4
        bx, by, br = cx + r * 1.14 * math.cos(a), cy + r * 1.14 * math.sin(a), r * 0.06
        d.ellipse([bx - br, by - br, bx + br, by + br], fill=(90, 96, 115, alfa))
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(*(CALIDA if encendida else APAGADA), alfa),
              outline=(60, 64, 80, alfa), width=max(1, int(r * 0.08)))
    if encendida:
        # reflejo
        d.arc([cx - r * 0.75, cy - r * 0.75, cx + r * 0.75, cy + r * 0.75], 200, 260, fill=(255, 245, 220, alfa),
              width=max(1, int(r * 0.08)))
    if tu:
        # silueta de una persona
        d.ellipse([cx - r * 0.2, cy - r * 0.55, cx + r * 0.2, cy - r * 0.15], fill=(120, 60, 10))
        d.chord([cx - r * 0.45, cy - r * 0.1, cx + r * 0.45, cy + r * 0.9], 180, 360, fill=(120, 60, 10))
        d.rectangle([cx - r * 0.45, cy + r * 0.4, cx + r * 0.45, cy + r * 0.75], fill=(120, 60, 10))


# ---------------------------------------------------------------- escenas  (t = segundos dentro de la escena)


def esc_estacion_zoom(V, t, dur):
    L = V.L
    fr = fondo(L, t)
    pegar_planeta(L, fr, L.H * 1.15)
    k = suave(t / dur)
    V.est.pegar(fr, V.ocupadas, L.W / 2, L.H * 0.6, 3.2 - 2.2 * k, t * 6, 0.9 - 0.4 * k)
    return fr


def esc_estacion(V, t, dur):
    L = V.L
    fr = fondo(L, t + 3)
    pegar_planeta(L, fr, L.H * 1.15)
    V.est.pegar(fr, V.ocupadas, L.W / 2, L.H * 0.6 + 10 * L.s * math.sin(t * 1.5), 1.0, 18 + t * 6, 0.5)
    L.marcador(fr, L.W / 2, L.H * 0.80, "VENTANAS ENCENDIDAS", V.ocupadas, V.cap)
    return fr


def esc_pasillo(V, t, dur):
    L = V.L
    W, H, s = L.W, L.H, L.s
    fr = Image.new("RGBA", (W, H), (5, 8, 16, 255))
    d = ImageDraw.Draw(fr, "RGBA")
    cx, cy = W / 2, H * 0.56
    avance = t * 1.4
    parpadeo = 0.55 + 0.45 * (1 if (int(t * 7) % 9) else 0.2)  # luz que falla: nadie a bordo
    for i in range(30, 0, -1):
        z = i - (avance % 1.0)
        if z <= 0.25:
            continue
        k = 1.0 / z
        alfa = int(255 * min(1, 2.2 * k) * parpadeo)
        hw, hh = W * 0.85 * k, H * 0.40 * k
        # aro del pasillo
        d.rounded_rectangle([cx - hw, cy - hh, cx + hw, cy + hh], radius=int(hw * 0.35), outline=(110, 125, 160, alfa),
                            width=max(1, int(14 * k * s * 2)))
        # ventanas redondas apagadas en las paredes
        for lado in (-1, 1):
            ventana_redonda(d, cx + lado * hw * 0.78, cy - hh * 0.15, hw * 0.12, s, False, alfa=alfa)
        # franja de luz del suelo
        d.rectangle([cx - 40 * k * s * 2, cy + hh * 0.92, cx + 40 * k * s * 2, cy + hh * 0.97],
                    fill=(80, 160, 255, alfa))
    return fr


def esc_casco(V, t, dur):
    L = V.L
    W, H, s = L.W, L.H, L.s
    fr = Image.new("RGBA", (W, H), (60, 66, 84, 255))
    d = ImageDraw.Draw(fr, "RGBA")
    # placas del casco
    for y in range(0, H, int(240 * s)):
        d.line([(0, y + (t * 40 * s) % (240 * s)), (W, y + (t * 40 * s) % (240 * s))], fill=(48, 52, 68), width=int(4 * s))
    r = 70 * s
    paso_x, paso_y = 250 * s, 250 * s
    rnd = random.Random(9)
    posiciones = []
    for f in range(-1, 9):
        for c in range(5):
            x = W / 2 + (c - 2) * paso_x + (paso_x / 2 if f % 2 else 0)
            y = H * 0.3 + f * paso_y - (t * 40 * s) % paso_y + 0 * paso_y
            posiciones.append((x, y, rnd.random()))
    # se encienden una por una, cada vez más rápido
    progreso = suave(t / (dur * 0.9))
    for x, y, umbral in posiciones:
        on = umbral < 0.05 + 0.75 * progreso
        recien = on and umbral > 0.05 + 0.75 * progreso - 0.06
        if recien:
            g = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        ventana_redonda(d, x, y, r, s, on)
        if recien:
            d.ellipse([x - r * 1.6, y - r * 1.6, x + r * 1.6, y + r * 1.6], outline=(255, 220, 140, 200),
                      width=int(6 * s))
    return fr


def esc_tu(V, t, dur):
    L = V.L
    W, H, s = L.W, L.H, L.s
    fr = Image.new("RGBA", (W, H), (55, 60, 78, 255))
    d = ImageDraw.Draw(fr, "RGBA")
    k = suave(t / (dur * 0.5))
    r = (90 + 260 * k) * s
    cx, cy = W / 2, H * 0.6
    # ventanas vecinas apagadas que se alejan
    for dx, dy in ((-1, -1), (1, -1), (-1, 1), (1, 1), (0, -2), (0, 2), (-2, 0), (2, 0)):
        ventana_redonda(d, cx + dx * r * 2.9, cy + dy * r * 2.9, r, s, False)
    encendida = t > dur * 0.35
    if encendida:
        g = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        ImageDraw.Draw(g).ellipse([cx - r * 2, cy - r * 2, cx + r * 2, cy + r * 2], fill=(255, 170, 60, 120))
        fr.alpha_composite(g.filter(ImageFilter.GaussianBlur(50 * s)))
        d = ImageDraw.Draw(fr, "RGBA")
    ventana_redonda(d, cx, cy, r, s, encendida, tu=encendida)
    if encendida:
        a = suave((t - dur * 0.35) / 0.4)
        d.text((cx, cy + r * 1.75), "TÚ", font=fuente(150 * s * (0.6 + 0.4 * a)), fill=(*AMARILLO, int(255 * a)),
               stroke_width=int(8 * s), stroke_fill=(0, 0, 0, int(255 * a)), anchor="mm")
    return fr


def llamas_motor(L, fr, x, y, largo, t, s):
    d = ImageDraw.Draw(fr, "RGBA")
    rnd = random.Random(int(t * 50))
    for _ in range(10):
        l = largo * (0.6 + rnd.random() * 0.6)
        a = (20 + rnd.random() * 20) * s
        d.polygon([(x - a, y), (x + a, y), (x + (rnd.random() - 0.5) * 20 * s, y + l)],
                  fill=(120, 190, 255, 150))
    d.ellipse([x - 22 * s, y - 10 * s, x + 22 * s, y + 25 * s], fill=(230, 245, 255, 230))


def esc_motores(V, t, dur):
    L = V.L
    s = L.s
    fr = fondo(L, t + 8)
    pegar_planeta(L, fr, L.H * 1.15)
    cx, cy = L.W / 2 + random.uniform(-1, 1) * 4 * s * suave(t / dur), L.H * 0.58
    fuerza = suave((t - 0.6) / 1.2)
    # motores bajo el anillo
    for dx in (-300, -100, 100, 300):
        x = cx + dx * s
        y = cy + 150 * s
        ImageDraw.Draw(fr).rectangle([x - 26 * s, y - 40 * s, x + 26 * s, y], fill=(120, 126, 150))
        if fuerza > 0:
            llamas_motor(L, fr, x, y, 200 * s * fuerza, t, s)
    V.est.pegar(fr, V.ocupadas, cx, cy, 1.0, 30 + t * 6, 0.5)
    L.marcador(fr, L.W / 2, L.H * 0.80, "META: TRIPULANTES", 100)
    return fr


def esc_orbita(V, t, dur):
    L = V.L
    s = L.s
    k = suave(t / dur)
    fr = fondo(L, t + 12, deriva=20 + 900 * k)
    pegar_planeta(L, fr, L.H * (1.15 + 0.5 * k), 1.0 - 0.4 * k)
    encendidas = V.ocupadas + (V.cap - V.ocupadas) * suave(t / (dur * 0.6))
    encendidas = int(encendidas / 40) * 40 if encendidas < V.cap else V.cap
    cy = L.H * 0.58 - k * L.H * 0.12
    for dx in (-300, -100, 100, 300):
        llamas_motor(L, fr, L.W / 2 + dx * s * (1 - 0.2 * k), cy + 150 * s, 320 * s, t, s)
    V.est.pegar(fr, encendidas, L.W / 2, cy, 1.0 - 0.2 * k, 40 + t * 10, 0.5)
    # contador fijo en la meta: no se muestran números falsos de suscriptores
    L.marcador(fr, L.W / 2, L.H * 0.80, "META FINAL", V.cap)
    return fr


def esc_radar(V, t, dur):
    L = V.L
    W, H, s = L.W, L.H, L.s
    fr = Image.new("RGBA", (W, H), (3, 14, 22, 255))
    d = ImageDraw.Draw(fr, "RGBA")
    cx, cy = W / 2, H * 0.6
    for x in range(0, W, int(60 * s)):
        d.line([(x, 0), (x, H)], fill=(20, 60, 70), width=1)
    for y in range(0, H, int(60 * s)):
        d.line([(0, y), (W, y)], fill=(20, 60, 70), width=1)
    for r in (150, 280, 410):
        d.ellipse([cx - r * s, cy - r * s, cx + r * s, cy + r * s], outline=(60, 220, 200, 150), width=int(3 * s))
    # barrido del radar
    a = t * 2.4
    for k in range(30):
        aa = a - k * 0.02
        d.line([(cx, cy), (cx + 440 * s * math.cos(aa), cy + 440 * s * math.sin(aa))],
               fill=(60, 255, 210, int(120 * (1 - k / 30))), width=int(4 * s))
    # destinos desconocidos
    for i, (r, ang) in enumerate(((150, 0.8), (280, 2.6), (410, 4.4), (410, 1.3))):
        px, py = cx + r * s * math.cos(ang + t * 0.2), cy + r * s * math.sin(ang + t * 0.2)
        aparece = suave((t - 0.3 * i) / 0.5)
        if aparece <= 0:
            continue
        d.ellipse([px - 26 * s, py - 26 * s, px + 26 * s, py + 26 * s], fill=(255, 200, 80, int(230 * aparece)))
        d.text((px, py), "?", font=fuente(36 * s), fill=(20, 20, 30, int(255 * aparece)), anchor="mm")
    # la estación en el centro
    d.ellipse([cx - 30 * s, cy - 30 * s, cx + 30 * s, cy + 30 * s], outline=(255, 255, 255), width=int(6 * s))
    d.text((cx, cy + 520 * s), "DESTINO: SIN DEFINIR", font=fuente(44 * s), fill=(60, 255, 210), anchor="mm")
    return fr


def planeta_icono(d, x, y, r, tipo, s):
    if tipo == "marte":
        d.ellipse([x - r, y - r, x + r, y + r], fill=(205, 90, 55))
        d.ellipse([x - r * 0.4, y - r * 0.2, x - r * 0.1, y + r * 0.1], fill=(160, 65, 40))
        d.ellipse([x + r * 0.2, y + r * 0.3, x + r * 0.5, y + r * 0.55], fill=(160, 65, 40))
    elif tipo == "saturno":
        d.ellipse([x - r * 1.8, y - r * 0.45, x + r * 1.8, y + r * 0.45], outline=(230, 210, 160), width=int(10 * s))
        d.ellipse([x - r, y - r, x + r, y + r], fill=(225, 190, 120))
        d.chord([x - r * 1.8, y - r * 0.45, x + r * 1.8, y + r * 0.45], 0, 180, outline=(230, 210, 160), width=int(10 * s))
        d.line([(x - r, y - r * 0.3), (x + r, y - r * 0.3)], fill=(200, 160, 100), width=int(6 * s))
    else:
        d.ellipse([x - r, y - r, x + r, y + r], fill=(120, 70, 200))
        d.text((x, y), "?", font=fuente(r * 1.2), fill=BLANCO, anchor="mm")


def esc_votacion(V, t, dur):
    L = V.L
    W, H, s = L.W, L.H, L.s
    fr = fondo(L, t + 20)
    d = ImageDraw.Draw(fr, "RGBA")
    opciones = (("marte", "MARTE"), ("saturno", "SATURNO"), ("misterio", "???"))
    for i, (tipo, nombre) in enumerate(opciones):
        a = suave((t - 0.25 * i) / 0.5)
        if a <= 0:
            continue
        x = W * (0.2 + 0.3 * i)
        y = H * 0.48 + 14 * s * math.sin(t * 2 + i)
        planeta_icono(d, x, y, 95 * s * a, tipo, s)
        d.text((x, y + 175 * s), nombre, font=fuente(46 * s), fill=BLANCO, stroke_width=int(5 * s),
               stroke_fill=(0, 0, 0), anchor="mm")
    # llamada a la acción con flecha hacia los comentarios
    if t > 1.2:
        a = suave((t - 1.2) / 0.4)
        pulso = 1 + 0.05 * math.sin(t * 7)
        w, h = 760 * s * pulso, 130 * s * pulso
        y = H * 0.74
        d.rounded_rectangle([W / 2 - w / 2, y - h / 2, W / 2 + w / 2, y + h / 2], radius=int(h / 2),
                            fill=(255, 196, 61, int(245 * a)))
        d.text((W / 2, y), "VOTA EN LOS COMENTARIOS", font=fuente(46 * s * pulso), fill=(20, 20, 30, int(255 * a)),
               anchor="mm")
        rebote = 20 * s * abs(math.sin(t * 5))
        ay = y + h / 2 + 60 * s + rebote
        d.polygon([(W / 2 - 50 * s, ay), (W / 2 + 50 * s, ay), (W / 2, ay + 70 * s)], fill=(255, 255, 255, int(230 * a)))
    return fr


ESCENAS = {
    "estacion_zoom": esc_estacion_zoom, "estacion": esc_estacion, "pasillo": esc_pasillo, "casco": esc_casco,
    "tu": esc_tu, "motores": esc_motores, "orbita": esc_orbita, "radar": esc_radar, "votacion": esc_votacion,
}


# ---------------------------------------------------------------- principal


class Video:
    pass


def musica_fondo(total, ruta):
    expr = ("0.10*sin(2*PI*55*t)+0.07*sin(2*PI*82.4*t)*(0.6+0.4*sin(2*PI*0.25*t))"
            "+0.05*sin(2*PI*110*t)*(0.5+0.5*sin(2*PI*0.5*t))+0.04*sin(2*PI*164.8*t)*(0.5+0.5*sin(2*PI*0.125*t))")
    subprocess.run(["ffmpeg", "-y", "-v", "error", "-f", "lavfi", "-i", f"aevalsrc={expr}:s=44100:d={total:.2f}",
                    "-af", f"afade=in:d=1.5,afade=out:st={max(0, total - 2):.2f}:d=2,aecho=0.8:0.7:500:0.4", ruta],
                   check=True)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--config", default=os.path.join(BASE, "estacion.json"))
    ap.add_argument("--audio")
    ap.add_argument("--suscriptores", type=int)
    ap.add_argument("--rapido", action="store_true")
    ap.add_argument("--salida")
    a = ap.parse_args()

    with open(a.config, encoding="utf-8") as fh:
        cfg = json.load(fh)
    audio = a.audio or os.path.join(BASE, cfg["audio"])
    if not os.path.exists(audio):
        sys.exit(f"No encuentro el audio: {audio}")
    if a.suscriptores is not None:
        cfg["suscriptores"] = a.suscriptores

    W, H = (540, 960) if a.rapido else (1080, 1920)
    V = Video()
    V.L = Lienzo(W, H, cfg)
    V.cap = cfg["capacidad"]
    V.ocupadas = min(cfg["suscriptores"], V.cap)
    V.est = Estacion(V.L, V.cap)

    dur_voz = duracion_audio(audio)
    total = dur_voz + COLA
    lineas = cfg["lineas"]
    tiempos = asignar_lineas(lineas, tramos_de_voz(audio, dur_voz), dur_voz)
    # escenas: empiezan en la primera línea que las declara
    escenas, actual = [], None
    for l, (ini, fin) in zip(lineas, tiempos):
        if l.get("escena"):
            escenas.append([l["escena"], ini if escenas else 0.0])
    for i in range(len(escenas)):
        escenas[i].append(escenas[i + 1][1] if i + 1 < len(escenas) else total)
    print("Sincronización:")
    for l, (ini, fin) in zip(lineas, tiempos):
        print(f"  {ini:5.2f}-{fin:5.2f}  {texto_limpio(l['texto'])}")

    salida = a.salida or os.path.join(BASE, "salida", "estacion_1000_ventanas.mp4")
    os.makedirs(os.path.dirname(salida), exist_ok=True)
    tmp = tempfile.mkdtemp(prefix="estacion_")
    try:
        video = os.path.join(tmp, "v.mp4")
        ff = subprocess.Popen(["ffmpeg", "-y", "-v", "error", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}",
                               "-r", str(FPS), "-i", "-", "-c:v", "libx264", "-preset",
                               "veryfast" if a.rapido else "medium", "-crf", "19", "-pix_fmt", "yuv420p", video],
                              stdin=subprocess.PIPE)
        n = int(total * FPS)
        for k in range(n):
            t = k / FPS
            nombre, ini, fin = next(e for e in escenas if e[1] <= t < e[2]) if t < escenas[-1][2] else escenas[-1]
            fr = ESCENAS[nombre](V, t - ini, fin - ini)
            # subtítulo de la frase que se está diciendo (se queda hasta la siguiente)
            idx = max([i for i, (a0, _) in enumerate(tiempos) if a0 <= t + 0.05] or [0])
            a0, a1 = tiempos[idx]
            fr = fr.convert("RGB")
            V.L.subtitulo(fr, lineas[idx]["texto"], (t - a0) / max(0.2, (a1 - a0) * 0.85))
            V.L.marca_agua(fr)
            if t - ini < 0.12 and ini > 0:  # destello suave al cambiar de escena
                fr = Image.blend(fr, Image.new("RGB", (W, H), (255, 255, 255)), 0.25 * (1 - (t - ini) / 0.12))
            if t > total - 0.6:
                fr = Image.blend(fr, Image.new("RGB", (W, H)), (t - (total - 0.6)) / 0.6)
            ff.stdin.write(fr.tobytes())
            if k % (FPS * 5) == 0:
                print(f"  {t:4.1f}s / {total:.1f}s")
        ff.stdin.close()
        ff.wait()

        musica = os.path.join(tmp, "m.wav")
        musica_fondo(total, musica)
        subprocess.run(["ffmpeg", "-y", "-v", "error", "-i", video, "-i", audio, "-i", musica, "-filter_complex",
                        "[1]apad[v];[2]volume=0.35[m];[v][m]amix=inputs=2:duration=longest:normalize=0[a]",
                        "-map", "0:v", "-map", "[a]", "-c:v", "copy", "-c:a", "aac", "-b:a", "192k",
                        "-t", f"{total:.2f}", "-movflags", "+faststart", salida], check=True)
    finally:
        shutil.rmtree(tmp, ignore_errors=True)
    print(f"\n✅ Video listo: {salida}  ({total:.1f} s)")


if __name__ == "__main__":
    main()
