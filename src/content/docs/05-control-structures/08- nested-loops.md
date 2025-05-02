---
title: Bucles anidados
description: A reference page in my new Starlight docs site.
---

Es posible anidar bucles. Los bucles anidados constan de un bucle externo con uno o más bucles internos. Cada vez que se repite el bucle externo, los bucles internos se repiten, se vuelven a evaluar los componentes de control y se ejecutan todas las iteraciones requeridas.

**Ejemplo 6.10**  
El segmento de programa siguiente visualiza una tabla de multiplicación por cálculo y visualización de productos de la forma x * y para cada x en el rango de 1 a Xúltimo y y desde 1 hasta Yúltimo (donde Xúltimo y Yúltimo son enteros prefijados). La Tabla que se desea obtener es:

```
1 * 1 = 1
1 * 2 = 2
1 * 3 = 3
1 * 4 = 4
1 * 5 = 5
2 * 1 = 2
2 * 2 = 4
2 * 3 = 6
2 * 4 = 8
2 * 5 = 10
```

```c
for (x = 1; x <= Xultimo; x++) {
    for (y = 1; y <= Yultimo; y++) {
        int producto;
        producto = x * y;
        printf("%d * %d = %d\n", x, y, producto);
    }
}
```

El bucle que tiene x como variable de control se denomina bucle externo y el bucle que tiene y como variable de control se denomina bucle interno.

**Ejemplo 6.11**  
```c
/* Escribe las variables de control de dos bucles anidados */
#include <stdio.h>

void main() {
    int i, j;

    /* cabecera de la salida */
    printf("\n\t\ti \t j\n");

    for (i = 0; i < 4; i++) {
        printf("Externo\t %d\n", i);
        for (j = 0; j < i; j++) {
            printf("Interno\t\t%d \n", j);
        }
    }
}
```

La salida del programa es:

```
Externo   0
Externo   1
Interno   0
Externo   2
Interno   0
Interno   1
Externo   3
Interno   0
Interno   1
Interno   2
```

**Ejercicio**  
Escribir un programa que visualice un triángulo isósceles.

```
* * *
* * * * *
* * * * * * *
* * * * * * * * *
```

El triángulo isósceles se realiza mediante un bucle externo y dos bucles internos. Cada vez que se repite el bucle externo se ejecutan los dos bucles internos. El bucle externo se repite cinco veces (cinco filas); el número de repeticiones realizadas por los bucles internos se basan en el valor de la variable fila. El primer bucle interno visualiza los espacios en blanco no significativos; el segundo bucle interno visualiza uno o más asteriscos.

```c
#include <stdio.h>

/* constantes globales */
const int num_lineas = 5;
const char blanco = ' ';
const char asterisco = '*';

void main() {
    int fila, blancos, cuenta_as;
    puts(" "); /* Deja una línea de separación */

    /* bucle externo: dibuja cada línea */
    for (fila = 1; fila <= num_lineas; fila++) {
        putchar('\t');
        /* primer bucle interno: escribe espacios */
        for (blancos = num_lineas - fila; blancos > 0; blancos--)
            putchar(blanco);
        putchar(asterisco);
        for (cuenta_as = 1; cuenta_as <= (2 * fila - 1); cuenta_as++)
            putchar(asterisco);
        /* terminar línea */
        puts(" ");
    }
}
```

El bucle externo se repite cinco veces, uno por línea o fila; el número de repeticiones ejecutadas por los bucles internos se basa en el valor de fila. La primera fila consta de un asterisco y cuatro blancos, la fila 2 consta de tres blancos y tres asteriscos, y así sucesivamente; la fila 5 tendrá 9 asteriscos (2 * 5 - 1). En este ejercicio se ha utilizado para salida de un carácter la función `putchar()`. Esta función escribe un argumento de tipo carácter en la pantalla.

**Ejercicio**  
Ejecutar el programa siguiente que imprime una tabla de filas por n columnas y un carácter de entrada.

```c
#include <stdio.h>

int main() {
    int filas, columnas;
    int i, j;
    char elCar;

    printf("¿Cuántas filas?: ");
    scanf("%d", &filas);
    printf("¿Cuántas columnas?: ");
    scanf("%d", &columnas);
    printf("¿Qué carácter?: ");
    scanf("\n%c", &elCar);

    for (i = 0; i < filas; i++) {
        for (j = 0; j < columnas; j++) {
            putchar(elCar);
        }
        putchar('\n');
    }

    return 0;
}
```

**Análisis**  
El usuario solicita el número de filas y de columnas y un carácter a imprimir. Para leer el carácter a escribir es necesario saltarse el carácter fin de línea (`scanf("\n%c", &elCar)`) que se encuentra en el buffer de entrada, debido a la petición anterior del número de columnas. El primer bucle `for` de la línea 14 inicializa un contador (`i`) a 0 y a continuación se ejecuta el cuerpo del bucle `for` externo. En la línea 16 se inicializa otro bucle `for` y un segundo contador `j` se inicializa a 0 y se ejecuta el cuerpo del bucle interno. En la línea 17 se imprime el carácter `elCar`. Se evalúa la condición (`j < columnas`) y si se evalúa a verdadero, `j` se incrementa y se imprime el siguiente carácter. Esta acción se repite hasta que `j` sea igual al número de columnas. El bucle interno imprime los caracteres asterisco en una misma fila y el bucle externo repite cuatro veces (número de filas) la fila de caracteres.

**Ejercicio**  
Escribir en pantalla el factorial de `n`, entre los valores 1 y 10. Con dos bucles `for` se soluciona el problema. El bucle externo determina el número `n` cuyo factorial se calcula en el bucle interno.

```c
#include <stdio.h>
#define S 10

int main() {
    long int n, m, fact;

    for (n = 1; n <= S; n++) {
        fact = 1;
        for (m = n; m > 1; m--) {
            fact *= m;
        }
        printf("\t%ld! = %ld\n", n, fact);
    }

    return 0;
}
```
