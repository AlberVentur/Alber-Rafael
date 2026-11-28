// Plan de tomas: «La guerra de 38 minutos» (Zanzíbar, 1896). 40,0 s a 30 fps, sincronizado con
// public/voz/palabras.json (Edge TTS, es-ES-AlvaroNeural +25 %). Gramática de cámara de la skill: la cámara nunca se
// queda quieta, deslizamientos smootherstep de 18-40 cuadros, fundido de 6 cuadros al cambiar de lugar.
//
// Palabras (cuadro): La 3 · guerra 9 · más 18 · corta 21 · historia 33 · duró 45 · treinta 51 · ocho 60 · minutos 66 ·
// Zanzíbar 102 · mil 126 · seis 156 · Muere 186 · sultán 198 · primo 213 · Jálid 219 · ocupa 228 · trono 237 ·
// permiso 249 · británico 261 · Ultimátum 300 · nueve 342 · guerra 363 · Jálid 396 · atrinchera 408 · palacio 423 ·
// tres 444 · defensores 453 · A 495 · nueve 504 · dos 513 · cinco 525 · barcos 534 · abren 555 · fuego 564 ·
// Minutos 597 · palacio 630 · arde 639 · Por 672 · suerte 678 · Jálid 693 · escapa 702 · consulado 714 · alemán 726 ·
// Por 762 · desgracia 768 · quinientos 792 · mueren 816 · heridos 834 · Los 867 · británicos 873 · Un 912 ·
// marinero 918 · herido 930 · Fíjate 963 · duró 981 · capítulo 999 · serie 1017 · Y 1050 · encima 1053 ·
// partidarios 1077 · cobraron 1098 · cañonazos 1110 · Suscríbete 1149 · video 1185 (termina 1195)
export const FPS = 30;
export const TOTAL = 1200;
export type V3 = [number, number, number];

export const clamp01 = (x: number) => Math.max(0, Math.min(1, x));
export const smooth = (x: number) => { const u = clamp01(x); return u * u * (3 - 2 * u); };
const smoother = (x: number) => { const u = clamp01(x); return u * u * u * (u * (6 * u - 15) + 10); };

export type Luz = "day" | "smoke" | "golden" | "room";
type Key = { f: number; pos: V3; look: V3; fov: number; glide?: boolean };
export type ShotDef = { id: number; a: number; b: number; keys: Key[]; fog: [number, number]; luz: Luz };

// lugares
export const SHIP_Z = 160, DECK = 4.2;
export const SHIPS = [
  { x: -95, len: 46, kind: "cruiser" as const }, { x: -45, len: 46, kind: "cruiser" as const }, { x: 5, len: 46, kind: "cruiser" as const },
  { x: 50, len: 28, kind: "gunboat" as const }, { x: 85, len: 28, kind: "gunboat" as const },
];
export const THRONE_X = 600, TV_X = 700, OFFICE_X = 800;
export const TOWER = { x: 25, z: 2, h: 30, clockY: 25 };

