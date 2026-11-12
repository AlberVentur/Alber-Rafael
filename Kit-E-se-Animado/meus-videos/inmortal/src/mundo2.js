// Cenários 2: imprensa, laboratório, disfarces, parque (amigos envelhecem), Lucía, despedidas, bolo, aula.
import * as THREE from 'three';
import { makeShot, aim, keys, smooth, lerp, clamp, rng } from './motor/core.js';
import { makeChar, canvasTex } from './motor/char.js';
import { box, std, cut, glowSprite, pointer, sky, skyline, dissolve, tree, lamp } from './motor/kit.js';
import { cobbleTex, crowd, uT } from './motor/kit2.js';
import { woodFloor, tileFloor, beam, plant, poster, signTex, lightPanel, sunLight } from './comum.js';
import { sala, rua, person, CAST } from './pecas.js';
import { heroi } from './mundo1.js';
const ret = (focus, range, blur, extra = {}) => ({ focus, range, blur, bloom: .28, bloomT: .95, vig: .45, exposure: 1.02, ...extra });

/** Imprensa e interessados: câmeras, cientistas, milionários, governo (fase 0..2) */
export function cenaFama(t0, t1) {
  const s = makeShot(t0, t1, '#1E2236', 34), c = s.scene; rua(c, { night: true, seed: 3 });
  const h = heroi(c, 0, -4, 0, '#F2F0FF'); const R = rng(5);
  const press = []; for (let i = 0; i < 14; i++) { const a = -Math.PI * .9 + i / 13 * Math.PI * .8; const k = person(c, CAST[i % CAST.length], Math.cos(a) * 2.6, -4 + Math.sin(a) * -2.0 + 2, 0, '#E8E4FF', .04); k.ph = R() * 6; press.push(k); }
  const flashes = []; for (let i = 0; i < 10; i++) { const f = glowSprite('#FFFFFF', 1.2, 0); c.add(f); flashes.push(f); }
  const banner = signTex('¿EL HUMANO INMORTAL?', '#C9361F', '#FFFFFF', 1400, 200, 'Inter', 110, 900); const bm = new THREE.Mesh(new THREE.PlaneGeometry(7, 1.0), new THREE.MeshStandardMaterial({ map: banner, emissiveMap: banner, emissive: '#fff', emissiveIntensity: .5 })); bm.position.set(0, 5.4, -8); c.add(bm);
  s.update = (t, u) => { uT.value = t; const cam = s.camera; h.face(cam); h.eye(u < 3 ? 'wide' : 'sad'); h.pose({ armL: [40, 120], armR: [40, 120] }); press.forEach((k, i) => { k.face(cam); k.eye(i % 3 ? 'wide' : 'happy'); k.pose({ armR: [100, 60], armL: [100, 60], bob: Math.abs(Math.sin(u * 4 + k.ph)) * .03 }); });
    flashes.forEach((f, i) => { const p = press[i]; f.position.set(p.root.position.x, 1.9, p.root.position.z + .2); f.material.opacity = Math.sin(u * 13 + i * 2.3) > .85 ? .9 : 0; });
    const K = smooth(0, t1 - t0, u); aim(cam, [lerp(0, .4, K), lerp(2.8, 3.6, K), lerp(5.4, 7.4, K)], [0, lerp(1.6, 2.2, K), -4], 0); return ret(lerp(9.6, 11.6, K), 4, 9, { bloom: .4 }); };
  return s;
}

