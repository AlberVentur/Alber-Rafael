// Short "¿Y si no pudieras dormir nunca más?" — vertical 1080x1920, ~42 s
import * as THREE from 'three';
import { makeShot, aim, keys, smooth, lerp, clamp, rng } from './motor/core.js';
import { makeChar, canvasTex } from './motor/char.js';
import { box, std, cut, glowSprite, pointer, sky } from './motor/kit.js';
import { uT, phone } from './motor/kit2.js';
import { dogTex, pigeonTex } from './motor/art.js';
import { poster, signTex, lightPanel, sunLight } from './comum.js';
import { sala, rua, person, CAST } from './pecas.js';
import { cuarto, deitar, wordTex, bubble, speechTex, clock } from './extra.js';
const ret = (focus, range, blur, extra = {}) => ({ focus, range, blur, bloom: .3, bloomT: .92, vig: .45, exposure: 1.02, ...extra });
const heroi = (c, x, z, y = 0, tint = '#FFE6CC', outfit = 'hero') => { const h = makeChar({ outfit, glow: .16 }); h.place(x, z, y); h.tint(tint); c.add(h.root); return h; };
const zzz = (c) => [0, 1, 2].map(() => { const m = cut(wordTex('Z', '#BFD4FF', 150), .32, .25, { blend: true }); c.add(m); return m; });
const doZ = (zs, u, cam, x, y, z, on = true) => zs.forEach((m, i) => { const k = ((u * .6 + i / 3) % 1); m.position.set(x + k * .5, y + k * .9, z); m.material.opacity = on ? Math.sin(k * Math.PI) : 0; pointer(m, cam); });
const nightSky = (c, k) => { const col = new THREE.Color('#2A1E2E').lerp(new THREE.Color('#F2B488'), k); c.background = col; if (c.fog) c.fog.color.copy(col); };

/** 1. Na cama: fecha os olhos… e nada. Amanhece — 0 a 6.6 */
function cenaCama(t0, t1) {
  const s = makeShot(t0, t1, '#2A1E2E', 40), c = s.scene; const q = cuarto(c, { night: true, bed: [0, -1.0], col: '#4A86C7' });
  const dawn = lightPanel(3.6, 3.3, '#F2A87A', 0); dawn.position.set(0, 2.65, -3.2); c.add(dawn);
  const h = heroi(c, -.85, -1.05, .98, '#C8C8F0');
  s.update = (t, u) => { const cam = s.camera; h.face(cam); deitar(h, -Math.PI / 2); h.root.position.set(-.85, .98, -1.05);
    h.eye(u < 1.8 ? 'look' : u < 3.2 ? 'shut' : u < 4.8 ? 'wide' : 'flat'); h.pose({ armL: [12, 8], armR: [12, 8] });
    const d = smooth(4.4, 6.6, u); dawn.material.emissiveIntensity = d * 1.2; q.lamp.intensity = 5 * (1 - d);
    const K = smooth(0, 6.6, u); aim(cam, [lerp(.6, .3, K), lerp(2.3, 1.9, K), lerp(3.6, 2.6, K)], [lerp(.2, .5, K), lerp(1.2, 1.25, K), -1.0], 0); return ret(lerp(4.0, 3.2, K), 1.4, 12, { exposure: .95 + d * .1 }); };
  return s;
}

