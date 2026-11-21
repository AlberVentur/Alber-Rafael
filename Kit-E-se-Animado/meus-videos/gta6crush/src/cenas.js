// "¿Y si tu crush te pidiera salir el mismo día que sale GTA 6?" — horizontal 1280x720, ~8:38
import * as THREE from 'three';
import { plano, AMBS, box, std, cut, glowSprite, pointer, canvasTex, lightPanel, smooth, lerp, clamp, rng } from './mundo.js';
import { deitar, bubble, bubbleTex, wordTex, clock, speechTex, screen, textTex } from './extra.js';
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
const Q = (i, fn) => { const a = S[i], b = end(i), d = Math.min(b, 517.7) - a; CENAS.push([(x, y) => plano(x, y, mk(fn(d, a), d)), a, b]); };
const Qt = (a, b, fn) => { const d = Math.min(b, 517.7) - a; CENAS.push([(x, y) => plano(x, y, mk(fn(d, a), d)), a, b]); };
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
// ===================== CENAS =====================
const NOCHEC = { amb: 'cuartoYo', ambo: { night: true } };
const NLOOK = { exposure: .95, bloom: .45 };
// cuarto con tele a la derecha
const CUARTOTV = (c, kind = 'apagada') => { mueble(c, 1.4, -2.2, 1.8); return tele(c, [1.4, 1.35, -2.1], 1.5, kind); };
const GRUPO = 'EL GRUPO 🎮';
// 0. Es miércoles por la noche.
Q(0, (d, a) => ({ ...NOCHEC, fov: 32, atores: [YO({ x: -.3, z: -.4, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [12, 8], bob: Math.abs(Math.sin(u * 5)) * .02 }) })],
  extra: (c) => { const tv = CUARTOTV(c, 'apagada'); const t = lab(c, ['MIÉRCOLES · NOCHE'], 1.7, [-.3, 2.2, -.4], { bg: '#1E2230', fg: '#F2C14E' }); return { update: (u, tt, cam) => { tv.userData.upd(u); pop(t, u, .2, 99, cam); } }; },
  c: [[0, 1.7, 3.4], [.2, 1.4, -.8], [0, 1.65, 2.9], [.2, 1.4, -.8]], range: 3, look: NLOOK }));
// 1. Mañana es el día.
Q(1, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const m = cal(c, 'MAÑANA', false, 1.5, [0, 1.6, -.5]); const b = brillos(c, 12, '#FFE27A'); return { update: (u, t, cam) => { pop(m, u, .05, 99, cam); b(u, [0, 1.6, -.4, 1.0]); } }; },
  c: [[0, 1.6, 3.6], [0, 1.6, -.5], [0, 1.6, 3.0], [0, 1.6, -.5]], range: 3, look: { bloom: .5 } }));
// 2. Llevas años esperándolo.
Q(2, (d, a) => ({ ...NOCHEC, fov: 30, atores: [YO({ x: -.3, z: -.4, eyes: [[0, 'heart']], pose: hold })],
  extra: (c) => { CUARTOTV(c); const t = lp(c, ['AÑOS ESPERANDO'], 1.5, [-.3, 2.2, -.4]); return { update: (u, tt, cam) => pop(t, u, .2, 99, cam) }; },
  c: [[-.3, 1.6, 2.8], [-.3, 1.45, -.4], [-.3, 1.6, 2.4], [-.3, 1.45, -.4]], range: 3, look: NLOOK }));
// 3. Mañana, por fin, sale GTA 6.
Q(3, (d, a) => { const tg = R0(a, 'gta'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const tv = tele(c, [0, 1.3, -.8], 2.2, 'inicio'); const t = lab(c, ['SALE GTA 6'], 1.6, [0, 2.25, -.5], NEON); const b = brillos(c, 14, '#FF8AB0'); return { update: (u, tt, cam) => { tv.userData.upd(u); pop(t, u, tg - .2, 99, cam); b(u, [0, 1.6, -.6, 1.5], smooth(tg - .2, tg + .3, u)); } }; },
  c: [[0, 1.4, 3.8], [0, 1.3, -.8], [0, 1.4, 3.2], [0, 1.3, -.8]], range: 3, look: { bloom: .55 } }; });
// 4. Lo tienes todo planeado. Consola, mandos, patatas.
Q(4, (d, a) => { const tc = R0(a, 'consola'), tm = R0(a, 'mandos'), tp = R0(a, 'patatas'); return { ...NOCHEC, fov: 32, atores: [YO({ x: -1.0, z: -.4, eyes: [[0, 'happy']], pose: (k, u) => (u > tp ? point(k) : k.pose({ armL: [12, 8], armR: [60, 70] })) })],
  extra: (c) => { const tv = CUARTOTV(c, 'cargando'); c.add(box(1.0, .5, .6, std('#8E6242'), .2, .25, -.6)); const m1 = mandoM(), m2 = mandoM(); m1.position.set(.0, .55, -.5); m2.position.set(.35, .55, -.55); m2.rotation.y = .4; const bp = bolsaP(); bp.position.set(-.5, .5, -1.0); c.add(m1, m2, bp);
    const L = SEQ(c, a, [[['TODO PLANEADO'], 0, 'y', [-1.0, 2.2, -.4], 1.6], [['✓ CONSOLA'], 'consola', 'w', [.9, 2.3, -1.2], 1.2], [['✓ MANDOS'], 'mandos', 'w', [.9, 2.3, -1.2], 1.2], [['✓ PATATAS'], 'patatas', 'w', [.9, 2.3, -1.2], 1.2, 1]]); return { update: (u, tt, cam) => { tv.userData.upd(u, 'cargando'); L(u, cam); } }; },
  c: [[0, 1.7, 3.4], [.1, 1.3, -.7], [0, 1.6, 2.8], [.1, 1.2, -.7]], range: 3, look: NLOOK }; });
// 5. Tus amigos y tú habéis hecho un pacto: mañana nadie sale de casa.
Q(5, (d, a) => { const tp = R0(a, 'pacto'); const pp = (k, u) => k.pose({ armL: [12, 8], armR: [u > tp ? 80 : 12, 70] }); return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: -1.35, z: -.4, eyes: [[0, 'happy']], pose: pp }), AMIGO({ x: -.45, z: -.6, eyes: [[0, 'happy']], pose: pp }), EXTRA(1, { x: .45, z: -.6, eyes: [[0, 'happy']], pose: pp }), EXTRA(4, { x: 1.35, z: -.4, eyes: [[0, 'happy']], pose: pp })],
  extra: (c) => { const L = SEQ(c, a, [[['EL PACTO'], 'pacto', 'y', [0, 2.3, -.4], 1.2], [['NADIE SALE DE CASA'], 'nadie', 'r', [0, 2.3, -.4], 2.0, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[0, 1.6, 4.4], [0, 1.45, -.5], [0, 1.6, 3.9], [0, 1.45, -.5]], range: 3 }; });
// 6. Y entonces vibra el móvil.
Q(6, (d, a) => { const tv = R0(a, 'vibra'); return { ...NOCHEC, fov: 30, atores: [YO({ x: -.6, z: -.4, eyes: [[0, 'happy'], [tv + .2, 'wide']], pose: (k, u) => k.pose({ head: u > tv + .2 ? 15 : 0 }) })],
  extra: (c) => { CUARTOTV(c, 'inicio'); c.add(box(.8, .6, .5, std('#8E6242'), .5, .3, -.4)); const ph = movil(['MENSAJE NUEVO'], { hora: '22:47' }); ph.rotation.x = -Math.PI / 2 + .3; ph.scale.setScalar(.35); ph.position.set(.5, .63, -.35); c.add(ph); const l = new THREE.PointLight('#9FC0FF', 0, 2, 1.6); l.position.set(.5, 1.0, -.2); c.add(l); const t = lab(c, ['¡BZZZ!'], .9, [.6, 1.4, -.2], RED); return { update: (u, tt, cam) => { const on = u > tv; ph.position.x = .5 + (on && (u * 10) % 1 < .5 ? .015 : 0); l.intensity = on ? 2.5 : 0; pop(t, u, tv, 99, cam); } }; },
  c: [[0, 1.6, 2.8], [0, 1.2, -.4], [0, 1.5, 2.4], [0, 1.1, -.4]], range: 3, look: NLOOK }; });
// 7. Es un mensaje. De tu crush.
Q(7, (d, a) => { const tc = R0(a, 'crush'); return { amb: 'gris', fov: 28, k: 1, atores: [],
  extra: (c) => { const ch = chat(c, [0, 1.5, -.5], 1.15, [], { hora: '22:47', name: 'MI CRUSH ♥', typing: true }); const t = lab(c, ['DE TU CRUSH'], 1.4, [0, .45, .4], PINK); const h = corazon(c, .5); h.position.set(.95, 2.3, -.3); return { update: (u, tt, cam) => { ch.userData.upd(u); pop(t, u, tc - .2, 99, cam); h.visible = u > tc; h.scale.setScalar(latido(u, 140)); } }; },
  c: [[0, 1.5, 4.3], [0, 1.5, -.5], [0, 1.5, 3.8], [0, 1.5, -.5]], range: 2, blur: 4 }; });
// 8. "Oye… ¿te apetece quedar mañana por la tarde?"
Q(8, (d, a) => ({ amb: 'gris', fov: 28, k: 1, atores: [],
  extra: (c) => { const ch = chat(c, [0, 1.5, -.5], 1.15, [['l', 'Oye… ¿te apetece quedar mañana por la tarde?', .1]], { hora: '22:47', name: 'MI CRUSH ♥' }); return { update: (u) => ch.userData.upd(u) }; },
  c: [[0, 1.5, 3.9], [0, 1.6, -.5], [0, 1.5, 3.4], [0, 1.6, -.5]], range: 2, blur: 4 }));
// 9. Mañana. El mismo día que sale GTA 6.
Q(9, (d, a) => { const tm = R0(a, 'mismo'); return { ...NOCHEC, fov: 32, atores: [YO({ x: -.4, z: -.4, eyes: [[0, 'wide']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [60, 70], head: Math.sin(u * 4) * 14 }) })],
  extra: (c) => { const tv = CUARTOTV(c, 'inicio'); const h = corazon(c, .45); h.position.set(-1.4, 1.9, -.4); const t = lab(c, ['¡EL MISMO DÍA!'], 1.7, [-.4, 2.25, -.4], RED); return { update: (u, tt, cam) => { tv.userData.upd(u); h.scale.setScalar(latido(u, 130)); pointer(h, cam); pop(t, u, tm - .2, 99, cam); shake(cam, u > tm && u < tm + .5 ? .02 : 0, u); } }; },
  c: [[0, 1.7, 3.6], [0, 1.4, -.7], [0, 1.65, 3.1], [0, 1.4, -.7]], range: 3, look: NLOOK }; });
// 10. Suscríbete
Q(10, (d, a) => { const ts = R0(a, 'suscribete'); return { ...NOCHEC, fov: 32, atores: [YO({ x: -1.0, z: -.3, eyes: [[0, 'look'], [ts, 'happy']], pose: (k, u) => (u > ts ? wave(k, u) : k.pose()) })],
  extra: (c) => { const sb = suscribe(2.4); sb.position.set(.7, 1.8, -1.0); c.add(sb); const b = brillos(c, 14, '#FFE27A'); const q = lw(c, ['¿QUÉ HACES?'], 1.3, [-1.0, 2.3, -.3]); return { update: (u, t, cam) => { pop(q, u, .2, 99, cam); const k2 = smooth(ts - .3, ts, u); sb.scale.setScalar(Math.max(.01, k2)); sb.rotation.z = u > ts + .6 && u < ts + 1.6 ? Math.sin(u * 40) * .05 : 0; b(u, [.7, 1.8, -.9, 1.1], smooth(ts, ts + .3, u)); } }; },
  c: [[0, 1.7, 3.8], [0, 1.5, -.6], [0, 1.65, 3.2], [0, 1.5, -.6]], range: 3, look: NLOOK }; });
// 11. Y ahora sí. Vamos a ver qué pasa.
Q(11, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [YO({ x: 0, z: -.4, eyes: [[0, 'lookl'], [1.2, 'look']], pose: (k, u) => k.pose({ head: u < 1.2 ? 14 : -14 }) })],
  extra: (c) => { const ph = movil(['MI CRUSH ♥'], { hora: '22:48' }); ph.position.set(-1.3, 1.5, -.5); ph.scale.setScalar(.9); c.add(ph); const tv = tele(c, [1.5, 1.5, -.6], 1.3, 'inicio'); const t = lw(c, ['¿QUÉ PASARÁ?'], 1.4, [0, 2.25, -.4]); return { update: (u, tt, cam) => { tv.userData.upd(u); pop(t, u, .3, 99, cam); } }; },
  c: [[0, 1.6, 4.4], [0, 1.45, -.4], [0, 1.6, 3.9], [0, 1.45, -.4]], range: 3, look: NLOOK }));
