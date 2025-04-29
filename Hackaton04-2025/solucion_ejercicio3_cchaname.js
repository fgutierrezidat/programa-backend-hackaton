// 3. Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js

let valor = "hola";

function tipoDeValor(valor) {
    return typeof valor;
}

let tipo = tipoDeValor(valor);
console.log(tipo);