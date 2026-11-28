// Shorts "¿Y si tu crush te pidiera salir?" — vertical 1080x1920, 41.5 s
import * as THREE from 'three';
import { plano, AMBS, box, std, cut, glowSprite, pointer, canvasTex, lightPanel, smooth, lerp, clamp, rng } from './mundo.js';
import { deitar, bubble, bubbleTex, wordTex, clock, speechTex, screen, textTex } from './extra.js';
import { S, wt } from './tiempos.js';
import { labelT, globo, tomate, heladeria, fogata, bus } from './amb2.js';
import './amb7.js';
import { cartel, caja, libro, balon, camion, sofa } from './amb3.js';
import { suscribe, telefono } from './amb4.js';
import './amb5.js';
import { PISO, escY } from './amb6.js';
import { linterna } from './amb3.js';
import { tree, sky } from './motor/kit.js';
import { stars } from './motor/kit2.js';
import { sunLight } from './comum.js';

export const CENAS = [];
const FIM = 999;
const end = (i) => (i + 1 < S.length ? S[i + 1] : FIM);
const KZ = (p, q, k) => p.map((v, i) => q[i] + (v - q[i]) * k);
const mk = (cfg, d) => { const K = cfg.k ?? 1.35; if (cfg.c && K !== 1) { const [p0, q0, p1, q1] = cfg.c; cfg.c = [KZ(p0, q0, K), q0, KZ(p1, q1, K), q1]; } else if (cfg.cam && K !== 1) { cfg.cam = cfg.cam.map(([u, p, q]) => [u, KZ(p, q, K), q]); if (cfg.f) cfg.f = cfg.f.map(([u, v]) => [u, v * K]); } if (cfg.c) { const [p0, q0, p1, q1] = cfg.c; cfg.cam = [[0, p0, q0], [d, p1, q1]]; const D = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]); cfg.f = [[0, D(p0, q0)], [d, D(p1, q1)]]; } return cfg; };
const Q = (i, fn) => { const a = S[i], b = end(i), d = Math.min(b, 41.5) - a; CENAS.push([(x, y) => plano(x, y, mk(fn(d, a), d)), a, b]); };
const Qt = (a, b, fn) => { const d = Math.min(b, 41.5) - a; CENAS.push([(x, y) => plano(x, y, mk(fn(d, a), d)), a, b]); };
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
const AMIGO = (o = {}) => H({ outfit: 'terno2', glow: 0, ...o });
const MJ = [['rosa', 'long', '#6B3A22'], ['amarelo', 'afro', '#2a1b18'], ['azul', 'bob', '#D9B65A'], ['verde', 'long', '#3a2418'], ['roxo', 'bun', '#3a2030'], ['rosa', 'bob', '#22161a'], ['amarelo', 'bun', '#8a4a26'], ['laranja', 'long', '#1E120C']];
const MUJ = (i, o = {}) => { const [of, h, hc] = MJ[i % MJ.length]; return H({ outfit: of, hair: h, hairc: hc, lash: true, glow: 0, ...o }); };
const CIENT = (i = 0, o = {}) => MUJ(i, { outfit: 'jaleco', glasses: true, ...o });
const RED = { bg: '#C9361F', fg: '#fff' };
const BLUE = { bg: '#2F5A9A', fg: '#fff' };
const sepia = { exposure: 1.0, vig: .7, bloom: .2 };
const MEMO = { bloom: .38, bloomT: .9, vig: .6, exposure: 1.0 };
const SEQ = (c, a, items, pos, w = 2.2) => { const st = { y: lab, w: lw, p: lp, r: (c2, l, w2, p) => lab(c2, l, w2, p, RED), b: (c2, l, w2, p) => lab(c2, l, w2, p, BLUE) }; const L = items.map(([ln, , s = 'y', p = pos, ww = w]) => st[s](c, ln, ww, p)); const T = items.map(([, t]) => (typeof t === 'number' ? t : R0(a, t))); return (u, cam) => L.forEach((m, i) => pop(m, u, T[i], items[i][5] || i + 1 >= T.length ? 99 : T[i + 1] - .15, cam)); };
const panel = (c, w, h, pos, col = '#1E2230', op = .82) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: op, depthWrite: false })); m.position.set(...pos); m.renderOrder = 4; c.add(m); return m; };
const mesa = (c, x, z, y = .9, w = 2.0, d = 1.0, col = '#C8A27A') => { c.add(box(w, .08, d, std(col), x, y, z)); for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) c.add(box(.07, y, .07, std('#5C3C28'), x + a * (w / 2 - .1), y / 2, z + b * (d / 2 - .1))); };
const silla = (c, x, z, ry = 0, col = '#8E6242') => { const g = new THREE.Group(); g.add(box(.5, .06, .5, std(col), 0, .5, 0)); g.add(box(.5, .7, .06, std(col), 0, .85, -.22)); for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) g.add(box(.05, .5, .05, std(col), a * .2, .25, b * .2)); g.position.set(x, 0, z); g.rotation.y = ry; c.add(g); return g; };
const flashes = (c, n = 8) => { const F = []; const R = rng(3); for (let i = 0; i < n; i++) { const g = glowSprite('#FFFFFF', .7, 0); c.add(g); F.push([g, R() * 6 - 3, 1 + R() * 2, -1 - R() * 2, R() * 3]); } return (u, on = 1) => F.forEach(([g, x, y, z, ph]) => { g.position.set(x, y, z); const f = (u * 1.3 + ph) % 1; g.material.opacity = on * (f < .08 ? 1 : 0); }); };
const libroAbierto = (izq = [], der = []) => { const t = canvasTex(640, 400, (x) => { x.fillStyle = '#F6EEDB'; x.fillRect(0, 0, 640, 400); x.fillStyle = '#D8CCB0'; x.fillRect(316, 0, 8, 400); x.fillStyle = '#2A2A34'; x.textAlign = 'center'; x.font = '900 34px Fraunces'; izq.forEach((l, i) => x.fillText(l, 160, 90 + i * 50)); der.forEach((l, i) => x.fillText(l, 480, 90 + i * 50)); x.fillStyle = '#9A8A70'; for (let i = 0; i < 6; i++) { x.fillRect(40, 250 + i * 22, 230, 6); x.fillRect(360, 250 + i * 22, 230, 6); } }); const m = new THREE.Mesh(new THREE.PlaneGeometry(.9, .56), new THREE.MeshStandardMaterial({ map: t, roughness: .8 })); return m; };
const movilT = (lines, o = {}) => canvasTex(540, 1000, (x) => { x.fillStyle = o.bg || '#141830'; x.fillRect(0, 0, 540, 1000); x.fillStyle = '#fff'; x.textAlign = 'center'; x.font = '700 70px Inter'; x.fillText(o.hora || '23:31', 270, 130); x.font = '800 52px Inter'; (lines || []).forEach((l, i) => { x.fillStyle = i === 0 ? '#FF7A6A' : '#F4F0E4'; x.fillText(l, 270, 480 + i * 70); }); });
const movil = (lines, o) => { const g = new THREE.Group(); g.add(box(.62, 1.18, .06, std('#1A1A24', { metalness: .4 }), 0, 0, 0, false)); const s = new THREE.Mesh(new THREE.PlaneGeometry(.56, 1.04), new THREE.MeshBasicMaterial({ map: movilT(lines, o), toneMapped: false })); s.position.z = .032; g.add(s); return g; };
const caraT = (title, bg, sub = '') => canvasTex(400, 520, (x) => { x.fillStyle = bg; x.fillRect(0, 0, 400, 520); x.fillStyle = '#fff'; x.font = '900 54px Fraunces'; x.textAlign = 'center'; x.fillText(title, 200, 80); x.fillStyle = '#43C4B4'; x.beginPath(); x.roundRect(100, 340, 200, 200, 50); x.fill(); x.fillStyle = '#111'; x.beginPath(); x.arc(200, 250, 92, 0, 7); x.fill(); x.fillStyle = '#fff'; x.beginPath(); x.ellipse(170, 245, 16, 22, 0, 0, 7); x.ellipse(230, 245, 16, 22, 0, 0, 7); x.fill(); if (sub) { x.fillStyle = '#F2C14E'; x.font = '900 36px Inter'; x.fillText(sub, 200, 140); } });
const cartelCara = (title, bg, w, sub) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, w * 1.3), new THREE.MeshStandardMaterial({ map: caraT(title, bg, sub), roughness: .6 })); m.castShadow = true; return m; };
// ===================== AYUDAS: TU CRUSH 24 HORAS =====================
const ELA = (o = {}) => ELLA({ glow: 0, ...o });
const CAMARERO = (o = {}) => H({ outfit: 'avental', glasses: true, glow: 0, ...o });
const PINK = { bg: '#D66A86', fg: '#fff' };
const NOCHE = { exposure: .95, bloom: .42 };
const corazon = (c, s = .35, col = '#E8667F') => { const ht = cut(wordTex('♥', col, 170), s, s * .8); ht.renderOrder = 6; c.add(ht); return ht; };
const latido = (u, bpm = 120) => { const f = (u * bpm / 60) % 1; return 1 + .18 * Math.exp(-f * 9) + .1 * Math.exp(-Math.max(0, f - .22) * 12) * (f > .22 ? 1 : 0); };
// cuarto de noche con luz de móvil
const glowMovil = (c, k) => { const l = new THREE.PointLight('#9FC0FF', 1.6, 2.2, 1.6); c.add(l); return () => { const p = hand(k); l.position.set(p.x, p.y + .1, p.z + .3); }; };
// ---- chat en un móvil grande ----
const wrapTxt = (x, t, maxW) => { const W = t.split(' '); const L = []; let cur = ''; for (const w of W) { const tt = cur ? cur + ' ' + w : w; if (x.measureText(tt).width > maxW && cur) { L.push(cur); cur = w; } else cur = tt; } if (cur) L.push(cur); return L; };
const smiley = (x, cx, cy, r) => { x.fillStyle = '#F2C14E'; x.beginPath(); x.arc(cx, cy, r, 0, 7); x.fill(); x.fillStyle = '#2A2A34'; x.beginPath(); x.arc(cx - r * .35, cy - r * .2, r * .12, 0, 7); x.arc(cx + r * .35, cy - r * .2, r * .12, 0, 7); x.fill(); x.strokeStyle = '#2A2A34'; x.lineWidth = r * .12; x.beginPath(); x.arc(cx, cy + r * .05, r * .5, .3, Math.PI - .3); x.stroke(); };
const heartP = (x, cx, cy, r, col = '#E8445A') => { x.fillStyle = col; x.beginPath(); x.moveTo(cx, cy + r * .9); x.bezierCurveTo(cx - r * 1.6, cy - r * .2, cx - r * .6, cy - r * 1.3, cx, cy - r * .45); x.bezierCurveTo(cx + r * .6, cy - r * 1.3, cx + r * 1.6, cy - r * .2, cx, cy + r * .9); x.fill(); };
const chatDraw = (x, msgs, o) => { x.fillStyle = '#10131F'; x.fillRect(0, 0, 540, 1000); x.fillStyle = '#1E2336'; x.fillRect(0, 0, 540, 150); x.fillStyle = '#E8667F'; x.beginPath(); x.arc(70, 92, 34, 0, 7); x.fill(); x.fillStyle = '#4A2A1A'; x.beginPath(); x.arc(70, 92, 26, Math.PI, 0); x.fill(); x.fillStyle = '#fff'; x.textAlign = 'left'; x.font = '800 34px Inter'; x.fillText(o.name || 'MI CRUSH ♥', 120, 88); x.font = '600 24px Inter'; x.fillStyle = o.off ? '#8A90A0' : '#5FD08A'; x.fillText(o.off ? 'desconectada' : (o.typing ? 'escribiendo…' : 'en línea'), 120, 122); x.fillStyle = '#C8CCD8'; x.font = '700 26px Inter'; x.textAlign = 'right'; x.fillText(o.hora || '00:00', 515, 40);
  let y = 190; x.font = '700 36px Inter'; for (const [side, t] of msgs) { if (t === '@smile' || t === '@heart') { const cx = side === 'r' ? 440 : 100; if (t === '@smile') smiley(x, cx, y + 50, 46); else heartP(x, cx, y + 50, 44); y += 120; continue; } if (side === 's') { x.font = '900 40px Inter'; const L = wrapTxt(x, t, 420); const h = L.length * 50 + 34; x.fillStyle = '#C9361F'; x.beginPath(); x.roundRect(40, y, 460, h, 20); x.fill(); x.fillStyle = '#fff'; x.textAlign = 'center'; L.forEach((l, i) => x.fillText(l, 270, y + 52 + i * 50)); y += h + 24; x.font = '700 36px Inter'; continue; } const L = wrapTxt(x, t, 330); const wd = Math.max(...L.map((l) => x.measureText(l).width)) + 44, h = L.length * 46 + 30; const bx = side === 'r' ? 500 - wd : 40; x.fillStyle = side === 'r' ? '#2E7D6A' : '#EDEFF5'; x.beginPath(); x.roundRect(bx, y, wd, h, 26); x.fill(); x.fillStyle = side === 'r' ? '#fff' : '#1A1C24'; x.textAlign = 'left'; L.forEach((l, i) => x.fillText(l, bx + 22, y + 46 + i * 46)); if (o.strike && o.strike.includes(t)) { x.strokeStyle = '#FF5A5A'; x.lineWidth = 6; x.beginPath(); x.moveTo(bx + 10, y + h / 2); x.lineTo(bx + wd - 10, y + h / 2); x.stroke(); } y += h + 20; } };
// msgs: [[lado r/l/s, texto, tiempo(s)]]; o.hora, o.name
const chat = (c, pos, w, msgs, o = {}) => { const g = new THREE.Group(); g.add(box(w * 1.08, w * 1.95, .06, std('#1A1A24', { metalness: .4 }), 0, 0, 0, false)); const cv = document.createElement('canvas'); cv.width = 540; cv.height = 1000; const x = cv.getContext('2d'); const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; const s = new THREE.Mesh(new THREE.PlaneGeometry(w, w * 1.852), new THREE.MeshBasicMaterial({ map: t, toneMapped: false })); s.position.z = .032; g.add(s); g.position.set(...pos); c.add(g); const l = new THREE.PointLight('#9FC0FF', 1.5, 3, 1.6); l.position.set(pos[0], pos[1], pos[2] + .8); c.add(l); let last = '';
  g.userData.upd = (u, oo = {}) => { const vis = msgs.filter((m) => u >= m[2]).map((m) => [m[0], m[1]]); const oa = { ...o, ...oo }; const key = JSON.stringify([vis, oa]); if (key === last) return; last = key; chatDraw(x, vis.slice(-(oa.max || 7)), oa); t.needsUpdate = true; }; g.userData.upd(0); return g; };
// ---- tarjeta de hora ----
const cardT = (n, sub) => canvasTex(1024, 512, (x) => { x.clearRect(0, 0, 1024, 512); x.fillStyle = '#F2C14E'; x.font = '900 230px Fraunces'; x.textAlign = 'center'; x.fillText(n, 512, 270); x.fillStyle = '#FBF7EC'; x.font = '900 70px Inter'; x.fillText(sub, 512, 400); });
const anillo = (k) => canvasTex(512, 512, (x) => { x.clearRect(0, 0, 512, 512); for (let i = 0; i < 24; i++) { const a = -Math.PI / 2 + i / 24 * Math.PI * 2; x.strokeStyle = i < k ? '#E8667F' : '#3A3E4C'; x.lineWidth = 34; x.beginPath(); x.arc(256, 256, 220, a + .03, a + Math.PI * 2 / 24 - .03); x.stroke(); } });
const CARD = (i, h, txt, sub) => Q(i, (d) => ({ amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const r = cut(anillo(h), 2.6, 2.6); r.position.set(0, 1.5, -1); c.add(r); const m = cut(cardT(txt, sub), 2.4, 1.2); m.position.set(0, 1.5, -.95); m.renderOrder = 6; c.add(m); const b = brillos(c, 8, '#FFB0C0'); return { update: (u) => { r.rotation.z = -u * .1; const k2 = smooth(0, .25, u); m.scale.setScalar(.6 + .4 * k2); b(u, [0, 1.5, -.9, 1.4]); } }; },
  c: [[0, 1.5, 2.4], [0, 1.5, -1], [0, 1.5, 2.0], [0, 1.5, -1]], range: 3, blur: 4, look: { bloom: .5 } }));
