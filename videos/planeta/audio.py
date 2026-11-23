# Pista final: voz + ambiente espacial + efectos
import numpy as np, wave, subprocess
SR=44100
raw=subprocess.run(["ffmpeg","-v","error","-i","voz_original.mp3","-f","s16le","-ac","1","-ar",str(SR),"-"],capture_output=True).stdout
voice=np.frombuffer(raw,np.int16).astype(np.float32)/32768
END=len(voice)/SR+1.6; out=np.zeros(int(END*SR)); out[:len(voice)]+=voice
t=np.arange(len(out))/SR; rng=np.random.default_rng(3)
def add(s,at,g=1.0):
    i=int(at*SR); n=min(len(s),len(out)-i); out[i:i+n]+=s[:n]*g
def tone(f,d,dec=6,h=(1,)):
    tt=np.arange(int(d*SR))/SR; return sum(np.sin(2*np.pi*f*k*tt)/(j+1) for j,k in enumerate(h))*np.exp(-dec*tt)
def lp_noise(d,k=200):
    n=rng.standard_normal(int(d*SR)); return np.convolve(n,np.ones(k)/k,'same')*np.sqrt(k)*0.3
# ambiente: pad espacial
pad=(np.sin(2*np.pi*65.4*t)+.7*np.sin(2*np.pi*98*t)+.5*np.sin(2*np.pi*130.8*t*(1+.003*np.sin(.3*t)))+.3*np.sin(2*np.pi*196*t))
pad*=.6+.4*np.sin(2*np.pi*.07*t)**2
out+=pad*np.clip(t/2,0,1)*np.clip((END-t)/1.5,0,1)*.03
# alarma al inicio
for k in range(3): add(tone(660,.35,4,(1,2))*np.sign(np.sin(2*np.pi*4*np.arange(int(.35*SR))/SR)),0.2+k*0.8,.05)
# whooshes en cambios de escena
for at in [2.1,7.9,11.4,17.0,20.0,26.3,39.0,44.4]:
    w=lp_noise(.8,60)*np.sin(np.linspace(0,np.pi,int(.8*SR)))**2; add(w,at,.10)
# cristal se cierra
add(tone(1200,.4,10,(1,1.5)),13.5,.12)
# despegue: rumble
r=lp_noise(4.0,400); env=np.clip(np.linspace(0,4,len(r)),0,1)*np.clip((4-np.linspace(0,4,len(r)))/1.5,0,1); add(r*env,15.1,.5)
# aterrizaje / revelación
add(tone(392,2,1.5,(1,2,3))+tone(587,2,1.5,(1,2)),20.2,.08)
# criatura: golpe grave
add(tone(70,1.2,3,(1,1.5)),24.0,.35)
# botones pop
pop=tone(880,.15,25)+tone(1320,.15,35)*.5
for at in [27.5,29.4,31.5,33.4,39.2,44.7]: add(pop,at,.18)
out/=max(1,np.abs(out).max()/.95)
with wave.open("pista_final.wav","wb") as w:
    w.setnchannels(1);w.setsampwidth(2);w.setframerate(SR);w.writeframes((out*32767).astype(np.int16).tobytes())
print("dur",END)
