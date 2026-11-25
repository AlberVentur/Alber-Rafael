#!/usr/bin/env python3
"""make_textures.py <public_dir> [--seed N] : desk, paper, map-plate textures + 4 film-grain tiles (procedural, no downloads).
Change --seed per video so the desk never looks identical twice (anti-template)."""
import sys, os, argparse, numpy as np
from PIL import Image
ap = argparse.ArgumentParser(); ap.add_argument('pub'); ap.add_argument('--seed', type=int, default=3)
ap.add_argument('--desk-dark', default='14,11,9'); ap.add_argument('--desk-light', default='52,42,33')
a = ap.parse_args(); os.makedirs(a.pub, exist_ok=True); rng = np.random.default_rng(a.seed)
def fbm(w, h, octaves=6, base=4):
    out = np.zeros((h, w), np.float32); amp = 1; tot = 0
    for o in range(octaves):
        n = base * 2 ** o; g = rng.random((n + 1, int(n * w / h) + 2)).astype(np.float32)
        out += amp * np.asarray(Image.fromarray((g * 255).astype(np.uint8)).resize((w, h), Image.BICUBIC), np.float32) / 255; tot += amp; amp *= 0.55
    out /= tot; return (out - out.min()) / (out.max() - out.min())
def tint(v, d, l): v = v[..., None]; return (np.array(d) * (1 - v) + np.array(l) * v).clip(0, 255).astype(np.uint8)
rgb = lambda s: tuple(int(x) for x in s.split(','))
Image.fromarray(tint(fbm(1920, 1080) ** 1.3, rgb(a.desk_dark), rgb(a.desk_light))).save(f'{a.pub}/desk.jpg', quality=92)
Image.fromarray(tint(fbm(1200, 1200, base=6), (196, 182, 152), (236, 226, 204))).save(f'{a.pub}/paper.jpg', quality=92)
Image.fromarray(tint(fbm(3840, 2160, base=3), (120, 104, 78), (176, 158, 120))).save(f'{a.pub}/mapplate.jpg', quality=90)
for i in range(4):
    Image.fromarray(rng.normal(128, 38, (540, 960)).clip(0, 255).astype(np.uint8)).resize((1920, 1080), Image.NEAREST).save(f'{a.pub}/grain{i}.png')
print('textures ok ->', a.pub)
