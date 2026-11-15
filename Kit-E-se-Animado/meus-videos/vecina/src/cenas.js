// "¿Y si tu crush se mudara a la casa de al lado?" — horizontal 1280x720, ~10:00
import * as THREE from 'three';
import { plano, AMBS, box, std, cut, glowSprite, pointer, canvasTex, lightPanel, smooth, lerp, clamp, rng } from './mundo.js';
import { deitar, bubble, wordTex } from './extra.js';
import { S, wt } from './tiempos.js';
import { labelT, globo, tomate } from './amb2.js';
import { wpos, cartel, fachada, casa, seto, valla, rosal, caseta, balon, camion, caja, sofa, flamenco, pegaso, posterBanda, linterna, cepillo, libro, enJanela } from './amb3.js';

export const CENAS = [];
const FIM = 999;
const end = (i) => (i + 1 < S.length ? S[i + 1] : FIM);
const mk = (cfg, d) => { if (cfg.c) { const [p0, q0, p1, q1] = cfg.c; cfg.cam = [[0, p0, q0], [d, p1, q1]]; const D = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]); cfg.f = [[0, D(p0, q0)], [d, D(p1, q1)]]; } return cfg; };
const Q = (i, fn) => { const a = S[i], b = end(i), d = Math.min(b, 640) - a; CENAS.push([(x, y) => plano(x, y, mk(fn(d, a), d)), a, b]); };
const Qt = (a, b, fn) => { const d = Math.min(b, 640) - a; CENAS.push([(x, y) => plano(x, y, mk(fn(d, a), d)), a, b]); };
// divide a cena i em pedaços nas palavras dadas: Qs(i, ['palavra', ...], [fn0, fn1, ...])
const Qs = (i, words, fns) => { const a = S[i], b = end(i); const cuts = [a]; let t = a; for (const w of words) { const [ww, n] = Array.isArray(w) ? w : [w, 1]; for (let j = 0; j < n; j++) t = wt(ww, t + .01); cuts.push(t); } cuts.push(b); fns.forEach((fn, k) => Qt(cuts[k], cuts[k + 1], fn)); };
const H = (o) => ({ tipo: 'humano', ...o });
const YO = (o = {}) => H({ glow: .1, ...o });
const dinoT = () => canvasTex(256, 256, (x) => { x.clearRect(0, 0, 256, 256); x.fillStyle = '#5FB04A'; x.beginPath(); x.ellipse(120, 150, 70, 45, 0, 0, 7); x.fill(); x.beginPath(); x.ellipse(190, 90, 34, 28, 0, 0, 7); x.fill(); x.fillRect(160, 95, 30, 60); x.fillRect(80, 180, 18, 40); x.fillRect(140, 180, 18, 40); x.beginPath(); x.moveTo(55, 150); x.lineTo(5, 175); x.lineTo(60, 172); x.fill(); x.fillStyle = '#F2C14E'; for (let i = 0; i < 5; i++) { x.beginPath(); x.moveTo(70 + i * 22, 112 - (i % 2) * 4); x.lineTo(81 + i * 22, 88); x.lineTo(92 + i * 22, 112); x.fill(); } x.fillStyle = '#111'; x.beginPath(); x.arc(198, 84, 5, 0, 7); x.fill(); });
const dinoOn = (k) => { if (k.dino) return; const m = cut(dinoT(), .3, .3); m.position.set(0, -.36, .012); m.castShadow = false; k.torso.add(m); k.dino = m; };
const PIJ = (o = {}) => { const p = o.pose; return YO({ outfit: 'avental', ...o, pose: (k, u) => { dinoOn(k); p ? p(k, u) : k.pose(); } }); };
const ELLA = (o = {}) => H({ outfit: 'amarelo', hair: 'long', hairc: '#4A2A1A', lash: true, ...o });
const MAMA = (o = {}) => H({ outfit: 'rosa', hair: 'bun', hairc: '#5A3A2A', lash: true, glow: 0, ...o });
const MAMAS = (o = {}) => H({ outfit: 'roxo', hair: 'bun', hairc: '#2A1A12', lash: true, glow: 0, ...o });
const DARWIN = (o = {}) => H({ outfit: 'terno', hair: 'old', hairc: '#E8E2D8', glow: 0, ...o });
const PROF = (o = {}) => H({ outfit: 'jaleco', glasses: true, glow: 0, tint: '#E8E2D8', ...o });
const PEPINO = (o = {}) => ({ tipo: 'gato', s: .5, ...o });
const PERRO = (o = {}) => ({ tipo: 'perro', s: .55, ...o });
const R0 = (a, w, from = 0) => wt(w, a + from) - a;
const lab = (c, lines, w, pos, o = {}) => { const m = cut(labelT(Array.isArray(lines) ? lines : [lines], { bg: '#2A2A34', fg: '#F2C14E', size: 72, w: 720, h: 150, ...o }), w, w * (o.h || 150) / (o.w || 720)); m.position.set(...pos); m.renderOrder = 4; c.add(m); return m; };
const lw = (c, lines, w, pos, o = {}) => lab(c, lines, w, pos, { bg: '#FBF7EC', fg: '#2A2A34', ...o });
const gl = (c, txt, w, pos, size) => { const m = globo(txt, w, size); m.position.set(...pos); m.renderOrder = 5; c.add(m); return m; };
const pop = (m, u, a, b = 1e9, cam) => { const k = smooth(a, a + .2, u) * (1 - smooth(b, b + .2, u)); m.visible = k > .01; m.scale.setScalar(Math.max(.001, .5 + .5 * k)); if (cam) pointer(m, cam); };
const wave = (k, u) => k.pose({ armL: [12, 8], armR: [150 + Math.sin(u * 9) * 18, 20] });
const clap = (k, u) => { const s = Math.abs(Math.sin(u * 10)); k.pose({ armL: [70 + s * 12, 70 + s * 30], armR: [70 + s * 12, 70 + s * 30] }); };
const nod = (k, u) => k.pose({ head: Math.sin(u * 7) * 6, bob: Math.abs(Math.sin(u * 7)) * .02 });
const talkP = (k, u) => k.pose({ armL: [12, 8], armR: [50 + Math.sin(u * 8) * 15, 30], bob: Math.abs(Math.sin(u * 8)) * .015 });
const hideLegs = (k) => { for (const l of Object.values(k.legs)) { l.th.visible = false; if (l.shin) l.shin.visible = false; } };
const sitP = (k) => { k.pose({ armL: [8, 6], armR: [8, 6] }); hideLegs(k); };
const dance = (k, u, amp = 1) => { const s = Math.sin(u * 7); k.pose({ armL: [40 + s * 30 * amp, 40], armR: [120, 100], lean: s * 8 * amp, bob: Math.abs(Math.cos(u * 7)) * .06 * amp, legL: [s * 10, 0], legR: [-s * 10, 0], head: s * 6 }); };
// mão direita: posição no mundo
const hand = (k) => { const v = new THREE.Vector3(); k.arms.R.hand.getWorldPosition(v); return v; };
// bochechas vermelhas
const rubor = (k) => { const L = [-1, 1].map((s) => { const g = glowSprite('#FF3A4A', .42, 0); g.position.set(s * .2, -.12, .08); k.head.add(g); return g; }); return (v) => L.forEach((g) => (g.material.opacity = v * .85)); };
// cartaz na janela da casa (grupo fachada f): pos local do vidro
const vidro = (c, f, lines, o = {}) => { f.updateMatrixWorld(true); const m = cartel(lines, o.ww || .9, o); const [cx, cy] = f.userData.win; const p = new THREE.Vector3(cx + (o.dx || 0), cy + (o.dy || 0), .2); f.localToWorld(p); m.position.copy(p); m.rotation.y = f.rotation.y; c.add(m); return m; };
const vis = (m, u, a, b = 1e9) => (m.visible = u >= a && u < b);
const notas = (c, n = 6) => { const N = []; for (let i = 0; i < n; i++) { const m = cut(wordTex(i % 2 ? '♪' : '♫', '#F2C14E', 150), .35, .28); m.renderOrder = 5; c.add(m); N.push(m); } return (u, p, cam, on = true) => N.forEach((m, i) => { const f = (u * .5 + i / n) % 1; m.visible = on; m.position.set(p.x + .4 + Math.sin(i * 2 + u) * .3 + f * .4, p.y + f * 1.2, p.z); m.material.opacity = Math.sin(f * Math.PI); pointer(m, cam); }); };
const brillos = (c, n = 10, col = '#FFF2C0') => { const B = []; for (let i = 0; i < n; i++) { const g = glowSprite(col, .3, 0); c.add(g); B.push(g); } return (u, p, on = 1) => B.forEach((g, i) => { const f = (u * .8 + i / n) % 1; g.position.set(p[0] + Math.sin(i * 2.4) * p[3], p[1] + Math.cos(i * 1.7) * p[3] * .6, p[2]); g.material.opacity = on * Math.sin(f * Math.PI) * .9; g.scale.setScalar(.15 + Math.sin(f * Math.PI) * .25); }); };
const DAY = {}; const NIGHT = { exposure: .95, bloom: .45 };
// fachadas do entreCasas
const FA = [-2.3, 0, -1], FB = [2.3, 0, -1];
const JA = enJanela(-1), JB = enJanela(1);
const CAM2 = [[0, 4.3, 7.2], [0, 3.9, -1.4]];
// no meu quarto: janela dela
const HER = { x: 1.0, z: -7.0, y: .4 };
const ME = { x: -1.0, z: -7.0, y: .4 };
const POVyo = (p0 = [.9, 1.9, -.6], p1 = [.95, 1.9, -1.8]) => [p0, [1.0, 1.9, -7.2], p1, [1.0, 1.9, -7.2]];
const POVella = (p0 = [-.9, 1.9, -.6], p1 = [-.95, 1.9, -1.8]) => [p0, [-1.0, 1.9, -7.2], p1, [-1.0, 1.9, -7.2]];
// persiana da minha janela (sala: vão x -1.9..1.9, y 1.0..4.2, parede z=-3)
const minhaPersiana = (c) => { const p = box(3.8, 3.2, .06, std('#E8E2D2', { roughness: .8 }), 0, 2.6, -2.8); p.castShadow = false; c.add(p); return (k) => { const h = Math.max(.001, 3.2 * k); p.scale.y = h / 3.2; p.position.y = 4.2 - h / 2; p.visible = k > .01; }; };

// ===================== CENAS =====================
// 0. Sábado: bailas en pijama delante del espejo, cepillo de micrófono. Concierto privado.
Q(0, (d, a) => { const tn = R0(a, 'nadie'), tc = R0(a, 'concierto'); return { amb: 'quarto', fov: 34, atores: [PIJ({ x: .2, z: -.6, eyes: [[0, 'shut'], [tn, 'happy'], [tc, 'shut']], pose: (k, u) => dance(k, u) })],
  extra: (c, s, [h]) => { const mir = new THREE.Group(); mir.add(box(1.3, 2.3, .08, std('#8E6242'), 0, 1.25, 0)); const g = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 2.1), new THREE.MeshStandardMaterial({ color: '#BFD8E8', roughness: .05, metalness: .6, emissive: '#5A7A9A', emissiveIntensity: .25 })); g.position.set(0, 1.25, .05); mir.add(g); mir.position.set(1.9, 0, -1.6); mir.rotation.y = -.5; c.add(mir);
    const br = cepillo(); c.add(br); const nt = notas(c); const l = lw(c, ['CONCIERTO PRIVADO'], 1.6, [.2, 2.5, -.6], { fg: '#C9361F' });
    return { update: (u, t, cam) => { const p = hand(h); br.position.set(p.x, p.y + .12, p.z + .05); nt(u, p, cam); pop(l, u, tc, 99, cam); } }; },
  c: [[-1.4, 1.5, 3.4], [.4, 1.2, -1], [-.4, 1.6, 2.6], [.4, 1.3, -1]], range: 2 }; });
// 1. Y entonces oyes un camión
Q(1, (d) => ({ amb: 'quarto', fov: 30, atores: [PIJ({ x: .2, z: -.6, eyes: [[0, 'wide']], pose: (k) => k.pose({ armL: [12, 8], armR: [120, 100] }) })],
  extra: (c) => { const g = gl(c, '¡BRRRUM!', 1.0, [-.9, 2.5, -1.2]); return { update: (u, t, cam) => { pop(g, u, .2, 99, cam); g.position.x = -.9 + Math.sin(u * 40) * .02; } }; },
  c: [[-.2, 1.6, 2.4], [.2, 1.5, -.6], [-.1, 1.6, 2.0], [.1, 1.5, -.6]], range: 1.4 }));
// 2. Te asomas: camión de mudanzas, cajas, sofá, lámpara de flamenco
Q(2, (d, a) => { const tk = R0(a, 'cajas'), ts = R0(a, 'sofa'), tl = R0(a, 'lampara'); return { amb: 'barrio', fov: 34,
  atores: [H({ outfit: 'laranja', glow: 0, x: 6, z: 1.6, eyes: [[0, 'flat']], move: (u) => [lerp(6.4, 4.6, smooth(tk, tk + 3, u)), 0, lerp(2.2, -.2, smooth(tk, tk + 3, u))], pose: (k, u) => { k.walk(u); k.pose({ armL: [150, 150], armR: [150, 150], bob: Math.abs(Math.sin(u * 6)) * .03 }); } }), H({ outfit: 'azul', glow: 0, x: 7, z: 1.8, eyes: [[0, 'flat']], move: (u) => [lerp(7.6, 5.4, smooth(ts, ts + 3, u)), 0, lerp(2.4, .2, smooth(ts, ts + 3, u))], pose: (k, u) => { k.walk(u); k.pose({ armL: [100, 60], armR: [100, 60] }); } })],
  extra: (c, s, [m1, m2]) => { const t = camion(); t.position.set(6.8, 0, 4.2); t.rotation.y = Math.PI / 2; c.add(t); const bx = [caja(), caja(.5), caja(.7)]; bx.forEach((b, i) => { b.position.set(5.6 + i * .8, 0, 2.6); c.add(b); }); const sf = sofa('#4A86C7'); c.add(sf); const fl = flamenco(); fl.position.set(3.4, 0, .6); c.add(fl); const top = caja(.5); c.add(top);
    const L = [lw(c, ['CAJAS'], .9, [5.6, 2.8, 2.2]), lw(c, ['UN SOFÁ'], .9, [5.6, 2.8, 2.2]), lw(c, ['LÁMPARA FLAMENCO'], 1.4, [3.4, 2.6, .6], { fg: '#E8667F' })];
    return { update: (u, t, cam) => { const p = m1.root.position; top.position.set(p.x, 2.0, p.z + .1); top.visible = u > tk; const q = m2.root.position; sf.position.set(q.x, 1.2, q.z + .2); sf.visible = u > ts; fl.visible = u > tl; pop(L[0], u, tk, ts - .2, cam); pop(L[1], u, ts, tl - .2, cam); pop(L[2], u, tl, 99, cam); } }; },
  cam: [[0, [-3.2, 4.4, 0], [5.0, 1.4, 1]], [d, [-2.6, 4.2, .4], [4.4, 1.4, .6]]], f: [[0, 8.5]], range: 4 }; });
