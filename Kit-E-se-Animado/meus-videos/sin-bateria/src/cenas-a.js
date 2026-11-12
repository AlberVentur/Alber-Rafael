// Cenas 1 a 8 (0 a 51 s)
import * as THREE from 'three';
import { makeShot, aim, keys, smooth, lerp, clamp, rng } from './motor/core.js';
import { makeChar, canvasTex } from './motor/char.js';
import { box, std, cut, glowSprite, softBlob, pointer } from './motor/kit.js';
import { cobbleTex, crowd, uT } from './motor/kit2.js';
import { tileFloor, woodFloor, beam, plant, poster, signTex, lightPanel, sunLight } from './comum.js';
import { zeroPhone, outlet, cable, setCable, wallPhone, sala, rua, person, CAST } from './pecas.js';

/** 1. Quarto: celular em 0 % — 0 a 5.20 */
export function cenaQuarto(t0, t1) {
  const s = makeShot(t0, t1, '#E9B48C', 32), c = s.scene; sala(c);
  // cama
  c.add(box(2.4, .45, 3.2, std('#6B4A33'), -1.2, .25, -.8)); c.add(box(2.3, .3, 3.0, std('#F3EEE4'), -1.2, .6, -.8)); c.add(box(2.38, .22, 2.0, std('#E8667F', { roughness: .9 }), -1.2, .8, -.1)); c.add(box(2.4, 1.3, .16, std('#5A3C28'), -1.2, .9, -2.35)); c.add(box(.8, .22, .5, std('#FFFFFF'), -1.7, .82, -1.9)); c.add(box(.8, .22, .5, std('#F6E6C8'), -.7, .82, -1.9));
  c.add(box(.8, .6, .6, std('#8E6242'), 1.0, .3, -2.0)); const ph = zeroPhone(.2, .41); ph.rotation.x = -Math.PI / 2 + .25; ph.position.set(1.0, .64, -1.85); c.add(ph); const pg = glowSprite('#E2483A', .5, .5); pg.position.set(1.0, .7, -1.8); c.add(pg);
  const hero = makeChar({ outfit: 'hero', glow: .14 }); hero.place(.3, -.9, 0); hero.tint('#FFE6CC'); c.add(hero.root);
  s.update = (t, u) => { const cam = s.camera; hero.face(cam); const wake = smooth(.2, .6, u); hero.eye(u < .3 ? 'shut' : u < 1.6 ? 'look' : u < 3.0 ? 'wide' : 'sad'); hero.pose({ armL: [lerp(10, 150, wake) * (u < 1.2 ? 1 : 0) + 12, 20], armR: [u > 1.4 ? 40 : 12, u > 1.4 ? 60 : 8], head: u > 3 ? -8 : 0 }); pg.material.opacity = .3 + .3 * Math.abs(Math.sin(u * 3));
    const K = smooth(1.0, 4.6, u); aim(cam, [lerp(1.0, .1, K), lerp(1.0, 1.6, K), lerp(-1.0, 3.6, K)], [lerp(1.0, -.1, K), lerp(.62, 1.3, K), lerp(-1.85, -1.0, K)], 0);
    return { focus: lerp(.9, 4.5, K), range: lerp(.3, 2, K), blur: 14, bloom: .3, bloomT: .95, vig: .45, exposure: 1.02 }; };
  return s;
}

