// Peças extras compartilhadas pelos 4 shorts (relojes, insectos, dormir, mente).
import * as THREE from 'three';
import { rng, lerp } from './motor/core.js';
import { makeChar, canvasTex } from './motor/char.js';
import { box, std, cut, glowSprite } from './motor/kit.js';
import { lightPanel } from './comum.js';
import { sala } from './pecas.js';

// cama com frente para +z; cabeceira em z-1.5
export function cama(c, x, z, col = '#E8667F') {
  c.add(box(2.2, .45, 3.0, std('#6B4A33'), x, .25, z)); c.add(box(2.1, .3, 2.8, std('#F3EEE4'), x, .6, z));
  c.add(box(2.18, .2, 1.9, std(col, { roughness: .9 }), x, .8, z + .5)); c.add(box(2.2, 1.3, .16, std('#5A3C28'), x, .9, z - 1.55));
  c.add(box(.8, .2, .45, std('#FFFFFF'), x - .5, .82, z - 1.1)); c.add(box(.8, .2, .45, std('#F6E6C8'), x + .5, .82, z - 1.1));
}
// quarto: sala + cama + criado-mudo com abajur
export function cuarto(c, o = {}) { const { night = false, bed = [-1.0, -1.0], wall = '#9A4632', col } = o;
  sala(c, { night, wall }); cama(c, bed[0], bed[1], col);
  c.add(box(.7, .6, .55, std('#8E6242'), bed[0] + 1.6, .3, bed[1] - 1.0));
  const sh = new THREE.Mesh(new THREE.CylinderGeometry(.13, .2, .24, 20), new THREE.MeshStandardMaterial({ color: '#F6DDA4', emissive: '#FFB866', emissiveIntensity: night ? 1.4 : .6 })); sh.position.set(bed[0] + 1.55, .95, bed[1] - 1.05); c.add(sh); c.add(box(.03, .3, .03, '#222', bed[0] + 1.55, .72, bed[1] - 1.05));
  const lp = new THREE.PointLight('#FFB56E', night ? 5 : 1.5, 5, 1.6); lp.position.set(bed[0] + 1.5, 1.1, bed[1] - .7); c.add(lp);
  return { lamp: lp, shade: sh, table: [bed[0] + 1.6, .6, bed[1] - 1.0] };
}
// deita um personagem (chamar depois de face): cabeça para -x
export function deitar(k, ang = Math.PI / 2) { k.root.rotation.z = ang; }

// balão de pensamento com texto
export function bubbleTex(lines, o = {}) { const { w = 640, h = 400, bg = '#FBF7EC', fg = '#2A2A34', size = 64, font = '800', tail = 'left' } = o;
  return canvasTex(w, h, (x) => { x.clearRect(0, 0, w, h); x.fillStyle = bg; x.strokeStyle = '#2A2A34'; x.lineWidth = 8;
    x.beginPath(); x.ellipse(w / 2, h * .42, w * .46, h * .37, 0, 0, 7); x.fill(); x.stroke();
    const sx = tail === 'left' ? w * .3 : w * .7; for (const [cx, cy, r] of [[sx, h * .86, 20], [sx + (tail === 'left' ? -40 : 40), h * .96, 11]]) { x.beginPath(); x.arc(cx, cy, r, 0, 7); x.fill(); x.stroke(); }
    x.fillStyle = fg; x.textAlign = 'center'; x.textBaseline = 'middle'; x.font = `${font} ${size}px Inter`; const L = Array.isArray(lines) ? lines : [lines];
    L.forEach((t, i) => x.fillText(t, w / 2, h * .42 + (i - (L.length - 1) / 2) * size * 1.15)); }); }
