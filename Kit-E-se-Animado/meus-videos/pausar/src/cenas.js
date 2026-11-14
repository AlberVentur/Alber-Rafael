// "¿Y si pudieras pausar el tiempo?" — horizontal 1280x720, ~6:16
import * as THREE from 'three';
import { plano, AMBS, box, std, cut, glowSprite, pointer, canvasTex, beam, lightPanel, smooth, lerp, clamp, rng } from './mundo.js';
import { bicho } from './bichos.js';
import { cama, deitar, bubble, wordTex, clock } from './extra.js';
import { earthTex, probe, stars, crowd } from './motor/kit2.js';
import { car, sky, tree } from './motor/kit.js';
import { CAST } from './pecas.js';
import { sunLight, tileFloor } from './comum.js';

export const CENAS = [];
const P = (t0, t1, cfg) => CENAS.push([(a, b) => plano(a, b, cfg), t0, t1]);
const H = (o) => ({ tipo: 'humano', ...o });
const cast = (i, o = {}) => H({ outfit: CAST[i][0], hair: CAST[i][1], hairc: CAST[i][2], lash: !!CAST[i][1], ...o });

// ---------- tempo congelado ----------
const FZ = { sat: .42, tint: '#D4E0FF' };
const flashAt = (u, ...ts) => ts.reduce((m, a) => Math.max(m, .75 - Math.abs(u - a) * 3.5), 0);
const frozen = (a = -1, b = 1e9, base = {}) => (u) => ({ ...base, ...(u >= a && u < b ? FZ : {}), flash: flashAt(u, a, b) });
const cl = (u, a, b = 1e9) => (u < a ? u : u < b ? a : u - (b - a));
const walker = (i, x0, z, vx, a = 1e9, b = 1e9, o = {}) => cast(i, { x: x0, z, ...o, move: (u) => [x0 + vx * cl(u, a, b), 0, z], pose: (k, u) => k.walk(cl(u, a, b) + i, 1) });
const snapPose = (at, k, u, extra = {}) => k.pose({ armL: [12, 8], armR: u > at - .5 && u < at + .7 ? [125, 75] : [12, 8], ...extra });

const globo = (txt, w = 1.2) => cut(canvasTex(512, 280, (x) => { x.clearRect(0, 0, 512, 280); x.fillStyle = '#FBF7EC'; x.strokeStyle = '#2A2A34'; x.lineWidth = 8; x.beginPath(); x.roundRect(10, 10, 492, 200, 60); x.fill(); x.stroke(); x.beginPath(); x.moveTo(110, 205); x.lineTo(80, 270); x.lineTo(170, 205); x.fill(); x.stroke(); x.fillStyle = '#2A2A34'; x.font = `900 ${txt.length > 10 ? 54 : 80}px Fraunces`; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(txt, 256, 112); }), w, w * .55);
const ringTex = () => canvasTex(256, 256, (x) => { x.clearRect(0, 0, 256, 256); const g = x.createRadialGradient(128, 128, 80, 128, 128, 126); g.addColorStop(0, 'rgba(160,240,255,0)'); g.addColorStop(.75, 'rgba(170,245,255,.55)'); g.addColorStop(.92, 'rgba(230,255,255,.95)'); g.addColorStop(1, 'rgba(160,240,255,0)'); x.fillStyle = g; x.fillRect(0, 0, 256, 256); });
// burbuja de tiempo: esfera translúcida + aro brilhante virado para a câmera
function burbuja(c, r = 1.15) { const g = new THREE.Group(); const s = new THREE.Mesh(new THREE.SphereGeometry(r, 48, 32), new THREE.MeshStandardMaterial({ color: '#A8F0FF', emissive: '#5FD8F0', emissiveIntensity: .25, transparent: true, opacity: .14, roughness: .1, depthWrite: false })); const ring = new THREE.Mesh(new THREE.PlaneGeometry(r * 2.06, r * 2.06), new THREE.MeshBasicMaterial({ map: ringTex(), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })); g.add(s, ring); c.add(g); g.ring = ring; g.r = r;
  g.at = (x, y, z, cam, sc = 1) => { g.position.set(x, y, z); g.scale.setScalar(Math.max(.001, sc)); g.visible = sc > .01; if (cam) ring.lookAt(cam.position); }; return g; }
const heroB = (o = {}) => H({ glow: .1, ...o });
const hearT = () => canvasTex(256, 240, (x) => { x.clearRect(0, 0, 256, 240); x.fillStyle = '#E2483A'; x.beginPath(); x.moveTo(128, 220); x.bezierCurveTo(10, 140, 0, 40, 70, 25); x.bezierCurveTo(105, 18, 125, 45, 128, 62); x.bezierCurveTo(131, 45, 151, 18, 186, 25); x.bezierCurveTo(256, 40, 246, 140, 128, 220); x.fill(); x.fillStyle = 'rgba(255,255,255,.35)'; x.beginPath(); x.ellipse(75, 70, 22, 14, -.6, 0, 7); x.fill(); });
const colibriT = () => canvasTex(520, 360, (x) => { x.clearRect(0, 0, 520, 360); x.fillStyle = '#9FD8C8'; x.globalAlpha = .9; x.beginPath(); x.ellipse(250, 110, 150, 46, -.7, 0, 7); x.fill(); x.beginPath(); x.ellipse(300, 120, 130, 40, -.25, 0, 7); x.fill(); x.globalAlpha = 1; x.fillStyle = '#2E9E6A'; x.beginPath(); x.ellipse(250, 210, 110, 52, .25, 0, 7); x.fill(); x.fillStyle = '#E8F4E0'; x.beginPath(); x.ellipse(240, 235, 70, 26, .25, 0, 7); x.fill(); x.fillStyle = '#C9361F'; x.beginPath(); x.ellipse(165, 200, 34, 30, 0, 0, 7); x.fill(); x.fillStyle = '#2E9E6A'; x.beginPath(); x.arc(140, 170, 46, 0, 7); x.fill(); x.fillStyle = '#2A2A34'; x.fillRect(10, 172, 100, 9); x.beginPath(); x.moveTo(340, 230); x.lineTo(450, 280); x.lineTo(430, 240); x.lineTo(470, 230); x.lineTo(345, 205); x.fill(); x.fillStyle = '#FBF7EC'; x.beginPath(); x.arc(130, 162, 13, 0, 7); x.fill(); x.fillStyle = '#1A1A24'; x.beginPath(); x.arc(127, 163, 7, 0, 7); x.fill(); });
const pauseT = () => canvasTex(256, 256, (x) => { x.clearRect(0, 0, 256, 256); x.fillStyle = '#FFF4DE'; x.beginPath(); x.roundRect(58, 40, 50, 176, 16); x.fill(); x.beginPath(); x.roundRect(148, 40, 50, 176, 16); x.fill(); });
const labelT = (lines, o = {}) => { const { w = 512, h = 200, bg = '#FBF7EC', fg = '#2A2A34', size = 64 } = o; return canvasTex(w, h, (x) => { x.clearRect(0, 0, w, h); x.fillStyle = bg; x.beginPath(); x.roundRect(6, 6, w - 12, h - 12, 26); x.fill(); x.fillStyle = fg; x.font = `900 ${size}px Fraunces`; x.textAlign = 'center'; x.textBaseline = 'middle'; lines.forEach((l, i) => x.fillText(l, w / 2, h / 2 + (i - (lines.length - 1) / 2) * size * 1.1)); }); };
// relógio de parede com ponteiro de segundos (desenhado a cada quadro)
function relojS(sz = 1) { const cv = document.createElement('canvas'); cv.width = cv.height = 512; const x = cv.getContext('2d'); const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; const m = new THREE.Mesh(new THREE.PlaneGeometry(sz, sz), new THREE.MeshStandardMaterial({ map: t, transparent: true, alphaTest: .05, roughness: .6 }));
  m.set = (sec) => { x.clearRect(0, 0, 512, 512); x.save(); x.translate(256, 256); x.fillStyle = '#2A2A34'; x.beginPath(); x.arc(0, 0, 240, 0, 7); x.fill(); x.fillStyle = '#FBF7EC'; x.beginPath(); x.arc(0, 0, 212, 0, 7); x.fill(); x.fillStyle = '#2A2A34'; for (let i = 0; i < 60; i++) { x.save(); x.rotate(i / 60 * Math.PI * 2); x.fillRect(-3, -200, 6, i % 5 ? 14 : 30); x.restore(); }
    const hand = (a, l, wd, c) => { x.save(); x.rotate(a); x.fillStyle = c; x.fillRect(-wd / 2, -l, wd, l + 24); x.restore(); }; hand(1.9, 110, 16, '#2A2A34'); hand(.5, 160, 10, '#2A2A34'); hand(sec / 60 * Math.PI * 2, 185, 5, '#C9361F'); x.fillStyle = '#C9361F'; x.beginPath(); x.arc(0, 0, 14, 0, 7); x.fill(); x.restore(); t.needsUpdate = true; }; m.set(0); return m; }

// ---------- ambientes extras ----------
AMBS.pasteleria = (c) => { c.fog = new THREE.FogExp2('#F3D2C0', .02); c.add(tileFloor(16, 14, '#F2E6DA', '#E2CFC0', 8)); c.add(box(16, 5, .3, std('#E89AA8'), 0, 2.5, -3.2)); for (let i = 0; i < 6; i++) c.add(box(.12, 5, .05, std('#F6C2CC'), -6 + i * 2.4, 2.5, -3.02)); c.add(box(5.4, 1.0, .9, std('#8A5A3C'), 0, .5, -1.2)); c.add(box(5.5, .08, 1.0, std('#F4EEE6'), 0, 1.04, -1.2)); c.add(box(3.6, .1, .5, std('#F4EEE6'), 0, 2.1, -3.0)); c.add(box(3.6, .1, .5, std('#F4EEE6'), 0, 2.9, -3.0));
  const sign = cut(labelT(['PASTELERÍA'], { bg: '#6C4A2C', fg: '#FFE7B8', size: 80, w: 768, h: 160 }), 2.8, .58); sign.position.set(0, 3.9, -3.0); c.add(sign);
  c.add(new THREE.HemisphereLight('#FFF0F0', '#A07060', 1.0)); const s = sunLight('#FFE6C8', 1.8, [3, 8, 6], 8, 30); c.add(s); for (let i = 0; i < 3; i++) { const l = new THREE.PointLight('#FFD8A8', 5, 7, 1.6); l.position.set(-2 + i * 2, 3.4, -.5); c.add(l); } };
