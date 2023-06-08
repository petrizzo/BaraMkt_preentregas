let informacion = { nombreApellido : prompt("Ingrese su nombre y su apellido"),
    eMail : prompt("Ingrese su email"), telefono : prompt("Ingrese su numero de telefono"),
};
let informacionConvertida = JSON.stringify(informacion);
// let baseDatos = JSON.parse(informacionConvertida);

// let datosArray = JSON.push(informacion);
// let actualizarJSON = JSON.stringify(datosArray)
 
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

// alert("El usuario" + ' ' + nombreApellido + ' ' + "con el correo" + ' ' + eMail + ' ' + "y el teléfono" + ' ' + telefono + " ha sido agregado");


//Base de datos

// let arrayJson = {
//     "Celeste":"Perez",
//     "tzirw@example.com": "Blanca",
//     "Lopez":"tzirw_1@example.comLopez",
//     };
//     let jsonConvertido = JSON.parse(arrayJson);
//     alert(jsonConvertido)


// almacenamos en localStorage

localStorage.setItem('nombreApellido', 'nombreApellido');
localStorage.setItem('eMail', 'eMail');
localStorage.setItem('telefono', 'telefono');

// accediendo a información del localstorage

let nombre = localStorage.getItem('nombreApellido');
let correo = localStorage.getItem('eMail');
let numero = localStorage.getItem('telefono');

alert("El usuario" + ' ' + nombre + ' ' + "con el correo" + ' ' + correo + ' ' + "y el teléfono" + ' ' + numero + " ha sido agregado");