// 3. Y sale ella
Q(3, (d) => ({ amb: 'barrio', fov: 30, atores: [ELLA({ x: 4.5, z: -2.6, eyes: [[0, 'look']], move: (u) => [4.5, 0, -2.6 + u * .6], pose: (k, u) => { k.walk(u); k.pose({ armL: [110, 120], armR: [110, 120] }); } })],
  extra: (c, s, [e]) => { const b = caja(.45); c.add(b); return { update: () => { const p = e.root.position; b.position.set(p.x, 1.2, p.z + .15); } }; },
  c: [[3.0, 2.0, 3.6], [4.5, 1.5, -2], [3.4, 1.9, 2.8], [4.5, 1.5, -1.6]], range: 2, look: { bloom: .45 } }));
// 4. Sara: de tu clase, junto a la ventana, dos años sin pasar de "hola"
Q(4, (d, a) => { const tv = R0(a, 'ventana'), th = R0(a, 'dos'); return { amb: 'aula', fov: 32, atores: [ELLA({ x: -1.6, z: -1.4, y: -.4, eyes: [[0, 'look']], pose: sitP }), YO({ x: 1.3, z: .4, y: -.4, eyes: [[0, 'heart'], [th, 'sad']], pose: sitP }), H({ outfit: 'azul', hair: 'bob', hairc: '#D9B65A', lash: true, x: .4, z: -1.4, y: -.4, eyes: [[0, 'look']], pose: sitP })],
  extra: (c) => { const w = lightPanel(1.6, 1.4, '#CFE8FF', 1.2); w.position.set(-3.0, 2.3, -3.4); c.add(w); for (const [x, z] of [[-1.6, -1.4], [.4, -1.4], [1.3, .4]]) { c.add(box(.9, .06, .55, std('#C9A06A'), x, .75, z - .45)); c.add(box(.5, .06, .5, std('#4A86C7'), x, .45, z)); } const l1 = lw(c, ['SARA'], .9, [-1.6, 2.3, -1.4], { fg: '#C9361F' }), l2 = lw(c, ['JUNTO A LA VENTANA'], 1.7, [-1.6, 2.3, -1.4]), l3 = lab(c, ['2 AÑOS: "HOLA"'], 1.5, [1.0, 2.3, .4]);
    return { update: (u, t, cam) => { pop(l1, u, .2, tv - .3, cam); pop(l2, u, tv, th - .3, cam); pop(l3, u, th + .4, 99, cam); } }; },
  c: [[-.2, 1.9, 3.6], [0, 1.0, -.6], [0, 1.7, 3.0], [.1, 1.0, -.6]], range: 3 }; });
// 5. Sara se acaba de mudar a la casa de al lado
Q(5, (d) => ({ amb: 'cuartoYo', fov: 30, atores: [PIJ({ x: -.3, z: -2.0, eyes: [[0, 'wide']], pose: (k) => k.pose({ armL: [110, 130], armR: [110, 130] }) }), ELLA({ ...HER, x: 1.1, eyes: [[0, 'look']] })],
  extra: (c) => { const g = gl(c, '¡¿AL LADO?!', .9, [.4, 2.6, -2.0]); return { update: (u, t, cam) => pop(g, u, .4, 99, cam) }; },
  c: [[-.8, 1.7, 1.6], [.2, 1.7, -3.4], [-.6, 1.7, 1.2], [.3, 1.7, -3.6]], range: 3 }));
// 6. Te escondes debajo de la ventana; el corazón a mil; vuelves a asomarte
Q(6, (d, a) => { const tc = R0(a, 'corazon'), tv = R0(a, 'vuelves'); return { amb: 'cuartoYo', fov: 32, atores: [PIJ({ x: -.4, z: -2.2, eyes: [[0, 'wide'], [tv, 'look']], pose: (k, u) => { k.pose({ armL: [60, 90], armR: [60, 90] }); hideLegs(k); k.root.position.y = lerp(-.1, -1.0, smooth(0, .6, u)) + lerp(0, .75, smooth(tv, d, u)); } }), ELLA({ ...HER, x: 1.1, eyes: [[0, 'look']] })],
  extra: (c, s, [h]) => { const ht = cut(wordTex('♥', '#E2483A', 170), .45, .36); ht.renderOrder = 5; c.add(ht); return { update: (u, t, cam) => { const p = h.root.position; ht.position.set(p.x + .55, p.y + 1.9, p.z + .2); ht.visible = u > tc && u < tv + .5; ht.scale.setScalar(1 + Math.abs(Math.sin(u * 14)) * .4); pointer(ht, cam); } }; },
  c: [[-1.6, 1.1, 1.4], [-.2, 1.0, -2.2], [-1.2, 1.2, 1.0], [-.2, 1.1, -2.2]], range: 2 }; });
// 7. Y descubres algo terrible
Q(7, (d) => ({ amb: 'cuartoYo', fov: 26, atores: [PIJ({ x: 0, z: -1.2, eyes: [[0, 'wide']] })], c: [[0, 1.6, 2.6], [0, 1.6, -1.2], [0, 1.62, 1.0], [0, 1.62, -1.2]], range: 1, lookFn: (u) => ({ exposure: 1 - u * .08, vig: .7 }) }));
// 8. Su ventana justo enfrente de la tuya: a tres metros. Su lámpara, sus cortinas, su póster
Qs(8, ['puedes'], [
  (d) => ({ amb: 'entreCasas', fov: 36, atores: [PIJ({ x: JA[0], y: JA[1], z: JA[2], eyes: [[0, 'wide']] }), ELLA({ x: JB[0], y: JB[1], z: JB[2], eyes: [[0, 'look']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [60, 90] }) })],
    extra: (c) => { const ar = box(3.2, .05, .05, std('#F2C14E', { emissive: '#F2C14E', emissiveIntensity: .6 }), 0, 4.0, .2); c.add(ar); const l = lab(c, ['3 METROS'], 1.4, [0, 4.6, .4]); return { update: (u, t, cam) => { ar.scale.x = Math.max(.01, smooth(1, 2.5, u)); pop(l, u, 2, 99, cam); } }; },
    fov: 40, cam: [[0, [0, 6.6, 11.0], [0, 5.5, -1.4]], [d, [0, 6.4, 9.4], [0, 5.4, -1.4]]], f: [[0, 12]], range: 6 }),
  (d, a) => { const tc = R0(a, 'cortinas'), tp = R0(a, 'poster'); return { amb: 'cuartoYo', fov: 30, atores: [ELLA({ ...HER, x: .6, eyes: [[0, 'look']] })],
    extra: (c, s) => { const cl = box(.3, 1.6, .05, std('#E8667F', { roughness: .9 }), 1.95, 1.9, -6.0); c.add(cl); const cr = box(.3, 1.6, .05, std('#E8667F', { roughness: .9 }), .05, 1.9, -6.0); c.add(cr); return { update: () => {} }; },
    cam: [[0, [.9, 1.9, -1.0], [1.0, 1.9, -7.4]], [tc, [1.0, 1.9, -3.2], [.4, 1.5, -8.4]], [tp, [1.1, 2.0, -3.6], [1.6, 2.2, -9.0]], [d, [1.1, 2.0, -3.9], [1.7, 2.3, -9.0]]], f: [[0, 6], [tc, 5.4]], range: 3 }; }]);
// 9. Y ella puede ver tu habitación
Q(9, (d) => ({ amb: 'cuartoElla', fov: 32, atores: [ELLA({ x: .9, z: -2.0, eyes: [[0, 'lookl']] }), PIJ({ ...ME, eyes: [[0, 'wide']] })],
  c: [[1.6, 1.8, 1.4], [-.8, 1.8, -6], [1.4, 1.8, .9], [-.9, 1.8, -6.5]], range: 6, blur: 6 }));
// 10. Miras hacia atrás: pijama de dinosaurios, calcetines, cama sin hacer, póster de un caballo con alas
Q(10, (d, a) => { const T = [R0(a, 'pijama'), R0(a, 'calcetines'), R0(a, 'cama'), R0(a, 'caballo')]; return { amb: 'quarto', fov: 34, atores: [PIJ({ x: .8, z: 0, eyes: [[0, 'down'], [T[1], 'wide']] })],
  extra: (c) => { const R = rng(2); for (let i = 0; i < 6; i++) { const s = box(.28, .05, .12, std(['#E8667F', '#4A86C7', '#F2C14E'][i % 3]), -.4 + R() * 2.4, .03, -.2 + R() * 1.4); s.rotation.y = R() * 3; c.add(s); } const bl = box(2.0, .1, 1.2, std('#4A86C7'), -1.6, .95, -.4); bl.rotation.z = .2; c.add(bl); const p = pegaso(); p.position.set(-3.0, 2.8, -2.8); c.add(p);
    const L = [lw(c, ['PIJAMA DE DINOSAURIOS'], 1.8, [.8, 2.5, 0], { fg: '#3E7A5C' }), lw(c, ['CALCETINES'], 1.2, [.8, .7, .6]), lw(c, ['CAMA SIN HACER'], 1.4, [-1.6, 1.9, -.6]), lab(c, ['PÓSTER (8 AÑOS)'], 1.4, [-3.0, 1.9, -2.6])];
    return { update: (u, t, cam) => L.forEach((m, i) => pop(m, u, T[i], i < 3 ? T[i + 1] - .2 : 99, cam)) }; },
  cam: [[0, [.6, 1.6, 3.2], [.8, 1.3, 0]], [T[1], [.4, 1.3, 2.8], [.6, .4, .4]], [T[2], [0, 1.8, 2.8], [-1.6, 1.0, -1]], [T[3], [-1.6, 2.4, 1.6], [-3.0, 2.8, -2.8]], [d, [-1.8, 2.5, 1.0], [-3.0, 2.8, -2.8]]], f: [[0, 3.2], [T[1], 2.5], [T[2], 3.5], [T[3], 3.8]], range: 2 }; });
// 11. Esa tarde: ordenas tu habitación entera, sin que nadie te lo pida
Q(11, (d, a) => { const te = R0(a, 'entera'); return { amb: 'quarto', fov: 34, atores: [YO({ x: 0, z: 0, eyes: [[0, 'flat'], [te + 1.5, 'happy']], move: (u) => [Math.sin(u * 3) * 1.8, 0, Math.cos(u * 2.1) * .5], pose: (k, u) => (u < te + 1.5 ? k.walk(u, 2.2) : k.cheer(u, 0, .6)) })],
  extra: (c, s, [h]) => { const sp = brillos(c, 14); const l = lw(c, ['¡ORDENADO!'], 1.4, [0, 2.6, 0], { fg: '#3E7A5C' }); return { update: (u, t, cam) => { sp(u, [-1.6, 1.4, -1, 1.4], smooth(te, te + 1, u)); pop(l, u, te + 1.5, 99, cam); } }; },
  c: [[0, 2.2, 4.4], [0, 1.0, -.6], [0, 2.0, 3.8], [0, 1.1, -.6]], range: 3, lookFn: (u) => ({ exposure: 1 + smooth(te, te + 1, u) * .1 }) }; });
// 12. Tu madre entra, mira y te toca la frente: ¿tienes fiebre?
Q(12, (d, a) => { const tm = R0(a, 'mano'); return { amb: 'quarto', fov: 32, atores: [YO({ x: -.2, z: 0, eyes: [[0, 'happy'], [tm, 'flat']] }), MAMA({ x: 1.6, z: .3, eyes: [[0, 'wide'], [tm, 'look']], move: (u) => [lerp(3.4, .75, smooth(0, 1.4, u)), 0, .3], pose: (k, u) => (u < 1.4 ? k.walk(u) : k.pose({ armL: [12, 8], armR: [lerp(10, 120, smooth(tm - .4, tm, u)), 60] })) })],
  extra: (c) => { const g = gl(c, '¿Tienes fiebre?', 1.0, [1.4, 2.6, .3]); return { update: (u, t, cam) => pop(g, u, tm + .4, 99, cam) }; },
  c: [[.6, 1.6, 3.4], [.6, 1.4, 0], [.6, 1.6, 2.8], [.6, 1.5, 0]], range: 2 }; });
// 13. Esa noche, el plan: misterioso, elegante, interesante. Un libro gordísimo junto a la ventana
Q(13, (d, a) => { const T = [R0(a, 'misterioso'), R0(a, 'elegante'), R0(a, 'interesante'), R0(a, 'libro')]; return { amb: 'cuartoYo', ambo: { night: true, lit: true }, fov: 32, atores: [YO({ x: -.6, z: -2.0, y: -.4, glasses: true, eyes: [[0, 'smug']], pose: (k) => { sitP(k); k.pose({ armL: [20, 120], armR: [20, 120] }); } })],
  extra: (c, s, [h]) => { c.add(box(.6, .5, .6, std('#8E6242'), -.6, .25, -2.0)); const b = libro(); c.add(b); const L = ['MISTERIOSO', 'ELEGANTE', 'INTERESANTE'].map((t, i) => lw(c, [t], 1.3, [-1.9 + i * 1.3, 2.9 - (i % 2) * .3, -1.6], { fg: '#7F6BC4' }));
    return { update: (u, t, cam) => { const p = hand(h); b.position.set(-.6, p.y + .1, -1.7); b.rotation.z = Math.PI; b.visible = u > T[3] - .3; L.forEach((m, i) => pop(m, u, T[i], 99, cam)); } }; },
  c: [[-1.6, 1.7, 1.6], [-.4, 1.3, -2.0], [-1.2, 1.6, 1.0], [-.5, 1.3, -2.0]], range: 2, look: NIGHT }; });
// 14. El libro está al revés
Q(14, (d) => ({ amb: 'cuartoYo', ambo: { night: true, lit: true }, fov: 26, atores: [YO({ x: -.6, z: -2.0, y: -.4, glasses: true, eyes: [[0, 'smug']], pose: (k) => { sitP(k); k.pose({ armL: [20, 120], armR: [20, 120] }); } })],
  extra: (c, s, [h]) => { const b = libro(); b.rotation.z = Math.PI; b.position.set(-.6, 1.0, -1.7); c.add(b); const l = lab(c, ['¡AL REVÉS!'], .6, [.2, 1.3, -1.2], { bg: '#C9361F', fg: '#FFF' }); return { update: (u, t, cam) => pop(l, u, .4, 99, cam) }; },
  c: [[-.4, 1.2, .4], [-.6, 1.0, -1.7], [-.4, 1.15, .1], [-.6, 1.0, -1.7]], range: 1, look: NIGHT }));
// 15. Sara abre su ventana, mira el libro: "Hola, vecino."
Q(15, (d, a) => { const th = R0(a, 'hola'); return { amb: 'entreCasas', ambo: { night: true }, fov: 34, atores: [YO({ x: JA[0], y: JA[1], z: JA[2], glasses: true, eyes: [[0, 'smug'], [th, 'wide']] }), ELLA({ x: JB[0], y: JB[1], z: JB[2], eyes: [[0, 'look'], [th, 'happy']], pose: (k, u) => (u > th ? wave(k, u) : k.pose()) })],
  extra: (c) => { const g = gl(c, 'Hola, vecino.', 1.1, [JB[0] - .3, JB[1] + 2.4, JB[2] + .6]); return { update: (u, t, cam) => pop(g, u, th, 99, cam) }; },
  cam: [[0, ...CAM2], [d, [0, 4.2, 6.0], [0, 3.9, -1.4]]], f: [[0, 9]], range: 4, look: NIGHT }; });
