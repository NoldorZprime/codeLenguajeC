---
title: If-else anidados
description: A reference page in my new Starlight docs site.
---

Hasta ahora, hemos visto sentencias `if` que implementan decisiones con una o dos alternativas (`if` e `if-else`). En esta sección, exploraremos cómo anidar sentencias `if` para manejar decisiones que involucran múltiples alternativas.

**¿Qué es una Sentencia `if` Anidada?**

Una sentencia `if` se considera anidada cuando la sentencia que se ejecuta dentro de la rama verdadera (`if`) o la rama falsa (`else`) es, a su vez, otra sentencia `if`. Esta técnica permite construir estructuras de control complejas para evaluar múltiples condiciones.

**Sintaxis de las Sentencias `if` Anidadas**

La sintaxis general de una sentencia `if` anidada puede adoptar varias formas. Una estructura común para implementar decisiones multi-alternativa es la siguiente:

```c
if (condición_1) {
    sentencia_1;
} else if (condición_2) {
    sentencia_2;
} else if (condición_3) {
    sentencia_3;
} else {
    sentencia_n;
}
```

Esta estructura evalúa las condiciones en orden. Si `condición_1` es verdadera, se ejecuta `sentencia_1` y se omite el resto de la estructura. Si `condición_1` es falsa, se evalúa `condición_2`, y así sucesivamente. Si ninguna de las condiciones anteriores es verdadera, se ejecuta la `sentencia_n` dentro del bloque `else` (si existe).

**Incremento de Contadores**

```c
/* Incrementar contadores de números positivos, negativos o ceros */
if (x > 0) {
    num_pos = num_pos + 1;
} else if (x < 0) {
    num_neg = num_neg + 1;
} else {
    num_ceros = num_ceros + 1;
}
```

Esta sentencia `if` anidada tiene tres alternativas. Dependiendo del valor de `x`, se incrementa en 1 una de las tres variables: `num_pos` (si `x` es mayor que cero), `num_neg` (si `x` es menor que cero), o `num_ceros` (si `x` es igual a cero).

**Funcionamiento:**

1.  Se evalúa la primera condición (`x > 0`).
2.  Si es verdadera, se incrementa `num_pos` y se salta el resto de la estructura `if-else if-else`.
3.  Si es falsa, se evalúa la segunda condición (`x < 0`).
4.  Si la segunda condición es verdadera, se incrementa `num_neg`.
5.  Si la segunda condición también es falsa (lo que implica que `x` no es mayor ni menor que cero), se ejecuta el bloque `else`, incrementando `num_ceros`.

Es crucial notar que la segunda condición (`x < 0`) solo se verifica si la primera condición (`x > 0`) es falsa.

## Sangría en las Sentencias `if` Anidadas

La correcta indentación es fundamental para la legibilidad de las sentencias `if` anidadas. Los dos formatos presentados en el texto original ilustran diferentes estilos de indentación para estructuras multi-alternativa:

**Formato 1 (Anidación Vertical):**

```c
if (expresión_lógica_1) {
    sentencia_1;
} else {
    if (expresión_lógica_2) {
        sentencia_2;
    } else {
        if (expresión_lógica_3) {
            sentencia_3;
        } else {
            sentencia_n;
        }
    }
}
```

**Formato 2 (Uso de `else if`):**

```c
if (expresión_lógica_1) {
    sentencia_1;
} else if (expresión_lógica_2) {
    sentencia_2;
} else if (expresión_lógica_3) {
    sentencia_3;
} else {
    sentencia_n;
}
```

El **Formato 2** (con `else if`) es generalmente preferible ya que reduce la anidación excesiva y mejora la claridad de la estructura multi-alternativa.

**Ejemplos:**

1.  **Anidación Vertical:**

    ```c
    if (x > 0) {
        z = 2 * log(x);
    } else {
        if (y > 0) {
            z = sqrt(x) + sqrt(y);
        } else {
            puts("\n*** Imposible calcular z ***");
        }
    }
    ```

2.  **Uso de `else if`:**

    ```c
    if (x > 0) {
        z = 2 * log(x);
    } else if (y > 0) {
        z = sqrt(x) + sqrt(y);
    } else {
        puts("\n*** Imposible calcular z ***");
    }
    ```

