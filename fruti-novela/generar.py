#!/usr/bin/env python3
"""
Fruti Novela - generador de videos verticales (9:16) estilo telenovela de frutas.

Uso:
    python generar.py ejemplo/guion.txt
    python generar.py ejemplo/guion.txt -o mi_video.mp4

Formato del guion (ver ejemplo/guion.txt):
    TITULO: La Fresa Traicionada
    MUSICA: musica/drama.mp3            (opcional, musica de fondo)

    @Fresa = personajes/fresa.png | es-MX-DaliaNeural | +5Hz | +0%
    @Platano = personajes/platano.png | es-MX-JorgeNeural | -5Hz | +0%

    Fresa: Hola mi amor...
    !Fresa: ¡¿CÓMO PUDISTE?!                  <- "!" = zoom dramático
    Platano (escenas/clip1.mp4): Yo... te lo puedo explicar.   <- imagen/video solo para esa línea
    NARRADOR: Mientras tanto, en la cocina...  <- usa la voz @NARRADOR si existe
    PAUSA 1.5                                  <- silencio de 1.5 s (imagen anterior)

Las rutas son relativas al archivo del guion.
Si falta una imagen, se dibuja una fruta de ejemplo para que puedas probar.
"""
import argparse
import asyncio
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile

from PIL import Image, ImageDraw, ImageFont

W, H, FPS = 1080, 1920, 30
VIDEO_EXT = {".mp4", ".mov", ".webm", ".mkv", ".avi"}

FONT_CANDIDATES = [
    "C:/Windows/Fonts/impact.ttf",
    "C:/Windows/Fonts/arialbd.ttf",
    "/System/Library/Fonts/Supplemental/Impact.ttf",
    "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
    "/Library/Fonts/Arial Bold.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    "/usr/share/fonts/TTF/DejaVuSans-Bold.ttf",
]


def font(size):
    for f in FONT_CANDIDATES:
        if os.path.exists(f):
            return ImageFont.truetype(f, size)
    return ImageFont.load_default(size)


def run(cmd):
    r = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    if r.returncode != 0:
        sys.exit("Error ejecutando:\n  " + " ".join(cmd) + "\n" + r.stderr[-2000:])
    return r.stdout


def duration(path):
    out = run(["ffprobe", "-v", "error", "-show_entries", "format=duration",
               "-of", "json", path])
    return float(json.loads(out)["format"]["duration"])


# ---------------------------------------------------------------- guion
def parse(guion_path):
    base = os.path.dirname(os.path.abspath(guion_path))
    meta, chars, lines = {}, {}, []
    with open(guion_path, encoding="utf-8") as fh:
        for n, raw in enumerate(fh, 1):
            line = raw.strip()
            if not line or line.startswith("#"):
                continue
            m = re.match(r"^(TITULO|MUSICA|VOLUMEN_MUSICA)\s*:\s*(.+)$", line, re.I)
            if m:
                meta[m.group(1).upper()] = m.group(2).strip()
                continue
            if line.startswith("@"):
                name, _, rest = line[1:].partition("=")
                parts = [p.strip() for p in rest.split("|")]
                parts += [""] * (4 - len(parts))
                chars[name.strip().lower()] = {
                    "name": name.strip(),
                    "img": os.path.join(base, parts[0]) if parts[0] else "",
                    "voice": parts[1] or "es-MX-DaliaNeural",
                    "pitch": parts[2] or "+0Hz",
                    "rate": parts[3] or "+0%",
                }
                continue
            m = re.match(r"^PAUSA\s+([\d.]+)$", line, re.I)
            if m:
                lines.append({"pause": float(m.group(1))})
                continue
            m = re.match(r"^(!?)\s*([^:(]+?)\s*(?:\(([^)]+)\))?\s*:\s*(.+)$", line)
            if not m:
                print(f"[aviso] línea {n} ignorada: {line}")
                continue
            dramatic, who, media, text = m.groups()
            lines.append({
                "who": who.strip(),
                "media": os.path.join(base, media.strip()) if media else "",
                "text": text.strip(),
                "dramatic": bool(dramatic),
            })
    if "MUSICA" in meta:
        meta["MUSICA"] = os.path.join(base, meta["MUSICA"])
    return meta, chars, lines


# ---------------------------------------------------------------- voz
async def _tts(text, voice, pitch, rate, out):
    import edge_tts
    await edge_tts.Communicate(text, voice, pitch=pitch, rate=rate).save(out)


