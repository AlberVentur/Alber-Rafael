// Short "¿Y si pudieras leer la mente?" — vertical 1080x1920, ~42 s
import * as THREE from 'three';
import { makeShot, aim, keys, smooth, lerp, clamp, rng } from './motor/core.js';
import { makeChar, canvasTex } from './motor/char.js';
import { box, std, cut, glowSprite, pointer, sky } from './motor/kit.js';
import { uT, crowd } from './motor/kit2.js';
import { tileFloor, signTex, lightPanel, sunLight } from './comum.js';
import { sala, rua, person, CAST } from './pecas.js';
import { cuarto, bubble, bubbleTex, wordTex } from './extra.js';
const ret = (focus, range, blur, extra = {}) => ({ focus, range, blur, bloom: .3, bloomT: .92, vig: .45, exposure: 1.02, ...extra });
const heroi = (c, x, z, y = 0, tint = '#FFE6CC') => { const h = makeChar({ outfit: 'hero', glow: .16 }); h.place(x, z, y); h.tint(tint); c.add(h.root); return h; };
const pop = (m, u, a, b = 99) => { const k = smooth(a, a + .25, u) * (1 - smooth(b, b + .25, u)); m.visible = k > .01; m.scale.setScalar(Math.max(.01, k)); };
const aura = (c) => { const g = glowSprite('#B98AFF', 2.6, 0); c.add(g); return g; };

/** 1. Acorda e escuta uma voz — 0 a 3.7 */
function cenaVoz(t0, t1) {
  const s = makeShot(t0, t1, '#E9B48C', 40), c = s.scene; cuarto(c, { bed: [-1.4, -1.0] });
  const rings = [0, 1, 2].map(() => { const m = new THREE.Mesh(new THREE.RingGeometry(.3, .34, 48), new THREE.MeshBasicMaterial({ color: '#B98AFF', transparent: true, side: THREE.DoubleSide })); c.add(m); return m; });
  const h = heroi(c, .6, -.6);
  s.update = (t, u) => { const cam = s.camera; h.face(cam); h.eye(u < .9 ? 'shut' : u < 2.3 ? 'wide' : (Math.sin(u * 4) > 0 ? 'look' : 'lookl')); h.pose({ armL: [u < .9 ? 160 : 14, 10], armR: [u < .9 ? 160 : 14, 10], head: u > 2.3 ? Math.sin(u * 4) * 8 : 0 });
    rings.forEach((m, i) => { const k = ((u * .7 + i / 3) % 1); m.scale.setScalar(.5 + k * 2.4); m.material.opacity = u > 1.0 ? (1 - k) * .7 : 0; m.position.set(.6, 1.9, -.55); pointer(m, cam); });
    const K = smooth(0, 3.7, u); aim(cam, [lerp(-.2, .4, K), lerp(1.6, 1.8, K), lerp(4.2, 3.2, K)], [.4, lerp(1.4, 1.7, K), -1.0], 0); return ret(lerp(4.8, 3.8, K), 1.8, 11); };
  return s;
}

/** 2. Cozinha: a mãe pensa "otra vez llegó tarde"; você lê a mente — 3.7 a 9.9 */
function cenaMama(t0, t1) {
  const s = makeShot(t0, t1, '#E9B48C', 40), c = s.scene; sala(c, { wall: '#2F6E68' });
  c.add(box(2.2, .08, 1.0, std('#D9B48A'), 0, .95, -1.3)); c.add(box(2.1, .9, .9, std('#8E6242'), 0, .45, -1.3));
  const m = makeChar({ outfit: 'rosa', hair: 'long', hairc: '#6B3A22', lash: true, glow: .1 }); m.place(-.6, -2.0); m.tint('#FFF0DC'); c.add(m.root);
  const b = bubble(c, ['otra vez', 'llegó tarde…'], 1.5); const h = heroi(c, .7, -.2); const au = aura(c);
  s.update = (t, u) => { const cam = s.camera; m.face(cam); m.eye(u < 2 ? 'look' : 'flat'); m.pose({ armL: [20, -60], armR: [20, -60] }); h.face(cam); const rd = smooth(4.2, 4.8, u);
    h.eye(u < 2.2 ? 'look' : u < 4.2 ? 'wide' : 'smug'); h.pose({ armL: [12, 8], armR: [rd > 0 ? 120 : 12, rd > 0 ? 60 : 8] });
    pop(b, u, 2.0); b.position.set(-.9, 2.75, -1.9); pointer(b, cam); au.position.set(.7, 1.5, -.9); au.material.opacity = rd * (.3 + .08 * Math.sin(u * 6));
    const K = smooth(0, 6.2, u); aim(cam, [lerp(1.4, .6, K), lerp(1.7, 1.9, K), lerp(2.6, 3.8, K)], [lerp(-.4, 0, K), lerp(2.0, 1.8, K), -1.4], 0); return ret(lerp(4.6, 4.6, K), 2.6, 10); };
  return s;
}

