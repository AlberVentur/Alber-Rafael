// Motor de escenas en alta calidad para "La estación de las 1.000 ventanas".
// Todo es función pura del tiempo t, así cada cuadro se puede renderizar por separado.
'use strict';

const W = 1080, H = 1920;
const cv = document.getElementById('c');
const ctx = cv.getContext('2d');
let D = null;

// ------------------------------------------------------------------ utilidades
const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
const ease = t => { t = clamp(t); return t * t * (3 - 2 * t); };
const easeOut = t => { t = clamp(t); return 1 - Math.pow(1 - t, 3); };
const easeInOut = t => { t = clamp(t); return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };
const backOut = t => { t = clamp(t); const c = 1.7; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); };
const lerp = (a, b, t) => a + (b - a) * t;
const TAU = Math.PI * 2;
function rng(seed) {
  return function () {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function mk(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
const rgb = (c, a = 1) => `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${a})`;
const mix = (a, b, t) => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];

const glowCache = {};
function glowSprite(color) {
  if (glowCache[color]) return glowCache[color];
  const c = mk(256, 256), g = c.getContext('2d');
  const gr = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  gr.addColorStop(0, color); gr.addColorStop(0.25, color.replace(/[\d.]+\)$/, '0.45)'));
  gr.addColorStop(1, color.replace(/[\d.]+\)$/, '0)'));
  g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
  glowCache[color] = c; return c;
}
function glow(g, x, y, r, color, a = 1, sy = 1) {
  if (a <= 0 || r <= 0) return;
  g.save(); g.globalCompositeOperation = 'lighter'; g.globalAlpha = clamp(a);
  g.drawImage(glowSprite(color), x - r, y - r * sy, 2 * r, 2 * r * sy);
  g.restore();
}

// ------------------------------------------------------------------ recursos
const A = {};

function buildAssets() {
  const r = rng(42);
  // Nebulosa de fondo
  const neb = mk(W, H + 600), n = neb.getContext('2d');
  const bg = n.createLinearGradient(0, 0, 0, neb.height);
  bg.addColorStop(0, '#02040d'); bg.addColorStop(0.5, '#06102a'); bg.addColorStop(1, '#030816');
  n.fillStyle = bg; n.fillRect(0, 0, W, neb.height);
  n.filter = 'blur(70px)';
  const nubes = [['80,40,160', .35], ['30,80,200', .30], ['20,140,170', .18], ['150,40,120', .22]];
  for (let i = 0; i < 16; i++) {
    const [c, a] = nubes[i % nubes.length];
    const x = r() * W, y = r() * neb.height, rr = 200 + r() * 380;
    const gr = n.createRadialGradient(x, y, 0, x, y, rr);
    gr.addColorStop(0, `rgba(${c},${a})`); gr.addColorStop(1, `rgba(${c},0)`);
    n.fillStyle = gr; n.beginPath(); n.ellipse(x, y, rr * 1.4, rr, r() * 3, 0, TAU); n.fill();
  }
  n.filter = 'none';
  A.neb = neb;
  // Estrellas en 3 capas (paralaje)
  A.stars = [];
  for (let i = 0; i < 520; i++) {
    const capa = i < 330 ? 0 : i < 470 ? 1 : 2;
    A.stars.push({ x: r() * W, y: r() * H, r: [0.9, 1.5, 2.3][capa] * (0.6 + r() * 0.6), capa,
      b: 0.4 + r() * 0.6, tw: r() * TAU, col: r() < .15 ? [255, 210, 170] : r() < .3 ? [170, 200, 255] : [235, 240, 255] });
  }
  // Textura del planeta
  const tw = 2048, th = 1024;
  const pt = mk(tw, th), p = pt.getContext('2d');
  const oc = p.createLinearGradient(0, 0, 0, th);
  oc.addColorStop(0, '#0b3a7e'); oc.addColorStop(.5, '#1667c4'); oc.addColorStop(1, '#0b3a7e');
  p.fillStyle = oc; p.fillRect(0, 0, tw, th);
  // continentes: muchas manchas pequeñas que siguen un camino aleatorio (bordes más naturales)
  for (let i = 0; i < 16; i++) {
    let x = r() * tw, y = 180 + r() * (th - 360);
    const pasos = 260 + r() * 420, desierto = r() < 0.35;
    for (let k = 0; k < pasos; k++) {
      x += (r() - .5) * 26; y += (r() - .5) * 16;
      const rr = 6 + r() * 22, interior = k > pasos * 0.3 && k < pasos * 0.7;
      const v = r() * 18;
      p.fillStyle = desierto && interior ? `rgb(${128 + v},${112 + v},${78 + v})` : `rgb(${46 + v},${86 + v},${50 + v * .5})`;
      for (const dx of [0, tw, -tw]) { p.beginPath(); p.arc(x + dx, y, rr, 0, TAU); p.fill(); }
    }
  }
  // variación del océano y relieve fino
  for (let i = 0; i < 9000; i++) {
    p.fillStyle = `rgba(${r() < .5 ? '255,255,255' : '0,0,0'},${r() * 0.05})`;
    p.fillRect(r() * tw, r() * th, 2 + r() * 6, 1 + r() * 3);
  }
  // costas suaves y hielo polar
  p.filter = 'blur(1.5px)'; p.drawImage(pt, 0, 0); p.filter = 'none';
  p.fillStyle = 'rgba(240,248,255,0.9)'; p.fillRect(0, 0, tw, 60); p.fillRect(0, th - 60, tw, 60);
  A.planetTex = pt;
  const cl = mk(tw, th), c2 = cl.getContext('2d');
  for (let i = 0; i < 700; i++) {
    const x = r() * tw, y = r() * th, rw = 20 + r() * 140, rh = 4 + r() * 16;
    c2.fillStyle = `rgba(255,255,255,${0.15 + r() * 0.45})`;
    for (const dx of [0, tw, -tw]) { c2.beginPath(); c2.ellipse(x + dx, y, rw, rh, (r() - .5) * .3, 0, TAU); c2.fill(); }
  }
  const cl2 = mk(tw, th), c3 = cl2.getContext('2d');
  c3.filter = 'blur(4px)'; c3.drawImage(cl, 0, 0); c3.filter = 'none';
  A.cloudTex = cl2;
  // Textura del casco (placas metálicas)
  const hull = mk(W + 400, H + 1600), h = hull.getContext('2d');
  const hb = h.createLinearGradient(0, 0, hull.width, hull.height);
  hb.addColorStop(0, '#4a5468'); hb.addColorStop(1, '#262d3c');
  h.fillStyle = hb; h.fillRect(0, 0, hull.width, hull.height);
  const pw = 250, ph = 250;
  for (let y = 0; y < hull.height; y += ph) {
    for (let x = -pw / 2 * ((y / ph) % 2); x < hull.width; x += pw) {
      const v = (r() - .5) * 18;
      h.fillStyle = `rgba(${120 + v},${130 + v},${150 + v},0.10)`; h.fillRect(x + 3, y + 3, pw - 6, ph - 6);
      h.strokeStyle = 'rgba(10,14,22,0.75)'; h.lineWidth = 4; h.strokeRect(x, y, pw, ph);
      h.strokeStyle = 'rgba(200,210,230,0.10)'; h.lineWidth = 2; h.strokeRect(x + 4, y + 4, pw - 8, ph - 8);
      h.fillStyle = 'rgba(15,18,26,0.7)';
      for (let k = 0; k < 5; k++) {
        for (const [bx, by] of [[x + 14 + k * (pw - 28) / 4, y + 14], [x + 14 + k * (pw - 28) / 4, y + ph - 14]]) {
          h.beginPath(); h.arc(bx, by, 4, 0, TAU); h.fill();
          h.fillStyle = 'rgba(220,230,245,0.25)'; h.beginPath(); h.arc(bx - 1, by - 1, 2, 0, TAU); h.fill();
          h.fillStyle = 'rgba(15,18,26,0.7)';
        }
      }
      if (r() < .08) { // franjas de advertencia
        h.save(); h.beginPath(); h.rect(x + 20, y + ph - 46, pw - 40, 18); h.clip();
        for (let s = -40; s < pw; s += 22) { h.fillStyle = 'rgba(230,170,40,0.55)'; h.beginPath(); h.moveTo(x + s, y + ph - 28); h.lineTo(x + s + 11, y + ph - 28); h.lineTo(x + s + 29, y + ph - 46); h.lineTo(x + s + 18, y + ph - 46); h.fill(); }
        h.restore();
      }
      if (r() < .1) { h.font = '700 18px M'; h.fillStyle = 'rgba(220,230,245,0.35)'; h.fillText('SECTOR ' + String(Math.floor(r() * 900 + 100)), x + 24, y + 40); }
    }
  }
  // rayones y suciedad
  for (let i = 0; i < 500; i++) {
    h.strokeStyle = `rgba(255,255,255,${r() * 0.04})`; h.lineWidth = 1;
    const x = r() * hull.width, y = r() * hull.height;
    h.beginPath(); h.moveTo(x, y); h.lineTo(x + (r() - .5) * 60, y + (r() - .5) * 20); h.stroke();
  }
  A.hull = hull;
  // Grano de película
  A.grain = [];
  for (let k = 0; k < 4; k++) {
    const gcv = mk(540, 960), gg = gcv.getContext('2d'), id = gg.createImageData(540, 960);
    for (let i = 0; i < id.data.length; i += 4) { const v = 128 + (r() - .5) * 255; id.data[i] = id.data[i + 1] = id.data[i + 2] = v; id.data[i + 3] = 255; }
    gg.putImageData(id, 0, 0); A.grain.push(gcv);
  }
  A.bloom = mk(270, 480);
  A.buf = mk(W, H);
  // Ventanas: orden en que se encienden
  const ord = [...Array(D.capacidad).keys()];
  const rr2 = rng(7);
  for (let i = ord.length - 1; i > 0; i--) { const j = Math.floor(rr2() * (i + 1)); [ord[i], ord[j]] = [ord[j], ord[i]]; }
  A.rank = new Array(D.capacidad);
  ord.forEach((v, i) => { A.rank[v] = i; });
}

