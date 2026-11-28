// Ambientes del vídeo "¿Y si te quedas atrapado en un ascensor con tu crush?":
// cabina del ascensor, rellano/portal, hueco del edificio (corte), feria de Otis 1854, escalera.
import * as THREE from 'three';
import { AMBS, box, std, cut, glowSprite, canvasTex, lightPanel, beam, rng } from './mundo.js';
import { sky, skyline } from './motor/kit.js';
import { stars } from './motor/kit2.js';
import { sunLight, tileFloor } from './comum.js';
import { labelT } from './amb2.js';

const em = (col, k = 1.6) => new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: k });
const steel = (col = '#A8ACB0') => std(col, { metalness: .75, roughness: .32 });
const brushed = (base = '#9EA2A6') => { const t = canvasTex(256, 256, (x) => { x.fillStyle = base; x.fillRect(0, 0, 256, 256); const R = rng(7); for (let i = 0; i < 500; i++) { x.fillStyle = `rgba(${R() < .5 ? '255,255,255' : '0,0,0'},${R() * .06})`; x.fillRect(0, R() * 256, 256, 1 + R() * 2); } }); return new THREE.MeshStandardMaterial({ map: t, metalness: .7, roughness: .35 }); };
const plate = (txt, w, h, bg = '#1A1C20', fg = '#FF5A3A', size = 150) => cut(labelT([txt], { bg, fg, size, w: 300, h: 200 }), w, h);

// pantalla de piso (se puede cambiar el número)
export function display(n = 7) { const cv = document.createElement('canvas'); cv.width = 256; cv.height = 160; const x = cv.getContext('2d'); const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace;
  const draw = (v, arrow = '') => { x.fillStyle = '#0C0D10'; x.fillRect(0, 0, 256, 160); x.fillStyle = '#FF6A3A'; x.font = "700 110px 'IBM Plex Mono'"; x.textAlign = 'center'; x.fillText(String(v), 150, 122); if (arrow) { x.font = '700 70px Inter'; x.fillText(arrow, 50, 110); } t.needsUpdate = true; };
  draw(n); const m = new THREE.Mesh(new THREE.PlaneGeometry(.5, .31), new THREE.MeshBasicMaterial({ map: t, toneMapped: false })); m.userData.set = draw; return m; }

// botonera con alarma (campanita) y altavoz
export function botonera() { const g = new THREE.Group(); g.add(box(.36, .9, .03, steel('#8E9296'), 0, 0, 0)); const btns = [];
  const nums = ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '◀▶'];
  nums.forEach((n, i) => { const b = new THREE.Mesh(new THREE.CylinderGeometry(.04, .04, .02, 16), em('#F4E8C8', .15)); b.rotation.x = Math.PI / 2; const col = i % 2, row = Math.floor(i / 2); b.position.set(-.07 + col * .14, .3 - row * .085, .025); g.add(b); const l = cut(labelT([n], { bg: 'rgba(0,0,0,0)', fg: '#1A1A1A', size: 120, w: 200, h: 160 }), .055, .044); l.position.set(-.07 + col * .14, .3 - row * .085, .037); g.add(l); btns.push(b); });
  const al = new THREE.Mesh(new THREE.CylinderGeometry(.05, .05, .025, 16), em('#F2C14E', .3)); al.rotation.x = Math.PI / 2; al.position.set(0, -.33, .025); g.add(al); const bell = cut(labelT(['🔔'], { bg: 'rgba(0,0,0,0)', fg: '#2A2A34', size: 120, w: 200, h: 160 }), .06, .048); bell.position.set(0, -.33, .04); g.add(bell);
  const spk = new THREE.Group(); for (let i = 0; i < 5; i++) spk.add(box(.16, .012, .01, std('#2A2A2A'), 0, -.03 * i, .02)); spk.position.set(0, -.18, 0); g.add(spk);
  g.userData.btns = btns; g.userData.alarm = al; return g; }

