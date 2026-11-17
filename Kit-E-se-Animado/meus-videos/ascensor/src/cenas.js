// "¿Y si te quedas atrapado en un ascensor con tu crush?" — horizontal 1280x720, ~11:10
import * as THREE from 'three';
import { plano, AMBS, box, std, cut, glowSprite, pointer, canvasTex, lightPanel, smooth, lerp, clamp, rng } from './mundo.js';
import { deitar, bubble, wordTex, clock, speechTex } from './extra.js';
import { S, wt } from './tiempos.js';
import { labelT, globo, tomate, heladeria } from './amb2.js';
import { cartel, caja, libro, balon } from './amb3.js';
import { suscribe, telefono } from './amb4.js';
import './amb5.js';
import { PISO, escY } from './amb6.js';
import { linterna } from './amb3.js';
import { tree } from './motor/kit.js';

export const CENAS = [];
const FIM = 999;
const end = (i) => (i + 1 < S.length ? S[i + 1] : FIM);
const KZ = (p, q, k) => p.map((v, i) => q[i] + (v - q[i]) * k);
const mk = (cfg, d) => { const K = cfg.k ?? 1.35; if (cfg.c && K !== 1) { const [p0, q0, p1, q1] = cfg.c; cfg.c = [KZ(p0, q0, K), q0, KZ(p1, q1, K), q1]; } else if (cfg.cam && K !== 1) { cfg.cam = cfg.cam.map(([u, p, q]) => [u, KZ(p, q, K), q]); if (cfg.f) cfg.f = cfg.f.map(([u, v]) => [u, v * K]); } if (cfg.c) { const [p0, q0, p1, q1] = cfg.c; cfg.cam = [[0, p0, q0], [d, p1, q1]]; const D = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]); cfg.f = [[0, D(p0, q0)], [d, D(p1, q1)]]; } return cfg; };
const Q = (i, fn) => { const a = S[i], b = end(i), d = Math.min(b, 670.0) - a; CENAS.push([(x, y) => plano(x, y, mk(fn(d, a), d)), a, b]); };
const Qt = (a, b, fn) => { const d = Math.min(b, 670.0) - a; CENAS.push([(x, y) => plano(x, y, mk(fn(d, a), d)), a, b]); };
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


const EXTRA = (i, o = {}) => { const C = [['rosa', 'long', '#6B3A22'], ['azul', null, null], ['amarelo', 'afro', '#2a1b18'], ['verde', 'bob', '#D9B65A'], ['laranja', null, null], ['terno2', null, null], ['rosa', 'bun', '#3a2030'], ['jaleco', null, null]][i % 8]; return H({ outfit: C[0], hair: C[1], hairc: C[2], lash: !!C[1], glow: 0, ...o }); };
const hab = (c, lines, w, pos, size = 60) => { const L = Array.isArray(lines) ? lines : [lines]; const W = Math.max(640, Math.max(...L.map((l) => l.length)) * size * .62 + 80), Hh = Math.round(size * 1.25 * L.length / .72 + 60); const m = cut(speechTex(L, { w: W, h: Hh, size }), w, w * Hh / W); m.position.set(...pos); m.renderOrder = 6; c.add(m); return m; };
const nube = (c, lines, w, pos, size = 56) => bubble(c, lines, w, { w: 640, h: 400, size });
const shake = (cam, amp, u) => { if (amp <= 0) return; cam.position.x += Math.sin(u * 63) * amp; cam.position.y += Math.cos(u * 51) * amp; };
const calida = (c, pos, k = 5, r = 7) => { const l = new THREE.PointLight('#FFD8A0', k, r, 1.6); l.position.set(...pos); c.add(l); return l; };

// ===================== PERSONAJES Y AYUDAS DEL ASCENSOR =====================
const NORA = (o = {}) => H({ outfit: 'rosa', hair: 'long', hairc: '#1E120C', lash: true, glow: .1, ...o });
const ABUELA = (o = {}) => H({ outfit: 'verde', hair: 'old', hairc: '#E8E2D8', glasses: true, lash: true, glow: 0, ...o });
const MADRE = (o = {}) => H({ outfit: 'azul', hair: 'bun', hairc: '#3A2418', lash: true, glow: 0, ...o });
const TEC = (o = {}) => H({ outfit: 'laranja', glasses: true, glow: 0, ...o });
const OTIS = (o = {}) => H({ outfit: 'terno', hair: 'old', hairc: '#6A5A4A', glow: 0, ...o });
const NICK = (o = {}) => H({ outfit: 'terno2', glow: 0, ...o });
const ASC = (o = {}) => ({ amb: 'ascensor', ambo: o, k: 1.3 });
const trayP = (k) => k.pose({ armL: [22, 115], armR: [22, 115] });
const trayAt = (b, k) => { const p = new THREE.Vector3(), q = new THREE.Vector3(); k.arms.R.hand.getWorldPosition(p); k.arms.L.hand.getWorldPosition(q); b.position.set((p.x + q.x) / 2, (p.y + q.y) / 2 - .02, (p.z + q.z) / 2 + .12); };
const EMG = { exposure: 1.08, bloom: .32, bloomT: .94, vig: .6 };
const luz = (c, v, fl = 0) => c.userData.luz(v, fl);
const parpadeo = (u, a, b) => (u > a && u < b ? (Math.sin(u * 37) > .2 ? 1 : 0) : 0);
// cámara estándar dentro de la cabina (mirando al fondo)
const CC = (x0 = -.5, x1 = .3, ty = 1.35, dz = 0) => [[x0, 1.6, 3.1 + dz], [0, ty, -.7], [x1, 1.55, 2.7 + dz], [0, ty, -.7]];
// posiciones en la cabina
const PY = [-.45, -.7], PN = [.45, -.8];
// sentado en el suelo
const suelo = (k) => { k.pose({ armL: [8, 6], armR: [8, 6] }); hideLegs(k); };
const SUE = -.42;
// burbuja en el suelo (anillo)
const anillo = (c, r, col = '#7FD0FF', op = .7) => { const m = new THREE.Mesh(new THREE.RingGeometry(r - .03, r, 64), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: op, side: THREE.DoubleSide, depthWrite: false })); m.rotation.x = -Math.PI / 2; m.position.y = .02; c.add(m); return m; };
const burbuja = (c, r, col = '#9FE0FF') => { const m = new THREE.Mesh(new THREE.SphereGeometry(r, 32, 20), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: .14, depthWrite: false })); c.add(m); const e = new THREE.Mesh(new THREE.SphereGeometry(r, 32, 20), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: .35, wireframe: true, depthWrite: false })); m.add(e); return m; };
// fuegos artificiales
const fuegos = (c, n = 5, area = [-8, 8, 6, 14, -20]) => { const F = []; const R = rng(9); const cols = ['#FF5A7A', '#FFD25A', '#7AE0FF', '#B88AFF', '#7AFF9A']; for (let i = 0; i < n; i++) { const g = new THREE.Group(); const P = []; for (let j = 0; j < 18; j++) { const s = glowSprite(cols[i % 5], .5, 0); g.add(s); P.push([s, Math.cos(j / 18 * 6.28), Math.sin(j / 18 * 6.28)]); } g.position.set(area[0] + R() * (area[1] - area[0]), area[2] + R() * (area[3] - area[2]), area[4]); c.add(g); F.push([g, P, R() * 3]); } return (u, on = 1) => F.forEach(([g, P, ph]) => { const f = ((u + ph) % 2.2) / 2.2; P.forEach(([s, dx, dy]) => { s.position.set(dx * f * 3, dy * f * 3 - f * f, 0); s.material.opacity = on * (1 - f) * (f > .05 ? 1 : 0); }); }); };
// móvil simple
const movilT = (lines, o = {}) => canvasTex(540, 1000, (x) => { x.fillStyle = o.bg || '#141830'; x.fillRect(0, 0, 540, 1000); x.fillStyle = '#fff'; x.textAlign = 'center'; x.font = '700 70px Inter'; x.fillText(o.hora || '23:31', 270, 130); if (o.bat != null) { x.strokeStyle = '#fff'; x.lineWidth = 6; x.strokeRect(380, 30, 110, 50); x.fillStyle = o.bat < 10 ? '#FF4A3A' : '#7AE07A'; x.fillRect(386, 36, 98 * o.bat / 100, 38); x.font = '700 34px Inter'; x.fillStyle = '#fff'; x.fillText(o.bat + '%', 300, 70); } x.font = '800 52px Inter'; (lines || []).forEach((l, i) => { x.fillStyle = i === 0 ? '#FF7A6A' : '#F4F0E4'; x.fillText(l, 270, 480 + i * 70); }); });
const movil = (lines, o) => { const g = new THREE.Group(); g.add(box(.62, 1.18, .06, std('#1A1A24', { metalness: .4 }), 0, 0, 0, false)); const s = new THREE.Mesh(new THREE.PlaneGeometry(.56, 1.04), new THREE.MeshBasicMaterial({ map: movilT(lines, o), toneMapped: false })); s.position.z = .032; g.add(s); return g; };
// bandeja de turrones
const bandeja = (n = 8) => { const g = new THREE.Group(); g.add(box(.5, .03, .32, std('#C8CCD0', { metalness: .7, roughness: .3 }), 0, 0, 0)); const T = []; for (let i = 0; i < n; i++) { const t = box(.1, .04, .07, std(i % 2 ? '#E8C890' : '#7A4A2A'), -.18 + (i % 4) * .12, .035, -.08 + Math.floor(i / 4) * .14); g.add(t); T.push(t); } g.userData.T = T; return g; };
// bolsa de uvas
const uvas = () => { const g = new THREE.Group(); g.add(box(.26, .3, .14, std('#F4F0E4', { roughness: .9 }), 0, .15, 0)); for (let i = 0; i < 6; i++) { const b = new THREE.Mesh(new THREE.SphereGeometry(.035, 10, 8), std('#9ACA5A', { roughness: .3 })); b.position.set(-.06 + (i % 3) * .06, .32 + Math.floor(i / 3) * .05, 0); g.add(b); } return g; };
const uva = () => { const b = new THREE.Mesh(new THREE.SphereGeometry(.04, 10, 8), std('#9ACA5A', { roughness: .3 })); return b; };
const sepia = { exposure: 1.0, vig: .65, bloom: .2 };
// número grande que cambia
const numLab = (c, pos, w, o = {}) => { const m = lab(c, [' '], w, pos, o); m.visible = false; let last = null; const f = (txt) => { if (txt !== last) { last = txt; if (txt) { m.material.map.dispose(); m.material.map = labelT([txt], { bg: o.bg || '#2A2A34', fg: o.fg || '#F2C14E', size: o.size || 72, w: o.w || 720, h: o.h || 150 }); } } m.visible = !!txt; return m; }; f.m = m; return f; };
const corazon = (c, s = .35) => { const ht = cut(wordTex('♥', '#E8667F', 170), s, s * .8); ht.renderOrder = 6; c.add(ht); return ht; };

// ===================== CENAS =====================
// 0. Gancho: "Estás atrapado en un ascensor, entre el piso 7 y el piso 8"
Q(0, (d, a) => { const t7 = R0(a, '7'); return { ...ASC({ luz: 0 }), fov: 30, atores: [YO({ x: -.3, z: -.6, eyes: [[0, 'wide'], [1.6, 'lookl'], [2.6, 'look']] })],
  extra: (c) => { luz(c, 0); const t = lab(c, ['ENTRE EL PISO 7 Y EL 8'], 2.0, [0, 2.2, -.3]); return { update: (u, t2, cam) => { c.userData.display.userData.set('7½'); pop(t, u, t7, 99, cam); } }; },
  c: [[0, 1.5, 2.2], [0, 1.4, -.8], [0, 1.6, 3.2], [0, 1.4, -.8]], range: 2, look: EMG }; });
// 1. La luz parpadea. El botón de alarma no hace nada
Q(1, (d, a) => { const tb = R0(a, 'boton'), tn = R0(a, 'nada'); return { ...ASC(), fov: 28, atores: [YO({ x: .35, z: -1.0, eyes: [[0, 'look'], [tn, 'flat']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > tb ? 75 + Math.sin(u * 14) * 4 : 12, 0] }) })],
  extra: (c) => { const t = lw(c, ['LA ALARMA NO HACE NADA'], 1.6, [.5, 2.15, -1.1]); return { update: (u, t2, cam) => { const f = u < tb ? parpadeo(u, 0, tb) : 0; luz(c, u < tb ? f : 0); c.userData.botonera.userData.alarm.material.emissiveIntensity = u > tb ? .3 + Math.abs(Math.sin(u * 14)) : .3; pop(t, u, tn, 99, cam); } }; },
  c: [[.95, 1.6, 1.4], [.7, 1.35, -1.5], [.9, 1.55, 1.0], [.8, 1.35, -1.5]], range: 1.5, look: EMG }; });
// 2. Y a medio metro de ti está Nora. Tu vecina nueva. La chica que te gusta desde el primer día que la viste en el portal
Q(2, (d, a) => { const tn = R0(a, 'nora'), tv = R0(a, 'vecina'), tg = R0(a, 'gusta'), tp = R0(a, 'portal'); let rb; return { ...ASC({ luz: 0 }), fov: 30, atores: [YO({ x: PY[0], z: PY[1], eyes: [[0, 'look'], [tg, 'heart']] }), NORA({ x: PN[0], z: PN[1], eyes: [[0, 'lookl'], [tg, 'happy']] })],
  extra: (c, s, A) => { luz(c, 0); rb = rubor(A[0]); const m = lw(c, ['MEDIO METRO'], 1.1, [0, 1.9, -.3], { size: 80 }); const n = lab(c, ['NORA · TU VECINA NUEVA'], 1.9, [.4, 2.2, -.6], { bg: '#D66A86', fg: '#fff' }); const t = lw(c, ['TE GUSTA DESDE EL PRIMER DÍA'], 2.2, [0, 2.2, -.4]); const ht = corazon(c);
    return { update: (u, t2, cam) => { pop(m, u, .1, tn - .1, cam); pop(n, u, tn, tg - .1, cam); pop(t, u, tg, 99, cam); rb(smooth(tg, tg + .5, u)); ht.visible = u > tg; ht.position.set(PY[0], 1.95 + ((u * .4) % .3), PY[1]); ht.scale.setScalar(1 + Math.abs(Math.sin(u * 6)) * .3); pointer(ht, cam); } }; },
  c: [[-.6, 1.6, 2.6], [0, 1.25, -.7], [.4, 1.55, 2.3], [0, 1.25, -.7]], range: 1.8, look: EMG }; });
// 3. ¿Cómo has llegado hasta aquí? Rebobinemos
Q(3, (d, a) => { const tr = R0(a, 'rebobinemos'); return { ...ASC({ luz: 0 }), fov: 30, atores: [YO({ x: PY[0], z: PY[1], eyes: [[0, 'look'], [tr, 'shut']] }), NORA({ x: PN[0], z: PN[1], eyes: [[0, 'lookl'], [tr, 'shut']] })],
  extra: (c) => { luz(c, 0); const q = lab(c, ['¿CÓMO HAS LLEGADO AQUÍ?'], 2.0, [0, 2.2, -.4]); const r = lab(c, ['◀◀ REBOBINEMOS'], 1.7, [0, 2.2, -.4], { bg: '#FBF7EC', fg: '#C9361F' }); return { update: (u, t2, cam) => { pop(q, u, .1, tr - .1, cam); pop(r, u, tr, 99, cam); } }; },
  c: CC(0, 0), range: 2, look: EMG, lookFn: (u) => (u > tr ? { exposure: 1.2, bloom: .55, vig: .7 } : {}) }; });
// 4. 31 de diciembre. Las 11 de la noche. Vives en el tercero
Q(4, (d, a) => { const t11 = R0(a, '11'), tv = R0(a, 'vives'); return { amb: 'barrio', ambo: { night: true }, fov: 34, k: 1.25, atores: [],
  extra: (c) => { const L = [lab(c, ['31 DE DICIEMBRE'], 2.4, [0, 3.3, 2], { bg: '#C9361F', fg: '#fff' }), lw(c, ['23:00'], 1.2, [0, 2.6, 2], { size: 100, w: 500 }), lw(c, ['VIVES EN EL 3º'], 1.9, [0, 1.9, 2])]; const f = fuegos(c, 3, [-8, 8, 8, 14, -26]);
    return { update: (u, t2, cam) => { pop(L[0], u, .1, 99, cam); pop(L[1], u, t11, 99, cam); pop(L[2], u, tv, 99, cam); f(u, .5); } }; },
  c: [[0, 2.4, 8.0], [0, 2.8, 2], [0, 2.6, 7.0], [0, 3.0, 2]], range: 4, blur: 6, look: { exposure: 1.05, bloom: .5 } }; });
// 5. Tu madre te manda a casa de la abuela, en el piso 12, con una bandeja de turrones
Q(5, (d, a) => { const ta = R0(a, 'abuela'), tt = R0(a, 'turrones'); return { amb: 'sala', ambo: { night: true }, fov: 30, atores: [MADRE({ x: .7, z: .2, talk: [[0, 3]], pose: (k, u) => (u > tt ? k.pose({ armL: [12, 8], armR: [70, 40] }) : talkP(k, u)) }), YO({ x: -.6, z: .3, eyes: [[0, 'flat'], [tt, 'look']], pose: (k, u) => (u > tt + .4 ? trayP(k) : k.pose()) })],
  extra: (c, s, A) => { const b = bandeja(); b.scale.setScalar(1.2); c.add(b); const L = [lw(c, ['A CASA DE LA ABUELA · PISO 12'], 2.2, [0, 2.3, .2]), lab(c, ['TURRONES'], 1.2, [-.5, 1.95, .4])];
    return { update: (u, t2, cam) => { const k = smooth(tt, tt + .6, u); const p = hand(A[0]), q = hand(A[1]); b.position.set(lerp(p.x - .1, q.x + .25, k), lerp(p.y, q.y, k), lerp(p.z, q.z, k) + .15); b.visible = u > tt - .4; pop(L[0], u, ta, 99, cam); pop(L[1], u, tt, 99, cam); } }; },
  c: [[0, 1.6, 3.6], [0, 1.3, .2], [0, 1.6, 3.0], [0, 1.3, .2]], range: 2.4 }; });
