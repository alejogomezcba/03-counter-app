import "@testing-library/jest-dom";
import { returnArray } from "../../base/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => {
  test('returnArray debe retornar un string y un numero', () => {
    const arr = returnArray();
    const [letras, numeros] = returnArray();
    expect( arr ).toEqual(['ABC', 123]);
    expect( letras ).toBe('ABC');
    expect( numeros ).toBe(123);
  });
});
