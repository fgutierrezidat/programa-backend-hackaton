let numero = parseInt(prompt("Ingresa un número del 1 al 10:"));
if (numero >= 1 && numero <= 10) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    
    for (let i = 1; i <= 12; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
} else {
    console.log("Número no válido. Debe ser entre 1 y 10.");
}