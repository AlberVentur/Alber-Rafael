// Cenários 1: escada, rua, médico, biblioteca, céu, cozinha, laboratório, TV, parque, casamento, quarto.
import * as THREE from 'three';
import { makeShot, aim, keys, smooth, lerp, clamp, rng } from './motor/core.js';
import { makeChar, canvasTex } from './motor/char.js';
import { box, std, cut, glowSprite, pointer, sky, skyline, softBlob } from './motor/kit.js';
import { cobbleTex, crowd, uT } from './motor/kit2.js';
import { woodFloor, tileFloor, beam, plant, poster, signTex, lightPanel, sunLight, coinTex } from './comum.js';
import { sala, rua, person, CAST } from './pecas.js';

export const heroi = (c, x, z, y = 0, tint = '#FFE6CC') => { const h = makeChar({ outfit: 'hero', glow: .16 }); h.place(x, z, y); h.tint(tint); c.add(h.root); return h; };
export const bookTex = () => canvasTex(300, 400, (x) => { x.fillStyle = '#7A2A22'; x.fillRect(0, 0, 300, 400); x.fillStyle = '#E9C46A'; x.fillRect(20, 20, 260, 6); x.fillRect(20, 374, 260, 6); x.font = '900 40px Fraunces'; x.textAlign = 'center'; x.fillText('HISTORIA', 150, 150); x.fillText('DEL MUNDO', 150, 200); x.fillStyle = '#F4F0E4'; x.fillRect(40, 270, 220, 80); x.fillStyle = '#C9361F'; x.font = '800 26px Inter'; x.fillText('BIBLIOTECA', 150, 302); x.fillText('DEVOLVER', 150, 336); });
const ret = (focus, range, blur, extra = {}) => ({ focus, range, blur, bloom: .28, bloomT: .95, vig: .45, exposure: 1.02, ...extra });

/** Escada de casa: cai e levanta (0–7.4) */
export function cenaEscada(t0, t1) {
  const s = makeShot(t0, t1, '#E9B48C', 32), c = s.scene; sala(c, { win: false, wall: '#9A4632' });
  for (let i = 0; i < 12; i++) { c.add(box(1.4, .2, .35, std('#8E6242'), 2.2, .1 + i * .2, -.2 - i * .3)); c.add(box(1.4, .02, .37, std('#6B4A33'), 2.2, .21 + i * .2, -.2 - i * .3, false)); }
  c.add(box(.06, 2.6, 3.8, std('#5C3C28'), 1.45, 2.0, -1.9));
  const p2 = poster(.7, .9, (x) => { x.fillStyle = '#36AEA2'; x.fillRect(0, 0, 280, 360); x.fillStyle = '#F2C14E'; x.beginPath(); x.arc(140, 160, 70, 0, 7); x.fill(); }); p2.position.set(-1.0, 2.4, -2.83); c.add(p2);
  const h = heroi(c, 1.2, .3);
  s.update = (t, u) => { const cam = s.camera; h.face(cam); const fall = smooth(1.6, 2.3, u), up = smooth(4.6, 5.4, u);
    h.root.position.set(lerp(2.2, .9, fall), lerp(1.8, 0, fall) + (fall > .99 ? 0 : 0), lerp(-1.6, .3, fall)); h.root.rotation.z = lerp(0, 1.4, fall) * (1 - up);
    h.eye(u < 1.6 ? 'happy' : u < 4.6 ? (u < 3.2 ? 'shut' : 'flat') : u < 6 ? 'wide' : 'look'); h.pose({ armL: [u < 2.3 && u > 1.5 ? 160 : 12, 10], armR: [u < 2.3 && u > 1.5 ? 160 : 12, 10] });
    const K = smooth(0, 7.4, u); aim(cam, [lerp(-.6, -.4, K), lerp(1.8, 1.3, K), lerp(4.6, 4.0, K)], [lerp(1.6, .9, K), lerp(1.6, .7, K), lerp(-.6, 0, K)], 0);
    return ret(lerp(4.6, 4.0, K), 2.4, 12); };
  return s;
}

