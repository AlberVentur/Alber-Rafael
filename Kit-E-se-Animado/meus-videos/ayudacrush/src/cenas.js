// "¿Y si tu crush te pidiera ayuda para conquistar a otra persona?" — horizontal 1280x720, ~9:38
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
import { tree } from './motor/kit.js';

export const CENAS = [];
const FIM = 999;
const end = (i) => (i + 1 < S.length ? S[i + 1] : FIM);
const KZ = (p, q, k) => p.map((v, i) => q[i] + (v - q[i]) * k);
const mk = (cfg, d) => { const K = cfg.k ?? 1.35; if (cfg.c && K !== 1) { const [p0, q0, p1, q1] = cfg.c; cfg.c = [KZ(p0, q0, K), q0, KZ(p1, q1, K), q1]; } else if (cfg.cam && K !== 1) { cfg.cam = cfg.cam.map(([u, p, q]) => [u, KZ(p, q, K), q]); if (cfg.f) cfg.f = cfg.f.map(([u, v]) => [u, v * K]); } if (cfg.c) { const [p0, q0, p1, q1] = cfg.c; cfg.cam = [[0, p0, q0], [d, p1, q1]]; const D = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]); cfg.f = [[0, D(p0, q0)], [d, D(p1, q1)]]; } return cfg; };
const Q = (i, fn) => { const a = S[i], b = end(i), d = Math.min(b, 578.0) - a; CENAS.push([(x, y) => plano(x, y, mk(fn(d, a), d)), a, b]); };
const Qt = (a, b, fn) => { const d = Math.min(b, 578.0) - a; CENAS.push([(x, y) => plano(x, y, mk(fn(d, a), d)), a, b]); };
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
// ===================== CENAS 0–44 =====================
const RECREO = { amb: 'parque', fov: 30 };
const CR = [[0, 1.6, 3.0], [0, 1.25, -.5], [0, 1.55, 2.5], [0, 1.25, -.5]];
const CRY = [[-.45, 1.5, 2.2], [-.45, 1.32, -.5], [-.45, 1.48, 1.8], [-.45, 1.32, -.5]];
const CRE = [[.45, 1.5, 2.2], [.45, 1.32, -.5], [.45, 1.48, 1.8], [.45, 1.32, -.5]];
const sentado = (x0) => (o = {}) => { const p = o.pose; return (o.mk || YO)({ x: x0, z: -.5, y: SBN, ...o, pose: (k, u) => { sitP(k); if (p) p(k, u); } }); };
const RYO = sentado(-.45);
const RELA = (o = {}) => sentado(.45)({ mk: ELA, ...o });
const FONDO = () => [EXTRA(2, { x: -3.4, z: -2.6, talk: [[0, 99]], eyes: [[0, 'happy']] }), EXTRA(4, { x: -2.6, z: -2.8, eyes: [[0, 'look']], pose: nod }), EXTRA(6, { x: 3.4, z: -2.9, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ head: Math.sin(u * 2) * 5 }) })];
const REC = (c) => { PATIO(c); BANCO(c); };
const comer = (k, u) => k.pose({ armL: [8, 6], armR: [55 + Math.max(0, Math.sin(u * 2.4)) * 45, 50] });
const conBoc = (c, A, i = 0) => { const b = bocadillo(); b.scale.setScalar(.9); c.add(b); return (on = true) => { b.visible = on; if (on) naMao(b, A[i], -.02); }; };
const risa = (k, u) => k.pose({ armL: [40, 60], armR: [40, 60], bob: Math.abs(Math.sin(u * 12)) * .04, head: Math.sin(u * 12) * 5 });
const PLAN = (i, n, txt, dia, kw) => Q(i, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const t0 = lw(c, [dia], 1.4, [0, 2.4, -1]); const t1 = lab(c, ['PLAN Nº ' + n], 2.2, [0, 1.8, -1], { size: 90 }); const t2 = lp(c, [txt], 2.0, [0, 1.15, -1]); const b = brillos(c, 10); return { update: (u, tt, cam) => { pop(t0, u, 0, 99, cam); pop(t1, u, R0(a, 'plan') - .1, 99, cam); pop(t2, u, R0(a, kw) - .1, 99, cam); b(u, [0, 1.7, -.9, 1.3]); } }; },
  c: [[0, 1.7, 3.6], [0, 1.7, -1], [0, 1.7, 3.0], [0, 1.7, -1]], range: 3 }));
// 0. Martes. Recreo. Estás sentado en el banco de siempre, comiéndote el bocadillo,
Q(0, (d, a) => ({ ...RECREO, atores: [RYO({ eyes: [[0, 'look']], pose: comer }), ...FONDO()],
  extra: (c, s, A) => { REC(c); const bb = conBoc(c, A); const L = SEQ(c, a, [[['MARTES · RECREO'], .1, 'y', [0, 2.15, -.4], 1.6], [['EL BANCO DE SIEMPRE'], 'banco', 'w', [0, 2.15, -.4], 1.7]]); return { update: (u, tt, cam) => { bb(); L(u, cam); } }; },
  c: [[0, 2.2, 5.6], [0, 1.0, -.5], [-.2, 1.6, 3.4], [-.3, 1.05, -.5]], range: 4 }));
// 1. cuando tu crush se sienta a tu lado. Así, sin avisar.
Q(1, (d, a) => { const ts = R0(a, 'sienta'); return { ...RECREO, atores: [RYO({ eyes: [[0, 'look'], [ts + .3, 'wide']], pose: comer }), ELA({ x: .45, z: -.5, eyes: [[0, 'happy']], move: (u) => (u < ts + .3 ? [lerp(3.6, .45, smooth(0, ts + .3, u)), 0, -.15] : [.45, SBN, -.5]), pose: (k, u) => (u < ts + .3 ? k.walk(u * 2) : sitP(k)) }), ...FONDO()],
  extra: (c, s, A) => { REC(c); const bb = conBoc(c, A); const L = SEQ(c, a, [[['TU CRUSH SE SIENTA A TU LADO'], ts, 'p', [0, 2.15, -.4], 2.4], [['SIN AVISAR'], 'avisar', 'r', [0, 2.15, -.4], 1.2, 1]]); return { update: (u, tt, cam) => { bb(); L(u, cam); } }; },
  c: CR, range: 4 }; });
// 2. Tu crush. La persona que te gusta desde primero.
Q(2, (d, a) => ({ ...RECREO, atores: [RELA({ eyes: [[0, 'happy']], pose: (k, u) => k.pose({ head: Math.sin(u * 2) * 4 }) }), RYO({ eyes: [[0, 'heart']] })],
  extra: (c) => { REC(c); const h = corazon(c, .3); h.position.set(1.05, 1.5, -.4); const L = SEQ(c, a, [[['TU CRUSH'], 0, 'p', [.45, 1.95, -.4], 1.0], [['DESDE PRIMERO'], 'primero', 'y', [.45, 1.95, -.4], 1.3, 1]]); return { update: (u, tt, cam) => { h.scale.setScalar(latido(u, 140)); pointer(h, cam); L(u, cam); } }; },
  c: CRE, range: 2.5 }));
// 3. Te mira. Respira hondo. Y dice: "Necesito pedirte un favor."
Q(3, (d, a) => { const tr = R0(a, 'respira'), tn = R0(a, 'necesito'); return { ...RECREO, atores: [RYO({ eyes: [[0, 'look']] }), RELA({ eyes: [[0, 'look'], [tr, 'shut'], [tn - .2, 'look']], talk: [[tn, d]], pose: (k, u) => k.pose({ bob: u > tr && u < tn ? Math.sin((u - tr) / (tn - tr) * Math.PI) * .05 : 0 }) })],
  extra: (c) => { REC(c); const t = lw(c, ['RESPIRA HONDO'], 1.3, [.45, 1.95, -.4]); const g = hab(c, ['NECESITO PEDIRTE', 'UN FAVOR'], 1.4, [.6, 2.0, -.3], 56); return { update: (u, tt, cam) => { pop(t, u, tr, tn - .2, cam); pop(g, u, tn, 99, cam); } }; },
  c: CR, range: 4 }; });
// 4. Un favor enorme. Y solo te lo puedo pedir a ti.
Q(4, (d, a) => { const ts = R0(a, 'solo'); return { ...RECREO, atores: [RYO({ eyes: [[0, 'wide'], [R0(a, 'ti'), 'heart']] }), RELA({ eyes: [[0, 'look']], talk: [[0, d]], pose: (k) => k.pose({ armL: [50, 70], armR: [50, 70] }) })],
  extra: (c) => { REC(c); const g = hab(c, ['UN FAVOR ENORME'], 1.4, [.6, 2.0, -.3], 60); const g2 = hab(c, ['SOLO TE LO PUEDO', 'PEDIR A TI'], 1.4, [.6, 2.0, -.3], 56); return { update: (u, tt, cam) => { pop(g, u, 0, ts - .1, cam); pop(g2, u, ts - .1, 99, cam); } }; },
  c: [[.1, 1.55, 2.7], [.1, 1.3, -.5], [.1, 1.5, 2.2], [.1, 1.3, -.5]], range: 3 }; });
// 5. El corazón se te sube a la garganta. Dejas el bocadillo. "Dime."
Q(5, (d, a) => { const tdj = R0(a, 'dejas'), tdi = R0(a, 'dime'); return { ...RECREO, atores: [RYO({ eyes: [[0, 'wide']], talk: [[tdi, d]], pose: (k, u) => k.pose({ armL: [8, 6], armR: [u < tdj ? 55 : lerp(55, 15, smooth(tdj, tdj + .5, u)), 50] }) })],
  extra: (c, s, A) => { REC(c); const bb = bocadillo(); bb.scale.setScalar(.9); c.add(bb); const h = corazon(c, .22); const v = new THREE.Vector3(); const t = lab(c, ['¡A LA GARGANTA!'], 1.3, [-.45, 1.95, -.4], RED); const g = hab(c, ['DIME.'], .8, [-.05, 1.8, -.3], 70);
    return { update: (u, tt, cam) => { if (u < tdj + .5) naMao(bb, A[0], -.02); else bb.position.set(-.1, .6, -.45); A[0].torso.getWorldPosition(v); const k = smooth(.3, 1.6, u); h.position.set(v.x, v.y - .1 + k * .45, v.z + .3); h.scale.setScalar(latido(u, 170)); h.visible = u < tdi; pointer(h, cam); pop(t, u, .8, tdj, cam); pop(g, u, tdi, 99, cam); } }; },
  c: CRY, range: 2.5 }; });
// 6. "Me gusta Marcos. | El de baloncesto."
Qs(6, ['el'], [(d, a) => ({ ...RECREO, atores: [RYO({ eyes: [[0, 'look'], [.5, 'flat']] }), RELA({ eyes: [[0, 'happy']], talk: [[0, d]], pose: (k) => k.pose({ armL: [50, 70], armR: [50, 70] }) })],
  extra: (c, s, A) => { REC(c); const g = hab(c, ['ME GUSTA MARCOS'], 1.4, [.6, 2.0, -.3], 60); const r = RUB(A[1]); return { update: (u, tt, cam) => { pop(g, u, 0, 99, cam); r(.6); } }; }, c: CR, range: 4 }),
(d) => ({ ...RECREO, atores: [MARCOS({ x: 0, z: -1.2, eyes: [[0, 'smug']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [40 + Math.sin(u * 2.2 * Math.PI) * 15, 20] }) }), EXTRA(0, { x: -2.2, z: -.6, eyes: [[0, 'heart']] }), EXTRA(3, { x: 2.2, z: -.6, eyes: [[0, 'heart']] })],
  extra: (c, s, A) => { PATIO(c); canasta(c, 1.6, -2.4); const b = basket(c); const t = lab(c, ['MARCOS · EL DE BALONCESTO'], 2.2, [0, 2.4, -1.0], RED); return { update: (u, tt, cam) => { const p = hand(A[0]); b.position.set(p.x, bote(u), p.z + .15); pop(t, u, 0, 99, cam); } }; },
  c: [[0, 1.6, 4.2], [0, 1.3, -1.2], [0, 1.55, 3.6], [0, 1.3, -1.2]], range: 4 })]);
// 7. Y tú eres su compañero de laboratorio. | Se muerde el labio.
Qs(7, ['muerde'], [(d, a) => ({ amb: 'lab', fov: 30, atores: [YO({ x: -.5, z: -.4, eyes: [[0, 'flat']], pose: hold }), MARCOS({ x: .5, z: -.4, eyes: [[0, 'smug']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [70, 30] }) })],
  extra: (c) => { mesa(c, 0, .5, .9, 2.4, .8, '#E8E2D2'); const t = lab(c, ['TU COMPAÑERO DE LABORATORIO'], 2.4, [0, 2.3, -.3], BLUE); return { update: (u, tt, cam) => pop(t, u, R0(a, 'companero'), 99, cam) }; }, c: [[0, 1.7, 3.6], [0, 1.4, -.4], [0, 1.65, 3.1], [0, 1.4, -.4]], range: 3 }),
(d) => ({ ...RECREO, atores: [RELA({ eyes: [[0, 'down']], pose: (k, u) => k.pose({ head: -6 }) })],
  extra: (c, s, A) => { REC(c); const r = RUB(A[0]); const t = lw(c, ['SE MUERDE EL LABIO'], 1.5, [.45, 1.95, -.4]); return { update: (u, tt, cam) => { r(.4); pop(t, u, .1, 99, cam); } }; }, c: CRE, range: 2.5 })]);
// 8. "¿Me ayudas a conquistarlo?"
Q(8, (d, a) => ({ ...RECREO, atores: [RELA({ eyes: [[0, 'wide']], talk: [[0, d]], pose: (k) => k.pose({ armL: [70, 80], armR: [70, 80] }) })],
  extra: (c) => { REC(c); const g = hab(c, ['¿ME AYUDAS A', 'CONQUISTARLO?'], 1.2, [.45, 1.85, -.3], 58); const b = brillos(c, 8, '#FFB0C0'); return { update: (u, tt, cam) => { pop(g, u, 0, 99, cam); b(u, [.45, 1.3, -.3, .5]); } }; },
  c: [[.45, 1.5, 1.9], [.45, 1.35, -.5], [.45, 1.48, 1.6], [.45, 1.35, -.5]], range: 2.5 }));
// 9. Y el bocadillo, de repente, sabe a cartón.
Q(9, (d, a) => { const tc = R0(a, 'carton'); return { ...RECREO, atores: [RYO({ eyes: [[0, 'look'], [tc, 'flat']], pose: (k) => k.pose({ armL: [8, 6], armR: [75, 50] }) })],
  extra: (c, s, A) => { REC(c); const bb = bocadillo(); bb.scale.setScalar(1.2); c.add(bb); const t = lab(c, ['SABE A CARTÓN'], 1.4, [-.45, 1.95, -.4], { bg: '#6A6258', fg: '#E8E2D2' }); return { update: (u, tt, cam) => { naMao(bb, A[0], -.02); carton(bb, u > tc); pop(t, u, tc, 99, cam); } }; },
  c: CRY, range: 2.5, look: { exposure: .95 } }; });
// 10. Tu crush. Pidiéndote ayuda. Para enamorar a otra persona.
Q(10, (d, a) => { const to = R0(a, 'otra'); return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: 0, z: -.4, eyes: [[0, 'look'], [to, 'sad']] })],
  extra: (c) => { const r = roto(c, .7); r.g.position.set(0, 2.2, -.4); const L = SEQ(c, a, [[['TU CRUSH'], 0, 'p', [-1.2, 1.9, -.3], 1.0], [['PIDIÉNDOTE AYUDA'], 'pidiendote', 'w', [1.2, 1.9, -.3], 1.5], [['PARA ENAMORAR A OTRA PERSONA'], 'enamorar', 'r', [0, .85, .2], 2.5, 1]]);
    return { update: (u, tt, cam) => { r.set(smooth(to, to + .6, u)); r.g.visible = u > .2; L(u, cam); } }; },
  c: [[0, 1.6, 3.6], [0, 1.5, -.4], [0, 1.6, 3.2], [0, 1.5, -.4]], range: 3 }; });
