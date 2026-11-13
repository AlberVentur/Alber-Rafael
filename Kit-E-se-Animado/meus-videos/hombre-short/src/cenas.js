// Short "¿Y si fueras el único hombre en la Tierra?" — vertical 1080x1920, ~43 s
import * as THREE from 'three';
import { makeShot, aim, keys, smooth, lerp, clamp, rng } from './motor/core.js';
import { makeChar, canvasTex } from './motor/char.js';
import { box, std, cut, glowSprite, pointer, sky, skyline } from './motor/kit.js';
import { crowd, uT } from './motor/kit2.js';
import { woodFloor, tileFloor, beam, plant, poster, signTex, lightPanel, sunLight } from './comum.js';
import { sala, rua } from './pecas.js';
const ret = (focus, range, blur, extra = {}) => ({ focus, range, blur, bloom: .3, bloomT: .92, vig: .45, exposure: 1.02, ...extra });
const MUJ = [['rosa', 'long', '#6B3A22'], ['amarelo', 'afro', '#2a1b18'], ['azul', 'bob', '#D9B65A'], ['verde', 'long', '#3a2418'], ['roxo', 'bun', '#3a2030'], ['rosa', 'bob', '#22161a'], ['amarelo', 'bun', '#8a4a26']];
const mujer = (c, i, x, z, y = 0, tint = '#FFF0DC', extra = {}) => { const [o, h, hc] = MUJ[i % MUJ.length]; const k = makeChar({ outfit: o, hair: h, hairc: hc, lash: true, glow: .08, ...extra }); k.place(x, z, y); k.tint(tint); c.add(k.root); return k; };
const heroi = (c, x, z, y = 0, tint = '#FFE6CC') => { const h = makeChar({ outfit: 'hero', glow: .16 }); h.place(x, z, y); h.tint(tint); c.add(h.root); return h; };
const jarTex = () => canvasTex(160, 220, (x) => { x.clearRect(0, 0, 160, 220); x.fillStyle = '#C9361F'; x.fillRect(30, 10, 100, 34); x.fillStyle = 'rgba(220,240,255,.85)'; x.beginPath(); x.roundRect(20, 40, 120, 170, 18); x.fill(); x.fillStyle = '#E9853A'; x.fillRect(26, 90, 108, 114); x.fillStyle = '#FBF7EC'; x.fillRect(36, 110, 88, 50); x.fillStyle = '#C9361F'; x.font = '900 26px Fraunces'; x.textAlign = 'center'; x.fillText('MERMELADA', 80, 144); });

/** 1. Cozinha: duas xícaras ainda quentes, só você — 0 a 7.5 */
function cenaCocina(t0, t1) {
  const s = makeShot(t0, t1, '#E9B48C', 40), c = s.scene; sala(c, { wall: '#2F6E68' });
  c.add(box(2.2, .08, 1.2, std('#D9B48A'), 0, .95, -1.0)); for (const [x, z] of [[-1, -1.5], [1, -1.5], [-1, -.5], [1, -.5]]) c.add(box(.08, .92, .08, '#5C3C28', x, .46, z));
  const steam = []; for (const x of [-.5, .5]) { const cup = new THREE.Mesh(new THREE.CylinderGeometry(.08, .065, .14, 20), std('#F4F0E4')); cup.position.set(x, 1.06, -.9); c.add(cup); for (let i = 0; i < 6; i++) { const st = glowSprite('#FFFFFF', .14, .5); c.add(st); steam.push({ st, x, i }); } }
  for (const x of [-.6, .6]) { c.add(box(.5, .06, .5, std('#8E6242'), x, .55, -1.9)); c.add(box(.5, .8, .06, std('#8E6242'), x, .95, -2.15)); }
  const tv = lightPanel(1.2, .7, '#7FA6D8', .9); tv.position.set(2.6, 2.0, -2.83); c.add(tv); const news = signTex('ÚLTIMA HORA', '#C9361F', '#FFFFFF', 512, 120, 'Inter', 70, 900); const nm = new THREE.Mesh(new THREE.PlaneGeometry(1.1, .26), new THREE.MeshBasicMaterial({ map: news })); nm.position.set(2.6, 1.82, -2.82); c.add(nm);
  const h = heroi(c, .1, -.3);
  s.update = (t, u) => { const cam = s.camera; steam.forEach(({ st, x, i }) => { const k = ((u * .5 + i / 6) % 1); st.position.set(x + Math.sin(u * 2 + i) * .03, 1.18 + k * .5, -.9); st.material.opacity = .4 * (1 - k); });
    h.face(cam); h.eye(u < 1.3 ? 'look' : u < 2.8 ? 'lookl' : u < 6.2 ? 'wide' : 'sad'); h.pose({ armL: [12, 8], armR: [u > 4 ? 40 : 12, u > 4 ? 30 : 8] });
    const K = smooth(0, 7.4, u); aim(cam, [lerp(-.5, .4, K), lerp(1.3, 1.8, K), lerp(.3, 4.2, K)], [lerp(-.3, .1, K), lerp(1.1, 1.4, K), lerp(-.9, -.6, K)], 0);
    return ret(lerp(1.3, 4.6, K), lerp(.5, 2.2, K), 14); };
  return s;
}