/** Rua com bicicleta / vespa / posto de gasolina (variantes) */
export function cenaRuaGag(t0, t1, gag = 'bici') {
  const s = makeShot(t0, t1, '#F1C39A', 32), c = s.scene; rua(c, { seed: gag === 'bici' ? 0 : gag === 'avispa' ? 2 : 4 });
  const h = heroi(c, 5.8, -1.4, .14, '#FFF0DC');
  let bike, wasp, sushi;
  if (gag === 'bici') { bike = new THREE.Group(); for (const z of [-.5, .5]) { const w = new THREE.Mesh(new THREE.TorusGeometry(.32, .04, 8, 24), std('#2A2A34')); w.position.set(0, .34, z); w.rotation.y = Math.PI / 2; bike.add(w); } bike.add(box(.06, .06, 1.0, std('#C9361F'), 0, .6, 0)); const r = person(c, CAST[5], 0, 0); bike.add(r.root); r.root.position.set(0, .25, 0); bike.rider = r; c.add(bike); }
  if (gag === 'avispa') { wasp = cut(canvasTex(128, 96, (x) => { x.clearRect(0, 0, 128, 96); x.fillStyle = '#F2C14E'; x.beginPath(); x.ellipse(64, 54, 34, 20, 0, 0, 7); x.fill(); x.fillStyle = '#1A1A24'; for (let i = 0; i < 3; i++) x.fillRect(46 + i * 14, 36, 6, 36); x.fillStyle = '#E8F4FF'; x.beginPath(); x.ellipse(50, 28, 18, 12, -.4, 0, 7); x.ellipse(78, 28, 18, 12, .4, 0, 7); x.fill(); }), .22, .16); c.add(wasp); }
  if (gag === 'sushi') { c.add(box(1.4, .9, .7, std('#E9E6DE'), 7.4, .59, -1.6)); const st = signTex('GASOLINERA', '#C9361F', '#FFFFFF', 768, 160, 'Inter', 90, 900); const sm = new THREE.Mesh(new THREE.PlaneGeometry(2.4, .5), new THREE.MeshStandardMaterial({ map: st })); sm.position.set(7.2, 3.2, -2.4); c.add(sm); c.add(box(.8, 2.0, .6, std('#C9361F'), 8.2, 1.14, -2.6)); sushi = cut(canvasTex(200, 120, (x) => { x.clearRect(0, 0, 200, 120); x.fillStyle = '#F4F0E4'; x.fillRect(10, 30, 180, 80); for (let i = 0; i < 3; i++) { x.fillStyle = '#F4F0E4'; x.beginPath(); x.ellipse(45 + i * 55, 60, 22, 16, 0, 0, 7); x.fill(); x.fillStyle = '#E8843E'; x.fillRect(28 + i * 55, 44, 34, 12); } x.strokeStyle = '#8A8478'; x.lineWidth = 4; x.strokeRect(10, 30, 180, 80); }), .4, .24); c.add(sushi); }
  s.update = (t, u) => { uT.value = t; const cam = s.camera; h.face(cam); const hp = h.root.position;
    if (bike) { const k = clamp((u - .2) / 1.6); bike.position.set(5.9, .14, lerp(-14, 3, k)); bike.rider.face(cam); bike.rider.eye('wide'); bike.rider.pose({ armL: [60, 20], armR: [60, 20] }); const hit = u > 1.0 && u < 1.25; h.root.rotation.z = hit ? .9 : smooth(1.2, 2.0, u) * 0; h.eye(u < 1.0 ? 'look' : u < 2.2 ? 'shut' : 'flat'); h.pose({ armL: [12, 8], armR: [12, 8] }); }
    if (wasp) { wasp.position.set(hp.x + Math.sin(u * 7) * .4, 1.9 + Math.cos(u * 9) * .2, hp.z + .4); pointer(wasp, cam); h.eye(u < 1.0 ? 'look' : 'flat'); h.pose({ armR: [u > .9 && u < 1.4 ? 140 : 12, 60], armL: [12, 8] }); wasp.visible = u < 1.6; }
    if (sushi) { sushi.position.set(hp.x + .4, 1.15, hp.z + .3); pointer(sushi, cam); h.eye(u < 1.2 ? 'happy' : 'flat'); h.pose({ armR: [40, 30], armL: [12, 8], bob: u > 1.3 ? Math.sin(u * 20) * .01 : 0 }); }
    const K = smooth(0, t1 - t0, u); aim(cam, [lerp(4.4, 4.8, K), lerp(1.6, 1.7, K), lerp(3.4, 2.8, K)], [lerp(5.8, 6.0, K), 1.4, -2], 0);
    return ret(lerp(5.0, 4.5, K), 2.6, 11); };
  return s;
}