// 11. Suscríbete. Y ahora sí. Vamos allá.
Q(11, (d, a) => { const ts = R0(a, 'suscribete'), tv = R0(a, 'vamos'); return { ...DIA, fov: 32, atores: [YO({ x: -1.0, z: -.3, eyes: [[0, 'look'], [ts, 'happy']], pose: (k, u) => (u > ts ? wave(k, u) : k.pose()) })],
  extra: (c) => { const sb = suscribe(2.4); sb.position.set(.7, 1.8, -1.0); c.add(sb); const b = brillos(c, 14, '#FFE27A'); const q = lw(c, ['¿Y SI…?'], 1.0, [-1.0, 2.3, -.3]); const v = lab(c, ['¡VAMOS ALLÁ!'], 1.4, [-1.0, 2.3, -.3], ROSA); return { update: (u, t, cam) => { pop(q, u, .2, tv - .2, cam); pop(v, u, tv - .2, 99, cam); const k2 = smooth(ts - .3, ts, u) * (1 - smooth(tv - .4, tv, u)); sb.scale.setScalar(Math.max(.01, k2)); b(u, [.7, 1.8, -.9, 1.1], k2); } }; },
  c: [[0, 1.7, 3.8], [0, 1.5, -.6], [0, 1.65, 3.2], [0, 1.5, -.6]], range: 3 }; });
// 12. Lo lógico sería decir que no. Inventarte una excusa.
Q(12, (d, a) => ({ ...RECREO, atores: [RYO({ eyes: [[0, 'lookl']], pose: (k, u) => k.pose({ armL: [8, 6], armR: [110, 80], head: 8 }) }), RELA({ eyes: [[0, 'wide']] })],
  extra: (c) => { REC(c); const L = SEQ(c, a, [[['LO LÓGICO: DECIR QUE NO'], 0, 'w', [-.3, 2.1, -.3], 2.1], [['INVENTARTE UNA EXCUSA'], 'inventarte', 'y', [-.3, 2.1, -.3], 2.0, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: CR, range: 4 }));
// 13. Que tienes exámenes. Que Marcos y tú no os habláis. Que te mudas a Australia.
Q(13, (d, a) => { const ta = R0(a, 'australia'); return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: -1.3, z: -.4, eyes: [[0, 'smug'], [ta, 'wide']], talk: [[0, d]], pose: talkP })],
  extra: (c) => { const L = SEQ(c, a, [[['TENGO EXÁMENES'], 'examenes', 'w', [.3, 2.3, -.4], 1.4, 1], [['MARCOS Y YO NO NOS HABLAMOS'], 'marcos', 'y', [.3, 1.75, -.4], 2.2, 1], [['ME MUDO A AUSTRALIA'], 'australia', 'r', [.3, 1.2, -.4], 1.8, 1]]); const k = ICONO(c, '?!', .5, [-.5, 2.3, -.4], '#F2C14E'); return { update: (u, tt, cam) => { L(u, cam); pop(k, u, ta + .2, 99, cam); } }; },
  c: [[-.2, 1.7, 3.8], [-.2, 1.6, -.4], [-.2, 1.65, 3.3], [-.2, 1.6, -.4]], range: 3 }; });
// 14. Pero ella te está mirando con esos ojos.
Q(14, (d, a) => ({ ...RECREO, atores: [RELA({ eyes: [[0, 'wide']], pose: (k) => k.pose({ armL: [70, 80], armR: [70, 80], head: -6 }) })],
  extra: (c, s, A) => { REC(c); const b = brillos(c, 12, '#FFF2C0'); const v = new THREE.Vector3(); const t = lp(c, ['CON ESOS OJOS'], 1.3, [.45, 1.95, -.4]); return { update: (u, tt, cam) => { A[0].head.getWorldPosition(v); b(u, [v.x, v.y, v.z + .25, .35]); pop(t, u, R0(a, 'ojos') - .3, 99, cam); } }; },
  c: [[.45, 1.4, 1.8], [.45, 1.25, -.5], [.45, 1.38, 1.25], [.45, 1.27, -.5]], range: 2 }));
// 15. Y tú dices la peor palabra posible. "Vale."
Q(15, (d, a) => { const tv = R0(a, 'vale'); return { ...RECREO, atores: [RYO({ eyes: [[0, 'look'], [tv, 'flat']], talk: [[tv, d]] }), RELA({ eyes: [[0, 'wide'], [tv + .2, 'happy']], pose: (k, u) => (u > tv + .2 ? k.pose({ armL: [150, 20], armR: [150, 20] }) : k.pose()) })],
  extra: (c) => { REC(c); const t = lab(c, ['LA PEOR PALABRA POSIBLE'], 2.0, [0, 2.15, -.4], RED); const g = hab(c, ['VALE.'], .8, [-.5, 1.85, -.3], 70); return { update: (u, tt, cam) => { pop(t, u, .2, tv - .1, cam); pop(g, u, tv, 99, cam); } }; },
  c: CR, range: 4 }; });
// 16. Esa noche no duermes. Miras el techo.
Q(16, (d, a) => ({ ...NOCHEC, fov: 30, atores: [DORM(YO, { x: -.7, z: -1.0, y: 1.08, eyes: [[0, 'wide']] })],
  extra: (c) => { const L = SEQ(c, a, [[['NO DUERMES'], .1, 'y', [-.4, 1.95, -.8], 1.2], [['MIRAS EL TECHO'], 'techo', 'w', [-.4, 1.95, -.8], 1.4, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[-.6, 2.3, 3.0], [-.8, 1.0, -1.0], [-.6, 2.2, 2.6], [-.8, 1.0, -1.0]], range: 3, look: NLOOK }));
// 17. Y te preguntas por qué duele tanto algo que, en realidad, no te ha hecho daño.
Q(17, (d, a) => ({ ...NOCHEC, fov: 30, atores: [DORM(YO, { x: -.7, z: -1.0, y: 1.08, eyes: [[0, 'sad']] })],
  extra: (c) => { const r = roto(c, .45); r.g.position.set(-.5, 1.75, -.9); const L = SEQ(c, a, [[['¿POR QUÉ DUELE TANTO?'], .1, 'y', [-.5, 2.2, -.8], 1.8], [['SI NO TE HA HECHO DAÑO'], 'realidad', 'w', [-.5, 2.2, -.8], 2.0, 1]]); return { update: (u, tt, cam) => { r.set(.5 + Math.sin(u * 2) * .2); L(u, cam); } }; },
  c: [[-.6, 2.0, 2.4], [-.7, 1.3, -1.0], [-.6, 1.95, 2.0], [-.7, 1.3, -1.0]], range: 3, look: NLOOK }));
// 18. Nadie te ha empujado. Nadie te ha pegado.
Q(18, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [YO({ x: 0, z: -.4, eyes: [[0, 'flat']], pose: (k) => k.pose({ armL: [30, 10], armR: [30, 10] }) })],
  extra: (c) => { const L = SEQ(c, a, [[['NADIE TE HA EMPUJADO'], 0, 'w', [-1.1, 2.1, -.3], 1.9, 1], [['NADIE TE HA PEGADO'], 'pegado', 'w', [1.1, 1.5, -.3], 1.8, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[0, 1.6, 3.6], [0, 1.5, -.4], [0, 1.6, 3.2], [0, 1.5, -.4]], range: 3 }));
// 19. Y aun así, te duele el pecho de verdad.
Q(19, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [YO({ x: 0, z: -.4, eyes: [[0, 'sad']], pose: (k) => k.pose({ armL: [8, 6], armR: [60, 95], head: 6 }) })],
  extra: (c, s, A) => { const r = roto(c, .3); const v = new THREE.Vector3(); const t = lab(c, ['TE DUELE EL PECHO'], 1.6, [0, 2.2, -.3], RED); return { update: (u, tt, cam) => { A[0].torso.getWorldPosition(v); r.g.position.set(v.x - .12, v.y - .35, v.z + .3); r.set(.3 + Math.abs(Math.sin(u * 4)) * .5); pop(t, u, R0(a, 'pecho') - .2, 99, cam); } }; },
  c: [[0, 1.5, 2.6], [0, 1.35, -.4], [0, 1.5, 2.2], [0, 1.35, -.4]], range: 3 }));
// 20. Y no es una forma de hablar. | En 2003, Naomi Eisenberger y su equipo, en la Universidad de California en Los Ángeles,
Qs(20, ['2003'], [(d) => ({ amb: 'gris', fov: 30, k: 1, atores: [], extra: (c) => { const t = lab(c, ['NO ES UNA', 'FORMA DE HABLAR'], 2.4, [0, 1.6, -1], { h: 260 }); return { update: (u, tt, cam) => pop(t, u, 0, 99, cam) }; }, c: [[0, 1.6, 3.4], [0, 1.6, -1], [0, 1.6, 2.9], [0, 1.6, -1]], range: 3 }),
(d, a) => ({ amb: 'lab', fov: 30, atores: [CIENT(1, { x: -.6, z: -.6, talk: [[1.5, d]], eyes: [[0, 'smug']], pose: talkP }), CIENT(3, { x: .7, z: -.9, eyes: [[0, 'look']], pose: hold }), PROF({ x: 1.6, z: -1.1, eyes: [[0, 'look']] })],
  extra: (c) => { const L = SEQ(c, a, [[['NAOMI EISENBERGER'], 'naomi', 'b', [-.6, 2.15, -.5], 1.7, 1], [['UNIVERSIDAD DE CALIFORNIA · LOS ÁNGELES'], 'universidad', 'w', [.3, .55, .2], 3.0, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[0, 1.7, 4.0], [.2, 1.4, -.7], [0, 1.65, 3.4], [.2, 1.4, -.7]], range: 4 })]);
// 21. metieron a voluntarios en un escáner cerebral
Q(21, (d, a) => ({ amb: 'lab', fov: 30, atores: [DORM((o) => EXTRA(1, o), { x: 1.0, z: -.4, y: 1.0, eyes: [[0, 'wide']], move: (u) => [lerp(1.2, -.3, smooth(0, d, u)), 1.0, -.4] })],
  extra: (c) => { const g0 = RMN(c, -1.2); const t = lab(c, ['UN ESCÁNER CEREBRAL'], 1.8, [0, 2.4, -.3], BLUE); return { update: (u, tt, cam) => { g0.material.opacity = .4 + .3 * Math.sin(u * 6); pop(t, u, R0(a, 'escaner') - .2, 99, cam); } }; },
  c: [[.2, 1.8, 4.0], [0, 1.1, -.4], [.2, 1.75, 3.5], [0, 1.1, -.4]], range: 4 }));
// 22. y les pusieron a jugar a un videojuego muy simple: tres jugadores pasándose una pelota.
Q(22, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const cy = cyber(c, [0, 1.6, -1], 2.8); const L = SEQ(c, a, [[['UN VIDEOJUEGO MUY SIMPLE'], 'videojuego', 'y', [0, 2.55, -.9], 2.2], [['3 JUGADORES · 1 PELOTA'], 'tres', 'w', [0, 2.55, -.9], 2.0, 1]]); return { update: (u, tt, cam) => { cy(u, 'todos'); L(u, cam); } }; },
  c: [[0, 1.8, 3.6], [0, 1.8, -1], [0, 1.75, 3.2], [0, 1.75, -1]], range: 3 }));
// 23. Al principio, todos se la pasaban a todos.
Q(23, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const cy = cyber(c, [0, 1.6, -1], 2.8); const t = lw(c, ['TODOS A TODOS'], 1.6, [0, 2.55, -.9]); return { update: (u, tt, cam) => { cy(u + 3, 'todos'); pop(t, u, .2, 99, cam); } }; },
  c: [[0, 1.75, 3.2], [0, 1.75, -1], [0, 1.75, 3.0], [0, 1.75, -1]], range: 3 }));
// 24. Pero, de repente, los otros dos dejaban de pasársela al voluntario.
Q(24, (d, a) => { const td = R0(a, 'dejaban'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const cy = cyber(c, [0, 1.4, -1], 2.6); const L = SEQ(c, a, [[['DE REPENTE…'], .1, 'w', [0, 2.45, -.9], 1.3], [['YA NO SE LA PASAN'], td, 'r', [0, 2.45, -.9], 1.8, 1]]); return { update: (u, tt, cam) => { cy(u, u > td ? 'fuera' : 'todos', u > td ? 'EL VOLUNTARIO SE QUEDA FUERA' : 'EL JUEGO DE LA PELOTA'); L(u, cam); } }; },
  c: [[0, 1.75, 3.2], [0, 1.6, -1], [0, 1.65, 2.8], [0, 1.55, -1]], range: 3 }; });
// 25. Solo jugaban entre ellos. Y el voluntario se quedaba mirando. Fuera.
Q(25, (d, a) => { const tf = R0(a, 'fuera'); return { amb: 'gris', fov: 30, k: 1, atores: [EXTRA(1, { x: -1.5, z: .3, eyes: [[0, 'look'], [R0(a, 'voluntario'), 'sad']], pose: (k) => k.pose({ armL: [8, 6], armR: [8, 6], head: 8 }) })],
  extra: (c) => { const cy = cyber(c, [.75, 1.65, -1.4], 2.1); const t = lab(c, ['FUERA'], 1.0, [-1.5, 2.1, .4], RED); const t2 = lw(c, ['SOLO ENTRE ELLOS'], 1.5, [.75, 2.45, -1.3]); return { update: (u, tt, cam) => { cy(u, 'fuera', 'EL VOLUNTARIO SE QUEDA FUERA'); pop(t2, u, .1, tf - .3, cam); pop(t, u, tf - .1, 99, cam); } }; },
  c: [[-.2, 1.7, 4.0], [-.2, 1.6, -.6], [-.3, 1.65, 3.6], [-.3, 1.6, -.6]], range: 4 }; });
// 26. ¿Qué vieron en el escáner? Que se encendía una parte del cerebro, la corteza cingulada anterior,
Q(26, (d, a) => { const te = R0(a, 'encendia'), tc = R0(a, 'corteza'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const on = cerebro(c, [0, 1.55, -1], 2.0); const g = glowSprite('#FF5A6A', 1.0, 0); g.position.set(.1, 1.75, -.9); c.add(g); const L = SEQ(c, a, [[['¿QUÉ VIERON?'], 0, 'w', [0, 2.55, -.9], 1.4], [['SE ENCENDÍA UNA ZONA'], te, 'y', [0, 2.55, -.9], 1.9], [['CORTEZA CINGULADA ANTERIOR'], tc, 'p', [0, 2.55, -.9], 2.5, 1]]);
    return { update: (u, tt, cam) => { on(u > te); g.material.opacity = u > te ? .5 + .3 * Math.sin(u * 6) : 0; L(u, cam); } }; },
  c: [[0, 1.8, 3.6], [0, 1.8, -1], [0, 1.75, 3.1], [0, 1.75, -1]], range: 3 }; });
// 27. que también se activa con el dolor físico.
Q(27, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [EXTRA(3, { x: 1.2, z: -.6, eyes: [[0, 'shut']], move: (u) => [1.2, Math.abs(Math.sin(u * 7)) * .12, -.6], pose: (k, u) => k.pose({ legL: [-50, 80], armL: [60, 60], armR: [120, 40] }) })],
  extra: (c) => { const on = cerebro(c, [-1.0, 1.55, -1], 1.5); const g = glowSprite('#FF5A6A', .8, .6); g.position.set(-.95, 1.7, -.9); c.add(g); const t = lab(c, ['= DOLOR FÍSICO'], 1.5, [0, 2.6, -.9], RED); const ay = hab(c, ['¡AY!'], .6, [1.6, 2.1, -.5], 70); return { update: (u, tt, cam) => { on(true); g.material.opacity = .5 + .3 * Math.sin(u * 6); pop(t, u, R0(a, 'dolor') - .2, 99, cam); pop(ay, u, .3, 99, cam); } }; },
  c: [[0, 1.8, 3.8], [0, 1.6, -.9], [0, 1.75, 3.4], [0, 1.6, -.9]], range: 3 }));
// 28. Cuanto más excluido se sentía alguien, más se activaba.
Q(28, (d, a) => { const tm = R0(a, 'mas', 1); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const b1 = barras(c, [['POCO EXCLUIDO', .3, '#8AC8F2'], ['MUY EXCLUIDO', .95, '#E8445A']], 2.6, [0, 1.6, -1], { title: 'ACTIVIDAD EN ESA ZONA' }); const t = lab(c, ['MÁS EXCLUIDO = MÁS ACTIVIDAD'], 2.4, [0, 2.6, -.9]); return { update: (u, tt, cam) => { b1.scale.setScalar(.6 + .4 * smooth(0, .5, u)); pop(t, u, tm, 99, cam); } }; },
  c: [[0, 1.8, 3.4], [0, 1.8, -1], [0, 1.75, 3.0], [0, 1.75, -1]], range: 3 }; });
