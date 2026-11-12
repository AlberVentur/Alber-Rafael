// Desenhos pintados deste vídeo: carteira, polilla, nota, pão, sapato, violão, sobre de cavala, moeda antiga.
import { canvasTex } from './motor/char.js';

export const walletTex = () => canvasTex(512, 320, (x) => { x.clearRect(0, 0, 512, 320);
  x.fillStyle = '#6B3A22'; x.beginPath(); x.roundRect(10, 40, 492, 270, 26); x.fill();
  x.fillStyle = '#8A4E2E'; x.beginPath(); x.roundRect(24, 54, 228, 242, 18); x.fill(); x.beginPath(); x.roundRect(262, 54, 226, 242, 18); x.fill();
  x.fillStyle = '#4A2614'; x.fillRect(250, 40, 12, 270);
  x.strokeStyle = '#C98E5E'; x.setLineDash([10, 8]); x.lineWidth = 4; x.strokeRect(36, 66, 204, 218); x.strokeRect(274, 66, 202, 218); x.setLineDash([]);
  x.fillStyle = '#3A1E10'; x.fillRect(290, 110, 170, 14); x.fillRect(290, 160, 170, 14); x.fillRect(52, 110, 170, 14);
  x.fillStyle = '#2A140A'; x.beginPath(); x.ellipse(138, 220, 70, 30, 0, 0, 7); x.fill(); });

export const mothTex = () => canvasTex(128, 96, (x) => { x.clearRect(0, 0, 128, 96); x.fillStyle = '#D8CDB8'; x.beginPath(); x.ellipse(36, 44, 34, 24, -.4, 0, 7); x.fill(); x.beginPath(); x.ellipse(92, 44, 34, 24, .4, 0, 7); x.fill(); x.fillStyle = '#8A7E6A'; x.beginPath(); x.ellipse(64, 50, 9, 24, 0, 0, 7); x.fill(); x.strokeStyle = '#5A4E3A'; x.lineWidth = 3; x.beginPath(); x.moveTo(60, 28); x.lineTo(50, 10); x.moveTo(68, 28); x.lineTo(78, 10); x.stroke(); });

export const billTex = (txt = '100', c = '#7FB08A') => canvasTex(320, 150, (x) => { x.fillStyle = c; x.fillRect(0, 0, 320, 150); x.strokeStyle = '#2F5A3A'; x.lineWidth = 6; x.strokeRect(10, 10, 300, 130); x.fillStyle = '#2F5A3A'; x.beginPath(); x.arc(160, 75, 40, 0, 7); x.fill(); x.fillStyle = c; x.font = '900 40px Fraunces'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('$', 160, 78); x.fillStyle = '#2F5A3A'; x.font = '900 34px Fraunces'; x.fillText(txt, 50, 38); x.fillText(txt, 270, 115); });

export const debtTex = (i) => canvasTex(200, 260, (x) => { x.fillStyle = '#F6F2E8'; x.fillRect(0, 0, 200, 260); x.fillStyle = '#C9361F'; x.font = '900 34px Fraunces'; x.textAlign = 'center'; x.fillText(['FACTURA', 'DEUDA', 'PRÉSTAMO', 'TARJETA'][i % 4], 100, 50); x.fillStyle = '#8A8478'; for (let k = 0; k < 7; k++) x.fillRect(20, 80 + k * 22, 160 - (k % 3) * 30, 8); x.fillStyle = '#1A1A24'; x.font = '800 30px Inter'; x.fillText('$ ' + (120 + i * 37 % 900), 100, 240); });

export const breadTex = () => canvasTex(256, 128, (x) => { x.clearRect(0, 0, 256, 128); const g = x.createLinearGradient(0, 0, 0, 128); g.addColorStop(0, '#E9A85A'); g.addColorStop(1, '#A8622A'); x.fillStyle = g; x.beginPath(); x.ellipse(128, 70, 118, 52, 0, 0, 7); x.fill(); x.strokeStyle = '#F6D7A0'; x.lineWidth = 7; for (let i = 0; i < 4; i++) { x.beginPath(); x.moveTo(60 + i * 40, 40); x.lineTo(84 + i * 40, 96); x.stroke(); } });

