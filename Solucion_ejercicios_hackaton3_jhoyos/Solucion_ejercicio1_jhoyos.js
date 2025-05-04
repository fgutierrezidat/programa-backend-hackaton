
let num = parseInt(prompt("Ingrese un número: "));

if(num % 3 == 0 && num % 5== 0){
    alert("Numero es divisible por 3 y 5 ");
}
else if(num % 3 == 0){
    alert("Numero es divisible por 3");
}
else if (num % 5 == 0){
    alert("Numero es divisible por 5");
}
else{
    alert("Numero no es divisible por 3 ni por 5");
}