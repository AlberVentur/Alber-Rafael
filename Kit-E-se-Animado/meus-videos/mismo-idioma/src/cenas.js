// As cenas do vídeo "¿y si todos habláramos el mismo idioma?"
import * as THREE from 'three';
import { makeShot, aim, keys, smooth, lerp, clamp, rng } from './motor/core.js';
import { makeChar, canvasTex } from './motor/char.js';
import { box, std, cut, glowSprite, building, street, lamp, tree, car, skyline, sky, softBlob, pointer } from './motor/kit.js';
import { brickTex, cobbleTex, crowd, uT } from './motor/kit2.js';
import { woodFloor, tileFloor, beam, plant, poster, signTex, lightPanel, sunLight } from './comum.js';

const bubbleTex = (txt, col = '#FBF7EC') => canvasTex(512, 300, (x) => { x.clearRect(0, 0, 512, 300); x.fillStyle = col; x.strokeStyle = '#2A2A34'; x.lineWidth = 8; x.beginPath(); x.roundRect(10, 10, 492, 210, 60); x.fill(); x.stroke(); x.beginPath(); x.moveTo(110, 214); x.lineTo(80, 290); x.lineTo(170, 214); x.fill(); x.stroke(); x.fillStyle = '#C9361F'; x.font = '900 92px Fraunces'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(txt, 256, 118); });