// ---- ojo con pupila ----
const ojo = (c, pos, w = 1.6) => { const cv = document.createElement('canvas'); cv.width = 512; cv.height = 300; const x = cv.getContext('2d'); const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; const m = new THREE.Mesh(new THREE.PlaneGeometry(w, w * 300 / 512), new THREE.MeshBasicMaterial({ map: t, transparent: true, toneMapped: false })); m.position.set(...pos); m.renderOrder = 5; c.add(m); let last = -1; m.userData.set = (p) => { const q = Math.round(p * 30) / 30; if (q === last) return; last = q; x.clearRect(0, 0, 512, 300); x.fillStyle = '#FBF7EC'; x.beginPath(); x.moveTo(20, 150); x.quadraticCurveTo(256, -60, 492, 150); x.quadraticCurveTo(256, 360, 20, 150); x.fill(); x.fillStyle = '#5A8A5A'; x.beginPath(); x.arc(256, 150, 100, 0, 7); x.fill(); x.fillStyle = '#111'; x.beginPath(); x.arc(256, 150, 30 + q * 62, 0, 7); x.fill(); x.fillStyle = '#fff'; x.beginPath(); x.arc(226, 120, 14, 0, 7); x.fill(); x.strokeStyle = '#2A2A34'; x.lineWidth = 10; x.beginPath(); x.moveTo(20, 150); x.quadraticCurveTo(256, -60, 492, 150); x.quadraticCurveTo(256, 360, 20, 150); x.stroke(); t.needsUpdate = true; }; m.userData.set(0); return m; };
// ---- cerebro ----
const cerebroT = (on) => canvasTex(512, 400, (x) => { x.clearRect(0, 0, 512, 400); x.fillStyle = '#F2A6B4'; for (const [cx, cy, r] of [[170, 170, 110], [300, 150, 120], [380, 210, 90], [230, 250, 100], [130, 250, 70]]) { x.beginPath(); x.arc(cx, cy, r, 0, 7); x.fill(); } x.fillStyle = '#E08A9A'; x.fillRect(250, 300, 50, 80); x.strokeStyle = '#D0788A'; x.lineWidth = 9; for (let i = 0; i < 9; i++) { x.beginPath(); x.arc(150 + (i % 3) * 100, 130 + Math.floor(i / 3) * 70, 34, i, i + 2.4); x.stroke(); } if (on) { const g = x.createRadialGradient(270, 230, 5, 270, 230, 120); g.addColorStop(0, 'rgba(255,240,120,1)'); g.addColorStop(1, 'rgba(255,200,60,0)'); x.fillStyle = g; x.beginPath(); x.arc(270, 230, 120, 0, 7); x.fill(); } });
const cerebro = (c, pos, w = 1.6) => { const a = cut(cerebroT(false), w, w * .78), b = cut(cerebroT(true), w, w * .78); for (const m of [a, b]) { m.position.set(...pos); m.renderOrder = 4; c.add(m); } b.position.z += .01; b.visible = false; return (on) => { b.visible = on; }; };
// ---- barras ----
const barrasT = (items, o = {}) => canvasTex(900, 520, (x) => { x.fillStyle = o.bg || '#FBF7EC'; x.beginPath(); x.roundRect(0, 0, 900, 520, 30); x.fill(); x.fillStyle = '#2A2A34'; x.font = '900 46px Inter'; x.textAlign = 'center'; x.fillText(o.title || '', 450, 64); const n = items.length, bw = 760 / n; items.forEach(([lb, v, col], i) => { const cx = 70 + bw * i + bw / 2, h = v * 300; x.fillStyle = col; x.beginPath(); x.roundRect(cx - bw * .3, 420 - h, bw * .6, h, 12); x.fill(); x.fillStyle = '#2A2A34'; x.font = '800 30px Inter'; lb.split('\n').forEach((l, j) => x.fillText(l, cx, 462 + j * 34)); }); });
const barras = (c, items, w, pos, o) => { const m = cut(barrasT(items, o), w, w * 520 / 900); m.position.set(...pos); m.renderOrder = 5; c.add(m); return m; };
// ---- nota de papel ----
const notaT = (lines, size = 64) => canvasTex(700, 520, (x) => { x.fillStyle = '#FFF6C8'; x.fillRect(0, 0, 700, 520); x.strokeStyle = '#9EC0E8'; x.lineWidth = 3; for (let y = 90; y < 520; y += 70) { x.beginPath(); x.moveTo(0, y); x.lineTo(700, y); x.stroke(); } x.fillStyle = '#2A3A8A'; x.font = `700 ${size}px Caveat`; x.textAlign = 'center'; lines.forEach((l, i) => x.fillText(l, 350, 260 - (lines.length - 1) * size * .55 + i * size * 1.1)); });
const nota = (c, lines, w, pos, size) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, w * 520 / 700), new THREE.MeshStandardMaterial({ map: notaT(lines, size), roughness: .9 })); m.position.set(...pos); m.renderOrder = 4; c.add(m); return m; };
// ---- mariposas ----
const mariposaT = (col) => canvasTex(256, 200, (x) => { x.clearRect(0, 0, 256, 200); x.fillStyle = col; for (const s of [-1, 1]) { x.beginPath(); x.ellipse(128 + s * 55, 70, 55, 50, s * .4, 0, 7); x.fill(); x.beginPath(); x.ellipse(128 + s * 40, 140, 35, 38, -s * .3, 0, 7); x.fill(); } x.fillStyle = '#2A2A34'; x.fillRect(122, 40, 12, 130); });
const mariposas = (c, n = 10) => { const M = []; const cols = ['#F29AB0', '#F2C14E', '#8AC8F2', '#B89AF2']; for (let i = 0; i < n; i++) { const m = cut(mariposaT(cols[i % 4]), .26, .2); m.renderOrder = 5; c.add(m); M.push(m); } return (u, ctr, cam, on = 1) => M.forEach((m, i) => { const a = u * (.8 + i * .07) + i * 1.9; m.visible = on > 0; m.position.set(ctr[0] + Math.cos(a) * (.4 + (i % 3) * .2), ctr[1] + Math.sin(a * 1.3) * .35 + (i % 4) * .1, ctr[2] + Math.sin(a) * .3); pointer(m, cam); m.scale.set(Math.max(.15, Math.abs(Math.sin(u * 14 + i))) * on, on, 1); }); };
// ---- comida ----
const burger = () => { const g = new THREE.Group(); const L = [['#D8A050', .05, .16], ['#5A3420', .05, .17], ['#F2C14E', .02, .17], ['#6EAA50', .02, .18], ['#D8A050', .07, .16]]; let y = 0; for (const [col, h, r] of L) { const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 20), std(col)); m.position.y = y + h / 2; g.add(m); y += h; } return g; };
const patatas = () => { const g = new THREE.Group(); g.add(box(.16, .18, .1, std('#C9361F'), 0, .09, 0)); for (let i = 0; i < 9; i++) { const f = box(.025, .16, .025, std('#F2C14E'), -.06 + (i % 5) * .03, .2 + (i % 3) * .02, -.02 + (i % 2) * .03); f.rotation.z = (i - 4) * .06; g.add(f); } return g; };
const perritoT = () => canvasTex(512, 256, (x) => { x.clearRect(0, 0, 512, 256); x.fillStyle = '#E0A860'; x.beginPath(); x.roundRect(40, 110, 430, 100, 50); x.fill(); x.fillStyle = '#B8502A'; x.beginPath(); x.roundRect(20, 80, 470, 60, 30); x.fill(); x.strokeStyle = '#F2C14E'; x.lineWidth = 10; x.beginPath(); for (let i = 0; i < 9; i++) x.lineTo(60 + i * 48, 105 + (i % 2) * 12); x.stroke(); });
// ---- montaña rusa ----
const montana = (c) => { const pts = [[-9, 1, -6], [-5, 6, -7], [-2, 1.5, -5], [1, 4, -4], [4, .8, -3], [7, 3.5, -5], [9, 1, -8], [3, 2, -10], [-4, 3, -10], [-9, 1, -6]].map((p) => new THREE.Vector3(...p)); const cur = new THREE.CatmullRomCurve3(pts, true); c.add(new THREE.Mesh(new THREE.TubeGeometry(cur, 300, .12, 8, true), std('#C9361F', { metalness: .4, roughness: .4 }))); for (let i = 0; i < 40; i++) { const p = cur.getPointAt(i / 40); if (p.y > .6) c.add(box(.1, p.y, .1, std('#E8E2D2'), p.x, p.y / 2, p.z)); } const cart = new THREE.Group(); cart.add(box(1.2, .45, .8, std('#2F5A9A', { metalness: .3 }), 0, -.05, 0)); c.add(cart); return { cur, cart }; };
// ---- baño ----
const azulejos = (c, z = -2.5, col = '#BFD8DA') => { const t = canvasTex(512, 512, (x) => { x.fillStyle = col; x.fillRect(0, 0, 512, 512); x.strokeStyle = '#E8F2F2'; x.lineWidth = 6; for (let i = 0; i <= 8; i++) { x.beginPath(); x.moveTo(i * 64, 0); x.lineTo(i * 64, 512); x.stroke(); x.beginPath(); x.moveTo(0, i * 64); x.lineTo(512, i * 64); x.stroke(); } }); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(4, 2); const m = new THREE.Mesh(new THREE.PlaneGeometry(12, 5), new THREE.MeshStandardMaterial({ map: t, roughness: .3 })); m.position.set(0, 2.5, z); c.add(m); return m; };
// ---- espejo ----
const espejo = (c, x0, z0) => { c.add(box(1.2, 1.7, .06, std('#8E6242'), x0, 1.6, z0)); const g = new THREE.Mesh(new THREE.PlaneGeometry(1.05, 1.55), new THREE.MeshBasicMaterial({ color: '#A8C4D8' })); g.position.set(x0, 1.6, z0 + .035); c.add(g); };
const QUEDAN = (c, pos, txt, w = 1.3) => lab(c, [txt], w, pos, { bg: '#1E2230', fg: '#FF7A8A' });

// ---- decorados del instituto ----
const INSTI = (c) => { const s = cartel(['INSTITUTO'], 2.6, { bg: '#2F5A9A', fg: '#fff' }); s.position.set(0, 3.2, -4.2); c.add(s); };
const pizarra = (c, lines) => { const m = screen(c, lines, 4.2, 1.6, { bg: '#2F5A48', fg: '#F4F0E4', size: 64, font: 'Caveat', w: 1024, h: 390 }); m.position.set(0, 2.3, -3.38); return m; };
const pupitres = (c, xs, z = -.1) => { for (const x of xs) { c.add(box(1.0, .06, .6, std('#C8A27A'), x, .75, z)); for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) c.add(box(.05, .75, .05, std('#6A6E78'), x + a * .44, .37, z + b * .25)); } };
const bocadillo = () => { const g = new THREE.Group(); g.add(box(.32, .1, .12, std('#E0A860'), 0, 0, 0)); g.add(box(.3, .03, .13, std('#C9361F'), 0, .055, 0)); g.add(box(.32, .07, .12, std('#E0A860'), 0, .1, 0)); return g; };
const AULA = (o = {}) => ({ amb: 'aula', fov: 32, ...o });
const QA = (c) => pizarra(c, ['x² + 3x = 10', 'x = ?']);
const ecgT = () => canvasTex(900, 420, (x) => { x.fillStyle = '#0E1C24'; x.beginPath(); x.roundRect(0, 0, 900, 420, 26); x.fill(); const wave = (y0, col) => { x.strokeStyle = col; x.lineWidth = 7; x.beginPath(); for (let i = 0; i <= 880; i += 4) { const f = (i % 220) / 220; let y = y0; if (f > .4 && f < .45) y -= (f - .4) * 1400; else if (f >= .45 && f < .5) y -= (.5 - f) * 1400 - 30; else if (f >= .5 && f < .55) y += 0; y += Math.sin(i * .03) * 4; x.lineTo(10 + i, y); } x.stroke(); }; wave(140, '#5FD08A'); wave(310, '#E8667F'); x.fillStyle = '#5FD08A'; x.font = '800 30px Inter'; x.textAlign = 'left'; x.fillText('TÚ', 24, 60); x.fillStyle = '#E8667F'; x.fillText('ELLA', 24, 232); });
const bajoNoche = { exposure: .9, bloom: .4, vig: .6 };
const cogerMano = (dir) => (k, u) => k.pose({ armL: dir > 0 ? [12, 8] : [40, 0], armR: dir > 0 ? [40, 0] : [12, 8] });
const cocheTren = (mt, A, sp = .09, off = 0) => (u) => { const f = (u * sp + off) % 1; const p = mt.cur.getPointAt(f), q = mt.cur.getPointAt((f + .01) % 1); mt.cart.position.copy(p); mt.cart.lookAt(q); return p; };
const enCarro = (i) => (k, u) => k.pose({ armL: [150 + Math.sin(u * 9 + i) * 15, 30], armR: [150 + Math.cos(u * 9 + i) * 15, 30] });
const BURGER = (c) => { AMBS.pasteleria(c); const s = cut(labelT(['HAMBURGUESERÍA'], { bg: '#C9361F', fg: '#FFE7B8', size: 80, w: 900, h: 160 }), 3.2, .57); s.position.set(0, 3.9, -2.98); c.add(s); mesa(c, 0, .35, .8, 1.6, .8, '#E8E2D2'); const b1 = burger(), b2 = burger(); b1.position.set(-.45, .84, .35); b2.position.set(.45, .84, .35); const p1 = patatas(); p1.position.set(-.1, .84, .45); c.add(b1, b2, p1); return p1; };
const portal = (c) => { c.add(box(1.3, 2.4, .2, std('#5A3A28'), 0, 1.2, -1.6)); c.add(box(1.1, 2.2, .05, std('#2F4A3A'), 0, 1.15, -1.48)); const l = new THREE.PointLight('#FFD8A0', 3, 4, 1.6); l.position.set(0, 2.6, -1.0); c.add(l); const n = cut(labelT(['Nº 7'], { bg: '#F4F0E4', fg: '#2A2A34', size: 80, w: 300, h: 150 }), .4, .2); n.position.set(0, 2.55, -1.45); c.add(n); };
const abrazo = (dir) => (k, u) => k.pose({ armL: [35, 45], armR: [35, 45], lean: dir * -5 });
const NOCHEB = { amb: 'barrio', ambo: { night: true } };
// ===================== AYUDAS: LEER LA MENTE DE TU CRUSH =====================
const LIL = { bg: '#6A3AB8', fg: '#FFFFFF' };
const MENTE = { bloom: .45, bloomT: .85, vig: .55 };
// globo de pensamiento lila
const piensa = (c, lines, w, pos, o = {}) => { const L = Array.isArray(lines) ? lines : [lines]; const size = o.size || 60; const W = Math.round(Math.max(640, Math.max(...L.map((l) => l.length)) * size * .6 + 220)); const Hh = Math.round(size * 1.2 * L.length + 230); const t = bubbleTex(L, { w: W, h: Hh, size, bg: o.bg || '#EFE6FF', fg: o.fg || '#4A2A8A', tail: o.tail || 'left' }); const m = cut(t, w, w * Hh / W); m.position.set(...pos); m.renderOrder = 6; c.add(m); return m; };
// secuencia de pensamientos [[lines, t, pos, w]] que aparecen y se van
const PSEQ = (c, a, items, o = {}) => { const M = items.map(([l, , p, w = 1.6, oo = {}]) => piensa(c, l, w, p, { ...o, ...oo })); const T = items.map(([, t]) => (typeof t === 'number' ? t : R0(a, t))); return (u, cam) => M.forEach((m, i) => pop(m, u, T[i], o.keep ? 1e9 : (i + 1 < T.length ? T[i + 1] - .1 : 1e9), cam)); };
// ondas moradas alrededor de una cabeza (oír la mente)
const ringT = () => canvasTex(256, 256, (x) => { x.clearRect(0, 0, 256, 256); x.strokeStyle = '#C8A8FF'; x.lineWidth = 12; x.beginPath(); x.arc(128, 128, 108, 0, 7); x.stroke(); });
const ondas = (c, n = 3, col) => { const R = [...Array(n)].map(() => { const m = cut(ringT(), .6, .6); m.renderOrder = 5; m.castShadow = false; c.add(m); return m; }); const v = new THREE.Vector3(); return (u, k, cam, on = 1) => { k.head.getWorldPosition(v); R.forEach((m, i) => { const f = (u * .6 + i / n) % 1; m.visible = on > .01; m.position.copy(v); m.scale.setScalar(.7 + f * 1.4); m.material.opacity = on * (1 - f) * .85; pointer(m, cam); }); }; };
// cascos en la cabeza
const cascos = (k) => { const g = new THREE.Group(); const arc = new THREE.Mesh(new THREE.TorusGeometry(.34, .035, 8, 24, Math.PI), std('#E8667F')); g.add(arc); for (const s of [-1, 1]) { const e = new THREE.Mesh(new THREE.CylinderGeometry(.09, .09, .07, 16), std('#E8667F')); e.rotation.z = Math.PI / 2; e.position.set(s * .34, 0, 0); g.add(e); } k.head.add(g); return g; };
// mechón de pelo levantado
const mechon = (k) => { const m = new THREE.Mesh(new THREE.ConeGeometry(.05, .26, 8), std('#111')); m.position.set(.06, .36, 0); m.rotation.z = -.35; k.head.add(m); return m; };
// autobús por dentro
const cityT = () => { const t = canvasTex(1024, 256, (x) => { x.fillStyle = '#BFE0F2'; x.fillRect(0, 0, 1024, 256); const R = rng(5); for (let i = 0; i < 24; i++) { x.fillStyle = ['#D88A6A', '#E8C27A', '#8AA8C8', '#C8B8A0'][i % 4]; const w = 40 + R() * 60, h = 60 + R() * 150; x.fillRect(i * 44, 256 - h, w, h); } x.fillStyle = '#6EAA50'; for (let i = 0; i < 12; i++) { x.beginPath(); x.arc(i * 90 + 30, 236, 32, 0, 7); x.fill(); } }); t.wrapS = THREE.RepeatWrapping; return t; };
const BUS = (c) => { c.add(box(12, 3.4, .1, std('#E8E2D2'), 0, 1.7, -1.8)); const t = cityT(); const w = new THREE.Mesh(new THREE.PlaneGeometry(9, 1.1), new THREE.MeshBasicMaterial({ map: t, toneMapped: false })); w.position.set(0, 1.9, -1.74); c.add(w); for (const x of [-4.5, -1.5, 1.5, 4.5]) c.add(box(.12, 1.2, .05, std('#C8C2B2'), x, 1.9, -1.72)); for (const x of [-3.2, -1.8, -.4, 1.0, 2.4, 3.8]) { c.add(box(.9, .45, .55, std('#2F5A9A'), x, .45, -1.3)); c.add(box(.9, .75, .12, std('#2F5A9A'), x, .95, -1.55)); } for (const x of [-2.2, .4, 3.0]) { const p = new THREE.Mesh(new THREE.CylinderGeometry(.03, .03, 3.4, 8), std('#F2C14E', { metalness: .5, roughness: .3 })); p.position.set(x, 1.7, -.4); c.add(p); } const s = cut(labelT(['AUTOBÚS 7 · INSTITUTO'], { bg: '#F2C14E', fg: '#2A2A34', size: 70, w: 900, h: 140 }), 2.4, .37); s.position.set(0, 2.85, -1.7); c.add(s); return (u) => { t.offset.x = u * .09; }; };
// escáner del cerebro
const RMN = (c, x0 = -1.2) => { const r = new THREE.Mesh(new THREE.TorusGeometry(.95, .5, 20, 48), std('#F4F2EE', { roughness: .35 })); r.rotation.y = Math.PI / 2; r.position.set(x0, 1.15, -.4); c.add(r); c.add(box(.9, .7, 2.4, std('#E8E6E0'), x0, .35, -.4)); c.add(box(2.6, .14, .7, std('#DDE6EE'), x0 + 1.2, .78, -.4)); c.add(box(.4, .7, .4, std('#B8C0C8'), x0 + 2.2, .35, -.4)); const g = glowSprite('#7FD0FF', .9, 0); g.position.set(x0, 1.15, -.4); c.add(g); return g; };
// foco de escenario sobre alguien
const foco = (c, x, z) => { const l = new THREE.SpotLight('#FFF2C0', 40, 9, .32, .45, 1.2); l.position.set(x, 5, z + 1.2); l.target.position.set(x, 0, z); c.add(l, l.target); const g = new THREE.Mesh(new THREE.CircleGeometry(.75, 32), new THREE.MeshBasicMaterial({ color: '#FFF2C0', transparent: true, opacity: .35, depthWrite: false })); g.rotation.x = -Math.PI / 2; g.position.set(x, .02, z); c.add(g); return [l, g]; };
// dibujos dentro del pensamiento
const dibT = (kind) => canvasTex(512, 360, (x) => { x.clearRect(0, 0, 512, 360); x.fillStyle = '#EFE6FF'; x.strokeStyle = '#2A2A34'; x.lineWidth = 8; x.beginPath(); x.ellipse(256, 160, 236, 150, 0, 0, 7); x.fill(); x.stroke(); for (const [cx, cy, r] of [[150, 320, 18], [118, 348, 10]]) { x.beginPath(); x.arc(cx, cy, r, 0, 7); x.fill(); x.stroke(); }
  x.save(); x.beginPath(); x.ellipse(256, 160, 228, 142, 0, 0, 7); x.clip(); x.filter = 'blur(3px)';
  if (kind === 'playa') { x.fillStyle = '#8AC8F2'; x.fillRect(0, 0, 512, 180); x.fillStyle = '#2F7AB8'; x.fillRect(0, 180, 512, 60); x.fillStyle = '#F2D79A'; x.fillRect(0, 240, 512, 120); x.fillStyle = '#F2C14E'; x.beginPath(); x.arc(380, 90, 44, 0, 7); x.fill(); }
  if (kind === 'pan') { x.fillStyle = '#F6E7C8'; x.fillRect(0, 0, 512, 360); x.fillStyle = '#D8A050'; x.beginPath(); x.ellipse(256, 180, 150, 70, -.15, 0, 7); x.fill(); x.strokeStyle = '#B87830'; x.lineWidth = 10; for (let i = -2; i <= 2; i++) { x.beginPath(); x.moveTo(256 + i * 50 - 20, 150); x.lineTo(256 + i * 50 + 20, 200); x.stroke(); } x.strokeStyle = '#C8C0B0'; x.lineWidth = 6; for (let i = 0; i < 3; i++) { x.beginPath(); x.moveTo(200 + i * 50, 100); x.quadraticCurveTo(220 + i * 50, 70, 200 + i * 50, 40); x.stroke(); } }
  if (kind === 'musica') { x.fillStyle = '#2A2050'; x.fillRect(0, 0, 512, 360); x.fillStyle = '#F2C14E'; x.font = '900 150px Inter'; x.textAlign = 'center'; x.fillText('♪ ♫ ♪', 256, 220); }
  if (kind === 'nada') { x.fillStyle = '#D8D4E0'; x.fillRect(0, 0, 512, 360); }
  if (kind === 'pizza') { x.fillStyle = '#FFF0D8'; x.fillRect(0, 0, 512, 360); x.fillStyle = '#E8A040'; x.beginPath(); x.moveTo(256, 300); x.lineTo(130, 60); x.quadraticCurveTo(256, 20, 382, 60); x.fill(); x.fillStyle = '#C9361F'; for (const [px, py] of [[230, 110], [290, 130], [256, 190], [215, 70], [310, 75]]) { x.beginPath(); x.arc(px, py, 18, 0, 7); x.fill(); } }
  if (kind === 'tele') { x.fillStyle = '#FFF0D8'; x.fillRect(0, 0, 512, 360); x.fillStyle = '#2A2A34'; x.beginPath(); x.roundRect(130, 70, 252, 170, 16); x.fill(); x.fillStyle = '#8AC8F2'; x.fillRect(146, 86, 220, 138); x.fillStyle = '#F2C14E'; x.beginPath(); x.moveTo(230, 120); x.lineTo(290, 155); x.lineTo(230, 190); x.fill(); x.fillStyle = '#2A2A34'; x.fillRect(240, 240, 32, 30); }
  if (kind === 'gato') { x.fillStyle = '#BFE0F2'; x.fillRect(0, 0, 512, 360); x.fillStyle = '#2A2A34'; x.beginPath(); x.arc(256, 190, 70, 0, 7); x.fill(); x.beginPath(); x.moveTo(200, 150); x.lineTo(205, 80); x.lineTo(245, 125); x.fill(); x.beginPath(); x.moveTo(312, 150); x.lineTo(307, 80); x.lineTo(267, 125); x.fill(); x.fillStyle = '#F2C14E'; x.beginPath(); x.arc(230, 180, 12, 0, 7); x.arc(282, 180, 12, 0, 7); x.fill(); x.fillStyle = '#2F7AB8'; for (let i = 0; i < 6; i++) { x.beginPath(); x.arc(150 + i * 45, 290, 14, 0, 7); x.fill(); } }
  if (kind === 'calcetin') { x.fillStyle = '#FFF0D8'; x.fillRect(0, 0, 512, 360); x.fillStyle = '#C9361F'; x.beginPath(); x.roundRect(220, 60, 70, 170, 16); x.fill(); x.beginPath(); x.roundRect(220, 180, 150, 70, 30); x.fill(); x.fillStyle = '#FBF7EC'; x.fillRect(220, 60, 70, 26); }
  if (kind === 'galleta') { x.fillStyle = '#FFF0D8'; x.fillRect(0, 0, 512, 360); x.fillStyle = '#C88A4A'; x.beginPath(); x.arc(256, 180, 100, 0, 7); x.fill(); x.fillStyle = '#4A2A1A'; for (const [px, py] of [[220, 150], [290, 160], [250, 220], [300, 220], [210, 200]]) { x.beginPath(); x.arc(px, py, 12, 0, 7); x.fill(); } }
  if (kind === 'libro') { x.fillStyle = '#FFF0D8'; x.fillRect(0, 0, 512, 360); x.fillStyle = '#2F5A9A'; x.beginPath(); x.roundRect(180, 70, 150, 200, 10); x.fill(); x.fillStyle = '#F2C14E'; x.fillRect(205, 110, 100, 18); }
  if (kind === 'casa') { x.fillStyle = '#3A3E5C'; x.fillRect(0, 0, 512, 360); x.fillStyle = '#C8B8A0'; x.fillRect(176, 150, 160, 130); x.fillStyle = '#8A4A3A'; x.beginPath(); x.moveTo(156, 155); x.lineTo(256, 70); x.lineTo(356, 155); x.fill(); x.fillStyle = '#5A6A8A'; for (let i = 0; i < 14; i++) { x.fillRect(40 + i * 32, 20 + (i * 53) % 120, 4, 30); } }
  if (kind === 'yo') { x.fillStyle = '#FFE8F0'; x.fillRect(0, 0, 512, 360); x.fillStyle = '#111'; x.beginPath(); x.arc(256, 150, 70, 0, 7); x.fill(); x.fillStyle = '#43C4B4'; x.beginPath(); x.roundRect(196, 210, 120, 110, 30); x.fill(); x.fillStyle = '#fff'; x.beginPath(); x.arc(232, 140, 10, 0, 7); x.arc(280, 140, 10, 0, 7); x.fill(); x.fillStyle = '#E8445A'; x.font = '900 70px Inter'; x.fillText('♥', 340, 110); }
  x.restore(); });
