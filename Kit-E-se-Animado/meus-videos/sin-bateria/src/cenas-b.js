// Cenas 9 a 16 (51 s ao fim)
import * as THREE from 'three';
import { makeShot, aim, keys, smooth, lerp, clamp, rng } from './motor/core.js';
import { makeChar, canvasTex } from './motor/char.js';
import { box, std, cut, glowSprite, pointer, sky, skyline } from './motor/kit.js';
import { crowd, uT } from './motor/kit2.js';
import { tileFloor, woodFloor, beam, plant, poster, signTex, lightPanel, sunLight } from './comum.js';
import { zeroPhone, outlet, cable, setCable, wallPhone, sala, rua, person, CAST } from './pecas.js';

/** 9. Rua: gente arrastando 20 metros de cabo; o alargador vira presente — 51.14 a 58.06 */
export function cenaCabos(t0, t1) {
  const s = makeShot(t0, t1, '#F1C39A', 34), c = s.scene; rua(c, { seed: 4 });
  const R = rng(3), walkers = [];
  for (let i = 0; i < 5; i++) { const x = 5.6 + (i % 2) * 1.4, z0 = -2 - i * 3.2; const k = person(c, CAST[(i + 1) % CAST.length], x, z0, .14, '#FFF0DC', i === 0 ? .12 : .05); k.x0 = x; k.z0 = z0; k.ph = R() * 6; const col = ['#E9B44C', '#E8667F', '#36AEA2', '#F4F0E4', '#4A86C7'][i]; const cb = cable([[x, .2, z0 - 20], [x, .2, z0 - 10], [x, .2, z0]], col, .025); c.add(cb); k.cb = cb; const ph = zeroPhone(.12, .24); ph.paint(0); c.add(ph); k.ph2 = ph; walkers.push(k); }
  // vitrine com o alargador de presente
  const gift = new THREE.Group(); gift.add(box(.7, .5, .5, std('#C9361F'), 0, .25, 0)); gift.add(box(.72, .08, .52, std('#F2C14E'), 0, .25, 0)); gift.add(box(.08, .52, .52, std('#F2C14E'), 0, .25, 0)); const coil = new THREE.Mesh(new THREE.TorusGeometry(.22, .05, 10, 30), std('#F4F0E4')); coil.position.set(0, .65, 0); coil.rotation.x = 1.2; gift.add(coil); gift.position.set(8.4, .9, -3); c.add(gift); c.add(box(1.4, .9, .9, std('#EDE7DA'), 8.4, .45, -3));
  const tag = signTex('REGALO DEL AÑO', '#F2C14E', '#2A2A34', 768, 160, 'Fraunces', 80); const tg = new THREE.Mesh(new THREE.PlaneGeometry(1.6, .34), new THREE.MeshStandardMaterial({ map: tag })); tg.position.set(8.4, 2.0, -3); tg.rotation.y = -Math.PI / 2; c.add(tg);
  s.update = (t, u) => { const cam = s.camera; walkers.forEach((k, i) => { const z = k.z0 + u * .9; k.root.position.z = z; k.walk(u + k.ph, .9, .7); k.face(cam); k.eye(i % 2 ? 'flat' : 'down'); k.pose({ armR: [30, -60], armL: [40, 20] }); const hx = k.x0 - .38; setCable(k.cb, [[hx + Math.sin(i) * .3, .03, z - 20], [hx + Math.sin(u + i) * .4, .03, z - 9], [hx, .05, z - 2], [hx, .6, z - .2], [hx, 1.05, z + .1]]); k.ph2.position.set(k.x0 + .3, 1.15, z + .3); pointer(k.ph2, cam); });
    gift.rotation.y = u * .3;
    const K = smooth(0, 6.9, u); aim(cam, [lerp(3.4, 4.2, K), lerp(1.4, 2.2, K), lerp(4.0, 6.0, K)], [lerp(6.0, 7.2, K), lerp(1.0, 1.3, K), lerp(-6, -2, K)], 0);
    return { focus: lerp(9, 6.5, K), range: 6, blur: 9, bloom: .2, bloomT: 1, vig: .38, exposure: 1.03 }; };
  return s;
}

