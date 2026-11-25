// Shared pieces for "primeros-gigantes": event access, labels, date card, height ruler, big numbers.
import React from "react";
import { Easing, Img, interpolate, staticFile } from "remotion";
import { T } from "../../styles/dossier/tokens";
import { clamp, PenPath, Roll, TypeLabel, useProg, useSec } from "../../styles/dossier/kit";
import TL from "./timeline.json";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const E = TL.ev as Record<string, any>;
export const DUR = TL.duration;
export const P = (f: string) => `primeros-gigantes/${f}`;
export const monoW = (n: number, size: number) => n * 0.62 * size + size * 0.9;

/** typewriter label from a timeline event */
export const L: React.FC<{ id: string; x?: number; y?: number; size?: number; red?: boolean; bare?: boolean; style?: React.CSSProperties }> = ({ id, x, y, size = 26, red = false, bare = false, style }) => {
  const e = E[id];
  return <TypeLabel text={e.text} t={e.t} cps={e.cps} size={size} bar={!bare}
    style={{ left: x, top: y, ...(red ? { background: T.color.red, color: "#f6eee0" } : {}), ...style }} />;
};
/** honesty tag on AI-generated images of real people/objects */
export const Rec: React.FC<{ t: number; size?: number }> = ({ t, size = 18 }) =>
  <TypeLabel text="RECREACIÓN" t={t} cps={26} size={size} style={{ right: 10, bottom: -size * 1.05, top: "auto", left: "auto" }} />;

/** chapter date card in world space, centred on (cx, cy) */
export const DateCard: React.FC<{ cx: number; cy: number; roll: string; top?: string; under?: string }> = ({ cx, cy, roll, top, under }) => {
  const r = E[roll]; const { s } = useSec(); const rule = useProg(r.t, 0.45);
  const dot = interpolate(s, [r.t2, r.t2 + 0.12], [0, 1], clamp);
  const yOp = interpolate(s, [r.t - 0.05, r.t + 0.12], [0, 1], clamp);
  const land = interpolate(s, [r.t2, r.t2 + 0.1, r.t2 + 0.3], [1, 1.06, 1], clamp);
  return <>
    {top ? <TypeLabel text={E[top].text} t={E[top].t} cps={E[top].cps} size={34} bar={false} style={{ color: T.color.title, left: cx - monoW(E[top].text.length, 34) / 2, top: cy - 150 }} /> : null}
    <div style={{ position: "absolute", left: cx - 700, width: 1400, top: cy - 95, textAlign: "center", fontFamily: T.font.serif, fontWeight: 700, fontSize: 190, lineHeight: 1, color: T.color.title, opacity: yOp, transform: `scale(${land})`, textShadow: "0 6px 30px rgba(0,0,0,0.6)" }}>
      <Roll from={r.from} to={r.to} t={r.t} t2={r.t2} /><span style={{ color: T.color.red, opacity: dot }}>.</span>
    </div>
    <div style={{ position: "absolute", top: cy + 115, left: cx - 270 - 260 * rule, width: 260 * rule, height: 2, background: "rgba(239,230,210,0.55)" }} />
    <div style={{ position: "absolute", top: cy + 115, left: cx + 270, width: 260 * rule, height: 2, background: "rgba(239,230,210,0.55)" }} />
    {under ? <TypeLabel text={E[under].text} t={E[under].t} cps={E[under].cps} size={34} bar={false} style={{ color: T.color.title, left: cx - monoW(E[under].text.length, 34) / 2, top: cy + 140 }} /> : null}
  </>;
};

/** big rolling number with thousands separator (world space) */
export const BigNum: React.FC<{ id: string; x: number; y: number; pre?: string; post?: string; size?: number }> = ({ id, x, y, pre = "", post = "", size = 150 }) => {
  const e = E[id]; const { s } = useSec(); if (s < e.t - 0.05) return null;
  const v = Math.round(interpolate(s, [e.t, e.t2], [e.from, e.to], { ...clamp, easing: Easing.out(Easing.quad) }));
  const land = interpolate(s, [e.t2, e.t2 + 0.1, e.t2 + 0.3], [1, 1.08, 1], clamp);
  const op = interpolate(s, [e.t - 0.05, e.t + 0.1], [0, 1], clamp);
  return <div style={{ position: "absolute", left: x - 700, width: 1400, top: y - size * 0.6, textAlign: "center", fontFamily: T.font.serif, fontWeight: 700, fontSize: size, lineHeight: 1.1, color: T.color.title, opacity: op, transform: `scale(${land})`, textShadow: "0 6px 30px rgba(0,0,0,0.6)" }}>
    {pre}{v.toLocaleString("es-ES").replace(/\s/g, ".")}<span style={{ fontSize: size * 0.45 }}>{post}</span><span style={{ color: T.color.red, opacity: s >= e.t2 ? 1 : 0 }}>.</span>
  </div>;
};

