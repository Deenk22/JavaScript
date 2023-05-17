// Algoritmo que lea números enteros hasta teclear 0 
// y nos muestre el máximo, el mínimo y la media de
// todos ellos. Piensa como debemos inicializar las variables.

//const prompt = require("prompt-sync")({ sigint: true });


// Version 2 >>> Acepta valores decimales... 

//let number;
//const miArray = [];
//let suma = 0;

//do {

//        number = Number(prompt("Valor numérico: "));

//        if (number > 0){
//        miArray.push(number);   
//        suma += number;
//        } 

//} while (number > 0);

//let resultado = suma / miArray.length;

//console.log(Math.min(...miArray));
//console.log(Math.max(...miArray));

//console.log(resultado);


// Version 2 >>> No aceptamos valores decimales.


const prompt = require("prompt-sync")({ sigint: true });


let number;
const miArray = [];
let suma = 0;


do {

        number = Number(prompt("Valor numérico: "));

        if (number %1 === 0 && number > 0){
                miArray.push(number);
                suma += number;
        } else {
                console.log(`Solo aceptamos numeros enteros`);
        }
                
} while (number > 0);

let resultado = suma / miArray.length;



console.log(Math.min(...miArray));
console.log(Math.max(...miArray));

console.log(resultado);

