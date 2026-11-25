#!/usr/bin/env bash
# usage: render_long.sh <CompId> <out.mp4> <mix.wav> [chunk_seconds=60] [scale=1]
# Video is rendered muted in chunks; the full mix.wav is muxed once at the end (no audio gaps at chunk joins).
# Renders long videos in chunks (resumable: finished chunks are kept), then joins them losslessly. Run from 00-setup/engine.
set -e; C="$1"; OUT="$2"; MIX="$3"; CH="${4:-60}"; SC="${5:-1}"
FPS=30; TOTAL=$(npx remotion compositions 2>/dev/null | awk -v c="$C" '$1==c{print $4}')
[ -z "$TOTAL" ] && { echo "composition $C not found"; exit 1; }
D="$(dirname "$OUT")/.chunks_$C"; mkdir -p "$D"; : > "$D/list.txt"; n=$((CH*FPS)); i=0; s=0
while [ $s -lt $TOTAL ]; do e=$((s+n-1)); [ $e -ge $TOTAL ] && e=$((TOTAL-1)); f="$D/part_$(printf %03d $i).mp4"
  if [ ! -s "$f" ]; then echo "chunk $i: frames $s-$e"; npx remotion render "$C" "$f" --frames=$s-$e --scale=$SC --concurrency=$(nproc) --crf=23 --muted --log=error; fi
  echo "file '$(realpath "$f")'" >> "$D/list.txt"; s=$((e+1)); i=$((i+1)); done
ffmpeg -y -v error -f concat -safe 0 -i "$D/list.txt" -i "$MIX" -map 0:v -map 1:a -c:v copy -c:a aac -b:a 256k -shortest "$OUT" && echo "DONE -> $OUT ($(ffprobe -v error -show_entries format=duration -of csv=p=0 "$OUT") s)"
