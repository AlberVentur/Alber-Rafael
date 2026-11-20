// "¿Y si pudieras leer la mente de tu crush durante un día?" — horizontal 1280x720, ~8:42
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
const Q = (i, fn) => { const a = S[i], b = end(i), d = Math.min(b, 522.5) - a; CENAS.push([(x, y) => plano(x, y, mk(fn(d, a), d)), a, b]); };
const Qt = (a, b, fn) => { const d = Math.min(b, 522.5) - a; CENAS.push([(x, y) => plano(x, y, mk(fn(d, a), d)), a, b]); };
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

// ===================== CENAS =====================
const CAMC = [[0, 1.6, 3.2], [0, 1.45, -.3], [0, 1.6, 2.7], [0, 1.45, -.3]];
const MANANA = { exposure: 1.05, bloom: .3 };
const ESCOVA = () => { const g = new THREE.Group(); g.add(box(.03, .26, .03, std('#5FB0E8'), 0, 0, 0, false)); g.add(box(.05, .06, .04, std('#FFFFFF'), 0, .14, .02, false)); return g; };
// 0. Son las siete de la mañana. Suena la alarma. La apagas.
Q(0, (d, a) => { const ts = R0(a, 'suena'), tp = R0(a, 'apagas'); return { amb: 'cuartoYo', fov: 30, atores: [DORM(YO, { x: -.7, z: -1.0, y: .97, eyes: [[0, 'shut'], [ts + .3, 'flat']] })],
  extra: (c) => { const ck = clock(.45, 7); ck.position.set(.3, 1.3, -1.6); c.add(ck); const h = lab(c, ['7:00'], .9, [-.2, 2.0, -.8], { bg: '#1E2230', fg: '#F2C14E', size: 96, w: 400 }); const r = lab(c, ['¡RIIIING!'], 1.1, [-1.6, 2.0, -.8], RED); return { update: (u, t, cam) => { ck.rotation.z = u > ts && u < tp ? Math.sin(u * 50) * .12 : 0; pop(h, u, .2, 99, cam); pop(r, u, ts, tp, cam); } }; },
  c: [[-1.0, 1.8, 2.8], [-1.1, 1.1, -1.0], [-1.0, 1.7, 2.3], [-1.1, 1.1, -1.0]], range: 2.5, look: MANANA }; });
// 1. Y entonces oyes una voz.
Q(1, (d, a) => ({ amb: 'cuartoYo', fov: 28, atores: [YO({ x: 0, z: -.4, eyes: [[0, 'wide']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [12, 8], head: Math.sin(u * 3) * 8 }) })],
  extra: (c, s, A) => { const o = ondas(c); const t = lp(c, ['UNA VOZ'], 1.0, [1.0, 2.05, -.4]); return { update: (u, tt, cam) => { o(u, A[0], cam, smooth(.3, 1, u)); pop(t, u, .6, 99, cam); } }; },
  c: [[0, 1.65, 2.8], [0, 1.55, -.4], [0, 1.65, 2.3], [0, 1.6, -.4]], range: 2.5, look: MANANA }));
// 2. No viene del pasillo. No viene del móvil. Viene de dentro de tu cabeza.
Q(2, (d, a) => { const tp = R0(a, 'pasillo'), tm = R0(a, 'movil'), tc = R0(a, 'cabeza'); return { amb: 'cuartoYo', fov: 30, atores: [YO({ x: 0, z: -.4, eyes: [[0, 'lookl'], [tm, 'look'], [tc - .2, 'wide']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > tc - .3 ? 150 : 12, 40], head: u < tm ? 14 : u < tc ? -14 : 0 }) })],
  extra: (c, s, A) => { const L = SEQ(c, a, [[['✗ EL PASILLO'], 'pasillo', 'w', [-1.1, 2.05, -.4], 1.3, 1], [['✗ EL MÓVIL'], 'movil', 'w', [1.1, 2.05, -.4], 1.2, 1], [['DENTRO DE TU CABEZA'], 'cabeza', 'p', [0, .95, .2], 2.0, 1]]); const o = ondas(c); return { update: (u, tt, cam) => { L(u, cam); o(u, A[0], cam, u > tc - .2 ? 1 : .3); } }; },
  c: [[0, 1.65, 3.2], [0, 1.5, -.4], [0, 1.65, 2.6], [0, 1.55, -.4]], range: 2.5, look: MANANA }; });
// 3. "Cinco minutos más… solo cinco minutos más."
Q(3, (d, a) => ({ amb: 'cuartoElla', fov: 30, atores: [SARA_DORM({ eyes: [[0, 'shut']] })],
  extra: (c) => { const p = piensa(c, ['CINCO MINUTOS MÁS…'], 1.5, [1.1, 1.8, -.3]); const z = zzz(c); return { update: (u, t, cam) => { pop(p, u, .1, 99, cam); z(u, [2.0, 1.4, -.6], cam); } }; },
  c: [[1.6, 1.8, 2.4], [1.7, 1.2, -.6], [1.6, 1.7, 2.0], [1.7, 1.2, -.6]], range: 2.5, look: MANANA }));
// 4. Conoces esa voz. Es la de tu crush. Y no te está hablando a ti. Está pensando.
Q(4, (d, a) => { const tc = R0(a, 'crush'), tp = R0(a, 'pensando'); return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: -1.0, z: -.5, eyes: [[0, 'wide'], [tc, 'heart']] }), ELA({ x: 1.0, z: -.5, eyes: [[0, 'look'], [tp - .3, 'lookl']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [110, 120], head: 8 }) })],
  extra: (c, s, A) => { const o = ondas(c); const t = lab(c, ['TU CRUSH'], 1.2, [1.0, 2.25, -.5], PINK); const p = piensa(c, ['…'], .9, [1.6, 2.15, -.6]); const e = lp(c, ['ESTÁ PENSANDO'], 1.4, [0, .9, .1]); return { update: (u, tt, cam) => { o(u, A[0], cam); pop(t, u, tc - .2, tp - .2, cam); pop(p, u, tp - .2, 99, cam); pop(e, u, tp, 99, cam); } }; },
  c: [[0, 1.6, 4.0], [0, 1.5, -.5], [0, 1.6, 3.5], [0, 1.5, -.5]], range: 3, blur: 6 }; });
// 5. En la pantalla del móvil aparece un mensaje que nadie ha escrito: "Hoy puedes oír su mente. Hasta medianoche."
Q(5, (d, a) => { const tn = R0(a, 'nadie'), th = R0(a, 'hoy'), tm = R0(a, 'medianoche'); return { amb: 'gris', fov: 28, k: 1, atores: [],
  extra: (c) => { const ch = chat(c, [0, 1.5, -.5], 1.15, [['s', 'HOY PUEDES OÍR SU MENTE', th - .1], ['s', 'HASTA MEDIANOCHE', tm - .2]], { hora: '07:00', name: 'SIN REMITENTE' }); const n = lw(c, ['NADIE LO HA ESCRITO'], 1.6, [0, .5, .5]); return { update: (u, t, cam) => { ch.userData.upd(u); pop(n, u, tn - .3, th - .2, cam); shake(cam, u > th && u < th + .4 ? .02 : 0, u); } }; },
  c: [[0, 1.5, 4.3], [0, 1.5, -.5], [0, 1.5, 3.8], [0, 1.5, -.5]], range: 2, blur: 4 }; });
// 6. Suscríbete
Q(6, (d, a) => { const ts = R0(a, 'suscribete'); return { amb: 'cuartoYo', fov: 32, atores: [YO({ x: -1.0, z: -.3, eyes: [[0, 'look'], [ts, 'happy']], pose: (k, u) => (u > ts ? wave(k, u) : k.pose()) })],
  extra: (c, s, A) => { const sb = suscribe(2.4); sb.position.set(.7, 1.8, -1.0); c.add(sb); const b = brillos(c, 14, '#FFE27A'); const q = QUEDAN(c, [-1.0, 2.35, -.3], 'MENTE: HASTA MEDIANOCHE', 2.0); const o = ondas(c); return { update: (u, t, cam) => { o(u, A[0], cam, .6); pop(q, u, .2, 99, cam); const k2 = smooth(ts - .3, ts, u); sb.scale.setScalar(Math.max(.01, k2)); sb.rotation.z = u > ts + .6 && u < ts + 1.6 ? Math.sin(u * 40) * .05 : 0; b(u, [.7, 1.8, -.9, 1.1], smooth(ts, ts + .3, u)); } }; },
  c: [[0, 1.7, 3.8], [0, 1.5, -.6], [0, 1.65, 3.2], [0, 1.5, -.6]], range: 3, look: MANANA }; });
// 7. Vamos a ver qué hay dentro de la cabeza de tu crush.
Q(7, (d, a) => { const tc = R0(a, 'cabeza'); return { amb: 'gris', fov: 30, k: 1, atores: [ELA({ x: 0, z: -.6, eyes: [[0, 'look'], [tc, 'happy']] })],
  extra: (c) => { const br = cerebro(c, [0, 2.3, -.7], 1.0); const t = lp(c, ['¿QUÉ HAY DENTRO?'], 1.6, [0, 1.05, .1]); const b = brillos(c, 10, '#C8A8FF'); return { update: (u, tt, cam) => { br(u > tc); pop(t, u, .3, 99, cam); b(u, [0, 2.4, -.6, .8], u > tc ? 1 : 0); } }; },
  c: [[0, 1.7, 4.4], [0, 1.7, -.6], [0, 1.7, 3.9], [0, 1.7, -.6]], range: 3, look: MENTE }; });
// 8. 7:15
HORA(8, 7, '7:15', 'DE LA MAÑANA');
// 9. Te lavas los dientes: calcetín, galletas, libro, gatos
Q(9, (d, a) => { return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: -.6, z: -.4, eyes: [[0, 'flat']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [100 + Math.sin(u * 16) * 6, 120] }) })],
  extra: (c, s, A) => { azulejos(c, -2.0); espejo(c, -.6, -1.9); const br = ESCOVA(); c.add(br); const o = ondas(c); const P = PSEQ(c, a, [[['¿DÓNDE ESTÁ', 'MI OTRO CALCETÍN?'], 'donde', [.9, 2.15, -.3], 1.7], [['¿HAY GALLETAS?'], 'galletas', [.9, 2.15, -.3], 1.5], [['DEVOLVER EL LIBRO…'], 'tengo', [.9, 2.15, -.3], 1.6], [['¿POR QUÉ LOS GATOS', 'ODIAN EL AGUA?'], 'gatos', [.9, 2.15, -.3], 1.7]]); const D = DSEQ(c, a, [['calcetin', 'donde'], ['galleta', 'galletas'], ['libro', 'tengo'], ['gato', 'gatos']], [1.0, 1.15, -.3], 1.1);
    return { update: (u, t, cam) => { const p = hand(A[0]); br.position.set(p.x + .05, p.y + .12, p.z + .1); o(u, A[0], cam, .7); P(u, cam); D(u, cam); } }; },
  c: [[.2, 1.6, 3.6], [.2, 1.5, -.4], [.2, 1.6, 3.1], [.2, 1.5, -.4]], range: 3 }; });
// 10. Esperabas secretos. Esperabas poesía. Y te encuentras con calcetines y gatos.
Q(10, (d, a) => { const tc = R0(a, 'calcetines'); return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: 0, z: -.4, eyes: [[0, 'look'], [tc - .2, 'flat']], pose: (k, u) => k.pose({ armL: [u > tc ? 40 : 12, u > tc ? 60 : 8], armR: [u > tc ? 40 : 12, u > tc ? 60 : 8], head: u > tc ? -8 : 0 }) })],
  extra: (c) => { const L = SEQ(c, a, [[['¿SECRETOS?'], 'secretos', 'p', [-1.05, 2.05, -.4], 1.1, 1], [['¿POESÍA?'], 'poesia', 'p', [1.05, 2.05, -.4], 1.0, 1]]); const d1 = dib(c, 'calcetin', .9, [-1.05, 1.3, -.3]), d2 = dib(c, 'gato', .9, [1.05, 1.3, -.3]); return { update: (u, t, cam) => { L(u, cam); pop(d1, u, tc, 99, cam); pop(d2, u, tc + .5, 99, cam); } }; },
  c: [[0, 1.6, 3.6], [0, 1.6, -.4], [0, 1.6, 3.1], [0, 1.6, -.4]], range: 3 }; });
