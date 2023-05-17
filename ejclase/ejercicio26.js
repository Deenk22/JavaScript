// Desarrollar un algoritmo que lea 10 números por teclado y 
// calcule el cubo de cada uno de ellos. En
// cada lectura, tiene que indicar por pantalla el número que está pidiendo. 
// Ejemplo de salida por pantalla: Introduce el número 1o. ➢ 8 El cubo de 8 es 512.

const prompt = require("prompt-sync")({ sigint: true });




// Leer 10 números por teclado >

for (let i = 0; i < 10; i++){
    let numero = Number(prompt("Escribe el valor numérico: "));
    console.log(` --- Comprobando el Numero ${numero}, el cubo de ${numero} es ${numero*numero}`);
}

// Este ejercicio es muy fácil!