/** 1 e 7. Jantar em família com a sogra */
export function cenaJantar(t0, t1, fim = false) {
  const s = makeShot(t0, t1, '#1E1626', 40), c = s.scene; c.fog = new THREE.FogExp2('#2A1E2A', .03);
  const wall = new THREE.Mesh(new THREE.PlaneGeometry(16, 7), new THREE.MeshStandardMaterial({ map: (() => { const t = canvasTex(256, 256, (x) => { x.fillStyle = '#7A3A44'; x.fillRect(0, 0, 256, 256); x.fillStyle = '#86444E'; for (let i = 0; i < 256; i += 32) x.fillRect(i, 0, 14, 256); }); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(6, 3); return t; })(), roughness: .95 })); wall.position.set(0, 3.5, -3); wall.receiveShadow = true; c.add(wall);
  c.add(woodFloor(16, 12, '#5F3F2C'));
  // janela de noite com cidade
  const win = lightPanel(2.2, 1.8, '#2A3A6A', .6); win.position.set(-3.2, 2.6, -2.95); c.add(win); for (let i = 0; i < 24; i++) { const g = glowSprite('#FFCB86', .12, .9); g.position.set(-4.1 + (i % 6) * .36, 1.9 + Math.floor(i / 6) * .4, -2.9); c.add(g); } c.add(box(2.4, .1, .1, '#EDE7DA', -3.2, 3.55, -2.9)); c.add(box(2.4, .1, .1, '#EDE7DA', -3.2, 1.65, -2.9)); c.add(box(.08, 1.9, .1, '#EDE7DA', -3.2, 2.6, -2.9));
  const p1 = poster(1.0, .8, (x) => { x.fillStyle = '#F2E6CC'; x.fillRect(0, 0, 400, 320); x.fillStyle = '#36AEA2'; x.beginPath(); x.arc(200, 170, 90, 0, 7); x.fill(); }); p1.position.set(2.6, 2.7, -2.95); c.add(p1);
  // mesa com toalha, pratos, velas, travessa
  c.add(box(3.6, .08, 1.4, std('#D8C8A8'), 0, .95, -.6)); c.add(box(3.7, .5, 1.5, std('#E8667F', { roughness: .9 }), 0, .7, -.6)); for (const [x, z] of [[-1.6, -1.2], [1.6, -1.2], [-1.6, 0], [1.6, 0]]) c.add(box(.08, .9, .08, '#5C3C28', x, .45, z));
  for (const x of [-1.1, 0, 1.1]) { const pl = new THREE.Mesh(new THREE.CylinderGeometry(.22, .2, .03, 24), std('#FFFFFF')); pl.position.set(x, 1.01, -.35); c.add(pl); const food = new THREE.Mesh(new THREE.SphereGeometry(.1, 14, 10), std('#C98A3E')); food.scale.y = .5; food.position.set(x, 1.05, -.35); c.add(food); }
  const tray = new THREE.Mesh(new THREE.CylinderGeometry(.35, .3, .08, 24), std('#D9B48A')); tray.position.set(0, 1.03, -.9); c.add(tray);
  for (const x of [-.6, .6]) { c.add(box(.05, .28, .05, '#FBF3DF', x, 1.13, -.85)); const f = glowSprite('#FFC67A', .45, .9); f.position.set(x, 1.32, -.85); c.add(f); const l = new THREE.PointLight('#FFB070', .8, 3, 1.6); l.position.set(x, 1.4, -.6); c.add(l); }
  const lamp1 = new THREE.Mesh(new THREE.ConeGeometry(.45, .4, 24, 1, true), new THREE.MeshStandardMaterial({ color: '#E9B44C', emissive: '#FFB866', emissiveIntensity: .8, side: THREE.DoubleSide })); lamp1.position.set(0, 3.0, -.7); c.add(lamp1); c.add(box(.02, 2, .02, '#222', 0, 4.2, -.7, false)); const lp = new THREE.PointLight('#FFC27A', 7, 8, 1.6); lp.position.set(0, 2.6, -.5); lp.castShadow = true; c.add(lp); const lg = glowSprite('#FFC27A', 1.4, .5); lg.position.set(0, 2.85, -.7); c.add(lg);
  c.add(plant(3.4, 0, -2.4, 1.0));
  const hero = makeChar({ outfit: 'hero', glow: .16 }); hero.place(-1.1, -1.3); hero.tint('#FFE6CC'); c.add(hero.root);
  const sue = makeChar({ outfit: 'roxo', hair: 'old', hairc: '#E8E8E8', lash: true, glasses: true, glow: .12 }); sue.place(1.15, -1.3); sue.tint('#FFE6CC'); c.add(sue.root);
  const ami = makeChar({ outfit: 'azul', hair: 'bob', hairc: '#3a2418', lash: true, glow: .1 }); ami.place(0, -1.45); ami.tint('#FFE6CC'); c.add(ami.root);
  const bub = cut(bubbleTex(fim ? 'psst...' : '¡HOLA!'), 1.0, .59); c.add(bub); const heart = glowSprite('#FF7A9A', .6, .9); c.add(heart);
  c.add(new THREE.HemisphereLight('#8E86C8', '#2a1a14', .6)); c.add(sunLight('#9FB0FF', .6, [3, 6, 6], 7, 26));
  s.update = (t, u) => { const cam = s.camera; [hero, sue, ami].forEach(k => k.face(cam)); const hp = hero.root.position;
    if (!fim) { const talk = u > .2 && u < 2.8; hero.eye(talk ? 'happy' : 'look'); hero.pose({ armR: [talk ? 60 + Math.sin(u * 8) * 15 : 14, talk ? 30 : -60], armL: [14, -60], bob: talk ? Math.abs(Math.sin(u * 8)) * .02 : 0 });
      bub.visible = u > .2 && u < 3.0; bub.position.set(hp.x + .3, 2.45, hp.z + .2); pointer(bub, cam);
      sue.eye(u < 3.2 ? 'flat' : 'heart'); sue.pose({ armL: [14, -60], armR: [u > 3.2 ? 40 : 14, u > 3.2 ? 100 : -60], head: u > 3.2 ? 8 : 0 }); heart.visible = u > 3.3; heart.position.set(1.15, 2.3 + (u - 3.3) * .2, -1.1);
      ami.eye('look'); ami.pose({ armL: [14, -60], armR: [14, -60] });
      const K = smooth(0, 3.4, u); aim(cam, [lerp(-.8, .9, K), lerp(1.7, 1.75, K), lerp(2.0, 2.6, K)], [lerp(-.9, 1.1, K), lerp(1.75, 1.7, K), -1.3], -.01);
      return { focus: lerp(3.3, 3.9, K), range: 1.6, blur: 14, bloom: .25, bloomT: 1, vig: .5, exposure: .96 }; }
    // fim: você cochicha com a amiga, a sogra entende tudo
    hero.root.position.x = -.55; hero.eye(u < 2.0 ? 'smug' : 'wide'); hero.pose({ armR: [70, 110], armL: [14, -60], lean: u < 2.0 ? 8 : 0 });
    bub.visible = u > .2 && u < 2.1; bub.position.set(-.4, 2.4, -1.1); pointer(bub, cam); heart.visible = false;
    ami.root.position.x = .15; ami.eye(u < 2.0 ? 'look' : 'wide'); ami.pose({ armL: [14, -60], armR: [14, -60] });
    sue.eye(u < 2.0 ? 'look' : 'angry'); sue.pose({ armL: [u > 2.0 ? 40 : 14, u > 2.0 ? 120 : -60], armR: [u > 2.0 ? 40 : 14, u > 2.0 ? 120 : -60], head: u > 2.0 ? -8 : 0 });
    const K = smooth(0, 2.0, u), K2 = smooth(1.9, 3.0, u); aim(cam, [lerp(-.1, .9, K2), lerp(1.7, 1.8, K2), lerp(2.6, 1.9, K2)], [lerp(-.2, 1.15, K2), lerp(1.7, 1.75, K2), -1.3], -.01);
    return { focus: lerp(3.9, 3.3, K2), range: 1.2, blur: 15, bloom: .25, bloomT: 1, vig: .5 + K2 * .1, exposure: .96, tint: K2 > .5 ? '#FFE8E0' : '#ffffff' };
  };
  return s;
}