// 11. En 2020, Universidad de Queen's, escáneres: cuántas veces cambiamos de pensamiento
Q(11, (d, a) => { const tc = R0(a, 'cambiamos'); return { amb: 'lab', fov: 32, atores: [CIENT(1, { x: 1.2, z: -.3, eyes: [[0, 'look']], pose: point }), CIENT(4, { x: -1.3, z: -.3, eyes: [[0, 'look'], [tc, 'happy']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [60, 70] }) })],
  extra: (c) => { const br = cerebro(c, [0, 1.9, -.9], 1.4); const t = lp(c, ['CAMBIOS DE PENSAMIENTO'], 2.1, [0, 1.05, -.2]); return { update: (u, tt, cam) => { br(Math.sin(u * 7) > 0 && u > tc - .5); pop(t, u, tc, 99, cam); } }; },
  c: [[0, 1.7, 3.8], [0, 1.6, -.5], [0, 1.65, 3.3], [0, 1.6, -.5]], range: 3 }; });
// 12. El resultado: unas 6.200 veces al día. Seis mil pensamientos.
const MINI = ['¿Y?', '…', 'hambre', '♪', 'sueño', '¡ay!', '¿eh?', 'mmm', 'frío', '¿qué?', 'jaja', 'uf'];
Q(12, (d, a) => { const tn = R0(a, '6'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const n = lab(c, ['6.200'], 1.8, [0, 1.75, -.3], { ...LIL, size: 120, w: 620, h: 170 }); const s = lw(c, ['PENSAMIENTOS AL DÍA'], 2.0, [0, 1.05, -.2]); const M = MINI.map((t, i) => piensa(c, [t], .62, [-2.1 + (i % 6) * .84, i < 6 ? 2.6 : .45, -.9 - (i % 3) * .2], { size: 70 })); return { update: (u, tt, cam) => { pop(n, u, tn - .1, 99, cam); pop(s, u, tn + .6, 99, cam); M.forEach((m, i) => pop(m, u, tn + .2 + i * .25, 99, cam)); } }; },
  c: [[0, 1.55, 4.3], [0, 1.55, -.5], [0, 1.55, 3.8], [0, 1.55, -.5]], range: 3, blur: 4, look: MENTE }; });
// 13. Y casi ninguno es importante.
Q(13, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [ELA({ x: 0, z: -.5, eyes: [[0, 'lookl']], pose: (k, u) => k.pose({ head: Math.sin(u * 2) * 6 }) })],
  extra: (c) => { const M = MINI.slice(0, 6).map((t, i) => piensa(c, [t], .55, [-1.3 + (i % 3) * 1.3, i < 3 ? 2.5 : 1.95, -.8], { size: 70 })); const t = lw(c, ['CASI NINGUNO ES IMPORTANTE'], 2.3, [0, .9, .1]); return { update: (u, tt, cam) => { M.forEach((m, i) => { pop(m, u, i * .12, 99, cam); }); pop(t, u, .4, 99, cam); } }; },
  c: [[0, 1.65, 3.8], [0, 1.65, -.5], [0, 1.65, 3.4], [0, 1.65, -.5]], range: 3 }));
// 14. 8:00
HORA(14, 8, '8:00', 'EN EL AUTOBÚS');
// 15. (Vas en autobús) Algo raro: a ratos la voz se apaga. No hay palabras.
Q(15, (d, a) => { const ta = R0(a, 'apaga'), tp = R0(a, 'palabras'); return { amb: 'gris', fov: 32, k: 1, atores: [YO({ x: -1.4, z: -.3, eyes: [[0, 'look'], [ta, 'wide']], pose: (k) => k.pose({ armL: [12, 8], armR: [150, 20] }) }), ELA({ x: 1.0, z: -.3, eyes: [[0, 'lookl']], pose: (k) => k.pose({ armL: [150, 20], armR: [12, 8] }) })],
  extra: (c, s, A) => { const bus = BUS(c); const o = ondas(c); const p = piensa(c, ['bla bla bla…'], 1.2, [1.6, 2.2, -.3]); const L = SEQ(c, a, [[['ALGO RARO'], 'raro', 'w', [-1.4, 2.25, -.3], 1.2], [['SE APAGA'], 'apaga', 'r', [-1.4, 2.25, -.3], 1.1], [['NO HAY PALABRAS'], 'palabras', 'p', [-1.2, 2.25, -.3], 1.6]]);
    return { update: (u, tt, cam) => { bus(u); L(u, cam); const on = u < ta - .2 || (u < tp && Math.sin(u * 13) > 0) ? 1 : 0; o(u, A[0], cam, on); pop(p, u, .1, 99, cam); p.visible = p.visible && on > 0; shake(cam, .004, u); } }; },
  c: [[-.2, 1.65, 3.8], [-.2, 1.5, -.4], [-.2, 1.65, 3.4], [-.2, 1.5, -.4]], range: 3 }; });
// 16. Solo una imagen borrosa de una playa. Un olor a pan. Una canción que se repite.
Q(16, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [ELA({ x: .2, z: -.3, eyes: [[0, 'shut']], pose: (k) => k.pose({ armL: [150, 20], armR: [12, 8], head: 6 }) })],
  extra: (c) => { const bus = BUS(c); const D = DSEQ(c, a, [['playa', 'playa'], ['pan', 'pan'], ['musica', 'cancion']], [-.9, 2.1, -.3], 1.5); const L = SEQ(c, a, [[['UNA PLAYA BORROSA'], 'playa', 'w', [-.9, 1.2, -.2], 1.6], [['OLOR A PAN'], 'pan', 'w', [-.9, 1.2, -.2], 1.2], [['UNA CANCIÓN'], 'cancion', 'w', [-.9, 1.2, -.2], 1.3]]); return { update: (u, t, cam) => { bus(u); D(u, cam); L(u, cam); } }; },
  c: [[-.3, 1.7, 3.2], [-.3, 1.65, -.4], [-.3, 1.7, 2.8], [-.3, 1.65, -.4]], range: 3, look: MENTE }));
// 17. Russell Hurlburt: décadas preguntando qué pensaban justo cuando sonaba un pitido al azar
Q(17, (d, a) => { const tr = R0(a, 'russell'), tp = R0(a, 'pitido'); return { amb: 'lab', fov: 32, atores: [ABUELO({ x: 1.1, z: -.3, eyes: [[0, 'look']], pose: (k, u) => talkP(k, u) }), EXTRA(1, { x: -1.0, z: -.3, eyes: [[0, 'look'], [tp, 'wide']], pose: (k) => k.pose({ armL: [12, 8], armR: [60, 70] }) })],
  extra: (c, s, A) => { const bp = box(.12, .18, .05, std('#2A2A34'), 0, 0, 0, false); c.add(bp); const n = lab(c, ['RUSSELL HURLBURT'], 1.8, [1.1, 2.3, -.3], BLUE); const q = lw(c, ['¿QUÉ PENSABAS AHORA MISMO?'], 2.2, [0, .9, .2]); const pi = lab(c, ['¡PIP!'], .7, [-1.0, 2.25, -.3], RED);
    return { update: (u, t, cam) => { naMao(bp, A[1], .05); pop(n, u, tr - .2, 99, cam); pop(q, u, R0(a, 'pensando') - .2, 99, cam); pop(pi, u, tp, 99, cam); pi.visible = pi.visible && Math.sin(u * 10) > -.3; } }; },
  c: [[0, 1.7, 3.8], [0, 1.55, -.4], [0, 1.65, 3.3], [0, 1.55, -.4]], range: 3 }; });
// 18. La voz interior con palabras aparece solo en una parte. Imágenes, sensaciones o nada concreto.
Q(18, (d, a) => { const tv = R0(a, 'voz'), tpa = R0(a, 'parte'), ti = R0(a, 'imagenes'), ts = R0(a, 'sensaciones'), tn = R0(a, 'nada'); return { amb: 'gris', fov: 30, k: 1, atores: [EXTRA(3, { x: -.9, z: -.5, eyes: [[0, 'look'], [ti, 'shut']] })],
  extra: (c) => { const p = piensa(c, ['BLA BLA BLA'], 1.3, [-.3, 2.3, -.5]); const D = DSEQ(c, a, [['playa', 'imagenes'], ['pan', 'sensaciones'], ['nada', 'nada']], [-.3, 2.3, -.5], 1.3); const L = SEQ(c, a, [[['VOZ INTERIOR'], 'voz', 'p', [1.0, 1.9, -.3], 1.6], [['SOLO A VECES'], 'parte', 'r', [1.0, 1.9, -.3], 1.6], [['IMÁGENES'], 'imagenes', 'y', [1.0, 1.9, -.3], 1.4], [['SENSACIONES'], 'sensaciones', 'y', [1.0, 1.9, -.3], 1.6], [['NADA CONCRETO'], 'nada', 'w', [1.0, 1.9, -.3], 1.7]]); return { update: (u, t, cam) => { pop(p, u, tv, ti - .1, cam); D(u, cam); L(u, cam); } }; },
  c: [[0, 1.7, 3.8], [0, 1.65, -.5], [0, 1.7, 3.3], [0, 1.65, -.5]], range: 3 }; });
// 19. Leer una mente no es como leer un libro. Es como cambiar de canal sin parar.
const KINDS = ['playa', 'pizza', 'gato', 'musica', 'calcetin', 'galleta', 'tele', 'pan'];
Q(19, (d, a) => { const tl = R0(a, 'libro'), tc = R0(a, 'canal'); return { amb: 'gris', fov: 30, k: 1, atores: [ELA({ x: .9, z: -.5, eyes: [[0, 'lookl']] })],
  extra: (c) => { const lb = dib(c, 'libro', 1.3, [-.6, 2.05, -.4]); const M = KINDS.map((k) => dib(c, k, 1.3, [-.6, 2.05, -.4])); const a1 = lw(c, ['NO ES COMO LEER UN LIBRO'], 2.2, [-.3, .95, .1]); const a2 = lp(c, ['ES COMO CAMBIAR DE CANAL'], 2.3, [-.3, .95, .1]); return { update: (u, t, cam) => { pop(lb, u, tl - .4, tc - .1, cam); const j = Math.floor(u * 6) % M.length; M.forEach((m, i) => { m.visible = u > tc - .1 && i === j; pointer(m, cam); }); pop(a1, u, .2, tc - .2, cam); pop(a2, u, tc - .1, 99, cam); } }; },
  c: [[0, 1.6, 3.8], [0, 1.6, -.5], [0, 1.6, 3.4], [0, 1.6, -.5]], range: 3, look: MENTE }; });
// 20. 8:30
HORA(20, 8, '8:30', 'EN CLASE');
// 21. Y llevas el pelo fatal. Se te ha levantado un mechón.
Q(21, (d, a) => { const tm = R0(a, 'mechon'); return { ...AULA(), atores: [YO({ x: 0, z: -.4, eyes: [[0, 'flat'], [tm, 'sad']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > tm ? 160 : 12, 40] }) })],
  extra: (c, s, A) => { mechon(A[0]); QA(c); const L = SEQ(c, a, [[['PELO FATAL'], 'fatal', 'r', [1.0, 2.1, -.4], 1.2, 1], [['UN MECHÓN REBELDE'], 'mechon', 'w', [-1.0, 2.1, -.4], 1.7, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.65, 3.0], [0, 1.6, -.4], [0, 1.65, 2.6], [0, 1.65, -.4]], range: 2.5 }; });
