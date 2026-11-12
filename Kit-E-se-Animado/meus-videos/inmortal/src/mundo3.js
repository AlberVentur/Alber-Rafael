// Cenários 3: futuro, medusa, memórias, catedral, Matusalém, areia, deserto, nave, Voyager, gigante vermelha.
import * as THREE from 'three';
import { makeShot, aim, keys, smooth, lerp, clamp, rng } from './motor/core.js';
import { makeChar, canvasTex } from './motor/char.js';
import { box, std, cut, glowSprite, pointer, sky, skyline, building, tree, lamp, dissolve } from './motor/kit.js';
import { crowd, stars, nebula, earthTex, probe, uT } from './motor/kit2.js';
import { woodFloor, tileFloor, beam, plant, poster, signTex, lightPanel, sunLight } from './comum.js';
import { person, CAST } from './pecas.js';
import { heroi, bookTex } from './mundo1.js';
const ret = (focus, range, blur, extra = {}) => ({ focus, range, blur, bloom: .3, bloomT: .9, vig: .48, exposure: 1.02, ...extra });

/** Cidade do futuro à noite: neon, carros voadores, jovens rindo do seu sotaque */
export function cenaFuturo(t0, t1, risas = true) {
  const s = makeShot(t0, t1, '#120E2A', 34), c = s.scene; c.fog = new THREE.FogExp2('#2A1E52', .015);
  sky(c, -170, 500, 340, [[0, '#06081E'], [.5, '#2A1252'], [.85, '#7A2A7A'], [1, '#E85A9A']]);
  const g = new THREE.Mesh(new THREE.PlaneGeometry(60, 120), std('#1A1A2E', { roughness: .2, metalness: .6 })); g.rotation.x = -Math.PI / 2; g.position.z = -40; g.receiveShadow = true; c.add(g);
  const R = rng(7), neon = ['#FF4FA0', '#4FE0FF', '#B47AFF', '#FFD24F'];
  for (const sx of [-1, 1]) for (let i = 0; i < 10; i++) { const h = 12 + R() * 30, z = -4 - i * 9; c.add(box(7, h, 7, std('#1E1A3A', { metalness: .4, roughness: .4 }), sx * 9, h / 2, z)); for (let k = 0; k < 6; k++) { const col = neon[(i + k) % 4]; const st = lightPanel(.12, h * .7, col, 1.6); st.position.set(sx * 5.45, h * .45, z - 3 + k * 1.2); st.rotation.y = sx * Math.PI / 2; c.add(st); } const sg = lightPanel(3, 1, neon[i % 4], 1.4); sg.position.set(sx * 5.4, 4 + (i % 3), z); sg.rotation.y = -sx * Math.PI / 2; c.add(sg); }
  const cars = []; for (let i = 0; i < 12; i++) { const m = new THREE.Group(); m.add(box(1.4, .4, .7, std(neon[i % 4], { emissive: neon[i % 4], emissiveIntensity: .3 }), 0, 0, 0)); const gl = glowSprite(neon[i % 4], 1.4, .6); m.add(gl); c.add(m); cars.push({ m, y: 5 + R() * 10, z: -10 - R() * 60, v: 6 + R() * 6, d: R() < .5 ? 1 : -1 }); }
  const h = heroi(c, 0, -1.4, 0, '#E8D8FF'); const kids = risas ? [0, 1, 2].map(i => person(c, CAST[[0, 2, 4][i]], -1.6 + i * 1.6 + (i > 0 ? 1.0 : 0), -2.6, 0, '#E8D8FF', .08)) : [];
  c.add(new THREE.HemisphereLight('#8E86C8', '#2a1f28', .6)); c.add(sunLight('#B47AFF', .8, [-8, 14, 8], 14, 50));
  s.update = (t, u) => { const cam = s.camera; cars.forEach(({ m, y, z, v, d }) => m.position.set(((u * v * d + z * 3) % 40 + 40) % 40 - 20, y, z)); h.face(cam); h.eye(risas ? (u < 1.5 ? 'look' : 'sad') : 'wide'); h.pose({ armL: [12, 8], armR: [risas ? 60 : 12, 20] }); kids.forEach((k, i) => { k.face(cam); k.eye('happy'); k.pose({ armL: [40, 120], armR: [20, 10], bob: Math.abs(Math.sin(u * 8 + i)) * .04 }); });
    const K = smooth(0, t1 - t0, u); aim(cam, [lerp(-.8, .6, K), lerp(1.6, 2.6, K), lerp(4.2, 5.6, K)], [0, lerp(1.6, 4, K), -6], 0); return ret(lerp(5, 7, K), 4, 9, { bloom: .5, bloomT: .8 }); };
  return s;
}

