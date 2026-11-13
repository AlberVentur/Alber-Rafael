// Short "¿Y si desaparecieran todos los insectos?" — vertical 1080x1920, ~45 s
import * as THREE from 'three';
import { makeShot, aim, keys, smooth, lerp, clamp, rng } from './motor/core.js';
import { makeChar, canvasTex } from './motor/char.js';
import { box, std, cut, glowSprite, pointer, sky, softBlob } from './motor/kit.js';
import { uT } from './motor/kit2.js';
import { mosquitoTex, roachTex, beeTex, pigeonTex, dogTex, flowerTex } from './motor/art.js';
import { woodFloor, beam, poster, signTex, lightPanel, sunLight } from './comum.js';
import { sala, rua, person, CAST } from './pecas.js';
import { cuarto, deitar, wordTex, bubble } from './extra.js';
const ret = (focus, range, blur, extra = {}) => ({ focus, range, blur, bloom: .3, bloomT: .92, vig: .45, exposure: 1.02, ...extra });
const heroi = (c, x, z, y = 0, tint = '#FFE6CC') => { const h = makeChar({ outfit: 'hero', glow: .16 }); h.place(x, z, y); h.tint(tint); c.add(h.root); return h; };
const fade = (m, a) => { m.material.transparent = true; m.material.opacity = a; m.visible = a > .01; };
const poofs = (c, n = 8) => { const a = []; for (let i = 0; i < n; i++) { const g = glowSprite('#FFFFFF', .25, 0); c.add(g); a.push(g); } return a; };
const doPoof = (ps, pos, k) => ps.forEach((g, i) => { const a = i / ps.length * Math.PI * 2; g.position.set(pos.x + Math.cos(a) * k * .35, pos.y + Math.sin(a) * k * .35, pos.z); g.material.opacity = k > 0 && k < 1 ? .9 * (1 - k) : 0; });

// campo aberto (grama, céu, árvores ao fundo)
function campo(c, o = {}) { const { col = '#7FA65A', dusk = false } = o; c.fog = new THREE.FogExp2(dusk ? '#E8B890' : '#DCEAF0', .018);
  sky(c, -90, 320, 180, dusk ? [[0, '#5A6AA8'], [.6, '#F2A07A'], [1, '#FFD9A8']] : [[0, '#6FA7D8'], [.6, '#CFE4EE'], [1, '#FFE7BE']]);
  const g = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), std(col, { roughness: 1 })); g.rotation.x = -Math.PI / 2; g.receiveShadow = true; c.add(g);
  const R = rng(3); for (let i = 0; i < 14; i++) { const x = (R() - .5) * 40, z = -14 - R() * 30; const tr = new THREE.Mesh(new THREE.SphereGeometry(1.6 + R(), 12, 10), std(['#3E6A3A', '#4F7A44', '#5E8A48'][i % 3])); tr.position.set(x, 2.6, z); tr.castShadow = true; c.add(tr); c.add(box(.3, 2, .3, '#5A3C28', x, 1, z)); }
  c.add(new THREE.HemisphereLight('#E9EEFF', '#5A6A4A', 1.0)); c.add(sunLight(dusk ? '#FFB080' : '#FFE6C0', 2.6, [8, 12, 6], 14, 50)); }

/** 1. Manhã: "por fin se fueron todos los insectos" — 0 a 3.6 */
function cenaManana(t0, t1) {
  const s = makeShot(t0, t1, '#F1C39A', 40), c = s.scene; rua(c, { seed: 2 });
  const h = heroi(c, 6.0, -2.0, .14, '#FFF0DC'); const sw = signTex('SIN INSECTOS', '#2F6E5A', '#FFFFFF', 1024, 220, 'Inter', 120, 900); const sg = cut(sw, 2.2, .47); sg.position.set(6.8, 3.3, -4.5); c.add(sg);
  s.update = (t, u) => { uT.value = t; const cam = s.camera; h.face(cam); h.eye(u < 1.4 ? 'shut' : 'happy'); h.pose({ armL: [u < 1.4 ? 165 : 120, 20], armR: [u < 1.4 ? 165 : 120, 20], bob: u > 1.4 ? Math.abs(Math.sin(u * 6)) * .05 : 0 }); pointer(sg, cam);
    const K = smooth(0, 3.6, u); aim(cam, [lerp(5.0, 5.6, K), lerp(1.5, 1.8, K), lerp(2.6, 1.6, K)], [6.2, lerp(1.6, 2.0, K), -3], 0); return ret(lerp(4.6, 3.8, K), 2, 11); };
  return s;
}

