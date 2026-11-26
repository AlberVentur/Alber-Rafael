// "¿Y si intercambiaras de cuerpos con tu crush?" — horizontal 1280x720, ~9:35
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

// ===================== CENAS 0–40 =====================
const CAMA = [[.2, 1.9, 1.8], [1.6, .85, -1.4], [.5, 1.75, 1.3], [1.6, .85, -1.4]];
const DUERME = (o = {}) => DORM(ELLA, { x: 2.5, z: -1.2, y: .9, ...o });
const ESPEJO = (c) => { c.add(box(1.3, 2.1, .08, std('#3A4A5E'), .55, 1.05, -1.2)); const g = new THREE.Mesh(new THREE.PlaneGeometry(1.12, 1.92), new THREE.MeshBasicMaterial({ color: '#BFD8EC', transparent: true, opacity: .22, depthWrite: false })); g.position.set(.55, 1.05, -.14); g.renderOrder = 4; c.add(g);
  [[.55, 2.06, 1.3, .1], [.55, .04, 1.3, .1]].forEach(([x, y, w, h]) => c.add(box(w, h, .12, std('#8E6242'), x, y, -.14))); [-.06, 1.16].forEach((x) => c.add(box(.1, 2.1, .12, std('#8E6242'), x, 1.05, -.14))); };
const REFL = (o = {}) => ELLA({ x: .55, z: -.6, s: .92, glow: 0, tint: '#D8E6F4', ...o });
const ESPC = [[0, 1.4, 3.4], [0, 1.1, -.3], [0, 1.35, 2.9], [0, 1.15, -.3]];

// 0. Martes. Las siete y diez de la mañana.
Q(0, (d, a) => ({ ...CE({ look: { exposure: .85, bloom: .4 } }), atores: [DUERME()],
  extra: (c) => { const z = zzz(c); const L = SEQ(c, a, [[['MARTES'], .1, 'y', [1.0, 1.85, -1.0], 1.0], [['07:10'], 'siete', 'y', [1.0, 1.85, -1.0], .8, 1]]); return { update: (u, t, cam) => { z(u, [2.3, 1.1, -1.4], cam); L(u, cam); } }; },
  c: CAMA, range: 2.6 }));
// 1. Suena una alarma. Pero no es tu alarma… canción suave, con pajaritos.
Q(1, (d, a) => { const tn = R0(a, 'no'), tp = R0(a, 'pajaritos'); return { ...CE(), atores: [DUERME({ eyes: [[0, 'shut'], [tp, 'small']] })],
  extra: (c, s, A) => { c.add(box(.5, .55, .4, std('#8E6242'), .2, .28, -2.2)); const m = movil(['ALARMA', '', '♪ 07:10'], { hora: '07:10' }); m.scale.setScalar(.3); m.rotation.x = -.5; m.position.set(.2, .62, -2.15); c.add(m); const on = ondas(c, 3);
    const L = SEQ(c, a, [[['NO ES TU ALARMA'], tn, 'w', [.4, 1.5, -1.6], 1.3], [['TU ALARMA: ¡PIIIP!'], 'pitido', 'r', [.4, 1.5, -1.6], 1.5], [['♪ PÍO, PÍO ♪'], tp - .4, 'p', [.4, 1.5, -1.6], 1.2, 1]]);
    const o = new THREE.Object3D(); o.head = new THREE.Object3D(); o.head.position.set(.2, .75, -2.1); o.head.getWorldPosition = (v) => v.set(.2, .75, -2.1); return { update: (u, t, cam) => { on(u, o, cam); L(u, cam); } }; },
  c: [[-.6, 1.5, 1.4], [.6, .75, -1.8], [-.4, 1.45, 1.1], [.6, .8, -1.8]], range: 2 }; });
// 2. Abres los ojos. El techo lleno de estrellitas. Tú no tienes estrellitas.
Q(2, (d, a) => { const te = R0(a, 'techo'), tn = R0(a, 'tu'); return { ...CE({ look: { exposure: .9, bloom: .5 } }), atores: [DUERME({ eyes: [[0, 'shut'], [.5, 'small'], [te, 'wide']] })],
  extra: (c) => { const S0 = []; const R = rng(5); for (let i = 0; i < 24; i++) { const g = glowSprite('#FFF2A0', .14, 0); g.position.set(-1 + R() * 4.5, 3.4, -3 + R() * 3); c.add(g); S0.push(g); } const L = SEQ(c, a, [[['ESTRELLITAS EN EL TECHO'], te, 'y', [1.3, 1.75, -.9], 1.3], [['TÚ NO TIENES ESTRELLITAS'], tn - .1, 'r', [1.3, 1.75, -.9], 1.4, 1]]);
    return { update: (u, t, cam) => { S0.forEach((g, i) => { g.material.opacity = smooth(te - .3, te + .4, u) * (.6 + .3 * Math.sin(u * 3 + i)); }); L(u, cam); } }; },
  c: [[1.2, 2.7, .9], [1.3, 1.0, -1.2], [1.2, 2.5, .5], [1.3, 1.2, -1.3]], range: 2.2 }; });
// 3. Te levantas. Algo te cae sobre la cara. Pelo. Muchísimo pelo.
Q(3, (d, a) => { const tp = R0(a, 'pelo'), tc = R0(a, 'cortisimo'); return { ...CE(), atores: [ELLA({ x: .5, z: .2, eyes: [[0, 'small'], [tp, 'wide']], pose: (k, u) => (u > tp ? cabeza(k, u) : k.pose()) })],
  extra: (c) => { const L = SEQ(c, a, [[['PELO'], tp - .1, 'y', [-.5, 2.0, .2], .9], [['MUCHÍSIMO PELO'], tp + 1.0, 'y', [-.5, 2.0, .2], 1.4], [['TÚ: PELO CORTÍSIMO'], tc - .6, 'b', [-.5, 2.0, .2], 1.6, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.6, 3.2], [.1, 1.3, .2], [0, 1.55, 2.6], [.1, 1.35, .2]], range: 2.4 }; });
// 4. Corres al espejo.
Q(4, (d, a) => ({ ...CE(), atores: [ELLA({ x: -.55, z: .2, eyes: [[0, 'wide']], move: (u) => [lerp(-2.2, -.55, smooth(0, 1.3, u)), 0, .2], pose: (k, u) => k.pose({ armL: [40 + Math.sin(u * 14) * 25, 10], armR: [40 - Math.sin(u * 14) * 25, 10], bob: Math.abs(Math.sin(u * 14)) * .04 }) }), REFL({ eyes: [[0, 'wide']], move: (u) => [.55, 0, lerp(-1.6, -.6, smooth(0, 1.3, u))] })],
  extra: (c) => { ESPEJO(c); return {}; }, c: ESPC, range: 2.4 }));
// 5. Y desde el espejo te mira ella. Tu crush.
Q(5, (d, a) => { const tc = R0(a, 'crush'); return { ...CE(), atores: [ELLA({ x: -.55, z: .2, eyes: [[0, 'look']] }), REFL({ eyes: [[0, 'lookl']] })],
  extra: (c) => { ESPEJO(c); const sh = brillos(c, 6, '#FFFFFF'); const L = SEQ(c, a, [[['ELLA'], .3, 'w', [.55, 2.35, -.4], .8], [['TU CRUSH ♥'], tc - .1, 'p', [.55, 2.35, -.4], 1.1, 1]]); return { update: (u, t, cam) => { sh(u, [.55, 1.6, -.1, .4], .6); L(u, cam); } }; },
  c: [[.3, 1.4, 2.6], [.4, 1.25, -.4], [.3, 1.35, 2.2], [.45, 1.3, -.4]], range: 2.2 }; });
// 6. Tú parpadeas. Ella parpadea. Tú levantas la mano. Ella levanta la mano.
Q(6, (d, a) => { const tp = R0(a, 'parpadea'), tl = R0(a, 'levantas'), tl2 = R0(a, 'levanta'); const blink = (t0) => [[0, 'look'], [t0, 'shut'], [t0 + .25, 'wide']]; return { ...CE(), atores: [
    ELLA({ x: -.55, z: .2, eyes: blink(.2), pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > tl ? 150 : 12, u > tl ? 20 : 8] }) }),
    REFL({ eyes: [[0, 'lookl'], [tp, 'shut'], [tp + .25, 'wide']], pose: (k, u) => k.pose({ armL: [u > tl2 ? 150 : 12, u > tl2 ? 20 : 8], armR: [12, 8] }) })],
  extra: (c) => { ESPEJO(c); return {}; }, c: ESPC, range: 2.4 }; });
// 7. Ayer por la tarde, en la biblioteca, los dos fuisteis a coger el mismo libro a la vez.
Q(7, (d, a) => { const tb = R0(a, 'biblioteca'), tl = R0(a, 'libro'); return { ...BIB({ look: MEMO }), atores: [YO({ x: -.6, z: -2.2, eyes: [[0, 'look']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > tl - .5 ? 150 : 12, u > tl - .5 ? -20 : 8] }) }), ELLA({ x: .6, z: -2.2, eyes: [[0, 'lookl']], pose: (k, u) => k.pose({ armL: [u > tl - .5 ? 150 : 12, u > tl - .5 ? 20 : 8], armR: [12, 8] }) })],
  extra: (c) => { const b = libro('#C9361F', 'MISTERIOS'); b.scale.setScalar(.5); b.position.set(0, 2.05, -2.85); c.add(b); const L = SEQ(c, a, [[['AYER POR LA TARDE'], .1, 'w', [0, 2.75, -2.3], 1.6], [['BIBLIOTECA DEL INSTITUTO'], tb - .2, 'y', [0, 2.75, -2.3], 2.0], [['EL MISMO LIBRO'], tl - .3, 'p', [0, 2.75, -2.3], 1.4, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.8, 1.6], [0, 1.6, -2.4], [0, 1.75, 1.1], [0, 1.6, -2.4]], range: 2.6 }; });
// 8. Vuestras manos se tocaron. Saltó una chispa. Os reísteis. Y ya está.
Q(8, (d, a) => { const tc = R0(a, 'chispa'), tr = R0(a, 'reisteis'); return { ...BIB({ look: MEMO }), atores: [YO({ x: -.35, z: -2.2, eyes: [[0, 'look'], [tc, 'wide'], [tr, 'happy']], pose: (k, u) => (u > tr ? risa(k, u) : k.pose({ armL: [12, 8], armR: [150, -20] })) }), ELLA({ x: .35, z: -2.2, eyes: [[0, 'lookl'], [tc, 'wide'], [tr, 'happy']], pose: (k, u) => (u > tr ? risa(k, u) : k.pose({ armL: [150, 20], armR: [12, 8] })) })],
  extra: (c) => { const b = libro('#C9361F', 'MISTERIOS'); b.scale.setScalar(.5); b.position.set(0, 2.05, -2.85); c.add(b); const ch = chispa(c); const br = brillos(c, 12, '#FFF2C0'); const L = SEQ(c, a, [[['¡CHISPA!'], tc, 'y', [0, 2.75, -2.2], 1.0, 1]]);
    return { update: (u, t, cam) => { const k = smooth(tc - .1, tc, u) * (1 - smooth(tc + .3, tc + 1.2, u)); ch.position.set(0, 2.1, -2.3); ch.material.opacity = k; br(u, [0, 2.1, -2.2, .5], k); L(u, cam); } }; },
  c: [[0, 1.9, .9], [0, 1.9, -2.4], [0, 1.8, .5], [0, 1.8, -2.4]], range: 2.2 }; });
