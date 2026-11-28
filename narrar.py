#!/usr/bin/env python3
"""Narración en español con Microsoft Edge TTS (es-MX-JorgeNeural).

Uso:
    .venv/bin/python narrar.py "Texto a narrar" [carpeta_salida]
    .venv/bin/python narrar.py -f guion.txt [carpeta_salida]

Genera en la carpeta de salida (por defecto ./narracion):
    narracion.mp3        audio original de Edge TTS
    narracion_48k.wav    copia WAV 48 kHz, highpass 70 Hz, normalizada a -14 LUFS (loudnorm en 2 pasadas)
    palabras.json        tiempo de cada palabra (segundos) para sincronizar escenas y subtítulos
"""
import asyncio
import json
import os
import re
import ssl
import subprocess
import sys

import certifi
import edge_tts
from edge_tts import communicate as _comm

VOZ = "es-MX-JorgeNeural"
RATE = "+5%"
PITCH = "-10Hz"
FILTRO = "highpass=f=70"
LOUDNORM = "loudnorm=I=-14:TP=-1.5"
TICKS = 10_000_000  # WordBoundary viene en unidades de 100 ns


def contexto_ssl() -> ssl.SSLContext:
    """Contexto SSL con verificación SIEMPRE activa: certifi + certificados del sistema + CA del proxy."""
    ctx = ssl.create_default_context(cafile=certifi.where())
    ctx.load_default_certs()
    for ca in (os.environ.get("SSL_CERT_FILE"), os.environ.get("REQUESTS_CA_BUNDLE"),
               "/root/.ccr/ca-bundle.crt", "/etc/ssl/certs/ca-certificates.crt"):
        if ca and os.path.isfile(ca):
            ctx.load_verify_locations(cafile=ca)
    return ctx


# edge-tts usa este contexto para la conexión (solo se añaden CAs; no se desactiva nada).
_comm._SSL_CTX = contexto_ssl()
PROXY = os.environ.get("HTTPS_PROXY") or os.environ.get("https_proxy") or None


async def generar(texto: str, mp3: str) -> list:
    com = edge_tts.Communicate(texto, VOZ, rate=RATE, pitch=PITCH,
                               boundary="WordBoundary", proxy=PROXY)
    palabras = []
    with open(mp3, "wb") as f:
        async for chunk in com.stream():
            if chunk["type"] == "audio":
                f.write(chunk["data"])
            elif chunk["type"] == "WordBoundary":
                ini = chunk["offset"] / TICKS
                palabras.append({"palabra": chunk["text"],
                                 "inicio": round(ini, 3),
                                 "fin": round(ini + chunk["duration"] / TICKS, 3)})
    return palabras


def ffmpeg(*args) -> str:
    r = subprocess.run(["ffmpeg", "-hide_banner", "-nostdin", *args],
                       capture_output=True, text=True, check=True)
    return r.stderr


def duracion(path: str) -> float:
    r = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration",
                        "-of", "csv=p=0", path], capture_output=True, text=True, check=True)
    return float(r.stdout.strip())


def medir(src: str, pre: str) -> dict:
    log = ffmpeg("-i", src, "-af", f"{pre},{LOUDNORM}:print_format=json", "-f", "null", "-")
    return json.loads(re.search(r"\{[^{}]*\"input_i\"[^{}]*\}", log, re.S).group(0))


def ebur128(path: str) -> tuple:
    """Medición independiente (EBU R128): loudness integrado y true peak."""
    log = ffmpeg("-i", path, "-af", "ebur128=peak=true", "-f", "null", "-")
    summ = log[log.rindex("Summary:"):]
    i = float(re.search(r"I:\s+(-?[\d.]+) LUFS", summ).group(1))
    tp = float(re.search(r"True peak:\s+Peak:\s+(-?[\d.]+|-inf) dBFS", summ).group(1))
    return i, tp


