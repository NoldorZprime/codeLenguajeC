---
title: Bucle Do-While
description: A reference page in my new Starlight docs site.
---


La sentencia `do-while` se utiliza para especificar un bucle condicional que se ejecuta al menos una vez. Esta situación se suele dar en algunas circunstancias en las que se ha de tener la seguridad de que una determinada acción se ejecutará una o varias veces, pero al menos una vez.

**Sintaxis**  
1.  
2.  
Acción (sentencia) a ejecutar  
al menos una vez  
Expresión lógica que  
determina si la acción  
se repite  
```c
/do sentencia while (expresión)
do
sentencia
while (expresión)
```

La construcción `do` comienza ejecutando `sentencia`. Se evalúa a continuación `expresión`. Si  
`expresión` es verdadera, entonces se repite la ejecución de `sentencia`. Este proceso continúa hasta que  
`expresión` es falsa. La semántica del bucle `do` se representa gráficamente en la Figura 6.3.

**Diagrama de flujo de la sentencia do.**

## Diferencias entre `while` y `do-while`


**Ejemplo 6.8**  
Bucle para introducir un dígito.
```c
do {
    printf("Introduzca un dígito (0-9): ");
    scanf("%c", &digito);
} while ((digito < '0') || ('9' < digito));
```
Este bucle se realiza mientras se introduzcan dígitos y se termina cuando se introduzca un carácter  
que no sea un dígito de '0' a '9'.

**Ejercicio 6.2**  
Aplicación simple de un bucle `while`: seleccionar una opción de saludo al usuario dentro de un programa.
```c
#include <stdio.h>
int main() {
    char opcion;
    do {
        puts("Hola");
        puts("¿Desea otro tipo de saludo?");
        puts("Pulse s para sí y n para no,");
        printf("y a continuación pulse intro: ");
        scanf("%c", &opcion);
    } while (opcion == 's' || opcion == 'S');
    puts("Adiós");
    return 0;
}
```

**Salida de muestra**
```
Hola  
¿Desea otro tipo de saludo?  
Pulse s para sí y n para no,  
y a continuación pulse intro: S  
Hola  
¿Desea otro tipo de saludo?  
Pulse s para sí y n para no,  
y a continuación pulse intro: N  
Adiós
```

Una sentencia `do-while` es similar a una sentencia `while` excepto que el cuerpo del bucle se ejecuta  
siempre al menos una vez.

**Sintaxis**

**Sentencia compuesta**
```c
do {
    sentencia-1;
    sentencia-2;
    ...
    sentencia-n;
} while (expresion-lógica)
```

**Sentencia simple**
```c
while (Expresión-lógica)
    do sentencia
    while (expresión-lógica)
```

**Ejemplo 1**
```c
/*
*/
int x = 0;
do
    printf("X: %d", x++);
while (x < 10);
```
Cuenta de 0 a 10 (sin incluir el 10)

**Ejemplo 2**
```c
/*
*/
char car = 'a';
do {
    // Bucle para imprimir las letras minúsculas del alfabeto
    printf("%c\t", car);
    car++;
} while (car <= 'z');
```

**Ejemplo 6.9**  
Visualizar las potencias de 2 cuyos valores estén en el rango 1 a 1.000.

```c
/* Realizado con while */
potencia = 1;
while (potencia < 1000) {
    printf("%d \n", potencia);
    potencia *= 2;
} /* Fin de while */

/* Realizado con do-while */
potencia = 1;
do {
    printf("%d \n", potencia);
    potencia *= 2;
} while (potencia < 1000);
```