// 16. Tú dices: hola. Récord igualado.
Q(16, (d, a) => { const tr = R0(a, 'record'); return { amb: 'entreCasas', ambo: { night: true }, fov: 30, atores: [YO({ x: JA[0], y: JA[1], z: JA[2], glasses: true, eyes: [[0, 'wide']], pose: (k, u) => wave(k, u) })],
  extra: (c) => { const g = gl(c, 'hola.', .6, [JA[0] + .5, JA[1] + 2.3, JA[2] + .5]); const l = lab(c, ['RÉCORD IGUALADO'], 1.2, [JA[0] + 1.6, JA[1] + 2.0, JA[2] + 2.6]); return { update: (u, t, cam) => { pop(g, u, .1, tr, cam); pop(l, u, tr, 99, cam); } }; },
  c: [[JA[0] + 2.4, 4.2, 3.6], [JA[0], 4.0, JA[2]], [JA[0] + 2.0, 4.1, 3.0], [JA[0], 4.0, JA[2]]], range: 2, look: NIGHT }; });
// 17. Tu cara se pone roja, como un tomate con fiebre
Q(17, (d, a) => { const tt = R0(a, 'tomate'); return { amb: 'cuartoYo', ambo: { night: true, lit: true }, fov: 28, atores: [YO({ x: 0, z: -1.0, glasses: true, eyes: [[0, 'wide']] })],
  extra: (c, s, [h]) => { const rb = rubor(h); const tm = tomate(.9, 1.5, -1.0, 3); tm.visible = false; c.add(tm); const th = box(.04, .4, .04, std('#E8E2D2'), 1.05, 1.75, -.9); c.add(th); const l = lw(c, ['38,5 °C'], .6, [1.3, 2.1, -1.0], { fg: '#C9361F' });
    return { update: (u, t, cam) => { const k = smooth(0, 1.6, u); rb(k); h.tint(new THREE.Color('#FFF0DC').lerp(new THREE.Color('#FF7A6A'), k).getStyle()); tm.visible = th.visible = u > tt; tm.position.y = 1.5 + Math.sin(u * 4) * .03; pop(l, u, tt + .3, 99, cam); } }; },
  c: [[.3, 1.6, 1.6], [.3, 1.6, -1.0], [.3, 1.6, 1.2], [.3, 1.6, -1.0]], range: 1.4, look: NIGHT }; });
// 18. Explicación: vergüenza → adrenalina → vasos de la cara se abren. Darwin: la expresión más humana. Ningún animal
Qs(18, ['charles', 'ningun'], [
  (d, a) => { const tad = R0(a, 'adrenalina'), tv = R0(a, 'vasos'), ts = R0(a, 'sangre'); return { amb: 'lab', fov: 30, atores: [YO({ x: 0, z: 0, eyes: [[0, 'wide']] })],
    extra: (c, s, [h]) => { const vt = canvasTex(256, 256, (x) => { x.clearRect(0, 0, 256, 256); x.strokeStyle = '#FF4A5A'; x.lineCap = 'round'; const br = (px, py, a, l, w) => { if (l < 8) return; const ex = px + Math.cos(a) * l, ey = py + Math.sin(a) * l; x.lineWidth = w; x.beginPath(); x.moveTo(px, py); x.lineTo(ex, ey); x.stroke(); br(ex, ey, a - .5, l * .7, w * .7); br(ex, ey, a + .5, l * .7, w * .7); }; br(70, 200, -1.9, 45, 8); br(186, 200, -1.25, 45, 8); });
      const vm = cut(vt, .62, .62, { blend: true }); vm.position.set(0, -.04, .06); vm.renderOrder = 6; h.head.add(vm); const rb = rubor(h); const l1 = lab(c, ['ADRENALINA'], 1.3, [-1.2, 2.3, 0]), l2 = lw(c, ['VASOS SANGUÍNEOS: ¡ABIERTOS!'], 1.9, [1.1, 2.6, 0], { fg: '#C9361F', size: 56 }), l3 = lab(c, ['+ SANGRE = + ROJO'], 1.5, [0, .6, .4], { bg: '#C9361F', fg: '#FFF' });
      return { update: (u, t, cam) => { const k = smooth(tv, ts + 1, u); vm.material.opacity = k; rb(k); pop(l1, u, tad, 99, cam); pop(l2, u, tv, 99, cam); pop(l3, u, ts, 99, cam); } }; },
    c: [[0, 1.7, 3.0], [0, 1.6, 0], [0, 1.7, 2.4], [0, 1.6, 0]], range: 1.4 }; },
  (d, a) => { const tq = R0(a, 'expresion'); return { amb: 'biblio', fov: 32, atores: [DARWIN({ x: -.4, z: -1, eyes: [[0, 'look']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [60, 100] }) })],
    extra: (c, s, [h]) => { const b = libro('#6B3A22', 'EMOCIONES'); c.add(b); const g = gl(c, '"La expresión más humana"', 1.4, [.8, 2.6, -1], 52); return { update: (u, t, cam) => { const p = hand(h); b.position.set(p.x, p.y + .1, p.z + .05); pop(g, u, tq, 99, cam); } }; },
    c: [[.6, 1.6, 3.0], [0, 1.5, -1], [.4, 1.6, 2.4], [0, 1.5, -1]], range: 2 }; },
  (d) => ({ amb: 'parque', fov: 36, atores: [PERRO({ x: -2.4, z: 0, eyes: [[0, 'flat']] }), PEPINO({ x: -1.2, z: 0, s: .6, eyes: [[0, 'flat']] }), { tipo: 'loro', s: .5, x: 1.0, z: 0, eyes: [[0, 'flat']] }, { tipo: 'vaca', s: .9, x: 2.6, z: -.6, eyes: [[0, 'flat']] }, YO({ x: 0, z: .4, eyes: [[0, 'wide']] })],
    extra: (c, s, A) => { const rb = rubor(A[4]); const l = lw(c, ['NINGÚN ANIMAL SE SONROJA'], 2.2, [0, 2.6, -.4], { size: 56 }); return { update: (u, t, cam) => { rb(smooth(.6, 1.2, u)); pop(l, u, .3, 99, cam); } }; },
    c: [[0, 1.4, 5.4], [0, .8, 0], [0, 1.4, 4.6], [0, .9, 0]], range: 3 })]);
// 19. Eres muy humano. Muchísimo. Demasiado.
Q(19, (d, a) => { const T = [0, R0(a, 'muchisimo'), R0(a, 'demasiado')]; return { amb: 'lab', fov: 30, atores: [YO({ x: 0, z: 0, eyes: [[0, 'flat'], [T[2], 'wide']] })],
  extra: (c, s, [h]) => { const rb = rubor(h); const L = ['HUMANO: 100 %', 'HUMANO: 200 %', 'HUMANO: ∞'].map((t) => lab(c, [t], 1.5, [0, 2.6, 0])); return { update: (u, t, cam) => { const k = .6 + smooth(T[1], T[2] + .5, u) * .4; rb(k); h.tint(new THREE.Color('#FFF0DC').lerp(new THREE.Color('#FF6A5A'), k).getStyle()); L.forEach((m, i) => pop(m, u, T[i] + .3, i < 2 ? T[i + 1] - .1 : 99, cam)); } }; },
  c: [[0, 1.6, 3.4], [0, 1.5, 0], [0, 1.6, 2.2], [0, 1.6, 0]], range: 1.4 }; });
// 20. A la mañana siguiente descubres algo que lo cambia todo
Q(20, (d) => ({ amb: 'barrio', fov: 36, c: [[0, 3.4, 9], [0, 2.4, -3], [0, 3.0, 7.6], [0, 2.4, -3]], range: 10, blur: 4, lookFn: (u) => ({ exposure: lerp(.9, 1.05, u / d) }) }));
// 21. Ella sale a las 8:15. Tú también.
Q(21, (d, a) => { const tm = R0(a, 'exactamente'); return { amb: 'barrio', fov: 38, atores: [ELLA({ x: 4.5, z: -2.6, eyes: [[0, 'look']], move: (u) => [4.5, 0, -2.6 + smooth(.3, 2, u) * 1.6], pose: (k, u) => (u < 2 ? k.walk(u) : k.pose()) }), YO({ x: -4.5, z: -2.6, eyes: [[0, 'look'], [tm, 'wide']], move: (u) => [-4.5, 0, -2.6 + smooth(tm, tm + 1.6, u) * 1.6], pose: (k, u) => (u > tm && u < tm + 1.6 ? k.walk(u) : k.pose()) })],
  extra: (c) => { const a1 = lab(c, ['8:15'], 1.3, [4.5, 3.0, -1]), a2 = lab(c, ['8:15'], 1.3, [-4.5, 3.0, -1]); return { update: (u, t, cam) => { pop(a1, u, .4, 99, cam); pop(a2, u, tm, 99, cam); } }; },
  c: [[0, 2.4, 9], [0, 1.6, -1], [0, 2.3, 8], [0, 1.6, -1]], range: 6 }; });
// 22. El lunes: coincidís en la puerta, camináis hasta la esquina. Ella habla, tú asientes
Q(22, (d, a) => { const tb = R0(a, 'bueno'); return { amb: 'barrio', fov: 34, atores: [ELLA({ x: 0, z: .4, eyes: [[0, 'happy']], move: (u) => [1.2 - u * .6, 0, .6], pose: (k, u) => { k.walk(u); if (u > tb) k.pose({ armR: [50 + Math.sin(u * 8) * 15, 30], legL: [Math.sin(u * 6.4) * 15, 0], legR: [-Math.sin(u * 6.4) * 15, 0] }); } }), YO({ x: 0, z: .6, eyes: [[0, 'look']], move: (u) => [.2 - u * .6, 0, .7], pose: (k, u) => { k.walk(u + .4); if (u > tb + 1) k.pose({ head: Math.sin(u * 7) * 7, legL: [Math.sin(u * 6.4 + 2) * 15, 0], legR: [-Math.sin(u * 6.4 + 2) * 15, 0] }); } })],
  extra: (c, s, [e]) => { const l = lab(c, ['LUNES · 8:15'], 1.4, [0, 0, 0]); const g = gl(c, 'bla bla bla…', .8, [0, 0, 0]); return { update: (u, t, cam) => { const p = e.root.position; l.position.set(p.x - .5, 3.0, p.z); g.position.set(p.x + .4, 2.5, p.z); pop(l, u, .2, 4, cam); pop(g, u, tb + .3, 99, cam); } }; },
  cam: [[0, [.8, 1.8, 5.0], [.6, 1.4, .6]], [d, [.8 - d * .6, 1.8, 5.0], [.6 - d * .6, 1.4, .6]]], f: [[0, 4.4]], range: 3 }; });
// 23. El martes: 8:14. Por si acaso.
Q(23, (d) => ({ amb: 'barrio', fov: 30, atores: [YO({ x: -4.5, z: -1.4, eyes: [[0, 'smug']], pose: (k) => k.pose({ armL: [12, 8], armR: [80, 120] }) })], extra: (c) => { const l = lab(c, ['MARTES · 8:14'], 1.5, [-4.5, 2.7, -1.4]); return { update: (u, t, cam) => pop(l, u, .2, 99, cam) }; }, c: [[-3.2, 1.8, 2.4], [-4.5, 1.6, -1.4], [-3.4, 1.8, 1.8], [-4.5, 1.6, -1.4]], range: 2 }));
// 24. El miércoles: 8:10. Esperas detrás del seto diez minutos, para salir "por casualidad"
Q(24, (d, a) => { const td = R0(a, 'diez'), tc = R0(a, 'casualidad'); return { amb: 'barrio', fov: 32, atores: [YO({ x: -1.4, z: -2.2, eyes: [[0, 'look'], [tc, 'smug']], pose: (k, u) => { k.pose({ armL: [40, 60], armR: [40, 60] }); hideLegs(k); k.root.position.y = -.6; } })],
  extra: (c) => { const l = lab(c, ['MIÉRCOLES · 8:10'], 1.7, [-1.4, 2.4, -1.4]); const ck = lw(c, ['⏱ 10 MIN'], 1.0, [-.1, 1.9, -1.2], { fg: '#C9361F' }); const g = gl(c, '"por casualidad"', 1.1, [-2.6, 2.0, -1.4], 52); return { update: (u, t, cam) => { pop(l, u, .2, td - .2, cam); pop(ck, u, td, 99, cam); pop(g, u, tc, 99, cam); } }; },
  c: [[.4, 1.4, 3.0], [-1.4, 1.0, -1.6], [.0, 1.4, 2.4], [-1.4, 1.0, -1.6]], range: 2 }; });
// 25. El jueves te ve detrás del seto
Q(25, (d) => ({ amb: 'barrio', fov: 32, atores: [YO({ x: -1.4, z: -2.2, eyes: [[0, 'wide']], pose: (k) => { k.pose({ armL: [40, 60], armR: [40, 60] }); hideLegs(k); k.root.position.y = -.6; } }), ELLA({ x: .4, z: -.6, eyes: [[0, 'wide']] })],
  extra: (c) => { const l = lab(c, ['JUEVES'], .9, [-.4, 2.8, -1]); return { update: (u, t, cam) => pop(l, u, .2, 99, cam) }; }, c: [[1.4, 1.5, 3.2], [-.6, 1.2, -1.4], [1.0, 1.5, 2.6], [-.6, 1.2, -1.4]], range: 2.4 }));
// 26. Le dices que buscabas una lagartija
Q(26, (d) => ({ amb: 'barrio', fov: 30, atores: [YO({ x: -1.4, z: -1.6, eyes: [[0, 'smug']], pose: (k) => k.pose({ armL: [12, 8], armR: [60, 90] }) }), ELLA({ x: .2, z: -.6, eyes: [[0, 'look']] })],
  extra: (c) => { const g = gl(c, 'Busco… una lagartija.', 1.2, [-1.0, 2.35, -1.6], 54); return { update: (u, t, cam) => pop(g, u, .2, 99, cam) }; }, c: [[-.4, 1.6, 2.6], [-.7, 1.4, -1.2], [-.4, 1.6, 2.2], [-.7, 1.4, -1.2]], range: 2 }));
