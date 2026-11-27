// Ambientes e peças do vídeo "¿y si tu crush se mudara a la casa de al lado?".
import * as THREE from 'three';
import { AMBS, box, std, cut, glowSprite, canvasTex, lightPanel, rng, lerp, smooth } from './mundo.js';
import { sky, skyline, tree } from './motor/kit.js';
import { stars, brickTex } from './motor/kit2.js';
import { sunLight, woodFloor } from './comum.js';
import { labelT } from './amb2.js';

const chao = (c, col, w = 200, l = 200) => { const g = new THREE.Mesh(new THREE.PlaneGeometry(w, l), std(col, { roughness: 1 })); g.rotation.x = -Math.PI / 2; g.receiveShadow = true; c.add(g); return g; };

// posição no mundo de um ponto local (lx, ly, lz) de um grupo em P girado ry
export const wpos = (P, ry, l) => { const v = new THREE.Vector3(...l).applyAxisAngle(new THREE.Vector3(0, 1, 0), ry); return [P[0] + v.x, P[1] + v.y, P[2] + v.z]; };

// cartaz de papel escrito a rotulador
export const cartelTex = (lines, o = {}) => { const { w = 512, h = 360, size = 92, col = '#1E2A55' } = o; const L = Array.isArray(lines) ? lines : [lines]; return canvasTex(w, h, (x) => { x.fillStyle = '#FBF8EE'; x.fillRect(0, 0, w, h); x.strokeStyle = '#D8D0BC'; x.lineWidth = 4; x.strokeRect(6, 6, w - 12, h - 12); x.fillStyle = col; x.font = `700 ${size}px Caveat`; x.textAlign = 'center'; x.textBaseline = 'middle'; L.forEach((t, i) => x.fillText(t, w / 2, h / 2 + (i - (L.length - 1) / 2) * size * 1.05)); }); };
export function cartel(lines, w = .9, o = {}) { const t = cartelTex(lines, o); const m = new THREE.Mesh(new THREE.PlaneGeometry(w, w * (o.h || 360) / (o.w || 512)), new THREE.MeshStandardMaterial({ map: t, roughness: .9, emissive: '#FFFFFF', emissiveMap: t, emissiveIntensity: o.glow ?? .25 })); m.renderOrder = 3; return m; }

/** Fachada com janela (frente para +z). Interior iluminado atrás. Devolve grupo com userData { persiana(k), luz(on), cortina }.
 *  o: { w, h, col, win:[cx, cy, ww, wh], night, inner, lit } */
