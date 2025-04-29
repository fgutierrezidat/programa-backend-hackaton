// 1. Utilizando función arrow, crear una función que reciba como parámetros un 
// nombre, apellido y edad y los retorne en un string 
// concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”

let nombre = prompt("Ingresa el nombre: ");
let apellido = prompt("Ingresa el apellido: ");
let edad = prompt("Ingresa la edad: ");

const concat = (nombre, apellido, edad) => {
    return `Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`
};

console.log(concat(nombre, apellido, edad));
