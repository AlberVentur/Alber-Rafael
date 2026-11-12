// As cenas do vídeo "¿y si internet desapareciera un día?"
import { cenaQuarto } from './cena-quarto.js';
import { cenaRua, cenaTerraco, cenaCafe, cenaLojas, cenaMercado } from './cenas-a.js';
import { cenaTecnico, cenaCajero, cenaSofa, cenaEgito, cenaTerra } from './cenas-b.js';
const fim = (t0, t1) => cenaQuarto(t0, t1, true);
export const CENAS = [
  [cenaQuarto, 0, 5.74], [cenaRua, 5.74, 10.26], [cenaTerraco, 10.26, 14.72], [cenaCafe, 14.72, 20.08],
  [cenaLojas, 20.08, 25.88], [cenaMercado, 25.88, 30.48], [cenaTecnico, 30.48, 34.70], [cenaCajero, 34.70, 37.82],
  [cenaSofa, 37.82, 42.34], [cenaEgito, 42.34, 48.52], [cenaTerra, 48.52, 52.12], [fim, 52.12, 999],
];
