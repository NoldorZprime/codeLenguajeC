---
title: Funciones numéricas
description: A reference page in my new Starlight docs site.
---

**Virtualmente cualquier operación aritmética es posible en un programa C. Las funciones matemáticas disponibles son las siguientes:**  
- Matemáticas  
- Trigonométricas  
- Logarítmicas  
- Exponenciales  
- Aleatorias

La mayoría de las funciones numéricas están en el archivo de cabecera `MATH.H`; las funciones `abs` y `labs` están definidas en `MATH.H` y `STDLIB.H`, y las rutinas `div` y `ldiv` en `STDLIB.H`.

## Funciones matemáticas

Las funciones matemáticas usuales en la biblioteca estándar son:

- `ceil(x)`  
  Redondea al entero más cercano.

- `fabs(x)`  
  Devuelve el valor absoluto de x (un valor positivo).

- `floor(x)`  
  Redondea por defecto al entero más próximo.

- `fmod(x, y)`  
  Calcula el resto en coma flotante para la división x / y, de modo que x = i*y + f, donde i es un entero, f tiene el mismo signo que x y el valor absoluto de f es menor que el de y.

- `pow(x, y)`  
  Calcula x elevado a la potencia y (x^y). Si x es menor o igual a cero, y debe ser un entero. Si x es igual a cero, y no puede ser negativo.

- `powl0(x)`  
  Calcula 10 elevado a la potencia x; x debe ser de tipo entero.

- `sqrt(x)`  
  Devuelve la raíz cuadrada de x; x debe ser mayor o igual a cero.

## Funciones trigonométricas

La biblioteca de C incluye una serie de funciones que sirven para realizar cálculos trigonométricos. Es necesario incluir en su programa el archivo de cabecera `MATH.H` para utilizar cualquier función:

- `acos(x)`  
  Calcula el arco coseno del argumento x. El argumento x debe estar entre -1 y 1.

- `asin(x)`  
  Calcula el arco seno del argumento x. El argumento x debe estar entre -1 y 1.

- `atan(x)`  
  Calcula el arco tangente del argumento x.

- `atan2(x, y)`  
  Calcula el arco tangente de x dividido por y.

- `cos(x)`  
  Calcula el coseno del ángulo x; x se expresa en radianes.

- `sin(x)`  
  Calcula el seno del ángulo x; x se expresa en radianes.

- `tan(x)`  
  Devuelve la tangente del ángulo x; x se expresa en radianes.

**Regla:**  
Si necesita pasar un ángulo expresado en grados a radianes, para poder utilizarlo con las funciones trigonométricas, multiplique los grados por pi/180, donde pi = 3.14159.

## Funciones logarítmicas y exponenciales

Las funciones logarítmicas y exponenciales suelen ser utilizadas con frecuencia no sólo en matemáticas, sino también en el mundo de la empresa y los negocios. Estas funciones requieren también el archivo de inclusión `MATH.H`.

- `exp(x)`, `expl(x)`  
  Calcula el exponencial e^x, donde e es la base de logaritmos naturales de valor 2.718282.  
  ```c
  valor = exp(5.0);
  ```  
  Una variante de esta función es `expl`, que calcula e^x utilizando un valor `long double`.

- `log(x)`, `logl(x)`  
  La función `log` calcula el logaritmo natural del argumento x y `logl(x)` calcula el citado logaritmo para valores `long double`.

- `log10(x)`, `log10l(x)`  
  Calcula el logaritmo decimal del argumento x, de valor real `double` en `log10(x)` y de valor `long double` en `log10l(x)`; x ha de ser positivo.

## Funciones aleatorias

Los números aleatorios son de gran utilidad en numerosas aplicaciones y requieren un trato especial en cualquier lenguaje de programación. C no es una excepción y la mayoría de los compiladores incorporan funciones que generan números aleatorios.

Las funciones usuales de la biblioteca estándar de C son: `rand`, `random`, `randomize` y `srand`. Estas funciones se encuentran en el archivo `STDLIB.H`.

- `rand(void)`  
  La función `rand` genera un número aleatorio entre 0 y `RAND_MAX`.  
  ```c
  test = rand();
  printf("Este es un número aleatorio: %d\n", rand());
  ```

- `randomize(void)`  
  La macro `randomize` inicializa el generador de números aleatorios con una semilla obtenida de `time`. Requiere incluir `TIME.H`.

**Ejemplo:**
```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <conio.h>

int main(void) {
    int i;
    clrscr(); // limpia la pantalla
    randomize();
    for (i = 1; i <= 10; i++)
        printf("%d\n", rand());
    return 0;
}
```

- `srand(semilla)`  
  Inicializa el generador de números aleatorios. Si el valor de `semilla` es 1, se reinicializa la misma secuencia.

**Ejemplo:**
```c
#include <stdio.h>
#include <stdlib.h>
#include <conio.h>

int main(void) {
    clrscr();
    srand(50);
    printf("Este es un número aleatorio: %d", rand());
    return 0;
}
```

- `random(num)`  
  Genera un número aleatorio entre 0 y `num-1`.

**Ejemplo:**
```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <conio.h>

#define TOPE 1000
#define MAX(x, y) ((x) > (y) ? (x) : (y))

int main(void) {
    int mx, i;
    clrscr();
    randomize();
    mx = random(TOPE);
    for (i = 2; i <= 10; i++) {
        int y = random(TOPE);
        mx = MAX(mx, y);
    }
    printf("El mayor número aleatorio generado: %d", mx);
    return 0;
}
```
