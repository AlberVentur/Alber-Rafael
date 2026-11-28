// Ambientes do vídeo "¿Qué pasaría si quedaras atrapado en un búnker con la chica que te gusta?":
// búnker de la Guerra Fría, bosque con el museo y el autobús, puente colgante, nave Marte 500, Biosfera 2, noria.
import * as THREE from 'three';
import { AMBS, box, std, cut, glowSprite, canvasTex, lightPanel, beam, rng } from './mundo.js';
import { sky, tree } from './motor/kit.js';
import { stars } from './motor/kit2.js';
import { sunLight } from './comum.js';
import { labelT } from './amb2.js';

const chao = (c, col, w = 200, l = 200, o = {}) => { const g = new THREE.Mesh(new THREE.PlaneGeometry(w, l), std(col, { roughness: 1, ...o })); g.rotation.x = -Math.PI / 2; g.receiveShadow = true; c.add(g); return g; };
const em = (col, k = 1.6) => new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: k });
const concTex = (base = '#8C8A84', seed = 3) => { const t = canvasTex(512, 512, (x) => { x.fillStyle = base; x.fillRect(0, 0, 512, 512); const R = rng(seed); for (let i = 0; i < 900; i++) { x.fillStyle = `rgba(${R() < .5 ? '255,255,255' : '0,0,0'},${R() * .07})`; x.fillRect(R() * 512, R() * 512, 2 + R() * 6, 2 + R() * 6); } x.strokeStyle = 'rgba(0,0,0,.18)'; x.lineWidth = 3; for (let y = 128; y < 512; y += 128) { x.beginPath(); x.moveTo(0, y); x.lineTo(512, y); x.stroke(); } for (let i = 0; i < 5; i++) { x.strokeStyle = 'rgba(40,30,20,.12)'; x.lineWidth = 8; x.beginPath(); const px = R() * 512; x.moveTo(px, 0); x.lineTo(px + (R() - .5) * 30, 140 + R() * 300); x.stroke(); } }); t.wrapS = t.wrapT = THREE.RepeatWrapping; return t; };
const conc = (w, h, d, x, y, z, base, rep = 3) => { const t = concTex(base); t.repeat.set(Math.max(1, Math.max(w, d) / rep), Math.max(1, h / rep)); const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshStandardMaterial({ map: t, roughness: .95 })); m.position.set(x, y, z); m.receiveShadow = true; m.castShadow = true; return m; };

