/**
 * Algoritmo que lea dos números y nos diga cuál de ellos es mayor o si son iguales 
 * (recuerda usar la estructura condicional if).
    Ahora con 3 números diferentes.
 */
const prompt = require("prompt-sync")();

const number = Number(prompt("Introduce el primer numero: "));
const number2 = Number(prompt("Introduce el segundo numero: "));





if (number > number2){
  console.log(`${number} Número 1 es mayor!`);
}else if (number2 > number){
  console.log(`${number2} Número 2 es mayor!`);
}else if (number === number2){
  console.log(`Son iguales!`);
} else {
isNaN(number || number2)
console.log(`Has introducido valores incorrectos, vuelve a empezar`);
};



