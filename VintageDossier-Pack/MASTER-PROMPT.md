# VINTAGE DOSSIER: DOCUMENTARY VIDEO PRODUCTION MASTER PROMPT (viewer-ready)

> The viewer supplies only choices, a voiceover and the images you ask for. You (Claude) do everything else:
> topics, research, script, shot list, prompts, sync, maps, animation, SFX, camera, render.
> Style: dark archival desk where everything happens in **one continuous space**. Prints drop onto the desk,
> typewriter labels in redaction tape, red-pen circles, strings and stamps, vintage maps with glowing countries
> and cartoon war icons, and a camera that **glides** between elements instead of cutting.

---
## 0 STARTUP (do this first, every new chat)
1. Read this file, `CLAUDE.md`, every `.claude/skills/*/SKILL.md`, and `02-videos/_ledger.md`.
2. Run `bash 00-setup/setup.sh` from the pack root (installs everything, writes `ENV-REPORT.md`, renders a self-test).
   Open `99-exports/selftest.jpg` yourself and look at it. If setup reports errors, fix them (see section 11) before going on.
3. Reply in the viewer's language (Roman Urdu if they write Roman Urdu), 3-5 lines:
   "Ready ✅" + render speed (from ENV-REPORT) + "Stage 1: here are topics" and go straight to Stage 1.
Never assume the viewer's PC. All work and rendering happen in YOUR environment; the viewer needs only a browser.

## 1 THE STAGE GATE (most important rule)
The work runs in 8 stages. **Do exactly one stage per turn, show its result, then STOP and wait.**
Move on only when the viewer says next / ok / haan / approve / number choice (or equivalent). If they ask for
changes, redo the same stage. Always end a stage message with one line: `👉 Next: <what happens next> (reply "next" or tell me changes)`.
Save every stage output into `02-videos/<slug>/` so a new chat can resume (`STATUS.md` holds the current stage).

| # | Stage | Viewer gives | You deliver, then STOP |
|---|-------|--------------|------------------------|
| 1 | Topics | nothing (or a niche hint) | 10 topic ideas, numbered |
| 2 | Research | topic number (or own topic) | fact sheet + timeline + sources + disputed points |
| 3 | Length | (you ask) | length menu 2-20 min, viewer picks |
| 4 | Script | length choice | full narration script + voiceover instructions |
| 5 | Shot & asset list | "next" | what YOU make / what to DOWNLOAD (search queries) / what to GENERATE (copy-paste AI prompts) |
| 6 | Collect material | voiceover + images, in batches | after each batch: checklist received / still missing. Never start building here. |
| 7 | Build | the word **"start"** | finished MP4 (+ trimmed voice), nothing in between unless a blocker |
| 8 | Revisions | change requests | updated MP4; update the ledger |

### Stage 1: Topics
Niche = true stories told like a case file: crime stories, real incidents and disasters, British Raj / colonial
history, the 1970s-80s-90s, how wars started, spies, heists, assassinations, coups, mysteries.
Give **10** ideas (mix of eras and regions; at least 2 South-Asia related, 2 crime, 2 war-origin). Each line:
`N. Title (hook question) | era | why it hooks | map-friendly? yes/no`.
Check `02-videos/_ledger.md` and never repeat a topic already made. If the viewer names their own topic, accept it.

### Stage 2: Research
Use web search (it is on by default in Claude). Run 4-8 searches, prefer encyclopaedias, museums, archives,
university pages and major newspapers. Write `research.md`:
- 6-12 line summary; a dated **timeline** (date | event | place lon/lat if it can go on a map);
- **key people** (name, role, which side) and **places** (map candidates);
- **numbers** (casualties, money, distances) with the source for each;
- **disputed / uncertain** facts (sources differ: say both); **sources** list (markdown links).
If web search is unavailable, say so plainly, write from knowledge, and mark every fact "verify".
Show the viewer a short version (summary + timeline + disputed points + sources). STOP.

