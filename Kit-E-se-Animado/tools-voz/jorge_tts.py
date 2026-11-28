"""Narración con edge-tts (es-MX-JorgeNeural) + tiempos por palabra.
Uso: .venv/bin/python tools-voz/jorge_tts.py texto.txt carpeta_salida [velocidad] [tono]
Por defecto: velocidad +5% y tono -10Hz (voz elegida "B": más grave y algo más lenta).
Salida: voz.mp3, voz.wav (48 kHz, -14 LUFS) y palabras.json."""
import asyncio, json, os, ssl, subprocess, sys
import certifi, edge_tts

VOZ = "es-MX-JorgeNeural"

def contexto_ssl():
    # Verificación SSL siempre activa: certifi + CA del proxy/sistema si existe.
    ctx = ssl.create_default_context(cafile=certifi.where())
    for extra in (os.environ.get("SSL_CERT_FILE"), "/root/.ccr/ca-bundle.crt",
                  "/etc/ssl/certs/ca-certificates.crt"):
        if extra and os.path.isfile(extra):
            ctx.load_verify_locations(cafile=extra)
    return ctx

async def generar(texto, out, rate="+5%", pitch="-10Hz"):
    edge_tts.communicate._SSL_CTX = contexto_ssl()  # usado en la conexión websocket
    com = edge_tts.Communicate(texto, VOZ, rate=rate, pitch=pitch, boundary="WordBoundary",
                               proxy=os.environ.get("HTTPS_PROXY") or os.environ.get("https_proxy"))
    palabras = []
    with open(os.path.join(out, "voz.mp3"), "wb") as f:
        async for ch in com.stream():
            if ch["type"] == "audio":
                f.write(ch["data"])
            elif ch["type"] == "WordBoundary":
                ini = ch["offset"] / 1e7
                palabras.append({"word": ch["text"], "start": round(ini, 3),
                                 "end": round(ini + ch["duration"] / 1e7, 3)})
    with open(os.path.join(out, "palabras.json"), "w", encoding="utf-8") as f:
        json.dump(palabras, f, ensure_ascii=False, indent=1)
    return palabras

def main():
    texto = open(sys.argv[1], encoding="utf-8").read().strip()
    out = sys.argv[2]; rate = sys.argv[3] if len(sys.argv) > 3 else "+5%"
    pitch = sys.argv[4] if len(sys.argv) > 4 else "-10Hz"
    os.makedirs(out, exist_ok=True)
    pal = asyncio.run(generar(texto, out, rate, pitch))
    mp3, wav = os.path.join(out, "voz.mp3"), os.path.join(out, "voz.wav")
    # loudnorm en dos pasadas: medir y luego aplicar (más preciso en clips cortos)
    med = subprocess.run(["ffmpeg", "-hide_banner", "-i", mp3, "-af",
        "highpass=f=70,loudnorm=I=-14:TP=-1.5:print_format=json", "-f", "null", "-"],
        capture_output=True, text=True).stderr
    m = json.loads(med[med.rindex("{"):med.rindex("}") + 1])
    filtro = ("highpass=f=70,loudnorm=I=-14:TP=-1.5:linear=true"
              f":measured_I={m['input_i']}:measured_TP={m['input_tp']}"
              f":measured_LRA={m['input_lra']}:measured_thresh={m['input_thresh']}"
              f":offset={m['target_offset']}")
    subprocess.run(["ffmpeg", "-y", "-v", "error", "-i", mp3, "-af", filtro,
                    "-ar", "48000", wav], check=True)
    dur = float(subprocess.check_output(["ffprobe", "-v", "error", "-show_entries",
        "format=duration", "-of", "csv=p=0", os.path.join(out, "voz.wav")]).decode())
    print(f"palabras={len(pal)} ultima='{pal[-1]['word']}' fin_ultima={pal[-1]['end']:.3f}s "
          f"duracion_wav={dur:.3f}s margen={dur - pal[-1]['end']:.3f}s")

if __name__ == "__main__":
    main()