// ---------- adereços ----------
export function lata(col = '#B8B4A8') { const g = new THREE.Group(); const b = new THREE.Mesh(new THREE.CylinderGeometry(.09, .09, .22, 18), std(col, { metalness: .6, roughness: .35 })); b.position.y = .11; b.castShadow = true; g.add(b); const lbl = new THREE.Mesh(new THREE.CylinderGeometry(.092, .092, .12, 18, 1, true), new THREE.MeshStandardMaterial({ map: canvasTex(256, 64, (x) => { x.fillStyle = '#7A8A3A'; x.fillRect(0, 0, 256, 64); x.fillStyle = '#F4E8C8'; x.font = '800 30px Inter'; x.textAlign = 'center'; x.fillText('JUDÍAS · 1987', 128, 44); }), roughness: .7 })); lbl.position.y = .11; g.add(lbl); return g; }
export function radio() { const g = new THREE.Group(); g.add(box(.6, .36, .22, std('#6A4A32', { roughness: .6 }), 0, .18, 0)); const sp = new THREE.Mesh(new THREE.CircleGeometry(.11, 20), std('#2A2018')); sp.position.set(-.14, .18, .111); g.add(sp); const d = lightPanel(.2, .08, '#FFC870', .2); d.position.set(.15, .24, .111); g.add(d); for (const x of [.1, .2]) { const k = new THREE.Mesh(new THREE.CylinderGeometry(.03, .03, .03, 12), std('#D8C8A0')); k.rotation.x = Math.PI / 2; k.position.set(x, .1, .12); g.add(k); } g.add(box(.012, .5, .012, std('#AAA', { metalness: .8 }), .24, .6, -.05)); g.userData.dial = d; return g; }
export function walkie() { const g = new THREE.Group(); g.add(box(.16, .34, .07, std('#2A2E2A', { roughness: .6 }), 0, .17, 0)); g.add(box(.025, .22, .025, std('#1A1A1A'), .05, .45, 0)); const l = new THREE.Mesh(new THREE.SphereGeometry(.018, 8, 6), em('#5AE05A', 2)); l.position.set(-.04, .31, .036); g.add(l); g.add(box(.11, .1, .01, std('#555'), 0, .2, .036)); g.userData.led = l; return g; }
export function baraja() { const g = new THREE.Group(); for (let i = 0; i < 4; i++) { const cd = box(.12, .01, .17, std(i === 3 ? '#C9361F' : '#F4F0E4'), (i - 1.5) * .02, .005 + i * .011, 0); cd.rotation.y = i * .2; g.add(cd); } return g; }
export function cuaderno(draw) { const g = new THREE.Group(); g.add(box(.5, .02, .36, std('#5A6A3A'), 0, .01, 0)); const t = canvasTex(500, 360, (x) => { x.fillStyle = '#F2E8CC'; x.fillRect(0, 0, 500, 360); x.strokeStyle = 'rgba(80,90,150,.35)'; x.lineWidth = 2; for (let y = 40; y < 360; y += 28) { x.beginPath(); x.moveTo(10, y); x.lineTo(490, y); x.stroke(); } x.strokeStyle = '#B8A888'; x.beginPath(); x.moveTo(250, 0); x.lineTo(250, 360); x.stroke(); if (draw) draw(x); }); const p = new THREE.Mesh(new THREE.PlaneGeometry(.48, .34), new THREE.MeshStandardMaterial({ map: t, roughness: .9 })); p.rotation.x = -Math.PI / 2; p.position.y = .022; g.add(p); return g; }
export function generador() { const g = new THREE.Group(); g.add(box(1.0, .8, .6, std('#4A6A4A', { roughness: .6, metalness: .3 }), 0, .4, 0)); g.add(box(.3, .3, .02, std('#222'), -.25, .5, .31)); const l = new THREE.Mesh(new THREE.SphereGeometry(.04, 10, 8), em('#5AE05A', 2.5)); l.position.set(.3, .62, .31); g.add(l); for (let i = 0; i < 5; i++) g.add(box(.02, .4, .02, std('#2A3A2A'), .05 + i * .06, .4, .31)); g.userData.led = l; return g; }
export function palanca() { const g = new THREE.Group(); g.add(box(.36, .5, .08, std('#3A3C3A', { metalness: .5 }), 0, 0, 0)); const piv = new THREE.Group(); piv.position.set(0, 0, .06); g.add(piv); const arm = box(.05, .4, .05, std('#9A9A9A', { metalness: .8, roughness: .3 }), 0, .2, 0); piv.add(arm); const h = new THREE.Mesh(new THREE.SphereGeometry(.07, 14, 10), std('#D8251A', { roughness: .3 })); h.position.y = .42; piv.add(h); piv.rotation.x = -.5; g.userData.piv = piv; g.userData.knob = h; return g; }
export function bus() { const g = new THREE.Group(); g.add(box(8, 2.4, 2.5, std('#F2B830', { roughness: .5 }), 0, 1.6, 0)); g.add(box(8.02, .25, 2.52, std('#2A2A2A'), 0, .9, 0)); for (let i = 0; i < 7; i++) for (const s of [-1, 1]) g.add(box(.85, .7, .02, std('#9AC8E8', { metalness: .4, roughness: .15 }), -3.3 + i * 1.05, 2.1, s * 1.26)); for (const x of [-2.6, 2.6]) for (const s of [-1, 1]) { const w = new THREE.Mesh(new THREE.CylinderGeometry(.45, .45, .3, 16), std('#1A1A1A')); w.rotation.x = Math.PI / 2; w.position.set(x, .45, s * 1.2); g.add(w); } const l = glowSprite('#FFF2C0', .5, .9); l.position.set(4.02, 1.1, .8); g.add(l); return g; }
export function cartelTxt(lines, w, o = {}) { const t = labelT(lines, { bg: '#3A4A2A', fg: '#F4E8C8', size: 90, w: 1100, h: 260, ...o }); const m = cut(t, w, w * (o.h || 260) / (o.w || 1100)); return m; }

