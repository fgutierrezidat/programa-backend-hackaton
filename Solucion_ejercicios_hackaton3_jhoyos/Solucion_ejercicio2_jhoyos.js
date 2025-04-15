
let num1 = parseInt(prompt("Ingrese el primer número"));
let num2 = parseInt(prompt("Ingrese el segundo número"));

let opcion =parseInt(prompt("Ingrese una opción: 1 suma, 2 resta, 3 multiplicacion, 4 division"));

switch (opcion){
    case 1: 
        console.log(`La suma de ${num1} + ${num2} es: ${num1 + num2}`);
        break;
    case 2:
        console.log(`La resta de ${num1} - ${num2} es: ${num1 - num2}`);
        break;
    case 3:
        console.log(`La multiplicación de ${num1} * ${num2} es: ${num1 * num2}`);
        break;
    case 4:
        if (num2 !== 0) {
            console.log(`La división de ${num1} / ${num2} es: ${num1 / num2}`);
        } 
        else {
            console.log("No se puede dividir por cero");
        }
        break;
    default:
        console.log("Opción no válida");
    }
