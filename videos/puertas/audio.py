# Arma la pista final: voz recortada + 5 s de cuenta regresiva + efectos + fondo suave
import numpy as np, wave, subprocess, sys
SR = 44100
def load(p):
    raw = subprocess.run(["ffmpeg","-v","error","-i",p,"-f","s16le","-ac","1","-ar",str(SR),"-"],capture_output=True).stdout
    return np.frombuffer(raw,np.int16).astype(np.float32)/32768
v = load("voz_original.wav")
CUT0, GAP_AT, GAP = 1.4, 29.80, 5.0      # inicio, fin de "cinco segundos", duración cuenta
a = v[int(CUT0*SR):int(GAP_AT*SR)]; b = v[int(GAP_AT*SR):int(45.4*SR)]
voice = np.concatenate([a, np.zeros(int(GAP*SR)), b])
END = len(voice)/SR + 0.6
out = np.zeros(int(END*SR)); out[:len(voice)] += voice*1.0
t = np.arange(len(out))/SR
def add(sig, at, g=1.0):
    i=int(at*SR); n=min(len(sig),len(out)-i); out[i:i+n]+=sig[:n]*g
def tone(f,d,decay=8,harm=(1,)):
    tt=np.arange(int(d*SR))/SR; s=sum(np.sin(2*np.pi*f*h*tt)/(k+1) for k,h in enumerate(harm)); return s*np.exp(-decay*tt)
def noise(d,decay=20):
    tt=np.arange(int(d*SR))/SR; return np.random.default_rng(1).standard_normal(len(tt))*np.exp(-decay*tt)
pop = tone(880,0.12,30)+tone(1320,0.12,40)*0.5
# fondo misterioso (pad grave) con fade
pad = (np.sin(2*np.pi*55*t)+0.6*np.sin(2*np.pi*82.4*t)+0.4*np.sin(2*np.pi*110*t*(1+0.002*np.sin(t))))
pad *= 0.5+0.5*np.sin(2*np.pi*0.1*t)**2
env = np.clip(t/2,0,1)*np.clip((END-t)/1.5,0,1)
out += pad*env*0.035
# pops en apariciones
for at in [4.6,7.3,10.5,12.9,14.7,19.2,25.0,34.5]: add(pop,at,0.18)
# tic-tac cuenta regresiva
for k in range(5): add(noise(0.05,90)*0.6+tone(2000,0.05,80)[:len(noise(0.05,90))],28.40+k,0.35)
add(tone(523,1.2,3,(1,2,3))+tone(659,1.2,3,(1,2)),33.4,0.15)   # campana fin
add(tone(220,0.5,6,(1,1.5)),42.0,0.25)                         # golpe trampa
add(noise(1.0,3)*np.linspace(0,1,SR)**2,43.0,0.12)            # whoosh puerta
add(tone(784,1.5,2.5,(1,2))+tone(988,1.5,2.5)+tone(1175,1.5,2.5),43.6,0.12)  # brillo libertad
out = np.clip(out/ max(1,np.abs(out).max()/0.95),-1,1)
with wave.open("pista_final.wav","wb") as w:
    w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes((out*32767).astype(np.int16).tobytes())
print("dur",END)