/** 2 e 14. Muro com tomadas: todo mundo plugado na parede (manhã / fim de tarde com relógio) */
export function cenaMuro(t0, t1, tarde = false) {
  const s = makeShot(t0, t1, '#F1C39A', 34), c = s.scene; rua(c, { seed: tarde ? 3 : 0, dusk: tarde });
  const R = rng(tarde ? 4 : 2), ppl = [];
  for (let i = 0; i < 9; i++) { const z = 1 - i * 2.4, x = 7.95; const ot = outlet(); ot.rotation.y = -Math.PI / 2; ot.position.set(8.9, .9, z); c.add(ot); const k = person(c, CAST[i % CAST.length], x - .3 - R() * .2, z + .2, .14, tarde ? '#FFD8C0' : '#FFF0DC', i === 1 ? .14 : .05); k.ph = R() * 6; const ph = zeroPhone(.12, .24); ph.paint(0); c.add(ph); const cb = cable([[8.88, .9, z], [8.5, .4, z + .1], [x - .2, 1.1, z + .3]], '#F4F0E4', .01); c.add(cb); k.ph2 = ph; k.cb = cb; k.z = z; ppl.push(k); }
  if (tarde) { const clk = canvasTex(256, 256, (x) => { x.fillStyle = '#F4F0E4'; x.beginPath(); x.arc(128, 128, 120, 0, 7); x.fill(); x.strokeStyle = '#2A2A34'; x.lineWidth = 10; x.stroke(); x.lineWidth = 8; x.beginPath(); x.moveTo(128, 128); x.lineTo(128, 50); x.moveTo(128, 128); x.lineTo(190, 160); x.stroke(); }); const cm = cut(clk, 1.2, 1.2); cm.position.set(8.8, 3.6, -6); cm.rotation.y = -Math.PI / 2; c.add(cm); c.add(box(.1, 3.4, .1, '#2A2A34', 8.8, 1.7, -6)); }
  s.update = (t, u) => { const cam = s.camera; ppl.forEach((k, i) => { k.face(cam); k.eye(tarde ? (Math.sin(u * .7 + k.ph) > .5 ? 'flat' : 'down') : (Math.sin(u + k.ph) > 0 ? 'down' : 'look')); k.pose({ armR: [30, -60], armL: [12, 8], head: -8, bob: tarde ? Math.sin(u * 2 + k.ph) * .01 : 0 }); const hp = k.root.position; k.ph2.position.set(hp.x - .02, 1.12, hp.z + .32); pointer(k.ph2, cam); });
    const K = smooth(0, t1 - t0, u); aim(cam, tarde ? [lerp(4.0, 4.6, K), lerp(1.7, 1.9, K), lerp(4.5, -1.0, K)] : [lerp(4.4, 3.6, K), lerp(1.6, 2.2, K), lerp(-12, 4, K)], tarde ? [8.0, 1.5, lerp(-4, -10, K)] : [lerp(8.0, 8.0, K), 1.4, lerp(-17, -3, K)], 0);
    return { focus: tarde ? 6.5 : 6.2, range: 4, blur: 10, bloom: tarde ? .35 : .2, bloomT: .95, vig: .4, exposure: 1.02 }; };
  return s;
}

