
let edad = parseInt(prompt("Ingrese su edad:"));

if(edad<12){
    alert("Eres un niño");
}
else if( edad >=12 && edad<=17){
    alert("Eres un adolescente");
}
else if (edad >=18 && edad <= 64){
    alert("Eres un adulto");
}
else{
    alert("Eres un adulto mayor");
}