let num = parseInt(prompt("Ingrese un número entero :"));
let factorial = 1;
if (num < 0){
    console.log("El número no es positivo");
}
else{
    for(let i =1; i <= num; i++){
        factorial *= i;
    }
    console.log("El factorial de " + num + " es: " + factorial);
}