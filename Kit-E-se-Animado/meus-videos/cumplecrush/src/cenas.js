// "¿Y si tu crush te invitara a su cumpleaños… y fueras el único?" — horizontal 1280x720, ~10:06
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
const Q = (i, fn) => { const a = S[i], b = end(i), d = Math.min(b, 606.0) - a; CENAS.push([(x, y) => plano(x, y, mk(fn(d, a), d)), a, b]); };
const Qt = (a, b, fn) => { const d = Math.min(b, 606.0) - a; CENAS.push([(x, y) => plano(x, y, mk(fn(d, a), d)), a, b]); };
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
// ===================== CENAS 0–35 =====================
const DIA = { amb: 'cuartoYo' };
const ELP = (o = {}) => ELA({ outfit: 'rosa', ...o });
const MADRE = (o = {}) => MUJ(4, o);
const SENORA = (o = {}) => H({ outfit: 'roxo', hair: 'old', hairc: '#E8E2D8', glasses: true, glow: 0, lash: true, ...o });
const CS = [[0, 1.7, 4.6], [0, 1.25, -1.0], [0, 1.65, 4.1], [0, 1.25, -1.0]];
const libroP = (c, col = '#2F5A9A') => { const g = new THREE.Group(); g.add(box(.5, .66, .12, std(col), 0, 0, 0)); g.add(box(.46, .62, .13, std('#F4F0E4'), .03, 0, 0)); g.add(box(.06, .66, .125, std('#1E3A6A'), -.24, 0, 0)); c.add(g); return g; };
const bombones = (c) => { const g = new THREE.Group(); g.add(box(.6, .14, .5, std('#C9361F'), 0, 0, 0)); const t = cut(wordTex('♥', '#FFD8E0', 150), .3, .24); t.position.set(0, .075, 0); t.rotation.x = -Math.PI / 2; g.add(t); c.add(g); return g; };
// 0. Es viernes. Última clase.
Q(0, (d, a) => ({ ...AULA(), atores: [YO({ x: -.4, z: .6, eyes: [[0, 'flat']], pose: (k, u) => k.pose({ head: Math.sin(u * 2) * 5 }) }), EXTRA(1, { x: 1.4, z: .6, eyes: [[0, 'shut']] }), EXTRA(3, { x: -2.1, z: .6, eyes: [[0, 'look']] })],
  extra: (c) => { pupitres(c, [-2.1, -.4, 1.4], 1.1); const t = lab(c, ['VIERNES · ÚLTIMA CLASE'], 2.2, [0, 2.45, .6], { bg: '#1E2230', fg: '#F2C14E' }); return { update: (u, tt, cam) => pop(t, u, .1, 99, cam) }; },
  c: [[0, 1.8, 4.6], [0, 1.6, -1.6], [0, 1.75, 4.1], [0, 1.6, -1.6]], range: 4 }));
// 1. Y en tu mochila, sin que te des cuenta, alguien ha metido un sobre.
Q(1, (d, a) => { const tm = R0(a, 'metido'); return { ...AULA(), atores: [YO({ x: -1.3, z: .2, eyes: [[0, 'lookl']], pose: (k) => k.pose({ head: 25 }) }), ELA({ x: .9, z: -.2, eyes: [[0, 'look'], [tm + .6, 'happy']], move: (u) => [lerp(2.6, .7, smooth(0, 1.4, u)), 0, -.2], pose: (k, u) => (u < 1.4 ? k.walk(u * 2) : k.pose({ armL: [12, 8], armR: [u < tm + .4 ? 70 : 20, 10], lean: u < tm + .4 ? 10 : 0 })) })],
  extra: (c, s, A) => { const mo = mochila(c); mo.position.set(-.1, 0, .1); const sb = sobre(c, .4); const t = lp(c, ['ALGUIEN…'], 1.0, [.7, 2.05, -.2]); const t2 = lw(c, ['UN SOBRE'], 1.0, [-.1, 1.2, .2]); return { update: (u, tt, cam) => { const k = smooth(tm - .5, tm + .3, u); const p = hand(A[1]); sb.position.set(lerp(p.x, -.1, k), lerp(p.y, .55, k), lerp(p.z + .1, .1, k)); sb.rotation.x = -k * 1.2; pop(t, u, 1.2, 99, cam); pop(t2, u, tm, 99, cam); } }; },
  c: [[0, 1.5, 3.8], [-.2, 1.0, -.2], [0, 1.45, 3.3], [-.2, .9, -.2]], range: 3.5 }; });
// 2. Lo abres en casa. Es una invitación.
Q(2, (d, a) => { const ti = R0(a, 'invitacion'); return { ...DIA, fov: 32, atores: [YO({ x: -.5, z: -.4, eyes: [[0, 'look'], [ti, 'wide']], pose: hold })],
  extra: (c, s, A) => { const sb = sobre(c, .45); const iv = invitacion(c, .9); const t = lab(c, ['UNA INVITACIÓN'], 1.4, [-.5, 2.25, -.4], ROSA); return { update: (u, tt, cam) => { const p = hand(A[0]); sb.position.set(p.x + .15, p.y + .15, p.z + .15); sb.visible = u < ti - .3; iv.visible = !sb.visible; iv.position.set(-.45, 1.25 + smooth(ti - .3, ti + .3, u) * .1, .1); pointer(iv, cam); pointer(sb, cam); pop(t, u, ti, 99, cam); } }; },
  c: [[0, 1.6, 3.0], [-.3, 1.45, -.4], [0, 1.55, 2.6], [-.3, 1.45, -.4]], range: 3 }; });
// 3. "Mi cumpleaños. Sábado, a las seis. Te espero."
Q(3, (d, a) => ({ amb: 'gris', fov: 28, k: 1, atores: [],
  extra: (c) => { const iv = invitacion(c, 2.6); iv.position.set(0, 1.55, -.5); const b = brillos(c, 14, '#FFB0C0'); return { update: (u) => b(u, [0, 1.6, -.4, 1.5]) }; },
  c: [[0, 1.55, 4.6], [0, 1.55, -.5], [0, 1.55, 3.6], [0, 1.55, -.5]], range: 3 }));
// 4. Y la firma. Es de tu crush.
Q(4, (d, a) => { const tc = R0(a, 'crush'); return { amb: 'gris', fov: 28, k: 1, atores: [],
  extra: (c) => { const iv = invitacion(c, 2.6); iv.position.set(0, 1.55, -.5); const t = lab(c, ['DE TU CRUSH'], 1.0, [.6, 1.25, .2], PINK); const h = corazon(c, .35); h.position.set(1.25, 1.0, .1); return { update: (u, tt, cam) => { pop(t, u, tc - .2, 99, cam); h.visible = u > tc; h.scale.setScalar(latido(u, 140)); } }; },
  c: [[.3, 1.4, 3.0], [.4, 1.2, -.5], [.6, 1.15, 2.0], [.6, 1.05, -.5]], range: 2 }; });
// 5. El corazón te da un salto. Te invita a su cumpleaños. A ti.
Q(5, (d, a) => { const ts = R0(a, 'salto'), tt = R0(a, 'ti'); return { ...DIA, fov: 32, atores: [YO({ x: -.3, z: -.4, eyes: [[0, 'wide'], [ts, 'heart']], move: (u) => [-.3, u > ts && u < ts + .6 ? Math.sin((u - ts) / .6 * Math.PI) * .35 : 0, -.4], pose: (k, u) => k.pose({ armL: [u > ts ? 150 : 60, 40], armR: [u > ts ? 150 : 60, 40] }) })],
  extra: (c) => { const h = corazon(c, .5); h.position.set(-1.3, 2.0, -.4); const L = SEQ(c, a, [[['¡UN SALTO!'], 'salto', 'p', [-.3, 2.45, -.4], 1.3], [['TE INVITA A TI'], 'invita', 'y', [-.3, 2.45, -.4], 1.5], [['¡A TI!'], tt, 'r', [-.3, 2.45, -.4], .9, 1]]); return { update: (u, t2, cam) => { h.scale.setScalar(latido(u, 160) * (u > ts ? 1.3 : 1)); pointer(h, cam); L(u, cam); } }; },
  c: [[0, 1.7, 3.6], [-.3, 1.5, -.4], [0, 1.65, 3.1], [-.3, 1.5, -.4]], range: 3 }; });
// 6. Ahora imagina que llegas a la fiesta… y eres el único invitado.
Q(6, (d, a) => { const tu = R0(a, 'unico'); return { ...SALON, fov: 34, atores: [YO({ x: 0, z: .2, eyes: [[0, 'happy'], [tu, 'wide']], move: (u) => [0, 0, lerp(1.6, .2, smooth(0, 2.0, u))], pose: (k, u) => (u < 2.0 ? k.walk(u * 2) : k.pose({ head: Math.sin(u * 3) * 18 })) })],
  extra: (c) => { const F = FIESTA(c); const L = SEQ(c, a, [[['IMAGINA…'], 0, 'w', [0, 2.6, .2], 1.1], [['¿EL ÚNICO INVITADO?'], tu - .2, 'r', [0, 2.6, .2], 1.9, 1]]); return { update: (u, t2, cam) => { F(u); L(u, cam); } }; },
  c: [[0, 2.6, 5.0], [0, 1.2, -.8], [0, 2.4, 4.4], [0, 1.2, -.8]], range: 5 }; });
// 7. Suscríbete. Y ahora sí. Vamos allá.
Q(7, (d, a) => { const ts = R0(a, 'suscribete'), tv = R0(a, 'vamos'); return { ...DIA, fov: 32, atores: [YO({ x: -1.0, z: -.3, eyes: [[0, 'look'], [ts, 'happy']], pose: (k, u) => (u > ts ? wave(k, u) : k.pose()) })],
  extra: (c) => { const sb = suscribe(2.4); sb.position.set(.7, 1.8, -1.0); c.add(sb); const b = brillos(c, 14, '#FFE27A'); const q = lw(c, ['¿Y SI…?'], 1.0, [-1.0, 2.3, -.3]); const v = lab(c, ['¡VAMOS ALLÁ!'], 1.4, [-1.0, 2.3, -.3], ROSA); return { update: (u, t, cam) => { pop(q, u, .2, tv - .2, cam); pop(v, u, tv - .2, 99, cam); const k2 = smooth(ts - .3, ts, u) * (1 - smooth(tv - .4, tv, u)); sb.scale.setScalar(Math.max(.01, k2)); sb.rotation.z = u > ts + .6 && u < ts + 1.6 ? Math.sin(u * 40) * .05 : 0; b(u, [.7, 1.8, -.9, 1.1], k2); } }; },
  c: [[0, 1.7, 3.8], [0, 1.5, -.6], [0, 1.65, 3.2], [0, 1.5, -.6]], range: 3 }; });
// 8. 10:00
HORA(8, 10, '10:00', 'SÁBADO');
// 9. Llevas una hora delante del armario. Te pruebas cinco camisetas. Ninguna te convence.
Q(9, (d, a) => { const tc = R0(a, 'cinco'), tn = R0(a, 'ninguna'); return { ...DIA, fov: 32, atores: [YO({ x: -.6, z: -.6, eyes: [[0, 'look'], [tn, 'flat']], pose: (k, u) => (u > tc && u < tn ? k.pose({ armL: [12, 8], armR: [130 + Math.sin(u * 9) * 20, 40] }) : k.pose({ armL: [60, 70], armR: [60, 70], head: 10 })) })],
  extra: (c) => { armario(c, .9, -1.6); const T = [0, 1, 2, 3, 4].map((i) => { const m = camiseta(c, BCOL[i], .5); return m; }); const n = contador(c, [1.0, 2.6, -1.2], 1.2, (u) => `CAMISETA ${Math.min(5, Math.max(1, Math.floor((u - tc) * 1.6) + 1))}/5`, { w: 700, h: 170, size: 90 }); const t0 = lw(c, ['1 HORA DELANTE DEL ARMARIO'], 2.2, [0, 2.6, -1.0]); const t1 = lab(c, ['NINGUNA TE CONVENCE'], 1.9, [0, 2.6, -1.0], RED); return { update: (u, tt, cam) => { T.forEach((m, i) => { const f = clamp((u - tc - i * .62) / .9, 0, 1); m.visible = f > 0; m.position.set(lerp(-.2, -2.2 + i * .45, f), lerp(1.4, .15 + i * .03, f) + Math.sin(f * Math.PI) * 1.0, lerp(-.4, .4, f)); m.rotation.z = f * 6; pointer(m, cam); }); n.userData.upd(u); n.visible = u > tc && u < tn; pop(t0, u, .1, tc - .1, cam); pop(t1, u, tn, 99, cam); } }; },
  c: [[-.3, 1.7, 3.6], [-.3, 1.3, -.8], [-.3, 1.65, 3.1], [-.3, 1.3, -.8]], range: 4 }; });
// 10. Y luego está el regalo. ¿Qué le regalas…? Un libro: demasiado serio. Bombones: demasiado romántico.
Q(10, (d, a) => { const tq = R0(a, 'que'), tl = R0(a, 'libro'), tb = R0(a, 'bombones'); return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: -1.5, z: -.3, eyes: [[0, 'look'], [tl, 'flat'], [tb + .8, 'sad']], pose: (k) => k.pose({ armL: [12, 8], armR: [110, 120], head: 10 }) })],
  extra: (c) => { const lb = libroP(c); lb.position.set(.2, 1.4, -.4); const bb = bombones(c); bb.position.set(1.5, 1.35, -.4); bb.rotation.x = .9; const p = piensa(c, ['¿QUÉ LE REGALO', 'SIN QUE SE NOTE?'], 1.9, [-.7, 2.5, -.5]); const L = SEQ(c, a, [[['EL REGALO'], 0, 'y', [.5, 2.4, -.4], 1.1], [['DEMASIADO SERIO'], tl + .4, 'r', [.2, .7, -.2], 1.3, 1]]); const t2 = lab(c, ['DEMASIADO ROMÁNTICO'], 1.5, [1.5, .7, -.2], PINK); return { update: (u, tt, cam) => { pop(p, u, tq - .2, tl - .2, cam); lb.visible = u > tl; lb.rotation.y = Math.sin(u) * .3; bb.visible = u > tb; L(u, cam); pop(t2, u, tb + .4, 99, cam); } }; },
  c: [[0, 1.6, 4.2], [0, 1.6, -.4], [0, 1.6, 3.7], [0, 1.6, -.4]], range: 3 }; });
// 11. Al final eliges unos auriculares con orejas de gato.
Q(11, (d, a) => { const ta = R0(a, 'auriculares'); return { amb: 'gris', fov: 28, k: 1, atores: [],
  extra: (c) => { const g = auris(c, 2.8); g.position.set(0, 1.5, -.4); const b = brillos(c, 16, '#FFB0D0'); const t = lab(c, ['AURICULARES DE GATO'], 2.0, [0, 2.45, -.3], PINK); return { update: (u, tt, cam) => { g.rotation.y = Math.sin(u * 1.2) * .5; g.scale.setScalar(2.8 * smooth(ta - .4, ta + .2, u) + .001); b(u, [0, 1.5, -.3, 1.3], smooth(ta, ta + .3, u)); pop(t, u, ta, 99, cam); } }; },
  c: [[0, 1.6, 4.0], [0, 1.6, -.4], [0, 1.6, 3.4], [0, 1.6, -.4]], range: 3, look: { bloom: .5 } }; });
// 12. Porque una vez, en clase, dijo que le encantaban los gatos. Y tú te acuerdas de todo lo que dice.
Q(12, (d, a) => { const td = R0(a, 'dijo'), ta = R0(a, 'acuerdas'); return { ...AULA(), atores: [ELA({ x: .7, z: .4, eyes: [[0, 'happy']], pose: (k, u) => (u > td && u < ta ? talkP(k, u) : k.pose()) }), YO({ x: -.7, z: .6, eyes: [[0, 'look'], [td + .5, 'heart']], pose: (k) => k.pose({ head: 8 }) })],
  extra: (c) => { pupitres(c, [-.7, .7], 1.2); const g = hab(c, ['¡ME ENCANTAN', 'LOS GATOS!'], 1.3, [1.1, 2.2, .3], 60); const t = lp(c, ['TE ACUERDAS DE TODO'], 1.8, [0, 2.45, .4]); const t0 = lw(c, ['UNA VEZ, EN CLASE'], 1.6, [0, 2.45, .4]); return { update: (u, tt, cam) => { pop(t0, u, .1, td - .2, cam); pop(g, u, td, ta - .2, cam); pop(t, u, ta - .1, 99, cam); } }; },
  c: [[0, 1.7, 4.2], [0, 1.5, -.2], [0, 1.65, 3.7], [0, 1.5, -.2]], range: 4, look: MEMO }; });
// 13. 16:00
HORA(13, 16, '16:00', 'SÁBADO');
// 14. Le escribes a tu mejor amigo: "¿Vas al cumple?" "¿Qué cumple?" Qué raro.
Q(14, (d, a) => { const tv = R0(a, 'vas'), tc = R0(a, 'contesta'), tr = R0(a, 'raro'); return { amb: 'gris', fov: 28, k: 1, atores: [],
  extra: (c) => { const ch = chat(c, [-.4, 1.5, -.5], 1.15, [['r', '¿Vas al cumple?', tv - .2], ['l', '¿Qué cumple?', tc + .4]], { hora: '16:02', name: 'MI MEJOR AMIGO' }); const t = lab(c, ['¿QUÉ RARO…?'], 1.3, [1.15, 2.2, -.3], { bg: '#1E2230', fg: '#F2C14E' }); return { update: (u, tt, cam) => { ch.userData.upd(u); pop(t, u, tr - .3, 99, cam); } }; },
  c: [[.2, 1.5, 4.3], [.2, 1.5, -.5], [.2, 1.5, 3.8], [.2, 1.5, -.5]], range: 2, blur: 4 }; });
