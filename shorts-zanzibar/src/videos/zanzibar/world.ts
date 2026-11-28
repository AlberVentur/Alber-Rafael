// Mundo de «La guerra de 38 minutos» (Zanzíbar, 1896), con las piezas de la plantilla de la skill: cielo pintado por
// elevación, materiales de dos tonos, texturas pintadas en Canvas2D, tinta del mundo, personajes planos iluminados
// con sombra de contacto. Todo dibujado con código, sin modelos de terceros.
// Puerto: el palacio en el origen mirando al mar (+z), playa z 26-32, mar desde z 32, flota británica en z 160.
// Interiores lejos del puerto: sala del trono x 600, sala de TV x 700, oficina x 800.
import * as THREE from "three";
import { Pen, bodyFront, bodySide, Outfit, Expr, SKINS, fxBurst } from "./toon";
import { Pool, Actor, Fx, Stage, tier, light2D, blob, BODY } from "./troop";
import { Crowd, atlas } from "./crowd";
import { NOINK } from "./ink";
import { LIGHTS, LOOK, LightPreset, WorldLook } from "./lights";
import { TONE, CHAR, twoTone, untone } from "./shade";
import { rep, ctex, facadeHD, planksHD, cloudHD, CLOUD_DAY, CLOUD_GOLD } from "./paint";
import { FPS, SHOTS, ShotDef, Luz, camAt, smooth, worldF, SHIPS, SHIP_Z, DECK, THRONE_X, TV_X, OFFICE_X, TOWER, clockMinutes } from "./story";

// ---------------- luces por toma ----------------
const DAY: LightPreset = { ...LIGHTS.day, el: 52, sunI: 2.8 };
const SMOKE: LightPreset = { ...LIGHTS.golden, el: 30, lit: [1.42, 1.0, 0.7], shade: [0.22, 0.2, 0.3], lift: [0.05, 0.05, 0.1],
  charTint: [1.0, 0.88, 0.76], fog: "#b8907a", sunCol: "#ffc68a", sunI: 3.2, sky: "#e0b090", ground: "#6a5048", hemiI: 0.5, actorShadow: false };
const GOLD: LightPreset = { ...LIGHTS.golden, el: 12 };
const ROOM: LightPreset = { ...LIGHTS.day, el: 62, lit: [1.45, 1.36, 1.2], shade: [0.42, 0.38, 0.42], lift: [0.08, 0.07, 0.08] };
const PRESET: Record<Luz, LightPreset> = { day: DAY, smoke: SMOKE, golden: GOLD, room: ROOM };
const SKY_DAY: WorldLook = { ...LOOK.day, sky: { c: ["#cfe2f2", "#a8cdef", "#74ade6", "#4f8fdc", "#3373cc"], e: [0, 3, 8, 16, 40] } };
const SKY_SMOKE: WorldLook = { ...LOOK.golden, sky: { c: ["#cf9a6e", "#c0835c", "#a3684c", "#7a4e44", "#4e3a3e"], e: [0, 4, 10, 20, 40] }, sat: 0.85 };
const LOOKS: Record<Luz, WorldLook> = { day: SKY_DAY, smoke: SKY_SMOKE, golden: LOOK.golden, room: SKY_DAY };
const GRADE_OF: Record<Luz, "day" | "golden"> = { day: "day", smoke: "golden", golden: "golden", room: "day" };
export const gradeOf = (id: number) => GRADE_OF[SHOTS[id - 1].luz];

const V = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);
const hh = (i: number, s = 0) => { const v = Math.sin(i * 127.1 + s * 311.7) * 43758.5453; return v - Math.floor(v); };
const lam = (p: THREE.MeshLambertMaterialParameters) => twoTone(new THREE.MeshLambertMaterial(p));
const matCache = new Map<string, THREE.Material>();
const M = (key: string, make: () => THREE.MeshLambertMaterialParameters) => { let m = matCache.get(key); if (!m) { m = lam(make()); matCache.set(key, m); } return m; };
const solid = (col: string) => M("c" + col, () => ({ color: col }));

// ---------------- reparto (vestuario de 1896) ----------------
const DARK = ["#8a5a3a", "#a8704a", "#6e4630", "#c99067"];
/** Jálid bin Barghash: turbante blanco con banda roja, barba, túnica blanca y chaleco oscuro */
const KHALID: Outfit = { jacket: "#2d3a5a", pants: "#f3eee2", boots: "#3a2a20", hat: "turban", cap: "#f6f1e6", hair: "#b0262c", beard: "#1a1410", skin: "#a8704a", buttons: "#e8c45a", sash: "#b0262c" };
/** defensores: kanzu blanco, turbante, fusil */
const defender = (v: number): Outfit => ({ jacket: v % 4 === 3 ? "#d8c9a6" : "#f1ece0", pants: "#f1ece0", boots: "#5a4030", hat: "turban",
  cap: ["#f4efe4", "#c0503a", "#f4efe4", "#e8c45a"][v % 4], skin: DARK[v % 4], beard: v % 3 === 0 ? "#1a1410" : undefined, rifle: true, belt: "#6b4a2a" });
/** marinos de la Royal Navy: oficial de azul con galones, marinero de blanco */
const OFFICER: Outfit = { jacket: "#1f2a44", pants: "#1f2a44", boots: "#151520", hat: "navy", buttons: "#e8c45a", moustache: "#6a4a30", skin: SKINS[0], build: "stout" };
const SAILOR: Outfit = { jacket: "#f4f2ec", pants: "#f4f2ec", boots: "#151520", hat: "navy", cap: "#f7f5ef", skin: SKINS[1], belt: "#1f2a44" };
const VIEWER: Outfit = { jacket: "#d9604a", pants: "#3b4a6a", boots: "#f4f1ea", hat: "hair", hair: "#3a2a20", skin: SKINS[2] };
const LIGHT = -2.1;

