---
title: Inicialización de un array
description: A reference page in my new Starlight docs site.
---

Se deben asignar valores a los elementos del array antes de utilizarlos, tal como se asignan valores a variables. Para asignar valores a cada elemento del array de enteros precios, se puede escribir:

```c
precios[0] = 10;
precios[1] = 20;
precios[2] = 30;
precios[4] = 40;
```

La primera sentencia fija `precios[0]` al valor 10, `precios[1]` al valor 20, etc. Sin embargo, este método no es práctico cuando el array contiene muchos elementos. El método utilizado, normalmente, es inicializar el array completo en una sola sentencia.

Cuando se inicializa un array, el tamaño del array se puede determinar automáticamente por las constantes de inicialización. Estas constantes se separan por comas y se encierran entre llaves, como en los siguientes ejemplos:

```c
int numeros[6] = {10, 20, 30, 40, 50, 60};
int n[3] = {3, 4, 5}; /* Declara un array de 3 elementos */
char c[] = {'L', 'u', 'i', 's'}; /* Declara un array de 4 elementos */
```

El array `numeros` tiene 6 elementos, `n` tiene 3 elementos y el array `c` tiene 4 elementos.

En C los arrays de caracteres, las cadenas, se caracterizan por tener un carácter final que indica el fin de la cadena, es el carácter nulo. Lo habitual es inicializar un array de caracteres (una variable cadena) con una constante cadena.

```c
char s[] = "Puesta del Sol";
```

Nota: c puede tener elementos vacíos, sólo cuando se asignan valores al array.

El compilador asigna automáticamente cinco elementos a `cuenta`.

El método de inicializar arrays mediante valores constantes después de su definición es adecuado cuando el número de elementos del array es pequeño. Por ejemplo, para inicializar un array (lista) de 10 enteros a los valores 10, 9, 8, etc., y a continuación visualizar dichos valores en un orden inverso, se puede escribir:

```c
int cuenta[10] = {10, 9, 8, 7, 6, 5, 4, 3, 2, 1};
for (i = 9; i >= 0; i--)
    printf("\n cuenta descendente %d = %d", i, cuenta[i]);
```

Se pueden asignar constantes simbólicas como valores numéricos, de modo que las sentencias siguientes son válidas:

```c
#define ENE 31
#define FEB 28
#define MAR 31
int meses[12] = {ENE, FEB, MAR, ABR, MAY, JUN, JUL, AGO, SEP, OCT, NOV, DIC};
```

Pueden asignarse valores a un array utilizando un bucle `for` o `while/do-while`, y éste suele ser el sistema más empleado normalmente. Por ejemplo, para inicializar todos los valores del array `numeros` al valor 0, se puede utilizar la siguiente sentencia:

```c
for (i = 0; i <= 5; i++)
    numeros[i] = 0;
```

Debido a que el valor del subíndice `i` va de 0 a 5, cada elemento del array `numeros` se inicializa y establece a cero.

**Ejemplo**

El programa `INICIALI.C` lee ocho enteros; a continuación visualiza el total de los números.

```c
#include <stdio.h>
#define NUM 8

int main() {
    int nums[NUM];
    int i;
    int total = 0;

    for (i = 0; i < NUM; i++) {
        printf("Por favor, introduzca el número: ");
        scanf("%d", &nums[i]);
    }

    printf("\nLista de números: ");
    for (i = 0; i < NUM; i++) {
        printf("%d ", nums[i]);
        total += nums[i];
    }
    printf("\nLa suma de los números es %d", total);
    return 0;
}
```

Las variables globales que representan arrays se inicializan a 0 por defecto. Por ello, la ejecución del siguiente programa visualiza 0 para los 10 valores del array:

```c
int lista[10];
int main() {
    int j;
    for (j = 0; j <= 9; j++)
        printf("\n lista[%d] = %d", j, lista[j]);
    return 0;
}
```

Así, por ejemplo, en:

```c
int Notas[5];
void main() {
    static char Nombres[5];
}
```

Si se define un array globalmente o un array estático y no se proporciona ningún valor de inicialización, el compilador inicializará el array con un valor por defecto (cero para arrays de elementos enteros y reales – coma flotante – y carácter nulo para arrays de caracteres). El array de enteros se ha definido globalmente y el array de caracteres se ha definido como un array local estático de `main()`. Si se ejecuta ese segmento de programa, se obtendrán las siguientes asignaciones a los elementos de los arrays.