// ------------------------------------------------------------------ fondo espacial
function drawSpace(g, t, vy = 8, streak = 0, offY = 0) {
  const ny = -((t * vy * 0.15 + offY * 0.2) % 600 + 600) % 600;
  g.drawImage(A.neb, 0, ny);
  for (const s of A.stars) {
    const f = [0.35, 0.7, 1.2][s.capa];
    const y = ((s.y + t * vy * f + offY * f) % H + H) % H;
    const tw = 0.65 + 0.35 * Math.sin(t * (1.5 + s.capa) + s.tw);
    const a = s.b * tw;
    if (streak > 0) {
      const L = streak * f;
      const gr = g.createLinearGradient(s.x, y - L, s.x, y);
      gr.addColorStop(0, rgb(s.col, 0)); gr.addColorStop(1, rgb(s.col, a));
      g.strokeStyle = gr; g.lineWidth = s.r * 1.4; g.beginPath(); g.moveTo(s.x, y - L); g.lineTo(s.x, y); g.stroke();
    } else {
      g.fillStyle = rgb(s.col, a); g.beginPath(); g.arc(s.x, y, s.r, 0, TAU); g.fill();
      if (s.capa === 2) {
        glow(g, s.x, y, s.r * 9, 'rgba(180,210,255,1)', a * 0.35);
        g.strokeStyle = rgb(s.col, a * 0.5); g.lineWidth = 1;
        g.beginPath(); g.moveTo(s.x - s.r * 6, y); g.lineTo(s.x + s.r * 6, y); g.moveTo(s.x, y - s.r * 6); g.lineTo(s.x, y + s.r * 6); g.stroke();
      }
    }
  }
}

function drawSun(g, x, y, a = 1) {
  glow(g, x, y, 900, 'rgba(255,200,140,1)', 0.35 * a);
  glow(g, x, y, 300, 'rgba(255,240,210,1)', 0.9 * a);
  glow(g, x, y, 90, 'rgba(255,255,255,1)', 1 * a);
  // destellos de lente hacia el centro de la pantalla
  const dx = W / 2 - x, dy = H / 2 - y;
  const fl = [[0.35, 40, 'rgba(120,200,255,1)', .18], [0.55, 18, 'rgba(255,190,120,1)', .3], [0.8, 70, 'rgba(140,120,255,1)', .12], [1.25, 30, 'rgba(120,255,200,1)', .15]];
  for (const [k, rr, c, al] of fl) glow(g, x + dx * k, y + dy * k, rr, c, al * a);
}

// ------------------------------------------------------------------ planeta
function drawPlanet(g, x, y, R, t) {
  // atmósfera exterior
  g.save(); g.globalCompositeOperation = 'lighter';
  const at = g.createRadialGradient(x, y, R * 0.97, x, y, R * 1.12);
  at.addColorStop(0, 'rgba(110,180,255,0.75)'); at.addColorStop(0.35, 'rgba(70,140,255,0.25)'); at.addColorStop(1, 'rgba(40,100,255,0)');
  g.fillStyle = at; g.beginPath(); g.arc(x, y, R * 1.12, 0, TAU); g.fill();
  g.restore();
  g.save(); g.beginPath(); g.arc(x, y, R, 0, TAU); g.clip();
  const sc = (2 * R) / A.planetTex.height, w = A.planetTex.width * sc;
  const u = ((t * 9) % w + w) % w, u2 = ((t * 16) % w + w) % w;
  for (const k of [0, 1]) g.drawImage(A.planetTex, x - R - u + k * w, y - R, w, 2 * R);
  for (const k of [0, 1]) g.drawImage(A.cloudTex, x - R - u2 + k * w, y - R, w, 2 * R);
  // esfericidad: luz desde arriba a la izquierda
  const sh = g.createRadialGradient(x - R * 0.45, y - R * 0.55, R * 0.1, x, y, R * 1.02);
  sh.addColorStop(0, 'rgba(255,255,255,0.18)'); sh.addColorStop(0.55, 'rgba(0,0,0,0)');
  sh.addColorStop(0.85, 'rgba(0,4,20,0.55)'); sh.addColorStop(1, 'rgba(0,2,12,0.9)');
  g.fillStyle = sh; g.fillRect(x - R, y - R, 2 * R, 2 * R);
  const term = g.createLinearGradient(x - R, y - R, x + R * 0.9, y + R * 0.6);
  term.addColorStop(0, 'rgba(0,0,0,0)'); term.addColorStop(0.55, 'rgba(0,0,0,0)'); term.addColorStop(0.8, 'rgba(0,3,15,0.75)'); term.addColorStop(1, 'rgba(0,2,10,0.95)');
  g.fillStyle = term; g.fillRect(x - R, y - R, 2 * R, 2 * R);
  // borde iluminado
  g.globalCompositeOperation = 'lighter';
  const rim = g.createRadialGradient(x, y, R * 0.9, x, y, R);
  rim.addColorStop(0, 'rgba(120,190,255,0)'); rim.addColorStop(1, 'rgba(140,200,255,0.45)');
  g.fillStyle = rim; g.fillRect(x - R, y - R, 2 * R, 2 * R);
  g.restore();
}

