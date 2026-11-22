// "¿Y si tu crush te tocara de pareja en el viaje de fin de curso?" — horizontal 1280x720, ~10:38
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
const Q = (i, fn) => { const a = S[i], b = end(i), d = Math.min(b, 638.0) - a; CENAS.push([(x, y) => plano(x, y, mk(fn(d, a), d)), a, b]); };
const Qt = (a, b, fn) => { const d = Math.min(b, 638.0) - a; CENAS.push([(x, y) => plano(x, y, mk(fn(d, a), d)), a, b]); };
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
// ===================== CENAS 0–41 =====================
const CA = [[0, 1.8, 4.6], [0, 1.5, -1.0], [0, 1.75, 4.1], [0, 1.5, -1.0]];
const PAREJAS = ['TU AMIGO + EL DEL CHICLE', 'DELEGADA + EL VAGO', 'TÚ + …', '', '', '', ''];
// 0. Último mes de clase.
Q(0, (d, a) => ({ ...AULA(), atores: [YO({ x: -.4, z: .6, eyes: [[0, 'flat']], pose: (k, u) => k.pose({ head: Math.sin(u * 2) * 5 }) }), EXTRA(1, { x: 1.4, z: .6, eyes: [[0, 'shut']] }), ELA({ x: -2.1, z: .6, eyes: [[0, 'look']] })],
  extra: (c) => { pupitres(c, [-2.1, -.4, 1.4], 1.1); const t = lab(c, ['ÚLTIMO MES DE CLASE'], 2.2, [0, 2.35, .6], OSC); return { update: (u, tt, cam) => pop(t, u, .1, 99, cam) }; },
  c: [[0, 1.8, 4.4], [0, 1.5, .6], [0, 1.75, 3.9], [0, 1.5, .6]], range: 4 }));
// 1. La tutora entra con una hoja en la mano.
Q(1, (d, a) => ({ ...AULA(), atores: [TUTORA({ x: 1.0, z: -1.4, move: (u) => [lerp(3.2, .6, smooth(0, 2.2, u)), 0, -1.4], eyes: [[0, 'look']], pose: (k, u) => (u < 2.2 ? k.walk(u * 2) : k.pose({ armL: [12, 8], armR: [70, 40] })) })],
  extra: (c, s, A) => { const h = hoja(c); const t = lab(c, ['LA TUTORA'], 1.2, [0, 2.6, -1.2], OSC); const t2 = lw(c, ['UNA HOJA'], 1.0, [1.3, 1.7, -1.0]); return { update: (u, tt, cam) => { const p = hand(A[0]); h.position.set(p.x, p.y + .05, p.z + .12); pop(t, u, .2, 99, cam); pop(t2, u, R0(a, 'hoja'), 99, cam); } }; },
  c: [[0, 1.8, 4.4], [.8, 1.4, -1.4], [0, 1.75, 3.9], [.6, 1.4, -1.4]], range: 4 }));
// 2. "Atención. Para el viaje de fin de curso, cada uno tendrá una pareja."
Q(2, (d, a) => { const tv = R0(a, 'viaje'), tp = R0(a, 'pareja'); return { ...AULA(), atores: [TUTORA({ x: .6, z: -1.4, talk: [[0, d]], eyes: [[0, 'look']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [110 + Math.sin(u * 5) * 10, 30] }) })],
  extra: (c) => { const g = hab(c, ['¡ATENCIÓN!'], .9, [1.4, 2.4, -1.3], 70); const L = SEQ(c, a, [[['VIAJE DE FIN DE CURSO'], tv, 'y', [-.8, 2.55, -1.3], 2.2], [['CADA UNO, UNA PAREJA'], tp - .2, 'p', [-.8, 2.55, -1.3], 2.0, 1]]); return { update: (u, tt, cam) => { pop(g, u, 0, tv - .2, cam); L(u, cam); } }; },
  c: [[0, 1.8, 4.2], [0, 1.6, -1.4], [0, 1.75, 3.8], [0, 1.6, -1.4]], range: 4 }; });
