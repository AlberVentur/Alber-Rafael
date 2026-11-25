// "¿Y si pudieras escuchar lo que la gente piensa de ti durante un día?" — horizontal 1280x720, ~8:55
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
const Q = (i, fn) => { const a = S[i], b = end(i), d = Math.min(b, 535.2) - a; CENAS.push([(x, y) => plano(x, y, mk(fn(d, a), d)), a, b]); };
const Qt = (a, b, fn) => { const d = Math.min(b, 535.2) - a; CENAS.push([(x, y) => plano(x, y, mk(fn(d, a), d)), a, b]); };
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

// ===================== AYUDAS: ESCUCHAR LO QUE PIENSAN DE TI =====================
const MAMA = (o = {}) => H({ outfit: 'roxo', hair: 'bun', hairc: '#3a2030', lash: true, glow: 0, ...o });
const DANI = (o = {}) => H({ outfit: 'azul', hair: 'afro', hairc: '#2a1b18', glow: 0, ...o });
const CAMC = [[0, 1.6, 3.2], [0, 1.45, -.3], [0, 1.6, 2.7], [0, 1.45, -.3]];
const MANANA = { exposure: 1.05, bloom: .3 };
const COCINA = { amb: 'sala', fov: 30, ambo: { wall: '#C98E5A' } };
const ROSAP = { bg: '#FFE0E6', fg: '#A0203A' };
const OSCP = { bg: '#2A2A34', fg: '#E8E2D2' };
const BLANP = { bg: '#FFFFFF', fg: '#2A2A34' };
// grano en la frente
const grano = (k) => { const g = new THREE.Group(); const m = new THREE.Mesh(new THREE.CircleGeometry(.045, 20), new THREE.MeshBasicMaterial({ color: '#E8483A' })); const hl = new THREE.Mesh(new THREE.CircleGeometry(.013, 12), new THREE.MeshBasicMaterial({ color: '#FFB0A0' })); hl.position.set(-.012, .014, .001); g.add(m, hl); g.position.set(.1, .19, .02); k.head.add(g); return g; };
// capucha (círculo detrás de la cabeza)
const capucha = (k) => { const m = new THREE.Mesh(new THREE.CircleGeometry(.4, 32), std('#2E8C80')); m.position.set(0, -.02, -.04); k.head.add(m); return m; };
// cocina
const cocinaM = (c, mesaOn = true) => { c.add(box(3.0, .9, .6, std('#F4F0E4'), -1.4, .45, -2.0)); c.add(box(3.0, .05, .64, std('#8E6242'), -1.4, .92, -2.0)); for (let i = 0; i < 4; i++) c.add(box(.6, .7, .3, std('#E8DCC4'), -2.5 + i * .72, 2.1, -2.15)); c.add(box(.9, 2.0, .6, std('#DDE2E6', { metalness: .3, roughness: .4 }), 1.8, 1.0, -2.0)); if (mesaOn) mesa(c, 0, .35, .78, 1.8, .7, '#C8A27A'); };
const tostada = () => { const g = new THREE.Group(); g.add(box(.2, .03, .2, std('#D8A050'), 0, 0, 0, false)); g.add(box(.16, .01, .16, std('#8A4A2A'), 0, .02, 0, false)); return g; };
const cuchara = () => { const g = new THREE.Group(); g.add(box(.025, .22, .02, std('#C8CED6', { metalness: .6, roughness: .3 }), 0, 0, 0, false)); const h = new THREE.Mesh(new THREE.SphereGeometry(.045, 12, 8), std('#C8CED6', { metalness: .6, roughness: .3 })); h.scale.set(1, 1.3, .4); h.position.y = .13; g.add(h); return g; };
// atril para el discurso
const atril = (c, x, z) => { c.add(box(.7, 1.1, .4, std('#6B4A33'), x, .55, z)); c.add(box(.8, .06, .5, std('#8E6242'), x, 1.12, z)); };
// taquillas del vestuario
const taquillas = (c) => { for (let i = -5; i <= 5; i++) { c.add(box(.62, 2.0, .5, std(i % 2 ? '#4A7AB8' : '#3E6AA4'), i * .66, 1.0, -2.2)); c.add(box(.06, .2, .02, std('#D8DCE2'), i * .66 + .2, 1.2, -1.94)); } };
const VEST = { amb: 'sala', fov: 30, ambo: { wall: '#8AA0B8', win: false } };
// gente sentada (para bancos y sillas)
const SENTA = (mk0, x, z, o = {}) => { const p = o.pose; return mk0({ x, z, y: SBN, ...o, pose: (k, u) => { sitP(k); if (p) p(k, u); } }); };
// pensamiento sobre la cabeza de un actor
const PT = (c, A, i, lines, w = 1.5, dx = .55, dy = .78, o = {}) => { const m = piensa(c, lines, w, [0, 0, 0], o); const v = new THREE.Vector3(); return (u, t0, t1, cam) => { A[i].head.getWorldPosition(v); m.position.set(v.x + dx, v.y + dy, v.z + .05); pop(m, u, t0, t1, cam); }; };
const tiembla = (k, u, amp = 1) => k.pose({ armL: [14 + Math.sin(u * 40) * 4 * amp, 8], armR: [14 + Math.cos(u * 38) * 4 * amp, 8], legL: [Math.sin(u * 45) * 5 * amp, 0], legR: [Math.cos(u * 43) * 5 * amp, 0] });
const frota = (k, u) => k.pose({ armL: [12, 8], armR: [150 + Math.sin(u * 12) * 8, 125] });
const ATAR = (k, u) => k.pose({ lean: -16, head: 14, armL: [35 + Math.sin(u * 9) * 8, 40], armR: [35 + Math.cos(u * 9) * 8, 40] });
const risa = (k, u) => k.pose({ armL: [40, 60], armR: [40, 60], bob: Math.abs(Math.sin(u * 12)) * .04, head: Math.sin(u * 12) * 5 });

// ===================== CENAS 0–35 =====================
const CAMA = [[-1.0, 1.8, 2.8], [-1.1, 1.1, -1.0], [-1.0, 1.7, 2.3], [-1.1, 1.1, -1.0]];
const CMAMA = [[.6, 1.55, 2.3], [.6, 1.45, -.6], [.6, 1.55, 1.9], [.6, 1.5, -.6]];
const MAMAC = (o = {}) => MAMA({ x: .6, z: -.6, ...o });
const untar = (k, u) => k.pose({ armL: [50, 70], armR: [55 + Math.sin(u * 8) * 10, 60 + Math.sin(u * 8) * 15], head: -8 });
const conTost = (c, A, i) => { const t = tostada(); c.add(t); return () => { const p = hand(A[i]); t.position.set(p.x - .12, p.y - .02, p.z + .1); }; };
// 0. Lunes. Siete y media de la mañana.
Q(0, (d, a) => ({ amb: 'cuartoYo', fov: 30, atores: [DORM(YO, { x: -.7, z: -1.0, y: .97 })],
  extra: (c) => { const ck = clock(.45, 7); ck.position.set(.3, 1.3, -1.6); c.add(ck); const L = SEQ(c, a, [[['LUNES'], .1, 'y', [-.6, 2.0, -.8], .9], [['7:30 DE LA MAÑANA'], 'siete', 'w', [-.6, 2.0, -.8], 1.6, 1]]); const z = zzz(c); return { update: (u, t, cam) => { L(u, cam); z(u, [-1.5, 1.3, -1.0], cam); } }; },
  c: CAMA, range: 2.5, look: MANANA }));
// 1. Suena la alarma. La apagas. Y entonces oyes una voz.
Q(1, (d, a) => { const ts = R0(a, 'suena'), tp = R0(a, 'apagas'), tv = R0(a, 'voz'); return { amb: 'cuartoYo', fov: 30, atores: [DORM(YO, { x: -.7, z: -1.0, y: .97, eyes: [[0, 'shut'], [ts + .3, 'flat'], [tv - .3, 'wide']] })],
  extra: (c, s, A) => { const ck = clock(.45, 7); ck.position.set(.3, 1.3, -1.6); c.add(ck); const r = lab(c, ['¡RIIIING!'], 1.1, [.3, 2.0, -1.2], RED); const v = lp(c, ['UNA VOZ'], 1.0, [-.6, 2.0, -.8]); const o = ondas(c); return { update: (u, t, cam) => { ck.rotation.z = u < tp ? Math.sin(u * 50) * .12 : 0; pop(r, u, ts, tp, cam); pop(v, u, tv, 99, cam); o(u, A[0], cam, smooth(tv - .2, tv + .3, u)); } }; },
  c: CAMA, range: 2.5, look: MANANA }; });
// 2. "Otra vez tarde. Siempre tarde."
Q(2, (d, a) => ({ ...COCINA, atores: [MAMAC({ eyes: [[0, 'flat']], pose: untar })],
  extra: (c, s, A) => { cocinaM(c, false); const tt = conTost(c, A, 0); const P = PSEQ(c, a, [[['OTRA VEZ TARDE…'], .05, [-.1, 2.05, -.5], 1.5], [['SIEMPRE TARDE.'], 'siempre', [-.1, 2.05, -.5], 1.4]], { tail: 'right' }); return { update: (u, t, cam) => { tt(); P(u, cam); } }; },
  c: CMAMA, range: 2.5, look: MANANA }));
// 3. Es tu madre. Pero tu madre está en la cocina.
Q(3, (d, a) => { const tc = R0(a, 'cocina'); return { amb: 'cuartoYo', fov: 30, atores: [YO({ x: 0, z: -.4, eyes: [[0, 'wide'], [tc, 'lookl']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [12, 8], head: u > tc ? 12 : 0 }) })],
  extra: (c, s, A) => { const o = ondas(c); const L = SEQ(c, a, [[['ES TU MADRE'], 'madre', 'p', [-.95, 2.1, -.4], 1.5], [['…QUE ESTÁ EN LA COCINA'], 'cocina', 'w', [-.9, 2.1, -.4], 1.9, 1]]); return { update: (u, t, cam) => { o(u, A[0], cam, .6); L(u, cam); } }; },
  c: [[0, 1.65, 3.0], [0, 1.5, -.4], [0, 1.65, 2.6], [0, 1.55, -.4]], range: 2.5, look: MANANA }; });
// 4. Con la boca cerrada. Untando una tostada.
Q(4, (d, a) => { const tu = R0(a, 'untando'); return { ...COCINA, atores: [MAMAC({ eyes: [[0, 'flat']], pose: untar })],
  extra: (c, s, A) => { cocinaM(c, false); const tt = conTost(c, A, 0); const L = SEQ(c, a, [[['LA BOCA CERRADA'], 'boca', 'w', [.6, 1.05, -.2], 1.3], [['UNTANDO UNA TOSTADA'], tu, 'y', [.6, 1.05, -.2], 1.5, 1]]); return { update: (u, t, cam) => { tt(); L(u, cam); } }; },
  c: [[.5, 1.4, 1.7], [.6, 1.4, -.6], [.5, 1.4, 1.5], [.6, 1.25, -.6]], range: 2, look: MANANA }; });
// 5. Te frotas los ojos. Bajas. Ella te sonríe. "Buenos días, cariño."
Q(5, (d, a) => { const tb = R0(a, 'bajas'), ts = R0(a, 'sonrie'), td = R0(a, 'buenos'); return { ...COCINA, atores: [YO({ x: -.9, z: -.4, eyes: [[0, 'shut'], [tb + .6, 'flat']], move: (u) => [lerp(-3.2, -.9, smooth(tb - .2, tb + 1.4, u)), 0, -.4], pose: (k, u) => (u < tb - .2 ? frota(k, u) : u < tb + 1.4 ? k.walk(u * 2) : k.pose()) }), MAMAC({ eyes: [[0, 'flat'], [ts, 'happy']], talk: [[td, d]], pose: (k, u) => (u < ts ? untar(k, u) : k.pose({ armL: [12, 8], armR: [50, 30] })) })],
  extra: (c, s, A) => { cocinaM(c, false); const g = hab(c, ['¡BUENOS DÍAS, CARIÑO!'], 1.4, [.9, 2.15, -.5], 56); const f = lw(c, ['TE FROTAS LOS OJOS'], 1.6, [-1.0, 2.15, -.4]); return { update: (u, t, cam) => { pop(g, u, td, 99, cam); pop(f, u, .1, tb, cam); } }; },
  c: [[0, 1.65, 3.6], [0, 1.4, -.5], [0, 1.65, 3.2], [0, 1.4, -.5]], range: 3, look: MANANA }; });
// 6. Y a la vez, sin mover los labios, oyes: "Qué ojeras tiene."
Q(6, (d, a) => { const tl = R0(a, 'labios'), to = R0(a, 'ojeras'); return { ...COCINA, atores: [MAMAC({ eyes: [[0, 'happy'], [to - .3, 'look']] })],
  extra: (c, s, A) => { cocinaM(c, false); const t = lw(c, ['SIN MOVER LOS LABIOS'], 1.6, [.6, .95, -.2]); const P = PT(c, A, 0, ['QUÉ OJERAS TIENE…'], 1.5, -.75, .45, { tail: 'right' }); return { update: (u, tt, cam) => { pop(t, u, tl - .3, 99, cam); P(u, to - .4, 99, cam); } }; },
  c: CMAMA, range: 2.5, look: MANANA }; });
// 7. Seguro que se quedó con el móvil hasta las dos.
Q(7, (d, a) => { const tm = R0(a, 'movil'); return { ...COCINA, atores: [MAMAC({ eyes: [[0, 'look'], [tm, 'flat']], pose: (k) => k.pose({ armL: [60, 70], armR: [12, 8] }) })],
  extra: (c, s, A) => { cocinaM(c, false); const P = PT(c, A, 0, ['SEGURO QUE SE QUEDÓ', 'CON EL MÓVIL HASTA LAS DOS'], 1.6, -.55, .45, { tail: 'right' }); const h = lab(c, ['02:00'], .5, [1.1, 1.3, -.4], { bg: '#1E2230', fg: '#FF7A8A', size: 90, w: 360 }); return { update: (u, t, cam) => { P(u, 0, 99, cam); pop(h, u, tm, 99, cam); } }; },
  c: CMAMA, range: 2.5, look: MANANA }; });
// 8. Te quedas quieto con la cuchara en el aire. Lo has entendido.
Q(8, (d, a) => { const te = R0(a, 'entendido'); return { ...COCINA, atores: [YO({ x: -.5, z: -.3, eyes: [[0, 'wide'], [te, 'look']], pose: (k) => k.pose({ armL: [12, 8], armR: [95, 60] }) })],
  extra: (c, s, A) => { cocinaM(c); const cu = cuchara(); c.add(cu); const o = ondas(c); const L = SEQ(c, a, [[['QUIETO'], 'quieto', 'b', [-.5, 2.1, -.3], .9], [['LA CUCHARA EN EL AIRE'], 'cuchara', 'w', [-.5, 2.1, -.3], 1.8], [['LO HAS ENTENDIDO'], te, 'p', [-.5, 2.1, -.3], 1.6, 1]]); return { update: (u, t, cam) => { const p = hand(A[0]); cu.position.set(p.x, p.y + .08, p.z + .08); L(u, cam); o(u, A[0], cam, smooth(te, te + .3, u)); } }; },
  c: [[-.4, 1.6, 2.7], [-.5, 1.45, -.3], [-.4, 1.6, 2.3], [-.5, 1.5, -.3]], range: 2.5, look: MANANA }; });
// 9. Hoy puedes escuchar lo que la gente piensa.
Q(9, (d, a) => { const tg = R0(a, 'gente'); return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: 0, z: -.5, eyes: [[0, 'wide']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [150, 120] }) })],
  extra: (c, s, A) => { const o = ondas(c); const L = SEQ(c, a, [[['HOY PUEDES ESCUCHAR'], .05, 'p', [0, 2.3, -.4], 2.0, 1], [['LO QUE LA GENTE PIENSA'], tg - .1, 'w', [0, .85, .1], 2.1, 1]]); return { update: (u, t, cam) => { o(u, A[0], cam); L(u, cam); } }; },
  c: [[0, 1.6, 3.8], [0, 1.55, -.5], [0, 1.6, 3.3], [0, 1.55, -.5]], range: 3, look: MENTE }; });