Ambos fragmentos de código son lógicamente equivalentes, pero el segundo es más fácil de leer y entender.

**Selección Múltiple con `if-else if-else`**

```c
#include <stdio.h>

int main() {
    float numero;

    printf("Introduzca un número positivo o negativo: ");
    scanf("%f", &numero);

    /* Comparar número con cero */
    if (numero > 0) {
        printf("%.2f es mayor que cero\n", numero);
        puts("Pruebe de nuevo introduciendo un número negativo");
    } else if (numero < 0) {
        printf("%.2f es menor que cero\n", numero);
        puts("Pruebe de nuevo introduciendo un número positivo");
    } else {
        printf("%.2f es igual a cero\n", numero);
        puts("¿Por qué no introduce otro número?");
    }

    return 0;
}
```

Este programa utiliza una estructura `if-else if-else` para clasificar el número introducido por el usuario como positivo, negativo o cero, mostrando un mensaje apropiado en cada caso.

## Comparación de Sentencias `if` Anidadas y Secuencias de Sentencias `if`

Es importante distinguir entre una sentencia `if` anidada (como la del Ejemplo 5.7) y una secuencia de sentencias `if` independientes:

**Secuencia de Sentencias `if`:**

```c
if (x > 0) {
    num_pos = num_pos + 1;
}
if (x < 0) {
    num_neg = num_neg + 1;
}
if (x == 0) {
    num_ceros = num_ceros + 1;
}
```

Aunque esta secuencia es lógicamente equivalente al `if` anidado del Ejemplo 5.7, presenta desventajas en términos de legibilidad y eficiencia:

* **Legibilidad:** No muestra claramente que solo una de las tres condiciones debe ser verdadera para un valor dado de `x`.
* **Eficiencia:** En la secuencia, las tres condiciones se evalúan siempre, incluso si la primera o la segunda condición ya son verdaderas. En contraste, en la estructura `if-else if-else`, la evaluación se detiene una vez que se encuentra una condición verdadera.

Por lo tanto, para decisiones multi-alternativa donde las condiciones son mutuamente exclusivas, la estructura `if-else if-else` anidada es generalmente más clara y eficiente.

El texto también presenta un ejemplo de una estructura `if-else` anidada más compleja, ilustrando cómo se pueden anidar bloques `if` y `else` para crear una lógica de decisión más profunda. La correcta indentación es crucial en estos casos para mantener la legibilidad.

### Ejercicio 5.9

El ejercicio 5.9 presenta diferentes formas de escribir sentencias `if` anidadas, enfatizando la importancia de la legibilidad a través de la indentación. Las tres formas son lógicamente equivalentes pero difieren en su claridad visual. La segunda y tercera forma, con una indentación más estructurada, son generalmente preferibles.

**Calcular el Mayor de Tres Números**

```c
#include <stdio.h>

int main() {
    int a, b, c, mayor;

    printf("\nIntroduzca tres enteros: ");
    scanf("%d %d %d", &a, &b, &c);

    if (a > b) {
        if (a > c) {
            mayor = a;
        } else {
            mayor = c;
        }
    } else {
        if (b > c) {
            mayor = b;
        } else {
            mayor = c;
        }
    }

    printf("El mayor es %d \n", mayor);

    return 0;
}
```

**Ejecución**

```
Introduzca tres enteros: 77 54 85
El mayor es 85
```

**Análisis:**

1.  Se compara `a` con `b`. Como `77 > 54` es verdadero, se ejecuta el primer bloque `if`.
2.  Dentro de este bloque, se compara `a` (77) con `c` (85). Como `77 > 85` es falso, se ejecuta el `else` interno, asignando `mayor = c` (es decir, `mayor = 85`).
3.  Se termina la sentencia `if` anidada y se imprime el valor de `mayor`.

Este ejemplo demuestra cómo las sentencias `if` anidadas pueden utilizarse para resolver problemas que requieren la comparación de múltiples valores para tomar una decisión.

Con esta organización y las explicaciones detalladas, el concepto de sentencias `if` anidadas y su uso para decisiones multi-alternativa debería ser mucho más claro.