const dib = (c, kind, w, pos) => { const m = cut(dibT(kind), w, w * 360 / 512); m.position.set(...pos); m.renderOrder = 6; c.add(m); return m; };
const DSEQ = (c, a, items, pos, w = 1.5) => { const M = items.map(([k]) => dib(c, k, w, pos)); const T = items.map(([, t]) => (typeof t === 'number' ? t : R0(a, t))); return (u, cam) => M.forEach((m, i) => { m.visible = u >= T[i] && (i + 1 >= T.length || u < T[i + 1]); if (m.visible) pointer(m, cam); }); };
// hora: tarjeta grande con reloj
const HORA = (i, h, txt, sub) => CARD(i, h, txt, sub);
// ===================== AYUDAS: CRUSH Y GTA 6 =====================
const ORO = { bg: '#F2C14E', fg: '#2A2A34' };
const NEON = { bg: '#E8447A', fg: '#FFFFFF' };
const TARDE = { exposure: 1.02, bloom: .35 };
// pantalla de juego genérica (no es el juego real)
const gameDraw = (x, kind, u = 0) => { const W = 1024, Hh = 576;
  if (kind === 'inicio' || kind === 'coche') { const g = x.createLinearGradient(0, 0, 0, Hh); g.addColorStop(0, kind === 'coche' ? '#1A1240' : '#3A1E6A'); g.addColorStop(.55, kind === 'coche' ? '#6A2A6A' : '#E8447A'); g.addColorStop(1, '#FFB06A'); x.fillStyle = g; x.fillRect(0, 0, W, Hh); x.fillStyle = '#FFD27A'; x.beginPath(); x.arc(512, 330, 120, 0, 7); x.fill(); x.fillStyle = 'rgba(58,30,106,.55)'; for (let i = 0; i < 6; i++) x.fillRect(392, 300 + i * 22, 240, 8);
    x.fillStyle = '#2A1440'; for (let i = 0; i < 16; i++) { const h = 60 + ((i * 53) % 140); x.fillRect(i * 66, 400 - h, 56, h); }
    x.fillStyle = '#1A0E2A'; x.fillRect(0, 400, W, 176); x.strokeStyle = '#FFD27A'; x.lineWidth = 8; x.setLineDash([40, 30]); x.lineDashOffset = -u * 400; x.beginPath(); x.moveTo(0, 490); x.lineTo(W, 490); x.stroke(); x.setLineDash([]);
    const palm = (px, s) => { x.strokeStyle = '#140A20'; x.lineWidth = 14 * s; x.beginPath(); x.moveTo(px, 400); x.quadraticCurveTo(px + 20 * s, 300, px + 10 * s, 210); x.stroke(); x.fillStyle = '#140A20'; for (let k = 0; k < 6; k++) { const a = k / 6 * Math.PI * 2; x.beginPath(); x.ellipse(px + 10 * s + Math.cos(a) * 50 * s, 210 + Math.sin(a) * 18 * s, 60 * s, 12 * s, a, 0, 7); x.fill(); } }; palm(120, 1.1); palm(900, 1.2); palm(780, .8);
    if (kind === 'coche') { const cx = 380 + Math.sin(u * 3) * 40; x.fillStyle = '#E8447A'; x.beginPath(); x.roundRect(cx, 440, 220, 60, 14); x.fill(); x.fillStyle = '#FF8AB0'; x.beginPath(); x.roundRect(cx + 50, 410, 110, 40, 10); x.fill(); x.fillStyle = '#111'; x.beginPath(); x.arc(cx + 45, 505, 22, 0, 7); x.arc(cx + 175, 505, 22, 0, 7); x.fill(); const on = Math.sin(u * 14) > 0; x.fillStyle = '#222'; x.beginPath(); x.roundRect(cx - 260, 445, 180, 55, 12); x.fill(); x.fillStyle = on ? '#3A7AFF' : '#FF3A3A'; x.fillRect(cx - 200, 430, 30, 16); x.fillStyle = on ? '#FF3A3A' : '#3A7AFF'; x.fillRect(cx - 160, 430, 30, 16); x.fillStyle = '#111'; x.beginPath(); x.arc(cx - 220, 505, 20, 0, 7); x.arc(cx - 110, 505, 20, 0, 7); x.fill(); x.strokeStyle = 'rgba(255,255,255,.5)'; x.lineWidth = 4; for (let i = 0; i < 8; i++) { const yy = 420 + i * 12; x.beginPath(); x.moveTo(cx + 240 + i * 10, yy); x.lineTo(cx + 320 + i * 10, yy); x.stroke(); } }
    if (kind === 'inicio') { x.fillStyle = '#FFFFFF'; x.font = '900 46px Inter'; x.textAlign = 'center'; if (Math.sin(u * 5) > -.3) x.fillText('PULSA START', 512, 560); }
    return; }
  if (kind === 'cargando') { x.fillStyle = '#10101A'; x.fillRect(0, 0, W, Hh); x.fillStyle = '#fff'; x.font = '900 60px Inter'; x.textAlign = 'center'; x.fillText('CARGANDO…', 512, 260); x.fillStyle = '#333'; x.fillRect(212, 320, 600, 30); x.fillStyle = '#E8447A'; x.fillRect(212, 320, 600 * Math.min(1, (u * .25) % 1.2), 30); return; }
  if (kind === 'apagada') { x.fillStyle = '#08080C'; x.fillRect(0, 0, W, Hh); return; }
  if (kind === 'pausa') { gameDraw(x, 'inicio', 0); x.fillStyle = 'rgba(10,10,20,.6)'; x.fillRect(0, 0, W, Hh); x.fillStyle = '#fff'; x.font = '900 70px Inter'; x.textAlign = 'center'; x.fillText('PARTIDA GUARDADA', 512, 300); return; }
};
// tele con pantalla animada; devuelve el grupo con .upd(u, kind)
const tele = (c, pos, w = 2.0, kind0 = 'inicio') => { const g = new THREE.Group(); const hh = w * 576 / 1024; g.add(box(w + .12, hh + .12, .08, std('#141418', { metalness: .3 }), 0, 0, -.05, false)); const cv = document.createElement('canvas'); cv.width = 1024; cv.height = 576; const x = cv.getContext('2d'); const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; const s = new THREE.Mesh(new THREE.PlaneGeometry(w, hh), new THREE.MeshBasicMaterial({ map: t, toneMapped: false })); g.add(s); const l = new THREE.PointLight('#FF8AB0', 2.5, 5, 1.6); l.position.set(0, 0, .8); g.add(l); g.position.set(...pos); c.add(g); let last = '';
  g.userData.upd = (u, kind = kind0) => { const q = kind + Math.round(u * 12); if (q === last) return; last = q; gameDraw(x, kind, u); t.needsUpdate = true; l.intensity = kind === 'apagada' ? 0 : 2.5; }; g.userData.upd(0); return g; };
// mueble con consola
const consola = () => { const g = new THREE.Group(); g.add(box(.5, .12, .38, std('#F4F2EE', { roughness: .4 }), 0, .06, 0)); g.add(box(.5, .02, .02, std('#7FD0FF'), 0, .08, .2, false)); return g; };
const mueble = (c, x, z, w = 2.4) => { c.add(box(w, .5, .5, std('#3A2A20'), x, .25, z)); const k = consola(); k.position.set(x + w * .3, .5, z); c.add(k); };
// mando en la mano
const mandoM = () => { const g = new THREE.Group(); g.add(box(.26, .1, .12, std('#22222A', { roughness: .5 }), 0, 0, 0, false)); for (const s of [-1, 1]) { const m = box(.08, .14, .1, std('#22222A'), s * .12, -.05, 0, false); m.rotation.z = s * .3; g.add(m); } g.add(box(.03, .03, .02, std('#E8447A'), .07, .03, .06, false)); g.add(box(.03, .03, .02, std('#5FD08A'), .1, .0, .06, false)); return g; };
const mandoEn = (m, k) => { const p = hand(k); m.position.set(p.x, p.y + .02, p.z + .12); };
// jugar con mando: brazos al frente
const juega = (k, u, amp = 1) => k.pose({ armL: [55, 60], armR: [55, 60], lean: Math.sin(u * 3) * 4 * amp, bob: Math.abs(Math.sin(u * 6)) * .01 * amp });
// bolsa de patatas
const bolsaP = () => { const g = new THREE.Group(); g.add(box(.3, .4, .1, std('#F2C14E', { roughness: .4 }), 0, .2, 0)); const m = cut(labelT(['PATATAS'], { bg: '#C9361F', fg: '#fff', size: 70, w: 420, h: 130 }), .26, .08); m.position.set(0, .24, .055); g.add(m); return g; };
// contador que cambia (texto dinámico)
const contador = (c, pos, w, fmt, o = {}) => { const W0 = o.w || 900, H0 = o.h || 220; const cv = document.createElement('canvas'); cv.width = W0; cv.height = H0; const x = cv.getContext('2d'); const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; const m = new THREE.Mesh(new THREE.PlaneGeometry(w, w * H0 / W0), new THREE.MeshBasicMaterial({ map: t, transparent: true, toneMapped: false })); m.position.set(...pos); m.renderOrder = 6; c.add(m); let last = '';
  m.userData.upd = (u) => { const s = fmt(u); if (s === last) return; last = s; x.clearRect(0, 0, W0, H0); x.fillStyle = o.bg || '#1E2230'; x.beginPath(); x.roundRect(0, 0, W0, H0, 30); x.fill(); x.fillStyle = o.fg || '#F2C14E'; x.font = `900 ${o.size || 110}px Inter`; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(s, W0 / 2, H0 / 2 + 6); t.needsUpdate = true; }; m.userData.upd(0); return m; };