/** 3. Ônibus: quarenta cabeças pensando ao mesmo tempo — 9.9 a 19.8 */
function cenaBus(t0, t1) {
  const s = makeShot(t0, t1, '#F1D2A6', 40), c = s.scene; c.fog = new THREE.FogExp2('#F1D2A6', .03);
  c.add(tileFloor(3.4, 20, '#5A5E6A', '#50545E', 2)); c.add(box(.2, 3, 20, std('#E8E2D4'), -1.7, 1.5, -6)); c.add(box(.2, 3, 20, std('#E8E2D4'), 1.7, 1.5, -6)); c.add(box(3.6, .1, 20, std('#F4F0E8'), 0, 2.9, -6, false));
  for (let i = 0; i < 6; i++) for (const sx of [-1, 1]) { const w = lightPanel(1.6, .9, '#FFE2B0', .9); w.position.set(sx * 1.58, 1.9, -1 - i * 2.2); w.rotation.y = -sx * Math.PI / 2; c.add(w); }
  for (let i = 0; i < 6; i++) for (const sx of [-1, 1]) { c.add(box(1.0, .1, .7, std('#2F6E9A'), sx * 1.05, .7, -1.4 - i * 2.2)); c.add(box(1.0, .9, .1, std('#2F6E9A'), sx * 1.05, 1.1, -1.75 - i * 2.2)); }
  for (let i = 0; i < 5; i++) c.add(box(.05, 2.9, .05, std('#C9CDD2', { metalness: .7 }), (i % 2 ? .45 : -.45), 1.45, -2 - i * 2.4));
  c.add(new THREE.HemisphereLight('#FFF4E0', '#5A5E6A', 1.1)); const sl = sunLight('#FFE6C0', 1.6, [6, 6, 2], 10, 30); c.add(sl);
  const R = rng(3), ppl = []; for (let i = 0; i < 6; i++) for (const sx of [-1, 1]) { if (R() < .25) continue; const k = person(c, CAST[(i * 2 + (sx > 0)) % CAST.length], sx * 1.05, -1.5 - i * 2.2, .1, '#FFF0DC'); k.root.scale.setScalar(.85); ppl.push(k); }
  const bs = [['Tengo', 'hambre.'], ['¿Apagué', 'la estufa?'], ['Qué feo', 'ese pantalón.']].map(L => bubble(c, L, 1.3));
  const who = [ppl[1], ppl[3], ppl[0]]; const extra = []; for (let i = 0; i < 9; i++) { const m = cut(bubbleTex(['…', '?', '!', '…'][i % 4], { size: 120 }), .5, .31, { blend: true }); c.add(m); extra.push(m); }
  const h = heroi(c, .0, 1.4, 0, '#FFF0DC'); const pants = glowSprite('#F2C14E', .9, 0); c.add(pants);
  s.update = (t, u) => { const cam = s.camera; ppl.forEach((k, i) => { k.face(cam); k.eye(i % 3 ? 'look' : 'flat'); k.pose({ armL: [12, 8], armR: [12, 8] }); });
    const T = [3.5, 4.7, 6.0]; bs.forEach((b, i) => { pop(b, u, T[i]); const p = who[i].root.position; b.position.set(p.x * .12 + (i - 1) * .15, 2.3 + i * .08, p.z + .2); pointer(b, cam); });
    extra.forEach((m, i) => { const p = ppl[(i + 2) % ppl.length].root.position; pop(m, u, .4 + i * .25); m.position.set(p.x * .7, 2.0 + Math.sin(u * 2 + i) * .05, p.z); pointer(m, cam); });
    h.face(cam); const look = u > 7.6; h.eye(u < 3.4 ? 'look' : look ? 'sad' : 'wide'); h.pose({ armL: [12, 8], armR: [12, 8], head: look ? -14 : 0 }); pants.position.set(0, .6, 1.5); pants.material.opacity = look ? .35 : 0;
    const K = smooth(0, 7.4, u), K2 = smooth(7.4, 8.4, u); aim(cam, [lerp(lerp(.3, -.2, K), 0, K2), lerp(1.7, 1.6, K2), lerp(lerp(.6, -.6, K), 4.2, K2)], [lerp(lerp(0, .2, K), 0, K2), lerp(1.8, 1.1, K2), lerp(lerp(-4, -6, K), 1.4, K2)], 0);
    return ret(lerp(lerp(4, 6, K), 2.8, K2), 3, 10); };
  return s;
}

