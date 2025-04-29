// 2. Cree una función que tome números y devuelva la suma de sus cubos.
// sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

let num1 = parseInt(prompt("Ingrese el primer numero: "));
let num2 = parseInt(prompt("Ingrese el segundo numero: "));
let num3 = parseInt(prompt("Ingrese el tercer numero: "));

function sumOfCubes(num1, num2, num3) {
    return Math.pow(num1,3) + Math.pow(num2,3) + Math.pow(num3,3);
}

let suma = sumOfCubes(num1,num2,num3);
alert(`La suma de los cubos de ${num1}, ${num2} y ${num3} es: ${suma}`);
