// Ejercicio 2
// Algoritmo que lea dos números, calcule y escriba el valor de su suma, resta, producto y división.

const prompt = require("prompt-sync")({ sigint: true });

let A = Number(prompt("Introduce la variable A: "));
let B = Number(prompt("Introduce la variable B: "));

if (isNaN(A)){
  console.log(`Has introducido valores incorrectos`);
} else if (isNaN(B)){
  console.log(`Has introducido valores incorrectos`);
} else {
  console.log(`Suma ${A + B}`);
  console.log(`Resta ${A - B}`);
  console.log(`Potencia ${A * B}`);
  console.log(`Division ${A / B}`);
};