/** 10. 1983: o primeiro celular de mão, 30 min de conversa e 10 h de carga — 58.06 a 69.64 */
export function cena1983(t0, t1) {
  const s = makeShot(t0, t1, '#3A2A1E', 32), c = s.scene; c.fog = new THREE.FogExp2('#4A3A2A', .03);
  c.add(woodFloor(16, 14, '#6B4A33')); const wall = box(16, 7, .3, std('#8A7A5A'), 0, 3.5, -3.2); c.add(wall); c.add(box(16, 1.0, .32, std('#5A4A3A'), 0, .5, -3.18));
  const blinds = canvasTex(256, 256, (x) => { x.fillStyle = '#FFE0B0'; x.fillRect(0, 0, 256, 256); x.fillStyle = '#B89A70'; for (let i = 0; i < 256; i += 22) x.fillRect(0, i, 256, 10); }); const win = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 2.2), new THREE.MeshStandardMaterial({ map: blinds, emissive: '#FFD8A0', emissiveMap: blinds, emissiveIntensity: .6 })); win.position.set(-3.2, 2.6, -3.03); c.add(win);
  for (let i = 0; i < 5; i++) { const b = beam(.4, 7, '#FFE0B0', .1); b.position.set(-2.4 + i * .5, 2.2, -1.6); b.rotation.set(-.8, 0, -.5); c.add(b); }
  // escritório: mesa, máquina de escrever, telefone fixo, relógio
  c.add(box(2.6, .08, 1.1, std('#7A5236'), .4, .95, -1.5)); for (const [x, z] of [[-.8, -2], [1.6, -2], [-.8, -1], [1.6, -1]]) c.add(box(.08, .92, .08, '#4A3020', x, .46, z)); c.add(box(.6, .25, .45, std('#3A4A3A'), -.4, 1.12, -1.6)); c.add(box(.5, .05, .3, std('#E9E6DE'), -.4, 1.3, -1.7)); const desk = wallPhone('#C9361F'); desk.position.set(1.2, 1.2, -1.6); desk.rotation.x = -1.2; desk.scale.setScalar(.7); c.add(desk);
  const exe = makeChar({ outfit: 'terno', glow: .14 }); exe.place(-.2, -.6); exe.tint('#FFE8C0'); c.add(exe.root);
  // o "tijolo": celular enorme de 1983
  const brick = new THREE.Group(); brick.add(box(.1, .32, .06, std('#E9E6DE'), 0, 0, 0)); brick.add(box(.025, .14, .025, std('#2A2A34'), .02, .22, 0)); for (let i = 0; i < 12; i++) brick.add(box(.018, .012, .01, '#2A2A34', -.02 + (i % 3) * .02, -.06 - Math.floor(i / 3) * .025, .034, false)); const disp = new THREE.Mesh(new THREE.PlaneGeometry(.07, .03), new THREE.MeshBasicMaterial({ color: '#E2483A' })); disp.position.set(0, .07, .031); brick.add(disp); brick.scale.setScalar(1.6); c.add(brick);
  // bateria que esvazia (barra no ar) e tomada com relógio
  const batC = document.createElement('canvas'); batC.width = 400; batC.height = 200; const bx = batC.getContext('2d'); const batT = new THREE.CanvasTexture(batC); batT.colorSpace = THREE.SRGBColorSpace; let lastB = -1;
  const paintB = (k) => { k = Math.round(k * 20) / 20; if (k === lastB) return; lastB = k; bx.clearRect(0, 0, 400, 200); bx.strokeStyle = '#FBF7EC'; bx.lineWidth = 14; bx.beginPath(); bx.roundRect(20, 30, 320, 140, 22); bx.stroke(); bx.fillStyle = '#FBF7EC'; bx.fillRect(344, 75, 30, 50); bx.fillStyle = k > .3 ? '#7FD08A' : '#E2483A'; bx.fillRect(40, 50, 280 * k, 100); batT.needsUpdate = true; };
  const bat = new THREE.Mesh(new THREE.PlaneGeometry(.9, .45), new THREE.MeshBasicMaterial({ map: batT, transparent: true })); c.add(bat);
  const ot = outlet(); ot.position.set(2.4, .6, -3.03); c.add(ot); const chg = box(.3, .15, .25, std('#2A2A34'), 2.4, 1.05, -2.0); c.add(chg); const cb = cable([[2.4, .6, -3.0], [2.4, .3, -2.6], [2.4, 1.0, -2.0]], '#2A2A34', .012); c.add(cb);
  c.add(new THREE.HemisphereLight('#FFE0C0', '#2a1a10', .6)); c.add(sunLight('#FFD8A0', 2.0, [-6, 6, -1], 8, 30));
  s.update = (t, u) => { const cam = s.camera; exe.face(cam); const ep = exe.root.position; const call = u < 6.6, chargeP = smooth(6.6, 7.2, u);
    exe.eye(u < 2 ? 'happy' : u < 6.6 ? 'smug' : u < 8.5 ? 'wide' : 'flat'); exe.pose({ armR: call ? [130, 130] : [lerp(130, 12, chargeP), lerp(130, 8, chargeP)], armL: [14, -60], head: call ? 6 : 0 });
    brick.position.set(lerp(ep.x + .3, 2.4, chargeP), lerp(1.75, 1.32, chargeP), lerp(ep.z + .2, -2.0, chargeP)); brick.rotation.set(0, 0, lerp(-.3, 0, chargeP));
    const lvl = u < 6.6 ? 1 - smooth(1.0, 6.4, u) : smooth(7.2, 11.4, u) * .25; paintB(lvl); bat.position.set(u < 6.6 ? ep.x - .9 : 2.4, u < 6.6 ? 2.4 : 1.8, u < 6.6 ? ep.z + .2 : -1.9); pointer(bat, cam);
    const K = smooth(0, 6.4, u), K2 = smooth(6.6, 9.0, u); aim(cam, [lerp(-1.6, -.4, K) + K2 * 2.0, lerp(1.7, 1.8, K), lerp(3.0, 2.6, K) + K2 * .2], [lerp(-.6, -.3, K) + K2 * 2.4, lerp(1.6, 1.7, K) - K2 * .2, -1.2], 0);
    return { focus: lerp(3.6, 3.1, K) + K2 * .4, range: 1.8, blur: 13, bloom: .3, bloomT: .9, vig: .55, exposure: 1.0, sat: .55, tint: '#FFE2B0' }; };
  return s;
}

