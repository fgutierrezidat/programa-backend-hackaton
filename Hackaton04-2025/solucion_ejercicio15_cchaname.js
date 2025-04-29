// 15. Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
// multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]

const matriz = [8, 12, 4, 0];

function multiplyByLength(array){
    const arrayNuevo = array.map(elemento => elemento * array.length);
    return arrayNuevo;
}

console.log(multiplyByLength(matriz));