// 3. Os sentaréis juntos en el autobús, haréis juntos todas las actividades y, si alguien se pierde, la culpa es de los dos.
Q(3, (d, a) => ({ ...AULA(), atores: [TUTORA({ x: 1.6, z: -1.4, talk: [[0, d]], eyes: [[0, 'look']], pose: talkP }), EXTRA(0, { x: -1.6, z: .4, eyes: [[0, 'look'], [R0(a, 'culpa'), 'wide']] }), EXTRA(3, { x: -.4, z: .4, eyes: [[0, 'look'], [R0(a, 'culpa'), 'wide']] })],
  extra: (c) => { pupitres(c, [-1.6, -.4], 1.0); const P = [-.3, 2.45, -.4]; const L = SEQ(c, a, [[['JUNTOS EN EL AUTOBÚS'], 'autobus', 'w', P, 2.0], [['JUNTOS EN TODO'], 'actividades', 'y', P, 1.5], [['SI ALGUIEN SE PIERDE…'], 'pierde', 'w', P, 1.9], [['LA CULPA ES DE LOS DOS'], 'culpa', 'r', P, 2.1, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: CA, range: 4 }));
// 4. Empieza a leer los nombres.
Q(4, (d, a) => ({ amb: 'gris', fov: 28, k: 1, atores: [],
  extra: (c) => { const m = lista(c, PAREJAS, 1.6, [0, 1.55, -.6]); calida(c, [0, 2.2, 1.2], 5, 6); return { update: (u) => { m.rotation.z = Math.sin(u) * .02; } }; },
  c: [[0, 1.4, 3.4], [0, 1.6, -.6], [0, 1.45, 2.6], [0, 1.7, -.6]], range: 3 }));
// 5. Tu mejor amigo, con el chico que siempre huele a chicle de fresa.
Q(5, (d, a) => { const tc = R0(a, 'chicle'); return { ...AULA(), atores: [AMI({ x: -.5, z: .2, eyes: [[0, 'flat']], pose: (k) => k.pose({ armL: [12, 8], armR: [12, 8] }) }), EXTRA(5, { x: .5, z: .2, eyes: [[0, 'happy']] })],
  extra: (c, s, A) => { const bb = new THREE.Mesh(new THREE.SphereGeometry(.16, 20, 14), std('#F29AB0', { roughness: .3 })); c.add(bb); const L = SEQ(c, a, [[['TU MEJOR AMIGO'], 0, 'w', [-.5, 2.05, .2], 1.4], [['HUELE A CHICLE DE FRESA'], tc - .3, 'p', [0, 2.1, .2], 2.1, 1]]); const v = new THREE.Vector3();
    return { update: (u, tt, cam) => { A[1].head.getWorldPosition(v); const k = smooth(tc, tc + 1.2, u); bb.position.set(v.x, v.y - .14, v.z + .3); bb.scale.setScalar(.05 + k * (u > tc + 2.4 ? 0 : 1)); L(u, cam); } }; },
  c: [[0, 1.7, 3.4], [0, 1.4, .2], [0, 1.65, 2.9], [0, 1.4, .2]], range: 3 }; });
// 6. La delegada, con el que nunca hace los deberes.
Q(6, (d, a) => { const tn = R0(a, 'nunca'); return { ...AULA(), atores: [EXTRA(6, { x: -.5, z: .2, eyes: [[0, 'smug']], pose: (k) => k.pose({ armL: [60, 70], armR: [60, 70] }) }), EXTRA(4, { x: .55, z: .2, eyes: [[0, 'shut']], pose: (k) => k.pose({ head: 18 }) })],
  extra: (c) => { const L = SEQ(c, a, [[['LA DELEGADA'], 0, 'y', [-.5, 2.05, .2], 1.2], [['NUNCA HACE LOS DEBERES'], tn - .2, 'r', [.3, 2.1, .2], 2.1, 1]]); const z = zzz(c); return { update: (u, tt, cam) => { L(u, cam); z(u, [.8, 1.9, .2], cam, u > tn); } }; },
  c: [[0, 1.7, 3.4], [0, 1.4, .2], [0, 1.65, 2.9], [0, 1.4, .2]], range: 3 }; });
// 7. Y entonces dice tu nombre.
Q(7, (d, a) => { const tn = R0(a, 'nombre'); return { ...AULA(), atores: [YO({ x: 0, z: .4, eyes: [[0, 'look'], [tn, 'wide']], move: (u) => [0, u > tn && u < tn + .4 ? Math.sin((u - tn) / .4 * Math.PI) * .15 : 0, .4] })],
  extra: (c) => { pupitres(c, [0], 1.0); const t = lab(c, ['¡TU NOMBRE!'], 1.3, [0, 2.02, .4], RED); return { update: (u, tt, cam) => pop(t, u, tn, 99, cam) }; },
  c: [[0, 1.6, 3.0], [0, 1.45, .4], [0, 1.55, 2.4], [0, 1.45, .4]], range: 2.5 }; });
// 8. Y justo después… dice el suyo.
Q(8, (d, a) => { const ts = R0(a, 'suyo'); return { ...AULA(), atores: [TUTORA({ x: 0, z: -1.4, talk: [[ts - .3, d]], eyes: [[0, 'look']], pose: (k) => k.pose({ armL: [12, 8], armR: [70, 40] }) })],
  extra: (c, s, A) => { const h = hoja(c); const t = lab(c, ['…Y EL SUYO'], 1.3, [0, 2.12, -1.2], PINK); return { update: (u, tt, cam) => { const p = hand(A[0]); h.position.set(p.x, p.y + .05, p.z + .12); pop(t, u, ts - .1, 99, cam); } }; },
  c: [[0, 1.7, 3.0], [0, 1.6, -1.4], [0, 1.68, 1.6], [0, 1.62, -1.4]], range: 3, look: { vig: .6 } }; });
// 9. El de tu crush.
Q(9, (d, a) => ({ ...AULA(), atores: [ELA({ x: .2, z: .3, eyes: [[0, 'look'], [.6, 'happy']], pose: (k, u) => k.pose({ head: lerp(0, -15, smooth(0, .6, u)) }) })],
  extra: (c) => { pupitres(c, [.2], 1.0); const t = lab(c, ['TU CRUSH'], 1.1, [.2, 2.08, .3], PINK); const h = corazon(c, .35); h.position.set(.95, 1.85, .3); return { update: (u, tt, cam) => { pop(t, u, .1, 99, cam); h.scale.setScalar(latido(u, 140)); pointer(h, cam); } }; },
  c: [[.2, 1.6, 2.8], [.2, 1.45, .3], [.2, 1.55, 2.3], [.2, 1.45, .3]], range: 2.5 }));
// 10. Cinco días. Un autobús. Un albergue en la montaña. Y la persona que te gusta pegada a ti todo el tiempo.
Q(10, (d, a) => { const tp = R0(a, 'persona'); return { amb: 'albergue', fov: 32, atores: [YO({ x: -.35, z: .4, eyes: [[0, 'look'], [tp, 'heart']] }), ELA({ x: .35, z: .4, eyes: [[0, 'happy']], move: (u) => [lerp(1.6, .35, smooth(tp, tp + 1, u)), 0, .4], pose: (k, u) => (u > tp && u < tp + 1 ? k.walk(u * 2) : k.pose()) })],
  extra: (c) => { const P = [0, 2.5, .4]; const L = SEQ(c, a, [[['5 DÍAS'], 0, 'y', P, 1.0], [['UN AUTOBÚS'], 'autobus', 'w', P, 1.3], [['UN ALBERGUE EN LA MONTAÑA'], 'albergue', 'y', P, 2.4], [['PEGADA A TI TODO EL TIEMPO'], 'pegada', 'p', P, 2.4, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[0, 1.8, 4.6], [0, 1.4, -.4], [0, 1.7, 3.8], [0, 1.4, -.4]], range: 5 }; });
// 11. Suscríbete. Y ahora sí. Vamos allá.
Q(11, (d, a) => { const ts = R0(a, 'suscribete'), tv = R0(a, 'vamos'); return { ...DIA, fov: 32, atores: [YO({ x: -1.0, z: -.3, eyes: [[0, 'look'], [ts, 'happy']], pose: (k, u) => (u > ts ? wave(k, u) : k.pose()) })],
  extra: (c) => { const sb = suscribe(2.4); sb.position.set(.7, 1.8, -1.0); c.add(sb); const b = brillos(c, 14, '#FFE27A'); const q = lw(c, ['¿Y SI…?'], 1.0, [-1.0, 2.3, -.3]); const v = lab(c, ['¡VAMOS ALLÁ!'], 1.4, [-1.0, 2.3, -.3], ROSA); return { update: (u, t, cam) => { pop(q, u, .2, tv - .2, cam); pop(v, u, tv - .2, 99, cam); const k2 = smooth(ts - .3, ts, u) * (1 - smooth(tv - .4, tv, u)); sb.scale.setScalar(Math.max(.01, k2)); b(u, [.7, 1.8, -.9, 1.1], k2); } }; },
  c: [[0, 1.7, 3.8], [0, 1.5, -.6], [0, 1.65, 3.2], [0, 1.5, -.6]], range: 3 }; });
// 12. Esa noche no duermes.
Q(12, (d, a) => ({ ...NOCHEC, fov: 30, atores: [DORM(YO, { x: -.7, z: -1.0, y: 1.08, eyes: [[0, 'wide']] })],
  extra: (c) => { const t = lab(c, ['NO DUERMES'], 1.2, [-.4, 1.95, -.8], OSC); return { update: (u, tt, cam) => pop(t, u, .3, 99, cam) }; },
  c: [[-.6, 2.3, 3.0], [-.8, 1.0, -1.0], [-.6, 2.2, 2.6], [-.8, 1.0, -1.0]], range: 3, look: NLOOK }));
// 13. Haces la maleta tres veces. Metes tu sudadera favorita. La sacas. La vuelves a meter.
Q(13, (d, a) => { const tm = R0(a, 'metes'), ts = R0(a, 'sacas'), tv = R0(a, 'vuelves'); return { ...NOCHEC, fov: 32, atores: [YO({ x: -.9, z: -.3, eyes: [[0, 'look'], [ts, 'flat'], [tv, 'look']], pose: (k, u) => k.pose({ armL: [60, 60], armR: [u > tm && u < tm + .6 || u > ts && u < ts + .6 || u > tv && u < tv + .6 ? 120 : 60, 40] }) })],
  extra: (c) => { const ml = maleta(c); ml.position.set(.3, 0, -.2); const sd = sudadera(c, .55); const L = SEQ(c, a, [[['LA MALETA: 3 VECES'], 0, 'w', [0, 2.12, -.3], 1.9], [['TU SUDADERA FAVORITA'], tm, 'y', [0, 2.12, -.3], 2.0], [['LA SACAS'], ts, 'r', [0, 2.12, -.3], 1.1], [['LA VUELVES A METER'], tv, 'p', [0, 2.12, -.3], 1.8, 1]]);
    return { update: (u, tt, cam) => { const out = u > ts && u < tv ? 1 : 0; const k = u < tm ? 0 : smooth(tm, tm + .6, u) * (1 - smooth(ts, ts + .6, u)) + smooth(tv, tv + .6, u); sd.visible = u > tm - .2; sd.position.set(.3, lerp(1.8, .45, k), -.2 + (1 - k) * .2); sd.rotation.z = out ? Math.sin(u * 3) * .3 : 0; L(u, cam); } }; },
  c: [[-.2, 1.7, 3.4], [-.2, 1.2, -.3], [-.2, 1.65, 3.0], [-.2, 1.2, -.3]], range: 3, look: NLOOK }; });
// 14. Y te descargas en el móvil tres horas de música, por si ella te pregunta qué escuchas.
Q(14, (d, a) => { const tt0 = R0(a, 'tres'), tp = R0(a, 'pregunta'); return { ...NOCHEC, fov: 32, atores: [YO({ x: -.9, z: -.3, eyes: [[0, 'look']], pose: (k) => k.pose({ armL: [12, 8], armR: [80, 70], head: 10 }) })],
  extra: (c, s, A) => { const n = contador(c, [.6, 1.6, -.4], 1.4, (u) => `DESCARGANDO ${Math.min(100, Math.max(0, Math.round((u - tt0) * 30)))}%`, { w: 900, h: 200, size: 80 }); const no = notas(c, 6); const t = lab(c, ['3 HORAS DE MÚSICA'], 1.7, [.6, 2.45, -.4]); const p = piensa(c, ['¿QUÉ ESCUCHAS?'], 1.4, [-.2, 2.45, -.3]); const gm = glowMovil(c, A[0]);
    return { update: (u, tt, cam) => { n.userData.upd(u); n.visible = u > tt0 - .2; pop(t, u, tt0, tp - .2, cam); pop(p, u, tp, 99, cam); no(u, new THREE.Vector3(.4, 1.5, -.4), cam, u > tt0); gm(); } }; },
  c: [[-.1, 1.7, 3.4], [-.1, 1.5, -.3], [-.1, 1.65, 3.0], [-.1, 1.5, -.3]], range: 3, look: NLOOK }; });
// 15. Música que, en realidad, no has escuchado nunca.
Q(15, (d, a) => { const tn = R0(a, 'nunca'); return { ...NOCHEC, fov: 30, atores: [YO({ x: -.3, z: -.3, eyes: [[0, 'look'], [tn, 'flat']], pose: (k) => k.pose({ armL: [12, 8], armR: [80, 70] }) })],
  extra: (c) => { const t = lab(c, ['NO LA HAS ESCUCHADO NUNCA'], 2.3, [-.3, 2.4, -.3], RED); const g = gotas(c, 3); return { update: (u, tt, cam) => { pop(t, u, tn - .3, 99, cam); g(u, [-.05, 1.9, -.2, .1], u > tn ? 1 : 0); } }; },
  c: [[-.3, 1.65, 3.0], [-.3, 1.5, -.3], [-.3, 1.6, 2.5], [-.3, 1.5, -.3]], range: 3, look: NLOOK }; });
// 16. Lunes, 7:00
HORA(16, 7, '7:00', 'LUNES');
// 17. El autobús espera en la puerta del instituto.
Q(17, (d, a) => ({ amb: 'salida', ambo: { manana: true }, fov: 34, atores: [EXTRA(0, { x: -2.6, z: .6, eyes: [[0, 'happy']] }), EXTRA(3, { x: -3.2, z: .2 }), AMI({ x: -2.0, z: .9, eyes: [[0, 'look']] })],
  extra: (c) => { const t = lab(c, ['EL AUTOBÚS ESPERA'], 1.9, [1.0, 3.9, -2.0]); return { update: (u, tt, cam) => pop(t, u, .2, 99, cam) }; },
  c: [[-1.0, 2.4, 7.4], [.6, 1.6, -2.5], [-.4, 2.3, 6.6], [.6, 1.6, -2.5]], k: 1, range: 6 }));
// 18. Subes de los primeros y guardas dos sitios. Ventanilla y pasillo.
Q(18, (d, a) => { const tv = R0(a, 'ventanilla'), tp = R0(a, 'pasillo'), tg = R0(a, 'guardas'); return { amb: 'gris', fov: 32, k: 1, atores: [YOB({ eyes: [[0, 'happy']] })],
  extra: (c) => { const bus2 = BUSV(c); const mo = mochila(c, '#E8667F'); mo.position.set(.4, .58, SZ); const L = SEQ(c, a, [[['DE LOS PRIMEROS'], 0, 'w', [0, 2.08, -1.0], 1.5], [['GUARDAS DOS SITIOS'], tg, 'y', [0, 2.08, -1.0], 1.8], [['VENTANILLA'], tv, 'w', [-.4, 2.08, -1.0], 1.1], [['Y PASILLO'], tp, 'w', [.5, 2.08, -1.0], 1.0, 1]]); return { update: (u, tt, cam) => { L(u, cam); } }; },
  c: BUSC, range: 3 }; });
// 19. Y esperas.
Q(19, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [YOB({ eyes: [[0, 'look']], pose: (k, u) => k.pose({ head: Math.sin(u * 2) * 15 }) })],
  extra: (c) => { BUSV(c); const mo = mochila(c, '#E8667F'); mo.position.set(.4, .58, SZ); const ck = clock(.5, 7); ck.position.set(-1.0, 1.75, -1.0); c.add(ck); const t = lw(c, ['…Y ESPERAS'], 1.1, [0, 1.95, -1.0]); return { update: (u, tt, cam) => { pop(t, u, .1, 99, cam); } }; },
  c: BUSCC, range: 3 }));
// 20. Llegan todos. Menos ella.
Q(20, (d, a) => { const tm = R0(a, 'menos'); return { amb: 'gris', fov: 34, k: 1, atores: [YOB({ eyes: [[0, 'look'], [tm, 'sad']] }), EXTRA(0, { x: -2.9, z: SZ, y: SY, pose: SENT() }), EXTRA(1, { x: -2.1, z: SZ, y: SY, pose: SENT() }), EXTRA(2, { x: 2.1, z: SZ, y: SY, pose: SENT() }), AMI({ x: 2.9, z: SZ, y: SY, pose: SENT() })],
  extra: (c) => { BUSV(c); const g = glowSprite('#FFB0C0', .9, 0); g.position.set(.4, 1.0, SZ + .2); c.add(g); const L = SEQ(c, a, [[['LLEGAN TODOS'], 0, 'w', [0, 2.08, -1.0], 1.4], [['MENOS ELLA'], tm, 'r', [0, 2.08, -1.0], 1.2, 1]]); return { update: (u, tt, cam) => { L(u, cam); g.material.opacity = u > tm ? .5 + .2 * Math.sin(u * 4) : 0; } }; },
  c: [[0, 1.6, 3.6], [0, 1.15, -1.2], [0, 1.55, 3.2], [0, 1.15, -1.2]], range: 4 }; });
// 21. El conductor arranca el motor. La tutora cuenta cabezas.
Q(21, (d, a) => { const tt0 = R0(a, 'tutora'); return { amb: 'gris', fov: 34, k: 1, atores: [YOB({ eyes: [[0, 'sad']] }), EXTRA(0, { x: -2.9, z: SZ, y: SY, pose: SENT() }), EXTRA(1, { x: -2.1, z: SZ, y: SY, pose: SENT() }), TUTORA({ x: 1.6, z: .2, eyes: [[0, 'look']], pose: (k, u) => (u > tt0 ? k.pose({ armL: [12, 8], armR: [95, 0], head: Math.sin(u * 3) * 20 }) : k.pose()) })],
  extra: (c, s, A) => { const bus2 = BUSV(c); const h = hoja(c); const n = contador(c, [1.0, 2.0, .2], 1.0, (u) => `${Math.min(27, Math.max(1, Math.floor((u - tt0) * 6)))}…`, { w: 500, h: 200, size: 110 }); const t = lab(c, ['¡RRRUM!'], 1.0, [-1.5, 1.95, -1.0], RED);
    return { update: (u, tt, cam) => { bus2(u, .1); n.userData.upd(u); n.visible = u > tt0; pop(t, u, .2, tt0 - .2, cam); const p = hand(A[3]); h.position.set(p.x, p.y, p.z + .12); shake(cam, u < tt0 ? .006 : 0, u); } }; },
  c: [[.2, 1.6, 3.6], [.2, 1.2, -1.0], [.2, 1.55, 3.2], [.2, 1.2, -1.0]], range: 4 }; });
// 22. Y en el último segundo, aparece corriendo, con la mochila abierta y el pelo todavía mojado.
Q(22, (d, a) => { const tc = R0(a, 'corriendo'), tm = R0(a, 'mochila'), tp = R0(a, 'pelo'); return { amb: 'salida', ambo: { manana: true }, fov: 34, atores: [ELA({ x: -1, z: .8, move: (u) => [lerp(-6, 1.2, smooth(tc - .4, d - .2, u)), 0, .8], eyes: [[0, 'wide']], pose: (k, u) => k.walk(u * 3.2) })],
  extra: (c, s, A) => { const mo = mochila(c, '#43C4B4'); const P = []; for (let i = 0; i < 5; i++) { const m = box(.18, .24, .02, std(['#FBF7EC', '#F2C14E', '#8AC8F2'][i % 3]), 0, 0, 0, false); c.add(m); P.push(m); } const g = gotas(c, 8); const L = SEQ(c, a, [[['EN EL ÚLTIMO SEGUNDO'], 0, 'r', [0, 2.45, .8], 2.0], [['LA MOCHILA ABIERTA'], tm, 'y', [0, 2.45, .8], 1.8], [['EL PELO MOJADO'], tp, 'b', [0, 2.45, .8], 1.6, 1]]); const v = new THREE.Vector3();
    return { update: (u, tt, cam) => { A[0].torso.getWorldPosition(v); mo.position.set(v.x - .2, v.y - .3, v.z - .25); P.forEach((m, i) => { const f = ((u - tm) * .8 + i / 5) % 1; m.visible = u > tm; m.position.set(v.x - .5 - f * 1.5, Math.max(.02, v.y - f * 1.2), v.z - .2); m.rotation.z = f * 6; }); A[0].head.getWorldPosition(v); g(u, [v.x, v.y + .1, v.z, .25], u > tp - .3 ? 1 : 0); L(u, cam); } }; },
  c: [[-1.5, 1.9, 6.4], [-.5, 1.3, .4], [0, 1.85, 5.8], [.5, 1.3, .4]], k: 1, range: 6 }; });
// 23. Se deja caer a tu lado. "Perdón. No ha sonado el despertador." Y se ríe.
Q(23, (d, a) => { const tp = R0(a, 'perdon'), tr = R0(a, 'rie'); return { amb: 'gris', fov: 32, k: 1, atores: [YOB({ eyes: [[0, 'wide']] }), ELB({ move: (u) => [lerp(1.4, .4, smooth(0, .6, u)), SY + (1 - smooth(.3, .7, u)) * .4, SZ], eyes: [[0, 'look'], [tr, 'happy']], talk: [[tp, tr]] })],
  extra: (c) => { BUSV(c); const g = hab(c, ['PERDÓN… NO HA', 'SONADO EL DESPERTADOR'], 1.6, [.65, 1.95, -1.0], 54); const j = gl(c, 'JA, JA', .7, [1.2, 2.0, -1.0]); return { update: (u, tt, cam) => { pop(g, u, tp, tr - .1, cam); pop(j, u, tr, 99, cam); } }; },
  c: BUSC, range: 3 }; });
// 24. Tú dices "hola". Solo "hola".
Q(24, (d, a) => { const ts = R0(a, 'solo'); return { amb: 'gris', fov: 30, k: 1, atores: [YOB({ eyes: [[0, 'look']], talk: [[.3, .9]] }), ELB({ eyes: [[0, 'happy']] })],
  extra: (c) => { BUSV(c); const g = hab(c, ['…hola.'], .8, [-.6, 1.95, -1.0], 70); const t = lab(c, ['SOLO "HOLA"'], 1.2, [0, 2.08, -1.0], RED); return { update: (u, tt, cam) => { pop(g, u, .3, ts - .1, cam); pop(t, u, ts, 99, cam); } }; },
  c: BUSCC, range: 3 }; });
// 25. Llevas toda la noche pensando qué decir y te sale "hola".
Q(25, (d, a) => { const th = R0(a, 'hola'); return { amb: 'gris', fov: 30, k: 1, atores: [YOB({ eyes: [[0, 'look'], [th, 'flat']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > th + .2 ? 150 : 12, u > th + .2 ? 120 : 8] }) }), ELB({ eyes: [[0, 'lookl']] })],
  extra: (c) => { BUSV(c); const p = PSEQ(c, a, [[['"¿Te gusta el mar?"'], .1, [-.95, 1.95, -1.0], 1.15], [['"¿Sabías que los', 'pulpos tienen 3', 'corazones?"'], 1.2, [-.95, 1.95, -1.0], 1.15], [['"Buenos días,', 'compañera"'], 2.4, [-.95, 1.95, -1.0], 1.15]]); const t = lab(c, ['Y TE SALE "HOLA"'], 1.6, [0, 2.08, -1.0], RED); return { update: (u, tt, cam) => { if (u < th) p(u, cam); else p(-1, cam); pop(t, u, th, 99, cam); } }; },
  c: BUSC, range: 3 }; });
// 26. 8:30 — hora y media de viaje
HORA(26, 8, '8:30', 'HORA Y MEDIA DE VIAJE');
// 27. Nadie habla. Ella mira por la ventanilla. Tú miras al asiento de delante.
Q(27, (d, a) => { const te = R0(a, 'ella'), tt0 = R0(a, 'miras'); return { amb: 'gris', fov: 32, k: 1, atores: [YOB({ eyes: [[0, 'flat']] }), ELB({ eyes: [[0, 'look']], pose: (k, u) => k.pose({ head: u > te ? -25 : 0 }) })],
  extra: (c) => { const b2 = BUSV(c); const L = SEQ(c, a, [[['NADIE HABLA'], 0, 'w', [0, 2.08, -1.0], 1.2], [['ELLA: LA VENTANILLA'], te, 'y', [.4, 2.08, -1.0], 1.7], [['TÚ: EL ASIENTO DE DELANTE'], tt0, 'y', [0, 2.08, -1.0], 2.2, 1]]); return { update: (u, tt, cam) => { b2(u); L(u, cam); } }; },
  c: BUSC, range: 3 }; });
// 28. Y entonces te ofrece uno de sus auriculares. "¿Quieres?"
Q(28, (d, a) => { const ta = R0(a, 'auriculares'), tq = R0(a, 'quieres'); return { amb: 'gris', fov: 30, k: 1, atores: [YOB({ eyes: [[0, 'flat'], [ta, 'wide']] }), ELB({ eyes: [[0, 'look'], [tq, 'happy']], talk: [[tq, tq + .8]], pose: (k) => k.pose({ armL: [70, 0], armR: [12, 8] }) })],
  extra: (c, s, A) => { const b2 = BUSV(c); const e = new THREE.Mesh(new THREE.SphereGeometry(.05, 12, 8), std('#FBF7EC')); c.add(e); const g = hab(c, ['¿QUIERES?'], .9, [1.0, 1.95, -1.0], 70); const t = lw(c, ['UN AURICULAR'], 1.2, [-.6, 1.95, -1.0]); const v = new THREE.Vector3();
    return { update: (u, tt, cam) => { b2(u); A[1].arms.L.hand.getWorldPosition(v); e.position.set(v.x, v.y + .05, v.z + .08); e.visible = u > ta - .3; pop(t, u, ta, tq - .1, cam); pop(g, u, tq, 99, cam); } }; },
  c: BUSCC, range: 3 }; });
// 29. Suena una canción que no conoces. Ella te pregunta si te gusta.
Q(29, (d, a) => { const tn = R0(a, 'conoces'), tp = R0(a, 'pregunta'); return { amb: 'gris', fov: 32, k: 1, atores: [YOB({ eyes: [[0, 'look'], [tn, 'flat']] }), ELB({ eyes: [[0, 'happy']], talk: [[tp, d]], pose: (k, u) => k.pose({ head: Math.sin(u * 4) * 6 }) })],
  extra: (c, s, A) => { const b2 = BUSV(c); const cb = cable(c); const no = notas(c, 6); const p = piensa(c, ['¿¿QUÉ ES ESTO??'], 1.3, [-1.3, 1.95, -1.0]); const g = hab(c, ['¿TE GUSTA?'], .9, [1.1, 1.95, -1.0], 70); const v = new THREE.Vector3();
    return { update: (u, tt, cam) => { b2(u); cb(A[0], A[1]); A[1].head.getWorldPosition(v); no(u, v, cam); pop(p, u, tn - .2, tp - .1, cam); pop(g, u, tp, 99, cam); } }; },
  c: BUSC, range: 3 }; });
// 30. Dices que te encanta. Ella sonríe. "¿En serio? Si nadie la conoce."
Q(30, (d, a) => { const te = R0(a, 'serio'); return { amb: 'gris', fov: 30, k: 1, atores: [YOB({ eyes: [[0, 'happy'], [te + 1, 'wide']], talk: [[.2, 1.2]] }), ELB({ eyes: [[0, 'happy'], [te, 'look']], talk: [[te, d]] })],
  extra: (c, s, A) => { const b2 = BUSV(c); const cb = cable(c); const g1 = hab(c, ['¡ME ENCANTA!'], 1.0, [-.8, 1.95, -1.0], 70); const g2 = hab(c, ['¿EN SERIO? SI', 'NADIE LA CONOCE'], 1.4, [.55, 1.95, -1.0], 56); return { update: (u, tt, cam) => { b2(u); cb(A[0], A[1]); pop(g1, u, .2, te - .3, cam); pop(g2, u, te, 99, cam); } }; },
  c: BUSCC, range: 3 }; });
// 31. Pillado.
Q(31, (d, a) => ({ amb: 'gris', fov: 28, k: 1, atores: [YOB({ x: -.2, eyes: [[0, 'wide']] })],
  extra: (c, s, A) => { BUSV(c); const r = rubor(A[0]); const t = lab(c, ['¡PILLADO!'], 1.4, [-.2, 1.95, -1.0], RED); return { update: (u, tt, cam) => { pop(t, u, 0, 99, cam); r(.5 * smooth(0, .5, u)); } }; },
  c: [[-.2, 1.5, 1.6], [-.2, 1.45, -1.2], [-.2, 1.5, 1.3], [-.2, 1.45, -1.2]], range: 2 }));
// 32. 10:00 — tres horas de viaje
HORA(32, 10, '10:00', 'TRES HORAS DE VIAJE');
// 33. Curvas. Muchas curvas. Ella se pone pálida.
Q(33, (d, a) => { const tm = R0(a, 'muchas'), tp = R0(a, 'palida'); const sway = (u) => Math.sin(u * 2.6) * 10 * (u > tm ? 1.6 : 1); return { amb: 'gris', fov: 32, k: 1, atores: [YOB({ eyes: [[0, 'wide']], pose: (k, u) => k.pose({ lean: sway(u) }) }), ELB({ eyes: [[0, 'look'], [tp, 'flat']], pose: (k, u) => k.pose({ lean: sway(u) }) })],
  extra: (c, s, A) => { const b2 = BUSV(c); const vd = tinte(A[1]); const L = SEQ(c, a, [[['CURVAS'], 0, 'w', [0, 2.08, -1.0], 1.0], [['MUCHAS CURVAS'], tm, 'r', [0, 2.08, -1.0], 1.5], [['SE PONE PÁLIDA'], tp, 'b', [.4, 2.08, -1.0], 1.5, 1]]); return { update: (u, tt, cam) => { b2(u, 2); L(u, cam); vd(.35 * smooth(tp, tp + .6, u)); cam.rotation.z += Math.sin(u * 2.6) * .03; } }; },
  c: BUSC, range: 3 }; });
// 34. Se está mareando.
Q(34, (d, a) => ({ amb: 'gris', fov: 28, k: 1, atores: [ELB({ x: .3, eyes: [[0, 'shut']], pose: (k, u) => k.pose({ head: Math.sin(u * 3) * 10, armL: [12, 8], armR: [150, 140] }) })],
  extra: (c, s, A) => { BUSV(c); const vd = tinte(A[0]); const t = lab(c, ['SE ESTÁ MAREANDO'], 1.6, [.3, 1.95, -1.0], VERDE2); const sp = ICONO(c, '@', .35, [.85, 1.7, -1.0], '#7AD07A'); return { update: (u, tt, cam) => { vd(.38); pop(t, u, 0, 99, cam); sp.rotation.z = -u * 4; } }; },
  c: [[.3, 1.5, 1.7], [.3, 1.45, -1.2], [.3, 1.5, 1.4], [.3, 1.45, -1.2]], range: 2 }));
// 35. Y tú, que tu abuela te obligó a meter en la mochila un paquete de galletas saladas "por si acaso", se lo das.
Q(35, (d, a) => { const tg = R0(a, 'galletas'), tp = R0(a, 'acaso'); return { ...DIA, fov: 32, atores: [ABUELA({ x: .4, z: -.3, talk: [[tp - .8, tp + .5]], eyes: [[0, 'look']], pose: (k) => k.pose({ armL: [12, 8], armR: [70, 50] }) }), YO({ x: -.8, z: -.3, eyes: [[0, 'flat']] })],
  extra: (c, s, A) => { const mo = mochila(c); mo.position.set(-.1, 0, .2); const ga = galletas(c); const L = SEQ(c, a, [[['TU ABUELA'], 0, 'y', [.4, 2.45, -.3], 1.0], [['GALLETAS SALADAS'], tg, 'y', [0, 2.5, -.3], 1.7], [['"POR SI ACASO"'], tp - .3, 'p', [0, 2.5, -.3], 1.6, 1]]); return { update: (u, tt, cam) => { const p = hand(A[0]); const k = smooth(tp, tp + .8, u); ga.position.set(lerp(p.x, -.1, k), lerp(p.y, .55, k), lerp(p.z + .12, .2, k)); ga.visible = u > tg - .3; pointer(ga, cam); L(u, cam); } }; },
  c: [[0, 1.6, 3.4], [-.2, 1.3, -.3], [0, 1.55, 3.0], [-.2, 1.3, -.3]], range: 3, look: MEMO }; });
// 36. Le abres la ventanilla. Le dices que mire al horizonte.
Q(36, (d, a) => { const th = R0(a, 'horizonte'); return { amb: 'gris', fov: 32, k: 1, atores: [YOB({ eyes: [[0, 'look']], talk: [[th - 1.2, th + .6]], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u < 1.2 ? 150 : 95, u < 1.2 ? 30 : 0] }) }), ELB({ eyes: [[0, 'shut'], [th, 'look']], pose: (k) => k.pose({ head: -15 }) })],
  extra: (c, s, A) => { const b2 = BUSV(c); const vd = tinte(A[1]); const W = []; for (let i = 0; i < 6; i++) { const m = box(.5, .02, .02, std('#FBF7EC'), 0, 0, 0, false); c.add(m); W.push(m); } const L = SEQ(c, a, [[['LE ABRES LA VENTANILLA'], 0, 'w', [0, 2.08, -1.0], 2.0], [['MIRA AL HORIZONTE'], th - .2, 'b', [0, 2.08, -1.0], 1.8, 1]]);
    return { update: (u, tt, cam) => { b2(u); vd(.35 * (1 - smooth(th, th + 1.5, u))); W.forEach((m, i) => { const f = (u * 1.4 + i / 6) % 1; m.visible = u > .8; m.position.set(1.6 - f * 2.4, 1.6 + (i % 3) * .2, -1.5); }); L(u, cam); } }; },
  c: BUSC, range: 3 }; });
