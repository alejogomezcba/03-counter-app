import "@testing-library/jest-dom";
import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05-funciones', () => {
  test('getUser debe retornar un objeto', () => {
    const userTest = {
        uid: "ABC123",
        username: "Elver",
    };
    const user = getUser();
    expect( user ).toEqual( userTest );
  });  

  test('getUsuarioActivo debe retornar un objeto', () => {
    const testName = 'AlgunNombre';
    const userTest = {
        uid: "ABC456",
        username: testName,
    };
    const user = getUsuarioActivo(testName);
    expect( user ).toEqual( userTest );
  }); 
});
