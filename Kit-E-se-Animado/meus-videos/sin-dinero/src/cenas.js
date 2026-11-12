// As cenas do vídeo "¿y si no existiera el dinero?"
import * as THREE from 'three';
import { makeShot, aim, keys, smooth, lerp, clamp, rng } from './motor/core.js';
import { makeChar, canvasTex } from './motor/char.js';
import { box, std, cut, glowSprite, building, street, lamp, tree, car, skyline, sky, softBlob, pointer, dissolve } from './motor/kit.js';
import { brickTex, cobbleTex, crowd, uT } from './motor/kit2.js';
import { woodFloor, tileFloor, beam, plant, poster, signTex, lightPanel, sunLight } from './comum.js';
import { walletTex, mothTex, billTex, debtTex, breadTex, shoeTex, guitarTex, fishTex, lydiaCoinTex, stinkTex, thoughtTex } from './arte.js';

const SHOPS = [{ name: 'PANADERÍA', bg: '#6C4A2C', fg: '#FFE7B8', awning: '#3E7A5C' }, { name: 'FARMACIA', bg: '#2F6E5A', fg: '#F0FFF4' }, { name: 'LUNA CAFÉ', bg: '#A85A36', fg: '#FFE3C8', awning: '#D94F58', font: 'Caveat', size: 120 }, { name: 'ZAPATOS', bg: '#3A4F7A', fg: '#FFF0C8' }, { name: 'FLORES', bg: '#B04463', fg: '#FFF2E2', awning: '#EFEDE0' }];
function rua(c, night, seed = 0, lit = .3) { let z = 6, i = 0; while (z > -90) { const d = 7 + (i * 37 % 5); c.add(building(100 + i + seed, { x: 13, z: z - d / 2, w: 8, d, floors: 4 + i % 3, side: -1, night, lit, shop: SHOPS[(i + seed) % 5] })); c.add(building(200 + i + seed, { x: -13, z: z - d / 2, w: 8, d, floors: 5 + i % 3, side: 1, night, lit, shop: SHOPS[(i + 2 + seed) % 5] })); z -= d; i++; } }
const dia = (c) => { sky(c, -170, 500, 180, [[0, '#6FA7D8'], [.5, '#CFD8DC'], [.8, '#FBD7A6'], [1, '#FFE7BE']]); skyline(c, -150, 420, 90, ['#B89AA0', '#A98E9A', '#9A8592'], false, 21); c.add(new THREE.HemisphereLight('#E9EEFF', '#B08A6A', 1.1)); const sun = sunLight('#FFD29A', 3.0, [-20, 16, 10], 30, 90); c.add(sun); };

