// Ejercicio 9
// Construir un algoritmo que dado como datos 5 calificaciones de un alumno imprima
// el promedio y la palabra “aprobado” si el alumno tiene un promedio mayor o igual
// que 5, y la palabra “no aprobado” en caso contrario.

const prompt = require("prompt-sync")();

const nota1 = Number(prompt("Introduce calificación 1: "));
const nota2 = Number(prompt("Introduce calificación 2: "));
const nota3 = Number(prompt("Introduce calificación 3: "));
const nota4 = Number(prompt("Introduce calificación 4: "));
const nota5 = Number(prompt("Introduce calificación 5: "));

// promedio de 5 notas 
// promedio >= 5 > y la palabra aprobado 
// no aprobado en caso contrario

const notas = nota1 + nota2 + nota3 + nota4 + nota5;

let promedio = notas / 5;


calcularPromedio = () => {

  if (promedio >= 5){
    console.log(`Enhorabuena! tu promedio es de ${promedio}. Has aprobado!`);
  } else {
    console.log(`Lo siento pero has suspendido, animate! y vuelve con mas fuerza.`);
  }

  return promedio;

}

console.log(calcularPromedio());

// La funcion debería estar enfocada en el calculo del promedio.
// Le daremos una vuelta mas adelante!!