/** 2. Corredor: fila enorme no banheiro de mulheres, o de homens vazio — 7.5 a 13.5 */
function cenaBano(t0, t1) {
  const s = makeShot(t0, t1, '#D8E4EE', 40), c = s.scene; c.fog = new THREE.FogExp2('#D8E4EE', .03);
  c.add(tileFloor(10, 30, '#D6DCE2', '#C8CED6', 6)); const wall = box(.3, 5, 30, std('#E8EEF2'), 2.4, 2.5, -8); c.add(wall); c.add(box(.3, 5, 30, std('#E8EEF2'), -2.4, 2.5, -8)); c.add(box(5, .1, 30, std('#F4F6F8'), 0, 4.6, -8, false));
  for (let i = 0; i < 5; i++) { const l = lightPanel(.6, 1.4, '#FFFFFF', 1.4); l.rotation.x = Math.PI / 2; l.position.set(0, 4.5, -2 - i * 5); c.add(l); }
  const door = (x, label, col, z) => { c.add(box(.1, 2.2, 1.1, std(col), x, 1.1, z)); const t = signTex(label, '#2A2A34', '#FFFFFF', 512, 160, 'Inter', 90, 900); const m = new THREE.Mesh(new THREE.PlaneGeometry(1.0, .3), new THREE.MeshStandardMaterial({ map: t })); m.position.set(x - Math.sign(x) * .07, 2.5, z); m.rotation.y = -Math.sign(x) * Math.PI / 2; c.add(m); };
  door(2.25, 'MUJERES', '#E8667F', -10); door(-2.25, 'HOMBRES', '#4A86C7', -3);
  const fila = []; for (let i = 0; i < 14; i++) fila.push(mujer(c, i, 1.5 - (i % 2) * .3, -9.2 + i * .75, 0, '#FFFFFF'));
  const h = heroi(c, -.2, 1.5, 0, '#FFFFFF');
  s.update = (t, u) => { const cam = s.camera; fila.forEach((k, i) => { k.face(cam); k.eye(u > 2 ? (i % 3 ? 'flat' : 'angry') : 'look'); k.pose({ armL: [20, -60], armR: [20, -60] }); });
    const walk = smooth(.8, 4.2, u); h.root.position.set(lerp(-.2, -1.6, walk), 0, lerp(1.5, -2.8, walk)); h.face(cam); h.eye('happy'); h.walk(u, walk > 0 && walk < 1 ? .9 : 0, .7); h.pose({ armL: [u > 4.2 ? 150 : 12, 10], armR: [u > 4.2 ? 150 : 12, 10] });
    const K = smooth(0, 6, u); aim(cam, [lerp(.6, -.2, K), lerp(1.8, 1.9, K), lerp(5.4, 3.0, K)], [lerp(.2, -1.0, K), 1.4, lerp(-2, -4, K)], 0); return ret(lerp(4.6, 5.6, K), 4, 10); };
  return s;
}

