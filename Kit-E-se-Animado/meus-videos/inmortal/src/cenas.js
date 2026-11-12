// "¿Y si fueras el ÚNICO humano que no puede morir?" — horizontal 1280x720, ~8 min
import { cenaEscada, cenaRuaGag, cenaMedico, cenaUnico, cenaLivro, cenaCeu, cenaCasa, cenaQueda } from './mundo1.js';
import { cenaFama, cenaLab, cenaDisfarce, cenaParque, cenaLucia, cenaHijo, cenaDespedidas, cenaBolo, cenaAula } from './mundo2.js';
import { cenaFuturo, cenaMar, cenaMemoria, cenaPaciencia, cenaPino, cenaEras, cenaDesierto, cenaEspacio } from './mundo3.js';
const v = (f, ...a) => (t0, t1) => f(t0, t1, ...a);
export const CENAS = [
  [cenaEscada, 0, 7.4], [v(cenaRuaGag, 'bici'), 7.4, 10.9], [v(cenaRuaGag, 'avispa'), 10.9, 13.2], [v(cenaRuaGag, 'sushi'), 13.2, 16.0],
  [cenaMedico, 16.0, 22.7], [cenaUnico, 22.7, 25.8], [cenaLivro, 25.8, 32.5], [cenaCeu, 32.5, 38.1],
  [v(cenaCasa, 'comer'), 38.1, 39.8], [v(cenaCasa, 'inverno'), 39.8, 44.4], [cenaQueda, 44.4, 50.0], [v(cenaCasa, 'aceite'), 50.0, 57.2],
  [cenaFama, 57.2, 70.7], [cenaLab, 70.7, 92.6], [v(cenaDisfarce, [0, 3.8, 5.0, 5.9, 7.4, 8.4]), 92.6, 106.7],
  [v(cenaParque, 0, 1), 106.7, 123.8], [v(cenaLucia, 'boda'), 123.8, 133.7], [v(cenaLucia, 'fotos'), 133.7, 137.1], [cenaHijo, 137.1, 143.0],
  [v(cenaLucia, 'mano'), 143.0, 154.6], [cenaDespedidas, 154.6, 167.3], [cenaUnico, 167.3, 177.1], [cenaBolo, 177.1, 185.2],
  [v(cenaDisfarce, [0, 2.9, 4.5, 6.0, 7.5, 9.0]), 185.2, 196.2], [v(cenaFuturo, true), 196.2, 216.0], [cenaAula, 216.0, 232.7],
  [v(cenaMar, false), 232.7, 244.3], [v(cenaMar, true), 244.3, 257.8], [v(cenaLucia, 'fotos'), 257.8, 264.5], [cenaMemoria, 264.5, 273.5],
  [v(cenaFuturo, false), 273.5, 286.7], [v(cenaPaciencia, 'bosque'), 286.7, 297.7], [v(cenaPaciencia, 'catedral'), 297.7, 311.5], [cenaPino, 311.5, 326.1],
  [v(cenaEras, 'gente'), 326.1, 341.1], [v(cenaEras, 'arena'), 341.1, 354.5], [v(cenaDesierto, 'dia'), 354.5, 375.9], [v(cenaDesierto, 'noche'), 375.9, 395.0],
  [v(cenaEspacio, 'parte'), 395.0, 413.1], [v(cenaEspacio, 'voyager'), 413.1, 432.4], [v(cenaEspacio, 'gigante'), 432.4, 444.9], [v(cenaEspacio, 'final'), 444.9, 464.3],
  [v(cenaLucia, 'boda'), 464.3, 475.8], [cenaDespedidas, 475.8, 479.5], [v(cenaLivro, true), 479.5, 999],
];