// ------------------------------------------------------------------ la estación
// cx,cy centro; S escala; phi giro; k inclinación (aplastamiento vertical); lit ventanas encendidas
function drawStation(g, cx, cy, S, phi, k, lit, t, engine = 0) {
  const Rr = 430 * S, wid = 62 * S, hgt = 100 * S, Ld = -2.2;
  const N = 160, rows = 4, cap = D.capacidad, perRow = Math.ceil(cap / rows);
  const P = (a, r, dy) => [cx + r * Math.cos(a), cy + r * k * Math.sin(a) + dy];
  const metal = [168, 178, 200], metalTop = [208, 215, 232];
  const segs = [];
  for (let i = 0; i < N; i++) {
    const a0 = phi + i / N * TAU, a1 = phi + (i + 1) / N * TAU, am = (a0 + a1) / 2;
    segs.push({ a0, a1, am, s: Math.sin(am), i });
  }
  const far = segs.filter(s => s.s < 0).sort((a, b) => a.s - b.s);
  const near = segs.filter(s => s.s >= 0).sort((a, b) => a.s - b.s);
  const quad = (p) => { g.beginPath(); g.moveTo(...p[0]); for (let j = 1; j < p.length; j++) g.lineTo(...p[j]); g.closePath(); g.fill(); };
  const light = a => 0.5 + 0.5 * Math.max(0, Math.cos(a - Ld));

  // ventanas (en la pared visible de cada mitad)
  const ventanas = (mitadCerca) => {
    for (let i = 0; i < cap; i++) {
      const row = i % rows, col = Math.floor(i / rows);
      const a = phi + (col + (row % 2) * 0.5) / perRow * TAU;
      const s = Math.sin(a);
      if ((s >= 0) !== mitadCerca) continue;
      const r = mitadCerca ? Rr : Rr - wid;
      const face = Math.abs(s);
      if (face < 0.08) continue;
      const dy = hgt * (0.18 + row * 0.2);
      const [x, y] = P(a, r, dy);
      const ww = 5.2 * S * face, hh = 11 * S;
      const on = A.rank[i] < lit;
      if (on) {
        g.fillStyle = '#ffd98a'; g.fillRect(x - ww / 2, y - hh / 2, ww, hh);
      } else {
        g.fillStyle = mitadCerca ? 'rgba(14,20,38,0.95)' : 'rgba(10,14,28,0.95)'; g.fillRect(x - ww / 2, y - hh / 2, ww, hh);
      }
    }
    // brillo de las encendidas en una sola pasada aditiva
    g.save(); g.globalCompositeOperation = 'lighter';
    const spr = glowSprite('rgba(255,170,70,1)');
    for (let i = 0; i < cap; i++) {
      if (A.rank[i] >= lit) continue;
      const row = i % rows, col = Math.floor(i / rows);
      const a = phi + (col + (row % 2) * 0.5) / perRow * TAU;
      const s = Math.sin(a);
      if ((s >= 0) !== mitadCerca || Math.abs(s) < 0.08) continue;
      const [x, y] = P(a, mitadCerca ? Rr : Rr - wid, hgt * (0.18 + row * 0.2));
      const rr = 15 * S;
      g.globalAlpha = 0.55; g.drawImage(spr, x - rr, y - rr, 2 * rr, 2 * rr);
    }
    g.restore();
  };

  // 1) mitad lejana: pared interior + cara superior
  for (const sg of far) {
    const f = 0.35 + 0.45 * light(sg.am + Math.PI);
    g.fillStyle = rgb(metal.map(v => v * f));
    quad([P(sg.a0, Rr - wid, 0), P(sg.a1, Rr - wid, 0), P(sg.a1, Rr - wid, hgt), P(sg.a0, Rr - wid, hgt)]);
    const ft = 0.55 + 0.45 * light(sg.am);
    g.fillStyle = rgb(metalTop.map(v => v * ft));
    quad([P(sg.a0, Rr - wid, 0), P(sg.a1, Rr - wid, 0), P(sg.a1, Rr, 0), P(sg.a0, Rr, 0)]);
    if (sg.i % 8 === 0) { g.fillStyle = 'rgba(30,36,52,0.6)'; quad([P(sg.a0, Rr - wid, 0), P(sg.a0 + 0.004, Rr - wid, 0), P(sg.a0 + 0.004, Rr, 0), P(sg.a0, Rr, 0)]); }
  }
  ventanas(false);

  // 2) módulo de motores (debajo del núcleo)
  const mastTop = cy + hgt * 0.5, mastLen = 300 * S;
  const mg = g.createLinearGradient(cx - 40 * S, 0, cx + 40 * S, 0);
  mg.addColorStop(0, '#5b6478'); mg.addColorStop(0.35, '#c9d2e4'); mg.addColorStop(1, '#3a4152');
  g.fillStyle = mg; g.fillRect(cx - 34 * S, mastTop, 68 * S, mastLen);
  const bx = cx, by = mastTop + mastLen;
  const mg2 = g.createLinearGradient(cx - 110 * S, 0, cx + 110 * S, 0);
  mg2.addColorStop(0, '#4b5366'); mg2.addColorStop(0.35, '#d5dcea'); mg2.addColorStop(1, '#30364a');
  g.fillStyle = mg2; g.beginPath(); g.roundRect(cx - 110 * S, by - 90 * S, 220 * S, 90 * S, 16 * S); g.fill();
  g.fillStyle = 'rgba(255,170,40,0.9)'; g.fillRect(cx - 110 * S, by - 56 * S, 220 * S, 7 * S);
  for (const dx of [-70, 0, 70]) {
    const ex = bx + dx * S;
    const eg = g.createLinearGradient(ex - 34 * S, 0, ex + 34 * S, 0);
    eg.addColorStop(0, '#2b303d'); eg.addColorStop(0.4, '#8f98ac'); eg.addColorStop(1, '#1f232e');
    g.fillStyle = eg; g.beginPath(); g.moveTo(ex - 18 * S, by); g.lineTo(ex + 18 * S, by); g.lineTo(ex + 34 * S, by + 62 * S); g.lineTo(ex - 34 * S, by + 62 * S); g.closePath(); g.fill();
    if (engine > 0) {
      const fl = 0.85 + 0.15 * Math.sin(t * 40 + dx);
      const L = 520 * S * engine * fl;
      glow(g, ex, by + 62 * S + L * 0.45, 60 * S * (0.6 + engine), 'rgba(80,160,255,1)', 0.9, L / (60 * S * (0.6 + engine)) * 0.5);
      glow(g, ex, by + 62 * S + L * 0.25, 30 * S * (0.6 + engine), 'rgba(200,235,255,1)', 1, L / (30 * S * (0.6 + engine)) * 0.3);
      glow(g, ex, by + 66 * S, 70 * S * engine, 'rgba(255,255,255,1)', 0.9);
    }
  }
  if (engine > 0) glow(g, bx, by + 120 * S, 380 * S * engine, 'rgba(70,140,255,1)', 0.45 * engine);

  // 3) brazos y núcleo
  for (let j = 0; j < 6; j++) {
    const a = phi + j / 6 * TAU + 0.26;
    const [x1, y1] = P(a, 120 * S, hgt * 0.5), [x2, y2] = P(a, Rr - wid, hgt * 0.5);
    const f = 0.5 + 0.5 * light(a);
    g.strokeStyle = rgb([70, 78, 98]); g.lineWidth = 30 * S; g.lineCap = 'round';
    g.beginPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.stroke();
    g.strokeStyle = rgb(metal.map(v => v * f)); g.lineWidth = 22 * S;
    g.beginPath(); g.moveTo(x1, y1 - 3 * S); g.lineTo(x2, y2 - 3 * S); g.stroke();
    g.strokeStyle = 'rgba(255,255,255,0.35)'; g.lineWidth = 4 * S;
    g.beginPath(); g.moveTo(x1, y1 - 10 * S); g.lineTo(x2, y2 - 10 * S); g.stroke();
  }
  const hr = 150 * S, hh = 120 * S;
  const sg2 = g.createLinearGradient(cx - hr, 0, cx + hr, 0);
  sg2.addColorStop(0, '#59627a'); sg2.addColorStop(0.3, '#dfe5f2'); sg2.addColorStop(0.7, '#8d97ad'); sg2.addColorStop(1, '#3b4256');
  g.fillStyle = sg2;
  g.beginPath(); g.ellipse(cx, cy - hh * 0.3 + hh, hr, hr * k, 0, 0, Math.PI); g.lineTo(cx - hr, cy - hh * 0.3); g.ellipse(cx, cy - hh * 0.3, hr, hr * k, 0, Math.PI, 0, true); g.closePath(); g.fill();
  // luces del núcleo
  for (let j = 0; j < 12; j++) {
    const a = phi * 2 + j / 12 * TAU;
    if (Math.sin(a) < 0) continue;
    const [x, y] = [cx + hr * Math.cos(a), cy - hh * 0.3 + hr * k * Math.sin(a) + hh * 0.55];
    g.fillStyle = '#9fd4ff'; g.fillRect(x - 3 * S, y - 6 * S, 6 * S, 12 * S);
    glow(g, x, y, 22 * S, 'rgba(120,190,255,1)', 0.7);
  }
  const tg = g.createRadialGradient(cx - hr * 0.4, cy - hh * 0.3 - hr * k * 0.5, 5, cx, cy - hh * 0.3, hr);
  tg.addColorStop(0, '#f4f7fc'); tg.addColorStop(1, '#8a94aa');
  g.fillStyle = tg; g.beginPath(); g.ellipse(cx, cy - hh * 0.3, hr, hr * k, 0, 0, TAU); g.fill();
  const dg = g.createRadialGradient(cx - 25 * S, cy - hh * 0.3 - 20 * S * k, 2, cx, cy - hh * 0.3, 70 * S);
  dg.addColorStop(0, '#bfe6ff'); dg.addColorStop(0.4, '#2f7fd6'); dg.addColorStop(1, '#0d2a55');
  g.fillStyle = dg; g.beginPath(); g.ellipse(cx, cy - hh * 0.3, 70 * S, 70 * S * k, 0, 0, TAU); g.fill();
  glow(g, cx, cy - hh * 0.3, 90 * S, 'rgba(90,170,255,1)', 0.35);

  // 4) mitad cercana: cara superior + pared exterior
  for (const sg of near) {
    const ft = 0.55 + 0.45 * light(sg.am);
    g.fillStyle = rgb(metalTop.map(v => v * ft));
    quad([P(sg.a0, Rr - wid, 0), P(sg.a1, Rr - wid, 0), P(sg.a1, Rr, 0), P(sg.a0, Rr, 0)]);
    const f = 0.3 + 0.6 * light(sg.am);
    g.fillStyle = rgb(metal.map(v => v * f));
    quad([P(sg.a0, Rr, 0), P(sg.a1, Rr, 0), P(sg.a1, Rr, hgt), P(sg.a0, Rr, hgt)]);
    // franja naranja inferior
    g.fillStyle = rgb([255, 150, 40].map(v => v * (0.5 + 0.5 * f)));
    quad([P(sg.a0, Rr, hgt * 0.88), P(sg.a1, Rr, hgt * 0.88), P(sg.a1, Rr, hgt * 0.94), P(sg.a0, Rr, hgt * 0.94)]);
    if (sg.i % 8 === 0) { g.fillStyle = 'rgba(25,30,45,0.55)'; quad([P(sg.a0, Rr, 0), P(sg.a0 + 0.005, Rr, 0), P(sg.a0 + 0.005, Rr, hgt), P(sg.a0, Rr, hgt)]); }
  }
  // brillo del borde superior
  g.strokeStyle = 'rgba(255,255,255,0.55)'; g.lineWidth = 2.5 * S; g.beginPath();
  for (let i = 0; i <= 80; i++) { const a = i / 80 * Math.PI; const [x, y] = P(a, Rr, 0); i ? g.lineTo(x, y) : g.moveTo(x, y); }
  g.stroke();
  ventanas(true);
  // luces de navegación
  for (const [a0, c] of [[0.3, 'rgba(255,60,60,1)'], [2.8, 'rgba(60,255,120,1)']]) {
    const on = Math.sin(t * 4 + a0 * 3) > 0.6;
    const [x, y] = P(a0, Rr + 4 * S, hgt * 0.5);
    if (on) glow(g, x, y, 40 * S, c, 1);
  }

  // 5) mástil superior con paneles solares (más cerca de la cámara)
  const top = cy - hh * 0.3, mh = 260 * S;
  g.fillStyle = mg; g.fillRect(cx - 14 * S, top - mh, 28 * S, mh);
  for (const sd of [-1, 1]) {
    const x0 = cx + sd * 24 * S, y0 = top - mh * 0.78;
    const pg = g.createLinearGradient(x0, y0, x0 + sd * 320 * S, y0 + 60 * S);
    pg.addColorStop(0, '#16336b'); pg.addColorStop(0.5, '#2f5fb3'); pg.addColorStop(1, '#0f2450');
    g.fillStyle = pg;
    const pts = [[x0, y0], [x0 + sd * 330 * S, y0 - 30 * S], [x0 + sd * 330 * S, y0 + 60 * S], [x0, y0 + 80 * S]];
    quad(pts);
    g.strokeStyle = 'rgba(160,200,255,0.35)'; g.lineWidth = 1.5 * S;
    for (let q = 1; q < 8; q++) { const u = q / 8; g.beginPath(); g.moveTo(lerp(pts[0][0], pts[1][0], u), lerp(pts[0][1], pts[1][1], u)); g.lineTo(lerp(pts[3][0], pts[2][0], u), lerp(pts[3][1], pts[2][1], u)); g.stroke(); }
    g.beginPath(); g.moveTo((pts[0][0] + pts[3][0]) / 2, (pts[0][1] + pts[3][1]) / 2); g.lineTo((pts[1][0] + pts[2][0]) / 2, (pts[1][1] + pts[2][1]) / 2); g.stroke();
    g.strokeStyle = 'rgba(200,215,235,0.8)'; g.lineWidth = 2.5 * S; g.beginPath(); g.moveTo(...pts[0]); for (const p of pts.slice(1)) g.lineTo(...p); g.closePath(); g.stroke();
  }
  if (Math.sin(t * 3) > 0.7) glow(g, cx, top - mh, 50 * S, 'rgba(255,50,50,1)', 1);
}