export function fachada(o = {}) {
  const { w = 10, h = 7, col = '#E8C8A0', win = [0, 2.6, 2.0, 1.8], night = false, inner = '#F2D49A', lit = night, brick = false, sill = .9 } = o; const g = new THREE.Group();
  const [cx, cy, ww, wh] = win; const mat = () => (brick ? new THREE.MeshStandardMaterial({ map: brickTex(col, 3, 3), roughness: .95 }) : std(col, { roughness: .9 }));
  const L = cx - ww / 2 + w / 2, R = w / 2 - (cx + ww / 2), B = cy - wh / 2, T = h - (cy + wh / 2);
  g.add(box(L, h, .3, mat(), -w / 2 + L / 2, h / 2, 0)); g.add(box(R, h, .3, mat(), w / 2 - R / 2, h / 2, 0));
  g.add(box(ww, B, .3, mat(), cx, B / 2, 0)); g.add(box(ww, T, .3, mat(), cx, h - T / 2, 0));
  // moldura, peitoril, travessa
  const fr = std('#F4F0E4'); for (const [x, y, bw, bh] of [[cx - ww / 2, cy, .1, wh + .1], [cx + ww / 2, cy, .1, wh + .1], [cx, cy + wh / 2, ww + .2, .1], [cx, cy, .05, wh]]) g.add(box(bw, bh, .36, fr, x, y, 0));
  g.add(box(ww + .4, .1, .5, fr, cx, cy - wh / 2 - .03, .12));
  // interior: caixa com fundo iluminado
  const D = 3.2; const im = std(inner, { roughness: .9 }); g.add(box(ww + 3, h, .2, im, cx, h / 2, -D)); g.add(box(.2, h, D, im, cx - ww / 2 - 1.4, h / 2, -D / 2)); g.add(box(.2, h, D, im, cx + ww / 2 + 1.4, h / 2, -D / 2));
  g.add(box(ww + 3, .2, D, std('#8A6A4A'), cx, B - sill, -D / 2)); g.add(box(ww + 3, .2, D, im, cx, cy + wh / 2 + .5, -D / 2));
  const lamp = new THREE.PointLight('#FFC880', lit ? 9 : 2.5, 7, 1.4); lamp.position.set(cx, cy + .6, -1.2); g.add(lamp);
  const back = lightPanel(ww + 2.6, h * .6, '#FFD9A0', lit ? .35 : .08); back.position.set(cx, cy, -D + .12); g.add(back);
  // persiana (desce de cima)
  const per = box(ww - .04, wh, .06, std('#E8E2D2', { roughness: .8 }), cx, cy, .1); per.castShadow = false; g.add(per); const pl = []; for (let i = 0; i < 10; i++) { const s = box(ww - .04, .015, .07, '#B8B0A0', cx, 0, .11, false); g.add(s); pl.push([s, i]); }
  const setP = (k) => { const hh = Math.max(.001, wh * k); per.scale.y = hh / wh; per.position.y = cy + wh / 2 - hh / 2; per.visible = k > .01; pl.forEach(([s, i]) => { const y = cy + wh / 2 - (i + .5) * wh / 10; s.visible = k > .01 && y > cy + wh / 2 - hh; s.position.y = y; }); };
  setP(0);
  g.userData = { persiana: setP, luz: (on) => { lamp.intensity = on ? 9 : 2.5; back.material.emissiveIntensity = on ? .35 : .08; }, win, lamp };
  g.children.forEach((m) => { m.castShadow = m.castShadow ?? true; m.receiveShadow = true; });
  return g;
}

// casa de bairro (frente para +z): corpo, telhado, porta, janelas
export function casa(o = {}) { const { col = '#E8C8A0', roof = '#A8442E', w = 7, h = 5.6, d = 7, door = '#3E6A5A', night = false } = o; const g = new THREE.Group();
  g.add(box(w, h, d, std(col, { roughness: .9 }), 0, h / 2, -d / 2)); const rf = new THREE.Mesh(new THREE.CylinderGeometry(.01, w * .62, 2.4, 4, 1), std(roof, { roughness: .8 })); rf.rotation.y = Math.PI / 4; rf.scale.set(1, 1, d / w); rf.position.set(0, h + 1.2, -d / 2); rf.castShadow = true; g.add(rf);
  g.add(box(1.1, 2.1, .1, std(door), 0, 1.05, .02)); g.add(box(.08, .08, .08, '#E9B44C', .38, 1.0, .1));
  const wm = () => new THREE.MeshStandardMaterial({ color: '#1A2233', emissive: night ? '#FFC880' : '#000', emissiveIntensity: night ? .7 : 0, roughness: .1, metalness: .3 });
  for (const [x, y] of [[-2.2, 1.6], [2.2, 1.6], [-2.2, 4.1], [2.2, 4.1]]) { g.add(box(1.3, 1.2, .06, wm(), x, y, .03)); g.add(box(1.5, .1, .2, '#F4F0E4', x, y - .65, .08)); }
  g.add(box(2.0, .2, 1.2, std('#B8AC9D'), 0, .1, .6)); g.children.forEach((m) => { m.castShadow = true; m.receiveShadow = true; }); return g; }