/** 2. Casa: o mosquito some, a barata some — 3.6 a 6.8 */
function cenaBichos(t0, t1) {
  const s = makeShot(t0, t1, '#E9B48C', 40), c = s.scene; sala(c);
  const mq = cut(mosquitoTex(false), .6, .45); c.add(mq); const rc = cut(roachTex(false), .5, .33); c.add(rc); const p1 = poofs(c), p2 = poofs(c);
  const h = heroi(c, .55, -.9);
  s.update = (t, u) => { const cam = s.camera; const g1 = smooth(.55, .8, u), g2 = smooth(2.0, 2.25, u);
    mq.position.set(-.4 + Math.sin(u * 7) * .15, 1.9 + Math.sin(u * 11) * .08, -.4); pointer(mq, cam); fade(mq, 1 - g1); doPoof(p1, mq.position, clamp((u - .55) / .6));
    rc.position.set(-.2 + u * .1, .04, .4); rc.rotation.set(-Math.PI / 2, 0, .3); fade(rc, 1 - g2); doPoof(p2, rc.position, clamp((u - 2.0) / .6));
    h.face(cam); h.eye(u < .8 ? 'lookl' : u < 1.6 ? 'happy' : u < 2.3 ? 'down' : 'happy'); h.pose({ armL: [u > 2.4 ? 150 : 12, 10], armR: [u > 2.4 ? 150 : 12, 10] });
    const K = smooth(0, 3.2, u); aim(cam, [lerp(-.5, .1, K), lerp(1.7, 1.6, K), lerp(3.4, 3.8, K)], [lerp(-.2, .2, K), lerp(1.6, 1.0, K), -.3], 0); return ret(lerp(3.2, 3.4, K), 1.6, 12); };
  return s;
}

/** 3. Noite: dorme como um bebê — 6.8 a 8.5 */
function cenaDuerme(t0, t1) {
  const s = makeShot(t0, t1, '#2A1E2E', 40), c = s.scene; cuarto(c, { night: true, bed: [0, -1.0] });
  const h = heroi(c, -.9, -1.1, .98, '#C8C8F0'); const zs = [0, 1, 2].map(() => { const m = cut(wordTex('Z', '#BFD4FF', 150), .32, .25, { blend: true }); c.add(m); return m; });
  s.update = (t, u) => { const cam = s.camera; h.face(cam); deitar(h, -Math.PI / 2); h.root.position.set(-.85, .98, -1.05); h.eye('shut'); h.pose({ armL: [12, 8], armR: [12, 8] });
    zs.forEach((m, i) => { const k = ((u * .6 + i / 3) % 1); m.position.set(-.6 + k * .5, 1.5 + k * .9, -1.0); m.material.opacity = Math.sin(k * Math.PI); pointer(m, cam); });
    const K = smooth(0, 1.7, u); aim(cam, [lerp(.1, 0, K), lerp(2.2, 2.0, K), lerp(3.6, 3.2, K)], [0, 1.1, -1.0], 0); return ret(lerp(4.2, 3.8, K), 1.4, 12, { exposure: .95 }); };
  return s;
}