// ------------------------------------------------------------------ ojo de buey (ventana redonda)
function drawPorthole(g, x, y, r, litAmt, seed = 0, person = true) {
  // sombra hundida
  const sh = g.createRadialGradient(x + r * 0.15, y + r * 0.2, r * 1.2, x + r * 0.15, y + r * 0.2, r * 1.6);
  sh.addColorStop(0, 'rgba(0,0,0,0.55)'); sh.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = sh; g.beginPath(); g.arc(x + r * 0.15, y + r * 0.2, r * 1.6, 0, TAU); g.fill();
  // aro metálico con bisel
  const rim = g.createLinearGradient(x - r, y - r, x + r, y + r);
  rim.addColorStop(0, '#e3e8f2'); rim.addColorStop(0.5, '#8a93a8'); rim.addColorStop(1, '#3a4152');
  g.fillStyle = rim; g.beginPath(); g.arc(x, y, r * 1.32, 0, TAU); g.fill();
  const rim2 = g.createLinearGradient(x - r, y - r, x + r, y + r);
  rim2.addColorStop(0, '#2e3443'); rim2.addColorStop(1, '#c6cede');
  g.fillStyle = rim2; g.beginPath(); g.arc(x, y, r * 1.12, 0, TAU); g.fill();
  for (let i = 0; i < 10; i++) {
    const a = i / 10 * TAU + 0.3, bx = x + Math.cos(a) * r * 1.22, by = y + Math.sin(a) * r * 1.22;
    g.fillStyle = '#2a303d'; g.beginPath(); g.arc(bx, by, r * 0.055, 0, TAU); g.fill();
    g.fillStyle = 'rgba(255,255,255,0.6)'; g.beginPath(); g.arc(bx - r * 0.015, by - r * 0.015, r * 0.025, 0, TAU); g.fill();
  }
  // cristal
  g.save(); g.beginPath(); g.arc(x, y, r, 0, TAU); g.clip();
  const dark = g.createRadialGradient(x - r * 0.3, y - r * 0.3, 0, x, y, r);
  dark.addColorStop(0, '#1a2848'); dark.addColorStop(1, '#060a16');
  g.fillStyle = dark; g.fillRect(x - r, y - r, 2 * r, 2 * r);
  if (litAmt > 0) {
    g.globalAlpha = clamp(litAmt);
    const warm = g.createRadialGradient(x, y - r * 0.6, 0, x, y, r * 1.1);
    warm.addColorStop(0, '#fff1c9'); warm.addColorStop(0.45, '#ffbe5c'); warm.addColorStop(1, '#a9501a');
    g.fillStyle = warm; g.fillRect(x - r, y - r, 2 * r, 2 * r);
    if (person) {
      const rr = rng(seed + 1), px = x + (rr() - .5) * r * 0.5, sc = 0.8 + rr() * 0.3;
      g.fillStyle = 'rgba(70,28,8,0.92)';
      g.beginPath(); g.arc(px, y - r * 0.18 * sc, r * 0.22 * sc, 0, TAU); g.fill();
      g.beginPath(); g.ellipse(px, y + r * 0.62, r * 0.48 * sc, r * 0.5 * sc, 0, Math.PI, 0); g.lineTo(px + r * 0.48 * sc, y + r); g.lineTo(px - r * 0.48 * sc, y + r); g.fill();
      // luz de contorno
      g.strokeStyle = 'rgba(255,230,170,0.5)'; g.lineWidth = r * 0.03;
      g.beginPath(); g.arc(px, y - r * 0.18 * sc, r * 0.22 * sc, -2.6, -0.8); g.stroke();
    }
    g.globalAlpha = 1;
  }
  // reflejos del vidrio
  const ref = g.createLinearGradient(x - r, y - r, x + r * 0.2, y + r * 0.2);
  ref.addColorStop(0, 'rgba(255,255,255,0.28)'); ref.addColorStop(0.35, 'rgba(255,255,255,0.05)'); ref.addColorStop(0.5, 'rgba(255,255,255,0)');
  g.fillStyle = ref; g.fillRect(x - r, y - r, 2 * r, 2 * r);
  g.strokeStyle = 'rgba(255,255,255,0.45)'; g.lineWidth = r * 0.05; g.lineCap = 'round';
  g.beginPath(); g.arc(x, y, r * 0.8, 3.6, 4.3); g.stroke();
  const inner = g.createRadialGradient(x, y, r * 0.75, x, y, r);
  inner.addColorStop(0, 'rgba(0,0,0,0)'); inner.addColorStop(1, 'rgba(0,0,0,0.55)');
  g.fillStyle = inner; g.fillRect(x - r, y - r, 2 * r, 2 * r);
  g.restore();
  if (litAmt > 0) glow(g, x, y, r * 2.8, 'rgba(255,160,60,1)', 0.5 * litAmt);
}

