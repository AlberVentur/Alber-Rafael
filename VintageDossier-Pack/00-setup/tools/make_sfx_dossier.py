#!/usr/bin/env python3
"""make_sfx_dossier.py <outdir> : synth SFX set for the Vintage Dossier style (no downloads). 48 kHz mono, peak -3 dBFS."""
import numpy as np, wave, sys, os
SR = 48000; out = sys.argv[1]; os.makedirs(out, exist_ok=True); rng = np.random.default_rng(11)
t = lambda d: np.arange(int(SR * d)) / SR
def bp(x, lo, hi):
    X = np.fft.rfft(x); f = np.fft.rfftfreq(len(x), 1 / SR); X[(f < lo) | (f > hi)] = 0; return np.fft.irfft(X, len(x))
def save(name, x):
    x = x / (np.max(np.abs(x)) + 1e-9) * 0.708; n = int(0.003 * SR); x[:n] *= np.linspace(0, 1, n); x[-n:] *= np.linspace(1, 0, n)
    w = wave.open(f'{out}/{name}.wav', 'wb'); w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes((x * 32767).astype(np.int16).tobytes()); w.close()
def key(var=0):
    x = t(0.09); body = 900 + 300 * var
    clack = bp(rng.standard_normal(len(x)), 1500, 7000) * np.exp(-x * 120)
    thud = np.sin(2 * np.pi * body * x) * np.exp(-x * 90) * 0.5 + np.sin(2 * np.pi * 180 * x) * np.exp(-x * 60) * 0.6
    return clack + thud
for i in range(4): save(f'key{i}', key(i / 3))
# carriage return: ratchet zip + bell
x = t(0.7); zz = bp(rng.standard_normal(len(x)), 800, 4000) * (np.sin(2 * np.pi * 38 * x) > 0.2) * np.exp(-x * 3) * 0.5
bell = (np.sin(2 * np.pi * 2093 * x) + 0.5 * np.sin(2 * np.pi * 4186 * x)) * np.exp(-x * 6)
save('carriage', np.r_[bell[:int(SR * 0.35)], np.zeros(0)] if False else bell * 0.9 + zz)
# paper slide (print enters)
x = t(0.45); n = bp(rng.standard_normal(len(x)), 1200, 9000); save('paper', n * np.sin(np.pi * np.clip(x / 0.45, 0, 1)) ** 2 * (1 + 0.3 * np.sin(2 * np.pi * 23 * x)))
# whip (fast transition)
x = t(0.35); n = rng.standard_normal(len(x)); y = np.concatenate([bp(seg, 300 + 500 * i, 1500 + 1500 * i) for i, seg in enumerate(np.array_split(n, 5))])
save('whip', y * np.sin(np.pi * np.clip(x / 0.35, 0, 1)) ** 3)
# cannon boom (naval gun): sub thump + noisy blast + long rumble
x = t(2.2); f = 38 + 70 * np.exp(-x * 14); ph = 2 * np.pi * np.cumsum(f) / SR
boom = np.sin(ph) * np.exp(-x * 2.2) + 0.8 * bp(rng.standard_normal(len(x)), 40, 900) * np.exp(-x * 2.8) + 0.6 * bp(rng.standard_normal(len(x)), 900, 5000) * np.exp(-x * 25)
save('boom', boom)
# stamp slam
x = t(0.45); f = 70 + 160 * np.exp(-x * 40); ph = 2 * np.pi * np.cumsum(f) / SR
save('stamp', np.sin(ph) * np.exp(-x * 14) + 0.7 * bp(rng.standard_normal(len(x)), 300, 3000) * np.exp(-x * 60))
# pen scratch (red circles/strikes), 0.5 s
x = t(0.5); m = 0.6 + 0.4 * np.abs(np.sin(2 * np.pi * 7 * x)); save('pen', bp(rng.standard_normal(len(x)), 2500, 8000) * m * np.sin(np.pi * x / 0.5) ** 0.6)
# string pull (taut thread drawn between pins): squeaky rising tone + friction
x = t(0.45); f = 600 + 900 * x / 0.45; ph = 2 * np.pi * np.cumsum(f) / SR
save('string', 0.25 * np.sin(ph) * np.sin(np.pi * x / 0.45) + bp(rng.standard_normal(len(x)), 3000, 9000) * np.sin(np.pi * x / 0.45) * 0.6)
# pin tack
x = t(0.12); save('pin', np.sin(2 * np.pi * 3100 * x) * np.exp(-x * 70) + bp(rng.standard_normal(len(x)), 2000, 8000) * np.exp(-x * 200))
# teletype / data ticks (counter roll): burst of square clicks
x = t(0.05); sq = np.sign(np.sin(2 * np.pi * 1600 * x)) * np.exp(-x * 90); save('tick', sq)
# beep (coding/hacking accent)
x = t(0.12); save('beep', np.sign(np.sin(2 * np.pi * 1320 * x)) * 0.5 * (x < 0.1))
# projector bed (looping clatter ~18 Hz, 4 s)
x = t(4.0); clat = np.zeros_like(x); step = int(SR / 18)
for i in range(0, len(x) - 400, step): clat[i:i + 400] += bp(rng.standard_normal(400), 1500, 6000) * np.exp(-np.arange(400) / 60) * (0.7 + 0.3 * rng.random())
hum = 0.15 * np.sin(2 * np.pi * 50 * x) + 0.06 * bp(rng.standard_normal(len(x)), 100, 2000)
save('projector', clat + hum)
# film flash / burn (riser into cut)
x = t(0.6); n = bp(rng.standard_normal(len(x)), 500, 8000); save('flash', n * (x / 0.6) ** 2.5)
print('sfx ok', sorted(os.listdir(out)))
# plane drone flyover (doppler-ish), 1.8 s
x = t(1.8); f0 = 95 * (1 + 0.04 * np.tanh((0.9 - x) * 3)); ph = 2 * np.pi * np.cumsum(f0) / SR
eng = np.sign(np.sin(ph)) * 0.4 + np.sin(2 * ph) * 0.3 + 0.3 * bp(rng.standard_normal(len(x)), 200, 1500)
save('plane', bp(eng, 60, 3000) * np.sin(np.pi * x / 1.8) ** 1.5)
# tank rumble + track clanks, 1.5 s
x = t(1.5); rum = bp(rng.standard_normal(len(x)), 30, 180) * 1.5; cl = np.zeros_like(x); st = int(SR / 9)
for i in range(0, len(x) - 600, st): cl[i:i + 600] += bp(rng.standard_normal(600), 1500, 5000) * np.exp(-np.arange(600) / 90) * 0.5
save('tank', (rum + cl) * np.sin(np.pi * x / 1.5) ** 0.8)
# small cartoon burst (pop + crackle)
x = t(0.7); f = 60 + 140 * np.exp(-x * 25); ph = 2 * np.pi * np.cumsum(f) / SR
save('burst', np.sin(ph) * np.exp(-x * 6) + 0.6 * bp(rng.standard_normal(len(x)), 300, 6000) * np.exp(-x * 9))
print('extra sfx ok')