/** 3. Terraço: adeus medo de 1 % — 11.58 a 16.42 */
export function cenaTerraco(t0, t1) {
  const s = makeShot(t0, t1, '#9CC8EE', 32), c = s.scene; c.fog = new THREE.FogExp2('#F6D9B6', .006);
  const { sky, skyline } = KIT; sky(c, -170, 500, 200, [[0, '#5E9AD8'], [.55, '#A9CBE8'], [.85, '#FBD9AE'], [1, '#FFE9C6']]); skyline(c, -120, 420, 70, ['#C9A6A6', '#B898A0', '#A88C98'], false, 9);
  const fl = tileFloor(30, 30, '#C9785A', '#BA6C50', 4); c.add(fl);
  c.add(box(30, 1.0, .3, std('#E9DCC4'), 0, .5, -5)); for (let i = -7; i <= 7; i++) c.add(plant(i * 2.1, 1.0, -5.1, .55, ['#C76B4A', '#36AEA2', '#E9B44C'][(i + 9) % 3]));
  for (let i = 0; i < 18; i++) { const g = glowSprite(['#FFD27A', '#FF9F7A', '#FFFFFF'][i % 3], .2, .7); g.position.set(-5 + i * .6, 3.6 - Math.sin(i / 17 * Math.PI) * .4, -4.2); c.add(g); }
  const ch = new THREE.Group(); ch.add(box(1.0, .1, 2.0, std('#36AEA2'), 0, .45, 0)); for (const [x, z] of [[-.45, .9], [.45, .9], [-.45, -.9], [.45, -.9]]) ch.add(box(.06, .45, .06, '#B98A5A', x, .22, z)); ch.position.set(1.6, 0, -1.6); c.add(ch);
  const hero = makeChar({ outfit: 'hero', glow: .16 }); hero.place(0, -1.2); hero.tint('#FFF2E2'); c.add(hero.root);
  const bat = canvasTex(400, 200, (x) => { x.clearRect(0, 0, 400, 200); x.strokeStyle = '#FBF7EC'; x.lineWidth = 16; x.beginPath(); x.roundRect(20, 30, 320, 140, 22); x.stroke(); x.fillStyle = '#FBF7EC'; x.fillRect(344, 75, 30, 50); x.fillStyle = '#E2483A'; x.fillRect(40, 50, 26, 100); x.fillStyle = '#FBF7EC'; x.font = '900 70px Inter'; x.textAlign = 'center'; x.fillText('1%', 200, 128); }); const bm = cut(bat, 1.2, .6); c.add(bm);
  const xt = canvasTex(256, 256, (x) => { x.clearRect(0, 0, 256, 256); x.strokeStyle = '#E2483A'; x.lineWidth = 30; x.lineCap = 'round'; x.beginPath(); x.moveTo(30, 30); x.lineTo(226, 226); x.moveTo(226, 30); x.lineTo(30, 226); x.stroke(); }); const xm = cut(xt, .8, .8); c.add(xm);
  c.add(new THREE.HemisphereLight('#E9EEFF', '#B08A6A', 1.1)); c.add(sunLight('#FFD29A', 3.2, [-10, 12, 8], 12, 50));
  s.update = (t, u) => { const cam = s.camera; hero.face(cam); const cross = smooth(1.2, 1.5, u); hero.eye(u < 3.2 ? 'happy' : 'look'); hero.pose(u < 3.2 ? { armL: [150, 120], armR: [150, 120], bob: Math.abs(Math.sin(u * 5)) * .03 } : { armL: [12, 8], armR: [12, 8], head: 6 });
    bm.position.set(.9, 2.3, -1.0); pointer(bm, cam); xm.visible = cross > .02; xm.scale.setScalar(.2 + cross * .8); xm.position.set(.9, 2.3, -.95); pointer(xm, cam);
    const K = smooth(0, 4.8, u); aim(cam, [lerp(-.6, .6, K), lerp(1.5, 1.7, K), lerp(5.0, 4.0, K)], [lerp(.2, .4, K), 1.6, -1.2], -.01);
    return { focus: lerp(6.2, 5.2, K), range: 2, blur: 12, bloom: .25, bloomT: 1, vig: .35, exposure: 1.04 }; };
  return s;
}
import * as KIT from './motor/kit.js';

