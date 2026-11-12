// Cenas 2 a 6: rua com letreiro de LED, terraço, café, rua das lojas, supermercado.
import * as THREE from 'three';
import { makeShot, aim, keys, smooth, lerp, clamp, rng } from './motor/core.js';
import { makeChar, canvasTex } from './motor/char.js';
import { box, std, cut, glowSprite, building, street, lamp, tree, car, skyline, sky, softBlob, pointer } from './motor/kit.js';
import { brickTex, cobbleTex, crowd, phone, uT } from './motor/kit2.js';
import { woodFloor, tileFloor, beam, plant, poster, signTex, lightPanel, sunLight } from './comum.js';

// letreiro de LED com qualquer texto: desenha o texto e amostra em pontos
export function ledCanvas(lines, w = 1200, h = 700, col = '#FF9FC4') { return canvasTex(w, h, (x) => { x.fillStyle = '#12173E'; x.fillRect(0, 0, w, h); const off = document.createElement('canvas'); off.width = w; off.height = h; const o = off.getContext('2d'); o.fillStyle = '#fff'; o.textAlign = 'center'; o.textBaseline = 'middle'; lines.forEach(([t, y, sz]) => { o.font = `900 ${sz}px Inter`; o.fillText(t, w / 2, y); }); const d = o.getImageData(0, 0, w, h).data, st = 13; for (let a = 6; a < h; a += st) for (let b = 6; b < w; b += st) { const on = d[(a * w + b) * 4] > 120; x.fillStyle = on ? col : '#20265C'; x.shadowColor = col; x.shadowBlur = on ? 8 : 0; x.beginPath(); x.arc(b, a, on ? 4.6 : 3, 0, 7); x.fill(); } }); }

const SHOPS = [{ name: 'PANADERÍA', bg: '#6C4A2C', fg: '#FFE7B8', awning: '#3E7A5C' }, { name: 'FARMACIA', bg: '#2F6E5A', fg: '#F0FFF4' }, { name: 'LUNA CAFÉ', bg: '#A85A36', fg: '#FFE3C8', awning: '#D94F58', font: 'Caveat', size: 120 }, { name: 'LIBROS', bg: '#3A4F7A', fg: '#FFF0C8' }, { name: 'FLORES', bg: '#B04463', fg: '#FFF2E2', awning: '#EFEDE0' }];
function rua(c, night, seed = 0, lit = .4) { let z = 6, i = 0; while (z > -90) { const d = 7 + (i * 37 % 5); c.add(building(100 + i + seed, { x: 13, z: z - d / 2, w: 8, d, floors: 4 + i % 3, side: -1, night, lit, shop: SHOPS[(i + seed) % 5] })); c.add(building(200 + i + seed, { x: -13, z: z - d / 2, w: 8, d, floors: 5 + i % 3, side: 1, night, lit, shop: SHOPS[(i + 2 + seed) % 5] })); z -= d; i++; } }

