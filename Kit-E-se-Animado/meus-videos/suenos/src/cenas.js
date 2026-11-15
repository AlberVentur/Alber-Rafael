// "¿Y si controlaras los sueños de tu crush?" — horizontal 1280x720, ~8:52
import * as THREE from 'three';
import { plano, AMBS, box, std, cut, glowSprite, pointer, canvasTex, lightPanel, smooth, lerp, clamp, rng } from './mundo.js';
import { deitar, bubble, wordTex, clock } from './extra.js';
import { S, wt } from './tiempos.js';
import { labelT, globo, tomate, heladeria } from './amb2.js';
import { cartel, rosal, caja, libro, casa } from './amb3.js';
import { aparato, pulsa, cajaMadera, cubo, suscribe, telefono, farolillo } from './amb4.js';
import { tree } from './motor/kit.js';

export const CENAS = [];
const FIM = 999;
const end = (i) => (i + 1 < S.length ? S[i + 1] : FIM);
const KZ = (p, q, k) => p.map((v, i) => q[i] + (v - q[i]) * k);
const mk = (cfg, d) => { const K = cfg.k ?? 1.35; if (cfg.c && K !== 1) { const [p0, q0, p1, q1] = cfg.c; cfg.c = [KZ(p0, q0, K), q0, KZ(p1, q1, K), q1]; } else if (cfg.cam && K !== 1) { cfg.cam = cfg.cam.map(([u, p, q]) => [u, KZ(p, q, K), q]); if (cfg.f) cfg.f = cfg.f.map(([u, v]) => [u, v * K]); } if (cfg.c) { const [p0, q0, p1, q1] = cfg.c; cfg.cam = [[0, p0, q0], [d, p1, q1]]; const D = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]); cfg.f = [[0, D(p0, q0)], [d, D(p1, q1)]]; } return cfg; };
const Q = (i, fn) => { const a = S[i], b = end(i), d = Math.min(b, 640) - a; CENAS.push([(x, y) => plano(x, y, mk(fn(d, a), d)), a, b]); };
const Qt = (a, b, fn) => { const d = Math.min(b, 640) - a; CENAS.push([(x, y) => plano(x, y, mk(fn(d, a), d)), a, b]); };
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

// ===================== CENAS =====================
// 0. GANCHO: "Esta noche, Sara va a soñar contigo" (Sara dormida, sueño con tu cara) / "Y lo vas a decidir tú" (dedo sobre el botón rojo)
Qs(0, ['lo'], [
  (d) => ({ amb: 'cuartoElla', ambo: { night: true }, fov: 32, atores: [SARA_DORM()],
    extra: (c) => { const zz = zzz(c); const bb = bubble(c, [''], 1.7, { w: 640, h: 400 }); const mini = new THREE.Group(); c.add(mini); const ht = cut(wordTex('♥', '#E8667F', 170), .3, .24); ht.renderOrder = 6; c.add(ht); const tu = lab(c, ['TÚ'], .5, [0, 0, 0], { size: 110, w: 300, h: 150, bg: '#E8667F', fg: '#fff' });
      return { update: (u, t, cam) => { zz(u, [1.4, 1.2, -1.0], cam); const k = smooth(.4, 1.2, u); bb.position.set(1.9, 2.05, -.9); bb.scale.setScalar(Math.max(.01, k)); pointer(bb, cam); tu.position.set(1.9, 2.12, -.8); tu.scale.setScalar(Math.max(.01, k)); pointer(tu, cam); ht.position.set(2.3, 2.35, -.75); ht.visible = k > .9; ht.scale.setScalar(1 + Math.abs(Math.sin(u * 6)) * .3); pointer(ht, cam); } }; },
    c: [[1.6, 2.0, 4.2], [1.7, 1.4, -.8], [1.6, 1.9, 3.4], [1.7, 1.5, -.8]], k: 1, range: 3, look: { ...NIGHT, bloom: .3 } }),
  (d) => ({ amb: 'desvan', ambo: { night: true }, fov: 30, atores: [YO({ x: -.5, z: -.4, eyes: [[0, 'smug']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [70, 40], lean: 4 }) })],
    extra: (c) => { const ap = aparato(); ap.position.set(.25, .9, -.2); ap.scale.setScalar(1.3); c.add(ap); c.add(box(.9, .9, .6, std('#6A4630'), .25, .45, -.2)); const t = lab(c, ['¿Y SI CONTROLARAS SUS SUEÑOS?'], 2.6, [0, 2.75, -.6], { size: 66, w: 1200, h: 150 });
      return { update: (u, t2, cam) => { pulsa(ap, .3 + .3 * Math.abs(Math.sin(u * 5))); pop(t, u, .3, 99, cam); } }; },
    c: [[.6, 1.7, 3.0], [0, 1.4, -.3], [.3, 1.6, 2.1], [0, 1.4, -.3]], range: 1.6, look: NIGHT }),
]);
// 1. Hace una hora: el desván del abuelo, la caja de madera llena de polvo
Q(1, (d, a) => { const tc = R0(a, 'caja'); return { amb: 'desvan', fov: 32, atores: [YO({ x: -.6, z: .2, eyes: [[0, 'look'], [tc, 'wide']], move: (u) => [lerp(-1.6, -.6, smooth(0, 2, u)), 0, .2], pose: (k, u) => (u < 2 ? k.walk(u) : k.pose({ armL: [40, 40], armR: [40, 40] })) })],
  extra: (c) => { const bx = cajaMadera(); bx.position.set(.6, 0, -.3); c.add(bx); const t = lw(c, ['HACE 1 HORA'], 1.3, [-.6, 2.6, .2]); const l2 = lw(c, ['DESVÁN DEL ABUELO'], 1.8, [-.6, 2.6, .2]); const b = brillos(c, 12, '#FFE8C0');
    return { update: (u, t2, cam) => { pop(t, u, .2, 2.6, cam); pop(l2, u, 2.8, tc - .3, cam); b(u, [.6, .7, -.2, .5], smooth(tc - .2, tc, u)); } }; },
  c: [[-1.8, 1.9, 3.4], [0, 1.0, -.4], [-1.0, 1.6, 2.4], [.3, .8, -.4]], range: 2 }; });
// 2. Dentro: el aparato con antena, botón rojo y etiqueta "Director de sueños. Usar con cuidado"
Q(2, (d, a) => { const tb = R0(a, 'boton'), te = R0(a, 'etiqueta'), tu = R0(a, 'usar'); return { amb: 'desvan', fov: 28, atores: [YO({ x: -.9, z: .3, eyes: [[0, 'wide'], [tu, 'look']], pose: hold })],
  extra: (c) => { const bx = cajaMadera(); bx.position.set(.4, 0, -.3); c.add(bx); const ap = aparato(); ap.position.set(.4, .5, -.3); c.add(ap); const g = glowSprite('#FFE2A8', 1.6, .4); g.position.set(.4, .9, -.2); c.add(g);
    const l1 = lw(c, ['ANTENA'], .9, [.0, 1.7, -.2]), l2 = lab(c, ['BOTÓN ROJO'], 1.1, [.9, 1.4, -.2], { fg: '#FF6A5A' }), l3 = lw(c, ['«DIRECTOR DE SUEÑOS»'], 1.9, [.2, 1.85, -.2], { fg: '#6A3AB8' }), l4 = lab(c, ['USAR CON CUIDADO'], 1.7, [.2, 1.5, -.2]);
    return { update: (u, t, cam) => { ap.position.y = .5 + smooth(0, 1.5, u) * .15; pulsa(ap, u > tb ? .4 + .3 * Math.sin(u * 6) : 0); pop(l1, u, R0(a, 'antena'), tb - .2, cam); pop(l2, u, tb, te - .2, cam); pop(l3, u, te + .6, 99, cam); pop(l4, u, tu, 99, cam); } }; },
  c: [[.2, 1.6, 2.6], [.3, .9, -.3], [.3, 1.4, 1.7], [.35, .9, -.3]], range: 1.2 }; });
// 3. Tu abuelo era inventor (o eso decía la familia)
Q(3, (d, a) => { const tf = R0(a, 'familia'); return { amb: 'desvan', fov: 32, atores: [ABUELO({ x: 0, z: -.4, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [80 + Math.sin(u * 10) * 25, 60] }) })],
  extra: (c) => { c.add(box(1.6, .9, .7, std('#6A4630'), .9, .45, -.8)); const ap = aparato(); ap.position.set(.9, .9, -.8); c.add(ap); const b = brillos(c, 12, '#5AC8FF'); const l = lw(c, ['EL ABUELO, INVENTOR'], 1.9, [0, 2.6, -.4]); const l2 = lab(c, ['...O ESO DECÍAN'], 1.5, [0, 2.6, -.4]);
    return { update: (u, t, cam) => { b(u, [.9, 1.3, -.7, .4]); pop(l, u, .2, tf - .6, cam); pop(l2, u, tf - .4, 99, cam); } }; },
  c: [[-.6, 1.7, 3.0], [.3, 1.2, -.5], [-.3, 1.6, 2.4], [.3, 1.2, -.5]], range: 2, look: { exposure: .95, vig: .6 } }; });
// 4. Nadie le creyó nunca
Q(4, (d) => ({ amb: 'sala', fov: 32, atores: [ABUELO({ x: 0, z: -.6, eyes: [[0, 'sad']] }), H({ outfit: 'azul', glow: 0, x: -1.3, z: .2, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [70, 70], armR: [70, 70], lean: Math.sin(u * 12) * 4 }) }), H({ outfit: 'rosa', hair: 'bun', hairc: '#5A3A2A', lash: true, glow: 0, x: 1.3, z: .2, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [70, 70], armR: [70, 70], lean: -Math.sin(u * 12) * 4 }) })],
  extra: (c) => { const l = lab(c, ['NADIE LE CREYÓ'], 1.6, [0, 2.5, -.6]); const j = gl(c, 'JAJAJA', .8, [-1.3, 2.3, .2]); return { update: (u, t, cam) => { pop(l, u, .3, 99, cam); pop(j, u, .1, 99, cam); } }; },
  c: [[0, 1.7, 3.6], [0, 1.2, -.4], [0, 1.6, 3.0], [0, 1.2, -.4]], range: 2 }));
// 5. Instrucciones: apuntas la antena, esperas a que se duerma, pulsas el botón
Q(5, (d, a) => { const t1 = R0(a, 'apuntas'), t2 = R0(a, 'esperas'), t3 = R0(a, 'pulsas'), t4 = R0(a, 'entras'); return { amb: 'desvan', fov: 30, atores: [YO({ x: -1.2, z: .2, eyes: [[0, 'look']], pose: hold })],
  extra: (c) => { const hoja = cartel(['INSTRUCCIONES'], 1.4, { size: 70 }); hoja.position.set(.5, 1.6, -.6); c.add(hoja); const L = [['1. APUNTA LA ANTENA', t1], ['2. ESPERA A QUE SE DUERMA', t2], ['3. PULSA EL BOTÓN', t3]].map(([s, tt], i) => [lw(c, [s], 2.3, [.5, 1.05 - i * .36, -.55], { size: 64, w: 900, h: 130 }), tt]);
    return { update: (u, t, cam) => { L.forEach(([m, tt]) => pop(m, u, tt, 99)); } }; },
  c: [[-.2, 1.6, 4.4], [.3, 1.3, -.5], [0, 1.5, 3.8], [.4, 1.2, -.5]], k: 1, range: 3 }; });
// 6. Y entras en su sueño. No como invitado: como director
Q(6, (d, a) => { const ti = R0(a, 'invitado'), td = R0(a, 'director'); return { amb: 'pasillo', fov: 32, atores: [YO({ x: 0, z: 0, eyes: [[0, 'wide'], [td, 'happy']], pose: (k, u) => (u > td ? k.pose({ armL: [150, 30], armR: [150, 30] }) : k.pose()) })],
  extra: (c) => { const l1 = lw(c, ['INVITADO'], 1.1, [-.2, 2.4, 0]); const x = lab(c, ['✗'], .4, [-.2, 2.4, .05], { bg: '#00000000', fg: '#E2322A', size: 130, w: 200, h: 150 }); const l2 = lab(c, ['DIRECTOR ★'], 1.5, [0, 2.4, 0]); const b = brillos(c, 14, '#FFE6FF');
    return { update: (u, t, cam) => { pop(l1, u, ti, td - .1, cam); pop(x, u, ti + .4, td - .1, cam); pop(l2, u, td, 99, cam); b(u, [0, 1.4, .2, .9], smooth(td, td + .3, u)); } }; },
  c: [[0, 1.6, 3.4], [0, 1.4, -3], [0, 1.6, 2.6], [0, 1.4, -3]], range: 3, look: DREAM }; });
// 7. Tú eliges el escenario. Lo que pasa. El guion.
Q(7, (d, a) => { const t1 = 0, t2 = R0(a, 'pasa') - .3, t3 = R0(a, 'guion') - .3; return { amb: 'playaSueno', fov: 34, atores: [YO({ x: 0, z: 0, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [100 + Math.sin(u * 3) * 30, 20] }) })],
  extra: (c) => { const L = [['EL ESCENARIO ✓', t1], ['LO QUE PASA ✓', t2], ['EL GUION ✓', t3]].map(([s, tt], i) => [lp(c, [s], 1.5, [-1.6 + i * 1.6, 2.5 - i * .05, -.4]), tt]); return { update: (u, t, cam) => L.forEach(([m, tt]) => pop(m, u, tt + .1, 99, cam)) }; },
  c: [[0, 1.8, 4.4], [0, 1.5, -1], [0, 1.7, 3.8], [0, 1.6, -1]], range: 3, look: DREAM }; });
