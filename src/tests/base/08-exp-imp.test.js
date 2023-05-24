import "@testing-library/jest-dom";
import { heroes, owners } from '../../data/heroes';
import { getHeroeById, getHeroeByOwner } from '../../base/08-exp-imp';

describe('Pruebas en funciones de heroes', () => {
  test('Debe retornar un heroe por ID', () => {
    const heroId = 1;
    const hero = getHeroeById( heroId );
    const heroeData = heroes.find( h => h.id === heroId);
    expect(hero).toEqual(heroeData);
  });

  test('Debe retornar undefined si el heroe no existe', () => {
    const heroId = 100;
    const hero = getHeroeById( heroId );
    expect(hero).toBe(undefined);
  });

  test('Debe retornar un arreglo con los heroes de DC', () => {
    const owner = 'DC';
    const heroes = getHeroeByOwner( owner );
    const ownerData = heroes.filter( h => h.owner === owner);
    expect(heroes).toEqual(ownerData);
  });

  test('Debe retornar un arreglo con los heroes de Marvel', () => {
    const owner = 'Marvel';
    const heroes = getHeroeByOwner( owner );
    expect(heroes.length).toBe(2);
  });
});