/** 4. Sala: o cabo de um metro — 16.42 a 23.34 */
export function cenaCabo(t0, t1) {
  const s = makeShot(t0, t1, '#E9B48C', 32), c = s.scene; sala(c, { win: false, wall: '#2F6E68' });
  const ot = outlet(); ot.position.set(-2.6, .5, -2.83); c.add(ot);
  // geladeira e TV longe
  c.add(box(1.0, 2.2, .8, std('#EDEAE2'), 3.4, 1.1, -2.4)); c.add(box(.05, .6, .05, '#888', 3.0, 1.5, -1.98)); const tv = lightPanel(1.6, .9, '#3A6A9A', .6); tv.position.set(.6, 1.6, -2.83); c.add(tv); c.add(box(1.7, 1.0, .05, '#111', .6, 1.6, -2.86)); c.add(box(1.8, .5, .5, std('#8E6242'), .6, .25, -2.5));
  const sofa = new THREE.Group(); sofa.add(box(2.4, .45, 1.0, std('#B23C33'), 0, .3, 0)); sofa.add(box(2.4, .9, .3, std('#B23C33'), 0, .7, -.45)); sofa.position.set(.6, 0, .6); sofa.rotation.y = Math.PI; c.add(sofa);
  const hero = makeChar({ outfit: 'hero', glow: .16 }); hero.place(-1.6, -1.6); hero.tint('#FFE6CC'); c.add(hero.root);
  const ph = zeroPhone(.14, .29); c.add(ph); const cb = cable([[-2.6, .5, -2.8], [-2.2, .1, -2.3], [-1.6, 1.0, -1.4]], '#F4F0E4', .012); c.add(cb);
  const mt = signTex('1 m', '#F2C14E', '#2A2A34', 256, 128, 'Fraunces', 90); const mm = cut(mt, .5, .25); c.add(mm);
  s.update = (t, u) => { const cam = s.camera; hero.face(cam);
    const pull = smooth(1.0, 2.6, u) * (1 - smooth(4.6, 5.0, u)); const yank = u > 2.6 && u < 4.6 ? Math.sin(u * 18) * .03 : 0;
    const hx = lerp(-1.6, -1.65 + .1, pull) + yank, hz = -1.6 + pull * .1; hero.root.position.x = hx; hero.root.position.z = hz; hero.walk(u, pull > .05 && pull < .95 ? .9 : 0, .6);
    hero.eye(u < 1.0 ? 'happy' : u < 3.0 ? 'look' : u < 5.0 ? 'angry' : 'sad'); hero.pose({ armR: [30, -60], armL: [u > 2.6 && u < 4.6 ? 90 : 12, 8], lean: u > 2.6 && u < 4.6 ? -10 : 0, head: u > 5 ? -8 : 0 });
    const hp = [hx + .3, 1.15, hz + .35]; ph.position.set(...hp); pointer(ph, cam); setCable(cb, [[-2.6, .5, -2.8], [lerp(-2.4, -2.1, pull), lerp(.1, .55, pull), lerp(-2.4, -2.0, pull)], [hp[0] - .05, hp[1] - .1, hp[2]]]);
    mm.visible = u > 3.6 && u < 5.6; mm.position.set(-2.0, 1.7, -2.0); pointer(mm, cam);
    const K = smooth(0, 6.9, u); aim(cam, [lerp(-.6, .9, K), lerp(1.6, 1.9, K), lerp(3.4, 5.0, K)], [lerp(-1.8, -.4, K), lerp(1.2, 1.4, K), -1.8], 0);
    return { focus: lerp(5.2, 7.0, K), range: 3, blur: 10, bloom: .25, bloomT: 1, vig: .45, exposure: 1.02 }; };
  return s;
}

/** 5. Praça: bilhões e um só enchufe — 23.34 a 32.04 */
export function cenaPraca(t0, t1) {
  const s = makeShot(t0, t1, '#F1C39A', 36), c = s.scene; rua(c, { seed: 1 });
  const g = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), new THREE.MeshStandardMaterial({ map: cobbleTex('#B49F8C', 24, 24), roughness: .9 })); g.rotation.x = -Math.PI / 2; g.position.set(0, .01, -14); g.receiveShadow = true; c.add(g);
  const post = new THREE.Group(); post.add(box(.5, 1.4, .5, std('#4A86C7'), 0, .7, 0)); post.add(box(.6, .1, .6, std('#2F5A8A'), 0, 1.45, 0)); const ot = outlet(); ot.position.set(0, 1.0, .26); post.add(ot); const gl = glowSprite('#9FE0FF', 1.2, .6); gl.position.set(0, 1.0, .5); post.add(gl); post.position.set(0, 0, -12); c.add(post);
  const R = rng(9), spots = []; for (let i = 0; i < 1600; i++) { const a = R() * Math.PI * 2, r = 1.2 + Math.pow(R(), .7) * 16; spots.push([Math.cos(a) * r, -12 + Math.sin(a) * r * .9]); } crowd(c, spots, { raised: .9, jump: .1, seed: 9 });
  const near = [0, 1, 2, 3].map(i => person(c, CAST[i + 2], -1.6 + i * 1.1, -9.6 - (i % 2) * .4, 0, '#FFF0DC', .08)); near.forEach(k => { const ph = zeroPhone(.12, .24); ph.paint(0); c.add(ph); k.ph = ph; });
  s.update = (t, u) => { uT.value = t; const cam = s.camera; near.forEach((k, i) => { k.face(cam); k.eye(i % 2 ? 'wide' : 'look'); k.pose({ armR: [150, 10], armL: [12, 8] }); k.ph.position.set(k.root.position.x + .42, 2.05 + Math.sin(u * 3 + i) * .05, k.root.position.z + .05); pointer(k.ph, cam); });
    const K = smooth(0, 8.7, u); aim(cam, [lerp(0, .5, K), lerp(1.8, 14, K), lerp(-6.4, 12, K)], [0, lerp(1.6, 0, K), -12], 0);
    return { focus: lerp(5.8, 30, K), range: lerp(3, 30, K), blur: 9, bloom: .25, bloomT: .95, vig: .4, exposure: 1.02 }; };
  return s;
}

