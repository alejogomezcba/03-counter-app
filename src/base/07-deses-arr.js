const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [goku] = personajes;
//console.log(goku);

const [p1] = personajes;
//console.log(p1);

//const [, p2] = personajes;
//console.log(p2);

//const [,, p3] = personajes; 
//console.log(p3);

export const returnArray = () => {
    return ['ABC', 123]
} 

const [letras, numeros] = returnArray();
console.log(letras, numeros);