// 22. Te sientas muy recto, convencido de que toda la clase te está mirando. Sobre todo ella.
Q(22, (d, a) => { const tt = R0(a, 'toda'), te = R0(a, 'ella'); return { ...AULA(), atores: [YO({ x: -.3, z: -.3, eyes: [[0, 'wide']], pose: (k) => k.pose({ armL: [12, 8], armR: [12, 8], lean: -4 }) }), ELA({ x: 1.5, z: -1.2, eyes: [[0, 'lookl']] }), EXTRA(2, { x: -1.9, z: -1.3, eyes: [[0, 'look']] }), EXTRA(4, { x: .5, z: -1.6, eyes: [[0, 'look']] })],
  extra: (c, s, A) => { mechon(A[0]); QA(c); const L = SEQ(c, a, [[['MUY RECTO'], 'recto', 'w', [-.3, 2.15, -.3], 1.1], [['TODOS TE MIRAN'], 'toda', 'r', [-.3, 2.15, -.3], 1.5], [['SOBRE TODO ELLA'], 'ella', 'p', [1.3, 2.25, -1.0], 1.6, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.7, 3.8], [0, 1.5, -.6], [0, 1.65, 3.3], [0, 1.5, -.6]], range: 3 }; });
// 23. Y escuchas su mente: "Tengo hambre. ¿Hoy había examen? No, era mañana. Uf, qué alivio."
Q(23, (d, a) => ({ ...AULA(), atores: [ELA({ x: .7, z: -.4, eyes: [[0, 'look'], [R0(a, 'hoy'), 'wide'], [R0(a, 'uf'), 'happy']] })],
  extra: (c) => { QA(c); const P = PSEQ(c, a, [[['TENGO HAMBRE'], 'tengo', [-.5, 2.15, -.3], 1.5], [['¿HOY HABÍA EXAMEN?'], 'hoy', [-.5, 2.15, -.3], 1.7], [['NO, ERA MAÑANA'], 'era', [-.5, 2.15, -.3], 1.6], [['UF, QUÉ ALIVIO'], 'uf', [-.5, 2.15, -.3], 1.6]]); return { update: (u, t, cam) => P(u, cam) }; },
  c: [[0, 1.7, 3.0], [.1, 1.65, -.4], [0, 1.7, 2.6], [.1, 1.65, -.4]], range: 2.5 }));
// 24. Ni una palabra sobre tu pelo.
Q(24, (d, a) => ({ ...AULA(), atores: [YO({ x: 0, z: -.4, eyes: [[0, 'flat']], pose: (k) => k.pose({ armL: [12, 8], armR: [12, 8], lean: 6, head: -10 }) })],
  extra: (c, s, A) => { mechon(A[0]); QA(c); const t = lw(c, ['NI UNA PALABRA SOBRE TU PELO'], 2.4, [0, .95, .1]); return { update: (u, tt, cam) => pop(t, u, .1, 99, cam) }; },
  c: [[0, 1.6, 2.8], [0, 1.45, -.4], [0, 1.6, 2.4], [0, 1.5, -.4]], range: 2.5 }));
// 25. Esto se llama el efecto foco.
Q(25, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [YO({ x: 0, z: -.5, eyes: [[0, 'wide']] })],
  extra: (c, s, A) => { mechon(A[0]); foco(c, 0, -.5); const t = lp(c, ['EFECTO FOCO'], 1.5, [0, 2.3, -.4]); return { update: (u, tt, cam) => pop(t, u, .2, 99, cam) }; },
  c: [[0, 1.7, 3.8], [0, 1.5, -.5], [0, 1.7, 3.4], [0, 1.5, -.5]], range: 3, look: { exposure: .8, vig: .7 } }));
// 26. Año 2000, Thomas Gilovich: estudiantes con una camiseta vergonzosa con la cara de un cantante
Q(26, (d, a) => { const tc = R0(a, 'camiseta'), tca = R0(a, 'cantante'); return { amb: 'sala', fov: 32, atores: [EXTRA(5, { x: 0, z: 0, eyes: [[0, 'flat'], [tca, 'sad']], move: (u) => [lerp(-3, 0, smooth(0, 3, u)), 0, 0], pose: (k, u) => (u < 3 ? k.walk(u * 2) : k.pose()) }), EXTRA(0, { x: -1.8, z: -1.4, eyes: [[0, 'look']] }), EXTRA(2, { x: 1.6, z: -1.4, eyes: [[0, 'lookl']] }), EXTRA(3, { x: 2.5, z: -.8, eyes: [[0, 'lookl']] })],
  extra: (c, s, A) => { const cc = cartelCara('♪♪', '#E8667F', .3); cc.position.set(0, -.28, .17); A[0].torso.add(cc); const t = lab(c, ['CAMISETA VERGONZOSA'], 2.0, [0, 2.2, -.1], RED); const ct = lw(c, ['CON LA CARA DE UN CANTANTE'], 2.2, [0, .55, .4]); return { update: (u, tt, cam) => { pop(t, u, tc - .2, 99, cam); pop(ct, u, tca - .6, 99, cam); } }; },
  c: [[0, 1.7, 4.0], [0, 1.4, -.4], [0, 1.65, 3.4], [0, 1.4, -.4]], range: 3 }; });
// 27. Creían que la mitad se iba a fijar. En realidad, como mucho uno de cada cuatro.
Q(27, (d, a) => { const tr = R0(a, 'realidad'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const b1 = barras(c, [['LO QUE\nCREÍAN', .5 * 1.6, '#E8667F'], ['', 0, '#5FA0D8']], 2.6, [0, 1.5, -.4], { title: '¿CUÁNTOS SE FIJAN?' }); const b2 = barras(c, [['LO QUE\nCREÍAN', .5 * 1.6, '#E8667F'], ['EN\nREALIDAD', .25 * 1.6, '#5FA0D8']], 2.6, [0, 1.5, -.39], { title: '¿CUÁNTOS SE FIJAN?' }); const l1 = lab(c, ['LA MITAD'], 1.0, [-.65, 2.35, -.2], PINK), l2 = lab(c, ['1 DE CADA 4'], 1.1, [.65, 2.35, -.2], BLUE); return { update: (u, t, cam) => { b2.visible = u > tr; b1.visible = !b2.visible; pop(l1, u, .5, 99, cam); pop(l2, u, tr + .8, 99, cam); } }; },
  c: [[0, 1.6, 3.6], [0, 1.6, -.4], [0, 1.6, 3.2], [0, 1.6, -.4]], range: 3, blur: 4 }; });
// 28. Creemos que todo el mundo nos mira. Pero todo el mundo está ocupado pensando en sí mismo.
Q(28, (d, a) => { const to = R0(a, 'ocupado'); const TX = ['¿Y MI PELO?', '¿ME VEO RARO?', '¿Y MI CARA?', '¿HE DICHO ALGO MAL?']; return { amb: 'plaza', fov: 32, atores: [0, 1, 2, 3].map((i) => EXTRA(i + 1, { x: -2.1 + i * 1.4, z: -.4 - (i % 2) * .4, eyes: [[0, 'look'], [to, i % 2 ? 'lookl' : 'flat']] })),
  extra: (c) => { const P = TX.map((t, i) => piensa(c, [t], 1.1, [-2.1 + i * 1.4, 2.35 - (i % 2) * .15, -.4 - (i % 2) * .4], { size: 56 })); const t1 = lw(c, ['TODOS NOS MIRAN… ¿NO?'], 2.0, [0, .85, .5]); const t2 = lp(c, ['CADA UNO PIENSA EN SÍ MISMO'], 2.4, [0, .85, .5]); return { update: (u, tt, cam) => { P.forEach((m, i) => pop(m, u, to + i * .3, 99, cam)); pop(t1, u, .2, to - .2, cam); pop(t2, u, to, 99, cam); } }; },
  c: [[0, 1.7, 4.4], [0, 1.5, -.5], [0, 1.65, 3.9], [0, 1.5, -.5]], range: 3.5 }; });
// 29. 10:00
HORA(29, 10, '10:00', 'EL RECREO');

// 30. Ella está con sus amigas. Se ríe. Tú te acercas con el bocadillo y le dices "hola". Solo "hola".
Q(30, (d, a) => { const th = R0(a, 'hola'), ts = R0(a, 'solo'); return { amb: 'barrio', fov: 32, atores: [ELA({ x: .7, z: -.6, eyes: [[0, 'happy'], [th, 'wide']], pose: (k, u) => k.pose({ armL: [70, 80], armR: [12, 8], bob: u < th ? Math.abs(Math.sin(u * 12)) * .02 : 0 }) }), MUJ(1, { x: 1.6, z: -.9, eyes: [[0, 'happy']] }), MUJ(4, { x: 2.4, z: -.5, eyes: [[0, 'happy']] }), YO({ x: -1.0, z: -.3, eyes: [[0, 'look'], [th, 'smug']], move: (u) => [lerp(-2.6, -.9, smooth(0, th - .5, u)), 0, -.3], pose: (k, u) => { if (u < th - .5) k.walk(u * 2); k.pose({ armL: [60, 70], armR: [u > th ? 110 : 12, 20] }); } })],
  extra: (c, s, A) => { INSTI(c); const bc = bocadillo(); c.add(bc); const g = hab(c, ['¡HOLA!'], .9, [-.7, 2.25, -.2], 72); const t = lw(c, ['SOLO "HOLA"'], 1.3, [.3, .85, .4]); const r = lw(c, ['SE RÍE'], .9, [1.4, 2.25, -.7]); return { update: (u, tt, cam) => { const p = hand(A[3]); bc.position.set(p.x, p.y + .08, p.z + .12); pop(r, u, R0(a, 'rie') - .2, th - .2, cam); pop(g, u, th, 99, cam); pop(t, u, ts, 99, cam); } }; },
  c: [[0, 1.7, 4.2], [0, 1.4, -.4], [0, 1.65, 3.7], [0, 1.4, -.4]], range: 3.5 }; });
// 31. Y en tu cabeza explota su voz: "¡Me ha dicho hola! ¿Le he contestado bien? He sonado rarísima…"
Q(31, (d, a) => ({ amb: 'barrio', fov: 30, atores: [ELA({ x: .7, z: -.4, eyes: [[0, 'happy']], pose: (k) => k.pose({ armL: [12, 8], armR: [100, 20] }) })],
  extra: (c, s, A) => { INSTI(c); const P = PSEQ(c, a, [[['¡ME HA DICHO HOLA!'], 'dicho', [-.6, 2.2, -.3], 1.7], [['¿LE HE CONTESTADO BIEN?'], 'contestado', [-.6, 2.2, -.3], 1.9], [['HE SONADO RARÍSIMA'], 'sonado', [-.6, 2.2, -.3], 1.8], [['¿POR QUÉ HE DICHO', '"HOLA QUÉ TAL" TAN RÁPIDO?'], 'por', [-.6, 2.2, -.3], 2.0], [['SEGURO QUE PIENSA', 'QUE SOY TONTA'], 'seguro', [-.6, 2.2, -.3], 1.9]], { bg: '#FFE0E6', fg: '#A0203A' }); const b = brillos(c, 10, '#FF9AB0');
    return { update: (u, t, cam) => { P(u, cam); b(u, [.7, 2.0, -.3, .6]); shake(cam, u < .5 ? .03 : .004, u); } }; },
  c: [[0, 1.75, 3.2], [0, 1.7, -.4], [0, 1.75, 2.8], [0, 1.7, -.4]], range: 2.5, look: MENTE }));
// 32. Te quedas helado. Estaba nerviosa. Por ti.
Q(32, (d, a) => { const tn = R0(a, 'nerviosa'), tt = R0(a, 'ti'); return { amb: 'barrio', fov: 28, atores: [YO({ x: 0, z: -.4, eyes: [[0, 'wide'], [tt, 'heart']], pose: (k) => k.pose({ armL: [12, 8], armR: [60, 70] }) })],
  extra: (c, s, A) => { INSTI(c); const bc = bocadillo(); c.add(bc); const L = SEQ(c, a, [[['HELADO'], 'helado', 'b', [-1.0, 2.15, -.4], 1.0, 1], [['ESTABA NERVIOSA'], 'nerviosa', 'w', [.85, 2.15, -.4], 1.4, 1], [['POR TI'], 'ti', 'p', [.85, 1.75, -.4], .8, 1]]); return { update: (u, t, cam) => { const p = hand(A[0]); bc.position.set(p.x, p.y + .08, p.z + .12); L(u, cam); } }; },
  c: [[0, 1.65, 2.8], [0, 1.55, -.4], [0, 1.65, 2.4], [0, 1.6, -.4]], range: 2.5 }; });