// sebe, valla, roseira, caseta, balão, caminhão
export function seto(len = 4) { const g = new THREE.Group(); const R = rng(len * 7); for (let i = 0; i < len * 3; i++) { const s = new THREE.Mesh(new THREE.SphereGeometry(.42 + R() * .12, 12, 10), std(['#3E6A34', '#4F7A44', '#5A8A48'][i % 3], { roughness: 1 })); s.position.set(-len / 2 + i / 3 + .15, .5 + R() * .25, (R() - .5) * .2); s.castShadow = true; g.add(s); } return g; }
export function valla(len = 8, col = '#E8E2D2') { const g = new THREE.Group(); for (let i = 0; i <= len * 4; i++) g.add(box(.1, 1.3, .05, std(col), -len / 2 + i * .25, .65, 0)); for (const y of [.35, 1.05]) g.add(box(len, .08, .06, std(col), 0, y, -.04)); g.children.forEach((m) => (m.castShadow = true)); return g; }
export function rosal() { const g = new THREE.Group(); const R = rng(4); for (let i = 0; i < 7; i++) { const s = new THREE.Mesh(new THREE.SphereGeometry(.35, 12, 10), std('#3E6A34', { roughness: 1 })); s.position.set((R() - .5) * 1.4, .35 + R() * .3, (R() - .5) * .5); g.add(s); } for (let i = 0; i < 16; i++) { const r = new THREE.Mesh(new THREE.SphereGeometry(.08, 10, 8), std(['#D8344A', '#E8667F'][i % 2], { roughness: .5 })); r.position.set((R() - .5) * 1.5, .55 + R() * .4, (R() - .5) * .6 + .2); g.add(r); } g.children.forEach((m) => (m.castShadow = true)); return g; }
export function caseta() { const g = new THREE.Group(); g.add(box(2.2, 2.0, 1.8, std('#8A6A4A', { roughness: .9 }), 0, 1.0, 0)); const rf = box(2.6, .12, 2.3, std('#5A3E2A'), 0, 2.12, 0); g.add(rf); g.add(box(.8, 1.5, .05, std('#5A3E2A'), 0, .75, .92)); g.children.forEach((m) => { m.castShadow = true; m.receiveShadow = true; }); return g; }
export function balon() { const t = canvasTex(256, 128, (x) => { x.fillStyle = '#F4F0E4'; x.fillRect(0, 0, 256, 128); x.fillStyle = '#2A2A34'; for (let i = 0; i < 6; i++) { x.beginPath(); x.arc(20 + i * 44, 30 + (i % 2) * 60, 16, 0, 7); x.fill(); } }); const m = new THREE.Mesh(new THREE.SphereGeometry(.16, 20, 14), new THREE.MeshStandardMaterial({ map: t, roughness: .5 })); m.castShadow = true; return m; }
export function camion() { const g = new THREE.Group(); g.add(box(2.4, 2.8, 5.5, std('#F4F0E4', { roughness: .6 }), 0, 1.9, -1)); g.add(box(2.3, 2.0, 1.8, std('#4A86C7', { roughness: .5 }), 0, 1.5, 2.7)); g.add(box(2.1, .8, .05, std('#1A2233', { roughness: .1, metalness: .4 }), 0, 2.0, 3.62)); const lg = cut(labelT(['MUDANZAS'], { bg: '#4A86C7', fg: '#FFFFFF', size: 70, w: 512, h: 120 }), 3.2, .75); lg.rotation.y = Math.PI / 2; lg.position.set(1.22, 2.3, -1); g.add(lg); for (const z of [-2.6, .4, 2.7]) for (const s of [-1, 1]) { const w = new THREE.Mesh(new THREE.CylinderGeometry(.45, .45, .3, 20), std('#222')); w.rotation.z = Math.PI / 2; w.position.set(s * 1.15, .45, z); g.add(w); } g.children.forEach((m) => (m.castShadow = true)); return g; }
export function caja(s = .6) { const g = box(s, s * .8, s, std('#C9A06A', { roughness: .9 }), 0, s * .4, 0); g.add(box(s * 1.01, .06, .15, std('#E8D8A8'), 0, s * .4, 0)); return g; }
export function sofa(col = '#C9361F') { const g = new THREE.Group(); g.add(box(2.0, .45, .9, std(col), 0, .4, 0)); g.add(box(2.0, .7, .2, std(col), 0, .8, -.4)); for (const s of [-1, 1]) g.add(box(.2, .55, .9, std(col), s * .95, .55, 0)); g.children.forEach((m) => (m.castShadow = true)); return g; }
export function flamenco() { const g = new THREE.Group(); g.add(box(.04, 1.4, .04, std('#E8667F'), 0, .7, 0)); const b = new THREE.Mesh(new THREE.SphereGeometry(.28, 16, 12), new THREE.MeshStandardMaterial({ color: '#FF8AA8', emissive: '#FF6A90', emissiveIntensity: .5 })); b.scale.set(1.3, .8, .8); b.position.y = 1.5; g.add(b); const n = new THREE.Mesh(new THREE.TorusGeometry(.18, .04, 8, 16, Math.PI * 1.2), std('#FF8AA8')); n.position.set(.25, 1.75, 0); g.add(n); const gs = glowSprite('#FF9AB8', 1.2, .4); gs.position.y = 1.5; g.add(gs); return g; }
// póster do cavalo com asas
export function pegaso(w = .9, h = 1.2) { const t = canvasTex(360, 480, (x) => { x.fillStyle = '#BFE0F2'; x.fillRect(0, 0, 360, 480); x.fillStyle = '#FFFFFF'; x.beginPath(); x.ellipse(180, 270, 95, 55, 0, 0, 7); x.fill(); x.beginPath(); x.ellipse(270, 200, 30, 50, .5, 0, 7); x.fill(); for (const lx of [120, 150, 210, 240]) x.fillRect(lx, 300, 16, 100); x.fillStyle = '#F2C1E0'; x.beginPath(); x.moveTo(170, 240); x.quadraticCurveTo(80, 90, 40, 140); x.quadraticCurveTo(100, 180, 170, 260); x.fill(); x.fillStyle = '#E9B44C'; x.beginPath(); x.moveTo(280, 160); x.lineTo(300, 100); x.lineTo(295, 165); x.fill(); x.fillStyle = '#7F6BC4'; x.font = '700 46px Caveat'; x.textAlign = 'center'; x.fillText('¡VUELA ALTO!', 180, 455); }); const g = new THREE.Group(); g.add(box(w + .08, h + .08, .04, '#2A1E18', 0, 0, 0)); const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), std('#fff')); m.material.map = t; m.position.z = .025; g.add(m); return g; }
export function posterBanda(w = .9, h = 1.2) { const t = canvasTex(360, 480, (x) => { x.fillStyle = '#1E1A30'; x.fillRect(0, 0, 360, 480); x.fillStyle = '#E8667F'; x.beginPath(); x.arc(180, 210, 120, 0, 7); x.fill(); x.fillStyle = '#1E1A30'; x.beginPath(); x.arc(180, 210, 40, 0, 7); x.fill(); x.fillStyle = '#F2C14E'; x.font = '900 60px Fraunces'; x.textAlign = 'center'; x.fillText('LOS GRILLOS', 180, 420); }); const g = new THREE.Group(); g.add(box(w + .08, h + .08, .04, '#111', 0, 0, 0)); const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), std('#fff')); m.material.map = t; m.position.z = .025; g.add(m); return g; }
// linterna: brilho que acende e apaga
export function linterna(col = '#FFF2C0') { const g = new THREE.Group(); const b = box(.07, .07, .26, std('#3A3A44', { metalness: .5 }), 0, 0, 0); g.add(b); const s = glowSprite(col, .9, .95); s.position.z = .16; g.add(s); const l = new THREE.PointLight(col, 4, 4, 1.5); l.position.z = .25; g.add(l); g.userData.on = (k) => { s.visible = k > .5; l.intensity = k > .5 ? 4 : 0; }; return g; }
// cepillo de pelo (micrófono)
export function cepillo() { const g = new THREE.Group(); const h = new THREE.Mesh(new THREE.CylinderGeometry(.03, .035, .3, 10), std('#E8667F')); g.add(h); const hd = new THREE.Mesh(new THREE.SphereGeometry(.08, 14, 10), std('#2A2A34')); hd.scale.set(1, 1.4, .6); hd.position.y = .2; g.add(hd); return g; }
// libro (aberto)
export function libro(col = '#3A4F7A', tit = 'FILOSOFÍA') { const g = new THREE.Group(); g.add(box(.5, .64, .06, std(col), 0, 0, 0)); const t = canvasTex(256, 128, (x) => { x.fillStyle = col; x.fillRect(0, 0, 256, 128); x.fillStyle = '#F2C14E'; x.font = '900 40px Fraunces'; x.textAlign = 'center'; x.fillText(tit, 128, 76); }); const m = new THREE.Mesh(new THREE.PlaneGeometry(.46, .23), std('#fff')); m.material.map = t; m.position.z = .032; g.add(m); g.userData.label = m; return g; }

