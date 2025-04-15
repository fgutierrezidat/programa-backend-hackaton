let num;
let factorial = 1;
num = parseInt(prompt("Escribe un número: "));

if (num < 0) {
  console.log("El factorial no esta hecho para negativos");
} else {
  for (let i = 1; i <= num; i++) {
    factorial *= i; // factorial = factorial * i
  }
  console.log(`El factorial de ${num} es: ${factorial}`);
}