const miles = (n) => Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
// reproductor de vídeo (tráiler)
const playerT = () => canvasTex(1024, 640, (x) => { x.fillStyle = '#141418'; x.beginPath(); x.roundRect(0, 0, 1024, 640, 30); x.fill(); gameDraw(x, 'inicio', 0); x.fillStyle = 'rgba(0,0,0,.35)'; x.fillRect(0, 0, 1024, 576); x.fillStyle = '#E8333A'; x.beginPath(); x.roundRect(422, 230, 180, 124, 34); x.fill(); x.fillStyle = '#fff'; x.beginPath(); x.moveTo(490, 262); x.lineTo(550, 292); x.lineTo(490, 322); x.fill(); x.fillStyle = '#141418'; x.fillRect(0, 576, 1024, 64); x.fillStyle = '#fff'; x.font = '800 38px Inter'; x.textAlign = 'left'; x.fillText('TRÁILER 1 · DICIEMBRE 2023', 30, 622); });
const player = (c, pos, w = 2.2) => { const m = cut(playerT(), w, w * 640 / 1024); m.position.set(...pos); m.renderOrder = 4; c.add(m); return m; };
// calendario con tachones
const calT = (txt, tach) => canvasTex(512, 420, (x) => { x.fillStyle = '#FBF7EC'; x.beginPath(); x.roundRect(0, 0, 512, 420, 26); x.fill(); x.fillStyle = '#C9361F'; x.beginPath(); x.roundRect(0, 0, 512, 110, [26, 26, 0, 0]); x.fill(); x.fillStyle = '#fff'; x.font = '900 52px Inter'; x.textAlign = 'center'; x.fillText('SALE EN…', 256, 76); x.fillStyle = '#2A2A34'; x.font = '900 80px Fraunces'; txt.split('\n').forEach((l, i, A) => x.fillText(l, 256, 250 - (A.length - 1) * 45 + i * 90)); if (tach) { x.strokeStyle = '#C9361F'; x.lineWidth = 22; x.beginPath(); x.moveTo(60, 150); x.lineTo(452, 380); x.moveTo(452, 150); x.lineTo(60, 380); x.stroke(); } });
const cal = (c, txt, tach, w, pos) => { const m = cut(calT(txt, tach), w, w * 420 / 512); m.position.set(...pos); m.renderOrder = 5; c.add(m); return m; };
// cojín y cuerdas (experimento de Aron)
const cojin = () => { const m = new THREE.Mesh(new THREE.SphereGeometry(.28, 20, 14), std('#E8667F', { roughness: .9 })); m.scale.set(1.3, .55, 1); m.castShadow = true; return m; };
const valla = (c, x, z) => { c.add(box(.06, .4, .06, std('#F2C14E'), x, .2, z - .5)); c.add(box(.06, .4, .06, std('#F2C14E'), x, .2, z + .5)); c.add(box(.06, .06, 1.0, std('#C9361F'), x, .38, z)); };
const colchoneta = (c, x, z, w = 2, col = '#2F5A9A') => c.add(box(w, .08, 1.4, std(col, { roughness: .9 }), x, .04, z));
// etiqueta en la camiseta (del revés)
const etiqueta = (k) => { const m = box(.08, .1, .01, std('#FFFFFF'), 0, .14, .2, false); k.torso.add(m); return m; };
// puerta de la habitación / casa
const puertaCasa = (c, x, z) => { c.add(box(1.1, 2.2, .1, std('#8E6242'), x, 1.1, z)); c.add(box(.08, .08, .08, std('#F2C14E', { metalness: .6 }), x + .4, 1.05, z + .08)); };
// cabeza que da vueltas (mareo/pánico)
const panicoP = (k, u) => k.pose({ armL: [150 + Math.sin(u * 14) * 15, 40], armR: [150 + Math.cos(u * 14) * 15, 40], bob: Math.abs(Math.sin(u * 14)) * .04 });
const corre = (k, u) => k.walk(u * 3.2);
// ===================== CUMPLE: piezas =====================
const SALON = { amb: 'sala', ambo: { wall: '#B8607A' } };
const SALONN = { amb: 'sala', ambo: { wall: '#B8607A', night: true } };
const BCOL = ['#E8667F', '#F2C14E', '#43C4B4', '#9A6AE8', '#FF8A3A', '#4A86C7', '#7BC86A'];
const ROSA = { bg: '#E8667F', fg: '#fff' };
const VERDE = { bg: '#2F8A5A', fg: '#fff' };
// cara pintada de globo
const caraG = (o = {}) => canvasTex(256, 256, (x) => { x.clearRect(0, 0, 256, 256); x.strokeStyle = '#1A1A24'; x.fillStyle = '#1A1A24'; x.lineWidth = 11; x.lineCap = 'round';
  if (o.gafas) { x.lineWidth = 8; x.beginPath(); x.arc(88, 108, 32, 0, 7); x.stroke(); x.beginPath(); x.arc(168, 108, 32, 0, 7); x.stroke(); x.beginPath(); x.moveTo(120, 108); x.lineTo(136, 108); x.stroke(); x.lineWidth = 11; }
  x.beginPath(); x.arc(88, 108, 11, 0, 7); x.fill(); x.beginPath(); x.arc(168, 108, 11, 0, 7); x.fill();
  if (o.enfado) { x.beginPath(); x.moveTo(52, 58); x.lineTo(118, 80); x.stroke(); x.beginPath(); x.moveTo(204, 58); x.lineTo(138, 80); x.stroke(); x.beginPath(); x.arc(128, 215, 40, Math.PI * 1.2, Math.PI * 1.8); x.stroke(); }
  else { x.beginPath(); x.arc(128, 150, 50, .15 * Math.PI, .85 * Math.PI); x.stroke(); }
  if (o.pelo) { x.lineWidth = 8; for (let i = 0; i < 5; i++) { x.beginPath(); x.moveTo(90 + i * 19, 40); x.quadraticCurveTo(80 + i * 19, 15, 100 + i * 19, 4); x.stroke(); } }
  if (o.pest) { x.lineWidth = 6; for (const cx of [88, 168]) for (const d of [-14, 0, 14]) { x.beginPath(); x.moveTo(cx + d, 92); x.lineTo(cx + d * 1.4, 76); x.stroke(); } } });
const caraCache = {};
// globo con (o sin) cara. o: {cara, gafas, enfado, pelo, pest, gorro, hilo}
const globoC = (c, col, o = {}) => { const g = new THREE.Group(); const b = new THREE.Mesh(new THREE.SphereGeometry(.3, 24, 18), new THREE.MeshStandardMaterial({ color: col, roughness: .25, metalness: .05, emissive: col, emissiveIntensity: .12 })); b.scale.set(1, 1.18, 1); b.castShadow = true; g.add(b);
  const kn = new THREE.Mesh(new THREE.ConeGeometry(.05, .08, 10), std(col)); kn.position.y = -.38; kn.rotation.x = Math.PI; g.add(kn);
  if (o.hilo !== false) g.add(box(.008, .9, .008, std('#EDE7DA'), 0, -.85, 0, false));
  const key = JSON.stringify(o); const f = cut(caraCache[key] || (caraCache[key] = caraG(o)), .42, .42); f.position.set(0, .02, .3); f.renderOrder = 3; f.castShadow = false; g.add(f); f.visible = !!o.cara; g.userData.cara = f;
  if (o.gorro) { const h = new THREE.Mesh(new THREE.ConeGeometry(.13, .32, 16), new THREE.MeshStandardMaterial({ map: rayasT(o.gorro), roughness: .6 })); h.position.set(.05, .48, 0); h.rotation.z = -.15; g.add(h); const p = new THREE.Mesh(new THREE.SphereGeometry(.04, 10, 8), std('#F2C14E')); p.position.set(.09, .65, 0); g.add(p); }
  c.add(g); return g; };
const rayasT = (col) => canvasTex(128, 128, (x) => { x.fillStyle = col; x.fillRect(0, 0, 128, 128); x.fillStyle = '#FBF7EC'; for (let i = 0; i < 6; i++) x.fillRect(0, i * 24, 128, 10); });
// gorro de fiesta en la cabeza de un personaje
const gorroK = (k, col = '#E8667F') => { if (k.gorro) return; const h = new THREE.Mesh(new THREE.ConeGeometry(.16, .4, 16), new THREE.MeshStandardMaterial({ map: rayasT(col), roughness: .6 })); h.position.set(.06, .55, 0); h.rotation.z = -.2; k.head.add(h); k.gorro = h; };
const flota = (g, u, i = 0, y0 = 2.2, amp = .06) => { g.position.y = y0 + Math.sin(u * 1.6 + i * 1.7) * amp; g.rotation.z = Math.sin(u * 1.1 + i) * .08; };
// racimo de globos (sin cara) alrededor de x,z
const racimo = (c, x, z, n = 5, y = 2.3, seed = 1) => { const R = rng(seed); const G = []; for (let i = 0; i < n; i++) { const g = globoC(c, BCOL[(i + seed) % BCOL.length]); g.position.set(x + (R() - .5) * .9, y + R() * .5, z + (R() - .5) * .4); G.push([g, g.position.y]); } return (u) => G.forEach(([g, y0], i) => flota(g, u, i + seed, y0, .05)); };
// guirnalda de banderines + "FELIZ CUMPLE"
const guirT = (txt) => canvasTex(2048, 256, (x) => { x.clearRect(0, 0, 2048, 256); const L = [...txt]; const n = L.length, w = 2048 / n; x.strokeStyle = '#EDE7DA'; x.lineWidth = 6; x.beginPath(); x.moveTo(0, 24); for (let i = 0; i <= n; i++) x.lineTo(i * w, 24 + Math.sin(i / n * Math.PI) * 30); x.stroke(); L.forEach((ch, i) => { const y0 = 24 + Math.sin((i + .5) / n * Math.PI) * 30; x.fillStyle = BCOL[i % BCOL.length]; x.beginPath(); x.moveTo(i * w + 8, y0); x.lineTo(i * w + w - 8, y0); x.lineTo(i * w + w / 2, y0 + 200); x.closePath(); x.fill(); x.fillStyle = '#fff'; x.font = '900 86px Fraunces'; x.textAlign = 'center'; x.fillText(ch, i * w + w / 2, y0 + 100); }); });
const guirnalda = (c, txt = 'FELIZ CUMPLE', w = 5.6, pos = [0, 3.3, -2.8]) => { const m = cut(guirT(txt), w, w / 8); m.position.set(...pos); m.castShadow = false; c.add(m); return m; };
// tarta con velas
const tarta = (c, pos, n = 6) => { const g = new THREE.Group(); const cy = (r, h, col, y) => { const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 32), std(col)); m.position.y = y; m.castShadow = true; g.add(m); return m; };
  cy(.42, .05, '#EDE7DA', .025); cy(.36, .24, '#F6D8E4', .17); cy(.37, .04, '#E8667F', .3); cy(.26, .2, '#F6D8E4', .42); cy(.27, .04, '#E8667F', .53);
  const F = []; for (let i = 0; i < n; i++) { const a = i / n * Math.PI * 2; const v = new THREE.Mesh(new THREE.CylinderGeometry(.015, .015, .14, 8), std(BCOL[i % BCOL.length])); v.position.set(Math.cos(a) * .16, .62, Math.sin(a) * .16); g.add(v); const f = glowSprite('#FFC86A', .16, .95); f.position.set(Math.cos(a) * .16, .73, Math.sin(a) * .16); g.add(f); F.push(f); }
  const l = new THREE.PointLight('#FFB86A', 2.5, 2.5, 1.6); l.position.y = 1.0; g.add(l);
  g.position.set(...pos); c.add(g); g.userData.velas = (on) => { F.forEach((f, i) => (f.material.opacity = on * (.8 + Math.sin(i * 3 + on * 50) * .1))); l.intensity = 2.5 * on; }; return g; };
// mesa de fiesta con tarta y picoteo
const mesaFiesta = (c, x, z, conTarta = true) => { mesa(c, x, z, .8, 2.0, .9, '#F4F0E4'); c.add(box(2.06, .03, .96, std('#E8667F'), x, .845, z, false)); const R = rng(4);
  for (let i = 0; i < 4; i++) { const p = new THREE.Mesh(new THREE.CylinderGeometry(.17, .14, .05, 20), std('#FBF7EC')); p.position.set(x - .8 + i * .2 + (i > 1 ? .9 : 0), .89, z + .25); c.add(p); const s = box(.18, .06, .14, std(['#F2C14E', '#E8A86A', '#C9361F', '#7BC86A'][i]), p.position.x, .94, p.position.z); c.add(s); }
  for (let i = 0; i < 5; i++) { const v = new THREE.Mesh(new THREE.CylinderGeometry(.045, .04, .2, 12), std(['#C9361F', '#F2C14E', '#43C4B4', '#E8667F', '#4A86C7'][i])); v.position.set(x - .9 + i * .12, .95, z - .25); c.add(v); }
  return conTarta ? tarta(c, [x + .45, .85, z - .05]) : null; };
// 20 sillas en los laterales del salón, mirando al centro. globos: cuántas llevan globo con cara
const CARAS = [{ cara: 1, gorro: '#E8667F' }, { cara: 1, pest: 1 }, { cara: 1, gafas: 1, enfado: 1 }, { cara: 1, pelo: 1 }, { cara: 1, gorro: '#43C4B4' }, { cara: 1, pest: 1, gorro: '#F2C14E' }, { cara: 1 }, { cara: 1, gafas: 1 }, { cara: 1, pelo: 1, gorro: '#9A6AE8' }, { cara: 1, pest: 1 }];
const SPOTS = (() => { const P = []; for (const s of [-1, 1]) for (const col of [0, 1]) for (let r = 0; r < 5; r++) P.push([s * (2.9 + col * .75), -2.0 + r * .8, s * -Math.PI / 2]); return P; })();
const sillas = (c, globos = 0, seed = 0) => { const B = []; SPOTS.forEach(([x, z, ry], i) => { silla(c, x, z, ry, ['#C8A27A', '#8E6242'][i % 2]); if (i < globos) { const o = { ...CARAS[(i + seed) % CARAS.length], hilo: false }; const g = globoC(c, BCOL[i % BCOL.length], o); g.position.set(x, .95, z); g.rotation.y = ry; B.push([g, i]); } }); return (u, n = 99) => B.forEach(([g, i]) => { g.visible = i < n; g.position.y = .95 + Math.sin(u * 2 + i) * .03; }); };
// salón de la fiesta completo. o: {tarta, sofa, globos(n en sillas)}
const FIESTA = (c, o = {}) => { guirnalda(c); const rc1 = racimo(c, -2.0, -2.4, 5, 2.6, 1), rc2 = racimo(c, 2.2, -2.4, 5, 2.6, 3); const t = o.tarta === false ? null : mesaFiesta(c, 1.3, -2.1); if (o.sofa !== false) { const s = sofa('#6A3AB8'); s.position.set(-1.0, 0, -2.2); c.add(s); } const sl = sillas(c, o.globos || 0, o.seed || 0); calida(c, [0, 2.8, 0], 3, 7);
  return (u, velas = 1, n = 99) => { rc1(u); rc2(u); sl(u, n); if (t) t.userData.velas(velas); }; };
