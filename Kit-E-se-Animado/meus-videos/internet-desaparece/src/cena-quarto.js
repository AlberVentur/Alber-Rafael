// Quarto de manhã: celular sem conexão, vizinho na janela da frente. Usado no começo e no fim.
import * as THREE from 'three';
import { makeShot, aim, keys, smooth, lerp, clamp, rng } from './motor/core.js';
import { makeChar, canvasTex } from './motor/char.js';
import { box, std, cut, glowSprite, sky, skyline, softBlob } from './motor/kit.js';
import { brickTex, phone } from './motor/kit2.js';
import { woodFloor, beam, plant, poster, drawOffline, drawFlood, lightPanel, sunLight } from './comum.js';

function quarto(c, fim) {
  c.fog = new THREE.FogExp2('#E9B48C', .006);
  sky(c, -80, 260, 140, [[0, '#7FA6D8'], [.55, '#F2C4A0'], [.85, '#FFB27A'], [1, '#FFD9A8']]);
  skyline(c, -70, 260, 40, ['#C48A86', '#B07A80', '#9C6E7A'], false, 4);
  // parede com janela grande
  const bt = brickTex('#9A4632', 2, 2), wm = () => new THREE.MeshStandardMaterial({ map: bt, roughness: .95 });
  [[-4.6, 2.6, 5.4, 5.2], [4.6, 2.6, 5.4, 5.2], [0, .5, 3.8, 1.0], [0, 4.7, 3.8, .8]].forEach(([x, y, w, h]) => c.add(box(w, h, .3, wm(), x, y, -3)));
  for (const [x, y, w, h] of [[-1.9, 2.6, .12, 3.4], [1.9, 2.6, .12, 3.4], [0, 4.3, 3.9, .12], [0, 1.05, 4.0, .16], [0, 2.75, 3.8, .05]]) c.add(box(w, h, .2, '#EDE7DA', x, y, -2.95));
  const curtain = (x) => { const t = canvasTex(256, 512, (g) => { for (let i = 0; i < 8; i++) { g.fillStyle = i % 2 ? '#E7C36A' : '#D4AE52'; g.fillRect(i * 32, 0, 32, 512); } }); const m = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 3.9), new THREE.MeshStandardMaterial({ map: t, roughness: 1, side: THREE.DoubleSide })); m.position.set(x, 2.5, -2.75); m.castShadow = true; return m; }; c.add(curtain(-2.35), curtain(2.35));
  c.add(woodFloor(14, 12, '#7A5236'));
  const rug = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 2.2), new THREE.MeshStandardMaterial({ map: canvasTex(512, 360, (x) => { x.fillStyle = '#2F6E78'; x.fillRect(0, 0, 512, 360); x.strokeStyle = '#F2C14E'; x.lineWidth = 8; x.strokeRect(20, 20, 472, 320); x.strokeStyle = '#E8667F'; x.strokeRect(44, 44, 424, 272); }), roughness: 1 })); rug.rotation.x = -Math.PI / 2; rug.position.set(.4, .012, -.4); rug.receiveShadow = true; c.add(rug);
  // cama à esquerda (em primeiro plano)
  c.add(box(2.2, .45, 3.2, std('#6B4A33'), -2.6, .25, -.6)); c.add(box(2.1, .3, 3.0, std('#F3EEE4'), -2.6, .6, -.6)); c.add(box(2.18, .22, 2.0, std('#E8667F', { roughness: .9 }), -2.6, .8, .05)); c.add(box(2.2, 1.3, .16, std('#5A3C28'), -2.6, .9, -2.15)); c.add(box(.8, .22, .5, std('#FFFFFF'), -3.1, .82, -1.7)); c.add(box(.8, .22, .5, std('#F6E6C8'), -2.1, .82, -1.7));
  // criado-mudo com abajur, livros e caneca à direita
  c.add(box(.8, .7, .6, std('#8E6242'), 2.8, .35, -1.9)); const shade = new THREE.Mesh(new THREE.CylinderGeometry(.17, .28, .32, 24), new THREE.MeshStandardMaterial({ color: '#F6DDA4', emissive: '#FFB866', emissiveIntensity: 1.2 })); shade.position.set(2.7, 1.25, -1.95); c.add(shade); c.add(box(.04, .4, .04, '#222', 2.7, .9, -1.95)); const lp = new THREE.PointLight('#FFB56E', 6, 6, 1.6); lp.position.set(2.6, 1.3, -1.6); c.add(lp); const lg = glowSprite('#FFC07A', 1.2, .35); lg.position.set(2.7, 1.25, -1.9); c.add(lg);
  [['#D2728A', 0], ['#4A86C7', .05]].forEach(([k, d]) => c.add(box(.36, .05, .26, k, 3.0, .73 + d, -1.85))); const mug = new THREE.Mesh(new THREE.CylinderGeometry(.06, .05, .13, 20), std('#36AEA2')); mug.position.set(2.95, .78, -1.7); c.add(mug);
  c.add(plant(3.6, 0, -2.4, 1.1));
  // quadros na parede
  const p1 = poster(.9, 1.2, (x) => { x.fillStyle = '#F2E6CC'; x.fillRect(0, 0, 360, 480); x.fillStyle = '#E8667F'; x.beginPath(); x.arc(180, 200, 110, 0, 7); x.fill(); x.fillStyle = '#36AEA2'; x.fillRect(0, 330, 360, 150); }); p1.position.set(-4.4, 2.9, -2.83); c.add(p1);
  const p2 = poster(.7, .5, (x) => { x.fillStyle = '#2F3A5A'; x.fillRect(0, 0, 280, 200); x.fillStyle = '#F2C14E'; for (let i = 0; i < 18; i++) x.fillRect(20 + (i * 53) % 240, 20 + (i * 37) % 160, 6, 6); }); p2.position.set(3.4, 2.6, -2.83); c.add(p2);
  // fio de luzinhas sobre a janela
  for (let i = 0; i < 16; i++) { const x = -2.4 + i * .32, y = 4.15 - Math.sin(i / 15 * Math.PI) * .25; const g = glowSprite(['#FFD27A', '#FF9F7A', '#9FE0FF'][i % 3], .22, .9); g.position.set(x, y, -2.7); c.add(g); }
  // prédio da frente, do outro lado da rua
  const ft = brickTex('#B5664A', 3, 3); const fac = new THREE.Mesh(new THREE.PlaneGeometry(26, 22), new THREE.MeshStandardMaterial({ map: ft, roughness: .95 })); fac.position.set(0, 4, -10); fac.receiveShadow = true; c.add(fac);
  const wins = [];
  for (let fx = -3; fx <= 3; fx++) for (let fy = 0; fy < 3; fy++) { const x = fx * 3.2 - 1, y = .8 + fy * 3.6; if (fx === 0 && fy === 0) continue; const lit = (fx * 7 + fy * 3) % 3 !== 0; c.add(box(1.7, 2.3, .1, '#EDE3D2', x, y + 1.25, -9.92, false)); const w = lightPanel(1.5, 2.1, lit ? '#FFCB86' : '#3A3550', lit ? .7 : .4); w.position.set(x, y + 1.25, -9.85); c.add(w); wins.push(w); c.add(box(1.9, .12, .3, '#D9CDB8', x, y + .1, -9.75)); if ((fx + fy) % 2 === 0) { const pt = plant(x, y + .16, -9.7, .45, '#B5523A'); c.add(pt); } }
  // janela do vizinho (centro, térreo alto)
  const nwin = lightPanel(2.2, 2.6, '#FFC67E', 1.0); nwin.position.set(-1, 2.4, -9.85); c.add(nwin); c.add(box(2.5, .14, .5, '#EDE3D2', -1, 1.0, -9.6)); c.add(box(2.4, 2.9, .1, '#EDE3D2', -1, 2.45, -9.95, false));
  const awT = canvasTex(256, 64, (x) => { for (let i = 0; i < 8; i++) { x.fillStyle = i % 2 ? '#F4EEDC' : '#2F8F84'; x.fillRect(i * 32, 0, 32, 64); } }); const aw = new THREE.Mesh(new THREE.PlaneGeometry(2.8, .7), new THREE.MeshStandardMaterial({ map: awT, side: THREE.DoubleSide })); aw.position.set(-1, 4.05, -9.5); aw.rotation.x = .7; c.add(aw);
  const viz = makeChar({ outfit: 'laranja', hair: 'afro', hairc: '#2a1b18', lash: true, glow: .1 }); viz.place(-1, -9.5, .2, 1); viz.tint('#FFE2C4'); c.add(viz.root);
  const vph = new THREE.Mesh(new THREE.PlaneGeometry(.16, .28), new THREE.MeshBasicMaterial({ color: '#9FD8FF' })); vph.position.set(-.98, 1.38, -9.2); c.add(vph); const vgl = glowSprite('#9FD8FF', .7, .6); vgl.position.set(-1, 1.45, -9.15); c.add(vgl);
  c.add(box(2.4, .9, .3, std('#C7553E'), -1, .55, -9.35)); // floreira tapa as pernas
  for (let i = 0; i < 7; i++) { const f = glowSprite(['#F6D272', '#E8667F', '#FFFFFF'][i % 3], .18, .9); f.position.set(-2 + i * .33, 1.08, -9.25); c.add(f); }
  // rua lá embaixo (só o topo de um poste e fios)
  for (let i = 0; i < 3; i++) { const fio = box(26, .02, .02, '#2a2a2a', 0, 6.6 + i * .25 - Math.abs(i - 1) * .1, -9 - i * 1.2, false); c.add(fio); }
  // luzes: sol baixo entrando pela janela
  c.add(new THREE.HemisphereLight('#B9C8F0', '#6A4430', .9));
  const sun = sunLight('#FFD6A0', 2.6, [3, 7, -14], 9, 40); sun.target.position.set(-1, 0, 0); c.add(sun, sun.target);
  const fsun = sunLight('#FFE0B0', 1.6, [-8, 12, -4], 14, 40); fsun.target.position.set(0, 0, -16); c.add(fsun, fsun.target);
  const b1 = beam(1.6, 6, '#FFD9A0', .16); b1.position.set(.6, 2.2, -1.2); b1.rotation.set(-.9, 0, -.35); c.add(b1); const b2 = beam(1.0, 6, '#FFD9A0', .12); b2.position.set(-.8, 2.2, -1.0); b2.rotation.set(-.9, 0, -.35); c.add(b2);
  // sombra suave da janela no chão
  const sw = softBlob(3.6, 2.4, .0); sw.position.set(.2, .02, -.3); c.add(sw);
  return { viz, vph, vgl };
}

