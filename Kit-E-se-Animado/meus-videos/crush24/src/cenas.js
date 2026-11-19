// "¿Y si tu crush se enamorara de ti por 24 horas?" — horizontal 1280x720, ~11:06
import * as THREE from 'three';
import { plano, AMBS, box, std, cut, glowSprite, pointer, canvasTex, lightPanel, smooth, lerp, clamp, rng } from './mundo.js';
import { deitar, bubble, wordTex, clock, speechTex, screen, textTex } from './extra.js';
import { S, wt } from './tiempos.js';
import { labelT, globo, tomate, heladeria } from './amb2.js';
import { cartel, caja, libro, balon, camion, sofa } from './amb3.js';
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
const Q = (i, fn) => { const a = S[i], b = end(i), d = Math.min(b, 666.0) - a; CENAS.push([(x, y) => plano(x, y, mk(fn(d, a), d)), a, b]); };
const Qt = (a, b, fn) => { const d = Math.min(b, 666.0) - a; CENAS.push([(x, y) => plano(x, y, mk(fn(d, a), d)), a, b]); };
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

// ===================== CENAS =====================
// 0. Son las doce menos un minuto. Estás en la cama mirando su foto de perfil. Otra vez.
Q(0, (d, a) => { const tf = R0(a, 'foto'), to = R0(a, 'otra'); return { amb: 'cuartoYo', ambo: { night: true }, fov: 32, atores: [YO({ x: -.2, z: -.4, eyes: [[0, 'look'], [tf, 'smug'], [to, 'happy']], pose: (k) => k.pose({ armL: [60, 70], armR: [60, 70], head: -10 }) })],
  extra: (c, s, A) => { const ph = movil(['', ''], { hora: '23:59', bg: '#2A1830' }); ph.scale.setScalar(.35); c.add(ph); const gm = glowMovil(c, A[0]); const ck = lab(c, ['23:59'], 1.0, [.9, 2.1, -.6], { bg: '#1E2230', fg: '#FF7A8A', size: 96, w: 420 }); const r = lw(c, ['OTRA VEZ'], 1.0, [-1.0, 2.1, -.6]);
    return { update: (u, t, cam) => { gm(); naMao(ph, A[0], -.02); ph.lookAt(cam.position); pop(ck, u, .3, 99, cam); pop(r, u, to - .1, 99, cam); } }; },
  c: [[.6, 1.7, 3.2], [-.1, 1.3, -.4], [.3, 1.6, 2.4], [-.1, 1.35, -.4]], range: 2.5, look: NOCHE }; });
// 1. Tu crush. La persona que ni siquiera sabe que existes.
Q(1, (d, a) => { const te = R0(a, 'existes'); return { amb: 'gris', fov: 30, k: 1, atores: [ELA({ x: .9, z: -.6, eyes: [[0, 'look'], [1.2, 'lookl']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [12, 8], head: 4 }) })],
  extra: (c) => { const t = lab(c, ['TU CRUSH'], 1.3, [.9, 2.1, -.6], PINK); const h = corazon(c, .35); h.position.set(.9, 2.45, -.6); const n = lw(c, ['NI SABE QUE EXISTES'], 1.6, [-.5, 1.6, -.4]); return { update: (u, tt, cam) => { pop(t, u, .1, 99, cam); h.scale.setScalar(latido(u, 90) * .9); pop(n, u, te - .3, 99, cam); } }; },
  c: [[0, 1.6, 3.4], [.3, 1.4, -.5], [0, 1.6, 2.8], [.4, 1.45, -.5]], range: 2.5, blur: 8 }; });
// 2. Y entonces, a las doce en punto, te llega un mensaje. De ella.
Q(2, (d, a) => { const tm = R0(a, 'mensaje'), te = R0(a, 'ella'); return { amb: 'cuartoYo', ambo: { night: true }, fov: 30, atores: [YO({ x: 0, z: -.4, eyes: [[0, 'look'], [tm, 'wide']], pose: (k, u) => k.pose({ armL: [60, 70], armR: [60, 70], bob: u > tm && u < tm + .6 ? Math.sin(u * 40) * .01 : 0 }) })],
  extra: (c, s, A) => { const ck = lab(c, ['00:00'], 1.0, [-.9, 2.05, -.6], { bg: '#C9361F', fg: '#fff', size: 96, w: 420 }); const n = lab(c, ['1 MENSAJE NUEVO'], 1.4, [.8, 2.0, -.5], PINK); const e = lw(c, ['DE ELLA'], 1.0, [.8, 1.65, -.4]); const gm = glowMovil(c, A[0]); const ph = movil(['MI CRUSH ♥', '1 mensaje'], { hora: '00:00', bg: '#2A1830' }); ph.scale.setScalar(.35); c.add(ph);
    return { update: (u, t, cam) => { gm(); naMao(ph, A[0], -.02); ph.lookAt(cam.position); pop(ck, u, .1, 99, cam); pop(n, u, tm - .2, 99, cam); pop(e, u, te - .1, 99, cam); } }; },
  c: [[0, 1.6, 2.8], [0, 1.4, -.4], [0, 1.55, 2.0], [0, 1.45, -.4]], range: 2.5, look: NOCHE }; });
// 3. "¿Estás despierto? No puedo dejar de pensar en ti."
Q(3, (d, a) => { const tn = R0(a, 'no'); return { amb: 'gris', fov: 28, k: 1, atores: [],
  extra: (c) => { const ch = chat(c, [0, 1.5, -.5], 1.15, [['l', '¿Estás despierto?', .1], ['l', 'No puedo dejar de pensar en ti.', tn]], { hora: '00:00' }); const h = corazon(c, .3); h.position.set(.85, 2.35, -.3); return { update: (u, t, cam) => { ch.userData.upd(u); h.visible = u > tn + .3; h.scale.setScalar(latido(u, 110) * .9); } }; },
  c: [[0, 1.5, 4.3], [0, 1.5, -.5], [0, 1.5, 3.9], [0, 1.5, -.5]], range: 2, blur: 4 }; });
// 4. Te sientas de golpe. Lo lees diez veces.
Q(4, (d, a) => { const tl = R0(a, 'lees'); return { amb: 'cuartoYo', ambo: { night: true }, fov: 30, atores: [YO({ x: 0, z: -.4, eyes: [[0, 'wide'], [tl, 'small']], move: (u) => [0, Math.max(0, Math.sin(Math.min(u, .6) * 5.2)) * .25, -.4], pose: (k, u) => k.pose({ armL: [60, 70], armR: [60, 70], head: u > tl ? Math.sin(u * 8) * 6 : 0 }) })],
  extra: (c, s, A) => { const x10 = lab(c, ['×10'], .8, [.9, 2.2, -.4], { ...PINK, size: 110, w: 400 }); const gm = glowMovil(c, A[0]); const ph = movil(['MI CRUSH ♥', '¿Estás despierto?'], { hora: '00:00', bg: '#2A1830' }); ph.scale.setScalar(.35); c.add(ph);
    return { update: (u, t, cam) => { gm(); naMao(ph, A[0], -.02); ph.lookAt(cam.position); pop(x10, u, tl, 99, cam); shake(cam, u < .5 ? .03 : 0, u); } }; },
  c: [[.4, 1.6, 2.8], [0, 1.4, -.4], [.2, 1.55, 2.2], [0, 1.45, -.4]], range: 2.5, look: NOCHE }; });
// 5. Y debajo aparece un segundo mensaje, que no ha enviado nadie: "Tienes 24 horas."
Q(5, (d, a) => { const tn = R0(a, 'nadie'), tt = R0(a, 'tienes'); return { amb: 'gris', fov: 28, k: 1, atores: [],
  extra: (c) => { const ch = chat(c, [0, 1.5, -.5], 1.15, [['l', '¿Estás despierto?', 0], ['l', 'No puedo dejar de pensar en ti.', 0], ['s', 'TIENES 24 HORAS', tt]], { hora: '00:00' }); const n = lw(c, ['NO LO HA ENVIADO NADIE'], 1.6, [0, 2.5, .2]); return { update: (u, t, cam) => { ch.userData.upd(u); pop(n, u, tn - .5, 99, cam); shake(cam, u > tt && u < tt + .5 ? .02 : 0, u); } }; },
  c: [[0, 1.5, 4.3], [0, 1.5, -.5], [0, 1.5, 3.8], [0, 1.5, -.5]], range: 2, blur: 4 }; });
// 6. Tu crush se ha enamorado de ti. Pero solo hasta mañana a medianoche.
Q(6, (d, a) => { const tp = R0(a, 'pero'); return { amb: 'cuartoElla', ambo: { night: true }, fov: 30, atores: [ELA({ x: -.2, z: -.2, eyes: [[0, 'heart']], pose: (k, u) => k.pose({ armL: [60, 70], armR: [60, 70], lean: Math.sin(u * 2) * 4 }) })],
  extra: (c, s, A) => { const b = brillos(c, 10, '#FFB0C0'); const h = corazon(c, .4); h.position.set(-.2, 2.55, -.2); const t = lab(c, ['SOLO HASTA MEDIANOCHE'], 1.9, [.2, 2.25, .1], RED); const rb = rubor(A[0]); return { update: (u, tt, cam) => { rb(1); b(u, [-.2, 1.9, -.1, .7]); h.scale.setScalar(latido(u, 100)); pop(t, u, tp, 99, cam); } }; },
  c: [[0, 1.6, 3.0], [-.1, 1.5, -.2], [0, 1.6, 2.4], [-.1, 1.55, -.2]], range: 2.5, look: NOCHE }; });
// 7. Suscríbete
Q(7, (d, a) => { const ts = R0(a, 'suscribete'); return { amb: 'cuartoYo', ambo: { night: true }, fov: 32, atores: [YO({ x: -1.0, z: -.3, eyes: [[0, 'look'], [ts, 'happy']], pose: (k, u) => (u > ts ? wave(k, u) : k.pose()) })],
  extra: (c) => { const sb = suscribe(2.4); sb.position.set(.7, 1.8, -1.0); c.add(sb); const b = brillos(c, 14, '#FFE27A'); const q = QUEDAN(c, [-1.0, 2.35, -.3], 'CUENTA ATRÁS: 24:00:00', 2.0); return { update: (u, t, cam) => { pop(q, u, .2, 99, cam); const k2 = smooth(ts - .3, ts, u); sb.scale.setScalar(Math.max(.01, k2)); sb.rotation.z = u > ts + .6 && u < ts + 1.6 ? Math.sin(u * 40) * .05 : 0; b(u, [.7, 1.8, -.9, 1.1], smooth(ts, ts + .3, u)); } }; },
  c: [[0, 1.7, 3.8], [0, 1.5, -.6], [0, 1.65, 3.2], [0, 1.5, -.6]], range: 3, look: NOCHE }; });
// 8. Vamos a ver qué haces con las 24 horas más importantes de tu vida
Q(8, (d, a) => { const tv = R0(a, 'vida'); return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: -.9, z: -.5, eyes: [[0, 'look'], [tv - .5, 'smug']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [150, 30] }) }), ELA({ x: .9, z: -.5, eyes: [[0, 'heart']], pose: (k, u) => k.pose({ armL: [150, 30], armR: [12, 8] }) })],
  extra: (c) => { const r = cut(anillo(24), 2.2, 2.2); r.position.set(0, 2.1, -2); c.add(r); const t = lab(c, ['24 HORAS'], 1.4, [0, 2.1, -1.9], { ...PINK, size: 90, w: 520 }); const v = lw(c, ['LAS MÁS IMPORTANTES DE TU VIDA'], 2.4, [0, .85, -.3]); return { update: (u, tt, cam) => { r.rotation.z = -u * .2; pop(t, u, .2, 99, cam); pop(v, u, tv - .8, 99, cam); } }; },
  c: [[0, 1.7, 4.0], [0, 1.6, -.8], [0, 1.6, 3.4], [0, 1.6, -.8]], range: 3, look: { bloom: .45 } }; });
// 9. Hora uno
CARD(9, 1, 'HORA 1', 'QUEDAN 23');
// 10. No sabes qué contestar. Escribes hola. Lo borras... emoji
Qs(10, ['hola', 'final'], [
  (d, a) => ({ amb: 'cuartoYo', ambo: { night: true }, fov: 30, atores: [YO({ x: 0, z: -.4, eyes: [[0, 'flat'], [R0(a, 'hola'), 'look']], pose: (k, u) => k.pose({ armL: [60, 70], armR: [60, 70], head: -8 }) })],
    extra: (c, s, A) => { const gm = glowMovil(c, A[0]); const ph = movil(['', ''], { hora: '00:01', bg: '#2A1830' }); ph.scale.setScalar(.35); c.add(ph); const t = lw(c, ['¿QUÉ LE CONTESTO?'], 1.6, [0, 2.3, -.4]); return { update: (u, tt, cam) => { gm(); naMao(ph, A[0], -.02); ph.lookAt(cam.position); pop(t, u, .2, 99, cam); } }; },
    c: [[.4, 1.6, 2.8], [0, 1.4, -.4], [.2, 1.55, 2.2], [0, 1.45, -.4]], range: 2.5, look: NOCHE }),
  (d, a) => { const t1 = R0(a, 'borras'), t2 = R0(a, 'tambien'), t3 = R0(a, 'borras', t2 + .1), t4 = R0(a, 'jaja'), t5 = R0(a, 'borras', t4 + .1); return { amb: 'gris', fov: 28, k: 1, atores: [],
    extra: (c) => { const ch = chat(c, [0, 1.5, -.5], 1.15, [['l', '¿Estás despierto?', 0], ['l', 'No puedo dejar de pensar en ti.', 0]], { hora: '00:01' }); const opts = [['hola', 0, t1], ['yo también', t2 - .3, t3], ['jaja', t4 - .3, t5]]; const L = opts.map(([tx]) => lw(c, [tx.toUpperCase()], 1.0, [0, .7, -.2])); const X = opts.map(() => lab(c, ['BORRAR'], .7, [.75, .95, -.15], { ...RED, size: 60, w: 300 }));
      return { update: (u, tt, cam) => { ch.userData.upd(u, { typing: true }); opts.forEach(([, s0, s1], i) => { pop(L[i], u, s0, s1 + .5, cam); pop(X[i], u, s1, s1 + .5, cam); }); } }; },
    c: [[0, 1.4, 4.3], [0, 1.3, -.5], [0, 1.4, 3.9], [0, 1.3, -.5]], range: 2, blur: 4 }; },
  (d, a) => { const te = R0(a, 'emoji'), tq = R0(a, 'desaparecer'); return { amb: 'cuartoYo', ambo: { night: true }, fov: 30, atores: [YO({ x: 0, z: -.4, eyes: [[0, 'look'], [tq - .4, 'shut']], pose: (k, u) => (u > tq - .4 ? k.pose({ armL: [150, 120], armR: [150, 120], head: 10 }) : k.pose({ armL: [60, 70], armR: [60, 70] })) })],
    extra: (c) => { const ch = chat(c, [1.1, 1.5, -.7], .6, [['l', '¿Estás despierto?', 0], ['l', 'No puedo dejar de pensar en ti.', 0], ['r', '@smile', te]], { hora: '00:02' }); const t = lab(c, ['QUIERES DESAPARECER'], 1.7, [-.4, 2.35, -.4], RED); return { update: (u, tt, cam) => { ch.userData.upd(u); pop(t, u, tq - .3, 99, cam); } }; },
    c: [[.3, 1.6, 3.0], [.3, 1.4, -.5], [.2, 1.55, 2.5], [.3, 1.45, -.5]], range: 2.5, look: NOCHE }; },
]);
// 11. Pero ella contesta en un segundo: un corazón. Y luego otro. Y luego un audio de 40 segundos riéndose
Qs(11, ['audio'], [
  (d, a) => { const tc = R0(a, 'corazon'), to = R0(a, 'otro'); return { amb: 'gris', fov: 28, k: 1, atores: [],
    extra: (c) => { const ch = chat(c, [0, 1.5, -.5], 1.15, [['l', '¿Estás despierto?', 0], ['l', 'No puedo dejar de pensar en ti.', 0], ['r', '@smile', 0], ['l', '@heart', tc], ['l', '@heart', to]], { hora: '00:02' }); const b = brillos(c, 10, '#FFB0C0'); return { update: (u, tt, cam) => { ch.userData.upd(u); b(u, [0, 1.5, -.2, .9], u > tc ? 1 : 0); } }; },
    c: [[0, 1.5, 4.3], [0, 1.5, -.5], [0, 1.5, 3.8], [0, 1.5, -.5]], range: 2, blur: 4 }; },
  (d, a) => ({ amb: 'cuartoElla', ambo: { night: true }, fov: 30, atores: [ELA({ x: -.2, z: -.2, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [60, 70], armR: [80 + Math.sin(u * 12) * 6, 60], bob: Math.abs(Math.sin(u * 12)) * .02, head: Math.sin(u * 12) * 5 }) })],
    extra: (c) => { const t = lab(c, ['AUDIO · 0:40'], 1.3, [-.2, 2.35, -.2], PINK); const j = lw(c, ['¡JAJAJAJA!'], 1.1, [.9, 1.9, -.1]); return { update: (u, tt, cam) => { pop(t, u, .1, 99, cam); pop(j, u, .8, 99, cam); } }; },
    c: [[0, 1.6, 3.0], [-.1, 1.45, -.2], [0, 1.6, 2.4], [-.1, 1.5, -.2]], range: 2.5, look: NOCHE }),
]);
// 12. Cuando te gusta alguien de verdad, tu cerebro suelta dopamina
Q(12, (d, a) => { const td = R0(a, 'dopamina'); return { amb: 'lab', fov: 30, k: 1, atores: [],
  extra: (c) => { const br = cerebro(c, [0, 1.4, -.6], 1.7); const t = lab(c, ['DOPAMINA'], 1.3, [0, 2.3, -.5], { bg: '#F2C14E', fg: '#2A2A34', size: 90, w: 560 }); const e = lw(c, ['CUANDO TE GUSTA ALGUIEN'], 2.0, [0, .95, -.4]); const b = brillos(c, 12, '#FFE27A'); return { update: (u, tt, cam) => { br(u > td); pop(e, u, .2, td, cam); pop(t, u, td, 99, cam); b(u, [.1, 1.4, -.4, .7], u > td ? 1 : 0); } }; },
  c: [[0, 1.5, 3.0], [0, 1.5, -.6], [0, 1.5, 2.4], [0, 1.5, -.6]], range: 2.5, blur: 6, look: { bloom: .5 } }; });