AMBS.espacio = (c) => { c.background = new THREE.Color('#05060E'); stars(c, 2600, 200, 3); c.add(new THREE.HemisphereLight('#8FA8FF', '#101020', .5)); const s = new THREE.DirectionalLight('#FFF4E0', 3.2); s.position.set(-10, 6, 8); c.add(s); };
AMBS.cueva = (c) => { c.background = new THREE.Color('#0E0A08'); c.fog = new THREE.FogExp2('#120C0A', .09); const g = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), std('#3A2C24')); g.rotation.x = -Math.PI / 2; g.receiveShadow = true; c.add(g); const R = rng(11);
  for (let i = 0; i < 46; i++) { const r = new THREE.Mesh(new THREE.DodecahedronGeometry(.6 + R() * 1.6, 0), std(['#4A3A30', '#3E3028', '#5A4636'][i % 3])); const a = R() * Math.PI - Math.PI, d = 3.5 + R() * 4; r.position.set(Math.cos(a) * d, R() * 3.5, Math.sin(a) * d - 1); r.rotation.set(R() * 3, R() * 3, R() * 3); c.add(r); }
  for (let i = 0; i < 14; i++) { const s = new THREE.Mesh(new THREE.ConeGeometry(.12 + R() * .2, .6 + R() * 1.2, 7), std('#6A5646')); s.rotation.x = Math.PI; s.position.set((R() - .5) * 8, 4.2 - R() * .5, -1 - R() * 5); c.add(s); }
  c.add(new THREE.HemisphereLight('#6A5A80', '#201410', .25)); const l = new THREE.PointLight('#FFB060', 14, 9, 1.6); l.position.set(.6, 1.6, .2); l.castShadow = true; c.add(l); };
AMBS.aula = (c) => { c.fog = new THREE.FogExp2('#E8DCC8', .02); c.add(tileFloor(16, 16, '#C9B89A', '#BBA98A', 10)); c.add(box(16, 5, .3, std('#E8DCC0'), 0, 2.5, -3.6)); c.add(box(4.4, 1.8, .06, std('#2F5A48'), 0, 2.3, -3.42)); c.add(box(4.6, .1, .2, std('#8E6242'), 0, 1.36, -3.35));
  const chalk = cut(canvasTex(512, 200, (x) => { x.clearRect(0, 0, 512, 200); x.fillStyle = '#F4F0E4'; x.font = '700 60px Caveat'; x.fillText('EXAMEN  —  2 + 2 = ?', 30, 90); x.fillText('x² − 9 = 0', 60, 170); }), 3.4, 1.3); chalk.position.set(0, 2.35, -3.38); c.add(chalk);
  c.add(new THREE.HemisphereLight('#FFFFFF', '#9A8A70', 1.0)); c.add(sunLight('#FFE8C8', 2.2, [-6, 8, 6], 10, 40)); };

// ===================== CENAS =====================
const parqueGente = (fz, fb = 1e9) => [walker(0, -3.2, -2.6, .55, fz, fb), walker(2, 2.8, -3.4, -.5, fz, fb), walker(3, -1.6, -4.6, .4, fz, fb), walker(7, 4.2, -2.0, -.6, fz, fb), walker(4, -5, -5.5, .5, fz, fb)];

// 1. Chasqueas los dedos: todo se detiene, menos tú (0–7.86)
P(0, 7.86, { amb: 'parque', fov: 34, atores: [heroB({ x: 0, z: 0, eyes: [[0, 'look'], [3.84, 'wide'], [5.82, 'lookl'], [6.4, 'look'], [6.82, 'smug']], pose: (k, u) => snapPose(3.0, k, u) }), ...parqueGente(3.84)],
  extra: (c) => { const ball = new THREE.Mesh(new THREE.SphereGeometry(.13, 20, 14), std('#E8667F')); c.add(ball); return { update: (u) => { const v = cl(u, 3.84); const ph = (v * .9) % 1; ball.position.set(-1.6 + v * .3, .13 + Math.sin(ph * Math.PI) * 1.6, -1.6); } }; },
  cam: [[0, [0, 1.6, 7], [0, 1.0, -1.5]], [3.8, [0, 1.5, 5.2], [0, 1.0, -1]], [7.86, [.6, 1.55, 3.0], [0, 1.25, -.5]]], f: [[0, 7], [3.8, 5.2], [7.86, 3]], range: 2.2, lookFn: frozen(3.84) });
// 2. El perro del vecino, congelado a mitad de un ladrido (7.86–11.34)
P(7.86, 11.34, { amb: 'rua', ambo: { seed: 1 }, fov: 30, atores: [{ tipo: 'perro', x: 0, z: -1, y: .18, eyes: [[0, 'wide']], pose: (k) => { k.card.rotation.z = .12; } }],
  extra: (c) => { const g = globo('¡GUAU!', .8); g.position.set(.5, 1.05, -1); c.add(g); return { update: (u, t, cam) => pointer(g, cam) }; },
  cam: [[0, [-1.6, .95, 1.9], [0, .75, -1]], [3.48, [1.6, .95, 1.7], [0, .8, -1]]], f: [[0, 2.6]], range: 1.3, look: FZ });
// 3. Tu mamá con la cuchara a medio camino (11.34–14.68)
P(11.34, 14.68, { amb: 'sala', fov: 30, atores: [cast(0, { x: 0, z: -1.2, eyes: [[0, 'look']], pose: (k) => k.pose({ armR: [95, 125], armL: [12, 8] }) })],
  extra: (c, s, [mom]) => { c.add(box(2.2, .08, 1.0, std('#D8C8A8'), 0, .85, -.4)); c.add(box(2.3, .8, 1.1, std('#8E6242'), 0, .42, -.4)); const bowl = new THREE.Mesh(new THREE.SphereGeometry(.16, 20, 10, 0, 7, Math.PI / 2, Math.PI / 2), std('#F4F0E4', { side: THREE.DoubleSide })); bowl.position.set(0, 1.05, -.3); c.add(bowl); const soup = new THREE.Mesh(new THREE.CircleGeometry(.15, 20), std('#E2A040')); soup.rotation.x = -Math.PI / 2; soup.position.set(0, 1.0, -.3); c.add(soup);
    const sp = box(.03, .02, .26, std('#C8CCD4', { metalness: .7, roughness: .3 }), .22, 1.42, -.95); sp.rotation.x = .5; c.add(sp); const drop = new THREE.Mesh(new THREE.SphereGeometry(.025, 10, 8), std('#E2A040')); c.add(drop); const hp = new THREE.Vector3(); return { update: () => { mom.arms.R.hand.getWorldPosition(hp); sp.position.set(hp.x, hp.y + .04, hp.z + .12); drop.position.set(hp.x, hp.y - .06, hp.z + .2); } }; },
  cam: [[0, [-1.2, 1.5, 1.6], [0, 1.35, -1]], [3.34, [1.1, 1.5, 1.5], [0, 1.35, -1]]], f: [[0, 2.2]], range: 1.2, look: FZ });
// 4. Un pájaro quieto en el aire (14.68–19.34)
P(14.68, 19.34, { amb: 'parque', fov: 34, atores: [{ tipo: 'paloma', x: 0, z: -1, y: 2.2, s: 1.4, eyes: [[0, 'open']], pose: (k) => { k.card.rotation.z = .25; } }],
  extra: (c) => { const R = rng(9), f = []; for (let i = 0; i < 18; i++) { const m = cut(canvasTex(64, 32, (x) => { x.clearRect(0, 0, 64, 32); x.fillStyle = '#E8E4DA'; x.beginPath(); x.ellipse(32, 16, 28, 9, .3, 0, 7); x.fill(); }), .1, .05); m.position.set(-.5 + R() * 1.3, 1.9 + R() * .8, -1.2 + R() * .5); m.rotation.z = R() * 3; c.add(m); f.push(m); } return { update: (u, t, cam) => f.forEach((m) => pointer(m, cam)) }; },
  cam: [[0, [-2.2, 1.0, 2.6], [0, 2.3, -1]], [4.66, [2.0, 1.4, 2.2], [0, 2.3, -1]]], f: [[0, 3.6], [4.66, 3.2]], range: 1.6, look: FZ });
// 5. Suena increíble… pero la física tiene sorpresas (19.34–26.96)
P(19.34, 26.96, { amb: 'parque', fov: 32, atores: [heroB({ x: 0, z: 0, eyes: [[0, 'happy'], [2.0, 'look'], [4.34, 'wide']], pose: (k, u) => (u < 1.9 ? k.cheer(u, 0, .8) : k.pose({ armL: [12, 8], armR: [40, 60] })) }), ...parqueGente(-1)],
  cam: [[0, [-.4, 1.4, 3.6], [0, 1.1, -.6]], [7.62, [.5, 1.5, 2.6], [0, 1.25, -.5]]], f: [[0, 3.6], [7.62, 2.6]], range: 1.6, look: FZ });
// 6. Lo primero que notarías es… nada. Todo negro (26.96–33.36)
P(26.96, 33.36, { amb: 'parque', fov: 30, atores: [heroB({ x: 0, z: 0, eyes: [[0, 'look'], [2.26, 'wide']] }), ...parqueGente(-1)],
  cam: [[0, [0, 1.5, 3.0], [0, 1.3, -.5]], [6.4, [0, 1.55, 2.0], [0, 1.4, -.3]]], f: [[0, 3.0], [6.4, 2.0]], range: 1.4, lookFn: (u) => ({ ...FZ, exposure: lerp(1.02, .0, smooth(4.3, 5.4, u)) }) });

// 7. Vemos gracias a la luz: la luz rebota y llega a los ojos… y se congela (33.36–50.66)
const luzPath = [[3.6, 1.9, -1.9], [.7, 1.02, -.7], [-1.05, 1.62, .05]];
P(33.36, 50.66, { amb: 'sala', ambo: { night: true, wall: '#3A3050' }, bg: '#1E1626', fov: 32, atores: [heroB({ x: -1.1, z: 0, eyes: [[0, 'look'], [11.16, 'wide']] })],
  extra: (c) => { c.add(box(1.2, .9, .8, std('#8E6242'), .7, .45, -.7)); const ball = new THREE.Mesh(new THREE.SphereGeometry(.13, 24, 16), std('#E8667F')); ball.position.set(.7, 1.03, -.7); ball.castShadow = true; c.add(ball);
    const V = luzPath.map((p) => new THREE.Vector3(...p)); const L = [V[0].distanceTo(V[1]), V[1].distanceTo(V[2])], tot = L[0] + L[1]; const ph = []; for (let i = 0; i < 46; i++) { const g = glowSprite(i % 2 ? '#FFE6A8' : '#FFF6D8', .16, .95); c.add(g); ph.push(g); }
    const at = (p) => { const d = p * tot; return d < L[0] ? V[0].clone().lerp(V[1], d / L[0]) : V[1].clone().lerp(V[2], (d - L[0]) / L[1]); };
    return { update: (u) => { const v = cl(u, 11.16); ph.forEach((g, i) => { const p = (v * .35 + i / ph.length) % 1; g.position.copy(at(p)); g.material.opacity = (v > 2 ? .95 : v / 2 * .95); }); } }; },
  cam: [[0, [.2, 1.6, 4.4], [.6, 1.3, -.8]], [10, [.1, 1.5, 3.4], [.4, 1.3, -.6]], [11.2, [-.2, 1.5, 2.4], [.6, 1.3, -.6]], [17.3, [1.4, 1.4, 1.2], [.8, 1.25, -.8]]], f: [[0, 4.4], [10, 3.4], [11.2, 2.4], [17.3, 1.5]], range: 2, lookFn: frozen(11.16) });
