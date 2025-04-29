// 9. Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
// charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.

const palabra = "calabaza";
const caracter = "a";

function primeroUltimo(str, chr) {
    return [str.indexOf(chr), str.lastIndexOf(chr)];
}

console.log(`La primera aparición del caracter "${caracter}" en la palabra "${palabra}" está en el índice ${primeroUltimo(palabra, caracter)[0]} y la última en el índice ${primeroUltimo(palabra, caracter)[1]}`);