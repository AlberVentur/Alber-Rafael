#!/usr/bin/env bash
# Instala lo necesario para generar los videos (Linux / macOS).
set -e
if ! command -v ffmpeg >/dev/null 2>&1; then
  if command -v apt-get >/dev/null 2>&1; then sudo apt-get update && sudo apt-get install -y ffmpeg python3-pip
  elif command -v brew >/dev/null 2>&1; then brew install ffmpeg
  else echo "Instala ffmpeg manualmente: https://ffmpeg.org/download.html"; exit 1; fi
fi
python3 -m pip install --user -r "$(dirname "$0")/requirements.txt"
echo "Listo. Ahora ejecuta: python3 generar_video.py"
