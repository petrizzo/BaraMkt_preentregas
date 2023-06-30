
const objetoUno = {
    nombreApellido: "Celeste Pérez",
    eMail: "tzirw@example.com",
    telefono : "12342345",
};
const objetoDos = {
    nombreApellido: "Blanca López",
    eMail: "tzirw_1@example.com",
    telefono : "1232345",
};
const arrayObjetos = {
obj1: objetoUno,
obj2: objetoDos,
};

let arrayJSON = JSON.stringify(arrayObjetos);
localStorage.setItem('arrayObjetos', arrayJSON);

let informacion = { nombreApellido : prompt("Ingrese su nombre y su apellido"),
    eMail : prompt("Ingrese su email"), telefono : prompt("Ingrese su numero de telefono"),
};
let informacionConvertida = JSON.stringify(informacion);

// let datosArray = JSON.push(informacion);
// let actualizarJSON = JSON.stringify(datosArray)
 
// Declarar un array de objetos y almacenar el array en formato JSON en storage.



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

localStorage.setItem('nombreApellido', 'Maria Tato');
localStorage.setItem('eMail', 'tatomaria@gmail.com');
localStorage.setItem('telefono', '1234567');

// accediendo a información del localstorage

let nombre = localStorage.getItem('nombreApellido');
let correo = localStorage.getItem('eMail');
let numero = localStorage.getItem('telefono');

alert("El usuario" + ' ' + nombre + ' ' + "con el correo" + ' ' + correo + ' ' + "y el teléfono" + ' ' + numero + " ha sido agregado");