def tts(text, ch, out):
    try:
        asyncio.run(_tts(text, ch["voice"], ch["pitch"], ch["rate"], out))
        if os.path.getsize(out) > 0:
            return out
    except Exception as e:  # sin internet / sin edge-tts
        print(f"[aviso] voz no disponible ({type(e).__name__}); uso silencio.")
    secs = max(1.5, len(text.split()) * 0.38)
    run(["ffmpeg", "-y", "-v", "error", "-f", "lavfi", "-t", f"{secs:.2f}",
         "-i", "anullsrc=r=24000:cl=mono", out])
    return out


# ---------------------------------------------------------------- gráficos
PALETTE = {"fresa": (220, 30, 60), "platano": (245, 210, 50), "plátano": (245, 210, 50),
           "naranja": (250, 140, 20), "uva": (120, 40, 160), "manzana": (200, 20, 30),
           "pera": (170, 200, 60), "limon": (230, 240, 60), "limón": (230, 240, 60),
           "sandia": (60, 160, 70), "sandía": (60, 160, 70), "pina": (240, 190, 40),
           "piña": (240, 190, 40), "kiwi": (120, 90, 40), "cereza": (170, 0, 30)}


def placeholder(name, path):
    """Dibuja una fruta caricatura para probar sin imágenes reales."""
    color = PALETTE.get(name.lower(), (240, 120, 120))
    img = Image.new("RGB", (W, H))
    d = ImageDraw.Draw(img)
    for y in range(H):  # fondo degradado tipo set de telenovela
        t = y / H
        d.line([(0, y), (W, y)], fill=(int(60 + 80 * t), int(20 + 30 * t), int(50 + 40 * t)))
    cx, cy, r = W // 2, H // 2 - 80, 360
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=color, outline=(30, 10, 10), width=10)
    d.polygon([(cx - 60, cy - r + 20), (cx, cy - r - 120), (cx + 60, cy - r + 20)], fill=(40, 140, 40))
    for ex in (cx - 130, cx + 130):
        d.ellipse([ex - 70, cy - 120, ex + 70, cy + 20], fill="white", outline="black", width=6)
        d.ellipse([ex - 28, cy - 70, ex + 28, cy - 14], fill="black")
    d.arc([cx - 120, cy + 60, cx + 120, cy + 200], 200, 340, fill="black", width=12)
    img.save(path)
    return path


def wrap(text, fnt, maxw, draw):
    words, rows, cur = text.split(), [], ""
    for w in words:
        test = (cur + " " + w).strip()
        if draw.textlength(test, font=fnt) <= maxw:
            cur = test
        else:
            if cur:
                rows.append(cur)
            cur = w
    if cur:
        rows.append(cur)
    return rows


def overlay(name, text, title, path):
    """PNG transparente con nombre del personaje + subtítulo estilo novela."""
    img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    if title:
        f = font(64)
        tw = d.textlength(title, font=f)
        d.text(((W - tw) / 2, 120), title, font=f, fill=(255, 220, 90),
               stroke_width=6, stroke_fill="black")
    fs = font(70)
    rows = wrap(text, fs, W - 140, d)
    lh = 86
    top = H - 380 - lh * len(rows)
    if name:
        fn = font(54)
        nw = d.textlength(name.upper(), font=fn)
        d.rounded_rectangle([60, top - 100, 60 + nw + 50, top - 20], 20, fill=(200, 20, 60, 230))
        d.text((85, top - 92), name.upper(), font=fn, fill="white")
    for i, row in enumerate(rows):
        rw = d.textlength(row, font=fs)
        d.text(((W - rw) / 2, top + i * lh), row, font=fs, fill="white",
               stroke_width=7, stroke_fill="black")
    img.save(path)
    return path


# ---------------------------------------------------------------- clips
def make_clip(media, audio, ov, dur, dramatic, out):
    frames = int(dur * FPS) + 1
    cover = f"scale={W}:{H}:force_original_aspect_ratio=increase,crop={W}:{H}"
    if os.path.splitext(media)[1].lower() in VIDEO_EXT:
        src = ["-stream_loop", "-1", "-i", media]
        base = f"[0:v]{cover},fps={FPS},setsar=1[bg]"
    else:
        src = ["-loop", "1", "-i", media]
        speed, zmax = ("0.006", "1.45") if dramatic else ("0.0007", "1.15")
        base = (f"[0:v]scale={W*2}:{H*2}:force_original_aspect_ratio=increase,crop={W*2}:{H*2},"
                f"zoompan=z='min(zoom+{speed},{zmax})':d={frames}:"
                f"x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s={W}x{H}:fps={FPS},setsar=1[bg]")
    if dramatic:  # tinte rojo + viñeta para el momento dramático
        base = base.replace("[bg]", ",eq=saturation=1.4:contrast=1.15,vignette=PI/4[bg]")
    fc = f"{base};[bg][1:v]overlay=0:0,format=yuv420p[v]"
    run(["ffmpeg", "-y", "-v", "error", *src, "-i", ov, "-i", audio,
         "-filter_complex", fc, "-map", "[v]", "-map", "2:a",
         "-t", f"{dur:.3f}", "-c:v", "libx264", "-preset", "veryfast", "-crf", "20",
         "-c:a", "aac", "-ar", "44100", "-ac", "2", "-b:a", "160k", out])


