// 13. Escriba una función que convierta un objeto en una matriz de claves y valores.
// objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

const objeto = {
       likes: 2,
       dislikes: 3,
       followers: 10
     }

function toArray(objeto){
    const claves =  Object.keys(objeto);
    const valores =  Object.values(objeto);
    let arreglo = [];
    for(let i=0; i<claves.length; i++){
        const aux = [claves[i],valores[i]];
        arreglo.push(aux);
    }
    return arreglo;   
}

console.log(toArray(objeto));