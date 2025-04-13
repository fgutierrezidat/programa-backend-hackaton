// ### 3. Simula un inicio de sesión con 3 intentos
// - Usar `while`.
// - Usuario debe ingresar usuario y contraseña correctos.
// - Bloquear si falla 3 veces.

const usuarioCorrecto = "admin";
const contrasenaCorrecta = "1234";

let intentos = 0;
let accesoConcedido = false;

while (intentos < 3 && !accesoConcedido) {
    const usuario = prompt("Ingrese su nombre de usuario:");
    const contrasena = prompt("Ingrese su contraseña:");

    if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
        alert("¡Acceso concedido!");
        accesoConcedido = true;
    } else {
        intentos++;
        if (intentos < 3) {
            alert(`Credenciales incorrectas. Te quedan ${3 - intentos} intento(s).`);
        }
    }
}

if (!accesoConcedido) {
    alert("Cuenta bloqueada. Has excedido el número de intentos.");
}