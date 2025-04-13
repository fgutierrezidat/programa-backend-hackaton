Proceso Invertir_Num
    Definir num, inversa, digito Como Entero
    Escribir "Ingrese un número entero:"
    Leer num
    inversa <- 0
    Mientras num > 0 Hacer
        digito <- num % 10              
        inversa <- inversa * 10 + digito 
        num <- Trunc(num/ 10)         
    FinMientras
	
    Escribir "Número invertido: ", inversa
FinProceso