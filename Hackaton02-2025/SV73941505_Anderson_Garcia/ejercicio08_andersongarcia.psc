Algoritmo credenciales
	Definir usuario,contrase�a Como Caracter
	Definir tienenum Como Logico
	Definir i Como Entero
	tienenum <- Falso
	Escribir "Ingrese el nombre del usuario: "
	Leer usuario
	Escribir "ingrese la contrase�a: "
	leer contrase�a
	si Longitud(usuario) < 6 Entonces
		Escribir "el nombre de usuario debe ser de minimo 6 caracteres"
	FinSi
	
	si Longitud(contrase�a) < 8 Entonces
		Escribir "La contrase�a deber tener al menos 8 caracteres"
	FinSi
	Para i <- 1 Hasta Longitud(contrase�a)
		si Subcadena(contrase�a, i, i) <= "9" Entonces
			tienenum <- Verdadero
		FinSi
	FinPara
	si tienenum = Falso Entonces
		Escribir "La contrase�a debe disponer de un numero"
	FinSi
	Si Longitud(usuario) >= 6 y Longitud(contrase�a) >= 8 y tienenum Entonces
		Escribir "Acceso permitido"
	FinSi
FinAlgoritmo
