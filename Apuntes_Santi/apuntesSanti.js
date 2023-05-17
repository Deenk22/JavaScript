// FUNCION INLINE ;

const saludar = function (nombre) { // Declaramos una constante = saludar que a su vez es una funcion.
    // con un parámetro NOMBRE.

    return "Hola " + nombre; // Aqui devolvemos un "string " + el parámetro NOMBRE.

} 
console.log(saludar("Santi")); // Al imprimir nuestra función, le asignamos un valor o argumento,
// Es la forma básica de crear una FUNCION INLINE. Cada vez que imprimamos la funcion con un 
// argumento entre los parentesis (que en este caso todo indica a que es un nombre) nos devolvera 
// el return de dicha funcion mas el argumento o valor que le estemos asignando en ese preciso momento.

console.log(saludar("Veronica"));
console.log(saludar("160"));
console.log(saludar("Cocacola")); 

// En este caso siempre le asignamos como valor un string.


// FUNCION ANONIMA ; 

// En este ejemplo, estamos ordenando un array con el metodo .SORT
// junto con una funcion anónima. En este caso, a y b determinan el orden
// ascendente o descendente de los elementos que forman el array.

const array = [6,5,4,9,3,2];
array.sort ( (a,b) => { // Metodo SORT ordena los elementos de una matriz.
    
    return a-b; // a y b determinan el orden ascendente o descendente.
    // Es muy importante > deben declararse mediante un - guión.

});

console.log(array);


// FORMA DE SANTI FUNCION ANONIMA >>> 


const miArray = [600,500,1,23,25,3,1,0,50,41,6,];

array.sort ((ascendente,descendente) => { // Con funcion flecha!!
    return ascendente-descendente; // a-b o podemos asignarle un nombre!
})

console.log(miArray);


// FUNCIONES ARROW O FLECHA >>>

// Aqui hemos simplificado mucho la sintaxis y hemos utilizado OPERADORES TERNARIOS ? Y : 
// En este caso estamos diciendo si el lenguaje es Español (TRUE) Imprime Hola
// Si el valor es FALSE, imprime Hello.

const saludo = lenguage => (lenguage === "Español" ? "Hola" : "Hello");

// Tengo que estudiar mas y comprenderlo mas a fondo esta forma de escribir el código.


// FUNCIONES AUTOEJECUTABLES 

(function (nombre2) { // Las funciones autoejecutables estan envueltas por ( ) como en este ejemplo.
    console.log("Hola " + nombre2); // Dejar un espacio en el string ayuda a la legibilidad del string.
})("Maria e Irene!") // Aqui y entre ( ) escribiriamos el argumento o valor.



// Ejemplos funciones básicas >>>

suma = (a, b) => {

    return a + b;

}

let resultado = (suma(250,260));

console.log(resultado);


// Acumulador y valor actual.


function checkOut(...prices) {
    const total = prices.reduce((acc,curr) => acc + curr)
    // acc > Acumulador, donde iremos guardando. // curr > valor actual.
    console.log(total);

}

checkOut(10,50,20,2,6);


// Añadiendo elementos pares a una Matriz ;


añadiendoElementos = (a,b) => {  // Creamos la función con valores a y b.

    const miMatriz = []; // Creamos una matriz o array vacío.
    for (let i = a; i <= b; i++){ // Creamos un bucle que recorrerá desde el valor a
        // hasta el valor b, suponiendo que el valor a sera mayor que b en todo momento, de lo contrario,
        // no funcionaría. 
        if (i %2 === 0){ // En esta línea de código estamos diciendo que > si el resto de la divisiñon es 0
            // el numero será par y por lo tanto, lo añadira a nuestra matriz, como declaramos justo en la 
            // línea siguiente.
            miMatriz.push(i); // Añadimos cada iteración de i (Si es par...) a nuestra matriz. 
        }
    }

    console.log(miMatriz);

}

// Podríamos añadir como valores a y b > El prompt para que el usuario determine el valor.
añadiendoElementos(2,19); // Llamamos a la función y le asignamos valores tanto a como b.


