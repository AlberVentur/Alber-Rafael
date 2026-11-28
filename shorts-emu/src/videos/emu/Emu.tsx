// «La guerra que Australia perdió contra los emús» (1932), horizontal 1920x1080 in the flat-characters-in-a-3D-toon-world style, with the template's post
// chain: InkPass -> lens blur pre + main -> bloom -> NEUTRAL tone map -> grade, MSAA 4. Shot changes crossfade by
// stacking a second canvas. Captions and voice are added afterwards with ffmpeg (one word at a time).
import React, { useEffect, useMemo } from "react";
import * as THREE from "three";
import { AbsoluteFill, Audio, staticFile, useCurrentFrame, getInputProps } from "remotion";
import { ThreeCanvas } from "@remotion/three";
import { useFrame, useThree } from "@react-three/fiber";
import { BlendFunction, BloomEffect, EffectComposer, EffectPass, RenderPass, ToneMappingEffect, ToneMappingMode } from "postprocessing";
import { World, gradeOf } from "./world";
import { InkPass, noInkFallback } from "./ink";
import { LensBlur } from "./lensblur";
import { GradeEffect, GRADES, GRADE_STRENGTH, gradeFor } from "./grade";
import { layersAt, dofAt, MARKS, smooth } from "./story";

const makeBloom = () => {
  const b = new BloomEffect({ blendFunction: BlendFunction.ADD, intensity: 0.5, luminanceThreshold: 1.0, luminanceSmoothing: 0.2, mipmapBlur: true, levels: 6, radius: 0.6 });
  const mip = b.mipmapBlurPass, setSize = mip.setSize.bind(mip);
  mip.setSize = (w: number, h: number) => setSize(Math.round((1920 * w) / Math.max(h, 1)), 1920);
  return b;
};
const fwd = new THREE.Vector3(), fpt = new THREE.Vector3();

const Inner: React.FC<{ id: number }> = ({ id }) => {
  const f = useCurrentFrame();
  const { camera, scene, gl, size } = useThree();
  const world = useMemo(() => new World(), []);
  const fx = useMemo(() => ({
    ink: new InkPass(scene, camera as THREE.PerspectiveCamera),
    lens: new LensBlur({ maxCoC: 24, nearScale: 1.2 }),
    bloom: makeBloom(),
    tone: new ToneMappingEffect({ mode: ToneMappingMode.NEUTRAL }),
    grade: new GradeEffect(GRADES.day, GRADE_STRENGTH.day),
  }), [camera, scene]);
  useEffect(() => () => fx.ink.dispose(), [fx]);
  // the R3F <EffectComposer> (3.2.x) rendered blank under Remotion here: drive postprocessing's composer by hand
  const composer = useMemo(() => {
    const c = new EffectComposer(gl, { multisampling: 4, frameBufferType: THREE.HalfFloatType });
    c.addPass(new RenderPass(scene, camera));
    c.addPass(fx.ink);
    c.addPass(new EffectPass(camera, fx.lens.pre));
    c.addPass(new EffectPass(camera, fx.lens.main));
    c.addPass(new EffectPass(camera, fx.bloom, fx.tone, fx.grade));
    return c;
  }, [gl, scene, camera, fx]);
  useEffect(() => { composer.setSize(size.width, size.height); }, [composer, size.width, size.height]);
  useFrame(() => { composer.render(); }, 1);
  const cam = camera as THREE.PerspectiveCamera;
  const target = world.update(id, f, cam, scene);
  noInkFallback(world.root);
  const d = dofAt(id, f);
  cam.getWorldDirection(fwd);
  if (d.focus) fpt.set(...d.focus); else fpt.copy(target);
  fx.lens.focus = Math.max(0.3, fpt.sub(cam.position).dot(fwd));
  fx.lens.cInf = d.cInf;
  gradeFor(fx.grade, gradeOf(id));
  return <primitive object={world.root} dispose={null} />;
};

const dprOverride = () => (getInputProps() as { dpr?: number }).dpr;
const ShotView: React.FC<{ id: number; alpha: number }> = ({ id, alpha }) => (
  <AbsoluteFill style={{ opacity: alpha }}>
    <ThreeCanvas width={1920} height={1080} {...(dprOverride() ? { dpr: dprOverride() } : {})} shadows
      gl={{ antialias: false, stencil: false, powerPreference: "high-performance", toneMappingExposure: 1.0 }} camera={{ fov: 40, near: 0.2, far: 1500 }}>
      <Inner id={id} />
    </ThreeCanvas>
  </AbsoluteFill>
);

// ---- cifras discretas arriba del cuadro (sin recuadros ni flechas sobre los personajes) ----
const Marks: React.FC<{ f: number }> = ({ f }) => {
  const live = MARKS.filter((m) => f >= m.a && f <= m.b);
  if (!live.length) return null;
  return (
    <AbsoluteFill>
      <svg width={1920} height={1080}>
        {live.map((m) => {
          const pop = smooth((f - m.a) / 6), out = 1 - smooth((f - (m.b - 6)) / 6);
          return (
            <g key={m.label} opacity={pop * out} transform={`translate(960,150) scale(${0.85 + 0.15 * pop})`}>
              <text textAnchor="middle" y={0} fontFamily="Arial Rounded MT Bold, Arial, sans-serif" fontWeight="bold" fontSize={80} fill={m.col}
                stroke="#1a1010" strokeWidth={9} paintOrder="stroke">{m.label}</text>
              <text textAnchor="middle" y={50} fontFamily="Arial Rounded MT Bold, Arial, sans-serif" fontWeight="bold" fontSize={42} fill="#fff"
                stroke="#1a1010" strokeWidth={7} paintOrder="stroke">{m.sub}</text>
            </g>
          );
        })}
      </svg>
    </AbsoluteFill>
  );
};

/** botón genérico dibujado (sin logos de marcas) en el cierre */
const Subscribe: React.FC<{ f: number }> = ({ f }) => {
  const a = 3510;
  if (f < a) return null;
  const pop = smooth((f - a) / 8), press = f >= 3552 && f < 3560 ? 0.94 : 1;
  const pressed = f >= 3556;
  return (
    <AbsoluteFill>
      <svg width={1920} height={1080}>
        <g opacity={pop} transform={`translate(960,930) scale(${(0.7 + 0.3 * pop) * press})`}>
          <rect x={-300} y={-80} width={600} height={160} rx={80} fill={pressed ? "#8a8a8a" : "#e8262c"} stroke="#241726" strokeWidth={10} />
          <text textAnchor="middle" y={22} fontFamily="Arial Rounded MT Bold, Arial, sans-serif" fontWeight="bold" fontSize={68} fill="#ffffff">{pressed ? "SUSCRITO ✓" : "SUSCRÍBETE"}</text>
        </g>
        {f >= 3540 && f < 3560 && (
          <g transform={`translate(${1120 - (f - 3540) * 6},${1040 - (f - 3540) * 4})`}>
            <path d="M0,0 L0,70 L18,54 L32,84 L44,78 L30,48 L54,48 Z" fill="#ffffff" stroke="#241726" strokeWidth={6} strokeLinejoin="round" />
          </g>
        )}
      </svg>
    </AbsoluteFill>
  );
};

export const EmuShort: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: "#cfe2f2" }}>
      {layersAt(f).map((l) => <ShotView key={`shot${l.id}`} id={l.id} alpha={l.alpha} />)}
      <Marks f={f} />
      <Subscribe f={f} />
      {!(getInputProps() as { mute?: boolean }).mute && <Audio src={staticFile("voz/emu_final.wav")} />}
    </AbsoluteFill>
  );
};