/** Fundo do mar: a medusa imortal (e o peixe) */
export function cenaMar(t0, t1, come = false) {
  const s = makeShot(t0, t1, '#0A3A5A', 36), c = s.scene; c.fog = new THREE.FogExp2('#0E4A6A', .07); s.scene.background = new THREE.Color('#0A3A5A');
  const sand = new THREE.Mesh(new THREE.PlaneGeometry(80, 80), std('#C8B48A', { roughness: 1 })); sand.rotation.x = -Math.PI / 2; sand.position.y = -2; c.add(sand);
  const R = rng(5); for (let i = 0; i < 30; i++) { const col = ['#E8667F', '#F2A766', '#B47AFF', '#36AEA2'][i % 4]; const k = new THREE.Mesh(new THREE.ConeGeometry(.2 + R() * .3, .8 + R() * 1.4, 7), std(col)); k.position.set((R() - .5) * 14, -1.6, -2 - R() * 12); c.add(k); }
  const rays = []; for (let i = 0; i < 7; i++) { const b = beam(1.6, 14, '#BFEFFF', .12); b.position.set(-6 + i * 2, 4, -6); b.rotation.set(0, 0, .25); c.add(b); rays.push(b); }
  const bub = []; for (let i = 0; i < 60; i++) { const b = glowSprite('#DFF8FF', .08, .7); c.add(b); bub.push(b); }
  const jt = canvasTex(160, 200, (x) => { x.clearRect(0, 0, 160, 200); x.fillStyle = 'rgba(255,200,220,.85)'; x.beginPath(); x.arc(80, 70, 56, Math.PI, 0); x.lineTo(136, 80); x.lineTo(24, 80); x.fill(); x.fillStyle = '#E8457A'; x.beginPath(); x.arc(80, 66, 18, 0, 7); x.fill(); x.strokeStyle = 'rgba(255,210,230,.8)'; x.lineWidth = 4; for (let i = 0; i < 9; i++) { x.beginPath(); x.moveTo(30 + i * 12, 80); x.quadraticCurveTo(26 + i * 12, 140, 34 + i * 12, 196); x.stroke(); } });
  const jelly = cut(jt, .5, .62, { blend: true }); c.add(jelly); const jg = glowSprite('#FFB0D0', 1.2, .6); c.add(jg);
  const fishT = canvasTex(256, 140, (x) => { x.clearRect(0, 0, 256, 140); x.fillStyle = '#F2A766'; x.beginPath(); x.ellipse(110, 70, 90, 46, 0, 0, 7); x.fill(); x.beginPath(); x.moveTo(190, 70); x.lineTo(250, 20); x.lineTo(250, 120); x.fill(); x.fillStyle = '#FFFFFF'; x.beginPath(); x.arc(60, 56, 16, 0, 7); x.fill(); x.fillStyle = '#1A1A24'; x.beginPath(); x.arc(56, 56, 8, 0, 7); x.fill(); x.fillStyle = '#1A1A24'; x.beginPath(); x.moveTo(24, 70); x.lineTo(48, 84); x.lineTo(24, 90); x.fill(); });
  const fish = cut(fishT, 1.4, .76); c.add(fish);
  const h = heroi(c, -1.2, -1.0, -.6, '#BFEFFF');
  c.add(new THREE.HemisphereLight('#9FE0FF', '#2A4A5A', 1.0)); c.add(sunLight('#BFEFFF', 1.6, [0, 20, 4], 14, 40));
  s.update = (t, u) => { const cam = s.camera; const L = t1 - t0; bub.forEach((b, i) => b.position.set(-4 + (i % 12) * .7, -2 + ((u * .5 + i * .13) % 6), -2 - (i % 5) * 1.5)); h.face(cam); h.root.position.y = -.6 + Math.sin(u) * .1; h.eye(come ? (u > 1.4 ? 'wide' : 'happy') : 'happy'); h.pose({ armL: [60 + Math.sin(u * 2) * 20, 10], armR: [60 - Math.sin(u * 2) * 20, 10], legL: [Math.sin(u * 3) * 20, 0], legR: [-Math.sin(u * 3) * 20, 0] });
    const eat = come ? smooth(1.0, 1.4, u) : 0; const jp = [.6, .6 + Math.sin(u * 2) * .1, -1.2]; jelly.position.set(...jp); jelly.scale.y = 1 + Math.sin(u * 4) * .08; jelly.visible = eat < .95; jg.position.set(...jp); jg.material.opacity = (1 - eat) * .6; pointer(jelly, cam);
    fish.visible = come; fish.position.set(lerp(5, .7, smooth(.3, 1.3, u)) - smooth(1.6, L, u) * 6, .6, -1.15); pointer(fish, cam);
    const K = smooth(0, L, u); aim(cam, [lerp(-.2, .1, K), lerp(.8, .7, K), lerp(3.0, 2.4, K)], [lerp(-.2, .4, K), .4, -1.2], 0); return ret(lerp(4.2, 3.6, K), 2, 12, { bloom: .45, tint: '#D8F4FF' }); };
  return s;
}

