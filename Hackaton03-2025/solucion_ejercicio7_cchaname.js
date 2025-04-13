// ### 7. Calcula el factorial de un número
// - Leer un número entero.
// - Usar `for` para calcular factorial.

let number = parseInt(prompt('Ingrese un número entero:'));
let factorial = 1;

for (let i = number; i>=1; i--){
    factorial *= i;
}

console.log(`El factorial de ${number} es ${factorial}`);