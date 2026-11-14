// "¿Y si fueras la última persona en la Tierra… excepto tu crush?" — horizontal 1280x720, ~10:13
import * as THREE from 'three';
import { plano, AMBS, box, std, cut, glowSprite, pointer, canvasTex, lightPanel, smooth, lerp, clamp, rng, crowd } from './mundo.js';
import { cama, deitar, bubble, wordTex } from './extra.js';
import { earthTex, stars } from './motor/kit2.js';
import { car, tree } from './motor/kit.js';
import { tileFloor } from './comum.js';
import { S, wt } from './tiempos.js';
import { labelT, globo, bici, pedal, bus, heladeria, semaforo, lata, fogata, deportivo, bomberos, radio, panel, tomate, calabaza } from './amb2.js';

export const CENAS = [];
const FIM = 999;
// cena i: de S[i] até S[i+1]. cfg(d) recebe a duração. cfg.c = [p0, alvo0, p1, alvo1] gera câmera e foco.
const end = (i) => (i + 1 < S.length ? S[i + 1] : FIM);
const mk = (cfg, d) => { if (cfg.c) { const [p0, q0, p1, q1] = cfg.c; cfg.cam = [[0, p0, q0], [d, p1, q1]]; const D = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]); cfg.f = [[0, D(p0, q0)], [d, D(p1, q1)]]; } return cfg; };
const Q = (i, fn) => { const a = S[i], b = end(i), d = Math.min(b, 640) - a; CENAS.push([(x, y) => plano(x, y, mk(fn(d, a), d)), a, b]); };
const Qt = (a, b, fn) => { const d = Math.min(b, 640) - a; CENAS.push([(x, y) => plano(x, y, mk(fn(d, a), d)), a, b]); };
const H = (o) => ({ tipo: 'humano', ...o });
const YO = (o = {}) => H({ glow: .1, ...o });
const ELLA = (o = {}) => H({ outfit: 'amarelo', hair: 'long', hairc: '#4A2A1A', lash: true, ...o });
const ROB = (o = {}) => H({ outfit: 'jaleco', tint: '#E8E2D8', glow: 0, eyes: [[0, 'flat']], ...o });
const LUNES = (o = {}) => ({ tipo: 'perro', s: .55, ...o });
// relativo: tempo de uma palavra dentro da cena
const R0 = (a, w, from = 0) => wt(w, a + from) - a;
const lab = (c, lines, w, pos, o = {}) => { const m = cut(labelT(Array.isArray(lines) ? lines : [lines], { bg: '#2A2A34', fg: '#F2C14E', size: 72, w: 720, h: 150, ...o }), w, w * (o.h || 150) / (o.w || 720)); m.position.set(...pos); m.renderOrder = 4; c.add(m); return m; };
const gl = (c, txt, w, pos, size) => { const m = globo(txt, w, size); m.position.set(...pos); m.renderOrder = 5; c.add(m); return m; };
const pop = (m, u, a, b = 1e9, cam) => { const k = smooth(a, a + .2, u) * (1 - smooth(b, b + .2, u)); m.visible = k > .01; m.scale.setScalar(Math.max(.001, .5 + .5 * k)); if (cam) pointer(m, cam); };
const talkPose = (k, u, on) => k.pose({ armL: [12, 8], armR: on ? [50 + Math.sin(u * 8) * 15, 30] : [12, 8], bob: on ? Math.abs(Math.sin(u * 8)) * .015 : 0 });
const wave = (k, u) => k.pose({ armL: [12, 8], armR: [150 + Math.sin(u * 9) * 18, 20] });
const hideLegs = (k) => { for (const l of Object.values(k.legs)) { l.th.visible = false; if (l.shin) l.shin.visible = false; } };
const sitP = (k) => { k.pose({ armL: [8, 6], armR: [8, 6] }); hideLegs(k); };
const DAY = { sat: 1.0 };
const NIGHT = { exposure: .95, bloom: .45 };
const pan = (k, u, x) => k.root.position.set(x, k.root.position.y, k.root.position.z);
// estrelas como pontos que podem ser ligados (constelações)
const linha = (c, pts, col = '#FFE7A8') => { const g = new THREE.BufferGeometry().setFromPoints(pts.map((p) => new THREE.Vector3(...p))); const m = new THREE.Line(g, new THREE.LineBasicMaterial({ color: col, transparent: true, opacity: 0, fog: false })); c.add(m); return m; };

// ===================== CENAS =====================
// 0. Te despiertas. Silencio. Demasiado silencio. (cama)
Q(0, (d) => ({ amb: 'quarto', fov: 32, atores: [YO({ x: -1.7, z: -1.2, y: .95, eyes: [[0, 'shut'], [1.6, 'open'], [3.2, 'wide']], pose: (k, u) => { k.pose({ armL: [12, 8], armR: [12, 8] }); deitar(k, u < 3.6 ? Math.PI / 2 : lerp(Math.PI / 2, 0, smooth(3.6, 4.6, u))); k.root.position.y = u < 3.6 ? .95 : lerp(.95, .6, smooth(3.6, 4.6, u)); } })],
  c: [[.6, 1.7, 1.8], [-1.6, 1.0, -1.2], [.2, 1.6, 2.2], [-1.6, 1.1, -1.2]], range: 1.4 }));
// 1. No hay coches, ni vecinos, ni un perro
Q(1, (d) => ({ amb: 'rua', ambo: { seed: 1 }, fov: 36, atores: [YO({ x: -1.5, z: 3, eyes: [[0, 'look'], [2.4, 'lookl'], [4.4, 'look']] })],
  c: [[-3.0, 1.6, 6.2], [0, 1.6, -12], [-1.6, 1.4, 5.2], [0, 1.8, -20]], range: 8, blur: 6 }));
// 2. Autobuses abiertos, carrito de helados, semáforo para nadie
Q(2, (d, a) => { const t2 = R0(a, 'carrito'), t3 = R0(a, 'semaforo'); return { amb: 'rua', ambo: { seed: 3 }, fov: 34, atores: [YO({ x: 0, z: 1.5, move: (u) => [-2 + u * .25, 0, 1.5 - u * .2], pose: (k, u) => k.walk(u) })],
  extra: (c) => { const b = bus(); b.position.set(-1.6, 0, -6); c.add(b); const h = heladeria(); h.position.set(3.2, 0, -1.5); h.rotation.y = -.4; c.add(h); const s = semaforo(); s.position.set(-4.4, 0, -3); s.rotation.y = .5; c.add(s); return { update: (u) => s.set(u < d - 1.6 ? 0 : 2) }; },
  cam: [[0, [-4.5, 1.8, 4.5], [-1.6, 1.4, -6]], [t2 - .3, [-1.5, 1.7, 4.2], [-1.0, 1.2, -4]], [t2 + .3, [1.2, 1.6, 2.6], [3.2, 1.2, -1.5]], [t3 - .3, [1.6, 1.6, 2.2], [3.2, 1.3, -1.5]], [t3 + .3, [-1.6, 2.2, 1.4], [-4.4, 3.2, -3]], [d, [-2.2, 2.4, .4], [-4.4, 3.2, -3]]], f: [[0, 11], [t2, 4], [t3 + .3, 3.6]], range: 3 }; });
// 3. Panadería: hay pan en el horno, no hay panadero
Q(3, (d) => ({ amb: 'panaderia', fov: 32, atores: [YO({ x: -.8, z: -.2, eyes: [[0, 'look'], [2.4, 'lookl']] })],
  extra: (c) => { const ov = box(1.6, 1.4, .8, std('#3A3A44', { metalness: .4 }), 1.4, .7, -2.4); c.add(ov); const win = lightPanel(1.0, .6, '#FF9A40', 1.4); win.position.set(1.4, .8, -1.99); c.add(win); const g = glowSprite('#FFA050', 1.2, .5); g.position.set(1.4, .8, -1.8); c.add(g); for (let i = 0; i < 5; i++) { const p = new THREE.Mesh(new THREE.CapsuleGeometry(.08, .32, 6, 12), std('#C88A4A', { roughness: .6 })); p.rotation.z = Math.PI / 2; p.position.set(-1.6 + i * .5, 1.16, -1.2); c.add(p); } const s = gl(c, '¿?', .6, [-.25, 2.25, -.2]); return { update: (u, t, cam) => pop(s, u, 2.4, 1e9, cam) }; },
  c: [[0, 1.6, 4.2], [0, 1.2, -1.2], [.6, 1.5, 3.2], [.6, 1.1, -1.6]], range: 2 }));
// 4. ¡Hola! … y solo el eco
Q(4, (d) => ({ amb: 'plaza', fov: 30, atores: [YO({ x: 0, z: 0, eyes: [[0, 'wide'], [1.6, 'sad']], pose: (k, u) => k.pose({ armL: u < 1.6 ? [110, 120] : [12, 8], armR: u < 1.6 ? [110, 120] : [12, 8] }) })],
  extra: (c) => { const g = [gl(c, '¡HOLA!', 1.0, [.6, 2.2, 0]), gl(c, 'hola…', .7, [-2.2, 3.0, -4]), gl(c, 'hola…', .5, [2.6, 3.6, -9])]; return { update: (u, t, cam) => { pop(g[0], u, .2, 1.8, cam); pop(g[1], u, 1.6, 3.4, cam); pop(g[2], u, 2.6, 9, cam); } }; },
  c: [[0, 1.6, 3.4], [0, 1.4, 0], [0, 4.5, 9.0], [0, 1.4, -2]], range: 3 }));
// 5. Más de 8.000 millones… esta mañana quedan dos
Q(5, (d, a) => { const t = R0(a, 'manana'); return { amb: 'espacio', bg: '#05060E', fov: 36,
  extra: (c) => { const E = new THREE.Mesh(new THREE.SphereGeometry(2.4, 80, 56), new THREE.MeshStandardMaterial({ map: earthTex(), roughness: .72 })); c.add(E); const at = glowSprite('#7FB8FF', 6.4, .35); c.add(at); const N = 260, R = rng(5), dots = []; for (let i = 0; i < N; i++) { const s = glowSprite(i < 2 ? '#FFE7A8' : '#FFD890', .14, .9); const th = R() * 6.28, ph = Math.acos(R() * 1.6 - .8); s.userData.v = new THREE.Vector3(Math.sin(ph) * Math.cos(th), Math.cos(ph), Math.sin(ph) * Math.sin(th)).multiplyScalar(2.43); if (i < 2) s.userData.v.set(.35 + i * .06, .5, 2.36).normalize().multiplyScalar(2.43); c.add(s); dots.push(s); } E.add(new THREE.Object3D());
    return { update: (u) => { E.rotation.y = u * .05; dots.forEach((s, i) => { s.position.copy(s.userData.v).applyAxisAngle(new THREE.Vector3(0, 1, 0), u * .05); const k = i < 2 ? 1 : 1 - smooth(t + (i % 40) * .02, t + .4 + (i % 40) * .02, u); s.material.opacity = .9 * k; s.scale.setScalar(i < 2 ? .25 + smooth(t + 1, t + 1.6, u) * .2 : .14); }); } }; },
  c: [[0, .8, 8.4], [0, 0, 0], [.6, .9, 5.6], [.3, .3, 0]], range: 6, blur: 4, look: { bloom: .5 } }; });