/** 1 e 9. Calçada: carteira aberta e vazia (no fim, cheira a peixe) */
export function cenaCarteira(t0, t1, fim = false) {
  const s = makeShot(t0, t1, '#F1C39A', 40), c = s.scene; c.fog = new THREE.FogExp2('#F7CFA4', .01); dia(c); street(c, false); rua(c, false, fim ? 3 : 0, .2);
  for (let k = 0; k < 6; k++) tree(c, 5.2, -6 - k * 11, 1.2, ['#3E5F3A', '#4F7A44', '#6E9A50', '#D7D282'], k);
  const hero = makeChar({ outfit: 'hero', glow: .16 }); hero.place(6.2, -1.6, .14); hero.tint('#FFF0DC'); c.add(hero.root);
  const wal = cut(walletTex(), .62, .39); c.add(wal); const moths = [0, 1, 2].map(() => { const m = cut(mothTex(), .2, .15); c.add(m); return m; });
  const stink = [0, 1].map(() => { const m = cut(stinkTex(), .3, .6, { blend: true }); c.add(m); return m; });
  const ppl = [['rosa', 'long', '#6B3A22', 7.6, -5.5], ['terno2', null, null, 4.6, -7.5], ['amarelo', 'afro', '#2a1b18', 7.2, -10], ['azul', 'bob', '#D9B65A', 4.8, -13]].map(([o, h, hc, x, z], i) => { const k = makeChar({ outfit: o, hair: h, hairc: hc, lash: !!h, glow: .08 }); k.place(x, z, x > 5 ? .14 : 0); k.tint('#FFF0DC'); k.ph = i; c.add(k.root); const w = cut(walletTex(), .5, .31); c.add(w); k.w = w; return k; });
  const R = rng(3), far = []; for (let i = 0; i < 60; i++) far.push([(R() < .5 ? -1 : 1) * (5.6 + R() * 1.4), -16 - R() * 40, .14]); crowd(c, far, { raised: .2, jump: .02, seed: 7 });
  s.update = (t, u) => { uT.value = t; const cam = s.camera; hero.face(cam); const hp = hero.root.position;
    hero.eye(fim ? (u < 2.1 ? 'sad' : 'flat') : (u < 1.3 ? 'look' : 'wide')); hero.pose({ armL: [30, -60], armR: [30, -60], head: -6 });
    wal.position.set(hp.x + .02, 1.1, hp.z + .35); pointer(wal, cam);
    moths.forEach((m, i) => { const k = clamp((u - .9 - i * .25) / 2.5); m.visible = !fim && k > 0 && k < 1; m.position.set(hp.x + Math.sin(u * 3 + i * 2) * .3 * k + (i - 1) * .2 * k, 1.2 + k * 1.4, hp.z + .4); m.scale.y = .5 + .5 * Math.abs(Math.sin(u * 22 + i)); pointer(m, cam); });
    stink.forEach((m, i) => { m.visible = fim && u > 2.0; m.position.set(hp.x - .28 + i * .56, 1.35 + Math.sin(u * 2 + i) * .05, hp.z + .45); m.scale.setScalar(.7); m.material.opacity = .85 * smooth(2.0, 2.4, u); pointer(m, cam); });
    for (const k of ppl) { k.face(cam); k.eye(u > 2.4 ? 'sad' : 'down'); k.pose({ armL: [30, -60], armR: [30, -60], head: -6 }); k.w.position.set(k.root.position.x, 1.1 + k.root.position.y, k.root.position.z + .35); k.w.visible = fim ? false : u > 2.4; pointer(k.w, cam); }
    const K = smooth(0, fim ? 4.2 : 4.4, u);
    if (fim) { aim(cam, [lerp(5.3, 5.6, K), lerp(1.5, 1.6, K), lerp(1.8, 1.0, K)], [6.2, lerp(1.4, 1.5, K), -1.6], -.01); return { focus: lerp(3.5, 2.7, K), range: 1.2, blur: 14, bloom: .22, bloomT: 1, vig: .42, exposure: 1.02 }; }
    aim(cam, [lerp(6.3, 4.6, K), lerp(1.35, 1.9, K), lerp(.5, 4.5, K)], [lerp(6.2, 6.4, K), lerp(1.3, 1.3, K), lerp(-1.6, -6, K)], -.01);
    return { focus: lerp(2.0, 6.3, K), range: lerp(1, 6, K), blur: 14, bloom: .22, bloomT: 1, vig: .42, exposure: 1.02 }; };
  return s;
}

/** 2. O banco: as notas se desfazem — 4.72 a 6.80 */
export function cenaBanco(t0, t1) {
  const s = makeShot(t0, t1, '#1E2236', 40), c = s.scene; c.fog = new THREE.FogExp2('#2A2A40', .03);
  c.add(tileFloor(20, 20, '#3A3A48', '#2E2E3A', 6)); const wall = box(20, 8, .4, std('#4A3A30'), 0, 4, -4); c.add(wall);
  // cofre aberto com pilhas de notas
  c.add(box(3.4, 3.6, .3, std('#7A7E88', { metalness: .7, roughness: .3 }), 0, 1.8, -3.7)); const door = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.5, .3, 40), std('#9AA0AA', { metalness: .8, roughness: .25 })); door.rotation.x = Math.PI / 2; door.rotation.z = .3; door.position.set(-2.6, 1.8, -2.4); c.add(door); for (let i = 0; i < 6; i++) { const sp = box(.08, .9, .08, std('#C9CDD2', { metalness: .8 }), -2.6 + Math.cos(i) * .9, 1.8 + Math.sin(i) * .9, -2.2); sp.rotation.z = i; c.add(sp); }
  const bills = [], bt = [billTex('100'), billTex('50', '#8FB89A'), billTex('20', '#A8C6A0')]; const R = rng(2); for (let i = 0; i < 70; i++) { const m = cut(bt[i % 3], .6, .28); const x = -1.2 + (i % 5) * .6, y = .3 + Math.floor(i / 5) % 7 * .32, z = -3.0 + Math.floor(i / 35) * .25; m.position.set(x, y, z); c.add(m); bills.push({ m, k: R() }); }
  const dis = dissolve(c, { n: 400, pos: [0, 1.4, -2.9], spread: 1.4, rise: 2.4, t0: 0, dur: 1.5, size: .06, color: '#9FF0B8' });
  const bank = signTex('BANCO', '#2A2A34', '#E9C46A', 1024, 220, 'Fraunces', 150); const bm = new THREE.Mesh(new THREE.PlaneGeometry(4, .86), new THREE.MeshStandardMaterial({ map: bank, emissiveMap: bank, emissive: '#fff', emissiveIntensity: .4 })); bm.position.set(0, 4.6, -3.75); c.add(bm);
  const guard = makeChar({ outfit: 'terno', glow: .1 }); guard.place(2.3, -1.6); guard.tint('#E6E2FF'); c.add(guard.root);
  c.add(new THREE.HemisphereLight('#8E96C8', '#201820', .7)); const sp = new THREE.SpotLight('#FFE0A8', 60, 14, .6, .5, 1.4); sp.position.set(0, 6, 1); sp.target.position.set(0, 1.5, -3); sp.castShadow = true; c.add(sp, sp.target); const b1 = beam(2.2, 7, '#FFE0A8', .14); b1.position.set(0, 3.5, -1.2); b1.rotation.set(-.4, 0, 0); c.add(b1);
  s.update = (t, u) => { const cam = s.camera; const g = clamp(u / 1.5); bills.forEach(({ m, k }) => { m.visible = k > g; pointer(m, cam); }); if (dis) dis(u);
    guard.face(cam); guard.eye(u < .5 ? 'look' : 'wide'); guard.pose({ armL: [20, 10], armR: [20, 10] });
    const K = smooth(0, 2.1, u); aim(cam, [lerp(-.8, .6, K), lerp(1.7, 1.9, K), lerp(3.2, 2.6, K)], [0, 1.6, -3], -.01);
    return { focus: lerp(6.0, 5.6, K), range: 2, blur: 12, bloom: .35, bloomT: .9, vig: .55, exposure: 1.0 }; };
  return s;
}

