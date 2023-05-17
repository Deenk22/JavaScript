// Ejercicio 7
// Construir un algoritmo que dado el coste de un artículo
// vendido y la cantidad de dinero entregado, calcule e
// imprima el cambio que se debe entregar al cliente.

const prompt = require("prompt-sync")();




let dineroEntregado;
let costeArticulo;


do {

  costeArticulo = Number(prompt("Introduce el coste del artículo: "));
  dineroEntregado = Number(prompt("Introduce el pago: "));


if (costeArticulo > dineroEntregado){
  console.log(`Lo siento pero te falta por pagar ${costeArticulo-dineroEntregado}`);
} else {
  console.log(`Su cambio ${dineroEntregado-costeArticulo} Gracias por su compra!`);
}

} while (dineroEntregado < costeArticulo );



