//Teniendo en cuenta que la clave es “eureka”, 
//escribir un algoritmo que nos pida una clave. Solo
//tenemos 3 intentos para acertar, 
//si fallamos los 3 intentos nos mostrara un mensaje indicándonos
//que hemos agotado esos 3 intentos. Si acertamos la clave, 
//saldremos directamente del programa.




// Clave es eureka!
// algoritmo que nos pida clave
// Solo tenemos 3 intentos.
// Si agotamos los 3 intentos, mensaje de error 
// si acertamos la clave saldremos directamente del programa


const prompt = require("prompt-sync")({ sigint: true });




let contraseña;
let intentos = 3;

do {

    contraseña = (prompt("Introduce la contraseña: "));

    if (!isNaN(contraseña)){
        console.log(`No aceptamos valores numéricos.`);
    } else if (contraseña !== "eureka"){
        for (let i = 0; i < intentos; i++){
            intentos -= i;
        }
        console.log(`Se inicia la cuenta atrás! te quedan ${intentos}! ten cuidado!`);
    } 

} while (contraseña !== "eureka");

console.log(`${contraseña}!! Lo has logrado!!.`);