// 12. 23:00
HORA(12, 23, '23:00', 'MIÉRCOLES');
// 13. Miras el mensaje. Lo lees diez veces.
Q(13, (d, a) => { const tl = R0(a, 'lees'); return { amb: 'gris', fov: 28, k: 1, atores: [],
  extra: (c) => { const ch = chat(c, [-.5, 1.5, -.5], 1.0, [['l', 'Oye… ¿te apetece quedar mañana por la tarde?', 0]], { hora: '23:00', name: 'MI CRUSH ♥' }); const n = contador(c, [1.0, 1.9, -.4], 1.0, (u) => `${Math.min(10, Math.max(1, Math.floor((u - tl) * 4) + 1))}x`, { w: 420, h: 200, size: 120, bg: '#C9361F', fg: '#fff' }); const t = lw(c, ['LEÍDO'], .8, [1.0, 1.35, -.4]); return { update: (u, tt, cam) => { ch.userData.upd(u); n.userData.upd(u); n.visible = u > tl; pop(t, u, tl, 99, cam); } }; },
  c: [[.2, 1.5, 4.0], [.2, 1.5, -.5], [.2, 1.5, 3.6], [.2, 1.5, -.5]], range: 2, blur: 4 }; });
// 14. Escribes "¡Sí!". Lo borras. Escribes "Es que mañana…". Lo borras también.
Q(14, (d, a) => { const b1 = R0(a, 'borras'), e2 = R0(a, 'escribes', 1), b2 = R0(a, 'borras', b1 + .3); return { amb: 'gris', fov: 28, k: 1, atores: [],
  extra: (c) => { const ch = chat(c, [-.5, 1.5, -.5], 1.0, [['l', 'Oye… ¿te apetece quedar mañana por la tarde?', 0]], { hora: '23:02', name: 'MI CRUSH ♥', typing: true }); const L = SEQ(c, a, [[['“¡SÍ!”'], .1, 'w', [1.05, 1.9, -.4], .9], [['✗ BORRADO'], b1 - .1, 'r', [1.05, 1.9, -.4], 1.1], [['“ES QUE MAÑANA…”'], e2, 'w', [1.05, 1.9, -.4], 1.5], [['✗ BORRADO'], b2 - .1, 'r', [1.05, 1.9, -.4], 1.1, 1]]); return { update: (u, tt, cam) => { ch.userData.upd(u); L(u, cam); } }; },
  c: [[.2, 1.5, 4.0], [.2, 1.5, -.5], [.2, 1.5, 3.6], [.2, 1.5, -.5]], range: 2, blur: 4 }; });
// 15. En el grupo de tus amigos, el chat arde.
Q(15, (d, a) => { const ta = R0(a, 'arde'), tq = R0(a, 'queda'), ty = R0(a, 'dormido'), tt = R0(a, 'traidor'); return { amb: 'gris', fov: 28, k: 1, atores: [],
  extra: (c) => { const ch = chat(c, [0, 1.5, -.5], 1.15, [['l', '¡Queda una hora!', tq - .1], ['l', '¡Yo he dormido la siesta para aguantar!', ty - .4], ['l', 'El que salga de casa mañana es un traidor.', tt - 1.2]], { hora: '23:00', name: GRUPO }); const f = lab(c, ['🔥 EL CHAT ARDE'], 1.3, [1.15, 2.4, -.3], RED); return { update: (u, t2, cam) => { ch.userData.upd(u); pop(f, u, ta - .2, 99, cam); } }; },
  c: [[0, 1.5, 4.3], [0, 1.5, -.5], [0, 1.5, 3.8], [0, 1.5, -.5]], range: 2, blur: 4 }; });
// 16. Y tú, con el pulgar encima de la pantalla, sin saber qué hacer.
Q(16, (d, a) => ({ ...NOCHEC, fov: 30, atores: [YO({ x: -.2, z: -.4, eyes: [[0, 'flat']], pose: (k) => k.pose({ armL: [12, 8], armR: [70, 90], head: -10 }) })],
  extra: (c, s, A) => { const ph = movil(['MI CRUSH ♥'], { hora: '23:04' }); ph.scale.setScalar(.35); c.add(ph); const gm = glowMovil(c, A[0]); const t = lw(c, ['¿Y AHORA QUÉ?'], 1.4, [-.2, 2.2, -.4]); return { update: (u, tt, cam) => { naMao(ph, A[0], .05); gm(); pop(t, u, R0(a, 'saber') - .2, 99, cam); } }; },
  c: [[-.2, 1.6, 2.4], [-.2, 1.45, -.4], [-.2, 1.55, 2.0], [-.2, 1.45, -.4]], range: 2.5, look: NLOOK }));
// 17. Porque esto no es cualquier juego.
Q(17, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const tv = tele(c, [0, 1.3, -.8], 2.0, 'coche'); const t = lab(c, ['NO ES CUALQUIER JUEGO'], 1.9, [0, 2.2, -.5], NEON); return { update: (u, tt, cam) => { tv.userData.upd(u, 'coche'); pop(t, u, .2, 99, cam); } }; },
  c: [[0, 1.4, 3.6], [0, 1.35, -.8], [0, 1.4, 3.1], [0, 1.35, -.8]], range: 3, look: { bloom: .55 } }));
// 18. El primer tráiler (dic 2023): unos 90 millones de visitas en YouTube en 24 horas.
Q(18, (d, a) => { const tv = R0(a, '90'), th = R0(a, 'horas'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const p = player(c, [0, 1.85, -.6], 2.3); const n = contador(c, [0, .7, -.3], 2.2, (u) => miles(90e6 * smooth(tv - 1.5, tv + .4, u)), { size: 120 }); const s = lw(c, ['VISITAS EN 24 HORAS'], 1.8, [0, .2, -.1]); return { update: (u, tt, cam) => { n.userData.upd(u); pop(s, u, th - .3, 99, cam); } }; },
  c: [[0, 1.4, 4.4], [0, 1.3, -.5], [0, 1.4, 3.9], [0, 1.3, -.5]], range: 3, blur: 5, look: { bloom: .45 } }; });
// 19. Guinness lo registró: el anuncio de un videojuego más visto en su primer día.
Q(19, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const cup = new THREE.Group(); const gold = std('#F2C14E', { metalness: .15, roughness: .35 }); const cp = new THREE.Mesh(new THREE.CylinderGeometry(.38, .18, .55, 24), gold); cp.position.y = .5; cup.add(cp, box(.12, .3, .12, gold, 0, .1, 0), box(.5, .1, .4, gold, 0, -.05, 0)); for (const s of [-1, 1]) { const h = new THREE.Mesh(new THREE.TorusGeometry(.14, .035, 8, 16), gold); h.position.set(s * .42, .55, 0); cup.add(h); } cup.position.set(0, 1.1, -.6); c.add(cup); const t = lab(c, ['RÉCORD GUINNESS'], 1.9, [0, 2.4, -.5], ORO); const s = lw(c, ['EL ANUNCIO DE UN JUEGO MÁS VISTO'], 2.4, [0, .8, -.1]); const b = brillos(c, 14, '#FFE27A'); return { update: (u, tt, cam) => { cup.rotation.y = u * .8; pop(t, u, .1, 99, cam); pop(s, u, R0(a, 'anuncio') - .2, 99, cam); b(u, [0, 1.6, -.5, 1.0]); } }; },
  c: [[0, 1.6, 4.0], [0, 1.5, -.5], [0, 1.6, 3.5], [0, 1.5, -.5]], range: 3, look: { bloom: .55 } }));
// 20. Y luego vinieron los retrasos: 2025, mayo de 2026 y al final el 19 de noviembre.
Q(20, (d, a) => { const t1 = R0(a, '2025'), t2 = R0(a, 'mayo'), t3 = R0(a, 'noviembre'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const c1 = cal(c, '2025', false, 1.1, [-1.4, 1.6, -.5]), c1x = cal(c, '2025', true, 1.1, [-1.4, 1.6, -.49]); const c2 = cal(c, 'MAYO\n2026', false, 1.1, [0, 1.6, -.5]), c2x = cal(c, 'MAYO\n2026', true, 1.1, [0, 1.6, -.49]); const c3 = cal(c, '19 NOV\n2026', false, 1.1, [1.4, 1.6, -.5]); const t = lab(c, ['RETRASOS'], 1.4, [0, 2.6, -.5], RED); const ok = lab(c, ['¡POR FIN!'], 1.0, [1.4, .7, -.3], NEON);
    return { update: (u, tt, cam) => { pop(t, u, .1, 99, cam); pop(c1, u, t1 - .2, 99, cam); c1x.visible = u > t2 - .2; c1.visible = c1.visible && !c1x.visible; pop(c2, u, t2 - .2, 99, cam); c2x.visible = u > t3 - .8; c2.visible = c2.visible && !c2x.visible; pop(c3, u, t3 - .6, 99, cam); pop(ok, u, t3 + .3, 99, cam); } }; },
  c: [[0, 1.6, 4.6], [0, 1.6, -.5], [0, 1.6, 4.1], [0, 1.6, -.5]], range: 3 }; });
// 21. Años esperando. Y justo ese día, ella te escribe.
Q(21, (d, a) => { const te = R0(a, 'ella'); return { ...NOCHEC, fov: 30, atores: [YO({ x: -.4, z: -.4, eyes: [[0, 'flat'], [te, 'heart']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > te ? 70 : 12, 90] }) })],
  extra: (c, s, A) => { CUARTOTV(c, 'inicio'); const ph = movil(['MI CRUSH ♥'], { hora: '23:10' }); ph.scale.setScalar(.35); c.add(ph); const gm = glowMovil(c, A[0]); const L = SEQ(c, a, [[['AÑOS ESPERANDO…'], 0, 'w', [-.4, 2.2, -.4], 1.6], [['…Y JUSTO ESE DÍA, ELLA'], 'justo', 'p', [-.4, 2.2, -.4], 2.1, 1]]); return { update: (u, tt, cam) => { naMao(ph, A[0], .05); ph.visible = u > te; gm(); L(u, cam); } }; },
  c: [[0, 1.65, 3.0], [-.2, 1.45, -.5], [0, 1.6, 2.6], [-.2, 1.45, -.5]], range: 3, look: NLOOK }; });
// 22. 00:00
HORA(22, 24, '00:00', 'MEDIANOCHE');
// 23. El juego se desbloquea. Tus amigos mandan fotos. Tú también lo pones.
Q(23, (d, a) => { const tf = R0(a, 'fotos'), tt = R0(a, 'tambien'); return { ...NOCHEC, fov: 32, atores: [YO({ x: -.6, z: 0, eyes: [[0, 'wide'], [tt, 'happy']], pose: (k, u) => (u > tt ? juega(k, u) : k.pose()) })],
  extra: (c, s, A) => { const tv = CUARTOTV(c); const m = mandoM(); c.add(m); const t = lab(c, ['¡DESBLOQUEADO!'], 1.6, [1.4, 2.3, -2.0], NEON); const f = lw(c, ['FOTOS Y MÁS FOTOS'], 1.5, [-.6, 2.2, 0]); return { update: (u, tt2, cam) => { tv.userData.upd(u, u < .8 ? 'cargando' : 'inicio'); pop(t, u, .6, 99, cam); pop(f, u, tf - .2, tt - .1, cam); mandoEn(m, A[0]); m.visible = u > tt; } }; },
  c: [[-1.2, 1.6, 2.4], [.6, 1.3, -1.6], [-1.0, 1.55, 2.0], [.6, 1.3, -1.6]], range: 3.5, look: { exposure: .95, bloom: .5 } }; });
// 24. Y es increíble. El sol, la playa, los coches. Durante un rato te olvidas de todo.
Q(24, (d, a) => { const ts = R0(a, 'sol'), tp = R0(a, 'playa'), tc = R0(a, 'coches'), to = R0(a, 'olvidas'); return { ...NOCHEC, fov: 30, atores: [YO({ x: 0, z: .4, eyes: [[0, 'wide'], [to, 'happy']], pose: juega })],
  extra: (c, s, A) => { const tv = tele(c, [0, 1.4, -1.6], 2.6, 'inicio'); const m = mandoM(); c.add(m); const L = SEQ(c, a, [[['EL SOL'], 'sol', 'y', [-1.1, 2.6, -1.4], .9], [['LA PLAYA'], 'playa', 'y', [0, 2.6, -1.4], 1.0], [['LOS COCHES'], 'coches', 'y', [1.1, 2.6, -1.4], 1.1]].map((x) => [...x, 1])); return { update: (u, tt, cam) => { tv.userData.upd(u, u > tc ? 'coche' : 'inicio'); mandoEn(m, A[0]); L(u, cam); } }; },
  c: [[1.6, 1.8, 2.6], [0, 1.5, -1.4], [1.3, 1.75, 2.2], [0, 1.5, -1.4]], range: 3.5, look: { exposure: .95, bloom: .55 } }; });