export const shoeTex = () => canvasTex(256, 160, (x) => { x.clearRect(0, 0, 256, 160); x.fillStyle = '#2F5A8A'; x.beginPath(); x.moveTo(20, 120); x.lineTo(30, 50); x.quadraticCurveTo(70, 30, 110, 60); x.lineTo(200, 80); x.quadraticCurveTo(245, 90, 240, 125); x.closePath(); x.fill(); x.fillStyle = '#F4F0E4'; x.fillRect(16, 118, 228, 22); x.strokeStyle = '#F4F0E4'; x.lineWidth = 5; for (let i = 0; i < 4; i++) { x.beginPath(); x.moveTo(70 + i * 16, 58 + i * 4); x.lineTo(90 + i * 16, 70 + i * 4); x.stroke(); } });

export const guitarTex = () => canvasTex(160, 420, (x) => { x.clearRect(0, 0, 160, 420); x.fillStyle = '#5A3420'; x.fillRect(68, 10, 24, 220); x.fillStyle = '#2A1810'; x.fillRect(60, 0, 40, 36); x.fillStyle = '#D98A3E'; x.beginPath(); x.ellipse(80, 270, 56, 50, 0, 0, 7); x.ellipse(80, 350, 72, 66, 0, 0, 7); x.fill(); x.fillStyle = '#2A1810'; x.beginPath(); x.arc(80, 300, 22, 0, 7); x.fill(); x.fillStyle = '#5A3420'; x.fillRect(52, 360, 56, 12); x.strokeStyle = '#EDE3D2'; x.lineWidth = 1.5; for (let i = 0; i < 4; i++) { x.beginPath(); x.moveTo(74 + i * 4, 20); x.lineTo(74 + i * 4, 366); x.stroke(); } });

export const fishTex = () => canvasTex(256, 180, (x) => { x.clearRect(0, 0, 256, 180); x.fillStyle = '#C9CDD2'; x.beginPath(); x.roundRect(10, 10, 236, 160, 18); x.fill(); x.fillStyle = '#2F6E9A'; x.fillRect(10, 10, 236, 40); x.fillStyle = '#fff'; x.font = '900 30px Inter'; x.textAlign = 'center'; x.fillText('CABALLA', 128, 42); x.fillStyle = '#4A86C7'; x.beginPath(); x.ellipse(118, 112, 70, 30, 0, 0, 7); x.fill(); x.beginPath(); x.moveTo(180, 112); x.lineTo(220, 82); x.lineTo(220, 142); x.fill(); x.fillStyle = '#1A1A24'; x.beginPath(); x.arc(70, 104, 6, 0, 7); x.fill(); x.strokeStyle = '#2A5A8A'; x.lineWidth = 4; for (let i = 0; i < 4; i++) { x.beginPath(); x.moveTo(100 + i * 18, 92); x.lineTo(110 + i * 18, 130); x.stroke(); } });

export const lydiaCoinTex = () => canvasTex(256, 256, (x) => { x.clearRect(0, 0, 256, 256); const g = x.createRadialGradient(100, 90, 10, 128, 128, 120); g.addColorStop(0, '#FFF0B0'); g.addColorStop(.5, '#D9A84A'); g.addColorStop(1, '#8A6020'); x.fillStyle = g; x.beginPath(); x.ellipse(128, 128, 116, 104, .3, 0, 7); x.fill(); x.fillStyle = '#7A5418'; x.beginPath(); x.ellipse(110, 120, 46, 30, 0, 0, 7); x.fill(); x.beginPath(); x.moveTo(80, 100); x.lineTo(60, 70); x.lineTo(96, 96); x.fill(); x.fillStyle = '#5A3C10'; x.beginPath(); x.arc(170, 140, 30, 0, 7); x.fill(); });

export const stinkTex = () => canvasTex(128, 256, (x) => { x.clearRect(0, 0, 128, 256); x.strokeStyle = '#9CCB5A'; x.lineWidth = 9; x.lineCap = 'round'; for (let k = 0; k < 3; k++) { x.beginPath(); for (let y = 250; y > 10; y -= 6) x.lineTo(24 + k * 40 + Math.sin(y * .06 + k) * 12, y); x.stroke(); } });

export const thoughtTex = (inner) => canvasTex(400, 400, (x) => { x.clearRect(0, 0, 400, 400); x.fillStyle = '#FBF7EC'; x.strokeStyle = '#2A2A34'; x.lineWidth = 8; x.beginPath(); x.ellipse(200, 170, 180, 140, 0, 0, 7); x.fill(); x.stroke(); for (const [cx, cy, r] of [[110, 330, 24], [70, 375, 14]]) { x.beginPath(); x.arc(cx, cy, r, 0, 7); x.fill(); x.stroke(); } x.drawImage(inner.image, 80, 90, 240, 160); });
