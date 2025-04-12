//6. Generar la tabla de multiplicar de un número con for
//Pedir un número del 1 al 10.
//Mostrar su tabla del 1 al 12.
let num;
num = parseInt(prompt("Escribe un numero: "));

for (let i = 1; i<= 12; i++){
    console.log(`${num} * ${i} = ${num * i}`);

}
