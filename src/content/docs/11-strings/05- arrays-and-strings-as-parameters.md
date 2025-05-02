---
title: Arrays y cadenas como parámetros de funciones
description: A reference page in my new Starlight docs site.
---

**En los arrays y cadenas siempre se pasa la dirección del objeto, un puntero al primer elemento del array.**  
En la función, las referencias a los elementos individuales se hacen por indirección de la dirección del objeto. Considérese el programa `PASARRAY.C`, que implementa una función `longitud()` que calcula la longitud de una cadena terminada en nulo. El parámetro `cad` se declara como un array de caracteres de tamaño desconocido.

```c
/* PASARRAY.C */
#include <stdio.h>
#include <conio.h>
int longitud(char cad[]);
void main(void)
{
    char* cd = "Cualquier momento es bueno para la felicidad";
    printf("\nLongitud de la cadena \"%s\": %d\n", cd, longitud(cd));
    puts("Pulse cualquier tecla para continuar");
    getch();
}

int longitud(char cad[])
{
    int cuenta = 0;
    while (cad[cuenta++] != '\0');
    return cuenta;
}
```

En la función `main()` se reserva memoria para la constante cadena `cd`, a la función `longitud()` se transmite la dirección de la cadena. El cuerpo del bucle `while` dentro de la función cuenta los caracteres no nulos y termina cuando se encuentra el byte nulo al final de la cadena.

**Ejercicio 12.3**  
El programa siguiente extrae *n* caracteres de una cadena introducida por el usuario.

**Análisis**  
La extracción de caracteres se realiza en una función que tiene como primer argumento la subcadena a extraer, como segundo argumento la cadena fuente y el tercero el número de caracteres a extraer. Se utilizan los punteros para pasar arrays a la función.

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <conio.h>

int extraer(char *dest, const char *fuente, int num_cars);

void main(void)
{
    char s1[81];
    char* s2;
    int n;
    printf("\n\tCadena a analizar ? : ");
    gets(s1);
    do {
        printf("Numero de caracteres a extraer: ");
        scanf("%d", &n);
    } while(n < 1 || n > strlen(s1));

    s2 = malloc((n + 1) * sizeof(char));
    extraer(s2, s1, n);
    printf(" Cadena extraida \"%s\"", s2);
    puts("\nPulse intro para continuar");
    getch();
}

int extraer(char *dest, const char *fuente, int num_cars)
{
    int cuenta;
    for (cuenta = 0; cuenta < num_cars; cuenta++)
        *dest++ = *fuente++;
    *dest = '\0';
}
```

Observe que en las declaraciones de parámetros, ninguno está definido como array, sino como punteros de tipo `char`. En la línea `*dest++ = *fuente++;` los punteros se utilizan para acceder a las cadenas fuente y destino, respectivamente. En la llamada a la función `extraer()` se pasa la dirección de las cadenas fuente y destino.

