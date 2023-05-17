// Dada una secuencia de longitud indefinida de números leídos por teclado, 
// que acabe con un –1, 
// por ejemplo: 5,3,0,2,4,4,0,0,2,3,6,0,......,-1; 
// Realizar el algoritmo que calcule la media aritmética.
// Suponemos que el usuario no insertará número negativos.




const prompt = require("prompt-sync")({ sigint: true });



let sumaTotal = 0;
let contador = 0;
let N;

do {

    N = Number(prompt("Escribe el valor numérico: "));
    if (N){
        contador++
        sumaTotal += N;
    } else {
        console.log(`Solo aceptamos valores numéricos`);
    }

} while (N !== -1);

mediaAritmetica = (sumaTotal,contador) => {
    let media = sumaTotal / contador;
    return media;
}

let media = mediaAritmetica(sumaTotal,contador);

console.log(`La media aritmetica de ${sumaTotal} es de ${media}`);












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