// 29. Para tu cerebro, quedarte fuera no es solo triste. Duele. Literalmente.
Q(29, (d, a) => { const td = R0(a, 'duele'); return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: 0, z: -.4, eyes: [[0, 'sad'], [td, 'wide']], pose: (k) => k.pose({ armL: [8, 6], armR: [8, 6] }) })],
  extra: (c) => { const on = cerebro(c, [0, 2.55, -.6], .7); const L = SEQ(c, a, [[['QUEDARTE FUERA'], 'quedarte', 'w', [-.95, 1.95, -.3], 1.3, 1], [['NO ES SOLO TRISTE'], 'triste', 'y', [.95, 1.95, -.3], 1.4, 1], [['DUELE'], td, 'r', [-.85, 1.25, -.3], .9, 1], [['LITERALMENTE'], 'literalmente', 'p', [.9, 1.25, -.3], 1.3, 1]]); return { update: (u, tt, cam) => { on(u > td); L(u, cam); } }; },
  c: [[0, 1.8, 3.8], [0, 1.7, -.4], [0, 1.75, 3.4], [0, 1.7, -.4]], range: 3 }; });
// 30. Así que no. No estás exagerando.
Q(30, (d, a) => ({ ...NOCHEC, fov: 30, atores: [DORM(YO, { x: -.7, z: -1.0, y: 1.08, eyes: [[0, 'sad'], [1.5, 'shut']] })],
  extra: (c) => { const t = lab(c, ['NO ESTÁS EXAGERANDO'], 1.9, [-.5, 1.95, -.8], OSC); return { update: (u, tt, cam) => pop(t, u, R0(a, 'exagerando') - .4, 99, cam) }; },
  c: [[-.6, 2.4, 3.2], [-.8, 1.0, -1.0], [-.6, 2.3, 2.8], [-.8, 1.0, -1.0]], range: 3, look: NLOOK }));
// 31. Miércoles. Plan número uno: el mensaje.
PLAN(31, 1, 'EL MENSAJE', 'MIÉRCOLES', 'mensaje');
// 32. Ella quiere escribirle a Marcos, pero no sabe qué decir.
Q(32, (d, a) => ({ ...RECREO, atores: [RELA({ eyes: [[0, 'down'], [R0(a, 'sabe'), 'flat']], pose: (k) => k.pose({ armL: [60, 70], armR: [60, 70], head: -10 }) }), RYO({ eyes: [[0, 'look']] })],
  extra: (c, s, A) => { REC(c); const ph = movil(['MARCOS', ''], { hora: '11:15' }); ph.scale.setScalar(.3); c.add(ph); const g = hab(c, ['¿QUÉ LE DIGO?'], 1.1, [.6, 1.95, -.3], 60); return { update: (u, tt, cam) => { enMano(ph, A[0], 0, .05, .1); pop(g, u, R0(a, 'sabe') - .3, 99, cam); } }; },
  c: CR, range: 4 }));
// 33. Te enseña el borrador. "Hola. ¿Qué tal? Jaja."
Q(33, (d, a) => { const th = R0(a, 'hola'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const ch = chat(c, [0, 1.5, -.5], 1.15, [['r', 'Hola. ¿Qué tal? Jaja.', th]], { ...MSG, hora: '11:16', typing: false }); const t = lw(c, ['EL BORRADOR'], 1.2, [1.3, 2.2, -.4]); return { update: (u, tt, cam) => { ch.userData.upd(u); pop(t, u, 0, 99, cam); } }; },
  c: CHATC, range: 3 }; });
// 34. Tú lo lees. "Esto es horrible." "¡Por eso te lo pido a ti!"
Q(34, (d, a) => { const te = R0(a, 'esto'), tp = R0(a, 'eso'); return { ...RECREO, atores: [RYO({ eyes: [[0, 'look'], [te, 'flat']], talk: [[te, tp]] }), RELA({ eyes: [[0, 'look'], [tp, 'angry']], talk: [[tp, d]], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > tp ? 120 : 12, 30] }) })],
  extra: (c) => { REC(c); const g1 = hab(c, ['ESTO ES HORRIBLE.'], 1.2, [-.6, 1.95, -.3], 60); const g2 = hab(c, ['¡POR ESO TE LO', 'PIDO A TI!'], 1.3, [.6, 2.0, -.3], 56); return { update: (u, tt, cam) => { pop(g1, u, te, tp - .1, cam); pop(g2, u, tp, 99, cam); } }; },
  c: CR, range: 4 }; });
// 35. Así que coges su móvil. Y escribes.
Q(35, (d, a) => { const te = R0(a, 'escribes'); return { ...RECREO, atores: [RYO({ eyes: [[0, 'look'], [te, 'down']], pose: (k, u) => k.pose({ armL: [8, 6], armR: [60 + (u > te ? Math.sin(u * 30) * 6 : 0), 70], head: u > te ? -10 : 0 }) })],
  extra: (c, s, A) => { REC(c); const ph = movil(['', ''], { hora: '11:17' }); ph.scale.setScalar(.3); c.add(ph); const L = SEQ(c, a, [[['COGES SU MÓVIL'], 0, 'w', [-.45, 1.95, -.4], 1.4], [['Y ESCRIBES'], te, 'y', [-.45, 1.95, -.4], 1.1, 1]]); return { update: (u, tt, cam) => { enMano(ph, A[0], .05, .05, .1); L(u, cam); } }; },
  c: CRY, range: 2.5 }; });
// 36. Escribes lo que tú le dirías a ella, si te atrevieras.
Q(36, (d, a) => ({ ...RECREO, atores: [RYO({ eyes: [[0, 'down']], pose: (k, u) => k.pose({ armL: [8, 6], armR: [60 + Math.sin(u * 30) * 6, 70], head: -10 }) }), RELA({ eyes: [[0, 'lookl']], pose: (k) => k.pose({ head: 10 }) })],
  extra: (c, s, A) => { REC(c); const ph = movil(['', ''], { hora: '11:17' }); ph.scale.setScalar(.3); c.add(ph); const L = SEQ(c, a, [[['LO QUE TÚ LE DIRÍAS A ELLA'], .1, 'p', [0, 2.15, -.4], 2.3], [['SI TE ATREVIERAS'], 'atrevieras', 'w', [0, 2.15, -.4], 1.5, 1]]); const h = corazon(c, .2); return { update: (u, tt, cam) => { enMano(ph, A[0], .05, .05, .1); h.position.set(-.3, 1.55 + (u * .3) % .5, -.2); pointer(h, cam); L(u, cam); } }; },
  c: CR, range: 4 }));
// 37. Que tiene una risa que se oye desde el otro lado del pasillo.
Q(37, (d, a) => ({ ...AULA(), atores: [ELA({ x: -1.6, z: .2, eyes: [[0, 'happy']], pose: risa }), EXTRA(0, { x: 1.4, z: -.6, eyes: [[0, 'look'], [1, 'happy']], pose: (k) => k.pose({ head: -12 }) }), EXTRA(5, { x: 2.3, z: -.2, eyes: [[0, 'look'], [1.3, 'happy']], pose: (k) => k.pose({ head: -12 }) })],
  extra: (c) => { const n = notas(c, 6); const t = nota(c, ['"Tiene una risa que se oye', 'desde el otro lado', 'del pasillo"'], 1.6, [.4, 2.3, -.2], 44); const v = new THREE.Vector3(); return { update: (u, tt, cam) => { v.set(-1.6, 1.7, .2); n(u, v, cam); t.visible = u > .3; } }; },
  c: [[0, 1.8, 4.4], [0, 1.5, -.2], [0, 1.75, 3.9], [0, 1.5, -.2]], range: 4, look: MEMO }));
// 38. Que siempre es la primera en ayudar cuando a alguien se le caen las cosas.
Q(38, (d, a) => { const tc = R0(a, 'caen'); return { ...RECREO, atores: [EXTRA(3, { x: .4, z: -.3, eyes: [[0, 'look'], [tc, 'wide']], pose: (k) => k.pose({ armL: [30, 20], armR: [30, 20] }) }), ELA({ x: -.6, z: -.2, eyes: [[0, 'look']], move: (u) => [lerp(-1.6, -.4, smooth(tc, tc + .8, u)), 0, -.2], pose: (k, u) => (u > tc && u < tc + .8 ? k.walk(u * 2) : u > tc + .8 ? k.pose({ lean: -18, armL: [60, 10], armR: [60, 10] }) : k.pose()) })],
  extra: (c) => { PATIO(c); const L = [0, 1, 2].map((i) => { const l = libro('#' + ['C9361F', '2F5A9A', 'F2C14E'][i], ['MATES', 'INGLÉS', 'HISTORIA'][i]); l.scale.setScalar(.45); c.add(l); return l; }); const t = nota(c, ['"Siempre es la primera', 'en ayudar"'], 1.4, [0, 2.3, -.4], 48);
    return { update: (u, tt, cam) => { L.forEach((l, i) => { const k = smooth(tc, tc + .4, u); l.position.set(.3 + i * .15, lerp(1.0, .05 + i * .05, k), .1 - i * .1); l.rotation.z = k * (i - 1) * .6; l.rotation.x = -k * 1.4; }); t.visible = u > .2; } }; },
  c: [[0, 1.6, 3.6], [0, 1.0, -.2], [0, 1.55, 3.0], [0, 1.0, -.2]], range: 4, look: MEMO }; });
// 39. Que cuando habla de lo que le gusta, se le olvida todo lo demás.
Q(39, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [ELA({ x: -.6, z: -.4, eyes: [[0, 'heart']], talk: [[0, d]], pose: (k, u) => k.pose({ armL: [100 + Math.sin(u * 6) * 25, 40], armR: [100 + Math.cos(u * 6) * 25, 40], bob: Math.abs(Math.sin(u * 6)) * .03 }) })],
  extra: (c) => { const b = brillos(c, 14, '#FFE27A'); const t = lw(c, ['"SE LE OLVIDA', 'TODO LO DEMÁS"'], 1.5, [.9, 1.8, -.4], { h: 260 }); return { update: (u, tt, cam) => { b(u, [-.6, 2.0, -.3, .7]); pop(t, u, .2, 99, cam); } }; },
  c: [[0, 1.6, 3.4], [0, 1.5, -.4], [0, 1.6, 2.9], [0, 1.5, -.4]], range: 3, look: MEMO }));
// 40. Ella lo lee en silencio. "Es… muy bonito."
Q(40, (d, a) => { const tb = R0(a, 'bonito') - .9; return { ...RECREO, atores: [RELA({ eyes: [[0, 'down'], [tb, 'happy']], talk: [[tb, d]], pose: (k) => k.pose({ armL: [60, 70], armR: [60, 70], head: -8 }) }), RYO({ eyes: [[0, 'look']] })],
  extra: (c, s, A) => { REC(c); const ph = movil(['', ''], { hora: '11:19' }); ph.scale.setScalar(.3); c.add(ph); const r = RUB(A[0]); const t = lw(c, ['EN SILENCIO'], 1.2, [.45, 1.95, -.4]); const g = hab(c, ['ES… MUY BONITO.'], 1.2, [.6, 1.95, -.3], 60); return { update: (u, tt, cam) => { enMano(ph, A[0], 0, .05, .1); r(smooth(tb, tb + 1, u) * .6); pop(t, u, .1, tb - .1, cam); pop(g, u, tb, 99, cam); } }; },
  c: CR, range: 4 }; });
// 41. Te mira raro. "¿Cómo sabes tú todo eso de mí?"
Q(41, (d, a) => { const tc = R0(a, 'como'); return { ...RECREO, atores: [RELA({ eyes: [[0, 'smug']], talk: [[tc, d]], pose: (k) => k.pose({ head: 8 }) }), RYO({ eyes: [[0, 'wide']] })],
  extra: (c) => { REC(c); const t = lw(c, ['TE MIRA RARO'], 1.2, [.45, 1.95, -.4]); const g = hab(c, ['¿CÓMO SABES TÚ', 'TODO ESO DE MÍ?'], 1.3, [.6, 2.0, -.3], 56); return { update: (u, tt, cam) => { pop(t, u, .05, tc - .1, cam); pop(g, u, tc, 99, cam); } }; },
  c: CR, range: 4 }; });
// 42. Te pones rojo. "Eh… es lo que dice la gente." Lo envía.
Q(42, (d, a) => { const te = R0(a, 'eh'), tv = R0(a, 'envia'); return { ...RECREO, atores: [RYO({ eyes: [[0, 'wide'], [te, 'lookl']], talk: [[te, tv - .2]], pose: (k) => k.pose({ armL: [8, 6], armR: [110, 80] }) }), RELA({ eyes: [[0, 'smug'], [tv, 'down']], pose: (k) => k.pose({ armL: [60, 70], armR: [60, 70] }) })],
  extra: (c, s, A) => { REC(c); const r = RUB(A[0]); const g = hab(c, ['EH… ES LO QUE', 'DICE LA GENTE'], 1.3, [-.6, 2.0, -.3], 56); const t = lab(c, ['ENVIADO ✓'], 1.1, [.45, 1.95, -.4], VERDE2); const gt = gotas(c, 4); return { update: (u, tt, cam) => { r(smooth(0, .8, u) * .85); pop(g, u, te, tv - .1, cam); pop(t, u, tv, 99, cam); gt(u, [-.3, 1.55, -.4, .1], 1); } }; },
  c: CR, range: 4 }; });
// 43. Jueves. Marcos contesta. "Jaja gracias. Igualmente."
Q(43, (d, a) => { const tj = R0(a, 'jaja'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const ch = chat(c, [0, 1.5, -.5], 1.15, [['r', 'Tienes una risa que se oye desde el otro lado del pasillo. Siempre eres la primera en ayudar…', 0], ['l', 'Jaja gracias. Igualmente.', tj]], { ...MSG, hora: 'JUEVES' }); const t = lw(c, ['JUEVES'], 1.0, [1.2, 2.2, -.4]); return { update: (u, tt, cam) => { ch.userData.upd(u, { typing: u > tj - 1.2 && u < tj }); pop(t, u, 0, 99, cam); } }; },
  c: CHATC, range: 3 }; });
// 44. Ella está feliz. Tú no entiendes nada. ¿"Igualmente"? ¿Igualmente qué?
Q(44, (d, a) => { const tn = R0(a, 'entiendes'), ti = R0(a, 'igualmente'); return { ...RECREO, atores: [ELA({ x: .7, z: -.2, eyes: [[0, 'happy']], move: (u) => [.7, Math.abs(Math.sin(u * 6)) * .15, -.2], pose: (k, u) => k.cheer(u) }), YO({ x: -.7, z: -.2, eyes: [[0, 'look'], [tn, 'flat']], pose: (k) => k.pose({ armL: [40, 60], armR: [40, 60] }) })],
  extra: (c) => { PATIO(c); const q = ICONO(c, '?', .5, [-.7, 2.25, -.2], '#F2C14E'); const L = SEQ(c, a, [[['ELLA ESTÁ FELIZ'], 0, 'p', [.7, 2.3, -.2], 1.4], [['TÚ NO ENTIENDES NADA'], tn - .2, 'w', [0, 2.35, -.2], 1.9], [['¿IGUALMENTE QUÉ?'], ti, 'r', [0, 2.35, -.2], 1.7, 1]]); return { update: (u, tt, cam) => { pop(q, u, tn, 99, cam); L(u, cam); } }; },
  c: [[0, 1.7, 3.8], [0, 1.4, -.2], [0, 1.65, 3.2], [0, 1.4, -.2]], range: 4 }; });
