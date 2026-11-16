// "¿Qué pasaría si quedaras atrapado en un búnker con la chica que te gusta?" — horizontal 1280x720, ~10:46
import * as THREE from 'three';
import { plano, AMBS, box, std, cut, glowSprite, pointer, canvasTex, lightPanel, smooth, lerp, clamp, rng } from './mundo.js';
import { deitar, bubble, wordTex, clock, speechTex } from './extra.js';
import { S, wt } from './tiempos.js';
import { labelT, globo, tomate, heladeria } from './amb2.js';
import { cartel, caja, libro } from './amb3.js';
import { suscribe, telefono } from './amb4.js';
import { lata, radio, walkie, baraja, cuaderno, generador, cartelTxt } from './amb5.js';
import { linterna } from './amb3.js';
import { tree } from './motor/kit.js';

export const CENAS = [];
const FIM = 999;
const end = (i) => (i + 1 < S.length ? S[i + 1] : FIM);
const KZ = (p, q, k) => p.map((v, i) => q[i] + (v - q[i]) * k);
const mk = (cfg, d) => { const K = cfg.k ?? 1.35; if (cfg.c && K !== 1) { const [p0, q0, p1, q1] = cfg.c; cfg.c = [KZ(p0, q0, K), q0, KZ(p1, q1, K), q1]; } else if (cfg.cam && K !== 1) { cfg.cam = cfg.cam.map(([u, p, q]) => [u, KZ(p, q, K), q]); if (cfg.f) cfg.f = cfg.f.map(([u, v]) => [u, v * K]); } if (cfg.c) { const [p0, q0, p1, q1] = cfg.c; cfg.cam = [[0, p0, q0], [d, p1, q1]]; const D = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]); cfg.f = [[0, D(p0, q0)], [d, D(p1, q1)]]; } return cfg; };
const Q = (i, fn) => { const a = S[i], b = end(i), d = Math.min(b, 646.4) - a; CENAS.push([(x, y) => plano(x, y, mk(fn(d, a), d)), a, b]); };
const Qt = (a, b, fn) => { const d = Math.min(b, 646.4) - a; CENAS.push([(x, y) => plano(x, y, mk(fn(d, a), d)), a, b]); };
const Qs = (i, words, fns) => { const a = S[i], b = end(i); const cuts = [a]; let t = a; for (const w of words) { const [ww, n] = Array.isArray(w) ? w : [w, 1]; for (let j = 0; j < n; j++) t = wt(ww, t + .01); cuts.push(t); } cuts.push(b); fns.forEach((fn, k) => Qt(cuts[k], cuts[k + 1], fn)); };
const H = (o) => ({ tipo: 'humano', ...o });
const YO = (o = {}) => H({ glow: .1, ...o });
const dinoT = () => canvasTex(256, 256, (x) => { x.clearRect(0, 0, 256, 256); x.fillStyle = '#5FB04A'; x.beginPath(); x.ellipse(120, 150, 70, 45, 0, 0, 7); x.fill(); x.beginPath(); x.ellipse(190, 90, 34, 28, 0, 0, 7); x.fill(); x.fillRect(160, 95, 30, 60); x.fillRect(80, 180, 18, 40); x.fillRect(140, 180, 18, 40); x.beginPath(); x.moveTo(55, 150); x.lineTo(5, 175); x.lineTo(60, 172); x.fill(); x.fillStyle = '#F2C14E'; for (let i = 0; i < 5; i++) { x.beginPath(); x.moveTo(70 + i * 22, 112 - (i % 2) * 4); x.lineTo(81 + i * 22, 88); x.lineTo(92 + i * 22, 112); x.fill(); } x.fillStyle = '#111'; x.beginPath(); x.arc(198, 84, 5, 0, 7); x.fill(); });
const dinoOn = (k) => { if (k.dino) return; const m = cut(dinoT(), .3, .3); m.position.set(0, -.36, .012); m.castShadow = false; k.torso.add(m); k.dino = m; };
const PIJ = (o = {}) => { const p = o.pose; return YO({ outfit: 'avental', ...o, pose: (k, u) => { dinoOn(k); p ? p(k, u) : k.pose(); } }); };
const ELLA = (o = {}) => H({ outfit: 'amarelo', hair: 'long', hairc: '#4A2A1A', lash: true, ...o });
const PEQ = (o = {}) => ELLA({ s: .66, outfit: 'rosa', ...o });
const ABUELO = (o = {}) => H({ outfit: 'jaleco', hair: 'old', hairc: '#E8E2D8', glasses: true, glow: 0, ...o });
const PROF = (o = {}) => H({ outfit: 'jaleco', glasses: true, glow: 0, tint: '#E8E2D8', ...o });
const PATO = (o = {}) => ({ tipo: 'pato', s: 1, ...o });
const R0 = (a, w, from = 0) => wt(w, a + from) - a;
const lab = (c, lines, w, pos, o0 = {}) => { const L0 = Array.isArray(lines) ? lines : [lines]; const sz = o0.size || 72; const o = { w: Math.max(720, Math.max(...L0.map((l) => l.length)) * sz * .66 + 90), ...o0 }; const m = cut(labelT(Array.isArray(lines) ? lines : [lines], { bg: '#2A2A34', fg: '#F2C14E', size: 72, w: 720, h: 150, ...o }), w, w * (o.h || 150) / (o.w || 720)); m.position.set(...pos); m.renderOrder = 4; c.add(m); return m; };
const lw = (c, lines, w, pos, o = {}) => lab(c, lines, w, pos, { bg: '#FBF7EC', fg: '#2A2A34', ...o });
const lp = (c, lines, w, pos, o = {}) => lab(c, lines, w, pos, { bg: '#6A3AB8', fg: '#FFFFFF', ...o });
const gl = (c, txt, w, pos, size) => { const m = globo(txt, w, size || Math.min(80, Math.floor(470 / (txt.length * .62)))); m.position.set(...pos); m.renderOrder = 5; c.add(m); return m; };
const pop = (m, u, a, b = 1e9, cam) => { const k = smooth(a, a + .2, u) * (1 - smooth(b, b + .2, u)); m.visible = k > .01; m.scale.setScalar(Math.max(.001, .5 + .5 * k)); if (cam) pointer(m, cam); };
const wave = (k, u) => k.pose({ armL: [12, 8], armR: [150 + Math.sin(u * 9) * 18, 20] });
const clap = (k, u) => { const s = Math.abs(Math.sin(u * 10)); k.pose({ armL: [70 + s * 12, 70 + s * 30], armR: [70 + s * 12, 70 + s * 30] }); };
const nod = (k, u) => k.pose({ head: Math.sin(u * 7) * 6, bob: Math.abs(Math.sin(u * 7)) * .02 });
const talkP = (k, u) => k.pose({ armL: [12, 8], armR: [50 + Math.sin(u * 8) * 15, 30], bob: Math.abs(Math.sin(u * 8)) * .015 });
const point = (k) => k.pose({ armL: [12, 8], armR: [95, 0] });
const hold = (k) => k.pose({ armL: [60, 70], armR: [60, 70] });
const hideLegs = (k) => { for (const l of Object.values(k.legs)) { l.th.visible = false; if (l.shin) l.shin.visible = false; } };
const sitP = (k) => { k.pose({ armL: [8, 6], armR: [8, 6] }); hideLegs(k); };
const dance = (k, u, amp = 1) => { const s = Math.sin(u * 7); k.pose({ armL: [40 + s * 30 * amp, 40], armR: [120, 100], lean: s * 8 * amp, bob: Math.abs(Math.cos(u * 7)) * .06 * amp, legL: [s * 10, 0], legR: [-s * 10, 0], head: s * 6 }); };
const hand = (k) => { const v = new THREE.Vector3(); k.arms.R.hand.getWorldPosition(v); return v; };
const rubor = (k) => { const L = [-1, 1].map((s) => { const g = glowSprite('#FF3A4A', .42, 0); g.position.set(s * .2, -.12, .08); k.head.add(g); return g; }); return (v) => L.forEach((g) => (g.material.opacity = v * .85)); };
const notas = (c, n = 6) => { const N = []; for (let i = 0; i < n; i++) { const m = cut(wordTex(i % 2 ? '♪' : '♫', '#F2C14E', 150), .35, .28); m.renderOrder = 5; c.add(m); N.push(m); } return (u, p, cam, on = true) => N.forEach((m, i) => { const f = (u * .5 + i / n) % 1; m.visible = on; m.position.set(p.x + .4 + Math.sin(i * 2 + u) * .3 + f * .4, p.y + f * 1.2, p.z); m.material.opacity = Math.sin(f * Math.PI); pointer(m, cam); }); };
const brillos = (c, n = 10, col = '#FFF2C0') => { const B = []; for (let i = 0; i < n; i++) { const g = glowSprite(col, .3, 0); c.add(g); B.push(g); } return (u, p, on = 1) => B.forEach((g, i) => { const f = (u * .8 + i / n) % 1; g.position.set(p[0] + Math.sin(i * 2.4) * p[3], p[1] + Math.cos(i * 1.7) * p[3] * .6, p[2]); g.material.opacity = on * Math.sin(f * Math.PI) * .9; g.scale.setScalar(.15 + Math.sin(f * Math.PI) * .25); }); };
const zzz = (c) => { const Z = [0, 1, 2].map(() => { const m = cut(wordTex('Z', '#B8C8FF', 150), .3, .24); m.renderOrder = 5; c.add(m); return m; }); return (u, p, cam, on = true) => Z.forEach((m, i) => { const f = (u * .35 + i / 3) % 1; m.visible = on; m.position.set(p[0] + f * .6, p[1] + f * .9, p[2]); m.material.opacity = Math.sin(f * Math.PI); m.scale.setScalar(.6 + f * .6); pointer(m, cam); }); };
const NIGHT = { exposure: .95, bloom: .45 };
const DREAM = { bloom: .45, bloomT: .88, vig: .5 };
// pessoa deitada (cabeça para -x). y = altura do colchão
const DORM = (mk0, o = {}) => mk0({ eyes: [[0, 'shut']], ...o, pose: (k, u) => { k.pose({ armL: [10, 6], armR: [10, 6] }); deitar(k); if (o.p2) o.p2(k, u); } });
// cama da Sara no cuartoElla: x 0.5..2.9, colchão y .75
const SARA_DORM = (o = {}) => DORM(ELLA, { x: 2.75, z: -.6, y: .97, ...o });
// clarão branco no fim (botão)
const flash = (a, b) => (u) => { const k = smooth(a, b, u); return { exposure: 1.02 + k * 3, bloom: .3 + k * 1.5 }; };
// aparato na mão
const naMao = (ap, k, dy = -.1) => { const p = hand(k); ap.position.set(p.x - .1, p.y + dy, p.z + .1); };


// ===================== PERSONAJES Y AYUDAS DEL BÚNKER =====================
const LU = (o = {}) => H({ outfit: 'roxo', hair: 'bob', hairc: '#3A1E14', lash: true, glow: .1, ...o });
const GUIA = (o = {}) => H({ outfit: 'verde', hair: 'old', hairc: '#B8B0A0', glasses: true, glow: 0, ...o });
const PROFE = (o = {}) => H({ outfit: 'azul', hair: 'bun', hairc: '#5A3A2A', lash: true, glasses: true, glow: 0, ...o });
const BOMB = (o = {}) => H({ outfit: 'laranja', glow: 0, ...o });
const EXTRA = (i, o = {}) => { const C = [['rosa', 'long', '#6B3A22'], ['azul', null, null], ['amarelo', 'afro', '#2a1b18'], ['verde', 'bob', '#D9B65A'], ['laranja', null, null], ['terno2', null, null], ['rosa', 'bun', '#3a2030'], ['jaleco', null, null]][i % 8]; return H({ outfit: C[0], hair: C[1], hairc: C[2], lash: !!C[1], glow: 0, ...o }); };
const BK = (o = {}) => ({ amb: 'bunker', ambo: o });
const DARK = { exposure: 1.0, bloom: .28, bloomT: .96, vig: .6 };
// habla: bocadillo rectangular con cola
const hab = (c, lines, w, pos, size = 60) => { const L = Array.isArray(lines) ? lines : [lines]; const W = Math.max(640, Math.max(...L.map((l) => l.length)) * size * .62 + 80), Hh = Math.round(size * 1.25 * L.length / .72 + 60); const m = cut(speechTex(L, { w: W, h: Hh, size }), w, w * Hh / W); m.position.set(...pos); m.renderOrder = 6; c.add(m); return m; };
// pensamiento: nube
const nube = (c, lines, w, pos, size = 56) => bubble(c, lines, w, { w: 640, h: 400, size });
// temblor de cámara
const shake = (cam, amp, u) => { if (amp <= 0) return; cam.position.x += Math.sin(u * 63) * amp; cam.position.y += Math.cos(u * 51) * amp; };
// linterna en la mano derecha
const linEnMano = (L, k, dy = 0) => { const p = hand(k); L.position.set(p.x, p.y + dy, p.z + .12); };
// luz cálida suave para escenas a oscuras
const calida = (c, pos, k = 5, r = 7) => { const l = new THREE.PointLight('#FFD8A0', k, r, 1.6); l.position.set(...pos); c.add(l); return l; };
// apagar / encender las luces del búnker (0..1)
const luces = (c, v) => { const U = c.userData; (U.lights || []).forEach((l) => (l.intensity = 11 * v)); (U.bulbs || []).forEach((b) => (b.material.emissiveIntensity = 2.2 * v)); if (U.hemi) U.hemi.intensity = .12 + .43 * v; };
// palanca: k=0 arriba, k=1 abajo
const lever = (c, k) => { c.userData.lever.rotation.x = -.5 + 1.1 * k; };
// dibujo de Lucía tocando la palanca (para el cuaderno)
const drawLucia = (x, p = 1) => { x.save(); x.globalAlpha = 1; x.strokeStyle = '#2A2A34'; x.lineWidth = 5; x.lineCap = 'round'; const seg = [[300, 120, 300, 250], [300, 160, 360, 120], [300, 160, 250, 200], [300, 250, 270, 320], [300, 250, 330, 320]]; const n = Math.floor(seg.length * p); for (let i = 0; i < n; i++) { const [a, b, c2, d] = seg[i]; x.beginPath(); x.moveTo(a, b); x.lineTo(c2, d); x.stroke(); } if (p > .1) { x.beginPath(); x.arc(300, 95, 28, 0, 7); x.stroke(); x.fillStyle = '#3A1E14'; x.beginPath(); x.arc(300, 88, 30, Math.PI, 0); x.fill(); } if (p > .5) { x.beginPath(); x.moveTo(288, 100); x.lineTo(296, 104); x.moveTo(304, 104); x.lineTo(312, 100); x.stroke(); x.beginPath(); x.arc(300, 116, 7, Math.PI * 1.1, Math.PI * 1.9); x.stroke(); } if (p > .7) { x.fillStyle = '#555'; x.fillRect(380, 90, 14, 70); x.fillStyle = '#D8251A'; x.beginPath(); x.arc(370, 112, 16, 0, 7); x.fill(); } if (p > .9) { x.fillStyle = '#2A2A34'; x.font = '700 30px Caveat'; x.fillText('¡culpable!', 120, 330); } x.restore(); };
// lista de preguntas de los soldados
const drawLista = (x) => { x.fillStyle = '#2A2A34'; x.font = '700 30px Caveat'; x.fillText('Para pasar las', 20, 40); x.fillText('noches largas:', 20, 70); const Q = ['1. ¿Tu día perfecto?', '2. ...', '7. ...', '12. ...', '20. ...', '?? ¿Qué es lo que', 'nunca te has atrevido', 'a decir?']; Q.forEach((q, i) => x.fillText(q, 262, 40 + i * 40)); };
const PLAN = { exposure: 1.0 };

// ===================== CENAS =====================
// 0. GANCHO: "Estás encerrado en un búnker, a doce metros bajo tierra"
Q(0, (d, a) => { const td = R0(a, 'doce'); return { ...BK(), fov: 30, atores: [YO({ x: 0, z: -.6, eyes: [[0, 'wide'], [1.4, 'lookl'], [2.6, 'look']] })],
  extra: (c) => { luces(c, .45); const t = lab(c, ['12 METROS BAJO TIERRA'], 2.0, [0, 2.15, -.3]); return { update: (u, t2, cam) => pop(t, u, td, 99, cam) }; },
  c: [[0, 2.6, 4.6], [0, 1.2, -1.2], [0, 1.6, 2.6], [0, 1.2, -.8]], range: 2, look: { exposure: .95, vig: .6 } }; });
// 1. La puerta no se abre
Q(1, (d, a) => ({ ...BK(), fov: 30, atores: [YO({ x: .1, z: -2.55, eyes: [[0, 'angry']], pose: (k, u) => k.pose({ armL: [100, 30], armR: [100, 30], lean: -6 + Math.sin(u * 14) * 3 }) })],
  extra: (c) => { luces(c, .45); const t = lab(c, ['NO SE ABRE'], 1.2, [.2, 2.3, -2.4]); return { update: (u, t2, cam) => { c.userData.wheel.rotation.z = Math.sin(u * 16) * .08; pop(t, u, .4, 99, cam); shake(cam, .01, u); } }; },
  c: [[1.6, 1.6, 1.2], [0, 1.3, -3.0], [1.3, 1.5, .8], [0, 1.3, -3.0]], range: 1.6, look: { exposure: .95, vig: .6 } }));
// 2. Y la única persona que está contigo es Lucía. La chica que te gusta desde primero
Q(2, (d, a) => { const tl = R0(a, 'lucia'), tg = R0(a, 'gusta'); let rb; return { ...BK(), fov: 30, atores: [YO({ x: -.7, z: -.2, eyes: [[0, 'look'], [tg, 'heart']] }), LU({ x: 1.1, z: -.6, eyes: [[0, 'lookl'], [tg, 'happy']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [30, 40] }) })],
  extra: (c, s, A) => { luces(c, .45); rb = rubor(A[0]); const n = lab(c, ['LUCÍA'], .9, [1.1, 2.35, -.6], { bg: '#8667B0', fg: '#fff' }); const t = lw(c, ['TE GUSTA DESDE PRIMERO'], 2.2, [-.4, 2.75, -.4]); const ht = cut(wordTex('♥', '#E8667F', 170), .35, .28); ht.renderOrder = 6; c.add(ht);
    return { update: (u, t2, cam) => { pop(n, u, tl, 99, cam); pop(t, u, tg, 99, cam); rb(smooth(tg, tg + .5, u)); ht.visible = u > tg; ht.position.set(-.7, 2.05 + ((u * .4) % .4), -.2); ht.scale.setScalar(1 + Math.abs(Math.sin(u * 6)) * .3); pointer(ht, cam); } }; },
  c: [[-2.0, 1.7, 3.4], [-.4, 1.2, -.4], [.6, 1.6, 3.4], [.4, 1.2, -.4]], range: 2.4, look: { exposure: .98, vig: .55 } }; });