// ---------- BÚNKER ----------
// sala de hormigón: puerta de acero al fondo (x 0, z -3.4), palanca roja a la derecha de la puerta, literas a los lados,
// estante con latas, generador al fondo a la derecha, conducto en la pared izquierda arriba.
// o.dark: sin luz (solo linterna) · o.open: puerta abierta con sol · o.museo: carteles del museo
AMBS.bunker = (c, o) => { const dark = !!o.dark, open = !!o.open; c.background = new THREE.Color('#0E0F10'); c.fog = new THREE.FogExp2(dark ? '#050608' : '#2A2A28', dark ? .08 : .045);
  const fl = conc(12, .2, 10, 0, -.1, -.5, '#6E6C66', 2.5); c.add(fl); c.add(conc(12, 4, .3, 0, 2, -3.55, '#8C8A84')); c.add(conc(.3, 4, 10, -4.2, 2, -.5, '#84827C')); c.add(conc(.3, 4, 10, 4.2, 2, -.5, '#84827C')); c.add(conc(12, .3, 10, 0, 3.6, -.5, '#7A7872'));
  for (const x of [-2.4, 0, 2.4]) c.add(box(.25, .3, 10, std('#6A6862'), x, 3.35, -.5));
  // puerta
  const frame = new THREE.Group(); frame.add(box(2.0, .2, .3, std('#5A5E5A', { metalness: .6, roughness: .4 }), 0, 2.5, 0), box(.2, 2.6, .3, std('#5A5E5A', { metalness: .6, roughness: .4 }), -.95, 1.25, 0), box(.2, 2.6, .3, std('#5A5E5A', { metalness: .6, roughness: .4 }), .95, 1.25, 0)); frame.position.set(0, 0, -3.36); c.add(frame);
  const piv = new THREE.Group(); piv.position.set(-.85, 0, -3.3); c.add(piv); const dm = std('#6E7670', { metalness: .7, roughness: .35 }); const dr = box(1.7, 2.4, .16, dm, .85, 1.2, 0); piv.add(dr); for (const y of [.5, 1.9]) piv.add(box(1.6, .08, .04, std('#5A605C', { metalness: .7 }), .85, y, .1));
  const wh = new THREE.Mesh(new THREE.TorusGeometry(.26, .035, 8, 28), std('#B8241A', { metalness: .4, roughness: .4 })); wh.position.set(.85, 1.25, .14); piv.add(wh); for (let i = 0; i < 3; i++) { const sp = box(.5, .03, .03, std('#B8241A'), .85, 1.25, .14); sp.rotation.z = i * Math.PI / 3; piv.add(sp); }
  piv.rotation.y = open ? -1.45 : 0; c.userData.door = piv; c.userData.wheel = wh;
  const lv = palanca(); lv.position.set(1.55, 1.45, -3.36); c.add(lv); c.userData.lever = lv.userData.piv; c.userData.leverKnob = lv.userData.knob;
  const lvl = cut(labelT(['¡NO TOCAR!'], { bg: '#F2C14E', fg: '#2A2A34', size: 80, w: 500, h: 130 }), .5, .13); lvl.position.set(1.55, 1.82, -3.38); c.add(lvl);
  // literas
  const bunk = (x) => { const g = new THREE.Group(); const m = std('#4A5450', { metalness: .6, roughness: .4 }); for (const dx of [-.45, .45]) for (const dz of [-1.0, 1.0]) g.add(box(.06, 2.3, .06, m, dx, 1.15, dz)); for (const y of [.45, 1.6]) { g.add(box(.96, .06, 2.1, m, 0, y, 0)); g.add(box(.86, .14, 1.96, std('#7A8A6A', { roughness: 1 }), 0, y + .1, 0)); g.add(box(.5, .1, .3, std('#D8D2C0'), 0, y + .21, -.8)); } g.position.set(x, 0, -1.1); return g; };
  c.add(bunk(-3.3)); c.add(bunk(3.3));
  // estante con latas
  const sh = new THREE.Group(); for (const y of [.9, 1.5]) sh.add(box(1.4, .05, .35, std('#5A4A3A'), 0, y, 0)); for (const x of [-.7, .7]) sh.add(box(.05, 1.6, .35, std('#5A4A3A'), x, .8, 0)); sh.position.set(-2.0, 0, -3.2); c.add(sh);
  const cans = []; for (let i = 0; i < 6; i++) { const l = lata(); l.position.set(-2.5 + (i % 3) * .26, i < 3 ? .93 : 1.53, -3.2); sh.parent.add(l); cans.push(l); } c.userData.cans = cans;
  const gen = generador(); gen.position.set(2.6, 0, -3.0); c.add(gen); c.userData.gen = gen.userData.led;
  // conducto (pared izquierda, arriba de la litera)
  const vent = new THREE.Group(); vent.add(box(.06, .7, .9, std('#3A3C3A', { metalness: .5 }), 0, 0, 0)); for (let i = 0; i < 6; i++) vent.add(box(.08, .04, .8, std('#5A5C5A', { metalness: .6 }), .02, -.28 + i * .11, 0)); vent.position.set(-4.02, 2.75, -1.1); c.add(vent);
  // mesa central
  if (o.mesa !== false) { c.add(box(1.4, .06, .8, std('#5A4632'), 0, .75, .3)); for (const dx of [-.6, .6]) for (const dz of [-.32, .32]) c.add(box(.05, .75, .05, std('#3A2E22'), dx, .375, .3 + dz)); }
  if (o.museo) { const s = cartelTxt(['MUSEO DE LA GUERRA FRÍA'], 2.4, { size: 80 }); s.position.set(-2.0, 2.6, -3.38); c.add(s); }
  const old = cut(canvasTex(360, 480, (x) => { x.fillStyle = '#E8D8A0'; x.fillRect(0, 0, 360, 480); x.fillStyle = '#7A2A1A'; x.font = '900 46px Fraunces'; x.textAlign = 'center'; x.fillText('REFUGIO', 180, 70); x.fillStyle = '#3A3A2A'; x.fillRect(80, 140, 200, 140); x.fillStyle = '#E8D8A0'; x.beginPath(); x.moveTo(60, 150); x.lineTo(180, 90); x.lineTo(300, 150); x.fill(); x.fillStyle = '#7A2A1A'; x.font = '700 30px Inter'; x.fillText('1962', 180, 340); }), .5, .66); old.position.set(2.6, 2.3, -3.38); c.add(old);
  // luces
  const bulbs = []; for (const x of [-1.6, 1.6]) { const b = new THREE.Mesh(new THREE.SphereGeometry(.09, 12, 10), em('#FFD089', dark ? 0 : 2.2)); b.position.set(x, 3.1, -.6); c.add(b); bulbs.push(b); c.add(box(.22, .02, .22, std('#333'), x, 3.2, -.6, false)); }
  const L = []; if (!dark) { for (const x of [-1.6, 1.6]) { const pl = new THREE.PointLight('#FFC27A', 11, 10, 1.4); pl.position.set(x, 2.9, -.4); pl.castShadow = x < 0; c.add(pl); L.push(pl); } }
  const hemi = new THREE.HemisphereLight(dark ? '#3A4A6A' : '#E8DCC8', dark ? '#0A0A0E' : '#3A3430', dark ? .12 : .55); c.add(hemi); c.userData.lights = L; c.userData.bulbs = bulbs; c.userData.hemi = hemi;
  if (open) { const sun = lightPanel(1.7, 2.4, '#FFF4D8', 3.2); sun.position.set(0, 1.2, -3.5); c.add(sun); const bm = beam(2.2, 8, '#FFE8B8', .3); bm.position.set(0, 1.4, -.6); bm.rotation.set(-1.25, 0, 0); c.add(bm); const sp = new THREE.SpotLight('#FFF0D0', 60, 14, .6, .6, 1.2); sp.position.set(0, 2.2, -3.6); sp.target.position.set(0, 0, 1.5); sp.castShadow = true; c.add(sp, sp.target); c.userData.sunObjs = [sun, bm, sp]; }
  const R = rng(5); const dust = []; for (let i = 0; i < 26; i++) { const d = glowSprite('#FFE8C0', .04, dark ? .2 : .5); d.position.set((R() - .5) * 6, .5 + R() * 2.6, -3 + R() * 4); c.add(d); dust.push(d); } c.userData.dust = dust; };

