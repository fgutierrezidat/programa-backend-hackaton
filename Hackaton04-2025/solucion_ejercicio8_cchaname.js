// 8. Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

const matrizInicial = [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]];

function findLargestNums(matriz) {
    let m = [];
    matriz.forEach(element => {
        let max = Math.max(...element);
        m.push(max);
    });
    return m;
}

console.log(findLargestNums(matrizInicial));