// 6. Tú. Y tu crush.
Q(6, (d) => ({ amb: 'rua', ambo: { seed: 1 }, fov: 28, atores: [YO({ x: 0, z: 0, eyes: [[0, 'wide'], [.9, 'heart']] })], c: [[0, 1.6, 2.4], [0, 1.45, 0], [0, 1.6, 1.9], [0, 1.5, 0]], range: 1.2 }));
// 7. Esa persona: dos filas delante en clase; el lápiz
Q(7, (d, a) => { const tl = R0(a, 'lapiz'); return { amb: 'aula', fov: 32, atores: [ELLA({ x: -.2, z: -1.6, y: -.4, eyes: [[0, 'look'], [tl - .8, 'happy']], pose: (k, u) => { sitP(k); if (u > tl - 1.4 && u < tl + 1.2) k.pose({ armL: [30, 20], armR: [70, 40] }); } }), YO({ x: .2, z: .8, y: -.4, eyes: [[0, 'look'], [tl - .3, 'wide'], [tl + .9, 'heart']], pose: (k, u) => { sitP(k); if (u > tl + .9) k.pose({ armL: [150, 30], armR: [150, 30], lean: -8 }); } }), H({ outfit: 'azul', hair: 'bob', hairc: '#D9B65A', lash: true, x: -1.6, z: -.4, y: -.4, eyes: [[0, 'look']], pose: sitP }), H({ outfit: 'laranja', x: 1.4, z: -.4, y: -.4, eyes: [[0, 'look']], pose: sitP })],
  extra: (c) => { for (const [x, z] of [[-.2, -1.6], [-1.6, -.4], [1.4, -.4], [.2, .8]]) { c.add(box(.9, .06, .55, std('#C9A06A'), x, .75, z - .45)); c.add(box(.06, .75, .06, std('#6B4A33'), x - .4, .37, z - .45)); c.add(box(.06, .75, .06, std('#6B4A33'), x + .4, .37, z - .45)); c.add(box(.5, .06, .5, std('#4A86C7'), x, .45, z)); } const p = box(.03, .03, .26, std('#F2C14E'), 0, 0, 0); c.add(p); const ln = lab(c, ['DOS FILAS DELANTE'], 1.6, [-.2, 2.3, -1.6], { bg: '#FBF7EC', fg: '#2A2A34' }); return { update: (u, t, cam) => { p.visible = u > tl - 1.2 && u < tl + 1; p.position.set(lerp(.1, -.05, smooth(tl - .6, tl, u)), .85, lerp(.3, -.9, smooth(tl - .6, tl, u))); pop(ln, u, .6, tl - 2, cam); } }; },
  c: [[3.4, 1.7, 2.2], [-.1, .9, -.5], [2.8, 1.5, 1.6], [-.1, .9, -.5]], range: 2.4 }; });
// 8. Ahora es la única persona que existe además de ti
Q(8, (d) => ({ amb: 'plaza', ambo: { seed: 5 }, fov: 34, atores: [YO({ x: -2.2, z: 0, eyes: [[0, 'look']] }), ELLA({ x: 3, z: -9, eyes: [[0, 'look']] })],
  extra: (c) => { const a = lab(c, ['TÚ'], .6, [-2.2, 2.3, 0]), b = lab(c, ['ELLA'], 1.2, [3, 2.6, -9]); return { update: (u, t, cam) => { pop(a, u, .4, 9, cam); pop(b, u, 1.2, 9, cam); } }; },
  c: [[-3.6, 1.9, 3.8], [0, 1.3, -4], [-3.2, 2.4, 4.6], [.4, 1.3, -4.5]], range: 10, blur: 4 }));
// 9. Lo bueno: ya no tienes competencia
Q(9, (d) => ({ amb: 'rua', ambo: { seed: 2 }, fov: 32, atores: [YO({ x: 0, z: 0, eyes: [[0, 'smug']], pose: (k, u) => k.cheer(u, 0, .6) })], extra: (c) => { const g = gl(c, '¡0 RIVALES!', .9, [.75, 2.3, 0]); return { update: (u, t, cam) => pop(g, u, .8, 9, cam) }; }, c: [[-.4, 1.4, 3.2], [0, 1.2, 0], [.4, 1.4, 2.6], [0, 1.3, 0]], range: 1.6 }));
// 10. ¿Qué podría salir mal?
Q(10, (d) => ({ amb: 'rua', ambo: { seed: 2 }, fov: 26, atores: [YO({ x: 0, z: 0, eyes: [[0, 'smug'], [1.0, 'look']] })], c: [[0, 1.6, 2.2], [0, 1.5, 0], [0, 1.6, 1.7], [0, 1.52, 0]], range: 1 }));
// 11. Recorres la ciudad en bicicleta; coches cruzados; su casa, el colegio
Q(11, (d) => ({ amb: 'rua', ambo: { seed: 4 }, fov: 36, atores: [YO({ x: 0, y: .42, z: 0, eyes: [[0, 'look'], [6, 'sad'], [9, 'look']], move: (u) => [0, .42, 4 - u * 2.2], pose: (k, u) => pedal(k, u) })],
  extra: (c, s, [h]) => { const b = bici(); b.rotation.y = Math.PI / 2; c.add(b); car(c, -2.4, -6, '#C9361F', 1, false); car(c, 2.0, -12, '#2F6E9A', -1, false); car(c, -1.8, -20, '#3E7A5C', 1, false); car(c, 2.2, -27, '#E9B44C', -1, false); const g = gl(c, '¿DÓNDE ESTÁ?', .9, [0, 0, 0]); return { update: (u, t, cam) => { const p = h.root.position; b.position.set(p.x, 0, p.z); g.position.set(p.x + .6, 2.6, p.z); pop(g, u, 5.4, 10, cam); } }; },
  cam: [[0, [.4, 1.7, -1.5], [0, 1.4, 4]], [d, [.4, 1.7, -1.5 - d * 2.2], [0, 1.4, 4 - d * 2.2]]], f: [[0, 5.6]], range: 3 }));
// 12. La encuentras en el supermercado, comiendo cereales en el suelo del pasillo cinco
Q(12, (d) => ({ amb: 'super', fov: 32, atores: [ELLA({ x: .2, z: -3.4, eyes: [[0, 'happy'], [3, 'look']], pose: (k, u) => { k.pose({ legL: [0, 0], legR: [0, 0], armL: [12, 8], armR: [90 + Math.max(0, Math.sin(u * 3)) * 40, 130] }); hideLegs(k); k.root.position.y = -.82; } })],
  extra: (c) => { const bx = box(.3, .44, .1, std('#E8843E'), -.25, .5, -3.1); c.add(bx); const s = lab(c, ['PASILLO 5'], 1.4, [0, 3.6, -5], { bg: '#C9361F', fg: '#FFF' }); return { update: (u, t, cam) => pointer(s, cam) }; },
  c: [[0, 1.6, 4.4], [0, 1.0, -3.4], [.3, 1.1, -.6], [.1, .7, -3.4]], range: 2 }));
// 13. Te mira. Tú la miras. Y lo único que te sale es: hola.
Q(13, (d, a) => { const th = R0(a, 'hola'); return { amb: 'super', fov: 30, atores: [ELLA({ x: .8, z: -2.8, eyes: [[0, 'wide'], [th + .4, 'look']], pose: (k) => { k.pose({ legL: [0, 0], legR: [0, 0] }); hideLegs(k); k.root.position.y = -.82; } }), YO({ x: -.7, z: -1.8, eyes: [[0, 'wide'], [2, 'heart'], [th - .4, 'look']], pose: (k, u) => (u > th ? wave(k, u) : k.pose()) })],
  extra: (c) => { const g = gl(c, 'hola.', .5, [-.35, 2.05, -1.8]); return { update: (u, t, cam) => pop(g, u, th, 99, cam) }; },
  c: [[-.2, 1.4, 1.6], [.2, 1.1, -2.4], [.2, 1.3, 1.0], [-.1, 1.2, -2.2]], range: 1.4 }; });
// 14. Ah, eres tú. Hola… ¿Daniel?
Q(14, (d, a) => { const tdn = R0(a, 'daniel'); return { amb: 'super', fov: 28, atores: [ELLA({ x: 0, z: -2.8, eyes: [[0, 'look'], [tdn, 'lookl']], pose: (k, u) => { k.pose({ legL: [0, 0], legR: [0, 0], armR: [40 + Math.sin(u * 6) * 8, 30] }); hideLegs(k); k.root.position.y = -.82; } })],
  extra: (c) => { const g1 = gl(c, 'Ah, eres tú.', .7, [.75, 1.55, -2.6]), g2 = gl(c, '¿DANIEL?', .7, [.75, 1.55, -2.6]); return { update: (u, t, cam) => { pop(g1, u, .3, tdn - .2, cam); pop(g2, u, tdn, 99, cam); } }; },
  c: [[.4, 1.3, .2], [.25, 1.1, -2.8], [.3, 1.25, -.3], [.25, 1.1, -2.8]], range: 1.4 }; });
// 15. No te llamas Daniel.
Q(15, (d) => ({ amb: 'super', fov: 26, atores: [YO({ x: 0, z: -1.8, eyes: [[0, 'flat']] })], extra: (c) => { const l = lab(c, ['NO TE LLAMAS DANIEL'], 1.1, [0, 2.0, -1.8], { bg: '#FBF7EC', fg: '#C9361F' }); return { update: (u, t, cam) => pop(l, u, .2, 9, cam) }; }, c: [[0, 1.75, 1.0], [0, 1.7, -1.8], [0, 1.75, .7], [0, 1.72, -1.8]], range: 1 }));
// 16. Pero no la corriges: la conversación más larga
Q(16, (d) => ({ amb: 'super', fov: 32, atores: [ELLA({ x: .6, z: -2.8, eyes: [[0, 'happy']], pose: (k, u) => { k.pose({ legL: [0, 0], legR: [0, 0], armR: [90 + Math.max(0, Math.sin(u * 3)) * 40, 130] }); hideLegs(k); k.root.position.y = -.82; } }), YO({ x: -.6, z: -2.8, eyes: [[0, 'happy']], pose: (k) => { k.pose({ legL: [0, 0], legR: [0, 0] }); hideLegs(k); k.root.position.y = -.82; } })],
  extra: (c) => { const l = lab(c, ['RÉCORD: 2 PALABRAS'], 1.2, [0, 1.62, -2.8], { bg: '#FBF7EC', fg: '#2A2A34', size: 54 }); return { update: (u, t, cam) => pop(l, u, 2.6, 9, cam) }; }, c: [[0, 1.4, 1.4], [0, 1.05, -2.8], [0, 1.35, .9], [0, 1.05, -2.8]], range: 1.6 }));
// 17. Los primeros días son raros: color, canción, cilantro… no decir nada
Q(17, (d, a) => { const t1 = R0(a, 'color'), t2 = R0(a, 'cancion'), t3 = R0(a, 'cilantro'); return { amb: 'rua', ambo: { seed: 6 }, fov: 34, atores: [ELLA({ x: .2, z: 0, eyes: [[0, 'look']], move: (u) => [1.2, 0, 2 - u * .45], pose: (k, u) => k.walk(u) }), YO({ x: -1.4, z: 0, eyes: [[0, 'look'], [t1, 'lookl'], [t3 + 2, 'smug']], move: (u) => [-1.4, 0, 2.6 - u * .45], pose: (k, u) => k.walk(u + .5) })],
  extra: (c, s, [e, h]) => { const B = [['AMARILLO', t1], ['♪ ♫', t2], ['¡CERO CILANTRO!', t3]].map(([tx, at], i) => { const m = bubble(c, [tx], .95, { size: tx.length > 10 ? 52 : 84 }); return { m, at, i }; }); return { update: (u, t, cam) => { const p = h.root.position; B.forEach(({ m, at, i }) => { m.position.set(p.x - .9 + i * .9, 2.3 + (i % 2) * .5, p.z); pop(m, u, at, 99, cam); }); } }; },
  cam: [[0, [-.2, 1.9, 7.6], [0, 1.9, 2]], [d, [-.2, 2.0, 7.6 - d * .45], [0, 1.95, 2 - d * .45]]], f: [[0, 5.4]], range: 3 }; });
// 18. Y el mundo empieza a apagarse (vista da cidade ao entardecer, luzes caindo)
Q(18, (d) => ({ amb: 'apagon', fov: 40, c: [[0, 5, 3], [0, 4, -40], [0, 4.6, 2], [0, 4, -40]], range: 30, blur: 3, lookFn: (u) => ({ exposure: lerp(1.3, .9, u / d) }) }));
// 19. Centrales que se detienen: anuncios, farolas, la ciudad a oscuras
Q(19, (d, a) => { const ta = R0(a, 'anuncios'), tf = R0(a, 'farolas'), to = R0(a, 'oscuras'); return { amb: 'apagon', fov: 36, atores: [YO({ x: -.8, z: 2, eyes: [[0, 'look'], [to, 'wide']] }), ELLA({ x: .8, z: 2, eyes: [[0, 'look'], [to, 'wide']] })],
  extra: (c) => { const R = rng(4), ads = []; for (let i = 0; i < 10; i++) { const m = lightPanel(2 + R() * 2, 1 + R(), ['#FF4A8A', '#4AE8FF', '#F2C14E', '#7AFF8A'][i % 4], 1.8); const sd = i % 2 ? 1 : -1; m.position.set(sd * 8.7, 5 + R() * 4, -5 - i * 4); m.rotation.y = -sd * Math.PI / 2; c.add(m); ads.push(m); } const lamps = []; for (let i = 0; i < 6; i++) { const g = glowSprite('#FFD8A0', 1.6, .9); g.position.set(i % 2 ? 5 : -5, 4.3, -2 - i * 7); c.add(g); const l = new THREE.PointLight('#FFC880', 8, 10, 1.6); l.position.copy(g.position); c.add(l); lamps.push([g, l]); } const sky0 = lightPanel(200, 60, '#FFB070', .5); sky0.position.set(0, 20, -120); c.add(sky0);
    return { update: (u) => { ads.forEach((m, i) => (m.visible = u < ta + .3 + i * .12)); lamps.forEach(([g, l], i) => { const on = u < tf + .3 + i * .15; g.visible = on; l.intensity = on ? 8 : 0; }); sky0.material.emissiveIntensity = .5 * (1 - smooth(to - 1, to, u)); } }; },
  c: [[0, 1.8, 7.6], [0, 2.6, -14], [0, 1.6, 6.0], [0, 2.2, -12]], range: 6, lookFn: (u) => ({ exposure: lerp(1.15, .75, smooth(to - 1, to + .4, u)) }) }; });
