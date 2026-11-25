// "¿Y si te quedaras atrapado en la tienda de tu crush?" — horizontal 1280x720, ~9:35
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
const Q = (i, fn) => { const a = S[i], b = end(i), d = Math.min(b, 575.0) - a; CENAS.push([(x, y) => plano(x, y, mk(fn(d, a), d)), a, b]); };
const Qt = (a, b, fn) => { const d = Math.min(b, 575.0) - a; CENAS.push([(x, y) => plano(x, y, mk(fn(d, a), d)), a, b]); };
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

// ===================== CENAS 0–33 =====================
const CAMPW = [[0, 2.4, 6.5], [-.6, 1.0, -2.4], [0, 2.2, 5.6], [-.6, 1.0, -2.4]];
const PUERTA = [[.3, 1.4, 2.6], [0, .9, -1.4], [.3, 1.35, 2.2], [0, .9, -1.4]];
const IN0 = [[0, 1.3, 3.2], [0, .85, -.7], [0, 1.25, 2.8], [0, .85, -.7]];
const IN2 = [[0, 1.15, 2.4], [0, .9, -.2], [0, 1.12, 2.1], [0, .9, -.2]];
const INY = [[-.35, 1.1, 1.8], [-.45, .95, -.2], [-.35, 1.1, 1.6], [-.45, .95, -.2]];
const INE = [[.35, 1.1, 1.8], [.45, .95, -.2], [.35, 1.1, 1.6], [.45, .95, -.2]];
// actores dentro de la tienda
const ELLAI = (o = {}) => SIENTA(ELLA, .48, -.15, o);
const YOI = (o = {}) => SIENTA(YO, -.48, -.15, o);
const LUCI = (o = {}) => DORM(LUCIA, { x: .15, z: -1.35, y: .18, ...o });
// montaje del interior: sacos, luz, ronquidos. dev: { luz(k), z(u,cam,on) }
const INT = (c, o = {}) => { saco(c, .15, -1.35, '#7AB85A', 1.9); saco(c, 1.15, -.9, '#E8667F', 1.0, Math.PI / 2); const lz = luzTienda(c); lz(o.luz ?? 1); const z = zzz(c); z(0, [0, 0, 0], new THREE.Object3D(), false); return { luz: lz, z: (u, cam, on = 1) => z(u, [-.75, .55, -1.3], cam, on) }; };
const LLU = [-6, 6, 0, 4.5, -5, 3.5];
// 0. Campamento del instituto. Tercera noche. Las once y cinco.
Q(0, (d, a) => { const tt = R0(a, 'tercera'), to = R0(a, 'once'); return { ...CAMPN, atores: [],
  extra: (c) => { CAMP(c, { litAll: 1 }); const f = fogata(); f.position.set(-4.2, 0, -.6); c.add(f); const L = SEQ(c, a, [[['CAMPAMENTO DEL INSTITUTO'], .1, 'y', [-.6, 2.5, 1.5], 2.4], [['TERCERA NOCHE'], tt, 'w', [-.6, 2.5, 1.5], 1.5], [['LAS 23:05'], to - .2, 'p', [-.6, 2.5, 1.5], 1.3, 1]]); return { update: (u, t, cam) => { f.tick && f.tick(u); L(u, cam); } }; },
  c: [[-1.5, 3.0, 7.5], [-1.0, 1.0, -2.4], [-.5, 2.4, 6.2], [-.6, 1.0, -2.4]], k: 1, range: 4, look: NOCHEN }; });