/** 11. A bateria de lítio: fábrica 1991 e a medalha do Nobel 2019 — 69.64 a 78.62 */
export function cenaLitio(t0, t1) {
  const s = makeShot(t0, t1, '#0E1424', 34), c = s.scene; c.fog = new THREE.FogExp2('#162238', .04);
  c.add(tileFloor(16, 30, '#2A3348', '#232B3E', 6));
  const cellT = canvasTex(256, 512, (x) => { const g = x.createLinearGradient(0, 0, 256, 0); g.addColorStop(0, '#2F6E9A'); g.addColorStop(.5, '#8FC8F0'); g.addColorStop(1, '#2F6E9A'); x.fillStyle = g; x.fillRect(0, 0, 256, 512); x.fillStyle = '#F4F0E4'; x.font = '900 60px Inter'; x.textAlign = 'center'; x.fillText('Li-ion', 128, 270); x.fillStyle = '#C9CDD2'; x.fillRect(0, 0, 256, 40); });
  const cells = []; for (let i = 0; i < 9; i++) { const m = new THREE.Mesh(new THREE.CylinderGeometry(.35, .35, 1.4, 32), new THREE.MeshStandardMaterial({ map: cellT, metalness: .4, roughness: .3 })); m.position.set(-4 + i * 1.0, .7, -2.5 - (i % 2) * .6); c.add(m); cells.push(m); const g = glowSprite('#7FD0FF', 1.0, .3); g.position.set(m.position.x, 1.5, m.position.z); c.add(g); }
  c.add(box(12, .2, 1.4, std('#3A4258'), 0, .1, -1.0)); for (let i = 0; i < 10; i++) c.add(box(.1, .05, 1.3, '#5A6278', -5 + i * 1.1, .21, -1.0, false));
  const rob = new THREE.Group(); rob.add(box(.4, 1.6, .4, std('#E9B44C'), 0, .8, 0)); const arm = box(1.4, .2, .2, std('#E9B44C'), .6, 1.6, 0); rob.add(arm); rob.position.set(3.4, 0, -2.0); c.add(rob);
  const medT = canvasTex(256, 256, (x) => { x.clearRect(0, 0, 256, 256); const g = x.createRadialGradient(100, 90, 10, 128, 128, 120); g.addColorStop(0, '#FFF0B0'); g.addColorStop(.6, '#D9A84A'); g.addColorStop(1, '#8A6020'); x.fillStyle = g; x.beginPath(); x.arc(128, 128, 118, 0, 7); x.fill(); x.strokeStyle = '#8A6020'; x.lineWidth = 6; x.beginPath(); x.arc(128, 128, 96, 0, 7); x.stroke(); x.fillStyle = '#8A6020'; x.beginPath(); x.arc(128, 112, 34, 0, 7); x.fill(); x.fillRect(96, 150, 64, 30); });
  const med = cut(medT, .8, .8); c.add(med); const mg = glowSprite('#FFE08A', 2.2, .0); c.add(mg); const rib = box(.25, .9, .02, std('#4A86C7'), 0, 0, 0); c.add(rib);
  const sci = [0, 1, 2].map(i => person(c, [['jaleco', 'old', '#E8E8E8'], ['jaleco', null, null], ['jaleco', 'bun', '#22161a']][i], -1.6 + i * 1.6, 0.2, 0, '#D8E4FF', .12));
  for (let i = 0; i < 4; i++) { const l = lightPanel(.6, 3, '#9FC8FF', 1.4); l.rotation.x = Math.PI / 2; l.position.set(-3 + i * 2, 3.2, -1); c.add(l); }
  c.add(new THREE.HemisphereLight('#6E86C8', '#101420', .8)); c.add(sunLight('#BFD4FF', 1.4, [3, 6, 5], 8, 30));
  s.update = (t, u) => { const cam = s.camera; cells.forEach((m, i) => { m.rotation.y = u * .6 + i; }); arm.rotation.y = Math.sin(u * 1.5) * .6;
    const nob = smooth(4.7, 5.4, u); sci.forEach((k, i) => { k.face(cam); k.root.visible = nob > .02; k.eye('happy'); k.pose({ armL: [150, 20], armR: [150, 20], bob: Math.abs(Math.sin(u * 5 + i)) * .04 * nob }); });
    med.visible = nob > .02; med.scale.setScalar(.3 + nob * .7); med.position.set(0, 2.5, .2); pointer(med, cam); med.rotation.z = Math.sin(u * 2) * .1; mg.position.set(0, 2.5, .15); mg.material.opacity = nob * .7; rib.visible = nob > .02; rib.position.set(0, 3.2, .18);
    const K = smooth(0, 4.6, u), K2 = smooth(4.6, 6.0, u); aim(cam, [lerp(-3.6, 2.0, K) * (1 - K2) + 0 * K2, lerp(1.4, 1.6, K) + K2 * .5, lerp(1.6, 2.2, K) + K2 * 2.6], [lerp(-3.6, 2.4, K) * (1 - K2), lerp(.9, 1.0, K) + K2 * 1.2, -2.4 + K2 * 2.2], 0);
    return { focus: lerp(4.2, 4.6, K) * (1 - K2) + K2 * 4.6, range: 2, blur: 12, bloom: .45, bloomT: .85, vig: .55, exposure: 1.04 }; };
  return s;
}