// 20. Metro de Nueva York: las bombas, los túneles bajo el agua
Q(20, (d, a) => { const tb = R0(a, 'sin'); return { amb: 'metro', bg: '#0A0C10', fov: 40,
  extra: (c) => { const w = new THREE.Mesh(new THREE.PlaneGeometry(6.4, 60), new THREE.MeshStandardMaterial({ color: '#2A5A7A', roughness: .05, metalness: .3, transparent: true, opacity: .85 })); w.rotation.x = -Math.PI / 2; w.position.set(0, -.1, -20); c.add(w); const pump = new THREE.Group(); pump.add(box(.8, 1.0, .8, std('#C9361F'), 0, .5, 0)); const pipe = new THREE.Mesh(new THREE.CylinderGeometry(.12, .12, 3, 12), std('#8A8E98', { metalness: .6 })); pipe.position.set(0, 2.2, 0); pump.add(pipe); pump.position.set(-2.2, 0, -3); c.add(pump); const led = glowSprite('#5BD87A', .3, .9); led.position.set(-2.2, 1.1, -2.58); c.add(led);
    return { update: (u) => { const k = smooth(tb, d, u); w.position.y = -.1 + k * 2.4; led.material.color.set(u < tb ? '#5BD87A' : '#E2483A'); } }; },
  c: [[1.2, 1.5, 3], [0, 1.0, -14], [.8, 2.0, 2], [0, 1.4, -14]], range: 8, blur: 5, look: { bloom: .45 } }; });
// 21. Grifos secos, neveras calientes, el supermercado huele mal
Q(21, (d, a) => { const tm = R0(a, 'supermercado'); return { amb: 'super', fov: 32, atores: [YO({ x: -.6, z: -1.4, eyes: [[0, 'look'], [tm, 'shut']], pose: (k, u) => (u > tm ? k.pose({ armL: [12, 8], armR: [110, 140] }) : k.pose()) }), ELLA({ x: .6, z: -1.4, eyes: [[0, 'look'], [tm + .3, 'shut']], pose: (k, u) => (u > tm + .3 ? k.pose({ armL: [110, 140], armR: [12, 8] }) : k.pose()) })],
  extra: (c) => { const S2 = []; for (let i = 0; i < 26; i++) { const g = glowSprite('#9ACD50', .4, .4); c.add(g); S2.push(g); } const tap = box(.06, .4, .06, std('#C8CCD4', { metalness: .8 }), 2.2, 1.3, -2.5); c.add(tap); return { update: (u) => S2.forEach((g, i) => { const p = (u * .25 + i / 26) % 1; g.position.set(Math.sin(i * 2.3) * 2.6 + Math.sin(u + i) * .2, .3 + p * 3, -2 - (i % 5)); g.material.opacity = .5 * Math.sin(p * Math.PI) * smooth(tm - 1, tm, u); }) }; },
  c: [[0, 1.6, 2.6], [0, 1.3, -1.6], [0, 1.5, 1.8], [0, 1.4, -1.6]], range: 1.6 }; });
// 22. Hacen equipo: ella organiza, tú cargas cosas
Q(22, (d) => ({ amb: 'super', fov: 32, atores: [ELLA({ x: -.8, z: -1.2, eyes: [[0, 'look']], pose: (k, u) => k.pose({ armL: [60, 70], armR: [90 + Math.sin(u * 5) * 20, 20] }) }), YO({ x: .9, z: -1.6, eyes: [[0, 'flat']], move: (u) => [.9 + Math.sin(u * 1.2) * .4, 0, -1.6], pose: (k, u) => k.pose({ armL: [150, 150], armR: [150, 150], bob: Math.abs(Math.sin(u * 6)) * .02 }) })],
  extra: (c, s, [e, h]) => { const bx = []; for (let i = 0; i < 4; i++) { const b = box(.5, .3, .4, std(['#C9A06A', '#B8905A'][i % 2]), 0, 0, 0); c.add(b); bx.push(b); } const cl = box(.3, .4, .03, std('#FBF7EC'), 0, 0, 0); c.add(cl); return { update: () => { const p = h.root.position; bx.forEach((b, i) => b.position.set(p.x, 1.95 + i * .31, p.z + .1)); const q = e.root.position; cl.position.set(q.x + .32, 1.15, q.z + .2); } }; },
  c: [[0, 1.6, 3.4], [0, 1.4, -1.4], [0, 1.6, 2.8], [0, 1.5, -1.4]], range: 1.8 }));
// 23. Las latas aguantan años (USDA)
Q(23, (d) => ({ amb: 'super', fov: 30,
  extra: (c) => { const R = rng(3); const cols = ['#C9361F', '#3F8A52', '#E9B44C', '#4A86C7', '#E8843E']; for (let r = 0; r < 3; r++) for (let i = 0; i < 14; i++) { const l = lata(cols[(i + r) % 5]); l.position.set(-2.2 + i * .32, .55 + r * .9, -2.95); l.rotation.y = R() * 3; c.add(l); } for (let i = 0; i < 4; i++) { const l = lata(cols[i]); l.scale.setScalar(2.2); l.position.set(-.9 + i * .6, 0, -.6); c.add(l); } c.add(box(3, .7, 1, std('#8E6242'), 0, -.35, -.6)); return {}; },
  c: [[-1.6, 1.3, 2.6], [0, .8, -1.2], [1.4, 1.5, 2.4], [0, 1.0, -1.6]], range: 2.2 }));
// 24. Comen latas: desayuno, cena, postre, todos los días
Q(24, (d, a) => { const T = [R0(a, 'lentejas'), R0(a, 'atun'), R0(a, 'melocoton'), R0(a, 'todos')]; return { amb: 'sala', ambo: { wall: '#3A6E68' }, fov: 32, atores: [YO({ x: -.7, z: -1.2, eyes: [[0, 'flat']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [70 + Math.max(0, Math.sin(u * 5)) * 50, 120] }) }), ELLA({ x: .7, z: -1.2, eyes: [[0, 'flat']], pose: (k, u) => k.pose({ armL: [70 + Math.max(0, Math.sin(u * 5 + 1)) * 50, 120], armR: [12, 8] }) })],
  extra: (c) => { c.add(box(2.4, .8, 1.0, std('#8E6242'), 0, .4, -.5)); c.add(box(2.5, .06, 1.1, std('#F4F0E4'), 0, .82, -.5)); const L = [lata('#8A5A2A'), lata('#4A86C7'), lata('#E9B44C')]; L.forEach((l, i) => { l.position.set(-.6 + i * .6, .85, -.3); c.add(l); }); const W = ['DESAYUNO: LENTEJAS', 'CENA: ATÚN', 'POSTRE: MELOCOTÓN', 'LUNES, MARTES, MIÉRCOLES…'].map((tx) => lab(c, [tx], 1.7, [0, 2.25, -1.2], { bg: '#FBF7EC', fg: '#2A2A34', size: 60 }));
    return { update: (u, t, cam) => { W.forEach((m, i) => pop(m, u, T[i], i < 3 ? T[i + 1] - .2 : 99, cam)); L.forEach((l, i) => (l.visible = u > T[i] - .2)); } }; },
  c: [[0, 1.7, 3.2], [0, 1.5, -.8], [0, 1.6, 2.6], [0, 1.5, -.8]], range: 1.8 }; });
// 25. Intentas impresionarla cocinando: fuego, lentejas quemadas, una ceja
Q(25, (d, a) => { const tq = R0(a, 'quemas'); return { amb: 'parque', ambo: { dusk: true }, fov: 32, atores: [YO({ x: -.6, z: 0, eyes: [[0, 'smug'], [tq, 'wide'], [tq + 1.6, 'sad']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [70, 60], lean: u > tq ? -6 : 0 }) }), ELLA({ x: 1.6, z: -.6, eyes: [[0, 'look'], [tq + .4, 'wide']] })],
  extra: (c) => { const f = fogata(); f.position.set(.3, 0, .2); c.add(f); const pot = new THREE.Mesh(new THREE.CylinderGeometry(.2, .16, .22, 20), std('#3A3A40', { metalness: .6 })); pot.position.set(.3, .45, .2); c.add(pot); const sm = []; for (let i = 0; i < 14; i++) { const g = glowSprite('#202024', .6, .0); g.material.blending = THREE.NormalBlending; c.add(g); sm.push(g); } const pf = gl(c, '¡PUF!', .6, [-.2, 2.2, 0]);
    return { update: (u, t, cam) => { f.tick(u); sm.forEach((g, i) => { const p = ((u - tq) * .4 + i / 14) % 1; g.position.set(.3 + Math.sin(i) * .3, .6 + p * 2.4, .2); g.material.opacity = u > tq ? .7 * (1 - p) : 0; }); pop(pf, u, tq, tq + 1.4, cam); } }; },
  c: [[-.4, 1.4, 3.4], [.2, 1.0, 0], [.2, 1.3, 2.4], [.0, 1.1, 0]], range: 1.6 }; });
// 26. Ella abre una lata de piña y te la da: lo más romántico
Q(26, (d, a) => { const tr = R0(a, 'romantico'); return { amb: 'parque', ambo: { dusk: true }, fov: 30, atores: [ELLA({ x: .5, z: 0, eyes: [[0, 'look']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [lerp(20, 80, smooth(.6, 1.6, u)), 20] }) }), YO({ x: -.5, z: 0, eyes: [[0, 'look'], [1.8, 'heart']], pose: (k, u) => k.pose({ armL: [u > 2 ? 70 : 12, 20], armR: [12, 8] }) })],
  extra: (c, s, [e]) => { const l = lata('#F2C14E', '#5FA040'); c.add(l); const ht = glowSprite('#FF7A8A', 2.6, 0); ht.position.set(0, 1.4, -2.5); c.add(ht); const hp = new THREE.Vector3(); return { update: (u) => { e.arms.R.hand.getWorldPosition(hp); l.position.set(hp.x, hp.y - .1, hp.z + .1); ht.material.opacity = smooth(tr - .5, tr + .5, u) * .5; } }; },
  c: [[0, 1.5, 3.4], [0, 1.25, 0], [0, 1.45, 2.8], [0, 1.3, 0]], range: 1.4 }; });
// 27. Todos los coches son suyos: deportivo rojo vs. camión de bomberos
Q(27, (d, a) => { const tb = R0(a, 'tu', 5); return { amb: 'rua', ambo: { seed: 7 }, fov: 36, atores: [ELLA({ x: -1.6, z: .6, eyes: [[0, 'smug']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [120, 30] }) }), YO({ x: 2.6, z: .8, eyes: [[0, 'look'], [tb, 'happy']], pose: (k, u) => (u > tb ? k.cheer(u, 0, .8) : k.pose()) })],
  extra: (c) => { const dp = deportivo(); dp.position.set(-1.8, 0, -1.6); dp.rotation.y = .5; c.add(dp); const bm = bomberos(); bm.position.set(3.2, 0, -3); bm.rotation.y = -.3; c.add(bm); return {}; },
  cam: [[0, [-1.8, 1.6, 4.4], [-1.8, .9, -1]], [tb - .4, [-.6, 1.7, 5.2], [-1, 1.0, -1]], [tb + .2, [1.6, 2.0, 6.4], [2.4, 1.6, -2]], [d, [1.0, 2.0, 7.2], [1.6, 1.6, -2]]], f: [[0, 4.4], [tb, 6.6]], range: 3 }; });