// 6. Llamas al ascensor. Se abre la puerta. Y dentro está Nora, con una bolsa de uvas para las campanadas
Q(6, (d, a) => { const ts = R0(a, 'abre'), tn = R0(a, 'nora'), tu = R0(a, 'uvas'); return { amb: 'rellano', ambo: { piso: 3 }, fov: 30, atores: [YO({ x: -1.0, z: -1.6, eyes: [[0, 'look'], [tn, 'wide']], pose: (k, u) => (u < 1 ? k.pose({ armL: [22, 115], armR: [80, 0] }) : trayP(k)) }), NORA({ x: -.15, z: -3.6, eyes: [[0, 'look'], [tn + .4, 'happy']], pose: (k) => k.pose({ armL: [12, 8], armR: [45, 30] }) })],
  extra: (c, s, A) => { const b = bandeja(); c.add(b); const g = uvas(); c.add(g); const t = lab(c, ['UVAS PARA LAS CAMPANADAS'], 2.0, [0, 2.75, -2.6], { size: 64 }); let rb = rubor(A[0]);
    return { update: (u, t2, cam) => { c.userData.doors(smooth(ts - .2, ts + 1, u)); trayAt(b, A[0]); const q = hand(A[1]); g.position.set(q.x, q.y - .25, q.z + .05); pop(t, u, tu, 99, cam); rb(smooth(tn, tn + .5, u)); } }; },
  c: [[1.8, 1.6, 2.4], [.2, 1.3, -2.2], [1.4, 1.55, 2.0], [.1, 1.3, -2.4]], range: 3.2 }; });
// 7. Y antes de que se cierre esa puerta: suscríbete al canal y activa la campanita
Q(7, (d, a) => { const ts = R0(a, 'suscribete'), tc = R0(a, 'campanita'); return { amb: 'rellano', ambo: { piso: 3, open: .9 }, fov: 32, atores: [YO({ x: -1.6, z: -1.0, eyes: [[0, 'happy']], pose: (k, u) => (u < ts ? wave(k, u) : point(k)) }), NORA({ x: -2.3, z: -1.4, eyes: [[0, 'happy']], pose: wave })],
  extra: (c) => { const s = suscribe(2.6); s.position.set(1.0, 1.9, -1.2); c.add(s); const b = brillos(c, 14, '#FFE27A'); const q = lw(c, ['¡ANTES DE QUE SE CIERRE!'], 2.2, [.6, 2.95, -1.3]);
    return { update: (u, t, cam) => { const k = smooth(ts - .3, ts, u); s.scale.setScalar(Math.max(.01, k * (1 + .06 * Math.sin(u * 8) * (u > ts + 1 ? 1 : 0)))); s.rotation.z = u > tc && u < tc + 1.4 ? Math.sin(u * 40) * .06 : 0; b(u, [1.0, 1.9, -1.1, 1.2], smooth(tc, tc + .2, u)); pop(q, u, .1, ts - .2, cam); } }; },
  c: [[0, 1.7, 4.6], [-.2, 1.6, -1.2], [0, 1.7, 4.2], [-.2, 1.6, -1.2]], k: 1.25, range: 6, blur: 4 }; });
// 8. Así no te pierdes la próxima. Y ahora sí. Vamos a ver cómo sobrevives a esta Nochevieja
Q(8, (d, a) => { const tv = R0(a, 'vamos'), tn = R0(a, 'nochevieja'); return { amb: 'rellano', ambo: { piso: 3, open: 1 }, fov: 32, atores: [YO({ x: -.6, z: -1.2, eyes: [[0, 'happy'], [tv, 'smug']], move: (u) => [lerp(-.6, -.25, smooth(tv, tv + 2, u)), 0, lerp(-1.2, -3.5, smooth(tv, tv + 2.4, u))], pose: (k, u) => (u > tv && u < tv + 2.4 ? k.walk(u) : k.pose()) })],
  extra: (c) => { const r = lab(c, ['¡NO TE PIERDAS LA PRÓXIMA!'], 2.2, [0, 2.9, -1.4]); const t = lab(c, ['SOBREVIVIR A LA NOCHEVIEJA'], 2.4, [0, 2.9, -1.4], { bg: '#C9361F', fg: '#fff' }); return { update: (u, t2, cam) => { pop(r, u, .1, tv - .1, cam); pop(t, u, tn - .3, 99, cam); } }; },
  c: [[0, 1.7, 3.6], [0, 1.4, -2.4], [0, 1.6, 2.6], [0, 1.4, -3.0]], k: 1.25, range: 3 }; });
// 9. Nora te sonríe. Esta noche su familia cena en casa de su tía, también en el 12
Q(9, (d, a) => { const tf = R0(a, 'familia'), t12 = R0(a, '12'); return { ...ASC({ piso: 3 }), fov: 30, atores: [YO({ x: PY[0], z: PY[1], eyes: [[0, 'wide']], pose: trayP }), NORA({ x: PN[0], z: PN[1], eyes: [[0, 'happy']], pose: (k) => k.pose({ armL: [12, 8], armR: [45, 30] }) })],
  extra: (c, s, A) => { const b = bandeja(); c.add(b); const g = uvas(); c.add(g); const n = nube(c, ['CENA EN CASA', 'DE SU TÍA · PISO 12'], 1.3, [0, 0, 0]); n.position.set(.5, 1.95, -.5); const rb = rubor(A[0]);
    return { update: (u, t2, cam) => { trayAt(b, A[0]); const q = hand(A[1]); g.position.set(q.x, q.y - .25, q.z + .05); pop(n, u, tf, 99, cam); rb(.6); } }; },
  c: CC(-.4, .3), range: 1.8 }; });
// 10. Te dice: "¿Al 12? Yo también". Tú dices "sí" con una voz que no es la tuya
Q(10, (d, a) => { const tt = R0(a, 'tambien'), ts = R0(a, 'si'), tv = R0(a, 'voz'); return { ...ASC({ piso: 3 }), fov: 28, atores: [YO({ x: PY[0], z: PY[1], eyes: [[0, 'wide'], [ts, 'happy']], pose: trayP }), NORA({ x: PN[0], z: PN[1], eyes: [[0, 'happy']], talk: [[0, tt + .6]] })],
  extra: (c, s, A) => { const b = bandeja(); c.add(b); const h1 = hab(c, '¿AL 12? YO TAMBIÉN', 1.5, [.5, 2.2, -.7], 60); const h2 = hab(c, 'sí… (GALLO)', 1.2, [-.5, 2.2, -.6], 64); const rb = rubor(A[0]);
    return { update: (u, t2, cam) => { trayAt(b, A[0]); pop(h1, u, .1, ts - .2, cam); pop(h2, u, ts, 99, cam); rb(smooth(ts, ts + .3, u)); } }; },
  c: CC(-.3, .2, 1.35), range: 1.8 }; });
// 11. Nora se mudó hace dos meses. Al noveno. Desde entonces, el ascensor: el sitio más difícil del mundo
Q(11, (d, a) => { const tn = R0(a, 'noveno'), td = R0(a, 'dificil'); return { amb: 'rellano', ambo: { piso: 9, portal: false }, fov: 32, atores: [NORA({ x: 1.2, z: -1.5, eyes: [[0, 'happy']], pose: (k) => k.pose({ armL: [60, 70], armR: [60, 70] }) }), EXTRA(4, { x: 2.4, z: -1.8, pose: trayP })],
  extra: (c, s, A) => { const cj = caja(.6); c.add(cj); const cj2 = caja(.5); cj2.position.set(3.0, 0, -2.4); c.add(cj2); const L = [lw(c, ['SE MUDÓ HACE 2 MESES'], 2.0, [1.0, 2.55, -1.6]), lab(c, ['AL 9º'], 1.0, [1.0, 2.55, -1.6], { size: 90, w: 420 }), lab(c, ['EL SITIO MÁS DIFÍCIL DEL MUNDO'], 2.4, [1.0, 2.55, -1.6], { bg: '#C9361F', fg: '#fff' })];
    return { update: (u, t2, cam) => { const p = hand(A[0]); cj.position.set(p.x, p.y - .3, p.z + .25); pop(L[0], u, .1, tn - .1, cam); pop(L[1], u, tn, td - 1.5, cam); pop(L[2], u, td - .8, 99, cam); } }; },
  c: [[2.6, 1.7, 3.0], [1.6, 1.4, -1.6], [1.8, 1.6, 2.4], [1.4, 1.4, -1.6]], k: 1.15, range: 3 }; });
// 12. Cada mañana coincidís. Cada mañana, los dos mirando los números. Cada mañana, tú pensando qué decir
Q(12, (d, a) => { const tn = R0(a, 'numeros'), tp = R0(a, 'pensando'); return { ...ASC({ piso: 9 }), fov: 30, atores: [YO({ x: PY[0], z: PY[1], eyes: [[0, 'look'], [tp, 'down']], pose: (k, u) => k.pose({ head: u > tp ? 8 : 0 }) }), NORA({ x: PN[0], z: PN[1], eyes: [[0, 'look']], pose: (k) => k.pose({ armL: [12, 8], armR: [55, 40] }) })],
  extra: (c, s, A) => { const ph = movil(['', ''], { hora: '08:01' }); ph.scale.setScalar(.25); c.add(ph); const L = [lw(c, ['CADA MAÑANA'], 1.3, [0, 2.2, -.5]), lab(c, ['MIRANDO LOS NÚMEROS'], 1.8, [0, 2.2, -.5])]; const n = nube(c, ['¿QUÉ LE DIGO?'], 1.0, [0, 0, 0]); n.position.set(-.9, 2.1, -.5);
    return { update: (u, t2, cam) => { c.userData.display.userData.set(Math.max(0, 9 - Math.floor(u / 1.0)), '▼'); const q = hand(A[1]); ph.position.set(q.x, q.y + .12, q.z + .08); pointer(ph, cam); pop(L[0], u, .1, tn - .1, cam); pop(L[1], u, tn, tp - .1, cam); pop(n, u, tp, 99, cam); } }; },
  c: CC(-.3, .3, 1.5), range: 1.8 }; });
// 13. Y cada mañana, justo cuando se te ocurre algo, ya habéis llegado al bajo. 32 segundos. Lo has cronometrado
Q(13, (d, a) => { const tb = R0(a, 'bajo'), t32 = R0(a, '32'); return { ...ASC({ piso: 1 }), fov: 30, atores: [YO({ x: PY[0], z: PY[1], eyes: [[0, 'look'], [tb - .6, 'wide'], [tb + .3, 'sad']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > tb - .6 && u < tb + .3 ? 90 : 12, 20] }) }), NORA({ x: PN[0], z: PN[1], eyes: [[0, 'look']], move: (u) => [PN[0], 0, lerp(PN[1], -3.2, smooth(tb, tb + 2, u))], pose: (k, u) => (u > tb ? k.walk(u) : k.pose()) })],
  extra: (c) => { const t = lw(c, ['¡YA HABÉIS LLEGADO AL BAJO!'], 1.9, [0, 2.2, -.4]); const cr = numLab(c, [0, 2.2, -.4], 1.3, { size: 100, w: 600 });
    return { update: (u, t2, cam) => { c.userData.display.userData.set(u > tb ? 0 : 1, u > tb ? '' : '▼'); c.userData.doors(smooth(tb, tb + .8, u)); pop(t, u, tb, t32 - .1, cam); if (u > t32) { cr('⏱ 0:' + String(Math.min(32, Math.floor((u - t32) * 18))).padStart(2, '0')); } else cr(''); } }; },
  c: CC(-.4, .2, 1.3), range: 1.8 }; });
// 14. Pero hoy no vais al bajo. Vais al 12. Más tiempo. Tienes un plan: decirle algo. Lo que sea. El frío. Las uvas
Q(14, (d, a) => { const t12 = R0(a, '12'), tp = R0(a, 'plan'), tf = R0(a, 'frio'), tu = R0(a, 'uvas'); return { ...ASC({ piso: 3 }), fov: 30, atores: [YO({ x: PY[0], z: PY[1], eyes: [[0, 'look'], [tp, 'smug']], pose: trayP }), NORA({ x: PN[0], z: PN[1], eyes: [[0, 'look']], pose: (k) => k.pose({ armL: [12, 8], armR: [45, 30] }) })],
  extra: (c, s, A) => { const b = bandeja(); c.add(b); const g = uvas(); c.add(g); const L = [lab(c, ['HOY: AL 12 · MÁS TIEMPO'], 2.0, [0, 2.2, -.4]), lw(c, ['PLAN: DECIRLE ALGO'], 1.8, [0, 2.2, -.4])]; const n = nube(c, ['¿EL FRÍO?', '¿LAS UVAS?'], 1.1, [0, 0, 0]); n.position.set(-1.0, 1.95, -.4);
    return { update: (u, t2, cam) => { c.userData.display.userData.set(3, '▲'); trayAt(b, A[0]); const q = hand(A[1]); g.position.set(q.x, q.y - .25, q.z + .05); pop(L[0], u, t12 - .3, tp - .1, cam); pop(L[1], u, tp, tf - .2, cam); pop(n, u, tf - .2, 99, cam); } }; },
  c: CC(-.4, .3, 1.35), range: 1.8 }; });
// 15. Piso 4. Abres la boca. La cierras. Fracaso
Q(15, (d, a) => { const ta = R0(a, 'abres'), tc = R0(a, 'cierras'), tf = R0(a, 'fracaso'); return { ...ASC({ piso: 4 }), fov: 26, atores: [YO({ x: PY[0], z: PY[1], eyes: [[0, 'look'], [ta, 'wide'], [tc, 'flat'], [tf, 'sad']], pose: trayP }), NORA({ x: PN[0], z: PN[1], eyes: [[0, 'look']] })],
  extra: (c, s, A) => { const b = bandeja(); c.add(b); const t = lab(c, ['FRACASO'], 1.2, [-.4, 2.2, -.5], { bg: '#C9361F', fg: '#fff', size: 90 }); const o = cut(wordTex('…', '#2A2A34', 150), .3, .24); o.renderOrder = 6; c.add(o);
    return { update: (u, t2, cam) => { c.userData.display.userData.set(4, '▲'); trayAt(b, A[0]); o.visible = u > ta && u < tc; o.position.set(-.2, 1.85, -.5); pointer(o, cam); pop(t, u, tf, 99, cam); } }; },
  c: [[-1.0, 1.6, 2.0], [-.3, 1.4, -.7], [-.8, 1.55, 1.7], [-.3, 1.4, -.7]], range: 1.4 }; });
// 16. Piso 5. Piso 6. Piso 7. Y, de repente, un golpe seco (corte del edificio)
Q(16, (d, a) => { const t6 = R0(a, '6'), t7 = R0(a, '7'), tg = R0(a, 'golpe'); const cy = (u) => lerp(4 * PISO, 7.5 * PISO, smooth(0, tg, u)); return { amb: 'hueco', fov: 30, k: 1.25, atores: [YO({ x: -.5, z: -.6, move: (u) => [-.5, cy(u) + .06, -.6], eyes: [[0, 'look'], [tg, 'wide']] }), NORA({ x: .5, z: -.7, move: (u) => [.5, cy(u) + .06, -.7], eyes: [[0, 'look'], [tg, 'wide']] })],
  extra: (c) => { const n = numLab(c, [2.2, 0, .6], 1.3, { size: 100, w: 600 }); const g = lab(c, ['¡GOLPE SECO!'], 1.6, [0, 0, .6], { bg: '#C9361F', fg: '#fff' });
    return { update: (u, t2, cam) => { const y = cy(u); c.userData.setCab(y); n(u < t6 ? 'PISO 5' : u < t7 ? 'PISO 6' : 'PISO 7'); n.m.position.set(2.1, y + 2.3, .6); pointer(n.m, cam); g.position.set(0, y + 3.5, .6); pop(g, u, tg, 99, cam); shake(cam, u > tg && u < tg + .6 ? .06 : 0, u); } }; },
  cam: [0, .2, .4, .6, .8, 1].map((f) => { const u = f * d; const y = lerp(4 * PISO, 7.5 * PISO, smooth(0, tg, u)); return [u, [0, y + 1.7, 4.6], [0, y + 1.4, -.6]]; }), f: [[0, 5.2], [d, 5.2]], k: 1, range: 3, look: { exposure: 1.05, bloom: .4 } }; });
// 17. Clanc. El ascensor se para. La luz parpadea. Y se queda en una lucecita amarilla de emergencia
Q(17, (d, a) => { const tp = R0(a, 'parpadea'), te = R0(a, 'emergencia'), tq = R0(a, 'queda'); return { ...ASC(), fov: 30, atores: [YO({ x: PY[0], z: PY[1], eyes: [[0, 'wide']], pose: trayP }), NORA({ x: PN[0], z: PN[1], eyes: [[0, 'wide']], pose: (k) => k.pose({ armL: [12, 8], armR: [45, 30] }) })],
  extra: (c, s, A) => { const b = bandeja(); c.add(b); const g = uvas(); c.add(g); const cl = lab(c, ['¡CLANC!'], 1.4, [0, 2.2, -.4], { size: 100, bg: '#C9361F', fg: '#fff' }); const t = lab(c, ['LUZ DE EMERGENCIA'], 1.6, [0, 2.2, -.4], { bg: '#F2A640', fg: '#2A2A34' });
    return { update: (u, t2, cam) => { c.userData.display.userData.set('7½'); const v = u < tp ? 1 : u < tq ? parpadeo(u, tp, tq) : 0; luz(c, v); trayAt(b, A[0]); const q = hand(A[1]); g.position.set(q.x, q.y - .25, q.z + .05); pop(cl, u, 0, tp - .2, cam); pop(t, u, te - .3, 99, cam); shake(cam, u < .6 ? .05 : 0, u); } }; },
  c: CC(-.3, .2), range: 2, lookFn: (u) => (u > tq ? EMG : {}) }; });
