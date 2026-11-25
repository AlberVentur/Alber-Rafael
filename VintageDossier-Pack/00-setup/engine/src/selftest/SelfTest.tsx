// Self-test (4 s): proves fonts, textures, grain, typewriter, prints, camera glide, icons and SFX-free render all work.
import React from "react";
import { AbsoluteFill } from "remotion";
import { T } from "../styles/dossier/tokens";
import { BurstIcon, FilmLayer, Gate, K, PulseMarker, Roll, TankIcon, TypeLabel, WorldCam, WorldDesk, WPrint } from "../styles/dossier/kit";

const CAM: K[] = [{ t: 0, x: 960, y: 540, z: 1 }, { t: 1.6, x: 960, y: 540, z: 1.05 }, { t: 2.3, x: 2300, y: 700, z: 0.95, r: -1 }, { t: 4, x: 2320, y: 700, z: 1.02 }];
export const SelfTest: React.FC = () => <AbsoluteFill style={{ background: T.color.desk }}>
  <Gate shakes={[3.0]}>
    <WorldCam keys={CAM}>
      <WorldDesk w={3400} h={1800} />
      <TypeLabel text="SELF TEST" t={0.1} cps={14} size={34} bar={false} style={{ left: 960 - 9 * 0.68 * 34 / 2, top: 395, color: T.color.title }} />
      <div style={{ position: "absolute", left: 0, width: 1920, top: 450, textAlign: "center", fontFamily: T.font.serif, fontWeight: 700, fontSize: 190, color: T.color.title }}><Roll from={1990} to={2026} t={0.6} t2={1.4} /><span style={{ color: T.color.red }}>.</span></div>
      <WPrint src="paper.jpg" aspect={1.5} w={900} keys={[{ t: 2, x: 2300, y: 700, s: 1, r: -2 }]} t0={2.0}>
        <TypeLabel text="ENGINE OK" t={2.4} cps={18} size={26} style={{ left: -20, top: -40 }} />
        <svg width={1000} height={700} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
          <TankIcon a={[150, 450]} c={[450, 380]} b={[800, 450]} t={2.4} t2={3.9} />
          <PulseMarker x={600} y={250} t={2.6} />
          <BurstIcon x={400} y={300} t={3.0} />
        </svg>
      </WPrint>
    </WorldCam>
  </Gate>
  <FilmLayer />
</AbsoluteFill>;
