---
title: Compilación separada
description: A reference page in my new Starlight docs site.
---

Hasta este momento, casi todos los ejemplos que se han expuesto en el capítulo se encontraban en un sólo archivo fuente. Los programas grandes son más fáciles de gestionar si se dividen en varios archivos fuente, también llamados módulos, cada uno de los cuales puede contener una o más funciones. Estos módulos se compilan y enlazan por separado posteriormente con un enlazador, o bien con la herramienta correspondiente del entorno de programación.

Cuando se divide un programa grande en pequeños, los únicos archivos que se recompilan son los que se han modificado. El tiempo de compilación se reduce, dado que pequeños archivos fuente se compilan más rápido que los grandes. Los archivos grandes son difíciles de mantener y editar, ya que su impresión es un proceso lento que utilizará cantidades excesivas de papel.

La Figura 7.9 muestra cómo el enlazador puede construir un programa ejecutable, utilizando módulos objetos, cada uno de los cuales se obtiene compilando un módulo fuente.

```
         Compilador         Compilador
            |                   |
            v                   v
      +-----------+       +-----------+
      | Módulo 1  |       | Módulo 2  |
      |  objeto   |       |  objeto   |
      +-----------+       +-----------+
            \               /
             \             /
              \           /
               v         v
              +-------------+
              | Enlazador   |
              +-------------+
                     |
                     v
          Programa ejecutable
```

## Compilación separada

Cuando se tiene más de un archivo fuente, se puede referenciar una función en un archivo fuente desde una función de otro archivo fuente. Al contrario que las variables, las funciones son externas por defecto. Si desea, por razones de legibilidad –no recomendable–, puede utilizar la palabra reservada `extern` con un prototipo de función y en la cabecera.

Se puede desear restringir la visibilidad de una función, haciéndola visible sólo a otras funciones en un archivo fuente. Una razón para hacer esto es tener la posibilidad de tener dos funciones con el mismo nombre en diferentes archivos. Otra razón es reducir el número de referencias externas y aumentar la velocidad del proceso de enlace.

Se puede hacer una función no visible al exterior de un archivo fuente utilizando la palabra reservada `static` con la cabecera de la función y la sentencia del prototipo de función. Se escribe la palabra `static` antes del tipo de valor devuelto por la función. Tales funciones no serán públicas al enlazador, de modo que otros módulos no tendrán acceso a ellas. La palabra reservada `static`, tanto para variables globales como para funciones, es útil para evitar conflictos de nombres y prevenir el uso accidental de ellos.

Por ejemplo, imaginemos un programa muy grande que consta de muchos módulos, en el que se busca un error producido por una variable global; si la variable es estática, se puede restringir su búsqueda al módulo en que está definida; si no es así, se extiende nuestra investigación a los restantes módulos en que está declarada (con la palabra reservada `extern`).

Como regla general, son preferibles las variables locales a las globales. Si realmente es necesario o deseable que alguna variable sea global, es preferible hacerla estática, lo que significa que será accesible solo en el módulo en que está definida.

**Ejemplo**

Supongamos dos módulos: `MODULO1` y `MODULO2`. En el primero se escribe la función `main()`, que hace referencia a funciones y variables globales definidas en el segundo módulo.

```c
/* MODULO1.C */
#include <stdio.h>

void main() {
    void f(int i), g(void);
    extern int n; /* Declaración de n (no definición) */
    
    f(8);
    n++;
    g();
    puts("Fin de programa.");
}
```

```c
/* MODULO2.C */
#include <stdio.h>

/* Definición de n (también declaración) */
int n = 100;
static int m = 7;

void f(int i) {
    n += (i + m);
}

void g(void) {
    printf("n = %d\n", n);
}
```

`f` y `g` se definen en el módulo 2 y se declaran en el módulo 1. Si se ejecuta el programa, se produce la salida:

```
n = 116  
Fin de programa.
```

Se puede hacer una función invisible fuera de un archivo fuente utilizando la palabra reservada `static` con la cabecera y el prototipo de la función.