/** Consultório: o médico, os exames e o veredito */
export function cenaMedico(t0, t1) {
  const s = makeShot(t0, t1, '#D8E4EE', 32), c = s.scene; c.fog = new THREE.FogExp2('#D8E4EE', .02);
  c.add(tileFloor(14, 12, '#D6DCE2', '#C8CED6', 6)); c.add(box(14, 6, .3, std('#E8EEF2'), 0, 3, -3)); c.add(box(14, 1.0, .32, std('#8FB8C8'), 0, .5, -2.98));
  const xr = lightPanel(1.6, 1.1, '#DDEBFF', 1.2); xr.position.set(-1.6, 2.4, -2.83); c.add(xr); const xt = canvasTex(320, 220, (x) => { x.fillStyle = '#0E1424'; x.fillRect(0, 0, 320, 220); x.strokeStyle = '#DDEBFF'; x.lineWidth = 6; x.beginPath(); x.arc(160, 90, 60, 0, 7); x.stroke(); for (let i = 0; i < 6; i++) { x.beginPath(); x.moveTo(110, 150 + i * 10); x.lineTo(210, 150 + i * 10); x.stroke(); } }); const xm = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 1.0), new THREE.MeshBasicMaterial({ map: xt })); xm.position.set(-1.6, 2.4, -2.82); c.add(xm);
  c.add(box(1.8, .08, .9, std('#F4F0E4'), .8, .95, -1.6)); c.add(box(1.8, .9, .9, std('#8FB8C8'), .8, .45, -1.6)); const mon = lightPanel(.6, .4, '#7FD08A', .9); mon.position.set(1.3, 1.35, -1.9); c.add(mon);
  const doc = person(c, ['jaleco', 'old', '#E8E8E8'], .8, -2.3, 0, '#F2F6FF', .12); const h = heroi(c, -.6, -.9, 0, '#F2F6FF');
  c.add(new THREE.HemisphereLight('#FFFFFF', '#8A9AA8', 1.0)); c.add(sunLight('#FFFFFF', 1.4, [3, 7, 5], 8, 30));
  s.update = (t, u) => { const cam = s.camera; doc.face(cam); h.face(cam); const verd = u > 2.6; doc.eye(verd ? 'wide' : 'down'); doc.pose({ armL: [20, -60], armR: [verd ? 70 : 20, verd ? 30 : -60] }); h.eye(verd ? 'wide' : 'look'); h.pose({ armL: [12, 8], armR: [12, 8] });
    const K = smooth(0, t1 - t0, u); aim(cam, [lerp(-1.6, .1, K), 1.6, lerp(3.6, 2.4, K)], [lerp(-1.0, .3, K), 1.6, -1.6], 0);
    return ret(lerp(4.6, 3.6, K), 2, 12); };
  return s;
}

