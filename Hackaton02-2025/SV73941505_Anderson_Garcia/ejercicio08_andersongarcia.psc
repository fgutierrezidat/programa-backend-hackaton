Algoritmo credenciales
	Definir usuario,contraseņa Como Caracter
	Definir tienenum Como Logico
	Definir i Como Entero
	tienenum <- Falso
	Escribir "Ingrese el nombre del usuario: "
	Leer usuario
	Escribir "ingrese la contraseņa: "
	leer contraseņa
	si Longitud(usuario) < 6 Entonces
		Escribir "el nombre de usuario debe ser de minimo 6 caracteres"
	FinSi
	
	si Longitud(contraseņa) < 8 Entonces
		Escribir "La contraseņa deber tener al menos 8 caracteres"
	FinSi
	Para i <- 1 Hasta Longitud(contraseņa)
		si Subcadena(contraseņa, i, i) <= "9" Entonces
			tienenum <- Verdadero
		FinSi
	FinPara
	si tienenum = Falso Entonces
		Escribir "La contraseņa debe disponer de un numero"
	FinSi
	Si Longitud(usuario) >= 6 y Longitud(contraseņa) >= 8 y tienenum Entonces
		Escribir "Acceso permitido"
	FinSi
FinAlgoritmo