// 8. Miras por la ventana: al final de la calle, la casa de Sara
Q(8, (d, a) => { const ts = R0(a, 'sara'); return { amb: 'barrio', ambo: { night: true }, fov: 30, atores: [YO({ x: -4.2, z: 1.0, eyes: [[0, 'look']] })],
  extra: (c) => { const w = lightPanel(.9, .8, '#FFD27A', 1.6); w.position.set(4.5, 2.6, -2.88); c.add(w); const l = lab(c, ['CASA DE SARA'], 1.6, [4.5, 4.6, -2.5]); const ar = lab(c, ['▼'], .4, [4.5, 4.0, -2.5], { bg: '#00000000', size: 120, w: 200, h: 150 }); return { update: (u, t, cam) => { pop(l, u, ts - .3, 99, cam); pop(ar, u, ts - .1, 99, cam); ar.position.y = 4.0 + Math.sin(u * 6) * .08; } }; },
  c: [[-6.0, 2.4, 4.2], [0, 1.8, -2], [-5.0, 2.3, 3.6], [2.0, 2.0, -2]], range: 6, look: NIGHT }; });
// 9. Sara, de tu clase. Dos años sin pasar de "hola"
Q(9, (d, a) => { const tc = R0(a, 'clase'), th = R0(a, 'dos'); return { amb: 'aula', fov: 32, atores: [ELLA({ x: -1.6, z: -1.4, y: -.4, eyes: [[0, 'look']], pose: sitP }), YO({ x: 1.3, z: .4, y: -.4, eyes: [[0, 'heart'], [th, 'sad']], pose: sitP }), H({ outfit: 'azul', hair: 'bob', hairc: '#D9B65A', lash: true, x: .4, z: -1.4, y: -.4, eyes: [[0, 'look']], pose: sitP })],
  extra: (c) => { const w = lightPanel(1.6, 1.4, '#CFE8FF', 1.2); w.position.set(-3.0, 2.3, -3.4); c.add(w); for (const [x, z] of [[-1.6, -1.4], [.4, -1.4], [1.3, .4]]) { c.add(box(.9, .06, .55, std('#C9A06A'), x, .75, z - .45)); c.add(box(.5, .06, .5, std('#4A86C7'), x, .45, z)); } const l1 = lw(c, ['SARA'], .9, [-1.6, 2.3, -1.4], { fg: '#C9361F' }), l3 = lab(c, ['2 AÑOS: «HOLA»'], 1.5, [1.0, 2.3, .4]);
    return { update: (u, t, cam) => { pop(l1, u, .2, th - .3, cam); pop(l3, u, th + .4, 99, cam); } }; },
  c: [[-.2, 1.9, 3.6], [0, 1.0, -.6], [0, 1.7, 3.0], [.1, 1.0, -.6]], range: 3 }; });
// 10. Su luz se acaba de apagar
Q(10, (d) => ({ amb: 'barrio', ambo: { night: true }, fov: 26, atores: [],
  extra: (c) => { const w = lightPanel(.9, .8, '#FFD27A', 1.6); w.position.set(4.5, 2.6, -2.88); c.add(w); const g = glowSprite('#FFD27A', 2.0, .6); g.position.set(4.5, 2.6, -2.7); c.add(g); const zz = zzz(c); return { update: (u, t, cam) => { const k = 1 - smooth(.8, 1.0, u); w.material.emissiveIntensity = 1.6 * k; g.material.opacity = .6 * k; zz(u, [4.8, 3.0, -2.6], cam, u > 1.1); } }; },
  c: [[2.4, 2.4, 3.6], [4.5, 2.4, -2.8], [2.8, 2.4, 2.8], [4.5, 2.5, -2.8]], range: 4, look: NIGHT }));
// 11. LLAMADA: suscríbete al canal y activa la campanita
Q(11, (d, a) => { const ts = R0(a, 'suscribete'), tc = R0(a, 'campanita'), ta = R0(a, 'asi'); return { amb: 'playaSueno', fov: 32, atores: [YO({ x: -1.7, z: .2, eyes: [[0, 'happy']], pose: (k, u) => (u < ts ? wave(k, u) : point(k)) })],
  extra: (c) => { const s = suscribe(2.8); s.position.set(.8, 2.0, -.2); c.add(s); const r = lab(c, ['¡NO TE PIERDAS LA PRÓXIMA!'], 2.4, [.4, .9, .1]); const b = brillos(c, 14, '#FFE27A'); 
    return { update: (u, t, cam) => { const k = smooth(ts - .3, ts, u); s.scale.setScalar(Math.max(.01, k * (1 + .06 * Math.sin(u * 8) * (u > ts + 1 ? 1 : 0)))); const sh = u > tc && u < tc + 1.4 ? Math.sin(u * 40) * .06 : 0; s.rotation.z = sh; b(u, [.8, 2.0, -.1, 1.2], smooth(tc, tc + .2, u)); pop(r, u, ta, 99); } }; },
  c: [[0, 1.7, 5.0], [0, 1.6, -.2], [0, 1.7, 4.6], [0, 1.6, -.2]], range: 6, blur: 4, look: DREAM }; });
// 12. Y ahora sí: pulsa el botón
Q(12, (d) => ({ amb: 'desvan', ambo: { night: true }, fov: 22, atores: [YO({ x: -.7, z: -.3, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [60 + smooth(.6, 1.2, u) * 10, 30] }) })],
  extra: (c) => { const ap = aparato(); ap.position.set(.1, .9, -.2); ap.scale.setScalar(1.4); c.add(ap); c.add(box(.9, .9, .6, std('#6A4630'), .1, .45, -.2)); return { update: (u) => pulsa(ap, smooth(1.2, 1.5, u)) }; },
  c: [[.4, 1.6, 2.2], [.1, 1.3, -.2], [.2, 1.5, 1.4], [.1, 1.35, -.2]], range: 1, lookFn: flash(d - .6, d), look: NIGHT }));
// 13. Silencio. Luego el suelo: blando como un colchón gigante
Q(13, (d, a) => { const ts = R0(a, 'suelo'), tb = R0(a, 'blando'); return { amb: 'pasillo', fov: 32, atores: [YO({ x: 0, z: 0, eyes: [[0, 'shut'], [ts, 'wide'], [tb + 1, 'happy']], move: (u) => { const f = smooth(0, ts, u); const bnc = u > ts ? Math.abs(Math.sin((u - ts) * 6)) * .5 * Math.exp(-(u - ts) * 1.2) : 0; return [0, lerp(4, 0, f) + bnc, 0]; }, pose: (k, u) => k.pose({ armL: [150, 40], armR: [150, 40] }) })],
  extra: (c) => { const l1 = lw(c, ['SILENCIO...'], 1.4, [0, 2.6, 0], { fg: '#6A3AB8' }); const l2 = lp(c, ['¡BLANDO!'], 1.2, [0, 2.6, 0]); return { update: (u, t, cam) => { pop(l1, u, .3, ts - .2, cam); pop(l2, u, tb, 99, cam); } }; },
  lookFn: (u) => ({ exposure: 1.02 + 3 * (1 - smooth(0, .8, u)) }), c: [[0, 1.4, 4.0], [0, 1.3, -2], [0, 1.3, 3.4], [0, 1.2, -2]], range: 3, look: DREAM }; });
// 14. Pasillo infinito lleno de puertas de colores; en una pone "Sara"
Q(14, (d, a) => { const ts = R0(a, 'sara'); return { amb: 'pasillo', fov: 36, atores: [YO({ x: .2, z: -1, eyes: [[0, 'look'], [ts, 'heart']], move: (u) => [lerp(.2, 1.3, smooth(0, ts, u)), 0, lerp(-1, -7.6, smooth(0, ts, u))], pose: (k, u) => (u < ts ? k.walk(u) : k.pose()) })],
  extra: (c) => { const l = lab(c, ['PUERTAS INFINITAS'], 1.9, [0, 3.1, -4]); return { update: (u, t, cam) => pop(l, u, .4, ts - .5, cam) }; },
  cam: [[0, [0, 1.8, 3], [0, 1.4, -10]], [d, [.4, 1.7, -4.2], [2.2, 1.4, -8.6]]], f: [[0, 6], [d, 4.5]], range: 4, look: DREAM }; });
// 15-16. Abres. Estás dentro.
Qt(S[15], S[17], (d) => ({ amb: 'pasillo', fov: 32, atores: [YO({ x: 1.6, z: -8.2, eyes: [[0, 'wide']], move: (u) => [lerp(1.6, 2.2, smooth(.6, d, u)), 0, -8.2], pose: (k) => k.pose({ armL: [12, 8], armR: [90, 10] }) })],
  extra: (c) => { const g = glowSprite('#FFF6E0', 4, 0); g.position.set(2.6, 1.3, -8.6); c.add(g); return { update: (u) => { c.userData.door.rotation.y = -1.6 * smooth(0, .6, u); g.material.opacity = smooth(.3, d, u); } }; },
  cam: [[0, [-.4, 1.6, -5.2], [2.2, 1.3, -8.6]], [d, [.8, 1.5, -6.4], [2.4, 1.3, -8.6]]], f: [[0, 4]], range: 3, lookFn: flash(d - .5, d), look: DREAM }));
// 17. Antes de hacer nada, tienes que saber una cosa: esto no es tan raro
Q(17, (d, a) => { const tr = R0(a, 'raro'); return { amb: 'labSueno', fov: 32, atores: [PROF({ x: .8, z: -.2, eyes: [[0, 'look']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [150, 10] }) }), DORM(H, { outfit: 'azul', glow: 0, x: -.3, z: -1.0, y: .96 })],
  extra: (c) => { const l1 = lw(c, ['UN DATO'], 1.0, [.8, 2.4, -.2]); const l2 = lab(c, ['NO ES TAN RARO'], 1.6, [.8, 2.4, -.2]); return { update: (u, t, cam) => { pop(l1, u, .3, tr - .4, cam); pop(l2, u, tr - .2, 99, cam); } }; },
  c: [[.2, 1.8, 3.6], [0, 1.2, -1], [.4, 1.7, 3.0], [.2, 1.2, -1]], range: 3 }; });
// 18. Cada noche, unas dos horas soñando. La ciencia lleva décadas intentando entrar ahí
Q(18, (d, a) => { const tc = R0(a, 'ciencia'); return { amb: 'labSueno', ambo: { night: true }, fov: 32, atores: [DORM(H, { outfit: 'azul', glow: 0, x: -.3, z: -1.0, y: .96 }), PROF({ x: 1.6, z: .2, eyes: [[0, 'look']], move: (u) => [lerp(3.4, 1.4, smooth(tc, tc + 1.5, u)), 0, .2], pose: (k, u) => (u < tc + 1.5 && u > tc ? k.walk(u) : hold(k)) })],
  extra: (c) => { const zz = zzz(c); const ck = clock(.6, 3); ck.position.set(-2.4, 2.4, -3.0); c.add(ck); const bb = bubble(c, ['SOÑANDO...'], 1.4); return { update: (u, t, cam) => { zz(u, [-1.0, 1.3, -1.2], cam); bb.position.set(-1.6, 2.1, -1.2); pop(bb, u, .5, tc - .3, cam); } }; },
  c: [[0, 1.9, 3.6], [-.3, 1.1, -1.2], [.3, 1.8, 3.0], [0, 1.1, -1.2]], range: 3, look: NIGHT }; });
// 19. 1981: LaBerge — saber que sueñas sin despertar, y avisar moviendo los ojos
Qs(19, ['avisar'], [
  (d) => ({ amb: 'labSueno', ambo: { night: true }, fov: 32, atores: [DORM(H, { outfit: 'azul', glow: 0, x: -.3, z: -1.0, y: .96 }), PROF({ x: 1.5, z: .1, eyes: [[0, 'look']], pose: hold })],
    extra: (c) => { const bb = bubble(c, ['¿ESTOY', 'SOÑANDO?'], 1.5); return { update: (u, t, cam) => { bb.position.set(-1.4, 2.2, -1.2); pop(bb, u, 1.2, 99, cam); } }; },
    c: [[-.2, 1.8, 3.4], [-.6, 1.2, -1.2], [0, 1.7, 2.8], [-.4, 1.2, -1.2]], range: 3, look: NIGHT }),
  (d) => ({ amb: 'labSueno', ambo: { night: true }, fov: 30, atores: [PROF({ x: .4, z: -.6, eyes: [[0, 'wide']], pose: point })],
    extra: (c) => { const t = canvasTex(512, 300, (x) => { x.fillStyle = '#0A1A12'; x.fillRect(0, 0, 512, 300); x.strokeStyle = '#7FD08A'; x.lineWidth = 6; x.beginPath(); for (let i = 0; i < 512; i++) { const s = Math.floor(i / 64) % 2 ? 1 : -1; const y = 150 + (i > 128 && i < 384 ? s * 80 : Math.sin(i * .2) * 6); i ? x.lineTo(i, y) : x.moveTo(i, y); } x.stroke(); x.fillStyle = '#7FD08A'; x.font = '700 30px Inter'; x.fillText('OJOS', 16, 36); });
      const m = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 1.05), new THREE.MeshBasicMaterial({ map: t, toneMapped: false })); m.position.set(1.4, 1.9, -1.5); m.rotation.y = -.3; c.add(m); const l = lab(c, ['SEÑAL DESDE EL SUEÑO'], 2.0, [1.4, 2.55, -1.4]); return { update: (u, t2, cam) => pop(l, u, .8, 99) }; },
    c: [[-.8, 1.7, 3.0], [.9, 1.7, -1.4], [-.4, 1.7, 2.4], [1.1, 1.8, -1.4]], range: 3, look: NIGHT }),
]);
// 20. Izquierda, derecha. Izquierda, derecha. Se llaman sueños lúcidos
Q(20, (d, a) => { const tl = R0(a, 'llaman'); const W = []; let t = a; for (let i = 0; i < 4; i++) { t = wt(i % 2 ? 'derecha' : 'izquierda', t + .01); W.push(t - a); } return { amb: 'labSueno', ambo: { night: true }, fov: 22,
  atores: [H({ outfit: 'azul', glow: 0, x: 0, z: -.4, eyes: [[0, 'shut'], [W[0], 'lookl'], [W[1], 'look'], [W[2], 'lookl'], [W[3], 'look'], [tl, 'shut']] })],
  extra: (c) => { const L = W.map((w, i) => [lab(c, [i % 2 ? '→' : '←'], .5, [i % 2 ? .55 : -.55, 1.9, -.3], { size: 120, w: 200, h: 150 }), w]); const l = lp(c, ['SUEÑOS LÚCIDOS'], 1.5, [0, 2.2, -.3]); const zz = zzz(c);
    return { update: (u, t2, cam) => { L.forEach(([m, w], i) => pop(m, u, w, (W[i + 1] ?? tl) - .1, cam)); pop(l, u, tl, 99, cam); zz(u, [.4, 1.9, -.3], cam, u > tl); } }; },
  c: [[0, 1.65, 2.2], [0, 1.6, -.4], [0, 1.65, 1.8], [0, 1.6, -.4]], range: 1.2, look: NIGHT }; });
