// Vintage Dossier - style kit. Only useCurrentFrame / interpolate / spring (no CSS animation, no timers).
import React from "react";
import { AbsoluteFill, Img, interpolate, random, spring, staticFile, useCurrentFrame, useVideoConfig, Easing } from "remotion";
import { T } from "./tokens";

export const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
export const useSec = () => { const f = useCurrentFrame(); const { fps } = useVideoConfig(); return { f, fps, s: f / fps, fr: (t: number) => Math.round(t * fps) }; };
export const ease = Easing.bezier(0.22, 1, 0.36, 1); // out-expo-ish, measured feel of slide settles
export const easeInOut = Easing.bezier(0.65, 0, 0.35, 1);

/** progress 0..1 between t and t+dur (seconds) */
export const useProg = (t: number, dur: number, e = ease) => { const { s } = useSec(); return interpolate(s, [t, t + dur], [0, 1], { ...clamp, easing: e }); };

// ---------- background ----------
export const Desk: React.FC<{ drift?: number }> = ({ drift = 0 }) => {
  const { f } = useSec();
  return <AbsoluteFill style={{ background: T.color.desk }}>
    <Img src={staticFile("desk.jpg")} style={{ width: "110%", height: "110%", position: "absolute", left: "-5%", top: "-5%", transform: `translate(${Math.sin(f / 90 + drift) * 12}px, ${Math.cos(f / 110 + drift) * 8}px)` }} />
  </AbsoluteFill>;
};

