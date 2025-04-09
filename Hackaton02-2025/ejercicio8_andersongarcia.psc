Algoritmo credenciales
	Definir usuario,contraseña Como Caracter
	Definir tienenum Como Logico
	Definir i Como Entero
	tienenum <- Falso
	Escribir "Ingrese el nombre del usuario: "
	Leer usuario
	Escribir "ingrese la contraseña: "
	leer contraseña
	si Longitud(usuario) < 6 Entonces
		Escribir "el nombre de usuario debe ser de minimo 6 caracteres"
	FinSi
	
	si Longitud(contraseña) < 8 Entonces
		Escribir "La contraseña deber tener al menos 8 caracteres"
	FinSi
	Para i <- 1 Hasta Longitud(contraseña)
		si Subcadena(contraseña, i, i) <= "9" Entonces
			tienenum <- Verdadero
		FinSi
	FinPara
	si tienenum = Falso Entonces
		Escribir "La contraseña debe disponer de un numero"
	FinSi
	Si Longitud(usuario) >= 6 y Longitud(contraseña) >= 8 y tienenum Entonces
		Escribir "Acceso permitido"
	FinSi
FinAlgoritmo