/** 2. Rua ao amanhecer: letreiro de LED e todo mundo procurando sinal — 5.74 a 10.26 */
export function cenaRua(t0, t1) {
  const s = makeShot(t0, t1, '#2A2245', 42), c = s.scene; c.fog = new THREE.FogExp2('#6A4C6E', .012);
  sky(c, -170, 460, 340, [[0, '#1C1C48'], [.5, '#4A3A72'], [.8, '#C46A7A'], [1, '#F6A57A']]); skyline(c, -150, 400, 170, ['#3B2F54', '#4A3A5E', '#5A4468'], true, 6); street(c, true); rua(c, true, 0, .5);
  for (let k = 0; k < 6; k++) { lamp(c, 5, -2 - k * 13, -1, true); lamp(c, -5, -8 - k * 13, 1, true); tree(c, 5.2, -8 - k * 13, 1.05, undefined, k); }
  car(c, -3.1, -9, '#27425A', -1); car(c, 2.8, -22, '#8A2F2F', 1);
  c.add(new THREE.HemisphereLight('#8E86C8', '#2a1f28', .9)); const moon = sunLight('#B9B0F0', 1.0, [-14, 26, 10], 24, 70); c.add(moon);
  // letreiro de LED grande sobre a rua
  const led = ledCanvas([['INTERNET', 230, 200], ['NO DISPONIBLE', 470, 150]]); const lm = new THREE.Mesh(new THREE.PlaneGeometry(9.6, 5.6), new THREE.MeshStandardMaterial({ map: led, emissiveMap: led, emissive: '#ffffff', emissiveIntensity: .9, color: '#000' })); lm.position.set(0, 10.5, -26); c.add(lm); c.add(box(10.2, 6.2, .4, '#1B1B24', 0, 10.5, -26.3)); for (const sx of [-1, 1]) c.add(box(.3, 8, .3, '#2A2A34', sx * 4, 4, -26.2)); const ll = new THREE.PointLight('#FF9FC4', 30, 30, 1.5); ll.position.set(0, 9, -22); c.add(ll);
  // gente na rua com o celular levantado, procurando sinal
  const R = rng(4), spots = []; for (let i = 0; i < 260; i++) { const x = (R() - .5) * 14, z = -6 - R() * 30; spots.push([x, z, Math.abs(x) > 5 ? .14 : 0]); } crowd(c, spots, { raised: .85, jump: .05, tint: '#E8C6D8', seed: 4 });
  const near = [['rosa', 'long', '#6B3A22', -1.4, -2.2], ['terno2', null, null, 1.3, -2.8], ['amarelo', 'afro', '#2a1b18', .1, -4.6]].map(([o, h, hc, x, z], i) => { const k = makeChar({ outfit: o, hair: h, hairc: hc, lash: !!h, glow: .1 }); k.place(x, z); k.tint('#F2DCE8'); k.ph = i * 1.7; c.add(k.root); const p = new THREE.Mesh(new THREE.PlaneGeometry(.14, .26), new THREE.MeshBasicMaterial({ color: '#9FD8FF' })); c.add(p); const gl = glowSprite('#9FD8FF', .6, .5); c.add(gl); k.p = p; k.gl = gl; return k; });
  s.update = (t, u) => { uT.value = t; const cam = s.camera;
    for (const k of near) { k.face(cam); k.eye(Math.sin(u * 2 + k.ph) > .3 ? 'look' : 'lookl'); const up = .6 + .4 * Math.sin(u * 2.4 + k.ph); k.pose({ armR: [150 + up * 10, 10], armL: [10, 8], head: 8 }); const hp = new THREE.Vector3(); k.arms.R.f.getWorldPosition(hp); k.p.position.set(k.root.position.x + .4, 2.05 + up * .08, k.root.position.z + .05); k.gl.position.copy(k.p.position); pointer(k.p, cam); }
    const K = smooth(0, 4.4, u); aim(cam, [lerp(0, .2, K), lerp(8.0, 1.7, K), lerp(3, 5.5, K)], [lerp(0, 0, K), lerp(10.0, 3.6, K), -26], 0);
    return { focus: lerp(14, 8, K), range: lerp(8, 14, K), blur: 10, bloom: .4, bloomT: .9, vig: .5, exposure: 1.0 }; };
  return s;
}

