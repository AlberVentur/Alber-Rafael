// Ambientes do vídeo "¿y si controlaras los sueños de tu crush?": desván, pasillo de los sueños, playa lila, baile, estadio, concierto, habitación gris, laboratorio del sueño.
import * as THREE from 'three';
import { AMBS, box, std, cut, glowSprite, canvasTex, lightPanel, beam, rng, crowd } from './mundo.js';
import { sky, tree } from './motor/kit.js';
import { stars } from './motor/kit2.js';
import { woodFloor, sunLight } from './comum.js';
import { labelT } from './amb2.js';
import { caja, rosal } from './amb3.js';
import { cama } from './extra.js';

const chao = (c, col, w = 200, l = 200, o = {}) => { const g = new THREE.Mesh(new THREE.PlaneGeometry(w, l), std(col, { roughness: 1, ...o })); g.rotation.x = -Math.PI / 2; g.receiveShadow = true; c.add(g); return g; };
const em = (col, k = 1.6) => new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: k });

// ---------- o aparato: antena + botão vermelho + etiqueta ----------
export function aparato(o = {}) { const g = new THREE.Group();
  g.add(box(.62, .26, .42, std('#8E6242', { roughness: .7 }), 0, .13, 0)); g.add(box(.66, .04, .46, std('#C9A06A'), 0, .28, 0));
  const ant = new THREE.Mesh(new THREE.CylinderGeometry(.015, .02, .7, 8), std('#B8BCC4', { metalness: .8, roughness: .3 })); ant.position.set(-.18, .65, 0); ant.rotation.z = .25; g.add(ant);
  const tip = new THREE.Mesh(new THREE.SphereGeometry(.05, 16, 12), em('#5AC8FF', 1.2)); tip.position.set(-.27, .98, 0); g.add(tip); const tg = glowSprite('#5AC8FF', .5, .7); tg.position.copy(tip.position); g.add(tg);
  for (let i = 0; i < 3; i++) { const d = new THREE.Mesh(new THREE.CylinderGeometry(.035, .035, .03, 14), std(['#F2C14E', '#E8E2D2', '#36AEA2'][i], { metalness: .4 })); d.position.set(-.18 + i * .1, .31, .12); g.add(d); }
  const btn = new THREE.Mesh(new THREE.CylinderGeometry(.09, .1, .08, 24), em('#E2322A', .6)); btn.position.set(.16, .33, 0); g.add(btn);
  const lab = cut(labelT(['DIRECTOR', 'DE SUEÑOS'], { bg: '#F4ECD6', fg: '#3A2A1A', size: 54, w: 420, h: 150 }), .4, .14); lab.position.set(-.06, .14, .215); g.add(lab);
  g.userData = { btn, tip, tg }; return g; }
// pulsa o botão: k 0..1 (afunda e brilha)
export const pulsa = (ap, k) => { const { btn, tip, tg } = ap.userData; btn.position.y = .33 - .035 * k; btn.material.emissiveIntensity = .6 + 2.2 * k; tip.material.emissiveIntensity = 1.2 + 3 * k; tg.material.opacity = .5 + .5 * k; tg.scale.setScalar(.5 + .9 * k); };