// 37. Diez minutos después está mejor. Y diez minutos más tarde, se queda dormida.
Q(37, (d, a) => { const tm = R0(a, 'mejor'), tq = R0(a, 'dormida'); return { amb: 'gris', fov: 32, k: 1, atores: [YOB({ eyes: [[0, 'look'], [tq, 'wide']] }), ELB({ eyes: [[0, 'look'], [tm, 'happy'], [tq - .2, 'shut']] })],
  extra: (c) => { const b2 = BUSV(c); const z = zzz(c); const L = SEQ(c, a, [[['10 MINUTOS: MEJOR'], tm - .4, 'y', [0, 2.08, -1.0], 1.8], [['10 MÁS: DORMIDA'], tq - .3, 'b', [0, 2.08, -1.0], 1.7, 1]]); return { update: (u, tt, cam) => { b2(u); L(u, cam); z(u, [.6, 1.6, -1.0], cam, u > tq); } }; },
  c: BUSC, range: 3 }; });
// 38. Con la cabeza en tu hombro.
Q(38, (d, a) => ({ amb: 'gris', fov: 28, k: 1, atores: [YOB({ x: -.38, eyes: [[0, 'heart']] }), ELB({ x: .38, z: SZ - .08, eyes: [[0, 'shut']], pose: apoya(1) })],
  extra: (c) => { BUSV(c); const t = lab(c, ['EN TU HOMBRO'], 1.3, [0, 1.95, -1.0], PINK); const h = corazon(c, .3); h.position.set(-.05, 1.95, -.9); return { update: (u, tt, cam) => { pop(t, u, .2, 99, cam); h.scale.setScalar(latido(u, 160)); pointer(h, cam); } }; },
  c: [[0, 1.5, 1.7], [0, 1.45, -1.2], [0, 1.5, 1.4], [0, 1.45, -1.2]], range: 2 }));
// 39. No te mueves. Durante cuarenta minutos, no te mueves.
Q(39, (d, a) => { const tc = R0(a, 'cuarenta'); return { amb: 'gris', fov: 30, k: 1, atores: [YOB({ x: -.38, eyes: [[0, 'wide']] }), ELB({ x: .38, z: SZ - .08, eyes: [[0, 'shut']], pose: apoya(1) })],
  extra: (c) => { const b2 = BUSV(c); const n = contador(c, [-1.4, 2.0, -1.0], 1.0, (u) => `${Math.min(40, Math.max(0, Math.floor((u - tc) * 12)))} MIN`, { w: 600, h: 200, size: 110 }); const t = lab(c, ['NO TE MUEVES'], 1.3, [0, 2.08, -1.0], RED); return { update: (u, tt, cam) => { b2(u); n.userData.upd(u); n.visible = u > tc - .2; pop(t, u, .1, 99, cam); } }; },
  c: BUSCC, range: 3 }; });
// 40. Se te duerme el brazo. Te pica la nariz. Y no te mueves.
Q(40, (d, a) => { const tp = R0(a, 'pica'), tn = R0(a, 'mueves'); return { amb: 'gris', fov: 30, k: 1, atores: [YOB({ x: -.38, eyes: [[0, 'flat'], [tp, 'shut'], [tn, 'wide']] }), ELB({ x: .38, z: SZ - .08, eyes: [[0, 'shut']], pose: apoya(1) })],
  extra: (c, s, A) => { BUSV(c); const B = brillos(c, 8, '#FFFFFF'); const L = SEQ(c, a, [[['SE TE DUERME EL BRAZO'], 0, 'w', [-.3, 2.08, -1.0], 1.9], [['TE PICA LA NARIZ'], tp, 'y', [-.3, 2.08, -1.0], 1.6], [['Y NO TE MUEVES'], tn - .3, 'r', [-.3, 2.08, -1.0], 1.5, 1]]); const v = new THREE.Vector3();
    return { update: (u, tt, cam) => { L(u, cam); A[0].arms.L.hand.getWorldPosition(v); B(u, [v.x, v.y + .2, v.z + .1, .15], u < tp ? 1 : 0); } }; },
  c: BUSCC, range: 3 }; });
// 41. Detrás, tu mejor amigo os hace una foto. Lo matarás después.
Q(41, (d, a) => { const tf = R0(a, 'foto'), tm = R0(a, 'mataras'); return { amb: 'gris', fov: 32, k: 1, atores: [YOB({ x: -.38, eyes: [[0, 'wide'], [tm, 'flat']] }), ELB({ x: .38, z: SZ - .08, eyes: [[0, 'shut']], pose: apoya(1) }), AMI({ x: 1.5, z: -.9, eyes: [[0, 'smug']], pose: (k) => k.pose({ armL: [12, 8], armR: [100, 60] }) })],
  extra: (c, s, A) => { BUSV(c); const ph = telefono(['📷'], { hora: '10:42' }); ph.scale.setScalar(.4); c.add(ph); const f = glowSprite('#FFFFFF', 1.6, 0); c.add(f); const L = SEQ(c, a, [[['TU MEJOR AMIGO'], 0, 'w', [1.5, 2.0, -.6], 1.4], [['¡CLIC!'], tf, 'y', [1.1, 2.0, -.6], .8], [['LO MATARÁS DESPUÉS'], tm - .2, 'r', [0, 2.08, -1.0], 1.8, 1]]);
    return { update: (u, tt, cam) => { const p = hand(A[2]); ph.position.set(p.x - .05, p.y + .1, p.z + .1); pointer(ph, cam); f.position.set(p.x, p.y + .1, p.z + .2); f.material.opacity = u > tf && u < tf + .25 ? 1 : 0; L(u, cam); } }; },
  c: [[.5, 1.6, 3.0], [.5, 1.3, -1.0], [.5, 1.55, 2.7], [.5, 1.3, -1.0]], range: 3 }; });
// ===================== CENAS 42–80 =====================
const SAG = (x) => (Math.abs(x) < 6 ? -.55 * (1 - (x / 6) ** 2) : 0) + .03;
const ACAD = (c) => { lab(c, ['ACADEMIA DE POLICÍA'], 3.0, [0, 3.3, -3.4], BLUE); };
const APELL = ['ABAD', 'ACOSTA', 'ALONSO', 'ÁLVAREZ'];
const nombreSobre = (c, txt, pos) => lw(c, [txt], .75, pos, { size: 60 });
const CAD4 = (o = {}) => [-2.1, -.7, .7, 2.1].map((x, i) => CADETE(i, { x, z: .2, eyes: [[0, o.eyes || 'look']], ...(o.pose ? { pose: o.pose(i) } : {}) }));
const GYM = { amb: 'gymkana', fov: 34 };
const NOCHEL = { amb: 'lagoNoche', fov: 32 };
const LLOOK = { exposure: 1.0, bloom: .5, vig: .55 };
// 42. Pero ¿por qué justo ella? ¿Por qué justo contigo?
Q(42, (d, a) => { const tc = R0(a, 'contigo'); return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: -.6, z: -.3, eyes: [[0, 'look']] }), ELA({ x: .6, z: -.3, eyes: [[0, 'shut']] })],
  extra: (c) => { const L = SEQ(c, a, [[['¿POR QUÉ JUSTO ELLA?'], 0, 'p', [0, 2.15, -.3], 2.0], [['¿POR QUÉ JUSTO CONTIGO?'], tc - .5, 'y', [0, 2.15, -.3], 2.2, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[0, 1.6, 3.6], [0, 1.4, -.3], [0, 1.6, 3.1], [0, 1.4, -.3]], range: 3 }; });
// 43. En 1974, la socióloga Mady Segal estudió a un grupo de cadetes en una academia de policía de Estados Unidos.
Q(43, (d, a) => { const tc = R0(a, 'cadetes'); return { ...AULA(), atores: [CIENT(1, { x: -2.6, z: -.6, eyes: [[0, 'look']], pose: (k) => k.pose({ armL: [60, 70], armR: [12, 8] }) }), ...CAD4().map((o, i) => ({ ...o, x: -.9 + i * 1.0, z: -1.2 }))],
  extra: (c) => { ACAD(c); const L = SEQ(c, a, [[['MADY SEGAL'], 0, 'w', [-2.6, 2.4, -.5], 1.3], [['CADETES DE POLICÍA'], tc, 'y', [.6, 2.6, -1.0], 1.9, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[0, 1.9, 5.2], [0, 1.6, -1.4], [0, 1.85, 4.6], [0, 1.6, -1.4]], range: 5 }; });
// 44. Allí, a los cadetes los colocaban en las habitaciones y en los pupitres por orden alfabético de apellido.
Q(44, (d, a) => { const to = R0(a, 'orden'); return { ...AULA(), atores: CAD4(),
  extra: (c) => { ACAD(c); pupitres(c, [-2.1, -.7, .7, 2.1], 1.0); const N = APELL.map((n, i) => nombreSobre(c, n, [-2.1 + i * 1.4, 2.0, .35])); const t = lab(c, ['ORDEN ALFABÉTICO'], 1.9, [0, 2.6, -.2]); return { update: (u, tt, cam) => { N.forEach((m, i) => pop(m, u, to + i * .35, 99, cam)); pop(t, u, to - .3, 99, cam); } }; },
  c: [[0, 1.9, 5.0], [0, 1.3, .2], [0, 1.85, 4.4], [0, 1.3, .2]], range: 5 }; });
// 45. Al cabo de unas semanas, les preguntó a cada uno quiénes eran sus mejores amigos dentro de la academia.
Q(45, (d, a) => { const tp = R0(a, 'pregunto'); return { ...AULA(), atores: [CIENT(1, { x: -1.0, z: -.2, talk: [[tp, tp + 2.5]], eyes: [[0, 'look']], pose: (k) => k.pose({ armL: [60, 70], armR: [12, 8] }) }), CADETE(0, { x: .6, z: -.2, eyes: [[0, 'look'], [tp + 2, 'happy']] })],
  extra: (c) => { ACAD(c); const t = lw(c, ['UNAS SEMANAS DESPUÉS'], 2.0, [0, 2.6, -.3]); const g = hab(c, ['¿QUIÉN ES TU', 'MEJOR AMIGO?'], 1.3, [-1.2, 2.2, -.2], 60); return { update: (u, tt, cam) => { pop(t, u, 0, tp - .2, cam); pop(g, u, tp, 99, cam); } }; },
  c: [[-.2, 1.7, 3.6], [-.2, 1.5, -.2], [-.2, 1.65, 3.1], [-.2, 1.5, -.2]], range: 3 }; });
// 46. Y casi siempre elegían a alguien cuyo apellido estaba muy cerca del suyo en la lista.
Q(46, (d, a) => { const tc = R0(a, 'cerca'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const m = lista(c, ['ABAD', 'ACOSTA', 'ALONSO', 'ÁLVAREZ', 'AMADO', 'ARIAS', 'ÁVILA'], 1.7, [-.4, 1.5, -.6], -1, 'LA LISTA'); const H2 = [0, 1, 2].map((i) => { const h = corazon(c, .28); h.position.set(.75, 2.05 - i * .48, -.5); return h; }); const t = lab(c, ['MUY CERCA EN LA LISTA'], 2.0, [.4, 2.75, -.5], PINK);
    return { update: (u, tt, cam) => { H2.forEach((h, i) => { h.visible = u > tc - .4 + i * .3; h.scale.setScalar(latido(u + i * .3, 130)); }); pop(t, u, tc, 99, cam); } }; },
  c: [[0, 1.7, 4.6], [0, 1.7, -.6], [0, 1.7, 4.2], [0, 1.7, -.6]], range: 3 }; });
// 47. No a quien más se le parecía. No a quien tenía más cosas en común. A quien tenía al lado.
Q(47, (d, a) => { const t2 = R0(a, 'comun') - 1.5, t3 = R0(a, 'lado') - .9; return { ...AULA(), atores: CAD4({ pose: (i) => (k, u) => k.pose({ armL: [i % 2 ? 40 : 12, 8], armR: [i % 2 ? 12 : 40, 8] }) }),
  extra: (c) => { ACAD(c); pupitres(c, [-2.1, -.7, .7, 2.1], 1.0); const P = [0, 2.55, .2]; const L = SEQ(c, a, [[['NO AL MÁS PARECIDO'], 0, 'r', P, 1.9], [['NO AL QUE TENÍA MÁS EN COMÚN'], t2, 'r', P, 2.6], [['¡AL QUE TENÍA AL LADO!'], t3, 'y', P, 2.1, 1]]); const H2 = [-1.4, 1.4].map((x) => { const h = corazon(c, .3); h.position.set(x, 2.0, .3); return h; }); return { update: (u, tt, cam) => { L(u, cam); H2.forEach((h) => { h.visible = u > t3; h.scale.setScalar(latido(u, 130)); }); } }; },
  c: [[0, 1.9, 5.0], [0, 1.4, .2], [0, 1.85, 4.4], [0, 1.4, .2]], range: 5 }; });
// 48. La cercanía es una de las cosas que más amistades crea.
Q(48, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [CADETE(0, { x: -.32, z: -.3, eyes: [[0, 'happy']], pose: abrazo(1) }), CADETE(1, { x: .32, z: -.3, eyes: [[0, 'happy']], pose: abrazo(-1) })],
  extra: (c) => { const t = lab(c, ['LA CERCANÍA CREA AMISTADES'], 2.4, [0, 2.4, -.3]); const b = brillos(c, 10, '#FFE27A'); return { update: (u, tt, cam) => { pop(t, u, .2, 99, cam); b(u, [0, 1.5, -.2, .9]); } }; },
  c: [[0, 1.6, 3.4], [0, 1.4, -.3], [0, 1.6, 2.9], [0, 1.4, -.3]], range: 3 }));
// 49. Y ahora tú tienes a tu crush al lado. Cinco días seguidos.
Q(49, (d, a) => { const tc = R0(a, 'cinco'); return { amb: 'gris', fov: 30, k: 1, atores: [YOB({ x: -.38, eyes: [[0, 'heart']] }), ELB({ x: .38, z: SZ - .08, eyes: [[0, 'shut']], pose: apoya(1) })],
  extra: (c) => { const b2 = BUSV(c); const L = SEQ(c, a, [[['TU CRUSH, AL LADO'], 0, 'p', [0, 2.08, -1.0], 1.7], [['5 DÍAS SEGUIDOS'], tc, 'y', [0, 2.08, -1.0], 1.6, 1]]); return { update: (u, tt, cam) => { b2(u); L(u, cam); } }; },
  c: BUSC, range: 3 }; });