// ---------- BOSQUE con la entrada del museo-búnker ----------
// o.storm: noche de tormenta con lluvia y relámpagos (c.userData.rain(u), c.userData.flash)
AMBS.bosqueBunker = (c, o) => { const st = !!o.storm; c.fog = new THREE.FogExp2(st ? '#1A1E28' : '#C8D0B8', st ? .045 : .022);
  sky(c, -100, 500, 200, st ? [[0, '#05070C'], [.6, '#1A2030'], [1, '#2A3040']] : [[0, '#8AA8C0'], [.7, '#C8D4C8'], [1, '#E8E4C8']]); chao(c, st ? '#2A3A24' : '#6E8A48');
  const R = rng(14); for (let i = 0; i < 30; i++) { const x = (R() - .5) * 34, z = -3 - R() * 24; if (Math.abs(x) < 4 && z > -9) continue; tree(c, x, z, 1.2 + R() * .8, st ? ['#1E2E1E', '#24381F', '#2E4628', '#3A4A2A'] : ['#3E5F3A', '#4F7A44', '#6E9A50', '#A9B65A'], i); }
  // entrada: montículo de hormigón con puerta
  const mound = new THREE.Mesh(new THREE.SphereGeometry(3.2, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), std(st ? '#3A4A30' : '#6E8A50', { roughness: 1 })); mound.scale.set(1.3, .7, 1); mound.position.set(0, 0, -6.5); c.add(mound);
  c.add(conc(3.2, 2.6, .8, 0, 1.3, -4.0, '#8C8A84')); c.add(box(1.5, 2.0, .1, std('#5E6660', { metalness: .6, roughness: .4 }), 0, 1.0, -3.56));
  const sg = cartelTxt(['MUSEO DE LA GUERRA FRÍA'], 3.0, { size: 84 }); sg.position.set(0, 2.95, -3.55); c.add(sg);
  const b = bus(); b.position.set(o.busX ?? 6.5, 0, -1.4); b.rotation.y = Math.PI; c.add(b); c.userData.bus = b;
  if (st) { c.add(new THREE.HemisphereLight('#6A7A9A', '#1A1E1A', .75)); const fl = new THREE.HemisphereLight('#DDE6FF', '#5A6070', 0); c.add(fl); c.userData.flash = fl; const ml = sunLight('#7A8AB8', .5, [-8, 14, 8], 14, 60); c.add(ml);
    const drops = []; const dm = new THREE.MeshBasicMaterial({ color: '#AFC4E8', transparent: true, opacity: .45 }); for (let i = 0; i < 260; i++) { const d = new THREE.Mesh(new THREE.BoxGeometry(.012, .45, .012), dm); d.userData.p = [(R() - .5) * 16, R() * 8, 4 - R() * 14, R()]; c.add(d); drops.push(d); }
    c.userData.rain = (u) => drops.forEach((d) => { const [x, y0, z, ph] = d.userData.p; d.position.set(x + ((u * 1.2 + ph) % 1) * -.3, 7 - ((y0 + u * 14) % 8), z); d.rotation.z = .12; }); }
  else { c.add(new THREE.HemisphereLight('#E9EEFF', '#5A6A4A', .95)); c.add(sunLight('#FFD29A', 2.6, [-12, 16, 10], 16, 70)); } };