/** 6. Café: a mesa com tomada custa mais que o café — 32.04 a 35.98 */
export function cenaCafe(t0, t1) {
  const s = makeShot(t0, t1, '#3A2418', 32), c = s.scene; c.fog = new THREE.FogExp2('#5A3A28', .02);
  c.add(woodFloor(16, 14, '#5F3F2C')); const wall = box(16, 7, .3, std('#2F6E68'), 0, 3.5, -3.2); c.add(wall);
  const menu = poster(2.0, 1.2, (x) => { x.fillStyle = '#1F2622'; x.fillRect(0, 0, 800, 480); x.fillStyle = '#F4EEDC'; x.font = '700 70px Caveat'; x.textAlign = 'center'; x.fillText('Menú', 400, 80); x.font = '700 54px Caveat'; x.textAlign = 'left'; [['Café', '2,50'], ['Medialuna', '1,80'], ['Mesa con enchufe', '15,00']].forEach(([a, b], i) => { x.fillStyle = i === 2 ? '#F2C14E' : '#F4EEDC'; x.fillText(a, 50, 190 + i * 100); x.fillText(b, 620, 190 + i * 100); }); }, '#6B4A33'); menu.position.set(-2.4, 3.2, -3.0); c.add(menu);
  for (let i = 0; i < 3; i++) { const l = new THREE.Mesh(new THREE.SphereGeometry(.16, 20, 14), new THREE.MeshStandardMaterial({ color: '#FFE0A0', emissive: '#FFC070', emissiveIntensity: 2.5 })); l.position.set(-2.4 + i * 2.4, 4.0, -1); c.add(l); const pl = new THREE.PointLight('#FFC070', 6, 7, 1.6); pl.position.copy(l.position); c.add(pl); const g = glowSprite('#FFC070', 1.3, .45); g.position.copy(l.position); c.add(g); }
  // mesa junto à parede com tomada e placa "RESERVADO", outras mesas vazias
  const table = (x, z) => { c.add(box(1.1, .06, .8, std('#D9B48A'), x, .78, z)); c.add(box(.08, .76, .08, '#5C3C28', x, .38, z)); };
  table(1.4, -2.5); const ot = outlet(); ot.position.set(1.4, 1.0, -3.03); c.add(ot); const rs = signTex('15,00', '#C9361F', '#FFF4DC', 256, 128, 'Fraunces', 80); const rm = cut(rs, .45, .22); rm.position.set(1.4, 1.0, -2.4); c.add(rm);
  table(-1.2, -.6); table(-3.4, .4); const cup = new THREE.Mesh(new THREE.CylinderGeometry(.06, .05, .09, 16), std('#FFFFFF')); cup.position.set(-1.2, .86, -.6); c.add(cup);
  const ppl = [[CAST[0], .9, -2.1], [CAST[1], 1.9, -2.2], [CAST[3], 2.6, -1.4], [CAST[5], .3, -1.4]].map(([o, x, z], i) => { const k = person(c, o, x, z, 0, '#FFE6CC', .06); k.ph = i; return k; });
  const hero = makeChar({ outfit: 'hero', glow: .16 }); hero.place(-1.4, -1.2); hero.tint('#FFE6CC'); c.add(hero.root);
  c.add(new THREE.HemisphereLight('#FFE0C0', '#3a2418', .7)); c.add(sunLight('#FFD6A0', 1.4, [4, 6, 6], 8, 30));
  s.update = (t, u) => { const cam = s.camera; ppl.forEach((k, i) => { k.face(cam); k.eye(i % 2 ? 'smug' : 'down'); k.pose({ armR: [30, -60], armL: [12, 8], head: -6 }); }); hero.face(cam); hero.eye(u < 2.2 ? 'look' : 'flat'); hero.pose({ armR: [12, 8], armL: [12, 8] }); pointer(rm, cam);
    const K = smooth(0, 3.9, u); aim(cam, [lerp(-2.6, -.4, K), lerp(1.6, 1.7, K), lerp(3.2, 3.0, K)], [lerp(-2.4, .9, K), lerp(2.6, 1.5, K), -2.4], 0);
    return { focus: lerp(6.2, 5.6, K), range: 2.5, blur: 12, bloom: .3, bloomT: .9, vig: .48, exposure: 1.0 }; };
  return s;
}