/** 2. Sala de madrugada: "8 horas extra!" (relógio voando) — 6.6 a 10.9 */
function cenaExtra(t0, t1) {
  const s = makeShot(t0, t1, '#2A1E2E', 40), c = s.scene; sala(c, { night: true, wall: '#6A4A7A' });
  const ck = clock(1.0, 3); ck.position.set(2.6, 3.0, -2.83); c.add(ck);
  const gt = canvasTex(160, 420, (x) => { x.clearRect(0, 0, 160, 420); x.fillStyle = '#C9762A'; x.beginPath(); x.ellipse(80, 320, 70, 90, 0, 0, 7); x.fill(); x.fillStyle = '#5A3420'; x.fillRect(68, 20, 24, 240); x.fillStyle = '#2A1A10'; x.beginPath(); x.arc(80, 310, 26, 0, 7); x.fill(); });
  const guitar = cut(gt, .45, 1.2); c.add(guitar);
  const h = heroi(c, .3, -.9, 0, '#E8E0F8');
  s.update = (t, u) => { const cam = s.camera; ck.set(3 + u * 1.6); h.face(cam); h.eye('happy'); if (u < 2.0) h.pose({ armL: [70, 40], armR: [50, 20 + Math.sin(u * 20) * 10] }); else h.cheer(u, 0, 1);
    guitar.visible = u < 2.0; guitar.position.set(h.root.position.x + .05, 1.0, h.root.position.z + .2); guitar.rotation.set(0, h.root.rotation.y, -.9);
    const K = smooth(0, 4.3, u); aim(cam, [lerp(.0, .6, K), lerp(1.7, 1.9, K), lerp(3.6, 4.4, K)], [lerp(.3, 1.0, K), lerp(1.4, 1.9, K), -1.4], 0); return ret(lerp(3.4, 4.4, K), 2.2, 10, { bloom: .4 }); };
  return s;
}

/** 3. Rua: anda em zigue-zague, tudo balança — 10.9 a 16.6 */
function cenaMareo(t0, t1) {
  const s = makeShot(t0, t1, '#F1C39A', 40), c = s.scene; rua(c, { seed: 2 });
  const h = heroi(c, 6.0, -3, .14, '#FFF0DC'); const ps = [0, 3].map((k, i) => person(c, CAST[k], 6.8 - i * .9, -7 - i * 2, .14));
  s.update = (t, u) => { uT.value = t; const cam = s.camera; const w = u / 5.7; h.root.position.set(6.0 + Math.sin(u * 2.4) * .5, .14, lerp(-4.6, -1.6, w)); h.face(cam); h.walk(u, .8, .9); h.root.rotation.z = Math.sin(u * 2.4) * .14; h.eye(u < 2.4 ? 'flat' : 'shut'); h.pose({ armL: [40 + Math.sin(u * 3) * 20, 30], armR: [40 + Math.cos(u * 3) * 20, 30], head: Math.sin(u * 2.4) * 12 });
    ps.forEach((k, i) => { k.face(cam); k.eye(u > 1.5 ? 'wide' : 'look'); k.pose({ armL: [12, 8], armR: [12, 8] }); });
    const K = smooth(0, 5.7, u); aim(cam, [lerp(5.6, 6.2, K) + Math.sin(u * 1.7) * .15, lerp(1.6, 1.8, K), lerp(2.0, 1.6, K)], [6.1, 1.4, -3], Math.sin(u * 1.9) * .08);
    return ret(lerp(5, 3.6, K), 2, 12 + Math.sin(u * 2) * 3, { tint: '#FFE6D0' }); };
  return s;
}

/** 4. Dia 3: esquece as palavras; dia 4: vê coisas que não estão — 16.6 a 22.5 */
function cenaAlucina(t0, t1) {
  const s = makeShot(t0, t1, '#E9B48C', 40), c = s.scene; sala(c, { wall: '#4A6A8A' });
  const sp = cut(speechTex(['¿El… la…', '¿cosa esa?'], { size: 62 }), 1.5, .7, { blend: true }); c.add(sp);
  const g1 = cut(dogTex(true), 1.3, 1.0, { blend: true }), g2 = cut(pigeonTex(true), .8, .6, { blend: true }), g3 = cut(pigeonTex(true), .7, .52, { blend: true }); [g1, g2, g3].forEach(g => c.add(g));
  const d3 = cut(signTex('DÍA 3', '#2A2A34', '#F2C14E', 512, 200, 'Inter', 110, 900), .9, .35), d4 = cut(signTex('DÍA 4', '#2A2A34', '#E8667F', 512, 200, 'Inter', 110, 900), .9, .35); c.add(d3, d4);
  const h = heroi(c, .3, -.8);
  s.update = (t, u) => { const cam = s.camera; const hal = smooth(3.8, 4.4, u); h.face(cam); h.eye(u < 3.8 ? (Math.sin(u * 3) > 0 ? 'look' : 'lookl') : 'wide'); h.pose({ armL: [u < 3.8 ? 70 : 150, 40], armR: [u < 3.8 ? 30 : 150, 30], head: u < 3.8 ? Math.sin(u * 3) * 6 : 0 });
    sp.visible = u > .5 && u < 3.8; sp.position.set(-.3, 2.5, -.8); pointer(sp, cam);
    d3.visible = u < 3.8; d3.position.set(.3, 3.3, -1.0); d4.visible = u >= 3.8; d4.position.set(.3, 3.3, -1.0); pointer(d3, cam); pointer(d4, cam);
    [[g1, -.9, 1.4, -1.6], [g2, 1.3, 2.4, -1.4], [g3, -1.2, 2.9, -2]].forEach(([g, x, y, z], i) => { g.position.set(x + Math.sin(u * 1.3 + i) * .2, y + Math.sin(u * 2 + i) * .1, z); g.material.opacity = hal * .75; g.visible = hal > 0; pointer(g, cam); });
    const K = smooth(0, 5.9, u); aim(cam, [lerp(.4, .2, K), lerp(1.8, 2.0, K), lerp(3.4, 4.6, K)], [lerp(.2, 0, K), lerp(1.8, 1.9, K), -1.0], 0);
    return ret(lerp(4.2, 5.6, K), 2.4, 10, { tint: hal > 0 ? '#E8D8FF' : '#FFFFFF', bloom: .3 + hal * .3 }); };
  return s;
}

