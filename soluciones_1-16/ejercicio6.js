// Ejercicio 6
// Dado un número entero A, hacer un algoritmo que
// determine si es par, impar o nulo. Pista: para determinar el
// resto de una división, se usa la operación módulo %.

const prompt = require("prompt-sync")();






let number;


do {

number = Number(prompt("Introduce un número: "));

if (isNaN(number)){ // Importantisimo preguntar primero si es un numero o no, y si no lo es...
  // salir directamente del bucle.
  console.log(`El argumento que hemos pasado es incorrecto, solo números`);
} else if (number %2 === 0){
  console.log(`El argumento es par`);
} else if (number %2 !== 0){
  console.log(`El argumento es impar`)
} 

} while (number);



