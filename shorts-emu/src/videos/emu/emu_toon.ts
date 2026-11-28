// Emús en el estilo de la skill: plano, contorno ciruela de grosor variable, sombreado pintado, ojos de párpado.
// Lienzo de diseño 600 x 1000 (las patas tocan y = 975), igual que los personajes, así usan la misma tarjeta BODY.
import { Pen, INK, mul, shade } from "./toon";
type P2 = [number, number];
export type EmuExpr = "lid" | "shock" | "wink" | "happy" | "angry";
export type EmuOpts = { phase?: number; run?: number; eat?: number; expr?: EmuExpr; light?: number; hat?: boolean; tall?: number; seed?: number; blink?: number };
const BODY = "#6b5a4b", BODY_D = "#4e4036", NECK = "#8194aa", HEAD = "#5a4d44", BEAK = "#3c342e", LEG = "#8e8a7e", FACE = "#94a8c0";
const r1 = (s: number, k: number) => { const x = Math.sin(s * 127.1 + k * 311.7) * 43758.5453; return x - Math.floor(x); };

const shaggy = (cx: number, cy: number, rx: number, ry: number, seed: number): P2[] => {
  const pts: P2[] = [];
  for (let i = 0; i < 64; i++) {
    const a = (i / 64) * Math.PI * 2, low = Math.max(0, Math.sin(a));
    const fr = 1 + 0.04 * Math.sin(a * 7 + seed) + (i % 2 ? 0.1 * low : -0.02 * low);
    pts.push([cx + rx * Math.cos(a) * fr, cy + ry * Math.sin(a) * fr * (1 + 0.1 * low)]);
  }
  return pts;
};
const eye = (p: Pen, x: number, y: number, s: number, expr: EmuExpr, blink: number, side: number) => {
  const lw = 4.5 * s;
  if (blink > 0.5 && expr !== "shock") { p.stroke([[x - 9 * s, y], [x + 9 * s, y]], lw); return; }
  switch (expr) {
    case "shock": p.ell(x, y, 13 * s, 15 * s, "#ffffff", 3.5 * s); p.dot(x + 2 * s * side, y + 1 * s, 5 * s); break;
    case "wink": if (side > 0) { p.stroke([[x - 8 * s, y - 7 * s], [x + 6 * s, y], [x - 8 * s, y + 7 * s]], lw); break; }
    // falls through: el otro ojo, normal
    case "lid": p.ell(x, y, 8 * s, 7 * s, INK, 0, 0, 180); p.stroke([[x - 10 * s, y], [x + 10 * s, y]], lw); break;
    case "angry": p.ell(x, y + 1 * s, 8 * s, 6 * s, INK, 0, 0, 180); p.stroke([[x - 12 * s * side, y - 12 * s], [x + 8 * s * side, y - 4 * s]], lw); break;
    case "happy": p.arc(x, y + 3 * s, 8 * s, 6 * s, 200, 340, lw); break;
  }
};
const slouchOnHead = (p: Pen, hx: number, hy: number, s: number) => {
  p.ell(hx, hy - 30 * s, 70 * s, 12 * s, "#6e6242", 4 * s);
  p.poly([[hx - 38 * s, hy - 32 * s], [hx - 32 * s, hy - 70 * s], [hx + 32 * s, hy - 70 * s], [hx + 38 * s, hy - 32 * s]], "#8a7a52", 4 * s);
  p.poly([[hx - 68 * s, hy - 30 * s], [hx - 60 * s, hy - 78 * s], [hx - 40 * s, hy - 60 * s], [hx - 38 * s, hy - 32 * s]], "#7d6e48", 4 * s);
  p.dot(hx - 52 * s, hy - 54 * s, 5 * s, "#e8c45a");
};

