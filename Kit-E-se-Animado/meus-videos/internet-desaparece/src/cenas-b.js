// Cenas 7 a 11: técnico, caixa eletrônico, sofá, Egito 2011, a Terra apagando.
import * as THREE from 'three';
import { makeShot, aim, keys, smooth, lerp, clamp, rng } from './motor/core.js';
import { makeChar, canvasTex } from './motor/char.js';
import { box, std, cut, glowSprite, building, street, lamp, tree, car, skyline, sky, softBlob, pointer } from './motor/kit.js';
import { brickTex, cobbleTex, crowd, stars, nebula, earthTex, uT } from './motor/kit2.js';
import { woodFloor, tileFloor, beam, plant, poster, signTex, lightPanel, sunLight, coinTex } from './comum.js';

/** 7. Sala de servidores: o manual está na internet — 30.48 a 34.70 */
export function cenaTecnico(t0, t1) {
  const s = makeShot(t0, t1, '#0E1424', 40), c = s.scene; c.fog = new THREE.FogExp2('#162238', .05);
  const fl = tileFloor(12, 40, '#2A3348', '#232B3E', 6); fl.position.z = -12; c.add(fl);
  const R = rng(5), leds = [];
  for (const sx of [-1, 1]) for (let i = 0; i < 9; i++) { const z = 1 - i * 1.6; c.add(box(1.0, 2.4, 1.4, std('#1A1F2C', { metalness: .5, roughness: .4 }), sx * 2.1, 1.2, z)); for (let r = 0; r < 12; r++) { const m = new THREE.MeshStandardMaterial({ color: '#000', emissive: '#FF3B30', emissiveIntensity: 2 }); const l = box(.04, .03, .03, m, sx * 1.58, .3 + r * .17, z - .5 + (r % 4) * .25, false); c.add(l); leds.push({ m, p: R() * 6 }); } c.add(box(.02, 2.2, 1.2, '#2C3446', sx * 1.6, 1.2, z, false)); }
  for (let i = 0; i < 6; i++) { const l = lightPanel(.6, 3, '#9FC8FF', 1.4); l.rotation.x = Math.PI / 2; l.position.set(0, 3.0, -i * 3); c.add(l); }
  const warn = new THREE.PointLight('#FF3B30', 6, 10, 1.5); warn.position.set(0, 2.6, -4); c.add(warn); const wg = glowSprite('#FF4A3A', 1.0, .8); wg.position.set(0, 2.8, -8); c.add(wg);
  c.add(new THREE.HemisphereLight('#6E86C8', '#101420', .7)); const key = sunLight('#BFD4FF', 1.2, [3, 6, 5], 8, 30); c.add(key);
  // cabos no chão em primeiro plano
  for (let i = 0; i < 4; i++) { const cb = new THREE.Mesh(new THREE.TorusGeometry(.6 + i * .1, .025, 8, 40, Math.PI), std(['#E9B44C', '#4A86C7', '#E8667F', '#36AEA2'][i])); cb.rotation.x = -Math.PI / 2; cb.position.set(-.9 + i * .3, .03, 1.6); c.add(cb); }
  const tec = makeChar({ outfit: 'jaleco', hair: 'old', hairc: '#E8E8E8', glasses: true, glow: .14 }); tec.place(0, -.6); tec.tint('#D8E4FF'); c.add(tec.root);
  // tablet com "cargando..." e o manual
  const tabC = document.createElement('canvas'); tabC.width = 400; tabC.height = 280; const tx = tabC.getContext('2d'); const tabT = new THREE.CanvasTexture(tabC); tabT.colorSpace = THREE.SRGBColorSpace; let last = -1;
  const paint = (k) => { if (k === last) return; last = k; tx.fillStyle = '#F4F6FA'; tx.fillRect(0, 0, 400, 280); tx.fillStyle = '#1A2238'; tx.textAlign = 'center'; tx.font = '700 30px Inter'; tx.fillText('MANUAL DE REPARACIÓN', 200, 70); tx.strokeStyle = '#4A86C7'; tx.lineWidth = 12; tx.lineCap = 'round'; tx.beginPath(); tx.arc(200, 160, 40, k * .7, k * .7 + 4.4); tx.stroke(); tx.font = '600 24px Inter'; tx.fillStyle = '#555'; tx.fillText(k > 20 ? 'Sin conexión a internet' : 'Cargando...', 200, 250); tabT.needsUpdate = true; };
  const tab = new THREE.Group(); tab.add(box(.62, .44, .03, std('#15151C'), 0, 0, 0)); const ts = new THREE.Mesh(new THREE.PlaneGeometry(.56, .39), new THREE.MeshBasicMaterial({ map: tabT, color: '#B8C0CC' })); ts.position.z = .017; tab.add(ts); tab.position.set(0, 1.12, -.35); c.add(tab);
  s.update = (t, u) => { const cam = s.camera; paint(Math.floor(u * 8)); leds.forEach(l => l.m.emissiveIntensity = Math.sin(u * 6 + l.p) > 0 ? 2.4 : .3); warn.intensity = 4 + Math.sin(u * 8) * 3;
    tec.face(cam); tec.eye(u < 1.3 ? 'look' : u < 2.6 ? 'down' : u < 3.3 ? 'wide' : 'flat'); tec.pose({ armL: [16, -66], armR: [16, -66], head: u < 2.6 ? -8 : 0 });
    const K = smooth(0, 4.2, u); aim(cam, [lerp(-.6, .1, K), lerp(1.4, 1.55, K), lerp(4.6, 2.2, K)], [0, lerp(1.4, 1.5, K), -.6], .01);
    return { focus: lerp(5.2, 2.8, K), range: 1.4, blur: 15, bloom: .3, bloomT: 1, vig: .55, exposure: 1.02 }; };
  return s;
}

