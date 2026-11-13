// Short "¿Y si no existieran los relojes?" — vertical 1080x1920, ~44 s
import * as THREE from 'three';
import { makeShot, aim, keys, smooth, lerp, clamp, rng } from './motor/core.js';
import { makeChar, canvasTex } from './motor/char.js';
import { box, std, cut, glowSprite, pointer, sky, softBlob } from './motor/kit.js';
import { crowd, uT, phone, earthTex, probe, stars, nebula } from './motor/kit2.js';
import { woodFloor, beam, signTex, lightPanel, sunLight } from './comum.js';
import { sala, rua, person, CAST } from './pecas.js';
import { cuarto, clock, wordTex, bubble } from './extra.js';
const ret = (focus, range, blur, extra = {}) => ({ focus, range, blur, bloom: .3, bloomT: .92, vig: .45, exposure: 1.02, ...extra });
const heroi = (c, x, z, y = 0, tint = '#FFE6CC') => { const h = makeChar({ outfit: 'hero', glow: .16 }); h.place(x, z, y); h.tint(tint); c.add(h.root); return h; };

/** 1. Quarto: acorda, o relógio da parede sumiu — 0 a 4.3 */
function cenaDespertar(t0, t1) {
  const s = makeShot(t0, t1, '#E9B48C', 40), c = s.scene; cuarto(c, { bed: [-1.3, -1.0] });
  const wc = clock(.9, 0, { vazio: true }); wc.position.set(2.45, 2.85, -2.83); c.add(wc);
  const nc = clock(.28, 0, { vazio: true }); nc.position.set(.3, .78, -2.0); c.add(nc);
  const q = cut(wordTex('?', '#F2C14E'), .5, .4); c.add(q);
  const h = heroi(c, 1.3, -.4);
  s.update = (t, u) => { const cam = s.camera; h.face(cam); h.eye(u < 1.1 ? 'shut' : u < 2.0 ? 'lookl' : u < 3.0 ? 'look' : 'wide');
    h.pose({ armL: [u < 1.1 ? 160 : 14, 10], armR: [u < 1.1 ? 160 : u > 3 ? 40 : 14, u > 3 ? 40 : 10], head: u > 1.1 && u < 3 ? 6 : 0 });
    q.visible = u > 3.0; q.position.set(1.3, 2.45 + Math.sin(u * 5) * .04, -.4); pointer(q, cam);
    const K = smooth(0, 4.3, u); aim(cam, [lerp(-.2, .9, K), lerp(1.5, 2.0, K), lerp(4.6, 4.6, K)], [lerp(.6, 1.9, K), lerp(1.4, 2.3, K), -1.4], 0);
    return ret(lerp(5, 5.6, K), 2.4, 10); };
  return s;
}

/** 2. Praça: a torre do relógio fica sem relógio — 4.3 a 7.4 */
function cenaTorre(t0, t1) {
  const s = makeShot(t0, t1, '#F1C39A', 40), c = s.scene; rua(c, { seed: 1 });
  c.add(box(5, 18, 5, std('#C9A27A'), 0, 9, -30)); c.add(box(5.8, .6, 5.8, std('#A9825A'), 0, 18.3, -30)); const roof = new THREE.Mesh(new THREE.ConeGeometry(4, 4, 4), std('#6E3A2A')); roof.position.set(0, 20.6, -30); roof.rotation.y = Math.PI / 4; c.add(roof);
  const tc = clock(3.6, 10.1); tc.position.set(0, 14, -27.48); c.add(tc); const tv = clock(3.6, 0, { vazio: true }); tv.position.set(0, 14, -27.47); c.add(tv);
  const poof = glowSprite('#FFFFFF', 6, 0); poof.position.set(0, 14, -27.2); c.add(poof);
  const R = rng(7), sp = []; for (let i = 0; i < 70; i++) sp.push([(R() - .5) * 8, -6 - R() * 14]); crowd(c, sp, { raised: .5, jump: .05, tint: '#FFE8D4', seed: 7 });
  const h = heroi(c, .6, -1.2, 0, '#FFF0DC');
  s.update = (t, u) => { uT.value = t; const cam = s.camera; const gone = smooth(.8, 1.4, u); tc.material.opacity = 1 - gone; tc.visible = gone < 1; tv.material.opacity = gone; poof.material.opacity = Math.sin(gone * Math.PI) * .9;
    h.face(cam); h.eye(u < .9 ? 'look' : 'wide'); h.pose({ armL: [12, 8], armR: [u > 1.4 ? 70 : 12, u > 1.4 ? 20 : 8], head: 10 });
    const K = smooth(0, 3.1, u); aim(cam, [lerp(1.6, 1.2, K), lerp(1.0, 1.3, K), lerp(2.8, 3.6, K)], [lerp(.2, 0, K), lerp(9, 10, K), -27], 0);
    return ret(lerp(28, 30, K), 30, 4, { bloom: .3 }); };
  tc.material.transparent = true; tv.material.transparent = true;
  return s;
}