/** Laboratório: anos de exames, cientistas envelhecem, você sai caminhando */
export function cenaLab(t0, t1) {
  const s = makeShot(t0, t1, '#0E1424', 32), c = s.scene; c.fog = new THREE.FogExp2('#162238', .045);
  c.add(tileFloor(16, 20, '#2A3348', '#232B3E', 6)); c.add(box(16, 6, .3, std('#2E3A52'), 0, 3, -3.2));
  for (let i = 0; i < 4; i++) { const l = lightPanel(.6, 3, '#9FC8FF', 1.4); l.rotation.x = Math.PI / 2; l.position.set(-3 + i * 2, 3.6, -1); c.add(l); }
  c.add(box(1.0, .5, 2.0, std('#E9E6DE'), -.4, .7, -1.2)); for (let i = 0; i < 5; i++) { const b = box(.18, .3, .06, std('#C9361F'), 1.2 + i * .3, 1.8, -2.9); c.add(b); }
  const mon = lightPanel(1.0, .6, '#7FD08A', .9); mon.position.set(1.8, 2.6, -3.0); c.add(mon);
  const cal = document.createElement('canvas'); cal.width = 300; cal.height = 160; const cx = cal.getContext('2d'); const ct = new THREE.CanvasTexture(cal); ct.colorSpace = THREE.SRGBColorSpace; let lastY = -1; const cm = new THREE.Mesh(new THREE.PlaneGeometry(1.2, .64), new THREE.MeshBasicMaterial({ map: ct })); cm.position.set(-2.4, 2.6, -3.03); c.add(cm);
  const h = heroi(c, -1.7, -1.0, 0, '#D8E4FF'); const door = lightPanel(1.2, 2.4, '#FFE8C0', 1.2); door.position.set(3.6, 1.2, -3.03); c.add(door);
  const sci = [0, 1, 2].map(i => { const a = makeChar({ outfit: 'jaleco', hair: ['bun', null, 'long'][i], hairc: '#22161a', lash: i !== 1, glow: .1 }); a.place(-2 + i * 1.6 + (i === 1 ? 1.2 : 0), .2); a.tint('#D8E4FF'); c.add(a.root); const o = makeChar({ outfit: 'jaleco', hair: 'old', hairc: '#E8E8E8', glow: .1 }); o.place(a.root.position.x, .2); o.tint('#D8E4FF'); c.add(o.root); return { a, o }; });
  c.add(new THREE.HemisphereLight('#6E86C8', '#101420', .8)); c.add(sunLight('#BFD4FF', 1.4, [3, 6, 5], 8, 30));
  s.update = (t, u) => { const cam = s.camera; const L = t1 - t0; const yrs = Math.min(10, Math.floor(clamp((u - 5.6) / 6) * 10)); if (yrs !== lastY) { lastY = yrs; cx.fillStyle = '#F4F0E4'; cx.fillRect(0, 0, 300, 160); cx.fillStyle = '#C9361F'; cx.font = '900 70px Inter'; cx.textAlign = 'center'; cx.fillText('AÑO ' + (yrs + 1), 150, 105); ct.needsUpdate = true; }
    const old = u > 11.5, gone = u > 14.6, walk = smooth(18.6, L, u);
    sci.forEach(({ a, o }, i) => { a.root.visible = !old; o.root.visible = old && !gone; [a, o].forEach(k => { k.face(cam); k.eye(old ? 'flat' : 'look'); k.pose({ armL: [30, -50], armR: [30, -50] }); }); });
    h.face(cam); if (walk > 0) { h.root.position.set(lerp(-1.7, 3.6, walk), 0, lerp(-1.0, -2.6, walk)); h.walk(u, .8, .6); h.eye('happy'); } else { h.eye(u < 5.6 ? 'look' : 'flat'); h.pose({ armL: [12, 8], armR: [40, 20] }); }
    const K = smooth(0, L, u); aim(cam, [lerp(-1.6, 1.4, K), 1.8, lerp(4.4, 4.0, K)], [lerp(-.6, 1.6, K), 1.4, -1.6], 0); return ret(5.0, 3, 11, { bloom: .4, bloomT: .85 }); };
  return s;
}

/** Disfarces: barba, chapéu, óculos — a mesma cara (troca a cada fala) */
export function cenaDisfarce(t0, t1, marks) {
  const s = makeShot(t0, t1, '#F1C39A', 30), c = s.scene; rua(c, { seed: 7 });
  const looks = [{ outfit: 'hero' }, { outfit: 'terno', glasses: true }, { outfit: 'laranja' }, { outfit: 'terno2', glasses: true }, { outfit: 'verde' }, { outfit: 'hero' }].map(o => { const k = makeChar({ ...o, glow: .14 }); k.place(5.8, -1.4, .14); k.tint('#FFF0DC'); c.add(k.root); return k; });
  const beard = cut(canvasTex(200, 160, (x) => { x.clearRect(0, 0, 200, 160); x.fillStyle = '#4A2E1E'; x.beginPath(); x.moveTo(10, 10); x.quadraticCurveTo(100, 220, 190, 10); x.quadraticCurveTo(100, 90, 10, 10); x.fill(); }), .5, .4); c.add(beard);
  const signs = ['MADRID', 'LIMA', 'TOKIO', 'ROMA', 'BOGOTÁ', 'OSLO'].map(n => { const m = new THREE.Mesh(new THREE.PlaneGeometry(1.4, .4), new THREE.MeshStandardMaterial({ map: signTex(n, '#2F6E5A', '#FFFFFF', 512, 150, 'Inter', 90, 800) })); m.position.set(4.6, 2.8, -2.6); c.add(m); return m; }); c.add(box(.08, 2.9, .08, '#3A3A40', 4.6, 1.45, -2.6));
  s.update = (t, u) => { uT.value = t; const cam = s.camera; let i = 0; for (let k = 0; k < marks.length; k++) if (u >= marks[k]) i = k; looks.forEach((k, j) => { k.root.visible = j === i; k.face(cam); k.eye(j === 5 ? 'look' : 'smug'); k.pose({ armL: [12, 8], armR: [12, 8] }); }); signs.forEach((m, j) => m.visible = j === i);
    beard.visible = i === 3; beard.position.set(5.8, 1.42, -1.2); pointer(beard, cam);
    aim(cam, [5.0, 1.7, 1.2 + u * .05], [5.8, 1.55, -1.4], 0); return ret(2.7, 1.2, 13); };
  return s;
}