// 33. Y por fuera no se le notaba nada. Parecía tranquila.
Q(33, (d, a) => { const tt = R0(a, 'tranquila'); return { amb: 'barrio', fov: 30, atores: [ELA({ x: 0, z: -.4, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [12, 8], head: Math.sin(u * 2) * 4 }) })],
  extra: (c) => { INSTI(c); const L = SEQ(c, a, [[['POR FUERA: NADA'], 'fuera', 'w', [0, 2.2, -.4], 1.6], [['TRANQUILA'], 'tranquila', 'b', [0, 2.2, -.4], 1.2, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.65, 3.0], [0, 1.55, -.4], [0, 1.65, 2.6], [0, 1.55, -.4]], range: 2.5 }; });
// 34. Ilusión de transparencia: creemos que los demás ven nuestros nervios, vergüenza, lo que sentimos. Casi nunca se nota.
Q(34, (d, a) => { const ti = R0(a, 'ilusion'), tc = R0(a, 'casi'); return { amb: 'gris', fov: 30, k: 1, atores: [ELA({ x: -1.0, z: -.5, eyes: [[0, 'happy']] }), YO({ x: 1.0, z: -.5, eyes: [[0, 'look'], [tc, 'happy']] })],
  extra: (c, s, A) => { const g = glowSprite('#FF4A6A', 1.0, 0); c.add(g); const L = SEQ(c, a, [[['ILUSIÓN DE TRANSPARENCIA'], 'ilusion', 'p', [0, 2.35, -.4], 2.4, 1], [['NERVIOS'], 'nervios', 'r', [-1.0, .9, .1], 1.0], [['VERGÜENZA'], 'verguenza', 'r', [-1.0, .9, .1], 1.1], [['LO QUE SENTIMOS'], 'sentimos', 'r', [-1.0, .9, .1], 1.5], [['SE NOTA MENOS DE LO QUE CREES'], 'casi', 'w', [0, .9, .2], 2.6]]); const p = new THREE.Vector3();
    return { update: (u, t, cam) => { A[0].torso.getWorldPosition(p); g.position.set(p.x, p.y, p.z + .25); g.material.opacity = u > ti ? (u < tc ? .7 : .25) * (.7 + .3 * Math.sin(u * 8)) : 0; L(u, cam); } }; },
  c: [[0, 1.6, 4.0], [0, 1.6, -.5], [0, 1.6, 3.6], [0, 1.6, -.5]], range: 3 }; });
// 35. Ella creía que se le notaba todo. Tú no habías visto nada.
Q(35, (d, a) => { const tv = R0(a, 'visto'); return { amb: 'gris', fov: 30, k: 1, atores: [ELA({ x: -1.0, z: -.5, eyes: [[0, 'sad']], pose: (k) => k.pose({ armL: [60, 70], armR: [60, 70], head: -6 }) }), YO({ x: 1.0, z: -.5, eyes: [[0, 'look'], [tv, 'flat']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > tv ? 60 : 12, u > tv ? 90 : 8] }) })],
  extra: (c) => { const L = SEQ(c, a, [[['"SE ME NOTA TODO"'], 'creia', 'p', [-1.0, 2.25, -.5], 1.6, 1], [['NO HABÍAS VISTO NADA'], 'visto', 'w', [1.0, 2.25, -.5], 1.8, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.6, 4.0], [0, 1.6, -.5], [0, 1.6, 3.6], [0, 1.6, -.5]], range: 3 }; });
// 36. 12:00
HORA(36, 12, '12:00', 'MEDIODÍA');
// 37. Ya no puedes parar de escuchar. Esperas a que piense en ti. Deseas oír tu nombre.
Q(37, (d, a) => { const tp = R0(a, 'piense'), tn = R0(a, 'nombre'); return { amb: 'plaza', fov: 30, atores: [YO({ x: -1.0, z: -.3, eyes: [[0, 'look'], [tp, 'heart']], pose: (k) => k.pose({ armL: [12, 8], armR: [12, 8], lean: 6 }) }), ELA({ x: 1.2, z: -1.0, eyes: [[0, 'lookl']] })],
  extra: (c, s, A) => { const o = ondas(c); const p = piensa(c, ['¿PENSARÁ EN MÍ?'], 1.5, [-1.0, 2.35, -.3], { bg: '#FFFFFF', fg: '#2A2A34' }); const t = lp(c, ['QUIERES OÍR TU NOMBRE'], 2.0, [.2, .85, .3]); return { update: (u, tt, cam) => { o(u, A[0], cam); pop(p, u, tp - .2, 99, cam); pop(t, u, tn - .5, 99, cam); } }; },
  c: [[0, 1.65, 3.8], [0, 1.45, -.5], [0, 1.65, 3.4], [0, 1.45, -.5]], range: 3 }; });
// 38. Y a veces llega: "¿Por qué no me habla más? Antes me hablaba. Seguro que le caigo mal."
Q(38, (d, a) => ({ amb: 'plaza', fov: 30, atores: [ELA({ x: .8, z: -.4, eyes: [[0, 'look'], [R0(a, 'seguro'), 'sad']], pose: (k) => k.pose({ armL: [12, 8], armR: [12, 8], head: -6 }) })],
  extra: (c) => { const P = PSEQ(c, a, [[['¿POR QUÉ NO ME HABLA MÁS?'], 'por', [-.5, 2.2, -.3], 2.0], [['ANTES ME HABLABA…'], 'antes', [-.5, 2.2, -.3], 1.7], [['SEGURO QUE LE CAIGO MAL'], 'seguro', [-.5, 2.2, -.3], 2.0]]); return { update: (u, t, cam) => P(u, cam) }; },
  c: [[0, 1.7, 3.0], [.1, 1.65, -.4], [0, 1.7, 2.6], [.1, 1.65, -.4]], range: 2.5, look: MENTE }));
// 39. ¿Que le caes mal? Pero si llevas meses pensando en ella.
Q(39, (d, a) => { const tm = R0(a, 'meses'); return { amb: 'plaza', fov: 28, atores: [YO({ x: 0, z: -.4, eyes: [[0, 'wide'], [tm, 'heart']], pose: (k, u) => k.pose({ armL: [u < tm ? 150 : 12, 40], armR: [u < tm ? 150 : 12, 40] }) })],
  extra: (c) => { const q = lab(c, ['¿¡QUE LE CAES MAL!?'], 1.9, [0, 2.25, -.4], RED); const p = piensa(c, ['LLEVO MESES', 'PENSANDO EN ELLA'], 1.6, [1.0, 2.05, -.4], { bg: '#FFFFFF', fg: '#2A2A34' }); const h = corazon(c, .35); h.position.set(-.9, 2.0, -.3); return { update: (u, t, cam) => { pop(q, u, .05, tm - .1, cam); pop(p, u, tm - .1, 99, cam); h.visible = u > tm; h.scale.setScalar(latido(u, 100)); shake(cam, u < .4 ? .025 : 0, u); } }; },
  c: [[0, 1.65, 3.0], [0, 1.6, -.4], [0, 1.65, 2.6], [0, 1.6, -.4]], range: 2.5 }; });
// 40. En 2018, Yale y Cornell pusieron a hablar a desconocidos unos minutos.
Q(40, (d, a) => { const tm = R0(a, 'minutos'); return { amb: 'lab', fov: 32, atores: [EXTRA(2, { x: -.7, z: -.3, eyes: [[0, 'look']], pose: (k, u) => talkP(k, u) }), EXTRA(6, { x: .7, z: -.3, eyes: [[0, 'lookl']], pose: (k, u) => nod(k, u) })],
  extra: (c) => { const ck = clock(.35, 3); ck.position.set(0, 2.5, -1.3); c.add(ck); const L = SEQ(c, a, [[['DESCONOCIDOS'], 'desconocidos', 'w', [0, 2.1, -.3], 1.5], [['UNOS MINUTOS'], 'minutos', 'b', [0, 2.1, -.3], 1.4, 1]]); return { update: (u, t, cam) => { ck.rotation.z = -u * .6; L(u, cam); } }; },
  c: [[0, 1.65, 3.6], [0, 1.5, -.4], [0, 1.65, 3.1], [0, 1.5, -.4]], range: 3 }; });
// 41. Después: "¿Cuánto le has gustado a la otra persona?"
Q(41, (d, a) => { const tc = R0(a, 'cuanto'); return { amb: 'lab', fov: 30, atores: [EXTRA(2, { x: -.9, z: -.3, eyes: [[0, 'lookl']] }), EXTRA(6, { x: .9, z: -.3, eyes: [[0, 'look']] })],
  extra: (c) => { const q = lab(c, ['¿CUÁNTO LE HAS GUSTADO?'], 2.3, [0, .9, .2], PINK); const p1 = piensa(c, ['¿?'], .7, [-.9, 2.25, -.3], { size: 90 }), p2 = piensa(c, ['¿?'], .7, [.9, 2.25, -.3], { size: 90, tail: 'right' }); return { update: (u, t, cam) => { pop(q, u, tc - .2, 99, cam); pop(p1, u, tc + .4, 99, cam); pop(p2, u, tc + .6, 99, cam); } }; },
  c: [[0, 1.65, 3.6], [0, 1.55, -.4], [0, 1.65, 3.1], [0, 1.55, -.4]], range: 3 }; });
// 42. Casi todos se quedaron cortos: le gustaban a la otra persona más de lo que creían.
Q(42, (d, a) => { const tg = R0(a, 'gustaban'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const b1 = barras(c, [['LO QUE\nCREÍAN', .45, '#5FA0D8'], ['', 0, '#E8667F']], 2.6, [0, 1.5, -.4], { title: '¿CUÁNTO LE GUSTABAS?' }); const b2 = barras(c, [['LO QUE\nCREÍAN', .45, '#5FA0D8'], ['LA\nVERDAD', .85, '#E8667F']], 2.6, [0, 1.5, -.39], { title: '¿CUÁNTO LE GUSTABAS?' }); const t = lw(c, ['SE QUEDARON CORTOS'], 1.8, [0, 2.45, -.2]); const m = lab(c, ['¡MÁS!'], .7, [.65, 2.35, -.2], PINK); return { update: (u, tt, cam) => { b2.visible = u > tg - .2; b1.visible = !b2.visible; pop(t, u, .3, tg - .3, cam); pop(m, u, tg + .3, 99, cam); } }; },
  c: [[0, 1.6, 3.6], [0, 1.6, -.4], [0, 1.6, 3.2], [0, 1.6, -.4]], range: 3, blur: 4 }; });
// 43. Lo llamaron la brecha de la simpatía. Pensamos que caemos peor de lo que caemos.
Q(43, (d, a) => { const tp = R0(a, 'pensamos'); return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: -1.4, z: -.5, eyes: [[0, 'sad'], [tp + 1, 'happy']] }), ELA({ x: 1.4, z: -.5, eyes: [[0, 'sad'], [tp + 1, 'happy']] })],
  extra: (c) => { const gap = new THREE.Mesh(new THREE.PlaneGeometry(.6, 3), new THREE.MeshBasicMaterial({ color: '#1E2230' })); gap.rotation.x = -Math.PI / 2; gap.position.set(0, .01, -.5); c.add(gap); const L = SEQ(c, a, [[['LA BRECHA DE LA SIMPATÍA'], 'brecha', 'p', [0, 2.35, -.4], 2.4, 1], [['CAEMOS MEJOR DE LO QUE CREEMOS'], 'pensamos', 'w', [0, .9, .2], 2.6, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.6, 4.4], [0, 1.5, -.5], [0, 1.6, 3.9], [0, 1.5, -.5]], range: 3.5 }; });
