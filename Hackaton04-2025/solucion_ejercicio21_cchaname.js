// 21. Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
// findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

function findNemo(oracion) {
    const palabras = oracion.split(" ");
  
    const index = palabras.indexOf("Nemo");
  
    if (index !== -1) {
      return `¡Encontré a Nemo en la palabra número ${index + 1}!`;
    } else {
      return "No se encontró la palabra nemo";
    }
}

console.log(findNemo("I am finding Nemo !"));