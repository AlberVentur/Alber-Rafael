// Peças compartilhadas pelas cenas deste vídeo.
import * as THREE from 'three';
import { rng } from './motor/core.js';
import { canvasTex } from './motor/char.js';
import { box, std, cut, glowSprite } from './motor/kit.js';
import { notif } from './motor/kit2.js';

export function woodFloor(w, l, base = '#6D4A33') { const t = canvasTex(1024, 1024, (x) => { x.fillStyle = base; x.fillRect(0, 0, 1024, 1024); const R = rng(8); for (let i = 0; i < 11; i++) { const px = i * 94; x.fillStyle = `rgba(${R() < .5 ? '255,220,180' : '20,10,5'},${R() * .13})`; x.fillRect(px, 0, 94, 1024); x.fillStyle = '#21140D'; x.fillRect(px, 0, 4, 1024); let y = R() * 300; while (y < 1024) { x.fillRect(px, y, 94, 3); y += 340 + R() * 300; } } }); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(w / 5, l / 5); const m = new THREE.Mesh(new THREE.PlaneGeometry(w, l), new THREE.MeshStandardMaterial({ map: t, roughness: .55 })); m.rotation.x = -Math.PI / 2; m.receiveShadow = true; return m; }

export function tileFloor(w, l, a = '#D6D3C9', b = '#C8C5BA', rep = 8) { const t = canvasTex(256, 256, (x) => { x.fillStyle = a; x.fillRect(0, 0, 256, 256); x.fillStyle = b; x.fillRect(0, 0, 128, 128); x.fillRect(128, 128, 128, 128); }); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(w / rep * 4, l / rep * 4); const m = new THREE.Mesh(new THREE.PlaneGeometry(w, l), new THREE.MeshStandardMaterial({ map: t, roughness: .3, metalness: .05 })); m.rotation.x = -Math.PI / 2; m.receiveShadow = true; return m; }

// feixe de luz: faixa aditiva com degradê
export function beam(w, h, col = '#FFD9A0', op = .22) { const t = canvasTex(64, 256, (x) => { const g = x.createLinearGradient(0, 0, 0, 256); g.addColorStop(0, col + 'FF'); g.addColorStop(1, col + '00'); x.fillStyle = g; x.fillRect(0, 0, 64, 256); const g2 = x.createLinearGradient(0, 0, 64, 0); g2.addColorStop(0, '#000000'); g2.addColorStop(.25, '#00000000'); g2.addColorStop(.75, '#00000000'); g2.addColorStop(1, '#000000'); x.globalCompositeOperation = 'destination-out'; x.fillStyle = g2; x.fillRect(0, 0, 64, 256); }); const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: t, transparent: true, opacity: op, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false })); return m; }

// planta em vaso
export function plant(x, y, z, sc = 1, pot = '#C76B4A', leaf = '#3E8A52') { const g = new THREE.Group(); const p = new THREE.Mesh(new THREE.CylinderGeometry(.3, .22, .5, 20), std(pot)); p.position.y = .25; p.castShadow = true; g.add(p); const lf = canvasTex(256, 256, (c) => { c.clearRect(0, 0, 256, 256); for (let i = 0; i < 9; i++) { c.save(); c.translate(128, 250); c.rotate((i - 4) * .3); c.fillStyle = i % 2 ? leaf : '#5BA868'; c.beginPath(); c.ellipse(0, -110, 20, 110, 0, 0, 7); c.fill(); c.restore(); } }); const pl = cut(lf, 1.5, 1.5, { shadow: true }); pl.position.y = 1.15; g.add(pl); g.leaf = pl; g.position.set(x, y, z); g.scale.setScalar(sc); return g; }

// pôster/quadro emoldurado
export function poster(w, h, draw, frame = '#2A1E18') { const g = new THREE.Group(); g.add(box(w + .08, h + .08, .04, frame, 0, 0, 0)); const t = canvasTex(Math.round(w * 400), Math.round(h * 400), draw); const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: t, roughness: .8 })); m.position.z = .025; g.add(m); return g; }