// 21. 2021: científicos de cuatro países, preguntas a gente en pleno sueño lúcido
Q(21, (d, a) => { const tp = R0(a, 'preguntas'); return { amb: 'labSueno', fov: 34, atores: [DORM(H, { outfit: 'azul', glow: 0, x: -.3, z: -1.0, y: .96 }), ...[0, 1, 2, 3].map((i) => PROF({ x: .6 + i * .75, z: .2 - (i % 2) * .5, tint: ['#E8E2D8', '#C8A88A', '#8A6A4A', '#F4E0C8'][i], eyes: [[0, 'look']], pose: i === 0 ? (k, u) => (u > tp ? talkP(k, u) : hold(k)) : hold }))],
  extra: (c) => { const l = lab(c, ['4 PAÍSES'], 1.1, [1.7, 2.6, -.1]); const g = gl(c, '¿ME OYES?', 1.0, [-.2, 2.3, -.8]); return { update: (u, t, cam) => { pop(l, u, .5, tp - .3, cam); pop(g, u, tp, 99, cam); } }; },
  c: [[.4, 2.0, 4.2], [.6, 1.2, -.8], [.6, 1.9, 3.6], [.5, 1.2, -.8]], range: 3 }; });
// 22. ¿Cuánto es 8 menos 6? — y contestan moviendo los ojos dos veces
Q(22, (d, a) => { const tc = R0(a, 'contestaron'), tm = R0(a, 'moviendo'), td = R0(a, 'dos'); return { amb: 'labSueno', ambo: { night: true }, fov: 22,
  atores: [H({ outfit: 'azul', glow: 0, x: 0, z: -.4, eyes: [[0, 'shut'], [tm, 'lookl'], [tm + .35, 'look'], [tm + .7, 'lookl'], [tm + 1.05, 'look'], [tm + 1.4, 'shut']] })],
  extra: (c) => { const q = lw(c, ['8 − 6 = ?'], 1.2, [0, 2.15, -.3], { size: 90 }); const r = lab(c, ['= 2 ✓'], .8, [0, 2.15, -.3], { size: 90, w: 400 }); const n1 = lab(c, ['1'], .3, [-.5, 1.75, -.3], { size: 110, w: 200, h: 150 }), n2 = lab(c, ['2'], .3, [.5, 1.75, -.3], { size: 110, w: 200, h: 150 });
    return { update: (u, t, cam) => { pop(q, u, .3, td - .1, cam); pop(r, u, td, 99, cam); pop(n1, u, tm, tm + 1.6, cam); pop(n2, u, tm + .7, tm + 1.6, cam); } }; },
  c: [[0, 1.7, 2.4], [0, 1.65, -.4], [0, 1.7, 2.0], [0, 1.65, -.4]], range: 1.2, look: NIGHT }; });
// 23. Hablar con alguien que sueña... ya se ha hecho
Q(23, (d, a) => { const th = R0(a, 'hecho') - .4; return { amb: 'labSueno', fov: 32, atores: [...[0, 1, 2].map((i) => PROF({ x: -1 + i * 1.0, z: 0, tint: ['#E8E2D8', '#C8A88A', '#8A6A4A'][i], eyes: [[0, 'happy']], pose: clap }))],
  extra: (c) => { const l = lab(c, ['✓ YA SE HA HECHO'], 1.9, [0, 2.6, 0]); return { update: (u, t, cam) => pop(l, u, th, 99, cam) }; },
  c: [[0, 1.8, 4.0], [0, 1.3, -.4], [0, 1.7, 3.4], [0, 1.3, -.4]], range: 3 }; });
// 24. Pero nadie había tenido un botón rojo
Q(24, (d) => ({ amb: 'desvan', ambo: { night: true }, fov: 22, atores: [],
  extra: (c) => { const ap = aparato(); ap.position.set(0, .9, -.2); ap.scale.setScalar(1.6); c.add(ap); c.add(box(.9, .9, .6, std('#6A4630'), 0, .45, -.2)); const g = glowSprite('#E2322A', 1.2, .0); g.position.set(.25, 1.5, 0); c.add(g); return { update: (u) => { pulsa(ap, .5 + .5 * Math.sin(u * 5)); g.material.opacity = .35 + .25 * Math.sin(u * 5); } }; },
  c: [[.9, 1.8, 1.8], [.1, 1.35, -.2], [.5, 1.6, 1.3], [.15, 1.35, -.2]], range: 1, look: NIGHT }));
// 25. El sueño de Sara: playa, mar lila, arena de azúcar, un libro sin letras
Q(25, (d, a) => { const tm = R0(a, 'mar'), ta = R0(a, 'arena'), tl = R0(a, 'libro'); return { amb: 'playaSueno', fov: 32, atores: [ELLA({ x: .8, z: -2.6, y: -.45, eyes: [[0, 'down']], pose: (k) => { k.pose({ armL: [60, 70], armR: [60, 70] }); hideLegs(k); } }), YO({ x: -1.6, z: -1.4, eyes: [[0, 'wide'], [tl, 'heart']] })],
  extra: (c, s, [e]) => { const bk = libro('#FBF7EC', ''); bk.scale.setScalar(.6); c.add(bk); const L = [lp(c, ['MAR LILA'], 1.1, [-1.0, 2.3, -3.6]), lw(c, ['ARENA DE AZÚCAR'], 1.7, [-.4, .9, -1.2], { fg: '#B04A9A' }), lw(c, ['UN LIBRO SIN LETRAS'], 1.9, [.8, 2.2, -2.6])];
    return { update: (u, t, cam) => { const p = hand(e); bk.position.set(p.x - .05, p.y + .05, p.z + .15); bk.rotation.x = -.5; pop(L[0], u, tm, ta - .3, cam); pop(L[1], u, ta, tl - .3, cam); pop(L[2], u, tl, 99, cam); } }; },
  cam: [[0, [-2.6, 2.2, 3.6], [-.2, 1.1, -2.4]], [d, [-1.2, 1.8, 2.0], [.5, 1.0, -2.6]]], f: [[0, 6], [d, 4.6]], k: 1, range: 4, look: DREAM }; });
// 26. Muy bien. Hora de dirigir
Q(26, (d) => ({ amb: 'playaSueno', fov: 30, atores: [YO({ x: 0, z: 0, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [120 + Math.sin(u * 4) * 10, 40] }) })],
  extra: (c, s, [y]) => { const cl = new THREE.Group(); cl.add(box(.5, .34, .04, std('#2A2A34'), 0, 0, 0)); const top = box(.5, .08, .045, std('#FBF7EC'), 0, .22, 0); cl.add(top); c.add(cl); const l = lab(c, ['¡ACCIÓN!'], 1.1, [0, 2.6, 0]);
    return { update: (u, t, cam) => { const p = hand(y); cl.position.set(p.x, p.y + .1, p.z + .1); pointer(cl, cam); top.rotation.z = u > 1.4 ? 0 : -.5; pop(l, u, 1.4, 99, cam); } }; },
  c: [[-.4, 1.6, 2.8], [0, 1.5, -1], [-.2, 1.6, 2.2], [0, 1.5, -1]], range: 2, look: DREAM }));
// 27. Primer plan: una versión mejorada de ti. Más alto, pelo perfecto, caballo blanco
Q(27, (d, a) => { const tv = R0(a, 'version'), ta = R0(a, 'alto'), tp = R0(a, 'pelo'), tc = R0(a, 'caballo'); return { amb: 'desvan', ambo: { night: true }, fov: 32,
  atores: [YO({ x: -1.6, z: .4, eyes: [[0, 'look'], [tv, 'happy']], pose: (k) => k.pose({ armL: [12, 8], armR: [130, 120] }) }), YO({ x: .9, z: -1.2, s: 1.18, eyes: [[0, 'happy']], move: (u) => [.9, u > tc ? .95 : 0, -1.2], pose: (k) => k.pose({ armL: [150, 30], armR: [12, 8] }) }), { tipo: 'caballoB', x: .7, z: -1.3, s: 1.0 }],
  extra: (c, s, [y, y2, cab]) => { const bb = bubble(c, [''], 3.6, { w: 640, h: 400 }); bb.position.set(.8, 1.6, -1.9); const l0 = lab(c, ['PLAN 1'], .9, [-1.6, 2.6, .4]); const L = [[lw(c, ['MÁS ALTO'], 1.0, [-.4, 2.9, -1.2]), ta], [lw(c, ['PELO PERFECTO'], 1.5, [2.0, 2.9, -1.2]), tp], [lw(c, ['CABALLO BLANCO'], 1.6, [.8, .5, -1.0]), tc]]; const b = brillos(c, 12, '#FFFFFF');
    return { update: (u, t, cam) => { const k = smooth(tv - .3, tv + .3, u); bb.scale.setScalar(Math.max(.01, k)); pointer(bb, cam); y2.root.visible = u > tv; cab.root.visible = u > tc; pop(l0, u, .2, 99, cam); L.forEach(([m, tt]) => pop(m, u, tt, 99, cam)); b(u, [.9, 2.6, -1.0, .5], u > tp ? 1 : 0); } }; },
  c: [[-.6, 1.9, 4.2], [.2, 1.6, -1], [-.4, 1.9, 3.8], [.3, 1.6, -1]], range: 4, look: NIGHT }; });
// 28. Te concentras. Pulsas el botón
Q(28, (d) => ({ amb: 'desvan', ambo: { night: true }, fov: 24, atores: [YO({ x: -.6, z: -.2, eyes: [[0, 'shut']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [65, 30], head: Math.sin(u * 30) * 2 }) })],
  extra: (c) => { const ap = aparato(); ap.position.set(.15, .9, -.2); ap.scale.setScalar(1.3); c.add(ap); c.add(box(.9, .9, .6, std('#6A4630'), .15, .45, -.2)); return { update: (u) => pulsa(ap, smooth(d * .6, d * .7, u)) }; },
  c: [[.3, 1.6, 2.4], [0, 1.4, -.2], [.2, 1.5, 1.8], [0, 1.4, -.2]], range: 1, lookFn: flash(d * .7, d), look: NIGHT }));
// 29. Y apareces: más alto, sí; pelo perfecto, sí... pero el caballo es un pato gigante: "cuac"
Qs(29, ['pero'], [
  (d, a) => { const tp = R0(a, 'pelo'); return { amb: 'playaSueno', fov: 32, atores: [YO({ x: 0, z: 0, s: 1.18, eyes: [[0, 'happy']], pose: (k) => k.pose({ armL: [150, 30], armR: [12, 8] }) })],
    extra: (c) => { const b = brillos(c, 16, '#FFFFFF'); const l1 = lw(c, ['MÁS ALTO ✓'], 1.3, [-1.2, 2.4, 0]), l2 = lw(c, ['PELO ✓'], .9, [1.2, 2.6, 0]); return { update: (u, t, cam) => { b(u, [0, 1.4, .2, .9], 1 - smooth(1, 2, u)); pop(l1, u, .6, 99, cam); pop(l2, u, tp + .3, 99, cam); } }; },
    lookFn: (u) => ({ exposure: 1.02 + 3 * (1 - smooth(0, .6, u)) }), c: [[0, 1.7, 4.0], [0, 1.6, -1], [0, 1.7, 3.4], [0, 1.6, -1]], range: 3, look: DREAM }; },
  (d, a) => { const tg = R0(a, 'gigante'), tc = R0(a, 'cuac'); return { amb: 'playaSueno', fov: 34, atores: [PATO({ x: 0, z: 0, s: 2.6 }), YO({ x: .05, z: .05, s: 1.18, y: .95, eyes: [[0, 'happy'], [.6, 'wide']], pose: (k) => { k.pose({ armL: [60, 70], armR: [60, 70] }); hideLegs(k); } })],
    extra: (c, s, [p]) => { const l = lab(c, ['UN PATO GIGANTE'], 1.9, [-1.7, 3.1, 0]); const q = gl(c, '¡CUAC!', 1.1, [1.7, 2.9, 0]); return { update: (u, t, cam) => { pop(l, u, tg - .3, 99, cam); pop(q, u, tc, 99, cam); p.talk(u, u > tc); } }; },
    c: [[-.6, 2.4, 6.0], [0, 2.0, -1], [-.3, 2.2, 5.2], [0, 2.0, -1]], range: 4, look: DREAM }; },
]);
// 30. Sara te mira. Mira al pato. Se ríe tanto que se cae de la arena
Q(30, (d, a) => { const tp = R0(a, 'pato'), tr = R0(a, 'rie'), tc = R0(a, 'cae'); return { amb: 'playaSueno', fov: 32, atores: [ELLA({ x: -1.2, z: .2, eyes: [[0, 'look'], [tp, 'wide'], [tr, 'happy']], pose: (k, u) => { k.pose({ armL: [70, 70], armR: [70, 70], lean: u > tr ? Math.sin(u * 14) * 5 : 0 }); k.root.rotation.z = u > tc ? -1.4 * smooth(tc, tc + .5, u) : 0; } }), PATO({ x: 1.6, z: -1.4, s: 2.6, flip: true }), YO({ x: 1.65, z: -1.35, s: 1.18, y: .95, eyes: [[0, 'flat']], pose: (k) => { k.pose(); hideLegs(k); } })],
  extra: (c) => { const j = gl(c, '¡JAJAJA!', 1.0, [-1.6, 2.4, .2]); return { update: (u, t, cam) => pop(j, u, tr, 99, cam) }; },
  c: [[-.8, 2.3, 5.4], [0, 2.1, -.6], [-.6, 2.2, 4.8], [0, 2.0, -.6]], range: 4, look: DREAM }; });