/** emú de perfil mirando a la derecha; phase 0..1 del paso, run 0 (quieto) .. 1 (carrera), eat 0..1 (cabeza al suelo) */
export const emuSide = (p: Pen, o: EmuOpts = {}) => {
  const { phase = 0, run = 0, eat = 0, expr = "lid", light = -2.1, hat = false, tall = 0, seed = 1, blink = 0 } = o;
  const bob = run * 18 * Math.abs(Math.sin(phase * Math.PI * 2)), ow = 5.5;
  const bx = 285, by = 560 - bob - tall * 20;
  const hip: P2 = [bx + 10, by + 90];
  const leg = (ph: number, near: boolean) => {
    const a = Math.sin(ph * Math.PI * 2) * 0.65 * run, lift = Math.max(0, Math.cos(ph * Math.PI * 2)) * 70 * run;
    const foot: P2 = [hip[0] + 230 * Math.sin(a), 975 - lift], hock: P2 = [hip[0] + 40 + 120 * Math.sin(a) - 30 * run * Math.max(0, Math.cos(ph * Math.PI * 2)), (hip[1] + foot[1]) / 2 + 20];
    const col = near ? LEG : shade(LEG, 0.75);
    p.line([hip, hock, foot], col, 24);
    for (const d of [-1, 0, 1]) p.line([foot, [foot[0] + 34 + d * 6, foot[1] + d * 8]], col, 12);
    p.line([foot, [foot[0] - 16, foot[1] + 4]], col, 10);
  };
  leg(phase + 0.5, false);
  const body = shaggy(bx, by, 175, 125, seed);
  p.shadedFill(body, BODY, mul(BODY, [0.66, 0.66, 0.74]), light, 175, 0.4);
  p.clip(body, () => { for (let k = 0; k < 9; k++) { const x = bx - 140 + k * 34, y = by - 20 + (k % 3) * 26; p.arc(x, y, 30, 18, 20, 160, 3.5, BODY_D); } });
  p.inkRing(body, ow, 3);
  // cuello: de la pechuga a la cabeza (baja al comer)
  const n0: P2 = [bx + 135, by - 40];
  const head: P2 = [bx + 175 + eat * 140, by - 360 - tall * 90 + eat * (975 - 60 - (by - 360))];
  const ctrl: P2 = [n0[0] + 60 + eat * 60, (n0[1] + head[1]) / 2 - eat * 80];
  const neck: P2[] = [];
  for (let i = 0; i <= 12; i++) { const t = i / 12, u = 1 - t; neck.push([u * u * n0[0] + 2 * u * t * ctrl[0] + t * t * head[0], u * u * n0[1] + 2 * u * t * ctrl[1] + t * t * head[1]]); }
  p.line(neck, NECK, 46);
  p.line(neck.slice(0, 6), BODY, 60); // plumas del arranque del cuello
  // cabeza
  const [hx, hy] = head;
  p.ell(hx, hy, 46, 36, HEAD, ow);
  p.ell(hx + 14, hy - 2, 22, 18, FACE, 0);
  p.poly([[hx + 34, hy - 6], [hx + 92, hy + 6], [hx + 34, hy + 16]], BEAK, 4);
  eye(p, hx + 14, hy - 6, 1, expr, blink, 1);
  if (hat) slouchOnHead(p, hx, hy, 1);
  leg(phase, true);
};

/** emú de frente */
export const emuFront = (p: Pen, o: EmuOpts = {}) => {
  const { expr = "lid", light = -2.1, hat = false, tall = 0, seed = 1, blink = 0, phase = 0, run = 0 } = o;
  const ow = 5.5, bx = 300, by = 590 - tall * 20, bob = run * 14 * Math.abs(Math.sin(phase * Math.PI * 2));
  for (const s of [-1, 1]) {
    const lift = run * Math.max(0, Math.sin((phase + (s > 0 ? 0.5 : 0)) * Math.PI * 2)) * 50;
    const top: P2 = [bx + s * 50, by + 100], foot: P2 = [bx + s * 62, 975 - lift];
    p.line([top, [bx + s * 70, (top[1] + foot[1]) / 2], foot], LEG, 24);
    for (const d of [-1, 0, 1]) p.line([foot, [foot[0] + d * 22, foot[1] + 14]], LEG, 11);
  }
  const body = shaggy(bx, by - bob, 165, 150, seed);
  p.shadedFill(body, BODY, mul(BODY, [0.66, 0.66, 0.74]), light, 165, 0.4);
  p.clip(body, () => { for (let k = 0; k < 8; k++) { const x = bx - 120 + (k % 4) * 80, y = by - 40 + (k >> 2) * 60; p.arc(x, y, 34, 18, 20, 160, 3.5, BODY_D); } });
  p.inkRing(body, ow, 3);
  const hy = 210 - tall * 90;
  p.line([[bx, by - 120 - bob], [bx + 4, (by + hy) / 2], [bx, hy + 30]], NECK, 50);
  p.line([[bx, by - 120 - bob], [bx + 2, by - 200]], BODY, 64);
  p.ell(bx, hy, 50, 44, HEAD, ow);
  p.ell(bx, hy + 2, 36, 26, FACE, 0);
  eye(p, bx - 20, hy - 6, 1, expr, blink, -1); eye(p, bx + 20, hy - 6, 1, expr, blink, 1);
  p.poly([[bx - 14, hy + 16], [bx + 14, hy + 16], [bx, hy + 44]], BEAK, 4);
  if (hat) slouchOnHead(p, bx, hy, 1);
};
