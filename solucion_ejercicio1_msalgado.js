let num;
num = parseInt(prompt("Digita un número: "));

if (num % 3 == 0 && num % 5 == 0) {
  console.log("Múltiplo de 3 y 5");
} else if (num % 3 == 0) {
  console.log("Multiplo de 3");
} else if (num % 5 == 0) {
  console.log("Multiplo de 5");
} else {
  console.log("Ninguna condición se cumple");
}