/** Escrever tudo: mesa com cadernos, depois corredor de biblioteca infinita */
export function cenaMemoria(t0, t1) {
  const s = makeShot(t0, t1, '#2A1E16', 32), c = s.scene; c.fog = new THREE.FogExp2('#3A2A1E', .05);
  c.add(woodFloor(16, 60, '#5F3F2C'));
  for (const sx of [-1, 1]) for (let i = 0; i < 16; i++) { const z = -2 - i * 2.2; c.add(box(.5, 4, 2.0, std('#4A3020'), sx * 2.2, 2, z)); for (let r = 0; r < 6; r++) for (let b = 0; b < 8; b++) c.add(box(.3, .45, .2, std(['#7A2A22', '#2F4A6A', '#3E5A3A', '#8A6A2A', '#5A2A5A'][(b + r + i) % 5]), sx * 2.0, .4 + r * .62, z - .8 + b * .22, false)); }
  for (let i = 0; i < 8; i++) { const l = glowSprite('#FFC67A', 1.0, .6); l.position.set(0, 3.6, -2 - i * 4.4); c.add(l); const pl = new THREE.PointLight('#FFB060', 4, 6, 1.6); pl.position.set(0, 3.4, -2 - i * 4.4); c.add(pl); }
  c.add(box(1.4, .08, .8, std('#8E6242'), 0, .95, .4)); const bk = cut(bookTex(), .32, .42); bk.position.set(.45, 1.0, .5); bk.rotation.x = -Math.PI / 2; c.add(bk);
  const h = heroi(c, 0, -.4, 0, '#FFE0C0');
  s.update = (t, u) => { const cam = s.camera; h.face(cam); h.eye(u < 3 ? 'down' : 'look'); h.pose({ armR: [30 + Math.sin(u * 10) * 6, -50], armL: [14, -60], head: -8 }); const K = smooth(0, t1 - t0, u); aim(cam, [lerp(.2, 0, K), lerp(1.6, 2.2, K), lerp(2.4, 4.0, K)], [lerp(0, 0, K), lerp(1.3, 1.8, K), lerp(-.4, -20, K)], 0); return ret(lerp(2.8, 10, K), lerp(1.2, 14, K), 11, { bloom: .4, sat: .9 }); };
  return s;
}

