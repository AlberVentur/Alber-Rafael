// "Los primeros gigantes del mundo" - five continuous desk worlds (one per chapter), camera glides inside each,
// light-burn between chapters. All times come from timeline.json (word-aligned).
import React from "react";
import { AbsoluteFill, Audio, interpolate, staticFile } from "remotion";
import { T } from "../../styles/dossier/tokens";
import {
  Arrow, BurnFlash, clamp, CountryFocus, FilmLayer, Gate, K, MapBase, MapData, MapText, mapXY, NATION, PenPath,
  pinAt, printBox, PulseMarker, RouteLine, ShipIcon, Stamp, StringLine, useSec, WorldCam, WorldDesk, WPrint, wobblyEllipse, TypeLabel,
} from "../../styles/dossier/kit";
import { BigNum, DateCard, DUR, E, L, monoW, P, Rec, Ruler, rulerY, Strike } from "./parts";
import CHINA from "../../../public/primeros-gigantes/map_china.json";
import PATA from "../../../public/primeros-gigantes/map_patagonia.json";
import USA from "../../../public/primeros-gigantes/map_usa.json";

const A = { jaw: 1.6444, koe: 2.1333, bot: 1.1027, gol: 1.8349, scr: 1.8779, eng: 2.0806, mag: 0.8294, teh: 2.0513, cdf: 1.9394, pie: 1.5282, brady: 0.7388, wad: 1.2066, farm: 1.4248 };
const t = (id: string) => E[id].t as number;
const within = (s: number, a: number, b: number) => s >= a - 0.3 && s < b + 0.3;
const cmap = CHINA as MapData, pmap = PATA as MapData, umap = USA as MapData;
const onMap = (M: { x: number; y: number; s: number }, m: MapData, lon: number, lat: number): [number, number] => { const p = mapXY(m, lon, lat); return [M.x + p[0] * M.s, M.y + p[1] * M.s]; };
const poly = (m: MapData, pts: [number, number][]) => "M" + pts.map(([lo, la]) => mapXY(m, lo, la).map((v) => v.toFixed(1)).join(",")).join("L") + "Z";

// ======================= W0: cold open, Cardiff farm 1869 =======================
const W0: React.FC = () => {
  const FARM: K[] = [{ t: t("A_farm"), x: 2500, y: 650, s: 1, r: -2 }, { t: 6.45, x: 2500, y: 650, s: 1, r: -2 }, { t: 7.15, x: 2020, y: 330, s: 0.55, r: -6 }];
  const FOOT: K[] = [{ t: t("A_foot"), x: 2850, y: 1180, s: 1, r: 1.8 }];
  const cam: K[] = [
    { t: 0, x: 960, y: 540, z: 1 }, { t: 1.55, x: 960, y: 540, z: 1.05 },
    { t: 1.85, x: 1700, y: 600, z: 0.8, r: -1 }, { t: 2.2, x: 2500, y: 650, z: 1.0 }, { t: 6.35, x: 2500, y: 650, z: 1.06 },
    { t: 6.8, x: 2600, y: 850, z: 0.8, r: 1 }, { t: 7.45, x: 2850, y: 1180, z: 1.0 }, { t: 9.3, x: 2850, y: 1180, z: 1.07 },
    { t: 10.2, x: 2700, y: 1250, z: 0.9 }, { t: 12.4, x: 2650, y: 1250, z: 0.86 }, { t: 13.6, x: 2200, y: 900, z: 0.5, r: -3 },
  ];
  const fb = printBox(1050, A.pie);
  const fw = 1050, fh = 1050 / A.pie;
  return <WorldCam keys={cam}>
    <WorldDesk w={5000} h={3000} />
    <DateCard cx={960} cy={560} roll="A_year" top="A_month" />
    <WPrint src={P("14_granja_pozo.jpg")} aspect={A.farm} w={1000} keys={FARM} t0={t("A_farm")} from={[260, -120, 8]}>
      <L id="A_farmL1" x={-25} y={-47} size={24} /><L id="A_farmL2" x={-25} y={-2} size={24} />
    </WPrint>
    <WPrint src={P("10_pie.jpg")} aspect={A.pie} w={fw} keys={FOOT} t0={t("A_foot")} from={[-200, 220, -9]}>
      <svg width={fb.W} height={fb.H} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
        <PenPath d={wobblyEllipse(fb.b + 0.74 * fw, fb.b + 0.45 * fh, 0.27 * fw, 0.42 * fh, 3)} t={t("A_circle")} dur={0.55} width={6} />
      </svg>
      <L id="A_footL" x={fb.W - 210} y={-58} size={28} red />
      <Rec t={E.A_foot_rec.t} />
    </WPrint>
    <L id="A_q" x={2850 - monoW(E.A_q.text.length, 30) / 2} y={1700} size={30} />
  </WorldCam>;
};