/** 5. 1964: um estudante, o calendário passa de 1 a 11 — 22.5 a 30.5 */
function cena1964(t0, t1) {
  const s = makeShot(t0, t1, '#D8B48A', 40), c = s.scene; sala(c, { wall: '#7A6A4A' });
  const cv = document.createElement('canvas'); cv.width = 300; cv.height = 360; const x = cv.getContext('2d'); const ct = new THREE.CanvasTexture(cv); ct.colorSpace = THREE.SRGBColorSpace; let last = -1;
  const paint = (n) => { if (n === last) return; last = n; x.fillStyle = '#FBF7EC'; x.fillRect(0, 0, 300, 360); x.fillStyle = '#C9361F'; x.fillRect(0, 0, 300, 80); x.fillStyle = '#fff'; x.font = '800 44px Inter'; x.textAlign = 'center'; x.fillText('DÍA', 150, 56); x.fillStyle = '#2A2A34'; x.font = '900 200px Fraunces'; x.fillText(String(n), 150, 290); ct.needsUpdate = true; };
  const cal = new THREE.Mesh(new THREE.PlaneGeometry(.75, .9), new THREE.MeshStandardMaterial({ map: ct })); cal.position.set(2.6, 2.8, -2.83); c.add(cal);
  const st = makeChar({ outfit: 'laranja', glow: .12 }); st.place(1.4, -.9); st.tint('#F6E2C4'); c.add(st.root);
  const fr = makeChar({ outfit: 'jaleco', glasses: true, glow: .1 }); fr.place(-.4, -1.4); fr.tint('#F6E2C4'); c.add(fr.root);
  s.update = (t, u) => { const cam = s.camera; const n = Math.min(11, 1 + Math.floor(u / 4.6 * 10)); paint(n); st.face(cam); fr.face(cam);
    st.eye(n < 4 ? 'look' : n < 8 ? 'flat' : 'shut'); st.pose({ armL: [12, 8], armR: [12, 8], head: n > 7 ? Math.sin(u * 4) * 8 : 0 }); if (u > 4.8) st.eye('happy');
    fr.eye(u < 4.8 ? 'look' : 'happy'); fr.pose({ armR: [u > 4.8 ? 150 : 60, 20], armL: [14, -60] });
    const K = smooth(0, 8, u); aim(cam, [lerp(.6, 1.2, K), lerp(1.8, 2.0, K), lerp(3.6, 3.2, K)], [lerp(1.4, 1.8, K), lerp(1.6, 2.2, K), -1.6], 0);
    return ret(lerp(4.6, 4.4, K), 2.6, 10, { tint: '#F2D8B0', vig: .55 }); };
  paint(1); return s;
}