// tela do celular
export const PAL = ['#D2728A', '#36AEA2', '#C9361F', '#E9B44C', '#4A86C7', '#7F6BC4'];
export function drawOffline(x, hora = '07:02', k = 1) { const g = x.createLinearGradient(0, 0, 0, 1110); g.addColorStop(0, '#1E2A55'); g.addColorStop(1, '#0E1328'); x.fillStyle = g; x.fillRect(0, 0, 540, 1110); x.fillStyle = '#fff'; x.textAlign = 'center'; x.font = '700 92px Inter'; x.fillText(hora, 270, 170); x.font = '600 30px Inter'; x.fillStyle = '#B8C2E0'; x.fillText('jueves', 270, 220);
  // ícone de wi-fi riscado
  x.save(); x.translate(270, 560); x.strokeStyle = '#F2C14E'; x.lineCap = 'round'; x.lineWidth = 26; for (const r of [150, 100, 50]) { x.beginPath(); x.arc(0, 0, r, -Math.PI * .78, -Math.PI * .22); x.stroke(); } x.fillStyle = '#F2C14E'; x.beginPath(); x.arc(0, 0, 18, 0, 7); x.fill(); x.strokeStyle = '#E2483A'; x.lineWidth = 30; x.globalAlpha = k; x.beginPath(); x.moveTo(-150, -190); x.lineTo(150, 40); x.stroke(); x.restore();
  x.fillStyle = '#fff'; x.font = '800 62px Inter'; x.fillText('Sin conexión', 270, 760); x.font = '600 32px Inter'; x.fillStyle = '#9AA6CC'; x.fillText('No hay internet', 270, 820); }

export function drawFlood(x, n) { const g = x.createLinearGradient(0, 0, 0, 1110); g.addColorStop(0, '#2B3A72'); g.addColorStop(1, '#10152C'); x.fillStyle = g; x.fillRect(0, 0, 540, 1110); x.fillStyle = '#fff'; x.textAlign = 'center'; x.font = '700 76px Inter'; x.fillText('07:01', 270, 110);
  const msgs = ['¿¿ESTÁS VIVO??', 'mijo contesta', 'volvió internet!!', 'te mandé 40 audios', '¿vienes el domingo?', 'contesta 🙏', '¿y la abuela?', 'NO PUEDE SER']; const base = Math.max(0, n - 7); for (let i = 0; i < Math.min(n, 7); i++) notif(x, 150 + i * 140, 'Grupo de la familia', msgs[(base + i) % msgs.length], PAL[(base + i) % 6]);
  if (n > 0) { x.fillStyle = '#E2483A'; x.beginPath(); x.arc(440, 82, 52, 0, 7); x.fill(); x.fillStyle = '#fff'; x.font = '800 42px Inter'; x.fillText(String(Math.min(300, Math.round(n))), 440, 97); } }

// moeda pintada
export const coinTex = () => canvasTex(128, 128, (x) => { x.clearRect(0, 0, 128, 128); const g = x.createRadialGradient(48, 44, 4, 64, 64, 60); g.addColorStop(0, '#FFF1B8'); g.addColorStop(.5, '#E9B44C'); g.addColorStop(1, '#A8761E'); x.fillStyle = g; x.beginPath(); x.arc(64, 64, 58, 0, 7); x.fill(); x.strokeStyle = '#8A5E16'; x.lineWidth = 5; x.beginPath(); x.arc(64, 64, 46, 0, 7); x.stroke(); x.fillStyle = '#8A5E16'; x.font = '900 52px Fraunces'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('1', 64, 68); });

// letreiro pintado (texto sobre placa)
export function signTex(text, bg, fg, w = 1024, h = 256, font = 'Fraunces', size = 140, weight = 900) { return canvasTex(w, h, (x) => { x.fillStyle = bg; x.fillRect(0, 0, w, h); x.strokeStyle = fg; x.globalAlpha = .55; x.lineWidth = 8; x.strokeRect(14, 14, w - 28, h - 28); x.globalAlpha = 1; x.fillStyle = fg; x.textAlign = 'center'; x.textBaseline = 'middle'; x.font = `${weight} ${size}px ${font}`; x.fillText(text, w / 2, h / 2 + 8); }); }

export function lightPanel(w, h, col, k = 1.2) { return new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ color: '#000', emissive: col, emissiveIntensity: k })); }

export function sunLight(col, k, pos, half = 10, far = 60) { const l = new THREE.DirectionalLight(col, k); l.position.set(...pos); l.castShadow = true; l.shadow.mapSize.set(1024, 1024); Object.assign(l.shadow.camera, { left: -half, right: half, top: half, bottom: -half, far }); l.shadow.bias = -.0006; l.shadow.radius = 4; return l; }
