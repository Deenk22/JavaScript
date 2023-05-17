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
let alumno;

do{

    alumno = prompt("Nombre del alumno: ");
    if (alumno){
        pedirNota()
    }


    
} while (alumno);


function pedirNota (nota) {
    
    for (let i = 0; i < 3; i++){
        let nota = Number(prompt("Escribe la nota: "));
        if (nota < 0 || nota > 10){
            console.log(`La nota debe estar comprendida entre 1 y 10, empieza de nuevo`);
            break;
        } 

   }

   return nota;

}

function calcularMedia () {
    
}