/** 3. Rua: "nadie llega tarde" (feliz) → "¿qué podría salir mal?" — 7.4 a 11.1 */
function cenaBueno(t0, t1) {
  const s = makeShot(t0, t1, '#F1C39A', 40), c = s.scene; rua(c, { seed: 3 });
  const h = heroi(c, 6.0, -4, .14, '#FFF0DC'); const ps = [0, 2, 3, 6].map((k, i) => person(c, CAST[k], 6.6 + (i % 2) * .7, -7 - i * 2.2, .14));
  s.update = (t, u) => { uT.value = t; const cam = s.camera; const w = smooth(0, 2.0, u); h.root.position.z = lerp(-4.6, -2.0, w); h.face(cam); h.walk(u, w < 1 ? .9 : 0, .7); h.eye(u < 2.1 ? 'happy' : 'smug'); h.pose({ armL: [u > 2.1 ? 40 : 12, 30], armR: [u > 2.1 ? 140 : 12, 20] });
    ps.forEach((k, i) => { k.face(cam); k.eye('happy'); k.walk(u + i, .7, .6); k.root.position.z = -7 - i * 2.2 + u * .5; });
    const K = smooth(0, 3.7, u); aim(cam, [lerp(5.4, 5.8, K), lerp(1.6, 1.7, K), lerp(1.8, .4, K)], [6.1, lerp(1.4, 1.75, K), -3], 0);
    return ret(lerp(5, 3.2, K), 2, 11); };
  return s;
}

/** 4. Celular sem hora — 11.1 a 13.3 */
function drawSinHora(x, k) { const g = x.createLinearGradient(0, 0, 0, 1110); g.addColorStop(0, '#1E2A55'); g.addColorStop(1, '#0E1328'); x.fillStyle = g; x.fillRect(0, 0, 540, 1110); x.fillStyle = '#fff'; x.textAlign = 'center'; x.font = '700 150px Inter'; x.globalAlpha = k; x.fillText('--:--', 270, 330); x.globalAlpha = 1; x.font = '600 36px Inter'; x.fillStyle = '#9AA6CC'; x.fillText('Hora desconocida', 270, 410); x.fillStyle = '#F2C14E'; x.font = '800 44px Inter'; x.fillText('?? / ?? / ????', 270, 480); }
function cenaCelular(t0, t1) {
  const s = makeShot(t0, t1, '#E9B48C', 36), c = s.scene; sala(c);
  const ph = phone((x, k) => drawSinHora(x, k), .36, .74); c.add(ph);
  const handT = canvasTex(256, 256, (x) => { x.clearRect(0, 0, 256, 256); x.fillStyle = '#1A1A22'; x.beginPath(); x.roundRect(40, 60, 176, 190, 60); x.fill(); for (let i = 0; i < 4; i++) { x.beginPath(); x.roundRect(28 + i * 52, 26, 40, 90, 20); x.fill(); } }); const hand = cut(handT, .34, .34); c.add(hand);
  let last = -1;
  s.update = (t, u) => { const cam = s.camera; const k = Math.floor(u * 2) % 2 ? .25 : 1; if (k !== last) { ph.paint(k); last = k; }
    ph.position.set(0, 1.4, 0); ph.rotation.set(-.12, 0, .04); hand.position.set(.02, 1.14, .02); hand.rotation.copy(ph.rotation);
    const K = smooth(0, 2.2, u); aim(cam, [lerp(.05, 0, K), lerp(1.5, 1.45, K), lerp(1.55, 1.15, K)], [0, 1.38, 0], -.02);
    return ret(lerp(1.55, 1.15, K), .3, 16); };
  return s;
}

