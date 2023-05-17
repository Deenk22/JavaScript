// Desarrollar un timer o temporizador. La cantidad de segundos 
// con la que se quiere hacer la cuenta atrás se introducirá por teclado.
// Cuando llegue al final, se imprimirá "¡¡Ring!!“ y el programa acabará.
// • Investigar cómo hacer los intervalos en JS


const prompt = require("prompt-sync")({ sigint: true });

let segundos = Number(prompt("Escribe el valor numérico: "));

let intervalId = setInterval(() => { // Creamos la funcion setInterval.
    
    if (segundos >= 0) { // Creamos la condición (Cuenta atrás).

      console.log(segundos); // Console.log para que vaya imprimiendo cada segundo.
      segundos--; // Y después de imprimir, restamos hasta llegar a lo establecido en la condicion IF.

    } else { // Cuando deje de cumplirse la condición imprimira el mensaje de "¡¡Ring!!".

      console.log("¡¡Ring!!");
      clearInterval(intervalId); // Con esto detenemos la ejecucion del intervalo 
      // que se estableció previamente (let intervalId).

    }

  }, 1000); // Cerramos llaves , y antes de cerrar la función setInterval, especificamos cada cuanto tiempo
  // debe repetirse la función, en este caso, 1000 msg o lo que es igual, 1 segundo.




