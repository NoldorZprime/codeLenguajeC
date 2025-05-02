---
title: Recursividad
description: A reference page in my new Starlight docs site.
---

Una función recursiva es una función que se llama a sí misma directa o indirectamente. La recursividad o recursión directa es el proceso por el que una función se llama a sí misma desde el propio cuerpo de la función. La recursividad o recursión indirecta implica más de una función.

La recursividad indirecta implica, por ejemplo, la existencia de dos funciones: uno() y dos(). Suponga que `main()` llama a `uno()`, y a continuación `uno()` llama a `dos()`. En alguna parte del proceso, `dos()` llama a `uno()` —una segunda llamada a `uno()`—. Esta acción es recursión indirecta, pero es recursiva, ya que `uno()` ha sido llamada dos veces, sin retornar nunca a su llamadora.

Un proceso recursivo debe tener una condición de terminación, ya que si no puede continuar indefinidamente.

Un algoritmo típico que conduce a una implementación recursiva es el cálculo del factorial de un número. El factorial de `n` (`n!`):

```
n! = n * (n-1) * (n-2) * ... * 3 * 2 * 1
```

En consecuencia, el factorial de 4 es igual a `4*3*2*1`, el factorial de 3 es igual a `3*2*1`. Así pues, el factorial de 4 es igual a 4 veces el factorial de 3. La Figura 7.10 muestra la secuencia de sucesivas invocaciones a la función factorial.

Figura 7.10. Llamadas a funciones recursivas para `factorial(5)`:

```
factorial(5) = 120
5*4*3*2*1
factorial(4)
factorial(3)
factorial(2)
factorial(1)
```

**Ejemplo 7.7**  
Realizar el algoritmo de la función factorial.  
La implementación de la función recursiva factorial es:

```c
double factorial(int numero) {
    if (numero > 1)
        return 1;
    return numero * factorial(numero - 1);
}
```

**Ejemplo 7.8**  
Contar valores de 1 a 10 de modo recursivo.

```c
#include <stdio.h>

void contar(int cima);

int main() {
    contar(10);
    return 0;
}

void contar(int cima) {
    if (cima > 1)
        contar(cima - 1);
    printf("%d ", cima);
}
```

**Ejemplo 7.9**  
Determinar si un número entero positivo es par o impar; con dos funciones que se llaman mutuamente: recursividad indirecta.

```c
#include <stdio.h>

int par(int n);
int impar(int n);

int main(void) {
    int n;
    do {
        /* Entrada: entero > 0 */
        printf("\nEntero > 0: ");
        scanf("%d", &n);
    } while (n <= 0);

    /* Llamada a la función par() */
    if (par(n))
        printf("El número %d es par.\n", n);
    else
        printf("El número %d es impar.\n", n);

    return 0;
}

int par(int n) {
    if (n == 0)
        return 1; /* es par */
    return impar(n - 1);
}

int impar(int n) {
    if (n == 0)
        return 0; /* es impar */
    return par(n - 1);
}
```

La función `par()` llama a la función `impar()`, ésta a su vez llama a la función `par()`. La condición para terminar de hacer llamadas es que `n` sea cero; el cero se considera par.