/** 8. Caixa eletrônico fora de serviço — 34.70 a 37.82 */
export function cenaCajero(t0, t1) {
  const s = makeShot(t0, t1, '#F1C39A', 40), c = s.scene; c.fog = new THREE.FogExp2('#F2D2B0', .015);
  sky(c, -120, 400, 160, [[0, '#7FB0E0'], [.6, '#D8DCE0'], [1, '#FCE2BE']]);
  const g = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.MeshStandardMaterial({ map: cobbleTex('#B49F8C', 16, 16), roughness: .9 })); g.rotation.x = -Math.PI / 2; g.receiveShadow = true; c.add(g);
  const bt = brickTex('#7E3B2E', 4, 2); const wall = new THREE.Mesh(new THREE.BoxGeometry(14, 7, .5), new THREE.MeshStandardMaterial({ map: bt, roughness: .95 })); wall.position.set(0, 3.5, -2.2); wall.receiveShadow = true; c.add(wall);
  const bank = signTex('BANCO', '#2F3A5A', '#FFF0C8', 1024, 220, 'Fraunces', 150); const bm = new THREE.Mesh(new THREE.PlaneGeometry(4, .86), new THREE.MeshStandardMaterial({ map: bank, emissiveMap: bank, emissive: '#fff', emissiveIntensity: .35 })); bm.position.set(0, 4.6, -1.92); c.add(bm);
  // caixa eletrônico
  c.add(box(1.6, 2.2, .3, std('#C9CDD2', { metalness: .5, roughness: .3 }), 0, 1.4, -1.85)); const atm = signTex('FUERA DE SERVICIO', '#1B2B4A', '#FF6B5A', 768, 512, 'IBM Plex Mono', 64, 700); const sm = new THREE.Mesh(new THREE.PlaneGeometry(.9, .6), new THREE.MeshStandardMaterial({ map: atm, emissiveMap: atm, emissive: '#fff', emissiveIntensity: .9 })); sm.position.set(0, 1.85, -1.68); c.add(sm); c.add(box(.9, .08, .2, '#333', 0, 1.3, -1.62)); for (let i = 0; i < 12; i++) c.add(box(.1, .06, .03, '#666', -.2 + (i % 3) * .2, 1.12 - Math.floor(i / 3) * .1, -1.68, false)); const ag = new THREE.PointLight('#FF6B5A', 3, 3, 1.6); ag.position.set(0, 1.9, -1.2); c.add(ag);
  // cartaz colado à mão
  const note = canvasTex(256, 200, (x) => { x.fillStyle = '#FFF6C8'; x.fillRect(0, 0, 256, 200); x.fillStyle = '#C9361F'; x.font = '700 50px Caveat'; x.textAlign = 'center'; x.fillText('no hay', 128, 80); x.fillText('sistema', 128, 140); }); const nt = cut(note, .5, .4); nt.position.set(1.15, 1.7, -1.9); nt.rotation.z = -.1; c.add(nt);
  for (const x of [-3.2, 3.2]) { c.add(box(1.6, 2.2, .1, '#3A4A5A', x, 1.6, -1.9)); const w = lightPanel(1.4, 2.0, '#FFE0A8', .35); w.position.set(x, 1.6, -1.84); c.add(w); c.add(plant(x, 0, -1.4, .7)); }
  // fila
  const fila = [['hero', null, null, 1.0, -.6, .16], ['rosa', 'long', '#6B3A22', -1.1, .6, 0], ['terno', null, null, -1.7, 1.8, 0], ['amarelo', 'afro', '#2a1b18', -2.1, 3.0, 0]].map(([o, h, hc, x, z, gl], i) => { const k = makeChar({ outfit: o, hair: h, hairc: hc, lash: !!h, glow: gl }); k.place(x, z); k.tint('#FFF0DC'); k.ph = i; c.add(k.root); return k; });
  c.add(new THREE.HemisphereLight('#E9EEFF', '#B08A6A', 1.0)); const sun = sunLight('#FFD29A', 3.0, [-12, 10, 10], 10, 40); c.add(sun);
  s.update = (t, u) => { const cam = s.camera; fila.forEach((k, i) => { k.face(cam); if (i === 0) { k.eye(u < 1.6 ? 'look' : 'sad'); k.pose({ armR: [u < 1.6 ? 60 : 12, u < 1.6 ? 30 : 8], armL: [10, 8], head: u > 1.6 ? -8 : 0 }); } else { k.eye(u > 1.6 ? 'flat' : 'look'); k.pose({ armL: [12, -50], armR: [12, -50] }); } });
    const K = smooth(0, 3.1, u); aim(cam, [lerp(2.4, 1.2, K), lerp(1.6, 1.5, K), lerp(5.5, 3.6, K)], [lerp(-.3, 0, K), 1.5, -1.5], -.01);
    return { focus: lerp(6.2, 4.4, K), range: 2.2, blur: 12, bloom: .3, bloomT: .95, vig: .4, exposure: 1.02 }; };
  return s;
}