// 15. Preguntas en el grupo de clase. Nadie dice nada. Bueno, piensas. Seguro que lo ha organizado por privado.
Q(15, (d, a) => { const tn = R0(a, 'nadie'), tp = R0(a, 'privado'); return { amb: 'gris', fov: 28, k: 1, atores: [],
  extra: (c) => { const ch = chat(c, [-.4, 1.5, -.5], 1.15, [['r', '¿Alguien va al cumple?', .2]], { hora: '16:05', name: 'GRUPO DE CLASE' }); const n = contador(c, [1.15, 1.7, -.3], .9, (u) => '.'.repeat(1 + Math.floor(u * 2) % 3), { w: 400, h: 200, size: 140 }); const L = SEQ(c, a, [[['SILENCIO'], tn, 'w', [1.15, 2.3, -.3], 1.1], [['SERÁ POR PRIVADO…'], R0(a, 'bueno'), 'y', [1.15, 2.3, -.3], 1.6, 1]]); return { update: (u, tt, cam) => { ch.userData.upd(u); n.userData.upd(u); n.visible = u > tn; L(u, cam); } }; },
  c: [[.2, 1.5, 4.3], [.2, 1.5, -.5], [.2, 1.5, 3.8], [.2, 1.5, -.5]], range: 2, blur: 4 }; });
// 16. 17:30
HORA(16, 17, '17:30', 'DE CAMINO');
// 17. Vas andando hacia su casa con el regalo debajo del brazo.
Q(17, (d, a) => ({ amb: 'barrio', fov: 32, atores: [YO({ x: 0, z: -.3, eyes: [[0, 'happy']], move: (u) => [lerp(-1.4, .6, u / Math.max(d, 1)), 0, -.3], pose: (k, u) => { k.walk(u * 1.8); k.pose({ armL: [12 + Math.sin(u * 5) * 10, 8], armR: [55, 75] }); } })],
  extra: (c, s, A) => { const r = regalo(c, '#43C4B4', .32); const t = lw(c, ['CON EL REGALO'], 1.4, [0, 2.4, -.3]); return { update: (u, tt, cam) => { const p = hand(A[0]); r.position.set(p.x - .05, p.y - .2, p.z + .12); t.position.x = A[0].root.position.x; pop(t, u, .3, 99, cam); } }; },
  c: [[-.4, 1.6, 3.4], [-.4, 1.3, -.3], [.6, 1.6, 3.2], [.6, 1.3, -.3]], range: 3.5, look: { bloom: .4 } }));
// 18. Vas ensayando. "Feliz cumpleaños." No, demasiado serio. "¡Felicidades!" Demasiado alegre. "Hola, feliz cumple." Mejor.
Q(18, (d, a) => { const ts = R0(a, 'serio'), tf = R0(a, 'felicidades'), ta = R0(a, 'alegre'), th = R0(a, 'hola'), tm = R0(a, 'mejor'); return { amb: 'barrio', fov: 32, atores: [YO({ x: -.4, z: -.3, eyes: [[0, 'look'], [ts, 'flat'], [tf, 'happy'], [ta, 'flat'], [th, 'look'], [tm, 'happy']], move: (u) => [lerp(-.8, .2, u / Math.max(d, 1)), 0, -.3], pose: (k, u) => (u > tf && u < ta ? k.pose({ armL: [150, 40], armR: [150, 40], bob: Math.abs(Math.sin(u * 9)) * .05 }) : talkP(k, u)) })],
  extra: (c, s, A) => { const r = regalo(c, '#43C4B4', .32); const G = [hab(c, ['FELIZ CUMPLEAÑOS.'], 1.5, [-.3, 2.35, -.3], 60), hab(c, ['¡FELICIDADES!'], 1.4, [-.3, 2.35, -.3], 64), hab(c, ['HOLA, FELIZ CUMPLE.'], 1.6, [-.3, 2.35, -.3], 58)]; const R1 = lab(c, ['DEMASIADO SERIO'], 1.3, [1.3, 1.6, -.2], RED), R2 = lab(c, ['DEMASIADO ALEGRE'], 1.3, [1.3, 1.6, -.2], RED), R3 = lab(c, ['MEJOR'], .9, [1.3, 1.6, -.2], VERDE); return { update: (u, tt, cam) => { const p = hand(A[0]); r.position.set(p.x - .05, p.y - .2, p.z + .12); r.visible = !(u > tf && u < ta); pop(G[0], u, .1, tf - .2, cam); pop(G[1], u, tf - .2, th - .2, cam); pop(G[2], u, th - .2, 99, cam); pop(R1, u, ts - .3, tf - .2, cam); pop(R2, u, ta - .3, th - .2, cam); pop(R3, u, tm - .2, 99, cam); } }; },
  c: [[0, 1.6, 3.6], [0, 1.45, -.3], [0, 1.6, 3.2], [0, 1.45, -.3]], range: 3.5, look: { bloom: .4 } }; });
// 19. Lo repites tantas veces en voz alta que una señora que pasea a su perro se te queda mirando.
Q(19, (d, a) => { const ts = R0(a, 'senora'), tq = R0(a, 'mirando'); return { amb: 'barrio', fov: 32, atores: [YO({ x: -.9, z: -.3, eyes: [[0, 'happy'], [tq, 'wide']], pose: (k, u) => (u < tq ? talkP(k, u) : k.pose({ head: -12 })) }), SENORA({ x: 1.0, z: -.6, eyes: [[0, 'lookl'], [tq - .5, 'flat']], move: (u) => [lerp(3.2, 1.0, smooth(ts - .6, tq - .3, u)), 0, -.6], pose: (k, u) => (u < tq - .3 ? k.walk(u * 1.6) : k.pose({ armL: [12, 8], armR: [40, 20] })) }), { tipo: 'perro', s: .7, x: 1.7, z: -.4, eyes: [[0, 'open']], move: (u) => [lerp(3.9, 1.7, smooth(ts - .6, tq - .3, u)), 0, -.4] }],
  extra: (c) => { const g = hab(c, ['HOLA, FELIZ CUMPLE.', 'HOLA, FELIZ CUMPLE.', 'HOLA, FELIZ…'], 1.6, [-1.0, 2.35, -.3], 50); const t = lab(c, ['¬ ¬'], .55, [1.0, 2.3, -.6], { bg: '#FBF7EC', fg: '#2A2A34', size: 90, w: 300 }); const t0 = lw(c, ['EN VOZ ALTA'], 1.2, [-.9, .5, .3]); return { update: (u, tt, cam) => { pop(g, u, .1, tq - .3, cam); pop(t0, u, R0(a, 'voz') - .2, 99, cam); pop(t, u, tq - .2, 99, cam); } }; },
  c: [[0, 1.6, 4.0], [0, 1.4, -.4], [0, 1.6, 3.6], [0, 1.4, -.4]], range: 3.5, look: { bloom: .4 } }; });
// 20. 18:00
HORA(20, 18, '18:00', 'LA FIESTA');
// 21. Llamas al timbre. Abre su madre. Sonríe. "¡Pasa, pasa! ¡Eres el primero!"
Q(21, (d, a) => { const tb = R0(a, 'abre'), tp = R0(a, 'pasa'); return { amb: 'barrio', fov: 30, atores: [YO({ x: -.5, z: -.6, eyes: [[0, 'look'], [tp, 'happy']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u < .8 ? 100 : 55, u < .8 ? 30 : 75], head: -10 }) }), MADRE({ x: .3, z: -1.2, eyes: [[0, 'happy']], move: (u) => [.3, 0, lerp(-1.7, -1.2, smooth(tb, tb + .5, u))], pose: (k, u) => (u > tp ? k.pose({ armL: [12, 8], armR: [100 + Math.sin(u * 8) * 25, 60] }) : k.pose()) })],
  extra: (c, s, A) => { portal(c); calida(c, [0, 2.6, -.5], 3, 5); const r = regalo(c, '#43C4B4', .32); const d0 = lab(c, ['DING DONG'], 1.1, [.4, 2.65, -1.0], { bg: '#F2C14E', fg: '#2A2A34' }); const g = hab(c, ['¡PASA, PASA!', '¡ERES EL PRIMERO!'], 1.5, [1.1, 2.3, -1.1], 54); return { update: (u, tt, cam) => { const p = hand(A[0]); r.position.set(p.x - .05, p.y - .2, p.z + .12); r.visible = u > .8; pop(d0, u, .05, tb - .1, cam); pop(g, u, tp - .2, 99, cam); } }; },
  c: [[0, 1.6, 2.9], [0, 1.5, -.9], [0, 1.6, 2.5], [0, 1.5, -.9]], range: 3, look: { bloom: .4 } }; });
// 22. El salón está precioso. Globos. Guirnaldas. Una tarta enorme. Una mesa llena de patatas, sándwiches y refrescos.
Q(22, (d, a) => { const tg = R0(a, 'globos'), tu = R0(a, 'guirnaldas'), tt = R0(a, 'tarta'), tp = R0(a, 'patatas'); return { ...SALON, fov: 34, atores: [],
  extra: (c) => { const F = FIESTA(c); const L = SEQ(c, a, [[['¡QUÉ PRECIOSO!'], 0, 'w', [0, 2.2, -1.2], 1.5], [['GLOBOS'], tg, 'p', [-2.0, 1.9, -2.0], 1.0], [['GUIRNALDAS'], tu, 'y', [0, 2.6, -2.4], 1.3], [['UNA TARTA ENORME'], tt, 'w', [1.7, 1.7, -1.8], 1.5], [['PATATAS · SÁNDWICHES · REFRESCOS'], tp, 'y', [1.3, 1.6, -1.6], 2.0, 1]]); return { update: (u, t2, cam) => { F(u); L(u, cam); } }; },
  cam: [[0, [0, 2.2, 4.0], [0, 1.6, -1.6]], [R0(a, 'globos'), [-1.4, 2.2, 3.0], [-1.6, 2.0, -2.2]], [R0(a, 'guirnaldas'), [0, 2.6, 2.6], [0, 2.8, -2.6]], [R0(a, 'tarta'), [1.6, 1.8, 1.4], [1.6, 1.1, -2.1]], [d, [1.2, 1.7, 1.2], [1.2, 1.0, -2.1]]], f: [[0, 5.6], [d, 3.4]], range: 5 }; });
// 23. Y sillas. Muchas sillas. Unas veinte.
Q(23, (d, a) => { const tv = R0(a, 'veinte'); return { ...SALON, fov: 38, atores: [],
  extra: (c) => { const F = FIESTA(c); const n = contador(c, [0, 2.5, -.6], 1.6, (u) => `${Math.max(1, Math.round(20 * smooth(.2, tv + .2, u)))} SILLAS`, { w: 800, h: 200, size: 110 }); return { update: (u, t2, cam) => { F(u); n.userData.upd(u); } }; },
  c: [[0, 4.2, 5.2], [0, .6, -.6], [0, 3.8, 4.6], [0, .6, -.6]], range: 6 }; });
// 24. Y ella, en el sofá, con un vestido nuevo, mirando el móvil. Te ve. Sonríe. "¡Has venido!"
Q(24, (d, a) => { const tv = R0(a, 'vestido'), tt = R0(a, 've'), ts = R0(a, 'sonrie'), th = R0(a, 'has'); return { ...SALON, fov: 32, atores: [ELP({ x: -1.0, ...SOFF, eyes: [[0, 'down'], [tt, 'look'], [ts, 'happy']], pose: (k, u) => { sitP(k); k.pose({ armL: [12, 8], armR: [u < tt ? 60 : 12, 75], head: u < tt ? -12 : 0 }); } }), YO({ x: .8, z: -1.0, eyes: [[0, 'look'], [ts, 'happy']], pose: (k) => k.pose({ armL: [12, 8], armR: [55, 75], head: 10 }) })],
  extra: (c, s, A) => { const F = FIESTA(c); const ph = movil([''], { hora: '18:01' }); ph.scale.setScalar(.25); c.add(ph); const r = regalo(c, '#43C4B4', .32); const t = lw(c, ['VESTIDO NUEVO'], 1.3, [-1.0, 1.95, -2.0]); const g = hab(c, ['¡HAS VENIDO!'], 1.2, [-1.6, 2.15, -1.8], 64); return { update: (u, t2, cam) => { F(u); naMao(ph, A[0], .02); ph.visible = u < tt; pointer(ph, cam); const p = hand(A[1]); r.position.set(p.x - .05, p.y - .2, p.z + .12); pop(t, u, tv - .1, tt - .2, cam); pop(g, u, th - .2, 99, cam); } }; },
  c: [[0, 1.6, 3.0], [-.2, 1.2, -1.6], [0, 1.55, 2.6], [-.2, 1.2, -1.6]], range: 4 }; });
// 25. 18:30
HORA(25, 18, '18:30', 'SEGUÍS SIENDO DOS');
// 26. Seguís siendo dos. Su madre se asoma desde la cocina. Vuelve a entrar.
Q(26, (d, a) => { const ta = R0(a, 'asoma'), tv = R0(a, 'vuelve'); return { ...SALON, fov: 36, atores: [ELP({ x: -.5, z: -.6, eyes: [[0, 'look']] }), YO({ x: .3, z: -.4, eyes: [[0, 'lookl']], pose: (k) => k.pose({ armL: [12, 8], armR: [55, 75] }) }), MADRE({ x: 2.4, z: -2.6, eyes: [[0, 'lookl']], move: (u) => [lerp(4.2, 2.4, smooth(ta, ta + .6, u) * (1 - smooth(tv, tv + .6, u))), 0, -2.6], pose: (k) => k.pose({ lean: -8 }) })],
  extra: (c, s, A) => { const F = FIESTA(c); const r = regalo(c, '#43C4B4', .32); r.position.set(.0, .85, -1.8); const n = lab(c, ['2 PERSONAS · 20 SILLAS'], 2.0, [0, 2.5, -.6], { bg: '#1E2230', fg: '#F2C14E' }); return { update: (u, t2, cam) => { F(u); pop(n, u, .1, 99, cam); } }; },
  c: [[0, 2.2, 4.6], [.3, 1.2, -1.2], [0, 2.1, 4.1], [.3, 1.2, -1.2]], range: 5 }; });
