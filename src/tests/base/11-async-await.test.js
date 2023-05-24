import "@testing-library/jest-dom";
import { getImage } from '../../base/11-async-await';


describe('Pruebas con async await', () => {
  test('Debe retornar una imagen', async () => {
    const apiKey = "b8cdOh6NtzUd44Zn7UTJT630qubZ6Gr6";
    const url = await getImage(apiKey);
    expect(url.includes('https://')).toBe(true);
  });
  test('Debe devolver un error', async () => {
    const apiKey = "asdasdasdasdasdad";
    const url = await getImage(apiKey);
    expect(url).toBe('La imagen no existe');
  });
});

