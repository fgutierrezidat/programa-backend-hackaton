// ### 10. Cuenta regresiva desde un número
// - Leer un número inicial.
// - Usar `while` para imprimir desde ahí hasta 0.

let number = parseInt(prompt('Ingresa un número:'));

while(number>=0) {
    console.log(number);
    number--;
}