// 10. Y no lo que piensa de cualquier cosa. Lo que piensa de ti.
Q(10, (d, a) => { const tc = R0(a, 'cualquier'), tt = R0(a, 'ti'); const TX = ['¿LLOVERÁ?', 'PIZZA', '¿Y EL BUS?', 'SUEÑO']; return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: 0, z: -.5, eyes: [[0, 'look'], [tt, 'wide']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > tt ? 90 : 12, u > tt ? 120 : 8] }) })],
  extra: (c, s, A) => { const M = TX.map((t, i) => piensa(c, [t], .8, [-1.5 + (i % 2) * 3.0, i < 2 ? 2.2 : 1.4, -.6], { size: 70, bg: '#E8E2D2', fg: '#6A6258' })); const L = SEQ(c, a, [[['✗ DE CUALQUIER COSA'], tc, 'w', [0, .85, .1], 1.8], [['LO QUE PIENSAN DE TI'], tt - .3, 'p', [0, .85, .1], 2.0, 1]]); return { update: (u, t, cam) => { M.forEach((m, i) => pop(m, u, .1 + i * .2, tt - .3, cam)); L(u, cam); } }; },
  c: [[0, 1.6, 4.0], [0, 1.55, -.5], [0, 1.6, 3.5], [0, 1.55, -.5]], range: 3, look: MENTE }; });
// 11. Solo un día. Hasta medianoche.
Q(11, (d, a) => { const tm = R0(a, 'medianoche'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const ck = clock(.9, 12); ck.position.set(0, 1.6, -.8); c.add(ck); const L = SEQ(c, a, [[['SOLO UN DÍA'], .05, 'y', [0, 2.55, -.5], 1.4], [['HASTA MEDIANOCHE'], tm - .1, 'p', [0, 2.55, -.5], 1.8, 1]]); const b = brillos(c, 8, '#C8A8FF'); return { update: (u, t, cam) => { L(u, cam); b(u, [0, 1.6, -.7, 1.0]); } }; },
  c: [[0, 1.85, 3.4], [0, 1.85, -.5], [0, 1.85, 3.0], [0, 1.85, -.5]], range: 3, look: MENTE }; });
// 12. Suscríbete y activa la campanita. Y ahora sí. Vamos allá.
Q(12, (d, a) => { const ts = R0(a, 'suscribete'), tv = R0(a, 'vamos'); return { amb: 'cuartoYo', fov: 32, atores: [YO({ x: -1.0, z: -.3, eyes: [[0, 'look'], [ts, 'happy']], pose: (k, u) => (u > ts ? wave(k, u) : k.pose()) })],
  extra: (c, s, A) => { const sb = suscribe(2.4); sb.position.set(.7, 1.8, -1.0); c.add(sb); const b = brillos(c, 14, '#FFE27A'); const q = lw(c, ['¿Y SI…?'], 1.0, [-1.0, 2.35, -.3]); const v = lab(c, ['¡VAMOS ALLÁ!'], 1.4, [-1.0, 2.35, -.3], ROSA); const o = ondas(c); return { update: (u, t, cam) => { o(u, A[0], cam, .5); pop(q, u, .2, tv - .2, cam); pop(v, u, tv - .2, 99, cam); const k2 = smooth(ts - .3, ts, u) * (1 - smooth(tv - .4, tv, u)); sb.scale.setScalar(Math.max(.01, k2)); b(u, [.7, 1.8, -.9, 1.1], k2); } }; },
  c: [[0, 1.7, 3.8], [0, 1.5, -.6], [0, 1.65, 3.2], [0, 1.5, -.6]], range: 3, look: MANANA }; });
// 13. Lo primero que haces es mirarte al espejo. Tienes un grano.
const BANO = (c) => { azulejos(c, -2.0); espejo(c, 0, -1.9); };
Q(13, (d, a) => { const tg = R0(a, 'grano'); return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: 0, z: -.5, eyes: [[0, 'flat'], [tg, 'wide']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > tg ? 150 : 12, u > tg ? 130 : 8] }) })],
  extra: (c, s, A) => { BANO(c); const gr = grano(A[0]); const L = SEQ(c, a, [[['EL ESPEJO'], 'espejo', 'w', [-.85, 2.15, -.4], 1.0], [['UN GRANO'], tg, 'r', [1.0, 2.2, -.4], 1.1, 1]]); return { update: (u, t, cam) => { gr.visible = u > tg - .1; L(u, cam); } }; },
  c: [[0, 1.65, 3.2], [0, 1.5, -.5], [0, 1.65, 2.7], [0, 1.55, -.5]], range: 2.5, look: MANANA }; });
// 14. En la frente. Enorme. Rojo. Del tamaño de un planeta.
Q(14, (d, a) => { const te = R0(a, 'enorme'), tp = R0(a, 'planeta'); return { amb: 'gris', fov: 28, k: 1, atores: [YO({ x: 0, z: -.5, eyes: [[0, 'wide'], [tp, 'sad']] })],
  extra: (c, s, A) => { BANO(c); const gr = grano(A[0]); const ring = new THREE.Mesh(new THREE.TorusGeometry(.09, .008, 8, 32), new THREE.MeshBasicMaterial({ color: '#F2C14E' })); ring.rotation.x = 1.2; gr.add(ring); const L = SEQ(c, a, [[['EN LA FRENTE'], .05, 'w', [0, 1.28, -.2], .8], [['ENORME'], te, 'r', [0, 1.28, -.2], .6], [['ROJO'], 'rojo', 'r', [0, 1.28, -.2], .5], [['DEL TAMAÑO DE UN PLANETA'], tp - .4, 'y', [0, 1.28, -.2], 1.1, 1]]);
    return { update: (u, t, cam) => { gr.scale.setScalar(1 + smooth(te, tp, u) * 1.2); ring.visible = u > tp - .2; ring.rotation.z = u; L(u, cam); } }; },
  c: [[0, 1.75, 2.0], [0, 1.65, -.5], [0, 1.75, 1.6], [0, 1.7, -.5]], range: 2, look: MANANA }; });
// 15. Te pones la capucha y sales de casa pensando: hoy todo el mundo me va a mirar el grano.
Q(15, (d, a) => { const tc = R0(a, 'capucha'), th = R0(a, 'hoy'); return { amb: 'barrio', fov: 30, atores: [YO({ x: 0, z: -.3, eyes: [[0, 'sad']], move: (u) => [lerp(-1.6, .6, smooth(tc + .5, d, u)), 0, -.3], pose: (k, u) => (u > tc + .5 ? k.walk(u * 2) : k.pose({ armL: [150, 130], armR: [150, 130] })) })],
  extra: (c, s, A) => { const cp = capucha(A[0]); const gr = grano(A[0]); const t = lw(c, ['LA CAPUCHA'], 1.1, [-1.2, 2.25, -.3]); const P = PT(c, A, 0, ['HOY TODO EL MUNDO', 'ME VA A MIRAR EL GRANO'], 1.9, .7, .55, BLANP); return { update: (u, tt, cam) => { cp.visible = u > tc; pop(t, u, tc, th - .2, cam); P(u, th - .2, 99, cam); } }; },
  c: [[-.3, 1.7, 3.6], [-.3, 1.5, -.3], [.2, 1.7, 3.2], [.2, 1.5, -.3]], range: 3, look: MANANA }; });
// ---- autobús
const BUSP = (i, x, o = {}) => EXTRA(i, { x, z: -.6, ...o });
const BUSI = (dx = 0) => [BUSP(1, -2.4 + dx, { eyes: [[0, 'lookl']] }), BUSP(6, -1.2 + dx, { eyes: [[0, 'flat']] }), BUSP(5, 1.3 + dx, { eyes: [[0, 'look']], pose: (k) => k.pose({ armL: [150, 20], armR: [12, 8] }) }), BUSP(3, 2.5 + dx, { eyes: [[0, 'sad']] })];
const conCap = (A, i) => { capucha(A[i]); grano(A[i]); };
// 16. Subes al autobús. Y te preparas para lo peor. Para oír las risas por dentro.
Q(16, (d, a) => { const tp = R0(a, 'peor'); return { amb: 'gris', fov: 32, k: 1, atores: [YO({ x: 0, z: -.3, eyes: [[0, 'flat'], [tp, 'shut']], pose: (k) => k.pose({ armL: [12, 8], armR: [150, 20] }) }), ...BUSI()],
  extra: (c, s, A) => { const bus = BUS(c); conCap(A, 0); const L = SEQ(c, a, [[['AL AUTOBÚS'], .1, 'y', [0, 2.3, -.3], 1.2], [['PREPÁRATE PARA LO PEOR'], tp - .2, 'r', [0, 2.3, -.3], 2.0], [['LAS RISAS POR DENTRO'], 'risas', 'w', [0, 2.3, -.3], 1.9, 1]]); return { update: (u, t, cam) => { bus(u); L(u, cam); shake(cam, .004, u); } }; },
  c: [[0, 1.7, 4.2], [0, 1.45, -.4], [0, 1.7, 3.7], [0, 1.45, -.4]], range: 3 }; });
// 17. Pero no oyes nada.
Q(17, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [YO({ x: 0, z: -.3, eyes: [[0, 'look'], [.6, 'lookl']], pose: (k) => k.pose({ armL: [12, 8], armR: [150, 20] }) })],
  extra: (c, s, A) => { const bus = BUS(c); conCap(A, 0); const o = ondas(c); const t = lw(c, ['NADA'], .8, [-.9, 2.1, -.3]); return { update: (u, tt, cam) => { bus(u); o(u, A[0], cam, .6); pop(t, u, .3, 99, cam); } }; },
  c: [[0, 1.7, 2.8], [0, 1.6, -.3], [0, 1.7, 2.5], [0, 1.6, -.3]], range: 2.5 }));
// 18. Bueno, oyes cosas. "¿Habré apagado la plancha?" "Tengo examen de mates y no he estudiado."
Q(18, (d, a) => ({ amb: 'gris', fov: 32, k: 1, atores: [YO({ x: 0, z: -.3, eyes: [[0, 'look']], pose: (k) => k.pose({ armL: [12, 8], armR: [150, 20] }) }), ...BUSI()],
  extra: (c, s, A) => { const bus = BUS(c); conCap(A, 0); const o = ondas(c); const t = lw(c, ['BUENO… OYES COSAS'], 1.6, [0, 2.35, -.3]); const p1 = PT(c, A, 2, ['¿HABRÉ APAGADO', 'LA PLANCHA?'], 1.3, -.1, .62, { tail: 'right' }), p2 = PT(c, A, 3, ['TENGO EXAMEN DE MATES', 'Y NO HE ESTUDIADO'], 1.6, .1, .62); const th = R0(a, 'habre'), tt = R0(a, 'tengo');
    return { update: (u, tt2, cam) => { bus(u); o(u, A[0], cam); pop(t, u, .05, th - .2, cam); p1(u, th - .1, 99, cam); p2(u, tt - .1, 99, cam); } }; },
  c: [[0, 1.75, 4.4], [0, 1.6, -.4], [0, 1.75, 3.9], [0, 1.6, -.4]], range: 3 }));
// 19. "Me duele el pie." "¿Por qué me ha contestado solo con un emoji?"
Q(19, (d, a) => { const tp = R0(a, 'por'); return { amb: 'gris', fov: 32, k: 1, atores: [YO({ x: 0, z: -.3, eyes: [[0, 'look']], pose: (k) => k.pose({ armL: [12, 8], armR: [150, 20] }) }), ...BUSI()],
  extra: (c, s, A) => { const bus = BUS(c); conCap(A, 0); const o = ondas(c); const p1 = PT(c, A, 3, ['ME DUELE EL PIE'], 1.2, .2, .55), p2 = PT(c, A, 2, ['¿POR QUÉ ME HA CONTESTADO', 'SOLO CON UN EMOJI? 🙂'], 1.8, .3, .62); return { update: (u, t, cam) => { bus(u); o(u, A[0], cam); p1(u, .05, 99, cam); p2(u, tp - .1, 99, cam); } }; },
  c: [[0, 1.75, 4.4], [0, 1.6, -.4], [0, 1.75, 3.9], [0, 1.6, -.4]], range: 3 }; });
// 20. Ni una sola persona está pensando en tu grano. Ni una. Todo el mundo está pensando en sí mismo.
Q(20, (d, a) => { const tt = R0(a, 'todo'); const TX = ['¿Y MI PELO?', '¿LLEGO TARDE?', '¿Y MI CARA?', '¿HE DICHO ALGO MAL?']; return { amb: 'gris', fov: 32, k: 1, atores: [YO({ x: 0, z: -.3, eyes: [[0, 'look'], [tt, 'happy']], pose: (k) => k.pose({ armL: [12, 8], armR: [150, 20] }) }), ...BUSI()],
  extra: (c, s, A) => { const bus = BUS(c); conCap(A, 0); const P = TX.map((t, i) => PT(c, A, i + 1, [t], 1.0, i === 0 ? .55 : i === 3 ? -.55 : 0, .6, i < 2 ? {} : { tail: 'right' })); const L = SEQ(c, a, [[['NADIE PIENSA EN TU GRANO'], .1, 'w', [0, 2.3, -.3], 2.0], [['CADA UNO PIENSA EN SÍ MISMO'], tt - .1, 'p', [0, .8, .3], 2.3, 1]]); return { update: (u, t, cam) => { bus(u); P.forEach((p, i) => p(u, tt + i * .3, 99, cam)); L(u, cam); } }; },
  c: [[0, 1.8, 4.8], [0, 1.6, -.4], [0, 1.8, 4.3], [0, 1.6, -.4]], range: 3 }; });
// 21. Y esto no te pasa solo a ti.
Q(21, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [YO({ x: 0, z: -.5, eyes: [[0, 'look']] }), EXTRA(0, { x: -1.4, z: -.8, eyes: [[0, 'look']] }), EXTRA(2, { x: 1.4, z: -.8, eyes: [[0, 'look']] })],
  extra: (c) => { const t = lw(c, ['NO TE PASA SOLO A TI'], 2.0, [0, 2.35, -.5]); return { update: (u, tt, cam) => pop(t, u, .1, 99, cam) }; },
  c: [[0, 1.6, 4.0], [0, 1.5, -.5], [0, 1.6, 3.6], [0, 1.5, -.5]], range: 3 }));