// 1. Las tiendas de los chicos a un lado. Las de las chicas, al otro.
Q(1, (d, a) => { const tc = R0(a, 'chicas'); return { ...CAMPN, atores: [],
  extra: (c) => { CAMP(c, { litAll: 1 }); const L = SEQ(c, a, [[['CHICOS: A UN LADO'], .1, 'b', [-10.2, 2.1, -1.0], 1.8], [['CHICAS: AL OTRO'], tc - .2, 'p', [-1.0, 2.1, -1.0], 1.7, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[-10.5, 2.0, 3.6], [-10.2, .9, -2.6], [-1.2, 2.0, 3.6], [-.9, .9, -2.6]], k: 1, range: 4, look: NOCHEN }; });
// 2. Y en medio, la regla más importante. La que Ramírez ha repetido cuarenta veces.
Q(2, (d, a) => { const tr = R0(a, 'ramirez'), tc = R0(a, 'cuarenta'); return { amb: 'albergue', fov: 30, ambo: { dusk: 1 }, atores: [RAMI({ x: 0, z: -.4, eyes: [[0, 'flat']], talk: [[tr, d]], pose: (k, u) => k.pose({ armL: [12, 8], armR: [150 + Math.sin(u * 6) * 8, 170] }) })],
  extra: (c) => { const L = SEQ(c, a, [[['LA REGLA MÁS IMPORTANTE'], .1, 'y', [0, 2.4, -.3], 2.4], [['PROFE RAMÍREZ'], tr - .2, 'b', [0, 2.4, -.3], 1.6], [['REPETIDA 40 VECES'], tc - .2, 'r', [0, 2.4, -.3], 2.0, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.7, 3.6], [0, 1.5, -.4], [0, 1.65, 3.1], [0, 1.5, -.4]], range: 3, look: TARDE }; });
// 3. Después de las once, el que esté en una tienda que no es la suya: llamada a sus padres y a casa.
Q(3, (d, a) => { const tt = R0(a, 'tienda'), tp = R0(a, 'padres'), tk = R0(a, 'casa'); return { amb: 'albergue', fov: 30, ambo: { dusk: 1 }, atores: [RAMI({ x: -.6, z: -.4, eyes: [[0, 'flat'], [tp, 'wide']], talk: [[0, d]], pose: (k, u) => (u > tp ? point(k) : talkP(k, u)) })],
  extra: (c) => { const L = SEQ(c, a, [[['DESPUÉS DE LAS 23:00'], .1, 'w', [.75, 2.25, -.2], 1.7], [['EN UNA TIENDA AJENA…'], tt - .3, 'y', [.75, 2.25, -.2], 1.8], [['LLAMADA A TUS PADRES'], tp - .3, 'r', [.75, 2.25, -.2], 1.9], [['¡Y A CASA!'], tk - .2, 'r', [.75, 2.25, -.2], 1.2, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.7, 3.8], [0, 1.5, -.4], [0, 1.65, 3.3], [0, 1.5, -.4]], range: 3, look: TARDE }; });
// 4. Y tú estás saliendo de tu tienda. Descalzo. Con una linterna en la mano.
Q(4, (d, a) => { const td = R0(a, 'descalzo'), tl = R0(a, 'linterna'); return { ...CAMPN, atores: [YO({ x: -8.2, z: -1.5, eyes: [[0, 'look'], [td, 'wide']], move: (u) => [-8.2 + smooth(.3, 2.5, u) * .5, 0, lerp(-1.9, -.5, smooth(.2, 2.4, u))], pose: (k, u) => (u < 2.4 ? agacha(k, u) : k.pose({ armL: [12, 8], armR: [70, 20] })) })],
  extra: (c, s, A) => { CAMP(c); const li = enManoL(c, A, 0); const L = SEQ(c, a, [[['TÚ, SALIENDO DE TU TIENDA'], .1, 'w', [-7.6, 2.1, -.8], 2.2], [['DESCALZO'], td - .1, 'y', [-7.6, 2.1, -.8], 1.1], [['CON UNA LINTERNA'], tl - .3, 'y', [-7.6, 2.1, -.8], 1.6, 1]]); return { update: (u, t, cam) => { li(1); L(u, cam); } }; },
  c: [[-7.4, 1.6, 3.0], [-8.0, .9, -1.2], [-7.5, 1.55, 2.6], [-7.9, .95, -1.0]], range: 3, look: NOCHEN }; });
// 5. No es tu linterna. Es la de ella. Tu crush. | Te la prestó esta tarde, en la excursión.
Qs(5, ['presto'], [
  (d, a) => { const te = R0(a, 'ella'), tc = R0(a, 'crush'); return { ...CAMPN, atores: [YO({ x: -7.6, z: -.5, eyes: [[0, 'look'], [tc, 'happy']], pose: (k) => k.pose({ armL: [12, 8], armR: [95, 60] }) })],
    extra: (c, s, A) => { CAMP(c); const li = enManoL(c, A, 0); const L = SEQ(c, a, [[['NO ES TU LINTERNA'], .05, 'w', [-7.6, 1.95, -.4], 1.6], [['ES LA DE ELLA'], te - .2, 'y', [-7.6, 1.95, -.4], 1.4], [['TU CRUSH ♥'], tc - .2, 'p', [-7.6, 1.95, -.4], 1.2, 1]]); return { update: (u, t, cam) => { li(1); L(u, cam); } }; },
    c: [[-7.5, 1.45, 1.9], [-7.6, 1.3, -.5], [-7.5, 1.45, 1.6], [-7.6, 1.3, -.5]], range: 2, look: NOCHEN }; },
  (d, a) => { const tx = R0(a, 'excursion'); return { amb: 'sendero', fov: 30, atores: [YO({ x: -.5, z: 0, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [70, 30] }) }), ELLA({ x: .55, z: 0, eyes: [[0, 'happy']], pose: (k) => k.pose({ armL: [70, 40], armR: [12, 8] }) })],
    extra: (c, s, A) => { const li = linterna(); c.add(li); li.userData.on(0); const L = SEQ(c, a, [[['ESTA TARDE'], .05, 'y', [0, 2.3, -.2], 1.3], [['EN LA EXCURSIÓN'], tx - .3, 'w', [0, 2.3, -.2], 1.7, 1]]); return { update: (u, t, cam) => { const p = hand(A[1]), q = hand(A[0]); const f = smooth(.2, 1.2, u); li.position.set(lerp(p.x, q.x, f), lerp(p.y, q.y, f), p.z + .12); L(u, cam); } }; },
    c: [[0, 1.6, 3.6], [0, 1.3, -.2], [0, 1.6, 3.1], [0, 1.3, -.2]], range: 3, look: MEMO }; }]);
// 6. Y tú has decidido que no puede esperar a mañana. Que hay que devolverla. Ahora mismo.
Q(6, (d, a) => { const tm = R0(a, 'manana'), ta = R0(a, 'ahora'); return { ...CAMPN, atores: [YO({ x: -7.0, z: -.3, eyes: [[0, 'flat'], [ta, 'wide']], pose: (k, u) => k.pose({ armL: [u > ta ? 150 : 12, u > ta ? 30 : 8], armR: [95, 60] }) })],
  extra: (c, s, A) => { CAMP(c); const li = enManoL(c, A, 0); const L = SEQ(c, a, [[['NO PUEDE ESPERAR'], .1, 'w', [-7.0, 2.05, -.2], 1.7], [['A MAÑANA'], tm - .3, 'w', [-7.0, 2.05, -.2], 1.1], [['HAY QUE DEVOLVERLA'], R0(a, 'devolverla') - .3, 'y', [-7.0, 2.05, -.2], 1.9], [['¡AHORA MISMO!'], ta - .2, 'r', [-7.0, 2.05, -.2], 1.5, 1]]); return { update: (u, t, cam) => { li(1); L(u, cam); } }; },
  c: [[-6.6, 1.5, 2.5], [-7.0, 1.3, -.3], [-6.7, 1.5, 2.1], [-7.0, 1.35, -.3]], range: 2.5, look: NOCHEN }; });
// 7. Cruzas el campamento agachado. | Llegas a su tienda. Abres la cremallera. "¿Hola?"
Qs(7, ['llegas'], [
  (d) => ({ ...CAMPN, atores: [YO({ x: -7, z: -.2, eyes: [[0, 'wide']], move: (u) => [lerp(-7.2, -.9, u / d), 0, -.3], pose: agacha })],
    extra: (c, s, A) => { CAMP(c); const li = enManoL(c, A, 0); const t = lw(c, ['AGACHADO'], 1.1, [0, 0, 0]); return { update: (u, tt, cam) => { li(1); t.position.set(A[0].root.position.x, 1.75, -.2); pop(t, u, .2, 99, cam); } }; },
    cam: [[0, [-6.6, 1.5, 3.4], [-7.0, .9, -.4]], [99, [-.4, 1.5, 3.4], [-.8, .9, -.4]]], k: 1, range: 3, look: NOCHEN }),
  (d, a) => { const tc = R0(a, 'cremallera'), th = R0(a, 'hola'); return { ...CAMPN, atores: [YO({ x: -.55, z: -1.1, eyes: [[0, 'look']], pose: (k, u) => k.pose({ lean: 14, armL: [12, 8], armR: [80, 40] }) })],
    extra: (c, s, A) => { CAMP(c, { lit: .3 }); const z = lab(c, ['ZIIIP…'], .8, [.55, 1.4, -1.2], OSC); const h = hab(c, ['¿HOLA?'], .8, [-.55, 1.95, -1.0], 60); const L = SEQ(c, a, [[['SU TIENDA'], .05, 'p', [.0, 2.2, -1.4], 1.1, 1]]); return { update: (u, t, cam) => { L(u, cam); pop(z, u, tc - .1, th - .1, cam); pop(h, u, th - .1, 99, cam); } }; },
    c: PUERTA, range: 2.5, look: NOCHEN }; }]);
// 8. Ella se asoma con el saco hasta el cuello. "¿Qué haces aquí? ¡Entra, que te van a ver!"
Q(8, (d, a) => { const tq = R0(a, 'que'), te = R0(a, 'entra'); return { ...CAMPN, atores: [ELLA({ x: .05, z: -1.35, eyes: [[0, 'wide'], [te, 'flat']], talk: [[tq, d]], pose: (k, u) => k.pose({ armL: [100, 150], armR: [u > te ? 70 : 100, u > te ? 10 : 150] }) }), YO({ x: -1.0, z: -.7, eyes: [[0, 'happy']], pose: (k) => k.pose({ armL: [12, 8], armR: [80, 40] }) })],
  extra: (c, s, A) => { CAMP(c, { lit: .3 }); const L = SEQ(c, a, [[['SACO HASTA EL CUELLO'], .1, 'w', [-.9, 2.05, -.8], 1.7]]); const h = hab(c, ['¿QUÉ HACES AQUÍ?', '¡ENTRA, QUE TE VAN A VER!'], 1.4, [.55, 1.78, .05], 56); return { update: (u, t, cam) => { L(u, cam); pop(h, u, tq - .1, 99, cam); } }; },
  c: [[.1, 1.35, 2.4], [-.2, 1.0, -1.2], [.1, 1.3, 2.0], [-.2, 1.0, -1.2]], range: 2.5, look: NOCHEN }; });
// 9. Y entras.
Q(9, (d) => ({ ...CAMPN, atores: [YO({ x: -.5, z: -.7, eyes: [[0, 'look']], move: (u) => [lerp(-.5, 0, smooth(.1, .8, u)), -1.2 * smooth(.5, 1.3, u), lerp(-.7, -1.6, smooth(.2, 1.2, u))], pose: agacha })],
  extra: (c) => { CAMP(c, { lit: .3 }); const t = lab(c, ['Y ENTRAS'], 1.0, [-.9, 1.9, -1.0]); return { update: (u, tt, cam) => pop(t, u, .1, 99, cam) }; },
  c: PUERTA, range: 2.5, look: NOCHEN }));
// 10. Dentro está ella. Y también su mejor amiga, Lucía. Dormida. Roncando como un tractor.
Q(10, (d, a) => { const tl = R0(a, 'lucia'), tr = R0(a, 'roncando'); return { ...DENTROC, atores: [ELLAI({ eyes: [[0, 'look']] }), YOI({ eyes: [[0, 'wide'], [tr, 'flat']] }), LUCI()],
  extra: (c) => { const I = INT(c); const L = SEQ(c, a, [[['ELLA ♥'], .1, 'p', [.48, 1.48, -.1], .8], [['Y LUCÍA, SU MEJOR AMIGA'], tl - .4, 'w', [0, 1.48, -.1], 2.0], [['DORMIDA'], R0(a, 'dormida') - .2, 'w', [0, 1.48, -.1], 1.0], [['ROONC… ROOONC…'], tr - .1, 'b', [0, 1.48, -.1], 1.5, 1]]); return { update: (u, t, cam) => { L(u, cam); I.z(u, cam, u > tl ? 1 : 0); } }; },
  c: IN0, range: 4, look: DENTRO }; });
// 11. Le das la linterna. Ella la coge. Te das la vuelta para irte… | ¡pum!
Qs(11, ['pum'], [
  (d, a) => { const tc = R0(a, 'coge'), tv = R0(a, 'vuelta'); return { ...DENTROC, atores: [ELLAI({ eyes: [[0, 'happy']], pose: (k) => k.pose({ armL: [12, 8], armR: [60, 30] }) }), YOI({ eyes: [[0, 'happy'], [tv, 'look']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u < tc ? 70 : 12, u < tc ? 30 : 8] }) }), LUCI()],
    extra: (c, s, A) => { const I = INT(c); const li = linterna(); c.add(li); li.userData.on(0); const L = SEQ(c, a, [[['LE DAS LA LINTERNA'], .05, 'w', [0, 1.48, -.1], 1.8], [['ELLA LA COGE'], tc - .2, 'y', [0, 1.48, -.1], 1.4], [['TE DAS LA VUELTA…'], tv - .3, 'w', [0, 1.48, -.1], 1.7, 1]]); return { update: (u, t, cam) => { const p = hand(A[1]), q = hand(A[0]); const f = smooth(tc - .4, tc + .2, u); li.position.set(lerp(p.x, q.x, f), lerp(p.y, q.y, f), p.z + .12); L(u, cam); I.z(u, cam); } }; },
    c: IN2, range: 2, look: DENTRO }; },
  (d) => ({ ...DENTROC, atores: [ELLAI({ eyes: [[0, 'wide']], pose: abraza }), YOI({ eyes: [[0, 'wide']], pose: (k) => k.pose({ armL: [40, 60], armR: [40, 60] }) }), LUCI()],
    extra: (c) => { INT(c); const t = lab(c, ['¡PUM!'], 1.3, [0, 1.48, -.1], RED); return { update: (u, tt, cam) => { pop(t, u, 0, 99, cam); } }; },
    c: IN2, range: 2, look: rayo([0], DENTRO) })]);
// 12. Un trueno enorme. Y empieza a llover como si se acabara el mundo.
Q(12, (d, a) => { const tl = R0(a, 'llover'), tm = R0(a, 'mundo'); return { ...CAMPN, atores: [],
  extra: (c) => { CAMP(c, { lit: .3 }); const r = lluvia(c, 520, LLU); const L = SEQ(c, a, [[['UN TRUENO ENORME'], .05, 'y', [-.6, 2.25, -1.6], 1.9], [['Y EMPIEZA A LLOVER…'], tl - .3, 'b', [-.6, 2.25, -1.6], 2.0], [['…COMO SI SE ACABARA EL MUNDO'], tm - .9, 'w', [-1.0, 2.25, -1.6], 2.7, 1]]); return { update: (u, t, cam) => { r(u, smooth(tl - .4, tl + .4, u)); L(u, cam); } }; },
  c: [[1.0, 2.4, 5.0], [0, 1.2, -2.4], [.6, 2.2, 4.3], [0, 1.2, -2.4]], k: 1, range: 4, look: rayo([.05, 2.4]) }; });
// 13. Y entonces oyes unos pasos fuera. Ves una luz que se acerca.
Q(13, (d, a) => { const tp = R0(a, 'pasos'), tl = R0(a, 'luz'); return { ...DENTROC, atores: [ELLAI({ eyes: [[0, 'wide'], [tl, 'look']] }), YOI({ eyes: [[0, 'wide'], [tl, 'look']] }), LUCI()],
  extra: (c) => { const I = INT(c, { luz: .7 }); const g = glowSprite('#FFF2C0', 1.0, 0); c.add(g); const L = SEQ(c, a, [[['PASOS FUERA…'], tp - .2, 'w', [0, 1.48, -.1], 1.4], [['UNA LUZ QUE SE ACERCA'], tl - .2, 'y', [0, 1.48, -.1], 2.0, 1]]); return { update: (u, t, cam) => { const f = smooth(tl - .3, d, u); g.position.set(lerp(2.5, 1.25, f), .9, lerp(-1.8, -.6, f)); g.material.opacity = f * .9; L(u, cam); I.z(u, cam); } }; },
  c: IN0, range: 4, look: DENTRO }; });
// 14. Es el profe Ramírez. Con su linterna gigante.
Q(14, (d, a) => { const tg = R0(a, 'gigante'); return { ...CAMPN, atores: [RAMI({ x: 4.5, z: -.4, eyes: [[0, 'flat']], move: (u) => [lerp(5.0, 3.2, u / d), 0, -.5], pose: (k, u) => { k.walk(u * 1.4, .5); k.pose({ armR: [80, 10] }); } })],
  extra: (c, s, A) => { CAMP(c, { lit: .3 }); const r = lluvia(c, 520, [-1, 8, 0, 4.5, -4, 3]); const L0 = linterna('#FFF6D8'); L0.scale.setScalar(1.4); c.add(L0); L0.userData.on(1); const L = SEQ(c, a, [[['EL PROFE RAMÍREZ'], .05, 'b', [3.8, 2.4, -.4], 1.8], [['CON SU LINTERNA GIGANTE'], tg - .6, 'y', [3.8, 2.4, -.4], 2.2, 1]]); return { update: (u, t, cam) => { const p = hand(A[0]); L0.position.set(p.x, p.y, p.z + .2); r(u); L(u, cam); } }; },
  c: [[3.0, 1.6, 3.4], [3.8, 1.2, -.5], [2.9, 1.6, 3.0], [3.4, 1.2, -.5]], range: 3, look: NOCHEN }; });
// 15. Y se sienta en el banco del porche… justo delante de la tienda. Con un termo de café.
Q(15, (d, a) => { const tj = R0(a, 'justo'), tt = R0(a, 'termo'); return { ...CAMPN, atores: [RAMI({ x: 2.4, z: -1.35, eyes: [[0, 'flat']], move: (u) => (u < .9 ? [lerp(3.4, 2.4, u / .9), 0, -1.0] : [2.4, SBN, -1.35]), pose: (k, u) => (u < .9 ? k.walk(u * 1.4, .5) : sitP(k)) })],
  extra: (c, s, A) => { CAMP(c, { lit: .3 }); const r = lluvia(c, 520, LLU); const tm = termo(); c.add(tm); const L = SEQ(c, a, [[['SE SIENTA EN EL PORCHE'], .05, 'w', [1.9, 1.95, -1.1], 1.9], [['JUSTO DELANTE DE LA TIENDA'], tj - .2, 'r', [1.9, 1.95, -1.1], 2.1], [['CON UN TERMO DE CAFÉ'], tt - .4, 'y', [1.9, 1.95, -1.1], 1.8, 1]]); return { update: (u, t, cam) => { const p = hand(A[0]); tm.position.set(p.x + .05, p.y + .1, p.z + .1); r(u); L(u, cam); } }; },
  c: [[1.2, 1.7, 3.3], [1.2, 1.0, -1.6], [1.2, 1.65, 2.9], [1.2, 1.0, -1.6]], range: 3, look: NOCHEN }; });
// 16. No se va a mover de ahí.
Q(16, (d) => ({ ...CAMPN, atores: [RAMI({ x: 2.4, z: -1.35, y: SBN, eyes: [[0, 'flat']], pose: (k, u) => { sitP(k); sorbe(k, u); } })],
  extra: (c, s, A) => { CAMP(c, { lit: .3 }); const r = lluvia(c, 300, [0, 5, 0, 4.5, -3, 2]); const tm = termo(); c.add(tm); const t = lab(c, ['NO SE VA A MOVER DE AHÍ'], 2.0, [2.4, 2.05, -1.1], RED); return { update: (u, tt, cam) => { const p = hand(A[0]); tm.position.set(p.x + .05, p.y + .1, p.z + .1); r(u); pop(t, u, .1, 99, cam); } }; },
  c: [[2.4, 1.3, 1.8], [2.4, 1.15, -1.3], [2.4, 1.3, 1.5], [2.4, 1.15, -1.3]], range: 2, look: NOCHEN }));
// 17. Estás atrapado. En la tienda de tu crush. Con tu crush. Y con Lucía roncando.
Q(17, (d, a) => { const tt = R0(a, 'tienda'), tc = R0(a, 'con'), tl = R0(a, 'lucia'); return { ...DENTROC, atores: [ELLAI({ eyes: [[0, 'look']] }), YOI({ eyes: [[0, 'wide']], pose: (k, u) => tiembla(k, u, .5) }), LUCI()],
  extra: (c) => { const I = INT(c); const L = SEQ(c, a, [[['ATRAPADO'], .05, 'r', [0, 1.48, -.1], 1.2], [['EN LA TIENDA DE TU CRUSH'], tt - .3, 'p', [0, 1.48, -.1], 2.2], [['CON TU CRUSH'], tc - .1, 'p', [0, 1.48, -.1], 1.4], [['Y CON LUCÍA RONCANDO'], tl - .4, 'w', [0, 1.48, -.1], 2.0, 1]]); return { update: (u, t, cam) => { L(u, cam); I.z(u, cam); } }; },
  c: IN0, range: 4, look: DENTRO }; });
// 18. Suscríbete y activa la campanita. Vamos allá.
Q(18, (d, a) => { const ts = R0(a, 'suscribete'), tv = R0(a, 'vamos'); return { ...DENTROC, atores: [YOI({ x: -.7, eyes: [[0, 'look'], [ts, 'happy']], pose: (k, u) => { sitP(k); if (u > ts) wave(k, u); } }), LUCI()],
  extra: (c) => { INT(c); const sb = suscribe(1.5); sb.position.set(.55, 1.05, -.4); c.add(sb); const b = brillos(c, 12, '#FFE27A'); const q = lw(c, ['¿Y SI…?'], .8, [-.7, 1.5, -.1]); const v = lab(c, ['¡VAMOS ALLÁ!'], 1.2, [-.6, 1.48, -.1], ROSA); return { update: (u, t, cam) => { pop(q, u, .1, tv - .1, cam); pop(v, u, tv, 99, cam); b(u, [.55, 1.05, -.3, .9], smooth(ts - .3, ts + .3, u)); } }; },
  c: IN0, range: 4, look: DENTRO }; });
// 19. Ella te mira a la luz de la linterna y te susurra:
Q(19, (d, a) => { const ts = R0(a, 'susurra'); return { ...DENTROC, atores: [ELLAI({ eyes: [[0, 'look']], pose: (k) => k.pose({ armL: [12, 8], armR: [70, 60] }) })],
  extra: (c, s, A) => { INT(c, { luz: .35 }); const li = enManoL(c, A, 0); const t = lw(c, ['TE SUSURRA…'], 1.0, [.45, 1.45, -.1]); return { update: (u, tt, cam) => { li(1); pop(t, u, ts - .2, 99, cam); } }; },
  c: INE, range: 2, look: DENTRO }; });
// 20. "¿De verdad has venido a devolverme la linterna? Te la presté hace cinco horas."
Q(20, (d, a) => { const tc = R0(a, 'cinco'); return { ...DENTROC, atores: [ELLAI({ eyes: [[0, 'flat']], talk: [[0, d]], pose: (k) => k.pose({ armL: [12, 8], armR: [70, 60] }) }), YOI({ eyes: [[0, 'wide']] })],
  extra: (c, s, A) => { INT(c, { luz: .5 }); const li = enManoL(c, A, 0); const h = hab(c, ['¿DE VERDAD HAS VENIDO', 'A DEVOLVERME LA LINTERNA?'], 1.5, [.4, 1.48, -.1], 54); const h2 = hab(c, ['TE LA PRESTÉ', 'HACE CINCO HORAS'], 1.2, [.4, 1.48, -.1], 56); const n = lab(c, ['5 HORAS'], .8, [-.5, 1.42, -.05], OSC); return { update: (u, t, cam) => { li(1); pop(h, u, .05, tc - 1.0, cam); pop(h2, u, tc - .9, 99, cam); pop(n, u, tc, 99, cam); } }; },
  c: IN2, range: 2, look: DENTRO }; });
// 21. Te ha pillado. "Es que… la podías necesitar."
Q(21, (d, a) => { const te = R0(a, 'es'); return { ...DENTROC, atores: [YOI({ eyes: [[0, 'wide'], [te, 'flat']], talk: [[te, d]], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > te ? 150 : 12, u > te ? 150 : 8] }) })],
  extra: (c, s, A) => { INT(c, { luz: .5 }); const t = lab(c, ['PILLADO'], 1.0, [-.45, 1.5, -.1], RED); const h = hab(c, ['ES QUE… LA PODÍAS', 'NECESITAR'], 1.2, [-.4, 1.52, -.1], 56); const g = gotas(c, 3); return { update: (u, tt, cam) => { pop(t, u, .05, te - .1, cam); pop(h, u, te, 99, cam); const p = new THREE.Vector3(); A[0].head.getWorldPosition(p); g(u, [p.x + .2, p.y + .2, p.z, .1]); } }; },
  c: INY, range: 2, look: DENTRO }; });
// 22. "Tengo otra", dice. Y te enseña otra linterna.
Q(22, (d, a) => { const te = R0(a, 'ensena'); return { ...DENTROC, atores: [ELLAI({ eyes: [[0, 'happy']], talk: [[0, 1.0]], pose: (k, u) => k.pose({ armL: [u > te ? 120 : 60, u > te ? 20 : 30], armR: [70, 60] }) }), YOI({ eyes: [[0, 'flat']] })],
  extra: (c, s, A) => { INT(c, { luz: .6 }); const li = enManoL(c, A, 0); const L2 = linterna('#C8F0FF'); c.add(L2); const h = hab(c, ['TENGO OTRA'], .9, [.45, 1.48, -.1], 60); return { update: (u, t, cam) => { li(1); const v = new THREE.Vector3(); A[0].arms.L.hand.getWorldPosition(v); L2.position.set(v.x, v.y, v.z + .12); L2.userData.on(u > te ? 1 : 0); pop(h, u, .05, 99, cam); } }; },
  c: IN2, range: 2, look: DENTRO }; });
// 23. Y aquí tienes que saber una cosa. Esta semana de campamento te ha venido de maravilla.
Q(23, (d, a) => { const ts = R0(a, 'semana'), tm = R0(a, 'maravilla'); const D = ['LUN', 'MAR', 'MIÉ', 'JUE', 'VIE']; return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: 0, z: -.5, eyes: [[0, 'look'], [tm, 'happy']] })],
  extra: (c) => { const M = D.map((t, i) => lab(c, [t], .5, [-1.1 + i * .55, 2.25, -.4], i % 2 ? BLUE : NARANJA)); const L = SEQ(c, a, [[['TIENES QUE SABER UNA COSA'], .1, 'w', [0, .75, .1], 2.3], [['ESTA SEMANA TE HA VENIDO'], ts, 'y', [0, .75, .1], 2.3], [['DE MARAVILLA'], tm - .2, 'p', [0, .75, .1], 1.5, 1]]); return { update: (u, t, cam) => { M.forEach((m, i) => pop(m, u, ts + i * .15, 99, cam)); L(u, cam); } }; },
  c: [[0, 1.55, 4.0], [0, 1.5, -.5], [0, 1.55, 3.5], [0, 1.5, -.5]], range: 3, look: TARDE }; });