// ------------------------------------------------------------------ marcador
function drawBadge(g, label, value, total, x, y, appear) {
  if (appear <= 0) return;
  const s = backOut(appear);
  g.save(); g.translate(x, y); g.scale(s, s); g.globalAlpha = clamp(appear * 2);
  const txt = total ? `${fmt(value)} / ${fmt(total)}` : fmt(value);
  g.font = '800 70px M'; const tw = g.measureText(txt).width;
  g.font = '700 26px M'; const lw = g.measureText(label).width + label.length * 4;
  const w = Math.max(tw, lw) + 90, h = 150;
  glow(g, 0, 0, w * 0.8, 'rgba(255,190,60,1)', 0.18, 0.35);
  const bg = g.createLinearGradient(0, -h / 2, 0, h / 2);
  bg.addColorStop(0, 'rgba(22,28,48,0.92)'); bg.addColorStop(1, 'rgba(6,9,20,0.95)');
  g.fillStyle = bg; g.beginPath(); g.roundRect(-w / 2, -h / 2, w, h, 26); g.fill();
  const bd = g.createLinearGradient(-w / 2, 0, w / 2, 0);
  bd.addColorStop(0, '#ffb53d'); bd.addColorStop(0.5, '#ffe08a'); bd.addColorStop(1, '#ffb53d');
  g.strokeStyle = bd; g.lineWidth = 5; g.stroke();
  g.fillStyle = 'rgba(255,255,255,0.92)'; g.font = '700 26px M'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.letterSpacing = '4px'; g.fillText(label, 2, -38); g.letterSpacing = '0px';
  const vg = g.createLinearGradient(0, -10, 0, 60);
  vg.addColorStop(0, '#ffe7a3'); vg.addColorStop(1, '#ffb22e');
  g.fillStyle = vg; g.font = '800 70px M'; g.fillText(txt, 0, 26);
  g.restore();
}
const fmt = n => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');

// ------------------------------------------------------------------ escenas
// Cada escena: (g, tl = tiempo local, d = duración, ta = tiempo absoluto)

function sceneZoom(g, tl, d, ta) {
  const k = easeInOut(tl / d);
  drawSpace(g, ta, 10);
  drawSun(g, 170, 330, 1);
  drawPlanet(g, W / 2, H + 760 + 160 * (1 - k), 1250, ta);
  const S = lerp(3.4, 1.0, k);
  const kk = lerp(0.62, 0.42, k);
  const cy = lerp(H * 0.52 - 430 * 3.4 * 0.62 * 0.92, H * 0.5, k);
  drawStation(g, W / 2 + 40 * (1 - k), cy, S, ta * 0.07 + 0.4, kk, D.ocupadas, ta, 0);
}

function sceneStation(g, tl, d, ta) {
  drawSpace(g, ta, 10);
  drawSun(g, 170, 330, 1);
  drawPlanet(g, W / 2, H + 760, 1250, ta);
  const S = lerp(1.0, 1.08, ease(tl / d));
  drawStation(g, W / 2, H * 0.5 + 10 * Math.sin(ta * 1.2), S, ta * 0.07 + 0.4, 0.42, D.ocupadas, ta, 0);
  drawBadge(g, 'VENTANAS ENCENDIDAS', D.ocupadas, D.capacidad, W / 2, H * 0.83, (tl - 0.2) / 0.5);
}

function sceneCorridor(g, tl, d, ta) {
  const vx = W / 2 + Math.sin(ta * 0.8) * 18, vy = H * 0.54 + Math.cos(ta * 0.6) * 10;
  g.fillStyle = '#03060c'; g.fillRect(0, 0, W, H);
  const speed = 1.1, F = 640, hw = 1.0, hh = 1.45, c = 0.38;
  const oct = [[-hw + c, -hh], [hw - c, -hh], [hw, -hh + c], [hw, hh - c], [hw - c, hh], [-hw + c, hh], [-hw, hh - c], [-hw, -hh + c]];
  const proj = (p, z) => [vx + p[0] * F / z, vy + p[1] * F / z];
  const fogC = [20, 40, 70];
  const faceCol = [[70, 82, 104], [58, 68, 88], [50, 58, 76], [58, 68, 88], [36, 42, 56], [58, 68, 88], [50, 58, 76], [58, 68, 88]];
  const off = (ta * speed) % 1;
  for (let i = 26; i >= 0; i--) {
    const z0 = i + 1 - off, z1 = i + 2 - off;
    if (z0 < 0.12) continue;
    const fog = 1 - Math.exp(-z0 * 0.16);
    // flicker: las luces fallan porque no hay tripulación
    const seed = Math.floor(ta * speed) + i;
    const rr = rng(seed * 13);
    const dead = rr() < 0.3, flick = rr() < 0.25 ? (Math.sin(ta * 37 + i) > 0.2 ? 1 : 0.15) : 1;
    const lum = dead ? 0.35 : flick;
    for (let f = 0; f < 8; f++) {
      const a = oct[f], b = oct[(f + 1) % 8];
      const col = mix(faceCol[f].map(v => v * (0.55 + 0.45 * lum)), fogC, fog);
      g.fillStyle = rgb(col);
      g.beginPath(); g.moveTo(...proj(a, z0)); g.lineTo(...proj(b, z0)); g.lineTo(...proj(b, z1)); g.lineTo(...proj(a, z1)); g.closePath(); g.fill();
      g.strokeStyle = rgb(mix([20, 24, 34], fogC, fog), 0.8); g.lineWidth = Math.max(1, 3 * F / z0 / 640); g.stroke();
    }
    // ventanas redondas en las paredes
    for (const side of [-1, 1]) {
      const zm = (z0 + z1) / 2, [px, py] = proj([side * hw, -0.05], zm);
      const R = 0.26 * F / zm;
      g.save(); g.translate(px, py); g.scale(0.42, 1);
      g.fillStyle = rgb(mix([140, 150, 170], fogC, fog)); g.beginPath(); g.arc(0, 0, R * 1.25, 0, TAU); g.fill();
      const wg = g.createRadialGradient(0, 0, 0, 0, 0, R);
      wg.addColorStop(0, rgb(mix([12, 24, 52], fogC, fog))); wg.addColorStop(1, rgb(mix([2, 5, 14], fogC, fog)));
      g.fillStyle = wg; g.beginPath(); g.arc(0, 0, R, 0, TAU); g.fill();
      g.fillStyle = `rgba(255,255,255,${0.6 * (1 - fog)})`;
      for (let s = 0; s < 5; s++) { const r2 = rng(i * 7 + s + side * 3); g.beginPath(); g.arc((r2() - .5) * R * 1.4, (r2() - .5) * R * 1.4, Math.max(.6, R * 0.03), 0, TAU); g.fill(); }
      g.restore();
    }
    // lámpara del techo
    const [lx0, ly0] = proj([-0.18, -hh + 0.01], z0 + 0.25), [lx1, ly1] = proj([0.18, -hh + 0.01], z0 + 0.75);
    const la = lum * (1 - fog * 0.85);
    g.fillStyle = `rgba(210,235,255,${0.25 + 0.75 * la})`;
    g.fillRect(Math.min(lx0, lx1), ly0, Math.abs(lx1 - lx0), Math.max(2, ly1 - ly0));
    glow(g, (lx0 + lx1) / 2, (ly0 + ly1) / 2 + 40 * F / z0 / 640, 240 * F / z0 / 640, 'rgba(140,200,255,1)', 0.5 * la);
    // guías del suelo
    for (const side of [-1, 1]) {
      const [gx, gy] = proj([side * (hw - c - 0.05), hh - 0.01], z0 + 0.5);
      glow(g, gx, gy, 26 * F / z0 / 640, 'rgba(60,150,255,1)', 0.9 * (1 - fog));
    }
  }
  // luz al fondo del pasillo + niebla
  glow(g, vx, vy, 520, 'rgba(120,190,255,1)', 0.55);
  glow(g, vx, vy, 160, 'rgba(230,245,255,1)', 0.8);
  const fogG = g.createRadialGradient(vx, vy, 0, vx, vy, 900);
  fogG.addColorStop(0, 'rgba(90,150,220,0.25)'); fogG.addColorStop(1, 'rgba(10,20,40,0)');
  g.fillStyle = fogG; g.fillRect(0, 0, W, H);
  // polvo flotando
  const r = rng(99);
  for (let i = 0; i < 70; i++) {
    const x = ((r() * W + ta * (10 + r() * 20)) % W), y = ((r() * H - ta * (8 + r() * 25)) % H + H) % H;
    g.fillStyle = `rgba(200,225,255,${0.12 + r() * 0.25})`; g.beginPath(); g.arc(x, y, 1 + r() * 2.5, 0, TAU); g.fill();
  }
}