/** 3. Terraço: as contas voando — 6.80 a 11.32 */
export function cenaDeudas(t0, t1) {
  const s = makeShot(t0, t1, '#9CC8EE', 40), c = s.scene; c.fog = new THREE.FogExp2('#F6D9B6', .006);
  sky(c, -170, 500, 200, [[0, '#5E9AD8'], [.55, '#A9CBE8'], [.85, '#FBD9AE'], [1, '#FFE9C6']]); skyline(c, -120, 420, 70, ['#C9A6A6', '#B898A0', '#A88C98'], false, 9);
  const fl = new THREE.Mesh(new THREE.PlaneGeometry(30, 30), new THREE.MeshStandardMaterial({ map: (() => { const t = canvasTex(256, 256, (x) => { x.fillStyle = '#C9785A'; x.fillRect(0, 0, 256, 256); x.strokeStyle = '#A85E44'; x.lineWidth = 6; for (let i = 0; i <= 256; i += 64) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, 256); x.moveTo(0, i); x.lineTo(256, i); x.stroke(); } }); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(12, 12); return t; })(), roughness: .9 })); fl.rotation.x = -Math.PI / 2; fl.receiveShadow = true; c.add(fl);
  c.add(box(30, 1.0, .3, std('#E9DCC4'), 0, .5, -5)); for (let i = -6; i <= 6; i++) c.add(plant(i * 2.1, 1.0, -5.1, .55, ['#C76B4A', '#36AEA2', '#E9B44C'][(i + 9) % 3]));
  for (let i = 0; i < 14; i++) { const g = glowSprite(['#FFD27A', '#FF9F7A', '#FFFFFF'][i % 3], .2, .7); g.position.set(-4 + i * .62, 3.6 - Math.sin(i / 13 * Math.PI) * .4, -4.2); c.add(g); }
  const papers = []; const R = rng(5); for (let i = 0; i < 40; i++) { const m = cut(debtTex(i % 8), .3, .39); c.add(m); papers.push({ m, p: R() * 6, x: (R() - .5) * 3, d: .5 + R() }); }
  const hero = makeChar({ outfit: 'hero', glow: .16 }); hero.place(0, -1.0); hero.tint('#FFF2E2'); c.add(hero.root);
  c.add(new THREE.HemisphereLight('#E9EEFF', '#B08A6A', 1.1)); c.add(sunLight('#FFD29A', 3.2, [-10, 12, 8], 12, 50));
  s.update = (t, u) => { const cam = s.camera; hero.face(cam); const thr = smooth(.7, 1.0, u); hero.eye(u < 2.7 ? 'happy' : u < 3.4 ? 'smug' : 'look'); hero.pose(u < 2.7 ? { armL: [lerp(20, 160, thr), 10], armR: [lerp(20, 160, thr), 10], bob: Math.abs(Math.sin(u * 7)) * .06 } : { armL: [14, -70], armR: [14, -70], head: 5 });
    papers.forEach(({ m, p, x, d }) => { const k = Math.max(0, u - .8); m.visible = u > .8; m.position.set(x * (.3 + k * .6) + Math.sin(u * 2 + p) * .3, 2.0 + k * d * 1.2 - Math.max(0, k - 1.5) * k * .4 + Math.sin(u * 3 + p) * .2, -1.0 + Math.cos(p) * .8); m.rotation.z = u * 2 + p; pointer(m, cam); m.rotation.z = Math.sin(u * 3 + p) * .6; });
    const K = smooth(0, 4.5, u); aim(cam, [lerp(.6, -.4, K), lerp(1.4, 1.6, K), lerp(5.2, 3.6, K)], [0, lerp(1.6, 1.4, K), -1], -.01);
    return { focus: lerp(6.2, 4.6, K), range: 2.0, blur: 14, bloom: .25, bloomT: 1, vig: .35, exposure: 1.04 }; };
  return s;
}

