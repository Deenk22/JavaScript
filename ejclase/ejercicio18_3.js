// Se pide representar el algoritmo que nos calcule 
// la suma de los N primeros números pares a partir de
// N. Es decir, si insertamos un 5, nos haga la suma de 6+8+10+12+14.

const prompt = require("prompt-sync")({ sigint: true });
let N = Number(prompt("Escribe el valor numérico: "));



// Calcular suma de los primeros 10 números naturales a partir de 10.
// Si insertamos el numero 10 > seria la suma de los 10 primeros numeros naturales 
// pares!!

let miMatriz = []; // He creado la Matriz para enseñar todos los numeros que hemos capturado.
let suma = 0;

for (let i = N; i < N*2 + N; i++){
    // Explicando línea 17 >>> Iniciamos i con el valor introducido por teclado de N
    // supongamos que N vale 10 / pasamos a la condición de finalización del bucle, 
    // donde estamos diciendo que i, Que vale N, es decir, 10, es menor que N*2 + N, es decir,
    // 10 x 2 + 10, obtendríamos como resultado 30 / 10 < 30 >>> así quedaría la segunda parte del bucle.
    // Mi lógica aqui, ha sido la siguiente >>> Si no hubiéramos introducido en la condición + N
    // solo obtendríamos 5 valores positivos entre 10 y 20... al sumarle el numero que inicializa el bucle 
    // a la condición, obtenemos de margen el doble de números pares. no se si estoy explicandolo bien
    // pero funciona!! y me ha parecido interesante!!

    // Podría poner N*3 pero me ha gustado más N*2 + N jaja!!
    
    if (i %2 === 0){ // Si al dividirlo entre 2 el resto es 0.
        suma += i; // Sumo todas las iteraciones de i (Que es N, recuerdalo) hasta llegar a N*2 + N.
        miMatriz.push(i); 
    }
}

console.log(`Estos son los ${N} numeros pares a partir de ${N} = ${miMatriz}`);
console.log(`La suma total entre ellos es ${suma}`);
