// Algoritmo que visualice la cuenta de los números 
// que son múltiplos de 2 o de 3 que hay entre 1 y 100.


const prompt = require("prompt-sync")({ sigint: true });
let numero = Number(prompt("Introduce un valor numérico: "));


// Recorrer uno a uno los numeros entre 1 y 100
// cuantos multiplos de 2 hay
// cuantos multiplos de 3

let multiplos2 = 0;
let multiplos3 = 0;

if (isNaN(numero)){
    console.log(`Solo aceptamos valores numéricos`);
}

for (let i = 1; i <= numero; i ++){

    if (i %2 === 0){
        multiplos2++;
    } 
    if (i %3 === 0){
        multiplos3++;
    }
}

console.log(`Los multiplos de 2 son ${multiplos2} y los multiplos de 3 son ${multiplos3}`);