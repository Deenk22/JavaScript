// Algoritmo que lea números enteros hasta teclear 0 
// y nos muestre el máximo, el mínimo y la media de
// todos ellos. Piensa como debemos inicializar las variables.

const prompt = require("prompt-sync")({ sigint: true });



const miMatriz = [];
let numero; 
let sumaTotal = 0;


do{

        numero = Number(prompt("Inserta el número: "));

        if(isNaN(numero)){
        console.log(`Lo siento, has introducido un valor incorrecto!`);
        } else if (numero){
        miMatriz.push(numero);
        sumaTotal += numero;
        } 
            
} while (numero !== 0);

miMatriz.sort((a,b) => {
        return a - b
})

let media = sumaTotal / miMatriz.length;

console.log(`Elementos que forman miMatriz. Ordenados de menor a mayor; ${miMatriz}`);
console.log(`El valor minimo es ${Math.min(...miMatriz)}, el valor maximo es ${Math.max(...miMatriz)} y la media es ${media.toFixed(2)}`);