/** 4. Padaria: o padeiro quer sapatos, você tem um violão — 11.32 a 16.44 */
export function cenaPadaria(t0, t1) {
  const s = makeShot(t0, t1, '#3A2418', 40), c = s.scene; c.fog = new THREE.FogExp2('#5A3A28', .02);
  c.add(woodFloor(16, 14, '#5F3F2C'));
  const wall = new THREE.Mesh(new THREE.PlaneGeometry(16, 7), new THREE.MeshStandardMaterial({ map: brickTex('#B5664A', 4, 2), roughness: .95 })); wall.position.set(0, 3.5, -3.2); wall.receiveShadow = true; c.add(wall);
  c.add(box(6, 1.05, .9, std('#8E5A3A'), 0, .52, -.4)); c.add(box(6.2, .07, 1.0, std('#D9B48A'), 0, 1.08, -.4));
  const bt = breadTex(); for (let r = 0; r < 3; r++) { c.add(box(5.4, .06, .5, '#8E6242', 0, 1.4 + r * .7, -2.9)); for (let i = 0; i < 9; i++) { const b = cut(bt, .5, .25); b.position.set(-2.4 + i * .6, 1.56 + r * .7, -2.85); c.add(b); } }
  for (let i = 0; i < 5; i++) { const b = cut(bt, .5, .25); b.position.set(-2 + i * .5, 1.24, -.4); c.add(b); }
  const sign = signTex('PANADERÍA', '#3E7A5C', '#FFF4DC', 1024, 220, 'Fraunces', 140); const sm = new THREE.Mesh(new THREE.PlaneGeometry(3.6, .78), new THREE.MeshStandardMaterial({ map: sign })); sm.position.set(0, 4.0, -3.15); c.add(sm);
  for (let i = 0; i < 3; i++) { const l = new THREE.Mesh(new THREE.SphereGeometry(.16, 20, 14), new THREE.MeshStandardMaterial({ color: '#FFE0A0', emissive: '#FFC070', emissiveIntensity: 2.5 })); l.position.set(-2 + i * 2, 4.6, -1); c.add(l); c.add(box(.02, 2.4, .02, '#222', -2 + i * 2, 5.8, -1, false)); const pl = new THREE.PointLight('#FFC070', 6, 7, 1.6); pl.position.copy(l.position); c.add(pl); const g = glowSprite('#FFC070', 1.3, .45); g.position.copy(l.position); c.add(g); }
  const pan = makeChar({ outfit: 'avental', hair: 'old', hairc: '#E8E8E8', glow: .12 }); pan.place(.6, -1.5); pan.tint('#FFE6CC'); c.add(pan.root);
  
  const bub = cut(thoughtTex(shoeTex()), 1.2, 1.2); c.add(bub);
  const hero = makeChar({ outfit: 'hero', glow: .16 }); hero.place(-.9, .7); hero.tint('#FFE6CC'); c.add(hero.root);
  const gt = cut(guitarTex(), .45, 1.18); c.add(gt);
  c.add(new THREE.HemisphereLight('#FFE0C0', '#3a2418', .7)); c.add(sunLight('#FFD6A0', 1.6, [4, 6, 6], 8, 30)); const win = beam(2.2, 7, '#FFD9A0', .14); win.position.set(2.6, 2.5, .4); win.rotation.set(-.6, -.4, .3); c.add(win);
  s.update = (t, u) => { const cam = s.camera; pan.face(cam); hero.face(cam); const pp = pan.root.position, hp = hero.root.position;
    const sh = smooth(1.6, 1.9, u); bub.visible = u > 1.6; bub.scale.setScalar(.3 + sh * .7); bub.position.set(pp.x + .45, 2.55, pp.z + .1); pointer(bub, cam);
    pan.eye(u < 1.6 ? 'happy' : 'smug'); pan.pose({ armL: [20, -60], armR: [u > 1.6 ? 40 : 20, u > 1.6 ? 80 : -60] });
    const show = smooth(3.0, 3.3, u); hero.eye(u < 3.0 ? 'look' : 'happy'); hero.pose({ armR: [lerp(10, 50, show), lerp(8, 60, show)], armL: [12, 8] });
    gt.position.set(hp.x + .55, lerp(.75, 1.05, show), hp.z + .3); pointer(gt, cam); gt.rotation.z = lerp(-.1, .3, show);
    const K = smooth(0, 5.0, u); aim(cam, [lerp(1.2, -.6, K), lerp(1.6, 1.7, K), lerp(5.6, 4.6, K)], [lerp(.8, -.5, K), 1.7, -.8], -.01);
    return { focus: lerp(5.4, 4.0, K), range: 2.6, blur: 14, bloom: .3, bloomT: .9, vig: .48, exposure: 1.0 }; };
  return s;
}