// 31. No era el plan. Pero se ríe
Q(31, (d, a) => { const tr = R0(a, 'pero'); return { amb: 'playaSueno', fov: 26, atores: [PATO({ x: 0, z: 0, s: 2.6 }), YO({ x: .05, z: .05, s: 1.18, y: .95, eyes: [[0, 'flat'], [tr, 'happy']], pose: (k) => { k.pose(); hideLegs(k); } })],
  extra: (c) => { const l = lw(c, ['NO ERA EL PLAN'], 1.5, [-1.3, 3.0, 0]); const h = cut(wordTex('♥', '#E8667F', 170), .4, .32); h.renderOrder = 6; c.add(h); return { update: (u, t, cam) => { pop(l, u, .1, tr, cam); h.position.set(.6, 3.2 + Math.sin(u * 4) * .05, .2); h.visible = u > tr; pointer(h, cam); } }; },
  c: [[0, 2.5, 4.2], [0, 2.3, -1], [0, 2.5, 3.6], [0, 2.3, -1]], range: 3, look: DREAM }; });
// 32. Lo apuntas
Q(32, (d) => ({ amb: 'desvan', ambo: { night: true }, fov: 26, atores: [YO({ x: -.5, z: 0, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [60, 70], armR: [70 + Math.sin(u * 20) * 6, 60] }) })],
  extra: (c) => { const n = cartel(['· SE RÍE CON EL PATO ✓'], .7, { size: 46 }); n.position.set(.35, 1.05, .3); n.rotation.x = -.5; c.add(n); return {}; },
  c: [[0, 1.8, 2.2], [0, 1.3, 0], [0, 1.7, 1.8], [0, 1.3, 0]], range: 1.4, look: NIGHT }));
// 33. Segunda noche: más instrucciones. Página 4: "el olfato manda más que el botón"
Q(33, (d, a) => { const tp = R0(a, 'pagina'), to = R0(a, 'olfato'); return { amb: 'desvan', ambo: { night: true }, fov: 30, atores: [YO({ x: -1.0, z: .2, eyes: [[0, 'look'], [to, 'wide']], pose: hold })],
  extra: (c) => { const l0 = lab(c, ['2ª NOCHE'], 1.1, [-1.0, 2.6, .2]); const hoja = cartel(['PÁG. 4'], 1.3, { size: 80 }); hoja.position.set(.6, 1.7, -.5); c.add(hoja); const l = lw(c, ['«EL OLFATO MANDA', 'MÁS QUE EL BOTÓN»'], 2.0, [.6, 1.0, -.45], { size: 62, w: 900, h: 220 });
    return { update: (u, t, cam) => { pop(l0, u, .2, tp - .4, cam); hoja.visible = u > tp - .2; pop(l, u, to - .3, 99); } }; },
  c: [[-.3, 1.6, 3.2], [.2, 1.3, -.5], [-.1, 1.5, 2.6], [.4, 1.3, -.5]], range: 2, look: NIGHT }; });
// 34. 2009: olores bajo la nariz de gente dormida. Rosas = sueños agradables. Huevos podridos = desagradables. El olor se cuela en el sueño
Qs(34, ['cuando', ['cuando', 1], 'los'], [
  (d) => ({ amb: 'labSueno', ambo: { night: true }, fov: 30, atores: [DORM(H, { outfit: 'azul', glow: 0, x: -.3, z: -1.0, y: .96 }), PROF({ x: -3.0, z: -.7, eyes: [[0, 'look']], pose: (k) => k.pose({ armL: [12, 8], armR: [80, 40] }) })],
    extra: (c) => { const fr = new THREE.Mesh(new THREE.CylinderGeometry(.06, .08, .22, 12), std('#A8D8F0', { transparent: true, opacity: .8 })); c.add(fr); return { update: () => { fr.position.set(-2.45, 1.25, -.8); } }; },
    c: [[-.6, 1.8, 3.0], [-1.0, 1.1, -1.2], [-.6, 1.7, 2.4], [-1.0, 1.1, -1.2]], range: 3, look: NIGHT }),
  (d) => ({ amb: 'labSueno', ambo: { night: true }, fov: 30, atores: [DORM(H, { outfit: 'azul', glow: 0, x: -.3, z: -1.0, y: .96, eyes: [[0, 'happy']] })],
    extra: (c) => { const r = rosal(); r.scale.setScalar(.35); r.position.set(-2.65, .95, -1.0); c.add(r); const bb = bubble(c, ['SUEÑO', 'AGRADABLE ☺'], 1.6); const l = lw(c, ['ROSAS'], .8, [-2.2, 1.9, -.8], { fg: '#E8667F' }); return { update: (u, t, cam) => { bb.position.set(-.6, 2.3, -1.2); pop(bb, u, .6, 99, cam); pop(l, u, .2, 99, cam); } }; },
    c: [[-.6, 1.8, 3.0], [-1.0, 1.4, -1.2], [-.6, 1.7, 2.6], [-1.0, 1.4, -1.2]], range: 3, look: NIGHT }),
  (d) => ({ amb: 'labSueno', ambo: { night: true }, fov: 30, atores: [DORM(H, { outfit: 'azul', glow: 0, x: -.3, z: -1.0, y: .96, eyes: [[0, 'sad']] })],
    extra: (c) => { const eg = new THREE.Mesh(new THREE.SphereGeometry(.12, 14, 10), std('#E8E2C8')); eg.scale.y = 1.3; eg.position.set(-2.55, 1.05, -.9); c.add(eg); const st = glowSprite('#9AC84A', .9, .5); st.position.set(-2.55, 1.3, -.9); c.add(st); const bb = bubble(c, ['SUEÑO', 'DESAGRADABLE ☹'], 1.6); const l = lw(c, ['HUEVOS PODRIDOS'], 1.5, [-2.0, 1.9, -.8], { fg: '#5A8A2A' });
      return { update: (u, t, cam) => { bb.position.set(-.6, 2.3, -1.2); pop(bb, u, .6, 99, cam); pop(l, u, .2, 99, cam); st.material.opacity = .4 + .2 * Math.sin(u * 6); } }; },
    c: [[-.6, 1.8, 3.0], [-1.0, 1.4, -1.2], [-.6, 1.7, 2.6], [-1.0, 1.4, -1.2]], range: 3, look: NIGHT }),
  (d, a) => { const tp = R0(a, 'pero'); return { amb: 'labSueno', ambo: { night: true }, fov: 30, atores: [DORM(H, { outfit: 'azul', glow: 0, x: -.3, z: -1.0, y: .96 })],
    extra: (c) => { const zz = zzz(c); const l1 = lw(c, ['NO SE DESPERTABAN'], 1.8, [-.8, 2.4, -1.0]), l2 = lp(c, ['EL OLOR SE CUELA EN EL SUEÑO'], 2.8, [-.6, 2.4, -1.0]); const B = brillos(c, 12, '#C8A8FF');
      return { update: (u, t, cam) => { zz(u, [-.9, 1.3, -1.2], cam); pop(l1, u, .2, tp - .2, cam); pop(l2, u, tp, 99, cam); B(u, [-1.4, 1.5, -1.0, .6], smooth(tp, tp + .3, u)); } }; },
    c: [[-.4, 1.9, 3.4], [-.8, 1.4, -1.2], [-.4, 1.8, 2.8], [-.8, 1.4, -1.2]], range: 3, look: NIGHT }; },
]);
// 35. Esa noche dejas una rosa en la ventana de Sara. Robada del jardín de su madre
Qs(35, ['robada'], [
  (d) => ({ amb: 'barrio', ambo: { night: true }, fov: 30, atores: [YO({ x: 3.4, z: -1.9, eyes: [[0, 'look']], move: (u) => [lerp(1.6, 3.9, smooth(0, d * .6, u)), 0, -2.3], pose: (k, u) => (u < d * .6 ? k.walk(u) : k.pose({ armL: [12, 8], armR: [120, 10] })) })],
    extra: (c, s, [y]) => { const r = new THREE.Group(); r.add(box(.02, .35, .02, std('#3E8A52'), 0, -.15, 0)); const fl = new THREE.Mesh(new THREE.SphereGeometry(.07, 12, 10), std('#E2322A', { emissive: '#801010', emissiveIntensity: .4 })); r.add(fl); c.add(r); const w = lightPanel(.9, .8, '#3A3A6A', .3); w.position.set(4.5, 2.6, -2.88); c.add(w); const l = lw(c, ['UNA ROSA'], 1.0, [4.3, 3.4, -2.5], { fg: '#E2322A' });
      return { update: (u, t, cam) => { const p = hand(y); r.position.set(p.x, p.y + .15, p.z + .05); pop(l, u, d * .5, 99, cam); } }; },
    c: [[1.4, 2.2, 3.4], [3.8, 1.8, -2.6], [2.4, 2.1, 2.4], [4.0, 1.8, -2.6]], range: 3, look: NIGHT }),
  (d) => ({ amb: 'jardin', ambo: { dusk: true }, fov: 30, atores: [YO({ x: 1.0, z: -.6, eyes: [[0, 'wide']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [60, 40], lean: 6 }) })],
    extra: (c) => { const l = lab(c, ['ROBADA DEL JARDÍN DE SU MADRE'], 2.8, [1.0, 2.5, -.6]); return { update: (u, t, cam) => pop(l, u, .3, 99, cam) }; },
    c: [[1.2, 1.7, 3.0], [1.4, 1.0, -1.0], [1.2, 1.6, 2.4], [1.4, 1.0, -1.0]], range: 2 }),
]);
// 36. Y funciona: flores, baile, música, farolillos. Por fin algo más largo que "hola"
Q(36, (d, a) => { const tf = R0(a, 'flores'), tb = R0(a, 'baile'), tm = R0(a, 'musica'), tl = R0(a, 'farolillos'), tp = R0(a, 'por'); return { amb: 'baile', fov: 32,
  atores: [ELLA({ x: -.5, z: -1, eyes: [[0, 'happy']], pose: (k, u) => (u > tb ? dance(k, u, .6) : k.pose()) }), YO({ x: .5, z: -1, eyes: [[0, 'heart']], pose: (k, u) => (u > tb ? dance(k, u + 1, .6) : k.pose()) })],
  extra: (c, s, [e]) => { const nt = notas(c); const L = [[lw(c, ['FLORES'], .9, [-2.2, 2.3, -1]), tf, tb], [lw(c, ['BAILE'], .8, [2.0, 2.4, -1]), tb, tm], [lw(c, ['MÚSICA'], .9, [-2.0, 2.6, -1]), tm, tl], [lw(c, ['FAROLILLOS'], 1.3, [1.8, 2.8, -1]), tl, tp]];
    return { update: (u, t, cam) => { c.userData.farol.forEach((f) => { f.position.y = f.userData.y0 + Math.sin(u * .6 + f.userData.ph) * .3 + u * .05; }); nt(u, e.root.position.clone().setY(1.8), cam, u > tm); L.forEach(([m, x0, x1]) => pop(m, u, x0, x1 + .8, cam)); } }; },
  cam: [[0, [0, 3.2, 6.4], [0, 1.6, -1]], [d, [1.0, 1.9, 3.4], [0, 1.4, -1]]], f: [[0, 7.6], [d, 4.6]], range: 4, look: { ...NIGHT, ...DREAM } }; });
// 37. Le dices: "hola, ¿qué tal?"
Q(37, (d) => ({ amb: 'baile', fov: 30, atores: [ELLA({ x: -.5, z: -1, eyes: [[0, 'happy']] }), YO({ x: .5, z: -1, eyes: [[0, 'happy']], talk: [[0, 1.6]] })],
  extra: (c) => { const g = gl(c, '¡HOLA! ¿QUÉ TAL?', 1.4, [.9, 2.4, -1]); return { update: (u, t, cam) => pop(g, u, .2, 99, cam) }; },
  c: [[0, 1.7, 2.8], [0, 1.6, -1], [0, 1.7, 2.4], [0, 1.6, -1]], range: 2, look: { ...NIGHT, ...DREAM } }));
// 38. Récord superado
Q(38, (d) => ({ amb: 'baile', fov: 30, atores: [YO({ x: 0, z: -1, eyes: [[0, 'happy']], move: (u) => [0, Math.abs(Math.sin(u * 6)) * .3, -1], pose: (k) => k.pose({ armL: [160, 30], armR: [160, 30] }) })],
  extra: (c) => { const l = lab(c, ['¡RÉCORD SUPERADO!'], 2.0, [0, 2.6, -1]); const b = brillos(c, 18, '#F2C14E'); return { update: (u, t, cam) => { pop(l, u, .1, 99, cam); b(u, [0, 1.8, -.8, 1.2]); } }; },
  c: [[0, 1.8, 3.2], [0, 1.6, -1], [0, 1.8, 2.8], [0, 1.6, -1]], range: 2, look: { ...NIGHT, ...DREAM } }));