// 22. En el año 2000, el psicólogo Thomas Gilovich y su equipo, en la Universidad de Cornell, hicieron un experimento buenísimo.
const GILO = (o = {}) => PROF({ x: -.6, z: -.4, ...o });
Q(22, (d, a) => { const tg = R0(a, 'gilovich'), tc = R0(a, 'cornell'), te = R0(a, 'experimento'); return { amb: 'lab', fov: 32, atores: [GILO({ eyes: [[0, 'look'], [te, 'happy']], pose: (k, u) => (u > te ? point(k) : k.pose()) }), CIENT(1, { x: .8, z: -.5, eyes: [[0, 'lookl']] }), CIENT(3, { x: 1.7, z: -.9, eyes: [[0, 'lookl']] })],
  extra: (c) => { const L = SEQ(c, a, [[['THOMAS GILOVICH'], tg - .3, 'b', [-.6, 2.25, -.3], 1.6], [['UNIVERSIDAD DE CORNELL'], tc - .4, 'w', [0, 2.35, -.3], 2.0], [['UN EXPERIMENTO BUENÍSIMO'], te - .1, 'y', [0, 2.35, -.3], 2.2, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.7, 3.9], [.2, 1.5, -.5], [0, 1.7, 3.4], [.2, 1.5, -.5]], range: 3 }; });
// 23. Le pedían a un estudiante que se pusiera una camiseta muy vergonzosa, con la cara de un cantante pasado de moda,
Q(23, (d, a) => { const tc = R0(a, 'camiseta'), tca = R0(a, 'cantante'); return { amb: 'lab', fov: 32, atores: [EXTRA(5, { x: 0, z: -.3, eyes: [[0, 'look'], [tc, 'flat'], [tca, 'sad']] }), GILO({ x: -1.4, eyes: [[0, 'happy']], pose: point })],
  extra: (c, s, A) => { const cc = cartelCara('♪♪', '#E8667F', .3); cc.position.set(0, -.28, .17); A[0].torso.add(cc); const t = lab(c, ['CAMISETA VERGONZOSA'], 2.0, [.3, 2.25, -.1], RED); const ct = lw(c, ['CON UN CANTANTE PASADO DE MODA'], 2.4, [0, .55, .4]); const n = notas(c); const v = new THREE.Vector3();
    return { update: (u, tt, cam) => { cc.visible = u > tc - .2; pop(t, u, tc - .2, 99, cam); pop(ct, u, tca - .5, 99, cam); A[0].torso.getWorldPosition(v); n(u, v, cam, u > tca); } }; },
  c: [[0, 1.6, 3.6], [-.2, 1.35, -.4], [0, 1.6, 3.1], [-.1, 1.35, -.4]], range: 3 }; });
// 24. y que entrara en una clase llena de gente.
Q(24, (d, a) => ({ ...AULA(), atores: [EXTRA(5, { x: 0, z: -.2, eyes: [[0, 'sad']], move: (u) => [lerp(-2.8, -.4, smooth(0, d * .8, u)), 0, -.2], pose: (k, u) => (u < d * .8 ? k.walk(u * 2) : k.pose()) }), ...[1.0, 2.2, -2.0].map((x, i) => EXTRA(i * 2 + 1, { x, z: -1.6, eyes: [[0, 'look']] }))],
  extra: (c, s, A) => { const cc = cartelCara('♪♪', '#E8667F', .3); cc.position.set(0, -.28, .17); A[0].torso.add(cc); pupitres(c, [-2.0, 1.0, 2.2], -1.2); QA(c); const t = lw(c, ['UNA CLASE LLENA DE GENTE'], 2.2, [0, 2.4, -.6]); return { update: (u, tt, cam) => pop(t, u, .1, 99, cam) }; },
  c: [[0, 1.75, 4.2], [0, 1.4, -.8], [0, 1.75, 3.7], [0, 1.4, -.8]], range: 3 }));
// 25. Luego le preguntaban: ¿cuántos crees que se han fijado en tu camiseta?
Q(25, (d, a) => { const tc = R0(a, 'cuantos'); return { amb: 'lab', fov: 32, atores: [EXTRA(5, { x: .6, z: -.4, eyes: [[0, 'lookl'], [tc + 1, 'sad']] }), GILO({ eyes: [[0, 'look']], talk: [[tc - .2, d]] })],
  extra: (c, s, A) => { const cc = cartelCara('♪♪', '#E8667F', .3); cc.position.set(0, -.28, .17); A[0].torso.add(cc); const g = hab(c, ['¿CUÁNTOS CREES', 'QUE SE HAN FIJADO?'], 1.5, [-.6, 2.25, -.3], 56); return { update: (u, t, cam) => pop(g, u, tc - .2, 99, cam) }; },
  c: [[0, 1.65, 3.4], [0, 1.45, -.4], [0, 1.65, 3.0], [0, 1.45, -.4]], range: 3 }; });
// 26. Los estudiantes calculaban que más o menos la mitad.
Q(26, (d, a) => { const tm = R0(a, 'mitad'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const b1 = barras(c, [['LO QUE\nCREÍAN', .5 * 1.6, '#E8667F'], ['', 0, '#5FA0D8']], 2.6, [0, 1.5, -.4], { title: '¿CUÁNTOS SE FIJAN?' }); const l1 = lab(c, ['LA MITAD'], 1.0, [-.65, 2.35, -.2], PINK); return { update: (u, t, cam) => pop(l1, u, tm - .3, 99, cam) }; },
  c: [[0, 1.6, 3.6], [0, 1.6, -.4], [0, 1.6, 3.2], [0, 1.6, -.4]], range: 3, blur: 4 }; });
// 27. ¿Y en realidad? Se había fijado alrededor de uno de cada cuatro.
Q(27, (d, a) => { const tu = R0(a, 'uno'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const b1 = barras(c, [['LO QUE\nCREÍAN', .5 * 1.6, '#E8667F'], ['', 0, '#5FA0D8']], 2.6, [0, 1.5, -.4], { title: '¿CUÁNTOS SE FIJAN?' }); const b2 = barras(c, [['LO QUE\nCREÍAN', .5 * 1.6, '#E8667F'], ['EN\nREALIDAD', .25 * 1.6, '#5FA0D8']], 2.6, [0, 1.5, -.39], { title: '¿CUÁNTOS SE FIJAN?' }); const l1 = lab(c, ['LA MITAD'], 1.0, [-.65, 2.35, -.2], PINK), l2 = lab(c, ['1 DE CADA 4'], 1.1, [.65, 2.35, -.2], BLUE); return { update: (u, t, cam) => { b2.visible = u > tu - .5; b1.visible = !b2.visible; pop(l1, u, 0, 99, cam); pop(l2, u, tu, 99, cam); } }; },
  c: [[0, 1.6, 3.6], [0, 1.6, -.4], [0, 1.6, 3.2], [0, 1.6, -.4]], range: 3, blur: 4 }; });
// 28. Lo llamaron el efecto foco.
Q(28, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [YO({ x: 0, z: -.5, eyes: [[0, 'wide']] })],
  extra: (c, s, A) => { foco(c, 0, -.5); grano(A[0]); const t = lp(c, ['EFECTO FOCO'], 1.5, [0, 2.3, -.4]); return { update: (u, tt, cam) => pop(t, u, .2, 99, cam) }; },
  c: [[0, 1.7, 3.8], [0, 1.5, -.5], [0, 1.7, 3.4], [0, 1.5, -.5]], range: 3, look: { exposure: .8, vig: .7 } }));
// 29. Nos creemos que vamos por la vida con un foco encima, y que todo el mundo nos mira.
Q(29, (d, a) => { const tm = R0(a, 'mira'); return { amb: 'gris', fov: 32, k: 1, atores: [YO({ x: 0, z: -.4, eyes: [[0, 'sad']], move: (u) => [lerp(-.8, .3, u / d), 0, -.4], pose: (k, u) => k.walk(u * 1.6) }), EXTRA(0, { x: -2.0, z: -1.2, eyes: [[0, 'look'], [tm, 'look']] }), EXTRA(4, { x: 2.0, z: -1.2, eyes: [[0, 'lookl']] }), EXTRA(6, { x: -1.0, z: -1.8, eyes: [[0, 'look']] }), EXTRA(2, { x: 1.1, z: -1.8, eyes: [[0, 'lookl']] })],
  extra: (c, s, A) => { const [l, g] = foco(c, 0, -.4); grano(A[0]); const v = new THREE.Vector3(); const L = SEQ(c, a, [[['UN FOCO ENCIMA'], 'foco', 'y', [0, 2.4, -.4], 1.5], [['TODOS TE MIRAN… ¿NO?'], tm - .4, 'r', [0, 2.4, -.4], 1.9, 1]]); return { update: (u, t, cam) => { A[0].root.getWorldPosition(v); l.position.x = v.x; l.target.position.x = v.x; g.position.x = v.x; L(u, cam); } }; },
  c: [[0, 1.7, 4.4], [0, 1.4, -.6], [0, 1.7, 3.9], [0, 1.4, -.6]], range: 3, look: { exposure: .85, vig: .65 } }; });
// 30. Pero los demás están demasiado ocupados con su propio foco.
Q(30, (d, a) => { const TX = ['¿Y MI PELO?', '¿ME VEO RARO?', '¿Y MI CARA?', '¿HE DICHO ALGO MAL?']; const XS = [-1.9, -.65, .65, 1.9]; return { amb: 'gris', fov: 32, k: 1, atores: XS.map((x, i) => EXTRA(i + 1, { x, z: -.6, eyes: [[0, i % 2 ? 'lookl' : 'flat']] })),
  extra: (c, s, A) => { XS.forEach((x) => foco(c, x, -.6)); const P = TX.map((t, i) => PT(c, A, i, [t], 1.0, 0, .62, { size: 56 })); const t = lp(c, ['CADA UNO CON SU PROPIO FOCO'], 2.4, [0, .8, .4]); return { update: (u, tt, cam) => { P.forEach((p, i) => p(u, .1 + i * .25, 99, cam)); pop(t, u, R0(a, 'propio') - .3, 99, cam); } }; },
  c: [[0, 1.8, 4.8], [0, 1.6, -.6], [0, 1.8, 4.4], [0, 1.6, -.6]], range: 3, look: { exposure: .85, vig: .6 } }; });
// 31. Te quitas la capucha.
Q(31, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [YO({ x: 0, z: -.3, eyes: [[0, 'look'], [.7, 'happy']], pose: (k, u) => k.pose({ armL: [u < .7 ? 150 : 12, 130], armR: [u < .7 ? 150 : 150, u < .7 ? 130 : 20] }) })],
  extra: (c, s, A) => { const bus = BUS(c); const cp = capucha(A[0]); grano(A[0]); return { update: (u, t, cam) => { bus(u); cp.visible = u < .6; } }; },
  c: [[0, 1.7, 2.8], [0, 1.6, -.3], [0, 1.7, 2.5], [0, 1.6, -.3]], range: 2.5 }));