// 24. Desayunáis en la misma mesa. | Vais en el mismo autobús. | Hacéis las mismas excursiones. Y eso cuenta.
Qs(24, ['vais', 'haceis'], [
  (d) => ({ amb: 'albergue', fov: 30, atores: [SENTA(YO, -.45, -.6, { eyes: [[0, 'happy']] }), SENTA(ELLA, .45, -.6, { eyes: [[0, 'happy']] })],
    extra: (c) => { mesa(c, 0, -.15, .75, 2.0, .7, '#C8A27A'); for (const x of [-.45, .45]) { const t = new THREE.Mesh(new THREE.CylinderGeometry(.07, .06, .14, 14), std('#E8E2D2')); t.position.set(x, .85, -.1); c.add(t); } const t = lab(c, ['LA MISMA MESA'], 1.4, [0, 1.85, -.5]); return { update: (u, tt, cam) => pop(t, u, .1, 99, cam) }; },
    c: [[0, 1.5, 3.0], [0, 1.1, -.5], [0, 1.5, 2.6], [0, 1.1, -.5]], range: 3, look: MANANA }),
  (d) => ({ amb: 'salida', fov: 30, ambo: { manana: 1 }, atores: [YO({ x: .5, z: -1.9, eyes: [[0, 'happy']] }), ELLA({ x: 1.2, z: -1.9, eyes: [[0, 'happy']] })],
    extra: (c) => { const t = lab(c, ['EL MISMO AUTOBÚS'], 1.6, [.9, 2.75, -1.6]); return { update: (u, tt, cam) => pop(t, u, .1, 99, cam) }; },
    c: [[.9, 1.6, 2.2], [.9, 1.4, -2.0], [.9, 1.6, 1.8], [.9, 1.4, -2.0]], range: 3, look: MANANA }),
  (d, a) => { const tc = R0(a, 'cuenta'); return { amb: 'sendero', fov: 30, atores: [YO({ x: -.35, z: -1, move: (u) => [-.35, 0, -1 + u * .35], eyes: [[0, 'happy']], pose: (k, u) => k.walk(u * 1.4, .5) }), ELLA({ x: .35, z: -1, move: (u) => [.35, 0, -1 + u * .35], eyes: [[0, 'happy']], pose: (k, u) => k.walk(u * 1.4 + .5, .5) })],
    extra: (c) => { const L = SEQ(c, a, [[['LAS MISMAS EXCURSIONES'], .05, 'w', [0, 2.3, -.4], 2.2], [['Y ESO CUENTA'], tc - .3, 'y', [0, 2.3, -.4], 1.4, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
    c: [[0, 1.6, 3.6], [0, 1.3, -.5], [0, 1.6, 3.2], [0, 1.3, -.3]], range: 3, look: MANANA }; }]);
// 25. En 1968, el psicólogo Robert Zajonc hizo un experimento muy curioso.
const ZAJ = (o = {}) => H({ outfit: 'jaleco', glasses: true, hair: 'old', hairc: '#3A2A22', glow: 0, ...o });
Q(25, (d, a) => { const tc = R0(a, 'curioso'); return { ...AULA(), atores: [ZAJ({ x: 0, z: -.4, eyes: [[0, 'look'], [tc, 'happy']], pose: (k, u) => (u > tc ? point(k) : k.pose()) })],
  extra: (c) => { const t = lab(c, ['UN EXPERIMENTO MUY CURIOSO'], 2.4, [0, .75, .2], { bg: '#FBF7EC', fg: '#2A2A34' }); return { update: (u, tt, cam) => pop(t, u, tc - 1.2, 99, cam) }; },
  c: [[0, 1.6, 3.6], [0, 1.5, -.4], [0, 1.6, 3.1], [0, 1.5, -.4]], range: 3 }; });
// 26. Enseñaba palabras inventadas y símbolos que parecían letras chinas, sin que supieran lo que significaban.
Q(26, (d, a) => { const ts = R0(a, 'simbolos'), tn = R0(a, 'sin'); return { ...AULA(), atores: [ZAJ({ x: -1.3, z: -.4, eyes: [[0, 'look']], pose: point }), EXTRA(1, { x: 1.4, z: -.2, eyes: [[0, 'look'], [tn, 'wide']] })],
  extra: (c) => { const C = ZW.slice(0, 3).map((w, i) => tarjeta(c, w, 1.0, [-.2 + (i - 1) * .2, 2.2 - i * .45, -.6 + i * .05])); const S2 = ['⊕ ⊗ ⊞', '△ ◇ ☐', '∞ ∑ Ω'].map((w, i) => tarjeta(c, w, .7, [.6 + i * .5, .85, -.3], { bg: '#E8E2D2' })); const q = lab(c, ['¿?'], .5, [1.4, 2.05, -.1], RED); const L = SEQ(c, a, [[['PALABRAS INVENTADAS'], .2, 'y', [0, 2.75, -.5], 2.0, 1]]); return { update: (u, t, cam) => { C.forEach((m, i) => pop(m, u, .4 + i * .3, 99, cam)); S2.forEach((m, i) => pop(m, u, ts - .2 + i * .15, 99, cam)); pop(q, u, tn, 99, cam); L(u, cam); } }; },
  c: [[0, 1.6, 4.4], [0, 1.5, -.4], [0, 1.6, 3.9], [0, 1.5, -.4]], k: 1, range: 3 }; });
// 27. Algunos los veían una vez. Otros, muchas veces.
Q(27, (d, a) => { const to = R0(a, 'otros'); return { ...AULA(), atores: [EXTRA(1, { x: -1.1, z: -.3, eyes: [[0, 'look']] }), EXTRA(3, { x: 1.1, z: -.3, eyes: [[0, 'look'], [to + .5, 'wide']] })],
  extra: (c) => { const c1 = tarjeta(c, 'SARICIK', .8, [-1.1, 2.05, -.3]); const n1 = lab(c, ['× 1'], .6, [-1.1, .75, .1], BLUE); const C2 = [0, 1, 2, 3].map((i) => tarjeta(c, 'SARICIK', .8, [1.1 + i * .06, 2.05 - i * .06, -.3 - i * .05])); const n2 = lab(c, ['× 25'], .7, [1.1, .75, .1], NARANJA); return { update: (u, t, cam) => { pop(c1, u, .1, 99, cam); pop(n1, u, .3, 99, cam); C2.forEach((m, i) => pop(m, u, to + i * .2, 99, cam)); pop(n2, u, to + .4, 99, cam); } }; },
  c: [[0, 1.6, 4.2], [0, 1.45, -.3], [0, 1.6, 3.8], [0, 1.45, -.3]], k: 1, range: 3 }; });
// 28. Y luego les preguntaba: ¿esto significa algo bueno o algo malo?
Q(28, (d, a) => { const tb = R0(a, 'bueno'), tm = R0(a, 'malo'); return { ...AULA(), atores: [ZAJ({ x: -1.2, z: -.4, eyes: [[0, 'look']], talk: [[0, d]], pose: talkP })],
  extra: (c) => { const k = tarjeta(c, 'IKTITAF', 1.3, [.5, 2.0, -.4]); const b = lab(c, ['¿ALGO BUENO?'], 1.2, [-.05, .95, -.1], VERDE); const m = lab(c, ['¿ALGO MALO?'], 1.2, [1.1, .95, -.1], RED); return { update: (u, t, cam) => { pop(k, u, .1, 99, cam); pop(b, u, tb - .3, 99, cam); pop(m, u, tm - .3, 99, cam); } }; },
  c: [[0, 1.6, 4.0], [0, 1.45, -.4], [0, 1.6, 3.6], [0, 1.45, -.4]], k: 1, range: 3 }; });
// 29. Cuantas más veces la habían visto, más positiva les parecía. Sin ninguna otra razón.
Q(29, (d, a) => { const ts = R0(a, 'sin'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const b = barras(c, [['1 VEZ', .28, '#B8BCC8'], ['2', .38, '#A8C8E0'], ['5', .52, '#7AB8D8'], ['10', .68, '#5FA0D8'], ['25', .9, '#3F8A52']], 2.8, [0, 1.6, -.4], { title: '¿LE PARECÍA ALGO BUENO?' }); const t = lab(c, ['SIN NINGUNA OTRA RAZÓN'], 2.1, [0, .55, -.2], ROSA); return { update: (u, tt, cam) => { b.scale.y = smooth(0, 1, u) * .999 + .001; pop(t, u, ts - .2, 99, cam); } }; },
  c: [[0, 1.4, 3.9], [0, 1.35, -.4], [0, 1.4, 3.5], [0, 1.35, -.4]], range: 3 }; });
// 30. Lo llamaron el efecto de mera exposición. Lo que vemos a menudo nos resulta más familiar y más agradable.
Q(30, (d, a) => { const tv = R0(a, 'vemos'), ta = R0(a, 'agradable'); return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: -.6, z: -.5, eyes: [[0, 'look'], [ta, 'happy']] }), ELLA({ x: .6, z: -.5, eyes: [[0, 'look'], [ta, 'happy']] })],
  extra: (c) => { const h = corazon(c, .5); h.position.set(0, 2.0, -.4); const L = SEQ(c, a, [[['EFECTO DE MERA EXPOSICIÓN'], .1, 'p', [0, 2.55, -.4], 2.6], [['LO QUE VEMOS A MENUDO…'], tv - .3, 'w', [0, 2.55, -.4], 2.2], [['…NOS GUSTA MÁS'], ta - .6, 'y', [0, 2.55, -.4], 1.6, 1]]); return { update: (u, t, cam) => { L(u, cam); h.visible = u > ta - .3; h.scale.setScalar(latido(u)); } }; },
  c: [[0, 1.75, 4.2], [0, 1.65, -.5], [0, 1.75, 3.7], [0, 1.65, -.5]], range: 3, look: TARDE }; });
// 31. Ojo: no es magia, y no funciona si caes mal desde el principio. Pero ayuda.
Q(31, (d, a) => { const tf = R0(a, 'funciona'), ta = R0(a, 'ayuda'); return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: 0, z: -.5, eyes: [[0, 'flat'], [ta, 'happy']], pose: (k, u) => (u > ta ? k.pose({ armL: [12, 8], armR: [150, 20] }) : k.pose()) })],
  extra: (c) => { const L = SEQ(c, a, [[['OJO: NO ES MAGIA'], .05, 'r', [0, 2.35, -.4], 1.7], [['SI CAES MAL, NO FUNCIONA'], tf - .4, 'w', [0, 2.35, -.4], 2.2], [['PERO AYUDA'], ta - .3, 'y', [0, 2.35, -.4], 1.3, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.65, 3.8], [0, 1.55, -.5], [0, 1.65, 3.3], [0, 1.55, -.5]], range: 3, look: TARDE }; });
// 32. Y cinco días viéndoos a todas horas… es mucha exposición.
Q(32, (d, a) => { const tm = R0(a, 'mucha'); return { ...DENTROC, atores: [ELLAI({ eyes: [[0, 'look']] }), YOI({ eyes: [[0, 'happy']] }), LUCI()],
  extra: (c) => { const I = INT(c); const L = SEQ(c, a, [[['5 DÍAS × 24 HORAS'], .05, 'w', [0, 1.48, -.1], 1.8], [['MUCHA EXPOSICIÓN'], tm - .2, 'y', [0, 1.48, -.1], 1.8, 1]]); return { update: (u, t, cam) => { L(u, cam); I.z(u, cam); } }; },
  c: IN0, range: 4, look: DENTRO }; });
// 33. Otro trueno. Más fuerte. La tienda entera se sacude con el viento.
Q(33, (d, a) => { const tf = R0(a, 'fuerte'), ts = R0(a, 'sacude'); return { ...CAMPN, atores: [],
  extra: (c) => { CAMP(c, { lit: .3, porche: true }); const T = c.children.find((x) => x.isGroup); const r = lluvia(c, 520, LLU); const L = SEQ(c, a, [[['OTRO TRUENO'], .05, 'y', [-.6, 2.25, -1.6], 1.5], [['MÁS FUERTE'], tf - .2, 'r', [-.6, 2.25, -1.6], 1.3], [['LA TIENDA SE SACUDE'], ts - .3, 'w', [-.6, 2.25, -1.6], 2.0, 1]]); return { update: (u, t, cam) => { r(u); if (T) T.rotation.z = u > ts - .3 ? Math.sin(u * 30) * .03 : 0; L(u, cam); shake(cam, u > ts - .3 ? .02 : 0, u); } }; },
  c: [[.5, 2.0, 4.6], [0, 1.1, -2.4], [.3, 1.9, 4.0], [0, 1.1, -2.4]], k: 1, range: 4, look: rayo([.05, .9]) }; });

// ===================== CENAS 34–66 =====================
const SCH = (o = {}) => H({ outfit: 'jaleco', glasses: true, glow: 0, ...o });
const ARON = (o = {}) => H({ outfit: 'jaleco', glasses: true, hair: 'old', hairc: '#8A7A6A', glow: 0, ...o });
const agarraE = (k) => k.pose({ armL: [75, 10], armR: [12, 8], lean: -8 });
const ELLAG = (o = {}) => SIENTA(ELLA, .3, -.15, { pose: agarraE, ...o });
const YOG = (o = {}) => SIENTA(YO, -.3, -.15, o);
const IN3 = [[0, 1.1, 2.0], [0, .88, -.2], [0, 1.08, 1.8], [0, .88, -.2]];
// rubor sobre la cabeza de un actor
const ROJO = (c, A, i) => { const g = glowSprite('#FF4A5A', .55, 0); c.add(g); const v = new THREE.Vector3(); return (k) => { A[i].head.getWorldPosition(v); g.position.set(v.x, v.y - .1, v.z + .12); g.material.opacity = k * .35; }; };
// 34. Y de repente notas una mano agarrándote del brazo. Es ella.
Q(34, (d, a) => { const tm = R0(a, 'mano'), te = R0(a, 'ella'); return { ...DENTROC, atores: [ELLAG({ eyes: [[0, 'wide']], pose: (k, u) => (u > tm ? agarraE(k) : k.pose()) }), YOG({ eyes: [[0, 'look'], [tm, 'wide']] }), LUCI()],
  extra: (c, s, A) => { const I = INT(c, { luz: .8 }); const r = ROJO(c, A, 1); const L = SEQ(c, a, [[['UNA MANO EN TU BRAZO'], tm - .2, 'w', [0, 1.48, -.1], 1.9], [['ES ELLA ♥'], te - .2, 'p', [0, 1.48, -.1], 1.1, 1]]); return { update: (u, t, cam) => { L(u, cam); r(smooth(te, te + .6, u)); I.z(u, cam); } }; },
  c: IN3, range: 2, look: rayo([.0], DENTRO) }; });
// 35. "Perdona", susurra. "Es que las tormentas me dan muchísimo miedo."
Q(35, (d, a) => { const tt = R0(a, 'tormentas'); return { ...DENTROC, atores: [ELLAG({ eyes: [[0, 'sad']], talk: [[0, d]] }), YOG({ eyes: [[0, 'wide']] })],
  extra: (c, s, A) => { INT(c, { luz: .8 }); const r = ROJO(c, A, 1); const h = hab(c, ['PERDONA…'], .8, [.4, 1.48, -.1], 60); const h2 = hab(c, ['ES QUE LAS TORMENTAS', 'ME DAN MUCHÍSIMO MIEDO'], 1.5, [.35, 1.48, -.1], 54); return { update: (u, t, cam) => { pop(h, u, .05, tt - .8, cam); pop(h2, u, tt - .7, 99, cam); r(1); } }; },
  c: IN3, range: 2, look: DENTRO }; });