// ---------- CABINA ----------
// Interior visto desde delante (pared delantera abierta). Puertas en el fondo (z -1.6), botonera a la derecha de la puerta,
// espejo en la pared izquierda, pantalla de piso encima de la puerta. o.luz: 1 normal, 0 emergencia (ámbar).
AMBS.ascensor = (c, o) => { c.background = new THREE.Color('#08090C'); c.fog = new THREE.FogExp2('#08090C', .03);
  const W = 1.2, Z0 = -1.6, H = 2.8; const wall = brushed('#A4A8AC');
  const fl = box(2.6, .1, 2.4, std('#3A3634', { roughness: .8 }), 0, -.05, -.4); fl.receiveShadow = true; c.add(fl);
  const ft = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 2.0), new THREE.MeshStandardMaterial({ map: (() => { const t = canvasTex(256, 256, (x) => { x.fillStyle = '#4A4440'; x.fillRect(0, 0, 256, 256); x.strokeStyle = '#3A3430'; x.lineWidth = 3; for (let i = 0; i < 256; i += 32) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, 256); x.stroke(); x.beginPath(); x.moveTo(0, i); x.lineTo(256, i); x.stroke(); } }); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(3, 3); return t; })(), roughness: .7 })); ft.rotation.x = -Math.PI / 2; ft.position.set(0, .005, -.6); ft.receiveShadow = true; c.add(ft);
  c.add(box(.08, H, 2.4, wall, -W - .04, H / 2, -.4)); c.add(box(.08, H, 2.4, wall, W + .04, H / 2, -.4)); c.add(box(2.6, .08, 2.4, std('#5A5E62', { metalness: .4, roughness: .5 }), 0, H + .04, -.4));
  // fondo: marco + puertas
  c.add(box(.65, H, .08, wall, -W + .325 - .02, H / 2, Z0)); c.add(box(.65, H, .08, wall, W - .325 + .02, H / 2, Z0)); c.add(box(1.2, H - 2.2, .08, wall, 0, 2.2 + (H - 2.2) / 2, Z0));
  const dm = steel('#B4B8BC'); const dL = box(.56, 2.2, .04, dm, -.28, 1.1, Z0 + .03), dR = box(.56, 2.2, .04, dm, .28, 1.1, Z0 + .03); c.add(dL, dR);
  c.add(box(.01, 2.2, .045, std('#555'), 0, 1.1, Z0 + .04)); const gap = box(1.1, 2.2, .02, std('#050505'), 0, 1.1, Z0 - .02); c.add(gap);
  c.userData.doors = (k) => { dL.position.x = -.28 - .55 * k; dR.position.x = .28 + .55 * k; };
  const ds = display(o.piso ?? 7); ds.position.set(0, 2.5, Z0 + .05); c.add(ds); c.userData.display = ds;
  const bt = botonera(); bt.position.set(.85, 1.25, Z0 + .05); c.add(bt); c.userData.botonera = bt;
  // pasamanos
  for (const sx of [-1, 1]) c.add(box(.04, .04, 1.8, steel('#C8CCD0'), sx * (W - .06), .95, -.5));
  // espejo (pared izquierda)
  const mir = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 1.5), new THREE.MeshStandardMaterial({ color: '#C8D4DC', metalness: .9, roughness: .08, emissive: '#22303A', emissiveIntensity: .35 })); mir.rotation.y = Math.PI / 2; mir.position.set(-W + .005, 1.55, -.6); c.add(mir); c.userData.mirror = mir;
  c.add(box(.02, 1.56, 1.56, std('#6A6E72', { metalness: .6 }), -W + .001, 1.55, -.6));
  // placa del fabricante
  const pl = cut(labelT(['MÁX. 6 PERSONAS · 450 KG'], { bg: '#2A2C30', fg: '#D8DCE0', size: 44, w: 600, h: 90 }), .5, .075); pl.position.set(.85, 1.82, Z0 + .05); c.add(pl);
  // luz
  const pan = lightPanel(1.6, .9, '#FFF6E8', 1.6); pan.rotation.x = Math.PI / 2; pan.position.set(0, H - .01, -.5); c.add(pan);
  const Lw = new THREE.PointLight('#FFF4E4', 10, 7, 1.4); Lw.position.set(0, H - .3, -.3); Lw.castShadow = true; c.add(Lw);
  const emg = new THREE.Mesh(new THREE.BoxGeometry(.3, .06, .14), em('#FFB040', 0)); emg.position.set(-.7, H - .05, -1.3); c.add(emg);
  const La = new THREE.PointLight('#FFA840', 0, 6, 1.4); La.position.set(-.6, H - .4, -1.0); c.add(La);
  const hemi = new THREE.HemisphereLight('#E8ECF0', '#3A3634', .5); c.add(hemi);
  const fill = new THREE.PointLight('#FFE8C8', 0, 8, 1.6); fill.position.set(0, 1.8, 2.4); c.add(fill);
  c.userData.luz = (v, flick = 0) => { const n = Math.max(0, Math.min(1, v)) * (1 - flick); pan.material.emissiveIntensity = 1.6 * n; Lw.intensity = 10 * n; emg.material.emissiveIntensity = 2.4 * (1 - n); La.intensity = 9 * (1 - n); hemi.intensity = .14 + .36 * n; hemi.color.set(n > .5 ? '#E8ECF0' : '#FFC890'); fill.intensity = 3.2 * (1 - n); };
  c.userData.luz(o.luz ?? 1);
};

