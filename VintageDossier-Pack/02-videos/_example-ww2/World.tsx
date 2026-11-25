// Calibration sample v2: ONE continuous world (a desk). Nothing cuts; the camera glides between elements.
import React from "react";
import { AbsoluteFill, Audio, Img, interpolate, staticFile } from "remotion";
import { T } from "../../styles/dossier/tokens";
import { Arrow, BurstIcon, CountryFocus, NATION, PlaneIcon, ShipIcon, TankIcon, BurnFlash, clamp, FilmLayer, Gate, K, PenPath, pinAt, printBox, Roll, Stamp, StringLine, TypeLabel, useProg, useSec, WorldCam, WorldDesk, WPrint, wobblyEllipse } from "../../styles/dossier/kit";
import TL from "./timeline.json";
import MAP from "../../../public/map1938.json";

const E = TL.ev;
const monoW = (n: number, size: number) => n * 0.68 * size;
const deg = (lon: number, lat: number): [number, number] => [(lon - 1) * 101.05, (59.6 - lat) * 166.0];

// ---------- world layout (world px) ----------
const M = { x: 2600, y: 1500, s: 0.6 }; // map sheet origin + scale
const mw = (p: [number, number]): [number, number] => [M.x + p[0] * M.s, M.y + p[1] * M.s];
const WARSAW = mw(deg(21.01, 52.23));
const SHIP = { w: 1100, a: 1600 / 945, keys: [{ t: 3.11, x: 2400, y: 720, s: 1, r: -2.2 }, { t: 7.45, x: 2400, y: 720, s: 1, r: -2.2 }, { t: 8.25, x: 2150, y: 610, s: 0.55, r: -6 }] as K[] };
const BAR = { w: 900, a: 519 / 385, keys: [{ t: 8.45, x: 3150, y: 830, s: 1, r: 1.6 }] as K[] };
const CHA = { w: 360, a: 236 / 325, keys: [{ t: 13.25, x: 2930, y: 1900, s: 1, r: -4 }] as K[] };
const DAL = { w: 360, a: 250 / 347, keys: [{ t: 13.81, x: 4510, y: 1900, s: 1, r: 3.5 }] as K[] };
const CAM: K[] = [
  { t: 0, x: 960, y: 540, z: 1 }, { t: 2.55, x: 960, y: 532, z: 1.07 },
  { t: 2.95, x: 1650, y: 640, z: 0.78, r: -1.5 }, { t: 3.5, x: 2400, y: 720, z: 1.0 },
  { t: 7.45, x: 2400, y: 720, z: 1.06 },
  { t: 8.3, x: 2650, y: 760, z: 0.82, r: 1 }, { t: 8.8, x: 3150, y: 820, z: 0.98 }, { t: 9.15, x: 3150, y: 828, z: 1.02 },
  { t: 9.45, x: 3380, y: 1520, z: 0.55, r: -2 }, { t: 9.92, x: 3620, y: 2262, z: 1.5 },
  { t: 12.05, x: 3650, y: 2252, z: 1.62 },
  { t: 12.85, x: 3720, y: 2060, z: 0.85 }, { t: 16.52, x: 3720, y: 2075, z: 0.9 },
];

// ---------- elements ----------
const DateTitle: React.FC = () => {
  const { s } = useSec(); const rule = useProg(E.A_year.t, 0.45);
  const dot = interpolate(s, [E.A_year.t2, E.A_year.t2 + 0.12], [0, 1], clamp);
  const yOp = interpolate(s, [E.A_year.t - 0.05, E.A_year.t + 0.12], [0, 1], clamp);
  return <>
    <TypeLabel text={E.A_day.text} t={E.A_day.t} cps={E.A_day.cps} size={34} bar={false} style={{ color: T.color.title, left: 960 - monoW(E.A_day.text.length, 34) / 2, top: 395 }} />
    <div style={{ position: "absolute", left: 0, width: 1920, top: 450, textAlign: "center", fontFamily: T.font.serif, fontWeight: 700, fontSize: 190, color: T.color.title, opacity: yOp, textShadow: "0 6px 30px rgba(0,0,0,0.6)" }}>
      <Roll from={E.A_year.from} to={E.A_year.to} t={E.A_year.t} t2={E.A_year.t2} /><span style={{ color: T.color.red, opacity: dot }}>.</span>
    </div>
    <div style={{ position: "absolute", top: 560, left: 960 - 270 - 260 * rule, width: 260 * rule, height: 2, background: "rgba(239,230,210,0.55)" }} />
    <div style={{ position: "absolute", top: 560, left: 960 + 270, width: 260 * rule, height: 2, background: "rgba(239,230,210,0.55)" }} />
  </>;
};