function hullLayout() {
  const pts = [], r = rng(5);
  for (let row = 0; row < 12; row++) for (let col = 0; col < 4; col++) {
    pts.push({ x: 175 + col * 245 + (row % 2) * 122 - 60, y: 120 + row * 250, u: r(), seed: row * 4 + col });
  }
  return pts;
}
const HULL = hullLayout();

function drawHull(g, camY) {
  g.drawImage(A.hull, -200, -camY - 400);
}

function sceneHull(g, tl, d, ta) {
  const camY = 260 + tl * 70;
  const z = lerp(1.0, 1.1, ease(tl / d));
  g.save(); g.translate(W / 2, H / 2); g.scale(z, z); g.rotate(-0.03 + 0.02 * tl / d); g.translate(-W / 2, -H / 2);
  drawHull(g, camY);
  const prog = easeInOut((tl - 0.1) / (d * 0.92));
  for (const p of HULL) {
    const y = p.y - camY + 400;
    if (y < -200 || y > H + 200) continue;
    const thr = 0.04 + p.u * 0.9;
    const tOn = thr; const amt = clamp((prog - tOn) / 0.05);
    drawPorthole(g, p.x, y, 82, amt, p.seed, true);
    if (amt > 0 && amt < 1) {
      g.strokeStyle = `rgba(255,225,160,${1 - amt})`; g.lineWidth = 6;
      g.beginPath(); g.arc(p.x, y, 82 * (1.3 + amt * 0.9), 0, TAU); g.stroke();
      glow(g, p.x, y, 400 * (1 - amt), 'rgba(255,220,150,1)', 0.6 * (1 - amt));
    }
  }
  g.restore();
  const v = g.createLinearGradient(0, 0, 0, H);
  v.addColorStop(0, 'rgba(0,0,0,0.55)'); v.addColorStop(0.3, 'rgba(0,0,0,0)'); v.addColorStop(1, 'rgba(0,0,0,0.4)');
  g.fillStyle = v; g.fillRect(0, 0, W, H);
}

function sceneYou(g, tl, d, ta) {
  const k = easeInOut(tl / (d * 0.55));
  const target = { x: W / 2, y: H * 0.56 };
  const z = lerp(1.0, 2.9, k);
  g.save(); g.translate(target.x, target.y); g.scale(z, z); g.translate(-target.x, -target.y);
  drawHull(g, 700);
  const neighbors = [[-1, -1], [1, -1], [-1, 1], [1, 1], [0, -2], [0, 2], [-2, 0], [2, 0]];
  for (const [i, j] of neighbors) drawPorthole(g, target.x + i * 245, target.y + j * 230, 82, 0, 0);
  const on = clamp((tl - d * 0.35) / 0.25);
  drawPorthole(g, target.x, target.y, 82, on, 3, true);
  g.restore();
  if (on > 0) {
    glow(g, target.x, target.y, 700, 'rgba(255,170,70,1)', 0.35 * on);
    if (on < 1) glow(g, target.x, target.y, 1100, 'rgba(255,240,210,1)', 0.7 * (1 - on));
    const a = clamp((tl - d * 0.42) / 0.35);
    if (a > 0) {
      const s = backOut(a);
      g.save(); g.translate(W / 2, H * 0.56 + 82 * 2.9 * 1.32 + 140); g.scale(s, s);
      g.font = '900 190px M'; g.textAlign = 'center'; g.textBaseline = 'middle';
      glow(g, 0, 0, 300, 'rgba(255,190,60,1)', 0.45 * a, 0.6);
      g.lineJoin = 'round'; g.lineWidth = 18; g.strokeStyle = `rgba(0,0,0,${0.8 * a})`; g.strokeText('TÚ', 0, 0);
      const tg = g.createLinearGradient(0, -80, 0, 80); tg.addColorStop(0, '#fff2bf'); tg.addColorStop(1, '#ffb120');
      g.fillStyle = tg; g.globalAlpha = a; g.fillText('TÚ', 0, 0);
      g.restore();
    }
    // motas de polvo en la luz
    const r = rng(4);
    for (let i = 0; i < 60; i++) {
      const x = W / 2 + (r() - .5) * 900, y = ((H * 0.56 + (r() - .5) * 1100 - ta * (15 + r() * 30)) % H + H) % H;
      g.fillStyle = `rgba(255,220,160,${on * (0.15 + r() * 0.4)})`; g.beginPath(); g.arc(x, y, 1.5 + r() * 3, 0, TAU); g.fill();
    }
  }
}

function sceneEngines(g, tl, d, ta) {
  const ign = ease((tl - 0.5) / 1.4);
  const sh = ign * 7;
  const r = rng(Math.floor(ta * 30));
  g.save(); g.translate((r() - .5) * sh, (r() - .5) * sh);
  drawSpace(g, ta, 10);
  drawSun(g, 170, 330, 1);
  drawPlanet(g, W / 2, H + 760, 1250, ta);
  drawStation(g, W / 2, H * 0.44, 0.95, ta * 0.07 + 0.4, 0.42, D.ocupadas, ta, ign);
  // chispas
  if (ign > 0) {
    const rs = rng(8);
    for (let i = 0; i < 80; i++) {
      const life = (ta * (0.8 + rs()) + rs()) % 1;
      const x = W / 2 + (rs() - .5) * 260 + (rs() - .5) * 400 * life, y = H * 0.44 + 450 + life * 700;
      g.fillStyle = `rgba(180,220,255,${(1 - life) * 0.8 * ign})`; g.beginPath(); g.arc(x, y, 2 + rs() * 3, 0, TAU); g.fill();
    }
  }
  g.restore();
  drawBadge(g, 'META: TRIPULANTES', 100, 0, W / 2, H * 0.86, (tl - 0.2) / 0.5);
}

function sceneOrbit(g, tl, d, ta) {
  const k = easeInOut(tl / d);
  const r = rng(Math.floor(ta * 30));
  g.save(); g.translate((r() - .5) * 6, (r() - .5) * 6);
  drawSpace(g, ta, 10 + 1400 * k, 260 * k);
  drawSun(g, 170, 330 - 300 * k, 1 - k * 0.5);
  drawPlanet(g, W / 2, H + 760 + 900 * k, 1250 - 350 * k, ta);
  const lit = Math.round(lerp(D.ocupadas, D.capacidad, easeInOut(tl / (d * 0.75))));
  drawStation(g, W / 2, H * 0.44 - 120 * k, 0.95 - 0.15 * k, ta * 0.07 + 0.4, 0.42, lit, ta, 1.25);
  g.restore();
  glow(g, W / 2, H * 0.5, 1200, 'rgba(120,180,255,1)', 0.12 * k);
  drawBadge(g, 'META FINAL', D.capacidad, 0, W / 2, H * 0.86, (tl - 0.2) / 0.5);
}

