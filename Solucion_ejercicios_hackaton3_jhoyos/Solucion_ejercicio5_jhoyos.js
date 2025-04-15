year = parseInt(prompt("Ingrese el año actual:"));

if(year % 100 === 0 && year % 400 ===0){
    alert("El año es bisiesto");
}
else if(year % 4 === 0){
    alert("El año es bisiesto");
}
else{
    alert("El año no es bisiesto");
}