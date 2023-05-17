// Ejercicio 8
// Dado el sueldo de un trabajador, diseña un algoritmo
// que aplique un incremento de sueldo del 15% si el sueldo
// es inferior a 1000€. Imprimir el nuevo sueldo.

const prompt = require("prompt-sync")();


let sueldo;

do {

  sueldo = Number(prompt("Introduce el sueldo: "));

if (sueldo < 1000){
  console.log(`tu nuevo sueldo es ${sueldo + 0.15}`);
} else{
  console.log(`No seas codicioso! intentalo de nuevo.`);
}

} while (sueldo > 1000);