/** Paciência: bosque cresce, catedral torta (fase 'bosque'/'catedral') */
export function cenaPaciencia(t0, t1, fase = 'bosque') {
  const s = makeShot(t0, t1, '#9CC8EE', 34), c = s.scene; c.fog = new THREE.FogExp2('#F2D8B8', .012);
  sky(c, -170, 500, 200, [[0, '#5E9AD8'], [.55, '#A9CBE8'], [.85, '#FBD9AE'], [1, '#FFE9C6']]); const g = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), std('#7A9A50', { roughness: 1 })); g.rotation.x = -Math.PI / 2; g.receiveShadow = true; c.add(g);
  c.add(new THREE.HemisphereLight('#E9EEFF', '#B08A6A', 1.1)); c.add(sunLight('#FFD29A', 3.0, [-10, 14, 8], 20, 60));
  const h = heroi(c, fase === 'catedral' ? 1.6 : 0, fase === 'catedral' ? -3 : 0, 0, '#FFF0DC'); const trees = [];
  if (fase === 'bosque') { const R = rng(4); for (let i = 0; i < 40; i++) { const gr = new THREE.Group(); tree(gr, 0, 0, 1.4, ['#3E5F3A', '#4F7A44', '#6E9A50', '#D7D282'], i); gr.position.set((R() - .5) * 24, 0, -3 - R() * 20); c.add(gr); trees.push({ gr, d: R() }); } }
  let cat; if (fase === 'catedral') { cat = new THREE.Group(); const st = std('#E2D4BE'); cat.add(box(8, 9, 6, st, 0, 4.5, 0)); for (const sx of [-1, 1]) { const tw = box(2.2, 16, 2.2, st, sx * 4.4, 8, 1.6); tw.rotation.z = sx * .03; cat.add(tw); const sp = new THREE.Mesh(new THREE.ConeGeometry(1.7, 4, 4), std('#8F4A38')); sp.position.set(sx * 4.4 + sx * .4, 18, 1.6); sp.rotation.z = sx * .12; cat.add(sp); } const rose = new THREE.Mesh(new THREE.CircleGeometry(1.4, 30), new THREE.MeshStandardMaterial({ color: '#C9361F', emissive: '#FFB070', emissiveIntensity: .3 })); rose.position.set(0, 6, 3.02); cat.add(rose); cat.rotation.z = .06; cat.position.set(0, 0, -14); c.add(cat); for (let i = 0; i < 12; i++) { const b = box(.6, .4, .4, st, -3 + (i % 6) * .8, .2 + Math.floor(i / 6) * .4, -8); c.add(b); } }
  s.update = (t, u) => { const cam = s.camera; const L = t1 - t0; h.face(cam); h.eye(fase === 'catedral' && u > L * .6 ? 'flat' : 'happy'); h.pose({ armL: [12, 8], armR: [fase === 'catedral' ? 40 : 12, 20] });
    trees.forEach(({ gr, d }) => gr.scale.setScalar(Math.max(.02, smooth(d * L * .7, d * L * .7 + 1.5, u)))); if (cat) cat.position.y = 0;
    const K = smooth(0, L, u); aim(cam, fase === 'bosque' ? [lerp(.4, 1.6, K), lerp(1.6, 6, K), lerp(4, 12, K)] : [lerp(-3, 2.5, K), lerp(2.0, 3.6, K), lerp(9, 12, K)], fase === 'bosque' ? [0, 1.4, -6] : [lerp(1, 0, K), lerp(3, 7, K), -12], 0); return ret(lerp(5, 14, K), 10, 8); };
  return s;
}

/** Matusalém: o pinheiro antigo na montanha */
export function cenaPino(t0, t1) {
  const s = makeShot(t0, t1, '#7FA6D8', 34), c = s.scene; c.fog = new THREE.FogExp2('#C8D8E8', .02);
  sky(c, -200, 700, 300, [[0, '#3A6AA8'], [.6, '#9CC0E0'], [1, '#F2E2C8']]);
  const mt = cut(canvasTex(1600, 500, (x) => { x.clearRect(0, 0, 1600, 500); ['#8A8AA8', '#A8A0B8'].forEach((k, i) => { x.fillStyle = k; x.beginPath(); x.moveTo(0, 500); for (let a = 0; a <= 1600; a += 50) x.lineTo(a, 160 + i * 80 + Math.abs(Math.sin(a * .004 + i)) * 160); x.lineTo(1600, 500); x.fill(); }); }), 400, 120, { blend: true, fog: false }); mt.position.set(0, 30, -180); c.add(mt);
  const g = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), std('#B8A48A', { roughness: 1 })); g.rotation.x = -Math.PI / 2; g.receiveShadow = true; c.add(g); const R = rng(3); for (let i = 0; i < 40; i++) { const r = box(.3 + R() * .8, .2 + R() * .4, .3 + R() * .6, std('#9A8A78'), (R() - .5) * 20, .1, -2 - R() * 16); r.rotation.y = R() * 3; c.add(r); }
  const pine = new THREE.Group(); const bark = std('#8A6A4A', { roughness: 1 }); const pts = [[0, 0, 0], [.3, 1, 0], [-.2, 2, .1], [.4, 3, 0], [.1, 3.8, -.1]]; for (let i = 0; i < pts.length - 1; i++) { const a = new THREE.Vector3(...pts[i]), b = new THREE.Vector3(...pts[i + 1]); const len = a.distanceTo(b); const cyl = new THREE.Mesh(new THREE.CylinderGeometry(.35 - i * .06, .45 - i * .06, len, 10), bark); cyl.position.copy(a.clone().add(b).multiplyScalar(.5)); cyl.lookAt(b); cyl.rotateX(Math.PI / 2); cyl.castShadow = true; pine.add(cyl); }
  for (const [x, y, z, sz] of [[.9, 3.2, 0, 1.2], [-.6, 3.6, .2, 1.0], [.3, 4.2, -.2, 1.1], [1.4, 2.6, .2, .8]]) { const f = new THREE.Mesh(new THREE.SphereGeometry(sz, 12, 10), std('#4E6A3A')); f.scale.y = .55; f.position.set(x, y, z); f.castShadow = true; pine.add(f); } pine.position.set(1.2, 0, -3); c.add(pine);
  const h = heroi(c, -.6, -1.4, 0, '#FFF0DC'); c.add(new THREE.HemisphereLight('#E9EEFF', '#8A7A6A', 1.0)); c.add(sunLight('#FFE8C8', 3.0, [-10, 12, 8], 12, 50));
  s.update = (t, u) => { const cam = s.camera; h.face(cam); h.eye(u < 7 ? 'look' : 'smug'); h.pose({ armR: [u > 9 ? 80 : 12, u > 9 ? 40 : 8], armL: [12, 8] }); const K = smooth(0, t1 - t0, u); aim(cam, [lerp(-2.4, -.8, K), lerp(1.4, 1.8, K), lerp(5.6, 4.0, K)], [lerp(.6, .3, K), lerp(2.6, 1.8, K), -2.4], 0); return ret(lerp(6.2, 4.6, K), 3, 10); };
  return s;
}