export const SHOTS: ShotDef[] = [
  { id: 1, a: 0, b: 100, luz: "day", fog: [150, 900], keys: [ // la torre del reloj: 38 minutos en 2 s
    { f: 0, pos: [25.6, 23.6, 21], look: [25, 25, 5.1], fov: 36 },
    { f: 44, pos: [25.3, 24.4, 15.5], look: [25, 25, 5.1], fov: 36 },
    { f: 84, pos: [25.15, 24.7, 13.2], look: [25, 25, 5.1], fov: 36 }, // la aguja corre 38 minutos
    { f: 100, pos: [29, 23.5, 19], look: [12, 19, -4], fov: 42, glide: true }, // al humo detrás del palacio
  ] },
  { id: 2, a: 94, b: 183, luz: "day", fog: [180, 1200], keys: [ // el puerto de Zanzíbar desde el mar
    { f: 94, pos: [-70, 40, 175], look: [-10, 6, 10], fov: 50 },
    { f: 183, pos: [-22, 20, 70], look: [0, 8, 0], fov: 48, glide: true },
  ] },
  { id: 3, a: 177, b: 300, luz: "room", fog: [200, 900], keys: [ // el trono vacío; Jálid llega y se sienta
    { f: 177, pos: [THRONE_X + 0.4, 1.75, 5.4], look: [THRONE_X, 1.3, -4.6], fov: 44 },
    { f: 222, pos: [THRONE_X + 1.6, 1.7, 3.0], look: [THRONE_X + 0.3, 1.3, -4.6], fov: 42, glide: true },
    { f: 262, pos: [THRONE_X + 0.9, 1.55, 0.6], look: [THRONE_X, 1.25, -4.6], fov: 40, glide: true },
    { f: 300, pos: [THRONE_X + 0.7, 1.5, -0.4], look: [THRONE_X, 1.25, -4.6], fov: 40 },
  ] },
  { id: 4, a: 294, b: 393, luz: "day", fog: [200, 1400], keys: [ // en la cubierta de popa: el ultimátum
    { f: 294, pos: [-58 + 0.9, DECK + 1.75, SHIP_Z - 3.1], look: [-58, DECK + 1.5, SHIP_Z + 1.6], fov: 40 },
    { f: 393, pos: [-58 + 0.4, DECK + 1.65, SHIP_Z - 1.2], look: [-58, DECK + 1.45, SHIP_Z + 1.6], fov: 38, glide: true },
  ] },
  { id: 5, a: 387, b: 495, luz: "day", fog: [150, 1100], keys: [ // los tres mil defensores
    { f: 387, pos: [2.5, 1.9, 33.5], look: [0, 1.7, 24], fov: 40 },
    { f: 430, pos: [-1.2, 2.0, 22.0], look: [1, 1.7, 13], fov: 44, glide: true },
    { f: 495, pos: [0, 30, 52], look: [0, 0, 8], fov: 50, glide: true },
  ] },
  { id: 6, a: 489, b: 594, luz: "smoke", fog: [200, 1400], keys: [ // cinco barcos abren fuego
    { f: 489, pos: [-135, 7, 118], look: [-80, 6, SHIP_Z], fov: 44 },
    { f: 594, pos: [35, 8, 112], look: [75, 6, SHIP_Z], fov: 46, glide: true },
  ] },
  { id: 7, a: 588, b: 672, luz: "smoke", fog: [120, 800], keys: [ // el palacio arde (cámara lenta)
    { f: 588, pos: [-12, 3.2, 44], look: [0, 9, 4], fov: 44 },
    { f: 672, pos: [-17, 4.0, 52], look: [0, 9, 4], fov: 46, glide: true },
  ] },
  { id: 8, a: 666, b: 759, luz: "smoke", fog: [120, 800], keys: [ // Jálid escapa al consulado alemán
    { f: 666, pos: [-96, 1.7, -31.5], look: [-95, 1.4, -37.6], fov: 44 },
    { f: 759, pos: [-67.6, 2.0, -31.0], look: [-66.8, 2.6, -38], fov: 46, glide: true },
  ] },
  { id: 9, a: 753, b: 864, luz: "smoke", fog: [100, 700], keys: [ // el patio después
    { f: 753, pos: [7, 8, 38], look: [0, 1, 18], fov: 44 },
    { f: 864, pos: [3.5, 4.2, 31], look: [-1, 0.8, 17], fov: 44, glide: true },
  ] },
  { id: 10, a: 858, b: 960, luz: "day", fog: [200, 1400], keys: [ // ¿los británicos? un marinero herido
    { f: 858, pos: [-6 + 0.6, DECK + 1.7, SHIP_Z - 3.2], look: [-6, DECK + 1.55, SHIP_Z + 1.6], fov: 42 },
    { f: 905, pos: [-6 + 0.2, DECK + 1.62, SHIP_Z - 0.6], look: [-6, DECK + 1.5, SHIP_Z + 1.6], fov: 40, glide: true },
    { f: 960, pos: [-6 + 0.15, DECK + 1.6, SHIP_Z - 0.35], look: [-6, DECK + 1.5, SHIP_Z + 1.6], fov: 40 },
  ] },
  { id: 11, a: 954, b: 1047, luz: "room", fog: [200, 900], keys: [ // fíjate: un capítulo de tu serie
    { f: 954, pos: [TV_X - 2.2, 1.5, 3.6], look: [TV_X - 1.2, 1.0, -2.6], fov: 44 },
    { f: 1047, pos: [TV_X - 1.0, 1.45, 3.0], look: [TV_X + 2.6, 1.2, -1.3], fov: 42, glide: true },
  ] },
  { id: 12, a: 1041, b: 1146, luz: "room", fog: [200, 900], keys: [ // la factura de los cañonazos
    { f: 1041, pos: [OFFICE_X + 0.6, 1.7, 5.2], look: [OFFICE_X, 1.2, -1.5], fov: 44 },
    { f: 1146, pos: [OFFICE_X + 0.2, 1.55, 2.9], look: [OFFICE_X, 1.2, -1.5], fov: 42, glide: true },
  ] },
  { id: 13, a: 1140, b: TOTAL, luz: "golden", fog: [200, 1400], keys: [ // suscríbete
    { f: 1140, pos: [-2.0, 1.6, 35.2], look: [-2.4, 1.5, 29], fov: 42 },
    { f: TOTAL, pos: [-2.2, 1.6, 34.2], look: [-2.4, 1.5, 29], fov: 42 },
  ] },
];
export const XFADE = 6;

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const lerp3 = (a: V3, b: V3, t: number): V3 => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
/** sacudida de impacto: cambia de signo cada cuadro y se apaga en 7 cuadros */
const SHAKES = [{ f: 564, amp: 0.09 }, { f: 576, amp: 0.05 }, { f: 630, amp: 0.05 }];
export const camAt = (id: number, f: number) => {
  const k = SHOTS[id - 1].keys;
  let r: { pos: V3; look: V3; fov: number };
  if (f <= k[0].f) r = { pos: k[0].pos, look: k[0].look, fov: k[0].fov };
  else {
    const l = k[k.length - 1];
    r = { pos: l.pos, look: l.look, fov: l.fov };
    for (let i = 1; i < k.length; i++) if (f <= k[i].f) {
      const u = (f - k[i - 1].f) / (k[i].f - k[i - 1].f), t = k[i].glide ? smoother(u) : u;
      r = { pos: lerp3(k[i - 1].pos, k[i].pos, t), look: lerp3(k[i - 1].look, k[i].look, t), fov: lerp(k[i - 1].fov, k[i].fov, t) };
      break;
    }
  }
  for (const s of SHAKES) {
    const d = f - s.f;
    if (d >= 0 && d < 7) { const a = s.amp * (1 - d / 7) * (d % 2 ? -1 : 1); r = { ...r, look: [r.look[0] + a * 4, r.look[1] + a * 3, r.look[2]] }; }
  }
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

/** reloj del mundo: cámara lenta al 40 % mientras arde el palacio (toma 7) */
const SLOW = { in0: 600, in1: 610, out0: 655, out1: 668, rate: 0.4 };
const rateAt = (f: number) => 1 - (1 - SLOW.rate) * (smooth((f - SLOW.in0) / (SLOW.in1 - SLOW.in0)) - smooth((f - SLOW.out0) / (SLOW.out1 - SLOW.out0)));
const WF = (() => { const a = [0]; for (let f = 1; f <= TOTAL + 2; f++) a.push(a[f - 1] + rateAt(f - 0.5)); return a; })();
export const worldF = (f: number) => { const i = Math.max(0, Math.min(TOTAL + 1, Math.floor(f))); return WF[i] + (WF[i + 1] - WF[i]) * (f - i); };

/** desenfoque: cInf = px a 1080p en el infinito; foco = punto (por defecto, adonde mira la cámara) */
export const dofAt = (id: number, f: number): { cInf: number; focus?: V3 } => {
  switch (id) {
    case 1: return { cInf: f < 84 ? 10 : lerp(10, 2, smooth((f - 84) / 16)) };
    case 2: return { cInf: 0 };
    case 3: return { cInf: 12, focus: f < 228 ? [THRONE_X, 1.4, -4.4] : [THRONE_X, 1.45, -4.3] };
    case 4: return { cInf: 14, focus: [-58, DECK + 1.7, SHIP_Z + 1.6] };
    case 5: return f < 440 ? { cInf: 12 } : { cInf: lerp(10, 0, smooth((f - 445) / 35)) };
    case 6: return { cInf: 3 };
    case 7: return { cInf: 5 };
    case 8: return { cInf: 10 };
    case 9: return { cInf: 6 };
    case 10: return { cInf: 15, focus: [-6, DECK + 1.7, SHIP_Z + 1.6] };
    case 11: return { cInf: 10 };
    case 12: return { cInf: 11, focus: [OFFICE_X, 1.4, -1.0] };
    default: return { cInf: 12, focus: [-2.4, 1.7, 29] };
  }
};

/** aguja del reloj (toma 1): de las 9:02 a las 9:40 mientras dice «treinta y ocho minutos» */
export const clockMinutes = (f: number) => 2 + 38 * smooth((f - 46) / 34);

/** cifras discretas arriba del cuadro */
export const MARKS = [
  { a: 58, b: 96, label: "38 MIN", sub: "27 de agosto de 1896", col: "#ffffff" },
  { a: 440, b: 486, label: "≈ 3.000", sub: "defensores", col: "#ffffff" },
  { a: 790, b: 852, label: "≈ 500", sub: "muertos o heridos", col: "#ffd23f" },
  { a: 912, b: 952, label: "1", sub: "marinero herido", col: "#ffffff" },
];
