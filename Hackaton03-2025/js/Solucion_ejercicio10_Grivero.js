//10. Cuenta regresiva desde un número
//Leer un número inicial.
//Usar while para imprimir desde ahí hasta 0.
let num;
num = parseInt(prompt("Escribe un número: "));
let i = num;

while( i >= 0){
    console.log("Cuenta Regresiva: ", i);
    i--;
}