// 32. Primera hora. Lengua. Y te toca exponer. Delante de toda la clase.
const PIZ = (c, l) => { const m = pizarra(c, l); m.position.z += .04; return m; };
const CLASE = (c) => { pupitres(c, [-2.2, -1.0, 1.0, 2.2], .6); PIZ(c, ['LENGUA', 'Exposición oral']); };
const ALUM = (fn = () => [[0, 'look']]) => [-2.2, -1.0, 1.0, 2.2].map((x, i) => EXTRA([0, 2, 4, 6][i], { x, z: .9, y: -.25, eyes: fn(i), pose: (k) => sitP(k) }));
Q(32, (d, a) => { const te = R0(a, 'exponer'), td = R0(a, 'delante'); return { ...AULA(), atores: [YO({ x: 0, z: -1.6, eyes: [[0, 'look'], [te, 'wide']], pose: (k, u) => sitP(k) }), ...ALUM((i) => [[0, i % 2 ? 'lookl' : 'look'], [td, 'look']])],
  extra: (c) => { pupitres(c, [0], -1.3); CLASE(c); const L = SEQ(c, a, [[['PRIMERA HORA · LENGUA'], .05, 'w', [0, 2.6, -1.4], 2.0], [['TE TOCA EXPONER'], te - .2, 'r', [0, 2.6, -1.4], 1.7], [['DELANTE DE TODA LA CLASE'], td, 'y', [0, 2.6, -1.4], 2.2, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.9, 4.4], [0, 1.4, -1.2], [0, 1.9, 3.9], [0, 1.4, -1.2]], range: 3 }; });
// 33. Te levantas. Te tiemblan las piernas. Notas la cara ardiendo.
const EXPO = (o = {}) => YO({ x: 0, z: -1.9, ...o });
const CEXPO = [[0, 1.6, 1.4], [0, 1.45, -1.9], [0, 1.6, 1.0], [0, 1.5, -1.9]];
Q(33, (d, a) => { const tt = R0(a, 'tiemblan'), tc = R0(a, 'cara'); return { ...AULA(), atores: [EXPO({ eyes: [[0, 'wide'], [tc, 'sad']], pose: (k, u) => tiembla(k, u, u > tt ? 1 : .2) })],
  extra: (c, s, A) => { PIZ(c, ['LENGUA', 'Exposición oral']); const r = rubor(A[0]); const L = SEQ(c, a, [[['TE TIEMBLAN LAS PIERNAS'], tt - .1, 'w', [0, .85, -1.4], 2.0], [['LA CARA ARDIENDO'], tc - .1, 'r', [0, 2.4, -1.8], 1.6, 1]]); return { update: (u, t, cam) => { r(smooth(tc - .2, tc + .6, u) * .7); L(u, cam); } }; },
  c: CEXPO, range: 2.5 }; });
// 34. Estás seguro de que todo el mundo ve lo nervioso que estás. De que se te nota en la voz, en las manos, en la frente.
Q(34, (d, a) => { const tn = R0(a, 'nervioso'); return { ...AULA(), atores: [EXPO({ eyes: [[0, 'sad']], pose: (k, u) => tiembla(k, u, .6) })],
  extra: (c, s, A) => { PIZ(c, ['LENGUA', 'Exposición oral']); const r = rubor(A[0]); const gt = gotas(c, 6); const v = new THREE.Vector3(); const L = SEQ(c, a, [[['TODO EL MUNDO LO VE'], tn - .5, 'r', [0, 2.4, -1.8], 1.8], [['EN LA VOZ'], 'voz', 'w', [-.85, 2.0, -1.8], 1.0, 1], [['EN LAS MANOS'], 'manos', 'w', [.9, 1.5, -1.8], 1.2, 1], [['EN LA FRENTE'], 'frente', 'w', [.9, 2.0, -1.8], 1.2, 1]]);
    return { update: (u, t, cam) => { r(.25); A[0].head.getWorldPosition(v); gt(u, [v.x, v.y + .1, v.z, .25]); L(u, cam); } }; },
  c: [[0, 1.65, 1.9], [0, 1.55, -1.9], [0, 1.65, 1.5], [0, 1.55, -1.9]], range: 2.5 }; });
// 35. Empiezas a hablar. Y escuchas.
Q(35, (d, a) => { const te = R0(a, 'escuchas'); return { ...AULA(), atores: [EXPO({ eyes: [[0, 'look'], [te, 'wide']], talk: [[0, te]], pose: talkP })],
  extra: (c, s, A) => { PIZ(c, ['LENGUA', 'Exposición oral']); const r = rubor(A[0]); const o = ondas(c); const t = lp(c, ['Y ESCUCHAS…'], 1.2, [0, 2.4, -1.8]); return { update: (u, tt, cam) => { r(.2); o(u, A[0], cam, smooth(te - .2, te + .3, u)); pop(t, u, te, 99, cam); } }; },
  c: CEXPO, range: 2.5 }; });

// ===================== CENAS 36–74 =====================
// la clase vista desde la pizarra
const CXS = [-1.8, -.6, .6, 1.8];
const CLAV = (fn = () => [[0, 'look']]) => CXS.map((x, i) => EXTRA([0, 2, 4, 6][i], { x, z: -.9, y: -.25, eyes: fn(i), pose: (k) => sitP(k) }));
const CLAVC = [[0, 1.75, 4.0], [0, 1.35, -.9], [0, 1.75, 3.6], [0, 1.35, -.9]];
const CLAVM = (c) => { pupitres(c, CXS, -.45); PIZ(c, ['LENGUA', 'Exposición oral']); };
// 36. "Qué bien lo explica." "Ojalá yo hablara así de tranquilo."
Q(36, (d, a) => { const to = R0(a, 'ojala'); return { ...AULA(), atores: CLAV((i) => [[0, i === 1 || i === 2 ? 'happy' : 'look']]),
  extra: (c, s, A) => { CLAVM(c); const p1 = PT(c, A, 1, ['QUÉ BIEN LO EXPLICA'], 1.4, -.2, .62, { tail: 'right' }), p2 = PT(c, A, 2, ['OJALÁ YO HABLARA', 'ASÍ DE TRANQUILO'], 1.5, .25, .66); return { update: (u, t, cam) => { p1(u, .05, 99, cam); p2(u, to - .1, 99, cam); } }; },
  c: CLAVC, range: 3 }; });
// 37. "¿Esto entra en el examen?" "Tengo hambre."
Q(37, (d, a) => { const tt = R0(a, 'tengo'); return { ...AULA(), atores: CLAV((i) => [[0, i === 0 ? 'flat' : i === 3 ? 'sad' : 'look']]),
  extra: (c, s, A) => { CLAVM(c); const p1 = PT(c, A, 0, ['¿ESTO ENTRA', 'EN EL EXAMEN?'], 1.3, .35, .66), p2 = PT(c, A, 3, ['TENGO HAMBRE'], 1.2, -.3, .62, { tail: 'right' }); return { update: (u, t, cam) => { p1(u, .05, 99, cam); p2(u, tt - .1, 99, cam); } }; },
  c: CLAVC, range: 3 }; });
// 38. ¿Tranquilo? ¿Tú? Si tienes el corazón a doscientos.
Q(38, (d, a) => { const tu = R0(a, 'tu'), tc = R0(a, 'corazon'); return { ...AULA(), atores: [EXPO({ eyes: [[0, 'wide'], [tc, 'sad']], pose: (k, u) => tiembla(k, u, .3) })],
  extra: (c, s, A) => { PIZ(c, ['LENGUA', 'Exposición oral']); const h = corazon(c, .3); const v = new THREE.Vector3(); const L = SEQ(c, a, [[['¿TRANQUILO?'], .05, 'b', [-.75, 2.0, -1.8], 1.0, 1], [['¿TÚ?'], tu, 'b', [.75, 2.0, -1.8], .75, 1], [['EL CORAZÓN A 200'], tc, 'r', [0, 1.05, -1.6], 1.4, 1]]);
    return { update: (u, t, cam) => { A[0].torso.getWorldPosition(v); h.position.set(v.x + .08, v.y + .05, v.z + .2); h.visible = u > tc - .2; h.scale.setScalar(latido(u, 200) * 1.2); pointer(h, cam); L(u, cam); } }; },
  c: CEXPO, range: 2.5 }; });
// 39. Y aquí viene otro experimento del mismo equipo.
Q(39, (d, a) => { const te = R0(a, 'equipo'); return { amb: 'lab', fov: 32, atores: [GILO({ x: -.9, eyes: [[0, 'happy']], pose: wave }), CIENT(1, { x: .3, z: -.5, eyes: [[0, 'happy']] }), PROF({ x: 1.3, z: -.6, eyes: [[0, 'look']] })],
  extra: (c) => { const L = SEQ(c, a, [[['OTRO EXPERIMENTO'], .05, 'y', [0, 2.35, -.4], 1.7, 1], [['DEL MISMO EQUIPO'], te - .2, 'w', [0, .8, .2], 1.6, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.7, 3.9], [0, 1.5, -.5], [0, 1.7, 3.4], [0, 1.5, -.5]], range: 3 }; });
// 40. En 1998, Gilovich, Savitsky y Medvec | pidieron a voluntarios que dieran un discurso delante de otras personas.
const PUB = (fn = () => [[0, 'look']]) => [-1.8, -.6, .6, 1.8].map((x, i) => EXTRA([1, 3, 5, 7][i], { x, z: .4, y: -.25, eyes: fn(i), pose: (k) => sitP(k) }));
const ESC = (o = {}) => EXTRA(4, { x: 0, z: -1.6, ...o });
const CPUB = [[0, 1.8, 4.2], [0, 1.4, -1.4], [0, 1.8, 3.8], [0, 1.4, -1.4]];
Qs(40, ['pidieron'], [(d, a) => ({ amb: 'lab', fov: 32, atores: [GILO({ x: -1.1, eyes: [[0, 'look']] }), PROF({ x: 0, z: -.5, eyes: [[0, 'happy']] }), CIENT(4, { x: 1.1, z: -.5, eyes: [[0, 'look']] })],
  extra: (c) => { const t = lab(c, ['GILOVICH · SAVITSKY · MEDVEC'], 2.6, [0, .75, .2], BLUE); return { update: (u, tt, cam) => pop(t, u, R0(a, 'gilovich') - .2, 99, cam) }; },
  c: [[0, 1.7, 3.9], [0, 1.45, -.5], [0, 1.7, 3.5], [0, 1.45, -.5]], range: 3 }),
(d, a) => ({ ...AULA(), atores: [ESC({ eyes: [[0, 'wide']], talk: [[R0(a, 'discurso'), d]], pose: (k, u) => tiembla(k, u, .5) }), ...PUB()],
  extra: (c) => { atril(c, 0, -1.25); PIZ(c, ['EXPERIMENTO', 'Hablar en público']); const L = SEQ(c, a, [[['VOLUNTARIOS'], 'voluntarios', 'w', [0, 2.5, -1.4], 1.4], [['UN DISCURSO'], 'discurso', 'y', [0, 2.5, -1.4], 1.4], [['DELANTE DE OTRAS PERSONAS'], 'delante', 'w', [0, 2.5, -1.4], 2.2, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 2.1, 4.6], [0, 1.35, -1.4], [0, 2.05, 4.2], [0, 1.35, -1.4]], range: 3 })]);
// 41. Después les preguntaron cuánto creían que se les había notado lo nerviosos que estaban.
Q(41, (d, a) => { const tc = R0(a, 'cuanto'); return { amb: 'lab', fov: 32, atores: [EXTRA(4, { x: .6, z: -.4, eyes: [[0, 'lookl'], [tc + 1.2, 'sad']] }), CIENT(1, { x: -.6, z: -.4, eyes: [[0, 'look']], talk: [[tc - .2, d]] })],
  extra: (c) => { const g = hab(c, ['¿SE TE NOTABAN', 'LOS NERVIOS?'], 1.4, [-.7, 2.25, -.3], 56); return { update: (u, t, cam) => pop(g, u, tc - .3, 99, cam) }; },
  c: [[0, 1.65, 3.4], [0, 1.45, -.4], [0, 1.65, 3.0], [0, 1.45, -.4]], range: 3 }; });
// 42. Y casi todos pensaban que se les notaba muchísimo.
const NERV = (dos) => [['LO QUE\nCREÍAN', .9, '#E8667F'], ['LO QUE VIO\nEL PÚBLICO', dos ? .42 : 0, '#5FA0D8']];
Q(42, (d, a) => { const tm = R0(a, 'muchisimo'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const b1 = barras(c, NERV(false), 2.6, [0, 1.5, -.4], { title: '¿CUÁNTO SE NOTABAN LOS NERVIOS?' }); const l1 = lab(c, ['¡MUCHÍSIMO!'], 1.1, [-.65, 2.38, -.2], PINK); return { update: (u, t, cam) => pop(l1, u, tm - .2, 99, cam) }; },
  c: [[0, 1.6, 3.6], [0, 1.6, -.4], [0, 1.6, 3.2], [0, 1.6, -.4]], range: 3, blur: 4 }; });
// 43. Pero el público, en realidad, los veía bastante más tranquilos de lo que ellos creían.
Q(43, (d, a) => { const tt = R0(a, 'tranquilos'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const b1 = barras(c, NERV(false), 2.6, [0, 1.5, -.4], { title: '¿CUÁNTO SE NOTABAN LOS NERVIOS?' }); const b2 = barras(c, NERV(true), 2.6, [0, 1.5, -.39], { title: '¿CUÁNTO SE NOTABAN LOS NERVIOS?' }); const l1 = lab(c, ['¡MUCHÍSIMO!'], 1.1, [-.65, 2.38, -.2], PINK), l2 = lab(c, ['MÁS TRANQUILOS'], 1.3, [.65, 2.38, -.2], BLUE); return { update: (u, t, cam) => { b2.visible = u > R0(a, 'publico') + .3; b1.visible = !b2.visible; pop(l1, u, 0, 99, cam); pop(l2, u, tt - .2, 99, cam); } }; },
  c: [[0, 1.6, 3.6], [0, 1.6, -.4], [0, 1.6, 3.2], [0, 1.6, -.4]], range: 3, blur: 4 }; });
// 44. Lo llamaron la ilusión de transparencia.
const CRIS = (c, A, i) => { const g = glowSprite('#FF4A6A', .9, 0); c.add(g); const h = corazon(c, .26); const v = new THREE.Vector3(); return (u, on, cam) => { A[i].torso.getWorldPosition(v); g.position.set(v.x, v.y, v.z + .2); g.material.opacity = on * (.55 + .25 * Math.sin(u * 9)); h.position.set(v.x, v.y + .02, v.z + .25); h.visible = on > .05; h.scale.setScalar(latido(u, 170) * (.5 + .5 * on)); pointer(h, cam); }; };
Q(44, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [YO({ x: 0, z: -.5, eyes: [[0, 'wide']], pose: (k, u) => tiembla(k, u, .3) })],
  extra: (c, s, A) => { const cr = CRIS(c, A, 0); const t = lp(c, ['ILUSIÓN DE TRANSPARENCIA'], 2.3, [0, 2.35, -.4]); return { update: (u, tt, cam) => { cr(u, 1, cam); pop(t, u, R0(a, 'ilusion') - .2, 99, cam); } }; },
  c: [[0, 1.6, 3.8], [0, 1.55, -.5], [0, 1.6, 3.3], [0, 1.55, -.5]], range: 3, look: { exposure: .85, vig: .65 } }));
// 45. Sientes que tus nervios son de cristal, que todo el mundo los ve.
Q(45, (d, a) => { const tc = R0(a, 'cristal'), tv = R0(a, 've'); return { amb: 'gris', fov: 32, k: 1, atores: [YO({ x: 0, z: -.5, eyes: [[0, 'sad']], pose: (k, u) => tiembla(k, u, .5) }), EXTRA(1, { x: -1.6, z: -1.0, eyes: [[0, 'look']] }), EXTRA(4, { x: 1.6, z: -1.0, eyes: [[0, 'lookl']] })],
  extra: (c, s, A) => { const cr = CRIS(c, A, 0); const L = SEQ(c, a, [[['NERVIOS DE CRISTAL'], tc - .4, 'p', [0, 2.35, -.4], 1.8], [['¿TODO EL MUNDO LOS VE?'], tv - .6, 'r', [0, 2.35, -.4], 2.0, 1]]); return { update: (u, t, cam) => { cr(u, 1, cam); L(u, cam); } }; },
  c: [[0, 1.65, 4.2], [0, 1.5, -.6], [0, 1.65, 3.8], [0, 1.5, -.6]], range: 3, look: { exposure: .85, vig: .65 } }; });
// 46. Pero por fuera, casi no se nota nada.
Q(46, (d, a) => ({ amb: 'gris', fov: 32, k: 1, atores: [YO({ x: 0, z: -.5, eyes: [[0, 'look'], [1.2, 'happy']] }), EXTRA(1, { x: -1.6, z: -1.0, eyes: [[0, 'flat']] }), EXTRA(4, { x: 1.6, z: -1.0, eyes: [[0, 'happy']] })],
  extra: (c, s, A) => { const cr = CRIS(c, A, 0); const t = lw(c, ['POR FUERA: CASI NADA'], 1.9, [0, 2.35, -.4]); return { update: (u, tt, cam) => { cr(u, 1 - smooth(.2, 1.0, u), cam); pop(t, u, .3, 99, cam); } }; },
  c: [[0, 1.65, 4.2], [0, 1.5, -.6], [0, 1.65, 3.8], [0, 1.5, -.6]], range: 3 }));
// 47. Terminas la exposición. Te sientas. Y por primera vez en toda la mañana, respiras.
Q(47, (d, a) => { const ts = R0(a, 'sientas'), tr = R0(a, 'respiras'); return { ...AULA(), atores: [YO({ x: 0, z: -1.6, eyes: [[0, 'look'], [ts + .5, 'flat'], [tr, 'shut']], move: (u) => (u < ts + .5 ? [lerp(-1.4, 0, smooth(0, ts + .5, u)), 0, -1.6] : [0, -.25, -1.6]), pose: (k, u) => (u < ts + .5 ? k.walk(u * 2) : (sitP(k), k.pose({ armL: [8, 6], armR: [8, 6], bob: u > tr ? Math.sin((u - tr) * 2) * .02 : 0 }))) })],
  extra: (c, s, A) => { pupitres(c, [0], -1.3); PIZ(c, ['LENGUA', 'Exposición oral']); const L = SEQ(c, a, [[['FIN DE LA EXPOSICIÓN'], .05, 'y', [0, 2.3, -1.4], 1.8], [['RESPIRAS'], tr - .1, 'b', [0, 2.3, -1.4], 1.1, 1]]); const b = brillos(c, 8, '#BFE0FF'); return { update: (u, t, cam) => { L(u, cam); b(u, [0, 1.65, -1.3, .5], u > tr ? 1 : 0); } }; },
  c: [[0, 1.7, 2.4], [0, 1.25, -1.5], [0, 1.65, 2.0], [0, 1.3, -1.5]], range: 2.5 }; });
// 48. Recreo. Y aquí es donde la cosa se pone peligrosa.
const RECP = { amb: 'parque', fov: 30 };
const ELBAN = (o = {}) => SENTA(ELA, .45, -.5, o);
Q(48, (d, a) => { const tp = R0(a, 'peligrosa'); return { ...RECP, atores: [YO({ x: -1.4, z: .2, eyes: [[0, 'look'], [tp, 'wide']] }), ELBAN({ eyes: [[0, 'happy']] }), EXTRA(2, { x: 2.6, z: -2.0, eyes: [[0, 'happy']] }), EXTRA(5, { x: -3.2, z: -2.4, eyes: [[0, 'look']] })],
  extra: (c) => { PATIO(c); BANCO(c); const L = SEQ(c, a, [[['RECREO'], .05, 'y', [-1.4, 2.25, .2], 1.0], [['¡PELIGRO!'], tp - .3, 'r', [-1.4, 2.25, .2], 1.0, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[-.5, 1.8, 4.6], [-.4, 1.2, -.4], [-.5, 1.75, 4.1], [-.4, 1.2, -.4]], range: 4 }; });
// 49. Porque en el banco del fondo está ella. Tu crush.
Q(49, (d, a) => { const tc = R0(a, 'crush'); return { ...RECP, atores: [ELBAN({ eyes: [[0, 'happy']], pose: (k, u) => k.pose({ head: Math.sin(u * 2) * 4 }) })],
  extra: (c) => { PATIO(c); BANCO(c); const h = corazon(c, .25); h.position.set(1.05, 1.5, -.4); const L = SEQ(c, a, [[['EL BANCO DEL FONDO'], 'banco', 'w', [.45, 1.95, -.4], 1.4], [['TU CRUSH'], tc - .1, 'p', [.45, 1.95, -.4], .9, 1]]); return { update: (u, t, cam) => { h.visible = u > tc; h.scale.setScalar(latido(u, 140)); pointer(h, cam); L(u, cam); } }; },
  c: [[.45, 1.5, 2.4], [.45, 1.3, -.5], [.45, 1.48, 2.0], [.45, 1.3, -.5]], range: 2.5 }; });
// 50. Lo sabes. No deberías. Pero te acercas. Un poquito. Solo para escuchar.
Q(50, (d, a) => { const ta = R0(a, 'acercas'), te = R0(a, 'escuchar'); return { ...RECP, atores: [YO({ x: -2.0, z: .1, eyes: [[0, 'flat'], [ta, 'smug']], move: (u) => [lerp(-2.6, -1.3, smooth(ta, te, u)), 0, .1], pose: (k, u) => (u > ta && u < te ? k.walk(u * 1.2) : k.pose({ lean: 8 })) }), ELBAN({ eyes: [[0, 'happy']] })],
  extra: (c, s, A) => { PATIO(c); BANCO(c); const L = SEQ(c, a, [[['NO DEBERÍAS'], 'deberias', 'r', [-1.6, 2.2, .1], 1.2], [['UN POQUITO'], 'poquito', 'w', [-1.6, 2.2, .1], 1.1], [['SOLO PARA ESCUCHAR'], te - .2, 'p', [-1.4, 2.2, .1], 1.7, 1]]); const o = ondas(c); return { update: (u, t, cam) => { L(u, cam); o(u, A[0], cam, smooth(te - .2, te + .3, u) * .7); } }; },
  c: [[-.8, 1.7, 4.2], [-.7, 1.25, -.3], [-.8, 1.65, 3.7], [-.7, 1.25, -.3]], range: 3.5 }; });
// 51. Pasas por delante. Ella te mira. Y oyes:
Q(51, (d, a) => { const tm = R0(a, 'mira'), to = R0(a, 'oyes'); return { ...RECP, atores: [YO({ x: -.5, z: .3, eyes: [[0, 'flat'], [tm + .2, 'wide']], move: (u) => [lerp(-1.6, .6, smooth(0, d, u)), 0, .3], pose: (k, u) => k.walk(u * 1.4) }), ELBAN({ eyes: [[0, 'down'], [tm, 'lookl']] })],
  extra: (c, s, A) => { PATIO(c); BANCO(c); const o = ondas(c); const t = lp(c, ['Y OYES…'], 1.0, [.45, 2.0, -.4]); return { update: (u, tt, cam) => { o(u, A[0], cam, smooth(to - .2, to + .2, u)); pop(t, u, to, 99, cam); } }; },
  c: [[0, 1.6, 3.6], [0, 1.25, -.3], [0, 1.6, 3.2], [0, 1.25, -.3]], range: 3 }; });
// 52. "Ay, no. Viene hacia aquí. ¿Tengo algo en los dientes?"
const CELA = [[.45, 1.4, 1.9], [.45, 1.3, -.5], [.45, 1.38, 1.6], [.45, 1.3, -.5]];
Q(52, (d, a) => ({ ...RECP, atores: [ELBAN({ eyes: [[0, 'wide'], [R0(a, 'tengo'), 'down']], pose: (k, u) => k.pose({ armL: [60, 70], armR: [60, 70], head: -4 }) })],
  extra: (c) => { PATIO(c); BANCO(c); const P = PSEQ(c, a, [[['AY, NO…'], .05, [-.2, 1.72, -.4], .9], [['VIENE HACIA AQUÍ'], 'viene', [-.2, 1.72, -.4], 1.1], [['¿TENGO ALGO', 'EN LOS DIENTES?'], 'tengo', [-.2, 1.72, -.4], 1.1]], ROSAP); return { update: (u, t, cam) => P(u, cam) }; },
  c: CELA, range: 2.5, look: MENTE }));
// 53. Que no me hable, que no me hable, que me pongo roja.
Q(53, (d, a) => { const tp = R0(a, 'pongo'); return { ...RECP, atores: [ELBAN({ eyes: [[0, 'shut'], [tp, 'wide']], pose: (k, u) => k.pose({ armL: [150, 140], armR: [150, 140], head: Math.sin(u * 10) * 4 }) })],
  extra: (c, s, A) => { PATIO(c); BANCO(c); const r = rubor(A[0]); const P = PSEQ(c, a, [[['QUE NO ME HABLE,', 'QUE NO ME HABLE…'], .05, [-.2, 1.72, -.4], 1.1], [['¡QUE ME PONGO ROJA!'], tp - .3, [-.2, 1.72, -.4], 1.1]], ROSAP); return { update: (u, t, cam) => { P(u, cam); r(smooth(tp - .3, tp + .4, u) * .25); } }; },
  c: CELA, range: 2.5, look: MENTE }; });
// 54. Te paras en seco.
Q(54, (d, a) => ({ ...RECP, atores: [YO({ x: .4, z: .3, eyes: [[0, 'wide']], pose: (k) => k.pose({ armL: [30, 8], armR: [30, 8], lean: -6 }) })],
  extra: (c, s, A) => { PATIO(c); BANCO(c); const t = lab(c, ['¡EN SECO!'], 1.0, [.4, 2.1, .3], BLUE); return { update: (u, tt, cam) => { pop(t, u, .05, 99, cam); shake(cam, u < .4 ? .03 : 0, u); } }; },
  c: [[.4, 1.6, 2.9], [.4, 1.5, .3], [.4, 1.6, 2.6], [.4, 1.55, .3]], range: 2.5 }));
// 55. ¿Que se pone roja? ¿Ella? ¿Por ti?
Q(55, (d, a) => { const te = R0(a, 'ella'), tt = R0(a, 'ti'); return { ...RECP, atores: [YO({ x: .4, z: .3, eyes: [[0, 'wide'], [tt, 'heart']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > tt ? 90 : 12, u > tt ? 140 : 8] }) })],
  extra: (c, s, A) => { PATIO(c); BANCO(c); const L = SEQ(c, a, [[['¿SE PONE ROJA?'], .05, 'r', [.4, 2.15, .3], 1.3, 1], [['¿ELLA?'], te, 'w', [-.3, 1.6, .4], .85, 1], [['¿POR TI?'], tt - .1, 'p', [1.1, 1.6, .4], .95, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[.4, 1.6, 3.0], [.4, 1.55, .3], [.4, 1.6, 2.6], [.4, 1.6, .3]], range: 2.5 }; });
// 56. Te das la vuelta y te vas, rápido, antes de que se te note la sonrisa.
Q(56, (d, a) => { const tr = R0(a, 'rapido'), ts = R0(a, 'sonrisa'); return { ...RECP, atores: [YO({ x: .4, z: .3, eyes: [[0, 'happy']], move: (u) => [lerp(.4, 3.4, smooth(tr - .3, d, u)), 0, .3], pose: (k, u) => (u > tr - .3 ? k.walk(u * 2.6) : k.pose()) }), ELBAN({ eyes: [[0, 'lookl']] })],
  extra: (c, s, A) => { PATIO(c); BANCO(c); const L = SEQ(c, a, [[['¡RÁPIDO!'], tr - .2, 'y', [1.2, 2.2, .2], .9], [['QUE NO SE TE NOTE LA SONRISA'], ts - .9, 'w', [.9, 2.2, .2], 2.3, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[.8, 1.7, 4.2], [.9, 1.25, -.2], [1.0, 1.65, 3.8], [1.2, 1.25, -.2]], range: 3.5 }; });
// 57. Pero entonces te asalta una duda. ¿Y si lo has entendido mal?
Q(57, (d, a) => { const tm = R0(a, 'mal'); return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: 0, z: -.5, eyes: [[0, 'look'], [R0(a, 'duda'), 'sad']], pose: (k) => k.pose({ armL: [12, 8], armR: [120, 140], head: 8 }) })],
  extra: (c) => { const q = ICONO(c, '?', .6, [.75, 2.1, -.5]); const L = SEQ(c, a, [[['UNA DUDA'], 'duda', 'w', [-.8, 2.2, -.4], 1.0], [['¿Y SI LO HAS ENTENDIDO MAL?'], tm - .9, 'p', [0, .85, .1], 2.3, 1]]); return { update: (u, t, cam) => { pop(q, u, R0(a, 'duda'), 99, cam); L(u, cam); } }; },
  c: [[0, 1.6, 3.6], [0, 1.55, -.5], [0, 1.6, 3.2], [0, 1.55, -.5]], range: 3 }; });
// 58. Siempre que habláis, tú sales pensando que lo has hecho fatal. Que has dicho alguna tontería. Que seguro que le has caído mal.
Q(58, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [YO({ x: 0, z: -.5, eyes: [[0, 'sad']], pose: (k) => k.pose({ armL: [12, 8], armR: [12, 8], head: -8 }) })],
  extra: (c) => { const P = PSEQ(c, a, [[['LO HE HECHO FATAL'], 'fatal', [-1.1, 2.3, -.5], 1.4], [['HE DICHO UNA TONTERÍA'], 'tonteria', [1.1, 2.0, -.5], 1.6, { tail: 'right' }], [['SEGURO QUE', 'LE HE CAÍDO MAL'], 'caido', [-1.0, 1.45, -.5], 1.4]], { ...BLANP, keep: true }); return { update: (u, t, cam) => P(u, cam) }; },
  c: [[0, 1.65, 4.0], [0, 1.6, -.5], [0, 1.65, 3.6], [0, 1.6, -.5]], range: 3 }));
// 59. Pues resulta que esto también le pasa a casi todo el mundo.
Q(59, (d, a) => { const XS = [-2.0, -.7, .7, 2.0]; return { amb: 'plaza', fov: 32, atores: XS.map((x, i) => EXTRA([0, 1, 6, 4][i], { x, z: -.6 - (i % 2) * .3, eyes: [[0, 'sad']] })),
  extra: (c, s, A) => { const P = XS.map((x, i) => PT(c, A, i, ['¿LE HE CAÍDO MAL?'], 1.3, 0, .62, { ...BLANP })); const t = lw(c, ['A CASI TODO EL MUNDO'], 2.0, [0, .8, .4]); return { update: (u, tt, cam) => { P.forEach((p, i) => p(u, .1 + i * .3, 99, cam)); pop(t, u, R0(a, 'todo') - .3, 99, cam); } }; },
  c: [[0, 1.8, 4.8], [0, 1.6, -.6], [0, 1.8, 4.4], [0, 1.6, -.6]], range: 3 }; });
// 60. En 2018, Erica Boothby y su equipo, entre la Universidad de Yale y otras universidades, | juntaron a desconocidos para que charlaran un rato.
const CHARLA = (o1 = {}, o2 = {}) => [EXTRA(2, { x: -.7, z: -.4, eyes: [[0, 'look']], pose: talkP, ...o1 }), EXTRA(5, { x: .7, z: -.4, eyes: [[0, 'lookl']], pose: nod, ...o2 })];
Qs(60, ['juntaron'], [(d, a) => ({ amb: 'lab', fov: 32, atores: [CIENT(0, { x: -.6, z: -.4, eyes: [[0, 'happy']], pose: point }), CIENT(2, { x: .8, z: -.6, eyes: [[0, 'lookl']] }), PROF({ x: 1.7, z: -.9, eyes: [[0, 'lookl']] })],
  extra: (c) => { const L = SEQ(c, a, [[['ERICA BOOTHBY'], R0(a, 'erica') - .2, 'b', [-.6, 2.25, -.3], 1.4], [['YALE Y OTRAS UNIVERSIDADES'], R0(a, 'yale') - .4, 'w', [0, 2.35, -.3], 2.2, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.7, 3.9], [.2, 1.5, -.5], [0, 1.7, 3.4], [.2, 1.5, -.5]], range: 3 }),
(d, a) => ({ amb: 'lab', fov: 32, atores: CHARLA(),
  extra: (c) => { const ck = clock(.35, 3); ck.position.set(0, 2.5, -1.3); c.add(ck); const L = SEQ(c, a, [[['DESCONOCIDOS'], .05, 'w', [0, 2.1, -.3], 1.4], [['CHARLAN UN RATO'], 'charlaran', 'b', [0, 2.1, -.3], 1.5, 1]]); return { update: (u, t, cam) => { ck.rotation.z = -u * .6; L(u, cam); } }; },
  c: [[0, 1.65, 3.6], [0, 1.5, -.4], [0, 1.65, 3.1], [0, 1.5, -.4]], range: 3 })]);
// 61. Al terminar, a cada uno le preguntaron dos cosas: cuánto le había gustado la otra persona, y cuánto creía que le había gustado él a la otra persona.
Q(61, (d, a) => { const t1 = R0(a, 'cuanto'), t2 = R0(a, 'cuanto', t1 + .3); return { amb: 'lab', fov: 30, atores: [EXTRA(2, { x: -.9, z: -.4, eyes: [[0, 'look'], [t2, 'sad']] }), EXTRA(5, { x: .9, z: -.4, eyes: [[0, 'lookl'], [t2, 'sad']] })],
  extra: (c, s, A) => { const L = SEQ(c, a, [[['DOS PREGUNTAS'], .1, 'y', [0, 2.35, -.4], 1.5], [['1. ¿CUÁNTO TE HA GUSTADO?'], t1 - .2, 'w', [0, 2.35, -.4], 2.3], [['2. ¿CUÁNTO LE HAS GUSTADO TÚ?'], t2 - .2, 'p', [0, 2.35, -.4], 2.5, 1]]); const p1 = PT(c, A, 0, ['¿?'], .6, .35, .5, { size: 90 }), p2 = PT(c, A, 1, ['¿?'], .6, -.35, .5, { size: 90, tail: 'right' }); return { update: (u, t, cam) => { L(u, cam); p1(u, t2 + .6, 99, cam); p2(u, t2 + .8, 99, cam); } }; },
  c: [[0, 1.7, 3.8], [0, 1.6, -.4], [0, 1.7, 3.3], [0, 1.6, -.4]], range: 3 }; });
// 62. Y una y otra vez pasaba lo mismo. La gente gustaba más de lo que creía. Mucho más.
Q(62, (d, a) => { const tg = R0(a, 'gustaba'), tm = R0(a, 'mucho'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const b1 = barras(c, [['LO QUE\nCREÍAN', .45, '#5FA0D8'], ['', 0, '#E8667F']], 2.6, [0, 1.5, -.4], { title: '¿CUÁNTO LE GUSTABAS?' }); const b2 = barras(c, [['LO QUE\nCREÍAN', .45, '#5FA0D8'], ['LA\nVERDAD', .85, '#E8667F']], 2.6, [0, 1.5, -.39], { title: '¿CUÁNTO LE GUSTABAS?' }); const t = lw(c, ['UNA Y OTRA VEZ'], 1.5, [0, 2.45, -.2]); const m = lab(c, ['¡MUCHO MÁS!'], 1.0, [.65, 2.38, -.2], PINK); return { update: (u, tt, cam) => { b2.visible = u > tg - .2; b1.visible = !b2.visible; pop(t, u, .1, tg - .3, cam); pop(m, u, tm - .2, 99, cam); } }; },
  c: [[0, 1.6, 3.6], [0, 1.6, -.4], [0, 1.6, 3.2], [0, 1.6, -.4]], range: 3, blur: 4 }; });
// 63. Pasaba en conversaciones de cinco minutos, | y pasaba incluso entre compañeros de residencia que convivían durante meses.
Qs(63, ['incluso'], [(d, a) => ({ amb: 'lab', fov: 32, atores: CHARLA({ eyes: [[0, 'happy']] }, { eyes: [[0, 'happy']] }),
  extra: (c) => { const ck = clock(.35, 5); ck.position.set(0, 2.5, -1.3); c.add(ck); const t = lab(c, ['5 MINUTOS'], 1.1, [0, 2.05, -.3], BLUE); return { update: (u, tt, cam) => { ck.rotation.z = -u * .8; pop(t, u, R0(a, 'cinco') - .2, 99, cam); } }; },
  c: [[0, 1.65, 3.6], [0, 1.5, -.4], [0, 1.65, 3.1], [0, 1.5, -.4]], range: 3 }),
(d, a) => ({ amb: 'residencia', fov: 32, atores: CHARLA({ eyes: [[0, 'happy']] }, { eyes: [[0, 'look']] }),
  extra: (c) => { const L = SEQ(c, a, [[['COMPAÑEROS DE RESIDENCIA'], .05, 'w', [0, 2.3, -.3], 2.2], [['DURANTE MESES'], 'meses', 'y', [0, 2.3, -.3], 1.5, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.65, 3.8], [0, 1.45, -.4], [0, 1.65, 3.3], [0, 1.45, -.4]], range: 3 })]);
// 64. Lo llamaron la brecha de agrado. | Después de hablar con alguien, tu cabeza repasa todos tus fallos.
Qs(64, ['despues'], [(d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [YO({ x: -1.4, z: -.5, eyes: [[0, 'sad']] }), ELA({ x: 1.4, z: -.5, eyes: [[0, 'sad']] })],
  extra: (c) => { const gap = new THREE.Mesh(new THREE.PlaneGeometry(.6, 3), new THREE.MeshBasicMaterial({ color: '#1E2230' })); gap.rotation.x = -Math.PI / 2; gap.position.set(0, .01, -.5); c.add(gap); const t = lp(c, ['LA BRECHA DE AGRADO'], 2.1, [0, 2.35, -.4]); return { update: (u, tt, cam) => pop(t, u, R0(a, 'brecha') - .2, 99, cam) }; },
  c: [[0, 1.6, 4.4], [0, 1.5, -.5], [0, 1.6, 3.9], [0, 1.5, -.5]], range: 3.5 }),
(d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [YO({ x: 0, z: -.5, eyes: [[0, 'sad']], pose: (k) => k.pose({ armL: [12, 8], armR: [140, 130], head: -6 }) })],
  extra: (c) => { const P = PSEQ(c, a, [[['¿POR QUÉ DIJE ESO?'], .1, [-1.1, 2.3, -.5], 1.4], [['ME REÍ RARÍSIMO'], .9, [1.1, 2.0, -.5], 1.4, { tail: 'right' }], [['HABLÉ DEMASIADO'], 1.7, [-1.0, 1.5, -.5], 1.4]], { ...BLANP, keep: true }); const t = lw(c, ['REPASAS TODOS TUS FALLOS'], 2.1, [0, .8, .1]); return { update: (u, tt, cam) => { P(u, cam); pop(t, u, R0(a, 'fallos') - .4, 99, cam); } }; },
  c: [[0, 1.65, 4.0], [0, 1.6, -.5], [0, 1.65, 3.6], [0, 1.6, -.5]], range: 3 })]);
// 65. Pero la otra persona no estaba pendiente de tus fallos. Estaba pendiente de lo bien que se lo estaba pasando.
Q(65, (d, a) => { const tb = R0(a, 'bien'); return { amb: 'gris', fov: 30, k: 1, atores: [ELA({ x: .3, z: -.5, eyes: [[0, 'look'], [tb - .6, 'happy']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [12, 8], head: Math.sin(u * 3) * 5 }) })],
  extra: (c, s, A) => { const t = lw(c, ['✗ TUS FALLOS'], 1.2, [-.9, 2.15, -.4]); const p = PT(c, A, 0, ['¡QUÉ BIEN ME LO', 'ESTOY PASANDO!'], 1.5, -.7, .55, { ...ROSAP, tail: 'right' }); const b = brillos(c, 5, '#FFD8E0'); return { update: (u, tt, cam) => { pop(t, u, .2, tb - .8, cam); p(u, tb - .6, 99, cam); b(u, [.3, 1.5, -.4, .7], u > tb - .6 ? 1 : 0); } }; },
  c: [[0, 1.6, 3.4], [0, 1.55, -.5], [0, 1.6, 3.0], [0, 1.55, -.5]], range: 3 }; });
// 66. Tercera hora. Educación física. Y aquí te llevas el primer golpe del día.
const PISTA = (c) => { PATIO(c); canasta(c, -2.6, -2.6); canasta(c, 2.6, -2.6); };
const FILA = (o = {}) => [EXTRA(1, { x: -.6, z: -.8, eyes: [[0, 'look']] }), EXTRA(5, { x: .4, z: -.8, eyes: [[0, 'look']] }), YO({ x: 1.4, z: -.8, eyes: [[0, 'look']], ...o })];
Q(66, (d, a) => { const tg = R0(a, 'golpe'); return { ...RECP, atores: [...FILA({ eyes: [[0, 'look'], [tg, 'sad']] }), DANI({ x: -1.6, z: .2, eyes: [[0, 'smug']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [40 + Math.sin(u * 2.2 * Math.PI) * 15, 20] }) })],
  extra: (c, s, A) => { PISTA(c); const bl = balon(); c.add(bl); const L = SEQ(c, a, [[['TERCERA HORA'], .05, 'w', [0, 2.4, -.6], 1.4], [['EDUCACIÓN FÍSICA'], 'educacion', 'y', [0, 2.4, -.6], 1.7], [['EL PRIMER GOLPE DEL DÍA'], tg - .5, 'r', [0, 2.4, -.6], 2.1, 1]]); return { update: (u, t, cam) => { const p = hand(A[3]); bl.position.set(p.x, bote(u), p.z + .15); L(u, cam); } }; },
  c: [[0, 1.7, 4.4], [0, 1.35, -.5], [0, 1.7, 3.9], [0, 1.35, -.5]], range: 3.5 }; });
// 67. Estáis eligiendo equipos. Y Dani, que es de tus mejores amigos, te elige el último. Y le oyes pensar:
Q(67, (d, a) => { const tdn = R0(a, 'dani'), tu = R0(a, 'ultimo'), tp = R0(a, 'pensar'); return { ...RECP, atores: [EXTRA(1, { x: -.6, z: -.8, eyes: [[0, 'look']], move: (u) => [u < tdn ? -.6 : lerp(-.6, -2.4, smooth(tdn, tdn + 1.2, u)), 0, -.8], pose: (k, u) => (u > tdn && u < tdn + 1.2 ? k.walk(u * 2) : k.pose()) }), EXTRA(5, { x: .4, z: -.8, eyes: [[0, 'look']], move: (u) => [u < tdn + 1.5 ? .4 : lerp(.4, 3.4, smooth(tdn + 1.5, tdn + 2.7, u)), 0, -.8], pose: (k, u) => (u > tdn + 1.5 && u < tdn + 2.7 ? k.walk(u * 2) : k.pose()) }), YO({ x: 1.4, z: -.8, eyes: [[0, 'look'], [tu, 'sad']] }), DANI({ x: -1.6, z: .2, eyes: [[0, 'look'], [tu, 'flat']], pose: (k, u) => (u > tu - .3 ? point(k) : k.pose()) })],
  extra: (c, s, A) => { PISTA(c); const o = ondas(c); const L = SEQ(c, a, [[['ELEGIR EQUIPOS'], .05, 'w', [0, 2.4, -.6], 1.5], [['DANI · TU MEJOR AMIGO'], tdn - .1, 'b', [-1.6, 2.2, .2], 1.8], [['EL ÚLTIMO'], tu - .2, 'r', [1.4, 2.2, -.8], 1.0, 1]]); return { update: (u, t, cam) => { L(u, cam); o(u, A[2], cam, smooth(tp - .2, tp + .3, u)); } }; },
  c: [[0, 1.7, 4.4], [0, 1.35, -.5], [0, 1.7, 3.9], [0, 1.35, -.5]], range: 3.5 }; });
// 68. "Uf. Es malísimo jugando."
Q(68, (d, a) => ({ ...RECP, atores: [DANI({ x: 0, z: -.4, eyes: [[0, 'flat']], pose: (k) => k.pose({ armL: [12, 8], armR: [12, 8], head: -6 }) })],
  extra: (c, s, A) => { PISTA(c); const p = PT(c, A, 0, ['UF. ES MALÍSIMO JUGANDO.'], 1.7, .55, .55); return { update: (u, t, cam) => p(u, 0, 99, cam) }; },
  c: [[0, 1.65, 3.0], [.3, 1.6, -.4], [0, 1.65, 2.6], [.3, 1.6, -.4]], range: 2.5 }));
// 69. Te duele. Te duele de verdad. Durante un rato no quieres ni mirarle.
Q(69, (d, a) => { const tv = R0(a, 'verdad'), tm = R0(a, 'mirarle'); return { ...RECP, atores: [YO({ x: 0, z: -.4, eyes: [[0, 'sad'], [tm - .6, 'lookl']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [12, 8], head: u > tm - .6 ? 14 : -6 }) })],
  extra: (c) => { PISTA(c); const r = roto(c, .55); r.g.position.set(.9, 2.0, -.4); const L = SEQ(c, a, [[['TE DUELE'], .05, 'r', [-.85, 2.1, -.4], .9], [['DE VERDAD'], tv - .1, 'r', [-.85, 2.1, -.4], 1.0], [['NO QUIERES NI MIRARLE'], tm - .9, 'w', [0, .85, .1], 2.0, 1]]); return { update: (u, t, cam) => { r.set(.3 + smooth(tv - .2, tv + .5, u) * .5); L(u, cam); } }; },
  c: [[0, 1.65, 3.2], [0, 1.5, -.4], [0, 1.65, 2.8], [0, 1.5, -.4]], range: 2.5 }; });
// 70. Pero luego, en el vestuario, Dani se sienta a tu lado. Y le oyes pensar otra cosa:
const VSX = [-.45, .45];
const VEST0 = (c) => { taquillas(c); bancoP(c, 0, -.5, 2.2); };
const YOV = (o = {}) => SENTA(YO, -.45, -.5, o), DANIV = (o = {}) => SENTA(DANI, .45, -.5, o);
const CVES = [[0, 1.6, 3.0], [0, 1.25, -.5], [0, 1.55, 2.5], [0, 1.25, -.5]];
Q(70, (d, a) => { const ts = R0(a, 'sienta'), tp = R0(a, 'pensar'); return { ...VEST, atores: [YOV({ eyes: [[0, 'sad'], [tp, 'wide']] }), DANI({ x: .45, z: -.5, eyes: [[0, 'look']], move: (u) => (u < ts + .3 ? [lerp(2.8, .45, smooth(0, ts + .3, u)), 0, -.3] : [.45, SBN, -.5]), pose: (k, u) => (u < ts + .3 ? k.walk(u * 2) : sitP(k)) })],
  extra: (c, s, A) => { VEST0(c); const o = ondas(c); const L = SEQ(c, a, [[['EL VESTUARIO'], 'vestuario', 'w', [0, 2.15, -.4], 1.3], [['OTRA COSA…'], tp + .2, 'p', [0, 2.15, -.4], 1.2, 1]]); return { update: (u, t, cam) => { L(u, cam); o(u, A[0], cam, smooth(tp - .2, tp + .3, u)); } }; },
  c: CVES, range: 3 }; });
// 71. "Ojalá supiera que es la única persona con la que puedo hablar de lo de mis padres."
Q(71, (d, a) => { const tp = R0(a, 'padres'); return { ...VEST, atores: [DANIV({ eyes: [[0, 'down'], [tp, 'sad']], pose: (k) => k.pose({ head: -8 }) })],
  extra: (c, s, A) => { VEST0(c); const p = PT(c, A, 0, ['OJALÁ SUPIERA QUE ES LA ÚNICA', 'PERSONA CON LA QUE PUEDO', 'HABLAR DE LO DE MIS PADRES'], 1.6, -.55, .5, { tail: 'right' }); const dc = dib(c, 'casa', .55, [1.05, 1.55, -.4]); return { update: (u, t, cam) => { p(u, 0, 99, cam); pop(dc, u, tp - .2, 99, cam); } }; },
  c: [[.45, 1.45, 2.2], [.45, 1.3, -.5], [.45, 1.45, 1.9], [.45, 1.3, -.5]], range: 2.5 }; });
// 72. Te quedas mirándole. Él se ata las zapatillas como si nada.
Q(72, (d, a) => { const ta = R0(a, 'ata'); return { ...VEST, atores: [YOV({ eyes: [[0, 'look']], pose: (k) => k.pose({ head: -10 }) }), DANIV({ eyes: [[0, 'down']], pose: (k, u) => (u > ta - .3 ? ATAR(k, u) : k.pose()) })],
  extra: (c) => { VEST0(c); const L = SEQ(c, a, [[['TE QUEDAS MIRÁNDOLE'], .05, 'w', [-.45, 1.95, -.4], 1.6], [['COMO SI NADA'], R0(a, 'nada') - .4, 'y', [.45, 1.95, -.4], 1.2, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: CVES, range: 3 }; });
// 73. Y tú entiendes algo: que alguien puede pensar que juegas fatal al fútbol y, a la vez, pensar que eres la persona más importante de su vida.
Q(73, (d, a) => { const tj = R0(a, 'juegas'), ti = R0(a, 'importante'); return { amb: 'gris', fov: 30, k: 1, atores: [DANI({ x: 0, z: -.5, eyes: [[0, 'look'], [tj, 'flat'], [ti - .5, 'happy']] })],
  extra: (c) => { const p1 = piensa(c, ['JUEGA FATAL', 'AL FÚTBOL'], 1.3, [-1.1, 2.15, -.5], { ...BLANP }), p2 = piensa(c, ['LA PERSONA MÁS', 'IMPORTANTE DE MI VIDA'], 1.5, [1.15, 2.15, -.5], { ...ROSAP, tail: 'right' }); const t = lw(c, ['ENTIENDES ALGO'], 1.4, [0, .85, .1]); const h = corazon(c, .22); h.position.set(1.15, 1.6, -.4); return { update: (u, tt, cam) => { pop(t, u, .1, tj - .3, cam); pop(p1, u, tj - .2, 99, cam); pop(p2, u, ti - .6, 99, cam); h.visible = u > ti; h.scale.setScalar(latido(u, 110)); pointer(h, cam); } }; },
  c: [[0, 1.65, 4.0], [0, 1.6, -.5], [0, 1.65, 3.6], [0, 1.6, -.5]], range: 3 }; });
// 74. Las dos cosas a la vez. La gente no piensa de ti una sola cosa.
Q(74, (d, a) => { const tg = R0(a, 'gente'); return { amb: 'gris', fov: 30, k: 1, atores: [DANI({ x: 0, z: -.5, eyes: [[0, 'happy']] })],
  extra: (c) => { const p1 = piensa(c, ['JUEGA FATAL', 'AL FÚTBOL'], 1.3, [-1.1, 2.15, -.5], { ...BLANP }), p2 = piensa(c, ['LA PERSONA MÁS', 'IMPORTANTE DE MI VIDA'], 1.5, [1.15, 2.15, -.5], { ...ROSAP, tail: 'right' }); const L = SEQ(c, a, [[['LAS DOS COSAS A LA VEZ'], .05, 'y', [0, .85, .1], 2.0], [['NADIE PIENSA DE TI UNA SOLA COSA'], tg - .2, 'p', [0, .85, .1], 2.6, 1]]); return { update: (u, t, cam) => { pop(p1, u, 0, 99, cam); pop(p2, u, 0, 99, cam); L(u, cam); } }; },
  c: [[0, 1.65, 3.8], [0, 1.6, -.5], [0, 1.65, 4.2], [0, 1.6, -.5]], range: 3 }; });

// ===================== CENAS 75–106 =====================
const CALLE = { amb: 'barrio', fov: 30 };
const andar = (x0, x1, d0, d1) => (u) => [lerp(x0, x1, smooth(d0, d1, u)), 0, -.3];
const BON = ['EXPLICA MUY BIEN', 'ES BUEN AMIGO', 'ME HACE REÍR', 'QUÉ BUENA LETRA', 'HUELE BIEN', 'ES MAJO'];
// 75. Salida del instituto. Vas andando a casa.
Q(75, (d, a) => ({ ...CALLE, atores: [YO({ x: 0, z: -.3, eyes: [[0, 'look']], move: andar(-1.4, .8, 0, d), pose: (k, u) => k.walk(u * 1.6) })],
  extra: (c) => { INSTI(c); const L = SEQ(c, a, [[['SALIDA DEL INSTITUTO'], .05, 'y', [0, 2.3, -.4], 1.9], [['VAS ANDANDO A CASA'], 'andando', 'w', [0, 2.3, -.4], 1.8, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[-.6, 1.7, 3.8], [-.5, 1.4, -.3], [.4, 1.7, 3.4], [.4, 1.4, -.3]], range: 3, look: TARDE }));
// 76. Y empiezas a darte cuenta de algo raro. Desde que te has levantado, has oído muchísimos pensamientos bonitos sobre ti.
Q(76, (d, a) => { const tb = R0(a, 'bonitos'); const PS = [[-1.4, 2.3], [1.4, 2.25], [-1.6, 1.6], [1.6, 1.55], [-.9, 2.75], [.9, 2.7]]; return { ...CALLE, atores: [YO({ x: 0, z: -.3, eyes: [[0, 'look'], [R0(a, 'raro'), 'flat'], [tb, 'happy']], move: andar(-.5, .5, 0, d), pose: (k, u) => k.walk(u * 1.4) })],
  extra: (c) => { const M = BON.map((t, i) => piensa(c, [t], 1.3, [PS[i][0], PS[i][1], -.5], { ...ROSAP, size: 56, tail: PS[i][0] > 0 ? 'right' : 'left' })); const t = lw(c, ['ALGO RARO'], 1.0, [0, 2.3, -.4]); const t2 = lp(c, ['PENSAMIENTOS BONITOS SOBRE TI'], 2.5, [0, .8, .2]); const b = brillos(c, 10, '#FFC8D8');
    return { update: (u, tt, cam) => { pop(t, u, R0(a, 'raro') - .3, tb - 1.5, cam); M.forEach((m, i) => pop(m, u, tb - 1.2 + i * .25, 99, cam)); pop(t2, u, tb - .3, 99, cam); b(u, [0, 1.8, -.4, 1.4], u > tb ? 1 : 0); } }; },
  c: [[0, 1.75, 4.6], [0, 1.6, -.4], [0, 1.75, 4.2], [0, 1.6, -.4]], range: 3, look: TARDE }; });
// 77. Que explicas bien. Que eres buen amigo. Que haces reír. Que tienes buena letra.
Q(77, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [YO({ x: 0, z: -.5, eyes: [[0, 'happy']] })],
  extra: (c) => { const P = PSEQ(c, a, [[['EXPLICA MUY BIEN'], 'explicas', [-1.2, 2.3, -.5], 1.4], [['ES BUEN AMIGO'], 'amigo', [1.2, 2.3, -.5], 1.3, { tail: 'right' }], [['ME HACE REÍR'], 'reir', [-1.25, 1.55, -.5], 1.3], [['QUÉ BUENA LETRA'], 'letra', [1.25, 1.55, -.5], 1.4, { tail: 'right' }]], { ...ROSAP, keep: true }); return { update: (u, t, cam) => P(u, cam) }; },
  c: [[0, 1.65, 4.2], [0, 1.6, -.5], [0, 1.65, 3.8], [0, 1.6, -.5]], range: 3 }));
// 78. Que hueles bien, eso lo pensó alguien en el pasillo y todavía no sabes quién.
Q(78, (d, a) => { const tq = R0(a, 'quien'); return { amb: 'pasillo', fov: 30, atores: [YO({ x: -.5, z: -.3, eyes: [[0, 'happy'], [tq - .5, 'lookl']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u < tq - .5 ? 100 : 12, u < tq - .5 ? 140 : 8], head: u > tq - .5 ? 12 : 0 }) }), EXTRA(3, { x: 1.4, z: -1.6, eyes: [[0, 'happy']] }), EXTRA(7, { x: 2.2, z: -1.9, eyes: [[0, 'look']] })],
  extra: (c) => { const p = piensa(c, ['HUELE BIEN…'], 1.2, [1.6, 2.4, -1.4], { ...ROSAP, tail: 'right' }); const q = ICONO(c, '?', .45, [1.8, 1.8, -1.2]); const L = SEQ(c, a, [[['EN EL PASILLO'], 'pasillo', 'w', [-.5, 2.2, -.3], 1.3], [['¿QUIÉN?'], tq - .2, 'p', [-.5, 2.2, -.3], .8, 1]]); return { update: (u, t, cam) => { pop(p, u, .05, 99, cam); pop(q, u, tq - .2, 99, cam); L(u, cam); } }; },
  c: [[.2, 1.75, 4.0], [.2, 1.45, -.8], [.2, 1.75, 3.6], [.2, 1.45, -.8]], range: 3 }; });
// 79. Pero nadie te lo ha dicho en voz alta. Ni una sola vez. En toda tu vida.
Q(79, (d, a) => { const tv = R0(a, 'vez'), tvi = R0(a, 'vida'); return { ...CALLE, atores: [YO({ x: 0, z: -.3, eyes: [[0, 'look'], [tv, 'sad']], pose: (k) => k.pose({ armL: [12, 8], armR: [12, 8], head: -6 }) })],
  extra: (c) => { const L = SEQ(c, a, [[['NADIE TE LO HA DICHO'], .05, 'w', [0, 2.3, -.4], 1.9], [['NI UNA SOLA VEZ'], tv - .5, 'r', [0, 2.3, -.4], 1.5], [['EN TODA TU VIDA'], tvi - .4, 'r', [0, 2.3, -.4], 1.5, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.65, 3.4], [0, 1.5, -.3], [0, 1.65, 3.0], [0, 1.5, -.3]], range: 3, look: TARDE }; });
// 80. ¿Por qué? En 2021, Xuan Zhao y Nicholas Epley, en la Universidad de Chicago, estudiaron justo eso.
Q(80, (d, a) => { const tx = R0(a, 'xuan'), tc = R0(a, 'chicago'); return { amb: 'lab', fov: 32, atores: [CIENT(2, { x: -.7, z: -.4, eyes: [[0, 'look'], [tx, 'happy']] }), PROF({ x: .7, z: -.4, eyes: [[0, 'look'], [tx + 1, 'happy']], pose: (k, u) => (u > tc ? point(k) : k.pose()) })],
  extra: (c) => { const L = SEQ(c, a, [[['¿POR QUÉ?'], .05, 'p', [0, 2.35, -.3], 1.0], [['XUAN ZHAO · NICHOLAS EPLEY'], tx - .2, 'b', [0, 2.35, -.3], 2.4], [['UNIVERSIDAD DE CHICAGO'], tc - .5, 'w', [0, 2.35, -.3], 2.1, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.7, 3.9], [0, 1.5, -.4], [0, 1.7, 3.4], [0, 1.5, -.4]], range: 3 }; });
// 81. Pidieron a cientos de personas que escribieran un cumplido sincero a alguien que conocían, y que adivinaran cómo se iba a sentir la otra persona al recibirlo.
Q(81, (d, a) => { const tc = R0(a, 'cumplido'), ta = R0(a, 'adivinaran'); return { amb: 'gris', fov: 30, k: 1, atores: [EXTRA(4, { x: -.7, z: -.4, eyes: [[0, 'down'], [ta, 'look']], pose: (k, u) => k.pose({ armL: [60, 70], armR: [60 + Math.sin(u * 14) * 4, 70] }) }), EXTRA(6, { x: 1.3, z: -.8, eyes: [[0, 'look']] })],
  extra: (c, s, A) => { const n = cut(notaT(['ERES MUY', 'BUENA PERSONA'], 64), .75, .56); n.renderOrder = 5; c.add(n); const p = PT(c, A, 0, ['¿CÓMO SE VA A SENTIR?'], 1.5, .3, .6, BLANP); const L = SEQ(c, a, [[['CIENTOS DE PERSONAS'], .05, 'w', [0, .8, .3], 1.8], [['UN CUMPLIDO SINCERO'], tc - .2, 'y', [0, .8, .3], 1.8, 1]]); return { update: (u, t, cam) => { const h = hand(A[0]); n.position.set(h.x - .12, h.y + .1, h.z + .12); pointer(n, cam); p(u, ta, 99, cam); L(u, cam); } }; },
  c: [[0, 1.65, 3.8], [.2, 1.5, -.5], [0, 1.65, 3.4], [.2, 1.5, -.5]], range: 3 }; });
// 82. Y casi todos se equivocaban hacia abajo.
const CUMB = (dos) => [['LO QUE\nCREÍAN', .4, '#5FA0D8'], ['LO QUE\nSINTIÓ', dos ? .88 : 0, '#E8667F']];
Q(82, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { barras(c, CUMB(false), 2.6, [0, 1.5, -.4], { title: '¿CÓMO SE SENTIRÍA?' }); const t = lab(c, ['SE EQUIVOCABAN HACIA ABAJO'], 2.3, [0, 2.42, -.2], BLUE); return { update: (u, tt, cam) => pop(t, u, .3, 99, cam) }; },
  c: [[0, 1.6, 3.6], [0, 1.6, -.4], [0, 1.6, 3.2], [0, 1.6, -.4]], range: 3, blur: 4 }));
// 83. Pensaban que el cumplido iba a dar un poco de vergüenza, que iba a sonar raro, que la otra persona no le iba a dar importancia.
Q(83, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [EXTRA(4, { x: 0, z: -.5, eyes: [[0, 'sad']], pose: (k) => k.pose({ armL: [12, 8], armR: [60, 70], head: -6 }) })],
  extra: (c, s, A) => { const n = cut(notaT(['ERES MUY', 'BUENA PERSONA'], 64), .6, .45); n.renderOrder = 5; c.add(n); n.position.set(.45, 1.05, -.2); const P = PSEQ(c, a, [[['DARÁ VERGÜENZA'], 'verguenza', [-1.15, 2.25, -.5], 1.3], [['SONARÁ RARO'], 'raro', [1.15, 2.2, -.5], 1.2, { tail: 'right' }], [['NO LE DARÁ', 'IMPORTANCIA'], 'importancia', [-1.1, 1.5, -.5], 1.3]], { ...BLANP, keep: true }); return { update: (u, t, cam) => { pointer(n, cam); P(u, cam); } }; },
  c: [[0, 1.65, 4.0], [0, 1.6, -.5], [0, 1.65, 3.6], [0, 1.6, -.5]], range: 3 }));
// 84. Pero la otra persona, en realidad, se sentía mucho mejor de lo que habían calculado.
Q(84, (d, a) => { const tm = R0(a, 'mejor'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const b1 = barras(c, CUMB(false), 2.6, [0, 1.5, -.4], { title: '¿CÓMO SE SENTIRÍA?' }); const b2 = barras(c, CUMB(true), 2.6, [0, 1.5, -.39], { title: '¿CÓMO SE SENTIRÍA?' }); const m = lab(c, ['¡MUCHO MEJOR!'], 1.2, [.65, 2.42, -.2], PINK); return { update: (u, t, cam) => { b2.visible = u > tm - .6; b1.visible = !b2.visible; pop(m, u, tm - .2, 99, cam); } }; },
  c: [[0, 1.6, 3.6], [0, 1.6, -.4], [0, 1.6, 3.2], [0, 1.6, -.4]], range: 3, blur: 4 }; });
// 85. O sea, que todos pensamos cosas bonitas de los demás. Y nos las callamos. Porque creemos que no van a servir de nada.
Q(85, (d, a) => { const tb = R0(a, 'bonitas'), tc = R0(a, 'callamos'), tn = R0(a, 'nada'); const XS = [-2.0, -.7, .7, 2.0]; const TX = ['¡QUÉ GRACIOSO ES!', 'ME ENCANTA SU RISA', 'QUÉ BIEN DIBUJA', 'ES MUY VALIENTE']; return { amb: 'plaza', fov: 32, atores: XS.map((x, i) => EXTRA([0, 1, 6, 5][i], { x, z: -.6 - (i % 2) * .3, eyes: [[0, 'happy'], [tc, 'flat']] })),
  extra: (c, s, A) => { const P = TX.map((t, i) => PT(c, A, i, [t], 1.25, i === 0 ? .3 : i === 3 ? -.3 : 0, .62, ROSAP)); const L = SEQ(c, a, [[['TODOS PENSAMOS COSAS BONITAS'], tb - .6, 'p', [0, .8, .4], 2.6], [['Y NOS LAS CALLAMOS'], tc - .3, 'r', [0, .8, .4], 2.3], [['"NO VA A SERVIR DE NADA"'], tn - 1.2, 'w', [0, .8, .4], 2.2, 1]]); return { update: (u, t, cam) => { P.forEach((p, i) => p(u, tb - .6 + i * .2, tc, cam)); L(u, cam); } }; },
  c: [[0, 1.8, 4.8], [0, 1.6, -.6], [0, 1.8, 4.4], [0, 1.6, -.6]], range: 3 }; });
// 86. Llegas a casa. Tu madre está en la cocina. Otra vez. Y oyes:
Q(86, (d, a) => { const to = R0(a, 'oyes'); return { ...COCINA, atores: [YO({ x: -.9, z: -.4, eyes: [[0, 'look']], move: (u) => [lerp(-3.0, -.9, smooth(0, 1.8, u)), 0, -.4], pose: (k, u) => (u < 1.8 ? k.walk(u * 2) : k.pose()) }), MAMAC({ eyes: [[0, 'look']], pose: untar })],
  extra: (c, s, A) => { cocinaM(c, false); const tt = conTost(c, A, 1); const o = ondas(c); const L = SEQ(c, a, [[['LLEGAS A CASA'], .05, 'w', [-.9, 2.15, -.4], 1.3], [['OTRA VEZ EN LA COCINA'], 'otra', 'y', [.6, 2.15, -.6], 1.8, 1]]); return { update: (u, t, cam) => { tt(); L(u, cam); o(u, A[0], cam, smooth(to - .2, to + .3, u)); } }; },
  c: [[0, 1.65, 3.6], [0, 1.4, -.5], [0, 1.65, 3.2], [0, 1.4, -.5]], range: 3, look: TARDE }; });
// 87. "Hoy viene más contento. Qué ganas tengo de que me cuente algo."
Q(87, (d, a) => { const tq = R0(a, 'ganas'); return { ...COCINA, atores: [MAMAC({ eyes: [[0, 'happy']], pose: untar })],
  extra: (c, s, A) => { cocinaM(c, false); const tt = conTost(c, A, 0); const P = PSEQ(c, a, [[['HOY VIENE MÁS CONTENTO'], .05, [-.25, 2.0, -.5], 1.6], [['QUÉ GANAS TENGO DE', 'QUE ME CUENTE ALGO'], tq - .4, [-.25, 2.0, -.5], 1.6]], { ...ROSAP, tail: 'right' }); return { update: (u, t, cam) => { tt(); P(u, cam); } }; },
  c: CMAMA, range: 2.5, look: TARDE }; });
// 88. Pero no le pregunto, que luego dice que soy pesada.
Q(88, (d, a) => ({ ...COCINA, atores: [MAMAC({ eyes: [[0, 'look'], [R0(a, 'pesada') - .3, 'sad']], pose: untar })],
  extra: (c, s, A) => { cocinaM(c, false); const tt = conTost(c, A, 0); const p = PT(c, A, 0, ['PERO NO LE PREGUNTO,', 'QUE LUEGO DICE', 'QUE SOY PESADA'], 1.5, -.6, .45, { ...ROSAP, tail: 'right' }); return { update: (u, t, cam) => { tt(); p(u, 0, 99, cam); } }; },
  c: CMAMA, range: 2.5, look: TARDE }));
// 89. Te sientas en la mesa. Y le cuentas lo de la exposición. Y ella se ríe.
const YOM = (o = {}) => SENTA(YO, -.5, -.2, o), MAMM = (o = {}) => SENTA(MAMA, .5, -.2, o);
const CMESA = [[0, 1.6, 3.0], [0, 1.2, -.2], [0, 1.55, 2.6], [0, 1.2, -.2]];
Q(89, (d, a) => { const tc = R0(a, 'cuentas'), tr = R0(a, 'rie'); return { ...COCINA, atores: [YOM({ eyes: [[0, 'happy']], talk: [[tc, tr]], pose: (k, u) => (u > tc && u < tr ? talkP(k, u) : k.pose()) }), MAMM({ eyes: [[0, 'look'], [tr, 'happy']], pose: (k, u) => (u > tr ? risa(k, u) : k.pose()) })],
  extra: (c) => { cocinaM(c); const L = SEQ(c, a, [[['LO DE LA EXPOSICIÓN'], tc + .3, 'w', [-.5, 1.85, -.2], 1.5], [['SE RÍE'], tr - .1, 'y', [.5, 1.85, -.2], .8, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: CMESA, range: 3, look: TARDE }; });
// 90. Y por dentro, a la vez, oyes: "Ojalá esto durara siempre."
Q(90, (d, a) => { const to = R0(a, 'ojala'); return { ...COCINA, atores: [MAMM({ x: .5, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ head: Math.sin(u * 2) * 4 }) })],
  extra: (c, s, A) => { cocinaM(c); calida(c, [.5, 2.2, .6], 3, 5); const p = PT(c, A, 0, ['OJALÁ ESTO', 'DURARA SIEMPRE'], 1.2, -.5, .45, { ...ROSAP, tail: 'right' }); const t = lp(c, ['POR DENTRO'], 1.0, [.5, 1.05, .5]); const b = brillos(c, 6, '#FFE0B0'); return { update: (u, tt, cam) => { pop(t, u, .1, to - .2, cam); p(u, to - .2, 99, cam); b(u, [.5, 1.6, -.2, .6], u > to ? 1 : 0); } }; },
  c: [[.5, 1.45, 2.1], [.5, 1.3, -.2], [.5, 1.45, 1.8], [.5, 1.3, -.2]], range: 2.5, look: TARDE }; });
// 91. Las doce menos cinco de la noche.
Q(91, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const ck = clock(.85, 12); ck.position.set(0, 1.6, -.8); c.add(ck); const t = lab(c, ['23:55'], 1.2, [0, 2.6, -.5], { bg: '#1E2230', fg: '#F2C14E', size: 96, w: 420 }); const q = QUEDAN(c, [0, .75, -.3], 'QUEDAN 5 MINUTOS', 1.6); return { update: (u, tt, cam) => { ck.rotation.z = -.05; pop(t, u, .05, 99, cam); pop(q, u, .6, 99, cam); } }; },
  c: [[0, 1.7, 4.4], [0, 1.65, -.5], [0, 1.7, 4.0], [0, 1.65, -.5]], range: 3, look: NLOOK }));
// 92. Estás en la cama, mirando el techo. Te quedan cinco minutos de poder.
const NCAMA = [[-1.0, 1.9, 2.8], [-1.1, 1.1, -1.0], [-1.0, 1.8, 2.3], [-1.1, 1.1, -1.0]];
Q(92, (d, a) => { const tq = R0(a, 'quedan'); return { ...NOCHEC, fov: 30, atores: [DORM(YO, { x: -.7, z: -1.0, y: .97, eyes: [[0, 'look']] })],
  extra: (c, s, A) => { const o = ondas(c); const L = SEQ(c, a, [[['MIRANDO EL TECHO'], .05, 'w', [-.6, 2.0, -.8], 1.5], [['5 MINUTOS DE PODER'], tq - .2, 'p', [-.6, 2.0, -.8], 1.7, 1]]); return { update: (u, t, cam) => { o(u, A[0], cam, .4); L(u, cam); } }; },
  c: NCAMA, range: 2.5, look: NLOOK }; });
// 93. Y te das cuenta de que tenías miedo de lo que ibas a oír.
Q(93, (d, a) => ({ ...NOCHEC, fov: 30, atores: [DORM(YO, { x: -.7, z: -1.0, y: .97, eyes: [[0, 'look'], [R0(a, 'miedo'), 'sad']] })],
  extra: (c) => { const t = lab(c, ['TENÍAS MIEDO DE LO QUE IBAS A OÍR'], 2.2, [-.6, 2.0, -.8], OSC); return { update: (u, tt, cam) => pop(t, u, R0(a, 'miedo') - .4, 99, cam) }; },
  c: NCAMA, range: 2.5, look: NLOOK }));
// 94. Pensabas que ibas a descubrir que la gente se ríe de ti. Que te critica. Que nadie te soporta.
Q(94, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [YO({ x: 0, z: -.5, eyes: [[0, 'sad']], pose: (k) => k.pose({ armL: [60, 70], armR: [60, 70], head: -8 }) })],
  extra: (c) => { const P = PSEQ(c, a, [[['SE RÍEN DE TI'], 'rie', [-1.15, 2.25, -.5], 1.2], [['TE CRITICAN'], 'critica', [1.15, 2.15, -.5], 1.1, { tail: 'right' }], [['NADIE TE SOPORTA'], 'soporta', [-1.1, 1.5, -.5], 1.3]], { ...OSCP, keep: true }); return { update: (u, t, cam) => P(u, cam) }; },
  c: [[0, 1.65, 4.0], [0, 1.6, -.5], [0, 1.65, 3.6], [0, 1.6, -.5]], range: 3, look: { exposure: .8, vig: .7 } }));
