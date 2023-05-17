// Ejercicio 15
// Modificar el algoritmo del ejercicio 6, de forma que, si se teclea un cero,
// se vuelva a pedir el número por teclado, así hasta que se teclee un número
// mayor que cero, recuerda la estructura while.

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

} while (number > 0);