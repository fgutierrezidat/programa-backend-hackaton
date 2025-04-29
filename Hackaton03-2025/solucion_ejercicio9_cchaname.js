// ### 9. Encuentra el mayor de tres números
// - Usar `if else if`.
// - Leer 3 valores y mostrar el mayor.

let number1 = parseInt(prompt('Ingresa el primer número:'));
let number2 = parseInt(prompt('Ingresa el segundo número:'));
let number3 = parseInt(prompt('Ingresa el tercer número:'));

let mayor;

if (number1 > number2 && number1 > number3) {
    mayor = number1;
} else if (number2 > number1 && number2 > number3) {
    mayor = number2;
} else if (number3 > number1 && number3 > number2) {
    mayor = number3;
} else {
    mayor = "No hay un único mayor (hay números iguales)";
}
     
console.log("El número mayor es: " + mayor);