/** 2. Muro de cartazes em muitos idiomas; viram todos "HOLA" — 5.02 a 11.10 */
const SAUD = ['HELLO', '你好', 'ПРИВЕТ', 'مرحبا', 'こんにちは', 'OLÁ', 'BONJOUR', 'नमस्ते', 'CIAO', '안녕', 'JAMBO', 'MERHABA', 'HALLO', 'SAWUBONA', 'ΓΕΙΑ', 'שלום', 'XIN CHÀO', 'HEJ', 'SALUT', 'AHOJ'];
const COLS = [['#F4EEDC', '#C9361F'], ['#2F6E9A', '#FFFFFF'], ['#E9B44C', '#2A2A34'], ['#36AEA2', '#FFFFFF'], ['#E8667F', '#FFF4DC'], ['#2A2A34', '#F2C14E']];
const posterTex = (w, i) => canvasTex(300, 400, (x) => { const [bg, fg] = COLS[i % COLS.length]; x.fillStyle = bg; x.fillRect(0, 0, 300, 400); x.strokeStyle = fg; x.lineWidth = 8; x.strokeRect(14, 14, 272, 372); x.fillStyle = fg; x.textAlign = 'center'; x.textBaseline = 'middle'; const sz = w.length > 6 ? 46 : 70; x.font = `900 ${sz}px Inter`; x.fillText(w, 150, 190); x.font = '700 22px Inter'; x.fillText('★ ★ ★', 150, 320); });
export function cenaMuro(t0, t1) {
  const s = makeShot(t0, t1, '#F1C39A', 42), c = s.scene; c.fog = new THREE.FogExp2('#F7CFA4', .02);
  sky(c, -170, 500, 180, [[0, '#6FA7D8'], [.5, '#CFD8DC'], [.8, '#FBD7A6'], [1, '#FFE7BE']]);
  const g = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.MeshStandardMaterial({ map: cobbleTex('#B49F8C', 16, 16), roughness: .9 })); g.rotation.x = -Math.PI / 2; g.receiveShadow = true; c.add(g);
  const wall = new THREE.Mesh(new THREE.BoxGeometry(30, 8, .5), new THREE.MeshStandardMaterial({ map: brickTex('#8E3D30', 8, 3), roughness: .95 })); wall.position.set(0, 4, -3); wall.receiveShadow = true; c.add(wall);
  const R = rng(6), posters = []; for (let i = 0; i < 60; i++) { const col = i % 15, row = Math.floor(i / 15); const a = posterTex(SAUD[i % SAUD.length], i), b = posterTex('HOLA', i); const m = new THREE.Mesh(new THREE.PlaneGeometry(.9, 1.2), new THREE.MeshStandardMaterial({ map: a, roughness: .8 })); m.position.set(-7 + col * 1.0 + (R() - .5) * .15, 1.3 + row * 1.3 + (R() - .5) * .12, -2.72); m.rotation.z = (R() - .5) * .12; c.add(m); posters.push({ m, a, b, d: Math.abs(col - 7) * .05 + row * .04 + R() * .2 }); }
  const ppl = [['hero', null, null, 0, .2, .16], ['rosa', 'long', '#6B3A22', -1.8, -.6, 0], ['terno2', null, null, 1.9, -.2, 0], ['amarelo', 'afro', '#2a1b18', 3.4, -.8, 0]].map(([o, h, hc, x, z, gl], i) => { const k = makeChar({ outfit: o, hair: h, hairc: hc, lash: !!h, glow: gl }); k.place(x, z); k.tint('#FFF0DC'); k.ph = i; c.add(k.root); return k; });
  c.add(new THREE.HemisphereLight('#E9EEFF', '#B08A6A', 1.0)); c.add(sunLight('#FFD29A', 3.0, [-12, 12, 10], 14, 50));
  s.update = (t, u) => { const cam = s.camera; const sw = 2.55; posters.forEach(p => { const on = u > sw + p.d; p.m.material.map = on ? p.b : p.a; const flip = clamp((u - sw - p.d) / .12); p.m.scale.x = Math.abs(1 - 2 * flip) * .9 + .1; });
    ppl.forEach((k, i) => { k.face(cam); k.eye(u < sw ? 'look' : (i % 2 ? 'wide' : 'happy')); k.pose({ armL: [12, 8], armR: [u > sw + .3 && i === 0 ? 150 : 12, 8], head: u < sw ? Math.sin(u + i) * 6 : 0 }); });
    const K = smooth(0, 6.0, u); aim(cam, [lerp(-3.5, .3, K), lerp(2.6, 1.9, K), lerp(2.2, 5.6, K)], [lerp(-3.5, 0, K), lerp(2.8, 2.6, K), -2.7], -.01);
    return { focus: lerp(4.9, 6.0, K), range: 3, blur: 10, bloom: .2, bloomT: 1, vig: .38, exposure: 1.02 }; };
  return s;
}