// 3. ¿Cómo has llegado hasta aquí? Rebobinemos
Q(3, (d, a) => { const tr = R0(a, 'rebobinemos'); return { ...BK(), fov: 32, atores: [YO({ x: -.7, z: -.2, eyes: [[0, 'look'], [tr, 'shut']], move: (u) => [-.7 + Math.max(0, u - tr) * .5, 0, -.2], pose: (k, u) => (u > tr ? k.walk(-u * 2) : k.pose({ armL: [12, 8], armR: [80, 120] })) }), LU({ x: 1.1, z: -.6, move: (u) => [1.1 - Math.max(0, u - tr) * .5, 0, -.6], pose: (k, u) => (u > tr ? k.walk(-u * 2) : k.pose()) })],
  extra: (c) => { luces(c, .45); const q = lab(c, ['¿CÓMO HAS LLEGADO AQUÍ?'], 2.4, [0, 2.7, -.4]); const r = lab(c, ['◀◀ REBOBINEMOS'], 1.9, [0, 2.7, -.4], { bg: '#FBF7EC', fg: '#C9361F' }); return { update: (u, t2, cam) => { pop(q, u, .1, tr - .1, cam); pop(r, u, tr, 99, cam); } }; },
  c: [[0, 1.8, 4.6], [0, 1.3, -.6], [0, 1.7, 4.2], [0, 1.3, -.6]], range: 3, lookFn: (u) => (u > tr ? { exposure: 1.1, vig: .7, bloom: .5 } : {}) }; });
// 4. Excursión del instituto. Un museo de la Guerra Fría, en mitad del bosque
Q(4, (d, a) => { const tm = R0(a, 'museo'); return { amb: 'bosqueBunker', ambo: { busX: 6.5 }, fov: 34, atores: [YO({ x: 1.6, z: 1.0, move: (u) => [lerp(4.2, 1.4, smooth(0, 3, u)), 0, 1.0], pose: (k, u) => (u < 3 ? k.walk(u) : k.pose()) }), LU({ x: 2.4, z: .6, move: (u) => [lerp(5.0, 2.3, smooth(0, 3.2, u)), 0, .6], pose: (k, u) => (u < 3.2 ? k.walk(u + 1) : k.pose()) }), EXTRA(0, { x: 3.0, z: 1.5, move: (u) => [lerp(5.6, 3.1, smooth(.3, 3.5, u)), 0, 1.5], pose: (k, u) => (u < 3.5 ? k.walk(u + 2) : k.pose()) }), EXTRA(1, { x: 3.6, z: .3, move: (u) => [lerp(6.2, 3.7, smooth(.5, 3.8, u)), 0, .3], pose: (k, u) => (u < 3.8 ? k.walk(u + 3) : k.pose()) }), GUIA({ x: -1.2, z: -.8, pose: wave })],
  extra: (c) => { const t = lab(c, ['EXCURSIÓN DEL INSTITUTO'], 2.6, [1.2, 3.4, -.2]); const t2 = lw(c, ['EN MITAD DEL BOSQUE'], 2.2, [1.2, 3.4, -.2]); return { update: (u, tt, cam) => { pop(t, u, .2, tm - .1, cam); pop(t2, u, tm + 1.5, 99, cam); } }; },
  c: [[3.0, 2.4, 9.0], [.6, 1.6, -2.0], [1.2, 2.2, 7.6], [0, 1.8, -2.4]], k: 1, range: 6, blur: 6 }; });
// 5. Un búnker antiguo: hormigón, literas de metal, puerta de acero que pesa más que un coche
Q(5, (d, a) => { const th = R0(a, 'hormigon'), tl = R0(a, 'literas'), tp = R0(a, 'puerta'), tc = R0(a, 'coche'); return { ...BK({ museo: true }), fov: 34, atores: [GUIA({ x: -.8, z: .4, pose: (k, u) => (u > tp ? point(k) : talkP(k, u)) }), YO({ x: .6, z: 1.0, eyes: [[0, 'look'], [tc, 'wide']] }), LU({ x: 1.4, z: .8, eyes: [[0, 'look']] }), EXTRA(2, { x: -1.8, z: 1.2 })],
  extra: (c) => { const L = [lw(c, ['HORMIGÓN'], 1.7, [-2.6, 2.7, -1.6]), lw(c, ['LITERAS DE METAL'], 2.2, [2.4, 2.5, -1.0]), lab(c, ['PUERTA DE ACERO'], 2.2, [0, 2.75, -2.6]), lab(c, ['PESA MÁS QUE UN COCHE'], 2.6, [0, 2.75, -2.6], { fg: '#FF8A5A' })]; return { update: (u, t2, cam) => { pop(L[0], u, th, 99, cam); pop(L[1], u, tl, 99, cam); pop(L[2], u, tp, tc - .1, cam); pop(L[3], u, tc, 99, cam); } }; },
  c: [[-1.4, 2.2, 5.6], [-1.0, 1.4, -1.6], [1.4, 2.0, 5.2], [.6, 1.4, -1.8]], range: 4, blur: 6 }; });
// 6. El guía dice: "No toquéis nada"
Q(6, (d, a) => ({ ...BK({ museo: true }), fov: 30, atores: [GUIA({ x: -1.5, z: -1.0, talk: [[0, 2]], pose: (k, u) => k.pose({ armL: [12, 8], armR: [150, 20], head: Math.sin(u * 8) * 4 }) }), YO({ x: .4, z: -.2, eyes: [[0, 'lookl']] }), LU({ x: 1.2, z: -.4, eyes: [[0, 'smug']] }), EXTRA(3, { x: -.4, z: .2, eyes: [[0, 'lookl']] })],
  extra: (c) => { const b = hab(c, '¡NO TOQUÉIS NADA!', 1.8, [-1.5, 2.55, -1.0], 66); return { update: (u, t2, cam) => pop(b, u, .2, 99, cam) }; },
  c: [[.6, 1.7, 4.0], [-.4, 1.4, -.8], [.4, 1.7, 3.4], [-.5, 1.4, -.8]], range: 3.4 }));
// 7. Y Lucía, claro, toca algo. Una palanca roja. Tú intentas pararla. Llegas tarde
Q(7, (d, a) => { const tt = R0(a, 'toca'), tp = R0(a, 'palanca'), ti = R0(a, 'intentas'), tl = R0(a, 'tarde'); return { ...BK({ museo: true }), fov: 30, atores: [LU({ x: 1.35, z: -2.75, eyes: [[0, 'smug'], [tl, 'wide']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [lerp(20, 120, smooth(tt, tt + .5, u)), 10] }) }), YO({ x: -.6, z: -1.6, eyes: [[0, 'look'], [ti, 'wide']], move: (u) => [lerp(-1.2, .55, smooth(ti, tl, u)), 0, -2.3], pose: (k, u) => (u > ti && u < tl ? k.walk(u * 1.6) : k.pose({ armL: [12, 8], armR: [u > ti ? 100 : 12, 0] })) })],
  extra: (c) => { const t = lab(c, ['PALANCA ROJA'], 1.4, [1.55, 2.4, -3.0], { fg: '#FF6A5A' }); const l2 = lw(c, ['LLEGAS TARDE'], 1.5, [0, 2.7, -2.4]); const g = glowSprite('#FF3A2A', .7, 0); g.position.set(1.55, 1.85, -3.2); c.add(g);
    return { update: (u, t2, cam) => { lever(c, smooth(tl - .3, tl + .1, u)); g.material.opacity = smooth(tp - .3, tp, u) * (.5 + .4 * Math.sin(u * 8)); pop(t, u, tp, tl - .3, cam); pop(l2, u, tl, 99, cam); } }; },
  c: [[2.6, 1.8, 1.0], [.8, 1.5, -2.9], [2.2, 1.7, .6], [.9, 1.5, -2.9]], range: 1.8 }; });
// 8. La puerta se cierra. ¡Clonc! Y se queda bloqueada
Q(8, (d, a) => { const tc = R0(a, 'clonc'), tb = R0(a, 'bloqueada'); return { ...BK({ open: true, museo: true }), fov: 32, atores: [YO({ x: -.5, z: -.4, eyes: [[0, 'look'], [tc, 'wide']] }), LU({ x: .6, z: -.6, eyes: [[0, 'wide']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [40, 70] }) })],
  extra: (c) => { const cl = lab(c, ['¡CLONC!'], 1.6, [0, 2.8, -2.6], { size: 100, bg: '#C9361F', fg: '#fff' }); const bl = lw(c, ['BLOQUEADA'], 1.5, [0, 2.35, -2.6]); const so = c.userData.sunObjs;
    return { update: (u, t2, cam) => { const k = smooth(0, tc, u); c.userData.door.rotation.y = -1.45 * (1 - k * k); so[0].material.emissiveIntensity = 3.2 * (1 - k); so[2].intensity = 60 * (1 - k); so[1].visible = k < .95; pop(cl, u, tc, tb, cam); pop(bl, u, tb, 99, cam); shake(cam, u > tc && u < tc + .5 ? .04 : 0, u); } }; },
  c: [[0, 1.6, 4.2], [0, 1.3, -2.8], [0, 1.6, 3.6], [0, 1.3, -2.8]], range: 3 }; });
// 9. Fuera, la tormenta corta la luz. El grupo ya ha subido al autobús. Nadie se ha dado cuenta
Q(9, (d, a) => { const tg = R0(a, 'grupo'), tn = R0(a, 'nadie'); return { amb: 'bosqueBunker', ambo: { storm: true }, fov: 34, atores: [],
  extra: (c) => { const t = lab(c, ['NADIE SE HA DADO CUENTA'], 3.4, [-1, 3.0, -1.0]); const l1 = lw(c, ['TORMENTA: SIN LUZ'], 2.8, [-1, 3.0, -1.0]);
    return { update: (u, t2, cam) => { c.userData.rain(u); const fl = Math.max(0, Math.sin(u * 2.3) ** 40, Math.sin(u * 1.1 + 2) ** 60); c.userData.flash.intensity = fl * 2.2; c.userData.bus.position.x = lerp(6.5, -22, smooth(tg + .5, tg + 6, u)); pop(l1, u, .3, tn - .2, cam); pop(t, u, tn, 99, cam); } }; },
  c: [[3, 2.6, 9], [0, 1.8, -3], [-1, 2.4, 8], [-1, 1.8, -3]], k: 1, range: 9, blur: 3, look: { exposure: 1.05, bloom: .5, vig: .55 } }; });
// 10. Walkie-talkie: el cerrojo es eléctrico, hasta que vuelva la corriente no se puede abrir
Q(10, (d, a) => { const te = R0(a, 'electrico'), th = R0(a, 'hasta'); return { ...BK(), fov: 28, atores: [YO({ x: -.6, z: -.35, eyes: [[0, 'down']] }), LU({ x: .6, z: -.35, eyes: [[0, 'down'], [th, 'wide']] })],
  extra: (c) => { luces(c, .45); const w = walkie(); w.position.set(0, .78, .35); w.scale.setScalar(1.6); c.add(w); const R = [0, 1, 2].map(() => { const r = new THREE.Mesh(new THREE.TorusGeometry(.2, .012, 6, 30, Math.PI * .6), new THREE.MeshBasicMaterial({ color: '#7FD08A', transparent: true })); r.rotation.z = Math.PI * .2; c.add(r); return r; });
    const t1 = lab(c, ['CERROJO ELÉCTRICO'], 1.6, [0, 2.15, .1]), t2 = lw(c, ['SIN CORRIENTE, NO SE ABRE'], 1.9, [0, 2.15, .1]);
    return { update: (u, t2b, cam) => { w.userData.led.material.emissiveIntensity = 1 + 2 * Math.abs(Math.sin(u * 7)); R.forEach((r, i) => { const f = (u * .9 + i / 3) % 1; r.position.set(.0, 1.5, .35); r.scale.setScalar(.6 + f * 1.6); r.material.opacity = 1 - f; }); pop(t1, u, te, th - .1, cam); pop(t2, u, th, 99, cam); } }; },
  c: [[0, 1.9, 3.0], [0, 1.2, .3], [.3, 1.7, 2.4], [0, 1.2, .3]], range: 1.6 }; });
// 11. Y eso, con esta tormenta, va a ser mañana por la mañana
Q(11, (d, a) => { const tm = R0(a, 'manana'); return { ...BK(), fov: 30, atores: [YO({ x: -.6, z: -.2, eyes: [[0, 'look'], [tm, 'wide']] }), LU({ x: .6, z: -.2, eyes: [[0, 'look'], [tm, 'wide']] })],
  extra: (c) => { luces(c, .45); const ck = clock(.8, 7); ck.position.set(0, 2.2, -1.0); c.add(ck); const t = lab(c, ['MAÑANA POR LA MAÑANA'], 2.3, [0, 2.95, -1.0]); return { update: (u, t2, cam) => { ck.set(lerp(7, 31, smooth(tm, tm + 1.5, u)) % 12 || 12); ck.visible = u > tm - .3; pop(t, u, tm, 99, cam); } }; },
  c: [[0, 1.7, 4.0], [0, 1.6, -.6], [0, 1.7, 3.4], [0, 1.7, -.6]], range: 2.6 }; });
// 12. Una noche entera. Tú. Ella. Y un búnker
Q(12, (d, a) => { const tt = R0(a, 'tu'), te = R0(a, 'ella'), tb = R0(a, 'bunker'); return { ...BK(), fov: 32, atores: [YO({ x: -.8, z: -.3 }), LU({ x: .8, z: -.3 })],
  extra: (c) => { luces(c, .35); const s1 = new THREE.SpotLight('#FFF2D8', 0, 8, .3, .5, 1); s1.position.set(-.8, 3.3, 1); s1.target.position.set(-.8, 0, -.3); const s2 = new THREE.SpotLight('#FFF2D8', 0, 8, .3, .5, 1); s2.position.set(.8, 3.3, 1); s2.target.position.set(.8, 0, -.3); c.add(s1, s1.target, s2, s2.target);
    const L = [lab(c, ['UNA NOCHE ENTERA'], 2.0, [0, 2.8, -.4]), lw(c, ['TÚ'], .8, [-.8, 2.15, -.3], { size: 100, w: 360 }), lw(c, ['ELLA'], 1.0, [.8, 2.15, -.3], { size: 100, w: 460 }), lab(c, ['Y UN BÚNKER'], 1.5, [0, 2.8, -.4])];
    return { update: (u, t2, cam) => { s1.intensity = 30 * smooth(tt, tt + .2, u); s2.intensity = 30 * smooth(te, te + .2, u); pop(L[0], u, 0, tt - .1, cam); pop(L[1], u, tt, 99, cam); pop(L[2], u, te, 99, cam); pop(L[3], u, tb, 99, cam); } }; },
  c: [[0, 1.6, 3.0], [0, 1.5, -.4], [0, 2.0, 4.6], [0, 1.6, -.8]], range: 3 }; });
// 13. LLAMADA: suscríbete al canal y activa la campanita
Q(13, (d, a) => { const ts = R0(a, 'suscribete'), tc = R0(a, 'campanita'), ta = R0(a, 'asi'); return { ...BK(), fov: 32, atores: [YO({ x: -1.7, z: .2, eyes: [[0, 'happy']], pose: (k, u) => (u < ts ? wave(k, u) : point(k)) }), LU({ x: -2.5, z: -.2, eyes: [[0, 'happy']], pose: wave })],
  extra: (c) => { luces(c, .6); const s = suscribe(2.8); s.position.set(.8, 2.0, -.2); c.add(s); const r = lab(c, ['¡NO TE PIERDAS LA PRÓXIMA!'], 2.4, [.6, .95, .1]); const b = brillos(c, 14, '#FFE27A');
    return { update: (u, t, cam) => { const k = smooth(ts - .3, ts, u); s.scale.setScalar(Math.max(.01, k * (1 + .06 * Math.sin(u * 8) * (u > ts + 1 ? 1 : 0)))); s.rotation.z = u > tc && u < tc + 1.4 ? Math.sin(u * 40) * .06 : 0; b(u, [.8, 2.0, -.1, 1.2], smooth(tc, tc + .2, u)); pop(r, u, ta, 99); } }; },
  c: [[0, 1.7, 5.0], [-.2, 1.6, -.2], [0, 1.7, 4.6], [-.2, 1.6, -.2]], range: 6, blur: 4 }; });
// 14. Y ahora sí. Vamos a ver cómo sobrevives a esta noche
Q(14, (d, a) => ({ ...BK(), fov: 32, atores: [YO({ x: -.6, z: 0, eyes: [[0, 'smug']] }), LU({ x: .6, z: -.1, eyes: [[0, 'look']] })],
  extra: (c) => { luces(c, .45); const t = lab(c, ['NOCHE EN EL BÚNKER'], 2.2, [0, 2.8, -.4], { bg: '#C9361F', fg: '#fff' }); const ck = clock(.55, 9); ck.position.set(0, 2.15, -1.0); c.add(ck); return { update: (u, t2, cam) => { pop(t, u, .3, 99, cam); ck.set(9 + u * .4); } }; },
  c: [[0, 2.0, 5.2], [0, 1.4, -.6], [0, 1.7, 4.0], [0, 1.4, -.6]], range: 3 }));
