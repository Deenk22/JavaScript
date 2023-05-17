// Ejercicio 16
// Desarrollar un algoritmo que nos calcule el cuadrado de
// los 9 primeros números naturales.
//let count = 1;

const prompt = require("prompt-sync")();

let N;

do { 
  N = Number(prompt("Introduce un número: "));
  for (let i = 1; i <= N; i++){ 
    console.log(`El resultado es ${i**2}`);
  }
} while (N);


