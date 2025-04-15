//1. Verifica si un número ingresado es múltiplo de 3, 5 o ambos
//Usar if, else if, else
//Mostrar: "Múltiplo3" si es múltiplo de 3, "Múltiplo5" si es de 5, y "Múltiplo3y5" si es de ambos.
let num;
num = parseInt(prompt("Digita un número: "))

if (num % 3 == 0 && num % 5 == 0){
    console.log("Múltiplo3y5")
}else if (num % 3 == 0){
    console.log("Multiplo3")
}else if (num % 5 == 0 ){
    console.log("Multiplo5")
}else{
    console.log("Ninguna condición se cumple")
}
    