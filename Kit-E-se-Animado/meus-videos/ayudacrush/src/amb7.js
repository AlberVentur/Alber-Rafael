// Ambientes del vídeo "¿Y si tu crush te tocara de pareja en el viaje de fin de curso?":
// albergue en la montaña, explanada de la gymkana, lago de noche con hoguera, cima, comedor de fiesta, salida del instituto.
import * as THREE from 'three';
import { AMBS, box, std, cut, glowSprite, canvasTex, rng } from './mundo.js';
import { sky, tree } from './motor/kit.js';
import { stars } from './motor/kit2.js';
import { sunLight, woodFloor } from './comum.js';
import { labelT, bus } from './amb2.js';
import { casa } from './amb3.js';

const chao = (c, col, w = 200, l = 200) => { const g = new THREE.Mesh(new THREE.PlaneGeometry(w, l), std(col, { roughness: 1 })); g.rotation.x = -Math.PI / 2; g.receiveShadow = true; c.add(g); return g; };
const PAL = ['#2E4F2C', '#3B6636', '#55813F', '#A9B65A'];
const PALN = ['#0E1A16', '#13221C', '#1A2C22', '#22382A'];
// cordillera de conos (lejos)
const montes = (c, z = -60, col = '#7A8AA8', nieve = '#F4F6FA', seed = 4, n = 9) => { const R = rng(seed); for (let i = 0; i < n; i++) { const h = 14 + R() * 16, r = 12 + R() * 10; const m = new THREE.Mesh(new THREE.ConeGeometry(r, h, 7), std(col, { roughness: 1 })); m.position.set(-70 + i * 17 + R() * 6, h / 2 - 1, z - R() * 25); c.add(m); if (nieve) { const s = new THREE.Mesh(new THREE.ConeGeometry(r * .34, h * .34, 7), std(nieve, { roughness: 1 })); s.position.set(m.position.x, h - h * .17 - 1, m.position.z); c.add(s); } } };
const lago = (c, x, z, w, d, col = '#4A8AB0', night = false) => { const m = new THREE.Mesh(new THREE.CircleGeometry(1, 48), new THREE.MeshStandardMaterial({ color: col, roughness: .08, metalness: .35, emissive: night ? '#0A1A30' : '#000', emissiveIntensity: night ? .6 : 0 })); m.rotation.x = -Math.PI / 2; m.scale.set(w, d, 1); m.position.set(x, .02, z); m.receiveShadow = true; c.add(m); return m; };