const SOFF = { y: -.2, z: -2.2 };
// sobre e invitación
const invT = () => canvasTex(700, 480, (x) => { x.fillStyle = '#FBF7EC'; x.fillRect(0, 0, 700, 480); x.strokeStyle = '#E8667F'; x.lineWidth = 14; x.strokeRect(18, 18, 664, 444); for (let i = 0; i < 12; i++) { x.fillStyle = BCOL[i % BCOL.length]; x.beginPath(); x.arc(55 + i * 54, 44, 9, 0, 7); x.fill(); } x.fillStyle = '#E8667F'; x.textAlign = 'center'; x.font = '900 82px Fraunces'; x.fillText('¡MI CUMPLE!', 350, 140); x.fillStyle = '#2A2A34'; x.font = '800 54px Inter'; x.fillText('SÁBADO · 18:00', 350, 245); x.font = '700 50px Inter'; x.fillText('TE ESPERO ♥', 350, 330); x.fillStyle = '#6A3AB8'; x.font = 'italic 700 46px Fraunces'; x.fillText('— ella', 470, 420); });
const invitacion = (c, w = 1.4) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, w * 480 / 700), new THREE.MeshStandardMaterial({ map: invT(), roughness: .7 })); m.castShadow = true; c.add(m); return m; };
const sobreT = () => canvasTex(600, 400, (x) => { x.fillStyle = '#F6D8E4'; x.fillRect(0, 0, 600, 400); x.strokeStyle = '#C8909E'; x.lineWidth = 6; x.beginPath(); x.moveTo(0, 0); x.lineTo(300, 220); x.lineTo(600, 0); x.stroke(); x.beginPath(); x.moveTo(0, 400); x.lineTo(240, 190); x.moveTo(600, 400); x.lineTo(360, 190); x.stroke(); x.fillStyle = '#E8667F'; x.font = '900 120px Inter'; x.textAlign = 'center'; x.fillText('♥', 300, 300); });
const sobre = (c, w = 1.0) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, w * 2 / 3), new THREE.MeshStandardMaterial({ map: sobreT(), roughness: .7 })); m.castShadow = true; c.add(m); return m; };
// regalo
const regalo = (c, col = '#43C4B4', s = .42) => { const g = new THREE.Group(); g.add(box(s, s * .8, s, std(col), 0, s * .4, 0)); g.add(box(s * 1.02, s * .82, s * .14, std('#F2C14E'), 0, s * .4, 0)); g.add(box(s * .14, s * .82, s * 1.02, std('#F2C14E'), 0, s * .4, 0)); for (const r of [-.6, .6]) { const l = new THREE.Mesh(new THREE.TorusGeometry(s * .14, s * .04, 8, 16), std('#F2C14E')); l.position.set(0, s * .86, 0); l.rotation.set(0, r, 0); g.add(l); } g.children.forEach((m) => (m.castShadow = true)); c.add(g); return g; };
// auriculares de gato
const auris = (c, s = 1) => { const g = new THREE.Group(); const m = std('#F6A8C4'); const a = new THREE.Mesh(new THREE.TorusGeometry(.2, .035, 10, 28, Math.PI), m); g.add(a); for (const sx of [-1, 1]) { const cup = new THREE.Mesh(new THREE.CylinderGeometry(.08, .08, .07, 20), std('#FBF7EC')); cup.rotation.z = Math.PI / 2; cup.position.set(sx * .2, -.02, 0); g.add(cup); const e = new THREE.Mesh(new THREE.ConeGeometry(.06, .12, 4), m); e.position.set(sx * .11, .2, 0); e.rotation.z = -sx * .35; g.add(e); const ei = new THREE.Mesh(new THREE.ConeGeometry(.03, .07, 4), std('#E8667F')); ei.position.set(sx * .11, .19, .025); ei.rotation.z = -sx * .35; g.add(ei); } g.scale.setScalar(s); g.children.forEach((q) => (q.castShadow = true)); c.add(g); return g; };
const aurisK = (k) => { if (k.auris) return; const g = auris({ add() {} }, 1.75); g.position.set(0, .06, 0); k.head.add(g); k.auris = g; };
// armario con camisetas
const armario = (c, x, z) => { c.add(box(1.5, 2.3, .6, std('#8E6242'), x, 1.15, z)); c.add(box(.68, 2.1, .04, std('#A87A52'), x - .36, 1.15, z + .31)); c.add(box(.68, 2.1, .04, std('#A87A52'), x + .36, 1.15, z + .31)); };
const camisetaT = (col) => canvasTex(256, 256, (x) => { x.clearRect(0, 0, 256, 256); x.fillStyle = col; x.beginPath(); x.moveTo(70, 30); x.lineTo(186, 30); x.lineTo(250, 80); x.lineTo(215, 120); x.lineTo(190, 100); x.lineTo(190, 240); x.lineTo(66, 240); x.lineTo(66, 100); x.lineTo(41, 120); x.lineTo(6, 80); x.closePath(); x.fill(); x.fillStyle = 'rgba(0,0,0,.18)'; x.beginPath(); x.arc(128, 32, 26, 0, Math.PI); x.fill(); });
const camiseta = (c, col, w = .6) => { const m = cut(camisetaT(col), w, w); m.renderOrder = 4; c.add(m); return m; };
// camiseta "vergonzosa" del experimento: cantante pasado de moda (dibujo inventado)
const cantT = () => canvasTex(256, 256, (x) => { x.fillStyle = '#F4F0E4'; x.fillRect(0, 0, 256, 256); x.fillStyle = '#8A4A26'; x.beginPath(); x.ellipse(128, 110, 92, 88, 0, 0, 7); x.fill(); x.fillStyle = '#F2C8A0'; x.beginPath(); x.ellipse(128, 128, 56, 66, 0, 0, 7); x.fill(); x.fillStyle = '#1A1A24'; x.fillRect(80, 106, 40, 20); x.fillRect(136, 106, 40, 20); x.fillRect(118, 112, 20, 5); x.strokeStyle = '#C9361F'; x.lineWidth = 7; x.beginPath(); x.arc(128, 160, 20, .1, Math.PI - .1); x.stroke(); x.fillStyle = '#E8667F'; x.font = '900 34px Fraunces'; x.textAlign = 'center'; x.fillText('♥ TOUR 1978 ♥', 128, 238); });
const cantOn = (k) => { if (k.cant) return; const m = cut(cantT(), .34, .34); m.position.set(0, -.38, .012); m.castShadow = false; k.torso.add(m); k.cant = m; };
// taza de café (y mancha)
const taza = (c) => { const g = new THREE.Group(); const t = new THREE.Mesh(new THREE.CylinderGeometry(.08, .065, .16, 18), std('#FBF7EC')); g.add(t); const h = new THREE.Mesh(new THREE.TorusGeometry(.045, .013, 8, 14), std('#FBF7EC')); h.position.x = .09; g.add(h); const cf = new THREE.Mesh(new THREE.CircleGeometry(.07, 18), std('#4A2A18')); cf.rotation.x = -Math.PI / 2; cf.position.y = .075; g.add(cf); c.add(g); return g; };
// cerezos en flor
const SAKURA = ['#D9799A', '#E89AB8', '#F2B8CC', '#FBD8E4'];
// foto en el móvil (tú + globos)
const fotoGlobosT = () => canvasTex(512, 400, (x) => { x.fillStyle = '#B8607A'; x.fillRect(0, 0, 512, 400); x.fillStyle = '#7A5236'; x.fillRect(0, 300, 512, 100); for (let i = 0; i < 12; i++) { const px = 30 + (i % 6) * 90 + (i > 5 ? 45 : 0), py = i > 5 ? 250 : 170; x.strokeStyle = '#EDE7DA'; x.lineWidth = 2; x.beginPath(); x.moveTo(px, py + 30); x.lineTo(px, py + 70); x.stroke(); x.fillStyle = BCOL[i % BCOL.length]; x.beginPath(); x.ellipse(px, py, 26, 31, 0, 0, 7); x.fill(); x.fillStyle = '#1A1A24'; x.beginPath(); x.arc(px - 8, py - 4, 3, 0, 7); x.arc(px + 8, py - 4, 3, 0, 7); x.fill(); } x.fillStyle = '#111'; x.beginPath(); x.arc(256, 190, 55, 0, 7); x.fill(); x.fillStyle = '#fff'; x.beginPath(); x.ellipse(238, 185, 9, 13, 0, 0, 7); x.ellipse(274, 185, 9, 13, 0, 0, 7); x.fill(); x.fillStyle = '#43C4B4'; x.beginPath(); x.roundRect(200, 250, 112, 150, 26); x.fill(); });
const fotoPacoT = () => canvasTex(512, 400, (x) => { x.fillStyle = '#6E5A9A'; x.fillRect(0, 0, 512, 400); x.fillStyle = '#F3EEE4'; x.fillRect(0, 280, 512, 120); x.fillStyle = '#E8667F'; x.beginPath(); x.ellipse(256, 180, 90, 106, 0, 0, 7); x.fill(); x.fillStyle = '#1A1A24'; x.beginPath(); x.arc(226, 165, 10, 0, 7); x.arc(286, 165, 10, 0, 7); x.fill(); x.strokeStyle = '#1A1A24'; x.lineWidth = 8; x.beginPath(); x.arc(256, 195, 40, .2 * Math.PI, .8 * Math.PI); x.stroke(); x.fillStyle = '#E8667F'; x.beginPath(); x.moveTo(230, 82); x.lineTo(300, 70); x.lineTo(270, 0); x.fill(); x.fillStyle = '#FBF7EC'; x.fillRect(240, 60, 50, 8); x.fillRect(255, 30, 30, 7); });
const fotoM = (c, tex, w = 1.2) => { const m = cut(tex, w, w * 400 / 512); m.renderOrder = 6; c.add(m); return m; };
// banco simple de patio
const bancoP = (c, x, z, w = 2.0) => { c.add(box(w, .08, .5, std('#A87A52'), x, .5, z)); c.add(box(w, .5, .08, std('#A87A52'), x, .8, z - .24)); for (const s of [-1, 1]) c.add(box(.08, .5, .45, std('#3A3A44'), x + s * (w / 2 - .15), .25, z)); };
// llavero de globo pequeño
const llavero = (c) => { const g = globoC(c, '#E8667F', { cara: 1, hilo: false }); g.scale.setScalar(.28); return g; };
// mochila
const mochila = (c, col = '#4A86C7') => { const g = new THREE.Group(); g.add(box(.5, .6, .25, std(col), 0, .3, 0)); g.add(box(.42, .25, .06, std('#2A4A7A'), 0, .2, .14)); g.add(box(.5, .05, .27, std('#2A4A7A'), 0, .58, 0)); g.children.forEach((m) => (m.castShadow = true)); c.add(g); return g; };
// ===================== AYUDAS: VIAJE DE FIN DE CURSO =====================
const DIA = { amb: 'cuartoYo' };
const NOCHEC = { amb: 'cuartoYo', ambo: { night: true } };
const NLOOK = { exposure: .95, bloom: .45 };
const TUTORA = (o = {}) => MUJ(4, { glasses: true, ...o });
const MONITOR = (o = {}) => H({ outfit: 'verde', glow: 0, ...o });
const AMI = (o = {}) => H({ outfit: 'laranja', glow: 0, ...o });
const ABUELA = (o = {}) => H({ outfit: 'roxo', hair: 'old', hairc: '#E8E2D8', glasses: true, glow: 0, lash: true, ...o });
const CADETE = (i, o = {}) => H({ outfit: i % 2 ? 'azul' : 'terno', glow: 0, ...o });
const VERDE2 = { bg: '#3F8A52', fg: '#fff' };
const OSC = { bg: '#1E2230', fg: '#F2C14E' };
// sentado (sin piernas) — en el autobús, y ≈ -.1
const SENT = (pose) => (k, u) => { sitP(k); if (pose) pose(k, u); };
const SY = -.1, SZ = -1.15;
// ventana con montañas
const montT = () => { const t = canvasTex(1024, 256, (x) => { const g = x.createLinearGradient(0, 0, 0, 256); g.addColorStop(0, '#7FB2E0'); g.addColorStop(1, '#DDEBF2'); x.fillStyle = g; x.fillRect(0, 0, 1024, 256); const R = rng(8); x.fillStyle = '#8A9AB8'; for (let i = 0; i < 14; i++) { const cx = i * 80 + R() * 40, h = 90 + R() * 80; x.beginPath(); x.moveTo(cx - 90, 256); x.lineTo(cx, 256 - h - 40); x.lineTo(cx + 90, 256); x.fill(); x.fillStyle = '#F4F6FA'; x.beginPath(); x.moveTo(cx - 22, 256 - h - 40 + 30); x.lineTo(cx, 256 - h - 40); x.lineTo(cx + 22, 256 - h - 40 + 30); x.fill(); x.fillStyle = '#8A9AB8'; } x.fillStyle = '#4F7A44'; for (let i = 0; i < 40; i++) { const cx = i * 26 + R() * 10; x.beginPath(); x.moveTo(cx - 14, 256); x.lineTo(cx, 180 - R() * 30); x.lineTo(cx + 14, 256); x.fill(); } x.fillStyle = '#6E9A50'; x.fillRect(0, 236, 1024, 20); }); t.wrapS = THREE.RepeatWrapping; return t; };
// autobús por dentro: fila doble en el centro (x -0.4 y 0.4), filas a los lados
const BUSV = (c, o = {}) => { c.add(box(14, 3.4, .1, std('#E8E2D2'), 0, 1.7, -1.8)); const t = montT(); const w = new THREE.Mesh(new THREE.PlaneGeometry(10, 1.1), new THREE.MeshBasicMaterial({ map: t, toneMapped: false })); w.position.set(0, 1.85, -1.74); c.add(w);
  for (const x of [-5, -2.5, -.95, .95, 2.5, 5]) c.add(box(.12, 1.2, .05, std('#C8C2B2'), x, 1.85, -1.72));
  for (const x of [-2.5, 0, 2.5]) { c.add(box(1.8, .45, .6, std('#C9361F'), x, .35, -1.3)); c.add(box(1.8, .9, .14, std('#A82E1C'), x, .95, -1.6)); c.add(box(.06, .1, .5, std('#2A2A34'), x, .62, -1.3)); }
  c.add(box(14, .02, 4, std('#4A4C54'), 0, .01, 0)); const s = cut(labelT(['VIAJE FIN DE CURSO'], { bg: '#F2C14E', fg: '#2A2A34', size: 70, w: 900, h: 140 }), 2.2, .34); s.position.set(0, 2.85, -1.7); c.add(s); calida(c, [0, 2.6, .8], 3, 6);
  return (u, sp = 1) => { t.offset.x = u * .07 * sp; }; };
const BUSC = [[0, 1.6, 2.6], [0, 1.3, -1.2], [0, 1.55, 2.25], [0, 1.3, -1.2]];
const BUSCC = [[0, 1.45, 2.0], [0, 1.38, -1.2], [0, 1.42, 1.75], [0, 1.38, -1.2]];
// pareja sentada en el autobús
const YOB = (o = {}) => YO({ x: -.4, z: SZ, y: SY, ...o, pose: SENT(o.pose) });
const ELB = (o = {}) => ELA({ x: .4, z: SZ, y: SY, ...o, pose: SENT(o.pose) });
// apoyarse en el hombro (inclinación hacia la izquierda)
const apoya = (k0) => (k, u) => k.pose({ lean: 10 * k0, head: 10 * k0 });
// auriculares compartidos: un cable entre las dos cabezas
const cable = (c) => { const g = new THREE.BufferGeometry().setFromPoints([0, 1, 2].map(() => new THREE.Vector3())); const l = new THREE.Line(g, new THREE.LineBasicMaterial({ color: '#F4F0E4' })); c.add(l); const E = [0, 1].map(() => { const m = new THREE.Mesh(new THREE.SphereGeometry(.045, 12, 8), std('#FBF7EC')); c.add(m); return m; }); const a = new THREE.Vector3(), b = new THREE.Vector3();
  return (A0, A1, on = true) => { l.visible = on; E.forEach((e) => (e.visible = on)); if (!on) return; A0.head.getWorldPosition(a); A1.head.getWorldPosition(b); a.x += .27; b.x -= .27; a.z += .05; b.z += .05; E[0].position.copy(a); E[1].position.copy(b); const p = g.attributes.position; p.setXYZ(0, a.x, a.y, a.z); p.setXYZ(1, (a.x + b.x) / 2, Math.min(a.y, b.y) - .55, (a.z + b.z) / 2 + .12); p.setXYZ(2, b.x, b.y, b.z); p.needsUpdate = true; }; };
// maleta
const maleta = (c, col = '#2F5A9A') => { const g = new THREE.Group(); g.add(box(.9, .26, .6, std(col), 0, .13, 0)); g.add(box(.9, .2, .6, std(col), 0, .5, -.2)); g.children[1].rotation.x = -.9; g.add(box(.3, .04, .04, std('#2A2A34'), 0, .28, .3)); c.add(g); return g; };
const sudadera = (c, s = .55) => { const m = camiseta(c, '#43C4B4', s); return m; };
// paquete de galletas saladas
const galletas = (c, s = 1) => { const g = new THREE.Group(); g.add(box(.42 * s, .22 * s, .1 * s, std('#F2C14E'), 0, 0, 0)); const t = cut(labelT(['SALADAS'], { bg: '#C9361F', fg: '#fff', size: 70, w: 420, h: 130 }), .38 * s, .12 * s); t.position.z = .052 * s; g.add(t); c.add(g); return g; };
// hoja con la lista de parejas
const listaT = (rows, hi = -1, tit = 'PAREJAS · VIAJE') => canvasTex(620, 820, (x) => { x.fillStyle = '#FBF7EC'; x.fillRect(0, 0, 620, 820); x.fillStyle = '#2F5A9A'; x.fillRect(0, 0, 620, 110); x.fillStyle = '#fff'; x.font = '900 52px Inter'; x.textAlign = 'center'; x.fillText(tit, 310, 74); x.textAlign = 'left'; rows.forEach((r, i) => { const y = 180 + i * 92; if (i === hi) { x.fillStyle = '#F8D7E0'; x.fillRect(20, y - 58, 580, 80); } x.fillStyle = i === hi ? '#C9365A' : '#2A2A34'; x.font = (i === hi ? '900 ' : '700 ') + '36px Inter'; x.fillText(r, 40, y); x.fillStyle = '#D8CCB0'; x.fillRect(40, y + 20, 540, 3); }); });
const lista = (c, rows, w, pos, hi, tit) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, w * 820 / 620), new THREE.MeshStandardMaterial({ map: listaT(rows, hi, tit), roughness: .9 })); m.position.set(...pos); m.renderOrder = 4; c.add(m); return m; };
const hoja = (c) => { const m = box(.3, .4, .01, std('#FBF7EC'), 0, 0, 0, false); c.add(m); return m; };
// gota de agua / sudor
const gotas = (c, n = 6, col = '#8AC8F2') => { const G = []; for (let i = 0; i < n; i++) { const g = glowSprite(col, .12, 0); c.add(g); G.push(g); } return (u, p, on = 1) => G.forEach((g, i) => { const f = (u * .9 + i / n) % 1; g.position.set(p[0] + Math.sin(i * 2.3) * p[3], p[1] - f * .7, p[2] + .1); g.material.opacity = on * (1 - f); }); };
// mancha de color en la cara (mareo verde / rubor)
const tinte = (k, col = '#7AD07A', s = .55) => { const g = glowSprite(col, s, 0); g.position.set(0, 0, .1); k.head.add(g); return (v) => (g.material.opacity = v); };
// nube de azúcar en un palo
const palo = (c) => { const g = new THREE.Group(); const p = box(.02, .02, .9, std('#8E6242'), 0, 0, 0, false); g.add(p); const n = new THREE.Mesh(new THREE.CylinderGeometry(.06, .06, .1, 12), std('#FBF7EC')); n.rotation.x = Math.PI / 2; n.position.z = .47; g.add(n); g.nube = n; c.add(g); return g; };
// foto polaroid con los dos
const fotoT = (cima = true) => canvasTex(420, 500, (x) => { x.fillStyle = '#FBF7EC'; x.fillRect(0, 0, 420, 500); x.fillStyle = cima ? '#8EC0E8' : '#2A2A40'; x.fillRect(24, 24, 372, 360); if (cima) { x.fillStyle = '#F4F6FA'; x.fillRect(24, 300, 372, 84); } for (const [cx, col] of [[150, '#43C4B4'], [270, '#F7CC58']]) { x.fillStyle = col; x.beginPath(); x.roundRect(cx - 45, 280, 90, 104, 22); x.fill(); x.fillStyle = '#111'; x.beginPath(); x.arc(cx, 230, 52, 0, 7); x.fill(); x.fillStyle = '#fff'; x.beginPath(); x.arc(cx - 16, 226, 8, 0, 7); x.arc(cx + 16, 226, 8, 0, 7); x.fill(); } x.fillStyle = '#4A2A1A'; x.fillRect(222, 200, 14, 120); x.fillRect(304, 200, 14, 120); x.fillStyle = '#E8667F'; x.font = '900 60px Inter'; x.textAlign = 'center'; x.fillText('♥', 210, 140); x.fillStyle = '#2A2A34'; x.font = '700 44px Caveat'; x.fillText(cima ? 'el pico ♥' : 'bus ♥', 210, 450); });
const foto = (c, w, pos, cima) => { const m = cut(fotoT(cima), w, w * 500 / 420); m.position.set(...pos); m.renderOrder = 6; c.add(m); return m; };
// bandera
const bandera = (c, x, z, col = '#E8447A') => { const g = new THREE.Group(); g.add(box(.04, 1.4, .04, std('#E8E2D2'), 0, .7, 0)); const f = box(.5, .32, .02, std(col), .27, 1.22, 0); g.add(f); g.position.set(x, 0, z); c.add(g); return g; };
// barro en la ropa
const barro = (k, n = 6) => { const R = rng(n); for (let i = 0; i < n; i++) { const m = new THREE.Mesh(new THREE.CircleGeometry(.05 + R() * .05, 10), std('#5A3A22')); m.position.set((R() - .5) * .3, -.1 - R() * .4, .2); k.torso.add(m); } };
// cuerda en los tobillos
const cuerda = (c) => { const m = box(.5, .05, .05, std('#C9A050'), 0, 0, 0, false); c.add(m); return m; };
// el cuerpo caído (rotación)
const caido = (k, ang) => { k.root.rotation.z = ang; };
// nota musical sobre auriculares
const ICONO = (c, txt, w, pos, col = '#F2C14E', size = 150) => { const m = cut(wordTex(txt, col, size), w, w * .8); m.position.set(...pos); m.renderOrder = 6; c.add(m); return m; };
// ===================== AYUDAS: AYUDA PARA CONQUISTAR A OTRA PERSONA =====================
// Marcos: camiseta de baloncesto con el 23
const dorsalT = () => canvasTex(256, 256, (x) => { x.clearRect(0, 0, 256, 256); x.fillStyle = '#F4F0E4'; x.font = '900 150px Inter'; x.textAlign = 'center'; x.fillText('23', 128, 180); });
const dorsalOn = (k) => { if (k.dorsal) return; const m = cut(dorsalT(), .26, .26); m.position.set(0, -.3, .012); m.castShadow = false; k.torso.add(m); k.dorsal = m; };
const MARCOS = (o = {}) => { const p = o.pose; return H({ outfit: 'laranja', glow: 0, ...o, pose: (k, u) => { dorsalOn(k); p ? p(k, u) : k.pose(); } }); };
const SBN = -.28; // sentado en el banco
const BANCO = (c) => bancoP(c, 0, -.5, 2.2);
// balón de baloncesto
const basketT = () => canvasTex(256, 128, (x) => { x.fillStyle = '#E07A2A'; x.fillRect(0, 0, 256, 128); x.strokeStyle = '#2A1A10'; x.lineWidth = 5; for (const X of [64, 128, 192]) { x.beginPath(); x.moveTo(X, 0); x.lineTo(X, 128); x.stroke(); } x.beginPath(); x.moveTo(0, 64); x.lineTo(256, 64); x.stroke(); });
const basket = (c, r = .16) => { const m = new THREE.Mesh(new THREE.SphereGeometry(r, 24, 16), new THREE.MeshStandardMaterial({ map: basketT(), roughness: .7 })); m.castShadow = true; c.add(m); return m; };
// bote: altura entre suelo y mano
const bote = (u, f = 2.2, h0 = .12, h1 = .95) => { const s = Math.abs(Math.sin(u * f * Math.PI)); return h0 + (h1 - h0) * s; };
const canasta = (c, x, z) => { c.add(box(.12, 3.0, .12, std('#4A4A54', { metalness: .5 }), x, 1.5, z)); c.add(box(1.3, .9, .06, std('#F4F0E4'), x, 3.05, z + .1)); c.add(box(.5, .36, .07, std('#C9361F'), x, 2.85, z + .11)); const r = new THREE.Mesh(new THREE.TorusGeometry(.23, .02, 8, 24), std('#E0602A')); r.rotation.x = Math.PI / 2; r.position.set(x, 2.68, z + .38); c.add(r); };
// patio del instituto (jardín + valla + cartel)
const PATIO = (c) => { INSTI(c); for (let i = -6; i <= 6; i++) c.add(box(.06, 1.2, .06, std('#6A6E78'), i * .9, .6, -3.6)); c.add(box(11, .05, .05, std('#6A6E78'), 0, 1.15, -3.6)); };
// videojuego de la pelota (Cyberball): A y B arriba, TÚ abajo. modo 'todos' o 'fuera'
const cyber = (c, pos, w = 2.6) => { const cv = document.createElement('canvas'); cv.width = 900; cv.height = 560; const x = cv.getContext('2d'); const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; const m = new THREE.Mesh(new THREE.PlaneGeometry(w, w * 560 / 900), new THREE.MeshBasicMaterial({ map: t, toneMapped: false })); m.position.set(...pos); m.renderOrder = 4; c.add(m);
  const P = [[170, 170], [730, 170], [450, 430]]; const N = ['JUGADOR 1', 'JUGADOR 2', 'VOLUNTARIO'];
  const drawP = (px, py, col, name, hi) => { x.fillStyle = col; x.beginPath(); x.roundRect(px - 46, py - 10, 92, 86, 24); x.fill(); x.fillStyle = '#111'; x.beginPath(); x.arc(px, py - 40, 44, 0, 7); x.fill(); x.fillStyle = '#fff'; x.beginPath(); x.arc(px - 14, py - 44, 7, 0, 7); x.arc(px + 14, py - 44, 7, 0, 7); x.fill(); x.fillStyle = hi ? '#F2C14E' : '#C8CEE0'; x.font = '800 28px Inter'; x.textAlign = 'center'; x.fillText(name, px, py + 110); };
  return (u, modo = 'todos', tit = 'EL JUEGO DE LA PELOTA') => { const seqT = [0, 2, 1, 0, 2, 1, 0, 2], seqF = [0, 1]; const per = .9; const n = Math.floor(u / per), f = (u / per) % 1; let a, b; if (modo === 'todos') { a = seqT[n % seqT.length]; b = seqT[(n + 1) % seqT.length]; } else { a = seqF[n % 2]; b = seqF[(n + 1) % 2]; }
    x.fillStyle = '#10131F'; x.fillRect(0, 0, 900, 560); x.fillStyle = '#1E2336'; x.fillRect(0, 0, 900, 70); x.fillStyle = '#F2C14E'; x.font = '900 36px Inter'; x.textAlign = 'center'; x.fillText(tit, 450, 48);
    drawP(...P[0], '#4A86C7', N[0]); drawP(...P[1], '#E8667F', N[1]); drawP(...P[2], '#43C4B4', N[2], modo !== 'todos');
    const s = f * f * (3 - 2 * f); const bx = lerp(P[a][0], P[b][0], s), by = lerp(P[a][1] - 10, P[b][1] - 10, s) - Math.sin(s * Math.PI) * 90; x.fillStyle = '#F4F0E4'; x.beginPath(); x.arc(bx, by, 22, 0, 7); x.fill();
    t.needsUpdate = true; }; };