// 39. En clase, Sara se sienta a tu lado: "Qué raro. He soñado contigo... y con un pato"
Q(39, (d, a) => { const tq = R0(a, 'que'), tp = R0(a, 'pato'); return { amb: 'aula', fov: 32, atores: [ELLA({ x: -.45, z: .2, y: -.4, eyes: [[0, 'look']], talk: [[tq, d]], pose: sitP }), YO({ x: .55, z: .2, y: -.4, eyes: [[0, 'look'], [tq + 1.5, 'wide']], pose: sitP })],
  extra: (c) => { for (const x of [-.45, .55]) { c.add(box(.9, .06, .55, std('#C9A06A'), x, .75, -.25)); } const g1 = gl(c, 'QUÉ RARO...', 1.0, [-.9, 2.0, .2]), g2 = gl(c, 'HE SOÑADO CONTIGO', 1.3, [-.9, 2.0, .2]), g3 = gl(c, '...Y CON UN PATO', 1.3, [-.9, 2.0, .2]);
    return { update: (u, t, cam) => { pop(g1, u, tq, tq + 1.2, cam); pop(g2, u, tq + 1.3, tp - .9, cam); pop(g3, u, tp - .8, 99, cam); } }; },
  c: [[0, 1.6, 3.0], [0, 1.1, 0], [0, 1.5, 2.5], [0, 1.1, 0]], range: 2 }; });
// 40. Te pones rojo como un tomate
Q(40, (d) => ({ amb: 'aula', fov: 22, atores: [YO({ x: 0, z: .2, y: -.4, eyes: [[0, 'wide']], pose: sitP })],
  extra: (c, s, [y]) => { const r = rubor(y); const t = tomate(.6, 1.6, .3, 2.2); c.add(t); return { update: (u) => { r(smooth(.2, 1, u)); t.visible = u > 1; } }; },
  c: [[0, 1.3, 2.0], [0, 1.2, .2], [0, 1.3, 1.6], [0, 1.2, .2]], k: 1.8, range: 1.5 }));
// 41. Ella también
Q(41, (d) => ({ amb: 'aula', fov: 22, atores: [ELLA({ x: 0, z: .2, y: -.4, eyes: [[0, 'happy']], pose: sitP })],
  extra: (c, s, [e]) => { const r = rubor(e); return { update: (u) => r(smooth(.1, .8, u)) }; },
  c: [[0, 1.3, 2.0], [0, 1.2, .2], [0, 1.3, 1.6], [0, 1.2, .2]], k: 1.8, range: 1.5 }));
// 42. Tercera noche. Te vienes arriba
Q(42, (d) => ({ amb: 'desvan', ambo: { night: true }, fov: 30, atores: [YO({ x: 0, z: 0, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [150, 120], armR: [150, 120], bob: Math.abs(Math.sin(u * 5)) * .03 }) })],
  extra: (c) => { const l = lab(c, ['3ª NOCHE'], 1.1, [0, 2.6, 0]); const l2 = lw(c, ['TE VIENES ARRIBA'], 1.6, [0, .95, .4]); return { update: (u, t, cam) => { pop(l, u, .1, 99, cam); pop(l2, u, 1.2, 99, cam); } }; },
  c: [[0, 1.4, 3.0], [0, 1.4, 0], [0, 1.3, 2.4], [0, 1.4, 0]], range: 2, look: NIGHT }));
// 43. Si un olor cambia un sueño... ¿y si le dices algo al oído?
Q(43, (d, a) => { const to = R0(a, 'oido'); return { amb: 'desvan', ambo: { night: true }, fov: 30, atores: [YO({ x: -.6, z: 0, eyes: [[0, 'look']], pose: (k) => k.pose({ armL: [12, 8], armR: [140, 140] }) })],
  extra: (c) => { const b1 = bubble(c, ['OLOR → SUEÑO'], 1.5); const b2 = bubble(c, ['¿Y AL OÍDO?'], 1.5); return { update: (u, t, cam) => { b1.position.set(.8, 2.0, 0); b2.position.set(.8, 2.0, 0); pop(b1, u, .3, to - .8, cam); pop(b2, u, to - .6, 99, cam); } }; },
  c: [[0, 1.7, 3.0], [0, 1.6, 0], [0, 1.7, 2.6], [0, 1.6, 0]], range: 2, look: NIGHT }; });
// 44. MIT: un guante llamado Dormio
Q(44, (d, a) => { const tg = R0(a, 'guante'), td = R0(a, 'dormio'); return { amb: 'labSueno', fov: 30, atores: [DORM(H, { outfit: 'azul', glow: 0, x: -.3, z: -1.0, y: .96 }), PROF({ x: 1.4, z: .2, eyes: [[0, 'look']], pose: point })],
  extra: (c) => { const gv = new THREE.Group(); gv.add(box(.24, .1, .3, std('#4A86C7', { roughness: .6 }), 0, 0, 0)); const led = glowSprite('#7FD08A', .25, .9); led.position.y = .08; gv.add(led); gv.position.set(-.9, 1.0, -.6); c.add(gv); const l1 = lw(c, ['UN GUANTE'], 1.0, [-.9, 1.8, -.4]); const l2 = lab(c, ['«DORMIO»'], 1.1, [-.9, 1.8, -.4]);
    return { update: (u, t, cam) => { led.material.opacity = .5 + .5 * Math.sin(u * 6); pop(l1, u, tg, td - .1, cam); pop(l2, u, td, 99, cam); } }; },
  c: [[-.2, 2.3, 3.4], [-1.0, 1.5, -.8], [-.4, 2.2, 2.8], [-1.0, 1.5, -.8]], range: 3 }; });
// 45. Cuando empieza a dormirse, una voz le dice una palabra: "árbol". Y sueña con árboles. Incubación de sueños
Qs(45, ['por', ['y', 1]], [
  (d) => ({ amb: 'labSueno', ambo: { night: true }, fov: 28, atores: [DORM(H, { outfit: 'azul', glow: 0, x: -.3, z: -1.0, y: .96, eyes: [[0, 'flat'], [d * .5, 'shut']] })],
    extra: (c) => { const gv = box(.24, .1, .3, std('#4A86C7'), -.9, 1.0, -.6); c.add(gv); const led = glowSprite('#7FD08A', .35, .9); led.position.set(-.9, 1.1, -.6); c.add(led); const g = gl(c, '«...»', .8, [-1.6, 2.0, -1.0]);
      return { update: (u, t, cam) => { led.material.opacity = u > d * .5 ? .5 + .5 * Math.sin(u * 12) : .2; pop(g, u, d * .7, 99, cam); } }; },
    c: [[-.4, 1.7, 2.8], [-.9, 1.1, -1.2], [-.4, 1.6, 2.2], [-.9, 1.1, -1.2]], range: 2, look: NIGHT }),
  (d) => ({ amb: 'labSueno', ambo: { night: true }, fov: 28, atores: [DORM(H, { outfit: 'azul', glow: 0, x: -.3, z: -1.0, y: .96 })],
    extra: (c) => { const g = gl(c, '«ÁRBOL»', 1.0, [-1.6, 2.0, -1.0]); return { update: (u, t, cam) => pop(g, u, .5, 99, cam) }; },
    c: [[-.4, 1.7, 2.8], [-.9, 1.1, -1.2], [-.4, 1.6, 2.2], [-.9, 1.1, -1.2]], range: 2, look: NIGHT }),
  (d, a) => { const ti = R0(a, 'incubacion'); return { amb: 'labSueno', ambo: { night: true }, fov: 32, atores: [DORM(H, { outfit: 'azul', glow: 0, x: -.3, z: -1.0, y: .96, eyes: [[0, 'happy']] })],
    extra: (c) => { const bb = bubble(c, [''], 2.6, { w: 640, h: 400 }); const G = new THREE.Group(); c.add(G); for (let i = 0; i < 4; i++) tree(G, -.6 + i * .4, 0, .28, undefined, i); G.position.set(-1.0, 2.0, -1.4); const l = lp(c, ['INCUBACIÓN DE SUEÑOS'], 2.2, [-.8, 3.3, -1.2]);
      return { update: (u, t, cam) => { bb.position.set(-1.0, 2.3, -1.5); const k = smooth(.2, .9, u); bb.scale.setScalar(Math.max(.01, k)); pointer(bb, cam); G.scale.setScalar(Math.max(.01, k)); pop(l, u, ti, 99, cam); } }; },
    c: [[-.4, 2.0, 3.6], [-.9, 1.8, -1.2], [-.4, 2.0, 3.0], [-.9, 1.8, -1.2]], range: 3, look: NIGHT }; },
]);
// 46. Preparas tu guion: un sueño perfecto. Dragón, mundial, concierto con 50.000 personas
Q(46, (d, a) => { const t1 = R0(a, 'dragon'), t2 = R0(a, 'mundial'), t3 = R0(a, 'concierto'); return { amb: 'desvan', ambo: { night: true }, fov: 30, atores: [YO({ x: -1.3, z: .2, eyes: [[0, 'happy']], pose: (k, u) => k.pose({ armL: [60, 70], armR: [70 + Math.sin(u * 20) * 6, 60] }) })],
  extra: (c) => { const hoja = cartel(['GUION:', 'SUEÑO PERFECTO'], 1.5, { size: 70 }); hoja.position.set(.6, 1.9, -.5); c.add(hoja); const L = [['1. SALVAR A SARA DE UN DRAGÓN', t1], ['2. GANAR EL MUNDIAL', t2], ['3. CONCIERTO: 50.000 PERSONAS', t3]].map(([s, tt], i) => [lw(c, [s], 2.4, [.6, 1.2 - i * .34, -.45], { size: 56, w: 1000, h: 130 }), tt]);
    return { update: (u, t, cam) => L.forEach(([m, tt]) => pop(m, u, tt - .3, 99)) }; },
  c: [[-.4, 1.6, 3.4], [.3, 1.3, -.5], [-.2, 1.5, 2.8], [.4, 1.2, -.5]], range: 2, look: NIGHT }; });
// 47. Pulsas el botón
Q(47, (d) => ({ amb: 'desvan', ambo: { night: true }, fov: 20, atores: [],
  extra: (c) => { const ap = aparato(); ap.position.set(0, .9, -.2); ap.scale.setScalar(1.6); c.add(ap); c.add(box(.9, .9, .6, std('#6A4630'), 0, .45, -.2)); return { update: (u) => pulsa(ap, smooth(.3, .6, u)) }; },
  c: [[.5, 1.7, 1.6], [.15, 1.4, -.2], [.4, 1.6, 1.2], [.15, 1.4, -.2]], range: 1, lookFn: flash(.6, d), look: NIGHT }));
// 48. Y todo sale fatal
Q(48, (d) => ({ amb: 'gris', fov: 30, atores: [YO({ x: 0, z: 0, eyes: [[0, 'wide']], pose: (k) => k.pose({ armL: [150, 140], armR: [150, 140] }) })],
  extra: (c) => { const l = lab(c, ['TODO SALE FATAL'], 1.9, [0, 2.3, 0], { bg: '#C9361F', fg: '#fff' }); return { update: (u, t, cam) => pop(l, u, .2, 99, cam) }; },
  lookFn: (u) => ({ exposure: 1.02 + 3 * (1 - smooth(0, .5, u)) }), c: [[0, 1.6, 3.0], [0, 1.5, 0], [0, 1.6, 2.6], [0, 1.5, 0]], range: 2 }));
// 49. El dragón es de peluche. El mundial, en pijama. En el concierto solo sale "cuac"
Qs(49, ['el', 'y'], [
  (d, a) => ({ amb: 'playaSueno', fov: 32, atores: [{ tipo: 'dragon', x: .9, z: -.6, s: 1.0 }, YO({ x: -.9, z: 0, eyes: [[0, 'wide'], [1.2, 'flat']], pose: (k) => k.pose({ armL: [12, 8], armR: [130, 60] }) })],
    extra: (c, s, [dr, y]) => { const sw = box(.05, .7, .03, std('#C8CCD4', { metalness: .8 }), 0, 0, 0); c.add(sw); const l = lw(c, ['DE PELUCHE'], 1.3, [.9, 2.0, -.6], { fg: '#5FB04A' }); const sq = gl(c, 'squeak', .7, [1.6, 1.6, -.6]);
      return { update: (u, t, cam) => { const p = hand(y); sw.position.set(p.x, p.y + .35, p.z + .05); dr.card.scale.y = 1 + Math.sin(u * 8) * .04; pop(l, u, .6, 99, cam); pop(sq, u, 1.4, 99, cam); } }; },
    c: [[0, 1.6, 3.6], [0, 1.0, -.3], [0, 1.6, 3.0], [0, 1.0, -.3]], range: 2, look: DREAM }),
  (d) => ({ amb: 'estadio', fov: 32, atores: [PIJ({ x: 0, z: 0, eyes: [[0, 'wide']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [12, 8], legR: [Math.sin(u * 4) * 20, 0] }) })],
    extra: (c) => { const b = new THREE.Mesh(new THREE.SphereGeometry(.13, 16, 12), std('#FBF7EC')); b.position.set(.4, .13, .3); c.add(b); const l = lab(c, ['LA FINAL... EN PIJAMA'], 2.1, [0, 2.3, 0]); return { update: (u, t, cam) => pop(l, u, .3, 99, cam) }; },
    c: [[0, 1.6, 3.4], [0, 1.2, -1], [0, 1.6, 2.8], [0, 1.2, -1]], range: 3, look: DREAM }),
  (d, a) => { const tc = R0(a, 'cuac'); return { amb: 'concierto', fov: 30, atores: [YO({ x: .3, z: -.6, y: .6, eyes: [[0, 'happy'], [tc, 'wide']], pose: (k) => k.pose({ armL: [12, 8], armR: [80, 70] }) })],
    extra: (c) => { const q = gl(c, '¡CUAC!', 1.0, [1.2, 3.0, -.6]); return { update: (u, t, cam) => pop(q, u, tc, 99, cam) }; },
    c: [[0, 2.2, 5.0], [.3, 1.9, -.6], [0, 2.1, 4.2], [.3, 1.9, -.6]], range: 3, look: { bloom: .6 } }; },
]);
// 50. Los sueños no se dejan dirigir del todo: mezclan lo que vivimos, nos preocupa y sentimos
Q(50, (d, a) => { const tn = R0(a, 'suenos'), t1 = R0(a, 'vivimos'), t2 = R0(a, 'preocupa'), t3 = R0(a, 'sentimos'); return { amb: 'pasillo', fov: 32, atores: [YO({ x: 0, z: 0, eyes: [[0, 'look'], [tn, 'sad']], pose: hold })],
  extra: (c, s, [y]) => { const ap = aparato(); c.add(ap); const g = lab(c, ['ERROR'], .8, [0, 0, 0], { bg: '#C9361F', fg: '#fff' }); const L = [['LO QUE VIVIMOS', t1, -1.6, 2.6], ['LO QUE NOS PREOCUPA', t2, 1.6, 2.4], ['LO QUE SENTIMOS', t3, 0, 3.0]].map(([s2, tt, x, yy]) => [lp(c, [s2], 1.7, [x, yy, -.6]), tt]);
    return { update: (u, t, cam) => { naMao(ap, y, -.2); ap.rotation.z = Math.sin(u * 30) * .05 * (u > tn ? 1 : 0); g.position.set(ap.position.x, ap.position.y + .6, ap.position.z); pop(g, u, tn, t1 - .3, cam); L.forEach(([m, tt]) => pop(m, u, tt - .2, 99, cam)); } }; },
  c: [[0, 1.8, 4.6], [0, 1.8, -.3], [0, 1.8, 4.0], [0, 1.8, -.3]], range: 4, look: DREAM }; });
