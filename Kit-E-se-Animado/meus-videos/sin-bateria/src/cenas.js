// As cenas do vídeo "¿y si los celulares no tuvieran batería?" (horizontal 1280x720)
import { cenaQuarto, cenaMuro, cenaTerraco, cenaCabo, cenaPraca, cenaCafe, cenaOnibus, cenaPerdido } from './cenas-a.js';
import { cenaCabos, cena1983, cenaLitio, cenaMuseu, cenaFabrica, cenaFixo, cenaFim } from './cenas-b.js';
export const CENAS = [
  [cenaQuarto, 0, 5.20], [cenaMuro, 5.20, 11.58], [cenaTerraco, 11.58, 16.42], [cenaCabo, 16.42, 23.34],
  [cenaPraca, 23.34, 32.04], [cenaCafe, 32.04, 35.98], [cenaOnibus, 35.98, 43.40], [cenaPerdido, 43.40, 51.14],
  [cenaCabos, 51.14, 58.06], [cena1983, 58.06, 69.64], [cenaLitio, 69.64, 78.62], [cenaMuseu, 78.62, 86.18],
  [cenaFabrica, 86.18, 95.88], [(a, b) => cenaMuro(a, b, true), 95.88, 103.64], [cenaFixo, 103.64, 113.10], [cenaFim, 113.10, 999],
];