// ---------- RELLANO / PORTAL ----------
// Puertas del ascensor al fondo (x 0, z -3), número de piso a la derecha. o.piso, o.open (0..1), o.portal (buzones + puerta de cristal), o.night.
AMBS.rellano = (c, o) => { const night = !!o.night; c.background = new THREE.Color('#14120F'); c.fog = new THREE.FogExp2('#2A2620', .035);
  c.add(tileFloor(14, 10, o.portal ? '#D8D0C0' : '#B8A890', o.portal ? '#C8C0B0' : '#A89880', 8));
  const wc = o.portal ? '#E8E0D0' : '#D8C8A8'; c.add(box(6.38, 3.4, .3, std(wc), -3.81, 1.7, -3.2)); c.add(box(6.38, 3.4, .3, std(wc), 3.81, 1.7, -3.2)); c.add(box(1.24, 1.2, .3, std(wc), 0, 2.8, -3.2)); c.add(box(.3, 3.4, 10, std(wc), -5, 1.7, 0)); c.add(box(.3, 3.4, 10, std(wc), 5, 1.7, 0)); c.add(box(14, .2, 10, std('#F0EAE0'), 0, 3.4, 0));
  for (const sx of [-1, 1]) c.add(box(6.3, .9, .02, std(o.portal ? '#8A6A4A' : '#9A7A5A'), sx * 3.85, .45, -3.04));
  // marco ascensor
  c.add(box(1.5, .12, .1, steel('#9EA2A6'), 0, 2.26, -3.02)); for (const sx of [-1, 1]) c.add(box(.12, 2.3, .1, steel('#9EA2A6'), sx * .69, 1.13, -3.02));
  const inner = new THREE.Group(); inner.add(box(1.3, .05, 1.6, std('#4A4440'), 0, 0, -.8)); inner.add(box(1.3, 2.2, .05, brushed(), 0, 1.1, -1.6)); for (const sx of [-1, 1]) inner.add(box(.05, 2.2, 1.6, brushed(), sx * .65, 1.1, -.8)); const ip = lightPanel(1.1, 1.2, '#FFF6E8', 1.8); ip.rotation.x = Math.PI / 2; ip.position.set(0, 2.18, -.8); inner.add(ip); inner.position.set(0, 0, -3.05); c.add(inner);
  const il = new THREE.PointLight('#FFF4E4', 0, 5, 1.4); il.position.set(0, 1.8, -3.6); c.add(il);
  const dm = steel('#B4B8BC'); const dL = box(.62, 2.2, .05, dm, -.31, 1.1, -3.0), dR = box(.62, 2.2, .05, dm, .31, 1.1, -3.0); c.add(dL, dR);
  c.userData.doors = (k) => { dL.position.x = -.31 - .6 * k; dR.position.x = .31 + .6 * k; il.intensity = 8 * k; }; c.userData.doors(o.open || 0);
  const ds = display(o.piso ?? 8); ds.scale.setScalar(.8); ds.position.set(0, 2.55, -3.02); c.add(ds); c.userData.display = ds;
  const call = box(.1, .2, .03, steel(), .95, 1.2, -3.03); c.add(call); const cb = new THREE.Mesh(new THREE.SphereGeometry(.03, 10, 8), em('#FFB040', 1)); cb.position.set(.95, 1.2, -3.0); c.add(cb);
  const np = plate(String(o.piso ?? 8), .45, .3, '#2A2A34', '#F2C14E'); np.position.set(1.5, 2.2, -3.03); c.add(np);
  if (o.portal) { // buzones + puerta de cristal
    const bz = new THREE.Group(); for (let i = 0; i < 12; i++) { bz.add(box(.36, .26, .04, std('#8E6242'), -.6 + (i % 4) * .4, -(Math.floor(i / 4)) * .3, 0)); bz.add(box(.2, .02, .02, std('#2A2A2A'), -.6 + (i % 4) * .4, -(Math.floor(i / 4)) * .3 + .05, .03)); } bz.position.set(-3.0, 1.9, -3.03); c.add(bz);
    c.add(box(.04, 2.6, 2.0, std('#9FC8E8', { transparent: true, opacity: .35, metalness: .3, roughness: .1 }), 4.84, 1.3, .5)); const pt = cut(labelT(['PORTAL'], { bg: '#2A2A34', fg: '#F2C14E', size: 80, w: 400, h: 120 }), .8, .24); pt.position.set(-3.0, 2.6, -3.03); c.add(pt);
  } else { // puertas de pisos
    for (const [x, l] of [[-3.2, 'A'], [3.2, 'B']]) { c.add(box(1.0, 2.2, .06, std('#6B4A33'), x, 1.1, -3.02)); const pp = cut(labelT([String(o.piso ?? 8) + 'º' + l], { bg: '#C8A858', fg: '#2A2A34', size: 70, w: 240, h: 110 }), .3, .14); pp.position.set(x, 1.85, -2.98); c.add(pp); const h = new THREE.Mesh(new THREE.SphereGeometry(.04, 10, 8), steel('#D8B860')); h.position.set(x + .38, 1.05, -2.96); c.add(h); } }
  const lamps = []; for (const x of [-2.5, 2.5]) { const b = new THREE.Mesh(new THREE.SphereGeometry(.16, 14, 10), em('#FFE8C0', night ? 1.4 : 2)); b.position.set(x, 3.15, -1); c.add(b); lamps.push(b); const pl = new THREE.PointLight('#FFE0B0', night ? 6 : 9, 9, 1.4); pl.position.set(x, 2.9, -.8); pl.castShadow = x < 0; c.add(pl); }
  c.add(new THREE.HemisphereLight('#F4ECE0', '#4A4034', night ? .35 : .6));
};

