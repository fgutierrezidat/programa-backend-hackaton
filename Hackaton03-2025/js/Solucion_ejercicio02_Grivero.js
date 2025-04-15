//Ejercicio 2 Calculadora con switch

let num1;
let num2;
let operacion;
num1 = parseFloat(prompt("Digite su primer numero: "));
operacion = prompt("elige una operacion(+,-,*,/):")
num2 = parseFloat(prompt("Digite su segundonumero:"))
let resultado;
switch (operacion){
    case "+":
        resultado = num1 + num2;
        console.log("El resultado de la suma es:  "+resultado);
        break;
    case "-":
        resultado = num1 - num2;
        console.log("El resultado de la resta es:  "+resultado);
        break;
    case "*":
        resultado = num1 * num2;
        console.log("El resultado de la multiplicacion es:  "+resultado);
        break;
    case "/":
        if (num2 !==0){
            resultado = num1/num2;
            console.log("El resultado de la division es:  "+resultado)
        }else{
            console.log("Error, no puedes dividir entre 0")
        }
        break;
    default:
        console.log("Operacion no valida")
}