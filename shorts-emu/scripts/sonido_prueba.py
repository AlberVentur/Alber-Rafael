# Sonido de prueba (Opción A de SKILL.md): todo sintetizado con plantillas/audio, sin voz.
# Fondo grave y whooshes en los movimientos de cámara, -14 LUFS.
import sys, os, numpy as np
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "audio"))
from dsp import SR, ns, rng, lp, hp, colored, fades, write_wav, integrated, dbg
from sfx_gen import whoosh
DUR = 3.0; n = ns(DUR); r = rng(7)
mix = np.zeros((2, n))
bed = lp(colored(n, r, 1.0), 220) * 0.25                     # rumor grave de batalla lejana
crack = hp(colored(n, r, 0.0), 2500) * (r.random(n) < 0.0008) * 3.0   # chasquidos de fuego
mix += (bed + crack)[None, :]
for t, pan in [(0.1, -0.3), (1.4, 0.3), (2.3, 0.0)]:          # whoosh en cada deslizamiento de cámara
    w = whoosh(0.9, r, peak=0.35) * 0.9; a = ns(t); b = min(n, a + len(w))
    mix[0, a:b] += w[: b - a] * (1 - pan); mix[1, a:b] += w[: b - a] * (1 + pan)
mix = fades(mix, 0.02, 0.15)
g = -14.0 - integrated(mix); mix *= dbg(g)
for _ in range(3):
    mix = 0.89 * np.tanh(mix / 0.89); mix *= dbg(-14.0 - integrated(mix))
mix = 0.89 * np.tanh(mix / 0.89)
write_wav(sys.argv[1], mix)
print("LUFS", round(integrated(mix), 1))