/** vertical height ruler card. bar levels in metres; marks = fixed reference lines */
export type Lvl = { t: number; dur: number; h: number };
export const PXM = 330; // px per metre on the card
export const Ruler: React.FC<{ x: number; y: number; t0: number; levels: Lvl[]; ghosts?: { h: number; text: string }[]; rot?: number; children?: React.ReactNode }> = ({ x, y, t0, levels, ghosts = [], rot = -1.2, children }) => {
  const { s } = useSec(); if (s < t0) return null;
  const p = interpolate(s, [t0, t0 + 0.35], [0, 1], { ...clamp, easing: Easing.out(Easing.back(1.4)) });
  let h = 0; for (const l of levels) { if (s >= l.t) h = interpolate(s, [l.t, l.t + l.dur], [h, l.h], { ...clamp, easing: Easing.inOut(Easing.cubic) }); }
  const W = 560, H = 1200, base = H - 70, left = 150;
  const yOf = (m: number) => base - m * PXM;
  return <div style={{ position: "absolute", left: x - W / 2, top: y - H / 2, width: W, height: H, transform: `rotate(${rot}deg) scale(${0.8 + 0.2 * p})`, opacity: Math.min(1, p * 2), background: T.color.paperEdge, boxShadow: T.shape.shadow }}>
    <Img src={staticFile("paper.jpg")} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.6, mixBlendMode: "multiply" }} />
    <div style={{ position: "absolute", left: 24, top: 18, fontFamily: T.font.mono, fontWeight: 700, fontSize: 22, letterSpacing: "0.12em", color: T.color.ink }}>ESCALA · METROS</div>
    <svg width={W} height={H} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
      {Array.from({ length: 7 }, (_, i) => i * 0.5).map((m) => <g key={m}>
        <line x1={left - (m % 1 === 0 ? 46 : 26)} y1={yOf(m)} x2={left} y2={yOf(m)} stroke={T.color.ink} strokeWidth={m % 1 === 0 ? 4 : 2} />
        {m % 1 === 0 ? <text x={left - 56} y={yOf(m) + 10} textAnchor="end" fontFamily={T.font.mono} fontWeight={700} fontSize={30} fill={T.color.ink}>{m}</text> : null}
      </g>)}
      <line x1={left} y1={yOf(0)} x2={left} y2={yOf(3.2)} stroke={T.color.ink} strokeWidth={3} />
      <line x1={left + 10} y1={yOf(1.75)} x2={W - 30} y2={yOf(1.75)} stroke="rgba(40,30,20,0.55)" strokeWidth={2} strokeDasharray="10 8" />
      <text x={W - 30} y={yOf(1.75) - 10} textAnchor="end" fontFamily={T.font.mono} fontSize={18} fill="rgba(40,30,20,0.7)">PERSONA MEDIA 1,75</text>
      {ghosts.map((g) => <g key={g.text}><line x1={left + 10} y1={yOf(g.h)} x2={W - 30} y2={yOf(g.h)} stroke="rgba(40,30,20,0.45)" strokeWidth={2} />
        <text x={W - 30} y={yOf(g.h) - 8} textAnchor="end" fontFamily={T.font.mono} fontSize={18} fill="rgba(40,30,20,0.75)">{g.text}</text></g>)}
      <rect x={left + 18} y={yOf(h)} width={70} height={Math.max(0, h * PXM)} fill={T.color.red} opacity={0.88} />
      {h > 0.05 ? <line x1={left + 6} y1={yOf(h)} x2={left + 110} y2={yOf(h)} stroke={T.color.ink} strokeWidth={4} /> : null}
    </svg>
    {children}
  </div>;
};
export const rulerY = (m: number) => 1200 - 70 - m * PXM; // card-local y of a height

/** red strike through a label of n chars (card/print local coords) */
export const Strike: React.FC<{ x: number; y: number; w: number; t: number }> = ({ x, y, w, t }) =>
  <svg width={w + 40} height={40} style={{ position: "absolute", left: x - 20, top: y - 20, overflow: "visible" }}>
    <PenPath d={`M20,22 Q${w / 2},14 ${w + 20},18`} t={t} dur={0.3} width={6} />
  </svg>;
