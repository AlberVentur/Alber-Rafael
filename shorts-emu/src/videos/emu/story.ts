// Plan de tomas: «La guerra que Australia perdió contra los emús» (1932). Horizontal 1920x1080, 30 fps, 120 s.
// Sincronizado con emu/voz/palabras.json (Edge TTS es-ES-AlvaroNeural +27 %). Reglas de cámara de la skill: nunca
// quieta, deslizamientos smootherstep, fundido de 6 cuadros al cambiar de lugar.
export const FPS = 30;
export const TOTAL = 3600;
export type V3 = [number, number, number];
export const clamp01 = (x: number) => Math.max(0, Math.min(1, x));
export const smooth = (x: number) => { const u = clamp01(x); return u * u * (3 - 2 * u); };
const smoother = (x: number) => { const u = clamp01(x); return u * u * u * (u * (6 * u - 15) + 10); };

export type Luz = "day" | "rain" | "golden" | "room";
type Key = { f: number; pos: V3; look: V3; fov: number; glide?: boolean };
export type ShotDef = { id: number; a: number; b: number; keys: Key[]; fog: [number, number]; luz: Luz };

// lugares del mundo
export const FARM = { x: -30, z: 10 };          // casa de la granja (mira a +z)
export const FENCE_X = -12;                      // cerca oeste del trigal (rota en z -6..0)
export const DAM = { x: 120, z: 120, r: 16 };    // represa de la emboscada
export const ROUGH = { x0: -260, x1: -60, z: 220 }; // terreno irregular de la persecución
export const LOOKOUT = { x: -90, z: 70 };        // termitero del vigía
export const PLAIN = { x: 260, z: -60 };         // llano de los dardos y de los emús soldado
export const ARMS = { x: 0, z: 300 };            // el escudo al atardecer
export const OFFICE_X = 800;