/** 7. Ônibus: todos olham pela janela e descobrem as árvores — 35.98 a 43.40 */
export function cenaOnibus(t0, t1) {
  const s = makeShot(t0, t1, '#F1C39A', 34), c = s.scene; c.fog = new THREE.FogExp2('#F7CFA4', .02);
  KIT.sky(c, -80, 400, 160, [[0, '#6FA7D8'], [.6, '#CFD8DC'], [1, '#FFE7BE']]);
  // interior do ônibus (lado esquerdo = janelas)
  c.add(box(3.2, .1, 14, std('#5A6A7A'), 0, 0, -4)); c.add(box(3.2, .1, 14, std('#E9E6DE'), 0, 2.4, -4, false)); c.add(box(.1, .9, 14, std('#E9B44C'), -1.6, .45, -4)); c.add(box(.1, .4, 14, std('#E9B44C'), -1.6, 2.2, -4)); c.add(box(.1, .9, 14, std('#E9B44C'), 1.6, .45, -4)); c.add(box(.1, .4, 14, std('#E9B44C'), 1.6, 2.2, -4)); for (let i = 0; i < 6; i++) c.add(box(.12, 1.1, .12, std('#C9CDD2', { metalness: .6 }), 1.6, 1.45, 2 - i * 2.4));
  for (let i = 0; i < 6; i++) c.add(box(.12, 1.1, .12, std('#C9CDD2', { metalness: .6 }), -1.6, 1.45, 2 - i * 2.4));
  const seats = []; for (let i = 0; i < 5; i++) { const z = 1.2 - i * 2.4; c.add(box(1.1, .5, .6, std('#2F6E9A'), -.9, .45, z)); c.add(box(1.1, .8, .12, std('#2F6E9A'), -.9, 1.0, z + .3)); c.add(box(.06, 1.7, .06, std('#C9CDD2', { metalness: .6 }), .1, 1.45, z)); }
  const ppl = []; for (let i = 0; i < 4; i++) { const k = person(c, CAST[(i + 4) % CAST.length], -.9, 1.0 - i * 2.4, .2, '#FFF4E4', .06); k.ph = i; ppl.push(k); }
  // árvores passando lá fora
  const trees = []; const tt = canvasTex(256, 400, (x) => { x.clearRect(0, 0, 256, 400); x.fillStyle = '#5A3A22'; x.fillRect(116, 220, 24, 180); ['#3E5F3A', '#4F7A44', '#6E9A50'].forEach((k, i) => { x.fillStyle = k; x.beginPath(); x.arc(128 + (i - 1) * 40, 150 - i * 20, 90 - i * 10, 0, 7); x.fill(); }); }); for (let i = 0; i < 28; i++) { const m = cut(tt, 2.4, 3.8); c.add(m); trees.push(m); }
  const blds = []; for (let i = 0; i < 8; i++) { const b = box(4, 6 + (i % 3) * 2, 3, std(['#C9A6A6', '#B5664A', '#E8D3AE'][i % 3]), -14, 3, 0); c.add(b); blds.push(b); }
  c.add(new THREE.HemisphereLight('#E9EEFF', '#B08A6A', 1.0)); c.add(sunLight('#FFD29A', 2.6, [-14, 12, 4], 14, 50));
  s.update = (t, u) => { const cam = s.camera; trees.forEach((m, i) => { m.position.set(i % 2 ? 4.5 : -5.5, 1.9, 10 - ((u * 7 + (i >> 1) * 3.2 + (i % 2) * 1.6) % 44)); m.rotation.y = Math.PI / 2; }); blds.forEach((b, i) => { b.position.z = 12 - ((u * 4 + i * 6) % 48); });
    const look = smooth(1.6, 2.4, u), wow = u > 4.8; ppl.forEach((k, i) => { k.face(cam); k.eye(u < 1.6 ? 'down' : wow ? (i % 2 ? 'heart' : 'wide') : 'look'); k.pose({ armR: [u < 1.6 ? 30 : 12, u < 1.6 ? -60 : 8], armL: [12, 8], head: look * 6 }); });
    const K = smooth(0, 7.4, u); aim(cam, [lerp(1.1, .9, K), lerp(1.7, 1.8, K), lerp(3.2, 2.0, K)], [lerp(-.9, -1.4, K), lerp(1.3, 1.5, K), lerp(-1.4, -3, K)], 0);
    return { focus: lerp(3.0, 3.2, K), range: 3, blur: 12, bloom: .3, bloomT: .9, vig: .4, exposure: 1.06 }; };
  return s;
}