/** 4. Café da manhã: o café, a fruta e as amêndoas somem — 8.5 a 14.6 */
function cenaDesayuno(t0, t1) {
  const s = makeShot(t0, t1, '#E9B48C', 38), c = s.scene; sala(c, { wall: '#2F6E68' });
  c.add(box(2.4, .08, 1.2, std('#D9B48A'), 0, .95, -.6)); for (const [x, z] of [[-1.1, -1.1], [1.1, -1.1], [-1.1, -.1], [1.1, -.1]]) c.add(box(.08, .92, .08, '#5C3C28', x, .46, z));
  const cup = new THREE.Group(); cup.add(new THREE.Mesh(new THREE.CylinderGeometry(.11, .09, .2, 20), std('#F4F0E4'))); const cof = new THREE.Mesh(new THREE.CylinderGeometry(.1, .1, .01, 20), std('#4A2A18')); cof.position.y = .09; cup.add(cof); cup.position.set(-.6, 1.09, -.4); c.add(cup);
  const bowl = (x, col, n, r) => { const g = new THREE.Group(); const b = new THREE.Mesh(new THREE.SphereGeometry(.26, 20, 10, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), std('#F2E6CC', { side: THREE.DoubleSide })); b.position.y = .26; g.add(b); const R = rng(n); for (let i = 0; i < n; i++) { const f = new THREE.Mesh(new THREE.SphereGeometry(r, 12, 10), std(Array.isArray(col) ? col[i % col.length] : col)); f.position.set((R() - .5) * .3, .24 + R() * .06, (R() - .5) * .3); if (r < .05) f.scale.set(1, .6, 1.5); g.add(f); } g.position.set(x, .99, -.5); c.add(g); return g; };
  const fruta = bowl(.05, ['#E2483A', '#F2C14E', '#7FB04A', '#F28C3A'], 6, .08), alm = bowl(.65, '#B07A4A', 16, .04);
  const ps = [poofs(c), poofs(c), poofs(c)]; const h = heroi(c, .2, -1.6);
  s.update = (t, u) => { const cam = s.camera; const T = [2.95, 3.9, 4.85]; const objs = [cup, fruta, alm];
    objs.forEach((o, i) => { const k = smooth(T[i], T[i] + .25, u); o.scale.setScalar(Math.max(.001, 1 - k)); o.visible = k < 1; doPoof(ps[i], new THREE.Vector3(o.position.x, 1.2, o.position.z + .1), clamp((u - T[i]) / .6)); });
    h.face(cam); h.eye(u < 1.6 ? 'happy' : u < 2.9 ? 'look' : u < 4.9 ? 'wide' : 'sad'); h.pose({ armL: [40, 40], armR: [40, 40] });
    const K = smooth(0, 6.1, u); aim(cam, [lerp(.0, .2, K), lerp(1.9, 1.75, K), lerp(2.6, 1.9, K)], [.1, lerp(1.4, 1.2, K), -.8], 0); return ret(lerp(3.0, 2.4, K), 1.6, 12); };
  return s;
}

/** 5. Plantação: flores e abelhas; as abelhas somem e as flores murcham — 14.6 a 22.9 */
function cenaCultivos(t0, t1) {
  const s = makeShot(t0, t1, '#BFE0F0', 40), c = s.scene; campo(c);
  const cols = ['#E8667F', '#F2C14E', '#FFFFFF', '#B07AD0']; const fl = []; const R = rng(5);
  for (let r = 0; r < 9; r++) for (let i = 0; i < 9; i++) { const x = -3.2 + i * .8 + (R() - .5) * .3, z = -1 - r * 1.1; const m = cut(flowerTex(cols[(r + i) % 4]), .5, .5); m.position.set(x, .5, z); c.add(m); c.add(box(.03, .3, .03, '#3E6A3A', x, .15, z)); fl.push(m); }
  for (let r = 0; r < 9; r++) c.add(box(7.8, .12, .5, std('#6B4A33'), 0, .06, -1 - r * 1.1));
  const bees = []; for (let i = 0; i < 10; i++) { const b = cut(beeTex(false), .28, .22); c.add(b); bees.push({ b, x: -2.5 + R() * 5, z: -1.5 - R() * 7, p: R() * 6 }); }
  const h = heroi(c, .4, .6);
  s.update = (t, u) => { const cam = s.camera; const gone = smooth(2.4, 4.0, u), wilt = smooth(4.5, 7.5, u);
    bees.forEach(({ b, x, z, p }, i) => { b.position.set(x + Math.sin(u * 2 + p) * .5, .9 + Math.sin(u * 5 + p) * .15, z + Math.cos(u * 1.6 + p) * .4); pointer(b, cam); fade(b, 1 - smooth(2.4 + i * .15, 2.7 + i * .15, u)); });
    fl.forEach((m, i) => { pointer(m, cam); m.material.color.set(new THREE.Color('#ffffff').lerp(new THREE.Color('#8A7A60'), wilt * (i % 4 ? 1 : .6))); m.position.y = .5 - wilt * .12; m.rotation.z = wilt * .5 * (i % 2 ? 1 : -1); });
    h.face(cam); h.eye(u < 2.4 ? 'happy' : u < 4.5 ? 'look' : 'sad'); h.pose({ armL: [12, 8], armR: [u > 4.5 ? 40 : 12, 30], head: u > 4.5 ? -8 : 0 });
    const K = smooth(0, 8.3, u); aim(cam, [lerp(-.4, .4, K), lerp(1.7, 2.6, K), lerp(4.4, 5.2, K)], [lerp(.2, 0, K), lerp(1.0, .8, K), lerp(-1.5, -4, K)], 0); return ret(lerp(3.2, 6, K), 3, 9); };
  return s;
}