// corazón roto (dos mitades que se separan)
const halfT = (side) => canvasTex(256, 256, (x) => { x.clearRect(0, 0, 256, 256); x.save(); x.beginPath(); if (side < 0) { x.moveTo(0, 0); x.lineTo(128, 0); x.lineTo(112, 70); x.lineTo(140, 120); x.lineTo(112, 170); x.lineTo(128, 256); x.lineTo(0, 256); } else { x.moveTo(256, 0); x.lineTo(128, 0); x.lineTo(112, 70); x.lineTo(140, 120); x.lineTo(112, 170); x.lineTo(128, 256); x.lineTo(256, 256); } x.closePath(); x.clip(); heartP(x, 128, 140, 80, '#E8445A'); x.restore(); });
const roto = (c, s = .6) => { const g = new THREE.Group(); const L = cut(halfT(-1), s, s), R = cut(halfT(1), s, s); L.renderOrder = R.renderOrder = 6; g.add(L, R); c.add(g); return { g, set: (k) => { L.position.set(-k * .12, -k * .05, 0); R.position.set(k * .12, k * .05, 0); L.rotation.z = k * .25; R.rotation.z = -k * .25; } }; };
// tarta 2/3
const tartaT = (frac, lbl, sub) => canvasTex(700, 700, (x) => { x.clearRect(0, 0, 700, 700); x.fillStyle = '#FBF7EC'; x.beginPath(); x.roundRect(0, 0, 700, 700, 40); x.fill(); const cx = 350, cy = 300, r = 200; x.fillStyle = '#D8CCB0'; x.beginPath(); x.arc(cx, cy, r, 0, 7); x.fill(); x.fillStyle = '#E8667F'; x.beginPath(); x.moveTo(cx, cy); x.arc(cx, cy, r, -Math.PI / 2, -Math.PI / 2 + frac * Math.PI * 2); x.closePath(); x.fill(); x.fillStyle = '#FBF7EC'; x.beginPath(); x.arc(cx, cy, r * .5, 0, 7); x.fill(); x.fillStyle = '#2A2A34'; x.font = '900 84px Fraunces'; x.textAlign = 'center'; x.fillText(lbl, cx, cy + 30); x.font = '800 44px Inter'; x.fillText(sub, cx, 620); });
const tartaM = (c, w, pos, frac, lbl, sub) => { const m = cut(tartaT(frac, lbl, sub), w, w); m.position.set(...pos); m.renderOrder = 5; c.add(m); return m; };
// fichas de pareja (Hunt 2015): dos caras con nota de 1 a 10
const fichaT = (n1, n2, col) => canvasTex(520, 300, (x) => { x.fillStyle = '#FBF7EC'; x.beginPath(); x.roundRect(0, 0, 520, 300, 30); x.fill(); x.strokeStyle = col; x.lineWidth = 10; x.stroke(); for (const [cx, n, c2] of [[150, n1, '#43C4B4'], [370, n2, '#F7CC58']]) { x.fillStyle = c2; x.beginPath(); x.roundRect(cx - 50, 150, 100, 90, 24); x.fill(); x.fillStyle = '#111'; x.beginPath(); x.arc(cx, 110, 52, 0, 7); x.fill(); x.fillStyle = '#fff'; x.beginPath(); x.arc(cx - 16, 106, 8, 0, 7); x.arc(cx + 16, 106, 8, 0, 7); x.fill(); x.fillStyle = col; x.font = '900 46px Inter'; x.textAlign = 'center'; x.fillText(n, cx, 288); } x.fillStyle = '#E8667F'; x.font = '900 56px Inter'; x.textAlign = 'center'; x.fillText('♥', 260, 130); });
const ficha = (c, w, pos, n1, n2, col = '#2F5A9A') => { const m = cut(fichaT(n1, n2, col), w, w * 300 / 520); m.position.set(...pos); m.renderOrder = 5; c.add(m); return m; };
// tarjeta de historia (Baumeister)
const histT = (tit, lines, col) => canvasTex(600, 720, (x) => { x.fillStyle = '#FBF7EC'; x.fillRect(0, 0, 600, 720); x.fillStyle = col; x.fillRect(0, 0, 600, 120); x.fillStyle = '#fff'; x.font = '900 52px Inter'; x.textAlign = 'center'; x.fillText(tit, 300, 80); x.strokeStyle = '#9EC0E8'; x.lineWidth = 3; for (let y = 200; y < 720; y += 70) { x.beginPath(); x.moveTo(30, y); x.lineTo(570, y); x.stroke(); } x.fillStyle = '#2A3A8A'; x.font = '700 50px Caveat'; lines.forEach((l, i) => x.fillText(l, 300, 190 + i * 70)); });
const hist = (c, tit, lines, w, pos, col) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, w * 1.2), new THREE.MeshStandardMaterial({ map: histT(tit, lines, col), roughness: .9 })); m.position.set(...pos); m.renderOrder = 4; c.add(m); return m; };
// bocadillo de cartón: tinte gris
const carton = (b, v) => b.children.forEach((m, i) => m.material.color.set(v ? '#9A8E80' : ['#E0A860', '#C9361F', '#E0A860'][i]));
// móvil en la mano con luz
const enMano = (ph, k, dx = -.1, dy = -.05, dz = .12) => { const p = hand(k); ph.position.set(p.x + dx, p.y + dy, p.z + dz); };
// estrellas / astronauta / pez (iconos de texto)
const MSG = { name: 'MARCOS' };

const RUB = (k, f0 = .28) => { const f = rubor(k); return (v) => f(v * f0); };
const CHATC = [[0, 1.5, 4.6], [0, 1.5, -.5], [0, 1.5, 4.1], [0, 1.5, -.5]];

// ===================== AYUDAS: ATRAPADO EN LA TIENDA DE TU CRUSH =====================
const LUCIA = (o = {}) => H({ outfit: 'verde', hair: 'bob', hairc: '#D9B65A', lash: true, glow: 0, ...o });
const RAMI = (o = {}) => H({ outfit: 'azul', glasses: true, hair: 'old', hairc: '#6A5A4A', glow: 0, ...o });
const NOCHEN = { exposure: 1.0, bloom: .45 };
const DENTRO = { exposure: 1.05, bloom: .5, vig: .55 };
const NARANJA = { bg: '#E8743A', fg: '#FFFFFF' };
// relámpagos: look que se ilumina en los tiempos dados
const rayo = (T, base = NOCHEN) => (u) => { let k = 0; for (const t of T) k = Math.max(k, smooth(t, t + .04, u) * (1 - smooth(t + .1, t + .45, u))); return { ...base, exposure: base.exposure + k * 2.4, bloom: base.bloom + k * .8 }; };
// tienda de campaña (puerta hacia +z)
const tiendaG = (col = '#E8743A', s = 1, lit = 0) => { const g = new THREE.Group(); const r = .95 * s, L = 2.2 * s; const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, L, 3, 1), std(col, { roughness: .85, emissive: col, emissiveIntensity: lit })); m.rotation.x = -Math.PI / 2; m.position.y = r / 2; m.castShadow = true; m.receiveShadow = true; g.add(m); const sh = new THREE.Shape(); sh.moveTo(-.42 * s, 0); sh.lineTo(.42 * s, 0); sh.lineTo(0, 1.05 * s); sh.lineTo(-.42 * s, 0); const d = new THREE.Mesh(new THREE.ShapeGeometry(sh), new THREE.MeshStandardMaterial({ color: lit ? '#FFC070' : '#3A2A22', emissive: lit ? '#FFA040' : '#000', emissiveIntensity: lit ? .8 : 0, side: THREE.DoubleSide })); d.position.set(0, .02, L / 2 - .02); g.add(d); const z = box(.015, .9 * s, .01, std('#1A1A20'), 0, .47 * s, L / 2 + .005, false); g.add(z); const st = new THREE.Mesh(new THREE.CylinderGeometry(.015, .015, .3, 6), std('#C8CCD4')); st.position.set(0, r * 1.5 + .1, L / 2 - .05); g.add(st); if (lit) { const gl = glowSprite('#FFB060', 1.1 * s, .14); gl.position.set(0, .5 * s, L / 2 + .05); g.add(gl); } return g; };
const tienda = (c, x, z, col, s = 1, lit = 0, ry = 0) => { const t = tiendaG(col, s, lit); t.position.set(x, 0, z); t.rotation.y = ry; c.add(t); return t; };
// porche de madera con banco (cabaña de los profes)
const porche = (c, x, z) => { const g = new THREE.Group(); g.add(box(3.2, 2.6, .2, std('#7A5034'), 0, 1.3, -.9)); for (const s of [-1, 1]) g.add(box(.12, 2.3, .12, std('#5A3A22'), s * 1.5, 1.15, .7)); const tj = box(3.5, .1, 1.9, std('#4A2E1E'), 0, 2.35, -.1); tj.rotation.x = .12; g.add(tj); g.add(box(1.6, .08, .4, std('#9A6A44'), 0, .45, -.5)); for (const s of [-1, 1]) g.add(box(.08, .45, .35, std('#5A3A22'), s * .7, .22, -.5)); const bl = glowSprite('#FFD890', .5, .9); bl.position.set(0, 2.1, -.75); g.add(bl); const l = new THREE.PointLight('#FFD090', 3, 5, 1.6); l.position.set(0, 2.0, -.3); g.add(l); g.position.set(x, 0, z); c.add(g); return g; };
// lluvia: segmentos que caen
const lluvia = (c, n = 420, bx = [-6, 6, 0, 4.5, -6, 3], col = '#A8C4F0') => { const [x0, x1, y0, y1, z0, z1] = bx; const R = rng(9); const P = []; for (let i = 0; i < n; i++) P.push([x0 + (x1 - x0) * R(), R(), z0 + (z1 - z0) * R()]); const pos = new Float32Array(n * 6); const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); const m = new THREE.LineSegments(geo, new THREE.LineBasicMaterial({ color: col, transparent: true, opacity: .6, fog: false })); m.frustumCulled = false; m.renderOrder = 3; c.add(m); return (u, on = 1) => { m.visible = on > .01; m.material.opacity = .6 * on; for (let i = 0; i < n; i++) { const [x, f, z] = P[i]; const y = y1 - ((f + u * 1.4) % 1) * (y1 - y0); pos.set([x, y, z, x - .04, y + .38, z], i * 6); } geo.attributes.position.needsUpdate = true; }; };
// campamento de noche: tiendas de chicas (centro) y de chicos (izquierda, x≈-9)
const CHICAS = [[-2.6, -3.4, '#4A86C7'], [2.9, -3.8, '#E8667F'], [-4.9, -4.2, '#7AB85A']];
const CHICOS = [[-8.2, -2.8, '#2F5A9A'], [-10.6, -3.4, '#F2C14E'], [-12.8, -2.6, '#8A5AC8']];
const CAMP = (c, o = {}) => { c.add(new THREE.HemisphereLight('#8A9AE8', '#283040', .75)); const ml = new THREE.DirectionalLight('#B8C4FF', .7); ml.position.set(-6, 10, 8); c.add(ml); tienda(c, 0, -2.6, '#E8743A', 1, o.lit ?? .25); for (const [x, z, col] of [...CHICAS, ...CHICOS]) tienda(c, x, z, col, .95, o.litAll ? .15 : 0); if (o.porche !== false) porche(c, 2.4, -1.1); const s = cut(labelT(['CHICAS'], { bg: '#E8667F', fg: '#fff', size: 70, w: 420, h: 130 }), .7, .22); s.position.set(-1.4, 1.0, -1.0); c.add(s); c.add(box(.06, .9, .06, std('#5A3A22'), -1.4, .45, -1.05)); const s2 = cut(labelT(['CHICOS'], { bg: '#2F5A9A', fg: '#fff', size: 70, w: 420, h: 130 }), .7, .22); s2.position.set(-6.6, 1.0, -1.0); c.add(s2); c.add(box(.06, .9, .06, std('#5A3A22'), -6.6, .45, -1.05)); };
const CAMPN = { amb: 'lagoNoche', fov: 32 };
// interior de la tienda: paredes inclinadas, linterna
AMBS.tiendaIn = (c, o) => { c.background = new THREE.Color('#07060E'); const fab = o.col || '#C8602E'; const fl = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 4.4), std('#3A3448', { roughness: 1 })); fl.rotation.x = -Math.PI / 2; fl.receiveShadow = true; c.add(fl); const mt = std(fab, { roughness: .9, side: THREE.DoubleSide, emissive: fab, emissiveIntensity: o.glow ?? .12 }); mt.depthWrite = false; for (const s of [-1, 1]) { const w = box(.03, 2.58, 4.4, mt, s * .82, 1.0, 0); w.rotation.z = s * .675; c.add(w); } const sh = new THREE.Shape(); sh.moveTo(-1.65, 0); sh.lineTo(1.65, 0); sh.lineTo(0, 2.05); sh.lineTo(-1.65, 0); const bk = new THREE.Mesh(new THREE.ShapeGeometry(sh), mt); bk.position.z = -2.2; c.add(bk); const zp = box(.02, 1.9, .01, std('#3A2A22'), 0, .95, -2.18); c.add(zp); c.add(new THREE.HemisphereLight('#FFC890', '#2A2440', o.dim ? .25 : .55)); };
const DENTROC = { amb: 'tiendaIn', fov: 40 };
// sacos de dormir
const saco = (c, x, z, col = '#2F5A9A', len = 1.9, ry = 0) => { const g = new THREE.Group(); g.add(box(len, .16, .72, std(col, { roughness: .7 }), 0, .08, 0)); g.add(box(.42, .17, .66, std('#E8E2D2', { roughness: .9 }), -len / 2 + .24, .09, 0)); g.position.set(x, 0, z); g.rotation.y = ry; c.add(g); return g; };
// luz de linterna que cuelga dentro de la tienda (on: 0..1)
const luzTienda = (c, pos = [0, 1.55, -.6]) => { const s = glowSprite('#FFE2A8', .9, .9); s.position.set(...pos); c.add(s); const l = new THREE.PointLight('#FFD9A0', 7, 6, 1.5); l.position.set(pos[0], pos[1] - .1, pos[2] + .3); l.castShadow = true; c.add(l); return (k) => { s.material.opacity = .9 * k; l.intensity = 7 * k; }; };
// linterna en la mano
const enManoL = (c, A, i, col) => { const L = linterna(col); c.add(L); return (on = 1) => { const p = hand(A[i]); L.position.set(p.x, p.y, p.z + .12); L.userData.on(on); }; };
// sentado en el suelo (piernas ocultas)
const SUELO = -.62;
const SIENTA = (mk0, x, z, o = {}) => { const p = o.pose; return mk0({ x, z, y: SUELO, ...o, pose: (k, u) => { sitP(k); if (p) p(k, u); } }); };
// termo de café
const termo = () => { const g = new THREE.Group(); g.add(new THREE.Mesh(new THREE.CylinderGeometry(.05, .05, .26, 14), std('#C9361F', { metalness: .3 }))); const t = new THREE.Mesh(new THREE.CylinderGeometry(.055, .055, .06, 14), std('#2A2A34')); t.position.y = .16; g.add(t); return g; };
// bolsa de gominolas / chocolatina
const gomis = () => { const g = new THREE.Group(); g.add(box(.26, .32, .05, std('#E8447A'), 0, 0, 0, false)); const t = cut(labelT(['GOMIS'], { bg: '#FFFFFF', fg: '#E8447A', size: 80, w: 420, h: 150 }), .22, .08); t.position.z = .03; g.add(t); return g; };
const choco = () => { const g = new THREE.Group(); g.add(box(.3, .12, .03, std('#5A2E1A'), 0, 0, 0, false)); const t = cut(labelT(['CHOCO'], { bg: '#8A3A1A', fg: '#F2C14E', size: 80, w: 420, h: 150 }), .2, .07); t.position.z = .02; g.add(t); return g; };
const pegaMano = (c, A, i, obj, dx = 0, dy = .05, dz = .1) => { c.add(obj); return () => { const p = hand(A[i]); obj.position.set(p.x + dx, p.y + dy, p.z + dz); }; };
// palabras inventadas de Zajonc
const ZW = ['IKTITAF', 'SARICIK', 'AFWORBU', 'NANSOMA', 'KADIRGA', 'BIWOJNI'];
const tarjeta = (c, txt, w, pos, o = {}) => { const m = cut(labelT([txt], { bg: '#FBF7EC', fg: '#2A2A34', size: 90, w: 700, h: 300, ...o }), w, w * 300 / 700); m.position.set(...pos); m.renderOrder = 5; c.add(m); return m; };
// máquina de "descargas" (falsa)
const maquina = (c, x, z) => { const g = new THREE.Group(); g.add(box(1.2, .9, .6, std('#5A6070', { metalness: .4, roughness: .4 }), 0, .45, 0)); for (let i = 0; i < 4; i++) { const d = new THREE.Mesh(new THREE.CylinderGeometry(.07, .07, .04, 16), std('#1A1A20')); d.rotation.x = Math.PI / 2; d.position.set(-.4 + i * .27, .6, .31); g.add(d); } const lt = glowSprite('#FF3A3A', .25, .9); lt.position.set(.45, .8, .32); g.add(lt); const t = cut(labelT(['⚡ PELIGRO'], { bg: '#F2C14E', fg: '#2A2A34', size: 80, w: 600, h: 150 }), .7, .18); t.position.set(0, .28, .31); g.add(t); g.position.set(x, 0, z); c.add(g); return g; };
// puerta con cartel
const puertaR = (c, x, z, txt, col = '#2F5A9A') => { c.add(box(.9, 2.0, .08, std('#E8E2D2'), x, 1.0, z)); c.add(box(.75, 1.85, .1, std('#8E6242'), x, .95, z + .01)); const t = cut(labelT(txt, { bg: col, fg: '#fff', size: 64, w: 600, h: 70 + 80 * txt.length }), .95, .95 * (70 + 80 * txt.length) / 600); t.position.set(x, 2.35, z + .06); t.renderOrder = 5; c.add(t); return t; };
const agacha = (k, u) => k.pose({ lean: 22, head: -6, armL: [30, 40], armR: [30, 40], bob: -.12 + Math.abs(Math.sin(u * 9)) * .03, legL: [Math.sin(u * 9) * 18, 30], legR: [-Math.sin(u * 9) * 18, 30] });
const susurro = (k, u) => k.pose({ armL: [8, 6], armR: [80, 140], head: 6 });
const sorbe = (k, u) => k.pose({ armL: [12, 8], armR: [110 + Math.sin(u * 2) * 10, 130] });
const abraza = (k) => k.pose({ armL: [60, 100], armR: [60, 100], head: 6 });
const agarra = (k) => k.pose({ armL: [12, 8], armR: [70, 20], lean: -6 });
const tapa = (k, u) => k.pose({ armL: [8, 6], armR: [125, 150], bob: Math.abs(Math.sin(u * 14)) * .025 });
const gatea = (k, u) => k.pose({ lean: 45, head: -20, armL: [60 + Math.sin(u * 8) * 20, 10], armR: [60 - Math.sin(u * 8) * 20, 10], bob: -.45, legL: [40 + Math.sin(u * 8) * 15, 70], legR: [40 - Math.sin(u * 8) * 15, 70] });
const SENTA = (mk0, x, z, o = {}) => { const p = o.pose; return mk0({ x, z, y: SBN, ...o, pose: (k, u) => { sitP(k); if (p) p(k, u); } }); };
const MANANA = { exposure: 1.05, bloom: .3 };
const tiembla = (k, u, amp = 1) => k.pose({ armL: [14 + Math.sin(u * 40) * 4 * amp, 8], armR: [14 + Math.cos(u * 38) * 4 * amp, 8], legL: [Math.sin(u * 45) * 5 * amp, 0], legR: [Math.cos(u * 43) * 5 * amp, 0] });
const frota = (k, u) => k.pose({ armL: [12, 8], armR: [150 + Math.sin(u * 12) * 8, 125] });
const risa = (k, u) => k.pose({ armL: [40, 60], armR: [40, 60], bob: Math.abs(Math.sin(u * 12)) * .04, head: Math.sin(u * 12) * 5 });

