//Algoritmo que lea dos números, calcule y escriba el valor de su suma, resta, producto y división.

const prompt = require("prompt-sync")();

const numero1 = Number(prompt("Introduce el primer numero: "));
const numero2 = Number(prompt("Introduce el segundo numero: "));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

console.log(`El resultado de la suma es ${numero1 + numero2}`);
console.log(`El resultado de la resta es ${numero1 - numero2}`);
console.log(`El resultado de la potencia es ${numero1 * numero2}`);
console.log(`El resultado de la division es ${numero1 / numero2}`);

