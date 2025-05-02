---
title: Clases de almacenamiento
description: A reference page in my new Starlight docs site.
---

**Los especificadores de clases (tipos) de almacenamiento** permiten modificar el ámbito de una variable.  
Los especificadores pueden ser uno de los siguientes: `auto`, `extern`, `register`, `static` y `typedef`.

## Variables automáticas

Las variables que se declaran dentro de una función se dice que son automáticas (`auto`), significando que se les asigna espacio en memoria automáticamente a la entrada de la función y se les libera el espacio tan pronto se sale de dicha función. La palabra reservada `auto` es opcional.  
`auto int Total;` es igual que `int Total;`  
Normalmente no se especifica la palabra `auto`.

## Variables externas

A veces se presenta el problema de que una función necesita utilizar una variable que otra función inicializa. Como las variables locales sólo existen temporalmente mientras se está ejecutando su función, no pueden resolver el problema. ¿Cómo se puede resolver entonces el problema?  
En esencia, de lo que se trata es de que una función de un archivo de código fuente utilice una variable definida en otro archivo.  
Una solución es declarar la variable local con la palabra reservada `extern`. Cuando una variable se declara externa, se indica al compilador que el espacio de la variable está definido en otro lugar.

```c
/* variables externas: parte 1 */
/* archivo fuente exter1.c */
#include <stdio.h>
extern void leerReal(void); /* función definida en otro archivo; en este caso no es necesario extern */
float f;

int main() {
    leerReal();
    printf("Valor de f = %f", f);
    return 0;
}
```

```c
/* variables externas: parte 2 */
/* archivo fuente exter2.c */
#include <stdio.h>

void leerReal(void) {
    extern float f;
    printf("Introduzca valor en coma flotante: ");
    scanf("%f", &f);
}
```

En el archivo `exter2.c` la declaración externa de `f` indica al compilador que `f` se ha definido en otra parte (archivo). Posteriormente, cuando estos archivos se enlacen, las declaraciones se combinan de modo que se referirán a las mismas posiciones de memoria.

## Variables registro

Otro tipo de variable C es la variable registro. Precediendo a la declaración de una variable con la palabra reservada `register`, se sugiere al compilador que la variable se almacene en uno de los registros hardware del microprocesador.  
La palabra `register` es una sugerencia al compilador y no una orden.

La familia de microprocesadores 80x86 no tiene muchos registros hardware de reserva, por lo que el compilador puede decidir ignorar sus sugerencias. Para declarar una variable registro, utilice una declaración similar a:

```c
register int k;
```

Una variable registro debe ser local a una función, nunca puede ser global al programa completo.  
El uso de la variable `register` no garantiza que un valor se almacene en un registro. Esto sólo sucederá si existe un registro disponible. Si no existen registros suficientes, C ignora la palabra reservada `register` y crea la variable localmente como ya se conoce.

Una aplicación típica de una variable registro es como variable de control de un bucle. Guardando la variable de control de un bucle en un registro, se reduce el tiempo que la CPU requiere para buscar el valor de la variable de la memoria. Por ejemplo:

```c
register int indice;
for (indice = 0; indice < 1000; indice++) ...
```

## Variables estáticas

Las variables estáticas son opuestas, en su significado, a las variables automáticas.  
Las variables estáticas **no se borran** (no se pierde su valor) cuando la función termina y, en consecuencia, **retienen sus valores entre llamadas a una función**.  
Al contrario que las variables locales normales, una variable `static` se inicializa sólo una vez. Se declaran precediendo a la declaración de la variable con la palabra reservada `static`.

```c
func_uno() {
    int i;
    static int j = 25; // j, k variables estáticas
    static int k = 100;
    ...
}
```

Las variables estáticas se utilizan normalmente para mantener valores entre llamadas a funciones.

```c
float ResultadosTotales(float valor) {
    static float suma;
    suma = suma + valor;
    return suma;
}
```

En la función anterior se utiliza `suma` para acumular sumas a través de sucesivas llamadas a `ResultadosTotales`.

**Ejercicio**

Una aplicación de una variable `static` en una función es la que nos permite obtener la serie de números de Fibonacci.  
El ejercicio lo planteamos: dado un entero `n`, obtener los `n` primeros números de la serie de Fibonacci.

**Análisis**

La secuencia de números de Fibonacci: `0, 1, 1, 2, 3, 5, 8, 13...` se obtiene partiendo de los números `0` y `1`, y a partir de ellos, cada número se obtiene sumando los dos anteriores:

```
a_n = a_{n-1} + a_{n-2}
```

La función `fibonacci` tiene dos variables estáticas, `x` e `y`. Se inicializan `x` a `0` e `y` a `1`; a partir de esos valores se calcula el valor actual, y se deja preparado `x` para la siguiente llamada.  
**Al ser variables estáticas mantienen el valor entre llamada y llamada.**

```c
#include <stdio.h>

long int fibonacci();

int main() {
    int n, i;
    printf("\nCuántos números de fibonacci?: ");
    scanf("%d", &n);
    printf("\nSecuencia de fibonacci: 0, 1");
    for (i = 2; i < n; i++)
        printf(", %ld", fibonacci());
    return 0;
}

long int fibonacci() {
    static int x = 0;
    static int y = 1;
    y = y + x;
    x = y - x;
    return y;
}
```

**Ejecución**

```
Cuántos números de fibonacci? 14  
Secuencia de fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233
```
