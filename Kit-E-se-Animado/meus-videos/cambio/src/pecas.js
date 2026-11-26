// Peças deste vídeo: celular em 0 %, tomada, cabo, telefone fixo, sala, rua.
import * as THREE from 'three';
import { rng, lerp } from './motor/core.js';
import { makeChar, canvasTex } from './motor/char.js';
import { box, std, cut, glowSprite, building, street, lamp, tree, car, skyline, sky } from './motor/kit.js';
import { brickTex, phone } from './motor/kit2.js';
import { woodFloor, plant, poster, lightPanel, sunLight } from './comum.js';

export function drawZero(x, k = 1) { x.fillStyle = '#07080E'; x.fillRect(0, 0, 540, 1110); x.save(); x.translate(270, 520); x.globalAlpha = .5 + .5 * k; x.strokeStyle = '#E2483A'; x.lineWidth = 16; x.beginPath(); x.roundRect(-120, -60, 220, 120, 18); x.stroke(); x.fillStyle = '#E2483A'; x.fillRect(106, -24, 22, 48); x.fillRect(-104, -44, 14, 88); x.restore(); x.fillStyle = '#E2483A'; x.font = '800 64px Inter'; x.textAlign = 'center'; x.fillText('0%', 270, 700); }
export function zeroPhone(w = .36, h = .74) { const p = phone((x, k) => drawZero(x, k), w, h); p.paint(1); return p; }

// tomada na parede (frente para +z)
export function outlet() { const g = new THREE.Group(); g.add(box(.14, .2, .03, std('#F4F0E4'), 0, 0, 0, false)); for (const y of [-.045, .045]) for (const x of [-.025, .025]) g.add(box(.012, .03, .01, '#222', x, y, .02, false)); return g; }

// cabo como tubo por uma lista de pontos
export function cable(points, col = '#F4F0E4', r = .012) { const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p))); const m = new THREE.Mesh(new THREE.TubeGeometry(curve, Math.max(20, points.length * 12), r, 8, false), std(col, { roughness: .5 })); m.castShadow = true; return m; }
export function setCable(m, points) { const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p))); const r = m.geometry.parameters.radius; m.geometry.dispose(); m.geometry = new THREE.TubeGeometry(curve, Math.max(20, points.length * 12), r, 8, false); }

// telefone fixo de parede
export function wallPhone(col = '#E9B44C') { const g = new THREE.Group(); g.add(box(.3, .45, .1, std(col), 0, 0, 0)); const dial = new THREE.Mesh(new THREE.CylinderGeometry(.09, .09, .02, 24), std('#F4F0E4')); dial.rotation.x = Math.PI / 2; dial.position.set(0, -.05, .06); g.add(dial); const hs = new THREE.Group(); hs.add(box(.08, .38, .07, std(col), 0, 0, 0)); hs.add(box(.12, .09, .09, std(col), 0, .19, .02)); hs.add(box(.12, .09, .09, std(col), 0, -.19, .02)); hs.position.set(-.21, .02, .06); g.add(hs); g.hs = hs; return g; }

// sala com parede de tijolo, janela e tomada
export function sala(c, o = {}) { const { wall = '#9A4632', night = false, floor = '#7A5236', win = true } = o;
  c.fog = new THREE.FogExp2(night ? '#2A1E2E' : '#E9B48C', night ? .02 : .008);
  if (win) { sky(c, -60, 220, 120, night ? [[0, '#0E1030'], [.6, '#2A2252'], [1, '#6B3A62']] : [[0, '#7FA6D8'], [.55, '#F2C4A0'], [1, '#FFD9A8']]); skyline(c, -50, 220, 30, night ? ['#2F2748', '#3B2F54', '#4A3A5E'] : ['#C48A86', '#B07A80', '#9C6E7A'], night, 4); }
  const bt = brickTex(wall, 2, 2), wm = () => new THREE.MeshStandardMaterial({ map: bt, roughness: .95 });
  if (win) { [[-5.4, 2.6, 7, 5.2], [5.4, 2.6, 7, 5.2], [0, .5, 3.8, 1.0], [0, 4.7, 3.8, .8]].forEach(([x, y, w, h]) => c.add(box(w, h, .3, wm(), x, y, -3))); for (const [x, y, w, h] of [[-1.9, 2.6, .12, 3.4], [1.9, 2.6, .12, 3.4], [0, 2.6, .07, 3.3], [0, 4.3, 3.9, .12], [0, 1.05, 4.0, .16]]) c.add(box(w, h, .2, '#EDE7DA', x, y, -2.95)); }
  else c.add(box(18, 5.2, .3, wm(), 0, 2.6, -3));
  c.add(woodFloor(18, 12, floor));
  const p1 = poster(.9, 1.2, (x) => { x.fillStyle = '#F2E6CC'; x.fillRect(0, 0, 360, 480); x.fillStyle = '#E8667F'; x.beginPath(); x.arc(180, 200, 110, 0, 7); x.fill(); x.fillStyle = '#36AEA2'; x.fillRect(0, 330, 360, 150); }); p1.position.set(-3.6, 2.8, -2.83); c.add(p1);
  c.add(plant(4.4, 0, -2.4, 1.1)); c.add(plant(-5.0, 0, -2.4, .9, '#36AEA2'));
  c.add(new THREE.HemisphereLight(night ? '#6E74C0' : '#B9C8F0', '#6A4430', night ? .7 : .9)); const sun = sunLight(night ? '#9FB0FF' : '#FFD6A0', night ? .9 : 2.4, [3, 7, -10], 9, 40); sun.target.position.set(-1, 0, 0); c.add(sun, sun.target);
  const lp = new THREE.PointLight('#FFB56E', night ? 10 : 4, 8, 1.6); lp.position.set(3.4, 2.2, -1.2); c.add(lp); const sh = new THREE.Mesh(new THREE.CylinderGeometry(.18, .3, .34, 24), new THREE.MeshStandardMaterial({ color: '#F6DDA4', emissive: '#FFB866', emissiveIntensity: 1.2 })); sh.position.set(3.6, 1.9, -1.9); c.add(sh); c.add(box(.04, 1.7, .04, '#222', 3.6, .85, -1.9)); const g = glowSprite('#FFC07A', 1.2, .35); g.position.copy(sh.position); c.add(g);
}

