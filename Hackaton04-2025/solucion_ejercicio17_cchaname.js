// 17. Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
// diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.

const matriz = [10, 4, 1, 4, -10, -50, 32, 21];

function diffMaxMin(array){
    let max = Math.max(...array);
    let min = Math.min(...array);
    return max - min;
}

console.log(diffMaxMin(matriz));