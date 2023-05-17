// Crear una función que determine si dos arrays son iguales, comparados elemento a elemento. La
// función será parecida a :function isEqual (array1, array2) y devolverá true/false si los arrays son o no

// iguales. Para determinar si el parámetro array1 es un array podéis usar el método estático
// "Array.isArray(array1)" o el operador "array1 instanceof Array". Para probar si funciona usaréis estas
// llamadas:
// isEqual ([1,2,3],["1",2,"3"]) -> false isEqual ([1,2,3],[1,2,3]) -> true isEqual ([1,2,3],[1,2,3,4]) -> false
// isEqual ([1,2,3],'abc') -> false
// Usad estos test: console.assert(!isEqual([1, 2, 3], ["1", 2, "3"]), "Test1: no son iguales");
// console.assert(isEqual([1, 2, 3], [1, 2, 3]), "Test2: no son iguales"); console.assert(!isEqual([1, 2, 3], [1, 2, 3,
// 4]), "Test3: no son iguales"); console.assert(!isEqual([1, 2, 3], "abc"), "Test4: no son iguales");