// 27. Ella te ayuda a buscarla
Q(27, (d) => ({ amb: 'barrio', fov: 32, atores: [ELLA({ x: .1, z: -.8, eyes: [[0, 'down']], pose: (k) => { k.pose({ armL: [30, 40], armR: [30, 40], lean: 10 }); hideLegs(k); k.root.position.y = -.5; } }), YO({ x: -1.2, z: -1.4, eyes: [[0, 'heart']] })], c: [[-.2, 1.5, 2.8], [-.5, 1.0, -1.1], [-.2, 1.4, 2.3], [-.5, 1.0, -1.1]], range: 2 }));
// 28. Cinco minutos buscando una lagartija que no existe: la conversación más larga
Q(28, (d, a) => { const tc = R0(a, 'conversacion'); return { amb: 'barrio', fov: 34, atores: [ELLA({ x: .2, z: -.8, eyes: [[0, 'down'], [tc, 'happy']], pose: (k) => { k.pose({ armL: [30, 40], armR: [30, 40], lean: 8 }); hideLegs(k); k.root.position.y = -.5; } }), YO({ x: -.8, z: -.8, eyes: [[0, 'down'], [tc, 'happy']], pose: (k) => { k.pose({ armL: [30, 40], armR: [30, 40], lean: -8 }); hideLegs(k); k.root.position.y = -.5; } })],
  extra: (c) => { const l1 = lw(c, ['LAGARTIJAS: 0'], 1.0, [-1.5, .9, -.2]), l2 = lab(c, ['NUEVO RÉCORD: 5 MIN'], 1.2, [-1.4, .9, -.2]); return { update: (u, t, cam) => { pop(l1, u, .3, tc - .2, cam); pop(l2, u, tc, 99, cam); } }; },
  c: [[-.3, 1.3, 3.0], [-.3, .8, -.8], [-.3, 1.3, 2.4], [-.3, .9, -.8]], range: 2 }; });
// 29. Y eso tiene explicación también
Q(29, (d) => ({ amb: 'lab', fov: 28, atores: [YO({ x: 0, z: 0, eyes: [[0, 'smug']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [140, 20] }) })], c: [[0, 1.6, 2.8], [0, 1.5, 0], [0, 1.6, 2.2], [0, 1.55, 0]], range: 1.4 }));
// 30. Años cincuenta: residencia de estudiantes. No importaba parecerse; importaba vivir cerca
Q(30, (d, a) => { const tq = R0(a, 'querian'), td = R0(a, 'descubrieron'), tv = R0(a, 'vivir'), tg = R0(a, 'gente', tv); const OUTS = ['azul', 'laranja', 'roxo', 'verde', 'rosa', 'hero', 'azul', 'laranja'];
  return { amb: 'residencia', fov: 42, atores: [...OUTS.map((o, i) => H({ outfit: o, glow: 0, hair: i % 3 === 1 ? 'bob' : i % 3 === 2 ? 'long' : null, hairc: '#3A2418', lash: i % 3 > 0, x: -7 + i * 2, z: -2.5, eyes: [[0, 'look'], [tv, 'happy']] })), PROF({ x: -1.2, z: 1.4, eyes: [[0, 'look']], pose: (k) => k.pose({ armL: [60, 90], armR: [12, 8] }) }), PROF({ x: 1.2, z: 1.4, hair: 'bun', hairc: '#5A3A2A', lash: true, eyes: [[0, 'look']], pose: (k) => k.pose({ armL: [12, 8], armR: [60, 90] }) })],
    extra: (c) => { const L = []; for (let i = 0; i < 7; i++) { const h = cut(wordTex('♥', '#E2483A', 150), .4, .32); h.position.set(-6 + i * 2, 2.5, -2.4); h.renderOrder = 5; c.add(h); L.push(h); } const lnk = []; for (let i = 0; i < 7; i++) { const b = box(1.4, .06, .06, std('#F2C14E', { emissive: '#F2C14E', emissiveIntensity: .8 }), -6 + i * 2, 1.4, -2.4); c.add(b); lnk.push(b); }
      const l0 = lab(c, ['AÑOS 50 · RESIDENCIA DEL MIT'], 2.6, [0, 3.4, -2.8], { size: 60 }), l1 = lw(c, ['¿QUIÉN SE HACE AMIGO DE QUIÉN?'], 2.6, [0, 3.4, -2.8], { size: 56 }), x1 = lw(c, ['✗ PARECERSE'], 1.5, [-2.4, 3.4, -2.8], { fg: '#C9361F' }), x2 = lw(c, ['✗ MISMOS GUSTOS'], 1.8, [2.4, 3.4, -2.8], { fg: '#C9361F' }), ok = lab(c, ['✓ VIVIR CERCA'], 2.0, [0, 3.4, -2.8], { bg: '#3E7A5C', fg: '#FFF' });
      return { update: (u, t, cam) => { pop(l0, u, .3, tq - .1, cam); pop(l1, u, tq, td - .1, cam); pop(x1, u, td + 1, tv - .1, cam); pop(x2, u, td + 2.4, tv - .1, cam); pop(ok, u, tv, 99, cam); lnk.forEach((b, i) => { b.scale.x = Math.max(.01, smooth(tg + i * .25, tg + i * .25 + .4, u)); }); L.forEach((h, i) => { pop(h, u, tg + 1 + i * .25, 99, cam); }); } }; },
    c: [[0, 2.6, 8.4], [0, 1.8, -2.4], [0, 2.4, 7.0], [0, 1.8, -2.4]], range: 6, blur: 6 }; });
// 31. 1968, Zajonc: cuantas más veces vemos algo, más nos gusta. Una cara, una canción, una palabra. Mera exposición
Q(31, (d, a) => { const tc = R0(a, 'cuantas'), T = [R0(a, 'cara'), R0(a, 'cancion'), R0(a, 'palabra')], tm = R0(a, 'llamo'); return { amb: 'lab', fov: 34, atores: [PROF({ x: -2.0, z: 0, outfit: 'terno', tint: '#FFF0DC', eyes: [[0, 'look']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [70, 30] }) })],
  extra: (c) => { const scr = box(3.0, 1.9, .1, std('#10141E'), .9, 1.9, -1.2); c.add(scr); const ic = [cut(canvasTex(256, 256, (x) => { x.clearRect(0, 0, 256, 256); x.fillStyle = '#2A2A34'; x.beginPath(); x.arc(128, 128, 100, 0, 7); x.fill(); x.fillStyle = '#FBF7EC'; x.beginPath(); x.ellipse(95, 115, 14, 22, 0, 0, 7); x.ellipse(161, 115, 14, 22, 0, 0, 7); x.fill(); }), 1.1, 1.1), cut(wordTex('♫', '#F2C14E', 180), 1.2, .95), cut(labelT(['"HOLA"'], { bg: '#00000000', fg: '#FFFFFF', size: 110, w: 512, h: 200 }), 1.8, .7)]; ic.forEach((m) => { m.position.set(.9, 1.9, -1.1); m.renderOrder = 5; c.add(m); });
    const bar = box(2.6, .14, .05, std('#E2483A', { emissive: '#E2483A', emissiveIntensity: .7 }), .9, .75, -1.1); c.add(bar); const hb = lw(c, ['♥ CUÁNTO TE GUSTA'], 1.4, [.9, .45, -1.0], { size: 56 }); const z = lab(c, ['ROBERT ZAJONC · 1968'], 1.9, [-2.0, 2.6, 0], { size: 60 }); const me = lab(c, ['EFECTO DE MERA EXPOSICIÓN'], 2.6, [.9, 3.25, -1.0], { size: 58 });
    return { update: (u, t, cam) => { const i = u < T[1] ? 0 : u < T[2] ? 1 : 2; ic.forEach((m, j) => { m.visible = u > tc && j === i; m.scale.setScalar(1 + Math.max(0, Math.sin(u * 9)) * .05); }); const k = smooth(tc, tm, u); bar.scale.x = Math.max(.02, k); bar.position.x = .9 - 1.3 * (1 - k); pop(hb, u, tc, 99, cam); pop(z, u, .2, tm, cam); pop(me, u, tm, 99, cam); } }; },
  c: [[-.4, 1.9, 4.6], [-.4, 1.7, -.6], [-.2, 1.9, 4.0], [-.2, 1.7, -.6]], range: 3 }; });
// 32. Vivir al lado: verle todos los días. En la ventana, la puerta, la esquina, buscando lagartijas
Q(32, (d, a) => { const T = [R0(a, 'ventana'), R0(a, 'puerta'), R0(a, 'esquina'), R0(a, 'buscando')]; return { amb: 'barrio', fov: 36, atores: [YO({ x: -1.0, z: .4, eyes: [[0, 'happy']], pose: (k, u) => k.walk(u * .5) }), ELLA({ x: 1.0, z: .4, eyes: [[0, 'happy']], pose: (k, u) => k.walk(u * .5 + .3) })],
  extra: (c) => { const L = [['LA VENTANA ✓'], ['LA PUERTA ✓'], ['LA ESQUINA ✓'], ['LAS LAGARTIJAS ✓']].map((t, i) => lw(c, t, 1.5, [-2.2 + (i % 2) * 4.4, 2.8 - Math.floor(i / 2) * .6, 0], { fg: '#3E7A5C' })); return { update: (u, t, cam) => L.forEach((m, i) => pop(m, u, T[i], 99, cam)) }; },
  c: [[0, 2.0, 5.6], [0, 1.6, 0], [0, 2.0, 4.8], [0, 1.6, 0]], range: 3 }; });
// 33. La ciencia está de tu parte
Q(33, (d) => ({ amb: 'lab', fov: 30, atores: [YO({ x: 0, z: 0, eyes: [[0, 'happy']], pose: (k, u) => k.cheer(u, 0, .8) })], extra: (c) => { const l = lab(c, ['CIENCIA ✓'], 1.2, [.9, 2.5, 0], { bg: '#3E7A5C', fg: '#FFF' }); return { update: (u, t, cam) => pop(l, u, .3, 99, cam) }; }, c: [[0, 1.6, 3.2], [0, 1.4, 0], [0, 1.6, 2.8], [0, 1.45, 0]], range: 1.6 }));
// 34. Pero vivir al lado también tiene un problema
Q(34, (d) => ({ amb: 'lab', fov: 28, atores: [YO({ x: 0, z: 0, eyes: [[0, 'happy'], [1.2, 'look'], [2, 'wide']], pose: (k, u) => (u < 1 ? k.cheer(u, 0, .8 * (1 - u)) : k.pose()) })], c: [[0, 1.6, 2.6], [0, 1.5, 0], [0, 1.6, 2.0], [0, 1.55, 0]], range: 1.2, lookFn: (u) => ({ exposure: 1 - smooth(1, 2.5, u) * .15 }) }));
// 35. Ella también te ve a ti
Q(35, (d) => ({ amb: 'cuartoElla', fov: 30, atores: [ELLA({ x: .2, z: -2.2, eyes: [[0, 'lookl']] }), YO({ ...ME, eyes: [[0, 'look']] })], c: [[1.2, 1.8, 1.2], [-.6, 1.8, -5], [1.0, 1.8, .8], [-.8, 1.8, -6]], range: 5, blur: 8 }));
// 36. Una noche olvidas la persiana: concierto privado, cepillo, pijama, canción de amor a gritos
Q(36, (d, a) => { const tg = R0(a, 'gritos'); return { amb: 'cuartoYo', ambo: { night: true, lit: true }, fov: 34, atores: [PIJ({ x: -.4, z: -1.0, eyes: [[0, 'shut'], [tg, 'heart']], pose: (k, u) => dance(k, u, 1.2) }), ELLA({ ...HER, eyes: [[0, 'wide']] })],
  extra: (c, s, [h]) => { const br = cepillo(); c.add(br); const nt = notas(c, 8); const l = lw(c, ['PERSIANA: SUBIDA'], 1.5, [-1.6, 3.6, -2.6], { fg: '#C9361F' }); const g = gl(c, '♥ ¡AMOOOR! ♥', 1.0, [-.4, 2.6, -1.0]); return { update: (u, t, cam) => { const p = hand(h); br.position.set(p.x, p.y + .12, p.z + .05); nt(u, p, cam); pop(l, u, .4, 4, cam); pop(g, u, tg, 99, cam); } }; },
  c: [[-1.4, 1.7, 2.6], [.2, 1.6, -3], [-1.0, 1.7, 2.0], [.3, 1.6, -3]], range: 5, blur: 6, look: NIGHT }; });
// 37. Cuando terminas, haces una reverencia
Q(37, (d) => ({ amb: 'cuartoYo', ambo: { night: true, lit: true }, fov: 32, atores: [PIJ({ x: -.4, z: -1.0, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [20, 10], armR: [90, 60], lean: 0, head: 0, bob: -smooth(.3, .9, u) * .15 }) })],
  extra: (c, s, [h]) => ({ update: (u) => { h.body.rotation.x = smooth(.3, .9, u) * .6; } }), c: [[.6, 1.5, 2.2], [-.4, 1.3, -1], [.4, 1.5, 1.8], [-.4, 1.3, -1]], range: 1.6, look: NIGHT }));
// 38. Y al otro lado, en su ventana, Sara aplaude
Q(38, (d) => ({ amb: 'cuartoYo', ambo: { night: true, lit: true }, fov: 30, atores: [ELLA({ ...HER, eyes: [[0, 'happy']], pose: (k, u) => clap(k, u) })], extra: (c) => { const g = gl(c, '¡CLAP CLAP!', .8, [1.8, 3.0, -7.0]); return { update: (u, t, cam) => pop(g, u, .4, 99, cam) }; }, c: POVyo([.9, 1.9, -.4], [1.0, 1.95, -2.4]), range: 3, look: NIGHT }));
// 39. Te tiras al suelo, te arrastras, bajas la persiana. Tumbado en la alfombra: ¿mudarte a otro país?
Q(39, (d, a) => { const ta = R0(a, 'arrastras'), tb = R0(a, 'bajas'), tq = R0(a, 'quedas'), tp = R0(a, 'pensando'); return { amb: 'cuartoYo', ambo: { night: true, lit: true }, fov: 34, atores: [PIJ({ x: -.4, z: -1.0, eyes: [[0, 'wide'], [tq, 'flat']], move: (u) => [lerp(.6, 1.9, smooth(ta, tb, u)), .25, lerp(-1.0, -2.2, smooth(ta, tb, u))], pose: (k, u) => { k.pose({ armL: [150, 30], armR: [150 + Math.sin(u * 8) * 10, 30] }); deitar(k, Math.PI / 2 * smooth(0, .5, u) * (u < tb ? 1 : 1)); } })],
  extra: (c, s, [h]) => { const per = minhaPersiana(c); const g = gl(c, '¿Me mudo a otro país?', 1.3, [1.0, 1.4, -1.0], 52); return { update: (u, t, cam) => { per(smooth(tb, tb + 1.2, u)); h.root.rotation.z = Math.PI / 2; if (u > tq) { h.root.position.set(1.9, .3, -1.0); } pop(g, u, tp, 99, cam); } }; },
  cam: [[0, [0, 1.5, 2.6], [.8, .5, -1.4]], [tq - .1, [.2, 1.5, 2.2], [1.4, .5, -2.0]], [tq, [1.0, 2.0, 1.8], [1.0, .5, -1.0]], [d, [1.0, 1.8, 1.4], [1.0, .5, -1.0]]], f: [[0, 3], [tq, 3.2]], range: 2, look: NIGHT }; });