// 50. 13:00 — el albergue
HORA(50, 1, '13:00', 'EL ALBERGUE');
// 51. Llegáis al albergue. Está en mitad de un bosque, con un río, un lago y montañas por todas partes.
Q(51, (d, a) => { const tb = R0(a, 'bosque'), tl = R0(a, 'lago'), tm = R0(a, 'montanas'); return { amb: 'albergue', fov: 34, atores: [YO({ x: -.5, z: 1, move: (u) => [-.5, 0, lerp(3, 1, smooth(0, 2, u))], eyes: [[0, 'wide']], pose: (k, u) => (u < 2 ? k.walk(u * 2) : k.pose()) }), ELA({ x: .4, z: 1, move: (u) => [.4, 0, lerp(3.2, 1, smooth(0, 2.2, u))], eyes: [[0, 'happy']], pose: (k, u) => (u < 2.2 ? k.walk(u * 2) : k.pose()) }), EXTRA(0, { x: -1.6, z: 1.4 }), AMI({ x: 1.6, z: 1.6 })],
  extra: (c) => { const P = [.5, 2.9, .5]; const L = SEQ(c, a, [[['EL ALBERGUE'], 0, 'y', P, 2.2], [['UN BOSQUE'], tb, 'w', P, 2.0], [['UN LAGO'], tl, 'w', P, 1.8], [['MONTAÑAS POR TODAS PARTES'], tm, 'y', P, 3.8, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[0, 2.4, 8.5], [0, 2.0, -4], [1, 2.2, 7.6], [1, 2.0, -4]], k: 1, range: 8 }; });
// 52. El monitor os reúne en la explanada. "Primera actividad de la tarde: el puente colgante."
Q(52, (d, a) => { const tp = R0(a, 'primera'), tc = R0(a, 'colgante'); return { amb: 'albergue', fov: 32, atores: [MONITOR({ x: 1.5, z: .2, talk: [[tp, d]], eyes: [[0, 'happy']], pose: talkP }), YO({ x: -.6, z: 1.0, eyes: [[0, 'look'], [tc, 'wide']] }), ELA({ x: 0, z: 1.2, eyes: [[0, 'look'], [tc, 'wide']] }), EXTRA(2, { x: -1.3, z: .8 }), AMI({ x: -1.9, z: 1.0 })],
  extra: (c) => { const t = lw(c, ['EL MONITOR'], 1.1, [1.5, 2.3, .2]); const g = hab(c, ['PRIMERA ACTIVIDAD', 'DE LA TARDE…'], 1.6, [.6, 2.3, .2], 56); const t2 = lab(c, ['¡EL PUENTE COLGANTE!'], 2.2, [0, 2.4, .2], RED); return { update: (u, tt, cam) => { pop(t, u, .1, tp - .2, cam); pop(g, u, tp, tc - .6, cam); pop(t2, u, tc - .5, 99, cam); } }; },
  c: [[0, 1.9, 5.2], [0, 1.4, -.2], [0, 1.85, 4.6], [0, 1.4, -.2]], range: 5 }; });
// 53. Es un puente de cuerdas y tablas de madera. Encima de un barranco.
Q(53, (d, a) => { const tb = R0(a, 'barranco'); return { amb: 'puente', fov: 34, atores: [],
  extra: (c) => { const L = SEQ(c, a, [[['CUERDAS Y TABLAS DE MADERA'], 0, 'w', [0, .9, 0], 3.2], [['ENCIMA DE UN BARRANCO'], tb, 'r', [0, .9, 0], 3.0, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[-9, 3.2, 9], [0, .2, 0], [-6, 2.0, 8], [0, -2.5, 0]], k: 1, range: 9, blur: 4 }; });
// 54. Y se mueve. Mucho.
Q(54, (d, a) => { const tm = R0(a, 'mucho'); return { amb: 'puente', fov: 32, atores: [],
  extra: (c) => { const t = lab(c, ['¡SE MUEVE!'], 1.6, [0, .9, 0], RED); const t2 = lab(c, ['MUCHO'], 1.1, [0, .25, 0], RED); return { update: (u, tt, cam) => { pop(t, u, 0, 99, cam); pop(t2, u, tm, 99, cam); shake(cam, u > tm ? .06 : .03, u); cam.rotation.z += Math.sin(u * 3) * .05; } }; },
  c: [[-5, 1.6, 5], [0, -.2, 0], [-4.4, 1.5, 4.6], [0, -.2, 0]], k: 1, range: 6 }; });
// 55. Ella se agarra a la barandilla y no da ni un paso. "Yo no puedo."
Q(55, (d, a) => { const ty = R0(a, 'yo'); return { amb: 'puente', fov: 30, atores: [ELA({ x: -7.2, z: .2, eyes: [[0, 'wide'], [ty, 'sad']], talk: [[ty, d]], pose: (k, u) => k.pose({ armL: [12, 8], armR: [70, 20], lean: -6 + Math.sin(u * 20) * 2 }) }), YO({ x: -8.0, z: -.3, eyes: [[0, 'look']] })],
  extra: (c) => { const t = lw(c, ['NI UN PASO'], 1.1, [-7.2, 2.25, .2]); const g = hab(c, ['YO NO PUEDO.'], 1.1, [-6.5, 2.1, .3], 66); return { update: (u, tt, cam) => { pop(t, u, .3, ty - .2, cam); pop(g, u, ty, 99, cam); } }; },
  c: [[-7.4, 1.7, 3.8], [-7.4, 1.3, 0], [-7.4, 1.65, 3.3], [-7.4, 1.3, 0]], k: 1, range: 3.5 }; });
// 56. Y tú tampoco puedes. Te tiemblan las piernas. Pero le tiendes la mano. "Vamos juntos. Sin mirar abajo."
Q(56, (d, a) => { const tt0 = R0(a, 'tiemblan'), tm = R0(a, 'tiendes'), tv = R0(a, 'vamos'); return { amb: 'puente', fov: 30, atores: [YO({ x: -7.8, z: -.25, eyes: [[0, 'wide'], [tm, 'look']], talk: [[tv, d]], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > tm ? 70 : 12, 0], legL: [Math.sin(u * 40) * (u > tt0 && u < tm ? 6 : 0), 0], legR: [-Math.sin(u * 40) * (u > tt0 && u < tm ? 6 : 0), 0] }) }), ELA({ x: -7.0, z: .25, eyes: [[0, 'sad'], [tm + .5, 'look']], pose: (k) => k.pose({ armL: [12, 8], armR: [70, 20] }) })],
  extra: (c) => { const L = SEQ(c, a, [[['TÚ TAMPOCO PUEDES'], 0, 'r', [-7.4, 2.2, 0], 1.8], [['TE TIEMBLAN LAS PIERNAS'], tt0, 'w', [-7.4, 2.2, 0], 2.1], [['LE TIENDES LA MANO'], tm, 'y', [-7.4, 2.2, 0], 1.8]]); const g = hab(c, ['VAMOS JUNTOS.', 'SIN MIRAR ABAJO.'], 1.3, [-8.1, 2.0, 0], 60); return { update: (u, tt, cam) => { L(u, cam); pop(g, u, tv, 99, cam); } }; },
  c: [[-7.4, 1.6, 3.6], [-7.4, 1.3, 0], [-7.4, 1.6, 3.1], [-7.4, 1.3, 0]], k: 1, range: 3.5 }; });
// 57. Y cruzáis. Paso a paso. Con el corazón a mil.
Q(57, (d, a) => { const tc = R0(a, 'corazon'); const mv = (dz) => (u) => { const x = lerp(-5.6, -1.2, smooth(0, d, u)); return [x, SAG(x), dz]; }; return { amb: 'puente', fov: 30, atores: [YO({ x: -5, z: -.25, move: mv(-.25), eyes: [[0, 'wide']], pose: (k, u) => { k.walk(u * .7, .5); k.pose({ armR: [40, 0] }); k.root.rotation.z = Math.sin(u * 3) * .05; } }), ELA({ x: -5, z: .25, move: mv(.25), eyes: [[0, 'wide']], pose: (k, u) => { k.walk(u * .7 + .5, .5); k.pose({ armL: [40, 0] }); k.root.rotation.z = Math.sin(u * 3) * .05; } })],
  extra: (c, s, A) => { const h = corazon(c, .4); const L = SEQ(c, a, [[['PASO A PASO'], .8, 'w', [-3.4, 1.9, 0], 1.3], [['EL CORAZÓN A MIL'], tc, 'r', [-3.4, 1.9, 0], 1.7, 1]]); const v = new THREE.Vector3();
    return { update: (u, tt, cam) => { A[0].head.getWorldPosition(v); h.position.set(v.x + .3, v.y + .5, v.z + .3); h.scale.setScalar(latido(u, u > tc ? 220 : 130)); pointer(h, cam); L(u, cam); } }; },
  cam: [[0, [-5.6, 1.5, 3.4], [-5.6, .9, 0]], [d, [-1.2, 1.3, 3.4], [-1.2, .7, 0]]], f: [[0, 3.45], [d, 3.45]], k: 1, range: 4 }; });
// 58. Al llegar al otro lado, ella todavía te está apretando la mano. Y tarda un poco en soltarla.
Q(58, (d, a) => { const tt0 = R0(a, 'tarda'); return { amb: 'puente', fov: 30, atores: [YO({ x: 7.4, z: -.25, eyes: [[0, 'look'], [tt0, 'heart']], pose: (k) => k.pose({ armL: [12, 8], armR: [40, 0] }) }), ELA({ x: 8.0, z: .3, eyes: [[0, 'happy']], pose: (k) => k.pose({ armL: [40, 0], armR: [12, 8] }) })],
  extra: (c, s, A) => { const t = lw(c, ['TODAVÍA TE APRIETA LA MANO'], 2.3, [7.7, 2.2, 0]); const t2 = lab(c, ['TARDA EN SOLTARLA'], 1.8, [7.7, 2.2, 0], PINK); const r = rubor(A[0]); return { update: (u, tt, cam) => { pop(t, u, .2, tt0 - .2, cam); pop(t2, u, tt0, 99, cam); r(.4 * smooth(tt0, tt0 + .6, u)); } }; },
  c: [[7.7, 1.6, 3.6], [7.7, 1.3, 0], [7.7, 1.55, 3.1], [7.7, 1.3, 0]], k: 1, range: 3 }; });
// 59. Y aquí viene uno de los experimentos más famosos… / 1974: Dutton y Aron, Capilano, setenta metros
Qs(59, ['1974'], [(d, a) => ({ amb: 'lab', fov: 30, atores: [], extra: (c) => { const t = lab(c, ['UNO DE LOS EXPERIMENTOS', 'MÁS FAMOSOS'], 2.6, [0, 1.8, -1], { h: 260 }); return { update: (u, t2, cam) => pop(t, u, 0, 99, cam) }; }, c: [[0, 1.8, 3.6], [0, 1.8, -1], [0, 1.8, 3.0], [0, 1.8, -1]], k: 1, range: 3 }),
  (d, a) => { const tc = R0(a, 'capilano'), tm = R0(a, 'setenta'); return { amb: 'puente', fov: 34, atores: [PROF({ x: -8.0, z: 1.4, eyes: [[0, 'look']], pose: (k, u) => (u > tc ? point(k) : k.pose()) }), PROF({ x: -8.8, z: .6, hair: 'old', hairc: '#8A7A6A', eyes: [[0, 'look']] }), EXTRA(1, { x: -2, z: 0, move: (u) => { const x = lerp(-5.5, 1.5, smooth(1, d, u)); return [x, SAG(x), 0]; }, eyes: [[0, 'wide']], pose: (k, u) => { k.walk(u * .7, .6); k.root.rotation.z = Math.sin(u * 3) * .06; } })],
    extra: (c) => { const L = SEQ(c, a, [[['DUTTON Y ARON'], .2, 'w', [-8.4, 2.5, 1.0], 1.5], [['CANADÁ · PUENTE DE CAPILANO'], tc - .4, 'y', [-4, 2.2, 0], 2.6]]); const t = lab(c, ['70 METROS'], 1.3, [2.6, -1.5, .8], { fg: '#FF8A5A' }); const ar = lab(c, ['↓'], .35, [2.6, -2.2, .8], { size: 110, w: 200, h: 150 }); return { update: (u, t2, cam) => { L(u, cam); pop(t, u, tm, 99, cam); pop(ar, u, tm, 99, cam); } }; },
    c: [[-11, 2.6, 9.5], [-4, .4, 0], [-2, 1.6, 9.0], [0, -1.0, 0]], k: 1, range: 9, blur: 4 }; }]);
// 60. Una chica paraba a los hombres que acababan de cruzarlo, les pedía rellenar una encuesta y les daba su número de teléfono…
Q(60, (d, a) => { const te = R0(a, 'encuesta'), tn = R0(a, 'numero'); return { amb: 'puente', fov: 30, atores: [EXTRA(0, { x: 6.9, z: .1, talk: [[0, 1.5], [tn - .5, tn + 2.5]], eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [50, 60], armR: [u > tn ? 85 : 12, 0] }) }), EXTRA(1, { x: 5.6, z: .1, move: (u) => { const x = lerp(3.5, 5.7, smooth(0, 1.6, u)); return [x, SAG(x), 0]; }, eyes: [[0, 'wide'], [tn + .5, 'heart']], pose: (k, u) => (u < 1.6 ? k.walk(u) : k.pose({ armL: [12, 8], armR: [u > tn + .4 ? 70 : 12, 0] })) })],
  extra: (c) => { const cl = box(.24, .32, .02, std('#C9A06A'), 7.2, 1.0, .25); c.add(cl); const pap = lw(c, ['SU NÚMERO DE TELÉFONO'], 1.6, [6.4, 2.35, .3]); const pp = box(.18, .12, .005, std('#FBF7EC'), 6.4, 1.1, .3, false); c.add(pp); const e = lw(c, ['UNA ENCUESTA'], 1.1, [7.2, 2.35, .3]); const ch = lw(c, ['UNA CHICA'], 1.0, [6.9, 2.35, .3]);
    return { update: (u, t2, cam) => { pop(ch, u, 0, te - .2, cam); pop(e, u, te, tn - .1, cam); pop(pap, u, tn, 99, cam); pp.visible = u > tn; } }; },
  c: [[4.6, 1.8, 4.6], [6.4, 1.2, 0], [5.2, 1.7, 3.8], [6.4, 1.2, 0]], k: 1, range: 4 }; });
// 61. Hicieron lo mismo en otro puente, uno bajo, ancho y firme.
Q(61, (d) => ({ amb: 'puente', ambo: { normal: true }, fov: 32, atores: [EXTRA(5, { x: 0, z: 0, y: .42, move: (u) => [0, .42, lerp(2, -1, u / d)], pose: (k, u) => k.walk(u) }), EXTRA(0, { x: .6, z: -3.2, eyes: [[0, 'happy']], pose: (k) => k.pose({ armL: [50, 60] }) })],
  extra: (c) => { const t = lw(c, ['OTRO PUENTE: BAJO, ANCHO Y FIRME'], 2.8, [0, 2.6, -1]); return { update: (u, t2, cam) => pop(t, u, .2, 99, cam) }; },
  c: [[4.4, 1.8, 4.4], [0, .8, -.6], [3.6, 1.7, 3.6], [0, .8, -.8]], k: 1, range: 5 }));
// 62. ¿Qué pasó? Del puente que daba miedo, la llamó casi la mitad. Del puente firme, más o menos uno de cada ocho.
Q(62, (d, a) => { const tm = R0(a, 'mitad'), tt = R0(a, 'ocho'); return { amb: 'lab', fov: 30, atores: [],
  extra: (c) => { const mk2 = (x, col) => { const b = box(1.0, 1, .4, std(col, { emissive: col, emissiveIntensity: .25 }), x, 0, -1); c.add(b); return b; }; const b1 = mk2(-1.0, '#E8667F'), b2 = mk2(1.0, '#4A86C7');
    const L = [lw(c, ['PUENTE QUE DA MIEDO'], 1.8, [-1.0, .45, -.6], { size: 56 }), lw(c, ['PUENTE FIRME'], 1.4, [1.0, .45, -.6], { size: 56 }), lab(c, ['CASI LA MITAD LLAMÓ'], 1.8, [-1.0, 3.25, -.8]), lab(c, ['1 DE CADA 8'], 1.3, [1.0, 1.55, -.8])], tt0 = lab(c, ['¿QUÉ PASÓ?'], 1.4, [0, 3.6, -1.0]);
    return { update: (u, t2, cam) => { const h1 = 2.4 * smooth(tm - .5, tm + .6, u), h2 = .5 * smooth(tt - .6, tt + .3, u); b1.scale.y = Math.max(.01, h1); b1.position.y = .6 + h1 / 2; b2.scale.y = Math.max(.01, h2); b2.position.y = .6 + h2 / 2; pop(L[0], u, .3, 99, cam); pop(L[1], u, .3, 99, cam); pop(tt0, u, 0, tm - .5, cam); pop(L[2], u, tm + .4, 99, cam); pop(L[3], u, tt, 99, cam); } }; },
  c: [[0, 2.0, 6.6], [0, 1.7, -1], [0, 1.9, 6.0], [0, 1.7, -1]], k: 1, range: 6 }; });
// 63. ¿Por qué? Porque el cuerpo, cuando tiene miedo, se acelera. El corazón late fuerte. Te sudan las manos.
Q(63, (d, a) => { const ta = R0(a, 'acelera'), tc = R0(a, 'corazon'), ts = R0(a, 'sudan'); return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: 0, z: -.3, eyes: [[0, 'look'], [ta, 'wide']], pose: (k, u) => k.pose({ armL: [u > ts ? 60 : 12, 40], armR: [u > ts ? 60 : 12, 40], bob: u > ta ? Math.abs(Math.sin(u * 14)) * .02 : 0 }) })],
  extra: (c, s, A) => { const h = corazon(c, .45); h.position.set(0, 1.25, .05); const g = gotas(c, 8); const L = SEQ(c, a, [[['¿POR QUÉ?'], 0, 'w', [0, 2.15, -.3], 1.0], [['EL CUERPO SE ACELERA'], ta - .3, 'r', [0, 2.15, -.3], 2.0], [['EL CORAZÓN LATE FUERTE'], tc, 'r', [0, 2.15, -.3], 2.1], [['TE SUDAN LAS MANOS'], ts, 'b', [0, 2.15, -.3], 1.9, 1]]);
    return { update: (u, tt, cam) => { h.visible = u > tc - .2; h.scale.setScalar(latido(u, 200)); pointer(h, cam); const p = hand(A[0]); g(u, [p.x, p.y + .1, p.z, .5], u > ts ? 1 : 0); L(u, cam); } }; },
  c: [[0, 1.5, 3.4], [0, 1.4, -.3], [0, 1.5, 2.9], [0, 1.4, -.3]], range: 3 }; });