/** 5. Espaço: satélites de GPS com relógio atômico — 13.3 a 20.5 */
function cenaGPS(t0, t1) {
  const s = makeShot(t0, t1, '#03040C', 36), c = s.scene; s.camera.far = 2400; s.camera.updateProjectionMatrix(); stars(c, 3600, 800, 5); nebula(c, 120, 60, -600, 800, '#7E6BFF', 4, .1);
  const sun = new THREE.DirectionalLight('#FFF4E0', 2.4); sun.position.set(30, 10, 10); c.add(sun); c.add(new THREE.AmbientLight('#2A3550', .45));
  const E = new THREE.Mesh(new THREE.SphereGeometry(4, 80, 56), new THREE.MeshStandardMaterial({ map: earthTex(), roughness: .72 })); E.position.set(0, -5.2, 0); c.add(E);
  const sats = []; for (let i = 0; i < 4; i++) { const p = probe(); p.scale.setScalar(.26); c.add(p); const g = glowSprite('#9FE0FF', .8, .8); c.add(g); sats.push({ p, g, a: i * 1.6 + .3, r: 6.4 + (i % 2) * .5 }); }
  const tgt = glowSprite('#FF6B5A', .5, 1); c.add(tgt); const T = new THREE.Vector3(.3, -1.3, 1.6);
  const lines = sats.map(() => { const g = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]); const l = new THREE.Line(g, new THREE.LineBasicMaterial({ color: '#9FE0FF', transparent: true, opacity: .6 })); c.add(l); return l; });
  
  s.update = (t, u) => { const cam = s.camera; E.rotation.y = .5 + u * .03; tgt.position.copy(T); tgt.material.opacity = .6 + .4 * Math.sin(u * 8);
    sats.forEach(({ p, g, a, r }, i) => { const ang = a + u * .06; p.position.set(Math.cos(ang) * (r - 4.8), 1.7 + Math.sin(ang) * 1.5 + (i % 2) * .4, Math.sin(ang * .7) * 1.2); p.rotation.set(u * .2, u * .3 + i, 0); g.position.copy(p.position); g.material.opacity = .5 + .4 * Math.sin(u * 6 + i);
      const L = lines[i].geometry.attributes.position; L.setXYZ(0, p.position.x, p.position.y, p.position.z); L.setXYZ(1, T.x, T.y, T.z); L.needsUpdate = true; });
    const err = smooth(2.8, 4.0, u); T.set(.3 + err * 1.1, -1.3 + err * .1, 1.6 - err * .2);
    const K = smooth(0, 7.2, u); aim(cam, [lerp(-1.5, 1.2, K), lerp(1.0, .2, K), lerp(10, 8.2, K)], [lerp(0, .6, K), lerp(1.0, -.8, K), 0], 0);
    return ret(9, 30, 3, { bloom: .55, bloomT: .8, bloomR: .7, vig: .5, exposure: 1.04 }); };
  return s;
}