/** Multidão vista de cima: você é o único brilhando */
export function cenaUnico(t0, t1) {
  const s = makeShot(t0, t1, '#F1C39A', 36), c = s.scene; rua(c, { seed: 1 });
  const g = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), new THREE.MeshStandardMaterial({ map: cobbleTex('#B49F8C', 24, 24), roughness: .9 })); g.rotation.x = -Math.PI / 2; g.position.set(0, .01, -14); g.receiveShadow = true; c.add(g);
  const R = rng(9), spots = []; for (let i = 0; i < 1800; i++) { const a = R() * Math.PI * 2, r = 1.0 + Math.pow(R(), .7) * 16; spots.push([Math.cos(a) * r, -12 + Math.sin(a) * r * .9]); } crowd(c, spots, { raised: .1, jump: .02, tint: '#B8B0C0', seed: 9 });
  const h = heroi(c, 0, -12, 0, '#FFFFFF'); const gl = glowSprite('#FFE08A', 3.0, .7); gl.position.set(0, 1.2, -12); c.add(gl);
  s.update = (t, u) => { uT.value = t; const cam = s.camera; h.face(cam); h.eye('look'); h.pose({ armL: [12, 8], armR: [12, 8], head: 10 }); const K = smooth(0, t1 - t0, u); aim(cam, [0, lerp(3.0, 22, K), lerp(-6.5, 4, K)], [0, 1.2, -12], 0); return ret(lerp(6.5, 20, K), lerp(2, 12, K), 9); };
  return s;
}

/** Mesa com o livro da biblioteca (com carimbo) */
export function cenaLivro(t0, t1, tarde = false) {
  const LL = Math.min(t1 - t0, 12); const s = makeShot(t0, t1, '#2A1E2E', 30), c = s.scene; sala(c, { night: true, win: false, wall: '#5A3A2A' });
  c.add(box(2.4, .08, 1.2, std('#8E6242'), 0, .95, -1.0)); for (const [x, z] of [[-1.1, -1.5], [1.1, -1.5], [-1.1, -.5], [1.1, -.5]]) c.add(box(.08, .92, .08, '#5C3C28', x, .46, z));
  const book = new THREE.Mesh(new THREE.BoxGeometry(.5, .08, .66), [std('#E9E6DE'), std('#E9E6DE'), new THREE.MeshStandardMaterial({ map: bookTex() }), std('#7A2A22'), std('#E9E6DE'), std('#E9E6DE')]); book.position.set(0, 1.03, -.9); book.castShadow = true; c.add(book);
  const lamp = new THREE.PointLight('#FFC27A', 8, 5, 1.6); lamp.position.set(-.8, 2.0, -.6); lamp.castShadow = true; c.add(lamp); const gl = glowSprite('#FFC27A', 1.2, .4); gl.position.set(-.8, 1.9, -1.2); c.add(gl); c.add(box(.04, .9, .04, '#222', -.8, 1.4, -1.3));
  const dust = []; if (tarde) { for (let i = 0; i < 30; i++) { const d = glowSprite('#FFE8C0', .06, .7); c.add(d); dust.push(d); } }
  const papers = []; for (let i = 0; i < 6; i++) { const p = box(.3, .005, .4, '#F2E6CC', -.7 + i * .25, 1.0 + i * .002, -1.2 + (i % 2) * .2); p.rotation.y = i * .4; c.add(p); }
  s.update = (t, u) => { const cam = s.camera; dust.forEach((d, i) => d.position.set(Math.sin(i * 3) * .6, 1.2 + ((u * .1 + i * .07) % 1), -.9 + Math.cos(i * 2) * .3));
    const K = smooth(0, LL, u); aim(cam, [lerp(.6, .1, K), lerp(1.7, 1.45, K), lerp(.6, -.2, K)], [0, 1.03, -.9], 0); return ret(lerp(1.15, .82, K), .4, 14, { exposure: 1.0 }); };
  return s;
}