/** 3. Aeroporto: aviões parados, painel de cancelados — 13.5 a 20.3 */
function cenaAeropuerto(t0, t1) {
  const s = makeShot(t0, t1, '#9CC8EE', 40), c = s.scene; c.fog = new THREE.FogExp2('#E8EEF4', .008);
  sky(c, -200, 700, 300, [[0, '#5E9AD8'], [.6, '#A9CBE8'], [1, '#F2EEE0']]);
  const g = new THREE.Mesh(new THREE.PlaneGeometry(300, 300), std('#6A6E76', { roughness: .9 })); g.rotation.x = -Math.PI / 2; g.receiveShadow = true; c.add(g); for (let i = 0; i < 20; i++) c.add(box(.2, .01, 3, '#F2C14E', 0, .01, -6 - i * 5, false));
  const plane = (x, z, r) => { const p = new THREE.Group(); const w = std('#F4F6F8', { roughness: .4 }); const body = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 16, 20), w); body.rotation.x = Math.PI / 2; body.position.y = 2.2; p.add(body); const nose = new THREE.Mesh(new THREE.SphereGeometry(1.2, 20, 14), w); nose.position.set(0, 2.2, 8); p.add(nose); p.add(box(18, .3, 3, w, 0, 1.9, .5)); p.add(box(.3, 3.4, 2.4, std('#36AEA2'), 0, 4.2, -7)); p.add(box(6, .2, 1.6, w, 0, 2.6, -7)); for (let i = 0; i < 12; i++) p.add(box(.05, .32, .32, '#2A3A5A', 1.21, 2.5, 6 - i * 1.1, false)); for (const sx of [-1, 1]) { const e = new THREE.Mesh(new THREE.CylinderGeometry(.6, .6, 2.4, 16), std('#C9CDD2')); e.rotation.x = Math.PI / 2; e.position.set(sx * 4.2, 1.2, 1.2); p.add(e); } p.position.set(x, 0, z); p.rotation.y = r; c.add(p); };
  plane(-6, -18, .5); plane(8, -30, -.6); plane(-14, -40, .3);
  const term = box(40, 8, 6, std('#C8D2DC'), 0, 4, 6); c.add(term); const glass = lightPanel(36, 5, '#BFD8EE', .4); glass.position.set(0, 4, 2.98); c.add(glass);
  const bc = document.createElement('canvas'); bc.width = 700; bc.height = 820; const bx = bc.getContext('2d'); const bt = new THREE.CanvasTexture(bc); bt.colorSpace = THREE.SRGBColorSpace; const board = new THREE.Mesh(new THREE.PlaneGeometry(2.0, 2.34), new THREE.MeshBasicMaterial({ map: bt })); board.position.set(-.6, 3.4, -2.6); c.add(board); c.add(box(2.2, 2.5, .1, '#1A1E28', -.6, 3.4, -2.66)); c.add(box(.12, 2.2, .12, '#2A2E3A', -.6, 1.1, -2.7)); let lastB = -1;
  const paint = (n) => { if (n === lastB) return; lastB = n; bx.fillStyle = '#10141E'; bx.fillRect(0, 0, 700, 820); bx.fillStyle = '#F2C14E'; bx.font = '700 46px IBM Plex Mono'; bx.fillText('SALIDAS', 30, 70); const cities = ['MADRID', 'LIMA', 'TOKIO', 'ROMA', 'MÉXICO', 'BOGOTÁ', 'PARÍS', 'BUENOS AIRES', 'NUEVA YORK']; cities.forEach((ct, i) => { bx.fillStyle = '#FFFFFF'; bx.font = '600 34px IBM Plex Mono'; bx.fillText(ct, 30, 140 + i * 74); bx.fillStyle = i < n ? '#FF5A4A' : '#7FD08A'; bx.fillText(i < n ? 'CANCELADO' : 'A TIEMPO', 420, 140 + i * 74); }); bt.needsUpdate = true; };
  const h = heroi(c, .7, -.8, 0, '#FFF4E4'); const tr = [mujer(c, 2, -1.3, -1.2), mujer(c, 4, 1.8, -1.6)];
  c.add(new THREE.HemisphereLight('#E9EEFF', '#6A6E76', 1.0)); c.add(sunLight('#FFF0D8', 2.8, [-20, 20, -10], 40, 120));
  s.update = (t, u) => { const cam = s.camera; paint(Math.min(9, Math.floor(u * 2.2))); h.face(cam); h.eye(u < 2 ? 'look' : 'wide'); h.pose({ armL: [12, 8], armR: [30, -40] }); tr.forEach(k => { k.face(cam); k.eye(u > 2 ? 'sad' : 'look'); k.pose({ armL: [20, -60], armR: [12, 8] }); });
    const K = smooth(0, 6.8, u); aim(cam, [lerp(-.5, 1.2, K), lerp(2.9, 4.6, K), lerp(1.2, 2.6, K)], [lerp(-.6, 0, K), lerp(3.1, 2.2, K), lerp(-2.6, -22, K)], 0); return ret(lerp(3.8, 18, K), lerp(2, 26, K), 10); };
  return s;
}