// caja de madeira (aberta)
export function cajaMadera() { const g = new THREE.Group(); const m = std('#7A5232', { roughness: .85 }); g.add(box(1.0, .08, .7, m, 0, .04, 0)); for (const [w, d, x, z] of [[1.0, .06, 0, .32], [1.0, .06, 0, -.32], [.06, .7, .47, 0], [.06, .7, -.47, 0]]) g.add(box(w, .42, d, m, x, .25, z)); const lid = box(1.02, .06, .72, std('#8E6242'), 0, .5, -.6); lid.rotation.x = -1.1; g.add(lid); return g; }
// cubo de basura
export function cubo() { const g = new THREE.Group(); const b = new THREE.Mesh(new THREE.CylinderGeometry(.32, .26, .9, 20, 1, true), std('#5A6A7A', { metalness: .5, roughness: .4, side: THREE.DoubleSide })); b.position.y = .45; b.castShadow = true; g.add(b); const r = new THREE.Mesh(new THREE.TorusGeometry(.32, .03, 8, 24), std('#4A5A6A', { metalness: .6 })); r.rotation.x = Math.PI / 2; r.position.y = .9; g.add(r); return g; }
// botón de suscribirse + campanita
export function suscribe(w = 2.6) { const g = new THREE.Group();
  const t = canvasTex(1024, 300, (x) => { x.clearRect(0, 0, 1024, 300); x.fillStyle = '#E2231A'; x.beginPath(); x.roundRect(10, 30, 780, 240, 60); x.fill(); x.fillStyle = '#fff'; x.font = '900 112px Inter'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('SUSCRÍBETE', 400, 156);
    x.fillStyle = '#F2C14E'; x.beginPath(); x.arc(910, 150, 100, 0, 7); x.fill(); x.fillStyle = '#2A2A34'; x.beginPath(); x.moveTo(860, 190); x.quadraticCurveTo(870, 80, 910, 78); x.quadraticCurveTo(950, 80, 960, 190); x.closePath(); x.fill(); x.fillRect(850, 186, 120, 16); x.beginPath(); x.arc(910, 214, 14, 0, 7); x.fill(); x.beginPath(); x.arc(910, 70, 10, 0, 7); x.fill(); });
  const m = cut(t, w, w * 300 / 1024, { blend: true }); m.renderOrder = 6; g.add(m); g.userData.m = m; return g; }
// teléfono con mensaje
export function telTex(lines, o = {}) { return canvasTex(540, 1000, (x) => { const g = x.createLinearGradient(0, 0, 0, 1000); g.addColorStop(0, '#2B2F5A'); g.addColorStop(1, '#141830'); x.fillStyle = g; x.fillRect(0, 0, 540, 1000); x.fillStyle = '#fff'; x.textAlign = 'center'; x.font = '700 70px Inter'; x.fillText(o.hora || '23:47', 270, 120);
  x.fillStyle = '#F4F0E4'; x.beginPath(); x.roundRect(40, 300, 460, 120 + lines.length * 62, 34); x.fill(); x.fillStyle = '#E8667F'; x.beginPath(); x.arc(100, 350, 34, 0, 7); x.fill(); x.fillStyle = '#fff'; x.font = '800 40px Inter'; x.fillText('S', 100, 364); x.textAlign = 'left'; x.fillStyle = '#2A2A34'; x.font = '800 36px Inter'; x.fillText('Sara', 150, 362);
  x.font = '600 38px Inter'; lines.forEach((l, i) => x.fillText(l, 70, 440 + i * 56));
  if (o.pato) { const y0 = 440 + lines.length * 62 + 40; x.fillStyle = '#F4F0E4'; x.beginPath(); x.roundRect(300, y0 - 60, 170, 150, 30); x.fill(); x.fillStyle = '#F6D44A'; x.beginPath(); x.ellipse(395, y0 + 40, 50, 32, 0, 0, 7); x.fill(); x.beginPath(); x.arc(360, y0, 28, 0, 7); x.fill(); x.fillStyle = '#F2913A'; x.beginPath(); x.ellipse(330, y0 + 6, 18, 8, 0, 0, 7); x.fill(); x.fillStyle = '#1A1A24'; x.beginPath(); x.arc(362, y0 - 6, 5, 0, 7); x.fill(); } }); }
export function telefono(lines, o = {}) { const g = new THREE.Group(); g.add(box(.62, 1.18, .06, std('#1A1A24', { metalness: .4 }), 0, 0, 0, false)); const s = new THREE.Mesh(new THREE.PlaneGeometry(.56, 1.04), new THREE.MeshBasicMaterial({ map: telTex(lines, o), toneMapped: false })); s.position.z = .032; g.add(s); return g; }
// farolillo de papel
export function farolillo(col = '#FFB25A') { const g = new THREE.Group(); const b = new THREE.Mesh(new THREE.CylinderGeometry(.16, .12, .34, 12), em(col, 1.8)); g.add(b); const s = glowSprite(col, 1.0, .55); g.add(s); return g; }
// estrelinha/brilho flutuante
const flores = (c, n, area, seed = 3) => { const R = rng(seed); const cols = ['#F2A8C8', '#FBF7EC', '#F2C14E', '#B48AE8', '#E8667F']; for (let i = 0; i < n; i++) { const f = new THREE.Mesh(new THREE.SphereGeometry(.07 + R() * .06, 10, 8), em(cols[i % 5], .4)); f.position.set((R() - .5) * area[0], .06, area[2] - R() * area[1]); c.add(f); const st = box(.02, .12, .02, std('#3E8A52'), f.position.x, .02, f.position.z, false); c.add(st); } };

