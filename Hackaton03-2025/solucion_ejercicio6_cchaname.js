// ### 6. Generar la tabla de multiplicar de un número con `for`
// - Pedir un número del 1 al 10.
// - Mostrar su tabla del 1 al 12.

let number;

do {
    number = parseInt(prompt('Ingrese un número del 1 al 10:'))
}while(number < 1 || number > 10)

for(let i=1; i<=12; i++){
    console.log(`${number} * ${i} = `, number * i );
}