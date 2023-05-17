// Ejercicio 4
// Diseñar un algoritmo que pida por teclado tres números;
// si el primero es negativo, debe imprimir el producto de
// los tres y si no lo es, imprimirá la suma.

const prompt = require("prompt-sync")();

let numero1 = Number(prompt("Introduce el número 1: "));
let numero2 = Number(prompt("Introduce el número 2: "));
let numero3 = Number(prompt("Introduce el número 3: "));


// Podriamos utilizar ISNAN pero he ido algo rápido!

if (numero1 < 0){
  console.log(`La potencia de los 3 es ${numero1 * numero2 * numero3}`);
} else if (numero1 > 0) {
  console.log(`La suma de los 3 es ${numero1 + numero2 + numero3}`);
};