// 9. Bueno. Eso parecía.
Q(9, (d, a) => ({ ...CE(), atores: [ELLA({ x: .5, z: .2, eyes: [[0, 'flat']] })],
  extra: (c) => { const L = SEQ(c, a, [[['ESO PARECÍA…'], .3, 'w', [.5, 2.25, .2], 1.3, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[.5, 1.5, 2.6], [.5, 1.35, .2], [.5, 1.45, 2.1], [.5, 1.35, .2]], range: 2 }));
// 10. Entonces suena el móvil. Su móvil. En la pantalla pone tu nombre. Contestas.
Q(10, (d, a) => { const tn = R0(a, 'nombre'), tc = R0(a, 'contestas'); return { ...CE(), atores: [ELLA({ x: .2, z: -.2, eyes: [[0, 'wide'], [tn, 'small']], pose: (k, u) => (u < tc ? k.pose({ armL: [12, 8], armR: [70, 30] }) : k.pose({ armL: [12, 8], armR: [150, 70] })) })],
  extra: (c, s, A) => { const m = movil(['LLAMADA', '', 'TÚ'], { hora: '07:12' }); m.scale.setScalar(.3); c.add(m); const on = ondas(c, 3); const L = SEQ(c, a, [[['EN LA PANTALLA: TU NOMBRE'], tn - .2, 'y', [.2, 2.3, -.2], 2.0, 1]]);
    return { update: (u, t, cam) => { const p = hand(A[0]); const f = smooth(tc, tc + .4, u); m.position.set(p.x + lerp(.05, 0, f), p.y + lerp(.15, .02, f), p.z + .12); m.rotation.z = u < tc ? Math.sin(u * 40) * .12 : 0; pointer(m, cam); on(u, A[0], cam, u < tc ? 1 : 0); L(u, cam); } }; },
  c: [[.2, 1.55, 2.8], [.2, 1.35, -.2], [.2, 1.5, 2.3], [.2, 1.4, -.2]], range: 2.2 }; });
// 11. Y oyes tu propia voz. Gritando.
Q(11, (d, a) => { const tg = R0(a, 'gritando'); return { ...CY(), atores: [YO({ x: 0, z: -.3, eyes: [[0, 'wide'], [tg, 'angry']], pose: (k, u) => k.pose({ armL: [150, 70], armR: [u > tg ? 120 : 30, u > tg ? 80 : 20] }) })],
  extra: (c, s, A) => { const m = movil(['TU CRUSH'], { hora: '07:12' }); m.scale.setScalar(.3); c.add(m); const on = ondas(c, 4); const L = SEQ(c, a, [[['TU PROPIA VOZ'], .2, 'w', [0, 2.3, -.3], 1.4], [['¡GRITANDO!'], tg - .1, 'r', [0, 2.3, -.3], 1.2, 1]]);
    return { update: (u, t, cam) => { const v = new THREE.Vector3(); A[0].arms.L.hand.getWorldPosition(v); m.position.set(v.x, v.y, v.z + .1); pointer(m, cam); on(u, A[0], cam, u > tg ? 1 : 0); if (u > tg) shake(cam, .012, u); L(u, cam); } }; },
  c: [[0, 1.55, 3.0], [0, 1.35, -.3], [0, 1.5, 2.5], [0, 1.4, -.3]], range: 2.2 }; });
// 12. "¿Qué ha pasado? ¿Por qué estoy en tu cuerpo? ¿Y por qué tu cuarto huele a calcetín?"
Q(12, (d, a) => { const tq = R0(a, 'por'), tc = R0(a, 'cuarto'); return { ...CY(), atores: [YO({ x: .1, z: -.3, eyes: [[0, 'wide'], [tc, 'angry']], pose: (k, u) => k.pose({ armL: [150, 70], armR: [u > tc ? 120 : 40, u > tc ? 80 : 20], head: Math.sin(u * 4) * 4 }) })],
  extra: (c, s, A) => { const m = movil(['TU CRUSH'], { hora: '07:12' }); m.scale.setScalar(.3); c.add(m); const pe = calcetines(c); const H0 = HSEQ(c, a, [[['¿Qué ha pasado?'], .05, [-.9, 2.2, -.3], 1.2], [['¿Por qué estoy', 'en tu cuerpo?'], tq, [-.9, 2.2, -.3], 1.3], [['¿Y por qué tu cuarto', 'huele a calcetín?'], tc - .5, [-.9, 2.2, -.3], 1.5]]);
    return { update: (u, t, cam) => { const v = new THREE.Vector3(); A[0].arms.L.hand.getWorldPosition(v); m.position.set(v.x, v.y, v.z + .1); pointer(m, cam); pe(u, CALC, smooth(tc - .5, tc, u)); H0(u, cam); } }; },
  c: [[-.3, 1.6, 3.6], [-.3, 1.2, -.3], [-.3, 1.55, 3.1], [-.3, 1.25, -.3]], range: 2.8 }; });
// 13. Has intercambiado el cuerpo con tu crush.
Q(13, (d, a) => ({ amb: 'gris', fov: 30, atores: [YO({ x: -.7, z: 0, eyes: [[0, 'wide']] }), ELLA({ x: .7, z: 0, eyes: [[0, 'wide']] })],
  extra: (c) => { const g1 = glowSprite('#7FD0FF', 1.2, 0), g2 = glowSprite('#FF8AC8', 1.2, 0); c.add(g1, g2); const L = SEQ(c, a, [[['ELLA (EN TU CUERPO)'], .2, 'b', [-.7, 2.25, 0], 1.5, 1], [['TÚ (EN SU CUERPO)'], .8, 'p', [.7, 2.25, 0], 1.5, 1], [['¡CAMBIO DE CUERPO!'], 1.6, 'y', [0, .35, .3], 1.8, 1]]);
    return { update: (u, t, cam) => { const f = (u * .9) % 1; g1.position.set(lerp(-.7, .7, f), 1.3 + Math.sin(f * Math.PI) * .5, .1); g2.position.set(lerp(.7, -.7, f), 1.3 - Math.sin(f * Math.PI) * .5, .1); g1.material.opacity = g2.material.opacity = .55; L(u, cam); } }; },
  c: [[0, 1.4, 3.6], [0, 1.25, 0], [0, 1.4, 3.1], [0, 1.25, 0]], range: 3 }));
// 14. Y antes de ver cómo sale este día tan raro: suscríbete… Vamos allá.
Q(14, (d, a) => { const ts = R0(a, 'suscribete'), tc = R0(a, 'campanita'), tv = R0(a, 'vamos'); return { amb: 'gris', fov: 30, atores: [YO({ x: -.7, z: 0, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > ts ? 150 + Math.sin(u * 8) * 10 : 12, 30] }) }), ELLA({ x: .7, z: 0, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [u > ts ? 150 + Math.sin(u * 8) * 10 : 12, 30], armR: [12, 8] }) })],
  extra: (c) => { const sb = suscribe(2.4); c.add(sb); sb.position.set(0, 2.45, 0); const L = SEQ(c, a, [[['HISTORIAS DE "¿Y SI…?"'], .5, 'p', [0, .4, .3], 2.0], [['¡VAMOS ALLÁ!'], tv - .1, 'y', [0, 2.45, 0], 1.5, 1]]);
    return { update: (u, t, cam) => { pop(sb, u, ts - .2, tv - .2, cam); L(u, cam);} }; },
  c: [[0, 1.5, 3.8], [0, 1.4, 0], [0, 1.5, 3.3], [0, 1.4, 0]], range: 3 }; });