/** Multidão e cidades engolidas pela areia (fase 'gente'/'arena') */
export function cenaEras(t0, t1, fase = 'gente') {
  const s = makeShot(t0, t1, fase === 'arena' ? '#E2C08A' : '#F1C39A', 36), c = s.scene; c.fog = new THREE.FogExp2(fase === 'arena' ? '#E2C08A' : '#F7CFA4', .012);
  sky(c, -200, 800, 300, fase === 'arena' ? [[0, '#C9A36A'], [.6, '#E6C890'], [1, '#F6E2B6']] : [[0, '#6FA7D8'], [.5, '#CFD8DC'], [1, '#FFE7BE']]);
  const g = new THREE.Mesh(new THREE.PlaneGeometry(400, 400), std(fase === 'arena' ? '#D9B47A' : '#8A9A6A', { roughness: 1 })); g.rotation.x = -Math.PI / 2; g.receiveShadow = true; c.add(g);
  const h = heroi(c, 0, 0, 0, '#FFF0DC'); let towers = [];
  if (fase === 'gente') { const R = rng(9), sp = []; for (let i = 0; i < 2600; i++) { const x = (R() - .5) * 60, z = -3 - R() * 50; sp.push([x, z]); } crowd(c, sp, { raised: .2, jump: .05, seed: 3 }); }
  else { const R = rng(4); for (let i = 0; i < 18; i++) { const hgt = 6 + R() * 20; const m = box(3 + R() * 3, hgt, 3 + R() * 3, std(['#C8A878', '#B89868', '#D8B888'][i % 3], { roughness: 1 }), (R() - .5) * 60, hgt / 2, -12 - R() * 60); c.add(m); towers.push({ m, hgt, d: R() }); } }
  c.add(new THREE.HemisphereLight('#FFF0D0', '#B08A5A', 1.0)); c.add(sunLight('#FFE0A8', 3.0, [16, 18, 8], 40, 120));
  s.update = (t, u) => { uT.value = t; const cam = s.camera; const L = t1 - t0; h.face(cam); h.eye(fase === 'arena' ? 'sad' : 'look'); h.pose({ armL: [12, 8], armR: [12, 8] }); towers.forEach(({ m, hgt, d }) => { m.position.y = hgt / 2 - smooth(d * L * .5, d * L * .5 + L * .5, u) * hgt * .9; });
    const K = smooth(0, L, u); aim(cam, [lerp(0, 2, K), lerp(1.8, 9, K), lerp(4, 14, K)], [0, lerp(1.4, 3, K), lerp(-2, -30, K)], 0); return ret(lerp(4, 30, K), lerp(3, 40, K), 8, { sat: fase === 'arena' ? .7 : 1 }); };
  return s;
}