// 15. Primero, lo obvio: intentar salir. Empujas la puerta. Nada. Lucía la empuja contigo. Nada
Q(15, (d, a) => { const te = R0(a, 'empujas'), n1 = R0(a, 'nada'), tl = R0(a, 'lucia'), n2 = R0(a, 'nada', n1 + .3); const push = (k, u) => k.pose({ armL: [95, 20], armR: [95, 20], lean: -10 + Math.sin(u * 12) * 2 }); return { ...BK(), fov: 32, atores: [YO({ x: -.35, z: -2.55, eyes: [[0, 'angry'], [n1, 'flat']], move: (u) => [-.35, 0, lerp(-1.0, -2.55, smooth(0, te, u))], pose: (k, u) => (u < te ? k.walk(u) : push(k, u)) }), LU({ x: .45, z: -2.55, eyes: [[0, 'look'], [tl, 'angry'], [n2, 'flat']], move: (u) => [.45, 0, lerp(-.4, -2.55, smooth(tl, tl + 1.2, u))], pose: (k, u) => (u < tl + 1.2 ? (u > tl ? k.walk(u) : k.pose()) : push(k, u)) })],
  extra: (c) => { luces(c, .45); const t0 = lab(c, ['PLAN A: SALIR'], 1.6, [0, 2.85, -2.4]); const N1 = lw(c, ['NADA'], .9, [-.8, 2.6, -2.4], { size: 90 }), N2 = lw(c, ['NADA'], .9, [.8, 2.6, -2.4], { size: 90 }); return { update: (u, t2, cam) => { pop(t0, u, .2, n1 - .2, cam); pop(N1, u, n1, 99, cam); pop(N2, u, n2, 99, cam); } }; },
  c: [[2.4, 1.7, 1.6], [0, 1.3, -2.8], [1.8, 1.6, 1.0], [0, 1.3, -2.8]], range: 2 }; });
// 16. Probáis con la palanca roja, arriba y abajo, cuarenta veces. Nada
Q(16, (d, a) => { const tc = R0(a, 'cuarenta'), tn = R0(a, 'nada'); return { ...BK(), fov: 28, atores: [LU({ x: 1.35, z: -2.75, eyes: [[0, 'angry'], [tn, 'flat']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [100 + Math.sin(u * 12) * 25, 10] }) }), YO({ x: .4, z: -2.3, eyes: [[0, 'look'], [tn, 'flat']] })],
  extra: (c) => { luces(c, .45); const cnt = lab(c, ['× 0'], .8, [.9, 2.1, -2.8], { size: 90 }); let last = -1; const N = lw(c, ['NADA'], .8, [.6, 2.2, -2.6], { size: 90 });
    return { update: (u, t2, cam) => { lever(c, .5 + .5 * Math.sin(u * 12)); const n = Math.min(40, Math.floor(u * 7.5)); if (n !== last && u < tn) { last = n; cnt.material.map.dispose(); cnt.material.map = labelT(['× ' + n], { bg: '#2A2A34', fg: '#F2C14E', size: 90, w: 720, h: 150 }); } pop(cnt, u, .2, tn - .1, cam); pop(N, u, tn, 99, cam); } }; },
  c: [[2.4, 1.7, -.2], [1.3, 1.5, -3.0], [2.1, 1.6, -.6], [1.3, 1.5, -3.0]], range: 1.6 }; });
// 17. Un conducto de ventilación en el techo. Te subes a una litera, metes la cabeza... cabe un gato. Un gato delgado
Q(17, (d, a) => { const tl = R0(a, 'litera'), tm = R0(a, 'metes'), tg = R0(a, 'gato'), tdl = R0(a, 'delgado'); return { ...BK(), fov: 32, atores: [YO({ x: -3.3, z: -1.1, eyes: [[0, 'look'], [tm, 'wide']], move: (u) => (u < tl ? [lerp(-1.6, -3.0, smooth(0, tl, u)), 0, -.3] : [lerp(-3.0, -3.55, smooth(tl, tm, u)), lerp(0, 1.25, smooth(tl, tl + 1, u)), lerp(-.3, -1.1, smooth(tl, tm, u))]), pose: (k, u) => (u < tl ? k.walk(u) : k.pose({ armL: [160, 20], armR: [160, 20], lean: u > tm ? 25 : 0 })) }), { tipo: 'gato', x: -2.2, z: -.9, y: 2.0, s: .55 }],
  extra: (c, s, A) => { luces(c, .45); const t = lab(c, ['CONDUCTO DE VENTILACIÓN'], 2.3, [-2.2, 3.1, -.6]); const g1 = lw(c, ['CABE UN GATO'], 1.8, [-1.4, 2.7, -.8]), g2 = lw(c, ['UN GATO DELGADO'], 2.0, [-1.4, 2.7, -.8]); const v = glowSprite('#FFF2C0', .9, 0); v.position.set(-3.9, 2.75, -1.1); c.add(v);
    return { update: (u, t2, cam) => { v.material.opacity = .6 * smooth(0, 1, u); pop(t, u, .2, tg - .1, cam); A[1].root.visible = u > tg; A[1].root.scale.set(.55 * (u > tdl ? .45 : 1), .55, .55); pop(g1, u, tg, tdl - .05, cam); pop(g2, u, tdl, 99, cam); } }; },
  c: [[.4, 2.0, 3.0], [-2.8, 2.0, -1.0], [-.2, 2.3, 2.2], [-3.0, 2.3, -1.1]], range: 4 }; });
// 18. Lucía, desde abajo: "¿Y?". Tú: "Hay mucho polvo". Estornudo que retumba por todo el búnker
Q(18, (d, a) => { const th = R0(a, 'hay'), te = R0(a, 'estornudo'), tr = R0(a, 'retumba'); return { ...BK(), fov: 32, atores: [YO({ x: -3.55, z: -1.1, y: 1.25, eyes: [[0, 'flat'], [te, 'shut']], pose: (k, u) => k.pose({ armL: [160, 20], armR: [160, 20], lean: 25 - (u > te ? 20 * Math.max(0, 1 - (u - te) * 2) : 0) }) }), LU({ x: -2.0, z: -.2, eyes: [[0, 'lookl'], [te, 'wide']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [40, 60], head: -8 }) })],
  extra: (c) => { luces(c, .45); const q = hab(c, '¿Y?', .8, [-1.6, 2.4, -.2], 90); const p = hab(c, 'HAY MUCHO POLVO', 1.6, [-2.6, 3.0, -.6], 62); const ach = lab(c, ['¡ACHÍS!'], 1.5, [-2.2, 2.9, -.4], { size: 100, bg: '#F2C14E', fg: '#2A2A34' }); const D = []; const R = rng(4); for (let i = 0; i < 40; i++) { const g = glowSprite('#D8D0C0', .2 + R() * .3, 0); g.userData.v = [R() * 2 + .5, (R() - .5) * 2, (R() - .2) * 2]; c.add(g); D.push(g); }
    return { update: (u, t2, cam) => { pop(q, u, .1, th - .1, cam); pop(p, u, th, te - .1, cam); pop(ach, u, te, 99, cam); const f = Math.max(0, u - te); D.forEach((g) => { const [vx, vy, vz] = g.userData.v; g.position.set(-3.7 + vx * f, 2.6 + vy * f * .5, -1.1 + vz * f * .6); g.material.opacity = u > te ? Math.max(0, .7 - f * .25) : 0; }); shake(cam, u > te && u < tr + 1.2 ? .05 * Math.max(0, 1 - (u - te) * .5) : 0, u); } }; },
  c: [[.6, 1.9, 3.2], [-2.4, 1.8, -.8], [.2, 1.9, 2.8], [-2.4, 1.8, -.8]], range: 3 }; });
// 19. Primera hora. Silencio. Mucho silencio. Cada uno en su litera, mirando la pared
Q(19, (d, a) => { const ts = R0(a, 'silencio'), tp = R0(a, 'pared'); return { ...BK(), fov: 34, atores: [LU({ x: -3.2, z: -.7, y: .22, eyes: [[0, 'flat'], [tp, 'lookl']], pose: sitP }), YO({ x: 3.2, z: -.7, y: .22, eyes: [[0, 'flat'], [tp, 'look']], pose: sitP })],
  extra: (c) => { luces(c, .45); const h = lab(c, ['1ª HORA'], 1.6, [0, 2.75, -1.2], { size: 100, w: 600 }); const s = lw(c, ['SILENCIO…'], 2.0, [0, 2.2, -1.2], { size: 100, w: 800 }); const ck = clock(.6, 10); ck.position.set(0, 1.6, -3.35); c.add(ck); return { update: (u, t2, cam) => { pop(h, u, .1, 99, cam); pop(s, u, ts, 99, cam); ck.set(10 + u / 12); } }; },
  c: [[0, 1.8, 6.4], [0, 1.2, -1.0], [0, 1.6, 4.6], [0, 1.2, -1.0]], range: 4, blur: 6 }; });
// 20. Inventario: 6 latas de judías de 1987, radio que no funciona, linterna, baraja sin ases, generador
Q(20, (d, a) => { const tl = R0(a, 'latas'), tr = R0(a, 'radio'), tn = R0(a, 'linterna'), tb = R0(a, 'baraja'), tg = R0(a, 'generador'); return { ...BK(), fov: 30, atores: [YO({ x: -.5, z: -.45, eyes: [[0, 'down']], pose: (k) => k.pose({ armL: [40, 50], armR: [40, 50] }) }), LU({ x: .6, z: -.45, eyes: [[0, 'down'], [tl + 2, 'smug']] })],
  extra: (c) => { luces(c, .5); const cans = []; for (let i = 0; i < 6; i++) { const l = lata(); l.position.set(-.55 + (i % 3) * .2, .78, .2 + Math.floor(i / 3) * .2); c.add(l); cans.push(l); } const rd = radio(); rd.position.set(.35, .78, .25); rd.scale.setScalar(.7); c.add(rd); const ln = linterna(); ln.position.set(.25, .83, .55); ln.rotation.y = 1.2; c.add(ln); ln.userData.on(0); const bj = baraja(); bj.position.set(.55, .78, .5); c.add(bj);
    const L = [lw(c, ['6 LATAS DE JUDÍAS · 1987'], 1.9, [-.6, 1.6, .5]), lw(c, ['RADIO (NO FUNCIONA)'], 1.6, [.6, 1.85, .5]), lw(c, ['LINTERNA'], .9, [.2, 1.35, .7]), lw(c, ['BARAJA SIN ASES'], 1.4, [.8, 1.55, .7]), lab(c, ['GENERADOR: LUZ PARA UNAS HORAS'], 2.6, [1.6, 2.2, -2.4])];
    return { update: (u, t2, cam) => { cans.forEach((l, i) => (l.visible = u > tl - .2 + i * .1)); rd.visible = u > tr - .2; ln.visible = u > tn - .2; bj.visible = u > tb - .2; [tl, tr, tn, tb, tg].forEach((t0, i) => pop(L[i], u, t0, i < 4 ? [tr, tn, tb, tg, 99][i] - .05 : 99, cam)); c.userData.gen.material.emissiveIntensity = u > tg ? 1 + 2 * Math.abs(Math.sin(u * 4)) : 1; } }; },
  cam: [[0, [0, 2.4, 2.4], [0, .9, .3]], [d * .78, [0, 2.2, 2.2], [0, .9, .3]], [d * .86, [1.2, 2.2, 2.0], [1.8, 1.0, -2.4]], [d, [1.2, 2.2, 1.9], [1.8, 1.0, -2.4]]], f: [[0, 2.4], [d * .8, 2.4], [d * .86, 4.5], [d, 4.5]], range: 1.6 }; });
// 21. Lucía lee la fecha de las latas: "si nos morimos, no será de hambre. Será de judías". Y se ríe. El búnker ya no parece tan frío
Q(21, (d, a) => { const tb = R0(a, 'bueno'), ts = R0(a, 'sera', tb + 2), tr = R0(a, 'rie'), tf = R0(a, 'frio'); let rb; return { ...BK(), fov: 30, atores: [LU({ x: .5, z: -.2, eyes: [[0, 'down'], [tb, 'smug'], [tr, 'happy']], pose: (k, u) => (u > tr ? k.pose({ armL: [60, 70], armR: [12, 8], bob: Math.abs(Math.sin(u * 9)) * .03 }) : k.pose({ armL: [60, 70], armR: [12, 8] })) }), YO({ x: -.6, z: -.1, eyes: [[0, 'look'], [tr + .4, 'happy']], pose: (k, u) => k.pose({ bob: u > tr + .4 ? Math.abs(Math.sin(u * 9)) * .03 : 0 }) })],
  extra: (c, s, A) => { const lt = lata(); c.add(lt); const b = hab(c, ['SI NOS MORIMOS, NO SERÁ', 'DE HAMBRE…'], 2.0, [.7, 2.75, -.2], 56), b2 = hab(c, '¡SERÁ DE JUDÍAS!', 1.9, [.7, 2.75, -.2], 64); const warm = calida(c, [0, 2.4, 1.2], 0, 8);
    return { update: (u, t2, cam) => { luces(c, .45); const p = hand(A[0]); lt.position.set(p.x - .05, p.y - .12, p.z + .05); pop(b, u, tb, ts - .1, cam); pop(b2, u, ts, tr + 1.5, cam); warm.intensity = 9 * smooth(tf - 1, tf + .5, u); } }; },
  c: [[-.6, 1.6, 3.4], [0, 1.4, -.2], [0, 1.6, 2.8], [0, 1.4, -.2]], range: 2.4, lookFn: (u) => ({ exposure: 1.0 + .08 * smooth(tf - 1, tf + .5, u) }) }; });
// 22. Pero tienes un problema: el corazón a mil, te sudan las manos. ¿Es por estar encerrado... o por ella?
Q(22, (d, a) => { const tm = R0(a, 'mil'), ts = R0(a, 'sudan'), te = R0(a, 'encerrado'), tl = R0(a, 'ella'); let rb; return { ...BK(), fov: 26, atores: [YO({ x: 0, z: 0, eyes: [[0, 'look'], [tm, 'wide'], [tl, 'heart']], pose: (k, u) => k.pose({ armL: [30, 40], armR: [30, 40], bob: Math.abs(Math.sin(u * 14)) * .01 }) }), LU({ x: 2.2, z: -1.6, eyes: [[0, 'down']] })],
  extra: (c, s, A) => { luces(c, .45); rb = rubor(A[0]); const ht = cut(wordTex('♥', '#E8344A', 170), .5, .4); ht.renderOrder = 6; c.add(ht); const dr = [0, 1, 2].map((i) => { const g = glowSprite('#9FD8FF', .14, 0); c.add(g); return g; });
    const L = [lab(c, ['CORAZÓN A MIL'], 1.5, [-.9, 2.5, -.2], { fg: '#FF6A7A' }), lw(c, ['MANOS SUDANDO'], 1.5, [.9, 2.25, -.2]), lab(c, ['¿EL BÚNKER… O ELLA?'], 2.0, [0, 2.85, -.2])];
    return { update: (u, t2, cam) => { const b = 1 + .25 * Math.abs(Math.sin(u * (u > tm ? 14 : 5))); ht.position.set(-.05, 1.25, .2); ht.scale.setScalar(u > tm - .5 ? b : .001); pointer(ht, cam); dr.forEach((g, i) => { const f = (u * .8 + i / 3) % 1; g.position.set(.2 + i * .08, 1.85 - f * .6, .1); g.material.opacity = u > ts ? Math.sin(f * Math.PI) : 0; }); rb(smooth(tl - .3, tl + .3, u)); pop(L[0], u, tm, te - .1, cam); pop(L[1], u, ts, te - .1, cam); pop(L[2], u, te, 99, cam); } }; },
  c: [[0, 1.6, 2.8], [0, 1.45, 0], [0, 1.6, 2.2], [0, 1.5, 0]], range: 1.6 }; });
// 23. Y eso tiene nombre
Q(23, (d) => ({ amb: 'lab', fov: 30, atores: [], extra: (c) => { const t = lab(c, ['ESO TIENE NOMBRE…'], 2.4, [0, 1.8, -1]); return { update: (u, t2, cam) => pop(t, u, 0, 99, cam) }; }, c: [[0, 1.8, 3.6], [0, 1.8, -1], [0, 1.8, 3.0], [0, 1.8, -1]], k: 1, range: 3 }));
// 24. 1974: Dutton y Aron, un puente colgante estrecho que se balancea a 70 metros sobre un río
Q(24, (d, a) => { const tp = R0(a, 'puente'), tm = R0(a, 'metros'); return { amb: 'puente', fov: 34, atores: [PROF({ x: -8.0, z: 1.4, eyes: [[0, 'look']], pose: (k, u) => (u > tp ? point(k) : k.pose()) }), PROF({ x: -8.8, z: .6, hair: 'old', hairc: '#8A7A6A', eyes: [[0, 'look']] }), EXTRA(1, { x: -2, z: 0, move: (u) => { const x = lerp(-5.5, 1.5, smooth(1, d, u)); return [x, -.55 * (1 - (x / 6) ** 2) + .03, 0]; }, eyes: [[0, 'wide']], pose: (k, u) => { k.walk(u * .7, .6); k.root.rotation.z = Math.sin(u * 3) * .06; } })],
  extra: (c) => { const t = lab(c, ['70 METROS'], 1.3, [2.6, -1.5, .8], { fg: '#FF8A5A' }); const ar = lab(c, ['↓'], .35, [2.6, -2.2, .8], { size: 110, w: 200, h: 150 }); return { update: (u, t2, cam) => { pop(t, u, tm, 99, cam); pop(ar, u, tm, 99, cam); } }; },
  c: [[-11, 2.6, 9.5], [-4, .4, 0], [-2, 1.6, 9.0], [0, -1.0, 0]], k: 1, range: 9, blur: 4 }; });
