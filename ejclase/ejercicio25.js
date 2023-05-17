// . Algoritmo que lea un número entero (lado) y a partir de él 
// cree un cuadrado de A y B con ese tamaño.
// Las A sólo se verán en el borde del cuadrado y las B en el interior.
// Ejemplo, para lado = 4 escribiría:
// A AA A
// A BB A
// A BB A
// A AA A


// En este ejercicio no entendí como se generaba ese cuadrado, voy a revisar el código de Antonio
// y voy a intentar recrearlo para entender su funcionamiento o su proposito.


const prompt = require("prompt-sync")({ sigint: true });
const max = Number(prompt("Tamaño del lado:"));

for (let i = 0; i < max; i++){
    console.log(`${imprimirLinea(i)}`); // El código de Antonio tenía un fallo
    // le asignabamos como parametro o valor a imprimirLinea > (i) por lo tanto,
    // en cada iteración se imprimía undefined! y despueés el resultado. En el clg
    // hemos introducido la función imprimirLinea() que toma como parámetro numLinea
    // NumLinea me ha dejado un poco descolocado... con ayuda del CHATGPT... porque
    // no podía más!! he deducido que numLinea realmente no tenía ningún proposito..
    // y queda mas reconocible o entendible cambiar numLinea x i (bucle For).
}

function imprimirLinea (i){

    if (i === 0 || i === max - 1) {
        return rellenarLinea("a", "a");
    } else {
        return rellenarLinea("a", "b");
    }
}

function rellenarLinea (extremo, central){

    let linea = "";

    for (let i = 0; i < max; i++){

        if (i === 0 || i === max - 1){
            linea += extremo;
        } else {
            linea += central;
        }
    }

    return linea;

};