/** 3. Terraço ao sol: ninguém te escreve — 10.26 a 14.72 */
export function cenaTerraco(t0, t1) {
  const s = makeShot(t0, t1, '#9CC8EE', 40), c = s.scene; c.fog = new THREE.FogExp2('#F6D9B6', .006);
  sky(c, -170, 500, 200, [[0, '#5E9AD8'], [.55, '#A9CBE8'], [.85, '#FBD9AE'], [1, '#FFE9C6']]); skyline(c, -120, 420, 70, ['#C9A6A6', '#B898A0', '#A88C98'], false, 9);
  const fl = new THREE.Mesh(new THREE.PlaneGeometry(30, 30), new THREE.MeshStandardMaterial({ map: (() => { const t = canvasTex(256, 256, (x) => { x.fillStyle = '#C9785A'; x.fillRect(0, 0, 256, 256); x.strokeStyle = '#A85E44'; x.lineWidth = 6; for (let i = 0; i <= 256; i += 64) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, 256); x.moveTo(0, i); x.lineTo(256, i); x.stroke(); } }); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(12, 12); return t; })(), roughness: .9 })); fl.rotation.x = -Math.PI / 2; fl.receiveShadow = true; c.add(fl);
  c.add(box(30, 1.0, .3, std('#E9DCC4'), 0, .5, -6)); for (let i = -6; i <= 6; i++) c.add(plant(i * 2.1, 1.0, -6.1, .55, ['#C76B4A', '#36AEA2', '#E9B44C'][(i + 9) % 3]));
  // espreguiçadeira, guarda-sol, mesinha com café e celular virado
  const ch = new THREE.Group(); ch.add(box(1.0, .1, 2.0, std('#F4F0E4'), 0, .45, 0)); ch.add(box(1.0, .1, .9, std('#F4F0E4'), 0, .82, -1.1)); ch.children[1].rotation.x = .9; for (const [x, z] of [[-.45, .9], [.45, .9], [-.45, -.9], [.45, -.9]]) ch.add(box(.06, .45, .06, '#B98A5A', x, .22, z)); const stripe = canvasTex(64, 256, (x) => { for (let i = 0; i < 8; i++) { x.fillStyle = i % 2 ? '#36AEA2' : '#F4F0E4'; x.fillRect(0, i * 32, 64, 32); } }); ch.children[0].material = new THREE.MeshStandardMaterial({ map: stripe }); ch.position.set(0, 0, -1.6); c.add(ch);
  const um = new THREE.Mesh(new THREE.ConeGeometry(2.0, .7, 16, 1, true), new THREE.MeshStandardMaterial({ map: canvasTex(512, 64, (x) => { for (let i = 0; i < 16; i++) { x.fillStyle = i % 2 ? '#E8667F' : '#FFF4DC'; x.fillRect(i * 32, 0, 32, 64); } }), side: THREE.DoubleSide })); um.position.set(1.6, 2.9, -2.4); um.castShadow = true; c.add(um); c.add(box(.06, 2.7, .06, '#888', 1.6, 1.35, -2.4));
  c.add(box(.7, .05, .7, '#F4F0E4', 1.35, .55, -.9)); c.add(box(.06, .52, .06, '#999', 1.35, .27, -.9)); const cup = new THREE.Mesh(new THREE.CylinderGeometry(.07, .06, .1, 20), std('#FFFFFF')); cup.position.set(1.2, .63, -.9); c.add(cup); const ph = box(.16, .015, .3, std('#15151C', { roughness: .2 }), 1.48, .59, -.85); c.add(ph);
  // varal com luzinhas e pássaros
  for (let i = 0; i < 14; i++) { const g = glowSprite(['#FFD27A', '#FF9F7A', '#FFFFFF'][i % 3], .2, .7); g.position.set(-4 + i * .62, 3.6 - Math.sin(i / 13 * Math.PI) * .4, -4.5); c.add(g); }
  const bird = canvasTex(128, 64, (x) => { x.clearRect(0, 0, 128, 64); x.strokeStyle = '#3A3040'; x.lineWidth = 7; x.beginPath(); x.moveTo(8, 20); x.quadraticCurveTo(36, 48, 64, 36); x.quadraticCurveTo(92, 48, 120, 20); x.stroke(); }); const birds = []; for (let i = 0; i < 6; i++) { const b = cut(bird, .5, .25, { blend: true }); c.add(b); birds.push(b); }
  const hero = makeChar({ outfit: 'hero', glow: .16 }); hero.place(-1.0, -.4, 0); hero.tint('#FFF2E2'); c.add(hero.root);
  c.add(new THREE.HemisphereLight('#E9EEFF', '#B08A6A', 1.1)); const sun = sunLight('#FFD29A', 3.2, [-10, 12, 8], 12, 50); c.add(sun);
  s.update = (t, u) => { const cam = s.camera; hero.face(cam); hero.eye(u < 2.8 ? 'happy' : u < 3.6 ? 'smug' : 'look'); hero.pose({ armL: [150, 120], armR: [150, 120], lean: 0, head: u > 3.6 ? 5 : 0, bob: Math.sin(u * 1.5) * .01 });
    birds.forEach((b, i) => { b.position.set(-6 + ((u * 1.4 + i * 2.3) % 14), 5 + Math.sin(i * 2) * .8, -10 - i); b.scale.y = .6 + .4 * Math.abs(Math.sin(u * 8 + i)); pointer(b, cam); });
    const K = smooth(0, 4.4, u); aim(cam, [lerp(1.6, .6, K), lerp(1.3, 1.5, K), lerp(4.2, 2.6, K)], [lerp(-.4, -.6, K), 1.2, -1.0], -.01);
    return { focus: lerp(5.0, 3.4, K), range: 2.2, blur: 14, bloom: .25, bloomT: 1, vig: .35, exposure: 1.04 }; };
  return s;
}