// 18. Silencio. Nora te mira. Tú miras los botones
Q(18, (d, a) => { const tn = R0(a, 'nora'), tb = R0(a, 'botones'); return { ...ASC({ luz: 0 }), fov: 30, atores: [YO({ x: PY[0], z: PY[1], eyes: [[0, 'flat'], [tb, 'look']], pose: trayP }), NORA({ x: PN[0], z: PN[1], eyes: [[0, 'flat'], [tn, 'lookl']] })],
  extra: (c, s, A) => { luz(c, 0); const b = bandeja(); c.add(b); const t = lw(c, ['SILENCIO…'], 1.3, [0, 2.2, -.4], { size: 90 }); return { update: (u, t2, cam) => { c.userData.display.userData.set('7½'); trayAt(b, A[0]); pop(t, u, .1, 99, cam); } }; },
  c: [[0, 1.55, 2.8], [0, 1.3, -.7], [.3, 1.5, 2.5], [.4, 1.3, -1.2]], range: 2, look: EMG }; });
// 19. Primero, lo obvio: pulsas todos los botones. El 7, el 8, el 12, el de abrir puertas. Nada
Q(19, (d, a) => { const tt = R0(a, 'todos'), tn = R0(a, 'nada'); return { ...ASC({ luz: 0 }), fov: 26, atores: [YO({ x: .35, z: -1.05, eyes: [[0, 'angry'], [tn, 'flat']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [80 + Math.sin(u * 9) * 10, 0] }) })],
  extra: (c) => { luz(c, 0); const B = c.userData.botonera.userData.btns; const t = lab(c, ['PULSAS TODOS LOS BOTONES'], 1.6, [.6, 2.15, -1.1]); const N = lw(c, ['NADA'], .7, [.85, 1.85, -1.2], { size: 90 });
    return { update: (u, t2, cam) => { B.forEach((b, i) => (b.material.emissiveIntensity = u > tt && u < tn && Math.floor(u * 6) % B.length === i ? 2.5 : .15)); pop(t, u, .1, tn - .1, cam); pop(N, u, tn, 99, cam); } }; },
  c: [[.95, 1.5, 1.2], [.8, 1.3, -1.5], [.9, 1.5, .9], [.85, 1.3, -1.5]], range: 1.2, look: EMG }; });
// 20. Pulsas el botón de cerrar puertas, por si acaso. Nora: "Ese botón no sirve para nada, ¿sabes?"
Q(20, (d, a) => { const te = R0(a, 'ese'); return { ...ASC({ luz: 0 }), fov: 28, atores: [YO({ x: .35, z: -1.05, eyes: [[0, 'look'], [te, 'flat']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [80, 0] }) }), NORA({ x: -.5, z: -.6, eyes: [[0, 'smug']], talk: [[te, d]] })],
  extra: (c) => { luz(c, 0); const t = lw(c, ['◀▶ CERRAR PUERTAS'], 1.4, [.8, 2.2, -1.1]); const h = hab(c, ['ESE BOTÓN NO SIRVE', 'PARA NADA, ¿SABES?'], 1.6, [-.4, 2.2, -.6], 56);
    return { update: (u, t2, cam) => { pop(t, u, .1, te - .1, cam); pop(h, u, te, 99, cam); } }; },
  c: CC(-.2, .3, 1.35), range: 2, look: EMG }; });
// 21. Y tiene razón. En muchos ascensores, el botón de cerrar puertas no hace nada. Para que sientas que tienes el control
Q(21, (d, a) => { const tm = R0(a, 'muchos'), tc = R0(a, 'control'); return { amb: 'gris', fov: 30, atores: [],
  extra: (c) => { const bt = new THREE.Group(); bt.add(box(1.0, 1.4, .08, std('#8E9296', { metalness: .7, roughness: .3 }), 0, 0, 0)); const btn = new THREE.Mesh(new THREE.CylinderGeometry(.22, .22, .08, 24), new THREE.MeshStandardMaterial({ color: '#F4E8C8', emissive: '#F4E8C8', emissiveIntensity: .2 })); btn.rotation.x = Math.PI / 2; btn.position.z = .08; bt.add(btn); const ic = cut(labelT(['▶◀'], { bg: 'rgba(0,0,0,0)', fg: '#2A2A34', size: 120, w: 300, h: 200 }), .3, .2); ic.position.z = .13; bt.add(ic); bt.position.set(0, 1.4, 0); c.add(bt); const pl = new THREE.PointLight('#FFF4E4', 14, 8, 1.4); pl.position.set(.5, 2.4, 2); c.add(pl);
    const L = [lab(c, ['EL BOTÓN DE CERRAR…'], 2.0, [0, 2.3, .2]), lw(c, ['…MUCHAS VECES NO HACE NADA'], 2.4, [0, 2.3, .2]), lab(c, ['SOLO TE HACE SENTIR QUE TIENES EL CONTROL'], 3.0, [0, .45, .4], { size: 56, w: 1300 })]; const x = cut(wordTex('✕', '#E8344A', 200), .9, .7); x.position.set(0, 1.4, .2); x.renderOrder = 6; c.add(x);
    return { update: (u, t2, cam) => { btn.position.z = .08 - .03 * Math.abs(Math.sin(u * 6)); pop(L[0], u, .1, tm - .1, cam); pop(L[1], u, tm, 99, cam); pop(L[2], u, tc - 1.2, 99, cam); x.visible = u > tm + .8; } }; },
  c: [[0, 1.5, 4.0], [0, 1.4, 0], [0, 1.5, 3.4], [0, 1.4, 0]], k: 1.25, range: 3 }; });
// 22. Luego pulsas el botón de la campanita. Suena un pitido. Una voz, desde un altavoz: "Servicio técnico, ¿en qué puedo ayudarle?"
Q(22, (d, a) => { const tc = R0(a, 'campanita'), tp = R0(a, 'pitido'), ts = R0(a, 'servicio'); return { ...ASC({ luz: 0 }), fov: 26, atores: [YO({ x: .35, z: -1.0, eyes: [[0, 'look'], [ts, 'wide']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > tc && u < tp + .5 ? 75 : 12, 0] }) })],
  extra: (c) => { luz(c, 0); const al = c.userData.botonera.userData.alarm; const pi = lab(c, ['¡PIIII!'], .9, [1.1, 1.6, -1.1], { size: 90 }); const h = hab(c, ['SERVICIO TÉCNICO,', '¿EN QUÉ PUEDO AYUDARLE?'], 1.5, [.55, 2.15, -1.1], 52); const R = [0, 1, 2].map(() => { const r = new THREE.Mesh(new THREE.TorusGeometry(.12, .01, 6, 30, Math.PI * .7), new THREE.MeshBasicMaterial({ color: '#7FD08A', transparent: true })); r.rotation.z = -Math.PI * .35; c.add(r); return r; });
    return { update: (u, t2, cam) => { al.material.emissiveIntensity = u > tc ? 1 + Math.abs(Math.sin(u * 10)) * 2 : .3; pop(pi, u, tp, ts - .2, cam); pop(h, u, ts, 99, cam); R.forEach((r, i) => { const f = (u * .9 + i / 3) % 1; r.position.set(.85, 1.07, -1.5); r.scale.setScalar(.6 + f * 1.6); r.material.opacity = u > ts ? 1 - f : 0; }); } }; },
  c: [[.95, 1.5, 1.1], [.8, 1.3, -1.5], [.9, 1.5, .8], [.85, 1.3, -1.5]], range: 1.2, look: EMG }; });
// 23. Le explicas que estáis atrapados
Q(23, (d, a) => ({ ...ASC({ luz: 0 }), fov: 28, atores: [YO({ x: .35, z: -1.0, eyes: [[0, 'wide']], talk: [[0, d]], pose: (k, u) => k.pose({ armL: [50 + Math.sin(u * 9) * 20, 40], armR: [50 + Math.cos(u * 9) * 20, 40], bob: Math.abs(Math.sin(u * 9)) * .015 }) }), NORA({ x: -.5, z: -.6, eyes: [[0, 'flat']] })],
  extra: (c) => { luz(c, 0); const h = hab(c, '¡ESTAMOS ATRAPADOS!', 1.4, [.4, 2.15, -1.0], 62); return { update: (u, t2, cam) => pop(h, u, .2, 99, cam) }; },
  c: CC(.3, .5, 1.35), range: 2, look: EMG }));
// 24. La voz dice que manda un técnico. Pero es Nochevieja, muchos avisos... "un par de horas"
Q(24, (d, a) => { const tn = R0(a, 'nochevieja'), tp = R0(a, 'par'); return { ...ASC({ luz: 0 }), fov: 28, atores: [YO({ x: .35, z: -1.0, eyes: [[0, 'look'], [tp, 'wide']] }), NORA({ x: -.5, z: -.6, eyes: [[0, 'look'], [tp, 'wide']] })],
  extra: (c) => { luz(c, 0); const h1 = hab(c, ['MANDO UN TÉCNICO…'], 1.3, [.6, 2.15, -1.1], 60), h2 = hab(c, ['ES NOCHEVIEJA,', 'HAY MUCHOS AVISOS…'], 1.4, [.6, 2.15, -1.1], 54), h3 = hab(c, ['…UN PAR DE HORAS'], 1.3, [.6, 2.15, -1.1], 60); const ck = clock(.45, 11); ck.position.set(-.4, 2.0, -.8); c.add(ck);
    return { update: (u, t2, cam) => { pop(h1, u, .1, tn - .2, cam); pop(h2, u, tn, tp - .3, cam); pop(h3, u, tp, 99, cam); ck.visible = u > tp; ck.set(11 + smooth(tp, tp + 1.5, u) * 2); } }; },
  c: CC(.2, .4, 1.35), range: 2, look: EMG }; });
// 25. Un par de horas. Tú. Ella. Y un ascensor de un metro por un metro
Q(25, (d, a) => { const tt = R0(a, 'tu'), te = R0(a, 'ella'), tm = R0(a, 'metro'); return { ...ASC({ luz: 0 }), fov: 30, atores: [YO({ x: PY[0], z: PY[1] }), NORA({ x: PN[0], z: PN[1] })],
  extra: (c) => { luz(c, 0); const s1 = new THREE.SpotLight('#FFF2D8', 0, 6, .3, .5, 1); s1.position.set(PY[0], 2.7, .6); s1.target.position.set(PY[0], 0, PY[1]); const s2 = new THREE.SpotLight('#FFF2D8', 0, 6, .3, .5, 1); s2.position.set(PN[0], 2.7, .6); s2.target.position.set(PN[0], 0, PN[1]); c.add(s1, s1.target, s2, s2.target);
    const L = [lw(c, ['TÚ'], .6, [PY[0], 2.05, PY[1] + .3], { size: 100, w: 360 }), lw(c, ['ELLA'], .8, [PN[0], 2.05, PN[1] + .3], { size: 100, w: 460 }), lab(c, ['1 m × 1 m'], 1.3, [0, 2.2, -.4], { size: 90, w: 600 })]; const r = anillo(c, .01);
    return { update: (u, t2, cam) => { s1.intensity = 25 * smooth(tt, tt + .2, u); s2.intensity = 25 * smooth(te, te + .2, u); pop(L[0], u, tt, 99, cam); pop(L[1], u, te, 99, cam); pop(L[2], u, tm, 99, cam); } }; },
  c: [[0, 2.6, 2.6], [0, 1, -.6], [0, 2.9, 3.0], [0, 1, -.6]], range: 2.4, look: EMG }; });
// 26. Nora se sienta en el suelo. Tú te quedas de pie, pegado a la pared, como si el ascensor fuera muy grande
Q(26, (d, a) => { const tq = R0(a, 'quedas'), tg = R0(a, 'grande'); return { ...ASC({ luz: 0 }), fov: 30, atores: [YO({ x: -1.0, z: -.5, eyes: [[0, 'look'], [tq, 'flat']], pose: (k) => k.pose({ armL: [8, 4], armR: [8, 4] }) }), NORA({ x: .7, z: -1.0, eyes: [[0, 'flat']], move: (u) => [.7, lerp(0, SUE, smooth(.2, 1.2, u)), -1.0], pose: (k, u) => (u > .6 ? suelo(k) : k.pose()) })],
  extra: (c, s, A) => { luz(c, 0); const t = lw(c, ['PEGADO A LA PARED'], 1.5, [-.6, 2, -.4]); const g = uvas(); c.add(g); g.position.set(.25, 0, -.8); return { update: (u, t2, cam) => pop(t, u, tq, 99, cam) }; },
  c: CC(-.3, .3, 1.1), range: 2.2, look: EMG }; });
// 27. Esto tiene nombre. En 1966, el antropólogo Edward Hall estudió cómo usamos el espacio a nuestro alrededor
Q(27, (d, a) => { const t66 = R0(a, '1966'), th = R0(a, 'hall'), te = R0(a, 'espacio'); return { amb: 'gris', fov: 30, atores: [EXTRA(5, { x: 1.5, z: 0, eyes: [[0, 'look']], pose: (k, u) => (u > te ? k.pose({ armL: [60, 60], armR: [60, 60] }) : talkP(k, u)) })],
  extra: (c) => { const L = [lab(c, ['ESTO TIENE NOMBRE'], 1.8, [1.2, 2.25, 0]), null, null, lw(c, ['EL ESPACIO A NUESTRO ALREDEDOR'], 2.2, [.6, .45, .6])]; const r = anillo(c, 1.2, '#F2C14E', .8); r.position.set(1.5, .02, 0);
    return { update: (u, t2, cam) => { pop(L[0], u, .1, t66 - .1, cam); pop(L[3], u, te, 99, cam); r.scale.setScalar(Math.max(.01, smooth(te, te + .8, u))); } }; },
  c: [[0, 2.0, 5.0], [.3, 1.3, 0], [0, 1.9, 4.2], [.3, 1.3, 0]], k: 1.25, range: 3 }; });
// 28. Todos llevamos una burbuja invisible. Hasta unos 45 centímetros: la zona íntima
Q(28, (d, a) => { const tb = R0(a, 'burbuja'), t45 = R0(a, '45'), tz = R0(a, 'intima'); return { amb: 'gris', fov: 30, atores: [EXTRA(5, { x: 0, z: 0, eyes: [[0, 'look'], [tb, 'happy']] })],
  extra: (c) => { const bb = burbuja(c, .9); bb.position.set(0, 1.0, 0); const r = anillo(c, .45 * 2, '#FF7A8A', .9); const L = [lab(c, ['UNA BURBUJA INVISIBLE'], 2.0, [0, 2.3, 0]), lab(c, ['ZONA ÍNTIMA: 45 cm'], 1.9, [0, 2.3, 0], { bg: '#E8667F', fg: '#fff' })]; const m = lw(c, ['← 45 cm →'], 1.0, [1.3, .5, .9], { size: 80 });
    return { update: (u, t2, cam) => { const k = smooth(tb - .2, tb + .8, u); bb.scale.setScalar(Math.max(.01, k)); r.visible = u > t45; pop(m, u, t45, 99, cam); pop(L[0], u, tb, tz - .1, cam); pop(L[1], u, tz, 99, cam); } }; },
  c: [[0, 2.6, 4.6], [0, 1.0, 0], [.6, 2.2, 4.0], [0, 1.0, 0]], k: 1.25, range: 3 }; });
// 29. Ahí solo dejamos entrar a la familia, a los amigos de verdad... o a la persona que nos gusta
Q(29, (d, a) => { const tf = R0(a, 'familia'), ta = R0(a, 'amigos'), tp = R0(a, 'persona'); return { amb: 'gris', fov: 32, atores: [EXTRA(5, { x: 0, z: 0, eyes: [[0, 'happy'], [tp, 'heart']] }), ABUELA({ x: -2.6, z: .2, move: (u) => [lerp(-2.6, -.75, smooth(tf, tf + 1, u)), 0, .2], pose: (k, u) => (u > tf && u < tf + 1 ? k.walk(u) : k.pose()) }), EXTRA(2, { x: 2.6, z: .2, move: (u) => [lerp(2.6, .75, smooth(ta, ta + 1, u)), 0, .2], pose: (k, u) => (u > ta && u < ta + 1 ? k.walk(u) : k.pose()) }), NORA({ x: 0, z: -2.6, move: (u) => [0, 0, lerp(-2.6, -.75, smooth(tp, tp + 1, u))], pose: (k, u) => (u > tp && u < tp + 1 ? k.walk(u) : k.pose()), eyes: [[0, 'happy']] })],
  extra: (c) => { const bb = burbuja(c, .95); bb.position.set(0, 1.0, 0); const L = [lw(c, ['FAMILIA'], 1.0, [-1.3, 2.3, .2]), lw(c, ['AMIGOS DE VERDAD'], 1.6, [1.3, 2.3, .2]), lab(c, ['…O QUIEN NOS GUSTA'], 1.7, [0, 2.6, -1.2], { bg: '#E8667F', fg: '#fff' })];
    return { update: (u, t2, cam) => { pop(L[0], u, tf, 99, cam); pop(L[1], u, ta, 99, cam); pop(L[2], u, tp, 99, cam); } }; },
  c: [[0, 2.2, 5.6], [0, 1.2, -.4], [0, 2.0, 4.8], [0, 1.2, -.4]], k: 1.25, range: 4 }; });
// 30. Por eso en los ascensores la gente mira a la puerta, el móvil o los números. Cualquier cosa menos la cara del otro
Q(30, (d, a) => { const tp = R0(a, 'puerta'), tm = R0(a, 'movil'), tn = R0(a, 'numeros'), tc = R0(a, 'cualquier'); return { ...ASC({ piso: 5 }), fov: 32, atores: [EXTRA(1, { x: -.7, z: -.5, eyes: [[0, 'look']] }), EXTRA(3, { x: .1, z: -1.0, eyes: [[0, 'down']], pose: (k) => k.pose({ armL: [12, 8], armR: [55, 40] }) }), EXTRA(6, { x: .75, z: -.4, eyes: [[0, 'lookl']], pose: (k) => k.pose({ head: 18 }) })],
  extra: (c, s, A) => { const ph = movil(['', ''], { hora: '09:12' }); ph.scale.setScalar(.25); c.add(ph); const L = [lw(c, ['LA PUERTA'], .9, [-.7, 2.15, -.4]), lw(c, ['EL MÓVIL'], .9, [.1, 2.2, -.9]), lw(c, ['LOS NÚMEROS'], 1.0, [.8, 2.15, -.4]), lab(c, ['¡CUALQUIER COSA MENOS LA CARA!'], 2.2, [0, 2.2, -.3], { bg: '#C9361F', fg: '#fff' })];
    return { update: (u, t2, cam) => { const q = hand(A[1]); ph.position.set(q.x, q.y + .12, q.z + .08); pointer(ph, cam); pop(L[0], u, tp, tc - .1, cam); pop(L[1], u, tm, tc - .1, cam); pop(L[2], u, tn, tc - .1, cam); pop(L[3], u, tc, 99, cam); } }; },
  c: CC(-.3, .3, 1.3), range: 2 }; });
