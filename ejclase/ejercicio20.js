//Teniendo en cuenta que la clave es “eureka”, 
//escribir un algoritmo que nos pida una clave. Solo
//tenemos 3 intentos para acertar, 
//si fallamos los 3 intentos nos mostrara un mensaje indicándonos
//que hemos agotado esos 3 intentos. Si acertamos la clave, 
//saldremos directamente del programa.

const prompt = require("prompt-sync")({ sigint: true });

let intentos = 3;

do {

    let contraseña = String(prompt("Escribe tu contraseña: "));

    if (contraseña === "eureka"){
        console.log(`Contraseña correcta!! ${contraseña}!! Lo has logrado!!`);
        break;
    } else {
        intentos--
        console.log(`Contraseña incorrecta, Te quedan ${intentos} intentos.`);
    }

} while (intentos > 0);

if (intentos === 0){
    console.log(`Has agotado los 3 intentos, llama al 22641.`);
}