/** 5 e 8. Mercado de troca na praça (no fim: tudo tem preço em cavala) */
export function cenaMercado(t0, t1, peixe = false) {
  const s = makeShot(t0, t1, '#F1C39A', 42), c = s.scene; c.fog = new THREE.FogExp2('#F7CFA4', .012); dia(c);
  const g = new THREE.Mesh(new THREE.PlaneGeometry(90, 100), new THREE.MeshStandardMaterial({ map: cobbleTex('#B49F8C', 34, 38), roughness: .9 })); g.rotation.x = -Math.PI / 2; g.position.z = -15; g.receiveShadow = true; c.add(g);
  let z = 10, i = 0; while (z > -46) { const d = 8 + (i * 37 % 4); c.add(building(300 + i, { x: 16, z: z - d / 2, w: 10, d, floors: 4 + i % 2, side: -1, night: false, shop: SHOPS[i % 5] })); c.add(building(400 + i, { x: -16, z: z - d / 2, w: 10, d, floors: 4 + (i + 1) % 2, side: 1, night: false, shop: SHOPS[(i + 2) % 5] })); z -= d; i++; }
  // barracas com toldo listrado e mercadorias
  const goods = [breadTex(), shoeTex(), fishTex()], stalls = [];
  const fishP = signTex('ACEPTAMOS CABALLA', '#2F6E9A', '#FFFFFF', 1024, 200, 'Fraunces', 92);
  [[-4.2, -3], [4.2, -4], [-4.4, -10], [4.4, -11], [-4.4, -17], [4.4, -18]].forEach(([x, zz], k) => { const col = ['#D94F58', '#36AEA2', '#E9B44C'][k % 3]; c.add(box(2.6, .9, 1.2, std('#8E6242'), x, .45, zz)); for (const sx of [-1, 1]) c.add(box(.08, 2.4, .08, '#6B4A33', x + sx * 1.25, 1.2, zz - .5)); const aw = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 1.3), new THREE.MeshStandardMaterial({ map: canvasTex(256, 64, (q) => { for (let j = 0; j < 8; j++) { q.fillStyle = j % 2 ? '#F4EEDC' : col; q.fillRect(j * 32, 0, 32, 64); } }), side: THREE.DoubleSide })); aw.position.set(x, 2.4, zz); aw.rotation.x = -1.0; aw.castShadow = true; c.add(aw);
    for (let j = 0; j < 4; j++) { const m = cut(goods[(k + j) % 3], .45, .3); m.position.set(x - .9 + j * .6, 1.08, zz + .1); c.add(m); }
    const ps = new THREE.Mesh(new THREE.PlaneGeometry(2.2, .43), new THREE.MeshStandardMaterial({ map: fishP })); ps.position.set(x, 1.95, zz + .62); ps.visible = peixe; c.add(ps); stalls.push(ps); });
  const R = rng(9), spots = []; for (let k = 0; k < 400; k++) { const x = (R() - .5) * 20, zz = -6 - R() * 30; if (Math.abs(x) < 2) continue; spots.push([x, zz]); } crowd(c, spots, { raised: .3, jump: .05, seed: 5 });
  const it = [guitarTex(), shoeTex(), breadTex(), fishTex()];
  const ppl = [['hero', null, null, 0, -1.2, .16, 0], ['rosa', 'long', '#6B3A22', -1.6, -3.4, 0, 2], ['terno2', null, null, 1.6, -3.8, 0, 1], ['amarelo', 'afro', '#2a1b18', -.9, -6.5, 0, 3], ['laranja', null, null, 1.3, -7.5, 0, 2]].map(([o, h, hc, x, zz, gl, gi], n) => { const k = makeChar({ outfit: o, hair: h, hairc: hc, lash: !!h, glow: gl }); k.place(x, zz); k.tint('#FFF0DC'); k.ph = n; c.add(k.root); const gi2 = peixe ? 3 : gi; const m = cut(it[gi2], gi2 === 0 ? .4 : .5, gi2 === 0 ? 1.05 : .32); c.add(m); k.it = m; k.gi = gi2; return k; });
  s.update = (t, u) => { uT.value = t; const cam = s.camera; ppl.forEach((k, n) => { k.face(cam); const p = k.root.position; if (n === 0) { k.eye(peixe ? 'happy' : (u < 2.5 ? 'look' : 'sad')); k.walk(u, peixe ? 0 : .5, peixe ? 0 : .5); k.pose({ armL: [40, 50], armR: [12, 8] }); } else { k.eye(peixe ? 'happy' : (Math.sin(u * 2 + n) > 0 ? 'flat' : 'lookl')); k.pose({ armR: [60, 30], armL: [12, 8], head: peixe ? 0 : Math.sin(u * 5 + n) * 10 }); }
      k.it.position.set(p.x + (n === 0 ? -.45 : .55), k.gi === 0 ? 1.0 : 1.55, p.z + .15); pointer(k.it, cam); });
    const K = smooth(0, peixe ? 3.8 : 4.7, u);
    aim(cam, peixe ? [lerp(-2.5, -1.2, K), lerp(2.6, 2.0, K), lerp(5, 3.5, K)] : [lerp(.4, -.4, K), lerp(1.6, 1.8, K), lerp(2.6, 4.6, K)], peixe ? [lerp(-3.4, 0, K), 1.6, -6] : [0, 1.5, -4], -.01);
    return { focus: peixe ? lerp(8, 6, K) : lerp(4, 6, K), range: 4, blur: 11, bloom: .2, bloomT: 1, vig: .38, exposure: 1.02 }; };
  return s;
}

