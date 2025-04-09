Algoritmo rareza
	Definir num Como Entero
	Escribir "digite su numero: "
	Leer num
	si num mod 2 = 0 Y num < 50 entonces
		Escribir "Numero discreto"
	FinSi
	si num mod 2 <> 0 Y num > 100 Entonces
		Escribir "Numero rebelde"
	FinSi
	si num % 7 = 0 Entonces
		Escribir "Numero mistico"
	FinSi
	Si NO (num mod 2 = 0 Y num < 50) Y NO (num mod 2 <> 0 Y num > 100) Y NO (num % 7 = 0) Entonces
		Escribir "No se cumple ninguna condicion"
	FinSi
	Escribir "gracias por usar el programa"
FinAlgoritmo
