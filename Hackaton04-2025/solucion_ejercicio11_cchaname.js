// 11. Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.
// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700

const matriz = [
       { name: "John", age: 21, budget: 23000 },
       { name: "Steve",  age: 32, budget: 40000 },
       { name: "Martin",  age: 16, budget: 2700 }
    ];

function getBudgets(array){
    let sum=0;
    array.forEach(element => {
        sum += element['budget'];
    });
    return sum;
}

const sumaPresupuestos = getBudgets(matriz);
console.log(`La suma de presupuestos es: ${sumaPresupuestos}`);