// 64. Y el cerebro se confunde: "Me late el corazón… será por la persona que tengo delante."
Q(64, (d, a) => { const tm = R0(a, 'late'), tp = R0(a, 'persona'); return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: -.9, z: -.3, eyes: [[0, 'wide'], [tp, 'heart']] }), ELA({ x: .9, z: -.3, eyes: [[0, 'happy']] })],
  extra: (c) => { const cb = cerebro(c, [-.9, 2.15, -.2], .8); const L = SEQ(c, a, [[['EL CEREBRO SE CONFUNDE'], 0, 'p', [.3, 2.35, -.3], 2.2]]); const p = piensa(c, ['"Me late el corazón… será', 'por la persona de delante"'], 2.0, [.4, 2.3, -.2], { size: 50 }); return { update: (u, tt, cam) => { cb(u > .3); if (u < tm - .2) L(u, cam); else L(-1, cam); pop(p, u, tm - .1, 99, cam); } }; },
  c: [[0, 1.7, 4.0], [0, 1.6, -.3], [0, 1.7, 3.5], [0, 1.6, -.3]], range: 3 }; });
// 65. Así que, si le late el corazón a mil… quizá no sea solo por el puente.
Q(65, (d, a) => { const tq = R0(a, 'quiza'); return { amb: 'puente', fov: 30, atores: [YO({ x: 7.3, z: -.25, eyes: [[0, 'look']] }), ELA({ x: 7.9, z: .3, eyes: [[0, 'heart']], pose: (k) => k.pose({ head: -10 }) })],
  extra: (c, s, A) => { const h = corazon(c, .35); const t = lab(c, ['QUIZÁ NO SEA SOLO POR EL PUENTE'], 2.6, [7.6, 2.2, 0], PINK); const v = new THREE.Vector3(); return { update: (u, tt, cam) => { A[1].head.getWorldPosition(v); h.position.set(v.x + .35, v.y + .4, v.z + .2); h.scale.setScalar(latido(u, 200)); pointer(h, cam); pop(t, u, tq - .2, 99, cam); } }; },
  c: [[7.6, 1.6, 3.6], [7.6, 1.3, 0], [7.6, 1.55, 3.1], [7.6, 1.3, 0]], k: 1, range: 3 }; });
// 66. Martes
HORA(66, 10, 'MARTES', 'GYMKANA');
// 67. Gymkana por parejas. La prueba más difícil: la carrera a tres piernas.
Q(67, (d, a) => { const tc = R0(a, 'carrera'); return { ...GYM, atores: [MONITOR({ x: 2.2, z: -.4, eyes: [[0, 'happy']], talk: [[0, d]], pose: talkP }), YO({ x: -.6, z: .6, eyes: [[0, 'look']] }), ELA({ x: 0, z: .6, eyes: [[0, 'look'], [tc, 'wide']] }), EXTRA(0, { x: -1.6, z: .7 }), EXTRA(4, { x: -2.2, z: .7 }), AMI({ x: 1.0, z: .8 })],
  extra: (c) => { const P = [0, 2.6, -.2]; const L = SEQ(c, a, [[['GYMKANA POR PAREJAS'], 0, 'y', P, 2.0], [['LA PRUEBA MÁS DIFÍCIL'], 'prueba', 'w', P, 2.0], [['CARRERA A TRES PIERNAS'], tc, 'r', P, 2.2, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[0, 2.0, 6.0], [0, 1.3, -.4], [0, 1.95, 5.4], [0, 1.3, -.4]], range: 6 }; });
// 68. El monitor os ata el tobillo… Correr así hasta el lago, recoger una bandera y volver.
Q(68, (d, a) => { const tl = R0(a, 'lago'), tb = R0(a, 'bandera'), tv = R0(a, 'volver'); return { ...GYM, atores: [YO({ x: -.22, z: .6, eyes: [[0, 'look']], pose: (k) => k.pose({ armL: [12, 8], armR: [40, 0] }) }), ELA({ x: .22, z: .6, eyes: [[0, 'happy']], pose: (k) => k.pose({ armL: [40, 0], armR: [12, 8] }) }), MONITOR({ x: .9, z: .9, eyes: [[0, 'look']], pose: (k) => k.pose({ armL: [70, 40], armR: [70, 40], lean: 15 }) })],
  extra: (c) => { const cu = cuerda(c); cu.position.set(0, .12, .65); const bf = bandera(c, 0, -5.3); const P = [0, 2.5, .4]; const L = SEQ(c, a, [[['ATADOS POR EL TOBILLO'], 0, 'w', P, 2.0], [['HASTA EL LAGO'], tl, 'b', P, 1.4], [['UNA BANDERA'], tb, 'p', P, 1.3], [['¡Y VOLVER!'], tv, 'y', P, 1.1, 1]]); return { update: (u, tt, cam) => { L(u, cam); bf.rotation.y = Math.sin(u * 2) * .2; } }; },
  cam: [[0, [0, 1.3, 3.2], [0, .6, .6]], [tl - .3, [0, 1.3, 3.2], [0, .6, .6]], [tl + .6, [0, 2.2, 4.0], [0, .9, -4]], [99, [0, 2.2, 3.6], [0, .9, -4]]], f: [[0, 2.7], [tl - .3, 2.7], [tl + .6, 8.5], [99, 8.0]], k: 1, range: 6 }; });
// 69. Os caéis a los diez metros. Os volvéis a caer a los veinte.
Q(69, (d, a) => { const t1 = R0(a, 'diez'), t2 = R0(a, 'veinte'); const fall = (u) => { const f1 = smooth(t1 - .2, t1 + .1, u) * (1 - smooth(t1 + .9, t1 + 1.2, u)), f2 = smooth(t2 - .2, t2 + .1, u); return Math.max(f1, f2); }; const run = (dx) => (u) => { const x = lerp(-3, 2, smooth(0, d, u)); return [x + dx, 0, .2]; }; return { ...GYM, atores: [YO({ x: -3, z: .2, move: run(-.22), eyes: [[0, 'wide']], pose: (k, u) => { const f = fall(u); f > .1 ? k.pose({ armL: [150, 20], armR: [150, 20] }) : k.walk(u * 3); caido(k, f * 1.4); } }), ELA({ x: -3, z: .2, move: run(.22), eyes: [[0, 'wide'], [t1 + .3, 'happy']], pose: (k, u) => { const f = fall(u); f > .1 ? k.pose({ armL: [150, 20], armR: [150, 20] }) : k.walk(u * 3 + .5); caido(k, f * 1.4); } })],
  extra: (c) => { const cu = cuerda(c); const L = SEQ(c, a, [[['10 METROS: ¡PLAF!'], t1, 'r', [0, 2.4, .2], 1.7], [['20 METROS: ¡PLAF!'], t2, 'r', [0, 2.4, .2], 1.7, 1]]); return { update: (u, tt, cam) => { const x = lerp(-3, 2, smooth(0, d, u)); cu.position.set(x, .12, .25); L(u, cam); } }; },
  cam: [[0, [-3, 1.5, 4.2], [-3, .8, .2]], [d, [2, 1.5, 4.2], [2, .8, .2]]], f: [[0, 4.1], [d, 4.1]], k: 1, range: 4 }; });
// 70. Ella se ríe tanto que no puede ni levantarse.
Q(70, (d, a) => ({ ...GYM, atores: [ELA({ x: .4, z: .2, y: .15, eyes: [[0, 'happy']], pose: (k, u) => { k.pose({ armL: [60, 70], armR: [60, 70] }); caido(k, -1.35 + Math.sin(u * 14) * .05); } }), YO({ x: -.6, z: .2, y: .15, eyes: [[0, 'happy']], pose: (k, u) => { k.pose({ armL: [12, 8], armR: [12, 8] }); caido(k, 1.4 + Math.sin(u * 12) * .04); } })],
  extra: (c) => { const J = [gl(c, 'JA, JA, JA', .9, [.8, 1.3, .2]), gl(c, '¡JAJAJA!', .8, [-.9, 1.3, .2])]; const t = lw(c, ['NO PUEDE NI LEVANTARSE'], 2.0, [0, 1.9, .2]); return { update: (u, tt, cam) => { pop(J[0], u, .2, 99, cam); pop(J[1], u, 1.2, 99, cam); pop(t, u, 1.6, 99, cam); } }; },
  c: [[0, 2.0, 4.4], [-.1, .5, .2], [0, 1.9, 4.0], [-.1, .5, .2]], k: 1, range: 4 }));
// 71. Al final llegáis los últimos. Llenos de barro. Y sin bandera.
Q(71, (d, a) => { const tb = R0(a, 'barro'), ts = R0(a, 'sin'); return { ...GYM, atores: [YO({ x: -.25, z: .6, eyes: [[0, 'flat'], [ts, 'happy']] }), ELA({ x: .25, z: .6, eyes: [[0, 'happy']] })],
  extra: (c, s, A) => { let done = false; const P = [0, 2.4, .6]; const L = SEQ(c, a, [[['LOS ÚLTIMOS'], 0, 'w', P, 1.2], [['LLENOS DE BARRO'], tb, 'y', P, 1.6], [['Y SIN BANDERA'], ts, 'r', P, 1.5, 1]]); return { update: (u, tt, cam) => { if (!done) { barro(A[0], 8); barro(A[1], 8); done = true; } L(u, cam); } }; },
  c: [[0, 1.6, 3.2], [0, 1.3, .6], [0, 1.55, 2.7], [0, 1.3, .6]], range: 3 }; });
// 72. Pero no os importa. Es la mejor carrera de vuestra vida.
Q(72, (d, a) => { const tm = R0(a, 'mejor'); return { ...GYM, atores: [YO({ x: -.25, z: .6, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [150, 40] }) }), ELA({ x: .25, z: .6, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [150, 40], armR: [12, 8] }) })],
  extra: (c, s, A) => { let done = false; const b = brillos(c, 12, '#FFE27A'); const L = SEQ(c, a, [[['NO OS IMPORTA'], 0, 'w', [0, 2.5, .6], 1.4], [['LA MEJOR CARRERA DE VUESTRA VIDA'], tm - .3, 'p', [0, 2.5, .6], 2.8, 1]]); return { update: (u, tt, cam) => { if (!done) { barro(A[0], 8); barro(A[1], 8); done = true; } b(u, [0, 1.6, .7, 1.0]); L(u, cam); } }; },
  c: [[0, 1.6, 3.4], [0, 1.4, .6], [0, 1.55, 2.9], [0, 1.4, .6]], range: 3, look: { bloom: .45 } }; });
// 73. Y esto también tiene explicación. En el año 2000, Arthur Aron, el mismo del puente, hizo otro experimento con parejas.
Q(73, (d, a) => { const ta = R0(a, 'arthur'), tp = R0(a, 'puente'); return { amb: 'lab', fov: 30, atores: [CIENT(2, { x: 0, z: -.6, eyes: [[0, 'look']], pose: point })],
  extra: (c) => { const L = SEQ(c, a, [[['TAMBIÉN TIENE EXPLICACIÓN'], 0, 'w', [0, 2.6, -.6], 2.4], [['ARTHUR ARON'], ta, 'y', [0, 2.6, -.6], 1.3], [['EL MISMO DEL PUENTE'], tp - .3, 'w', [0, 2.6, -.6], 1.9], [['OTRO EXPERIMENTO CON PAREJAS'], 'experimento', 'y', [0, 2.6, -.6], 2.6, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[0, 1.8, 3.8], [0, 1.6, -.6], [0, 1.75, 3.2], [0, 1.6, -.6]], range: 3 }; });
// 74. A unas les tocó hacer algo aburrido: pasar una pelota despacio de un lado a otro de una sala.
Q(74, (d, a) => { const tp = R0(a, 'pelota'); return { amb: 'lab', fov: 32, atores: [EXTRA(3, { x: -1.2, z: -.3, eyes: [[0, 'flat']], pose: (k) => k.pose({ armL: [60, 70], armR: [60, 70] }) }), EXTRA(5, { x: 1.2, z: -.3, eyes: [[0, 'flat']], pose: (k) => k.pose({ armL: [60, 70], armR: [60, 70] }) })],
  extra: (c) => { colchoneta(c, 0, -.3, 3, '#8A8E98'); const b = new THREE.Mesh(new THREE.SphereGeometry(.12, 16, 12), std('#E8667F')); c.add(b); const L = SEQ(c, a, [[['ALGO ABURRIDO'], 0, 'w', [0, 2.3, -.3], 1.4], [['PASAR UNA PELOTA, DESPACIO'], tp, 'w', [0, 2.3, -.3], 2.4, 1]]); const z = zzz(c);
    return { update: (u, tt, cam) => { const f = (Math.sin((u - tp) * .9) + 1) / 2; b.visible = u > tp - .3; b.position.set(lerp(-.95, .95, f), .2, -.3); b.rotation.z = -u * 2; L(u, cam); z(u, [1.6, 1.8, -.3], cam); } }; },
  c: [[0, 1.65, 3.6], [0, 1.2, -.3], [0, 1.6, 3.1], [0, 1.2, -.3]], range: 3, look: { exposure: .95 } }; });
// 75. A otras, algo nuevo y emocionante: atadas por la muñeca y el tobillo… empujando un cojín sin usar las manos. Y con el tiempo contado.
Q(75, (d, a) => { const tt = R0(a, 'atadas'), tc = R0(a, 'cojin'), tm = R0(a, 'manos'), tz = R0(a, 'tiempo'); const mv = (x0) => (u) => [x0 + lerp(-1.4, 1.4, smooth(tt, d - .3, u)), 0, -.3]; const paso = (k, u) => (u > tt ? k.walk(u * 1.4) : k.pose()); return { amb: 'lab', fov: 32, atores: [EXTRA(0, { x: -1.6, z: -.3, eyes: [[0, 'look'], [tt, 'happy']], move: mv(-.22), pose: (k, u) => { paso(k, u); k.pose({ armR: [60, 80] }); } }), EXTRA(1, { x: -1.2, z: -.3, eyes: [[0, 'lookl'], [tt, 'happy']], move: mv(.22), pose: (k, u) => { paso(k, u); k.pose({ armL: [60, 80] }); } })],
  extra: (c, s, A) => { colchoneta(c, -.2, -.3, 4.2); for (const x of [-.4, .8]) valla(c, x, -.3); const cj = cojin(); c.add(cj); const cu = box(.5, .05, .05, std('#C9A050'), 0, 0, 0, false); c.add(cu); const n = contador(c, [2.3, 1.9, -.6], 1.0, (u) => `0:${String(Math.max(0, 59 - Math.floor((u - tz) * 8))).padStart(2, '0')}`, { w: 500, h: 200, size: 110 }); const P = [-.2, 2.5, -.4];
    const L = SEQ(c, a, [[['ALGO NUEVO Y EMOCIONANTE'], 0, 'y', P, 2.3], [['ATADOS: MUÑECA Y TOBILLO'], tt, 'w', P, 2.3], [['¡CON UN COJÍN!'], tc, 'p', P, 1.4], [['SIN USAR LAS MANOS'], tm - .4, 'w', P, 1.8], [['CON EL TIEMPO CONTADO'], tz, 'r', P, 2.1, 1]]);
    return { update: (u, tt2, cam) => { const p0 = new THREE.Vector3(), p1 = new THREE.Vector3(); A[0].torso.getWorldPosition(p0); A[1].torso.getWorldPosition(p1); cj.position.set((p0.x + p1.x) / 2, p0.y + .05, p0.z + .25); cj.visible = u > tc - .3; cu.position.set((p0.x + p1.x) / 2, .15, p0.z); n.userData.upd(u); n.visible = u > tz - .2; L(u, cam); } }; },
  c: [[0, 1.8, 5.2], [0, 1.35, -.4], [0, 1.75, 4.8], [0, 1.35, -.4]], range: 4, k: 1 }; });
// 76. Las parejas que hicieron la prueba difícil dijeron después que se sentían más unidas. Hacer cosas nuevas juntos… acerca a la gente.
Q(76, (d, a) => { const th = R0(a, 'hacer'), tl = R0(a, 'locas'); return { amb: 'gris', fov: 30, k: 1, atores: [EXTRA(0, { x: -2.15, z: -.3, eyes: [[0, 'happy']] }), EXTRA(1, { x: -1.6, z: -.3, eyes: [[0, 'happy']] })],
  extra: (c) => { const b = barras(c, [['PRUEBA\nDIFÍCIL', .88, '#E8447A'], ['ALGO\nABURRIDO', .5, '#8A8E98']], 2.3, [.6, 1.55, -.5], { title: 'SE SENTÍAN MÁS UNIDAS' }); const L = SEQ(c, a, [[['COSAS NUEVAS JUNTOS'], th, 'y', [0, 2.55, -.4], 2.0], [['SI SON UN POCO LOCAS, MEJOR'], tl - .6, 'p', [0, 2.55, -.4], 2.5, 1]]); const h = corazon(c, .4); h.position.set(-1.88, 2.2, -.3); return { update: (u, tt, cam) => { pop(b, u, .1, 99, cam); L(u, cam); h.scale.setScalar(latido(u)); pointer(h, cam); } }; },
  c: [[-.3, 1.6, 4.4], [-.3, 1.55, -.4], [-.3, 1.6, 3.9], [-.3, 1.55, -.4]], range: 3 }; });
// 77. Y no hay nada más nuevo y más loco que acabar dentro de un charco con tu crush.
Q(77, (d, a) => { const tc = R0(a, 'charco'); return { ...GYM, atores: [YO({ x: .9, z: -1.0, y: -.35, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [150, 40], armR: [150, 40] }) }), ELA({ x: 1.5, z: -1.2, y: -.35, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [150, 40], armR: [12, 8], head: Math.sin(u * 6) * 8 }) })],
  extra: (c, s, A) => { let done = false; const S2 = []; for (let i = 0; i < 10; i++) { const g = glowSprite('#6A4A2E', .14, 0); g.material.blending = THREE.NormalBlending; c.add(g); S2.push(g); } const t = lab(c, ['DENTRO DE UN CHARCO CON TU CRUSH'], 2.8, [1.2, 2.2, -1.0], PINK);
    return { update: (u, tt, cam) => { if (!done) { barro(A[0], 10); barro(A[1], 10); done = true; } S2.forEach((g, i) => { const f = (u * 1.2 + i / 10) % 1; g.position.set(1.2 + Math.sin(i * 2.1) * f * 1.2, .1 + Math.sin(f * Math.PI) * .8, -1.1 + Math.cos(i) * .3); g.material.opacity = .9 * (1 - f); }); pop(t, u, tc - .4, 99, cam); } }; },
  c: [[1.2, 1.5, 2.6], [1.2, .8, -1.1], [1.2, 1.45, 2.2], [1.2, .8, -1.1]], k: 1, range: 3 }; });