// 13. La misma sustancia que cuando ganas en un videojuego o comes algo riquísimo
Q(13, (d, a) => { const tv = R0(a, 'videojuego'), tc = R0(a, 'comes'); return { amb: 'sala', ambo: { wall: '#5A4A8A' }, fov: 32, atores: [YO({ x: -.8, z: -.3, eyes: [[0, 'look'], [tv, 'happy']], pose: (k, u) => k.pose({ armL: [60, 70], armR: [60 + Math.sin(u * 14) * 6, 70] }) }), YO({ x: .9, z: -.3, eyes: [[0, 'look'], [tc, 'happy']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [100 + Math.sin(u * 6) * 20, 60] }) })],
  extra: (c) => { const g = lab(c, ['¡HAS GANADO!'], 1.3, [-.8, 2.3, -.3]); const p = lw(c, ['¡QUÉ RICO!'], 1.1, [.9, 2.3, -.3]); const tv2 = screen(c, ['WIN!'], 1.1, .62, { bg: '#2A1A58', fg: '#F2C14E', size: 120 }); tv2.position.set(-.8, 1.2, -2.2); const bg = burger(); bg.position.set(.9, 1.0, .1); bg.scale.setScalar(.9); c.add(bg); const dp = lab(c, ['+ DOPAMINA'], 1.2, [0, .85, 0], { bg: '#F2C14E', fg: '#2A2A34' });
    return { update: (u, t, cam) => { pop(g, u, tv, 99, cam); pop(p, u, tc, 99, cam); pop(dp, u, tc + .6, 99, cam); bg.visible = u > tc - .3; } }; },
  c: [[0, 1.6, 3.8], [0, 1.4, -.4], [0, 1.6, 3.2], [0, 1.4, -.4]], range: 3 }; });
// 14. La antropóloga Helen Fisher metió a personas enamoradas en un escáner
Q(14, (d, a) => { const te = R0(a, 'escaner'); return { amb: 'lab', fov: 32, atores: [CIENT(2, { x: 1.2, z: -.2, eyes: [[0, 'look']], pose: (k, u) => talkP(k, u) }), DORM(YO, { x: -.6, z: -.6, y: .75 })],
  extra: (c) => { const m = new THREE.Mesh(new THREE.TorusGeometry(.75, .3, 16, 32), std('#E8ECF2', { roughness: .3 })); m.position.set(-1.5, .9, -.6); m.rotation.y = Math.PI / 2; c.add(m); c.add(box(2.6, .2, .7, std('#C8CCD4'), -.8, .6, -.6)); const n = lab(c, ['HELEN FISHER'], 1.4, [1.2, 2.35, -.2], BLUE); const e = lw(c, ['ESCÁNER CEREBRAL'], 1.5, [-1.2, 2.0, -.6]); return { update: (u, t, cam) => { pop(n, u, .2, 99, cam); pop(e, u, te - .2, 99, cam); } }; },
  c: [[.2, 1.8, 3.8], [0, 1.2, -.5], [0, 1.7, 3.2], [0, 1.2, -.5]], range: 3 }; });
// 15. Les enseñó una foto de la persona que les gustaba y se les encendió el sistema de recompensa
Q(15, (d, a) => { const tf = R0(a, 'foto'), te = R0(a, 'encendio'); return { amb: 'lab', fov: 30, k: 1, atores: [],
  extra: (c) => { const f = cut(caraT('♥', '#D66A86'), .8, 1.04); f.position.set(-1.1, 1.5, -.6); c.add(f); const br = cerebro(c, [.7, 1.5, -.6], 1.6); const t = lab(c, ['SISTEMA DE RECOMPENSA'], 1.7, [.45, 2.25, -.5], { bg: '#F2C14E', fg: '#2A2A34' }); const b = brillos(c, 12, '#FFE27A'); return { update: (u, tt, cam) => { f.visible = u > tf - .2; br(u > te); pop(t, u, te + .2, 99, cam); b(u, [.8, 1.4, -.4, .6], u > te ? 1 : 0); } }; },
  c: [[0, 1.5, 3.0], [-.1, 1.5, -.6], [0, 1.5, 2.6], [.1, 1.5, -.6]], range: 2.5, blur: 6, look: { bloom: .5 } }; });
// 16. El amor, por dentro, funciona un poco como un premio
Q(16, (d, a) => { const tp = R0(a, 'premio'); return { amb: 'gris', fov: 30, atores: [YO({ x: 0, z: -.3, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [150, 30], armR: [150, 30], bob: Math.abs(Math.sin(u * 6)) * .03 }) })],
  extra: (c) => { const tr = new THREE.Group(); const gm = std('#F2C14E', { metalness: .7, roughness: .3 }); const cup = new THREE.Mesh(new THREE.CylinderGeometry(.3, .12, .45, 20), gm); cup.position.y = .5; tr.add(cup); tr.add(box(.08, .3, .08, gm, 0, .15, 0)); tr.add(box(.36, .06, .36, gm, 0, .02, 0)); const h = cut(wordTex('♥', '#E8445A', 170), .3, .24); h.position.set(0, .5, .31); tr.add(h); tr.position.set(0, 1.95, -.3); c.add(tr); const t = lab(c, ['EL AMOR = UN PREMIO'], 2.0, [0, .85, 0]); const b = brillos(c, 12, '#FFE27A'); return { update: (u, tt, cam) => { tr.rotation.y = Math.sin(u * 2) * .4; pop(t, u, tp - .6, 99, cam); b(u, [0, 2.2, -.2, .6]); } }; },
  c: [[0, 1.7, 3.4], [0, 1.6, -.3], [0, 1.65, 2.8], [0, 1.6, -.3]], range: 2.5, look: { bloom: .5 } }; });
// 17. Por eso no puedes dormir. Son las tres de la mañana y seguís hablando.
Q(17, (d, a) => { const t3 = R0(a, '3'); return { amb: 'cuartoYo', ambo: { night: true }, fov: 30, atores: [YO({ x: 0, z: -.4, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [60, 70], armR: [60, 70], head: Math.sin(u * 3) * 5 }) })],
  extra: (c, s, A) => { const gm = glowMovil(c, A[0]); const ph = movil(['', ''], { hora: '03:00', bg: '#2A1830' }); ph.scale.setScalar(.35); c.add(ph); const ck = clock(.55, 3); ck.position.set(-1.0, 2.0, -.8); c.add(ck); const t = lab(c, ['03:00 · SEGUÍS HABLANDO'], 2.1, [.3, 2.4, -.5], { bg: '#1E2230', fg: '#FF7A8A' }); return { update: (u, tt, cam) => { gm(); naMao(ph, A[0], -.02); ph.lookAt(cam.position); pop(t, u, t3 - .2, 99, cam); } }; },
  c: [[.4, 1.6, 3.0], [0, 1.5, -.4], [.2, 1.55, 2.4], [0, 1.5, -.4]], range: 2.5, look: NOCHE }; });
// 18. Y por eso no puedes pensar en otra cosa
Q(18, (d, a) => ({ amb: 'gris', fov: 30, atores: [YO({ x: -.7, z: -.3, eyes: [[0, 'smug']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [130, 100], head: 8 }) })],
  extra: (c) => { const F = [0, 1, 2, 3, 4].map((i) => { const m = cut(caraT('♥', ['#D66A86', '#E8667F', '#C95A7A', '#D66A86', '#E88A9F'][i]), .5, .65); m.position.set(.3 + (i % 3) * .6, 2.0 + Math.floor(i / 3) * .7, -.6 - (i % 2) * .2); c.add(m); return m; }); const t = lw(c, ['SOLO PIENSAS EN ELLA'], 1.7, [0, .85, 0]); return { update: (u, tt, cam) => { F.forEach((m, i) => { m.visible = u > i * .4; m.rotation.z = Math.sin(u * 2 + i) * .1; }); pop(t, u, 1.0, 99, cam); } }; },
  c: [[0, 1.8, 3.6], [.1, 1.7, -.5], [0, 1.75, 3.0], [.1, 1.7, -.5]], range: 3, look: DREAM }));
// 19. En 1999, Donatella Marazziti analizó la sangre de personas recién enamoradas
Q(19, (d, a) => { const ts = R0(a, 'sangre'); return { amb: 'lab', fov: 32, atores: [CIENT(4, { x: .9, z: -.3, eyes: [[0, 'look'], [ts, 'smug']], pose: (k) => k.pose({ armL: [12, 8], armR: [80, 40] }) }), YO({ x: -.9, z: -.3, eyes: [[0, 'heart']], pose: (k) => k.pose({ armL: [12, 8], armR: [70, 0] }) })],
  extra: (c) => { const T = [0, 1, 2, 3].map((i) => { const g = new THREE.Group(); g.add(new THREE.Mesh(new THREE.CylinderGeometry(.05, .05, .35, 12), std('#EEF4FA', { roughness: .1, transparent: true, opacity: .6 }))); const r = new THREE.Mesh(new THREE.CylinderGeometry(.045, .045, .2, 12), std('#B0202A')); r.position.y = -.07; g.add(r); g.position.set(-.3 + i * .2, 1.25, .2); c.add(g); return g; }); c.add(box(1.2, .06, .5, std('#C8CCD4'), 0, 1.05, .2)); for (const [x, z] of [[-.5, .0], [.5, .0], [-.5, .4], [.5, .4]]) c.add(box(.05, 1.05, .05, std('#8A8E98'), x, .52, z)); const n = lab(c, ['DONATELLA MARAZZITI'], 2.0, [.9, 2.4, -.3], BLUE); const r = lw(c, ['RECIÉN ENAMORADOS'], 1.5, [-.9, 2.25, -.3]); return { update: (u, tt, cam) => { pop(n, u, 1.2, 99, cam); pop(r, u, R0(a, 'recien') - .2, 99, cam); T.forEach((g, i) => (g.visible = u > ts - .3 + i * .15)); } }; },
  c: [[0, 1.7, 3.8], [0, 1.4, -.2], [0, 1.65, 3.2], [0, 1.4, -.2]], range: 3 }; });
// 20. Tenían la serotonina tan baja como las personas con obsesiones
Q(20, (d, a) => { const tb = R0(a, 'baja'), to = R0(a, 'obsesiones'); return { amb: 'lab', fov: 30, k: 1, atores: [],
  extra: (c) => { const b1 = barras(c, [['NORMAL', .95, '#5FA0D8']], 1.2, [-1.3, 1.5, -.6], { title: 'SEROTONINA' }); const b2 = barras(c, [['NORMAL', .95, '#5FA0D8'], ['ENAMORADOS', .4, '#E8667F']], 1.9, [0, 1.5, -.6], { title: 'SEROTONINA' }); const b3 = barras(c, [['NORMAL', .95, '#5FA0D8'], ['ENAMORADOS', .4, '#E8667F'], ['OBSESIONES', .4, '#8A6AC8']], 2.6, [0, 1.5, -.6], { title: 'SEROTONINA' }); const t = lw(c, ['CALMA LOS PENSAMIENTOS'], 1.9, [0, 2.5, -.5]);
    return { update: (u, tt, cam) => { b1.visible = false; b2.visible = u < to - .1; b3.visible = u >= to - .1; pop(t, u, .8, tb - .2, cam); } }; },
  c: [[0, 1.5, 2.8], [0, 1.5, -.6], [0, 1.5, 2.4], [0, 1.5, -.6]], range: 2.5, blur: 6 }; });
// 21. Es decir: enamorarse es, literalmente, obsesionarse un poquito
Q(21, (d, a) => { const to = R0(a, 'obsesionarse'); return { amb: 'cuartoYo', ambo: { night: true }, fov: 30, atores: [YO({ x: 0, z: -.4, eyes: [[0, 'heart']], pose: (k, u) => k.pose({ armL: [70, 80], armR: [70, 80], lean: Math.sin(u * 3) * 6 }) })],
  extra: (c) => { const t = lab(c, ['ENAMORARSE = OBSESIONARSE'], 2.3, [0, 2.4, -.4], PINK); const p = lw(c, ['UN POQUITO'], 1.0, [0, 2.0, -.3]); const b = brillos(c, 10, '#FFB0C0'); return { update: (u, tt, cam) => { pop(t, u, to - .4, 99, cam); pop(p, u, to + .5, 99, cam); b(u, [0, 1.6, -.2, .7]); } }; },
  c: [[0, 1.6, 3.0], [0, 1.5, -.4], [0, 1.6, 2.5], [0, 1.5, -.4]], range: 2.5, look: NOCHE }; });
// ---- decorados del instituto ----
const INSTI = (c) => { const s = cartel(['INSTITUTO'], 2.6, { bg: '#2F5A9A', fg: '#fff' }); s.position.set(0, 3.2, -4.2); c.add(s); };
const pizarra = (c, lines) => { const m = screen(c, lines, 4.2, 1.6, { bg: '#2F5A48', fg: '#F4F0E4', size: 64, font: 'Caveat', w: 1024, h: 390 }); m.position.set(0, 2.3, -3.38); return m; };
const pupitres = (c, xs, z = -.1) => { for (const x of xs) { c.add(box(1.0, .06, .6, std('#C8A27A'), x, .75, z)); for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) c.add(box(.05, .75, .05, std('#6A6E78'), x + a * .44, .37, z + b * .25)); } };
const bocadillo = () => { const g = new THREE.Group(); g.add(box(.32, .1, .12, std('#E0A860'), 0, 0, 0)); g.add(box(.3, .03, .13, std('#C9361F'), 0, .055, 0)); g.add(box(.32, .07, .12, std('#E0A860'), 0, .1, 0)); return g; };
const AULA = (o = {}) => ({ amb: 'aula', fov: 32, ...o });
const QA = (c) => pizarra(c, ['x² + 3x = 10', 'x = ?']);