// ======================= W1: 1935 Hong Kong, Gigantopithecus, south China =======================
const CM = { x: 4600, y: 2500, s: 0.6 };
const GX: [number, number][] = [[104.6, 23.2], [106.5, 22.4], [108, 21.6], [110, 21.7], [111.9, 22.5], [112.2, 24.6], [110.6, 26.3], [107.6, 26.2], [105.2, 25.1]];
const W1: React.FC = () => {
  const { s } = useSec();
  const KOE: K[] = [{ t: t("B_koe"), x: 2500, y: 620, s: 1, r: -1.6 }, { t: 17.45, x: 2500, y: 620, s: 1, r: -1.6 }, { t: 18.2, x: 1900, y: 300, s: 0.5, r: -5 }];
  const BOT: K[] = [{ t: t("B_bot"), x: 2700, y: 780, s: 1, r: 2.2 }];
  const JAW: K[] = [{ t: t("B_jaw"), x: 2700, y: 1800, s: 1, r: -1.4 }];
  const hk = onMap(CM, cmap, 114.17, 22.3), gx = onMap(CM, cmap, 108.6, 23.9);
  const cam: K[] = [
    { t: 13.5, x: 960, y: 560, z: 0.92 }, { t: 15.45, x: 960, y: 560, z: 1.0 },
    { t: 15.75, x: 1700, y: 600, z: 0.78, r: -1 }, { t: 16.15, x: 2500, y: 620, z: 0.98 }, { t: 17.4, x: 2500, y: 620, z: 1.03 },
    { t: 17.9, x: 2550, y: 700, z: 0.84, r: 1 }, { t: 18.6, x: 2700, y: 780, z: 1.12 }, { t: 21.5, x: 2700, y: 800, z: 1.17 },
    { t: 21.9, x: 2700, y: 1300, z: 0.8 }, { t: 22.4, x: 2700, y: 1800, z: 1.02 }, { t: 27.4, x: 2700, y: 1820, z: 1.08 },
    { t: 29.9, x: 2900, y: 1850, z: 0.86 }, { t: 30.5, x: 3650, y: 1650, z: 0.86 }, { t: 33.55, x: 3700, y: 1650, z: 0.9 },
    { t: 33.95, x: 4300, y: 2300, z: 0.55, r: -2 }, { t: 34.45, x: gx[0] + 120, y: gx[1] - 20, z: 1.35 }, { t: 41.0, x: gx[0] + 160, y: gx[1], z: 1.48 },
    { t: 42.4, x: gx[0] + 160, y: gx[1], z: 1.48 }, { t: 43.0, x: gx[0] + 160, y: gx[1] + 40, z: 1.25 }, { t: 44.8, x: gx[0] + 160, y: gx[1] + 40, z: 1.3 },
  ];
  const jb = printBox(1000, A.jaw), jh = 1000 / A.jaw;
  const dry = interpolate(s, [t("B_dry"), t("B_dry") + 0.8], [0, 1], clamp);
  return <WorldCam keys={cam}>
    <WorldDesk w={7000} h={4000} />
    <DateCard cx={960} cy={560} roll="B_year" under="B_city" />
    <WPrint src={P("02_koenigswald.jpg")} aspect={A.koe} w={1150} keys={KOE} t0={t("B_koe")} from={[300, -200, 9]}>
      <L id="B_koeL1" x={-25} y={-47} size={26} /><L id="B_koeL2" x={-25} y={-2} size={26} />
      <Rec t={E.B_koe_rec.t} />
    </WPrint>
    <WPrint src={P("03_botica_cajones.jpg")} aspect={A.bot} w={760} keys={BOT} t0={t("B_bot")} from={[320, 120, 10]}>
      <L id="B_botL" x={-30} y={-40} size={28} />
    </WPrint>
    <WPrint src={P("01_muela_gigantopithecus.jpg")} aspect={A.jaw} w={1000} keys={JAW} t0={t("B_jaw")} from={[-260, 240, -8]}>
      <svg width={jb.W} height={jb.H} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
        <PenPath d={wobblyEllipse(jb.b + 0.69 * 1000, jb.b + 0.47 * jh, 0.3 * 1000, 0.17 * jh, 5)} t={t("B_jawC")} dur={0.55} width={6} />
      </svg>
      <L id="B_jawL" x={jb.W - 420} y={-56} size={26} red />
      <L id="B_name" x={-20} y={jb.H + 20} size={34} />
      <Rec t={E.B_jaw_rec.t} />
    </WPrint>
    <Ruler x={3700} y={1700} t0={t("B_ruler")} levels={[{ t: t("B_bar"), dur: 0.45, h: 3.0 }]}>
      {s >= t("B_bar") + 0.45 ? <div style={{ position: "absolute", left: 250, top: rulerY(3.0) - 26, fontFamily: T.font.mono, fontWeight: 700, fontSize: 40, color: T.color.red }}>3 M</div> : null}
    </Ruler>
    <BigNum id="B_kg" x={4560} y={1520} post=" KG" size={130} />
    <MapBase map={cmap} x={CM.x} y={CM.y} s={CM.s} svg={<>
      <CountryFocus d={poly(cmap, GX)} t={t("B_south")} rgb={NATION.ally} id="gx" />
      <path d={poly(cmap, GX)} fill={`rgba(${NATION.neutral},${0.55 * dry})`} stroke={`rgba(${NATION.neutral},${dry})`} strokeWidth={5} />
      <MapText x={mapXY(cmap, 104, 30)[0]} y={mapXY(cmap, 104, 30)[1]} text="C H I N A" size={60} spacing={0.5} />
      <MapText x={mapXY(cmap, 116, 19.5)[0]} y={mapXY(cmap, 116, 19.5)[1]} text="MAR DE CHINA" size={40} />
      <circle cx={mapXY(cmap, 114.17, 22.3)[0]} cy={mapXY(cmap, 114.17, 22.3)[1]} r={10} fill={T.color.ink} />
      <MapText x={mapXY(cmap, 114.17, 22.3)[0] + 150} y={mapXY(cmap, 114.17, 22.3)[1] + 60} text="Hong Kong" size={34} spacing={0.05} />
      <PulseMarker x={mapXY(cmap, 114.17, 22.3)[0]} y={mapXY(cmap, 114.17, 22.3)[1]} t={t("B_hk")} r={14} />
    </>}>
      <L id="B_mya" x={mapXY(cmap, 105.5, 27.6)[0]} y={mapXY(cmap, 105.5, 27.6)[1]} size={40} />
    </MapBase>
    <Stamp text="EXTINTO" t={t("B_ext")} x={gx[0] + 160} y={gx[1] + 20} size={70} rot={-9} />
    <L id="B_real" x={gx[0] + 160 - monoW(E.B_real.text.length, 30) / 2} y={gx[1] + 150} size={30} red />
  </WorldCam>;
};