/** 12. Museu: sem bateria, nada de celular, fone, relógio, patinete — 78.62 a 86.18 */
export function cenaMuseu(t0, t1) {
  const s = makeShot(t0, t1, '#E9E6DE', 34), c = s.scene; c.fog = new THREE.FogExp2('#E9E6DE', .03);
  c.add(tileFloor(24, 20, '#D6D3C9', '#C8C5BA', 6)); c.add(box(24, 6, .3, std('#F2EEE4'), 0, 3, -3.2));
  const items = []; const mk = (i, draw, w, h) => { const x = -4.5 + i * 3; c.add(box(1.0, 1.0, 1.0, std('#FFFFFF'), x, .5, -1.6)); const t = canvasTex(256, 256, draw); const m = cut(t, w, h); m.position.set(x, 1.0 + h / 2 + .05, -1.6); c.add(m); const sp = new THREE.SpotLight('#FFF4E0', 18, 6, .35, .6, 1.2); sp.position.set(x, 4.5, -.6); sp.target.position.set(x, 1, -1.6); c.add(sp, sp.target); const g = glowSprite('#FFF4E0', 1.6, .25); g.position.set(x, 1.6, -1.55); c.add(g); items.push({ m, sp, g }); };
  mk(0, (x) => { x.clearRect(0, 0, 256, 256); x.fillStyle = '#15151C'; x.beginPath(); x.roundRect(78, 16, 100, 220, 16); x.fill(); x.fillStyle = '#2B3A72'; x.fillRect(86, 30, 84, 190); }, .5, .5);
  mk(1, (x) => { x.clearRect(0, 0, 256, 256); x.fillStyle = '#F4F0E4'; for (const cx of [80, 176]) { x.beginPath(); x.ellipse(cx, 100, 34, 42, 0, 0, 7); x.fill(); x.fillRect(cx - 12, 120, 24, 90); } }, .5, .5);
  mk(2, (x) => { x.clearRect(0, 0, 256, 256); x.fillStyle = '#2A2A34'; x.fillRect(100, 0, 56, 256); x.beginPath(); x.roundRect(66, 70, 124, 124, 30); x.fill(); x.fillStyle = '#36AEA2'; x.beginPath(); x.roundRect(80, 84, 96, 96, 22); x.fill(); }, .5, .5);
  mk(3, (x) => { x.clearRect(0, 0, 256, 256); x.strokeStyle = '#2A2A34'; x.lineWidth = 14; x.beginPath(); x.moveTo(70, 30); x.lineTo(70, 200); x.lineTo(200, 200); x.stroke(); x.fillStyle = '#E8667F'; x.fillRect(46, 24, 50, 14); x.fillStyle = '#2A2A34'; for (const cx of [70, 200]) { x.beginPath(); x.arc(cx, 214, 26, 0, 7); x.fill(); } }, .8, .8);
  const vis = [0, 1].map(i => person(c, CAST[i + 6], -2.2 + i * 4.4, .6, 0, '#FFFFFF', .08));
  c.add(new THREE.HemisphereLight('#FFFFFF', '#B9B3A6', .6)); c.add(sunLight('#FFF6E0', .6, [1, 8, 6], 8, 30));
  const times = [.4, 3.0, 4.3, 6.0];
  s.update = (t, u) => { const cam = s.camera; items.forEach(({ m, sp, g }, i) => { const off = smooth(times[i] + .6, times[i] + 1.2, u); m.material.color.setScalar(lerp(1, .25, off)); sp.intensity = lerp(18, 1.5, off); g.material.opacity = lerp(.25, 0, off); pointer(m, cam); });
    vis.forEach((k, i) => { k.face(cam); k.eye(u > 2 ? 'sad' : 'look'); k.pose({ armL: [12, 8], armR: [12, 8], head: -6 }); });
    const K = smooth(0, 7.5, u); aim(cam, [lerp(-4.5, 4.5, K), 1.6, 3.4], [lerp(-4.5, 4.5, K), 1.3, -1.6], 0);
    return { focus: 5.0, range: 2.5, blur: 11, bloom: .35, bloomT: .9, vig: .5, exposure: 1.0 }; };
  return s;
}