/** 4. Palco: você de terno, "o futuro da humanidade" — 20.3 a 23.7 */
function cenaHeroe(t0, t1) {
  const s = makeShot(t0, t1, '#1E1626', 40), c = s.scene; rua(c, { night: true, seed: 3 });
  c.add(box(5, .8, 3, std('#3A2A3A'), 0, .4, -2)); const bn = signTex('EL FUTURO', '#C9361F', '#FFF4DC', 1024, 220, 'Fraunces', 150); const bm = new THREE.Mesh(new THREE.PlaneGeometry(4.4, .95), new THREE.MeshStandardMaterial({ map: bn, emissiveMap: bn, emissive: '#fff', emissiveIntensity: .5 })); bm.position.set(0, 4.4, -3.4); c.add(bm);
  const sp = new THREE.SpotLight('#FFF0C8', 60, 14, .35, .5, 1.3); sp.position.set(0, 9, 1); sp.target.position.set(0, .8, -2); c.add(sp, sp.target); const b = beam(1.6, 9, '#FFF0C8', .16); b.position.set(0, 4.8, -1.4); c.add(b);
  const h = makeChar({ outfit: 'terno', glow: .2 }); h.place(0, -2, .8); h.tint('#FFF4E0'); c.add(h.root);
  const R = rng(4), sp2 = []; for (let i = 0; i < 400; i++) { const x = (R() - .5) * 14; if (Math.abs(x) < 1.8) continue; sp2.push([x, 1 + R() * 10]); } crowd(c, sp2, { raised: .8, jump: .2, tint: '#E8C8E0', seed: 4 });
  const flashes = []; for (let i = 0; i < 10; i++) { const f = glowSprite('#FFFFFF', .8, 0); c.add(f); flashes.push({ f, x: (R() - .5) * 8, z: 2 + R() * 6 }); }
  s.update = (t, u) => { uT.value = t; const cam = s.camera; h.face(cam); h.eye('smug'); h.pose({ armL: [150, 10], armR: [40, 120], bob: Math.sin(u * 3) * .01 }); flashes.forEach(({ f, x, z }, i) => { f.position.set(x, 2, z); f.material.opacity = Math.sin(u * 11 + i * 2.1) > .8 ? .9 : 0; });
    const K = smooth(0, 3.4, u); aim(cam, [lerp(0, .3, K), lerp(1.4, 1.8, K), lerp(6.5, 4.6, K)], [0, lerp(2.0, 2.0, K), -2], 0); return ret(lerp(8.5, 6.6, K), 2.6, 12, { bloom: .45 }); };
  return s;
}