/** Céu: paraquedismo sem paraquedas */
export function cenaCeu(t0, t1) {
  const s = makeShot(t0, t1, '#8FC0EE', 36), c = s.scene; c.fog = new THREE.FogExp2('#CFE4F6', .004);
  sky(c, -200, 900, 600, [[0, '#4A86C7'], [.5, '#8FC0EE'], [1, '#EAF4FF']]);
  const cl = canvasTex(256, 128, (x) => { x.clearRect(0, 0, 256, 128); x.fillStyle = '#FFFFFF'; for (const [a, b, r] of [[70, 80, 40], [120, 60, 52], [180, 80, 40], [130, 90, 40]]) { x.beginPath(); x.arc(a, b, r, 0, 7); x.fill(); } }); const clouds = []; const R = rng(4); for (let i = 0; i < 40; i++) { const m = cut(cl, 8, 4, { blend: true }); m.position.set((R() - .5) * 60, -20 - R() * 120, -20 - R() * 40); c.add(m); clouds.push(m); }
  const land = new THREE.Mesh(new THREE.PlaneGeometry(800, 800), new THREE.MeshStandardMaterial({ map: canvasTex(512, 512, (x) => { x.fillStyle = '#7A9A50'; x.fillRect(0, 0, 512, 512); const R2 = rng(3); for (let i = 0; i < 120; i++) { x.fillStyle = ['#8AAA58', '#C9B87A', '#5E7A3E', '#A8B868'][i % 4]; x.fillRect(R2() * 512, R2() * 512, 20 + R2() * 60, 20 + R2() * 60); } }) })); land.rotation.x = -Math.PI / 2; land.position.y = -300; c.add(land);
  const h = heroi(c, 0, 0, 0, '#FFFFFF'); const plane = new THREE.Group(); plane.add(box(1.4, 1.4, 8, std('#E9E6DE'), 0, 0, 0)); plane.add(box(10, .2, 1.6, std('#E9E6DE'), 0, 0, .5)); plane.position.set(-3, 6, -6); c.add(plane);
  c.add(new THREE.HemisphereLight('#FFFFFF', '#7A9A50', 1.2)); c.add(sunLight('#FFF4E0', 2.0, [10, 20, 10], 20, 60));
  s.update = (t, u) => { const cam = s.camera; const y = -u * 6; h.root.position.set(0, y, 0); h.face(cam); h.eye(u < 1.2 ? 'wide' : 'happy'); h.pose({ armL: [150, 20], armR: [150, 20], legL: [30, 0], legR: [-30, 0] }); clouds.forEach((m) => pointer(m, cam)); plane.position.y = 6 + u * 1;
    aim(cam, [1.6, y + 2.6, 4.2], [0, y + .6, 0], Math.sin(u * 1.4) * .05); return ret(4.6, 3, 8, { bloom: .3 }); };
  return s;
}