// ===================== CENAS 45–80 =====================
const CUARTO = { amb: 'cuartoElla', fov: 30 };
const CUARTON = { amb: 'cuartoElla', ambo: { night: true }, fov: 30 };
const CC = [[-1.0, 1.7, 3.6], [-1.0, 1.35, -.3], [-1.0, 1.65, 3.1], [-1.0, 1.35, -.3]];
const MESA = (c) => { mesa(c, -1.0, .5, .6, 2.2, .6, '#C8A27A'); silla(c, -1.5, -.25); silla(c, -.5, -.25); };
const MYO = (o = {}) => { const p = o.pose; return YO({ x: -1.5, z: -.1, y: SBN, ...o, pose: (k, u) => { sitP(k); if (p) p(k, u); } }); };
const MELA = (o = {}) => { const p = o.pose; return ELA({ x: -.5, z: -.1, y: SBN, ...o, pose: (k, u) => { sitP(k); if (p) p(k, u); } }); };
const CM = [[-1.0, 1.5, 2.9], [-1.0, 1.22, -.1], [-1.0, 1.48, 2.4], [-1.0, 1.22, -.1]];
const codos = (k, u) => k.pose({ armL: [125, 115], armR: [125, 115], head: Math.sin(u * 1.5) * 4 });
const FERIA = { amb: 'noria', fov: 32 };
const rueda = (c) => { const w = c.userData.wheel; return (u) => { if (w) w.rotation.z = u * .08; }; };
const CF = [[0, 1.8, 4.4], [0, 1.5, -.3], [0, 1.75, 3.9], [0, 1.5, -.3]];
const telOreja = (k) => k.pose({ armL: [8, 6], armR: [150, 150] });
const camaMovil = (c, A, i = 0) => { const ph = movil(['', ''], { hora: '22:00', bg: '#2A1830' }); ph.scale.setScalar(.3); c.add(ph); const gm = glowMovil(c, A[i]); return () => { enMano(ph, A[i], 0, .1, .15); gm(); }; };
const YOCAMA = (o = {}) => DORM(YO, { x: -.7, z: -1.0, y: 1.08, ...o, p2: (k, u) => k.pose({ armL: [10, 6], armR: [100, 60] }) });
const CN = [[-.6, 2.2, 2.8], [-.8, 1.1, -1.0], [-.6, 2.1, 2.4], [-.8, 1.1, -1.0]];
// 45. Viernes. Plan número dos: el ensayo.
PLAN(45, 2, 'EL ENSAYO', 'VIERNES', 'ensayo');
// 46. Ella quiere hablar con Marcos en persona, pero se pone nerviosa.
Q(46, (d, a) => { const tn = R0(a, 'nerviosa'); return { ...CUARTO, atores: [ELA({ x: -1.0, z: -.2, eyes: [[0, 'look'], [tn, 'wide']], move: (u) => [-1.0 + Math.sin(u * 1.6) * .8, 0, -.2], pose: (k, u) => (u > tn ? k.pose({ armL: [130, 110], armR: [130, 110], bob: Math.abs(Math.sin(u * 20)) * .02 }) : k.walk(u)) })],
  extra: (c, s, A) => { const gt = gotas(c, 5); const v = new THREE.Vector3(); const L = SEQ(c, a, [[['HABLAR CON MARCOS EN PERSONA'], .1, 'w', [-1.0, 2.35, -.2], 2.6], [['SE PONE NERVIOSA'], tn - .1, 'r', [-1.0, 2.35, -.2], 1.7, 1]]); return { update: (u, tt, cam) => { A[0].head.getWorldPosition(v); gt(u, [v.x, v.y + .2, v.z + .1, .25], u > tn ? 1 : 0); L(u, cam); } }; },
  c: CC, range: 4 }; });
// 47. Así que te pide que hagas de Marcos. Para practicar.
Q(47, (d, a) => { const tp = R0(a, 'practicar'); return { ...CUARTO, atores: [YO({ x: -1.6, z: -.2, eyes: [[0, 'look'], [1, 'wide']] }), ELA({ x: -.4, z: -.2, eyes: [[0, 'happy']], talk: [[0, d]], pose: (k) => k.pose({ armL: [12, 8], armR: [95, 0] }) })],
  extra: (c) => { const g = hab(c, ['¿HACES DE MARCOS?'], 1.3, [-.3, 2.15, -.1], 60); const t = lw(c, ['PARA PRACTICAR'], 1.3, [-1.6, 2.2, -.1]); return { update: (u, tt, cam) => { pop(g, u, .1, 99, cam); pop(t, u, tp - .2, 99, cam); } }; },
  c: CC, range: 4 }; });
// 48. Te pones de pie en su cuarto. Botas un balón imaginario. "Hola, soy Marcos. Me gusta el baloncesto."
Q(48, (d, a) => { const tb = R0(a, 'botas'), th = R0(a, 'hola'), tg = R0(a, 'gusta'); return { ...CUARTO, atores: [YO({ x: -1.4, z: -.2, eyes: [[0, 'look'], [th, 'smug']], talk: [[th, d]], pose: (k, u) => (u > tb ? k.pose({ armL: [12, 8], armR: [40 + Math.sin(u * 2.2 * Math.PI) * 15, 20], legL: [6, 0], legR: [-6, 0] }) : k.pose()) }), ELA({ x: -.3, z: -.2, y: -.03, eyes: [[0, 'look'], [th + .5, 'happy']], pose: (k) => sitP(k) })],
  extra: (c, s, A) => { const b = basket(c); b.material.transparent = true; b.material.opacity = .35; const t = lw(c, ['UN BALÓN IMAGINARIO'], 1.6, [-1.4, 2.3, -.1]); const g1 = hab(c, ['HOLA, SOY MARCOS.'], 1.3, [-1.3, 2.25, -.1], 60); const g2 = hab(c, ['ME GUSTA EL', 'BALONCESTO.'], 1.2, [-1.3, 2.25, -.1], 56);
    return { update: (u, tt, cam) => { const p = hand(A[0]); b.visible = u > tb; b.position.set(p.x, bote(u), p.z + .15); pop(t, u, tb, th - .1, cam); pop(g1, u, th, tg - .3, cam); pop(g2, u, tg - .3, 99, cam); } }; },
  c: CC, range: 4 }; });
// 49. Ella se parte de risa. Tú también.
Q(49, (d, a) => { const tt0 = R0(a, 'tambien'); return { ...CUARTO, atores: [YO({ x: -1.4, z: -.2, eyes: [[0, 'smug'], [tt0 - .3, 'happy']], pose: (k, u) => (u > tt0 - .3 ? risa(k, u) : k.pose()) }), ELA({ x: -.3, z: -.2, y: -.03, eyes: [[0, 'happy']], pose: (k, u) => { sitP(k); risa(k, u); } })],
  extra: (c) => { const j1 = lp(c, ['¡JAJAJA!'], 1.0, [-.3, 2.0, -.1]); const j2 = lab(c, ['¡JAJAJA!'], 1.0, [-1.4, 2.3, -.1]); return { update: (u, tt, cam) => { pop(j1, u, .1, 99, cam); pop(j2, u, tt0 - .2, 99, cam); } }; },
  c: CC, range: 4 }; });
// 50. Y practicáis toda la tarde. Ella te pregunta cosas. Tú respondes como respondería Marcos.
Q(50, (d, a) => { const tp = R0(a, 'pregunta'), tr = R0(a, 'respondes'); return { ...CUARTO, atores: [MYO({ eyes: [[0, 'look'], [tr, 'smug']], talk: [[tr, d]] }), MELA({ eyes: [[0, 'happy']], talk: [[tp, tr - .1]], pose: (k) => k.pose({ armL: [60, 70], armR: [60, 70] }) })],
  extra: (c) => { MESA(c); const t = lw(c, ['TODA LA TARDE'], 1.3, [-1.0, 1.9, 0]); const g1 = hab(c, ['¿QUÉ TE GUSTA HACER?'], 1.3, [-.4, 1.9, .1], 56); const g2 = hab(c, ['EL BALONCESTO.', 'COMO MARCOS.'], 1.3, [-1.5, 1.9, .1], 56); return { update: (u, tt, cam) => { pop(t, u, .1, tp - .2, cam); pop(g1, u, tp, tr - .2, cam); pop(g2, u, tr, 99, cam); } }; },
  c: CM, range: 3 }; });
// 51. Pero sin darte cuenta, las respuestas se van convirtiendo en las tuyas.
Q(51, (d, a) => { const tc = R0(a, 'convirtiendo'); return { ...CUARTO, atores: [MYO({ eyes: [[0, 'smug'], [tc, 'happy']], talk: [[0, d]], pose: talkP }), MELA({ eyes: [[0, 'look']], pose: codos })],
  extra: (c) => { MESA(c); const b = basket(c, .14); b.position.set(-1.5, 1.72, 0); const st = ICONO(c, '★', .4, [-1.5, 1.72, .05], '#F2C14E'); const L = SEQ(c, a, [[['LAS RESPUESTAS…'], .1, 'w', [-1.0, 2.2, 0], 1.5], [['…SE VUELVEN LAS TUYAS'], tc, 'p', [-1.0, 2.2, 0], 2.0, 1]]);
    return { update: (u, tt, cam) => { const k = smooth(tc - .3, tc + .5, u); b.scale.setScalar(Math.max(.01, 1 - k)); st.scale.setScalar(Math.max(.01, k)); pointer(st, cam); L(u, cam); } }; },
  c: CM, range: 3 }; });
// 52. Le cuentas que te encanta ver las estrellas. Que tu abuelo te enseñó a pescar. Que de pequeño querías ser astronauta.
Q(52, (d, a) => ({ ...CUARTO, atores: [MYO({ eyes: [[0, 'happy']], talk: [[0, d]], pose: talkP }), MELA({ eyes: [[0, 'look'], [3, 'happy']], pose: codos })],
  extra: (c) => { MESA(c); const b = brillos(c, 12, '#FFE27A'); const L = SEQ(c, a, [[['★ VER LAS ESTRELLAS'], 'estrellas', 'y', [-1.0, 2.25, 0], 1.8, 1], [['TU ABUELO TE ENSEÑÓ A PESCAR'], 'abuelo', 'w', [-1.0, 1.95, .05], 2.4, 1], [['QUERÍAS SER ASTRONAUTA'], 'astronauta', 'p', [-1.0, 1.65, .1], 2.1, 1]]); return { update: (u, tt, cam) => { b(u, [-1.5, 2.0, 0, .5], u > R0(a, 'estrellas') ? 1 : 0); L(u, cam); } }; },
  c: [[-1.0, 1.6, 3.4], [-1.0, 1.4, -.1], [-1.0, 1.58, 2.9], [-1.0, 1.4, -.1]], range: 3 }));
// 53. Y ella te escucha. Con los codos en la mesa. Durante dos horas.
Q(53, (d, a) => ({ ...CUARTO, atores: [MELA({ eyes: [[0, 'happy']], pose: codos }), MYO({ eyes: [[0, 'happy']], talk: [[0, d]], pose: talkP })],
  extra: (c) => { MESA(c); const L = SEQ(c, a, [[['TE ESCUCHA'], .1, 'p', [-.55, 1.62, .1], 1.0], [['CON LOS CODOS EN LA MESA'], 'codos', 'w', [-.55, 1.62, .1], 1.8], [['2 HORAS'], 'dos', 'y', [-.55, 1.62, .1], .9, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[-.6, 1.4, 2.2], [-.6, 1.18, -.1], [-.6, 1.4, 1.9], [-.6, 1.18, -.1]], range: 2.5, look: { exposure: 1.0, bloom: .4 } }));
// 54. Cuando te vas, ella dice: "Oye, ¿sabes que es la primera vez que hablamos tanto?"
Q(54, (d, a) => { const to = R0(a, 'oye'); return { ...CUARTO, atores: [YO({ x: -2.0, z: -.2, eyes: [[0, 'look'], [to + 1.5, 'wide']], move: (u) => [lerp(-1.2, -2.2, smooth(0, to, u)), 0, -.2], pose: (k, u) => (u < to ? k.walk(u) : k.pose()) }), ELA({ x: -.4, z: -.2, eyes: [[0, 'happy']], talk: [[to, d]], pose: (k, u) => (u > to ? k.pose({ armL: [60, 70], armR: [60, 70] }) : wave(k, u)) })],
  extra: (c) => { const g = hab(c, ['OYE… ES LA PRIMERA VEZ', 'QUE HABLAMOS TANTO'], 1.8, [-.6, 2.2, -.1], 52); return { update: (u, tt, cam) => pop(g, u, to, 99, cam) }; },
  c: [[-1.2, 1.7, 3.6], [-1.2, 1.35, -.3], [-1.2, 1.65, 3.1], [-1.2, 1.35, -.3]], range: 4, look: { exposure: .98 } }; });
// 55. Sábado. Plan número tres: la cita.
PLAN(55, 3, 'LA CITA', 'SÁBADO', 'cita');
// 56. Marcos ha aceptado ir con ella a la feria. Y tú les has ayudado con todo.
Q(56, (d, a) => { const tt0 = R0(a, 'tu'); return { ...FERIA, atores: [MARCOS({ x: .6, z: -.2, eyes: [[0, 'smug']] }), ELA({ x: -.4, z: -.2, eyes: [[0, 'happy']], pose: (k) => k.pose({ armL: [60, 70], armR: [60, 70] }) })],
  extra: (c) => { const rr = rueda(c); const L = SEQ(c, a, [[['LA FERIA'], .1, 'y', [0, 2.4, -.2], 1.1], [['Y TÚ LES HAS AYUDADO CON TODO'], tt0, 'w', [0, 2.4, -.2], 2.6, 1]]); return { update: (u, tt, cam) => { rr(u); L(u, cam); } }; },
  c: CF, range: 4, look: { exposure: 1.0, bloom: .45 } }; });
// 57. Has elegido la hora. Has mirado el tiempo. Le has dicho a ella qué ponerse.
Q(57, (d, a) => ({ ...DIA, fov: 30, atores: [YO({ x: -1.2, z: -.3, eyes: [[0, 'look']], pose: (k) => k.pose({ armL: [12, 8], armR: [95, 0] }) })],
  extra: (c) => { const L = SEQ(c, a, [[['✓ LA HORA: 19:00'], 'hora', 'w', [.4, 2.3, -.4], 1.8, 1], [['✓ EL TIEMPO: SOL'], 'tiempo', 'w', [.4, 1.85, -.4], 1.8, 1], [['✓ QUÉ PONERSE'], 'ponerse', 'p', [.4, 1.4, -.4], 1.6, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[-.3, 1.7, 3.6], [-.3, 1.6, -.4], [-.3, 1.65, 3.1], [-.3, 1.6, -.4]], range: 3 }));
// 58. Y te quedas en casa. Mirando el móvil. Esperando.
Q(58, (d, a) => ({ ...DIA, ambo: { night: true }, fov: 30, atores: [YO({ x: -.8, z: -.3, eyes: [[0, 'down']], pose: (k) => k.pose({ armL: [8, 6], armR: [70, 60], head: -8 }) })],
  extra: (c, s, A) => { const ph = movil(['', ''], { hora: '19:30', bg: '#2A1830' }); ph.scale.setScalar(.3); c.add(ph); const gm = glowMovil(c, A[0]); const L = SEQ(c, a, [[['TE QUEDAS EN CASA'], .1, 'w', [-.8, 2.25, -.2], 1.6], [['MIRANDO EL MÓVIL'], 'movil', 'y', [-.8, 2.25, -.2], 1.5], [['ESPERANDO…'], 'esperando', 'p', [-.8, 2.25, -.2], 1.3, 1]]); return { update: (u, tt, cam) => { enMano(ph, A[0], 0, .05, .1); gm(); L(u, cam); } }; },
  c: [[-.8, 1.6, 3.0], [-.8, 1.4, -.3], [-.8, 1.55, 2.5], [-.8, 1.4, -.3]], range: 3, look: NLOOK }));
// 59. Ocho de la tarde. Nada. Nueve. Nada.
Q(59, (d, a) => { const t9 = R0(a, 'nueve'); return { ...DIA, ambo: { night: true }, fov: 30, atores: [YO({ x: -.8, z: -.3, eyes: [[0, 'down'], [t9, 'flat']], pose: (k) => k.pose({ armL: [8, 6], armR: [70, 60], head: -8 }) })],
  extra: (c, s, A) => { const ph = movil(['', ''], { hora: '20:00', bg: '#2A1830' }); ph.scale.setScalar(.3); c.add(ph); const gm = glowMovil(c, A[0]); const k1 = lab(c, ['20:00'], 1.0, [.5, 2.2, -.4], { bg: '#1E2230', fg: '#FF7A8A', size: 96, w: 420 }); const k2 = lab(c, ['21:00'], 1.0, [.5, 2.2, -.4], { bg: '#1E2230', fg: '#FF7A8A', size: 96, w: 420 }); const n = lw(c, ['NADA'], .8, [.5, 1.65, -.4]);
    return { update: (u, tt, cam) => { enMano(ph, A[0], 0, .05, .1); gm(); pop(k1, u, 0, t9 - .1, cam); pop(k2, u, t9, 99, cam); n.visible = (u > R0(a, 'nada') - .1 && u < t9 - .1) || u > R0(a, 'nada', t9) - .1; pointer(n, cam); } }; },
  c: [[-.2, 1.7, 3.4], [-.2, 1.6, -.4], [-.2, 1.65, 2.9], [-.2, 1.6, -.4]], range: 3, look: NLOOK }; });
// 60. Y aquí viene una pregunta: ¿por qué te gusta tanto alguien que ni siquiera te ve de esa manera?
Q(60, (d, a) => { const tp = R0(a, 'por'); return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: 0, z: -.4, eyes: [[0, 'sad']], pose: (k) => k.pose({ armL: [8, 6], armR: [70, 60], head: -8 }) })],
  extra: (c, s, A) => { const q = ICONO(c, '?', .8, [0, 2.4, -.8], '#F2C14E', 180); const L = SEQ(c, a, [[['¿POR QUÉ TE GUSTA', 'TANTO…'], tp, 'y', [-1.05, 1.95, -.2], 1.5, 1], [['…ALGUIEN QUE NO', 'TE VE ASÍ?'], 'siquiera', 'p', [1.05, 1.35, -.2], 1.7, 1]]); return { update: (u, tt, cam) => { pop(q, u, 0, 99, cam); q.rotation.z = Math.sin(u * 2) * .1; L(u, cam); } }; },
  c: [[0, 1.8, 3.8], [0, 1.7, -.4], [0, 1.75, 3.3], [0, 1.7, -.4]], range: 3 }; });
// 61. En 1993, el psicólogo Roy Baumeister y su equipo | pidieron a decenas de personas que escribieran dos historias reales:
Qs(61, ['pidieron'], [(d, a) => ({ amb: 'lab', fov: 30, atores: [PROF({ x: -.5, z: -.6, talk: [[1.2, d]], eyes: [[0, 'smug']], pose: talkP }), CIENT(2, { x: .7, z: -.9, eyes: [[0, 'look']], pose: hold })],
  extra: (c) => { const t = lab(c, ['ROY BAUMEISTER'], 1.6, [-.5, 2.2, -.5], BLUE); return { update: (u, tt, cam) => pop(t, u, R0(a, 'roy') - .2, 99, cam) }; }, c: [[0, 1.7, 3.8], [0, 1.4, -.7], [0, 1.65, 3.3], [0, 1.4, -.7]], range: 4 }),
(d, a) => ({ ...AULA(), atores: [...[-1.8, -.6, .6, 1.8].map((x, i) => EXTRA(i * 2 + 1, { x, z: .4, eyes: [[0, 'down']], pose: (k, u) => k.pose({ armL: [60, 70], armR: [60 + Math.sin(u * 20 + i) * 5, 70], head: -10 }) }))],
  extra: (c) => { pupitres(c, [-1.8, -.6, .6, 1.8], .9); const t = lab(c, ['DOS HISTORIAS REALES'], 2.0, [0, 2.35, .4]); return { update: (u, tt, cam) => pop(t, u, R0(a, 'historias') - .3, 99, cam) }; }, c: [[0, 1.9, 4.6], [0, 1.3, .4], [0, 1.85, 4.0], [0, 1.3, .4]], range: 4 })]);
const H1 = ['Me gustaba…', '…y no me', 'correspondía.'], H2 = ['Yo le gustaba…', '…y yo no', 'le correspondía.'];
// 62. una en la que estuvieron enamoradas de alguien que no les correspondía,
Q(62, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const h = hist(c, 'HISTORIA 1', H1, 1.2, [-.8, 1.6, -1], '#E8667F'); const t = lw(c, ['NO TE CORRESPONDEN'], 1.6, [-.8, 2.6, -.9]); return { update: (u, tt, cam) => { h.rotation.z = -.05; h.scale.setScalar(.7 + .3 * smooth(0, .4, u)); pop(t, u, .3, 99, cam); } }; },
  c: [[0, 1.7, 3.4], [0, 1.7, -1], [0, 1.7, 3.1], [0, 1.7, -1]], range: 3 }));
