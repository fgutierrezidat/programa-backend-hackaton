// 12. Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
// getStudentNames([
//   { name: "Steve" },
//   { name: "Mike" },
//   { name: "John" }
// ]) ➞ ["Becky", "John", "Steve"]

const estudiantes = [
       { name: "Steve" },
       { name: "Mike" },
       { name: "John" }
    ]

function getStudentNames(array){
    let names = [];
    array.forEach(element => {
        let nombre = element["name"];
        names.push(nombre);
    });
    return names;
}

console.log(getStudentNames(estudiantes));