/** 6. Parque: o mapa te manda para o rio — 20.5 a 23.2 */
function cenaRio(t0, t1) {
  const s = makeShot(t0, t1, '#BFE0F0', 38), c = s.scene; c.fog = new THREE.FogExp2('#D9EAF0', .02);
  sky(c, -80, 300, 160, [[0, '#6FA7D8'], [.6, '#CFE4EE'], [1, '#FFE7BE']]);
  const grass = std('#6E9A50', { roughness: 1 }); c.add(box(40, 1, 12, grass, 0, -.5, 5)); c.add(box(40, 1, 30, grass, 0, -.5, -19)); c.add(box(40, .6, 5, std('#5A4632'), 0, -.9, -1.5, false));
  const water = new THREE.Mesh(new THREE.PlaneGeometry(40, 4.2), new THREE.MeshStandardMaterial({ color: '#3E86B8', roughness: .2, metalness: .1, transparent: true, opacity: .92 })); water.rotation.x = -Math.PI / 2; water.position.set(0, -.3, -1.5); c.add(water);
  for (let i = 0; i < 6; i++) { const tr = new THREE.Mesh(new THREE.ConeGeometry(.9, 2.6, 10), std('#3E6A3A')); tr.position.set(-8 + i * 3.4, 1.3, -6 - (i % 2) * 2); tr.castShadow = true; c.add(tr); c.add(box(.2, .6, .2, '#5A3C28', -8 + i * 3.4, .1, -6 - (i % 2) * 2)); }
  const sign = cut(signTex('→ RUTA', '#2F6E5A', '#FFFFFF', 512, 160, 'Inter', 90, 900), .9, .28); sign.position.set(-1.4, 1.7, .9); c.add(sign); c.add(box(.06, 1.6, .06, '#3A3A40', -1.4, .8, .9));
  c.add(new THREE.HemisphereLight('#E9EEFF', '#5A6A4A', 1.0)); c.add(sunLight('#FFE6C0', 2.6, [8, 12, 6], 12, 40));
  const h = heroi(c, 0, 2.4, 0, '#FFF4E4'); const ph = phone((x) => { x.fillStyle = '#D8E6D0'; x.fillRect(0, 0, 540, 1110); x.fillStyle = '#7FB8E0'; x.fillRect(0, 380, 540, 200); x.fillStyle = '#4A86C7'; x.beginPath(); x.moveTo(270, 760); x.lineTo(200, 900); x.lineTo(340, 900); x.fill(); x.fillRect(250, 480, 40, 290); }, .14, .29); ph.paint(); c.add(ph);
  const spl = []; for (let i = 0; i < 14; i++) { const g = glowSprite('#EAF6FF', .35, 0); c.add(g); spl.push(g); }
  s.update = (t, u) => { const cam = s.camera; const w = smooth(0, 1.8, u); const z = lerp(2.4, -1.4, w), fall = smooth(1.55, 1.95, u); h.root.position.set(0, -fall * 1.3, z); h.face(cam); h.walk(u, fall > 0 ? 0 : .9, .7); h.eye(fall > 0 ? 'wide' : 'down'); h.pose({ armR: [fall > 0 ? 170 : 60, 20], armL: [fall > 0 ? 170 : 12, 8] });
    ph.position.set(.25, 1.2 - fall * 1.3 + fall * 1.6, z + .25); ph.rotation.set(-.6, 0, fall * 3); pointer(ph, cam);
    spl.forEach((g, i) => { const k = clamp((u - 1.9) / .8); const a = i / 14 * Math.PI * 2; g.position.set(Math.cos(a) * k * .9, -.2 + Math.sin(k * Math.PI) * (.6 + (i % 3) * .3), -1.4 + Math.sin(a) * k * .4); g.material.opacity = k > 0 && k < 1 ? .9 * (1 - k) : 0; });
    const K = smooth(0, 2.7, u); aim(cam, [lerp(3.6, 3.0, K), lerp(1.4, 1.1, K), lerp(2.6, 1.0, K)], [0, lerp(1.0, .2, K), lerp(.8, -1.2, K)], 0);
    return ret(lerp(4.0, 3.6, K), 2, 9, { exposure: 1.04 }); };
  return s;
}

