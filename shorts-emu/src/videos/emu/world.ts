// Mundo de «La guerra que Australia perdió contra los emús» (1932): el trigal de Australia Occidental, la granja con
// su molino, la cerca rota, la represa, el terreno irregular de la persecución, un termitero, un llano abierto y la
// oficina del ministro. Todo dibujado con código con las piezas de la skill (materiales de dos tonos, tinta del
// mundo, texturas pintadas, tarjetas planas iluminadas con sombra de contacto). Sin modelos de terceros.
import * as THREE from "three";
import { Pen, bodyFront, Outfit, Expr, SKINS, fxBurst } from "./toon";
import { emuSide, emuFront, EmuOpts } from "./emu_toon";
import { Pool, Actor, Fx, Stage, tier, light2D, blob, BODY } from "./troop";
import { Crowd } from "./crowd";
import { NOINK } from "./ink";
import { LIGHTS, LOOK, LightPreset, WorldLook } from "./lights";
import { TONE, CHAR, twoTone, untone } from "./shade";
import { rep, ctex, facadeHD, planksHD, cloudHD, CLOUD_DAY, CLOUD_GOLD } from "./paint";
import { FPS, SHOTS, ShotDef, Luz, camAt, smooth, FARM, FENCE_X, DAM, ROUGH, LOOKOUT, PLAIN, ARMS, OFFICE_X } from "./story";

// ---------------- luces ----------------
const DAY: LightPreset = { ...LIGHTS.day, el: 50, sunI: 2.9 };
const RAIN: LightPreset = { ...LIGHTS.day, el: 60, lit: [1.05, 1.06, 1.1], shade: [0.5, 0.52, 0.6], lift: [0.06, 0.07, 0.1], sunI: 1.6, charTint: [0.92, 0.94, 1.0] };
const GOLD: LightPreset = { ...LIGHTS.golden, el: 14 };
const ROOM: LightPreset = { ...LIGHTS.day, el: 62, lit: [1.45, 1.36, 1.2], shade: [0.42, 0.38, 0.42], lift: [0.08, 0.07, 0.08] };
const PRESET: Record<Luz, LightPreset> = { day: DAY, rain: RAIN, golden: GOLD, room: ROOM };
const SKY_DAY: WorldLook = { ...LOOK.day, sky: { c: ["#d8e6f0", "#b0d2ef", "#78b0e6", "#4f8fdc", "#3373cc"], e: [0, 3, 8, 16, 40] } };
const SKY_RAIN: WorldLook = { ...LOOK.day, sky: { c: ["#b9c0c8", "#a6aeb8", "#8e97a4", "#7a8492", "#666f7e"], e: [0, 4, 10, 20, 40] }, sat: 0.8 };
const LOOKS: Record<Luz, WorldLook> = { day: SKY_DAY, rain: SKY_RAIN, golden: LOOK.golden, room: SKY_DAY };
const GRADE_OF: Record<Luz, "day" | "golden"> = { day: "day", rain: "day", golden: "golden", room: "day" };
export const gradeOf = (id: number) => GRADE_OF[SHOTS[id - 1].luz];

const V = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);
const hh = (i: number, s = 0) => { const v = Math.sin(i * 127.1 + s * 311.7) * 43758.5453; return v - Math.floor(v); };
const lam = (p: THREE.MeshLambertMaterialParameters) => twoTone(new THREE.MeshLambertMaterial(p));
const matCache = new Map<string, THREE.Material>();
const M = (key: string, make: () => THREE.MeshLambertMaterialParameters) => { let m = matCache.get(key); if (!m) { m = lam(make()); matCache.set(key, m); } return m; };
const solid = (col: string) => M("c" + col, () => ({ color: col }));
const LIGHT = -2.1;

// ---------------- reparto (1932) ----------------
const KHAKI = "#8f7f55";
const MEREDITH: Outfit = { jacket: KHAKI, pants: KHAKI, boots: "#4a3020", hat: "slouch", moustache: "#5a4030", buttons: "#c9a24a", belt: "#5a4030", skin: SKINS[0], build: "stout" };
const soldier = (v: number): Outfit => ({ jacket: v % 2 ? "#9a8a5e" : KHAKI, pants: KHAKI, boots: "#4a3020", hat: "slouch", belt: "#5a4030", skin: SKINS[(v + 1) % 3], buttons: "#c9a24a" });
const farmer = (v: number): Outfit => ({ jacket: ["#7a5a3a", "#3f6a8a", "#8a3a2a", "#5a6a3a"][v % 4], pants: "#4a4a52", boots: "#4a3020", hat: v % 2 ? "cap" : "hair", cap: ["#6e5a42", "#3a3a42"][v % 2], hair: "#5a3b2a", skin: SKINS[v % 3], moustache: v % 3 === 1 ? "#5a3b2a" : undefined });
const MINISTER: Outfit = { jacket: "#2a2a34", pants: "#2a2a34", boots: "#151520", hat: "hair", hair: "#c8c8c8", moustache: "#c8c8c8", skin: SKINS[0], buttons: "#c9c9c9", build: "stout" };
const OFFICIAL: Outfit = { jacket: "#3a3a42", pants: "#3a3a42", boots: "#151520", hat: "cap", cap: "#3a3a42", skin: SKINS[1], buttons: "#c9a24a" };

// ---------------- texturas pintadas ----------------
const earthTex = () => ctex("earthAU", 512, 512, (g, r) => {
  g.fillStyle = "#c07a4c"; g.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 900; i++) { g.fillStyle = r() < 0.5 ? "rgba(150,82,46,0.4)" : "rgba(222,160,110,0.35)"; g.beginPath(); g.ellipse(r() * 512, r() * 512, 2 + r() * 8, 1 + r() * 3, r() * 3, 0, 6.3); g.fill(); }
  for (let i = 0; i < 120; i++) { const x = r() * 512, y = r() * 512; g.strokeStyle = "rgba(120,130,70,0.6)"; g.lineWidth = 2; for (let k = 0; k < 4; k++) { g.beginPath(); g.moveTo(x, y); g.lineTo(x + (r() - 0.5) * 10, y - 6 - r() * 8); g.stroke(); } }
});
const wheatTex = () => ctex("wheatAU", 512, 512, (g, r) => {
  g.fillStyle = "#d9b45a"; g.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 1800; i++) { const x = r() * 512, y = r() * 512; g.strokeStyle = r() < 0.5 ? "rgba(168,128,50,0.55)" : "rgba(245,220,140,0.6)"; g.lineWidth = 2; g.beginPath(); g.moveTo(x, y); g.lineTo(x + (r() - 0.5) * 6, y - 10 - r() * 8); g.stroke(); }
  for (let y = 0; y < 512; y += 32) { g.fillStyle = "rgba(150,110,40,0.18)"; g.fillRect(0, y, 512, 6); }
});
const waterTex = () => ctex("damWater", 512, 512, (g, r) => {
  g.fillStyle = "#6f9a8a"; g.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 120; i++) { const x = r() * 512, y = r() * 512, w = 10 + r() * 24; g.strokeStyle = r() < 0.7 ? "rgba(220,240,230,0.7)" : "rgba(40,80,70,0.5)"; g.lineWidth = 2.5; g.beginPath(); g.arc(x, y + w, w, Math.PI * 1.25, Math.PI * 1.75); g.stroke(); }
});
const ironTex = () => ctex("corrugated", 256, 256, (g) => {
  for (let x = 0; x < 256; x += 16) { const gr = g.createLinearGradient(x, 0, x + 16, 0); gr.addColorStop(0, "#9aa2a8"); gr.addColorStop(0.5, "#d4d9dc"); gr.addColorStop(1, "#8a9298"); g.fillStyle = gr; g.fillRect(x, 0, 16, 256); }
  g.fillStyle = "rgba(150,80,40,0.25)"; g.fillRect(0, 200, 256, 56);
});
const tuftTex = (kind: "wheat" | "grass") => ctex("tuft" + kind, 256, 256, (g, r) => {
  for (let i = 0; i < (kind === "wheat" ? 34 : 26); i++) {
    const x0 = 128 + (r() - 0.5) * 90, x1 = x0 + (r() - 0.5) * 70, y1 = 30 + r() * 80;
    g.strokeStyle = kind === "wheat" ? (r() < 0.5 ? "#c99a3e" : "#e8c66a") : (r() < 0.5 ? "#7a8a3a" : "#a2a85a"); g.lineWidth = 4; g.lineCap = "round";
    g.beginPath(); g.moveTo(x0, 256); g.quadraticCurveTo((x0 + x1) / 2, 150, x1, y1); g.stroke();
    if (kind === "wheat") { g.fillStyle = "#d8a84a"; g.strokeStyle = "#241726"; g.lineWidth = 2; g.beginPath(); g.ellipse(x1, y1 - 12, 6, 16, (x1 - x0) * 0.01, 0, 6.3); g.fill(); g.stroke(); }
  }
});
const flagAU = () => ctex("flagAU", 300, 150, (g) => { // bandera de Australia (1932): Union Jack, estrella de la Federación y Cruz del Sur
  g.fillStyle = "#1f2f7a"; g.fillRect(0, 0, 300, 150);
  g.save(); g.beginPath(); g.rect(0, 0, 150, 75); g.clip();
  g.strokeStyle = "#f4f4f4"; g.lineWidth = 15; g.beginPath(); g.moveTo(0, 0); g.lineTo(150, 75); g.moveTo(150, 0); g.lineTo(0, 75); g.stroke();
  g.strokeStyle = "#c8202a"; g.lineWidth = 5; g.stroke(); g.fillStyle = "#f4f4f4"; g.fillRect(60, 0, 30, 75); g.fillRect(0, 25, 150, 25); g.fillStyle = "#c8202a"; g.fillRect(66, 0, 18, 75); g.fillRect(0, 31, 150, 13); g.restore();
  const star = (x: number, y: number, r: number, n = 7) => { g.fillStyle = "#f4f4f4"; g.beginPath(); for (let i = 0; i < n * 2; i++) { const a = (i * Math.PI) / n - Math.PI / 2, rr = i % 2 ? r * 0.45 : r; g.lineTo(x + rr * Math.cos(a), y + rr * Math.sin(a)); } g.closePath(); g.fill(); };
  star(75, 112, 18); star(225, 120, 10); star(195, 70, 10); star(225, 25, 10); star(258, 60, 10); star(240, 85, 5, 5);
  g.strokeStyle = "#241726"; g.lineWidth = 6; g.strokeRect(0, 0, 300, 150);
});
const officeWall = () => ctex("ofWallAU", 512, 512, (g, r) => {
  g.fillStyle = "#e8dcc0"; g.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 40; i++) { g.fillStyle = `rgba(0,0,0,${0.02 + r() * 0.03})`; g.beginPath(); g.arc(r() * 512, r() * 512, 10 + r() * 40, 0, 6.3); g.fill(); }
  g.fillStyle = "#6e4a2e"; g.fillRect(0, 400, 512, 112); g.fillStyle = "#8a5e3a"; g.fillRect(0, 392, 512, 10);
});