export function bubble(c, lines, w = 1.4, o = {}) { const t = bubbleTex(lines, o); const m = cut(t, w, w * (o.h || 400) / (o.w || 640), { blend: true }); m.renderOrder = 5; c.add(m); return m; }
// balão de fala (retângulo arredondado)
export function speechTex(lines, o = {}) { const { w = 640, h = 300, size = 66 } = o; return canvasTex(w, h, (x) => { x.clearRect(0, 0, w, h); x.fillStyle = '#FFFFFF'; x.strokeStyle = '#2A2A34'; x.lineWidth = 8; x.beginPath(); x.roundRect(10, 10, w - 20, h * .72, 40); x.fill(); x.stroke(); x.beginPath(); x.moveTo(w * .3, h * .72 + 6); x.lineTo(w * .26, h * .98); x.lineTo(w * .42, h * .72 + 6); x.fill(); x.stroke(); x.fillStyle = '#2A2A34'; x.font = `800 ${size}px Inter`; x.textAlign = 'center'; x.textBaseline = 'middle'; const L = Array.isArray(lines) ? lines : [lines]; L.forEach((t, i) => x.fillText(t, w / 2, h * .38 + (i - (L.length - 1) / 2) * size * 1.15)); }); }

// texto solto (Zzz, ?, !)
export function wordTex(t, col = '#F2C14E', size = 140, w = 256, h = 200) { return canvasTex(w, h, (x) => { x.clearRect(0, 0, w, h); x.font = `900 ${size}px Fraunces`; x.textAlign = 'center'; x.textBaseline = 'middle'; x.lineWidth = 12; x.strokeStyle = '#2A2A34'; x.strokeText(t, w / 2, h / 2); x.fillStyle = col; x.fillText(t, w / 2, h / 2); }); }

// relógio de parede: desenha ponteiros (h, m em horas decimais); vazio = só a marca
export function drawClock(x, hrs, o = {}) { const { S = 256, vazio = false, face = '#FBF7EC', rim = '#2A2A34' } = o; x.clearRect(0, 0, S, S); const r = S * .46; x.save(); x.translate(S / 2, S / 2);
  if (vazio) { x.fillStyle = 'rgba(255,232,205,.35)'; x.beginPath(); x.arc(0, 0, r * .95, 0, 7); x.fill(); x.setLineDash([14, 12]); x.strokeStyle = '#FFF0D8'; x.lineWidth = 9; x.beginPath(); x.arc(0, 0, r * .95, 0, 7); x.stroke(); x.restore(); return; }
  x.fillStyle = rim; x.beginPath(); x.arc(0, 0, r, 0, 7); x.fill(); x.fillStyle = face; x.beginPath(); x.arc(0, 0, r * .86, 0, 7); x.fill();
  x.fillStyle = rim; for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; x.save(); x.rotate(a); x.fillRect(-4, -r * .8, 8, i % 3 ? r * .1 : r * .18); x.restore(); }
  const hand = (a, l, wd) => { x.save(); x.rotate(a); x.fillRect(-wd / 2, -l, wd, l + 10); x.restore(); };
  hand((hrs % 12) / 12 * Math.PI * 2, r * .5, 12); hand((hrs % 1) * Math.PI * 2, r * .72, 7); x.fillStyle = '#C9361F'; x.beginPath(); x.arc(0, 0, 10, 0, 7); x.fill(); x.restore(); }
export function clock(sz = .6, hrs = 3, o = {}) { const cv = document.createElement('canvas'); cv.width = cv.height = 256; const x = cv.getContext('2d'); const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; const m = new THREE.Mesh(new THREE.PlaneGeometry(sz, sz), new THREE.MeshStandardMaterial({ map: t, transparent: true, alphaTest: .05, side: THREE.DoubleSide, roughness: .7 })); m.set = (h, oo = {}) => { drawClock(x, h, { ...o, ...oo }); t.needsUpdate = true; }; m.set(hrs); return m; }

// texto em placa plana (para painéis, telas)
export function textTex(lines, o = {}) { const { w = 512, h = 256, bg = '#10141E', fg = '#FFFFFF', size = 80, font = 'Inter', weight = 800 } = o; return canvasTex(w, h, (x) => { x.fillStyle = bg; x.fillRect(0, 0, w, h); x.fillStyle = fg; x.font = `${weight} ${size}px ${font}`; x.textAlign = 'center'; x.textBaseline = 'middle'; const L = Array.isArray(lines) ? lines : [lines]; L.forEach((t, i) => x.fillText(t, w / 2, h / 2 + (i - (L.length - 1) / 2) * size * 1.15)); }); }
export function screen(c, lines, w, h, o = {}) { const t = textTex(lines, o); const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: t, toneMapped: false })); c.add(m); return m; }