// 28. La gasolina se estropea; los motores fallan
Q(28, (d) => ({ amb: 'rua', ambo: { seed: 7 }, fov: 34, atores: [YO({ x: 1.6, z: 1.4, eyes: [[0, 'look'], [4, 'sad']] })],
  extra: (c) => { const bm = bomberos(); bm.position.set(.4, 0, -3); bm.rotation.y = -.3; c.add(bm); const sm = []; for (let i = 0; i < 12; i++) { const g = glowSprite('#3A3A40', .5, 0); g.material.blending = THREE.NormalBlending; c.add(g); sm.push(g); } const cof = gl(c, '¡COF, COF!', .8, [-.8, 1.8, 1]); return { update: (u, t, cam) => { const shake = u < 4.5 ? Math.sin(u * 40) * .015 : 0; bm.position.x = .4 + shake; sm.forEach((g, i) => { const p = (u * .5 + i / 12) % 1; g.position.set(-1.6 - p * 1.4, .5 + p * .8, -1 + p); g.material.opacity = (u < 6 ? .6 : 0) * (1 - p); }); pop(cof, u, 1.0, 4.4, cam); } }; },
  c: [[3.8, 1.7, 5.0], [1.2, 1.2, 0], [3.0, 1.6, 4.4], [1.0, 1.2, -.4]], range: 4 }));
// 29. Ella va delante; tú, detrás. Como en clase.
Q(29, (d) => ({ amb: 'rua', ambo: { seed: 8 }, fov: 34, atores: [ELLA({ x: .8, y: .42, eyes: [[0, 'happy']], move: (u) => [.8, .42, 1 - u * 2], pose: (k, u) => pedal(k, u) }), YO({ x: -.6, y: .42, eyes: [[0, 'look'], [1.6, 'heart']], move: (u) => [-.6, .42, 4 - u * 2], pose: (k, u) => pedal(k, u + .4) })],
  extra: (c, s, [e, h]) => { const b1 = bici('#E8667F'), b2 = bici(); b1.rotation.y = b2.rotation.y = Math.PI / 2; c.add(b1, b2); return { update: () => { b1.position.set(e.root.position.x, 0, e.root.position.z); b2.position.set(h.root.position.x, 0, h.root.position.z); } }; },
  cam: [[0, [1.0, 1.8, -4], [0, 1.3, 3]], [d, [1.0, 1.8, -4 - d * 2], [0, 1.3, 3 - d * 2]]], f: [[0, 6]], range: 4 }));
// 30. Una noche, sin una sola luz: en el techo, "mira arriba"
Q(30, (d, a) => { const tm = R0(a, 'mira'); return { amb: 'azotea', bg: '#03040A', fov: 32, atores: [ELLA({ x: .5, z: -.4, y: .2, eyes: [[0, 'look']], pose: (k) => { k.pose({ armL: [12, 8], armR: [12, 8] }); deitar(k, -Math.PI / 2); } }), YO({ x: -1.0, z: .2, eyes: [[0, 'look'], [tm + .4, 'wide']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [12, 8], head: u > tm ? -12 : 0 }) })],
  extra: (c) => { const g = gl(c, 'Mira arriba.', .7, [1.4, 1.1, -.4]); return { update: (u, t, cam) => pop(g, u, tm, 99, cam) }; },
  c: [[0, 2.8, 3.4], [0, .6, -.4], [0, 2.5, 3.0], [0, .7, -.4]], range: 2, look: NIGHT }; });
// 31. La Vía Láctea
Q(31, (d) => ({ amb: 'azotea', ambo: { ang: .35 }, bg: '#03040A', fov: 46, atores: [YO({ x: -.6, z: -1, eyes: [[0, 'wide']] }), ELLA({ x: .6, z: -1, eyes: [[0, 'happy']] })],
  c: [[0, 1.4, 3.4], [0, 1.2, -1], [0, .6, 2.6], [0, 30, -150]], range: 50, blur: 3, look: { bloom: .6, vig: .55 } }));
// 32. Antes, un tercio de la humanidad no podía verla. Ahora, solo para ustedes dos
Q(32, (d) => ({ amb: 'azotea', ambo: { ang: .6 }, bg: '#03040A', fov: 40, atores: [YO({ x: -.45, z: 0, y: .2, eyes: [[0, 'happy']], pose: (k) => { k.pose(); deitar(k, Math.PI / 2); } }), ELLA({ x: .45, z: 0, y: .2, eyes: [[0, 'happy']], pose: (k) => { k.pose(); deitar(k, -Math.PI / 2); } })],
  c: [[0, 2.6, 2.6], [0, .3, -.2], [0, 3.2, 3.4], [0, .3, -.4]], range: 3, look: NIGHT }));
// 33. Constelaciones… y la "constelación del lápiz"
Q(33, (d, a) => { const tl = R0(a, 'constelacion', 5); return { amb: 'azotea', ambo: { ang: .2 }, bg: '#03040A', fov: 44, atores: [ELLA({ x: .8, z: 0, eyes: [[0, 'look']], pose: (k) => k.pose({ armL: [12, 8], armR: [160, 20] }) }), YO({ x: -.8, z: 0, eyes: [[0, 'look'], [tl - 1, 'smug']], pose: (k, u) => k.pose({ armL: [u > tl - .8 ? 160 : 12, 20], armR: [12, 8] }) })],
  extra: (c) => { const z = -30; const C1 = [[4, 12, z], [7, 14, z], [9, 12, z], [12, 13, z], [11, 16, z]], C2 = [[-14, 10, z], [-12, 13, z], [-9, 13, z], [-8, 10, z]]; const pen = [[-6, 15, z], [6, 17, z], [7, 15, z], [-5, 13, z], [-6, 15, z], [-8, 14.2, z], [-5, 13, z]]; const all = [...C1, ...C2, ...pen]; all.forEach((p) => { const g = glowSprite('#FFF4D0', .9, .95); g.position.set(...p); g.material.fog = false; c.add(g); }); const l1 = linha(c, C1), l2 = linha(c, C2), lp = linha(c, pen, '#F2C14E'); const nm = lab(c, ['LA CONSTELACIÓN DEL LÁPIZ'], 7, [0, 19.5, z], { bg: '#2A2A34', fg: '#F2C14E' });
    return { update: (u, t, cam) => { l1.material.opacity = smooth(.5, 1.5, u); l2.material.opacity = smooth(1.8, 2.8, u); lp.material.opacity = smooth(tl - .8, tl, u); pop(nm, u, tl, 99, cam); } }; },
  c: [[0, 1.0, 4.2], [0, 6, -20], [0, 1.2, 3.2], [0, 9, -24]], range: 30, blur: 3, look: { bloom: .55 } }; });
// 34. Ella no lo pilla. Tú tampoco se lo explicas.
Q(34, (d) => ({ amb: 'azotea', bg: '#03040A', fov: 30, atores: [ELLA({ x: .5, z: 0, eyes: [[0, 'flat']] }), YO({ x: -.5, z: 0, eyes: [[0, 'look'], [1.6, 'flat']] })], extra: (c) => { const g = gl(c, '¿?', .5, [.95, 2.2, 0]); return { update: (u, t, cam) => pop(g, u, .2, 99, cam) }; }, c: [[0, 1.5, 2.6], [0, 1.3, 0], [0, 1.5, 2.2], [0, 1.35, 0]], range: 1.2, look: NIGHT }));
// 35. Pasan las semanas y empiezan las discusiones
Q(35, (d) => ({ amb: 'sala', ambo: { wall: '#7A3A44' }, fov: 32, atores: [ELLA({ x: .7, z: -.6, eyes: [[0, 'angry']], pose: (k, u) => talkPose(k, u, true) }), YO({ x: -.7, z: -.6, eyes: [[0, 'angry']], pose: (k, u) => talkPose(k, u + 1, true) })], c: [[0, 1.5, 3.2], [0, 1.2, -.6], [0, 1.4, 2.4], [0, 1.3, -.6]], range: 1.6 }));
// 36. Centro comercial vs. museo, playa vs. montaña, pizza con piña
Q(36, (d, a) => { const T = [0, R0(a, 'ella', 3), R0(a, 'ella', 7)]; return { amb: 'sala', ambo: { wall: '#7A3A44' }, fov: 32, atores: [ELLA({ x: .8, z: -.6, eyes: [[0, 'angry'], [T[2], 'smug']], pose: (k, u) => talkPose(k, u, true) }), YO({ x: -.8, z: -.6, eyes: [[0, 'angry'], [T[2] + 1.6, 'wide']], pose: (k, u) => talkPose(k, u + 1, u < T[2]) })],
  extra: (c) => { const P = [['CENTRO COMERCIAL', 'MUSEO'], ['PLAYA', 'MONTAÑA'], ['PIZZA CON PIÑA: SÍ', '¡¿QUÉ?!']]; const M = P.map(([e, y]) => [lab(c, [e], 1.3, [1.05, 2.35, -.6], { bg: '#E8667F', fg: '#FFF', size: 62 }), lab(c, [y], 1.3, [-1.05, 2.35, -.6], { bg: '#43C4B4', fg: '#FFF', size: 62 })]); return { update: (u, t, cam) => M.forEach(([m1, m2], i) => { const b = i < 2 ? T[i + 1] - .1 : 99; pop(m1, u, T[i] + .2, b, cam); pop(m2, u, T[i] + 1.4, b, cam); }) }; },
  c: [[0, 1.6, 3.6], [0, 1.5, -.6], [0, 1.6, 3.0], [0, 1.55, -.6]], range: 1.6 }; });
// 37. Votan. Empate. Siempre empate.
Q(37, (d) => ({ amb: 'sala', ambo: { wall: '#2F4A7A' }, fov: 32, atores: [ELLA({ x: 1.0, z: -.6, eyes: [[0, 'flat']], pose: (k) => k.pose({ armL: [12, 8], armR: [150, 20] }) }), YO({ x: -1.0, z: -.6, eyes: [[0, 'flat']], pose: (k) => k.pose({ armL: [150, 20], armR: [12, 8] }) })],
  extra: (c) => { c.add(box(.6, .6, .6, std('#F4F0E4'), 0, .3, -.4)); c.add(box(.3, .02, .05, std('#2A2A34'), 0, .61, -.4)); const sb = lab(c, ['1 – 1'], 1.0, [0, 2.4, -1], { bg: '#2A2A34', fg: '#FFF', size: 100, w: 400, h: 200 }); const em = lab(c, ['EMPATE'], 1.2, [0, 1.65, -1], { bg: '#C9361F', fg: '#FFF' }); return { update: (u, t, cam) => { pop(sb, u, .5, 99, cam); pop(em, u, 1.4, 99, cam); } }; },
  c: [[0, 1.6, 3.4], [0, 1.5, -.6], [0, 1.6, 2.8], [0, 1.6, -.6]], range: 1.8 }));
// 38. Pelea por la lata abierta: ella se va a la otra punta de la ciudad
Q(38, (d) => ({ amb: 'rua', ambo: { seed: 9, dusk: true }, fov: 36, atores: [ELLA({ x: 0, y: .42, eyes: [[0, 'angry']], move: (u) => [.4, .42, Math.min(0, -(u - 2.2) * 2.4)], pose: (k, u) => pedal(k, u) }), YO({ x: -1.4, z: 1.6, eyes: [[0, 'angry'], [3, 'sad']] })],
  extra: (c, s, [e]) => { const b = bici('#E8667F'); b.rotation.y = Math.PI / 2; c.add(b); const l = lata('#3F8A52'); l.position.set(-1.0, 0, 1.4); c.add(l); return { update: () => b.position.set(e.root.position.x, 0, e.root.position.z) }; },
  c: [[-3.0, 1.5, 4.8], [0, 1.0, -2], [-2.6, 1.6, 4.4], [0, 1.0, -8]], range: 6, look: { sat: .85 } }));
// 39. Y entonces conoces la soledad de verdad
Q(39, (d) => ({ amb: 'rua', ambo: { seed: 9, dusk: true }, fov: 30, atores: [YO({ x: 0, z: 0, eyes: [[0, 'sad']] })], c: [[0, 1.4, 3.0], [0, 1.2, 0], [0, 3.4, 9], [0, 1.0, 0]], range: 3, look: { sat: .6 } }));
// 40. Hablas con un maniquí: Roberto
Q(40, (d, a) => { const tr = R0(a, 'roberto'); return { amb: 'sala', ambo: { wall: '#4A4A6A', night: true }, fov: 32, atores: [YO({ x: -.7, z: -.6, eyes: [[0, 'look'], [tr + 3, 'happy'], [d - 2, 'sad']], pose: (k, u) => talkPose(k, u, u > 1 && u < d - 2.2) }), ROB({ x: .7, z: -.6, pose: (k) => k.pose({ armL: [20, 8], armR: [20, 8] }) })],
  extra: (c) => { const n = lab(c, ['ROBERTO'], .9, [.7, 2.0, -.6], { bg: '#FBF7EC', fg: '#2A2A34' }); const j = gl(c, 'JA… ¿JA?', .6, [-.2, 2.2, -.6]); return { update: (u, t, cam) => { pop(n, u, tr, 99, cam); pop(j, u, d - 2.4, 99, cam); } }; },
  c: [[0, 1.6, 3.2], [0, 1.3, -.6], [0, 1.5, 2.4], [0, 1.35, -.6]], range: 1.6 }; });