// 36. No te suelta. Y tú no te mueves. No respiras. Eres una estatua.
Q(36, (d, a) => { const tm = R0(a, 'mueves'), tr = R0(a, 'respiras'), te = R0(a, 'estatua'); return { ...DENTROC, atores: [ELLAG({ eyes: [[0, 'shut']] }), YOG({ eyes: [[0, 'wide']], tint: undefined })],
  extra: (c, s, A) => { INT(c, { luz: .8 }); const r = ROJO(c, A, 1); const tn = tinte(A[1], '#C8CCD4', .7); const L = SEQ(c, a, [[['NO TE SUELTA'], .05, 'p', [-.1, 1.48, -.1], 1.3], [['NO TE MUEVES'], tm - .3, 'w', [-.1, 1.48, -.1], 1.3], [['NO RESPIRAS'], tr - .3, 'w', [-.1, 1.48, -.1], 1.3], [['ERES UNA ESTATUA'], te - .4, 'b', [-.1, 1.48, -.1], 1.7, 1]]); return { update: (u, t, cam) => { L(u, cam); r(1); tn(smooth(te - .4, te + .3, u) * .8); } }; },
  c: INY, range: 2, look: DENTRO }; });
// 37. ¿Por qué cuando tenemos miedo buscamos a alguien cerca?
Q(37, (d, a) => { const tb = R0(a, 'buscamos'); return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: -.55, z: -.5, eyes: [[0, 'wide']], move: (u) => [lerp(-1.0, -.45, smooth(tb - .3, tb + .6, u)), 0, -.5], pose: (k) => tiembla(k, 0, .3) }), ELLA({ x: .55, z: -.5, eyes: [[0, 'wide']] })],
  extra: (c) => { const L = SEQ(c, a, [[['CUANDO TENEMOS MIEDO…'], .05, 'w', [0, 2.35, -.4], 2.1], [['¿POR QUÉ BUSCAMOS A ALGUIEN?'], tb - .3, 'y', [0, 2.35, -.4], 2.5, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.65, 3.9], [0, 1.55, -.5], [0, 1.65, 3.4], [0, 1.55, -.5]], range: 3, look: rayo([.2]) }; });
// 38. En 1959, el psicólogo Stanley Schachter quiso averiguarlo.
Q(38, (d, a) => { const tq = R0(a, 'quiso'); return { ...AULA(), atores: [SCH({ x: 0, z: -.4, eyes: [[0, 'look'], [tq, 'smug']], pose: (k, u) => (u > tq ? k.pose({ armL: [12, 8], armR: [150, 150] }) : k.pose()) })],
  extra: (c) => { const t = lab(c, ['QUISO AVERIGUARLO'], 1.8, [0, .75, .2], { bg: '#FBF7EC', fg: '#2A2A34' }); return { update: (u, tt, cam) => pop(t, u, tq - .2, 99, cam) }; },
  c: [[0, 1.6, 3.6], [0, 1.5, -.4], [0, 1.6, 3.1], [0, 1.5, -.4]], range: 3 }; });
// 39. Le dijo a unas voluntarias que iban a recibir descargas eléctricas bastante dolorosas.
Q(39, (d, a) => { const tv = R0(a, 'voluntarias'), td = R0(a, 'descargas'); return { amb: 'gris', fov: 30, k: 1, atores: [SCH({ x: -1.6, z: -.6, eyes: [[0, 'flat']], talk: [[0, d]], pose: (k, u) => (u > td ? point(k) : talkP(k, u)) }), ...[0, 1, 2].map((i) => MUJ(i, { x: -.4 + i * .7, z: -.2, eyes: [[0, 'look'], [td + .3, 'wide']], pose: (k, u) => (u > td + .3 ? tiembla(k, u, .5) : k.pose()) }))],
  extra: (c) => { maquina(c, 1.9, -.9); const L = SEQ(c, a, [[['VOLUNTARIAS'], tv - .2, 'w', [.3, 2.3, -.3], 1.4], [['DESCARGAS ELÉCTRICAS'], td - .2, 'r', [.3, 2.3, -.3], 2.1], [['¡BASTANTE DOLOROSAS!'], R0(a, 'dolorosas') - .5, 'r', [.3, 2.3, -.3], 2.0, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.6, 4.6], [0, 1.4, -.4], [0, 1.6, 4.1], [0, 1.4, -.4]], range: 3 }; });
// 40. Era mentira, nadie recibió ninguna. Pero ellas no lo sabían.
Q(40, (d, a) => { const tn = R0(a, 'nadie'), ts = R0(a, 'sabian'); return { amb: 'gris', fov: 30, k: 1, atores: [...[0, 1, 2].map((i) => MUJ(i, { x: -1.2 + i * .7, z: -.2, eyes: [[0, 'wide']], pose: (k, u) => tiembla(k, u, .4) }))],
  extra: (c) => { maquina(c, 1.4, -.8); const x = lab(c, ['✗'], .5, [1.4, 1.3, -.4], RED); const L = SEQ(c, a, [[['ERA MENTIRA'], .05, 'y', [-.3, 2.3, -.3], 1.4], [['NADIE RECIBIÓ NINGUNA'], tn - .2, 'w', [-.3, 2.3, -.3], 2.0], [['PERO ELLAS NO LO SABÍAN'], ts - .9, 'p', [-.3, 2.3, -.3], 2.2, 1]]); return { update: (u, t, cam) => { L(u, cam); pop(x, u, .3, 99, cam); } }; },
  c: [[0, 1.6, 4.4], [0, 1.4, -.4], [0, 1.6, 3.9], [0, 1.4, -.4]], range: 3 }; });
// 41. Luego les preguntó: mientras esperáis, ¿preferís esperar solas o con otras personas?
Q(41, (d, a) => { const ts = R0(a, 'solas'), to = R0(a, 'otras'); return { amb: 'gris', fov: 30, k: 1, atores: [SCH({ x: 0, z: .2, eyes: [[0, 'look']], talk: [[0, d]], pose: talkP }), MUJ(0, { x: -.6, z: .4, eyes: [[0, 'look']] })],
  extra: (c) => { const p1 = puertaR(c, -1.4, -1.4, ['ESPERAR SOLA'], '#5A6070'); const p2 = puertaR(c, 1.4, -1.4, ['ESPERAR', 'ACOMPAÑADA'], '#3F8A52'); const t = lw(c, ['¿DÓNDE QUIERES ESPERAR?'], 2.0, [0, 2.4, .2]); return { update: (u, tt, cam) => { pop(t, u, .1, ts - .3, cam); pop(p1, u, ts - .3, 99); pop(p2, u, to - .3, 99); } }; },
  c: [[0, 1.6, 4.8], [0, 1.4, -.6], [0, 1.6, 4.3], [0, 1.4, -.6]], range: 3 }; });
// 42. Las más asustadas preferían esperar acompañadas. Sobre todo con gente que pasaba por lo mismo.
Q(42, (d, a) => { const ts = R0(a, 'sobre'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const b = barras(c, [['POCO\nASUSTADAS', .38, '#B8BCC8'], ['MUY\nASUSTADAS', .9, '#3F8A52']], 2.6, [0, 1.55, -.4], { title: '¿PREFERÍAN ESPERAR ACOMPAÑADAS?' }); const t = lab(c, ['CON GENTE EN SU MISMA SITUACIÓN'], 2.5, [0, .5, -.2], VERDE); return { update: (u, tt, cam) => { b.scale.y = smooth(0, 1.2, u) * .999 + .001; pop(t, u, ts - .2, 99, cam); } }; },
  c: [[0, 1.4, 3.9], [0, 1.3, -.4], [0, 1.4, 3.5], [0, 1.3, -.4]], range: 3 }; });
// 43. Cuando tenemos miedo, no queremos estar solos. Queremos a alguien al lado que entienda lo que sentimos.
Q(43, (d, a) => { const tq = R0(a, 'queremos', 1.5); return { ...DENTROC, atores: [ELLAG({ eyes: [[0, 'shut']] }), YOG({ eyes: [[0, 'happy']] }), LUCI()],
  extra: (c, s, A) => { const I = INT(c, { luz: .8 }); const L = SEQ(c, a, [[['NO QUEREMOS ESTAR SOLOS'], .1, 'w', [0, 1.48, -.1], 2.1], [['ALGUIEN AL LADO QUE NOS ENTIENDA'], tq - .2, 'y', [0, 1.48, -.1], 2.6, 1]]); return { update: (u, t, cam) => { L(u, cam); I.z(u, cam); } }; },
  c: IN0, range: 4, look: DENTRO }; });
// 44. Fuera, el profe Ramírez sorbe su café. Muy fuerte. Y tose. Y se queda ahí.
Q(44, (d, a) => { const tf = R0(a, 'fuerte'), tt = R0(a, 'tose'), tq = R0(a, 'queda'); return { ...CAMPN, atores: [RAMI({ x: 2.4, z: -1.35, y: SBN, eyes: [[0, 'flat'], [tt, 'shut'], [tt + .8, 'flat']], pose: (k, u) => { sitP(k); if (u < tt) sorbe(k, u); else k.pose({ lean: u < tt + .8 ? Math.sin(u * 30) * 6 : 0 }); } })],
  extra: (c, s, A) => { CAMP(c, { lit: .3 }); const r = lluvia(c, 300, [0, 5, 0, 4.5, -3, 2]); const tm = termo(); c.add(tm); const L = SEQ(c, a, [[['SLUUUURP'], tf - .4, 'y', [2.4, 2.05, -1.1], 1.3], [['COF, COF'], tt - .1, 'w', [2.4, 2.05, -1.1], 1.0], [['Y SE QUEDA AHÍ'], tq - .4, 'r', [2.4, 2.05, -1.1], 1.5, 1]]); return { update: (u, t, cam) => { const p = hand(A[0]); tm.position.set(p.x + .05, p.y + .1, p.z + .1); r(u); L(u, cam); } }; },
  c: [[2.4, 1.3, 1.9], [2.4, 1.15, -1.3], [2.4, 1.3, 1.6], [2.4, 1.15, -1.3]], range: 2, look: NOCHEN }; });
// 45. Dentro, os sentáis en el suelo de la tienda, muy pegados, para no hacer ruido.
Q(45, (d, a) => { const tp = R0(a, 'pegados'), tr = R0(a, 'ruido'); return { ...DENTROC, atores: [SIENTA(ELLA, .28, -.15, { eyes: [[0, 'happy']], pose: (k) => k.pose({ armL: [8, 6], armR: [125, 150] }) }), SIENTA(YO, -.28, -.15, { eyes: [[0, 'look']] }), LUCI()],
  extra: (c) => { const I = INT(c); const L = SEQ(c, a, [[['EN EL SUELO'], .1, 'w', [0, 1.48, -.1], 1.2], [['MUY PEGADOS'], tp - .3, 'p', [0, 1.48, -.1], 1.3], [['SHHH…'], tr - .3, 'b', [0, 1.48, -.1], .9, 1]]); return { update: (u, t, cam) => { L(u, cam); I.z(u, cam); } }; },
  c: IN3, range: 2, look: DENTRO }; });
// 46. Hacéis inventario de provisiones. Media bolsa de gominolas. Un paquete de galletas aplastado.
Q(46, (d, a) => { const tg = R0(a, 'gominolas'), tp = R0(a, 'paquete'); return { ...DENTROC, atores: [SIENTA(ELLA, .45, -.25, { eyes: [[0, 'happy']] }), SIENTA(YO, -.45, -.25, { eyes: [[0, 'look']] })],
  extra: (c) => { INT(c); const g = gomis(); g.position.set(-.15, .17, .35); g.rotation.x = -.3; c.add(g); const ga = galletas(c, .7); ga.position.set(.2, .09, .4); ga.rotation.set(-1.2, 0, .2); ga.scale.y = .5; const L = SEQ(c, a, [[['INVENTARIO DE PROVISIONES'], .1, 'w', [0, 1.48, -.1], 2.3], [['MEDIA BOLSA DE GOMINOLAS'], tg - .9, 'p', [0, 1.48, -.1], 2.3], [['GALLETAS APLASTADAS'], tp - .2, 'y', [0, 1.48, -.1], 2.0, 1]]); return { update: (u, t, cam) => { g.visible = u > tg - .9; ga.visible = u > tp - .2; L(u, cam); } }; },
  c: [[0, .95, 1.7], [0, .55, -.1], [0, .92, 1.45], [0, .55, -.1]], range: 2, look: DENTRO }; });
// 47. Y una chocolatina que Lucía tenía escondida. | Os la coméis a medias. | Lucía ronca más fuerte, como si lo supiera.
Qs(47, ['comeis', 'lucia'], [
  (d, a) => ({ ...DENTROC, atores: [LUCI(), SIENTA(YO, -.45, -.15, { eyes: [[0, 'wide']] })],
    extra: (c) => { const I = INT(c); const ch = choco(); ch.position.set(.6, .45, -1.1); ch.renderOrder = 6; c.add(ch); const mo = box(.4, .45, .25, std('#4A86C7'), .85, .22, -1.1); c.add(mo); const L = SEQ(c, a, [[['UNA CHOCOLATINA'], .05, 'y', [.2, 1.5, -.5], 1.5], [['ESCONDIDA EN LA MOCHILA DE LUCÍA'], R0(a, 'escondida') - .3, 'w', [.2, 1.5, -.5], 2.5, 1]]); return { update: (u, t, cam) => { ch.position.y = .45 + smooth(.2, 1.0, u) * .25; L(u, cam); I.z(u, cam); } }; },
    c: IN0, range: 4, look: DENTRO }),
  (d) => ({ ...DENTROC, atores: [SIENTA(ELLA, .3, -.15, { eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [8, 6], armR: [110 + Math.sin(u * 6) * 8, 140] }) }), SIENTA(YO, -.3, -.15, { eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [110 + Math.cos(u * 6) * 8, 140], armR: [8, 6] }) })],
    extra: (c) => { INT(c); const t = lab(c, ['A MEDIAS'], 1.0, [0, 1.48, -.1], ROSA); return { update: (u, tt, cam) => pop(t, u, .1, 99, cam) }; },
    c: IN3, range: 2, look: DENTRO }),
  (d) => ({ ...DENTROC, atores: [LUCI({ p2: (k, u) => k.pose({ bob: Math.abs(Math.sin(u * 3)) * .03 }) })],
    extra: (c) => { const I = INT(c); const t = lab(c, ['¡ROOOOONC!'], 1.3, [.1, 1.25, -.8], BLUE); const t2 = lw(c, ['…COMO SI LO SUPIERA'], 1.6, [.1, 1.55, -.8]); return { update: (u, tt, cam) => { pop(t, u, .1, 99, cam); pop(t2, u, 1.4, 99, cam); I.z(u * 2, cam); } }; },
    c: [[.1, 1.0, 1.0], [.1, .45, -1.3], [.1, .95, .8], [.1, .45, -1.3]], range: 2, look: DENTRO })]);