// 27. Ella mira el móvil otra vez. Y otra. Y tú intentas hacer como si todo fuera normal. Hablas del tiempo. Del instituto. De la tarta. De cualquier cosa.
Qs(27, ['intentas'], [
  (d, a) => { const t1 = R0(a, 'otra'), t2 = R0(a, 'otra', t1 + .2); return { ...SALON, fov: 30, atores: [ELP({ x: -1.0, ...SOFF, eyes: [[0, 'down'], [t1 + .6, 'look'], [t1 + 1, 'down']], pose: (k, u) => { sitP(k); k.pose({ armL: [12, 8], armR: [60, 75], head: -10 }); } })],
    extra: (c, s, A) => { FIESTA(c); const ph = movil([''], { hora: '18:34' }); ph.scale.setScalar(.25); c.add(ph); const L = SEQ(c, a, [[['OTRA VEZ'], t1, 'w', [-1.0, 1.95, -2.0], 1.0], [['Y OTRA'], t2, 'y', [-1.0, 1.95, -2.0], .9, 1]]); return { update: (u, tt, cam) => { naMao(ph, A[0], .02); pointer(ph, cam); L(u, cam); } }; },
    c: [[-.8, 1.4, 1.0], [-1.0, 1.15, -2.2], [-.8, 1.35, .7], [-1.0, 1.15, -2.2]], range: 3 }; },
  (d, a) => { const tt = R0(a, 'tiempo'), ti = R0(a, 'instituto'), tr = R0(a, 'tarta'), tc = R0(a, 'cualquier'); return { ...SALON, fov: 32, atores: [ELP({ x: -1.0, ...SOFF, eyes: [[0, 'look']], pose: (k) => { sitP(k); k.pose({ armL: [12, 8], armR: [60, 75] }); } }), YO({ x: .3, z: -1.3, eyes: [[0, 'happy'], [tc, 'flat']], pose: talkP })],
    extra: (c) => { const F = FIESTA(c); const t0 = lw(c, ['COMO SI TODO FUERA NORMAL'], 2.2, [-.3, 2.5, -1.3]); const G = [hab(c, ['¡QUÉ CALOR HACE, ¿EH?'], 1.5, [.9, 2.15, -1.3], 52), hab(c, ['¿Y EL INSTI, QUÉ?'], 1.4, [.9, 2.15, -1.3], 56), hab(c, ['LA TARTA… QUÉ REDONDA'], 1.5, [.9, 2.15, -1.3], 52), hab(c, ['…'], .8, [.9, 2.15, -1.3], 90)]; return { update: (u, t2, cam) => { F(u); pop(t0, u, .1, tt - .3, cam); pop(G[0], u, tt - .2, ti - .2, cam); pop(G[1], u, ti - .2, tr - .2, cam); pop(G[2], u, tr - .2, tc - .2, cam); pop(G[3], u, tc - .2, 99, cam); } }; },
    c: [[0, 1.6, 3.0], [-.3, 1.3, -1.6], [0, 1.55, 2.6], [-.3, 1.3, -1.6]], range: 4 }; },
]);
// 28. 19:00
HORA(28, 19, '19:00', 'NADIE MÁS');
// 29. No ha llegado nadie más. Ella deja el móvil en la mesa y dice, muy bajito: "No va a venir nadie más, ¿verdad?"
Qs(29, ['deja'], [
  (d, a) => ({ ...SALON, fov: 38, atores: [ELP({ x: -.5, z: -.6, eyes: [[0, 'sad']] }), YO({ x: .3, z: -.4, eyes: [[0, 'flat']] })],
    extra: (c) => { const F = FIESTA(c); const t = lab(c, ['NADIE MÁS'], 1.3, [0, 2.5, -.6], RED); return { update: (u, t2, cam) => { F(u); pop(t, u, .2, 99, cam); } }; },
    c: [[0, 3.6, 5.4], [0, .8, -.6], [0, 3.3, 4.9], [0, .8, -.6]], range: 6 }),
  (d, a) => { const tn = R0(a, 'va'); return { ...SALON, fov: 30, atores: [ELP({ x: .4, z: -1.3, eyes: [[0, 'down'], [tn, 'sad']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u < tn - .5 ? 55 : 12, 40], head: -10 }) }), YO({ x: -.5, z: -1.0, eyes: [[0, 'sad']] })],
    extra: (c) => { FIESTA(c); const g = hab(c, ['NO VA A VENIR NADIE MÁS,', '¿VERDAD?'], 1.4, [.9, 2.15, -1.3], 46); const t = lw(c, ['MUY BAJITO'], 1.0, [.4, .9, -.8]); return { update: (u, t2, cam) => { pop(t, u, R0(a, 'bajito') - .2, tn - .2, cam); pop(g, u, tn - .2, 99, cam); } }; },
    c: [[0, 1.6, 2.4], [0, 1.4, -1.2], [0, 1.55, 2.1], [0, 1.4, -1.2]], range: 3 }; },
]);
// 30. Y tú sientes que todo el mundo se está riendo de esto. Que el lunes toda la clase lo sabrá. Que es lo más vergonzoso…
Q(30, (d, a) => { const tr = R0(a, 'riendo'), tl = R0(a, 'lunes'), tv = R0(a, 'vergonzoso'); const P = [[-2.2, -1.2], [-1.4, -1.8], [1.4, -1.8], [2.2, -1.2], [-2.8, -.4], [2.8, -.4]]; return { amb: 'gris', fov: 34, k: 1, atores: [YO({ x: 0, z: -.2, eyes: [[0, 'sad'], [tv, 'shut']], pose: (k, u) => k.pose({ armL: [20, 10], armR: [20, 10], head: -10, bob: -.02 }) }), ...P.map(([x, z], i) => EXTRA(i, { x, z, eyes: [[0, 'happy']], pose: (k, u) => (u > tr - .3 + i * .3 ? k.pose({ armL: [12, 8], armR: [95, 0], bob: Math.abs(Math.sin(u * 10 + i)) * .04 }) : k.pose()) }))],
  extra: (c, s, A) => { const J = P.map(([x, z], i) => { const m = lab(c, ['JA JA'], .6, [x, 2.2, z + .2], { bg: '#FBF7EC', fg: '#2A2A34', size: 80, w: 330 }); return m; }); const L = SEQ(c, a, [[['TODO EL MUNDO SE RÍE'], tr, 'w', [0, 2.75, -.3], 2.1], [['EL LUNES LO SABRÁ TODA LA CLASE'], tl, 'y', [0, 2.75, -.3], 2.6], [['LO MÁS VERGONZOSO DEL MUNDO'], tv - .3, 'r', [0, 2.75, -.3], 2.6, 1]]); return { update: (u, tt, cam) => { J.forEach((m, i) => pop(m, u, tr + i * .3, 99, cam)); L(u, cam); shake(cam, u > tv - .3 && u < tv + .3 ? .02 : 0, u); } }; },
  c: [[0, 1.8, 5.0], [0, 1.4, -.8], [0, 1.7, 4.2], [0, 1.4, -.8]], range: 4, look: { vig: .65 } }; });
// 31. Pero aquí la ciencia tiene algo que decirte. En el año 2000, Thomas Gilovich, Universidad Cornell, un experimento muy curioso.
Q(31, (d, a) => { const tc = R0(a, 'ciencia'), te = R0(a, 'experimento'); return { amb: 'gris', fov: 30, k: 1, atores: [PROF({ x: .9, z: -.4, eyes: [[0, 'look'], [te, 'happy']], pose: (k, u) => (u > te ? talkP(k, u) : hold(k)) })],
  extra: (c) => { const L = SEQ(c, a, [[['LA CIENCIA'], tc - .2, 'y', [-.9, 2.2, -.3], 1.3], [['THOMAS GILOVICH'], R0(a, 'thomas'), 'w', [-.9, 2.2, -.3], 1.6], [['UN EXPERIMENTO MUY CURIOSO'], te, 'p', [-.9, 2.2, -.3], 2.2, 1]]); const b = brillos(c, 10, '#FFE27A'); return { update: (u, tt, cam) => { L(u, cam); b(u, [.9, 1.6, -.3, .9]); } }; },
  c: [[0, 1.6, 4.0], [0, 1.5, -.4], [0, 1.6, 3.5], [0, 1.5, -.4]], range: 3 }; });
// 32. Pidió a unos estudiantes que se pusieran una camiseta muy vergonzosa… y que entraran así en una sala llena de gente.
Qs(32, ['entraran'], [
  (d, a) => { const tc = R0(a, 'camiseta'); return { amb: 'gris', fov: 30, k: 1, atores: [EXTRA(1, { x: 0, z: -.3, eyes: [[0, 'look'], [tc + .4, 'wide']], pose: (k, u) => { if (u > tc) cantOn(k); k.pose({ armL: [12, 8], armR: [12, 8] }); } }), PROF({ x: -1.5, z: -.5, eyes: [[0, 'happy']], pose: (k) => k.pose({ armL: [12, 8], armR: [80, 20] }) })],
    extra: (c) => { const L = SEQ(c, a, [[['UNA CAMISETA MUY VERGONZOSA'], tc, 'r', [0, 2.4, -.2], 2.4], [['UN CANTANTE PASADO DE MODA'], R0(a, 'cantante'), 'w', [0, 2.4, -.2], 2.3, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
    c: [[0, 1.5, 3.2], [-.3, 1.3, -.3], [0, 1.45, 2.6], [-.1, 1.2, -.3]], range: 3 }; },
  (d, a) => { const P = [[-2.0, -1.4], [-1.2, -1.8], [-.4, -2.0], [.6, -1.9], [1.5, -1.6], [2.3, -1.2], [-2.6, -.6], [2.8, -.5]]; return { ...AULA(), atores: [EXTRA(1, { x: 0, z: .4, eyes: [[0, 'wide']], move: (u) => [lerp(-3.6, 0, smooth(0, 2.2, u)), 0, .4], pose: (k, u) => { cantOn(k); if (u < 2.2) k.walk(u * 2); else k.pose({ head: -8 }); } }), ...P.map(([x, z], i) => EXTRA(i + 2, { x, z, eyes: [[0, i % 2 ? 'look' : 'lookl']] }))],
    extra: (c) => { const t = lw(c, ['UNA SALA LLENA DE GENTE'], 2.2, [0, 2.7, -.6]); return { update: (u, tt, cam) => pop(t, u, R0(a, 'sala') - .2, 99, cam) }; },
    c: [[0, 2.0, 4.8], [0, 1.3, -1.0], [0, 1.95, 4.3], [0, 1.3, -1.0]], range: 4 }; },
]);
// 33. Los estudiantes creían que casi la mitad de la sala se fijaría en la camiseta.
Q(33, (d, a) => { const tm = R0(a, 'mitad'); return { amb: 'gris', fov: 30, k: 1, atores: [EXTRA(1, { x: -1.4, z: -.3, eyes: [[0, 'sad']], pose: (k) => { cantOn(k); k.pose({ armL: [12, 8], armR: [12, 8], head: -8 }); } })],
  extra: (c) => { const p = piensa(c, ['¡ME MIRA', 'MEDIA SALA!'], 1.5, [-.6, 2.45, -.4]); const b = barras(c, [['CREÍAN', .5, '#E8667F']], 1.9, [.9, 1.45, -.5], { title: 'SE FIJARÍAN' }); const t = lab(c, ['LA MITAD'], 1.0, [.9, 2.3, -.3], RED); return { update: (u, tt, cam) => { pop(p, u, .2, 99, cam); pop(b, u, tm - .5, 99, cam); pop(t, u, tm - .2, 99, cam); } }; },
  c: [[-.2, 1.6, 4.0], [-.2, 1.6, -.4], [-.2, 1.6, 3.5], [-.2, 1.6, -.4]], range: 3 }; });
// 34. ¿Cuántos se fijaron de verdad? Más o menos uno de cada cuatro.
Q(34, (d, a) => { const tu = R0(a, 'uno'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const b1 = barras(c, [['CREÍAN', .5, '#E8667F'], ['DE VERDAD', .02, '#43C4B4']], 2.4, [0, 1.55, -.5], { title: 'SE FIJARON' }); const b2 = barras(c, [['CREÍAN', .5, '#E8667F'], ['DE VERDAD', .25, '#43C4B4']], 2.4, [0, 1.55, -.49], { title: 'SE FIJARON' }); const q = lw(c, ['¿DE VERDAD?'], 1.2, [0, 2.6, -.4]); const t = lab(c, ['1 DE CADA 4'], 1.2, [0, 2.6, -.4], ORO); return { update: (u, tt, cam) => { pop(b1, u, .1, tu - .2, cam); pop(b2, u, tu - .2, 99, cam); pop(q, u, .1, tu - .2, cam); pop(t, u, tu - .2, 99, cam); } }; },
  c: [[0, 1.7, 3.9], [0, 1.7, -.5], [0, 1.7, 3.4], [0, 1.7, -.5]], range: 3 }; });
// 35. Lo llamó el efecto foco: creemos que todo el mundo nos mira. Pero casi nadie se da cuenta. Cada uno está demasiado ocupado pensando en sí mismo.
Q(35, (d, a) => { const tf = R0(a, 'foco'), tn = R0(a, 'casi'), tc = R0(a, 'cada'); const P = [[-2.0, -1.0], [-1.1, -1.6], [1.1, -1.6], [2.0, -1.0]]; const TH = ['¿Y MI PELO?', 'MIS DEBERES…', '¿HAY PIZZA?', 'MI MÓVIL…']; return { amb: 'gris', fov: 34, k: 1, atores: [EXTRA(1, { x: 0, z: -.2, eyes: [[0, 'wide'], [tc, 'look']], pose: (k) => { cantOn(k); k.pose(); } }), ...P.map(([x, z], i) => EXTRA(i + 3, { x, z, eyes: [[0, 'look'], [tn, i % 2 ? 'lookl' : 'look'], [tc, 'flat']], pose: (k) => k.pose({ head: i % 2 ? 15 : -15 }) }))],
  extra: (c) => { const [sp, gl0] = foco(c, 0, -.2); const L = SEQ(c, a, [[['EL EFECTO FOCO'], tf - .2, 'y', [0, 2.8, -.4], 1.6], [['CREES QUE TODOS TE MIRAN'], R0(a, 'creemos'), 'w', [0, 2.8, -.4], 2.2], [['CASI NADIE SE DA CUENTA'], tn, 'p', [0, 2.8, -.4], 2.2, 1]]); const T = P.map(([x, z], i) => piensa(c, [TH[i]], 1.0, [x, 2.1, z + .1], { size: 54 })); return { update: (u, tt, cam) => { L(u, cam); T.forEach((m, i) => pop(m, u, tc + i * .35, 99, cam)); } }; },
  c: [[0, 1.8, 5.0], [0, 1.4, -.8], [0, 1.75, 4.5], [0, 1.4, -.8]], range: 4, look: { vig: .6 } }; });
// ===================== CENAS 36–74 =====================
const SUELO = { y: -.78 };
const CSU = [[0, 1.1, 2.6], [0, .75, -.6], [0, 1.05, 2.2], [0, .75, -.6]];
const platito = (c, x, z) => { const p = new THREE.Mesh(new THREE.CylinderGeometry(.14, .12, .03, 18), std('#FBF7EC')); p.position.set(x, .02, z); c.add(p); const t = box(.12, .08, .1, std('#F6D8E4'), x, .07, z); c.add(t); c.add(box(.12, .02, .1, std('#E8667F'), x, .12, z)); };
// en el suelo, comiendo tarta. o.cerca: 0..1 se acercan
const SUELOS = (yo = {}, ella = {}, cerca = 0) => [ELP({ x: -.5 + cerca * .15, z: -.6, ...SUELO, eyes: [[0, 'happy']], ...ella, pose: (k, u) => { sitP(k); (ella.p2 || ((kk) => kk.pose({ armL: [12, 8], armR: [40, 60] })))(k, u); } }), YO({ x: .5 - cerca * .15, z: -.6, ...SUELO, eyes: [[0, 'happy']], ...yo, pose: (k, u) => { sitP(k); (yo.p2 || ((kk) => kk.pose({ armL: [40, 60], armR: [12, 8] })))(k, u); } })];
const SUELOX = (c) => { const F = FIESTA(c, { globos: 20 }); platito(c, -.15, -.25); platito(c, .2, -.3); return F; };
// 36. Así que, de todos los que no han venido, ¿cuántos van a estar pensando en esto el lunes? Seguramente casi ninguno.
Q(36, (d, a) => { const tn = R0(a, 'ninguno'); return { ...SALON, fov: 36, atores: [ELP({ x: -.5, z: -.6, eyes: [[0, 'sad']] }), YO({ x: .3, z: -.4, eyes: [[0, 'look'], [tn, 'happy']] })],
  extra: (c) => { const F = FIESTA(c); const L = SEQ(c, a, [[['¿CUÁNTOS PENSARÁN EN ESTO EL LUNES?'], R0(a, 'cuantos'), 'w', [0, 2.55, -.5], 3.0], [['CASI NINGUNO'], tn - .2, 'y', [0, 2.55, -.5], 1.4, 1]]); return { update: (u, t2, cam) => { F(u); L(u, cam); } }; },
  c: [[0, 2.3, 4.6], [0, 1.3, -1.0], [0, 2.2, 4.1], [0, 1.3, -1.0]], range: 5 }; });
// 37. 19:15
HORA(37, 19, '19:15', 'DOS OPCIONES');
// 38. Ella se pone a recoger los vasos sin usar. Está a punto de llorar.
Q(38, (d, a) => { const tl = R0(a, 'llorar'); return { ...SALON, fov: 30, atores: [ELP({ x: 1.0, z: -1.4, eyes: [[0, 'down'], [tl - .5, 'sad']], pose: (k, u) => k.pose({ armL: [40 + Math.sin(u * 3) * 15, 50], armR: [40 + Math.cos(u * 3) * 15, 50], head: -12, lean: 6 }) })],
  extra: (c, s, A) => { const F = FIESTA(c); const v = new THREE.Mesh(new THREE.CylinderGeometry(.045, .04, .2, 12), std('#43C4B4')); c.add(v); const L = SEQ(c, a, [[['LOS VASOS SIN USAR'], 'vasos', 'w', [1.0, 2.3, -1.2], 1.7], [['A PUNTO DE LLORAR'], tl - .3, 'p', [1.0, 2.3, -1.2], 1.7, 1]]); const tear = glowSprite('#9FD0FF', .12, 0); c.add(tear); return { update: (u, t2, cam) => { F(u); naMao(v, A[0], -.05); L(u, cam); const f = ((u - tl) * .8) % 1; tear.material.opacity = u > tl ? .9 * (1 - f) : 0; const p = new THREE.Vector3(); A[0].head.getWorldPosition(p); tear.position.set(p.x + .12, p.y - .05 - f * .3, p.z + .3); } }; },
  c: [[.6, 1.6, 1.6], [.9, 1.4, -1.5], [.6, 1.55, 1.3], [.9, 1.4, -1.5]], range: 3 }; });
// 39. Y tú tienes dos opciones. "Bueno, yo me voy, que es tarde." O puedes quedarte.
Q(39, (d, a) => { const tb = R0(a, 'bueno'), tq = R0(a, 'quedarte'); return { amb: 'gris', fov: 32, k: 1, atores: [YO({ x: 0, z: -.2, eyes: [[0, 'look'], [tb, 'lookl'], [tq, 'look']], pose: (k, u) => k.pose({ head: u < tb ? 0 : u < tq ? 20 : -20 }) })],
  extra: (c) => { puertaCasa(c, -1.8, -1.0); const g = globoC(c, '#E8667F'); g.position.set(1.8, 1.9, -.8); const t1 = lab(c, ['IRTE'], .9, [-1.8, 2.5, -.8], RED), t2 = lab(c, ['QUEDARTE'], 1.2, [1.8, 2.5, -.8], VERDE); const h = hab(c, ['BUENO, YO ME VOY,', 'QUE ES TARDE…'], 1.5, [-.6, 2.15, -.3], 50); const t0 = lw(c, ['DOS OPCIONES'], 1.4, [0, 2.75, -.4]); return { update: (u, tt, cam) => { flota(g, u, 0, 1.9); pop(t0, u, .1, tb - .2, cam); pop(h, u, tb - .1, tq - .2, cam); pop(t1, u, .4, 99, cam); pop(t2, u, .7, 99, cam); t1.scale.multiplyScalar(u > tb && u < tq ? 1.15 : 1); t2.scale.multiplyScalar(u > tq ? 1.2 : 1); } }; },
  c: [[0, 1.7, 4.4], [0, 1.6, -.6], [0, 1.65, 3.9], [0, 1.6, -.6]], range: 3 }; });
// 40. Te quedas.
Q(40, (d, a) => ({ ...SALON, fov: 30, atores: [YO({ x: 0, z: -.6, eyes: [[0, 'happy']], pose: (k) => k.pose({ armL: [12, 8], armR: [12, 8], lean: -3 }) })],
  extra: (c) => { FIESTA(c); const t = lab(c, ['TE QUEDAS'], 1.5, [0, 2.3, -.5], VERDE); const b = brillos(c, 10, '#FFE27A'); return { update: (u, tt, cam) => { pop(t, u, .05, 99, cam); b(u, [0, 1.5, -.5, 1.0]); } }; },
  c: [[0, 1.6, 2.6], [0, 1.6, -.6], [0, 1.6, 2.2], [0, 1.6, -.6]], range: 3 }));
// 41. Coges un globo. Le pintas una cara con un rotulador. Le pones un gorro de fiesta.
Q(41, (d, a) => { const tp = R0(a, 'pintas'), tg = R0(a, 'gorro'); return { ...SALON, fov: 30, atores: [YO({ x: -.2, z: -.6, eyes: [[0, 'look']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > tp && u < tg ? 75 + Math.sin(u * 14) * 6 : 50, 30] }) }), ELP({ x: -1.6, z: -1.0, eyes: [[0, 'sad'], [tg, 'look']] })],
  extra: (c) => { FIESTA(c); const g0 = globoC(c, '#E8667F', { hilo: false }), g1 = globoC(c, '#E8667F', { cara: 1, hilo: false }), g2 = globoC(c, '#E8667F', { cara: 1, gorro: '#43C4B4', hilo: false }); const ro = new THREE.Mesh(new THREE.CylinderGeometry(.02, .02, .22, 8), std('#1A1A24')); ro.rotation.z = .8; c.add(ro); const L = SEQ(c, a, [[['COGES UN GLOBO'], 0, 'w', [.3, 2.5, -.5], 1.5], [['LE PINTAS UNA CARA'], tp, 'y', [.3, 2.5, -.5], 1.7], [['Y UN GORRO DE FIESTA'], tg, 'p', [.3, 2.5, -.5], 1.9, 1]]); return { update: (u, tt, cam) => { const ph = u < tp + .8 ? 0 : u < tg ? 1 : 2; [g0, g1, g2].forEach((g, i) => { g.visible = i === ph; g.position.set(.45, 1.45 + Math.sin(u * 2) * .03, -.4); }); ro.visible = u > tp - .2 && u < tg; ro.position.set(.3 + Math.sin(u * 14) * .04, 1.5, -.15); L(u, cam); } }; },
  c: [[0, 1.6, 2.6], [0, 1.45, -.6], [0, 1.6, 2.2], [0, 1.45, -.6]], range: 3 }; });
// 42. "Este es Paco. Ha venido a tu cumpleaños. Y tiene hambre."
Q(42, (d, a) => { const th = R0(a, 'ha'), tt = R0(a, 'tiene'); return { ...SALON, fov: 30, atores: [YO({ x: .6, z: -.6, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [75, 20], bob: Math.abs(Math.sin(u * 6)) * .02 }) }), ELP({ x: -.9, z: -.8, eyes: [[0, 'sad'], [tt, 'look']] })],
  extra: (c) => { FIESTA(c); const g = globoC(c, '#E8667F', { cara: 1, gorro: '#43C4B4', hilo: false }); const G = [hab(c, ['ESTE ES PACO'], 1.2, [1.0, 2.35, -.5], 64), hab(c, ['HA VENIDO A', 'TU CUMPLEAÑOS'], 1.4, [1.0, 2.35, -.5], 56), hab(c, ['Y TIENE HAMBRE'], 1.3, [1.0, 2.35, -.5], 60)]; const n = lab(c, ['PACO'], .7, [.05, 2.05, -.4], ROSA); return { update: (u, tt2, cam) => { g.position.set(.05 + Math.sin(u * 5) * .06, 1.5 + Math.abs(Math.sin(u * 5)) * .08, -.4); g.rotation.z = Math.sin(u * 5) * .2; pop(G[0], u, .05, th - .2, cam); pop(G[1], u, th - .2, tt - .2, cam); pop(G[2], u, tt - .2, 99, cam); pop(n, u, .3, 99, cam); } }; },
  c: [[0, 1.6, 2.8], [0, 1.45, -.6], [0, 1.6, 2.4], [0, 1.45, -.6]], range: 3 }; });