// ---------- AMBIENTES ----------
// desván do avô: madeira, telhado inclinado, caixas, raio de luz
AMBS.desvan = (c, o) => { const n = !!o.night; c.background = new THREE.Color('#1A120C'); c.fog = new THREE.FogExp2('#2A1C12', .05); c.add(woodFloor(16, 14, '#6A4630'));
  for (const s of [-1, 1]) { const r = box(16, .15, 7.5, std('#5A3A26', { roughness: .9 }), 0, 0, 0); r.position.set(0, 3.3, -1.2 + s * 2.3); r.rotation.x = s * -.62; r.position.y = 3.2; r.position.z = s > 0 ? 2.4 : -4.4; r.rotation.x = s > 0 ? .62 : -.62; if (s < 0) c.add(r); }
  c.add(box(16, 6, .2, std('#4E3422', { roughness: 1 }), 0, 2.5, -4.6)); for (let i = 0; i < 6; i++) { const v = box(.22, .22, 9, std('#3A2618'), -6 + i * 2.4, 4.4, -1); c.add(v); }
  const R = rng(6); for (let i = 0; i < 9; i++) { const b = caja(.5 + R() * .5); b.position.set(-5 + R() * 10, 0, -3.6 + R() * 1.2); b.rotation.y = R(); if (Math.abs(b.position.x) > 1.4) c.add(b); }
  const trunk = box(1.4, .8, .7, std('#6A3A22', { roughness: .7 }), -3.2, .4, -2.2); c.add(trunk); c.add(box(1.44, .1, .74, std('#C9A06A', { metalness: .4 }), -3.2, .55, -2.2));
  const win = lightPanel(.9, .9, n ? '#5A6AA8' : '#FFE2A8', n ? .6 : 1.6); win.position.set(2.6, 2.9, -4.48); c.add(win); const bm = beam(1.4, 7, n ? '#9FB0FF' : '#FFD9A0', n ? .08 : .2); bm.position.set(1.6, 1.7, -2.6); bm.rotation.set(-.2, 0, -.75); c.add(bm);
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(.09, 12, 10), em('#FFD089', 2)); bulb.position.set(0, 3.1, -1.2); c.add(bulb); c.add(box(.01, 1.2, .01, '#111', 0, 3.75, -1.2, false));
  const pl = new THREE.PointLight('#FFB66E', 9, 9, 1.4); pl.position.set(0, 3.0, -1.0); pl.castShadow = true; c.add(pl); c.add(new THREE.HemisphereLight('#FFD8A8', '#3A2418', .55));
  const dust = []; for (let i = 0; i < 40; i++) { const d = glowSprite('#FFE8C0', .05, .6); d.position.set(.5 + R() * 2.4, .6 + R() * 2.6, -3 + R() * 2.6); c.add(d); dust.push(d); } c.userData.dust = dust; };