/** 6. Chocolate: o cacau, a mosquinha, e adeus chocolate — 22.9 a 28.96 */
function cenaChocolate(t0, t1) {
  const s = makeShot(t0, t1, '#2A1E1A', 36), c = s.scene; sala(c, { wall: '#6A3A2A', night: true });
  c.add(box(2.6, .08, 1.4, std('#8E6242'), 0, .95, -.6)); c.add(box(2.4, .9, 1.2, std('#5C3C28'), 0, .45, -.6));
  const wrap = canvasTex(512, 256, (x) => { x.fillStyle = '#C9361F'; x.fillRect(0, 0, 512, 256); x.fillStyle = '#F2C14E'; x.font = '900 70px Fraunces'; x.textAlign = 'center'; x.fillText('CHOCOLATE', 256, 150); x.fillStyle = '#FFE7B8'; x.fillRect(0, 200, 512, 10); });
  const bar = new THREE.Group(); const choc = std('#5A2E1A', { roughness: .4 }); for (let i = 0; i < 4; i++) for (let j = 0; j < 2; j++) bar.add(box(.16, .05, .16, choc, -.27 + i * .18, .03, -.09 + j * .18)); const wm = new THREE.Mesh(new THREE.BoxGeometry(.4, .07, .4), new THREE.MeshStandardMaterial({ map: wrap })); wm.position.set(.5, .035, 0); bar.add(wm); bar.position.set(.2, .99, -.3); bar.rotation.y = -.3; c.add(bar);
  const pod = new THREE.Mesh(new THREE.SphereGeometry(.16, 20, 14), std('#D9822A', { roughness: .6 })); pod.scale.set(1, 1, 1.9); pod.position.set(-.7, 1.12, -.6); pod.rotation.y = .6; c.add(pod);
  const midge = cut(mosquitoTex(false), .14, .1); c.add(midge); const mg = glowSprite('#FFE08A', .5, .8); c.add(mg); const ps = poofs(c, 10);
  const lp = new THREE.SpotLight('#FFD8A0', 30, 6, .5, .5, 1.4); lp.position.set(0, 3.4, .6); lp.target.position.set(0, 1, -.5); c.add(lp, lp.target);
  const h = heroi(c, -.1, -1.8, 0, '#FFE6CC');
  s.update = (t, u) => { const cam = s.camera; const fly = u < 4.4; midge.visible = fly; mg.visible = fly; const mp = new THREE.Vector3(-.7 + Math.sin(u * 3) * .25, 1.35 + Math.sin(u * 7) * .06, -.5 + Math.cos(u * 3) * .15); midge.position.copy(mp); mg.position.copy(mp); pointer(midge, cam);
    const k = smooth(5.3, 5.6, u); bar.scale.setScalar(Math.max(.001, 1 - k)); bar.visible = k < 1; doPoof(ps, new THREE.Vector3(.3, 1.1, -.3), clamp((u - 5.3) / .6));
    h.face(cam); h.eye(u < 1.4 ? 'heart' : u < 4.4 ? 'look' : u < 5.3 ? 'wide' : 'sad'); h.pose({ armL: [40, 40], armR: [u > 5.3 ? 12 : 60, 30], head: u > 5.4 ? -8 : 0 });
    const K = smooth(0, 6, u); aim(cam, [lerp(.6, .3, K), lerp(1.7, 1.6, K), lerp(1.8, 1.5, K)], [lerp(.1, -.2, K), lerp(1.2, 1.2, K), -.6], 0); return ret(lerp(2.3, 2.0, K), 1.0, 13, { bloom: .4 }); };
  return s;
}

