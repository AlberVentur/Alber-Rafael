"""Genera un YouTube Short (1080x1920, 30 s) sobre el lanzamiento de GTA VI.
Todo el contenido (gráficos, animaciones y música) se genera aquí por código:
no usa clips, logos ni música de terceros, así que es 100 % original.

Uso:  python3 render.py   ->  gta6_short.mp4
"""
import math, random, subprocess, wave
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H, FPS, DUR = 1080, 1920, 30, 30.0
N = int(FPS * DUR)
SR = 44100
OUT = "gta6_short.mp4"
random.seed(6); np.random.seed(6)

F_BLACK = "/usr/share/fonts/opentype/inter/Inter-Black.otf"
F_BOLD = "/usr/share/fonts/opentype/inter/Inter-Bold.otf"
F_XB = "/usr/share/fonts/opentype/inter/Inter-ExtraBold.otf"
_fc = {}
def font(path, size):
    k = (path, int(size))
    if k not in _fc:
        _fc[k] = ImageFont.truetype(path, int(size))
    return _fc[k]

PINK = (255, 46, 151); CYAN = (0, 234, 255); YELLOW = (255, 214, 10)
WHITE = (255, 255, 255); ORANGE = (255, 120, 40)

def ease_out(t): t = max(0, min(1, t)); return 1 - (1 - t) ** 3
def ease_back(t):
    t = max(0, min(1, t)); c = 1.7
    return 1 + (c + 1) * (t - 1) ** 3 + c * (t - 1) ** 2

# ---------------------------------------------------------------- fondo
def make_sky():
    y = np.linspace(0, 1, H)[:, None]
    top = np.array([18, 4, 48]); mid = np.array([140, 20, 120]); low = np.array([255, 110, 60])
    a = np.clip(y / 0.55, 0, 1); b = np.clip((y - 0.55) / 0.15, 0, 1)
    col = top * (1 - a) + mid * a
    col = col * (1 - b) + low * b
    img = np.repeat(col[:, None, :], W, axis=1)
    stars = np.random.rand(H, W) > 0.9992
    img[stars & (y < 0.45).repeat(W, 1)] = 255
    return Image.fromarray(img.astype(np.uint8))

SKY = make_sky()
HORIZON = int(H * 0.70)

def draw_sun(img, t):
    sun = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(sun)
    cx, cy, r = W // 2, HORIZON - 40, 330
    for i in range(r, 0, -2):
        k = i / r
        c = (255, int(60 + 160 * (1 - k)), int(90 * k))
        d.ellipse([cx - i, cy - i, cx + i, cy + i], fill=c + (255,))
    # franjas retro
    for j in range(7):
        yy = cy + 40 + j * 38 + int((t * 30) % 38)
        hh = 4 + j * 3
        d.rectangle([0, yy, W, yy + hh], fill=(0, 0, 0, 0))
    mask = Image.new("L", (W, H), 0)
    ImageDraw.Draw(mask).rectangle([0, 0, W, HORIZON], fill=255)
    glow = sun.filter(ImageFilter.GaussianBlur(40))
    img.alpha_composite(glow); img.paste(sun, (0, 0), Image.composite(sun.split()[3], Image.new("L", (W, H), 0), mask))

def palm(d, x, base, h, lean, col):
    pts = []
    for i in range(20):
        k = i / 19
        pts.append((x + lean * k * k, base - h * k))
    for i in range(len(pts) - 1):
        d.line([pts[i], pts[i + 1]], fill=col, width=int(26 - 14 * i / 19))
    tx, ty = pts[-1]
    for ang in range(0, 360, 36):
        a = math.radians(ang)
        L = 210
        p = [(tx, ty)]
        for s in range(1, 9):
            k = s / 8
            p.append((tx + math.cos(a) * L * k, ty + math.sin(a) * L * k * 0.55 + 90 * k * k))
        d.line(p, fill=col, width=18, joint="curve")