/** Parque: os amigos envelhecem, você não (age: 0 jovem → 1 velhos) */
export function cenaParque(t0, t1, a0 = 0, a1 = 1) {
  const s = makeShot(t0, t1, '#F1C39A', 32), c = s.scene; c.fog = new THREE.FogExp2('#F2D8B8', .02);
  sky(c, -100, 500, 200, [[0, '#6FA7D8'], [.6, '#CFD8DC'], [1, '#FFE7BE']]); skyline(c, -80, 400, 40, ['#B89AA0', '#A98E9A', '#9A8592'], false, 5);
  const g = new THREE.Mesh(new THREE.PlaneGeometry(80, 80), std('#7A9A50', { roughness: 1 })); g.rotation.x = -Math.PI / 2; g.receiveShadow = true; c.add(g);
  for (let i = 0; i < 9; i++) tree(c, -8 + i * 2.2, -6 - (i % 3) * 2, 1.3, ['#3E5F3A', '#4F7A44', '#6E9A50', '#D7D282'], i);
  c.add(box(3.6, .1, .6, std('#8E6242'), 0, .55, -1.2)); c.add(box(3.6, .6, .08, std('#8E6242'), 0, .85, -1.5)); for (const x of [-1.6, 1.6]) c.add(box(.1, .55, .5, std('#2A2A34'), x, .27, -1.2));
  const pal = [['rosa', 'long', '#6B3A22'], ['terno2', null, null], ['amarelo', 'afro', '#2a1b18']];
  const fr = pal.map((p, i) => { const y = makeChar({ outfit: p[0], hair: p[1], hairc: p[2], lash: !!p[1], glow: .06 }); const o = makeChar({ outfit: p[0], hair: 'old', hairc: '#E8E8E8', lash: !!p[1], glasses: true, glow: .06 }); const x = [-1.3, 1.3, 2.6][i]; y.place(x, -1.0); o.place(x, -1.0); y.tint('#FFF0DC'); o.tint('#FFF0DC'); c.add(y.root, o.root); return { y, o }; });
  const h = heroi(c, 0, -1.0, 0, '#FFF0DC'); c.add(new THREE.HemisphereLight('#E9EEFF', '#B08A6A', 1.1)); c.add(sunLight('#FFD29A', 3.0, [-10, 12, 8], 12, 50));
  const cane = box(.04, .9, .04, std('#5A3A22'), 0, 0, 0); c.add(cane);
  s.update = (t, u) => { const cam = s.camera; const L = t1 - t0; const age = lerp(a0, a1, smooth(.5, L - .5, u)); fr.forEach(({ y, o }, i) => { const old = age > .5 + i * .1; y.root.visible = !old; o.root.visible = old; [y, o].forEach(k => { k.face(cam); k.eye(old ? (i === 1 && u > L * .6 ? 'smug' : 'flat') : 'happy'); k.pose({ armL: [12, 8], armR: [old ? 30 : 12, old ? 10 : 8], lean: old ? 8 : 0 }); }); });
    cane.visible = age > .7; cane.position.set(1.65, .45, -.8); h.face(cam); h.eye(age > .7 ? 'sad' : 'happy'); h.pose({ armL: [12, 8], armR: [12, 8] });
    const K = smooth(0, L, u); aim(cam, [lerp(-.4, .6, K), 1.6, lerp(5.6, 4.6, K)], [lerp(0, .8, K), 1.3, -1.0], 0); return ret(lerp(6.6, 5.6, K), 2.8, 11); };
  return s;
}