/** 6. Dorme 14 horas: céu passando dia → noite → dia — 30.5 a 34.6 */
function cenaCatorce(t0, t1) {
  const s = makeShot(t0, t1, '#D8B48A', 40), c = s.scene; const q = cuarto(c, { bed: [0, -1.0], col: '#C9762A', wall: '#7A6A4A' });
  const win = lightPanel(3.6, 3.3, '#FFFFFF', 0); win.position.set(0, 2.65, -3.2); c.add(win);
  const st = makeChar({ outfit: 'laranja', glow: .12 }); st.tint('#F6E2C4'); c.add(st.root); const zs = zzz(c);
  s.update = (t, u) => { const cam = s.camera; st.face(cam); deitar(st, -Math.PI / 2); st.root.position.set(-.85, .98, -1.05); st.eye('shut'); st.pose({ armL: [12, 8], armR: [12, 8] });
    doZ(zs, u, cam, -.2 + .6, 1.4, -1.0); const k = .5 + .5 * Math.cos(u * 3.2); win.material.emissive.set(new THREE.Color('#1A1840').lerp(new THREE.Color('#FFD8A0'), k)); win.material.emissiveIntensity = 1.0;
    const K = smooth(0, 4.1, u); aim(cam, [lerp(.2, 0, K), lerp(2.1, 2.3, K), lerp(3.0, 3.8, K)], [.1, 1.4, -1.0], 0); return ret(lerp(3.6, 4.4, K), 1.6, 11, { tint: '#F6E2C8' }); };
  return s;
}

/** 7. Hoje à noite: "cinco minutos más de celular"… melhor não — 34.6 a fim */
function cenaCelular(t0, t1) {
  const s = makeShot(t0, t1, '#2A1E2E', 40), c = s.scene; const q = cuarto(c, { night: true, bed: [0, -1.0], col: '#4A86C7' });
  const h = heroi(c, -.85, -1.05, .98, '#C8C8F0');
  const ph = phone((x) => { const g = x.createLinearGradient(0, 0, 0, 1110); g.addColorStop(0, '#E8667F'); g.addColorStop(1, '#7F6BC4'); x.fillStyle = g; x.fillRect(0, 0, 540, 1110); x.fillStyle = '#fff'; x.font = '800 60px Inter'; x.textAlign = 'center'; x.fillText('▶  5 min más', 270, 560); }, .16, .32); ph.paint(); c.add(ph);
  const glow = glowSprite('#9FB8FF', 1.2, .5); c.add(glow); const zs = zzz(c);
  s.update = (t, u) => { const cam = s.camera; h.face(cam); deitar(h, -Math.PI / 2); h.root.position.set(-.85, .98, -1.05); const away = smooth(4.8, 5.4, u), sleep = u > 5.6;
    h.eye(sleep ? 'shut' : u < 2.3 ? 'look' : u < 4.8 ? 'flat' : 'smug'); h.pose({ armL: [12, 8], armR: [lerp(100, 12, away), 20] });
    ph.position.set(lerp(.55, 1.5, away), lerp(1.75, .95, away), lerp(-.9, -1.9, away)); ph.rotation.set(lerp(.6, -Math.PI / 2, away), 0, 0); glow.position.set(.6, 1.5, -.9); glow.material.opacity = .45 * (1 - away);
    q.lamp.intensity = sleep ? 0 : 3; q.shade.material.emissiveIntensity = sleep ? .05 : 1.4; doZ(zs, u, cam, .3, 1.4, -1.0, sleep);
    const K = smooth(0, 7.4, u); aim(cam, [lerp(.8, .3, K), lerp(1.9, 2.3, K), lerp(2.4, 3.4, K)], [lerp(.6, .3, K), lerp(1.4, 1.2, K), -1.0], 0); return ret(lerp(2.8, 3.8, K), 1.4, 12, { exposure: sleep ? .85 : .95 }); };
  return s;
}

export const CENAS = [
  [cenaCama, 0, 6.6], [cenaExtra, 6.6, 10.9], [cenaMareo, 10.9, 16.6], [cenaAlucina, 16.6, 22.5],
  [cena1964, 22.5, 30.5], [cenaCatorce, 30.5, 34.6], [cenaCelular, 34.6, 999],
];
