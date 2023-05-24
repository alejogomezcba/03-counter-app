import "@testing-library/jest-dom";
import { getHeroeByIdAsync } from '../../base/09-promesas';
import { heroes } from "../../data/heroes";

describe('Pruebas con promesas', () => {
  test('Debe retornar un heroe async', (done) => {
    const heroId = 1;
    getHeroeByIdAsync( heroId )
        .then( heroe => {
            expect(heroe).toBe(heroes[0]);
            done();
        });
  });
  test('Debe retornar un error si el heroe no se encuentra', (done) => {
    const heroId = 100;
    getHeroeByIdAsync( heroId )
        .catch(err => {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(err).toBe('No se pudo encontrar el heroe');
            done();
        });
  });
});