// 8. Sin luz nueva: completamente a oscuras (50.66–56.14)
P(50.66, 56.14, { amb: 'sala', ambo: { night: true, wall: '#3A3050' }, bg: '#1E1626', fov: 28, atores: [heroB({ x: 0, z: 0, eyes: [[0, 'wide']] })],
  cam: [[0, [0, 1.6, 2.2], [0, 1.5, 0]], [5.48, [0, 1.62, 1.5], [0, 1.58, 0]]], f: [[0, 2.2], [5.48, 1.5]], range: 1, lookFn: (u) => ({ ...FZ, exposure: lerp(.9, .0, smooth(2.6, 4.4, u)) }) });
// 9. Intentas dar un paso… y no puedes (56.14–60.76)
P(56.14, 60.76, { amb: 'rua', ambo: { seed: 2 }, fov: 32, atores: [heroB({ x: 0, z: 0, eyes: [[0, 'look'], [1.5, 'flat'], [3.4, 'angry']], pose: (k, u) => { k.walk(u * .4, 1, 1.4); k.body.rotation.z = 0; k.body.position.y = 0; } }), walker(1, 2.4, -3, -.5, -1), walker(5, -2.6, -4, .5, -1)],
  cam: [[0, [-1.4, 1.2, 3.2], [0, 1.0, 0]], [4.62, [-.4, 1.1, 2.6], [0, 1.0, 0]]], f: [[0, 3.5], [4.62, 2.7]], range: 1.6, look: FZ });
// 10. Billones de moléculas de aire… congeladas (60.76–69.62)
P(60.76, 69.62, { amb: 'rua', ambo: { seed: 2 }, fov: 30, atores: [heroB({ x: 0, z: 0, eyes: [[0, 'look'], [5.98, 'angry']], pose: (k, u) => k.pose({ armL: [70, 10], armR: [70, 10], lean: u > 6 ? Math.sin(u * 9) * 2 : 0 }) })],
  extra: (c) => { const N = 700, R = rng(21); const im = new THREE.InstancedMesh(new THREE.SphereGeometry(.035, 10, 8), new THREE.MeshStandardMaterial({ color: '#9FD8FF', emissive: '#4FA8E8', emissiveIntensity: .6, roughness: .3 }), N); const base = []; for (let i = 0; i < N; i++) base.push([(R() - .5) * 4, R() * 2.6, (R() - .5) * 3, R() * 7]); c.add(im); const d = new THREE.Object3D();
    return { update: (u) => { const v = cl(u, 5.98); base.forEach(([x, y, z, p], i) => { d.position.set(x + Math.sin(v * 7 + p) * .12, y + Math.cos(v * 6 + p * 1.3) * .12, z + Math.sin(v * 5 + p * 2) * .12); d.updateMatrix(); im.setMatrixAt(i, d.matrix); }); im.instanceMatrix.needsUpdate = true; } }; },
  cam: [[0, [1.6, 1.4, 2.6], [0, 1.1, 0]], [5.9, [.6, 1.3, 2.0], [0, 1.1, 0]], [8.86, [-.6, 1.4, 1.9], [0, 1.2, 0]]], f: [[0, 3.0], [5.9, 2.1], [8.86, 2.0]], range: 1.2, lookFn: frozen(5.98) });
// 11. Como un bloque de cemento invisible (69.62–73.68)
P(69.62, 73.68, { amb: 'rua', ambo: { seed: 2 }, fov: 32, atores: [heroB({ x: 0, z: 0, eyes: [[0, 'angry']], pose: (k, u) => k.pose({ armL: [60, 20], armR: [60, 20], legL: [14, 10], legR: [-8, 0] }) })],
  extra: (c) => { const b = new THREE.Mesh(new THREE.BoxGeometry(1.5, 2.2, 1.4), new THREE.MeshStandardMaterial({ color: '#B8B4AC', transparent: true, opacity: 0, roughness: .95, depthWrite: false })); b.position.set(0, 1.1, 0); c.add(b); const e = new THREE.LineSegments(new THREE.EdgesGeometry(b.geometry), new THREE.LineBasicMaterial({ color: '#F4F0E4', transparent: true, opacity: 0 })); e.position.copy(b.position); c.add(e); return { update: (u) => { const k = smooth(.6, 2.2, u); b.material.opacity = k * .45; e.material.opacity = k * .9; } }; },
  cam: [[0, [.8, 1.4, 2.6], [0, 1.1, 0]], [4.06, [2.2, 2.0, 4.6], [0, 1.1, 0]]], f: [[0, 2.7], [4.06, 5]], range: 2, look: FZ });
// 12. Y respirar… tampoco (73.68–78.42)
P(73.68, 78.42, { amb: 'rua', ambo: { seed: 2 }, fov: 26, atores: [heroB({ x: 0, z: 0, eyes: [[0, 'shut'], [.9, 'wide'], [3.2, 'sad']], pose: (k, u) => k.pose({ armL: [150, 150], armR: [150, 150], head: Math.sin(u * 10) * (u > .9 ? 3 : 0), squash: u < .9 ? .03 : 0 }) })],
  cam: [[0, [0, 1.55, 2.0], [0, 1.4, 0]], [4.74, [0, 1.6, 1.5], [0, 1.45, 0]]], f: [[0, 2.0], [4.74, 1.5]], range: 1, look: FZ });
// 13. El sonido es aire que vibra: silencio total (78.42–85.38)
P(78.42, 85.38, { amb: 'sala', ambo: { wall: '#2F6E68' }, fov: 32, atores: [heroB({ x: -1.0, z: 0, eyes: [[0, 'happy'], [4.0, 'look'], [5.2, 'sad']], pose: (k, u) => (u < 4 ? k.pose({ armL: [12, 8], armR: [12, 8], head: Math.sin(u * 8) * 4, bob: Math.abs(Math.sin(u * 8)) * .03 }) : k.pose()) })],
  extra: (c) => { c.add(box(1.0, .8, .7, std('#8E6242'), .7, .4, -.6)); const radio = new THREE.Group(); radio.add(box(.7, .42, .26, std('#E9B44C'), 0, 0, 0)); const sp = new THREE.Mesh(new THREE.CircleGeometry(.14, 24), std('#2A2A34')); sp.position.set(-.14, 0, .135); radio.add(sp); radio.add(box(.18, .1, .02, std('#F4F0E4'), .18, .06, .135)); radio.position.set(.7, 1.01, -.55); c.add(radio);
    const rings = []; for (let i = 0; i < 6; i++) { const r = new THREE.Mesh(new THREE.TorusGeometry(.2, .012, 8, 48), new THREE.MeshBasicMaterial({ color: '#FFF4DE', transparent: true, opacity: .8 })); r.position.set(.56, 1.01, -.4); c.add(r); rings.push(r); }
    return { update: (u, t, cam) => { const v = cl(u, 4.0); rings.forEach((r, i) => { const p = (v * .7 + i / rings.length) % 1; r.scale.setScalar(1 + p * 6); r.material.opacity = (1 - p) * .8 * (1 - smooth(4.2, 5.4, u)); r.lookAt(cam.position); }); } }; },
  cam: [[0, [0, 1.4, 3.6], [0, 1.0, -.5]], [6.96, [.3, 1.3, 2.6], [0, 1.0, -.4]]], f: [[0, 3.6], [6.96, 2.6]], range: 1.6, lookFn: frozen(4.0) });
// 14. Ciego, sordo, inmóvil y sin aire (85.38–96.12)
P(85.38, 96.12, { amb: 'rua', ambo: { seed: 2 }, fov: 32, atores: [heroB({ x: 0, z: 0, eyes: [[0, 'look'], [4.4, 'wide'], [8.1, 'sad']] }), walker(1, 2.4, -3, -.5, -1), walker(5, -2.6, -4, .5, -1)],
  extra: (c) => { const W = [['CIEGO', 4.38, [-1.0, 2.15]], ['SORDO', 5.36, [1.0, 2.15]], ['INMÓVIL', 6.12, [-1.15, 1.25]], ['SIN AIRE', 7.08, [1.15, 1.25]]].map(([t, a, [x, y]]) => { const m = cut(labelT([t], { bg: '#2A2A34', fg: '#F2C14E', size: 72, w: 512, h: 150 }), .9, .26); m.position.set(x, y, .3); c.add(m); return { m, a }; });
    return { update: (u, t, cam) => W.forEach(({ m, a }) => { const k = smooth(a, a + .25, u); m.visible = k > 0; m.scale.setScalar(.6 + .4 * k + Math.max(0, Math.sin((u - a) * 10)) * .08 * (u - a < .5 ? 1 : 0)); pointer(m, cam); }) }; },
  cam: [[0, [0, 1.5, 4.4], [0, 1.4, 0]], [10.74, [0, 1.55, 3.3], [0, 1.5, 0]]], f: [[0, 4.4], [10.74, 3.3]], range: 2, look: FZ });

// 15. Hagamos trampa: una burbuja donde el tiempo sí corre (96.12–102.62)
P(96.12, 102.62, { amb: 'parque', fov: 32, atores: [heroB({ x: 0, z: 0, eyes: [[0, 'look'], [.9, 'smug'], [4.0, 'happy']], pose: (k, u) => k.pose({ armL: [12, 8], armR: u > .9 && u < 3.5 ? [60, 110] : [12, 8] }) }), ...parqueGente(-1)],
  extra: (c, s, [h]) => { const b = burbuja(c); return { update: (u, t, cam) => b.at(0, 1.0, 0, cam, smooth(3.8, 4.8, u) * (1 + Math.sin(u * 3) * .015)) }; },
  cam: [[0, [0, 1.4, 3.0], [0, 1.25, 0]], [3.6, [.2, 1.4, 3.4], [0, 1.15, 0]], [6.5, [.8, 1.6, 4.8], [0, 1.0, 0]]], f: [[0, 3.0], [3.6, 3.4], [6.5, 4.8]], range: 2, look: { sat: .55, tint: '#D8E4FF' } });