// ---------------- dibujos en tarjeta ----------------
const paperDraw = (title: string, lines: string[], total?: string, big = false) => (p: Pen) => { // 400 x 600
  const g = p.g;
  g.fillStyle = "#f7f0dc"; g.beginPath(); g.moveTo(14, 10); g.lineTo(386, 14); g.lineTo(390, 590); g.lineTo(10, 586); g.closePath(); g.fill();
  g.strokeStyle = "#241726"; g.lineWidth = 7; g.stroke();
  g.fillStyle = "#241726"; g.textAlign = "center"; g.font = `bold ${big ? 46 : 42}px Georgia, serif`; g.fillText(title, 200, 80);
  g.font = `${big ? 40 : 30}px Georgia, serif`; g.textAlign = "left";
  lines.forEach((l, i) => g.fillText(l, 36, 160 + i * (big ? 70 : 44)));
  if (total) { g.font = "bold 40px Georgia, serif"; g.fillStyle = "#b0262c"; g.textAlign = "center"; g.fillText(total, 200, 540); }
};
const NEWS = (p: Pen) => { // 600 x 420: periódico de 1931
  const g = p.g;
  g.fillStyle = "#efe6cf"; g.fillRect(8, 8, 584, 404); g.strokeStyle = "#241726"; g.lineWidth = 8; g.strokeRect(8, 8, 584, 404);
  g.fillStyle = "#241726"; g.textAlign = "center"; g.font = "bold 40px Georgia, serif"; g.fillText("EL DIARIO DEL CAMPO", 300, 58);
  g.fillRect(30, 72, 540, 5); g.font = "bold 50px Georgia, serif"; g.fillText("EL TRIGO SE HUNDE", 300, 140);
  g.strokeStyle = "#241726"; g.lineWidth = 4; g.strokeRect(40, 170, 250, 210);
  g.strokeStyle = "#b0262c"; g.lineWidth = 9; g.beginPath(); g.moveTo(60, 200); g.lineTo(120, 230); g.lineTo(160, 290); g.lineTo(210, 300); g.lineTo(270, 360); g.stroke();
  g.fillStyle = "#b0262c"; g.beginPath(); g.moveTo(270, 375); g.lineTo(282, 345); g.lineTo(254, 352); g.fill();
  g.fillStyle = "#6a5f50"; for (let k = 0; k < 9; k++) g.fillRect(310, 180 + k * 22, 250 - (k % 3) * 30, 9);
};
const REPORT = paperDraw("INFORME", ["Mayor G. P. W. Meredith", "Campion, 10-XII-1932", "", "Emús abatidos:  986", "Balas usadas:  9.860"], "10 balas por pájaro");
const phoneDraw = (p: Pen) => { // 256 x 256: teléfono de candelero de los años 30
  const g = p.g; g.fillStyle = "#1d1d22"; g.strokeStyle = "#241726"; g.lineWidth = 6;
  g.beginPath(); g.ellipse(128, 236, 70, 16, 0, 0, 6.3); g.fill(); g.fillRect(118, 70, 20, 166);
  g.beginPath(); g.ellipse(128, 64, 34, 22, 0, 0, 6.3); g.fill(); g.fillStyle = "#b8963a"; g.beginPath(); g.arc(128, 64, 10, 0, 6.3); g.fill();
  g.fillStyle = "#1d1d22"; g.fillRect(170, 90, 18, 70); g.beginPath(); g.ellipse(179, 162, 22, 14, 0, 0, 6.3); g.fill();
};
const rabbitDraw = (ph: number) => (p: Pen) => { // 256 x 256: conejo de perfil
  const g = p.g, y = 170 - Math.abs(Math.sin(ph * Math.PI)) * 50;
  g.fillStyle = "#a39a8e"; g.strokeStyle = "#241726"; g.lineWidth = 7;
  g.beginPath(); g.ellipse(128, y + 30, 58, 40, 0, 0, 6.3); g.fill(); g.stroke();
  g.beginPath(); g.ellipse(184, y - 6, 28, 24, 0, 0, 6.3); g.fill(); g.stroke();
  for (const dx of [0, 14]) { g.beginPath(); g.ellipse(176 + dx, y - 50, 9, 30, 0.2, 0, 6.3); g.fill(); g.stroke(); }
  g.fillStyle = "#f4f1ea"; g.beginPath(); g.arc(70, y + 22, 13, 0, 6.3); g.fill(); g.stroke();
  g.fillStyle = "#241726"; g.beginPath(); g.arc(194, y - 10, 4, 0, 6.3); g.fill();
};
const dartboardDraw = (ph: number) => (p: Pen) => { // 600 x 1000: diana con patas que corre
  const g = p.g, cx = 300, cy = 440;
  for (const s of [-1, 1]) { const a = Math.sin((ph + (s > 0 ? 0.5 : 0)) * Math.PI * 2) * 0.6; p.line([[cx + s * 50, cy + 200], [cx + s * 60 + Math.sin(a) * 90, 975 - Math.max(0, Math.cos((ph + (s > 0 ? 0.5 : 0)) * Math.PI * 2)) * 60]], "#3a3a42", 22); }
  const rings = ["#1d1d22", "#e8dcc0", "#c8202a", "#2f7a4a", "#e8dcc0", "#c8202a"];
  rings.forEach((c, i) => { g.fillStyle = c; g.beginPath(); g.arc(cx, cy, 230 - i * 38, 0, 6.3); g.fill(); });
  g.strokeStyle = "#241726"; g.lineWidth = 10; g.beginPath(); g.arc(cx, cy, 230, 0, 6.3); g.stroke();
  g.fillStyle = "#241726"; for (const dx of [-60, 60]) { g.beginPath(); g.arc(cx + dx, cy - 70, 16, 0, 6.3); g.fill(); }
  g.lineWidth = 8; g.beginPath(); g.arc(cx, cy - 20, 40, 0.2, Math.PI - 0.2); g.stroke();
};
const dartDraw = (p: Pen) => { // 256 x 64
  const g = p.g; g.fillStyle = "#c8202a"; g.strokeStyle = "#241726"; g.lineWidth = 4;
  g.beginPath(); g.moveTo(20, 32); g.lineTo(60, 12); g.lineTo(60, 52); g.closePath(); g.fill(); g.stroke();
  g.fillStyle = "#b8b8c0"; g.fillRect(60, 26, 150, 12); g.strokeRect(60, 26, 150, 12);
  g.beginPath(); g.moveTo(210, 26); g.lineTo(250, 32); g.lineTo(210, 38); g.closePath(); g.fill(); g.stroke();
};
const coinsDraw = (p: Pen) => { // 400 x 300: bolsa y monedas
  const g = p.g; g.strokeStyle = "#241726"; g.lineWidth = 7;
  g.fillStyle = "#b89a6a"; g.beginPath(); g.moveTo(60, 280); g.quadraticCurveTo(20, 150, 110, 110); g.lineTo(150, 110); g.quadraticCurveTo(240, 150, 200, 280); g.closePath(); g.fill(); g.stroke();
  g.fillStyle = "#241726"; g.font = "bold 70px Georgia, serif"; g.textAlign = "center"; g.fillText("£", 130, 230);
  for (let k = 0; k < 6; k++) { g.fillStyle = "#e8c45a"; g.beginPath(); g.ellipse(300, 270 - k * 24, 70, 20, 0, 0, 6.3); g.fill(); g.stroke(); }
};
const shieldDraw = (p: Pen) => { // 1000 x 1200: escudo caricaturizado con el canguro y el emú (no es el escudo oficial)
  const g = p.g; g.strokeStyle = "#241726"; g.lineWidth = 14;
  g.fillStyle = "#e8c45a"; g.beginPath(); for (let k = 0; k < 14; k++) { const a = (k * Math.PI) / 7 - Math.PI / 2, r = k % 2 ? 40 : 95; g.lineTo(500 + r * Math.cos(a), 150 + r * Math.sin(a)); } g.closePath(); g.fill(); g.stroke();
  g.fillStyle = "#f1ece0"; g.beginPath(); g.moveTo(330, 260); g.lineTo(670, 260); g.lineTo(670, 640); g.quadraticCurveTo(500, 780, 330, 640); g.closePath(); g.fill(); g.stroke();
  const cols = ["#c8202a", "#1f3a7a", "#2f7a4a", "#e8c45a", "#1f3a7a", "#c8202a"];
  for (let i = 0; i < 6; i++) { g.fillStyle = cols[i]; g.fillRect(345 + (i % 3) * 104, 275 + Math.floor(i / 3) * 170, 96, 160); }
  g.lineWidth = 10; g.strokeRect(345, 275, 312, 330);
  // canguro (izquierda)
  g.fillStyle = "#b8743a"; g.lineWidth = 12;
  g.beginPath(); g.ellipse(210, 560, 110, 170, -0.2, 0, 6.3); g.fill(); g.stroke();
  g.beginPath(); g.ellipse(250, 360, 60, 52, 0, 0, 6.3); g.fill(); g.stroke();
  for (const dx of [-24, 12]) { g.beginPath(); g.ellipse(250 + dx, 300, 18, 44, 0.1, 0, 6.3); g.fill(); g.stroke(); }
  g.beginPath(); g.moveTo(130, 690); g.quadraticCurveTo(40, 860, 120, 950); g.lineWidth = 40; g.strokeStyle = "#b8743a"; g.stroke(); g.lineWidth = 12; g.strokeStyle = "#241726";
  g.beginPath(); g.ellipse(250, 900, 90, 26, 0, 0, 6.3); g.fill(); g.stroke();
  g.fillStyle = "#241726"; g.beginPath(); g.arc(266, 350, 7, 0, 6.3); g.fill();
  // emú (derecha)
  g.fillStyle = "#6b5a4b"; g.beginPath(); g.ellipse(800, 600, 140, 120, 0, 0, 6.3); g.fill(); g.stroke();
  g.lineWidth = 46; g.strokeStyle = "#8194aa"; g.beginPath(); g.moveTo(760, 500); g.quadraticCurveTo(720, 380, 740, 290); g.stroke(); g.lineWidth = 12; g.strokeStyle = "#241726";
  g.fillStyle = "#5a4d44"; g.beginPath(); g.ellipse(740, 270, 46, 38, 0, 0, 6.3); g.fill(); g.stroke();
  g.fillStyle = "#3c342e"; g.beginPath(); g.moveTo(700, 262); g.lineTo(650, 276); g.lineTo(700, 288); g.closePath(); g.fill(); g.stroke();
  g.fillStyle = "#241726"; g.beginPath(); g.arc(728, 262, 7, 0, 6.3); g.fill();
  g.strokeStyle = "#8e8a7e"; g.lineWidth = 22; for (const dx of [-40, 40]) { g.beginPath(); g.moveTo(800 + dx, 700); g.lineTo(800 + dx * 1.3, 930); g.stroke(); }
  // ramas de acacia dorada abajo
  g.strokeStyle = "#5a7a3a"; g.lineWidth = 14; g.beginPath(); g.moveTo(200, 1000); g.quadraticCurveTo(500, 1080, 800, 1000); g.stroke();
  g.fillStyle = "#f2c230"; for (let k = 0; k < 16; k++) { g.beginPath(); g.arc(220 + k * 38, 1010 + Math.sin(k) * 18 + (k % 2) * 20, 16, 0, 6.3); g.fill(); }
};
const smokeDraw = (c: string) => (p: Pen) => {
  const g = p.g;
  for (const [x, y, r, a] of [[128, 140, 110, 0.6], [96, 120, 70, 0.45], [160, 110, 76, 0.45], [128, 90, 60, 0.4]] as const) {
    const gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, `rgba(${c},${a})`); gr.addColorStop(0.6, `rgba(${c},${a * 0.6})`); gr.addColorStop(1, `rgba(${c},0)`);
    g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
  }
};
const DUST = "196,140,98", PUFF = "236,232,226";
const muzzleDraw = (d: number) => (p: Pen) => {
  const star = (r0: number, r1: number, n: number, col: string, rot: number) => { const pts: [number, number][] = []; for (let i = 0; i < n * 2; i++) { const a = rot + (i * Math.PI) / n, r = i % 2 ? r0 : r1 * (0.8 + 0.2 * Math.sin(i * 2.3 + d)); pts.push([128 + r * Math.cos(a), 128 + r * Math.sin(a)]); } p.poly(pts, col, 0); };
  star(36, 120, 8, "#ff7a1a", d * 0.5); star(26, 88, 8, "#ffd84a", d * 0.5 + 0.2); p.ell(128, 128, 30, 30, "#fffbe6", 0);
};
const burstDraw = (t: number) => (p: Pen) => fxBurst(p, t, "#ffd23f", 10, 40, 230);