// 31. Un ascensor nos mete a desconocidos en la burbuja. Y al cerebro no le gusta nada
Q(31, (d, a) => { const tb = R0(a, 'burbuja'), tc = R0(a, 'cerebro'); return { ...ASC({ piso: 5 }), fov: 32, atores: [EXTRA(1, { x: -.5, z: -.6, eyes: [[0, 'look'], [tc, 'angry']] }), EXTRA(3, { x: .5, z: -.7, eyes: [[0, 'look'], [tc, 'sad']] })],
  extra: (c) => { const b1 = burbuja(c, .62, '#9FE0FF'), b2 = burbuja(c, .62, '#FFB0C0'); b1.position.set(-.5, 1.0, -.6); b2.position.set(.5, 1.0, -.7); const t = lab(c, ['AL CEREBRO NO LE GUSTA NADA'], 2.2, [0, 2.2, -.4]); const ch = cut(wordTex('⚡', '#FFD25A', 170), .4, .32); ch.position.set(0, 1.5, -.5); c.add(ch);
    return { update: (u, t2, cam) => { const k = smooth(tb - .5, tb + .5, u); b1.scale.setScalar(Math.max(.01, k)); b2.scale.setScalar(Math.max(.01, k)); ch.visible = u > tb + .3 && Math.sin(u * 20) > 0; pointer(ch, cam); pop(t, u, tc, 99, cam); } }; },
  c: CC(0, 0, 1.2), range: 2 }; });
// 32. Y tú ahora mismo tienes a Nora dentro de la burbuja. Durante un par de horas
Q(32, (d, a) => { const tn = R0(a, 'nora'), tp = R0(a, 'par'); let rb; return { ...ASC({ luz: 0 }), fov: 30, atores: [YO({ x: -.55, z: -.6, eyes: [[0, 'look'], [tn, 'wide']], pose: (k) => k.pose({ armL: [8, 4], armR: [8, 4] }) }), NORA({ x: -.1, z: -1.0, y: SUE, eyes: [[0, 'flat']], pose: suelo })],
  extra: (c, s, A) => { luz(c, 0); rb = rubor(A[0]); const bb = burbuja(c, .5, '#9FE0FF'); bb.position.set(-.55, 1.0, -.6); const t = lab(c, ['NORA, DENTRO DE TU BURBUJA'], 2.0, [0, 2.2, -.4], { bg: '#D66A86', fg: '#fff' }); const t2 = lw(c, ['DURANTE UN PAR DE HORAS'], 1.8, [0, 2.2, -.4]);
    return { update: (u, tt, cam) => { bb.scale.setScalar(Math.max(.01, smooth(0, .8, u))); pop(t, u, tn, tp - .1, cam); pop(t2, u, tp, 99, cam); rb(smooth(tn, tn + .5, u)); } }; },
  c: CC(-.4, -.1, 1.1), range: 2, look: EMG }; });
// 33. Nora, desde el suelo: "Oye... ¿y si se rompen los cables?"
Q(33, (d, a) => { const to = R0(a, 'oye'); return { ...ASC({ luz: 0 }), fov: 28, atores: [YO({ x: -.6, z: -.6, eyes: [[0, 'look'], [to + 1, 'wide']] }), NORA({ x: .3, z: -1.0, y: SUE, eyes: [[0, 'sad']], talk: [[to, d]], pose: suelo })],
  extra: (c) => { luz(c, 0); const h = hab(c, ['OYE… ¿Y SI SE', 'ROMPEN LOS CABLES?'], 1.5, [.3, 1.6, -.8], 56); return { update: (u, t2, cam) => pop(h, u, to, 99, cam) }; },
  c: [[.6, 1.2, 2.4], [0, 1, -.8], [.4, 1.2, 2.1], [0, 1, -.8]], range: 1.8, look: EMG }; });
// 34. Por suerte sabes algo. En 1854, en Nueva York, Elisha Otis subió a una plataforma y mandó cortar la cuerda
Q(34, (d, a) => { const t54 = R0(a, '1854'), te = R0(a, 'elisha'), tp = R0(a, 'plataforma'), tc = R0(a, 'cortar'); return { amb: 'feria', fov: 34, k: 1.25, atores: [OTIS({ x: 0, z: -3.0, move: (u) => [0, 5.08, -3.0], eyes: [[0, 'smug']], pose: (k, u) => (u > tc ? k.pose({ armL: [12, 8], armR: [150, 20] }) : talkP(k, u)) }), ...[0, 1, 2, 3, 4, 5].map((i) => EXTRA(i, { x: -2.6 + i * 1.05, z: 1.4 + (i % 2) * .6, eyes: [[0, 'lookl']], pose: (k) => k.pose({ head: -10 }) })), H({ outfit: 'terno3', glow: 0, x: 1.9, z: -2.4, eyes: [[0, 'look']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > tc ? 120 : 30, 30] }) })],
  extra: (c) => { const L = [null, lw(c, ['ELISHA OTIS'], 2.0, [-1.8, 7.0, -2.4]), lab(c, ['¡CORTEN LA CUERDA!'], 2.4, [1.6, 7.2, -2.4], { bg: '#C9361F', fg: '#fff' })];
    return { update: (u, t2, cam) => { c.userData.setPlat(5); pop(L[1], u, te, tc - .2, cam); pop(L[2], u, tc, 99, cam); } }; },
  cam: [[0, [1.5, 2.2, 8], [1.5, 3.0, -3]], [d * .55, [1.8, 4.2, 6.5], [1.8, 5.2, -3]], [d, [2.2, 5.6, 4.0], [1.6, 5.8, -3]]], f: [[0, 11], [d * .55, 9.5], [d, 7.2]], k: 1, range: 6, blur: 4, look: sepia }; });
// 35. La plataforma no cayó. Se quedó frenada al momento. Había inventado el freno de seguridad
Q(35, (d, a) => { const tf = R0(a, 'frenada'), ti = R0(a, 'inventado'); return { amb: 'feria', fov: 32, k: 1.25, atores: [OTIS({ x: 0, z: -3.0, move: (u) => { const y = 5 - .25 * smooth(0, .3, u); return [0, y + .08, -3.0]; }, eyes: [[0, 'smug'], [tf, 'happy']], pose: (k, u) => (u > tf ? k.pose({ armL: [150, 20], armR: [150, 20] }) : k.pose({ armL: [12, 8], armR: [150, 20] })) }), ...[0, 1, 2, 3, 4].map((i) => EXTRA(i, { x: -2.2 + i * 1.1, z: 1.4 + (i % 2) * .6, eyes: [[0, 'wide'], [tf + .5, 'happy']], pose: (k, u) => (u > tf + .5 ? clap(k, u + i) : k.pose()) }))],
  extra: (c) => { const L = [lw(c, ['NO CAYÓ'], 1.4, [0, 7.4, -2.4], { size: 90 }), lab(c, ['EL FRENO DE SEGURIDAD'], 2.6, [0, 7.4, -2.4], { bg: '#2A7A4A', fg: '#fff' })]; const S = [-1, 1].map((sx) => { const g = glowSprite('#FFD25A', .6, 0); g.position.set(sx * 1.3, 4.8, -2.8); c.add(g); return g; });
    return { update: (u, t2, cam) => { c.userData.setPlat(5 - .25 * smooth(0, .3, u), 1); S.forEach((g) => (g.material.opacity = u < .8 ? .9 * (1 - u / .8) : 0)); pop(L[0], u, .3, ti - .1, cam); pop(L[1], u, ti, 99, cam); shake(cam, u < .4 ? .05 : 0, u); } }; },
  c: [[1.0, 5.6, 4.2], [0, 5.6, -3], [0, 5.0, 5.4], [0, 5.4, -3]], k: 1, range: 6, blur: 4, look: sepia }; });
// 36. Desde entonces, varios cables, y cada uno solo podría aguantar el peso. Y si todo fallara, el freno se activa
Q(36, (d, a) => { const tc = R0(a, 'cada'), tf = R0(a, 'freno'); return { amb: 'hueco', fov: 30, k: 1.25, atores: [YO({ x: -.5, z: -.6, move: () => [-.5, 7.5 * PISO + .06, -.6] }), NORA({ x: .5, z: -.7, move: () => [.5, 7.5 * PISO + .06, -.7] })],
  extra: (c) => { const y0 = 7.5 * PISO; c.userData.setCab(y0); c.userData.cabLuz(0); const L = [lab(c, ['VARIOS CABLES'], 1.8, [-1.2, y0 + 5.6, .4]), lw(c, ['CADA UNO AGUANTA EL PESO'], 2.4, [-1.0, y0 + 5.0, .4]), lab(c, ['+ FRENO DE SEGURIDAD'], 2.2, [0, y0 - .7, .6], { bg: '#2A7A4A', fg: '#fff' })]; const G = [-1, 1].map((sx) => { const g = glowSprite('#FFD25A', .7, 0); g.position.set(sx * 1.6, y0 + .25, -1.1); c.add(g); return g; });
    return { update: (u, t2, cam) => { pop(L[0], u, .2, 99, cam); pop(L[1], u, tc, 99, cam); pop(L[2], u, tf, 99, cam); G.forEach((g) => (g.material.opacity = u > tf ? .5 + .4 * Math.sin(u * 8) : 0)); } }; },
  cam: [[0, [2.0, 7.5 * PISO + 6.0, 6.0], [0, 7.5 * PISO + 5.0, -.6]], [d * .6, [1.0, 7.5 * PISO + 3.0, 7.0], [0, 7.5 * PISO + 2.0, -.6]], [d, [1.6, 7.5 * PISO + .8, 5.0], [0, 7.5 * PISO + .6, -.6]]], f: [[0, 6.5], [d, 5.5]], range: 4, look: { exposure: 1.05, bloom: .4 } }; });
// 37. Nora te mira: "¿Y tú cómo sabes eso?". No le dices la verdad: lo viste en un vídeo a las 3 de la mañana
Q(37, (d, a) => { const tc = R0(a, 'como'), tv = R0(a, 'video'); return { ...ASC({ luz: 0 }), fov: 28, atores: [YO({ x: -.6, z: -.6, eyes: [[0, 'smug'], [tv - 1, 'lookl']] }), NORA({ x: .3, z: -1.0, y: SUE, eyes: [[0, 'look'], [tc, 'smug']], talk: [[tc, tc + 1.5]], pose: suelo })],
  extra: (c) => { luz(c, 0); const h = hab(c, '¿Y TÚ CÓMO SABES ESO?', 1.5, [.3, 1.6, -.8], 58); const n = nube(c, ['UN VÍDEO A LAS', '3 DE LA MAÑANA'], 1.2, [0, 0, 0]); n.position.set(-1.0, 2.25, -.5);
    return { update: (u, t2, cam) => { pop(h, u, tc - .2, tv - 1.2, cam); pop(n, u, tv - .8, 99, cam); } }; },
  c: CC(-.2, .2, 1.1), range: 2, look: EMG }; });
// 38. Media hora. Tu móvil, sin cobertura. El de Nora, sin batería
Q(38, (d, a) => { const tc = R0(a, 'cobertura'), tb = R0(a, 'bateria'); return { amb: 'gris', fov: 30, atores: [],
  extra: (c) => { const p1 = movil(['SIN COBERTURA', '✕ ✕ ✕'], { hora: '23:42', bat: 61 }), p2 = movil(['SIN BATERÍA', ''], { hora: '23:42', bat: 0, bg: '#2A0E10' }); p1.position.set(-.7, 1.4, 0); p2.position.set(.7, 1.4, 0); c.add(p1, p2); const t = lab(c, ['MEDIA HORA'], 1.6, [0, 2.2, 0]); const ck = clock(.5, 11.5); ck.position.set(0, .4, .2); c.add(ck);
    return { update: (u, t2, cam) => { p1.visible = u > tc - .4; p2.visible = u > tb - .4; pop(t, u, .1, 99, cam); ck.set(11.5 + u / 60); } }; },
  c: [[0, 1.5, 3.4], [0, 1.4, 0], [0, 1.5, 3.0], [0, 1.4, 0]], k: 1.25, range: 2 }; });
// 39. Abrís la bandeja de turrones de la abuela. Primero uno. Luego otro. Luego media bandeja
Q(39, (d, a) => { const tp = R0(a, 'primero'), to = R0(a, 'otro'), tm = R0(a, 'media'); return { ...ASC({ luz: 0 }), fov: 28, atores: [YO({ x: -.45, z: -.8, y: SUE, eyes: [[0, 'happy']], pose: (k, u) => { suelo(k); k.pose({ armL: [8, 6], armR: [60 + Math.sin(u * 6) * 20, 60], bob: 0 }); hideLegs(k); } }), NORA({ x: .45, z: -.9, y: SUE, eyes: [[0, 'happy']], pose: (k, u) => { k.pose({ armL: [60 + Math.cos(u * 6) * 20, 60], armR: [8, 6] }); hideLegs(k); } })],
  extra: (c) => { luz(c, 0); const b = bandeja(); b.scale.setScalar(1.3); b.position.set(0, .05, -.5); c.add(b); const T = b.userData.T; const L = [lw(c, ['UNO'], .6, [-.3, 1.5, -.4], { size: 90 }), lw(c, ['OTRO'], .7, [.3, 1.5, -.4], { size: 90 }), lab(c, ['MEDIA BANDEJA'], 1.4, [0, 1.85, -.4])];
    return { update: (u, t2, cam) => { T.forEach((t, i) => (t.visible = !(u > tp && i === 0) && !(u > to && i === 1) && !(u > tm && i < 4))); pop(L[0], u, tp, to - .1, cam); pop(L[1], u, to, tm - .1, cam); pop(L[2], u, tm, 99, cam); } }; },
  c: [[0, 1.35, 2.0], [0, .6, -.7], [0, 1.4, 1.7], [0, .6, -.7]], range: 1.5, look: EMG }; });
// 40. "Le diremos a tu abuela que el ascensor se los comió", dice Nora
Q(40, (d, a) => ({ ...ASC({ luz: 0 }), fov: 28, atores: [YO({ x: -.45, z: -.8, y: SUE, eyes: [[0, 'happy']], pose: suelo }), NORA({ x: .45, z: -.9, y: SUE, eyes: [[0, 'smug']], talk: [[0, d - .5]], pose: suelo })],
  extra: (c) => { luz(c, 0); const b = bandeja(); b.scale.setScalar(1.3); b.position.set(0, .05, -.5); c.add(b); b.userData.T.forEach((t, i) => (t.visible = i >= 4)); const h = hab(c, ['LE DIREMOS QUE EL', 'ASCENSOR SE LOS COMIÓ'], 1.6, [.4, 1.5, -.8], 54); return { update: (u, t2, cam) => pop(h, u, .1, 99, cam) }; },
  c: [[0, 1.3, 2.3], [0, .8, -.8], [.2, 1.3, 2.0], [0, .8, -.8]], range: 1.6, look: EMG }));
// 41. Una hora. Hace calor. Nora pregunta si se puede acabar el aire
Q(41, (d, a) => { const tc = R0(a, 'calor'), ta = R0(a, 'aire'); return { ...ASC({ luz: 0 }), fov: 28, atores: [YO({ x: -.45, z: -.8, y: SUE, eyes: [[0, 'flat']], pose: (k, u) => { k.pose({ armL: [8, 6], armR: [140 + Math.sin(u * 10) * 15, 40] }); hideLegs(k); } }), NORA({ x: .45, z: -.9, y: SUE, eyes: [[0, 'flat'], [ta - .8, 'sad']], talk: [[ta - 1.5, ta + .5]], pose: suelo })],
  extra: (c) => { luz(c, 0); const L = [lab(c, ['UNA HORA'], 1.2, [0, 1.9, -.4]), lw(c, ['HACE CALOR'], 1.1, [-.4, 1.5, -.4])]; const h = hab(c, '¿SE PUEDE ACABAR EL AIRE?', 1.5, [.4, 1.5, -.8], 54); const ck = clock(.4, 12); ck.position.set(0, 2.5, -1.5); c.add(ck);
    return { update: (u, t2, cam) => { pop(L[0], u, .1, ta - 1.6, cam); pop(L[1], u, tc, ta - 1.6, cam); pop(h, u, ta - 1.5, 99, cam); ck.set(12 + u / 60); } }; },
  c: [[0, 1.3, 2.3], [0, .8, -.8], [0, 1.4, 2.0], [0, .8, -.8]], range: 1.6, look: EMG }; });
// 42. Y no: los ascensores no son herméticos. Rendijas y huecos por todas partes. El aire entra y sale
Q(42, (d, a) => { const th = R0(a, 'hermeticos'), tr = R0(a, 'rendijas'), te = R0(a, 'entra'), tp = R0(a, 'perfectamente'); return { amb: 'hueco', fov: 30, k: 1.25, atores: [YO({ x: -.5, z: -.6, y: 7.5 * PISO + .06 - .42, pose: suelo }), NORA({ x: .5, z: -.7, y: 7.5 * PISO + .06 - .42, pose: suelo })],
  extra: (c) => { const y0 = 7.5 * PISO; c.userData.setCab(y0); c.userData.cabLuz(0); const L = [lab(c, ['NO SON HERMÉTICOS'], 2.0, [0, y0 + 3.8, .5]), lw(c, ['RENDIJAS Y HUECOS'], 1.8, [0, y0 + 3.8, .5]), lab(c, ['EL AIRE ENTRA Y SALE'], 2.0, [0, y0 + 3.8, .5], { bg: '#2A7A9A', fg: '#fff' }), lw(c, ['PUEDES RESPIRAR PERFECTAMENTE'], 2.6, [0, y0 - .7, .6])];
    const A = []; for (let i = 0; i < 16; i++) { const g = glowSprite('#9FE0FF', .18, 0); c.add(g); A.push(g); }
    return { update: (u, t2, cam) => { pop(L[0], u, th - .3, tr - .1, cam); pop(L[1], u, tr, te - .1, cam); pop(L[2], u, te, 99, cam); pop(L[3], u, tp - 1.5, 99, cam); A.forEach((g, i) => { const f = (u * .5 + i / 16) % 1; const side = i % 4; const px = side === 0 ? -1.4 + f * .6 : side === 1 ? 1.4 - f * .6 : (i % 7 - 3) * .3; const py = side < 2 ? y0 + .3 + (i % 5) * .5 : y0 + 3.2 - f * .5; g.position.set(px, py, -.2 + (i % 3) * .3); g.material.opacity = u > tr ? Math.sin(f * Math.PI) * .9 : 0; }); } }; },
  cam: [[0, [0, 7.5 * PISO + 2.2, 7.0], [0, 7.5 * PISO + 1.6, -.6]], [d, [0, 7.5 * PISO + 2.0, 5.8], [0, 7.5 * PISO + 1.6, -.6]]], f: [[0, 7.6], [d, 6.4]], range: 3, look: { exposure: 1.05, bloom: .45 } }; });
