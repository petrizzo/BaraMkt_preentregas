//Base de datos

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


// Declarar un array de objetos y almacenar el array en formato JSON en storage.

let arrayObjetos = [objetoUno,objetoDos];
// let total = arrayObjetos.length;
// console.log(total);

let informacion = { nombreApellido : prompt("Ingrese su nombre y su apellido"), 
    telefono : prompt("Ingrese su numero de telefono"), eMail : prompt("Ingrese su email")
};

let informacionConvertida = JSON.stringify(informacion);
arrayObjetos.push(informacion);
// let total2 = arrayObjetos.length;
// console.log(total2);

// Almacenamos en localStorage
console.log(informacion);
localStorage.setItem('nombreApellido', informacion.nombreApellido);
localStorage.setItem('eMail', informacion.eMail);
localStorage.setItem('telefono', informacion.telefono);

// Imprimimos alert para validar que la información se guardó

alert("El usuario" + ' ' + informacion.nombreApellido + ' ' + "con el correo" + ' ' + informacion.eMail + ' ' + "y el teléfono" + ' ' + informacion.telefono + " ha sido agregado satisfactoriamente");