// Ejercicio 12
// Construir un diagrama de flujo que te permita calcular la temperatura
// teniendo en cuenta el numero de sonidos emitidos por un grillo en un
// minuto, es una funcion que depende de la temperatura. Como resultado
// de esto, es posible determinar el nivel de temperatura haciendo uso
// de un grillo como termometro. La formula es:

// T = N / 4 + 40, donde T es la temperatura en grados
// centigrados y N es el numero de sonidos emitidos por segundo.

// Como el aparato para medir los sonidos puede fallar, tener en cuenta que si
// el numero de sonidos es 0, es un error y debe de imprimir error.

const prompt = require("prompt-sync")();

let numberOfSounds;

calcularTemperatura = (numberOfSounds) => {

    let temperatura;

    do {
        numberOfSounds = Number(prompt("Activa el grillo!: "));

        if (isNaN(numberOfSounds)){
            console.log(`Los grillos no hablan! Solo aceptamos números! vuelve a empezar!`);
            
        } else {
            temperatura = numberOfSounds / 4 + 40;
        }

    } while (!numberOfSounds);

return temperatura;

}

let resultado = calcularTemperatura(numberOfSounds);


console.log(`La temperatura es de  ${resultado} º`);



