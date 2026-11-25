#!/usr/bin/env bash
# Vintage Dossier - one-command setup. Run from the pack root:  bash 00-setup/setup.sh
# Idempotent: safe to run again. Works on any Linux/macOS box Claude runs in (CPU-only is fine).
set -u; ROOT="$(cd "$(dirname "$0")/.." && pwd)"; S="$ROOT/00-setup"; E="$S/engine"; cd "$ROOT"
say() { printf "\n== %s\n" "$*"; }; fail=0
say "1/7 system tools"
need() { command -v "$1" >/dev/null 2>&1; }
SUDO=""; [ "$(id -u)" != "0" ] && need sudo && SUDO="sudo"
if ! need ffmpeg && need apt-get; then $SUDO apt-get update -qq && $SUDO apt-get install -y -qq ffmpeg >/dev/null; fi
if ! need ffmpeg && need brew; then brew install ffmpeg; fi
for c in node npm python3 ffmpeg ffprobe; do need $c && echo "ok $c" || { echo "MISSING $c"; fail=1; }; done
NODEV=$(node -p 'process.versions.node.split(".")[0]' 2>/dev/null || echo 0); [ "$NODEV" -ge 18 ] || { echo "Node >= 18 required (found $NODEV)"; fail=1; }
say "2/7 python libs (numpy, pillow, pocketsphinx aligner)"
PIPF=""; python3 -m pip install -q --help 2>/dev/null | grep -q break-system-packages && PIPF="--break-system-packages"
python3 -c "import numpy, PIL" 2>/dev/null || python3 -m pip install -q $PIPF numpy pillow
python3 -c "import pocketsphinx" 2>/dev/null || python3 -m pip install -q $PIPF pocketsphinx || echo "WARN pocketsphinx failed -> alignment fallback (silence-map) will be used"
python3 -c "import numpy, PIL; print('ok numpy/pillow')" || fail=1
say "3/7 engine (Remotion, pinned versions)"
( cd "$E" && npm install --no-audit --no-fund --loglevel=error ) || fail=1
say "4/7 textures + SFX library (procedural, no downloads)"
python3 "$S/tools/make_textures.py" "$E/public" --seed 3 && python3 "$S/tools/make_sfx_dossier.py" "$E/public/sfx" | tail -1
say "5/7 environment report"
bash "$S/tools/env_report.sh" "$ROOT/ENV-REPORT.md" >/dev/null && sed -n '1,12p' "$ROOT/ENV-REPORT.md"
say "6/7 historical basemap smoke test (optional)"
bash "$S/tools/fetch_basemap.sh" 1938 "$ROOT/01-assets/maps" || echo "WARN basemap host unreachable -> maps will be drawn schematically or from user-supplied map images"
say "7/7 self-test (typecheck, still, 2-second render, speed)"
cd "$E"; npx tsc -p . || fail=1
npx remotion still SelfTest "$ROOT/99-exports/selftest.jpg" --frame=90 --log=error && echo "still -> 99-exports/selftest.jpg" || fail=1
t0=$(date +%s); npx remotion render SelfTest "$ROOT/99-exports/selftest.mp4" --frames=0-59 --concurrency=$(nproc 2>/dev/null || echo 2) --log=error || fail=1; t1=$(date +%s)
SPF=$(python3 -c "print(round(($t1-$t0)/60,3))"); echo "render speed ~${SPF}s/frame (includes bundling) -> 10-min video ~ $(python3 -c "print(round($SPF*18000/60))") min"
echo "render_s_per_frame=$SPF" >> "$ROOT/ENV-REPORT.md"
[ $fail = 0 ] && { echo "SETUP OK" | tee "$ROOT/00-setup/SETUP-OK"; } || echo "SETUP FINISHED WITH ERRORS (see above)"