// 41. A los tres días vuelve con dos latas de melocotón: "Roberto no es buena compañía"
Q(41, (d, a) => { const tr = R0(a, 'roberto'); return { amb: 'rua', ambo: { seed: 9 }, fov: 34, atores: [ELLA({ x: 0, y: .42, eyes: [[0, 'look'], [tr - .2, 'smug']], move: (u) => [.6, u < 3 ? .42 : 0, Math.min(-1.0, -12 + u * 4)], pose: (k, u) => (u < 3 ? pedal(k, u) : k.pose({ armL: [60, 40], armR: [60, 40] })) }), YO({ x: -.8, z: -1, eyes: [[0, 'wide'], [3, 'happy']] }), ROB({ x: -2.2, z: -1.6 })],
  extra: (c, s, [e]) => { const b = bici('#E8667F'); b.rotation.y = Math.PI / 2; c.add(b); const L = [lata('#F2C14E', '#E8843E'), lata('#F2C14E', '#E8843E')]; L.forEach((l) => c.add(l)); const g = gl(c, 'Roberto no es buena compañía.', 1.6, [1.5, 2.2, -1], 44); return { update: (u, t, cam) => { const p = e.root.position; b.position.set(u < 3 ? p.x : 1.4, 0, u < 3 ? p.z : -1.8); L.forEach((l, i) => l.position.set(p.x - .1 + i * .2, p.y + .95, p.z + .2)); pop(g, u, tr, 99, cam); } }; },
  c: [[1, 1.6, 4.6], [0, 1.2, -3], [.2, 1.5, 3.2], [-.2, 1.3, -1.2]], range: 2.4 }; });
// 42. Tú decides no preguntar cómo sabe que se llama Roberto
Q(42, (d) => ({ amb: 'rua', ambo: { seed: 9 }, fov: 28, atores: [YO({ x: 0, z: 0, eyes: [[0, 'lookl'], [1.6, 'smug']] })], extra: (c) => { const g = bubble(c, ['¿…?'], .7, { size: 120 }); g.position.set(.6, 2.2, 0); return { update: (u, t, cam) => pop(g, u, .6, 99, cam) }; }, c: [[0, 1.6, 2.2], [0, 1.5, 0], [0, 1.6, 1.8], [0, 1.55, 0]], range: 1 }));
// 43. La naturaleza empieza a recuperar todo
Q(43, (d) => ({ amb: 'ruaV', ambo: { seed: 10, selva: true }, fov: 38, c: [[0, 2.0, 6], [0, 2.4, -20], [0, 4.0, 2], [0, 3.4, -24]], range: 12, blur: 5 }));
// 44. Hierba en el asfalto, parques que se comen los bancos, ciervos turistas
Q(44, (d, a) => { const tc = R0(a, 'ciervos'); return { amb: 'ruaV', ambo: { seed: 10, selva: true }, fov: 34, atores: [{ tipo: 'ciervo', x: -1, z: -2, move: (u) => [-1 + u * .25, 0, -2], pose: (k, u) => { k.root.position.y = Math.abs(Math.sin(u * 4)) * .03; } }, { tipo: 'ciervo', x: 1.5, z: -5, s: .9, move: (u) => [1.5 + u * .2, 0, -5] }],
  extra: (c) => { c.add(box(2.2, .1, .5, std('#8E6242'), 5.2, .5, -1)); return {}; },
  cam: [[0, [1, .5, 3.4], [0, .1, 0]], [tc - 1, [4.4, 1.2, 2.6], [5.2, .6, -1.2]], [tc, [-.4, 1.4, 3.6], [0, 1.0, -3]], [d, [.6, 1.4, 3.0], [.8, 1.0, -3]]], f: [[0, 3.4], [tc - 1, 3], [tc, 5]], range: 2.4 }; });
// 45. Chernóbil: lobos, alces, jabalíes; tantos como en reservas naturales
Q(45, (d, a) => { const tl = R0(a, 'lobos'); return { amb: 'bosque', ambo: { ruina: true }, fov: 36, atores: [{ tipo: 'lobo', x: -2, z: -2, eyes: [[0, 'open']], move: (u) => [-2 + Math.max(0, u - tl) * .3, 0, -2] }, { tipo: 'alce', x: 1.6, z: -5, move: (u) => [1.6 - Math.max(0, u - tl - 1) * .2, 0, -5] }, { tipo: 'jabali', x: .2, z: -1, s: .8, move: (u) => [.2 + Math.max(0, u - tl - 2) * .35, 0, -.6] }],
  c: [[0, 2.6, 7], [2, 3, -10], [0, 1.4, 3.4], [0, 1.0, -3]], range: 4 }; });
// 46. Los perros forman manadas; un perrito de oreja doblada os elige: Lunes
Q(46, (d, a) => { const tl = R0(a, 'lunes'); return { amb: 'rua', ambo: { seed: 11 }, fov: 32, atores: [LUNES({ x: 3, z: 0, eyes: [[0, 'open'], [tl, 'happy']], move: (u) => [Math.max(.2, 3 - u * .5), 0, 0], pose: (k, u) => k.talk(u, u < 5) }), YO({ x: -1.2, z: -.4, eyes: [[0, 'look'], [4, 'happy']] }), ELLA({ x: -.4, z: -.8, eyes: [[0, 'look'], [4, 'happy']] }), { tipo: 'perro', x: 5, z: -6, s: .8 }, { tipo: 'viejo', x: 6.4, z: -7, s: .7 }, { tipo: 'perro', x: 4, z: -8, s: .7, flip: true }],
  extra: (c) => { const cal = lab(c, ['¿LUNES?'], 1.0, [0, 2.4, -1], { bg: '#FBF7EC', fg: '#C9361F', size: 90, w: 500, h: 220 }); return { update: (u, t, cam) => pop(cal, u, tl, 99, cam) }; },
  c: [[1.6, 1.4, 3.8], [.6, .8, -1], [.2, 1.3, 3.0], [-.2, 1.0, -.8]], range: 2 }; });
// 47. Ahora son tres. Lunes la prefiere a ella.
Q(47, (d) => ({ amb: 'parque', fov: 32, atores: [YO({ x: -.8, z: 0, eyes: [[0, 'happy'], [3.6, 'flat']] }), ELLA({ x: .8, z: 0, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > 3 ? 40 : 12, 30] }) }), LUNES({ x: -.2, z: .4, move: (u) => [lerp(-.2, 1.2, smooth(2.6, 3.6, u)), 0, .4] })],
  c: [[0, 1.4, 3.6], [0, 1.0, 0], [0, 1.3, 3.0], [0, 1.0, 0]], range: 1.8 }));
// 48. Un día, mirando un río, la pregunta que llevas meses temiendo
Q(48, (d) => ({ amb: 'rio', fov: 34, atores: [YO({ x: -.5, z: -1.4, eyes: [[0, 'look']], pose: (k) => { sitP(k); k.root.position.y = -.82; } }), ELLA({ x: .5, z: -1.4, eyes: [[0, 'look']], pose: (k) => { sitP(k); k.root.position.y = -.82; } }), LUNES({ x: 1.4, z: -1 })],
  c: [[-1.4, 1.2, 2.6], [0, .7, -2], [-.6, 1.1, 2.0], [0, .8, -2]], range: 2 }));
// 49. ¿Nosotros dos tenemos que salvar a la humanidad?
Q(49, (d) => ({ amb: 'rio', fov: 30, atores: [ELLA({ x: .5, z: -1.4, eyes: [[0, 'look']], pose: (k) => { sitP(k); k.root.position.y = -.82; } }), YO({ x: -.5, z: -1.4, eyes: [[0, 'wide']], pose: (k) => { sitP(k); k.root.position.y = -.82; } })], extra: (c) => { const g = gl(c, '¿Salvar a la humanidad?', 1.0, [1.0, 1.35, -1.4], 42); return { update: (u, t, cam) => pop(g, u, .2, 99, cam) }; }, c: [[0, 1.2, 1.4], [0, .9, -1.4], [0, 1.2, 1.1], [0, .95, -1.4]], range: 1.2 }));
// 50. Te pones rojo. Tan rojo que Lunes ladra.
Q(50, (d, a) => { const tl = R0(a, 'ladra'); return { amb: 'rio', fov: 28, atores: [YO({ x: 0, z: -1.4, eyes: [[0, 'wide']], tint: '#FF7A6A', pose: (k) => { sitP(k); k.root.position.y = -.82; } }), LUNES({ x: .9, z: -1.2, eyes: [[0, 'open'], [tl, 'wide']], pose: (k, u) => k.talk(u, u > tl) })],
  extra: (c, s) => { const g = { material: {} }; const w = gl(c, '¡GUAU!', .5, [1.3, 1.1, -1.2]); return { update: (u, t, cam) => { g.material.opacity = smooth(0, .8, u) * .45; pop(w, u, tl, 99, cam); } }; },
  c: [[.2, 1.1, 1.2], [.2, .9, -1.4], [.3, 1.1, .9], [.3, .9, -1.4]], range: 1 }; });
// 51. La ciencia: hacen falta miles de individuos, no dos
Q(51, (d, a) => { const tm = R0(a, 'miles'), tn = R0(a, 'no', 12); return { amb: 'plaza', ambo: { seed: 6 }, fov: 38, atores: [YO({ x: -.4, z: 0, eyes: [[0, 'look'], [tm, 'wide']] }), ELLA({ x: .4, z: 0, eyes: [[0, 'look'], [tm, 'wide']] })],
  extra: (c) => { const R = rng(13), groups = []; for (let g = 0; g < 4; g++) { const sp = []; for (let i = 0; i < 90; i++) { const an = R() * Math.PI * 2, dd = 2 + g * 2.4 + R() * 2.4; sp.push([Math.cos(an) * dd, Math.sin(an) * dd - 2]); } const grp = new THREE.Group(); crowd(grp, sp, { jump: 0, raised: .1, seed: 6 + g }); c.add(grp); groups.push(grp); } const l2 = lab(c, ['NO 2'], 1.0, [0, 2.4, 0], { bg: '#C9361F', fg: '#FFF', size: 90, w: 400, h: 180 });
    return { update: (u, t, cam) => { groups.forEach((g, i) => { g.visible = u > tm - .6 + i * .25 && u < tn + 2.2; }); pop(l2, u, tn, 99, cam); } }; },
  cam: [[0, [0, 1.6, 3.4], [0, 1.2, 0]], [tm, [0, 2.2, 5], [0, 1.2, -1]], [tm + 3, [0, 9, 16], [0, 0, -2]], [tn + 1.6, [0, 7, 13], [0, 0, -2]], [d, [0, 1.6, 3.4], [0, 1.4, 0]]], f: [[0, 3.4], [tm + 3, 18], [d, 3.4]], range: 6 }; });
// 52. Así que no: no tienen que salvar a nadie
Q(52, (d) => ({ amb: 'rio', fov: 32, atores: [YO({ x: -.5, z: -1.4, eyes: [[0, 'happy']], pose: (k) => { sitP(k); k.root.position.y = -.82; } }), ELLA({ x: .5, z: -1.4, eyes: [[0, 'happy']], pose: (k) => { sitP(k); k.root.position.y = -.82; } })], c: [[0, 1.2, 2.2], [0, .8, -1.4], [0, 1.1, 1.8], [0, .85, -1.4]], range: 1.4 }));
// 53. Ella se ríe aliviada; tú también… un poquito demasiado
Q(53, (d) => ({ amb: 'rio', fov: 30, atores: [ELLA({ x: .5, z: -1.4, eyes: [[0, 'happy'], [3.4, 'flat']], pose: (k, u) => { k.pose({ legL: [0, 0], legR: [0, 0], bob: u < 3 ? Math.abs(Math.sin(u * 10)) * .02 : 0 }); hideLegs(k); k.root.position.y = -.82; } }), YO({ x: -.5, z: -1.4, eyes: [[0, 'happy']], pose: (k, u) => { k.pose({ legL: [0, 0], legR: [0, 0], armL: [40, 30], armR: [40, 30], bob: Math.abs(Math.sin(u * 14)) * .04, lean: Math.sin(u * 7) * 6 }); hideLegs(k); k.root.position.y = -.82; } })],
  extra: (c) => { const g = gl(c, '¡JAJAJAJA!', .7, [-.9, 1.9, -1.4]); return { update: (u, t, cam) => pop(g, u, 2.2, 99, cam) }; }, c: [[0, 1.2, 1.9], [0, .85, -1.4], [-.2, 1.15, 1.5], [-.2, .9, -1.4]], range: 1.2 }));