// 40. Al día siguiente: lo sabe todo el instituto, todos te miran, alguien lo ha grabado
Q(40, (d, a) => { const T = [R0(a, 'instituto'), R0(a, 'todos'), R0(a, 'grabado')]; const C = [['azul', 'bob', '#D9B65A'], ['laranja'], ['roxo', 'long', '#2A1A12'], ['rosa', 'bun', '#5A3A2A'], ['verde']]; return { amb: 'aula', fov: 36, atores: [YO({ x: 0, z: .6, eyes: [[0, 'sad']] }), ...C.map(([o, hr, hc], i) => H({ outfit: o, hair: hr, hairc: hc, lash: !!hr, glow: 0, x: -2.4 + i * 1.2, z: -1.6, eyes: [[0, 'look'], [T[1], 'wide']], pose: (k) => (i === 3 ? k.pose({ armL: [12, 8], armR: [80, 120] }) : k.pose()) }))],
  extra: (c, s, A) => { const ph = box(.12, .22, .02, std('#1A1A24'), 0, 0, 0); c.add(ph); const rec = glowSprite('#FF3A3A', .2, .9); c.add(rec); const L = [lw(c, ['LO SABE TODO EL INSTITUTO'], 2.4, [0, 2.55, -1.0], { size: 56 }), lw(c, ['TODOS TE MIRAN'], 1.6, [0, 2.55, -1.0]), lab(c, ['● REC'], .9, [1.2, 2.4, -1.0], { bg: '#C9361F', fg: '#FFF' })];
    return { update: (u, t, cam) => { const p = hand(A[4]); ph.position.set(p.x, p.y + .12, p.z + .05); rec.position.set(p.x, p.y + .3, p.z + .1); rec.visible = ph.visible = u > T[2] - .3; L.forEach((m, i) => pop(m, u, T[i], i < 2 ? T[i + 1] - .2 : 99, cam)); } }; },
  c: [[0, 1.9, 4.6], [0, 1.4, -.6], [0, 1.8, 3.8], [0, 1.4, -.6]], range: 3 }; });
// 41. Pues no. (nadie mira)
Q(41, (d) => { const C = [['azul', 'bob', '#D9B65A'], ['laranja'], ['roxo', 'long', '#2A1A12'], ['rosa', 'bun', '#5A3A2A'], ['verde']]; return { amb: 'aula', fov: 36, atores: [YO({ x: 0, z: .6, eyes: [[0, 'look']] }), ...C.map(([o, hr, hc], i) => H({ outfit: o, hair: hr, hairc: hc, lash: !!hr, glow: 0, x: -2.4 + i * 1.2, z: -1.6, eyes: [[0, ['down', 'lookl', 'shut', 'down', 'lookl'][i]]] }))],
  extra: (c) => { const l = lab(c, ['PUES NO.'], 1.2, [0, 2.9, -1.6]); return { update: (u, t, cam) => pop(l, u, .05, 99, cam) }; }, c: [[0, 1.8, 3.8], [0, 1.4, -.6], [0, 1.8, 3.7], [0, 1.4, -.6]], range: 3 }; });
// 42. El efecto foco: como si te iluminara un foco de teatro
Q(42, (d, a) => { const tf = R0(a, 'foco'), tt = R0(a, 'teatro'); return { amb: 'concurso', fov: 34, atores: [YO({ x: 0, z: 1.2, eyes: [[0, 'wide']] })],
  extra: (c) => { const cone = new THREE.Mesh(new THREE.ConeGeometry(1.4, 7, 32, 1, true), new THREE.MeshBasicMaterial({ color: '#FFF2C0', transparent: true, opacity: .14, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending })); cone.position.set(0, 3.5, 1.2); c.add(cone); const sp = new THREE.SpotLight('#FFF6D8', 120, 14, .32, .4, 1); sp.position.set(0, 8, 1.2); sp.target.position.set(0, 0, 1.2); c.add(sp, sp.target); const l = lab(c, ['EFECTO FOCO'], 1.6, [0, 2.75, 1.2]); return { update: (u, t, cam) => { cone.material.opacity = .14 * smooth(tf - .4, tf, u); sp.intensity = 120 * smooth(tf - .4, tf, u); pop(l, u, tf, 99, cam); } }; },
  c: [[0, 2.4, 7], [0, 1.6, 1.2], [0, 2.0, 5.2], [0, 1.6, 1.2]], range: 3, lookFn: (u) => ({ exposure: lerp(1.0, .85, smooth(tf - .4, tf, u)) }) }; });
// 43. Cornell: camiseta vergonzosa en una sala llena. Creían: la mitad. En realidad: 1 de cada 4
Q(43, (d, a) => { const tc = R0(a, 'creian'), tr = R0(a, 'realidad'); const N = 12; const OU = ['azul', 'laranja', 'roxo', 'verde', 'hero', 'amarelo'];
  return { amb: 'aula', fov: 40, atores: [H({ outfit: 'rosa', x: 0, z: 1.6, glow: .15, eyes: [[0, 'flat'], [tc, 'wide']] }), ...Array.from({ length: N }, (_, i) => H({ outfit: OU[i % 6], hair: i % 4 === 1 ? 'bob' : i % 4 === 3 ? 'long' : null, hairc: ['#3A2418', '#D9B65A', '#2A1A12'][i % 3], lash: i % 4 % 2 === 1, glow: 0, x: -4.5 + (i % 6) * 1.8, z: -.4 - Math.floor(i / 6) * 1.6, eyes: [[0, 'down'], [tc, i % 2 ? 'look' : 'down'], [tr, i % 4 === 0 ? 'look' : 'down']] }))],
    extra: (c) => { const tee = lw(c, ['CAMISETA VERGONZOSA'], 1.4, [0, 2.55, 1.6], { fg: '#C9361F', size: 56 }); const b1 = bubble(c, ['"Me mira', 'la mitad"'], 1.4, { size: 64 }); b1.position.set(1.4, 2.7, 1.6); const H2 = []; for (let i = 0; i < N; i++) { const g = glowSprite('#F2C14E', 1.6, 0); g.position.set(-4.5 + (i % 6) * 1.8, 1.0, -.45 - Math.floor(i / 6) * 1.6); c.add(g); H2.push(g); } const l = lab(c, ['CORNELL · 2000'], 1.5, [-2.2, 2.6, 1.0]);
      return { update: (u, t, cam) => { pop(tee, u, .5, tc, cam); pop(b1, u, tc + .3, tr - .2, cam); pop(l, u, .4, tc, cam); H2.forEach((g, i) => (g.material.opacity = u > tr ? (i % 4 === 0 ? .55 : 0) : u > tc ? (i % 2 ? .55 : 0) : 0)); } }; },
    c: [[0, 2.8, 8.6], [0, 1.4, -.6], [0, 2.6, 7.4], [0, 1.4, -.6]], range: 8, blur: 4 }; });
// 44. Los demás están ocupados con sus propias vergüenzas
Q(44, (d) => { const T = ['¿Tengo algo en los dientes?', '¿Se me ve el grano?', '¿Dije una tontería?', '¿Huelo raro?']; return { amb: 'aula', fov: 38, atores: T.map((_, i) => H({ outfit: ['azul', 'laranja', 'roxo', 'verde'][i], hair: i % 2 ? 'long' : null, hairc: '#3A2418', lash: i % 2 === 1, glow: 0, x: -3.3 + i * 2.2, z: -.6, eyes: [[0, ['sad', 'wide', 'down', 'flat'][i]]] })),
  extra: (c) => { const B = T.map((t, i) => { const m = bubble(c, [t], 1.5, { size: 46 }); m.position.set(-3.3 + i * 2.2, 2.75 + (i % 2) * .5, -.6); return m; }); return { update: (u, t, cam) => B.forEach((m, i) => pop(m, u, .2 + i * .5, 99, cam)) }; },
  c: [[0, 2.2, 7.4], [0, 1.8, -.6], [0, 2.2, 6.6], [0, 1.8, -.6]], range: 4 }; });
// 45. Sara no se lo ha contado a nadie. En la esquina: "cantas fatal. Pero bailas bien."
Q(45, (d, a) => { const tf = R0(a, 'cantas'), tb = R0(a, 'pero'); return { amb: 'barrio', fov: 32, atores: [ELLA({ x: .6, z: .4, eyes: [[0, 'smug'], [tb, 'happy']], talk: [[tf, d]] }), YO({ x: -.6, z: .4, eyes: [[0, 'look'], [tf, 'flat'], [tb + .6, 'wide']] })],
  extra: (c) => { const g1 = gl(c, 'Cantas fatal.', .9, [1.1, 2.3, .4]), g2 = gl(c, 'Pero bailas bien.', 1.1, [1.1, 2.3, .4]); return { update: (u, t, cam) => { pop(g1, u, tf, tb - .1, cam); pop(g2, u, tb, 99, cam); } }; },
  c: [[0, 1.8, 4.4], [0, 1.6, .4], [0, 1.8, 3.8], [0, 1.6, .4]], range: 2 }; });
// 46. ¿Insulto o piropo? Lo apuntas en tu diario igual
Q(46, (d, a) => { const td = R0(a, 'apuntas'); return { amb: 'quarto', fov: 30, atores: [YO({ x: 0, z: -.4, y: -.4, eyes: [[0, 'look'], [td, 'happy']], pose: (k, u) => { sitP(k); k.pose({ armL: [40, 70], armR: [40 + Math.sin(u * 12) * 5, 70] }); } })],
  extra: (c) => { c.add(box(1.2, .06, .7, std('#C9A06A'), 0, .75, .1)); const dia = cartel(['Querido diario:', '"bailas bien" ♥'], .9, { size: 64 }); dia.rotation.x = -1.1; dia.position.set(0, .82, .25); c.add(dia); const l = lw(c, ['¿INSULTO? ¿PIROPO?'], 1.8, [0, 2.5, -.4], { fg: '#7F6BC4' }); return { update: (u, t, cam) => { pop(l, u, .2, td, cam); dia.visible = u > td - .2; } }; },
  c: [[0, 1.9, 3.0], [0, 1.2, -.2], [0, 1.8, 2.4], [0, 1.1, .1]], range: 1.6 }; });
// 47. Pasan las semanas: de ventana a ventana
Q(47, (d) => ({ amb: 'entreCasas', fov: 36, atores: [YO({ x: JA[0], y: JA[1], z: JA[2], eyes: [[0, 'happy']], pose: (k, u) => wave(k, u) }), ELLA({ x: JB[0], y: JB[1], z: JB[2], eyes: [[0, 'happy']], pose: (k, u) => wave(k, u + 1) })],
  extra: (c) => { const l = lw(c, ['SEMANA 1 … 2 … 3'], 1.8, [0, 6.0, 0]); return { update: (u, t, cam) => pop(l, u, .2, 99, cam) }; }, cam: [[0, [0, 5.4, 9.6], [0, 4.2, -1.4]], [d, ...CAM2]], f: [[0, 9]], range: 4 }));
// 48. Carteles en el cristal: deberes de mates / No / Yo tampoco / ¿Mañana vamos juntos? / Vale
Q(48, (d, a) => { const tg = R0(a, 'gestos'), T = [R0(a, 'has'), R0(a, 'no', R0(a, 'mates') + .1), R0(a, 'yo'), R0(a, 'manana'), R0(a, 'vale')]; return { amb: 'entreCasas', fov: 34, atores: [YO({ x: JA[0], y: JA[1], z: JA[2], eyes: [[0, 'look']], pose: (k, u) => (u < T[0] ? k.pose({ armL: [100 + Math.sin(u * 6) * 30, 60], armR: [40, 90] }) : k.pose()) }), ELLA({ x: JB[0], y: JB[1], z: JB[2], eyes: [[0, 'look'], [T[4], 'happy']], pose: (k, u) => (u < T[0] ? k.pose({ armR: [100 + Math.sin(u * 6 + 1) * 30, 60], armL: [40, 90] }) : k.pose()) })],
  extra: (c) => { const A = c.userData.me, B = c.userData.her; const C = [vidro(c, B, ['¿Has hecho los', 'deberes de mates?'], { size: 70, ww: 1.4 }), vidro(c, A, ['No.'], { ww: 1.4, size: 120 }), vidro(c, B, ['Yo tampoco.'], { ww: 1.4, size: 100 }), vidro(c, A, ['¿Mañana', 'vamos juntos?'], { size: 76, ww: 1.4 }), vidro(c, B, ['Vale. ♥'], { ww: 1.4, size: 110 })]; return { update: (u) => C.forEach((m, i) => vis(m, u, T[i], [T[2], T[3], 99, 99, 99][i])) }; },
  fov: 40, cam: [[0, [0, 4.1, 5.4], [0, 4.0, -1.4]], [d, [0, 4.1, 4.6], [0, 4.0, -1.4]]], f: [[0, 6.6]], range: 4 }; });
// 49. Por las noches: la linterna tres veces = buenas noches. Tú contestas. Tu perro ladra
Q(49, (d, a) => { const ts = R0(a, 'significa'), tc = R0(a, 'contestas'), tp = R0(a, 'perro'); return { amb: 'entreCasas', ambo: { night: true }, fov: 36, atores: [YO({ x: JA[0], y: JA[1], z: JA[2], eyes: [[0, 'happy']], pose: (k) => k.pose({ armL: [12, 8], armR: [80, 60] }) }), ELLA({ x: JB[0], y: JB[1], z: JB[2], eyes: [[0, 'happy']], pose: (k) => k.pose({ armL: [80, 60], armR: [12, 8] }) }), PERRO({ x: -1.2, z: 2.6, eyes: [[0, 'open'], [tp, 'wide']] })],
  extra: (c, s, [h, e, p]) => { const L1 = linterna(), L2 = linterna('#C8E8FF'); c.add(L1, L2); const bn = lab(c, ['BUENAS NOCHES'], 1.8, [0, 5.4, .4]); const g = gl(c, '¡GUAU!', .6, [-.6, 1.4, 2.6]); const blink = (u, t0) => u > t0 && u < t0 + 2.4 && Math.floor((u - t0) / .4) % 2 === 0;
    return { update: (u, t, cam) => { const a1 = hand(e), a2 = hand(h); L1.position.copy(a1); L2.position.copy(a2); L1.userData.on(blink(u, .4) ? 1 : 0); L2.userData.on(blink(u, tc) ? 1 : 0); pop(bn, u, ts, 99, cam); pop(g, u, tp, 99, cam); } }; },
  fov: 40, cam: [[0, [0, 4.2, 6.4], [0, 4.0, -1.0]], [d, [0, 3.8, 7.4], [0, 3.6, -1.0]]], f: [[0, 7.5]], range: 5, look: NIGHT }; });
