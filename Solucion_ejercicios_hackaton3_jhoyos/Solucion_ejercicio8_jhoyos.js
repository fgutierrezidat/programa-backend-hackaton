
let opcion;


do{
    alert("Bienvenido a la calculadora de la suerte");
    alert("Elige un de las siguientes opciones");
    alert("1. Sumar, 2. Restar, 3. Salir");
    
    opcion = parseInt(prompt("Ingrese una opción"));
    
    let num1 = parseInt(prompt("Ingrese el primer número"));
    let num2 = parseInt(prompt("Ingrese el segundo número"));
    
    
    switch(opcion){
        case 1: 
            alert(`La suma es: ${num1 + num2}`); 
            break;
        case 2: 
            alert (`La resta es: ${num1 - num2}`); 
            break;
        case 3: 
            alert ("Has elegido la opción de salir"); 
            break;
        default: 
            alert("Opción no válida");
    }
}
while(opcion != 3); 