// ---------- ambientes ----------
// meu quarto: janela em z=-3 e, a 3 m, a fachada da casa da Sara com a janela dela (centro x=1)
const quartoBase = (c, o) => { AMBS.quarto(c, o); const p = pegaso(); p.position.set(-3.0, 2.8, -2.8); c.add(p); };
AMBS.cuartoYo = (c, o) => { quartoBase(c, o); const f = fachada({ w: 18, h: 9, col: o.night ? '#7A6A88' : '#E8C8A0', win: [1.0, 2.2, 1.7, 1.6], night: !!o.night, lit: o.lit ?? !!o.night, inner: '#F2C8D0' }); f.position.set(0, -.2, -6.2); c.add(f); c.userData.her = f;
  const fl = flamenco(); fl.position.set(-.4, .4, -8.6); fl.scale.setScalar(.9); c.add(fl); const pb = posterBanda(.7, .9); pb.position.set(1.9, 2.6, -9.2); c.add(pb); if (o.night) { stars(c, 600, 120, 2); } };
// quarto da Sara: o mesmo desenho, paredes lilás, e lá fora a minha janela (centro x=-1)
AMBS.cuartoElla = (c, o) => { AMBS.sala(c, { wall: '#6E5A9A', night: o.night }); c.add(box(2.4, .45, 3.2, std('#6B4A33'), 1.7, .25, -1.4)); c.add(box(2.3, .3, 3.0, std('#F3EEE4'), 1.7, .6, -1.4)); c.add(box(2.38, .22, 2.0, std('#E8667F', { roughness: .9 }), 1.7, .8, -.7)); const fl = flamenco(); fl.position.set(-3.2, 0, -2.2); c.add(fl); const pb = posterBanda(); pb.position.set(-3.6, 2.8, -2.8); c.add(pb);
  const f = fachada({ w: 18, h: 9, col: o.night ? '#6A5A50' : '#D8B890', win: [-1.0, 2.2, 1.7, 1.6], night: !!o.night, lit: o.lit ?? !!o.night, inner: '#C8D8E8' }); f.position.set(0, -.2, -6.2); c.add(f); c.userData.me = f; const p = pegaso(.6, .8); p.position.set(-2.2, 2.6, -9.2); c.add(p); if (o.night) stars(c, 600, 120, 2); };
