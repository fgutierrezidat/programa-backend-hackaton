Proceso Invertir_Num
    Definir num, inversa, digito Como Entero
    Escribir "Ingrese un n�mero entero:"
    Leer num
    inversa <- 0
    Mientras num > 0 Hacer
        digito <- num % 10              
        inversa <- inversa * 10 + digito 
        num <- Trunc(num/ 10)         
    FinMientras
	
    Escribir "N�mero invertido: ", inversa
FinProceso