// Realizar una multiplicación con un bucle for entro de una función ;


operacion = (a = 0, x = 12) =>{ // Creamos la función y añadirmos dos parametros con valores por defecto.
    let resultado; // Creamos una variable de apoyo, para realizar la operacion y poder imprimirlo por consola.
    for (let i = 0; i <= x; i++){ // Creamos un bucle for con la variable i que va iterando hasta llegar 
        // a ser menor o igual al valor de x.
        resultado = i * a; // Realizamos la operacion i * a (ahora mismo estamos multiplicando i 
        // por el parametro de a que tiene un valor por defecto de 0, recuerda que todo lo multiplicado por 0
        // da como resultado > 0)

        // Una forma de imprimir el resultado de la multiplicación bastante interesante!
        // Recuerda que podriamos hacer la operación i * a > dentro del console.log, de esta manera,
        // la variable resultado (línea 122) y la operacion de la línea 125, podríamos eliminarlas.
        if (i !== 5){
            console.log(`${a} x ${i} = ${resultado}`);
        } 
    }
}

operacion(2,10); // Llamamos a la functión y declaramos dos valores tanto a (a) como a (x) 
// son los dos parametros que estan dentro de nuestra función en la línea de código 121.


// Funcion que filtre los multiplos de 3 de una matriz con elementos desde el 1 hasta el 100.
// Utilizaremos un nuevo metodo de los array junto con una funcion 

filtrarelementos = () => { // De la línea 146 a 150, esto ya lo sabemos!
    // Quizas esta función no tiene mucho sentido, porque esta haciendo más de una función... 
    // normalmente las funciones se hacen para poder reutilizar esa parte del código.. y si hacen más de una
    // función, puede llegar a ser un poco lioso en el futuro.
    let miMatriz = [];
    for (let i = 1; i <= 10; i++){
        miMatriz.push(i);
    }

    miMatriz.filter((elemento) => { // Aqui estamos usando un nuevo método de los array FILTER
        // con este método y acompañado de una sentencia IF podremos determinar, como en este caso,
        // que nos filtre solo los números que son multiplos de 3, que cumplan esa condición.
        // elemento = Es cada elemento o cada número que va desde el 1 hasta el 30.
        if(elemento %3 === 0) console.log(elemento);
    })

    console.log(miMatriz);

}


filtrarelementos(); // Llamamos a la función. esta vez sin parametros o sin informacion en ella.


// Sacar la raiz cuadrada de un numero random ; 

let numero = Math.floor(Math.random() *100 ) + 1;
let raiz = Math.sqrt(numero); // Todo es muy sencillo hasta que llegamos al Math.sqrt > Nos calcula 
// la raiz cuadrada del valor que le asignemos. En este caso le asignamos la variable NUMERO
// Que calcula un número al azar entre 1 y 100.
console.log(`La raiz cuadrada de ${numero} es ${raiz}`);      


// Fecha de cumpleaños!


// Date > Nos devuelve la hora, fecha y algo más! jeje justo en el momento que la ejecutamos.
console.log(Date());
// Leer mas sobre esto! > Programa Ya - Ejercicio6 (Ubicación del video).

// En esta función estamos calculando los dias que faltan para mi próximo cumpleaños.

