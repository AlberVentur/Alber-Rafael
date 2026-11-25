#!/usr/bin/env python3
"""Robust Spanish alignment for long audio: align_es_dp.py audio.wav script.txt out.json
Sentence ends are snapped to detected pauses with dynamic programming (acoustic score + duration prior),
then each sentence is force-aligned inside its own segment (pocketsphinx, Spanish model)."""
import sys, os, re, json, wave, subprocess, math, importlib.util
wav, scr, out = sys.argv[1:4]
HERE = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location('ae', os.path.join(HERE, 'align_es.py'))
src = open(os.path.join(HERE, 'align_es.py')).read()
g2p_src = src[src.index('def g2p'):src.index('d = Decoder')]
import unicodedata; exec(g2p_src)
from pocketsphinx import Decoder
ROOT = os.path.abspath(os.path.join(HERE, '..', '..', '..')); MD = os.path.join(ROOT, '01-assets/models/cmusphinx-es-5.2')
DIC = os.path.join(MD, 'etc/voxforge_es_sphinx.dic')
d = Decoder(hmm=os.path.join(MD, 'model_parameters/voxforge_es_sphinx.cd_ptm_4000'), dict=DIC, samprate=16000, loglevel='FATAL')
over = {}; sp = os.path.join(os.path.dirname(scr), 'spoken.json')
if os.path.exists(sp): over = json.load(open(sp))
WRE = r"[\wáéíóúüñÁÉÍÓÚÜÑ][\wáéíóúüñÁÉÍÓÚÜÑ'’-]*"
def toks_of(sent):
    disp = re.findall(WRE, sent); toks, owner = [], []
    for i, w in enumerate(disp):
        for t in over.get(w, w).lower().split():
            if d.lookup_word(t) is None: d.add_word(t, g2p(t), False)
            toks.append(t); owner.append(i)
    return disp, toks, owner
subprocess.run(['ffmpeg','-y','-v','error','-i',wav,'-ar','16000','-ac','1','/tmp/_dp16.wav'], check=True)
raw = wave.open('/tmp/_dp16.wav').readframes(10**9); dur = len(raw) / 2 / 16000
log = subprocess.run(['ffmpeg','-i',wav,'-af','silencedetect=noise=-32dB:d=0.06','-f','null','-'], capture_output=True, text=True).stderr
st = [float(x) for x in re.findall(r'silence_start: ([\d.]+)', log)]; en = [float(x) for x in re.findall(r'silence_end: ([\d.]+)', log)]
B = [0.0] + [(a + b) / 2 for a, b in zip(st, en) if a > 0.3 and b < dur - 0.3] + [dur]
text = open(scr, encoding='utf-8').read().replace('\n', ' ')
sents = [s for s in re.split(r'(?<=[.!?:])\s+', text.strip()) if s]
rate = dur / sum(len(s) for s in sents)
cache = {}
def align(k, i, j):
    key = (k, i, j)
    if key in cache: return cache[key]
    disp, toks, owner = toks_of(sents[k])
    a, b = int(B[i] * 16000) * 2, int(B[j] * 16000) * 2
    d.set_align_text(' '.join(toks)); d.start_utt(); d.process_raw(raw[a:b], full_utt=True); d.end_utt()
    h = d.hyp(); segs = None
    try: segs = [(s.word, s.start_frame, s.end_frame) for s in d.seg() if s.word not in ('<s>','</s>','<sil>','[NOISE]','[SPEECH]')]
    except TypeError: pass
    if not segs or len(segs) != len(toks) or h is None: cache[key] = None; return None
    frames = (b - a) / 2 / 160
    r = (h.score / frames, segs, disp, owner); cache[key] = r; return r
INF = 1e18; N = len(sents)
best = {0: (0.0, None)}  # boundary index -> (cost, backpointer)
hist = []; k = 0
while k < len(sents):
    N = len(sents); exp = len(sents[k]) * rate; nxt = {}
    for i, (c0, _) in best.items():
        for j in range(i + 1, len(B)):
            L = B[j] - B[i]
            if L < exp * 0.35: continue
            if L > exp * 2.2 + 0.8: break
            if k == N - 1 and j != len(B) - 1: continue
            r = align(k, i, j)
            if r is None: continue
            cost = c0 - r[0] + 40 * math.log(L / exp) ** 2
            if j not in nxt or cost < nxt[j][0]: nxt[j] = (cost, i)
    if not nxt:
        if k + 1 < len(sents):
            print('merge', k, flush=True); sents[k] = sents[k] + ' ' + sents.pop(k + 1)
            cache = {kk: v for kk, v in cache.items() if kk[0] < k}; continue
        if hist:  # last sentence failed: merge it back into the previous one
            print('merge back', k, flush=True); sents[k - 1] = sents[k - 1] + ' ' + sents.pop(k); hist.pop(); k -= 1
            best = hist[-1] if hist else {0: (0.0, None)}; cache = {kk: v for kk, v in cache.items() if kk[0] < k}; continue
        print('no path at sentence', k, sents[k]); sys.exit(2)
    best = dict(sorted(nxt.items(), key=lambda kv: kv[1][0])[:16]); hist.append(best); k += 1
    print(f'{k}/{len(sents)} best end {B[min(best, key=lambda j: best[j][0])]:.2f}s', flush=True)
N = len(sents)
j = len(B) - 1; path = []
for k in range(N - 1, -1, -1):
    i = hist[k][j][1]; path.append((k, i, j)); j = i
path.reverse(); res = []
for k, i, j in path:
    sc, segs, disp, owner = cache[(k, i, j)]; ws = {}
    for (w, a, b), o in zip(segs, owner):
        s0, e0 = B[i] + a / 100, B[i] + (b + 1) / 100
        if o in ws: ws[o][2] = e0
        else: ws[o] = [disp[o], s0, e0]
    res += [{'word': v[0], 'start': round(v[1], 3), 'end': round(v[2], 3), 'sent': k} for _, v in sorted(ws.items())]
json.dump(res, open(out, 'w'), indent=1, ensure_ascii=False)
print(f'{len(res)} words aligned, last end {res[-1]["end"]} / {dur:.2f}')
