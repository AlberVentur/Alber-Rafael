// Versão para vídeo longo: cada cena só é montada quando o tempo chega nela, e a anterior é descartada
// (montar as 45 cenas de uma vez estoura a memória). A semente do acaso é fixa por cena, para que
// qualquer trecho renderizado separadamente fique idêntico.
import { Stage } from './motor/core.js';
import { CENAS } from './cenas.js';
function dispose(scene) { scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); const m = o.material; (Array.isArray(m) ? m : m ? [m] : []).forEach((mt) => { for (const k in mt) { const v = mt[k]; if (v && v.isTexture) v.dispose(); } mt.dispose(); }); if (o.shadow && o.shadow.map) o.shadow.map.dispose(); }); }
window.__hf = window.__hf || {}; window.__hf.buildReady = window.__hf.buildReady || {};
window.__hf.buildReady.film = (async () => {
  await Promise.all(["900 40px Fraunces", "700 40px Caveat", "700 40px Inter", "800 40px Inter", "600 40px Inter", "700 40px 'IBM Plex Mono'", "600 40px 'IBM Plex Mono'"].map(f => document.fonts.load(f))).catch(() => {});
  const st = new Stage(document.getElementById('film3d'));
  let cur = -1, shot = null;
  const pick = (t) => { let i = CENAS.findIndex(([, a, b]) => t >= a && t < b); if (i < 0) i = CENAS.length - 1; return i; };
  const render0 = st.render.bind(st);
  st.render = (t) => { const i = pick(t); if (i !== cur) { if (shot) { dispose(shot.scene); st.r.renderLists.dispose(); } window.__srv = 1 + i * 7919; const [cena, a, b] = CENAS[i]; shot = cena(a, b); st.shots = [shot]; cur = i; } render0(t); };
  window.addEventListener('hf-seek', (e) => st.render(e.detail.time)); st.render(0);
})();