// ---------- PUENTE COLGANTE sobre un cañón (o.normal: puente bajito y firme sobre un arroyo) ----------
AMBS.puente = (c, o) => { const nor = !!o.normal; c.fog = new THREE.FogExp2('#C8D8E0', nor ? .02 : .012); sky(c, -200, 700, 260, [[0, '#5F96C8'], [.6, '#BFD4E0'], [1, '#EEF0E4']]);
  c.add(new THREE.HemisphereLight('#E9EEFF', '#5A6A4A', 1.0)); c.add(sunLight('#FFE2B0', 2.6, [-10, 18, 12], 16, 80));
  const R = rng(21); const pal = ['#2E4F2C', '#3B6636', '#55813F', '#A9B65A'];
  if (nor) { chao(c, '#6E8A48'); const w = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 60), std('#5A8AB0', { roughness: .15, metalness: .3 })); w.rotation.x = -Math.PI / 2; w.position.set(0, .02, -10); c.add(w);
    c.add(box(1.4, .14, 5, std('#8E6242'), 0, .35, 0)); for (const s of [-1, 1]) { c.add(box(.08, .5, 5, std('#6A4630'), s * .66, .65, 0)); for (let i = 0; i < 5; i++) c.add(box(.1, .6, .1, std('#6A4630'), s * .66, .3, -2 + i)); }
    for (let i = 0; i < 16; i++) tree(c, (R() < .5 ? -1 : 1) * (4 + R() * 10), -2 - R() * 20, 1.2 + R() * .6, pal, i); c.userData.y = .42; return; }
  // cañón: dos acantilados, río muy abajo
  for (const s of [-1, 1]) { const cl = conc(20, 40, 30, s * 16, -20, -6, '#8A7A62', 6); c.add(cl); const top = chao(c, '#6E8A48', 20, 30); top.position.set(s * 16, .01, -6); for (let i = 0; i < 8; i++) tree(c, s * (8 + R() * 10), -4 - R() * 18, 1.2 + R() * .6, pal, i + (s > 0 ? 9 : 0)); }
  const riv = new THREE.Mesh(new THREE.PlaneGeometry(14, 200), new THREE.MeshStandardMaterial({ color: '#4A8AB0', roughness: .2, metalness: .3, emissive: '#1A3A50', emissiveIntensity: .3 })); riv.rotation.x = -Math.PI / 2; riv.position.set(0, -38, -40); c.add(riv);
  for (let i = 0; i < 8; i++) { const rk = new THREE.Mesh(new THREE.DodecahedronGeometry(1.5 + R() * 2), std('#7A6A52')); rk.position.set((R() - .5) * 10, -38, -10 - R() * 60); c.add(rk); }
  // puente a lo largo de x (de -6 a 6), hundido en el centro
  const sag = (x) => -.55 * (1 - (x / 6) ** 2); c.userData.sag = sag; const pl = std('#9A7448', { roughness: .9 });
  for (let i = 0; i <= 40; i++) { const x = -6 + i * .3; const p = box(.22, .05, 1.1, pl, x, sag(x), 0); p.rotation.z = Math.atan(.55 * 2 * x / 36); c.add(p); }
  for (const s of [-1, 1]) { const pts = []; for (let i = 0; i <= 24; i++) { const x = -6 + i * .5; pts.push(new THREE.Vector3(x, sag(x) + 1.0, s * .55)); } const tb = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 60, .025, 6), std('#C8B088')); c.add(tb); for (let i = 0; i <= 24; i += 2) { const x = -6 + i * .5; c.add(box(.015, 1.0, .015, std('#C8B088'), x, sag(x) + .5, s * .55)); } for (const e of [-6.1, 6.1]) c.add(box(.18, 1.6, .18, std('#6A4630'), e, .8, s * .55)); }
  c.userData.y = 0; };