// pasillo infinito de puertas de colores (sueño)
AMBS.pasillo = (c, o) => { c.background = new THREE.Color('#1A1036'); c.fog = new THREE.FogExp2('#2A1850', .045); stars(c, 1600, 120, 7);
  chao(c, '#C8A8E8', 8, 120, { roughness: .9 }).position.z = -40; const R = rng(11); const cols = ['#E8667F', '#36AEA2', '#F2C14E', '#4A86C7', '#7F6BC4', '#F2913A', '#5FB04A'];
  for (let i = 0; i < 26; i++) for (const s of [-1, 1]) { const z = -2 - i * 2.2; const col = cols[(i * 2 + (s > 0 ? 1 : 0)) % cols.length]; const fr = box(.12, 2.6, 1.3, std('#F4ECD6'), s * 2.4, 1.3, z); c.add(fr); const d = box(.08, 2.3, 1.05, std(col, { roughness: .6 }), s * 2.35, 1.15, z); c.add(d); const kn = new THREE.Mesh(new THREE.SphereGeometry(.05, 8, 6), em('#F2C14E', .6)); kn.position.set(s * 2.29, 1.1, z + .35); c.add(kn); }
  // a porta de Sara: no fundo (z=-8) do lado direito, com placa e brilho
  const door = new THREE.Group(); const piv = new THREE.Group(); piv.position.set(0, 0, .55); door.add(piv); const dd = box(.08, 2.3, 1.05, std('#F2A8C8', { roughness: .5 }), 0, 1.15, -.525); piv.add(dd); const kn = new THREE.Mesh(new THREE.SphereGeometry(.05, 8, 6), em('#F2C14E', .8)); kn.position.set(-.06, 1.1, -.9); piv.add(kn);
  const pl = cut(labelT(['SARA'], { bg: '#FBF7EC', fg: '#C9361F', size: 110, w: 400, h: 160 }), .6, .24); pl.position.set(-.06, 1.85, -.525); pl.rotation.y = -Math.PI / 2; piv.add(pl);
  const halo = lightPanel(.04, 2.3, '#FFF0C8', 2.2); halo.rotation.y = -Math.PI / 2; halo.position.set(.05, 1.15, -.525); door.add(halo); door.position.set(2.35, 0, -8.6); c.add(door); c.userData.door = piv; c.userData.doorPos = [2.35, 0, -8.6];
  for (let i = 0; i < 14; i++) { const g = glowSprite(['#FFB2E0', '#B2D8FF', '#FFF2B0'][i % 3], .25 + R() * .3, .7); g.position.set((R() - .5) * 4, .5 + R() * 3, -1 - R() * 30); c.add(g); }
  c.add(new THREE.HemisphereLight('#D8C8FF', '#4A3070', 1.0)); const sp = new THREE.PointLight('#FFE0F0', 14, 14, 1.4); sp.position.set(0, 3, -4); c.add(sp); const sp2 = new THREE.PointLight('#B8C8FF', 10, 14, 1.4); sp2.position.set(0, 3, -12); c.add(sp2); };

// playa de los sueños: mar lila, arena de azúcar, cielo rosa
AMBS.playaSueno = (c, o) => { c.fog = new THREE.FogExp2('#E8B8E0', .018); sky(c, -120, 600, 240, [[0, '#6A4AB8'], [.45, '#C88AD8'], [.75, '#F6B8C8'], [1, '#FFE2D0']]);
  const moon = glowSprite('#FFF6E0', 16, .9); moon.position.set(10, 22, -110); moon.material.fog = false; c.add(moon); const m2 = new THREE.Mesh(new THREE.CircleGeometry(4, 40), new THREE.MeshBasicMaterial({ color: '#FFF6E8', fog: false })); m2.position.set(10, 22, -112); c.add(m2);
  const sand = chao(c, '#F8EEF2', 200, 200); const sea = new THREE.Mesh(new THREE.PlaneGeometry(400, 200), new THREE.MeshStandardMaterial({ color: '#B48AE8', roughness: .12, metalness: .35, emissive: '#6A3AA8', emissiveIntensity: .25 })); sea.rotation.x = -Math.PI / 2; sea.position.set(0, .03, -104); c.add(sea); c.userData.sea = sea;
  const foam = box(400, .02, .3, std('#FFFFFF', { roughness: .5 }), 0, .04, -4.1, false); c.add(foam); c.userData.foam = foam;
  const R = rng(4); for (let i = 0; i < 70; i++) { const g = glowSprite('#FFFFFF', .08 + R() * .1, .8); g.position.set((R() - .5) * 16, .05, 2 - R() * 6); c.add(g); }
  for (let i = 0; i < 4; i++) { const p = new THREE.Group(); p.add(box(.18, 2.8, .18, std('#E8A0C0'), 0, 1.4, 0)); const top = glowSprite(['#7FD08A', '#F2C14E', '#5AC8FF', '#FF8AC8'][i], 1.6, .8); top.position.y = 3; p.add(top); p.position.set([-6, -3.6, 4.5, 7][i], 0, [-2.6, -3.4, -3, -2][i]); c.add(p); }
  c.add(new THREE.HemisphereLight('#FFE0F6', '#B88AC8', 1.15)); c.add(sunLight('#FFD8E8', 2.0, [8, 14, -6], 14, 60)); };