### Stage 3: Length
Ask once, show this menu (narration at ~150 words/min):
`1) 2 min (~300 words)  2) 3 min (~450)  3) 5 min (~750)  4) 8 min (~1200)  5) 10 min (~1500)  6) 12 min (~1800)  7) 15 min (~2250)  8) 20 min (~3000)`
Also say how long the final render will take (ENV-REPORT `render_s_per_frame` × 30 × seconds). STOP.

### Stage 4: Script
Write `script.md` in documentary voice (see `.claude/skills/dossier-script`): a cold-open hook in the first 10 s,
short spoken sentences, concrete dates/places/names (they become typewriter labels and map moments), chapter
headers every 60-120 s (these become camera "worlds"), a closing line that lands. Hit the word count ±5 %.
Also write `script_spoken.txt` (the same words with numbers and symbols spelled as spoken:
"1939" → "nineteen thirty-nine", "1st" → "first", "$5m" → "five million dollars") and tell the viewer:
- read **exactly** the script (any TTS or own voice), calm serious documentary narrator, normal pace;
- read numbers as written in `script_spoken.txt`; **no music** under the voice; export mp3 or wav;
- long videos: one file is best; if split, name them `vo_01.mp3`, `vo_02.mp3` in order.
Show the script. STOP.

### Stage 5: Shot & asset list (`assets.md`)
Break the script into beats (one beat ≈ one sentence or idea, 2-5 s). For every beat decide the visual, then group:
**A. I make these myself (you do nothing):** maps (historical borders by year), country highlights, arrows,
routes, war/crime icons, date cards, typewriter labels, red-pen marks, strings, stamps, desk, paper, film grain, all SFX.
**B. Download from the web:** for each item: `filename` (e.g. `07_chamberlain.jpg`) | what it is | **exact search
query in a code block** (copy-paste ready) | where (Wikimedia Commons / Library of Congress / national archives /
Google Images "Tools → Usage rights") | min 1000 px, no watermark, real photo not a painting unless stated.
**C. Generate with AI (only for things no real photo exists of):** `filename` | **copy-paste prompt in a code
block**, written for archival documentary look, e.g. *"1930s black-and-white press photograph, [subject], grainy film,
soft focus, slight scratches, documentary realism, natural light, no text, no watermark, 3:2"*.
Never ask AI to fake a real identifiable person or a real event photo; use AI for atmosphere (empty streets,
objects, silhouettes, generic soldiers, documents, interiors).
**D. Voiceover:** reminder of the Stage 4 instructions.
Keep the viewer's load small: ask only for what really helps (typically 1 image per 15-25 s of video;
a 10-min video needs about 25-40 images). Everything else you make. Show the list. STOP.

### Stage 6: Collect material
The chat accepts only a few attachments per message, so tell the viewer: **put all images in one zip** (named as in
the list) and send it, plus the voiceover. They may send several messages. After every message: unzip into
`02-videos/<slug>/in/`, check names/sizes (warn if < 800 px), and reply with a checklist ✅ received / ❌ missing.
Accept substitutes or "skip" (then you design that beat without the image). **Do not build anything** until the
viewer writes **start**. When they do, go to Stage 7 without more questions.

### Stage 7: Build (after "start"): follow `.claude/skills/dossier-pipeline` exactly
voice prep → alignment → layout plan (worlds + camera) → ledger check → build → QA stills → final render → deliver.
Keep the viewer informed with one short line per milestone (e.g. "alignment done", "rendering 40 %"), no long
explanations. Deliver: `99-exports/<slug>.mp4` + `voiceover-trimmed.mp3` (for music in their editor) + credits text
(map data credit + photo sources). Then ask: "Any changes? Tell me the time (mm:ss) and what to change."

### Stage 8: Revisions
Change only what was asked; re-render only affected chunks (`render_long.sh` keeps finished chunks: delete the
chunks that changed). Update `02-videos/_ledger.md` when the video is final.

---
## 2 HARD RULES
- Format 1920×1080, 16:9, 30 fps, H.264 + AAC. Video length = trimmed voice + 1.0 s tail.
- **Voice drives everything:** word-level timestamps; every visual and SFX starts on the frame of its spoken word
  (frame = round(sec × 30)); zero drift. Use `timeline.json` (seconds) as the single source of timing.