/** 13. Fábrica: 1.240 milhões de celulares por ano... e agora cabos — 86.18 a 95.88 */
export function cenaFabrica(t0, t1) {
  const s = makeShot(t0, t1, '#2A2E36', 34), c = s.scene; c.fog = new THREE.FogExp2('#3A4048', .02);
  c.add(tileFloor(30, 40, '#8A8E94', '#7A7E86', 6));
  const belts = []; for (let r = 0; r < 4; r++) { const z = -1 - r * 3; c.add(box(16, .8, 1.0, std('#3A4258'), 0, .4, z)); for (let i = 0; i < 14; i++) c.add(box(.06, .05, 1.0, '#5A6278', -7 + i * 1.1, .82, z, false)); belts.push(z); }
  const N = 64, phones = [], coils = []; for (let i = 0; i < N; i++) { const p = box(.22, .03, .42, std('#15151C', { roughness: .2 }), 0, .86, 0); c.add(p); phones.push(p); const k = new THREE.Mesh(new THREE.TorusGeometry(.18, .045, 8, 24), std(['#F4F0E4', '#E9B44C', '#2A2A34'][i % 3])); k.rotation.x = Math.PI / 2; c.add(k); coils.push(k); }
  for (let i = 0; i < 6; i++) { const l = lightPanel(.6, 4, '#E8F0FF', 1.4); l.rotation.x = Math.PI / 2; l.position.set(-6 + i * 2.4, 4.0, -4); c.add(l); }
  const pile = []; for (let i = 0; i < 40; i++) { const k = new THREE.Mesh(new THREE.TorusGeometry(.25, .06, 8, 24), std(['#F4F0E4', '#E9B44C', '#2A2A34', '#E8667F'][i % 4])); k.rotation.set(Math.PI / 2 + (i % 5) * .2, 0, i); k.position.set(5 + (i % 5) * .25 - .5, .1 + Math.floor(i / 5) * .1, .8 + (i % 3) * .2); c.add(k); pile.push(k); }
  const wk = [0, 1, 2].map(i => person(c, [['avental', 'bun', '#22161a'], ['laranja', null, null], ['verde', 'long', '#3a2418']][i], -3 + i * 3, .4, 0, '#EEF2FF', .1));
  c.add(new THREE.HemisphereLight('#D8E4FF', '#3A3A40', .9)); c.add(sunLight('#F0F4FF', 1.6, [2, 8, 4], 12, 40));
  s.update = (t, u) => { const cam = s.camera; const sw = smooth(4.4, 5.0, u);
    for (let i = 0; i < N; i++) { const r = i % 4, x = -8 + (((i >> 2) * 1.0 + u * 1.6) % 16); phones[i].position.set(x, .86, belts[r]); coils[i].position.set(x, .88, belts[r]); phones[i].visible = sw < .5; coils[i].visible = sw >= .5; }
    pile.forEach((k, i) => { k.visible = sw > .5 && i < (u - 5) * 10; });
    wk.forEach((k, i) => { k.face(cam); k.eye(sw < .5 ? 'down' : (i % 2 ? 'wide' : 'flat')); k.pose({ armL: [30, -50], armR: [30, -50] }); });
    const K = smooth(0, 9.7, u); aim(cam, [lerp(-5, 4, K), lerp(3.2, 2.2, K), lerp(4.5, 4.0, K)], [lerp(-3, 4, K), .9, -3], 0);
    return { focus: lerp(7, 5.5, K), range: 4, blur: 10, bloom: .28, bloomT: .95, vig: .45, exposure: 1.02 }; };
  return s;
}