// 16. Dentro de la burbuja: ver, respirar y caminar (102.62–109.32)
P(102.62, 109.32, { amb: 'parque', fov: 34, atores: [heroB({ x: -2, z: 0, eyes: [[0, 'happy'], [3.2, 'look'], [5.1, 'happy']], move: (u) => [-2 + Math.min(u, 5) * .5, 0, 0], pose: (k, u) => (u < 5 ? k.walk(u) : k.cheer(u, 0, 1)) }), ...parqueGente(-1)],
  extra: (c, s, [h]) => { const b = burbuja(c); return { update: (u, t, cam) => { const p = h.root.position; b.at(p.x, 1.0, p.z, cam, 1 + Math.sin(u * 3) * .015); } }; },
  cam: [[0, [-2, 1.5, 4.2], [-2, 1.0, 0]], [5, [.5, 1.5, 3.8], [.5, 1.0, 0]], [6.7, [.6, 1.4, 3.2], [.5, 1.1, 0]]], f: [[0, 4.2], [6.7, 3.2]], range: 2, look: { sat: .55, tint: '#D8E4FF' } });
// 17. Los coches detenidos a mitad de la avenida (109.32–113.82)
P(109.32, 113.82, { amb: 'rua', ambo: { seed: 3 }, fov: 36, atores: [heroB({ x: -4.4, z: 0, eyes: [[0, 'happy']], move: (u) => [-4.4, 0, -u * .5], pose: (k, u) => k.walk(u) })],
  extra: (c, s, [h]) => { car(c, -1.6, -4, '#C9361F', 1, false); car(c, 1.6, -9, '#2F6E9A', -1, false); car(c, -1.6, -14, '#E9B44C', 1, false); car(c, 1.6, -2, '#3E7A5C', -1, false); const b = burbuja(c); return { update: (u, t, cam) => { const p = h.root.position; b.at(p.x, 1.0, p.z, cam); } }; },
  cam: [[0, [-2.8, 1.8, 4.5], [-2.0, .9, -4]], [4.5, [-2.6, 2.0, 3.6], [-1.8, .9, -5]]], f: [[0, 5], [4.5, 5.5]], range: 4, look: { sat: .55, tint: '#D8E4FF' } });
// 18. Gotas de lluvia flotando como perlas de vidrio (113.82–121.58)
P(113.82, 121.58, { amb: 'rua', ambo: { seed: 4, dusk: true }, bg: '#C88A7A', fov: 34, atores: [heroB({ x: -1.2, z: 1.5, eyes: [[0, 'wide'], [2.0, 'happy']], move: (u) => [-1.2 + u * .12, 0, 1.5 - u * .45], pose: (k, u) => k.walk(u) })],
  extra: (c, s, [h]) => { const N = 1400, R = rng(31); const im = new THREE.InstancedMesh(new THREE.SphereGeometry(.03, 10, 8), new THREE.MeshStandardMaterial({ color: '#E8F6FF', emissive: '#9FC8E8', emissiveIntensity: .35, roughness: .05, metalness: .1, transparent: true, opacity: .85 }), N); const base = []; for (let i = 0; i < N; i++) base.push(new THREE.Vector3((R() - .5) * 7, .1 + R() * 3.2, 2.5 - R() * 9)); c.add(im); const d = new THREE.Object3D(); d.scale.set(1, 2.6, 1); const b = burbuja(c);
    return { update: (u, t, cam) => { const p = h.root.position; const ctr = new THREE.Vector3(p.x, 1.0, p.z); b.at(ctr.x, ctr.y, ctr.z, cam); base.forEach((q, i) => { const dv = q.clone().sub(ctr); const L = dv.length(); if (L < 1.18) { q.copy(ctr).add(dv.normalize().multiplyScalar(1.18)); } d.position.copy(q); d.updateMatrix(); im.setMatrixAt(i, d.matrix); }); im.instanceMatrix.needsUpdate = true; } }; },
  cam: [[0, [.8, 1.5, 4.6], [-1.0, 1.2, 1]], [7.76, [.2, 1.6, 2.8], [-.4, 1.2, -1.6]]], f: [[0, 3.6], [7.76, 3.4]], range: 2.4, look: { sat: .6, tint: '#D8E4FF' } });
// 19. Un colibrí quieto frente a una flor (121.58–131.52)
P(121.58, 131.52, { amb: 'parque', fov: 30, atores: [heroB({ x: 1.0, z: .3, eyes: [[0, 'look'], [6.9, 'happy']] })],
  extra: (c, s, [h]) => { const fl = new THREE.Group(); fl.add(box(.03, 1.2, .03, std('#4F7A44'), 0, .6, 0)); const R = rng(4); for (let i = 0; i < 7; i++) { const p = new THREE.Mesh(new THREE.SphereGeometry(.09, 14, 10), std('#E8667F')); const a = i / 7 * Math.PI * 2; p.position.set(Math.cos(a) * .12, 1.25 + Math.sin(a) * .12, 0); p.scale.set(1, 1, .4); fl.add(p); } const cn = new THREE.Mesh(new THREE.SphereGeometry(.07, 14, 10), std('#F2C14E')); cn.position.y = 1.25; fl.add(cn); fl.position.set(-.3, 0, -.2); c.add(fl);
    const bird = cut(colibriT(), .5, .35, { shadow: true }); bird.position.set(-.72, 1.32, -.15); c.add(bird); const b = burbuja(c);
    return { update: (u, t, cam) => { pointer(bird, cam); bird.position.y = 1.32; const p = h.root.position; b.at(p.x, 1.0, p.z, cam); } }; },
  cam: [[0, [-1.0, 1.45, 1.5], [-.55, 1.5, -.2]], [5.0, [-.1, 1.45, 1.6], [-.5, 1.5, -.2]], [7.0, [.6, 1.6, 2.8], [.0, 1.45, -.1]], [9.94, [.7, 1.6, 3.0], [0, 1.45, -.1]]], f: [[0, 1.7], [5, 1.7], [7, 2.8]], range: 1.0, look: { sat: .55, tint: '#D8E4FF' } });

// 20. Pastelería: podrías comerte todo… pero el pastelero verá que desaparecieron (131.52–143.14)
const pastel = (c, i, x) => { const g = new THREE.Group(); const cols = ['#E8667F', '#8A4E2E', '#F2C14E', '#F4F0E4', '#B47AFF', '#36AEA2']; const a = new THREE.Mesh(new THREE.CylinderGeometry(.2, .2, .18, 24), std(cols[i % 6])); a.position.y = .09; g.add(a); const t = new THREE.Mesh(new THREE.CylinderGeometry(.21, .21, .04, 24), std('#FBF7EC')); t.position.y = .19; g.add(t); const ch = new THREE.Mesh(new THREE.SphereGeometry(.035, 10, 8), std('#C9361F')); ch.position.y = .24; g.add(ch); g.position.set(x, 1.08, -1.2); c.add(g); return g; };
P(131.52, 143.14, { amb: 'pasteleria', fov: 32, atores: [H({ outfit: 'jaleco', x: .4, z: -2.0, eyes: [[0, 'happy'], [8.3, 'look'], [9.5, 'wide']], pose: (k) => k.pose({ armL: [40, 60], armR: [12, 8] }) }), heroB({ x: -1.1, z: -.3, eyes: [[0, 'look'], [2.88, 'heart'], [5.56, 'wide']], move: (u) => [-1.1, u < 7.9 ? 0 : -50, -.3], pose: (k, u) => (u > 3 && u < 5.5 ? k.pose({ armL: [12, 8], armR: [80, 90], bob: Math.abs(Math.sin(u * 9)) * .02 }) : k.pose()) })],
  extra: (c, s, [pa, h]) => { const ps = [-2.2, -1.4, -.6, .2, 1.0, 1.8].map((x, i) => pastel(c, i, x)); const b = burbuja(c);
    return { update: (u, t, cam) => { ps.forEach((p, i) => { p.visible = u < 3.3 + i * .35; }); const q = h.root.position; b.at(q.x, 1.0, q.z, cam, u < 7.9 ? 1 : 0); } }; },
  cam: [[0, [0, 1.6, 4.0], [0, 1.2, -1.2]], [5.5, [-.6, 1.5, 3.0], [-.6, 1.2, -1.0]], [7.9, [0, 1.6, 3.6], [0, 1.2, -1.2]], [11.62, [.4, 1.6, 2.4], [.3, 1.4, -1.8]]], f: [[0, 4], [5.5, 3], [7.9, 3.6], [11.62, 2.4]], range: 2, lookFn: (u) => ({ ...(u < 7.9 ? { sat: .55, tint: '#D8E4FF' } : {}), flash: flashAt(u, 7.9) }) });
// 21. No te hace invisible: solo nadie ve cómo pasan las cosas (143.14–150.88)
P(143.14, 150.88, { amb: 'pasteleria', fov: 30, atores: [H({ outfit: 'jaleco', x: .2, z: -2.0, eyes: [[0, 'wide'], [3.4, 'look'], [5.6, 'angry']], pose: (k, u) => k.pose({ armL: [100, 60], armR: [100, 60], head: Math.sin(u * 3) * 6 }) })],
  extra: (c) => { const R = rng(5); for (let i = 0; i < 40; i++) { const m = new THREE.Mesh(new THREE.SphereGeometry(.015 + R() * .02, 6, 5), std(['#8A4E2E', '#F4F0E4', '#E8667F'][i % 3])); m.position.set(-2.4 + R() * 4.6, 1.1, -1.4 + R() * .4); c.add(m); } const g = globo('¿?', .7); g.position.set(.75, 2.1, -2.0); c.add(g); return { update: (u, t, cam) => { pointer(g, cam); g.visible = u > .6; } }; },
  cam: [[0, [-.4, 1.5, 2.6], [.1, 1.4, -1.6]], [7.74, [.3, 1.4, 1.6], [.2, 1.5, -1.8]]], f: [[0, 4.4], [7.74, 3.6]], range: 1.6 });