/** 7. Cadeia alimentar: pássaros, peixes, e quem comia eles somem um por um — 28.96 a 36.0 */
const fishT = () => canvasTex(256, 160, (x) => { x.clearRect(0, 0, 256, 160); x.fillStyle = '#4A86C7'; x.beginPath(); x.ellipse(110, 80, 80, 40, 0, 0, 7); x.fill(); x.beginPath(); x.moveTo(180, 80); x.lineTo(240, 40); x.lineTo(240, 120); x.fill(); x.fillStyle = '#9FD0F0'; x.beginPath(); x.ellipse(100, 92, 60, 18, 0, 0, 7); x.fill(); x.fillStyle = '#fff'; x.beginPath(); x.arc(60, 70, 12, 0, 7); x.fill(); x.fillStyle = '#1A1A24'; x.beginPath(); x.arc(58, 70, 6, 0, 7); x.fill(); });
function cenaCadena(t0, t1) {
  const s = makeShot(t0, t1, '#E8B890', 40), c = s.scene; campo(c, { dusk: true });
  const pond = new THREE.Mesh(new THREE.CircleGeometry(1.6, 40), new THREE.MeshStandardMaterial({ color: '#3E86B8', roughness: .2 })); pond.rotation.x = -Math.PI / 2; pond.position.set(.6, .02, -2.2); c.add(pond);
  const birds = [0, 1, 2].map(i => { const m = cut(pigeonTex(false), .6, .45); m.position.set(-.5 + i * .55, 2.6 + (i % 2) * .4, -3.2); c.add(m); return m; });
  const fish = [0, 1, 2].map(i => { const m = cut(fishT(), .45, .28); m.position.set(.1 + i * .45, .3, -2.1 + (i % 2) * .3); c.add(m); return m; });
  const dogs = [0, 1].map(i => { const m = cut(dogTex(false), 1.0, .75); m.position.set(-.3 + i * 1.3, .38, -3.6 - i * .4); c.add(m); return m; });
  const ps = [poofs(c, 10), poofs(c, 10), poofs(c, 10)]; const h = heroi(c, -.7, -.4, 0, '#FFE6D4');
  s.update = (t, u) => { const cam = s.camera; const T = [1.7, 3.9, 5.5]; const grp = [birds, fish, dogs];
    grp.forEach((g, gi) => g.forEach((m, i) => { pointer(m, cam); const k = smooth(T[gi] + i * .15, T[gi] + i * .15 + .3, u); if (gi === 0) m.position.y = 2.6 + (i % 2) * .4 + Math.sin(u * 4 + i) * .08; if (gi === 1) m.position.y = .3 + Math.abs(Math.sin(u * 3 + i)) * .35; fade(m, 1 - k); }));
    ps.forEach((p, gi) => { const g = grp[gi]; const ctr = g.reduce((a, m) => a.add(m.position), new THREE.Vector3()).multiplyScalar(1 / g.length); doPoof(p, ctr, clamp((u - T[gi]) / .7)); });
    h.face(cam); h.eye(u < 1.7 ? 'look' : u < 5.5 ? 'wide' : 'sad'); h.pose({ armL: [12, 8], armR: [u > 1.7 ? 50 : 12, 30] });
    const K = smooth(0, 7, u); aim(cam, [lerp(-.2, .3, K), lerp(1.7, 2.0, K), lerp(4.2, 5.0, K)], [lerp(-.1, .2, K), lerp(1.5, 1.3, K), -2.4], 0); return ret(lerp(4.0, 5.8, K), 3, 9); };
  return s;
}

