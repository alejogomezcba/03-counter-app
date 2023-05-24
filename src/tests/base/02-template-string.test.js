import "@testing-library/jest-dom";
import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en 02-temp-string", () => {
  test('getSaludo debe retornar hola "nombre"', () => {
    const nombre = "Alejo";
    const apellido = "Gomez";
    const saludo = getSaludo(nombre, apellido);
    expect(saludo).toBe(`Hola ${nombre} ${apellido}`);
  });

  test("getSaludo debe retornar hola Jhon Doe al no pasar nombre y apellido", () => {
    const saludo = getSaludo();
    expect(saludo).toBe("Hola Jhon Doe");
  });
});
