#!/usr/bin/env python3
"""Chunked Spanish alignment for long audio: align_es_chunked.py audio.wav script.txt out.json
Aligns ~4 sentences at a time in an audio window with margin, keeps all but the last sentence, restarts there."""
import sys, os, re, json, subprocess
wav, scr, out = sys.argv[1:4]
HERE = os.path.dirname(os.path.abspath(__file__))
dur = float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',wav]))
text = open(scr, encoding='utf-8').read().replace('\n', ' ')
sents = [s for s in re.split(r'(?<=[.!?:])\s+', text.strip()) if s]
rate = dur / len(text)  # s per char
tmp = '/tmp/_alc'; os.makedirs(tmp, exist_ok=True)
sp = os.path.join(os.path.dirname(scr), 'spoken.json')
if os.path.exists(sp): open(f'{tmp}/spoken.json', 'w').write(open(sp).read())
res = []; pos = 0.0; i = 0; G = 4
while i < len(sents):
    grp = sents[i:i + G]; last = i + G >= len(sents)
    est = len(' '.join(grp)) * rate
    ok = False
    for extra in (2.5, 5, 8, 12, 1.0, 0.0):
        end = dur if last else min(dur, pos + est * 1.15 + extra)
        subprocess.run(['ffmpeg','-y','-v','error','-ss',f'{pos:.3f}','-to',f'{end:.3f}','-i',wav,f'{tmp}/a.wav'], check=True)
        open(f'{tmp}/s.txt', 'w', encoding='utf-8').write(' '.join(grp))
        r = subprocess.run([sys.executable, os.path.join(HERE, 'align_es.py'), f'{tmp}/a.wav', f'{tmp}/s.txt', f'{tmp}/w.json'], capture_output=True, text=True)
        if r.returncode == 0 and os.path.exists(f'{tmp}/w.json'): ok = True; break
        if last: break
    if not ok:
        print('chunk failed at sentence', i, grp, r.stdout[-200:]); sys.exit(2)
    w = json.load(open(f'{tmp}/w.json')); os.remove(f'{tmp}/w.json')
    keepn = len(w) if last or len(grp) == 1 else len(w) - len(re.findall(r"[\wáéíóúüñ][\wáéíóúüñ'’-]*", grp[-1]))
    for x in w[:keepn]: res.append({'word': x['word'], 'start': round(x['start'] + pos, 3), 'end': round(x['end'] + pos, 3)})
    if last or len(grp) == 1: i += len(grp); pos = res[-1]['end']
    else: i += len(grp) - 1; pos = max(pos, w[keepn]['start'] + pos - 0.12)
    print(f'aligned through sentence {i}/{len(sents)}  t={pos:.2f}s')
json.dump(res, open(out, 'w'), indent=1, ensure_ascii=False)
print(f'{len(res)} words, last end {res[-1]["end"]} / audio {dur:.2f}')
