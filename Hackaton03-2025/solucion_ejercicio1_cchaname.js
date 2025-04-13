// 1. Verifica si un número ingresado es múltiplo de 3, 5 o ambos
// Usar `if`, `else if`, `else`
// Mostrar: "Múltiplo3" si es múltiplo de 3, "Múltiplo5" si es de 5, y "Múltiplo3y5" si es de ambos.

let number = parseInt(prompt('Ingrese un numero:'));

if(number % 3 === 0 && number % 5 === 0) {
    console.log('El número ingresado es múltiplo de 3 y 5.');
} else if(number % 3 === 0) {
    console.log('El número ingresado es múltiplo de 3.');
} else if(number % 5 === 0) {
    console.log('El número ingresado es múltiplo de 5.');
} else {
    console.log('El número ingresado no es múltiplo ni de 3 ni de 5.');
}
