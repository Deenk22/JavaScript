/* << Activar Quokka para ver resultados >> */ 


// >>> Método indexOf > Devuelve el índice de un elemento.
const miMatriz = [10, 25, 63, 500, 300, 1, 0];
// let índice = miMatriz.indexOF(500); > Recuerda asignar el valor o elemento del array entre
// los paréntesis. Este te devolvera la posición o índice de ese valor en el array.
console.log(miMatriz.indexOf(300));


// >>> Operador delete > Elimina una posición en concreto del Array.
delete miMatriz[2];
console.log(miMatriz);
console.log(miMatriz[2]); // Se ha eliminado el valor pero no el hueco. La posición 2 ahora mismo es undefined.


// >>> Método push > uno de los métodos que mas usamos hoy... añade un elemento al final del array.
miMatriz.push(560);
console.log(miMatriz);


// >>> Método unshift > añade un elemento al inicio del array.
miMatriz.unshift(2);
console.log(miMatriz);


// >>> Método pop > Devuelve el ultimo elemento del array y lo elimina.
miMatriz.pop(); // No le hemos asignado ningún elemento del array, simplemente elimina el último.
console.log(miMatriz);


// >>> Método splice > Elimina elementos de un array. 
miMatriz.splice(6); // Entre los paréntesis determinaremos desde que índice del array queremos que elimine.
console.log(miMatriz);
console.log(miMatriz.splice(1, 2)); // Esto quiere decir, borrame hasta el índice 1 y 
// todo lo que encuentres después del 2.
console.log(miMatriz); // Estamos imprimiendo el array con los elementos eliminados.
// Una manera de reemplazar un valor "undefined" con el método "splice".
let newValor = 2000; // Asignamos una variable con el valor.
miMatriz.splice(1, 1, newValor); // El primer valor o parámetro (1) > Determina en que posición del array 
// nos encontramos. El segundo valor o paràmetro (1) > Con este, decimos que borre 1 posición o índice.
// El tercer valor o parámetro (newValor) añade el valor de nuestra variable a la posición o índice borrado
// previamente. Cuidado con el segundo valor o parámetro, cuanto más alto sea el número, más eliminará. 
console.log(miMatriz);


// >>> Método reverse > El mismo nombre lo dice, invierte el array.
miMatriz.reverse();
console.log(miMatriz);


// >>> Método concat > Une un array a otro.
const miMatrizCompuesta = miMatriz.concat([162,200,36,25]); // Creamos una nueva variable 
// = a llamamos al array miMatriz y le añadimos nuevos elementos, mirar ejemplo!.
console.log(miMatrizCompuesta);


// >>> Método sort > ordena el array, un metodo muy común y se usa con una función flecha, ejempl >

miMatrizCompuesta.sort((a,b) => { // Tenemos dos parametros que actúan como valores min (a) y max (b). 
    return b - a; // Aqui estamos declarando un orden descendente ya que, b (abecedario) es mayor que a.. asi lo entiendo yo! jeje
})
console.log(miMatrizCompuesta);

// Version un poco mas avanzada del método sort (Aunque es lo mismo que hice arriba y con menos código)
// pero aqui explica lo que hace realmente el método sort.

miMatrizCompuesta.sort((prev, next) => { // Recibimos 2 valores del array y le juzgamos!!! jeje va iterando 
    // de 2 en 2 índices del array por decirlo de alguna manera, haciendo la comprobación, viendo si cumplen las condiciones.
    if (prev > next){ // Si prev (El primer valor de los 2 recibidos) es mayor que next (El segundo valor de los 2 recibidos)
        return 1; // Devolvemos 1, lo situamos por delante del valor next recibido, ya que next, es menor.
        // Pongo un ejemplo visual miMatrizCompuesta = [500, 200, 162, 36, 25, etc] ahora mismo estamos 
        // recibiendo prev = 500 y next = 200, en este caso, prev es mayor que next, entonces intercambiamos
        // los valores y nuestro array quedaría de esta manera miMatrizCompuesta = [200, 500, 162, 36, 25, etc]
        // recuerda que la función asignada al método sort va iterando de 2 en 2 (Porque solo tenemos dos parámetros).
    } else if (prev < next){
        return -1; // El mismo movimiento pero de forma inversa, en el caso que se cumpla la condicion del else if.
    }
    return 0; // Esto quiere decir, que son iguales, por lo tanto, los deja como esta. 
}); // Activar Quokka para ver resultados.

console.log(miMatrizCompuesta);


// Métodos mas usados (Antonio)


// >>> Método forEach > Itera en todos los elementos de un Array llamando a una "funciòn Callback" cuyos parámetros
// son : currentValue, index, array (elemento actual, numero de iteracion y el array completo)
 console.log(miMatrizCompuesta);
 miMatrizCompuesta.forEach(function (item, index, array) {
    array[index] = item * index;
    console.log(`${item} x ${index}`);
 })
