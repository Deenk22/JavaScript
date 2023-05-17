// >>>>>> CREAR UN NÚMERO DE TELÉFONO A PARTIR DE UN ARRAY DE NÚMEROS <<<<<< // 

const miMatriz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; // Creamos una matriz con los 
// suficientes números para crear un número de teléfono.

function createPhoneNumber (miMatriz){ // Creamos una funcion que se encargará de separar los elementos 
    // del array. Con la función JOIN (' ') colocada justo despues de la función SLICE, hacemos la tarea de 
    // unir los elementos del array en una cadena de texto. (unificamos y lo convertimos en STRING)

const phonePartUno = miMatriz.slice(0,3).join(''); // Creamos una constante que será igual a nuestra miMatriz
// peeeeero con la funcion SLICE que se encargá de escoger, según los parámetros que insertemos, elementos del array miMatriz.
// y a esos elementos le aplicamos la función JOIN (' ').
const phonePartDos = miMatriz.slice(3,6).join(''); // Hacemos lo mismo que en el anterios pero, con diferentes valores.
const phonePartTres = miMatriz.slice(6,10).join(''); // Hacemos lo mismo que en el anterios pero, con diferentes valores.

return (`(${phonePartUno}) ${phonePartDos}-${phonePartTres}`)

}

const phoneNumber = createPhoneNumber(miMatriz);
console.log(phoneNumber);