// ---------- MARTE 500: módulo cilíndrico (Moscú) ----------
AMBS.marte = (c, o) => { c.background = new THREE.Color('#10141A'); c.fog = new THREE.FogExp2('#1A2028', .05);
  const tube = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.4, 30, 28, 1, true), new THREE.MeshStandardMaterial({ color: '#C8CCD0', side: THREE.BackSide, roughness: .6, metalness: .2 })); tube.rotation.x = Math.PI / 2; tube.position.set(0, 1.9, -10); c.add(tube);
  c.add(box(3.6, .1, 30, std('#6A707A', { metalness: .4 }), 0, 0, -10)); for (let i = 0; i < 10; i++) { const r = new THREE.Mesh(new THREE.TorusGeometry(2.38, .05, 6, 28), std('#8A9098', { metalness: .6 })); r.position.set(0, 1.9, 2 - i * 3); c.add(r); const l = lightPanel(1.0, .2, '#DDEEFF', 1.6); l.rotation.x = Math.PI / 2; l.position.set(0, 4.2, 1 - i * 3); c.add(l); }
  for (const s of [-1, 1]) for (let i = 0; i < 4; i++) { c.add(box(.6, .5, 1.8, std('#7A8A9A'), s * 1.5, .45, -1 - i * 3)); c.add(box(.05, .6, .5, std('#2A3A4A'), s * 1.75, 1.6, -i * 3)); const sc = lightPanel(.5, .32, ['#7FD08A', '#5AC8FF'][i % 2], .6); sc.rotation.y = -s * Math.PI / 2; sc.position.set(s * 1.72, 1.6, -i * 3); c.add(sc); }
  const tag = cut(labelT(['MARS-500 · MOSCÚ'], { bg: '#2A3A6A', fg: '#FFFFFF', size: 80, w: 900, h: 150 }), 2.0, .33); tag.position.set(0, 3.0, -6); c.add(tag);
  c.add(new THREE.HemisphereLight('#E8F0FF', '#4A505A', .9)); const pl = new THREE.PointLight('#E8F0FF', 12, 12, 1.4); pl.position.set(0, 3, 0); c.add(pl); };

