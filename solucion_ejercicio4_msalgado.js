let edad;
edad = parseInt(prompt("Escribe tu edad: "));

if (edad < 12) {
  console.log("Niño");
} else if (edad >= 12 && edad <= 17) {
  console.log("Adolescente");
} else if (edad >= 18 && edad <= 59) {
  console.log("Adulto");
} else if (edad >= 60) {
  console.log("Adulto Mayor");
} else {
  console.log("Error, dato invalido");
}
