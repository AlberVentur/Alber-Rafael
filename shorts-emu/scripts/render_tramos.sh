#!/bin/bash
# Render completo por tramos de 100 cuadros (retoma los que ya existen). Uso: scripts/render_tramos.sh
cd "$(dirname "$0")/.."
B=${BROWSER:-/opt/pw-browsers/headless_shell_as_downloaded/chrome-headless-shell}
for a in $(seq 0 100 1100); do
  b=$((a + 99)); o=out/final/tramos/t_$(printf %04d $a).mp4
  [ -s "$o" ] && { echo "ya: $o"; continue; }
  echo "tramo $a-$b $(date +%T)"
  npx remotion render src/index.ts Zanzibar "$o.tmp.mp4" --frames=$a-$b --codec h264 --crf 16 --gl=swangle \
    --concurrency=${CONC:-3} --timeout=300000 --props='{"mute":true}' --browser-executable="$B" --log=error || { echo "FALLO tramo $a"; exit 1; }
  mv "$o.tmp.mp4" "$o"
done
echo "TERMINADO $(date +%T)"
