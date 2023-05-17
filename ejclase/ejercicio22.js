// Algoritmo que visualice la cuenta de los números 
// que son múltiplos de 2 o de 3 que hay entre 1 y 100.


const prompt = require("prompt-sync")({ sigint: true });
let N = Number(prompt("¿Quieres saber la respuesta? pulsa intro: "));


let contadorMultiplo2 = 0; 
let contadorMultiplo3 = 0; 


for (let i = 1; i <= 100; i++){

        if (i %2 === 0){
            contadorMultiplo2++            
       }     

       if (i %3 === 0){
           contadorMultiplo3++
       } 
        
}

console.log(`${contadorMultiplo2} números son multiplo de 2 entre 1 y el 100.`);
console.log(`${contadorMultiplo3} números son multiplo de 3 entre 1 y el 100.`);

// Resolver este problema utilizando funciones y como máximo 4 líneas.

//const prompt = require("prompt-sync")({ sigint: true });
//let N = Number(prompt("¿Quieres saber la respuesta? pulsa intro: "));


//let contadorMultiplos = 0; 

//for (let i = 1; i <= 100; i++){

//        if (i %2 || i %3 === 0){
//            contadorMultiplos++            
//       }   
       
//}

//console.log(`${contadorMultiplos} Son multiplos de 2 o de 3`);


// Por lo tanto, para obtener la cantidad de números múltiplos de 2 o de 3 
// sin contar los números que son múltiplos de ambos, 
// podemos utilizar el principio de inclusión-exclusión. 
// Es decir, sumamos la cantidad de números múltiplos de 2
// y la cantidad de números múltiplos de 3, y luego restamos 
// la cantidad de números múltiplos de 6 
// (que son los números que son múltiplos tanto de 2 como de 3) 
// para obtener el resultado correcto.