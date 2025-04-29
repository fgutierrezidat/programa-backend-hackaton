//14. Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
// squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14

let num = parseInt(prompt("Ingrese un número: "));

function squaresSum(n) {
    let suma=0;
    for(let i=1; i<=n; i++){
        suma += Math.pow(i,2);
    }
    return suma;
}

alert(`La suma de los cuadrados hasta el número ${num} es: ${squaresSum(num)}`);