// 63. y otra en la que alguien estuvo enamorado de ellas sin ser correspondido.
Q(63, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const h = hist(c, 'HISTORIA 1', H1, 1.2, [-.8, 1.6, -1], '#E8667F'); h.rotation.z = -.05; const h2 = hist(c, 'HISTORIA 2', H2, 1.2, [.8, 1.6, -1], '#2F5A9A'); const t = lw(c, ['TÚ NO CORRESPONDES'], 1.6, [.8, 2.6, -.9]); return { update: (u, tt, cam) => { h2.rotation.z = .05; h2.scale.setScalar(Math.max(.01, smooth(.2, .6, u))); pop(t, u, R0(a, 'sin') - .3, 99, cam); } }; },
  c: [[0, 1.7, 3.4], [0, 1.7, -1], [0, 1.7, 3.1], [0, 1.7, -1]], range: 3 }));
// 64. Y casi todos tenían historias de los dos lados. Casi todo el mundo ha estado alguna vez donde estás tú ahora.
Q(64, (d, a) => { const td = R0(a, 'donde'); return { amb: 'gris', fov: 32, k: 1, atores: [...[-2.4, -1.6, -.8, .8, 1.6, 2.4].map((x, i) => EXTRA(i, { x, z: -.8 - (i % 2) * .4, eyes: [[0, 'look'], [td, 'happy']] })), YO({ x: 0, z: -.3, eyes: [[0, 'look'], [td, 'wide']] })],
  extra: (c) => { const L = SEQ(c, a, [[['CASI TODOS: LOS DOS LADOS'], .1, 'y', [0, 2.45, -.4], 2.4], [['DONDE ESTÁS TÚ AHORA'], td, 'p', [0, 2.45, -.4], 2.1, 1]]); const ar = ICONO(c, '↓', .4, [0, 2.0, -.3], '#E8667F'); return { update: (u, tt, cam) => { L(u, cam); pop(ar, u, td, 99, cam); } }; },
  c: [[0, 1.8, 5.0], [0, 1.4, -.5], [0, 1.7, 4.0], [0, 1.4, -.4]], range: 4 }; });
// 65. Pero hubo algo que les sorprendió. | Los que no eran correspondidos solían recordar la historia con algo bonito: la ilusión, los nervios, lo vivo que se sentían.
Qs(65, ['los'], [(d) => ({ amb: 'gris', fov: 30, k: 1, atores: [], extra: (c) => { const t = lab(c, ['ALGO LES SORPRENDIÓ'], 2.3, [0, 1.7, -1], { size: 80 }); const q = ICONO(c, '!', .6, [0, 2.4, -1], '#E8667F'); return { update: (u, tt, cam) => { pop(t, u, 0, 99, cam); pop(q, u, .3, 99, cam); } }; }, c: [[0, 1.8, 3.4], [0, 1.8, -1], [0, 1.8, 2.9], [0, 1.8, -1]], range: 3 }),
(d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [EXTRA(0, { x: 1.0, z: -.4, eyes: [[0, 'look'], [R0(a, 'bonito'), 'heart']] })],
  extra: (c) => { const h = hist(c, 'HISTORIA 1', H1, 1.0, [-1.0, 1.5, -1], '#E8667F'); const m = mariposas(c, 8); const L = SEQ(c, a, [[['ALGO BONITO'], 'bonito', 'p', [1.0, 2.35, -.3], 1.3], [['LA ILUSIÓN'], 'ilusion', 'y', [1.0, 2.35, -.3], 1.2], [['LOS NERVIOS'], 'nervios', 'w', [1.0, 2.35, -.3], 1.3], [['LO VIVO QUE SE SENTÍAN'], 'vivo', 'p', [1.0, 2.35, -.3], 2.0, 1]]);
    return { update: (u, tt, cam) => { h.rotation.z = -.05; m(u, [-1.0, 1.6, -.7], cam, u > R0(a, 'bonito') ? 1 : 0); L(u, cam); } }; },
  c: [[0, 1.7, 3.6], [0, 1.6, -.6], [0, 1.65, 3.1], [0, 1.6, -.6]], range: 3 })]);
// 66. Los que rechazaban, en cambio, la recordaban sobre todo con culpa e incomodidad.
Q(66, (d, a) => { const tc = R0(a, 'culpa'); return { amb: 'gris', fov: 30, k: 1, atores: [EXTRA(5, { x: -1.0, z: -.4, eyes: [[0, 'look'], [tc, 'sad']], pose: (k) => k.pose({ armL: [40, 60], armR: [40, 60], head: 8 }) })],
  extra: (c, s, A) => { const h = hist(c, 'HISTORIA 2', H2, 1.0, [1.0, 1.5, -1], '#2F5A9A'); const gt = gotas(c, 5); const v = new THREE.Vector3(); const L = SEQ(c, a, [[['CULPA'], tc, 'r', [-1.0, 2.35, -.3], .9, 1], [['INCOMODIDAD'], 'incomodidad', 'w', [-1.0, 2.0, -.25], 1.3, 1]]); return { update: (u, tt, cam) => { h.rotation.z = .05; A[0].head.getWorldPosition(v); gt(u, [v.x, v.y + .2, v.z + .1, .25], u > tc ? 1 : 0); L(u, cam); } }; },
  c: [[0, 1.7, 3.6], [0, 1.6, -.6], [0, 1.65, 3.1], [0, 1.6, -.6]], range: 3, look: { exposure: .95, vig: .6 } }; });
// 67. No sabían qué hacer. Nadie les había enseñado cómo decir que no sin hacer daño.
Q(67, (d, a) => { const tn = R0(a, 'nadie'); return { amb: 'gris', fov: 30, k: 1, atores: [EXTRA(5, { x: -.6, z: -.4, eyes: [[0, 'wide'], [tn, 'flat']], pose: (k, u) => k.pose({ armL: [40 + Math.sin(u * 3) * 20, 40], armR: [40 - Math.sin(u * 3) * 20, 40] }) }), EXTRA(2, { x: .6, z: -.4, eyes: [[0, 'heart']] })],
  extra: (c) => { const L = SEQ(c, a, [[['NO SABÍAN QUÉ HACER'], .1, 'w', [0, 2.35, -.3], 1.8], [['¿CÓMO DECIR QUE NO', 'SIN HACER DAÑO?'], tn, 'y', [0, 2.2, -.3], 2.0, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[0, 1.7, 3.6], [0, 1.5, -.4], [0, 1.65, 3.1], [0, 1.5, -.4]], range: 3 }; });
// 68. O sea, que querer a alguien que no te quiere duele. Pero no es el peor lugar en el que se puede estar.
Q(68, (d, a) => { const tp = R0(a, 'pero'); return { ...DIA, ambo: { night: true }, fov: 30, atores: [YO({ x: -.6, z: -.6, eyes: [[0, 'sad'], [tp + .5, 'look']] })],
  extra: (c) => { const b = brillos(c, 14, '#CFE0FF'); const r = roto(c, .4); r.g.position.set(-.6, 2.3, -.5); const L = SEQ(c, a, [[['QUERER A QUIEN NO TE QUIERE… DUELE'], .2, 'w', [-.2, 2.6, -.5], 2.9], [['PERO NO ES EL PEOR LUGAR'], tp, 'p', [-.2, 2.6, -.5], 2.2, 1]]); return { update: (u, tt, cam) => { r.set(.6 * (1 - smooth(tp, tp + 1.5, u))); b(u, [-.6, 2.0, -.6, 1.2], smooth(tp, tp + 1, u)); L(u, cam); } }; },
  c: [[-.4, 1.8, 3.6], [-.5, 1.6, -.6], [-.4, 1.75, 3.1], [-.5, 1.6, -.6]], range: 3, look: NLOOK }; });
// 69. Diez de la noche. Te llega un mensaje. Es ella. "¿Estás despierto?"
Q(69, (d, a) => { const tm = R0(a, 'mensaje'), te = R0(a, 'estas'); return { ...NOCHEC, fov: 30, atores: [YOCAMA({ eyes: [[0, 'sad'], [tm, 'wide']] })],
  extra: (c, s, A) => { const ph = camaMovil(c, A); const k1 = lab(c, ['22:00'], 1.0, [-1.4, 2.0, -.9], { bg: '#1E2230', fg: '#FF7A8A', size: 96, w: 420 }); const ch = chat(c, [.7, 1.55, -.8], .75, [['l', '¿Estás despierto?', te]], { name: 'ELLA ♥', hora: '22:00' }); const t = lab(c, ['ES ELLA'], .9, [.7, 2.45, -.7], PINK);
    return { update: (u, tt, cam) => { ph(); pop(k1, u, 0, 99, cam); ch.visible = u > tm - .2; ch.userData.upd(u); pop(t, u, R0(a, 'ella') - .1, 99, cam); } }; },
  c: CN, range: 3, look: NLOOK }; });
// 70. Contestas en menos de un segundo. "Sí." "Ha sido horrible."
Q(70, (d, a) => { const ts = R0(a, 'si'), th = R0(a, 'ha'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const ch = chat(c, [0, 1.5, -.5], 1.15, [['l', '¿Estás despierto?', 0], ['r', 'Sí.', ts], ['l', 'Ha sido horrible.', th]], { name: 'ELLA ♥', hora: '22:00' }); const t = lab(c, ['0,3 SEGUNDOS'], 1.2, [-1.3, 2.1, -.3], RED); return { update: (u, tt, cam) => { ch.userData.upd(u, { typing: u > ts + .3 && u < th }); pop(t, u, .2, th - .3, cam); } }; },
  c: CHATC, range: 3 }; });
// 71. Le llamas. Ella te lo cuenta todo. | Marcos llegó tarde.
Qs(71, ['marcos'], [(d, a) => ({ ...NOCHEC, fov: 30, atores: [YO({ x: -.8, z: -.3, eyes: [[0, 'look']], pose: telOreja })],
  extra: (c, s, A) => { const ph = movil(['', ''], { hora: '22:01' }); ph.scale.setScalar(.25); c.add(ph); const L = SEQ(c, a, [[['LE LLAMAS'], 0, 'y', [-.8, 2.25, -.2], 1.1], [['TE LO CUENTA TODO'], 'cuenta', 'w', [-.8, 2.25, -.2], 1.7, 1]]); return { update: (u, tt, cam) => { enMano(ph, A[0], .05, -.05, .05); L(u, cam); } }; }, c: [[-.8, 1.6, 3.0], [-.8, 1.4, -.3], [-.8, 1.55, 2.5], [-.8, 1.4, -.3]], range: 3, look: NLOOK }),
(d, a) => ({ ...FERIA, atores: [ELA({ x: -.5, z: -.2, eyes: [[0, 'flat']], pose: (k) => k.pose({ armL: [60, 70], armR: [60, 70] }) }), MARCOS({ x: .7, z: -.2, eyes: [[0, 'smug']], move: (u) => [lerp(3.5, .7, smooth(0, 1.4, u)), 0, -.2], pose: (k, u) => (u < 1.4 ? k.walk(u) : k.pose()) })],
  extra: (c) => { const rr = rueda(c); const t = lab(c, ['LLEGÓ TARDE'], 1.3, [0, 2.35, -.2], RED); const k1 = lab(c, ['19:40'], .8, [-.5, 1.95, -.1], { bg: '#1E2230', fg: '#FF7A8A', size: 96, w: 420 }); return { update: (u, tt, cam) => { rr(u); pop(t, u, .1, 99, cam); pop(k1, u, .3, 99, cam); } }; }, c: CF, range: 4, look: MEMO })]);
// 72. Se pasó la noche mirando el móvil. Habló cuarenta minutos de su equipo de baloncesto.
Q(72, (d, a) => { const th = R0(a, 'hablo'); return { ...FERIA, atores: [ELA({ x: -.5, z: -.2, eyes: [[0, 'flat'], [th + 1.5, 'shut']], pose: (k) => k.pose({ armL: [60, 70], armR: [60, 70] }) }), MARCOS({ x: .6, z: -.2, eyes: [[0, 'down'], [th, 'smug']], talk: [[th, d]], pose: (k, u) => (u < th ? k.pose({ armL: [8, 6], armR: [70, 60], head: -10 }) : talkP(k, u)) })],
  extra: (c, s, A) => { const rr = rueda(c); const ph = movil(['', ''], { hora: '20:10' }); ph.scale.setScalar(.28); c.add(ph); const b = basket(c, .14); const z = zzz(c); const L = SEQ(c, a, [[['MIRANDO EL MÓVIL'], .1, 'w', [.6, 2.35, -.2], 1.5], [['40 MINUTOS DE BALONCESTO'], th + .3, 'y', [.2, 2.4, -.2], 2.3, 1]]);
    return { update: (u, tt, cam) => { rr(u); ph.visible = u < th; enMano(ph, A[1], 0, .05, .1); b.visible = u > th; b.position.set(1.2, 1.9 + Math.sin(u * 4) * .1, -.1); z(u, [-.75, 1.8, -.1], cam, u > th + 1.5); L(u, cam); } }; },
  c: CF, range: 4, look: MEMO }; });
// 73. No le preguntó ni una cosa.
Q(73, (d, a) => ({ ...FERIA, atores: [ELA({ x: -.5, z: -.2, eyes: [[0, 'flat']], pose: (k) => k.pose({ armL: [60, 70], armR: [60, 70] }) }), MARCOS({ x: .6, z: -.2, eyes: [[0, 'smug']], talk: [[0, d]], pose: talkP })],
  extra: (c) => { const t = lab(c, ['PREGUNTAS A ELLA: 0'], 1.6, [-.3, 2.02, -.1], RED); return { update: (u, tt, cam) => pop(t, u, .1, 99, cam) }; },
  c: [[-.3, 1.6, 2.6], [-.3, 1.4, -.2], [-.3, 1.55, 2.2], [-.3, 1.4, -.2]], range: 3, look: MEMO }));
// 74. Y cuando ella le habló del mensaje, el bonito, el de su risa, Marcos dijo: "¿Qué mensaje?"
Q(74, (d, a) => { const tq = R0(a, 'dijo') + .3; return { ...FERIA, atores: [ELA({ x: -.5, z: -.2, eyes: [[0, 'happy'], [tq + .3, 'wide']], talk: [[0, tq - .3]], pose: talkP }), MARCOS({ x: .6, z: -.2, eyes: [[0, 'look'], [tq, 'flat']], talk: [[tq, d]], pose: (k, u) => k.pose({ armL: [u > tq ? 40 : 12, 50], armR: [u > tq ? 40 : 12, 50] }) })],
  extra: (c) => { const rr = rueda(c); const g1 = hab(c, ['EL MENSAJE…', 'EL BONITO'], 1.2, [-.6, 2.2, -.1], 56); const g2 = hab(c, ['¿QUÉ MENSAJE?'], 1.2, [.7, 2.25, -.1], 60); return { update: (u, tt, cam) => { rr(u); pop(g1, u, R0(a, 'mensaje') - .3, tq - .1, cam); pop(g2, u, tq, 99, cam); } }; },
  c: CF, range: 4, look: MEMO }; });
// 75. No lo había leído entero.
Q(75, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const ch = chat(c, [0, 1.5, -.5], 1.15, [['r', 'Tienes una risa que se oye desde el otro lado del pasillo. Siempre eres la primera en ayudar…', 0]], { ...MSG, hora: '20:30' }); const t = lab(c, ['NO LO LEYÓ ENTERO'], 1.6, [1.5, 2.0, -.3], RED); return { update: (u, tt, cam) => { ch.userData.upd(u); pop(t, u, 0, 99, cam); } }; },
  c: CHATC, range: 3 }));