/** 8. Parque: as folhas mortas se amontoam — 36.0 a 40.2 */
function cenaHojas(t0, t1) {
  const s = makeShot(t0, t1, '#E8B890', 40), c = s.scene; campo(c, { col: '#8A9A50', dusk: true });
  const lt = ['#C9622A', '#E0A030', '#8A4A22', '#B8862A'].map(col => canvasTex(96, 64, (x) => { x.clearRect(0, 0, 96, 64); x.fillStyle = col; x.beginPath(); x.ellipse(48, 32, 42, 22, .3, 0, 7); x.fill(); x.strokeStyle = '#00000055'; x.lineWidth = 3; x.beginPath(); x.moveTo(10, 40); x.lineTo(86, 22); x.stroke(); }));
  const R = rng(8), L = []; for (let i = 0; i < 260; i++) { const m = cut(lt[i % 4], .3, .2); const a = R() * Math.PI * 2, r = Math.sqrt(R()) * 2.2; const tgt = [Math.cos(a) * r, Math.max(.02, (1 - r / 2.2) * 1.1 * R() + .02), Math.sin(a) * r * .6 - 1]; m.rotation.set(-Math.PI / 2 + (R() - .5), 0, R() * 6); c.add(m); L.push({ m, tgt, d: R() * 3, x0: (R() - .5) * 6 }); }
  const h = heroi(c, 0, -1.0);
  s.update = (t, u) => { const cam = s.camera; L.forEach(({ m, tgt, d, x0 }) => { const k = smooth(d * .9, d * .9 + 1.0, u); m.position.set(lerp(x0, tgt[0], k), lerp(4.5, tgt[1], k), lerp(-1.5, tgt[2], k)); m.rotation.z += 0; m.visible = u > d * .9 - .05; });
    h.face(cam); h.eye(u < 1.5 ? 'look' : u < 3 ? 'flat' : 'sad'); h.pose({ armL: [40, 40], armR: [40, 40] });
    const K = smooth(0, 4.2, u); aim(cam, [lerp(.3, -.2, K), lerp(1.8, 2.4, K), lerp(3.8, 4.4, K)], [0, lerp(1.2, .8, K), -1], 0); return ret(lerp(4.8, 5.6, K), 2.4, 9); };
  return s;
}

/** 9. Fim: à noite, com o retrato do mosquito — 40.2 a fim */
function cenaExtranas(t0, t1) {
  const s = makeShot(t0, t1, '#2A1E2E', 38), c = s.scene; sala(c, { night: true });
  const pic = new THREE.Group(); pic.add(box(.62, .72, .04, std('#C9A050', { metalness: .5, roughness: .4 }), 0, 0, 0)); const pt = canvasTex(256, 300, (x) => { x.fillStyle = '#F2E6CC'; x.fillRect(0, 0, 256, 300); x.drawImage(mosquitoTex(false).image, 8, 70, 240, 180); x.fillStyle = '#E8667F'; x.font = '900 70px Fraunces'; x.textAlign = 'center'; x.fillText('♥', 128, 70); }); const pm = new THREE.Mesh(new THREE.PlaneGeometry(.52, .62), new THREE.MeshBasicMaterial({ map: pt })); pm.position.z = .025; pic.add(pm); c.add(pic);
  const glow = glowSprite('#FFE0A0', 1.0, .12); c.add(glow); const h = heroi(c, 0, -.8, 0, '#E8D8F0');
  s.update = (t, u) => { const cam = s.camera; const L = Math.min(t1 - t0, 5.3); h.face(cam); h.eye(u < 2.4 ? 'sad' : 'happy'); h.pose({ armL: [70, 40], armR: [70, 40], head: -6 });
    const hp = h.root.position; pic.position.set(hp.x, .95, hp.z + .35); pic.rotation.y = h.root.rotation.y; pic.rotation.x = -.15; glow.position.set(hp.x, 1.0, hp.z + .4);
    const K = smooth(0, L, u); aim(cam, [lerp(-.1, .1, K), lerp(1.6, 1.5, K), lerp(3.4, 2.4, K)], [0, lerp(1.4, 1.35, K), -.8], 0); return ret(lerp(4.2, 3.2, K), 1.4, 13, { bloom: .4 }); };
  return s;
}

export const CENAS = [
  [cenaManana, 0, 3.6], [cenaBichos, 3.6, 6.8], [cenaDuerme, 6.8, 8.5], [cenaDesayuno, 8.5, 14.6], [cenaCultivos, 14.6, 22.9],
  [cenaChocolate, 22.9, 28.96], [cenaCadena, 28.96, 36.0], [cenaHojas, 36.0, 40.2], [cenaExtranas, 40.2, 999],
];