// 43. Que se lo digan a Nicholas White. En 1999, en un rascacielos de Nueva York, bajó a fumar un viernes por la noche
Q(43, (d, a) => { const t99 = R0(a, '1999'), tr = R0(a, 'rascacielos'), tv = R0(a, 'viernes'); return { amb: 'apagon', fov: 34, k: 1.25, atores: [NICK({ x: 0, z: 2, eyes: [[0, 'look']], move: (u) => [lerp(-1.2, .4, smooth(tv, tv + 2.5, u)), 0, 2], pose: (k, u) => (u > tv && u < tv + 2.5 ? k.walk(u) : k.pose()) })],
  extra: (c) => { const L = [lab(c, ['NICHOLAS WHITE'], 2.0, [.8, 2.3, 2])]; return { update: (u, t2, cam) => { pop(L[0], u, .2, t99 - .1, cam); } }; },
  c: [[0, 1.4, 6.6], [0, 2.4, -6], [0, 1.6, 5.6], [0, 1.6, 0]], range: 5, blur: 6, look: { exposure: 1.1, bloom: .5 } }; });
// 44. Se subió al ascensor. Y se quedó atrapado. 41 horas. Todo el fin de semana
Q(44, (d, a) => { const ta = R0(a, 'atrapado'), t41 = R0(a, '41'), tf = R0(a, 'fin'); return { ...ASC({ luz: 0, piso: 13 }), fov: 30, atores: [NICK({ x: 0, z: -.7, eyes: [[0, 'look'], [ta, 'wide'], [t41 + 1, 'sad']], move: (u) => [0, u > t41 + .5 ? SUE : 0, -.7], pose: (k, u) => (u > t41 + .5 ? suelo(k) : k.pose()) })],
  extra: (c) => { luz(c, 0); const n = numLab(c, [0, 2.2, -.4], 1.4, { size: 100, w: 600 }); const t = lw(c, ['TODO EL FIN DE SEMANA'], 1.9, [0, 1.7, -.3]);
    return { update: (u, t2, cam) => { if (u > t41) n(Math.min(41, Math.floor((u - t41) * 20)) + ' HORAS'); else n(''); pop(t, u, tf, 99, cam); } }; },
  c: CC(0, 0, 1.2), range: 2, look: EMG }; });
// 45. Sin agua, sin comida, sin que nadie supiera que estaba ahí. Y sobrevivió
Q(45, (d, a) => { const ts = R0(a, 'sobrevivio'); return { ...ASC({ luz: 0, piso: 13 }), fov: 30, atores: [NICK({ x: 0, z: -.7, y: SUE, eyes: [[0, 'sad'], [ts, 'happy']], pose: (k, u) => (u > ts ? (k.pose({ armL: [150, 20], armR: [150, 20] }), hideLegs(k)) : suelo(k)) })],
  extra: (c) => { luz(c, 0); const L = [lw(c, ['SIN AGUA · SIN COMIDA'], 1.9, [0, 2.2, -.4]), lab(c, ['¡Y SOBREVIVIÓ!'], 1.6, [0, 2.2, -.4], { bg: '#2A7A4A', fg: '#fff' })]; return { update: (u, t2, cam) => { pop(L[0], u, .1, ts - .1, cam); pop(L[1], u, ts, 99, cam); } }; },
  c: CC(0, 0, 1.0), range: 2, look: EMG, lookFn: (u) => (u > ts ? { exposure: 1.18 } : {}) }; });
// 46. Nora te escucha y dice: "Vale. Nosotros tenemos turrones. Estamos bien"
Q(46, (d, a) => { const tv = R0(a, 'vale'); return { ...ASC({ luz: 0 }), fov: 28, atores: [YO({ x: -.45, z: -.8, y: SUE, eyes: [[0, 'look'], [tv + 1.5, 'happy']], pose: suelo }), NORA({ x: .45, z: -.9, y: SUE, eyes: [[0, 'look'], [tv, 'happy']], talk: [[tv, d]], pose: (k) => { k.pose({ armL: [8, 6], armR: [80, 40] }); hideLegs(k); } })],
  extra: (c, s, A) => { luz(c, 0); const tu = box(.1, .04, .07, std('#E8C890'), 0, 0, 0); c.add(tu); const h = hab(c, ['VALE. TENEMOS TURRONES.', 'ESTAMOS BIEN'], 1.6, [.4, 1.5, -.8], 54); return { update: (u, t2, cam) => { const p = hand(A[1]); tu.position.set(p.x, p.y + .05, p.z + .05); pop(h, u, tv, 99, cam); } }; },
  c: [[0, 1.3, 2.3], [0, .8, -.8], [.2, 1.3, 2.0], [0, .8, -.8]], range: 1.6, look: EMG }; });
// 47. Pero no está bien. A los pocos minutos, Nora empieza a respirar rápido. Muy rápido
Q(47, (d, a) => { const tr = R0(a, 'respirar'), tm = R0(a, 'muy'); return { ...ASC({ luz: 0 }), fov: 26, atores: [NORA({ x: .2, z: -.9, y: SUE, eyes: [[0, 'flat'], [tr, 'wide']], pose: (k, u) => { k.pose({ armL: [40, 60], armR: [40, 60], bob: u > tr ? Math.abs(Math.sin(u * (u > tm ? 22 : 14))) * .025 : 0 }); hideLegs(k); } })],
  extra: (c) => { luz(c, 0); const L = [lw(c, ['PERO NO ESTÁ BIEN'], 1.5, [.1, 1.45, -.7]), lab(c, ['RESPIRA RÁPIDO'], 1.4, [.1, 1.45, -.7], { bg: '#C9361F', fg: '#fff' })]; return { update: (u, t2, cam) => { pop(L[0], u, .1, tr - .1, cam); pop(L[1], u, tr, 99, cam); shake(cam, u > tm ? .006 : 0, u); } }; },
  c: [[.2, 1.1, 1.8], [.2, .9, -.9], [.2, 1, 1.4], [.2, .9, -.9]], range: 1.4, look: EMG, lookFn: (u) => ({ vig: .6 + .15 * smooth(tr, tm + 1, u) }) }; });
// 48. Te dice que las paredes están más cerca que antes. Que le falta el aire. Que necesita salir. Ya
Q(48, (d, a) => { const tp = R0(a, 'paredes'), tf = R0(a, 'falta'), ts = R0(a, 'salir'), ty = R0(a, 'ya'); return { ...ASC({ luz: 0 }), fov: 30, atores: [NORA({ x: .2, z: -.9, y: SUE, eyes: [[0, 'wide'], [ty, 'shut']], talk: [[0, d]], pose: (k, u) => { k.pose({ armL: [40, 60], armR: [40, 60], bob: Math.abs(Math.sin(u * 22)) * .02 }); hideLegs(k); } }), YO({ x: -.7, z: -.6, eyes: [[0, 'wide']] })],
  extra: (c) => { luz(c, 0); const L = [hab(c, 'LAS PAREDES ESTÁN MÁS CERCA', 1.6, [.2, 1.6, -.7], 52), hab(c, 'ME FALTA EL AIRE', 1.3, [.2, 1.6, -.7], 58), hab(c, 'NECESITO SALIR. ¡YA!', 1.4, [.2, 1.6, -.7], 58)]; return { update: (u, t2, cam) => { pop(L[0], u, tp - .3, tf - .2, cam); pop(L[1], u, tf, ts - .5, cam); pop(L[2], u, ts - .4, 99, cam); } }; },
  cam: [[0, [0, 1.4, 3.6], [0, 1, -.8]], [d, [0, 1.2, 2.0], [0, 1, -.8]]], f: [[0, 4.4], [d, 2.8]], range: 1.8, look: { ...EMG, vig: .78 } }; });
// 49. Te acuerdas de algo que te enseñó tu entrenador de fútbol antes de los penaltis. Se llama respiración en caja
Q(49, (d, a) => { const te = R0(a, 'entrenador'), tc = R0(a, 'caja'); return { amb: 'estadio', fov: 32, k: 1.25, atores: [H({ outfit: 'azul', hair: 'old', hairc: '#3A3A3A', glow: 0, x: .6, z: 0, eyes: [[0, 'look']], talk: [[0, d]], pose: talkP }), YO({ x: -.6, z: .1, eyes: [[0, 'look'], [tc, 'happy']] })],
  extra: (c) => { const L = [lw(c, ['TU ENTRENADOR DE FÚTBOL'], 2.0, [0, 2.4, 0]), lab(c, ['RESPIRACIÓN EN CAJA'], 2.0, [0, 2.4, 0], { bg: '#2A7A9A', fg: '#fff' })]; const bl = balon(); bl.position.set(-.1, .15, .6); c.add(bl); return { update: (u, t2, cam) => { pop(L[0], u, te - .2, tc - .2, cam); pop(L[1], u, tc - .1, 99, cam); } }; },
  c: [[0, 1.6, 4.0], [0, 1.3, 0], [0, 1.6, 3.4], [0, 1.3, 0]], range: 2.5, blur: 8 }; });
// 50. La usan hasta los soldados y los astronautas para calmarse en situaciones de mucho estrés
Q(50, (d, a) => { const ts = R0(a, 'soldados'), ta = R0(a, 'astronautas'); return { amb: 'gris', fov: 32, atores: [H({ outfit: 'verde', glow: 0, x: -.8, z: 0, eyes: [[0, 'flat']] }), H({ outfit: 'jaleco', glow: 0, x: .8, z: 0, eyes: [[0, 'flat']] })],
  extra: (c, s, A) => { const L = [lw(c, ['SOLDADOS'], 1.1, [-.8, 2.2, 0]), lw(c, ['ASTRONAUTAS'], 1.3, [.8, 2.2, 0]), lab(c, ['PARA CALMARSE CON MUCHO ESTRÉS'], 2.6, [0, 2.75, 0])]; const hel = new THREE.Mesh(new THREE.SphereGeometry(.34, 20, 14), std('#F4F0E4', { transparent: true, opacity: .35 })); c.add(hel);
    return { update: (u, t2, cam) => { A[0].root.visible = u > ts - .3; A[1].root.visible = u > ta - .3; const v = new THREE.Vector3(); A[1].head.getWorldPosition(v); hel.position.copy(v); hel.visible = A[1].root.visible; pop(L[0], u, ts, 99, cam); pop(L[1], u, ta, 99, cam); pop(L[2], u, ta + 1, 99, cam); } }; },
  c: [[0, 1.6, 4.2], [0, 1.3, 0], [0, 1.6, 3.6], [0, 1.3, 0]], k: 1.25, range: 3 }; });
// 51. Coges aire contando hasta 4. Lo aguantas 4. Lo sueltas en 4. Y esperas otros 4 (la caja)
Q(51, (d, a) => { const T = [R0(a, 'coges'), R0(a, 'aguantas'), R0(a, 'sueltas'), R0(a, 'esperas')]; return { amb: 'gris', fov: 30, atores: [],
  extra: (c) => { const fr = new THREE.Group(); const m = new THREE.MeshBasicMaterial({ color: '#7FD0FF' }); for (const [w, h, x, y] of [[2, .05, 0, 1], [2, .05, 0, -1], [.05, 2, -1, 0], [.05, 2, 1, 0]]) { const s = new THREE.Mesh(new THREE.PlaneGeometry(w, h), m); s.position.set(x, y, 0); fr.add(s); } fr.position.set(0, 1.5, 0); c.add(fr); const dot = glowSprite('#FFFFFF', .5, 1); c.add(dot);
    const L = [lw(c, ['COGES AIRE · 4'], 1.3, [0, 2.75, .1]), lw(c, ['AGUANTAS · 4'], 1.3, [1.75, 1.5, .1]), lw(c, ['SUELTAS · 4'], 1.3, [0, .25, .1]), lw(c, ['ESPERAS · 4'], 1.3, [-1.75, 1.5, .1])];
    return { update: (u, t2, cam) => { let seg = 0; for (let i = 0; i < 4; i++) if (u > T[i]) seg = i; const f = clamp((u - T[seg]) / ((T[seg + 1] ?? T[3] + 1.8) - T[seg]), 0, 1); const P = [[-1, 1], [1, 1], [1, -1], [-1, -1], [-1, 1]]; const p0 = P[seg], p1 = P[seg + 1]; dot.position.set(lerp(p0[0], p1[0], f), 1.5 + lerp(p0[1], p1[1], f), .05); L.forEach((l, i) => pop(l, u, T[i], 99, cam)); } }; },
  c: [[0, 1.5, 4.4], [0, 1.5, 0], [0, 1.5, 4.2], [0, 1.5, 0]], k: 1.25, range: 3 }; });
// 52. Respirar despacio le dice al cuerpo que no hay peligro. Y el corazón, poco a poco, baja el ritmo
Q(52, (d, a) => { const tp = R0(a, 'peligro'), tc = R0(a, 'corazon'); return { amb: 'gris', fov: 30, atores: [NORA({ x: 0, z: 0, eyes: [[0, 'shut'], [tc + 2, 'look']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [12, 8], bob: Math.sin(u * 1.6) * .02 }) })],
  extra: (c) => { const ht = corazon(c, .5); const L = [lw(c, ['NO HAY PELIGRO'], 1.5, [0, 2.15, 0]), lab(c, ['EL CORAZÓN BAJA EL RITMO'], 2.2, [0, 2.15, 0], { bg: '#2A7A9A', fg: '#fff' })];
    return { update: (u, t2, cam) => { const rate = lerp(16, 4, smooth(tc, tc + 3, u)); ht.position.set(0, 1.25, .3); ht.scale.setScalar(1 + .2 * Math.abs(Math.sin(u * rate))); pointer(ht, cam); pop(L[0], u, tp - .3, tc - .2, cam); pop(L[1], u, tc, 99, cam); } }; },
  c: [[0, 1.6, 3.2], [0, 1.4, 0], [0, 1.6, 2.6], [0, 1.4, 0]], k: 1.25, range: 2 }; });
// 53. Te sientas a su lado. "Mírame. Uno, dos, tres, cuatro". Contáis juntos. Diez veces. Hasta que Nora deja de temblar
Q(53, (d, a) => { const tm = R0(a, 'mirame'), t1 = R0(a, 'uno'), tc = R0(a, 'contais'), td = R0(a, 'deja'); return { ...ASC({ luz: 0 }), fov: 28, atores: [YO({ x: -.35, z: -.85, y: SUE, eyes: [[0, 'look']], talk: [[tm, tc]], pose: (k, u) => { k.pose({ armL: [8, 6], armR: [40, 50] }); hideLegs(k); } }), NORA({ x: .35, z: -.9, y: SUE, eyes: [[0, 'wide'], [tc, 'shut'], [td, 'look']], pose: (k, u) => { k.pose({ armL: [40, 50], armR: [8, 6], bob: u < tc ? Math.abs(Math.sin(u * 20)) * .02 : Math.sin(u * 1.6) * .01 }); hideLegs(k); } })],
  extra: (c) => { luz(c, 0); const h = hab(c, 'MÍRAME', 1.0, [-.4, 1.5, -.8], 70); const n = numLab(c, [0, 1.8, -.6], 1.0, { size: 100, w: 500 }); const t = lw(c, ['DEJA DE TEMBLAR'], 1.5, [0, 1.8, -.6]); const warm = calida(c, [0, 1.35, .6], 0, 4);
    return { update: (u, t2, cam) => { pop(h, u, tm, t1 - .1, cam); if (u > t1 && u < td - .2) n(String(1 + Math.floor((u - t1) / .8) % 4)); else n(''); pop(t, u, td, 99, cam); warm.intensity = 4 * smooth(tc, td, u); } }; },
  c: [[0, 1.2, 2.3], [0, .85, -.85], [0, 1.15, 1.9], [0, .85, -.85]], range: 1.4, look: EMG }; });
// 54. "Gracias", te dice. Y no te suelta la manga
Q(54, (d, a) => { const tm = R0(a, 'manga'); let rb; return { ...ASC({ luz: 0 }), fov: 26, atores: [YO({ x: -.3, z: -.85, y: SUE, eyes: [[0, 'look'], [tm, 'happy']], pose: suelo }), NORA({ x: .3, z: -.9, y: SUE, eyes: [[0, 'happy']], talk: [[0, 1]], pose: (k) => { k.pose({ armL: [55, 80], armR: [8, 6] }); hideLegs(k); } })],
  extra: (c, s, A) => { luz(c, 0); rb = rubor(A[0]); const h = hab(c, 'GRACIAS', 1.0, [.4, 1.45, -.8], 70); return { update: (u, t2, cam) => { pop(h, u, 0, tm - .3, cam); rb(smooth(tm, tm + .5, u)); } }; },
  c: [[0, 1, 1.9], [0, .85, -.85], [0, 1, 1.7], [0, .85, -.85]], range: 1.2, look: EMG }; });