/** 3. Turista joga o dicionário fora — 11.10 a 15.46 */
export function cenaTurista(t0, t1) {
  const s = makeShot(t0, t1, '#9CC8EE', 42), c = s.scene; c.fog = new THREE.FogExp2('#F2D8B8', .01);
  sky(c, -170, 500, 200, [[0, '#5E9AD8'], [.55, '#A9CBE8'], [.85, '#FBD9AE'], [1, '#FFE9C6']]); skyline(c, -150, 420, 90, ['#C9A6A6', '#B898A0', '#A88C98'], false, 12); street(c, false);
  const shops = [{ name: 'TRATTORIA', bg: '#3E7A5C', fg: '#FFF4DC', awning: '#D94F58' }, { name: 'SOUVENIRS', bg: '#2F6E9A', fg: '#FFF4DC', awning: '#F4EEDC' }, { name: 'HOTEL', bg: '#7A3248', fg: '#F2C14E' }, { name: 'GELATO', bg: '#E8667F', fg: '#FFF4DC', awning: '#36AEA2' }];
  let z = 6, i = 0; while (z > -90) { const d = 7 + (i * 37 % 5); c.add(building(500 + i, { x: 13, z: z - d / 2, w: 8, d, floors: 4 + i % 3, side: -1, night: false, lit: .2, shop: shops[i % 4] })); c.add(building(600 + i, { x: -13, z: z - d / 2, w: 8, d, floors: 5 + i % 3, side: 1, night: false, lit: .2, shop: shops[(i + 2) % 4] })); z -= d; i++; }
  for (let k = 0; k < 6; k++) tree(c, 5.2, -6 - k * 11, 1.2, ['#3E5F3A', '#4F7A44', '#6E9A50', '#D7D282'], k);
  const hero = makeChar({ outfit: 'hero', glow: .16 }); hero.place(5.9, -1.4, .14); hero.tint('#FFF0DC'); c.add(hero.root);
  const hat = new THREE.Mesh(new THREE.CylinderGeometry(.42, .42, .03, 24), std('#E9D29A')); c.add(hat); const hat2 = new THREE.Mesh(new THREE.CylinderGeometry(.22, .24, .16, 24), std('#E9D29A')); c.add(hat2); const band = new THREE.Mesh(new THREE.CylinderGeometry(.245, .245, .05, 24), std('#C9361F')); c.add(band);
  const suit = new THREE.Group(); suit.add(box(.5, .65, .25, std('#C9361F'), 0, .45, 0)); suit.add(box(.25, .05, .05, '#222', 0, .82, 0)); for (const sx of [-1, 1]) suit.add(box(.03, .3, .03, '#888', sx * .1, .97, 0)); suit.position.set(6.45, .14, -1.3); c.add(suit);
  const bookT = canvasTex(200, 260, (x) => { x.fillStyle = '#2F5A8A'; x.fillRect(0, 0, 200, 260); x.fillStyle = '#F2C14E'; x.font = '900 26px Fraunces'; x.textAlign = 'center'; x.fillText('DICCIONARIO', 100, 90); x.fillRect(30, 120, 140, 6); x.font = '700 22px Inter'; x.fillText('ES · EN · FR', 100, 170); }); const book = cut(bookT, .32, .42); c.add(book);
  const bin = new THREE.Mesh(new THREE.CylinderGeometry(.3, .25, .8, 20, 1, true), std('#3E5F3A', { side: THREE.DoubleSide })); bin.position.set(5.0, .54, -1.2); c.add(bin);
  const ppl = [['rosa', 'long', '#6B3A22', 7.4, -5.0], ['terno3', null, null, 4.6, -7.0], ['verde', 'bun', '#22161a', 7.2, -10]].map(([o, h, hc, x, z2], n) => { const k = makeChar({ outfit: o, hair: h, hairc: hc, lash: !!h, glow: .08 }); k.place(x, z2, x > 5 ? .14 : 0); k.tint('#FFF0DC'); k.ph = n; c.add(k.root); return k; });
  c.add(new THREE.HemisphereLight('#E9EEFF', '#B08A6A', 1.1)); c.add(sunLight('#FFD29A', 3.0, [-20, 16, 10], 30, 90));
  s.update = (t, u) => { const cam = s.camera; hero.face(cam); const hp = hero.root.position; hat.position.set(hp.x, 1.98, hp.z); hat2.position.set(hp.x, 2.07, hp.z); band.position.set(hp.x, 2.02, hp.z);
    const thr = smooth(1.2, 1.7, u); hero.eye(u < 1.1 ? 'look' : u < 2.8 ? 'happy' : 'smug'); hero.pose({ armR: [lerp(60, 30, thr), lerp(60, -10, thr)], armL: [12, 8] });
    const bk = clamp((u - 1.4) / .6); book.position.set(lerp(hp.x + .5, 5.0, bk), u < 1.4 ? 1.35 : 1.35 + Math.sin(bk * Math.PI) * .5 - bk * .6, lerp(hp.z + .3, -1.2, bk)); book.visible = bk < 1; pointer(book, cam); book.rotation.z = bk * 5;
    ppl.forEach(k => { k.face(cam); k.eye('happy'); k.pose({ armR: [70, 30], armL: [12, 8] }); });
    const K = smooth(0, 4.4, u); aim(cam, [lerp(5.0, 4.4, K), lerp(1.6, 1.8, K), lerp(2.8, 3.6, K)], [lerp(5.6, 5.6, K), 1.4, -1.6], -.01);
    return { focus: lerp(4.4, 5.3, K), range: 2.4, blur: 12, bloom: .2, bloomT: 1, vig: .36, exposure: 1.04 }; };
  return s;
}