const K = (f: number, pos: V3, look: V3, fov: number, glide = true): Key => ({ f, pos, look, fov, glide });
export const SHOTS: ShotDef[] = [
  { id: 1, a: 0, b: 158, luz: "day", fog: [150, 900], keys: [ // la guerra contra los pájaros… y perdió
    K(0, [52, 1.4, 38], [60, 1.3, 70], 38, false), K(110, [53.5, 1.5, 41], [60, 1.4, 70], 36), K(158, [55.6, 1.6, 47.2], [56.5, 1.55, 49.5], 34),
  ] },
  { id: 2, a: 152, b: 394, luz: "day", fog: [200, 1200], keys: [ // tierras para los veteranos, trigo
    K(152, [-90, 38, 110], [0, 0, -20], 42, false), K(300, [-62, 9, 52], [-30, 2, 10], 40), K(394, [-34, 1.9, 24.5], [-31, 1.5, 17.5], 36),
  ] },
  { id: 3, a: 390, b: 558, luz: "day", fog: [150, 900], keys: [ // la Gran Depresión: el trigo se hunde
    K(390, [-33.2, 1.7, 22.4], [-31, 1.45, 17.5], 36, false), K(558, [-32.0, 1.6, 21.0], [-31, 1.45, 17.5], 34),
  ] },
  { id: 4, a: 555, b: 804, luz: "day", fog: [200, 1400], keys: [ // llegan veinte mil emús; casi dos metros
    K(555, [18, 2.4, 42], [52, 1.6, -30], 36, false), K(670, [24, 1.9, 30], [58, 1.4, -40], 34), K(700, [43.5, 1.6, -21], [48, 1.2, -28], 38), K(804, [44.6, 1.5, -23.2], [48, 1.2, -28], 36),
  ] },
  { id: 5, a: 800, b: 962, luz: "day", fog: [150, 900], keys: [ // comen, pisotean, rompen cercas; entran los conejos
    K(800, [4, 1.3, 2], [18, 0.8, -10], 40, false), K(870, [2, 1.2, 0], [10, 0.6, -6], 40), K(962, [-6.5, 1.0, 1.5], [-12, 0.4, -3], 40),
  ] },
  { id: 6, a: 958, b: 1155, luz: "room", fog: [200, 900], keys: [ // los granjeros ante el ministro
    K(958, [OFFICE_X + 2.6, 1.7, 5.4], [OFFICE_X, 1.3, -2.0], 40, false), K(1092, [OFFICE_X + 1.2, 1.6, 3.4], [OFFICE_X, 1.4, -2.6], 38), K(1155, [OFFICE_X + 0.4, 1.6, 1.6], [OFFICE_X, 1.5, -2.8], 36),
  ] },
  { id: 7, a: 1152, b: 1302, luz: "day", fog: [200, 1200], keys: [ // el mayor Meredith, dos soldados, dos Lewis, diez mil balas
    K(1152, [-6, 1.7, 52], [0, 1.4, 40], 38, false), K(1302, [1.5, 1.6, 47.5], [0, 1.3, 40], 36),
  ] },
  { id: 8, a: 1300, b: 1548, luz: "rain", fog: [80, 600], keys: [ // la lluvia; 2 de noviembre: cincuenta emús, se dispersan
    K(1300, [30, 2.2, 62], [40, 1.6, 90], 42, false), K(1360, [31, 2.0, 64], [40, 1.6, 90], 42), K(1460, [33, 1.5, 70], [40, 1.6, 95], 40), K(1548, [34, 2.6, 72], [42, 2, 120], 44),
  ] },
  { id: 9, a: 1546, b: 1852, luz: "day", fog: [200, 1200], keys: [ // la emboscada en la represa
    K(1546, [DAM.x - 34, 3, DAM.z - 36], [DAM.x, 1, DAM.z], 40, false), K(1650, [DAM.x - 26, 1.4, DAM.z - 28], [DAM.x + 6, 1.2, DAM.z + 8], 38),
    K(1745, [DAM.x - 22.6, 1.35, DAM.z - 25.4], [DAM.x - 6, 1.1, DAM.z - 6], 38), K(1800, [DAM.x - 23.3, 1.3, DAM.z - 23.0], [DAM.x - 22.1, 1.1, DAM.z - 20.4], 34), K(1852, [DAM.x - 23.0, 1.3, DAM.z - 22.5], [DAM.x - 22.1, 1.1, DAM.z - 20.4], 34),
  ] },
  { id: 10, a: 1850, b: 2104, luz: "day", fog: [200, 1200], keys: [ // la ametralladora en el camión
    K(1850, [-199, 3, ROUGH.z + 13], [-188, 1.4, ROUGH.z], 40, false), K(2104, [-97, 3.2, ROUGH.z + 14], [-84, 1.4, ROUGH.z], 42, false),
  ] },
  { id: 11, a: 2102, b: 2192, luz: "day", fog: [200, 1200], keys: [ // el ejército se retira
    K(2102, [8, 1.7, 30], [0, 1.4, 44], 38, false), K(2192, [9, 1.9, 27], [0, 1.4, 44], 40),
  ] },
  { id: 12, a: 2190, b: 2474, luz: "day", fog: [200, 1200], keys: [ // segundo intento; el vigía
    K(2190, [LOOKOUT.x + 26, 3, LOOKOUT.z + 26], [LOOKOUT.x, 1.5, LOOKOUT.z], 40, false), K(2380, [LOOKOUT.x + 9, 2.2, LOOKOUT.z + 9], [LOOKOUT.x, 2.8, LOOKOUT.z], 38), K(2474, [LOOKOUT.x + 6.5, 3.0, LOOKOUT.z + 6.5], [LOOKOUT.x, 3.4, LOOKOUT.z], 36),
  ] },
  { id: 13, a: 2470, b: 2762, luz: "room", fog: [200, 900], keys: [ // el informe de Meredith
    K(2470, [OFFICE_X - 2.7, 1.6, 4.0], [OFFICE_X - 2.7, 1.4, -1.5], 40, false), K(2600, [OFFICE_X - 2.6, 1.55, 1.8], [OFFICE_X - 2.65, 1.35, -1.6], 38), K(2762, [OFFICE_X - 2.6, 1.5, 1.2], [OFFICE_X - 2.65, 1.3, -1.6], 36),
  ] },
  { id: 14, a: 2760, b: 2917, luz: "day", fog: [200, 1200], keys: [ // fíjate: diez dardos a un blanco que corre
    K(2760, [PLAIN.x - 4, 1.4, PLAIN.z + 5.5], [PLAIN.x, 1.1, PLAIN.z], 40, false), K(2917, [PLAIN.x + 11, 1.4, PLAIN.z + 5.5], [PLAIN.x + 14, 1.1, PLAIN.z], 40),
  ] },
  { id: 15, a: 2914, b: 3114, luz: "day", fog: [200, 1200], keys: [ // soldados que aguantan como emús
    K(2914, [PLAIN.x - 31.2, 1.6, PLAIN.z + 36.4], [PLAIN.x - 30.6, 1.5, PLAIN.z + 32.6], 38, false), K(2990, [PLAIN.x - 30.9, 1.6, PLAIN.z + 35.6], [PLAIN.x - 30.6, 1.5, PLAIN.z + 32.6], 38), K(3050, [PLAIN.x - 24, 1.8, PLAIN.z + 35], [PLAIN.x - 21, 1.3, PLAIN.z + 27], 40), K(3114, [PLAIN.x - 22, 1.8, PLAIN.z + 34.5], [PLAIN.x - 19, 1.3, PLAIN.z + 27], 40),
  ] },
  { id: 16, a: 3112, b: 3364, luz: "day", fog: [150, 900], keys: [ // la recompensa por cada emú
    K(3112, [FARM.x + 3.5, 1.7, FARM.z + 14.5], [FARM.x + 0.5, 1.3, FARM.z + 8.5], 38, false), K(3364, [FARM.x + 1.6, 1.6, FARM.z + 12.6], [FARM.x + 0.5, 1.3, FARM.z + 8.5], 36),
  ] },
  { id: 17, a: 3362, b: 3497, luz: "golden", fog: [200, 1400], keys: [ // el emú en el escudo
    K(3362, [ARMS.x + 0.6, 2.2, ARMS.z + 14], [ARMS.x + 0.6, 2.4, ARMS.z], 40, false), K(3497, [ARMS.x + 1.0, 2.0, ARMS.z + 10.5], [ARMS.x + 0.8, 2.3, ARMS.z], 38),
  ] },
  { id: 18, a: 3495, b: TOTAL, luz: "golden", fog: [200, 1400], keys: [ // suscríbete
    K(3495, [ARMS.x - 4, 1.6, ARMS.z + 10.5], [ARMS.x - 4, 1.4, ARMS.z + 4], 38, false), K(TOTAL, [ARMS.x - 4.2, 1.55, ARMS.z + 9.6], [ARMS.x - 4, 1.4, ARMS.z + 4], 38),
  ] },
];
export const XFADE = 6;

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const lerp3 = (a: V3, b: V3, t: number): V3 => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
const SHAKES = [{ f: 1459, amp: 0.04 }, { f: 1746, amp: 0.05 }, { f: 1752, amp: 0.04 }, { f: 1758, amp: 0.04 }];
export const camAt = (id: number, f: number) => {
  const k = SHOTS[id - 1].keys;
  let r: { pos: V3; look: V3; fov: number };
  if (f <= k[0].f) r = { pos: k[0].pos, look: k[0].look, fov: k[0].fov };
  else {
    const l = k[k.length - 1]; r = { pos: l.pos, look: l.look, fov: l.fov };
    for (let i = 1; i < k.length; i++) if (f <= k[i].f) {
      const u = (f - k[i - 1].f) / (k[i].f - k[i - 1].f), t = k[i].glide ? smoother(u) : u;
      r = { pos: lerp3(k[i - 1].pos, k[i].pos, t), look: lerp3(k[i - 1].look, k[i].look, t), fov: lerp(k[i - 1].fov, k[i].fov, t) }; break;
    }
  }
  for (const s of SHAKES) { const d = f - s.f; if (d >= 0 && d < 7) { const a = s.amp * (1 - d / 7) * (d % 2 ? -1 : 1); r = { ...r, look: [r.look[0] + a * 4, r.look[1] + a * 3, r.look[2]] }; } }
  if (id === 10) { const b = Math.sin(f * 0.9) * 0.05 + Math.sin(f * 2.3) * 0.03; r = { ...r, pos: [r.pos[0], r.pos[1] + b, r.pos[2]] }; }
  return r;
};
export const layersAt = (f: number): { id: number; alpha: number }[] => {
  for (let i = SHOTS.length - 1; i > 0; i--) {
    const a = SHOTS[i].a;
    if (f >= a + XFADE) return [{ id: i + 1, alpha: 1 }];
    if (f >= a) return [{ id: i, alpha: 1 }, { id: i + 1, alpha: (f - a + 1) / (XFADE + 1) }];
  }
  return [{ id: 1, alpha: 1 }];
};
export const worldF = (f: number) => f;