/** 7. 1883: cada prédio com um relógio diferente, chega o trem e todos se acertam — 23.2 a 31.3 */
function cena1883(t0, t1) {
  const s = makeShot(t0, t1, '#E8C79A', 40), c = s.scene; rua(c, { seed: 4, dusk: false });
  const R = rng(9), cl = []; for (let i = 0; i < 8; i++) { const side = i % 2 ? 1 : -1, z = -4 - Math.floor(i / 2) * 7; const k = clock(1.3, R() * 12); k.position.set(side * 2.6, 3.4, z); c.add(box(.12, 3.4, .12, std('#2A2A30'), side * 2.6, 1.7, z - .1)); c.add(box(1.5, 1.5, .12, std('#2A2A30'), side * 2.6, 3.4, z - .12)); c.add(k); cl.push({ k, h0: R() * 12 }); }
  const train = new THREE.Group(); const tc = ['#2A2A30', '#7A2A22', '#7A2A22', '#7A2A22']; tc.forEach((col, i) => { train.add(box(3.4, 2.2, 2.4, std(col), -i * 3.7, 1.5, 0)); for (const wx of [-1, 1]) for (const wz of [-1.25, 1.25]) { const wh = new THREE.Mesh(new THREE.CylinderGeometry(.42, .42, .15, 16), std('#1A1A1E')); wh.rotation.x = Math.PI / 2; wh.position.set(-i * 3.7 + wx, .45, wz); train.add(wh); } }); train.add(box(.8, 1.4, .8, std('#2A2A30'), 1.0, 3.2, 0)); c.add(train); train.position.set(-40, 0, -34);
  const smokeS = []; for (let i = 0; i < 10; i++) { const g = glowSprite('#EDE6DA', 1.6, .0); c.add(g); smokeS.push(g); }
  const h = makeChar({ outfit: 'terno', glow: .12 }); h.place(1.0, -1.6, 0); h.tint('#F6E2C4'); c.add(h.root);
  s.update = (t, u) => { uT.value = t; const cam = s.camera; const sync = smooth(6.0, 7.0, u); cl.forEach(({ k, h0 }) => k.set(lerp(h0 + u * .4, 12 + u * .02, sync)));
    const tx = lerp(-26, 26, clamp((u - 3.4) / 4.6)); train.position.x = tx; smokeS.forEach((g, i) => { g.position.set(tx + 1 - i * 1.2, 4.2 + i * .35, -34); g.material.opacity = u > 3.6 && u < 7.9 ? .5 * (1 - i / 10) : 0; });
    h.face(cam); h.eye(u < 3.6 ? (Math.sin(u * 2.5) > 0 ? 'look' : 'lookl') : sync > .5 ? 'happy' : 'wide'); h.pose({ armR: [60, 20], armL: [12, 8], head: u < 3.6 ? Math.sin(u * 2.5) * 8 : 0 });
    const K = smooth(0, 8.1, u); aim(cam, [lerp(.4, 0, K), lerp(1.7, 3.2, K), lerp(2.2, 5.0, K)], [lerp(.6, 0, K), lerp(1.9, 2.2, K), lerp(-4, -30, K)], 0);
    return ret(lerp(4, 30, K), lerp(4, 30, K), 6, { tint: '#F2D2A0', exposure: .98, vig: .55 }); };
  return s;
}

