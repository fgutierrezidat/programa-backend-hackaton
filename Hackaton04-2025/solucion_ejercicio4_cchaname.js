// 4. Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)

function sumar(...numeros){
    return numeros.reduce((acumulador, numero) => acumulador + numero,0)
}

const resultado = sumar(1,2,3,4,5,6,7,8,9,10);
console.log(`El resultado de la suma de elementos es: ${resultado}`);