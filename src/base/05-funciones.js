const saludar = (nombre) => `Hola, ${nombre}`;

export const getUser = () => ({
  uid: "ABC123",
  username: "Elver",
});

export const getUsuarioActivo = (nombre) => ({
    uid: "ABC456",
    username: nombre,
});


console.log(getUser());
console.log(getUsuarioActivo('Alejo'));