// 95. Y no. La mayoría ni pensaba en ti.
Q(95, (d, a) => { const XS = [-2.0, -.7, .7, 2.0]; const TX = ['¿Y MI PIE?', 'TENGO SUEÑO', '¿QUÉ CENO?', '¿Y EL EXAMEN?']; return { amb: 'gris', fov: 32, k: 1, atores: XS.map((x, i) => EXTRA([1, 3, 5, 7][i], { x, z: -.6, eyes: [[0, i % 2 ? 'flat' : 'look']] })),
  extra: (c, s, A) => { const P = TX.map((t, i) => PT(c, A, i, [t], 1.05, i === 0 ? .3 : i === 3 ? -.3 : 0, .62, { size: 56 })); const t = lw(c, ['LA MAYORÍA NI PENSABA EN TI'], 2.4, [0, .8, .4]); return { update: (u, tt, cam) => { P.forEach((p, i) => p(u, .2 + i * .2, 99, cam)); pop(t, u, R0(a, 'mayoria') - .3, 99, cam); } }; },
  c: [[0, 1.8, 4.8], [0, 1.6, -.6], [0, 1.8, 4.4], [0, 1.6, -.6]], range: 3 }; });
// 96. Y los que sí pensaban en ti… pensaban cosas mucho mejores de las que tú te dices a ti mismo.
Q(96, (d, a) => { const tm = R0(a, 'mejores'), td = R0(a, 'dices'); return { amb: 'gris', fov: 32, k: 1, atores: [YO({ x: 0, z: -.4, eyes: [[0, 'look'], [tm, 'happy']] }), MAMA({ x: -1.7, z: -.9, eyes: [[0, 'happy']] }), DANI({ x: 1.7, z: -.9, eyes: [[0, 'happy']] }), ELA({ x: -.9, z: -1.5, eyes: [[0, 'happy']] })],
  extra: (c, s, A) => { const p1 = PT(c, A, 1, ['¡QUÉ BIEN LO HACE!'], 1.2, .2, .6, ROSAP), p2 = PT(c, A, 2, ['MI MEJOR AMIGO'], 1.2, -.2, .6, { ...ROSAP, tail: 'right' }), p3 = PT(c, A, 3, ['♥'], .7, .25, .55, { ...ROSAP, size: 90 }); const L = SEQ(c, a, [[['MUCHO MEJORES'], tm - .3, 'p', [0, .8, .4], 1.6], [['DE LO QUE TÚ TE DICES'], td - .6, 'w', [0, .8, .4], 2.0, 1]]); return { update: (u, t, cam) => { p1(u, .1, 99, cam); p2(u, .4, 99, cam); p3(u, .7, 99, cam); L(u, cam); } }; },
  c: [[0, 1.75, 4.6], [0, 1.55, -.7], [0, 1.75, 4.1], [0, 1.55, -.7]], range: 3 }; });
