//  6. Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

const numeros = [2,5,3,10,7,11,25,56,98,13];

function minMax(array){
    const minimo = Math.min(...array);
    const maximo = Math.max(...array);
    return [minimo,maximo];
};

console.log("El número mínimo y máximo ingresados son: ", minMax(numeros));