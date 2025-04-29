// 10. Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

const objeto = {
    a: 1,
    b: 2,
    c: 3
}

function toArray(objeto){
    const claves =  Object.keys(objeto);
    const valores =  Object.values(objeto);
    let arreglo = [];
    for(let i=0; i<claves.length; i++){
        const aux = [claves[i],valores[i]];
        arreglo.push(aux);
    }
    return arreglo;   
}

console.log(toArray(objeto));