const Ship: React.FC = () => {
  const { s } = useSec(); const { b } = printBox(SHIP.w, SHIP.a); const k = SHIP.w / 785;
  const glow = interpolate(s, [E.B_fire.t, E.B_fire.t + 0.08, E.B_fire.t + 0.7], [0, 1, 0], clamp);
  return <WPrint src="p_ship.jpg" aspect={SHIP.a} w={SHIP.w} keys={SHIP.keys} t0={3.11} from={[-120, 260, 9]}>
    <svg width={1300} height={900} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
      <circle cx={b + 62 * k} cy={b + 300 * k} r={160} fill={`rgba(255,170,80,${glow * 0.75})`} style={{ filter: "blur(30px)", mixBlendMode: "screen" }} />
      <PenPath d={wobblyEllipse(b + 395 * k, b + 285 * k, 560, 150, 2)} t={E.B_circle.t} dur={E.B_circle.dur} width={5} />
    </svg>
    <TypeLabel text={E.B_time.text} t={E.B_time.t} cps={E.B_time.cps} size={24} style={{ left: -25, top: -47 }} />
    <TypeLabel text={E.B_name.text} t={E.B_name.t} cps={E.B_name.cps} size={24} style={{ left: -25, top: -2 }} />
    <TypeLabel text={E.B_year.text} t={E.B_year.t} cps={E.B_year.cps} size={24} style={{ left: -25, top: 43 }} />
    <TypeLabel text={E.B_target.text} t={E.B_target.t} cps={E.B_target.cps} size={26} style={{ left: 820, top: -62, background: T.color.red, color: "#f6eee0" }} />
  </WPrint>;
};

const Barrier: React.FC = () => <WPrint src="p_barrier.jpg" aspect={BAR.a} w={BAR.w} keys={BAR.keys} t0={8.38} from={[420, -60, 10]}>
  <TypeLabel text={E.C1_lab.text} t={E.C1_lab.t} cps={E.C1_lab.cps} size={30} style={{ left: -30, top: -34 }} />
</WPrint>;