/** 4. Sala de aula de inglês vazia; professor e intérprete sem trabalho — 15.46 a 22.92 */
export function cenaAula(t0, t1) {
  const s = makeShot(t0, t1, '#2A3028', 40), c = s.scene; c.fog = new THREE.FogExp2('#3A4038', .03);
  c.add(woodFloor(16, 14, '#7A5236')); const wall = box(16, 7, .3, std('#D8D0B8'), 0, 3.5, -3.2); c.add(wall); c.add(box(16, 1.1, .32, std('#5A7A6A'), 0, .55, -3.18));
  const bb = canvasTex(1200, 560, (x) => { x.fillStyle = '#1F3A2C'; x.fillRect(0, 0, 1200, 560); x.strokeStyle = '#C9A06A'; x.lineWidth = 22; x.strokeRect(0, 0, 1200, 560); x.fillStyle = '#F2F2EA'; x.font = '700 110px Caveat'; x.textAlign = 'left'; x.fillText('Hello = Hola', 90, 190); x.fillText('Thank you = Gracias', 90, 340); x.font = '700 70px Caveat'; x.fillText('Lesson 1', 90, 470); x.strokeStyle = '#E2483A'; x.lineWidth = 12; x.beginPath(); x.moveTo(60, 120); x.lineTo(1100, 380); x.stroke(); });
  const board = new THREE.Mesh(new THREE.PlaneGeometry(4.6, 2.15), new THREE.MeshStandardMaterial({ map: bb, roughness: .9 })); board.position.set(0, 2.5, -3.03); c.add(board);
  const map = poster(1.4, .9, (x) => { x.fillStyle = '#9CC8EE'; x.fillRect(0, 0, 560, 360); x.fillStyle = '#6E9A50'; [[120, 120, 90, 60], [300, 160, 70, 90], [430, 110, 80, 50], [260, 80, 50, 30]].forEach(([a, b, w, h]) => { x.beginPath(); x.ellipse(a, b, w, h, .3, 0, 7); x.fill(); }); }); map.position.set(3.6, 2.6, -3.02); c.add(map);
  const clock = new THREE.Mesh(new THREE.CircleGeometry(.3, 30), std('#FFFFFF')); clock.position.set(-3.4, 3.6, -3.02); c.add(clock);
  // carteiras vazias
  for (let r = 0; r < 3; r++) for (let k = 0; k < 4; k++) { const x = -2.7 + k * 1.8, z = .4 + r * 1.3; c.add(box(1.0, .05, .6, std('#C9A06A'), x, .78, z)); c.add(box(.05, .76, .05, '#555', x - .45, .38, z - .25)); c.add(box(.05, .76, .05, '#555', x + .45, .38, z + .25)); c.add(box(.5, .05, .45, std('#2F6E9A'), x, .45, z + .55)); c.add(box(.5, .5, .05, std('#2F6E9A'), x, .7, z + .78)); }
  const tea = makeChar({ outfit: 'terno3', hair: 'bun', hairc: '#22161a', lash: true, glasses: true, glow: .14 }); tea.place(-.9, -2.2); tea.tint('#FFF0DC'); c.add(tea.root);
  const int = makeChar({ outfit: 'jaleco', glow: .1 }); int.place(1.4, -2.0); int.tint('#FFF0DC'); c.add(int.root);
  const hs = new THREE.Mesh(new THREE.TorusGeometry(.24, .035, 8, 24, Math.PI), std('#222')); c.add(hs);
  const boxT = canvasTex(200, 120, (x) => { x.fillStyle = '#C9A06A'; x.fillRect(0, 0, 200, 120); x.fillStyle = '#5A3A1A'; x.font = '900 26px Inter'; x.textAlign = 'center'; x.fillText('MIS COSAS', 100, 70); }); const bx = cut(boxT, .55, .33); c.add(bx);
  c.add(new THREE.HemisphereLight('#E9EEFF', '#6A5A4A', .9)); c.add(sunLight('#FFE8C8', 2.0, [6, 7, 5], 9, 30)); const w1 = beam(2.0, 7, '#FFE0B0', .14); w1.position.set(3.4, 2.6, -1); w1.rotation.set(-.5, -.5, .3); c.add(w1);
  s.update = (t, u) => { const cam = s.camera; tea.face(cam); int.face(cam); const tp = tea.root.position, ip = int.root.position;
    tea.eye(u < 1.4 ? 'look' : 'sad'); tea.pose({ armL: [20, -70], armR: [20, -70], head: u > 1.4 ? -8 : 0 }); bx.position.set(tp.x, 1.1, tp.z + .3); pointer(bx, cam);
    int.eye(u < 1.0 ? 'look' : 'sad'); int.pose({ armL: [12, 8], armR: [12, 8], head: -6 }); hs.position.set(ip.x, 1.82, ip.z); hs.rotation.set(0, 0, 0);
    const K = smooth(0, 7.4, u); aim(cam, [lerp(-.5, .4, K), lerp(1.4, 1.9, K), lerp(1.2, 4.6, K)], [lerp(-.6, .2, K), lerp(1.5, 2.0, K), -2.4], -.01);
    return { focus: lerp(3.4, 6.8, K), range: 2.5, blur: 13, bloom: .22, bloomT: 1, vig: .45, exposure: 1.02 }; };
  return s;
}