// 50. Y entonces llega la pelea
Q(50, (d) => ({ amb: 'barrio', fov: 30, atores: [YO({ x: -.6, z: 0, eyes: [[0, 'angry']] }), ELLA({ x: .6, z: 0, eyes: [[0, 'angry']] })], extra: (c) => { const l = lab(c, ['¡PELEA!'], 1.2, [0, 2.7, 0], { bg: '#C9361F', fg: '#FFF' }); return { update: (u, t, cam) => pop(l, u, .2, 99, cam) }; }, c: [[0, 1.7, 3.2], [0, 1.5, 0], [0, 1.65, 2.6], [0, 1.5, 0]], range: 1.6, lookFn: (u) => ({ exposure: 1 + Math.max(0, Math.sin(u * 6)) * .1 }) }));
// 51. Tu balón cruza la valla, cae en las rosas de su madre. Tocas el timbre: "la tercera vez esta semana"
Qs(51, ['tocas'], [
  (d) => ({ amb: 'jardin', fov: 34, atores: [YO({ x: -2.6, z: 1.0, eyes: [[0, 'wide']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u < .6 ? 20 : 100, 20], legR: [u < .6 ? -20 : 30, 0] }) })],
    extra: (c) => { const b = balon(); c.add(b); return { update: (u) => { const k = smooth(.5, 2.6, u); b.position.set(lerp(-2.2, 1.6, k), .16 + Math.sin(k * Math.PI) * 3.2, lerp(1.2, -1.0, k)); b.rotation.z = -u * 6; } }; },
    c: [[-.4, 2.2, 6.4], [-.2, 1.2, -1], [0, 2.0, 5.4], [.6, 1.0, -1]], range: 4 }),
  (d, a) => { const t3 = R0(a, 'tercera'); return { amb: 'barrio', fov: 32, atores: [YO({ x: 3.5, z: -1.2, eyes: [[0, 'look']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u < 1 ? 60 : 12, 30] }) }), ELLA({ x: 4.8, z: -2.6, eyes: [[0, 'flat'], [t3, 'angry']], talk: [[t3 - .4, d]] })],
    extra: (c) => { const g = gl(c, '¡DING DONG!', .9, [3.1, 2.3, -1.2]); const l = lab(c, ['3.ª VEZ ESTA SEMANA'], 1.9, [4.8, 2.5, -2.4], { bg: '#C9361F', fg: '#FFF' }); return { update: (u, t, cam) => { pop(g, u, .1, 1.4, cam); pop(l, u, t3, 99, cam); } }; },
    c: [[2.0, 1.8, 3.6], [4.2, 1.6, -2.0], [2.3, 1.8, 3.0], [4.2, 1.6, -2.0]], range: 2.4 }; }]);
// 52. "No es para tanto" / "¡Pesado!" / "¡Mandona!"
Q(52, (d, a) => { const tp = R0(a, 'pesado'), tm = R0(a, 'mandona'); return { amb: 'barrio', fov: 30, atores: [YO({ x: 3.8, z: -1.6, eyes: [[0, 'flat'], [tp, 'angry']], talk: [[0, 1.4], [tm - .8, tm + .4]] }), ELLA({ x: 4.6, z: -2.6, eyes: [[0, 'angry']], talk: [[tp - .6, tp + .4]] })],
  extra: (c) => { const g = [gl(c, 'No es para tanto.', 1.0, [3.4, 2.5, -1.6]), gl(c, '¡PESADO!', .8, [5.0, 2.6, -2.6]), gl(c, '¡MANDONA!', .8, [3.4, 2.5, -1.6])]; return { update: (u, t, cam) => { pop(g[0], u, .1, tp - .6, cam); pop(g[1], u, tp - .3, 99, cam); pop(g[2], u, tm - .3, 99, cam); } }; },
  c: [[2.6, 1.7, 2.4], [4.2, 1.5, -2.0], [2.9, 1.7, 2.0], [4.2, 1.5, -2.0]], range: 2 }; });
// 53. Ella cierra la puerta
Q(53, (d) => ({ amb: 'barrio', fov: 30, atores: [YO({ x: 3.9, z: -1.2, eyes: [[0, 'sad']] })],
  extra: (c) => { const hole = box(1.1, 2.1, .02, std('#1A1410'), 4.5, 1.05, -2.92); c.add(hole); const dr = box(1.1, 2.1, .1, std('#3E6A5A'), 0, 0, 0); const piv = new THREE.Group(); piv.position.set(4.5 - .55, 1.05, -2.94); dr.position.set(.55, 0, 0); piv.add(dr); c.add(piv); const g = gl(c, '¡PAM!', .6, [4.8, 2.35, -2.6]); return { update: (u, t, cam) => { piv.rotation.y = lerp(-1.3, 0, smooth(.3, .6, u)); hole.visible = u < .6; pop(g, u, .6, 99, cam); } }; },
  c: [[2.8, 1.7, 2.2], [4.3, 1.4, -2.2], [3.0, 1.7, 1.8], [4.3, 1.4, -2.2]], range: 2 }));
// 54. Esa noche: su persiana bajada. Sin linterna. Sin carteles.
Q(54, (d, a) => { const tl = R0(a, 'linterna'), tc = R0(a, 'carteles'); return { amb: 'cuartoYo', ambo: { night: true, lit: false }, fov: 32, atores: [YO({ x: -.5, z: -2.0, eyes: [[0, 'sad']] })],
  extra: (c) => { c.userData.her.userData.persiana(1); const L = [lw(c, ['✗ LINTERNA'], 1.2, [1.0, 3.2, -5.6], { fg: '#C9361F' }), lw(c, ['✗ CARTELES'], 1.2, [1.0, 2.7, -5.6], { fg: '#C9361F' })]; return { update: (u, t, cam) => { pop(L[0], u, tl, 99, cam); pop(L[1], u, tc, 99, cam); } }; },
  c: [[-1.2, 1.8, 1.4], [.6, 1.9, -6.2], [-1.0, 1.8, .8], [.8, 1.9, -6.2]], range: 6, blur: 6, look: { ...NIGHT, exposure: .85 } }; });
// 55. Tres metros nunca habían parecido tan lejos
Q(55, (d) => ({ amb: 'entreCasas', ambo: { night: true }, fov: 34, atores: [YO({ x: JA[0], y: JA[1], z: JA[2], eyes: [[0, 'sad']] })],
  extra: (c) => { c.userData.her.userData.persiana(1); c.userData.her.userData.luz(false); const l = lab(c, ['3 METROS'], 1.2, [0, 4.6, .4]); return { update: (u, t, cam) => { pop(l, u, .3, 99, cam); l.scale.x = .9 + u * .25; } }; },
  cam: [[0, [0, 4.3, 6.0], [0, 3.9, -1.4]], [d, [0, 6.4, 22.0], [0, 3.9, -1.4]]], f: [[0, 7.5], [d, 23]], range: 6, look: { ...NIGHT, exposure: 1.0 } }));
// 56. Pasan dos días. A medianoche, luz por una rendija: la persiana sube un poquito; ella, con los ojos rojos
Q(56, (d, a) => { const tm = R0(a, 'medianoche'), ts = R0(a, 'sube'), te = R0(a, 'ella'); return { amb: 'cuartoYo', ambo: { night: true, lit: true }, fov: 30, atores: [ELLA({ ...HER, eyes: [[0, 'sad']] }), YO({ x: -.6, z: -2.0, y: -.4, eyes: [[0, 'sad'], [tm, 'look'], [ts, 'wide']], pose: sitP })],
  extra: (c) => { const f = c.userData.her; const l1 = lab(c, ['DOS DÍAS DESPUÉS'], 1.6, [-.6, 3.0, -2.0]), l2 = lw(c, ['00:00'], .8, [-.6, 3.0, -2.0], { fg: '#7F6BC4' }); const rd = glowSprite('#FFE0A0', 2.0, 0); rd.position.set(1.0, 1.25, -6.0); c.add(rd);
    return { update: (u, t, cam) => { f.userData.persiana(1 - smooth(ts, ts + 1.4, u) * .55); rd.material.opacity = smooth(tm, tm + .8, u) * .8; f.userData.luz(u > tm); pop(l1, u, .2, tm - .3, cam); pop(l2, u, tm, ts, cam); } }; },
  cam: [[0, [-1.4, 1.7, 1.4], [.4, 1.9, -6.2]], [ts, [.6, 1.9, -1.4], [1.0, 1.9, -7.0]], [d, [.8, 1.9, -2.6], [1.0, 1.9, -7.0]]], f: [[0, 7], [ts, 5.6]], range: 3, look: { ...NIGHT, exposure: .9 } }; });
// 57. Pega un cartel al cristal: "lo siento"
Q(57, (d, a) => { const tl = R0(a, 'siento'); return { amb: 'cuartoYo', ambo: { night: true, lit: true }, fov: 30, atores: [ELLA({ ...HER, eyes: [[0, 'sad']] })], extra: (c) => { const f = c.userData.her; f.userData.persiana(.45); const m = vidro(c, f, ['Lo siento.'], { dy: -.2 }); return { update: (u) => vis(m, u, Math.min(.8, tl - .3)) }; }, c: POVyo([.9, 1.9, -1.8], [1.0, 1.85, -3.2]), range: 3, look: NIGHT }; });
// 58. Tú escribes: "yo también. ¿Qué te pasa?"
Q(58, (d) => ({ amb: 'cuartoElla', ambo: { night: true, lit: true }, fov: 30, atores: [YO({ ...ME, eyes: [[0, 'sad']] })], extra: (c) => { const m = vidro(c, c.userData.me, ['Yo también.', '¿Qué te pasa?'], { size: 80, dy: -.2 }); return { update: (u) => vis(m, u, .4) }; }, c: POVella([-.9, 1.9, -1.8], [-1.0, 1.85, -3.2]), range: 3, look: NIGHT }));
// 59. Ella te lo cuenta a carteles: su ciudad, sus amigas, su habitación, aquí no conoce a nadie... el vecino de la ventana
Q(59, (d, a) => { const T = [R0(a, 'echa'), R0(a, 'amigas'), R0(a, 'antigua'), R0(a, 'aqui'), R0(a, 'unica'), R0(a, 'vecino')]; return { amb: 'cuartoYo', ambo: { night: true, lit: true }, fov: 30, atores: [ELLA({ ...HER, x: .7, eyes: [[0, 'sad'], [T[5], 'look']] })],
  extra: (c) => { const f = c.userData.her; f.userData.persiana(.3); const C = [['Echo de menos', 'mi ciudad.'], ['A mis amigas.'], ['Mi antigua', 'habitación.'], ['Aquí no conozco', 'a casi nadie.'], ['Solo hablo de', 'verdad con…'], ['…el vecino', 'de la ventana.']].map((t) => vidro(c, f, t, { size: 76, dx: .2, dy: -.25 })); return { update: (u) => C.forEach((m, i) => vis(m, u, T[i], i < 5 ? T[i + 1] : 99)) }; },
  c: POVyo([.9, 1.9, -2.6], [1.0, 1.85, -3.4]), range: 3, look: NIGHT }; });
// 60. Tú. Te quedas mirando ese último cartel mucho rato
Q(60, (d) => ({ amb: 'cuartoYo', ambo: { night: true, lit: true }, fov: 30, atores: [YO({ x: -.5, z: -2.0, eyes: [[0, 'wide'], [1.0, 'heart']] }), ELLA({ ...HER, x: .7, eyes: [[0, 'look']] })], extra: (c) => { const f = c.userData.her; f.userData.persiana(.3); const m = vidro(c, f, ['…el vecino', 'de la ventana.'], { size: 76, dx: .2, dy: -.25 }); const l = lab(c, ['TÚ.'], .7, [-.5, 2.45, -2.0]); return { update: (u, t, cam) => pop(l, u, .05, 99, cam) }; },
  c: [[-1.6, 1.8, 1.0], [-.2, 1.8, -4], [-1.4, 1.8, .6], [-.1, 1.8, -4]], range: 4, blur: 6, look: NIGHT }));
// 61. Pepino, el gato naranja y gordísimo, está en el tejado de tu caseta y no sabe bajar. Sara, preocupada
Q(61, (d, a) => { const tp = R0(a, 'pepino'), ts = R0(a, 'sara'); return { amb: 'jardin', fov: 34, atores: [PEPINO({ x: -2.4, y: 2.18, z: -3.0, s: .7, eyes: [[0, 'wide']] }), ELLA({ x: 1.6, z: .4, eyes: [[0, 'look'], [ts, 'sad']], pose: (k) => k.pose({ armL: [110, 130], armR: [110, 130] }) }), YO({ x: -.8, z: 1.4, eyes: [[0, 'look']] })],
  extra: (c) => { const l = lab(c, ['PEPINO'], .9, [-2.4, 3.6, -3.0]); const g = gl(c, '¡Miau!', .5, [-1.9, 3.0, -3.0]); return { update: (u, t, cam) => { pop(l, u, tp, 99, cam); pop(g, u, tp + 2, 99, cam); } }; },
  c: [[0, 2.4, 6.4], [-.6, 1.6, -1.4], [-.2, 2.4, 5.4], [-.8, 1.8, -1.6]], range: 4 }; });
// 62. Tú subes, con estilo, como un bombero de película
Q(62, (d) => ({ amb: 'jardin', fov: 34, atores: [YO({ x: -1.2, z: -2.2, eyes: [[0, 'smug']], move: (u) => [-1.2 - smooth(0, 3, u) * .6, smooth(0, 3, u) * 2.2, -2.2 - smooth(0, 3, u) * .6], pose: (k, u) => k.pose({ armL: [150 + Math.sin(u * 8) * 20, 20], armR: [150 - Math.sin(u * 8) * 20, 20], legL: [Math.sin(u * 8) * 20, 30], legR: [-Math.sin(u * 8) * 20, 30] }) }), PEPINO({ x: -2.4, y: 2.18, z: -3.0, s: .7, eyes: [[0, 'wide']] })],
  extra: (c) => { const l = lab(c, ['MODO BOMBERO'], 1.4, [-.2, 4.4, -2.4], { bg: '#C9361F', fg: '#FFF' }); return { update: (u, t, cam) => pop(l, u, .6, 99, cam) }; },
  c: [[1.4, 2.4, 4.2], [-1.6, 2.6, -2.6], [1.0, 2.8, 3.6], [-1.8, 3.0, -2.8]], range: 3 }));
// 63. Coges a Pepino. Te araña. Pierdes el equilibrio. Caes de culo encima de las rosas
Q(63, (d, a) => { const ta = R0(a, 'arana'), tp = R0(a, 'pierdes'), tc = R0(a, 'caes'); return { amb: 'jardin', fov: 36, atores: [YO({ x: -1.8, y: 2.18, z: -2.8, eyes: [[0, 'happy'], [ta, 'wide'], [tc + 1.2, 'shut']], move: (u) => { const k = smooth(tc, tc + 1.0, u); return [lerp(-1.8, 1.6, k), u < tc ? 2.18 : lerp(2.18, .0, k) + Math.sin(k * Math.PI) * 1.4, lerp(-2.8, -1.0, k)]; }, pose: (k, u) => { if (u < tp) k.pose({ armL: [60, 80], armR: [60, 80] }); else if (u < tc) k.pose({ armL: [150 + Math.sin(u * 14) * 20, 10], armR: [150 - Math.sin(u * 14) * 20, 10], lean: Math.sin(u * 9) * 18 }); else { k.pose({ armL: [130, 10], armR: [130, 10], squash: u > tc + 1 ? -.15 * (1 - smooth(tc + 1, tc + 1.4, u)) : 0 }); if (u > tc + 1) { hideLegs(k); k.root.position.y = -.35; } } } }), PEPINO({ x: -1.6, y: 2.18, z: -2.6, s: .5, eyes: [[0, 'angry']] })],
  extra: (c, s, [h, p]) => { const sc = gl(c, '¡ZAS!', .6, [-1.0, 4.2, -2.6]); const ou = gl(c, '¡AY!', .5, [2.2, 1.8, -1.0]); return { update: (u, t, cam) => { const q = h.root.position; p.root.position.set(q.x + .3, q.y + 1.1, q.z + .2); if (u > tp) p.root.position.set(-1.8 + Math.sin(u * 3) * .2, u > tc ? .0 : 2.18, -2.4); pop(sc, u, ta, tp, cam); pop(ou, u, tc + 1.0, 99, cam); } }; },
  cam: [[0, [.4, 3.2, 3.4], [-1.6, 2.8, -2.6]], [tc, [.6, 2.6, 4.4], [0, 2.0, -2.0]], [d, [1.4, 1.6, 3.0], [1.6, .8, -1.0]]], f: [[0, 4.8], [tc, 4.6], [tc + 1.2, 4]], range: 3 }; });
