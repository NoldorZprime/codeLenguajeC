---
title: Operador de asignación
description: A reference page in my new Starlight docs site.
---

El operador `=` asigna el valor de la expresión derecha a la variable situada a su izquierda.

```c
codigo = 3467;
fahrenheit = 123.456;
coordX = 525;
coordY = 725;
```

Este operador es asociativo por la derecha, eso permite realizar asignaciones múltiples. Así:

```c
a = b = c = 45;
```

equivale a:

```c
a = (b = (c = 45));
```

O dicho de otro modo, a las variables `a`, `b` y `c` se asigna el valor `45`.

Esta propiedad permite inicializar varias variables con una sola sentencia:

```c
int a, b, c;
a = b = c = 5;  /* se asigna 5 a las variables a, b y c */
```

Además del operador de asignación `=`, **C proporciona cinco operadores de asignación adicionales**.  
Estos operadores de asignación actúan como una notación abreviada para expresiones utilizadas con frecuencia.  
Así, por ejemplo, si se desea multiplicar 10 por `i`, se puede escribir:

```c
i = i * 10;
```

**Operadores de asignación de C.**

| Símbolo   | Uso         | Descripción                                               |
|-----------|-------------|-----------------------------------------------------------|
|   `=`     |  `a = b`    | Asigna el valor de `b` a `a`.                             |
|   `*=`    |  `a *= b`   | Multiplica `a` por `b` y asigna el resultado a `a`.       |
|   `/=`    |  `a /= b`   | Divide `a` entre `b` y asigna el resultado a `a`.         |
|   `+=`    |  `a += b`   | Suma `b` y `a` y lo asigna a `a`.                         |
|   `-=`    |  `a -= b`   | Resta `b` de `a` y asigna el resultado a `a`.             |
|   `%=`    |  `a %= b`   | Fija `a` al resto de `a / b`.                             |

C proporciona un operador abreviado de asignación (`*=`), que realiza una asignación equivalente:

```c
i *= 10;    // equivale a: i = i * 10;
```

**Equivalencia de operadores de asignación**

|   Operador     | Operador abreviado | Sentencia no abreviada |
|----------------|--------------------|-------------------------|
|   `+=`         | `m += n`           | `m = m + n;`            |
|   `-=`         | `m -= n`           | `m = m - n;`            |
|   `*=`         | `m *= n`           | `m = m * n;`            |
|   `/=`         | `m /= n`           | `m = m / n;`            |
|   `%=`         | `m %= n`           | `m = m % n;`            |


Estos operadores de asignación no siempre se utilizan, aunque algunos programadores C se acostumbran a su empleo por el **ahorro de escritura** que suponen.