def normalizar(mp3: str, wav: str) -> dict:
    """highpass + loudnorm en 2 pasadas (medir y aplicar), verificado con ebur128.

    Si llevar la voz a -14 LUFS hiciera pasar el pico de -1.5 dBTP, loudnorm no puede
    hacerlo de forma lineal. Entonces se limitan antes solo los picos sueltos (alimiter),
    ajustando el límite hasta que el resultado cumpla los dos objetivos."""
    pre, margen = FILTRO, 0.0
    for intento in range(6):
        m = medir(mp3, pre)                                  # pasada 1: medir
        filtro = (f"{pre},{LOUDNORM}:measured_I={m['input_i']}:measured_TP={m['input_tp']}"
                  f":measured_LRA={m['input_lra']}:measured_thresh={m['input_thresh']}"
                  f":offset={m['target_offset']}:linear=true:print_format=json")
        log2 = ffmpeg("-y", "-i", mp3, "-af", filtro, "-ar", "48000", "-c:a", "pcm_s16le", wav)  # pasada 2
        res = json.loads(re.search(r"\{[^{}]*\"output_i\"[^{}]*\}", log2, re.S).group(0))
        i, tp = ebur128(wav)
        res.update(medido_I=i, medido_TP=tp, limitador=pre != FILTRO)
        if abs(i + 14) <= 0.3 and tp <= -1.4 and res["normalization_type"] == "linear":
            return res
        # Demasiado pico para la ganancia necesaria: bajar el límite de picos y repetir.
        margen += max(tp + 1.5, 0) + 0.5
        lim = 10 ** ((-1.5 - (-14 - float(medir(mp3, FILTRO)["input_i"])) - margen) / 20)
        pre = (f"{FILTRO},aresample=192000,alimiter=limit={max(lim, 0.05):.4f}:attack=1:release=50:level=false"
               ",aresample=48000")
    return res


def nivel_final(wav: str, desde: float) -> float:
    """Volumen máximo (dB) del audio después de la última palabra."""
    log = ffmpeg("-ss", f"{desde:.3f}", "-i", wav, "-af", "volumedetect", "-f", "null", "-")
    mx = re.search(r"max_volume: (-?[\d.]+|-inf) dB", log)
    return float("-inf") if not mx or mx.group(1) == "-inf" else float(mx.group(1))


def main():
    args = sys.argv[1:]
    if not args:
        sys.exit(__doc__)
    if args[0] == "-f":
        texto = open(args[1], encoding="utf-8").read().strip(); args = args[2:]
    else:
        texto = args[0]; args = args[1:]
    out = args[0] if args else "narracion"
    os.makedirs(out, exist_ok=True)
    mp3, wav, js = (os.path.join(out, n) for n in ("narracion.mp3", "narracion_48k.wav", "palabras.json"))

    palabras = asyncio.run(generar(texto, mp3))
    json.dump({"voz": VOZ, "rate": RATE, "pitch": PITCH, "texto": texto, "palabras": palabras},
              open(js, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    res = normalizar(mp3, wav)

    d_mp3, d_wav = duracion(mp3), duracion(wav)
    fin = palabras[-1]["fin"] if palabras else 0.0
    cola = d_wav - fin
    pico = nivel_final(wav, fin + 0.05) if cola > 0.1 else float("inf")
    print(f"Voz: {VOZ}  rate {RATE}  pitch {PITCH}")
    print(f"Palabras: {len(palabras)} (última: '{palabras[-1]['palabra']}' termina en {fin:.3f} s)")
    print(f"Duración MP3: {d_mp3:.3f} s   Duración WAV: {d_wav:.3f} s")
    print(f"Loudness WAV (medido con ebur128): {res['medido_I']} LUFS, true peak {res['medido_TP']} dBTP"
          f"  [loudnorm {res['normalization_type']}{', con limitador de picos' if res['limitador'] else ''}]")
    print(f"Silencio tras la última palabra: {cola:.3f} s (pico ahí: {pico:.1f} dB)")
    print("OK: no se corta ninguna palabra" if cola >= 0.1 and pico < -35
          else "AVISO: el final podría estar cortado")


if __name__ == "__main__":
    main()
