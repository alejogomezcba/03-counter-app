const nombre = 'Alejo';
const apellido = 'Gomez';

//const nombreCompleto = `${nombre} ${apellido}`
//console.log(nombreCompleto);

export function getSaludo(nombre = 'Jhon', apellido = 'Doe') {
    return `Hola ${nombre} ${apellido}`
}

console.log(`Este es un saludo: ${getSaludo(nombre, apellido)}`);