// ===================== AYUDAS: CAMBIO DE CUERPO =====================
const MANA = { exposure: 1.05, bloom: .32 };
const TARDEB = { exposure: 1.0, bloom: .4, vig: .55 };
const ROJO = (c, A, i) => { const g = glowSprite('#FF4A5A', .55, 0); c.add(g); const v = new THREE.Vector3(); return (k) => { A[i].head.getWorldPosition(v); g.position.set(v.x, v.y - .1, v.z + .12); g.material.opacity = k * .35; }; };
const HSEQ = (c, a, items) => { const M = items.map(([l, , p, w = 1.6, , sz = 60]) => hab(c, l, w, p, sz)); const T = items.map(([, t]) => (typeof t === 'number' ? t : R0(a, t))); return (u, cam) => M.forEach((m, i) => pop(m, u, T[i], items[i][4] ?? (i + 1 < T.length ? T[i + 1] - .1 : 1e9), cam)); };
const gafasVR = (k) => { const g = new THREE.Group(); g.add(box(.56, .22, .26, std('#22242C', { metalness: .3 }), 0, 0, 0, false)); const l = lightPanel(.44, .1, '#7FD0FF', .9); l.position.z = .135; g.add(l); g.position.set(0, .05, .22); k.head.add(g); return g; };
const camaraM = (k) => { const g = new THREE.Group(); g.add(box(.3, .2, .22, std('#2A2A34'), 0, 0, 0, false)); const o = new THREE.Mesh(new THREE.CylinderGeometry(.07, .07, .1, 16), std('#111')); o.rotation.x = Math.PI / 2; o.position.z = .15; g.add(o); const r = glowSprite('#FF4A5A', .12, .9); r.position.set(.1, .07, .12); g.add(r); g.position.set(0, .42, 0); k.head.add(g); return g; };
const calcetin = (c, x, z, r = 0, col = '#F4F0E4') => { const g = new THREE.Group(); g.add(box(.12, .05, .34, std(col), 0, .03, 0)); const p = box(.12, .05, .14, std(col), .05, .03, .2); g.add(p); g.add(box(.13, .052, .06, std('#E8667F'), 0, .03, -.15)); g.position.set(x, 0, z); g.rotation.y = r; c.add(g); return g; };
const peste = (c, n = 8) => { const B = []; for (let i = 0; i < n; i++) { const g = glowSprite('#9BD04A', .35, 0); c.add(g); B.push(g); } return (u, P, on = 1) => B.forEach((g, i) => { const p = P[i % P.length]; const f = (u * .5 + i / n) % 1; g.position.set(p[0] + Math.sin(u * 2 + i) * .12, .1 + f * 1.3, p[1]); g.material.opacity = on * .45 * Math.sin(f * Math.PI); }); };
const CALC = [[-.9, .6, .3], [.8, .5, -1.2], [-.3, .9, 1.9], [1.1, .9, .3], [-1.3, .3, -.9]];
const calcetines = (c) => { CALC.forEach(([x, z, r], i) => calcetin(c, x, z, r, i % 2 ? '#D8D2C4' : '#F4F0E4')); return peste(c, 12); };
const manosArriba = (k, u) => k.pose({ armL: [95 + Math.sin(u * 3) * 6, 25], armR: [95 + Math.sin(u * 3 + 1) * 6, 25] });
const cabeza = (k, u) => k.pose({ armL: [165, 20], armR: [165, 20], head: Math.sin(u * 5) * 6 });
const brazoAmiga = (k) => k.pose({ armL: [12, 8], armR: [80, -40] });
const brazos = (k, u) => k.pose({ armL: [120 + Math.sin(u * 9) * 40, 60], armR: [120 + Math.cos(u * 9) * 40, 60], bob: Math.abs(Math.sin(u * 9)) * .03 });
const come = (k, u) => k.pose({ armL: [12, 8], armR: [120 + Math.sin(u * 10) * 12, 120], bob: Math.abs(Math.sin(u * 10)) * .015 });
const pulgares = (k) => k.pose({ armL: [150, 30], armR: [150, 30] });
const escribe = (k, u) => k.pose({ armL: [70, 40], armR: [70 + Math.sin(u * 14) * 6, 40] });
const recta = (k) => k.pose({ armL: [8, 4], armR: [8, 4], lean: 0 });
// personajes
const SARA = (o = {}) => AMI({ hair: 'long', hairc: '#2A1A12', lash: true, ...o });
const MAMA = (o = {}) => MUJ(0, { ...o });
const MAMAY = (o = {}) => MUJ(2, { ...o });
const HERM = (o = {}) => H({ outfit: 'azul', glow: 0, s: .72, ...o });
const PROFE = (o = {}) => RAMI(o);
const BIO = (o = {}) => TUTORA(o);
const MANIQ = (o = {}) => H({ outfit: 'jaleco', glow: 0, tint: '#D9DAE2', eyes: [[0, 'flat']], pose: (k) => k.pose({ armL: [10, 4], armR: [10, 4] }), ...o });
const VOLU = (o = {}) => H({ outfit: 'verde', glow: 0, ...o });
// escenarios
const CE = (o = {}) => ({ amb: 'cuartoElla', fov: 32, look: MANA, ...o });
const CY = (o = {}) => ({ amb: 'cuartoYo', fov: 32, look: MANA, ...o });
const COCINA = (c) => { c.add(box(3.6, .9, .7, std('#E8E2D4'), 0, .45, -2.4)); c.add(box(3.6, .06, .74, std('#8E6242'), 0, .92, -2.4)); for (let i = 0; i < 3; i++) c.add(box(1.1, .7, .4, std('#C9925A'), -1.2 + i * 1.2, 2.2, -2.55)); const t = box(.4, .25, .22, std('#C9CDD2', { metalness: .6 }), .9, 1.07, -2.4); c.add(t); mesa(c, 0, -.3, .75, 2.0, .9, '#D8B48A'); return t; };
const COC = (o = {}) => ({ amb: 'sala', ambo: { wall: '#C98A5A' }, fov: 32, look: MANA, ...o });
const CALLE = (o = {}) => ({ amb: 'esquina', fov: 30, look: MANA, ...o });
const CLASE = (o = {}) => ({ amb: 'aula', fov: 32, ...o });
const REC = (o = {}) => ({ amb: 'parque', fov: 30, ...o });
const BIB = (o = {}) => ({ amb: 'biblio', fov: 32, ...o });
const LABC = (o = {}) => ({ amb: 'lab', fov: 32, look: { exposure: 1.08 }, ...o });
// objetos
const tostadaT = (k) => canvasTex(256, 256, (x) => { x.clearRect(0, 0, 256, 256); x.fillStyle = '#C98A3A'; x.beginPath(); x.roundRect(28, 40, 200, 180, 40); x.fill(); x.fillStyle = '#F2D08A'; x.beginPath(); x.roundRect(44, 58, 168, 146, 30); x.fill(); if (k > 0) { x.fillStyle = '#FFF1B0'; x.beginPath(); x.roundRect(56, 70, 144, 120, 24); x.fill(); } if (k > 1) { x.fillStyle = '#B02A4A'; x.beginPath(); x.ellipse(128, 130, 60, 44, 0, 0, 7); x.fill(); } if (k > 2) { x.strokeStyle = '#E2231A'; x.lineWidth = 16; x.lineCap = 'round'; x.beginPath(); x.moveTo(70, 100); x.bezierCurveTo(110, 160, 150, 70, 190, 150); x.stroke(); } });
const tostadas = (c, w, pos) => [0, 1, 2, 3].map((k) => { const m = cut(tostadaT(k), w, w); m.position.set(...pos); m.renderOrder = 5 + k * .01; m.position.z += k * .002; c.add(m); return m; });
const ketchup = () => { const g = new THREE.Group(); g.add(box(.12, .3, .12, std('#E2231A'), 0, .15, 0)); g.add(box(.06, .08, .06, std('#FBF7EC'), 0, .34, 0)); return g; };
const retratoT = (flip) => canvasTex(400, 500, (x) => { x.fillStyle = '#FBF7EC'; x.fillRect(0, 0, 400, 500); x.save(); if (flip) { x.translate(400, 0); x.scale(-1, 1); } x.fillStyle = '#9FC4E0'; x.fillRect(20, 20, 360, 400); x.fillStyle = '#4A2A1A'; x.beginPath(); x.ellipse(200, 210, 130, 150, 0, 0, 7); x.fill(); x.fillStyle = '#111'; x.beginPath(); x.arc(200, 200, 95, 0, 7); x.fill(); x.fillStyle = '#4A2A1A'; x.beginPath(); x.moveTo(110, 150); x.quadraticCurveTo(170, 60, 290, 120); x.quadraticCurveTo(220, 110, 110, 150); x.fill(); x.fillStyle = '#F4F0E4'; x.beginPath(); x.ellipse(165, 205, 16, 22, 0, 0, 7); x.ellipse(235, 205, 16, 22, 0, 0, 7); x.fill(); x.strokeStyle = '#F2C14E'; x.lineWidth = 7; x.beginPath(); x.arc(102, 250, 14, 0, 7); x.stroke(); x.fillStyle = '#F2C14E'; x.fillRect(120, 300, 160, 120); x.restore(); });
const retrato = (c, w, pos, flip) => { const m = cut(retratoT(flip), w, w * 1.25); m.position.set(...pos); m.renderOrder = 5; c.add(m); return m; };
const checkT = (ok = true) => canvasTex(256, 256, (x) => { x.clearRect(0, 0, 256, 256); x.fillStyle = ok ? '#3F8A52' : '#C9361F'; x.beginPath(); x.arc(128, 128, 110, 0, 7); x.fill(); x.strokeStyle = '#fff'; x.lineWidth = 26; x.lineCap = 'round'; x.beginPath(); if (ok) { x.moveTo(70, 132); x.lineTo(112, 174); x.lineTo(188, 90); } else { x.moveTo(84, 84); x.lineTo(172, 172); x.moveTo(172, 84); x.lineTo(84, 172); } x.stroke(); });
const check = (c, s, pos, ok = true) => { const m = cut(checkT(ok), s, s); m.position.set(...pos); m.renderOrder = 7; c.add(m); return m; };
const ranaT = () => canvasTex(512, 360, (x) => { x.clearRect(0, 0, 512, 360); x.fillStyle = '#5FB04A'; x.beginPath(); x.ellipse(256, 230, 150, 100, 0, 0, 7); x.fill(); for (const s of [-1, 1]) { x.beginPath(); x.arc(256 + s * 70, 120, 48, 0, 7); x.fill(); x.fillStyle = '#fff'; x.beginPath(); x.arc(256 + s * 70, 115, 30, 0, 7); x.fill(); x.fillStyle = '#111'; x.beginPath(); x.arc(256 + s * 70, 118, 15, 0, 7); x.fill(); x.fillStyle = '#5FB04A'; } x.strokeStyle = '#2A5A22'; x.lineWidth = 8; x.beginPath(); x.arc(256, 240, 60, .2, Math.PI - .2); x.stroke(); });
const rana = (c, w, pos) => { const m = cut(ranaT(), w, w * 360 / 512); m.position.set(...pos); m.renderOrder = 5; c.add(m); return m; };
const cantanteT = () => canvasTex(256, 256, (x) => { x.clearRect(0, 0, 256, 256); x.fillStyle = '#FBF7EC'; x.beginPath(); x.arc(128, 128, 100, 0, 7); x.fill(); x.fillStyle = '#C98A3A'; x.beginPath(); x.ellipse(128, 70, 90, 45, 0, 0, 7); x.fill(); x.fillStyle = '#2A2A34'; x.beginPath(); x.arc(128, 135, 62, 0, 7); x.fill(); x.fillStyle = '#F4F0E4'; x.beginPath(); x.arc(108, 130, 10, 0, 7); x.arc(148, 130, 10, 0, 7); x.fill(); x.fillStyle = '#E8667F'; x.font = '900 46px Inter'; x.textAlign = 'center'; x.fillText('♥', 128, 230); });
const camisetaCara = (k) => { const m = cut(cantanteT(), .36, .36); m.position.set(0, .98, .09); m.renderOrder = 6; k.root.add(m); return m; };
const cuchillo = () => { const g = new THREE.Group(); g.add(box(.42, .08, .015, std('#D8DCE2', { metalness: .9, roughness: .2 }), .21, 0, 0, false)); g.add(box(.18, .07, .05, std('#3A2418'), -.09, 0, 0, false)); return g; };
const palito = (c) => { const m = box(.7, .02, .02, std('#C9A070'), 0, 0, 0, false); c.add(m); return m; };
const chispa = (c) => { const g = glowSprite('#FFF2C0', 2.5, 0); c.add(g); return g; };
const corazonVivo = (c) => { const h = corazon(c, .28, '#E8447A'); return (u, p, on = 1) => { h.position.set(p[0], p[1], p[2]); const s = latido(u, 140); h.scale.setScalar(on > .01 ? s : .001); h.visible = on > .01; }; };
const piedra = (k, on) => k.tint(on ? '#A8A8B0' : '#FFF0DC');
const sobreHead = (k, dy = .55) => { const v = new THREE.Vector3(); k.head.getWorldPosition(v); v.y += dy; return [v.x, v.y, v.z]; };
const ALUMNOS = [[-1.6, 1.2], [0, 1.2], [1.6, 1.2], [-1.6, -.2], [1.6, -.2]];
const alumnos = (look, eyes) => ALUMNOS.map(([x, z], i) => SENTA((o) => (i % 2 ? MUJ(i + 1, o) : H({ outfit: ['laranja', 'azul', 'hero'][i % 3], glow: 0, ...o })), x, z, { eyes: eyes ? eyes(i) : [[0, look || 'look']] }));