// 78. Martes, 21:00
HORA(78, 9, '21:00', 'MARTES POR LA NOCHE');
// 79. Hoguera junto al lago. La tutora reparte nubes de azúcar para tostarlas en el fuego.
Q(79, (d, a) => { const tn = R0(a, 'nubes'); return { ...NOCHEL, atores: [TUTORA({ x: 1.1, z: .8, eyes: [[0, 'happy']], talk: [[tn - .5, tn + 1]], pose: (k) => k.pose({ armL: [12, 8], armR: [70, 40] }) }), YO({ x: -1.6, z: .9, eyes: [[0, 'look']] }), ELA({ x: -1.0, z: 1.3, eyes: [[0, 'happy']] }), EXTRA(0, { x: -1.9, z: -.3 }), AMI({ x: .7, z: -.8 }), EXTRA(4, { x: -.6, z: -1.1 })],
  extra: (c, s, A) => { const f = fogata(); f.position.set(-.2, 0, .1); f.scale.setScalar(1.6); c.add(f); const bo = new THREE.Group(); for (let i = 0; i < 3; i++) { const n = new THREE.Mesh(new THREE.CylinderGeometry(.06, .06, .1, 12), std('#FBF7EC')); n.position.set(i * .1 - .1, 0, 0); bo.add(n); } c.add(bo); const L = SEQ(c, a, [[['HOGUERA JUNTO AL LAGO'], 0, 'y', [-.2, 2.6, .1], 2.2], [['NUBES DE AZÚCAR'], tn, 'p', [-.2, 2.6, .1], 1.7, 1]]);
    return { update: (u, tt, cam) => { f.tick(u); const p = hand(A[0]); bo.position.set(p.x, p.y + .08, p.z + .1); bo.visible = u > tn - .4; L(u, cam); } }; },
  c: [[0, 2.2, 5.4], [-.2, .9, -.2], [0, 2.1, 4.8], [-.2, .9, -.2]], range: 5, look: LLOOK }; });
// 80. La tuya se quema. La de ella se cae al fuego. Os reís otra vez.
Q(80, (d, a) => { const tc = R0(a, 'cae'), tr = R0(a, 'reis'); return { ...NOCHEL, atores: [YO({ x: -.8, z: .6, eyes: [[0, 'look'], [1.0, 'wide'], [tr, 'happy']], pose: (k) => k.pose({ armL: [12, 8], armR: [70, 30] }) }), ELA({ x: .6, z: .6, eyes: [[0, 'look'], [tc + .3, 'wide'], [tr, 'happy']], pose: (k) => k.pose({ armL: [70, 30], armR: [12, 8] }) })],
  extra: (c, s, A) => { const f = fogata(); f.position.set(-.1, 0, .2); f.scale.setScalar(1.4); c.add(f); const p1 = palo(c), p2 = palo(c); const sm = []; for (let i = 0; i < 8; i++) { const g = glowSprite('#202024', .3, 0); g.material.blending = THREE.NormalBlending; c.add(g); sm.push(g); } const L = SEQ(c, a, [[['LA TUYA SE QUEMA'], .2, 'r', [-.1, 2.4, .2], 1.6], [['LA DE ELLA, AL FUEGO'], tc, 'r', [-.1, 2.4, .2], 1.8], [['OS REÍS OTRA VEZ'], tr, 'p', [-.1, 2.4, .2], 1.6, 1]]);
    return { update: (u, tt, cam) => { f.tick(u); const a0 = hand(A[0]), a1 = hand(A[1]); p1.position.set(a0.x, a0.y, a0.z); p1.lookAt(-.1, .45, .2); p2.position.set(a1.x, a1.y, a1.z); p2.lookAt(-.1, .45, .2); const q = smooth(.4, 1.4, u); p1.nube.material.color.set(q > .5 ? '#2A2220' : '#FBF7EC'); p2.nube.visible = u < tc + .3; sm.forEach((g, i) => { const k = ((u - .6) * .6 + i / 8) % 1; g.position.set(-.35 + Math.sin(i) * .08, .55 + k * 1.2, .35); g.material.opacity = u > .6 && u < tr ? .6 * (1 - k) : 0; }); L(u, cam); } }; },
  c: [[-.1, 1.6, 3.6], [-.1, .9, .2], [-.1, 1.55, 3.1], [-.1, .9, .2]], range: 3, look: LLOOK }; });
// ===================== CENAS 81–117 =====================
const FOG2 = (c, s = 1.2) => { const f = fogata(); f.position.set(0, 0, .3); f.scale.setScalar(s); c.add(f); return f; };
const SENTS = (o = {}) => ({ y: -.5, pose: (k, u) => { sitP(k); k.pose({ armL: [40, 40], armR: [40, 40], ...(o.p || {}) }); } });
const MESAP = (c, x, z) => { c.add(box(1.0, .06, .6, std('#C8A27A'), x, .75, z)); for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) c.add(box(.05, .75, .05, std('#6A6E78'), x + a * .44, .37, z + b * .25)); };
const CHICAS = [0, 1, 2, 3].map((i) => (o = {}) => MUJ([0, 3, 5, 7][i], { ...o }));
const COMED = { amb: 'comedor', fov: 32 };
const DISCO = (c) => (u) => { if (c.userData.disco) c.userData.disco(u); };
const DLOOK = { bloom: .55, exposure: 1.0 };
// 81. Todos se van a dormir y vosotros os quedáis un rato más, mirando las estrellas. En la ciudad nunca se ven tantas.
Q(81, (d, a) => { const te = R0(a, 'estrellas'), tc = R0(a, 'ciudad'); return { ...NOCHEL, atores: [YO({ x: -.45, z: .6, ...SENTS(), eyes: [[0, 'look'], [te, 'happy']], pose: (k, u) => { sitP(k); k.pose({ armL: [40, 40], armR: [40, 40], head: u > te ? -20 : 0 }); } }), ELA({ x: .45, z: .6, ...SENTS(), eyes: [[0, 'happy']], pose: (k, u) => { sitP(k); k.pose({ armL: [40, 40], armR: [40, 40], head: u > te ? -20 : 0 }); } })],
  extra: (c) => { const f = FOG2(c, .8); f.position.set(0, 0, 1.6); const b = brillos(c, 16, '#FFFFFF'); const L = SEQ(c, a, [[['OS QUEDÁIS UN RATO MÁS'], 0, 'w', [0, 2.3, .4], 2.2], [['MIRANDO LAS ESTRELLAS'], te, 'y', [0, 2.3, .4], 2.0], [['EN LA CIUDAD NUNCA SE VEN TANTAS'], tc, 'p', [0, 2.3, .4], 2.8, 1]]); return { update: (u, tt, cam) => { f.tick(u); b(u, [0, 3.2, -2, 3]); L(u, cam); } }; },
  cam: [[0, [0, 1.0, 3.6], [0, 1.0, .6]], [d, [0, 1.3, 3.4], [0, 2.0, -1]]], f: [[0, 3.0], [d, 3.0]], k: 1, range: 4, look: LLOOK }; });
// 82. Y entonces ella dice algo raro. "¿Sabes que llevo todo el curso sentándome detrás de ti en mates?"
Q(82, (d, a) => { const ts = R0(a, 'sabes'); return { ...NOCHEL, fov: 30, atores: [YO({ x: -.4, z: .6, ...SENTS(), eyes: [[0, 'look'], [ts + 2, 'wide']] }), ELA({ x: .4, z: .6, ...SENTS(), talk: [[ts, d]], eyes: [[0, 'look'], [ts, 'happy']] })],
  extra: (c) => { const f = FOG2(c, .8); f.position.set(0, 0, 1.6); const t = lw(c, ['ALGO RARO'], 1.0, [0, 1.95, .5]); const g = hab(c, ['¿SABES QUE LLEVO TODO', 'EL CURSO SENTÁNDOME', 'DETRÁS DE TI EN MATES?'], 1.6, [.6, 1.7, .6], 52); return { update: (u, tt, cam) => { f.tick(u); pop(t, u, .2, ts - .2, cam); pop(g, u, ts, 99, cam); } }; },
  c: [[0, 1.4, 4.1], [0, 1.2, .6], [0, 1.38, 3.7], [0, 1.2, .6]], k: 1, range: 3, look: LLOOK }; });
// 83. Tú no lo sabías. "Y no hemos hablado ni una vez. Hasta esta semana."
Q(83, (d, a) => { const ty = R0(a, 'hemos'); return { ...AULA(), atores: [YO({ x: -.2, z: .3, eyes: [[0, 'flat']] }), ELA({ x: -.2, z: -1.3, eyes: [[0, 'look']] })],
  extra: (c) => { pupitres(c, [-.2], .55); pupitres(c, [-.2], -1.0); QA(c); const t = lw(c, ['NO LO SABÍAS'], 1.2, [-.2, 2.2, .4]); const g = hab(c, ['NI UNA VEZ.', 'HASTA ESTA SEMANA.'], 1.4, [1.0, 2.1, -.6], 58); return { update: (u, tt, cam) => { pop(t, u, .1, ty - .3, cam); pop(g, u, ty, 99, cam); } }; },
  c: [[1.6, 1.8, 3.6], [-.2, 1.3, -.4], [1.4, 1.75, 3.1], [-.2, 1.3, -.4]], range: 4, look: MEMO }; });
// 84. Se encoge de hombros. "Pero no sé. Ya me caías bien. Antes de hablar contigo."
Q(84, (d, a) => { const tp = R0(a, 'pero'), ty = R0(a, 'caias'); return { ...NOCHEL, fov: 30, atores: [YO({ x: -.4, z: .6, ...SENTS(), eyes: [[0, 'look'], [ty, 'heart']] }), ELA({ x: .4, z: .6, ...SENTS(), talk: [[tp, d]], eyes: [[0, 'happy']], pose: (k, u) => { sitP(k); k.pose({ armL: [u < tp ? 60 : 40, 40], armR: [u < tp ? 60 : 40, 40], bob: u < tp ? Math.abs(Math.sin(u * 6)) * .03 : 0 }); } })],
  extra: (c, s, A) => { const f = FOG2(c, .8); f.position.set(0, 0, 1.6); const r = rubor(A[1]); const g = hab(c, ['PERO NO SÉ. YA ME CAÍAS', 'BIEN. ANTES DE HABLAR', 'CONTIGO.'], 1.6, [.6, 1.7, .6], 52); return { update: (u, tt, cam) => { f.tick(u); pop(g, u, tp, 99, cam); r(.25 * smooth(ty, ty + .6, u)); } }; },
  c: [[0, 1.4, 4.1], [0, 1.2, .6], [0, 1.38, 3.7], [0, 1.2, .6]], k: 1, range: 3, look: LLOOK }; });
// 85. ¿Cómo puede caerte bien alguien con quien no has hablado nunca?
Q(85, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [YO({ x: 0, z: -.3, eyes: [[0, 'look']], pose: (k) => k.pose({ armL: [12, 8], armR: [150, 120] }) })],
  extra: (c) => { const t = lab(c, ['¿CÓMO PUEDE CAERTE BIEN', 'ALGUIEN CON QUIEN NUNCA', 'HAS HABLADO?'], 2.4, [0, 2.05, -.3], { h: 330 }); return { update: (u, tt, cam) => pop(t, u, .1, 99, cam) }; },
  c: [[0, 1.6, 3.6], [0, 1.5, -.3], [0, 1.6, 3.1], [0, 1.5, -.3]], range: 3 }));