const ROUTES = [
  { a: deg(13.9, 52.4), c: deg(15.4, 52.9), b: deg(17.1, 52.4) },
  { a: deg(15.8, 54.0), c: deg(16.9, 54.1), b: deg(18.3, 53.4) },
  { a: deg(19.4, 48.8), c: deg(20.3, 49.3), b: deg(19.9, 50.35) },
];
const MapSheet: React.FC = () => {
  const ger = useProg(E.C2_ger.t, 0.45); const shapes = MAP.shapes as Record<string, string>;
  const faint = (txt: string, x: number, y: number, sz = 34, sp = 0.4) => <text x={x} y={y} fontFamily={T.font.serif} fontSize={sz} letterSpacing={`${sp}em`} fill="rgba(40,30,20,0.55)" textAnchor="middle">{txt}</text>;
  const pad = 70;
  return <div style={{ position: "absolute", left: M.x, top: M.y, width: MAP.w, height: MAP.h, transform: `scale(${M.s})`, transformOrigin: "0 0" }}>
    <div style={{ position: "absolute", left: -pad, top: -pad, width: MAP.w + 2 * pad, height: MAP.h + 2 * pad, background: T.color.paperEdge, boxShadow: "0 40px 90px rgba(0,0,0,0.7), 0 6px 14px rgba(0,0,0,0.5)", transform: "rotate(-0.6deg)" }}>
      <Img src={staticFile("paper.jpg")} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", mixBlendMode: "multiply", opacity: 0.8 }} />
    </div>
    <Img src={staticFile("mapplate.jpg")} style={{ position: "absolute", width: MAP.w, height: MAP.h, filter: "brightness(0.55) saturate(0.8)" }} />
    <svg width={MAP.w} height={MAP.h} style={{ position: "absolute" }}>
      {Array.from({ length: 19 }, (_, i) => { const x = deg(2 + i * 2, 0)[0]; return <line key={`v${i}`} x1={x} y1={0} x2={x} y2={MAP.h} stroke="rgba(40,30,20,0.18)" strokeWidth={1.5} />; })}
      {Array.from({ length: 8 }, (_, i) => { const y = deg(0, 46 + i * 2)[1]; return <line key={`h${i}`} x1={0} y1={y} x2={MAP.w} y2={y} stroke="rgba(40,30,20,0.18)" strokeWidth={1.5} />; })}
      {Object.entries(shapes).map(([k, d]) => <path key={k} d={d} fillRule="evenodd" fill={k === "Poland" ? "rgba(226,210,168,0.7)" : "rgba(214,196,150,0.5)"} stroke="rgba(45,34,22,0.8)" strokeWidth={2.2} />)}
      <defs><pattern id="hatch" width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="22" stroke="rgba(35,26,17,0.55)" strokeWidth="5" /></pattern></defs>
      <CountryFocus d={shapes["Germany"]} t={E.C2_ger.t} rgb={NATION.aggressor} id="ger" />
      <path d={shapes["Germany"]} fillRule="evenodd" fill="url(#hatch)" opacity={ger * 0.6} />
      <CountryFocus d={shapes["Poland"]} t={E.C2_pol.t} rgb={NATION.defender} id="pol" />
      <CountryFocus d={shapes["France"]} t={E.M_france.t} rgb={NATION.ally} id="fra" />
      {faint("BALTIC  SEA", 1350, 700, 36, 0.5)}{faint("U . S . S . R .", 2750, 1150, 40, 0.6)}{faint("LITHUANIA", 2330, 760, 28)}{faint("HUNGARY", 2050, 1960, 30)}{faint("ROMANIA", 2800, 1880, 30)}{faint("CZECHO-SLOVAKIA", 1500, 1640, 28, 0.3)}{faint("FRANCE", 300, 1500, 34)}
      <circle cx={deg(21.01, 52.23)[0]} cy={deg(21.01, 52.23)[1]} r={9} fill={T.color.ink} />{faint("Warsaw", deg(21.01, 52.23)[0] + 80, deg(21.01, 52.23)[1] - 18, 28, 0.05)}
      <circle cx={deg(13.4, 52.52)[0]} cy={deg(13.4, 52.52)[1]} r={9} fill={T.color.ink} />{faint("Berlin", deg(13.4, 52.52)[0] - 70, deg(13.4, 52.52)[1] - 18, 28, 0.05)}
      <PenPath d={shapes["Poland"]} t={E.C2_border.t} dur={E.C2_border.dur} width={7} />
      {[
        { a: deg(13.9, 52.4), c: deg(15.4, 52.9), b: deg(17.1, 52.4) },
        { a: deg(15.8, 54.0), c: deg(16.9, 54.1), b: deg(18.3, 53.4) },
        { a: deg(20.8, 54.4), c: deg(21.6, 53.6), b: deg(20.9, 52.75) },
        { a: deg(19.4, 48.8), c: deg(20.3, 49.3), b: deg(19.9, 50.35) },
      ].map((r, i) => <Arrow key={i} a={r.a} c={r.c} b={r.b} t={E.C2_arrows.t + i * E.C2_arrows.stagger} dur={E.C2_arrows.dur} width={13} />)}
      {ROUTES.slice(0, 3).map((r, i) => <TankIcon key={`tk${i}`} a={r.a} c={r.c} b={r.b} t={E.M_tanks.t + i * E.M_tanks.stagger} t2={12.0} />)}
      <ShipIcon x={deg(18.4, 54.75)[0]} y={deg(18.4, 54.75)[1]} t={E.M_ship.t} />
      <BurstIcon x={deg(18.67, 54.41)[0]} y={deg(18.67, 54.41)[1]} t={E.M_ship.t + 0.08} size={95} />
      <BurstIcon x={deg(21.01, 52.23)[0] + 30} y={deg(21.01, 52.23)[1] + 40} t={E.M_burst1.t} size={120} />
      <BurstIcon x={deg(19.94, 50.06)[0]} y={deg(19.94, 50.06)[1]} t={E.M_burst2.t} size={100} />
      <PlaneIcon a={deg(12.5, 53.9)} b={deg(22.6, 52.9)} t={E.M_planes.t} t2={11.9} />
      <PlaneIcon a={deg(12.0, 53.2)} b={deg(22.0, 51.6)} t={E.M_planes.t + 0.25} t2={12.0} size={105} />
    </svg>
    <TypeLabel text={E.C2_ger.text} t={E.C2_ger.t} cps={E.C2_ger.cps} size={34} style={{ left: deg(9.6, 51.6)[0], top: deg(9.6, 51.6)[1] }} />
    <TypeLabel text={E.C2_pol.text} t={E.C2_pol.t} cps={E.C2_pol.cps} size={34} style={{ left: deg(21.9, 51.9)[0], top: deg(21.9, 51.9)[1] }} />
  </div>;
};