/** 6. Lídia, há 2.600 anos: a primeira moeda — 21.18 a 26.82 */
export function cenaLidia(t0, t1) {
  const s = makeShot(t0, t1, '#D9B47A', 40), c = s.scene; c.fog = new THREE.FogExp2('#E2C08A', .02);
  sky(c, -200, 600, 260, [[0, '#C9A36A'], [.6, '#E6C890'], [1, '#F6E2B6']]);
  const g = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), std('#C8A878', { roughness: 1 })); g.rotation.x = -Math.PI / 2; g.receiveShadow = true; c.add(g);
  // templo com colunas ao fundo, morro
  const tp = new THREE.Group(); tp.add(box(16, .6, 8, std('#E8D8B8'), 0, .3, 0)); for (let i = 0; i < 8; i++) { const col = new THREE.Mesh(new THREE.CylinderGeometry(.35, .4, 6, 18), std('#F0E2C6')); col.position.set(-7 + i * 2, 3.6, 3.4); col.castShadow = true; tp.add(col); } tp.add(box(16.4, .8, 8.2, std('#E8D8B8'), 0, 7.0, 0)); const roof = new THREE.Mesh(new THREE.CylinderGeometry(.01, 9.4, 2.4, 3), std('#D8C4A0')); roof.rotation.z = Math.PI / 2; roof.rotation.y = Math.PI / 2; roof.scale.set(1, 1, .45); roof.position.set(0, 8.4, 0); tp.add(roof); tp.position.set(0, 0, -26); c.add(tp);
  const hill = cut(canvasTex(1600, 400, (x) => { x.clearRect(0, 0, 1600, 400); x.fillStyle = '#B8946A'; x.beginPath(); x.moveTo(0, 400); for (let a = 0; a <= 1600; a += 40) x.lineTo(a, 160 + Math.sin(a * .005) * 90); x.lineTo(1600, 400); x.fill(); }), 300, 75, { blend: true, fog: false }); hill.position.set(0, 20, -120); c.add(hill);
  // banca do mercador com balança e jarros
  c.add(box(3.2, 1.0, 1.2, std('#8E6242'), 0, .5, -1.2)); for (let i = 0; i < 4; i++) { const j = new THREE.Mesh(new THREE.SphereGeometry(.28, 18, 14), std(['#B5523A', '#C9784A', '#8A4A2A'][i % 3])); j.scale.y = 1.3; j.position.set(-1.3 + i * .3, 1.3, -1.5); c.add(j); }
  c.add(box(.06, .8, .06, '#5a4a2a', .9, 1.4, -1.2)); c.add(box(.9, .04, .04, '#5a4a2a', .9, 1.8, -1.2)); for (const sx of [-1, 1]) { const pl = new THREE.Mesh(new THREE.CylinderGeometry(.18, .18, .03, 20), std('#C9A06A', { metalness: .5 })); pl.position.set(.9 + sx * .42, 1.5, -1.2); c.add(pl); }
  const mer = makeChar({ outfit: 'terno3', glow: .1 }); mer.place(-.5, -2.3); mer.tint('#FFE8C0'); c.add(mer.root); const turb = box(.6, .3, .6, std('#E9DCC4'), 0, 0, 0); c.add(turb);
  const coin = cut(lydiaCoinTex(), .7, .7); c.add(coin); const cg = glowSprite('#FFE08A', 1.6, .8); c.add(cg);
  const ppl = [['amarelo', 'bun', '#22161a', 1.8, -3], ['verde', 'long', '#2a1b18', -2.2, -3.6]].map(([o, h, hc, x, z]) => { const k = makeChar({ outfit: o, hair: h, hairc: hc, lash: true, glow: .08 }); k.place(x, z); k.tint('#FFE8C0'); c.add(k.root); return k; });
  const R = rng(4), far = []; for (let i = 0; i < 80; i++) far.push([(R() - .5) * 16, -8 - R() * 14]); crowd(c, far, { raised: .2, jump: .02, tint: '#F0D8B0', seed: 4 });
  c.add(new THREE.HemisphereLight('#FFF0D0', '#B08A5A', 1.0)); c.add(sunLight('#FFE0A8', 3.0, [12, 16, 6], 20, 70));
  s.update = (t, u) => { uT.value = t; const cam = s.camera; mer.face(cam); const mp = mer.root.position; turb.position.set(mp.x, 1.95, mp.z); const up = smooth(2.6, 3.3, u); mer.eye(u < 2.6 ? 'look' : 'happy'); mer.pose({ armR: [lerp(20, 140, up), lerp(-40, 20, up)], armL: [14, -60] });
    coin.position.set(mp.x + .3, lerp(1.25, 2.5, up), mp.z + 1.4); coin.rotation.z = 0; pointer(coin, cam); cg.position.copy(coin.position); cg.material.opacity = .3 + up * .6;
    ppl.forEach((k, i) => { k.face(cam); k.eye(up > .5 ? 'wide' : 'look'); k.pose({ armL: [12, 8], armR: [12, 8], head: up * 6 }); });
    const K = smooth(0, 5.6, u); aim(cam, [lerp(.6, .1, K), lerp(1.8, 2.0, K), lerp(5.8, 2.6, K)], [lerp(0, -.2, K), lerp(1.6, 2.2, K), -1.6], -.01);
    return { focus: lerp(6.6, 3.4, K), range: 2.4, blur: 13, bloom: .4, bloomT: .9, vig: .55, exposure: 1.0, sat: .5, tint: '#FFE2B0' }; };
  return s;
}