/** 5. Praça à noite: as palavras intraduzíveis sobem e se apagam — 22.92 a 28.52 */
const WORDS = ['saudade', 'hygge', 'sobremesa', '木漏れ日', 'gezellig', 'ubuntu', 'wabi-sabi', 'cafuné', 'friolero', 'fernweh'];
export function cenaPalavras(t0, t1) {
  const s = makeShot(t0, t1, '#141228', 42), c = s.scene; c.fog = new THREE.FogExp2('#2A2240', .02);
  sky(c, -170, 460, 340, [[0, '#0E1030'], [.5, '#2A2252'], [.8, '#5B3460'], [1, '#8A4A6A']]); skyline(c, -150, 400, 170, ['#2F2748', '#3B2F54', '#4A3A5E'], true, 6);
  const g = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), new THREE.MeshStandardMaterial({ map: cobbleTex('#6A5A6A', 24, 24), roughness: .9 })); g.rotation.x = -Math.PI / 2; g.receiveShadow = true; c.add(g);
  for (let i = 0; i < 4; i++) { lamp(c, -4 + i * 2.7, -4 - (i % 2) * 2, 1, true); } for (let i = 0; i < 16; i++) { const f = glowSprite(['#FFD27A', '#FF9F7A', '#9FE0FF'][i % 3], .25, .9); f.position.set(-5 + i * .66, 4.0 - Math.sin(i / 15 * Math.PI) * .6, -3); c.add(f); }
  let z = 2, i = 0; while (z > -40) { const d = 8; c.add(building(700 + i, { x: 10, z: z - d / 2, w: 8, d, floors: 4, side: -1, night: true, lit: .5 })); c.add(building(800 + i, { x: -10, z: z - d / 2, w: 8, d, floors: 4, side: 1, night: true, lit: .5 })); z -= d; i++; }
  const mus = [['terno2', null, null, -1.2, -1.4, 'guitar'], ['amarelo', 'afro', '#2a1b18', 1.2, -1.6, 'sing'], ['laranja', null, null, 0, -2.6, '']].map(([o, h, hc, x, z2, role], n) => { const k = makeChar({ outfit: o, hair: h, hairc: hc, lash: !!h, glow: .14 }); k.place(x, z2); k.tint('#E8D8F0'); k.ph = n; k.role = role; c.add(k.root); return k; });
  const gt = cut(canvasTex(160, 420, (x) => { x.clearRect(0, 0, 160, 420); x.fillStyle = '#5A3420'; x.fillRect(68, 10, 24, 220); x.fillStyle = '#D98A3E'; x.beginPath(); x.ellipse(80, 270, 56, 50, 0, 0, 7); x.ellipse(80, 350, 72, 66, 0, 0, 7); x.fill(); x.fillStyle = '#2A1810'; x.beginPath(); x.arc(80, 300, 22, 0, 7); x.fill(); }), .42, 1.1); c.add(gt);
  const notes = []; for (let n = 0; n < 8; n++) { const m = cut(canvasTex(96, 128, (x) => { x.clearRect(0, 0, 96, 128); x.fillStyle = '#F2C14E'; x.beginPath(); x.ellipse(36, 100, 22, 16, -.4, 0, 7); x.fill(); x.fillRect(52, 14, 8, 88); x.fillRect(52, 14, 30, 10); }), .2, .27); c.add(m); notes.push(m); }
  const words = WORDS.map((w, n) => { const tx = canvasTex(600, 160, (x) => { x.clearRect(0, 0, 600, 160); x.fillStyle = '#FFF4DC'; x.shadowColor = '#FFD27A'; x.shadowBlur = 24; x.font = `700 ${w.length > 6 ? 84 : 100}px Caveat`; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(w, 300, 80); }); const m = cut(tx, 2.2, .58, { blend: true }); c.add(m); return { m, n, x: (n % 5 - 2) * 1.0, z: -.4 - Math.floor(n / 5) * .8 }; });
  const R = rng(5), far = []; for (let k = 0; k < 120; k++) far.push([(R() - .5) * 12, -5 - R() * 12]); crowd(c, far, { raised: .4, jump: .06, tint: '#C8B8E0', seed: 5 });
  c.add(new THREE.HemisphereLight('#8E86C8', '#2a1f28', .8)); c.add(sunLight('#B9B0F0', .9, [-8, 14, 8], 14, 50));
  s.update = (t, u) => { uT.value = t; const cam = s.camera; mus.forEach(k => { k.face(cam); k.eye(u < 2.2 ? 'happy' : 'sad'); k.pose(k.role === 'guitar' ? { armL: [40, 70], armR: [40 + Math.sin(u * 12) * 8, 60] } : k.role === 'sing' ? { armL: [60, 20], armR: [60, 20], head: 6 } : { armL: [12, 8], armR: [12, 8] }); });
    const gp = mus[0].root.position; gt.position.set(gp.x + .05, 1.05, gp.z + .25); gt.rotation.z = -1.1; pointer(gt, cam); gt.rotation.z = -1.1;
    notes.forEach((m, n) => { const k = ((u * .4 + n / 8) % 1); m.position.set(lerp(-1, 1.4, n / 8) + Math.sin(u * 2 + n) * .2, 1.8 + k * 2.2, -1.6); m.visible = u < 2.6; pointer(m, cam); });
    words.forEach(({ m, n, x, z }) => { const a = .3 + n * .25, k = clamp((u - a) / 3.2); m.visible = u > a; m.position.set(x, 2.0 + k * 2.6, z); m.material.opacity = Math.min(1, (u - a) * 3) * (1 - smooth(.55, 1, k)); pointer(m, cam); });
    const K = smooth(0, 5.6, u); aim(cam, [lerp(.2, -.2, K), lerp(1.6, 2.4, K), lerp(4.4, 6.2, K)], [0, lerp(2.2, 3.0, K), -1.6], -.01);
    return { focus: lerp(5.2, 6.8, K), range: 3.5, blur: 10, bloom: .45, bloomT: .85, vig: .5, exposure: 1.02 }; };
  return s;
}