// as duas janelas vistas de fora (entre as casas): fachadas abertas como um livro
AMBS.entreCasas = (c, o) => { const n = !!o.night; c.background = new THREE.Color(n ? '#0A0C1E' : '#9FC8E8'); c.fog = new THREE.FogExp2(n ? '#0E1028' : '#CFE0EE', .02);
  sky(c, -60, 300, 140, n ? [[0, '#05060E'], [.6, '#141838'], [1, '#2A2A50']] : [[0, '#6FA7D8'], [.6, '#CFE0E8'], [1, '#FFE7BE']]); if (n) stars(c, 1600, 120, 5); chao(c, n ? '#24301E' : '#6E9A50');
  const A = fachada({ w: 9, h: 8, col: n ? '#6A5A50' : '#D8B890', win: [0, 4.2, 1.7, 1.8], night: n, lit: n, inner: '#C8D8E8' }); A.position.set(-2.3, 0, -1); A.rotation.y = .62; c.add(A);
  const B = fachada({ w: 9, h: 8, col: n ? '#7A6A88' : '#E8C8A0', win: [0, 4.2, 1.7, 1.8], night: n, lit: n, inner: '#F2C8D0' }); B.position.set(2.3, 0, -1); B.rotation.y = -.62; c.add(B); c.userData.me = A; c.userData.her = B;
  const v = valla(10); v.rotation.y = Math.PI / 2; v.position.set(0, 0, 2); c.add(v);
  c.add(new THREE.HemisphereLight(n ? '#6E74C0' : '#E9EEFF', n ? '#1A1A24' : '#6A5A4A', n ? .55 : 1.0)); c.add(sunLight(n ? '#9FB0FF' : '#FFD29A', n ? .5 : 2.6, [6, 14, 10], 14, 40)); };