// 51. Tú pones el escenario; los recuerdos, los miedos y las ganas son de quien sueña
Q(51, (d, a) => { const tp = R0(a, 'pero'), tq = R0(a, 'quien'); return { amb: 'playaSueno', fov: 32, atores: [YO({ x: -1.2, z: 0, eyes: [[0, 'look']], pose: point }), ELLA({ x: 1.2, z: -.4, eyes: [[0, 'look'], [tq, 'happy']] })],
  extra: (c) => { const l1 = lw(c, ['ESCENARIO: TÚ'], 1.5, [-1.2, 2.5, 0]); const l2 = lp(c, ['RECUERDOS, MIEDOS, GANAS:'], 2.4, [.5, 2.55, -.4]); const l3 = lab(c, ['SON DE ELLA'], 1.3, [1.0, 2.2, -.4]);
    return { update: (u, t, cam) => { pop(l1, u, .3, 99, cam); pop(l2, u, tp + .3, 99, cam); pop(l3, u, tq, 99, cam); } }; },
  c: [[0, 1.8, 4.4], [0, 1.6, -.4], [0, 1.7, 3.8], [0, 1.6, -.4]], range: 3, look: DREAM }; });
// 52. Y en mitad del concierto, todo se oscurece
Q(52, (d) => ({ amb: 'concierto', fov: 32, atores: [YO({ x: .3, z: -.6, y: .6, eyes: [[0, 'wide']], pose: (k) => k.pose({ armL: [12, 8], armR: [80, 70] }) })],
  c: [[0, 2.2, 5.0], [.3, 1.9, -.6], [0, 2.1, 4.4], [.3, 1.9, -.6]], range: 3, lookFn: (u) => ({ exposure: 1.02 - .85 * smooth(.6, d, u), vig: .45 + .4 * smooth(.6, d, u) }) }));
// 53. El escenario desaparece. Habitación gris, vacía. En una esquina: Sara, pequeña, llorando
Qs(53, ['estas', ['y', 1]], [
  (d) => ({ amb: 'concierto', fov: 32, atores: [YO({ x: .3, z: -.6, y: .6, eyes: [[0, 'wide']], pose: (k) => k.pose({ armL: [40, 40], armR: [40, 40] }) })],
    c: [[0, 2.2, 4.4], [.3, 1.9, -.6], [0, 2.1, 4.0], [.3, 1.9, -.6]], range: 3, look: { exposure: .2, vig: .9 } }),
  (d) => ({ amb: 'gris', fov: 32, atores: [YO({ x: 1.2, z: .6, eyes: [[0, 'wide']] })],
    extra: (c) => { const l = lw(c, ['UNA HABITACIÓN GRIS'], 1.9, [.4, 2.35, .6], { bg: '#D8DCE4' }); return { update: (u, t, cam) => pop(l, u, .4, 99, cam) }; },
    c: [[1.6, 1.8, 4.4], [.8, 1.4, .2], [1.4, 1.7, 3.8], [.8, 1.4, .2]], range: 4 }),
  (d, a) => { const tl = R0(a, 'llorando'); return { amb: 'gris', fov: 30, atores: [PEQ({ x: -2.8, z: -2.9, eyes: [[0, 'sad']], pose: (k, u) => k.pose({ armL: [130, 140], armR: [130, 140], bob: Math.abs(Math.sin(u * 9)) * .01 }) }), YO({ x: 1.4, z: .8, eyes: [[0, 'wide']] })],
    extra: (c) => { const l = lw(c, ['SARA, CON 7 AÑOS'], 2.0, [-2.3, 1.95, -2.7], { bg: '#D8DCE4' }); const T = [0, 1].map(() => { const g = glowSprite('#9FC8FF', .12, .9); c.add(g); return g; });
      return { update: (u, t, cam) => { pop(l, u, .5, 99, cam); T.forEach((g, i) => { const f = (u * .8 + i * .5) % 1; g.position.set(-2.8 + (i ? .12 : -.12) * .66, 1.05 - f * .3, -2.75); g.material.opacity = u > tl ? .9 * (1 - f) : 0; }); } }; },
    cam: [[0, [1.0, 1.7, 3.4], [-2.2, 1.0, -2.8]], [d, [-.6, 1.4, .6], [-2.6, .9, -2.8]]], f: [[0, 6], [d, 3.8]], range: 2.4 }; },
]);
// 54. Esto ya no lo has puesto tú
Q(54, (d) => ({ amb: 'gris', fov: 28, atores: [YO({ x: 0, z: 0, eyes: [[0, 'sad']], pose: hold })],
  extra: (c, s, [y]) => { const ap = aparato(); c.add(ap); const l = lw(c, ['ESTO NO LO HAS PUESTO TÚ'], 2.3, [0, 2.5, 0], { bg: '#D8DCE4' }); return { update: (u, t, cam) => { naMao(ap, y, -.2); pulsa(ap, 0); pop(l, u, .2, 99, cam); } }; },
  c: [[0, 1.6, 2.8], [0, 1.4, 0], [0, 1.6, 2.4], [0, 1.4, 0]], range: 2 }));
// 55. La Sara pequeña: se ha perdido; tenía amigas en su ciudad; aquí no conoce a nadie; se sienta junto a la ventana porque no tiene con quién hablar
Qs(55, [['que', 2], 'que', 'que'], [
  (d) => ({ amb: 'gris', fov: 30, atores: [PEQ({ x: -2.4, z: -2.6, eyes: [[0, 'sad']], talk: [[.3, d]] }), YO({ x: -1.0, z: -1.6, eyes: [[0, 'look']], move: (u) => [lerp(.6, -1.0, smooth(0, d, u)), 0, lerp(.2, -1.6, smooth(0, d, u))], pose: (k, u) => (u < d ? k.walk(u) : k.pose()) })],
    extra: (c) => { const g = gl(c, 'ME HE PERDIDO', 1.1, [-2.4, 1.5, -2.6]); return { update: (u, t, cam) => pop(g, u, .6, 99, cam) }; },
    c: [[0, 1.6, 2.6], [-1.8, .9, -2.4], [-.6, 1.5, 1.6], [-2.0, .9, -2.4]], range: 3 }),
  (d) => ({ amb: 'gris', fov: 28, atores: [PEQ({ x: -2.4, z: -2.6, eyes: [[0, 'sad']], talk: [[0, d]] })],
    extra: (c) => { const g = gl(c, 'EN MI CIUDAD TENÍA AMIGAS', 1.5, [-2.0, 1.45, -2.6]); return { update: (u, t, cam) => pop(g, u, .2, 99, cam) }; },
    c: [[-1.2, 1.3, .6], [-2.3, 1.05, -2.6], [-1.4, 1.25, .2], [-2.3, 1.05, -2.6]], range: 2 }),
  (d) => ({ amb: 'gris', fov: 28, atores: [PEQ({ x: -2.4, z: -2.6, eyes: [[0, 'sad']], talk: [[0, d]] })],
    extra: (c) => { const g = gl(c, 'AQUÍ NO CONOZCO A NADIE', 1.5, [-2.0, 1.45, -2.6]); return { update: (u, t, cam) => pop(g, u, .2, 99, cam) }; },
    c: [[-1.2, 1.3, .6], [-2.3, 1.05, -2.6], [-1.4, 1.25, .2], [-2.3, 1.05, -2.6]], range: 2 }),
  (d, a) => { const tv = R0(a, 'ventana'), th = R0(a, 'hablar'); return { amb: 'aula', fov: 30, atores: [ELLA({ x: -2.2, z: -1.4, y: -.4, eyes: [[0, 'lookl'], [th - .5, 'sad']], pose: sitP })],
    extra: (c) => { const w = lightPanel(1.6, 1.4, '#CFE8FF', 1.2); w.position.set(-3.0, 2.3, -3.4); c.add(w); c.add(box(.9, .06, .55, std('#C9A06A'), -2.2, .75, -1.85)); const g = gl(c, 'NO TENGO CON QUIÉN HABLAR', 1.6, [-1.4, 2.3, -1.4]); return { update: (u, t, cam) => pop(g, u, th - .8, 99, cam) }; },
    c: [[-.4, 1.7, 2.6], [-2.2, 1.1, -1.6], [-.8, 1.6, 2.0], [-2.2, 1.1, -1.6]], range: 3, look: { exposure: .9, vig: .6 } }; },
]);
// 56. Te quedas helado
Q(56, (d) => ({ amb: 'gris', fov: 22, atores: [YO({ x: 0, z: 0, eyes: [[0, 'wide']] })],
  extra: (c) => { const g = glowSprite('#9FD8FF', 2.6, 0); g.position.set(0, 1.5, .3); c.add(g); return { update: (u) => (g.material.opacity = .35 * smooth(0, .8, u)) }; },
  c: [[0, 1.6, 2.2], [0, 1.6, 0], [0, 1.6, 1.8], [0, 1.6, 0]], range: 1 }));
// 57. Siempre pensaste que era misteriosa, interesante, inalcanzable
Q(57, (d, a) => { const t1 = R0(a, 'misteriosa'), t2 = R0(a, 'interesante'), t3 = R0(a, 'inalcanzable'); return { amb: 'aula', fov: 30, atores: [ELLA({ x: -2.2, z: -1.4, y: -.4, eyes: [[0, 'lookl']], pose: sitP })],
  extra: (c) => { const w = lightPanel(1.6, 1.4, '#CFE8FF', 1.4); w.position.set(-3.0, 2.3, -3.4); c.add(w); c.add(box(.9, .06, .55, std('#C9A06A'), -2.2, .75, -1.85)); const b = brillos(c, 14, '#FFE6FF'); const L = [['MISTERIOSA', t1, 2.25], ['INTERESANTE', t2, 1.9], ['INALCANZABLE', t3, 1.55]].map(([s2, tt, yy]) => [lp(c, [s2], 1.3, [-.5, yy, -1.2]), tt]);
    return { update: (u, t, cam) => { b(u, [-2.2, 1.6, -1.2, .7]); L.forEach(([m, tt]) => pop(m, u, tt, 99, cam)); } }; },
  c: [[-.2, 1.7, 2.6], [-1.6, 1.4, -1.4], [-.6, 1.6, 2.0], [-1.8, 1.4, -1.4]], range: 3, look: DREAM }; });
// 58. No: se sentaba ahí porque estaba sola
Q(58, (d, a) => { const ts = R0(a, 'sola'); return { amb: 'aula', fov: 28, atores: [ELLA({ x: -2.2, z: -1.4, y: -.4, eyes: [[0, 'sad']], pose: sitP })],
  extra: (c) => { const w = lightPanel(1.6, 1.4, '#B8C8D8', .6); w.position.set(-3.0, 2.3, -3.4); c.add(w); c.add(box(.9, .06, .55, std('#C9A06A'), -2.2, .75, -1.85)); const l = lw(c, ['ESTABA SOLA'], 1.3, [-1.0, 2.3, -1.4], { bg: '#D8DCE4' }); return { update: (u, t, cam) => pop(l, u, ts - .3, 99, cam) }; },
  c: [[-.8, 1.6, 2.2], [-2.2, 1.1, -1.4], [-1.2, 1.5, 1.6], [-2.2, 1.1, -1.4]], range: 2, look: { exposure: .82, vig: .7 } }; });
// 59. Te sientas a su lado, sin botón, sin pato, sin guion: "Yo puedo ser tu amigo. Si quieres"
Q(59, (d, a) => { const t1 = R0(a, 'sin'), ty = R0(a, 'yo'); return { amb: 'gris', fov: 30, atores: [PEQ({ x: -2.6, z: -2.7, eyes: [[0, 'sad'], [ty + 1.5, 'look']] }), YO({ x: -1.9, z: -2.5, y: -.35, eyes: [[0, 'look']], talk: [[ty, d]], pose: (k, u) => (u > ty ? talkP(k, u) : sitP(k)) })],
  extra: (c) => { const l = lw(c, ['SIN BOTÓN · SIN PATO · SIN GUION'], 2.4, [-1.8, 2.0, -2.4], { bg: '#D8DCE4', size: 60, w: 1000 }); const g = gl(c, 'YO PUEDO SER TU AMIGO', 1.6, [-1.5, 1.8, -2.4]);
    return { update: (u, t, cam) => { pop(l, u, t1, ty - .2, cam); pop(g, u, ty, 99, cam); } }; },
  c: [[-.6, 1.4, 1.4], [-2.2, 1.0, -2.6], [-1.0, 1.3, .8], [-2.2, 1.0, -2.6]], range: 2 }; });
