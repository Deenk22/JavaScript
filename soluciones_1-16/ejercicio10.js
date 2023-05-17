// Ejercicio 10
// Construir un algoritmo que dado la categoría y sueldo de
// un trabajador calcule el aumento de sueldo correspondiente
// teniendo en cuenta la siguiente tabla. Imprimir la categoría
// del trabajador y su nuevo sueldo.

const prompt = require("prompt-sync")();

let sueldo  = Number(prompt("Introduce el sueldo "));
const categoria = Number(prompt("Introduce la categoria (1 al 4) "));


//// Dado la categoria de un trabajador calcule el aumento de sueldo.
// Imprimir la categoria del trabajador y nuevo sueldo.


// CategoríaIncremento
// 1         15%
// 2         10%
// 3         6%
// 4         3%




calculoIncremento = () => {

    let incremento; 

    if (categoria === 1){
        incremento = sueldo * 0.15;
        console.log(`Su incremento es de ${incremento}`);
    } else if (categoria === 2){
        incremento = sueldo * 0.10;
        console.log(`Su incremento es de ${incremento}`);
    } else if (categoria === 3){
        incremento = sueldo * 0.06;
        console.log(`su incremento es de ${incremento}`);
    } else if (categoria === 4){
        incremento = sueldo * 0.03;
        console.log(`Su incremento es de ${incremento}`);
    }

    return incremento + sueldo;


}

console.log(`Su nuevo sueldo es de ${calculoIncremento()}`);



