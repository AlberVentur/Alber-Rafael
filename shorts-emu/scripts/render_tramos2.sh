#!/bin/bash
# Render por tramos de 100 cuadros, retomable. Uso: COMP=Emu TOTAL=3600 OUT=out/emu/tramos scripts/render_tramos2.sh
cd "$(dirname "$0")/.."
B=${BROWSER:-/opt/pw-browsers/headless_shell_as_downloaded/chrome-headless-shell}
mkdir -p "$OUT"
for a in $(seq 0 100 $((TOTAL - 1))); do
  b=$((a + 99)); o=$OUT/t_$(printf %04d $a).mp4
  [ -s "$o" ] && { echo "ya: $o"; continue; }
  echo "tramo $a-$b $(date +%T)"
  npx remotion render src/index.ts "$COMP" "$o.tmp.mp4" --frames=$a-$b --codec h264 --crf 16 --gl=swangle \
    --concurrency=${CONC:-3} --timeout=300000 --props='{"mute":true}' --browser-executable="$B" --log=error || { echo "FALLO tramo $a"; exit 1; }
  mv "$o.tmp.mp4" "$o"
done
echo "TERMINADO $(date +%T)"