/** 4. A cidade inteira pensando: milhares de balões subindo — 19.8 a 27.0 */
function cenaCiudad(t0, t1) {
  const s = makeShot(t0, t1, '#141228', 40), c = s.scene; rua(c, { night: true, seed: 4, lit: .5 });
  const R = rng(5), sp = []; for (let i = 0; i < 160; i++) { const x = (R() - .5) * 9; sp.push([x, -4 - R() * 40]); } crowd(c, sp, { raised: .2, jump: .02, tint: '#D8D0F0', seed: 5 });
  const bt = bubbleTex('', { w: 128, h: 96 }); const N = 700, bs = []; for (let i = 0; i < N; i++) { const m = cut(bt, .5, .38, { blend: true }); c.add(m); bs.push({ m, x: (R() - .5) * 30, z: -4 - R() * 70, y0: R() * 8, sp: .5 + R(), on: i / N }); }
  s.update = (t, u) => { uT.value = t; const cam = s.camera; const n = lerp(.08, 1, smooth(5.3, 7.0, u));
    bs.forEach(({ m, x, z, y0, sp, on }) => { m.visible = on < n; const y = 1.8 + ((y0 + u * sp) % 10); m.position.set(x, y, z); m.material.opacity = 1 - (y - 1.8) / 10; pointer(m, cam); });
    const K = smooth(0, 7.2, u); aim(cam, [lerp(1.0, 0, K), lerp(2.2, 7.5, K), lerp(4, 9, K)], [0, lerp(2.6, 3.6, K), -20], 0); return ret(lerp(10, 20, K), 30, 4, { bloom: .45 }); };
  return s;
}

/** 5. Quem te odeia, quem te ama — 27.0 a 30.9 */
const faceTex = (heart) => canvasTex(256, 200, (x) => { x.clearRect(0, 0, 256, 200); if (heart) { x.fillStyle = '#E8667F'; x.font = '900 170px Fraunces'; x.textAlign = 'center'; x.fillText('♥', 128, 165); return; } x.fillStyle = '#2A2A34'; x.beginPath(); x.arc(128, 100, 80, 0, 7); x.fill(); x.fillStyle = '#F6EFE6'; x.save(); x.translate(98, 92); x.rotate(.35); x.fillRect(-22, -8, 44, 16); x.restore(); x.save(); x.translate(158, 92); x.rotate(-.35); x.fillRect(-22, -8, 44, 16); x.restore(); x.fillRect(100, 132, 56, 10); });
function cenaQuien(t0, t1) {
  const s = makeShot(t0, t1, '#F1C39A', 40), c = s.scene; rua(c, { seed: 6 });
  const a = person(c, CAST[1], 5.2, -3.2, .14), b = person(c, CAST[6], 7.2, -3.0, .14);
  const ba = bubble(c, [''], 1.1), bb = bubble(c, [''], 1.1); const fa = cut(faceTex(false), .5, .4, { blend: true }), fb = cut(faceTex(true), .5, .4, { blend: true }); c.add(fa, fb); fa.renderOrder = fb.renderOrder = 6;
  const h = heroi(c, 6.2, -1.6, .14);
  s.update = (t, u) => { uT.value = t; const cam = s.camera; a.face(cam); b.face(cam); a.eye('flat'); b.eye(u > 2.4 ? 'happy' : 'look'); a.pose({ armL: [20, -60], armR: [20, -60] }); b.pose({ armL: [12, 8], armR: [12, 8] });
    pop(ba, u, .3); pop(fa, u, .35); pop(bb, u, 2.4); pop(fb, u, 2.45); ba.position.set(4.8, 2.9, -3.2); fa.position.set(4.8, 2.97, -3.15); bb.position.set(7.6, 2.9, -3.0); fb.position.set(7.6, 2.97, -2.95); [ba, bb, fa, fb].forEach(m => pointer(m, cam));
    h.face(cam); h.eye(u < .5 ? 'look' : u < 2.4 ? 'flat' : 'heart'); h.pose({ armL: [12, 8], armR: [12, 8] });
    const K = smooth(0, 3.9, u); aim(cam, [lerp(5.6, 6.8, K), lerp(1.8, 1.9, K), lerp(2.4, 2.4, K)], [lerp(5.5, 7.0, K), 2.0, -3], 0); return ret(lerp(5.6, 5.6, K), 2.4, 10); };
  return s;
}