// ======================= W2: texts, Goliath, Patagonia =======================
const PM = { x: 5200, y: 2900, s: 0.6 };
const W2: React.FC = () => {
  const { s } = useSec();
  const SCR: K[] = [{ t: t("C_scroll"), x: 960, y: 620, s: 1, r: 1.5 }, { t: 49.3, x: 960, y: 620, s: 1, r: 1.5 }, { t: 50.05, x: 1350, y: 330, s: 0.5, r: -4 }];
  const GOL: K[] = [{ t: t("C_gol"), x: 2350, y: 720, s: 1, r: -1.8 }];
  const MAG: K[] = [{ t: t("C_mag"), x: 4520, y: 2250, s: 1, r: 2.4 }];
  const sj = onMap(PM, pmap, -67.7, -49.3);
  const ENG: K[] = [{ t: t("C_eng"), x: sj[0] - 420, y: sj[1] - 420, s: 1, r: -2 }, { t: 72.9, x: sj[0] - 420, y: sj[1] - 420, s: 1, r: -2 }, { t: 73.7, x: PM.x + 230, y: PM.y + 260, s: 0.45, r: -7 }];
  const TEH: K[] = [{ t: t("C_teh"), x: 9150, y: 4350, s: 1, r: 1.5 }];
  const patC = onMap(PM, pmap, -68, -44);
  const cam: K[] = [
    { t: 44.6, x: 960, y: 620, z: 0.95 }, { t: 49.2, x: 960, y: 620, z: 1.02 },
    { t: 49.75, x: 1650, y: 600, z: 0.8, r: -1 }, { t: 50.4, x: 2350, y: 720, z: 1.0 }, { t: 51.95, x: 2350, y: 720, z: 1.04 },
    { t: 52.3, x: 3000, y: 800, z: 0.78 }, { t: 52.75, x: 3750, y: 820, z: 0.92 }, { t: 58.95, x: 3750, y: 820, z: 0.96 },
    { t: 59.25, x: 3700, y: 1600, z: 0.8 }, { t: 59.7, x: 3700, y: 2320, z: 1.0 }, { t: 60.4, x: 3700, y: 2320, z: 1.0 },
    { t: 60.9, x: 4100, y: 2300, z: 0.95 }, { t: 61.4, x: 4120, y: 2300, z: 0.97 },
    { t: 61.85, x: 5000, y: 2950, z: 0.55, r: 2 }, { t: 62.4, x: sj[0] + 60, y: sj[1] - 160, z: 1.25 }, { t: 64.6, x: sj[0] + 40, y: sj[1] - 180, z: 1.3 },
    { t: 65.1, x: sj[0] - 250, y: sj[1] - 400, z: 1.08 }, { t: 72.8, x: sj[0] - 250, y: sj[1] - 400, z: 1.13 },
    { t: 73.8, x: patC[0], y: patC[1] - 60, z: 0.95 }, { t: 75.95, x: patC[0], y: patC[1] - 60, z: 1.0 },
    { t: 76.4, x: 6300, y: 4200, z: 0.72, r: -1 }, { t: 76.75, x: 6400, y: 4500, z: 0.82 }, { t: 82.3, x: 6500, y: 4500, z: 0.86 },
    { t: 82.75, x: 7800, y: 4400, z: 0.72 }, { t: 83.2, x: 8150, y: 4350, z: 0.9 }, { t: 89.0, x: 8150, y: 4350, z: 0.93 },
    { t: 89.45, x: 8650, y: 4350, z: 0.78 }, { t: 91.4, x: 8650, y: 4350, z: 0.8 },
  ];
  const eb = printBox(800, A.eng), eh = 800 / A.eng;
  const route = (() => { const a = mapXY(pmap, -36, -23.5), c = mapXY(pmap, -50, -42), b = mapXY(pmap, -66.8, -49.1); return `M${a[0]},${a[1]} Q${c[0]},${c[1]} ${b[0]},${b[1]}`; })();
  const hebW = 22 * 0.62 * 26 + 26;
  const strT = t("C_str"), x0 = 5560, x1 = 7300, ys = 4470;
  return <WorldCam keys={cam}>
    <WorldDesk w={10000} h={5200} />
    <WPrint src={P("06_rollo_mar_muerto.jpg")} aspect={A.scr} w={1100} keys={SCR} t0={t("C_scroll")} from={[-300, 200, -8]}>
      <L id="C_gen" x={-25} y={-47} size={26} /><L id="C_nef" x={-25} y={-2} size={26} red />
      <Rec t={E.C_scroll_rec.t} />
    </WPrint>
    <WPrint src={P("05_goliat_grabado.jpg")} aspect={A.gol} w={1150} keys={GOL} t0={t("C_gol")} from={[320, -160, 9]}>
      <L id="C_golL1" x={-25} y={-47} size={28} /><L id="C_golL2" x={-25} y={0} size={28} />
      <Rec t={E.C_gol_rec.t} />
    </WPrint>
    <Ruler x={3600} y={830} t0={t("C_ruler")} levels={[{ t: t("C_bar29"), dur: 0.5, h: 2.9 }, { t: t("C_bar20"), dur: 0.5, h: 2.0 }]}>
      <L id="C_heb" x={250} y={rulerY(2.9) - 60} size={26} />
      <Strike x={250} y={rulerY(2.9) - 37} w={hebW} t={t("C_strike")} />
      <L id="C_dss" x={250} y={rulerY(2.0) - 60} size={24} red />
    </Ruler>
    <DateCard cx={3700} cy={2320} roll="C_year" />
    <WPrint src={P("08_magallanes.jpg")} aspect={A.mag} w={560} keys={MAG} t0={t("C_mag")} from={[260, 160, 10]}>
      <L id="C_magL" x={-20} y={560 / A.mag + 70} size={26} />
      <Rec t={E.C_mag_rec.t} />
    </WPrint>
    <MapBase map={pmap} x={PM.x} y={PM.y} s={PM.s} svg={<>
      <MapText x={mapXY(pmap, -40, -40)[0]} y={mapXY(pmap, -40, -40)[1]} text="OCÉANO ATLÁNTICO" size={56} spacing={0.3} />
      <MapText x={mapXY(pmap, -88, -40)[0]} y={mapXY(pmap, -88, -40)[1]} text="OCÉANO PACÍFICO" size={56} spacing={0.3} />
      <RouteLine d={route} t={t("C_route")} dur={1.0} width={9} />
      <ShipIcon x={mapXY(pmap, -66.2, -49.6)[0]} y={mapXY(pmap, -66.2, -49.6)[1]} t={t("C_sj")} size={120} />
      <PulseMarker x={mapXY(pmap, -67.7, -49.3)[0]} y={mapXY(pmap, -67.7, -49.3)[1]} t={t("C_sj")} r={16} />
    </>}>
      <L id="C_sjL" x={mapXY(pmap, -67.7, -49.3)[0] - 380} y={mapXY(pmap, -67.7, -49.3)[1] + 50} size={44} />
      <L id="C_arg" x={mapXY(pmap, -70, -34)[0]} y={mapXY(pmap, -70, -34)[1]} size={44} bare style={{ color: "rgba(40,30,20,0.75)" }} />
      <L id="C_pat" x={mapXY(pmap, -77, -44.5)[0]} y={mapXY(pmap, -77, -44.5)[1]} size={110} bare style={{ color: T.color.red }} />
    </MapBase>
    <WPrint src={P("07_patagones_grabado.jpg")} aspect={A.eng} w={800} keys={ENG} t0={t("C_eng")} from={[-260, -200, -9]}>
      <svg width={eb.W} height={eb.H} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
        <PenPath d={wobblyEllipse(eb.b + 0.80 * 800, eb.b + 0.5 * eh, 0.085 * 800, 0.47 * eh, 7)} t={t("C_engC")} dur={0.5} width={5} />
      </svg>
      <L id="C_pig" x={-25} y={-47} size={24} />
      <L id="C_waist" x={eb.W - 330} y={-50} size={24} red />
      <L id="C_patL" x={-20} y={eb.H + 14} size={30} />
      <Rec t={E.C_eng_rec.t} />
    </WPrint>
    {/* two and a half centuries: a string between two dated tags */}
    <L id="C_t0" x={x0 - 120} y={ys - 30} size={44} />
    {s >= t("C_t1") - 0.05 ? <div style={{ position: "absolute", left: x1 + 20, top: ys - 30, fontFamily: T.font.mono, fontWeight: 700, fontSize: 44, letterSpacing: "0.08em", color: T.color.tapeText, background: T.color.tape, padding: "8px 20px", boxShadow: "0 2px 6px rgba(0,0,0,0.5)" }}>
      <RollPlain id="C_t1" /></div> : null}
    <svg width={10} height={10} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
      <StringLine a={[x0 + 10, ys]} b={[x1, ys]} t={strT} dur={1.6} sag={90} />
    </svg>
    {s >= strT ? <TypeLabel text="250 AÑOS DE MITO" t={strT + 0.9} cps={22} size={34} bar={false} style={{ left: (x0 + x1) / 2 - monoW(16, 34) / 2, top: ys + 120, color: T.color.title }} /> : null}
    <Ruler x={8000} y={4350} t0={t("C_ruler3")} levels={[{ t: t("C_bar198"), dur: 0.5, h: 1.98 }]}>
      <L id="C_198" x={250} y={rulerY(1.98) - 64} size={34} red />
      <L id="C_alt" x={250} y={rulerY(2.6) - 30} size={28} />
      <L id="C_gig" x={250} y={rulerY(2.9) - 40} size={28} />
      <Strike x={250} y={rulerY(2.9) - 16} w={8 * 0.62 * 28 + 25} t={t("C_gigS")} />
    </Ruler>
    <WPrint src={P("09_tehuelches.jpg")} aspect={A.teh} w={900} keys={TEH} t0={t("C_teh")} from={[300, 150, 9]}>
      <L id="C_tehL" x={-25} y={-47} size={30} />
      <Rec t={E.C_teh_rec.t} />
    </WPrint>
  </WorldCam>;
};
const RollPlain: React.FC<{ id: string }> = ({ id }) => { const e = E[id]; const { s } = useSec(); return <>{Math.round(interpolate(s, [e.t, e.t2], [e.from, e.to], clamp))}</>; };