// ===================== COMÚN SHORTS 3 =====================
const VF = 40;
const NOCHES = { exposure: .95, bloom: .45, vig: .55 };
const TARDES = { exposure: 1.0, bloom: .4, vig: .5 };
const tiemblaS = (k, u) => k.pose({ armL: [20, 30], armR: [20, 30], lean: Math.sin(u * 30) * 2 });
const conMovil = (k) => k.pose({ armL: [12, 8], armR: [80, 70] });
const pelo = (k, u) => k.pose({ armL: [12, 8], armR: [158 + Math.sin(u * 6) * 6, 62], head: 4 });
const cruza = (k) => k.pose({ armL: [72, 88], armR: [72, 88] });
const encoge = (k) => k.pose({ armL: [30, -30], armR: [30, -30], head: 6 });
const tiritaS = (k, u) => k.pose({ armL: [55, 80], armR: [55, 80], lean: Math.sin(u * 34) * 1.5 });
const noCabeza = (k, u) => k.pose({ armL: [12, 8], armR: [12, 8], head: Math.sin(u * 9) * 14 });
const huele = (k, u) => k.pose({ armL: [105, 75], armR: [105, 75], head: 8 + Math.sin(u * 2) * 3 });
const SUSC = (a, mkActors, amb = 'parque', look = TARDES, extra0) => Qt(a, FIM, (d, a0) => { const ts = R0(a0, 'suscribete'); return { amb, fov: VF, atores: mkActors(ts),
  extra: (c, s, A) => { if (extra0) extra0(c); const ht = corazon(c, .4); const sb = suscribe(1.5); c.add(sb); sb.position.set(0, 2.55, .5); const q = lp(c, ['¿TE HA GUSTADO?'], 1.5, [0, 2.6, .3]);
    return { update: (u, t, cam) => { ht.position.set(0, 2.05 + Math.sin(u * 4) * .05, 0); pop(ht, u, .3, 1e9, cam); pop(q, u, .05, ts - .2, cam); pop(sb, u, ts - .1, 1e9, cam); sb.scale.multiplyScalar(1 + .04 * Math.sin(u * 6)); } }; },
  c: [[0, 1.65, 3.3], [0, 1.6, 0], [0, 1.6, 2.8], [0, 1.65, 0]], k: 1.65, range: 3.6, look }; });
// chat grande en primer plano
const CHATQ = (msgs, o, extraFn) => (d, a) => ({ amb: 'cuartoYo', ambo: { night: true }, fov: VF, atores: [],
  extra: (c) => { const m = chat(c, [0, 1.7, 0], .9, msgs(a), o.base || {}); const g = glowSprite('#9AC8FF', 2.4, .3); g.position.set(0, 1.7, -.1); c.add(g); const X = extraFn ? extraFn(c, a) : null;
    return { update: (u, t, cam) => { m.userData.upd(u, o.at ? o.at(u, a) : {}); m.position.y = 1.7 + Math.sin(u * 2) * .015; if (X) X(u, cam); } }; },
  c: [[0, 1.7, 2.9], [0, 1.7, 0], [0, 1.7, 2.55], [0, 1.7, 0]], k: 1, range: 1.8, look: NOCHES });
const escribeS = (k, u) => k.pose({ armL: [22, 20], armR: [28 + Math.sin(u * 14) * 5, 30], head: 4 });

// ===================== SHORTS: ¿Y SI TU CRUSH TE ROBARA LA SUDADERA? =====================
const ELLAS = (o = {}) => ELLA({ outfit: 'hero', ...o });     // ella con TU sudadera
const YOT = (o = {}) => YO({ outfit: 'azul', ...o });          // tú sin sudadera
const camT = (col) => canvasTex(300, 300, (x) => { x.clearRect(0, 0, 300, 300); x.fillStyle = col; x.beginPath(); x.moveTo(90, 40); x.lineTo(20, 90); x.lineTo(50, 140); x.lineTo(80, 120); x.lineTo(80, 270); x.lineTo(220, 270); x.lineTo(220, 120); x.lineTo(250, 140); x.lineTo(280, 90); x.lineTo(210, 40); x.quadraticCurveTo(150, 85, 90, 40); x.fill(); });
const camisetaS = (c, col, w, pos) => { const m = cut(camT(col), w, w); m.position.set(...pos); m.renderOrder = 5; m.castShadow = false; c.add(m); return m; };
const copos = (c, n = 26) => { const B = []; for (let i = 0; i < n; i++) { const g = glowSprite('#FFFFFF', .09, .85); c.add(g); B.push(g); } return (u) => B.forEach((g, i) => { const f = (u * .25 + i / n) % 1; g.position.set(-1.6 + (i * .37) % 3.2 + Math.sin(u + i) * .1, 3.2 - f * 3.2, -.6 + (i % 5) * .35); }); };
const olor = (c, n = 6, col = '#C8F0E8') => { const B = []; for (let i = 0; i < n; i++) { const g = glowSprite(col, .2, 0); c.add(g); B.push(g); } return (u, p, on = 1) => B.forEach((g, i) => { const f = (u * .7 + i / n) % 1; g.position.set(p[0] + Math.sin(f * 7 + i) * .12, p[1] + f * .6, p[2]); g.material.opacity = on * Math.sin(f * Math.PI) * .8; }); };
const hueleS = (k, u) => k.pose({ armL: [140, 160], armR: [140, 160], head: 6 + Math.sin(u * 2) * 3 });
const REC3 = (o = {}) => ({ amb: 'parque', fov: VF, look: TARDES, k: 1.65, ...o });

// 0. ¿Y si tu crush te robara la sudadera?
Q(0, (d, a) => { const ts = R0(a, 'sudadera'), tc = R0(a, 'crush'); return REC3({ atores: [ELLAS({ x: .42, z: 0, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [12, 8], bob: Math.abs(Math.sin(u * 4)) * .03, head: Math.sin(u * 4) * 6 }) }), YOT({ x: -.45, z: .2, eyes: [[0, 'wide']], pose: tiemblaS })],
  extra: (c) => { PATIO(c); const L = SEQ(c, a, [[['TU CRUSH'], tc - .1, 'p', [.42, 2.45, 0], 1.0], [['¡TU SUDADERA!'], ts - .1, 'r', [0, 2.5, .2], 1.5, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.6, 3.4], [0, 1.45, 0], [0, 1.55, 2.9], [0, 1.5, 0]], range: 3 }); });

// 1. Recreo. Hace frío.
Q(1, (d, a) => { const tf = R0(a, 'frio'); return REC3({ atores: [YO({ x: -.45, z: .2, eyes: [[0, 'happy']] }), ELLA({ x: .42, z: 0, eyes: [[0, 'flat']], pose: (k, u) => (u > tf - .3 ? tiritaS(k, u) : k.pose()) })],
  extra: (c) => { PATIO(c); const cp = copos(c); const L = SEQ(c, a, [[['RECREO'], .05, 'y', [0, 2.5, .2], 1.1], [['HACE FRÍO'], tf - .2, 'b', [0, 2.5, .2], 1.3, 1]]); return { update: (u, t, cam) => { cp(u); L(u, cam); } }; },
  c: [[0, 1.6, 3.4], [0, 1.45, 0], [0, 1.55, 2.9], [0, 1.5, 0]], range: 3, look: { exposure: .95, bloom: .3, vig: .55 } }); });

// 2. Ella te la pide: "Solo un momento".
Q(2, (d, a) => { const tsm = R0(a, 'solo'); return REC3({ atores: [YO({ x: -.45, z: .2, eyes: [[0, 'look'], [tsm + .5, 'happy']], pose: (k, u) => (u > tsm + .5 ? nod(k, u) : k.pose()) }), ELLA({ x: .42, z: 0, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [70, 10], lean: Math.sin(u * 3) * 2 }) })],
  extra: (c) => { PATIO(c); const cp = copos(c, 16); const H0 = HSEQ(c, a, [[['¿Me la dejas?'], .05, [.4, 2.35, 0], .95], [['Solo un momento.'], tsm - .1, [.4, 2.35, 0], 1.05]]); return { update: (u, t, cam) => { cp(u); H0(u, cam); } }; },
  c: [[0, 1.6, 3.4], [0, 1.45, 0], [0, 1.55, 2.9], [0, 1.5, 0]], range: 3 }); });

// 3. Pasa una semana.
Q(3, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const D = ['LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES'].map((t, i) => lab(c, [t], 1.3, [0, 1.5, -1], i % 2 ? BLUE : {})); const W = lab(c, ['1 SEMANA'], 1.6, [0, 1.5, -.95], RED); const n = D.length, st = (d - .5) / n;
    return { update: (u, t, cam) => { D.forEach((m, i) => pop(m, u, i * st, (i + 1) * st - .05, cam)); pop(W, u, n * st, 1e9, cam); } }; },
  c: [[0, 1.5, 2.4], [0, 1.5, -1], [0, 1.5, 2.1], [0, 1.5, -1]], range: 3, blur: 4, look: { bloom: .5 } }));

// 4. No te la devuelve.
Q(4, (d, a) => { const tv = R0(a, 'devuelve'); return REC3({ atores: [YOT({ x: -.45, z: .2, eyes: [[0, 'look']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [75, 0], lean: Math.sin(u * 30) * 1.2 }) }), ELLAS({ x: .42, z: 0, eyes: [[0, 'happy']], pose: (k, u) => (u > tv - .4 ? noCabeza(k, u) : k.pose({ armL: [60, 80], armR: [60, 80] })) })],
  extra: (c) => { PATIO(c); const L = SEQ(c, a, [[['NO TE LA DEVUELVE'], tv - .3, 'r', [0, 2.5, .2], 1.7, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.6, 3.4], [0, 1.45, 0], [0, 1.55, 2.9], [0, 1.5, 0]], range: 3 }); });

// 5. La lleva a clase.
Q(5, (d, a) => ({ amb: 'aula', fov: VF, atores: [SENTA(ELLAS, .4, .3, { eyes: [[0, 'happy']], pose: escribeS }), SENTA(YOT, -.55, -.6, { eyes: [[0, 'look']], pose: (k, u) => k.pose({ armL: [8, 6], armR: [8, 6], lean: Math.sin(u * 30) * 1 }) })],
  extra: (c) => { pupitres(c, [.4], .75); pupitres(c, [-.55], -.15); const L = SEQ(c, a, [[['EN CLASE'], .1, 'y', [0, 2.5, .2], 1.1, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.7, 3.8], [0, 1.25, 0], [0, 1.65, 3.4], [0, 1.3, 0]], k: 1.5, range: 3.6, look: TARDES }));

// 6. Y un día te dice: "Huele a ti".
Q(6, (d, a) => { const th = R0(a, 'huele'); return REC3({ atores: [ELLAS({ x: .42, z: 0, eyes: [[0, 'happy'], [th, 'shut']], pose: (k, u) => (u > th - .3 ? hueleS(k, u) : k.pose()) }), YOT({ x: -.45, z: .2, eyes: [[0, 'look'], [th + .5, 'wide']] })],
  extra: (c, s, A) => { PATIO(c); const rb = rubor(A[1]); const ol = olor(c); const ht = corazon(c, .35); const H0 = HSEQ(c, a, [[['Huele a ti.'], th - .1, [.4, 2.35, 0], .9]]);
    return { update: (u, t, cam) => { H0(u, cam); rb(.4 * smooth(th + .4, th + .8, u)); ht.position.set(-.45, 2.2, .2); pop(ht, u, th + .6, 1e9, cam); ht.scale.multiplyScalar(latido(u, 160)); } }; },
  c: [[0, 1.6, 3.2], [0, 1.45, 0], [0, 1.55, 2.7], [0, 1.5, 0]], range: 3 }); });

// 7. Y eso tiene ciencia.
Q(7, (d, a) => { const tc = R0(a, 'ciencia'); return REC3({ atores: [YOT({ x: 0, z: .2, eyes: [[0, 'wide']], pose: encoge })],
  extra: (c) => { PATIO(c); const L = SEQ(c, a, [[['TIENE CIENCIA'], tc - .2, 'p', [0, 2.45, .2], 1.5, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.55, 2.9], [0, 1.45, 0], [0, 1.55, 2.4], [0, 1.5, 0]], range: 2.6 }); });

// 8. En 2018, en Canadá, | unas chicas olieron camisetas que había llevado su pareja.
Qs(8, ['unas'], [
  (d, a) => ({ amb: 'aula', fov: VF, atores: [CIENT(2, { x: -.45, z: 0, eyes: [[0, 'happy']], pose: talkP }), CIENT(5, { x: .5, z: 0, eyes: [[0, 'look']], pose: hold })],
    extra: () => ({ update: () => {} }),
    c: [[0, 1.6, 3.6], [0, 1.55, 0], [0, 1.6, 3.2], [0, 1.6, 0]], k: 1.65, range: 3.4, look: TARDES }),
  (d, a) => { const tp = R0(a, 'pareja'), tl = R0(a, 'olieron'); return { amb: 'aula', fov: VF, atores: [MUJ(0, { x: -.1, z: .3, eyes: [[0, 'look'], [tl, 'shut'], [tp + .3, 'happy']], pose: (k, u) => (u > tl ? hueleS(k, u) : k.pose()) })],
    extra: (c, s, A) => { const cm = camisetaS(c, '#43C4B4', .5, [0, 0, 0]); const ol = olor(c); const L = SEQ(c, a, [[['CAMISETA DE SU PAREJA'], tp - .3, 'p', [0, 2.5, .3], 1.9, 1]]);
      return { update: (u, t, cam) => { const p = hand(A[0]); cm.position.set(p.x - .12, p.y + .05, p.z + .18); pop(cm, u, .1, 1e9, cam); ol(u, [p.x - .1, p.y + .2, p.z + .2], smooth(tl, tl + .3, u)); L(u, cam); } }; },
    c: [[0, 1.65, 3.2], [0, 1.5, 0], [0, 1.6, 2.8], [0, 1.55, 0]], k: 1.5, range: 3, look: TARDES }; },
]);

// 9. Después les hicieron una prueba muy estresante.
Q(9, (d, a) => { const te = R0(a, 'estresante'); return { amb: 'aula', fov: VF, atores: [SENTA((o) => PROF(o), -.65, -.4, { eyes: [[0, 'flat']], pose: escribeS }), SENTA((o) => CIENT(4, o), .1, -.4, { eyes: [[0, 'flat']] }), MUJ(0, { x: .75, z: .8, eyes: [[0, 'wide']], pose: tiemblaS })],
  extra: (c) => { mesa(c, 0, -.1, .75, 2.2, .6, '#C8A27A'); const L = SEQ(c, a, [[['ENTREVISTA FALSA'], .1, 'w', [0, 2.6, .5], 1.7], [['¡ESTRÉS!'], te - .2, 'r', [0, 2.6, .5], 1.2, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.8, 4.2], [0, 1.35, 0], [0, 1.75, 3.8], [0, 1.4, 0]], k: 1.4, range: 4, look: TARDES }; });

// 10. Las que olieron la camiseta de su pareja estaban más tranquilas.
Q(10, (d, a) => { const tt = R0(a, 'tranquilas'); return { amb: 'aula', fov: VF, atores: [MUJ(0, { x: -.62, z: .6, eyes: [[0, 'look'], [tt, 'happy']] })],
  extra: (c) => { const b = barras(c, [['OLOR DE\nSU PAREJA', .35, '#43C4B4'], ['SIN SU\nOLOR', .8, '#E8667F']], 1.15, [.32, 2.2, -.2], { title: 'ESTRÉS' }); const L = SEQ(c, a, [[['MÁS TRANQUILAS'], tt - .2, 'p', [0, 2.95, -.2], 1.5, 1]]); return { update: (u, t, cam) => { pop(b, u, .2, 1e9, cam); L(u, cam); } }; },
  c: [[0, 1.85, 4.6], [0, 1.75, -.2], [0, 1.85, 4.2], [0, 1.8, -.2]], k: 1, range: 4, look: { exposure: .98, bloom: .15, vig: .5 } }; });

// 11. Tu olor, para ella, es como un abrazo.
Q(11, (d, a) => { const ta = R0(a, 'abrazo'); return REC3({ atores: [ELLAS({ x: .4, z: 0, eyes: [[0, 'shut'], [ta, 'heart']], pose: (k, u) => k.pose({ armL: [40, 75], armR: [40, 75], lean: Math.sin(u * 2) * 3 }) }), YOT({ x: -.45, z: .2, eyes: [[0, 'happy']] })],
  extra: (c, s, A) => { PATIO(c); const rb = rubor(A[0]); const B = brillos(c, 10, '#FFD0E0'); const L = SEQ(c, a, [[['COMO UN ABRAZO'], ta - .3, 'p', [0, 2.5, .2], 1.6, 1]]);
    return { update: (u, t, cam) => { rb(.3); B(u, [.4, 2.3, .3, .6], smooth(ta - .3, ta + .2, u)); L(u, cam); } }; },
  c: [[0, 1.6, 3.2], [0, 1.45, 0], [0, 1.55, 2.7], [0, 1.5, 0]], range: 3, look: { exposure: 1.02, bloom: .45, vig: .5 } }); });

// 12. ¿Se la pedirías de vuelta?
Q(12, (d, a) => REC3({ atores: [YOT({ x: -.45, z: .2, eyes: [[0, 'look']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [150, 60], head: 6 }) }), ELLAS({ x: .42, z: 0, eyes: [[0, 'happy']], pose: (k) => k.pose({ armL: [60, 80], armR: [60, 80] }) })],
  extra: (c) => { PATIO(c); const L = SEQ(c, a, [[['¿SE LA PEDIRÍAS?'], .05, 'p', [0, 2.5, .2], 1.6, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.6, 3.4], [0, 1.45, 0], [0, 1.55, 2.9], [0, 1.5, 0]], range: 3 }));

// 13. Si te ha gustado el vídeo, suscríbete.
SUSC(S[13], (ts) => [YOT({ x: -.42, z: 0, eyes: [[0, 'happy']], pose: (k, u) => (u > ts ? wave(k, u) : k.pose()) }), ELLAS({ x: .42, z: 0, eyes: [[0, 'happy']], pose: (k, u) => (u > ts ? wave(k, u + 1) : k.pose()) })], 'parque', TARDES, (c) => PATIO(c));
