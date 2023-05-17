// Se pide representar un algoritmo que nos calcule 
// la suma de los N primeros números naturales. N se leerá por teclado. 


const prompt = require("prompt-sync")({ sigint: true });
let N = Number(prompt("Escribe el valor númerico: "));

// SIN FUNCION >>>


//let suma = 0;
//for (let i = 1; i <= N; i++){
//   suma += i;
//}
//console.log(suma);


// FUNCION SIMPLE >>>


//function bucleFor(suma){   
//    suma = 0;
//    for (let i = 1; i <= N; i++){
//        suma +=i;
//    }
    
//    return suma;
//}

//console.log(bucleFor(N));

// FUNCION FLECHA >>> ;  


//const bucleFor = () => {
    
//    suma = 0;
//    for (let i = 1; i <= N; i++){
//    suma +=i;
//    }
    
//     return suma;       

//}

//console.log(bucleFor(N));


// Aqui declaramos un numero N random, que se genere desde el 1 hasta el 150.
// Se suman todos ellos.

//let N = Math.floor(Math.random() * 150 + 1)

//function bucleFor(){
    
//    let suma = 0;
//    for (let i = 0; i <= N; i++){
//        suma +=i;
//    }
    
//    return suma;
//}

//console.log(bucleFor(N));