// ---------------- texturas pintadas ----------------
const sandTex = () => ctex("sandZ", 512, 512, (g, r) => {
  g.fillStyle = "#e6d2a8"; g.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 1400; i++) { g.fillStyle = r() < 0.5 ? "rgba(190,160,110,0.35)" : "rgba(255,245,220,0.35)"; g.beginPath(); g.ellipse(r() * 512, r() * 512, 1 + r() * 5, 1 + r() * 2, r() * 3, 0, 6.3); g.fill(); }
});
const dirtTex = () => ctex("dirtZ", 512, 512, (g, r) => {
  g.fillStyle = "#cdb48a"; g.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 900; i++) { g.fillStyle = r() < 0.5 ? "rgba(140,112,80,0.35)" : "rgba(230,214,180,0.35)"; g.beginPath(); g.ellipse(r() * 512, r() * 512, 2 + r() * 7, 1 + r() * 3, 0, 0, 6.3); g.fill(); }
});
const seaTex = () => ctex("seaZ", 1024, 1024, (g, r) => {
  const gr = g.createLinearGradient(0, 0, 1024, 1024); gr.addColorStop(0, "#2fb3b8"); gr.addColorStop(1, "#24a2b4");
  g.fillStyle = gr; g.fillRect(0, 0, 1024, 1024);
  for (let i = 0; i < 260; i++) {
    const x = r() * 1024, y = r() * 1024, w = 14 + r() * 36;
    g.strokeStyle = r() < 0.7 ? "rgba(190,250,245,0.75)" : "rgba(18,110,140,0.55)"; g.lineWidth = 2 + r() * 2.5; g.lineCap = "round";
    g.beginPath(); g.arc(x, y + w, w, Math.PI * 1.25, Math.PI * 1.75); g.stroke();
  }
});
const leafTex = () => ctex("palmLeaf", 128, 512, (g) => {
  g.fillStyle = "#2f7a3e"; g.strokeStyle = "#1c4a28"; g.lineWidth = 3;
  for (let k = 0; k < 22; k++) { const y = 20 + k * 22, w = 58 * Math.sin((Math.PI * (k + 1)) / 24);
    g.beginPath(); g.moveTo(64, y); g.lineTo(64 - w, y + 30); g.lineTo(64 - w + 8, y + 36); g.lineTo(64, y + 14); g.lineTo(64 + w - 8, y + 36); g.lineTo(64 + w, y + 30); g.closePath(); g.fill(); g.stroke(); }
  g.strokeStyle = "#6b8a3a"; g.lineWidth = 5; g.beginPath(); g.moveTo(64, 0); g.lineTo(64, 512); g.stroke();
});
const flagTex = (key: string, draw: (g: CanvasRenderingContext2D) => void) => ctex("flag" + key, 300, 180, (g) => { draw(g); g.strokeStyle = "#241726"; g.lineWidth = 6; g.strokeRect(0, 0, 300, 180); });
const FLAG_ZANZIBAR = () => flagTex("zanzibar", (g) => { g.fillStyle = "#c8202a"; g.fillRect(0, 0, 300, 180); }); // 1896: roja lisa
const FLAG_GERMAN = () => flagTex("reich", (g) => { for (const [i, c] of ["#111111", "#f4f4f4", "#d8202a"].entries()) { g.fillStyle = c; g.fillRect(0, i * 60, 300, 60); } });
const FLAG_ENSIGN = () => flagTex("ensign", (g) => { // White Ensign: cruz roja sobre blanco y la Union Jack en el cantón
  g.fillStyle = "#f6f6f2"; g.fillRect(0, 0, 300, 180); g.fillStyle = "#c8202a"; g.fillRect(135, 0, 30, 180); g.fillRect(0, 75, 300, 30);
  g.fillStyle = "#1f3a7a"; g.fillRect(0, 0, 150, 90); g.strokeStyle = "#f6f6f2"; g.lineWidth = 16;
  g.beginPath(); g.moveTo(0, 0); g.lineTo(150, 90); g.moveTo(150, 0); g.lineTo(0, 90); g.stroke();
  g.strokeStyle = "#c8202a"; g.lineWidth = 6; g.beginPath(); g.moveTo(0, 0); g.lineTo(150, 90); g.moveTo(150, 0); g.lineTo(0, 90); g.stroke();
  g.fillStyle = "#f6f6f2"; g.fillRect(60, 0, 30, 90); g.fillRect(0, 30, 150, 30); g.fillStyle = "#c8202a"; g.fillRect(66, 0, 18, 90); g.fillRect(0, 36, 150, 18);
});
const clockFace = () => ctex("clockFace", 512, 512, (g) => {
  g.fillStyle = "#f6efdc"; g.beginPath(); g.arc(256, 256, 240, 0, 6.3); g.fill();
  g.strokeStyle = "#241726"; g.lineWidth = 18; g.stroke();
  g.fillStyle = "#241726"; g.font = "bold 64px Georgia, serif"; g.textAlign = "center"; g.textBaseline = "middle";
  const R = ["XII", "I", "II", "III", "IIII", "V", "VI", "VII", "VIII", "IX", "X", "XI"];
  for (let i = 0; i < 12; i++) { const a = (i / 12) * Math.PI * 2 - Math.PI / 2; g.save(); g.translate(256 + 180 * Math.cos(a), 256 + 180 * Math.sin(a)); g.font = "bold 44px Georgia, serif"; g.fillText(R[i], 0, 0); g.restore(); }
  for (let i = 0; i < 60; i++) { const a = (i / 60) * Math.PI * 2; g.lineWidth = i % 5 ? 3 : 7; g.beginPath(); g.moveTo(256 + 222 * Math.cos(a), 256 + 222 * Math.sin(a)); g.lineTo(256 + (i % 5 ? 210 : 200) * Math.cos(a), 256 + (i % 5 ? 210 : 200) * Math.sin(a)); g.stroke(); }
});
/** pared interior encalada con arcos pintados (sala del trono) */
const archWall = () => ctex("archWall", 1024, 512, (g, r) => {
  g.fillStyle = "#f1e6d2"; g.fillRect(0, 0, 1024, 512);
  for (let i = 0; i < 60; i++) { g.fillStyle = `rgba(200,170,130,${0.05 + r() * 0.08})`; g.beginPath(); g.arc(r() * 1024, r() * 512, 10 + r() * 50, 0, 6.3); g.fill(); }
  for (let k = 0; k < 3; k++) {
    const x = 170 + k * 342, w = 110;
    g.fillStyle = "#7ab8d6"; g.beginPath(); g.moveTo(x - w, 470); g.lineTo(x - w, 230); g.arc(x, 230, w, Math.PI, 0); g.lineTo(x + w, 470); g.closePath(); g.fill();
    g.fillStyle = "#3f8a6a"; g.fillRect(x - w, 360, 2 * w, 110); // mar visto por la ventana
    g.strokeStyle = "#6e4a2e"; g.lineWidth = 18; g.stroke();
    g.lineWidth = 8; g.beginPath(); g.moveTo(x, 120); g.lineTo(x, 470); g.moveTo(x - w, 300); g.lineTo(x + w, 300); g.stroke();
  }
  g.fillStyle = "#6e4a2e"; g.fillRect(0, 490, 1024, 22);
  g.fillStyle = "#b8963a"; for (let x = 0; x < 1024; x += 32) { g.beginPath(); g.arc(x + 16, 40, 10, 0, 6.3); g.fill(); }
});
const plainWall = (key: string, col: string, stripe: string) => ctex("wall" + key, 512, 512, (g, r) => {
  g.fillStyle = col; g.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 40; i++) { g.fillStyle = `rgba(0,0,0,${0.02 + r() * 0.03})`; g.beginPath(); g.arc(r() * 512, r() * 512, 10 + r() * 40, 0, 6.3); g.fill(); }
  g.fillStyle = stripe; g.fillRect(0, 440, 512, 72);
});
const rugTex = () => ctex("rug", 512, 512, (g) => {
  g.fillStyle = "#9a2430"; g.fillRect(0, 0, 512, 512); g.strokeStyle = "#e8c45a"; g.lineWidth = 14; g.strokeRect(30, 30, 452, 452);
  g.lineWidth = 6; g.strokeRect(70, 70, 372, 372);
  g.fillStyle = "#1f3a6a"; g.beginPath(); g.moveTo(256, 120); g.lineTo(392, 256); g.lineTo(256, 392); g.lineTo(120, 256); g.closePath(); g.fill();
  g.fillStyle = "#e8c45a"; g.beginPath(); g.arc(256, 256, 40, 0, 6.3); g.fill();
});
/** pantalla de la TV: el capítulo dura más que la guerra */
const tvScreen = () => ctex("tvScreen", 1024, 576, (g) => {
  const gr = g.createLinearGradient(0, 0, 0, 576); gr.addColorStop(0, "#1b2540"); gr.addColorStop(1, "#0d1424"); g.fillStyle = gr; g.fillRect(0, 0, 1024, 576);
  g.textAlign = "left"; g.fillStyle = "#ffffff"; g.font = "bold 58px Arial, sans-serif"; g.fillText("Tu serie · Capítulo 1", 60, 110);
  const bar = (y: number, frac: number, col: string, label: string, right: string) => {
    g.fillStyle = "rgba(255,255,255,0.18)"; g.fillRect(60, y, 900, 34); g.fillStyle = col; g.fillRect(60, y, 900 * frac, 34);
    g.fillStyle = "#ffffff"; g.font = "bold 42px Arial, sans-serif"; g.fillText(label, 60, y - 22); g.textAlign = "right"; g.fillText(right, 960, y - 22); g.textAlign = "left";
  };
  bar(260, 1, "#3aa0ff", "Capítulo", "40:00");
  bar(430, 38 / 40, "#ff5a3a", "Guerra de Zanzíbar", "38:00");
});

// ---------------- dibujos en tarjeta (efectos y utilería) ----------------
const flame = (p: Pen, v: number, cx: number, by: number, s: number) => {
  const j = [0, 1, 2].map((k) => Math.sin(v * 2.1 + k * 1.7) * 0.18);
  p.poly([[cx - 26 * s, by], [cx - 30 * s, by - 50 * s], [cx - 8 * s, by - (110 + 30 * j[0]) * s], [cx + 6 * s, by - 60 * s], [cx + 18 * s, by - (95 + 30 * j[1]) * s], [cx + 30 * s, by - 40 * s], [cx + 26 * s, by]], "#ff7a1a", 0);
  p.poly([[cx - 14 * s, by], [cx - 14 * s, by - 40 * s], [cx, by - (75 + 25 * j[2]) * s], [cx + 14 * s, by - 38 * s], [cx + 14 * s, by]], "#ffd84a", 0);
};
const flameDraw = (v: number) => (p: Pen) => flame(p, v, 128, 250, 2.0);
const smokeDraw = (dark: boolean) => (p: Pen) => {
  const g = p.g;
  for (const [x, y, r, a, c] of [[128, 140, 110, 0.62, dark ? "48,40,42" : "214,206,200"], [96, 120, 70, 0.45, dark ? "74,64,64" : "236,230,224"], [160, 110, 76, 0.45, dark ? "62,54,56" : "226,220,214"], [128, 90, 60, 0.4, dark ? "94,84,82" : "246,242,238"]] as const) {
    const gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, `rgba(${c},${a})`); gr.addColorStop(0.6, `rgba(${c},${a * 0.6})`); gr.addColorStop(1, `rgba(${c},0)`);
    g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
  }
};
const scorchDraw = (p: Pen) => {
  const g = p.g;
  for (let k = 0; k < 6; k++) {
    const x = 128 + Math.cos(k * 2.1) * 50, y = 128 + Math.sin(k * 1.3) * 46, r = 70 - k * 6;
    const gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, "rgba(28,22,20,0.45)"); gr.addColorStop(0.6, "rgba(40,32,28,0.22)"); gr.addColorStop(1, "rgba(40,32,28,0)");
    g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
  }
};
const paperDraw = (title: string, lines: string[], total?: string) => (p: Pen) => { // 400 x 600
  const g = p.g;
  g.fillStyle = "#f7f0dc"; g.beginPath(); g.moveTo(14, 10); g.lineTo(386, 14); g.lineTo(390, 590); g.lineTo(10, 586); g.closePath(); g.fill();
  g.strokeStyle = "#241726"; g.lineWidth = 7; g.stroke();
  g.fillStyle = "#241726"; g.textAlign = "center"; g.font = "bold 50px Georgia, serif"; g.fillText(title, 200, 82);
  g.font = "30px Georgia, serif"; g.textAlign = "left";
  lines.forEach((l, i) => g.fillText(l, 40, 150 + i * 44));
  if (total) { g.font = "bold 38px Georgia, serif"; g.fillStyle = "#b0262c"; g.textAlign = "center"; g.fillText(total, 200, 548); }
};
const ULTIMATUM = paperDraw("ULTIMÁTUM", ["Al sayyid Jálid:", "deje el palacio", "antes de las", "9:00 del 27", "de agosto", "de 1896."]);
const INVOICE = paperDraw("FACTURA", ["Cañonazos ......", "Cañonazos ......", "Cañonazos ......", "Cañonazos ......", "Daños ..........", "Saqueo .........", "Cañonazos ......", "Cañonazos ......"], "300.000 rupias");
const watchDraw = (p: Pen) => { // 256 x 256: reloj de bolsillo a las 8:59
  const g = p.g;
  g.fillStyle = "#d9b04a"; g.beginPath(); g.arc(128, 140, 110, 0, 6.3); g.fill(); g.strokeStyle = "#241726"; g.lineWidth = 8; g.stroke();
  g.beginPath(); g.arc(128, 22, 16, 0, 6.3); g.stroke();
  g.fillStyle = "#fbf6e8"; g.beginPath(); g.arc(128, 140, 88, 0, 6.3); g.fill(); g.stroke();
  for (let i = 0; i < 12; i++) { const a = (i / 12) * 6.283; g.lineWidth = 6; g.beginPath(); g.moveTo(128 + 72 * Math.sin(a), 140 - 72 * Math.cos(a)); g.lineTo(128 + 82 * Math.sin(a), 140 - 82 * Math.cos(a)); g.stroke(); }
  const hand = (a: number, l: number, w: number) => { g.lineWidth = w; g.lineCap = "round"; g.beginPath(); g.moveTo(128, 140); g.lineTo(128 + l * Math.sin(a), 140 - l * Math.cos(a)); g.stroke(); };
  hand(((8 + 59 / 60) / 12) * 6.283, 46, 10); hand((59 / 60) * 6.283, 70, 7);
};
const plasterDraw = (p: Pen) => { // 256 x 256: dedo vendado con una curita
  const g = p.g;
  g.fillStyle = "#ffd9b8"; g.strokeStyle = "#241726"; g.lineWidth = 9;
  g.beginPath(); g.roundRect(88, 20, 80, 220, 40); g.fill(); g.stroke();
  g.fillStyle = "#e9b98a"; g.beginPath(); g.roundRect(70, 92, 116, 58, 16); g.fill(); g.stroke();
  g.fillStyle = "#c98a62"; for (const [x, y] of [[100, 112], [128, 112], [156, 112], [100, 132], [128, 132], [156, 132]]) { g.beginPath(); g.arc(x, y, 4, 0, 6.3); g.fill(); }
};
/** fogonazo de cañón: estrella amarilla con borde naranja y núcleo blanco (256 x 256) */
const muzzleDraw = (d: number) => (p: Pen) => {
  const star = (r0: number, r1: number, n: number, col: string, rot: number) => {
    const pts: [number, number][] = [];
    for (let i = 0; i < n * 2; i++) { const a = rot + (i * Math.PI) / n, r = i % 2 ? r0 : r1 * (0.8 + 0.2 * Math.sin(i * 2.3 + d)); pts.push([128 + r * Math.cos(a), 128 + r * Math.sin(a)]); }
    p.poly(pts, col, 0);
  };
  star(40, 124, 9, "#ff7a1a", d * 0.4); star(30, 92, 9, "#ffd84a", d * 0.4 + 0.2); p.ell(128, 128, 34 - d * 6, 34 - d * 6, "#fffbe6", 0);
};
const burstDraw = (t: number) => (p: Pen) => fxBurst(p, t, "#ffb23a", 12, 50, 240);