// 25. Al final del puente, una chica: encuesta y su número de teléfono "por si querían saber más del estudio"
Q(25, (d, a) => { const te = R0(a, 'encuesta'), tn = R0(a, 'numero'); return { amb: 'puente', fov: 30, atores: [EXTRA(0, { x: 6.9, z: .1, talk: [[0, 1.5], [tn - .5, tn + 2.5]], eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [50, 60], armR: [u > tn ? 85 : 12, 0] }) }), EXTRA(1, { x: 5.6, z: .1, move: (u) => { const x = lerp(3.5, 5.7, smooth(0, 1.6, u)); return [x, x < 6 ? -.55 * (1 - (x / 6) ** 2) + .03 : 0, 0]; }, eyes: [[0, 'wide'], [tn + .5, 'heart']], pose: (k, u) => (u < 1.6 ? k.walk(u) : k.pose({ armL: [12, 8], armR: [u > tn + .4 ? 70 : 12, 0] })) })],
  extra: (c) => { const cl = box(.24, .32, .02, std('#C9A06A'), 7.2, 1.0, .25); c.add(cl); const pap = lw(c, ['SU NÚMERO DE TELÉFONO'], 1.6, [6.4, 2.35, .3]); const pp = box(.18, .12, .005, std('#FBF7EC'), 6.4, 1.1, .3, false); c.add(pp); const e = lw(c, ['ENCUESTA'], 1.0, [7.2, 2.35, .3]);
    return { update: (u, t2, cam) => { pop(e, u, te, tn - .1, cam); pop(pap, u, tn, 99, cam); pp.visible = u > tn; } }; },
  c: [[4.6, 1.8, 4.6], [6.4, 1.2, 0], [5.2, 1.7, 3.8], [6.4, 1.2, 0]], k: 1, range: 4 }; });
// 26. Hicieron lo mismo en un puente normal, bajito y firme
Q(26, (d) => ({ amb: 'puente', ambo: { normal: true }, fov: 32, atores: [EXTRA(5, { x: 0, z: 0, y: .42, move: (u) => [0, .42, lerp(2, -1, u / d)], pose: (k, u) => k.walk(u) }), EXTRA(0, { x: .6, z: -3.2, eyes: [[0, 'happy']], pose: (k) => k.pose({ armL: [50, 60] }) })],
  extra: (c) => { const t = lw(c, ['PUENTE NORMAL: BAJITO Y FIRME'], 2.6, [0, 2.6, -1]); return { update: (u, t2, cam) => pop(t, u, .2, 99, cam) }; },
  c: [[4.4, 1.8, 4.4], [0, .8, -.6], [3.6, 1.7, 3.6], [0, .8, -.8]], k: 1, range: 5 }));
// 27. ¿El resultado? Del puente que daba miedo, la mitad la llamaron. Del puente tranquilo, muy pocos
Q(27, (d, a) => { const tm = R0(a, 'mitad'), tt = R0(a, 'tranquilo'); return { amb: 'lab', fov: 30, atores: [],
  extra: (c) => { const mk2 = (x, col) => { const b = box(1.0, 1, .4, std(col, { emissive: col, emissiveIntensity: .25 }), x, 0, -1); c.add(b); return b; }; const b1 = mk2(-1.0, '#E8667F'), b2 = mk2(1.0, '#4A86C7');
    const L = [lw(c, ['PUENTE QUE DA MIEDO'], 1.8, [-1.0, .45, -.6], { size: 56 }), lw(c, ['PUENTE TRANQUILO'], 1.6, [1.0, .45, -.6], { size: 56 }), lab(c, ['LA MITAD LLAMÓ'], 1.6, [-1.0, 3.25, -.8]), lab(c, ['MUY POCOS'], 1.2, [1.0, 1.5, -.8])], tt0 = lab(c, ['¿EL RESULTADO?'], 1.8, [0, 3.6, -1.0]);
    return { update: (u, t2, cam) => { const h1 = 2.4 * smooth(tm - .5, tm + .6, u), h2 = .45 * smooth(tt - .3, tt + .5, u); b1.scale.y = Math.max(.01, h1); b1.position.y = .6 + h1 / 2; b2.scale.y = Math.max(.01, h2); b2.position.y = .6 + h2 / 2; pop(L[0], u, .3, 99, cam); pop(L[1], u, .3, 99, cam); pop(tt0, u, 0, tm - .5, cam); pop(L[2], u, tm + .4, 99, cam); pop(L[3], u, tt + .4, 99, cam); } }; },
  c: [[0, 2.0, 6.6], [0, 1.7, -1], [0, 1.9, 6.0], [0, 1.7, -1]], k: 1, range: 6 }; });
// 28. El cuerpo no distingue los nervios del miedo de los nervios de alguien que te gusta. El cerebro se confunde
Q(28, (d, a) => { const tm = R0(a, 'miedo'), tg = R0(a, 'gusta'), tc = R0(a, 'corazon'), tb = R0(a, 'cerebro'); return { amb: 'lab', fov: 30, atores: [EXTRA(1, { x: 0, z: 0, eyes: [[0, 'look'], [tm, 'wide'], [tg, 'heart'], [tb, 'flat']] })],
  extra: (c) => { const h1 = cut(wordTex('♥', '#7FA8E8', 170), .6, .48), h2 = cut(wordTex('♥', '#E8667F', 170), .6, .48); [h1, h2].forEach((h) => { h.renderOrder = 6; c.add(h); }); const L1 = lw(c, ['MIEDO'], .9, [-1.2, 1.9, 0]), L2 = lw(c, ['ME GUSTA'], 1.1, [1.2, 1.9, 0]), eq = lab(c, ['LATEN IGUAL'], 1.4, [0, 2.75, 0]), cb = lab(c, ['EL CEREBRO SE CONFUNDE'], 2.4, [0, 2.75, 0], { fg: '#9FD8FF' }); const q = lab(c, ['?'], .4, [0, 2.15, .1], { size: 110, w: 200, h: 150 });
    return { update: (u, t2, cam) => { const mrg = smooth(tc - .3, tc + .6, u); const b = 1 + .2 * Math.abs(Math.sin(u * 10)); h1.position.set(lerp(-1.2, -.1, mrg), 1.35, .1); h2.position.set(lerp(1.2, .1, mrg), 1.35, .1); h1.scale.setScalar(u > tm - .2 ? b : .001); h2.scale.setScalar(u > tg - .2 ? b : .001); pop(L1, u, tm, tc, cam); pop(L2, u, tg, tc, cam); pop(eq, u, tc, tb - .1, cam); pop(cb, u, tb, 99, cam); pop(q, u, tb + .3, 99, cam); } }; },
  c: [[0, 1.7, 4.2], [0, 1.5, 0], [0, 1.6, 3.6], [0, 1.5, 0]], k: 1, range: 3 }; });
// 29. O sea, que un búnker cerrado es, básicamente, el puente colgante definitivo
Q(29, (d, a) => { const tp = R0(a, 'puente'); return { ...BK(), fov: 32, atores: [YO({ x: -.6, z: -.2, eyes: [[0, 'look']] }), LU({ x: .6, z: -.3, eyes: [[0, 'lookl']] })],
  extra: (c) => { luces(c, .45); const t = lab(c, ['BÚNKER CERRADO ='], 1.9, [0, 3.0, -.8]); const t2 = lab(c, ['EL PUENTE COLGANTE DEFINITIVO'], 2.8, [0, 2.55, -.8], { fg: '#FF8A5A' }); return { update: (u, t3, cam) => { pop(t, u, .2, 99, cam); pop(t2, u, tp, 99, cam); } }; },
  c: [[0, 1.8, 5.0], [0, 1.5, -.6], [0, 1.7, 4.0], [0, 1.5, -.6]], range: 3 }; });
// 30. Segunda hora. El generador hace un ruido raro. Y se apaga. Oscuridad total
Q(30, (d, a) => { const tr = R0(a, 'ruido'), ta = R0(a, 'apaga'), to = R0(a, 'oscuridad'); return { ...BK(), fov: 32, atores: [YO({ x: .6, z: -1.6, eyes: [[0, 'look'], [tr, 'wide']] }), LU({ x: -.3, z: -1.2, eyes: [[0, 'look'], [tr, 'wide']] })],
  extra: (c) => { const h = lab(c, ['2ª HORA'], 1.1, [1.4, 2.9, -2.2]); const o = lw(c, ['OSCURIDAD TOTAL'], 1.8, [.6, 2.2, -1.6]); const br = lab(c, ['¡BRRR…!'], 1.1, [2.6, 1.4, -2.4], { bg: '#FBF7EC', fg: '#2A2A34' });
    return { update: (u, t2, cam) => { const flick = u > ta - .6 && u < ta ? (Math.sin(u * 50) > 0 ? .45 : .1) : u >= ta ? 0 : .45; luces(c, flick); c.userData.gen.material.emissiveIntensity = u < ta ? 2.5 : 0; pop(h, u, .1, tr - .1, cam); pop(br, u, tr, ta, cam); pop(o, u, to, 99, cam); shake(cam, u > tr && u < ta ? .01 : 0, u); } }; },
  c: [[3.2, 1.8, 2.0], [1.4, 1.2, -2.2], [2.6, 1.7, 1.6], [1.0, 1.2, -2.0]], range: 3, lookFn: (u) => ({ exposure: u > ta ? .7 : 1.0, vig: .6 }) }; });
// 31. A oscuras: "Oye... ¿puedes encender la linterna? Es que me da miedo la oscuridad"
Q(31, (d, a) => { const tp = R0(a, 'puedes'), te = R0(a, 'es'); return { ...BK({ dark: true }), fov: 30, atores: [LU({ x: -.2, z: -.4, eyes: [[0, 'small'], [te, 'sad']] }), YO({ x: 1.0, z: -.2, eyes: [[0, 'small']] })],
  extra: (c) => { calida(c, [.4, 2.0, 1.4], 1.2, 6); const b1 = hab(c, ['OYE… ¿PUEDES ENCENDER', 'LA LINTERNA?'], 1.9, [-.3, 2.3, -.4], 54), b2 = hab(c, ['ES QUE ME DA MIEDO', 'LA OSCURIDAD'], 1.9, [-.3, 2.3, -.4], 54); return { update: (u, t2, cam) => { pop(b1, u, tp - .6, te - .1, cam); pop(b2, u, te, 99, cam); } }; },
  c: [[.4, 1.6, 3.2], [.2, 1.3, -.4], [.3, 1.6, 2.6], [.2, 1.3, -.4]], range: 2, look: DARK }; });
// 32. Lucía. La que nunca tiene miedo de nada. La que tocó la palanca roja (recuerdo)
Q(32, (d, a) => { const tn = R0(a, 'nunca'), tt = R0(a, 'toco'); return { ...BK({ museo: true }), fov: 30, atores: [LU({ x: 1.35, z: -2.75, eyes: [[0, 'smug']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > tt ? 120 : 20, 10] }) })],
  extra: (c) => { lever(c, 0); const L1 = lw(c, ['NUNCA TIENE MIEDO DE NADA'], 2.4, [.8, 2.7, -2.6]), L2 = lab(c, ['LA DE LA PALANCA ROJA'], 2.2, [.8, 2.7, -2.6], { fg: '#FF6A5A' }); return { update: (u, t2, cam) => { lever(c, smooth(tt + .3, tt + .8, u)); pop(L1, u, tn, tt - .1, cam); pop(L2, u, tt, 99, cam); } }; },
  c: [[2.6, 1.7, .6], [1.0, 1.4, -2.8], [2.3, 1.6, .2], [1.1, 1.4, -2.8]], range: 2, look: { exposure: 1.05, bloom: .5, vig: .7 } }; });
// 33. Enciendes la linterna. Y le dices algo que nunca le habías dicho a nadie: te dan miedo las alturas
Q(33, (d, a) => { const ta = R0(a, 'alturas'); return { ...BK({ dark: true }), fov: 30, atores: [YO({ x: .5, z: -.2, eyes: [[0, 'look'], [ta - 1, 'sad']], pose: (k) => k.pose({ armL: [12, 8], armR: [60, 40] }) }), LU({ x: -.6, z: -.4, eyes: [[0, 'small'], [.6, 'look']] })],
  extra: (c, s, A) => { const L = linterna(); c.add(L); const w = calida(c, [0, 1.6, .6], 0, 6); const t = lab(c, ['MIEDO A LAS ALTURAS'], 1.8, [0, 2.25, -.4]);
    return { update: (u, t2, cam) => { linEnMano(L, A[0]); L.rotation.y = Math.PI; L.userData.on(u > .3 ? 1 : 0); w.intensity = u > .3 ? 4 : 0; pop(t, u, ta, 99, cam); } }; },
  c: [[0, 1.6, 3.2], [0, 1.35, -.3], [0, 1.6, 2.6], [0, 1.35, -.3]], range: 2, look: DARK }; });
// 34. Que en la excursión de la noria del año pasado fingiste que te dolía el estómago para no subir (recuerdo)
Q(34, (d, a) => { const te = R0(a, 'estomago'); return { amb: 'noria', fov: 34, atores: [YO({ x: 0, z: 1, eyes: [[0, 'look'], [te - .8, 'sad']], pose: (k, u) => k.pose({ armL: [40, 60], armR: [40, 60], lean: 8 }) }), EXTRA(2, { x: 1.4, z: -1.4, move: (u) => [1.4 + u * .3, 0, -1.4 - u * .2], pose: (k, u) => k.walk(u) }), EXTRA(3, { x: 2.2, z: -1.0, move: (u) => [2.2 + u * .3, 0, -1.0 - u * .2], pose: (k, u) => k.walk(u + 1) })],
  extra: (c) => { const t = lab(c, ['LA NORIA · EL AÑO PASADO'], 2.4, [0, 3.0, 0]); const b = hab(c, '¡ME DUELE EL ESTÓMAGO!', 2.0, [-.6, 2.35, 1], 58); return { update: (u, t2, cam) => { c.userData.wheel.rotation.z = u * .1; pop(t, u, .1, te - .2, cam); pop(b, u, te - .3, 99, cam); } }; },
  c: [[-1.5, 1.8, 6.0], [.8, 2.0, -1], [-1.0, 1.7, 5.2], [.6, 1.8, -1]], k: 1, range: 6, blur: 5, look: { exposure: 1.05, vig: .65 } }; });
// 35. Ella se ríe: "¿Lo del estómago era mentira?". Era mentira
Q(35, (d, a) => { const te = R0(a, 'era', 1.5); return { ...BK({ dark: true }), fov: 30, atores: [LU({ x: -.5, z: -.3, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ bob: Math.abs(Math.sin(u * 9)) * .03 }) }), YO({ x: .6, z: -.2, eyes: [[0, 'smug'], [te, 'shut']], pose: (k) => k.pose({ armL: [12, 8], armR: [60, 40] }) })],
  extra: (c, s, A) => { const L = linterna(); c.add(L); calida(c, [0, 1.6, .6], 4, 6); const q = hab(c, ['¿LO DEL ESTÓMAGO', 'ERA MENTIRA?'], 1.7, [-.6, 2.3, -.3], 56); const m = lw(c, ['ERA MENTIRA'], 1.3, [.6, 2.2, -.2]);
    return { update: (u, t2, cam) => { linEnMano(L, A[1]); L.rotation.y = Math.PI; L.userData.on(1); pop(q, u, .1, te - .1, cam); pop(m, u, te, 99, cam); } }; },
  c: [[0, 1.6, 3.2], [0, 1.35, -.3], [0, 1.6, 2.7], [0, 1.35, -.3]], range: 2, look: DARK }; });
// 36. En un cajón: un cuaderno viejo de los soldados que vigilaban el búnker hace 40 años
Q(36, (d, a) => { const tc = R0(a, 'cuaderno'), th = R0(a, 'hace'); return { ...BK({ dark: true }), fov: 30, atores: [YO({ x: -.5, z: .9, eyes: [[0, 'down'], [tc, 'wide']], pose: (k) => k.pose({ armL: [12, 8], armR: [70, 40] }) }), LU({ x: .55, z: 1.0, eyes: [[0, 'down'], [tc, 'wide']] })],
  extra: (c, s, A) => { const L = linterna(); c.add(L); calida(c, [0, 1.6, 1.4], 3, 6); const dr = new THREE.Group(); dr.add(box(.7, .25, .5, std('#4A3A2A'), 0, 0, 0)); dr.position.set(0, .6, .5); c.add(dr); const cu = cuaderno(); cu.position.set(0, .74, .45); c.add(cu); const g = glowSprite('#FFE8B0', .8, 0); g.position.set(0, .9, .5); c.add(g);
    const t = lab(c, ['CUADERNO DE LOS SOLDADOS'], 2.2, [0, 2.2, .2]), t2 = lw(c, ['HACE 40 AÑOS'], 1.3, [0, 1.8, .4]);
    return { update: (u, t2b, cam) => { linEnMano(L, A[0]); L.rotation.set(-.6, Math.PI, 0); L.userData.on(1); dr.position.z = .5 + .35 * smooth(.3, 1.2, u); cu.position.y = .74 + .2 * smooth(tc, tc + .6, u); cu.position.z = .7; g.material.opacity = .5 * smooth(tc, tc + .5, u); pop(t, u, tc, 99, cam); pop(t2, u, th, 99, cam); } }; },
  c: [[0, 2.0, 3.6], [0, 1.3, .3], [0, 1.9, 3.1], [0, 1.3, .3]], range: 2.2, look: DARK }; });
// 37. Y en la última página, alguien escribió una lista de preguntas: "Para pasar las noches largas"
Q(37, (d, a) => { const tl = R0(a, 'lista'); return { ...BK({ dark: true }), fov: 26, atores: [],
  extra: (c) => { const cu = cuaderno(drawLista); cu.position.set(0, .78, .3); cu.scale.setScalar(1.6); c.add(cu); calida(c, [0, 1.6, .8], 5, 4); const t = lab(c, ['«PARA PASAR LAS NOCHES LARGAS»'], 2.0, [0, 1.6, .1], { size: 60, w: 1100 }); return { update: (u, t2, cam) => pop(t, u, tl, 99, cam) }; },
  c: [[0, 2.0, 1.2], [0, .78, .3], [0, 1.8, 1.0], [0, .78, .3]], range: 1.2, look: DARK }; });