// ---------------- lluvia (partículas que caen) ----------------
const RN = { n: 9000, b: 40, h: 16 };
const RAIN_VS = `attribute vec4 aSeed; uniform float uT; uniform vec3 uCam; uniform float uPx; varying float vA;
void main() { float B = ${RN.b.toFixed(1)}, H = ${RN.h.toFixed(1)}; vec3 p = position;
  p.y = mod(p.y - uT * (9.0 + 4.0 * aSeed.x), H); p.xz = uCam.xz + mod(p.xz - uCam.xz + 0.5 * B, B) - 0.5 * B; p.y += uCam.y - 6.0;
  vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_PointSize = clamp(0.05 * uPx / max(0.1, -mv.z), 1.5, 40.0); vA = smoothstep(0.5, 2.0, -mv.z) * (0.4 + 0.4 * aSeed.y);
  gl_Position = projectionMatrix * mv; }`;
const RAIN_FS = `uniform float uFade; varying float vA; void main() { vec2 d = gl_PointCoord - 0.5; if (abs(d.x) > 0.12) discard; gl_FragColor = vec4(vec3(0.85, 0.9, 1.0) * vA * uFade, vA * uFade); }`;

// ---------------- geometría ----------------
const boxAt = (root: THREE.Object3D, x0: number, x1: number, y0: number, y1: number, z0: number, z1: number, mat: THREE.Material | THREE.Material[], cast = true) => {
  const m = new THREE.Mesh(new THREE.BoxGeometry(x1 - x0, y1 - y0, z1 - z0), mat);
  m.position.set((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2); m.castShadow = cast; m.receiveShadow = true; root.add(m); return m;
};
const cyl = (root: THREE.Object3D, r0: number, r1: number, h: number, mat: THREE.Material, x: number, y: number, z: number, n = 16, cast = true) => {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r0, r1, h, n), mat); m.position.set(x, y + h / 2, z); m.castShadow = cast; m.receiveShadow = true; root.add(m); return m;
};
/** terreno irregular de la persecución (misma función para la malla y para el camión) */
export const roughY = (x: number, z: number) => {
  const inX = smooth((x - ROUGH.x0 + 10) / 20) * (1 - smooth((x - ROUGH.x1 - 10) / 20)), inZ = 1 - smooth((Math.abs(z - ROUGH.z) - 18) / 10);
  return inX * inZ * (0.32 * Math.sin(x * 0.55) * Math.cos(z * 0.7) + 0.22 * Math.sin(x * 1.3 + z * 0.4) + 0.12 * Math.sin(x * 2.9));
};
const farmhouse = (root: THREE.Object3D, x: number, z: number, yaw: number, s = 1) => {
  const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = yaw; g.scale.setScalar(s); root.add(g);
  const fac = M("farmFac", () => ({ map: facadeHD("farm10x3", 10, 3.5, { wall: "#e9dcc0", shutter: "#3f6a5a", door: true, timber: false }) }));
  const side = M("farmSide", () => ({ map: facadeHD("farm8x3", 8, 3.5, { wall: "#e9dcc0", shutter: "#3f6a5a" }) }));
  boxAt(g, -5, 5, 0, 3.5, -4, 4, [side, side, solid("#e9dcc0"), solid("#e9dcc0"), fac, fac]);
  const iron = M("iron", () => ({ map: rep(ironTex(), 4, 1), side: THREE.DoubleSide }));
  for (const s2 of [-1, 1]) { const r = new THREE.Mesh(new THREE.PlaneGeometry(11.2, 5.4), iron); r.position.set(0, 4.55, s2 * 2.15); r.rotation.x = -s2 * 0.62 - Math.PI / 2 * 0; r.rotation.set(s2 * (Math.PI / 2 - 0.62) * -1 + (s2 > 0 ? 0 : 0), 0, 0); r.rotation.x = s2 > 0 ? -0.95 : 0.95; r.castShadow = true; r.receiveShadow = true; g.add(r); }
  boxAt(g, -5, 5, 2.7, 2.85, 4, 6.4, iron); // veranda
  for (let k = 0; k < 5; k++) boxAt(g, -4.8 + k * 2.4, -4.6 + k * 2.4, 0, 2.75, 6.1, 6.3, solid("#e9dcc0"));
  for (const s2 of [-1, 1]) { const gab = new THREE.Shape(); gab.moveTo(-4, 3.5); gab.lineTo(4, 3.5); gab.lineTo(0, 6.1); gab.closePath(); const m = new THREE.Mesh(new THREE.ShapeGeometry(gab), solid("#e2d4b4")); m.rotation.y = Math.PI / 2; m.position.x = s2 * 5; g.add(m); }
  cyl(g, 0.35, 0.35, 1.2, solid("#9a6a4a"), 3.2, 4.2, -1.5, 8);
  return g;
};
const windmill = (root: THREE.Object3D, x: number, z: number) => {
  const metal = solid("#9aa2a8");
  for (const [dx, dz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) { const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 9.2, 6), metal); leg.position.set(x + dx * 0.65, 4.5, z + dz * 0.65); leg.rotation.set(dz * 0.07, 0, -dx * 0.07); leg.castShadow = true; root.add(leg); }
  for (let k = 1; k < 5; k++) boxAt(root, x - 1.3 + k * 0.15, x + 1.3 - k * 0.15, k * 1.8, k * 1.8 + 0.06, z - 0.05, z + 0.05, metal);
  const wheel = new THREE.Group(); wheel.position.set(x, 9.3, z + 0.7); root.add(wheel);
  for (let k = 0; k < 14; k++) { const b = new THREE.Mesh(new THREE.BoxGeometry(0.34, 1.5, 0.03).translate(0, 1.0, 0), metal); b.rotation.set(0, 0.3, (k / 14) * Math.PI * 2); b.castShadow = true; wheel.add(b); }
  const tail = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.9, 1.8), solid("#c8202a")); tail.position.set(x, 9.3, z - 1.4); root.add(tail);
  cyl(root, 1.4, 1.4, 1.4, M("tank", () => ({ map: rep(ironTex(), 3, 1) })), x + 3.2, 0, z, 18);
  return wheel;
};
const gumTree = (root: THREE.Object3D, x: number, z: number, h: number, i: number) => {
  const bark = solid("#e8e0d0");
  const t = new THREE.Mesh(new THREE.CylinderGeometry(0.18 * h / 8, 0.32 * h / 8, h * 0.7, 8), bark); t.position.set(x, h * 0.35, z); t.rotation.z = (hh(i, 1) - 0.5) * 0.2; t.castShadow = true; root.add(t);
  const leaf = solid(i % 2 ? "#7a8f5e" : "#6c8456");
  for (let k = 0; k < 4; k++) { const c = new THREE.Mesh(new THREE.IcosahedronGeometry(h * (0.2 + 0.06 * hh(i * 4 + k, 2)), 1), leaf); c.position.set(x + (hh(i * 4 + k, 3) - 0.5) * h * 0.45, h * (0.68 + 0.18 * hh(i * 4 + k, 4)), z + (hh(i * 4 + k, 5) - 0.5) * h * 0.4); c.scale.y = 0.7; c.castShadow = true; c.receiveShadow = true; root.add(c); }
};
const lewis = (root: THREE.Object3D, x: number, y: number, z: number, yaw: number) => {
  const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.y = yaw; root.add(g);
  const dark = solid("#2b2b30"), wood = solid("#6e4a2e");
  const sh = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.95, 14), dark); sh.rotation.x = Math.PI / 2; sh.position.set(0, 0.42, 0.25); sh.castShadow = true; g.add(sh);
  const br = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.3, 8), dark); br.rotation.x = Math.PI / 2; br.position.set(0, 0.42, 0.85); g.add(br);
  const drum = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.06, 20), dark); drum.position.set(0, 0.53, -0.1); drum.castShadow = true; g.add(drum);
  boxAt(g, -0.05, 0.05, 0.33, 0.47, -0.45, -0.18, dark); boxAt(g, -0.045, 0.045, 0.27, 0.42, -0.85, -0.45, wood);
  for (const s of [-1, 1]) { const l = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.5, 6), dark); l.position.set(s * 0.15, 0.2, 0.55); l.rotation.z = s * 0.35; g.add(l); }
  return g;
};
const truck = (root: THREE.Object3D) => {
  const g = new THREE.Group(); root.add(g);
  const green = solid("#46603e"), black = solid("#1d1d22"), wood = solid("#8a5e3a");
  boxAt(g, -2.6, 2.6, 0.55, 0.75, -0.9, 0.9, black);            // chasis
  boxAt(g, 1.4, 2.7, 0.75, 1.55, -0.6, 0.6, green);             // capó
  boxAt(g, 2.68, 2.76, 0.75, 1.55, -0.55, 0.55, M("grille", () => ({ color: "#b8b8c0" })));
  boxAt(g, 0.3, 1.4, 0.75, 2.3, -0.9, 0.9, green);              // cabina
  boxAt(g, 0.95, 1.38, 1.65, 2.15, -0.92, 0.92, M("glass", () => ({ color: "#9fc4d8" })), false);
  boxAt(g, -2.6, 0.3, 0.75, 0.85, -1.0, 1.0, wood);             // plataforma
  for (const s of [-1, 1]) boxAt(g, -2.6, 0.3, 0.85, 1.35, s * 0.96 - 0.04, s * 0.96 + 0.04, wood);
  boxAt(g, -2.66, -2.58, 0.85, 1.35, -1.0, 1.0, wood);
  for (const [wx, wz] of [[1.9, -0.95], [1.9, 0.95], [-1.7, -0.95], [-1.7, 0.95]]) { const w = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.48, 0.26, 18), black); w.rotation.x = Math.PI / 2; w.position.set(wx, 0.48, wz); w.castShadow = true; g.add(w); const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.28, 12), solid("#8a8a90")); hub.rotation.x = Math.PI / 2; hub.position.copy(w.position); g.add(hub); }
  for (const s of [-1, 1]) boxAt(g, 1.3, 2.4, 0.95, 1.0, s * 0.95 - 0.18, s * 0.95 + 0.18, black);
  cyl(g, 0.05, 0.05, 0.9, black, -1.2, 0.85, 0, 6);
  lewis(g, -1.2, 1.25, 0, Math.PI / 2 * -1 + Math.PI);
  return g;
};
const fence = (root: THREE.Object3D, x: number, z0: number, z1: number, broken: [number, number]) => {
  const post = solid("#7a5a3a"), wire = solid("#5a5a60");
  for (let z = z0; z <= z1; z += 3) {
    const br = z > broken[0] - 1 && z < broken[1] + 1;
    const p = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 1.4, 6), post); p.position.set(x, 0.7, z); if (br) p.rotation.set(0.4 * (hh(z, 1) - 0.5), 0, 0.6 * (hh(z, 2) - 0.3)); p.castShadow = true; root.add(p);
  }
  for (const y of [0.45, 0.85, 1.25]) {
    for (const [a, b] of [[z0, broken[0]], [broken[1], z1]]) boxAt(root, x - 0.01, x + 0.01, y - 0.01, y + 0.01, a, b, wire, false);
    const hang = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.02, 1.6), wire); hang.position.set(x + 0.3, y * 0.4, broken[0] + 0.9); hang.rotation.set(0.6, 0.3, 0); root.add(hang);
  }
};

