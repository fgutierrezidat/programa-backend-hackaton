// 5. Crear una función que reciba un array de valores y filtre los valores que no son string

const arrayInicial = [2, "papel", {nombre: "Pedro", apellido: "Perez"}, 0.5, "carton", false, null, {nombre: "Ana", apellido: "Calderon"}];

function filtrarArrayNoString(array) {
    return array.filter(elemento => typeof elemento !== "string");
}

let arrayFiltrado = filtrarArrayNoString(arrayInicial);
console.log(arrayFiltrado);