//ejercicio 1 
let num;
num = parseInt(prompt("ingresa un numero: "))

if(num % 3 == 0 && num % 5 == 0){
    console.log("Es Multiplo de 3 y 5")
}else if (num % 3 == 0){
    console.log("Multiplo 3")
}else if (num %5 == 0){
    console.log("Multiplo 5")
}else{
    console.log("No es multiplo ni de 3 ni de 5")
}