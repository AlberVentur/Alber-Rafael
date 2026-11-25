---
name: dossier-style
description: The locked Vintage Dossier look, motion, camera and sound rules (tokens, timings, bans). Use whenever designing or reviewing any frame of a Dossier video.
---
# Style rules (locked after calibration)
Source of truth: MASTER-PROMPT §3 Style Bible + `00-setup/engine/src/styles/dossier/tokens.ts`.
Must feel the same in every video:
1. One continuous desk world per chapter: the camera glides; prints shrink aside before the next lands.
2. Archival tactility: prints with borders/pins/shadows, redaction-tape typewriter labels, red pen, strings, stamps, grain.
3. Living maps: right-era borders, glowing country highlights in nation colours, arrows and cartoon icons that act out events.
Bans: hard-cut slideshows, flat full-screen photos without the print treatment, modern UI/neon/gradients, emojis,
stock "glitch" transitions, music beds, captions/subtitles (text appears only as typewriter labels/dates), more than one
accent colour outside maps, cartoon PEOPLE (icons are vehicles/objects/helmets only), gore.
Motion numbers: print drop spring {damping 15, stiffness 140, mass .9}; glide 0.5-0.9 s ease-in-out (0.65,0,0.35,1);
pen ellipse 0.5 s; strike 0.3 s; string 0.4 s; stamp spring {14,420,.5}; shake 0.45 s; year roll 0.5-0.8 s; push 3-7 %/beat.
Map colours (NATION): aggressor 168,44,40 · defender 58,108,168 · ally 64,138,84 · neutral 196,160,70.