/** Lucía: casamento na praça (fase 'boda'), fotos na parede ('fotos'), quarto à noite ('mano') */
export function cenaLucia(t0, t1, fase = 'boda') {
  const night = fase === 'mano'; const s = makeShot(t0, t1, night ? '#1E1626' : '#F1C39A', 30), c = s.scene;
  const lu = makeChar({ outfit: 'rosa', hair: fase === 'mano' ? 'old' : 'long', hairc: fase === 'mano' ? '#E8E8E8' : '#3a2418', lash: true, glow: .14 });
  const h = heroi(c, .55, -1.2);
  if (fase === 'boda') { rua(c, { seed: 2 }); const conf = []; const R = rng(4); for (let i = 0; i < 160; i++) { const m = box(.05, .05, .01, ['#F2C14E', '#E8667F', '#36AEA2', '#FFFFFF'][i % 4], 0, 0, 0, false); c.add(m); conf.push({ m, x: (R() - .5) * 5, z: -2.5 + R() * 2.6, v: .5 + R() * .8, p: R() * 6 }); } s.conf = conf; lu.place(-.55, -1.2); const veil = cut(canvasTex(128, 200, (x) => { x.clearRect(0, 0, 128, 200); x.fillStyle = 'rgba(255,255,255,.75)'; x.beginPath(); x.moveTo(30, 0); x.lineTo(98, 0); x.lineTo(128, 200); x.lineTo(0, 200); x.fill(); }), .6, .9, { blend: true }); c.add(veil); s.veil = veil; s.guests = []; for (let i = 0; i < 6; i++) s.guests.push(person(c, CAST[i], -2.8 + i * 1.1 + (i > 2 ? 1.2 : 0), -3.2, 0, '#FFF0DC', .04)); }
  if (fase === 'fotos') { sala(c, { win: false, wall: '#7A3A44' }); h.root.visible = false; const frames = []; for (let i = 0; i < 6; i++) { const age = i / 5; const ph = poster(.7, .9, (x) => { x.fillStyle = '#F2E6CC'; x.fillRect(0, 0, 280, 360); x.fillStyle = '#E8C8A0'; x.fillRect(16, 16, 248, 300); x.fillStyle = '#1A1A24'; x.beginPath(); x.arc(90, 140, 40, 0, 7); x.arc(190, 140, 40, 0, 7); x.fill(); x.fillStyle = age > .4 ? '#E8E8E8' : '#3a2418'; x.beginPath(); x.arc(90, 110, 46, Math.PI, 0); x.fill(); x.fillStyle = '#F08AA0'; x.fillRect(55, 185, 70, 110); x.fillStyle = '#43C4B4'; x.fillRect(155, 185, 70, 110); x.fillStyle = '#2A2A34'; x.font = '700 26px Caveat'; x.textAlign = 'center'; x.fillText(String(2030 + i * 12), 140, 345); }, '#3A2418'); ph.position.set(-2.4 + (i % 3) * 1.0, 1.6 + Math.floor(i / 3) * 1.1, -2.82); c.add(ph); frames.push(ph); } lu.root.visible = false; }
  if (fase === 'mano') { sala(c, { night: true, wall: '#3A3050' }); lu.place(-.5, -1.2, 0, .95); h.root.position.set(.55, 0, -1.2); }
  if (fase !== 'fotos') { lu.tint(night ? '#E8E0FF' : '#FFF0DC'); c.add(lu.root); }
  s.update = (t, u) => { uT.value = t; const cam = s.camera; const L = t1 - t0; lu.face(cam); h.face(cam);
    if (fase === 'boda') { lu.eye('happy'); h.eye('happy'); lu.pose({ armR: [40, 20], armL: [12, 8] }); h.pose({ armL: [40, 20], armR: [12, 8] }); s.guests.forEach((k, i) => { k.face(cam); k.eye('happy'); k.cheer(u, i, 1); }); s.veil.position.set(-.55, 1.85, -1.25); pointer(s.veil, cam); s.conf.forEach(({ m, x, z, v, p }) => { m.position.set(x + Math.sin(u * 2 + p) * .2, 3.4 - ((u * v + p) % 3.4), z); m.rotation.set(u * 3 + p, u * 2, 0); }); }
    if (fase === 'mano') { lu.eye(u < L * .6 ? 'sad' : 'happy'); h.eye(u < L * .6 ? 'sad' : 'shut'); lu.pose({ armR: [60, 20], armL: [12, 8] }); h.pose({ armL: [60, 20], armR: [12, 8] }); }
    const K = smooth(0, L, u);
    if (fase === 'fotos') aim(cam, [lerp(-2.4, -.4, K), lerp(1.6, 2.7, K), 1.4], [lerp(-2.4, -.4, K), lerp(1.6, 2.7, K), -2.8], 0);
    else aim(cam, [lerp(-.3, .2, K), lerp(1.7, 1.5, K), lerp(4.2, 3.0, K)], [0, 1.4, -1.6], 0);
    return ret(fase === 'fotos' ? 4.2 : lerp(5.8, 4.6, K), 2, 12, night ? { exposure: .98, bloom: .35 } : {}); };
  return s;
}