// 60. La habitación gris se llena de luz, despacio, como un amanecer
Q(60, (d) => ({ amb: 'gris', fov: 32, atores: [PEQ({ x: -2.6, z: -2.7, eyes: [[0, 'look'], [1.2, 'happy']] }), YO({ x: -1.9, z: -2.5, y: -.35, eyes: [[0, 'happy']], pose: sitP })],
  extra: (c) => { const g = glowSprite('#FFD8A0', 6, 0); g.position.set(-1.6, 2.2, -2.4); c.add(g); return { update: (u) => { const k = smooth(0, d, u); c.userData.warm.intensity = 18 * k; g.material.opacity = .45 * k; } }; },
  c: [[.6, 1.8, 2.4], [-2.2, 1.0, -2.6], [.2, 1.7, 1.8], [-2.2, 1.0, -2.6]], range: 3, lookFn: (u) => ({ exposure: 1 + .5 * smooth(0, d, u), bloom: .3 + .6 * smooth(0, d, u) }) }));
// 61. Te despiertas con el aparato en las manos. Las cuatro de la mañana
Q(61, (d, a) => { const tc = R0(a, 'cuatro'); return { amb: 'quarto', ambo: { night: true }, fov: 30, atores: [PIJ({ x: -1.7, z: -.2, y: .1, eyes: [[0, 'shut'], [.4, 'wide']], pose: (k, u) => { dinoOn(k); k.pose({ armL: [60, 70], armR: [60, 70] }); hideLegs(k); } })],
  extra: (c, s, [y]) => { const ap = aparato(); c.add(ap); const ck = clock(.7, 4); ck.position.set(.6, 2.6, -2.9); c.add(ck); const l = lab(c, ['4:00'], .8, [.6, 3.3, -2.8]); return { update: (u, t, cam) => { naMao(ap, y, -.15); pop(l, u, tc, 99); } }; },
  c: [[.4, 1.6, 2.6], [-1.0, 1.2, -.6], [.2, 1.5, 2.0], [-1.0, 1.2, -.6]], range: 3, look: NIGHT }; });
// 62. Y por primera vez te sientes mal
Q(62, (d) => ({ amb: 'quarto', ambo: { night: true }, fov: 24, atores: [PIJ({ x: -1.7, z: -.2, y: .1, eyes: [[0, 'sad']], pose: (k) => { dinoOn(k); k.pose({ armL: [10, 6], armR: [10, 6], head: -8 }); hideLegs(k); } })],
  c: [[-1.0, 1.4, 1.8], [-1.7, 1.2, -.2], [-1.2, 1.4, 1.4], [-1.7, 1.2, -.2]], range: 1.4, look: { ...NIGHT, vig: .7 } }));
// 63. Lo que has visto no era tuyo: sus miedos, sus secretos... Entraste sin llamar, sin permiso, tres noches seguidas
Qs(63, [['y', 1]], [
  (d, a) => { const tm = R0(a, 'miedos'), ts = R0(a, 'secretos'), tp = R0(a, 'privado'); return { amb: 'pasillo', fov: 30, atores: [YO({ x: 0, z: 0, eyes: [[0, 'sad']] })],
    extra: (c) => { const L = [['NO ERA TUYO', 0, 0, 2.7], ['SUS MIEDOS', tm, -1.5, 2.2], ['SUS SECRETOS', ts, 1.5, 2.2], ['LO MÁS PRIVADO', tp, 0, 3.2]].map(([s2, tt, x, yy]) => [lp(c, [s2], 1.5, [x, yy, -.4]), tt]); return { update: (u, t, cam) => L.forEach(([m, tt]) => pop(m, u, tt + .2, 99, cam)) }; },
    c: [[0, 1.8, 4.6], [0, 1.9, -1], [0, 1.8, 4.0], [0, 1.9, -1]], range: 3, look: { ...DREAM, exposure: .85 } }; },
  (d, a) => { const tp = R0(a, 'permiso'), tn = R0(a, 'tres'); return { amb: 'pasillo', fov: 34, atores: [YO({ x: 2.0, z: -7.6, eyes: [[0, 'sad']] })],
    extra: (c) => { c.userData.door.rotation.y = -1.4; const L = [['SIN LLAMAR', .2, 1.0], ['SIN PERMISO', tp, 2.0], ['3 NOCHES SEGUIDAS', tn, 3.0]].map(([s2, tt, x]) => [lab(c, [s2], 1.5, [.2 + x * .45, 2.5 - (x - 1) * .32, -6.6]), tt]); return { update: (u, t, cam) => L.forEach(([m, tt]) => pop(m, u, tt, 99, cam)) }; },
    cam: [[0, [-.4, 1.8, -3.4], [1.6, 1.6, -8]], [d, [0, 1.7, -4.4], [1.8, 1.6, -8]]], f: [[0, 5]], range: 3, look: { ...DREAM, exposure: .85 } }; },
]);
// 64. Miras la etiqueta otra vez: "usar con cuidado"
Q(64, (d, a) => { const tu = R0(a, 'usar'); return { amb: 'quarto', ambo: { night: true }, fov: 20, atores: [],
  extra: (c) => { const ap = aparato(); ap.position.set(0, 1.0, -.2); ap.scale.setScalar(2); c.add(ap); c.add(box(.9, 1.0, .7, std('#8E6242'), 0, .5, -.2)); const l = lab(c, ['USAR CON CUIDADO'], 1.3, [0, 2.0, 0]); return { update: (u, t, cam) => pop(l, u, tu, 99, cam) }; },
  c: [[0, 1.5, 1.8], [0, 1.4, -.2], [0, 1.4, 1.3], [0, 1.4, -.2]], k: 2.1, range: 1.5, look: NIGHT }; });
// 65. Ahora entiendes lo que quería decir tu abuelo
Q(65, (d) => ({ amb: 'desvan', fov: 30, atores: [ABUELO({ x: .9, z: -.8, eyes: [[0, 'happy']], tint: '#F2E2C8' }), YO({ x: -.9, z: .2, eyes: [[0, 'look']], pose: nod })],
  extra: (c, s, [ab]) => { ab.root.traverse((o) => { if (o.material) { o.material.transparent = true; o.material.opacity = .55; } }); const g = glowSprite('#FFE8C0', 3, .35); g.position.set(.9, 1.4, -.8); c.add(g); return {}; },
  c: [[0, 1.6, 3.4], [0, 1.4, -.4], [0, 1.6, 2.8], [0, 1.4, -.4]], range: 3, look: { bloom: .6, exposure: 1.05 } }));
// 66. Esa mañana vas a buscar a Sara. Te tiemblan las piernas. La caja bajo el brazo
Q(66, (d, a) => { const tt = R0(a, 'tiemblan'); return { amb: 'barrio', fov: 32, atores: [YO({ x: 2.0, z: -.4, eyes: [[0, 'look'], [tt, 'wide']], move: (u) => [lerp(-1.5, 3.4, smooth(0, d * .8, u)) + (u > tt ? Math.sin(u * 40) * .02 : 0), 0, -.4], pose: (k, u) => { if (u < d * .8) k.walk(u); else k.pose({ legL: [Math.sin(u * 40) * 6, 0], legR: [-Math.sin(u * 40) * 6, 0], armL: [70, 80] }); } })],
  extra: (c, s, [y]) => { const bx = cajaMadera(); bx.scale.setScalar(.45); c.add(bx); const l = lw(c, ['TE TIEMBLAN LAS PIERNAS'], 2.1, [3.0, 2.6, -.4]); return { update: (u, t, cam) => { const p = y.root.position; bx.position.set(p.x - .25, 1.0, p.z + .2); pop(l, u, tt, 99, cam); } }; },
  cam: [[0, [-1.0, 2.0, 4.4], [1.0, 1.2, -1]], [d, [2.0, 1.8, 3.4], [3.6, 1.2, -1]]], f: [[0, 5.4], [d, 4.6]], range: 4 }; });
// 67. Y se lo cuentas todo: el desván, el botón, el pato, la rosa, el dragón de peluche, la habitación gris
Q(67, (d, a) => { const W = ['desvan', 'boton', 'pato', 'rosa', 'dragon', 'gris']; const T = W.map((w) => R0(a, w)); return { amb: 'barrio', fov: 32, atores: [ELLA({ x: 4.3, z: -1.6, eyes: [[0, 'look']] }), YO({ x: 3.2, z: -1.0, eyes: [[0, 'look']], talk: [[0, d]] })],
  extra: (c) => { const N = ['EL DESVÁN', 'EL BOTÓN', 'EL PATO', 'LA ROSA', 'EL DRAGÓN', 'LA HABITACIÓN GRIS']; const P = [[2.0, 2.6], [3.0, 3.0], [4.2, 3.2], [5.3, 2.8], [2.3, 2.1], [4.8, 2.2]]; const L = N.map((s2, i) => [lw(c, [s2], s2.length > 10 ? 1.9 : 1.2, [P[i][0], P[i][1] - .2, -1.2], { size: 64 }), T[i]]);
    return { update: (u, t, cam) => L.forEach(([m, tt]) => pop(m, u, tt, 99, cam)) }; },
  c: [[3.6, 2.0, 4.6], [3.7, 1.9, -1.2], [3.6, 1.9, 4.0], [3.7, 1.9, -1.2]], k: 1, range: 3 }; });
// 68. Sara no dice nada durante un rato muy largo
Q(68, (d) => ({ amb: 'barrio', fov: 24, atores: [ELLA({ x: 4.3, z: -1.6, eyes: [[0, 'flat']] })],
  extra: (c) => { const l = gl(c, '...', .6, [4.75, 2.1, -1.6]); return { update: (u, t, cam) => pop(l, u, .6, 99, cam) }; },
  c: [[3.8, 1.7, 1.2], [4.3, 1.6, -1.6], [3.9, 1.7, .8], [4.3, 1.6, -1.6]], range: 1.4 }));
// 69. "¿Por qué me lo cuentas?"
Q(69, (d) => ({ amb: 'barrio', fov: 28, atores: [ELLA({ x: 4.3, z: -1.6, eyes: [[0, 'look']], talk: [[.3, d]] }), YO({ x: 3.2, z: -1.0, eyes: [[0, 'look']] })],
  extra: (c) => { const g = gl(c, '¿POR QUÉ ME LO CUENTAS?', 1.5, [4.6, 2.4, -1.6]); return { update: (u, t, cam) => pop(g, u, .3, 99, cam) }; },
  c: [[3.4, 1.8, 2.4], [3.9, 1.6, -1.4], [3.5, 1.7, 2.0], [3.9, 1.6, -1.4]], range: 2 }));
// 70. La verdad: no está bien entrar sin permiso; no te tocaba verlo; que sea porque ella quiere
Qs(70, [['que', 2], ['y', 1]], [
  (d) => ({ amb: 'barrio', fov: 28, atores: [YO({ x: 3.2, z: -1.0, eyes: [[0, 'sad']], talk: [[0, d]] }), ELLA({ x: 4.3, z: -1.6, eyes: [[0, 'look']] })],
    extra: (c) => { const l = lw(c, ['NO ESTÁ BIEN ENTRAR', 'SIN PERMISO'], 1.7, [2.7, 2.35, -1.0], { h: 230 }); return { update: (u, t, cam) => pop(l, u, .4, 99, cam) }; },
    c: [[4.4, 1.8, 2.4], [3.2, 1.6, -1.0], [4.2, 1.7, 2.0], [3.2, 1.6, -1.0]], range: 2 }),
  (d) => ({ amb: 'barrio', fov: 28, atores: [YO({ x: 3.2, z: -1.0, eyes: [[0, 'sad']], talk: [[0, d]] }), ELLA({ x: 4.3, z: -1.6, eyes: [[0, 'look']] })],
    extra: (c) => { const l = lw(c, ['NO ME TOCABA VERLO'], 1.7, [2.7, 2.4, -1.0]); return { update: (u, t, cam) => pop(l, u, .2, 99, cam) }; },
    c: [[4.4, 1.8, 2.4], [3.2, 1.6, -1.0], [4.2, 1.7, 2.0], [3.2, 1.6, -1.0]], range: 2 }),
  (d) => ({ amb: 'barrio', fov: 30, atores: [YO({ x: 3.2, z: -1.0, eyes: [[0, 'look']], talk: [[0, d]] }), ELLA({ x: 4.3, z: -1.6, eyes: [[0, 'look'], [d * .7, 'happy']] })],
    extra: (c) => { const l = lp(c, ['QUE SEA PORQUE TÚ QUIERES'], 2.0, [3.7, 2.45, -1.2]); return { update: (u, t, cam) => pop(l, u, .3, 99, cam) }; },
    c: [[3.0, 1.9, 3.0], [3.8, 1.6, -1.3], [3.2, 1.8, 2.4], [3.8, 1.6, -1.3]], range: 2 }),
]);
// 71. Sara coge el aparato y lo mira por todos lados
Q(71, (d) => ({ amb: 'barrio', fov: 26, atores: [ELLA({ x: 4.3, z: -1.6, eyes: [[0, 'look'], [1.2, 'lookl'], [2.2, 'look']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [90, 40] }) })],
  extra: (c, s, [e]) => { const ap = aparato(); c.add(ap); return { update: (u) => { naMao(ap, e, -.1); ap.rotation.y = u * 1.2; } }; },
  c: [[3.6, 1.8, 1.8], [4.3, 1.4, -1.6], [3.8, 1.7, 1.3], [4.3, 1.4, -1.6]], range: 1.6 }));
// 72. Y lo tira al cubo de la basura
Q(72, (d) => ({ amb: 'barrio', fov: 30, atores: [ELLA({ x: 4.3, z: -1.6, eyes: [[0, 'flat']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [lerp(90, 160, smooth(.2, .6, u)), 40] }) }), YO({ x: 3.0, z: -1.0, eyes: [[0, 'wide']] })],
  extra: (c) => { const cb = cubo(); cb.position.set(5.6, 0, -1.4); c.add(cb); const ap = aparato(); ap.scale.setScalar(.8); c.add(ap); const l = lab(c, ['¡A LA BASURA!'], 1.4, [5.4, 2.4, -1.4]);
    return { update: (u, t, cam) => { const f = smooth(.5, 1.5, u); ap.position.set(lerp(4.4, 5.6, f), lerp(1.4, .7, f) + Math.sin(f * Math.PI) * 1.0, lerp(-1.5, -1.4, f)); ap.rotation.z = f * 6; ap.visible = f < .98; pop(l, u, 1.5, 99, cam); } }; },
  c: [[4.2, 1.8, 3.4], [4.6, 1.2, -1.4], [4.3, 1.8, 2.8], [4.7, 1.2, -1.4]], range: 3 }));