/** 15. Casa: inventamos o telefone fixo — 103.64 a 113.10 */
export function cenaFixo(t0, t1) {
  const s = makeShot(t0, t1, '#2A1E2E', 32), c = s.scene; sala(c, { night: true, wall: '#7A3A44' });
  const wp = wallPhone('#E9B44C'); wp.position.set(0.9, 1.6, -2.8); c.add(wp); const cord = cable([[.69, 1.45, -2.72], [.6, 1.0, -2.6], [.8, .9, -2.5], [.69, 1.2, -2.7]], '#E9B44C', .012); c.add(cord);
  const sp = new THREE.SpotLight('#FFE0A8', 30, 8, .4, .5, 1.3); sp.position.set(.9, 4.5, -.5); sp.target.position.set(.9, 1.5, -2.8); c.add(sp, sp.target); const g = glowSprite('#FFE0A8', 2.0, .3); g.position.set(.9, 1.6, -2.7); c.add(g);
  const conf = []; const R = rng(4); for (let i = 0; i < 60; i++) { const m = box(.05, .05, .01, ['#F2C14E', '#E8667F', '#36AEA2', '#FFFFFF'][i % 4], 0, 0, 0, false); c.add(m); conf.push({ m, x: (R() - .5) * 4, z: -1.5 + R() * 2, v: .6 + R() * .8, p: R() * 6 }); }
  const fam = [['hero', null, null, -.6, -1.2, .16], ['roxo', 'old', '#E8E8E8', -1.8, -1.6, .08], ['azul', 'bob', '#3a2418', 2.2, -1.5, .08]].map(([o, h, hc, x, z, gl]) => { const k = makeChar({ outfit: o, hair: h, hairc: hc, lash: !!h, glow: gl, glasses: o === 'roxo' }); k.place(x, z); k.tint('#FFE6CC'); c.add(k.root); return k; });
  s.update = (t, u) => { const cam = s.camera; const rev = u > 6.6; fam.forEach((k, i) => { k.face(cam); k.eye(rev ? 'happy' : (i === 0 ? 'smug' : 'look')); if (rev) k.cheer(u, i, 1); else k.pose(i === 0 ? { armR: [100, 10], armL: [12, 8] } : { armL: [12, 8], armR: [12, 8] }); });
    conf.forEach(({ m, x, z, v, p }) => { m.visible = rev; m.position.set(x + Math.sin(u * 2 + p) * .2, 3.4 - ((u - 6.6) * v % 3.4), z); m.rotation.set(u * 3 + p, u * 2, 0); });
    const K = smooth(0, 6.4, u), K2 = smooth(6.4, 7.4, u); aim(cam, [lerp(-.4, .2, K) + K2 * .6, lerp(1.7, 1.75, K), lerp(4.6, 3.4, K) - K2 * 1.4], [lerp(-.4, .3, K) + K2 * .6, lerp(1.4, 1.5, K) + K2 * .1, -2.4], 0);
    return { focus: lerp(5.6, 4.6, K) - K2 * 1.4, range: 2.4, blur: 12, bloom: .35, bloomT: .9, vig: .5, exposure: 1.02 }; };
  return s;
}