/** Rua: as pessoas acham que você é o filho dela */
export function cenaHijo(t0, t1) {
  const s = makeShot(t0, t1, '#F1C39A', 32), c = s.scene; rua(c, { seed: 8 });
  const lu = makeChar({ outfit: 'rosa', hair: 'old', hairc: '#E8E8E8', lash: true, glasses: true, glow: .12 }); lu.place(5.4, -1.6, .14); lu.tint('#FFF0DC'); c.add(lu.root);
  const h = heroi(c, 6.4, -1.6, .14, '#FFF0DC'); const vec = [person(c, CAST[3], 7.4, -4.4, .14), person(c, CAST[7], 4.6, -5.2, .14)];
  s.update = (t, u) => { uT.value = t; const cam = s.camera; lu.face(cam); h.face(cam); lu.eye(u < 2.6 ? 'happy' : u < 4 ? 'down' : 'sad'); h.eye(u < 2.6 ? 'happy' : 'sad'); lu.pose({ armR: [30, 10], armL: [12, 8] }); h.pose({ armL: [30, 10], armR: [12, 8] }); vec.forEach(k => { k.face(cam); k.eye('smug'); k.pose({ armR: [60, 40], armL: [12, 8] }); });
    const K = smooth(0, t1 - t0, u); aim(cam, [lerp(4.8, 5.6, K), 1.6, lerp(3.4, 2.8, K)], [5.9, 1.4, -2], 0); return ret(lerp(5.0, 4.4, K), 2.4, 11); };
  return s;
}

/** Despedidas: rostos que vão se apagando, um a um */
export function cenaDespedidas(t0, t1) {
  const s = makeShot(t0, t1, '#1E1626', 34), c = s.scene; c.fog = new THREE.FogExp2('#2A1E2E', .03); sky(c, -80, 300, 160, [[0, '#0E1030'], [.6, '#3A2A52'], [1, '#8A4A6A']]);
  const g = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), std('#3A3A48', { roughness: 1 })); g.rotation.x = -Math.PI / 2; c.add(g);
  const R = rng(3), ppl = []; for (let i = 0; i < 26; i++) { const k = person(c, CAST[i % CAST.length], (R() - .5) * 9, -2 - R() * 7, 0, '#E8E0FF', .08); k.d = R(); ppl.push(k); }
  const dis = dissolve(c, { n: 300, pos: [0, 1.2, -5], spread: 4.5, rise: 3, t0: .5, dur: 9, color: '#9FE0FF' }); const h = heroi(c, 0, 1.4, 0, '#E8E0FF');
  for (let i = 0; i < 8; i++) lamp(c, -6 + i * 1.7, -9, 1, true);
  c.add(new THREE.HemisphereLight('#8E86C8', '#2a1f28', .8)); c.add(sunLight('#B9B0F0', .9, [-8, 14, 8], 14, 50));
  s.update = (t, u) => { const cam = s.camera; const L = t1 - t0; ppl.forEach(k => { k.face(cam); k.eye('happy'); k.pose({ armR: [130, 20], armL: [12, 8] }); k.root.visible = u < .6 + k.d * (L - 1.6); }); if (dis) dis(u); h.face(cam); h.eye('sad'); h.pose({ armL: [12, 8], armR: [u > 2 ? 130 : 12, 20] });
    const K = smooth(0, L, u); aim(cam, [lerp(.4, -.4, K), lerp(1.9, 2.4, K), lerp(4.4, 5.6, K)], [0, 1.4, -3], 0); return ret(lerp(4.4, 5.2, K), 6, 8, { bloom: .4 }); };
  return s;
}