// 73. Luego sonríe
Q(73, (d) => ({ amb: 'barrio', fov: 22, atores: [ELLA({ x: 4.3, z: -1.6, eyes: [[0, 'happy']] })], c: [[4.1, 1.7, .6], [4.3, 1.6, -1.6], [4.15, 1.7, .3], [4.3, 1.6, -1.6]], range: 1 }));
// 74. "Me alegro de que fueras tú. El pato me hizo reír por primera vez en meses"
Q(74, (d, a) => { const tp = R0(a, 'pato'); return { amb: 'barrio', fov: 28, atores: [ELLA({ x: 4.3, z: -1.6, eyes: [[0, 'happy']], talk: [[0, d]] }), YO({ x: 3.2, z: -1.0, eyes: [[0, 'look'], [tp + 1, 'happy']] })],
  extra: (c) => { const g1 = gl(c, 'ME ALEGRO DE QUE FUERAS TÚ', 1.6, [4.6, 2.4, -1.6]), g2 = gl(c, 'EL PATO ME HIZO REÍR', 1.5, [4.6, 2.4, -1.6]); return { update: (u, t, cam) => { pop(g1, u, .2, tp - .5, cam); pop(g2, u, tp - .4, 99, cam); } }; },
  c: [[3.4, 1.8, 2.4], [3.9, 1.6, -1.4], [3.5, 1.7, 2.0], [3.9, 1.6, -1.4]], range: 2 }; });
// 75. En clase se sienta a tu lado. En el recreo, nuevas amigas y tus amigos. Por la tarde, helado en el parque
Qs(75, [['y', 1], ['y', 2]], [
  (d) => ({ amb: 'aula', fov: 30, atores: [ELLA({ x: -.45, z: .2, y: -.4, eyes: [[0, 'happy']], pose: sitP }), YO({ x: .55, z: .2, y: -.4, eyes: [[0, 'happy']], pose: sitP })],
    extra: (c) => { const w = lightPanel(1.6, 1.4, '#CFE8FF', 1.2); w.position.set(-3.0, 2.3, -3.4); c.add(w); for (const x of [-.45, .55]) c.add(box(.9, .06, .55, std('#C9A06A'), x, .75, -.25)); const l = lw(c, ['YA NO JUNTO A LA VENTANA'], 2.2, [0, 2.1, 0]); return { update: (u, t, cam) => pop(l, u, .5, 99, cam) }; },
    c: [[0, 1.6, 3.0], [0, 1.3, 0], [0, 1.5, 2.5], [0, 1.3, 0]], k: 1.7, range: 2.5 }),
  (d) => ({ amb: 'parque', fov: 32, atores: [ELLA({ x: -.4, z: 0, eyes: [[0, 'happy']], pose: talkP }), H({ outfit: 'verde', hair: 'bob', hairc: '#D9B65A', lash: true, x: -1.5, z: -.4, eyes: [[0, 'happy']], pose: wave }), H({ outfit: 'roxo', hair: 'afro', hairc: '#2A1A12', lash: true, x: -2.4, z: -.2, eyes: [[0, 'happy']] }), YO({ x: .6, z: 0, eyes: [[0, 'happy']], pose: wave }), H({ outfit: 'laranja', x: 1.6, z: -.4, eyes: [[0, 'happy']] }), H({ outfit: 'azul', x: 2.5, z: -.2, eyes: [[0, 'happy']], pose: wave })],
    extra: (c) => { const l = lw(c, ['NUEVOS AMIGOS'], 1.5, [0, 2.6, -.2]); return { update: (u, t, cam) => pop(l, u, .4, 99, cam) }; },
    c: [[0, 1.8, 5.4], [0, 1.2, -.3], [0, 1.7, 4.8], [0, 1.2, -.3]], range: 4 }),
  (d) => ({ amb: 'parque', ambo: { dusk: true }, fov: 32, atores: [ELLA({ x: -.4, z: 0, eyes: [[0, 'happy']], pose: (k) => k.pose({ armL: [12, 8], armR: [100, 80] }) }), H({ outfit: 'verde', hair: 'bob', hairc: '#D9B65A', lash: true, x: -1.5, z: -.4, eyes: [[0, 'happy']], pose: (k) => k.pose({ armL: [12, 8], armR: [100, 80] }) }), YO({ x: .6, z: 0, eyes: [[0, 'happy']], pose: (k) => k.pose({ armL: [12, 8], armR: [100, 80] }) }), H({ outfit: 'laranja', x: 1.6, z: -.4, eyes: [[0, 'happy']], pose: (k) => k.pose({ armL: [12, 8], armR: [100, 80] }) })],
    extra: (c, s, A) => { const H2 = A.map(() => { const g = new THREE.Group(); const cn = new THREE.Mesh(new THREE.ConeGeometry(.06, .16, 10), std('#D8A868')); cn.rotation.x = Math.PI; g.add(cn); const sc = new THREE.Mesh(new THREE.SphereGeometry(.07, 12, 10), std(['#F2A8C8', '#FBF7EC', '#7A4A2A', '#9AD884'][Math.floor(Math.random() * 4)])); sc.position.y = .1; g.add(sc); c.add(g); return g; }); const l = lw(c, ['HELADO EN EL PARQUE'], 1.9, [0, 2.6, -.2]);
      return { update: (u, t, cam) => { A.forEach((k, i) => { const p = hand(k); H2[i].position.set(p.x, p.y + .1, p.z + .05); }); pop(l, u, .4, 99, cam); } }; },
    c: [[0, 1.8, 4.8], [0, 1.3, -.3], [0, 1.7, 4.2], [0, 1.3, -.3]], range: 4 }),
]);
// 76. Sin botones. Sin guion. Sin trucos
Q(76, (d, a) => { const T = [0, R0(a, 'guion') - .1, R0(a, 'trucos') - .1]; return { amb: 'parque', ambo: { dusk: true }, fov: 30, atores: [ELLA({ x: -.5, z: 0, eyes: [[0, 'happy']] }), YO({ x: .5, z: 0, eyes: [[0, 'happy']] })],
  extra: (c) => { const L = ['SIN BOTONES', 'SIN GUION', 'SIN TRUCOS'].map((s2, i) => [lw(c, [s2], 1.3, [-1.5 + i * 1.5, 2.5, -.3]), T[i]]); return { update: (u, t, cam) => L.forEach(([m, tt]) => pop(m, u, tt + .1, 99, cam)) }; },
  c: [[0, 1.7, 4.0], [0, 1.5, -.3], [0, 1.7, 3.6], [0, 1.5, -.3]], range: 3 }; });
// 77. Lo curioso: tres noches intentando controlar sus sueños... y bastó una mañana diciéndole la verdad
Qs(77, ['y'], [
  (d) => ({ amb: 'desvan', ambo: { night: true }, fov: 30, atores: [YO({ x: 0, z: 0, eyes: [[0, 'flat']], pose: hold })],
    extra: (c, s, [y]) => { const ap = aparato(); c.add(ap); const l = lab(c, ['3 NOCHES CONTROLANDO'], 2.0, [0, 2.6, 0]); return { update: (u, t, cam) => { naMao(ap, y, -.2); pop(l, u, .5, 99, cam); } }; },
    c: [[0, 1.7, 3.0], [0, 1.4, 0], [0, 1.6, 2.6], [0, 1.4, 0]], range: 2, look: NIGHT }),
  (d) => ({ amb: 'barrio', ambo: { dusk: true }, fov: 32, atores: [ELLA({ x: -.4, z: 0, eyes: [[0, 'happy']], move: (u) => [lerp(-3, 1, u / d) - .4, 0, 0], pose: (k, u) => k.walk(u) }), YO({ x: .4, z: 0, eyes: [[0, 'happy']], move: (u) => [lerp(-3, 1, u / d) + .4, 0, 0], pose: (k, u) => k.walk(u) })],
    extra: (c) => { const l = lp(c, ['1 MAÑANA DE VERDAD'], 2.0, [0, 2.6, 0]); return { update: (u, t, cam) => { const x = lerp(-3, 1, u / d); l.position.x = x; pop(l, u, .8, 99, cam); } }; },
    cam: [[0, [-3.0, 1.8, 4.4], [-3.0, 1.3, 0]], [d, [1.0, 1.8, 4.4], [1.0, 1.3, 0]]], f: [[0, 4.6]], range: 3 }),
]);
// 78. Esa noche, antes de dormir, te llega un mensaje
Q(78, (d, a) => { const tm = R0(a, 'mensaje'); return { amb: 'quarto', ambo: { night: true }, fov: 30, atores: [DORM(PIJ, { x: -.8, z: -.8, y: .78, eyes: [[0, 'flat'], [tm, 'wide']], p2: (k) => dinoOn(k) })],
  extra: (c) => { const ph = telefono(['...'], { hora: '23:47' }); ph.scale.setScalar(.35); ph.position.set(-.2, 1.25, -.3); ph.rotation.x = -.6; c.add(ph); const g = glowSprite('#9FC8FF', .8, 0); g.position.set(-.2, 1.35, -.2); c.add(g); return { update: (u) => { const on = u > tm; g.material.opacity = on ? .5 + .3 * Math.sin(u * 14) : 0; ph.position.x = -.2 + (on && u < tm + 1 ? Math.sin(u * 60) * .01 : 0); } }; },
  c: [[.6, 1.9, 2.2], [-1.0, 1.0, -1.0], [.4, 1.8, 1.6], [-1.0, 1.0, -1.0]], range: 2, look: NIGHT }; });
// 79. "Esta noche voy a soñar contigo. Pero lo voy a decidir yo"
Q(79, (d, a) => { const tp = R0(a, 'pero'); return { amb: 'quarto', ambo: { night: true }, fov: 26, atores: [],
  extra: (c) => { const p1 = telefono(['Esta noche voy a', 'soñar contigo.'], { hora: '23:47' }); const p2 = telefono(['Esta noche voy a', 'soñar contigo.', 'Pero lo voy a', 'decidir yo.'], { hora: '23:47' }); for (const p of [p1, p2]) { p.position.set(0, 1.6, 0); c.add(p); }
    return { update: (u) => { p1.visible = u < tp; p2.visible = u >= tp; } }; },
  c: [[0, 1.6, 2.2], [0, 1.6, 0], [0, 1.6, 1.8], [0, 1.6, 0]], range: 1, look: NIGHT }; });
// 80. Y debajo, un emoji de un pato
Q(80, (d) => ({ amb: 'quarto', ambo: { night: true }, fov: 30, atores: [PIJ({ x: -1.0, z: .2, eyes: [[0, 'wide'], [1.2, 'heart']], pose: (k) => k.pose({ armL: [12, 8], armR: [80, 50] }) }), PATO({ x: .8, z: -.4, s: .6 })],
  extra: (c, s, [y, p]) => { const r = rubor(y); const ph = telefono(['...pero lo voy a', 'decidir yo.'], { hora: '23:48', pato: true }); ph.scale.setScalar(.4); c.add(ph); const q = gl(c, '¡CUAC!', .7, [1.1, 1.2, -.4]);
    return { update: (u, t, cam) => { const pp = hand(y); ph.position.set(pp.x, pp.y + .15, pp.z + .08); pointer(ph, cam); r(smooth(.8, 1.6, u)); p.root.visible = u > .5; pop(q, u, .7, 99, cam); p.talk(u, u > .7 && u < 1.5); } }; },
  c: [[0, 1.5, 3.0], [0, 1.2, -.2], [0, 1.5, 2.6], [0, 1.2, -.2]], range: 2, look: NIGHT }));
// 81. LLAMADA FINAL: suscríbete; ¿qué harías tú con el botón rojo?
Q(81, (d, a) => { const ts = R0(a, 'suscribete'), tc = R0(a, 'cuentame'), tb = R0(a, 'boton'); return { amb: 'playaSueno', fov: 32, atores: [ELLA({ x: -1.6, z: 0, eyes: [[0, 'happy']], pose: wave }), YO({ x: -.7, z: 0, eyes: [[0, 'happy']], pose: (k, u) => (u > ts ? point(k) : wave(k, u)) }), PATO({ x: 2.3, z: -.6, s: 1.2 })],
  extra: (c, s, A) => { const sb = suscribe(2.4); sb.position.set(1.0, 2.6, -.2); c.add(sb); const ap = aparato(); ap.position.set(.9, 0, .6); ap.scale.setScalar(1.6); c.add(ap); const q = lab(c, ['¿QUÉ HARÍAS TÚ CON EL BOTÓN ROJO?'], 3.2, [0, .8, 1.2], { size: 62, w: 1300 }); const l2 = lw(c, ['CUÉNTAMELO EN LOS COMENTARIOS'], 2.6, [0, 3.3, -.2], { size: 62, w: 1200 });
    return { update: (u, t, cam) => { const k = smooth(ts - .3, ts, u); sb.scale.setScalar(Math.max(.01, k)); sb.rotation.z = u > ts + .6 && u < ts + 1.6 ? Math.sin(u * 40) * .05 : 0; pop(l2, u, tc, 99, cam); pop(q, u, tb - .6, 99, cam); pulsa(ap, u > tb ? .5 + .5 * Math.sin(u * 5) : 0); A[2].talk(u, u > tb && Math.sin(u * 3) > .6); } }; },
  c: [[0, 1.9, 5.6], [0, 1.6, -.2], [0, 1.8, 5.0], [0, 1.6, -.2]], k: 1, range: 7, blur: 4, look: DREAM }; });