export const SHOPS = [{ name: 'PANADERÍA', bg: '#6C4A2C', fg: '#FFE7B8', awning: '#3E7A5C' }, { name: 'FARMACIA', bg: '#2F6E5A', fg: '#F0FFF4' }, { name: 'LUNA CAFÉ', bg: '#A85A36', fg: '#FFE3C8', awning: '#D94F58', font: 'Caveat', size: 120 }, { name: 'LIBROS', bg: '#3A4F7A', fg: '#FFF0C8' }, { name: 'FLORES', bg: '#B04463', fg: '#FFF2E2', awning: '#EFEDE0' }];
export function rua(c, o = {}) { const { night = false, seed = 0, lit = .25, dusk = false } = o;
  c.fog = new THREE.FogExp2(night ? '#2A2240' : dusk ? '#C88A7A' : '#F7CFA4', night ? .012 : .009);
  sky(c, -170, 500, 240, night ? [[0, '#0E1030'], [.5, '#2A2252'], [.8, '#5B3460'], [1, '#8A4A6A']] : dusk ? [[0, '#3A3A78'], [.5, '#B86A88'], [.8, '#F29A6A'], [1, '#FFC88A']] : [[0, '#6FA7D8'], [.5, '#CFD8DC'], [.8, '#FBD7A6'], [1, '#FFE7BE']]);
  skyline(c, -150, 420, 90, night ? ['#2F2748', '#3B2F54', '#4A3A5E'] : ['#B89AA0', '#A98E9A', '#9A8592'], night || dusk, 21); street(c, night || dusk);
  let z = 6, i = 0; while (z > -90) { const d = 7 + (i * 37 % 5); c.add(building(100 + i + seed, { x: 13, z: z - d / 2, w: 8, d, floors: 4 + i % 3, side: -1, night: night || dusk, lit, shop: SHOPS[(i + seed) % 5] })); c.add(building(200 + i + seed, { x: -13, z: z - d / 2, w: 8, d, floors: 5 + i % 3, side: 1, night: night || dusk, lit, shop: SHOPS[(i + 2 + seed) % 5] })); z -= d; i++; }
  for (let k = 0; k < 6; k++) { tree(c, 5.2, -6 - k * 11, 1.2, ['#3E5F3A', '#4F7A44', '#6E9A50', '#D7D282'], k); lamp(c, -5, -3 - k * 12, 1, night || dusk); }
  c.add(new THREE.HemisphereLight(night ? '#8E86C8' : '#E9EEFF', '#6A5A4A', night ? .8 : 1.05)); c.add(sunLight(night ? '#B9B0F0' : dusk ? '#FFB080' : '#FFD29A', night ? 1.0 : 2.8, [-20, 16, 10], 30, 90));
}

export function person(c, o, x, z, y = 0, tint = '#FFF0DC', glow = 0) { const [outfit, hair, hairc] = o; const k = makeChar({ outfit, hair, hairc, lash: !!hair, glow }); k.place(x, z, y); k.tint(tint); c.add(k.root); return k; }
export const CAST = [['rosa', 'long', '#6B3A22'], ['terno2', null, null], ['amarelo', 'afro', '#2a1b18'], ['azul', 'bob', '#D9B65A'], ['roxo', 'bun', '#3a2030'], ['laranja', null, null], ['verde', 'long', '#3a2418'], ['terno3', null, null], ['jaleco', 'bun', '#22161a']];
