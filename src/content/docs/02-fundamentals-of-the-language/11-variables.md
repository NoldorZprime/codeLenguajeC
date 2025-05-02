---
title: Variables
description: A reference page in my new Starlight docs site.
---

En C, una variable es una posición con nombre en memoria donde se almacena un valor de un cierto tipo de dato. Las variables pueden almacenar todo tipo de datos: cadenas, números y estructuras. Una constante, por el contrario, es una variable cuyo valor no puede ser modificado.

Una variable típicamente tiene un nombre (un identificador) que describe su propósito. Toda variable utilizada en un programa debe ser declarada previamente. La definición en C debe situarse al principio del bloque, antes de toda sentencia ejecutable. Una definición reserva un espacio de almacenamiento en memoria. El procedimiento para definir (crear) una variable es escribir el tipo de dato, el identificador o nombre de la variable y, en ocasiones, el valor inicial que tomará. Por ejemplo, `char Respuesta;` significa que se reserva espacio en memoria para `Respuesta`, en este caso, un carácter ocupa un solo byte.

El nombre de una variable ha de ser un identificador válido. Es frecuente, en la actualidad, utilizar subrayados en los nombres, bien al principio o en su interior, con objeto de obtener mayor legibilidad y una correspondencia mayor con el elemento del mundo real que representa. Ejemplos:  
`salario`, `dias_de_semana`, `edad_alumno`, `fax`.

## Declaración

Una declaración de una variable es una sentencia que proporciona información de la variable al compilador C. Su sintaxis es:

`tipo variable`

- `tipo` es el nombre de un tipo de dato conocido por C.
- `variable` es un identificador (nombre) válido en C.

**Ejemplo:**  
`long dNumero;`  
`double HorasAcumuladas;`  
`float HorasPorSemana;`  
`float NotaMedia;`  
`short Diasemana;`  

Es preciso declarar las variables antes de utilizarlas. Se puede declarar una variable al principio de un archivo o bloque de código, al principio de una función.

```c
#include <stdio.h> /* variable al principio del archivo */
int MiNumero;

int main() {
    printf("¿Cuál es su número favorito?");
    scanf("%d", &MiNumero);
    return 0;
}
```

**Variable al principio de una función.**  
Al principio de la función `main()`:

```c
int main() {
    int i;
    int j;
    // ...
}
```

**Variable al principio de un bloque.**  
Al principio de un bloque `for`:

```c
int main() {
    int i;
    for (i = 0; i < 9; i++){
        double suma;
        // ...
    }
    //...
}
```

En C, las declaraciones se han de situar siempre al principio del bloque. Su ámbito es el bloque en el que están declaradas.

**Ejemplo**

```c
/* Distancia a la luna en kilometros */
#include <stdio.h>

int main() {
    const int luna = 238857; /* Distancia en millas */
    float luna_kilo;
    printf("Distancia a la Luna %d millas\n", luna);
    luna_kilo = luna * 1.609; /* una milla = 1.609 kilómetros */
    printf("En kilómetros es %f Km.\n", luna_kilo);
    return 0;
}
```

**Ejemplo**

Este ejemplo muestra cómo una variable puede ser declarada al inicio de cualquier bloque de un programa C.

```c
#include <stdio.h> 
/* Diferentes declaraciones */
int main() {
    int x, y1; /* declarar las variables x e y1 en la función main() */
    x = 75;
    y1 = 89;
    
    if (x > 10) {
        int y2 = 50; /* declarar e inicializar la variable y2 en el bloque if */
        y1 = y1 + y2;
    }

    printf("x = %d, y1 = %d\n", x, y1);
    return 0;
}
```

## Inicialización de variables

En algunos programas anteriores, se ha proporcionado un valor denominado valor inicial a una variable cuando se declara. El formato general de una declaración de inicialización es:

```c
tipo nombre-variable = expresión
```

`expresión` es cualquier expresión válida cuyo valor es del mismo tipo que `tipo`.

**NOTA:** Esta sentencias declara y proporciona un valor inicial a una variable.

Se declara y proporciona un valor inicial a una variable. Las variables se pueden inicializar a la vez que se declaran, o bien, inicializarse después de la declaración. El primer método es probablemente el mejor en la mayoría de los casos, ya que combina la definición de la variable con la asignación de su valor inicial.

Ejemplos:

```c
char respuesta = 'S';
int contador = 1;
float peso = 156.45;
int anyo = 1993;
```

Estas acciones crean variables `respuesta`, `contador`, `peso`, `anyo`, que almacena en memoria con los valores respectivos situados a su derecha.

