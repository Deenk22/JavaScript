// Desarrollar un algoritmo que imprima la tabla de multiplicación del número N 
// introducido por teclado.
// Para N = 13, el output sería: 13 X 1 = 13 13 X 2 = 26 ... 13 X 10 = 130


const prompt = require("prompt-sync")({ sigint: true });

let numero;

do {

    numero = Number(prompt("¿Qué número deseas eligir?: "));
    tablaMultiplicar(numero);

if (!numero){
    console.log(`Has introducido un valor incorrecto, vuelve a intentarlo!!`);
}

} while (!numero);


function tablaMultiplicar(numero){

    for ( let i = 0; i < 10 + 1; i++){
        if (!isNaN(numero)){
        console.log(`El resultado de ${numero} x ${i} = ${numero * i}`);
        } 
     
    }
 
};


