---
title: Precauciones en el for
description: A reference page in my new Starlight docs site.
---


## Bucles infinitos

El uso principal de un bucle for es implementar bucles de conteo en el que el número de repeticiones se conoce por anticipado. Por ejemplo, la suma de enteros de 1 a n. Sin embargo, existen muchos problemas en los que el número de repeticiones no se pueden determinar por anticipado.

Para estas situaciones algunos lenguajes modernos tienen sentencias específicas tales como las sentencias `LOOP` de Modula-2 y Modula-3, el bucle `DO` de FORTRAN 90 o el bucle `loop` de Ada. C no soporta una sentencia que realice esa tarea, pero existe una variante de la sintaxis de `for` que permite implementar **bucles infinitos**, que son aquellos bucles que, en principio, no tienen fin.

**Sintaxis**
```c
for ( ; ; )
    sentencia ;
```

La sentencia se ejecuta indefinidamente a menos que se utilice una sentencia `return` o `break` (normalmente una combinación `if-break` o `if-return`).

La razón de que el bucle se ejecute indefinidamente es que se ha eliminado la expresión de inicialización, la condición del bucle y la expresión de incremento; al no existir una condición de bucle que especifique cuál es la condición para terminar la repetición de sentencias, se asume que la condición es verdadera (`1`) y éstas se ejecutarán indefinidamente. Así, el bucle:
```c
for ( ; ; )
    printf("Siempre así, te llamamos siempre así...\n");
```
producirá la salida:
```
Siempre así, te llamamos siempre así...
Siempre así, te llamamos siempre así...
...
```
un número ilimitado de veces, a menos que el usuario interrumpa la ejecución (normalmente pulsando las teclas Ctrl + C en ambientes PC).

Para evitar esta situación, se requiere el diseño del bucle for de la forma siguiente:

1. El cuerpo del bucle ha de contener todas las sentencias que se desean ejecutar repetidamente.
2. Una sentencia terminará la ejecución del bucle cuando se cumpla una determinada condición.

La sentencia de terminación suele ser `if-break` con la sintaxis:
```c
if (condición) break;
```

**Ejemplo 6.7**
```c
#define CLAVE -999
for ( ; ; ) {
    printf("Introduzca un número, (%d) para terminar: ", CLAVE);
    scanf("%d", &num);
    if (num == CLAVE) break;
    ...
}
```

## Los bucles `for` vacíos

Tenga cuidado de situar un punto y coma después del paréntesis inicial del bucle `for`. Es decir, el bucle:
```c
for (i = 1; i <= 10; i++);  // ← punto y coma indeseado
puts("Sierra Magina");
```
no se ejecuta correctamente, ni se visualiza la frase "Sierra Magina" 10 veces como era de esperar, ni se produce un mensaje de error por parte del compilador.

En realidad, lo que sucede es que se visualiza una sola vez la frase "Sierra Magina", ya que la sentencia `for` es una sentencia vacía al terminar con un punto y coma `;`. Sucede que la sentencia `for` no hace absolutamente nada durante 10 iteraciones y, por tanto, después de que el bucle `for` haya terminado, se ejecuta la siguiente sentencia `puts` y se escribe "Sierra Magina".

El bucle `for` con cuerpos vacíos puede tener algunas aplicaciones, especialmente cuando se requieren ralentizaciones o temporizaciones de tiempo.

## Sentencias nulas en bucles `for`

Cualquiera o todas las sentencias de un bucle `for` pueden ser nulas. Para ejecutar esta acción, se utiliza el punto y coma `;` para marcar la sentencia vacía.

Si se desea crear un bucle `for` que actúe exactamente como un bucle `while`, se deben incluir las primeras y terceras sentencias vacías.

**Ejemplo**
```c
#include <stdio.h>

int main() {
    int contador = 0;

    for (; contador < 5; ) {
        contador++;
        printf(";Bucle! ");
    }

    printf("\nContador: %d\n", contador);
    return 0;
}
```

**Salida:**
```
;Bucle! ;Bucle! ;Bucle! ;Bucle! ;Bucle!
Contador: 5
```

## Sentencias `break` y `continue`

### Sentencia `break`

La sentencia `break` termina la ejecución de un bucle, de una sentencia `switch`, en general de cualquier sentencia.

**Ejemplo de utilización de break**
```c
#include <stdio.h>

int main() {
    int contador = 0; // inicialización
    int max;
    printf("¿Cuántos holas? ");
    scanf("%d", &max);

    for (; ; ) { // bucle for que no termina nunca
        if (contador < max) { // test
            puts("Hola!");
            contador++; // incremento
        } else {
            break;
        }
    }

    return 0;
}
```

**Salida:**
```
Cuantos holas? 3
Hola!
Hola!
Hola!
```

### Sentencia `continue`

La sentencia `continue` hace que la ejecución de un bucle vuelva a la cabecera del bucle.

**Ejemplo**
```c
#include <stdio.h>

int main() {
    int clave, i;
    puts("Introduce -9 para acabar.");
    clave = 1;

    for (i = 0; i < 8; i++) {
        if (clave == -9) continue;
        scanf("%d", &clave);
        printf("clave %d\n", clave);
    }

    printf("VALORES FINALES i = %d clave = %d\n", i, clave);
    return 0;
}
```

**Salida:**
```
9 para acabar
4
clave 4
7
clave 7
-9
VALORES FINALES i = 8 clave = -9
```

## Advertencias sobre bucles mal programados

Un bucle `for` se debe construir con gran precaución, asegurándose que la expresión de inicialización, la condición del bucle y la expresión de incremento harán que la condición del bucle se convierta en `false` en algún momento. En particular:

> «Si el cuerpo de un bucle de conteo modifica los valores de cualquier variable implicada en la condición del bucle, entonces el número de repeticiones se puede modificar».

Esta regla anterior es importante, ya que su aplicación se considera una **mala práctica de programación**. Es decir, **no es recomendable modificar el valor de cualquier variable de la condición del bucle dentro del cuerpo de un bucle for**, ya que se pueden producir resultados imprevistos.

**Ejemplo 1**
```c
int i, limite = 11;
for (i = 0; i <= limite; i++)
    printf("%d\n", i);
    limite++;
```

Produce una secuencia infinita de enteros, ya que en cada iteración `limite++` incrementa `limite` antes de que `i++` incremente `i`. A consecuencia de ello, la condición del bucle `i <= limite` **siempre es cierta**.

**Ejemplo 2**
```c
int i, limite = 1;
for (i = 0; i <= limite; i--)
    printf("%d\n", i);
```

Este ejemplo producirá infinitos ceros, ya que la expresión `i--` del cuerpo del bucle decrementa `i` antes de que se incremente con `i++` en la cabecera del bucle. Como resultado, `i` es siempre 0 cuando se comprueba la condición.

**Ejemplo 3**
```c
#define LIM 50
int iter, tope;
for (iter = 0; tope <= LIM; iter++) {
    printf("%d\n", iter);
    scanf("%d", &tope);
}
```

En este caso, la condición para terminar el bucle depende de la entrada del usuario. El bucle está mal programado si no se controla adecuadamente.
