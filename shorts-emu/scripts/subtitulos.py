# Subtítulos ASS desde palabras.json: grupos cortos de 2-4 palabras, grandes, abajo (y = 1450), sin tapar caras.
import json, sys
W = json.load(open(sys.argv[1])); out = sys.argv[2]
# la puntuación sale del guion (los tiempos de la voz no la traen): una palabra del guion por palabra de la voz
toks = open(sys.argv[3] if len(sys.argv) > 3 else "GUION_texto.txt").read().split()
assert len(toks) == len(W), (len(toks), len(W))
for w, t in zip(W, toks): w["w"] = t
def ts(t):
    h = int(t // 3600); m = int(t % 3600 // 60); s = t % 60
    return f"{h}:{m:02d}:{s:05.2f}"
groups, cur = [], []
for i, w in enumerate(W):
    cur.append(w)
    end_sentence = w["w"][-1:] in ".?:,!" or (i + 1 < len(W) and W[i + 1]["t0"] - w["t1"] > 0.35)
    glue = w["w"].lower().strip(",.:¿?") in {"de", "la", "el", "y", "o", "a", "su", "sus", "en", "con", "los", "las", "un", "unos", "que", "tu", "te", "si", "les", "del", "al", "mil", "treinta", "noventa"}
    if end_sentence or (not glue and (len(cur) >= 5 or (len(cur) >= 4 and len(w["w"]) > 7))) or len(cur) >= 7:
        groups.append(cur); cur = []
if cur: groups.append(cur)
head = """[Script Info]
ScriptType: v4.00+
PlayResX: 1080
PlayResY: 1920

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Sub,DejaVu Sans,78,&H00FFFFFF,&H00FFFFFF,&H00261724,&H80000000,1,0,0,0,100,100,0,0,1,7,3,2,80,80,560,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
"""
lines = []
for k, g in enumerate(groups):
    t0 = g[0]["t0"]; t1 = groups[k + 1][0]["t0"] if k + 1 < len(groups) else g[-1]["t1"] + 0.3
    t1 = min(t1, g[-1]["t1"] + 0.6)
    txt = " ".join(w["w"] for w in g).upper().rstrip(",:.")
    lines.append(f"Dialogue: 0,{ts(t0)},{ts(t1)},Sub,,0,0,0,,{txt}")
open(out, "w").write(head + "\n".join(lines) + "\n")
print(len(groups), "grupos")
