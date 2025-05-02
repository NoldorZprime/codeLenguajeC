---
title: Switch
description: A reference page in my new Starlight docs site.
---

La sentencia `switch` es una estructura de control en C que permite seleccionar una de entre múltiples alternativas. Es especialmente útil cuando la selección se basa en el valor de una variable simple o de una expresión simple, conocida como **expresión de control** o **selector**. El valor de esta expresión debe ser de tipo entero (`int`) o carácter (`char`), pero no de tipo coma flotante (`float` o `double`).

**Sintaxis**

La sintaxis general de la sentencia `switch` es la siguiente:

```c
switch (selector) {
    case etiqueta_1:
        sentencias_1;
        break; /* Opcional */
    case etiqueta_2:
        sentencias_2;
        break; /* Opcional */
    case etiqueta_3:
        sentencias_3;
        break; /* Opcional */
    default:
        sentencias_n;
        break; /* Opcional */
}
```

* **`switch (selector)`**: Se evalúa la `expresión de control` (`selector`). Debe ser de un tipo ordinal (como `int` o `char`).
* **`case etiqueta_n:`**: Cada `etiqueta` es un valor constante y único. El tipo de cada etiqueta debe ser el mismo que el de la expresión `selector`. Si el valor del `selector` coincide con una `etiqueta`, la ejecución comienza con la primera sentencia que sigue a esa etiqueta.
* **`sentencias_n;`**: Son las sentencias que se ejecutan si el valor del `selector` coincide con la `etiqueta` correspondiente.
* **`break;`**: Esta sentencia es opcional pero muy recomendable. Cuando se encuentra un `break`, la ejecución del programa salta a la siguiente sentencia después del bloque `switch`. Si se omite `break`, la ejecución continuará con las sentencias del siguiente `case`.
* **`default:`**: Esta etiqueta es opcional. Si el valor del `selector` no coincide con ninguna de las etiquetas `case`, se ejecutan las `sentencias_n` que siguen a la etiqueta `default`. Si no hay una etiqueta `default` y ningún `case` coincide, no se ejecuta ninguna de las opciones dentro del `switch`. Se recomienda incluir una etiqueta `default` para manejar valores inesperados del selector.

Las expresiones están permitidas como etiquetas `case` solo si todos los operandos de la expresión son constantes (por ejemplo, `4 + 8` o `m * 15`, donde `m` ha sido definido previamente como una constante con nombre).

**Funcionamiento**

1.  Se evalúa la `expresión de control` (`selector`).
2.  El valor del `selector` se compara secuencialmente con las etiquetas de cada `case`.
3.  Si se encuentra una etiqueta `case` cuyo valor coincide con el valor del `selector`, la ejecución del programa se traslada a la primera sentencia que sigue a esa etiqueta.
4.  La ejecución continúa secuencialmente a través de las sentencias dentro de ese `case` y de los siguientes `case` hasta que se encuentra una sentencia `break` o se alcanza el final del bloque `switch`.
5.  Si se encuentra una sentencia `break`, la ejecución del programa salta a la sentencia que sigue inmediatamente al bloque `switch`.
6.  Si no se encuentra ninguna coincidencia con las etiquetas `case` y existe una etiqueta `default`, la ejecución se traslada a las sentencias que siguen a la etiqueta `default`.
7.  Si no hay coincidencia y no hay etiqueta `default`, no se ejecuta ninguna de las sentencias dentro del `switch`.

**Precaución:** Olvidar la sentencia `break` al final de un bloque `case` es un error común. Aunque el compilador no generará un error sintáctico, provocará que la ejecución continúe en el siguiente bloque `case`, lo que probablemente no sea el comportamiento deseado. Esto se conoce como "fall-through".

**Ejemplos**

```c
switch (opcion) {
    case 0:
        puts("Cero!");
        break;
    case 1:
        puts("Uno!");
        break;
    case 2:
        puts("Dos!");
        break;
    default:
        puts("Fuera de rango");
}
```

**Ejemplo**

```c
switch (opcion) {
    case 0:
    case 1:
    case 2:
        puts("Menor de 3");
        break;
    case 3:
        puts("Igual a 3");
        break;
    default:
        puts("Mayor que 3");
}
```

**Comparación con `if-else-if` (Determinación de Vocal)**

**Solución con `if-else-if`:**

```c
if ((car == 'a') || (car == 'A')) {
    printf("%c es una vocal\n", car);
} else if ((car == 'e') || (car == 'E')) {
    printf("%c es una vocal\n", car);
} else if ((car == 'i') || (car == 'I')) {
    printf("%c es una vocal\n", car);
} else if ((car == 'o') || (car == 'O')) {
    printf("%c es una vocal\n", car);
} else if ((car == 'u') || (car == 'U')) {
    printf("%c es una vocal\n", car);
} else {
    printf("%c no es una vocal\n", car);
}
```