// 76. Ella se queda callada un momento. | "¿Sabes qué es lo peor? Que he estado toda la noche pensando que me lo pasaba mejor ensayando contigo."
Qs(76, ['sabes'], [(d, a) => ({ ...CUARTON, atores: [ELA({ x: -.6, z: -.3, eyes: [[0, 'down']], pose: telOreja })],
  extra: (c, s, A) => { const ph = movil(['', ''], { hora: '22:03' }); ph.scale.setScalar(.25); c.add(ph); const t = lw(c, ['SILENCIO…'], 1.1, [-.6, 2.02, -.2]); return { update: (u, tt, cam) => { enMano(ph, A[0], .05, -.05, .05); pop(t, u, .1, 99, cam); } }; }, c: [[-.6, 1.6, 2.8], [-.6, 1.4, -.3], [-.6, 1.55, 2.4], [-.6, 1.4, -.3]], range: 3, look: NLOOK }),
(d, a) => { const tm = R0(a, 'mejor'); return { ...CUARTON, atores: [ELA({ x: -.6, z: -.3, eyes: [[0, 'look'], [tm, 'happy']], talk: [[0, d]], pose: telOreja })],
  extra: (c, s, A) => { const ph = movil(['', ''], { hora: '22:03' }); ph.scale.setScalar(.25); c.add(ph); const r = RUB(A[0]); const L = SEQ(c, a, [[['¿SABES QUÉ ES LO PEOR?'], 0, 'w', [-.6, 2.05, -.2], 1.7], [['ME LO PASABA MEJOR…'], tm - .4, 'y', [-.6, 2.05, -.2], 1.7], [['…ENSAYANDO CONTIGO'], 'contigo', 'p', [-.6, 2.05, -.2], 1.7, 1]]); return { update: (u, tt, cam) => { enMano(ph, A[0], .05, -.05, .05); r(smooth(tm, tm + 1, u) * .7); L(u, cam); } }; },
  c: [[-.6, 1.6, 2.8], [-.6, 1.45, -.3], [-.6, 1.55, 2.2], [-.6, 1.45, -.3]], range: 3, look: NLOOK }; }]);
// 77. Tú no dices nada. Te tiembla la mano con el móvil.
Q(77, (d, a) => { const tt0 = R0(a, 'tiembla'); return { ...NOCHEC, fov: 30, atores: [YO({ x: -.8, z: -.3, eyes: [[0, 'wide']], pose: (k, u) => k.pose({ armL: [8, 6], armR: [150 + (u > tt0 ? Math.sin(u * 40) * 4 : 0), 150] }) })],
  extra: (c, s, A) => { const ph = movil(['', ''], { hora: '22:04' }); ph.scale.setScalar(.25); c.add(ph); const L = SEQ(c, a, [[['NO DICES NADA'], .1, 'w', [-.8, 2.08, -.2], 1.3], [['TE TIEMBLA LA MANO'], tt0, 'y', [-.8, 2.08, -.2], 1.6, 1]]); return { update: (u, tt, cam) => { enMano(ph, A[0], .05, -.05, .05); L(u, cam); } }; },
  c: [[-.8, 1.55, 2.4], [-.8, 1.45, -.3], [-.8, 1.52, 2.0], [-.8, 1.45, -.3]], range: 3, look: NLOOK }; });
// 78. "Perdona", dice ella. "Es tarde. Mañana hablamos." Y cuelga.
Q(78, (d, a) => { const tc = R0(a, 'cuelga'); return { ...CUARTON, atores: [ELA({ x: -.6, z: -.3, eyes: [[0, 'down']], talk: [[0, tc - .2]], pose: (k, u) => (u < tc ? telOreja(k) : k.pose({ armL: [8, 6], armR: [60, 60] })) })],
  extra: (c, s, A) => { const ph = movil(['', ''], { hora: '22:05' }); ph.scale.setScalar(.25); c.add(ph); const g1 = hab(c, ['PERDONA. ES TARDE.'], 1.2, [-.4, 2.0, -.2], 56); const g2 = hab(c, ['MAÑANA HABLAMOS.'], 1.2, [-.4, 2.0, -.2], 56); const t = lab(c, ['LLAMADA FINALIZADA'], 1.6, [-.6, 2.02, -.2], RED);
    return { update: (u, tt, cam) => { if (u < tc) enMano(ph, A[0], .05, -.05, .05); else enMano(ph, A[0], 0, .05, .1); pop(g1, u, 0, R0(a, 'manana') - .1, cam); pop(g2, u, R0(a, 'manana') - .1, tc - .1, cam); pop(t, u, tc, 99, cam); } }; },
  c: [[-.6, 1.6, 2.8], [-.6, 1.45, -.3], [-.6, 1.55, 2.4], [-.6, 1.45, -.3]], range: 3, look: NLOOK }; });
// 79. Domingo. No te escribe. | Lunes. Te evita en el pasillo.
Qs(79, ['lunes'], [(d, a) => ({ ...DIA, fov: 30, atores: [YO({ x: -.8, z: -.3, eyes: [[0, 'down']], pose: (k) => k.pose({ armL: [8, 6], armR: [70, 60], head: -8 }) })],
  extra: (c, s, A) => { const ph = movil(['', ''], { hora: '12:00' }); ph.scale.setScalar(.3); c.add(ph); const L = SEQ(c, a, [[['DOMINGO'], 0, 'y', [.4, 2.3, -.4], 1.0, 1], [['0 MENSAJES'], 'escribe', 'r', [.4, 1.85, -.4], 1.2, 1]]); return { update: (u, tt, cam) => { enMano(ph, A[0], 0, .05, .1); L(u, cam); } }; }, c: [[-.3, 1.7, 3.4], [-.3, 1.5, -.4], [-.3, 1.65, 2.9], [-.3, 1.5, -.4]], range: 3 }),
(d, a) => ({ ...RECREO, atores: [YO({ x: -1.4, z: -.3, eyes: [[0, 'look'], [1, 'sad']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u < 1 ? 120 : 12, 20] }) }), ELA({ x: .5, z: -.6, eyes: [[0, 'lookl'], [.6, 'down']], move: (u) => [lerp(.3, 3.4, smooth(.4, d, u)), 0, -.6], pose: (k, u) => (u > .4 ? k.walk(u * 1.3) : k.pose()) })],
  extra: (c) => { PATIO(c); const t = lab(c, ['LUNES · TE EVITA'], 1.6, [-.5, 2.35, -.3], RED); return { update: (u, tt, cam) => pop(t, u, .1, 99, cam) }; }, c: [[0, 1.7, 4.0], [0, 1.4, -.4], [0, 1.65, 3.4], [.3, 1.4, -.4]], range: 4 })]);
// 80. Y tú piensas que lo has estropeado todo. Que tendrías que haber dicho que no desde el principio.
Q(80, (d, a) => { const tq = R0(a, 'tendrias'); return { ...RECREO, atores: [RYO({ eyes: [[0, 'sad']], pose: (k) => k.pose({ head: 10 }) })],
  extra: (c) => { REC(c); const r = roto(c, .35); r.g.position.set(-.45, 1.85, -.4); const L = SEQ(c, a, [[['LO HAS ESTROPEADO TODO'], .2, 'r', [0, 2.25, -.4], 2.0], [['DEBISTE DECIR QUE NO'], tq, 'w', [0, 2.25, -.4], 1.9, 1]]); return { update: (u, tt, cam) => { r.set(.7); L(u, cam); } }; },
  c: [[-.2, 1.9, 4.2], [-.3, 1.1, -.5], [-.3, 1.6, 2.8], [-.4, 1.15, -.5]], range: 4, look: { exposure: .92, vig: .6 } }; });
// ===================== CENAS 81–112 =====================
const CG = [[0, 1.7, 3.6], [0, 1.6, -.6], [0, 1.65, 3.1], [0, 1.6, -.6]];
// 81. Pero ¿por qué, de repente, ella se fija en ti? | ¿Cómo puede gustarte alguien que llevas años viendo, y nunca te había llamado la atención?
Qs(81, ['como'], [(d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [ELA({ x: .9, z: -.4, eyes: [[0, 'lookl']], pose: (k) => k.pose({ head: 10 }) }), YO({ x: -.9, z: -.4, eyes: [[0, 'wide']] })],
  extra: (c) => { const t = lab(c, ['¿POR QUÉ, DE REPENTE,', 'SE FIJA EN TI?'], 2.3, [0, 2.45, -.3], { h: 260 }); const h = corazon(c, .3); h.position.set(.2, 1.6, -.3); return { update: (u, tt, cam) => { pop(t, u, .1, 99, cam); h.scale.setScalar(latido(u, 120)); pointer(h, cam); } }; }, c: CG, range: 3 }),
(d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [YO({ x: -.9, z: -.4, eyes: [[0, 'look']] }), ELA({ x: .9, z: -.4, eyes: [[0, 'look'], [R0(a, 'nunca'), 'wide']] })],
  extra: (c) => { const L = SEQ(c, a, [[['AÑOS VIÉNDOLO…'], 'anos', 'w', [0, 2.45, -.3], 1.6], [['…Y NUNCA TE HABÍA', 'LLAMADO LA ATENCIÓN'], 'nunca', 'y', [0, 2.5, -.3], 2.3, 1]]); return { update: (u, tt, cam) => L(u, cam) }; }, c: CG, range: 3 })]);
// 82. En 2015, los investigadores Lucy Hunt, Paul Eastwick y Eli Finkel estudiaron a 167 parejas.
Q(82, (d, a) => ({ amb: 'lab', fov: 30, atores: [CIENT(0, { x: -1.2, z: -.6, eyes: [[0, 'smug']], talk: [[R0(a, 'lucy'), R0(a, 'paul')]] }), PROF({ x: 0, z: -.8, eyes: [[0, 'look']], talk: [[R0(a, 'paul'), R0(a, 'eli')]] }), H({ outfit: 'jaleco', glow: 0, x: 1.2, z: -.6, eyes: [[0, 'happy']], talk: [[R0(a, 'eli'), R0(a, 'estudiaron')]] })],
  extra: (c) => { const L = SEQ(c, a, [[['LUCY HUNT'], 'lucy', 'b', [-1.2, 2.2, -.5], 1.1, 1], [['PAUL EASTWICK'], 'paul', 'b', [0, 2.45, -.7], 1.3, 1], [['ELI FINKEL'], 'eli', 'b', [1.2, 2.2, -.5], 1.0, 1], [['167 PAREJAS'], '167', 'y', [0, .55, .1], 1.5, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[0, 1.6, 4.4], [0, 1.4, -.7], [0, 1.6, 3.9], [0, 1.3, -.7]], range: 4 }));
// 83. Les preguntaron cuánto tiempo se conocían antes de empezar a salir.
Q(83, (d, a) => ({ amb: 'gris', fov: 32, k: 1, atores: [...[[-2.0, 0], [-1.2, 1], [.6, 2], [1.4, 3]].map(([x, i]) => (i % 2 ? EXTRA(i * 2, { x, z: -.5, eyes: [[0, 'happy']] }) : EXTRA(i * 2 + 1, { x, z: -.5, eyes: [[0, 'look']] })))],
  extra: (c) => { const t = lab(c, ['¿CUÁNTO OS CONOCÍAIS', 'ANTES DE SALIR?'], 2.3, [0, 2.45, -.4], { h: 260 }); const h1 = corazon(c, .25), h2 = corazon(c, .25); h1.position.set(-1.6, 2.0, -.4); h2.position.set(1.0, 2.0, -.4); return { update: (u, tt, cam) => { pop(t, u, .2, 99, cam); for (const h of [h1, h2]) { h.scale.setScalar(latido(u, 100) * .8); pointer(h, cam); } } }; },
  c: [[0, 1.7, 4.6], [0, 1.5, -.5], [0, 1.65, 4.0], [0, 1.5, -.5]], range: 4 }));
// 84. Y luego compararon lo guapo que le parecía cada uno a gente de fuera.
Q(84, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [...[-1.6, -.8, 0, .8, 1.6].map((x, i) => EXTRA(i + 2, { x, z: -.4, eyes: [[0, 'smug']], pose: (k) => k.pose({ armL: [12, 8], armR: [150, 20] }) }))],
  extra: (c) => { const N = ['7', '5', '8', '6', '9'].map((n, i) => { const m = lw(c, [n], .35, [-1.6 + i * .8, 2.25, -.3], { size: 110, w: 260, h: 220 }); return m; }); const t = lab(c, ['GENTE DE FUERA PUNTÚA'], 2.1, [0, 2.75, -.3]); return { update: (u, tt, cam) => { N.forEach((m, i) => pop(m, u, .3 + i * .2, 99, cam)); pop(t, u, R0(a, 'gente') - .3, 99, cam); } }; },
  c: [[0, 1.8, 4.4], [0, 1.7, -.4], [0, 1.75, 3.9], [0, 1.7, -.4]], range: 4 }));
// 85. Las parejas que empezaron a salir muy rápido solían parecerse: guapo con guapa, normal con normal.
Q(85, (d, a) => { const tg = R0(a, 'guapo'), tn = R0(a, 'normal'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const f1 = ficha(c, 1.4, [-.8, 1.55, -1], '9', '9'), f2 = ficha(c, 1.4, [.8, 1.55, -1], '5', '5'); const L = SEQ(c, a, [[['SALIERON MUY RÁPIDO'], .1, 'w', [0, 2.45, -.9], 1.9], [['SE PARECÍAN'], 'parecerse', 'y', [0, 2.45, -.9], 1.3, 1]]); return { update: (u, tt, cam) => { f1.scale.setScalar(Math.max(.01, smooth(tg - .2, tg + .2, u))); f2.scale.setScalar(Math.max(.01, smooth(tn - .2, tn + .2, u))); L(u, cam); } }; },
  c: [[0, 1.8, 3.4], [0, 1.8, -1], [0, 1.75, 3.0], [0, 1.75, -1]], range: 3 }; });