/** 6. Não dá para desligar: balões girando, mãos nos ouvidos — 30.9 a 36.0 */
function cenaRuido(t0, t1) {
  const s = makeShot(t0, t1, '#2A1E2E', 40), c = s.scene; sala(c, { night: true, wall: '#4A3A6A' });
  const L = [['¿y si…?'], ['tengo', 'sueño'], ['qué', 'calor'], ['¿quién', 'es ese?'], ['mañana', 'lunes…'], ['ay no'], ['¿pizza?'], ['qué', 'vergüenza']]; const bs = L.map(l => bubble(c, l, .9));
  const h = heroi(c, 0, -.8, 0, '#E8E0F8');
  s.update = (t, u) => { const cam = s.camera; h.face(cam); h.eye(u < 1.4 ? 'flat' : u < 3.0 ? 'angry' : 'shut'); h.pose({ armL: [u > 1 ? 160 : 40, u > 1 ? 120 : 40], armR: [u > 1 ? 160 : 40, u > 1 ? 120 : 40], bob: Math.sin(u * 30) * .004 });
    bs.forEach((b, i) => { const a = i / bs.length * Math.PI * 2 + u * (.6 + u * .12); const r = 1.0 + (i % 2) * .3; b.position.set(Math.cos(a) * r, 1.6 + Math.sin(a * 1.3) * .6 + (i % 3) * .25, -.8 + Math.sin(a) * r * .5); pointer(b, cam); pop(b, u, i * .12); });
    const K = smooth(0, 5.1, u); aim(cam, [lerp(.0, .1, K), lerp(1.8, 1.7, K), lerp(4.2, 3.0, K)], [0, 1.6, -.8], Math.sin(u * 2) * .02); return ret(lerp(5, 3.8, K), 1.8, 10, { bloom: .4 }); };
  return s;
}

/** 7. Silêncio: sozinho no campo ao entardecer — 36.0 a fim */
function cenaSilencio(t0, t1) {
  const s = makeShot(t0, t1, '#E8B890', 40), c = s.scene; c.fog = new THREE.FogExp2('#E8B890', .007);
  sky(c, -90, 320, 180, [[0, '#5A6AA8'], [.6, '#F2A07A'], [1, '#FFD9A8']]);
  const g = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), std('#7F9A5A', { roughness: 1 })); g.rotation.x = -Math.PI / 2; g.receiveShadow = true; c.add(g);
  const lake = new THREE.Mesh(new THREE.CircleGeometry(8, 48), new THREE.MeshStandardMaterial({ color: '#E8A07A', roughness: .15, metalness: .2 })); lake.rotation.x = -Math.PI / 2; lake.scale.set(1.6, .6, 1); lake.position.set(0, .02, -10); c.add(lake);
  const sunS = glowSprite('#FFE0A0', 7, .9); sunS.position.set(-2, 6, -60); c.add(sunS);
  c.add(new THREE.HemisphereLight('#E9D8FF', '#5A6A4A', .9)); c.add(sunLight('#FFB080', 2.2, [-6, 6, -20], 14, 50));
  const h = heroi(c, .3, -1.5, 0, '#FFE2CC');
  s.update = (t, u) => { const cam = s.camera; const L = Math.min(t1 - t0, 5.8); h.face(cam); h.eye(u < 1.2 ? 'shut' : 'happy'); h.pose({ armL: [12, 8], armR: [12, 8] });
    const K = smooth(0, L, u); aim(cam, [lerp(.6, 1.0, K), lerp(1.5, 2.6, K), lerp(1.4, 5.6, K)], [lerp(.3, 0, K), lerp(1.5, 1.8, K), lerp(-1.5, -8, K)], 0); return ret(lerp(3.0, 7, K), 3, 9, { bloom: .45 }); };
  return s;
}

export const CENAS = [
  [cenaVoz, 0, 3.7], [cenaMama, 3.7, 9.9], [cenaBus, 9.9, 19.8], [cenaCiudad, 19.8, 27.0], [cenaQuien, 27.0, 30.9], [cenaRuido, 30.9, 36.0], [cenaSilencio, 36.0, 999],
];
