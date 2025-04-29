// 16. Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
// countdown(5) ➞ [5, 4, 3, 2, 1, 0]

function countdown(n) {
    let array = [];
    for(let i=n; i>=0; i--){
        array.push(i);
    }
    return array;
}

console.log(countdown(10));