// 22. Tú sí sigues envejeciendo (150.88–156.5)
P(150.88, 156.5, { amb: 'rua', ambo: { seed: 5 }, fov: 32, atores: [heroB({ x: 0, z: 0, eyes: [[0, 'look'], [3.2, 'sad']] }), walker(2, 2.2, -3, -.5, -1), walker(6, -2.4, -4, .5, -1)],
  extra: (c) => { const b = burbuja(c); return { update: (u, t, cam) => b.at(0, 1.0, 0, cam) }; },
  cam: [[0, [0, 1.6, 4.4], [0, 1.2, 0]], [5.62, [0, 1.6, 3.0], [0, 1.35, 0]]], f: [[0, 4.4], [5.62, 3]], range: 2, look: { sat: .55, tint: '#D8E4FF' } });
// 23. Tu corazón late 100.000 veces al día; hambre, sueño (156.5–164.16)
P(156.5, 164.16, { amb: 'rua', ambo: { seed: 5 }, fov: 30, atores: [heroB({ x: .4, z: 0, eyes: [[0, 'look'], [5.34, 'sad'], [6.5, 'shut']], pose: (k, u) => k.pose({ armL: [12, 8], armR: u > 5.3 && u < 6.4 ? [40, 120] : [12, 8], head: u > 6.5 ? -8 : 0 }) })],
  extra: (c) => { const ht = cut(hearT(), .62, .58); ht.position.set(-.55, 1.5, .1); c.add(ht); const gl = glowSprite('#FF6A5A', 1.0, .35); gl.position.copy(ht.position); c.add(gl); return { update: (u, t, cam) => { const beat = Math.pow(Math.max(0, Math.sin(u * Math.PI * 2 * 1.2)), 8); ht.scale.setScalar(1 + beat * .14); gl.material.opacity = .25 + beat * .3; pointer(ht, cam); } }; },
  cam: [[0, [0, 1.5, 3.0], [0, 1.3, 0]], [7.66, [0, 1.5, 2.4], [0, 1.35, 0]]], f: [[0, 3], [7.66, 2.4]], range: 1.4, look: { sat: .6, tint: '#D8E4FF' } });
// 24. Una hora de pausa cada día: +15 días al año (164.16–175.0)
P(164.16, 175.0, { amb: 'sala', ambo: { night: true, wall: '#3A4F7A' }, bg: '#1E1626', fov: 32, atores: [heroB({ x: -.3, z: -.9, eyes: [[0, 'look'], [2.4, 'down'], [3.4, 'shut'], [4.6, 'down'], [8, 'happy']], pose: (k, u) => (u < 3.3 || u > 4.4 ? k.pose({ armL: [40, 70], armR: [40, 70], head: -6 }) : k.pose({ armL: [12, 8], armR: [12, 8], head: 14 })) })],
  extra: (c) => { c.add(box(1.8, .08, .8, std('#8E6242'), -.3, .9, -.3)); c.add(box(.08, .9, .08, std('#6B4A33'), -1.1, .45, -.3)); c.add(box(.08, .9, .08, std('#6B4A33'), .5, .45, -.3)); const bk = box(.5, .04, .36, std('#F4F0E4'), -.3, .96, -.2); c.add(bk); c.add(box(.52, .03, .38, std('#C9361F'), -.3, .935, -.2));
    const ck = clock(.7, 10.2); ck.position.set(1.2, 2.6, -2.84); c.add(ck); const cal = cut(labelT(['DÍA 1'], { bg: '#FBF7EC', fg: '#C9361F', size: 90, w: 360, h: 280 }), .7, .55); cal.position.set(-1.8, 2.3, -2.84); c.add(cal); const cals = [1, 30, 90, 180, 270, 365].map((d) => labelT([`DÍA ${d}`], { bg: '#FBF7EC', fg: '#C9361F', size: 90, w: 360, h: 280 }));
    return { update: (u) => { const i = Math.min(5, Math.max(0, Math.floor((u - 5.8) / .7) + 1)); cal.material.map = cals[u < 5.8 ? 0 : i]; } }; },
  cam: [[0, [.2, 1.7, 3.2], [-.2, 1.3, -.8]], [5.8, [.6, 1.9, 3.8], [-.3, 1.6, -1.5]], [10.84, [.3, 1.8, 3.4], [-.6, 1.8, -2]]], f: [[0, 3.6], [5.8, 4.6], [10.84, 5.2]], range: 2.4, lookFn: (u) => ({ ...FZ, exposure: .98 }) });
// 25. Después de diez años: 5 meses más viejo que tus amigos (175.0–181.74)
P(175.0, 181.74, { amb: 'parque', fov: 32, atores: [cast(2, { x: -1.3, z: -.6, eyes: [[0, 'happy']], pose: (k, u) => k.cheer(u, 0, .5) }), cast(0, { x: 1.3, z: -.6, eyes: [[0, 'happy']], pose: (k, u) => k.cheer(u, 2, .5) }), heroB({ x: 0, z: 0, hair: 'old', hairc: '#D8D8D8', glasses: true, eyes: [[0, 'look'], [3, 'flat'], [5, 'sad']], pose: (k) => k.pose({ armL: [12, 8], armR: [12, 8], lean: -3, head: -4 }) })],
  cam: [[0, [0, 2.1, 5.4], [0, 2.5, -.3]], [6.74, [0, 2.1, 4.6], [0, 2.5, -.3]]], f: [[0, 5.4], [6.74, 4.6]], range: 2 });

// 26. Relatividad: el tiempo no corre igual para todos (181.74–198.66)
P(181.74, 198.66, { amb: 'espacio', bg: '#05060E', fov: 40, atores: [],
  extra: (c) => { const E = new THREE.Mesh(new THREE.SphereGeometry(6, 80, 56), new THREE.MeshStandardMaterial({ map: earthTex(), roughness: .72 })); E.position.set(0, -7.4, -2); c.add(E); const atm = glowSprite('#7FB8FF', 15, .4); atm.position.copy(E.position); c.add(atm);
    const cA = relojS(1.2), cB = relojS(1.2); c.add(cA, cB); const rk = new THREE.Group(); const bd = new THREE.Mesh(new THREE.CylinderGeometry(.18, .18, 1.0, 20), std('#F4F0E4', { metalness: .3 })); bd.rotation.z = Math.PI / 2; rk.add(bd); const nose = new THREE.Mesh(new THREE.ConeGeometry(.18, .4, 20), std('#C9361F')); nose.rotation.z = -Math.PI / 2; nose.position.x = .7; rk.add(nose); const fl = glowSprite('#FFB060', .8, .9); fl.position.x = -.65; rk.add(fl); c.add(rk);
    const lA = cut(labelT(['RÁPIDO: MÁS LENTO'], { size: 64, w: 720, h: 130 }), 2.2, .4), lB = cut(labelT(['LEJOS: MÁS RÁPIDO'], { size: 64, w: 720, h: 130 }), 2.2, .4); c.add(lA, lB);
    return { update: (u, t, cam) => { E.rotation.y = u * .02; const k1 = smooth(8.8, 9.6, u), k2 = smooth(12.6, 13.4, u); rk.visible = k1 > 0; const rx = -5 + ((u - 8.8) * 1.6) % 10; rk.position.set(rx, .2, 0); cA.position.set(rx - .1, 1.05, 0); cB.position.set(1.8, 2.1 - (1 - k2) * 3, -.5); cA.visible = k1 > 0; cB.visible = k2 > 0; lA.position.set(rx, 1.95, 0); lA.visible = k1 > 0; lB.position.set(1.8, 2.95, -.5); lB.visible = k2 > 0; [cA, cB, lA, lB].forEach((m) => m.lookAt(cam.position)); cA.set((u - 8.8) * 4); cB.set((u - 12.6) * 22); } }; },
  cam: [[0, [0, 2.4, 9], [0, -1, -2]], [8.6, [0, 1.6, 6.5], [0, .6, -1]], [16.92, [-.4, 1.6, 6.0], [.4, 1.2, -1]]], f: [[0, 9], [16.92, 6]], range: 8, blur: 4, look: { bloom: .5, vig: .5 } });
// 27. GPS: relojes que se adelantan 38 µs al día (198.66–213.74)
P(198.66, 213.74, { amb: 'espacio', bg: '#05060E', fov: 40, atores: [],
  extra: (c) => { const E = new THREE.Mesh(new THREE.SphereGeometry(4, 80, 56), new THREE.MeshStandardMaterial({ map: earthTex(), roughness: .72 })); E.position.set(0, -4.6, -1); c.add(E); const atm = glowSprite('#7FB8FF', 10, .4); atm.position.copy(E.position); c.add(atm);
    const sats = []; for (let i = 0; i < 5; i++) { const p = probe(); p.scale.setScalar(.22); c.add(p); const g = glowSprite('#9FE0FF', .7, .7); c.add(g); const ck = relojS(.42); c.add(ck); sats.push({ p, g, ck, a: i * 1.25 - 2.4 }); }
    return { update: (u, t, cam) => { E.rotation.y = u * .03; sats.forEach(({ p, g, ck, a }, i) => { const ang = a + u * .05; p.position.set(Math.sin(ang) * 3.4, .9 + Math.cos(ang * 1.3) * .7 + (i % 2) * .5, Math.cos(ang) * 1.2); p.rotation.set(u * .2, u * .3 + i, 0); g.position.copy(p.position); g.material.opacity = .5 + .4 * Math.sin(u * 6 + i); ck.position.copy(p.position).add(new THREE.Vector3(0, .5, 0)); ck.lookAt(cam.position); ck.set(u * 3 + i * 7 + (u > 4.2 ? (u - 4.2) * 1.5 : 0)); }); } }; },
  cam: [[0, [0, 1.4, 7.0], [0, .6, -1]], [15.08, [.6, 1.2, 5.2], [0, .8, -1]]], f: [[0, 7], [15.08, 5.2]], range: 6, blur: 4, look: { bloom: .5 } });