// 15. Lo primero que notas es algo muy extraño. Te miras las manos.
Q(15, (d, a) => { const tm = R0(a, 'manos'); return { ...CE(), atores: [ELLA({ x: .3, z: .2, eyes: [[0, 'small'], [tm - .3, 'down']], pose: (k, u) => (u > tm - .3 ? manosArriba(k, u) : k.pose()) })],
  extra: (c) => { const L = SEQ(c, a, [[['ALGO MUY EXTRAÑO'], .3, 'w', [.3, 2.3, .2], 1.5, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[.3, 1.55, 3.0], [.3, 1.3, .2], [.3, 1.5, 2.4], [.3, 1.35, .2]], range: 2.2 }; });
// 16. Son sus manos. Más pequeñas. Con las uñas pintadas de azul.
Q(16, (d, a) => { const tp = R0(a, 'pequenas'), tu = R0(a, 'unas'); return { ...CE(), atores: [ELLA({ x: 0, z: 0, eyes: [[0, 'down']], pose: manosArriba })],
  extra: (c, s, A) => { const g = [0, 1].map(() => { const m = glowSprite('#4A86FF', .25, 0); c.add(m); return m; }); const L = SEQ(c, a, [[['SUS MANOS'], .1, 'w', [0, 2.15, 0], 1.0], [['MÁS PEQUEÑAS'], tp - .1, 'y', [0, 2.15, 0], 1.2], [['UÑAS AZULES'], tu - .1, 'b', [0, 2.15, 0], 1.2, 1]]);
    return { update: (u, t, cam) => { const v = new THREE.Vector3(); A[0].arms.L.hand.getWorldPosition(v); g[0].position.set(v.x, v.y, v.z + .05); A[0].arms.R.hand.getWorldPosition(v); g[1].position.set(v.x, v.y, v.z + .05); g.forEach((m) => (m.material.opacity = .6 * smooth(tu - .2, tu + .3, u))); L(u, cam); } }; },
  c: [[0, 1.5, 2.2], [0, 1.25, 0], [0, 1.45, 1.8], [0, 1.25, 0]], range: 1.8 }; });
// 17. Y, aun así, las mueves tú. Y las sientes tuyas.
Q(17, (d, a) => { const tt = R0(a, 'tuyas'); return { ...CE(), atores: [ELLA({ x: 0, z: 0, eyes: [[0, 'down'], [tt, 'happy']], pose: (k, u) => k.pose({ armL: [95 + Math.sin(u * 6) * 18, 25], armR: [95 + Math.cos(u * 6) * 18, 25] }) })],
  extra: (c, s, A) => { const st = brillos(c, 8, '#FFE6A0'); const L = SEQ(c, a, [[['LAS MUEVES TÚ'], .2, 'y', [0, 2.15, 0], 1.2], [['Y LAS SIENTES TUYAS'], tt - .4, 'p', [0, 2.15, 0], 1.5, 1]]); return { update: (u, t, cam) => { const p = hand(A[0]); st(u, [0, p.y, p.z + .1, 1.0], .6 * smooth(tt - .6, tt, u)); L(u, cam); } }; },
  c: [[0, 1.5, 2.2], [0, 1.25, 0], [0, 1.45, 1.8], [0, 1.25, 0]], range: 1.8 }; });
// 18. Esto, aunque parezca imposible, la ciencia lo ha probado. Bueno, más o menos.
Q(18, (d, a) => { const tc = R0(a, 'ciencia'), tm = R0(a, 'mas'); return { ...LABC(), atores: [CIENT(0, { x: -.5, z: -.4, eyes: [[0, 'look'], [tm, 'flat']], pose: (k, u) => (u > tm ? k.pose({ armL: [12, 8], armR: [60, 40 + Math.sin(u * 10) * 20] }) : point(k)) }), CIENT(1, { x: .6, z: -.6, eyes: [[0, 'happy']] })],
  extra: (c) => { const L = SEQ(c, a, [[['¿IMPOSIBLE?'], .2, 'w', [0, 2.3, -.5], 1.2], [['LA CIENCIA LO HA PROBADO'], tc - .2, 'y', [0, 2.3, -.5], 2.0], [['(MÁS O MENOS)'], tm - .1, 'b', [0, 2.3, -.5], 1.3, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.6, 3.6], [0, 1.4, -.5], [0, 1.55, 3.1], [0, 1.4, -.5]], range: 2.6 }; });
// 19. En 2008, dos neurocientíficos de Suecia… pusieron a unos voluntarios unas gafas de realidad virtual.
Q(19, (d, a) => { const tg = R0(a, 'gafas'), ts = R0(a, 'suecia'); return { ...LABC(), atores: [CIENT(0, { x: -1.3, z: -.8, eyes: [[0, 'look']] }), CIENT(2, { x: 1.3, z: -.8, eyes: [[0, 'look']] }), VOLU({ x: 0, z: -.2, eyes: [[0, 'look'], [tg, 'wide']] })],
  extra: (c, s, A) => { const vr = gafasVR(A[2]); const L = SEQ(c, a, [[['PETKOVA Y EHRSSON'], 1.4, 'w', [0, 2.55, -.6], 1.6], [['SUECIA'], ts - .1, 'b', [0, 2.55, -.6], .9], [['GAFAS DE REALIDAD VIRTUAL'], tg - .2, 'y', [0, 2.55, -.6], 2.0, 1]]);
    return { update: (u, t, cam) => { const k = smooth(tg, tg + .4, u); vr.visible = k > .01; vr.scale.setScalar(Math.max(.01, k)); L(u, cam); } }; },
  c: [[0, 1.6, 4.4], [0, 1.4, -.4], [0, 1.55, 3.7], [0, 1.4, -.4]], range: 3 }; });
// 20. Las gafas estaban conectadas a una cámara en la cabeza de un maniquí, mirando hacia abajo.
Q(20, (d, a) => { const tc = R0(a, 'camara'), tm = R0(a, 'maniqui'); return { ...LABC(), atores: [VOLU({ x: -.7, z: -.2, eyes: [[0, 'look']] }), MANIQ({ x: .7, z: -.4 })],
  extra: (c, s, A) => { gafasVR(A[0]); const cm = camaraM(A[1]); cm.rotation.x = .5; const cb = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new THREE.Vector3(-.7, 1.75, -.1), new THREE.Vector3(0, 2.6, -.3), new THREE.Vector3(.7, 2.15, -.35)]), 24, .015, 6), std('#2A2A34')); c.add(cb);
    const L = SEQ(c, a, [[['CÁMARA'], tc, 'w', [.7, 2.55, -.4], .9], [['MANIQUÍ'], tm, 'y', [.7, .45, -.2], 1.0], [['MIRANDO HACIA ABAJO'], 'abajo', 'b', [.7, 2.55, -.4], 1.6, 1]]); return { update: (u, t, cam) => { cb.visible = u > tc - .2; L(u, cam); } }; },
  c: [[0, 1.6, 3.8], [0, 1.4, -.3], [0, 1.55, 3.2], [0, 1.4, -.3]], range: 2.6 }; });
// 21. Así, el voluntario veía el cuerpo del maniquí como si fuera el suyo.
Q(21, (d, a) => { const ts = R0(a, 'suyo'); return { ...LABC(), atores: [VOLU({ x: -.7, z: -.2, eyes: [[0, 'look'], [ts, 'wide']] }), MANIQ({ x: .7, z: -.4 })],
  extra: (c, s, A) => { gafasVR(A[0]); camaraM(A[1]); const scr = screen(c, ['LO QUE VE:', 'EL CUERPO', 'DEL MANIQUÍ'], 1.4, .9, { bg: '#0A1A22', fg: '#7FD0FF', size: 70 }); scr.position.set(-.7, 2.55, -.6); const g = glowSprite('#7FD0FF', 1.4, 0); c.add(g); g.position.set(.7, 1.1, -.4);
    return { update: (u, t, cam) => { pointer(scr, cam); g.material.opacity = .3 * smooth(ts - .5, ts, u); } }; },
  c: [[0, 1.7, 3.8], [0, 1.6, -.3], [0, 1.65, 3.2], [0, 1.6, -.3]], range: 2.6 }; });
// 22. Luego, un investigador les tocaba la barriga con un palito a los dos a la vez.
Q(22, (d, a) => { const tb = R0(a, 'barriga'), tv = R0(a, 'vez'); return { ...LABC(), atores: [VOLU({ x: -.8, z: -.2, eyes: [[0, 'look'], [tb, 'happy']] }), MANIQ({ x: .8, z: -.4 }), CIENT(0, { x: 0, z: -1.1, eyes: [[0, 'look']], pose: (k, u) => k.pose({ armL: [80 + Math.sin(u * 6) * 8, -30], armR: [80 - Math.sin(u * 6) * 8, 30] }) })],
  extra: (c, s, A) => { gafasVR(A[0]); camaraM(A[1]); const p1 = palito(c), p2 = palito(c); const L = SEQ(c, a, [[['UN PALITO'], tb - .4, 'w', [0, 2.5, -.8], 1.1], [['A LOS DOS A LA VEZ'], tv - .6, 'y', [0, 2.5, -.8], 1.6, 1]]);
    return { update: (u, t, cam) => { const w = Math.sin(u * 6) * .05; p1.position.set(-.45 + w, 1.0, -.4); p1.rotation.y = -.5; p2.position.set(.45 - w, 1.0, -.6); p2.rotation.y = .5; L(u, cam); } }; },
  c: [[0, 1.6, 3.8], [0, 1.3, -.4], [0, 1.55, 3.2], [0, 1.3, -.4]], range: 2.6 }; });
// 23. Y en muy poco tiempo, muchos voluntarios sentían que el cuerpo del maniquí era su cuerpo.
Q(23, (d, a) => { const ts = R0(a, 'sentian'); return { ...LABC(), atores: [VOLU({ x: -.8, z: -.2, eyes: [[0, 'look'], [ts, 'wide']] }), MANIQ({ x: .8, z: -.4 })],
  extra: (c, s, A) => { gafasVR(A[0]); camaraM(A[1]); const g = glowSprite('#7FD0FF', 1.8, 0); c.add(g); g.position.set(.8, 1.2, -.4); const br = brillos(c, 10, '#BFE6FF'); const L = SEQ(c, a, [[['EN MUY POCO TIEMPO'], .2, 'w', [0, 2.5, -.4], 1.6], [['SIENTEN QUE ES SU CUERPO'], ts, 'y', [0, 2.5, -.4], 2.0, 1]]);
    return { update: (u, t, cam) => { const k = smooth(ts - .2, ts + .6, u); g.material.opacity = .35 * k; br(u, [.8, 1.3, -.3, .5], k); L(u, cam); } }; },
  c: [[0, 1.6, 3.6], [0, 1.3, -.3], [0, 1.55, 3.1], [0, 1.3, -.3]], range: 2.6 }; });
// 24. Tanto, que cuando acercaban un cuchillo a la barriga del maniquí, su piel reaccionaba con miedo.
Q(24, (d, a) => { const tc = R0(a, 'cuchillo'), tp = R0(a, 'piel'); return { ...LABC(), atores: [VOLU({ x: -.8, z: -.2, eyes: [[0, 'look'], [tc, 'wide']], pose: (k, u) => (u > tc ? tiembla(k, u, 1.4) : k.pose()) }), MANIQ({ x: .8, z: -.4 }), CIENT(1, { x: 1.6, z: -.9, eyes: [[0, 'flat']], pose: (k) => k.pose({ armL: [80, -60], armR: [12, 8] }) })],
  extra: (c, s, A) => { gafasVR(A[0]); camaraM(A[1]); const kn = cuchillo(); c.add(kn); const go = gotas(c, 6); const L = SEQ(c, a, [[['UN CUCHILLO'], tc - .2, 'r', [.8, 2.5, -.4], 1.2], [['SU PIEL REACCIONA CON MIEDO'], tp - .2, 'y', [-.5, 2.5, -.2], 2.0, 1]]);
    return { update: (u, t, cam) => { const k = smooth(tc - .4, tc + .8, u); kn.position.set(lerp(1.6, 1.05, k), 1.05, -.35); kn.rotation.y = Math.PI; go(u, [-.8, 1.9, -.1], smooth(tp - .3, tp, u)); L(u, cam); } }; },
  c: [[0, 1.6, 3.8], [0, 1.3, -.3], [0, 1.55, 3.2], [0, 1.3, -.3]], range: 2.6 }; });
// 25. Y hay más. En otra prueba, el voluntario veía a través de los ojos de otra persona.
Q(25, (d, a) => { const to = R0(a, 'ojos'); return { ...LABC(), atores: [VOLU({ x: -.6, z: -.2, eyes: [[0, 'look']] }), CIENT(0, { x: .6, z: -.2, eyes: [[0, 'lookl']] })],
  extra: (c, s, A) => { gafasVR(A[0]); camaraM(A[1]); const L = SEQ(c, a, [[['¡HAY MÁS!'], .1, 'y', [0, 2.3, -.2], 1.0], [['VE A TRAVÉS DE LOS OJOS DE OTRA PERSONA'], to - 1.2, 'w', [0, 2.3, -.2], 2.4, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.6, 3.4], [0, 1.35, -.2], [0, 1.55, 2.9], [0, 1.35, -.2]], range: 2.4 }; });
// 26. Y cuando se daban la mano, mucha gente sentía que estaba estrechándose la mano… a sí misma.
Q(26, (d, a) => { const tm = R0(a, 'mano'), ts = R0(a, 'misma'); return { ...LABC(), atores: [VOLU({ x: -.4, z: -.2, eyes: [[0, 'look'], [ts, 'wide']], pose: (k) => k.pose({ armL: [12, 8], armR: [60, 10 + 0] }) }), CIENT(0, { x: .4, z: -.2, eyes: [[0, 'lookl']], pose: (k) => k.pose({ armL: [60, 10], armR: [12, 8] }) })],
  extra: (c, s, A) => { gafasVR(A[0]); camaraM(A[1]); const L = SEQ(c, a, [[['SE DAN LA MANO'], tm - .2, 'w', [0, 2.2, -.2], 1.3], [['…A SÍ MISMOS'], ts - .3, 'p', [0, 2.2, -.2], 1.2, 1]]); return { update: (u, t, cam) => { const sh = Math.sin(u * 7) * 6; A[0].pose({ armL: [12, 8], armR: [60 + sh, 10] }); A[1].pose({ armL: [60 + sh, 10], armR: [12, 8] }); L(u, cam); } }; },
  c: [[0, 1.5, 3.0], [0, 1.3, -.2], [0, 1.45, 2.5], [0, 1.3, -.2]], range: 2.2 }; });
// 27. Nuestro cerebro decide cuál es nuestro cuerpo usando lo que ve y lo que siente. Y se le puede engañar.
Q(27, (d, a) => { const tv = R0(a, 've'), ts = R0(a, 'siente'), te = R0(a, 'enganar'); return { amb: 'gris', fov: 30, atores: [],
  extra: (c) => { const on = cerebro(c, [0, 1.4, 0], 1.6); const L = SEQ(c, a, [[['LO QUE VE'], tv - .2, 'b', [-1.3, 1.9, 0], 1.2, 1], [['LO QUE SIENTE'], ts - .2, 'p', [1.3, 1.9, 0], 1.3, 1], [['¡SE LE PUEDE ENGAÑAR!'], te - .5, 'y', [0, .45, .2], 1.9]]);
    return { update: (u, t, cam) => { on(u > te - .5 && Math.sin(u * 12) > 0); L(u, cam); } }; },
  c: [[0, 1.4, 3.6], [0, 1.25, 0], [0, 1.4, 3.1], [0, 1.25, 0]], range: 3 }; });
// 28. Bajas a la cocina. Su madre está haciendo tostadas.
Q(28, (d, a) => { const tm = R0(a, 'madre'); return { ...COC(), atores: [MAMA({ x: .8, z: -1.9, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [60, 40], armR: [60 + Math.sin(u * 5) * 6, 40] }) }), ELLA({ x: -1.6, z: .5, eyes: [[0, 'small']], move: (u) => [lerp(-2.4, -1.4, smooth(0, 1.5, u)), 0, .5] })],
  extra: (c) => { COCINA(c); const L = SEQ(c, a, [[['LA COCINA'], .1, 'w', [-.6, 2.4, -1.0], 1.1], [['SU MADRE'], tm, 'p', [.8, 2.6, -1.9], 1.0, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[-.3, 1.7, 4.2], [-.2, 1.2, -.8], [-.3, 1.65, 3.6], [-.2, 1.2, -.8]], range: 3 }; });
// 29. "Buenos días, cariño. ¿Has dormido bien?"
Q(29, (d, a) => ({ ...COC(), atores: [MAMA({ x: .5, z: -1.6, eyes: [[0, 'happy']], talk: [[0, d]] }), ELLA({ x: -.5, z: -.6, eyes: [[0, 'small']] })],
  extra: (c) => { COCINA(c); const H0 = HSEQ(c, a, [[['Buenos días, cariño.', '¿Has dormido bien?'], .05, [.5, 2.45, -1.5], 1.6]]); return { update: (u, t, cam) => H0(u, cam) }; },
  c: [[0, 1.6, 3.2], [0, 1.35, -1.0], [0, 1.55, 2.7], [0, 1.35, -1.0]], range: 2.6 }));
// 30. "Eh… sí. Muy bien… mamá."
Q(30, (d, a) => { const tm = R0(a, 'mama'); return { ...COC(), atores: [ELLA({ x: -.3, z: -.6, eyes: [[0, 'small'], [tm, 'flat']], talk: [[0, d]] })],
  extra: (c) => { COCINA(c); const go = gotas(c, 4); const H0 = HSEQ(c, a, [[['Eh… sí.', 'Muy bien…'], .05, [-.3, 2.12, -.6], 1.1], [['…mamá.'], tm - .1, [-.3, 2.12, -.6], 1.0]]); return { update: (u, t, cam) => { go(u, [-.05, 1.85, -.5], smooth(tm, tm + .3, u)); H0(u, cam); } }; },
  c: [[-.3, 1.55, 2.4], [-.3, 1.4, -.6], [-.3, 1.5, 2.0], [-.3, 1.4, -.6]], range: 2 }; });
// 31. Te sale rarísimo.
Q(31, (d, a) => ({ ...COC(), atores: [ELLA({ x: -.3, z: -.6, eyes: [[0, 'flat']], pose: (k) => k.pose({ armL: [12, 8], armR: [125, 150] }) })],
  extra: (c) => { COCINA(c); const L = SEQ(c, a, [[['RARÍSIMO'], .1, 'r', [-.3, 2.15, -.6], 1.0, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[-.3, 1.45, 1.9], [-.3, 1.4, -.6], [-.3, 1.45, 1.6], [-.3, 1.4, -.6]], range: 1.8 }));
// 32. En la mesa está su hermano pequeño… "¿Por qué te sientas así? Pareces un chico."
Q(32, (d, a) => { const tp = R0(a, 'por'), tc = R0(a, 'pareces'); return { ...COC(), atores: [SENTA(HERM, .6, -.9, { eyes: [[0, 'smug']], talk: [[tp, d]] }), SENTA(ELLA, -.6, -.9, { eyes: [[0, 'look'], [tc, 'wide']], pose: (k) => k.pose({ armL: [40, 60], armR: [40, -60] }) })],
  extra: (c) => { COCINA(c); const L = SEQ(c, a, [[['SU HERMANO PEQUEÑO'], .3, 'b', [.6, 1.95, -.9], 1.5]]); const H0 = HSEQ(c, a, [[['¿Por qué te sientas así?'], tp, [.6, 1.95, -.9], 1.5], [['Pareces un chico.'], tc, [.6, 1.95, -.9], 1.3]]); return { update: (u, t, cam) => { L(u, cam); H0(u, cam); } }; },
  c: [[0, 1.5, 2.9], [0, 1.05, -.9], [0, 1.45, 2.5], [0, 1.05, -.9]], range: 2.4 }; });
// 33. Te pones recta de golpe. Coges una tostada.
Q(33, (d, a) => { const tt = R0(a, 'tostada'); return { ...COC(), atores: [SENTA(ELLA, -.3, -.9, { eyes: [[0, 'wide'], [.6, 'flat']], pose: (k, u) => (u > tt ? k.pose({ armL: [12, 8], armR: [70, 40] }) : recta(k)) })],
  extra: (c, s, A) => { COCINA(c); const [t0] = tostadas(c, .3, [0, 0, 0]); const L = SEQ(c, a, [[['¡RECTA!'], .1, 'y', [-.3, 1.95, -.9], .9, 1]]); return { update: (u, t, cam) => { const p = hand(A[0]); t0.position.set(p.x, p.y, p.z + .1); t0.visible = u > tt; pointer(t0, cam); L(u, cam); } }; },
  c: [[-.3, 1.35, 2.2], [-.3, 1.05, -.9], [-.3, 1.3, 1.8], [-.3, 1.05, -.9]], range: 2 }; });
// 34. Le pones mantequilla, mermelada y… kétchup. Como haces tú siempre.
Q(34, (d, a) => { const tm = R0(a, 'mantequilla'), tr = R0(a, 'mermelada'), tk = R0(a, 'ketchup'); return { ...COC(), atores: [],
  extra: (c) => { COCINA(c); const pl = new THREE.Mesh(new THREE.CylinderGeometry(.32, .3, .03, 32), std('#FBF7EC')); pl.position.set(0, .81, -.3); c.add(pl); const T = tostadas(c, .45, [0, .84, -.3]); T.forEach((m) => (m.rotation.x = -Math.PI / 2)); const kb = ketchup(); c.add(kb);
    const L = SEQ(c, a, [[['MANTEQUILLA'], tm, 'w', [-.42, .95, -.05], .55], [['MERMELADA'], tr, 'p', [-.42, .95, -.05], .55], [['¿¡KÉTCHUP!?'], tk, 'r', [-.42, .95, -.05], .55, 1]]);
    return { update: (u, t, cam) => { const s0 = [0, tm + .2, tr + .2, tk + .3]; T.forEach((m, i) => (m.visible = u >= s0[i] && (i === 3 || u < (s0[i + 1] ?? 1e9) + .05))); kb.position.set(.35, lerp(1.6, .82, smooth(tk - .6, tk, u)), -.3); kb.rotation.z = lerp(0, 2.4, smooth(tk, tk + .3, u)); L(u, cam); } }; },
  c: [[0, 1.6, .7], [0, .85, -.3], [0, 1.5, .5], [0, .85, -.3]], range: 1.2 }; });
// 35. Su madre deja de masticar. Su hermano deja de masticar.
Q(35, (d, a) => { const th = R0(a, 'hermano'); return { ...COC(), atores: [MAMA({ x: -.9, z: -1.7, eyes: [[0, 'wide']], pose: (k) => k.pose({ armL: [12, 8], armR: [110, 120] }) }), SENTA(HERM, .7, -.9, { eyes: [[0, 'smug'], [th, 'wide']] }), SENTA(ELLA, -.1, -.9, { eyes: [[0, 'small']], pose: come })],
  extra: (c) => { COCINA(c); const L = SEQ(c, a, [[['SU MADRE: STOP'], .1, 'w', [-.9, 2.55, -1.7], 1.3], [['SU HERMANO: STOP'], th - .2, 'b', [.7, 1.95, -.9], 1.4, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.55, 3.4], [0, 1.2, -1.0], [0, 1.5, 2.9], [0, 1.2, -1.0]], range: 2.6 }; });
// 36. "Es… una moda nueva", dices. "Sale en internet."
Q(36, (d, a) => { const ti = R0(a, 'sale'); return { ...COC(), atores: [SENTA(ELLA, -.1, -.9, { eyes: [[0, 'smug']], talk: [[0, d]] })],
  extra: (c) => { COCINA(c); const H0 = HSEQ(c, a, [[['Es… una moda nueva.'], .05, [-.1, 1.95, -.9], 1.4], [['Sale en internet.'], ti, [-.1, 1.95, -.9], 1.3]]); return { update: (u, t, cam) => H0(u, cam) }; },
  c: [[-.1, 1.35, 2.2], [-.1, 1.1, -.9], [-.1, 1.3, 1.8], [-.1, 1.1, -.9]], range: 2 }; });
// 37. Y te comes la tostada entera. Con kétchup. Sin respirar.
Q(37, (d, a) => { const tr = R0(a, 'respirar'); return { ...COC(), atores: [SENTA(ELLA, -.1, -.9, { eyes: [[0, 'shut'], [tr + .8, 'happy']], pose: come }), SENTA(HERM, .9, -.9, { eyes: [[0, 'wide']] })],
  extra: (c, s, A) => { COCINA(c); const T = tostadas(c, .3, [0, 0, 0]); const L = SEQ(c, a, [[['ENTERA'], .3, 'y', [-.1, 1.95, -.9], .9], [['SIN RESPIRAR'], tr - .3, 'r', [-.1, 1.95, -.9], 1.2, 1]]);
    return { update: (u, t, cam) => { const p = hand(A[0]); T.forEach((m, i) => { m.visible = i === 3; m.position.set(p.x, p.y, p.z + .1); m.scale.setScalar(Math.max(.01, 1 - smooth(.3, tr, u))); pointer(m, cam); }); L(u, cam); } }; },
  c: [[.2, 1.4, 2.6], [.2, 1.05, -.9], [.2, 1.35, 2.2], [.2, 1.05, -.9]], range: 2.2 }; });
// 38. Su móvil vibra en tu bolsillo. Un mensaje de ella. Bueno, de tu cuerpo.
Q(38, (d, a) => { const tc = R0(a, 'cuerpo'); return { ...COC(), atores: [SENTA(ELLA, -.1, -.9, { eyes: [[0, 'wide'], [1.2, 'down']], pose: (k) => k.pose({ armL: [12, 8], armR: [70, 40] }) })],
  extra: (c, s, A) => { COCINA(c); const m = movil(['MENSAJE DE:', 'TU CUERPO'], { hora: '07:31' }); m.scale.setScalar(.3); c.add(m); const L = SEQ(c, a, [[['¡BZZZ!'], .1, 'w', [-.1, 1.95, -.9], .8], [['UN MENSAJE DE ELLA'], 1.4, 'p', [-.1, 1.95, -.9], 1.5], [['(BUENO, DE TU CUERPO)'], tc - .5, 'b', [-.1, 1.95, -.9], 1.7, 1]]);
    return { update: (u, t, cam) => { const p = hand(A[0]); m.position.set(p.x, p.y + .08, p.z + .12); m.rotation.z = u < 1.2 ? Math.sin(u * 50) * .1 : 0; pointer(m, cam); L(u, cam); } }; },
  c: [[-.1, 1.35, 2.0], [-.1, 1.1, -.9], [-.1, 1.3, 1.7], [-.1, 1.1, -.9]], range: 1.8 }; });
// 39. "Tu madre me ha dado un beso en la frente y me ha llamado campeón. ¿Esto es normal?"
Q(39, (d, a) => { const tc = R0(a, 'campeon'), tn = R0(a, 'esto'); return { amb: 'sala', ambo: { wall: '#4A7A9A' }, fov: 32, look: MANA, atores: [MAMAY({ x: .45, z: -.4, eyes: [[0, 'happy']], pose: (k) => k.pose({ armL: [12, 8], armR: [100, -50] }) }), YO({ x: -.35, z: -.3, eyes: [[0, 'wide'], [tn, 'flat']] })],
  extra: (c) => { const ht = corazon(c, .25); const H0 = HSEQ(c, a, [[['Tu madre me ha dado', 'un beso en la frente…'], .05, [-.35, 2.35, -.3], 1.6], [['…y me ha llamado', 'campeón.'], tc - 1.0, [-.35, 2.35, -.3], 1.5], [['¿Esto es normal?'], tn - .1, [-.35, 2.35, -.3], 1.3]]); const L = SEQ(c, a, [[['MIENTRAS, EN TU CASA'], .1, 'b', [.45, 2.6, -.4], 1.5]]);
    return { update: (u, t, cam) => { ht.position.set(-.3, 1.95 + u * .05, -.1); pop(ht, u, .8, 2.4, cam); H0(u, cam); L(u, cam); } }; },
  c: [[0, 1.6, 3.6], [0, 1.45, -.3], [0, 1.55, 3.1], [0, 1.45, -.3]], range: 2.4 }; });
// 40. "Sí", le contestas. "Disimula."
Q(40, (d, a) => { const td = R0(a, 'disimula'); return { ...COC(), atores: [SENTA(ELLA, -.1, -.9, { eyes: [[0, 'flat']], pose: escribe })],
  extra: (c, s, A) => { COCINA(c); const m = movil(['TÚ:', 'Sí. Disimula.'], { hora: '07:32' }); m.scale.setScalar(.3); c.add(m); const L = SEQ(c, a, [[['DISIMULA'], td - .1, 'y', [-.1, 1.95, -.9], 1.0, 1]]); return { update: (u, t, cam) => { const p = hand(A[0]); m.position.set(p.x - .1, p.y + .08, p.z + .12); pointer(m, cam); L(u, cam); } }; },
  c: [[-.1, 1.35, 2.0], [-.1, 1.1, -.9], [-.1, 1.3, 1.7], [-.1, 1.1, -.9]], range: 1.8 }; });

// ===================== CENAS 41–77 =====================
const ESQ = [[0, 1.6, 3.8], [0, 1.3, -.3], [0, 1.55, 3.2], [0, 1.3, -.3]];
const DOS = (yo = {}, el = {}) => [YO({ x: -.55, z: -.3, eyes: [[0, 'look']], ...yo }), ELLA({ x: .55, z: -.3, eyes: [[0, 'lookl']], ...el })];
const CLASEX = (c, q) => { pupitres(c, [-1.6, 0, 1.6], 1.2); pupitres(c, [-1.6, 1.6], -.2); if (q) QA(c); };
const PIZ = (lines) => (c) => pizarra(c, lines);

// 41. Quedáis a las ocho menos cuarto en la esquina del instituto. Y ahí, por primera vez, te ves a ti mismo. Desde fuera.
Q(41, (d, a) => { const tv = R0(a, 'ves'), tf = R0(a, 'fuera'); return { ...CALLE(), atores: [YO({ x: .6, z: -.4, eyes: [[0, 'look']], move: (u) => [lerp(2.0, .6, smooth(.5, 2.5, u)), 0, -.4] }), ELLA({ x: -.6, z: -.3, eyes: [[0, 'lookl'], [tv, 'wide']] })],
  extra: (c) => { INSTI(c); const L = SEQ(c, a, [[['07:45 · LA ESQUINA'], .1, 'w', [0, 2.4, -.4], 1.6], [['TE VES A TI MISMO'], tv - .2, 'y', [0, 2.4, -.4], 1.6], [['DESDE FUERA'], tf - .2, 'p', [.6, 2.15, -.4], 1.2, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: ESQ, range: 2.8 }; });
// 42. Y te parece rarísimo. Tu cara no es como tú pensabas. Está como… al revés.
Q(42, (d, a) => { const tr = R0(a, 'reves'); return { ...CALLE(), atores: [YO({ x: .45, z: -.3, eyes: [[0, 'look']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [12, 8], head: u > tr ? -12 : 0 }) }), ELLA({ x: -.45, z: -.3, eyes: [[0, 'small'], [tr, 'wide']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > 1 ? 95 : 12, 10] }) })],
  extra: (c) => { INSTI(c); const qm = hab(c, ['¿?'], .5, [.45, 2.2, -.3], 80); const L = SEQ(c, a, [[['RARÍSIMO'], .2, 'r', [-.45, 2.3, -.3], 1.0], [['TU CARA… ¿AL REVÉS?'], tr - .8, 'y', [0, 2.55, -.3], 1.7, 1]]); return { update: (u, t, cam) => { pop(qm, u, 1.4, 1e9, cam); L(u, cam); } }; },
  c: [[0, 1.55, 3.0], [0, 1.4, -.3], [0, 1.5, 2.5], [0, 1.4, -.3]], range: 2.2 }; });
// 43. Y no es una sensación tuya. En 1977, unos psicólogos de Estados Unidos hicieron fotos a un grupo de chicas.
Q(43, (d, a) => { const tf = R0(a, 'fotos'); return { ...LABC({ look: { exposure: 1.1 } }), atores: [CIENT(0, { x: -.8, z: -.2, eyes: [[0, 'look']], pose: (k) => k.pose({ armL: [95, 50], armR: [95, -50] }) }), MUJ(3, { x: .5, z: -.6, eyes: [[0, 'happy']] }), MUJ(5, { x: 1.3, z: -.9, eyes: [[0, 'happy']] })],
  extra: (c, s, A) => { const cm = box(.3, .22, .2, std('#2A2A34'), 0, 0, 0, false); c.add(cm); const fl = flashes(c, 6); const L = SEQ(c, a, [[['ESTADOS UNIDOS'], 'psicologos', 'b', [0, 2.4, -.5], 1.4], [['FOTOS A UN GRUPO DE CHICAS'], tf - .2, 'w', [0, 2.4, -.5], 2.0, 1]]);
    return { update: (u, t, cam) => { const p = hand(A[0]); cm.position.set(p.x + .05, p.y + .05, p.z + .1); fl(u, u > tf ? 1 : 0); L(u, cam); } }; },
  c: [[0, 1.6, 4.0], [.2, 1.3, -.5], [0, 1.55, 3.4], [.2, 1.3, -.5]], range: 2.8 }; });
// 44. Luego les enseñaron dos versiones de su foto: la normal y la del espejo, dada la vuelta.
Q(44, (d, a) => { const tn = R0(a, 'normal'), te = R0(a, 'espejo'); return { amb: 'gris', fov: 30, atores: [],
  extra: (c) => { const f1 = retrato(c, 1.0, [-.75, 1.4, 0], false), f2 = retrato(c, 1.0, [.75, 1.4, 0], true); const L = SEQ(c, a, [[['NORMAL'], tn - .1, 'w', [-.75, .55, .1], .9, 1], [['ESPEJO'], te - .1, 'p', [.75, .55, .1], .9, 1]]);
    return { update: (u, t, cam) => { pop(f1, u, tn - .3, 1e9, cam); pop(f2, u, te - .3, 1e9, cam); f2.rotation.y = lerp(Math.PI, 0, smooth(te - .3, te + .5, u)); L(u, cam); } }; },
  c: [[0, 1.3, 3.4], [0, 1.2, 0], [0, 1.3, 3.0], [0, 1.2, 0]], range: 3 }; });
// 45. Y les preguntaron cuál les gustaba más.
Q(45, (d, a) => ({ amb: 'gris', fov: 30, atores: [MUJ(3, { x: 0, z: .6, eyes: [[0, 'look'], [1.0, 'lookl']] })],
  extra: (c) => { retrato(c, .8, [-.9, 1.5, -.3], false); retrato(c, .8, [.9, 1.5, -.3], true); const p = piensa(c, ['¿Cuál me gusta más?'], 1.3, [0, 2.2, .6]); return { update: (u, t, cam) => pop(p, u, .2, 1e9, cam) }; },
  c: [[0, 1.4, 3.6], [0, 1.4, 0], [0, 1.4, 3.2], [0, 1.4, 0]], range: 3 }));
// 46. Casi todas preferían la del espejo.
Q(46, (d, a) => ({ amb: 'gris', fov: 30, atores: [MUJ(3, { x: 0, z: .6, eyes: [[0, 'happy']], pose: (k) => k.pose({ armL: [12, 8], armR: [95, -10] }) })],
  extra: (c) => { retrato(c, .8, [-.9, 1.5, -.3], false); retrato(c, .8, [.9, 1.5, -.3], true); const ck = check(c, .45, [.9, 2.15, -.2]); const L = SEQ(c, a, [[['ELLAS: LA DEL ESPEJO'], .2, 'p', [0, .62, .6], 1.7, 1]]); return { update: (u, t, cam) => { pop(ck, u, .3, 1e9, cam); L(u, cam); } }; },
  c: [[0, 1.4, 3.6], [0, 1.4, 0], [0, 1.4, 3.2], [0, 1.4, 0]], range: 3 }));
// 47. Pero cuando enseñaban las mismas fotos a sus amigos, ellos preferían la normal.
Q(47, (d, a) => { const tn = R0(a, 'normal'); return { amb: 'gris', fov: 30, atores: [MUJ(5, { x: -.4, z: .6, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [u > tn - .5 ? 95 : 12, 10], armR: [12, 8] }) }), H({ outfit: 'laranja', glow: 0, x: .4, z: .6, eyes: [[0, 'happy']] })],
  extra: (c) => { retrato(c, .8, [-.9, 1.5, -.3], false); retrato(c, .8, [.9, 1.5, -.3], true); const ck = check(c, .45, [-.9, 2.15, -.2]); const L = SEQ(c, a, [[['SUS AMIGOS'], .3, 'b', [0, 2.3, .3], 1.1], [['AMIGOS: LA NORMAL'], tn - .2, 'w', [0, .62, .6], 1.6, 1]]); return { update: (u, t, cam) => { pop(ck, u, tn - .2, 1e9, cam); L(u, cam); } }; },
  c: [[0, 1.4, 3.6], [0, 1.4, 0], [0, 1.4, 3.2], [0, 1.4, 0]], range: 3 }; });
// 48. ¿Por qué? Porque tú te ves cada día en el espejo, al revés.
Q(48, (d, a) => { const tr = R0(a, 'reves'); return { ...CY(), atores: [YO({ x: -.55, z: .2, eyes: [[0, 'look']], pose: (k) => k.pose({ armL: [12, 8], armR: [140, 150] }) }), YO({ x: .55, z: -.6, s: .92, glow: 0, tint: '#D8E6F4', eyes: [[0, 'lookl']], pose: (k) => k.pose({ armL: [140, 150], armR: [12, 8] }) })],
  extra: (c) => { ESPEJO(c); const L = SEQ(c, a, [[['¿POR QUÉ?'], .1, 'w', [0, 2.25, -.3], .9], [['CADA DÍA, AL REVÉS'], tr - .9, 'y', [0, 2.25, -.3], 1.5, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: ESPC, range: 2.4 }; });
// 49. Y los demás te ven tal y como eres. Cada uno prefiere la cara que está acostumbrado a ver.
Q(49, (d, a) => { const tc = R0(a, 'cada'); return { ...REC(), atores: [YO({ x: 0, z: -.4, eyes: [[0, 'happy']] }), MARCOS({ x: -.9, z: .1, eyes: [[0, 'look']] }), SARA({ x: .9, z: .1, eyes: [[0, 'lookl']] })],
  extra: (c) => { PATIO(c); const L = SEQ(c, a, [[['TAL Y COMO ERES'], .4, 'w', [0, 2.3, -.4], 1.4], [['LA CARA A LA QUE ESTAMOS ACOSTUMBRADOS'], tc - .1, 'y', [0, 2.3, -.4], 2.6, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.6, 4.0], [0, 1.3, -.3], [0, 1.55, 3.4], [0, 1.3, -.3]], range: 2.8 }; });
// 50. O sea, que tu crush lleva meses viendo tu cara de verdad. Y tú no la habías visto nunca.
Q(50, (d, a) => { const tn = R0(a, 'nunca'); return { ...CALLE(), atores: DOS({ eyes: [[0, 'look']] }, { eyes: [[0, 'wide'], [tn, 'small']] }),
  extra: (c) => { INSTI(c); const L = SEQ(c, a, [[['TU CARA DE VERDAD'], 1.0, 'y', [-.55, 2.25, -.3], 1.4], [['NUNCA LA HABÍAS VISTO'], tn - .7, 'r', [.55, 2.25, -.3], 1.6, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.55, 3.2], [0, 1.35, -.3], [0, 1.5, 2.7], [0, 1.35, -.3]], range: 2.4 }; });
// 51. Ella te mira desde tu cuerpo. "Vale. Plan. Hasta que sepamos cómo arreglarlo, tú eres yo. Y yo soy tú. Nadie puede enterarse."
Q(51, (d, a) => { const tp = R0(a, 'plan'), tt = R0(a, 'tu'), tn = R0(a, 'nadie'); return { ...CALLE(), atores: DOS({ eyes: [[0, 'flat']], talk: [[tp - .3, d]], pose: (k, u) => (u > tp ? talkP(k, u) : k.pose()) }, { eyes: [[0, 'look']] }),
  extra: (c) => { INSTI(c); const L = SEQ(c, a, [[['ELLA (EN TU CUERPO)'], .1, 'b', [-.55, 2.3, -.3], 1.5]]); const H0 = HSEQ(c, a, [[['Vale. Plan.'], tp - .3, [-.6, 2.3, -.3], 1.0], [['Tú eres yo.', 'Y yo soy tú.'], tt - .2, [-.6, 2.3, -.3], 1.2], [['Nadie puede', 'enterarse.'], tn - .1, [-.6, 2.3, -.3], 1.2]]);
    return { update: (u, t, cam) => { if (u < tp - .4) L(u, cam); else L(-1, cam); H0(u, cam); } }; },
  c: [[0, 1.55, 3.2], [0, 1.4, -.3], [0, 1.5, 2.7], [0, 1.4, -.3]], range: 2.4 }; });
// 52. "¿Y cómo hago para ser tú?"
Q(52, (d, a) => ({ ...CALLE(), atores: DOS({}, { eyes: [[0, 'small']], talk: [[0, d]] }),
  extra: (c) => { INSTI(c); const H0 = HSEQ(c, a, [[['¿Y cómo hago', 'para ser tú?'], .05, [.6, 2.3, -.3], 1.2]]); return { update: (u, t, cam) => H0(u, cam) }; },
  c: [[0, 1.55, 3.2], [0, 1.4, -.3], [0, 1.5, 2.7], [0, 1.4, -.3]], range: 2.4 }));
// 53. "Saluda a todo el mundo. Sonríe. Y no hables de videojuegos."
Q(53, (d, a) => { const ts = R0(a, 'sonrie'), tv = R0(a, 'videojuegos'); return { ...CALLE(), atores: DOS({ eyes: [[0, 'smug']], talk: [[0, d]], pose: (k, u) => k.pose({ armL: [12, 8], armR: [150, u > ts ? 40 : 10] }) }, { eyes: [[0, 'look'], [ts, 'happy'], [tv, 'sad']] }),
  extra: (c) => { INSTI(c); const L = SEQ(c, a, [[['1. SALUDA'], .1, 'w', [0, 2.45, -.3], 1.0, 1], [['2. SONRÍE'], ts - .1, 'y', [0, 2.15, -.3], 1.0, 1], [['3. NADA DE VIDEOJUEGOS'], tv - .6, 'r', [0, 1.85 + .0, -.1], 1.7, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.6, 3.4], [0, 1.4, -.3], [0, 1.55, 2.9], [0, 1.4, -.3]], range: 2.4 }; });
// 54. Entras en clase. Con su mochila. Con sus zapatillas, que te aprietan.
Q(54, (d, a) => { const tm = R0(a, 'mochila'), tz = R0(a, 'aprietan'); return { ...CLASE(), atores: [ELLA({ x: -1.0, z: 1.8, eyes: [[0, 'small'], [tz, 'flat']], move: (u) => [lerp(-2.6, -.6, smooth(0, d, u)), Math.abs(Math.sin(u * 6)) * .03, 1.8], pose: (k, u) => k.pose({ armL: [12, 8], armR: [12, 8], legL: [Math.sin(u * 6) * 12, 0], legR: [-Math.sin(u * 6) * 12, 0] }) }), ...alumnos('look')],
  extra: (c, s, A) => { CLASEX(c); const mo = mochila(c, '#E8667F'); const L = SEQ(c, a, [[['SU MOCHILA'], tm - .1, 'p', [0, 2.6, 1.0], 1.1], [['¡SUS ZAPATILLAS APRIETAN!'], tz - .7, 'r', [0, 2.6, 1.0], 1.9, 1]]);
    return { update: (u, t, cam) => { const p = A[0].root.position; mo.position.set(p.x + .28, .9, p.z - .15); L(u, cam); } }; },
  c: [[-1.0, 1.8, 5.6], [-.6, 1.2, 1.2], [.2, 1.75, 5.2], [0, 1.2, 1.2]], range: 3 }; });
// 55. Y sientes que todo el mundo te mira. Que todos saben que algo raro pasa. Que se te nota en la cara.
Q(55, (d, a) => { const tr = R0(a, 'raro'), tn = R0(a, 'nota'); return { ...CLASE(), atores: [ELLA({ x: 0, z: 2.3, eyes: [[0, 'wide']], pose: (k, u) => tiembla(k, u, .5) }), ...alumnos(null, () => [[0, 'look']])],
  extra: (c) => { CLASEX(c); foco(c, 0, 2.3); const L = SEQ(c, a, [[['TODOS TE MIRAN'], .3, 'w', [0, 2.6, 1.6], 1.3], [['ALGO RARO PASA'], tr - .4, 'y', [0, 2.6, 1.6], 1.4], [['SE TE NOTA EN LA CARA'], tn - .5, 'r', [0, 2.6, 1.6], 1.7, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 2.4, 6.0], [0, 1.1, 1.0], [0, 2.3, 5.4], [0, 1.1, 1.0]], range: 3.5 }; });
// 56. Pero ¿de verdad te están mirando?
Q(56, (d, a) => ({ ...CLASE(), atores: [ELLA({ x: 0, z: 2.3, eyes: [[0, 'small']] }), ...alumnos(null, (i) => [[0, ['down', 'lookl', 'shut', 'look', 'down'][i]]])],
  extra: (c) => { CLASEX(c); const L = SEQ(c, a, [[['¿DE VERDAD?'], .2, 'y', [0, 2.6, 1.6], 1.2, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 2.4, 6.0], [0, 1.1, 1.0], [0, 2.3, 5.6], [0, 1.1, 1.0]], range: 3.5 }));
// 57. En el año 2000, el psicólogo Thomas Gilovich y su equipo hicieron un experimento buenísimo.
Q(57, (d, a) => { const tg = R0(a, 'gilovich'); return { ...CLASE({ look: { exposure: 1.06 } }), atores: [H({ outfit: 'terno', glasses: true, glow: 0, x: -.4, z: -.4, eyes: [[0, 'happy']], talk: [[tg, d]] }), CIENT(1, { x: .5, z: -.6, eyes: [[0, 'look']] })],
  extra: (c) => { pizarra(c, ['EXPERIMENTO', 'EFECTO FOCO']); const L = SEQ(c, a, [[['THOMAS GILOVICH'], tg - .1, 'w', [-.4, 2.0, -.2], 1.4, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.6, 3.8], [0, 1.5, -.8], [0, 1.55, 3.3], [0, 1.5, -.8]], range: 3 }; });
// 58. Pidieron a unos estudiantes que se pusieran una camiseta muy vergonzosa, con la cara de un cantante… hortera.
Q(58, (d, a) => { const tc = R0(a, 'camiseta'), th = R0(a, 'hortera'); return { ...CLASE(), atores: [H({ outfit: 'rosa', glow: 0, x: 0, z: 0, eyes: [[0, 'look'], [tc, 'wide'], [th, 'flat']] })],
  extra: (c, s, A) => { pizarra(c, ['EXPERIMENTO', 'EFECTO FOCO']); const ct = camisetaCara(A[0]); const L = SEQ(c, a, [[['UNA CAMISETA VERGONZOSA'], tc - .1, 'r', [0, 2.12, 0], 1.6], [['UN CANTANTE MUY HORTERA'], th - 1.0, 'y', [0, 2.12, 0], 1.6, 1]]); return { update: (u, t, cam) => { ct.visible = u > tc; L(u, cam); } }; },
  c: [[0, 1.5, 2.8], [0, 1.3, 0], [0, 1.45, 2.3], [0, 1.3, 0]], range: 2.2 }; });
// 59. Y que entraran así en una sala llena de gente.
Q(59, (d, a) => ({ ...CLASE(), atores: [H({ outfit: 'rosa', glow: 0, x: -2.2, z: 2.3, eyes: [[0, 'flat']], move: (u) => [lerp(-2.6, -.2, smooth(0, 2.2, u)), 0, 2.3] }), ...alumnos(null, (i) => [[0, ['look', 'down', 'lookl', 'look', 'down'][i]]])],
  extra: (c, s, A) => { CLASEX(c); camisetaCara(A[0]); const L = SEQ(c, a, [[['UNA SALA LLENA DE GENTE'], .3, 'w', [0, 2.6, 1.4], 1.8, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 2.2, 6.2], [0, 1.1, 1.0], [0, 2.1, 5.6], [0, 1.1, 1.0]], range: 3.5 }));
// 60. Luego les preguntaron: ¿cuántos crees que se han fijado en tu camiseta?
Q(60, (d, a) => ({ ...LABC(), atores: [H({ outfit: 'rosa', glow: 0, x: .4, z: -.3, eyes: [[0, 'look']] }), CIENT(1, { x: -.5, z: -.3, eyes: [[0, 'look']], talk: [[0, d]] })],
  extra: (c, s, A) => { camisetaCara(A[0]); const H0 = HSEQ(c, a, [[['¿Cuántos crees que se', 'han fijado en tu camiseta?'], .1, [-.4, 2.35, -.3], 1.8]]); return { update: (u, t, cam) => H0(u, cam) }; },
  c: [[0, 1.55, 3.2], [0, 1.4, -.3], [0, 1.5, 2.7], [0, 1.4, -.3]], range: 2.4 }));
// 61. Ellos creían que, más o menos, la mitad.
Q(61, (d, a) => { const tm = R0(a, 'mitad'); return { amb: 'gris', fov: 30, atores: [],
  extra: (c) => { const b = barras(c, [['CREÍAN', .5, '#E8667F'], ['EN REALIDAD', .001, '#3F8A52']], 2.6, [0, 1.4, -.2], { title: '¿CUÁNTOS SE FIJARON?' }); const L = SEQ(c, a, [[['LA MITAD'], tm - .2, 'p', [-.6, .35, .2], 1.0, 1]]); return { update: (u, t, cam) => { b.scale.y = smooth(0, 1, u) * .999 + .001; L(u, cam); } }; },
  c: [[0, 1.4, 3.6], [0, 1.3, 0], [0, 1.4, 3.3], [0, 1.3, 0]], range: 3 }; });
// 62. En realidad, solo se había fijado alrededor de una persona de cada cuatro.
Q(62, (d, a) => { const tc = R0(a, 'cuatro'); return { amb: 'gris', fov: 30, atores: [],
  extra: (c) => { const b = barras(c, [['CREÍAN', .5, '#E8667F'], ['EN REALIDAD', .25, '#3F8A52']], 2.6, [0, 1.4, -.2], { title: '¿CUÁNTOS SE FIJARON?' }); const L = SEQ(c, a, [[['LA MITAD'], .0, 'p', [-.6, .35, .2], 1.0, 1], [['1 DE CADA 4'], tc - .4, 'y', [.6, .35, .2], 1.0, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.4, 3.3], [0, 1.3, 0], [0, 1.4, 3.1], [0, 1.3, 0]], range: 3 }; });
// 63. Lo llamaron el efecto foco. Creemos que estamos bajo un foco y que todos nos miran.
Q(63, (d, a) => { const tf = R0(a, 'foco'); return { ...CLASE({ look: { exposure: .85, bloom: .5 } }), atores: [H({ outfit: 'rosa', glow: 0, x: 0, z: 1.2, eyes: [[0, 'wide']] })],
  extra: (c, s, A) => { camisetaCara(A[0]); foco(c, 0, 1.2); const L = SEQ(c, a, [[['EL EFECTO FOCO'], tf - .2, 'y', [0, 2.25, 1.2], 1.4, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.8, 4.6], [0, 1.3, 1.2], [0, 1.7, 4.0], [0, 1.3, 1.2]], range: 3 }; });
// 64. Pero la gente está demasiado ocupada pensando en sí misma.
Q(64, (d, a) => ({ ...CLASE(), atores: [H({ outfit: 'rosa', glow: 0, x: 0, z: 2.3, eyes: [[0, 'look']] }), ...alumnos(null, (i) => [[0, ['down', 'shut', 'lookl', 'down', 'look'][i]]])],
  extra: (c, s, A) => { CLASEX(c); camisetaCara(A[0]); const T = ['¿Mi pelo?', '¿Hay examen?', 'Tengo hambre', '¿Y mi móvil?', 'Qué sueño']; const P = ALUMNOS.map(([x, z], i) => piensa(c, [T[i]], .9, [x, 1.75, z])); return { update: (u, t, cam) => P.forEach((m, i) => pop(m, u, .2 + i * .25, 1e9, cam)) }; },
  c: [[0, 2.5, 6.0], [0, 1.2, 1.0], [0, 2.4, 5.6], [0, 1.2, 1.0]], range: 3.5 }));
// 65. Y tiene razón. Nadie nota nada. Bueno, casi nadie.
Q(65, (d, a) => { const tc = R0(a, 'casi'); return { ...CLASE(), atores: [SENTA(ELLA, 0, 1.2, { eyes: [[0, 'small'], [tc, 'wide']] }), SENTA(SARA, 1.6, 1.2, { eyes: [[0, 'look'], [tc - .4, 'smug']] }), SENTA((o) => MUJ(1, o), -1.6, 1.2, { eyes: [[0, 'down']] })],
  extra: (c) => { CLASEX(c); const L = SEQ(c, a, [[['NADIE NOTA NADA'], .5, 'w', [0, 2.2, 1.2], 1.4], [['CASI NADIE'], tc - .2, 'r', [1.6, 2.0, 1.2], 1.1, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.6, 4.4], [.4, 1.0, 1.2], [.4, 1.55, 3.8], [.6, 1.0, 1.2]], range: 3 }; });
// 66. En la clase de mates, el profe pregunta algo dificilísimo. Y tu cuerpo levanta la mano.
Q(66, (d, a) => { const tl = R0(a, 'levanta'); return { ...CLASE(), atores: [PROFE({ x: -1.2, z: -2.4, eyes: [[0, 'look']], pose: (k, u) => (u < tl ? point(k) : k.pose()) }), SENTA(YO, .6, -.2 + .0, { eyes: [[0, 'look'], [tl, 'happy']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > tl ? 170 : 12, 10] }) }), SENTA(ELLA, -.8, 1.2, { eyes: [[0, 'look'], [tl + .3, 'wide']] })],
  extra: (c) => { CLASEX(c, true); const L = SEQ(c, a, [[['CLASE DE MATES'], .1, 'w', [0, 2.45, -.6], 1.4], [['ALGO DIFICILÍSIMO'], 'dificilisimo', 'r', [0, 2.45, -.6], 1.6], [['TU CUERPO'], tl - .3, 'b', [.6, 2.0, -.2], 1.2, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 2.1, 4.4], [0, 1.6, -1.6], [0, 2.0, 3.9], [0, 1.6, -1.6]], range: 3.5 }; });
// 67. Ella, desde tu cuerpo, responde perfecto.
Q(67, (d, a) => { const tp = R0(a, 'perfecto'); return { ...CLASE(), atores: [SENTA(YO, .6, -.2, { eyes: [[0, 'smug']], talk: [[0, d]] }), PROFE({ x: -1.2, z: -2.4, eyes: [[0, 'look'], [tp, 'wide']] })],
  extra: (c) => { CLASEX(c); const pz = pizarra(c, ['x² + 3x = 10', 'x = 2 ✓']); const L = SEQ(c, a, [[['¡PERFECTO!'], tp - .1, 'y', [.4, 2.1, -.6], 1.3, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[.6, 1.7, 3.2], [0, 1.6, -1.6], [.6, 1.65, 2.8], [0, 1.6, -1.6]], range: 3 }; });
// 68. Toda la clase se gira. Tu mejor amigo, Marcos, la mira con la boca abierta.
Q(68, (d, a) => { const tm = R0(a, 'marcos'); return { ...CLASE(), atores: [SENTA(YO, .0, -.2, { eyes: [[0, 'smug']] }), SENTA(MARCOS, -1.6, -.2, { eyes: [[0, 'look'], [tm, 'wide']], pose: (k) => k.pose({ armL: [12, 8], armR: [12, 8] }) }), SENTA((o) => MUJ(1, o), 1.6, -.2, { eyes: [[0, 'lookl']] }), SENTA((o) => MUJ(6, o), -1.6, 1.2, { eyes: [[0, 'wide']] }), SENTA(ELLA, 1.6, 1.2, { eyes: [[0, 'lookl']] })],
  extra: (c) => { CLASEX(c); const L = SEQ(c, a, [[['TODA LA CLASE SE GIRA'], .2, 'w', [0, 2.5, .5], 1.7], [['MARCOS, TU MEJOR AMIGO'], tm - .2, 'b', [-1.6, 1.95, -.2], 1.7, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.9, 4.6], [-.3, 1.0, .3], [-.3, 1.85, 4.0], [-.6, 1.0, .1]], range: 3.2 }; });
// 69. "¿Desde cuándo sabes tú mates?"
Q(69, (d, a) => ({ ...CLASE(), atores: [SENTA(MARCOS, -.45, -.2, { eyes: [[0, 'wide']], talk: [[0, d]] }), SENTA(YO, .55, -.2, { eyes: [[0, 'smug']] })],
  extra: (c) => { CLASEX(c); const H0 = HSEQ(c, a, [[['¿Desde cuándo', 'sabes tú mates?'], .05, [-.45, 1.95, -.2], 1.3]]); return { update: (u, t, cam) => H0(u, cam) }; },
  c: [[0, 1.4, 2.8], [0, 1.15, -.2], [0, 1.4, 2.4], [0, 1.15, -.2]], range: 2.4 }));
// 70. Tú, en su sitio, te tapas la cara.
Q(70, (d, a) => ({ ...CLASE(), atores: [SENTA(ELLA, 0, 1.2, { eyes: [[0, 'shut']], pose: (k) => k.pose({ armL: [150, 150], armR: [150, 150] }) })],
  extra: (c) => { CLASEX(c); const L = SEQ(c, a, [[['TÚ, EN SU SITIO'], .2, 'p', [0, 1.95, 1.2], 1.3, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.3, 3.6], [0, 1.0, 1.2], [0, 1.3, 3.3], [0, 1.0, 1.2]], range: 2 }));
// 71. Y luego llega tu turno. Ella tenía que hacer hoy una presentación de biología. Delante de todos. Sobre las ranas.
Q(71, (d, a) => { const tb = R0(a, 'biologia'), tr = R0(a, 'ranas'); return { ...CLASE(), atores: [BIO({ x: -1.3, z: -2.2, eyes: [[0, 'happy']], talk: [[0, tr]] }), SENTA(ELLA, 0, 1.2, { eyes: [[0, 'look'], [tr, 'wide']] })],
  extra: (c) => { CLASEX(c); const pz = pizarra(c, ['PRESENTACIÓN DE HOY:', '']); const rn = rana(c, 1.0, [.9, 2.25, -3.3]); const L = SEQ(c, a, [[['TU TURNO'], .1, 'y', [0, 2.2, .6], 1.2], [['BIOLOGÍA'], tb - .1, 'b', [0, 2.2, .6], 1.2], [['LAS RANAS'], tr - .1, 'r', [0, 2.2, .6], 1.2, 1]]); return { update: (u, t, cam) => { rn.visible = u > tr - .2; L(u, cam); } }; },
  c: [[0, 2.0, 5.0], [0, 1.6, -1.2], [0, 1.95, 4.4], [0, 1.6, -1.2]], range: 3.5 }; });
// 72. Tú no sabes nada de ranas.
Q(72, (d, a) => ({ ...CLASE(), atores: [SENTA(ELLA, 0, 1.2, { eyes: [[0, 'wide']], pose: (k, u) => tiembla(k, u, .6) })],
  extra: (c) => { CLASEX(c); const go = gotas(c, 6); const L = SEQ(c, a, [[['NADA DE RANAS'], .2, 'r', [0, 1.95, 1.2], 1.2, 1]]); return { update: (u, t, cam) => { go(u, [0, 1.6, 1.3]); L(u, cam); } }; },
  c: [[0, 1.3, 3.4], [0, 1.1, 1.2], [0, 1.3, 3.1], [0, 1.1, 1.2]], range: 2 }));
// 73. Sales. Abres la boca. Y dices lo único que sabes:
Q(73, (d, a) => ({ ...CLASE(), atores: [ELLA({ x: 0, z: -1.6, eyes: [[0, 'small']], move: (u) => [0, 0, lerp(-.6, -1.6, smooth(0, 1.4, u))] }), ...alumnos(null, () => [[0, 'look']])],
  extra: (c) => { CLASEX(c); rana(c, 1.0, [.9, 2.25, -3.3]); pizarra(c, ['LAS RANAS', '']); return {}; },
  c: [[0, 1.6, 4.4], [0, 1.3, -1.6], [0, 1.55, 3.6], [0, 1.3, -1.6]], range: 3 }));
// 74. "Las ranas… saltan." Silencio.
Q(74, (d, a) => { const ts = R0(a, 'silencio'); return { ...CLASE(), atores: [ELLA({ x: 0, z: -1.6, eyes: [[0, 'small'], [ts, 'flat']], talk: [[0, ts]] })],
  extra: (c) => { rana(c, 1.0, [.9, 2.25, -3.3]); pizarra(c, ['LAS RANAS', '']); const H0 = HSEQ(c, a, [[['Las ranas…', 'saltan.'], .05, [-.7, 2.15, -1.6], 1.1, ts]]); const L = SEQ(c, a, [[['…'], ts, 'w', [0, 2.25, -1.6], .6, 1]]); return { update: (u, t, cam) => { H0(u, cam); L(u, cam); } }; },
  c: [[0, 1.5, 1.6], [0, 1.4, -1.6], [0, 1.5, 1.2], [0, 1.4, -1.6]], range: 2 }; });
// 75. "Y… son verdes. A veces."
Q(75, (d, a) => { const tv = R0(a, 'veces'); return { ...CLASE(), atores: [ELLA({ x: 0, z: -1.6, eyes: [[0, 'small'], [tv, 'flat']], talk: [[0, d]], pose: (k) => k.pose({ armL: [12, 8], armR: [100, -20] }) })],
  extra: (c) => { rana(c, 1.0, [.9, 2.25, -3.3]); pizarra(c, ['LAS RANAS', '']); const H0 = HSEQ(c, a, [[['Y… son verdes.'], .05, [-.7, 2.3, -1.6], 1.1], [['A veces.'], tv - .2, [-.7, 2.3, -1.6], .9]]); return { update: (u, t, cam) => H0(u, cam) }; },
  c: [[0, 1.5, 1.6], [0, 1.4, -1.6], [0, 1.5, 1.2], [0, 1.4, -1.6]], range: 2 }; });
// 76. Alguien se ríe. Pero entonces ves a tu cuerpo, en la última fila, haciéndote gestos. Señalando cosas. Moviendo los labios.
Q(76, (d, a) => { const tc = R0(a, 'cuerpo'), ts = R0(a, 'senalando'); return { ...CLASE(), atores: [ELLA({ x: -.4, z: -1.6, eyes: [[0, 'sad'], [tc, 'look']] }), ...alumnos(null, (i) => [[0, i === 1 ? 'happy' : 'look']]), YO({ x: 2.7, z: 3.0, eyes: [[0, 'wide']], pose: (k, u) => (u > tc ? brazos(k, u) : k.pose()) })],
  extra: (c) => { CLASEX(c); rana(c, 1.0, [.9, 2.25, -3.3]); const L = SEQ(c, a, [[['JE, JE'], .1, 'w', [0, 1.9, 1.2], .7], [['TU CUERPO, EN LA ÚLTIMA FILA'], tc - .2, 'b', [2.7, 2.35, 3.0], 1.8], [['¡GESTOS!'], ts - .3, 'y', [2.7, 2.35, 3.0], 1.0, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  cam: [[0, [-.4, 1.6, 1.0], [-.4, 1.4, -1.6]], [2.0, [-.4, 1.6, 1.0], [-.4, 1.4, -1.6]], [3.2, [1.4, 1.7, -.6], [2.7, 1.5, 3.0]], [99, [1.5, 1.7, -.2], [2.7, 1.5, 3.0]]], f: [[0, 2.6], [2.0, 2.6], [3.2, 3.85], [99, 3.45]], range: 2.6 }; });
// 77. Y lo vas entendiendo. Y vas repitiendo. Y la presentación sale. Regular. Pero sale.
Q(77, (d, a) => { const tr = R0(a, 'regular'); return { ...CLASE(), atores: [ELLA({ x: -.3, z: -1.6, eyes: [[0, 'look'], [tr, 'happy']], talk: [[0, tr]], pose: (k, u) => k.pose({ armL: [12, 8], armR: [100 + Math.sin(u * 3) * 20, -40] }) }), BIO({ x: -1.6, z: -2.0, eyes: [[0, 'look'], [tr, 'happy']] })],
  extra: (c) => { rana(c, 1.0, [.9, 2.25, -3.3]); pizarra(c, ['LAS RANAS', 'saltan · croan · comen bichos']); const L = SEQ(c, a, [[['VAS REPITIENDO'], 1.2, 'w', [-.3, 2.3, -1.6], 1.3], [['REGULAR. PERO SALE.'], tr - .2, 'y', [-.3, 2.3, -1.6], 1.6, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.7, 2.8], [-.3, 1.6, -2.2], [0, 1.65, 2.3], [-.3, 1.6, -2.2]], range: 3 }; });

// ===================== CENAS 78–115 =====================
const PAT2 = [[0, 1.55, 3.4], [0, 1.35, -.2], [0, 1.5, 2.9], [0, 1.35, -.2]];
const BIBT = { look: TARDEB };
const BIBC = [[0, 1.6, 3.2], [0, 1.4, -1.6], [0, 1.55, 2.7], [0, 1.4, -1.6]];
const DOSB = (yo = {}, el = {}) => [YO({ x: -.5, z: -1.6, eyes: [[0, 'look']], ...yo }), ELLA({ x: .5, z: -1.6, eyes: [[0, 'lookl']], ...el })];
const PIEDRA = (A, i, t0) => (u) => piedra(A[i], u > t0);

// 78. En el recreo, la mejor amiga de ella, Sara, te coge del brazo y te lleva a un rincón.
Q(78, (d, a) => { const ts = R0(a, 'sara'), tb = R0(a, 'brazo'); return { ...REC(), atores: [
    ELLA({ x: .45, z: 0, eyes: [[0, 'look'], [tb, 'wide']], move: (u) => [lerp(.45, -.9, smooth(tb + .3, d, u)), 0, lerp(0, -1.0, smooth(tb + .3, d, u))], pose: (k, u) => k.pose({ armL: [12 + smooth(tb, tb + .3, u) * 40, 8], armR: [12, 8] }) }),
    SARA({ x: -.4, z: .1, eyes: [[0, 'smug']], move: (u) => [lerp(-.4, -1.7, smooth(tb + .3, d, u)), 0, lerp(.1, -.9, smooth(tb + .3, d, u))], pose: (k, u) => (u > tb ? brazoAmiga(k) : k.pose()) })],
  extra: (c) => { PATIO(c); const L = SEQ(c, a, [[['EL RECREO'], .1, 'w', [0, 2.4, -.4], 1.0], [['SARA, SU MEJOR AMIGA'], ts - .1, 'p', [-.4, 2.3, .1], 1.6], [['A UN RINCÓN'], tb + .8, 'y', [-1.2, 2.3, -.6], 1.1, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[-.3, 1.6, 4.0], [-.4, 1.3, -.4], [-.8, 1.55, 3.4], [-1.0, 1.3, -.6]], range: 3 }; });
// 79. "Bueno, ¿qué? ¿Hoy sí se lo vas a decir?"
Q(79, (d, a) => ({ ...REC(), atores: [SARA({ x: -.4, z: 0, eyes: [[0, 'smug']], talk: [[0, d]] }), ELLA({ x: .45, z: 0, eyes: [[0, 'wide']] })],
  extra: (c) => { PATIO(c); const H0 = HSEQ(c, a, [[['Bueno, ¿qué? ¿Hoy sí', 'se lo vas a decir?'], .05, [-.4, 2.15, 0], 1.5]]); return { update: (u, t, cam) => H0(u, cam) }; }, c: PAT2, range: 2.4 }));
// 80. "¿Decirle… qué? ¿A quién?"
Q(80, (d, a) => ({ ...REC(), atores: [SARA({ x: -.4, z: 0, eyes: [[0, 'smug']] }), ELLA({ x: .45, z: 0, eyes: [[0, 'small']], talk: [[0, d]] })],
  extra: (c) => { PATIO(c); const H0 = HSEQ(c, a, [[['¿Decirle… qué?', '¿A quién?'], .05, [.45, 2.15, 0], 1.3]]); return { update: (u, t, cam) => H0(u, cam) }; }, c: PAT2, range: 2.4 }));
// 81. Sara pone los ojos en blanco. "A él. Al que llevas mirando desde septiembre." Y señala.
Q(81, (d, a) => { const te = R0(a, 'el'), tl = R0(a, 'al'), ts = R0(a, 'senala'); return { ...REC(), atores: [SARA({ x: -.4, z: 0, eyes: [[0, 'flat'], [te, 'smug']], talk: [[te, ts]], pose: (k, u) => (u > ts ? k.pose({ armL: [12, 8], armR: [95, -55] }) : k.pose()) }), ELLA({ x: .45, z: 0, eyes: [[0, 'small'], [tl, 'wide']] })],
  extra: (c) => { PATIO(c); const L = SEQ(c, a, [[['OJOS EN BLANCO'], .1, 'w', [-.4, 2.15, 0], 1.3]]); const H0 = HSEQ(c, a, [[['A él.'], te - .1, [-.4, 2.15, 0], .8], [['Al que llevas mirando', 'desde septiembre.'], tl - .1, [-.4, 2.15, 0], 1.5]]); return { update: (u, t, cam) => { if (u < te - .2) L(u, cam); else L(-1, cam); H0(u, cam); } }; }, c: PAT2, range: 2.4 }; });
// 82. Te señala a ti. A tu cuerpo.
Q(82, (d, a) => { const tc = R0(a, 'cuerpo'); return { ...REC(), atores: [SARA({ x: -1.4, z: 1.6, eyes: [[0, 'smug']], pose: (k) => k.pose({ armL: [12, 8], armR: [95, -55] }) }), YO({ x: .9, z: -2.4, eyes: [[0, 'look']] }), MARCOS({ x: 1.7, z: -2.6, eyes: [[0, 'look']] })],
  extra: (c) => { PATIO(c); const L = SEQ(c, a, [[['A TI'], .1, 'y', [.9, 2.05, -2.4], .9], [['(A TU CUERPO)'], tc - .2, 'b', [.9, 2.05, -2.4], 1.2, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  cam: [[0, [-1.8, 1.6, 4.4], [-1.2, 1.3, 1.2]], [.8, [-.4, 1.6, 3.4], [.9, 1.2, -2.4]], [99, [-.2, 1.6, 3.0], [.9, 1.2, -2.4]]], f: [[0, 3.3], [.8, 6.0], [99, 5.6]], range: 3 }; });
// 83. Te quedas de piedra.
Q(83, (d, a) => ({ ...REC(), atores: [ELLA({ x: 0, z: 0, eyes: [[0, 'wide']] })],
  extra: (c, s, A) => { PATIO(c); const L = SEQ(c, a, [[['DE PIEDRA'], .2, 'w', [0, 2.2, 0], 1.0, 1]]); return { update: (u, t, cam) => { piedra(A[0], u > .3); L(u, cam); } }; },
  c: [[0, 1.5, 2.4], [0, 1.35, 0], [0, 1.45, 2.0], [0, 1.35, 0]], range: 2 }));
// 84. Mientras tanto, en la otra punta del patio, Marcos le da un codazo a tu cuerpo.
Q(84, (d, a) => { const tc = R0(a, 'codazo'); return { ...REC(), atores: [MARCOS({ x: -.45, z: 0, eyes: [[0, 'smug']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > tc ? 60 + Math.sin(u * 14) * 15 : 12, -40] }) }), YO({ x: .45, z: 0, eyes: [[0, 'look'], [tc + .2, 'wide']], pose: (k, u) => k.pose({ lean: u > tc ? Math.sin(u * 14) * 4 : 0 }) })],
  extra: (c) => { PATIO(c); const L = SEQ(c, a, [[['MIENTRAS TANTO…'], .1, 'w', [0, 2.2, 0], 1.3], [['MARCOS'], 'marcos', 'b', [-.45, 2.2, 0], .9], [['¡CODAZO!'], tc - .1, 'y', [0, 2.2, 0], 1.0, 1]]); return { update: (u, t, cam) => L(u, cam) }; }, c: PAT2, range: 2.4 }; });
// 85. "Tío, ¿hoy le vas a decir algo a ella o qué? Que se te nota muchísimo."
Q(85, (d, a) => { const tq = R0(a, 'que', 1.5); return { ...REC(), atores: [MARCOS({ x: -.45, z: 0, eyes: [[0, 'smug']], talk: [[0, d]] }), YO({ x: .45, z: 0, eyes: [[0, 'wide']] })],
  extra: (c) => { PATIO(c); const H0 = HSEQ(c, a, [[['Tío, ¿hoy le vas a decir', 'algo a ella o qué?'], .05, [-.45, 2.15, 0], 1.6], [['Que se te nota', 'muchísimo.'], tq, [-.45, 2.15, 0], 1.3]]); return { update: (u, t, cam) => H0(u, cam) }; }, c: PAT2, range: 2.4 }; });
// 86. Y ella, dentro de tu cuerpo, se queda de piedra también.
Q(86, (d, a) => { const tp = R0(a, 'piedra'); return { ...REC(), atores: [YO({ x: 0, z: 0, eyes: [[0, 'wide']] })],
  extra: (c, s, A) => { PATIO(c); const L = SEQ(c, a, [[['ELLA (EN TU CUERPO)'], .1, 'b', [0, 2.2, 0], 1.5], [['TAMBIÉN DE PIEDRA'], tp - .1, 'w', [0, 2.2, 0], 1.5, 1]]); return { update: (u, t, cam) => { piedra(A[0], u > tp); L(u, cam); } }; },
  c: [[0, 1.5, 2.4], [0, 1.35, 0], [0, 1.45, 2.0], [0, 1.35, 0]], range: 2 }; });
// 87. Esa tarde volvéis a quedar. En la biblioteca. Delante de la misma estantería.
Q(87, (d, a) => { const tb = R0(a, 'biblioteca'), te = R0(a, 'estanteria'); return { ...BIB(BIBT), atores: DOSB({ move: (u) => [lerp(-2.2, -.5, smooth(0, 2, u)), 0, -1.6] }, { move: (u) => [lerp(2.2, .5, smooth(.3, 2.3, u)), 0, -1.6] }),
  extra: (c) => { const b = libro('#C9361F', 'MISTERIOS'); b.scale.setScalar(.5); b.position.set(0, 2.05, -2.85); c.add(b); const L = SEQ(c, a, [[['ESA TARDE'], .1, 'w', [0, 2.65, -1.8], 1.0], [['LA BIBLIOTECA'], tb - .1, 'y', [0, 2.65, -1.8], 1.3], [['LA MISMA ESTANTERÍA'], te - .5, 'p', [0, 2.65, -1.8], 1.6, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.8, 3.6], [0, 1.5, -1.8], [0, 1.75, 3.0], [0, 1.5, -1.8]], range: 2.6 }; });
// 88. Y los dos tenéis la misma cara. La cara de alguien que se ha enterado de algo que no debía.
Q(88, (d, a) => { const te = R0(a, 'enterado'); return { ...BIB(BIBT), atores: DOSB({ eyes: [[0, 'small'], [te, 'wide']] }, { eyes: [[0, 'small'], [te, 'wide']] }),
  extra: (c, s, A) => { const r1 = ROJO(c, A, 0), r2 = ROJO(c, A, 1); const L = SEQ(c, a, [[['LA MISMA CARA'], .4, 'y', [0, 2.4, -1.6], 1.3, 1]]); return { update: (u, t, cam) => { r1(smooth(te, te + .6, u)); r2(smooth(te, te + .6, u)); L(u, cam); } }; }, c: BIBC, range: 2.4 }; });
// 89. "Sara me ha dicho una cosa", dices tú.
Q(89, (d, a) => ({ ...BIB(BIBT), atores: DOSB({}, { eyes: [[0, 'small']], talk: [[0, d]] }),
  extra: (c) => { const H0 = HSEQ(c, a, [[['Sara me ha dicho', 'una cosa.'], .05, [.5, 2.35, -1.6], 1.2]]); return { update: (u, t, cam) => H0(u, cam) }; }, c: BIBC, range: 2.4 }));
// 90. "Y Marcos me ha dicho otra", dice ella.
Q(90, (d, a) => ({ ...BIB(BIBT), atores: DOSB({ eyes: [[0, 'small']], talk: [[0, d]] }),
  extra: (c) => { const H0 = HSEQ(c, a, [[['Y Marcos me ha', 'dicho otra.'], .05, [-.5, 2.35, -1.6], 1.2]]); return { update: (u, t, cam) => H0(u, cam) }; }, c: BIBC, range: 2.4 }));
// 91. "Yo pensaba que se me notaba muchísimo", dices tú.
Q(91, (d, a) => ({ ...BIB(BIBT), atores: DOSB({}, { eyes: [[0, 'sad']], talk: [[0, d]] }),
  extra: (c) => { const H0 = HSEQ(c, a, [[['Yo pensaba que se', 'me notaba muchísimo.'], .05, [.5, 2.35, -1.6], 1.4]]); return { update: (u, t, cam) => H0(u, cam) }; }, c: BIBC, range: 2.4 }));
// 92. "Yo también", dice ella. "Y no me había dado cuenta de nada."
Q(92, (d, a) => { const tn = R0(a, 'no'); return { ...BIB(BIBT), atores: DOSB({ eyes: [[0, 'look'], [tn, 'sad']], talk: [[0, d]] }),
  extra: (c) => { const H0 = HSEQ(c, a, [[['Yo también.'], .05, [-.5, 2.35, -1.6], 1.0], [['Y no me había dado', 'cuenta de nada.'], tn - .1, [-.5, 2.35, -1.6], 1.3]]); return { update: (u, t, cam) => H0(u, cam) }; }, c: BIBC, range: 2.4 }; });
// 93. Y esto también tiene nombre. En 1998, el mismo Gilovich hizo otro experimento.
Q(93, (d, a) => { const tg = R0(a, 'gilovich'); return { ...CLASE({ look: { exposure: 1.06 } }), atores: [H({ outfit: 'terno', glasses: true, glow: 0, x: -.4, z: -.4, eyes: [[0, 'happy']], talk: [[tg, d]] }), CIENT(1, { x: .5, z: -.6, eyes: [[0, 'look']] })],
  extra: (c) => { pizarra(c, ['EXPERIMENTO', 'MENTIRAS Y NERVIOS']); const L = SEQ(c, a, [[['TAMBIÉN TIENE NOMBRE'], .2, 'y', [0, 2.3, -.4], 1.7], [['GILOVICH, OTRA VEZ'], tg - .2, 'w', [-.4, 2.0, -.2], 1.5, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.6, 3.8], [0, 1.5, -.8], [0, 1.55, 3.3], [0, 1.5, -.8]], range: 3 }; });
// 94. Pidió a unos estudiantes que mintieran delante de un grupo.
Q(94, (d, a) => { const tm = R0(a, 'mintieran'); return { ...CLASE(), atores: [H({ outfit: 'laranja', glow: 0, x: 0, z: -1.6, eyes: [[0, 'look'], [tm, 'smug']], talk: [[tm, d]] }), ...alumnos(null, () => [[0, 'look']])],
  extra: (c) => { CLASEX(c); const L = SEQ(c, a, [[['¡A MENTIR!'], tm - .1, 'r', [0, 2.35, -1.0], 1.2, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.9, 4.6], [0, 1.3, -.6], [0, 1.85, 4.0], [0, 1.3, -.6]], range: 3.5 }; });
// 95. Y luego les preguntó: ¿cuántos crees que te han pillado? Pensaban que muchísimos. En realidad, los habían pillado bastantes menos.
Q(95, (d, a) => { const tp = R0(a, 'pensaban'), tr = R0(a, 'realidad'); return { amb: 'gris', fov: 30, atores: [],
  extra: (c) => { const b1 = barras(c, [['CREÍAN', .7, '#E8667F'], ['EN REALIDAD', .001, '#3F8A52']], 2.6, [0, 1.4, -.2], { title: '¿CUÁNTOS TE HAN PILLADO?' }); const b2 = barras(c, [['CREÍAN', .7, '#E8667F'], ['EN REALIDAD', .35, '#3F8A52']], 2.6, [0, 1.4, -.19], { title: '¿CUÁNTOS TE HAN PILLADO?' });
    const L = SEQ(c, a, [[['MUCHÍSIMOS'], tp, 'p', [-.6, .35, .2], 1.1, 1], [['BASTANTES MENOS'], tr + .4, 'y', [.6, .35, .2], 1.3, 1]]);
    return { update: (u, t, cam) => { b1.visible = u < tr; b2.visible = u >= tr; b1.scale.y = smooth(tp - .5, tp + .5, u) * .999 + .001; L(u, cam); } }; },
  c: [[0, 1.4, 3.6], [0, 1.3, 0], [0, 1.4, 3.3], [0, 1.3, 0]], range: 3 }; });
// 96. Y lo mismo pasaba con los nervios: creían que se les notaban un montón, pero desde fuera apenas se veían.
Q(96, (d, a) => { const tf = R0(a, 'fuera'); return { ...CLASE(), atores: [H({ outfit: 'laranja', glow: 0, x: -.5, z: -.4, eyes: [[0, 'wide']], pose: (k, u) => tiembla(k, u, .5) }), MUJ(3, { x: .7, z: -.2, eyes: [[0, 'look'], [tf, 'flat']] })],
  extra: (c, s, A) => { const hv = corazonVivo(c); const go = gotas(c, 5); const L = SEQ(c, a, [[['POR DENTRO: ¡NERVIOS!'], .3, 'r', [-.5, 2.3, -.4], 1.6], [['DESDE FUERA: APENAS SE VE'], tf - .3, 'w', [.4, 2.3, -.2], 1.9, 1]]);
    return { update: (u, t, cam) => { hv(u, [-.5, 1.05, -.25]); go(u, [-.5, 1.8, -.3], smooth(tf, tf + .4, u) > .5 ? 0 : 1); L(u, cam); } }; },
  c: [[0, 1.55, 3.4], [0, 1.35, -.3], [0, 1.5, 2.9], [0, 1.35, -.3]], range: 2.4 }; });
// 97. Lo llamaron la ilusión de transparencia. Creemos que los demás pueden ver lo que sentimos, como si fuéramos de cristal.
Q(97, (d, a) => { const tc = R0(a, 'cristal'); return { amb: 'gris', fov: 30, atores: [H({ outfit: 'laranja', glow: .35, tint: '#CFE8FF', x: 0, z: 0, eyes: [[0, 'wide']] })],
  extra: (c) => { const hv = corazonVivo(c); const g = glowSprite('#BFE6FF', 2.0, 0); c.add(g); g.position.set(0, 1.2, -.1); const L = SEQ(c, a, [[['LA ILUSIÓN DE TRANSPARENCIA'], .2, 'y', [0, 2.12, 0], 1.9], [['COMO SI FUÉRAMOS DE CRISTAL'], tc - .9, 'w', [0, 2.12, 0], 1.9, 1]]);
    return { update: (u, t, cam) => { hv(u, [0, 1.05, .1]); g.material.opacity = .3; L(u, cam); } }; },
  c: [[0, 1.4, 3.2], [0, 1.3, 0], [0, 1.4, 2.8], [0, 1.3, 0]], range: 2.6 }; });
// 98. Pero no. Los demás no nos leen la mente. Por eso, a veces, hay que decir las cosas.
Q(98, (d, a) => { const tm = R0(a, 'mente'), tc = R0(a, 'cosas'); return { amb: 'gris', fov: 30, atores: [H({ outfit: 'laranja', glow: 0, x: -.5, z: 0, eyes: [[0, 'look'], [tc - .4, 'happy']], talk: [[tc - 1.2, d]] }), MUJ(3, { x: .5, z: 0, eyes: [[0, 'lookl']] })],
  extra: (c) => { const L = SEQ(c, a, [[['NO NOS LEEN LA MENTE'], tm - .6, 'r', [0, 2.15, 0], 1.7], [['HAY QUE DECIR LAS COSAS'], tc - 1.4, 'y', [0, 2.15, 0], 1.8, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.5, 3.4], [0, 1.3, 0], [0, 1.45, 2.9], [0, 1.3, 0]], range: 2.6 }; });
// 99. Os quedáis callados. Ella coge el libro de la estantería. El mismo de ayer.
Q(99, (d, a) => { const tl = R0(a, 'libro'), ta = R0(a, 'ayer'); return { ...BIB(BIBT), atores: DOSB({ eyes: [[0, 'look']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > tl - .6 && u < tl + .6 ? 150 : u > tl ? 70 : 12, u > tl ? 20 : 8] }) }, { eyes: [[0, 'small']] }),
  extra: (c, s, A) => { const b = libro('#C9361F', 'MISTERIOS'); b.scale.setScalar(.5); c.add(b); const L = SEQ(c, a, [[['SILENCIO'], .2, 'w', [0, 2.6, -1.6], 1.0], [['EL MISMO LIBRO DE AYER'], ta - .9, 'p', [0, 2.6, -1.6], 1.8, 1]]);
    return { update: (u, t, cam) => { if (u < tl) b.position.set(0, 2.05, -2.85); else { const p = hand(A[0]); b.position.set(p.x, p.y, p.z + .1); } pointer(b, cam); L(u, cam); } }; },
  c: [[0, 1.75, 3.0], [0, 1.6, -1.8], [0, 1.7, 2.6], [0, 1.6, -1.8]], range: 2.4 }; });
// 100. "¿Lo intentamos?", dice.
Q(100, (d, a) => ({ ...BIB(BIBT), atores: DOSB({ eyes: [[0, 'look']], talk: [[0, d]], pose: (k) => k.pose({ armL: [12, 8], armR: [70, 20] }) }, { eyes: [[0, 'small']] }),
  extra: (c, s, A) => { const b = libro('#C9361F', 'MISTERIOS'); b.scale.setScalar(.5); c.add(b); const H0 = HSEQ(c, a, [[['¿Lo intentamos?'], .05, [-.5, 2.35, -1.6], 1.1]]); return { update: (u, t, cam) => { const p = hand(A[0]); b.position.set(p.x, p.y, p.z + .1); pointer(b, cam); H0(u, cam); } }; },
  c: BIBC, range: 2.4 }));
// 101. Tú pones la mano encima de la suya.
Q(101, (d, a) => ({ ...BIB(BIBT), atores: [YO({ x: -.35, z: -1.6, eyes: [[0, 'down']], pose: (k) => k.pose({ armL: [12, 8], armR: [70, -10] }) }), ELLA({ x: .35, z: -1.6, eyes: [[0, 'down']], pose: (k, u) => k.pose({ armL: [lerp(12, 70, smooth(.2, 1.2, u)), 10], armR: [12, 8] }) })],
  extra: (c, s, A) => { const b = libro('#C9361F', 'MISTERIOS'); b.scale.setScalar(.5); c.add(b); return { update: (u, t, cam) => { const p = hand(A[0]); b.position.set(p.x + .1, p.y, p.z + .08); pointer(b, cam); } }; },
  c: [[0, 1.4, .6], [0, 1.25, -1.6], [0, 1.4, .3], [0, 1.25, -1.6]], range: 1.4 }));
// 102. Chispa.
Q(102, (d, a) => ({ ...BIB(BIBT), atores: [YO({ x: -.35, z: -1.6, eyes: [[0, 'shut']], pose: (k) => k.pose({ armL: [12, 8], armR: [70, -10] }) }), ELLA({ x: .35, z: -1.6, eyes: [[0, 'shut']], pose: (k) => k.pose({ armL: [70, 10], armR: [12, 8] }) })],
  extra: (c) => { const ch = chispa(c); ch.scale.setScalar(2); const br = brillos(c, 16, '#FFF2C0'); const L = SEQ(c, a, [[['¡CHISPA!'], .05, 'y', [0, 2.0, -1.5], 1.0, 1]]); return { update: (u, t, cam) => { ch.position.set(0, 1.25, -1.4); ch.material.opacity = 1 - smooth(.2, d, u) * .6; br(u, [0, 1.3, -1.4, .7], 1); shake(cam, .01 * (1 - smooth(0, d, u)), u); L(u, cam); } }; },
  c: [[0, 1.4, 1.2], [0, 1.3, -1.6], [0, 1.4, 1.0], [0, 1.3, -1.6]], range: 1.8, look: { exposure: 1.2, bloom: .6 } }));
// 103. Y abres los ojos. Y ves tus manos. Tus manos de siempre. Sin uñas azules.
Q(103, (d, a) => { const tm = R0(a, 'manos'), tu = R0(a, 'unas'); return { ...BIB(BIBT), atores: [YO({ x: 0, z: -1.6, eyes: [[0, 'shut'], [.5, 'wide'], [tm, 'down'], [tu + .5, 'happy']], pose: (k, u) => (u > tm - .2 ? manosArriba(k, u) : k.pose()) })],
  extra: (c) => { const L = SEQ(c, a, [[['TUS MANOS DE SIEMPRE'], tm + .6, 'y', [0, 2.15, -1.6], 1.6], [['SIN UÑAS AZULES'], tu - .1, 'b', [0, 2.15, -1.6], 1.4, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.5, .8], [0, 1.25, -1.6], [0, 1.45, .4], [0, 1.25, -1.6]], range: 1.8 }; });
// 104. Y delante de ti está ella. Ella de verdad. En su cuerpo.
Q(104, (d, a) => { const tv = R0(a, 'verdad'); return { ...BIB(BIBT), atores: DOSB({ eyes: [[0, 'wide'], [tv, 'happy']] }, { eyes: [[0, 'shut'], [.6, 'lookl']] }),
  extra: (c) => { const L = SEQ(c, a, [[['ELLA. DE VERDAD.'], tv - .3, 'p', [.5, 2.25, -1.6], 1.4], [['EN SU CUERPO'], 'cuerpo', 'y', [.5, 2.25, -1.6], 1.2, 1]]); return { update: (u, t, cam) => L(u, cam) }; }, c: BIBC, range: 2.4 }; });
// 105. Se mira las manos. Se toca el pelo. Y suspira. "Qué alivio. Tu cuerpo tiene muchísima hambre todo el rato."
Q(105, (d, a) => { const tp = R0(a, 'pelo'), tq = R0(a, 'que'); return { ...BIB(BIBT), atores: DOSB({ eyes: [[0, 'look'], [tq + 1, 'happy']] }, { eyes: [[0, 'down'], [tp, 'happy']], talk: [[tq, d]], pose: (k, u) => (u < tp ? manosArriba(k, u) : u < tq ? k.pose({ armL: [12, 8], armR: [160, 150] }) : talkP(k, u)) }),
  extra: (c) => { const H0 = HSEQ(c, a, [[['Qué alivio.'], tq - .1, [.5, 2.35, -1.6], .9], [['Tu cuerpo tiene muchísima', 'hambre todo el rato.'], tq + 1.2, [.5, 2.35, -1.6], 1.7]]); return { update: (u, t, cam) => H0(u, cam) }; }, c: BIBC, range: 2.4 }; });
// 106. Os reís. Y luego se hace un silencio. Pero esta vez no es incómodo.
Q(106, (d, a) => { const ts = R0(a, 'silencio'); return { ...BIB(BIBT), atores: DOSB({ eyes: [[0, 'happy']], pose: (k, u) => (u < ts ? risa(k, u) : k.pose()) }, { eyes: [[0, 'happy']], pose: (k, u) => (u < ts ? risa(k, u) : k.pose()) }),
  extra: (c, s, A) => { const r1 = ROJO(c, A, 0), r2 = ROJO(c, A, 1); const L = SEQ(c, a, [[['NO ES INCÓMODO'], ts + 1.2, 'w', [0, 2.4, -1.6], 1.3, 1]]); return { update: (u, t, cam) => { r1(smooth(ts, ts + 1, u)); r2(smooth(ts, ts + 1, u)); L(u, cam); } }; }, c: BIBC, range: 2.4 }; });
// 107. "Oye", dice ella. "Ahora ya sé lo que piensa Marcos."
Q(107, (d, a) => { const ta = R0(a, 'ahora'); return { ...BIB(BIBT), atores: DOSB({}, { eyes: [[0, 'smug']], talk: [[0, d]] }),
  extra: (c) => { const H0 = HSEQ(c, a, [[['Oye.'], .05, [.5, 2.35, -1.6], .7], [['Ahora ya sé lo', 'que piensa Marcos.'], ta - .1, [.5, 2.35, -1.6], 1.4]]); return { update: (u, t, cam) => H0(u, cam) }; }, c: BIBC, range: 2.4 }; });
// 108. "Y yo sé lo que piensa Sara."
Q(108, (d, a) => ({ ...BIB(BIBT), atores: DOSB({ eyes: [[0, 'smug']], talk: [[0, d]] }),
  extra: (c) => { const H0 = HSEQ(c, a, [[['Y yo sé lo que', 'piensa Sara.'], .05, [-.5, 2.35, -1.6], 1.2]]); return { update: (u, t, cam) => H0(u, cam) }; }, c: BIBC, range: 2.4 }));
// 109. "Pues entonces…", dice ella, "…ya no hace falta que nadie diga nada, ¿no?"
Q(109, (d, a) => { const ty = R0(a, 'ya'); return { ...BIB(BIBT), atores: DOSB({}, { eyes: [[0, 'look'], [ty, 'smug']], talk: [[0, d]] }),
  extra: (c) => { const H0 = HSEQ(c, a, [[['Pues entonces…'], .05, [.5, 2.35, -1.6], 1.0], [['…ya no hace falta que', 'nadie diga nada, ¿no?'], ty - .1, [.5, 2.35, -1.6], 1.6]]); return { update: (u, t, cam) => H0(u, cam) }; }, c: BIBC, range: 2.4 }; });
// 110. Y tú, por primera vez, no te escondes. "Sí que hace falta. Me gustas."
Q(110, (d, a) => { const ts = R0(a, 'si'), tm = R0(a, 'gustas'); return { ...BIB(BIBT), atores: DOSB({ eyes: [[0, 'look'], [tm, 'happy']], talk: [[ts, d]] }, { eyes: [[0, 'lookl'], [tm + .3, 'wide']] }),
  extra: (c, s, A) => { const r = ROJO(c, A, 0), r2 = ROJO(c, A, 1); const L = SEQ(c, a, [[['NO TE ESCONDES'], .3, 'y', [-.5, 2.35, -1.6], 1.3]]); const H0 = HSEQ(c, a, [[['Sí que hace falta.'], ts - .1, [-.5, 2.35, -1.6], 1.2], [['Me gustas.'], tm - .3, [-.5, 2.35, -1.6], 1.0]]);
    return { update: (u, t, cam) => { if (u < ts - .2) L(u, cam); else L(-1, cam); H0(u, cam); r(smooth(tm, tm + .5, u)); r2(smooth(tm + .3, tm + .8, u)); } }; },
  c: [[-.2, 1.55, 2.6], [-.1, 1.4, -1.6], [-.2, 1.5, 2.2], [-.1, 1.4, -1.6]], range: 2.2 }; });
// 111. Ella sonríe. "Ya lo sé. He estado todo el día dentro de tu cabeza." Y se va hacia la puerta.
Q(111, (d, a) => { const tv = R0(a, 'va'); return { ...BIB(BIBT), atores: DOSB({ eyes: [[0, 'wide'], [2, 'happy']] }, { eyes: [[0, 'happy']], talk: [[.3, tv]], move: (u) => [lerp(.5, 2.4, smooth(tv, d, u)), 0, lerp(-1.6, -.8, smooth(tv, d, u))] }),
  extra: (c) => { const H0 = HSEQ(c, a, [[['Ya lo sé.'], .3, [.5, 2.35, -1.6], .8], [['He estado todo el día', 'dentro de tu cabeza.'], 'he', [.5, 2.35, -1.6], 1.6, tv]]); return { update: (u, t, cam) => H0(u, cam) }; }, c: BIBC, range: 2.4 }; });
// 112. Y antes de salir, se da la vuelta. "Tú a mí también."
Q(112, (d, a) => { const tt = R0(a, 'tu'); return { ...BIB(BIBT), atores: [YO({ x: -.8, z: -1.4, eyes: [[0, 'look'], [tt + 1.0, 'heart']] }), ELLA({ x: 1.6, z: -.8, eyes: [[0, 'happy']], talk: [[tt, d]] })],
  extra: (c, s, A) => { const r = ROJO(c, A, 1); const ht = corazon(c, .35); const H0 = HSEQ(c, a, [[['Tú a mí también.'], tt - .1, [1.6, 2.3, -.8], 1.2]]); return { update: (u, t, cam) => { r(smooth(tt, tt + .6, u)); ht.position.set(.4, 2.0 + Math.sin(u * 4) * .05, -1.1); pop(ht, u, tt + .8, 1e9, cam); H0(u, cam); } }; },
  c: [[.4, 1.6, 3.6], [.4, 1.35, -1.1], [.4, 1.55, 3.0], [.4, 1.35, -1.1]], range: 2.6 }; });
// 113. Al día siguiente, en clase de biología, el profe dice que la presentación de las ranas fue "muy original".
Q(113, (d, a) => { const to = R0(a, 'original'); return { ...CLASE(), atores: [BIO({ x: -1.2, z: -2.0, eyes: [[0, 'happy']], talk: [[to - 1, d]] }), SENTA(ELLA, .6, -.2, { eyes: [[0, 'look'], [to, 'happy']] }), SENTA(YO, -.8, 1.2, { eyes: [[0, 'happy']] })],
  extra: (c) => { CLASEX(c); rana(c, 1.0, [.9, 2.25, -3.3]); const L = SEQ(c, a, [[['AL DÍA SIGUIENTE'], .1, 'w', [0, 2.35, -.4], 1.5]]); const H0 = HSEQ(c, a, [[['Muy original.'], to - .6, [-1.2, 2.3, -2.0], 1.1]]); return { update: (u, t, cam) => { L(u, cam); H0(u, cam); } }; },
  c: [[0, 1.9, 3.8], [-.4, 1.4, -1.0], [0, 1.85, 3.3], [-.4, 1.4, -1.0]], range: 3.5 }; });
// 114. Sara te guiña un ojo. Y Marcos levanta los dos pulgares.
Q(114, (d, a) => { const tm = R0(a, 'marcos'); return { ...CLASE(), atores: [SENTA(SARA, -1.6, -.2, { eyes: [[0, 'smug']] }), SENTA(YO, 0, -.2, { eyes: [[0, 'happy']] }), SENTA(MARCOS, 1.6, -.2, { eyes: [[0, 'happy']], pose: (k, u) => (u > tm ? pulgares(k) : k.pose()) })],
  extra: (c) => { CLASEX(c); const L = SEQ(c, a, [[['GUIÑO'], .3, 'p', [-1.6, 1.95, -.2], .8, 1], [['¡BIEN!'], tm, 'y', [1.6, 1.95, -.2], .8, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.6, 4.4], [0, 1.0, -.2], [0, 1.55, 3.8], [0, 1.0, -.2]], range: 3 }; });
// 115. Y tú, si pudieras intercambiar el cuerpo con alguien durante un día… ¿con quién sería? Te leo en los comentarios.
Q(115, (d, a) => { const tc = R0(a, 'quien'), tl = R0(a, 'leo'); return { amb: 'gris', fov: 30, atores: [YO({ x: -.6, z: 0, eyes: [[0, 'happy']] }), ELLA({ x: .6, z: 0, eyes: [[0, 'happy']] })],
  extra: (c, s, A) => { const g1 = glowSprite('#7FD0FF', 1.0, 0), g2 = glowSprite('#FF8AC8', 1.0, 0); c.add(g1, g2); const L = SEQ(c, a, [[['¿CON QUIÉN INTERCAMBIARÍAS', 'EL CUERPO UN DÍA?'], tc - 1.2, 'y', [0, 2.4, 0], 2.2], [['TE LEO EN LOS COMENTARIOS'], tl - .2, 'p', [0, 2.4, 0], 2.0, 1]]); const sb = suscribe(1.8); c.add(sb); sb.position.set(0, .45, .3);
    return { update: (u, t, cam) => { const f = (u * .5) % 1; g1.position.set(lerp(-.6, .6, f), 1.3 + Math.sin(f * Math.PI) * .45, .1); g2.position.set(lerp(.6, -.6, f), 1.3 - Math.sin(f * Math.PI) * .45, .1); g1.material.opacity = g2.material.opacity = .45; pop(sb, u, tl + 1.2, 1e9, cam); L(u, cam); } }; },
  c: [[0, 1.45, 3.8], [0, 1.35, 0], [0, 1.45, 3.4], [0, 1.35, 0]], range: 3 }; });