// 86. Pero las que se conocían desde hacía mucho, por ejemplo, porque eran amigos, no seguían esa regla.
Q(86, (d, a) => { const ta = R0(a, 'amigos'), tr = R0(a, 'regla'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const f1 = ficha(c, 1.4, [-.8, 1.55, -1], '9', '5', '#E8667F'), f2 = ficha(c, 1.4, [.8, 1.55, -1], '4', '8', '#E8667F'); const L = SEQ(c, a, [[['SE CONOCÍAN DESDE HACÍA MUCHO'], .1, 'w', [0, 2.45, -.9], 2.6], [['AMIGOS'], ta, 'p', [0, 2.45, -.9], 1.0], [['NO SEGUÍAN LA REGLA'], tr - .4, 'r', [0, 2.45, -.9], 1.8, 1]]); return { update: (u, tt, cam) => { f1.scale.setScalar(Math.max(.01, smooth(ta - .3, ta + .1, u))); f2.scale.setScalar(Math.max(.01, smooth(ta, ta + .4, u))); L(u, cam); } }; },
  c: [[0, 1.8, 3.4], [0, 1.8, -1], [0, 1.75, 3.0], [0, 1.75, -1]], range: 3 }; });
// 87. Con el tiempo, lo que más contaba ya no era cómo se veía la otra persona desde fuera, | sino cómo era por dentro. Lo que la hacía única.
Qs(87, ['sino'], [(d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [ELA({ x: 0, z: -.4, eyes: [[0, 'look']] })],
  extra: (c) => { const L = SEQ(c, a, [[['CON EL TIEMPO…'], .1, 'w', [0, 2.3, -.3], 1.5], [['YA NO CUENTA TANTO EL FUERA'], 'fuera', 'y', [0, 2.3, -.3], 2.4, 1]]); return { update: (u, tt, cam) => L(u, cam) }; }, c: CG, range: 3 }),
(d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [ELA({ x: 0, z: -.4, eyes: [[0, 'happy']] })],
  extra: (c, s, A) => { const g = glowSprite('#FFB0C0', .9, 0); c.add(g); const h = corazon(c, .25); const v = new THREE.Vector3(); const L = SEQ(c, a, [[['POR DENTRO'], .1, 'p', [0, 2.3, -.3], 1.2], [['LO QUE LA HACÍA ÚNICA'], 'unica', 'y', [0, 2.3, -.3], 2.0, 1]]); const b = brillos(c, 10);
    return { update: (u, tt, cam) => { A[0].torso.getWorldPosition(v); g.position.set(v.x, v.y, v.z + .2); g.material.opacity = smooth(0, .6, u) * (.6 + .2 * Math.sin(u * 4)); h.position.set(v.x, v.y, v.z + .3); h.scale.setScalar(latido(u, 100)); pointer(h, cam); b(u, [0, 1.5, -.2, .8], smooth(R0(a, 'unica') - .3, R0(a, 'unica'), u)); L(u, cam); } }; }, c: CG, range: 3 })]);
// 88. Marcos es el que todo el mundo mira.
Q(88, (d, a) => ({ ...RECREO, atores: [MARCOS({ x: 0, z: -1.2, eyes: [[0, 'smug']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [40 + Math.sin(u * 2.2 * Math.PI) * 15, 20] }) }), ...[-2.4, -1.5, 1.5, 2.4].map((x, i) => EXTRA(i, { x, z: -.3 + (i % 2) * .4, eyes: [[0, 'heart']] }))],
  extra: (c, s, A) => { PATIO(c); canasta(c, 1.0, -2.6); const b = basket(c); const t = lab(c, ['TODO EL MUNDO LO MIRA'], 2.0, [0, 2.45, -1.0]); return { update: (u, tt, cam) => { const p = hand(A[0]); b.position.set(p.x, bote(u), p.z + .15); pop(t, u, .1, 99, cam); } }; },
  c: [[0, 1.8, 4.6], [0, 1.3, -1.0], [0, 1.75, 4.0], [0, 1.3, -1.0]], range: 4 }));
// 89. Tú eres el que la escuchó dos horas hablando de estrellas.
Q(89, (d, a) => ({ ...CUARTO, atores: [MELA({ eyes: [[0, 'happy']], talk: [[0, d]], pose: talkP }), MYO({ eyes: [[0, 'heart']], pose: codos })],
  extra: (c) => { MESA(c); const st = [0, 1, 2, 3, 4].map((i) => { const m = ICONO(c, '★', .3, [-1.6 + i * .3, 2.0 + (i % 2) * .15, 0], '#F2C14E'); return m; }); const t = lp(c, ['TÚ LA ESCUCHASTE 2 HORAS'], 2.2, [-1.0, 2.35, 0]); return { update: (u, tt, cam) => { st.forEach((m, i) => { m.scale.setScalar(.8 + .2 * Math.sin(u * 3 + i)); pointer(m, cam); }); pop(t, u, .2, 99, cam); } }; },
  c: CM, range: 3, look: MEMO }));