// ---------- HUECO DEL EDIFICIO (corte) ----------
// Pozo vertical: piso n en y = n*3. Cabina (c.userData.cab) con frente abierto; contrapeso y cables hasta la polea arriba.
// o.night: ciudad de noche detrás. c.userData.setCab(y) mueve la cabina y los cables.
export const PISO = 3;
AMBS.hueco = (c, o) => { c.background = new THREE.Color('#05060C'); c.fog = new THREE.FogExp2('#0A0C18', .02);
  sky(c, -120, 500, 260, [[0, '#04050C'], [.6, '#0E1230'], [1, '#2A2450']]); stars(c, 1600, 220, 3); skyline(c, -60, 300, 50, ['#0C0E1E', '#12142A', '#181A34'], true, 6);
  const top = 13 * PISO; const wallM = std('#3A3A42', { roughness: .95 });
  c.add(box(4.4, top + 2, .3, wallM, 0, top / 2, -2.2)); for (const sx of [-1, 1]) c.add(box(.3, top + 2, 3.2, wallM, sx * 2.2, top / 2, -.8));
  for (let n = 0; n <= 13; n++) { const y = n * PISO; c.add(box(4.1, .14, .1, std('#6A6A74'), 0, y - .07, -2.02)); if (n === 0) c.add(box(4.1, .25, 3.2, std('#5A5A64'), 0, -.12, -.8));
    if (n <= 12) { const lb = cut(labelT([n === 0 ? 'BAJO' : 'PISO ' + n], { bg: '#F2C14E', fg: '#2A2A34', size: 70, w: 420, h: 110 }), .9, .24); lb.position.set(-1.55, y + 2.5, -2.03); c.add(lb); } }
  // rieles
  for (const sx of [-1, 1]) c.add(box(.08, top, .08, steel('#7A7E84'), sx * 1.75, top / 2, -1.6));
  // cabina
  const cab = new THREE.Group(); const cw = brushed('#A4A8AC'); cab.add(box(2.6, .12, 2.2, std('#3A3634'), 0, 0, 0)); cab.add(box(2.6, .1, 2.2, std('#5A5E62', { metalness: .4 }), 0, 2.85, 0)); for (const sx of [-1, 1]) cab.add(box(.08, 2.8, 2.2, cw, sx * 1.3, 1.4, 0)); cab.add(box(2.6, 2.8, .08, cw, 0, 1.4, -1.1));
  const cp = lightPanel(1.6, 1.0, '#FFF6E8', 1.6); cp.rotation.x = Math.PI / 2; cp.position.set(0, 2.79, 0); cab.add(cp); const cl = new THREE.PointLight('#FFF4E4', 8, 5, 1.4); cl.position.set(0, 2.4, .3); cab.add(cl); const ce = new THREE.PointLight('#FFA840', 0, 5, 1.4); ce.position.set(0, 2.4, .3); cab.add(ce);
  cab.add(box(.4, .3, .4, std('#2A2A2E', { metalness: .6 }), 0, 3.05, 0)); for (const sx of [-1, 1]) { const br = box(.18, .3, .18, std('#C9361F', { metalness: .4 }), sx * 1.6, .25, -.5); cab.add(br); }
  cab.position.set(0, 0, -.6); c.add(cab); c.userData.cab = cab;
  c.userData.cabLuz = (v) => { cp.material.emissiveIntensity = 1.6 * v; cl.intensity = 8 * v; ce.intensity = 7 * (1 - v); };
  // polea + cables + contrapeso
  const pul = new THREE.Mesh(new THREE.CylinderGeometry(.6, .6, .3, 24), steel('#6A6E74')); pul.rotation.x = Math.PI / 2; pul.position.set(.6, top + .3, -1.4); c.add(pul);
  const cables = []; for (let i = 0; i < 4; i++) { const cb = new THREE.Mesh(new THREE.CylinderGeometry(.018, .018, 1, 6), steel('#2A2C30')); c.add(cb); cables.push([cb, -.09 + i * .06]); }
  const cw2 = box(.7, 1.6, .3, std('#4A4C52', { metalness: .5 }), 1.25, 0, -1.8); c.add(cw2); const cbl2 = new THREE.Mesh(new THREE.CylinderGeometry(.03, .03, 1, 6), steel('#2A2C30')); c.add(cbl2);
  c.userData.setCab = (y, cut0 = 0) => { cab.position.y = y; const yTop = y + 3.2; cables.forEach(([cb, dx]) => { const L = Math.max(.01, (top - yTop) * (1 - cut0)); cb.scale.y = L; cb.position.set(dx, top - L / 2, -.6); }); const cy = top - 4 - (y * .9) % (top - 6); cw2.position.y = Math.max(1, top - 2 - y); const L2 = top - cw2.position.y - .8; cbl2.scale.y = Math.max(.01, L2); cbl2.position.set(1.25, top - L2 / 2, -1.8); };
  c.userData.setCab(o.y ?? 7.5 * PISO);
  // luz ambiente del pozo
  for (let n = 0; n <= 12; n += 2) { const l = new THREE.PointLight('#8A9ACA', 2.2, 8, 1.6); l.position.set(-1.5, n * PISO + 2.2, .4); c.add(l); }
  c.add(new THREE.HemisphereLight('#6A78A8', '#101018', .5));
  // ventanas del edificio a los lados (fachada cortada)
  const R = rng(12); for (let n = 0; n < 13; n++) for (const sx of [-1, 1]) for (let k = 0; k < 2; k++) { const lit = R() < .55; const wv = lightPanel(.8, 1.0, lit ? '#FFD890' : '#1A1C2A', lit ? 1.2 : .2); wv.position.set(sx * (3.2 + k * 1.6), n * PISO + 1.6, -.6); c.add(wv); c.add(box(1.4, PISO, .2, std('#2A2A34'), sx * (3.2 + k * 1.6), n * PISO + PISO / 2, -.75)); }
  if (o.fuegos) c.userData.fuegos = true;
};