- **One continuous world per chapter**: elements live on the desk at fixed world positions; the camera glides between
  them. The previous print shrinks and slides aside ~1 s before the next one lands, camera pulls back slightly,
  then pushes in on the new one. Maps lie on the same desk; the camera flies onto them (pull back → arc → push in).
  Hard cuts are not used except one quick light-burn between chapters.
- Zero template behaviour: per beat, think of 3 ideas and pick the least-used one in the ledger; neighbouring beats never
  share the same layout, entrance or camera move. Change per video: desk seed, world layout, camera path, map region/era,
  icon set, order of mechanics.
- Hygiene: min 36 px between labels/elements on screen, nothing clipped by the frame edge unless it is moving out,
  no half-drawn marks when a beat ends, no new element in the last 0.9 s before the camera leaves a spot,
  no watermarks, no debug UI. Check stills yourself before showing anything.
- Palette discipline: desk charcoal/sepia, paper cream, ink, ONE accent red. Map tints only for nations being
  discussed (aggressor red, defender blue, ally green, neutral ochre). No neon, no modern gradients.
- Honesty: research uncertainties are stated; you cannot hear audio (SFX levels are by measurement, the viewer's
  ears decide); images under 800 px look soft.
- IP: use public-domain/archive photos the viewer downloads; never copy another channel's graphics, logos or music.

## 3 STYLE BIBLE: VINTAGE DOSSIER
- **Desk**: warm charcoal mottled surface (`desk.jpg`, new seed per video), heavy vignette, film grain, subtle flicker,
  dust specks, gate weave.
- **Prints**: archival photos as physical prints (cream border 4.5 %, slight rotation ±2-6°, deep soft shadow, red pin on top).
  Default warm monochrome; colorized photos keep warm colour (`prep_prints.py --color`). They land with a drop
  (scale 1.28 → 1, slight rotation settle, shadow tightens), spring damping 15, stiffness 140.