/** Cozinha/sala: comer tudo, janela aberta no inverno, óleo quente (variantes) */
export function cenaCasa(t0, t1, v = 'comer') {
  const s = makeShot(t0, t1, v === 'inverno' ? '#2A2E3E' : '#E9B48C', 32), c = s.scene; sala(c, { night: v === 'inverno', wall: v === 'comer' ? '#2F6E68' : '#9A4632' });
  const h = heroi(c, 0, -1.0);
  if (v === 'comer') { c.add(box(1.0, 2.2, .8, std('#EDEAE2'), 1.8, 1.1, -2.4)); const items = []; const ft = [canvasTex(128, 96, (x) => { x.clearRect(0, 0, 128, 96); x.fillStyle = '#E9A85A'; x.beginPath(); x.moveTo(10, 80); x.lineTo(64, 10); x.lineTo(118, 80); x.fill(); x.fillStyle = '#C9361F'; for (let i = 0; i < 5; i++) { x.beginPath(); x.arc(40 + i * 12, 60 - (i % 2) * 14, 7, 0, 7); x.fill(); } }), canvasTex(128, 96, (x) => { x.clearRect(0, 0, 128, 96); x.fillStyle = '#8A4E2E'; x.fillRect(20, 30, 88, 56); x.fillStyle = '#F4F0E4'; x.fillRect(20, 24, 88, 12); x.fillStyle = '#E8667F'; x.beginPath(); x.arc(64, 20, 10, 0, 7); x.fill(); })]; for (let i = 0; i < 6; i++) { const m = cut(ft[i % 2], .35, .26); c.add(m); items.push(m); } s.items = items; }
  if (v === 'inverno') { const snow = []; for (let i = 0; i < 200; i++) { const f = glowSprite('#FFFFFF', .05, .9); c.add(f); snow.push(f); } s.snow = snow; c.add(box(2.4, .5, 1.6, std('#F3EEE4'), -1.4, .3, -1.2)); c.add(box(2.4, .2, 1.0, std('#4A86C7'), -1.4, .62, -1.0)); }
  if (v === 'aceite') { c.add(box(2.4, .9, .7, std('#E9E6DE'), 1.0, .45, -2.4)); const pan = new THREE.Mesh(new THREE.CylinderGeometry(.3, .25, .1, 24), std('#2A2A34', { metalness: .6 })); pan.position.set(.7, .97, -2.3); c.add(pan); const fire = glowSprite('#FF8A30', .9, .8); fire.position.set(.7, .9, -2.3); c.add(fire); s.fire = fire; s.spl = []; for (let i = 0; i < 20; i++) { const d = glowSprite('#FFD27A', .06, .9); c.add(d); s.spl.push(d); } }
  s.update = (t, u) => { const cam = s.camera; h.face(cam); const hp = h.root.position;
    if (v === 'comer') { h.eye('happy'); h.pose({ armL: [70, 40], armR: [70, 40], bob: Math.abs(Math.sin(u * 6)) * .03 }); s.items.forEach((m, i) => { const k = ((u * .9 + i / 6) % 1); m.position.set(hp.x + Math.cos(i) * .5 * (1 - k), 1.0 + k * 1.2, hp.z + .4); pointer(m, cam); m.visible = k < .9; }); }
    if (v === 'inverno') { h.root.position.set(-1.4, -1.2, .75); h.eye('shut'); h.pose({ armL: [12, 8], armR: [12, 8] }); s.snow.forEach((f, i) => f.position.set(-2 + (i % 20) * .2 + Math.sin(u + i) * .1, 4.6 - ((u * .6 + i * .037) % 4.4), -2.6 + (i % 7) * .4)); }
    if (v === 'aceite') { const burn = u > .9; h.root.position.x = .2; h.eye(burn ? (u < 2.6 ? 'angry' : 'look') : 'happy'); h.pose({ armR: [burn && u < 2.6 ? 140 + Math.sin(u * 30) * 10 : 30, burn ? 120 : -30], armL: [12, 8] }); s.fire.material.opacity = .6 + Math.sin(u * 20) * .2; s.spl.forEach((d, i) => { const k = ((u * 1.5 + i / 20) % 1); d.position.set(.7 + Math.sin(i * 2) * k * .5, 1.0 + k * .8 - k * k * .6, -2.3 + Math.cos(i) * k * .4); d.visible = u > .6 && u < 2.0; }); }
    const K = smooth(0, t1 - t0, u); aim(cam, [lerp(-.6, .4, K), 1.6, lerp(3.6, 2.8, K)], [lerp(-.2, .2, K), 1.4, -1.2], 0); return ret(lerp(4.6, 3.8, K), 2, 12); };
  return s;
}

/** Queda do terceiro andar na rua */
export function cenaQueda(t0, t1) {
  const s = makeShot(t0, t1, '#F1C39A', 34), c = s.scene; rua(c, { seed: 6 });
  const h = heroi(c, 7.6, -3.0, 9, '#FFF0DC');
  s.update = (t, u) => { uT.value = t; const cam = s.camera; h.face(cam); const k = smooth(.4, 1.4, u) ; h.root.position.y = lerp(9, .14, k * k); h.eye(u < 1.4 ? 'wide' : u < 2.6 ? 'shut' : 'flat'); h.pose(u < 1.4 ? { armL: [160, 10], armR: [160, 10] } : { armL: [12, 8], armR: [12, 8], squash: u < 1.6 ? .3 : 0 });
    const K = smooth(0, t1 - t0, u); aim(cam, [4.0, lerp(5.0, 1.8, K), 4.0], [7.4, lerp(7, 1.2, smooth(.4, 1.6, u)), -3], 0); return ret(8.4, 4, 9); };
  return s;
}
