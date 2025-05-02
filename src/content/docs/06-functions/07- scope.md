---
title: Ambito (alcance)
description: A reference page in my new Starlight docs site.
---

**El ámbito o alcance de una variable** determina cuáles son las funciones que reconocen ciertas variables.  
Si una función reconoce una variable, la variable es visible en esa función. El ámbito es la zona de un  
programa en la que es visible una variable. Existen cuatro tipos de ámbitos: programa, archivo fuente,  
función y bloque. Se puede designar una variable para que esté asociada a uno de estos ámbitos. Tal  
variable es invisible fuera de su ámbito y sólo se puede acceder a ella en su ámbito.

**Funciones 229**

Normalmente la posición de la sentencia en el programa determina el ámbito. Los especificadores  
`auto`, `register`, `static`, `extern`, pueden afectar al ámbito. El siguiente fragmento de programa ilustra cada tipo de ámbito:

```c
int i;              /* Ámbito de programa */
static int j;       /* Ámbito de archivo */
float func(int k)   /* k, ámbito de función */
{
    int m;          /* Ámbito de bloque */
}
```

## Ámbito del programa

Las variables que tienen ámbito de programa pueden ser referenciadas por cualquier función en el  
programa completo; tales variables se llaman **variables globales**. Para hacer una variable global,  
declárela simplemente al principio de un programa, fuera de cualquier función.

```c
int g, h;  /* variables globales */

main()
{
    // ...
}
```

Una variable global es visible (“se conoce”) desde su punto de definición en el archivo fuente. Es  
decir, si se define una variable global, cualquier línea del resto del programa, no importa cuántas  
funciones y líneas de código le sigan, podrá utilizar esa variable.

```c
#include <stdio.h>
#include <math.h>

float ventas, beneficios;  /* variables globales */

void f3(void)
{
    // ...
}

void f1(void)
{
    // ...
}

void main()
{
    // ...
}
```

**Consejo**  
Declare todas las variables en la parte superior de su programa. Aunque se pueden definir tales  
variables entre dos funciones, podría realizar cualquier cambio en su programa de modo más  
rápido, si sitúa las variables globales al principio del programa.

## Ámbito del archivo fuente

Una variable que se declara fuera de cualquier función y cuya declaración contiene la palabra reservada  
`static` tiene **ámbito de archivo fuente**. Las variables con este ámbito se pueden referenciar desde el  
punto del programa en que están declaradas hasta el final del archivo fuente. Si un archivo fuente tiene  
más de una función, todas las funciones que siguen a la declaración de la variable pueden referenciarla.

```c
static int i;

void func(void)
{
    // ...
}
```

## Ámbito de una función

Una variable que tiene **ámbito de una función** se puede referenciar desde cualquier parte de la función.  
Las variables declaradas dentro del cuerpo de la función se dice que son **locales a la función**. Las  
variables locales no se pueden utilizar fuera del ámbito de la función en que están definidas.

```c
void calculo(void)
{
    double x, r, t;  /* Ámbito de la función */
    // ...
}
```

## Ámbito de bloque

Una variable declarada en un bloque tiene **ámbito de bloque** y puede ser referenciada en cualquier parte  
del bloque, desde el punto en que está declarada hasta el final del bloque. Las variables locales  
declaradas dentro de una función tienen **ámbito de bloque de la función**; no son visibles fuera del bloque.

```c
void funcl(int x)
{
    int i;
    for (i = x; i < x+10; i++)
        printf("i = %d \n", i*i);
}
```

Una variable local declarada en un bloque anidado sólo es visible en el interior de ese bloque.

```c
float func(int j)
{
    if (j > 3)
    {
        int i;
        for (i = 0; i < 20; i++)
            funcl(i);
        // aquí ya no es visible i
    }
}
```

## Variables locales

Además de tener un ámbito restringido, las **variables locales** son especiales por otra razón: existen en  
memoria sólo cuando la función está activa (es decir, mientras se ejecutan las sentencias de la función).  
Cuando la función no se está ejecutando, sus variables locales no ocupan espacio en memoria, ya que  
no existen. Algunas reglas que siguen las variables locales son:

- Los nombres de las variables locales no son únicos. Dos o más funciones pueden definir la misma  
  variable `test`. Cada variable es distinta y pertenece a su función específica.
- Las variables locales de las funciones no existen en memoria hasta que se ejecute la función. Por  
  esta razón, múltiples funciones pueden compartir la misma memoria para sus variables locales  
  (pero no al mismo tiempo).