const Board: React.FC = () => {
  const { s, f, fr } = useSec(); const txt = E.D_date.text, size = 34;
  const hx = 3720 - monoW(txt.length, size) / 2 - 15, hy = 1545;
  const pinIn = interpolate(f - fr(E.D_pin.t), [0, 6], [0, 1], clamp);
  const pc = pinAt(CHA.w, CHA.a, CHA.keys, s), pd = pinAt(DAL.w, DAL.a, DAL.keys, s);
  const hC = printBox(CHA.w, CHA.a).H, hD = printBox(DAL.w, DAL.a).H;
  return <>
    {s < E.D_date.t ? null : s >= E.D_roll.t ? <div style={{ position: "absolute", left: hx, top: hy, fontFamily: T.font.mono, fontWeight: 700, fontSize: size, letterSpacing: "0.08em", color: T.color.tapeText, background: T.color.tape, padding: "6px 15px", whiteSpace: "pre", boxShadow: "0 2px 6px rgba(0,0,0,0.5)" }}>
      <span style={{ color: s >= E.D_roll.t2 ? "#ff8a80" : T.color.tapeText }}><Roll from={1} to={3} t={E.D_roll.t} t2={E.D_roll.t2} /></span>{txt.slice(1)}
    </div> : <TypeLabel text={txt} t={E.D_date.t} cps={E.D_date.cps} size={size} style={{ left: hx, top: hy }} />}
    {pinIn > 0 ? <div style={{ position: "absolute", left: WARSAW[0] - 13, top: WARSAW[1] - 13, width: 26, height: 26, borderRadius: "50%", transform: `scale(${2 - pinIn})`, opacity: pinIn, background: `radial-gradient(circle at 35% 35%, #e0605a, ${T.color.red} 55%, #5a0f12)`, boxShadow: "3px 6px 6px rgba(0,0,0,0.6)" }} /> : null}
    <WPrint src="p_chamberlain.jpg" aspect={CHA.a} w={CHA.w} keys={CHA.keys} t0={E.D_brit.t} from={[-500, 60, -12]}>
      <TypeLabel text={E.D_britL.text} t={E.D_britL.t} cps={E.D_britL.cps} size={28} style={{ left: 8, top: hC + 14 }} />
    </WPrint>
    <WPrint src="p_daladier.jpg" aspect={DAL.a} w={DAL.w} keys={DAL.keys} t0={E.D_fra.t} from={[500, 60, 12]}>
      <TypeLabel text={E.D_fraL.text} t={E.D_fraL.t} cps={E.D_fraL.cps} size={28} style={{ left: 8, top: hD + 14 }} />
    </WPrint>
    <svg width={6000} height={4000} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
      <StringLine a={pc} b={WARSAW} t={E.D_str1.t} dur={E.D_str1.dur} sag={60} />
      <StringLine a={pd} b={WARSAW} t={E.D_str2.t} dur={E.D_str2.dur} sag={60} />
    </svg>
    <Stamp text="WAR DECLARED" t={E.D_stamp.t} x={3790} y={2445} size={58} rot={-8} />
  </>;
};

export const WW2World: React.FC = () => {
  const { s } = useSec(); const end = interpolate(s, [TL.duration - 0.5, TL.duration], [0, 1], clamp);
  return <AbsoluteFill style={{ background: T.color.desk }}>
    <Gate shakes={[E.B_fire.t, E.D_stamp.t]}>
      <WorldCam keys={CAM}>
        <WorldDesk w={5200} h={3000} />
        <DateTitle />
        <MapSheet />
        <Barrier />
        <Ship />
        <Board />
      </WorldCam>
    </Gate>
    <BurnFlash t={E.B_fire.t} dur={0.5} />
    <FilmLayer vignette={0.88} />
    <AbsoluteFill style={{ background: "#000", opacity: end }} />
    <Audio src={staticFile("mix.wav")} />
  </AbsoluteFill>;
};
