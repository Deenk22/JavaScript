// Se pide representar un algoritmo que nos calcule 
// la suma de los N primeros números naturales. N se leerá por teclado. 


const prompt = require("prompt-sync")({ sigint: true });
let numero = Number(prompt("Escribe el valor numérico: "));


sumaPrimerosNumeros = (numero) => {
    let suma = 0;
    for (let i = 0; i <= numero; i++){
        suma += i;
    }
    return suma;
}
console.log(sumaPrimerosNumeros(numero));