/** 16. Fim: celular em 0 %, o fixo toca, é a avó — 113.10 ao fim */
export function cenaFim(t0, t1) {
  const s = makeShot(t0, t1, '#E9B48C', 32), c = s.scene; sala(c);
  const wp = wallPhone('#E9B44C'); wp.position.set(-1.2, 1.6, -2.8); c.add(wp); const cord = cable([[-1.41, 1.45, -2.72], [-1.3, .9, -2.4], [-.9, 1.1, -2.0]], '#E9B44C', .012); c.add(cord);
  const hero = makeChar({ outfit: 'hero', glow: .16 }); hero.place(-.6, -1.9); hero.tint('#FFE6CC'); c.add(hero.root);
  const ph = zeroPhone(.14, .29); c.add(ph);
  const ring = canvasTex(256, 128, (x) => { x.clearRect(0, 0, 256, 128); x.strokeStyle = '#F2C14E'; x.lineWidth = 10; x.lineCap = 'round'; for (let i = 0; i < 3; i++) { x.beginPath(); x.arc(128, 128, 40 + i * 30, Math.PI * 1.15, Math.PI * 1.85); x.stroke(); } }); const rg = cut(ring, .9, .45); c.add(rg);
  // a avó, na janela da frente, com o fixo dela
  const gma = makeChar({ outfit: 'roxo', hair: 'old', hairc: '#E8E8E8', lash: true, glasses: true, glow: .1 }); gma.place(1.0, -10, .3, 1); gma.tint('#FFE2C4'); c.add(gma.root); const gw = lightPanel(2.0, 2.4, '#FFC67E', .9); gw.position.set(1.0, 2.0, -10.3); c.add(gw); c.add(box(2.3, 1.1, .3, std('#C7553E'), 1.0, .55, -9.7)); const gph = wallPhone('#36AEA2'); gph.scale.setScalar(.6); gph.position.set(1.7, 1.9, -10.2); c.add(gph);
  const fac = new THREE.Mesh(new THREE.PlaneGeometry(26, 14), std('#B5664A')); fac.position.set(0, 4, -10.4); c.add(fac);
  s.update = (t, u) => { const cam = s.camera; hero.face(cam); gma.face(cam); const hp = hero.root.position; const ringOn = u > 2.0 && u < 4.2, pick = smooth(4.0, 4.4, u);
    wp.position.x = -1.2 + (ringOn ? Math.sin(u * 60) * .01 : 0); rg.visible = ringOn; rg.position.set(-1.2, 2.2, -2.6); pointer(rg, cam);
    hero.eye(u < 2.0 ? 'sad' : u < 4.2 ? 'wide' : 'happy'); hero.pose({ armR: [u < 2 ? 30 : 12, u < 2 ? -60 : 8], armL: [lerp(12, 140, pick), lerp(8, 120, pick)] });
    ph.position.set(hp.x + .3, 1.15, hp.z + .3); ph.visible = u < 2.2; pointer(ph, cam); wp.hs.position.set(lerp(-.21, .45, pick), lerp(.02, .12, pick), lerp(.06, .9, pick));
    gma.eye(u > 5.0 ? 'happy' : 'look'); gma.pose({ armL: [140, 130], armR: [u > 5.6 ? 150 : 12, 10] });
    const K = smooth(0, 4.6, u), K2 = smooth(4.6, 6.6, u); aim(cam, [lerp(1.4, -.2, K) + K2 * 1.2, lerp(1.6, 1.7, K), lerp(2.6, 3.0, K) + K2 * 1.0], [lerp(-.2, -.8, K) + K2 * 1.6, lerp(1.4, 1.6, K) + K2 * .4, lerp(-1.8, -2.0, K) - K2 * 6], 0);
    return { focus: lerp(4.4, 5.0, K) + K2 * 4, range: 2 + K2 * 10, blur: lerp(12, 7, K2), bloom: .3, bloomT: .95, vig: .45, exposure: 1.02 }; };
  return s;
}