// 38. 1997: el mismo Arthur Aron. Parejas de desconocidos, 36 preguntas en unos 45 minutos
Q(38, (d, a) => { const tp = R0(a, 'parejas'), t36 = R0(a, '36'), t45 = R0(a, '45'); return { amb: 'aula', fov: 32, atores: [EXTRA(0, { x: -1.6, z: 0, y: -.4, eyes: [[0, 'look']], pose: sitP }), EXTRA(1, { x: -.7, z: 0, y: -.4, eyes: [[0, 'lookl']], pose: sitP }), EXTRA(3, { x: .7, z: 0, y: -.4, eyes: [[0, 'look']], pose: sitP }), EXTRA(4, { x: 1.6, z: 0, y: -.4, eyes: [[0, 'lookl']], pose: sitP }), PROF({ x: 2.8, z: -1.6, eyes: [[0, 'look']] })],
  extra: (c) => { for (const x of [-1.15, 1.15]) c.add(box(.6, .06, .6, std('#8E6242'), x, .55, .05)); const t = lab(c, ['36 PREGUNTAS'], 1.6, [0, 2.6, -.6]); const ck = clock(.55, 0, {}); ck.position.set(1.8, 2.6, -.6); c.add(ck); const m = lw(c, ['45 MINUTOS'], 1.2, [1.8, 2.0, -.6]); const p = lw(c, ['PAREJAS DE DESCONOCIDOS'], 2.2, [0, 2.6, -.6]);
    return { update: (u, t2, cam) => { pop(p, u, tp, t36 - .1, cam); pop(t, u, t36, 99, cam); ck.visible = u > t45; ck.set(12 + .75 * smooth(t45, t45 + 2, u)); pop(m, u, t45, 99, cam); } }; },
  c: [[0, 2.0, 5.0], [0, 1.2, -.4], [0, 1.9, 4.4], [0, 1.2, -.4]], range: 3 }; });
// 39. Empezaban fáciles y cada vez eran más personales. Al final, tan cercanas como amigos de toda la vida
Q(39, (d, a) => { const tp = R0(a, 'personales'), ta = R0(a, 'amigos'); return { amb: 'aula', fov: 30, atores: [EXTRA(0, { x: -.9, z: 0, y: -.4, eyes: [[0, 'look'], [tp, 'happy']], move: (u) => [lerp(-.9, -.45, smooth(tp, ta, u)), -.4, 0], pose: sitP }), EXTRA(1, { x: .9, z: 0, y: -.4, eyes: [[0, 'lookl'], [tp, 'happy']], move: (u) => [lerp(.9, .45, smooth(tp, ta, u)), -.4, 0], pose: sitP })],
  extra: (c) => { const st = [lw(c, ['FÁCILES'], 1.0, [0, 1.7, -.4]), lw(c, ['MÁS PERSONALES'], 1.6, [0, 2.2, -.4]), lab(c, ['COMO AMIGOS DE TODA LA VIDA'], 2.6, [0, 2.75, -.4])]; const ht = cut(wordTex('♥', '#E8667F', 170), .35, .28); ht.renderOrder = 6; c.add(ht);
    return { update: (u, t2, cam) => { pop(st[0], u, .2, 99, cam); pop(st[1], u, tp - .6, 99, cam); pop(st[2], u, ta, 99, cam); ht.visible = u > ta; ht.position.set(0, 1.35 + Math.sin(u * 3) * .05, 0); pointer(ht, cam); } }; },
  c: [[0, 1.6, 3.6], [0, 1.4, -.2], [0, 1.6, 3.0], [0, 1.5, -.2]], range: 2.4 }; });
// 40. Lucía abre el cuaderno: "Pregunta uno: ¿cuál sería tu día perfecto?"
Q(40, (d, a) => { const tp = R0(a, 'pregunta'); return { ...BK({ dark: true, mesa: false }), fov: 30, atores: [LU({ x: -.5, z: -.2, y: -.4, eyes: [[0, 'down'], [tp, 'look']], pose: (k) => { sitP(k); k.pose({ armL: [50, 60], armR: [50, 60] }); hideLegs(k); } }), YO({ x: .55, z: -.2, y: -.4, eyes: [[0, 'look']], pose: sitP })],
  extra: (c, s, A) => { const L = linterna(); L.position.set(0, .12, .4); L.rotation.y = Math.PI * .9; c.add(L); L.userData.on(1); calida(c, [0, 1.2, .9], 4, 5); const cu = cuaderno(drawLista); c.add(cu); const t = hab(c, ['PREGUNTA 1:', '¿CUÁL SERÍA TU DÍA PERFECTO?'], 2.6, [-.4, 2.25, -.2], 54);
    return { update: (u, t2, cam) => { const p = hand(A[0]); cu.position.set(p.x + .15, p.y - .05, p.z + .1); cu.rotation.x = 1.0; pop(t, u, tp, 99, cam); } }; },
  c: [[0, 1.4, 3.2], [0, .9, -.2], [0, 1.4, 2.7], [0, .9, -.2]], range: 2, look: DARK }; });
// 41. Tú contestas: "Hoy no, desde luego"
Q(41, (d, a) => ({ ...BK({ dark: true, mesa: false }), fov: 28, atores: [LU({ x: -.5, z: -.2, y: -.4, eyes: [[0, 'look'], [1.6, 'happy']], pose: sitP }), YO({ x: .55, z: -.2, y: -.4, eyes: [[0, 'smug']], pose: sitP })],
  extra: (c) => { const L = linterna(); L.position.set(0, .12, .4); L.rotation.y = Math.PI * .9; c.add(L); L.userData.on(1); calida(c, [0, 1.2, .9], 4, 5); const b = hab(c, 'HOY NO, DESDE LUEGO', 1.9, [.6, 1.95, -.2], 60); return { update: (u, t2, cam) => pop(b, u, .3, 99, cam) }; },
  c: [[.4, 1.3, 2.8], [.2, .9, -.2], [.3, 1.3, 2.4], [.2, .9, -.2]], range: 2, look: DARK }));
// 42. El suyo: un día de lluvia, en casa, viendo una peli de miedo
Q(42, (d, a) => { const tl = R0(a, 'lluvia'), tp = R0(a, 'peli'); return { ...BK({ dark: true, mesa: false }), fov: 30, atores: [LU({ x: -.5, z: -.2, y: -.4, eyes: [[0, 'happy']], pose: sitP }), YO({ x: .55, z: -.2, y: -.4, eyes: [[0, 'look']], pose: sitP })],
  extra: (c) => { const L = linterna(); L.position.set(0, .12, .4); L.rotation.y = Math.PI * .9; c.add(L); L.userData.on(1); calida(c, [0, 1.2, .9], 4, 5);
    const T = canvasTex(640, 400, (x) => { x.clearRect(0, 0, 640, 400); x.fillStyle = '#FBF7EC'; x.strokeStyle = '#2A2A34'; x.lineWidth = 8; x.beginPath(); x.ellipse(320, 170, 300, 160, 0, 0, 7); x.fill(); x.stroke(); for (const [cx, cy, r] of [[190, 350, 20], [150, 385, 11]]) { x.beginPath(); x.arc(cx, cy, r, 0, 7); x.fill(); x.stroke(); } x.fillStyle = '#6A8AB8'; x.fillRect(110, 70, 150, 150); x.strokeStyle = '#B8D0F0'; x.lineWidth = 3; for (let i = 0; i < 14; i++) { x.beginPath(); const px = 120 + (i * 37) % 140, py = 80 + (i * 53) % 120; x.moveTo(px, py); x.lineTo(px - 6, py + 22); x.stroke(); } x.strokeStyle = '#2A2A34'; x.lineWidth = 6; x.strokeRect(110, 70, 150, 150); x.fillStyle = '#2A2A34'; x.fillRect(320, 90, 200, 130); x.fillStyle = '#F4F4F4'; x.beginPath(); x.arc(420, 150, 34, Math.PI, 0); x.lineTo(454, 200); x.lineTo(386, 200); x.fill(); x.fillStyle = '#2A2A34'; x.beginPath(); x.arc(408, 148, 6, 0, 7); x.arc(432, 148, 6, 0, 7); x.fill(); x.fillStyle = '#C9361F'; x.fillRect(300, 240, 240, 40); });
    const n = cut(T, 1.9, 1.19, { blend: true }); n.position.set(-.9, 2.0, -.3); n.renderOrder = 5; c.add(n); const t = lw(c, ['LLUVIA + PELI DE MIEDO'], 2.0, [-.9, 2.85, -.3]); return { update: (u, t2, cam) => { pop(n, u, tl - .4, 99, cam); pop(t, u, tp, 99, cam); } }; },
  c: [[-.2, 1.5, 3.4], [-.4, 1.4, -.2], [-.2, 1.5, 3.0], [-.4, 1.4, -.2]], range: 2.4, look: DARK }; });
// 43. Pregunta 7. Pregunta 12. Pregunta 20
Q(43, (d, a) => { const T = [R0(a, '7'), R0(a, '12'), R0(a, '20')]; return { ...BK({ dark: true, mesa: false }), fov: 32, atores: [LU({ x: -.5, z: -.2, y: -.4, eyes: [[0, 'look']], talk: [[0, d]], pose: sitP }), YO({ x: .55, z: -.2, y: -.4, eyes: [[0, 'happy']], talk: [[1, 2]], pose: sitP })],
  extra: (c) => { const L = linterna(); L.position.set(0, .12, .4); L.rotation.y = Math.PI * .9; c.add(L); L.userData.on(1); calida(c, [0, 1.2, .9], 4, 5); const P = ['PREGUNTA 7', 'PREGUNTA 12', 'PREGUNTA 20'].map((s, i) => lw(c, [s], 1.3, [-1.3 + i * 1.3, 2.0 + (i % 2) * .35, -.6])); return { update: (u, t2, cam) => P.forEach((p, i) => pop(p, u, T[i], 99, cam)) }; },
  c: [[0, 1.4, 3.6], [0, 1.2, -.3], [0, 1.4, 3.2], [0, 1.2, -.3]], range: 2.4, look: DARK }; });
// 44. Lucía quiere ser bióloga marina, tiene un perro que se llama Calcetín, se cortó el flequillo ella sola
Q(44, (d, a) => { const tb = R0(a, 'biologa'), tp = R0(a, 'perro'), tf = R0(a, 'flequillo'); return { ...BK({ dark: true, mesa: false }), fov: 30, atores: [LU({ x: -.5, z: -.2, y: -.4, eyes: [[0, 'happy']], talk: [[0, d]], pose: sitP }), { tipo: 'delfin', x: -1.6, z: -.8, y: 1.6, s: .7 }, { tipo: 'perro', x: .4, z: -.9, y: 0, s: .55 }],
  extra: (c, s, A) => { const L = linterna(); L.position.set(.3, .12, .4); L.rotation.y = Math.PI * .9; c.add(L); L.userData.on(1); calida(c, [0, 1.4, 1.0], 5, 6); const T = [lw(c, ['BIÓLOGA MARINA'], 1.5, [-1.6, 2.2, -.8]), lw(c, ['SU PERRO: CALCETÍN'], 1.7, [.6, 1.25, -.6]), lw(c, ['SE CORTÓ EL FLEQUILLO SOLA'], 2.1, [-.4, 2.05, -.2])];
    return { update: (u, t2, cam) => { A[1].root.visible = u > tb; A[1].root.position.y = 1.6 + Math.sin(u * 3) * .1; A[2].root.visible = u > tp; pop(T[0], u, tb, tf - .1, cam); pop(T[1], u, tp, tf - .1, cam); pop(T[2], u, tf, 99, cam); } }; },
  c: [[-.4, 1.5, 3.6], [-.4, 1.2, -.4], [-.4, 1.5, 3.2], [-.4, 1.2, -.4]], range: 2.6, look: DARK }; });
// 45. Y ella se entera de que tú dibujas, que llenas cuadernos enteros y que nunca se los enseñas a nadie
Q(45, (d, a) => { const td = R0(a, 'dibujas'), tc = R0(a, 'cuadernos'), tn = R0(a, 'nunca'); return { ...BK({ dark: true, mesa: false }), fov: 30, atores: [YO({ x: .4, z: -.2, y: -.4, eyes: [[0, 'down'], [tn, 'sad']], talk: [[0, d]], pose: sitP })],
  extra: (c) => { const L = linterna(); L.position.set(-.3, .12, .4); L.rotation.y = Math.PI * 1.1; c.add(L); L.userData.on(1); calida(c, [0, 1.4, 1.0], 5, 6); const st = []; for (let i = 0; i < 7; i++) { const b = box(.5, .05, .36, std(['#5A6A3A', '#8A3A2A', '#3A4F7A', '#C9A06A'][i % 4]), -.6, .03 + i * .055, .3); b.rotation.y = (i % 3) * .15; c.add(b); st.push(b); }
    const T = [lw(c, ['DIBUJAS'], 1.0, [.4, 1.9, -.2]), lw(c, ['CUADERNOS ENTEROS'], 1.7, [-.6, 1.35, .2]), lab(c, ['NUNCA SE LOS ENSEÑAS A NADIE'], 2.3, [0, 2.15, -.2])];
    return { update: (u, t2, cam) => { st.forEach((b, i) => (b.visible = u > tc - .3 + i * .08)); pop(T[0], u, td, 99, cam); pop(T[1], u, tc, 99, cam); pop(T[2], u, tn, 99, cam); } }; },
  c: [[0, 1.5, 3.2], [0, 1.0, -.1], [0, 1.4, 2.8], [0, 1.0, -.1]], range: 2, look: DARK }; });
// 46. "¿Me dibujas algo?". Con la linterna en la boca, la dibujas a ella tocando la palanca roja, con cara de culpable
Q(46, (d, a) => { const tl = R0(a, 'linterna'), tdb = R0(a, 'dibujas', 2), tc = R0(a, 'culpable'); return { ...BK({ dark: true, mesa: false }), fov: 30, atores: [LU({ x: -.6, z: -.3, y: -.4, eyes: [[0, 'happy']], pose: sitP }), YO({ x: .45, z: -.2, y: -.4, eyes: [[0, 'down']], pose: (k, u) => { k.pose({ armL: [40, 60], armR: [45 + Math.sin(u * 10) * 6, 60] }); hideLegs(k); } })],
  extra: (c, s, A) => { const L = linterna(); c.add(L); L.userData.on(1); calida(c, [0, 1.3, .9], 3, 5); const q = hab(c, '¿ME DIBUJAS ALGO?', 1.7, [-.7, 2.2, -.3], 60); const cv = document.createElement('canvas'); cv.width = 500; cv.height = 360; const x = cv.getContext('2d'); const tx = new THREE.CanvasTexture(cv); tx.colorSpace = THREE.SRGBColorSpace; const pg = new THREE.Mesh(new THREE.PlaneGeometry(1.1, .8), new THREE.MeshBasicMaterial({ map: tx, toneMapped: false })); pg.position.set(.3, 1.9, .2); pg.renderOrder = 6; c.add(pg); let lastP = -1;
    return { update: (u, t2, cam) => { const h = A[1].head.getWorldPosition(new THREE.Vector3()); L.position.set(h.x + .12, h.y - .1, h.z + .2); L.rotation.set(.9, Math.PI * .95, 0); pop(q, u, 0, tl - .2, cam); const p = smooth(tdb, tc + .2, u); if (Math.abs(p - lastP) > .02) { lastP = p; x.fillStyle = '#F2E8CC'; x.fillRect(0, 0, 500, 360); drawLucia(x, p); tx.needsUpdate = true; } pg.visible = u > tdb - .2; pointer(pg, cam); } }; },
  c: [[0, 1.5, 3.2], [0, 1.2, -.2], [.1, 1.6, 2.6], [.1, 1.4, -.1]], range: 2, look: DARK }; });
// 47. Se ríe tanto que se le cae la linterna
Q(47, (d) => ({ ...BK({ dark: true, mesa: false }), fov: 30, atores: [LU({ x: -.4, z: -.3, y: -.4, eyes: [[0, 'happy']], pose: (k, u) => { k.pose({ armL: [60, 80], armR: [60, 80], bob: Math.abs(Math.sin(u * 10)) * .04 }); hideLegs(k); } }), YO({ x: .6, z: -.2, y: -.4, eyes: [[0, 'happy']], pose: sitP })],
  extra: (c) => { const L = linterna(); c.add(L); L.userData.on(1); calida(c, [0, 1.2, .9], 2, 5); return { update: (u) => { const f = smooth(.6, 1.3, u); L.position.set(.5 - f * .4, lerp(1.0, .06, f * f), .3 + f * .3); L.rotation.set(f * 6, f * 3, f * 2); } }; },
  c: [[0, 1.4, 3.0], [0, 1.0, -.2], [0, 1.3, 2.6], [0, .8, 0]], range: 2, look: DARK }));
// 48. Lucía coge la radio, golpe, otro golpe y al tercero: chasquido y música. Canciones antiguas de las que escuchaba tu abuela
Q(48, (d, a) => { const g1 = R0(a, 'golpe'), g2 = R0(a, 'golpe', g1 + .3), g3 = R0(a, 'tercero'), tch = R0(a, 'chasquido'), tm = R0(a, 'musica'), tan = R0(a, 'antiguas'); return { ...BK({ dark: true }), fov: 30, atores: [LU({ x: -.3, z: .55, eyes: [[0, 'angry'], [tm, 'happy']], pose: (k, u) => { const hit = [g1, g2, g3].some((t) => u > t - .15 && u < t + .1); k.pose({ armL: [12, 8], armR: [hit ? 60 : 120, 20] }); } }), YO({ x: .9, z: .7, eyes: [[0, 'look'], [tm, 'wide']] })],
  extra: (c, s, A) => { const L = linterna(); L.position.set(-.8, .06, .9); L.rotation.y = .6; c.add(L); L.userData.on(1); calida(c, [0, 1.6, 1.4], 3, 6); const rd = radio(); rd.position.set(.15, .78, .35); c.add(rd); const rl = new THREE.PointLight('#FFB25A', 0, 4, 1.5); rl.position.set(.15, 1.1, .6); c.add(rl); const N = notas(c, 7); const P = [lw(c, ['¡PAM!'], .8, [.0, 1.65, .4]), lw(c, ['¡PAM!'], .8, [.4, 1.75, .4]), lab(c, ['¡CHAS!'], .9, [.2, 1.7, .4])]; const t = lw(c, ['CANCIONES DE LA ABUELA'], 2.0, [.2, 2.55, .2]);
    return { update: (u, t2, cam) => { const on = u > tch; rd.userData.dial.material.emissiveIntensity = on ? 2.5 : .2; rl.intensity = on ? 4 : 0; rd.position.y = .78 + ([g1, g2, g3].some((t) => u > t && u < t + .15) ? .03 : 0); N(u, new THREE.Vector3(.15, 1.0, .35), cam, u > tm); pop(P[0], u, g1, g1 + .6, cam); pop(P[1], u, g2, g2 + .6, cam); pop(P[2], u, tch, tch + .8, cam); pop(t, u, tan, 99, cam); } }; },
  c: [[0, 1.8, 3.2], [.1, 1.1, .3], [0, 1.7, 2.6], [.1, 1.1, .3]], range: 2, look: DARK }; });