/** 7. Prisão: corte de cabelo por dois sobres de cavala — 26.82 a 34.42 */
export function cenaCarcel(t0, t1) {
  const s = makeShot(t0, t1, '#2A2E36', 40), c = s.scene; c.fog = new THREE.FogExp2('#3A4048', .03);
  c.add(tileFloor(20, 24, '#8A8E94', '#7A7E86', 6));
  const wall = box(20, 7, .4, std('#B8B4A8'), 0, 3.5, -4); c.add(wall); c.add(box(20, 1.2, .42, std('#6A7A6A'), 0, .6, -3.98));
  // grades de celas ao fundo
  for (let i = -8; i <= 8; i += 4) { const cell = lightPanel(3, 3.2, '#3A3A30', .3); cell.position.set(i, 1.8, -3.78); c.add(cell); for (let b = 0; b < 9; b++) c.add(box(.06, 3.2, .06, std('#5A5E66', { metalness: .6 }), i - 1.4 + b * .35, 1.8, -3.6)); }
  const lights = []; for (let i = 0; i < 4; i++) { const l = lightPanel(2, .3, '#E8F0FF', 1.6); l.rotation.x = Math.PI / 2; l.position.set(-4 + i * 3, 5.8, -1.5); c.add(l); }
  // cadeira de barbeiro, espelho e prateleira de sobres
  c.add(box(.9, .5, .9, std('#C9361F'), 0, .6, -1.6)); c.add(box(.9, .9, .2, std('#C9361F'), 0, 1.25, -2.05)); c.add(box(.2, .6, .2, std('#C9CDD2', { metalness: .7 }), 0, .2, -1.6));
  const mir = lightPanel(1.4, 1.0, '#9AB0C8', .4); mir.position.set(0, 2.3, -3.75); c.add(mir); c.add(box(1.5, 1.1, .05, '#4A4E56', 0, 2.3, -3.78));
  const ft = fishTex(); c.add(box(2.4, .06, .4, '#6A6E76', 2.6, 1.6, -3.6)); for (let i = 0; i < 8; i++) { const m = cut(ft, .36, .25); m.position.set(1.7 + (i % 4) * .6, 1.76 + Math.floor(i / 4) * .27, -3.5); c.add(m); }
  const cli = makeChar({ outfit: 'laranja', glow: .1 }); cli.place(0, -1.4, .35, .95); cli.tint('#EEF2FF'); c.add(cli.root);
  const bar = makeChar({ outfit: 'laranja', hair: null, glow: .14 }); bar.place(-1.0, -1.0); bar.tint('#EEF2FF'); c.add(bar.root);
  const sc = box(.05, .3, .02, std('#C9CDD2', { metalness: .8 }), 0, 0, 0); c.add(sc);
  const packs = [0, 1].map(() => { const m = cut(ft, .42, .3); c.add(m); return m; }); const pg = glowSprite('#9FD8FF', .9, .4); c.add(pg);
  const hair = []; for (let i = 0; i < 14; i++) { const h = box(.04, .015, .01, '#1A1410', 0, 0, 0, false); c.add(h); hair.push(h); }
  c.add(new THREE.HemisphereLight('#D8E4FF', '#3A3A40', .9)); c.add(sunLight('#F0F4FF', 1.6, [2, 8, 4], 8, 30));
  s.update = (t, u) => { const cam = s.camera; cli.face(cam); bar.face(cam); const bp = bar.root.position, cp = cli.root.position;
    const pay = smooth(4.9, 5.4, u); cli.eye(u < 5.2 ? 'smug' : 'happy'); cli.pose({ armR: [lerp(12, 70, pay), lerp(-60, 0, pay)], armL: [14, -60] });
    const cut2 = u > 1.0 && u < 4.6; bar.eye(u < 5.2 ? 'down' : 'happy'); bar.pose({ armR: [cut2 ? 80 + Math.sin(u * 16) * 10 : 20, cut2 ? 70 : -40], armL: [lerp(14, 50, pay), lerp(8, 40, pay)], head: -6 });
    sc.position.set(bp.x + .55, 1.95 + Math.sin(u * 16) * .03, bp.z + .3); sc.visible = cut2;
    hair.forEach((h, i) => { const k = ((u * .7 + i / 14) % 1); h.visible = cut2; h.position.set(cp.x + Math.sin(i * 3) * .3, 2.0 - k * 1.6, cp.z + .2); h.rotation.z = u * 4 + i; });
    packs.forEach((m, i) => { m.visible = u > 4.9; const k = pay; m.position.set(lerp(cp.x + .5, bp.x + .55, k) + i * .1, 1.55 + i * .12, cp.z + .45); pointer(m, cam); }); pg.visible = u > 4.9; pg.position.copy(packs[0].position);
    const K = smooth(0, 7.4, u); aim(cam, [lerp(1.8, .6, K), lerp(1.7, 1.75, K), lerp(5.4, 3.0, K)], [lerp(-.2, -.4, K), 1.6, -1.4], -.01);
    return { focus: lerp(7, 4.4, K), range: 2.2, blur: 13, bloom: .28, bloomT: .95, vig: .5, exposure: 1.0, sat: .85 }; };
  return s;
}

export const CENAS = [
  [cenaCarteira, 0, 4.72], [cenaBanco, 4.72, 6.80], [cenaDeudas, 6.80, 11.32], [cenaPadaria, 11.32, 16.44],
  [cenaMercado, 16.44, 21.18], [cenaLidia, 21.18, 26.82], [cenaCarcel, 26.82, 34.42],
  [(a, b) => cenaMercado(a, b, true), 34.42, 38.20], [(a, b) => cenaCarteira(a, b, true), 38.20, 999],
];