/** 5. Laboratório: tanques de criopreservação, mapa com +100 países — 23.7 a 32.3 */
function cenaLab(t0, t1) {
  const s = makeShot(t0, t1, '#0E1424', 40), c = s.scene; c.fog = new THREE.FogExp2('#162238', .04);
  c.add(tileFloor(14, 20, '#2A3348', '#232B3E', 6)); c.add(box(14, 6, .3, std('#2E3A52'), 0, 3, -3.2));
  for (let i = 0; i < 4; i++) { const l = lightPanel(.6, 3, '#9FC8FF', 1.4); l.rotation.x = Math.PI / 2; l.position.set(-3 + i * 2, 4.2, -1); c.add(l); }
  const tanks = [], vap = []; for (let i = 0; i < 5; i++) { const x = -2.4 + i * 1.2; const tk = new THREE.Mesh(new THREE.CylinderGeometry(.42, .42, 1.3, 24), std('#C9CDD2', { metalness: .7, roughness: .3 })); tk.position.set(x, .65, -2.3); c.add(tk); const lid = new THREE.Mesh(new THREE.CylinderGeometry(.3, .3, .12, 20), std('#4A86C7')); lid.position.set(x, 1.36, -2.3); c.add(lid); tanks.push(lid); for (let k = 0; k < 4; k++) { const v = glowSprite('#DFF4FF', .5, .3); c.add(v); vap.push({ v, x, k }); } }
  const map = canvasTex(800, 440, (x) => { x.fillStyle = '#0E1A2E'; x.fillRect(0, 0, 800, 440); x.fillStyle = '#2F6E9A'; [[160, 150, 110, 70], [230, 300, 60, 90], [420, 140, 70, 50], [440, 260, 60, 90], [580, 170, 140, 80], [680, 320, 60, 40]].forEach(([a, b, w, h]) => { x.beginPath(); x.ellipse(a, b, w, h, .2, 0, 7); x.fill(); }); x.strokeStyle = '#F2C14E'; x.lineWidth = 3; const o = [430, 120]; const R = rng(5); for (let i = 0; i < 40; i++) { const tx = 60 + R() * 700, ty = 60 + R() * 330; x.beginPath(); x.moveTo(...o); x.quadraticCurveTo((o[0] + tx) / 2, Math.min(o[1], ty) - 80, tx, ty); x.stroke(); x.fillStyle = '#F2C14E'; x.beginPath(); x.arc(tx, ty, 5, 0, 7); x.fill(); } });
  const mm = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 2.0), new THREE.MeshBasicMaterial({ map: map })); mm.position.set(0, 3.2, -3.02); c.add(mm);
  const sci = makeChar({ outfit: 'jaleco', hair: 'bun', hairc: '#22161a', lash: true, glasses: true, glow: .12 }); sci.place(-.8, -1.0); sci.tint('#D8E4FF'); c.add(sci.root);
  const h = makeChar({ outfit: 'terno', glow: .14 }); h.place(.9, -.8); h.tint('#D8E4FF'); c.add(h.root);
  c.add(new THREE.HemisphereLight('#6E86C8', '#101420', .8)); c.add(sunLight('#BFD4FF', 1.4, [3, 6, 5], 8, 30));
  s.update = (t, u) => { const cam = s.camera; vap.forEach(({ v, x, k }) => { const q = ((u * .4 + k / 4) % 1); v.position.set(x + Math.sin(u + k) * .1, 1.45 + q * .6, -2.3); v.material.opacity = .3 * (1 - q); });
    sci.face(cam); sci.eye(u < 6 ? 'look' : 'smug'); sci.pose({ armR: [100 + Math.sin(u * 2) * 10, 20], armL: [14, -60] }); h.face(cam); h.eye(u < 2.5 ? 'smug' : u < 6.4 ? 'look' : 'flat'); h.pose({ armL: [u < 2.5 ? 150 : 12, 10], armR: [12, 8], head: u > 6.4 ? -8 : 0 });
    const K = smooth(0, 8.6, u); aim(cam, [lerp(-.4, .4, K), lerp(1.8, 2.4, K), lerp(4.4, 6.0, K)], [0, lerp(1.6, 2.4, K), -1.6], 0); return ret(lerp(5.0, 7.0, K), 3, 11, { bloom: .4, bloomT: .85 }); };
  return s;
}

