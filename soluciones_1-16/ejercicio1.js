// Ejercicio 1
// Dadas dos variables numéricas A y B, que el usuario debe teclear,
// se pide realizar un algoritmo que intercambie los valores de ambas
// variables y muestre cuánto valen al final cada una de ellas (recuerda la asignación).
const prompt = require("prompt-sync")({ sigint: true });

let a = prompt("Introduce la variable A: ");
let b = prompt("Introduce la variable B: ");


let o = a;
a = b;
b = o;

console.log(a);
console.log(b);