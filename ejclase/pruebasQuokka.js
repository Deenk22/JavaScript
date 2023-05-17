const miMatriz = ["Hola", "Adios", "Santi", "Vamos!", 300, 500, 600, 10, 3, 1];


function filtrado (array,accion){
    const result = [];
    for (const item of array){
        if(accion(item)){
            result.push(item);
        }
    }
    return result;
}


function filtrar (item){
    if(!isNaN(item)){
        return true;
    }
    return false;
}