fechaCumple = (a = "04 january 2024") => { // Le estamos asignando un valor por defecto a nuestro parámetro a.
    // que es la fecha de mi próximo cumpleaños.
    let cumple = new Date(a); // Cumple = A la fecha de mi cumpleaños (Recuerda el valor por defecto de a).
    let hoy = new Date(); // Hoy = A la fecha actual, justo cuando la ejecutamos (hora, minutos, segundos, etc)
    // En esta operacion de arriba esta lo interesante e importante!
    // Declaramos una variable diasRestantes, le asignamos un Math.floor para que redondee.
    // y después viene lo importante... el método .getTme > Sirve para obtener la marca de tiempo 
    // en milisegundos de un "objeto fecha" determinado. Este metodo coge como referencia la fecha
    // "1 de enero de 1970" es decir, empieza a contar en MILISEGUNDOS, desde ese punto hasta
    // la fecha que le asignemos, en este caso, cumple (Mi cumple) y hoy. Que estamos haciendo en esa operación
    // estamos restando mi cumple (541684054450 MILISEGUNDOS) - hoy (546845154841 MILISEGUNDOS), esto 
    // nos dará como resultado (en MILISEGUNDOS) el tiempo que falta hasta mi cumpleaños.
    // dividiendolo por (1000 * 60 * 60 * 24) donde 1000 > Sería los MILISEGUNDOS que tiene 1 SEGUNDO /
    // 60 > Sería los SEGUNDOS que tiene 1 MINUTO / 60 > Sería los minutos que tiene 1 HORA / 24 >
    // Sería las horas que tiene un día.

    // Forma de entender esta operación (1000 * 60 * 60 * 24) > Va de menos a mas 24 Horas tiene un día,
    // cuantos días hay en un año 365 > (1000 * 60 * 60 * 24 * 365) y así! ... Bueno, habrá que darle más vueltas!
    let diasRestantes = Math.floor((cumple.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24));

    console.log(diasRestantes);
}

fechaCumple() // Y después de esta gran chapa!!!! imprimimos con console.log > los días que quédan para llegar
// a mi próximo cumpleaños!! Super interesante!!.


// >>>>>> DATO IMPORTANTE RELACIONADO CON EL EJERCICIO NÚMERO DE TELEFONO, PERO CON OBJETOS <<<<<< // 

// Object.values(nombre de la constante o variable que hace referencia al objeto) = ["juan", "Perez", 30]; 
 
const obj = { nombre: "Juan", apellido: "Pérez", edad: 30 }; // Creamos un objeto con sus propiedades y valores.
const separaToString = Object.values(obj).join(' '); // Object.values(obj) Esta expresión devuelve un array
// con los valores del objeto, solo y exclusivamente los valores, como puedes comprobar, no solo hay STRING,
// también tenemos números, que los convertiremos a STRING con JOIN (' '). Es importante saber, que dentro
// de los paréntesis del JOIN (' ') podemos añadir , o + o un punto, lo que creamos oportuno, evidentemente,
// todo esto se escribiria entre las dos ' '.  
console.log(separaToString);


// Hemos creado una función callBack > Pasamos accionFiltrar como parámetro que posteriormente se convierte 
// en una "función dentro de una función" Que se relaciona con la siguiente funcion mediante el argumento.
// Yo personalmente lo asocio mejor así, aunque si le cambiamos el nombre al argumento de "filtro" sigue funcionando.
// Debo seguir investigando!! 

const miMatriz = ["Hola", "Adios", "Santi", "Vamos!", 300, 500, 600, 10, 3, 1];

function filtrado (array, accionFiltrar){ // Creamos la función y le pasamos dos parámetros "array, accionFiltrar" 
// Al activar Quokka podrás darte cuenta que el orden de los parámetros es importante, array es un parámetro local
// de la función que se encuentra en primera posición, cuando la función se ejecuta ese parametro desaparece...
// y al llamar a la función debemos añadir como primer parámetro, nuestra matriz (parametro o variable global)
// Tienes un ejemplo en la línea 261 con un clg.

    const result = []; // Creamos una variable de resultado, donde copiar generar el array filtrado, a Antonio
    // le gusta declararla de esa manera, asi que, le haremos caso! jeje

    for (const item of array){ // Recorremos el array con el "for of" si activas Quokka verás un mensaje de error...
        // no te asustes, es por lo que te comente anteriormente (línea 261).
        if(accionFiltrar(item)){ // Aqui pasamos "accionFiltrar" que venia como parámetro, como una función callback. 
            result.push(item); // si cumple la condición, push(item).
        }
    }

    return result; // Es importante devolver el resultado! = (matriz resultado).
}

function filtro (item){ // Esto es simple... ;)
    if(isNaN(item)){
        return true;
    }
}

console.log(filtrado(miMatriz,filtro));
console.log(filtrado(filtro,miMatriz));