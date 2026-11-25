---
name: dossier-pipeline
description: Stage 7 build for a Vintage Dossier documentary video (after the viewer says "start") - voice prep, word alignment, world/camera planning, Remotion build, SFX mix, QA, chunked final render and delivery.
---
# Dossier pipeline (Stage 7). Run these steps in order. Paths are relative to the pack root.
Let `V=02-videos/<slug>`, `E=00-setup/engine`, `PUB=$E/public/<slug>`, `SRC=$E/src/videos/<slug>`.

## 1 Voice prep
- Several VO files → join in order: `ffmpeg -i "concat:..."` or the concat demuxer → `$V/in/vo.wav`.
- `python3 00-setup/tools/voice/trim.py $V/in/vo.* $V/vo` → `voiceover-trimmed.wav/.mp3` (shortens only long pauses).
- Silence map: `ffmpeg -i $V/vo/voiceover-trimmed.wav -af silencedetect=noise=-38dB:d=0.12 -f null - 2> $V/vo/silence.txt`.

## 2 Alignment (word timestamps)
- `$V/vo/script.txt` = contents of `script_spoken.txt` (spoken words). Optional `spoken.json` overrides next to it.
- `python3 00-setup/tools/voice/align.py $V/vo/voiceover-trimmed.wav $V/vo/script.txt $V/vo/words.json`
- Unknown words → add `{"Westerplatte":"wester platter"}` style entries to `spoken.json`, rerun.
- Sanity: every long silence in silence.txt must fall between sentences in words.json; last word end ≈ audio length.
- Very long audio failing: split by chapter at the matching long pauses, align each part, add the part offsets.

## 3 Plan (write `$V/plan.md` before coding; keep it short)
1. Chapters (30-120 s each) from the script headers. Each chapter = one **world** (a desk area ~5000×3000 px).
2. Per chapter: list beats `word → visual → grammar# → camera move → SFX`. Use the grammar bank (MASTER-PROMPT §3) and
   `02-videos/_ledger.md`: no grammar/entrance/camera move repeated in adjacent beats; avoid layouts used in the last video.
3. World layout: place every element at a fixed world position first (prints, map sheets, cards, boards).
   Sequence pattern: hero print at camera centre → ~1 s before the next print's word, shrink it (s 0.5-0.6) and slide it aside
   (300-500 px) while the camera pulls back (z 0.8) → next print lands in the free space → camera pushes in.
   Maps: a map sheet lies elsewhere on the desk; fly to it with keys: (leave, z≈1) → (midpoint, z 0.55, roll ±2°) → (target, z 1.4-1.7).
4. Camera keys `{t,x,y,z,r}` per chapter: hold = two keys with the same values; every beat has a slow 3-7 % push.
5. Chapter change: light-burn flash (`BurnFlash`) + new desk seed/area, or a long pull-back across the desk to a new area.

## 4 Assets
- Prints: `python3 00-setup/tools/prep_prints.py $V/in/07_x.jpg $PUB/07_x.jpg [--color]` (note the printed aspect).
- Maps: `bash 00-setup/tools/fetch_basemap.sh <year> 01-assets/maps` →
  `python3 00-setup/tools/make_map.py 01-assets/maps/world_<Y>.geojson $PUB/map_<name>.json --lon0 .. --lon1 .. --lat-top ..`
  (region centred with ≥ 25 % margin; check the printed area names, e.g. "Germany", "Poland", "USSR", "British Raj").
- Textures for this video: `python3 00-setup/tools/make_textures.py $E/public --seed <new number>` (record the seed in the ledger).
- SFX library is already in `$E/public/sfx` (keys0-3, carriage, paper, whip, boom, burst, stamp, pen, string, pin, tick,
  beep, projector, flash, plane, tank).

## 5 Build
- Copy `02-videos/_example-ww2/World.tsx` as the pattern (do NOT reuse its layout). Create `$SRC/timeline.json`
  (schema below) from words.json, `$SRC/Chapter01.tsx`… and `$SRC/Video.tsx` that sequences chapters with
  `<Sequence from={round(start*30)} durationInFrames=...>` (pass chapter-relative time or use absolute seconds by
  wrapping with an offset). Plays `staticFile("<slug>/mix.wav")` once at the top level.
- Register in `$E/src/Root.tsx`: `<Composition id="<PascalSlug>" component={Video} width={1920} height={1080} fps={30} durationInFrames={Math.ceil(duration*30)} />`.
- Only `useCurrentFrame/interpolate/spring`. Hooks before any `return null`.
- `cd $E && npx tsc -p .` must pass.

### timeline.json schema (seconds; mix.py reads it)
```json
{ "fps": 30, "duration": <voice_len + 1.0>,
  "ev": { "<id>": {"kind":"type","t":3.47,"text":"04:45 HRS","cps":18,"ding":true},
          "<id>": {"kind":"roll","t":1.23,"t2":2.03,"from":1931,"to":1939},
          "<id>": {"kind":"draw|hit|drop|icon|focus","t":5.75,"dur":0.5} },
  "sfx": [ {"t":0,"name":"projector","gain":-27,"loop":true}, {"t":6.13,"name":"boom","gain":-8} ] }
```
`type` events get key clicks per character automatically (+ carriage if `ding`), `roll` gets ticks + a beep. Every other
sound goes in `sfx` (gains from the style bible). Put SFX 0.03-0.08 s BEFORE the visual for whooshes/paper.

## 6 Mix
`python3 00-setup/tools/mix.py $SRC/timeline.json $V/vo/voiceover-trimmed.wav $E/public/sfx $PUB/mix.wav`
Check loudness: `ffmpeg -i $PUB/mix.wav -af loudnorm=print_format=summary -f null -` → aim -16..-18 LUFS.

## 7 QA (before the final render)
- Stills: `npx remotion still <Comp> /tmp/q.jpg --frame=N --scale=0.5` at 8-15 key moments (glides, labels, map peaks).
  Look at them. Fix overlaps, clipped labels, empty frames, wrong countries.
- Draft scan (optional for long videos): render one chapter at `--scale=0.25`, then
  `python3 00-setup/tools/contact_sheets.py draft.mp4 /tmp/qa --fps 4` and look.

## 8 Final render + delivery
`cd $E && bash ../tools/render_long.sh <Comp> ../../99-exports/<slug>.mp4 public/<slug>/mix.wav 60` (run in background for
long videos; resumable). Then: contact sheet every 2 s of the final, look at it; ffprobe duration;
copy `voiceover-trimmed.mp3` to `99-exports/`; write `99-exports/<slug>-credits.txt` (photo sources + map credit:
"Historical borders: historical-basemaps by A. Ourednik"). Send the MP4 to the viewer. Update `STATUS.md` and `_ledger.md`.