def draw_city(img, t):
    d = ImageDraw.Draw(img)
    rnd = random.Random(3)
    x = -40
    off = int(t * 12) % 60
    while x < W + 60:
        bw = rnd.randint(50, 120); bh = rnd.randint(80, 330)
        d.rectangle([x - off, HORIZON - bh, x - off + bw, HORIZON], fill=(30, 6, 50))
        for wy in range(HORIZON - bh + 14, HORIZON - 10, 26):
            for wx in range(x - off + 10, x - off + bw - 10, 22):
                if rnd.random() > 0.55:
                    d.rectangle([wx, wy, wx + 8, wy + 12], fill=(255, 200, 120))
        x += bw + rnd.randint(0, 20)

def draw_grid(img, t):
    d = ImageDraw.Draw(img)
    d.rectangle([0, HORIZON, W, H], fill=(14, 2, 30))
    vx = W / 2
    for i in range(-14, 15):
        d.line([(vx + i * 30, HORIZON), (vx + i * 260, H)], fill=PINK, width=3)
    sp = (t * 1.2) % 1
    for i in range(14):
        z = (i + sp) / 14
        yy = HORIZON + (H - HORIZON) * z ** 2.2
        d.line([(0, yy), (W, yy)], fill=PINK, width=max(2, int(5 * z)))
    d.line([(0, HORIZON), (W, HORIZON)], fill=CYAN, width=5)

def background(t):
    img = SKY.copy().convert("RGBA")
    draw_sun(img, t)
    draw_city(img, t)
    draw_grid(img, t)
    d = ImageDraw.Draw(img)
    sway = math.sin(t * 1.4) * 12
    palm(d, 90, HORIZON + 40, 900, 120 + sway, (8, 0, 18))
    palm(d, W - 80, HORIZON + 60, 780, -140 - sway, (8, 0, 18))
    # oscurecer zona de texto
    shade = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(shade).rectangle([0, 0, W, H], fill=(10, 0, 25, 110))
    img.alpha_composite(shade)
    return img

# ------------------------------------------------------------ utilidades texto
def neon_text(img, xy, text, f, fill=WHITE, glow=PINK, anchor="mm", stroke=8, alpha=1.0, gr=18):
    if alpha <= 0: return
    layer = Image.new("RGBA", img.size, (0, 0, 0, 0))
    ImageDraw.Draw(layer).text(xy, text, font=f, fill=glow + (255,), anchor=anchor,
                               stroke_width=stroke, stroke_fill=glow + (255,))
    layer = layer.filter(ImageFilter.GaussianBlur(gr))
    ImageDraw.Draw(layer).text(xy, text, font=f, fill=fill + (255,), anchor=anchor,
                               stroke_width=6, stroke_fill=(0, 0, 0, 255))
    if alpha < 1:
        a = layer.split()[3].point(lambda v: int(v * alpha)); layer.putalpha(a)
    img.alpha_composite(layer)

def scaled_text(img, xy, text, path, size, scale, **kw):
    s = max(1, size * scale)
    neon_text(img, xy, text, font(path, s), **kw)