// 28. Astronautas en la Estación Espacial vuelven milésimas más jóvenes (213.74–222.58)
P(213.74, 222.58, { amb: 'espacio', bg: '#05060E', fov: 36, atores: [H({ outfit: 'jaleco', x: 1.5, z: .4, y: -.5, eyes: [[0, 'happy'], [5, 'smug']], pose: (k, u) => { k.pose({ armL: [100, 30], armR: [80, 40], legL: [20, 30], legR: [-10, 20] }); k.root.rotation.z = Math.sin(u * .6) * .3; } })],
  extra: (c, s, [as]) => { const E = new THREE.Mesh(new THREE.SphereGeometry(6, 80, 56), new THREE.MeshStandardMaterial({ map: earthTex(), roughness: .72 })); E.position.set(0, -8, -3); c.add(E); const iss = new THREE.Group(); const m = std('#E8E8E0', { metalness: .4, roughness: .4 }); const tr = box(4.6, .1, .1, m, 0, 0, 0); iss.add(tr); const mod = new THREE.Mesh(new THREE.CylinderGeometry(.22, .22, 1.6, 20), m); mod.rotation.x = Math.PI / 2; iss.add(mod); const mod2 = new THREE.Mesh(new THREE.CylinderGeometry(.2, .2, 1.2, 20), m); mod2.rotation.z = Math.PI / 2; mod2.position.set(0, 0, .5); iss.add(mod2); for (const x of [-2.1, -1.4, 1.4, 2.1]) for (const y of [-1, 1]) { const pn = box(.55, 1.3, .02, std('#2F4A8A', { metalness: .6, roughness: .3 }), x, y * .75, 0); iss.add(pn); } iss.position.set(-.8, .9, -1.4); iss.rotation.set(.3, .4, .1); c.add(iss); const helmet = new THREE.Mesh(new THREE.SphereGeometry(.24, 24, 18), new THREE.MeshStandardMaterial({ color: '#CFEFFF', transparent: true, opacity: .25, roughness: .05, depthWrite: false })); c.add(helmet);
    return { update: (u) => { E.rotation.y = u * .03; iss.rotation.y = .4 + u * .02; as.root.position.y = -.5 + Math.sin(u * .9) * .08; const hp = new THREE.Vector3(); as.head.getWorldPosition(hp); helmet.position.copy(hp); } }; },
  cam: [[0, [0, 1.6, 6.0], [0, 1.2, -1]], [8.84, [.8, 1.5, 4.4], [.7, 1.3, -.6]]], f: [[0, 5.6], [8.84, 3.8]], range: 3, blur: 6, look: { bloom: .45 } });
// 29. Y nuestro cerebro también es raro (222.58–228.16)
P(222.58, 228.16, { amb: 'sala', ambo: { wall: '#7A3A44' }, fov: 30, atores: [heroB({ x: 0, z: -.6, eyes: [[0, 'look'], [1.5, 'lookl'], [2.6, 'look'], [3.4, 'wide']], pose: (k) => k.pose({ armL: [12, 8], armR: [40, 130] }) })],
  extra: (c) => { const b = bubble(c, ['¿?'], 1.0, { size: 160 }); b.position.set(.85, 2.25, -.6); const br = glowSprite('#FFB4D8', .7, .0); br.position.set(0, 1.62, -.55); c.add(br); return { update: (u, t, cam) => { pointer(b, cam); b.visible = u > .9; br.material.opacity = smooth(3.4, 4.2, u) * (.4 + .2 * Math.sin(u * 6)); } }; },
  cam: [[0, [-.3, 1.6, 3.0], [.2, 1.6, -.6]], [5.58, [.1, 1.6, 2.2], [.3, 1.7, -.6]]], f: [[0, 3.6], [5.58, 2.8]], range: 1.6 });
// 30. El reloj con segundero: cronostasis (228.16–248.9)
P(228.16, 248.9, { amb: 'sala', ambo: { wall: '#2F6E68', win: false }, fov: 30, atores: [heroB({ x: -.9, z: .4, eyes: [[0, 'look'], [9.0, 'lookl'], [9.35, 'look'], [9.7, 'lookl'], [10.05, 'look'], [10.4, 'lookl'], [11.2, 'wide'], [15.8, 'happy']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [12, 8], head: u > 9 && u < 11.2 ? Math.sin(u * 18) * 6 : 0 }) })],
  extra: (c) => { const ck = relojS(1.4); ck.position.set(.6, 2.4, -2.82); c.add(ck); const glow = glowSprite('#FFF0C8', 2.4, .25); glow.position.set(.6, 2.4, -2.7); c.add(glow);
    // tique a cada segundo; nos "saltos de olho" (u≈3.8 e 13.6) o primeiro segundo se estica
    const sec = (u) => { if (u > 3.6 && u < 5.8) return 4; if (u > 13.4 && u < 15.8) return 14; const s = Math.floor(u); return u >= 15.8 ? s - 2 : u >= 5.8 ? s - 1 : s; };
    return { update: (u) => ck.set(sec(u)) }; },
  cam: [[0, [-.4, 1.7, 3.2], [.2, 1.9, -1.8]], [3.5, [.4, 2.2, 1.0], [.6, 2.4, -2.8]], [6.4, [.4, 2.2, 1.0], [.6, 2.4, -2.8]], [8.8, [-.3, 1.6, 2.6], [-.6, 1.5, .2]], [12.6, [-.6, 1.6, 1.8], [-.8, 1.55, .3]], [13.4, [.5, 2.3, .4], [.6, 2.4, -2.8]], [16.4, [.5, 2.3, .4], [.6, 2.4, -2.8]], [20.74, [-.2, 1.8, 3.4], [0, 1.8, -1.6]]], f: [[0, 4.5], [3.5, 3.8], [8.8, 2.4], [12.6, 1.6], [13.4, 3.2], [16.4, 3.2], [20.74, 4.6]], range: 1.6 });

// 31. El niño cruza, viene un coche: pausa, lo apartas, listo (248.9–260.16)
P(248.9, 260.16, { amb: 'rua', ambo: { seed: 6 }, fov: 36, atores: [
  cast(2, { s: .62, x: -5, z: -2, eyes: [[0, 'happy'], [10.34, 'wide']], move: (u) => { if (u < 7.44) return [-5 + Math.max(0, u - 3) * .75, 0, -2]; if (u < 8.6) return [-1.67, 0, -2]; if (u < 9.8) return [lerp(-1.67, -5.0, smooth(8.6, 9.8, u)), .3 * Math.sin(smooth(8.6, 9.8, u) * Math.PI), -2]; return [-5.0, 0, -2]; }, pose: (k, u) => (u < 7.44 && u > 3 ? k.walk(u) : k.pose()) }),
  heroB({ x: -7.4, z: -1.0, eyes: [[0, 'look'], [5.8, 'wide'], [7.44, 'angry'], [10.34, 'happy']], move: (u) => { if (u < 7.44) return [-7.4, 0, -1.0]; if (u < 8.6) return [lerp(-7.4, -2.2, smooth(7.44, 8.5, u)), 0, lerp(-1.0, -1.6, smooth(7.44, 8.5, u))]; if (u < 9.8) return [lerp(-2.2, -5.5, smooth(8.6, 9.8, u)), 0, -1.6]; return [-5.5, 0, -1.6]; }, pose: (k, u) => (u > 7.44 && u < 9.8 ? k.walk(u * 1.4) : u > 10.34 ? k.cheer(u, 0, .6) : snapPose(7.3, k, u)) })],
  extra: (c, s, [kid, h]) => { const cr = car(c, -1.6, -30, '#C9361F', 1, false); const b = burbuja(c); return { update: (u, t, cam) => { cr.position.z = -5.5 + (cl(u, 7.44, 10.34) - 7.44) * 4.2; const q = h.root.position; b.at(q.x, 1.0, q.z, cam, u > 7.44 && u < 10.34 ? 1 : 0); } }; },
  cam: [[0, [-8.5, 1.8, 4.5], [-3, .8, -3]], [7.4, [-7.4, 1.8, 3.4], [-2.6, .8, -3]], [11.26, [-7.0, 2.2, 4.4], [-2.4, .8, -4]]], f: [[0, 7], [11.26, 7]], range: 4, lookFn: frozen(7.44, 10.34) });
// 32. Alguien se cae de una escalera: la sujetas (260.16–264.88)
P(260.16, 264.88, { amb: 'sala', ambo: { wall: '#9A4632' }, fov: 32, atores: [cast(1, { x: .5, z: -1.2, y: 1.0, eyes: [[0, 'wide']], pose: (k) => { k.pose({ armL: [150, 20], armR: [130, 40], legL: [30, 40], legR: [-20, 10] }); k.root.rotation.z = -.9; } }), heroB({ x: -1.4, z: -1.0, eyes: [[0, 'look'], [1.8, 'angry'], [3.6, 'happy']], move: (u) => [lerp(-1.4, .25, smooth(.6, 2.2, u)), 0, -1.0], pose: (k, u) => (u < 2.2 ? k.walk(u * 1.4) : k.pose({ armL: [150, 10], armR: [150, 10] })) })],
  extra: (c) => { const lad = new THREE.Group(); lad.add(box(.06, 2.6, .06, std('#C9A06A'), -.3, 1.3, 0)); lad.add(box(.06, 2.6, .06, std('#C9A06A'), .3, 1.3, 0)); for (let i = 0; i < 7; i++) lad.add(box(.6, .04, .05, std('#C9A06A'), 0, .3 + i * .35, 0)); lad.position.set(1.4, 0, -2.2); lad.rotation.x = -.15; c.add(lad); return {}; },
  cam: [[0, [0, 1.6, 4.0], [0, 1.2, -1.2]], [4.72, [.2, 1.5, 3.2], [.2, 1.3, -1.2]]], f: [[0, 4], [4.72, 3.2]], range: 2, look: FZ });
// 33. Un héroe secreto (264.88–268.96)
P(264.88, 268.96, { amb: 'rua', ambo: { seed: 7, night: true }, bg: '#141228', fov: 34, atores: [heroB({ x: 0, z: 0, y: 5, eyes: [[0, 'smug']], pose: (k) => k.pose({ armL: [30, 100], armR: [30, 100] }) })],
  extra: (c, s, [h]) => { c.add(box(5, 5, 4, std('#3B2F54'), 0, 2.5, -.5)); const cape = new THREE.Mesh(new THREE.PlaneGeometry(.9, 1.3, 8, 8), std('#C9361F', { side: THREE.DoubleSide })); c.add(cape); const pos = cape.geometry.attributes.position, b0 = pos.array.slice();
    return { update: (u, t, cam) => { cape.position.set(0, 6.0, -.2); cape.lookAt(cam.position.x, 6.0, cam.position.z); for (let i = 0; i < pos.count; i++) { const y = b0[i * 3 + 1]; const w = (.65 - y) / 1.3; pos.array[i * 3 + 2] = Math.sin(u * 5 + b0[i * 3] * 4 + y * 3) * .08 * w - w * .35; } pos.needsUpdate = true; } }; },
  cam: [[0, [1.6, 5.6, 3.4], [0, 5.9, 0]], [4.08, [2.2, 5.2, 4.2], [0, 6.0, 0]]], f: [[0, 3.7], [4.08, 4.6]], range: 2.4, blur: 9 });
