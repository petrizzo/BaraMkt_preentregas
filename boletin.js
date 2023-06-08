let informacion = { nombreApellido : prompt("Ingrese su nombre y su apellido"),
    eMail : prompt("Ingrese su email"), telefono : prompt("Ingrese su numero de telefono"),
};
let informacionConvertida = JSON.stringify(informacion);

console.log(informacionConvertida);
 
// Declarar un array de objetos y almacenar el array en formato JSON en storage.


const objetoUno = {
    nombre: "Celeste",
    apellido: "Perez",
    eMail: "tzirw@example.com",
};
const objetoDos = {
    nombre: "Blanca",
    apellido: "Lopez",
    eMail: "tzirw_1@example.com",
};
const arrayObjetos = {
obj1: objetoUno,
obj2: objetoDos,
};

let arrayJSON = JSON.stringify(arrayObjetos);
localStorage.setItem('arrayObjetos', arrayJSON);





// almacenamos en localStorage

localStorage.setItem('nombreApellido', 'maria');
localStorage.setItem('eMail', 'maria@gmail.com');
localStorage.setItem('telefono', '123456');

// accediendo a información del localstorage

let nombre = localStorage.getItem('nombreApellido');
let correo = localStorage.getItem('eMail');
let numero = localStorage.getItem('telefono');

// mostrando el tipo de las variables

console.log(typeof nombre);
console.log(typeof correo);
console.log(typeof numero);