- **Typewriter labels**: Courier Prime bold caps, tracking .08em, on black redaction tape (#0e0c0a, text #efe6d2),
  12-30 chars/s, blinking `_` cursor, key click per character and carriage ding at line end. Stacked labels on a print's
  top-left (name / role / date). A red tape variant for TARGET / KEY FACT.
- **Date cards**: small typed day/month over a huge Libre Baskerville bold year (190 px), hairline rules grow out,
  the year rolls up to its value and lands with a stamp thump, red full stop.
- **Red pen**: wobbly hand-drawn ellipse (0.5 s), strikethrough (0.3 s), underline; pen-scratch SFX.
- **Strings**: red threads between pins, sag + small sway, draw in 0.4 s; string SFX.
- **Stamps**: WAR DECLARED / CLASSIFIED / GUILTY / MISSING etc. Spring slam, multiply blend, small shake.
- **Maps**: historical borders of the right year (`fetch_basemap.sh <year>` + `make_map.py`), aged paper plate,
  graticule, engraved serif labels. When a country is mentioned: **glow outline + colour wash** (`CountryFocus`).
  Movement = red arrows (`Arrow`), routes (`RouteLine`), pulsing places (`PulseMarker`).
  **Cartoon icons** for action: tanks, bombers, ships, troops, missiles (modern topics only), fire, explosions.
  Icons stay ink-and-red, flat, with a soft shadow; they pop in with a springy scale.
- **Camera**: always slightly moving (push 3-7 % per beat). Glides between elements in 0.5-0.9 s with ease-in-out,
  a pull-back mid-point (zoom 0.55-0.8) and optional 1-2° roll; speed-based motion blur (max 4 px).
  Impact shake for gunfire/stamps (0.45 s decay).
- **Sound**: projector bed at -27 dB under everything; keys -17; carriage -22; paper -14..-17; whip/whoosh on glides -13..-19;
  pen -15; string -15; stamp -9..-14; boom -8 (big) / burst -15..-18 (map); plane -17; tank -19; beeps -24 for highlights.
  Voice is the loudest element; final mix ≈ -16 to -18 LUFS. No music (the viewer adds music later).
- **Pacing**: a new visual event every 1.5-3 s; a camera move every 4-8 s; a map moment at least once per minute when
  geography matters; chapter worlds of 30-120 s.

### Composition grammar bank (rotate; never the same twice in a row)
1 Date card on bare desk · 2 Single hero print + stacked labels · 3 Two prints side by side (compare) · 4 Print shrinks aside,
new print lands (sequence) · 5 Map wide → push to region with country glow · 6 Map with arrows + icons (movement/battle) ·
7 Evidence board: prints around a centre card with strings · 8 Board pinned onto the map (people ↔ places) ·
9 Document/telegram print with red underlines (quotes) · 10 Big number card (casualties/money) rolling up ·
11 Timeline strip of small dated prints along a string · 12 Stamp finale (verdict) · 13 Route map (escape/journey) with
moving dot · 14 Close-up crop inside a print with red circle (detail reveal) · 15 Strikethrough reveal ("NOT X. Y.").

## 4 TECHNIQUE LADDER (already decided for this style)
Remotion (React, `useCurrentFrame/interpolate/spring` only) + ffmpeg + numpy SFX synth + pocketsphinx aligner.
All 2D/2.5D: fast on CPU (~0.17 s/frame at 1080p on 4 cores: a 10-min video ≈ 50 min render). No GPU, no 3D, no
AI video. If the environment is slower (ENV-REPORT), render a 960×540 preview first only if the viewer asks; otherwise go
straight to the final, using `render_long.sh` (chunked, resumable).

## 5 FILES & COMMANDS (run from the pack root unless noted)
- `00-setup/engine/`: Remotion project. Style kit: `src/styles/dossier/{tokens.ts,kit.tsx}`. Videos: `src/videos/<slug>/`.
  Assets per video: `public/<slug>/` (prints, mix.wav, map json). Register each video in `src/Root.tsx`.
- Tools (`00-setup/tools/`): `voice/trim.py`, `voice/align.py`, `prep_prints.py`, `fetch_basemap.sh`, `make_map.py`,
  `make_textures.py --seed N`, `make_sfx_dossier.py`, `mix.py`, `contact_sheets.py`, `render_long.sh`, `bench_render.sh`, `env_report.sh`.
- Reference implementation (the approved calibration): `02-videos/_example-ww2/` (read `World.tsx` before building).

## 6 QA CHECKLIST (before delivering)
duration = voice + 1 s · spot-check 10 words: visual lands on the word frame · contact sheet every 2 s of the final
(`contact_sheets.py out.mp4 qa --fps 0.5`) and LOOK at it · no clipped labels/edges · no overlaps · no empty desk frames
longer than 0.5 s · countries highlighted are the ones spoken · dates/names spelled right (match research.md) ·
loudness -16..-18 LUFS, true peak < -1 dBTP · credits text written.

## 7 TROUBLESHOOTING
- `npm install` fails → check registry access (ENV-REPORT); retry; versions are pinned in package.json.
- Fonts missing → they come from npm (@fontsource); never from Google Fonts.
- Chromium not found → remotion.config.ts auto-detects /opt/pw-browsers; otherwise Remotion downloads its own.
- Basemap host blocked → ask the viewer for a map image (AI prompt: "antique 1930s engraved map of <region>, sepia paper,
  no text") and use it as the plate; draw highlights by hand-placed outlines/markers.
- Alignment fails (pocketsphinx) → check `UNKNOWN WORDS` and add them to `spoken.json`; for very long audio split the
  script by chapter and the audio at the matching long pauses, align each part, add offsets.
- React error #310 → a hook after an early `return null` in a component; move hooks above the return.
- Render too slow / session limits → `render_long.sh` with 60 s chunks resumes where it stopped.
- The container is temporary: tell the viewer to download the MP4 as soon as it is delivered.