export function cenaQuarto(t0, t1, fim = false) {
  const s = makeShot(t0, t1, '#E9B48C', 40), c = s.scene; const { viz, vph } = quarto(c, fim);
  // celular na mão (primeiro plano), mão desenhada
  const ph = phone((x, k) => (fim ? drawFlood(x, k) : drawOffline(x, '07:02', k)), .36, .74); c.add(ph);
  const handT = canvasTex(256, 256, (x) => { x.clearRect(0, 0, 256, 256); x.fillStyle = '#1A1A22'; x.beginPath(); x.roundRect(40, 60, 176, 190, 60); x.fill(); for (let i = 0; i < 4; i++) { x.fillStyle = '#1A1A22'; x.beginPath(); x.roundRect(28 + i * 52, 26, 40, 90, 20); x.fill(); } }); const hand = cut(handT, .34, .34); c.add(hand);
  const hero = makeChar({ outfit: 'hero', glow: .14 }); hero.place(.9, -1.1, 0); hero.tint('#FFE6CC'); c.add(hero.root); hero.root.visible = fim;
  let last = -1;
  s.update = (t, u) => {
    const cam = s.camera; viz.face(cam);
    if (!fim) {
      const n = u < 1.3 ? 0 : 1; if (n !== last) { ph.paint(1); last = n; }
      const K = smooth(1.6, 4.4, u);
      const P = keys([[0, [.2, 1.17, 1.7]], [1.6, [.18, 1.2, 1.9]], [4.6, [.2, 1.6, 2.2]], [5.8, [.15, 1.62, 1.9]]], u);
      aim(cam, P, keys([[0, [.2, 1.0, .3]], [1.6, [.2, 1.0, .3]], [4.6, [-1, 2.0, -10]], [5.8, [-1, 2.05, -10]]], u), -.01);
      ph.position.set(.2, lerp(1.12, .9, K), lerp(.3, 1.3, K)); ph.rotation.set(lerp(-.08, -.5, K), 0, lerp(.02, .1, K)); hand.position.set(ph.position.x + .02, ph.position.y - .26, ph.position.z + .02); hand.rotation.copy(ph.rotation);
      viz.eye(u < 3.7 ? 'down' : u < 3.85 ? 'flat' : 'down'); viz.pose({ armL: [12, -80], armR: [12, -80], head: -4 + Math.sin(u * 1.3) * 2 });
      return { focus: lerp(1.4, 12, K), range: lerp(.6, 10, K), blur: 16, bloom: .3, bloomT: .95, vig: .45, exposure: 1.02, tint: '#FFF4E8' };
    }
    // fim: o celular vibra sem parar
    const n = Math.floor(clamp((u - 2.9) / 3.4) * 300); if (n !== last) { ph.paint(n); last = n; }
    const buzz = u > 2.9 ? Math.sin(u * 90) * .006 : 0;
    ph.position.set(1.4 + buzz, 1.0, -.7); ph.rotation.set(-.15, 0, buzz * 4); hand.visible = false;
    hero.face(cam); hero.eye(u < 1.4 ? 'happy' : u < 2.9 ? 'smug' : u < 4.6 ? 'wide' : 'flat'); hero.pose({ armL: [14, -70], armR: [14, -70], head: u > 4.6 ? -6 : 0, bob: u < 1.4 ? Math.abs(Math.sin(u * 6)) * .05 : 0 });
    viz.eye('wide'); viz.pose({ armL: [12, -80], armR: [12, -80] });
    const K = smooth(.0, 3.0, u), K2 = smooth(4.2, 8.2, u);
    aim(cam, [lerp(-.6, .55, K) + buzz * .3, lerp(1.5, 1.42, K), lerp(5.4, 2.6, K) - K2 * .9], [lerp(0, 1.2, K), lerp(1.9, 1.35, K) + K2 * .05, -1.2], -.008);
    return { focus: lerp(6.5, 3.75, K) - K2 * .9, range: 1.8, blur: 14, bloom: .3, bloomT: .95, vig: .45 + K2 * .1, exposure: 1.02, tint: '#FFF4E8' };
  };
  return s;
}