/** 6 e 7. Todo mundo com um pote para você abrir; ela abre com a colher */
function cenaFrascos(t0, t1, fase = 'fila') {
  const s = makeShot(t0, t1, '#F1C39A', 40), c = s.scene; rua(c, { seed: fase === 'fila' ? 5 : 6 });
  const jt = jarTex(); const h = heroi(c, 5.9, -1.4, .14, '#FFF0DC');
  const ws = []; const jars = [];
  if (fase === 'fila') { for (let i = 0; i < 6; i++) { const k = mujer(c, i, 6.6 + (i % 2) * .5, -2.6 - i * 1.0, .14); ws.push(k); const j = cut(jt, .26, .36); c.add(j); jars.push(j); } }
  else { const k = mujer(c, 3, 6.9, -1.7, .14, '#FFF0DC', { glow: .14 }); ws.push(k); for (let i = 0; i < 4; i++) ws.push(mujer(c, i + 1, 7.6 + (i % 2) * .6, -3.6 - i * 1.0, .14)); }
  const jar = cut(jt, .3, .42); c.add(jar); const lid = cut(canvasTex(160, 50, (x) => { x.fillStyle = '#C9361F'; x.fillRect(0, 0, 160, 50); x.fillStyle = '#A8281A'; for (let i = 0; i < 16; i++) x.fillRect(i * 10, 0, 4, 50); }), .21, .07); c.add(lid); const spoon = box(.04, .32, .02, std('#C9CDD2', { metalness: .8 }), 0, 0, 0); c.add(spoon); const pop = glowSprite('#FFE08A', .7, 0); c.add(pop);
  s.update = (t, u) => { uT.value = t; const cam = s.camera; const L = Math.min(t1 - t0, 7); h.face(cam); const hp = h.root.position;
    ws.forEach((k, i) => { k.face(cam); if (fase === 'fila') { k.eye(i % 2 ? 'happy' : 'look'); k.pose({ armR: [80, 30], armL: [12, 8] }); jars[i].position.set(k.root.position.x - .35, 1.5, k.root.position.z + .2); pointer(jars[i], cam); } else if (i > 0) { k.eye(u > 3.6 ? 'happy' : 'look'); if (u > 3.6) k.cheer(u, i, 1); else k.pose({ armL: [12, 8], armR: [12, 8] }); } });
    if (fase === 'fila') { h.eye(u < 1.5 ? 'wide' : 'flat'); h.pose({ armL: [60, 40], armR: [60, 40], bob: u > 1.6 ? Math.sin(u * 40) * .006 : 0 }); jar.position.set(hp.x + .25, 1.25, hp.z + .3); lid.position.set(hp.x + .25, 1.47, hp.z + .3); pointer(jar, cam); pointer(lid, cam); spoon.visible = false; }
    else { const take = smooth(.8, 1.2, u), tap = u > 1.6 && u < 2.4, open = u > 2.4; const w = ws[0], wp = w.root.position; h.eye(u < 1.2 ? 'angry' : open ? 'flat' : 'look'); h.pose({ armL: [u < 1 ? 60 : 12, u < 1 ? 40 : 8], armR: [u < 1 ? 60 : 12, u < 1 ? 40 : 8] }); w.eye(open ? 'smug' : 'look'); w.pose({ armR: [70, 30], armL: [tap ? 60 + Math.sin(u * 30) * 20 : 40, 40] });
      const jx = lerp(hp.x + .25, wp.x - .3, take); jar.position.set(jx, 1.02, -1.1); lid.position.set(jx + (open ? .18 : 0), 1.24 + (open ? .25 : 0), -1.08); lid.rotation.z = open ? .6 : 0; pointer(jar, cam); spoon.visible = u > 1.2; spoon.position.set(jx + .2, 1.32 + (tap ? Math.abs(Math.sin(u * 30)) * .06 : .1), -1.0); pop.position.set(jx, 1.27, -1.0); pop.material.opacity = open ? Math.max(0, .9 - (u - 2.4) * 1.2) : 0; }
    const K = smooth(0, L, u); if (fase === 'fila') aim(cam, [lerp(5.2, 4.6, K), lerp(1.7, 2.0, K), lerp(2.2, 3.6, K)], [lerp(6.0, 6.6, K), 1.6, lerp(-2.0, -4.0, K)], 0); else aim(cam, [lerp(6.3, 6.4, K), lerp(1.55, 1.7, K), lerp(1.0, 2.6, K)], [lerp(6.5, 6.6, K), lerp(1.4, 1.6, K), -1.4], 0);
    return ret(fase === 'fila' ? lerp(4, 5.5, K) : lerp(2.2, 3.8, K), 2, 12); };
  return s;
}

export const CENAS = [
  [cenaCocina, 0, 7.5], [cenaBano, 7.5, 13.5], [cenaAeropuerto, 13.5, 20.3], [cenaHeroe, 20.3, 23.7],
  [cenaLab, 23.7, 32.3], [(a, b) => cenaFrascos(a, b, 'fila'), 32.3, 36.6], [(a, b) => cenaFrascos(a, b, 'cuchara'), 36.6, 999],
];
