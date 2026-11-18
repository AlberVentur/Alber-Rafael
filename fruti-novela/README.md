# 🍓 Fruti Novela — kit para hacer telenovelas de frutas

Videos verticales (TikTok / Shorts / Reels) donde frutas con cara viven dramas de telenovela:
traiciones, gritos, zoom dramático, subtítulos grandes y música de suspenso.

## 1. Qué descargar / instalar

| Herramienta | Para qué | Gratis | Enlace |
|---|---|---|---|
| **Python 3.10+** | Ejecutar el generador | Sí | https://www.python.org/downloads/ (marca *Add to PATH*) |
| **FFmpeg** | Armar el video | Sí | `winget install Gyan.FFmpeg` o https://ffmpeg.org |
| **edge-tts** | Voces en español (México, España, Argentina…) | Sí | se instala con `instalar.bat` |
| **CapCut** (opcional) | Editar a mano, efectos, stickers | Sí | https://www.capcut.com |
| Generador de **imágenes IA** | Crear las frutas personajes | Con plan gratis | Gemini, ChatGPT, Bing Image Creator, Leonardo.ai |
| Generador de **video IA** (opcional) | Que las frutas se muevan/hablen | Créditos gratis | Google Veo (Gemini/Flow), Kling, Hailuo, Runway, Pika |
| **Música sin copyright** | Fondo dramático | Sí | Biblioteca de audio de YouTube, Pixabay Music |

### Instalación rápida
- **Windows:** doble clic en `instalar.bat`
- **Mac / Linux:** `./instalar.sh`

## 2. Crear los personajes (imágenes IA)

Prompt base (cámbialo por cada fruta), formato vertical 9:16:

```
Fotografía hiperrealista estilo telenovela, una fresa antropomórfica con ojos
grandes expresivos, pestañas largas, labios, brazos pequeños, llorando
dramáticamente, en una cocina lujosa con iluminación cinematográfica,
profundidad de campo, 9:16, 4K
```

Variaciones útiles: *enojada gritando*, *sorprendida con la boca abierta*, *llorando*,
*con vestido de novia*, *en un hospital*, *en una mansión*. Guarda cada imagen en
`ejemplo/personajes/` (por ejemplo `fresa.png`, `fresa_llorando.png`).

Prompt para video IA (Veo / Kling), si quieres que se muevan:

```
Una fresa antropomórfica hiperrealista con ojos y boca grita furiosa a un plátano
antropomórfico en una cocina elegante, cámara hace zoom dramático, iluminación de
telenovela, 9:16, 8 segundos
```

Guarda los clips en `ejemplo/escenas/` y úsalos en el guion.

## 3. Escribir el guion

Edita `ejemplo/guion.txt`:

```
TITULO: La Fresa Traicionada
MUSICA: musica/drama.mp3

@Fresa   = personajes/fresa.png   | es-MX-DaliaNeural | +12Hz | +0%
@Platano = personajes/platano.png | es-MX-JorgeNeural | -4Hz  | +0%

Fresa: Plátano, ¿dónde estabas anoche?
Platano (escenas/clip1.mp4): En el frutero, mi vida.   <- usa un video/imagen solo en esta línea
!Fresa: ¡¿CÓMO PUDISTE?!                              <- "!" = zoom dramático + viñeta
PAUSA 1                                               <- silencio de suspenso
Narrador: Continuará...                               <- el narrador no muestra nombre
```

Voces recomendadas (gratis con edge-tts):
`es-MX-DaliaNeural`, `es-MX-JorgeNeural`, `es-ES-ElviraNeural`, `es-ES-AlvaroNeural`,
`es-AR-ElenaNeural`, `es-AR-TomasNeural`, `es-CO-SalomeNeural`, `es-US-PalomaNeural`.
Ver todas: `edge-tts --list-voices | findstr es-`
Sube el tono (`+20Hz`) para voces chillonas de fruta pequeña, bájalo (`-10Hz`) para villanos.

## 4. Generar el video

```
python generar.py ejemplo/guion.txt
```

Sale `ejemplo/guion.mp4` en 1080×1920, listo para subir. Si falta alguna imagen, el programa
dibuja una fruta de prueba para que veas cómo queda. Después puedes abrirlo en CapCut para
agregar efectos de sonido (*¡dun dun dun!*, gritos, cachetadas) y stickers.

## Tips para que se haga viral
- Primeros 2 segundos con un grito o una revelación (`!` en la primera línea).
- Partes cortas (30–60 s) que terminen en *"Continuará..."*.
- Nombres de telenovela: *"Fresa de mi Corazón"*, *"La Venganza de la Piña"*.
- Mismo personaje = misma imagen base, para que el público lo reconozca.