// 49. Lucía se levanta: "¿Bailas?"
Q(49, (d) => ({ ...BK({ dark: true }), fov: 30, atores: [LU({ x: -.4, z: 0, eyes: [[0, 'smug']], pose: (k) => k.pose({ armL: [12, 8], armR: [80, 10] }) }), YO({ x: .7, z: .1, eyes: [[0, 'wide']] })],
  extra: (c) => { const rd = radio(); rd.position.set(-1.3, .78, .35); c.add(rd); rd.userData.dial.material.emissiveIntensity = 2.5; const rl = new THREE.PointLight('#FFB25A', 4, 5, 1.5); rl.position.set(-1.0, 1.2, .8); c.add(rl); calida(c, [0, 1.8, 1.4], 3, 6); const b = hab(c, '¿BAILAS?', 1.1, [-.5, 2.2, 0], 80); const N = notas(c, 5); return { update: (u, t2, cam) => { pop(b, u, .1, 99, cam); N(u, new THREE.Vector3(-1.3, 1.0, .35), cam); } }; },
  c: [[0, 1.6, 3.4], [0, 1.3, 0], [0, 1.6, 2.8], [0, 1.3, 0]], range: 2, look: DARK }));
// 50. Tú no bailas. Nunca. Pero nadie te ve. Así que bailas. Fatal. Ella también. Os chocáis con una litera
Q(50, (d, a) => { const tn = R0(a, 'nunca'), ta = R0(a, 'asi'), tf = R0(a, 'fatal'), tc = R0(a, 'chocais'); return { ...BK({ dark: true }), fov: 32, atores: [YO({ x: .6, z: 0, eyes: [[0, 'flat'], [ta, 'happy']], move: (u) => [lerp(.6, 2.5, smooth(tc - .6, tc, u)), 0, lerp(0, -.6, smooth(tc - .6, tc, u))], pose: (k, u) => (u > ta ? dance(k, u, 1.3) : k.pose()) }), LU({ x: -.3, z: 0, eyes: [[0, 'happy']], move: (u) => [lerp(-.3, 1.6, smooth(tc - .6, tc, u)), 0, lerp(0, -.5, smooth(tc - .6, tc, u))], pose: (k, u) => (u > tf ? dance(k, u + 1, 1.2) : wave(k, u)) })],
  extra: (c) => { const rd = radio(); rd.position.set(-1.3, .78, .35); c.add(rd); rd.userData.dial.material.emissiveIntensity = 2.5; const rl = new THREE.PointLight('#FFB25A', 4, 6, 1.5); rl.position.set(-1.0, 1.2, .8); c.add(rl); calida(c, [.5, 2.0, 1.6], 3, 7); const N = notas(c, 6); const T = [lw(c, ['NO BAILAS. NUNCA.'], 1.8, [.6, 2.4, -.2]), lab(c, ['FATAL'], 1.0, [0, 2.7, -.2], { size: 100 }), lab(c, ['¡PUM!'], .9, [2.4, 2.2, -.8], { bg: '#C9361F', fg: '#fff' })];
    return { update: (u, t2, cam) => { N(u, new THREE.Vector3(-1.3, 1.0, .35), cam); pop(T[0], u, .2, ta - .1, cam); pop(T[1], u, tf, tc - .1, cam); pop(T[2], u, tc, tc + 1.4, cam); shake(cam, u > tc && u < tc + .5 ? .04 : 0, u); } }; },
  c: [[0, 1.8, 4.6], [.6, 1.3, -.2], [.8, 1.8, 4.2], [1.2, 1.3, -.4]], range: 3, look: DARK }; });
// 51. Hasta que la radio se vuelve a callar. Esta vez, para siempre
Q(51, (d, a) => { const tc = R0(a, 'callar'); return { ...BK({ dark: true }), fov: 30, atores: [YO({ x: .4, z: 0, eyes: [[0, 'happy'], [tc, 'flat']], pose: (k, u) => (u < tc ? dance(k, u, .6) : k.pose()) }), LU({ x: -.5, z: 0, eyes: [[0, 'happy'], [tc, 'flat']], pose: (k, u) => (u < tc ? dance(k, u + 1, .6) : k.pose()) })],
  extra: (c) => { const rd = radio(); rd.position.set(-1.3, .78, .35); c.add(rd); const rl = new THREE.PointLight('#FFB25A', 4, 6, 1.5); rl.position.set(-1.0, 1.2, .8); c.add(rl); calida(c, [.5, 2.0, 1.6], 2.5, 6); const N = notas(c, 5); const t = lw(c, ['SILENCIO. PARA SIEMPRE.'], 2.0, [0, 2.2, -.2]);
    return { update: (u, t2, cam) => { const on = u < tc; rd.userData.dial.material.emissiveIntensity = on ? 2.5 : 0; rl.intensity = on ? 4 : 0; N(u, new THREE.Vector3(-1.3, 1.0, .35), cam, on); pop(t, u, tc + .3, 99, cam); } }; },
  c: [[0, 1.6, 3.8], [0, 1.3, -.2], [0, 1.6, 3.2], [0, 1.3, -.2]], range: 2.4, look: DARK }; });
// 52. Las 3 de la mañana. Ya habéis perdido la cuenta de las horas
Q(52, (d, a) => ({ ...BK({ dark: true, mesa: false }), fov: 32, atores: [YO({ x: .5, z: -.2, y: -.4, eyes: [[0, 'flat']], pose: sitP }), LU({ x: -.5, z: -.3, y: -.4, eyes: [[0, 'flat']], pose: sitP })],
  extra: (c) => { const L = linterna(); L.position.set(0, .06, .6); L.rotation.y = Math.PI * .9; c.add(L); L.userData.on(1); calida(c, [0, 1.4, 1.0], 3, 5); const ck = clock(.7, 3); ck.position.set(0, 2.0, -1.0); c.add(ck); const t = lab(c, ['3:00 A. M.'], 1.2, [0, 2.45, -1.0]); return { update: (u, t2, cam) => { pop(t, u, .1, 99, cam); ck.set(3 + u * .03); } }; },
  c: [[0, 1.4, 3.6], [0, 1.2, -.4], [0, 1.4, 3.1], [0, 1.2, -.4]], range: 2.4, look: DARK }));
// 53. Marte 500: seis hombres, 520 días encerrados en una nave de mentira en Moscú, para simular un viaje a Marte
Q(53, (d, a) => { const ts = R0(a, 'simular'); return { amb: 'marte', fov: 34, atores: [0, 1, 2, 3, 4, 5].map((i) => EXTRA([1, 5, 4, 7, 2, 1][i], { hair: null, x: (i % 2 ? 1 : -1) * .6, z: .6 - Math.floor(i / 2) * 1.6, eyes: [[0, ['look', 'lookl'][i % 2]]] })),
  extra: (c) => { const t = lw(c, ['SIMULAR UN VIAJE A MARTE'], 2.4, [0, 2.9, -.8]); return { update: (u, t2, cam) => pop(t, u, ts, 99, cam) }; },
  c: [[0, 1.9, 4.6], [0, 1.4, -2], [0, 1.8, 3.6], [0, 1.4, -2]], k: 1, range: 5 }; });
// 54. El problema no fue la comida ni el aire: la convivencia, el cansancio, las pequeñas manías del otro
Q(54, (d, a) => { const tc = R0(a, 'comida'), tv = R0(a, 'convivencia'), tk = R0(a, 'cansancio'), tm = R0(a, 'manias'), te = R0(a, 'enormes'); return { amb: 'marte', fov: 32, atores: [EXTRA(1, { hair: null, x: -.6, z: 0, eyes: [[0, 'look'], [tv, 'angry']], talk: [[tm, d]] }), EXTRA(5, { hair: null, x: .6, z: 0, eyes: [[0, 'lookl'], [tv, 'angry']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > tm ? 50 + Math.sin(u * 14) * 10 : 12, 30] }) })],
  extra: (c) => { const T = [lw(c, ['NI LA COMIDA, NI EL AIRE'], 2.2, [0, 2.9, -.6]), lab(c, ['LA CONVIVENCIA'], 1.7, [0, 2.9, -.6], { fg: '#FF8A5A' }), lw(c, ['EL CANSANCIO'], 1.4, [-1.2, 2.3, -.4]), lw(c, ['LAS MANÍAS DEL OTRO'], 1.8, [1.0, 2.3, -.4])];
    return { update: (u, t2, cam) => { pop(T[0], u, tc, tv - .1, cam); pop(T[1], u, tv, 99, cam); pop(T[2], u, tk, 99, cam); pop(T[3], u, tm, 99, cam); if (u > te) T[3].scale.setScalar(1 + .5 * smooth(te, te + 1, u)); } }; },
  c: [[0, 1.7, 3.6], [0, 1.5, -.2], [0, 1.7, 3.0], [0, 1.5, -.2]], k: 1, range: 3 }; });
// 55. Y a vosotros también os llega. Frío. Hambre. Nadie quiere las judías de 1987
Q(55, (d, a) => { const tf = R0(a, 'frio'), th = R0(a, 'hambre'), tn = R0(a, 'ninguno'); return { ...BK({ dark: true }), fov: 30, atores: [YO({ x: .6, z: -.2, eyes: [[0, 'sad']], pose: (k, u) => k.pose({ armL: [60, 90], armR: [60, 90], lean: Math.sin(u * 30) * 1.5 }) }), LU({ x: -.5, z: -.2, eyes: [[0, 'sad']], pose: (k) => k.pose({ armL: [40, 70], armR: [40, 70] }) })],
  extra: (c) => { const L = linterna(); L.position.set(0, .78, .5); L.rotation.y = Math.PI; c.add(L); L.userData.on(1); calida(c, [0, 1.6, 1.2], 3, 6); const cans = []; for (let i = 0; i < 3; i++) { const l = lata(); l.position.set(-.2 + i * .2, .78, .25); c.add(l); cans.push(l); } const T = [lw(c, ['FRÍO'], .8, [.7, 2.1, -.2]), lw(c, ['HAMBRE'], 1.0, [-.6, 2.1, -.2]), lab(c, ['¿JUDÍAS DE 1987? NO, GRACIAS'], 2.3, [0, 2.45, -.4])];
    return { update: (u, t2, cam) => { pop(T[0], u, tf, 99, cam); pop(T[1], u, th, 99, cam); pop(T[2], u, tn, 99, cam); } }; },
  c: [[0, 1.7, 3.6], [0, 1.3, -.2], [0, 1.7, 3.0], [0, 1.3, -.2]], range: 2.4, look: DARK }; });
// 56. Le dices que todo es culpa de la palanca roja. Ella se enfada de verdad: "Ya lo sé, ¿vale? No hace falta que me lo recuerdes"
Q(56, (d, a) => { const tc = R0(a, 'culpa'), te = R0(a, 'enfada'), ty = R0(a, 'ya'); return { ...BK({ dark: true }), fov: 30, atores: [YO({ x: .6, z: -.2, eyes: [[0, 'smug'], [te, 'wide']], talk: [[tc - 1.5, te]] }), LU({ x: -.5, z: -.2, eyes: [[0, 'look'], [te, 'angry']], talk: [[ty, d]], pose: (k, u) => k.pose({ armL: [u > ty ? 40 : 12, 40], armR: [u > ty ? 40 : 12, 40] }) })],
  extra: (c) => { const L = linterna(); L.position.set(0, .78, .5); L.rotation.y = Math.PI; c.add(L); L.userData.on(1); calida(c, [0, 1.6, 1.2], 3, 6); const b1 = hab(c, ['TODO ES CULPA', 'DE LA PALANCA ROJA'], 1.7, [.7, 2.2, -.2], 54), b2 = hab(c, ['YA LO SÉ, ¿VALE?', 'NO HACE FALTA QUE ME LO RECUERDES'], 2.4, [-.3, 2.2, -.2], 50);
    return { update: (u, t2, cam) => { pop(b1, u, tc - .6, ty - .2, cam); pop(b2, u, ty, 99, cam); } }; },
  c: [[0, 1.6, 3.4], [0, 1.4, -.2], [0, 1.6, 2.8], [0, 1.4, -.2]], range: 2.4, look: DARK }; });
// 57. Silencio. Del malo
Q(57, (d) => ({ ...BK({ dark: true }), fov: 34, atores: [LU({ x: -3.2, z: -.7, y: .22, eyes: [[0, 'sad']], pose: sitP }), YO({ x: 3.2, z: -.7, y: .22, eyes: [[0, 'sad']], pose: sitP })],
  extra: (c) => { const L = linterna(); L.position.set(0, .78, .5); L.rotation.y = Math.PI; c.add(L); L.userData.on(1); calida(c, [0, 2.0, 1.0], 3, 8); const t = lw(c, ['SILENCIO. DEL MALO.'], 2.0, [0, 2.5, -1.0]); return { update: (u, t2, cam) => pop(t, u, .3, 99, cam) }; },
  c: [[0, 1.9, 6.4], [0, 1.2, -1.0], [0, 1.8, 5.8], [0, 1.2, -1.0]], range: 4, blur: 6, look: DARK }));
// 58. Piensas en el puente: ¿y si solo se ríe contigo porque tiene miedo? ¿porque no hay nadie más? ¿porque es un búnker?
Q(58, (d, a) => { const tm = R0(a, 'miedo'), tn = R0(a, 'nadie'), tb = R0(a, 'bunker'); return { ...BK({ dark: true }), fov: 28, atores: [YO({ x: 2.5, z: .3, y: -.4, eyes: [[0, 'sad']], pose: sitP })],
  extra: (c) => { calida(c, [2.0, 1.8, 1.4], 3, 6);
    const T = canvasTex(640, 400, (x) => { x.clearRect(0, 0, 640, 400); x.fillStyle = '#FBF7EC'; x.strokeStyle = '#2A2A34'; x.lineWidth = 8; x.beginPath(); x.ellipse(320, 170, 300, 160, 0, 0, 7); x.fill(); x.stroke(); for (const [cx, cy, r] of [[450, 350, 20], [490, 385, 11]]) { x.beginPath(); x.arc(cx, cy, r, 0, 7); x.fill(); x.stroke(); } x.fillStyle = '#8A7A62'; x.fillRect(60, 160, 120, 120); x.fillRect(460, 160, 120, 120); x.strokeStyle = '#6A4630'; x.lineWidth = 6; x.beginPath(); x.moveTo(180, 165); x.quadraticCurveTo(320, 240, 460, 165); x.stroke(); x.beginPath(); x.moveTo(180, 130); x.quadraticCurveTo(320, 205, 460, 130); x.stroke(); x.fillStyle = '#4A8AB0'; x.fillRect(180, 290, 280, 20); });
    const n = cut(T, 1.6, 1.0, { blend: true }); n.position.set(1.7, 1.75, -.2); n.renderOrder = 5; c.add(n); const L = [lw(c, ['¿SOLO SE RÍE POR MIEDO?'], 1.8, [1.8, 2.05, -.2]), lw(c, ['¿PORQUE NO HAY NADIE MÁS?'], 1.9, [1.8, 2.05, -.2]), lw(c, ['¿PORQUE ES UN BÚNKER?'], 1.7, [1.8, 2.05, -.2])];
    return { update: (u, t2, cam) => { pop(n, u, .3, tm - .3, cam); pop(L[0], u, tm, tn - .05, cam); pop(L[1], u, tn, tb - .05, cam); pop(L[2], u, tb, 99, cam); } }; },
  c: [[1.6, 1.4, 3.6], [2.1, 1.3, -.1], [1.8, 1.4, 3.1], [2.1, 1.3, -.1]], range: 2.4, look: DARK }; });
// 59. Y que mañana, cuando se abra la puerta, todo volverá a ser como antes (imaginado)
Q(59, (d, a) => { const ta = R0(a, 'antes'); return { ...BK({ open: true }), fov: 32, atores: [YO({ x: 0, z: -1.6, eyes: [[0, 'sad']], move: (u) => [lerp(0, 1.8, smooth(1, d, u)), 0, -1.6], pose: (k, u) => (u > 1 ? k.walk(u) : k.pose()) }), LU({ x: -.3, z: -1.8, eyes: [[0, 'flat']], move: (u) => [lerp(-.3, -2.2, smooth(1, d, u)), 0, -1.8], pose: (k, u) => (u > 1 ? k.walk(u + 1) : k.pose()) })],
  extra: (c) => { const t = lw(c, ['TODO VOLVERÁ A SER COMO ANTES'], 2.6, [0, 2.9, -2.0]); return { update: (u, t2, cam) => pop(t, u, ta - .8, 99, cam) }; },
  c: [[0, 1.7, 3.6], [0, 1.3, -2.2], [0, 1.7, 3.2], [0, 1.3, -2.2]], range: 3, look: { exposure: 1.1, bloom: .7, vig: .75, bloomT: .8 } }; });
// 60. Te levantas, te sientas en el suelo junto a su litera y le pides perdón. Culpa de una palanca roja muy mal puesta
Q(60, (d, a) => { const tp = R0(a, 'perdon'), tc = R0(a, 'palanca'); return { ...BK({ dark: true }), fov: 30, atores: [LU({ x: -3.2, z: -.7, y: .22, eyes: [[0, 'sad'], [tc + .6, 'happy']], pose: sitP }), YO({ x: -2.3, z: -.2, eyes: [[0, 'sad'], [tc, 'smug']], move: (u) => [lerp(1.2, -2.3, smooth(0, 2.5, u)), u > 2.5 ? -.4 * smooth(2.5, 3, u) : 0, -.2], pose: (k, u) => (u < 2.5 ? k.walk(u) : sitP(k)) })],
  extra: (c) => { const L = linterna(); L.position.set(-1.6, .06, .4); L.rotation.y = -.8; c.add(L); L.userData.on(1); calida(c, [-1.6, 1.6, 1.0], 4, 6); const T = [lab(c, ['PERDÓN'], 1.0, [-2.3, 2.0, -.2]), lw(c, ['PALANCA MUY MAL PUESTA'], 2.0, [-2.6, 2.6, -.4])]; return { update: (u, t2, cam) => { pop(T[0], u, tp, tc - .1, cam); pop(T[1], u, tc, 99, cam); } }; },
  c: [[0, 1.8, 4.0], [-1.6, 1.1, -.4], [-1.0, 1.6, 3.2], [-2.6, 1.0, -.4]], range: 3, look: DARK }; });