// ---------------- embers ----------------
const EMB = { n: 5000, b: 30, h: 9 };
const EMBER_VS = `
attribute vec4 aSeed; uniform float uT; uniform vec3 uCam; uniform float uPx; varying float vA; varying float vHot;
void main() {
  float B = ${EMB.b.toFixed(1)}, H = ${EMB.h.toFixed(1)};
  vec3 p = position;
  p.y = mod(p.y + uT * (0.35 + 0.9 * aSeed.x), H);
  p.x += sin(uT * (0.6 + aSeed.y) + aSeed.z * 30.0) * 0.6 + uT * 0.45;
  p.z += cos(uT * (0.5 + aSeed.z) + aSeed.w * 30.0) * 0.6;
  p.xz = uCam.xz + mod(p.xz - uCam.xz + 0.5 * B, B) - 0.5 * B;
  p.y += uCam.y - 2.0;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  float big = step(0.8, aSeed.w);
  float sz = mix(0.03, 0.06, aSeed.y) + big * 0.1;
  gl_PointSize = clamp(sz * uPx / max(0.1, -mv.z), 2.0, 90.0);
  float life = (p.y - uCam.y + 2.0) / H;
  vA = smoothstep(0.0, 0.06, life) * (1.0 - smoothstep(0.6, 1.0, life)) * (0.6 + 0.4 * sin(uT * (5.0 + 6.0 * aSeed.x) + aSeed.z * 50.0));
  vA *= smoothstep(0.35, 1.0, -mv.z);
  vHot = aSeed.x;
  gl_Position = projectionMatrix * mv;
}`;
const EMBER_FS = `
uniform float uFade; varying float vA; varying float vHot;
void main() {
  vec2 d = gl_PointCoord - 0.5; float r = length(d) * 2.0;
  if (r > 1.0) discard;
  float core = exp(-r * r * 4.0) + 0.6 * exp(-r * r * 30.0);
  vec3 c = mix(vec3(1.0, 0.32, 0.05), vec3(1.0, 0.72, 0.28), vHot);
  gl_FragColor = vec4(c * core * vA * uFade * 3.4, 1.0);
}`;