// Un método super curioso que habra que ver algunos videos para saber en que momentos debemos aplicarlo!
 console.log(miMatrizCompuesta);


// >>> Método map > Devuelve un nuevo array aplicando una función en cada elemento del array actual.
const newMatriz = miMatrizCompuesta.map((elementos) => elementos * 2) // Este Método me parece super interesante
    // En el ejemeplo del PDF de Antonio esta sumandole el índice del array a cada elemento.
    // Aqui estamos multiplicando cada índice por 2. Realmente se compone de la misma forma que el Método
    // forEach (currentValue, index, array) Pero se puede utilizar perfectamente solo el primer argumento, 
    // en este caso lo hemos llamado "elementos" asociandolos a cada elemento del array. También lo hemos
    // reducido, en cuanto a sintaxis o número de líneas.
console.log(newMatriz);


// >>> Método filter > Devuelve un nuevo array con los elementos que cumplan la condición creada en la "función callback"
const matrizFiltrada = miMatrizCompuesta.filter((elemento, index, array) => elemento < 200); // Como puedes observar
// no estamos utilizando los 2 parametros siguientes a "elemento" en este caso hemos dado una orden concreta
// Todos los elementos del array menores a 100, podrán imprimirse por consola.
// es importante saber que estos 3 métodos tienen los mismos parámetros (currentValue, index, array completo)
// pero que podremos utilizar el primer parámetro solo, sin problemas (Dependiendo del caso).
// despueés de la función flecha podremos insertar la condición o la forma en la que filtraremos nuestro array.
console.log(matrizFiltrada);


// >>> Método findIndex > Busca el índice del primer elemento que cumpla la función.
const indiceMayorQue = miMatrizCompuesta.findIndex((elemento) => elemento > 487); // Estamos buscando un elemento 
// dentro de nuestra array, que cumpla esta condición, una vez encontrado nos devuelve la posición del mismo
// en el array. Nuestra condicion es si "elemento" es mayor que 487, buscara el primer índice del array que
// cumpla esta condición. Ejemplos clg justo abajo. Recuerda activar Quokka para ver el resultado.
console.log(miMatrizCompuesta);
console.log(indiceMayorQue);
console.log(miMatrizCompuesta[3]); // Como era de esperar, la posición 3 es menor que 487 (Condición).
console.log(miMatrizCompuesta[4]); // Justo! la posición 4 es la primera en cumplir la condición.


// >>> Método indexSplice > Busca un elemento y lo elimina.
const misNumeros = [10,15,2,16,10,2,60];
misNumeros.splice(misNumeros.indexOf(2), 4); // Borra los 4 siguientes elementos a partir 
// de la posición 2 del array.
console.log(misNumeros);


// >>> Método spread > Nos permite descomponer o sacar elementos individuales asignandoles directamente,
// una variable.
separar = (item01, item02, ...item03) => { // Creamos una función con 3 parámetros, que son, 3 variables.
    // asignandoles a item01 = El índice 0 del array. a item02 = El índice 1 del array. a item03 = El resto
    // del array. 
    console.log(item01, item02, item03);
}
separar (...miMatrizCompuesta); // Llamamos a la funcion y como parámetro le pasamos el array junto con el 
// método spread para su posterior descomposición. Recuerda activar Quokka.


// >>> Método spread, en este caso, para crear, insertar o componer una nueva matriz con nuevos elementos.
const a = ['a', 'b']; // Creamos una matriz o array.
const b = ['d', 'e']; // Creamos una matriz o array, diferente a la primera.
const c = [...a, 'c', ...b]; // Creamos una nueva o tercera constante donde construiremos la nueva matriz
// ...a = Elementos del array desparramaos! jeje separados por , los elementos que queremos insertar (En el nuevo array) 
// y para terminar ...b = Elementos del array desparramaos! jeje como resultado el clg. Activa Quokka!
console.log(c);


// >>> Desestructuración de arrays. Aquí, haremos una breve excepción para ver como asignar a variables individuales
// valores de un array.
let matrizString = ["Hola", "Adios", "Hasta Pronto", "Bye"]; // Creamos nuestro array.
const [Hola, Adios] = matrizString; // Por orden (Hola = 0 del array / Adios = 1 del array) se asigna la variable
// al índice del array correspondiente, en estos casos : Hola a 0 y Adios a 1. 
console.log(Hola);
console.log(Adios);


// >>> Desestructuración de objetos.
// Como pasa con el array, la forma de desestructurar, en este caso los objetos, es situando las llaves o corchetes
// antes del =, de esta manera podemos renombrar o coger simplemente lo que necesitemos de un objeto determinado.
const persona = {nombre: "Pepe", edad: 56, peso: 80}; // Creamos el objeto.
const {nombre, peso: PESO} = persona // Desestructuramos y renombramos el parámetro peso = PESO. 
// Activar Quokka para ver el resultado.
console.log(nombre);
console.log(PESO);