// 64. Otra vez las rosas
Q(64, (d) => ({ amb: 'jardin', fov: 30, atores: [YO({ x: 1.6, y: -.35, z: -1.0, eyes: [[0, 'shut']], pose: (k) => { k.pose({ armL: [120, 20], armR: [120, 20] }); hideLegs(k); } })], extra: (c) => { const l = lw(c, ['OTRA VEZ LAS ROSAS'], 1.8, [1.6, 2.15, -1.0], { fg: '#C9361F' }); return { update: (u, t, cam) => pop(l, u, .2, 99, cam) }; }, c: [[1.6, 1.4, 2.6], [1.6, .8, -1.0], [1.6, 1.3, 2.0], [1.6, .8, -1.0]], range: 1.6 }));
// 65. Pero Pepino está a salvo
Q(65, (d) => ({ amb: 'jardin', fov: 30, atores: [PEPINO({ x: -.8, z: .4, s: .7, eyes: [[0, 'happy']] })], extra: (c) => { const l = lab(c, ['PEPINO: A SALVO ✓'], 1.7, [-.8, 1.4, .4], { bg: '#3E7A5C', fg: '#FFF' }); return { update: (u, t, cam) => pop(l, u, .2, 99, cam) }; }, c: [[-.8, .8, 2.6], [-.8, .5, .4], [-.8, .8, 2.2], [-.8, .5, .4]], range: 1.4 }));
// 66. Sara se ríe contigo, te ayuda a levantarte, te quita una espina del pelo
Q(66, (d, a) => { const tl = R0(a, 'levantarte'), te = R0(a, 'espina'); return { amb: 'jardin', fov: 32, atores: [YO({ x: 1.6, z: -1.0, eyes: [[0, 'happy']], pose: (k, u) => { k.pose({ armL: [12, 8], armR: [lerp(120, 40, smooth(tl, tl + 1, u)), 20] }); if (u < tl + .6) { hideLegs(k); k.root.position.y = lerp(-.35, -.35, 0); } else { k.root.position.y = 0; for (const l of Object.values(k.legs)) { l.th.visible = true; l.shin.visible = true; } } } }), ELLA({ x: 2.6, z: -.6, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [u > te ? 150 : 12, 40], armR: [70, 20], bob: u < tl ? Math.abs(Math.sin(u * 10)) * .03 : 0 }) })],
  extra: (c) => { const g = gl(c, '¡JAJAJA!', .7, [3.0, 2.6, -.6]); return { update: (u, t, cam) => pop(g, u, .2, tl, cam) }; },
  c: [[2.0, 1.6, 2.8], [2.1, 1.2, -.8], [2.0, 1.6, 2.2], [2.1, 1.3, -.8]], range: 2 }; });
// 67. Efecto del tropiezo (Aronson): concursante listo + café = cae mejor. Ojo: solo si antes vales. Si no, solo torpe
Qs(67, ['anos', 'y', 'ojo', ['si', 2]], [
  (d) => ({ amb: 'lab', fov: 30, atores: [YO({ x: 0, z: 0, eyes: [[0, 'smug']] })], extra: (c) => { const l = lab(c, ['EFECTO DEL TROPIEZO'], 2.0, [0, 2.6, 0]); return { update: (u, t, cam) => pop(l, u, .2, 99, cam) }; }, c: [[0, 1.8, 3.6], [0, 1.6, 0], [0, 1.8, 3.0], [0, 1.6, 0]], range: 1.6 }),
  (d, a) => { const tl = R0(a, 'listo'), tc = R0(a, 'cafe'); return { amb: 'concurso', fov: 34, atores: [H({ outfit: 'terno', glasses: true, glow: 0, x: 0, z: -1.1, eyes: [[0, 'smug'], [tc, 'wide']], pose: (k, u) => (u > tc ? k.pose({ armL: [30, 20], armR: [130, 20] }) : k.pose({ armL: [12, 8], armR: [70, 90] })) })],
    extra: (c, s, [h]) => { const cup = new THREE.Mesh(new THREE.CylinderGeometry(.08, .065, .18, 16), std('#FBF7EC')); c.add(cup); const sp = []; for (let i = 0; i < 16; i++) { const g = glowSprite('#6B3A1A', .18, 0); g.material.blending = THREE.NormalBlending; c.add(g); sp.push(g); } const l1 = lab(c, ['ELLIOT ARONSON · 1966'], 2.0, [-2.0, 2.4, -.6], { size: 60 }), l2 = lw(c, ['★ MUY LISTO ★'], 1.5, [1.8, 2.4, -.6], { fg: '#3E7A5C' }), g2 = gl(c, '¡SPLASH!', .8, [1.0, 2.8, -1.1]);
      return { update: (u, t, cam) => { const p = hand(h); cup.position.set(p.x, p.y + .08, p.z + .05); cup.rotation.z = u > tc ? -2 : 0; sp.forEach((g, i) => { const f = clamp((u - tc) * 1.5 - i * .05, 0, 1); g.position.set(p.x - .1 + Math.sin(i) * .25, p.y - f * 1.2, p.z + .1); g.material.opacity = f > 0 && f < 1 ? .9 : 0; }); pop(l1, u, .2, 99, cam); pop(l2, u, tl, tc, cam); pop(g2, u, tc + .2, 99, cam); } }; },
    c: [[0, 2.0, 5.0], [0, 1.6, -1.0], [0, 1.9, 4.2], [0, 1.6, -1.0]], range: 3 }; },
  (d) => ({ amb: 'aula', fov: 36, atores: ['azul', 'laranja', 'roxo', 'verde'].map((o, i) => H({ outfit: o, glow: 0, hair: i % 2 ? 'long' : null, hairc: '#3A2418', lash: i % 2 === 1, x: -2.4 + i * 1.6, z: -.6, y: -.4, eyes: [[0, 'look'], [1.2, 'heart']], pose: sitP })), extra: (c) => { const l = lab(c, ['LES CAYÓ MEJOR ♥'], 1.9, [0, 2.15, -.6]); return { update: (u, t, cam) => pop(l, u, 1.0, 99, cam) }; }, c: [[0, 1.8, 4.6], [0, 1.0, -.6], [0, 1.7, 3.8], [0, 1.0, -.6]], range: 3 }),
  (d) => ({ amb: 'lab', fov: 30, atores: [YO({ x: -.6, z: 0, eyes: [[0, 'look']], pose: (k) => k.pose({ armL: [12, 8], armR: [140, 10] }) })], extra: (c) => { const l = lab(c, ['OJO: SOLO SI ANTES', 'DEMUESTRAS QUE VALES'], 1.8, [.75, 2.05, 0], { h: 240, size: 64 }); return { update: (u, t, cam) => pop(l, u, .3, 99, cam) }; }, c: [[0, 1.8, 3.8], [.2, 1.6, 0], [0, 1.8, 3.2], [.2, 1.6, 0]], range: 1.8 }),
  (d) => ({ amb: 'concurso', fov: 34, atores: [H({ outfit: 'laranja', glow: 0, x: 0, z: -1.1, eyes: [[0, 'flat'], [1.0, 'wide']], pose: (k, u) => k.pose({ armL: [30, 20], armR: [u > 1 ? 130 : 70, 20] }) })], extra: (c, s, [h]) => { const cup = new THREE.Mesh(new THREE.CylinderGeometry(.08, .065, .18, 16), std('#FBF7EC')); c.add(cup); const l = lw(c, ['SOLO TORPE'], 1.3, [1.6, 2.4, -.6], { fg: '#C9361F' }); return { update: (u, t, cam) => { const p = hand(h); cup.position.set(p.x, p.y + .08, p.z + .05); cup.rotation.z = u > 1 ? -2 : 0; pop(l, u, 1.4, 99, cam); } }; }, c: [[0, 2.0, 4.6], [0, 1.6, -1.0], [0, 1.9, 4.0], [0, 1.6, -1.0]], range: 3 })]);
// 68. Pero tú rescataste a Pepino: puedes aplastar unas rosas
Q(68, (d) => ({ amb: 'jardin', fov: 30, atores: [YO({ x: 0, z: 0, eyes: [[0, 'smug']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [60, 100] }) }), PEPINO({ x: .55, y: 1.1, z: .1, s: .4, eyes: [[0, 'happy']] })], extra: (c) => { const l = lab(c, ['PEPINO SALVADO > ROSAS'], 2.1, [0, 2.35, 0], { size: 60 }); return { update: (u, t, cam) => pop(l, u, .4, 99, cam) }; }, c: [[0, 1.7, 3.4], [0, 1.4, 0], [0, 1.7, 2.8], [0, 1.45, 0]], range: 1.8 }));
// 69. La madre de Sara no opina lo mismo, pero te da una tirita y un trozo de bizcocho
Q(69, (d, a) => { const tt = R0(a, 'tirita'); return { amb: 'jardin', fov: 32, atores: [MAMAS({ x: .8, z: -.2, eyes: [[0, 'flat'], [tt, 'look']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > tt ? 70 : 12, 20] }) }), YO({ x: -.6, z: 0, eyes: [[0, 'sad'], [tt + .6, 'happy']] })],
  extra: (c, s, [m]) => { const ti = box(.22, .08, .02, std('#E8C8A0'), 0, 0, 0); c.add(ti); const bz = box(.3, .16, .2, std('#E9B44C'), 0, 0, 0); c.add(bz); const l = lw(c, ['+ TIRITA + BIZCOCHO'], 1.6, [.1, 2.35, 0], { fg: '#3E7A5C' }); return { update: (u, t, cam) => { const p = hand(m); bz.position.set(p.x, p.y + .1, p.z + .1); ti.position.set(p.x, p.y + .24, p.z + .1); bz.visible = ti.visible = u > tt; pop(l, u, tt + .3, 99, cam); } }; },
  c: [[0, 1.7, 3.6], [.1, 1.4, 0], [0, 1.7, 3.0], [.1, 1.4, 0]], range: 2 }; });
// 70. A partir de ahí, todo cambia
Q(70, (d) => ({ amb: 'entreCasas', fov: 36, atores: [YO({ x: JA[0], y: JA[1], z: JA[2], eyes: [[0, 'happy']] }), ELLA({ x: JB[0], y: JB[1], z: JB[2], eyes: [[0, 'happy']] })], extra: (c) => { const b = brillos(c, 16); return { update: (u) => b(u, [0, 4.4, 0, 3]) }; }, cam: [[0, [0, 2.4, 9.0], [0, 4.8, -1.4]], [d, ...CAM2]], f: [[0, 9]], range: 5, lookFn: (u) => ({ exposure: lerp(.9, 1.08, smooth(0, d, u)), bloom: .5 }) }));
// 71. Deberes juntos, cada uno en su ventana (mates / historia). Luego el barrio: chuches, columpio, banco del atardecer
Qs(71, ['barrio'], [
  (d, a) => { const tm = R0(a, 'mates'), th = R0(a, 'historia'); return { amb: 'entreCasas', fov: 34, atores: [YO({ x: JA[0], y: JA[1], z: JA[2], eyes: [[0, 'look'], [th, 'happy']], pose: (k, u) => (u > th ? k.pose({ armL: [12, 8], armR: [60 + Math.sin(u * 8) * 25, 40] }) : k.pose()) }), ELLA({ x: JB[0], y: JB[1], z: JB[2], eyes: [[0, 'happy']], pose: (k, u) => (u > tm && u < th ? k.pose({ armL: [60 + Math.sin(u * 7) * 20, 40], armR: [12, 8] }) : k.pose()) })],
    extra: (c) => { const A = c.userData.me, B = c.userData.her; const m1 = vidro(c, B, ['x + 2 = 5', '→ x = 3'], { size: 80, ww: 1.4 }), m2 = vidro(c, A, ['1492: ¿¿los', 'dinosaurios??'], { size: 70, ww: 1.4 }); return { update: (u) => { vis(m1, u, tm - .3); vis(m2, u, th - .3); } }; },
    fov: 40, cam: [[0, [0, 4.1, 5.6], [0, 4.0, -1.4]], [d, [0, 4.1, 4.8], [0, 4.0, -1.4]]], f: [[0, 6.8]], range: 4 }; },
  (d, a) => { const T = [R0(a, 'chuches'), R0(a, 'columpio'), R0(a, 'banco')]; return { amb: 'parque', ambo: { dusk: true }, fov: 36, atores: [YO({ x: -.5, z: 0, eyes: [[0, 'happy']], move: (u) => [-.5, 0, 2 - u * .35], pose: (k, u) => k.walk(u) }), ELLA({ x: .5, z: 0, eyes: [[0, 'happy']], move: (u) => [.5, 0, 2 - u * .35], pose: (k, u) => k.walk(u + .5) })],
    extra: (c) => { const L = [['TIENDA DE CHUCHES'], ['EL COLUMPIO QUE CHIRRÍA'], ['EL BANCO DEL ATARDECER']].map((t, i) => lw(c, t, 2.0, [0, 0, 0], { size: 56 })); return { update: (u, t, cam) => L.forEach((m, i) => { m.position.set((i - 1) * 1.6, 2.6 - (i % 2) * .3, 1 - u * .35); pop(m, u, T[i], i < 2 ? T[i + 1] - .1 : 99, cam); }) }; },
    cam: [[0, [0, 2.0, 6.4], [0, 1.6, 1.6]], [d, [0, 2.0, 6.4 - d * .35], [0, 1.6, 1.6 - d * .35]]], f: [[0, 4.8]], range: 3 }; }]);
// 72. Ella te enseña su banda favorita. No está mal.
Q(72, (d, a) => { const tn = R0(a, 'resulta'); return { amb: 'cuartoElla', fov: 32, atores: [ELLA({ x: .5, z: -1.4, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ head: Math.sin(u * 6) * 6, armL: [12, 8], armR: [12, 8] }) }), YO({ x: -.6, z: -1.4, eyes: [[0, 'flat'], [tn, 'happy']], pose: (k, u) => (u > tn ? nod(k, u) : k.pose()) })],
  extra: (c, s, [e, h]) => { const nt = notas(c, 6); const g = gl(c, 'No está mal.', .8, [-.9, 2.35, -1.4]); return { update: (u, t, cam) => { nt(u, e.root.position.clone().add(new THREE.Vector3(0, 1.6, 0)), cam); pop(g, u, tn + .3, 99, cam); } }; },
  c: [[0, 1.7, 3.0], [0, 1.5, -1.4], [0, 1.7, 2.4], [0, 1.5, -1.4]], range: 2 }; });
