const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    nombreClave: 'Ironman',
    edad: 36,
    direccion: {
        ciudad: 'New York',
        zip: 54321,
        latlng: {
            lat: 14.5684,
            lng: 34.5897,
        }
      },
};

const persona2 = {
    nombre: 'Steve',
    apellido: 'Rogers',
    rango: 'Capitan',
    nombreClave: 'Captain America',
    edad: 36,
    direccion: {
        ciudad: 'New York',
        zip: 54321,
        lat: 14.5684,
        lng: 34.5897,
      },
};


const { nombre, apellido, edad, direccion } = persona;
    

console.log(nombre, apellido, edad);

const returnUser = ({ nombre, apellido, edad, rango = 'N/A' }) => {
    console.log(`El usuario se llama: ${nombre} ${apellido} y tiene ${edad} años. Su rango es: ${rango}`);
}

const returnNickname = ({ nombreClave, edad, direccion }) => {
    return {
        nickname: nombreClave,
        age: edad,
        location: direccion,
    }
};

const { nickname, age, location: {latlng} } = returnNickname(persona);

const { location: {latlng: { lat, lng }} } = returnNickname(persona);

returnUser(persona);
returnUser(persona2);
console.log(nickname, age, latlng );
console.log(`NombreClave: ${nickname}, Edad: ${age}, Latitud: ${lat}, Longitud: ${lng}` );