// ======================= W3: the Cardiff Giant =======================
const UM = { x: 1600, y: 2400, s: 0.6 };
const W3: React.FC = () => {
  const ORIG: K[] = [{ t: t("D_card"), x: 2600, y: 720, s: 1, r: -1.2 }];
  const BAR: K[] = [{ t: t("D_bar"), x: 5350, y: 850, s: 1, r: 2.5 }];
  const COPY: K[] = [{ t: t("D_copy"), x: 4150, y: 760, s: 1, r: 3 }];
  const HULL: K[] = [{ t: t("D_hull"), x: 3050, y: 1700, s: 1, r: -2.5 }];
  const FARM: K[] = [{ t: t("D_farm"), x: 4150, y: 1820, s: 0.62, r: 4 }];
  const { s } = useSec();
  const cdf = onMap(UM, umap, -76.15, 42.89);
  const cam: K[] = [
    { t: 91.2, x: 960, y: 560, z: 0.93 }, { t: 93.6, x: 960, y: 560, z: 1.0 },
    { t: 93.9, x: 1800, y: 640, z: 0.75, r: -1 }, { t: 94.4, x: 2600, y: 720, z: 0.92 }, { t: 98.8, x: 2600, y: 720, z: 0.98 },
    { t: 99.3, x: 2700, y: 1800, z: 0.55, r: 2 }, { t: 99.9, x: cdf[0] - 60, y: cdf[1] + 20, z: 1.2 }, { t: 104.6, x: cdf[0] - 60, y: cdf[1] + 20, z: 1.28 },
    { t: 105.1, x: 4200, y: 1700, z: 0.55, r: -2 }, { t: 105.6, x: 5650, y: 880, z: 0.92 }, { t: 109.9, x: 5650, y: 880, z: 0.96 },
    { t: 110.4, x: 4800, y: 800, z: 0.82 }, { t: 111.3, x: 4800, y: 800, z: 0.84 },
    { t: 111.85, x: 3380, y: 760, z: 0.62 }, { t: 116.1, x: 3380, y: 760, z: 0.64 },
    { t: 116.6, x: 3150, y: 1650, z: 0.95 }, { t: 122.4, x: 3250, y: 1680, z: 1.0 },
    { t: 122.9, x: 3550, y: 1760, z: 0.86 }, { t: 124.4, x: 3550, y: 1800, z: 0.86 }, { t: 124.9, x: 3550, y: 2000, z: 0.82 }, { t: 126.4, x: 3550, y: 2000, z: 0.85 },
  ];
  const ob = printBox(1300, A.cdf), oh = 1300 / A.cdf;
  const hb = printBox(560, A.brady), hh = 560 / A.brady;
  const pO = pinAt(1300, A.cdf, ORIG, s), pC = pinAt(1000, A.cdf, COPY, s);
  const pH = pinAt(560, A.brady, HULL, s), pF = pinAt(600, A.farm, FARM, s);
  const cities: [number, number][] = [[-74.0, 40.71], [-71.06, 42.36], [-75.16, 39.95], [-73.76, 42.65], [-78.88, 42.89], [-77.6, 43.16]];
  return <WorldCam keys={cam}>
    <WorldDesk w={7000} h={4200} />
    <DateCard cx={960} cy={560} roll="D_year" top="D_back" />
    <WPrint src={P("10_gigante_cardiff.jpg")} aspect={A.cdf} w={1300} keys={ORIG} t0={t("D_card")} from={[-300, 220, -8]}>
      <svg width={ob.W} height={ob.H} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
        <PenPath d={`M${ob.b + 0.07 * 1300},${ob.b + 0.13 * oh} L${ob.b + 0.9 * 1300},${ob.b + 0.43 * oh}`} t={t("D_len")} dur={0.6} width={6} />
        <PenPath d={`M${ob.b + 0.06 * 1300},${ob.b + 0.07 * oh} L${ob.b + 0.08 * 1300},${ob.b + 0.19 * oh} M${ob.b + 0.89 * 1300},${ob.b + 0.37 * oh} L${ob.b + 0.91 * 1300},${ob.b + 0.49 * oh}`} t={t("D_len") + 0.55} dur={0.2} width={6} />
      </svg>
      <L id="D_3m" x={ob.b + 0.47 * 1300} y={ob.b + 0.13 * oh} size={40} red />
      <L id="D_cdf" x={-25} y={-50} size={28} />
      <L id="D_origL" x={-25} y={ob.H + 16} size={40} />
      <Rec t={E.D_card_rec.t} />
    </WPrint>
    <MapBase map={umap} x={UM.x} y={UM.y} s={UM.s} svg={<>
      <MapText x={mapXY(umap, -86, 41)[0]} y={mapXY(umap, -86, 41)[1]} text="ESTADOS UNIDOS · 1869" size={54} spacing={0.25} />
      <MapText x={mapXY(umap, -68.5, 39)[0]} y={mapXY(umap, -68.5, 39)[1]} text="ATLÁNTICO" size={44} />
      {cities.map(([lo, la], i) => { const a = mapXY(umap, lo, la), b = mapXY(umap, -76.15, 42.89); const c: [number, number] = [(a[0] + b[0]) / 2 + (i % 2 ? 80 : -80), (a[1] + b[1]) / 2 - 90];
        return <g key={i}><circle cx={a[0]} cy={a[1]} r={9} fill={T.color.ink} /><Arrow a={a as [number, number]} c={c} b={[b[0] + (a[0] - b[0]) * 0.08, b[1] + (a[1] - b[1]) * 0.08]} t={t("D_arrows") + i * 0.12} dur={0.6} width={9} /></g>; })}
      <MapText x={mapXY(umap, -74.0, 40.71)[0] + 40} y={mapXY(umap, -74.0, 40.71)[1] + 60} text="Nueva York" size={34} spacing={0.05} />
      <MapText x={mapXY(umap, -71.06, 42.36)[0]} y={mapXY(umap, -71.06, 42.36)[1] + 60} text="Boston" size={30} spacing={0.05} />
      <PulseMarker x={mapXY(umap, -76.15, 42.89)[0]} y={mapXY(umap, -76.15, 42.89)[1]} t={t("D_pin")} r={16} />
    </>}>
      <TypeLabel text="CARDIFF" t={t("D_pin")} cps={20} size={40} style={{ left: mapXY(umap, -76.15, 42.89)[0] - 320, top: mapXY(umap, -76.15, 42.89)[1] - 100 }} />
      <L id="D_bib" x={mapXY(umap, -80.5, 44.6)[0]} y={mapXY(umap, -80.5, 44.6)[1]} size={40} red />
    </MapBase>
    <WPrint src={P("11b_retrato_brady.jpg")} aspect={A.brady} w={560} keys={BAR} t0={t("D_bar")} from={[300, -150, 10]}>
      <L id="D_barL1" x={-20} y={560 / A.brady + 70} size={28} /><L id="D_barL2" x={-20} y={560 / A.brady + 118} size={28} />
      <Rec t={E.D_bar_rec.t} />
    </WPrint>
    <BigNum id="D_50k" x={6080} y={760} pre="$" size={110} />
    <Stamp text="RECHAZADO" t={t("D_no")} x={6080} y={790} size={60} rot={-10} />
    <WPrint src={P("10_gigante_cardiff.jpg")} aspect={A.cdf} w={1000} keys={COPY} t0={t("D_copy")} from={[0, -260, 12]}>
      <L id="D_copyL" x={-25} y={-50} size={40} red />
      <Rec t={E.D_copy_rec.t} size={20} />
    </WPrint>
    <svg width={10} height={10} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
      <StringLine a={pO} b={pC} t={t("D_str")} dur={0.6} sag={160} />
      <StringLine a={pH} b={pF} t={t("D_str2")} dur={0.5} sag={80} />
    </svg>
    <L id="D_fraud" x={(pO[0] + pC[0]) / 2 - 130} y={Math.max(pO[1], pC[1]) + 120} size={48} red />
    <WPrint src={P("11a_retrato_brady.jpg")} aspect={A.brady} w={560} keys={HULL} t0={t("D_hull")} from={[-260, 200, -10]}>
      <L id="D_hullL1" x={-25} y={-47} size={26} /><L id="D_hullL2" x={-25} y={-2} size={26} />
      <L id="D_yeso" x={hb.W - 60} y={hh * 0.35} size={30} red />
      <L id="D_bur" x={-20} y={hb.H + 14} size={26} />
      <Rec t={E.D_hull_rec.t} />
    </WPrint>
    <Stamp text="CONFIESA" t={t("D_conf")} x={3050} y={1880} size={60} rot={8} />
    <WPrint src={P("14_granja_pozo.jpg")} aspect={A.farm} w={600} keys={FARM} t0={t("D_farm")} from={[260, 100, 10]} />
    <BigNum id="D_20k" x={3550} y={2330} pre="$" size={130} />
  </WorldCam>;
};

