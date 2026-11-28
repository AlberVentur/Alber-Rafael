# Proyecto de prueba · estilo CARICATURA ANIMADA

Creado a partir de la skill **NicoVarel/Shorts-zack-films-3d** (commit 8e0fd8d), según el proceso caricatura de su `SKILL.md`.
No se usó nada del estilo realista (Blender).

- `src/videos/alejandro/`: plantilla `plantillas/alejandro/` del repo, sin cambios (composición `Alejandro`, 1080x1920, 30 fps, 295 cuadros).
- `src/Root.tsx`: es `Root_ejemplo.tsx` del repo. `src/index.ts` llama a registerRoot.
- `package.json`: es `package_ejemplo.json` del repo, con las mismas versiones.
- `audio/`: copia de `plantillas/audio/` (sonido sintetizado, opción A).
- `scripts/fotos.mjs`: es `plantillas/scripts/fotos.mjs` y además acepta las variables BROWSER y GL.
- `scripts/sonido_prueba.py`: crea un fondo y whooshes con `audio/` a -14 LUFS, sin voz.

Falta (no viene en el repo): `public/voz/voz2_final.wav`, la voz original. Por eso se renderiza con `--props='{"mute":true}'`.

## Comandos
```bash
npm install
node scripts/fotos.mjs out/foto_ 30,150,250 0.5          # fotos sueltas
npx remotion render src/index.ts Alejandro out/video.mp4 --codec h264 --crf 16 --props='{"mute":true}'
.venv/bin/python scripts/sonido_prueba.py out/sonido.wav
ffmpeg -i out/video.mp4 -i out/sonido.wav -map 0:v:0 -map 1:a:0 -c:v copy -c:a aac -shortest out/final.mp4
```
Sin GPU (servidor) agrega: `--gl=swangle --concurrency=2 --timeout=240000 --browser-executable=<ruta a chrome-headless-shell>`.
