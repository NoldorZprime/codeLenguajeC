---
title: Expresiones condicionales
description: A reference page in my new Starlight docs site.
---

Además de las sentencias de selección `if` y `switch`, el lenguaje C proporciona un tercer mecanismo de selección conocido como **expresión condicional**. Esta expresión evalúa una condición lógica o booleana y produce uno de dos valores posibles como resultado. Es similar a las construcciones de selección en otros lenguajes, pero presenta una sintaxis concisa.

Una expresión condicional tiene el formato `condición ? A : B`, donde `? :` es un operador ternario (que requiere tres operandos). Los operandos son:

* **`condición`**: Una expresión lógica que se evalúa.
* **`A`**: La expresión que se evalúa y cuyo resultado se devuelve si la `condición` es verdadera (distinta de cero).
* **`B`**: La expresión que se evalúa y cuyo resultado se devuelve si la `condición` es falsa (cero).

**Sintaxis**

```c
condición ? expresión_verdadera : expresión_falsa
```

Donde:

* **`condición`**: Es una expresión lógica.
* **`expresión_verdadera`**: Es una expresión que se evalúa si la `condición` es verdadera.
* **`expresión_falsa`**: Es una expresión que se evalúa si la `condición` es falsa.

Las `expresión_verdadera` y `expresión_falsa` deben ser de tipos compatibles.

**Funcionamiento**

1.  Se evalúa la `condición`.
2.  Si el valor de la `condición` es **verdadera** (distinto de cero), entonces el resultado de la expresión condicional es el valor de `expresión_verdadera`.
3.  Si el valor de la `condición` es **falsa** (cero), entonces el resultado de la expresión condicional es el valor de `expresión_falsa`.

Un uso común del operador condicional `?:` es seleccionar la ejecución de una de dos funciones.

**Ejemplos**

1.  **Selección de función:**

    ```c
    a == b ? funcion1() : funcion2();
    ```

    Esta línea de código es equivalente a la siguiente sentencia `if-else`:

    ```c
    if (a == b) {
        funcion1();
    } else {
        funcion2();
    }
    ```

2.  **Asignación del menor de dos valores:**

    ```c
    int entrada1, entrada2;
    int menor;

    scanf("%d %d", &entrada1, &entrada2);
    menor = entrada1 <= entrada2 ? entrada1 : entrada2;
    ```

    En este fragmento, el operador condicional se utiliza para asignar a la variable `menor` el valor de `entrada1` si `entrada1` es menor o igual a `entrada2`; de lo contrario, se asigna el valor de `entrada2`.

**Selección del Mayor de Dos Números**

```c
#include <stdio.h>

int main() {
    float n1, n2;

    printf("Introduzca dos números positivos o negativos: ");
    scanf("%f %f", &n1, &n2);

    /* Selección con if - else */
    if (n1 > n2) {
        printf("%.0f > %.0f\n", n1, n2);
    } else {
        printf("%.0f <= %.0f\n", n1, n2);
    }

    /* Operador condicional */
    n1 > n2 ? printf("%.0f > %.0f\n", n1, n2) : printf("%.0f <= %.0f\n", n1, n2);

    return 0;
}
```

Este programa ilustra cómo seleccionar e imprimir la relación entre dos números (`n1` y `n2`) utilizando tanto la sentencia `if-else` como el operador condicional `?:`. Ambas formas logran el mismo resultado, pero la expresión condicional ofrece una sintaxis más compacta.