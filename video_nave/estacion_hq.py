#!/usr/bin/env python3
"""
Versión en ALTA CALIDAD de "La estación de las 1.000 ventanas".
Dibuja cada cuadro con Chromium (luces, brillos, niebla, degradados) y lo sincroniza con tu voz.

    python3 estacion_hq.py                                   # usa estacion.json
    python3 estacion_hq.py --audio mi_voz.mp3 --suscriptores 152 --cuenta @mi_canal
    python3 estacion_hq.py --prueba 1,8,16                   # solo cuadros sueltos (PNG) para revisar

Requiere: ffmpeg, Node.js y Playwright con Chromium (npm i playwright && npx playwright install chromium).
"""
import argparse
import json
import os
import shutil
import subprocess
import sys
import tempfile

from estacion import asignar_lineas, tramos_de_voz
from generar_video import duracion_audio

BASE = os.path.dirname(os.path.abspath(__file__))
FPS = 30
COLA = 1.6


def sonido(tmp, nombre, filtro, dur):
    ruta = os.path.join(tmp, nombre + ".wav")
    subprocess.run(["ffmpeg", "-y", "-v", "error", "-f", "lavfi", "-i", filtro, "-t", f"{dur:.2f}", ruta], check=True)
    return ruta


def mezclar_audio(tmp, voz, total, escenas):
    m = os.path.join(tmp, "musica.wav")
    expr = ("0.09*sin(2*PI*55*t)+0.06*sin(2*PI*82.4*t)*(0.6+0.4*sin(2*PI*0.25*t))"
            "+0.045*sin(2*PI*110*t)*(0.5+0.5*sin(2*PI*0.5*t))+0.035*sin(2*PI*164.8*t)*(0.5+0.5*sin(2*PI*0.125*t))"
            "+0.02*sin(2*PI*329.6*t)*(0.5+0.5*sin(2*PI*0.33*t))")
    subprocess.run(["ffmpeg", "-y", "-v", "error", "-f", "lavfi", "-i", f"aevalsrc={expr}:s=44100:d={total:.2f}",
                    "-af", f"afade=in:d=1.5,afade=out:st={max(0, total - 2):.2f}:d=2,aecho=0.8:0.75:450|900:0.4|0.25", m],
                   check=True)
    whoosh = sonido(tmp, "whoosh", "anoisesrc=c=pink:a=0.6:d=1.2,highpass=f=400,lowpass=f=5000,"
                    "afade=t=in:d=0.45,afade=t=out:st=0.45:d=0.75", 1.2)
    boom = sonido(tmp, "boom", "aevalsrc='0.9*sin(2*PI*(70-40*t)*t)*exp(-2.5*t)':s=44100:d=2", 2)
    rumble = sonido(tmp, "rumble", "anoisesrc=c=brown:a=0.9:d=7,lowpass=f=160,afade=t=in:d=1.2,afade=t=out:st=5.5:d=1.5", 7)
    entradas = ["-i", voz, "-i", m]
    filtros = ["[0]apad,volume=1.0[v]", "[1]volume=0.32[m]"]
    etiquetas = ["[v]", "[m]"]
    k = 2
    for i, e in enumerate(escenas):
        if i == 0:
            continue
        ms = max(0, int((e["ini"] - 0.45) * 1000))
        entradas += ["-i", whoosh]
        filtros.append(f"[{k}]adelay={ms}|{ms},volume=0.28[w{k}]"); etiquetas.append(f"[w{k}]"); k += 1
        if e["nombre"] == "motores":
            ms2 = int((e["ini"] + 0.5) * 1000)
            entradas += ["-i", boom, "-i", rumble]
            filtros.append(f"[{k}]adelay={ms2}|{ms2},volume=0.7[b{k}]"); etiquetas.append(f"[b{k}]")
            filtros.append(f"[{k + 1}]adelay={ms2}|{ms2},volume=0.55[r{k}]"); etiquetas.append(f"[r{k}]")
            k += 2
    filtros.append("".join(etiquetas) + f"amix=inputs={len(etiquetas)}:duration=first:normalize=0,"
                   f"atrim=0:{total:.2f},alimiter=limit=0.95[a]")
    salida = os.path.join(tmp, "audio.wav")
    subprocess.run(["ffmpeg", "-y", "-v", "error", *entradas, "-filter_complex", ";".join(filtros), "-map", "[a]",
                    salida], check=True)
    return salida


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--config", default=os.path.join(BASE, "estacion.json"))
    ap.add_argument("--audio")
    ap.add_argument("--suscriptores", type=int)
    ap.add_argument("--cuenta")
    ap.add_argument("--hilos", type=int, default=os.cpu_count() or 4)
    ap.add_argument("--prueba", help="segundos sueltos a renderizar como imágenes, ej: 1,8,16")
    ap.add_argument("--salida")
    a = ap.parse_args()

    for prog in ("ffmpeg", "node"):
        if not shutil.which(prog):
            sys.exit(f"Falta {prog}. Revisa el README (instalación).")

    with open(a.config, encoding="utf-8") as fh:
        cfg = json.load(fh)
    audio = a.audio or os.path.join(BASE, cfg["audio"])
    if not os.path.exists(audio):
        sys.exit(f"No encuentro el audio: {audio}")
    if a.suscriptores is not None:
        cfg["suscriptores"] = a.suscriptores
    if a.cuenta:
        cfg["cuenta"] = a.cuenta

    dur_voz = duracion_audio(audio)
    total = dur_voz + COLA
    lineas = cfg["lineas"]
    tiempos = asignar_lineas(lineas, tramos_de_voz(audio, dur_voz), dur_voz)
    escenas = []
    for l, (ini, fin) in zip(lineas, tiempos):
        if l.get("escena"):
            escenas.append({"nombre": l["escena"], "ini": ini if escenas else 0.0})
    for i, e in enumerate(escenas):
        e["fin"] = escenas[i + 1]["ini"] if i + 1 < len(escenas) else total
    datos = {
        "fps": FPS, "total": total, "cuenta": cfg["cuenta"], "capacidad": cfg["capacidad"],
        "ocupadas": min(cfg["suscriptores"], cfg["capacidad"]), "escenas": escenas,
        "lineas": [{"texto": l["texto"], "ini": ini, "fin": fin} for l, (ini, fin) in zip(lineas, tiempos)],
        "ctaT": tiempos[-1][0],
    }
    print("Sincronización:")
    for l in datos["lineas"]:
        print(f"  {l['ini']:5.2f}-{l['fin']:5.2f}  {l['texto'].replace('*', '')}")

    tmp = tempfile.mkdtemp(prefix="estacion_hq_")
    try:
        ruta_datos = os.path.join(tmp, "datos.json")
        with open(ruta_datos, "w", encoding="utf-8") as fh:
            json.dump(datos, fh, ensure_ascii=False)
        cuadros = os.path.join(tmp, "cuadros")
        cmd = ["node", os.path.join(BASE, "hq", "render.js"), ruta_datos, cuadros, str(a.hilos)]
        if a.prueba:
            cmd.append(a.prueba)
        print(f"Dibujando cuadros con {a.hilos} hilos...")
        subprocess.run(cmd, check=True)

        if a.prueba:
            destino = a.salida or os.path.join(BASE, "salida", "pruebas")
            os.makedirs(destino, exist_ok=True)
            for i, t in enumerate(a.prueba.split(",")):
                shutil.copy(os.path.join(cuadros, f"f_{i:05d}.jpg"), os.path.join(destino, f"prueba_{float(t):05.2f}s.jpg"))
            print(f"✅ Imágenes de prueba en {destino}")
            return

        print("Codificando video...")
        video = os.path.join(tmp, "video.mp4")
        subprocess.run(["ffmpeg", "-y", "-v", "error", "-framerate", str(FPS), "-i", os.path.join(cuadros, "f_%05d.jpg"),
                        "-c:v", "libx264", "-preset", "slow", "-crf", "16", "-tune", "film", "-pix_fmt", "yuv420p",
                        "-r", str(FPS), video], check=True)
        print("Mezclando voz, música y efectos...")
        audio_final = mezclar_audio(tmp, audio, total, escenas)
        salida = a.salida or os.path.join(BASE, "salida", "estacion_1000_ventanas_HQ.mp4")
        os.makedirs(os.path.dirname(salida), exist_ok=True)
        subprocess.run(["ffmpeg", "-y", "-v", "error", "-i", video, "-i", audio_final, "-c:v", "copy", "-c:a", "aac",
                        "-b:a", "192k", "-shortest", "-movflags", "+faststart", salida], check=True)
        print(f"\n✅ Video listo: {salida}  ({total:.1f} s)")
    finally:
        shutil.rmtree(tmp, ignore_errors=True)


if __name__ == "__main__":
    main()