/** 8. Esquina: perdido, pergunta a um desconhecido, também perdido — 43.40 a 51.14 */
export function cenaPerdido(t0, t1) {
  const s = makeShot(t0, t1, '#F1C39A', 32), c = s.scene; rua(c, { seed: 2 });
  const hero = makeChar({ outfit: 'hero', glow: .16 }); hero.place(5.6, -1.4, .14); hero.tint('#FFF0DC'); c.add(hero.root);
  const str = makeChar({ outfit: 'terno3', glow: .1 }); str.place(7.0, -1.8, .14); str.tint('#FFF0DC'); c.add(str.root);
  const ph = zeroPhone(.14, .29); c.add(ph);
  const q = canvasTex(128, 160, (x) => { x.clearRect(0, 0, 128, 160); x.fillStyle = '#F2C14E'; x.strokeStyle = '#2A2A34'; x.lineWidth = 8; x.font = '900 140px Fraunces'; x.textAlign = 'center'; x.strokeText('?', 64, 136); x.fillText('?', 64, 136); }); const qs = [0, 1, 2, 3].map(() => { const m = cut(q, .3, .38); c.add(m); return m; });
  const sign = canvasTex(400, 120, (x) => { x.fillStyle = '#2F6E5A'; x.fillRect(0, 0, 400, 120); x.fillStyle = '#FFF'; x.font = '800 54px Inter'; x.textAlign = 'center'; x.fillText('← ?   ? →', 200, 80); }); const sg = new THREE.Mesh(new THREE.PlaneGeometry(1.4, .42), new THREE.MeshStandardMaterial({ map: sign, side: THREE.DoubleSide })); sg.position.set(4.9, 2.9, -2.5); c.add(sg); c.add(box(.08, 3.0, .08, '#3A3A40', 4.9, 1.5, -2.5));
  s.update = (t, u) => { uT.value = t; const cam = s.camera; hero.face(cam); str.face(cam); const hp = hero.root.position;
    const turn = Math.sin(u * 2.2); hero.eye(u < 2.4 ? (turn > 0 ? 'look' : 'lookl') : u < 4.6 ? 'happy' : 'wide'); hero.pose({ armR: [u < 2.4 ? 30 : 60, u < 2.4 ? -60 : 20], armL: [12, 8], head: u < 2.4 ? turn * 8 : 0 });
    ph.position.set(hp.x + .3, 1.15, hp.z + .3); pointer(ph, cam); ph.visible = u < 3.4;
    str.eye(u < 4.6 ? 'look' : (Math.sin(u * 3) > 0 ? 'look' : 'lookl')); str.pose({ armL: [u > 5.2 ? 50 : 12, u > 5.2 ? 30 : 8], armR: [u > 5.2 ? 50 : 12, u > 5.2 ? 30 : 8], head: u > 4.6 ? Math.sin(u * 3) * 8 : 0 });
    qs.forEach((m, i) => { const who = i < 2 ? hero : str, show = i < 2 ? u > 1.0 : u > 5.0; m.visible = show; const p = who.root.position; m.position.set(p.x + (i % 2 ? .35 : -.35), 2.35 + Math.sin(u * 4 + i) * .06, p.z); pointer(m, cam); });
    const K = smooth(0, 7.7, u); aim(cam, [lerp(5.4, 6.6, K), lerp(1.7, 1.8, K), lerp(3.4, 3.8, K)], [lerp(5.8, 6.4, K), 1.6, -1.6], 0);
    return { focus: lerp(4.8, 5.5, K), range: 2.5, blur: 11, bloom: .2, bloomT: 1, vig: .38, exposure: 1.03 }; };
  return s;
}