// ---------------- mundo ----------------
export class World {
  root = new THREE.Group();
  private pool = new Pool();
  private actors: Actor[] = [];
  private fxs: Fx[] = [];
  private hemi: THREE.HemisphereLight; private sun: THREE.DirectionalLight;
  private skyMat: THREE.ShaderMaterial; private sky: THREE.Mesh;
  private fog = new THREE.Fog("#bccbec", 120, 1500);
  private clouds: THREE.Mesh[] = []; private cloudMats: THREE.MeshBasicMaterial[] = [];
  private flockFar: Crowd; private flockDam: Crowd; private flockLook: Crowd;
  private wheel: THREE.Group; private truckG: THREE.Group; private table: THREE.Group; private flags: THREE.Mesh[] = [];
  private rainU = { uT: { value: 0 }, uCam: { value: new THREE.Vector3() }, uPx: { value: 1000 }, uFade: { value: 0 } };
  private sunCache = new Map<number, THREE.Vector3>();
  private frustum = new THREE.Frustum(); private m4 = new THREE.Matrix4(); private sph = new THREE.Sphere(); private v = new THREE.Vector3();

  constructor() {
    const R = this.root;
    this.skyMat = new THREE.ShaderMaterial({
      uniforms: { c0: { value: new THREE.Color() }, c1: { value: new THREE.Color() }, c2: { value: new THREE.Color() }, c3: { value: new THREE.Color() }, c4: { value: new THREE.Color() }, e: { value: new THREE.Vector4() } },
      vertexShader: "varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",
      fragmentShader: `uniform vec3 c0, c1, c2, c3, c4; uniform vec4 e; varying vec3 vP;
        void main(){ float el = asin(clamp(normalize(vP).y, -1.0, 1.0));
          vec3 c = mix(c0, c1, smoothstep(0.0, e.x, el)); c = mix(c, c2, smoothstep(e.x, e.y, el));
          c = mix(c, c3, smoothstep(e.y, e.z, el)); c = mix(c, c4, smoothstep(e.z, e.w, el)); gl_FragColor = vec4(c, 1.0); }`,
      side: THREE.BackSide, depthWrite: false, fog: false,
    });
    this.sky = new THREE.Mesh(new THREE.SphereGeometry(2400, 48, 24), this.skyMat);
    this.sky.renderOrder = -1; this.sky.frustumCulled = false; this.sky.layers.set(NOINK); R.add(this.sky);
    this.hemi = new THREE.HemisphereLight("#cfe6ff", "#6c5c8c", 1.1);
    this.sun = new THREE.DirectionalLight("#fff0d6", 2.6); this.sun.castShadow = true; this.sun.shadow.mapSize.set(2048, 2048);
    R.add(this.hemi, this.sun, this.sun.target);
    for (let i = 0; i < 26; i++) {
      const mat = new THREE.MeshBasicMaterial({ map: cloudHD(i % 4, CLOUD_DAY), transparent: true, depthWrite: false, fog: false }); this.cloudMats.push(mat);
      const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mat);
      const a = (i / 26) * Math.PI * 2 + hh(i, 20), d = 800 + hh(i, 21) * 500, w = 150 + hh(i, 23) * 130;
      m.position.set(Math.cos(a) * d, 90 + hh(i, 22) * 220, Math.sin(a) * d); m.scale.set(w, w / 2, 1); m.layers.set(NOINK); this.clouds.push(m); R.add(m);
    }
    // suelo de tierra roja (con el terreno irregular de la persecución)
    const gg = new THREE.PlaneGeometry(4000, 4000, 400, 400).rotateX(-Math.PI / 2);
    const pos = gg.attributes.position;
    for (let i = 0; i < pos.count; i++) pos.setY(i, roughY(pos.getX(i), pos.getZ(i)));
    gg.computeVertexNormals();
    const ground = new THREE.Mesh(gg, lam({ map: rep(earthTex(), 700, 700) })); ground.receiveShadow = true; R.add(ground);
    // trigales (al este de la cerca) y algunos más lejos
    const wheatM = lam({ map: rep(wheatTex(), 40, 40) });
    for (const [x0, x1, z0, z1] of [[FENCE_X, 160, -180, 30], [-200, -60, -200, -60], [180, 340, -260, -120], [-60, 40, -320, -220]]) {
      const w = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0, z1 - z0).rotateX(-Math.PI / 2), wheatM); w.position.set((x0 + x1) / 2, 0.02, (z0 + z1) / 2); w.receiveShadow = true; R.add(w);
    }
    // la granja y otras granjas lejanas
    farmhouse(R, FARM.x, FARM.z, 0);
    for (const [x, z, y] of [[-150, -100, 0.6], [200, -200, -0.4], [-40, -260, 0.2], [300, 40, 1.2]]) farmhouse(R, x, z, y);
    this.wheel = windmill(R, FARM.x + 12, FARM.z - 6);
    fence(R, FENCE_X, -60, 40, [-6, 0]);
    // la represa
    const dam = new THREE.Mesh(new THREE.CircleGeometry(DAM.r, 48).rotateX(-Math.PI / 2), lam({ map: rep(waterTex(), 6, 6) })); dam.position.set(DAM.x, 0.04, DAM.z); dam.receiveShadow = true; R.add(dam);
    const mud = new THREE.Mesh(new THREE.RingGeometry(DAM.r, DAM.r + 4, 48).rotateX(-Math.PI / 2), lam({ color: "#8a5a3a" })); mud.position.set(DAM.x, 0.03, DAM.z); mud.receiveShadow = true; R.add(mud);
    // escondite de los artilleros: matorrales junto a la represa
    for (let k = 0; k < 7; k++) { const b = new THREE.Mesh(new THREE.IcosahedronGeometry(0.7 + hh(k, 30) * 0.4, 1), solid("#6c8456")); b.position.set(DAM.x - 21 + k * 0.6 - 2, 0.4, DAM.z - 19.2 + (k % 2) * 0.4); b.scale.set(0.8, 0.6, 0.8); b.castShadow = true; R.add(b); }
    // termitero del vigía
    { const g = new THREE.ConeGeometry(2.4, 2.2, 14, 4); const p2 = g.attributes.position; for (let i = 0; i < p2.count; i++) { const x = p2.getX(i), y = p2.getY(i), z = p2.getZ(i); const n = 1 + 0.12 * Math.sin(Math.atan2(z, x) * 5 + y * 3); p2.setXYZ(i, x * n, y, z * n); } g.computeVertexNormals();
      const m = new THREE.Mesh(g, solid("#a8582e")); m.position.set(LOOKOUT.x, 1.1, LOOKOUT.z); m.scale.set(1, 1, 1); m.castShadow = true; m.receiveShadow = true; R.add(m);
      boxAt(R, LOOKOUT.x - 0.9, LOOKOUT.x + 0.9, 1.9, 2.2, LOOKOUT.z - 0.9, LOOKOUT.z + 0.9, solid("#a8582e")); }
    // eucaliptos y colinas
    for (let k = 0; k < 70; k++) { const a = hh(k, 40) * Math.PI * 2, d = 40 + hh(k, 41) * 260, x = Math.cos(a) * d + 40, z = Math.sin(a) * d + 40; if (x > FENCE_X - 3 && x < 160 && z > -180 && z < 30) continue; if (Math.hypot(x - DAM.x, z - DAM.z) < DAM.r + 6) continue; if (Math.abs(z - ROUGH.z) < 25 && x < ROUGH.x1 + 20 && x > ROUGH.x0 - 20) continue; if (Math.hypot(x - ARMS.x, z - ARMS.z) < 25 || Math.hypot(x - PLAIN.x, z - PLAIN.z) < 50 || Math.hypot(x - FARM.x, z - FARM.z) < 14) continue; gumTree(R, x, z, 7 + hh(k, 42) * 7, k); }
    for (const [x, z] of [[DAM.x + 18, DAM.z + 10], [DAM.x - 10, DAM.z + 20], [DAM.x + 6, DAM.z - 20]]) gumTree(R, x, z, 11, x + z);
    for (let k = 0; k < 18; k++) { const a = (k / 18) * Math.PI * 2, d = 900 + hh(k, 50) * 300; const h = new THREE.Mesh(new THREE.SphereGeometry(1, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), solid(k % 2 ? "#a8784e" : "#9a6a48")); h.position.set(Math.cos(a) * d, -2, Math.sin(a) * d); h.scale.set(140 + hh(k, 51) * 120, 30 + hh(k, 52) * 40, 90); R.add(h); }
    // tropa: camión, dos Lewis y cajas de munición (toma 7); la Lewis del ataque bajo la lluvia (toma 8) y de la represa (toma 9)
    this.truckG = truck(R);
    this.table = new THREE.Group(); R.add(this.table);
    { const wd = solid("#8a5e3a"); boxAt(this.table, FARM.x - 0.6, FARM.x + 0.9, 0.7, 0.8, FARM.z + 8.0, FARM.z + 8.9, wd); for (const [sx, sz] of [[-0.55, 8.05], [0.85, 8.05], [-0.55, 8.85], [0.85, 8.85]]) boxAt(this.table, FARM.x + sx - 0.04, FARM.x + sx + 0.04, 0, 0.7, FARM.z + sz - 0.04, FARM.z + sz + 0.04, wd); }
    lewis(R, -1.6, 0, 41.6, 0); lewis(R, 1.6, 0, 41.6, 0);
    for (let k = 0; k < 4; k++) boxAt(R, 2.6 + k * 0.62, 3.15 + k * 0.62, 0, 0.42 + (k % 2) * 0.42, 39.6, 40.2, M("crate", () => ({ map: rep(planksHD(), 0.3, 0.3), color: "#6a7a4a" })));
    lewis(R, 35, 0, 72.2, 0);
    lewis(R, DAM.x - 22.1, 0, DAM.z - 20.4, 0.7);
    lewis(R, 56.5, 0, 50.4, 0.1);
    // oficina del ministro (x 800): paredes, escritorios, bandera, mapa
    {
      const X = OFFICE_X;
      boxAt(R, X - 8, X + 8, -0.1, 0.02, -6, 7, M("ofFloorAU", () => ({ map: rep(planksHD(), 3, 3), color: "#c8a878" })), false);
      const w = M("ofWallAU", () => ({ map: officeWall() }));
      boxAt(R, X - 8, X + 8, 0, 5.5, -6.4, -6, w, false); boxAt(R, X - 8.4, X - 8, 0, 5.5, -6, 7, w, false); boxAt(R, X + 8, X + 8.4, 0, 5.5, -6, 7, w, false);
      boxAt(R, X - 8.4, X + 8.4, 5.5, 5.8, -6.4, 7, solid("#efe6d6"), false);
      const wd = solid("#6e4a2e");
      for (const dx of [0, -3.0]) { boxAt(R, X + dx - 1.4, X + dx + 1.4, 0.72, 0.82, -2.2, -0.9, wd); for (const [sx, sz] of [[-1.3, -2.1], [1.3, -2.1], [-1.3, -1.0], [1.3, -1.0]]) boxAt(R, X + dx + sx - 0.06, X + dx + sx + 0.06, 0, 0.72, sz - 0.06, sz + 0.06, wd); }
      const fl = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1.2), new THREE.MeshLambertMaterial({ map: flagAU() })); twoTone(fl.material as THREE.MeshLambertMaterial); fl.position.set(X + 2.2, 3.4, -5.95); R.add(fl);
      const map = new THREE.Mesh(new THREE.PlaneGeometry(2.0, 1.6), new THREE.MeshLambertMaterial({ map: ctex("mapAU", 400, 320, (g) => { g.fillStyle = "#e8dcc0"; g.fillRect(0, 0, 400, 320); g.fillStyle = "#c8a060"; g.beginPath(); g.moveTo(60, 120); g.lineTo(150, 60); g.lineTo(250, 70); g.lineTo(330, 120); g.lineTo(350, 200); g.lineTo(300, 260); g.lineTo(200, 250); g.lineTo(120, 270); g.lineTo(60, 220); g.closePath(); g.fill(); g.strokeStyle = "#241726"; g.lineWidth = 6; g.stroke(); g.fillStyle = "#c8202a"; g.beginPath(); g.arc(110, 200, 10, 0, 6.3); g.fill(); g.strokeRect(0, 0, 400, 320); }) }));
      twoTone(map.material as THREE.MeshLambertMaterial); map.position.set(X - 2.4, 3.3, -5.95); R.add(map);
    }
    // bandadas instanciadas (emús lejanos)
    const draws: ((p: Pen) => void)[] = [];
    for (let i = 0; i < 8; i++) draws.push((p) => (i % 4 === 3 ? emuFront(p, { seed: i, light: LIGHT }) : emuSide(p, { seed: i, light: LIGHT, eat: i % 2 ? 0.8 : 0, phase: i / 8 })));
    const at = (() => { const TW = 160, TH = 267, Kc = TW / 600, cols = 4, rows = 2; const cv = document.createElement("canvas"); cv.width = cols * TW; cv.height = rows * TH; const g = cv.getContext("2d")!;
      draws.forEach((d, i) => { g.setTransform(Kc, 0, 0, Kc, (i % cols) * TW, Math.floor(i / cols) * TH); d(new Pen(g)); });
      const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return { tex: t, cols, rows, n: 8 }; })();
    const scatter = (cx: number, cz: number, rx: number, rz: number, n: number, seed: number) => Array.from({ length: n }, (_, i) => ({ x: cx + (hh(i, seed) - 0.5) * 2 * rx, z: cz + (hh(i, seed + 1) - 0.5) * 2 * rz }));
    this.flockFar = new Crowd(R, at, [...scatter(85, -100, 70, 55, 2600, 60), ...scatter(160, -200, 120, 60, 1800, 61)], 1.3);
    this.flockDam = new Crowd(R, at, scatter(DAM.x + 8, DAM.z + 30, 30, 16, 900, 62).filter((q) => Math.hypot(q.x - DAM.x, q.z - DAM.z) > DAM.r + 2), 1.9);
    this.flockLook = new Crowd(R, at, scatter(LOOKOUT.x - 10, LOOKOUT.z - 12, 22, 14, 160, 63), 2.4);
    for (const c of [this.flockFar, this.flockDam, this.flockLook]) { c.mesh.scale.set(1, 0.86, 1); c.mesh.visible = false; }
    // lluvia
    {
      const N = RN.n, p3 = new Float32Array(N * 3), sd = new Float32Array(N * 4);
      for (let i = 0; i < N; i++) { p3.set([hh(i, 90) * RN.b, hh(i, 91) * RN.h, hh(i, 92) * RN.b], i * 3); sd.set([hh(i, 93), hh(i, 94), hh(i, 95), hh(i, 96)], i * 4); }
      const geo = new THREE.BufferGeometry(); geo.setAttribute("position", new THREE.BufferAttribute(p3, 3)); geo.setAttribute("aSeed", new THREE.BufferAttribute(sd, 4));
      const mat = new THREE.ShaderMaterial({ uniforms: this.rainU, transparent: true, depthWrite: false, vertexShader: RAIN_VS, fragmentShader: RAIN_FS });
      const pts = new THREE.Points(geo, mat); pts.frustumCulled = false; pts.layers.set(NOINK); pts.renderOrder = 5;
      const u = this.rainU.uPx; pts.onBeforeRender = (r, _s, c) => { const rt = r.getRenderTarget(), h = rt ? rt.height : r.domElement.height; u.value = h / (2 * Math.tan(THREE.MathUtils.degToRad((c as THREE.PerspectiveCamera).fov) / 2)); };
      R.add(pts);
    }
  }

  private shotSun(id: number) {
    let v = this.sunCache.get(id); if (v) return v;
    const s = SHOTS[id - 1], L = PRESET[s.luz];
    let fx = 0, fz = 0;
    for (let f = s.a; f < s.b; f += 3) { const c = camAt(id, f), x = c.look[0] - c.pos[0], z = c.look[2] - c.pos[2], n = Math.hypot(x, z) || 1; fx += x / n; fz += z / n; }
    const n = Math.hypot(fx, fz) || 1; fx /= n; fz /= n;
    const az = THREE.MathUtils.degToRad(s.luz === "golden" ? 25 : 135), el = THREE.MathUtils.degToRad(L.el);
    const hx = fx * Math.cos(az) - fz * Math.sin(az), hz = fz * Math.cos(az) + fx * Math.sin(az);
    v = new THREE.Vector3(hx * Math.cos(el), Math.sin(el), hz * Math.cos(el)).normalize(); this.sunCache.set(id, v); return v;
  }
  private actor(i: number) { while (this.actors.length <= i) this.actors.push(new Actor(this.root)); return this.actors[i]; }
  private fx(i: number) { while (this.fxs.length <= i) this.fxs.push(new Fx(this.root)); return this.fxs[i]; }

  update(id: number, f: number, cam: THREE.PerspectiveCamera, scene: THREE.Scene) {
    const S: ShotDef = SHOTS[id - 1], fi0 = Math.floor(f), t = f / FPS, L = PRESET[S.luz], K = LOOKS[S.luz];
    const c = camAt(id, f);
    cam.position.set(...c.pos); cam.up.set(0, 1, 0); cam.lookAt(...c.look);
    cam.fov = c.fov; cam.near = 0.1; cam.far = 5000; cam.updateProjectionMatrix(); cam.updateMatrixWorld(); cam.layers.enable(NOINK);
    const focus = V(...c.look), dist = cam.position.distanceTo(focus), sunDir = this.shotSun(id);
    this.hemi.color.set(L.sky); this.hemi.groundColor.set(L.ground); this.hemi.intensity = L.hemiI;
    this.sun.color.set(L.sunCol); this.sun.intensity = L.sunI;
    const Rr = THREE.MathUtils.clamp(dist * 1.15 + 10, 14, 140);
    this.sun.position.copy(focus).addScaledVector(sunDir, 400); this.sun.target.position.copy(focus);
    const sc = this.sun.shadow.camera; sc.left = -Rr; sc.right = Rr; sc.top = Rr; sc.bottom = -Rr; sc.near = 20; sc.far = 900; sc.updateProjectionMatrix();
    this.sun.shadow.bias = L.bias; this.sun.shadow.normalBias = L.normalBias * (Rr / 12);
    TONE.uLitCol.value.set(...L.lit); TONE.uShadeCol.value.set(...L.shade); TONE.uShadeLift.value.set(...L.lift);
    TONE.uLambert.value = L.lambert; TONE.uSideK.value = L.sideK; TONE.uTerm.value = L.term; TONE.uBounce.value.set(...K.bounce);
    TONE.uSat.value = S.luz === "rain" ? 0.8 : 0.95;
    CHAR.uCharTint.value.set(...L.charTint); CHAR.uCharShade.value = L.charShade; CHAR.uGrad.value = L.charGrad; CHAR.uBodyGrad.value = L.bodyGrad; CHAR.uSideTint.value.set(...L.sideTint);
    const su = this.skyMat.uniforms; K.sky.c.forEach((h, i) => untone(h, su["c" + i].value));
    const e = K.sky.e.map((deg) => THREE.MathUtils.degToRad(deg)); su.e.value.set(e[1], e[2], e[3], e[4]); this.sky.position.copy(cam.position);
    untone(S.luz === "golden" ? "#f2b98a" : S.luz === "rain" ? "#b9c0c8" : "#d8e6f0", this.fog.color);
    this.fog.near = S.fog[0]; this.fog.far = S.fog[1]; scene.fog = this.fog; scene.background = null;
    const pal = S.luz === "golden" ? CLOUD_GOLD : CLOUD_DAY;
    this.cloudMats.forEach((m, i) => { const want = cloudHD(i % 4, pal); if (m.map !== want) { m.map = want; m.needsUpdate = true; } m.color.setScalar(S.luz === "rain" ? 0.75 : 1); });
    for (const m of this.clouds) m.quaternion.copy(cam.quaternion);
    this.rainU.uT.value = t; this.rainU.uCam.value.copy(cam.position); this.rainU.uFade.value = id === 8 ? 1 - smooth((f - 1352) / 14) : 0;
    this.wheel.rotation.z = -t * 3; this.table.visible = id === 16;
    this.flockFar.mesh.visible = id === 4; this.flockDam.mesh.visible = id === 9; this.flockLook.mesh.visible = id === 12;
    this.flockDam.shift.value.set(0, 0, id === 9 ? -12 * smooth((f - 1600) / 140) + (f > 1755 ? 40 * smooth((f - 1760) / 60) : 0) : 0);
    // camión: estacionado (toma 7) o en la persecución (toma 10)
    if (id === 10) {
      const x = -192 + 102 * ((f - 1850) / 254), z = ROUGH.z, y = roughY(x, z), dx = (roughY(x + 1.3, z) - roughY(x - 1.3, z)) / 2.6, dz = (roughY(x, z + 0.9) - roughY(x, z - 0.9)) / 1.8;
      this.truckG.position.set(x, y, z); this.truckG.rotation.set(Math.atan(dz) * 1.2, 0, Math.atan(dx) * 1.3 + Math.sin(f * 1.7) * 0.02);
    } else { this.truckG.position.set(0, 0, 37.2); this.truckG.rotation.set(0, 0, 0); }

    // ---- reparto y efectos ----
    const right = V(0, 0, 0).setFromMatrixColumn(cam.matrixWorld, 0);
    const light = light2D(sunDir, right);
    const st: Stage = { places: [], fx: [] };
    this.frustum.setFromProjectionMatrix(this.m4.multiplyMatrices(cam.projectionMatrix, cam.matrixWorldInverse));
    const lidAt = (i: number) => { let s = Math.round(-60 * hh(i, 9)); for (let n = 0; s <= f && n < 200; n++) { const k = f - s; if (k >= 0 && k < 4) return [0.5, 1, 1, 0.5][k]; s += Math.round(15 + 54 * hh(i * 31 + n, 13)); } return 0; };
    const visible = (x: number, y: number, z: number, r: number) => this.frustum.intersectsSphere(this.sph.set(this.v.set(x, y, z), r));
    type FO = Parameters<typeof bodyFront>[2];
    const person = (who: string, o: Outfit, x: number, y: number, z: number, opts: FO, i: number, contact = true) => {
      if (!visible(x, y + 1.1, z, 3.5)) return;
      const d = cam.position.distanceTo(this.v.set(x, y + 1.2, z)), [w, h, k] = tier(d), near = d < 16;
      const o2 = { ...opts, light, seed: (i * 5 + 3) % 7 + 1, blink: near ? lidAt(i) : 0 };
      if (!near) o2.expr = "neutral";
      st.places.push({ key: `${who}|${JSON.stringify(o2)}`, x, y, z, size: [w, h, k], draw: (p) => bodyFront(p, o, o2) });
      if (contact && d < 60) blob(st, sunDir, x, y, z);
    };
    /** emú en tarjeta: dir +1 corre hacia +x del mundo, -1 hacia -x, 0 de frente */
    const emu = (key: string, x: number, y: number, z: number, o: EmuOpts, dir: number, i: number, contact = true) => {
      if (!visible(x, y + 1.0, z, 3)) return;
      const d = cam.position.distanceTo(this.v.set(x, y + 1.0, z)), [w, h, k] = tier(d);
      const o2: EmuOpts = { ...o, light, seed: i % 7, blink: d < 14 ? lidAt(i + 500) : 0 };
      const mirror = dir !== 0 && dir * right.x < 0;
      st.places.push({ key: `emu|${key}|${JSON.stringify(o2)}`, x, y, z, size: [w, h, k], mirror, draw: (p) => (dir === 0 ? emuFront(p, o2) : emuSide(p, o2)) });
      if (contact && d < 50) blob(st, sunDir, x, y, z);
    };
    const card = (key: string, draw: (p: Pen) => void, cw: number, ch: number, x: number, y: number, z: number, w: number, h: number, extra: Partial<{ soft: boolean; flat: boolean; rot: number }> = {}) => st.fx.push({ key, cw, ch, draw, x, y, z, w, h, ...extra });
    const dust = (x: number, y: number, z: number, i: number, s = 1) => { for (let k = 0; k < 3; k++) { const u = (t * 0.6 + k / 3 + i * 0.17) % 1, sz = (1.2 + u * 3) * s; card("dust", smokeDraw(DUST), 256, 256, x - u * 2 * s, y + 0.3 + u * 1.2 * s, z, sz, sz, { soft: true }); } };
    const tufts = (x0: number, x1: number, z0: number, z1: number, kind: "wheat" | "grass", step = 0.9) => { let i = 0; for (let x = x0; x <= x1; x += step) for (let z = z0; z <= z1; z += step) { const xx = x + (hh(i, 1) - 0.5) * step, zz = z + (hh(i, 2) - 0.5) * step; i++; const dc = cam.position.distanceTo(this.v.set(xx, 0.4, zz)); if (dc > 26 || dc < 3.2) continue; card(`tuft|${kind}`, (p) => p.g.drawImage(tuftTex(kind).image as HTMLCanvasElement, 0, 0), 256, 256, xx, 0.36, zz, 0.75, 0.72); } };
    const runPh = (rate: number, i: number) => (t * rate + hh(i, 7)) % 1;

    if (id === 1) { // los artilleros frente al campo lleno de emús
      person("gunner1", soldier(1), 57.4, 0, 49.6, { mode: "sit", expr: f > 128 ? "pained" : "stern", facing: 0 }, 11, false);
      person("meredith1", MEREDITH, 55.0, 0, 48.4, { mode: "stand", expr: f > 128 ? "nervous" : "stern", facing: 0 }, 1);
      for (let k = 0; k < 26; k++) { const x = 54 + hh(k, 3) * 14, z = 56 + hh(k, 4) * 24; emu(`h${k % 5}`, x, 0, z, { eat: k % 3 === 0 ? 0.8 : 0, expr: f > 128 && z < 62 ? "wink" : "lid", phase: runPh(1, k) }, k % 2 ? 1 : -1, k); }
      tufts(50, 64, 50, 64, "grass", 1.4);
    }
    if (id === 2) {
      person("farmerL", farmer(0), FARM.x - 1.0, 0, FARM.z + 7.5, { mode: "stand", expr: "smile", facing: 0, wave: f > 330 ? (Math.sin(t * 8) + 1) / 2 : undefined }, 2);
      person("farmerL2", farmer(2), FARM.x + 1.4, 0, FARM.z + 7.0, { mode: "stand", expr: "smile_closed", facing: 0 }, 3);
    }
    if (id === 3) {
      const ex: Expr = f < 455 ? "neutral" : f < 500 ? "shock" : "pained";
      person("farmerN", farmer(0), FARM.x - 1.0, 0, FARM.z + 7.5, { mode: "stand", expr: ex, facing: 0 }, 2);
      card("news", NEWS, 600, 420, FARM.x - 1.0, 0.98, FARM.z + 7.9, 0.78, 0.55);
    }
    if (id === 4) {
      for (let k = 0; k < (f >= 690 ? 0 : 40); k++) { const x = 30 + k * 2.2 - ((f - 555) / 30) * 2.5 + hh(k, 5) * 3, z = -8 - hh(k, 6) * 26; emu(`run${k % 4}`, x, 0, z, { run: 1, phase: runPh(2.6, k) }, -1, k); if (k % 6 === 0) dust(x + 1, 0, z, k); }
      if (f >= 690) {
        emu("big", 48, 0, -28.2, { expr: f > 735 ? "lid" : "happy", tall: 0.4, phase: 0 }, -1, 600);
        person("farmerScale", farmer(3), 46.5, 0, -28.0, { mode: "stand", expr: "shock", facing: 0 }, 4);
      }
    }
    if (id === 5) {
      for (let k = 0; k < 16; k++) { const x = 6 + hh(k, 8) * 16, z = -4 - hh(k, 9) * 12; emu(`eat${k % 4}`, x, 0, z, { eat: (Math.sin(t * 3 + k) + 1) / 2 * 0.9, phase: 0 }, k % 2 ? 1 : -1, k); }
      tufts(-4, 22, -14, 2, "wheat", 0.85);
      for (let k = 0; k < 4; k++) { const u = smooth((f - 880 - k * 12) / 50), x = FENCE_X + 3 - u * 7, z = -3.2 + k * 0.7; if (f > 870 + k * 12) card(`rabbit|${Math.floor((t * 6 + k) % 4)}`, rabbitDraw(((t * 3 + k * 0.3) % 1)), 256, 256, x, 0.22, z, 0.45, 0.45); }
    }
    if (id === 6) {
      const X = OFFICE_X;
      person("minister", MINISTER, X, 0, -2.9, { mode: "stand", expr: f > 1092 ? "stern" : "nervous", facing: 0 }, 5);
      if (f > 1092) card("phone", phoneDraw, 256, 256, X + 0.6, 0.98, -1.5, 0.36, 0.36);
      for (const [k, sx] of [-1.4, -0.3, 0.9].entries()) person(`fp${k}`, farmer(k + 1), X + sx, 0, -0.3 + (k % 2) * 0.3, { mode: "stand", expr: f > 1100 ? "relief" : "nervous", facing: 0 }, 20 + k);
    }
    if (id === 7) {
      person("meredith7", MEREDITH, 0, 0, 40.4, { mode: "stand", expr: "stern", facing: 0 }, 1);
      person("sold7a", soldier(1), -1.6, 0, 40.2, { mode: "stand", expr: "neutral", facing: 0 }, 11);
      person("sold7b", soldier(2), 1.6, 0, 40.2, { mode: "stand", expr: "neutral", facing: 0 }, 12);
    }
    if (id === 8) {
      person("gunner8", soldier(1), 34.2, 0, 72.6, { mode: "sit", expr: f > 1470 ? "shock" : "stern", facing: 0 }, 11, false);
      person("meredith8", MEREDITH, 37.8, 0, 74.0, { mode: "stand", expr: f > 1480 ? "nervous" : "stern", facing: 0 }, 1);
      const scat = smooth((f - 1470) / 40);
      for (let k = 0; k < 50; k++) { const a = hh(k, 10) * Math.PI * 2, x = 40 + Math.cos(a) * (3 + hh(k, 11) * 6) + Math.cos(a) * scat * 30, z = 92 + Math.sin(a) * (2 + hh(k, 12) * 5) + Math.abs(Math.sin(a)) * scat * 25; emu(`r8${k % 4}`, x, 0, z, { run: scat, eat: scat > 0.1 ? 0 : (k % 3 === 0 ? 0.7 : 0), phase: runPh(2.6, k) }, Math.cos(a) > 0 ? 1 : -1, k); }
      for (let d = 0; d < 8; d++) { const s0 = 1459 + d * 3; if (f >= s0 && f < s0 + 3) card(`mz|${f - s0}`, muzzleDraw(f - s0), 256, 256, 35, 0.42, 73.3, 1.4, 1.4); }
    }
    if (id === 9) {
      const gx = DAM.x - 22.1, gz = DAM.z - 20.4;
      person("gunner9", soldier(1), gx - 0.9, 0, gz - 0.5, { mode: "sit", expr: f > 1826 ? "shock" : f > 1700 ? "stern" : "neutral", facing: 0 }, 11, false);
      person("meredith9", MEREDITH, gx - 2.2, 0, gz - 1.2, { mode: "stand", expr: f > 1826 ? "shock" : "stern", facing: 0 }, 1);
      for (let k = 0; k < 30; k++) { const a = hh(k, 20) * Math.PI - 0.2, r = DAM.r + 1 + hh(k, 21) * 6, flee = f > 1760 ? smooth((f - 1760) / 50) * 20 : 0; const x = DAM.x + Math.cos(a) * r, z = DAM.z + Math.sin(a) * r + flee; emu(`d${k % 4}`, x, 0, z, { eat: f < 1760 && k % 2 ? 0.75 : 0, run: flee > 0 ? 1 : 0, phase: runPh(2.6, k), expr: f > 1746 ? "shock" : "lid" }, Math.cos(a) > 0 ? 1 : -1, k); }
      for (let d = 0; d < 10; d++) { const s0 = 1746 + d * 4; if (s0 < 1824 && f >= s0 && f < s0 + 3) card(`mz|${f - s0}`, muzzleDraw(f - s0), 256, 256, gx + 0.55, 0.45, gz + 0.62, 1.2, 1.2); }
      if (f >= 1825) { const u = (f - 1825) / 26; card(`jam|${Math.min(9, Math.floor(u * 10))}`, smokeDraw(PUFF), 256, 256, gx + 0.1, 0.6 + u * 0.6, gz + 0.2, 0.5 + u * 1.2, 0.5 + u * 1.2, { soft: true }); if (f < 1840) card(`jamB|${f - 1825}`, burstDraw((f - 1825) / 15), 500, 500, gx + 0.2, 0.55, gz + 0.3, 0.9, 0.9); }
    }
    if (id === 10) {
      const tx = this.truckG.position.x, tz = ROUGH.z, ty = this.truckG.position.y;
      person("gunnerTruck", soldier(1), tx - 1.6, ty + 0.85, tz + 0.2, { mode: "sit", expr: "nervous", facing: 0, headTilt: Math.sin(f * 1.3) * 0.15 }, 11, false);
      for (let k = 0; k < 18; k++) { const x = tx + 9 + k * 2.1 + (f - 1850) * 0.05 * (1 + hh(k, 30)), z = tz - 4 + hh(k, 31) * 8; emu(`c${k % 4}`, x, roughY(x, z), z, { run: 1, phase: runPh(2.8, k), expr: k % 4 === 0 ? "happy" : "lid" }, 1, k); if (k % 3 === 0) dust(x - 0.6, roughY(x, z), z, k, 0.7); }
      dust(tx - 2.8, ty, tz, 99, 1.4);
      if (f % 40 < 3) card(`mzT|${f % 40}`, muzzleDraw(f % 40), 256, 256, tx - 0.3, ty + 1.7, tz + 0.1, 0.9, 0.9);
    }
    if (id === 11) {
      for (const [k, o] of [MEREDITH, soldier(1), soldier(2)].entries()) { const z = 43 - ((f - 2102) / 90) * 4, x = -1.4 + k * 1.4; person(`ret${k}`, o, x, 0, z, { mode: "march", phase: (t * 1.4 + k * 0.3) % 1, expr: "pained", facing: 0, lift: 20 }, k === 0 ? 1 : 10 + k); }
      for (let k = 0; k < 9; k++) emu(`w${k % 3}`, -5 + k * 1.3 + hh(k, 40), 0, 49 + hh(k, 41) * 3, { expr: k % 3 === 0 ? "happy" : "lid" }, 0, k);
    }
    if (id === 12) {
      emu("lookout", LOOKOUT.x, 2.2, LOOKOUT.z, { tall: 1, expr: f > 2400 ? "angry" : "lid" }, f > 2420 ? 0 : 1, 700, false);
      for (let k = 0; k < 18; k++) { const x = LOOKOUT.x - 3 - hh(k, 50) * 14, z = LOOKOUT.z - 2 - hh(k, 51) * 12; emu(`le${k % 4}`, x, 0, z, { eat: (Math.sin(t * 3 + k) + 1) / 2 * 0.9 }, k % 2 ? 1 : -1, k); }
      if (f < 2300) { person("sold12", soldier(2), LOOKOUT.x + 16, 0, LOOKOUT.z + 4, { mode: "march", phase: (t * 1.2) % 1, expr: "stern", facing: 0 }, 12); }
    }
    if (id === 13) {
      const X = OFFICE_X - 3.0;
      person("meredith13", MEREDITH, X, 0, -2.85, { mode: "stand", expr: f > 2700 ? "nervous" : "stern", facing: 0 }, 1);
      card("report", REPORT, 400, 600, X, 1.05, -1.35, 0.5, 0.72);
    }
    if (id === 14) {
      const bx = PLAIN.x - 2 + (f - 2760) * 0.1;
      st.places.push({ key: `board|${Math.floor((t * 2.6) % 1 * 8)}`, x: bx, y: 0, z: PLAIN.z, size: tier(cam.position.distanceTo(this.v.set(bx, 1, PLAIN.z))), draw: dartboardDraw(Math.floor((t * 2.6) % 1 * 8) / 8) });
      blob(st, sunDir, bx, 0, PLAIN.z);
      for (let d = 0; d < 10; d++) { const s0 = 2775 + d * 11, u = (f - s0) / 12; if (u < 0) continue; const hit = d === 9; const x0 = PLAIN.x - 12, ex = hit ? bx + (f - s0 - 12) * 0.1 * 0 : PLAIN.x - 4 + d * 1.6, ey = hit ? 0.95 : 0.05, ez = PLAIN.z + (hit ? 0.05 : 1 + hh(d, 60) * 1.5);
        const k2 = Math.min(1, u), x = hit && u >= 1 ? bx : x0 + (ex - x0) * k2, y = 1.4 + (ey - 1.4) * k2 + 0.6 * Math.sin(Math.PI * k2), z = PLAIN.z + 1 + (ez - PLAIN.z - 1) * k2;
        card("dart", dartDraw, 256, 64, x, y, z, 0.5, 0.125); }
    }
    if (id === 15) {
      person("meredith15", MEREDITH, PLAIN.x - 30.6, 0, PLAIN.z + 32.6, { mode: "stand", expr: f > 3000 ? "grin" : "stern", facing: 0, look: 1 }, 1);
      for (let r = 0; r < 3; r++) for (let k = 0; k < 7; k++) { const x = PLAIN.x - 26 + k * 1.6 + (f - 2914) * 0.025, z = PLAIN.z + 28.5 - r * 1.5; emu(`sold${r}${k % 3}`, x, 0, z, { hat: true, run: 0.35, phase: (t * 1.6) % 1, expr: "angry" }, 1, r * 7 + k); }
    }
    if (id === 16) {
      const X = FARM.x, Z = FARM.z + 8.5;
      person("official", OFFICIAL, X - 0.2, 0, Z - 0.9, { mode: "stand", expr: "neutral", facing: 0 }, 6);
      person("farmerB", farmer(0), X + 1.4, 0, Z + 0.9, { mode: "stand", expr: f > 3250 ? "grin" : "smile", facing: 0, wave: f > 3290 ? 0 : undefined }, 2);
      card("coins", coinsDraw, 400, 300, X + 0.15, 1.08, Z + 0.15, 0.7, 0.52);
    }
    if (id === 17) {
      card("shield", shieldDraw, 1000, 1200, ARMS.x, 2.5, ARMS.z, 4.2, 5.04);
      emu("arms", ARMS.x + 2.6, 0, ARMS.z + 1.4, { expr: f > 3455 ? "wink" : "lid", tall: 0.2 }, 0, 800);
    }
    if (id === 18) {
      const wv = (Math.sin(t * 9) + 1) / 2;
      person("meredithBye", MEREDITH, ARMS.x - 4.7, 0, ARMS.z + 4.1, { mode: "stand", expr: "smile", facing: 0, wave: wv }, 1);
      emu("bye", ARMS.x - 3.2, 0, ARMS.z + 4.0, { expr: "happy" }, 0, 801);
      card("shield", shieldDraw, 1000, 1200, ARMS.x, 2.25, ARMS.z, 3.7, 4.44);
    }

    // ---- tarjetas a la escena ----
    let ai = 0;
    for (const p of st.places) {
      const a = this.actor(ai++), [w, h, k] = p.size, s = p.scale ?? 1;
      a.r = this.pool.req(p.key, w, h, k, p.draw); a.mesh.geometry = BODY; a.mesh.visible = true; a.mesh.position.set(p.x, p.y, p.z);
      a.mesh.rotation.set(0, Math.atan2(cam.position.x - p.x, cam.position.z - p.z), 0); a.mesh.scale.set(p.mirror ? -s : s, s, s);
    }
    for (let i = ai; i < this.actors.length; i++) this.actors[i].mesh.visible = false;
    let fi = 0;
    for (const p of st.fx) {
      if (!visible(p.x, p.y, p.z, Math.max(p.w, p.h))) continue;
      const e = this.fx(fi++); e.r = this.pool.req(p.key, p.cw, p.ch, 1, p.draw); e.use(!!p.soft); e.mesh.visible = true; e.mesh.position.set(p.x, p.y, p.z);
      if (p.flat) e.mesh.rotation.set(-Math.PI / 2, 0, p.rot ?? 0);
      else { e.mesh.rotation.order = "YXZ"; e.mesh.rotation.set(0, Math.atan2(cam.position.x - p.x, cam.position.z - p.z), 0); if (p.soft) e.mesh.quaternion.copy(cam.quaternion); }
      e.mesh.scale.set(p.w, p.h, 1);
    }
    for (let i = fi; i < this.fxs.length; i++) this.fxs[i].mesh.visible = false;
    this.pool.flush();
    for (let i = 0; i < ai; i++) this.actors[i].bind();
    for (let i = 0; i < fi; i++) this.fxs[i].bind();
    return focus;
  }
}