// 97. Medianoche. Silencio. Se acabó.
Q(97, (d, a) => { const ts = R0(a, 'silencio'), ta = R0(a, 'acabo'); return { ...NOCHEC, fov: 30, atores: [DORM(YO, { x: -.7, z: -1.0, y: .97, eyes: [[0, 'look'], [ta, 'shut']] })],
  extra: (c, s, A) => { const o = ondas(c); const L = SEQ(c, a, [[['00:00'], .05, 'y', [-.6, 2.0, -.8], .9], [['SILENCIO'], ts - .1, 'w', [-.6, 2.0, -.8], 1.0], [['SE ACABÓ'], ta - .2, 'p', [-.6, 2.0, -.8], 1.0, 1]]); return { update: (u, t, cam) => { o(u, A[0], cam, .5 * (1 - smooth(ts - .3, ts + .4, u))); L(u, cam); } }; },
  c: NCAMA, range: 2.5, look: NLOOK }; });
// 98. Martes. Recreo. Ya no puedes oír nada. Vuelves a estar como todo el mundo. Sin saber lo que piensan los demás.
Q(98, (d, a) => { const tn = R0(a, 'nada'), tm = R0(a, 'mundo'), ts = R0(a, 'sin'); return { ...RECP, atores: [YO({ x: -.8, z: .2, eyes: [[0, 'look'], [tn, 'flat'], [ts, 'happy']] }), EXTRA(2, { x: 1.2, z: -1.2, eyes: [[0, 'happy']] }), EXTRA(5, { x: 2.2, z: -1.6, eyes: [[0, 'look']] }), EXTRA(0, { x: -2.6, z: -1.8, eyes: [[0, 'happy']] })],
  extra: (c, s, A) => { PATIO(c); BANCO(c); const qs = [1, 2, 3].map((i) => { const q = ICONO(c, '?', .35, [0, 0, 0], '#C8CED6'); return q; }); const v = new THREE.Vector3(); const L = SEQ(c, a, [[['MARTES · RECREO'], .05, 'y', [-.8, 2.2, .2], 1.4], [['YA NO OYES NADA'], tn - .3, 'w', [-.8, 2.2, .2], 1.5], [['COMO TODO EL MUNDO'], tm - .5, 'w', [-.8, 2.2, .2], 1.7, 1]]);
    return { update: (u, t, cam) => { qs.forEach((q, i) => { A[i + 1].head.getWorldPosition(v); q.position.set(v.x, v.y + .45, v.z); pop(q, u, ts + i * .2, 99, cam); }); L(u, cam); } }; },
  c: [[-.3, 1.75, 4.4], [-.2, 1.25, -.5], [-.3, 1.7, 3.9], [-.2, 1.25, -.5]], range: 3.5 }; });
