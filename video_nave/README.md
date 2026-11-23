# 🚀 Llena la nave — generador de videos para seguidores

Crea videos verticales (1080x1920, para TikTok, Reels y Shorts) con el formato viral
**"llena la nave"**: una nave tiene 1.000 cápsulas, **cada seguidor ocupa una**,
los que **comentan** aparecen con su nombre en una cápsula, y al llegar a la meta la nave **despega**.

El objetivo es que tus seguidores participen: **seguir** = subir a bordo,
**comentar** = ver su nombre en el siguiente video.

## 1. Instalar (una sola vez)

| Sistema | Comando |
|---|---|
| Windows | doble clic en `instalar.bat` |
| Linux / Mac | `./instalar.sh` |

Se instalan: **ffmpeg** (crea el video), **Python + Pillow + NumPy** (dibujan la animación)
y **edge-tts** (voz narradora en español; necesita internet).

## 2. Crear un video

```bash
python generar_video.py                     # usa config.json
python generar_video.py --rapido            # vista previa rápida en baja calidad
```

El video queda en `salida/nave_37_de_1000.mp4`, junto con un `_descripcion.txt` que tiene
el texto y los hashtags listos para pegar al publicarlo.

## 3. Rutina para que la comunidad participe

1. Publica el primer video. En la descripción pide: *"Síguenos y comenta tu nombre"*.
2. Cada pocos días, mira tus seguidores y copia nombres de los comentarios.
3. Genera el nuevo episodio con los datos reales:
   ```bash
   python generar_video.py --seguidores 152 --nombres "Ana,Leo,Marta"
   ```
   (Los nombres se guardan en `config.json` y se acumulan.)
4. Publica, fija un comentario del tipo *"¿Ya viste tu cápsula? 👀"* y responde comentarios:
   la gente vuelve para ver si salió su nombre.
5. Al llegar a una meta (100, 500, 1.000) haz el video de **despegue** como celebración.

## 4. Personalizar (`config.json`)

| Campo | Qué hace |
|---|---|
| `cuenta` | Tu @usuario (marca de agua) |
| `capacidad` | Cápsulas totales de la nave (meta final) |
| `seguidores_actuales` | Cápsulas encendidas / contador |
| `tripulantes` | Nombres que aparecen dentro de las cápsulas |
| `voz` | Voz narradora (`es-MX-JorgeNeural`, `es-ES-ElviraNeural`, `es-AR-TomasNeural`…) |
| `narracion` | `false` para solo música |
| `escenas` | Guion: cada escena tiene `tipo` y `texto`. Las palabras entre `*asteriscos*` salen en amarillo. Puedes añadir `"duracion": 4` |

Tipos de escena: `zoom_nave`, `nave`, `pasillo`, `capsulas` (termina con la cápsula **TÚ**),
`nombres`, `meta` (con `"meta": 100`), `despegue`, `cta`.

> Consejo: los primeros 2 segundos deciden si la gente se queda. Empieza con una pregunta
> o con el número grande ("Esta nave tiene **1.000** cápsulas").

---

## 🌌 Estación de las 1.000 ventanas — ALTA CALIDAD (con tu voz)

Video con luces, brillos, niebla, planeta realista, efectos de sonido y subtítulos palabra por palabra
sincronizados con tu audio narrado. Se dibuja con Chromium (Playwright), cuadro por cuadro.

```bash
npm install playwright && npx playwright install chromium   # una sola vez (además de ffmpeg y Python)
python estacion_hq.py --audio mi_voz.mp3 --suscriptores 152 --cuenta @mi_canal
python estacion_hq.py --prueba 1,8,16      # solo imágenes sueltas para revisar rápido
```

- El guion está en `estacion.json` → `lineas`. Graba **una pausa corta entre frases**:
  el programa detecta las pausas y pone cada frase (y su escena) en su momento exacto.
- `escena` marca dónde empieza cada ambiente: `estacion_zoom`, `estacion`, `pasillo`, `casco`, `tu`,
  `motores`, `orbita`, `radar`, `votacion`.
- Las escenas están en `hq/escenas.js` (dibujo) y la fuente Montserrat (licencia OFL) en `hq/fuentes/`.