/** Terra-deserto sob um sol enorme, e a noite estrelada contando estrelas (fase 'dia'/'noche') */
export function cenaDesierto(t0, t1, fase = 'dia') {
  const night = fase === 'noche'; const s = makeShot(t0, t1, night ? '#06081E' : '#E89A5A', 36), c = s.scene; c.fog = new THREE.FogExp2(night ? '#10142E' : '#E8A060', night ? .004 : .01);
  if (night) { s.camera.far = 2400; s.camera.updateProjectionMatrix(); stars(c, 5000, 900, 4); nebula(c, 130, 200, -640, 900, '#7E6BFF', 11, .12); nebula(c, -300, 120, -540, 760, '#FF6FB0', 12, .08); }
  else { sky(c, -300, 1200, 500, [[0, '#C9502A'], [.6, '#F2A04A'], [1, '#FFE0A0']]); const sun = glowSprite('#FFF0C0', 140, 1); sun.position.set(0, 60, -280); sun.material.fog = false; c.add(sun); const core = glowSprite('#FFFFFF', 50, 1); core.position.copy(sun.position); core.material.fog = false; c.add(core); }
  const g = new THREE.Mesh(new THREE.PlaneGeometry(800, 800, 60, 60), std(night ? '#3A3048' : '#C8743A', { roughness: 1 })); g.rotation.x = -Math.PI / 2; const pos = g.geometry.attributes.position; for (let i = 0; i < pos.count; i++) pos.setZ(i, Math.sin(pos.getX(i) * .05) * 2 + Math.cos(pos.getY(i) * .04) * 2); g.geometry.computeVertexNormals(); g.receiveShadow = true; c.add(g);
  const R = rng(6); for (let i = 0; i < 30; i++) { const r = box(.4 + R() * 1.6, .3 + R() * 1.0, .4 + R() * 1.4, std(night ? '#4A3E58' : '#A85A2A'), (R() - .5) * 30, 0, -2 - R() * 30); r.rotation.y = R() * 3; c.add(r); }
  const h = heroi(c, 0, -.4, 1.2, night ? '#C8C8FF' : '#FFD8B0'); c.add(box(1.2, 1.2, 1.0, std(night ? '#4A3E58' : '#A85A2A'), 0, .6, -.5));
  c.add(new THREE.HemisphereLight(night ? '#6E74C0' : '#FFD0A0', '#3a2018', night ? .5 : 1.0)); c.add(sunLight(night ? '#9FB0FF' : '#FFE0B0', night ? .6 : 3.4, [0, 20, -30], 20, 80));
  s.update = (t, u) => { const cam = s.camera; const L = t1 - t0; h.face(cam); h.eye(night ? (Math.sin(u * .8) > 0 ? 'look' : 'happy') : 'flat'); h.pose({ armL: [12, 8], armR: [night ? 120 : 12, night ? 20 : 8], legL: [80, -80], legR: [80, -80], head: night ? 12 : -4 });
    const K = smooth(0, L, u); aim(cam, night ? [lerp(2, -1, K), lerp(1.0, 1.4, K), lerp(5, 3.6, K)] : [lerp(-6, 0, K), lerp(1.4, 3.2, K), lerp(9, 6, K)], night ? [0, lerp(3, 6, K), -6] : [0, lerp(1.8, 6, K), -20], 0); return ret(night ? 4.6 : lerp(9.6, 7, K), night ? 30 : 8, 8, { bloom: night ? .5 : .45, bloomT: .8, exposure: night ? 1.05 : 1.0 }); };
  return s;
}