// 25. Pero el móvil sigue ahí, en la mesa. Con el mensaje sin contestar.
Q(25, (d, a) => { const ts = R0(a, 'contestar'); return { ...NOCHEC, fov: 26, atores: [],
  extra: (c) => { c.add(box(1.2, .6, .7, std('#8E6242'), 0, .3, -.4)); const ph = movil(['1 MENSAJE', 'MI CRUSH ♥'], { hora: '00:41' }); ph.rotation.x = -Math.PI / 2 + .5; ph.scale.setScalar(.45); ph.position.set(0, .66, -.35); c.add(ph); const l = new THREE.PointLight('#9FC0FF', 2.5, 2, 1.6); l.position.set(0, 1.0, -.1); c.add(l); const t = lab(c, ['SIN CONTESTAR'], 1.0, [0, 1.08, -.1], RED); return { update: (u, tt, cam) => { l.intensity = 1.5 + Math.sin(u * 4) * 1; pop(t, u, ts - .3, 99, cam); } }; },
  c: [[0, 1.4, 1.8], [0, .7, -.4], [0, 1.3, 1.4], [0, .75, -.4]], range: 1.5, look: NLOOK }; });
// 26. ¿Y sabes qué es lo curioso? Que una parte enorme de la emoción ya la has vivido.
Q(26, (d, a) => { const tv = R0(a, 'vivido'); return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: 0, z: -.4, eyes: [[0, 'look'], [tv - .3, 'wide']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > 1 ? 150 : 12, 40] }) })],
  extra: (c) => { const L = SEQ(c, a, [[['LO CURIOSO…'], 0, 'w', [0, 2.2, -.4], 1.3], [['LA EMOCIÓN'], 'emocion', 'p', [0, 2.2, -.4], 1.3], [['¡YA LA HAS VIVIDO!'], 'vivido', 'y', [0, 2.2, -.4], 1.8, 1]]); const b = brillos(c, 10, '#FFE27A'); return { update: (u, tt, cam) => { L(u, cam); b(u, [0, 1.5, -.3, .8], u > tv ? 1 : 0); } }; },
  c: [[0, 1.6, 3.6], [0, 1.5, -.4], [0, 1.6, 3.1], [0, 1.5, -.4]], range: 3 }; });
// 27. En 2010, Jeroen Nawijn estudió a más de 1.500 personas antes y después de sus vacaciones.
Q(27, (d, a) => { const tp = R0(a, '1500'), tv = R0(a, 'vacaciones'); return { amb: 'playa', fov: 32, atores: [CIENT(1, { x: 1.6, z: -.3, eyes: [[0, 'look']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [60, 70] }) }), EXTRA(0, { x: -1.4, z: -.6, eyes: [[0, 'happy']] }), EXTRA(2, { x: -.5, z: -.8, eyes: [[0, 'happy']], pose: wave }), EXTRA(4, { x: .4, z: -.6, eyes: [[0, 'happy']] })],
  extra: (c) => { const L = SEQ(c, a, [[['+1.500 PERSONAS'], '1500', 'y', [-.5, 2.3, -.6], 1.7], [['ANTES Y DESPUÉS DE LAS VACACIONES'], 'vacaciones', 'w', [-.2, 2.3, -.6], 2.8, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[0, 1.7, 3.8], [0, 1.4, -.5], [0, 1.65, 3.3], [0, 1.4, -.5]], range: 3.5 }; });
// 28. La felicidad más grande no llegaba durante el viaje. Llegaba antes… al volver, a lo normal.
Q(28, (d, a) => { const ta = R0(a, 'antes'), ti = R0(a, 'ilusion'), tv = R0(a, 'volver'); return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: -1.6, z: -.3, eyes: [[0, 'look'], [ta, 'happy'], [tv, 'flat']], pose: (k, u) => (u > tv ? k.pose() : point(k)) })],
  extra: (c) => { const b = barras(c, [['ESPERANDO\nEL VIAJE', .92, '#F2C14E'], ['AL\nVOLVER', .45, '#8AA8C8']], 2.2, [.5, 1.55, -.5], { title: 'FELICIDAD' }); const L = SEQ(c, a, [[['LLEGABA ANTES'], 'antes', 'y', [.5, 2.55, -.4], 1.5], [['LA ILUSIÓN'], 'ilusion', 'p', [.5, 2.45, -.4], 1.3], [['AL VOLVER: LO NORMAL'], 'volver', 'w', [.5, 2.55, -.4], 2.0, 1]]); return { update: (u, tt, cam) => { pop(b, u, .2, 99, cam); L(u, cam); } }; },
  c: [[-.3, 1.6, 4.2], [-.3, 1.55, -.4], [-.3, 1.6, 3.7], [-.3, 1.55, -.4]], range: 3 }; });
// 29. Tú llevas años con esa ilusión. Y el juego, mañana, seguirá ahí.
Q(29, (d, a) => { const tj = R0(a, 'juego'); return { ...NOCHEC, fov: 30, atores: [YO({ x: -.5, z: -.4, eyes: [[0, 'happy']] })],
  extra: (c) => { const tv = CUARTOTV(c, 'inicio'); const L = SEQ(c, a, [[['AÑOS DE ILUSIÓN'], 0, 'p', [-.5, 2.2, -.4], 1.6], [['EL JUEGO SEGUIRÁ AHÍ'], 'juego', 'w', [-.2, 2.2, -.4], 2.0, 1]]); const b = brillos(c, 10, '#C8A8FF'); return { update: (u, tt, cam) => { tv.userData.upd(u); L(u, cam); b(u, [-.5, 1.4, -.3, .7], u < tj ? 1 : 0); } }; },
  c: [[0, 1.65, 3.2], [.1, 1.4, -.7], [0, 1.6, 2.7], [.1, 1.4, -.7]], range: 3, look: NLOOK }; });
// 30. 1:00
HORA(30, 1, '1:00', 'DE LA MADRUGADA');
// 31. Contestas: "¿A qué hora?" — "¿A las cinco? En el parque." 🙂
Q(31, (d, a) => { const tq = R0(a, 'hora'), tc = R0(a, 'cinco'), tp = R0(a, 'parque'), ts = R0(a, 'carita'); return { amb: 'gris', fov: 28, k: 1, atores: [],
  extra: (c) => { const ch = chat(c, [0, 1.5, -.5], 1.15, [['l', 'Oye… ¿te apetece quedar mañana por la tarde?', 0], ['r', '¿A qué hora?', tq - .4], ['l', '¿A las cinco? En el parque.', tc - .3], ['l', '@smile', ts]], { hora: '01:00', name: 'MI CRUSH ♥' }); const t = lw(c, ['¡RESPONDE ENSEGUIDA!'], 1.6, [1.3, 2.4, -.3]); return { update: (u, tt, cam) => { ch.userData.upd(u, { typing: u > tq && u < tc - .3 }); pop(t, u, R0(a, 'enseguida') - .2, tc + 1, cam); } }; },
  c: [[0, 1.5, 4.3], [0, 1.5, -.5], [0, 1.5, 3.8], [0, 1.5, -.5]], range: 2, blur: 4 }; });
// 32. El corazón te va a mil. Y tus amigos: "¿Por qué estás en línea y no estás jugando?"
Q(32, (d, a) => { const tm = R0(a, 'amigos'); return { ...NOCHEC, fov: 30, atores: [YO({ x: -.6, z: -.4, eyes: [[0, 'heart']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [70, 90], bob: Math.abs(Math.sin(u * 12)) * .02 }) })],
  extra: (c, s, A) => { const ph = movil(['MI CRUSH ♥'], { hora: '01:01' }); ph.scale.setScalar(.35); c.add(ph); const gm = glowMovil(c, A[0]); const h = corazon(c, .45); const t = lab(c, ['♥ A MIL'], 1.0, [-1.6, 2.2, -.4], PINK); const g = hab(c, ['¿POR QUÉ ESTÁS EN LÍNEA', 'Y NO ESTÁS JUGANDO?'], 1.7, [.9, 2.1, -.6], 52); return { update: (u, tt, cam) => { naMao(ph, A[0], .05); gm(); const v = new THREE.Vector3(); A[0].torso.getWorldPosition(v); h.position.set(v.x + .05, v.y + .15, v.z + .3); h.scale.setScalar(latido(u, 170) * .8); pointer(h, cam); pop(t, u, .2, 99, cam); pop(g, u, tm, 99, cam); } }; },
  c: [[0, 1.65, 3.2], [0, 1.5, -.4], [0, 1.6, 2.8], [0, 1.5, -.4]], range: 3, look: NLOOK }; });
// 33. 8:00
HORA(33, 8, '8:00', 'EL INSTITUTO');
// 34. Has dormido tres horas. Tienes unas ojeras enormes.
Q(34, (d, a) => { const to = R0(a, 'ojeras'); return { amb: 'pasillo', fov: 30, atores: [YO({ x: 0, z: -.4, eyes: [[0, 'flat']], pose: (k, u) => k.pose({ armL: [8, 6], armR: [8, 6], head: -8 + Math.sin(u * 2) * 4, lean: Math.sin(u * 1.5) * 4 }) })],
  extra: (c) => { const n = lab(c, ['3 HORAS DE SUEÑO'], 1.6, [0, 2.25, -.4], { bg: '#1E2230', fg: '#F2C14E' }); const o = lw(c, ['OJERAS ENORMES'], 1.5, [0, 2.25, -.4]); const z = zzz(c); return { update: (u, tt, cam) => { pop(n, u, .1, to - .1, cam); pop(o, u, to, 99, cam); z(u, [.35, 1.7, -.3], cam); } }; },
  c: [[0, 1.6, 2.6], [0, 1.45, -.4], [0, 1.55, 2.2], [0, 1.45, -.4]], range: 2.5 }; });
// 35. En el instituto nadie habla de otra cosa. Todo el mundo ha jugado. Todo el mundo cuenta cosas.
const CHARLAS = ['¡QUÉ PASADA!', '¿HAS VISTO EL COCHE?', '¡LA PRIMERA MISIÓN!', '¡NO HE DORMIDO!', '¡LA PLAYA!', '¡LA PERSECUCIÓN!'];
Q(35, (d, a) => { const tj = R0(a, 'jugado'); return { amb: 'pasillo', fov: 34, atores: [EXTRA(0, { x: -2.2, z: -.8, eyes: [[0, 'happy']], pose: talkP }), EXTRA(1, { x: -1.4, z: -1.0, eyes: [[0, 'lookl']] }), YO({ x: 0, z: -.2, eyes: [[0, 'flat'], [tj, 'wide']] }), EXTRA(2, { x: 1.3, z: -1.0, eyes: [[0, 'happy']], pose: talkP }), EXTRA(3, { x: 2.1, z: -.8, eyes: [[0, 'lookl']], pose: clap })],
  extra: (c) => { const P = [[-1.9, 2.25, -.8], [1.8, 2.25, -.8], [-1.7, 2.6, -1.0], [1.6, 2.6, -1.0], [-2.3, 2.0, -.9], [2.3, 2.0, -.9]]; const G = CHARLAS.map((t, i) => hab(c, [t], 1.15, P[i], 54)); const L = SEQ(c, a, [[['NADIE HABLA DE OTRA COSA'], 'nadie', 'w', [0, .85, .2], 2.2, 1]]); return { update: (u, tt, cam) => { L(u, cam); G.forEach((g, i) => pop(g, u, 1.2 + i * 1.2, 99, cam)); } }; },
  c: [[0, 1.75, 4.2], [0, 1.5, -.6], [0, 1.7, 3.6], [0, 1.5, -.6]], range: 3.5 }; });
// 36. Y ahí llega tu gran miedo: los spoilers. Si hoy no juegas, mañana te lo van a destripar todo.
Q(36, (d, a) => { const ts = R0(a, 'spoilers'), td = R0(a, 'destripar'); return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: 0, z: -.4, eyes: [[0, 'look'], [ts, 'wide']], pose: (k, u) => (u > ts ? k.pose({ armL: [165, 80], armR: [165, 80], bob: Math.abs(Math.sin(u * 20)) * .015 }) : k.pose()) })],
  extra: (c) => { const L = SEQ(c, a, [[['TU GRAN MIEDO'], 0, 'w', [0, 2.3, -.4], 1.5], [['⚠ SPOILERS ⚠'], 'spoilers', 'r', [0, 2.3, -.4], 1.7], [['TE LO VAN A DESTRIPAR TODO'], 'destripar', 'r', [0, 2.3, -.4], 2.5, 1]]); return { update: (u, tt, cam) => { L(u, cam); shake(cam, u > ts && u < ts + .5 ? .02 : 0, u); } }; },
  c: [[0, 1.6, 3.6], [0, 1.5, -.4], [0, 1.6, 3.0], [0, 1.5, -.4]], range: 3, look: { vig: .65 } }; });
