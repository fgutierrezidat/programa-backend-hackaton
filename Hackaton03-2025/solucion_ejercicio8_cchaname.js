// ### 8. Simula un menú interactivo
// - Mostrar opciones en consola (suma, resta, salir).
// - Usar `do while` para repetir hasta que elija salir.

let option;

do {
    option = prompt(`Ingrese una opción del menu:
                    1. suma
                    2. resta
                    3. salir`);
}while(option.toLowerCase() !== "salir" && option !== "3");