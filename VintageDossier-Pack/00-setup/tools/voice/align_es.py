#!/usr/bin/env python3
"""Spanish forced alignment: align_es.py audio.wav script.txt out.json  -> [{word,start,end}] seconds.
Uses the CMU Sphinx Spanish model (01-assets/models/cmusphinx-es-5.2, from SourceForge cmusphinx-es-5.2.tar.gz).
Words missing from the dictionary get a rule-based Spanish pronunciation (spoken.json overrides still apply)."""
import sys, os, re, json, wave, subprocess, unicodedata
from pocketsphinx import Decoder
wav, scr, out = sys.argv[1:4]
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', '..'))
MD = os.path.join(ROOT, '01-assets/models/cmusphinx-es-5.2')
DIC = os.path.join(MD, 'etc/voxforge_es_sphinx.dic')
words = {}
for line in open(DIC, encoding='utf-8', errors='ignore'):
    p = line.split()
    if len(p) > 1 and p[0] not in words: words[p[0]] = ' '.join(p[1:])

def g2p(w):
    w = w.lower(); o = []; i = 0
    V = 'aeiouáéíóúü'
    def strip(c): return unicodedata.normalize('NFD', c)[0]
    while i < len(w):
        c = w[i]; n = w[i + 1] if i + 1 < len(w) else ''; n2 = w[i + 2] if i + 2 < len(w) else ''
        if c == 'c' and n == 'h': o.append('ch'); i += 2; continue
        if c == 'l' and n == 'l': o.append('ll'); i += 2; continue
        if c == 'r' and n == 'r': o.append('rr'); i += 2; continue
        if c == 'q' and n == 'u': o.append('k'); i += 2; continue
        if c == 'g' and n == 'u' and n2 in 'eéií': o.append('g'); i += 2; continue
        if c == 'p' and n == 'h': o.append('f'); i += 2; continue
        if c == 't' and n == 'h': o.append('t'); i += 2; continue
        if c == 'c': o.append('z' if n in 'eéiíy' else 'k')
        elif c == 'g': o.append('j' if n in 'eéií' else 'g')
        elif c == 'h': pass
        elif c == 'v' or c == 'w': o.append('u' if c == 'w' and n in V else 'b')
        elif c == 'ñ': o.append('gn')
        elif c == 'r': o.append('rr' if i == 0 else 'r')
        elif c == 'y': o.append('i' if not n or n not in V else 'y')
        elif c == 'x': o += ['k', 's']
        elif c == 'q': o.append('k')
        elif c in 'áéíóúü': o.append(strip(c))
        elif c in 'abdefijklmnopstuz': o.append(c)
        i += 1
    return ' '.join(o)

d = Decoder(hmm=os.path.join(MD, 'model_parameters/voxforge_es_sphinx.cd_ptm_4000'),
            dict=DIC, samprate=16000, loglevel='FATAL', beam=1e-100, wbeam=1e-80, pbeam=1e-100)
over = {}
p = os.path.join(os.path.dirname(scr), 'spoken.json')
if os.path.exists(p): over = json.load(open(p))
text = open(scr, encoding='utf-8').read()
disp = re.findall(r"[\wáéíóúüñÁÉÍÓÚÜÑ][\wáéíóúüñÁÉÍÓÚÜÑ'’-]*", text)
toks, owner, added = [], [], []
for i, w in enumerate(disp):
    s = over.get(w, w).lower()
    for t in s.split():
        if d.lookup_word(t) is None:
            d.add_word(t, g2p(t), False); added.append(f'{t}={g2p(t)}')
        toks.append(t); owner.append(i)
if added: print('G2P added:', ', '.join(sorted(set(added))))
tmp = '/tmp/_al16_es.wav'
subprocess.run(['ffmpeg', '-y', '-v', 'error', '-i', wav, '-ar', '16000', '-ac', '1', tmp], check=True)
raw = wave.open(tmp).readframes(10 ** 9)
d.set_align_text(' '.join(toks))
d.start_utt(); d.process_raw(raw, full_utt=True); d.end_utt()
segs = [(s.word, s.start_frame, s.end_frame) for s in d.seg() if s.word not in ('<s>', '</s>', '<sil>', '[NOISE]', '[SPEECH]')]
if len(segs) != len(toks):
    print('MISMATCH', len(segs), len(toks)); sys.exit(2)
res = {}
for (w, a, b), o in zip(segs, owner):
    st, en = a / 100, (b + 1) / 100
    if o in res: res[o][2] = en
    else: res[o] = [disp[o], st, en]
r = [{'word': v[0], 'start': round(v[1], 3), 'end': round(v[2], 3)} for k, v in sorted(res.items())]
json.dump(r, open(out, 'w'), indent=1, ensure_ascii=False)
print(f'{len(r)} words aligned, last end {r[-1]["end"]}s')