export const dofAt = (id: number, f: number): { cInf: number; focus?: V3 } => {
  switch (id) {
    case 1: return f < 110 ? { cInf: 4 } : { cInf: 12, focus: [56.5, 1.5, 49.5] };
    case 2: return { cInf: f < 300 ? 0 : 8 };
    case 3: return { cInf: 12 };
    case 4: return f < 690 ? { cInf: 2 } : { cInf: 12, focus: [48, 1.4, -28] };
    case 5: return { cInf: 10 };
    case 6: return { cInf: 9 };
    case 7: return { cInf: 10, focus: [0, 1.4, 40] };
    case 8: return { cInf: 4 };
    case 9: return f < 1780 ? { cInf: 6 } : { cInf: 12, focus: [DAM.x - 22.1, 1.1, DAM.z - 20.4] };
    case 10: return { cInf: 4 };
    case 11: return { cInf: 8 };
    case 12: return { cInf: 10, focus: [LOOKOUT.x, 3.2, LOOKOUT.z] };
    case 13: return { cInf: 12, focus: [OFFICE_X - 2.7, 1.3, -1.6] };
    case 14: return { cInf: 6 };
    case 15: return { cInf: 6 };
    case 16: return { cInf: 11 };
    case 17: return { cInf: 8, focus: [ARMS.x, 2.4, ARMS.z] };
    default: return { cInf: 9, focus: [ARMS.x - 4, 1.5, ARMS.z + 4] };
  }
};

/** cifras discretas arriba del cuadro */
export const MARKS = [
  { a: 48, b: 150, label: "1932", sub: "Australia Occidental", col: "#ffffff" },
  { a: 640, b: 700, label: "≈ 20.000", sub: "emús", col: "#ffd23f" },
  { a: 700, b: 796, label: "≈ 2 m · 50 km/h", sub: "", col: "#ffffff" },
  { a: 1205, b: 1296, label: "2 soldados · 2 Lewis", sub: "10.000 balas", col: "#ffffff" },
  { a: 1368, b: 1450, label: "2 de noviembre", sub: "", col: "#ffffff" },
  { a: 1654, b: 1740, label: "≈ 1.000", sub: "emús en la represa", col: "#ffd23f" },
  { a: 2590, b: 2700, label: "986 emús", sub: "9.860 balas", col: "#ffffff" },
  { a: 2712, b: 2756, label: "10 balas", sub: "por pájaro", col: "#ffd23f" },
  { a: 3320, b: 3360, label: "57.034", sub: "recompensas en 6 meses (1934)", col: "#ffd23f" },
];
