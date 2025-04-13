Algoritmo num_mayores
	Definir num, digito, i Como Entero
	digito <- 0
	para i <- 1 Hasta 5 Con Paso 1
		Escribir "Ingrese el numero ", i, ":"
		Leer num
		si	num > 50 Entonces
			digito <- digito + 1
		FinSi
	FinPara
	Escribir "La cantidad de numeros mayores a 50 es de: ", digito
FinAlgoritmo