/** 9. Sofá: três moedas, meio café — 37.82 a 42.34 */
export function cenaSofa(t0, t1) {
  const s = makeShot(t0, t1, '#2A1E2E', 38), c = s.scene; c.fog = new THREE.FogExp2('#3A2A30', .02);
  const bt = brickTex('#8A3528', 3, 2); const wall = new THREE.Mesh(new THREE.PlaneGeometry(14, 6), new THREE.MeshStandardMaterial({ map: bt, roughness: .95 })); wall.position.set(0, 3, -3); wall.receiveShadow = true; c.add(wall);
  c.add(woodFloor(14, 11, '#5F3F2C'));
  const sf = std('#B23C33', { roughness: .85 }), sf2 = std('#CD5244', { roughness: .85 }); c.add(box(3.8, .46, 1.05, sf, 0, .3, -1.6)); c.add(box(3.8, 1.05, .34, sf, 0, .8, -2.07)); for (const x of [-2.05, 2.05]) c.add(box(.38, .78, 1.2, sf2, x, .46, -1.6));
  const cush = []; [[-1.2, 0], [0, 0], [1.2, 0]].forEach(([x]) => { const m = box(1.12, .66, .2, sf2, x, 1.02, -1.85); c.add(m); }); const fallen = [[-1.6, .1, -.4, .8], [1.4, .1, -.2, -.5]].map(([x, y, z, r]) => { const m = box(1.12, .18, .9, sf2, x, y, z); m.rotation.y = r; c.add(m); return m; });
  const pt = poster(1.2, .9, (x) => { x.fillStyle = '#F2E6CC'; x.fillRect(0, 0, 480, 360); x.fillStyle = '#36AEA2'; x.beginPath(); x.moveTo(0, 360); x.lineTo(160, 140); x.lineTo(300, 300); x.lineTo(380, 200); x.lineTo(480, 360); x.fill(); x.fillStyle = '#F2C14E'; x.beginPath(); x.arc(360, 90, 40, 0, 7); x.fill(); }); pt.position.set(0, 2.6, -2.95); c.add(pt);
  c.add(box(.05, 2.2, .05, '#15151b', -3.0, 1.1, -1.4)); const shade = new THREE.Mesh(new THREE.CylinderGeometry(.22, .38, .4, 24), new THREE.MeshStandardMaterial({ color: '#F6DDA4', emissive: '#FFB866', emissiveIntensity: 1.4 })); shade.position.set(-3.0, 2.3, -1.4); c.add(shade); const lp = new THREE.PointLight('#FFB56E', 14, 10, 1.6); lp.position.set(-2.8, 2.1, -1.0); lp.castShadow = true; c.add(lp); const lg = glowSprite('#FFB870', 1.6, .4); lg.position.copy(shade.position); c.add(lg);
  c.add(plant(3.1, 0, -2.0, 1.1));
  // mesinha com xícara pela metade
  c.add(box(1.4, .07, .7, '#8E6242', 1.6, .48, .6)); for (const [x, z] of [[1.0, .35], [2.2, .35], [1.0, .85], [2.2, .85]]) c.add(box(.06, .46, .06, '#5C3C28', x, .23, z)); const cup = new THREE.Mesh(new THREE.CylinderGeometry(.09, .07, .13, 20), std('#F4F0E4')); cup.position.set(1.4, .58, .6); c.add(cup); const cof = new THREE.Mesh(new THREE.CircleGeometry(.075, 20), std('#4A2A18')); cof.rotation.x = -Math.PI / 2; cof.position.set(1.4, .56, .6); c.add(cof);
  const hero = makeChar({ outfit: 'hero', glow: .16 }); hero.place(-.2, -.5); hero.tint('#FFE6CC'); c.add(hero.root);
  const ct = coinTex(); const coins = [0, 1, 2].map(i => { const m = cut(ct, .16, .16); c.add(m); const g = glowSprite('#FFE08A', .35, .5); c.add(g); return { m, g, i }; });
  c.add(new THREE.HemisphereLight('#6E74C0', '#2a1a14', .8)); const moon = sunLight('#9FB0FF', .7, [3, 6, 6], 7, 26); c.add(moon);
  s.update = (t, u) => { const cam = s.camera; hero.face(cam); const dig = u < 1.5; hero.eye(dig ? 'down' : u < 3.3 ? 'happy' : 'flat'); hero.pose(dig ? { armL: [40 + Math.sin(u * 14) * 20, 30], armR: [40 + Math.cos(u * 14) * 20, 30], lean: 10, head: -10, bob: -.05 } : { armR: [95, 25], armL: [12, 8], head: 4 });
    const hp = hero.root.position; coins.forEach(({ m, g, i }) => { const show = u > 1.5 + i * .25 && u < 4.4; m.visible = show; g.visible = show; const pop = smooth(1.5 + i * .25, 1.7 + i * .25, u); m.position.set(hp.x + .7 + (i - 1) * .2, 1.72 + pop * .06 + (i === 1 ? .08 : 0), hp.z + .2); m.scale.setScalar(.6 + pop * .4); g.position.copy(m.position); pointer(m, cam); });
    const K = smooth(0, 2.6, u), K2 = smooth(3.36, 4.2, u); aim(cam, [lerp(-.8, .3, K) + K2 * 1.1, lerp(1.5, 1.6, K) - K2 * .6, lerp(4.6, 2.6, K) - K2 * .2], [lerp(-.2, .25, K) + K2 * 1.15, lerp(1.3, 1.5, K) - K2 * .95, lerp(-.6, -.4, K) + K2 * 1.0], -.01);
    return { focus: lerp(5.0, 3.0, K) - K2 * 1.0, range: 1.2, blur: 16, bloom: .32, bloomT: .9, vig: .5, exposure: 1.02 }; };
  return s;
}