// baile de flores con farolillos (noche de sueño)
AMBS.baile = (c, o) => { c.background = new THREE.Color('#0E0A28'); c.fog = new THREE.FogExp2('#1A1240', .03); stars(c, 2400, 160, 3); sky(c, -100, 500, 200, [[0, '#0A0820'], [.6, '#2A1A58'], [1, '#6A3A78']]);
  chao(c, '#3A2A5A'); const pista = new THREE.Mesh(new THREE.CircleGeometry(3.2, 48), new THREE.MeshStandardMaterial({ color: '#F4E8F8', roughness: .25, metalness: .2, emissive: '#8A6AB8', emissiveIntensity: .25 })); pista.rotation.x = -Math.PI / 2; pista.position.set(0, .02, -1); pista.receiveShadow = true; c.add(pista);
  flores(c, 260, [16, 12, 3]); for (const [x, z] of [[-4.2, -2.4], [4.2, -2.4], [-5.2, -5], [5.2, -5], [0, -6]]) { const r = rosal(); r.position.set(x, 0, z); c.add(r); }
  const R = rng(9); const F = []; for (let i = 0; i < 22; i++) { const f = farolillo(['#FFB25A', '#FF8A6A', '#FFD27A'][i % 3]); f.position.set((R() - .5) * 12, 2.6 + R() * 4, -1 - R() * 9); f.userData.y0 = f.position.y; f.userData.ph = R() * 6; c.add(f); F.push(f); } c.userData.farol = F;
  c.add(new THREE.HemisphereLight('#B8A8FF', '#2A1A3A', .7)); const sp = new THREE.SpotLight('#FFE2C8', 50, 20, .6, .6, 1.2); sp.position.set(0, 8, 3); sp.target.position.set(0, 0, -1); sp.castShadow = true; c.add(sp, sp.target); const pl = new THREE.PointLight('#FFB25A', 8, 12, 1.5); pl.position.set(0, 3.5, -2); c.add(pl); };

// estadio (final del mundial)
AMBS.estadio = (c, o) => { c.background = new THREE.Color('#0A1020'); c.fog = new THREE.FogExp2('#18203A', .02); stars(c, 800, 160, 5);
  const t = canvasTex(512, 512, (x) => { for (let i = 0; i < 8; i++) { x.fillStyle = i % 2 ? '#3E8A3E' : '#4A9A46'; x.fillRect(0, i * 64, 512, 64); } x.strokeStyle = '#F4F4F4'; x.lineWidth = 6; x.strokeRect(20, 20, 472, 472); x.beginPath(); x.moveTo(20, 256); x.lineTo(492, 256); x.stroke(); x.beginPath(); x.arc(256, 256, 60, 0, 7); x.stroke(); });
  const p = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.MeshStandardMaterial({ map: t, roughness: .9 })); p.rotation.x = -Math.PI / 2; p.position.z = -14; p.receiveShadow = true; c.add(p);
  const goal = new THREE.Group(); const gm = std('#FFFFFF', { roughness: .4 }); goal.add(box(.12, 2.4, .12, gm, -3.6, 1.2, 0), box(.12, 2.4, .12, gm, 3.6, 1.2, 0), box(7.3, .12, .12, gm, 0, 2.4, 0)); const net = new THREE.Mesh(new THREE.PlaneGeometry(7.2, 2.4), new THREE.MeshBasicMaterial({ color: '#FFFFFF', transparent: true, opacity: .18, side: THREE.DoubleSide })); net.position.set(0, 1.2, -1); goal.add(net); goal.position.set(0, 0, -7); c.add(goal);
  for (let r = 0; r < 4; r++) c.add(box(60, 1, 2, std(['#2A3A6A', '#3A2A5A', '#2A3A6A', '#3A2A5A'][r]), 0, .5 + r * 1.1, -14 - r * 2));
  const spots = []; const R = rng(2); for (let r = 0; r < 4; r++) for (let i = 0; i < 48; i++) spots.push([-24 + i + R() * .4, 1.0 + r * 1.1, -14 - r * 2]); crowd(c, spots, { h: 1.3, tint: '#C8C8E8', raised: .7 });
  for (const s of [-1, 1]) { const l = glowSprite('#FFFFFF', 6, .9); l.position.set(s * 16, 14, -20); c.add(l); }
  c.add(new THREE.HemisphereLight('#D8E0FF', '#2A3A2A', 1.0)); const sl = sunLight('#FFFFFF', 2.6, [6, 16, 8], 14, 60); c.add(sl); };