El segundo método consiste en utilizar sentencias de asignación diferentes después de definir la variable, como en el siguiente caso:

```c
char barra;
barra = '/';
```

## Declaración o definición

La diferencia entre declaración y definición es sutil. Una declaración introduce un nombre de una variable y asocia un tipo con la variable. Una definición es una declaración que asigna simultáneamente memoria a la variable.

```c
double x; /* declara el nombre de la variable x de tipo double */
char c_var; /* declara c_var de tipo char */
int i; /* definido pero no inicializado */
int i = 0; /* definido e inicializado a cero */
```

## Duración de una variable

Dependiendo del lugar donde se definan las variables de C, éstas se pueden utilizar en la totalidad del programa, dentro de una función o pueden existir sólo temporalmente dentro de un bloque de una función. La zona de un programa en la que una variable está activa se denomina, normalmente, **ámbito** o **alcance** ("scope").

El ámbito (alcance) de una variable se extiende hasta los límites de la definición de su bloque. Los tipos básicos de variables en C son:
- variables locales;
- variables globales;
- variables dinámicas.

## Variables locales

Las variables locales son aquéllas definidas en el interior de una función y son visibles sólo en esa función específica. Las reglas por las que se rigen las variables locales son:

1. En el interior de una función, una variable local no puede ser modificada por ninguna sentencia externa a la función.
2. Los nombres de las variables locales no han de ser únicos. Dos, tres o más funciones pueden definir variables de nombre `Interruptor`: cada variable es distinta y pertenece a la función en que está declarada.
3. Las variables locales de las funciones no existen en memoria hasta que se ejecuta la función. Esta propiedad permite ahorrar memoria, ya que permite que varias funciones compartan la misma memoria para sus variables locales (pero no a la vez).

Por la razón dada en el punto 3, las variables locales se llaman también **automáticas** o **auto**, ya que dichas variables se crean automáticamente en la entrada a la función y se liberan también automáticamente cuando se termina la ejecución de la función.

```c
#include <stdio.h>
int main() {
    int a, b, c, suma, numero; /* variables locales */
    printf("Cuantos números a sumar:");
    scanf("%d", &numero);
    suma = a + b + c;
    // ...
    return 0;
}
```

## Variables globales

Las variables globales son variables que se declaran fuera de la función y por defecto (omisión) son visibles a cualquier función, incluyendo `main()`.

```c
#include <stdio.h>
int a, b, c; /* declaración de variables globales */

int main() {
    int valor; /* declaración de variable local */
    printf("Tres valores: ");
    scanf("%d %d %d", &a, &b, &c); /* a, b, c son variables globales */
    valor = a + b + c;
}
```

Todas las variables locales desaparecen cuando termina su bloque. Una variable global es visible desde el punto en que se define hasta el final del programa (archivo fuente).

La memoria asignada a una variable global permanece asignada a través de la ejecución del programa, tomando espacio válido según se utilice. Por esta razón, se debe evitar utilizar muchas variables globales dentro de un programa. Otro problema que surge con variables globales es que una función puede asignar un valor específico a una variable global. Posteriormente, en otra función, y por olvido, se pueden hacer cambios en la misma variable. Estos cambios dificultarán la localización de errores.


## Variables dinámicas

Las variables dinámicas tienen características que en algunos casos son similares tanto a variables locales como a globales. Al igual que una variable local, una variable dinámica se crea y libera durante la ejecución del programa. La diferencia entre una variable local y una variable dinámica es que la variable dinámica se crea tras su petición (en vez de automáticamente, como las variables locales), es decir, a su voluntad, y se libera cuando ya no se necesita. Al igual que una variable global, se pueden crear variables dinámicas que son accesibles desde múltiples funciones. Las variables dinámicas se examinan en detalle en el capítulo de punteros (Capítulo 10).

En el segmento de código C siguiente, `Q` es una variable global por estar definida fuera de las funciones y es accesible desde todas las sentencias. Sin embargo, las definiciones dentro de `main`, como `A`, son locales a `main`. Por consiguiente, sólo las sentencias interiores a `main` pueden utilizar `A`.

```c
#include <stdio.h>
int Q; /* Alcance o ámbito global */

int main() {
    int A; /* Local a main */
    A = 124;
    Q = 1;

    {
        int B; /* Primer subnivel en main */
        B = 124;
        A = 457;
        Q = 2;

        {
            int C; /* Subnivel más interno de main */
            C = 124;
            B = 457;
            A = 788;
            Q = 3;
        }
    }
}
```