// ---------- FERIA 1854 (Otis) ----------
// Pabellón de hierro y cristal; torre con plataforma colgada de una cuerda. c.userData.plat (grupo), c.userData.rope, c.userData.setPlat(y, cortada)
AMBS.feria = (c, o) => { c.background = new THREE.Color('#2A2018'); c.fog = new THREE.FogExp2('#6A5A44', .03);
  c.add(tileFloor(40, 30, '#8A7258', '#7E6850', 14));
  for (let i = -3; i <= 3; i++) { c.add(box(.25, 12, .25, std('#4A4A4E', { metalness: .5 }), i * 4, 6, -9)); const ar = new THREE.Mesh(new THREE.TorusGeometry(2, .1, 6, 24, Math.PI), std('#4A4A4E', { metalness: .5 })); ar.position.set(i * 4 + 2, 12, -9); c.add(ar); }
  for (let i = 0; i < 8; i++) { const w = lightPanel(3.6, 4, '#FFF0D0', .55); w.position.set(-14 + i * 4, 7, -9.15); c.add(w); }
  const flags = ['#C9361F', '#F4F0E4', '#2A4A8A']; for (let i = 0; i < 9; i++) c.add(box(.6, .4, .02, std(flags[i % 3]), -8 + i * 2, 9.5, -6));
  // torre
  const tw = std('#6A4A30', { roughness: .8 }); for (const sx of [-1, 1]) c.add(box(.25, 9, .25, tw, sx * 1.4, 4.5, -3)); c.add(box(3.2, .3, .4, tw, 0, 9, -3)); for (let y = 1; y < 9; y += 1.5) for (const sx of [-1, 1]) { const d = box(.08, 2.1, .08, tw, sx * 1.4, y, -3.2); d.rotation.z = sx * .7; c.add(d); }
  const wheel = new THREE.Mesh(new THREE.CylinderGeometry(.4, .4, .15, 18), std('#3A3A3E', { metalness: .6 })); wheel.rotation.x = Math.PI / 2; wheel.position.set(0, 9.3, -3); c.add(wheel);
  const plat = new THREE.Group(); plat.add(box(2.4, .15, 1.8, std('#8A6A44'), 0, 0, 0)); for (const sx of [-1, 1]) plat.add(box(.08, 1.0, .08, tw, sx * 1.1, .5, .8)); plat.add(box(2.3, .06, .06, tw, 0, 1.0, .8)); for (const sx of [-1, 1]) { const tooth = box(.16, .2, .16, std('#3A3A3E', { metalness: .6 }), sx * 1.3, .05, 0); plat.add(tooth); }
  plat.position.set(0, 5, -3); c.add(plat); c.userData.plat = plat;
  const rope = new THREE.Mesh(new THREE.CylinderGeometry(.03, .03, 1, 6), std('#C8A870')); c.add(rope); c.userData.rope = rope;
  c.userData.setPlat = (y, cutK = 0) => { plat.position.y = y; const L = (9.2 - (y + .1)) * (1 - cutK); rope.visible = L > .02; rope.scale.y = Math.max(.01, L); rope.position.set(0, 9.2 - L / 2, -3); };
  c.userData.setPlat(o.y ?? 5);
  const sg = cut(labelT(['NUEVA YORK · 1854'], { bg: '#3A2A1A', fg: '#F4E0B0', size: 80, w: 900, h: 140 }), 4, .62); sg.position.set(0, 10.6, -8.8); c.add(sg);
  c.add(new THREE.HemisphereLight('#FFE8C8', '#5A4A38', .9)); c.add(sunLight('#FFD8A0', 2.2, [-6, 14, 8], 14, 50));
};