// 43. Ella se ríe. Por primera vez en toda la tarde.
Q(43, (d, a) => { const tp = R0(a, 'primera'); return { ...SALON, fov: 30, atores: [ELP({ x: -.3, z: -.8, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [60, 70], armR: [60, 70], bob: Math.abs(Math.sin(u * 9)) * .04, lean: Math.sin(u * 4) * 5 }) })],
  extra: (c) => { FIESTA(c); const g = globoC(c, '#E8667F', { cara: 1, gorro: '#43C4B4', hilo: false }); g.position.set(.7, 1.5, -.6); const j = lab(c, ['JAJAJA'], .9, [-.3, 2.3, -.7], PINK); const t = lw(c, ['POR PRIMERA VEZ EN TODA LA TARDE'], 2.4, [0, .5, -.2]); const b = brillos(c, 12, '#FFE27A'); return { update: (u, tt, cam) => { flota(g, u, 1, 1.5); pop(j, u, .1, 99, cam); pop(t, u, tp - .2, 99, cam); b(u, [-.3, 1.6, -.7, .9]); } }; },
  c: [[0, 1.6, 2.6], [0, 1.4, -.7], [0, 1.6, 2.2], [0, 1.4, -.7]], range: 3, look: { bloom: .45 } }; });
// 44. 20:00
HORA(44, 20, '20:00', 'LA FIESTA DE VERDAD');
// 45. Hay veinte sillas. Así que llenáis las veinte.
Q(45, (d, a) => { const tl = R0(a, 'llenais'); return { ...SALON, fov: 38, atores: [YO({ x: -1.6, z: -.6, eyes: [[0, 'happy']], move: (u) => [-1.6 + Math.sin(u * 2) * .4, 0, -.6 + Math.cos(u * 2) * .4], pose: (k, u) => k.walk(u * 2) }), ELP({ x: 1.6, z: -.6, eyes: [[0, 'happy']], move: (u) => [1.6 + Math.sin(u * 2 + 2) * .4, 0, -.6 + Math.cos(u * 2 + 2) * .4], pose: (k, u) => k.walk(u * 2) })],
  extra: (c) => { const F = FIESTA(c, { globos: 20 }); const n = contador(c, [0, 2.6, -.6], 1.8, (u) => `${Math.round(20 * smooth(tl - .5, d - .2, u))} / 20`, { w: 700, h: 200, size: 120 }); return { update: (u, t2, cam) => { F(u, 1, Math.round(20 * smooth(tl - .5, d - .2, u))); n.userData.upd(u); } }; },
  c: [[0, 3.8, 5.2], [0, .7, -.6], [0, 3.5, 4.7], [0, .7, -.6]], range: 6 }; });
// 46. Un globo en cada una. Con caras. Con nombres. Paco. Lola. El profe de mates, con gafas y cara de enfadado.
Q(46, (d, a) => { const tp = R0(a, 'paco'), tl = R0(a, 'lola'), tm = R0(a, 'profe'); return { ...SALON, fov: 32, atores: [],
  extra: (c) => { const F = FIESTA(c, { globos: 20 }); const n = (txt, i, st) => lab(c, [txt], txt.length > 6 ? 1.4 : .8, [SPOTS[i][0] + .6, 1.75, SPOTS[i][1]], st); const N = [n('PACO', 0, ROSA), n('LOLA', 1, { bg: '#F2C14E', fg: '#2A2A34' }), n('EL PROFE DE MATES', 2, RED)]; const t = lw(c, ['CON CARAS · CON NOMBRES'], 2.0, [-1.6, 2.5, -1.0]); return { update: (u, t2, cam) => { F(u); pop(t, u, .1, tp - .2, cam); pop(N[0], u, tp - .1, 99, cam); pop(N[1], u, tl - .1, 99, cam); pop(N[2], u, tm - .1, 99, cam); } }; },
  cam: [[0, [-.6, 2.0, 2.6], [-2.2, 1.1, -1.0]], [R0(a, 'paco'), [-1.4, 1.7, .6], [-2.9, 1.0, -2.0]], [R0(a, 'lola'), [-1.4, 1.7, 1.2], [-2.9, 1.0, -1.2]], [R0(a, 'profe'), [-1.4, 1.65, 1.9], [-2.9, 1.0, -.4]], [d, [-1.5, 1.6, 2.1], [-2.9, 1.0, -.4]]], f: [[0, 4], [d, 3]], range: 4 }; });
// 47. Cantáis el cumpleaños feliz con un coro de globos.
Q(47, (d, a) => ({ ...SALON, fov: 36, atores: [YO({ x: .3, z: -1.2, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [50 + Math.sin(u * 6) * 20, 40], armR: [50 - Math.sin(u * 6) * 20, 40], head: Math.sin(u * 3) * 8 }) }), ELP({ x: 1.0, z: -1.4, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [50 - Math.sin(u * 6) * 20, 40], armR: [50 + Math.sin(u * 6) * 20, 40], head: -Math.sin(u * 3) * 8 }) })],
  extra: (c, s, A) => { const F = FIESTA(c, { globos: 20 }); const nt = notas(c, 8); const t = lab(c, ['♪ CUMPLEAÑOS FELIZ ♪'], 2.0, [.6, 2.6, -1.2], ROSA); const t2 = lw(c, ['CON UN CORO DE GLOBOS'], 2.0, [.6, .45, -.4]); return { update: (u, tt, cam) => { F(u); nt(u, A[0].root.position, cam); pop(t, u, .1, 99, cam); pop(t2, u, R0(a, 'coro') - .2, 99, cam); } }; },
  c: [[0, 2.2, 4.6], [.3, 1.2, -1.2], [0, 2.1, 4.1], [.3, 1.2, -1.2]], range: 5 }));
// 48. Ella sopla las velas. Y pide un deseo.
Q(48, (d, a) => { const ts = R0(a, 'sopla') + .4, td = R0(a, 'deseo'); return { ...SALON, fov: 30, atores: [ELP({ x: 1.75, z: -1.35, eyes: [[0, 'look'], [ts - .2, 'shut']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [12, 8], lean: u > ts - .3 && u < ts + .6 ? 12 : 0 }) })],
  extra: (c) => { const F = FIESTA(c, { globos: 20 }); const b = brillos(c, 14, '#FFE27A'); const t = lp(c, ['PIDE UN DESEO'], 1.4, [1.75, 2.35, -1.3]); return { update: (u, tt, cam) => { F(u, 1 - smooth(ts, ts + .3, u)); pop(t, u, td - .2, 99, cam); b(u, [1.75, 1.5, -1.6, .7], u > td ? 1 : 0); } }; },
  c: [[1.6, 1.5, 1.0], [1.75, 1.15, -1.9], [1.6, 1.45, .7], [1.75, 1.15, -1.9]], range: 3, look: { bloom: .5 } }; });
// 49. Luego abre tu regalo. Los auriculares de gato. Se queda mirándolos.
Q(49, (d, a) => { const ta = R0(a, 'auriculares'); return { ...SALON, fov: 30, atores: [ELP({ x: -1.45, ...SOFF, eyes: [[0, 'look'], [ta, 'wide']], pose: (k) => { sitP(k); hold(k); } }), YO({ x: -.55, ...SOFF, eyes: [[0, 'look']], pose: (k) => { sitP(k); k.pose({ head: 10 }); } })],
  extra: (c, s, A) => { FIESTA(c, { globos: 20 }); const r = regalo(c, '#43C4B4', .36); const au = auris(c, 1.3); const t = lab(c, ['AURICULARES DE GATO'], 1.8, [-1.0, 2.0, -2.0], PINK); return { update: (u, tt, cam) => { const p = hand(A[0]); r.position.set(p.x + .1, p.y - .15, p.z + .2); r.visible = u < ta - .2; au.visible = !r.visible; au.position.set(p.x + .15, p.y + .15, p.z + .25); au.rotation.y = Math.sin(u * 1.5) * .4; pop(t, u, ta, 99, cam); } }; },
  c: [[-1.0, 1.4, .9], [-1.0, 1.1, -2.2], [-1.0, 1.35, .6], [-1.0, 1.1, -2.2]], range: 3 }; });
// 50. "¿Te acordabas de lo de los gatos?" Te pones rojo. Ella también.
Q(50, (d, a) => { const tr = R0(a, 'rojo'), tt = R0(a, 'tambien'); return { ...SALON, fov: 30, atores: [ELP({ x: -1.45, ...SOFF, eyes: [[0, 'look'], [tt, 'happy']], pose: (k) => { sitP(k); hold(k); } }), YO({ x: -.55, ...SOFF, eyes: [[0, 'lookl'], [tr, 'shut']], pose: (k) => { sitP(k); k.pose({ head: 10 }); } })],
  extra: (c, s, A) => { FIESTA(c, { globos: 20 }); const au = auris(c, 1.3); const r0 = rubor(A[0]), r1 = rubor(A[1]); const g = hab(c, ['¿TE ACORDABAS DE', 'LO DE LOS GATOS?'], 1.5, [-1.9, 2.05, -2.0], 52); return { update: (u, tt2, cam) => { const p = hand(A[0]); au.position.set(p.x + .15, p.y + .15, p.z + .25); pop(g, u, .05, tr - .2, cam); r1(smooth(tr - .2, tr + .4, u)); r0(smooth(tt - .2, tt + .4, u)); } }; },
  c: [[-1.0, 1.4, .9], [-1.0, 1.15, -2.2], [-1.0, 1.35, .6], [-1.0, 1.15, -2.2]], range: 3 }; });
// 51. Entonces suena su móvil. Ella da un salto. ¿Será alguien que por fin viene? Lo mira.
Q(51, (d, a) => { const tm = R0(a, 'movil'), ts = R0(a, 'salto'), tq = R0(a, 'sera'); return { ...SALON, fov: 30, atores: [ELP({ x: -1.45, ...SOFF, eyes: [[0, 'happy'], [tm, 'wide'], [tq, 'look']], move: (u) => [-1.45, -.2 + (u > ts && u < ts + .5 ? Math.sin((u - ts) / .5 * Math.PI) * .2 : 0), -2.2], pose: (k) => { sitP(k); hold(k); } }), YO({ x: -.55, ...SOFF, eyes: [[0, 'happy'], [tq, 'look']], pose: (k, u) => { sitP(k); k.pose({ head: u > tq ? -20 : 10 }); } })],
  extra: (c, s, A) => { FIESTA(c, { globos: 20 }); const ph = movil(['MENSAJE NUEVO'], { hora: '20:21' }); ph.scale.setScalar(.25); c.add(ph); const b = lab(c, ['¡BZZZ!'], .8, [-1.9, 2.0, -2.0], RED); const p = piensa(c, ['¿VIENE ALGUIEN?'], 1.4, [-1.6, 2.15, -2.0]); return { update: (u, tt, cam) => { naMao(ph, A[0], .05); ph.position.x += u > tm && (u * 12) % 1 < .5 ? .01 : 0; pointer(ph, cam); pop(b, u, tm, tq - .2, cam); pop(p, u, tq - .2, 99, cam); } }; },
  c: [[-1.0, 1.4, 1.0], [-1.0, 1.15, -2.2], [-1.0, 1.35, .7], [-1.0, 1.15, -2.2]], range: 3 }; });
// 52. Es un mensaje de su abuela: "¡Felicidades, cariño! ¿Qué tal la fiesta?"
Q(52, (d, a) => { const tf = R0(a, 'felicidades'), tq = R0(a, 'que'); return { amb: 'gris', fov: 28, k: 1, atores: [],
  extra: (c) => { const ch = chat(c, [0, 1.5, -.5], 1.15, [['l', '¡Felicidades, cariño!', tf - .3], ['l', '¿Qué tal la fiesta?', tq - .3]], { hora: '20:21', name: 'ABUELA ♥' }); const t = lab(c, ['ES SU ABUELA'], 1.3, [1.2, 2.45, -.3], { bg: '#1E2230', fg: '#F2C14E' }); return { update: (u, tt, cam) => { ch.userData.upd(u); pop(t, u, R0(a, 'abuela') - .2, 99, cam); } }; },
  c: [[0, 1.5, 4.3], [0, 1.5, -.5], [0, 1.5, 3.8], [0, 1.5, -.5]], range: 2, blur: 4 }; });
// 53. Ella te mira. Tú la miras. Y contesta: "Muy bien, abuela. Ha venido muchísima gente."
Qs(53, ['contesta'], [
  (d, a) => { const tt = R0(a, 'tu'); return { ...SALON, fov: 30, atores: [ELP({ x: -1.45, ...SOFF, eyes: [[0, 'look']], pose: (k) => { sitP(k); hold(k); } }), YO({ x: -.55, ...SOFF, eyes: [[0, 'look'], [tt, 'lookl']], pose: (k) => { sitP(k); k.pose({ head: 10 }); } })],
    extra: (c) => { FIESTA(c, { globos: 20 }); return {}; }, c: [[-1.0, 1.35, .7], [-1.0, 1.2, -2.2], [-1.0, 1.35, .5], [-1.0, 1.2, -2.2]], range: 3 }; },
  (d, a) => { const tm = R0(a, 'muchisima'); return { amb: 'gris', fov: 28, k: 1, atores: [],
    extra: (c) => { const ch = chat(c, [-.3, 1.5, -.5], 1.15, [['l', '¡Felicidades, cariño!', 0], ['l', '¿Qué tal la fiesta?', 0], ['r', 'Muy bien, abuela. Ha venido muchísima gente.', .3]], { hora: '20:22', name: 'ABUELA ♥' }); const t = lab(c, ['¬ ¬'], .55, [1.15, 2.2, -.3], { bg: '#FBF7EC', fg: '#2A2A34', size: 90, w: 300 }); return { update: (u, tt, cam) => { ch.userData.upd(u); pop(t, u, tm, 99, cam); } }; },
    c: [[0, 1.5, 4.3], [0, 1.5, -.5], [0, 1.5, 3.8], [0, 1.5, -.5]], range: 2, blur: 4 }; },
]);
// 54. Y le manda una foto: tú, rodeado de veinte globos con caras.
Q(54, (d, a) => { const tf = R0(a, 'foto'), tv = R0(a, 'veinte'); return { amb: 'gris', fov: 28, k: 1, atores: [],
  extra: (c) => { const ch = chat(c, [-.4, 1.5, -.5], 1.15, [['l', '¿Qué tal la fiesta?', 0], ['r', 'Muy bien, abuela. Ha venido muchísima gente.', 0], ['r', '[ FOTO ]', tf]], { hora: '20:22', name: 'ABUELA ♥' }); const ft = fotoM(c, fotoGlobosT(), 1.3); ft.position.set(1.1, 1.6, -.3); const t = lw(c, ['TÚ + 20 GLOBOS'], 1.4, [1.1, .9, -.2]); return { update: (u, tt, cam) => { ch.userData.upd(u); pop(ft, u, tf + .2, 99, cam); pop(t, u, tv - .2, 99, cam); } }; },
  c: [[.2, 1.5, 4.3], [.2, 1.5, -.5], [.2, 1.5, 3.8], [.2, 1.5, -.5]], range: 2, blur: 4 }; });
