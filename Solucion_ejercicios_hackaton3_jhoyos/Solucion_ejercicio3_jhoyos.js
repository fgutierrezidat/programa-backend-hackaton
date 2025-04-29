let intentos = 3;
let accesoConcedido = false;

while (intentos > 0 && !accesoConcedido) {
    let usuario = prompt("Ingrese su usuario:");
    let contrasena = prompt("Ingrese su contraseña:");
    
    if (usuario === "768222" && contrasena === "1234") {
        accesoConcedido = true;
        alert("¡Inicio de sesión exitoso! Bienvenido.");
    } else {
        intentos--;
        if (intentos > 0) {
            alert(`Credenciales incorrectas. Te quedan ${intentos} intento(s).`);
        } else {
            alert("Has excedido el número de intentos. Cuenta bloqueada temporalmente.");
        }
    }
}