// 99. Pero ahora sabes una cosa. Que lo bonito que piensan de ti casi nunca te lo van a decir.
Q(99, (d, a) => { const tb = R0(a, 'bonito'); return { ...RECP, atores: [YO({ x: 0, z: .2, eyes: [[0, 'look'], [tb, 'happy']] })],
  extra: (c) => { PATIO(c); const L = SEQ(c, a, [[['AHORA SABES UNA COSA'], .05, 'w', [0, 2.2, .2], 1.8], [['LO BONITO CASI NUNCA SE DICE'], tb - .3, 'p', [0, 2.2, .2], 2.3, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[0, 1.65, 3.4], [0, 1.5, .2], [0, 1.65, 3.0], [0, 1.5, .2]], range: 3 }; });
// 100. Así que decides empezar tú.
Q(100, (d, a) => ({ ...RECP, atores: [YO({ x: 0, z: .2, eyes: [[0, 'smug']], pose: (k) => k.pose({ armL: [12, 8], armR: [60, 110] }) })],
  extra: (c) => { PATIO(c); const t = lab(c, ['DECIDES EMPEZAR TÚ'], 1.8, [0, 2.15, .2], ROSA); const b = brillos(c, 10, '#FFE27A'); return { update: (u, tt, cam) => { pop(t, u, R0(a, 'empezar') - .3, 99, cam); b(u, [0, 1.5, .2, .7]); } }; },
  c: [[0, 1.6, 2.8], [0, 1.5, .2], [0, 1.6, 2.4], [0, 1.55, .2]], range: 2.5 }));
// 101. Te acercas a Dani. "Oye. Que sepas que me puedes contar lo que sea. Siempre."
Q(101, (d, a) => { const to = R0(a, 'oye'), ts = R0(a, 'siempre'); return { ...RECP, atores: [YO({ x: -.6, z: -.3, eyes: [[0, 'look']], talk: [[to, d]], move: (u) => [lerp(-2.4, -.6, smooth(0, to - .2, u)), 0, -.3], pose: (k, u) => (u < to - .2 ? k.walk(u * 2) : k.pose({ armL: [12, 8], armR: [100, 40] })) }), DANI({ x: .6, z: -.3, eyes: [[0, 'down'], [to, 'look']] })],
  extra: (c) => { PATIO(c); const g1 = hab(c, ['OYE. QUE SEPAS QUE', 'ME PUEDES CONTAR LO QUE SEA'], 1.8, [-.5, 2.3, -.2], 52); const g2 = hab(c, ['SIEMPRE.'], .9, [-.5, 2.25, -.2], 72); return { update: (u, t, cam) => { pop(g1, u, to, ts - .1, cam); pop(g2, u, ts - .1, 99, cam); } }; },
  c: [[0, 1.7, 3.6], [0, 1.5, -.3], [0, 1.7, 3.2], [0, 1.5, -.3]], range: 3 }; });
// 102. Él te mira raro. Y luego sonríe. No dice nada. Pero no hace falta.
Q(102, (d, a) => { const ts = R0(a, 'sonrie'), tf = R0(a, 'falta'); return { ...RECP, atores: [DANI({ x: .3, z: -.3, eyes: [[0, 'flat'], [ts, 'happy']] })],
  extra: (c, s, A) => { PATIO(c); const L = SEQ(c, a, [[['TE MIRA RARO'], .05, 'w', [-.6, 2.1, -.3], 1.2], [['SONRÍE'], ts - .1, 'y', [-.6, 2.1, -.3], .8], [['NO HACE FALTA'], tf - .5, 'p', [-.6, 2.1, -.3], 1.3, 1]]); const h = corazon(c, .2); const v = new THREE.Vector3(); return { update: (u, t, cam) => { L(u, cam); A[0].head.getWorldPosition(v); h.position.set(v.x + .5, v.y + .2, v.z); h.visible = u > tf - .3; h.scale.setScalar(latido(u, 90)); pointer(h, cam); } }; },
  c: [[0, 1.65, 3.0], [0, 1.55, -.3], [0, 1.65, 2.6], [0, 1.55, -.3]], range: 2.5 }; });
// 103. Y después, respiras hondo. Y vas hacia el banco del fondo.
Q(103, (d, a) => { const tv = R0(a, 'vas'); return { ...RECP, atores: [YO({ x: -1.6, z: .2, eyes: [[0, 'shut'], [tv - .3, 'look']], move: (u) => [lerp(-2.2, -.9, smooth(tv, d, u)), 0, .2], pose: (k, u) => (u > tv ? k.walk(u * 1.4) : k.pose({ bob: Math.sin(u * 2.4) * .02 })) }), ELBAN({ eyes: [[0, 'happy']] })],
  extra: (c) => { PATIO(c); BANCO(c); const L = SEQ(c, a, [[['RESPIRAS HONDO'], .05, 'b', [-1.6, 2.2, .2], 1.4], [['HACIA EL BANCO DEL FONDO'], tv - .2, 'w', [-1.0, 2.2, .2], 2.0, 1]]); return { update: (u, t, cam) => L(u, cam) }; },
  c: [[-.8, 1.7, 4.2], [-.6, 1.25, -.3], [-.6, 1.65, 3.7], [-.5, 1.25, -.3]], range: 3.5 }; });
// 104. Ella te ve llegar. Se pone roja. Y esta vez no necesitas leerle la mente para saber por qué.
Q(104, (d, a) => { const tr = R0(a, 'roja'), tn = R0(a, 'necesitas'); return { ...RECP, atores: [ELBAN({ eyes: [[0, 'look'], [tr, 'happy']], pose: (k, u) => k.pose({ head: u > tr ? -6 : 0 }) })],
  extra: (c, s, A) => { PATIO(c); BANCO(c); const r = rubor(A[0]); const L = SEQ(c, a, [[['TE VE LLEGAR'], .05, 'w', [.45, 1.95, -.4], 1.2], [['SE PONE ROJA'], tr - .1, 'r', [.45, 1.95, -.4], 1.2], [['NO NECESITAS LEERLE LA MENTE'], tn - .3, 'p', [.45, 1.95, -.4], 2.0, 1]]); return { update: (u, t, cam) => { r(smooth(tr - .2, tr + .6, u) * .15); L(u, cam); } }; },
  c: CELA, range: 2.5 }; });
// 105. "Hola", dices. "Me gusta cómo te ríes."
const YOBAN = (o = {}) => SENTA(YO, -.45, -.5, o);
Q(105, (d, a) => { const tm = R0(a, 'me'); return { ...RECP, atores: [YOBAN({ eyes: [[0, 'look'], [tm, 'happy']], talk: [[0, d]] }), ELBAN({ eyes: [[0, 'happy'], [tm + .6, 'heart']], pose: (k, u) => k.pose({ armL: [u > tm + .6 ? 150 : 8, u > tm + .6 ? 140 : 6], armR: [u > tm + .6 ? 150 : 8, u > tm + .6 ? 140 : 6] }) })],
  extra: (c, s, A) => { PATIO(c); BANCO(c); const r = rubor(A[1]); const g1 = hab(c, ['HOLA.'], .7, [-.55, 1.9, -.3], 72); const g2 = hab(c, ['ME GUSTA CÓMO TE RÍES.'], 1.4, [-.4, 1.95, -.3], 56); const h = corazon(c, .25); h.position.set(0, 1.95, -.4); return { update: (u, t, cam) => { pop(g1, u, 0, tm - .1, cam); pop(g2, u, tm - .1, 99, cam); r(.15); h.visible = u > tm + .8; h.scale.setScalar(latido(u, 120)); pointer(h, cam); } }; },
  c: [[0, 1.6, 3.0], [0, 1.25, -.5], [0, 1.55, 2.5], [0, 1.25, -.5]], range: 3 }; });
// 106. Y tú, si pudieras escuchar lo que la gente piensa de ti durante un día… ¿lo harías? ¿O preferirías no saberlo? Te leo en los comentarios.
Q(106, (d, a) => { const th = R0(a, 'harias'), tp = R0(a, 'preferirias'), tl = R0(a, 'leo'); return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: 0, z: -.5, eyes: [[0, 'look'], [th, 'happy'], [tp, 'smug'], [tl, 'happy']], pose: (k, u) => (u > tl ? wave(k, u) : k.pose({ armL: [12, 8], armR: [u > th ? 90 : 12, u > th ? 120 : 8] })) })],
  extra: (c, s, A) => { const o = ondas(c); const L = SEQ(c, a, [[['¿Y SI PUDIERAS ESCUCHAR', 'LO QUE PIENSAN DE TI?'].slice(0, 1), .1, 'w', [0, 2.35, -.4], 2.2], [['¿LO HARÍAS?'], th - .2, 'p', [0, 2.35, -.4], 1.3], [['¿O PREFERIRÍAS NO SABERLO?'], tp - .2, 'r', [0, 2.35, -.4], 2.3], [['TE LEO EN LOS COMENTARIOS'], tl - .2, 'y', [0, 2.35, -.4], 2.3, 1]]); const b = brillos(c, 12, '#C8A8FF'); return { update: (u, t, cam) => { o(u, A[0], cam, u < tl ? .5 : 0); L(u, cam); b(u, [0, 1.6, -.4, 1.2], u > tl ? 1 : 0); } }; },
  c: [[0, 1.6, 3.8], [0, 1.55, -.5], [0, 1.6, 3.4], [0, 1.55, -.5]], range: 3, look: MENTE }; });
