---
name: dossier-voice-sync
description: Voiceover handling for Vintage Dossier videos - trimming pauses, forced word alignment with pocketsphinx, spoken overrides, sanity checks, and turning word times into timeline.json events.
---
# Voice sync rules
- Voice is the clock. Every element starts at the frame of its word: `frame = round(word.start * 30)`.
- Trim: `voice/trim.py` keeps pauses < 0.2 s, shortens longer ones naturally. Always align the TRIMMED file.
- Align: `voice/align.py audio.wav script.txt words.json` (script.txt = spoken text). Output `[{word,start,end}]`.
  Unknown words → `spoken.json` beside script.txt: `{"Daladier":"dah lah dee ay","WWII":"world war two"}`.
- Verify: count words == script words; silences (silencedetect) sit between sentences; last end ≈ duration - tail.
- Typewriter labels start ON the word (or 0.1 s after); typing speed `cps` chosen so the label finishes before the next beat.
- Glides start 0.3-0.5 s before the word that needs the new place, and land on the word.
- Nothing new appears in the last 0.9 s before the camera leaves a spot.
- Without pocketsphinx (install failed): estimate word times by distributing each sentence's words across the speech
  segments between silences (proportional to character count). Tell the viewer sync is approximate.
