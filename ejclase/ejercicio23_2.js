// Leer tres números que denoten una fecha (día, mes, año). 
// Comprobar que es una fecha válida. Si no
// es válida escribir un mensaje de error y volver a pedir los números. 
// Si es válida escribir la fecha
// cambiando el número del mes por su nombre. Ej. 
// si se introduce 1 2 2006, se deberá imprimir “1 de
// febrero de 2006”. El año debe ser mayor que 0. (Recuerda la estructura switch).


const prompt = require("prompt-sync")({ sigint: true });
let dia = Number(prompt("Introduce el día: "));
let mes = Number(prompt("Introduce el mes: "));
let año = Number(prompt("Introduce el año: "));

const fecha = new Date(año, mes, dia);

while (
    dia <= 0 ||
    dia > 31 ||
    mes <= 0 ||
    mes > 12 ||
    año < 1970 ||
    año > 2023 ||
    (dia === 29 && mes === 2 && año % 4 !== 0)
) {
    console.log(`error, comprueba la fecha, has introducido valores incorrectos`);
    dia = Number(prompt("Introduce el día: "));
    mes = Number(prompt("Introduce el mes: "));
    año = Number(prompt("Introduce el año: "));
}

let monthName = "";

switch (mes) {
    case 1 : 
    monthName = "Enero";
    break;
    case 2 :
    monthName = "Febrero";
    break;
    case 3 :
    monthName = "Marzo";
    break;
    case 4 :
    monthName = "Abril";
    break;
    case 5 : 
    monthName = "Mayo";
    break; 
    case 6 : 
    monthName = "Junio";
    break;
    case 7 :
    monthName = "Julio";
    break;
    case 8:
    monthName = "Agosto";
    break;
    case 9:
    monthName = "Septiembre";
    break;
    case 10:
    monthName = "Octubre";
    break;
    case 11:
    monthName = "Noviembre";
    break;
    case 12:
    monthName = "Diciembre";
    break;

    default:
    monthName = "invalid"
    break;
}

console.log(`${dia} de ${monthName} de ${año}`);


