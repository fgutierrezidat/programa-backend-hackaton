// ### 4. Clasifica edades usando `if else if`
// - Leer una edad.
// - Mostrar: "niño" (<12), "adolescente" (12-17), "adulto" (18-59), "adulto mayor" (60+).

let edad = parseInt(prompt('Ingrese la edad:'));

if (edad<12) {
    console.log('Niño');
} else if (edad<=17) {
    console.log('Adolescente');
} else if (edad<=59) {
    console.log('Adulto');
} else {
    console.log('Adulto Mayor');
}