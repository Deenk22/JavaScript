// Dada una secuencia de longitud indefinida de números leídos por teclado, 
// que acabe con un –1, 
// por ejemplo: 5,3,0,2,4,4,0,0,2,3,6,0,......,-1; 
// Realizar el algoritmo que calcule la media aritmética.
// Suponemos que el usuario no insertará número negativos.




const prompt = require("prompt-sync")({ sigint: true });



let miMatriz = [];
let numeros;
let sumaTotal = 0;


do {
    numeros = Number(prompt("Inserta los números: "));

    if (isNaN(numeros)){
        console.log(`Solo aceptamos números!!`);
    } else {
        miMatriz.push(numeros)
        sumaTotal += numeros
    }

} while (numeros !== -1);


mediaAritmetica = (sumaTotal) => {   
    let mediaAritmetica = sumaTotal/miMatriz.length;
    console.log(`La media aritmética de estos ${miMatriz} es de ${mediaAritmetica} `);
}

mediaAritmetica(sumaTotal);






























































// Media aritmética = Suma total / numero de elementos que realizan la suma (sumados)

//let secuencia = Math.floor(Math.random() * 200 -1);

//let secuenciaNum = [];
//secuenciaNum.push(secuencia);


//function calculo (desde) {
//    for (let i = desde; i <= 800 && secuenciaNum.length < 10; i++){
//        if (i %2 !== 0){
//            secuenciaNum.push(i);
//        }
//    }
//    
//    return secuenciaNum
//}

//console.log(calculo(160));

//let mAritmetica = 0; 

//    for ( let i = 0; i < secuenciaNum.length; i++ ){
//        mAritmetica += secuenciaNum[i] / secuenciaNum.length;
        
//    }

//let resultado = mAritmetica;

//console.log(resultado);    