/** 10. Egito, 2011: cinco dias sem internet — 42.34 a 48.52 */
export function cenaEgito(t0, t1) {
  const s = makeShot(t0, t1, '#D9B47A', 42), c = s.scene; c.fog = new THREE.FogExp2('#E2C08A', .012);
  sky(c, -260, 800, 300, [[0, '#C9A36A'], [.6, '#E6C890'], [1, '#F6E2B6']]);
  // pirâmides ao fundo
  for (const [x, z, k] of [[-30, -160, 38], [10, -190, 46], [42, -170, 26]]) { const p = new THREE.Mesh(new THREE.ConeGeometry(k, k * .9, 4), std('#D8B47A', { roughness: 1 })); p.rotation.y = .785; p.position.set(x, k * .45, z); c.add(p); }
  const sand = new THREE.Mesh(new THREE.PlaneGeometry(600, 600), std('#D9B47A', { roughness: 1 })); sand.rotation.x = -Math.PI / 2; sand.receiveShadow = true; sand.position.z = -100; c.add(sand);
  // ruas de pedra clara, prédios cor de areia com toldos e antenas
  const g = new THREE.Mesh(new THREE.PlaneGeometry(14, 120), new THREE.MeshStandardMaterial({ map: cobbleTex('#C8AE8A', 8, 60), roughness: .9 })); g.rotation.x = -Math.PI / 2; g.position.z = -40; g.receiveShadow = true; c.add(g);
  const R = rng(11), cols = ['#E2C79C', '#D6B488', '#CDA77C', '#E8D3AE'];
  for (const sx of [-1, 1]) for (let i = 0; i < 9; i++) { const h = 6 + R() * 8, z = 2 - i * 7; const b = box(7, h, 6.6, std(cols[i % 4], { roughness: 1 }), sx * 10.5, h / 2, z); c.add(b); for (let f = 0; f < Math.floor(h / 2.6); f++) for (let w = 0; w < 3; w++) { const wn = box(.1, 1.1, .8, std('#5A4630'), sx * 6.98, 1.8 + f * 2.6, z - 2 + w * 2, false); c.add(wn); } const aw = box(.1, .1, 4, std(['#C9473A', '#2F7F73', '#E9B44C'][i % 3]), sx * 6.4, 2.8, z); aw.scale.x = 12; c.add(aw); c.add(box(.06, 1.4, .06, '#5a4a3a', sx * 9, h + .7, z, false)); c.add(box(1, .05, .05, '#5a4a3a', sx * 9, h + 1.3, z, false)); }
  for (let k = 0; k < 5; k++) { const pal = ['#4E6A34', '#6E8A40', '#8AA24A', '#C9C27A']; tree(c, -5.2, -4 - k * 12, 1.4, pal, k); }
  // gente na rua com celulares antigos, olhando
  const ppl = [['terno2', null, null, -1.3, -2.2], ['azul', 'long', '#2a1b18', 1.0, -3.0], ['amarelo', 'bun', '#22161a', 2.2, -6], ['laranja', null, null, -2.4, -7.5]].map(([o, h, hc, x, z], i) => { const k = makeChar({ outfit: o, hair: h, hairc: hc, lash: !!h, glow: .1 }); k.place(x, z); k.tint('#FFE8C0'); k.ph = i; c.add(k.root); return k; });
  const R2 = rng(8), far = []; for (let i = 0; i < 160; i++) far.push([(R2() - .5) * 9, -10 - R2() * 40]); crowd(c, far, { raised: .2, jump: .02, tint: '#F0D8B0', seed: 8 });
  c.add(new THREE.HemisphereLight('#FFF0D0', '#B08A5A', 1.1)); const sun = sunLight('#FFE0A8', 3.2, [16, 18, 8], 26, 90); c.add(sun);
  s.update = (t, u) => { uT.value = t; const cam = s.camera; ppl.forEach(k => { k.face(cam); k.eye(Math.sin(u * 1.5 + k.ph) > 0 ? 'look' : 'down'); k.pose({ armR: [20, -70], armL: [12, 8], head: -6 }); });
    const K = smooth(0, 6.2, u); aim(cam, [lerp(.2, 0, K), lerp(1.6, 4.5, K), lerp(5, 9, K)], [0, lerp(1.6, 8, K), lerp(-6, -120, K)], 0);
    return { focus: lerp(7, 12, K), range: lerp(5, 30, K), blur: 9, bloom: .25, bloomT: 1, vig: .55, exposure: 1.0, sat: .45, tint: '#FFE2B0' }; };
  return s;
}