// ---------------- geometría ----------------
const boxAt = (root: THREE.Object3D, x0: number, x1: number, y0: number, y1: number, z0: number, z1: number, mat: THREE.Material | THREE.Material[], cast = true) => {
  const m = new THREE.Mesh(new THREE.BoxGeometry(x1 - x0, y1 - y0, z1 - z0), mat);
  m.position.set((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2); m.castShadow = cast; m.receiveShadow = true; root.add(m); return m;
};
const cyl = (root: THREE.Object3D, r0: number, r1: number, h: number, mat: THREE.Material, x: number, y: number, z: number, n = 16, cast = true) => {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r0, r1, h, n), mat); m.position.set(x, y + h / 2, z); m.castShadow = cast; m.receiveShadow = true; root.add(m); return m;
};
const WALLS = ["#f1ece0", "#efe3cc", "#f4efe6", "#e8dcc4", "#f2e8d8", "#e6d8be"];
const SHUT = ["#2f7a6e", "#6e4a2e", "#3f6a8a", "#7a3a2a", "#4a6a3a"];
/** casa de piedra de coral encalada, techo plano con pretil (Stone Town) */
const house = (root: THREE.Object3D, x: number, z: number, w: number, d: number, h: number, i: number) => {
  const wall = WALLS[i % WALLS.length], sh = SHUT[(i * 3) % SHUT.length];
  const fw = Math.round(w), fd = Math.round(d), fh = Math.round(h / 3.5) * 3.5;
  const front = M(`fac${fw}x${fh}|${i % 6}`, () => ({ map: facadeHD(`zz${fw}x${fh}_${i % 6}`, fw, fh, { wall, shutter: sh, door: true }) }));
  const sideM = M(`fac${fd}x${fh}|${i % 6}s`, () => ({ map: facadeHD(`zz${fd}x${fh}_${i % 6}s`, fd, fh, { wall, shutter: sh }) }));
  const top = solid(wall);
  boxAt(root, x - fw / 2, x + fw / 2, 0, fh, z - fd / 2, z + fd / 2, [sideM, sideM, top, top, front, front]);
  const par = solid(WALLS[(i + 2) % WALLS.length]);
  boxAt(root, x - fw / 2, x + fw / 2, fh, fh + 0.7, z + fd / 2 - 0.3, z + fd / 2, par);
  boxAt(root, x - fw / 2, x + fw / 2, fh, fh + 0.7, z - fd / 2, z - fd / 2 + 0.3, par);
  if (i % 3 === 0) { // balcón de madera tallada
    const wood = solid("#6e4a2e");
    boxAt(root, x - fw * 0.3, x + fw * 0.3, fh * 0.55, fh * 0.55 + 0.25, z + fd / 2, z + fd / 2 + 1.2, wood);
    boxAt(root, x - fw * 0.3, x + fw * 0.3, fh * 0.55 + 0.25, fh * 0.55 + 1.2, z + fd / 2 + 1.1, z + fd / 2 + 1.2, solid("#2f7a6e"));
  }
};
const palm = (root: THREE.Object3D, x: number, z: number, h: number, i: number) => {
  const trunk = solid("#8a6a48");
  const lean = (hh(i, 1) - 0.5) * 0.5, segs = 6;
  let px = x, pz = z, py = 0;
  for (let s = 0; s < segs; s++) {
    const nx = x + Math.sin(lean) * h * ((s + 1) / segs) ** 2, ny = (h * (s + 1)) / segs;
    const m = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.22, Math.hypot(nx - px, ny - py), 8), trunk);
    m.position.set((px + nx) / 2, (py + ny) / 2, pz); m.rotation.z = -Math.atan2(nx - px, ny - py); m.castShadow = true; root.add(m);
    px = nx; py = ny;
  }
  const lm = new THREE.MeshLambertMaterial({ map: leafTex(), alphaTest: 0.5, side: THREE.DoubleSide }); twoTone(lm);
  for (let k = 0; k < 8; k++) {
    const g = new THREE.PlaneGeometry(1.4, 4.6).translate(0, 2.3, 0);
    const m = new THREE.Mesh(g, lm); m.position.set(px, py, pz);
    m.rotation.order = "YXZ"; m.rotation.set(1.0 + 0.35 * hh(i * 8 + k, 3), (k / 8) * Math.PI * 2 + hh(i, 4), 0);
    m.castShadow = true; root.add(m);
  }
};
const dhow = (root: THREE.Object3D, x: number, z: number, yaw: number, i: number) => {
  const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = yaw; root.add(g);
  const hull = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 10, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), solid(i % 2 ? "#8a5a34" : "#6e4a2e"));
  hull.scale.set(5.5, 1.4, 1.5); hull.position.y = 0.8; hull.rotation.x = Math.PI; hull.castShadow = true; g.add(hull);
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 7, 6), solid("#5a3a22")); mast.position.set(0.6, 4.2, 0); g.add(mast);
  const sail = new THREE.Shape(); sail.moveTo(-3.6, 1.3); sail.lineTo(3.4, 7.6); sail.lineTo(1.6, 1.4); sail.closePath();
  const sm = new THREE.Mesh(new THREE.ShapeGeometry(sail), M("sail", () => ({ color: "#f3ead6", side: THREE.DoubleSide }))); sm.position.set(0.6, 0.6, 0.05); sm.castShadow = true; g.add(sm);
};
/** buque de 1896: casco negro, obra muerta blanca, chimeneas color ante, mástiles, cañones y la White Ensign */
const ship = (root: THREE.Object3D, x: number, len: number, kind: "cruiser" | "gunboat", flags: THREE.Mesh[]) => {
  const g = new THREE.Group(); g.position.set(x, 0, SHIP_Z); root.add(g);
  const beam = kind === "cruiser" ? 7.5 : 5.2, H = DECK + 0.6, L = len / 2;
  const s = new THREE.Shape(); s.moveTo(-L, -beam / 2); s.lineTo(L * 0.72, -beam / 2); s.quadraticCurveTo(L * 0.95, -beam * 0.3, L, 0); s.quadraticCurveTo(L * 0.95, beam * 0.3, L * 0.72, beam / 2); s.lineTo(-L, beam / 2); s.quadraticCurveTo(-L * 1.06, 0, -L, -beam / 2);
  const hullG = new THREE.ExtrudeGeometry(s, { depth: H + 1.5, bevelEnabled: false }).rotateX(-Math.PI / 2).translate(0, -1.5, 0);
  const hull = new THREE.Mesh(hullG, solid("#24242c")); hull.castShadow = true; hull.receiveShadow = true; g.add(hull);
  const bandG = new THREE.ExtrudeGeometry(s, { depth: 0.6, bevelEnabled: false }).rotateX(-Math.PI / 2).translate(0, H - 0.6, 0).scale(1.005, 1, 1.01);
  g.add(new THREE.Mesh(bandG, solid("#f2eee4")));
  const deck = new THREE.Mesh(new THREE.ExtrudeGeometry(s, { depth: 0.05, bevelEnabled: false }).rotateX(-Math.PI / 2).translate(0, DECK, 0), M("deck", () => ({ map: rep(planksHD(), len / 6, 2) })));
  deck.receiveShadow = true; g.add(deck);
  // puente y superestructura blanca
  boxAt(g, -L * 0.1, L * 0.25, DECK, DECK + 2.6, -beam * 0.3, beam * 0.3, solid("#f2eee4"));
  boxAt(g, L * 0.05, L * 0.25, DECK + 2.6, DECK + 4.0, -beam * 0.36, beam * 0.36, solid("#e8e2d4"));
  const funnels = kind === "cruiser" ? [-L * 0.25, -L * 0.05 - 3] : [-L * 0.1];
  for (const fx of funnels) { cyl(g, 1.1, 1.2, 7.5, solid("#d9b778"), fx, DECK, 0); cyl(g, 1.15, 1.15, 0.9, solid("#24242c"), fx, DECK + 7.0, 0); }
  for (const mx of [L * 0.55, -L * 0.6]) cyl(g, 0.16, 0.22, kind === "cruiser" ? 17 : 12, solid("#6e4a2e"), mx, DECK, 0, 8);
  // cañones por la banda que mira a tierra (-z)
  const gm = solid("#3a3a40");
  for (let k = 0; k < (kind === "cruiser" ? 4 : 2); k++) {
    const gx = -L * 0.5 + k * (L * 0.9) / Math.max(1, (kind === "cruiser" ? 3 : 1));
    boxAt(g, gx - 0.8, gx + 0.8, DECK, DECK + 1.2, -beam / 2 + 0.4, -beam / 2 + 1.6, gm);
    const b = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.2, 3.2, 10), gm); b.rotation.x = Math.PI / 2; b.position.set(gx, DECK + 0.8, -beam / 2 - 0.9); g.add(b);
  }
  // White Ensign en el asta de popa
  cyl(g, 0.06, 0.06, 5, solid("#6e4a2e"), -L - 0.3, DECK, 0, 6);
  const fl = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 1.56).translate(-1.3, 0, 0), new THREE.MeshLambertMaterial({ map: FLAG_ENSIGN(), side: THREE.DoubleSide }));
  twoTone(fl.material as THREE.MeshLambertMaterial); fl.position.set(-L - 0.3, DECK + 4.1, 0); fl.rotation.y = 0.3; g.add(fl); flags.push(fl);
  // barandilla
  const rail = solid("#e8e2d4");
  boxAt(g, -L, L * 0.72, DECK + 1.0, DECK + 1.1, -beam / 2, -beam / 2 + 0.08, rail);
  for (let k = 0; k < len / 1.5; k++) boxAt(g, -L + k * 1.5, -L + k * 1.5 + 0.06, DECK, DECK + 1.0, -beam / 2, -beam / 2 + 0.06, rail, false);
};
const cannon = (root: THREE.Object3D, x: number, z: number, yaw: number, tip = 0) => {
  const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = yaw; g.rotation.z = tip; root.add(g);
  const wood = solid("#5a3a22"), metal = solid("#4a4a44");
  boxAt(g, -0.45, 0.45, 0.35, 0.7, -0.8, 0.6, wood);
  for (const s of [-1, 1]) { const w = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.14, 16), wood); w.rotation.z = Math.PI / 2; w.position.set(s * 0.55, 0.42, 0.1); w.castShadow = true; g.add(w); }
  const b = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.24, 2.0, 14), metal); b.rotation.x = Math.PI / 2 - 0.08; b.position.set(0, 0.85, 0.5); b.castShadow = true; g.add(b);
  return g;
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
  private crowd: Crowd;
  private minuteHand: THREE.Mesh; private hourHand: THREE.Mesh;
  private palaceFlag: THREE.Group;
  private flags: THREE.Mesh[] = [];
  private cannonsOk: THREE.Group[] = []; private cannonsDown: THREE.Group[] = [];
  private embers = { uT: { value: 0 }, uCam: { value: new THREE.Vector3() }, uPx: { value: 1000 }, uFade: { value: 1 } };
  private sunCache = new Map<number, THREE.Vector3>();
  private frustum = new THREE.Frustum(); private m4 = new THREE.Matrix4(); private sph = new THREE.Sphere(); private v = new THREE.Vector3();

  constructor() {
    const R = this.root;
    this.skyMat = new THREE.ShaderMaterial({
      uniforms: { c0: { value: new THREE.Color() }, c1: { value: new THREE.Color() }, c2: { value: new THREE.Color() },
        c3: { value: new THREE.Color() }, c4: { value: new THREE.Color() }, e: { value: new THREE.Vector4() } },
      vertexShader: "varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",
      fragmentShader: `uniform vec3 c0, c1, c2, c3, c4; uniform vec4 e; varying vec3 vP;
        void main(){ float el = asin(clamp(normalize(vP).y, -1.0, 1.0));
          vec3 c = mix(c0, c1, smoothstep(0.0, e.x, el)); c = mix(c, c2, smoothstep(e.x, e.y, el));
          c = mix(c, c3, smoothstep(e.y, e.z, el)); c = mix(c, c4, smoothstep(e.z, e.w, el)); gl_FragColor = vec4(c, 1.0); }`,
      side: THREE.BackSide, depthWrite: false, fog: false,
    });
    this.sky = new THREE.Mesh(new THREE.SphereGeometry(2400, 48, 24), this.skyMat);
    this.sky.renderOrder = -1; this.sky.frustumCulled = false; this.sky.layers.set(NOINK);
    R.add(this.sky);
    this.hemi = new THREE.HemisphereLight("#cfe6ff", "#6c5c8c", 1.1);
    this.sun = new THREE.DirectionalLight("#fff0d6", 2.6);
    this.sun.castShadow = true; this.sun.shadow.mapSize.set(2048, 2048);
    R.add(this.hemi, this.sun, this.sun.target);
    // nubes planas pintadas alrededor del horizonte
    for (let i = 0; i < 26; i++) {
      const mat = new THREE.MeshBasicMaterial({ map: cloudHD(i % 4, CLOUD_DAY), transparent: true, depthWrite: false, fog: false });
      this.cloudMats.push(mat);
      const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mat);
      const a = (i / 26) * Math.PI * 2 + hh(i, 20), d = 800 + hh(i, 21) * 500, w = 150 + hh(i, 23) * 130;
      m.position.set(Math.cos(a) * d, 90 + hh(i, 22) * 220, Math.sin(a) * d); m.scale.set(w, w / 2, 1); m.layers.set(NOINK);
      this.clouds.push(m); R.add(m);
    }
    // suelo: tierra de la ciudad, arena de la playa, mar
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(3000, 3000).rotateX(-Math.PI / 2).translate(0, 0, -1500 + 26), lam({ map: rep(dirtTex(), 500, 500) }));
    ground.receiveShadow = true; R.add(ground);
    const beach = new THREE.Mesh(new THREE.PlaneGeometry(3000, 10).rotateX(-Math.PI / 2).translate(0, 0.01, 30), lam({ map: rep(sandTex(), 600, 2) }));
    beach.receiveShadow = true; R.add(beach);
    const sea = new THREE.Mesh(new THREE.PlaneGeometry(6000, 3000).rotateX(-Math.PI / 2).translate(0, -0.05, 35 + 1500), lam({ map: rep(seaTex(), 300, 150) }));
    sea.receiveShadow = true; R.add(sea);
    // patio del palacio: arena apisonada
    const yard = new THREE.Mesh(new THREE.PlaneGeometry(60, 18).rotateX(-Math.PI / 2).translate(0, 0.015, 18), lam({ map: rep(sandTex(), 12, 4), color: "#f0e2c4" }));
    yard.receiveShadow = true; R.add(yard);

    // ---- el palacio: bloque encalado de tres pisos con galerías de madera mirando al mar ----
    const palFront = M("palFront", () => ({ map: facadeHD("palace36x14", 36, 14, { wall: "#f4efe4", shutter: "#2f7a6e", door: true }) }));
    const palSide = M("palSide", () => ({ map: facadeHD("palace18x14", 18, 14, { wall: "#f4efe4", shutter: "#2f7a6e" }) }));
    const white = solid("#f4efe4");
    boxAt(R, -18, 18, 0, 14, -9, 9, [palSide, palSide, white, white, palFront, palFront]);
    const green = solid("#2f7a62"), wood = solid("#6e4a2e");
    for (const y of [4.6, 9.2]) {
      boxAt(R, -18.5, 18.5, y, y + 0.35, 9, 12.5, wood); // galerías
      boxAt(R, -18.5, 18.5, y + 0.35, y + 1.3, 12.35, 12.5, green);
    }
    boxAt(R, -19, 19, 14, 14.5, -9.5, 13, white); // cornisa
    for (let k = 0; k <= 12; k++) boxAt(R, -18.2 + k * 3.03, -17.8 + k * 3.03, 0, 14, 12.1, 12.5, white); // columnas
    for (let k = 0; k < 18; k++) boxAt(R, -18 + k * 2, -17.2 + k * 2, 14.5, 15.3, 12.4, 13, white, false); // almenas
    // torre del reloj
    const tw = TOWER;
    boxAt(R, tw.x - 3, tw.x + 3, 0, tw.h, tw.z - 3, tw.z + 3, M("towerFac", () => ({ map: facadeHD("tower6x30", 6, 30, { wall: "#f4efe4", shutter: "#2f7a6e" }) })));
    boxAt(R, tw.x - 3.5, tw.x + 3.5, tw.h, tw.h + 0.6, tw.z - 3.5, tw.z + 3.5, white);
    const roofT = new THREE.Mesh(new THREE.ConeGeometry(4.2, 4, 4), solid("#b0563a")); roofT.position.set(tw.x, tw.h + 2.6, tw.z); roofT.rotation.y = Math.PI / 4; roofT.castShadow = true; R.add(roofT);
    const face = new THREE.Mesh(new THREE.CircleGeometry(2.2, 48), new THREE.MeshLambertMaterial({ map: clockFace() })); twoTone(face.material as THREE.MeshLambertMaterial);
    face.position.set(tw.x, tw.clockY, tw.z + 3.02); R.add(face);
    const handM = solid("#241726");
    this.minuteHand = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.75, 0.05).translate(0, 0.75, 0), handM); this.minuteHand.position.set(tw.x, tw.clockY, tw.z + 3.08); R.add(this.minuteHand);
    this.hourHand = new THREE.Mesh(new THREE.BoxGeometry(0.18, 1.15, 0.05).translate(0, 0.48, 0), handM); this.hourHand.position.set(tw.x, tw.clockY, tw.z + 3.12); R.add(this.hourHand);
    // bandera roja del sultán sobre el palacio (cae en la toma 7)
    this.palaceFlag = new THREE.Group(); this.palaceFlag.position.set(0, 15.3, 0); R.add(this.palaceFlag);
    cyl(this.palaceFlag, 0.1, 0.12, 9, solid("#6e4a2e"), 0, 0, 0, 8);
    const pf = new THREE.Mesh(new THREE.PlaneGeometry(4, 2.4).translate(2, 0, 0), new THREE.MeshLambertMaterial({ map: FLAG_ZANZIBAR(), side: THREE.DoubleSide }));
    twoTone(pf.material as THREE.MeshLambertMaterial); pf.position.set(0.1, 7.6, 0); pf.rotation.y = -0.4; this.palaceFlag.add(pf); this.flags.push(pf);
    // cañones del patio apuntando al mar (y los mismos volcados después del bombardeo)
    for (let k = 0; k < 6; k++) {
      const x = -15 + k * 6;
      this.cannonsOk.push(cannon(R, x, 26, 0));
      this.cannonsDown.push(cannon(R, x + (hh(k, 5) - 0.5) * 2, 25 + hh(k, 6) * 2, (hh(k, 7) - 0.5) * 2.4, (hh(k, 8) < 0.5 ? 1 : -1) * 1.2));
    }

    // ---- Stone Town: casas alrededor del palacio, una plaza y la calle del consulado (z = -40) ----
    let hi = 0;
    for (let x = -150; x <= 150; x += 11) for (let z = -130; z <= 14; z += 12) {
      if (Math.abs(x) < 33 && z > -22) continue; // palacio y patio
      if (x > 18 && x < 32 && z > -12) continue; // torre
      if (z > -48 && z < -26 && x > -112 && x < -60) continue; // plaza del consulado
      if (z > 4) continue; // primera línea: más abajo
      const w = 8 + hh(hi, 1) * 2.5, d = 8 + hh(hi, 2) * 3, h = 7 + Math.floor(hh(hi, 3) * 3) * 3.5;
      house(R, x + (hh(hi, 4) - 0.5) * 1.5, z, w, d, h, hi); hi++;
    }
    for (let x = -150; x <= 150; x += 12) { // frente de mar
      if (Math.abs(x) < 34) continue;
      house(R, x, 12, 9.5, 9, 7 + (hi % 3) * 3.5, hi); hi++;
    }
    // calle del consulado: fachadas en z = -40 mirando a la plaza; el consulado alemán en x = -68
    for (let x = -112; x <= -60; x += 9) { if (Math.abs(x + 67) < 5) continue; house(R, x, -44, 8.6, 8, 10.5, hi++); }
    {
      const fac = M("consulFac", () => ({ map: facadeHD("consul10x11", 10, 10.5, { wall: "#f0e4c8", shutter: "#4a5a6a", door: true }) }));
      boxAt(R, -72, -62, 0, 10.5, -48.5, -40, [white, white, white, white, fac, fac]);
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 2.6, 8), solid("#6e4a2e")); pole.position.set(-65.6, 4.6, -39.3); pole.rotation.x = 0.7; R.add(pole);
      const gf = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 1.08).translate(0.9, -0.54, 0), new THREE.MeshLambertMaterial({ map: FLAG_GERMAN(), side: THREE.DoubleSide }));
      twoTone(gf.material as THREE.MeshLambertMaterial); gf.position.set(-65.6, 5.6, -38.6); R.add(gf); this.flags.push(gf);
      const sign = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 0.7), new THREE.MeshLambertMaterial({ map: ctex("consulSign", 680, 140, (g) => {
        g.fillStyle = "#f6efdc"; g.fillRect(0, 0, 680, 140); g.strokeStyle = "#241726"; g.lineWidth = 10; g.strokeRect(5, 5, 670, 130);
        g.fillStyle = "#241726"; g.font = "bold 50px Georgia, serif"; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText("CONSULADO DE ALEMANIA", 340, 72);
      }) }));
      twoTone(sign.material as THREE.MeshLambertMaterial); sign.position.set(-67, 3.6, -39.97); R.add(sign);
    }
    // palmeras en la playa y en el patio
    for (let k = 0; k < 34; k++) { const x = -150 + k * 9 + hh(k, 9) * 4; if (Math.abs(x) < 22) continue; palm(R, x, 24 + hh(k, 10) * 3, 8 + hh(k, 11) * 4, k); }
    for (const [x, z] of [[-24, 15], [24, 18], [-28, -24], [36, -20]]) palm(R, x, z, 10, x * 7 + z);
    // dhows cerca de la orilla
    for (let k = 0; k < 9; k++) dhow(R, -130 + k * 32 + hh(k, 12) * 10, 45 + hh(k, 13) * 40, hh(k, 14) * 3, k);
    // la flota británica
    for (const s of SHIPS) ship(R, s.x, s.len, s.kind, this.flags);

    // ---- sala del trono (x 600): paredes encaladas con arcos, alfombra roja, trono dorado ----
    {
      const X = THRONE_X, fl = M("throneFloor", () => ({ map: rep(planksHD(), 3, 3), color: "#d8b88a" }));
      boxAt(R, X - 7, X + 7, -0.1, 0.02, -6, 7, fl, false);
      const aw = M("archWall", () => ({ map: archWall() }));
      boxAt(R, X - 7, X + 7, 0, 6, -6.4, -6, aw, false);
      boxAt(R, X - 7.4, X - 7, 0, 6, -6, 7, M("archWallS", () => ({ map: rep(archWall(), 1, 1) })), false);
      boxAt(R, X + 7, X + 7.4, 0, 6, -6, 7, M("archWallS", () => ({ map: rep(archWall(), 1, 1) })), false);
      boxAt(R, X - 7.4, X + 7.4, 6, 6.3, -6.4, 7, solid("#e8dcc4"), false);
      const rug = new THREE.Mesh(new THREE.PlaneGeometry(4, 9).rotateX(-Math.PI / 2).translate(X, 0.03, -1), lam({ map: rugTex() })); rug.receiveShadow = true; R.add(rug);
      const gold = solid("#d9a441"), red = solid("#b0262c");
      boxAt(R, X - 1.0, X + 1.0, 0, 0.3, -5.6, -3.6, gold); // tarima
      boxAt(R, X - 0.75, X + 0.75, 0.3, 0.75, -5.2, -4.2, red); // asiento
      boxAt(R, X - 0.85, X + 0.85, 0.3, 2.6, -5.5, -5.2, gold); // respaldo
      boxAt(R, X - 0.6, X + 0.6, 0.8, 2.3, -5.22, -5.15, red, false);
      for (const s of [-1, 1]) boxAt(R, X + s * 0.85 - 0.12, X + s * 0.85 + 0.12, 0.3, 1.3, -5.2, -4.2, gold);
      const fl2 = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 1.3), new THREE.MeshLambertMaterial({ map: FLAG_ZANZIBAR() })); twoTone(fl2.material as THREE.MeshLambertMaterial);
      fl2.position.set(X + 3.2, 3.6, -5.95); R.add(fl2);
      for (const s of [-1, 1]) { cyl(R, 0.08, 0.1, 2.2, gold, X + s * 2.4, 0, -5.4, 8); const lampG = new THREE.Mesh(new THREE.SphereGeometry(0.28, 12, 8), new THREE.MeshBasicMaterial({ color: "#ffe9a8" })); lampG.position.set(X + s * 2.4, 2.4, -5.4); R.add(lampG); }
    }
    // ---- sala de TV (x 700) ----
    {
      const X = TV_X;
      boxAt(R, X - 7, X + 7, -0.1, 0.02, -6, 7, M("tvFloor", () => ({ map: rep(planksHD(), 3, 3) })), false);
      boxAt(R, X - 7, X + 7, 0, 5, -6.4, -6, M("tvWall", () => ({ map: plainWall("tv", "#e9d8c0", "#c9a87a") })), false);
      boxAt(R, X + 7, X + 7.4, 0, 5, -6, 7, M("tvWall2", () => ({ map: plainWall("tv2", "#e2cfb4", "#c9a87a") })), false);
      boxAt(R, X - 7.4, X - 7, 0, 5, -6, 7, M("tvWall2", () => ({ map: plainWall("tv2", "#e2cfb4", "#c9a87a") })), false);
      boxAt(R, X - 7.4, X + 7.4, 5, 5.3, -6.4, 7, solid("#efe6d6"), false);
      const sofa = solid("#3f7a8a");
      boxAt(R, X - 2.6, X + 0.4, 0, 0.45, -3.6, -2.5, sofa); boxAt(R, X - 2.6, X + 0.4, 0.45, 1.25, -3.9, -3.5, sofa);
      for (const s of [X - 2.75, X + 0.4]) boxAt(R, s - 0.15, s + 0.15, 0, 0.75, -3.9, -2.5, sofa);
      boxAt(R, X - 2.2, X + 0.0, 0.0, 0.08, -1.6, 0.4, M("rug2", () => ({ color: "#c9864a" })), false);
      // mueble y TV mirando al sofá (girada hacia -x+z)
      const tvG = new THREE.Group(); tvG.position.set(X + 3.0, 0, -1.4); tvG.rotation.y = -1.05; R.add(tvG);
      boxAt(tvG, -1.4, 1.4, 0, 0.6, -0.4, 0.4, solid("#6e4a2e"));
      boxAt(tvG, -1.25, 1.25, 0.7, 2.15, -0.06, 0.06, solid("#151520"));
      cyl(tvG, 0.1, 0.12, 0.12, solid("#151520"), 0, 0.6, 0, 8);
      const scr = new THREE.Mesh(new THREE.PlaneGeometry(2.36, 1.33), new THREE.MeshBasicMaterial({ map: tvScreen(), toneMapped: false })); scr.position.set(0, 1.425, 0.065); tvG.add(scr);
      cyl(R, 0.3, 0.25, 0.6, solid("#b0563a"), X - 4, 0, -4.5, 10); palmLike(R, X - 4, 0.6, -4.5);
    }
    // ---- oficina colonial (x 800) ----
    {
      const X = OFFICE_X;
      boxAt(R, X - 7, X + 7, -0.1, 0.02, -6, 7, M("ofFloor", () => ({ map: rep(planksHD(), 3, 3), color: "#c8a878" })), false);
      boxAt(R, X - 7, X + 7, 0, 5.5, -6.4, -6, M("ofWall", () => ({ map: plainWall("of", "#efe6d0", "#6e4a2e") })), false);
      boxAt(R, X - 7.4, X - 7, 0, 5.5, -6, 7, M("ofWall", () => ({ map: plainWall("of", "#efe6d0", "#6e4a2e") })), false);
      boxAt(R, X + 7, X + 7.4, 0, 5.5, -6, 7, M("ofWall", () => ({ map: plainWall("of", "#efe6d0", "#6e4a2e") })), false);
      boxAt(R, X - 7.4, X + 7.4, 5.5, 5.8, -6.4, 7, solid("#efe6d6"), false);
      const wd = solid("#6e4a2e");
      boxAt(R, X - 1.6, X + 1.6, 0.72, 0.82, -2.2, -0.9, wd); for (const [sx, sz] of [[-1.5, -2.1], [1.5, -2.1], [-1.5, -1.0], [1.5, -1.0]]) boxAt(R, X + sx - 0.06, X + sx + 0.06, 0, 0.72, sz - 0.06, sz + 0.06, wd);
      const ens = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1.44), new THREE.MeshLambertMaterial({ map: FLAG_ENSIGN() })); twoTone(ens.material as THREE.MeshLambertMaterial); ens.position.set(X - 2.6, 3.3, -5.95); R.add(ens);
      const clockW = new THREE.Mesh(new THREE.CircleGeometry(0.5, 32), new THREE.MeshLambertMaterial({ map: clockFace() })); twoTone(clockW.material as THREE.MeshLambertMaterial); clockW.position.set(X + 2.4, 3.6, -5.95); R.add(clockW);
    }

    // multitud de defensores: en el patio, a los lados del palacio y en las calles cercanas (≈ 3.000)
    const dAt = atlas(Array.from({ length: 12 }, (_, i) => defender(i)), LIGHT, (i) => (i % 3 === 0 ? { raise: 1, expr: "shout" } : {}));
    const pts: { x: number; z: number }[] = [];
    const grid = (x0: number, x1: number, z0: number, z1: number, st: number, seed: number) => { let i = 0; for (let z = z0; z <= z1; z += st) for (let x = x0; x <= x1; x += st) { pts.push({ x: x + (hh(i, seed) - 0.5) * st * 0.6, z: z + (hh(i, seed + 1) - 0.5) * st * 0.6 }); i++; } };
    grid(-26, 26, 13.2, 22.5, 0.95, 40); // patio (detrás de las tarjetas de primera fila)
    grid(-33, -19, -14, 12, 1.0, 41); grid(19, 33, -14, 12, 1.0, 42); // a los lados
    grid(-24, 24, -21, -11, 1.0, 43); // detrás
    this.crowd = new Crowd(R, dAt, pts, 1.7);
    this.crowd.mesh.visible = false;
    // brasas
    {
      const N = EMB.n, pos = new Float32Array(N * 3), sd = new Float32Array(N * 4);
      for (let i = 0; i < N; i++) { pos.set([hh(i, 90) * EMB.b, hh(i, 91) * EMB.h, hh(i, 92) * EMB.b], i * 3); sd.set([hh(i, 93), hh(i, 94), hh(i, 95), hh(i, 96)], i * 4); }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3)); geo.setAttribute("aSeed", new THREE.BufferAttribute(sd, 4));
      const mat = new THREE.ShaderMaterial({ uniforms: this.embers, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, vertexShader: EMBER_VS, fragmentShader: EMBER_FS });
      const p = new THREE.Points(geo, mat); p.frustumCulled = false; p.layers.set(NOINK); p.renderOrder = 5;
      const u = this.embers.uPx;
      p.onBeforeRender = (r, _s, c) => { const rt = r.getRenderTarget(), h = rt ? rt.height : r.domElement.height; u.value = h / (2 * Math.tan(THREE.MathUtils.degToRad((c as THREE.PerspectiveCamera).fov) / 2)); };
      R.add(p);
    }
  }

  get crowdCount() { return this.crowd.mesh.count; }

  private shotSun(id: number) {
    let v = this.sunCache.get(id);
    if (v) return v;
    const s = SHOTS[id - 1], L = PRESET[s.luz];
    let fx = 0, fz = 0;
    for (let f = s.a; f < s.b; f += 3) { const c = camAt(id, f), x = c.look[0] - c.pos[0], z = c.look[2] - c.pos[2], n = Math.hypot(x, z) || 1; fx += x / n; fz += z / n; }
    const n = Math.hypot(fx, fz) || 1; fx /= n; fz /= n;
    const AZ: Record<number, number> = { 1: 120, 2: 140, 3: 150, 4: 115, 5: 125, 6: 100, 7: 130, 8: 165, 9: 120, 10: 125, 11: 140, 12: 140, 13: 20 };
    const az = THREE.MathUtils.degToRad(AZ[id] ?? 110), el = THREE.MathUtils.degToRad(id === 8 ? 62 : L.el);
    const hx = fx * Math.cos(az) - fz * Math.sin(az), hz = fz * Math.cos(az) + fx * Math.sin(az);
    v = new THREE.Vector3(hx * Math.cos(el), Math.sin(el), hz * Math.cos(el)).normalize();
    this.sunCache.set(id, v);
    return v;
  }
  private actor(i: number) { while (this.actors.length <= i) this.actors.push(new Actor(this.root)); return this.actors[i]; }
  private fx(i: number) { while (this.fxs.length <= i) this.fxs.push(new Fx(this.root)); return this.fxs[i]; }

  update(id: number, f: number, cam: THREE.PerspectiveCamera, scene: THREE.Scene) {
    const S: ShotDef = SHOTS[id - 1], fw = worldF(f), fi0 = Math.floor(fw), t = fw / FPS, L = PRESET[S.luz], K = LOOKS[S.luz];
    const c = camAt(id, f);
    cam.position.set(...c.pos); cam.up.set(0, 1, 0); cam.lookAt(...c.look);
    cam.fov = c.fov; cam.near = 0.1; cam.far = 5000; cam.updateProjectionMatrix(); cam.updateMatrixWorld();
    cam.layers.enable(NOINK);
    const focus = V(...c.look), dist = cam.position.distanceTo(focus), sunDir = this.shotSun(id);
    this.hemi.color.set(L.sky); this.hemi.groundColor.set(L.ground); this.hemi.intensity = L.hemiI;
    this.sun.color.set(L.sunCol); this.sun.intensity = L.sunI;
    const Rr = THREE.MathUtils.clamp(dist * 1.15 + 8, 12, 140);
    this.sun.position.copy(focus).addScaledVector(sunDir, 400); this.sun.target.position.copy(focus);
    const sc = this.sun.shadow.camera;
    sc.left = -Rr; sc.right = Rr; sc.top = Rr; sc.bottom = -Rr; sc.near = 20; sc.far = 900; sc.updateProjectionMatrix();
    this.sun.shadow.bias = L.bias; this.sun.shadow.normalBias = L.normalBias * (Rr / 12);
    TONE.uLitCol.value.set(...L.lit); TONE.uShadeCol.value.set(...L.shade); TONE.uShadeLift.value.set(...L.lift);
    TONE.uLambert.value = L.lambert; TONE.uSideK.value = L.sideK; TONE.uTerm.value = L.term; TONE.uBounce.value.set(...K.bounce);
    TONE.uSat.value = S.luz === "smoke" ? 0.82 : 0.95;
    CHAR.uCharTint.value.set(...L.charTint); CHAR.uCharShade.value = L.charShade; CHAR.uGrad.value = L.charGrad;
    CHAR.uBodyGrad.value = L.bodyGrad; CHAR.uSideTint.value.set(...L.sideTint);
    const su = this.skyMat.uniforms;
    K.sky.c.forEach((h, i) => untone(h, su["c" + i].value));
    const e = K.sky.e.map((deg) => THREE.MathUtils.degToRad(deg));
    su.e.value.set(e[1], e[2], e[3], e[4]);
    this.sky.position.copy(cam.position);
    untone(S.luz === "golden" ? "#f2b98a" : S.luz === "smoke" ? SMOKE.fog : "#cfe2f2", this.fog.color);
    this.fog.near = S.fog[0]; this.fog.far = S.fog[1];
    scene.fog = this.fog; scene.background = null;
    const cloudPal = S.luz === "golden" || S.luz === "smoke" ? CLOUD_GOLD : CLOUD_DAY;
    this.cloudMats.forEach((m, i) => { const want = cloudHD(i % 4, cloudPal); if (m.map !== want) { m.map = want; m.needsUpdate = true; } });
    for (const m of this.clouds) m.quaternion.copy(cam.quaternion);
    const burning = id >= 6 && id <= 9;
    this.embers.uT.value = t; this.embers.uCam.value.copy(cam.position); this.embers.uFade.value = burning ? 1 : 0;
    // reloj de la torre
    const mins = clockMinutes(f), hours = 9 + mins / 60;
    this.minuteHand.rotation.z = -(mins / 60) * Math.PI * 2; this.hourHand.rotation.z = -((hours % 12) / 12) * Math.PI * 2;
    // la bandera del palacio cae al final del bombardeo (toma 7) y ya no está después
    const fall = id === 7 ? smooth((f - 618) / 30) : id > 7 && id < 13 ? 1 : 0;
    this.palaceFlag.rotation.x = fall * 1.45; this.palaceFlag.visible = !(id >= 9 && id < 13);
    for (const [i, fl] of this.flags.entries()) fl.rotation.y = (i % 2 ? -0.3 : 0.3) + 0.12 * Math.sin(t * 5 + i);
    const after = id >= 9 && id <= 9;
    for (const g of this.cannonsOk) g.visible = !after && id !== 13; for (const g of this.cannonsDown) g.visible = after;
    this.crowd.mesh.visible = id === 5;

    // ---- reparto y efectos ----
    const right = V(0, 0, 0).setFromMatrixColumn(cam.matrixWorld, 0);
    const light = light2D(sunDir, right);
    const st: Stage = { places: [], fx: [] };
    this.frustum.setFromProjectionMatrix(this.m4.multiplyMatrices(cam.projectionMatrix, cam.matrixWorldInverse));
    const lidAt = (i: number) => {
      let s = Math.round(-60 * hh(i, 9));
      for (let n = 0; s <= f && n < 80; n++) { const k = f - s; if (k >= 0 && k < 4) return [0.5, 1, 1, 0.5][k]; s += Math.round(15 + 54 * hh(i * 31 + n, 13)); }
      return 0;
    };
    const visible = (x: number, y: number, z: number, r: number) => this.frustum.intersectsSphere(this.sph.set(this.v.set(x, y, z), r));
    type FO = Parameters<typeof bodyFront>[2];
    const person = (who: string, o: Outfit, x: number, y: number, z: number, opts: FO, i: number, contact = true) => {
      if (!visible(x, y + 1.1, z, 3.5)) return;
      const d = cam.position.distanceTo(this.v.set(x, y + 1.2, z)), [w, h, k] = tier(d), near = d < 16;
      const o2 = { ...opts, light, seed: (i * 5 + 3) % 7 + 1, blink: near ? lidAt(i) : 0 };
      if (!near) o2.expr = o2.expr === "shout" ? "shout" : "neutral";
      st.places.push({ key: `${who}|${JSON.stringify(o2)}`, x, y, z, size: [w, h, k], draw: (p) => bodyFront(p, o, o2) });
      if (contact && d < 60) blob(st, sunDir, x, y, z);
    };
    const personSide = (who: string, o: Outfit, x: number, y: number, z: number, phase: number, i: number, mirror: boolean) => {
      if (!visible(x, y + 1.1, z, 3.5)) return;
      const d = cam.position.distanceTo(this.v.set(x, y + 1.2, z)), [w, h, k] = tier(d);
      const so = { mode: "march" as const, phase, expr: "nervous" as Expr, light, seed: 3, blink: 0, stride: 1.5 };
      st.places.push({ key: `${who}|side|${JSON.stringify(so)}`, x, y, z, size: [w, h, k], mirror, draw: (p) => bodySide(p, o, so) });
      blob(st, sunDir, x, y, z);
    };
    const card = (key: string, draw: (p: Pen) => void, cw: number, ch: number, x: number, y: number, z: number, w: number, h: number, extra: Partial<{ soft: boolean; flat: boolean; rot: number }> = {}) =>
      st.fx.push({ key, cw, ch, draw, x, y, z, w, h, ...extra });
    const smoke = (x: number, z: number, i: number, y0: number, dark: boolean, big = 1) => {
      for (let k = 0; k < 6; k++) {
        const u = (t * 0.08 + k / 6 + i * 0.13) % 1, sz = (4 + u * 16) * big;
        const sx = x - u * 10 * big, sy = y0 + u * 30 * big, sz2 = z + u * 4;
        if (cam.position.distanceTo(this.v.set(sx, sy, sz2)) < sz * 1.4) continue;
        card(`smoke|${dark}`, smokeDraw(dark), 256, 256, sx, sy, sz2, sz, sz, { soft: true });
      }
    };

    if (id === 1 || id === 2) { // humo lejano detrás de la ciudad (la guerra ya empezó en el gancho)
      if (id === 1) for (const [x, z, i] of [[-8, -6, 0], [8, -14, 1], [-20, -30, 2]]) smoke(x, z, i, 15, true, 0.8);
    }
    if (id === 3) {
      const X = THRONE_X, sat = f >= 236;
      const walk = smooth((f - 196) / 34);
      if (!sat) {
        const x = X + 4.2 - walk * 4.2, z = -2.4 - walk * 1.8;
        if (f >= 196) personSide("khalidWalk", KHALID, x, 0, z, (t * 1.8) % 1, 1, true);
      } else person("khalid", KHALID, X, 0.5, -4.0, { mode: "sit", expr: f > 248 ? "smile_closed" : "smile", facing: 0, look: 0 }, 1, false);
    }
    if (id === 4) {
      const X = -58, z = SHIP_Z + 1.6;
      person("officer", OFFICER, X, DECK, z, { mode: "stand", expr: f > 350 ? "stern" : "neutral", facing: 0 }, 2);
      card("ultimatum", ULTIMATUM, 400, 600, X + 0.42, DECK + 1.05, z - 0.25, 0.42, 0.63);
      if (f > 330) card("watch", watchDraw, 256, 256, X - 0.5, DECK + 0.95, z - 0.3, 0.26, 0.26);
      for (let k = 0; k < 4; k++) person(`sailorBg${k}`, SAILOR, X - 5 + k * 3.2, DECK, z + 1.6 + (k % 2) * 0.4, { mode: "stand", expr: "neutral", facing: 0 }, 20 + k);
    }
    if (id === 5) {
      let i = 0;
      for (let r = 0; r < 4; r++) for (let cI = 0; cI < 22; cI++) {
        const x = -10.5 + cI * 1.0 + (hh(i, 1) - 0.5) * 0.25, z = 23.6 - r * 1.15 + (hh(i, 2) - 0.5) * 0.25;
        const r0 = 395 + r * 6 + hh(i, 3) * 10, up = Math.round(6 * smooth((f - r0) / 10)) / 6;
        person(`def${i % 12}`, defender(i % 12), x, 0, z, { mode: "stand", expr: up > 0.5 ? "shout" : r % 2 ? "stern" : "neutral", facing: 0, raise: up }, 100 + i);
        i++;
      }
      person("khalidYard", KHALID, -1.2, 0, 15.2, { mode: "stand", expr: "stern", facing: 0, raise: 0 }, 1);
    }
    if (id === 6) {
      for (const [k, s] of SHIPS.entries()) {
        smoke(s.x - s.len * 0.25, SHIP_Z, k, DECK + 8, true, 0.5);
        // fogonazos por la banda: empiezan con «abren fuego», todos a la vez en «fuego»
        for (let g = 0; g < (s.kind === "cruiser" ? 4 : 2); g++) {
          const gx = s.x - s.len * 0.25 + g * (s.len * 0.45) / Math.max(1, s.kind === "cruiser" ? 3 : 1);
          const shots = [556 + ((k * 5 + g * 3) % 8), 564, 578 + ((k * 7 + g * 2) % 12)];
          for (const s0 of shots) {
            const d = f - s0;
            if (d >= 0 && d < 8) {
              const zf = SHIP_Z - (s.kind === "cruiser" ? 7.5 : 5.2) / 2 - 4;
              if (d < 4) card(`muzzle|${d}`, muzzleDraw(d), 256, 256, gx, DECK + 0.8, zf - 0.6, 10 - d * 1.8, 10 - d * 1.8);
              card(`burst|${d}`, burstDraw(d / 8), 500, 500, gx, DECK + 0.8, zf, 13 - d * 0.9, 13 - d * 0.9);
              card(`smokeW|${d}`, smokeDraw(false), 256, 256, gx - d * 0.4, DECK + 1.5 + d * 0.5, SHIP_Z - 10 - d * 0.8, 6 + d * 1.6, 6 + d * 1.6, { soft: true });
            }
          }
        }
      }
    }
    if (id === 7 || id === 9) {
      // fuego en el palacio: llamas en ventanas y galerías, columnas de humo negro
      const FIRES = [[-14, 10, 12.6], [-6, 5, 12.6], [3, 10, 12.6], [11, 5, 12.6], [15, 14.5, 4], [-10, 14.5, -2], [0, 14.5, 6], [6, 1, 12.8]];
      for (const [i, [x, y, z]] of FIRES.entries()) { const k = (id === 9 ? 0.7 : 1) * (1.6 + 0.9 * smooth((f - 600 - i * 4) / 30)); card(`flame|${(fi0 + i) % 4}`, flameDraw((fi0 + i) % 4), 256, 256, x, y + 1.6 * k, z, 3.4 * k, 3.4 * k); }
      for (const [i, [x, z]] of [[-12, 0], [2, 4], [12, -4], [-4, -10]].entries()) smoke(x, z, i, 15, true, 1.1);
      if (id === 7) for (const [k, s0] of [600, 612, 628, 642, 657].entries()) {
        const d = f - s0;
        if (d >= 0 && d < 10) { if (d < 5) card(`muzzleP|${d}`, muzzleDraw(d), 256, 256, -12 + k * 6, 6 + (k % 3) * 3, 13.4, 9 - d * 1.2, 9 - d * 1.2); card(`smokeP|${d}`, smokeDraw(true), 256, 256, -12 + k * 6, 7 + (k % 3) * 3 + d * 0.3, 13.1, 5 + d * 0.8, 5 + d * 0.8, { soft: true }); }
      }
    }
    if (id === 8) {
      // Jálid corre de puntillas hacia la puerta del consulado
      const run = smooth((f - 668) / 82), x = -100 + run * 32.6;
      personSide("khalidRun", KHALID, x, 0, -37.6, (t * 2.4) % 1, 1, false);
      for (const [i, [x2, z]] of [[-60, -80], [-30, -70]].entries()) smoke(x2, z, i, 12, true, 1.2);
    }
    if (id === 9) {
      for (let k = 0; k < 40; k++) {
        const x = -16 + hh(k, 70) * 32, z = 15 + hh(k, 71) * 11, o = defender(k % 12);
        card(`fallen|${k % 6}`, (p) => { p.g.scale(0.5, 0.5); bodyFront(p, { ...o, rifle: false }, { mode: "fall", expr: "dazed", light: LIGHT, seed: (k % 7) + 1 }); }, 300, 500, x, 0.04, z, 1.3, 2.16, { flat: true, rot: hh(k, 72) * 6.28 });
      }
      for (let k = 0; k < 30; k++) card("scorch", scorchDraw, 256, 256, -22 + hh(k, 80) * 44, 0.03, 13 + hh(k, 81) * 14, 4 + hh(k, 82) * 6, 3.2 + hh(k, 82) * 5, { flat: true, rot: hh(k, 83) * 6, soft: true });
    }
    if (id === 10) {
      const X = -6, z = SHIP_Z + 1.6;
      const lift = smooth((f - 905) / 12);
      person("sailor", SAILOR, X, DECK, z, { mode: "stand", expr: f > 915 ? "pained" : "nervous", facing: 0, wave: lift > 0.5 ? 0 : undefined }, 3);
      if (lift > 0.5) card("plaster", plasterDraw, 256, 256, X - 0.29, DECK + 1.53, z - 0.06, 0.17 * lift, 0.17 * lift);
      for (let k = 0; k < 3; k++) person(`sailorB${k}`, SAILOR, X - 4 + k * 3.5, DECK, z + 1.9, { mode: "stand", expr: "neutral", facing: 0 }, 30 + k);
    }
    if (id === 11) {
      person("viewer", VIEWER, TV_X - 1.1, 0.32, -3.0, { mode: "sit", expr: f > 1000 ? "grin" : "neutral", facing: 0, look: 1 }, 4, false);
    }
    if (id === 12) {
      const X = OFFICE_X;
      person("officerDesk", OFFICER, X + 0.2, 0, -2.9, { mode: "stand", expr: f > 1090 ? "smile_closed" : "stern", facing: 0 }, 2);
      for (const [k, sx] of [-0.8, 0.62].entries()) person(`supp${k}`, defender(k * 4 + 1), X + sx, 0, -0.45, { mode: "stand", expr: f > 1095 + k * 4 ? "shock" : "nervous", facing: 0 }, 40 + k);
      const unroll = smooth((f - 1070) / 26);
      card(`invoice|${Math.round(unroll * 10)}`, INVOICE, 400, 600, X - 0.08, 0.95 - 0.45 * unroll, 0.15, 0.62, 0.3 + 0.62 * unroll);
    }
    if (id === 13) {
      const wv = (Math.sin(t * 9) + 1) / 2;
      person("khalidBye", KHALID, -3.1, 0, 29.0, { mode: "stand", expr: "smile", facing: 0, wave: wv }, 1);
      person("sailorBye", SAILOR, -1.75, 0, 29.2, { mode: "stand", expr: "grin", facing: 0, wave: 1 - wv }, 3);
    }

    // ---- tarjetas a la escena ----
    let ai = 0;
    for (const p of st.places) {
      const a = this.actor(ai++), [w, h, k] = p.size, s = p.scale ?? 1;
      a.r = this.pool.req(p.key, w, h, k, p.draw);
      a.mesh.geometry = BODY;
      a.mesh.visible = true; a.mesh.position.set(p.x, p.y, p.z);
      a.mesh.rotation.set(0, Math.atan2(cam.position.x - p.x, cam.position.z - p.z), 0);
      a.mesh.scale.set(p.mirror ? -s : s, s, s);
    }
    for (let i = ai; i < this.actors.length; i++) this.actors[i].mesh.visible = false;
    let fi = 0;
    for (const p of st.fx) {
      if (!visible(p.x, p.y, p.z, Math.max(p.w, p.h))) continue;
      const e = this.fx(fi++);
      e.r = this.pool.req(p.key, p.cw, p.ch, 1, p.draw);
      e.use(!!p.soft); e.mesh.visible = true; e.mesh.position.set(p.x, p.y, p.z);
      if (p.flat) e.mesh.rotation.set(-Math.PI / 2, 0, p.rot ?? 0);
      else {
        const yaw = Math.atan2(cam.position.x - p.x, cam.position.z - p.z);
        e.mesh.rotation.order = "YXZ"; e.mesh.rotation.set(0, yaw, 0);
        if (p.soft) e.mesh.quaternion.copy(cam.quaternion);
      }
      e.mesh.scale.set(p.w, p.h, 1);
    }
    for (let i = fi; i < this.fxs.length; i++) this.fxs[i].mesh.visible = false;
    this.pool.flush();
    for (let i = 0; i < ai; i++) this.actors[i].bind();
    for (let i = 0; i < fi; i++) this.fxs[i].bind();
    return focus;
  }
}

/** planta de interior: hojas como la palmera, pequeña */
function palmLike(root: THREE.Object3D, x: number, y: number, z: number) {
  const lm = new THREE.MeshLambertMaterial({ map: leafTex(), alphaTest: 0.5, side: THREE.DoubleSide }); twoTone(lm);
  for (let k = 0; k < 7; k++) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(0.35, 1.2).translate(0, 0.6, 0), lm); m.position.set(x, y, z);
    m.rotation.order = "YXZ"; m.rotation.set(0.5 + 0.3 * hh(k, 2), (k / 7) * Math.PI * 2, 0); root.add(m);
  }
}