// 86. En 1992, dos psicólogos de la Universidad de Pittsburgh, Richard Moreland y Scott Beach, hicieron un experimento en una clase de la universidad.
Q(86, (d, a) => { const tr = R0(a, 'richard'), tc = R0(a, 'clase'); return { ...AULA(), atores: [PROF({ x: -1.0, z: -1.4, eyes: [[0, 'look']], pose: point }), PROF({ x: 1.0, z: -1.4, hair: 'old', hairc: '#6A5A4A', eyes: [[0, 'look']] }), EXTRA(0, { x: -1.6, z: 1.0 }), EXTRA(2, { x: 0, z: 1.0 }), EXTRA(5, { x: 1.6, z: 1.0 })],
  extra: (c) => { pupitres(c, [-1.6, 0, 1.6], 1.5); lab(c, ['UNIVERSIDAD DE PITTSBURGH'], 3.2, [0, 3.3, -3.4], BLUE); const L = SEQ(c, a, [[['MORELAND Y BEACH'], tr, 'w', [0, 2.6, -1.3], 1.8], [['UNA CLASE DE LA UNIVERSIDAD'], tc - .5, 'y', [0, 2.6, -1.3], 2.5, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[0, 2.1, 5.6], [0, 1.6, -1.2], [0, 2.0, 5.0], [0, 1.6, -1.2]], range: 6 }; });
// 87. Pidieron a cuatro chicas parecidas que fueran a esa clase durante todo el semestre.
Q(87, (d, a) => { const ts = R0(a, 'semestre'); return { amb: 'gris', fov: 30, k: 1, atores: CHICAS.map((f, i) => f({ x: -1.65 + i * 1.1, z: -.3, eyes: [[0, 'look']] })),
  extra: (c) => { const N = ['A', 'B', 'C', 'D'].map((n, i) => lw(c, [n], .35, [-1.65 + i * 1.1, 2.05, -.3], { size: 80, w: 200 })); const L = SEQ(c, a, [[['4 CHICAS PARECIDAS'], 0, 'y', [0, 2.55, -.3], 1.9], [['TODO EL SEMESTRE'], ts - .3, 'w', [0, 2.55, -.3], 1.7, 1]]); return { update: (u, tt, cam) => { N.forEach((m, i) => pop(m, u, .3 + i * .2, 99, cam)); L(u, cam); } }; },
  c: [[0, 1.6, 5.0], [0, 1.5, -.3], [0, 1.6, 4.4], [0, 1.5, -.3]], range: 4 }; });
// 88. Una no fue nunca. Otra fue cinco veces. Otra, diez. Y otra, quince.
Q(88, (d, a) => { const T = [R0(a, 'nunca'), R0(a, 'cinco'), R0(a, 'diez'), R0(a, 'quince')]; return { amb: 'gris', fov: 30, k: 1, atores: CHICAS.map((f, i) => f({ x: -1.65 + i * 1.1, z: -.3, eyes: [[0, 'look'], [T[i], 'happy']] })),
  extra: (c) => { const N = ['0', '5', '10', '15'].map((n, i) => lab(c, [n + (i ? ' VECES' : ' VECES')], .8, [-1.65 + i * 1.1, 2.05, -.3], { size: 64 })); return { update: (u, tt, cam) => N.forEach((m, i) => pop(m, u, T[i] - .2, 99, cam)) }; },
  c: [[0, 1.6, 5.0], [0, 1.5, -.3], [0, 1.6, 4.4], [0, 1.5, -.3]], range: 4 }; });
// 89. No hablaban con nadie. Solo se sentaban allí.
Q(89, (d, a) => { const ts = R0(a, 'sentaban'); return { ...AULA(), atores: [MUJ(7, { x: .2, z: .3, eyes: [[0, 'flat']] }), EXTRA(1, { x: -1.2, z: .3, eyes: [[0, 'look']] }), EXTRA(4, { x: 1.6, z: .3, eyes: [[0, 'shut']] })],
  extra: (c) => { pupitres(c, [-1.2, .2, 1.6], .8); const L = SEQ(c, a, [[['NO HABLABAN CON NADIE'], 0, 'w', [.2, 2.35, .3], 2.0], [['SOLO SE SENTABAN ALLÍ'], ts - .3, 'y', [.2, 2.35, .3], 2.0, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[.2, 1.7, 3.8], [.2, 1.4, .3], [.2, 1.65, 3.3], [.2, 1.4, .3]], range: 3 }; });
// 90. Al final del curso, enseñaron sus fotos a los alumnos. Y cuantas más veces… más simpática y más atractiva… Sin haber hablado con ella nunca.
Q(90, (d, a) => { const tf = R0(a, 'fotos'), tc = R0(a, 'cuantas'), ts = R0(a, 'sin'); return { amb: 'gris', fov: 30, k: 1, atores: [],
  extra: (c) => { const F = [0, 1, 2, 3].map((i) => { const m = cartelCara(['A', 'B', 'C', 'D'][i], ['#6A3AB8', '#2F5A9A', '#3F8A52', '#C9365A'][i], .6); m.position.set(-1.65 + i * 1.1, 1.85, -.6); c.add(m); return m; }); const b = barras(c, [['0', .3, '#8A8E98'], ['5', .5, '#B89AF2'], ['10', .7, '#E8667F'], ['15', .9, '#E8447A']], 2.6, [0, 1.35, -.4], { title: 'CUÁNTO LES GUSTABA' }); const t = lab(c, ['SIN HABER HABLADO NUNCA'], 2.2, [0, 2.65, -.4], PINK); const t0 = lw(c, ['ENSEÑARON SUS FOTOS'], 1.9, [0, 2.65, -.4]);
    return { update: (u, tt, cam) => { F.forEach((m, i) => { m.visible = u > tf - .2 + i * .15 && u < tc - .2; }); pop(t0, u, tf - .2, tc - .2, cam); pop(b, u, tc - .1, 99, cam); pop(t, u, ts - .2, 99, cam); } }; },
  c: [[0, 1.75, 4.6], [0, 1.65, -.5], [0, 1.75, 4.1], [0, 1.65, -.5]], range: 4 }; });
// 91. Lo llaman el efecto de la mera exposición. Lo que vemos muchas veces, nos acaba gustando.
Q(91, (d, a) => { const tl = R0(a, 'vemos'); return { amb: 'lab', fov: 30, atores: [],
  extra: (c) => { const L = SEQ(c, a, [[['EL EFECTO DE LA', 'MERA EXPOSICIÓN'], 0, 'y', [0, 1.8, -1], 2.4], [['LO QUE VEMOS MUCHO,', 'NOS ACABA GUSTANDO'], tl - .2, 'p', [0, 1.8, -1], 2.4, 1]]); const h = corazon(c, .5); h.position.set(0, .9, -.9); return { update: (u, tt, cam) => { L(u, cam); h.visible = u > tl; h.scale.setScalar(latido(u)); } }; },
  c: [[0, 1.6, 3.8], [0, 1.6, -1], [0, 1.6, 3.2], [0, 1.6, -1]], k: 1, range: 3 }; });
// 92. O sea, que durante todo el curso… tu nuca le iba cayendo bien.
Q(92, (d, a) => { const tn = R0(a, 'nuca'); return { ...AULA(), atores: [YO({ x: -.2, z: .3, eyes: [[0, 'flat']] }), ELA({ x: -.2, z: -1.3, eyes: [[0, 'look'], [tn, 'heart']] })],
  extra: (c) => { pupitres(c, [-.2], .55); pupitres(c, [-.2], -1.0); QA(c); const n = contador(c, [1.4, 2.4, -.4], 1.2, (u) => `DÍA ${Math.min(160, Math.max(1, Math.floor(u * 22)))}`, { w: 600, h: 200, size: 100 }); const H2 = [0, 1, 2].map(() => corazon(c, .22)); const t = lab(c, ['TU NUCA LE IBA CAYENDO BIEN'], 2.4, [-.2, 2.45, .4], PINK);
    return { update: (u, tt, cam) => { n.userData.upd(u); n.visible = u < tn; H2.forEach((h, i) => { const f = (u * .5 + i / 3) % 1; h.position.set(-.2 + Math.sin(i * 2) * .2, 1.6 + f * .5, -1.0 + f * 1.1); h.visible = u > 1.5; h.material.opacity = Math.sin(f * Math.PI); pointer(h, cam); }); pop(t, u, tn - .3, 99, cam); } }; },
  c: [[1.6, 1.8, 3.6], [-.2, 1.4, -.4], [1.4, 1.75, 3.1], [-.2, 1.4, -.4]], range: 4, look: MEMO }; });
// 93. Miércoles. Excursión al pico. Tres horas de subida.
Q(93, (d, a) => { const te = R0(a, 'excursion'), tt0 = R0(a, 'tres'); const mv = (dx, dz) => (u) => [dx, 0, lerp(1, -6, u / d) + dz]; return { amb: 'sendero', fov: 34, atores: [MONITOR({ x: 0, move: mv(0, -1.5), pose: (k, u) => k.walk(u) }), YO({ x: -.3, move: mv(-.35, 0), pose: (k, u) => k.walk(u) }), ELA({ x: .3, move: mv(.35, .2), pose: (k, u) => k.walk(u + .5) }), AMI({ move: mv(0, 1.4), pose: (k, u) => k.walk(u + .3) })],
  extra: (c) => { const L = SEQ(c, a, [[['MIÉRCOLES'], 0, 'y', [0, 2.8, -2], 1.3], [['EXCURSIÓN AL PICO'], te, 'w', [0, 2.8, -2], 1.8], [['3 HORAS DE SUBIDA'], tt0, 'r', [0, 2.8, -2], 1.8, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  cam: [[0, [2.2, 1.9, 5], [0, 1.0, -.5]], [d, [2.2, 1.9, -1.5], [0, 1.0, -7]]], f: [[0, 6], [d, 6]], k: 1, range: 6 }; });
// 94. A mitad de camino, ella tropieza y se hace una herida en la rodilla.
Q(94, (d, a) => { const tt0 = R0(a, 'tropieza'), th = R0(a, 'herida'); return { amb: 'sendero', fov: 32, atores: [ELA({ x: .3, z: 0, move: (u) => [.3, u > tt0 + .3 ? -.35 : 0, u < tt0 ? lerp(1.2, .2, u / tt0) : .2], eyes: [[0, 'look'], [tt0, 'wide'], [th, 'sad']], pose: (k, u) => { if (u < tt0) k.walk(u); else { k.pose({ armL: [60, 60], armR: [60, 60] }); caido(k, 0); } } }), YO({ x: -.5, z: .4, eyes: [[0, 'look'], [tt0 + .2, 'wide']], pose: (k, u) => (u > tt0 + .2 ? k.pose({ armL: [12, 8], armR: [40, 0] }) : k.walk(u)) })],
  extra: (c) => { const t = lw(c, ['A MITAD DE CAMINO'], 1.6, [0, 2.05, .2]); const ay = gl(c, '¡AY!', .6, [.7, 1.6, .3]); const t2 = lab(c, ['UNA HERIDA EN LA RODILLA'], 2.1, [0, 2.05, .2], RED); return { update: (u, tt, cam) => { pop(t, u, 0, tt0 - .2, cam); pop(ay, u, tt0 + .1, th, cam); pop(t2, u, th, 99, cam); } }; },
  c: [[0, 1.6, 3.8], [0, 1.0, .2], [0, 1.55, 3.3], [0, 1.0, .2]], range: 3 }; });
// 95. Tú llevas tiritas… "¿Tu abuela ha hecho tu mochila?" "Sí." "Me cae bien tu abuela."
Q(95, (d, a) => { const tl = R0(a, 'tiritas'), ta = R0(a, 'abuela'), tm = R0(a, 'mira'), tq = R0(a, 'tu', tm), ts = R0(a, 'si', tm + 1), tc = R0(a, 'cae'); return { amb: 'sendero', fov: 30, atores: [ELA({ x: .35, y: -.35, z: .2, eyes: [[0, 'sad'], [tm, 'look'], [tc, 'happy']], talk: [[tq, ts - .2], [tc - .2, d]], pose: (k) => k.pose({ armL: [60, 60], armR: [60, 60] }) }), YO({ x: -.35, y: -.3, z: .3, eyes: [[0, 'look'], [ts + .4, 'flat'], [tc, 'happy']], talk: [[ts, ts + .5]], pose: (k) => k.pose({ armL: [12, 8], armR: [40, 20], lean: 6 }) })],
  extra: (c) => { const ti = box(.18, .07, .01, std('#F2C8A0'), .3, .35, .45, false); c.add(ti); const L = SEQ(c, a, [[['TÚ LLEVAS TIRITAS'], 0, 'y', [0, 2.0, .2], 1.7], [['TAMBIÉN LAS METIÓ TU ABUELA'], ta - .5, 'w', [0, 2.0, .2], 2.4, 0, ]]); const G = [hab(c, ['¿TU ABUELA HA', 'HECHO TU MOCHILA?'], 1.3, [.8, 1.75, .2], 56), hab(c, ['SÍ.'], .5, [-.8, 1.7, .3], 70), hab(c, ['ME CAE BIEN', 'TU ABUELA.'], 1.1, [.8, 1.75, .2], 60)];
    return { update: (u, tt, cam) => { ti.visible = u > tl; if (u < tq - .2) L(u, cam); else L(-1, cam); pop(G[0], u, tq, ts - .1, cam); pop(G[1], u, ts, tc - .2, cam); pop(G[2], u, tc - .1, 99, cam); } }; },
  c: [[0, 1.4, 3.6], [0, 1.15, .2], [0, 1.4, 3.2], [0, 1.15, .2]], range: 3 }; });
// 96. Arriba, todos se hacen fotos. Ella te pide que te pongas a su lado. Y en la foto… te coge del brazo.
Q(96, (d, a) => { const tl = R0(a, 'lado'), tf = R0(a, 'foto', tl), tb = R0(a, 'brazo'); return { amb: 'cima', fov: 32, atores: [YO({ x: -.3, z: .2, eyes: [[0, 'look'], [tb, 'heart']], pose: (k) => k.pose({ armL: [12, 8], armR: [30, 0] }) }), ELA({ x: .3, z: .2, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [u > tb - .2 ? 40 : 12, u > tb - .2 ? 30 : 8], armR: [150, 40] }) }), EXTRA(1, { x: -2.2, z: -.6, eyes: [[0, 'happy']], pose: (k) => k.pose({ armL: [12, 8], armR: [150, 40] }) }), AMI({ x: 2.2, z: -.4, eyes: [[0, 'happy']] })],
  extra: (c) => { const fl = glowSprite('#FFFFFF', 3, 0); fl.position.set(0, 1.5, 1.5); c.add(fl); const ph = foto(c, .9, [1.25, 1.55, .5], true); const L = SEQ(c, a, [[['ARRIBA DEL TODO'], 0, 'w', [0, 2.45, .2], 1.6], [['A SU LADO'], tl - .2, 'p', [0, 2.45, .2], 1.1], [['TE COGE DEL BRAZO'], tb - .2, 'p', [0, 2.45, .2], 1.8, 1]]); return { update: (u, tt, cam) => { fl.material.opacity = u > tf && u < tf + .2 ? 1 : 0; ph.visible = u > tb + .4; ph.rotation.z = -.1; L(u, cam); } }; },
  c: [[0, 1.8, 4.2], [0, 1.4, 0], [0, 1.75, 3.6], [0, 1.4, 0]], range: 4 }; });
// 97. Jueves, última noche
HORA(97, 9, 'JUEVES', 'ÚLTIMA NOCHE');
// 98. Fiesta en el comedor del albergue. Luces de colores. Música alta. Todos bailan.
Q(98, (d, a) => { const tl = R0(a, 'luces'), tm = R0(a, 'musica'), tb = R0(a, 'bailan'); return { ...COMED, atores: [EXTRA(0, { x: -1.4, z: -.6, eyes: [[0, 'happy']], pose: (k, u) => dance(k, u) }), EXTRA(1, { x: -.4, z: -1.2, eyes: [[0, 'happy']], pose: (k, u) => dance(k, u + 1) }), EXTRA(2, { x: .6, z: -.5, eyes: [[0, 'happy']], pose: (k, u) => dance(k, u + 2) }), AMI({ x: 1.6, z: -1.1, eyes: [[0, 'happy']], pose: (k, u) => dance(k, u + .5, 1.4) }), EXTRA(6, { x: 0, z: .3, eyes: [[0, 'happy']], pose: (k, u) => dance(k, u + 1.5) })],
  extra: (c) => { const ds = DISCO(c); const no = notas(c, 8); const P = [0, 2.6, -.4]; const L = SEQ(c, a, [[['FIESTA EN EL COMEDOR'], 0, 'y', P, 2.0], [['LUCES DE COLORES'], tl, 'p', P, 1.7], [['MÚSICA ALTA'], tm, 'w', P, 1.3], [['TODOS BAILAN'], tb, 'y', P, 1.4, 1]]); return { update: (u, tt, cam) => { ds(u); no(u, new THREE.Vector3(-1.5, 1.6, -1), cam); L(u, cam); } }; },
  c: [[0, 2.0, 5.4], [0, 1.3, -.6], [0, 1.95, 4.8], [0, 1.3, -.6]], range: 5, look: DLOOK }; });
// 99. Tú no bailas. Nunca bailas.
Q(99, (d, a) => { const tn = R0(a, 'nunca'); return { ...COMED, atores: [YO({ x: -3.0, z: -1.2, eyes: [[0, 'flat']], pose: (k) => k.pose({ armL: [60, 90], armR: [60, 90] }) }), EXTRA(0, { x: -1.0, z: -.6, eyes: [[0, 'happy']], pose: (k, u) => dance(k, u) }), EXTRA(2, { x: 0, z: -.9, eyes: [[0, 'happy']], pose: (k, u) => dance(k, u + 2) })],
  extra: (c) => { const ds = DISCO(c); const L = SEQ(c, a, [[['TÚ NO BAILAS'], 0, 'w', [-3.0, 2.3, -1.1], 1.3], [['NUNCA'], tn, 'r', [-3.0, 2.3, -1.1], .8, 1]]); return { update: (u, tt, cam) => { ds(u); L(u, cam); } }; },
  c: [[-2.0, 1.7, 2.6], [-2.8, 1.4, -1.2], [-2.2, 1.65, 2.2], [-2.8, 1.4, -1.2]], range: 3, look: DLOOK }; });
// 100. Y entonces ponen una canción. La de los auriculares. La que nadie conoce.
Q(100, (d, a) => { const ta = R0(a, 'auriculares'), tn = R0(a, 'nadie'); return { ...COMED, atores: [YO({ x: -3.0, z: -1.2, eyes: [[0, 'flat'], [ta, 'wide']], pose: (k, u) => k.pose({ armL: [60, 90], armR: [60, 90], head: u > ta ? Math.sin(u * 6) * 5 : 0 }) })],
  extra: (c) => { const ds = DISCO(c); const no = notas(c, 8); const L = SEQ(c, a, [[['PONEN UNA CANCIÓN'], 0, 'w', [-2.6, 2.3, -1.1], 1.7], [['LA DE LOS AURICULARES'], ta - .2, 'y', [-2.6, 2.3, -1.1], 2.0], [['LA QUE NADIE CONOCE'], tn - .2, 'p', [-2.6, 2.3, -1.1], 1.9, 1]]); return { update: (u, tt, cam) => { ds(u); no(u, new THREE.Vector3(-2.6, 1.7, -1), cam); L(u, cam); } }; },
  c: [[-2.4, 1.7, 2.6], [-2.8, 1.45, -1.2], [-2.5, 1.65, 2.2], [-2.8, 1.45, -1.2]], range: 3, look: DLOOK }; });
// 101. Ella cruza todo el comedor hasta donde estás tú. "Es tu canción favorita, ¿no?" Y te saca a bailar.
Q(101, (d, a) => { const te = R0(a, 'es', 1.5), ts = R0(a, 'saca'); return { ...COMED, atores: [YO({ x: -2.6, z: -1.0, eyes: [[0, 'look'], [ts, 'wide']], pose: (k, u) => k.pose({ armL: [u > ts ? 12 : 60, u > ts ? 8 : 90], armR: [u > ts ? 70 : 60, u > ts ? 0 : 90] }) }), ELA({ x: -1.8, z: -1.0, move: (u) => [lerp(2.6, -1.85, smooth(0, te - .2, u)), 0, -1.0], eyes: [[0, 'happy']], talk: [[te, ts - .2]], pose: (k, u) => (u < te - .2 ? k.walk(u * 2) : k.pose({ armL: [u > ts ? 70 : 12, 0], armR: [12, 8] })) })],
  extra: (c) => { const ds = DISCO(c); const g = hab(c, ['ES TU CANCIÓN', 'FAVORITA, ¿NO?'], 1.3, [-1.4, 2.2, -1.0], 58); const t = lab(c, ['TE SACA A BAILAR'], 1.7, [-2.2, 2.5, -1.0], PINK); return { update: (u, tt, cam) => { ds(u); pop(g, u, te, ts - .2, cam); pop(t, u, ts, 99, cam); } }; },
  cam: [[0, [0, 1.9, 4.4], [0, 1.3, -1.0]], [d, [-2.2, 1.7, 2.8], [-2.2, 1.4, -1.0]]], f: [[0, 5.6], [d, 3.8]], k: 1, range: 4, look: DLOOK }; });
// 102. Bailas fatal. Ella también. Y no importa nada.
Q(102, (d, a) => { const te = R0(a, 'tambien'), tn = R0(a, 'importa'); return { ...COMED, atores: [YO({ x: -.35, z: -.6, eyes: [[0, 'wide'], [tn, 'happy']], pose: (k, u) => k.pose({ armL: [150 + Math.sin(u * 11) * 30, 20], armR: [20 + Math.sin(u * 7) * 40, 60], lean: Math.sin(u * 5) * 14, bob: Math.abs(Math.sin(u * 9)) * .05, legL: [Math.sin(u * 9) * 25, 0], legR: [0, 0] }) }), ELA({ x: .35, z: -.6, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [40 + Math.sin(u * 6) * 50, 80], armR: [150, 100], lean: -Math.sin(u * 4) * 16, bob: Math.abs(Math.sin(u * 8)) * .05, legL: [0, 0], legR: [Math.sin(u * 8) * 25, 0] }) })],
  extra: (c) => { const ds = DISCO(c); const b = brillos(c, 12, '#FFB0D0'); const P = [0, 2.35, -.6]; const L = SEQ(c, a, [[['BAILAS FATAL'], 0, 'r', P, 1.3], [['ELLA TAMBIÉN'], te, 'r', P, 1.3], [['Y NO IMPORTA NADA'], tn - .4, 'p', P, 1.8, 1]]); return { update: (u, tt, cam) => { ds(u); b(u, [0, 1.6, -.5, 1.0], u > tn ? 1 : 0); L(u, cam); } }; },
  c: [[0, 1.7, 3.6], [0, 1.35, -.6], [0, 1.65, 3.1], [0, 1.35, -.6]], range: 3, look: DLOOK }; });
// 103. La tutora os mira desde la puerta. Y sonríe.
Q(103, (d, a) => { const ts = R0(a, 'sonrie'); return { ...COMED, atores: [TUTORA({ x: 2.6, z: -2.6, eyes: [[0, 'look'], [ts, 'happy']] }), YO({ x: -.35, z: -.6, eyes: [[0, 'happy']], pose: (k, u) => dance(k, u) }), ELA({ x: .35, z: -.6, eyes: [[0, 'happy']], pose: (k, u) => dance(k, u + 1) })],
  extra: (c) => { const ds = DISCO(c); c.add(box(1.2, 2.4, .1, std('#3A2418'), 2.6, 1.2, -3.95)); const l = new THREE.PointLight('#FFD8A0', 4, 4, 1.6); l.position.set(2.6, 2.4, -2.2); c.add(l); const t = lw(c, ['LA TUTORA'], 1.0, [2.6, 2.35, -2.5]); const t2 = lab(c, ['Y SONRÍE'], 1.0, [2.6, 2.35, -2.5], PINK); return { update: (u, tt, cam) => { ds(u); pop(t, u, .1, ts - .2, cam); pop(t2, u, ts, 99, cam); } }; },
  c: [[-.4, 1.8, 3.8], [1.2, 1.4, -1.6], [-.2, 1.75, 3.3], [1.4, 1.4, -1.8]], range: 5, look: DLOOK }; });
// 104. Viernes, viaje de vuelta
HORA(104, 9, 'VIERNES', 'VIAJE DE VUELTA');
// 105. Esta vez ella llega la primera al autobús. Y te guarda el sitio.
Q(105, (d, a) => { const tg = R0(a, 'guarda'); return { amb: 'gris', fov: 32, k: 1, atores: [ELB({ eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [u > tg ? 40 + Math.abs(Math.sin(u * 8)) * 20 : 12, 0], armR: [12, 8] }) }), YO({ x: -2.5, z: -.3, move: (u) => [lerp(-3.2, -1.4, smooth(0, 2.5, u)), 0, -.3], eyes: [[0, 'look'], [tg, 'happy']], pose: (k, u) => (u < 2.5 ? k.walk(u * 2) : k.pose()) })],
  extra: (c) => { BUSV(c); const L = SEQ(c, a, [[['ELLA LLEGA LA PRIMERA'], 0, 'y', [0, 2.08, -1.0], 2.0], [['TE GUARDA EL SITIO'], tg - .2, 'p', [0, 2.08, -1.0], 1.8, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[-.6, 1.6, 2.8], [-.6, 1.3, -1.0], [-.6, 1.55, 2.5], [-.6, 1.3, -1.0]], range: 3 }; });
// 106. Una hora de curvas. Ella te ofrece un auricular. Y tú le ofreces una galleta salada, por si acaso. Y entonces, mirando por la ventanilla, te dice:
Q(106, (d, a) => { const ta = R0(a, 'auricular'), tg = R0(a, 'galleta'), tp = R0(a, 'acaso'), tm = R0(a, 'mirando'); return { amb: 'gris', fov: 32, k: 1, atores: [YOB({ eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > tg - .2 && u < tm ? 60 : 12, 8], lean: Math.sin(u * 2.4) * 6 }) }), ELB({ eyes: [[0, 'happy'], [tm, 'look']], pose: (k, u) => k.pose({ head: u > tm ? -20 : 0, lean: Math.sin(u * 2.4) * 6 }) })],
  extra: (c, s, A) => { const b2 = BUSV(c); const cb = cable(c); const ga = galletas(c, .8); const L = SEQ(c, a, [[['UNA HORA DE CURVAS'], 0, 'w', [0, 2.08, -1.0], 1.8], [['TE OFRECE UN AURICULAR'], ta - .2, 'y', [0, 2.08, -1.0], 2.1], [['UNA GALLETA SALADA'], tg - .2, 'y', [0, 2.08, -1.0], 1.9], [['"POR SI ACASO"'], tp - .3, 'p', [0, 2.08, -1.0], 1.5], [['Y ENTONCES…'], tm, 'w', [0, 2.08, -1.0], 1.2, 1]]);
    return { update: (u, tt, cam) => { b2(u, 1.5); cb(A[0], A[1], u > ta); const p = hand(A[0]); ga.position.set(p.x + .1, p.y + .1, p.z + .15); ga.visible = u > tg - .2 && u < tm; pointer(ga, cam); L(u, cam); } }; },
  c: BUSC, range: 3 }; });
// 107. "Tengo que confesarte una cosa. Las parejas no las hizo la tutora."
Q(107, (d, a) => { const tl = R0(a, 'parejas'); return { amb: 'gris', fov: 30, k: 1, atores: [YOB({ eyes: [[0, 'look'], [tl + .8, 'wide']] }), ELB({ eyes: [[0, 'look']], talk: [[0, d]] })],
  extra: (c, s, A) => { const b2 = BUSV(c); const cb = cable(c); const g = hab(c, ['TENGO QUE CONFESARTE', 'UNA COSA…'], 1.5, [.55, 1.95, -1.0], 56); const g2 = hab(c, ['LAS PAREJAS NO', 'LAS HIZO LA TUTORA.'], 1.5, [.55, 1.95, -1.0], 56); return { update: (u, tt, cam) => { b2(u); cb(A[0], A[1]); pop(g, u, .1, tl - .2, cam); pop(g2, u, tl - .1, 99, cam); } }; },
  c: BUSCC, range: 3 }; });
// 108. Te la quedas mirando.
Q(108, (d, a) => ({ amb: 'gris', fov: 28, k: 1, atores: [YOB({ x: -.2, eyes: [[0, 'wide']] })],
  extra: (c) => { BUSV(c); const t = lw(c, ['…'], .6, [-.2, 1.95, -1.0], { size: 110, w: 300 }); return { update: (u, tt, cam) => pop(t, u, .1, 99, cam) }; },
  c: [[-.2, 1.5, 1.6], [-.2, 1.45, -1.2], [-.2, 1.5, 1.3], [-.2, 1.45, -1.2]], range: 2 }));
// 109. "Bueno, sí. Pero la semana pasada le pedí que me pusiera contigo… la única persona… con la que no había hablado nunca. Y que quería saber cómo eras."
Q(109, (d, a) => { const tp = R0(a, 'pedi'), tu = R0(a, 'unica'), tq = R0(a, 'queria'); return { ...AULA(), atores: [TUTORA({ x: .7, z: -1.3, eyes: [[0, 'look'], [tq + 1, 'happy']], pose: (k) => k.pose({ armL: [12, 8], armR: [60, 40] }) }), ELA({ x: -.3, z: -1.0, talk: [[tp - .3, d]], eyes: [[0, 'look']], pose: talkP })],
  extra: (c) => { MESAP(c, .7, -1.9); const L = SEQ(c, a, [[['LA SEMANA PASADA'], 0, 'w', [.2, 2.55, -1.1], 1.7]]); const G = [hab(c, ['PÓNGAME CON ÉL,', 'PORFA.'], 1.2, [-.9, 2.2, -1.0], 58), hab(c, ['ES LA ÚNICA PERSONA', 'CON LA QUE NUNCA', 'HE HABLADO.'], 1.4, [-.9, 2.25, -1.0], 52), hab(c, ['Y QUIERO SABER', 'CÓMO ES.'], 1.2, [-.9, 2.2, -1.0], 58)];
    return { update: (u, tt, cam) => { L(u, cam); pop(G[0], u, tp - .2, tu - .4, cam); pop(G[1], u, tu - .3, tq - .2, cam); pop(G[2], u, tq - .1, 99, cam); } }; },
  c: [[0, 1.8, 3.8], [.1, 1.5, -1.1], [0, 1.75, 3.3], [.1, 1.5, -1.1]], range: 4, look: MEMO }; });
// 110. Le preguntas: "¿Y cómo soy?"
Q(110, (d, a) => ({ amb: 'gris', fov: 30, k: 1, atores: [YOB({ eyes: [[0, 'look']], talk: [[.4, 1.6]] }), ELB({ eyes: [[0, 'look']] })],
  extra: (c, s, A) => { BUSV(c); const cb = cable(c); const g = hab(c, ['¿Y CÓMO SOY?'], 1.0, [-.8, 1.95, -1.0], 66); return { update: (u, tt, cam) => { cb(A[0], A[1]); pop(g, u, .4, 99, cam); } }; },
  c: BUSCC, range: 3 }));
// 111. Ella se lo piensa. "Mientes fatal sobre la música. Y tu abuela es una crack." Se ríe. Y apoya otra vez la cabeza en tu hombro. Pero esta vez no está dormida.
Q(111, (d, a) => { const tm = R0(a, 'mientes'), ta = R0(a, 'abuela'), tr = R0(a, 'rie'), tp = R0(a, 'apoya'), te = R0(a, 'esta', tp + 1); return { amb: 'gris', fov: 30, k: 1, atores: [YOB({ x: -.38, eyes: [[0, 'look'], [tm + .5, 'flat'], [ta + .5, 'happy'], [tp + .3, 'heart']] }), ELB({ x: .38, z: SZ - .08, eyes: [[0, 'look'], [tm, 'happy']], talk: [[tm, tr]], pose: (k, u) => { const v = smooth(tp, tp + .6, u); k.pose({ lean: 10 * v, head: (u < tm ? 15 : 0) + 10 * v }); } })],
  extra: (c, s, A) => { const b2 = BUSV(c); const cb = cable(c); const p = piensa(c, ['mmm…'], .8, [1.1, 1.95, -1.0]); const G = [hab(c, ['MIENTES FATAL', 'SOBRE LA MÚSICA.'], 1.3, [.95, 1.95, -1.0], 56), hab(c, ['Y TU ABUELA', 'ES UNA CRACK.'], 1.2, [.95, 1.95, -1.0], 58)]; const j = gl(c, 'JA, JA', .6, [1.0, 1.8, -1.0]); const t = lab(c, ['ESTA VEZ NO ESTÁ DORMIDA'], 2.1, [0, 2.08, -1.0], PINK); const h = corazon(c, .28);
    return { update: (u, tt, cam) => { b2(u); cb(A[0], A[1]); pop(p, u, .1, tm - .2, cam); pop(G[0], u, tm, ta - .5, cam); pop(G[1], u, ta - .4, tr - .1, cam); pop(j, u, tr, tp, cam); pop(t, u, te - .3, 99, cam); h.position.set(.05, 1.85, -.9); h.visible = u > tp + .5; h.scale.setScalar(latido(u, 150)); pointer(h, cam); } }; },
  c: BUSC, range: 3 }; });
// 112. 17:00
HORA(112, 5, '17:00', 'VUELTA AL INSTITUTO');
// 113. El autobús llega al instituto. Los padres esperan… Tu mejor amigo… te enseña el móvil: la foto del lunes… "Esto vale oro."
Q(113, (d, a) => { const tp = R0(a, 'padres'), ta = R0(a, 'amigo'), tf = R0(a, 'foto'), to = R0(a, 'esto'); return { amb: 'salida', ambo: { dusk: true }, fov: 32, atores: [AMI({ x: -.2, z: 1.2, eyes: [[0, 'smug']], talk: [[to, d]], pose: (k, u) => k.pose({ armL: [12, 8], armR: [u > tf - .5 ? 90 : 12, u > tf - .5 ? 40 : 8] }) }), YO({ x: -1.0, z: 1.2, eyes: [[0, 'look'], [tf, 'wide'], [to + .4, 'flat']] }), ABUELA({ x: 2.6, z: .6, eyes: [[0, 'happy']], pose: wave }), MUJ(2, { x: 3.3, z: .8, eyes: [[0, 'happy']] }), PROF({ x: 1.8, z: .9, glasses: false, eyes: [[0, 'happy']] })],
  extra: (c, s, A) => { const ph = new THREE.Group(); ph.add(box(.36, .66, .04, std('#1A1A24'), 0, 0, 0, false)); const sc = cut(fotoT(false), .3, .36); sc.position.z = .025; ph.add(sc); c.add(ph); const L = SEQ(c, a, [[['LOS PADRES ESPERAN'], tp, 'w', [1.5, 2.6, .5], 1.9], [['TU MEJOR AMIGO'], ta, 'y', [-.4, 2.45, 1.2], 1.4], [['LA FOTO DEL LUNES'], tf, 'p', [-.4, 2.45, 1.2], 1.7]]); const g = hab(c, ['ESTO VALE ORO.'], 1.1, [.4, 2.2, 1.2], 64);
    return { update: (u, tt, cam) => { const p = hand(A[0]); ph.position.set(p.x - .05, p.y + .25, p.z + .12); ph.visible = u > tf - .6; pointer(ph, cam); L(u, cam); pop(g, u, to, 99, cam); } }; },
  cam: [[0, [0, 2.4, 8.5], [.8, 1.6, -2]], [ta - .2, [0, 2.4, 8.5], [.8, 1.6, -2]], [ta + .8, [-.4, 1.65, 4.0], [-.5, 1.4, 1.2]], [99, [-.4, 1.6, 3.6], [-.5, 1.4, 1.2]]], f: [[0, 10.6], [ta - .2, 10.6], [ta + .8, 2.8], [99, 2.4]], k: 1, range: 5 }; });
// 114. Y antes de irse, ella se da la vuelta. "Oye. El año que viene… ¿pedimos ser pareja otra vez? Ya no hará falta que me lo pongan."
Q(114, (d, a) => { const to = R0(a, 'oye'), ty = R0(a, 'ya'); return { amb: 'salida', ambo: { dusk: true }, fov: 30, atores: [ELA({ x: .9, z: 1.2, eyes: [[0, 'look'], [to, 'happy']], talk: [[to, d]], pose: (k, u) => k.pose({ head: lerp(0, -10, smooth(0, .8, u)) }) }), YO({ x: -.6, z: 1.3, eyes: [[0, 'look'], [ty, 'heart']] })],
  extra: (c) => { const G = [hab(c, ['OYE. EL AÑO QUE VIENE…', '¿PEDIMOS SER PAREJA', 'OTRA VEZ?'], 1.6, [.7, 1.95, 1.2], 52), hab(c, ['YA NO HARÁ FALTA', 'QUE ME LO PONGAN.'], 1.4, [.7, 1.95, 1.2], 56)]; return { update: (u, tt, cam) => { pop(G[0], u, to, ty - .2, cam); pop(G[1], u, ty - .1, 99, cam); } }; },
  c: [[.2, 1.7, 4.0], [.2, 1.45, 1.2], [.2, 1.65, 3.5], [.2, 1.45, 1.2]], range: 3 }; });
// 115. Y te quedas en la acera con la mochila, las galletas que sobraron y una sonrisa que no se te quita.
Q(115, (d, a) => { const tg = R0(a, 'galletas'), ts = R0(a, 'sonrisa'); return { amb: 'salida', ambo: { dusk: true }, fov: 30, atores: [YO({ x: 0, z: 1.3, eyes: [[0, 'look'], [ts, 'happy']], pose: (k) => k.pose({ armL: [12, 8], armR: [60, 40] }) })],
  extra: (c, s, A) => { const mo = mochila(c, '#E8667F'); mo.position.set(-.45, 0, 1.4); const ga = galletas(c, .7); const b = brillos(c, 12, '#FFE27A'); const L = SEQ(c, a, [[['LA MOCHILA'], 'mochila', 'w', [0, 2.0, 1.3], 1.1], [['LAS GALLETAS QUE SOBRARON'], tg, 'y', [0, 2.0, 1.3], 2.3], [['UNA SONRISA QUE NO SE QUITA'], ts, 'p', [0, 2.0, 1.3], 2.5, 1]]);
    return { update: (u, tt, cam) => { const p = hand(A[0]); ga.position.set(p.x + .05, p.y + .1, p.z + .12); pointer(ga, cam); b(u, [0, 1.6, 1.4, .7], u > ts ? 1 : 0); L(u, cam); } }; },
  c: [[0, 1.6, 3.9], [0, 1.4, 1.3], [0, 1.55, 3.4], [0, 1.4, 1.3]], range: 3, look: { bloom: .45 } }; });
// 116. Al final, no fue la suerte. No fue la lista. Fue alguien que se atrevió… Y cinco días de puentes, barro y canciones que nadie conoce hicieron el resto.
Q(116, (d, a) => { const tl = R0(a, 'lista'), tf = R0(a, 'fue', tl + .3), tc = R0(a, 'cinco'), tp = R0(a, 'puentes'), tb = R0(a, 'barro'), tca = R0(a, 'canciones'); return { amb: 'gris', fov: 30, k: 1, atores: [YO({ x: -.4, z: -.3, eyes: [[0, 'look'], [tf, 'happy']] }), ELA({ x: .4, z: -.3, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ lean: u > tc ? 6 : 0 }) })],
  extra: (c) => { const P = [0, 2.45, -.3]; const L = SEQ(c, a, [[['NO FUE LA SUERTE'], 0, 'r', P, 1.6], [['NO FUE LA LISTA'], tl - .4, 'r', P, 1.5], [['FUE ALGUIEN QUE SE ATREVIÓ'], tf, 'p', P, 2.4], [['5 DÍAS'], tc, 'y', P, .9], [['PUENTES'], tp, 'w', [-1.4, 1.3, -.2], 1.0, 1], [['BARRO'], tb, 'w', [0, .55, 0], .8, 1], [['CANCIONES QUE', 'NADIE CONOCE'], tca, 'p', [1.4, 1.3, -.2], 1.3, 1]]); const h = corazon(c, .32); h.position.set(0, 1.9, -.2); return { update: (u, tt, cam) => { L(u, cam); h.visible = u > tf; h.scale.setScalar(latido(u, 130)); pointer(h, cam); } }; },
  c: [[0, 1.5, 4.4], [0, 1.4, -.3], [0, 1.5, 3.9], [0, 1.4, -.3]], range: 3, look: { bloom: .45 } }; });
// 117. Y tú, ¿qué habrías hecho? ¿Le habrías pedido a la tutora ir con tu crush? Te leo en los comentarios.
Q(117, (d, a) => { const tl = R0(a, 'pedido'), tc = R0(a, 'comentarios'); return { amb: 'salida', ambo: { dusk: true }, fov: 32, atores: [YO({ x: -.4, z: 1.2, eyes: [[0, 'happy']], pose: (k, u) => (u > tc - .5 ? wave(k, u) : k.pose()) }), ELA({ x: .4, z: 1.2, eyes: [[0, 'happy']], pose: (k, u) => (u > tc - .5 ? wave(k, u + 1) : k.pose()) })],
  extra: (c) => { const P = [0, 2.12, 1.2]; const L = SEQ(c, a, [[['¿Y TÚ QUÉ HABRÍAS HECHO?'], 0, 'y', P, 2.3], [['¿LE HABRÍAS PEDIDO A LA', 'TUTORA IR CON TU CRUSH?'], tl - .6, 'p', P, 2.5], [['TE LEO EN LOS COMENTARIOS'], tc - .4, 'w', P, 2.4, 1]]); return { update: (u, tt, cam) => L(u, cam) }; },
  c: [[0, 1.7, 4.4], [0, 1.45, 1.2], [0, 1.65, 3.9], [0, 1.45, 1.2]], range: 3, look: { bloom: .45 } }; });