/** Bolo de aniversário: 34 anos (outra vez) */
export function cenaBolo(t0, t1) {
  const s = makeShot(t0, t1, '#1E1626', 30), c = s.scene; sala(c, { night: true, win: false, wall: '#5A3A2A' });
  c.add(box(2.4, .08, 1.2, std('#8E6242'), 0, .95, -1.0)); const cake = new THREE.Mesh(new THREE.CylinderGeometry(.35, .35, .3, 32), std('#F4E0E8')); cake.position.set(0, 1.14, -1.0); c.add(cake); const top = new THREE.Mesh(new THREE.CylinderGeometry(.36, .36, .04, 32), std('#E8667F')); top.position.set(0, 1.3, -1.0); c.add(top);
  const num = cut(canvasTex(256, 160, (x) => { x.clearRect(0, 0, 256, 160); x.fillStyle = '#F2C14E'; x.strokeStyle = '#8A5E16'; x.lineWidth = 8; x.font = '900 150px Fraunces'; x.textAlign = 'center'; x.strokeText('34', 128, 140); x.fillText('34', 128, 140); }), .4, .25); num.position.set(0, 1.47, -1.0); c.add(num); for (const x of [-.1, .1]) { const f = glowSprite('#FFC67A', .3, .9); f.position.set(x, 1.66, -1.0); c.add(f); } const fl = new THREE.PointLight('#FFB070', 4, 4, 1.6); fl.position.set(0, 1.8, -.6); c.add(fl);
  const h = heroi(c, 0, -1.8, 0, '#FFE0C0');
  s.update = (t, u) => { const cam = s.camera; h.face(cam); h.eye(u < 2.4 ? 'smug' : 'flat'); h.pose({ armL: [12, 8], armR: [12, 8] }); pointer(num, cam); const K = smooth(0, t1 - t0, u); aim(cam, [lerp(.8, .5, K), lerp(1.5, 2.1, K), lerp(1.0, 2.2, K)], [lerp(0, -.1, K), lerp(1.3, 1.65, K), lerp(-1.0, -1.8, K)], 0); return ret(lerp(2.2, 4.0, K), 2.2, 13, { bloom: .4 }); };
  return s;
}

/** Aula de história: o melhor professor (porque estava lá) */
export function cenaAula(t0, t1) {
  const s = makeShot(t0, t1, '#2A3028', 32), c = s.scene; c.fog = new THREE.FogExp2('#3A4038', .03);
  c.add(woodFloor(16, 14, '#7A5236')); c.add(box(16, 7, .3, std('#D8D0B8'), 0, 3.5, -3.2));
  const bb = canvasTex(1200, 560, (x) => { x.fillStyle = '#1F3A2C'; x.fillRect(0, 0, 1200, 560); x.strokeStyle = '#C9A06A'; x.lineWidth = 22; x.strokeRect(0, 0, 1200, 560); x.fillStyle = '#F2F2EA'; x.font = '700 90px Caveat'; x.textAlign = 'left'; x.fillText('Historia del mundo', 80, 150); x.font = '700 64px Caveat'; ['1492 · yo estaba', '1789 · yo estaba', '1969 · yo estaba'].forEach((l, i) => x.fillText(l, 100, 270 + i * 90)); });
  const board = new THREE.Mesh(new THREE.PlaneGeometry(4.6, 2.15), new THREE.MeshStandardMaterial({ map: bb, roughness: .9 })); board.position.set(0, 2.5, -3.03); c.add(board);
  for (let r = 0; r < 2; r++) for (let k = 0; k < 4; k++) { const x = -2.7 + k * 1.8, z = .8 + r * 1.3; c.add(box(1.0, .05, .6, std('#C9A06A'), x, .78, z)); const st = person(c, CAST[(r * 4 + k) % CAST.length], x, z - .3, 0, '#FFF0DC', .04); st.root.scale.setScalar(.8); }
  const h = heroi(c, -1.6, -2.2, 0, '#FFF0DC'); c.add(new THREE.HemisphereLight('#E9EEFF', '#6A5A4A', .9)); c.add(sunLight('#FFE8C8', 2.0, [6, 7, 5], 9, 30));
  s.update = (t, u) => { const cam = s.camera; h.face(cam); h.eye(u < 3 ? 'happy' : 'smug'); h.pose({ armR: [110 + Math.sin(u * 3) * 15, 20], armL: [12, 8] }); c.children.forEach(o => o.userData); const K = smooth(0, t1 - t0, u); aim(cam, [lerp(-.6, .4, K), lerp(2.6, 2.2, K), lerp(5.4, 4.6, K)], [lerp(-1.0, -.6, K), 1.8, -2.6], 0); return ret(lerp(7.4, 6.8, K), 3, 10); };
  return s;
}
