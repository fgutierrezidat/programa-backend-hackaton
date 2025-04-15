// 3. Simula un inicio de sesion con 3 intentos
// Usar while
// usuario debe ingresar usuario y contraseña correctos
// Bloquear si falla 3 veces

let intentos = 0;
let user;
let pass;

while(intentos < 3){
    user = prompt("Escribe el usuario: ");
    pass = prompt("Escriba su contraseña: ");

    if (user === "anderson" && pass ==="1234"){
        console.log("Acceso concedido")
        break;
    }else{
        intentos++;
        console.log(`Usuario y/o contraseña incorrecto, intento ${intentos} de 3.`);
    }
    if (intentos === 3 ){
        console.log("Has fallado 3 veces, se te bloqueara");
    }
}