// 37. 2011, Universidad de California en San Diego: Leavitt y Christenfeld dieron a estudiantes varios relatos cortos.
Q(37, (d, a) => { const tr = R0(a, 'relatos'); return { amb: 'biblio', fov: 32, atores: [CIENT(0, { x: -1.9, z: -.6, eyes: [[0, 'look']], pose: point }), H({ outfit: 'jaleco', glasses: true, glow: 0, x: -1.1, z: -.7, eyes: [[0, 'happy']] }), EXTRA(1, { x: .6, z: -.3, eyes: [[0, 'look']], pose: hold }), EXTRA(3, { x: 1.4, z: -.4, eyes: [[0, 'lookl']], pose: hold }), EXTRA(5, { x: 2.2, z: -.3, eyes: [[0, 'look']], pose: hold })],
  extra: (c, s, A) => { const B = [2, 3, 4].map(() => { const b = libroAbierto(['RELATO'], ['…']); b.scale.setScalar(.45); c.add(b); return b; }); const L = SEQ(c, a, [[['DOS INVESTIGADORES'], 'investigadores', 'w', [-1.5, 2.3, -.6], 1.9], [['RELATOS CORTOS'], 'relatos', 'y', [1.4, 2.3, -.4], 1.5, 1]]); return { update: (u, tt, cam) => { L(u, cam); B.forEach((b, i) => { const p = hand(A[i + 2]); b.position.set(p.x - .15, p.y + .1, p.z + .15); b.visible = u > tr - .3; }); } }; },
  c: [[0, 1.7, 4.4], [0, 1.4, -.5], [0, 1.65, 3.9], [0, 1.4, -.5]], range: 3.5 }; });
// 38. A unos les contaron el final antes de empezar. A otros no.
Q(38, (d, a) => { const to = R0(a, 'otros'); return { amb: 'gris', fov: 30, k: 1, atores: [EXTRA(1, { x: -1.2, z: -.4, eyes: [[0, 'look']], pose: hold }), EXTRA(3, { x: 1.2, z: -.4, eyes: [[0, 'look']], pose: hold })],
  extra: (c, s, A) => { const b1 = libroAbierto(['EL FINAL:', 'ERA ÉL'], ['…']), b2 = libroAbierto(['ÉRASE', 'UNA VEZ'], ['…']); for (const b of [b1, b2]) { b.scale.setScalar(.55); c.add(b); } const L1 = lab(c, ['CON SPOILER'], 1.3, [-1.2, 2.25, -.4], RED), L2 = lab(c, ['SIN SPOILER'], 1.3, [1.2, 2.25, -.4], BLUE); return { update: (u, tt, cam) => { const p = hand(A[0]), q = hand(A[1]); b1.position.set(p.x - .2, p.y + .12, p.z + .2); b2.position.set(q.x - .2, q.y + .12, q.z + .2); pop(L1, u, .1, 99, cam); pop(L2, u, to - .2, 99, cam); b2.visible = u > to - .2; } }; },
  c: [[0, 1.6, 4.2], [0, 1.5, -.4], [0, 1.6, 3.7], [0, 1.5, -.4]], range: 3 }; });
// 39. ¿El resultado? Las historias con spoiler gustaron igual o incluso más.
Q(39, (d, a) => { const ti = R0(a, 'incluso'); return { amb: 'gris', fov: 30, k: 1, atores: [EXTRA(1, { x: -2.0, z: -.3, eyes: [[0, 'happy']], pose: clap })],
  extra: (c) => { const b = barras(c, [['CON\nSPOILER', .88, '#C9361F'], ['SIN\nSPOILER', .78, '#2F5A9A']], 2.3, [.4, 1.55, -.5], { title: '¿CUÁNTO GUSTÓ?' }); const t = lab(c, ['¡IGUAL O MÁS!'], 1.5, [.4, 2.55, -.4], ORO); return { update: (u, tt, cam) => { pop(b, u, .1, 99, cam); pop(t, u, ti - .3, 99, cam); } }; },
  c: [[-.5, 1.6, 4.4], [-.5, 1.55, -.4], [-.5, 1.6, 3.9], [-.5, 1.55, -.4]], range: 3 }; });
// 40. Saber cómo acaba no estropea el viaje. A veces lo disfrutas más, porque te fijas en los detalles.
Q(40, (d, a) => { const tf = R0(a, 'fijas'); return { amb: 'gris', fov: 30, k: 1, atores: [EXTRA(1, { x: 0, z: -.4, eyes: [[0, 'look'], [tf, 'happy']], pose: hold })],
  extra: (c, s, A) => { const bk = libroAbierto(['EL FINAL:', 'ERA ÉL'], ['¡AHÍ', 'ESTABA LA PISTA!']); bk.scale.setScalar(.6); c.add(bk); const lupa = new THREE.Group(); const r = new THREE.Mesh(new THREE.TorusGeometry(.16, .025, 8, 24), std('#2A2A34')); const v = new THREE.Mesh(new THREE.CircleGeometry(.16, 24), new THREE.MeshBasicMaterial({ color: '#BFE0F2', transparent: true, opacity: .35 })); const m = box(.04, .25, .04, std('#8E6242'), .1, -.25, 0, false); m.rotation.z = .4; lupa.add(r, v, m); c.add(lupa); const L = SEQ(c, a, [[['NO ESTROPEA EL VIAJE'], 'estropea', 'w', [0, 2.05, -.4], 2.0], [['TE FIJAS EN LOS DETALLES'], 'fijas', 'y', [0, 2.05, -.4], 2.3, 1]]); return { update: (u, tt, cam) => { const p = hand(A[0]); bk.position.set(p.x - .25, p.y + .15, p.z + .2); lupa.position.set(p.x - .05 + Math.sin(u * 2) * .15, p.y + .25, p.z + .35); lupa.visible = u > tf - .3; L(u, cam); } }; },
  c: [[0, 1.6, 3.2], [0, 1.5, -.4], [0, 1.6, 2.7], [0, 1.45, -.4]], range: 3 }; });