// concierto: escenario, focos, público
AMBS.concierto = (c, o) => { c.background = new THREE.Color('#0C0820'); c.fog = new THREE.FogExp2('#140C2C', .025); const st = box(14, .6, 6, std('#2A1E48', { metalness: .3, roughness: .4 }), 0, .3, -2.5); st.receiveShadow = true; c.add(st); chao(c, '#140E26').position.y = -.01;
  const back = lightPanel(14, 6, '#3A1E6A', .5); back.position.set(0, 3.6, -5.5); c.add(back); const R = rng(4);
  for (let i = 0; i < 9; i++) { const l = glowSprite(['#FF5A9A', '#5AC8FF', '#F2C14E'][i % 3], 1.2, .9); l.position.set(-6 + i * 1.5, 6, -5); c.add(l); const b = beam(1.2, 8, ['#FF5A9A', '#5AC8FF', '#F2C14E'][i % 3], .1); b.position.set(-6 + i * 1.5, 3, -4.5); b.rotation.z = (i - 4) * .08; c.add(b); }
  const mic = new THREE.Group(); mic.add(box(.03, 1.4, .03, std('#2A2A30', { metalness: .6 }), 0, .7 + .6, 0)); const head = new THREE.Mesh(new THREE.SphereGeometry(.06, 12, 10), std('#888', { metalness: .8 })); head.position.y = 2.05; mic.add(head); mic.position.set(.5, 0, -.6); c.add(mic);
  for (let i = 0; i < 40; i++) { const g = glowSprite(['#FFF2C0', '#B8E0FF', '#FFB2E0'][i % 3], .18, .8); g.position.set(-7 + R() * 14, 1.2 + R() * 1.2, 2.5 + R() * 3); c.add(g); }
  c.add(new THREE.HemisphereLight('#B8A8FF', '#2A1A3A', .8)); const sp = new THREE.SpotLight('#FFF2D8', 70, 22, .45, .5, 1.2); sp.position.set(0, 9, 4); sp.target.position.set(0, .6, -.6); sp.castShadow = true; c.add(sp, sp.target); };

// habitación gris (el sueño que no es tuyo)
AMBS.gris = (c, o) => { c.background = new THREE.Color('#1C1E24'); c.fog = new THREE.FogExp2('#262830', .06); chao(c, '#4A4C54');
  c.add(box(14, 7, .2, std('#5A5C64', { roughness: 1 }), 0, 3.5, -4)); c.add(box(.2, 7, 12, std('#52545C', { roughness: 1 }), -4.2, 3.5, 0)); c.add(box(.2, 7, 12, std('#52545C', { roughness: 1 }), 4.2, 3.5, 0));
  const win = lightPanel(1.2, 1.4, '#8A94A8', .35); win.position.set(1.8, 2.8, -3.88); c.add(win); for (const x of [1.8]) { c.add(box(.06, 1.4, .05, '#3A3C44', x, 2.8, -3.86)); c.add(box(1.2, .06, .05, '#3A3C44', x, 2.8, -3.86)); }
  c.add(new THREE.HemisphereLight('#A8B0C8', '#2A2A30', .6)); const sp = new THREE.SpotLight('#C8D0E8', 28, 14, .5, .7, 1.3); sp.position.set(-1.4, 6, 1); sp.target.position.set(-2.6, 0, -2.8); sp.castShadow = true; c.add(sp, sp.target);
  const warm = new THREE.PointLight('#FFD8A0', 0, 10, 1.2); warm.position.set(-2, 2.4, -1.4); c.add(warm); c.userData.warm = warm; };

// laboratorio del sueño: cama, monitor, cables
AMBS.labSueno = (c, o) => { AMBS.lab(c, o); cama(c, -1.4, -1.6, '#4A86C7'); const mon = new THREE.Group(); mon.add(box(.12, 1.4, .12, std('#3A3A44'), 0, .7, 0)); mon.add(box(1.0, .7, .1, std('#20242E'), 0, 1.7, 0)); const scr = lightPanel(.9, .6, '#7FD08A', .6); scr.position.set(0, 1.7, .06); mon.add(scr); mon.position.set(1.0, 0, -2.4); mon.rotation.y = -.4; c.add(mon); c.userData.mon = scr; };