// 22. Hora 8
CARD(22, 8, 'HORA 8', 'QUEDAN 16');
// 23. Suena el despertador. Has dormido dos horas.
Q(23, (d, a) => { const tdh = R0(a, 'dormido'); return { amb: 'cuartoYo', fov: 30, atores: [YO({ x: .2, z: -.4, eyes: [[0, 'shut'], [.8, 'flat']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > .8 ? 150 : 12, 40], head: -8, lean: Math.sin(u * 2) * 3 }) })],
  extra: (c) => { const ck = clock(.5, 7); ck.position.set(-1.0, 1.4, -.3); c.add(ck); const r = lab(c, ['¡RIIIING!'], 1.0, [-1.0, 2.0, -.3], RED); const t = lw(c, ['DORMIDO: 2 HORAS'], 1.5, [.6, 2.15, -.4]); const z = zzz(c); return { update: (u, tt, cam) => { ck.rotation.z = u < 1.5 ? Math.sin(u * 50) * .12 : 0; pop(r, u, 0, 1.5, cam); pop(t, u, tdh - .2, 99, cam); z(u, [.5, 2.2, -.4], cam, u > tdh); } }; },
  c: [[0, 1.6, 3.2], [-.1, 1.5, -.4], [0, 1.6, 2.6], [-.1, 1.5, -.4]], range: 2.5, look: { exposure: 1.05 } }; });
// 24. Te miras al espejo: ojeras, pelo de lado, mancha de kétchup. El peor momento para ver a tu crush
Q(24, (d, a) => { const tp = R0(a, 'peor'); return { amb: 'cuartoYo', fov: 30, atores: [YO({ x: .5, z: -.2, eyes: [[0, 'flat'], [tp, 'sad']], pose: (k) => k.pose({ armL: [12, 8], armR: [12, 8], head: 14 }) })],
  extra: (c, s, A) => { espejo(c, -.8, -.9); const kt = cut(wordTex('●', '#C9361F', 170), .16, .13); kt.position.set(.06, -.3, .2); A[0].torso.add(kt); const L = SEQ(c, a, [[['OJERAS'], 'ojeras', 'w', [1.35, 2.05, -.2], 1.0, 1], [['PELO DE LADO'], 'pelo', 'w', [1.45, 1.65, -.2], 1.3, 1], [['KÉTCHUP'], 'ketchup', 'r', [1.35, 1.25, -.2], 1.0, 1], [['EL PEOR MOMENTO'], 'peor', 'y', [-.5, 2.15, -.5], 1.6, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[.2, 1.6, 3.2], [.2, 1.5, -.3], [.2, 1.6, 2.7], [.3, 1.5, -.3]], range: 2.5 }; });
// 25. Y en ese momento te escribe: "Te espero en la puerta del instituto."
Q(25, (d, a) => { const tt = R0(a, 'espero'); return { amb: 'gris', fov: 28, k: 1, atores: [],
  extra: (c) => { const ch = chat(c, [0, 1.5, -.5], 1.15, [['l', 'Buenos días ♥', .2], ['l', 'Te espero en la puerta del instituto.', tt - .2]], { hora: '07:45' }); return { update: (u) => ch.userData.upd(u) }; },
  c: [[0, 1.5, 4.3], [0, 1.5, -.5], [0, 1.5, 3.8], [0, 1.5, -.5]], range: 2, blur: 4 }; });
// 26. Te cambias tres veces de ropa. Te echas medio bote de colonia.
Q(26, (d, a) => { const tc = R0(a, 'colonia'); const sw = (i) => (u) => (Math.min(2, Math.floor(u / Math.max(.6, (tc - .3) / 3))) === i ? [0, 0, -.3] : [0, 0, 30]); return { amb: 'cuartoYo', fov: 30, atores: [YO({ outfit: 'laranja', move: sw(0), eyes: [[0, 'flat']] }), YO({ outfit: 'azul', move: sw(1), eyes: [[0, 'lookl']] }), YO({ move: sw(2), eyes: [[0, 'smug']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > tc ? 110 : 12, 60] }) })],
  extra: (c) => { const x3 = lab(c, ['×3'], .7, [-1.0, 2.1, -.3], { ...PINK, size: 110, w: 360 }); const bt = new THREE.Mesh(new THREE.CylinderGeometry(.08, .1, .28, 16), std('#8AC8F2', { roughness: .1, transparent: true, opacity: .75 })); bt.position.set(.55, 1.55, .1); c.add(bt); const col = lw(c, ['MEDIO BOTE DE COLONIA'], 1.8, [.4, 2.15, -.3]); const b = brillos(c, 14, '#CFE8FF'); return { update: (u, tt, cam) => { pop(x3, u, .3, tc - .2, cam); bt.visible = u > tc - .1; pop(col, u, tc, 99, cam); b(u, [0, 1.6, 0, .6], u > tc ? 1 : 0); } }; },
  c: [[0, 1.6, 3.2], [0, 1.45, -.3], [0, 1.6, 2.7], [0, 1.45, -.3]], range: 2.5 }; });
// 27. Sales corriendo
Q(27, (d, a) => ({ amb: 'barrio', fov: 34, atores: [YO({ eyes: [[0, 'wide']], move: (u) => [lerp(-3, 2.5, u / 1.6), 0, 0], pose: (k, u) => { k.walk(u * 2.2); k.pose({ lean: 12 }); } })],
  extra: (c) => { const t = lw(c, ['¡TARDE!'], .9, [0, 2.3, -.3]); return { update: (u, tt, cam) => pop(t, u, .1, 99, cam) }; },
  c: [[0, 1.5, 4.6], [0, 1.2, 0], [.3, 1.5, 4.4], [.3, 1.2, 0]], range: 4 }));
// 28. Ella está ahí. Esperándote. A ti.
Q(28, (d, a) => { const ta = R0(a, 'ti'); return { amb: 'barrio', fov: 32, atores: [ELA({ x: .4, z: -.6, eyes: [[0, 'happy']], pose: wave }), YO({ x: -1.2, z: .2, eyes: [[0, 'wide']] })],
  extra: (c) => { INSTI(c); const t = lab(c, ['¿A TI?'], .9, [-1.2, 2.2, .2], PINK); return { update: (u, tt, cam) => pop(t, u, ta - .1, 99, cam) }; },
  c: [[-.2, 1.6, 4.0], [-.2, 1.5, -.3], [-.2, 1.6, 3.4], [-.2, 1.5, -.3]], range: 3.5 }; });
// 29. La gente que pasa os mira como si fuerais un fenómeno paranormal
Q(29, (d, a) => { const tf = R0(a, 'fenomeno'); return { amb: 'barrio', fov: 34, atores: [YO({ x: -.3, z: -.4, eyes: [[0, 'happy']] }), ELA({ x: .4, z: -.4, eyes: [[0, 'heart']] }), ...[0, 1, 2].map((i) => EXTRA(i + 2, { eyes: [[0, 'wide']], move: (u) => [lerp(-3.5 + i * .9, 3.5, u / 5) - i * .4, 0, .8 + i * .25], pose: (k, u) => k.walk(u + i) }))],
  extra: (c) => { INSTI(c); const t = lab(c, ['FENÓMENO PARANORMAL'], 1.9, [0, 2.15, -.3], { bg: '#4A2A7A', fg: '#C8FF8A' }); return { update: (u, tt, cam) => pop(t, u, tf - .2, 99, cam) }; },
  c: [[0, 1.7, 4.6], [0, 1.4, -.2], [0, 1.65, 4.1], [0, 1.4, -.2]], range: 4 }; });
// 30. Tu mejor amigo se queda congelado con el bocadillo en la boca
Q(30, (d, a) => { const tc = R0(a, 'congelado'); return { amb: 'barrio', fov: 30, atores: [AMIGO({ x: 0, z: -.2, eyes: [[0, 'look'], [tc - .2, 'wide']], pose: (k) => k.pose({ armL: [12, 8], armR: [120, 70] }) })],
  extra: (c, s, A) => { INSTI(c); const bc = bocadillo(); c.add(bc); const t = lab(c, ['CONGELADO'], 1.1, [.9, 2.05, -.2], BLUE); const n = lw(c, ['TU MEJOR AMIGO'], 1.3, [-.9, 2.05, -.2]); return { update: (u, tt, cam) => { const p = new THREE.Vector3(); A[0].head.getWorldPosition(p); bc.position.set(p.x + .05, p.y - .15, p.z + .3); pop(n, u, .2, 99, cam); pop(t, u, tc, 99, cam); } }; },
  c: [[0, 1.65, 3.0], [0, 1.5, -.2], [0, 1.65, 2.5], [0, 1.55, -.2]], range: 2.5, look: { exposure: 1.0 } }; });
// 31. Ella te saluda. Y tú le dices: "Buenas tardes." Son las ocho de la mañana.
Q(31, (d, a) => { const tb = R0(a, 'buenas'), tm = R0(a, 'manana'); return { amb: 'barrio', fov: 30, atores: [ELA({ x: .7, z: -.3, eyes: [[0, 'happy']], pose: (k, u) => (u < tb ? wave(k, u) : k.pose()) }), YO({ x: -.7, z: -.3, eyes: [[0, 'look'], [tb, 'smug'], [tm - .3, 'wide']], pose: (k, u) => (u > tb - .3 ? k.pose({ armL: [12, 8], armR: [110, 20] }) : k.pose()) })],
  extra: (c) => { INSTI(c); const g = gl(c, '¡Buenas tardes!', 1.4, [-.5, 2.25, -.2]); const t = lab(c, ['8:00 DE LA MAÑANA'], 1.7, [.4, .9, .3], RED); return { update: (u, tt, cam) => { pop(g, u, tb, 99, cam); pop(t, u, tm - .3, 99, cam); } }; },
  c: [[0, 1.6, 3.4], [0, 1.45, -.3], [0, 1.6, 2.9], [0, 1.45, -.3]], range: 3 }; });
// 32. Pero ella se ríe
Q(32, (d, a) => ({ amb: 'barrio', fov: 28, atores: [ELA({ x: .2, z: -.3, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [70, 80], armR: [12, 8], bob: Math.abs(Math.sin(u * 12)) * .02, head: Math.sin(u * 12) * 5 }) })],
  extra: (c, s, A) => { INSTI(c); const rb = rubor(A[0]); const t = lw(c, ['SE RÍE'], .9, [1.0, 2.05, -.3]); return { update: (u, tt, cam) => { rb(.6); pop(t, u, .2, 99, cam); } }; },
  c: [[0, 1.65, 2.8], [.2, 1.55, -.3], [0, 1.65, 2.4], [.2, 1.6, -.3]], range: 2.5 }));
// 33. Cuando alguien te gusta, tus pupilas se hacen más grandes al mirarlo
Q(33, (d, a) => { const tp = R0(a, 'pupilas'), tg = R0(a, 'grandes'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const o = ojo(c, [0, 1.45, -.5], 2.2); const t = lab(c, ['PUPILAS'], 1.1, [0, 2.15, -.4]); return { update: (u, tt, cam) => { o.userData.set(smooth(tg - .4, tg + .8, u)); pop(t, u, tp - .2, 99, cam); } }; },
  c: [[0, 1.5, 3.0], [0, 1.5, -.5], [0, 1.5, 2.6], [0, 1.5, -.5]], range: 2.5, blur: 4 }; });
// 34. En los años 60, Eckhard Hess estudió cómo las pupilas cambian de tamaño
Q(34, (d, a) => { const tt = R0(a, 'tamano'); return { amb: 'lab', fov: 32, atores: [ABUELO({ x: 1.1, z: -.2, glasses: true, eyes: [[0, 'look']], pose: point })],
  extra: (c) => { const o = ojo(c, [-.6, 1.6, -.8], 1.8); const n = lab(c, ['ECKHARD HESS'], 1.4, [1.1, 2.2, -.2], BLUE); const t = lw(c, ['SEGÚN LO QUE NOS INTERESA'], 2.1, [-.5, .85, -.4]); return { update: (u, tt2, cam) => { o.userData.set(.5 + .45 * Math.sin(u * 1.5)); pop(n, u, 2.5, 99, cam); pop(t, u, tt + .3, 99, cam); } }; },
  c: [[0, 1.6, 3.8], [0, 1.5, -.4], [0, 1.6, 3.2], [0, 1.5, -.4]], range: 3 }; });
// 35. Y hoy lo estás viendo en directo: sus ojos parecen dos monedas negras
Q(35, (d, a) => { const tm = R0(a, 'monedas'); return { amb: 'barrio', fov: 26, atores: [ELA({ x: 0, z: -.3, eyes: [[0, 'look'], [tm - .5, 'wide']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [12, 8], head: Math.sin(u) * 3 }) })],
  extra: (c, s, A) => { INSTI(c); const rb = rubor(A[0]); const t = lab(c, ['EN DIRECTO'], 1.0, [-.8, 2.0, -.3], RED); const m = lw(c, ['DOS MONEDAS NEGRAS'], 1.4, [.85, 1.2, .1]); return { update: (u, tt, cam) => { rb(.5); pop(t, u, .3, 99, cam); pop(m, u, tm - .2, 99, cam); } }; },
  c: [[0, 1.65, 2.6], [0, 1.6, -.3], [0, 1.68, 2.0], [0, 1.65, -.3]], range: 2 }; });
// 36. Hora 10
CARD(36, 10, 'HORA 10', 'QUEDAN 14');
// 37. Clase de matemáticas. Ella se sienta a tu lado. El profesor explica ecuaciones y tú no oyes nada.
Q(37, (d, a) => { const tl = R0(a, 'lado'), tn = R0(a, 'nada'); return { ...AULA(), atores: [PROF({ x: 1.8, z: -2.6, eyes: [[0, 'look']], pose: (k, u) => talkP(k, u) }), YO({ x: -.5, z: -.5, eyes: [[0, 'look'], [tl, 'lookl'], [tn, 'heart']] }), ELA({ x: .6, z: -.5, eyes: [[0, 'look']], move: (u) => [lerp(2.5, .6, smooth(0, tl, u)), 0, -.5], pose: (k, u) => (u < tl ? k.walk(u) : k.pose()) })],
  extra: (c) => { QA(c); pupitres(c, [-.5, .6], -.1); const t = lw(c, ['NO OYES NADA'], 1.4, [-.8, 2.0, .1]); return { update: (u, tt, cam) => pop(t, u, tn - .1, 99, cam) }; },
  c: [[0, 1.8, 3.6], [0, 1.5, -1.0], [0, 1.75, 3.0], [0, 1.5, -1.0]], range: 3.5 }; });
// 38. Solo oyes tu corazón, como si hubieras subido diez pisos por la escalera
Q(38, (d, a) => { const tp = R0(a, 'pisos'); return { amb: 'gris', fov: 30, atores: [YO({ x: -.6, z: -.3, eyes: [[0, 'wide']], pose: (k, u) => k.pose({ armL: [70, 80], armR: [12, 8], bob: Math.abs(Math.sin(u * 14)) * .012 }) })],
  extra: (c) => { const h = corazon(c, 1.0); h.position.set(.8, 1.5, -.3); const t = lab(c, ['¡BUM-BUM!'], 1.1, [.8, 2.25, -.2], RED); const p = lw(c, ['COMO SUBIR 10 PISOS'], 1.6, [.2, .85, .1]); return { update: (u, tt, cam) => { h.scale.setScalar(latido(u, 160)); pop(t, u, .2, 99, cam); pop(p, u, tp - .4, 99, cam); } }; },
  c: [[0, 1.6, 3.2], [0, 1.5, -.3], [0, 1.6, 2.7], [0, 1.5, -.3]], range: 2.5, look: { bloom: .5 } }; });