/** Nave: interior com janela (fase 'parte'/'gigante'), Voyager no caminho ('voyager'), final */
export function cenaEspacio(t0, t1, fase = 'parte') {
  const s = makeShot(t0, t1, '#03040C', 36), c = s.scene; s.camera.far = 2400; s.camera.updateProjectionMatrix(); stars(c, 5200, 900, 9); nebula(c, 130, 80, -640, 900, '#7E6BFF', 11, .12); nebula(c, -300, -40, -540, 760, '#FF6FB0', 12, .07);
  c.add(new THREE.AmbientLight('#2A3550', .5)); const sun = new THREE.DirectionalLight('#FFF4E0', 2.6); sun.position.set(-40, 16, 30); c.add(sun);
  const h = heroi(c, 0, 0, 0, '#D8E0FF');
  if (fase === 'parte') { const E = new THREE.Mesh(new THREE.SphereGeometry(4, 80, 56), new THREE.MeshStandardMaterial({ map: earthTex(), roughness: .72, color: '#E8A060' })); E.position.set(-3, -2, -14); c.add(E); s.E = E; const ship = new THREE.Group(); ship.add(new THREE.Mesh(new THREE.CylinderGeometry(.5, .8, 3, 16), std('#E9E6DE', { metalness: .4 }))); ship.children[0].rotation.x = Math.PI / 2; const fl = glowSprite('#7FD0FF', 2.0, .9); fl.position.z = 1.8; ship.add(fl); c.add(ship); s.ship = ship; h.root.visible = false; }
  if (fase === 'voyager') { const pr = probe(); pr.scale.setScalar(.6); pr.position.set(.6, 0, -1.6); c.add(pr); s.pr = pr; const spot = new THREE.PointLight('#FFFFFF', 18, 10); spot.position.set(-2, 2, 1); c.add(spot); h.root.position.set(-1.0, -.9, .2); }
  if (fase === 'gigante' || fase === 'final') { const red = glowSprite('#FF5A2A', fase === 'gigante' ? 260 : 120, 1); red.position.set(40, 10, -400); red.material.fog = false; c.add(red); const core = glowSprite('#FFB070', fase === 'gigante' ? 120 : 50, 1); core.position.copy(red.position); core.material.fog = false; c.add(core); s.red = red;
    const win = new THREE.Group(); const fr = std('#2A2E3A', { metalness: .5 }); win.add(box(6, .3, .3, fr, 0, 1.8, -2)); win.add(box(6, .3, .3, fr, 0, -1.2, -2)); win.add(box(.3, 3.3, .3, fr, -2.9, .3, -2)); win.add(box(.3, 3.3, .3, fr, 2.9, .3, -2)); c.add(win); c.add(box(6, 1.2, 1, std('#3A3E4A'), 0, -1.8, -1.6)); h.root.position.set(0, -1.2, -.6);
    if (fase === 'final') { const faces = []; const R = rng(11); for (let i = 0; i < 40; i++) { const f = glowSprite(['#FFE08A', '#9FE0FF', '#FFB0D0'][i % 3], .5 + R() * .6, .0); f.position.set((R() - .5) * 30, R() * 14 - 2, -30 - R() * 40); c.add(f); faces.push({ f, d: R() }); } s.faces = faces; const bk = cut(bookTex(), .32, .42); c.add(bk); s.bk = bk; } }
  s.update = (t, u) => { const cam = s.camera; const L = t1 - t0; h.face(cam);
    if (fase === 'parte') { s.E.rotation.y = u * .05; s.ship.position.set(lerp(-1, 2, u / L), lerp(-.4, .6, u / L), lerp(-6, -18, smooth(0, L, u))); aim(cam, [0, .4, 2], [lerp(-1, 1.6, u / L), 0, -8], 0); return ret(10, 40, 4, { bloom: .5, bloomT: .8 }); }
    if (fase === 'voyager') { s.pr.rotation.y = .6 + u * .05; h.eye(u < L * .55 ? 'wide' : 'happy'); h.pose({ armR: [u > L * .5 && u < L * .75 ? 140 : 12, 20], armL: [12, 8] }); h.root.position.y = -.9 + Math.sin(u) * .05; const K = smooth(0, L, u); aim(cam, [lerp(2.4, .4, K), lerp(.8, .2, K), lerp(4.4, 3.4, K)], [lerp(.6, 0, K), 0, -1.2], 0); return ret(lerp(5.4, 3.8, K), 3, 8, { bloom: .5, bloomT: .8 }); }
    h.eye(fase === 'final' ? (u < L * .5 ? 'look' : 'happy') : 'sad'); h.pose({ armL: [12, 8], armR: [12, 8], head: 6 });
    if (s.faces) s.faces.forEach(({ f, d }) => f.material.opacity = smooth(d * L * .6, d * L * .6 + 2, u) * .8); if (s.bk) { s.bk.visible = u > L - 10; s.bk.position.set(.35, -.1, -.35); pointer(s.bk, cam); }
    const K = smooth(0, L, u); aim(cam, [lerp(.4, -.4, K), lerp(.4, .8, K), lerp(2.4, 3.4, K)], [lerp(0, .4, K), lerp(.4, 1.6, K), -10], 0); return ret(lerp(2.4, 3.4, K), 2, 12, { bloom: .55, bloomT: .75, tint: fase === 'gigante' ? '#FFD8C8' : '#ffffff' }); };
  return s;
}