// 90. Martes. Recreo. Estás en el banco de siempre. Y ella vuelve a sentarse a tu lado. Sin avisar.
Q(90, (d, a) => { const tv = R0(a, 'vuelve'), ts = tv + 1.4; return { ...RECREO, atores: [RYO({ eyes: [[0, 'sad'], [tv, 'look'], [ts, 'wide']], pose: (k) => k.pose({ head: 6 }) }), ELA({ x: .45, z: -.5, eyes: [[0, 'look']], move: (u) => (u < ts ? [lerp(3.6, .45, smooth(tv - .6, ts, u)), 0, -.15] : [.45, SBN, -.5]), pose: (k, u) => (u < ts ? k.walk(u * 2) : sitP(k)) }), ...FONDO()],
  extra: (c) => { REC(c); const L = SEQ(c, a, [[['MARTES · RECREO'], .1, 'y', [0, 2.15, -.4], 1.6], [['EL BANCO DE SIEMPRE'], 'banco', 'w', [0, 2.15, -.4], 1.7], [['OTRA VEZ · SIN AVISAR'], 'avisar', 'p', [0, 2.15, -.4], 2.0, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[0, 2.1, 5.2], [0, 1.0, -.5], [0, 1.55, 3.0], [0, 1.1, -.5]], range: 4 }; });
// 91. "Tengo que preguntarte una cosa", dice. "El mensaje que le escribiste a Marcos. Lo de mi risa. Lo de que soy la primera en ayudar."
Q(91, (d, a) => { const tm = R0(a, 'mensaje'), tr = R0(a, 'risa'), tp = R0(a, 'primera'); return { ...RECREO, atores: [RYO({ eyes: [[0, 'look'], [tm, 'wide']] }), RELA({ eyes: [[0, 'look']], talk: [[0, d]], pose: talkP })],
  extra: (c, s, A) => { REC(c); const gt = gotas(c, 4); const L = SEQ(c, a, [[['TENGO QUE', 'PREGUNTARTE UNA COSA'], 0, 'w', [.6, 2.1, -.3], 1.6], [['EL MENSAJE A MARCOS…'], tm - .3, 'w', [.6, 2.05, -.3], 1.7], [['LO DE MI RISA'], tr - .3, 'p', [.6, 2.05, -.3], 1.3], [['LO DE AYUDAR'], tp - .5, 'p', [.6, 2.05, -.3], 1.2, 1]]);
    return { update: (u, tt, cam) => { gt(u, [-.25, 1.55, -.4, .1], u > tm ? 1 : 0); L(u, cam); } }; },
  c: CR, range: 4 }; });
// 92. Te mira. "Eso no lo dice la gente. Eso lo has visto tú."
Q(92, (d, a) => { const tv = R0(a, 'eso', 1.5); return { ...RECREO, atores: [RELA({ eyes: [[0, 'look']], talk: [[R0(a, 'eso'), d]], pose: (k) => k.pose({ head: -6 }) })],
  extra: (c) => { REC(c); const g1 = hab(c, ['ESO NO LO', 'DICE LA GENTE.'], 1.1, [.45, 1.78, -.3], 56); const g2 = hab(c, ['ESO LO HAS', 'VISTO TÚ.'], 1.1, [.45, 1.78, -.3], 56); return { update: (u, tt, cam) => { pop(g1, u, R0(a, 'eso') - .1, tv - .1, cam); pop(g2, u, tv - .1, 99, cam); } }; },
  c: [[.45, 1.5, 1.9], [.45, 1.35, -.5], [.45, 1.48, 1.5], [.45, 1.35, -.5]], range: 2.5 }; });
// 93. Silencio. Un pájaro se lleva una miga de tu bocadillo.
Q(93, (d, a) => { const tp = R0(a, 'pajaro'); return { ...RECREO, atores: [RYO({ eyes: [[0, 'flat']], pose: (k) => k.pose({ armL: [8, 6], armR: [55, 50] }) }), RELA({ eyes: [[0, 'look']] }), { tipo: 'paloma', s: .8, x: 1.5, z: .2, move: (u) => { const k1 = smooth(tp, tp + .8, u), k2 = smooth(tp + 1.6, d, u); return [lerp(1.6, -.1, k1) - k2 * 1.5, .5 * smooth(tp + .8, tp + 1.0, u) * (1 - k2) + k2 * 2.2, lerp(.3, -.2, k1)]; } }],
  extra: (c, s, A) => { REC(c); const bb = bocadillo(); bb.scale.setScalar(.9); c.add(bb); const t = lw(c, ['SILENCIO…'], 1.1, [0, 2.15, -.4]); const t2 = lab(c, ['¡TU MIGA!'], 1.0, [0, 2.15, -.4], RED); return { update: (u, tt, cam) => { naMao(bb, A[0], -.02); pop(t, u, 0, tp + .6, cam); pop(t2, u, tp + 1.6, 99, cam); } }; },
  c: [[0, 1.7, 3.8], [0, 1.0, -.4], [0, 1.6, 3.2], [0, 1.0, -.4]], range: 4 }; });
// 94. Y entonces, por primera vez en tres años, no mientes.
Q(94, (d, a) => { const tn = R0(a, 'mientes') - .3; return { ...RECREO, atores: [RYO({ eyes: [[0, 'shut'], [tn, 'look']], pose: (k, u) => k.pose({ bob: Math.sin(u * 2) * .02 }) })],
  extra: (c) => { REC(c); const L = SEQ(c, a, [[['POR PRIMERA VEZ EN 3 AÑOS'], 'primera', 'w', [-.45, 1.95, -.4], 2.1], [['NO MIENTES'], tn, 'y', [-.45, 1.95, -.4], 1.2, 1]]); const b = brillos(c, 8); return { update: (u, tt, cam) => { L(u, cam); b(u, [-.45, 1.3, -.3, .5], smooth(tn, tn + .5, u)); } }; },
  c: CRY, range: 2.5 }; });
// 95. "Sí. Lo he visto yo. Porque llevo desde primero fijándome en ti."
Q(95, (d, a) => { const tp = R0(a, 'porque'); return { ...RECREO, atores: [RYO({ eyes: [[0, 'look']], talk: [[0, d]], pose: (k) => k.pose({ armL: [8, 6], armR: [60, 90] }) }), RELA({ eyes: [[0, 'look'], [tp + .5, 'wide']] })],
  extra: (c, s, A) => { REC(c); const r = RUB(A[0]); const g1 = hab(c, ['SÍ. LO HE VISTO YO.'], 1.3, [-.6, 2.0, -.3], 56); const g2 = hab(c, ['LLEVO DESDE PRIMERO', 'FIJÁNDOME EN TI.'], 1.5, [-.5, 2.05, -.3], 54); return { update: (u, tt, cam) => { r(.5); pop(g1, u, 0, tp - .1, cam); pop(g2, u, tp, 99, cam); } }; },
  c: CR, range: 4 }; });
// 96. Ella no dice nada. Tú esperas el golpe. Que se ría. Que se levante. Que diga "lo siento, pero te veo como un amigo".
Q(96, (d, a) => ({ ...RECREO, atores: [RYO({ eyes: [[0, 'look'], [R0(a, 'esperas'), 'shut']], pose: (k, u) => k.pose({ armL: [40, 60], armR: [40, 60], bob: Math.abs(Math.sin(u * 20)) * .01 }) }), RELA({ eyes: [[0, 'wide']] })],
  extra: (c) => { REC(c); const L = SEQ(c, a, [[['NO DICE NADA'], .1, 'w', [0, 2.15, -.4], 1.3], [['ESPERAS EL GOLPE'], 'esperas', 'y', [0, 2.15, -.4], 1.6], [['QUE SE RÍA'], 'ria', 'w', [0, 2.15, -.4], 1.1], [['QUE SE LEVANTE'], 'levante', 'w', [0, 2.15, -.4], 1.4], [['"TE VEO COMO UN AMIGO"'], 'siento', 'r', [0, 2.15, -.4], 2.2, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[0, 1.5, 2.6], [0, 1.15, -.5], [0, 1.45, 2.0], [0, 1.15, -.5]], range: 3, look: { exposure: .95, vig: .65 } }));
// 97. Pero no pasa nada de eso.
Q(97, (d, a) => ({ ...RECREO, atores: [RYO({ eyes: [[0, 'shut'], [.8, 'look']] }), RELA({ eyes: [[0, 'down']] })],
  extra: (c) => { REC(c); const t = lp(c, ['PERO NO.'], 1.0, [0, 2.15, -.4]); return { update: (u, tt, cam) => pop(t, u, .2, 99, cam) }; },
  c: CR, range: 4 }));
// 98. Ella se pone roja. Muy roja. Y dice: "¿Y por qué me has ayudado con Marcos?"
Q(98, (d, a) => { const tm = R0(a, 'muy'), ty = R0(a, 'dice') + .3; return { ...RECREO, atores: [RELA({ eyes: [[0, 'down'], [ty, 'look']], talk: [[ty, d]], pose: (k) => k.pose({ armL: [70, 80], armR: [70, 80] }) })],
  extra: (c, s, A) => { REC(c); const r = RUB(A[0]); const t = lab(c, ['MUY ROJA'], 1.1, [.45, 1.95, -.4], PINK); const g = hab(c, ['¿Y POR QUÉ ME HAS', 'AYUDADO CON MARCOS?'], 1.1, [.45, 1.78, -.3], 52); return { update: (u, tt, cam) => { r(smooth(0, tm + .3, u) * 1.0); pop(t, u, tm, ty - .1, cam); pop(g, u, ty, 99, cam); } }; },
  c: [[.45, 1.5, 1.9], [.45, 1.35, -.5], [.45, 1.48, 1.5], [.45, 1.35, -.5]], range: 2.5 }; });
// 99. "Porque me lo pediste tú."
Q(99, (d, a) => ({ ...RECREO, atores: [RYO({ eyes: [[0, 'happy']], talk: [[0, d]] }), RELA({ eyes: [[0, 'wide']] })],
  extra: (c, s, A) => { REC(c); const r = RUB(A[1]); const g = hab(c, ['PORQUE ME LO', 'PEDISTE TÚ.'], 1.2, [-.5, 2.0, -.3], 56); return { update: (u, tt, cam) => { r(.9); pop(g, u, 0, 99, cam); } }; },
  c: CR, range: 4 }));
// 100. Ella se tapa la cara con las manos. "Soy idiota." Y se ríe. Esa risa que se oye desde el otro lado del pasillo.
Q(100, (d, a) => { const ti = R0(a, 'idiota'), tr = R0(a, 'rie'); return { ...RECREO, atores: [RELA({ eyes: [[0, 'shut'], [tr, 'happy']], talk: [[ti - .4, ti + .5]], pose: (k, u) => (u < tr ? k.pose({ armL: [150, 140], armR: [150, 140] }) : risa(k, u)) }), RYO({ eyes: [[0, 'look'], [tr + .3, 'happy']] }), ...FONDO().map((e, i) => ({ ...e, eyes: [[0, 'look'], [tr + 1 + i * .2, 'happy']], talk: undefined, pose: (k) => k.pose({ head: i < 2 ? 10 : -10 }) }))],
  extra: (c, s, A) => { REC(c); const r = RUB(A[0]); const g = hab(c, ['SOY IDIOTA.'], 1.0, [.6, 1.95, -.3], 60); const t = lp(c, ['ESA RISA'], 1.0, [.45, 2.15, -.4]); const n = notas(c, 6); const v = new THREE.Vector3(); return { update: (u, tt, cam) => { r(.9); pop(g, u, ti - .3, tr - .1, cam); pop(t, u, R0(a, 'esa') - .1, 99, cam); A[0].head.getWorldPosition(v); n(u, v, cam, u > tr); } }; },
  c: [[0, 1.8, 4.6], [0, 1.1, -.5], [0, 1.6, 3.2], [.1, 1.1, -.5]], range: 4 }; });
// 101. Y aquí va el último dato. | En 2021, la psicóloga Danu Anthony Stinson y su equipo | preguntaron a casi dos mil personas, entre universitarios y adultos de internet, cómo había empezado su relación de pareja.
Qs(101, ['2021', 'preguntaron'], [(d) => ({ amb: 'gris', fov: 30, k: 1, atores: [], extra: (c) => { const t = lab(c, ['EL ÚLTIMO DATO'], 2.2, [0, 1.7, -1], { size: 84 }); const b = brillos(c, 10); return { update: (u, tt, cam) => { pop(t, u, 0, 99, cam); b(u, [0, 1.7, -.9, 1.2]); } }; }, c: [[0, 1.7, 3.4], [0, 1.7, -1], [0, 1.7, 2.9], [0, 1.7, -1]], range: 3 }),
(d, a) => ({ amb: 'lab', fov: 30, atores: [CIENT(4, { x: -.4, z: -.6, eyes: [[0, 'smug']], talk: [[.8, d]], pose: talkP }), CIENT(6, { x: .9, z: -.9, eyes: [[0, 'look']], pose: hold })],
  extra: (c) => { const t = lab(c, ['DANU ANTHONY STINSON'], 2.0, [-.4, 2.2, -.5], BLUE); return { update: (u, tt, cam) => pop(t, u, R0(a, 'danu') - .2, 99, cam) }; }, c: [[0, 1.7, 3.8], [0, 1.4, -.7], [0, 1.65, 3.3], [0, 1.4, -.7]], range: 4 }),
(d, a) => ({ amb: 'gris', fov: 34, k: 1, atores: [...Array(10)].map((_, i) => EXTRA(i, { x: -2.7 + (i % 5) * 1.35, z: -.4 - Math.floor(i / 5) * 1.1, eyes: [[0, 'look'], [R0(a, 'como'), 'happy']] })),
  extra: (c) => { const L = SEQ(c, a, [[['CASI 2.000 PERSONAS'], .1, 'y', [0, 2.55, -.2], 1.9], [['UNIVERSITARIOS Y ADULTOS'], 'universitarios', 'w', [0, 2.55, -.2], 2.2], [['¿CÓMO EMPEZÓ VUESTRA RELACIÓN?'], 'como', 'p', [0, 2.55, -.2], 2.8, 1]]); return { update: (u, tt, cam) => L(u, cam) }; }, c: [[0, 1.9, 5.4], [0, 1.4, -.8], [0, 1.85, 4.8], [0, 1.4, -.8]], range: 5 })]);
// 102. Y cerca de dos de cada tres dijeron lo mismo: empezaron siendo amigos.
Q(102, (d, a) => { const ta = R0(a, 'amigos'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const m = tartaM(c, 1.7, [0, 1.6, -1], 2 / 3, '2 DE 3', 'EMPEZARON COMO AMIGOS'); const t = lab(c, ['EMPEZARON SIENDO AMIGOS'], 2.3, [0, 2.65, -.9], PINK); return { update: (u, tt, cam) => { m.scale.setScalar(Math.max(.01, smooth(0, .5, u))); m.rotation.z = (1 - smooth(0, .8, u)) * .6; pop(t, u, ta - .5, 99, cam); } }; },
  c: [[0, 1.85, 3.6], [0, 1.85, -1], [0, 1.8, 3.2], [0, 1.8, -1]], range: 3 }; });
// 103. No fue un flechazo. No fue una cita perfecta. Fueron muchos recreos, muchas conversaciones y muchos favores.
Q(103, (d, a) => ({ ...RECREO, atores: [RYO({ eyes: [[0, 'happy']] }), RELA({ eyes: [[0, 'happy']] })],
  extra: (c) => { REC(c); const L = SEQ(c, a, [[['✗ UN FLECHAZO'], 'flechazo', 'r', [-1.2, 2.3, -.4], 1.4], [['✗ UNA CITA PERFECTA'], 'cita', 'r', [-1.2, 2.3, -.4], 1.8], [['MUCHOS RECREOS'], 'recreos', 'w', [1.2, 2.35, -.4], 1.5, 1], [['MUCHAS CONVERSACIONES'], 'conversaciones', 'w', [1.2, 2.0, -.35], 2.0, 1], [['MUCHOS FAVORES'], 'favores', 'p', [1.2, 1.65, -.3], 1.5, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[0, 1.6, 3.8], [0, 1.35, -.5], [0, 1.55, 3.3], [0, 1.35, -.5]], range: 4 }));
// 104. Lo curioso es que la mayoría de los estudios sobre el amor se centran en desconocidos que se ven por primera vez.
Q(104, (d, a) => { const td = R0(a, 'desconocidos'); return { amb: 'lab', fov: 30, atores: [EXTRA(1, { x: -.55, z: -.4, eyes: [[0, 'look'], [td, 'happy']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > td ? 75 + Math.sin(u * 12) * 6 : 12, 10] }) }), EXTRA(6, { x: .55, z: -.4, eyes: [[0, 'look'], [td, 'happy']], pose: (k, u) => k.pose({ armL: [u > td ? 75 + Math.sin(u * 12) * 6 : 12, 10], armR: [12, 8] }) })],
  extra: (c) => { const L = SEQ(c, a, [[['LA MAYORÍA DE LOS ESTUDIOS'], 'mayoria', 'w', [0, 2.3, -.3], 2.3], [['DESCONOCIDOS · 1ª VEZ'], td, 'y', [0, 2.3, -.3], 2.0, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[0, 1.7, 3.6], [0, 1.4, -.4], [0, 1.65, 3.1], [0, 1.4, -.4]], range: 3 }; });
// 105. Y se olvidan del camino más común de todos: el del amigo que estaba ahí.
Q(105, (d, a) => { const ta = R0(a, 'amigo'); return { ...RECREO, atores: [RYO({ eyes: [[0, 'look'], [ta, 'happy']] })],
  extra: (c) => { REC(c); const g = glowSprite('#FFE2A8', 1.6, 0); g.position.set(-.45, 1.2, -.3); c.add(g); const L = SEQ(c, a, [[['EL CAMINO MÁS COMÚN'], .2, 'w', [-.4, 1.9, -.4], 1.6], [['EL AMIGO QUE ESTABA AHÍ'], ta - .2, 'p', [-.4, 1.9, -.4], 1.8, 1]]); return { update: (u, tt, cam) => { g.material.opacity = smooth(ta - .3, ta + .6, u) * .7; L(u, cam); } }; },
  c: [[-.3, 1.55, 2.8], [-.4, 1.3, -.5], [-.35, 1.5, 2.3], [-.4, 1.3, -.5]], range: 3 }; });
// 106. Miércoles. Ella te espera a la salida del instituto. "Oye. El sábado hay feria otra vez."
Q(106, (d, a) => { const to = R0(a, 'oye'); return { ...RECREO, atores: [ELA({ x: .6, z: -.4, eyes: [[0, 'look'], [to, 'happy']], talk: [[to, d]], pose: (k, u) => (u < to ? k.pose({ armL: [60, 70], armR: [60, 70] }) : talkP(k, u)) }), YO({ x: -.5, z: -.4, eyes: [[0, 'look'], [to + .8, 'wide']], move: (u) => [lerp(-2.8, -.5, smooth(.4, to, u)), 0, -.4], pose: (k, u) => (u > .4 && u < to ? k.walk(u) : k.pose()) })],
  extra: (c) => { PATIO(c); const s0 = lab(c, ['SALIDA'], 1.0, [2.2, 2.6, -3.5], BLUE); const L = SEQ(c, a, [[['MIÉRCOLES'], .1, 'y', [-.7, 2.4, -.4], 1.1], [['TE ESPERA A LA SALIDA'], 'espera', 'w', [-1.0, 2.45, -.4], 1.6]]); const g = hab(c, ['EL SÁBADO HAY', 'FERIA OTRA VEZ'], 1.4, [.7, 2.2, -.3], 54); return { update: (u, tt, cam) => { L(u, cam); pop(g, u, to + .2, 99, cam); } }; },
  c: [[0, 1.7, 4.0], [0, 1.4, -.4], [0, 1.65, 3.4], [0, 1.4, -.4]], range: 4 }; });
// 107. Te da un codazo. "Y esta vez no necesito que me ayudes a elegir la hora. Solo que vengas."
Q(107, (d, a) => { const tv = R0(a, 'solo'); return { ...RECREO, atores: [YO({ x: -.4, z: -.4, eyes: [[0, 'look'], [.6, 'wide'], [tv + .4, 'heart']], move: (u) => [-.4 - Math.sin(smooth(.3, .7, u) * Math.PI) * .12, 0, -.4] }), ELA({ x: .4, z: -.4, eyes: [[0, 'smug'], [tv, 'happy']], talk: [[.9, d]], pose: (k, u) => k.pose({ lean: u < .9 ? 14 * Math.sin(smooth(.1, .9, u) * Math.PI) : 0, armL: [u < .9 ? 50 : 12, 30], armR: [12, 8] }) })],
  extra: (c, s, A) => { PATIO(c); const r = RUB(A[0]); const t = lw(c, ['CODAZO'], .9, [-.1, 2.2, -.3]); const g1 = hab(c, ['ESTA VEZ NO NECESITO', 'QUE ME AYUDES CON LA HORA'], 1.7, [.4, 2.25, -.3], 46); const g2 = hab(c, ['SOLO QUE VENGAS.'], 1.3, [.4, 2.2, -.3], 58); const h = corazon(c, .3); h.position.set(0, 1.75, -.3);
    return { update: (u, tt, cam) => { r(smooth(tv, tv + .8, u) * .8); pop(t, u, .2, .9, cam); pop(g1, u, 1.0, tv - .1, cam); pop(g2, u, tv, 99, cam); h.visible = u > tv + .4; h.scale.setScalar(latido(u, 130)); pointer(h, cam); } }; },
  c: [[0, 1.6, 3.2], [0, 1.4, -.4], [0, 1.55, 2.7], [0, 1.4, -.4]], range: 3 }; });
// 108. Marcos pasa al lado botando el balón. "¡Eh! ¿Qué mensaje era ese, al final?"
Q(108, (d, a) => { const te = R0(a, 'eh'); return { ...RECREO, atores: [YO({ x: -.6, z: -.4, eyes: [[0, 'happy'], [te, 'wide']] }), ELA({ x: .2, z: -.4, eyes: [[0, 'happy'], [te, 'wide']] }), MARCOS({ x: 1.0, z: .6, eyes: [[0, 'smug']], talk: [[te, d]], move: (u) => [lerp(3.6, 1.2, smooth(0, te, u)), 0, .6], pose: (k, u) => { k.walk(u * (u < te ? 1 : .2)); k.pose({ armL: [12, 8], armR: [40 + Math.sin(u * 2.2 * Math.PI) * 15, 20], legL: u < te ? [Math.sin(u * 6.4) * 15, 0] : [0, 0], legR: u < te ? [-Math.sin(u * 6.4) * 15, 0] : [0, 0] }); } })],
  extra: (c, s, A) => { PATIO(c); const b = basket(c); const g = hab(c, ['¡EH! ¿QUÉ MENSAJE', 'ERA ESE, AL FINAL?'], 1.5, [1.4, 2.35, .7], 52); return { update: (u, tt, cam) => { const p = hand(A[2]); b.position.set(p.x, bote(u), p.z + .15); pop(g, u, te, 99, cam); } }; },
  c: [[.2, 1.7, 4.2], [.2, 1.4, -.2], [.2, 1.65, 3.6], [.2, 1.4, -.2]], range: 4 }; });
// 109. Ella te mira. Tú la miras. Y los dos decís a la vez: "Nada."
Q(109, (d, a) => { const tn = R0(a, 'nada'); return { ...RECREO, atores: [YO({ x: -.4, z: -.4, eyes: [[0, 'look'], [tn + .5, 'happy']], talk: [[tn, tn + .6]] }), ELA({ x: .4, z: -.4, eyes: [[0, 'look'], [tn + .5, 'happy']], talk: [[tn, tn + .6]] })],
  extra: (c) => { PATIO(c); const L = SEQ(c, a, [[['ELLA TE MIRA'], .1, 'w', [.4, 2.15, -.3], 1.2], [['TÚ LA MIRAS'], 'tu', 'w', [-.4, 2.15, -.3], 1.1], [['A LA VEZ…'], 'vez', 'y', [0, 2.1, -.3], 1.1]]); const g1 = hab(c, ['NADA.'], .7, [-.55, 2.0, -.3], 70), g2 = hab(c, ['NADA.'], .7, [.55, 2.0, -.3], 70); const b = brillos(c, 12, '#FFB0C0');
    return { update: (u, tt, cam) => { L(u, cam); pop(g1, u, tn, 99, cam); pop(g2, u, tn, 99, cam); b(u, [0, 1.6, -.3, .8], smooth(tn + .4, tn + 1, u)); } }; },
  c: [[0, 1.55, 2.8], [0, 1.4, -.4], [0, 1.5, 2.3], [0, 1.4, -.4]], range: 3 }; });
// 110. Al final, no le ayudaste a conquistar a otra persona. Le ayudaste a ver lo que tenía delante.
Q(110, (d, a) => { const tl = R0(a, 'le', 2); return { ...FERIA, atores: [YO({ x: -.4, z: -.2, eyes: [[0, 'happy']] }), ELA({ x: .4, z: -.2, eyes: [[0, 'happy']], pose: (k) => k.pose({ lean: 6 }) })],
  extra: (c) => { const rr = rueda(c); const L = SEQ(c, a, [[['NO LE AYUDASTE A CONQUISTAR A OTRO'], .2, 'w', [0, 2.4, -.2], 2.9], [['LE AYUDASTE A VER LO QUE TENÍA DELANTE'], 'ver', 'p', [0, 2.4, -.2], 3.0, 1]]); return { update: (u, tt, cam) => { rr(u); L(u, cam); } }; },
  c: [[0, 2.4, 5.4], [0, 1.6, -.3], [0, 1.7, 3.8], [0, 1.5, -.3]], range: 4, look: { exposure: 1.02, bloom: .5 } }; });
// 111. Y de paso, aprendiste algo que da más miedo que cualquier rechazo: decir la verdad.
Q(111, (d, a) => { const tv = R0(a, 'verdad'); return { ...FERIA, atores: [YO({ x: -.35, z: -.2, eyes: [[0, 'happy']], pose: cogerMano(1) }), ELA({ x: .35, z: -.2, eyes: [[0, 'happy']], pose: cogerMano(-1) })],
  extra: (c) => { const rr = rueda(c); const b = brillos(c, 14, '#FFE27A'); const L = SEQ(c, a, [[['MÁS MIEDO QUE CUALQUIER RECHAZO'], .3, 'w', [0, 2.3, -.2], 2.7], [['DECIR LA VERDAD'], tv - .2, 'y', [0, 2.3, -.2], 1.7, 1]]); return { update: (u, tt, cam) => { rr(u); b(u, [0, 2.0, -.3, 1.0], smooth(tv, tv + .6, u)); L(u, cam); } }; },
  c: [[0, 1.6, 3.4], [0, 1.45, -.2], [0, 1.55, 2.9], [0, 1.45, -.2]], range: 3, look: { exposure: 1.02, bloom: .5 } }; });
// 112. Y tú, ¿qué habrías hecho? ¿Le habrías ayudado… o le habrías dicho la verdad desde el principio? Te leo en los comentarios.
Q(112, (d, a) => { const tl = R0(a, 'leo'); return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: 0, z: -.4, eyes: [[0, 'look'], [tl, 'happy']], pose: (k, u) => (u > tl ? wave(k, u) : k.pose({ armL: [40, 60], armR: [40, 60] })) })],
  extra: (c) => { const L = SEQ(c, a, [[['¿QUÉ HABRÍAS HECHO?'], .1, 'y', [0, 2.4, -.3], 2.0], [['¿LE HABRÍAS', 'AYUDADO…'], 'ayudado', 'w', [-1.05, 2.0, -.3], 1.3, 1], [['…O LE HABRÍAS DICHO', 'LA VERDAD?'], 'dicho', 'p', [1.2, 1.5, -.3], 1.4, 1], [['TE LEO EN LOS COMENTARIOS'], tl - .2, 'y', [0, 1.0, .1], 2.4, { h: 200 }]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[0, 1.7, 4.0], [0, 1.5, -.4], [0, 1.65, 3.5], [0, 1.5, -.4]], range: 3 }; });