/** 4. Café: a maquininha não passa — 14.72 a 20.08 */
export function cenaCafe(t0, t1) {
  const s = makeShot(t0, t1, '#3A2418', 40), c = s.scene; c.fog = new THREE.FogExp2('#5A3A28', .02);
  c.add(woodFloor(16, 14, '#5F3F2C'));
  const wall = new THREE.Mesh(new THREE.PlaneGeometry(16, 7), new THREE.MeshStandardMaterial({ map: (() => { const t = canvasTex(256, 256, (x) => { x.fillStyle = '#2F6E68'; x.fillRect(0, 0, 256, 256); x.strokeStyle = '#285E59'; x.lineWidth = 4; for (let i = 0; i < 256; i += 32) { x.strokeRect(0, i, 256, 32); } }); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(5, 3); return t; })() })); wall.position.set(0, 3.5, -3.2); wall.receiveShadow = true; c.add(wall);
  // balcão com tampo de madeira, máquina de café, vitrine de doces
  c.add(box(6, 1.05, .9, std('#8E5A3A'), 0, .52, -.2)); c.add(box(6.2, .07, 1.0, std('#D9B48A'), 0, 1.08, -.2));
  const mach = new THREE.Group(); mach.add(box(1.1, .7, .55, std('#C9CDD2', { metalness: .6, roughness: .25 }), 0, .35, 0)); mach.add(box(.9, .12, .5, std('#222'), 0, .76, 0)); for (const x of [-.25, .25]) mach.add(box(.08, .16, .08, std('#333'), x, .1, .3)); mach.position.set(-1.6, 1.12, -.35); c.add(mach);
  const vit = box(1.3, .5, .6, new THREE.MeshStandardMaterial({ color: '#CFE8F0', transparent: true, opacity: .35 }), 1.7, 1.37, -.3); c.add(vit); [['#E8667F', 1.3], ['#E9B44C', 1.6], ['#8A5A3A', 1.9], ['#F4F0E4', 2.2]].forEach(([k, x]) => { const d = new THREE.Mesh(new THREE.CylinderGeometry(.11, .11, .1, 20), std(k)); d.position.set(x, 1.2, -.3); c.add(d); });
  // quadro de menu e prateleira com xícaras
  const menu = poster(2.2, 1.4, (x) => { x.fillStyle = '#1F2622'; x.fillRect(0, 0, 880, 560); x.fillStyle = '#F4EEDC'; x.font = '700 76px Caveat'; x.textAlign = 'center'; x.fillText('Menú', 440, 90); x.font = '700 54px Caveat'; x.textAlign = 'left'; [['Café', '2,50'], ['Café con leche', '3,00'], ['Medialuna', '1,80'], ['Torta', '4,50']].forEach(([a, b], i) => { x.fillText(a, 70, 200 + i * 90); x.fillText(b, 680, 200 + i * 90); }); }, '#6B4A33'); menu.position.set(-1.2, 3.4, -3.15); c.add(menu);
  c.add(box(2.4, .06, .3, '#8E6242', 1.8, 2.7, -3.0)); for (let i = 0; i < 6; i++) { const m = new THREE.Mesh(new THREE.CylinderGeometry(.07, .06, .12, 16), std(['#E8667F', '#F4F0E4', '#E9B44C'][i % 3])); m.position.set(.9 + i * .36, 2.8, -3.0); c.add(m); }
  for (let i = 0; i < 3; i++) { const l = new THREE.Mesh(new THREE.SphereGeometry(.16, 20, 14), new THREE.MeshStandardMaterial({ color: '#FFE0A0', emissive: '#FFC070', emissiveIntensity: 2.5 })); l.position.set(-2 + i * 2, 4.2, -1); c.add(l); c.add(box(.02, 2.4, .02, '#222', -2 + i * 2, 5.4, -1, false)); const g = glowSprite('#FFC070', 1.4, .45); g.position.copy(l.position); c.add(g); const pl = new THREE.PointLight('#FFC070', 6, 7, 1.6); pl.position.copy(l.position); c.add(pl); }
  c.add(plant(-3.4, 0, -2.6, 1.2));
  const bar = makeChar({ outfit: 'avental', hair: 'bun', hairc: '#22161a', lash: true, glow: .12 }); bar.place(-.35, -1.3); bar.tint('#FFE6CC'); c.add(bar.root);
  const hero = makeChar({ outfit: 'hero', glow: .16 }); hero.place(-1.4, .9); hero.tint('#FFE6CC'); c.add(hero.root);
  // maquininha de cartão
  const tT = document.createElement('canvas'); tT.width = 256; tT.height = 200; const tx = tT.getContext('2d'); const tTex = new THREE.CanvasTexture(tT); tTex.colorSpace = THREE.SRGBColorSpace; let last = -1;
  const paintT = (st) => { if (st === last) return; last = st; tx.fillStyle = st ? '#9E2418' : '#2A6A9A'; tx.fillRect(0, 0, 256, 200); tx.fillStyle = '#fff'; tx.textAlign = 'center'; tx.font = '800 40px Inter'; tx.fillText(st ? 'ERROR' : '2,50', 128, 84); tx.font = '700 22px Inter'; tx.fillText(st ? 'SIN CONEXIÓN' : 'ACERQUE LA TARJETA', 128, 140); tTex.needsUpdate = true; };
  const term = new THREE.Group(); term.add(box(.32, .5, .1, std('#22232A', { roughness: .4 }), 0, 0, 0)); const scr = new THREE.Mesh(new THREE.PlaneGeometry(.26, .2), new THREE.MeshBasicMaterial({ map: tTex, color: '#C8C8C8' })); scr.position.set(0, .1, .052); term.add(scr); for (let i = 0; i < 9; i++) term.add(box(.06, .035, .02, '#5A5B66', -.08 + (i % 3) * .08, -.07 - Math.floor(i / 3) * .055, .055, false)); term.position.set(.55, 1.36, .15); term.rotation.x = -.25; term.scale.setScalar(1.4); c.add(term); const tg = new THREE.PointLight('#FF5A40', 0, 1.5, 1.6); tg.position.set(.55, 1.5, .5); c.add(tg);
  const card = box(.3, .19, .01, std('#C99A3C', { roughness: .7 }), .55, 1.45, .45); c.add(card);
  c.add(new THREE.HemisphereLight('#FFE0C0', '#3a2418', .7)); const key = sunLight('#FFD6A0', 1.6, [4, 6, 6], 8, 30); c.add(key);
  const win = beam(2.2, 7, '#FFD9A0', .14); win.position.set(2.6, 2.5, .4); win.rotation.set(-.6, -.4, .3); c.add(win);
  s.update = (t, u) => { const cam = s.camera; const err = u > 2.0 ? 1 : 0; paintT(err); tg.intensity = err ? .6 + Math.sin(u * 14) * .2 : 0;
    const tap = smooth(1.2, 1.6, u) * (1 - smooth(2.6, 3.0, u)); card.position.set(.55 - smooth(2.6, 3.0, u) * .9, 1.45 - tap * .03 - smooth(2.6, 3.0, u) * .3, .45 - tap * .22);
    bar.face(cam); bar.eye(err ? (u < 3.6 ? 'wide' : 'flat') : 'happy'); bar.pose({ armL: [14, -40], armR: [err ? 40 : 14, err ? 60 : -30], head: err ? -6 : 0 });
    hero.face(cam);  hero.eye(err ? 'wide' : 'happy'); hero.pose({ armR: [30, -30], armL: [10, 8] });
    const K = smooth(.3, 3.0, u), K2 = smooth(3.0, 5.4, u);
    aim(cam, [lerp(-1.2, .9, K) + K2 * .1, lerp(1.7, 1.6, K), lerp(5.4, 2.3, K) - K2 * .2], [lerp(-.6, .45, K), lerp(1.5, 1.55, K), lerp(-1, -.3, K)], -.01);
    return { focus: lerp(5.5, 2.1, K) - K2 * .2, range: lerp(2, 1.2, K), blur: 15, bloom: .22, bloomT: 1, vig: .5, exposure: 1.0, tint: '#FFF0E0' }; };
  return s;
}

