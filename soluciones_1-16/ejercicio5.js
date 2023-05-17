// Ejercicio 5
// Construir algoritmo tal que con un número entero como
// entrada, determine e imprima si es positivo, negativo o nulo.

const prompt = require("prompt-sync")();

let numero = Number(prompt("Introduce un número: "));

if (isNaN(numero)){
  console.log(`Solo aceptamos números`);
} else if (numero > 0){
  console.log(`El argumento es positivo`);
} else if (numero < 0){
  console.log(`El argumento es negativo`);
}; 

