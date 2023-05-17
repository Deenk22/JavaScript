// Ejercicio 11
// En una tienda efectúan un descuento a los clientes dependiendo
// de la cantidad de la compra. El descuento se basa en:

// Si el monto es menor que 500€ -> No hay descuento
// Si el monto está comprendido entre 500€ y 1.000€ inclusive –> 5% descuento
// Si el monto está entre 1.000€ y 7.000€ inclusive -> 10% descuento
// Si el monto está entre 7.000€ y 15.000€ inclusive -> 20% descuento
// Más de 15.000€ -> 25% descuento

// Imprimir (Escribir) el precio final.

const prompt = require("prompt-sync")();

const amount = Number(prompt("Introduce el importe: "));

/* if (amount < 500) {
    console.log("No se le ha aplicado descuento");
} else if (amount <= 1000) {
    console.log("Tienes un 5% de descuento. El total a pagar es: ", amount);
} else if (amount <= 7000) {
    console.log("Tienes un 10% de descuento. El total a pagar es: ", amount;;
} else if (amount <= 15000) {
    console.log("Tienes un 20% de descuento. El total a pagar es: ", amount ;* 0.8);
} else {
    console.log("Tienes un 25% de descuento. El total a pagar es: ", amount * 0.75);
} */

// Descuento dependiendo de la cuenta o gasto.


calcularDescuento = (amount) => { // Le pasamos como valor o argumento amount.

    let descuento; // Trabajaremos con los descuentos, es aconsejable (en este caso) declarar una variable vacía.

    if (amount < 500){
        descuento = 0;
    } else if (amount <= 1000){
        descuento = 0.05; // Dentro de cada sentencia IF aplicamos el descuento correspondiente.
    } else if (amount <= 7000){
        descuento = 0.10;
    } else if (amount <= 15000){
        descuento = 0.20;
    } else {
        descuento = 0.25;
    }

    return descuento; // Que nos devuelve? pues el descuento.

}


calcularPrecioFinal = (amount, descuento) => { // Con esta funcion calculamos el precio final, multiplicando el amount
    // por el descuento (Lee mas abajo para comprender esa sintaxis <(1 - descuento)>)
    let totalAmount = amount * (1 - descuento); // Esta operacion de (1 - descuento) > 
    // Se refiere a lo siguiente...
    // Cuando queremos aplicarle un descuento a un articulo, si este tiene un 25% de descuento, por ejemplo,
     // deberemos multiplicar por el restante, hasta llegar a 100, es decir, amount * 0.75% 
     // asi conseguiremos el amount con el % incluido, es decir, el precio final.
     // Cuando en nuestro codigo operamos con el 0.05 o 0.10 o 0.20 % .. 
     // deberemos utilizar la operacion del princpio (1 - descuento) donde 1 equivale al 100 % y al restar
     // por el descuento, por ejemplo, 100 % - 0.05 % = 0.95% > lo que quiere decir que, 
     // estariamos multiplicando por 0.95 % lo que nos daria como resultado el precio final!!. 
    return totalAmount; 
}

let descuento = calcularDescuento(amount); // Esto es importante. 
let totalAmount = calcularPrecioFinal(amount, descuento); // Esto es importante. 

if (descuento === 0){ // Aqui simplemente declaramos que si descuento es igual a 0 no tienes descuento..
    // si miramos la primera sentencia IF dentro de nuestra funcion calcularDescuento (), es por eso!
    console.log(`Lo siento, no tienes descuento! total a pagar ${amount} Euros`);
} else { // Simplemente imprimimos descuento y totalAmount (Ultimas variables declaradas con sus 
    // respectivas funciones)
    console.log(`Tienes un descuento del ${descuento * 100}% y el precio final es de ${totalAmount} Euros`);
} // ${descuento * 100} Multiplicamos * 100 para devolver a su posicion original de salida el 0.1%, es decir,
  // 0.1 % * 100 = 10%.

  // Well done!