// 61. Para hacer las paces: abrís una lata de judías de 1987. La oléis. La miráis. Mejor no saber. Volvéis a cerrarla
Qs(61, ['decidis'], [
  (d, a) => { const ta = R0(a, 'abris'), to = R0(a, 'oleis'), tm = R0(a, 'mirais'); return { ...BK({ dark: true, mesa: false }), fov: 28, atores: [YO({ x: .5, z: -.1, y: -.4, eyes: [[0, 'look'], [to, 'wide']], pose: sitP }), LU({ x: -.5, z: -.2, y: -.4, eyes: [[0, 'look'], [to, 'flat']], pose: sitP })],
    extra: (c) => { const L = linterna(); L.position.set(.5, .06, .8); L.rotation.y = Math.PI * .8; c.add(L); L.userData.on(1); calida(c, [0, 1.4, 1.0], 4, 5); const lt = lata(); lt.position.set(0, 0, .35); lt.scale.setScalar(1.5); c.add(lt); const lid = new THREE.Mesh(new THREE.CylinderGeometry(.09, .09, .01, 18), std('#C8C4B8', { metalness: .7 })); c.add(lid); const G = []; const R = rng(3); for (let i = 0; i < 14; i++) { const g = glowSprite('#9AD84A', .25 + R() * .2, 0); g.userData.p = [R() - .5, R(), R() * 6]; c.add(g); G.push(g); } const t = lab(c, ['JUDÍAS DE 1987'], 1.5, [0, 1.9, -.1]); const t2 = lw(c, ['¡PUAJ!'], .9, [.6, 1.6, .2]);
      return { update: (u, t2b, cam) => { const k = smooth(ta, ta + .6, u); lid.position.set(-.08 * k, .34 + .1 * k, .35); lid.rotation.z = k * 1.2; G.forEach((g) => { const [x, y, ph] = g.userData.p; const f = ((u * .3 + y) % 1); g.position.set(x * .4 + Math.sin(u + ph) * .05, .4 + f * 1.0, .35); g.material.opacity = u > to - .3 ? .5 * Math.sin(f * Math.PI) : 0; }); pop(t, u, .2, to, cam); pop(t2, u, tm, 99, cam); } }; },
    c: [[0, 1.2, 2.6], [0, .7, .2], [0, 1.2, 2.2], [0, .7, .2]], range: 1.8, look: DARK }; },
  (d, a) => { const tu = R0(a, 'unanimidad'), tv = R0(a, 'volveis'); return { ...BK({ dark: true, mesa: false }), fov: 28, atores: [YO({ x: .5, z: -.1, y: -.4, eyes: [[0, 'flat'], [tv + .5, 'happy']], pose: (k) => { k.pose({ armL: [12, 8], armR: [100, 0] }); hideLegs(k); } }), LU({ x: -.5, z: -.2, y: -.4, eyes: [[0, 'flat'], [tv + .5, 'happy']], pose: (k) => { k.pose({ armL: [100, 0], armR: [12, 8] }); hideLegs(k); } })],
    extra: (c) => { const L = linterna(); L.position.set(.5, .06, .8); L.rotation.y = Math.PI * .8; c.add(L); L.userData.on(1); calida(c, [0, 1.4, 1.0], 4, 5); const lt = lata(); lt.position.set(0, 0, .35); lt.scale.setScalar(1.5); c.add(lt); const lid = new THREE.Mesh(new THREE.CylinderGeometry(.09, .09, .01, 18), std('#C8C4B8', { metalness: .7 })); c.add(lid); const t = lab(c, ['POR UNANIMIDAD: MEJOR NO SABER'], 2.6, [0, 2.0, -.2]); const t2 = lw(c, ['LATA CERRADA'], 1.3, [0, 1.5, .1]);
      return { update: (u, t2b, cam) => { const k = 1 - smooth(tv, tv + .5, u); lid.position.set(-.08 * k, .34 + .1 * k, .35); lid.rotation.z = k * 1.2; pop(t, u, tu - .3, tv, cam); pop(t2, u, tv + .4, 99, cam); } }; },
    c: [[0, 1.3, 2.8], [0, .9, 0], [0, 1.3, 2.4], [0, .9, 0]], range: 2, look: DARK }; },
]);
// 62. Ella se asoma: "¿Vamos a la última pregunta?", saltándose todas las demás
Q(62, (d, a) => ({ ...BK({ dark: true }), fov: 30, atores: [LU({ x: -2.9, z: -.6, y: .22, eyes: [[0, 'smug']], pose: (k) => { sitP(k); k.root.rotation.z = -.15; } }), YO({ x: -2.2, z: -.1, y: -.4, eyes: [[0, 'look']], pose: sitP })],
  extra: (c) => { const L = linterna(); L.position.set(-1.6, .06, .4); L.rotation.y = -.8; c.add(L); L.userData.on(1); calida(c, [-1.6, 1.6, 1.0], 4, 6); const b = hab(c, ['¿VAMOS A LA', 'ÚLTIMA PREGUNTA?'], 1.6, [-2.2, 2.2, -.3], 56); return { update: (u, t2, cam) => pop(b, u, .2, 99, cam) }; },
  c: [[-.8, 1.6, 3.0], [-2.5, 1.3, -.4], [-1.0, 1.5, 2.6], [-2.5, 1.3, -.4]], range: 2.4, look: DARK }));
// 63. La última pregunta de los soldados: "¿Qué es lo que nunca te has atrevido a decirle a alguien?"
Q(63, (d, a) => { const tq = R0(a, 'que'); return { ...BK({ dark: true }), fov: 26, atores: [],
  extra: (c) => { const cu = cuaderno(drawLista); cu.position.set(0, .78, .3); cu.scale.setScalar(1.6); c.add(cu); calida(c, [0, 1.6, .8], 5, 4); const t = lab(c, ['¿QUÉ ES LO QUE NUNCA TE HAS', 'ATREVIDO A DECIRLE A ALGUIEN?'], 2.2, [0, 1.75, .1], { size: 60, w: 1100, h: 230 }); return { update: (u, t2, cam) => pop(t, u, tq, 99, cam) }; },
  c: [[0, 2.0, 1.3], [.25, .78, .3], [0, 1.9, 1.1], [.25, .9, .3]], range: 1.2, look: DARK }; });
// 64. Lucía: "Empiezo yo". El año pasado, en la noria, ella tampoco subió. Se quedó abajo porque tú te quedaste abajo
Qs(64, ['y'], [
  (d) => ({ ...BK({ dark: true }), fov: 30, atores: [LU({ x: -2.9, z: -.6, y: .22, eyes: [[0, 'look']], pose: sitP }), YO({ x: -2.2, z: -.1, y: -.4, eyes: [[0, 'look']], pose: sitP })],
    extra: (c) => { calida(c, [-1.6, 1.6, 1.0], 4, 6); const b = hab(c, 'EMPIEZO YO', 1.4, [-2.9, 2.5, -.5], 64); return { update: (u, t2, cam) => pop(b, u, .1, 99, cam) }; },
    c: [[-1.2, 1.6, 3.0], [-2.6, 1.3, -.4], [-1.3, 1.5, 2.6], [-2.6, 1.3, -.4]], range: 2.4, look: DARK }),
  (d, a) => { const tt = R0(a, 'tampoco'), tp = R0(a, 'porque'); return { amb: 'noria', fov: 34, atores: [YO({ x: -.8, z: 1, eyes: [[0, 'sad']], pose: (k) => k.pose({ armL: [40, 60], armR: [40, 60], lean: 8 }) }), LU({ x: 1.0, z: .6, eyes: [[0, 'lookl'], [tp, 'heart']], move: (u) => [lerp(2.4, 1.0, smooth(0, 1.5, u)), 0, .6], pose: (k, u) => (u < 1.5 ? k.walk(u) : k.pose()) })],
    extra: (c) => { const T = [lw(c, ['ELLA TAMPOCO SUBIÓ'], 2.0, [.2, 2.9, .4]), lab(c, ['PORQUE TÚ TE QUEDASTE ABAJO'], 2.6, [.2, 2.9, .4])]; return { update: (u, t2, cam) => { c.userData.wheel.rotation.z = u * .1; pop(T[0], u, tt, tp - .1, cam); pop(T[1], u, tp, 99, cam); } }; },
    c: [[0, 1.8, 6.0], [.2, 1.8, -1], [0, 1.7, 5.2], [.2, 1.6, -1]], k: 1, range: 6, blur: 5, look: { exposure: 1.05, vig: .65 } }; },
]);
// 65. Te quedas sin aire. Y no es por el búnker
Q(65, (d) => ({ ...BK({ dark: true }), fov: 24, atores: [YO({ x: -2.2, z: -.1, y: -.4, eyes: [[0, 'wide'], [1.5, 'heart']], pose: sitP })],
  extra: (c, s, A) => { calida(c, [-1.6, 1.6, 1.0], 4, 6); const rb = rubor(A[0]); const t = lw(c, ['SIN AIRE'], 1.1, [-2.2, 1.95, -.1]); return { update: (u, t2, cam) => { rb(smooth(.8, 1.5, u)); pop(t, u, .3, 99, cam); } }; },
  c: [[-1.8, 1.2, 2.2], [-2.2, 1.1, -.1], [-1.9, 1.2, 1.8], [-2.2, 1.1, -.1]], range: 1.4, look: DARK }));
// 66. Te toca. Le dices la verdad: que te gusta. Desde primero. Desde mucho antes de cualquier puente colgante
Q(66, (d, a) => { const tg = R0(a, 'gusta'), tp = R0(a, 'primero'); return { ...BK({ dark: true }), fov: 30, atores: [LU({ x: -2.9, z: -.6, y: .22, eyes: [[0, 'look'], [tg + .5, 'happy']], pose: sitP }), YO({ x: -2.2, z: -.1, y: -.4, eyes: [[0, 'look'], [tg, 'heart']], talk: [[tg - 1, d]], pose: sitP })],
  extra: (c, s, A) => { calida(c, [-1.6, 1.6, 1.0], 4, 6); const r1 = rubor(A[0]), r2 = rubor(A[1]); const b = hab(c, ['ME GUSTAS.', 'DESDE PRIMERO.'], 1.5, [-1.7, 2.05, -.1], 62); const t = lw(c, ['MUCHO ANTES DE CUALQUIER PUENTE'], 2.3, [-2.3, 2.45, -.4]); const ht = cut(wordTex('♥', '#E8667F', 170), .35, .28); ht.renderOrder = 6; c.add(ht);
    return { update: (u, t2, cam) => { pop(b, u, tg - .3, 99, cam); pop(t, u, tp + .6, 99, cam); r1(smooth(tg, tg + .6, u)); r2(smooth(tg, tg + .6, u)); ht.visible = u > tg; ht.position.set(-2.55, 1.6 + ((u * .4) % .5), -.3); pointer(ht, cam); } }; },
  c: [[-1.0, 1.6, 3.0], [-2.5, 1.3, -.4], [-1.2, 1.5, 2.6], [-2.5, 1.3, -.4]], range: 2.4, look: DARK }; });
// 67. Ella no dice nada. Te coge la mano. Os quedáis dormidos en el suelo, al lado de seis latas de judías
Q(67, (d, a) => { const tc = R0(a, 'coge'), td = R0(a, 'dormidos'), tl = R0(a, 'latas'); return { ...BK({ dark: true, mesa: false }), fov: 30, atores: [LU({ x: -.45, z: -.2, y: -.4, eyes: [[0, 'happy'], [td, 'shut']], pose: (k, u) => { k.pose({ armL: [12, 8], armR: [u > tc ? 35 : 10, 20], head: u > td ? -10 : 0 }); hideLegs(k); } }), YO({ x: .3, z: -.15, y: -.4, eyes: [[0, 'heart'], [td, 'shut']], pose: (k, u) => { k.pose({ armL: [u > tc ? 35 : 10, 20], armR: [12, 8], head: u > td ? 10 : 0 }); hideLegs(k); } })],
  extra: (c) => { const L = linterna(); L.position.set(.9, .06, .5); L.rotation.y = Math.PI * .8; c.add(L); const w = calida(c, [0, 1.4, 1.0], 4, 6); const cans = []; for (let i = 0; i < 6; i++) { const l = lata(); l.position.set(.8 + (i % 3) * .2, 0, -.4 + Math.floor(i / 3) * .2); c.add(l); } const z = zzz(c); const t = lw(c, ['6 LATAS DE JUDÍAS'], 1.5, [1.0, 1.0, 0]);
    return { update: (u, t2, cam) => { const dim = 1 - .7 * smooth(td, d, u); w.intensity = 4 * dim; L.userData.on(dim > .5 ? 1 : 0); z(u, [-.1, 1.5, 0], cam, u > td + .5); pop(t, u, tl, 99, cam); } }; },
  c: [[0, 1.5, 3.4], [0, 1.0, -.2], [.6, 1.8, 3.8], [.2, .8, -.2]], range: 2.4, look: DARK }; });
// 68. Siete de la mañana. ¡Clonc! La puerta se abre. La luz del sol entra de golpe
Q(68, (d, a) => { const tc = R0(a, 'clonc'), tl = R0(a, 'luz'); return { ...BK({ open: true, mesa: false }), fov: 32, atores: [LU({ x: -.45, z: .4, y: -.4, eyes: [[0, 'shut'], [tc + .3, 'wide']], pose: sitP }), YO({ x: .3, z: .45, y: -.4, eyes: [[0, 'shut'], [tc + .3, 'wide']], pose: sitP })],
  extra: (c) => { luces(c, 0); const ck = lab(c, ['7:00 A. M.'], 1.2, [0, 2.8, -1.4]); const cl = lab(c, ['¡CLONC!'], 1.5, [0, 2.3, -2.4], { size: 100, bg: '#C9361F', fg: '#fff' }); const so = c.userData.sunObjs;
    return { update: (u, t2, cam) => { const k = smooth(tc, tc + 1.2, u); c.userData.door.rotation.y = -1.45 * k; so[0].material.emissiveIntensity = 3.2 * k; so[1].visible = k > .05; so[2].intensity = 60 * k; pop(ck, u, 0, tc, cam); pop(cl, u, tc, tc + 1.2, cam); shake(cam, u > tc && u < tc + .4 ? .03 : 0, u); } }; },
  c: [[0, 1.4, 4.0], [0, 1.2, -2.4], [0, 1.4, 3.4], [0, 1.2, -2.4]], range: 3, lookFn: (u) => ({ exposure: lerp(.75, 1.15, smooth(tc, tl + 1, u)), bloom: .5 + .4 * smooth(tc, tl + 1, u) }) }; });
// 69. El guía, tu profesora, los bomberos y media clase haciendo fotos con el móvil
Q(69, (d, a) => { const tg = R0(a, 'guia'), tp = R0(a, 'profesora'), tb = R0(a, 'bomberos'), tm = R0(a, 'media'); return { ...BK({ open: true }), fov: 32, atores: [GUIA({ x: -.5, z: -2.6, eyes: [[0, 'wide']] }), PROFE({ x: .5, z: -2.5, eyes: [[0, 'wide']] }), BOMB({ x: -1.3, z: -2.9 }), BOMB({ x: 1.3, z: -2.9 }), EXTRA(0, { x: -2.0, z: -2.2, pose: (k) => k.pose({ armL: [12, 8], armR: [110, 30] }) }), EXTRA(2, { x: 2.0, z: -2.3, pose: (k) => k.pose({ armL: [12, 8], armR: [110, 30] }) }), EXTRA(3, { x: -2.6, z: -1.6, pose: (k) => k.pose({ armL: [110, 30], armR: [12, 8] }) }), EXTRA(6, { x: 2.7, z: -1.6, pose: (k) => k.pose({ armL: [110, 30], armR: [12, 8] }) })],
  extra: (c, s, A) => { luces(c, .3); const T = [lw(c, ['EL GUÍA'], .9, [-.5, 2.25, -2.6]), lw(c, ['TU PROFESORA'], 1.3, [.5, 2.55, -2.5]), lab(c, ['BOMBEROS'], 1.2, [0, 2.95, -2.9], { fg: '#FF8A5A' }), lw(c, ['MEDIA CLASE CON EL MÓVIL'], 2.2, [0, 1.0, -1.6])]; const F = [4, 5, 6, 7].map((i) => { const g = glowSprite('#FFFFFF', .5, 0); c.add(g); return g; });
    return { update: (u, t2, cam) => { [tg, tp, tb, tm].forEach((t0, i) => pop(T[i], u, t0, 99, cam)); F.forEach((g, i) => { const p = hand(A[4 + i]); g.position.set(p.x, p.y + .1, p.z + .1); g.material.opacity = u > tm && Math.sin(u * 7 + i * 2) > .85 ? 1 : 0; }); } }; },
  c: [[0, 1.6, 2.6], [0, 1.4, -2.6], [0, 1.6, 2.2], [0, 1.4, -2.6]], range: 2.4, look: { exposure: 1.05, bloom: .5 } }; });