// albergue: bosque, edificio de madera, lago y montañas
AMBS.albergue = (c, o) => {
  const dk = !!o.dusk; c.fog = new THREE.FogExp2(dk ? '#E8B090' : '#D8E4E8', .012);
  sky(c, -200, 700, 260, dk ? [[0, '#3A3A78'], [.5, '#B86A88'], [.8, '#F29A6A'], [1, '#FFC88A']] : [[0, '#4F8AC8'], [.6, '#BFD8EC'], [1, '#EEF4F0']]);
  montes(c, -70, dk ? '#6A5A88' : '#7A8EAE'); chao(c, '#6E9A48');
  const ca = casa({ col: '#9A6A44', roof: '#5A3A2A', w: 9, h: 4.2, d: 6, door: '#4A2E1E' }); ca.position.set(-3.5, 0, -7); c.add(ca);
  const s = cut(labelT(['ALBERGUE LOS PINOS'], { bg: '#4A2E1E', fg: '#F2C14E', size: 70, w: 900, h: 150 }), 3.2, .54); s.position.set(-3.5, 3.4, -6.9); c.add(s);
  lago(c, 6, -9, 6, 3.2);
  const R = rng(31); for (let i = 0; i < 22; i++) { const x = (R() - .5) * 40; if (Math.abs(x + 3.5) < 6 && i < 14) continue; tree(c, x, -10 - R() * 16, 1.3 + R() * .7, PAL, i); }
  for (const [x, z] of [[-9, -3], [9, -4], [-11, -6]]) tree(c, x, z, 1.4, PAL, x | 0);
  c.add(new THREE.HemisphereLight('#E9EEFF', '#5A6A4A', 1.0)); c.add(sunLight(dk ? '#FFB080' : '#FFE2B0', dk ? 2.2 : 2.8, [-10, 16, 10], 16, 70));
};
// explanada de la gymkana (junto al lago)
AMBS.gymkana = (c, o) => {
  c.fog = new THREE.FogExp2('#D8E4E8', .012); sky(c, -200, 700, 260, [[0, '#4F8AC8'], [.6, '#BFD8EC'], [1, '#EEF4F0']]); montes(c, -70); chao(c, '#7AA850');
  lago(c, 0, -9, 9, 3.4);
  const R = rng(7); for (let i = 0; i < 18; i++) tree(c, (R() - .5) * 44, -14 - R() * 14, 1.3 + R() * .6, PAL, i);
  // barro
  const b = new THREE.Mesh(new THREE.CircleGeometry(1, 32), std('#6A4A2E', { roughness: .4 })); b.rotation.x = -Math.PI / 2; b.scale.set(1.6, 1.0, 1); b.position.set(1.2, .015, -1.2); c.add(b);
  // conos de salida
  for (const x of [-3, 3]) { const k = new THREE.Mesh(new THREE.ConeGeometry(.18, .45, 12), std('#F2A766')); k.position.set(x, .22, .8); c.add(k); }
  c.add(new THREE.HemisphereLight('#E9EEFF', '#5A6A4A', 1.0)); c.add(sunLight('#FFE2B0', 2.8, [-10, 16, 10], 16, 70));
};
// lago de noche con estrellas (la hoguera se pone en la escena)
AMBS.lagoNoche = (c, o) => {
  c.background = new THREE.Color('#05071A'); c.fog = new THREE.FogExp2('#0A0E24', .02); stars(c, 4200, 200, 11);
  sky(c, -150, 600, 220, [[0, '#03040E'], [.6, '#0E1434'], [1, '#22284A']]);
  montes(c, -80, '#141A30', '#3A4460', 6);
  chao(c, '#1E2A20'); lago(c, 0, -8, 12, 4, '#1A2A48', true);
  const R = rng(17); for (let i = 0; i < 24; i++) { const x = (R() - .5) * 40; tree(c, x, -14 - R() * 14, 1.3 + R() * .6, PALN, i); }
  for (const [x, z] of [[-6, -2], [6.5, -3], [-8, -5]]) tree(c, x, z, 1.3, PALN, (x * 3) | 0);
  const moon = glowSprite('#F4F0D8', 5, .9); moon.position.set(14, 22, -90); moon.material.fog = false; c.add(moon);
  c.add(new THREE.HemisphereLight('#6A78C8', '#10141E', .55)); const ml = new THREE.DirectionalLight('#9AA8E8', .6); ml.position.set(8, 12, -6); c.add(ml);
};
// cima del pico
AMBS.cima = (c, o) => {
  c.fog = new THREE.FogExp2('#E4EEF4', .006); sky(c, -200, 900, 300, [[0, '#2F6AB8'], [.55, '#8EC0E8'], [1, '#F4F8FA']]);
  const mar = new THREE.Mesh(new THREE.PlaneGeometry(800, 800), std('#F6F8FA', { roughness: 1 })); mar.rotation.x = -Math.PI / 2; mar.position.y = -14; c.add(mar);
  const R = rng(9); for (let i = 0; i < 40; i++) { const g = glowSprite('#FFFFFF', 18 + R() * 14, .55); g.position.set((R() - .5) * 300, -12 + R() * 3, -40 - R() * 200); c.add(g); }
  for (let i = 0; i < 6; i++) { const h = 10 + R() * 8; const m = new THREE.Mesh(new THREE.ConeGeometry(8 + R() * 6, h, 6), std('#8A8EA0')); m.position.set(-60 + i * 24, -14 + h / 2, -90 - R() * 40); c.add(m); const s = new THREE.Mesh(new THREE.ConeGeometry(3, h * .3, 6), std('#F4F6FA')); s.position.set(m.position.x, -14 + h * .85, m.position.z); c.add(s); }
  const top = new THREE.Mesh(new THREE.CylinderGeometry(4.5, 9, 14, 9), std('#8A8070', { roughness: 1 })); top.position.set(0, -7, -1); c.add(top);
  const pl = new THREE.Mesh(new THREE.CircleGeometry(4.6, 9), std('#9A9070', { roughness: 1 })); pl.rotation.x = -Math.PI / 2; pl.position.set(0, .01, -1); c.add(pl);
  for (let i = 0; i < 10; i++) { const r = new THREE.Mesh(new THREE.DodecahedronGeometry(.3 + R() * .4), std('#7A7262')); const a = R() * 6.28; r.position.set(Math.cos(a) * (3 + R()), .1, -1 + Math.sin(a) * (2.5 + R())); if (r.position.z > 1.2) continue; c.add(r); }
  // hito de la cima
  c.add(box(.5, 1.0, .5, std('#C8C0A8'), -2.6, .5, -2.6)); const cr = box(.06, .9, .06, std('#3A3A40'), -2.6, 1.45, -2.6); c.add(cr); c.add(box(.5, .06, .06, std('#3A3A40'), -2.6, 1.6, -2.6));
  const t = cut(labelT(['PICO · 2.130 m'], { bg: '#FBF7EC', fg: '#2A2A34', size: 70, w: 600, h: 150 }), 1.0, .25); t.position.set(-2.6, .75, -2.34); c.add(t);
  c.add(new THREE.HemisphereLight('#EEF4FF', '#8A8070', 1.05)); c.add(sunLight('#FFF0D0', 3.0, [-8, 18, 10], 12, 60));
};
// sendero del bosque (excursión)
AMBS.sendero = (c, o) => {
  c.fog = new THREE.FogExp2('#C8D8C8', .02); sky(c, -200, 700, 260, [[0, '#5F96C8'], [.6, '#BFD4E0'], [1, '#EEF0E4']]); montes(c, -60, '#7A8EAE'); chao(c, '#6E8A48');
  const p = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 60), std('#B49A72', { roughness: 1 })); p.rotation.x = -Math.PI / 2; p.position.set(0, .012, -20); c.add(p);
  const R = rng(23); for (let i = 0; i < 30; i++) { const s = R() < .5 ? -1 : 1; tree(c, s * (2.6 + R() * 12), 2 - R() * 30, 1.2 + R() * .7, PAL, i); }
  for (let i = 0; i < 8; i++) { const r = new THREE.Mesh(new THREE.DodecahedronGeometry(.2 + R() * .3), std('#8A8070')); r.position.set((R() < .5 ? -1 : 1) * (1.3 + R()), .1, -R() * 10); c.add(r); }
  c.add(new THREE.HemisphereLight('#E9EEFF', '#5A6A4A', 1.0)); c.add(sunLight('#FFE2B0', 2.6, [-10, 16, 10], 16, 70));
};
// comedor del albergue convertido en discoteca
AMBS.comedor = (c, o) => {
  c.background = new THREE.Color('#0E0A1E'); c.fog = new THREE.FogExp2('#140E2A', .03);
  c.add(woodFloor(20, 14, '#6A4A30')); c.add(box(20, 5, .3, std('#5A3A2A'), 0, 2.5, -4.2)); for (const s of [-1, 1]) c.add(box(.3, 5, 14, std('#5A3A2A'), s * 8, 2.5, 0));
  for (let i = 0; i < 9; i++) c.add(box(.12, 5, .1, std('#3A2418'), -8 + i * 2, 2.5, -4.0));
  const b = cut(labelT(['FIESTA FIN DE CURSO'], { bg: '#E8447A', fg: '#FFFFFF', size: 80, w: 1100, h: 170 }), 4.0, .62); b.position.set(0, 3.6, -4.0); c.add(b);
  for (const x of [-5.2, 5.2]) { c.add(box(1.0, .08, 4, std('#8E6242'), x, .78, -1.2)); for (const [a, z] of [[-1, -2.8], [1, -2.8], [-1, .4], [1, .4]]) c.add(box(.06, .78, .06, std('#3A2418'), x + a * .4, .39, z)); }
  // guirnalda de bombillas
  const B = []; for (let i = 0; i < 26; i++) { const x = -7 + i * .56; const g = glowSprite(['#FF6A9A', '#6AD8FF', '#FFD84A', '#9AFF8A'][i % 4], .35, .9); g.position.set(x, 3.0 - Math.sin((i / 25) * Math.PI) * .5, -3.8); c.add(g); B.push(g); }
  const pista = new THREE.Mesh(new THREE.CircleGeometry(2.8, 48), new THREE.MeshStandardMaterial({ color: '#2A2240', roughness: .2, metalness: .4, emissive: '#4A2A7A', emissiveIntensity: .35 })); pista.rotation.x = -Math.PI / 2; pista.position.set(0, .015, -.8); c.add(pista);
  const L = []; for (const [col, x] of [['#FF3A8A', -3], ['#3AB8FF', 0], ['#FFD83A', 3]]) { const l = new THREE.PointLight(col, 10, 9, 1.4); l.position.set(x, 3.2, 0); c.add(l); L.push(l); }
  c.add(new THREE.HemisphereLight('#8A7AC8', '#20142A', .55)); const sp = new THREE.SpotLight('#FFE8F0', 30, 14, .6, .6, 1.2); sp.position.set(0, 6, 3); sp.target.position.set(0, 0, -.8); sp.castShadow = true; c.add(sp, sp.target);
  c.userData.disco = (u) => { L.forEach((l, i) => { l.position.x = Math.sin(u * .9 + i * 2.1) * 3.5; l.intensity = 8 + Math.sin(u * 5 + i) * 3; }); B.forEach((g, i) => (g.material.opacity = .55 + .45 * Math.sin(u * 4 + i))); };
};
// puerta del instituto con el autobús
AMBS.salida = (c, o) => {
  const dk = !!o.dusk, mn = !!o.manana; AMBS.barrio(c, { dusk: dk });
  const bb = bus('#F2C14E'); bb.rotation.y = Math.PI / 2; bb.position.set(1.0, 0, -3.4); c.add(bb);
  const s = cut(labelT(['VIAJE FIN DE CURSO'], { bg: '#2F5A9A', fg: '#FFFFFF', size: 70, w: 900, h: 140 }), 2.6, .4); s.position.set(1.0, 2.3, -2.18); c.add(s);
  if (mn) { const l = new THREE.DirectionalLight('#FFD0A0', .8); l.position.set(10, 3, 6); c.add(l); }
};
