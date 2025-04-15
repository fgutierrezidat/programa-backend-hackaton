let num1;
let num2;
let operación;
num1 = parseFloat(prompt("Digite el primer número: "));
operación = prompt("Elige una Operacion (+, -, *, /): ");
num2 = parseFloat(prompt("Digite el segundo número: "));
let resultado;

switch (operación) {
  case "+":
    resultado = num1 + num2;
    console.log("El resultado de la suma es: " + resultado);
    break;
  case "-":
    resultado = num1 - num2;
    console.log("El resultado de la resta es: " + resultado);
    break;
  case "*":
    resultado = num1 * num2;
    console.log("El resultado de la multiplicacion es: " + resultado);
    break;
  case "/":
    if (num2 !== 0) {
      resultado = num1 / num2;
      console.log("El resultado de la division es: " + resultado);
    } else {
      console.log("Error, no puedes dividir entre 0.");
    }
    break;
  default:
    console.log("Operacion no valida");
}
