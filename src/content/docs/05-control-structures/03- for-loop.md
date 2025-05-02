---
title: Bucle For
description: A reference page in my new Starlight docs site.
---


El bucle for de C es superior a los bucles for de otros lenguajes de programación tales como BASIC, Pascal y Fortran ya que ofrece más control sobre la inicialización y el incremento de las variables de control del bucle.

Además del bucle while, C proporciona otros dos tipos de bucles: **for** y **do**. El bucle for que se estudia en esta sección es el más adecuado para implementar bucles controlados por contador, que son bucles en los que un conjunto de sentencias se ejecutan una vez por cada valor de un rango especificado, de acuerdo al algoritmo:

**por cada valor de una variable - contador de un rango específico: ejecutar sentencias**

La sentencia **for** (bucle for) es un método para ejecutar un bloque de sentencias un número fijo de veces. El bucle for se diferencia del bucle while en que las operaciones de control del bucle se sitúan en un solo sitio: la cabecera de la sentencia.

**Sintaxis**

```
for (Inicialización; Condición/Iteración; Incremento)
    sentencias
```

1. Inicializa la variable de control del bucle  
2. Expresión lógica que determina si las sentencias se han de ejecutar mientras sea verdadera  
3. Incrementa o decrementa la variable de control del bucle  
4. Sentencias a ejecutar en cada iteración del bucle  

El bucle for contiene las cuatro partes siguientes:

- Parte de inicialización: inicializa la(s) variable(s) de control del bucle (pueden ser simples o múltiples).
- Parte de condición: contiene una expresión lógica que hace que el bucle realice las iteraciones mientras sea verdadera.
- Parte de incremento: incrementa o decrementa la(s) variable(s) de control del bucle.
- Sentencias: acciones que se ejecutarán por cada iteración del bucle.

**Equivalencia con bucle while**

```c
inicialización;
while (condición/iteración) {
    sentencias del bucle for;
    incremento;
}
```

### Ejemplo 1

```c
int i;
/* imprimir Hola 10 veces */
for (i = 0; i < 10; i++)
    printf("Hola!");
```

### Ejemplo 2

```c
int i;
for (i = 0; i < 10; i++) {
    printf("Hola!\n");
    printf("El valor de i es: %d", i);
}
```

### Ejemplo 3

```c
#include <math.h>
#include <stdio.h>
#define M 15
#define f(x) exp(2*x) - x

int main() {
    int i;
    double x;
    for (i = 1; i <= M; i++) {
        printf("Valor de x: ");
        scanf("%lf", &x);
        printf("f(%.1lf) = %.4g\n", x, f(x));
    }
    return 0;
}
```

**Diagrama de sintaxis**

```
Variable-control = Valor-inicial
       |
       v
   Condición verdadera
       |
       v
   Sentencia
       |
       v
Expresión incremento
```

Existen dos formas de implementar la sentencia for que se utilizan normalmente para implementar bucles de conteo:

**Formato ascendente**  
```c
for (var-control = valor-inicial; var-control <= valor-límite; exp-incremento)
    sentencia;
```

**Formato descendente**  
```c
for (var-control = valor-inicial; var-control >= valor-límite; exp-decremento)
    sentencia;
```

**Ejemplo de formato ascendente**

```c
int n;
for (n = 1; n <= 10; n++)
    printf("%d\t%d\n", n, n * n);
```

**Salida:**

```
1 1
2 4
3 9
4 16
5 25
6 36
7 49
8 64
9 81
10 100
```

**Ejemplo de formato descendente**

```c
int n;
for (n = 10; n > 5; n--)
    printf("%d\t%d\n", n, n * n);
```

**Salida:**

```
10 100
9 81
8 64
7 49
6 36
```

**Otros intervalos de incremento/decremento**

```c
int n;
for (n = 0; n < 100; n += 20)
    printf("%d\t%d\n", n, n * n);
```

**Salida:**

```
0 0
20 400
40 1600
60 3600
80 6400
```

**Más ejemplos**

**Ejemplo 1**

```c
int c;
for (c = 'A'; c <= 'Z'; c++)
    printf("%c ", c);
```

---

**Ejemplo 2**

```c
for (i = 9; i >= 0; i -= 3)
    printf("%d ", i * i);
```

**Ejemplo 3**

```c
for (i = 1; i < 100; i *= 2)
```

**Ejemplo 4**

```c
#define MAX 25
int i, j;
for (i = 0, j = MAX; i < j; i++, j--) {
    printf("%d ", i);
    printf("%d ", i + 2 * j);
}
```

**Suma de los 10 primeros números pares**

```c
#include <stdio.h>

int main() {
    int n, suma = 0;
    for (n = 1; n <= 10; n++)
        suma += 2 * n;
    printf("La suma de los 10 primeros números pares: %d", suma);
    return 0;
}
```

**Alternativa:**

```c
for (n = 2; n <= 20; n += 2)
    suma += n;
```

## Diferentes usos de bucles for

El lenguaje C permite:

- El valor de la variable de control se puede modificar en valores diferentes de 1.
- Se pueden utilizar más de una variable de control.

**Ejemplos adicionales**

```c
int n;
for (n = 1; n <= 10; n = n + 2)
    printf("n es ahora igual a %d\n", n);

int n, v = 9;
for (n = v; n >= 100; n = n - 5)
    printf("n es ahora igual a %d\n", n);

double p;
for (p = 0.75; p <= 5; p += 0.25)
    printf("Perímetro es ahora igual a %.21f\n", p);

double x;
for (x = pow(y, 3.0); x > 2.0; x = sqrt(x))
    printf("x es ahora igual a %.5e", x);
```
La expresión de incremento en ANSI C no necesita incluso ser una suma o una resta. Tampoco se requiere que la inicialización de una variable de control sea igual a una constante. Se puede inicializar y cambiar una variable de control del bucle en cualquier cantidad que se desee. Naturalmente cuando la variable de control no sea de tipo int,se tendrán menos garantías de precisión. Por ejemplo, el siguiente código muestra un medio más para arrancar un bucle for.a PDF, lo pase a un formato editable o lo prepare para impresión?