// 54. Ya no son supervivientes por obligación: dos personas que eligen quedarse juntas
Q(54, (d) => ({ amb: 'parque', ambo: { dusk: true }, fov: 34, atores: [YO({ x: -.4, z: 0, eyes: [[0, 'look'], [6, 'happy']], move: (u) => [-.4, 0, 2 - u * .3], pose: (k, u) => k.walk(u) }), ELLA({ x: .4, z: 0, eyes: [[0, 'look'], [6, 'happy']], move: (u) => [.4, 0, 2 - u * .3], pose: (k, u) => k.walk(u + .5) }), LUNES({ x: 1.1, move: (u) => [1.1, 0, 2.3 - u * .3] })],
  cam: [[0, [0, 1.5, 6.6], [0, 1.0, 2]], [d, [0, 1.6, 6.6 - d * .3 - 1.4], [0, 1.1, 2 - d * .3]]], f: [[0, 4.6]], range: 2.4 }));
// 55. Así que se ponen metas
Q(55, (d) => ({ amb: 'sala', ambo: { wall: '#2F6E68' }, fov: 30, atores: [ELLA({ x: .6, z: -.6, eyes: [[0, 'happy']] }), YO({ x: -.6, z: -.6, eyes: [[0, 'happy']] })], c: [[0, 1.5, 2.8], [0, 1.3, -.6], [0, 1.5, 2.4], [0, 1.35, -.6]], range: 1.4 }));
// 56. La lista: el mar, la nieve, la selva, el desierto, la ciudad más grande… vacía
Q(56, (d, a) => { const W = ['mar', 'nieve', 'selva', 'desierto', 'ciudad']; const T = W.map((w) => R0(a, w, 3)); return { amb: 'sala', ambo: { wall: '#2F6E68' }, fov: 30,
  extra: (c) => { const L = ['☐ EL MAR', '☐ LA NIEVE', '☐ LA SELVA', '☐ EL DESIERTO', '☐ LA CIUDAD MÁS GRANDE'];
    const cv = document.createElement('canvas'); cv.width = 600; cv.height = 800; const x = cv.getContext('2d'); const tx = new THREE.CanvasTexture(cv); tx.colorSpace = THREE.SRGBColorSpace; const m = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 1.6), new THREE.MeshStandardMaterial({ map: tx, roughness: .9 })); m.position.set(0, 1.4, -.4); c.add(m); let last = -1;
    const draw = (n) => { x.fillStyle = '#FBF7EC'; x.fillRect(0, 0, 600, 800); x.strokeStyle = '#B8D0E8'; x.lineWidth = 2; for (let y = 160; y < 800; y += 100) { x.beginPath(); x.moveTo(30, y + 20); x.lineTo(570, y + 20); x.stroke(); } x.fillStyle = '#C9361F'; x.font = '700 72px Caveat'; x.fillText('Nuestra lista', 60, 100); x.fillStyle = '#2A2A34'; x.font = '700 52px Caveat'; for (let i = 0; i < n; i++) x.fillText(L[i], 50, 200 + i * 100 - 10); tx.needsUpdate = true; };
    return { update: (u) => { const n = T.filter((t) => u >= t).length, v = u > T[4] + 1.8, key = n * 2 + (v ? 1 : 0); if (key !== last) { draw(n); if (v) { x.fillStyle = '#C9361F'; x.font = '700 52px Caveat'; x.fillText('(vacía)', 330, 690); tx.needsUpdate = true; } last = key; } } }; },
  c: [[0, 1.4, 3.0], [0, 1.4, -.4], [0, 1.4, 2.6], [0, 1.4, -.4]], range: 1 }; });
// 57. Viajan en bici, en velero, a caballo (el caballo tampoco sabe que lo montas)
Q(57, (d, a) => { const tc = R0(a, 'caballo'); return { amb: 'playa', fov: 34, atores: [{ tipo: 'caballo', x: -.4, z: -.6, move: (u) => [-.4 + Math.max(0, u - tc) * .3, 0, -.6], pose: (k, u) => k.talk(u, false) }, YO({ x: -.6, y: .5, z: -.5, eyes: [[0, 'wide'], [tc + 3, 'flat']], move: (u) => [-.2 + Math.max(0, u - tc) * .3, .5 + Math.sin(u * 6) * .03, -.5], pose: (k, u) => k.pose({ legL: [35, 10], legR: [35, 10], armL: [70, 20], armR: [70, 20], lean: Math.sin(u * 3) * 8 }) }), ELLA({ x: 2.4, z: 0, eyes: [[0, 'happy']] })],
  extra: (c) => { const boat = new THREE.Group(); boat.add(box(2.4, .4, .8, std('#8E6242'), 0, .2, 0)); const sail = new THREE.Mesh(new THREE.ConeGeometry(.9, 2.6, 3), std('#FBF7EC')); sail.position.set(0, 1.7, 0); sail.scale.z = .1; boat.add(sail); boat.add(box(.05, 2.8, .05, std('#5A3A22'), 0, 1.6, 0)); boat.position.set(-6, 0, -16); c.add(boat); return { update: (u) => { boat.position.x = -6 + u * .4; boat.position.y = Math.sin(u * 2) * .06; } }; },
  cam: [[0, [-2, 1.4, 4.6], [-4, 1.4, -14]], [tc - .5, [-1.6, 1.5, 4.2], [-3, 1.2, -12]], [tc, [.4, 1.6, 4.2], [0, 1.4, -.4]], [d, [.6, 1.7, 3.6], [.3, 1.5, -.4]]], f: [[0, 16], [tc, 4.4]], range: 3 }; });
// 58a. Ciudades con enredaderas
Qt(S[58], wt('duermen', S[58]), (d) => ({ amb: 'ruaV', ambo: { seed: 12, selva: true }, fov: 36, atores: [YO({ x: -.5, y: .42, move: (u) => [-.5, .42, 2 - u * 1.4], pose: (k, u) => pedal(k, u) }), ELLA({ x: .7, y: .42, move: (u) => [.7, .42, 1 - u * 1.4], pose: (k, u) => pedal(k, u + .3) })],
  extra: (c, s, [h, e]) => { const b1 = bici(), b2 = bici('#E8667F'); b1.rotation.y = b2.rotation.y = Math.PI / 2; c.add(b1, b2); return { update: () => { b1.position.set(h.root.position.x, 0, h.root.position.z); b2.position.set(e.root.position.x, 0, e.root.position.z); } }; },
  cam: [[0, [2.6, 2.2, 6], [0, 2.2, -4]], [d, [2.4, 2.4, 6 - d * 1.4], [0, 2.6, -4 - d * 1.4]]], f: [[0, 6]], range: 4 }));
// 58b. Hoteles de lujo con ventanas rotas
Qt(wt('duermen', S[58]), wt('leen', S[58]), (d) => ({ amb: 'hotel', fov: 34, atores: [YO({ x: -.6, z: -1.2, y: .6, eyes: [[0, 'shut']], pose: (k) => { k.pose(); deitar(k, Math.PI / 2); } }), ELLA({ x: .7, z: -1.2, y: .6, eyes: [[0, 'shut']], pose: (k) => { k.pose(); deitar(k, -Math.PI / 2); } }), LUNES({ x: 0, z: .2 })], c: [[0, 2.0, 3.0], [0, 1.0, -1.4], [0, 1.8, 2.4], [0, 1.0, -1.4]], range: 2 }));
// 58c. Bibliotecas enteras, en voz alta: ella lee mejor, tú pones las voces
Qt(wt('leen', S[58]), S[59], (d, a) => { const tv = R0(a, 'voces'); return { amb: 'biblio', fov: 32, atores: [ELLA({ x: .6, z: -1, eyes: [[0, 'down']], pose: (k, u) => k.pose({ armL: [60, 90], armR: [60, 90] }) }), YO({ x: -.6, z: -1, eyes: [[0, 'look'], [tv - .2, 'angry'], [tv + .8, 'wide']], pose: (k, u) => (u > tv - .3 ? k.pose({ armL: [130 + Math.sin(u * 9) * 20, 30], armR: [130 - Math.sin(u * 9) * 20, 30], bob: Math.abs(Math.sin(u * 8)) * .03 }) : k.pose({ armL: [60, 90], armR: [12, 8] })) })],
  extra: (c, s, [e]) => { const bk = box(.4, .05, .3, std('#C9361F'), 0, 0, 0); c.add(bk); const g = gl(c, '¡GRRR!', .5, [-1.1, 2.1, -1]); const hp = new THREE.Vector3(); return { update: (u, t, cam) => { e.arms.R.hand.getWorldPosition(hp); bk.position.set(hp.x - .1, hp.y + .05, hp.z + .1); pop(g, u, tv, 99, cam); } }; },
  c: [[0, 1.5, 2.6], [0, 1.3, -1], [0, 1.5, 2.1], [0, 1.35, -1]], range: 1.6 }; });
// 59. Noruega: la Bóveda Global de Semillas de Svalbard
Q(59, (d) => ({ amb: 'svalbard', bg: '#C8D8E8', fov: 36, atores: [YO({ x: -.6, z: -.8, eyes: [[0, 'wide']] }), ELLA({ x: .6, z: -.8, eyes: [[0, 'wide']] }), LUNES({ x: 1.4, z: -.4 })],
  extra: (c) => { const sn = c.userData.snow; return { update: (u) => sn.forEach(([s, x, y, z, p]) => s.position.set(x + Math.sin(u + p * 9) * .3, ((y - u * .6) % 8 + 8) % 8, z)) }; },
  c: [[0, 1.6, 6.5], [0, 2.2, -4], [0, 1.4, 4.4], [0, 2.0, -4]], range: 4, look: { bloom: .45 } }));
// 60. ¿Y si plantamos un huerto? No sé plantar. Yo tampoco.
Q(60, (d, a) => { const t1 = R0(a, 'no'), t2 = R0(a, 'yo'), t3 = R0(a, 'plantan'); return { amb: 'huerto', fov: 32, atores: [ELLA({ x: .7, z: .4, eyes: [[0, 'happy'], [t2, 'flat'], [t3, 'happy']], pose: (k, u) => (u > t3 ? k.pose({ armL: [12, 8], armR: [40, 60], lean: 20 }) : k.pose()) }), YO({ x: -.7, z: .4, eyes: [[0, 'look'], [t1, 'flat'], [t3, 'happy']], pose: (k, u) => (u > t3 ? k.pose({ armL: [40, 60], armR: [12, 8], lean: 20 }) : k.pose()) })],
  extra: (c) => { const G = [gl(c, '¿Y si plantamos un huerto?', 1.1, [1.3, 2.2, .4], 40), gl(c, 'No sé plantar.', .8, [-1.3, 2.2, .4], 52), gl(c, 'Yo tampoco.', .8, [1.3, 2.2, .4], 60)]; return { update: (u, t, cam) => { pop(G[0], u, .1, t1 - .1, cam); pop(G[1], u, t1, t2 - .1, cam); pop(G[2], u, t2, t3 - .1, cam); } }; },
  c: [[0, 1.6, 3.6], [0, 1.3, 0], [0, 1.6, 3.0], [0, 1.2, 0]], range: 1.8 }; });
