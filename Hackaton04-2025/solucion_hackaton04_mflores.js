/*
EJERCICIO 1
Utilizando función arrow, crear una función que reciba como parámetros un nombre, 
apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”
*/

function saludar(nombre, apellido, edad) {
    return `Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`;
}
console.log(saludar("Sebastián", "Yabiku", 33));

/*
EJERCICIO 2 
Cree una función que tome números y devuelva la suma de sus cubos.
sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
*/
//Version moderna con operador REST
function sumOfCubes(...numbers) {
    return numbers.reduce((acc, num) => acc + Math.pow(num, 3), 0); //
}   
console.log(sumOfCubes(1, 5, 9)); // 855

//Versión tradicional sin operador REST
function sumaCubos() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
      let n = arguments[i];
      total += Math.pow(n, 3);
    }
    return total;
  }
  
  console.log(sumaCubos(1, 2, 3));    // 1³ + 2³ + 3³ = 36
  console.log(sumaCubos(4, 5));       // 4³ + 5³ = 189
  console.log(sumaCubos());           // sin argumentos = 0

  /*
  EJERCICIO 3
  Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js
  */

function tipoDeValor(valor) {
    return typeof valor;
}   

console.log(tipoDeValor(42)); // number
console.log(tipoDeValor("Hola")); // string 
console.log(tipoDeValor(true)); // boolean
console.log(tipoDeValor(null)); // object

/*
EJERCICIO 4
Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)
*/
function sumar(...numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

console.log(sumar(1, 2, 3)); // 6

/*
EJERCICIO 5
Crear una función que reciba un array de valores y filtre los valores que no son string
*/
function filtrarStrings(array) {
    return array.filter(valor => typeof valor === 'string');
}

const valores = [1, 'hola', true, 'mundo', null, 'JS', 42];
const soloStrings = filtrarStrings(valores);

console.log(soloStrings);

/*
EJERCICIO 6
Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
*/
function minMax(matriz) {
    const min = Math.min(...matriz);
    const max = Math.max(...matriz);
    return [min, max];
}   

const valoresMatriz = [1, 2, 3, 4, 5];
const resultado = minMax(valoresMatriz);    
console.log(resultado); // [1, 5]

/*
EJERCICIO 7
Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
*/
function formatPhoneNumber(matriz) {
    const areaCode = matriz.slice(0, 3).join('');
    const centralOfficeCode = matriz.slice(3, 6).join('');
    const lineNumber = matriz.slice(6).join('');
    return `(${areaCode}) ${centralOfficeCode}-${lineNumber}`;
}

const numerosTelefono = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const telefonoFormateado = formatPhoneNumber(numerosTelefono);  
console.log(telefonoFormateado); // (123) 456-7890

/*
EJERCICIO 8
Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
*/
function findLargestNums(matriz) {
    return matriz.map(subArray => Math.max(...subArray));
}

const numerosMatrices = [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]];
const numerosMaximos = findLargestNums(numerosMatrices);
console.log(numerosMaximos); // [7, 90, 2]

/*
EJERCICIO 9
Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.

charIndex("circumlocution", "c") ➞ [0, 8]
// The first "c" has index 0, the last "c" has index 8.
*/
function charIndex(palabra, caracter) {
    const primerIndice = palabra.indexOf(caracter);
    const ultimoIndice = palabra.lastIndexOf(caracter);
    return [primerIndice, ultimoIndice];
}

let resultadoIndices = charIndex("hello", "l");
console.log(resultadoIndices); // [2, 3]
resultadoIndices = charIndex("circumlocution", "c");
console.log(resultadoIndices); // [0, 8]

/*
EJERCICIO 10
Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
*/
function toArray(objeto) {
    return Object.entries(objeto);
}
console.log(toArray({ a: 1, b: 2 })); // [["a", 1], ["b", 2]]

/*
EJERCICIO 11
Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.

getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]) ➞ 65700
*/
function getBudgets(matriz) {
    return matriz.reduce((acumulador, persona) => acumulador + persona.budget, 0);
}

const personas = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
];
const totalPresupuesto = getBudgets(personas);
console.log(totalPresupuesto); // 65700

/*
EJERCICIO 12
Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
getStudentNames([
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
]) ➞ ["Becky", "John", "Steve"]
*/
function getStudentNames(matriz) {
    return matriz.map(estudiante => estudiante.name);
}
const estudiantes = [
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
];
const nombresEstudiantes = getStudentNames(estudiantes);
console.log(nombresEstudiantes); // ["Steve", "Mike", "John"]

/*
EJERCICIO 13
Escriba una función que convierta un objeto en una matriz de claves y valores.
objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
*/
function objectToArray(objeto) {
    return Object.entries(objeto);
}
const objeto = {
    likes: 2,
    dislikes: 3,
    followers: 10
};
console.log(objectToArray(objeto)); // [["likes", 2], ["dislikes", 3], ["followers", 10]]

/*
EJERCICIO 14
Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14
*/
function squaresSum(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += Math.pow(i, 2);
    }
    return suma;
}
console.log(squaresSum(3)); // 14

/*
EJERCICIO 15
Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
*/
function multiplyByLength(arr) {
    return arr.map(num => num * arr.length);
  }

console.log(multiplyByLength([2, 3, 1, 0])); // [8, 12, 4, 0]

/*
EJERCICIO 16
Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
countdown(5) ➞ [5, 4, 3, 2, 1, 0]
*/
function countdown(numero) {
    const resultado = [];
    for (let i = numero; i >= 0; i--) {
      resultado.push(i);
    }
    return resultado;
  }
  console.log(countdown(5)); 

/*
EJERCICIO 17
Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.
*/
function diffMaxMin(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return max - min;
  }

  console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));

/*
EJERCICIO 18
Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]
*/
function filterList(arr) {
    return arr.filter(item => typeof item === 'number' && Number.isInteger(item));
}

console.log(filterList([1, 2, 3, "x", "y", 10]));

/*
EJERCICIO 19
Cree una función que tome dos argumentos (elemento, tiempos). 
El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. 
Devuelve el resultado en una matriz.
repeat(13, 5) ➞ [13, 13, 13, 13, 13]
*/
function repeat(elemento, veces) {
    const resultado = [];
    for (let i = 0; i < veces; i++) {
      resultado.push(elemento);
    }
    return resultado;
  }
  console.log(repeat(13, 5)); 

/*
EJERCICIO 20
Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
"apples and bananas".vreplace("u") ➞ "upplus und bununus"
*/
String.prototype.vreplace = function(vocal) {
    return this.replace(/[aeiou]/g, vocal);
  };

console.log("apples and bananas".vreplace("u"));

/*
EJERCICIO 21
Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
*/

function buscandoNemo(frase) {
    const palabras = frase.split(" ");
    const posicion = palabras.indexOf("Nemo");
  
    if (posicion !== -1) {
      return `¡Encontré a Nemo en  ${posicion + 1}!`;
    } else {
      return "No encontré a Nemo :(";
    }
  }

  console.log(buscandoNemo("¡Encontré a Nemo !"));

/*
EJERCICIO 22
Cree una función que capitalice la última letra de cada palabra.
capLast("hello") ➞ "hellO"
*/
function capLast(frase) {
    return frase
      .split(" ")
      .map(palabra => {
        if (palabra.length === 0) return "";
        const ultimaMayus = palabra.slice(-1).toUpperCase();
        const resto = palabra.slice(0, -1);
        return resto + ultimaMayus;
      })
      .join(" ");
  }
  console.log(capLast("hello"));   