// 55. 20:30
HORA(55, 20, '20:30', 'DE VERDAD');
// 56. Os sentáis en el suelo, comiendo tarta con los dedos. Y empezáis a hablar. Pero de verdad.
Q(56, (d, a) => { const tv = R0(a, 'verdad'); return { ...SALON, fov: 30, atores: SUELOS({ p2: (k, u) => k.pose({ armL: [12, 8], armR: [60 + Math.sin(u * 4) * 25, 70] }) }, { p2: (k, u) => k.pose({ armL: [60 + Math.cos(u * 4) * 25, 70], armR: [12, 8] }) }),
  extra: (c) => { const F = SUELOX(c); const L = SEQ(c, a, [[['TARTA CON LOS DEDOS'], 'tarta', 'w', [0, 1.6, -.5], 1.8], [['Y HABLÁIS…'], 'hablar', 'y', [0, 1.6, -.5], 1.2], [['DE VERDAD'], tv - .2, 'p', [0, 1.6, -.5], 1.2, 1]]); return { update: (u, t2, cam) => { F(u); L(u, cam); } }; },
  c: CSU, range: 3 }; });
// 57. De qué queréis ser de mayores. De lo que os da miedo. De la vez que ella se cayó en la función de fin de curso y todo el colegio se rio.
Qs(57, ['vez'], [
  (d, a) => ({ ...SALON, fov: 30, atores: SUELOS({ p2: talkP }, {}),
    extra: (c) => { const F = SUELOX(c); const P = PSEQ(c, a, [[['¿QUÉ QUERÉIS SER', 'DE MAYORES?'], 'mayores', [0, 1.75, -.5], 1.7], [['LO QUE OS DA MIEDO'], 'miedo', [0, 1.75, -.5], 1.6]], { keep: false }); return { update: (u, t2, cam) => { F(u); P(u, cam); } }; },
    c: CSU, range: 3 }),
  (d, a) => { const tc = R0(a, 'cayo'), tr = R0(a, 'rio'); const K = [[-2.0, 1.2], [-1.0, 1.4], [0, 1.5], [1.0, 1.4], [2.0, 1.2]]; return { amb: 'concurso', fov: 32, atores: [PEQ({ x: 0, z: -.6, y: 1.15, eyes: [[0, 'happy'], [tc, 'wide']], pose: (k, u) => k.pose({ armL: [u > tc ? 150 : 12, 40], armR: [u > tc ? 150 : 12, 40], lean: u > tc ? Math.min(70, (u - tc) * 160) : 0 }) }), ...K.map(([x, z], i) => EXTRA(i, { x, z, s: .66, eyes: [[0, 'look'], [tr - .3, 'happy']], pose: (k, u) => (u > tr - .3 ? k.pose({ bob: Math.abs(Math.sin(u * 10 + i)) * .03 }) : k.pose()) }))],
    extra: (c) => { const t = lw(c, ['FUNCIÓN DE FIN DE CURSO'], 2.2, [0, 2.9, -.6]); const j = lab(c, ['JAJAJA'], .9, [1.5, 1.9, 1.3], { bg: '#FBF7EC', fg: '#2A2A34' }); return { update: (u, tt, cam) => { pop(t, u, .1, 99, cam); pop(j, u, tr - .2, 99, cam); } }; },
    c: [[0, 2.0, 5.2], [0, 1.4, -.6], [0, 1.95, 4.7], [0, 1.4, -.6]], range: 4, look: MEMO }; },
]);
// 58. Ella te pregunta cuál es tu recuerdo más bonito. Tú le preguntas adónde viajaría si pudiera ir a cualquier sitio.
Q(58, (d, a) => { const tp = R0(a, 'preguntas'); return { ...SALON, fov: 30, atores: SUELOS({ p2: (k, u) => (u > tp ? talkP(k, u) : k.pose({ armL: [40, 60], armR: [12, 8] })) }, { p2: (k, u) => (u < tp ? talkP(k, u) : k.pose({ armL: [12, 8], armR: [40, 60] })) }),
  extra: (c) => { const F = SUELOX(c); const g1 = hab(c, ['¿TU RECUERDO', 'MÁS BONITO?'], 1.2, [-.9, 1.75, -.5], 56); const g2 = hab(c, ['¿ADÓNDE VIAJARÍAS?'], 1.3, [.9, 1.75, -.5], 56); return { update: (u, t2, cam) => { F(u); pop(g1, u, .1, tp - .1, cam); pop(g2, u, tp - .1, 99, cam); } }; },
  c: CSU, range: 3 }; });
// 59. Ella dice que a Japón, a ver los cerezos en flor. Tú dices que tú también. Aunque nunca lo habías pensado hasta ese momento.
Qs(59, ['dices'], [
  (d, a) => ({ amb: 'gris', fov: 32, k: 1, atores: [ELP({ x: -.4, z: -.3, eyes: [[0, 'happy']], pose: (k) => k.pose({ armL: [12, 8], armR: [130, 30] }) }), YO({ x: .4, z: -.3, eyes: [[0, 'heart']] })],
    extra: (c) => { [[-2.4, -1.6, 1.2], [2.4, -1.6, 1.2], [-1.3, -2.6, 1.0], [1.3, -2.6, 1.0], [0, -3.4, .9]].forEach(([x, z, s], i) => tree(c, x, z, s, SAKURA, i)); const b = brillos(c, 22, '#FFC0D8'); const t = lab(c, ['JAPÓN · LOS CEREZOS EN FLOR'], 2.4, [0, 2.6, -.4], PINK); return { update: (u, tt, cam) => { b(u, [0, 1.8, -.8, 2.2]); pop(t, u, .2, 99, cam); } }; },
    c: [[0, 1.6, 4.4], [0, 1.4, -.6], [0, 1.6, 3.9], [0, 1.4, -.6]], range: 4, look: DREAM }),
  (d, a) => { const tn = R0(a, 'nunca'); return { ...SALON, fov: 30, atores: SUELOS({ eyes: [[0, 'happy'], [tn, 'lookl']], p2: nod }, {}),
    extra: (c) => { const F = SUELOX(c); const g = hab(c, ['¡YO TAMBIÉN!'], 1.1, [.9, 1.75, -.5], 64); const t = lw(c, ['(NUNCA LO HABÍAS PENSADO)'], 2.2, [0, 1.75, -.5]); return { update: (u, t2, cam) => { F(u); pop(g, u, .05, tn - .2, cam); pop(t, u, tn - .1, 99, cam); } }; },
    c: CSU, range: 3 }; },
]);
// 60. Y pasa algo extraño: cuanto más habláis, más cerca os sentís.
Q(60, (d, a) => { const tc = R0(a, 'cerca'); return { ...SALON, fov: 30, atores: [ELP({ x: -.5, z: -.6, ...SUELO, eyes: [[0, 'happy']], move: (u) => [lerp(-.5, -.28, smooth(1, tc + .5, u)), -.78, -.6], pose: (k) => { sitP(k); k.pose({ armL: [12, 8], armR: [40, 60] }); } }), YO({ x: .5, z: -.6, ...SUELO, eyes: [[0, 'happy']], move: (u) => [lerp(.5, .28, smooth(1, tc + .5, u)), -.78, -.6], pose: (k) => { sitP(k); k.pose({ armL: [40, 60], armR: [12, 8] }); } })],
  extra: (c) => { const F = SUELOX(c); const h = corazon(c, .35); h.position.set(0, 1.5, -.5); const L = SEQ(c, a, [[['CUANTO MÁS HABLÁIS…'], 'cuanto', 'w', [0, 1.95, -.5], 1.9], [['MÁS CERCA'], tc - .2, 'p', [0, 1.95, -.5], 1.2, 1]]); return { update: (u, t2, cam) => { F(u); L(u, cam); h.visible = u > tc; h.scale.setScalar(latido(u)); pointer(h, cam); } }; },
  c: CSU, range: 3, look: { bloom: .45 } }; });
// 61. Eso también lo ha estudiado la ciencia. En 1997, Arthur Aron juntó a desconocidos por parejas y les dio una lista de preguntas. Las primeras eran fáciles. Las últimas, muy personales.
const listaT = (n) => canvasTex(512, 640, (x) => { x.fillStyle = '#FBF7EC'; x.fillRect(0, 0, 512, 640); x.fillStyle = '#2A2A34'; x.font = '900 40px Inter'; x.textAlign = 'center'; x.fillText('PREGUNTAS', 256, 60); x.textAlign = 'left'; x.font = '700 30px Inter'; for (let i = 0; i < 9; i++) { x.fillStyle = i < n ? '#2A2A34' : '#C8C0B0'; x.fillText(`${i * 4 + 1}.`, 30, 120 + i * 58); x.fillStyle = i < 3 ? '#7BC86A' : i < 6 ? '#F2C14E' : '#E8667F'; x.fillRect(90, 100 + i * 58, 360 - (i * 37) % 120, 22); } });
Qs(61, ['junto', 'primeras'], [
  (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [PROF({ x: .9, z: -.4, eyes: [[0, 'happy']], pose: hold })],
    extra: (c) => { const t = lab(c, ['TAMBIÉN LO ESTUDIÓ LA CIENCIA'], 2.4, [-.6, 2.3, -.3], { bg: '#1E2230', fg: '#F2C14E' }); const t2 = lw(c, ['ARTHUR ARON'], 1.3, [-.6, 1.6, -.3]); return { update: (u, tt, cam) => { pop(t, u, .1, 99, cam); pop(t2, u, R0(a, 'arthur') - .2, 99, cam); } }; },
    c: [[0, 1.6, 4.0], [0, 1.5, -.4], [0, 1.6, 3.5], [0, 1.5, -.4]], range: 3 }),
  (d, a) => { const tl = R0(a, 'lista'); return { amb: 'gris', fov: 30, k: 1, atores: [EXTRA(2, { x: -1.0, z: -.4, eyes: [[0, 'lookl']], pose: (k) => k.pose({ head: 20 }) }), EXTRA(5, { x: 1.0, z: -.4, eyes: [[0, 'look']], pose: (k) => k.pose({ head: -20 }) })],
    extra: (c) => { mesa(c, 0, -.2, .8, 1.2, .7); const ls = cut(listaT(9), .8, 1.0); ls.position.set(0, 1.55, -.1); ls.renderOrder = 5; c.add(ls); const L = SEQ(c, a, [[['DESCONOCIDOS, EN PAREJAS'], 'desconocidos', 'w', [0, 2.6, -.3], 2.1], [['UNA LISTA DE PREGUNTAS'], tl, 'y', [0, 2.6, -.3], 2.1, 1]]); return { update: (u, tt, cam) => { pop(ls, u, tl - .2, 99, cam); L(u, cam); } }; },
    c: [[0, 1.6, 4.2], [0, 1.45, -.3], [0, 1.6, 3.7], [0, 1.45, -.3]], range: 3 }; },
  (d, a) => { const tu = R0(a, 'ultimas'); return { amb: 'gris', fov: 28, k: 1, atores: [],
    extra: (c) => { const ls = cut(listaT(9), 1.4, 1.75); ls.position.set(-.7, 1.55, -.5); ls.renderOrder = 4; c.add(ls); const L = SEQ(c, a, [[['FÁCILES'], 0, 'w', [1.0, 2.1, -.3], 1.0], [['MUY PERSONALES'], tu, 'p', [1.0, 1.2, -.3], 1.5, 1]]); const t0 = lab(c, ['FÁCILES'], 1.0, [1.0, 2.1, -.3], VERDE); return { update: (u, tt, cam) => { pop(t0, u, .1, 99, cam); L(u, cam); } }; },
    c: [[.1, 1.6, 3.8], [.1, 1.6, -.5], [.1, 1.6, 3.3], [.1, 1.6, -.5]], range: 3 }; },
]);
// 62. En solo cuarenta y cinco minutos, esas parejas se sentían mucho más cercanas que otras que solo habían charlado de cosas sin importancia.
Q(62, (d, a) => { const tm = R0(a, 'minutos'), tc = R0(a, 'cercanas'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const n = contador(c, [0, 2.3, -.4], 1.5, (u) => `${Math.round(45 * smooth(.2, tm + .3, u))} MIN`, { w: 600, h: 200, size: 120 }); const b = barras(c, [['PREGUNTAS\nPERSONALES', .9, '#E8667F'], ['CHARLA SIN\nIMPORTANCIA', .35, '#8AA8C8']], 2.3, [0, 1.25, -.5], { title: 'CERCANÍA' }); return { update: (u, tt, cam) => { n.userData.upd(u); pop(b, u, tc - .4, 99, cam); } }; },
  c: [[0, 1.75, 4.0], [0, 1.75, -.5], [0, 1.75, 3.5], [0, 1.75, -.5]], range: 3 }; });
// 63. Abrirse poco a poco, y por turnos, acerca a las personas.
Q(63, (d, a) => { const tt = R0(a, 'turnos'); return { ...SALON, fov: 30, atores: SUELOS({ p2: (k, u) => (Math.floor(u * 1.2) % 2 ? talkP(k, u) : k.pose({ armL: [40, 60], armR: [12, 8] })) }, { p2: (k, u) => (Math.floor(u * 1.2) % 2 ? k.pose({ armL: [12, 8], armR: [40, 60] }) : talkP(k, u)) }, .8),
  extra: (c) => { const F = SUELOX(c); const L = SEQ(c, a, [[['POCO A POCO'], 0, 'w', [0, 1.95, -.5], 1.3], [['POR TURNOS'], tt - .2, 'y', [0, 1.95, -.5], 1.2], [['ACERCA A LAS PERSONAS'], 'acerca', 'p', [0, 1.95, -.5], 2.0, 1]]); return { update: (u, t2, cam) => { F(u); L(u, cam); } }; },
  c: CSU, range: 3 }; });
// 64. 21:00
HORA(64, 21, '21:00', 'SE TE ESCAPA');
// 65. Y entonces se te escapa. Le cuentas algo que nunca le has contado a nadie:
Q(65, (d, a) => { const tn = R0(a, 'nunca'); return { ...SALON, fov: 30, atores: SUELOS({ eyes: [[0, 'wide'], [tn, 'look']], p2: (k, u) => (u > tn ? talkP(k, u) : k.pose({ armL: [12, 8], armR: [100, 120] })) }, { eyes: [[0, 'look']] }, .8),
  extra: (c) => { const F = SUELOX(c); const L = SEQ(c, a, [[['¡SE TE ESCAPA!'], 'escapa', 'r', [0, 1.95, -.5], 1.5], [['ALGO QUE NUNCA HAS CONTADO'], tn, 'w', [0, 1.95, -.5], 2.3, 1]]); return { update: (u, t2, cam) => { F(u); L(u, cam); } }; },
  c: CSU, range: 3 }; });
// 66. Que cuando empezó el curso ensayabas en casa cómo saludarla. Delante del espejo. Y aun así, el primer día, le dijiste "hola" dos veces seguidas.
Qs(66, ['primer'], [
  (d, a) => { const te = R0(a, 'espejo'); return { ...DIA, fov: 32, atores: [YO({ x: -.6, z: -.2, eyes: [[0, 'happy']], pose: (k, u) => (Math.floor(u * .9) % 2 ? wave(k, u) : talkP(k, u)) })],
    extra: (c) => { espejo(c, .6, -1.4); const rf = cut(caraT('', '#A8C4D8'), .5, .65); rf.position.set(.6, 1.6, -1.33); rf.renderOrder = 3; c.add(rf); const g = hab(c, ['HOLA…', 'HOLA, ¿QUÉ TAL?'], 1.3, [-1.1, 2.3, -.2], 54); const t = lw(c, ['DELANTE DEL ESPEJO'], 1.7, [.4, 2.65, -1.2]); return { update: (u, tt, cam) => { pop(g, u, .2, 99, cam); pop(t, u, te - .3, 99, cam); } }; },
    c: [[0, 1.7, 3.2], [0, 1.5, -.8], [0, 1.65, 2.8], [0, 1.5, -.8]], range: 3 }; },
  (d, a) => { const th = R0(a, 'hola'), t2 = R0(a, 'dos'); return { ...AULA(), atores: [YO({ x: -.6, z: .4, eyes: [[0, 'happy'], [t2 + .4, 'wide']], pose: wave }), ELA({ x: .6, z: .3, eyes: [[0, 'look'], [t2 + .3, 'smug']] })],
    extra: (c) => { const g1 = hab(c, ['HOLA.'], .8, [-.9, 2.25, .4], 70); const g2 = hab(c, ['HOLA.'], .8, [-.3, 2.6, .4], 70); const x2 = lab(c, ['× 2'], .7, [.9, 2.3, .3], RED); const t0 = lw(c, ['EL PRIMER DÍA'], 1.3, [0, 2.75, .4]); return { update: (u, tt, cam) => { pop(t0, u, .05, th - .3, cam); pop(g1, u, th - .2, 99, cam); pop(g2, u, t2 - .1, 99, cam); pop(x2, u, t2 + .3, 99, cam); } }; },
    c: [[0, 1.7, 3.6], [0, 1.5, -.2], [0, 1.65, 3.1], [0, 1.5, -.2]], range: 3, look: MEMO }; },
]);
// 67. Te quieres morir. Acabas de quedar fatal.
Q(67, (d, a) => { const tf = R0(a, 'fatal'); return { ...SALON, fov: 30, atores: SUELOS({ eyes: [[0, 'shut']], p2: (k) => k.pose({ armL: [150, 110], armR: [150, 110], head: -12 }) }, { eyes: [[0, 'look']] }, .8),
  extra: (c) => { const F = SUELOX(c); const L = SEQ(c, a, [[['TE QUIERES MORIR'], 0, 'r', [0, 1.95, -.5], 1.6], [['QUEDASTE FATAL'], tf - .3, 'w', [0, 1.95, -.5], 1.5, 1]]); return { update: (u, t2, cam) => { F(u); L(u, cam); } }; },
  c: CSU, range: 3 }; });