/** 6. 1887: o inventor do esperanto escreve o livro — 28.52 a 36.64 */
export function cenaEsperanto(t0, t1) {
  const s = makeShot(t0, t1, '#3A2A1E', 40), c = s.scene; c.fog = new THREE.FogExp2('#4A3A2A', .03);
  c.add(woodFloor(14, 12, '#5F3F2C')); const wall = new THREE.Mesh(new THREE.PlaneGeometry(14, 7), new THREE.MeshStandardMaterial({ map: (() => { const t = canvasTex(256, 256, (x) => { x.fillStyle = '#6A5A3A'; x.fillRect(0, 0, 256, 256); x.fillStyle = '#7A6A44'; for (let i = 0; i < 256; i += 40) for (let j = 0; j < 256; j += 40) { x.beginPath(); x.arc(i + 20, j + 20, 6, 0, 7); x.fill(); } }); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(5, 3); return t; })() })); wall.position.set(0, 3.5, -2.6); c.add(wall);
  // estante com livros
  for (let r = 0; r < 4; r++) { c.add(box(3, .06, .4, '#4A3020', 3.2, .6 + r * .7, -2.4)); for (let b = 0; b < 12; b++) c.add(box(.18, .5 + (b % 3) * .06, .3, std(['#7A2A22', '#2F4A6A', '#3E5A3A', '#8A6A2A'][(b + r) % 4]), 1.9 + b * .23, .88 + r * .7, -2.35)); }
  // escrivaninha, lampião, papéis, livro verde
  c.add(box(2.4, .08, 1.0, std('#6B4A33'), -.3, .95, -.8)); for (const [x, z] of [[-1.4, -1.2], [.8, -1.2], [-1.4, -.4], [.8, -.4]]) c.add(box(.08, .92, .08, '#4A3020', x, .46, z));
  const lampG = new THREE.Mesh(new THREE.SphereGeometry(.16, 20, 14), new THREE.MeshStandardMaterial({ color: '#FFE0A0', emissive: '#FFB860', emissiveIntensity: 2.5 })); lampG.position.set(-1.2, 1.25, -.9); c.add(lampG); const ll = new THREE.PointLight('#FFB860', 10, 6, 1.6); ll.position.set(-1.1, 1.5, -.6); ll.castShadow = true; c.add(ll); const lg = glowSprite('#FFB860', 1.2, .5); lg.position.copy(lampG.position); c.add(lg);
  const flag = canvasTex(300, 200, (x) => { x.fillStyle = '#2E8A3E'; x.fillRect(0, 0, 300, 200); x.fillStyle = '#FFFFFF'; x.fillRect(0, 0, 100, 100); x.fillStyle = '#2E8A3E'; x.beginPath(); for (let k = 0; k < 10; k++) { const r = k % 2 ? 16 : 38, a = -Math.PI / 2 + k * Math.PI / 5; x.lineTo(50 + r * Math.cos(a), 50 + r * Math.sin(a)); } x.fill(); });
  const fl = new THREE.Mesh(new THREE.PlaneGeometry(1.2, .8), new THREE.MeshStandardMaterial({ map: flag, side: THREE.DoubleSide })); fl.position.set(-2.4, 2.8, -2.5); c.add(fl);
  const bookT = canvasTex(240, 320, (x) => { x.fillStyle = '#2E8A3E'; x.fillRect(0, 0, 240, 320); x.fillStyle = '#F2E6CC'; x.font = '900 34px Fraunces'; x.textAlign = 'center'; x.fillText('LINGVO', 120, 110); x.fillText('INTERNACIA', 120, 150); x.font = '700 30px Fraunces'; x.fillText('1887', 120, 250); }); const book = cut(bookT, .36, .48); c.add(book); const bg = glowSprite('#9FE0A0', .9, .0); c.add(bg);
  for (let k = 0; k < 6; k++) { const pp = box(.3, .005, .4, '#F2E6CC', -.8 + k * .22, 1.0 + k * .002, -.7 + (k % 2) * .1); pp.rotation.y = k * .3; c.add(pp); }
  const inv = makeChar({ outfit: 'terno', hair: 'old', hairc: '#D8D0C0', glasses: true, glow: .14 }); inv.place(-.2, -1.6); inv.tint('#FFE8C0'); c.add(inv.root);
  
  // depois: os poucos falantes nativos (uma família pequena)
  const fam = [['rosa', 'long', '#6B3A22', 1.4, -1.2], ['azul', 'bob', '#3a2418', 2.0, -1.5]].map(([o, h, hc, x, z]) => { const k = makeChar({ outfit: o, hair: h, hairc: hc, lash: true, glow: .1 }); k.place(x, z, 0, .85); k.tint('#FFE8C0'); c.add(k.root); return k; });
  c.add(new THREE.HemisphereLight('#FFE0C0', '#2a1a10', .55)); const w1 = beam(1.8, 7, '#FFE0B0', .1); w1.position.set(2.2, 2.6, -1); w1.rotation.set(-.5, -.4, .3); c.add(w1);
  s.update = (t, u) => { const cam = s.camera; inv.face(cam); const ip = inv.root.position; 
    const up = smooth(3.8, 4.4, u); inv.eye(u < 3.8 ? 'down' : 'happy'); inv.pose(u < 3.8 ? { armR: [30 + Math.sin(u * 10) * 6, -50], armL: [14, -60], head: -8 } : { armR: [lerp(30, 150, up), lerp(-50, 20, up)], armL: [14, -60] });
    book.position.set(ip.x + .4, lerp(1.05, 2.3, up), ip.z + .55); pointer(book, cam); bg.position.copy(book.position); bg.material.opacity = up * .6;
    const F = smooth(5.0, 5.6, u); fam.forEach((k, n) => { k.face(cam); k.root.visible = F > .05; k.eye('happy'); k.cheer(u, n, 1); });
    const K = smooth(0, 5.0, u), K2 = smooth(5.0, 8.1, u); aim(cam, [lerp(-1.0, .2, K) + K2 * .6, lerp(1.6, 1.8, K), lerp(1.6, 3.0, K) + K2 * .8], [lerp(-.2, -.1, K) + K2 * .8, lerp(1.3, 1.9, K), -1.2], -.01);
    return { focus: lerp(2.6, 4.0, K) + K2 * .6, range: 1.6 + K2, blur: 13, bloom: .35, bloomT: .9, vig: .55, exposure: 1.0, sat: .55, tint: '#FFE2B0' }; };
  return s;
}

export const CENAS = [
  [cenaJantar, 0, 5.02], [cenaMuro, 5.02, 11.10], [cenaTurista, 11.10, 15.46], [cenaAula, 15.46, 22.92],
  [cenaPalavras, 22.92, 28.52], [cenaEsperanto, 28.52, 36.64], [(a, b) => cenaJantar(a, b, true), 36.64, 999],
];