def pill(img, cx, cy, text, f, bg=YELLOW, fg=(0, 0, 0), alpha=1.0):
    d = ImageDraw.Draw(img)
    b = d.textbbox((0, 0), text, font=f)
    w, h = b[2] - b[0] + 70, b[3] - b[1] + 44
    layer = Image.new("RGBA", img.size, (0, 0, 0, 0)); ld = ImageDraw.Draw(layer)
    ld.rounded_rectangle([cx - w / 2, cy - h / 2, cx + w / 2, cy + h / 2], radius=h // 2, fill=bg + (255,))
    ld.text((cx, cy), text, font=f, fill=fg + (255,), anchor="mm")
    if alpha < 1:
        layer.putalpha(layer.split()[3].point(lambda v: int(v * alpha)))
    img.alpha_composite(layer)

# ----------------------------------------------------------------- escenas
# (inicio, fin) en segundos
SCENES = [(0, 3.5), (3.5, 8), (8, 13), (13, 18.5), (18.5, 23.5), (23.5, 27), (27, 30)]

def s_hook(img, t):
    k = ease_back(t / 0.5)
    scaled_text(img, (W / 2, 640), "GTA VI", F_BLACK, 250, k, glow=PINK)
    if t > 0.5:
        a = ease_out((t - 0.5) / 0.4)
        neon_text(img, (W / 2, 860), "YA ESTÁ AQUÍ", font(F_BLACK, 120), fill=YELLOW, glow=ORANGE, alpha=a)
    if t > 1.4:
        a = ease_out((t - 1.4) / 0.4)
        neon_text(img, (W / 2, 1060), "pero hay algo", font(F_BOLD, 76), glow=CYAN, alpha=a, gr=12)
        neon_text(img, (W / 2, 1150), "que debes saber 👀".replace(" 👀", "…"), font(F_BOLD, 76), glow=CYAN, alpha=a, gr=12)

def s_date(img, t):
    neon_text(img, (W / 2, 380), "SALIÓ EL", font(F_BLACK, 100), glow=CYAN)
    # calendario
    k = ease_back(t / 0.6)
    cw, ch = 560 * k, 600 * k
    cx, cy = W / 2, 860
    if k > 0.05:
        layer = Image.new("RGBA", img.size, (0, 0, 0, 0)); d = ImageDraw.Draw(layer)
        d.rounded_rectangle([cx - cw / 2, cy - ch / 2, cx + cw / 2, cy + ch / 2], 40, fill=(255, 255, 255, 240))
        d.rounded_rectangle([cx - cw / 2, cy - ch / 2, cx + cw / 2, cy - ch / 2 + 150 * k], 40, fill=PINK + (255,))
        d.rectangle([cx - cw / 2, cy - ch / 2 + 100 * k, cx + cw / 2, cy - ch / 2 + 150 * k], fill=PINK + (255,))
        d.text((cx, cy - ch / 2 + 78 * k), "NOVIEMBRE", font=font(F_BLACK, max(1, 70 * k)), fill=WHITE, anchor="mm")
        d.text((cx, cy + 70 * k), "19", font=font(F_BLACK, max(1, 330 * k)), fill=(20, 0, 40), anchor="mm")
        img.alpha_composite(layer)
    if t > 0.9:
        a = ease_out((t - 0.9) / 0.4)
        neon_text(img, (W / 2, 1300), "DE 2026", font(F_BLACK, 120), fill=YELLOW, glow=ORANGE, alpha=a)
    if t > 1.8:
        pill(img, W / 2, 1480, "Tras 2 retrasos", font(F_XB, 64), alpha=ease_out((t - 1.8) / 0.3))

def console(layer, cx, cy, s, col, label):
    d = ImageDraw.Draw(layer)
    d.rounded_rectangle([cx - 150 * s, cy - 230 * s, cx + 150 * s, cy + 230 * s], int(40 * s), outline=col + (255,), width=max(1, int(12 * s)), fill=(20, 0, 40, 230))
    d.ellipse([cx - 40 * s, cy - 170 * s, cx + 40 * s, cy - 90 * s], outline=col + (255,), width=max(1, int(8 * s)))
    d.text((cx, cy + 120 * s), label, font=font(F_BLACK, max(1, 70 * s)), fill=WHITE, anchor="mm")

def s_consoles(img, t):
    neon_text(img, (W / 2, 380), "SOLO EN", font(F_BLACK, 110), glow=CYAN)
    layer = Image.new("RGBA", img.size, (0, 0, 0, 0))
    s1 = ease_back(t / 0.5); s2 = ease_back((t - 0.3) / 0.5)
    if s1 > 0.02: console(layer, W / 2 - 230, 900, s1, CYAN, "PS5")
    if s2 > 0.02: console(layer, W / 2 + 230, 900, s2, (60, 255, 120), "XBOX")
    glow = layer.filter(ImageFilter.GaussianBlur(14))
    img.alpha_composite(glow); img.alpha_composite(layer)
    if t > 0.9:
        a = ease_out((t - 0.9) / 0.4)
        neon_text(img, (W / 2 + 230, 1210), "Series X|S", font(F_BOLD, 60), glow=(60, 255, 120), alpha=a, gr=10)
    if t > 1.6:
        pill(img, W / 2, 1420, "Consolas de nueva generación", font(F_XB, 56), alpha=ease_out((t - 1.6) / 0.3))

def s_pc(img, t):
    k = ease_back(t / 0.5)
    shake = math.sin(t * 60) * 10 * max(0, 1 - t / 0.6)
    scaled_text(img, (W / 2 + shake, 560), "¿Y EN PC?", F_BLACK, 150, k, glow=PINK)
    if t > 0.7:
        s = ease_back((t - 0.7) / 0.4)
        layer = Image.new("RGBA", img.size, (0, 0, 0, 0)); d = ImageDraw.Draw(layer)
        r = 150 * s; cx, cy = W / 2, 870
        d.ellipse([cx - r, cy - r, cx + r, cy + r], outline=(255, 40, 60, 255), width=max(1, int(24 * s)))
        d.line([(cx - r * 0.7, cy - r * 0.7), (cx + r * 0.7, cy + r * 0.7)], fill=(255, 40, 60, 255), width=max(1, int(24 * s)))
        img.alpha_composite(layer.filter(ImageFilter.GaussianBlur(10))); img.alpha_composite(layer)
    if t > 1.3:
        a = ease_out((t - 1.3) / 0.4)
        neon_text(img, (W / 2, 1120), "SIN FECHA", font(F_BLACK, 120), fill=YELLOW, glow=ORANGE, alpha=a)
        neon_text(img, (W / 2, 1240), "ANUNCIADA", font(F_BLACK, 120), fill=YELLOW, glow=ORANGE, alpha=a)
    if t > 2.6:
        a = ease_out((t - 2.6) / 0.4)
        pill(img, W / 2, 1430, "GTA V tardó ~1,5 años en PC", font(F_XB, 54), alpha=a)
        pill(img, W / 2, 1550, "RDR2 tardó ~1 año", font(F_XB, 54), bg=CYAN, alpha=a)

def s_preorders(img, t):
    neon_text(img, (W / 2, 420), "RÉCORD", font(F_BLACK, 130), glow=PINK)
    v = 12 * ease_out(t / 1.6)
    scaled_text(img, (W / 2, 780), f"+{v:0.0f}M" if t > 1.6 else f"+{v:0.1f}M", F_BLACK, 270, 1.0, fill=YELLOW, glow=ORANGE)
    neon_text(img, (W / 2, 990), "de reservas", font(F_BLACK, 100), glow=CYAN)
    neon_text(img, (W / 2, 1100), "antes del lanzamiento", font(F_BOLD, 64), glow=CYAN, gr=10)
    if t > 2.2:
        pill(img, W / 2, 1300, "Estimación: Sensor Tower", font(F_BOLD, 44), bg=(255, 255, 255), alpha=ease_out((t - 2.2) / 0.3))
    # barras animadas
    d = ImageDraw.Draw(img)
    for i in range(9):
        hh = 60 + 330 * ease_out((t - i * 0.08) / 0.9) * (0.35 + 0.65 * (i + 1) / 9)
        x0 = 150 + i * 88
        d.rounded_rectangle([x0, 1700 - hh, x0 + 60, 1700], 10, fill=PINK if i % 2 else CYAN)

def s_question(img, t):
    k = ease_back(t / 0.5)
    scaled_text(img, (W / 2, 640), "¿TÚ QUÉ", F_BLACK, 150, k, glow=PINK)
    scaled_text(img, (W / 2, 800), "HARÁS?", F_BLACK, 150, k, glow=PINK)
    if t > 0.8:
        a = ease_out((t - 0.8) / 0.3)
        pill(img, W / 2, 1050, "🎮 Jugar YA en consola".replace("🎮 ", ""), font(F_XB, 66), bg=CYAN, alpha=a)
    if t > 1.3:
        a = ease_out((t - 1.3) / 0.3)
        pill(img, W / 2, 1200, "Esperar la versión de PC", font(F_XB, 66), bg=YELLOW, alpha=a)
    if t > 2.0:
        neon_text(img, (W / 2, 1400), "Dímelo en comentarios ↓", font(F_BOLD, 66), glow=CYAN, alpha=ease_out((t - 2) / 0.4), gr=10)

def s_cta(img, t):
    k = ease_back(t / 0.5)
    scaled_text(img, (W / 2, 700), "SÍGUEME", F_BLACK, 170, k, fill=YELLOW, glow=ORANGE)
    neon_text(img, (W / 2, 900), "para todas las noticias", font(F_BOLD, 70), glow=PINK, alpha=ease_out((t - .3) / .4), gr=12)
    neon_text(img, (W / 2, 990), "de GTA VI", font(F_BLACK, 100), glow=PINK, alpha=ease_out((t - .3) / .4))
    if t > 0.9:
        s = 1 + 0.06 * math.sin((t - 0.9) * 8)
        layer = Image.new("RGBA", img.size, (0, 0, 0, 0)); d = ImageDraw.Draw(layer)
        w, h = 420 * s, 130 * s
        d.rounded_rectangle([W / 2 - w / 2, 1220 - h / 2, W / 2 + w / 2, 1220 + h / 2], int(30 * s), fill=(255, 0, 40, 255))
        d.text((W / 2, 1220), "SUSCRIBIRME", font=font(F_BLACK, 56 * s), fill=WHITE, anchor="mm")
        img.alpha_composite(layer)

FUNCS = [s_hook, s_date, s_consoles, s_pc, s_preorders, s_question, s_cta]

def glitch(img, amt):
    """Transición: desplaza el canal rojo/azul y corta franjas."""
    if amt <= 0: return img
    a = np.array(img.convert("RGB"))
    sh = int(40 * amt)
    a[..., 0] = np.roll(a[..., 0], sh, axis=1)
    a[..., 2] = np.roll(a[..., 2], -sh, axis=1)
    for _ in range(int(10 * amt)):
        y = random.randint(0, H - 80); hh = random.randint(10, 80)
        a[y:y + hh] = np.roll(a[y:y + hh], random.randint(-120, 120), axis=1)
    return Image.fromarray(a)

def frame(i):
    t = i / FPS
    img = background(t)
    for (s, e), fn in zip(SCENES, FUNCS):
        if s <= t < e:
            fn(img, t - s)
            # transición glitch al cambiar de escena
            g = max(0, 1 - (t - s) / 0.18) if s > 0 else 0
            g = max(g, max(0, 1 - (e - t) / 0.12) if e < DUR else 0)
            break
    # barra de progreso
    d = ImageDraw.Draw(img)
    d.rectangle([0, H - 14, W * t / DUR, H], fill=YELLOW)
    # marca de canal (cámbiala por la tuya)
    d.text((W / 2, 150), "NOTICIAS GTA VI", font=font(F_XB, 44), fill=(255, 255, 255, 200), anchor="mm")
    out = img.convert("RGB")
    if g > 0:
        out = glitch(out, g)
    # flash blanco en el primer frame de cada escena
    for s, _ in SCENES:
        if 0 <= t - s < 2 / FPS:
            out = Image.blend(out, Image.new("RGB", (W, H), WHITE), 0.55)
    return out

# ------------------------------------------------------------------ música
def music():
    n = int(SR * DUR); out = np.zeros(n)
    bpm = 112; beat = 60 / bpm; tt = np.arange(n) / SR
    def add(sig, start):
        s = int(start * SR); e = min(n, s + len(sig)); out[s:e] += sig[:e - s]
    def env(L, a=0.005, r=0.2):
        x = np.arange(int(L * SR)) / SR
        return np.minimum(1, x / a) * np.exp(-x / r)
    # kick
    L = 0.4; x = np.arange(int(L * SR)) / SR
    kick = np.sin(2 * np.pi * (50 + 120 * np.exp(-x * 25)) * x) * np.exp(-x * 8)
    snare = np.random.randn(int(0.25 * SR)) * env(0.25, r=0.06) * 0.5
    hat = np.diff(np.random.randn(int(0.06 * SR) + 1)) * env(0.06, r=0.015) * 0.25
    roots = [45, 41, 48, 43]  # A, F, C, G (midi)
    nb = int(DUR / beat) + 1
    for b in range(nb):
        st = b * beat
        if st > DUR: break
        intro = st < 0.9
        if not intro:
            add(kick * 0.9, st)
            if b % 2 == 1: add(snare, st)
        for h in range(2): add(hat, st + h * beat / 2)
        root = roots[(b // 4) % 4]
        for sub in range(2):  # bajo en corcheas
            f = 440 * 2 ** ((root - 69 - 12) / 12)
            L = beat / 2; x = np.arange(int(L * SR)) / SR
            saw = 2 * ((x * f) % 1) - 1
            add(saw * np.exp(-x * 6) * 0.22, st + sub * beat / 2)
        # arpegio
        for k, iv in enumerate([0, 7, 12, 15]):
            f = 440 * 2 ** ((root + 12 + iv - 69) / 12)
            L = beat / 4; x = np.arange(int(L * SR)) / SR
            add(np.sign(np.sin(2 * np.pi * f * x)) * np.exp(-x * 14) * 0.06, st + k * beat / 4)
    # pad
    for c in range(int(DUR / (4 * beat)) + 1):
        root = roots[c % 4]; st = c * 4 * beat; L = 4 * beat
        x = np.arange(int(L * SR)) / SR
        sig = sum(np.sin(2 * np.pi * 440 * 2 ** ((root + 12 + iv - 69) / 12) * x) for iv in (0, 3, 7))
        add(sig * 0.04 * np.minimum(1, x / 0.5) * np.minimum(1, (L - x) / 0.5), st)
    # whoosh en transiciones
    for s, _ in SCENES[1:]:
        L = 0.5; x = np.arange(int(L * SR)) / SR
        w = np.random.randn(len(x)); w = np.convolve(w, np.ones(20) / 20, "same")
        add(w * np.sin(np.pi * x / L) * 0.9, s - 0.3)
    # impacto inicial
    add(kick * 1.4, 0.0)
    fade = np.minimum(1, (DUR - tt) / 1.2)
    out = out * fade
    out = np.tanh(out * 1.3)
    out /= np.max(np.abs(out)) + 1e-9
    pcm = (out * 0.85 * 32767).astype(np.int16)
    st = np.stack([pcm, pcm], axis=1)
    with wave.open("music.wav", "wb") as wf:
        wf.setnchannels(2); wf.setsampwidth(2); wf.setframerate(SR); wf.writeframes(st.tobytes())

if __name__ == "__main__":
    music()
    p = subprocess.Popen(["ffmpeg", "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24",
                          "-s", f"{W}x{H}", "-r", str(FPS), "-i", "-", "-i", "music.wav",
                          "-c:v", "libx264", "-preset", "medium", "-crf", "18", "-pix_fmt", "yuv420p",
                          "-c:a", "aac", "-b:a", "192k", "-shortest", "-movflags", "+faststart", OUT],
                         stdin=subprocess.PIPE)
    for i in range(N):
        p.stdin.write(frame(i).tobytes())
        if i % 150 == 0: print(f"frame {i}/{N}", flush=True)
    p.stdin.close(); p.wait()
    print("listo:", OUT)