// 73. Pasan los meses
Q(73, (d) => ({ amb: 'barrio', fov: 36, extra: (c) => { const M = ['OCTUBRE', 'DICIEMBRE', 'MARZO', 'JUNIO']; const L = M.map((t) => lab(c, [t], 2.2, [0, 2.7, -1])); return { update: (u, t, cam) => L.forEach((m, i) => pop(m, u, i * d / 4, (i + 1) * d / 4 - .1, cam)) }; }, c: [[0, 3.0, 8], [0, 2.2, -3], [0, 2.8, 7], [0, 2.2, -3]], range: 10, blur: 4, lookFn: (u) => ({ sat: .7 + .3 * Math.sin(u * 2) }) }));
// 74. Último día antes del verano: volvéis juntos; en la puerta, ella se para
Q(74, (d, a) => { const tp = R0(a, 'puerta'); return { amb: 'barrio', ambo: { dusk: true }, fov: 34, atores: [YO({ x: 0, z: .6, eyes: [[0, 'happy'], [tp, 'look']], move: (u) => [lerp(-3, 2.4, smooth(0, tp, u)), 0, .6], pose: (k, u) => (u < tp ? k.walk(u) : k.pose()) }), ELLA({ x: 0, z: .4, eyes: [[0, 'happy'], [tp, 'look']], move: (u) => [lerp(-2.2, 3.4, smooth(0, tp, u)), 0, .4], pose: (k, u) => (u < tp ? k.walk(u + .5) : k.pose()) })],
  extra: (c) => { const l = lab(c, ['ÚLTIMO DÍA DE CLASE'], 1.9, [0, 2.6, 0]); return { update: (u, t, cam) => pop(l, u, .2, tp, cam) }; }, cam: [[0, [-1.6, 2.0, 6.0], [-1.0, 1.5, .4]], [tp, [2.4, 1.9, 4.6], [2.9, 1.5, .4]], [d, [2.8, 1.8, 3.6], [2.9, 1.5, .4]]], f: [[0, 5.6], [tp, 4.2]], range: 3 }; });
// 75. "¿Sabes que mis padres podían elegir entre dos casas? Una en el centro, con piscina. Y esta."
Q(75, (d, a) => { const tc = R0(a, 'centro'), te = R0(a, 'esta'); return { amb: 'barrio', ambo: { dusk: true }, fov: 32, atores: [ELLA({ x: 3.4, z: .4, eyes: [[0, 'look']], talk: [[0, d]] }), YO({ x: 2.4, z: .6, eyes: [[0, 'look']] })],
  extra: (c) => { const pool = cartel(['CENTRO', '+ PISCINA'], 1.1, { size: 80, col: '#4A86C7' }); pool.position.set(1.9, 2.3, .2); c.add(pool); const here = cartel(['ESTA'], 1.1, { size: 90, col: '#C9361F' }); here.position.set(3.9, 2.3, .2); c.add(here); const g = gl(c, '¿Sabes que…?', .9, [3.8, 2.3, .4]); return { update: (u, t, cam) => { pop(g, u, .1, tc - .4, cam); pop(pool, u, tc, 99, cam); pop(here, u, te, 99, cam); } }; },
  c: [[2.9, 1.8, 4.0], [2.9, 1.8, .4], [2.9, 1.8, 3.4], [2.9, 1.8, .4]], range: 2 }; });
// 76. Tú no lo sabías
Q(76, (d) => ({ amb: 'barrio', ambo: { dusk: true }, fov: 28, atores: [YO({ x: 2.4, z: .6, eyes: [[0, 'wide']] })], c: [[2.4, 1.65, 2.6], [2.4, 1.6, .6], [2.4, 1.65, 2.2], [2.4, 1.6, .6]], range: 1 }));
// 77. Flashback: ella se asomó a su futura habitación y vio a un chico en pijama de dinosaurios, cantando con un cepillo
Q(77, (d, a) => { const tch = R0(a, 'chico'); return { amb: 'cuartoElla', fov: 30, atores: [ELLA({ x: .7, z: -2.0, eyes: [[0, 'look'], [tch, 'happy']] }), PIJ({ ...ME, eyes: [[0, 'shut']], pose: (k, u) => dance(k, u) })],
  extra: (c, s, [e, h]) => { for (let i = 0; i < 4; i++) { const b = caja(.6); b.position.set(-2.6 + i * .7, 0, -1.6 + (i % 2) * .4); c.add(b); } const br = cepillo(); c.add(br); const l = lab(c, ['HACE UN AÑO'], 1.4, [.7, 3.0, -2.0]); const nt = notas(c, 5); return { update: (u, t, cam) => { const p = hand(h); br.position.set(p.x, p.y + .12, p.z + .05); nt(u, p, cam); pop(l, u, .2, 3, cam); } }; },
  cam: [[0, [1.4, 1.8, 1.0], [.4, 1.8, -3]], [tch, [-.4, 1.9, -1.6], [-1.0, 1.9, -7.0]], [d, [-.6, 1.9, -2.6], [-1.0, 1.9, -7.0]]], f: [[0, 4], [tch, 5.4]], range: 3, look: { sat: .55, exposure: 1.05, vig: .7 } }; });
// 78. Pausa.
Q(78, (d) => ({ amb: 'barrio', ambo: { dusk: true }, fov: 30, atores: [ELLA({ x: 3.4, z: .4, eyes: [[0, 'down']] }), YO({ x: 2.4, z: .6, eyes: [[0, 'look']] })], c: [[2.9, 1.7, 3.4], [2.9, 1.6, .4], [2.9, 1.7, 3.2], [2.9, 1.6, .4]], range: 2 }));
// 79. "Y les dije a mis padres: esta. Quiero esta."
Q(79, (d, a) => { const te = R0(a, 'esta'); return { amb: 'barrio', ambo: { dusk: true }, fov: 30, atores: [ELLA({ x: 3.4, z: .4, eyes: [[0, 'look'], [te, 'happy']], talk: [[0, d]] }), YO({ x: 2.4, z: .6, eyes: [[0, 'wide']] })], extra: (c) => { const g = gl(c, 'Esta. Quiero esta.', 1.1, [3.8, 2.3, .4]); return { update: (u, t, cam) => pop(g, u, te, 99, cam) }; }, c: [[3.2, 1.7, 3.2], [3.2, 1.6, .4], [3.2, 1.7, 2.8], [3.2, 1.6, .4]], range: 2 }; });
// 80. Te quedas sin palabras. Ella se pone roja: como un tomate con fiebre
Q(80, (d, a) => { const tr = R0(a, 'roja'), tt = R0(a, 'tomate'); return { amb: 'barrio', ambo: { dusk: true }, fov: 30, atores: [ELLA({ x: 3.4, z: .4, eyes: [[0, 'look'], [tr, 'happy']] }), YO({ x: 2.4, z: .6, eyes: [[0, 'wide'], [tr, 'heart']] })],
  extra: (c, s, [e]) => { const rb = rubor(e); const tm = tomate(4.3, 1.8, .4, 3); c.add(tm); const l = lw(c, ['SIN PALABRAS'], 1.4, [2.4, 2.35, .6]); return { update: (u, t, cam) => { const k = smooth(tr, tr + 1.2, u); rb(k); e.tint(new THREE.Color('#FFF0DC').lerp(new THREE.Color('#FF7A6A'), k).getStyle()); tm.visible = u > tt; pop(l, u, .2, tr - .2, cam); } }; },
  c: [[3.0, 1.7, 3.4], [3.0, 1.6, .4], [3.0, 1.7, 2.8], [3.0, 1.6, .4]], range: 2 }; });
// 81. Darwin tenía razón: lo más humano del mundo
Q(81, (d) => ({ amb: 'biblio', fov: 30, atores: [DARWIN({ x: 0, z: -1, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [150, 20], head: Math.sin(u * 5) * 4 }) })], extra: (c) => { const l = lab(c, ['DARWIN: ✓'], 1.1, [.9, 2.3, -1]); return { update: (u, t, cam) => pop(l, u, .3, 99, cam) }; }, c: [[0, 1.7, 2.6], [0, 1.6, -1], [0, 1.7, 2.2], [0, 1.6, -1]], range: 1.6 }));
// 82. Ella entra en su casa corriendo, sin mirar atrás
Q(82, (d) => ({ amb: 'barrio', ambo: { dusk: true }, fov: 34, atores: [ELLA({ x: 3.4, z: .4, eyes: [[0, 'happy']], move: (u) => [lerp(3.4, 4.5, smooth(0, 1.6, u)), 0, lerp(.4, -2.9, smooth(0, 1.6, u))], pose: (k, u) => k.walk(u, 1.8) }), YO({ x: 2.4, z: .6, eyes: [[0, 'heart']] })],
  extra: (c) => { const hole = box(1.1, 2.1, .02, std('#1A1410'), 4.5, 1.05, -2.92); c.add(hole); const dr = box(1.1, 2.1, .1, std('#3E6A5A'), 0, 0, 0); const piv = new THREE.Group(); piv.position.set(4.5 - .55, 1.05, -2.94); dr.position.set(.55, 0, 0); piv.add(dr); c.add(piv); return { update: (u) => { piv.rotation.y = u < 1.7 ? -1.3 : lerp(-1.3, 0, smooth(1.7, 2.0, u)); hole.visible = u < 2.0; } }; },
  c: [[1.6, 2.0, 5.2], [3.4, 1.4, -1.0], [1.8, 2.0, 4.6], [3.6, 1.4, -1.2]], range: 4 }));
// 83. Esa noche, te asomas: su luz encendida, un cartel nuevo pegado al cristal
Q(83, (d, a) => { const tc = R0(a, 'cartel'); return { amb: 'cuartoYo', ambo: { night: true, lit: true }, fov: 32, atores: [YO({ x: -.5, z: -2.0, eyes: [[0, 'look'], [tc, 'wide']] })], extra: (c) => { const m = vidro(c, c.userData.her, ['¿Mañana', 'vamos juntos?'], { size: 80 }); return { update: (u) => vis(m, u, tc - .2) }; },
  c: [[-1.4, 1.8, 1.2], [.6, 1.9, -6.2], [-1.0, 1.8, .4], [.9, 1.9, -6.2]], range: 6, blur: 6, look: NIGHT }; });
// 84. "¿Mañana vamos juntos?"
Q(84, (d) => ({ amb: 'cuartoYo', ambo: { night: true, lit: true }, fov: 30, atores: [], extra: (c) => { vidro(c, c.userData.her, ['¿Mañana', 'vamos juntos?'], { size: 80 }); return {}; }, c: POVyo([1.0, 1.9, -3.4], [1.0, 2.0, -4.6]), range: 2, look: NIGHT }));
// 85. Mañana es sábado. No hay clase.
Q(85, (d, a) => { const tn = R0(a, 'no'); return { amb: 'cuartoYo', ambo: { night: true, lit: true }, fov: 28, atores: [YO({ x: -.5, z: -1.6, eyes: [[0, 'look'], [tn + .4, 'happy']] })], extra: (c) => { const l = lw(c, ['SÁBADO: SIN CLASE'], 1.4, [-.5, 2.3, -1.6], { fg: '#7F6BC4' }); return { update: (u, t, cam) => pop(l, u, .2, 99, cam) }; }, c: [[-.2, 1.7, 1.4], [-.4, 1.6, -1.6], [-.2, 1.7, 1.1], [-.4, 1.6, -1.6]], range: 1.4, look: NIGHT }; });
// 86. Coges el rotulador; no hace falta. Sacas de debajo de la cama un cartel de hace dos años. Nunca te atreviste
Q(86, (d, a) => { const ts = R0(a, 'sacas'), th = R0(a, 'hace', ts), tn = R0(a, 'nunca'); return { amb: 'quarto', ambo: { night: true }, fov: 32, atores: [YO({ x: -.2, z: .2, eyes: [[0, 'look'], [ts, 'down'], [th + .5, 'happy']], pose: (k, u) => { if (u > ts && u < th + .6) { k.pose({ armL: [12, 8], armR: [40, 20], lean: -20 }); hideLegs(k); k.root.position.y = -.5; } else { k.pose({ armL: [12, 8], armR: [70, 90] }); k.root.position.y = 0; for (const l of Object.values(k.legs)) { l.th.visible = true; l.shin.visible = true; } } } })],
  extra: (c, s, [h]) => { const rot = box(.03, .2, .03, std('#1E2A55'), 0, 0, 0); c.add(rot); const ct = cartel(['SÍ.'], .8, { size: 200, col: '#C9361F' }); c.add(ct); const dust = brillos(c, 10, '#E8DCC0'); const l = lab(c, ['HACE 2 AÑOS'], 1.4, [.4, 2.6, .2]);
    return { update: (u, t, cam) => { const p = hand(h); rot.position.set(p.x, p.y + .1, p.z + .05); rot.visible = u < ts; const k = smooth(ts + .4, th + .4, u); ct.position.set(lerp(-1.2, p.x + .2, k), lerp(.1, p.y + .3, k), lerp(-.6, .5, k)); ct.visible = u > ts; ct.rotation.x = lerp(-1.4, 0, k); dust(u, [ct.position.x, ct.position.y, ct.position.z + .1, .5], u > ts && u < th + 1 ? 1 : 0); pop(l, u, th, tn + 1.5, cam); } }; },
  c: [[1.0, 1.6, 3.0], [-.4, 1.0, -.2], [.8, 1.6, 2.4], [-.2, 1.2, .1]], range: 2, look: NIGHT }; });
// 87. Lo pegas en el cristal. Dice: "Sí."
Q(87, (d) => ({ amb: 'cuartoElla', ambo: { night: true, lit: true }, fov: 30, atores: [ELLA({ x: .7, z: -2.0, eyes: [[0, 'look'], [1.4, 'heart']] }), YO({ ...ME, eyes: [[0, 'happy']] })],
  extra: (c) => { const m = vidro(c, c.userData.me, ['SÍ.'], { size: 200, col: '#C9361F' }); const st = brillos(c, 14); return { update: (u) => { vis(m, u, .4); st(u, [-1.0, 2.0, -6.0, 1.2], smooth(1, 2, u)); } }; },
  cam: [[0, [-.9, 1.9, -1.4], [-1.0, 1.9, -7.0]], [1.8, [-.8, 1.9, -2.6], [-1.0, 1.9, -7.0]], [d, [1.6, 2.2, 1.8], [-.4, 1.8, -4]]], f: [[0, 5.6], [1.8, 4.4], [5, 5]], range: 4, lookFn: (u) => ({ ...NIGHT, exposure: .95 - smooth(3.0, 3.6, u) * .95 }) }));
