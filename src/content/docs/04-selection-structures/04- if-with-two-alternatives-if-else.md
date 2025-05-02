---
title: De dos alternativas if-else
description: A reference page in my new Starlight docs site.
---


Un segundo formato fundamental de la sentencia `if` es la estructura `if-else`. Esta construcción permite especificar dos bloques de código alternativos: uno que se ejecuta si la condición es verdadera y otro que se ejecuta si la condición es falsa.

**Sintaxis de la Sentencia `if-else`**

La sintaxis de la sentencia `if-else` es la siguiente:

```c
if (Expresión) {
    Acción_si_verdadera;
} else {
    Acción_si_falsa;
}
```

Donde:

* **`if`**: Palabra clave que inicia la estructura condicional.
* **`(Expresión)`**: Una expresión lógica (o entera) que se evalúa para determinar qué bloque de código ejecutar.
* **`Acción_si_verdadera`**: Una única sentencia o un bloque de sentencias (encerrado entre llaves `{}`) que se ejecuta si la `Expresión` se evalúa como verdadera (distinta de cero).
* **`else`**: Palabra clave que introduce el bloque de código alternativo.
* **`Acción_si_falsa`**: Una única sentencia o un bloque de sentencias (encerrado entre llaves `{}`) que se ejecuta si la `Expresión` se evalúa como falsa (igual a cero).

**Funcionamiento de la Sentencia `if-else`**

Cuando se ejecuta una sentencia `if-else`, se evalúa la `Expresión` entre paréntesis:

* Si la `Expresión` es **verdadera**, se ejecuta el bloque de código correspondiente a `Acción_si_verdadera`, y el bloque `Acción_si_falsa` se omite.
* Si la `Expresión` es **falsa**, se omite el bloque `Acción_si_verdadera` y se ejecuta el bloque de código correspondiente a `Acción_si_falsa`.

Después de la ejecución de uno de los dos bloques (`Acción_si_verdadera` o `Acción_si_falsa`), el programa continúa con la siguiente sentencia que sigue a la estructura `if-else`.

El Diagrama de Flujo de una sentencia `if-else` se representa en la Figura 5.2 (original del texto):

```
        Inicio
          ↓
    [Expresión]
      /   \
   Verdadera Falsa
      ↓     ↓
 Acción_si_verdadera  Acción_si_falsa
      ↓     ↓
         \ /
          ↓
     Siguiente Sentencia
```

**Ejemplos de la Sentencia `if-else`**

A continuación, se presentan ejemplos para ilustrar el uso de la sentencia `if-else`.

**Cálculo de Salario Neto**

```c
if (salario > 100000) {
    salario_neto = salario - impuestos;
} else {
    salario_neto = salario;
}
```

Si la variable `salario` es mayor que 100,000, se calcula el `salario_neto` restando los `impuestos`. En caso contrario (si el `salario` es menor o igual a 100,000), el `salario_neto` se asigna directamente al valor del `salario` (bruto).

**Determinación de Aprobado/Suspenso**

```c
if (Nota >= 5) {
    puts("Aprobado");
} else {
    puts("Suspenso");
}
```

Si la variable `Nota` es mayor o igual a 5, se imprime "Aprobado". En caso contrario (si la `Nota` es menor que 5), se imprime "Suspenso".

**Prueba de Divisibilidad con `else`**

```c
#include <stdio.h>

int main() {
    int n, d;

    printf("Introduzca dos enteros: ");
    scanf("%d %d", &n, &d);

    if (n % d == 0) {
        printf("%d es divisible por %d\n", n, d);
    } else {
        printf("%d no es divisible por %d\n", n, d);
    }

    return 0;
}
```

**Ejecución**

```
Introduzca dos enteros: 36 5
36 no es divisible por 5
```

**Comentario:** Este ejemplo, similar al Ejemplo 5.1, ahora incluye la cláusula `else`. Si el resto de la división de `n` entre `d` no es cero (la condición `n % d == 0` es falsa), se ejecuta el bloque dentro del `else`, indicando que `n` no es divisible por `d`.

**Encontrar el Mayor de Dos Números**

```c
#include <stdio.h>

int main() {
    int x, y;

    printf("Introduzca dos enteros: ");
    scanf("%d %d", &x, &y);

    if (x > y) {
        printf("%6d\n", x);
    } else {
        printf("%6d\n", y);
    }

    return 0;
}
```

**Comentario:** La condición `(x > y)` se evalúa. Si `x` es mayor que `y` (verdadero), se imprime el valor de `x` con un formato de ancho 6. En caso contrario (si `x` no es mayor que `y`, es decir, `y` es mayor o igual a `x`), se imprime el valor de `y` con el mismo formato.

**Cálculo de una Función Definida por Tramos**

```c
#include <stdio.h>
#include <math.h>

int main() {
    float f, x;

    printf("\nElige un valor de x: ");
    scanf("%f", &x);

    if (x <= 0.0) {
        f = pow(x, 2) - x;
    } else {
        f = -pow(x, 2) + 3 * x;
    }

    printf("f(%.1f) = %.3f\n", x, f);

    return 0;
}
```

**Ejecución**

```
Elige un valor de x: -1.5
f(-1.5) = 3.750
```

**Comentario:** Este programa calcula el valor de una función `f(x)` que está definida de forma diferente para valores de `x` menores o iguales a 0.0 y para valores de `x` mayores que 0.0. La sentencia `if-else` se utiliza para seleccionar la fórmula correcta basada en el valor de `x`.

**Formatos de la Sentencia `if` (Resumen)**

El texto original también menciona brevemente algunos formatos de la sentencia `if`. Podemos resumirlos de la siguiente manera:

1.  **`if (expresión_lógica) sentencia;`**: Formato simple con una única acción.
2.  **`if (expresión_lógica) { bloque_de_sentencias; }`**: Formato con un bloque de sentencias.
3.  **`if (expresión_lógica) sentencia_si_verdadera; else sentencia_si_falsa;`**: Formato `if-else` con acciones de una sola sentencia.
4.  **`if (expresión_lógica) { bloque_si_verdadera; } else { bloque_si_falsa; }`**: Formato `if-else` con bloques de sentencias.

Estos formatos permiten una gran flexibilidad al controlar el flujo de ejecución de un programa en C.

Este texto ahora presenta la sentencia `if-else` de manera más clara y organizada, con explicaciones detalladas y ejemplos ilustrativos.