// 48. Y luego llega el silencio. Ese silencio incómodo en el que no sabes qué decir.
Q(48, (d, a) => { const ti = R0(a, 'incomodo'), tn = R0(a, 'sabes'); return { ...DENTROC, atores: [SIENTA(ELLA, .4, -.15, { eyes: [[0, 'down']] }), SIENTA(YO, -.4, -.15, { eyes: [[0, 'lookl'], [tn, 'down']] }), LUCI()],
  extra: (c) => { INT(c); const L = SEQ(c, a, [[['…'], .1, 'w', [0, 1.48, -.1], .6], [['SILENCIO INCÓMODO'], ti - .6, 'w', [0, 1.48, -.1], 1.8], [['¿QUÉ DIGO?'], tn - .2, 'b', [-.4, 1.48, -.1], 1.1, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: IN2, range: 2, look: DENTRO }; });
// 49. Y entonces se te ocurre una idea. "¿Jugamos a las preguntas? Pero en susurros."
Q(49, (d, a) => { const tj = R0(a, 'jugamos'), ts = R0(a, 'susurros'); return { ...DENTROC, atores: [SIENTA(ELLA, .4, -.15, { eyes: [[0, 'down'], [tj + .3, 'look']] }), SIENTA(YO, -.4, -.15, { eyes: [[0, 'look'], [.6, 'happy']], talk: [[tj, d]], pose: (k, u) => (u > tj ? susurro(k, u) : k.pose({ armL: [12, 8], armR: [150, 160] })) })],
  extra: (c) => { INT(c); const b = glowSprite('#FFF2A0', .5, 0); b.position.set(-.4, 1.45, -.1); c.add(b); const i = lab(c, ['¡IDEA!'], .7, [-.4, 1.48, -.05]); const h = hab(c, ['¿JUGAMOS A LAS PREGUNTAS?', 'PERO EN SUSURROS'], 1.5, [-.3, 1.48, -.1], 54); return { update: (u, t, cam) => { b.material.opacity = (1 - smooth(tj - .3, tj, u)) * smooth(.2, .5, u) * .9; pop(i, u, .3, tj - .3, cam); pop(h, u, tj - .1, 99, cam); } }; },
  c: IN2, range: 2, look: DENTRO }; });
// 50. Esto también viene de la ciencia. | En 1997, Arthur Aron y su equipo juntaron a parejas de estudiantes que no se conocían.
Qs(50, ['1997'], [
  (d) => ({ amb: 'gris', fov: 30, k: 1, atores: [], extra: (c) => { const t = lab(c, ['ESTO TAMBIÉN VIENE', 'DE LA CIENCIA'], 2.2, [0, 1.6, -.4], { h: 260 }); return { update: (u, tt, cam) => pop(t, u, .05, 99, cam) }; },
    c: [[0, 1.6, 3.4], [0, 1.6, -.4], [0, 1.6, 3.0], [0, 1.6, -.4]], range: 3 }),
  (d, a) => { const tp = R0(a, 'parejas'); return { ...AULA(), atores: [ARON({ x: 0, z: -.4, eyes: [[0, 'look']], pose: (k, u) => (u > tp ? k.pose({ armL: [80, 0], armR: [80, 0] }) : k.pose()) }), EXTRA(0, { x: -1.5, z: -.1, eyes: [[0, 'look']] }), EXTRA(1, { x: -.9, z: -.1, eyes: [[0, 'lookl']] }), EXTRA(3, { x: .9, z: -.1, eyes: [[0, 'look']] }), EXTRA(4, { x: 1.5, z: -.1, eyes: [[0, 'lookl']] })],
    extra: (c) => { const t = lab(c, ['PAREJAS DE DESCONOCIDOS'], 2.1, [0, .65, .3], { bg: '#FBF7EC', fg: '#2A2A34' }); return { update: (u, tt, cam) => pop(t, u, tp - .2, 99, cam) }; },
    c: [[0, 1.6, 4.4], [0, 1.4, -.4], [0, 1.6, 3.9], [0, 1.4, -.4]], k: 1, range: 3 }; }]);
// 51. A unas les dieron una lista de 36 preguntas que se iban volviendo cada vez más personales.
const CHARLA = (i0, i1, o = {}) => [SENTA((x) => EXTRA(i0, x), -.7, -.3, { eyes: [[0, 'look']], ...o }), SENTA((x) => EXTRA(i1, x), .7, -.3, { eyes: [[0, 'lookl']], ...o })];
const SILLAS = (c) => { silla(c, -.7, -.45, 0); silla(c, .7, -.45, 0); };
Q(51, (d, a) => { const tl = R0(a, 'lista'), tp = R0(a, 'personales'); return { ...AULA(), atores: CHARLA(0, 1, { talk: [[1, d]] }),
  extra: (c) => { SILLAS(c); const n = nota(c, ['36 PREGUNTAS', '1. ¿Te gustaría ser famoso?', '…', '36. ¿Qué te da miedo?'], 1.5, [0, 1.75, -.3], 52); const t = lab(c, ['CADA VEZ MÁS PERSONALES ↑'], 2.2, [0, 2.55, -.5], ROSA); return { update: (u, tt, cam) => { n.visible = u > tl - .3; pop(t, u, tp - .6, 99, cam); } }; },
  c: [[0, 1.6, 4.0], [0, 1.5, -.5], [0, 1.6, 3.6], [0, 1.5, -.5]], range: 3 }; });
// 52. A otras, preguntas de charla normal, tipo "¿cuál es tu asignatura favorita?".
Q(52, (d, a) => { const tc = R0(a, 'cual'); return { ...AULA(), atores: CHARLA(3, 4, { talk: [[1, d]] }),
  extra: (c) => { SILLAS(c); const t = lw(c, ['CHARLA NORMAL'], 1.4, [0, 2.4, -.5]); const h = hab(c, ['¿CUÁL ES TU', 'ASIGNATURA FAVORITA?'], 1.4, [-.4, 2.0, -.2], 54); return { update: (u, tt, cam) => { pop(t, u, .1, 99, cam); pop(h, u, tc - .2, 99, cam); } }; },
  c: [[0, 1.6, 4.0], [0, 1.5, -.5], [0, 1.6, 3.6], [0, 1.5, -.5]], range: 3 }; });
// 53. Charlaban unos cuarenta y cinco minutos.
Q(53, (d) => ({ ...AULA(), atores: CHARLA(0, 1, { talk: [[0, d]] }),
  extra: (c) => { SILLAS(c); const ck = clock(.5, 3); ck.position.set(0, 2.0, -.6); c.add(ck); const t = lab(c, ['45 MINUTOS'], 1.2, [0, 2.65, -.5], OSC); return { update: (u, tt, cam) => { ck.rotation.z = -u * 2; pop(t, u, .1, 99, cam); } }; },
  c: [[0, 1.6, 4.0], [0, 1.6, -.5], [0, 1.6, 3.6], [0, 1.6, -.5]], range: 3 }));
// 54. Y al final, las de las preguntas personales se sentían bastante más cercanas.
Q(54, (d, a) => { const tc = R0(a, 'cercanas'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const b = barras(c, [['CHARLA\nNORMAL', .42, '#B8BCC8'], ['36\nPREGUNTAS', .88, '#E8667F']], 2.6, [0, 1.55, -.4], { title: '¿CUÁN CERCA SE SENTÍAN?' }); const t = lab(c, ['MÁS CERCANAS'], 1.4, [0, .5, -.2], ROSA); return { update: (u, tt, cam) => { b.scale.y = smooth(0, 1.2, u) * .999 + .001; pop(t, u, tc - .3, 99, cam); } }; },
  c: [[0, 1.4, 3.9], [0, 1.3, -.4], [0, 1.4, 3.5], [0, 1.3, -.4]], range: 3 }; });
// 55. No es que las preguntas enamoren a nadie. Es que abrirse poco a poco, por turnos, hace que dos personas se acerquen.
Q(55, (d, a) => { const ta = R0(a, 'abrirse'), tt = R0(a, 'turnos'), tc = R0(a, 'acerquen'); return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: -1, z: -.5, eyes: [[0, 'look'], [tc, 'happy']], move: (u) => [lerp(-1.1, -.45, smooth(ta, tc + .3, u)), 0, -.5] }), ELLA({ x: 1, z: -.5, eyes: [[0, 'look'], [tc, 'happy']], move: (u) => [lerp(1.1, .45, smooth(ta, tc + .3, u)), 0, -.5] })],
  extra: (c) => { const L = SEQ(c, a, [[['NO ENAMORAN A NADIE'], .1, 'w', [0, 2.4, -.4], 2.0], [['ABRIRSE POCO A POCO'], ta - .2, 'y', [0, 2.4, -.4], 2.0], [['POR TURNOS'], tt - .2, 'y', [0, 2.4, -.4], 1.2], [['…Y OS ACERCÁIS'], tc - .5, 'p', [0, 2.4, -.4], 1.6, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.65, 4.0], [0, 1.55, -.5], [0, 1.65, 3.5], [0, 1.55, -.5]], range: 3, look: TARDE }; });
// 56. Así que empezáis.
Q(56, (d) => ({ ...DENTROC, atores: [SIENTA(ELLA, .4, -.15, { eyes: [[0, 'happy']] }), SIENTA(YO, -.4, -.15, { eyes: [[0, 'happy']] }), LUCI()],
  extra: (c) => { INT(c); const t = lab(c, ['EMPEZÁIS'], 1.1, [0, 1.48, -.1]); return { update: (u, tt, cam) => pop(t, u, .05, 99, cam) }; },
  c: IN2, range: 2, look: DENTRO }));
// tarjeta de pregunta (nota) para el juego
const PREG = (c, lines) => hab(c, lines, 1.5, [0, 1.48, -.1], 52);
// 57. "Si pudieras despertarte mañana con una habilidad nueva, ¿cuál sería?"
Q(57, (d) => ({ ...DENTROC, atores: [SIENTA(ELLA, .5, -.15, { eyes: [[0, 'look']] }), SIENTA(YO, -.5, -.15, { eyes: [[0, 'happy']], talk: [[0, d]], pose: susurro })],
  extra: (c) => { INT(c); const n = PREG(c, ['Si pudieras despertarte', 'con una habilidad nueva,', '¿cuál sería?']); return { update: () => {} }; },
  c: IN2, range: 2, look: DENTRO }));
// 58. Ella dice: "Volverme invisible. Para salir de aquí sin que me vea Ramírez."
Q(58, (d, a) => { const tr = R0(a, 'ramirez'); return { ...DENTROC, atores: [SIENTA(ELLA, .45, -.15, { eyes: [[0, 'smug']], talk: [[0, d]] }), SIENTA(YO, -.45, -.15, { eyes: [[0, 'look'], [tr, 'happy']] })],
  extra: (c, s, A) => { INT(c); const tn = tinte(A[0], '#9AB8FF', .7); const h = hab(c, ['VOLVERME INVISIBLE'], 1.2, [.45, 1.48, -.1], 58); const h2 = hab(c, ['PARA SALIR DE AQUÍ', 'SIN QUE ME VEA RAMÍREZ'], 1.5, [.35, 1.48, -.1], 54); return { update: (u, t, cam) => { pop(h, u, .1, R0(a, 'para') - .2, cam); pop(h2, u, R0(a, 'para') - .1, 99, cam); tn(smooth(.4, 1.2, u) * (1 - smooth(R0(a, 'para') - .2, R0(a, 'para'), u)) * .25); } }; },
  c: IN2, range: 2, look: DENTRO }; });
// 59. Tú dices: "Saber lo que piensa la gente." Ella se tapa la boca. "Eso sería horrible."
Q(59, (d, a) => { const tt = R0(a, 'tapa'), th = R0(a, 'eso'); return { ...DENTROC, atores: [SIENTA(ELLA, .45, -.15, { eyes: [[0, 'look'], [tt, 'happy']], talk: [[th, d]], pose: (k, u) => (u > tt ? tapa(k, u) : k.pose()) }), SIENTA(YO, -.45, -.15, { eyes: [[0, 'smug']], talk: [[0, tt - .4]], pose: susurro })],
  extra: (c) => { INT(c); const h = hab(c, ['SABER LO QUE', 'PIENSA LA GENTE'], 1.2, [-.4, 1.48, -.1], 56); const h2 = hab(c, ['ESO SERÍA HORRIBLE'], 1.2, [.45, 1.48, -.1], 56); const t = lw(c, ['(SE AGUANTA LA RISA)'], 1.3, [.45, 1.35, 0]); return { update: (u, tt2, cam) => { pop(h, u, .3, tt - .3, cam); pop(t, u, tt, th - .2, cam); pop(h2, u, th - .1, 99, cam); } }; },
  c: IN2, range: 2, look: DENTRO }; });
// 60. "¿Cuál sería tu día perfecto?"
Q(60, (d) => ({ ...DENTROC, atores: [SIENTA(ELLA, .5, -.15, { eyes: [[0, 'look']], talk: [[0, d]], pose: susurro }), SIENTA(YO, -.5, -.15, { eyes: [[0, 'look']] })],
  extra: (c) => { INT(c); PREG(c, ['¿Cuál sería', 'tu día perfecto?']); return { update: () => {} }; },
  c: IN2, range: 2, look: DENTRO }));
// 61. Ella lo piensa mucho. "Un día de excursión. Como el de hoy. Bueno… pero sin barro." | Y te mira. Y aparta la mirada.
Qs(61, ['mira'], [
  (d, a) => { const tu = R0(a, 'un'), tb = R0(a, 'bueno'); return { ...DENTROC, atores: [SIENTA(ELLA, .45, -.15, { eyes: [[0, 'lookl'], [tu, 'happy']], talk: [[tu, d]], pose: (k, u) => (u < tu ? k.pose({ armL: [8, 6], armR: [130, 160], head: 8 }) : k.pose()) }), SIENTA(YO, -.45, -.15, { eyes: [[0, 'look']] })],
    extra: (c) => { INT(c); const p = piensa(c, ['MMMM…'], .8, [.75, 1.55, -.2]); const h = hab(c, ['UN DÍA DE EXCURSIÓN.', 'COMO EL DE HOY'], 1.3, [.4, 1.48, -.1], 54); const h2 = hab(c, ['BUENO… COMO EL DE HOY,', 'PERO SIN BARRO'], 1.4, [.4, 1.48, -.1], 54); return { update: (u, t, cam) => { pop(p, u, .1, tu - .2, cam); pop(h, u, tu - .1, tb - .2, cam); pop(h2, u, tb - .1, 99, cam); } }; },
    c: IN2, range: 2, look: DENTRO }; },
  (d, a) => { const ta = R0(a, 'aparta'); return { ...DENTROC, atores: [SIENTA(ELLA, .45, -.15, { eyes: [[0, 'lookl'], [ta, 'down']], pose: (k, u) => k.pose({ head: u > ta ? -10 : 0 }) })],
    extra: (c, s, A) => { INT(c); const r = ROJO(c, A, 0); const L = SEQ(c, a, [[['TE MIRA'], .05, 'p', [.45, 1.45, -.1], .9], [['Y APARTA LA MIRADA'], ta - .2, 'w', [.45, 1.45, -.1], 1.6, 1]]); return { update: (u, t, cam) => { L(u, cam); r(smooth(ta - .3, ta + .4, u)); } }; },
    c: INE, range: 2, look: DENTRO }; }]);
// 62. Las preguntas van subiendo. Quiere ser veterinaria, pero le da miedo no sacar la nota.
Q(62, (d, a) => { const tv = R0(a, 'veterinaria'), tm = R0(a, 'miedo'); return { ...DENTROC, atores: [SIENTA(ELLA, .45, -.15, { eyes: [[0, 'look'], [tm, 'sad']], talk: [[tv - 1, d]] }), SIENTA(YO, -.45, -.15, { eyes: [[0, 'look']] })],
  extra: (c) => { INT(c); const t = lab(c, ['LAS PREGUNTAS VAN SUBIENDO ↑'], 2.2, [0, 1.48, -.1]); const p = piensa(c, ['QUIERO SER VETERINARIA'], 1.4, [.5, 1.6, -.2]); const p2 = piensa(c, ['¿Y SI NO SACO LA NOTA?'], 1.4, [.5, 1.6, -.2], { bg: '#DCE4F0', fg: '#2A3A6A' }); return { update: (u, tt, cam) => { pop(t, u, .05, tv - .5, cam); pop(p, u, tv - .4, tm - .2, cam); pop(p2, u, tm - .1, 99, cam); } }; },
  c: IN2, range: 2, look: DENTRO }; });
// 63. Tú le cuentas que a veces te sientes invisible en clase.
Q(63, (d, a) => { const ti = R0(a, 'invisible'); return { ...DENTROC, atores: [SIENTA(YO, -.45, -.15, { eyes: [[0, 'sad']], talk: [[0, d]] })],
  extra: (c, s, A) => { INT(c); const tn = tinte(A[0], '#8A90A0', .7); const t = lw(c, ['INVISIBLE EN CLASE'], 1.5, [-.45, 1.42, -.1]); return { update: (u, tt, cam) => { pop(t, u, ti - .3, 99, cam); tn(smooth(ti - .3, ti + .5, u) * .6); } }; },
  c: INY, range: 2, look: DENTRO }; });
// 64. Ella te dice: "Pues yo te veo."
Q(64, (d, a) => { const tp = R0(a, 'pues'); return { ...DENTROC, atores: [SIENTA(ELLA, .45, -.15, { eyes: [[0, 'look'], [tp + .8, 'happy']], talk: [[tp, d]] })],
  extra: (c) => { INT(c); const h = hab(c, ['PUES YO TE VEO.'], 1.1, [.4, 1.47, -.1], 60); const b = brillos(c, 10, '#FFE2A8'); return { update: (u, t, cam) => { pop(h, u, tp - .1, 99, cam); b(u, [.45, .95, -.3, .75], smooth(tp, tp + .4, u) * .5); } }; },
  c: INE, range: 2, look: DENTRO }; });
// 65. Y ahí se hace un silencio. Pero esta vez no es incómodo.
Q(65, (d, a) => { const tp = R0(a, 'pero'); return { ...DENTROC, atores: [SIENTA(ELLA, .32, -.15, { eyes: [[0, 'happy']] }), SIENTA(YO, -.32, -.15, { eyes: [[0, 'happy']] }), LUCI()],
  extra: (c) => { INT(c); const h = corazon(c, .3); h.position.set(0, 1.25, -.1); const L = SEQ(c, a, [[['SILENCIO…'], .05, 'w', [0, 1.48, -.1], 1.1], [['PERO NO ES INCÓMODO'], tp - .2, 'p', [0, 1.48, -.1], 1.8, 1]]); return { update: (u, t, cam) => { L(u, cam); h.visible = u > tp; h.scale.setScalar(latido(u, 70)); } }; },
  c: IN3, range: 2, look: DENTRO }; });
// 66. Y de repente te das cuenta de que el corazón te va a mil.
Q(66, (d, a) => { const tc = R0(a, 'corazon'); return { ...DENTROC, atores: [SIENTA(YO, -.45, -.15, { eyes: [[0, 'happy'], [tc, 'wide']] })],
  extra: (c) => { INT(c); const h = corazon(c, .35); h.position.set(-.45, .55, .15); const t = lab(c, ['¡A MIL!'], .8, [-.45, 1.45, -.1], RED); return { update: (u, tt, cam) => { h.visible = u > tc - .2; h.scale.setScalar(latido(u, 220) * 1.2); pop(t, u, tc + .5, 99, cam); } }; },
  c: INY, range: 2, look: DENTRO }; });

// ===================== CENAS 67–99 =====================
const SAG = (x) => -.55 * (1 - (x / 6) ** 2) + .03;
const ENP = (mk0, x, o = {}) => mk0({ x, z: 0, y: SAG(x), ...o });
const PUENTEC = [[-1.0, 1.4, 3.6], [-.4, .9, 0], [-.6, 1.35, 3.0], [-.4, .9, 0]];
const OSCURO = { exposure: .8, bloom: .5, vig: .7 };
const DUT = (o = {}) => H({ outfit: 'jaleco', glasses: true, glow: 0, ...o });
const charco = (c, x, z) => { const m = new THREE.Mesh(new THREE.CircleGeometry(1, 32), new THREE.MeshStandardMaterial({ color: '#3A5A88', roughness: .05, metalness: .4 })); m.rotation.x = -Math.PI / 2; m.scale.set(.6, .35, 1); m.position.set(x, .012, z); c.add(m); return m; };
const banos = (c, x, z) => { c.add(box(1.6, 2.2, 1.4, std('#9AA8B8'), x, 1.1, z)); c.add(box(.6, 1.5, .05, std('#5A6A7A'), x, .75, z + .72)); const t = cut(labelT(['BAÑOS'], { bg: '#2F5A9A', fg: '#fff', size: 80, w: 500, h: 150 }), 1.0, .3); t.position.set(x, 2.45, z + .72); c.add(t); };
// 67. ¿Es por la tormenta? | ¿Por el profe que está a un metro? | ¿O es por ella?
Qs(67, ['profe', 'ella'], [
  (d) => ({ ...CAMPN, atores: [], extra: (c) => { CAMP(c, { lit: .3 }); const r = lluvia(c, 520, LLU); const t = lab(c, ['¿ES POR LA TORMENTA?'], 1.9, [-.2, 2.3, 0]); return { update: (u, tt, cam) => { r(u); pop(t, u, .05, 99, cam); } }; },
    c: [[1.0, 2.4, 5.0], [0, 1.2, -2.4], [.8, 2.3, 4.6], [0, 1.2, -2.4]], k: 1, range: 4, look: rayo([.3]) }),
  (d) => ({ ...CAMPN, atores: [RAMI({ x: 2.4, z: -1.35, y: SBN, eyes: [[0, 'flat']], pose: (k, u) => { sitP(k); sorbe(k, u); } })],
    extra: (c, s, A) => { CAMP(c, { lit: .3 }); const tm = termo(); c.add(tm); const t = lab(c, ['¿POR EL PROFE A UN METRO?'], 2.0, [2.4, 2.05, -1.1], BLUE); return { update: (u, tt, cam) => { const p = hand(A[0]); tm.position.set(p.x + .05, p.y + .1, p.z + .1); pop(t, u, .05, 99, cam); } }; },
    c: [[2.4, 1.3, 1.9], [2.4, 1.15, -1.3], [2.4, 1.3, 1.7], [2.4, 1.15, -1.3]], range: 2, look: NOCHEN }),
  (d) => ({ ...DENTROC, atores: [SIENTA(ELLA, .45, -.15, { eyes: [[0, 'happy']] })],
    extra: (c) => { INT(c); const h = corazon(c, .3); h.position.set(.1, 1.2, -.05); const t = lab(c, ['¿O ES POR ELLA?'], 1.3, [.45, 1.42, -.1], ROSA); return { update: (u, tt, cam) => { pop(t, u, .05, 99, cam); h.scale.setScalar(latido(u, 160)); } }; },
    c: INE, range: 2, look: DENTRO })]);
// 68. Y entonces te acuerdas de esta tarde. De la excursión. Del puente colgante. El que se movía con cada paso.
Q(68, (d, a) => { const tp = R0(a, 'puente'), tm = R0(a, 'movia'); return { amb: 'puente', fov: 32, atores: [ENP(YO, -1.2, { eyes: [[0, 'look'], [tm, 'wide']], move: (u) => { const x = lerp(-3.0, -1.2, smooth(0, d, u)); return [x, SAG(x) + (u > tm ? Math.sin(u * 8) * .03 : 0), 0]; }, pose: (k, u) => k.walk(u * .8, .5) }), ENP(ELLA, 0, { eyes: [[0, 'look']], move: (u) => { const x = lerp(-1.6, 0, smooth(0, d, u)); return [x, SAG(x) + (u > tm ? Math.sin(u * 8 + 1) * .03 : 0), 0]; }, pose: (k, u) => k.walk(u * .8 + .4, .5) })],
  extra: (c) => { const L = SEQ(c, a, [[['ESTA TARDE'], .05, 'y', [-.6, 1.8, 0], 1.3], [['EL PUENTE COLGANTE'], tp - .3, 'w', [-.6, 1.8, 0], 1.8], [['SE MOVÍA CON CADA PASO'], tm - .4, 'r', [-.6, 1.8, 0], 2.0, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: PUENTEC, range: 3, look: MEMO }; });
// 69. Tú ibas temblando. Y ella iba justo delante. Y se dio la vuelta. Y te dio la mano para ayudarte a cruzar.
Q(69, (d, a) => { const td = R0(a, 'delante'), tv = R0(a, 'vuelta'), tm = R0(a, 'mano'); return { amb: 'puente', fov: 32, atores: [ENP(YO, -.75, { eyes: [[0, 'wide'], [tm + .4, 'happy']], pose: (k, u) => (u < tm ? tiembla(k, u, .6) : k.pose({ armL: [12, 8], armR: [70, 10] })) }), ENP(ELLA, .05, { eyes: [[0, 'look'], [tv, 'happy']], pose: (k, u) => k.pose({ armL: [u > tm - .2 ? 72 : 12, u > tm - .2 ? 10 : 8], armR: [12, 8] }) })],
  extra: (c, s, A) => { const r = ROJO(c, A, 0); const L = SEQ(c, a, [[['TEMBLANDO'], .05, 'b', [-.4, 1.95, .4], 1.2], [['ELLA, JUSTO DELANTE'], td - .5, 'w', [-.4, 1.95, .4], 1.8], [['SE DA LA VUELTA'], tv - .3, 'w', [-.4, 1.95, .4], 1.6], [['Y TE DA LA MANO ♥'], tm - .3, 'p', [-.4, 1.95, .4], 1.7, 1]]); return { update: (u, t, cam) => { L(u, cam); r(smooth(tm, tm + .6, u)); } }; },
  c: [[-.4, 1.2, 2.8], [-.35, .9, 0], [-.4, 1.15, 2.4], [-.35, .9, 0]], range: 2.5, look: MEMO }; });
// 70. Pues esto también tiene experimento. | En 1974, Donald Dutton y Arthur Aron, el mismo de las 36 preguntas,
Qs(70, ['1974'], [
  (d) => ({ amb: 'gris', fov: 30, k: 1, atores: [], extra: (c) => { const t = lab(c, ['ESTO TAMBIÉN', 'TIENE EXPERIMENTO'], 2.2, [0, 1.6, -.4], { h: 260 }); return { update: (u, tt, cam) => pop(t, u, .05, 99, cam) }; },
    c: [[0, 1.6, 3.4], [0, 1.6, -.4], [0, 1.6, 3.0], [0, 1.6, -.4]], range: 3 }),
  (d, a) => { const tm = R0(a, 'mismo'); return { ...AULA(), atores: [DUT({ x: -.6, z: -.4, eyes: [[0, 'look']] }), ARON({ x: .6, z: -.4, eyes: [[0, 'look'], [tm, 'happy']], pose: (k, u) => (u > tm ? wave(k, u) : k.pose()) })],
    extra: (c) => { const t = lab(c, ['EL MISMO DE LAS 36 PREGUNTAS'], 2.3, [0, .7, .2], { bg: '#FBF7EC', fg: '#2A2A34' }); return { update: (u, tt, cam) => pop(t, u, tm - .3, 99, cam) }; },
    c: [[0, 1.6, 3.9], [0, 1.45, -.4], [0, 1.6, 3.4], [0, 1.45, -.4]], range: 3 }; }]);
// 71. lo probaron en Canadá, en un puente colgante altísimo que se balanceaba sobre un río.
Q(71, (d, a) => { const ta = R0(a, 'altisimo'); return { amb: 'puente', fov: 34, atores: [EXTRA(5, { x: -2, z: 0, move: (u) => { const x = lerp(-4.5, 0, smooth(0, d, u)); return [x, SAG(x) + Math.sin(u * 6) * .03, 0]; }, eyes: [[0, 'wide']], pose: (k, u) => { k.walk(u * .7, .6); k.root.rotation.z = Math.sin(u * 3) * .06; } })],
  extra: (c) => { const L = SEQ(c, a, [[['CANADÁ'], .05, 'b', [-1, 2.2, .5], 1.0], [['UN PUENTE ALTÍSIMO'], ta - .4, 'r', [-1, 2.2, .5], 1.8, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[-3.5, 1.2, 5.5], [-1.0, -.5, 0], [-1.5, 1.6, 5.0], [-.5, -.3, 0]], k: 1, range: 4, look: { exposure: 1.02 } }; });
// 72. Una chica paraba a los chicos al cruzar, les hacía una encuesta y les daba su número de teléfono.
Q(72, (d, a) => { const te = R0(a, 'encuesta'), tn = R0(a, 'numero'); return { amb: 'puente', fov: 32, atores: [MUJ(1, { x: 7.0, z: .4, eyes: [[0, 'happy']], talk: [[te - .5, d]], pose: (k, u) => k.pose({ armL: [60, 70], armR: [u > tn ? 80 : 12, u > tn ? 10 : 8] }) }), EXTRA(5, { x: 6.1, z: .9, eyes: [[0, 'wide'], [tn + .4, 'happy']], move: (u) => [lerp(5.2, 6.1, smooth(0, 1.2, u)), 0, .9], pose: (k, u) => (u < 1.2 ? k.walk(u * 1.4, .5) : k.pose()) })],
  extra: (c, s, A) => { const ho = nota(c, ['ENCUESTA'], .3, [0, 0, 0], 70); const tel = nota(c, ['¿QUIERES SABER MÁS?', 'LLÁMAME'], .45, [0, 0, 0], 56); const L = SEQ(c, a, [[['AL CRUZAR EL PUENTE…'], .05, 'w', [6.5, 2.2, .5], 1.8], [['UNA ENCUESTA'], te - .3, 'y', [6.5, 2.2, .5], 1.4], [['Y SU NÚMERO DE TELÉFONO'], tn - .3, 'p', [6.5, 2.2, .5], 2.1, 1]]); return { update: (u, t, cam) => { const v = new THREE.Vector3(); A[0].arms.L.hand.getWorldPosition(v); ho.position.set(v.x, v.y + .1, v.z + .1); const p = hand(A[0]); tel.position.set(p.x - .1, p.y + .1, p.z + .12); tel.visible = u > tn; L(u, cam); } }; },
  c: [[6.5, 1.5, 3.6], [6.5, 1.2, 0], [6.5, 1.5, 3.2], [6.5, 1.2, 0]], range: 3, look: { exposure: 1.02 } }; });
// 73. Y lo mismo hacía con chicos que cruzaban un puente bajo y firme.
Q(73, (d, a) => { const tb = R0(a, 'bajo'); return { amb: 'puente', ambo: { normal: 1 }, fov: 32, atores: [EXTRA(2, { x: 0, z: 0, y: .42, move: (u) => [0, .42, lerp(-1.6, .8, u / d)], eyes: [[0, 'happy']], pose: (k, u) => k.walk(u * 1.2, .5) })],
  extra: (c) => { const t = lab(c, ['UN PUENTE BAJO Y FIRME'], 2.0, [1.0, 2.35, -.8], VERDE); return { update: (u, tt, cam) => pop(t, u, tb - .3, 99, cam) }; },
  c: [[1.8, 1.8, 4.2], [0, .9, -.5], [1.5, 1.7, 3.8], [0, .9, -.3]], range: 3, look: { exposure: 1.02 } }; });
// 74. ¿Qué pasó? Muchos más chicos del puente que daba miedo la llamaron después.
Q(74, (d, a) => { const tl = R0(a, 'llamaron'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const b = barras(c, [['PUENTE\nFIRME', .25, '#B8BCC8'], ['PUENTE QUE\nDA MIEDO', .85, '#E8667F']], 2.6, [0, 1.55, -.4], { title: '¿CUÁNTOS LA LLAMARON?' }); const t = lab(c, ['¡MUCHOS MÁS!'], 1.3, [0, .5, -.2], ROSA); return { update: (u, tt, cam) => { b.scale.y = smooth(.3, 1.6, u) * .999 + .001; pop(t, u, tl - .3, 99, cam); } }; },
  c: [[0, 1.4, 3.9], [0, 1.3, -.4], [0, 1.4, 3.5], [0, 1.3, -.4]], range: 3 }; });
// 75. El cuerpo nota el corazón acelerado, pero no siempre sabe por qué. Y a veces lo confunde con atracción.
Q(75, (d, a) => { const tq = R0(a, 'que', 2), ta = R0(a, 'atraccion'); return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: 0, z: -.5, eyes: [[0, 'wide'], [ta, 'heart']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > tq && u < ta ? 150 : 12, u > tq && u < ta ? 160 : 8] }) })],
  extra: (c) => { const h = corazon(c, .3); h.position.set(.05, 1.15, -.3); const L = SEQ(c, a, [[['CORAZÓN ACELERADO'], .2, 'r', [0, 2.35, -.4], 1.8], [['¿POR QUÉ?'], tq - .3, 'w', [0, 2.35, -.4], 1.0], [['LO CONFUNDE CON ATRACCIÓN'], ta - .9, 'p', [0, 2.35, -.4], 2.3, 1]]); return { update: (u, t, cam) => { L(u, cam); h.scale.setScalar(latido(u, 180)); } }; },
  c: [[0, 1.6, 3.6], [0, 1.5, -.5], [0, 1.6, 3.2], [0, 1.5, -.5]], range: 3, look: TARDE }; });
// 76. Otros científicos lo han intentado repetir y no siempre les ha salido igual. Tómatelo como una pista, no como una ley.
Q(76, (d, a) => { const tn = R0(a, 'siempre'), tp = R0(a, 'pista'); return { ...AULA(), atores: [CIENT(0, { x: -.9, z: -.4, eyes: [[0, 'look'], [tn, 'flat']] }), CIENT(2, { x: .9, z: -.4, eyes: [[0, 'look'], [tn, 'sad']], pose: (k, u) => (u > tn ? k.pose({ armL: [60, 100], armR: [60, 100] }) : k.pose()) })],
  extra: (c) => { const L = SEQ(c, a, [[['OJO'], .05, 'r', [0, 2.3, -.3], .7], [['NO SIEMPRE SE REPITE'], tn - .4, 'w', [0, 2.3, -.3], 1.9], [['UNA PISTA, NO UNA LEY'], tp - .3, 'y', [0, 2.3, -.3], 2.0, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.6, 4.0], [0, 1.45, -.4], [0, 1.6, 3.5], [0, 1.45, -.4]], range: 3 }; });
// 77. O sea, que puede que sea la tormenta. O el puente. O puede que no.
Q(77, (d, a) => { const tt = R0(a, 'tormenta'), tp = R0(a, 'puente'), tn = R0(a, 'no'); return { ...DENTROC, atores: [SIENTA(ELLA, .3, -.15, { eyes: [[0, 'happy']] }), SIENTA(YO, -.3, -.15, { eyes: [[0, 'look'], [tn, 'heart']] }), LUCI()],
  extra: (c) => { INT(c); const L = SEQ(c, a, [[['¿LA TORMENTA?'], tt - .3, 'b', [0, 1.48, -.1], 1.3], [['¿EL PUENTE?'], tp - .3, 'w', [0, 1.48, -.1], 1.1], [['…O PUEDE QUE NO ♥'], tn - .4, 'p', [0, 1.48, -.1], 1.6, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: IN3, range: 2, look: rayo([.3], DENTRO) }; });
// 78. Ella apaga la linterna para ahorrar pila. En la oscuridad te susurra: "¿Te puedo contar un secreto?" "Vale."
Q(78, (d, a) => { const ta = R0(a, 'apaga'), tt = R0(a, 'te', 2), tv = R0(a, 'vale'); return { ...DENTROC, ambo: { dim: 1, glow: .04 }, atores: [SIENTA(ELLA, .3, -.15, { eyes: [[0, 'look']], talk: [[tt, tv - .2]], pose: susurro }), SIENTA(YO, -.3, -.15, { eyes: [[0, 'look'], [tt + .5, 'wide']], talk: [[tv, d]] })],
  extra: (c) => { const I = INT(c); const lu = new THREE.PointLight('#8AA0FF', 1.5, 4, 1.6); lu.position.set(0, 1.4, 1.0); c.add(lu); const t = lw(c, ['CLIC'], .6, [.3, 1.42, -.1]); const h = hab(c, ['¿TE PUEDO CONTAR', 'UN SECRETO?'], 1.2, [.35, 1.48, -.1], 56); const h2 = hab(c, ['VALE'], .6, [-.35, 1.42, -.1], 64); return { update: (u, tt2, cam) => { I.luz(1 - smooth(ta + .2, ta + .5, u) * .9); pop(t, u, ta + .1, ta + 1.2, cam); pop(h, u, tt - .1, tv - .2, cam); pop(h2, u, tv - .1, 99, cam); } }; },
  c: IN3, range: 2, look: DENTRO }; });
// 79. "Esta tarde, en el puente… yo no tenía nada de miedo. Te di la mano porque quería."
Q(79, (d, a) => { const tm = R0(a, 'mano'); return { ...DENTROC, ambo: { dim: 1, glow: .04 }, atores: [SIENTA(ELLA, .45, -.15, { eyes: [[0, 'look'], [tm, 'happy']], talk: [[0, d]] })],
  extra: (c, s, A) => { const I = INT(c, { luz: .12 }); const lu = new THREE.PointLight('#8AA0FF', 1.5, 4, 1.6); lu.position.set(.4, 1.3, 1.0); c.add(lu); const r = ROJO(c, A, 0); const h = hab(c, ['ESTA TARDE, EN EL PUENTE…', 'YO NO TENÍA NADA DE MIEDO'], 1.3, [.45, 1.4, -.1], 52); const h2 = hab(c, ['TE DI LA MANO', 'PORQUE QUERÍA'], 1.1, [.45, 1.4, -.1], 56); return { update: (u, t, cam) => { pop(h, u, .05, tm - 1.3, cam); pop(h2, u, tm - 1.2, 99, cam); r(smooth(tm - .5, tm + .5, u)); } }; },
  c: INE, range: 2, look: DENTRO }; });
// 80. No sabes qué decir.
Q(80, (d) => ({ ...DENTROC, ambo: { dim: 1, glow: .04 }, atores: [SIENTA(YO, -.45, -.15, { eyes: [[0, 'wide']] })],
  extra: (c, s, A) => { INT(c, { luz: .12 }); const lu = new THREE.PointLight('#8AA0FF', 1.5, 4, 1.6); lu.position.set(-.4, 1.3, 1.0); c.add(lu); const r = ROJO(c, A, 0); const t = lw(c, ['…'], .5, [-.45, 1.38, -.1]); return { update: (u, tt, cam) => { pop(t, u, .1, 99, cam); r(1); } }; },
  c: INY, range: 2, look: DENTRO }));
// 81. "Y otro secreto. La linterna. Te la presté a propósito. Para que tuvieras una excusa para venir a devolvérmela."
Q(81, (d, a) => { const tl = R0(a, 'linterna'), tp = R0(a, 'proposito'), te = R0(a, 'excusa'); return { ...DENTROC, ambo: { dim: 1, glow: .04 }, atores: [SIENTA(ELLA, .32, -.15, { eyes: [[0, 'smug'], [te, 'happy']], talk: [[0, d]] }), SIENTA(YO, -.32, -.15, { eyes: [[0, 'look'], [tp, 'wide']] })],
  extra: (c, s, A) => { INT(c, { luz: .12 }); const lu = new THREE.PointLight('#8AA0FF', 1.5, 4, 1.6); lu.position.set(0, 1.3, 1.0); c.add(lu); const r = ROJO(c, A, 1); const L = SEQ(c, a, [[['OTRO SECRETO'], .05, 'p', [0, 1.48, -.1], 1.3], [['LA LINTERNA…'], tl - .2, 'w', [0, 1.48, -.1], 1.3], [['TE LA PRESTÉ A PROPÓSITO'], tp - .9, 'y', [0, 1.48, -.1], 2.1], [['PARA QUE TUVIERAS UNA EXCUSA'], te - .9, 'p', [0, 1.48, -.1], 2.4, 1]]); return { update: (u, t, cam) => { L(u, cam); r(smooth(tp, tp + .6, u)); } }; },
  c: IN3, range: 2, look: DENTRO }; });
// 82. Y justo entonces, Lucía, sin despertarse, murmura en sueños:
Q(82, (d, a) => { const tm = R0(a, 'murmura'); return { ...DENTROC, ambo: { dim: 1, glow: .04 }, atores: [LUCI()],
  extra: (c) => { const I = INT(c, { luz: .2 }); const L = SEQ(c, a, [[['LUCÍA…'], .1, 'w', [.1, 1.05, -.9], 1.0], [['MURMURA EN SUEÑOS'], tm - .2, 'b', [.1, 1.05, -.9], 1.6, 1]]); return { update: (u, t, cam) => { L(u, cam); I.z(u, cam); } }; },
  c: [[.1, 1.0, 1.0], [.1, .45, -1.3], [.1, .95, .8], [.1, .45, -1.3]], range: 2, look: DENTRO }; });
// 83. "Díselo ya… que llevas toda la semana hablando de él…"
Q(83, (d, a) => { const tq = R0(a, 'que'); return { ...DENTROC, ambo: { dim: 1, glow: .04 }, atores: [LUCI({ talk: [[0, d]] })],
  extra: (c) => { INT(c, { luz: .2 }); const h = hab(c, ['DÍSELO YA…'], .9, [.1, 1.0, -.9], 60); const h2 = hab(c, ['QUE LLEVAS TODA LA SEMANA', 'HABLANDO DE ÉL…'], 1.3, [.1, 1.0, -.9], 52); return { update: (u, t, cam) => { pop(h, u, .05, tq - .1, cam); pop(h2, u, tq, 99, cam); } }; },
  c: [[.1, 1.0, 1.0], [.1, .5, -1.3], [.1, .95, .8], [.1, .5, -1.3]], range: 2, look: DENTRO }; });
// 84. Silencio absoluto.
Q(84, (d) => ({ ...DENTROC, ambo: { dim: 1, glow: .04 }, atores: [SIENTA(ELLA, .32, -.15, { eyes: [[0, 'wide']] }), SIENTA(YO, -.32, -.15, { eyes: [[0, 'wide']] }), LUCI()],
  extra: (c, s, A) => { INT(c, { luz: .25 }); const r = ROJO(c, A, 0); const t = lab(c, ['SILENCIO ABSOLUTO'], 1.6, [0, 1.48, -.1], OSC); return { update: (u, tt, cam) => { pop(t, u, .05, 99, cam); r(smooth(0, .6, u)); } }; },
  c: IN3, range: 2, look: DENTRO }));
// 85. Ella entierra la cara en el saco. | Tú te tapas la boca para no reírte. | Y los dos acabáis llorando de la risa sin hacer ruido.
Qs(85, ['tu', 'los'], [
  (d) => ({ ...DENTROC, ambo: { dim: 1, glow: .04 }, atores: [SIENTA(ELLA, .45, -.15, { eyes: [[0, 'shut']], pose: (k) => k.pose({ armL: [125, 150], armR: [125, 150], head: -14, lean: 12 }) })],
    extra: (c, s, A) => { INT(c, { luz: .3 }); const r = ROJO(c, A, 0); const sc = box(.7, .5, .3, std('#E8667F'), .45, .55, .05); c.add(sc); const t = lw(c, ['ENTIERRA LA CARA'], 1.4, [.45, 1.38, -.1]); return { update: (u, tt, cam) => { pop(t, u, .1, 99, cam); r(1); } }; },
    c: INE, range: 2, look: DENTRO }),
  (d) => ({ ...DENTROC, ambo: { dim: 1, glow: .04 }, atores: [SIENTA(YO, -.45, -.15, { eyes: [[0, 'happy']], pose: tapa })],
    extra: (c) => { INT(c, { luz: .3 }); const t = lw(c, ['NO TE RÍAS, NO TE RÍAS…'], 1.6, [-.45, 1.38, -.1]); return { update: (u, tt, cam) => pop(t, u, .1, 99, cam) }; },
    c: INY, range: 2, look: DENTRO }),
  (d, a) => { const ts = R0(a, 'sin'); return { ...DENTROC, ambo: { dim: 1, glow: .04 }, atores: [SIENTA(ELLA, .32, -.15, { eyes: [[0, 'happy']], pose: risa }), SIENTA(YO, -.32, -.15, { eyes: [[0, 'happy']], pose: (k, u) => risa(k, u + .3) }), LUCI()],
    extra: (c, s, A) => { INT(c, { luz: .35 }); const g1 = gotas(c, 3, '#BEE4FF'), g2 = gotas(c, 3, '#BEE4FF'); const L = SEQ(c, a, [[['LLORANDO DE LA RISA'], .05, 'y', [0, 1.48, -.1], 1.8], [['SIN HACER NI UN RUIDO'], ts - .2, 'w', [0, 1.48, -.1], 1.9, 1]]); const v = new THREE.Vector3(); return { update: (u, t, cam) => { L(u, cam); A[0].head.getWorldPosition(v); g1(u, [v.x + .15, v.y, v.z, .05]); A[1].head.getWorldPosition(v); g2(u + .4, [v.x - .15, v.y, v.z, .05]); } }; },
    c: IN3, range: 2, look: DENTRO }; }]);
// 86. La una menos cuarto de la noche.
Q(86, (d) => ({ ...CAMPN, atores: [], extra: (c) => { CAMP(c, { lit: .2 }); const r = lluvia(c, 300, LLU); const t = lab(c, ['00:45'], 1.1, [-.6, 2.2, -1.6], OSC); return { update: (u, tt, cam) => { r(u, 1 - smooth(0, d, u)); pop(t, u, .05, 99, cam); } }; },
  c: [[.5, 2.0, 4.6], [0, 1.1, -2.4], [.4, 1.95, 4.3], [0, 1.1, -2.4]], k: 1, range: 4, look: NOCHEN }));
// 87. Ha dejado de llover. Ya no se oye el café. Se oye otra cosa. | Un ronquido. El profe Ramírez se ha quedado dormido en el banco.
const RAMID = (o = {}) => RAMI({ x: 2.4, z: -1.35, y: SBN, eyes: [[0, 'shut']], pose: (k, u) => { sitP(k); k.pose({ head: -18, lean: 8, armL: [20, 40], armR: [20, 40], bob: Math.sin(u * 2.2) * .015 }); }, ...o });
Qs(87, ['ronquido'], [
  (d, a) => { const tc = R0(a, 'cafe'), to = R0(a, 'otra'); return { ...CAMPN, atores: [RAMID()],
    extra: (c) => { CAMP(c, { lit: .2 }); const L = SEQ(c, a, [[['HA DEJADO DE LLOVER'], .05, 'w', [1.9, 1.95, -1.1], 1.9], [['YA NO SE OYE EL CAFÉ'], tc - .8, 'w', [1.9, 1.95, -1.1], 1.9], [['SE OYE OTRA COSA…'], to - .4, 'y', [1.9, 1.95, -1.1], 1.7, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
    c: [[1.2, 1.7, 3.3], [1.2, 1.0, -1.6], [1.2, 1.65, 3.0], [1.2, 1.0, -1.6]], range: 3, look: NOCHEN }; },
  (d, a) => { const tdo = R0(a, 'dormido'); return { ...CAMPN, atores: [RAMID()],
    extra: (c, s, A) => { CAMP(c, { lit: .2 }); const z = zzz(c); const L = SEQ(c, a, [[['ROOONC… ROOONC…'], .05, 'b', [2.4, 2.05, -1.1], 1.6], [['¡DORMIDO EN EL BANCO!'], tdo - .4, 'y', [2.4, 2.05, -1.1], 1.9, 1]]); const v = new THREE.Vector3(); return { update: (u, t, cam) => { L(u, cam); A[0].head.getWorldPosition(v); z(u, [v.x + .2, v.y + .2, v.z], cam); } }; },
    c: [[2.4, 1.3, 1.9], [2.4, 1.15, -1.3], [2.4, 1.3, 1.6], [2.4, 1.15, -1.3]], range: 2, look: NOCHEN }; }]);
// 88. Es tu oportunidad.
Q(88, (d) => ({ ...DENTROC, atores: [SIENTA(YO, -.45, -.15, { eyes: [[0, 'smug']], pose: (k) => k.pose({ armL: [12, 8], armR: [150, 30] }) })],
  extra: (c) => { INT(c, { luz: .4 }); const t = lab(c, ['¡ES TU OPORTUNIDAD!'], 1.6, [-.45, 1.38, -.1], ROSA); return { update: (u, tt, cam) => pop(t, u, .05, 99, cam) }; },
  c: INY, range: 2, look: DENTRO }));
// 89. Ella te abre la cremallera muy despacio. "Buenas noches", susurra. "Buenas noches", dices tú.
Q(89, (d, a) => { const tb = R0(a, 'buenas'), tb2 = R0(a, 'buenas', tb + .4); return { ...CAMPN, atores: [ELLA({ x: .25, z: -1.35, eyes: [[0, 'happy']], talk: [[tb, tb + 1.2]], pose: (k) => k.pose({ armL: [100, 150], armR: [12, 8] }) }), YO({ x: -.45, z: -1.2, eyes: [[0, 'happy']], talk: [[tb2, d]], move: (u) => [-.45, lerp(-.6, 0, smooth(.2, 1.4, u)), lerp(-1.5, -1.0, smooth(.2, 1.4, u))], pose: (k, u) => (u < 1.4 ? gatea(k, u) : k.pose()) })],
  extra: (c) => { CAMP(c, { lit: .3 }); const z = lab(c, ['ZIIIIIIP… (MUY DESPACIO)'], 1.8, [0, 1.85, -1.1], OSC); const h = hab(c, ['BUENAS NOCHES'], 1.2, [.95, 1.8, -.9], 58); const h2 = hab(c, ['BUENAS NOCHES'], 1.2, [-1.05, 1.75, -.8], 58); return { update: (u, t, cam) => { pop(z, u, .05, tb - .2, cam); pop(h, u, tb - .1, tb2 - .1, cam); pop(h2, u, tb2 - .1, 99, cam); } }; },
  c: [[.0, 1.3, 2.4], [-.1, .95, -1.2], [.0, 1.28, 2.1], [-.1, .95, -1.2]], range: 2.5, look: NOCHEN }; });
// 90. Sales a gatas. Pasas por delante del profe. Un paso. Dos. Tres.
Q(90, (d, a) => { const tu = R0(a, 'paso'), td = R0(a, 'dos'), tt = R0(a, 'tres'); return { ...CAMPN, atores: [RAMID(), YO({ x: 0, z: -.3, eyes: [[0, 'wide']], move: (u) => [lerp(.3, 3.2, smooth(.2, d, u)), -.3, .2], pose: gatea })],
  extra: (c) => { CAMP(c, { lit: .2 }); const L = SEQ(c, a, [[['A GATAS'], .05, 'w', [2.1, 1.8, -.6], 1.0], [['UN PASO…'], tu - .2, 'y', [2.1, 1.8, -.6], 1.0], [['DOS…'], td - .2, 'y', [2.1, 1.8, -.6], .7], [['TRES…'], tt - .2, 'y', [2.1, 1.8, -.6], .8, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[1.6, 1.4, 3.0], [1.8, .7, -1.0], [2.2, 1.4, 3.0], [2.4, .7, -1.0]], range: 3, look: NOCHEN }; });
// 91. Y pisas un charco enorme. ¡Chof!
Q(91, (d, a) => { const tc = R0(a, 'chof'); return { ...CAMPN, atores: [YO({ x: 3.2, z: .3, eyes: [[0, 'wide'], [tc, 'shut']], pose: (k, u) => k.pose({ armL: [60, 20], armR: [60, 20], legL: [u > tc - .3 ? 20 : 0, 0] }) })],
  extra: (c) => { CAMP(c, { lit: .2 }); charco(c, 3.2, .5); const g = gotas(c, 8, '#9AC8F2'); const t = lab(c, ['¡CHOF!'], 1.0, [2.3, 1.55, .3], BLUE); const t0 = lw(c, ['UN CHARCO ENORME'], 1.5, [2.3, 1.55, .3]); return { update: (u, tt, cam) => { pop(t0, u, .05, tc - .1, cam); pop(t, u, tc - .05, 99, cam); g(u * 2, [3.2, .5, .6, .4], u > tc - .1 ? 1 : 0); } }; },
  c: [[3.2, 1.3, 3.0], [3.2, .9, .3], [3.2, 1.3, 2.7], [3.2, .9, .3]], range: 2.5, look: NOCHEN }; });
// 92. El profe abre un ojo. Te apunta con la linterna. "¿Qué haces tú aquí?"
Q(92, (d, a) => { const ta = R0(a, 'apunta'), tq = R0(a, 'que'); return { ...CAMPN, atores: [RAMI({ x: 2.4, z: -1.35, y: SBN, eyes: [[0, 'shut'], [.5, 'small']], talk: [[tq, d]], pose: (k, u) => { sitP(k); k.pose({ armL: [12, 8], armR: [u > ta ? 80 : 12, u > ta ? 10 : 8] }); } })],
  extra: (c, s, A) => { CAMP(c, { lit: .2 }); const L0 = linterna('#FFF6D8'); L0.scale.setScalar(1.3); c.add(L0); const t = lw(c, ['ABRE UN OJO…'], 1.2, [2.4, 2.0, -1.1]); const h = hab(c, ['¿QUÉ HACES TÚ AQUÍ?'], 1.3, [2.4, 2.0, -1.1], 58); return { update: (u, tt, cam) => { const p = hand(A[0]); L0.position.set(p.x + .1, p.y, p.z + .15); L0.userData.on(u > ta ? 1 : 0); pop(t, u, .3, tq - .2, cam); pop(h, u, tq - .1, 99, cam); } }; },
  c: [[2.4, 1.3, 1.9], [2.4, 1.15, -1.3], [2.4, 1.3, 1.6], [2.4, 1.15, -1.3]], range: 2, look: NOCHEN }; });
// 93. "Iba… al baño."
Q(93, (d) => ({ ...CAMPN, atores: [YO({ x: 3.2, z: .3, eyes: [[0, 'wide']], talk: [[0, d]], pose: (k, u) => k.pose({ armL: [12, 8], armR: [150, 150] }) })],
  extra: (c) => { CAMP(c, { lit: .2 }); charco(c, 3.2, .5); const g = glowSprite('#FFF6D8', 2.0, .14); g.position.set(3.2, 1.2, .5); c.add(g); const h = hab(c, ['IBA… AL BAÑO'], 1.0, [3.2, 1.78, .2], 60); return { update: (u, tt, cam) => pop(h, u, .05, 99, cam) }; },
  c: [[3.2, 1.3, 3.0], [3.2, 1.1, .3], [3.2, 1.3, 2.7], [3.2, 1.1, .3]], range: 2.5, look: NOCHEN }));
// 94. Te mira. Mira los baños, que están justo en la otra punta. Te vuelve a mirar.
Qs(94, ['banos', 'vuelve'], [
  (d) => ({ ...CAMPN, atores: [RAMI({ x: 2.4, z: -1.35, y: SBN, eyes: [[0, 'small']], pose: (k) => { sitP(k); k.pose({ armR: [80, 10] }); } })],
    extra: (c) => { CAMP(c, { lit: .2 }); const t = lw(c, ['TE MIRA…'], .9, [2.4, 2.0, -1.1]); return { update: (u, tt, cam) => pop(t, u, .05, 99, cam) }; },
    c: [[2.4, 1.3, 1.9], [2.4, 1.15, -1.3], [2.4, 1.3, 1.7], [2.4, 1.15, -1.3]], range: 2, look: NOCHEN }),
  (d) => ({ ...CAMPN, atores: [], extra: (c) => { CAMP(c, { lit: .2 }); banos(c, -15, -3); const t = lab(c, ['BAÑOS: EN LA OTRA PUNTA'], 2.0, [-14.6, 3.1, -1.5], BLUE); return { update: (u, tt, cam) => pop(t, u, .2, 99, cam) }; },
    cam: [[0, [2.0, 1.8, 3.0], [1.0, 1.2, -1.5]], [99, [-12.0, 2.0, 3.2], [-14.6, 1.4, -2.0]]], k: 1, range: 4, look: NOCHEN }),
  (d) => ({ ...CAMPN, atores: [RAMI({ x: 2.4, z: -1.35, y: SBN, eyes: [[0, 'flat']], pose: (k) => { sitP(k); k.pose({ armR: [80, 10] }); } })],
    extra: (c) => { CAMP(c, { lit: .2 }); const t = lw(c, ['…Y TE VUELVE A MIRAR'], 1.6, [2.4, 2.0, -1.1]); return { update: (u, tt, cam) => pop(t, u, .05, 99, cam) }; },
    c: [[2.4, 1.3, 1.7], [2.4, 1.15, -1.3], [2.4, 1.3, 1.5], [2.4, 1.15, -1.3]], range: 2, look: NOCHEN })]);
// 95. "A dormir. Ya." Y no dice nada más. Pero juraría que se le escapa una sonrisa.
Q(95, (d, a) => { const tn = R0(a, 'nada'), ts = R0(a, 'sonrisa'); return { ...CAMPN, atores: [RAMI({ x: 2.4, z: -1.35, y: SBN, eyes: [[0, 'flat'], [ts - .6, 'happy']], talk: [[0, tn - .5]], pose: (k, u) => { sitP(k); k.pose({ armL: [12, 8], armR: [u < tn ? 95 : 12, u < tn ? 0 : 8] }); } })],
  extra: (c) => { CAMP(c, { lit: .2 }); const h = hab(c, ['A DORMIR. YA.'], 1.0, [2.4, 2.0, -1.1], 60); const L = SEQ(c, a, [[['NI UNA PALABRA MÁS'], tn - .3, 'w', [2.4, 2.0, -1.1], 1.7], [['¿UNA SONRISA?'], ts - .7, 'y', [2.4, 2.0, -1.1], 1.4, 1]]); return { update: (u, t, cam) => { pop(h, u, .05, tn - .4, cam); L(u, cam); } }; },
  c: [[2.4, 1.3, 1.9], [2.4, 1.15, -1.3], [2.4, 1.3, 1.6], [2.4, 1.15, -1.3]], range: 2, look: NOCHEN }; });
// desayuno: mesa en la explanada del albergue
const DESAY = (c) => { mesa(c, 0, -.15, .75, 2.4, .8, '#C8A27A'); for (const x of [-.45, .45]) { const t = new THREE.Mesh(new THREE.CylinderGeometry(.07, .06, .14, 14), std('#E8E2D2')); t.position.set(x, .85, -.1); c.add(t); } };
const DCAM = [[0, 1.45, 3.0], [0, 1.1, -.5], [0, 1.45, 2.6], [0, 1.1, -.5]];
// 96. A la mañana siguiente, en el desayuno, ella se sienta a tu lado. Como si nada.
Q(96, (d, a) => { const ts = R0(a, 'sienta'), tc = R0(a, 'como'); return { amb: 'albergue', fov: 30, atores: [SENTA(YO, -.4, -.6, { eyes: [[0, 'look'], [ts + .8, 'wide']] }), ELLA({ x: 1.5, z: -.6, eyes: [[0, 'happy']], move: (u) => (u < ts + .6 ? [lerp(2.2, .4, smooth(ts - .8, ts + .6, u)), 0, -.6] : [.4, SBN, -.6]), pose: (k, u) => (u < ts + .6 ? k.walk(u * 1.4, .5) : sitP(k)) })],
  extra: (c) => { DESAY(c); const L = SEQ(c, a, [[['A LA MAÑANA SIGUIENTE'], .05, 'y', [0, 1.9, -.5], 2.0], [['SE SIENTA A TU LADO'], ts - .3, 'p', [0, 1.9, -.5], 1.8], [['COMO SI NADA'], tc - .2, 'w', [0, 1.9, -.5], 1.3, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: DCAM, range: 3, look: MANANA }; });
// 97. Y te pasa algo por debajo de la mesa. Su linterna. "Para esta noche. Por si necesitas una excusa."
Q(97, (d, a) => { const tl = R0(a, 'linterna'), tp = R0(a, 'para'); return { amb: 'albergue', fov: 30, atores: [SENTA(YO, -.4, -.6, { eyes: [[0, 'look'], [tl, 'wide'], [tp + 2, 'heart']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > tl ? 40 : 8, 30] }) }), SENTA(ELLA, .4, -.6, { eyes: [[0, 'smug']], talk: [[tp, d]], pose: (k, u) => k.pose({ armL: [u < tl + .5 ? 40 : 8, 30], armR: [8, 6] }) })],
  extra: (c) => { DESAY(c); const li = linterna(); li.userData.on(0); li.rotation.y = Math.PI / 2; c.add(li); const L = SEQ(c, a, [[['POR DEBAJO DE LA MESA…'], .05, 'w', [-.45, 1.62, -.5], 1.8], [['¡SU LINTERNA!'], tl - .2, 'y', [-.55, 1.62, -.5], 1.2, 1]]); const h = hab(c, ['PARA ESTA NOCHE.', 'POR SI NECESITAS UNA EXCUSA'], 1.5, [.65, 1.58, -.4], 52); return { update: (u, t, cam) => { li.position.set(lerp(.3, -.25, smooth(.5, tl, u)), .55, -.3); L(u, cam); pop(h, u, tp - .1, 99, cam); } }; },
  c: [[0, 1.25, 2.4], [0, .9, -.5], [0, 1.25, 2.1], [0, .9, -.5]], range: 3, look: MANANA }; });
// 98. Lucía, desde el otro lado, pone los ojos en blanco.
Q(98, (d, a) => { const to = R0(a, 'ojos'); return { amb: 'albergue', fov: 30, atores: [SENTA(LUCIA, 0, -1.0, { eyes: [[0, 'look'], [to - .3, 'flat']], pose: (k, u) => k.pose({ head: u > to ? 10 : 0 }) }), SENTA(YO, -.45, .1, { eyes: [[0, 'happy']] }), SENTA(ELLA, .45, .1, { eyes: [[0, 'happy']] })],
  extra: (c) => { mesa(c, 0, -.5, .75, 2.4, .8, '#C8A27A'); const t = lab(c, ['OJOS EN BLANCO'], 1.4, [0, 1.85, -.9], VERDE); return { update: (u, tt, cam) => pop(t, u, to - .3, 99, cam) }; },
  c: [[0, 1.55, 2.6], [0, 1.0, -.8], [0, 1.5, 2.3], [0, 1.0, -.8]], range: 3, look: MANANA }; });
// 99. ¿Con quién te gustaría quedarte atrapado? Te leo en los comentarios.
Q(99, (d, a) => { const tq = R0(a, 'quien'), tc = R0(a, 'comentarios'); return { ...CAMPN, atores: [YO({ x: -.6, z: .2, eyes: [[0, 'look'], [tc - .5, 'happy']], pose: (k, u) => (u > tc - .5 ? wave(k, u) : k.pose()) })],
  extra: (c) => { CAMP(c, { litAll: 1 }); const f = fogata(); f.position.set(-4.2, 0, -.6); c.add(f); const L = SEQ(c, a, [[['Y TÚ…'], .1, 'w', [-.5, 2.25, .2], .8], [['¿CON QUIÉN TE QUEDARÍAS ATRAPADO?'], tq - .6, 'p', [-.5, 2.25, .2], 2.6], [['¡TE LEO EN LOS COMENTARIOS!'], tc - 1.2, 'y', [-.5, 2.25, .2], 2.4, 1]]); return { update: (u, t, cam) => { f.tick && f.tick(u); L(u, cam); } }; },
  c: [[0, 1.7, 4.0], [-.5, 1.4, .2], [-.1, 1.65, 3.6], [-.5, 1.4, .2]], range: 4, look: NOCHEN }; });