// 68. Pero ella no se ríe de ti. Te mira de otra forma.
Q(68, (d, a) => { const tm = R0(a, 'mira'); return { ...SALON, fov: 30, atores: SUELOS({ eyes: [[0, 'shut'], [tm + .4, 'look']], p2: (k, u) => k.pose({ armL: [u < tm ? 150 : 40, u < tm ? 110 : 60], armR: [u < tm ? 150 : 12, u < tm ? 110 : 8] }) }, { eyes: [[0, 'look'], [tm, 'heart']] }, .8),
  extra: (c) => { const F = SUELOX(c); const b = brillos(c, 12, '#FFB0C0'); const L = SEQ(c, a, [[['NO SE RÍE'], 0, 'w', [0, 1.95, -.5], 1.0], [['TE MIRA DE OTRA FORMA'], tm, 'p', [0, 1.95, -.5], 2.0, 1]]); return { update: (u, t2, cam) => { F(u); L(u, cam); b(u, [-.3, 1.0, -.5, .7], u > tm ? 1 : 0); } }; },
  c: CSU, range: 3, look: { bloom: .45 } }; });
// 69. Y es que hay otro estudio. En 1966, Elliot Aronson puso a unos estudiantes a escuchar la grabación de un concurso.
Q(69, (d, a) => { const tg = R0(a, 'grabacion'); const P = [[-1.6, -.4], [-.55, -.6], [.55, -.6], [1.6, -.4]]; return { amb: 'gris', fov: 32, k: 1, atores: P.map(([x, z], i) => EXTRA(i, { x, z, eyes: [[0, 'look'], [tg, 'shut']], pose: (k, u) => { if (!k.cas) k.cas = cascos(k); nod(k, u + i); } })),
  extra: (c) => { const L = SEQ(c, a, [[['OTRO ESTUDIO'], 0, 'y', [0, 2.5, -.4], 1.3], [['ELLIOT ARONSON'], R0(a, 'elliot'), 'w', [0, 2.5, -.4], 1.6], [['ESCUCHAN UN CONCURSO'], tg, 'p', [0, 2.5, -.4], 2.0, 1]]); const nt = notas(c, 6); return { update: (u, tt, cam) => { L(u, cam); nt(u, new THREE.Vector3(0, 1.6, -.5), cam, u > tg); } }; },
  c: [[0, 1.6, 4.6], [0, 1.45, -.4], [0, 1.6, 4.1], [0, 1.45, -.4]], range: 3 }; });
// 70. Un concursante era muy listo y lo acertaba casi todo. Pero al final se le caía una taza de café encima.
Q(70, (d, a) => { const ta = R0(a, 'acertaba'), tc = R0(a, 'caia'); return { amb: 'concurso', fov: 30, atores: [EXTRA(5, { x: 0, z: -1.05, eyes: [[0, 'happy'], [tc + .3, 'wide']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u < tc ? (u > ta && (u * 2) % 1 < .5 ? 150 : 60) : 30, 40], lean: u > tc + .3 ? -6 : 0 }) })],
  extra: (c, s, A) => { const tz = taza(c); const n = contador(c, [1.6, 2.5, -.6], 1.2, (u) => `✓ ${Math.min(9, Math.max(0, Math.floor((u - ta) * 3)))}`, { w: 400, h: 200, size: 120, bg: '#2F8A5A', fg: '#fff' }); const sp = cut(canvasTex(256, 256, (x) => { x.clearRect(0, 0, 256, 256); x.fillStyle = '#5A3418'; for (const [cx, cy, r] of [[128, 120, 70], [80, 170, 40], [180, 160, 45], [120, 200, 35]]) { x.beginPath(); x.arc(cx, cy, r, 0, 7); x.fill(); } }), .4, .4); sp.renderOrder = 5; c.add(sp); const t = lab(c, ['¡PLAF!'], .9, [-1.2, 2.3, -.6], RED); const t0 = lw(c, ['MUY LISTO'], 1.1, [-1.3, 2.3, -.6]); return { update: (u, tt, cam) => { const p = hand(A[0]); const f = smooth(tc, tc + .4, u); tz.position.set(p.x + .05, p.y + .05 - f * .45, p.z + .15); tz.rotation.z = f * 2.2; tz.visible = u < tc + .5; sp.visible = u > tc + .35; const q = new THREE.Vector3(); A[0].torso.getWorldPosition(q); sp.position.set(q.x, q.y - .1, q.z + .25); n.userData.upd(u); n.visible = u > ta; pop(t0, u, .1, tc - .2, cam); pop(t, u, tc + .3, 99, cam); } }; },
  c: [[0, 1.8, 4.4], [0, 1.5, -.8], [0, 1.75, 3.9], [0, 1.5, -.8]], range: 4 }; });
// 71. ¿El resultado? Ese concursante les cayó todavía mejor que el que no hacía el ridículo.
Q(71, (d, a) => { const tm = R0(a, 'mejor'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const b = barras(c, [['SIN FALLO', .55, '#8AA8C8'], ['CON CAFÉ\nENCIMA', .9, '#F2C14E']], 2.4, [0, 1.5, -.5], { title: 'LES CAE BIEN' }); const q = lw(c, ['¿EL RESULTADO?'], 1.4, [0, 2.55, -.4]); const t = lab(c, ['¡TODAVÍA MEJOR!'], 1.5, [0, 2.55, -.4], ORO); return { update: (u, tt, cam) => { pop(b, u, .6, 99, cam); pop(q, u, .05, tm - .2, cam); pop(t, u, tm - .2, 99, cam); } }; },
  c: [[0, 1.7, 3.9], [0, 1.7, -.5], [0, 1.7, 3.4], [0, 1.7, -.5]], range: 3 }; });
// 72. Un pequeño fallo nos hace más humanos. Más cercanos.
Q(72, (d, a) => { const th = R0(a, 'humanos'), tc = R0(a, 'cercanos'); return { amb: 'concurso', fov: 30, atores: [EXTRA(5, { x: 0, z: -1.05, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [130 + Math.sin(u * 6) * 15, 30] }) })],
  extra: (c, s, A) => { const sp = cut(canvasTex(256, 256, (x) => { x.clearRect(0, 0, 256, 256); x.fillStyle = '#5A3418'; for (const [cx, cy, r] of [[128, 120, 70], [80, 170, 40], [180, 160, 45], [120, 200, 35]]) { x.beginPath(); x.arc(cx, cy, r, 0, 7); x.fill(); } }), .4, .4); sp.renderOrder = 5; c.add(sp); const H2 = [0, 1, 2].map(() => corazon(c, .3)); const L = SEQ(c, a, [[['UN PEQUEÑO FALLO'], 0, 'w', [0, 2.65, -.8], 1.7], [['MÁS HUMANOS'], th - .2, 'y', [0, 2.65, -.8], 1.4], [['MÁS CERCANOS'], tc - .2, 'p', [0, 2.65, -.8], 1.4, 1]]); return { update: (u, tt, cam) => { const q = new THREE.Vector3(); A[0].torso.getWorldPosition(q); sp.position.set(q.x, q.y - .1, q.z + .25); H2.forEach((h, i) => { h.visible = u > th; h.position.set(-1.0 + i, 1.4 + Math.sin(u * 2 + i) * .1, -.4); h.scale.setScalar(latido(u + i * .2)); pointer(h, cam); }); L(u, cam); } }; },
  c: [[0, 1.7, 3.8], [0, 1.6, -.8], [0, 1.65, 3.3], [0, 1.6, -.8]], range: 4 }; });
// 73. Y en 2018, Universidad de Mannheim… cuando alguien muestra su lado vulnerable, cree que queda débil o ridículo. Pero los demás lo ven como algo valiente.
Qs(73, ['cuando', 'demas'], [
  (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [CIENT(0, { x: -.7, z: -.4, eyes: [[0, 'happy']], pose: hold }), CIENT(2, { x: .7, z: -.4, eyes: [[0, 'look']], pose: talkP })],
    extra: (c) => { const L = SEQ(c, a, [[['UNIVERSIDAD DE MANNHEIM'], 'universidad', 'w', [0, 2.5, -.3], 2.2], [['ALGO PARECIDO'], 'parecido', 'y', [0, 2.5, -.3], 1.5, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
    c: [[0, 1.6, 4.0], [0, 1.5, -.4], [0, 1.6, 3.5], [0, 1.5, -.4]], range: 3 }),
  (d, a) => { const td = R0(a, 'debil'); return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: -.5, z: -.3, eyes: [[0, 'look'], [td - .5, 'sad']], pose: (k) => k.pose({ armL: [20, 10], armR: [20, 10], head: -8 }) })],
    extra: (c) => { const L = SEQ(c, a, [[['MUESTRAS TU LADO VULNERABLE'], 'vulnerable', 'w', [0, 2.65, -.3], 2.5, 1]]); const p = piensa(c, ['QUEDO DÉBIL…', 'O RIDÍCULO'], 1.5, [.7, 2.0, -.4]); return { update: (u, tt, cam) => { L(u, cam); pop(p, u, td - .4, 99, cam); } }; },
    c: [[0, 1.6, 4.0], [0, 1.5, -.4], [0, 1.6, 3.5], [0, 1.5, -.4]], range: 3 }; },
  (d, a) => { const tv = R0(a, 'valiente'); const P = [[-1.8, -.8], [-1.0, -1.2], [1.0, -1.2], [1.8, -.8]]; return { amb: 'gris', fov: 32, k: 1, atores: [YO({ x: 0, z: -.3, eyes: [[0, 'sad'], [tv, 'happy']] }), ...P.map(([x, z], i) => EXTRA(i + 1, { x, z, eyes: [[0, 'look'], [tv - .3, 'happy']], pose: (k, u) => (u > tv - .3 ? clap(k, u + i) : k.pose()) }))],
    extra: (c) => { const t0 = lw(c, ['LOS DEMÁS VEN…'], 1.4, [0, 2.6, -.3]); const t = lab(c, ['ALGO VALIENTE'], 1.6, [0, 2.6, -.3], VERDE); const b = brillos(c, 14, '#FFE27A'); return { update: (u, tt, cam) => { pop(t0, u, .05, tv - .3, cam); pop(t, u, tv - .3, 99, cam); b(u, [0, 1.5, -.3, 1.0], u > tv ? 1 : 0); } }; },
    c: [[0, 1.7, 4.6], [0, 1.4, -.6], [0, 1.65, 4.1], [0, 1.4, -.6]], range: 4 }; },
]);
// 74. Tú creíste que habías quedado fatal. Ella vio que eras sincero.
Q(74, (d, a) => { const ts = R0(a, 'sincero'); return { ...SALON, fov: 30, atores: SUELOS({ eyes: [[0, 'flat'], [ts, 'happy']] }, { eyes: [[0, 'heart']] }, .8),
  extra: (c) => { const F = SUELOX(c); const t1 = lab(c, ['TÚ: «QUEDÉ FATAL»'], 1.5, [.6, 1.95, -.5], RED); const t2 = lab(c, ['ELLA: «ES SINCERO»'], 1.5, [-.6, 1.95, -.5], VERDE); return { update: (u, t2x, cam) => { F(u); pop(t1, u, .05, ts - .6, cam); pop(t2, u, R0(a, 'ella') - .1, 99, cam); } }; },
  c: CSU, range: 3, look: { bloom: .45 } }; });
// ===================== CENAS 75–105 =====================
const NOCHEC = { amb: 'cuartoYo', ambo: { night: true } };
const NLOOK = { exposure: .95, bloom: .45 };
// 75. 21:30
HORA(75, 21, '21:30', 'UNA COSA');
// 76. Ella se queda callada un momento. Luego dice: "Tengo que contarte una cosa."
Q(76, (d, a) => { const tt = R0(a, 'tengo'); return { ...SALON, fov: 30, atores: SUELOS({ eyes: [[0, 'look']] }, { eyes: [[0, 'down'], [tt, 'look']], p2: (k, u) => (u > tt ? talkP(k, u) : k.pose({ armL: [12, 8], armR: [12, 8], head: -10 })) }, .8),
  extra: (c) => { const F = SUELOX(c); const t = lw(c, ['…'], .6, [-.3, 1.75, -.5]); const g = hab(c, ['TENGO QUE CONTARTE', 'UNA COSA'], 1.4, [-.8, 1.85, -.5], 50); return { update: (u, t2, cam) => { F(u); pop(t, u, .2, tt - .2, cam); pop(g, u, tt - .1, 99, cam); } }; },
  c: CSU, range: 3 }; });
// 77. Coge el móvil. Te enseña los mensajes. No hay ningún grupo. No hay ninguna invitación para nadie más.
Q(77, (d, a) => { const tg = R0(a, 'ningun'), ti = R0(a, 'ninguna'); return { amb: 'gris', fov: 28, k: 1, atores: [],
  extra: (c) => { const ch = chat(c, [-.4, 1.5, -.5], 1.15, [['r', '¡Mi cumple! Sábado, 18:00. Te espero.', .3]], { hora: '21:31', name: 'MENSAJES: SOLO TÚ' }); const L = SEQ(c, a, [[['NINGÚN GRUPO'], tg - .2, 'w', [1.15, 2.2, -.3], 1.3], [['NINGUNA INVITACIÓN MÁS'], ti - .2, 'r', [1.15, 2.2, -.3], 1.9, 1]]); return { update: (u, tt, cam) => { ch.userData.upd(u); L(u, cam); } }; },
  c: [[.2, 1.5, 4.3], [.2, 1.5, -.5], [.2, 1.5, 3.8], [.2, 1.5, -.5]], range: 2, blur: 4 }; });
// 78. "No invité a nadie más", dice. "Solo a ti."
Q(78, (d, a) => { const ts = R0(a, 'solo'); return { ...SALON, fov: 28, atores: [ELP({ x: -.25, z: -.6, ...SUELO, eyes: [[0, 'look'], [ts, 'happy']], pose: (k) => { sitP(k); k.pose({ armL: [12, 8], armR: [40, 60] }); } })],
  extra: (c, s, A) => { SUELOX(c); const r = rubor(A[0]); const g1 = hab(c, ['NO INVITÉ A NADIE MÁS'], 1.3, [-.4, 1.8, -.5], 52); const t = lab(c, ['SOLO A TI'], 1.1, [-.25, 1.8, -.5], PINK); const h = corazon(c, .3); h.position.set(.25, 1.2, -.5); return { update: (u, tt, cam) => { pop(g1, u, .05, ts - .2, cam); pop(t, u, ts - .2, 99, cam); r(smooth(ts, ts + .5, u)); h.visible = u > ts; h.scale.setScalar(latido(u, 130)); pointer(h, cam); } }; },
  c: [[-.25, 1.0, 1.6], [-.25, .85, -.6], [-.25, 1.0, 1.3], [-.25, .85, -.6]], range: 3 }; });
// 79. Llevo meses queriendo pedirte que quedáramos. Pero no me atrevía.
Q(79, (d, a) => { const tn = R0(a, 'atrevia'); return { amb: 'gris', fov: 30, k: 1, atores: [ELP({ x: -1.0, z: -.3, eyes: [[0, 'look'], [tn - .4, 'sad']], pose: (k, u) => (u < tn - .4 ? talkP(k, u) : k.pose({ armL: [20, 10], armR: [20, 10], head: -10 })) })],
  extra: (c) => { const M = ['SEPT', 'OCT', 'NOV', 'DIC'].map((m, i) => cal(c, m, true, .8, [.2 + i * .55, 1.6 + (i % 2) * .15, -.5 + i * .02])); const L = SEQ(c, a, [[['LLEVO MESES…'], 0, 'w', [.9, 2.5, -.4], 1.4], [['NO ME ATREVÍA'], tn - .3, 'p', [.9, 2.5, -.4], 1.5, 1]]); return { update: (u, tt, cam) => { M.forEach((m, i) => pop(m, u, .2 + i * .4, 99, cam)); L(u, cam); } }; },
  c: [[0, 1.6, 4.0], [0, 1.6, -.4], [0, 1.6, 3.5], [0, 1.6, -.4]], range: 3 }; });