// 34. La tentación: el examen, los mensajes, cualquier lugar (268.96–281.14)
P(268.96, 281.14, { amb: 'aula', fov: 34, atores: [
  ...[[-2.2, -.6, 0], [-.7, -.6, 3], [.8, -.6, 5], [2.3, -.6, 6], [-2.2, .9, 7], [.8, .9, 4]].map(([x, z, i]) => cast(i, { x, z, s: .9, eyes: [[0, 'down']], pose: (k) => k.pose({ armL: [40, 70], armR: [40, 70], head: -6 }) })),
  H({ outfit: 'terno', glasses: true, x: 2.6, z: -2.6, eyes: [[0, 'look']] }),
  heroB({ x: 1.0, z: -2.4, eyes: [[0, 'smug'], [5.4, 'look'], [7.4, 'smug']], move: (u) => [lerp(-3.6, 1.5, smooth(0, 2.4, u)), 0, -2.4], pose: (k, u) => (u < 2.4 ? k.walk(u) : k.pose({ armL: [12, 8], armR: [60, 80] })) })],
  extra: (c, s, act) => { const h = act[act.length - 1]; act.slice(0, 6).forEach((k) => { const p = k.root.position; c.add(box(.9, .06, .55, std('#C9A06A'), p.x, .72, p.z + .35)); }); c.add(box(1.4, .08, .7, std('#8E6242'), 1.8, .9, -2.2)); const pap = cut(labelT(['RESPUESTAS', '1) 4   2) x = ±3'], { bg: '#FBF7EC', size: 44, w: 512, h: 260 }), .55, .28); pap.rotation.x = -Math.PI / 2.6; pap.position.set(1.8, .97, -2.1); c.add(pap);
    const phones = act.slice(0, 6).map((k) => { const g = glowSprite('#9FD8FF', .5, 0); const p = k.root.position; g.position.set(p.x + .2, 1.05, p.z + .35); c.add(g); const ph = box(.07, .01, .13, std('#15151C', { emissive: '#4F88C8', emissiveIntensity: 1.5 }), p.x + .2, .76, p.z + .3); c.add(ph); return g; });
    const b = burbuja(c); return { update: (u, t, cam) => { const q = h.root.position; b.at(q.x, 1.0, q.z, cam); phones.forEach((g) => { g.material.opacity = smooth(5.4, 6.0, u) * .6; }); } }; },
  cam: [[0, [0, 2.6, 5.0], [0, 1.0, -1.2]], [2.6, [1.4, 2.8, 2.6], [1.4, 1.0, -1.8]], [5.2, [2.6, 2.0, -.4], [1.8, 1.0, -2.2]], [5.6, [-.2, 2.0, 3.6], [-.4, .8, 0]], [12.18, [.4, 2.6, 5.4], [0, 1, -1]]], f: [[0, 5], [5.2, 1.4], [5.6, 3.6], [12.18, 5.4]], range: 2.4, look: { sat: .55, tint: '#D8E4FF' } });
// 35. Si nadie te ve… ¿seguirías haciendo lo correcto? (281.14–287.4)
P(281.14, 287.4, { amb: 'noite', bg: '#1A1424', fov: 28, atores: [heroB({ x: 0, z: 0, eyes: [[0, 'down'], [3.94, 'sad'], [5.3, 'look']] })],
  extra: (c) => { const b = bubble(c, ['¿?'], .8, { size: 160 }); b.position.set(.6, 1.95, 0); const sp = new THREE.SpotLight('#FFE8C8', 30, 8, .45, .6); sp.position.set(0, 4, 1); sp.target.position.set(0, 1, 0); c.add(sp, sp.target); return { update: (u, t, cam) => { pointer(b, cam); b.visible = u > 2.4; } }; },
  cam: [[0, [0, 1.6, 3.0], [0, 1.4, 0]], [6.26, [0, 1.6, 2.1], [.15, 1.55, 0]]], f: [[0, 3], [6.26, 2.1]], range: 1.2, look: { exposure: .9, vig: .6 } });
// 36. La soledad: nadie habla, nadie se ríe (287.4–298.8)
P(287.4, 298.8, { amb: 'plaza', ambo: { seed: 4 }, fov: 34, atores: [heroB({ x: 0, z: 0, eyes: [[0, 'look'], [1.6, 'sad'], [7.4, 'down']], pose: (k, u) => k.pose({ armL: [12, 8], armR: [12, 8], head: -5 }) })],
  extra: (c) => { const R = rng(13), sp = []; for (let i = 0; i < 160; i++) { const a = R() * Math.PI * 2, d = 2.2 + R() * 9; sp.push([Math.cos(a) * d, Math.sin(a) * d - 2]); } crowd(c, sp, { jump: 0, raised: .1, seed: 6 }); const b = burbuja(c); return { update: (u, t, cam) => b.at(0, 1.0, 0, cam) }; },
  cam: [[0, [0, 1.5, 3.4], [0, 1.2, 0]], [11.4, [1.0, 7.5, 8.5], [0, .6, -1]]], f: [[0, 3.4], [11.4, 11]], range: 4, look: { sat: .5, tint: '#D8E4FF' } });
// 37. Michel Siffre, 1962: dos meses en una cueva (298.8–316.38)
P(298.8, 316.38, { amb: 'cueva', bg: '#0E0A08', fov: 32, atores: [H({ outfit: 'jaleco', glasses: true, hair: 'old', hairc: '#2a1b18', x: -.4, z: 0, eyes: [[0, 'look'], [5.5, 'down'], [11.5, 'look'], [14.26, 'wide']], pose: (k, u) => (u > 5.5 && u < 11.5 ? k.pose({ armL: [40, 70], armR: [40, 80], head: -6 }) : k.pose()) })],
  extra: (c) => { const tent = new THREE.Mesh(new THREE.ConeGeometry(1.2, 1.6, 4), std('#C9A06A')); tent.position.set(-2.2, .8, -1.6); tent.rotation.y = .5; c.add(tent); c.add(box(1.0, .06, .6, std('#8E6242'), .5, .75, -.1)); c.add(box(.06, .75, .06, std('#6B4A33'), .05, .37, -.1)); c.add(box(.06, .75, .06, std('#6B4A33'), .95, .37, -.1)); const lan = glowSprite('#FFB060', 1.2, .8); lan.position.set(.8, 1.0, -.1); c.add(lan); c.add(box(.12, .18, .12, std('#E9B44C', { emissive: '#FFA040', emissiveIntensity: 2 }), .8, .87, -.1)); c.add(box(.4, .02, .3, std('#F4F0E4'), .35, .79, -.05));
    const cal = cut(labelT(['¿20 DE', 'AGOSTO?'], { bg: '#FBF7EC', fg: '#2A2A34', size: 70, w: 420, h: 300 }), .8, .57), real = cut(labelT(['14 DE', 'SEPTIEMBRE'], { bg: '#C9361F', fg: '#FFF4DE', size: 70, w: 420, h: 300 }), .8, .57); cal.position.set(-1.0, 2.0, .1); real.position.set(.25, 2.0, .1); c.add(cal, real);
    const sun = glowSprite('#FFF0C0', 6, 0); sun.position.set(2.5, 3, -6); c.add(sun);
    return { update: (u, t, cam) => { [cal, real].forEach((m) => pointer(m, cam)); cal.visible = u > 11.5; real.visible = u > 14.26; sun.material.opacity = smooth(10.5, 11.5, u) * .7; } }; },
  cam: [[0, [0, 2.0, 5.6], [-.3, 1.9, -.5]], [9.6, [.4, 1.9, 4.2], [0, 1.8, -.3]], [11.2, [.3, 1.6, 2.4], [0, 1.25, 0]], [17.58, [-.3, 1.8, 3.4], [-.4, 1.7, 0]]], f: [[0, 5.6], [9.6, 4.2], [11.2, 2.4], [17.58, 3.4]], range: 2, look: { exposure: 1.1 } });
// 38. Días, semanas, años en un mundo congelado (316.38–326.34)
const viejo = (u) => u > 7.38;
P(316.38, 326.34, { amb: 'rua', ambo: { seed: 8, night: true }, bg: '#141228', fov: 34, atores: [
  heroB({ x: 0, z: 0, eyes: [[0, 'look'], [2, 'sad']], move: (u) => [0, viejo(u) ? -50 : 0, -u * .35], pose: (k, u) => k.walk(u, .7, .7) }),
  heroB({ x: 0, z: 0, hair: 'old', hairc: '#D8D8D8', eyes: [[0, 'sad']], move: (u) => [0, viejo(u) ? 0 : -50, -u * .35], pose: (k, u) => { k.walk(u, .5, .5); k.body.rotation.z = .06; } }),
  walker(1, 2.4, -4, -.5, -1), walker(3, -2.4, -6, .5, -1), walker(8, 1.8, -8, -.5, -1)],
  extra: (c, s, [h1, h2]) => { const W = [['DÍAS', 5.44], ['SEMANAS', 6.32], ['AÑOS', 7.38]].map(([t, a], i) => { const m = cut(labelT([t], { bg: '#2A2A34', fg: '#F2C14E', size: 80, w: 512, h: 150 }), 1.0, .29); c.add(m); return { m, a, i }; }); const b = burbuja(c);
    return { update: (u, t, cam) => { const z = -u * .35; b.at(0, 1.0, z, cam); W.forEach(({ m, a, i }) => { m.visible = u > a; m.position.set(-1.6 + i * 1.6, 2.5 - (i % 2) * .3, z); pointer(m, cam); m.scale.setScalar(.7 + .3 * smooth(a, a + .25, u)); }); } }; },
  cam: [[0, [0, 1.6, 4.2], [0, 1.4, -1]], [9.96, [0, 1.7, .4], [0, 1.4, -4]]], f: [[0, 4.2], [9.96, 3.9]], range: 2.4, look: { sat: .5, tint: '#D0DCFF' } });