def main():
    ap = argparse.ArgumentParser(description="Genera una Fruti Novela a partir de un guion.")
    ap.add_argument("guion")
    ap.add_argument("-o", "--salida", default=None)
    args = ap.parse_args()
    for tool in ("ffmpeg", "ffprobe"):
        if not shutil.which(tool):
            sys.exit(f"No encuentro {tool}. Ejecuta instalar.bat / instalar.sh primero.")

    meta, chars, lines = parse(args.guion)
    out = args.salida or os.path.splitext(args.guion)[0] + ".mp4"
    tmp = tempfile.mkdtemp(prefix="fruti_")
    clips, last_media, title = [], None, meta.get("TITULO", "")
    try:
        for i, ln in enumerate(lines):
            if "pause" in ln:
                if not last_media:
                    continue
                aud = os.path.join(tmp, f"a{i}.m4a")
                run(["ffmpeg", "-y", "-v", "error", "-f", "lavfi", "-t", str(ln["pause"]),
                     "-i", "anullsrc=r=24000:cl=mono", aud])
                ov = overlay("", "", title if i == 0 else "", os.path.join(tmp, f"o{i}.png"))
                media, dramatic, dur = last_media, False, ln["pause"]
            else:
                key = ln["who"].lower()
                ch = chars.get(key) or {"name": ln["who"], "img": "", "voice": "es-MX-DaliaNeural",
                                        "pitch": "+0Hz", "rate": "+0%"}
                media = ln["media"] or ch["img"]
                if not media or not os.path.exists(media):
                    if ln["media"] or ch["img"]:
                        print(f"[aviso] no existe {media}; dibujo una fruta de ejemplo.")
                    media = placeholder(ch["name"], os.path.join(tmp, f"ph_{key}.png"))
                print(f"[{i+1}/{len(lines)}] {ch['name']}: {ln['text']}")
                aud = tts(ln["text"], ch, os.path.join(tmp, f"a{i}.mp3"))
                show_name = "" if key == "narrador" else ch["name"]
                ov = overlay(show_name, ln["text"], title if not clips else "",
                             os.path.join(tmp, f"o{i}.png"))
                dramatic = ln["dramatic"]
                dur = duration(aud) + 0.35
            clip = os.path.join(tmp, f"c{i:04d}.mp4")
            make_clip(media, aud, ov, dur, dramatic, clip)
            clips.append(clip)
            last_media = media

        if not clips:
            sys.exit("El guion no tiene líneas de diálogo.")
        lst = os.path.join(tmp, "lista.txt")
        with open(lst, "w", encoding="utf-8") as fh:
            fh.writelines(f"file '{c}'\n" for c in clips)
        joined = os.path.join(tmp, "unido.mp4")
        run(["ffmpeg", "-y", "-v", "error", "-f", "concat", "-safe", "0", "-i", lst,
             "-c", "copy", joined])

        music = meta.get("MUSICA")
        if music and os.path.exists(music):
            vol = meta.get("VOLUMEN_MUSICA", "0.18")
            run(["ffmpeg", "-y", "-v", "error", "-i", joined, "-stream_loop", "-1", "-i", music,
                 "-filter_complex",
                 f"[1:a]volume={vol}[m];[0:a][m]amix=inputs=2:duration=first:dropout_transition=0[a]",
                 "-map", "0:v", "-map", "[a]", "-c:v", "copy", "-c:a", "aac", "-b:a", "192k",
                 "-shortest", out])
        else:
            if music:
                print(f"[aviso] no existe la música {music}; video sin música.")
            shutil.copy(joined, out)
        print(f"\n✅ Video listo: {out}  ({duration(out):.1f} s)")
    finally:
        shutil.rmtree(tmp, ignore_errors=True)


if __name__ == "__main__":
    main()