// 80. Así que pensé: si lo llamo fiesta, no da tanto miedo. Y si no venías… bueno, por lo menos no era una cita.
Q(80, (d, a) => { const tf = R0(a, 'fiesta'), tv = R0(a, 'venias'), tc = R0(a, 'cita'); return { amb: 'gris', fov: 30, k: 1, atores: [ELP({ x: -1.3, z: -.3, eyes: [[0, 'look'], [tv, 'sad'], [tc, 'smug']], pose: (k) => k.pose({ armL: [12, 8], armR: [110, 120], head: 10 }) })],
  extra: (c) => { const iv = invitacion(c, 1.3); iv.position.set(.9, 1.35, -.6); const P = PSEQ(c, a, [[['SI LO LLAMO FIESTA…'], 'si', [-.3, 2.5, -.4], 1.7], [['NO DA TANTO MIEDO'], 'miedo', [-.3, 2.5, -.4], 1.7], [['Y SI NO VIENE…'], tv - .3, [-.3, 2.5, -.4], 1.5], [['NO ERA UNA CITA'], tc - .5, [-.3, 2.5, -.4], 1.5]]); return { update: (u, tt, cam) => { P(u, cam); pop(iv, u, tf - .2, 99, cam); } }; },
  c: [[0, 1.6, 4.4], [0, 1.6, -.4], [0, 1.6, 3.9], [0, 1.6, -.4]], range: 3 }; });
// 81. Te quedas helado. Las veinte sillas. Los globos. La tarta enorme.
Qs(81, ['veinte'], [
  (d, a) => ({ ...SALON, fov: 28, atores: [YO({ x: .25, z: -.6, ...SUELO, eyes: [[0, 'wide']], pose: (k) => { sitP(k); k.pose({ armL: [12, 8], armR: [12, 8] }); } })],
    extra: (c) => { SUELOX(c); const l = new THREE.PointLight('#9FD0FF', 4, 3, 1.6); l.position.set(.25, 1.4, .4); c.add(l); const t = lab(c, ['TE QUEDAS HELADO'], 1.5, [.25, 1.8, -.5], { bg: '#4A86C7', fg: '#fff' }); return { update: (u, tt, cam) => { pop(t, u, .1, 99, cam); shake(cam, u < .4 ? .01 : 0, u); } }; },
    c: [[.25, 1.0, 1.6], [.25, .85, -.6], [.25, 1.0, 1.4], [.25, .85, -.6]], range: 3 }),
  (d, a) => ({ ...SALON, fov: 38, atores: [],
    extra: (c) => { const F = FIESTA(c, { globos: 20 }); const L = SEQ(c, a, [[['LAS 20 SILLAS'], 0, 'w', [0, 2.6, -.6], 1.5], [['LOS GLOBOS'], 'globos', 'p', [0, 2.6, -.6], 1.3], [['LA TARTA ENORME'], 'tarta', 'y', [0, 2.6, -.6], 1.6, 1]]); return { update: (u, t2, cam) => { F(u); L(u, cam); } }; },
    c: [[0, 3.8, 5.2], [0, .8, -.8], [0, 3.4, 4.6], [0, .8, -.8]], range: 6 }),
]);
// 82. "¿Y las sillas?" "Las puso mi madre. No sabe nada."
Q(82, (d, a) => { const tp = R0(a, 'puso'), tn = R0(a, 'nada'); return { ...SALON, fov: 30, atores: SUELOS({ eyes: [[0, 'wide'], [tn, 'happy']], p2: (k, u) => (u < tp ? talkP(k, u) : k.pose({ armL: [40, 60], armR: [12, 8] })) }, { eyes: [[0, 'look'], [tp, 'smug']], p2: (k, u) => (u > tp ? talkP(k, u) : k.pose({ armL: [12, 8], armR: [40, 60] })) }, .8),
  extra: (c) => { const F = SUELOX(c); const g1 = hab(c, ['¿Y LAS SILLAS?'], 1.1, [.8, 1.8, -.5], 60); const g2 = hab(c, ['LAS PUSO MI MADRE.', 'NO SABE NADA.'], 1.4, [-.8, 1.85, -.5], 50); return { update: (u, t2, cam) => { F(u); pop(g1, u, .05, tp - .2, cam); pop(g2, u, tp - .2, 99, cam); } }; },
  c: CSU, range: 3 }; });
// 83. Los dos os reís tanto que se os saltan las lágrimas.
Q(83, (d, a) => { const tl = R0(a, 'lagrimas'); return { ...SALON, fov: 30, atores: SUELOS({ eyes: [[0, 'happy']], p2: (k, u) => k.pose({ armL: [60, 70], armR: [60, 70], bob: Math.abs(Math.sin(u * 10)) * .03, lean: Math.sin(u * 5) * 8 }) }, { eyes: [[0, 'happy']], p2: (k, u) => k.pose({ armL: [60, 70], armR: [60, 70], bob: Math.abs(Math.sin(u * 10 + 1)) * .03, lean: -Math.sin(u * 5) * 8 }) }, .8),
  extra: (c, s, A) => { const F = SUELOX(c); const j = lab(c, ['¡JAJAJAJA!'], 1.2, [0, 1.95, -.5], PINK); const T = [0, 1, 2, 3].map(() => { const g = glowSprite('#9FD0FF', .1, 0); c.add(g); return g; }); return { update: (u, t2, cam) => { F(u); pop(j, u, .05, 99, cam); T.forEach((g, i) => { const k = A[i % 2]; const p = new THREE.Vector3(); k.head.getWorldPosition(p); const f = (u * .9 + i * .25) % 1; g.position.set(p.x + (i < 2 ? -.15 : .15), p.y - .05 - f * .3, p.z + .3); g.material.opacity = u > tl - .5 ? .9 * (1 - f) : 0; }); } }; },
  c: CSU, range: 3, look: { bloom: .5 } }; });