// 39. Tu cuerpo se pone en modo alerta: adrenalina, corazón, manos, cosquillas
Q(39, (d, a) => { const tc = R0(a, 'cosquillas'); return { amb: 'lab', fov: 30, atores: [YO({ x: 0, z: -.3, eyes: [[0, 'look'], [R0(a, 'alerta'), 'wide']], pose: (k, u) => k.pose({ armL: [30, 20], armR: [30, 20], bob: Math.abs(Math.sin(u * 14)) * .01 }) })],
  extra: (c) => { const h = corazon(c, .28); h.position.set(.12, 1.35, .25); const L = SEQ(c, a, [[['MODO ALERTA'], 'alerta', 'r', [0, 2.2, -.2], 1.4, 1], [['ADRENALINA'], 'adrenalina', 'y', [-1.15, 1.85, -.2], 1.3, 1], [['CORAZÓN A TOPE'], 'acelera', 'w', [1.25, 1.85, -.2], 1.5, 1], [['MANOS SUDADAS'], 'sudan', 'w', [-1.2, 1.2, -.2], 1.5, 1], [['COSQUILLAS'], 'cosquillas', 'p', [1.2, 1.2, -.2], 1.3, 1]]); return { update: (u, tt, cam) => { L(u, cam); h.scale.setScalar(latido(u, 150) * .9); } }; },
  c: [[0, 1.55, 3.6], [0, 1.5, -.3], [0, 1.55, 3.2], [0, 1.5, -.3]], range: 3 }; });
// 40. Las famosas mariposas no son mariposas. Es tu cuerpo preparándose...
Q(40, (d, a) => { const tn = R0(a, 'no'), tc = R0(a, 'cuerpo'), tv = R0(a, 'verdad'); return { amb: 'gris', fov: 30, atores: [YO({ x: 0, z: -.3, eyes: [[0, 'happy'], [tn, 'look'], [tv - .5, 'heart']], pose: (k, u) => k.pose({ armL: [60, 70], armR: [60, 70] }) })],
  extra: (c) => { const m = mariposas(c, 12); const t = lab(c, ['MARIPOSAS'], 1.2, [0, 2.2, -.3], PINK); const n = lw(c, ['NO SON MARIPOSAS'], 1.5, [0, 2.2, -.3]); const p = lab(c, ['ALGO IMPORTANTE VA A PASAR'], 2.2, [0, 2.2, -.3]); return { update: (u, tt, cam) => { m(u, [0, 1.2, -.1], cam, u < tn + 1.2 || u > tv - .8 ? 1 : .001); pop(t, u, .2, tn - .1, cam); pop(n, u, tn, tc - .1, cam); pop(p, u, tc + 1.5, 99, cam); } }; },
  c: [[0, 1.55, 3.0], [0, 1.45, -.3], [0, 1.55, 2.5], [0, 1.45, -.3]], range: 2.5, look: { bloom: .45 } }; });
// 41. Ella te pasa una nota. La abres debajo de la mesa. Pone: "Hoy quiero conocerte de verdad."
Qs(41, ['pone'], [
  (d, a) => ({ ...AULA(), atores: [YO({ x: -.5, z: -.5, eyes: [[0, 'lookl'], [R0(a, 'abres'), 'down']] }), ELA({ x: .6, z: -.5, eyes: [[0, 'smug']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u < 2 ? 70 : 12, 70] }) })],
    extra: (c) => { QA(c); pupitres(c, [-.5, .6], -.1); const n = nota(c, [''], .25, [0, .82, .1]); n.rotation.x = -Math.PI / 2; return { update: (u) => { n.position.x = lerp(.4, -.4, smooth(.3, 1.6, u)); } }; },
    c: [[0, 1.4, 2.2], [0, 1.0, -.2], [0, 1.4, 1.9], [-.2, 1.0, -.2]], range: 2 }),
  (d, a) => ({ amb: 'aula', fov: 30, k: 1, atores: [],
    extra: (c) => { const n = nota(c, ['Hoy quiero', 'conocerte', 'de verdad ♥'], 1.6, [0, 1.5, -.5], 90); const b = brillos(c, 8, '#FFB0C0'); return { update: (u) => { n.rotation.z = Math.sin(u) * .03; b(u, [0, 1.5, -.3, 1]); } }; },
    c: [[0, 1.5, 2.2], [0, 1.5, -.5], [0, 1.5, 1.9], [0, 1.5, -.5]], range: 1.5, blur: 6 }),
]);
// 42. Hora 12
CARD(42, 12, 'HORA 12', 'QUEDAN 12');
// 43. En el recreo, ella saca el móvil y te enseña una lista: "Las 36 preguntas"
Q(43, (d, a) => { const tl = R0(a, 'llama'); return { amb: 'plaza', fov: 32, atores: [ELA({ x: .6, z: -.3, eyes: [[0, 'happy']], pose: (k) => k.pose({ armL: [12, 8], armR: [90, 20] }) }), YO({ x: -.7, z: -.3, eyes: [[0, 'look'], [tl, 'wide']] })],
  extra: (c, s, A) => { const ph = movil(['LAS 36', 'PREGUNTAS'], { hora: '12:00', bg: '#2A1830' }); ph.scale.setScalar(.4); c.add(ph); const t = lab(c, ['LAS 36 PREGUNTAS'], 1.8, [0, 2.2, -.3], PINK); return { update: (u, tt, cam) => { naMao(ph, A[0], .1); ph.lookAt(cam.position); pop(t, u, tl, 99, cam); } }; },
  c: [[0, 1.6, 3.4], [0, 1.45, -.3], [0, 1.6, 2.9], [0, 1.45, -.3]], range: 3 }; });
// 44. En 1997, Arthur Aron juntó a parejas de desconocidos: 36 preguntas cada vez más personales
Q(44, (d, a) => { const tj = R0(a, 'desconocidos'), tq = R0(a, 'personales'); return { amb: 'lab', fov: 34, atores: [MUJ(0, { x: -1.6, z: -.3, eyes: [[0, 'look'], [tq, 'happy']] }), EXTRA(4, { x: -.6, z: -.3, eyes: [[0, 'lookl'], [tq, 'happy']] }), MUJ(2, { x: .6, z: -.3, eyes: [[0, 'flat'], [tq, 'happy']] }), EXTRA(1, { x: 1.6, z: -.3, eyes: [[0, 'look'], [tq, 'happy']] })],
  extra: (c) => { mesa(c, -1.1, .2, .75, 1.4, .6); mesa(c, 1.1, .2, .75, 1.4, .6); const n = lab(c, ['ARTHUR ARON'], 1.3, [0, 2.3, -.6], BLUE); const L = SEQ(c, a, [[['DESCONOCIDOS'], 'desconocidos', 'w', [0, 2.3, -.6], 1.5], [['36 PREGUNTAS'], '36', 'y', [0, 2.3, -.6], 1.5], [['CADA VEZ MÁS PERSONALES'], 'personales', 'p', [0, 2.3, -.6], 2.2, 1]]); return { update: (u, tt, cam) => { pop(n, u, 0, tj - .3, cam); L(u, cam); } }; },
  c: [[0, 1.7, 4.4], [0, 1.4, -.3], [0, 1.7, 3.9], [0, 1.4, -.3]], range: 3.5 }; });
// 45. Al final, muchos se sentían mucho más unidos. Una de esas parejas, años después, se casó.
Q(45, (d, a) => { const tc = R0(a, 'caso'); return { amb: 'jardin', fov: 30, atores: [MUJ(0, { x: -.4, z: -.3, outfit: 'jaleco', eyes: [[0, 'happy']], pose: (k) => k.pose({ armL: [12, 8], armR: [60, 60] }) }), EXTRA(4, { x: .4, z: -.3, outfit: 'terno', eyes: [[0, 'happy']], pose: (k) => k.pose({ armL: [60, 60], armR: [12, 8] }) })],
  extra: (c) => { const u0 = lw(c, ['MÁS UNIDOS'], 1.2, [0, 2.2, -.3]); const s = lab(c, ['¡SE CASARON!'], 1.4, [0, 2.2, -.3], PINK); const h = corazon(c, .4); h.position.set(0, 1.95, -.3); const b = brillos(c, 16, '#FFF2C0'); return { update: (u, tt, cam) => { pop(u0, u, .3, tc - .3, cam); pop(s, u, tc - .2, 99, cam); h.visible = u > tc; h.scale.setScalar(latido(u, 90)); b(u, [0, 1.8, -.2, 1.2], u > tc ? 1 : 0); } }; },
  c: [[0, 1.6, 3.2], [0, 1.45, -.3], [0, 1.6, 2.7], [0, 1.45, -.3]], range: 3 }; });
