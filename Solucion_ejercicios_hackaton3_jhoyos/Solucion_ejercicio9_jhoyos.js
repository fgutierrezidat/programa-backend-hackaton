let num = parseInt(prompt("Ingrese un número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));
let num3 = parseInt(prompt("Ingrese el tercer número: "));

if (num2 && num3 < num){
    console.log("El número mayor es: " + num);
}
else if (num && num3 < num2){
    console.log("El número mayor es: " + num2);
}
else if (num && num2 < num3){
    console.log("El número mayor es: " + num3);
}