// 41. Así que respira. Los spoilers no te van a matar.
Q(41, (d, a) => { const ts = R0(a, 'spoilers'); return { amb: 'pasillo', fov: 30, atores: [YO({ x: 0, z: -.4, eyes: [[0, 'shut'], [ts, 'happy']], pose: (k, u) => k.pose({ armL: [30 + Math.sin(u * 2) * 15, 30], armR: [30 + Math.sin(u * 2) * 15, 30], bob: Math.sin(u * 2) * .02 }) })],
  extra: (c) => { const L = SEQ(c, a, [[['RESPIRA…'], 0, 'w', [0, 2.2, -.4], 1.1], [['LOS SPOILERS NO MATAN'], 'spoilers', 'y', [0, 2.2, -.4], 2.0, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[0, 1.6, 2.8], [0, 1.45, -.4], [0, 1.6, 2.4], [0, 1.45, -.4]], range: 2.5 }; });
// 42. 10:00
HORA(42, 10, '10:00', 'EL RECREO');
// 43. La ves al otro lado del patio. Ella te mira. Sonríe. Y se pone roja. Tú también.
Q(43, (d, a) => { const tm = R0(a, 'mira'), ts = R0(a, 'sonrie'), tr = R0(a, 'roja'), tt = R0(a, 'tambien'); return { amb: 'jardin', fov: 30, atores: [YO({ x: -1.6, z: .2, eyes: [[0, 'look'], [tt - .2, 'happy']], pose: (k) => k.pose({ head: 10 }) }), ELA({ x: 1.6, z: -1.2, eyes: [[0, 'lookl'], [tm, 'look'], [ts, 'happy']] }), EXTRA(2, { x: 2.3, z: -1.4, eyes: [[0, 'lookl']] }), EXTRA(4, { x: 1.0, z: -1.6, eyes: [[0, 'look']] })],
  extra: (c, s, A) => { const r1 = rubor(A[1]), r0 = rubor(A[0]); const L = SEQ(c, a, [[['SE PONE ROJA'], 'roja', 'p', [1.6, 2.25, -1.2], 1.3], [['TÚ TAMBIÉN'], 'tambien', 'p', [-1.6, 2.2, .2], 1.2, 1]]); return { update: (u, tt2, cam) => { r1(smooth(tr - .2, tr + .4, u)); r0(smooth(tt - .2, tt + .4, u)); L(u, cam); } }; },
  c: [[0, 1.7, 4.2], [0, 1.4, -.6], [0, 1.65, 3.7], [0, 1.4, -.6]], range: 4 }; });
// 44. Tu mejor amigo te agarra del brazo: "Dime que no vas a quedar con ella hoy. ¡Hoy! ¡Llevamos años esperando!"
Q(44, (d, a) => { const th = R0(a, 'hoy', R0(a, 'hoy') + .2), tl = R0(a, 'llevamos'); return { amb: 'jardin', fov: 30, atores: [AMIGO({ x: 1.4, z: -.4, eyes: [[0, 'look'], [th, 'wide']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > th ? 150 + Math.sin(u * 12) * 15 : 80, 60], lean: -6 }) }), YO({ x: .55, z: -.4, eyes: [[0, 'flat']], pose: (k) => k.pose({ armL: [12, 8], armR: [40, 10] }) })],
  extra: (c) => { const g1 = hab(c, ['DIME QUE NO VAS', 'A QUEDAR CON ELLA HOY'], 1.6, [2.0, 2.2, -.4], 50); const g2 = hab(c, ['¡HOY!'], .8, [2.0, 2.2, -.4], 90); const g3 = hab(c, ['¡LLEVAMOS AÑOS', 'ESPERANDO!'], 1.5, [2.0, 2.2, -.4], 54); const t = lw(c, ['TU MEJOR AMIGO'], 1.3, [1.4, 2.25, -.4]); return { update: (u, tt, cam) => { pop(t, u, .1, 2.2, cam); pop(g1, u, R0(a, 'dime') - .1, th - .1, cam); pop(g2, u, th - .1, tl - .1, cam); pop(g3, u, tl - .1, 99, cam); shake(cam, u > th && u < th + .4 ? .015 : 0, u); } }; },
  c: [[1.1, 1.65, 3.0], [1.1, 1.5, -.4], [1.1, 1.6, 2.6], [1.1, 1.5, -.4]], range: 3 }; });
// 45. "GTA 6 va a estar ahí mañana. Y pasado. Y dentro de un año. Ella me lo ha pedido hoy."
Q(45, (d, a) => { const te = R0(a, 'ella'); return { amb: 'jardin', fov: 30, atores: [AMIGO({ x: 1.4, z: -.4, eyes: [[0, 'look']] }), YO({ x: .55, z: -.4, eyes: [[0, 'look'], [te, 'heart']], pose: talkP })],
  extra: (c) => { const L = SEQ(c, a, [[['GTA 6 VA A ESTAR AHÍ'], 'gta', 'w', [0, 2.25, -.4], 1.9], [['MAÑANA'], 'manana', 'w', [0, 2.25, -.4], 1.0], [['Y PASADO'], 'pasado', 'w', [0, 2.25, -.4], 1.0], [['Y DENTRO DE UN AÑO'], 'dentro', 'w', [0, 2.25, -.4], 1.7], [['ELLA ME LO HA PEDIDO HOY'], 'ella', 'p', [.3, 2.25, -.4], 2.3, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[1.1, 1.65, 3.0], [1.1, 1.5, -.4], [1.1, 1.6, 2.6], [1.1, 1.5, -.4]], range: 3 }; });
// 46. Tu amigo se queda callado. Luego dice: "Vale. Pero esta noche me lo cuentas todo."
Q(46, (d, a) => { const tv = R0(a, 'vale'); return { amb: 'jardin', fov: 30, atores: [AMIGO({ x: 1.4, z: -.4, eyes: [[0, 'flat'], [tv, 'happy']], pose: (k, u) => (u > tv ? k.pose({ armL: [12, 8], armR: [100, 40] }) : k.pose()) }), YO({ x: .55, z: -.4, eyes: [[0, 'look'], [tv + .5, 'happy']] })],
  extra: (c) => { const t = lw(c, ['…'], .6, [1.4, 2.2, -.4]); const g = hab(c, ['VALE. PERO ESTA NOCHE', 'ME LO CUENTAS TODO'], 1.6, [2.0, 2.2, -.4], 50); return { update: (u, tt, cam) => { pop(t, u, .1, tv - .1, cam); pop(g, u, tv - .1, 99, cam); } }; },
  c: [[1.1, 1.65, 3.0], [1.1, 1.5, -.4], [1.1, 1.6, 2.6], [1.1, 1.5, -.4]], range: 3 }; });
// 47. 14:00
HORA(47, 14, '14:00', 'EN CASA');
// 48. Vuelves a casa. La consola te mira. Bueno, no te mira. Pero lo parece. "Solo una partida." Media hora. Una misión.
const SALA = { amb: 'sala' };
const SALATV = (c, kind) => { mueble(c, 0, -2.5, 2.4); return tele(c, [0, 1.4, -2.4], 1.9, kind); };
Q(48, (d, a) => { const tm = R0(a, 'mira'), ts = R0(a, 'solo'), th = R0(a, 'hora'), tu = R0(a, 'mision'); return { ...SALA, fov: 32, atores: [YO({ x: -.9, z: .2, eyes: [[0, 'look'], [tm, 'lookl'], [ts, 'happy']], pose: (k, u) => k.pose({ head: u > tm && u < ts ? -12 : 0 }) })],
  extra: (c) => { const tv = SALATV(c, 'inicio'); const e2 = lab(c, ['( O  O )'], .7, [0, 1.45, -2.3], { bg: '#00000000', fg: '#FFFFFF', size: 90 }); const L = SEQ(c, a, [[['LA CONSOLA TE MIRA'], 'consola', 'w', [.4, 2.65, -2.2], 1.9], [['“SOLO UNA PARTIDA…”'], 'solo', 'p', [-.9, 2.2, .2], 1.8], [['MEDIA HORA'], 'hora', 'w', [-.9, 2.2, .2], 1.1], [['UNA MISIÓN'], 'mision', 'w', [-.9, 2.2, .2], 1.1, 1]]); return { update: (u, tt, cam) => { tv.userData.upd(u); pop(e2, u, tm - .2, ts, cam); L(u, cam); } }; },
  c: [[-.3, 1.7, 3.2], [-.3, 1.4, -.8], [-.3, 1.65, 2.7], [-.3, 1.4, -.8]], range: 3.5 }; });
// 49. Y claro: una misión lleva a otra. Y a otra. Y cuando miras el reloj…
Q(49, (d, a) => { const to = R0(a, 'otra'), tr = R0(a, 'reloj'); return { ...SALA, fov: 32, atores: [YO({ x: 0, z: .5, eyes: [[0, 'wide']], pose: juega })],
  extra: (c, s, A) => { const tv = SALATV(c, 'coche'); const m = mandoM(); c.add(m); const h = contador(c, [1.5, 2.3, -1.0], .9, (u) => { const mm = Math.min(160, Math.floor(u / Math.max(d - .3, 1) * 160)); return `${14 + Math.floor(mm / 60)}:${String(mm % 60).padStart(2, '0')}`; }, { w: 420, h: 200, size: 120 }); const L = SEQ(c, a, [[['OTRA MISIÓN'], 'otra', 'y', [-1.3, 2.3, -.8], 1.2], [['Y OTRA'], R0(a, 'otra', to + .3), 'y', [-1.3, 2.3, -.8], .9, 1]]); return { update: (u, tt, cam) => { tv.userData.upd(u, 'coche'); mandoEn(m, A[0]); h.userData.upd(u); L(u, cam); } }; },
  c: [[1.2, 1.7, 3.2], [0, 1.4, -1.0], [1.0, 1.65, 2.8], [0, 1.4, -1.0]], range: 3.5 }; });
// 50. Son las cinco menos veinte. ¡Las cinco menos veinte!
Q(50, (d, a) => { const t2 = R0(a, 'las', 1.5); return { ...SALA, fov: 30, atores: [YO({ x: 0, z: .2, eyes: [[0, 'wide']], pose: (k, u) => (u > t2 ? panicoP(k, u) : k.pose({ armL: [55, 60], armR: [55, 60] })) })],
  extra: (c) => { SALATV(c, 'pausa').userData.upd(0, 'pausa'); const ck = lab(c, ['16:40'], 1.2, [0, 2.3, .1], { bg: '#C9361F', fg: '#fff', size: 120, w: 520, h: 200 }); return { update: (u, tt, cam) => { pop(ck, u, .1, 99, cam); ck.scale.multiplyScalar(u > t2 ? 1 + Math.abs(Math.sin(u * 10)) * .12 : 1); shake(cam, u > t2 ? .018 : 0, u); } }; },
  c: [[0, 1.65, 3.0], [0, 1.6, .2], [0, 1.65, 2.4], [0, 1.6, .2]], range: 3 }; });
// 51. Sales corriendo. Sin peinarte. Con la camiseta del revés.
Q(51, (d, a) => { const tp = R0(a, 'peinarte'), tr = R0(a, 'reves'); return { amb: 'barrio', fov: 32, atores: [YO({ x: -2.5, z: -.3, eyes: [[0, 'wide']], move: (u) => [lerp(-3.0, 3.0, u / Math.max(d, 1)), 0, -.3], pose: corre })],
  extra: (c, s, A) => { const mc = mechon(A[0]); const L = SEQ(c, a, [[['¡SALES CORRIENDO!'], 0, 'y', [0, 2.6, -.6], 1.7], [['SIN PEINARTE'], 'peinarte', 'w', [0, 2.6, -.6], 1.3], [['CAMISETA DEL REVÉS'], 'reves', 'r', [0, 2.6, -.6], 1.9, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  cam: [[0, [-2.0, 1.6, 3.2], [-2.0, 1.3, -.3]], [d, [2.0, 1.6, 3.2], [2.0, 1.3, -.3]]], f: [[0, 3.5], [d, 3.5]], range: 4, k: 1 }; });
// 52. 17:00
HORA(52, 17, '17:00', 'EL PARQUE');
// 53. Llegas sin aliento. Ella ya está en el banco. Te mira de arriba abajo.
const BANCO = { amb: 'parque', fov: 30 };
const CAMB = [[-3.45, 1.6, 1.5], [-3.45, 1.45, -1.8], [-3.45, 1.6, 1.1], [-3.45, 1.45, -1.8]];
Q(53, (d, a) => { const tb = R0(a, 'banco'), tm = R0(a, 'mira'); return { amb: 'parque', fov: 32, atores: [ELA({ x: -3.0, z: -1.8, eyes: [[0, 'look'], [tm, 'lookl']], pose: (k, u) => k.pose({ head: u > tm ? Math.sin(u * 3) * 10 : 0 }) }), YO({ x: -3.9, z: -1.8, eyes: [[0, 'flat']], move: (u) => [lerp(-1.0, -3.9, smooth(0, 1.6, u)), 0, lerp(.4, -1.6, smooth(0, 1.6, u))], pose: (k, u) => (u < 1.6 ? corre(k, u) : k.pose({ lean: 12, armL: [20, 10], armR: [20, 10], bob: Math.abs(Math.sin(u * 8)) * .02 })) })],
  extra: (c, s, A) => { mechon(A[1]); const L = SEQ(c, a, [[['SIN ALIENTO'], 0, 'w', [-3.9, 2.2, -1.6], 1.2], [['YA ESTÁ EN EL BANCO'], 'banco', 'p', [-3.0, 2.25, -1.7], 1.9], [['DE ARRIBA ABAJO…'], 'mira', 'w', [-3.0, 2.25, -1.7], 1.6, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[-2.6, 1.75, 2.4], [-3.0, 1.35, -1.4], [-3.0, 1.65, 1.7], [-3.4, 1.35, -1.6]], range: 3.5 }; });
// 54. Y se ríe: "Llevas la camiseta del revés."
Q(54, (d, a) => ({ ...BANCO, atores: [YO({ x: -3.9, z: -1.8, eyes: [[0, 'wide']] }), ELA({ x: -3.0, z: -1.8, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [95, 0], bob: Math.abs(Math.sin(u * 12)) * .02 }) })],
  extra: (c, s, A) => { mechon(A[0]); const r = rubor(A[0]); const g = hab(c, ['LLEVAS LA CAMISETA', 'DEL REVÉS'], 1.4, [-2.6, 2.15, -1.7], 54); return { update: (u, tt, cam) => { r(smooth(1, 1.6, u)); pop(g, u, R0(a, 'llevas') - .1, 99, cam); } }; },
  c: CAMB, range: 3 }));
// 55. Quieres que te trague la tierra.
Q(55, (d, a) => ({ ...BANCO, atores: [YO({ x: -3.9, z: -1.8, eyes: [[0, 'shut']], move: (u) => [-3.9, -smooth(.3, 1.8, u) * .25, -1.8], pose: (k) => k.pose({ armL: [150, 80], armR: [150, 80], head: -12 }) }), ELA({ x: -3.0, z: -1.8, eyes: [[0, 'happy']] })],
  extra: (c, s, A) => { mechon(A[0]); const r = rubor(A[0]); r(1); const t = lab(c, ['TRÁGAME, TIERRA'], 1.5, [-3.45, 2.2, -1.7], RED); return { update: (u, tt, cam) => pop(t, u, .1, 99, cam) }; },
  c: CAMB, range: 3 }));
// 56. Pero ella dice: "Pensaba que no ibas a venir. Hoy sale GTA 6, ¿no?"
Q(56, (d, a) => { const th = R0(a, 'hoy'); return { ...BANCO, atores: [YO({ x: -3.9, z: -1.8, eyes: [[0, 'look']] }), ELA({ x: -3.0, z: -1.8, eyes: [[0, 'look']], pose: talkP })],
  extra: (c, s, A) => { mechon(A[0]); const g1 = hab(c, ['PENSABA QUE', 'NO IBAS A VENIR'], 1.4, [-2.6, 2.15, -1.7], 54); const g2 = hab(c, ['HOY SALE', 'GTA 6, ¿NO?'], 1.3, [-2.6, 2.15, -1.7], 58); return { update: (u, tt, cam) => { pop(g1, u, R0(a, 'pensaba') - .1, th - .1, cam); pop(g2, u, th - .1, 99, cam); } }; },
  c: CAMB, range: 3 }; });
// 57. Te quedas helado. "¿Tú… sabes lo de GTA 6?"
Q(57, (d, a) => { const ts = R0(a, 'sabes'); return { ...BANCO, atores: [YO({ x: -3.9, z: -1.8, eyes: [[0, 'wide']], pose: (k, u) => (u > ts ? k.pose({ armL: [12, 8], armR: [95, -20] }) : k.pose()) }), ELA({ x: -3.0, z: -1.8, eyes: [[0, 'happy']] })],
  extra: (c, s, A) => { mechon(A[0]); const t = lw(c, ['TE QUEDAS HELADO'], 1.5, [-3.9, 2.2, -1.6]); const g = hab(c, ['¿TÚ… SABES', 'LO DE GTA 6?'], 1.3, [-4.3, 2.15, -1.7], 58); return { update: (u, tt, cam) => { pop(t, u, .1, ts - .4, cam); pop(g, u, ts - .4, 99, cam); } }; },
  c: CAMB, range: 3, look: { exposure: 1.0, bloom: .35 } }; });
// 58. Ella saca el móvil. En el fondo de pantalla: el logo del juego.
Q(58, (d, a) => { const tf = R0(a, 'fondo'); return { amb: 'gris', fov: 28, k: 1, atores: [],
  extra: (c) => { const ph = movil(['GTA 6', '♥ ♥ ♥'], { hora: '17:06', bg: '#5A2A6A' }); ph.scale.setScalar(1.35); ph.position.set(0, 1.35, -.5); c.add(ph); const t = lab(c, ['SU FONDO DE PANTALLA'], 1.9, [0, 2.4, -.3], NEON); const b = brillos(c, 12, '#FF8AB0'); return { update: (u, tt, cam) => { pop(t, u, tf - .2, 99, cam); b(u, [0, 1.5, -.3, 1.0], u > tf ? 1 : 0); ph.rotation.y = Math.sin(u) * .1; } }; },
  c: [[0, 1.5, 4.2], [0, 1.5, -.5], [0, 1.5, 3.6], [0, 1.5, -.5]], range: 2, blur: 4, look: { bloom: .5 } }; });
// 59. "Llevo esperándolo desde el primer tráiler. Pero mi consola se rompió… no quería pasarme el día en casa viendo cómo jugaba todo el mundo menos yo."
Q(59, (d, a) => { const tc = R0(a, 'consola'), tq = R0(a, 'queria'), tm = R0(a, 'menos'); return { ...BANCO, atores: [YO({ x: -3.9, z: -1.8, eyes: [[0, 'look'], [tc, 'wide']] }), ELA({ x: -3.0, z: -1.8, eyes: [[0, 'happy'], [tc, 'sad']], pose: talkP })],
  extra: (c, s, A) => { mechon(A[0]); const g1 = hab(c, ['DESDE EL', 'PRIMER TRÁILER'], 1.3, [-2.6, 2.15, -1.7], 58); const g2 = hab(c, ['MI CONSOLA', 'SE ROMPIÓ'], 1.3, [-2.6, 2.15, -1.7], 58); const g3 = hab(c, ['TODO EL MUNDO', 'JUGANDO… MENOS YO'], 1.5, [-2.6, 2.15, -1.7], 52); return { update: (u, tt, cam) => { pop(g1, u, .1, tc - .2, cam); pop(g2, u, tc - .2, tq - .1, cam); pop(g3, u, tq - .1, 99, cam); } }; },
  c: CAMB, range: 3 }; });
// 60. "Así que pensé… por lo menos lo paso con alguien que me cae bien."
Q(60, (d, a) => { const tb = R0(a, 'bien'); return { ...BANCO, atores: [YO({ x: -3.9, z: -1.8, eyes: [[0, 'look'], [tb, 'heart']] }), ELA({ x: -3.0, z: -1.8, eyes: [[0, 'look'], [tb - .3, 'happy']], pose: talkP })],
  extra: (c, s, A) => { mechon(A[0]); const r = rubor(A[1]); const g = hab(c, ['…CON ALGUIEN', 'QUE ME CAE BIEN'], 1.4, [-2.6, 2.15, -1.7], 54); const mp = mariposas(c, 10); return { update: (u, tt, cam) => { pop(g, u, R0(a, 'alguien') - .5, 99, cam); r(smooth(tb - .5, tb, u)); mp(u, [-3.9, 1.9, -1.5], cam, u > tb ? 1 : 0); } }; },
  c: CAMB, range: 3, look: { bloom: .45 } }; });
// 61. 18:00
HORA(61, 18, '18:00', 'HABLANDO');
// 62. Os pasáis una hora hablando del juego. De las teorías. De los tráileres. De qué misión haría cada uno primero.
Q(62, (d, a) => ({ ...BANCO, ambo: { dusk: true }, atores: [YO({ x: -3.9, z: -1.8, eyes: [[0, 'happy']], pose: talkP }), ELA({ x: -3.0, z: -1.8, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [70, 80], armR: [12, 8], bob: Math.abs(Math.sin(u * 9)) * .02 }) })],
  extra: (c) => { const L = SEQ(c, a, [[['UNA HORA HABLANDO'], 0, 'y', [-3.45, 2.25, -1.7], 1.7], [['LAS TEORÍAS'], 'teorias', 'w', [-3.45, 2.25, -1.7], 1.3], [['LOS TRÁILERES'], 'traileres', 'w', [-3.45, 2.25, -1.7], 1.4], [['¿QUÉ MISIÓN PRIMERO?'], 'mision', 'p', [-3.45, 2.25, -1.7], 1.9, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[-3.45, 1.7, 2.2], [-3.45, 1.4, -1.8], [-3.45, 1.65, 1.8], [-3.45, 1.4, -1.8]], range: 3, look: { bloom: .45 } }));
// 63. Ella sabe más que tú. Mucho más. Tu crush es igual de friki que tú.
Q(63, (d, a) => { const tf = R0(a, 'friki'); return { ...BANCO, ambo: { dusk: true }, atores: [YO({ x: -3.9, z: -1.8, eyes: [[0, 'wide'], [tf, 'heart']] }), ELA({ x: -3.0, z: -1.8, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [100 + Math.sin(u * 6) * 20, 30] }) })],
  extra: (c) => { const L = SEQ(c, a, [[['SABE MÁS QUE TÚ'], 0, 'w', [-3.0, 2.25, -1.7], 1.5], [['MUCHO MÁS'], 'mucho', 'y', [-3.0, 2.25, -1.7], 1.1], [['¡TU CRUSH ES IGUAL DE FRIKI!'], 'friki', 'p', [-3.45, 2.25, -1.7], 2.5, 1]]); const b = brillos(c, 10, '#FFB0C0'); return { update: (u, tt, cam) => { L(u, cam); b(u, [-3.45, 1.6, -1.6, .8], u > tf ? 1 : 0); } }; },
  c: CAMB, range: 3, look: { bloom: .45 } }; });
// 64. 2000: Arthur Aron. Atadas por la muñeca y el tobillo, llevar un cojín por una carrera de obstáculos.
Q(64, (d, a) => { const tn = R0(a, 'nueva'), tt = R0(a, 'atadas'), tc = R0(a, 'cojin'), to = R0(a, 'obstaculos'); const mv = (x0) => (u) => [x0 + lerp(-1.4, 1.4, smooth(tt, d - .3, u)), 0, -.3]; const paso = (k, u) => (u > tt ? k.walk(u * 1.4) : k.pose()); return { amb: 'lab', fov: 32, atores: [EXTRA(0, { x: -1.6, z: -.3, eyes: [[0, 'look'], [tt, 'happy']], move: mv(-.22), pose: (k, u) => { paso(k, u); k.pose({ armR: [60, 80] }); } }), EXTRA(1, { x: -1.2, z: -.3, eyes: [[0, 'lookl'], [tt, 'happy']], move: mv(.22), pose: (k, u) => { paso(k, u); k.pose({ armL: [60, 80] }); } }), CIENT(2, { x: 2.6, z: -1.2, eyes: [[0, 'lookl']], pose: point })],
  extra: (c, s, A) => { colchoneta(c, -.2, -.3, 4.2); for (const x of [-.4, .8]) valla(c, x, -.3); const cj = cojin(); c.add(cj); const cu = box(.5, .05, .05, std('#C9A050'), 0, 0, 0, false); c.add(cu); const L = SEQ(c, a, [[['ARTHUR ARON'], 0, 'w', [-1.0, 2.5, -.4], 1.3], [['ALGO NUEVO Y EMOCIONANTE'], 'nueva', 'y', [-.2, 2.5, -.4], 2.3], [['ATADOS: MUÑECA Y TOBILLO'], 'atadas', 'w', [-.2, 2.5, -.4], 2.3], [['¡CON UN COJÍN!'], 'cojin', 'p', [-.2, 2.5, -.4], 1.4], [['CARRERA DE OBSTÁCULOS'], 'obstaculos', 'y', [-.2, 2.5, -.4], 2.1, 1]]);
    return { update: (u, tt2, cam) => { const p0 = new THREE.Vector3(), p1 = new THREE.Vector3(); A[0].torso.getWorldPosition(p0); A[1].torso.getWorldPosition(p1); cj.position.set((p0.x + p1.x) / 2, p0.y + .05, p0.z + .25); cj.visible = u > tc - .3; cu.position.set((p0.x + p1.x) / 2, .15, p0.z); L(u, cam); } }; },
  c: [[0, 1.8, 5.2], [0, 1.35, -.4], [0, 1.75, 4.8], [0, 1.35, -.4]], range: 4, k: 1 }; });
// 65. Otras parejas hicieron algo aburrido.
Q(65, (d, a) => ({ amb: 'lab', fov: 32, atores: [EXTRA(3, { x: -.35, z: -.3, eyes: [[0, 'flat']], move: (u) => [lerp(-.6, .2, u / Math.max(d, 1)) - .35, 0, -.3], pose: (k, u) => k.walk(u * .7) }), EXTRA(5, { x: .35, z: -.3, eyes: [[0, 'flat']], move: (u) => [lerp(-.6, .2, u / Math.max(d, 1)) + .35, 0, -.3], pose: (k, u) => k.walk(u * .7) })],
  extra: (c) => { colchoneta(c, 0, -.3, 3, '#8A8E98'); const t = lw(c, ['ALGO ABURRIDO'], 1.4, [0, 2.25, -.3]); const z = zzz(c); return { update: (u, tt, cam) => { pop(t, u, .1, 99, cam); z(u, [.6, 1.8, -.3], cam); } }; },
  c: [[0, 1.65, 3.2], [0, 1.4, -.3], [0, 1.6, 2.8], [0, 1.4, -.3]], range: 3, look: { exposure: .95 } }));
// 66. Las que hicieron la actividad emocionante estaban más contentas con su relación. Compartir algo nuevo y emocionante une.
Q(66, (d, a) => { const tu = R0(a, 'compartir'); return { amb: 'gris', fov: 30, k: 1, atores: [EXTRA(0, { x: -2.15, z: -.3, eyes: [[0, 'happy']] }), EXTRA(1, { x: -1.6, z: -.3, eyes: [[0, 'happy']] })],
  extra: (c) => { const b = barras(c, [['ALGO NUEVO Y\nEMOCIONANTE', .88, '#E8447A'], ['ALGO\nABURRIDO', .5, '#8A8E98']], 2.3, [.6, 1.55, -.5], { title: 'CONTENTOS CON SU RELACIÓN' }); const t = lab(c, ['COMPARTIR ALGO NUEVO UNE'], 2.3, [0, 2.55, -.4], PINK); const h = corazon(c, .4); h.position.set(-1.88, 2.2, -.3); return { update: (u, tt, cam) => { pop(b, u, .1, 99, cam); pop(t, u, tu - .2, 99, cam); h.scale.setScalar(latido(u)); pointer(h, cam); } }; },
  c: [[-.3, 1.6, 4.4], [-.3, 1.55, -.4], [-.3, 1.6, 3.9], [-.3, 1.55, -.4]], range: 3 }; });
// 67. Y vosotros dos estáis compartiendo una de las cosas que más os emocionan.
Q(67, (d, a) => ({ ...BANCO, ambo: { dusk: true }, atores: [YO({ x: -3.8, z: -1.8, eyes: [[0, 'happy']], pose: talkP }), ELA({ x: -3.1, z: -1.8, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [70, 80], armR: [12, 8], bob: Math.abs(Math.sin(u * 9)) * .02 }) })],
  extra: (c) => { const t = lab(c, ['LO ESTÁIS COMPARTIENDO'], 2.1, [-3.45, 2.25, -1.7], PINK); const b = brillos(c, 12, '#FFD8A0'); return { update: (u, tt, cam) => { pop(t, u, .3, 99, cam); b(u, [-3.45, 1.6, -1.6, .9]); } }; },
  c: [[-3.45, 1.75, 2.6], [-3.45, 1.4, -1.8], [-3.45, 1.7, 2.1], [-3.45, 1.4, -1.8]], range: 3, look: { bloom: .5 } }));
// 68. 19:00
HORA(68, 19, '19:00', 'UNA IDEA');
// 69. Entonces se te ocurre: "¿Quieres venir a jugar a mi casa? Juego un rato y luego te dejo el mando."
Q(69, (d, a) => { const tj = R0(a, 'juego'); return { ...BANCO, ambo: { dusk: true }, atores: [YO({ x: -3.9, z: -1.8, eyes: [[0, 'happy']], pose: talkP }), ELA({ x: -3.0, z: -1.8, eyes: [[0, 'look']] })],
  extra: (c) => { const t = lw(c, ['SE TE OCURRE…'], 1.3, [-3.9, 2.25, -1.6]); const g1 = hab(c, ['¿QUIERES VENIR A', 'JUGAR A MI CASA?'], 1.5, [-4.3, 2.15, -1.7], 54); const g2 = hab(c, ['JUEGO UN RATO Y', 'LUEGO TE DEJO EL MANDO'], 1.6, [-4.3, 2.15, -1.7], 50); return { update: (u, tt, cam) => { pop(t, u, .1, R0(a, 'quieres') - .2, cam); pop(g1, u, R0(a, 'quieres') - .2, tj - .1, cam); pop(g2, u, tj - .1, 99, cam); } }; },
  c: CAMB, range: 3, look: { bloom: .45 } }; });
// 70. Ella se lo piensa un segundo. "Solo si me dejas conducir."
Q(70, (d, a) => { const ts = R0(a, 'solo'); return { ...BANCO, ambo: { dusk: true }, atores: [YO({ x: -3.9, z: -1.8, eyes: [[0, 'look'], [ts + .8, 'happy']] }), ELA({ x: -3.0, z: -1.8, eyes: [[0, 'lookl'], [ts, 'smug']], pose: (k, u) => (u < ts ? k.pose({ armL: [12, 8], armR: [110, 120], head: 10 }) : talkP(k, u)) })],
  extra: (c) => { const t = lw(c, ['UN SEGUNDO…'], 1.1, [-3.0, 2.25, -1.6]); const g = hab(c, ['SOLO SI ME', 'DEJAS CONDUCIR'], 1.4, [-2.6, 2.15, -1.7], 56); return { update: (u, tt, cam) => { pop(t, u, .1, ts - .2, cam); pop(g, u, ts - .2, 99, cam); } }; },
  c: CAMB, range: 3, look: { bloom: .45 } }; });
// 71. 20:00
HORA(71, 20, '20:00', 'TU CASA');
// 72. Tu madre os ve entrar y levanta las cejas. Tú haces como que no lo ves.
const MADRE = (o = {}) => MUJ(4, { ...o });
Q(72, (d, a) => { const tc = R0(a, 'cejas'), th = R0(a, 'haces'); return { ...SALA, ambo: { night: true }, fov: 32, atores: [MADRE({ x: 1.6, z: -.6, eyes: [[0, 'look'], [tc - .2, 'smug']], pose: (k) => k.pose({ armL: [60, 70], armR: [60, 70], head: 6 }) }), YO({ x: -.6, z: -.2, eyes: [[0, 'look'], [th, 'shut']], move: (u) => [lerp(-2.4, -.6, smooth(0, 1.5, u)), 0, -.2], pose: (k, u) => (u < 1.5 ? k.walk(u * 2) : k.pose({ head: u > th ? 12 : 0 })) }), ELA({ x: .2, z: -.4, eyes: [[0, 'happy']], move: (u) => [lerp(-1.6, .2, smooth(0, 1.6, u)), 0, -.4], pose: (k, u) => (u < 1.6 ? k.walk(u * 2) : k.pose({ armL: [12, 8], armR: [150, 20] })) })],
  extra: (c) => { const e = lab(c, ['¬ ¬'], .55, [1.6, 2.2, -.6], { bg: '#FBF7EC', fg: '#2A2A34', size: 90, w: 300 }); const L = SEQ(c, a, [[['TU MADRE'], 0, 'w', [1.6, 2.25, -.6], 1.0], [['LEVANTA LAS CEJAS'], 'cejas', 'y', [1.6, 2.25, -.6], 1.7], [['TÚ, COMO SI NADA'], 'haces', 'w', [-.6, 2.25, -.2], 1.6, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[0, 1.7, 3.6], [.2, 1.4, -.4], [0, 1.65, 3.1], [.2, 1.4, -.4]], range: 3.5 }; });
// 73. Os sentáis en el sofá. Ella con el mando. Tú con las patatas. Es mucho más divertido verla jugar a ella.
const SOFA = (c) => { const s = sofa('#3A5A9A'); s.position.set(0, 0, .3); c.add(s); };
const SENT = { y: -.2, z: .3 };
Q(73, (d, a) => { const tm = R0(a, 'mando'), tp = R0(a, 'patatas'), tv = R0(a, 'divertido'); return { ...SALA, ambo: { night: true }, fov: 32, atores: [ELA({ x: -.45, ...SENT, eyes: [[0, 'wide']], pose: (k, u) => { sitP(k); juega(k, u); } }), YO({ x: .45, ...SENT, eyes: [[0, 'look'], [tv, 'heart']], pose: (k) => { sitP(k); k.pose({ armL: [60, 70], armR: [12, 8], head: 10 }); } })],
  extra: (c, s, A) => { SOFA(c); const l = new THREE.PointLight('#FF8AB0', 6, 5, 1.6); l.position.set(0, 1.3, 2.2); c.add(l); const m = mandoM(); c.add(m); const bp = bolsaP(); c.add(bp); const L = SEQ(c, a, [[['ELLA: EL MANDO'], 'mando', 'p', [-.45, 2.0, .3], 1.4], [['TÚ: LAS PATATAS'], 'patatas', 'y', [.45, 2.0, .3], 1.4], [['MÁS DIVERTIDO VERLA JUGAR'], 'divertido', 'w', [0, 2.0, .3], 2.3, 1]]); return { update: (u, tt, cam) => { mandoEn(m, A[0]); const p = hand(A[1]); bp.position.set(p.x - .05, p.y - .2, p.z + .1); l.intensity = 5 + Math.sin(u * 7) * 2; L(u, cam); } }; },
  c: [[0, 1.4, 3.4], [0, 1.1, .3], [0, 1.4, 2.9], [0, 1.1, .3]], range: 3, look: { exposure: .95, bloom: .45 } }; });
// 74. Grita en cada persecución. Se ríe cuando choca.
Q(74, (d, a) => { const tc = R0(a, 'choca'); return { ...SALA, ambo: { night: true }, fov: 34, atores: [ELA({ x: -.45, ...SENT, eyes: [[0, 'wide'], [tc, 'happy']], pose: (k, u) => { sitP(k); juega(k, u, 3); } }), YO({ x: .45, ...SENT, eyes: [[0, 'happy']], pose: (k) => { sitP(k); k.pose({ armL: [60, 70], armR: [12, 8], head: 10 }); } })],
  extra: (c, s, A) => { SOFA(c); const tv = SALATV(c, 'coche'); const m = mandoM(); c.add(m); const g1 = hab(c, ['¡AAAAH!'], 1.2, [-.9, 2.0, .3], 80); const g2 = hab(c, ['¡JAJAJA!'], 1.2, [-.9, 2.0, .3], 80); return { update: (u, tt, cam) => { tv.userData.upd(u, 'coche'); mandoEn(m, A[0]); pop(g1, u, .1, tc - .2, cam); pop(g2, u, tc - .2, 99, cam); } }; },
  c: [[1.6, 2.2, 3.6], [-.2, 1.2, -1.0], [1.3, 2.1, 3.1], [-.2, 1.2, -1.0]], range: 4, look: { exposure: .95, bloom: .5 } }; });
// 75. Te pide consejos y luego no te hace ni caso.
Q(75, (d, a) => { const tn = R0(a, 'caso'); return { ...SALA, ambo: { night: true }, fov: 32, atores: [ELA({ x: -.45, ...SENT, eyes: [[0, 'look'], [tn - .6, 'smug']], pose: (k, u) => { sitP(k); juega(k, u); } }), YO({ x: .45, ...SENT, eyes: [[0, 'look'], [tn, 'flat']], pose: (k, u) => { sitP(k); talkP(k, u); } })],
  extra: (c, s, A) => { SOFA(c); const m = mandoM(); c.add(m); const g1 = hab(c, ['¿POR DÓNDE VOY?'], 1.1, [-.9, 2.0, .3], 60); const g2 = hab(c, ['¡A LA IZQUIERDA!'], 1.1, [.9, 2.0, .3], 60); const t = lab(c, ['NI CASO'], 1.0, [-.45, 2.0, .3], RED); return { update: (u, tt, cam) => { mandoEn(m, A[0]); pop(g1, u, .1, 1.1, cam); pop(g2, u, 1.1, tn - .3, cam); pop(t, u, tn - .3, 99, cam); } }; },
  c: [[0, 1.4, 3.2], [0, 1.1, .3], [0, 1.4, 2.8], [0, 1.1, .3]], range: 3, look: { exposure: .95, bloom: .45 } }; });
// 76. 2012, Universidad Brigham Young: casi 350 parejas que jugaban a videojuegos en internet.
Q(76, (d, a) => { const tp = R0(a, '350'); const P = [[-1.5, -.3], [-.9, -.3], [.9, -.3], [1.5, -.3]]; return { amb: 'gris', fov: 32, k: 1, atores: P.map(([x, z], i) => EXTRA(i, { x, z, eyes: [[0, 'happy']], pose: (k, u) => juega(k, u + i) })),
  extra: (c, s, A) => { const M = A.map(() => { const m = mandoM(); c.add(m); return m; }); const n = contador(c, [0, 2.5, -.5], 1.4, (u) => `${Math.round(350 * smooth(tp - 1, tp + .3, u))} PAREJAS`, { w: 900, h: 200, size: 100 }); const t = lw(c, ['JUGANDO EN INTERNET'], 1.7, [0, 2.5, -.5]); return { update: (u, tt, cam) => { A.forEach((k, i) => mandoEn(M[i], k)); n.userData.upd(u); n.visible = u < R0(a, 'internet') - .3; pop(t, u, R0(a, 'internet') - .3, 99, cam); } }; },
  c: [[0, 1.6, 4.8], [0, 1.5, -.4], [0, 1.6, 4.3], [0, 1.5, -.4]], range: 3 }; });
// 77. Lo que importaba no era jugar o no jugar. Era cómo.
Q(77, (d, a) => { const tc = R0(a, 'como'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const t1 = lw(c, ['¿JUGAR O NO JUGAR?'], 1.9, [0, 1.9, -.4]); const t2 = lab(c, ['ERA CÓMO'], 1.8, [0, 1.2, -.4], ORO); return { update: (u, tt, cam) => { pop(t1, u, .1, 99, cam); pop(t2, u, tc - .2, 99, cam); } }; },
  c: [[0, 1.55, 3.6], [0, 1.55, -.4], [0, 1.55, 3.1], [0, 1.55, -.4]], range: 3 }; });
// 78. Cuando el juego los separaba, la relación sufría. Cuando lo usaban para pasar tiempo juntos, a la relación le iba mejor.
Q(78, (d, a) => { const tj = R0(a, 'cuando', 1.5); const sep = (u) => u < tj; return { amb: 'gris', fov: 32, k: 1, atores: [EXTRA(5, { x: -1.0, z: -.4, eyes: [[0, 'flat'], [tj, 'happy']], move: (u) => [sep(u) ? -1.6 : -.3, 0, -.4], pose: (k, u) => juega(k, u) }), EXTRA(0, { x: 1.0, z: -.4, eyes: [[0, 'sad'], [tj, 'happy']], move: (u) => [sep(u) ? 1.6 : .3, 0, -.4], pose: (k, u) => (sep(u) ? k.pose({ head: -12 }) : juega(k, u + 1)) })],
  extra: (c, s, A) => { const m0 = mandoM(), m1 = mandoM(); c.add(m0, m1); const w = panel(c, .08, 2.2, [0, 1.1, -.6], '#C9361F', .9); const t1 = lab(c, ['SEPARADOS: SUFRE'], 1.8, [0, 2.4, -.4], RED); const t2 = lab(c, ['JUNTOS: MEJOR'], 1.6, [0, 2.4, -.4], { bg: '#2F8A5A', fg: '#fff' }); const h = corazon(c, .45); h.position.set(0, 2.0, -.3); return { update: (u, tt, cam) => { mandoEn(m0, A[0]); mandoEn(m1, A[1]); m1.visible = !sep(u); w.visible = sep(u); pop(t1, u, .1, tj - .1, cam); pop(t2, u, tj, 99, cam); h.visible = !sep(u) && u > tj + .5; h.scale.setScalar(latido(u)); pointer(h, cam); } }; },
  c: [[0, 1.6, 4.4], [0, 1.45, -.4], [0, 1.6, 3.9], [0, 1.45, -.4]], range: 3 }; });
// 79. El problema nunca fue GTA 6. El problema habría sido usarlo para esconderte.
Q(79, (d, a) => { const te = R0(a, 'esconderte'); return { ...SALA, ambo: { night: true }, fov: 32, atores: [ELA({ x: -.45, ...SENT, eyes: [[0, 'happy']], pose: (k, u) => { sitP(k); juega(k, u); } }), YO({ x: .45, ...SENT, eyes: [[0, 'happy']], pose: (k) => { sitP(k); k.pose({ armL: [60, 70], armR: [12, 8], head: 10 }); } })],
  extra: (c, s, A) => { SOFA(c); const m = mandoM(); c.add(m); const L = SEQ(c, a, [[['EL PROBLEMA NO ERA GTA 6'], 0, 'w', [0, 2.0, .3], 2.3], [['ERA ESCONDERTE'], 'esconderte', 'p', [0, 2.0, .3], 1.6, 1]]); return { update: (u, tt, cam) => { mandoEn(m, A[0]); L(u, cam); } }; },
  c: [[0, 1.4, 3.2], [0, 1.15, .3], [0, 1.4, 2.8], [0, 1.15, .3]], range: 3, look: { exposure: .95, bloom: .45 } }; });
// 80. 22:00
HORA(80, 22, '22:00', 'EL GRUPO');
// 81. Tu móvil vibra. "¿Qué tal la cita? ¿Has jugado algo?" Les mandas una foto. Ella con el mando, en tu sofá, concentradísima.
const fotoT = () => canvasTex(512, 400, (x) => { x.fillStyle = '#3A5A9A'; x.fillRect(0, 0, 512, 400); x.fillStyle = '#6A4A8A'; x.fillRect(0, 0, 512, 170); x.fillStyle = '#111'; x.beginPath(); x.arc(256, 160, 70, 0, 7); x.fill(); x.fillStyle = '#4A2A1A'; x.beginPath(); x.ellipse(256, 175, 95, 110, 0, Math.PI, 0); x.fill(); x.fillStyle = '#111'; x.beginPath(); x.arc(256, 165, 66, 0, 7); x.fill(); x.fillStyle = '#F2C14E'; x.beginPath(); x.roundRect(186, 235, 140, 165, 30); x.fill(); x.fillStyle = '#22222A'; x.beginPath(); x.roundRect(200, 260, 112, 40, 14); x.fill(); x.fillStyle = '#fff'; x.fillRect(226, 150, 16, 6); x.fillRect(270, 150, 16, 6); });
Q(81, (d, a) => { const tq = R0(a, 'que'), tf = R0(a, 'foto'); return { amb: 'gris', fov: 28, k: 1, atores: [],
  extra: (c) => { const ch = chat(c, [-.4, 1.5, -.5], 1.15, [['l', '¿Qué tal la cita?', tq - .2], ['l', '¿Has jugado algo?', R0(a, 'jugado') - .5], ['r', '[ FOTO ]', tf]], { hora: '22:00', name: GRUPO }); const ft = cut(fotoT(), 1.2, .94); ft.position.set(1.1, 1.6, -.3); ft.renderOrder = 6; c.add(ft); const t = lw(c, ['CONCENTRADÍSIMA'], 1.5, [1.1, .9, -.2]); return { update: (u, tt, cam) => { ch.userData.upd(u); pop(ft, u, tf + .2, 99, cam); pop(t, u, R0(a, 'concentradisima') - .2, 99, cam); } }; },
  c: [[.2, 1.5, 4.3], [.2, 1.5, -.5], [.2, 1.5, 3.8], [.2, 1.5, -.5]], range: 2, blur: 4 }; });
// 82. El grupo explota: "¿¡QUÉ!?" "¿Tu crush juega a GTA?" "Eres una leyenda."
Q(82, (d, a) => { const tq = R0(a, 'que'), tc = R0(a, 'crush'), tl = R0(a, 'leyenda'); return { amb: 'gris', fov: 28, k: 1, atores: [],
  extra: (c) => { const ch = chat(c, [0, 1.5, -.5], 1.15, [['r', '[ FOTO ]', 0], ['l', '¿¡QUÉ!?', tq - .2], ['l', '¿Tu crush juega a GTA?', tc - .8], ['l', 'Eres una leyenda.', tl - .6]], { hora: '22:01', name: GRUPO }); const t = lab(c, ['¡EL GRUPO EXPLOTA!'], 1.6, [1.15, 2.45, -.3], RED); const b = brillos(c, 14, '#FFE27A'); return { update: (u, tt, cam) => { ch.userData.upd(u); pop(t, u, .1, 99, cam); b(u, [0, 1.6, -.3, 1.2], u > tl ? 1 : 0); shake(cam, u > tq && u < tq + .4 ? .02 : 0, u); } }; },
  c: [[0, 1.5, 4.3], [0, 1.5, -.5], [0, 1.5, 3.8], [0, 1.5, -.5]], range: 2, blur: 4 }; });
// 83. 23:00
HORA(83, 23, '23:00', 'LA PUERTA');
// 84. Ella se tiene que ir. En la puerta, se gira: "Mañana… ¿seguimos con la partida?"
Q(84, (d, a) => { const tg = R0(a, 'gira'); return { ...NOCHEB, fov: 30, atores: [ELA({ x: .5, z: -.6, eyes: [[0, 'lookl'], [tg, 'happy']], pose: (k, u) => k.pose({ head: u > tg ? 0 : -15 }) }), YO({ x: -.5, z: -.9, eyes: [[0, 'look']] })],
  extra: (c) => { portal(c); calida(c, [0, 2.6, -.5], 3, 5); const g = hab(c, ['MAÑANA…', '¿SEGUIMOS CON', 'LA PARTIDA?'], 1.4, [.8, 2.2, -.6], 50); return { update: (u, tt, cam) => pop(g, u, R0(a, 'manana') - .2, 99, cam) }; },
  c: [[0, 1.6, 2.6], [0, 1.45, -.7], [0, 1.6, 2.2], [0, 1.45, -.7]], range: 3, look: NOCHE }; });
// 85. "Vale. Pero mañana conduzco yo." "Ni lo sueñes." Y se va riéndose.
Q(85, (d, a) => { const tn = R0(a, 'ni'), tv = R0(a, 'va'); return { ...NOCHEB, fov: 30, atores: [ELA({ x: .5, z: -.6, eyes: [[0, 'smug'], [tv, 'happy']], move: (u) => [lerp(.5, 3.2, smooth(tv, tv + 2.5, u)), 0, lerp(-.6, -.2, smooth(tv, tv + 2.5, u))], pose: (k, u) => (u > tv ? k.walk(u * 2) : k.pose({ armL: [12, 8], armR: [100, 30] })) }), YO({ x: -.5, z: -.9, eyes: [[0, 'happy']], pose: (k, u) => (u > tv + .5 ? wave(k, u) : talkP(k, u)) })],
  extra: (c) => { portal(c); calida(c, [0, 2.6, -.5], 3, 5); const g1 = hab(c, ['VALE. PERO MAÑANA', 'CONDUZCO YO'], 1.6, [-1.1, 2.15, -.9], 52); const g2 = hab(c, ['NI LO SUEÑES'], 1.2, [1.2, 2.15, -.6], 62); const r = lab(c, ['JAJAJA'], .9, [2.2, 2.0, -.4], PINK); return { update: (u, tt, cam) => { pop(g1, u, .1, tn - .1, cam); pop(g2, u, tn - .1, tv + .3, cam); pop(r, u, tv + .4, 99, cam); } }; },
  c: [[.3, 1.6, 2.8], [.3, 1.45, -.7], [.8, 1.6, 2.5], [.8, 1.45, -.6]], range: 3, look: NOCHE }; });
// 86. Medianoche. Estás en tu cuarto. La consola encendida. La partida guardada. Podrías seguir jugando. Pero no lo haces.
Q(86, (d, a) => { const tp = R0(a, 'partida'), tn = R0(a, 'haces'); return { ...NOCHEC, fov: 32, atores: [YO({ x: -.4, z: -.4, eyes: [[0, 'look'], [tn - .5, 'happy']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u < tn - .6 ? 55 : 12, 60] }) })],
  extra: (c, s, A) => { const tv = CUARTOTV(c, 'pausa'); const m = mandoM(); c.add(m); const L = SEQ(c, a, [[['MEDIANOCHE'], 0, 'y', [-.4, 2.25, -.4], 1.3], [['PODRÍAS SEGUIR JUGANDO'], 'podrias', 'w', [-.4, 2.25, -.4], 2.1], [['PERO NO'], 'haces', 'p', [-.4, 2.25, -.4], 1.0, 1]]); return { update: (u, tt, cam) => { tv.userData.upd(u, u < tp ? 'inicio' : 'pausa'); mandoEn(m, A[0]); m.visible = u < tn - .6; L(u, cam); } }; },
  c: [[0, 1.65, 3.2], [.2, 1.4, -.7], [0, 1.6, 2.7], [.2, 1.4, -.7]], range: 3, look: NLOOK }; });
// 87. Te tumbas en la cama y miras el techo. Sonriendo como un tonto.
Q(87, (d, a) => { const ts = R0(a, 'sonriendo'); return { ...NOCHEC, fov: 30, atores: [DORM(YO, { x: -.7, z: -1.0, y: 1.08, eyes: [[0, 'look'], [ts, 'happy']] })],
  extra: (c) => { const t = lp(c, ['SONRIENDO COMO UN TONTO'], 2.0, [-.8, 2.0, -.9]); const b = brillos(c, 12, '#FFB0C0'); const h = corazon(c, .35); h.position.set(-.4, 1.55, -.9); return { update: (u, tt, cam) => { pop(t, u, ts - .2, 99, cam); b(u, [-1.0, 1.5, -.9, .8], u > ts ? 1 : 0); h.visible = u > ts; h.scale.setScalar(latido(u, 100)); pointer(h, cam); } }; },
  c: [[-.6, 2.3, 3.0], [-.8, 1.0, -1.0], [-.6, 2.2, 2.6], [-.8, 1.0, -1.0]], range: 3, look: NLOOK }; });
// 88. Has jugado muchas menos horas que tus amigos. Vas muy atrasado. Mañana te van a destripar media historia.
Q(88, (d, a) => { const ta = R0(a, 'atrasado'), td = R0(a, 'destripar'); return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: -1.8, z: -.3, eyes: [[0, 'look'], [ta, 'flat']] })],
  extra: (c) => { const b = barras(c, [['TUS\nAMIGOS', .95, '#8AA8C8'], ['TÚ', .18, '#43C4B4']], 2.2, [.5, 1.55, -.5], { title: 'HORAS JUGADAS' }); const L = SEQ(c, a, [[['VAS MUY ATRASADO'], 'atrasado', 'w', [.5, 2.55, -.4], 1.7], [['SPOILERS A LA VISTA'], 'destripar', 'r', [.5, 2.55, -.4], 1.9, 1]]); return { update: (u, tt, cam) => { pop(b, u, .1, 99, cam); L(u, cam); } }; },
  c: [[-.3, 1.6, 4.2], [-.3, 1.55, -.4], [-.3, 1.6, 3.7], [-.3, 1.55, -.4]], range: 3 }; });
// 89. Y no te importa nada.
Q(89, (d, a) => ({ ...NOCHEC, fov: 30, atores: [DORM(YO, { x: -.7, z: -1.0, y: 1.08, eyes: [[0, 'happy']] })],
  extra: (c) => { const t = lab(c, ['NO TE IMPORTA NADA'], 1.8, [-.8, 2.0, -.9], PINK); return { update: (u, tt, cam) => pop(t, u, .1, 99, cam) }; },
  c: [[-.6, 2.3, 2.9], [-.8, 1.0, -1.0], [-.6, 2.25, 2.6], [-.8, 1.0, -1.0]], range: 3, look: NLOOK }));
// 90. GTA 6 ha tardado más de 13 años en llegar desde GTA 5. Y va a estar ahí mucho tiempo.
Q(90, (d, a) => { const t13 = R0(a, '13'), tm = R0(a, 'mucho'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const y = contador(c, [0, 1.7, -.4], 1.8, (u) => `${2013 + Math.round(13 * smooth(t13 - 1.2, t13 + .6, u))}`, { w: 700, h: 260, size: 170 }); const s = lw(c, ['+13 AÑOS DESDE GTA 5'], 2.0, [0, .95, -.3]); const m = lab(c, ['Y SEGUIRÁ AHÍ'], 1.5, [0, 2.35, -.4], ORO); return { update: (u, tt, cam) => { y.userData.upd(u); pop(s, u, t13 - .2, 99, cam); pop(m, u, tm - .5, 99, cam); } }; },
  c: [[0, 1.65, 3.8], [0, 1.65, -.4], [0, 1.65, 3.3], [0, 1.65, -.4]], range: 3 }; });
// 91. Pero hay oportunidades que pasan una sola vez. Un mensaje. Un "¿te apetece quedar?". Un día que podría haber sido uno más.
Q(91, (d, a) => { const tm = R0(a, 'mensaje'), tq = R0(a, 'apetece'), td = R0(a, 'dia'); return { amb: 'gris', fov: 28, k: 1, atores: [],
  extra: (c) => { const ch = chat(c, [-.6, 1.5, -.5], 1.0, [['l', 'Oye… ¿te apetece quedar mañana por la tarde?', tq - .3]], { hora: '22:47', name: 'MI CRUSH ♥' }); const L = SEQ(c, a, [[['UNA SOLA VEZ'], 0, 'p', [.95, 2.0, -.4], 1.3], [['UN MENSAJE'], 'mensaje', 'w', [.95, 2.0, -.4], 1.2], [['¿TE APETECE QUEDAR?'], 'apetece', 'y', [.95, 2.0, -.4], 1.7], [['UN DÍA CUALQUIERA'], 'dia', 'w', [.95, 2.0, -.4], 1.6, 1]]); return { update: (u, tt, cam) => { ch.userData.upd(u); L(u, cam); } }; },
  c: [[.2, 1.5, 4.0], [.2, 1.5, -.5], [.2, 1.5, 3.6], [.2, 1.5, -.5]], range: 2, blur: 4 }; });
// 92. Al final, no tuviste que elegir entre tu crush y GTA 6.
Q(92, (d, a) => ({ ...SALA, ambo: { night: true }, fov: 32, atores: [ELA({ x: -.45, ...SENT, eyes: [[0, 'happy']], pose: (k, u) => { sitP(k); juega(k, u); } }), YO({ x: .45, ...SENT, eyes: [[0, 'happy']], pose: (k, u) => { sitP(k); juega(k, u + 1); } })],
  extra: (c, s, A) => { SOFA(c); const m0 = mandoM(), m1 = mandoM(); c.add(m0, m1); const t = lab(c, ['NO TUVISTE QUE ELEGIR'], 2.0, [0, 2.0, .3], PINK); const b = brillos(c, 12, '#FFD8A0'); return { update: (u, tt, cam) => { mandoEn(m0, A[0]); mandoEn(m1, A[1]); pop(t, u, R0(a, 'elegir') - .3, 99, cam); b(u, [0, 1.4, .4, 1.0]); } }; },
  c: [[0, 1.4, 3.4], [0, 1.15, .3], [0, 1.4, 2.9], [0, 1.15, .3]], range: 3, look: { exposure: .95, bloom: .5 } }));
// 93. Solo tuviste que atreverte a salir de casa.
Q(93, (d, a) => ({ amb: 'barrio', fov: 32, atores: [YO({ x: 0, z: -.3, eyes: [[0, 'happy']], move: (u) => [lerp(-1.2, .8, u / Math.max(d, 1)), 0, -.3], pose: (k, u) => k.walk(u * 1.6) })],
  extra: (c) => { const t = lab(c, ['ATRÉVETE A SALIR DE CASA'], 2.2, [0, 2.4, -.4], ORO); const b = brillos(c, 12, '#FFE27A'); return { update: (u, tt, cam) => { pop(t, u, R0(a, 'atreverte') - .2, 99, cam); b(u, [0, 1.6, -.3, 1.4]); } }; },
  c: [[0, 1.7, 3.6], [0, 1.4, -.3], [0, 1.65, 3.2], [0, 1.4, -.3]], range: 3.5, look: { bloom: .45 } }));
// 94. Y tú, ¿qué habrías hecho? ¿Crush o GTA 6? Te leo en los comentarios.
Q(94, (d, a) => { const tc = R0(a, 'crush'), tl = R0(a, 'leo'); return { amb: 'gris', fov: 30, k: 1, atores: [ELA({ x: -1.4, z: -.4, eyes: [[0, 'happy']], pose: wave })],
  extra: (c) => { const tv = tele(c, [1.4, 1.5, -.6], 1.6, 'inicio'); const q = lab(c, ['¿Y TÚ QUÉ HABRÍAS HECHO?'], 2.3, [0, 2.6, -.4], { bg: '#1E2230', fg: '#F2C14E' }); const a1 = lab(c, ['CRUSH'], 1.0, [-1.4, .85, -.2], PINK); const a2 = lab(c, ['GTA 6'], 1.0, [1.4, .85, -.2], NEON); const cm = lw(c, ['TE LEO EN LOS COMENTARIOS'], 2.3, [0, 2.6, -.4]); return { update: (u, tt, cam) => { tv.userData.upd(u); pop(q, u, .1, tl - .2, cam); pop(a1, u, tc - .2, 99, cam); pop(a2, u, tc + .4, 99, cam); pop(cm, u, tl - .2, 99, cam); } }; },
  c: [[0, 1.6, 4.4], [0, 1.6, -.4], [0, 1.6, 3.9], [0, 1.6, -.4]], range: 3, look: { bloom: .45 } }; });
