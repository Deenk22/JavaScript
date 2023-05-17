// Se pide representar el algoritmo que nos calcule 
// la suma de los N primeros números pares a partir de
// N. Es decir, si insertamos un 5, nos haga la suma de 6+8+10+12+14.

const prompt = require("prompt-sync")({ sigint: true });
let N = Number(prompt("Escribe el valor numérico: "));



// Calcular suma de los primeros 10 números naturales a partir de 10.
// Si insertamos el numero 10 > seria la suma de los 20 primeros numeros naturales 
// pares!!

calculoPrimerosNumeros = (N) => {

    let  miMatriz = [];
    let sumaTotal = 0;

    for (let i = N; i < N*2 + N; i++){

    if (i % 2 === 0){
        miMatriz.push(i);
        sumaTotal += i;
        }
        
    }

    console.log(`Los ${N} primeros números naturales, pares!!! son ${miMatriz}`);
    console.log(`La suma total entre ellos es de ${sumaTotal}`);
}

calculoPrimerosNumeros(N);