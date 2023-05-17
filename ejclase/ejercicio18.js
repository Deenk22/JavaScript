// Se pide representar el algoritmo que nos calcule 
// la suma de los N primeros números pares a partir de
// N. Es decir, si insertamos un 5, nos haga la suma de 6+8+10+12+14.

const prompt = require("prompt-sync")({ sigint: true });

let N = Number(prompt("Escribe el valor númerico: "));


const longArray = [];

bucleFor = (N) => {
   let suma = 0;
   for ( let i = N; i < 200 && longArray.length < 5; i++){
        if (i %2 === 0){
            longArray.push(i);
            suma += i;
        }
    }

    return suma;

}

console.log(bucleFor(N));



