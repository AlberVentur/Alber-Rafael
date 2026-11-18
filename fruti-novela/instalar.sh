#!/usr/bin/env bash
set -e
echo "=== Instalando lo necesario para Fruti Novela ==="
if ! command -v ffmpeg >/dev/null; then
  if command -v brew >/dev/null; then brew install ffmpeg
  elif command -v apt-get >/dev/null; then sudo apt-get update && sudo apt-get install -y ffmpeg
  else echo "Instala FFmpeg manualmente: https://ffmpeg.org/download.html"; exit 1; fi
fi
python3 -m pip install -r requirements.txt
echo "Listo. Ejecuta: python3 generar.py ejemplo/guion.txt"
