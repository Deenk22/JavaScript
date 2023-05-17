const prompt = require("prompt-sync")({ sigint: true });

let N = Number(prompt("Valor numérico: "));


//Version Antonio >>>

let number; 
let suma = 0;
let lengthNumber = 0;

do {

    number = Number(prompt("Valor numérico: "));
    if(number){
        suma += number; 
        lengthNumber ++;
    }


} while (number >= 0);

if (lengthNumber) console.log(`El promedio es ${suma / lengthNumber}`);


























































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