// 46. Las primeras preguntas son fáciles
Q(46, (d, a) => { const tc = R0(a, 'cenar'), td = R0(a, 'como'); return { amb: 'plaza', fov: 32, atores: [ELA({ x: .7, z: -.3, eyes: [[0, 'look']], pose: talkP }), YO({ x: -.7, z: -.3, eyes: [[0, 'look'], [td, 'happy']] })],
  extra: (c) => { const L = SEQ(c, a, [[['FÁCILES'], 'faciles', 'w', [0, 2.25, -.3], 1.0], [['¿CON QUIÉN CENARÍAS?'], 'cenar', 'y', [0, 2.25, -.3], 1.9], [['¿TU DÍA PERFECTO?'], 'como', 'y', [0, 2.25, -.3], 1.7]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[0, 1.6, 3.4], [0, 1.45, -.3], [0, 1.6, 2.9], [0, 1.45, -.3]], range: 3 }; });
// 47. Pero luego se ponen serias: recuerdo más bonito, más doloroso, qué te avergüenza
Q(47, (d, a) => ({ amb: 'plaza', ambo: { dusk: true }, fov: 30, atores: [ELA({ x: .7, z: -.3, eyes: [[0, 'look']], pose: talkP }), YO({ x: -.7, z: -.3, eyes: [[0, 'flat'], [R0(a, 'doloroso'), 'sad'], [R0(a, 'averguenza'), 'small']] })],
  extra: (c) => { const L = SEQ(c, a, [[['SERIAS'], 'serias', 'b', [0, 2.25, -.3], 1.0], [['¿TU RECUERDO MÁS BONITO?'], 'recuerdo', 'b', [0, 2.25, -.3], 2.2], [['¿EL MÁS DOLOROSO?'], 'doloroso', 'b', [0, 2.25, -.3], 1.8], [['¿QUÉ TE AVERGÜENZA?'], 'averguenza', 'r', [0, 2.25, -.3], 1.9]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[0, 1.6, 3.2], [0, 1.45, -.3], [0, 1.6, 2.7], [0, 1.45, -.3]], range: 3, look: { exposure: .92 } }));
// 48. Y tú, que llevas años fingiendo, le cuentas la verdad: lloraste con una peli; miedo a la oscuridad
Q(48, (d, a) => { const tl = R0(a, 'lloraste'); return { amb: 'plaza', ambo: { dusk: true }, fov: 30, atores: [YO({ x: -.5, z: -.3, eyes: [[0, 'smug'], [R0(a, 'verdad'), 'look'], [tl, 'sad']], pose: (k, u) => (u > R0(a, 'verdad') ? talkP(k, u) : k.pose({ armL: [60, 70], armR: [60, 70] })) }), ELA({ x: .8, z: -.3, eyes: [[0, 'look']] })],
  extra: (c) => { const L = SEQ(c, a, [[['TRANQUILO Y MISTERIOSO'], 'tranquilo', 'w', [-.2, 2.2, -.3], 2.1], [['LA VERDAD'], 'verdad', 'p', [-.2, 2.2, -.3], 1.1], [['LLORÉ CON UNA PELI DE DIBUJOS'], 'lloraste', 'y', [-.2, 2.2, -.3], 2.4], [['MIEDO A LA OSCURIDAD'], 'miedo', 'y', [-.2, 2.2, -.3], 1.9, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[0, 1.6, 3.2], [0, 1.45, -.3], [0, 1.6, 2.8], [0, 1.45, -.3]], range: 3 }; });
// 49. Una vez te caíste delante de todo el comedor y fingiste que lo habías hecho a propósito
Q(49, (d, a) => { const tf = R0(a, 'fingiste'); return { ...AULA(), look: MEMO, atores: [...[0, 1, 2, 3].map((i) => EXTRA(i, { x: -2.2 + i * 1.45, z: -1.6, eyes: [[0, 'happy']], pose: (k, u) => clap(k, u + i) })), DORM(YO, { x: .4, z: .2, y: .12, eyes: [[0, 'wide'], [tf, 'smug']] })],
  extra: (c) => { mesa(c, -1.4, -1.0, .75, 2.0, .7); mesa(c, 1.4, -1.0, .75, 2.0, .7); const tr = box(.5, .03, .35, std('#E8E2D2'), -.5, .02, .4); c.add(tr); const t = lab(c, ['EL COMEDOR ENTERO'], 1.8, [0, 2.3, -1.4]); const p = lw(c, ['«¡LO HE HECHO A PROPÓSITO!»'], 2.3, [0, 1.15, .4]); return { update: (u, tt, cam) => { pop(t, u, .2, 99, cam); pop(p, u, tf, 99, cam); } }; },
  c: [[0, 2.0, 3.8], [0, 1.0, -.6], [0, 1.9, 3.2], [0, 1.0, -.6]], range: 3.5 }; });
// 50. Ella no se ríe de ti. Te escucha. Y luego te cuenta sus cosas.
Q(50, (d, a) => { const te = R0(a, 'escucha'), tc = R0(a, 'cosas'); return { amb: 'plaza', ambo: { dusk: true }, fov: 30, atores: [ELA({ x: .7, z: -.3, eyes: [[0, 'look'], [tc - .8, 'happy']], pose: (k, u) => (u > tc - .8 ? talkP(k, u) : nod(k, u)) }), YO({ x: -.7, z: -.3, eyes: [[0, 'sad'], [te, 'look']] })],
  extra: (c) => { const L = SEQ(c, a, [[['NO SE RÍE'], 'rie', 'w', [.4, 2.2, -.3], 1.1], [['TE ESCUCHA'], 'escucha', 'y', [.4, 2.2, -.3], 1.2]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[0, 1.6, 3.2], [0, 1.45, -.3], [0, 1.6, 2.8], [0, 1.45, -.3]], range: 3 }; });
// 51. Tu crush también tiene miedo, se siente sola, no le gusta lo que ve en el espejo
Q(51, (d, a) => ({ amb: 'cuartoElla', fov: 30, look: MEMO, atores: [ELA({ x: .4, z: -.2, eyes: [[0, 'look'], [R0(a, 'miedo'), 'sad'], [R0(a, 'espejo'), 'down']], pose: (k) => k.pose({ armL: [60, 70], armR: [60, 70] }) })],
  extra: (c) => { espejo(c, -.9, -1.0); const L = SEQ(c, a, [[['LA PERSONA PERFECTA'], 'perfecta', 'p', [.4, 2.15, -.2], 1.9], [['TAMBIÉN TIENE MIEDO'], 'miedo', 'w', [.4, 2.15, -.2], 1.8], [['SE SIENTE SOLA'], 'sola', 'w', [.4, 2.15, -.2], 1.5], [['NO LE GUSTA LO QUE VE'], 've', 'b', [.4, 2.15, -.2], 2.0, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[0, 1.6, 3.2], [-.1, 1.5, -.4], [0, 1.6, 2.7], [-.1, 1.5, -.4]], range: 2.5 }));
// 52. Por primera vez, no es tu crush. Es una persona.
Q(52, (d, a) => { const tp = R0(a, 'persona'); return { amb: 'plaza', ambo: { dusk: true }, fov: 30, atores: [ELA({ x: .6, z: -.3, eyes: [[0, 'happy']] }), YO({ x: -.6, z: -.3, eyes: [[0, 'happy']] })],
  extra: (c) => { const t = lab(c, ['NO ES TU CRUSH'], 1.5, [0, 2.2, -.3], PINK); const p = lw(c, ['ES UNA PERSONA'], 1.5, [0, 2.2, -.3]); const b = brillos(c, 10, '#FFF2C0'); return { update: (u, tt, cam) => { pop(t, u, .3, tp - .6, cam); pop(p, u, tp - .5, 99, cam); b(u, [0, 1.6, -.2, 1], u > tp ? 1 : 0); } }; },
  c: [[0, 1.6, 3.4], [0, 1.45, -.3], [0, 1.6, 2.8], [0, 1.45, -.3]], range: 3 }; });
// ---- más ayudas ----
const ecgT = () => canvasTex(900, 420, (x) => { x.fillStyle = '#0E1C24'; x.beginPath(); x.roundRect(0, 0, 900, 420, 26); x.fill(); const wave = (y0, col) => { x.strokeStyle = col; x.lineWidth = 7; x.beginPath(); for (let i = 0; i <= 880; i += 4) { const f = (i % 220) / 220; let y = y0; if (f > .4 && f < .45) y -= (f - .4) * 1400; else if (f >= .45 && f < .5) y -= (.5 - f) * 1400 - 30; else if (f >= .5 && f < .55) y += 0; y += Math.sin(i * .03) * 4; x.lineTo(10 + i, y); } x.stroke(); }; wave(140, '#5FD08A'); wave(310, '#E8667F'); x.fillStyle = '#5FD08A'; x.font = '800 30px Inter'; x.textAlign = 'left'; x.fillText('TÚ', 24, 60); x.fillStyle = '#E8667F'; x.fillText('ELLA', 24, 232); });
const bajoNoche = { exposure: .9, bloom: .4, vig: .6 };
const cogerMano = (dir) => (k, u) => k.pose({ armL: dir > 0 ? [12, 8] : [40, 0], armR: dir > 0 ? [40, 0] : [12, 8] });
const cocheTren = (mt, A, sp = .09, off = 0) => (u) => { const f = (u * sp + off) % 1; const p = mt.cur.getPointAt(f), q = mt.cur.getPointAt((f + .01) % 1); mt.cart.position.copy(p); mt.cart.lookAt(q); return p; };
const enCarro = (i) => (k, u) => k.pose({ armL: [150 + Math.sin(u * 9 + i) * 15, 30], armR: [150 + Math.cos(u * 9 + i) * 15, 30] });

// 53. Hora 13
CARD(53, 13, 'HORA 13', 'QUEDAN 11');
// 54. Tu mejor amigo te acorrala en el baño: ¿Qué está pasando? ¿Le has pagado? ¿La tienes amenazada? ¿Es una cámara oculta?
Q(54, (d, a) => ({ amb: 'gris', fov: 32, atores: [AMIGO({ x: .7, z: -.3, eyes: [[0, 'angry']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [95 + Math.sin(u * 7) * 8, 0], lean: -6 }) }), YO({ x: -.7, z: -.3, eyes: [[0, 'wide']] })],
  extra: (c) => { azulejos(c, -2.4); c.add(box(1.0, .5, .5, std('#F4F6F8', { roughness: .2 }), -2.2, .9, -2.1)); espejo(c, -2.2, -2.36); const L = SEQ(c, a, [[['¿QUÉ ESTÁ PASANDO?'], 'pasando', 'w', [.3, 2.2, -.3], 1.8], [['¿LE HAS PAGADO?'], 'pagado', 'w', [.3, 2.2, -.3], 1.6], [['¿LA TIENES AMENAZADA?'], 'amenazada', 'r', [.3, 2.2, -.3], 2.0], [['¿CÁMARA OCULTA?'], 'camara', 'y', [.3, 2.2, -.3], 1.6, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.6, 3.4], [0, 1.45, -.3], [0, 1.6, 2.9], [0, 1.45, -.3]], range: 3, look: { exposure: 1.1 } }));
// 55. Le intentas explicar lo del mensaje. Te mira como si estuvieras loco. Luego te pide que le preguntes si su amiga tiene novio.
Q(55, (d, a) => { const tl = R0(a, 'loco'), tp = R0(a, 'pide'); return { amb: 'gris', fov: 32, atores: [AMIGO({ x: .7, z: -.3, eyes: [[0, 'look'], [tl - .5, 'flat'], [tp, 'smug']], pose: (k, u) => (u > tp ? k.pose({ armL: [12, 8], armR: [60, 40] }) : k.pose({ armL: [70, 80], armR: [70, 80] })) }), YO({ x: -.7, z: -.3, eyes: [[0, 'look'], [tp + 1, 'flat']], pose: (k, u) => (u < tl ? talkP(k, u) : k.pose()) })],
  extra: (c) => { azulejos(c, -2.4); const ch = chat(c, [-.7, 2.2, -.2], .28, [['l', '¿Estás despierto?', 0], ['s', 'TIENES 24 HORAS', 0]], { hora: '00:00' }); const L = SEQ(c, a, [[['¿ESTÁS LOCO?'], 'loco', 'w', [.8, 2.2, -.3], 1.3], [['¿Y SU AMIGA TIENE NOVIO?'], 'amiga', 'p', [.6, 2.2, -.3], 2.1, 1]]); return { update: (u, t, cam) => { ch.visible = u < tl; ch.userData.upd(u); L(u, cam); } }; },
  c: [[0, 1.6, 3.4], [0, 1.5, -.3], [0, 1.6, 2.9], [0, 1.5, -.3]], range: 3, look: { exposure: 1.1 } }; });
// 56. El instituto entero habla de vosotros: 140 mensajes, un montaje con vuestras caras en un corazón
Q(56, (d, a) => { const t140 = R0(a, '140'), tm = R0(a, 'montaje'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const ch = chat(c, [-.8, 1.5, -.5], .9, [['l', '¿¿HABÉIS VISTO??', .2], ['l', '¡¡NO PUEDE SER!!', .8], ['l', 'jajajaja', 1.4], ['l', '¿Están saliendo?', 2.0], ['l', 'Mirad esto…', tm - .3]], { name: 'CLASE 4ºB', hora: '13:10', max: 6 }); const n = lab(c, ['140 MENSAJES'], 1.4, [-.8, 2.45, -.3], RED); const hz = cut(wordTex('♥', '#E8667F', 170), 1.5, 1.2); hz.position.set(1.0, 1.5, -.7); c.add(hz); const f1 = cut(caraT('', '#D66A86'), .45, .58), f2 = cut(caraT('', '#43C4B4'), .45, .58); f1.position.set(.78, 1.55, -.6); f2.position.set(1.22, 1.55, -.6); for (const f of [f1, f2]) { f.renderOrder = 7; c.add(f); }
    return { update: (u, t, cam) => { ch.userData.upd(u); pop(n, u, t140 - .2, 99, cam); const on = u > tm; hz.visible = f1.visible = f2.visible = on; hz.scale.setScalar(on ? latido(u, 90) : 1); } }; },
  c: [[0, 1.6, 4.0], [0, 1.6, -.5], [0, 1.6, 3.6], [0, 1.6, -.5]], range: 2.5, blur: 4 }; });
// 57. Otro ha abierto una encuesta: ¿Cuánto durará? La más votada: menos de una semana. Si ellos supieran.
Q(57, (d, a) => { const tv = R0(a, 'votada'), ts = R0(a, 'supieran'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const b0 = barras(c, [['1 DÍA', .15, '#9AA0B0'], ['MENOS DE\nUNA SEMANA', .9, '#E8667F'], ['UN MES', .35, '#9AA0B0'], ['SIEMPRE', .2, '#9AA0B0']], 2.6, [0, 1.5, -.6], { title: 'ENCUESTA: ¿CUÁNTO DURARÁ?' }); const s = lab(c, ['SI ELLOS SUPIERAN…'], 1.8, [0, 2.45, -.4], { bg: '#1E2230', fg: '#FF7A8A' }); const g = glowSprite('#FFE27A', .9, 0); g.position.set(-.2, 1.6, -.5); c.add(g); return { update: (u, t, cam) => { b0.scale.setScalar(.6 + .4 * smooth(0, .4, u)); g.material.opacity = u > tv ? .5 + .3 * Math.sin(u * 6) : 0; pop(s, u, ts - .2, 99, cam); } }; },
  c: [[0, 1.6, 3.2], [0, 1.6, -.6], [0, 1.6, 2.8], [0, 1.6, -.6]], range: 2.5, blur: 4 }; });
// 58. Hora 15
CARD(58, 15, 'HORA 15', 'QUEDAN 9');
// 59. Ella quiere ir a algún sitio contigo. Vais a la feria.
Q(59, (d, a) => { const tf = R0(a, 'feria'); return { amb: 'noria', fov: 34, atores: [ELA({ eyes: [[0, 'happy']], move: (u) => [lerp(-1.6, .4, smooth(0, d, u)), 0, .4], pose: (k, u) => k.walk(u) }), YO({ eyes: [[0, 'happy']], move: (u) => [lerp(-2.4, -.4, smooth(0, d, u)), 0, .4], pose: (k, u) => k.walk(u + .5) })],
  extra: (c) => { const t = lab(c, ['LA FERIA'], 1.1, [0, 2.4, .2], PINK); return { update: (u, tt, cam) => pop(t, u, tf - .2, 99, cam) }; },
  c: [[0, 1.8, 5.2], [0, 1.9, -1], [.4, 1.7, 4.6], [0, 1.8, -1]], range: 5, look: { bloom: .5 } }; });
// 60. Os subís a la montaña rusa
Q(60, (d, a) => { let mt; const pos = (dx) => (u) => { const p = mt ? cocheTren(mt, null, .09, .02)(u) : new THREE.Vector3(); return [p.x + dx, p.y - .25, p.z]; }; return { amb: 'noria', fov: 40, atores: [YO({ eyes: [[0, 'wide']], move: pos(-.25), pose: enCarro(0) }), ELA({ eyes: [[0, 'happy']], move: pos(.25), pose: enCarro(2) })],
  extra: (c) => { mt = montana(c); const t = lab(c, ['MONTAÑA RUSA'], 1.8, [0, 4.2, -3], RED); return { update: (u, tt, cam) => { pop(t, u, .2, 99, cam); const p = mt.cart.position; cam.position.set(p.x + 2.2, p.y + 1.6, p.z + 3.6); cam.lookAt(p.x, p.y + .3, p.z); } }; },
  c: [[0, 3, 6], [0, 2.5, -4], [1, 3, 5.5], [0, 2.5, -4]], k: 1, range: 8, blur: 3, look: { bloom: .5 } }; });
// 61. 1974, Dutton y Aron: un puente colgante muy alto que se movía mucho
Q(61, (d, a) => { const ta = R0(a, 'alto'), tm = R0(a, 'movia'); return { amb: 'puente', fov: 34, atores: [EXTRA(5, { x: -.3, z: 0, eyes: [[0, 'look'], [tm, 'wide']], pose: (k, u) => k.pose({ armL: [60, 20], armR: [60, 20], lean: u > tm ? Math.sin(u * 5) * 8 : 0 }) })],
  extra: (c) => { const n = lab(c, ['DUTTON Y ARON'], 1.5, [-.3, 2.3, 0], BLUE); const L = SEQ(c, a, [[['MUY ALTO'], 'alto', 'w', [1.1, 1.8, 0], 1.0, 1], [['SE MOVÍA MUCHO'], 'movia', 'r', [1.2, 1.35, 0], 1.5, 1]]); return { update: (u, tt, cam) => { pop(n, u, R0(a, 'dutton') - .2, 99, cam); L(u, cam); shake(cam, u > tm ? .015 : 0, u); } }; },
  c: [[0, 1.8, 4.2], [0, 1.3, 0], [.3, 1.7, 3.6], [0, 1.3, 0]], range: 4 }; });
// 62. Una chica entrevistaba a los hombres que lo cruzaban y les daba su número de teléfono
Q(62, (d, a) => { const tn = R0(a, 'numero'); return { amb: 'puente', fov: 32, atores: [MUJ(3, { x: .6, z: 0, eyes: [[0, 'happy']], pose: (k) => k.pose({ armL: [60, 60], armR: [80, 20] }) }), EXTRA(5, { x: -.6, z: 0, eyes: [[0, 'look'], [tn, 'wide']], pose: (k, u) => k.pose({ armL: [60, 20], armR: [60, 20], lean: Math.sin(u * 5) * 6 }) })],
  extra: (c, s, A) => { const cl = box(.3, .4, .03, std('#C8A27A'), 0, 0, 0); c.add(cl); const nm = nota(c, ['555 - 0174'], .5, [0, 2.2, 0], 90); const t = lw(c, ['UNA ENTREVISTA'], 1.4, [.6, 2.25, 0]); return { update: (u, tt, cam) => { const p = hand(A[0]); cl.position.set(p.x - .15, p.y + .05, p.z + .1); pop(t, u, .2, tn - .2, cam); nm.visible = u > tn; nm.lookAt(cam.position); } }; },
  c: [[0, 1.7, 3.6], [0, 1.45, 0], [0, 1.7, 3.1], [0, 1.45, 0]], range: 3 }; });
// 63. Los que la conocieron en el puente que daba miedo la llamaron muchas más veces
Q(63, (d, a) => { const tt = R0(a, 'tranquilo'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const b1 = barras(c, [['PUENTE\nQUE DA MIEDO', .9, '#C9361F']], 1.4, [-.7, 1.5, -.6], { title: 'LLAMADAS' }); const b2 = barras(c, [['PUENTE\nQUE DA MIEDO', .9, '#C9361F'], ['PUENTE\nTRANQUILO', .3, '#5FA0D8']], 2.4, [0, 1.5, -.6], { title: 'LLAMADAS' }); return { update: (u) => { b1.visible = u < tt - .2; b2.visible = u >= tt - .2; } }; },
  c: [[0, 1.5, 3.0], [0, 1.5, -.6], [0, 1.5, 2.6], [0, 1.5, -.6]], range: 2.5, blur: 4 }; });
// 64. Porque el cuerpo confunde los nervios del miedo con los nervios del amor
Q(64, (d, a) => { const ta = R0(a, 'amor'); return { amb: 'gris', fov: 30, atores: [YO({ x: 0, z: -.3, eyes: [[0, 'wide'], [ta - .2, 'heart']], pose: (k, u) => k.pose({ armL: [70, 80], armR: [70, 80], bob: Math.abs(Math.sin(u * 14)) * .01 }) })],
  extra: (c) => { const m = lab(c, ['MIEDO'], 1.0, [-1.0, 2.0, -.3], RED); const e = lw(c, ['='], .5, [0, 2.3, -.3], { size: 110, w: 260 }); const am = lab(c, ['AMOR'], 1.0, [1.0, 2.0, -.3], PINK); const h = corazon(c, .5); h.position.set(1.0, 1.4, -.2); return { update: (u, tt, cam) => { pop(m, u, .2, 99, cam); pop(e, u, ta - .6, 99, cam); pop(am, u, ta - .2, 99, cam); h.visible = u > ta; h.scale.setScalar(latido(u, 150)); } }; },
  c: [[0, 1.6, 3.4], [0, 1.5, -.3], [0, 1.6, 2.9], [0, 1.5, -.3]], range: 2.5 }; });
// 65. Así que, técnicamente, la montaña rusa es la mejor cita del mundo
Q(65, (d, a) => { const tc = R0(a, 'cita'); let mt; const pos = (dx) => (u) => { const p = mt ? cocheTren(mt, null, .09, .35)(u) : new THREE.Vector3(); return [p.x + dx, p.y - .25, p.z]; }; return { amb: 'noria', fov: 38, atores: [YO({ eyes: [[0, 'happy']], move: pos(-.25), pose: enCarro(1) }), ELA({ eyes: [[0, 'heart']], move: pos(.25), pose: enCarro(3) })],
  extra: (c) => { mt = montana(c); const t = lab(c, ['LA MEJOR CITA DEL MUNDO'], 2.6, [0, 4.4, -3], PINK); const b = brillos(c, 14, '#FFE27A'); return { update: (u, tt, cam) => { pop(t, u, tc - .4, 99, cam); const p = mt.cart.position; cam.position.set(p.x - 2.0, p.y + 1.5, p.z + 3.6); cam.lookAt(p.x, p.y + .3, p.z); b(u, [p.x, p.y + 1, p.z, 1], u > tc ? 1 : 0); } }; },
  c: [[2, 3.5, 6.5], [0, 2.5, -4], [-1, 3.2, 6], [0, 2.5, -4]], k: 1, range: 8, blur: 3, look: { bloom: .55 } }; });
// 66. Bajáis mareados. Ella te coge de la mano. Y no la suelta.
Q(66, (d, a) => { const tc = R0(a, 'coge'), ts = R0(a, 'suelta'); return { amb: 'noria', fov: 30, atores: [YO({ x: -.35, z: .2, eyes: [[0, 'flat'], [tc, 'wide'], [ts, 'heart']], pose: (k, u) => (u > tc ? cogerMano(1)(k, u) : k.pose({ lean: Math.sin(u * 3) * 8, head: Math.sin(u * 4) * 10 })) }), ELA({ x: .35, z: .2, eyes: [[0, 'flat'], [tc - .3, 'happy']], pose: (k, u) => (u > tc ? cogerMano(-1)(k, u) : k.pose({ lean: -Math.sin(u * 3) * 8, head: -Math.sin(u * 4) * 10 })) })],
  extra: (c) => { const m = lw(c, ['MAREADOS'], 1.0, [0, 2.3, .2]); const h = corazon(c, .25); h.position.set(0, 1.05, .35); const n = lab(c, ['NO LA SUELTA'], 1.3, [0, 2.3, .2], PINK); return { update: (u, tt, cam) => { pop(m, u, .2, tc - .2, cam); h.visible = u > tc; h.scale.setScalar(latido(u, 100)); pop(n, u, ts - .2, 99, cam); } }; },
  c: [[0, 1.6, 3.4], [0, 1.45, .2], [0, 1.6, 2.9], [0, 1.45, .2]], range: 2.5, look: { bloom: .45 } }; });
// 67. Hora 18
CARD(67, 18, 'HORA 18', 'QUEDAN 6');
// 68. Os sentáis en un banco del parque a ver el atardecer. Ella apoya la cabeza en tu hombro.
Q(68, (d, a) => { const th = R0(a, 'hombro'); return { amb: 'parque', ambo: { dusk: true }, fov: 30, atores: [YO({ x: -3.75, z: -1.8, eyes: [[0, 'look'], [th, 'heart']] }), ELA({ x: -3.2, z: -1.8, eyes: [[0, 'happy'], [th, 'shut']], pose: (k, u) => k.pose({ lean: -8 * smooth(th - .3, th + .3, u), head: -14 * smooth(th - .3, th + .3, u) }) })],
  extra: (c) => { const t = lw(c, ['EL ATARDECER'], 1.2, [-3.45, 2.1, -1.8]); return { update: (u, tt, cam) => pop(t, u, R0(a, 'atardecer') - .2, th - .1, cam) }; },
  c: [[-3.4, 1.6, 1.4], [-3.45, 1.4, -1.8], [-3.4, 1.55, .9], [-3.45, 1.4, -1.8]], range: 3, look: { bloom: .5, exposure: .98 } }; });
// 69. Sin daros cuenta, vuestros corazones empiezan a latir casi al mismo ritmo
Q(69, (d, a) => { const tr = R0(a, 'ritmo'); return { amb: 'parque', ambo: { dusk: true }, fov: 30, atores: [],
  extra: (c) => { const h1 = corazon(c, .8, '#5FD08A'), h2 = corazon(c, .8); h1.position.set(-.6, 1.5, -.5); h2.position.set(.6, 1.5, -.5); const t = lab(c, ['AL MISMO RITMO'], 1.6, [0, 2.3, -.4], PINK); return { update: (u, tt, cam) => { const k = smooth(tr - 2.5, tr, u); h1.scale.setScalar(latido(u, 90)); h2.scale.setScalar(latido(u + (1 - k) * .27, 90 + (1 - k) * 25)); pop(t, u, tr - .3, 99, cam); } }; },
  c: [[0, 1.5, 2.8], [0, 1.6, -.5], [0, 1.5, 2.4], [0, 1.6, -.5]], range: 2, blur: 10, look: { bloom: .5 } }; });
// 70. Universidad de California en Davis: sensores; el corazón y la respiración se parecían mucho
Q(70, (d, a) => { const ts = R0(a, 'sensores'), tr = R0(a, 'respiracion'); return { amb: 'lab', fov: 32, atores: [MUJ(5, { x: .9, z: -.2, eyes: [[0, 'look'], [tr, 'happy']] }), EXTRA(1, { x: -.9, z: -.2, eyes: [[0, 'look'], [tr, 'happy']] })],
  extra: (c, s, A) => { const e = cut(ecgT(), 1.9, 1.9 * 420 / 900); e.position.set(0, 2.0, -1.4); e.renderOrder = 4; c.add(e); const S = A.map(() => { const g = glowSprite('#5FD08A', .25, 0); c.add(g); return g; }); const n = lab(c, ['UNIVERSIDAD DE CALIFORNIA · DAVIS'], 2.6, [0, .9, .2], BLUE); const L = SEQ(c, a, [[['CORAZÓN Y RESPIRACIÓN'], 'corazon', 'w', [0, .9, .2], 2.1], [['¡SE PARECEN MUCHO!'], 'parecian', 'p', [0, .9, .2], 1.8, 1]]);
    return { update: (u, tt, cam) => { pop(n, u, R0(a, 'universidad') - .2, R0(a, 'corazon') - .2, cam); L(u, cam); A.forEach((k, i) => { const p = new THREE.Vector3(); k.torso.getWorldPosition(p); S[i].position.set(p.x, p.y - .45, p.z + .2); S[i].material.opacity = u > ts ? .5 + .5 * Math.abs(Math.sin(u * 5)) : 0; }); e.visible = u > ts - .3; } }; },
  c: [[0, 1.7, 3.8], [0, 1.6, -.5], [0, 1.65, 3.3], [0, 1.6, -.5]], range: 3 }; });
// 71. Ella te pregunta: "¿Desde cuándo te gusto?"
Q(71, (d, a) => ({ amb: 'parque', ambo: { dusk: true }, fov: 30, atores: [YO({ x: -3.85, z: -1.8, eyes: [[0, 'wide']] }), ELA({ x: -3.05, z: -1.8, eyes: [[0, 'smug']], pose: talkP })],
  extra: (c) => { const g = hab(c, ['¿DESDE CUÁNDO', 'TE GUSTO?'], 1.3, [-2.9, 2.05, -1.7], 64); return { update: (u, tt, cam) => pop(g, u, .5, 99, cam) }; },
  c: [[-3.4, 1.6, 1.2], [-3.45, 1.45, -1.8], [-3.4, 1.6, .8], [-3.45, 1.45, -1.8]], range: 3, look: { bloom: .5 } }));
// 72. "Desde el primer día. Desde que se te cayeron todos los libros en el pasillo y yo no te ayudé porque me quedé paralizado."
Qs(72, ['cayeron'], [
  (d, a) => ({ amb: 'parque', ambo: { dusk: true }, fov: 30, atores: [YO({ x: -3.75, z: -1.8, eyes: [[0, 'happy']], pose: talkP }), ELA({ x: -3.2, z: -1.8, eyes: [[0, 'look']] })],
    extra: (c) => { const t = lab(c, ['DESDE EL PRIMER DÍA'], 1.8, [-3.45, 2.3, -1.7], PINK); return { update: (u, tt, cam) => pop(t, u, .2, 99, cam) }; },
    c: [[-3.4, 1.6, 1.2], [-3.45, 1.45, -1.8], [-3.4, 1.6, .9], [-3.45, 1.45, -1.8]], range: 3, look: { bloom: .5 } }),
  (d, a) => { const tp = R0(a, 'paralizado'); return { ...AULA(), look: MEMO, atores: [ELA({ x: .5, z: -.3, eyes: [[0, 'wide'], [1.2, 'sad']], pose: (k) => k.pose({ armL: [40, 60], armR: [40, 60] }) }), YO({ x: -.9, z: -.3, eyes: [[0, 'wide']], pose: (k) => k.pose({ armL: [20, 10], armR: [20, 10] }) })],
    extra: (c) => { const B = [0, 1, 2, 3, 4].map((i) => { const b = box(.3, .06, .22, std(['#C9361F', '#2F5A9A', '#F2C14E', '#3AA860', '#8A6AC8'][i]), 0, 0, 0); c.add(b); return b; }); const t = lab(c, ['PARALIZADO'], 1.3, [-.9, 2.2, -.3], BLUE); const p = lw(c, ['EL PRIMER DÍA'], 1.3, [.3, 2.4, -.8]); return { update: (u, tt, cam) => { B.forEach((b, i) => { const f = smooth(.1 + i * .08, .7 + i * .08, u); b.position.set(.5 + (i - 2) * .18 * f, lerp(1.2, .05 + i * .01, f * f), -.1 + i * .05 * f); b.rotation.set(f * (i + 1), f * 2, 0); }); pop(p, u, .1, 99, cam); pop(t, u, tp - .3, 99, cam); } }; },
    c: [[0, 1.6, 3.2], [-.2, 1.3, -.3], [0, 1.6, 2.7], [-.2, 1.3, -.3]], range: 3 }; },
]);
// 73. Ella se ríe. "¿Eras tú? Pensé que eras un maleducado."
Q(73, (d, a) => { const tp = R0(a, 'pense'); return { amb: 'parque', ambo: { dusk: true }, fov: 30, atores: [YO({ x: -3.75, z: -1.8, eyes: [[0, 'smug']] }), ELA({ x: -3.2, z: -1.8, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [70, 80], armR: [12, 8], bob: Math.abs(Math.sin(u * 12)) * .02 }) })],
  extra: (c) => { const g1 = gl(c, '¿Eras tú?', 1.1, [-3.0, 2.1, -1.7]); const g2 = hab(c, ['¡PENSÉ QUE ERAS', 'UN MALEDUCADO!'], 1.4, [-3.0, 2.05, -1.7], 64); return { update: (u, tt, cam) => { pop(g1, u, .4, tp - .1, cam); pop(g2, u, tp, 99, cam); } }; },
  c: [[-3.4, 1.6, 1.2], [-3.45, 1.45, -1.8], [-3.4, 1.6, .9], [-3.45, 1.45, -1.8]], range: 3, look: { bloom: .5 } }; });
// 74. Hora 20
CARD(74, 20, 'HORA 20', 'QUEDAN 4');
// 75. Miras el móvil. Son las ocho de la tarde. Quedan cuatro horas.
Q(75, (d, a) => { const tq = R0(a, 'quedan'); return { amb: 'parque', ambo: { dusk: true }, fov: 30, atores: [YO({ x: -.5, z: -.3, eyes: [[0, 'look'], [tq, 'wide']], pose: (k) => k.pose({ armL: [12, 8], armR: [80, 60], head: -8 }) })],
  extra: (c, s, A) => { const ph = movil(['QUEDAN', '4 HORAS'], { hora: '20:00', bg: '#2A1830' }); ph.scale.setScalar(.5); c.add(ph); const t = QUEDAN(c, [.7, 2.2, -.3], 'QUEDAN 4 HORAS', 1.5); return { update: (u, tt, cam) => { naMao(ph, A[0], .05); ph.lookAt(cam.position); pop(t, u, tq - .2, 99, cam); } }; },
  c: [[0, 1.6, 3.0], [0, 1.5, -.3], [0, 1.6, 2.5], [0, 1.5, -.3]], range: 2.5, look: { bloom: .45 } }; });
// 76. Te entra un miedo enorme. A medianoche todo esto se acaba.
Q(76, (d, a) => { const tm = R0(a, 'medianoche'); return { amb: 'gris', fov: 30, atores: [YO({ x: -.5, z: -.3, eyes: [[0, 'wide'], [tm, 'sad']], pose: (k, u) => k.pose({ armL: [70, 80], armR: [70, 80], bob: Math.sin(u * 30) * .004 }) })],
  extra: (c) => { const ck = clock(.8, 11.9); ck.position.set(.8, 1.6, -.5); c.add(ck); const t = lab(c, ['A MEDIANOCHE SE ACABA'], 2.1, [0, 2.4, -.4], RED); return { update: (u, tt, cam) => { ck.set(11.75 + u * .03); pop(t, u, tm - .2, 99, cam); } }; },
  c: [[0, 1.6, 3.2], [0, 1.5, -.3], [0, 1.6, 2.7], [0, 1.5, -.3]], range: 2.5, look: bajoNoche }; });
// 77. Mañana ella volverá a pasar a tu lado por el pasillo sin mirarte, como si hoy no hubiera existido.
Q(77, (d, a) => { const tx = R0(a, 'existido'); return { ...AULA(), look: { ...MEMO, exposure: .85 }, atores: [YO({ x: -.6, z: -.2, eyes: [[0, 'sad']] }), ELA({ eyes: [[0, 'lookl']], move: (u) => [lerp(-2.6, 2.6, u / d), 0, .4], pose: (k, u) => k.walk(u) })],
  extra: (c) => { const t = lw(c, ['MAÑANA…'], 1.0, [-.6, 2.25, -.2]); const n = lab(c, ['COMO SI HOY NO HUBIERA EXISTIDO'], 2.6, [0, 2.25, -.4], BLUE); return { update: (u, tt, cam) => { pop(t, u, .1, tx - 1.6, cam); pop(n, u, tx - 1.5, 99, cam); } }; },
  c: [[0, 1.6, 3.6], [0, 1.4, -.2], [0, 1.6, 3.1], [0, 1.4, -.2]], range: 3 }; });
// 78. Piensas en contárselo: "Oye, esto no es real. Estás así por una cosa rara que ha pasado esta noche."
Q(78, (d, a) => { const tn = R0(a, 'no'); return { amb: 'parque', ambo: { dusk: true }, fov: 30, atores: [YO({ x: -.6, z: -.3, eyes: [[0, 'look'], [tn, 'sad']] }), ELA({ x: .7, z: -.3, eyes: [[0, 'happy']] })],
  extra: (c) => { const h = hab(c, ['«ESTO NO ES REAL…»'], 1.5, [-.4, 2.3, -.2], 60); return { update: (u, tt, cam) => pop(h, u, .4, 99, cam) }; },
  c: [[0, 1.6, 3.2], [0, 1.5, -.3], [0, 1.6, 2.7], [0, 1.5, -.3]], range: 3, look: { bloom: .45 } }; });
// 79. Pero si se lo dices, igual se rompe todo antes de tiempo. Así que te callas y decides aprovechar cada minuto.
Qs(79, ['asi'], [
  (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [],
    extra: (c) => { const h1 = corazon(c, .9); h1.position.set(0, 1.5, -.5); const t = lab(c, ['¿Y SI SE ROMPE TODO?'], 1.9, [0, 2.35, -.4], RED); return { update: (u, tt, cam) => { const k = smooth(.8, 1.4, u); h1.position.x = Math.sin(u * 40) * .02 * k; h1.rotation.z = k * .15; pop(t, u, .3, 99, cam); } }; },
    c: [[0, 1.6, 2.8], [0, 1.6, -.5], [0, 1.6, 2.4], [0, 1.6, -.5]], range: 2.5, blur: 6 }),
  (d, a) => { const ta = R0(a, 'aprovechar'); return { amb: 'parque', ambo: { dusk: true }, fov: 30, atores: [YO({ x: -.6, z: -.3, eyes: [[0, 'flat'], [ta, 'happy']], pose: (k, u) => (u < ta ? k.pose({ armL: [12, 8], armR: [120, 120] }) : k.pose()) }), ELA({ x: .7, z: -.3, eyes: [[0, 'happy']] })],
    extra: (c) => { const s = lw(c, ['SHHH…'], .8, [-.6, 2.25, -.2]); const t = lab(c, ['APROVECHAR CADA MINUTO'], 2.1, [0, 2.3, -.3], PINK); const b = brillos(c, 12, '#FFE27A'); return { update: (u, tt, cam) => { pop(s, u, .2, ta - .2, cam); pop(t, u, ta - .1, 99, cam); b(u, [0, 1.6, -.2, 1.1], u > ta ? 1 : 0); } }; },
    c: [[0, 1.6, 3.2], [0, 1.5, -.3], [0, 1.6, 2.7], [0, 1.5, -.3]], range: 3, look: { bloom: .5 } }; },
]);
// 80. Hora 21
CARD(80, 21, 'HORA 21', 'QUEDAN 3');
// ---- hamburguesería y portal ----
const BURGER = (c) => { AMBS.pasteleria(c); const s = cut(labelT(['HAMBURGUESERÍA'], { bg: '#C9361F', fg: '#FFE7B8', size: 80, w: 900, h: 160 }), 3.2, .57); s.position.set(0, 3.9, -2.98); c.add(s); mesa(c, 0, .35, .8, 1.6, .8, '#E8E2D2'); const b1 = burger(), b2 = burger(); b1.position.set(-.45, .84, .35); b2.position.set(.45, .84, .35); const p1 = patatas(); p1.position.set(-.1, .84, .45); c.add(b1, b2, p1); return p1; };
const portal = (c) => { c.add(box(1.3, 2.4, .2, std('#5A3A28'), 0, 1.2, -1.6)); c.add(box(1.1, 2.2, .05, std('#2F4A3A'), 0, 1.15, -1.48)); const l = new THREE.PointLight('#FFD8A0', 3, 4, 1.6); l.position.set(0, 2.6, -1.0); c.add(l); const n = cut(labelT(['Nº 7'], { bg: '#F4F0E4', fg: '#2A2A34', size: 80, w: 300, h: 150 }), .4, .2); n.position.set(0, 2.55, -1.45); c.add(n); };
const abrazo = (dir) => (k, u) => k.pose({ armL: [35, 45], armR: [35, 45], lean: dir * -5 });
const NOCHEB = { amb: 'barrio', ambo: { night: true } };

// 81. Cenáis en una hamburguesería. Ella se come tus patatas. Tú se lo permites: eso es amor de verdad.
Q(81, (d, a) => { const tp = R0(a, 'patatas'), tv = R0(a, 'verdad'); return { amb: 'gris', fov: 32, atores: [YO({ x: -.6, z: -.2, eyes: [[0, 'happy'], [tp, 'look'], [tv - 1, 'heart']] }), ELA({ x: .6, z: -.2, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > tp - .3 ? 70 + Math.sin(u * 6) * 25 : 12, 60] }) })],
  extra: (c) => { const pt = BURGER(c); const L = SEQ(c, a, [[['SE COME TUS PATATAS'], 'patatas', 'w', [0, 2.2, -.3], 1.9], [['AMOR DE VERDAD'], 'verdad', 'p', [0, 2.2, -.3], 1.6, 1]]); return { update: (u, tt, cam) => { L(u, cam); pt.position.x = lerp(-.1, .25, smooth(tp - .3, tp + .8, u)); } }; },
  c: [[0, 1.7, 3.4], [0, 1.3, -.1], [0, 1.65, 2.9], [0, 1.3, -.1]], range: 3, look: { exposure: 1.05 } }; });
// 82. Habláis de todo: de lo que queréis ser de mayores, de los sitios del mundo que queréis ver
Q(82, (d, a) => ({ amb: 'gris', fov: 32, atores: [YO({ x: -.6, z: -.2, eyes: [[0, 'happy']], pose: talkP }), ELA({ x: .6, z: -.2, eyes: [[0, 'happy']], pose: (k, u) => talkP(k, u + 1) })],
  extra: (c) => { BURGER(c); const L = SEQ(c, a, [[['DE TODO'], 'todo', 'w', [0, 2.2, -.3], 1.0], [['¿QUÉ SERÉIS DE MAYORES?'], 'mayores', 'y', [0, 2.2, -.3], 2.1], [['SITIOS DEL MUNDO'], 'sitios', 'y', [0, 2.2, -.3], 1.6, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[.3, 1.7, 3.2], [0, 1.3, -.1], [.1, 1.65, 2.8], [0, 1.3, -.1]], range: 3, look: { exposure: 1.05 } }));
// 83. ¿Una salchicha es un bocadillo o no? Discutís veinte minutos. Ninguno de los dos cede.
Q(83, (d, a) => { const tm = R0(a, 'minutos'), tc = R0(a, 'cede'); return { amb: 'gris', fov: 32, atores: [YO({ x: -.6, z: -.2, eyes: [[0, 'look'], [tm - .8, 'angry']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [80 + Math.sin(u * 9) * 15, 30] }) }), ELA({ x: .6, z: -.2, eyes: [[0, 'look'], [tm - .8, 'angry']], pose: (k, u) => k.pose({ armL: [80 + Math.cos(u * 9) * 15, 30], armR: [12, 8] }) })],
  extra: (c) => { BURGER(c); const p = cut(perritoT(), .9, .45); p.position.set(0, 2.0, -.2); p.renderOrder = 5; c.add(p); const q = lab(c, ['¿ES UN BOCADILLO?'], 1.7, [0, 2.5, -.3]); const m = lab(c, ['20 MINUTOS'], 1.1, [-1.2, 1.9, -.2], RED); const n = lw(c, ['NADIE CEDE'], 1.1, [1.2, 1.9, -.2]); return { update: (u, tt, cam) => { p.visible = u > .2; p.rotation.z = Math.sin(u * 2) * .1; pop(q, u, .4, 99, cam); pop(m, u, tm - .3, 99, cam); pop(n, u, tc - .3, 99, cam); } }; },
  c: [[0, 1.8, 3.6], [0, 1.5, -.1], [0, 1.75, 3.1], [0, 1.5, -.1]], range: 3, look: { exposure: 1.05 } }; });
// 84. El camarero se acerca: es un perrito caliente, y por favor dejad de discutir, que asustáis a los clientes
Q(84, (d, a) => { const tp = R0(a, 'perrito'), tf = R0(a, 'favor'); return { amb: 'gris', fov: 34, atores: [YO({ x: -.8, z: -.2, eyes: [[0, 'angry'], [tp, 'wide']] }), ELA({ x: .4, z: -.2, eyes: [[0, 'angry'], [tp, 'wide']] }), CAMARERO({ eyes: [[0, 'flat']], move: (u) => [lerp(2.4, 1.3, smooth(0, 1.5, u)), 0, .2], pose: (k, u) => (u < 1.5 ? k.walk(u) : point(k)) }), EXTRA(2, { x: -2.2, z: -1.5, eyes: [[0, 'wide']] }), EXTRA(6, { x: 2.3, z: -1.6, eyes: [[0, 'wide']] })],
  extra: (c) => { BURGER(c); const g1 = hab(c, ['ES UN PERRITO', 'CALIENTE.'], 1.4, [1.1, 2.3, .2], 64); const g2 = hab(c, ['¡ESTÁIS ASUSTANDO', 'A LOS CLIENTES!'], 1.5, [1.0, 2.3, .2], 64); return { update: (u, tt, cam) => { pop(g1, u, tp - .3, tf - .1, cam); pop(g2, u, tf, 99, cam); } }; },
  c: [[0, 1.8, 4.2], [0, 1.4, -.2], [0, 1.75, 3.7], [0, 1.4, -.2]], range: 3.5, look: { exposure: 1.05 } }; });
// 85. Te das cuenta: llevas un día entero sin pensar en lo que ella opina de ti. Solo estás siendo tú. Y está funcionando.
Q(85, (d, a) => { const ts = R0(a, 'siendo'), tf = R0(a, 'funcionando'); return { amb: 'gris', fov: 30, atores: [YO({ x: -.5, z: -.2, eyes: [[0, 'look'], [ts, 'happy']] }), ELA({ x: .6, z: -.2, eyes: [[0, 'heart']] })],
  extra: (c) => { BURGER(c); const L = SEQ(c, a, [[['UN DÍA ENTERO'], 'dia', 'w', [0, 2.2, -.3], 1.4], [['SOLO SIENDO TÚ'], 'siendo', 'p', [0, 2.2, -.3], 1.6], [['Y FUNCIONA'], 'funcionando', 'y', [0, 2.2, -.3], 1.2, 1]]); const b = brillos(c, 12, '#FFE27A'); return { update: (u, tt, cam) => { L(u, cam); b(u, [0, 1.6, -.1, 1], u > tf ? 1 : 0); } }; },
  c: [[0, 1.7, 3.2], [0, 1.4, -.1], [0, 1.65, 2.6], [0, 1.4, -.1]], range: 3, look: { exposure: 1.05, bloom: .45 } }; });
// 86. Hora 23
CARD(86, 23, 'HORA 23', 'QUEDA 1');
// 87. Os despedís delante de su portal. Ella te abraza.
Q(87, (d, a) => { const tb = R0(a, 'abraza'); return { ...NOCHEB, fov: 30, atores: [YO({ eyes: [[0, 'look'], [tb, 'shut']], move: (u) => [lerp(-.6, -.22, smooth(tb - .4, tb, u)), 0, -.6], pose: (k, u) => (u > tb - .2 ? abrazo(1)(k, u) : k.pose()) }), ELA({ eyes: [[0, 'happy'], [tb, 'shut']], move: (u) => [lerp(.6, .22, smooth(tb - .4, tb, u)), 0, -.6], pose: (k, u) => (u > tb - .2 ? abrazo(-1)(k, u) : k.pose()) })],
  extra: (c) => { portal(c); const t = lw(c, ['SU PORTAL'], 1.0, [-.9, 2.2, -.6]); return { update: (u, tt, cam) => pop(t, u, .2, tb, cam) }; },
  c: [[0, 1.6, 3.0], [0, 1.45, -.6], [0, 1.6, 2.5], [0, 1.45, -.6]], range: 2.5, look: NOCHE }; });
// 88. En ese abrazo pasa algo que tiene nombre: la oxitocina. Te hace sentir tranquilo, en casa, a salvo.
Q(88, (d, a) => ({ ...NOCHEB, fov: 30, atores: [YO({ x: -.22, z: -.6, eyes: [[0, 'shut']], pose: abrazo(1) }), ELA({ x: .22, z: -.6, eyes: [[0, 'shut']], pose: abrazo(-1) })],
  extra: (c) => { portal(c); const g = glowSprite('#FFB0C0', 2.2, 0); g.position.set(0, 1.4, -1.2); c.add(g); const L = SEQ(c, a, [[['OXITOCINA'], 'oxitocina', 'p', [0, 2.3, -.5], 1.3], [['TRANQUILO'], 'tranquilo', 'w', [0, 2.3, -.5], 1.1], [['EN CASA'], 'casa', 'w', [0, 2.3, -.5], 1.0], [['A SALVO'], 'salvo', 'y', [0, 2.3, -.5], 1.0, 1]]); const b = brillos(c, 14, '#FFB0C0'); return { update: (u, tt, cam) => { L(u, cam); const k = smooth(R0(a, 'oxitocina') - .3, R0(a, 'oxitocina') + .8, u); g.material.opacity = .22 * k; b(u, [0, 1.5, -.4, .8], k); } }; },
  c: [[0, 1.6, 2.8], [0, 1.5, -.6], [0, 1.6, 2.3], [0, 1.5, -.6]], range: 2.5, look: { ...NOCHE, bloom: .55 } }));
// 89. Ella te dice: "Mañana nos vemos, ¿no?"
Q(89, (d, a) => ({ ...NOCHEB, fov: 30, atores: [YO({ x: -.5, z: -.6, eyes: [[0, 'look']] }), ELA({ x: .5, z: -.6, eyes: [[0, 'happy']], pose: talkP })],
  extra: (c) => { portal(c); const g = hab(c, ['MAÑANA NOS VEMOS,', '¿NO?'], 1.4, [.6, 2.1, -.5], 64); return { update: (u, tt, cam) => pop(g, u, .4, 99, cam) }; },
  c: [[0, 1.6, 3.0], [0, 1.45, -.6], [0, 1.6, 2.6], [0, 1.45, -.6]], range: 2.5, look: NOCHE }));
// 90. No sabes qué contestar. Mañana ella no se acordará de nada. ¿O sí? No lo sabes.
Q(90, (d, a) => { const tn = R0(a, 'nada'), ts = R0(a, 'si'); return { ...NOCHEB, fov: 30, atores: [YO({ x: -.5, z: -.6, eyes: [[0, 'look'], [tn - .8, 'sad'], [ts, 'small']], pose: (k) => k.pose({ armL: [12, 8], armR: [130, 100], head: 8 }) }), ELA({ x: .5, z: -.6, eyes: [[0, 'happy']] })],
  extra: (c) => { portal(c); const L = SEQ(c, a, [[['¿QUÉ LE DIGO?'], .2, 'w', [-.5, 2.25, -.5], 1.3], [['NO SE ACORDARÁ DE NADA'], 'acordara', 'b', [-.3, 2.25, -.5], 2.1], [['¿O SÍ?'], 'si', 'p', [-.5, 2.25, -.5], .8, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[0, 1.6, 3.0], [0, 1.45, -.6], [0, 1.6, 2.6], [0, 1.45, -.6]], range: 2.5, look: NOCHE }; });
// 91. "Pase lo que pase mañana, hoy ha sido el mejor día de mi vida."
Q(91, (d, a) => { const th = R0(a, 'hoy'); return { ...NOCHEB, fov: 30, atores: [YO({ x: -.5, z: -.6, eyes: [[0, 'happy']], pose: talkP }), ELA({ x: .5, z: -.6, eyes: [[0, 'look'], [th + 1, 'heart']] })],
  extra: (c, s, A) => { portal(c); const rb = rubor(A[1]); const g1 = hab(c, ['PASE LO QUE PASE', 'MAÑANA…'], 1.4, [-.4, 2.1, -.5], 64); const g2 = hab(c, ['HOY HA SIDO EL MEJOR', 'DÍA DE MI VIDA'], 1.6, [-.3, 2.1, -.5], 64); return { update: (u, tt, cam) => { rb(smooth(th + .5, th + 1.5, u)); pop(g1, u, .2, th - .1, cam); pop(g2, u, th, 99, cam); } }; },
  c: [[0, 1.6, 3.0], [0, 1.45, -.6], [0, 1.6, 2.6], [0, 1.45, -.6]], range: 2.5, look: NOCHE }; });
// 92. Ella sube a su casa. Tú te vas andando. Muy despacio.
Q(92, (d, a) => { const tv = R0(a, 'vas'), td = R0(a, 'despacio'); return { ...NOCHEB, fov: 32, atores: [ELA({ eyes: [[0, 'happy']], move: (u) => (u > 1.6 ? [0, 0, 30] : [lerp(.4, 0, smooth(0, 1.2, u)), 0, lerp(-.6, -1.4, smooth(0, 1.5, u))]), pose: (k, u) => k.walk(u) }), YO({ eyes: [[0, 'happy']], move: (u) => [lerp(-.4, -2.2, smooth(tv, d, u)), 0, lerp(-.6, .4, smooth(tv, d, u))], pose: (k, u) => (u > tv ? k.walk(u * .5) : k.pose()) })],
  extra: (c) => { portal(c); const t = lw(c, ['MUY DESPACIO'], 1.3, [-1.4, 2.2, -.2]); return { update: (u, tt, cam) => pop(t, u, td - .2, 99, cam) }; },
  c: [[0, 1.7, 3.6], [-.4, 1.4, -.6], [-.4, 1.7, 3.2], [-.8, 1.4, -.4]], range: 3, look: NOCHE }; });
// 93. Medianoche. Estás en la cama. Miras el reloj del móvil. 11:59. 12 en punto.
Q(93, (d, a) => { const t59 = R0(a, '59'), tp = R0(a, 'punto'); return { amb: 'cuartoYo', ambo: { night: true }, fov: 30, atores: [YO({ x: 0, z: -.4, eyes: [[0, 'look'], [tp, 'wide']], pose: (k) => k.pose({ armL: [60, 70], armR: [60, 70], head: -8 }) })],
  extra: (c, s, A) => { const gm = glowMovil(c, A[0]); const ph = movil(['', ''], { hora: '23:59', bg: '#2A1830' }); ph.scale.setScalar(.35); c.add(ph); const k1 = lab(c, ['23:59'], 1.0, [.9, 2.1, -.6], { bg: '#1E2230', fg: '#FF7A8A', size: 96, w: 420 }); const k2 = lab(c, ['00:00'], 1.0, [.9, 2.1, -.6], { bg: '#C9361F', fg: '#fff', size: 96, w: 420 }); const m = lw(c, ['MEDIANOCHE'], 1.3, [-.9, 2.1, -.6]); return { update: (u, tt, cam) => { gm(); naMao(ph, A[0], -.02); ph.lookAt(cam.position); pop(m, u, 0, t59 - .5, cam); pop(k1, u, t59 - .2, tp - .1, cam); pop(k2, u, tp, 99, cam); shake(cam, u > tp && u < tp + .4 ? .02 : 0, u); } }; },
  c: [[.4, 1.6, 3.0], [0, 1.4, -.4], [.2, 1.55, 2.3], [0, 1.45, -.4]], range: 2.5, look: NOCHE }; });
// 94. Llega un mensaje: "Tiempo terminado." Y nada más.
Q(94, (d, a) => { const tt = R0(a, 'tiempo'), tn = R0(a, 'nada'); return { amb: 'gris', fov: 28, k: 1, atores: [],
  extra: (c) => { const ch = chat(c, [0, 1.5, -.5], 1.15, [['l', 'Hoy ha sido increíble ♥', 0], ['s', 'TIEMPO TERMINADO', tt - .1]], { hora: '00:00' }); const n = lw(c, ['Y NADA MÁS'], 1.1, [1.1, 1.0, -.2]); return { update: (u, t2, cam) => { ch.userData.upd(u); pop(n, u, tn - .2, 99, cam); } }; },
  c: [[0, 1.5, 4.3], [0, 1.5, -.5], [0, 1.5, 3.9], [0, 1.5, -.5]], range: 2, blur: 4, look: NOCHE }; });
// 95. Abres el chat. Todos los mensajes siguen ahí... Pero ella ya no está conectada.
Q(95, (d, a) => { const tc = R0(a, 'conectada'), tco = R0(a, 'corazones'), ta = R0(a, 'audios'), tl = R0(a, 'lista'); return { amb: 'gris', fov: 28, k: 1, atores: [],
  extra: (c) => { const ch = chat(c, [0, 1.5, -.5], 1.15, [['l', '@heart', 0], ['r', '@smile', 0], ['l', '♪ Audio · 0:40', 0], ['l', 'Las 36 preguntas', 0], ['l', 'Hoy ha sido increíble ♥', 0], ['s', 'TIEMPO TERMINADO', 0]], { hora: '00:01', max: 6 }); const L = SEQ(c, a, [[['LOS CORAZONES'], 'corazones', 'p', [1.2, 2.2, -.2], 1.3], [['LOS AUDIOS'], 'audios', 'p', [1.2, 2.2, -.2], 1.1], [['LAS 36 PREGUNTAS'], 'lista', 'p', [1.2, 2.2, -.2], 1.5], [['DESCONECTADA'], 'conectada', 'b', [1.2, 2.2, -.2], 1.4, 1]]); return { update: (u, t2, cam) => { ch.userData.upd(u, { off: u > tc - .5 }); L(u, cam); } }; },
  c: [[.3, 1.5, 4.3], [.3, 1.5, -.5], [.3, 1.5, 3.9], [.3, 1.5, -.5]], range: 2, blur: 4, look: NOCHE }; });
// 96. No duermes en toda la noche.
Q(96, (d, a) => ({ amb: 'cuartoYo', ambo: { night: true }, fov: 30, atores: [YO({ x: 0, z: -.4, eyes: [[0, 'sad']], pose: (k) => k.pose({ armL: [12, 8], armR: [12, 8], head: -6 }) })],
  extra: (c) => { const ck = clock(.5, 4); ck.position.set(-1.0, 2.0, -.8); c.add(ck); const t = lw(c, ['NO DUERMES'], 1.1, [.9, 2.1, -.5]); return { update: (u, tt, cam) => { ck.set(1 + u * 1.5); pop(t, u, .2, 99, cam); } }; },
  c: [[0, 1.6, 3.0], [0, 1.5, -.4], [0, 1.6, 2.6], [0, 1.5, -.4]], range: 2.5, look: { exposure: .85, bloom: .35, vig: .65 } }));
// 97. Al día siguiente vas al instituto con el estómago encogido. Ella está en la puerta hablando con sus amigas. Pasas a su lado.
Q(97, (d, a) => { const tp = R0(a, 'pasas'); return { amb: 'barrio', fov: 32, look: { exposure: .95 }, atores: [ELA({ x: .6, z: -.8, eyes: [[0, 'happy']], pose: talkP }), MUJ(1, { x: 1.3, z: -1.0, eyes: [[0, 'happy']] }), MUJ(3, { x: -.1, z: -1.1, eyes: [[0, 'happy']] }), YO({ eyes: [[0, 'sad']], move: (u) => [lerp(-2.6, 1.6, smooth(tp - 2, d + .5, u)), 0, .3], pose: (k, u) => k.walk(u) })],
  extra: (c) => { INSTI(c); const t = lw(c, ['AL DÍA SIGUIENTE'], 1.6, [-.6, 2.4, -.6]); const e = lab(c, ['ESTÓMAGO ENCOGIDO'], 1.8, [-.6, 2.4, -.6], BLUE); return { update: (u, tt, cam) => { pop(t, u, .1, R0(a, 'estomago') - .2, cam); pop(e, u, R0(a, 'estomago'), tp, cam); } }; },
  c: [[0, 1.7, 4.2], [0, 1.4, -.4], [.4, 1.7, 3.7], [.4, 1.4, -.4]], range: 3.5 }; });
// 98. Y no te mira.
Q(98, (d, a) => ({ amb: 'barrio', fov: 30, look: { exposure: .9 }, atores: [ELA({ x: .5, z: -.6, eyes: [[0, 'lookl']], pose: talkP }), YO({ x: -.5, z: .1, eyes: [[0, 'sad']] })],
  extra: (c) => { INSTI(c); const t = lab(c, ['NO TE MIRA'], 1.2, [-.5, 2.15, .1], BLUE); return { update: (u, tt, cam) => pop(t, u, .1, 99, cam) }; },
  c: [[-.2, 1.6, 3.0], [0, 1.45, -.3], [-.2, 1.6, 2.7], [0, 1.45, -.3]], range: 2.5 }));
// 99. Se te cae el mundo encima. Te sientas en tu sitio. El profesor explica ecuaciones. Tú no oyes nada.
Q(99, (d, a) => { const tn = R0(a, 'nada'); return { ...AULA(), look: { exposure: .85, vig: .65 }, atores: [PROF({ x: 1.8, z: -2.6, eyes: [[0, 'look']], pose: talkP }), YO({ x: -.5, z: -.5, eyes: [[0, 'sad']], pose: (k) => k.pose({ armL: [12, 8], armR: [12, 8], head: 12 }) })],
  extra: (c) => { QA(c); pupitres(c, [-.5, .6], -.1); const m = lab(c, ['SE TE CAE EL MUNDO'], 1.8, [-.5, 2.2, -.3], BLUE); const n = lw(c, ['NO OYES NADA'], 1.3, [-.5, 2.2, -.3]); return { update: (u, tt, cam) => { pop(m, u, .2, R0(a, 'sientas'), cam); pop(n, u, tn - .2, 99, cam); } }; },
  c: [[-.3, 1.7, 3.0], [-.3, 1.4, -.8], [-.3, 1.65, 2.5], [-.3, 1.4, -.8]], range: 3 }; });
// 100. Y entonces alguien te deja una nota en la mesa. La abres debajo del pupitre.
Q(100, (d, a) => { const tn = R0(a, 'nota'); return { ...AULA(), look: { exposure: .9 }, atores: [YO({ x: -.5, z: -.5, eyes: [[0, 'sad'], [tn, 'wide'], [R0(a, 'abres'), 'down']] })],
  extra: (c) => { QA(c); pupitres(c, [-.5, .6], -.1); const n = nota(c, [''], .25, [0, .82, .1]); n.rotation.x = -Math.PI / 2; const t = lw(c, ['UNA NOTA'], 1.0, [-.5, 2.1, -.3]); return { update: (u, tt, cam) => { n.position.x = lerp(.8, -.45, smooth(tn - .8, tn + .3, u)); pop(t, u, tn, 99, cam); } }; },
  c: [[-.3, 1.65, 2.9], [-.4, 1.2, -.2], [-.3, 1.6, 2.5], [-.4, 1.2, -.2]], range: 2 }; });
// 101. "No sé qué me pasó ayer. No me acuerdo de casi nada."
Q(101, (d, a) => { const tn = R0(a, 'no', 1.2); return { amb: 'aula', fov: 30, k: 1, atores: [],
  extra: (c) => { const n1 = nota(c, ['No sé qué', 'me pasó ayer.'], 1.6, [0, 1.5, -.5], 90), n2 = nota(c, ['No me acuerdo', 'de casi nada.'], 1.6, [0, 1.5, -.5], 90); return { update: (u) => { n1.visible = u < tn; n2.visible = u >= tn; } }; },
  c: [[0, 1.5, 2.2], [0, 1.5, -.5], [0, 1.5, 1.9], [0, 1.5, -.5]], range: 1.5, blur: 6 }; });
// 102. "Pero me acuerdo de que una persona me contó que se cayó delante de todo el comedor... Y me reí tanto que me dolió la tripa. ¿Eras tú?"
Q(102, (d, a) => { const t2 = R0(a, 'cayo'), t3 = R0(a, 'rei'), t4 = R0(a, 'eras'); return { amb: 'aula', fov: 30, k: 1, atores: [],
  extra: (c) => { const N = [nota(c, ['Pero me acuerdo', 'de una persona…'], 1.6, [0, 1.5, -.5], 84), nota(c, ['…que se cayó', 'delante de todo', 'el comedor'], 1.6, [0, 1.5, -.5], 80), nota(c, ['y me reí tanto', 'que me dolió', 'la tripa'], 1.6, [0, 1.5, -.5], 80), nota(c, ['¿Eras tú? ♥'], 1.6, [0, 1.5, -.5], 120)]; const T = [0, t2 - .3, t3 - .2, t4 - .2]; const b = brillos(c, 10, '#FFB0C0'); return { update: (u) => { N.forEach((n, i) => (n.visible = u >= T[i] && (i === 3 || u < T[i + 1]))); b(u, [0, 1.5, -.3, 1], u > t4 ? 1 : 0); } }; },
  c: [[0, 1.5, 2.2], [0, 1.5, -.5], [0, 1.5, 1.9], [0, 1.5, -.5]], range: 1.5, blur: 6 }; });
// 103. Levantas la vista. Ella te está mirando desde la otra punta de la clase. Con las pupilas muy grandes.
Qs(103, ['pupilas'], [
  (d, a) => ({ ...AULA(), atores: [YO({ x: -1.6, z: .3, eyes: [[0, 'down'], [.6, 'wide']] }), ELA({ x: 1.6, z: -1.6, eyes: [[0, 'look']] })],
    extra: (c, s, A) => { QA(c); pupitres(c, [-1.6], .6); pupitres(c, [1.6], -1.2); const rb = rubor(A[1]); const t = lw(c, ['TE ESTÁ MIRANDO'], 1.5, [1.6, 2.4, -1.6]); return { update: (u, tt, cam) => { rb(.6); pop(t, u, R0(a, 'mirando') - .2, 99, cam); } }; },
    c: [[-2.4, 1.8, 2.6], [1.4, 1.4, -1.6], [-2.2, 1.75, 2.2], [1.5, 1.45, -1.6]], range: 4 }),
  (d, a) => ({ amb: 'aula', fov: 28, atores: [ELA({ x: 0, z: -.3, eyes: [[0, 'wide']] })],
    extra: (c, s, A) => { const rb = rubor(A[0]); const o = ojo(c, [-1.1, 1.8, -.2], .9); const t = lab(c, ['PUPILAS MUY GRANDES'], 1.7, [.4, 2.25, -.2], PINK); return { update: (u, tt, cam) => { rb(.7); o.userData.set(.95); pop(t, u, .2, 99, cam); } }; },
    c: [[0, 1.65, 2.6], [0, 1.6, -.3], [0, 1.65, 2.2], [0, 1.6, -.3]], range: 2 }),
]);
// 104. El hechizo duró solo 24 horas. Pero lo que le contaste no era un hechizo. Eras tú. Y eso sí se quedó.
Q(104, (d, a) => { const tc = R0(a, 'contaste'), te = R0(a, 'eras'), tq = R0(a, 'quedo'); return { amb: 'plaza', ambo: { dusk: true }, fov: 30, atores: [YO({ x: -.6, z: -.3, eyes: [[0, 'look'], [te, 'happy']] }), ELA({ x: .6, z: -.3, eyes: [[0, 'happy']] })],
  extra: (c) => { const r = cut(anillo(24), 1.4, 1.4); r.position.set(0, 2.3, -1.2); c.add(r); const h = lab(c, ['EL HECHIZO: 24 HORAS'], 1.9, [0, 2.3, -1.1], { bg: '#1E2230', fg: '#FF7A8A' }); const e = lab(c, ['ERAS TÚ'], 1.1, [0, 2.3, -.3], PINK); const q = lw(c, ['Y ESO SE QUEDÓ'], 1.4, [0, 2.3, -.3]); const b = brillos(c, 16, '#FFE27A'); return { update: (u, tt, cam) => { r.visible = u < tc; r.material.opacity = 1 - smooth(tc - 1.5, tc, u); pop(h, u, .3, tc - .2, cam); pop(e, u, te - .1, tq - .3, cam); pop(q, u, tq - .2, 99, cam); b(u, [0, 1.6, -.2, 1.2], u > te ? 1 : 0); } }; },
  c: [[0, 1.7, 3.6], [0, 1.5, -.3], [0, 1.65, 3.0], [0, 1.5, -.3]], range: 3, look: { bloom: .55 } }; });
// 105. Y ahora te pregunto a ti: ¿qué harías con esas 24 horas? ¿Se lo contarías todo? Cuéntamelo en los comentarios.
Q(105, (d, a) => { const tq = R0(a, 'harias'), tc = R0(a, 'contarias'), tm = R0(a, 'cuentamelo'); return { amb: 'cuartoYo', fov: 32, atores: [YO({ x: -.5, z: -.3, eyes: [[0, 'look'], [tm, 'happy']], pose: (k, u) => (u > tm ? wave(k, u) : point(k)) })],
  extra: (c) => { const L = SEQ(c, a, [[['¿QUÉ HARÍAS CON 24 HORAS?'], 'harias', 'y', [.6, 2.2, -.3], 2.3], [['¿SE LO CONTARÍAS TODO?'], 'contarias', 'p', [.6, 2.2, -.3], 2.1], [['CUÉNTAMELO EN LOS COMENTARIOS'], 'cuentamelo', 'w', [.4, 2.2, -.3], 2.5, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[0, 1.6, 3.4], [0, 1.5, -.3], [0, 1.6, 2.9], [0, 1.5, -.3]], range: 3 }; });
// 106. Y si te ha gustado esta historia, suscríbete
Q(106, (d, a) => { const ts = R0(a, 'suscribete'); return { amb: 'plaza', ambo: { dusk: true }, fov: 32, atores: [YO({ x: -1.4, z: -.3, eyes: [[0, 'happy']], pose: wave }), ELA({ x: -.6, z: -.3, eyes: [[0, 'heart']], pose: (k, u) => wave(k, u + 1) })],
  extra: (c) => { const sb = suscribe(2.2); sb.position.set(1.1, 1.8, -1.0); c.add(sb); const b = brillos(c, 14, '#FFE27A'); return { update: (u, t, cam) => { const k2 = smooth(ts - .3, ts, u); sb.scale.setScalar(Math.max(.01, k2)); sb.rotation.z = u > ts + .6 && u < ts + 1.6 ? Math.sin(u * 40) * .05 : 0; b(u, [1.1, 1.8, -.9, 1.1], smooth(ts, ts + .3, u)); } }; },
  c: [[0, 1.7, 3.8], [0, 1.5, -.6], [0, 1.65, 3.2], [0, 1.5, -.6]], range: 3, look: { bloom: .5 } }; });
