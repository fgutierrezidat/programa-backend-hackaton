// 22. Cree una función que capitalice la última letra de cada palabra.
// capLast("hello") ➞ "hellO"

function capLast(string) {
    let lastChar = string.charAt(string.length - 1);
    return string.replace(lastChar, lastChar.toUpperCase())
}

console.log(capLast("hello"));