/** 8 e 9. Praça ao meio-dia: o amigo espera pelo sol, você chega com fome; fim: ninguém chega tarde */
function cenaPlaza(t0, t1, fim = false) {
  const s = makeShot(t0, t1, '#F1C39A', 40), c = s.scene; rua(c, { seed: 5 });
  const sunS = glowSprite('#FFF2C0', 9, .9); c.add(sunS);
  const f = makeChar({ outfit: 'amarelo', hair: 'afro', hairc: '#2a1b18', lash: true, glow: .1 }); f.place(6.6, -2.4, .14); f.tint('#FFF0DC'); c.add(f.root);
  const h = heroi(c, 4.0, -9, .14, '#FFF0DC'); const sand = box(.32, .16, .2, std('#D9A55A'), 0, 0, 0); c.add(sand);
  const bub = bubble(c, ['¡¿MEDIODÍA?!'], 1.3, { size: 76 }); const R = rng(4), ppl = [];
  if (fim) for (let i = 0; i < 8; i++) ppl.push(person(c, CAST[i % CAST.length], 3.5 + R() * 4.5, -3 - R() * 10, .14));
  s.update = (t, u) => { uT.value = t; const cam = s.camera; const L = Math.min(t1 - t0, 6.4);
    if (!fim) { const sa = smooth(0, 4.4, u); sunS.position.set(lerp(6, -30, sa), lerp(46, 14, sa), -60);
      const arr = smooth(4.4, 6.0, u); h.root.position.set(lerp(4.6, 5.6, arr), .14, lerp(-9, -2.4, arr)); h.walk(u, arr > 0 && arr < 1 ? .9 : 0, .7); h.face(cam); h.eye('happy'); h.pose({ armR: [70, 30], armL: [12, 8] });
      sand.position.set(h.root.position.x + .3, 1.25, h.root.position.z + .2); sand.visible = u > 4.2;
      f.face(cam); f.eye(u < 2.0 ? 'look' : u < 4.6 ? 'flat' : 'angry'); f.pose({ armL: [u > 4.6 ? 40 : 20, -60], armR: [u > 4.6 ? 40 : 20, -60], head: u < 2 ? 12 : 0 });
      bub.visible = u > 4.9; bub.position.set(6.5, 2.75, -2.4); pointer(bub, cam);
      const K = smooth(0, L, u); aim(cam, [lerp(6.4, 5.9, K), lerp(1.7, 1.9, K), lerp(2.2, 3.6, K)], [lerp(6.5, 6.1, K), lerp(1.8, 1.7, K), -3], 0);
      return ret(lerp(4.4, 5.4, K), 2.2, 10, { tint: u > 3 ? '#FFE8D0' : '#FFFFFF' }); }
    sunS.position.set(-10, 30, -60); bub.visible = false; sand.visible = false; f.root.position.set(6.6, .14, -2.4); h.root.position.set(5.6, .14, -2.4);
    [f, h].forEach(k => { k.face(cam); k.eye('happy'); }); f.pose({ armL: [40, 40], armR: [40, 40] }); h.pose({ armL: [u > 2 ? 60 : 12, 50], armR: [u > 2 ? 60 : 12, 50], head: u > 2 ? 8 : 0 });
    ppl.forEach((k, i) => { k.face(cam); k.eye(i % 2 ? 'happy' : 'look'); k.walk(u + i, .7, .6); });
    const K = smooth(0, L, u); aim(cam, [lerp(5.8, 6.2, K), lerp(1.7, 3.6, K), lerp(2.4, 7.5, K)], [6.0, lerp(1.6, 1.2, K), lerp(-2.6, -5, K)], 0);
    return ret(lerp(5, 10, K), 4, 8); };
  return s;
}

export const CENAS = [
  [cenaDespertar, 0, 4.3], [cenaTorre, 4.3, 7.4], [cenaBueno, 7.4, 11.1], [cenaCelular, 11.1, 13.3], [cenaGPS, 13.3, 20.5],
  [cenaRio, 20.5, 23.2], [cena1883, 23.2, 31.3], [(a, b) => cenaPlaza(a, b, false), 31.3, 37.9], [(a, b) => cenaPlaza(a, b, true), 37.9, 999],
];
