//9. Encuentra el mayor de tres números
//Usar if else if.
//Leer 3 valores y mostrar el mayor.

let num1;
let num2;
let num3;
num1 = parseInt(prompt("Digite un número: "))
num2 = parseInt(prompt("Digite otro número: "))
num3 = parseInt(prompt("Digite un 3er número: "))

if(num1 > num2 && num3){
    console.log("El numero mayor es: "+num1);
}else if (num2 > num1 && num3){
    console.log(`El numero mayor es: ${num2}`)
}else if (num3 > num1 && num2){
    console.log("El numero mayor es: "+num3);
}
