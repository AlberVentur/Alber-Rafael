// Renderiza los cuadros del video con Chromium (Playwright).
// uso: node render.js datos.json carpeta_salida [hilos] [tiempos_de_prueba_separados_por_coma]
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const [, , dataPath, outDir, hilos = '4', prueba] = process.argv;
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch();
  const html = 'file://' + path.join(__dirname, 'escena.html');
  const tiempos = prueba ? prueba.split(',').map(Number) : null;
  const total = tiempos ? tiempos.length : Math.round(data.total * data.fps);
  const N = Math.min(+hilos, total);
  let hechos = 0;
  await Promise.all([...Array(N)].map(async (_, w) => {
    const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
    page.on('pageerror', e => { console.error('Error en la página:', e.message); process.exit(1); });
    await page.goto(html);
    await page.evaluate(d => window.setup(d), data);
    for (let k = w; k < total; k += N) {
      const t = tiempos ? tiempos[k] : k / data.fps;
      const b64 = await page.evaluate(t => window.renderFrame(t), t);
      fs.writeFileSync(path.join(outDir, `f_${String(k).padStart(5, '0')}.jpg`), Buffer.from(b64, 'base64'));
      if (++hechos % 60 === 0) console.log(`  ${hechos}/${total} cuadros`);
    }
  }));
  await browser.close();
})();