// ---------- BIOSFERA 2: invernadero de cristal en el desierto de Arizona ----------
AMBS.biosfera = (c, o) => { c.fog = new THREE.FogExp2('#F2D8B0', .012); sky(c, -200, 700, 260, [[0, '#5F96C8'], [.6, '#F0C890'], [1, '#FFE2B8']]); chao(c, '#D8B07A');
  const R = rng(31); for (let i = 0; i < 8; i++) { const m = new THREE.Mesh(new THREE.ConeGeometry(8 + R() * 8, 6 + R() * 6, 6), std('#C88A5A', { roughness: 1 })); m.position.set(-60 + i * 18, 0, -70 - R() * 30); c.add(m); }
  for (let i = 0; i < 9; i++) { const cc = new THREE.Group(); cc.add(box(.3, 1.6 + R(), .3, std('#4A8A4A'), 0, .8, 0)); cc.position.set((R() - .5) * 20, 0, 1 - R() * 6); if (Math.abs(cc.position.x) > 3) c.add(cc); }
  const glass = new THREE.MeshStandardMaterial({ color: '#CFE8F0', transparent: true, opacity: .32, roughness: .05, metalness: .5, side: THREE.DoubleSide }); const wire = new THREE.MeshBasicMaterial({ color: '#F4F4F0', wireframe: true });
  const pyr = (s, x, z) => { const g = new THREE.ConeGeometry(s, s * 1.1, 4, 4); for (const m of [glass, wire]) { const p = new THREE.Mesh(g, m); p.rotation.y = Math.PI / 4; p.position.set(x, s * .55, z); c.add(p); } };
  pyr(5, -3, -12); pyr(3.4, 5, -10); const dome = new THREE.SphereGeometry(3.6, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2); for (const m of [glass, wire]) { const d = new THREE.Mesh(dome, m); d.position.set(11, 0, -14); c.add(d); }
  for (let i = 0; i < 10; i++) tree(c, -6 + R() * 6, -10 - R() * 4, .7 + R() * .5, ['#2E5F2C', '#3B7636', '#55913F', '#A9C65A'], 50 + i);
  const tag = cut(labelT(['BIOSFERA 2 · ARIZONA'], { bg: '#2A2A34', fg: '#F2C14E', size: 80, w: 1000, h: 150 }), 2.4, .36); tag.position.set(-1, 4.6, -6); c.add(tag); c.userData.tag = tag;
  c.add(new THREE.HemisphereLight('#FFF0DC', '#B08A6A', 1.05)); c.add(sunLight('#FFD29A', 3.0, [-14, 16, 10], 20, 70)); };

// ---------- NORIA (recuerdo de la excursión del año pasado) ----------
AMBS.noria = (c, o) => { AMBS.parque(c, { dusk: true }); const w = new THREE.Group(); const m = std('#E8E2D2', { metalness: .4, roughness: .4 });
  const rim = new THREE.Mesh(new THREE.TorusGeometry(5, .08, 8, 60), m); w.add(rim); const rim2 = rim.clone(); rim2.scale.setScalar(.7); w.add(rim2); for (let i = 0; i < 12; i++) { const s = box(10, .06, .06, m, 0, 0, 0); s.rotation.z = i * Math.PI / 12; w.add(s); }
  const cabs = []; for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6; const cb = new THREE.Group(); cb.add(box(.7, .6, .6, std(['#E8667F', '#F2C14E', '#4A86C7', '#36AEA2'][i % 4]), 0, -.35, 0)); cb.position.set(Math.cos(a) * 5, Math.sin(a) * 5, 0); w.add(cb); cabs.push(cb); const lt = glowSprite('#FFE2A8', .6, .8); lt.position.set(Math.cos(a) * 5, Math.sin(a) * 5, .1); w.add(lt); }
  w.position.set(2.5, 6.2, -9); c.add(w); for (const s of [-1, 1]) { const leg = box(.2, 7.5, .2, m, 2.5 + s * 1.8, 3.2, -9); leg.rotation.z = s * .25; c.add(leg); }
  c.userData.wheel = w; c.userData.cabs = cabs; };