/** 11. A Terra: um só país, depois o mundo inteiro apaga — 48.52 a 52.12 */
export function cenaTerra(t0, t1) {
  const s = makeShot(t0, t1, '#03040C', 36), c = s.scene; s.camera.far = 2400; s.camera.updateProjectionMatrix(); stars(c, 4200, 800, 9); nebula(c, 130, 80, -640, 900, '#7E6BFF', 11, .1); nebula(c, -300, -40, -540, 760, '#FF6FB0', 12, .07);
  const sun = new THREE.DirectionalLight('#FFF4E0', 2.4); sun.position.set(40, 10, -10); c.add(sun); c.add(new THREE.AmbientLight('#2A3550', .35));
  const E = new THREE.Mesh(new THREE.SphereGeometry(4, 80, 56), new THREE.MeshStandardMaterial({ map: earthTex(), roughness: .72 })); c.add(E);
  const atm = new THREE.Mesh(new THREE.SphereGeometry(4.25, 64, 40), new THREE.ShaderMaterial({ transparent: true, depthWrite: false, side: THREE.BackSide, blending: THREE.AdditiveBlending, vertexShader: 'varying vec3 n;void main(){n=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}', fragmentShader: 'varying vec3 n;void main(){float k=pow(max(.86-abs(n.z),0.),2.4);gl_FragColor=vec4(.35,.65,1.,1.)*k*2.2;}' })); c.add(atm);
  // luzes das cidades no lado da noite (pontos) que vão apagando
  const R = rng(3), N = 2600, pos = new Float32Array(N * 3), colA = new Float32Array(N * 3), ph = []; for (let i = 0; i < N; i++) { const lat = (R() - .5) * 2.4, lon = R() * Math.PI * 2; const r = 4.02; pos[i * 3] = r * Math.cos(lat) * Math.cos(lon); pos[i * 3 + 1] = r * Math.sin(lat); pos[i * 3 + 2] = r * Math.cos(lat) * Math.sin(lon); ph.push(R()); }
  const pg = new THREE.BufferGeometry(); pg.setAttribute('position', new THREE.BufferAttribute(pos, 3)); pg.setAttribute('color', new THREE.BufferAttribute(colA, 3)); const pts = new THREE.Points(pg, new THREE.PointsMaterial({ size: .05, vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })); E.add(pts);
  // marcador do Egito (um ponto que pisca)
  const eg = glowSprite('#FF6B5A', .7, 1); c.add(eg);
  s.update = (t, u) => { const cam = s.camera; E.rotation.y = 1.0 + u * .05; const off = smooth(1.6, 3.4, u);
    for (let i = 0; i < N; i++) { const on = ph[i] > off ? 1 : 0; colA[i * 3] = 1 * on; colA[i * 3 + 1] = .78 * on; colA[i * 3 + 2] = .45 * on; } pg.attributes.color.needsUpdate = true;
    eg.position.set(1.3, 1.6, 3.4).normalize().multiplyScalar(4.1); eg.material.opacity = u < 1.6 ? .6 + .4 * Math.sin(u * 10) : 1 - smooth(1.6, 2.0, u);
    const K = smooth(0, 3.6, u); aim(cam, [lerp(2.2, 0, K), lerp(2.0, .6, K), lerp(7.2, 19, K)], [lerp(1.6, 0, K), lerp(1.8, 0, K), 0], 0);
    return { focus: lerp(5, 12, K), range: 30, blur: 4, bloom: .55, bloomT: .8, bloomR: .7, vig: .5, exposure: 1.04 }; };
  return s;
}