// ---------- film layer: grain, vignette, flicker, weave, dust ----------
export const FilmLayer: React.FC<{ vignette?: number }> = ({ vignette = 0.85 }) => {
  const { f } = useSec();
  const flick = 1 + (random(`fl${f}`) - 0.5) * 0.05;
  const dust = Array.from({ length: 3 }, (_, i) => ({ on: random(`d${f}${i}`) > 0.72, x: random(`dx${f}${i}`) * 1920, y: random(`dy${f}${i}`) * 1080, r: 1 + random(`dr${f}${i}`) * 2.5 }));
  const scratch = random(`sc${Math.floor(f / 3)}`) > 0.86 ? random(`sx${Math.floor(f / 3)}`) * 1920 : -10;
  return <AbsoluteFill style={{ pointerEvents: "none" }}>
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 72% 68% at 50% 48%, rgba(0,0,0,0) 35%, rgba(0,0,0,${vignette}) 100%)` }} />
    <Img src={staticFile(`grain${f % 4}.png`)} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", mixBlendMode: "overlay", opacity: 0.22 }} />
    <AbsoluteFill style={{ background: `rgba(255,236,200,${(flick - 1) * 0.6 + 0.012})` }} />
    <svg width={1920} height={1080} style={{ position: "absolute" }}>
      {dust.map((d, i) => d.on ? <circle key={i} cx={d.x} cy={d.y} r={d.r} fill="rgba(235,225,200,0.35)" /> : null)}
      <line x1={scratch} y1={0} x2={scratch + 4} y2={1080} stroke="rgba(230,220,195,0.10)" strokeWidth={1.5} />
    </svg>
  </AbsoluteFill>;
};

/** gate weave + optional shake impulses; wrap whole frame content */
export const Gate: React.FC<{ shakes?: number[]; children: React.ReactNode }> = ({ shakes = [], children }) => {
  const { f, s } = useSec();
  let dx = (random(`wx${f}`) - 0.5) * 1.2, dy = (random(`wy${f}`) - 0.5) * 1.2;
  for (const t of shakes) { const k = interpolate(s, [t, t + 0.45], [1, 0], clamp); if (s >= t && k > 0) { dx += Math.sin(f * 2.1) * 14 * k * k; dy += Math.cos(f * 2.7) * 10 * k * k; } }
  return <AbsoluteFill style={{ transform: `translate(${dx}px, ${dy}px)` }}>{children}</AbsoluteFill>;
};

/** camera rig: push/pan between keyframes (seconds) */
export const Cam: React.FC<{ keys: { t: number; x: number; y: number; z: number; r?: number }[]; children: React.ReactNode }> = ({ keys, children }) => {
  const { s } = useSec(); const ts = keys.map((k) => k.t);
  const g = (p: "x" | "y" | "z" | "r") => keys.length === 1 ? (keys[0][p] ?? 0) : interpolate(s, ts, keys.map((k) => k[p] ?? 0), { ...clamp, easing: easeInOut });
  return <AbsoluteFill style={{ transform: `translate(960px,540px) scale(${g("z")}) rotate(${g("r")}deg) translate(${-g("x")}px, ${-g("y")}px)`, transformOrigin: "0 0" }}>
    <div style={{ position: "absolute", left: 0, top: 0 }}>{children}</div>
  </AbsoluteFill>;
};

// ---------- scene shell: visible only in [a,b) with an entrance/exit transform ----------
export type Tr = "slideUp" | "whipLeft" | "flash" | "shutter" | "none";
export const Scene: React.FC<{ a: number; b: number; inTr?: Tr; outTr?: Tr; children: React.ReactNode }> = ({ a, b, inTr = "none", outTr = "none", children }) => {
  const { s } = useSec();
  if (s < a - 0.25 || s >= b + 0.25) return null;
  const pin = interpolate(s, [a - 0.2, a + 0.12], [0, 1], { ...clamp, easing: ease });
  const pout = interpolate(s, [b - 0.12, b + 0.2], [0, 1], { ...clamp, easing: Easing.in(Easing.cubic) });
  let tx = 0, ty = 0, op = 1, blur = 0;
  if (s < a + 0.12) { if (inTr === "slideUp") ty = (1 - pin) * 1100; if (inTr === "whipLeft") { tx = (1 - pin) * 2000; blur = (1 - pin) * 30; } if (inTr === "flash" || inTr === "shutter" || inTr === "none") op = s >= a ? 1 : 0; }
  if (s > b - 0.12) { if (outTr === "slideUp") ty = -pout * 1100; if (outTr === "whipLeft") { tx = -pout * 2000; blur = pout * 30; } if (outTr === "flash" || outTr === "shutter" || outTr === "none") op = s < b ? 1 : 0; }
  return <AbsoluteFill style={{ transform: `translate(${tx}px, ${ty}px)`, opacity: op, filter: blur ? `blur(${blur}px)` : undefined }}>{children}</AbsoluteFill>;
};
/** light-burn flash at a cut */
export const BurnFlash: React.FC<{ t: number; dur?: number; color?: string }> = ({ t, dur = 0.35, color = "255,226,180" }) => {
  const { s } = useSec(); const o = interpolate(s, [t - dur * 0.4, t, t + dur], [0, 0.9, 0], clamp);
  return o > 0 ? <AbsoluteFill style={{ background: `radial-gradient(ellipse at 40% 50%, rgba(${color},${o}) 0%, rgba(${color},${o * 0.5}) 50%, rgba(0,0,0,0) 100%)`, mixBlendMode: "screen" }} /> : null;
};
export const Shutter: React.FC<{ t: number }> = ({ t }) => { const { s } = useSec(); return s >= t - 0.07 && s < t + 0.03 ? <AbsoluteFill style={{ background: "#000" }} /> : null; };

// ---------- archival print ----------
export const Print: React.FC<{ src: string; x: number; y: number; w: number; rot: number; t: number; from?: [number, number, number]; pin?: boolean; children?: React.ReactNode; aspect: number }> =
  ({ src, x, y, w, rot, t, from = [0, 900, 14], pin = true, aspect, children }) => {
    const { f, fr, fps } = useSec();
    const p = spring({ frame: f - fr(t), fps, config: T.motion.printIn });
    const b = w * T.shape.printBorder; const h = w / aspect;
    const tx = (1 - p) * from[0], ty = (1 - p) * from[1], r = rot + (1 - p) * from[2];
    if (f < fr(t)) return null;
    return <div style={{ position: "absolute", left: x, top: y, width: w + 2 * b, height: h + 2 * b * 1.15, transform: `translate(${tx}px, ${ty}px) rotate(${r}deg)`, background: T.color.paperEdge, boxShadow: T.shape.shadow, padding: b, paddingBottom: b * 1.3, boxSizing: "border-box" }}>
      <Img src={staticFile("paper.jpg")} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.55, mixBlendMode: "multiply" }} />
      <Img src={staticFile(src)} style={{ position: "relative", width: w, height: h, objectFit: "cover", display: "block", filter: "contrast(1.05)" }} />
      <div style={{ position: "absolute", inset: b, boxShadow: "inset 0 0 40px rgba(60,40,20,0.45)", pointerEvents: "none" }} />
      {pin ? <Pin x={(w + 2 * b) / 2} y={b * 0.5} /> : null}
      {children}
    </div>;
  };
export const Pin: React.FC<{ x: number; y: number }> = ({ x, y }) => <div style={{ position: "absolute", left: x - T.shape.pin, top: y - T.shape.pin, width: T.shape.pin * 2, height: T.shape.pin * 2, borderRadius: "50%", background: `radial-gradient(circle at 35% 35%, #e0605a, ${T.color.red} 55%, #5a0f12)`, boxShadow: "2px 4px 5px rgba(0,0,0,0.55)" }} />;

// ---------- typewriter label (redaction tape) ----------
export const TypeLabel: React.FC<{ text: string; t: number; cps: number; size?: number; style?: React.CSSProperties; bar?: boolean }> = ({ text, t, cps, size = 26, style, bar = true }) => {
  const { s } = useSec(); if (s < t) return null;
  const n = Math.min(text.length, Math.floor((s - t) * cps) + 1); const done = n >= text.length;
  const cur = !done || (s - t - text.length / cps) < 0.6 ? (Math.floor(s * 4) % 2 === 0 || !done ? "_" : " ") : "";
  return <div style={{ position: "absolute", fontFamily: T.font.mono, fontWeight: 700, fontSize: size, letterSpacing: "0.08em", color: bar ? T.color.tapeText : T.color.ink, background: bar ? T.color.tape : "transparent", padding: bar ? `${size * 0.18}px ${size * 0.45}px` : 0, whiteSpace: "pre", lineHeight: 1.15, boxShadow: bar ? "0 2px 6px rgba(0,0,0,0.5)" : undefined, ...style }}>
    {text.slice(0, n)}<span>{cur}</span>
  </div>;
};

// ---------- rolling number (ticker) ----------
export const Roll: React.FC<{ from: number; to: number; t: number; t2: number }> = ({ from, to, t, t2 }) => {
  const { s } = useSec(); const v = Math.round(interpolate(s, [t, t2], [from, to], { ...clamp, easing: Easing.out(Easing.quad) }));
  const land = interpolate(s, [t2, t2 + 0.25], [1.08, 1], clamp);
  return <span style={{ display: "inline-block", transform: `scale(${s >= t2 ? land : 1})` }}>{v}</span>;
};

// ---------- red pen: wobbly ellipse, strike, arrow, border trace ----------
export const wobblyEllipse = (cx: number, cy: number, rx: number, ry: number, seed = 1) => {
  const pts: string[] = []; const N = 60;
  for (let i = 0; i <= N; i++) {
    const a = -2.2 + (i / N) * Math.PI * 2.12; const w = 1 + 0.035 * Math.sin(a * 3 + seed) + 0.02 * Math.sin(a * 7 + seed * 2);
    const drift = 1 + (i / N) * 0.05;
    pts.push(`${(cx + Math.cos(a) * rx * w * drift).toFixed(1)},${(cy + Math.sin(a) * ry * w).toFixed(1)}`);
  }
  return "M" + pts.join("L");
};
export const PenPath: React.FC<{ d: string; t: number; dur: number; width?: number; color?: string; dash?: string }> = ({ d, t, dur, width = 5, color = T.color.red }) => {
  const p = useProg(t, dur, Easing.inOut(Easing.quad)); if (p <= 0) return null;
  return <path d={d} pathLength={1} strokeDasharray="1 1" strokeDashoffset={1 - p} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(0 0 1px rgba(120,10,10,0.6))" }} />;
};
/** curved arrow (quadratic) with head */
export const Arrow: React.FC<{ a: [number, number]; c: [number, number]; b: [number, number]; t: number; dur: number; width?: number }> = ({ a, c, b, t, dur, width = 12 }) => {
  const p = useProg(t, dur, Easing.inOut(Easing.cubic)); if (p <= 0) return null;
  const q = (u: number) => [(1 - u) ** 2 * a[0] + 2 * (1 - u) * u * c[0] + u * u * b[0], (1 - u) ** 2 * a[1] + 2 * (1 - u) * u * c[1] + u * u * b[1]];
  const e = q(p); const e0 = q(Math.max(0, p - 0.02)); const ang = Math.atan2(e[1] - e0[1], e[0] - e0[0]) * 180 / Math.PI; const hs = width * 2.6;
  return <g>
    <path d={`M${a[0]},${a[1]} Q${c[0]},${c[1]} ${b[0]},${b[1]}`} pathLength={1} strokeDasharray="1 1" strokeDashoffset={1 - p * 0.985} fill="none" stroke={T.color.red} strokeWidth={width} strokeLinecap="round" opacity={0.92} />
    <polygon points={`${hs},0 ${-hs * 0.6},${-hs * 0.75} ${-hs * 0.6},${hs * 0.75}`} fill={T.color.red} transform={`translate(${e[0]},${e[1]}) rotate(${ang})`} />
  </g>;
};

// ---------- string between two pins (sagging thread) ----------
export const StringLine: React.FC<{ a: [number, number]; b: [number, number]; t: number; dur: number; sag?: number }> = ({ a, b, t, dur, sag = 70 }) => {
  const p = useProg(t, dur, Easing.out(Easing.cubic)); const { s } = useSec(); if (p <= 0) return null;
  const sway = Math.sin((s - t) * 7) * 10 * interpolate(s, [t + dur, t + dur + 0.9], [1, 0], clamp);
  const c: [number, number] = [(a[0] + b[0]) / 2, Math.max(a[1], b[1]) + sag + sway];
  const d = `M${a[0]},${a[1]} Q${c[0]},${c[1]} ${b[0]},${b[1]}`;
  return <g><path d={d} pathLength={1} strokeDasharray="1 1" strokeDashoffset={1 - p} fill="none" stroke="rgba(0,0,0,0.45)" strokeWidth={4} transform="translate(3,6)" />
    <path d={d} pathLength={1} strokeDasharray="1 1" strokeDashoffset={1 - p} fill="none" stroke={T.color.red} strokeWidth={3.2} /></g>;
};

// ---------- rubber stamp ----------
export const Stamp: React.FC<{ text: string; t: number; x: number; y: number; rot?: number; size?: number }> = ({ text, t, x, y, rot = -9, size = 64 }) => {
  const { f, fr, fps } = useSec(); if (f < fr(t)) return null;
  const p = spring({ frame: f - fr(t), fps, config: { damping: 14, stiffness: 420, mass: 0.5 } });
  const sc = interpolate(p, [0, 1], [2.2, 1]); const op = interpolate(p, [0, 0.4], [0, 0.92], clamp);
  return <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%,-50%) rotate(${rot}deg) scale(${sc})`, opacity: op, border: `6px solid ${T.color.red}`, outline: `2px solid ${T.color.red}`, outlineOffset: 5, color: T.color.red, fontFamily: T.font.mono, fontWeight: 700, fontSize: size, letterSpacing: "0.12em", padding: "6px 22px", whiteSpace: "nowrap", mixBlendMode: "multiply", maskImage: "radial-gradient(circle at 30% 40%, #000 55%, rgba(0,0,0,0.75) 70%, #000 85%)" }}>{text}</div>;
};

// ================= ONE-WORLD SYSTEM (continuous desk, camera glides) =================
export type K = { t: number; x: number; y: number; s?: number; r?: number; z?: number };
/** keyframe sampler: per-segment ease-in-out; hold = repeat a key */
export const kf = (keys: K[], s: number, p: "x" | "y" | "s" | "r" | "z", def = 0) => {
  if (keys.length === 1) return keys[0][p] ?? def;
  return interpolate(s, keys.map((k) => k.t), keys.map((k) => k[p] ?? def), { ...clamp, easing: easeInOut });
};
/** world camera: keys in world px, z = screen px per world px; adds speed-based motion blur */
export const WorldCam: React.FC<{ keys: K[]; children: React.ReactNode; maxBlur?: number }> = ({ keys, children, maxBlur = 4 }) => {
  const { s, fps } = useSec(); const d = 1 / fps;
  const x = kf(keys, s, "x"), y = kf(keys, s, "y"), z = kf(keys, s, "z", 1), r = kf(keys, s, "r");
  const vx = (x - kf(keys, s - d, "x")) * z, vy = (y - kf(keys, s - d, "y")) * z, vz = Math.abs(z - kf(keys, s - d, "z", 1)) * 1200;
  const blur = Math.min(maxBlur, Math.hypot(vx, vy, vz) / 30);
  return <AbsoluteFill style={{ overflow: "hidden" }}>
    <div style={{ position: "absolute", left: 0, top: 0, transformOrigin: "0 0", transform: `translate(960px,540px) rotate(${r}deg) scale(${z}) translate(${-x}px, ${-y}px)`, filter: blur > 0.4 ? `blur(${blur.toFixed(2)}px)` : undefined }}>{children}</div>
  </AbsoluteFill>;
};
/** desk surface covering the whole world */
export const WorldDesk: React.FC<{ w: number; h: number }> = ({ w, h }) => <div style={{ position: "absolute", left: -1500, top: -1500, width: w + 3000, height: h + 3000, background: T.color.desk }}>
  <Img src={staticFile("desk.jpg")} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} /></div>;

export const printBox = (w: number, aspect: number) => { const b = w * T.shape.printBorder; return { b, W: w + 2 * b, H: w / aspect + 2.3 * b }; };
/** print in world space: keys = center x,y + scale s + rot r; drops onto the desk at t0 */
export const WPrint: React.FC<{ src: string; aspect: number; w: number; keys: K[]; t0: number; from?: [number, number, number]; children?: React.ReactNode }> = ({ src, aspect, w, keys, t0, from = [0, -80, 7], children }) => {
  const { f, s, fr, fps } = useSec(); if (f < fr(t0)) return null;
  const p = spring({ frame: f - fr(t0), fps, config: T.motion.printIn });
  const { b, W, H } = printBox(w, aspect);
  const x = kf(keys, s, "x") + (1 - p) * from[0], y = kf(keys, s, "y") + (1 - p) * from[1], sc = kf(keys, s, "s", 1) * (1 + 0.28 * (1 - p)), r = kf(keys, s, "r") + (1 - p) * from[2];
  const lift = 1 - p;
  return <div style={{ position: "absolute", left: x - W / 2, top: y - H / 2, width: W, height: H, transform: `rotate(${r}deg) scale(${sc})`, opacity: Math.min(1, p * 2.5), padding: b, paddingBottom: b * 1.3, boxSizing: "border-box", background: T.color.paperEdge, boxShadow: `0 ${18 + 50 * lift}px ${40 + 60 * lift}px rgba(0,0,0,${0.55 - 0.15 * lift}), 0 3px 8px rgba(0,0,0,0.5)` }}>
    <Img src={staticFile("paper.jpg")} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.55, mixBlendMode: "multiply" }} />
    <Img src={staticFile(src)} style={{ position: "relative", width: w, height: w / aspect, objectFit: "cover", display: "block", filter: "contrast(1.05)" }} />
    <div style={{ position: "absolute", inset: b, boxShadow: "inset 0 0 40px rgba(60,40,20,0.45)", pointerEvents: "none" }} />
    <Pin x={W / 2} y={b * 0.5} />
    {children}
  </div>;
};
/** world position of a WPrint's pin at time s (for strings) */
export const pinAt = (w: number, aspect: number, keys: K[], s: number): [number, number] => {
  const { b, H } = printBox(w, aspect); const sc = kf(keys, s, "s", 1), r = kf(keys, s, "r") * Math.PI / 180;
  const ox = 0, oy = (-H / 2 + b * 0.5) * sc; return [kf(keys, s, "x") + ox * Math.cos(r) - oy * Math.sin(r), kf(keys, s, "y") + ox * Math.sin(r) + oy * Math.cos(r)];
};

// ================= MAP STORY LAYER: country focus + cartoon war icons (draw inside a map <svg>) =================
export const NATION = { aggressor: "168,44,40", defender: "58,108,168", ally: "64,138,84", neutral: "196,160,70" }; // fill/glow tints
/** glow outline + color wash on a country when it is talked about */
export const CountryFocus: React.FC<{ d: string; t: number; rgb: string; id: string }> = ({ d, t, rgb, id }) => {
  const { s } = useSec(); const p = interpolate(s, [t, t + 0.45], [0, 1], { ...clamp, easing: ease });
  if (p <= 0) return null; const pulse = interpolate(s, [t, t + 0.35, t + 1.2], [0, 1, 0.55], clamp);
  return <g>
    <defs><filter id={`gl${id}`} x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="14" /></filter></defs>
    <path d={d} fillRule="evenodd" fill={`rgba(${rgb},${0.42 * p})`} />
    <path d={d} fill="none" stroke={`rgba(${rgb},${pulse})`} strokeWidth={26} filter={`url(#gl${id})`} />
    <path d={d} fill="none" stroke={`rgba(${rgb},${0.95 * p})`} strokeWidth={5} strokeLinejoin="round" />
  </g>;
};
const INK = "#2a2118";
/** pop-in scale for icons */
const usePop = (t: number) => { const { f, fr, fps } = useSec(); return f < fr(t) ? 0 : spring({ frame: f - fr(t), fps, config: { damping: 9, stiffness: 220, mass: 0.6 } }); };
const qpt = (a: number[], c: number[], b: number[], u: number) => [(1 - u) ** 2 * a[0] + 2 * (1 - u) * u * c[0] + u * u * b[0], (1 - u) ** 2 * a[1] + 2 * (1 - u) * u * c[1] + u * u * b[1]];
/** cartoon tank that rolls along a quadratic route */
export const TankIcon: React.FC<{ a: number[]; c: number[]; b: number[]; t: number; t2: number; u0?: number; u1?: number; size?: number }> = ({ a, c, b, t, t2, u0 = 0.25, u1 = 0.92, size = 90 }) => {
  const { s, f } = useSec(); const pop = usePop(t); if (pop <= 0) return null;
  const u = interpolate(s, [t, t2], [u0, u1], { ...clamp, easing: Easing.inOut(Easing.quad) }); const p = qpt(a, c, b, u), p2 = qpt(a, c, b, Math.min(1, u + 0.01));
  const ang = Math.atan2(p2[1] - p[1], p2[0] - p[0]) * 180 / Math.PI; const flip = Math.abs(ang) > 90 ? -1 : 1; const bob = Math.sin(f * 1.3) * 1.5;
  return <g transform={`translate(${p[0]},${p[1] + bob}) rotate(${flip < 0 ? ang + 180 : ang}) scale(${(size / 100) * pop * flip},${(size / 100) * pop})`}>
    <ellipse cx={0} cy={22} rx={52} ry={9} fill="rgba(0,0,0,0.25)" />
    <rect x={-48} y={0} width={96} height={20} rx={10} fill={INK} />
    {[-34, -17, 0, 17, 34].map((x) => <circle key={x} cx={x} cy={10} r={6} fill="#d8ccb0" />)}
    <path d="M-42,0 L-36,-14 L38,-14 L44,0 Z" fill="#5b4a36" stroke={INK} strokeWidth={3} />
    <rect x={-18} y={-30} width={36} height={18} rx={7} fill="#5b4a36" stroke={INK} strokeWidth={3} />
    <rect x={16} y={-25} width={44} height={7} rx={3} fill={INK} />
    <circle cx={-2} cy={-21} r={4} fill={T.color.red} />
  </g>;
};
/** cartoon bomber flying straight from a to b with ground shadow */
export const PlaneIcon: React.FC<{ a: number[]; b: number[]; t: number; t2: number; size?: number }> = ({ a, b, t, t2, size = 120 }) => {
  const { s, f } = useSec(); const pop = usePop(t); if (pop <= 0 || s > t2 + 0.1) return null;
  const u = interpolate(s, [t, t2], [0, 1], clamp); const x = a[0] + (b[0] - a[0]) * u, y = a[1] + (b[1] - a[1]) * u;
  const ang = Math.atan2(b[1] - a[1], b[0] - a[0]) * 180 / Math.PI; const fade = interpolate(s, [t2 - 0.25, t2], [1, 0], clamp);
  const body = <g><path d="M-55,0 Q-45,-9 40,-6 Q58,0 40,6 Q-45,9 -55,0 Z" fill={INK} />
    <path d="M-5,-6 L-20,-62 L4,-62 L22,-6 Z M-5,6 L-20,62 L4,62 L22,6 Z" fill="#4a3c2c" stroke={INK} strokeWidth={3} />
    <path d="M-50,-3 L-62,-24 L-52,-24 L-40,-3 Z M-50,3 L-62,24 L-52,24 L-40,3 Z" fill="#4a3c2c" />
    <circle cx={6} cy={-34} r={6} fill={T.color.red} /><circle cx={6} cy={34} r={6} fill={T.color.red} />
    <ellipse cx={58} cy={0} rx={3} ry={14 + Math.sin(f * 3) * 6} fill="rgba(216,204,176,0.8)" /></g>;
  return <g opacity={fade}>
    <g transform={`translate(${x + 40},${y + 60}) rotate(${ang}) scale(${(size / 120) * pop})`} opacity={0.28} style={{ filter: "blur(4px)" }}>{body}</g>
    <g transform={`translate(${x},${y + Math.sin(f / 4) * 3}) rotate(${ang}) scale(${(size / 120) * pop})`}>{body}</g>
  </g>;
};
/** cartoon explosion: starburst + smoke puffs */
export const BurstIcon: React.FC<{ x: number; y: number; t: number; size?: number }> = ({ x, y, t, size = 120 }) => {
  const { s } = useSec(); const pop = usePop(t); if (pop <= 0) return null; const fade = interpolate(s, [t + 0.5, t + 1.3], [1, 0], clamp); if (fade <= 0) return null;
  const star = (R: number, r: number, n = 10) => Array.from({ length: n * 2 }, (_, i) => { const a = (i / (n * 2)) * Math.PI * 2; const rr = i % 2 ? r : R; return `${(Math.cos(a) * rr).toFixed(1)},${(Math.sin(a) * rr).toFixed(1)}`; }).join(" ");
  const k = size / 100, rise = (s - t) * 40;
  return <g transform={`translate(${x},${y})`} opacity={fade}>
    {[[-40, -20, 26], [35, -30, 22], [0, -55, 30]].map(([dx, dy, r], i) => <circle key={i} cx={dx * k} cy={(dy - rise) * k} r={r * k * Math.min(1, pop * 1.2)} fill="rgba(70,58,46,0.55)" />)}
    <g transform={`scale(${k * pop})`}><polygon points={star(60, 30)} fill={T.color.red} stroke={INK} strokeWidth={4} strokeLinejoin="round" /><polygon points={star(34, 16, 8)} fill="#f0b45a" /><circle r={10} fill="#fff1c9" /></g>
  </g>;
};
/** small warship silhouette (map) with recoil puff when firing */
export const ShipIcon: React.FC<{ x: number; y: number; t: number; size?: number; flip?: boolean }> = ({ x, y, t, size = 110, flip = false }) => {
  const { f } = useSec(); const pop = usePop(t); if (pop <= 0) return null; const bob = Math.sin(f / 6) * 2;
  return <g transform={`translate(${x},${y + bob}) scale(${(flip ? -1 : 1) * (size / 120) * pop},${(size / 120) * pop})`}>
    <path d="M-60,0 L60,0 L48,16 L-50,16 Z" fill={INK} /><rect x={-30} y={-14} width={50} height={14} fill="#5b4a36" stroke={INK} strokeWidth={3} />
    <rect x={-8} y={-30} width={10} height={16} fill={INK} /><rect x={6} y={-26} width={10} height={12} fill={INK} /><rect x={-60} y={-6} width={30} height={5} fill={INK} transform="rotate(-8)" />
  </g>;
};

// ================= GENERIC MAP BASE (any era/region; data from tools/make_map.py) =================
export type MapData = { w: number; h: number; proj: { lon0: number; latTop: number; c: number; k: number }; shapes: Record<string, string> };
/** lon/lat -> plate px */
export const mapXY = (m: MapData, lon: number, lat: number): [number, number] => [(lon - m.proj.lon0) * m.proj.c * m.proj.k, (m.proj.latTop - lat) * m.proj.k];
/** a vintage map sheet lying on the desk at world (x,y) with scale s. svg children are in PLATE px; html children too (absolute). */
export const MapBase: React.FC<{ map: MapData; x: number; y: number; s: number; rot?: number; land?: (name: string) => string; svg?: React.ReactNode; children?: React.ReactNode; grid?: number }> = ({ map, x, y, s, rot = -0.6, land, svg, children, grid = 2 }) => {
  const pad = 70; const W = map.w, H = map.h; const k = map.proj.k;
  const vl = Array.from({ length: Math.ceil(W / (grid * map.proj.c * k)) }, (_, i) => i * grid * map.proj.c * k);
  const hl = Array.from({ length: Math.ceil(H / (grid * k)) }, (_, i) => i * grid * k);
  return <div style={{ position: "absolute", left: x, top: y, width: W, height: H, transform: `scale(${s})`, transformOrigin: "0 0" }}>
    <div style={{ position: "absolute", left: -pad, top: -pad, width: W + 2 * pad, height: H + 2 * pad, background: T.color.paperEdge, boxShadow: "0 40px 90px rgba(0,0,0,0.7), 0 6px 14px rgba(0,0,0,0.5)", transform: `rotate(${rot}deg)` }}>
      <Img src={staticFile("paper.jpg")} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", mixBlendMode: "multiply", opacity: 0.8 }} />
    </div>
    <Img src={staticFile("mapplate.jpg")} style={{ position: "absolute", width: W, height: H, filter: "brightness(0.55) saturate(0.8)" }} />
    <svg width={W} height={H} style={{ position: "absolute", overflow: "hidden" }}>
      {vl.map((v, i) => <line key={`v${i}`} x1={v} y1={0} x2={v} y2={H} stroke="rgba(40,30,20,0.18)" strokeWidth={1.5} />)}
      {hl.map((v, i) => <line key={`h${i}`} x1={0} y1={v} x2={W} y2={v} stroke="rgba(40,30,20,0.18)" strokeWidth={1.5} />)}
      {Object.entries(map.shapes).map(([n, d]) => <path key={n} d={d} fillRule="evenodd" fill={land ? land(n) : "rgba(214,196,150,0.5)"} stroke="rgba(45,34,22,0.8)" strokeWidth={2.2} />)}
      {svg}
    </svg>
    {children}
  </div>;
};
/** faint engraved map label (plate px) */
export const MapText: React.FC<{ x: number; y: number; text: string; size?: number; spacing?: number }> = ({ x, y, text, size = 32, spacing = 0.4 }) =>
  <text x={x} y={y} fontFamily={T.font.serif} fontSize={size} letterSpacing={`${spacing}em`} fill="rgba(40,30,20,0.55)" textAnchor="middle">{text}</text>;
/** pulsing location marker */
export const PulseMarker: React.FC<{ x: number; y: number; t: number; r?: number }> = ({ x, y, t, r = 12 }) => {
  const { s } = useSec(); if (s < t) return null; const ph = ((s - t) % 1.2) / 1.2; const pop = interpolate(s, [t, t + 0.25], [0, 1], clamp);
  return <g transform={`translate(${x},${y})`}><circle r={r * (1 + ph * 3)} fill="none" stroke={T.color.red} strokeWidth={4} opacity={(1 - ph) * pop} /><circle r={r * pop} fill={T.color.red} stroke={INK} strokeWidth={3} /></g>;
};
/** dashed travel route with a moving dot (escape routes, journeys, convoys) */
export const RouteLine: React.FC<{ d: string; t: number; dur: number; color?: string; width?: number }> = ({ d, t, dur, color = T.color.red, width = 6 }) => {
  const p = useProg(t, dur, Easing.inOut(Easing.quad)); if (p <= 0) return null;
  return <g><defs><mask id={`m${t}`}><path d={d} pathLength={1} strokeDasharray="1 1" strokeDashoffset={1 - p} stroke="#fff" strokeWidth={width * 3} fill="none" /></mask></defs>
    <path d={d} fill="none" stroke={color} strokeWidth={width} strokeDasharray={`${width * 3} ${width * 2}`} strokeLinecap="round" mask={`url(#m${t})`} /></g>;
};
/** cartoon missile/rocket flying on an arc from a to b, smoke trail, ends with a burst (place a BurstIcon at b at t2) */
export const MissileIcon: React.FC<{ a: number[]; b: number[]; t: number; t2: number; arc?: number; size?: number }> = ({ a, b, t, t2, arc = 0.35, size = 90 }) => {
  const { s } = useSec(); if (s < t || s > t2) return null; const c = [(a[0] + b[0]) / 2, Math.min(a[1], b[1]) - Math.hypot(b[0] - a[0], b[1] - a[1]) * arc];
  const u = interpolate(s, [t, t2], [0, 1], { ...clamp, easing: Easing.in(Easing.quad) }); const p = qpt(a, c, b, u), p2 = qpt(a, c, b, Math.min(1, u + 0.01));
  const ang = Math.atan2(p2[1] - p[1], p2[0] - p[0]) * 180 / Math.PI; const trail = Array.from({ length: 10 }, (_, i) => qpt(a, c, b, Math.max(0, u - i * 0.025)));
  return <g>{trail.map((q, i) => <circle key={i} cx={q[0]} cy={q[1]} r={6 + i * 2.2} fill={`rgba(90,78,64,${0.45 - i * 0.04})`} />)}
    <g transform={`translate(${p[0]},${p[1]}) rotate(${ang}) scale(${size / 100})`}><path d="M-45,-8 L30,-8 Q52,0 30,8 L-45,8 Z" fill="#5b4a36" stroke={INK} strokeWidth={3} /><path d="M-45,-8 L-58,-20 L-36,-8 Z M-45,8 L-58,20 L-36,8 Z" fill={T.color.red} /><path d="M-46,-5 L-70,0 L-46,5 Z" fill="#f0b45a" /></g></g>;
};
/** flickering cartoon fire (burning city/building) */
export const FireIcon: React.FC<{ x: number; y: number; t: number; size?: number }> = ({ x, y, t, size = 80 }) => {
  const { s, f } = useSec(); if (s < t) return null; const pop = interpolate(s, [t, t + 0.3], [0, 1], clamp); const fl = 1 + Math.sin(f * 1.7) * 0.08 + Math.sin(f * 2.9) * 0.05;
  return <g transform={`translate(${x},${y}) scale(${(size / 100) * pop},${(size / 100) * pop * fl})`}><path d="M0,0 C-40,0 -40,-45 -12,-70 C-14,-45 0,-40 4,-60 C30,-35 40,-5 0,0 Z" fill={T.color.red} stroke={INK} strokeWidth={4} /><path d="M0,-4 C-18,-4 -18,-25 -4,-38 C2,-25 18,-18 0,-4 Z" fill="#f0b45a" /></g>;
};
/** marching troops: three helmets bobbing along a direction */
export const TroopsIcon: React.FC<{ a: number[]; b: number[]; t: number; t2: number; size?: number }> = ({ a, b, t, t2, size = 70 }) => {
  const { s, f } = useSec(); if (s < t) return null; const u = interpolate(s, [t, t2], [0, 1], clamp); const x = a[0] + (b[0] - a[0]) * u, y = a[1] + (b[1] - a[1]) * u; const k = size / 100;
  return <g transform={`translate(${x},${y}) scale(${k})`}>{[-36, 0, 36].map((dx, i) => <g key={i} transform={`translate(${dx},${Math.sin(f * 0.9 + i) * 4})`}><path d="M-16,0 Q-16,-22 0,-22 Q16,-22 16,0 Z" fill="#5b4a36" stroke={INK} strokeWidth={3} /><rect x={-20} y={-2} width={40} height={6} rx={3} fill={INK} /></g>)}</g>;
};