// 39. Una pausa para dormir diez minutos más (326.34–334.48)
P(326.34, 334.48, { amb: 'quarto', ambo: {}, fov: 30, atores: [heroB({ x: -1.85, z: -1.4, y: .98, eyes: [[0, 'flat'], [5.24, 'happy'], [6.2, 'shut']], pose: (k, u) => { k.pose({ armR: u > 4.8 && u < 5.6 ? [125, 75] : [12, 8] }); k.root.rotation.z = -Math.PI / 2; k.root.position.set(-2.5, .98, -1.5); } })],
  extra: (c) => { const ck = clock(.32, 7); ck.position.set(-.1, .78, -2.2); c.add(ck); c.add(box(.6, .5, .5, std('#8E6242'), -.1, .25, -2.4)); const lines = cut(canvasTex(256, 128, (x) => { x.clearRect(0, 0, 256, 128); x.strokeStyle = '#E2483A'; x.lineWidth = 10; x.lineCap = 'round'; for (const s of [-1, 1]) for (let i = 0; i < 3; i++) { x.beginPath(); x.moveTo(128 + s * (50 + i * 22), 40 + i * 25); x.lineTo(128 + s * (80 + i * 22), 30 + i * 25); x.stroke(); } }), .6, .3); lines.position.set(-.1, .95, -2.18); c.add(lines);
    const zz = [0, 1, 2].map((i) => { const m = cut(labelT(['Z'], { bg: 'rgba(0,0,0,0)', fg: '#F4F0E4', size: 160, w: 200, h: 200 }), .22, .22); c.add(m); return m; });
    return { update: (u, t, cam) => { const v = cl(u, 5.24); ck.position.x = -.1 + Math.sin(v * 50) * .015; ck.set(7 + v / 3600); lines.visible = true; zz.forEach((m, i) => { const p = ((u - 5.6) * .4 + i / 3) % 1; m.visible = u > 6.2; m.position.set(-1.6 + p * .4, 1.3 + p * .8, -1.6); m.material.opacity = 1 - p; pointer(m, cam); }); } }; },
  cam: [[0, [.2, 2.4, 1.4], [-1.6, 1.0, -1.5]], [8.14, [-.2, 2.2, 1.1], [-1.8, 1.0, -1.5]]], f: [[0, 2.6], [8.14, 2.3]], range: 1.2, lookFn: frozen(5.24) });
// 40. Una pausa para pensar bien lo que vas a decir (334.48–337.3)
P(334.48, 337.3, { amb: 'plaza', ambo: { seed: 4 }, fov: 32, atores: [cast(3, { x: .8, z: -.5, eyes: [[0, 'look']], pose: (k) => k.pose({ armL: [12, 8], armR: [55, 40] }) }), heroB({ x: -.6, z: -.3, eyes: [[0, 'down']], pose: (k) => k.pose({ armL: [12, 8], armR: [40, 130] }) })],
  extra: (c) => { const b = bubble(c, ['Mmm…'], 1.0, { size: 110 }); b.position.set(-1.3, 2.2, -.3); const g = globo('¿Y BIEN?', .8); g.position.set(1.4, 2.05, -.5); c.add(g); return { update: (u, t, cam) => { pointer(b, cam); pointer(g, cam); } }; },
  cam: [[0, [0, 1.6, 3.6], [0, 1.5, -.4]], [2.82, [0, 1.6, 3.2], [0, 1.55, -.4]]], f: [[0, 3.6], [2.82, 3.2]], range: 1.6, look: { sat: .5, tint: '#D8E4FF' } });
// 41. Un atardecer congelado, todo el tiempo que quieras (337.3–344.86)
P(337.3, 344.86, { amb: 'sabana', fov: 34, atores: [heroB({ x: 0, z: 1, eyes: [[0, 'happy']] })],
  extra: (c) => { const sun = new THREE.Mesh(new THREE.CircleGeometry(9, 48), new THREE.MeshBasicMaterial({ color: '#FFC870', fog: false })); sun.position.set(6, 3, -120); c.add(sun); const g = glowSprite('#FFB060', 60, .7); g.material.fog = false; g.position.set(6, 4, -119); c.add(g); const b = burbuja(c); return { update: (u, t, cam) => b.at(0, 1.0, 1, cam) }; },
  cam: [[0, [-1.4, 1.2, 4.6], [1, 2.0, -20]], [7.56, [-1.0, 1.0, 3.6], [1.4, 2.4, -20]]], f: [[0, 3.8], [7.56, 2.8]], range: 3, look: { sat: .85, bloom: .6, tint: '#FFE8D8' } });
// 42. Lo mejor es compartirlo: risas, conversaciones, abrazos (344.86–358.1)
P(344.86, 358.1, { amb: 'parque', ambo: { dusk: true }, bg: '#E8A880', fov: 32, atores: [
  heroB({ x: 0, z: 0, eyes: [[0, 'look'], [2.5, 'happy']], pose: (k, u) => (u > 9.2 ? k.pose({ armL: [100, 30], armR: [100, 30] }) : u > 7 ? k.cheer(u, 0, .7) : k.pose()) }),
  cast(0, { x: -1.2, z: -.4, eyes: [[0, 'happy']], pose: (k, u) => (u > 9.2 ? k.pose({ armL: [12, 8], armR: [100, 30] }) : k.cheer(u, 1, .5)) }), cast(2, { x: 1.2, z: -.4, eyes: [[0, 'happy']], pose: (k, u) => (u > 9.2 ? k.pose({ armL: [100, 30], armR: [12, 8] }) : k.cheer(u, 2, .5)) }),
  cast(5, { x: -2.2, z: -1.4, eyes: [[0, 'happy']], talk: [[0, 13]] }), cast(3, { x: 2.3, z: -1.5, eyes: [[0, 'smug']], talk: [[2, 8]] })],
  cam: [[0, [0, 1.5, 6], [0, 1.1, -.6]], [9, [.6, 1.5, 4.2], [0, 1.15, -.5]], [13.24, [0, 1.5, 3.6], [0, 1.2, -.4]]], f: [[0, 6], [9, 4.2], [13.24, 3.6]], range: 2.4 });
// 43. Chasqueas los dedos una última vez (358.1–361.18)
P(358.1, 361.18, { amb: 'parque', fov: 30, atores: [heroB({ x: 0, z: 0, eyes: [[0, 'look'], [1.4, 'smug']], pose: (k, u) => snapPose(1.22, k, u) }), ...parqueGente(-1, 1.4)],
  cam: [[0, [.4, 1.6, 2.6], [0, 1.4, 0]], [3.08, [.2, 1.6, 3.4], [0, 1.3, 0]]], f: [[0, 2.6], [3.08, 3.4]], range: 1.6, lookFn: (u) => ({ ...(u < 1.4 ? FZ : {}), flash: flashAt(u, 1.4) }) });
// 44. El pájaro vuelve a volar (361.18–363.08)
P(361.18, 363.08, { amb: 'parque', fov: 34, atores: [{ tipo: 'paloma', x: 0, z: -1, y: 2.2, s: 1.4, move: (u) => [u * 1.6, 2.2 + u * 1.0, -1 - u * .8], pose: (k, u) => { k.card.rotation.z = .25 + Math.sin(u * 30) * .08; } }],
  cam: [[0, [-2.0, 1.2, 2.6], [0, 2.4, -1]], [1.9, [-1.6, 1.3, 2.6], [1.8, 3.4, -2]]], f: [[0, 3.4]], range: 2 });
// 45. El perro termina su ladrido (363.08–365.02)
P(363.08, 365.02, { amb: 'rua', ambo: { seed: 1 }, fov: 30, atores: [{ tipo: 'perro', x: 0, z: -1, eyes: [[0, 'happy']], talk: [[0, 1.9]], move: (u) => [0, Math.max(0, .18 - u * .4), -1] }],
  extra: (c) => { const g = globo('¡GUAU!', .8); g.position.set(.5, 1.05, -1); c.add(g); return { update: (u, t, cam) => { pointer(g, cam); g.scale.setScalar(1 + Math.sin(u * 20) * .04); } }; },
  cam: [[0, [1.0, .95, 2.0], [0, .75, -1]], [1.94, [1.2, .95, 1.8], [0, .8, -1]]], f: [[0, 2.4]], range: 1.3 });
// 46. Tu mamá termina su cucharada de sopa (365.02–367.56)
P(365.02, 367.56, { amb: 'sala', fov: 30, atores: [cast(0, { x: 0, z: -1.2, eyes: [[0, 'look'], [1.2, 'happy']], pose: (k, u) => k.pose({ armR: [lerp(95, 120, smooth(0, .9, u)), lerp(125, 140, smooth(0, .9, u))], armL: [12, 8] }) })],
  extra: (c, s, [mom]) => { c.add(box(2.2, .08, 1.0, std('#D8C8A8'), 0, .85, -.4)); c.add(box(2.3, .8, 1.1, std('#8E6242'), 0, .42, -.4)); const bowl = new THREE.Mesh(new THREE.SphereGeometry(.16, 20, 10, 0, 7, Math.PI / 2, Math.PI / 2), std('#F4F0E4', { side: THREE.DoubleSide })); bowl.position.set(0, 1.05, -.3); c.add(bowl); const sp = box(.03, .02, .26, std('#C8CCD4', { metalness: .7, roughness: .3 }), .22, 1.42, -.95); sp.rotation.x = .5; c.add(sp); const hp = new THREE.Vector3(); return { update: () => { mom.arms.R.hand.getWorldPosition(hp); sp.position.set(hp.x, hp.y + .04, hp.z + .12); } }; },
  cam: [[0, [1.1, 1.5, 1.5], [0, 1.4, -1]], [2.54, [.9, 1.55, 1.3], [0, 1.45, -1]]], f: [[0, 2.0]], range: 1.2 });
// 47. Nadie sabe que fuiste el dueño del tiempo (367.56–371.9)
P(367.56, 371.9, { amb: 'plaza', ambo: { seed: 4 }, fov: 32, atores: [heroB({ x: 0, z: 0, eyes: [[0, 'look'], [1.2, 'smug']] }), walker(1, 3, -2, -.6), walker(0, -3.2, -3.2, .55), walker(6, 2.6, -4.6, -.5), walker(3, -2.6, -1.4, .5)],
  cam: [[0, [0, 1.5, 4.6], [0, 1.2, -.5]], [4.34, [0, 1.6, 2.6], [0, 1.45, 0]]], f: [[0, 4.6], [4.34, 2.6]], range: 2 });
// 48. ¿Y tú? ¿Para qué lo pausarías? (371.9–fim)
P(371.9, 999, { amb: 'noite', bg: '#1A1424', fov: 30, atores: [heroB({ x: 0, z: 0, eyes: [[0, 'look'], [.9, 'happy']], pose: (k, u) => k.pose({ armL: [12, 8], armR: u > .9 ? [60, 110] : [12, 8] }) })],
  extra: (c) => { const p = cut(pauseT(), 1.6, 1.6); p.position.set(0, 1.5, -1.6); c.add(p); const g = glowSprite('#FFE0A8', 4, .35); g.position.set(0, 1.5, -1.7); c.add(g); return { update: (u, t, cam) => { const k = smooth(.2, .9, u); p.scale.setScalar(.6 + .4 * k); p.material.opacity = k; g.material.opacity = .35 * k; } }; },
  cam: [[0, [0, 1.5, 3.6], [0, 1.4, -.6]], [4, [0, 1.5, 2.8], [0, 1.45, -.6]]], f: [[0, 3.6], [4, 2.8]], range: 1.4 });