// 44. 13:00
HORA(44, 13, '13:00', 'EL COMEDOR');
// comedor del instituto
const COMEDOR = (c) => { AMBS.pasteleria(c); const s = cut(labelT(['COMEDOR'], { bg: '#2F5A9A', fg: '#FFFFFF', size: 90, w: 700, h: 170 }), 2.4, .58); s.position.set(0, 3.9, -2.98); c.add(s); mesa(c, 0, .35, .8, 1.8, .8, '#E8E2D2'); };
const COMB = (a, o = {}) => ({ amb: 'gris', fov: 30, k: 1, ...o, c: [[0, 1.7, 4.3], [0, 1.55, -.3], [0, 1.7, 3.9], [0, 1.55, -.3]], range: 3 });
// 45. Aquí empiezas a hacer trampa. Ella piensa: "Ojalá hubiera pizza." Tú: "Oye, ¿te apetece pizza?" Se queda mirándote.
Q(45, (d, a) => { const tt = R0(a, 'trampa'), to = R0(a, 'ojala'), tp = R0(a, 'apetece'), tm = R0(a, 'mirandote'); return COMB(a, { atores: [YO({ x: -.8, z: -.5, eyes: [[0, 'look'], [tt, 'smug']], pose: (k, u) => (u > tp - .3 && u < tm ? talkP(k, u) : k.pose()) }), ELA({ x: .8, z: -.5, eyes: [[0, 'look'], [tm - .3, 'wide']] })],
  extra: (c, s, A) => { COMEDOR(c); const o = ondas(c); const r = lab(c, ['MODO TRAMPA'], 1.3, [-.8, 2.3, -.4], RED); const p = piensa(c, ['OJALÁ HUBIERA PIZZA'], 1.7, [1.0, 2.25, -.4], { tail: 'left' }); const pz = dib(c, 'pizza', .7, [1.9, 1.7, -.3]); const h = hab(c, ['¿TE APETECE PIZZA?'], 1.4, [-.7, 2.25, -.3], 60);
    return { update: (u, t, cam) => { o(u, A[0], cam, .7); pop(r, u, tt - .2, to - .1, cam); pop(p, u, to - .1, 99, cam); pop(pz, u, to + .4, 99, cam); pop(h, u, tp - .3, 99, cam); } }; } }); });
// 46. Ella piensa: "Me encanta esa serie." Tú dices: "¿Has visto esa serie? Es la mejor."
Q(46, (d, a) => { const th = R0(a, 'has'); return COMB(a, { atores: [YO({ x: -.8, z: -.5, eyes: [[0, 'smug']], pose: (k, u) => (u > th - .3 ? talkP(k, u) : k.pose()) }), ELA({ x: .8, z: -.5, eyes: [[0, 'look'], [th + .5, 'wide']] })],
  extra: (c, s, A) => { COMEDOR(c); const o = ondas(c); const p = piensa(c, ['ME ENCANTA ESA SERIE'], 1.7, [1.0, 2.25, -.4]); const tv = dib(c, 'tele', .7, [1.9, 1.7, -.3]); const h = hab(c, ['¿HAS VISTO ESA SERIE?', '¡ES LA MEJOR!'], 1.5, [-.7, 2.25, -.3], 56); return { update: (u, t, cam) => { o(u, A[0], cam, .7); pop(p, u, .1, 99, cam); pop(tv, u, .5, 99, cam); pop(h, u, th - .3, 99, cam); } }; } }); });
// 47. Ella piensa: "Es como si me leyera la mente."
Q(47, (d, a) => COMB(a, { atores: [YO({ x: -.8, z: -.5, eyes: [[0, 'smug']] }), ELA({ x: .8, z: -.5, eyes: [[0, 'heart']], pose: (k) => k.pose({ armL: [60, 70], armR: [60, 70] }) })],
  extra: (c, s, A) => { COMEDOR(c); const p = piensa(c, ['¡ES COMO SI', 'ME LEYERA LA MENTE!'], 1.8, [.9, 2.3, -.4]); const rb = rubor(A[1]); const b = brillos(c, 10, '#FFB0C0'); return { update: (u, t, cam) => { pop(p, u, .1, 99, cam); rb(.8); b(u, [.8, 1.9, -.4, .6]); } }; } }));
// 48. Te sientes un genio. Pero también un poco tramposo.
Q(48, (d, a) => { const tg = R0(a, 'genio'), tt = R0(a, 'tramposo'); return { amb: 'gris', fov: 28, k: 1, atores: [YO({ x: 0, z: -.5, eyes: [[0, 'smug'], [tt, 'flat']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u < tt ? 150 : 12, 30], head: u > tt ? -8 : 0 }) })],
  extra: (c, s, A) => { const L = SEQ(c, a, [[['UN GENIO'], 'genio', 'y', [1.0, 2.15, -.4], 1.1, 1], [['UN POCO TRAMPOSO'], 'tramposo', 'r', [-1.0, 1.75, -.4], 1.6, 1]]); const b = brillos(c, 10); return { update: (u, t, cam) => { L(u, cam); b(u, [0, 1.8, -.4, .6], u > tg && u < tt ? 1 : 0); } }; },
  c: [[0, 1.65, 3.2], [0, 1.6, -.5], [0, 1.65, 2.8], [0, 1.6, -.5]], range: 2.5 }; });
// 49. No la estás escuchando a ella. Estás escuchando su mente para decirle lo que quiere oír.
Q(49, (d, a) => { const td = R0(a, 'decirle'); return COMB(a, { atores: [YO({ x: -.8, z: -.5, eyes: [[0, 'flat']] }), ELA({ x: .8, z: -.5, eyes: [[0, 'happy']], pose: (k, u) => talkP(k, u) })],
  extra: (c, s, A) => { COMEDOR(c); const o = ondas(c); const L = SEQ(c, a, [[['NO LA ESCUCHAS A ELLA'], 'escuchando', 'w', [0, 2.35, -.3], 2.0], [['LE DICES LO QUE QUIERE OÍR'], 'decirle', 'r', [0, 2.35, -.3], 2.3, 1]]); return { update: (u, t, cam) => { o(u, A[0], cam); L(u, cam); } }; } }); });
// 50. Sin poderes, somos bastante malos adivinando lo que piensan los demás.
Q(50, (d, a) => { const tm = R0(a, 'malos'); return { amb: 'plaza', fov: 30, atores: [EXTRA(0, { x: -.9, z: -.4, eyes: [[0, 'look']] }), EXTRA(3, { x: .9, z: -.4, eyes: [[0, 'lookl']] })],
  extra: (c) => { const p1 = piensa(c, ['¿?'], .7, [-.9, 2.25, -.4], { size: 90 }), p2 = piensa(c, ['¿?'], .7, [.9, 2.25, -.4], { size: 90, tail: 'right' }); const L = SEQ(c, a, [[['SIN PODERES'], 'sin', 'w', [0, .9, .2], 1.3], [['MALOS ADIVINANDO'], 'malos', 'r', [0, .9, .2], 1.7, 1]]); return { update: (u, t, cam) => { pop(p1, u, tm, 99, cam); pop(p2, u, tm + .3, 99, cam); L(u, cam); } }; },
  c: [[0, 1.6, 3.6], [0, 1.5, -.4], [0, 1.6, 3.2], [0, 1.5, -.4]], range: 3 }; });
// 51. William Ickes: grababa conversaciones y preguntaba qué pensaban en cada momento.
const camara = (c, x, z) => { const g = new THREE.Group(); g.add(box(.4, .28, .25, std('#2A2A34', { metalness: .4 }), 0, 1.45, 0)); const l = new THREE.Mesh(new THREE.CylinderGeometry(.09, .1, .2, 16), std('#1A1A24', { metalness: .5 })); l.rotation.x = Math.PI / 2; l.position.set(0, 1.45, .2); g.add(l); for (const s of [-1, 0, 1]) { const p = box(.03, 1.4, .03, std('#5A5E68'), s * .18, .7, s === 0 ? -.18 : .1); p.rotation.z = s * .12; g.add(p); } g.position.set(x, 0, z); c.add(g); return g; };
Q(51, (d, a) => { const tw = R0(a, 'william'), tg = R0(a, 'grabando'); return { amb: 'lab', fov: 32, atores: [EXTRA(1, { x: -1.0, z: -.6, eyes: [[0, 'look']], pose: (k, u) => talkP(k, u) }), EXTRA(5, { x: .2, z: -.6, eyes: [[0, 'lookl']], pose: (k, u) => nod(k, u) }), ABUELO({ x: 1.7, z: .2, glasses: true, eyes: [[0, 'lookl']], pose: point })],
  extra: (c) => { const cm = camara(c, 1.0, .6); cm.rotation.y = -.6; const n = lab(c, ['WILLIAM ICKES'], 1.5, [1.6, 2.3, .2], BLUE); const rec = lab(c, ['● REC'], .7, [-1.6, 2.3, -.5], RED); const g = lw(c, ['GRABANDO CONVERSACIONES'], 2.2, [-.4, .7, .4]); return { update: (u, t, cam) => { pop(n, u, tw - .2, 99, cam); pop(rec, u, tg - .2, 99, cam); rec.visible = rec.visible && Math.sin(u * 6) > -.4; pop(g, u, tg, 99, cam); } }; },
  c: [[0, 1.7, 4.2], [0, 1.45, -.3], [0, 1.65, 3.7], [0, 1.45, -.3]], range: 3.5 }; });
// 52. Entre desconocidos, 1 de cada 5. Entre buenos amigos, algo más de 1 de cada 3. Ni siquiera los que mejor nos conocen.
Q(52, (d, a) => { const ta = R0(a, 'amigos'), ts = R0(a, 'siquiera'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const b1 = barras(c, [['DESCONOCIDOS', .2 * 2.2, '#5FA0D8'], ['', 0, '#E8667F']], 2.6, [0, 1.55, -.4], { title: 'PENSAMIENTOS ACERTADOS' }); const b2 = barras(c, [['DESCONOCIDOS', .2 * 2.2, '#5FA0D8'], ['BUENOS AMIGOS', .35 * 2.2, '#E8667F']], 2.6, [0, 1.55, -.39], { title: 'PENSAMIENTOS ACERTADOS' }); const l1 = lab(c, ['1 DE 5'], .8, [-.65, 2.35, -.2], BLUE), l2 = lab(c, ['1 DE 3'], .8, [.65, 2.35, -.2], PINK); const n = lw(c, ['NI LOS QUE MEJOR TE CONOCEN'], 2.2, [0, .75, .2]); return { update: (u, t, cam) => { b2.visible = u > ta - .2; b1.visible = !b2.visible; pop(l1, u, .6, 99, cam); pop(l2, u, ta + .5, 99, cam); pop(n, u, ts - .2, 99, cam); } }; },
  c: [[0, 1.5, 4.2], [0, 1.5, -.4], [0, 1.5, 3.8], [0, 1.5, -.4]], range: 3, blur: 4 }; });
// 53. Y la ciencia de leer mentes de verdad todavía está empezando.
Q(53, (d, a) => { const te = R0(a, 'empezando'); return { amb: 'lab', fov: 30, atores: [],
  extra: (c) => { const br = cerebro(c, [0, 1.75, -.6], 1.6); const t = lp(c, ['LEER MENTES DE VERDAD'], 2.0, [0, 2.5, -.4]); const e = lw(c, ['TODAVÍA EMPEZANDO'], 1.7, [0, .85, -.2]); return { update: (u, tt, cam) => { br(Math.sin(u * 5) > 0); pop(t, u, .1, 99, cam); pop(e, u, te - .3, 99, cam); } }; },
  c: [[0, 1.7, 3.4], [0, 1.7, -.6], [0, 1.7, 3.0], [0, 1.7, -.6]], range: 3, look: MENTE }; });
