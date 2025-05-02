---
title: La sentencia if
description: A reference page in my new Starlight docs site.
---

En el lenguaje de programación C, la estructura de control de selección fundamental es la sentencia `if`. Esta sentencia permite ejecutar un bloque de código condicionalmente, basándose en la evaluación de una expresión lógica.

**Sintaxis Básica de la Sentencia `if`**

La sentencia `if` presenta dos formatos principales. El formato más simple sigue la siguiente sintaxis:

```c
if (Expresión)
    Acción;
```

Donde:

* **`if`**: Es la palabra clave que indica el inicio de la estructura de selección.
* **`(Expresión)`**: Es una expresión entera (o lógica) que se evalúa. Esta expresión determina si la `Acción` se ejecutará o no.
* **`Acción`**: Es una sentencia ejecutable (simple o compuesta) que se ejecuta únicamente si la `Expresión` se evalúa como verdadera (es decir, tiene un valor distinto de cero).

**Funcionamiento de la Sentencia `if`**

Cuando la ejecución de un programa alcanza una sentencia `if`, se evalúa la `Expresión` entre paréntesis.

* Si la `Expresión` es **verdadera** (su valor es diferente de cero), la `Acción` asociada a la sentencia `if` se ejecuta.
* Si la `Expresión` es **falsa** (su valor es cero), la `Acción` se omite y el programa continúa su ejecución con la siguiente sentencia después del bloque `if`.

El Diagrama de Flujo de una sentencia `if` básica se representa en la Figura 5.1 (original del texto).

```
        Inicio
          ↓
    [Expresión]
      /   \
   Verdadera Falsa
      ↓     ↓
    Acción   ↓
      ↓
     Siguiente Sentencia
```

**Ejemplos de la Sentencia `if`**

A continuación, se presentan algunos ejemplos para ilustrar el uso de la sentencia `if`.

**Prueba de Divisibilidad**

```c
#include <stdio.h>

int main() {
    int n, d;

    printf("Introduzca dos enteros: ");
    scanf("%d %d", &n, &d);

    if (n % d == 0) {
        printf("%d es divisible por %d\n", n, d);
    }

    return 0;
}
```

**Salida del programa (para la entrada 36 4):**

```
Introduzca dos enteros: 36 4
36 es divisible por 4
```

Este programa toma dos números enteros como entrada y utiliza el operador módulo (`%`) para calcular el resto de la división de `n` entre `d`. Si el resto es cero, la condición `n % d == 0` es verdadera, y se muestra un mensaje indicando que `n` es divisible por `d`.

**Representación de la Superación de un Examen**

```c
#include <stdio.h>

int main() {
    float nota;

    printf("Introduzca la nota del examen: ");
    scanf("%f", &nota);

    if (nota >= 5.0) {
        printf("Aprobado\n");
    }

    return 0;
}
```

**Diagrama de Flujo:**

```
      Inicio
        ↓
    [Nota >= 5]
      /   \
   Verdadera Falsa
      ↓     ↓
  Imprimir "Aprobado"
      ↓
     Fin
```

Este ejemplo simple evalúa si la `nota` introducida por el usuario es mayor o igual a 5. Si la condición es verdadera, se imprime "Aprobado".

**Salida del programa (para la entrada 10.15):**

```
Introduzca la nota del examen: 10.15
Aprobado
```

**Consideración:** Si se introduce una nota menor que 5, no se mostrará ningún mensaje, ya que la acción dentro del `if` solo se ejecuta cuando la condición es verdadera.

**Múltiples Sentencias `if` Anidadas (con una lógica mejorable)**

```c
#include <stdio.h>

int main() {
    float numero;

    printf("Introduzca un número positivo o negativo: ");
    scanf("%f", &numero);

    if (numero > 0) {
        printf("%.2f es mayor que cero\n", numero);
    }
    if (numero < 0) {
        printf("%.2f es menor que cero\n", numero);
    }
    if (numero == 0) {
        printf("%.2f es igual a cero\n", numero);
    }

    return 0;
}
```

Este programa utiliza tres sentencias `if` separadas para verificar si el número introducido es mayor, menor o igual a cero. Aunque funciona, en este caso, una estructura `if-else if-else` sería más eficiente y clara.

**Salida del programa (para la entrada 10.15):**

```
Introduzca un número positivo o negativo: 10.15
10.15 es mayor que cero
```

**Visualización de la Tarifa de la Luz**

```c
#include <stdio.h>

#define TARIFA1 1.2
#define TARIFA2 1.0
#define TARIFA3 0.9

int main() {
    float gasto, tasa;

    printf("\nGasto de corriente (en Kwxh): ");
    scanf("%f", &gasto);

    if (gasto < 1000.0) {
        tasa = TARIFA1;
    }
    if (gasto >= 1000.0 && gasto <= 1850.0) {
        tasa = TARIFA2;
    }
    if (gasto > 1850.0) {
        tasa = TARIFA3;
    }

    printf("\nLa tarifa correspondiente a %.2f Kwxh es de %.1f\n", gasto, tasa);

    return 0;
}
```

En este ejercicio, se determina la tarifa de la luz según el consumo de energía eléctrica. Se utilizan tres sentencias `if` simples para verificar en qué rango se encuentra el gasto y asignar la tarifa correspondiente. La condición `gasto >= 1000.0 && gasto <= 1850.0` utiliza el operador lógico `&&` (AND) para verificar que el gasto se encuentre dentro del rango especificado.

Este texto ahora está organizado de manera más lógica, con encabezados y subencabezados para facilitar la lectura y comprensión. Se han añadido explicaciones más detalladas y se ha mantenido la información original.