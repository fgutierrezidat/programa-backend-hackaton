//5. Determina si un año es bisiesto
//Usar if anidados.
//Mostrar si el año ingresado es bisiesto o no.

let year;
year = parseInt(prompt("Elige un año: "))
if(year % 4 === 0){
    if(year % 100 === 0){
        if(year % 400 === 0){
            console.log(`El año ${year} es Bisiesto`)
        }else{
            console.log("El año "+year, "No es Bisiesto")
        }
    }else{
        console.log(`El año ${year} es Bisiesto`)
    }
}else{
    console.log("El año "+year, "No es Bisiesto")
}   