// 54. 2023, Universidad de Texas, Alexander Huth: un ordenador adivinó la idea general con un escáner del cerebro.
Q(54, (d, a) => { const tal = R0(a, 'alexander'), ti = R0(a, 'idea'), te = R0(a, 'escaner'); return { amb: 'lab', fov: 32, atores: [DORM((o) => EXTRA(3, o), { x: -.1, z: -.4, y: .97, eyes: [[0, 'shut']] }), CIENT(2, { x: 1.9, z: .1, eyes: [[0, 'lookl']], pose: (k, u) => k.pose({ armL: [60, 70], armR: [60, 70] }) })],
  extra: (c) => { const gl0 = RMN(c, -1.2); const sc = screen(c, ['UNA PERSONA', 'ESCUCHA UNA HISTORIA…'], 1.6, .8, { bg: '#0E1C24', fg: '#7FD0FF', size: 54, w: 800, h: 400 }); sc.position.set(1.7, 1.95, -1.2); const n = lab(c, ['ALEXANDER HUTH'], 1.6, [.2, 2.45, -.4], BLUE); const t = lp(c, ['ADIVINA LA IDEA GENERAL'], 2.0, [.6, .6, -.2]); return { update: (u, tt, cam) => { gl0.material.opacity = .4 + .3 * Math.sin(u * 6); pop(n, u, Math.max(tal, 6.4) - .2, 99, cam); sc.visible = u > ti - .5; pop(t, u, ti, 99, cam); } }; },
  c: [[.5, 1.8, 4.8], [.5, 1.4, -.4], [.5, 1.75, 4.3], [.5, 1.4, -.4]], range: 3.5, look: { bloom: .4 } }; });
// 55. Pero tenía que pasar muchas horas tumbada dentro de la máquina. Y si no quería colaborar, no funcionaba.
Q(55, (d, a) => { const tm = R0(a, 'muchas'), tc = R0(a, 'colaborar'); return { amb: 'lab', fov: 30, atores: [DORM((o) => EXTRA(3, o), { x: -.1, z: -.4, y: .97, eyes: [[0, 'flat'], [tc, 'angry']] })],
  extra: (c) => { const gl0 = RMN(c, -1.2); const ck = clock(.35, 4); ck.position.set(1.4, 2.3, -1.0); c.add(ck); const L = SEQ(c, a, [[['MUCHAS HORAS'], 'muchas', 'w', [.9, 2.05, -.4], 1.4], [['SI NO QUIERE, NO FUNCIONA'], 'colaborar', 'r', [.5, 2.05, -.4], 2.3, 1]]); return { update: (u, t, cam) => { ck.rotation.z = -u * 3; ck.visible = u > tm - .3 && u < tc; gl0.material.opacity = u > tc + .3 ? 0 : .5; L(u, cam); } }; },
  c: [[.4, 1.75, 4.2], [.4, 1.35, -.4], [.4, 1.7, 3.8], [.4, 1.35, -.4]], range: 3 }; });
// 56. Nadie puede leerte la mente sin que tú quieras. Menos tú, hoy.
Q(56, (d, a) => { const tm = R0(a, 'menos'); return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: 0, z: -.5, eyes: [[0, 'look'], [tm, 'smug']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > tm ? 150 : 12, 30] }) })],
  extra: (c, s, A) => { const o = ondas(c); const L = SEQ(c, a, [[['NADIE PUEDE LEERTE LA MENTE'], 'nadie', 'w', [0, .9, .2], 2.4, 1], [['MENOS TÚ, HOY'], 'menos', 'p', [0, 2.35, -.4], 1.5, 1]]); return { update: (u, t, cam) => { o(u, A[0], cam, u > tm ? 1 : 0); L(u, cam); } }; },
  c: [[0, 1.6, 3.6], [0, 1.6, -.5], [0, 1.6, 3.2], [0, 1.6, -.5]], range: 3, look: MENTE }; });
// 57. 17:00
HORA(57, 17, '17:00', 'EL PARQUE');
// 58. Estás en el parque. Ella pasa con los cascos y se sienta en un banco. No te ha visto.
Q(58, (d, a) => { const tb = R0(a, 'banco'), tv = R0(a, 'visto'); return { amb: 'parque', fov: 32, atores: [ELA({ x: -3.2, z: -1.8, eyes: [[0, 'lookl']], move: (u) => [lerp(-1.2, -3.2, smooth(0, tb, u)), 0, -1.8], pose: (k, u) => (u < tb ? k.walk(u * 2) : k.pose({ head: -8 })) }), YO({ x: -1.0, z: -.2, eyes: [[0, 'look']] })],
  extra: (c, s, A) => { cascos(A[0]); const t = lw(c, ['NO TE HA VISTO'], 1.4, [-1.0, 2.2, -.2]); const k = lw(c, ['CON CASCOS'], 1.2, [-3.0, 2.25, -1.8]); return { update: (u, tt, cam) => { pop(k, u, R0(a, 'cascos') - .2, tv - .2, cam); pop(t, u, tv - .2, 99, cam); } }; },
  c: [[-2.0, 1.7, 2.6], [-2.1, 1.3, -1.2], [-2.0, 1.65, 2.1], [-2.1, 1.3, -1.2]], range: 3.5 }; });

// parque: banco en x -3.45, z -1.8
const TRISTE = { exposure: .92, bloom: .3, vig: .65 };
const OSCURO = { bg: '#2A3050', fg: '#DDE4FF' };
// 59. Y su voz suena distinta. Más baja. "Mi madre otra vez enfadada. Nadie en clase sabe que en casa todo va mal. Siempre sonrío para que no pregunten."
Q(59, (d, a) => { const tb = R0(a, 'baja'); return { amb: 'parque', fov: 30, atores: [ELA({ x: -3.0, z: -1.8, eyes: [[0, 'down'], [R0(a, 'siempre'), 'sad']], pose: (k) => k.pose({ armL: [12, 8], armR: [12, 8], head: -10, lean: 4 }) })],
  extra: (c, s, A) => { cascos(A[0]); const t = lw(c, ['MÁS BAJA'], 1.0, [-4.1, 2.15, -1.7]); const P = PSEQ(c, a, [[['MI MADRE OTRA VEZ ENFADADA'], 'madre', [-3.95, 2.15, -1.7], 1.8], [['NADIE EN CLASE SABE', 'QUE EN CASA TODO VA MAL'], 'nadie', [-3.95, 2.15, -1.7], 1.8], [['SIEMPRE SONRÍO', 'PARA QUE NO PREGUNTEN'], 'siempre', [-3.95, 2.15, -1.7], 1.75]], OSCURO); const dc = dib(c, 'casa', .8, [-1.95, 2.2, -1.7]);
    return { update: (u, tt, cam) => { pop(t, u, tb - .2, R0(a, 'madre') - .2, cam); P(u, cam); pop(dc, u, R0(a, 'casa') - .1, 99, cam); } }; },
  c: [[-3.4, 1.65, 1.4], [-3.3, 1.55, -1.8], [-3.4, 1.65, 1.0], [-3.3, 1.55, -1.8]], range: 3, look: TRISTE }; });
