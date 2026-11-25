#!/usr/bin/env python3
"""mix.py <timeline.json> <voice.mp3|wav> <sfx_dir> <out.wav> : voice + SFX derived from timeline events (type -> key per char, roll -> tick per step)."""
import json, sys, wave, subprocess, numpy as np
tl, vo, sd, out = sys.argv[1:5]; T = json.load(open(tl)); SR = 48000; N = int(T['duration'] * SR) + SR
raw = subprocess.run(['ffmpeg', '-v', 'error', '-i', vo, '-ac', '1', '-ar', str(SR), '-f', 's16le', '-'], capture_output=True).stdout
v = np.frombuffer(raw, np.int16).astype(np.float32) / 32768; mix = np.zeros(N, np.float32); mix[:len(v)] += v[:N]
cache = {}
def load(n):
    if n not in cache: w = wave.open(f'{sd}/{n}.wav'); cache[n] = np.frombuffer(w.readframes(w.getnframes()), np.int16).astype(np.float32) / 32768
    return cache[n]
def put(n, t, db, loop=False, offset=0.0):
    x = load(n)[int(offset * SR):]; a = int(t * SR); g = 10 ** (db / 20)
    if loop: x = np.tile(x, int(np.ceil((N - a) / len(x))) + 1)
    x = x[:max(0, N - a)]; mix[a:a + len(x)] += x * g
rng = np.random.default_rng(5)
for k, e in T['ev'].items():
    if e['kind'] == 'type':
        for i, ch in enumerate(e['text']):
            if ch != ' ': put(f'key{rng.integers(4)}', e['t'] + i / e['cps'] + rng.uniform(-0.006, 0.006), -17 + rng.uniform(-2, 2))
        if e.get('ding'): put('carriage', e['t'] + len(e['text']) / e['cps'] + 0.05, -22)
    if e['kind'] == 'roll':
        steps = e['to'] - e['from']
        for i in range(steps + 1):
            u = i / max(1, steps); tt = e['t'] + (e['t2'] - e['t']) * (1 - (1 - u) ** 0.5) if False else e['t'] + (e['t2'] - e['t']) * (1 - np.sqrt(1 - u))
            put('tick', tt, -20)
        put('beep', e['t2'], -24)
for s in T['sfx']: put(s['name'], s['t'], s['gain'], s.get('loop', False), s.get('offset', 0.0))
fade = int(0.5 * SR); end = int(T['duration'] * SR); mix = mix[:end]; mix[-fade:] *= np.linspace(1, 0, fade) ** 2
pk = np.abs(mix).max(); mix = mix / pk * 0.89 if pk > 0.89 else mix
w = wave.open(out, 'wb'); w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes((mix * 32767).astype(np.int16).tobytes()); w.close()
print('mix ok', round(len(mix) / SR, 2), 's peak', round(float(pk), 2))