/** 5. Rua das lojas: 640 milhões de pagamentos, hoje zero — 20.08 a 25.88 */
export function cenaLojas(t0, t1) {
  const s = makeShot(t0, t1, '#F1C39A', 42), c = s.scene; c.fog = new THREE.FogExp2('#F7CFA4', .009);
  sky(c, -170, 500, 180, [[0, '#6FA7D8'], [.5, '#CFD8DC'], [.8, '#FBD7A6'], [1, '#FFE7BE']]); skyline(c, -150, 420, 90, ['#B89AA0', '#A98E9A', '#9A8592'], false, 21); street(c, false); rua(c, false, 2, .2);
  for (let k = 0; k < 6; k++) { tree(c, 5.2, -6 - k * 11, 1.2, ['#3E5F3A', '#4F7A44', '#6E9A50', '#D7D282'], k); lamp(c, -5, -3 - k * 12, 1, false); }
  car(c, -2.6, -14, '#D7D7D2', -1, false); car(c, 2.6, -30, '#36AEA2', 1, false);
  c.add(new THREE.HemisphereLight('#E9EEFF', '#B08A6A', 1.1)); const sun = sunLight('#FFD29A', 3.0, [-20, 16, 10], 30, 90); c.add(sun);
  // cartazes "SOLO EFECTIVO" nas vitrines
  const sol = signTex('SOLO EFECTIVO', '#FBF7EC', '#C9361F', 768, 256, 'Fraunces', 92); for (let i = 0; i < 7; i++) { const m = new THREE.Mesh(new THREE.PlaneGeometry(1.5, .5), new THREE.MeshStandardMaterial({ map: sol })); const side = i % 2 ? 1 : -1; m.position.set(side * 8.9, 1.9, -3 - i * 6.5); m.rotation.y = -side * Math.PI / 2; c.add(m); }
  // fila de gente com cartão na mão, sem saber o que fazer
  const cardT = canvasTex(64, 40, (x) => { x.fillStyle = '#E9B44C'; x.fillRect(0, 0, 64, 40); x.fillStyle = '#8A5E16'; x.fillRect(6, 10, 14, 10); });
  const ppl = [['rosa', 'long', '#6B3A22', -6.2, -3.2], ['terno2', null, null, -6.6, -6.4], ['amarelo', 'afro', '#2a1b18', 6.4, -4.0], ['azul', 'bob', '#D9B65A', 6.0, -8.2], ['roxo', 'bun', '#3a2030', -6.0, -10.5], ['laranja', null, null, 6.5, -12.4]].map(([o, h, hc, x, z], i) => { const k = makeChar({ outfit: o, hair: h, hairc: hc, lash: !!h, glow: .1 }); k.place(x, z, .14); k.tint('#FFF0DC'); k.ph = i * 1.3; c.add(k.root); const cd = cut(cardT, .22, .14); c.add(cd); k.cd = cd; return k; });
  const R = rng(3), far = []; for (let i = 0; i < 90; i++) { const sd = R() < .5 ? -1 : 1; far.push([sd * (5.6 + R() * 1.4), -14 - R() * 40, .14]); } crowd(c, far, { raised: .3, jump: .02, seed: 7 });
  s.update = (t, u) => { uT.value = t; const cam = s.camera; for (const k of ppl) { k.face(cam); k.eye(u > 4.3 ? 'sad' : (Math.sin(u + k.ph) > 0 ? 'look' : 'lookl')); k.pose({ armR: [70 + Math.sin(u * 2 + k.ph) * 8, 20], armL: [10, 8], head: Math.sin(u + k.ph) * 4 }); k.cd.position.set(k.root.position.x + .62, 1.75 + Math.sin(u * 2 + k.ph) * .05, k.root.position.z + .1); pointer(k.cd, cam); }
    const K = smooth(0, 5.8, u); aim(cam, [lerp(-3.4, -3.0, K), lerp(1.6, 1.9, K), lerp(3, -1.5, K)], [lerp(-6.2, -5.8, K), lerp(1.7, 1.8, K), lerp(-6, -14, K)], -.015);
    return { focus: lerp(9.5, 10, K), range: 8, blur: 10, bloom: .2, bloomT: 1, vig: .36, exposure: 1.02, sat: lerp(1, .8, smooth(4.3, 5, u)) }; };
  return s;
}