// 60. Te duele el pecho. Nunca te imaginaste esto. Siempre parecía tan feliz.
Q(60, (d, a) => { const ts = R0(a, 'siempre'); return { amb: 'parque', fov: 30, atores: [YO({ x: -1.0, z: -.2, eyes: [[0, 'sad']], pose: (k) => k.pose({ armL: [12, 8], armR: [12, 8], head: -12, lean: 5 }) })],
  extra: (c) => { const L = SEQ(c, a, [[['TE DUELE EL PECHO'], 'duele', 'w', [-1.0, 2.2, -.2], 1.6], [['NUNCA TE LO IMAGINASTE'], 'imaginaste', 'w', [-1.0, 2.2, -.2], 1.9], [['SIEMPRE PARECÍA TAN FELIZ'], 'siempre', 'p', [-1.0, 2.2, -.2], 2.1, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[-.8, 1.65, 2.6], [-.9, 1.5, -.3], [-.8, 1.65, 2.2], [-.9, 1.5, -.3]], range: 3, look: TRISTE }; });
// 61. Todo el día escuchando su mente como si fuera un juego. Para saber si le gustas. Para quedar bien.
Q(61, (d, a) => { const tj = R0(a, 'juego'); return { amb: 'parque', fov: 30, atores: [YO({ x: -1.0, z: -.2, eyes: [[0, 'flat'], [tj, 'sad']], pose: (k) => k.pose({ armL: [12, 8], armR: [12, 8], head: -12 }) })],
  extra: (c, s, A) => { const o = ondas(c); const L = SEQ(c, a, [[['COMO UN JUEGO'], 'juego', 'r', [-1.0, 2.2, -.2], 1.5], [['¿LE GUSTO?'], 'gustas', 'p', [-1.0, 2.2, -.2], 1.1], [['QUEDAR BIEN'], 'quedar', 'w', [-1.0, 2.2, -.2], 1.3, 1]]); return { update: (u, t, cam) => { o(u, A[0], cam, .5); L(u, cam); } }; },
  c: [[-.8, 1.65, 2.6], [-.9, 1.5, -.3], [-.8, 1.65, 2.2], [-.9, 1.5, -.3]], range: 3, look: TRISTE }; });
// 62. Lo que hay ahí dentro no es tuyo. Son sus miedos. Sus secretos.
Q(62, (d, a) => { const tt = R0(a, 'tuyo'); return { amb: 'gris', fov: 30, k: 1, atores: [ELA({ x: 0, z: -.6, eyes: [[0, 'down']], pose: (k) => k.pose({ armL: [60, 70], armR: [60, 70], head: -8 }) })],
  extra: (c) => { const b = brillos(c, 12, '#8AA8FF'); const L = SEQ(c, a, [[['NO ES TUYO'], 'tuyo', 'r', [0, 2.45, -.5], 1.2, 1], [['SUS MIEDOS'], 'miedos', 'p', [-1.2, 1.7, -.4], 1.2, 1], [['SUS SECRETOS'], 'secretos', 'p', [1.2, 1.7, -.4], 1.3, 1], [['COSAS QUE NO TE HA CONTADO'], 'cosas', 'w', [0, .85, .1], 2.4, 1]]); return { update: (u, t, cam) => { b(u, [0, 1.6, -.5, .5], u > tt ? 1 : .3); L(u, cam); } }; },
  c: [[0, 1.6, 4.2], [0, 1.6, -.6], [0, 1.6, 3.8], [0, 1.6, -.6]], range: 3, look: MENTE }; });
// 63. 18:00
HORA(63, 18, '18:00', 'EL BANCO');
// 64. Tomas una decisión. Te acercas al banco. Te sientas a su lado. Y no le dices lo que está pensando. Le preguntas.
Q(64, (d, a) => { const tb = R0(a, 'banco'), tl = R0(a, 'lado'), tp = R0(a, 'preguntas'); return { amb: 'parque', ambo: { dusk: true }, fov: 32, atores: [ELA({ x: -3.0, z: -1.8, eyes: [[0, 'down']], pose: (k) => k.pose({ head: -10 }) }), YO({ x: -3.9, z: -1.8, eyes: [[0, 'look']], move: (u) => [lerp(-1.0, -3.9, smooth(tb - 1.2, tl, u)), 0, lerp(.2, -1.8, smooth(tb - 1.2, tl, u))], pose: (k, u) => (u > tb - 1.2 && u < tl ? k.walk(u * 2) : k.pose()) })],
  extra: (c, s, A) => { cascos(A[0]); const L = SEQ(c, a, [[['UNA DECISIÓN'], 'decision', 'y', [-2.4, 2.3, -1.5], 1.4], [['NO LE DICES LO QUE PIENSA'], 'dices', 'w', [-3.45, 2.3, -1.6], 2.2], [['LE PREGUNTAS'], 'preguntas', 'p', [-3.45, 2.3, -1.6], 1.4, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[-2.6, 1.75, 2.4], [-2.8, 1.35, -1.4], [-3.0, 1.65, 1.6], [-3.3, 1.35, -1.6]], range: 3.5, look: { bloom: .45 } }; });
// 65. "Oye… ¿estás bien?"
Q(65, (d, a) => ({ amb: 'parque', ambo: { dusk: true }, fov: 30, atores: [YO({ x: -3.9, z: -1.8, eyes: [[0, 'look']], pose: talkP }), ELA({ x: -3.0, z: -1.8, eyes: [[0, 'down'], [1.2, 'look']], pose: (k, u) => k.pose({ head: u < 1.2 ? -10 : 0 }) })],
  extra: (c, s, A) => { cascos(A[1]); const g = hab(c, ['OYE…', '¿ESTÁS BIEN?'], 1.2, [-4.2, 2.1, -1.7], 64); return { update: (u, t, cam) => pop(g, u, .1, 99, cam) }; },
  c: [[-3.45, 1.6, 1.2], [-3.45, 1.45, -1.8], [-3.45, 1.6, .8], [-3.45, 1.45, -1.8]], range: 3, look: { bloom: .45 } }));
// 66. Ella se quita un casco. Te mira. En su cabeza: "¿Se lo cuento? No… sí… no lo sé."
Q(66, (d, a) => { const tq = R0(a, 'quita'), tc = R0(a, 'cuento'); return { amb: 'parque', ambo: { dusk: true }, fov: 30, atores: [YO({ x: -3.9, z: -1.8, eyes: [[0, 'look']] }), ELA({ x: -3.0, z: -1.8, eyes: [[0, 'look'], [tc, 'lookl']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > tq && u < tq + 1.2 ? 150 : 12, 30] }) })],
  extra: (c, s, A) => { const cs = cascos(A[1]); const o = ondas(c); const P = PSEQ(c, a, [[['¿SE LO CUENTO?'], 'cuento', [-2.5, 2.15, -1.7], 1.5], [['NO… SÍ… NO LO SÉ'], R0(a, 'cuento') + 1.0, [-2.5, 2.15, -1.7], 1.6]]); return { update: (u, t, cam) => { cs.rotation.z = u > tq + .4 ? .9 : 0; o(u, A[0], cam, .6); P(u, cam); } }; },
  c: [[-3.3, 1.6, 1.3], [-3.3, 1.45, -1.8], [-3.3, 1.6, .9], [-3.3, 1.45, -1.8]], range: 3, look: { bloom: .45 } }; });
// 67. Y por fuera dice: "Sí, sí, todo bien."
Q(67, (d, a) => { const ts = R0(a, 'si'); return { amb: 'parque', ambo: { dusk: true }, fov: 30, atores: [YO({ x: -3.9, z: -1.8, eyes: [[0, 'look']] }), ELA({ x: -3.0, z: -1.8, eyes: [[0, 'happy']], pose: talkP })],
  extra: (c, s, A) => { const cs = cascos(A[1]); cs.rotation.z = .9; const g = hab(c, ['SÍ, SÍ.', 'TODO BIEN.'], 1.2, [-2.6, 2.1, -1.7], 64); const f = lw(c, ['POR FUERA'], 1.0, [-4.1, 2.2, -1.7]); return { update: (u, t, cam) => { pop(f, u, .1, 99, cam); pop(g, u, ts - .2, 99, cam); } }; },
  c: [[-3.45, 1.6, 1.2], [-3.45, 1.45, -1.8], [-3.45, 1.6, .8], [-3.45, 1.45, -1.8]], range: 3, look: { bloom: .45 } }; });
// 68. Esperas. No dices nada. No usas lo que sabes. Solo te quedas ahí, a su lado.
Q(68, (d, a) => { const tu = R0(a, 'usas'); return { amb: 'parque', ambo: { dusk: true }, fov: 30, atores: [YO({ x: -3.75, z: -1.8, eyes: [[0, 'look']] }), ELA({ x: -3.15, z: -1.8, eyes: [[0, 'down']], pose: (k) => k.pose({ head: -8 }) })],
  extra: (c, s, A) => { const cs = cascos(A[1]); cs.rotation.z = .9; const L = SEQ(c, a, [[['ESPERAS'], 'esperas', 'w', [-3.45, 2.25, -1.7], 1.0], [['NO USAS LO QUE SABES'], 'usas', 'p', [-3.45, 2.25, -1.7], 2.0], [['SOLO ESTÁS A SU LADO'], 'solo', 'w', [-3.45, 2.25, -1.7], 1.9, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[-3.45, 1.7, 2.6], [-3.45, 1.4, -1.8], [-3.45, 1.65, 2.2], [-3.45, 1.4, -1.8]], range: 3, look: { bloom: .5, exposure: .98 } }; });
// 69. Y al rato, ella empieza a hablar. Te cuenta lo de su madre. Lo de casa. Lo de sonreír para que nadie pregunte.
Q(69, (d, a) => ({ amb: 'parque', ambo: { dusk: true }, fov: 30, atores: [YO({ x: -3.85, z: -1.8, eyes: [[0, 'look']], pose: nod }), ELA({ x: -3.05, z: -1.8, eyes: [[0, 'sad']], pose: (k, u) => (u > R0(a, 'hablar') ? talkP(k, u) : k.pose()) })],
  extra: (c, s, A) => { const cs = cascos(A[1]); cs.rotation.z = .9; const L = SEQ(c, a, [[['EMPIEZA A HABLAR'], 'hablar', 'y', [-3.45, 2.25, -1.7], 1.6], [['SU MADRE'], 'madre', 'w', [-3.45, 2.25, -1.7], 1.1], [['SU CASA'], 'casa', 'w', [-3.45, 2.25, -1.7], 1.0], [['SONREÍR PARA QUE NO PREGUNTEN'], 'sonreir', 'w', [-3.45, 2.25, -1.7], 2.4, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[-3.45, 1.6, 1.4], [-3.45, 1.45, -1.8], [-3.45, 1.6, 1.0], [-3.45, 1.45, -1.8]], range: 3, look: { bloom: .45 } }));
// 70. Y esta vez no lo oyes dentro de tu cabeza. Lo oyes con su voz de verdad, porque ha decidido contártelo.
Q(70, (d, a) => { const tv = R0(a, 'voz'), td = R0(a, 'decidido'); return { amb: 'parque', ambo: { dusk: true }, fov: 30, atores: [YO({ x: -3.85, z: -1.8, eyes: [[0, 'look'], [td, 'happy']] }), ELA({ x: -3.05, z: -1.8, eyes: [[0, 'look']], pose: talkP })],
  extra: (c, s, A) => { const cs = cascos(A[1]); cs.rotation.z = .9; const p = piensa(c, ['✗'], .7, [-4.3, 2.2, -1.7], { size: 110 }); const h = hab(c, ['…Y EN CASA…'], 1.1, [-2.6, 2.15, -1.7], 60); const L = SEQ(c, a, [[['CON SU VOZ DE VERDAD'], 'voz', 'w', [-3.45, .85, -1.3], 2.0], [['HA DECIDIDO CONTÁRTELO'], 'decidido', 'p', [-3.45, .85, -1.3], 2.2, 1]]); const b = brillos(c, 10, '#FFD8A0');
    return { update: (u, t, cam) => { pop(p, u, .2, tv, cam); pop(h, u, tv - .3, 99, cam); L(u, cam); b(u, [-3.45, 1.7, -1.7, .7], u > td ? 1 : 0); } }; },
  c: [[-3.45, 1.6, 1.5], [-3.45, 1.45, -1.8], [-3.45, 1.6, 1.1], [-3.45, 1.45, -1.8]], range: 3, look: { bloom: .5 } }; });
// 71. Es mucho mejor.
Q(71, (d, a) => ({ amb: 'parque', ambo: { dusk: true }, fov: 30, atores: [YO({ x: -3.75, z: -1.8, eyes: [[0, 'happy']] }), ELA({ x: -3.15, z: -1.8, eyes: [[0, 'happy']] })],
  extra: (c, s, A) => { const cs = cascos(A[1]); cs.rotation.z = .9; const t = lab(c, ['ES MUCHO MEJOR'], 1.7, [-3.45, 2.25, -1.7], PINK); return { update: (u, tt, cam) => pop(t, u, .1, 99, cam) }; },
  c: [[-3.45, 1.6, 1.6], [-3.45, 1.45, -1.8], [-3.45, 1.6, 1.3], [-3.45, 1.45, -1.8]], range: 3, look: { bloom: .55 } }));
// 72. 21:00. Os habéis quedado hablando hasta que se ha hecho de noche.
Q(72, (d, a) => ({ amb: 'parque', ambo: { night: true }, fov: 32, atores: [YO({ x: -3.75, z: -1.8, eyes: [[0, 'happy']], pose: talkP }), ELA({ x: -3.15, z: -1.8, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [70, 80], armR: [12, 8], bob: Math.abs(Math.sin(u * 10)) * .02 }) })],
  extra: (c, s, A) => { const cs = cascos(A[1]); cs.rotation.z = .9; calida(c, [-3.45, 2.8, -1.0], 4, 6); const h = lab(c, ['21:00'], .9, [-4.4, 2.3, -1.6], { bg: '#1E2230', fg: '#F2C14E', size: 96, w: 420 }); const t = lw(c, ['HABLANDO Y HABLANDO'], 1.8, [-3.2, .8, -1.2]); return { update: (u, tt, cam) => { pop(h, u, .1, 99, cam); pop(t, u, R0(a, 'hablando') - .2, 99, cam); } }; },
  c: [[-3.45, 1.7, 2.4], [-3.45, 1.4, -1.8], [-3.45, 1.65, 2.0], [-3.45, 1.4, -1.8]], range: 3, look: NOCHE }));
// 73. De vuestras series, de la pizza, de que los dos pensabais que le caíais mal al otro.
Q(73, (d, a) => { const tdos = R0(a, 'dos'); return { amb: 'parque', ambo: { night: true }, fov: 30, atores: [YO({ x: -3.75, z: -1.8, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [70, 80], armR: [12, 8], bob: Math.abs(Math.sin(u * 10)) * .02 }) }), ELA({ x: -3.15, z: -1.8, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [70, 80], bob: Math.abs(Math.sin(u * 11)) * .02 }) })],
  extra: (c, s, A) => { const cs = cascos(A[1]); cs.rotation.z = .9; calida(c, [-3.45, 2.8, -1.0], 4, 6); const d1 = dib(c, 'tele', .7, [-4.3, 2.15, -1.6]), d2 = dib(c, 'pizza', .7, [-2.6, 2.15, -1.6]); const t = lw(c, ['"¡YO CREÍA QUE TE CAÍA MAL!"'], 2.3, [-3.45, .8, -1.2]); return { update: (u, tt, cam) => { pop(d1, u, R0(a, 'series') - .1, 99, cam); pop(d2, u, R0(a, 'pizza') - .1, 99, cam); pop(t, u, tdos - .2, 99, cam); } }; },
  c: [[-3.45, 1.6, 1.6], [-3.45, 1.45, -1.8], [-3.45, 1.6, 1.2], [-3.45, 1.45, -1.8]], range: 3, look: NOCHE }; });
// 74. Cuando se despide, oyes su mente una última vez: "Ojalá me hubiera atrevido a hablarle antes."
Q(74, (d, a) => { const tdsp = R0(a, 'despide'), to = R0(a, 'ojala'); return { amb: 'parque', ambo: { night: true }, fov: 32, atores: [YO({ x: -3.9, z: -1.8, eyes: [[0, 'happy']], pose: (k, u) => (u > tdsp ? wave(k, u) : k.pose()) }), ELA({ x: -3.1, z: -1.8, eyes: [[0, 'happy']], move: (u) => [lerp(-3.1, -1.6, smooth(tdsp + .8, d, u)), 0, -1.8], pose: (k, u) => { if (u > tdsp + .8) k.walk(u * 2); else wave(k, u); } })],
  extra: (c, s, A) => { const cs = cascos(A[1]); cs.rotation.z = .9; calida(c, [-3.45, 2.8, -1.0], 4, 6); const o = ondas(c); const p = piensa(c, ['OJALÁ ME HUBIERA ATREVIDO', 'A HABLARLE ANTES'], 2.1, [-2.4, 2.25, -1.6]); return { update: (u, t, cam) => { o(u, A[0], cam, u > to - .5 ? 1 : 0); pop(p, u, to - .1, 99, cam); } }; },
  c: [[-3.0, 1.7, 2.4], [-3.0, 1.45, -1.8], [-3.0, 1.65, 2.0], [-3.0, 1.45, -1.8]], range: 3, look: NOCHE }; });
// 75. Sonríes. Porque tú pensabas exactamente lo mismo.
Q(75, (d, a) => { const te = R0(a, 'exactamente'); return { amb: 'parque', ambo: { night: true }, fov: 28, atores: [YO({ x: -3.6, z: -1.8, eyes: [[0, 'happy'], [te, 'heart']], pose: (k) => k.pose({ armL: [60, 70], armR: [60, 70] }) })],
  extra: (c) => { calida(c, [-3.45, 2.8, -1.0], 4, 6); const p = piensa(c, ['YO TAMBIÉN'], 1.3, [-2.7, 2.2, -1.7], { bg: '#FFFFFF', fg: '#2A2A34' }); const h = corazon(c, .3); h.position.set(-4.3, 2.1, -1.6); return { update: (u, t, cam) => { pop(p, u, te - .3, 99, cam); h.visible = u > te; h.scale.setScalar(latido(u, 90)); } }; },
  c: [[-3.3, 1.65, 1.2], [-3.3, 1.55, -1.8], [-3.3, 1.65, .9], [-3.3, 1.55, -1.8]], range: 2.5, look: NOCHE }; });
// 76. 23:59
HORA(76, 24, '23:59', 'SE ACABA');
// 77. Estás en la cama. Su voz se va apagando, como una radio que se queda sin pilas.
Q(77, (d, a) => { const tr = R0(a, 'radio'); return { amb: 'cuartoYo', ambo: { night: true }, fov: 30, atores: [DORM(YO, { x: -.7, z: -1.0, y: .97, eyes: [[0, 'look']] })],
  extra: (c, s, A) => { const o = ondas(c); const t = lp(c, ['COMO UNA RADIO SIN PILAS'], 2.1, [-1.1, 2.1, -.8]); const bat = lab(c, ['▮▯▯▯'], .7, [.1, 1.55, -.8], { bg: '#1E2230', fg: '#FF7A6A', size: 90, w: 360 }); return { update: (u, tt, cam) => { o(u, A[0], cam, 1 - smooth(0, d, u) * .9); pop(t, u, tr - .2, 99, cam); pop(bat, u, tr + .3, 99, cam); } }; },
  c: [[-1.0, 1.8, 2.8], [-1.1, 1.1, -1.0], [-1.0, 1.7, 2.3], [-1.1, 1.1, -1.0]], range: 2.5, look: NOCHE }; });
// 78. Lo último que oyes: "Mañana le digo de ir juntos al instituto."
Q(78, (d, a) => ({ amb: 'cuartoYo', ambo: { night: true }, fov: 30, atores: [DORM(YO, { x: -.7, z: -1.0, y: .97, eyes: [[0, 'look'], [R0(a, 'instituto'), 'heart']] })],
  extra: (c, s, A) => { const o = ondas(c); const p = piensa(c, ['MAÑANA LE DIGO DE IR', 'JUNTOS AL INSTITUTO'], 1.9, [-.6, 2.0, -.8]); return { update: (u, t, cam) => { o(u, A[0], cam, .15); pop(p, u, R0(a, 'manana') - .1, 99, cam); p.material.opacity = .85; } }; },
  c: [[-1.0, 1.8, 2.8], [-1.1, 1.2, -1.0], [-1.0, 1.7, 2.3], [-1.1, 1.2, -1.0]], range: 2.5, look: NOCHE }));
// 79. Y a las doce en punto, silencio. Tu cabeza vuelve a ser solo tuya.
Q(79, (d, a) => { const ts = R0(a, 'silencio'), tc = R0(a, 'cabeza'); return { amb: 'cuartoYo', ambo: { night: true }, fov: 30, atores: [DORM(YO, { x: -.7, z: -1.0, y: .97, eyes: [[0, 'look'], [tc, 'shut']] })],
  extra: (c) => { const h = lab(c, ['00:00'], .9, [-1.9, 2.05, -.8], { bg: '#C9361F', fg: '#fff', size: 96, w: 420 }); const L = SEQ(c, a, [[['SILENCIO'], 'silencio', 'w', [-.3, 2.05, -.8], 1.1], [['TU CABEZA ES SOLO TUYA'], 'cabeza', 'w', [-.6, 2.05, -.8], 2.0, 1]]); return { update: (u, t, cam) => { pop(h, u, .1, ts + 1, cam); L(u, cam); } }; },
  c: [[-1.0, 1.8, 2.8], [-1.1, 1.1, -1.0], [-1.0, 1.7, 2.3], [-1.1, 1.1, -1.0]], range: 2.5, look: { exposure: .85, bloom: .35 } }; });
// 80. A la mañana siguiente suena la alarma. No hay ninguna voz. No sabes qué está pensando tu crush.
Q(80, (d, a) => { const tn = R0(a, 'ninguna'), ts = R0(a, 'sabes'); return { amb: 'cuartoYo', fov: 30, atores: [YO({ x: 0, z: -.4, eyes: [[0, 'flat'], [tn, 'look'], [ts, 'lookl']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [12, 8], head: u > tn ? Math.sin(u * 2) * 10 : 0 }) })],
  extra: (c) => { const ck = clock(.4, 7); ck.position.set(-1.1, 1.4, -.6); c.add(ck); const L = SEQ(c, a, [[['¡RIIIING!'], 'alarma', 'r', [-1.0, 2.1, -.5], 1.1], [['NINGUNA VOZ'], 'ninguna', 'w', [1.0, 2.1, -.4], 1.3], [['¿QUÉ ESTARÁ PENSANDO?'], 'sabes', 'p', [1.0, 2.1, -.4], 1.9, 1]]); return { update: (u, t, cam) => { ck.rotation.z = u < tn ? Math.sin(u * 50) * .1 : 0; L(u, cam); } }; },
  c: [[0, 1.65, 3.2], [0, 1.5, -.4], [0, 1.65, 2.7], [0, 1.5, -.4]], range: 2.5, look: MANANA }; });
// 81. Y no pasa nada. Porque a las siete y media te llega un mensaje.
Q(81, (d, a) => { const tm = R0(a, 'mensaje'); return { amb: 'cuartoYo', fov: 30, atores: [YO({ x: 0, z: -.4, eyes: [[0, 'look'], [tm, 'wide']], pose: (k) => k.pose({ armL: [60, 70], armR: [60, 70] }) })],
  extra: (c, s, A) => { const ph = movil(['MI CRUSH ♥', '1 mensaje'], { hora: '07:30', bg: '#2A1830' }); ph.scale.setScalar(.35); c.add(ph); const t = lw(c, ['NO PASA NADA'], 1.3, [-1.0, 2.1, -.4]); const h = lab(c, ['7:30'], .8, [1.0, 2.1, -.4], { bg: '#1E2230', fg: '#F2C14E', size: 96, w: 400 }); const n = lab(c, ['1 MENSAJE NUEVO'], 1.4, [1.0, 1.7, -.3], PINK); return { update: (u, tt, cam) => { naMao(ph, A[0], -.02); ph.lookAt(cam.position); pop(t, u, .1, 99, cam); pop(h, u, R0(a, 'siete') - .1, 99, cam); pop(n, u, tm - .1, 99, cam); } }; },
  c: [[0, 1.6, 2.8], [0, 1.4, -.4], [0, 1.55, 2.2], [0, 1.45, -.4]], range: 2.5, look: MANANA }; });
// 82. De verdad. Escrito por ella. "¿Vamos juntos al instituto?"
Q(82, (d, a) => { const tv = R0(a, 'vamos'); return { amb: 'gris', fov: 28, k: 1, atores: [],
  extra: (c) => { const ch = chat(c, [0, 1.5, -.5], 1.15, [['l', '¿Vamos juntos al instituto?', tv - .2]], { hora: '07:30' }); const n = lw(c, ['DE VERDAD · ESCRITO POR ELLA'], 2.0, [0, .5, .5]); const h = corazon(c, .3); h.position.set(.85, 2.2, -.3); return { update: (u, t, cam) => { ch.userData.upd(u); pop(n, u, .1, 99, cam); h.visible = u > tv + .5; h.scale.setScalar(latido(u, 110) * .9); } }; },
  c: [[0, 1.5, 4.3], [0, 1.5, -.5], [0, 1.5, 3.9], [0, 1.5, -.5]], range: 2, blur: 4 }; });
// 83-86. Caminando juntos al instituto: lo que aprendiste
const CAMINO = (a, d, items, extra0) => ({ amb: 'barrio', fov: 32, atores: [YO({ x: -.4, z: -.4, eyes: [[0, 'happy']], move: (u) => [lerp(-1.2, .6, u / Math.max(d, 1)) - .35, 0, -.4], pose: (k, u) => k.walk(u * 1.6) }), ELA({ x: .4, z: -.4, eyes: [[0, 'happy']], move: (u) => [lerp(-1.2, .6, u / Math.max(d, 1)) + .35, 0, -.4], pose: (k, u) => k.walk(u * 1.6 + .5) })],
  extra: (c, s, A) => { INSTI(c); const L = SEQ(c, a, items, [0, 2.3, -.3], 2.4); const x = extra0 ? extra0(c, A) : null; return { update: (u, t, cam) => { L(u, cam); if (x) x(u, cam); } }; },
  cam: [[0, [-.6, 1.6, 3.6], [-.3, 1.3, -.4]], [d, [.6, 1.6, 3.2], [.3, 1.3, -.4]]], f: [[0, 4.0], [d, 3.6]], range: 3.5, look: MANANA });
Q(83, (d, a) => CAMINO(a, d, [[['LEER SU MENTE TE ENSEÑÓ…'], .1, 'p'], [['LA GENTE PIENSA MUCHAS TONTERÍAS'], 'tonterias', 'w', undefined, 2.6, 1]]));
Q(84, (d, a) => CAMINO(a, d, [[['NADIE SE FIJA TANTO EN TI'], 'nadie', 'w', undefined, 2.3], [['CAES MEJOR DE LO QUE CREES'], 'caemos', 'p', undefined, 2.4, 1]]));
Q(85, (d, a) => CAMINO(a, d, [[['LO IMPORTANTE NO SE DESCUBRE ESPIANDO'], .1, 'w', undefined, 2.8, 1]]));
Q(86, (d, a) => CAMINO(a, d, [[['PREGUNTANDO'], 'preguntando', 'p', [-.6, 2.3, -.3], 1.4, 1], [['Y ESCUCHANDO'], 'escuchando', 'y', [.8, 2.3, -.3], 1.4, 1]], (c) => { const h = corazon(c, .3); h.position.set(.1, 1.95, -.3); return (u) => { h.scale.setScalar(latido(u, 100)); }; }));
// 87. ¿Y tú? ¿Querrías saber qué piensa tu crush de ti? Te leo en los comentarios.
Q(87, (d, a) => { const tc = R0(a, 'comentarios'); return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: -.7, z: -.5, eyes: [[0, 'look'], [tc, 'happy']], pose: (k, u) => (u > tc ? wave(k, u) : k.pose({ armL: [12, 8], armR: [110, 20] })) }), ELA({ x: .7, z: -.5, eyes: [[0, 'smug']] })],
  extra: (c, s, A) => { const o = ondas(c); const t = lp(c, ['¿QUERRÍAS SABER QUÉ PIENSA?'], 2.4, [0, 2.4, -.4]); const p = piensa(c, ['¿?'], .7, [1.35, 2.0, -.5], { size: 100 }); const cm = lab(c, ['TE LEO EN LOS COMENTARIOS'], 2.3, [0, .85, .1], PINK); return { update: (u, tt, cam) => { o(u, A[0], cam, .6); pop(t, u, R0(a, 'querrias') - .2, 99, cam); pop(p, u, .4, 99, cam); pop(cm, u, tc - .4, 99, cam); } }; },
  c: [[0, 1.6, 4.0], [0, 1.6, -.5], [0, 1.6, 3.6], [0, 1.6, -.5]], range: 3, look: MENTE }; });