// 55. Para pasar el rato, jugáis a algo. Nora: "Aguantar la mirada. El primero que se ríe, pierde"
Q(55, (d, a) => { const ta = R0(a, 'aguantar'), tr = R0(a, 'primero'); return { ...ASC({ luz: 0 }), fov: 28, atores: [YO({ x: -.4, z: -.8, y: SUE, eyes: [[0, 'look'], [tr, 'smug']], pose: suelo }), NORA({ x: .4, z: -.85, y: SUE, eyes: [[0, 'smug']], talk: [[ta, d]], pose: suelo })],
  extra: (c) => { luz(c, 0); const h = hab(c, ['AGUANTAR LA MIRADA.', 'EL QUE SE RÍE, PIERDE'], 1.6, [.35, 1.5, -.8], 54); return { update: (u, t2, cam) => pop(h, u, ta, 99, cam) }; },
  c: [[0, 1.2, 2.3], [0, .85, -.8], [0, 1.15, 2.0], [0, .85, -.8]], range: 1.5, look: EMG }; });
// 56. En 1989, psicólogos de EE.UU. juntaron parejas de desconocidos: mirarse a los ojos durante 2 minutos. Sin hablar
Q(56, (d, a) => { const t89 = R0(a, '1989'), tm = R0(a, 'miraran'), t2m = R0(a, 'minutos'), th = R0(a, 'hablar'); return { amb: 'lab', fov: 30, k: 1.25, atores: [EXTRA(1, { x: -.6, z: 0, y: -.3, eyes: [[0, 'lookl'], [tm, 'look']], pose: (k) => { k.pose(); hideLegs(k); } }), EXTRA(6, { x: .6, z: 0, y: -.3, eyes: [[0, 'look'], [tm, 'lookl']], pose: (k) => { k.pose(); hideLegs(k); } }), PROF({ x: 2.0, z: -1.2, eyes: [[0, 'look']], pose: (k) => k.pose({ armL: [12, 8], armR: [60, 60] }) })],
  extra: (c, s, A) => { for (const x of [-.6, .6]) c.add(box(.5, .45, .5, std('#3A4A6A'), x, .22, 0)); A[0].root.rotation.y = 0; const L = [null, lw(c, ['MIRARSE A LOS OJOS'], 1.8, [0, 2.1, .2]), lab(c, ['2 MINUTOS · SIN HABLAR'], 2.0, [0, 2.1, .2], { bg: '#2A7A9A', fg: '#fff' })]; const ck = clock(.4, 12); ck.position.set(1.4, 2.0, -.5); c.add(ck); const ln = new THREE.Mesh(new THREE.PlaneGeometry(.9, .015), new THREE.MeshBasicMaterial({ color: '#FFE27A', transparent: true })); ln.position.set(0, 1.35, .1); c.add(ln);
    return { update: (u, t2, cam) => { pop(L[1], u, tm, t2m - .1, cam); pop(L[2], u, t2m, 99, cam); ck.visible = u > t2m; ck.set(12 + (u - t2m) * .1); ln.material.opacity = u > tm ? .6 + .3 * Math.sin(u * 6) : 0; } }; },
  c: [[0, 1.8, 4.2], [0, 1.2, 0], [0, 1.6, 3.4], [0, 1.2, 0]], range: 2.5 }; });
// 57. Y al terminar, muchos sentían más cariño y más interés por la otra persona. Dos minutos. Nada más
Q(57, (d, a) => { const tc = R0(a, 'carino'), td = R0(a, 'dos'); return { amb: 'lab', fov: 30, k: 1.25, atores: [EXTRA(1, { x: -.6, z: 0, y: -.3, eyes: [[0, 'look'], [tc, 'happy']], pose: (k) => { k.pose(); hideLegs(k); } }), EXTRA(6, { x: .6, z: 0, y: -.3, eyes: [[0, 'lookl'], [tc, 'heart']], pose: (k) => { k.pose(); hideLegs(k); } })],
  extra: (c) => { for (const x of [-.6, .6]) c.add(box(.5, .45, .5, std('#3A4A6A'), x, .22, 0)); const L = [lab(c, ['MÁS CARIÑO · MÁS INTERÉS'], 2.2, [0, 2.4, 0], { bg: '#E8667F', fg: '#fff' }), lw(c, ['DOS MINUTOS. NADA MÁS'], 2.0, [0, 2.4, 0])]; const b = brillos(c, 12, '#FFB2C8');
    return { update: (u, t2, cam) => { pop(L[0], u, tc - .3, td - .1, cam); pop(L[1], u, td, 99, cam); b(u, [0, 2.0, .2, .5], 0); } }; },
  c: [[0, 1.6, 3.4], [0, 1.2, 0], [0, 1.6, 3.0], [0, 1.2, 0]], range: 2.2 }; });
// 58. Tú no sabías nada de ese experimento. Pero aguantas. 10 segundos. 30. Un minuto
Q(58, (d, a) => { const ta = R0(a, 'aguantas'), t10 = R0(a, '10'), t30 = R0(a, '30'), tm = R0(a, 'minuto'); return { ...ASC({ luz: 0 }), fov: 26, atores: [YO({ x: -.4, z: -.8, y: SUE, eyes: [[0, 'look']], pose: suelo }), NORA({ x: .4, z: -.85, y: SUE, eyes: [[0, 'lookl']], pose: suelo })],
  extra: (c) => { luz(c, 0); const n = numLab(c, [0, 1.5, -.6], 1.0, { size: 100, w: 500 }); const ln = new THREE.Mesh(new THREE.PlaneGeometry(.6, .012), new THREE.MeshBasicMaterial({ color: '#FFE27A', transparent: true })); ln.position.set(0, .95, -.75); c.add(ln);
    return { update: (u, t2, cam) => { n(u > tm ? '1:00' : u > t30 ? '0:30' : u > t10 ? '0:10' : ''); ln.material.opacity = u > ta ? .5 + .3 * Math.sin(u * 5) : 0; } }; },
  c: [[0, 1, 1.9], [0, .9, -.8], [0, 1, 1.6], [0, .9, -.8]], range: 1.2, look: EMG }; });
// 59. Nora tiene los ojos marrones, con una manchita más clara en el izquierdo
Q(59, (d, a) => { const tm = R0(a, 'manchita'); let rb; return { ...ASC({ luz: 0 }), fov: 18, atores: [NORA({ x: .4, z: -.85, y: SUE, eyes: [[0, 'lookl']], pose: suelo }), YO({ x: -.4, z: -.8, y: SUE, eyes: [[0, 'heart']], pose: suelo })],
  extra: (c, s, A) => { luz(c, 0); rb = rubor(A[1]); const t = lw(c, ['OJOS MARRONES'], 1.0, [.4, 1.55, -.6]); const t2 = lw(c, ['…CON UNA MANCHITA MÁS CLARA'], 1.5, [.4, 1.55, -.6]); const sp = glowSprite('#FFD8A0', .1, 0); c.add(sp);
    return { update: (u, t2b, cam) => { pop(t, u, .2, tm - .1, cam); pop(t2, u, tm, 99, cam); rb(.7); const v = new THREE.Vector3(); A[0].head.getWorldPosition(v); sp.position.set(v.x - .08, v.y + .05, v.z + .2); sp.material.opacity = 0; } }; },
  c: [[-.2, 1.05, 1.6], [.4, 1, -.85], [-.1, 1.05, 1.4], [.4, 1, -.85]], range: 1.0, look: EMG }; });
// 60. En el minuto y medio, Nora se ríe. Pierde. "Es que pones una cara muy rara". Se pone roja. Y tú también
Q(60, (d, a) => { const tr = R0(a, 'roja'), tt = R0(a, 'tambien'); let r1, r2; return { ...ASC({ luz: 0 }), fov: 26, atores: [YO({ x: -.4, z: -.8, y: SUE, eyes: [[0, 'smug'], [tt, 'happy']], pose: suelo }), NORA({ x: .4, z: -.85, y: SUE, eyes: [[0, 'happy']], talk: [[0, 2]], pose: (k, u) => { k.pose({ armL: [8, 6], armR: [8, 6], bob: u < 2 ? Math.abs(Math.sin(u * 9)) * .03 : 0 }); hideLegs(k); } })],
  extra: (c, s, A) => { luz(c, 0); r1 = rubor(A[1]); r2 = rubor(A[0]); const h = hab(c, ['ES QUE PONES', 'UNA CARA MUY RARA'], 1.4, [.45, 1.5, -.8], 56); return { update: (u, t2, cam) => { pop(h, u, 0, tr - .2, cam); r1(smooth(tr - .2, tr + .3, u)); r2(smooth(tt - .2, tt + .3, u)); } }; },
  c: [[0, 1.1, 2.0], [0, .9, -.8], [0, 1.05, 1.7], [0, .9, -.8]], range: 1.3, look: EMG }; });
// 61. Y entonces empezáis a hablar. De verdad. Nora se ha mudado 3 veces en 2 años. Que siempre es "la nueva"
Q(61, (d, a) => { const tm = R0(a, 'mudado'), tn = R0(a, 'nueva'); return { ...ASC({ luz: 0 }), fov: 28, atores: [YO({ x: -.4, z: -.8, y: SUE, eyes: [[0, 'look']], pose: suelo }), NORA({ x: .4, z: -.85, y: SUE, eyes: [[0, 'look'], [tn, 'sad']], talk: [[tm - .5, d]], pose: suelo })],
  extra: (c) => { luz(c, 0); const n = nube(c, ['3 MUDANZAS', 'EN 2 AÑOS'], 1.1, [0, 0, 0]); n.position.set(.6, 1.8, -.8); const t = lab(c, ['SIEMPRE «LA NUEVA»'], 1.5, [0, 1.95, -.6], { bg: '#D66A86', fg: '#fff' }); const C = [0, 1, 2].map((i) => { const k = caja(.18); k.position.set(.9 + i * .05, .02 + i * .15, -1.2); c.add(k); return k; });
    return { update: (u, t2, cam) => { pop(n, u, tm, tn - .1, cam); pop(t, u, tn, 99, cam); C.forEach((k, i) => (k.visible = u > tm + i * .3)); } }; },
  c: [[0, 1.2, 2.3], [0, .85, -.8], [0, 1.2, 2.0], [0, .85, -.8]], range: 1.5, look: EMG }; });
// 62. En el instituto todavía come sola algunos días. Lo peor de mudarse: nadie sabe cómo eres de verdad
Q(62, (d, a) => { const tp = R0(a, 'peor'), tn = R0(a, 'nadie'); return { amb: 'aula', fov: 32, k: 1.25, atores: [NORA({ x: 0, z: .2, y: -.35, eyes: [[0, 'down'], [tn, 'sad']], pose: (k) => { k.pose({ armL: [40, 50], armR: [12, 8] }); hideLegs(k); } }), EXTRA(0, { x: -2.4, z: -.8, eyes: [[0, 'happy']], pose: talkP }), EXTRA(2, { x: -1.7, z: -.9, eyes: [[0, 'happy']] }), EXTRA(4, { x: 2.2, z: -1.0, eyes: [[0, 'happy']], pose: talkP })],
  extra: (c) => { c.add(box(1.2, .06, .7, std('#C8A878'), 0, .55, .5)); const L = [lw(c, ['COME SOLA ALGUNOS DÍAS'], 2.0, [0, 2.2, .2]), lab(c, ['NADIE SABE CÓMO ERES DE VERDAD'], 2.6, [0, 2.2, .2], { bg: '#D66A86', fg: '#fff' })]; return { update: (u, t2, cam) => { pop(L[0], u, .2, tp - .1, cam); pop(L[1], u, tn, 99, cam); } }; },
  c: [[0, 1.7, 4.4], [0, 1.1, 0], [0, 1.5, 3.4], [0, 1.0, .2]], range: 2.6, blur: 8, look: { exposure: .92, vig: .6 } }; });
// 63. Y tú le cuentas que llevas dos meses intentando hablar con ella
Q(63, (d, a) => { const tm = R0(a, 'meses'); let rb; return { ...ASC({ luz: 0 }), fov: 28, atores: [YO({ x: -.4, z: -.8, y: SUE, eyes: [[0, 'down']], talk: [[0, d]], pose: suelo }), NORA({ x: .4, z: -.85, y: SUE, eyes: [[0, 'lookl'], [tm, 'wide']], pose: suelo })],
  extra: (c, s, A) => { luz(c, 0); rb = rubor(A[0]); const t = lw(c, ['2 MESES INTENTANDO HABLARLE'], 1.9, [0, 1.75, -.6]); return { update: (u, t2, cam) => { pop(t, u, tm, 99, cam); rb(.8); } }; },
  c: [[-.3, 1.2, 2.3], [0, .85, -.8], [-.2, 1.15, 2.0], [0, .85, -.8]], range: 1.5, look: EMG }; });
// 64. Una vez la esperaste en el portal 20 minutos para "coincidir". Al final dijiste "hola" y te fuiste corriendo
Q(64, (d, a) => { const t20 = R0(a, '20'), tb = R0(a, 'bajo'), th = R0(a, 'hola'), tc = R0(a, 'corriendo'); return { amb: 'rellano', ambo: { piso: 0, portal: true, open: 0 }, fov: 32, k: 1.25, atores: [YO({ x: -1.6, z: -1.2, eyes: [[0, 'look'], [tb, 'wide'], [tc, 'shut']], move: (u) => [lerp(-1.6, 6, smooth(tc - .3, tc + 1.4, u)), 0, lerp(-1.2, 0, smooth(tc - .3, tc + 1.4, u))], pose: (k, u) => (u > tc - .3 ? k.walk(u * 2.2) : u > th && u < th + .8 ? wave(k, u) : k.pose()) }), NORA({ x: 0, z: -3.4, eyes: [[0, 'look'], [tc, 'wide']], move: (u) => [0, 0, lerp(-3.6, -2.4, smooth(tb, tb + 1, u))], pose: (k, u) => (u > tb && u < tb + 1 ? k.walk(u) : k.pose()) })],
  extra: (c) => { const n = numLab(c, [-1.6, 2.45, -1.2], 1.0, { size: 100, w: 500 }); const h = hab(c, 'HOLA', .8, [-1.2, 2.2, -1.2], 80); const t = lab(c, ['«COINCIDIR»'], 1.3, [-1.0, 2.9, -1.6], { bg: '#F2C14E', fg: '#2A2A34' });
    return { update: (u, t2, cam) => { c.userData.doors(smooth(tb - .8, tb, u)); if (u > t20 && u < tb) n('⏱ ' + Math.min(20, Math.floor((u - t20) * 6)) + ' min'); else n(''); pop(t, u, .2, t20 - .1, cam); pop(h, u, th, tc, cam); } }; },
  c: [[1.0, 1.8, 4.6], [-.4, 1.4, -1.8], [.6, 1.7, 4.0], [-.2, 1.4, -1.8]], range: 3.5 }; });
// 65. Nora se tapa la cara: "¡Me acuerdo! Pensé que te caía mal"
Q(65, (d, a) => { const tm = R0(a, 'acuerdo'), tp = R0(a, 'pense'); return { ...ASC({ luz: 0 }), fov: 28, atores: [YO({ x: -.4, z: -.8, y: SUE, eyes: [[0, 'look'], [tp, 'wide']], pose: suelo }), NORA({ x: .4, z: -.85, y: SUE, eyes: [[0, 'shut'], [tp, 'happy']], talk: [[tm - .2, d]], pose: (k, u) => { k.pose({ armL: u < tp ? [150, 70] : [8, 6], armR: u < tp ? [150, 70] : [8, 6] }); hideLegs(k); } })],
  extra: (c) => { luz(c, 0); const h1 = hab(c, '¡ME ACUERDO!', 1.1, [.45, 1.5, -.8], 66), h2 = hab(c, 'PENSÉ QUE TE CAÍA MAL', 1.5, [.45, 1.5, -.8], 56); return { update: (u, t2, cam) => { pop(h1, u, tm - .2, tp - .1, cam); pop(h2, u, tp, 99, cam); } }; },
  c: [[.2, 1.2, 2.3], [0, .85, -.8], [.1, 1.15, 2.0], [0, .85, -.8]], range: 1.5, look: EMG }; });
// 66. "¿Y qué pensabas decirme todas esas mañanas?". Y tú, la verdad: "No sé. Algo del frío"
Q(66, (d, a) => { const tq = R0(a, 'que'), tn = R0(a, 'no'), tf = R0(a, 'frio'); return { ...ASC({ luz: 0 }), fov: 28, atores: [YO({ x: -.4, z: -.8, y: SUE, eyes: [[0, 'look'], [tn, 'flat']], talk: [[tn, d]], pose: suelo }), NORA({ x: .4, z: -.85, y: SUE, eyes: [[0, 'smug']], talk: [[0, tn - 1.5]], pose: suelo })],
  extra: (c) => { luz(c, 0); const h1 = hab(c, ['¿QUÉ PENSABAS DECIRME', 'TODAS ESAS MAÑANAS?'], 1.6, [.45, 1.5, -.8], 54), h2 = hab(c, ['NO SÉ…', 'ALGO DEL FRÍO'], 1.2, [-.45, 1.5, -.8], 60); return { update: (u, t2, cam) => { pop(h1, u, 0, tn - .2, cam); pop(h2, u, tn, 99, cam); } }; },
  c: [[0, 1.2, 2.3], [0, .85, -.8], [0, 1.15, 2.0], [0, .85, -.8]], range: 1.5, look: EMG }; });
// 67. Nora levanta una ceja: "Qué romántico". Los dos os reís. Por primera vez, sin mirar los números
Q(67, (d, a) => { const tq = R0(a, 'romantico'), tr = R0(a, 'reis'), tn = R0(a, 'numeros'); return { ...ASC({ luz: 0 }), fov: 28, atores: [YO({ x: -.4, z: -.8, y: SUE, eyes: [[0, 'flat'], [tr, 'happy']], pose: (k, u) => { k.pose({ armL: [8, 6], armR: [8, 6], bob: u > tr ? Math.abs(Math.sin(u * 9)) * .03 : 0 }); hideLegs(k); } }), NORA({ x: .4, z: -.85, y: SUE, eyes: [[0, 'smug'], [tr, 'happy']], talk: [[tq - .5, tq + .5]], pose: (k, u) => { k.pose({ armL: [8, 6], armR: [8, 6], bob: u > tr ? Math.abs(Math.sin(u * 9 + 1)) * .03 : 0 }); hideLegs(k); } })],
  extra: (c) => { luz(c, 0); const h = hab(c, 'QUÉ ROMÁNTICO', 1.2, [.45, 1.5, -.8], 62); const t = lw(c, ['SIN MIRAR LOS NÚMEROS'], 1.8, [0, 1.85, -.6]); const warm = calida(c, [0, 1.35, .6], 0, 4); return { update: (u, t2, cam) => { pop(h, u, tq - .5, tr - .1, cam); pop(t, u, tn - .5, 99, cam); warm.intensity = 4 * smooth(tr, tr + 1, u); } }; },
  c: [[0, 1.2, 2.3], [0, .85, -.8], [0, 1.15, 2.0], [0, .85, -.8]], range: 1.5, look: EMG }; });