// 84. 22:00
HORA(84, 22, '22:00', 'LA MADRE');
// 85. Su madre sale de la cocina, os mira, mira los globos con caras, y dice: "Pues sí que ha sido una fiesta pequeña." Y vuelve a entrar. Seguramente lo sabía desde el principio.
Qs(85, ['pues', 'seguramente'], [
  (d, a) => { const tg = R0(a, 'globos'); return { ...SALONN, fov: 34, atores: [MADRE({ x: 1.4, z: -1.2, eyes: [[0, 'look'], [tg, 'wide']], move: (u) => [lerp(3.6, 1.4, smooth(0, 1.5, u)), 0, -1.2], pose: (k, u) => (u < 1.5 ? k.walk(u * 2) : k.pose({ head: u > tg ? 25 : -10 })) }), ...SUELOS({ eyes: [[0, 'look']] }, { eyes: [[0, 'look']] }, .8)],
    extra: (c) => { const F = SUELOX(c); const L = SEQ(c, a, [[['OS MIRA'], 'mira', 'w', [1.4, 2.4, -1.0], .9], [['MIRA LOS GLOBOS'], tg - .3, 'y', [1.4, 2.4, -1.0], 1.4, 1]]); return { update: (u, t2, cam) => { F(u); L(u, cam); } }; },
    c: [[.3, 2.0, 4.2], [.4, 1.0, -1.0], [.3, 1.95, 3.8], [.4, 1.0, -1.0]], range: 5 }; },
  (d, a) => { const tv = R0(a, 'vuelve'); return { ...SALONN, fov: 32, atores: [MADRE({ x: 1.4, z: -1.2, eyes: [[0, 'smug']], move: (u) => [lerp(1.4, 3.8, smooth(tv, tv + 1.4, u)), 0, -1.2], pose: (k, u) => (u > tv ? k.walk(u * 2) : k.pose({ armL: [60, 70], armR: [60, 70] })) }), ...SUELOS({ eyes: [[0, 'look']] }, { eyes: [[0, 'look']] }, .8)],
    extra: (c) => { const F = SUELOX(c); const g = hab(c, ['PUES SÍ QUE HA SIDO', 'UNA FIESTA PEQUEÑA'], 1.6, [1.6, 2.4, -1.2], 50); return { update: (u, t2, cam) => { F(u); pop(g, u, .05, tv, cam); } }; },
    c: [[.4, 1.9, 4.0], [.5, 1.1, -1.0], [.4, 1.85, 3.6], [.5, 1.1, -1.0]], range: 5 }; },
  (d, a) => { const tp = R0(a, 'principio'); return { amb: 'gris', fov: 30, k: 1, atores: [MADRE({ x: 0, z: -.3, eyes: [[0, 'smug']], pose: (k) => k.pose({ armL: [12, 8], armR: [100, 120], head: 8 }) })],
    extra: (c) => { const L = SEQ(c, a, [[['¿LO SABÍA?'], 0, 'w', [0, 2.45, -.3], 1.1], [['DESDE EL PRINCIPIO'], tp - .4, 'y', [0, 2.45, -.3], 1.7, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
    c: [[0, 1.6, 3.4], [0, 1.6, -.3], [0, 1.6, 2.9], [0, 1.6, -.3]], range: 3 }; },
]);
// 86. En la puerta, ella te da un abrazo. Corto. Rápido. "Gracias por quedarte."
Q(86, (d, a) => { const ta = R0(a, 'abrazo'), tg = R0(a, 'gracias'); const hug = (u) => u > ta - .2 && u < tg - .3; return { ...NOCHEB, fov: 30, atores: [ELP({ x: .5, z: -.6, eyes: [[0, 'happy'], [ta, 'shut'], [tg - .3, 'happy']], move: (u) => [hug(u) ? .15 : .5, 0, -.6], pose: (k, u) => (hug(u) ? abrazo(1)(k, u) : k.pose()) }), YO({ x: -.5, z: -.7, eyes: [[0, 'look'], [ta, 'wide'], [tg, 'heart']], move: (u) => [hug(u) ? -.15 : -.5, 0, -.7], pose: (k, u) => (hug(u) ? abrazo(-1)(k, u) : k.pose()) })],
  extra: (c) => { portal(c); calida(c, [0, 2.6, -.5], 3, 5); const L = SEQ(c, a, [[['UN ABRAZO'], ta - .2, 'p', [0, 2.5, -.6], 1.2], [['CORTO'], 'corto', 'w', [0, 2.5, -.6], .8], [['RÁPIDO'], 'rapido', 'w', [0, 2.5, -.6], .9, 1]]); const g = hab(c, ['GRACIAS POR', 'QUEDARTE'], 1.3, [.9, 2.2, -.6], 56); return { update: (u, tt, cam) => { L(u, cam); pop(g, u, tg - .2, 99, cam); } }; },
  c: [[0, 1.6, 2.8], [0, 1.45, -.7], [0, 1.6, 2.4], [0, 1.45, -.7]], range: 3, look: NOCHE }; });
// 87. 23:00
HORA(87, 23, '23:00', 'TU CUARTO');
// 88. Estás en tu cuarto, mirando el techo. Y repasas la tarde entera.
Q(88, (d, a) => { const tr = R0(a, 'repasas'); return { ...NOCHEC, fov: 30, atores: [DORM(YO, { x: -.7, z: -1.0, y: 1.08, eyes: [[0, 'look'], [tr, 'happy']] })],
  extra: (c) => { const t = lw(c, ['REPASAS LA TARDE ENTERA'], 2.0, [-.8, 2.0, -.9]); const b = brillos(c, 12, '#FFB0C0'); return { update: (u, tt, cam) => { pop(t, u, tr - .2, 99, cam); b(u, [-1.0, 1.6, -.9, .9], u > tr ? 1 : 0); } }; },
  c: [[-.6, 2.3, 3.0], [-.8, 1.0, -1.0], [-.6, 2.2, 2.6], [-.8, 1.0, -1.0]], range: 3, look: NLOOK }; });
// 89. Lo del "hola" dos veces. Lo de Paco el globo. Y piensas: ¿le habré caído bien? ¿O solo estaba siendo amable?
Q(89, (d, a) => { const tc = R0(a, 'caido'), ta = R0(a, 'amable'); return { ...NOCHEC, fov: 30, atores: [DORM(YO, { x: -.7, z: -1.0, y: 1.08, eyes: [[0, 'happy'], [tc - .3, 'look']] })],
  extra: (c) => { const g = globoC(c, '#E8667F', { cara: 1, gorro: '#43C4B4', hilo: false }); g.scale.setScalar(.7); const P = PSEQ(c, a, [[['«HOLA. HOLA.»'], 'hola', [-.4, 2.1, -.9], 1.3], [['PACO, EL GLOBO'], 'paco', [-.4, 2.1, -.9], 1.4], [['¿LE HABRÉ CAÍDO BIEN?'], tc - .3, [-.4, 2.1, -.9], 1.8], [['¿O SOLO ERA AMABLE?'], ta - .5, [-.4, 2.1, -.9], 1.7]]); return { update: (u, tt, cam) => { P(u, cam); g.visible = u > R0(a, 'paco') && u < tc - .3; g.position.set(.6, 2.0 + Math.sin(u * 2) * .05, -.9); } }; },
  c: [[-.6, 2.3, 3.0], [-.6, 1.3, -1.0], [-.6, 2.2, 2.6], [-.6, 1.3, -1.0]], range: 3, look: NLOOK }; });
// 90. Pues también hay ciencia para esto. En 2018, Erica Boothby y su equipo, en Estados Unidos, estudiaron qué pasa después de una conversación entre dos personas que no se conocen.
Qs(90, ['estudiaron'], [
  (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [CIENT(3, { x: .8, z: -.4, eyes: [[0, 'happy']], pose: hold })],
    extra: (c) => { const L = SEQ(c, a, [[['¡CIENCIA PARA ESTO!'], 0, 'y', [-.7, 2.3, -.3], 1.8], [['ERICA BOOTHBY'], 'erica', 'w', [-.7, 2.3, -.3], 1.5, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
    c: [[0, 1.6, 4.0], [0, 1.5, -.4], [0, 1.6, 3.5], [0, 1.5, -.4]], range: 3 }),
  (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [EXTRA(2, { x: -.7, z: -.4, eyes: [[0, 'look']], pose: (k, u) => (Math.floor(u) % 2 ? talkP(k, u) : k.pose()) }), EXTRA(4, { x: .7, z: -.4, eyes: [[0, 'lookl']], pose: (k, u) => (Math.floor(u) % 2 ? k.pose() : talkP(k, u)) })],
    extra: (c) => { const L = SEQ(c, a, [[['UNA CONVERSACIÓN'], 'conversacion', 'w', [0, 2.4, -.3], 1.8], [['ENTRE DESCONOCIDOS'], 'personas', 'y', [0, 2.4, -.3], 1.9, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
    c: [[0, 1.6, 4.0], [0, 1.5, -.4], [0, 1.6, 3.5], [0, 1.5, -.4]], range: 3 }),
]);
// 91. Casi siempre, cada uno pensaba que le había caído al otro peor de lo que le había caído en realidad. Lo llamaron la brecha del agrado. Le caemos mejor a la gente de lo que creemos.
Qs(91, ['llamaron'], [
  (d, a) => { const tr = R0(a, 'realidad'); return { amb: 'gris', fov: 32, k: 1, atores: [EXTRA(2, { x: -1.6, z: -.4, eyes: [[0, 'sad']] }), EXTRA(4, { x: 1.6, z: -.4, eyes: [[0, 'sad']] })],
    extra: (c) => { const p1 = piensa(c, ['NO LE HE', 'CAÍDO BIEN'], 1.2, [-1.4, 2.4, -.4], { size: 54 }), p2 = piensa(c, ['NO LE HE', 'CAÍDO BIEN'], 1.2, [1.4, 2.4, -.4], { size: 54, tail: 'right' }); const b = barras(c, [['LO QUE\nCREES', .35, '#8AA8C8'], ['LA\nREALIDAD', .85, '#E8667F']], 1.8, [0, 1.45, -.5], { title: 'CUÁNTO GUSTAS' }); return { update: (u, tt, cam) => { pop(p1, u, .2, 99, cam); pop(p2, u, .5, 99, cam); pop(b, u, tr - .5, 99, cam); } }; },
    c: [[0, 1.65, 4.6], [0, 1.6, -.4], [0, 1.65, 4.1], [0, 1.6, -.4]], range: 3 }; },
  (d, a) => { const tm = R0(a, 'caemos'); return { amb: 'gris', fov: 30, k: 1, atores: [],
    extra: (c) => { const t1 = lab(c, ['LA BRECHA DEL AGRADO'], 2.2, [0, 1.95, -.4], ORO); const t2 = lw(c, ['LE CAEMOS MEJOR A LA GENTE', 'DE LO QUE CREEMOS'], 2.4, [0, 1.1, -.4], { h: 260 }); const b = brillos(c, 12, '#FFE27A'); return { update: (u, tt, cam) => { pop(t1, u, .05, 99, cam); pop(t2, u, tm - .2, 99, cam); b(u, [0, 1.6, -.3, 1.4]); } }; },
    c: [[0, 1.55, 3.6], [0, 1.55, -.4], [0, 1.55, 3.1], [0, 1.55, -.4]], range: 3 }; },
]);
// 92. Y justo en ese momento, vibra el móvil. Es ella.
Q(92, (d, a) => { const tv = R0(a, 'vibra'), te = R0(a, 'ella'); return { ...NOCHEC, fov: 30, atores: [DORM(YO, { x: -.7, z: -1.0, y: 1.08, eyes: [[0, 'happy'], [tv + .2, 'wide'], [te, 'heart']] })],
  extra: (c) => { const ph = movil(['ELLA ♥'], { hora: '23:14' }); ph.rotation.x = -Math.PI / 2 + .3; ph.scale.setScalar(.35); ph.position.set(.0, 1.3, -.8); c.add(ph); const l = new THREE.PointLight('#9FC0FF', 0, 2, 1.6); l.position.set(0, 1.7, -.6); c.add(l); const t = lab(c, ['¡BZZZ!'], .8, [.3, 1.9, -.8], RED); const t2 = lab(c, ['ES ELLA'], .9, [-.6, 2.0, -.9], PINK); return { update: (u, tt, cam) => { const on = u > tv; ph.position.x = (on && (u * 10) % 1 < .5 ? .015 : 0); l.intensity = on ? 2.5 : 0; pop(t, u, tv, te - .2, cam); pop(t2, u, te - .1, 99, cam); } }; },
  c: [[-.4, 2.3, 3.0], [-.4, 1.1, -1.0], [-.4, 2.2, 2.6], [-.4, 1.1, -1.0]], range: 3, look: NLOOK }; });
// 93. "Paco dice que quiere repetir. ¿El sábado que viene?" Y una foto: el globo con cara, con su gorro de fiesta, sentado en su cama.
Q(93, (d, a) => { const tp = R0(a, 'paco'), ts = R0(a, 'sabado'), tf = R0(a, 'foto'); return { amb: 'gris', fov: 28, k: 1, atores: [],
  extra: (c) => { const ch = chat(c, [-.4, 1.5, -.5], 1.15, [['l', 'Paco dice que quiere repetir.', tp - .2], ['l', '¿El sábado que viene?', ts - .3], ['l', '[ FOTO ]', tf]], { hora: '23:14', name: 'ELLA ♥' }); const ft = fotoM(c, fotoPacoT(), 1.3); ft.position.set(1.1, 1.65, -.3); const t = lw(c, ['PACO, EN SU CAMA'], 1.4, [1.1, .95, -.2]); return { update: (u, tt, cam) => { ch.userData.upd(u); pop(ft, u, tf + .2, 99, cam); pop(t, u, R0(a, 'sentado') - .3, 99, cam); } }; },
  c: [[.2, 1.5, 4.3], [.2, 1.5, -.5], [.2, 1.5, 3.8], [.2, 1.5, -.5]], range: 2, blur: 4 }; });
// 94. Contestas: "Dile a Paco que sí. Pero esta vez sin sillas vacías."
Q(94, (d, a) => { const td = R0(a, 'dile'); return { amb: 'gris', fov: 28, k: 1, atores: [],
  extra: (c) => { const ch = chat(c, [-.4, 1.5, -.5], 1.15, [['l', 'Paco dice que quiere repetir.', 0], ['l', '¿El sábado que viene?', 0], ['r', 'Dile a Paco que sí. Pero esta vez sin sillas vacías.', td - .2]], { hora: '23:15', name: 'ELLA ♥' }); const h = corazon(c, .5); h.position.set(1.1, 1.8, -.3); const b = brillos(c, 12, '#FFB0C0'); return { update: (u, tt, cam) => { ch.userData.upd(u); h.visible = u > td + 1; h.scale.setScalar(latido(u)); b(u, [.3, 1.6, -.3, 1.3], u > td + 1 ? 1 : 0); } }; },
  c: [[.2, 1.5, 4.3], [.2, 1.5, -.5], [.2, 1.5, 3.8], [.2, 1.5, -.5]], range: 2, blur: 4 }; });
// 95. 08:00 LUNES
HORA(95, 8, '08:00', 'LUNES');
// 96. Llegas al instituto con miedo. ¿Y si alguien sabe lo de la fiesta? ¿Y si se ríen de ella?
Q(96, (d, a) => ({ amb: 'pasillo', fov: 30, atores: [YO({ x: 0, z: -.4, eyes: [[0, 'look'], [1.2, 'lookl'], [2.4, 'look'], [3.6, 'sad']], move: (u) => [0, 0, lerp(.6, -.4, smooth(0, 3, u))], pose: (k, u) => (u < 3 ? k.walk(u * 1.4) : k.pose({ armL: [20, 10], armR: [20, 10] })) })],
  extra: (c) => { const P = PSEQ(c, a, [[['¿Y SI ALGUIEN LO SABE?'], 'alguien', [.5, 2.4, -.4], 1.7], [['¿Y SI SE RÍEN DE ELLA?'], 'rien', [.5, 2.4, -.4], 1.7]]); const t = lw(c, ['CON MIEDO'], 1.1, [0, .5, .2]); return { update: (u, tt, cam) => { P(u, cam); pop(t, u, R0(a, 'miedo') - .2, R0(a, 'alguien'), cam); } }; },
  c: [[0, 1.6, 3.4], [0, 1.45, -.5], [0, 1.6, 3.0], [0, 1.45, -.5]], range: 3 }));
// 97. Pero no pasa nada. Nadie dice nada. Tu mejor amigo solo te pregunta si has hecho los deberes de mates.
Q(97, (d, a) => { const ta = R0(a, 'amigo'); return { amb: 'pasillo', fov: 34, atores: [EXTRA(0, { x: -2.2, z: -.8, eyes: [[0, 'happy']], pose: talkP }), EXTRA(1, { x: -1.4, z: -1.0, eyes: [[0, 'lookl']] }), YO({ x: 0, z: -.2, eyes: [[0, 'look'], [ta, 'happy']] }), AMIGO({ x: .9, z: -.4, eyes: [[0, 'look']], move: (u) => [lerp(2.6, .9, smooth(ta - .8, ta + .4, u)), 0, -.4], pose: (k, u) => (u < ta + .4 ? k.walk(u * 2) : talkP(k, u)) }), EXTRA(3, { x: 2.3, z: -1.2, eyes: [[0, 'lookl']], pose: talkP })],
  extra: (c) => { const L = SEQ(c, a, [[['NO PASA NADA'], 0, 'w', [0, 2.6, -.4], 1.4], [['NADIE DICE NADA'], 'nadie', 'y', [0, 2.6, -.4], 1.6, 1]]); const g = hab(c, ['¿HAS HECHO LOS', 'DEBERES DE MATES?'], 1.5, [1.4, 2.2, -.4], 52); return { update: (u, tt, cam) => { L(u, cam); pop(g, u, R0(a, 'deberes') - .8, 99, cam); } }; },
  c: [[0, 1.65, 4.0], [0, 1.45, -.5], [0, 1.65, 3.6], [0, 1.45, -.5]], range: 3 }; });
// 98. Gilovich tenía razón: nadie estaba pensando en vosotros. Bueno, casi nadie.
Q(98, (d, a) => { const tc = R0(a, 'casi'); const P = [[-2.0, -1.0], [-1.1, -1.6], [1.1, -1.6]]; const TH = ['¿Y EL PARTIDO?', 'MIS DEBERES…', '¿HAY EXAMEN?']; return { amb: 'gris', fov: 34, k: 1, atores: [YO({ x: 0, z: -.2, eyes: [[0, 'look'], [tc, 'happy']] }), ...P.map(([x, z], i) => EXTRA(i + 3, { x, z, eyes: [[0, 'flat']], pose: (k) => k.pose({ head: i % 2 ? 15 : -15 }) })), ELA({ x: 2.0, z: -1.0, eyes: [[0, 'lookl'], [tc, 'heart']], pose: (k, u) => (u > tc ? wave(k, u) : k.pose()) })],
  extra: (c) => { foco(c, 0, -.2); const T = P.map(([x, z], i) => piensa(c, [TH[i]], 1.0, [x, 2.1, z + .1], { size: 54 })); const h = corazon(c, .35); h.position.set(2.0, 2.2, -1.0); const L = SEQ(c, a, [[['GILOVICH TENÍA RAZÓN'], 0, 'y', [0, 2.8, -.4], 2.0], [['NADIE PENSABA EN VOSOTROS'], 'nadie', 'w', [0, 2.8, -.4], 2.3], [['BUENO… CASI NADIE'], tc - .2, 'p', [0, 2.8, -.4], 1.8, 1]]); return { update: (u, tt, cam) => { L(u, cam); T.forEach((m, i) => pop(m, u, .4 + i * .3, tc - .2, cam)); h.visible = u > tc; h.scale.setScalar(latido(u)); pointer(h, cam); } }; },
  c: [[0, 1.8, 5.0], [0, 1.4, -.8], [0, 1.75, 4.5], [0, 1.4, -.8]], range: 4, look: { vig: .6 } }; });
// 99. En el recreo, ella se sienta a tu lado en el banco. Lleva puestos los auriculares de gato.
const SB = -.28;
Q(99, (d, a) => { const ts = R0(a, 'sienta'), ta = R0(a, 'auriculares'); return { amb: 'jardin', fov: 30, atores: [YO({ x: -.45, z: -.5, y: SB, eyes: [[0, 'look'], [ts + .6, 'happy']], pose: (k) => { sitP(k); k.pose({ head: -8 }); } }), ELA({ x: .45, z: -.5, eyes: [[0, 'happy']], move: (u) => (u < ts + .2 ? [lerp(2.6, .45, smooth(0, ts + .2, u)), 0, -.2] : [.45, SB, -.5]), pose: (k, u) => { aurisK(k); if (u < ts + .2) k.walk(u * 2); else sitP(k); } })],
  extra: (c) => { bancoP(c, 0, -.5); const L = SEQ(c, a, [[['EL RECREO'], 0, 'w', [0, 2.3, -.4], 1.1], [['SE SIENTA A TU LADO'], ts, 'p', [0, 2.3, -.4], 1.8], [['¡LOS AURICULARES DE GATO!'], ta, 'y', [0, 2.3, -.4], 2.3, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[0, 1.5, 3.2], [0, 1.2, -.5], [0, 1.45, 2.8], [0, 1.2, -.5]], range: 3, look: { bloom: .4 } }; });
// 100. Y en la mochila, colgado de la cremallera, un llavero nuevo. Un globo pequeñito. Con una cara pintada.
Q(100, (d, a) => { const tl = R0(a, 'llavero'), tg = R0(a, 'globo'), tc = R0(a, 'cara'); return { amb: 'jardin', fov: 28, atores: [],
  extra: (c) => { bancoP(c, 0, -.5); const mo = mochila(c, '#E8A86A'); mo.position.set(.3, .54, -.45); const ll = llavero(c); const L = SEQ(c, a, [[['UN LLAVERO NUEVO'], tl, 'w', [.3, 1.6, -.3], 1.4], [['UN GLOBO PEQUEÑITO'], tg, 'p', [.3, 1.6, -.3], 1.6], [['CON UNA CARA PINTADA'], tc, 'y', [.3, 1.6, -.3], 1.8, 1]]); return { update: (u, tt, cam) => { ll.position.set(.42, .95 + Math.sin(u * 3) * .02, -.28); ll.rotation.z = Math.sin(u * 3) * .3; L(u, cam); } }; },
  c: [[.3, 1.15, 1.2], [.35, .9, -.4], [.33, 1.1, .9], [.38, .9, -.4]], range: 2 }; });
// 101. Tu amigo os mira. Luego te mira a ti. Y dice: "Vale. Tú me tienes que contar algo."
Q(101, (d, a) => { const tl = R0(a, 'luego'), tv = R0(a, 'vale'); return { amb: 'jardin', fov: 32, atores: [YO({ x: -.45, z: -.5, y: SB, eyes: [[0, 'happy'], [tv + 1, 'look']], pose: (k) => { sitP(k); } }), ELA({ x: .45, z: -.5, y: SB, eyes: [[0, 'happy']], pose: (k) => { aurisK(k); sitP(k); } }), AMIGO({ x: 1.7, z: .1, eyes: [[0, 'lookl'], [tl, 'smug']], pose: (k, u) => (u > tv ? k.pose({ armL: [12, 8], armR: [95, 0] }) : k.pose({ armL: [60, 70], armR: [60, 70] })) })],
  extra: (c) => { bancoP(c, 0, -.5); const t = lw(c, ['TU AMIGO OS MIRA'], 1.6, [1.7, 2.4, .1]); const g = hab(c, ['VALE. TÚ ME TIENES', 'QUE CONTAR ALGO'], 1.6, [1.5, 2.3, .1], 50); return { update: (u, tt, cam) => { pop(t, u, .05, tv - .2, cam); pop(g, u, tv - .2, 99, cam); } }; },
  c: [[.4, 1.6, 3.8], [.4, 1.25, -.3], [.4, 1.55, 3.4], [.4, 1.25, -.3]], range: 3, look: { bloom: .4 } }; });
// 102. Y sonríes. Porque esa historia, de momento, es solo vuestra.
Q(102, (d, a) => { const tv = R0(a, 'vuestra'); return { amb: 'jardin', fov: 30, atores: [YO({ x: -.45, z: -.5, y: SB, eyes: [[0, 'happy']], pose: (k) => sitP(k) }), ELA({ x: .45, z: -.5, y: SB, eyes: [[0, 'happy']], pose: (k) => { aurisK(k); sitP(k); } })],
  extra: (c) => { bancoP(c, 0, -.5); const l = llavero(c); l.position.set(1.0, 1.3, -.4); const t0 = lw(c, ['Y SONRÍES'], 1.0, [0, 2.2, -.4]); const t = lab(c, ['SOLO VUESTRA'], 1.4, [0, 2.2, -.4], PINK); const b = brillos(c, 12, '#FFB0C0'); return { update: (u, tt, cam) => { pop(t0, u, .05, tv - .5, cam); pop(t, u, tv - .5, 99, cam); b(u, [0, 1.3, -.4, .9]); flota(l, u, 0, 1.3, .04); } }; },
  c: [[0, 1.45, 3.0], [0, 1.15, -.5], [0, 1.4, 2.5], [0, 1.15, -.5]], range: 3, look: { bloom: .45 } }; });
// 103. Al final, la peor fiesta del mundo fue la mejor tarde de tu vida.
Q(103, (d, a) => { const tm = R0(a, 'mejor'); return { ...SALONN, fov: 36, atores: [ELP({ x: -.5, z: -.6, eyes: [[0, 'happy']], pose: (k, u) => dance(k, u) }), YO({ x: .5, z: -.6, eyes: [[0, 'happy']], pose: (k, u) => dance(k, u + 1) })],
  extra: (c) => { const F = FIESTA(c, { globos: 20 }); const t1 = lab(c, ['LA PEOR FIESTA DEL MUNDO'], 2.3, [0, 2.6, -.6], RED); const t2 = lab(c, ['LA MEJOR TARDE DE TU VIDA'], 2.4, [0, 2.6, -.6], ORO); const b = brillos(c, 16, '#FFE27A'); return { update: (u, t2x, cam) => { F(u); pop(t1, u, .1, tm - .3, cam); pop(t2, u, tm - .3, 99, cam); b(u, [0, 1.8, -.8, 2.0], u > tm ? 1 : 0); } }; },
  c: [[0, 2.0, 4.4], [0, 1.4, -1.0], [0, 1.95, 3.9], [0, 1.4, -1.0]], range: 5, look: { bloom: .5 } }; });
// 104. Porque a veces, la persona que te gusta tiene tanto miedo como tú. Y solo hace falta que uno de los dos se atreva.
Q(104, (d, a) => { const tm = R0(a, 'miedo'), ta = R0(a, 'atreva'); return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: -.8, z: -.3, eyes: [[0, 'sad'], [ta - .3, 'happy']], move: (u) => [lerp(-.8, -.35, smooth(ta - .5, ta + .5, u)), 0, -.3], pose: (k) => k.pose({ head: 10 }) }), ELA({ x: .8, z: -.3, eyes: [[0, 'sad'], [ta - .3, 'heart']], move: (u) => [lerp(.8, .35, smooth(ta - .5, ta + .5, u)), 0, -.3], pose: (k) => k.pose({ head: -10 }) })],
  extra: (c) => { const p1 = piensa(c, ['MIEDO'], .8, [-1.2, 2.2, -.4], { size: 64 }), p2 = piensa(c, ['MIEDO'], .8, [1.2, 2.2, -.4], { size: 64, tail: 'right' }); const t = lab(c, ['ATRÉVETE'], 1.3, [0, 2.6, -.3], ORO); const h = corazon(c, .45); h.position.set(0, 1.9, -.2); const t0 = lw(c, ['TANTO MIEDO COMO TÚ'], 1.9, [0, 2.6, -.3]); return { update: (u, tt, cam) => { pop(p1, u, tm - .3, ta - .3, cam); pop(p2, u, tm, ta - .3, cam); pop(t0, u, tm - .2, ta - .4, cam); pop(t, u, ta - .3, 99, cam); h.visible = u > ta; h.scale.setScalar(latido(u)); pointer(h, cam); } }; },
  c: [[0, 1.6, 4.0], [0, 1.6, -.4], [0, 1.6, 3.5], [0, 1.6, -.4]], range: 3 }; });
// 105. Y tú, ¿qué habrías hecho? ¿Te habrías quedado o te habrías ido? Te leo en los comentarios.
Q(105, (d, a) => { const tq = R0(a, 'quedado'), ti = R0(a, 'ido'), tl = R0(a, 'leo'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const g = globoC(c, '#E8667F', { cara: 1, gorro: '#43C4B4' }); g.position.set(0, 1.7, -.5); const q = lab(c, ['¿Y TÚ QUÉ HABRÍAS HECHO?'], 2.3, [0, 2.65, -.4], { bg: '#1E2230', fg: '#F2C14E' }); const a1 = lab(c, ['QUEDARTE'], 1.1, [-1.5, 1.0, -.2], VERDE); const a2 = lab(c, ['IRTE'], .8, [1.5, 1.0, -.2], RED); const cm = lw(c, ['TE LEO EN LOS COMENTARIOS'], 2.3, [0, 2.65, -.4]); return { update: (u, tt, cam) => { flota(g, u, 0, 1.7, .08); pop(q, u, .1, tl - .2, cam); pop(a1, u, tq - .3, 99, cam); pop(a2, u, ti - .2, 99, cam); pop(cm, u, tl - .2, 99, cam); } }; },
  c: [[0, 1.6, 4.4], [0, 1.6, -.4], [0, 1.6, 3.9], [0, 1.6, -.4]], range: 3, look: { bloom: .45 } }; });