// 61. La primera cosecha: tres tomates y una calabaza deforme
Q(61, (d) => ({ amb: 'huerto', fov: 30, extra: (c) => { c.add(box(1.4, .06, .8, std('#8E6242'), 0, .7, .6)); [-.3, 0, .3].forEach((x) => c.add(tomate(x, .82, .6))); const cb = calabaza(0, 0); cb.scale.multiplyScalar(.45); cb.position.set(.55, .85, .6); c.add(cb); return {}; }, c: [[-.6, 1.5, 3.2], [0, .85, .6], [.4, 1.3, 2.6], [.1, .9, .6]], range: 1.4 }));
// 62. Es la mejor comida que han probado en su vida
Q(62, (d) => ({ amb: 'huerto', ambo: { dusk: true }, fov: 32, atores: [YO({ x: -.5, z: .4, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [80 + Math.max(0, Math.sin(u * 5)) * 50, 120] }) }), ELLA({ x: .5, z: .4, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [80 + Math.max(0, Math.sin(u * 5 + 1)) * 50, 120], armR: [12, 8] }) })], c: [[0, 1.5, 2.6], [0, 1.3, .4], [0, 1.45, 2.1], [0, 1.35, .4]], range: 1.4 }));
// 63. Pasa un año, luego otro
Q(63, (d) => ({ amb: 'huerto', fov: 36, extra: (c) => { const ls = lab(c, ['AÑO 1'], 1.2, [0, 2.6, 0], { bg: '#FBF7EC', fg: '#C9361F', size: 90, w: 500, h: 200 }), l2 = lab(c, ['AÑO 2'], 1.2, [0, 2.6, 0], { bg: '#FBF7EC', fg: '#C9361F', size: 90, w: 500, h: 200 }); return { update: (u, t, cam) => { pop(ls, u, 0, 1.0, cam); pop(l2, u, 1.1, 99, cam); } }; }, c: [[0, 2.0, 5], [0, 1.4, -1], [0, 2.4, 6], [0, 1.4, -1]], range: 3, lookFn: (u) => ({ exposure: 1.0 + Math.sin(u * 4) * .08 }) }));
// 64. Ensayas delante de Roberto (ahora espantapájaros). Roberto opina que eres un cobarde.
Q(64, (d, a) => { const tc = R0(a, 'cobarde'); return { amb: 'huerto', fov: 32, atores: [ROB({ x: .8, z: -.6, y: .3, pose: (k) => k.pose({ armL: [90, 0], armR: [90, 0] }) }), YO({ x: -.8, z: .2, eyes: [[0, 'look'], [2.4, 'heart'], [tc, 'sad']], pose: (k, u) => talkPose(k, u, u < tc - .5) })],
  extra: (c) => { c.add(box(.08, 2.0, .08, std('#6B4A33'), .8, 1.0, -.75)); const hat = new THREE.Group(); const brim = new THREE.Mesh(new THREE.CylinderGeometry(.42, .42, .03, 24), std('#D8B870')); const top = new THREE.Mesh(new THREE.CylinderGeometry(.2, .22, .2, 20), std('#D8B870')); top.position.y = .1; hat.add(brim, top); hat.position.set(.8, 2.08, -.6); c.add(hat); const g = gl(c, 'Te… te… ¿te gusta el atún?', 1.1, [-1.4, 2.3, .2], 38); const o = bubble(c, ['COBARDE.'], .8, { size: 70, tail: 'right' }); o.position.set(1.5, 2.6, -.6); return { update: (u, t, cam) => { pop(g, u, 1.2, tc - .6, cam); pop(o, u, tc, 99, cam); } }; },
  c: [[0, 1.6, 3.4], [0, 1.4, -.2], [0, 1.6, 2.8], [0, 1.5, -.2]], range: 1.6 }; });
// 65. Una tarde, en la playa, al final de la lista: "¿sabes qué es lo más raro?"
Q(65, (d) => ({ amb: 'playa', ambo: { dusk: true, roca: true }, bg: '#F2A880', fov: 34, atores: [ELLA({ x: .45, z: -1, y: .02, eyes: [[0, 'look']], pose: (k) => sitP(k) }), YO({ x: -.45, z: -1, y: .02, eyes: [[0, 'look']], pose: (k) => sitP(k) }), LUNES({ x: 1.6, z: -.2 })],
  extra: (c) => { const g = gl(c, '¿Sabes qué es lo más raro?', 1.1, [1.0, 2.3, -1], 40); return { update: (u, t, cam) => pop(g, u, 2.6, 99, cam) }; },
  c: [[0, 1.3, 5.4], [0, 1.4, -1], [0, 1.4, 3.6], [0, 1.4, -1]], range: 2.4, look: { bloom: .45 } }));
// 66. Tú piensas: que se haya acabado el mundo
Q(66, (d) => ({ amb: 'playa', ambo: { dusk: true, roca: true }, bg: '#F2A880', fov: 30, atores: [YO({ x: -.45, z: -1, y: .02, eyes: [[0, 'flat']], pose: (k) => sitP(k) })], extra: (c) => { const b = bubble(c, ['¿EL FIN', 'DEL MUNDO?'], 1.0, { size: 64 }); b.position.set(.25, 2.3, -1); return { update: (u, t, cam) => pop(b, u, .2, 99, cam) }; }, c: [[-.2, 1.6, 2.4], [-.1, 1.5, -1], [-.2, 1.6, 2.1], [-.1, 1.55, -1]], range: 1.2 }));
// 67. Ella: "en clase nunca hablábamos… ese chico parece simpático… nunca me atreví"
Q(67, (d, a) => { const tc = R0(a, 'te'), ts = R0(a, 'ese'); return { amb: 'aula', fov: 32, atores: [ELLA({ x: -.2, z: -1.6, y: -.4, eyes: [[0, 'look'], [tc + .6, 'lookl'], [ts, 'heart'], [d - 2.2, 'sad']], pose: (k, u) => { sitP(k); k.head.rotation.y = u > tc + .4 ? -.5 : 0; } }), YO({ x: .2, z: .8, y: -.4, eyes: [[0, 'down']], pose: sitP })],
  extra: (c) => { for (const [x, z] of [[-.2, -1.6], [.2, .8]]) { c.add(box(.9, .06, .55, std('#C9A06A'), x, .75, z - .45)); c.add(box(.5, .06, .5, std('#4A86C7'), x, .45, z)); } const b = bubble(c, ['parece simpático…'], 1.2, { size: 56 }); b.position.set(-.8, 2.2, -1.6); return { update: (u, t, cam) => pop(b, u, ts, 99, cam) }; },
  c: [[2.8, 1.5, -2.6], [-.1, .9, -.4], [2.4, 1.4, -2.0], [-.1, .9, -.4]], range: 2.4, lookFn: () => ({ sat: .7, tint: '#FFE8D0', vig: .65 }) }; });
// 68. Te quedas sin palabras. Otra vez.
Q(68, (d) => ({ amb: 'playa', ambo: { dusk: true, roca: true }, bg: '#F2A880', fov: 28, atores: [YO({ x: -.45, z: -1, y: .02, eyes: [[0, 'wide'], [1.4, 'heart']], pose: (k) => sitP(k) })], extra: (c) => { const g = gl(c, '…', .45, [.1, 2.0, -1]); return { update: (u, t, cam) => pop(g, u, .3, 99, cam) }; }, c: [[-.3, 1.5, 1.9], [-.3, 1.35, -1], [-.3, 1.5, 1.7], [-.3, 1.4, -1]], range: 1 }));
// 69. Hicieron falta 8.000 millones de desaparecidos para que dos tímidos se dijeran hola
Q(69, (d, a) => { const th = R0(a, 'hola'); return { amb: 'playa', ambo: { dusk: true, roca: true }, bg: '#F2A880', fov: 30, atores: [ELLA({ x: .45, z: -1, y: .02, eyes: [[0, 'look'], [th, 'happy']], pose: (k, u) => (sitP(k), u > th && k.pose({ armL: [12, 8], armR: [140, 20] })) }), YO({ x: -.45, z: -1, y: .02, eyes: [[0, 'look'], [th, 'happy']], pose: (k, u) => (sitP(k), u > th && k.pose({ armL: [140, 20], armR: [12, 8] })) })],
  extra: (c) => { const a1 = gl(c, 'hola.', .45, [-.9, 2.0, -1]), a2 = gl(c, 'hola.', .45, [.9, 2.0, -1]); return { update: (u, t, cam) => { pop(a1, u, th, 99, cam); pop(a2, u, th + .3, 99, cam); } }; },
  c: [[0, 1.4, 4.4], [0, 1.4, -1], [0, 1.4, 2.6], [0, 1.4, -1]], range: 2 }; });
// 70. Se lo dices todo: el lápiz, el cilantro, la constelación del lápiz
Q(70, (d, a) => { const T = [R0(a, 'lapiz'), R0(a, 'cilantro'), R0(a, 'constelacion')]; return { amb: 'playa', ambo: { dusk: true, roca: true }, bg: '#F2A880', fov: 32, atores: [YO({ x: -.45, z: -1, y: .02, eyes: [[0, 'look']], pose: (k, u) => { k.pose({ legL: [0, 0], legR: [0, 0], armR: [60 + Math.sin(u * 8) * 25, 30] }); hideLegs(k); } }), ELLA({ x: .45, z: -1, y: .02, eyes: [[0, 'wide'], [T[2], 'happy']], pose: sitP })],
  extra: (c) => { const W = ['✏️ EL LÁPIZ', 'CILANTRO ✗', '★ CONSTELACIÓN ★'].map((tx, i) => lab(c, [tx], 1.2, [-1.6 + i * 1.6, 2.6 - (i % 2) * .4, -1.2], { bg: '#FBF7EC', fg: '#2A2A34', size: 58 })); return { update: (u, t, cam) => W.forEach((m, i) => pop(m, u, T[i], 99, cam)) }; },
  c: [[0, 1.6, 4.4], [0, 1.6, -1], [0, 1.6, 3.6], [0, 1.6, -1]], range: 2 }; });
// 71. Ella se ríe tanto que se cae de la roca
Q(71, (d) => ({ amb: 'playa', ambo: { dusk: true, roca: true }, bg: '#F2A880', fov: 32, atores: [ELLA({ x: .45, z: -1, y: .02, eyes: [[0, 'happy']], move: (u) => [.45 + smooth(1.2, 1.8, u) * .9, .02 - smooth(1.2, 1.8, u) * .02, -1], pose: (k, u) => { k.pose({ legL: [0, 0], legR: [0, 0], armL: [40, 30], armR: [40, 30], bob: Math.abs(Math.sin(u * 12)) * .03 }); hideLegs(k); k.root.rotation.z = -smooth(1.2, 1.8, u) * 1.4; } }), YO({ x: -.45, z: -1, y: .02, eyes: [[0, 'look'], [1.5, 'wide'], [2.4, 'happy']], pose: sitP })],
  extra: (c) => { const g = gl(c, '¡JAJAJA!', .6, [1.2, 2.1, -1]); return { update: (u, t, cam) => pop(g, u, .1, 1.4, cam) }; }, c: [[.4, 1.4, 3.6], [.3, 1.0, -1], [.6, 1.3, 3.0], [.6, .8, -1]], range: 2 }));
// 72. Esa noche, bajo la Vía Láctea, ella te da la mano
Q(72, (d) => ({ amb: 'azotea', ambo: { ang: .5 }, bg: '#03040A', fov: 34, atores: [YO({ x: -.32, z: 0, eyes: [[0, 'look'], [2.6, 'heart']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [lerp(12, 34, smooth(1, 2.4, u)), 10] }) }), ELLA({ x: .32, z: 0, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [lerp(12, 34, smooth(1, 2.4, u)), 10], armR: [12, 8] }) })],
  extra: (c) => { const g = glowSprite('#FF8AA0', .5, 0); g.position.set(0, .8, .05); c.add(g); return { update: (u) => (g.material.opacity = smooth(2.2, 3, u) * .7) }; },
  cam: [[0, [0, .9, 1.6], [0, .8, 0]], [3.5, [0, 1.0, 2.2], [0, .9, 0]], [d, [0, .6, 5.4], [0, 8, -30]]], f: [[0, 1.6], [3.5, 2.2], [d, 30]], range: 6, look: { bloom: .55, vig: .5 } }));
// 73. Pasan los años: el huerto crece, Lunes viejo y gruñón, Roberto pierde un brazo
Q(73, (d, a) => { const tr = R0(a, 'roberto'); return { amb: 'huerto', fov: 34, atores: [{ tipo: 'viejo', x: -.8, z: .6, s: .55, eyes: [[0, 'flat']] }, ROB({ x: 1.2, z: -.6, y: .3, pose: (k, u) => { k.pose({ armL: [90, 0], armR: [90, 0] }); k.arms.R.u.visible = u < tr + .4; } })],
  extra: (c, s, [l, r]) => { c.add(box(.08, 2.0, .08, std('#6B4A33'), 1.2, 1.0, -.75)); const T = []; for (let i = 0; i < 14; i++) { const t = tomate(-2 + (i % 7) * .65, .6, -1.2 - Math.floor(i / 7) * 1.1, 1.3); c.add(t); T.push(t); } const arm = box(.6, .08, .08, std('#E4DCCF'), 1.6, 1.85, -.6); c.add(arm); const g = gl(c, 'grrr…', .4, [-.4, 1.0, .6]);
    return { update: (u, t, cam) => { T.forEach((tm, i) => tm.scale.setScalar(smooth(i * .2, i * .2 + 1, u))); const k = smooth(tr + .3, tr + 1.2, u); arm.position.set(1.6 + k * .4, 1.85 - k * 1.8, -.6 + k * .2); arm.rotation.z = -k * 2; pop(g, u, 2.4, tr - .2, cam); } }; },
  c: [[0, 1.8, 4.6], [0, 1.0, -.6], [.6, 1.6, 3.6], [.6, 1.0, -.6]], range: 2.4 }; });