// 68. Las 12 menos cuarto. La luz parpadea. El ascensor se mueve un poco. Un centímetro. Nora te agarra del brazo. Fuerte
Q(68, (d, a) => { const tl = R0(a, 'luz'), tm = R0(a, 'mueve'), tc = R0(a, 'centimetro'), ta = R0(a, 'agarra'); let rb; return { ...ASC({ luz: 0 }), fov: 28, atores: [YO({ x: -.3, z: -.8, y: SUE, eyes: [[0, 'look'], [tm, 'wide'], [ta + 1, 'heart']], pose: suelo }), NORA({ x: .3, z: -.85, y: SUE, eyes: [[0, 'look'], [tm, 'wide']], move: (u) => [lerp(.4, .22, smooth(ta, ta + .3, u)), SUE, -.85], pose: (k, u) => { k.pose({ armL: u > ta ? [70, 90] : [8, 6], armR: [8, 6] }); hideLegs(k); } })],
  extra: (c, s, A) => { rb = rubor(A[0]); const ck = clock(.4, 11.75); ck.position.set(0, 2.15, -.9); c.add(ck); const t = lab(c, ['23:45'], .9, [0, 2.55, -.6], { size: 90, w: 450 }); const cm = lw(c, ['1 cm'], .6, [0, 1.45, -.5], { size: 90, w: 360 });
    return { update: (u, t2, cam) => { luz(c, 0, 0); const fl = u > tl && u < tm ? parpadeo(u, tl, tm) : 0; c.userData.luz(fl * .6); pop(t, u, .1, tl, cam); pop(cm, u, tc, ta, cam); shake(cam, u > tm && u < tm + .6 ? .03 : 0, u); rb(smooth(ta, ta + .5, u)); } }; },
  c: [[0, 1.2, 2.2], [0, .85, -.8], [0, 1.1, 1.8], [0, .85, -.8]], range: 1.4, look: EMG }; });
// 69. Por el altavoz, el técnico: "Tranquilos, es normal. Ya estoy en el edificio. 10 minutos"
Q(69, (d, a) => { const tt = R0(a, 'tranquilos'), t10 = R0(a, '10'); return { amb: 'hueco', fov: 30, k: 1.25, atores: [TEC({ x: 0, z: -.6, move: () => [-.3, 7.5 * PISO + 2.92, -.4], eyes: [[0, 'look']], talk: [[tt, d]], pose: (k, u) => k.pose({ armL: [12, 8], armR: [70 + Math.sin(u * 6) * 20, 40] }) })],
  extra: (c) => { const y0 = 7.5 * PISO; c.userData.setCab(y0); c.userData.cabLuz(0); const h = hab(c, ['TRANQUILOS, ES NORMAL.', 'YA ESTOY EN EL EDIFICIO'], 2.0, [0, y0 + 5.6, -.2], 54); const n = lab(c, ['10 MINUTOS'], 1.4, [0, y0 + 5.6, -.2]); const ln = linterna(); ln.position.set(.3, y0 + 4.2, -.2); c.add(ln); ln.userData.on(1);
    return { update: (u, t2, cam) => { pop(h, u, tt, t10 - .1, cam); pop(n, u, t10, 99, cam); } }; },
  c: [[1.6, 7.5 * PISO + 5.0, 5.0], [0, 7.5 * PISO + 4.0, -.6], [1.0, 7.5 * PISO + 4.6, 4.4], [0, 7.5 * PISO + 4.0, -.6]], range: 3, look: { exposure: 1.05, bloom: .45 } }; });
// 70. Nora, de repente, seria: "Cuando salgamos de aquí, ¿todo va a volver a ser como antes? ¿Tú mirando los números y yo el móvil?"
Q(70, (d, a) => { const tc = R0(a, 'cuando'), tn = R0(a, 'numeros'); return { ...ASC({ luz: 0 }), fov: 26, atores: [YO({ x: -.3, z: -.8, y: SUE, eyes: [[0, 'look']], pose: suelo }), NORA({ x: .25, z: -.85, y: SUE, eyes: [[0, 'flat'], [tc, 'sad']], talk: [[tc, d]], pose: suelo })],
  extra: (c) => { luz(c, 0); const h1 = hab(c, ['CUANDO SALGAMOS…', '¿TODO COMO ANTES?'], 1.4, [.35, 1.55, -.6], 56), h2 = hab(c, ['¿TÚ MIRANDO LOS NÚMEROS', 'Y YO EL MÓVIL?'], 1.6, [.35, 1.55, -.6], 52); return { update: (u, t2, cam) => { pop(h1, u, tc, tn - 1.5, cam); pop(h2, u, tn - 1.4, 99, cam); } }; },
  c: [[.2, 1.1, 2.0], [0, .9, -.8], [.1, 1.05, 1.7], [0, .9, -.8]], k: 1.75, range: 1.6, look: EMG }; });
// 71. Piensas en los 32 segundos, las mañanas, lo que no dijiste. "No. A partir de ahora, te hablo del frío todos los días". "Trato hecho"
Q(71, (d, a) => { const t32 = R0(a, '32'), tn = R0(a, 'no', 6), tf = R0(a, 'frio', 6), tt = R0(a, 'trato'); let rb; return { ...ASC({ luz: 0 }), fov: 26, atores: [YO({ x: -.3, z: -.8, y: SUE, eyes: [[0, 'down'], [tn, 'smug']], talk: [[tn, tf + 1]], pose: suelo }), NORA({ x: .25, z: -.85, y: SUE, eyes: [[0, 'sad'], [tf, 'happy']], talk: [[tt, tt + 1]], pose: suelo })],
  extra: (c, s, A) => { luz(c, 0); rb = rubor(A[1]); const n = nube(c, ['32 SEGUNDOS', 'CADA MAÑANA…'], 1.1, [0, 0, 0]); n.position.set(-.9, 1.8, -.6); const h = hab(c, ['NO. TE HABLO DEL FRÍO', 'TODOS LOS DÍAS'], 1.5, [-.35, 1.55, -.6], 54); const h2 = hab(c, 'TRATO HECHO', 1.1, [.35, 1.55, -.6], 64); const warm = calida(c, [0, 1.35, .6], 0, 4);
    return { update: (u, t2, cam) => { pop(n, u, t32, tn - .2, cam); pop(h, u, tn, tt - .2, cam); pop(h2, u, tt, 99, cam); rb(smooth(tf, tf + .5, u)); warm.intensity = 4 * smooth(tf, tt, u); } }; },
  c: [[0, 1.1, 2.0], [0, .9, -.8], [0, 1.05, 1.7], [0, .9, -.8]], k: 1.75, range: 1.6, look: EMG }; });
// 72. Las 12 menos 5. Nora abre la bolsa: "Las uvas de mi familia... pero yo estoy aquí". Cuenta 12 para ella. Y 12 para ti
Q(72, (d, a) => { const tb = R0(a, 'bolsa'), ts = R0(a, 'son'), tc = R0(a, 'cuenta'), tt = R0(a, 'ti'); return { ...ASC({ luz: 0 }), fov: 28, atores: [YO({ x: -.3, z: -.8, y: SUE, eyes: [[0, 'look'], [tt, 'happy']], pose: suelo }), NORA({ x: .25, z: -.85, y: SUE, eyes: [[0, 'happy']], talk: [[ts, tc]], pose: (k, u) => { k.pose({ armL: [8, 6], armR: [u > tc ? 60 + Math.sin(u * 8) * 15 : 40, 50] }); hideLegs(k); } })],
  extra: (c) => { luz(c, 0); const g = uvas(); g.position.set(.6, .02, -.5); c.add(g); const t = lab(c, ['23:55'], .9, [0, 1.9, -.6], { size: 90, w: 450 }); const h = hab(c, ['SON LAS UVAS DE MI FAMILIA…', 'PERO YO ESTOY AQUÍ'], 1.6, [.35, 1.5, -.8], 50); const U = []; for (let i = 0; i < 24; i++) { const b = uva(); b.position.set((i < 12 ? .25 : -.25) + (i % 4) * .05 - .08, .05, -.45 + Math.floor((i % 12) / 4) * .06); c.add(b); U.push(b); }
    return { update: (u, t2, cam) => { pop(t, u, .1, ts - .2, cam); pop(h, u, ts, tc - .1, cam); U.forEach((b, i) => (b.visible = u > tc + (i < 12 ? i * .12 : (tt - tc) + (i - 12) * .05))); } }; },
  c: [[0, 1.4, 2.1], [0, .7, -.7], [0, 1.3, 1.8], [0, .7, -.7]], range: 1.4, look: EMG }; });
// 73. Por el hueco del ascensor se oye la tele de algún vecino. Los cuartos. Y la primera campanada
Q(73, (d, a) => { const tc = R0(a, 'cuartos'), tp = R0(a, 'primera'); return { amb: 'hueco', fov: 30, k: 1.25, atores: [YO({ x: -.3, z: -.6, y: 7.5 * PISO + .06 + SUE, pose: suelo }), NORA({ x: .25, z: -.7, y: 7.5 * PISO + .06 + SUE, pose: suelo })],
  extra: (c) => { const y0 = 7.5 * PISO; c.userData.setCab(y0); c.userData.cabLuz(0); const tv = lightPanel(1.0, .6, '#9FC8FF', 2.2); tv.position.set(3.2, 9 * PISO + 1.4, -.4); c.add(tv); const N = notas(c, 6); const L = [lw(c, ['LOS CUARTOS…'], 1.6, [0, y0 + 5.0, .4]), lab(c, ['🔔 ¡DONG!'], 1.4, [0, y0 + 5.0, .4], { bg: '#C9361F', fg: '#fff' })];
    return { update: (u, t2, cam) => { N(u, new THREE.Vector3(2.4, 9 * PISO + 1.0 - (u * .4) % 3, -.4), cam); pop(L[0], u, tc - .2, tp - .1, cam); pop(L[1], u, tp, 99, cam); } }; },
  cam: [[0, [2.0, 9 * PISO + 1.8, 6.0], [1.6, 9 * PISO + 1.2, -.6]], [d, [.6, 7.5 * PISO + 2.6, 6.0], [0, 7.5 * PISO + 2.2, -.6]]], f: [[0, 6.6], [d, 6.4]], range: 3.5, look: { exposure: 1.05, bloom: .45 } }; });
// 74. Una uva. Dos. Tres. Nora se atraganta en la seis y se ríe con la boca llena. Tú vas por la nueve. 10. 11. 12
Q(74, (d, a) => { const ta = R0(a, 'atraganta'), t9 = R0(a, 'nueve'), t12 = R0(a, '12'); const cnt = (u) => (u < 0 ? 0 : u < ta ? 1 + Math.floor(u / .9) : u < t9 ? 6 : u < t9 + 1.4 ? 9 : u < t12 ? 9 + Math.floor((u - t9 - 1.4) / .8) + 1 : 12); return { ...ASC({ luz: 0 }), fov: 28, atores: [YO({ x: -.3, z: -.8, y: SUE, eyes: [[0, 'look'], [t12, 'happy']], pose: (k, u) => { k.pose({ armL: [8, 6], armR: [100 + Math.abs(Math.sin(u * 4)) * 20, 30] }); hideLegs(k); } }), NORA({ x: .25, z: -.85, y: SUE, eyes: [[0, 'look'], [ta, 'shut'], [ta + .6, 'happy']], pose: (k, u) => { k.pose({ armL: [100 + Math.abs(Math.cos(u * 4)) * 20, 30], armR: [8, 6], bob: u > ta && u < ta + 1.5 ? Math.abs(Math.sin(u * 12)) * .03 : 0 }); hideLegs(k); } })],
  extra: (c) => { luz(c, 0); const n = numLab(c, [0, 1.9, -.6], .9, { size: 100, w: 450 }); const at = lw(c, ['¡SE ATRAGANTA!'], 1.2, [.5, 1.4, -.7]);
    return { update: (u, t2, cam) => { n('🍇 ' + cnt(u)); pop(at, u, ta, ta + 1.8, cam); } }; },
  c: [[0, 1.15, 2.1], [0, .9, -.8], [0, 1.1, 1.8], [0, .9, -.8]], range: 1.4, look: EMG }; });
// 75. Fuera, en la calle, fuegos artificiales. Y en un ascensor parado entre el 7 y el 8, Nora te da un beso. En la mejilla. Rápido
Qs(75, ['ascensor'], [
  (d, a) => ({ amb: 'barrio', ambo: { night: true }, fov: 34, k: 1.25, atores: [],
    extra: (c) => { const f = fuegos(c, 7, [-12, 12, 6, 16, -24]); const t = lab(c, ['¡FELIZ AÑO NUEVO!'], 3.2, [0, 4.4, -6], { bg: '#C9361F', fg: '#fff' }); return { update: (u, t2, cam) => { f(u, 1); pop(t, u, .3, 99, cam); } }; },
    c: [[0, 2.2, 8], [0, 4, -10], [0, 2.6, 7], [0, 4.2, -10]], range: 8, blur: 4, look: { exposure: 1.05, bloom: .7 } }),
  (d, a) => { const tb = R0(a, 'beso'), tm = R0(a, 'mejilla'); let rb; return { ...ASC({ luz: 0 }), fov: 26, atores: [YO({ x: -.2, z: -.8, y: SUE, eyes: [[0, 'look'], [tb + .2, 'wide'], [tm + .6, 'heart']], pose: suelo }), NORA({ x: .25, z: -.85, y: SUE, eyes: [[0, 'look'], [tb, 'shut'], [tm + .6, 'happy']], move: (u) => [lerp(.25, .02, smooth(tb - .3, tb, u)) + lerp(0, .2, smooth(tb + .5, tb + .9, u)), SUE, -.85], pose: suelo })],
    extra: (c, s, A) => { luz(c, 0); rb = rubor(A[0]); const t = lw(c, ['EN LA MEJILLA. RÁPIDO.'], 1.6, [0, 1.85, -.6]); const ht = corazon(c, .3); const f = fuegos(c, 3, [-3, 3, 3, 5, -4]);
      return { update: (u, t2, cam) => { pop(t, u, tm, 99, cam); rb(smooth(tb, tb + .5, u)); ht.visible = u > tb; ht.position.set(-.1, 1.4 + ((u * .3) % .3), -.8); pointer(ht, cam); } }; },
    c: [[0, 1.05, 1.9], [0, .9, -.8], [0, 1, 1.6], [0, .9, -.8]], range: 1.2, look: EMG }; },
]);
// 76. "Feliz año nuevo", te dice. Y mira a la puerta, como hace todo el mundo en los ascensores
Q(76, (d, a) => { const tm = R0(a, 'mira'); let rb; return { ...ASC({ luz: 0 }), fov: 26, atores: [YO({ x: -.2, z: -.8, y: SUE, eyes: [[0, 'heart']], pose: suelo }), NORA({ x: .2, z: -.85, y: SUE, eyes: [[0, 'happy'], [tm, 'look']], talk: [[0, 1.2]], pose: (k, u) => { k.pose({ armL: [8, 6], armR: [8, 6], head: u > tm ? -12 : 0 }); hideLegs(k); } })],
  extra: (c, s, A) => { luz(c, 0); rb = rubor(A[0]); const r2 = rubor(A[1]); const h = hab(c, 'FELIZ AÑO NUEVO', 1.3, [.3, 1.5, -.8], 60); const t = lw(c, ['…Y MIRA A LA PUERTA'], 1.5, [0, 1.85, -.6]); const ht = corazon(c, .3);
    return { update: (u, t2, cam) => { pop(h, u, 0, tm - .1, cam); pop(t, u, tm, 99, cam); rb(1); r2(.7); ht.position.set(-.2, 1.35 + ((u * .3) % .3), -.8); pointer(ht, cam); } }; },
  c: [[0, 1.05, 1.9], [0, .9, -.8], [0, 1, 1.6], [0, .9, -.8]], range: 1.2, look: EMG }; });
// 77. Clanc. La luz vuelve. El ascensor sube solo hasta el piso 8. Y la puerta se abre
Q(77, (d, a) => { const tl = R0(a, 'luz'), ts = R0(a, 'sube'), tp = R0(a, 'puerta'); return { ...ASC(), fov: 30, atores: [YO({ x: PY[0], z: PY[1], eyes: [[0, 'wide'], [tp, 'look']], move: (u) => [PY[0], u < tl ? SUE : 0, PY[1]], pose: (k, u) => (u < tl ? suelo(k) : k.pose()) }), NORA({ x: PN[0], z: PN[1], eyes: [[0, 'wide'], [tp, 'look']], move: (u) => [PN[0], u < tl ? SUE : 0, PN[1]], pose: (k, u) => (u < tl ? suelo(k) : k.pose()) })],
  extra: (c) => { const cl = lab(c, ['¡CLANC!'], 1.3, [0, 2.2, -.4], { size: 100, bg: '#C9361F', fg: '#fff' }); const t = lw(c, ['¡VUELVE LA LUZ!'], 1.5, [0, 2.2, -.4]); const n8 = lab(c, ['PISO 8'], 1.0, [0, 2.2, -.4], { size: 90, w: 450 });
    return { update: (u, t2, cam) => { luz(c, smooth(tl - .2, tl + .2, u)); c.userData.display.userData.set(u > ts + 1.2 ? 8 : '7½', u > ts && u < ts + 1.2 ? '▲' : ''); c.userData.doors(smooth(tp, tp + 1, u)); pop(cl, u, 0, tl - .1, cam); pop(t, u, tl, ts + 1.1, cam); pop(n8, u, ts + 1.2, 99, cam); shake(cam, u < .5 ? .04 : 0, u); } }; },
  c: CC(-.2, .2), range: 2, lookFn: (u) => (u < tl ? EMG : {}) }; });