function sceneRadar(g, tl, d, ta) {
  const bg = g.createRadialGradient(W / 2, H * 0.58, 0, W / 2, H * 0.58, H * 0.8);
  bg.addColorStop(0, '#062a33'); bg.addColorStop(1, '#010a0e');
  g.fillStyle = bg; g.fillRect(0, 0, W, H);
  const cx = W / 2, cy = H * 0.58, C = 'rgba(70,255,220,';
  g.strokeStyle = C + '0.07)'; g.lineWidth = 1;
  for (let x = 0; x < W; x += 54) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, H); g.stroke(); }
  for (let y = 0; y < H; y += 54) { g.beginPath(); g.moveTo(0, y); g.lineTo(W, y); g.stroke(); }
  const ap = easeOut(tl / 0.6);
  for (const [rr, a] of [[160, .5], [300, .45], [440, .4]]) {
    g.strokeStyle = C + (a * ap) + ')'; g.lineWidth = 3; g.beginPath(); g.arc(cx, cy, rr * ap, 0, TAU); g.stroke();
  }
  for (let j = 0; j < 72; j++) {
    const a = j / 72 * TAU, l = j % 6 === 0 ? 22 : 10;
    g.strokeStyle = C + 0.5 * ap + ')'; g.lineWidth = 2;
    g.beginPath(); g.moveTo(cx + Math.cos(a) * 460 * ap, cy + Math.sin(a) * 460 * ap); g.lineTo(cx + Math.cos(a) * (460 + l) * ap, cy + Math.sin(a) * (460 + l) * ap); g.stroke();
  }
  const sw = ta * 2.2;
  const cg = g.createConicGradient(sw - 1.2, cx, cy);
  cg.addColorStop(0, C + '0)'); cg.addColorStop(1.2 / TAU, C + '0.45)'); cg.addColorStop(1.2 / TAU + 0.001, C + '0)'); cg.addColorStop(1, C + '0)');
  g.fillStyle = cg; g.beginPath(); g.arc(cx, cy, 450 * ap, 0, TAU); g.fill();
  g.strokeStyle = C + '0.95)'; g.lineWidth = 4; g.beginPath(); g.moveTo(cx, cy); g.lineTo(cx + Math.cos(sw) * 450 * ap, cy + Math.sin(sw) * 450 * ap); g.stroke();
  // destinos "?"
  const blips = [[160, 0.7], [300, 2.4], [440, 4.1], [440, 1.2], [300, 5.3]];
  blips.forEach(([rr, a0], i) => {
    const a = a0 + ta * 0.15, x = cx + Math.cos(a) * rr, y = cy + Math.sin(a) * rr;
    const app = clamp((tl - 0.4 - i * 0.35) / 0.3);
    if (app <= 0) return;
    const pul = 1 + 0.25 * Math.sin(ta * 5 + i);
    glow(g, x, y, 80 * pul, 'rgba(255,190,70,1)', 0.6 * app);
    g.fillStyle = `rgba(255,205,90,${app})`; g.beginPath(); g.arc(x, y, 30, 0, TAU); g.fill();
    g.fillStyle = `rgba(30,20,0,${app})`; g.font = '900 38px M'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('?', x, y + 2);
  });
  // la estación en el centro
  g.strokeStyle = 'rgba(255,255,255,0.95)'; g.lineWidth = 5; g.beginPath(); g.ellipse(cx, cy, 34, 18, 0, 0, TAU); g.stroke();
  glow(g, cx, cy, 70, 'rgba(160,255,240,1)', 0.6);
  // textos del panel
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillStyle = C + '0.9)'; g.font = '700 30px M'; g.letterSpacing = '8px';
  g.fillText('NAVEGACIÓN', cx, cy - 560);
  const msg = 'DESTINO: SIN DEFINIR', n = Math.floor(clamp((tl - 0.3) / 1.2) * msg.length);
  g.font = '800 46px M'; g.letterSpacing = '4px';
  g.fillStyle = 'rgba(255,205,90,0.95)';
  g.fillText(msg.slice(0, n) + (Math.sin(ta * 8) > 0 ? '_' : ' '), cx, cy + 560);
  g.letterSpacing = '0px';
  // líneas de barrido (scanlines)
  g.fillStyle = 'rgba(0,0,0,0.18)';
  for (let y = 0; y < H; y += 4) g.fillRect(0, y, W, 1.5);
  glow(g, cx, cy, 700, 'rgba(60,255,210,1)', 0.08);
}

function drawPlanetSimple(g, x, y, R, base, dark, kind, ta) {
  if (kind === 'saturno') {
    g.save(); g.translate(x, y); g.rotate(-0.35);
    g.strokeStyle = 'rgba(230,205,150,0.85)'; g.lineWidth = R * 0.18;
    g.beginPath(); g.ellipse(0, 0, R * 1.75, R * 0.45, 0, Math.PI, TAU); g.stroke();
    g.strokeStyle = 'rgba(190,160,110,0.6)'; g.lineWidth = R * 0.08;
    g.beginPath(); g.ellipse(0, 0, R * 2.0, R * 0.53, 0, Math.PI, TAU); g.stroke();
    g.restore();
  }
  glow(g, x, y, R * 1.6, base.replace('rgb', 'rgba').replace(')', ',1)'), 0.25);
  g.save(); g.beginPath(); g.arc(x, y, R, 0, TAU); g.clip();
  g.fillStyle = base; g.fillRect(x - R, y - R, 2 * R, 2 * R);
  const r = rng(kind.length * 31);
  if (kind === 'marte') {
    for (let i = 0; i < 14; i++) { g.fillStyle = `rgba(110,35,15,${0.25 + r() * 0.3})`; g.beginPath(); g.ellipse(x + (r() - .5) * 2 * R, y + (r() - .5) * 2 * R, R * (0.1 + r() * 0.3), R * (0.05 + r() * 0.15), r() * 3, 0, TAU); g.fill(); }
    g.fillStyle = 'rgba(255,240,230,0.8)'; g.beginPath(); g.ellipse(x, y - R * 0.95, R * 0.4, R * 0.12, 0, 0, TAU); g.fill();
  } else if (kind === 'saturno') {
    for (let i = -6; i <= 6; i++) { g.fillStyle = i % 2 ? 'rgba(170,120,60,0.35)' : 'rgba(255,235,190,0.25)'; g.save(); g.translate(x, y); g.rotate(-0.35); g.fillRect(-R, i * R * 0.15, 2 * R, R * 0.09); g.restore(); }
  } else {
    g.save(); g.translate(x, y); g.rotate(ta * 0.6);
    for (let i = 0; i < 5; i++) { g.strokeStyle = `rgba(255,140,255,${0.25 + 0.1 * i})`; g.lineWidth = R * 0.08; g.beginPath(); g.arc(0, 0, R * (0.2 + i * 0.16), i, i + 3.5); g.stroke(); }
    g.restore();
  }
  const sh = g.createRadialGradient(x - R * 0.4, y - R * 0.45, R * 0.1, x, y, R * 1.05);
  sh.addColorStop(0, 'rgba(255,255,255,0.25)'); sh.addColorStop(0.5, 'rgba(0,0,0,0)'); sh.addColorStop(1, dark);
  g.fillStyle = sh; g.fillRect(x - R, y - R, 2 * R, 2 * R);
  g.restore();
  if (kind === 'saturno') {
    g.save(); g.translate(x, y); g.rotate(-0.35);
    g.strokeStyle = 'rgba(240,215,160,0.95)'; g.lineWidth = R * 0.18;
    g.beginPath(); g.ellipse(0, 0, R * 1.75, R * 0.45, 0, 0, Math.PI); g.stroke();
    g.strokeStyle = 'rgba(200,170,120,0.7)'; g.lineWidth = R * 0.08;
    g.beginPath(); g.ellipse(0, 0, R * 2.0, R * 0.53, 0, 0, Math.PI); g.stroke();
    g.restore();
  }
  if (kind === 'misterio') {
    glow(g, x, y, R * 2.2, 'rgba(190,90,255,1)', 0.45 + 0.15 * Math.sin(ta * 3));
    g.font = `900 ${R * 1.2}px M`; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillStyle = 'rgba(255,255,255,0.95)'; g.fillText('?', x, y + R * 0.06);
  }
}

function sceneVote(g, tl, d, ta) {
  drawSpace(g, ta, 14);
  glow(g, W / 2, H * 0.5, 900, 'rgba(90,70,200,1)', 0.18);
  const opts = [
    { x: W * 0.24, y: H * 0.47, R: 120, base: 'rgb(200,85,45)', dark: 'rgba(40,5,0,0.9)', kind: 'marte', name: 'MARTE' },
    { x: W * 0.5, y: H * 0.39, R: 140, base: 'rgb(225,185,115)', dark: 'rgba(40,20,0,0.85)', kind: 'saturno', name: 'SATURNO' },
    { x: W * 0.77, y: H * 0.5, R: 115, base: 'rgb(110,50,190)', dark: 'rgba(10,0,30,0.9)', kind: 'misterio', name: '???' },
  ];
  opts.forEach((o, i) => {
    const a = clamp((tl - 0.15 - i * 0.3) / 0.5);
    if (a <= 0) return;
    const s = backOut(a), fy = Math.sin(ta * 1.6 + i * 2) * 14;
    g.save(); g.translate(o.x, o.y + fy); g.scale(s, s); g.translate(-o.x, -(o.y + fy));
    drawPlanetSimple(g, o.x, o.y + fy, o.R, o.base, o.dark, o.kind, ta);
    g.font = '800 46px M'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.lineJoin = 'round'; g.lineWidth = 10; g.strokeStyle = 'rgba(0,0,0,0.75)'; g.strokeText(o.name, o.x, o.y + fy + o.R + 80);
    g.fillStyle = '#fff'; g.fillText(o.name, o.x, o.y + fy + o.R + 80);
    g.restore();
  });
  const ctaT = D.ctaT - D.escenaIni.votacion;
  const a = clamp((tl - ctaT) / 0.4);
  if (a > 0) {
    const pul = 1 + 0.04 * Math.sin(ta * 6);
    const y = H * 0.73, w = 900, h = 140;
    g.save(); g.translate(W / 2, y); g.scale(backOut(a) * pul, backOut(a) * pul);
    glow(g, 0, 0, 560, 'rgba(255,190,60,1)', 0.35 * a, 0.35);
    const bg = g.createLinearGradient(0, -h / 2, 0, h / 2); bg.addColorStop(0, '#ffe08a'); bg.addColorStop(1, '#ffae1f');
    g.fillStyle = bg; g.beginPath(); g.roundRect(-w / 2, -h / 2, w, h, h / 2); g.fill();
    // icono de comentario
    g.fillStyle = '#1b1406'; g.beginPath(); g.roundRect(-w / 2 + 50, -34, 76, 56, 14); g.fill();
    g.beginPath(); g.moveTo(-w / 2 + 70, 20); g.lineTo(-w / 2 + 64, 42); g.lineTo(-w / 2 + 92, 20); g.fill();
    g.fillStyle = '#ffd36b'; for (const dx of [-16, 0, 16]) { g.beginPath(); g.arc(-w / 2 + 88 + dx, -6, 5, 0, TAU); g.fill(); }
    g.fillStyle = '#1b1406'; g.font = '800 44px M'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText('VOTA EN LOS COMENTARIOS', 62, 3);
    g.restore();
    const bounce = Math.abs(Math.sin(ta * 4.5)) * 34;
    const ay = y + 120 + bounce;
    glow(g, W / 2, ay + 30, 120, 'rgba(255,255,255,1)', 0.25 * a);
    g.fillStyle = `rgba(255,255,255,${a})`; g.beginPath(); g.moveTo(W / 2 - 55, ay); g.lineTo(W / 2 + 55, ay); g.lineTo(W / 2, ay + 75); g.closePath(); g.fill();
  }
}

