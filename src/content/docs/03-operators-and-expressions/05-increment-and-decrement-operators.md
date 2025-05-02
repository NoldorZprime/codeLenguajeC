---
title: O. de incremento y decremento
description: A reference page in my new Starlight docs site.
---

De las características que incorpora C, una de las más útiles son los operadores de incremento `++` y decremento `--`. Los operadores `++` y `--`, denominados de incrementación y decrementación, suman o restan 1 a su argumento, respectivamente, cada vez que se aplican a una variable.  

**Operadores de incremento (++) y decremento (--).**  
| Incremento | Decremento |  
|----------------|----------------|  
| ++n            | --n            |  
| n += 1         | n -= 1         |  
| n = n + 1      | n = n - 1      |  

Por consiguiente,  
`a++`  
es igual que  
`a = a + 1`  

Estos operadores tienen la propiedad de que pueden utilizarse como **sufijo o prefijo**, el resultado de la expresión puede ser distinto, dependiendo del contexto.

Las sentencias:  
```c
++n;
n++;
```
tienen el mismo efecto:  
así como  
```c
--n;
n--;
```

Sin embargo, cuando se utilizan como expresiones, tales como:  
```c
m = n++;
printf("n = %d", n--);
```
el resultado es distinto si se utilizan como prefijo:  
```c
m = ++n;
printf("n = %d", --n);
```

`++n` produce un valor que es mayor en uno que el de `n++`, y `--n` produce un valor que es menor en uno que el valor de `n--`.

Supongamos que:  
```c
n = 8;
m = ++n;  /* incrementa n en 1 (9), y lo asigna a m */
n = 9;
printf("n = %d", --n);  /* decrementa n en 1 (8) y lo pasa a printf() */
n = 8;
m = n++;  /* asigna n (8) a m, después incrementa n en 1 (9) */
n = 9;
printf("n = %d", n--);  /* pasa n (9) a printf(), después decrementa n */
```

En este otro ejemplo:  
```c
int a = 1, b;
b = a++;  // b vale 1 y a vale 2
```

```c
int a = 1, b;
b = ++a;  // b vale 2 y a vale 2
```

Si los operadores `++` y `--` están de **prefijos**, la operación de incremento o decremento se efectúa **antes** que la operación de asignación;  
si los operadores `++` y `--` están de **sufijos**, la **asignación se efectúa primero** y la incrementación o decrementación a continuación.

**Ejemplo**  
```c
int i = 10;
int j;
...
j = i++;
```

**Ejemplo**  
*Demostración del funcionamiento de los operadores de incremento/decremento.*  
```c
#include <stdio.h>

/* Test de operadores ++ y -- */
void main()
{
    int m = 45, n = 75;
    printf("m = %d, n = %d\n", m, n);
    ++m;
    --n;
    printf("m = %d, n = %d\n", m, n);
    m++;
    n--;
    printf("m = %d, n = %d\n", m, n);
}
```

**Ejecución**  
```
m = 45, n = 75  
m = 46, n = 74  
m = 47, n = 73
```

En este contexto, el orden de los operadores es irrelevante.

**Ejemplo**  
*Diferencias entre operadores de preincremento y postincremento.*  
```c
#include <stdio.h>

/* Test de operadores ++ y -- */
void main()
{
    int m = 99, n;
    n = ++m;
    printf("m = %d, n = %d\n", m, n);
    n = m++;
    printf("m = %d, n = %d\n", m, n);
    printf("m = %d\n", m++);
    printf("m = %d\n", ++m);
}
```

**Ejecución**  
```
m = 100, n = 100  
m = 101, n = 100  
m = 101  
m = 103
```

**Ejemplo**  
*Orden de evaluación no predecible en expresiones.*  
```c
#include <stdio.h>

void main()
{
    int n = 5, t;
    t = ++n * --n;
    printf("n = %d, t = %d\n", n, t);
    printf("%d %d %d\n", ++n, ++n, ++n);
}
```

**Ejecución**  
```
n = 5, t = 25  
7 6 8
```

Aunque parece que aparentemente el resultado de `t` será 30, en realidad es 25,  
debido a que en la asignación de `t`, `n` se incrementa a 6 y a continuación se decrementa a 5 antes de que se evalúe el operador producto, calculando `5 * 5`.

Por último, las tres subexpresiones se evalúan de derecha a izquierda:  
**8 7 6**, al contrario de **6 7 8**, que parece que aparentemente se producirá.