// posição (mundo) de quem está na janela das fachadas de entreCasas
export const enJanela = (lado, dz = 1.0) => (lado < 0 ? wpos([-2.3, 0, -1], .62, [0, 2.5, -dz]) : wpos([2.3, 0, -1], -.62, [0, 2.5, -dz]));
// rua de bairro: minha casa (x=-4.5) e a dela (x=+4.5), caminhão de mudança
AMBS.barrio = (c, o) => { const n = !!o.night, dk = !!o.dusk; c.fog = new THREE.FogExp2(n ? '#1A1A30' : dk ? '#E8A880' : '#F2E2C8', .012); sky(c, -120, 500, 200, n ? [[0, '#05060E'], [.6, '#141838'], [1, '#2A2A50']] : dk ? [[0, '#3A3A78'], [.5, '#B86A88'], [.8, '#F29A6A'], [1, '#FFC88A']] : [[0, '#6FA7D8'], [.6, '#CFE0E8'], [1, '#FFE7BE']]);
  chao(c, n ? '#24301E' : '#6E9A50'); const road = box(200, .02, 6, std(n ? '#2A2A30' : '#55545C', { roughness: .9 }), 0, .01, 4); road.receiveShadow = true; c.add(road); const side = box(200, .1, 2, std('#B8AC9D'), 0, .05, .2); side.receiveShadow = true; c.add(side);
  const H = [[-13.5, '#C8D8B0', '#5A6E8A'], [-4.5, '#D8B890', '#A8442E'], [4.5, '#E8C8A0', '#7A4A8A'], [13.5, '#B8D0E0', '#A8442E'], [22.5, '#E8D8A8', '#5A6E8A'], [-22.5, '#E0B8B0', '#3E6A5A']];
  for (const [x, col, roof] of H) { const h = casa({ col, roof, night: n }); h.position.set(x, 0, -3); c.add(h); }
  const s1 = seto(3); s1.position.set(-7.6, 0, -1.4); c.add(s1); const s2 = seto(3); s2.position.set(-1.4, 0, -1.4); c.add(s2); const s3 = seto(3); s3.position.set(7.6, 0, -1.4); c.add(s3);
  for (const x of [-9, 0, 9, 18]) tree(c, x, -11, 1.4, ['#2E4F2C', '#3B6636', '#55813F', '#A9B65A'], Math.abs(x)); skyline(c, -60, 300, 16, ['#B8C8D8', '#A8B8C8', '#98A8B8'], n, 9);
  c.add(new THREE.HemisphereLight(n ? '#6E74C0' : '#E9EEFF', '#6A5A4A', n ? .6 : 1.05)); c.add(sunLight(n ? '#9FB0FF' : dk ? '#FFB080' : '#FFD29A', n ? .6 : 2.8, [-14, 16, 12], 24, 70)); };