// 70. Lucía te suelta la mano rapidísimo. Rojos como tomates. Los dos
Q(70, (d, a) => { const tr = R0(a, 'rojos'); return { ...BK({ open: true }), fov: 28, atores: [LU({ x: -.4, z: .4, eyes: [[0, 'wide'], [tr, 'small']], move: (u) => [lerp(-.25, -.6, smooth(0, .5, u)), 0, .4] }), YO({ x: .4, z: .45, eyes: [[0, 'wide'], [tr, 'small']] })],
  extra: (c, s, A) => { luces(c, .3); const r1 = rubor(A[0]), r2 = rubor(A[1]); const t = lab(c, ['ROJOS COMO TOMATES'], 1.7, [0, 2.08, .3]); const T1 = tomate(-1.25, 1.05, .6, 1.4), T2 = tomate(1.25, 1.05, .6, 1.4); c.add(T1, T2);
    return { update: (u, t2, cam) => { r1(smooth(tr, tr + .5, u)); r2(smooth(tr, tr + .5, u)); pop(t, u, tr, 99, cam); T1.visible = T2.visible = u > tr + .4; } }; },
  c: [[0, 1.6, 3.0], [0, 1.45, .4], [0, 1.6, 2.6], [0, 1.45, .4]], range: 2, look: { exposure: 1.05, bloom: .5 } }; });
// 71. El guía: esa palanca no cierra nada. Es la alarma antigua, desconectada desde hace 30 años. La puerta se cerró sola, por el apagón
Qs(71, ['cerro'], [
  (d, a) => { const tn = R0(a, 'nada'), ta = R0(a, 'alarma'), tdc = R0(a, 'desconectada'); return { ...BK({ open: true }), fov: 28, atores: [GUIA({ x: .6, z: -2.6, eyes: [[0, 'look']], talk: [[1, d]], pose: (k, u) => (u > ta ? point(k) : talkP(k, u)) })],
    extra: (c) => { luces(c, .3); lever(c, 1); const T = [lw(c, ['NO CIERRA NADA'], 1.5, [1.6, 2.35, -2.9]), lab(c, ['ALARMA ANTIGUA'], 1.5, [1.6, 2.35, -2.9]), lab(c, ['DESCONECTADA HACE 30 AÑOS'], 2.3, [1.4, 2.8, -2.9], { fg: '#FF8A5A' })]; return { update: (u, t2, cam) => { pop(T[0], u, tn, ta - .1, cam); pop(T[1], u, ta, 99, cam); pop(T[2], u, tdc, 99, cam); } }; },
    c: [[2.8, 1.8, .2], [1.2, 1.6, -2.9], [2.4, 1.7, -.2], [1.3, 1.6, -2.9]], range: 2 }; },
  (d, a) => { const ta = R0(a, 'apagon'); return { amb: 'bosqueBunker', ambo: { storm: true, busX: 40 }, fov: 32, atores: [],
    extra: (c) => { const t = lab(c, ['SE CERRÓ SOLA: APAGÓN'], 2.4, [0, 3.4, -3.0]); return { update: (u, t2, cam) => { c.userData.rain(u); c.userData.flash.intensity = Math.max(0, Math.sin(u * 2.3) ** 40) * 2.2; pop(t, u, .2, 99, cam); } }; },
    c: [[0, 2.0, 5.2], [0, 1.4, -3.6], [0, 1.9, 4.4], [0, 1.4, -3.6]], k: 1, range: 4, look: { exposure: .9, bloom: .5, vig: .6 } }; },
]);
// 72. Lucía, muy digna: "¿Lo ves? No fue culpa mía"
Q(72, (d) => ({ ...BK({ open: true }), fov: 28, atores: [LU({ x: -.3, z: .3, eyes: [[0, 'smug']], pose: (k) => k.pose({ armL: [60, 100], armR: [60, 100], head: 6 }) }), YO({ x: .7, z: .4, eyes: [[0, 'flat']] })],
  extra: (c) => { luces(c, .3); const b = hab(c, ['¿LO VES?', 'NO FUE CULPA MÍA'], 1.3, [-.4, 2.0, .3], 60); return { update: (u, t2, cam) => pop(b, u, .2, 99, cam) }; },
  c: [[0, 1.6, 3.2], [0, 1.45, .3], [0, 1.6, 2.7], [0, 1.45, .3]], range: 2, look: { exposure: 1.05, bloom: .5 } }));
// 73. Esa semana, en el instituto, no se habla de otra cosa
Q(73, (d, a) => ({ amb: 'aula', fov: 32, atores: [YO({ x: -.5, z: .2, eyes: [[0, 'small']] }), LU({ x: .4, z: .2, eyes: [[0, 'small']] }), EXTRA(0, { x: -2.0, z: -1, talk: [[0, d]], eyes: [[0, 'smug']] }), EXTRA(2, { x: -1.4, z: -1.2, eyes: [[0, 'happy']] }), EXTRA(3, { x: 1.6, z: -1, talk: [[1, d]], eyes: [[0, 'smug']] }), EXTRA(4, { x: 2.2, z: -1.2, eyes: [[0, 'happy']] })],
  extra: (c) => { const t = lab(c, ['NO SE HABLA DE OTRA COSA'], 2.4, [0, 2.8, -.8]); const b1 = hab(c, '¡UNA NOCHE EN EL BÚNKER!', 1.6, [-1.8, 2.3, -1.0], 56), b2 = hab(c, '¿Y LA MANO?', 1.1, [1.9, 2.3, -1.0], 66); return { update: (u, t2, cam) => { pop(t, u, .2, 99, cam); pop(b1, u, 1.5, 99, cam); pop(b2, u, 3.0, 99, cam); } }; },
  c: [[0, 1.8, 5.0], [0, 1.4, -.6], [0, 1.7, 4.4], [0, 1.4, -.6]], range: 3 }));
// 74. Una duda: ¿y si fue el puente? ¿Y si solo sintió eso porque estaba encerrada, a oscuras, con miedo? ¿Y si fuera no siente nada?
Q(74, (d, a) => { const ts = R0(a, 'sintio'), tf = R0(a, 'fuera'); return { amb: 'cuartoYo', ambo: { night: true }, fov: 30, atores: [YO({ x: 0, z: 0, eyes: [[0, 'sad']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [130, 150], head: -6 }) })],
  extra: (c) => { const T = [lab(c, ['¿Y SI FUE EL PUENTE?'], 1.8, [0, 2.45, -.4]), lw(c, ['¿SOLO POR EL MIEDO?'], 1.7, [0, 2.45, -.4]), lw(c, ['¿Y SI FUERA NO SIENTE NADA?'], 2.1, [0, 2.45, -.4])]; return { update: (u, t2, cam) => { pop(T[0], u, .1, ts - .1, cam); pop(T[1], u, ts, tf - .1, cam); pop(T[2], u, tf, 99, cam); } }; },
  c: [[0, 1.7, 3.6], [0, 1.6, -.2], [0, 1.7, 3.0], [0, 1.6, -.2]], range: 2.4, look: NIGHT }; });
// 75. Haces algo valiente: ¿quedamos el sábado? En el sitio menos emocionante del mundo: la biblioteca municipal
Qs(75, ['la'], [
  (d) => ({ amb: 'aula', fov: 30, atores: [YO({ x: -.5, z: .2, eyes: [[0, 'small']], talk: [[1, d]] }), LU({ x: .5, z: .2, eyes: [[0, 'look']] })],
    extra: (c, s, A) => { const rb = rubor(A[0]); const b = hab(c, '¿QUEDAMOS EL SÁBADO?', 1.8, [-.5, 2.4, .2], 60); const t = lw(c, ['ALGO VALIENTE'], 1.4, [0, 2.95, -.2]); return { update: (u, t2, cam) => { rb(.6); pop(t, u, .1, 2.2, cam); pop(b, u, 2.4, 99, cam); } }; },
    c: [[0, 1.6, 3.2], [0, 1.5, .2], [0, 1.6, 2.7], [0, 1.5, .2]], range: 2 }),
  (d, a) => { const tt = R0(a, 'tormenta'), tp = R0(a, 'palancas'), to = R0(a, 'oscuridad'); return { amb: 'biblio', fov: 32, atores: [],
    extra: (c) => { const t = lab(c, ['LA BIBLIOTECA MUNICIPAL'], 3.4, [0, 2.5, -.6]); const T = [lw(c, ['SIN TORMENTA'], 1.8, [-1.9, 1.7, -.6]), lw(c, ['SIN PALANCAS'], 1.8, [0, 1.7, -.6]), lw(c, ['SIN OSCURIDAD'], 1.9, [1.9, 1.7, -.6])]; return { update: (u, t2, cam) => { pop(t, u, .1, 99, cam); pop(T[0], u, tt, 99, cam); pop(T[1], u, tp, 99, cam); pop(T[2], u, to, 99, cam); } }; },
    c: [[0, 1.8, 4.4], [0, 1.8, -2], [0, 1.8, 3.8], [0, 1.8, -2]], range: 8, blur: 4 }; },
]);
// 76. Y ella dice que sí
Q(76, (d) => ({ amb: 'aula', fov: 28, atores: [LU({ x: .3, z: .2, eyes: [[0, 'happy']], pose: nod }), YO({ x: -.6, z: .2, eyes: [[0, 'wide'], [.8, 'happy']] })],
  extra: (c) => { const t = lab(c, ['¡SÍ!'], .7, [.3, 2.1, .2], { size: 110, w: 360, bg: '#36AEA2', fg: '#fff' }); return { update: (u, t2, cam) => pop(t, u, .1, 99, cam) }; },
  c: [[0, 1.6, 2.8], [0, 1.5, .2], [0, 1.6, 2.4], [0, 1.5, .2]], range: 2 }));
// 77. El sábado, en la biblioteca: le enseñas tu cuaderno de dibujos, el de verdad. Se ríe igual. Te coge la mano igual que en el búnker
Q(77, (d, a) => { const tc = R0(a, 'cuaderno'), tr = R0(a, 'rie'), tm = R0(a, 'mano'); return { amb: 'biblio', fov: 30, atores: [YO({ x: -.55, z: .3, y: -.4, eyes: [[0, 'look'], [tr, 'happy']], pose: (k, u) => { k.pose({ armL: [12, 8], armR: [u > tm ? 50 : 30, 40] }); hideLegs(k); } }), LU({ x: .55, z: .3, y: -.4, eyes: [[0, 'look'], [tr, 'happy']], pose: (k, u) => { k.pose({ armL: [u > tm ? 50 : 20, 40], armR: [12, 8], bob: u > tr && u < tm ? Math.abs(Math.sin(u * 9)) * .03 : 0 }); hideLegs(k); } })],
  extra: (c) => { c.add(box(2.0, .08, .9, std('#8E6242'), 0, .5, .75)); const cu = cuaderno((x) => { x.save(); x.translate(-200, 0); drawLucia(x, 1); x.restore(); x.save(); x.translate(60, 0); drawLucia(x, 1); x.restore(); }); cu.position.set(0, .55, .8); cu.scale.setScalar(1.3); c.add(cu); const ht = cut(wordTex('♥', '#E8667F', 170), .35, .28); ht.renderOrder = 6; c.add(ht);
    const T = [lw(c, ['EL CUADERNO DE VERDAD'], 2.0, [0, 2.2, .2]), lab(c, ['IGUAL QUE EN EL BÚNKER'], 2.2, [0, 2.2, .2])];
    return { update: (u, t2, cam) => { cu.visible = u > tc - .3; pop(T[0], u, tc, tm - .3, cam); pop(T[1], u, tm, 99, cam); ht.visible = u > tm; ht.position.set(0, 1.5 + Math.sin(u * 3) * .05, .4); pointer(ht, cam); } }; },
  c: [[0, 1.6, 3.6], [0, 1.0, .5], [0, 1.6, 3.0], [0, 1.0, .5]], range: 2.4 }; });
// 78. Lo curioso: el miedo puede encender algo, pero no mantenerlo encendido. Lo que queda es lo que os habéis contado
Q(78, (d, a) => { const tm = R0(a, 'miedo'), tp = R0(a, 'pero'), tq = R0(a, 'queda'); return { amb: 'bosqueBunker', ambo: { busX: 40 }, fov: 32, atores: [YO({ x: -.4, z: -2.6, move: (u) => [-.35, 0, lerp(-3.4, -.6, smooth(0, d * .7, u))], pose: (k, u) => (u < d * .7 ? k.walk(u) : k.pose({ armL: [12, 8], armR: [35, 20] })), eyes: [[0, 'happy']] }), LU({ x: .35, z: -2.6, move: (u) => [.35, 0, lerp(-3.4, -.6, smooth(0, d * .7, u))], pose: (k, u) => (u < d * .7 ? k.walk(u + 1) : k.pose({ armL: [35, 20], armR: [12, 8] })), eyes: [[0, 'happy']] })],
  extra: (c) => { const T = [lab(c, ['EL MIEDO ENCIENDE ALGO…'], 2.4, [0, 3.4, -2.4]), lw(c, ['…PERO NO LO MANTIENE'], 2.2, [0, 3.4, -2.4]), lab(c, ['LO QUE QUEDA: LO QUE OS HABÉIS CONTADO'], 2.9, [0, 3.3, -2.4], { size: 62, w: 1400 })]; return { update: (u, t2, cam) => { pop(T[0], u, tm, tp - .1, cam); pop(T[1], u, tp, tq - .3, cam); pop(T[2], u, tq - .2, 99, cam); } }; },
  c: [[0, 1.8, 5.6], [0, 1.6, -2.6], [0, 1.8, 4.8], [0, 1.6, -1.6]], k: 1, range: 4 }; });
// 79. Biosfera 2: un invernadero cerrado en Arizona. Ocho personas, dos años, de 1991 a 1993
Q(79, (d, a) => { const to = R0(a, 'ocho'); return { amb: 'biosfera', fov: 34, atores: [0, 1, 2, 3, 4, 5, 6, 7].map((i) => EXTRA(i, { x: -2.8 + i * .8, z: 1.0 - (i % 2) * .5, eyes: [[0, 'happy']] })),
  extra: (c, s, A) => { const t = lw(c, ['8 PERSONAS · 2 AÑOS ENCERRADAS'], 2.8, [0, 2.6, 0]); return { update: (u, t2, cam) => { A.forEach((k, i) => (k.root.visible = u > to - .2 + i * .1)); pop(t, u, to + .5, 99, cam); } }; },
  c: [[0, 2.4, 9.0], [0, 2.0, -6], [0, 2.0, 7.4], [0, 1.6, -4]], k: 1, range: 8, blur: 5 }; });
// 80. Y dos de ellas, Jane Poynter y Taber MacCallum, acabaron casándose
Q(80, (d, a) => { const tc = R0(a, 'casandose'); return { amb: 'biosfera', fov: 30, atores: [EXTRA(0, { x: -.4, z: 1.0, eyes: [[0, 'happy']], pose: (k) => k.pose({ armL: [12, 8], armR: [40, 30] }) }), EXTRA(5, { x: .4, z: 1.0, eyes: [[0, 'heart']], pose: (k) => k.pose({ armL: [40, 30], armR: [12, 8] }) })],
  extra: (c) => { const t = lw(c, ['JANE POYNTER Y TABER MACCALLUM'], 2.6, [0, 2.6, .8]); const t2 = lab(c, ['¡SE CASARON!'], 1.4, [0, 2.15, .8], { bg: '#E8667F', fg: '#fff' }); const b = brillos(c, 14, '#FFB2C8'); c.userData.tag.visible = false; return { update: (u, t2b, cam) => { pop(t, u, .1, 99, cam); pop(t2, u, tc, 99, cam); b(u, [0, 1.8, 1.0, 1.0], smooth(tc, tc + .3, u)); } }; },
  c: [[0, 1.8, 4.2], [0, 1.6, 1.0], [0, 1.7, 3.6], [0, 1.6, 1.0]], k: 1, range: 3 }; });
// 81. Lucía lo lee en tu móvil: "Ni se te ocurra volver a tocar una palanca roja"
Q(81, (d, a) => { const tn = R0(a, 'ni'); return { amb: 'biblio', fov: 28, atores: [LU({ x: .3, z: .3, eyes: [[0, 'down'], [tn, 'smug']], pose: (k) => k.pose({ armL: [12, 8], armR: [70, 60] }) }), YO({ x: -.6, z: .3, eyes: [[0, 'look'], [tn + 1.5, 'happy']] })],
  extra: (c, s, A) => { const ph = telefono(['BIOSFERA 2:', 'SE CASARON'], { hora: '18:20' }); ph.scale.setScalar(.35); c.add(ph); const b = hab(c, ['NI SE TE OCURRA VOLVER', 'A TOCAR UNA PALANCA ROJA'], 2.0, [.2, 2.25, .3], 54);
    return { update: (u, t2, cam) => { const p = hand(A[0]); ph.position.set(p.x - .05, p.y + .1, p.z + .1); pointer(ph, cam); pop(b, u, tn, 99, cam); } }; },
  c: [[0, 1.6, 3.2], [0, 1.5, .3], [0, 1.6, 2.7], [0, 1.5, .3]], range: 2 }; });
// 82. LLAMADA FINAL: suscríbete y cuéntame: ¿con quién te quedarías tú atrapado en un búnker?
Q(82, (d, a) => { const ts = R0(a, 'suscribete'), tc = R0(a, 'cuentame'), tq = R0(a, 'quien'); return { amb: 'bosqueBunker', ambo: { busX: 40 }, fov: 32, atores: [LU({ x: -1.8, z: 0, eyes: [[0, 'happy']], pose: wave }), YO({ x: -1.0, z: 0, eyes: [[0, 'happy']], pose: (k, u) => (u > ts ? point(k) : wave(k, u)) })],
  extra: (c) => { const sb = suscribe(2.4); sb.position.set(1.0, 2.5, -.2); c.add(sb); const q = lab(c, ['¿CON QUIÉN TE QUEDARÍAS', 'ATRAPADO EN UN BÚNKER?'], 2.4, [1.1, .95, .3], { size: 66, w: 1000, h: 240 }); const l2 = lw(c, ['CUÉNTAMELO EN LOS COMENTARIOS'], 2.6, [.6, 3.3, -.2], { size: 62, w: 1200 });
    return { update: (u, t, cam) => { const k = smooth(ts - .3, ts, u); sb.scale.setScalar(Math.max(.01, k)); sb.rotation.z = u > ts + .6 && u < ts + 1.6 ? Math.sin(u * 40) * .05 : 0; pop(l2, u, tc, 99, cam); pop(q, u, tq - .4, 99, cam); } }; },
  c: [[0, 1.9, 5.6], [0, 1.6, -.2], [0, 1.8, 5.0], [0, 1.6, -.2]], k: 1, range: 7, blur: 4 }; });