// 74. La radio con un panel solar: "aquí estamos, si alguien nos escucha"
Q(74, (d, a) => { const ta = R0(a, 'aqui'); return { amb: 'azotea', ambo: { ang: .4 }, bg: '#03040A', fov: 32, atores: [YO({ x: -.7, z: -.2, eyes: [[0, 'look']] }), ELLA({ x: .7, z: -.2, eyes: [[0, 'look']], pose: (k, u) => talkPose(k, u, u > ta) }), LUNES({ x: 1.5, z: .2 })],
  extra: (c) => { c.add(box(1.2, .7, .7, std('#8E6242'), 0, .35, -.6)); const r = radio(); r.position.set(0, .7, -.6); c.add(r); const p = panel(); p.position.set(-2, 1.0, -1.6); c.add(p); const gl2 = glowSprite('#FFB060', .5, .6); gl2.position.set(.18, 1.0, -.4); c.add(gl2); const g = gl(c, 'Aquí estamos.', .8, [1.3, 2.2, -.2]); return { update: (u, t, cam) => pop(g, u, ta, 99, cam) }; },
  c: [[0, 1.5, 3.4], [0, 1.0, -.4], [0, 1.4, 2.8], [0, 1.0, -.4]], range: 1.8, look: NIGHT }; });
// 75. Nunca contesta nadie.
Q(75, (d) => ({ amb: 'azotea', bg: '#03040A', fov: 28, extra: (c) => { const r = radio(); r.position.set(0, .7, -.6); c.add(r); c.add(box(1.2, .7, .7, std('#8E6242'), 0, .35, -.6)); return {}; }, c: [[0, 1.2, 1.4], [0, .9, -.6], [0, 1.15, 1.2], [0, .9, -.6]], range: 1, look: { exposure: .8 } }));
// 76. Hasta una noche…
Q(76, (d) => ({ amb: 'azotea', ambo: { ang: .3 }, bg: '#03040A', fov: 40, atores: [YO({ x: -.5, z: -.2, eyes: [[0, 'shut']], pose: (k) => k.pose({ head: -10 }) }), ELLA({ x: .5, z: -.2, eyes: [[0, 'shut']], pose: (k) => k.pose({ head: 10 }) })], extra: (c) => { const r = radio(); r.position.set(0, .7, -.6); c.add(r); c.add(box(1.2, .7, .7, std('#8E6242'), 0, .35, -.6)); return {}; }, c: [[0, 3, 6], [0, 4, -20], [0, 2.4, 4.4], [0, 1.4, -.4]], range: 4, look: NIGHT }));
// 77. La radio hace un ruido… una interferencia… una voz
Q(77, (d, a) => { const tv = R0(a, 'voz'); return { amb: 'azotea', bg: '#03040A', fov: 30, atores: [YO({ x: -.6, z: -.2, eyes: [[0, 'shut'], [.6, 'wide']] }), ELLA({ x: .6, z: -.2, eyes: [[0, 'shut'], [.8, 'wide']] })],
  extra: (c) => { c.add(box(1.2, .7, .7, std('#8E6242'), 0, .35, -.6)); const r = radio(); r.position.set(0, .7, -.6); c.add(r); const rings = []; for (let i = 0; i < 6; i++) { const m = new THREE.Mesh(new THREE.TorusGeometry(.2, .012, 8, 48), new THREE.MeshBasicMaterial({ color: '#FFE0A0', transparent: true, opacity: .8 })); m.position.set(-.18, .93, -.42); c.add(m); rings.push(m); } const z = lab(c, ['¡BZZZT!'], .8, [-.9, 1.8, -.6], { bg: '#2A2A34', fg: '#F2C14E' });
    return { update: (u, t, cam) => { const k = u > tv ? 1 : .4; rings.forEach((m, i) => { const p = (u * .8 + i / 6) % 1; m.scale.setScalar(1 + p * 5); m.material.opacity = (1 - p) * .8 * k * (u > .3 ? 1 : 0); m.lookAt(cam.position); }); r.dial.material.emissiveIntensity = .9 + Math.random() * 0 + Math.sin(u * 30) * .5; pop(z, u, .4, tv - .2, cam); } }; },
  c: [[0, 1.3, 2.6], [0, 1.0, -.4], [0, 1.2, 1.8], [0, 1.0, -.5]], range: 1.4, look: NIGHT }; });
// 78. Hola. ¿Hay alguien?
Q(78, (d) => ({ amb: 'azotea', bg: '#03040A', fov: 28, extra: (c) => { c.add(box(1.2, .7, .7, std('#8E6242'), 0, .35, -.6)); const r = radio(); r.position.set(0, .7, -.6); c.add(r); const g = gl(c, 'Hola. ¿Hay alguien?', .9, [.2, 1.5, -.3], 52); return { update: (u, t, cam) => { pop(g, u, .1, 99, cam); r.dial.material.emissiveIntensity = 1.4 + Math.sin(u * 20) * .4; } }; }, c: [[0, 1.2, 2.0], [0, 1.15, -.6], [0, 1.2, 1.7], [0, 1.18, -.6]], range: 1, look: { bloom: .15, bloomT: .98 } }));
// 79. Se miran. Quizás no están solos. Quizás el mundo puede volver a empezar.
Q(79, (d, a) => { const tq = R0(a, 'quizas'); return { amb: 'azotea', ambo: { ang: .45 }, bg: '#03040A', fov: 32, atores: [YO({ x: -.6, z: -.2, eyes: [[0, 'wide'], [tq + 2, 'happy']] }), ELLA({ x: .6, z: -.2, eyes: [[0, 'wide'], [tq + 2.4, 'happy']] })],
  extra: (c) => { c.add(box(1.2, .7, .7, std('#8E6242'), 0, .35, -.6)); const r = radio(); r.position.set(0, .7, -.6); c.add(r); const H2 = cut(canvasTex(256, 240, (x) => { x.clearRect(0, 0, 256, 240); x.fillStyle = '#E2483A'; x.beginPath(); x.moveTo(128, 220); x.bezierCurveTo(10, 140, 0, 40, 70, 25); x.bezierCurveTo(105, 18, 125, 45, 128, 62); x.bezierCurveTo(131, 45, 151, 18, 186, 25); x.bezierCurveTo(256, 40, 246, 140, 128, 220); x.fill(); }), .3, .28); c.add(H2); const far = []; for (let i = 0; i < 5; i++) { const g = glowSprite('#FFD890', .6, 0); g.position.set(-30 + i * 14, 3 + (i % 2), -80); g.material.fog = false; c.add(g); far.push(g); }
    return { update: (u, t, cam) => { const b = Math.pow(Math.max(0, Math.sin(u * Math.PI * 2 * 2)), 8); H2.position.set(0, 2.1, -.2); H2.scale.setScalar(.8 + b * .4); pointer(H2, cam); far.forEach((g, i) => (g.material.opacity = smooth(tq + 1 + i * .5, tq + 2 + i * .5, u) * .8)); } }; },
  c: [[0, 1.5, 2.8], [0, 1.3, -.4], [0, 2.2, 4.8], [0, 2, -10]], range: 4, look: { bloom: .5 } }; });
// 80. Ella agarra el micrófono temblando y se gira hacia ti
Q(80, (d) => ({ amb: 'azotea', bg: '#03040A', fov: 30, atores: [ELLA({ x: .4, z: -.2, eyes: [[0, 'wide'], [d - 3, 'look']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [80 + Math.sin(u * 30) * 3, 70] }) }), YO({ x: -.6, z: -.2, eyes: [[0, 'look']] })],
  extra: (c, s, [e]) => { c.add(box(1.2, .7, .7, std('#8E6242'), .4, .35, -.6)); const r = radio(); r.position.set(.4, .7, -.6); c.add(r); const mic = box(.08, .16, .06, std('#2A2A34'), 0, 0, 0); c.add(mic); const hp = new THREE.Vector3(); return { update: () => { e.arms.R.hand.getWorldPosition(hp); mic.position.set(hp.x, hp.y + .06, hp.z + .06); } }; },
  c: [[.4, 1.4, 2.4], [.2, 1.2, -.2], [.2, 1.4, 1.8], [0, 1.3, -.2]], range: 1.4, look: NIGHT }));
// 81. Pase lo que pase, me alegro de que fueras tú.
Q(81, (d) => ({ amb: 'azotea', ambo: { ang: .5 }, bg: '#03040A', fov: 28, atores: [ELLA({ x: .3, z: -.2, eyes: [[0, 'happy']], pose: (k) => k.pose({ armL: [12, 8], armR: [80, 70] }) }), YO({ x: -.4, z: -.2, eyes: [[0, 'wide']] })], extra: (c) => { const g = gl(c, 'Me alegro de que fueras tú.', 1.0, [.9, 2.15, -.2], 40); return { update: (u, t, cam) => pop(g, u, .2, 99, cam) }; }, c: [[.6, 1.6, 3.0], [.3, 1.5, -.2], [.5, 1.6, 2.6], [.3, 1.55, -.2]], range: 1.4 }));
// 82. Y te llama por tu nombre. El de verdad.
Q(82, (d) => ({ amb: 'azotea', ambo: { ang: .5 }, bg: '#03040A', fov: 26, atores: [YO({ x: 0, z: -.2, eyes: [[0, 'wide'], [1.4, 'heart']] })], extra: (c) => { const g = glowSprite('#FFB0C0', 2.2, 0); g.position.set(0, 1.4, -.4); c.add(g); const l = lab(c, ['(no es Daniel)'], .9, [.6, 2.15, -.2], { bg: '#FBF7EC', fg: '#2A2A34', size: 64 }); return { update: (u, t, cam) => { g.material.opacity = smooth(1.2, 2.4, u) * .45; pop(l, u, 2.2, 99, cam); } }; }, c: [[0, 1.6, 1.8], [0, 1.5, -.2], [0, 1.6, 1.4], [0, 1.55, -.2]], range: 1, look: { bloom: .55 } }));
// 83. Lunes ladra. Roberto se cae.
Q(83, (d, a) => { const tr = R0(a, 'roberto'); return { amb: 'huerto', ambo: { dusk: true }, bg: '#2A2050', fov: 32, atores: [LUNES({ x: -.8, z: .4, eyes: [[0, 'wide']], pose: (k, u) => k.talk(u, u < tr) }), ROB({ x: .8, z: -.6, y: .3, pose: (k, u) => { k.pose({ armL: [90, 0], armR: [90, 0] }); k.root.rotation.z = -smooth(tr, tr + .6, u) * 1.5; } })],
  extra: (c) => { const g = gl(c, '¡GUAU!', .5, [-.5, 1.1, .4]); return { update: (u, t, cam) => pop(g, u, .1, tr, cam) }; }, c: [[0, 1.4, 3.4], [0, .9, -.2], [0, 1.3, 2.8], [0, .9, -.2]], range: 1.6, lookFn: () => ({ exposure: .8, tint: '#C8D0FF' }) }; });
// 84. Y ella aprieta el botón. (fim)
Q(84, (d) => ({ amb: 'azotea', ambo: { ang: .45 }, bg: '#03040A', fov: 34, atores: [ELLA({ x: .3, z: -.2, eyes: [[0, 'happy']], pose: (k) => k.pose({ armL: [12, 8], armR: [80, 70] }) }), YO({ x: -.4, z: -.2, eyes: [[0, 'heart']] }), LUNES({ x: 1.3, z: .2 })],
  extra: (c, s, [e]) => { c.add(box(1.2, .7, .7, std('#8E6242'), .4, .35, -.8)); const r = radio(); r.position.set(.4, .7, -.8); c.add(r); const fl = glowSprite('#FFE0A0', 1.4, 0); fl.position.set(.5, 1.3, -.6); c.add(fl); return { update: (u) => { const k = smooth(1.0, 1.4, u); r.dial.material.emissiveIntensity = .9 + k * 4; fl.material.opacity = k * (1 - smooth(1.6, 3, u)) * .8; } }; },
  cam: [[0, [.4, 1.3, 1.8], [.3, 1.0, -.4]], [1.6, [.4, 1.4, 2.4], [.3, 1.1, -.4]], [5, [0, 4, 9], [0, 10, -40]]], f: [[0, 2], [5, 40]], range: 10, lookFn: (u) => ({ bloom: .55, exposure: 1 - smooth(4.4, 5.6, u) }) }));