/** 6. Supermercado: ninguém sabe o que mandar — 25.88 a 30.48 */
export function cenaMercado(t0, t1) {
  const s = makeShot(t0, t1, '#ECECE4', 44), c = s.scene; c.fog = new THREE.FogExp2('#E6E2D6', .022);
  const R = rng(14); const colors = ['#C64236', '#EABA42', '#36AEA2', '#4A86C7', '#D2728A', '#E8843E', '#F4F0E4', '#3F8A52', '#7A3248'];
  const fl = tileFloor(9, 70); fl.position.z = -25; c.add(fl); c.add(box(9, .1, 70, '#EFEEE6', 0, 5.6, -25, false));
  for (let i = 0; i < 12; i++) { c.add(box(1, .06, 2.6, new THREE.MeshStandardMaterial({ color: '#fff', emissive: '#FFF6DE', emissiveIntensity: 1.8 }), 0, 5.52, 4 - i * 5.6, false)); if (i < 5) { const pl = new THREE.PointLight('#FFF3D8', 9, 11, 1.5); pl.position.set(0, 5, 4 - i * 5.6); c.add(pl); } }
  const items = 900, im = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial({ roughness: .75 }), items); let n = 0; const dm = new THREE.Object3D(), col = new THREE.Color();
  for (const side of [-1, 1]) { const X = side * 3.1; c.add(box(.7, 4.8, 70, '#8F96A3', X + side * .55, 2.4, -25)); for (let lv = 0; lv < 5; lv++) { const y = .42 + lv * .86; c.add(box(1.2, .05, 70, '#DDE0E4', X, y, -25)); c.add(box(.05, .1, 70, '#F7F7F2', X - side * .6, y + .03, -25)); }
    for (let lv = 0; lv < 5; lv++) for (let z = 8; z > -60;) { const w = .3 + R() * .5, h = .34 + R() * .4; const stock = .25 + .2 * Math.sin(z * .3 + lv); if (R() < stock && n < items) { dm.position.set(X + side * .05, .42 + lv * .86 + h / 2 + .03, z); dm.scale.set(.85, h, w); dm.updateMatrix(); im.setMatrixAt(n, dm.matrix); im.setColorAt(n, col.set(colors[Math.floor(R() * colors.length)])); n++; } z -= w + .03; } }
  im.count = n; im.castShadow = true; im.receiveShadow = true; c.add(im);
  [['FRUTAS', 2.6, '#3F8A52'], ['PAN', -5, '#8A6C2A'], ['LECHE', -13, '#3A5F8F']].forEach(([w, z, b]) => { const t = signTex(w, b, '#FFF4DC', 640, 200, 'Fraunces', 118); const m = new THREE.Mesh(new THREE.PlaneGeometry(2.6, .82), new THREE.MeshStandardMaterial({ map: t, emissiveMap: t, emissive: new THREE.Color(.28, .28, .28) })); m.position.set(0, 3.95, z); c.add(m); });
  // caminhão parado lá no fundo pela porta? não: funcionário com prancheta e tela de pedidos com erro
  const scrT = signTex('PEDIDOS: ERROR', '#1B2236', '#FF6B5A', 768, 200, 'IBM Plex Mono', 74, 700); const scr = new THREE.Mesh(new THREE.PlaneGeometry(2.2, .58), new THREE.MeshStandardMaterial({ map: scrT, emissiveMap: scrT, emissive: '#ffffff', emissiveIntensity: .8 })); scr.position.set(0, 3.2, -1.2); c.add(scr); c.add(box(2.3, .66, .08, '#111', 0, 3.2, -1.26));
  const emp = makeChar({ outfit: 'verde', hair: 'bob', hairc: '#3a2418', lash: true, glow: .12 }); emp.place(-.5, -2.2); emp.tint('#FFFFFF'); c.add(emp.root);
  const emp2 = makeChar({ outfit: 'terno3', glow: .1 }); emp2.place(.8, -3.4); emp2.tint('#FFFFFF'); c.add(emp2.root);
  const clip = box(.3, .4, .02, std('#C9A06A'), 0, 0, 0); c.add(clip); const paper = box(.26, .3, .01, std('#FFFFFF'), 0, 0, 0); c.add(paper);
  const boxes = []; for (let i = 0; i < 5; i++) { const b = box(.6, .45, .5, std('#C9A06A'), -1.6 + (i % 2) * .4, .23 + Math.floor(i / 2) * .46, -3 + (i % 3) * .3); c.add(b); }
  c.add(new THREE.HemisphereLight('#FFFFFF', '#B9B3A6', .85)); const key = sunLight('#FFF6E0', .7, [1, 8, 6], 8, 30); c.add(key);
  s.update = (t, u) => { const cam = s.camera; emp.face(cam); emp2.face(cam); emp.eye(u < 2.2 ? 'down' : 'wide'); emp.pose({ armL: [20, -60], armR: [u > 2.2 ? 150 : 20, u > 2.2 ? 140 : -60], head: u > 2.2 ? 8 : -4 }); emp2.eye(u < 2.4 ? 'look' : 'lookl'); emp2.pose({ armL: [60, 40], armR: [60, 40] });
    const p = emp.root.position; clip.position.set(p.x + .05, 1.1, p.z + .2); paper.position.set(p.x + .05, 1.1, p.z + .215);
    const K = smooth(0, 4.6, u); aim(cam, [lerp(.3, -.1, K), lerp(1.5, 1.7, K), lerp(5.0, 2.9, K)], [0, lerp(2.0, 2.2, K), -4], -.01);
    return { focus: lerp(7, 4.2, K), range: 3, blur: 11, bloom: .25, bloomT: 1, vig: .35, exposure: 1.0 }; };
  return s;
}
