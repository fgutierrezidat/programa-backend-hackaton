//----------------------------------------------------------------------------
//1. Verifica si un número ingresado es múltiplo de 3, 5 o ambos
/* Usar if, else if,else
Mostrar: "Múltiplo3" si es múltiplo de 3, "Múltiplo5" si es de 5, y "Múltiplo3y5" si es de ambos. */
function ejercicio1(){
    let num = parseFloat(prompt("Ingresar un numero"));

    if(num%3 === 0 && num%5 === 0){
        alert(`El numero ${num} es multiplo de 3 y 5`);
    }else if(num%3 === 0){  
        alert(`El numero ${num} es multiplo de 3`);
    }else if(num%5 === 0){
        alert(`El numero ${num} es multiplo de 5`);
    }else{
        alert(`El numero ${num} no es multiplo de 3 ni de 5`);
    }
}
/* ejercicio1(); */


//----------------------------------------------------------------------------
//2. Calculadora conswitch
/* Pedir al usuario una operación (+, -, *, /) y dos números.
Usar switchpara realizar la operación.
Validar la división por cero. */
function ejercicio2(){
    let operacion = prompt("Ingresa la operacion a realizar (+, -, *, /): ")
    let a = parseFloat(prompt("Ingresa primer numero"));
    let b = parseFloat(prompt("Ingresa segundo numero"));
    let resultado;

    switch(operacion){
        case "+":
            resultado = a + b;
            break;
        case "-":
            resultado = a - b;
            break;
        case "*":
                resultado = a * b;
            break;
        case "/":
            if(b != 0){
                resultado = a / b;
            }else{
                resultado = "No se puede dividir entre 0";
            }
            break;
        default:
            resultado = "Operación inválida";
    };

    alert("Resultado: " + resultado);
}
/* ejercicio2(); */


//----------------------------------------------------------------------------
//3. Simula un inicio de sesión con 3 intentos
/* Usar while.
Usuario debe ingresar usuario y contraseña correcta.
Bloquear si falla 3 veces. */
function ejercicio3(){
    let intentos = 3;
    let usu = "ruriarte";
    let contra = "123456";
    while(intentos > 0){
        let usuario = prompt("Ingresar usuario");
        let contraseña = prompt("Inrgesar contraseña");
        if(usuario === usu && contraseña === contra){
            alert("¡Se ha iniciado sesion!");
            break;
        }else{
            intentos--;
            alert(`Error, usuario o contraseña incorrectes, intentelo de nuevo. (${intentos} intentos)`)
        }
    }
}
/* ejercicio3(); */



//----------------------------------------------------------------------------
//4. Clasificación por edadesif else if
/* Leer una edad.
Mostrar: "niño" (<12), "adolescente" (12-17), "adulto" (18-59), "adulto mayor" (60+). */
function ejercicio4(){
    let edad = parseInt(prompt("Ingresar edad: "));

    if(edad < 12){
        alert("Es un niño");
    }else if(edad >= 12 || edad <=17){
        alert("Es un adolescente");
    }else if(edad >= 18 || edad <=59){
        alert("Es un adulto");
    }else if(edad >= 60){
        alert("Es un adulto mayor");
    }
}
/* ejercicio4(); */


//----------------------------------------------------------------------------
//5. Determina si un año es bisiesto
/* Usar ifanidados.
Mostrar si el año ingresado es bisiesto o no. */
function ejercicio5(){
    let anio = parseInt(prompt("Ingrese un año: "));

    if(anio % 4 === 0){
        if(anio % 100 === 0){
            if(anio % 400 === 0){
                alert(anio + " Es un año bisiesto");
            }else{
                alert(anio + " No es un año bisiesto");
            }
        }else{
            alert(anio + " Es un año bisiesto");
        }

    }else{
        alert(anio + " No es un año bisiesto");
    }
}
/* ejercicio5(); */



//----------------------------------------------------------------------------
//6. Generar la tabla de multiplicar de un número confor
/* Pedir un numero del 1 al 10.
Mostrar su tabla del 1 al 12. */
function ejercicio6(){
    let numero = parseInt(prompt("Ingresar un numero para mostrar tabla de multiplicar"));
    for(let i = 0; i <= 12; i++){
        console.log(`${numero} x ${i} = ` + (numero*i));
    }
}
/* ejercicio6(); */


//----------------------------------------------------------------------------
//7. Calcula el factorial de un número
/* Leer un número entero.
Usar forpara calcular factorial. */
function ejercicio7(){
    let numero = parseFloat(prompt("Ingresar un numero para culcular factorial"));
    let factorial = 1;

    for(let i = 1; i <= numero; i++ ){
        factorial = factorial * i;
    }
    alert(`Factorial de ${numero} es: ${factorial}`);
}
/* ejercicio7(); */


//----------------------------------------------------------------------------
//8. Simula un menú interactivo
/* Mostrar en opciones de consola (suma, resta, salir).
Usar do while para repetir hasta que elija salir. */
function ejercicio8(){
    let opcion;

    do{
        opcion = prompt(
            "***Menu de Operaciones*** \n"+
            "1. Suma \n" +
            "2. Resta \n" +
            "3. Salir \n" +
            "Elija una opcion"
        );

        switch(opcion){
            case "1":
                let num1 = parseFloat(prompt("Ingrese primer numero: "));
                let num2 = parseFloat(prompt("Ingrese segundo numero: "));
                alert("Resultado de la suma es: " + (num1 + num2));
                break;
            case "2":
                let num3 = parseFloat(prompt("Ingrese primer numero: "));
                let num4 = parseFloat(prompt("Ingrese segundo numero: "));
                alert("Resultado de la resta es: " + (num3 - num4));
                break;
            case "3":
                alert("¡Hasta luego!");
                break;
            default:
                alert("Opción inválida, Intente nuevamente.");
        }


    }while(opcion !== "3");
}
/* ejercicio8(); */


//----------------------------------------------------------------------------
//9. Encuentra el mayor de tres números.
/* Usar if else if.
Leer 3 valores y mostrar el mayor. */
function ejercicio9(){
    let num1 = parseFloat(prompt("Ingresar primer valor"));
    let num2 = parseFloat(prompt("Ingresar segundo valor"));
    let num3 = parseFloat(prompt("Ingresar tercer valor"));

    if (num1 > num2 && num1 > num3) {
        alert(`El número mayor es: ${num1}`);
    } else if (num2 > num1 && num2 > num3) {
        alert(`El número mayor es: ${num2}`);
    } else if (num3 > num1 && num3 > num2) {
        alert(`El número mayor es: ${num3}`);
    } else {
        alert("Todos los numeros son iguales.");
    }
}
/* ejercicio9(); */


//----------------------------------------------------------------------------
//10. Cuenta regresiva desde un número
/* Leer un numero inicial.
Usar whilepara imprimir desde ahí hasta 0. */
function ejercicio10(){
    let num = parseFloat(prompt("Ingresar un numero"));

    while(num >= 0){
        console.log(num);
        num--;
    }
}
/* ejercicio10(); */

