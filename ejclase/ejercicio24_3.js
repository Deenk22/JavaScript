// Ejercicio 24.

// Calcular las calificaciones de un grupo de alumnos. 
// La nota final de cada alumno se calcula según el
// siguiente criterio: la parte práctica vale el 10%; 
// la parte de problemas vale el 50% y la parte teórica el
// 40%. El algoritmo leerá el nombre del alumno, las tres notas, 
// escribirá el resultado y volverá a pedir
// los datos del siguiente alumno hasta que el nombre sea una cadena vacía. 
// Las notas deben estar
// entre 0 y 10. Si no lo están no imprimirá las notas, 
// mostrará un mensaje de error y volverá a pedir otro alumno.

// Guia de Antonio >>

//do {
    // capturar nombre de alumno
    // calcular media de notas
//  } while (alumno);

//     function mediaNotas() {
    // bucle por las notas pidiendo la nota
    // for 1 a 3
    // calcular media
//  }function capturarNota() {
    // pedir nota
    // validar nota
    // calcular peso
//  }


const prompt = require("prompt-sync")({ sigint: true });

const asignaturas = [

{titulo : "prácticas", peso: 0.1},
{titulo : "problemas", peso: 0.5},
{titulo : "teórico", peso: 0.4},

];

let alumno; 

do {

    alumno = prompt("Nombre del alumno: ");
    if (alumno){
        const media = mediaNotas(asignaturas);
        console.log(`La media de ${alumno} es de ${media.toFixed(2)}`);
    }

} while (alumno);

function mediaNotas (asignaturas) {

    let resultado = 0; 
    for (const asignatura of asignaturas){
        resultado += pedirNotas(asignatura);
    }

    return resultado;

}

function pedirNotas(asignatura) {
    let nota;
    do{

        nota = Number(prompt("Introduce la nota: "));
        if (nota >= 0 && nota <= 10){
            nota *= asignatura.peso;
        } else {
            console.log(`Introduzca valores entre 1 y 10`);
        }

    } while (isNaN(nota) || nota < 0 || nota > 10);

    return nota;

}
  
      







