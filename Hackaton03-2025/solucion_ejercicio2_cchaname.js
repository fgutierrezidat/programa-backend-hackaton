// ### 2. Calculadora con `switch`
// - Pedir al usuario una operación (+, -, *, /) y dos números.
// - Usar `switch` para realizar la operación.
// - Validar la división por cero.

let operation = prompt(`Ingrese una operación:
                        1. +
                        2. -
                        3. *
                        4. /`);
let number1 = parseInt(prompt('Ingrese el primer número:'));
let number2 = parseInt(prompt('Ingrese el segundo número:'));
let resultado;

if((operation === "4" || operation === "/") && number2 === 0){
    console.log('No se puede dividir por 0');
} else { 
    switch(operation){
        case "1":
        case "+":
            resultado = number1 + number2;
            console.log(`La suma de ${number1} + ${number2} = ${resultado}`);
            break;    
        case "2":
        case "-":
            resultado = number1 - number2;
            console.log(`La resta de ${number1} - ${number2} = ${resultado}`);
            break;    
        case "3":
        case "*":
            resultado = number1 * number2;
            console.log(`La multiplicación de ${number1} * ${number2} = ${resultado}`);
            break;    
        case "4":
        case "/":
            resultado = number1 / number2;
            console.log(`La división de ${number1} + ${number2} = ${resultado}`);
            break;
        default:
            break;    
    }
}