// ---------- ESCALERA ----------
// Tramo de escalera que baja hacia +x (escalón i: x = -3 + i*.32, y = 2.6 - i*.18). Rellano con número de piso.
export const escY = (x) => Math.max(0, Math.min(2.6, 2.6 - (x + 3) / .32 * .18));
AMBS.escalera = (c, o) => { c.background = new THREE.Color('#1E1A16'); c.fog = new THREE.FogExp2('#2A2620', .04);
  c.add(tileFloor(14, 10, '#C8B898', '#B8A888', 8)); const wc = '#E0D4BC'; c.add(box(16, 7, .3, std(wc), 0, 3.5, -2.4));
  for (let i = 0; i < 15; i++) { const s = box(.34, .18 * (15 - i), 1.6, std('#B8A890', { roughness: .8 }), -3 + i * .32 + .16, .09 * (15 - i), -1.3); s.receiveShadow = true; c.add(s); c.add(box(.34, .03, 1.62, std('#8A7A60'), -3 + i * .32 + .16, .18 * (15 - i) + .01, -1.3)); }
  c.add(box(2.6, 2.6, 1.6, std('#B8A890'), -4.3, 1.3, -1.3));
  const rail = new THREE.Mesh(new THREE.CylinderGeometry(.03, .03, 5.7, 8), std('#5A3A22')); rail.position.set(-.6, 2.4, -.45); rail.rotation.z = Math.atan2(2.7, 4.8) + Math.PI / 2; c.add(rail);
  for (let i = 0; i < 14; i += 2) c.add(box(.025, .9, .025, std('#2A2A2E'), -2.9 + i * .32, escY(-2.9 + i * .32) + .45, -.5));
  const np = plate(String(o.piso ?? 9), .5, .34, '#2A2A34', '#F2C14E'); np.position.set(-4.2, 3.6, -2.23); c.add(np);
  const win = lightPanel(1.1, 1.4, o.night ? '#2A3A6A' : '#FFF4D8', o.night ? .5 : 1.6); win.position.set(1.5, 3.4, -2.23); c.add(win);
  for (const x of [-3.5, 2]) { const pl = new THREE.PointLight('#FFE0B0', 8, 9, 1.4); pl.position.set(x, 4.4, .5); pl.castShadow = x < 0; c.add(pl); }
  c.add(new THREE.HemisphereLight('#F4ECE0', '#4A4034', .6));
};