// 78. En el rellano: el técnico, tu abuela, los padres de Nora, media escalera de vecinos en pijama con champán, aplaudiendo
Q(78, (d, a) => { const tt = R0(a, 'tecnico'), ta = R0(a, 'abuela'), tp = R0(a, 'padres'), tv = R0(a, 'vecinos'), tap = R0(a, 'aplaudiendo'); const on = (t0) => (u) => u > t0 - .2; return { amb: 'rellano', ambo: { piso: 8, open: 1, night: true }, fov: 34, k: 1.25, atores: [YO({ x: -.3, z: -3.5, eyes: [[0, 'wide']] }), NORA({ x: .3, z: -3.5, eyes: [[0, 'wide']] }), TEC({ x: 1.2, z: -2.2, eyes: [[0, 'happy']], pose: wave }), ABUELA({ x: -1.3, z: -2.0, eyes: [[0, 'happy']] }), MADRE({ x: 1.9, z: -1.4, eyes: [[0, 'happy']] }), H({ outfit: 'terno', glow: 0, x: 2.6, z: -1.6, eyes: [[0, 'happy']] }), ...[0, 2, 3, 6, 7].map((i, j) => EXTRA(i, { x: -3.6 + j * .75, z: -.4 - (j % 2) * .5, outfit: 'jaleco', eyes: [[0, 'happy']], pose: (k, u) => (u > tap - .3 ? clap(k, u + j) : k.pose()) }))],
  extra: (c, s, A) => { const G = []; [5, 6, 7, 8, 9].forEach((i) => { const g = new THREE.Mesh(new THREE.CylinderGeometry(.04, .02, .14, 10), std('#F2E2A0', { transparent: true, opacity: .8 })); c.add(g); G.push([g, i]); }); const L = [lw(c, ['EL TÉCNICO'], 1.1, [1.2, 2.25, -2.2]), lw(c, ['TU ABUELA'], 1.1, [-1.3, 2.25, -2.0]), lw(c, ['SUS PADRES'], 1.2, [2.3, 2.25, -1.5]), lab(c, ['MEDIA ESCALERA EN PIJAMA'], 2.4, [-2.2, 2.4, -.5])];
    return { update: (u, t2, cam) => { A[2].root.visible = u > tt - .3; A[3].root.visible = u > ta - .3; A[4].root.visible = A[5].root.visible = u > tp - .3; for (let i = 6; i < 11; i++) A[i].root.visible = u > tv - .3; G.forEach(([g, i]) => { const p = hand(A[i]); g.position.set(p.x, p.y + .1, p.z + .05); g.visible = A[i].root.visible && u < tap - .3; }); pop(L[0], u, tt, 99, cam); pop(L[1], u, ta, 99, cam); pop(L[2], u, tp, 99, cam); pop(L[3], u, tv, 99, cam); } }; },
  c: [[0, 2.0, 4.6], [0, 1.3, -2.0], [0, 1.9, 4.0], [0, 1.3, -2.0]], range: 4, blur: 6 }; });
// 79. Tu abuela mira la bandeja vacía: "¿Y los turrones?". Nora, muy seria: "Se los comió el ascensor"
Q(79, (d, a) => { const ty = R0(a, 'turrones'), ts = R0(a, 'comio'); return { amb: 'rellano', ambo: { piso: 8, open: 1, night: true }, fov: 30, atores: [ABUELA({ x: -.8, z: -1.6, eyes: [[0, 'down'], [ty - .4, 'angry']], talk: [[ty - .8, ty + .4]], pose: (k) => k.pose({ armL: [12, 8], armR: [80, 30] }) }), NORA({ x: .6, z: -2.0, eyes: [[0, 'flat'], [ts + .6, 'smug']], talk: [[ts - 1, ts + .4]] }), YO({ x: 0, z: -2.2, eyes: [[0, 'flat'], [ts + .6, 'happy']], pose: trayP })],
  extra: (c, s, A) => { const b = bandeja(); b.userData.T.forEach((t) => (t.visible = false)); c.add(b); const h1 = hab(c, '¿Y LOS TURRONES?', 1.3, [-.8, 2.2, -1.6], 62), h2 = hab(c, ['SE LOS COMIÓ', 'EL ASCENSOR'], 1.2, [.7, 2.2, -2.0], 60);
    return { update: (u, t2, cam) => { trayAt(b, A[2]); pop(h1, u, ty - .8, ts - 1.3, cam); pop(h2, u, ts - 1.1, 99, cam); } }; },
  c: [[0, 1.6, 2.6], [0, 1.3, -1.9], [.2, 1.6, 2.2], [0, 1.3, -1.9]], range: 2.4 }; });
// 80. Al día siguiente, el ascensor ya funciona. Pero tienes una duda: ¿y si solo se acercó porque estaba asustada? ¿Un metro cuadrado? ¿Nadie más?
Q(80, (d, a) => { const td = R0(a, 'duda'), ta = R0(a, 'asustada'), tm = R0(a, 'metro'), tn = R0(a, 'nadie'); return { amb: 'rellano', ambo: { piso: 3 }, fov: 30, atores: [YO({ x: 0, z: -1.4, eyes: [[0, 'look'], [td, 'down'], [ta, 'sad']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > td ? 110 : 12, 120], head: u > td ? 8 : 0 }) })],
  extra: (c) => { const t0 = lw(c, ['AL DÍA SIGUIENTE · FUNCIONA'], 2.2, [0, 2.75, -1.6]); const N = [nube(c, ['¿SOLO PORQUE', 'ESTABA ASUSTADA?'], 1.5, [0, 0, 0]), nube(c, ['¿POR EL METRO', 'CUADRADO?'], 1.5, [0, 0, 0]), nube(c, ['¿PORQUE NO HABÍA', 'NADIE MÁS?'], 1.5, [0, 0, 0])]; N.forEach((n, i) => n.position.set(-1.5 + i * 1.5, 2.15 + (i % 2) * .3, -1.3));
    return { update: (u, t2, cam) => { c.userData.display.userData.set(3); pop(t0, u, .1, td - .1, cam); pop(N[0], u, ta - 1.2, 99, cam); pop(N[1], u, tm - .8, 99, cam); pop(N[2], u, tn - .6, 99, cam); } }; },
  c: [[0, 1.7, 3.6], [0, 1.6, -1.5], [0, 1.7, 3.0], [0, 1.7, -1.5]], range: 2.4 }; });
// 81. Así que subes al noveno. Esta vez no esperas 20 minutos. Llamas a su puerta. ¿Quieres ir a dar una vuelta?
Q(81, (d, a) => { const tl = R0(a, 'llamas'), tq = R0(a, 'preguntas'); return { amb: 'rellano', ambo: { piso: 9 }, fov: 30, atores: [YO({ x: -1.2, z: -1.6, eyes: [[0, 'smug'], [tq, 'look']], move: (u) => [lerp(.6, 2.4, smooth(0, tl - .3, u)), 0, -1.9], pose: (k, u) => (u < tl - .3 ? k.walk(u) : u < tl + 1 ? k.pose({ armL: [12, 8], armR: [80 + Math.abs(Math.sin(u * 12)) * 10, 0] }) : k.pose()), talk: [[tq, d]] }), NORA({ x: 3.25, z: -2.6, eyes: [[0, 'wide'], [tq + 1, 'happy']], move: (u) => [3.25, u > tl + 1 ? 0 : -5, -2.6] })],
  extra: (c) => { const t = lw(c, ['NO ESPERAS 20 MINUTOS'], 1.9, [1.6, 2.8, -2.2]); const k = lab(c, ['TOC TOC'], .9, [2.8, 2.3, -2.6], { size: 90, w: 450 }); const h = hab(c, ['¿QUIERES IR A', 'DAR UNA VUELTA?'], 1.3, [2.4, 2.35, -1.9], 56);
    return { update: (u, t2, cam) => { pop(t, u, .3, tl - .1, cam); pop(k, u, tl, tl + 1.2, cam); pop(h, u, tq, 99, cam); } }; },
  c: [[1.0, 1.7, 2.6], [2.4, 1.3, -2.2], [1.6, 1.65, 2.0], [2.8, 1.3, -2.2]], range: 2.4 }; });
// 82. Y ella dice que sí
Q(82, (d, a) => ({ amb: 'rellano', ambo: { piso: 9 }, fov: 28, atores: [NORA({ x: 3.3, z: -2.4, eyes: [[0, 'happy']], talk: [[0, d]] }), YO({ x: 2.6, z: -1.9, eyes: [[0, 'heart']] })],
  extra: (c, s, A) => { const h = hab(c, '¡SÍ!', .8, [3.3, 2.15, -2.3], 90); const rb = rubor(A[1]); return { update: (u, t2, cam) => { pop(h, u, 0, 99, cam); rb(.9); } }; },
  c: [[3.0, 1.6, 1.0], [3.0, 1.4, -2.2], [3.0, 1.6, .8], [3.0, 1.4, -2.2]], range: 1.6 }));
// 83. Al salir al rellano, el ascensor está ahí, abierto, esperando. Nora lo mira. Te mira. "¿Bajamos andando?"
Q(83, (d, a) => { const ta = R0(a, 'abierto'), tn = R0(a, 'nora'), tt = R0(a, 'ti'), tb = R0(a, 'bajamos'); return { amb: 'rellano', ambo: { piso: 9, open: 1 }, fov: 32, atores: [YO({ x: -.5, z: -1.4, eyes: [[0, 'look'], [tt, 'lookl'], [tb + .8, 'happy']] }), NORA({ x: .5, z: -1.5, eyes: [[0, 'happy'], [tn, 'look'], [tt, 'lookl'], [tb, 'smug']], talk: [[tb, d]], pose: (k, u) => k.pose({ head: u > tn && u < tt ? -15 : 0 }) })],
  extra: (c) => { const L = [lw(c, ['ABIERTO. ESPERANDO.'], 1.8, [0, 2.95, -2.6])]; const h = hab(c, '¿BAJAMOS ANDANDO?', 1.5, [.6, 2.3, -1.5], 58); return { update: (u, t2, cam) => { pop(L[0], u, ta - .3, tb - .2, cam); pop(h, u, tb, 99, cam); } }; },
  c: [[0, 1.7, 3.0], [0, 1.4, -2.2], [0, 1.65, 2.5], [0, 1.4, -2.0]], range: 2.6 }; });
// 84. Nueve pisos de escaleras. Y no se te hacen largos
Q(84, (d, a) => { const tl = R0(a, 'largos'); const X = (u, o) => lerp(-3.4 + o, 1.6 + o, smooth(0, d + 1, u)); return { amb: 'escalera', ambo: { piso: 9 }, fov: 32, k: 1.25, atores: [NORA({ x: -3, z: -1.0, move: (u) => { const x = X(u, .3); return [x, escY(x), -1.0]; }, pose: (k, u) => k.walk(u * 1.2), eyes: [[0, 'happy']] }), YO({ x: -3, z: -1.5, move: (u) => { const x = X(u, -.1); return [x, escY(x), -1.5]; }, pose: (k, u) => k.walk(u * 1.2 + 1), eyes: [[0, 'happy']] })],
  extra: (c) => { const t = lab(c, ['9 PISOS DE ESCALERAS'], 2.2, [-.6, 3.5, -1.0]); const t2 = lw(c, ['…Y NO SE TE HACEN LARGOS'], 2.4, [-.6, 3.5, -1.0]); return { update: (u, t3, cam) => { pop(t, u, .1, tl - .6, cam); pop(t2, u, tl - .5, 99, cam); } }; },
  c: [[-.6, 3.0, 5.6], [-1.2, 2.2, -1.2], [.4, 2.4, 5.0], [0, 1.6, -1.2]], range: 4 }; });
// 85. Eso es lo curioso: un ascensor puede meterte a alguien en la burbuja. Pero lo que hace que se quede es lo que os contáis cuando se va la luz
Q(85, (d, a) => { const tb = R0(a, 'burbuja'), tp = R0(a, 'pero'), tc = R0(a, 'contais'); return { amb: 'barrio', ambo: { night: false, dusk: true }, fov: 32, k: 1.25, atores: [YO({ x: -.35, z: 1.0, eyes: [[0, 'happy']], move: (u) => [-.35, 0, lerp(-2, 1.0, smooth(0, d * .6, u))], pose: (k, u) => (u < d * .6 ? k.walk(u) : k.pose({ armL: [12, 8], armR: [35, 20] })) }), NORA({ x: .35, z: 1.0, eyes: [[0, 'happy']], move: (u) => [.35, 0, lerp(-2, 1.0, smooth(0, d * .6, u))], pose: (k, u) => (u < d * .6 ? k.walk(u + 1) : k.pose({ armL: [35, 20], armR: [12, 8] })) })],
  extra: (c, s, A) => { const bb = burbuja(c, 1.1, '#FFB0C8'); const T = [lab(c, ['UN ASCENSOR TE METE EN LA BURBUJA…'], 2.8, [0, 3.0, 0], { size: 62, w: 1300 }), lw(c, ['…LO QUE HACE QUE SE QUEDE:'], 2.4, [0, 3.0, 0]), lab(c, ['LO QUE OS CONTÁIS CUANDO SE VA LA LUZ'], 3.0, [0, 3.0, 0], { size: 60, w: 1400, bg: '#E8667F', fg: '#fff' })];
    return { update: (u, t2, cam) => { const z = A[0].root.position.z; bb.position.set(0, 1.0, z); bb.scale.setScalar(Math.max(.01, smooth(tb, tb + 1, u))); pop(T[0], u, tb - .5, tp - .1, cam); pop(T[1], u, tp, tc - 1.4, cam); pop(T[2], u, tc - 1.3, 99, cam); } }; },
  c: [[0, 1.8, 6.4], [0, 1.6, .6], [0, 1.8, 5.6], [0, 1.6, .8]], range: 4, blur: 6 }; });
// 86. Si un día te quedas atrapado de verdad: pulsa la alarma, no intentes salir y espera tranquilo. Cables, aire, ayuda
Q(86, (d, a) => { const tp = R0(a, 'pulsa'), ti = R0(a, 'intentes'), te = R0(a, 'espera'), tc = R0(a, 'cables'), ta = R0(a, 'aire'), tay = R0(a, 'ayuda'); return { amb: 'gris', fov: 30, atores: [YO({ x: -1.4, z: 0, eyes: [[0, 'happy']], pose: (k, u) => (u > tp ? point(k) : k.pose()) })],
  extra: (c) => { const P = [lab(c, ['1. PULSA LA ALARMA 🔔'], 2.4, [.6, 2.6, 0], { bg: '#2A7A4A', fg: '#fff' }), lab(c, ['2. NO INTENTES SALIR'], 2.4, [.6, 2.05, 0], { bg: '#C9361F', fg: '#fff' }), lab(c, ['3. ESPERA TRANQUILO'], 2.4, [.6, 1.5, 0], { bg: '#2A7A9A', fg: '#fff' }), lw(c, ['LOS CABLES AGUANTAN · EL AIRE NO SE ACABA'], 3.2, [.2, .75, .3], { size: 56, w: 1400 }), lab(c, ['LA AYUDA SIEMPRE LLEGA'], 2.4, [.2, .25, .4])];
    return { update: (u, t2, cam) => { pop(P[0], u, tp, 99, cam); pop(P[1], u, ti, 99, cam); pop(P[2], u, te, 99, cam); pop(P[3], u, tc, 99, cam); pop(P[4], u, tay, 99, cam); } }; },
  c: [[0, 1.6, 4.6], [0, 1.4, 0], [0, 1.6, 4.2], [0, 1.4, 0]], k: 1.25, range: 3 }; });
// 87. LLAMADA FINAL: si te ha gustado, suscríbete al canal para ver más vídeos de «¿y si…?»
Q(87, (d, a) => { const ts = R0(a, 'suscribete'); return { amb: 'rellano', ambo: { piso: 9, open: 1 }, fov: 32, atores: [NORA({ x: -1.8, z: -1.0, eyes: [[0, 'happy']], pose: wave }), YO({ x: -1.0, z: -1.0, eyes: [[0, 'happy']], pose: (k, u) => (u > ts ? point(k) : wave(k, u)) })],
  extra: (c) => { const sb = suscribe(2.4); sb.position.set(1.1, 1.9, -1.2); c.add(sb); const b = brillos(c, 14, '#FFE27A'); return { update: (u, t, cam) => { const k = smooth(ts - .3, ts, u); sb.scale.setScalar(Math.max(.01, k)); sb.rotation.z = u > ts + .6 && u < ts + 1.6 ? Math.sin(u * 40) * .05 : 0; b(u, [1.1, 1.9, -1.1, 1.1], smooth(ts, ts + .3, u)); } }; },
  c: [[0, 1.7, 4.6], [-.2, 1.6, -1.2], [0, 1.7, 4.2], [-.2, 1.6, -1.2]], k: 1.25, range: 6, blur: 4 }; });
// 88. Cuéntame en los comentarios: ¿con quién te quedarías tú atrapado en un ascensor?
Q(88, (d, a) => { const tq = R0(a, 'quien'); return { ...ASC({ piso: 9 }), fov: 30, atores: [YO({ x: PY[0], z: PY[1], eyes: [[0, 'happy']], pose: wave }), NORA({ x: PN[0], z: PN[1], eyes: [[0, 'happy']], pose: wave })],
  extra: (c) => { const l2 = lw(c, ['CUÉNTAMELO EN LOS COMENTARIOS'], 2.2, [0, 2.2, -.3], { size: 62, w: 1200 }); const q = lab(c, ['¿CON QUIÉN TE QUEDARÍAS', 'ATRAPADO EN UN ASCENSOR?'], 2.0, [0, .55, .3], { size: 62, w: 1000, h: 240 }); return { update: (u, t, cam) => { pop(l2, u, .1, 99, cam); pop(q, u, tq - .4, 99, cam); } }; },
  c: CC(0, 0, 1.2, .4), range: 2.4 }; });
