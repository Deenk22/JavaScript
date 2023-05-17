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


const prompt = require("prompt-sync")({ sigint: true });

const asignaturas = [
{nombre: "Práctica", peso: 0.1},
{nombre: "Problemas", peso: 0.5},
{nombre: "Teórica", peso: 0.4}
];

let alumno; 

do {

    alumno = prompt("Nombre del alumno: ");
    if (alumno){
        console.log(`La media del alumno ${alumno} es de ${mediaNotas(asignaturas)} `);
    }

} while (alumno != "");
    
    
function mediaNotas (asignaturas) {
    let mediaNotas = 0;
    for (const asignatura of asignaturas){ // Tenia mis dudas en cuanto a la constante asignatura. Con ella
        // recorremos el array de objetos pero, mi duda era si al utilizar esta función o al salir de ella...
        // esta constante desapareceria o seguiria viva!! al parecer sigue viva porque la utilizamos en otra función.
        mediaNotas += pedirNota(asignatura);
    }

    return mediaNotas.toFixed(2);

};

function pedirNota (asignatura,notaFinal) {

    let nota = 0;

    do{

        nota = Number(prompt("Introduce la nota: "));
        if (nota >= 0 && nota <= 10){
            nota *= asignatura.peso;
        } else {
            console.log(`La nota debe estar comprendida entre 0 y 10`);
        }

    } while (nota < 0 || nota > 10);

    console.log(`La media del alumno ${alumno} por asignatura = ${nota.toFixed(2)}`);
    return nota;
    ;

};








 