const SCENES = {
  estacion_zoom: sceneZoom, estacion: sceneStation, pasillo: sceneCorridor, casco: sceneHull,
  tu: sceneYou, motores: sceneEngines, orbita: sceneOrbit, radar: sceneRadar, votacion: sceneVote,
};

// ------------------------------------------------------------------ subtítulos
function captionLayout(texto) {
  const words = texto.split(/\s+/).filter(Boolean).map(w => ({ txt: w.replace(/\*/g, ''), hi: w.includes('*') }));
  ctx.font = '800 80px M';
  const sp = ctx.measureText(' ').width, maxW = 940;
  const lines = []; let cur = [], cw = 0;
  for (const w of words) {
    w.w = ctx.measureText(w.txt).width;
    if (cur.length && cw + sp + w.w > maxW) { lines.push({ ws: cur, w: cw }); cur = []; cw = 0; }
    cw += (cur.length ? sp : 0) + w.w; cur.push(w);
  }
  if (cur.length) lines.push({ ws: cur, w: cw });
  return { lines, sp, words };
}

function drawCaption(g, t) {
  let idx = 0;
  D.lineas.forEach((l, i) => { if (l.ini <= t + 0.05) idx = i; });
  const L = D.lineas[idx];
  if (!L._lay) L._lay = captionLayout(L.texto);
  const { lines, sp, words } = L._lay;
  // tiempos por palabra según su longitud
  const tot = words.reduce((s, w) => s + w.txt.length + 1, 0);
  let acc = 0;
  for (const w of words) { w.t0 = L.ini + (L.fin - L.ini) * 0.85 * acc / tot - 0.12; acc += w.txt.length + 1; }
  const lh = 98, y0 = 330 - (lines.length - 1) * lh / 2;
  // sombra suave detrás del bloque de texto
  const sh = g.createLinearGradient(0, 0, 0, 640);
  sh.addColorStop(0, 'rgba(0,0,0,0.55)'); sh.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = sh; g.fillRect(0, 0, W, 640);
  g.font = '800 80px M'; g.textBaseline = 'middle'; g.textAlign = 'left'; g.lineJoin = 'round';
  lines.forEach((ln, li) => {
    let x = (W - ln.w) / 2; const y = y0 + li * lh;
    for (const w of ln.ws) {
      const p = clamp((t - w.t0) / 0.14);
      const alpha = 0.28 + 0.72 * p, s = 1 + 0.12 * (1 - easeOut(p)) * (p > 0 ? 1 : 0);
      g.save(); g.translate(x + w.w / 2, y); g.scale(s, s);
      g.globalAlpha = alpha;
      g.shadowColor = 'rgba(0,0,0,0.6)'; g.shadowBlur = 24; g.shadowOffsetY = 6;
      g.lineWidth = 13; g.strokeStyle = 'rgba(0,0,0,0.8)'; g.strokeText(w.txt, -w.w / 2, 0);
      g.shadowColor = 'transparent';
      g.fillStyle = w.hi && p > 0 ? '#ffc83d' : '#ffffff';
      g.fillText(w.txt, -w.w / 2, 0);
      if (w.hi && p > 0) { g.globalCompositeOperation = 'lighter'; g.globalAlpha = 0.25 * p; g.drawImage(glowSprite('rgba(255,190,60,1)'), -w.w / 2 - 20, -60, w.w + 40, 120); }
      g.restore();
      x += w.w + sp;
    }
  });
}

function drawWatermark(g) {
  g.save(); g.globalAlpha = 0.8;
  g.font = '700 30px M'; g.textAlign = 'right'; g.textBaseline = 'middle';
  const tw = g.measureText(D.cuenta).width, x = W - 44, y = 600;
  g.strokeStyle = '#fff'; g.lineWidth = 3.5;
  g.beginPath(); g.roundRect(x - tw - 62, y - 22, 44, 44, 12); g.stroke();
  g.beginPath(); g.arc(x - tw - 40, y, 10, 0, TAU); g.stroke();
  g.fillStyle = '#fff'; g.beginPath(); g.arc(x - tw - 28, y - 12, 3, 0, TAU); g.fill();
  g.shadowColor = 'rgba(0,0,0,0.6)'; g.shadowBlur = 8;
  g.fillText(D.cuenta, x, y);
  g.restore();
}

// ------------------------------------------------------------------ post-proceso
function post(g, t) {
  // bloom: brillo suave sobre las zonas claras
  const b = A.bloom.getContext('2d');
  b.globalCompositeOperation = 'copy';
  b.filter = 'brightness(0.75) contrast(2.2) blur(7px)';
  b.drawImage(cv, 0, 0, 270, 480);
  b.filter = 'none';
  g.save(); g.globalCompositeOperation = 'lighter'; g.globalAlpha = 0.5;
  g.drawImage(A.bloom, 0, 0, W, H);
  g.restore();
  // viñeta
  const v = g.createRadialGradient(W / 2, H / 2, H * 0.3, W / 2, H / 2, H * 0.75);
  v.addColorStop(0, 'rgba(0,0,0,0)'); v.addColorStop(1, 'rgba(0,0,0,0.55)');
  g.fillStyle = v; g.fillRect(0, 0, W, H);
  // grano
  g.save(); g.globalCompositeOperation = 'overlay'; g.globalAlpha = 0.07;
  g.drawImage(A.grain[Math.floor(t * 30) % 4], 0, 0, W, H);
  g.restore();
}

// ------------------------------------------------------------------ cuadro completo
function sceneAt(t) {
  let i = 0;
  D.escenas.forEach((e, j) => { if (e.ini <= t) i = j; });
  return i;
}

window.renderFrame = function (t) {
  const i = sceneAt(t), e = D.escenas[i];
  ctx.save(); ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 1;
  ctx.fillStyle = '#000'; ctx.fillRect(0, 0, W, H);
  // empuje de cámara al entrar a la escena
  const tl = t - e.ini, punch = i > 0 ? 1 + 0.04 * (1 - easeOut(tl / 0.5)) : 1;
  ctx.save(); ctx.translate(W / 2, H / 2); ctx.scale(punch, punch); ctx.translate(-W / 2, -H / 2);
  SCENES[e.nombre](ctx, tl, e.fin - e.ini, t);
  ctx.restore();
  // fundido cruzado con la escena anterior
  const XF = 0.35;
  if (i > 0 && tl < XF) {
    const p = D.escenas[i - 1], bctx = A.buf.getContext('2d');
    bctx.save(); bctx.fillStyle = '#000'; bctx.fillRect(0, 0, W, H);
    SCENES[p.nombre](bctx, t - p.ini, p.fin - p.ini, t);
    bctx.restore();
    ctx.globalAlpha = 1 - easeInOut(tl / XF); ctx.drawImage(A.buf, 0, 0); ctx.globalAlpha = 1;
  }
  post(ctx, t);
  drawCaption(ctx, t);
  drawWatermark(ctx);
  if (t > D.total - 0.7) { ctx.fillStyle = `rgba(0,0,0,${clamp((t - (D.total - 0.7)) / 0.7)})`; ctx.fillRect(0, 0, W, H); }
  ctx.restore();
  return cv.toDataURL('image/jpeg', 0.94).split(',')[1];
};

window.setup = async function (data) {
  D = data;
  D.escenaIni = {};
  D.escenas.forEach(e => { D.escenaIni[e.nombre] = e.ini; });
  await document.fonts.load('800 80px M');
  await document.fonts.load('900 80px M');
  await document.fonts.load('700 30px M');
  buildAssets();
  return true;
};