**Solución con `switch`:**

```c
switch (car) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        printf("%c es una vocal\n", car);
        break;
    default:
        printf("%c no es una vocal\n", car);
}
```

Este ejemplo ilustra cómo la sentencia `switch` puede ser más concisa y legible que una serie de sentencias `if-else-if` cuando se comparan múltiples valores de una sola variable.

**(Originalmente Ejemplo 5.15): Determinación de Literal de Nota**

```c
#include <stdio.h>

int main() {
    char nota;

    printf("Introduzca calificación (A - F) y pulse Intro: ");
    scanf("%c", &nota);

    switch (nota) {
        case 'A':
            puts("Excelente. Examen superado");
            break;
        case 'B':
            puts("Notable. Suficiencia");
            break;
        case 'C':
            puts("Aprobado");
            break;
        case 'D':
        case 'F':
            puts("Suspendido");
            break;
        default:
            puts("No es posible esta nota");
    }

    puts("Final de programa");
    return 0;
}
```

**Ejecución de prueba 1:**

```
Introduzca calificación (A - F) y pulse Intro: A
Excelente. Examen superado
Final de programa
```

**Ejecución de prueba 2:**

```
Introduzca calificación (A - F) y pulse Intro: B
Notable. Suficiencia
Final de programa
```

**Ejecución de prueba 3:**

```
Introduzca calificación (A - F) y pulse Intro: E
No es posible esta nota
Final de programa
```

Este ejemplo muestra el uso de `switch` para asignar una descripción textual a una calificación de examen basada en una letra. Se observa el uso de `break` para evitar el "fall-through" y cómo múltiples etiquetas `case` (`'D'` y `'F'`) pueden compartir el mismo bloque de sentencias.

**(Originalmente sin número): Selección de Tipo de Vehículo**

```c
#include <stdio.h>

int main() {
    int tipo_vehiculo;
    int peaje;

    printf("Introduzca tipo de vehiculo (1: turismo, 2: autobus, 3: motocicleta): ");
    scanf("%d", &tipo_vehiculo);

    switch (tipo_vehiculo) {
        case 1:
            printf("turismo\n");
            peaje = 500;
            break;
        case 2:
            printf("autobus\n");
            peaje = 3000;
            break;
        case 3:
            printf("motocicleta\n");
            peaje = 300;
            break;
        default:
            printf("vehículo no autorizado\n");
            peaje = 0;
    }

    printf("El peaje es de %d\n", peaje);
    return 0;
}
```

**Nota:** El comentario en el texto original sobre la omisión del `break` en el `case 1` es importante para entender el comportamiento del "fall-through". Si el `break` después de `case 1` se omitiera, al seleccionar el tipo de vehículo 1, se imprimiría "turismo", se asignaría `peaje = 500`, y luego la ejecución continuaría con el `case 2`, imprimiendo "autobus" y asignando `peaje = 3000`, antes de encontrar el siguiente `break`.

## Caso Particular de `case`

Es posible tener múltiples etiquetas `case` para una misma alternativa, lo que permite ejecutar el mismo bloque de código para diferentes valores del selector. Ejemplo:

```c
switch (c) {
    case '0': case '1': case '2': case '3': case '4':
    case '5': case '6': case '7': case '8': case '9':
        num_digitos++; /* Se incrementa en 1 el valor de num_digitos */
        break;
    case ' ': case '\t': case '\n':
        num_blancos++; /* Se incrementa en 1 el valor de num_blancos */
        break;
    default:
        num_distintos++;
}
```

En este ejemplo, si `c` es cualquier dígito, se incrementa `num_digitos`. Si `c` es un espacio en blanco, una tabulación o una nueva línea, se incrementa `num_blancos`. En cualquier otro caso, se incrementa `num_distintos`.

## Uso de Sentencias `switch` en Menús

Aunque la sentencia `if-else` es más versátil, la sentencia `switch` suele ser más clara para implementar menús en programas. Un menú presenta una lista de opciones al usuario, y la elección del usuario se puede utilizar como el selector en una sentencia `switch` para ejecutar la acción correspondiente. En capítulos posteriores se explorará con más detalle la implementación de menús utilizando la sentencia `switch`.

Este ordenamiento presenta la sentencia `switch` de manera lógica, comenzando con su definición y sintaxis, explicando su funcionamiento, proporcionando ejemplos claros y destacando consideraciones importantes como el uso de `break` y la etiqueta `default`.