// ======================= W4: Robert Wadlow + the evidence board =======================
const W4: React.FC = () => {
  const { s } = useSec();
  const WAD: K[] = [{ t: t("E_wad"), x: 2300, y: 720, s: 1, r: -1.5 }];
  const C = { x: 3200, y: 2330 };
  const B = [
    { src: "01_muela_gigantopithecus.jpg", a: A.jaw, x: 2380, y: 1920, r: -4, t: t("E_b1"), st: "E_s1", txt: "REAL", rec: true },
    { src: "05_goliat_grabado.jpg", a: A.gol, x: 4020, y: 1920, r: 3, t: t("E_b2"), st: "E_s2", txt: "MITO", rec: true },
    { src: "07_patagones_grabado.jpg", a: A.eng, x: 2380, y: 2760, r: 2.5, t: t("E_b3"), st: "E_s3", txt: "EXAGERADO", rec: true },
    { src: "10_gigante_cardiff.jpg", a: A.cdf, x: 4020, y: 2760, r: -3, t: t("E_b4"), st: "E_s4", txt: "FRAUDE", rec: true },
  ];
  const cam: K[] = [
    { t: 126.2, x: 960, y: 560, z: 0.95 }, { t: 127.05, x: 960, y: 560, z: 1.0 },
    { t: 127.35, x: 1650, y: 640, z: 0.8, r: -1 }, { t: 127.8, x: 2300, y: 720, z: 1.0 }, { t: 134.6, x: 2300, y: 740, z: 1.06 },
    { t: 135.0, x: 2900, y: 760, z: 0.8 }, { t: 135.5, x: 3600, y: 720, z: 0.92 }, { t: 146.2, x: 3600, y: 720, z: 0.98 },
    { t: 146.75, x: 3200, y: 1500, z: 0.55, r: 2 }, { t: 147.3, x: C.x, y: C.y, z: 0.72 }, { t: 154.6, x: C.x, y: C.y, z: 0.76 },
    { t: 155.3, x: 2300, y: 740, z: 1.05 }, { t: DUR, x: 2300, y: 760, z: 1.12 },
  ];
  const wb = printBox(900, A.wad);
  const boardIn = interpolate(s, [t("E_board"), t("E_board") + 0.4], [0, 1], clamp);
  return <WorldCam keys={cam}>
    <WorldDesk w={6000} h={4000} />
    <L id="E_real" x={960 - monoW(E.E_real.text.length, 56) / 2} y={500} size={56} red />
    <WPrint src={P("13_robert_wadlow.jpg")} aspect={A.wad} w={900} keys={WAD} t0={t("E_wad")} from={[0, 300, -6]}>
      <L id="E_wadL1" x={-25} y={-47} size={26} /><L id="E_wadL2" x={-25} y={-2} size={26} /><L id="E_wadL3" x={-25} y={43} size={26} />
      <L id="E_hip" x={wb.W - 470} y={wb.H - 40} size={26} red />
      <L id="E_kind" x={wb.W / 2 - monoW(E.E_kind.text.length, 40) / 2} y={wb.H + 20} size={40} />
      <Rec t={E.E_wad_rec.t} />
    </WPrint>
    <Stamp text="REAL" t={t("E_s5")} x={2300 + 300} y={720 + 220} size={80} rot={-8} />
    <Ruler x={3600} y={720} t0={t("E_ruler")} levels={[{ t: t("E_bar"), dur: 1.6, h: 2.72 }]}
      ghosts={[{ h: 3.0, text: "SIMIO GIGANTE 3,0" }, { h: 2.9, text: "GOLIAT (HEBREO) 2,9" }, { h: 1.98, text: "PATAGONES 1,98" }]}>
      <L id="E_date" x={20} y={-70} size={30} />
      <L id="E_272" x={-250} y={rulerY(2.72) - 30} size={40} red />
      <L id="E_rec" x={600} y={380} size={30} red />
      <L id="E_died" x={600} y={450} size={30} />
      <L id="E_age" x={600} y={520} size={30} />
    </Ruler>
    {/* evidence board */}
    {boardIn > 0 ? <div style={{ position: "absolute", left: C.x - 330, top: C.y - 120, width: 660, height: 240, background: T.color.paperEdge, boxShadow: T.shape.shadow, opacity: boardIn, transform: `rotate(-1deg) scale(${0.9 + 0.1 * boardIn})`, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
      <div style={{ fontFamily: T.font.mono, fontWeight: 700, fontSize: 30, letterSpacing: "0.15em", color: T.color.inkSoft }}>EXPEDIENTE</div>
      <div style={{ fontFamily: T.font.serif, fontWeight: 700, fontSize: 70, color: T.color.ink }}>GIGANTES<span style={{ color: T.color.red }}>.</span></div>
    </div> : null}
    {B.map((b, i) => <React.Fragment key={i}>
      <WPrint src={P(b.src)} aspect={b.a} w={560} keys={[{ t: b.t, x: b.x, y: b.y, s: 1, r: b.r }]} t0={b.t} from={[(b.x - C.x) * 0.4, (b.y - C.y) * 0.4, b.r * 2]}>
        {b.rec ? <Rec t={b.t + 0.45} size={16} /> : null}
        <TypeLabel text={b.txt} t={t(b.st)} cps={30} size={34} style={{ left: -20, top: printBox(560, b.a).H + 14, background: T.color.red, color: "#f6eee0" }} />
      </WPrint>
      <Stamp text={b.txt} t={t(b.st)} x={b.x} y={b.y + 20} size={b.txt.length > 6 ? 50 : 64} rot={i % 2 ? 8 : -8} />
    </React.Fragment>)}
    <svg width={10} height={10} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
      {B.map((b, i) => <StringLine key={i} a={[C.x + (b.x < C.x ? -300 : 300), C.y + (b.y < C.y ? -110 : 110)]} b={pinAt(560, b.a, [{ t: b.t, x: b.x, y: b.y, s: 1, r: b.r }], s)} t={b.t + 0.35} dur={0.45} sag={40} />)}
    </svg>
  </WorldCam>;
};

export const PrimerosGigantes: React.FC = () => {
  const { s } = useSec();
  const b0 = t("A_burn"), b1 = t("B_burn"), b2 = t("C_burn"), b3 = t("D_burn");
  const end = interpolate(s, [DUR - 0.6, DUR], [0, 1], clamp);
  const shakes = ["A_hit", "B_ext", "D_no", "D_conf", "E_s1", "E_s2", "E_s3", "E_s4", "E_s5"].map(t);
  return <AbsoluteFill style={{ background: T.color.desk }}>
    <Gate shakes={shakes}>
      {s < b0 ? <W0 /> : null}
      {s >= b0 && s < b1 ? <W1 /> : null}
      {s >= b1 && s < b2 ? <W2 /> : null}
      {s >= b2 && s < b3 ? <W3 /> : null}
      {s >= b3 ? <W4 /> : null}
    </Gate>
    {[b0, b1, b2, b3].map((b) => <BurnFlash key={b} t={b} dur={0.5} />)}
    <FilmLayer vignette={0.86} />
    <AbsoluteFill style={{ background: "#000", opacity: end }} />
    <Audio src={staticFile("primeros-gigantes/mix.wav")} />
  </AbsoluteFill>;
};
export const within_ = within;