// jardins dos fundos: valla no meio (x=0), roseira do lado dela, caseta do meu lado
AMBS.jardin = (c, o) => { const dk = !!o.dusk; c.fog = new THREE.FogExp2(dk ? '#E8A880' : '#F2E2C8', .015); sky(c, -100, 400, 200, dk ? [[0, '#3A3A78'], [.5, '#B86A88'], [.8, '#F29A6A'], [1, '#FFC88A']] : [[0, '#6FA7D8'], [.6, '#CFE0E8'], [1, '#FFE7BE']]); chao(c, '#6E9A50');
  const v = valla(16); v.rotation.y = Math.PI / 2; v.position.set(0, 0, -2); c.add(v); const r = rosal(); r.position.set(1.6, 0, -1.2); c.add(r); const r2 = rosal(); r2.position.set(2.8, 0, -2.6); c.add(r2); const k = caseta(); k.position.set(-2.4, 0, -3.2); c.add(k);
  const hA = casa({ col: '#D8B890', roof: '#A8442E' }); hA.position.set(-5, 0, -9); hA.rotation.y = 0; c.add(hA); const hB = casa({ col: '#E8C8A0', roof: '#7A4A8A' }); hB.position.set(5, 0, -9); c.add(hB);
  for (const x of [-12, 12]) tree(c, x, -8, 1.3, ['#2E4F2C', '#3B6636', '#55813F', '#A9B65A'], Math.abs(x));
  c.add(new THREE.HemisphereLight('#E9EEFF', '#6A5A4A', 1.05)); c.add(sunLight(dk ? '#FFB080' : '#FFD29A', 2.8, [-10, 14, 10], 14, 50)); c.userData.caseta = k; };
// esquina: bairro com poste
AMBS.esquina = (c, o) => { AMBS.barrio(c, o); };
// plató de concurso
AMBS.concurso = (c) => { c.background = new THREE.Color('#140C24'); c.fog = new THREE.FogExp2('#1A1030', .03); const fl = box(20, .2, 12, std('#2A1E48', { metalness: .3, roughness: .4 }), 0, -.1, -2); fl.receiveShadow = true; c.add(fl);
  for (let i = 0; i < 9; i++) { const l = glowSprite(['#FF5A9A', '#5AC8FF', '#F2C14E'][i % 3], 1.0, .9); l.position.set(-6 + i * 1.5, 5, -6); c.add(l); }
  const back = cut(labelT(['¿QUIÉN SABE MÁS?'], { bg: '#3A1E6A', fg: '#F2C14E', size: 90, w: 1024, h: 180 }), 6, 1.05); back.position.set(0, 4.0, -5.8); c.add(back);
  const pod = box(1.2, 1.1, .7, std('#C9361F', { metalness: .3 }), 0, .55, -.6); c.add(pod); c.add(box(1.3, .1, .8, std('#F2C14E'), 0, 1.12, -.6));
  c.add(new THREE.HemisphereLight('#B8A8FF', '#2A1A3A', .9)); const sp = new THREE.SpotLight('#FFF2D8', 60, 20, .5, .5, 1.2); sp.position.set(0, 8, 4); sp.target.position.set(0, 1, -.6); sp.castShadow = true; c.add(sp, sp.target); };
// residência de estudantes (planta vista de cima, estilizada)
AMBS.residencia = (c) => { c.fog = new THREE.FogExp2('#E8DCC8', .02); c.add(woodFloor(20, 14, '#8A6A4A')); c.add(box(20, 4, .3, std('#E8DCC0'), 0, 2, -3.4)); for (let i = 0; i < 8; i++) { c.add(box(1.0, 2.2, .08, std('#6B4A33'), -7 + i * 2, 1.1, -3.2)); const n = cut(labelT([String(i + 1)], { bg: '#F2C14E', fg: '#2A2A34', size: 90, w: 160, h: 140 }), .4, .35); n.position.set(-7 + i * 2, 2.5, -3.15); c.add(n); }
  c.add(new THREE.HemisphereLight('#FFFFFF', '#9A8A70', 1.0)); c.add(sunLight('#FFE8C8', 2.0, [-6, 8, 6], 12, 40)); };
