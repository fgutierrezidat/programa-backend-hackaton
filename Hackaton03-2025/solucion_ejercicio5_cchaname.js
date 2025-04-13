// ### 5. Determina si un año es bisiesto
// - Usar `if` anidados.
// - Mostrar si el año ingresado es bisiesto o no.

let year = parseInt(prompt('Ingrese un año:'));

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            alert(year + " es un año bisiesto.");
        } else {
            alert(year + " no es un año bisiesto.");
        }
    } else {
        alert(year + " es un año bisiesto.");
    }            
} else {
    alert(year + " no es un año bisiesto.");
}