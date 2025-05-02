---
title: Funciones en línea (macros)
description: A reference page in my new Starlight docs site.
---

Una función normal es un bloque de código que se llama desde otra función. El compilador genera código para situar la dirección de retorno en la pila. La dirección de retorno es la dirección de la sentencia que sigue a la instrucción que llama a la función. A continuación, el compilador genera código que sitúa cualquier argumento de la función en la pila a medida que se requiera. Por último, el compilador genera una instrucción de llamada que transfiere el control a la función.

```c
float fesp(float x)
{
    return (x * x + 2 * x - 1);
}
```

Las funciones en línea sirven para aumentar la velocidad de su programa. Su uso es conveniente cuando la función es una expresión, su código es pequeño y se utiliza muchas veces en el programa. Realmente no son funciones, el preprocesador expande o sustituye la expresión cada vez que es llamada.

Así la anterior función puede sustituirse:

```c
#define fesp(x) (x*x + 2*x -1)
```

En este programa se realizan cálculos de la función para valores de x en un intervalo:

```c
#include <stdio.h>
#define fesp(x) (x*x + 2*x -1)

void main()
{
    float x;
    for (x = 0.0; x <= 6.5; x += 0.3)
        printf("\t f(%.1f) = %6.2f ", x, fesp(x));
}
```

Antes de que el compilador construya el código ejecutable de este programa, el preprocesador sustituye toda llamada a `fesp(x)` por la expresión asociada. Realmente es como si hubiéramos escrito:

```c
printf("\t f(%.1f) = %6.2f", x, (x*x + 2*x -1));
```

Para una macro con argumentos (función en línea), el compilador inserta realmente el código en el punto en que se llama, esta acción hace que el programa se ejecute más rápidamente, ya que no ha de ejecutar el código asociado con la llamada a la función.

Sin embargo, cada invocación a una macro puede requerir tanta memoria como se requiera para contener la expresión completa que representa. Por esta razón, el programa incrementa su tamaño, aunque es mucho más rápido en su ejecución. Si se llama a una macro diez veces en un programa, el compilador inserta diez copias de ella en el programa. Si la macrofunción ocupa 0.1K, el tamaño de su programa se incrementa en 1K (1024 bytes).

Por el contrario, si se llama diez veces a la misma función con una función normal, y el código de llamada suplementario es 25 bytes por cada llamada, el tamaño se incrementa en una cantidad insignificante.

**Funciones**
- comunes se llaman normalmente.
- argumentos (función en línea) se inserta directamente.
- Sentencias.
- Sentencias.


**Figura** Código generado por una función fuera de línea.

La Figura 7.5 ilustra la sintaxis general de una macro con argumentos:

```c
#define NombreMacro(parámetros sin tipos) expresión-texto
```

**REGLA:** La definición de una macro sólo puede ocupar una línea. Se puede prolongar la línea con el carácter `\` al final de la línea.


**Figura** Código de una macro con argumentos.

**Tabla Ventajas y desventajas de macros**

|                          | Ventajas            | Desventajas          |
|--------------------------|---------------------|-----------------------|
| Macros (funciones en línea)     | Rápida de ejecutar  | Tamaño de código grande |
| Funciones fuera de línea | Pequeño tamaño de código | Lenta de ejecución     |

## Creación de macros con argumentos

Para crear una macro con argumentos utilizar la sintaxis:

```c
#define NombreMacro(parámetros sin tipos) expresión-texto
```

La definición ocupará sólo una línea, aunque si se necesitan más texto, situar una barra invertida (`\`) al final de la primera línea y continuar en la siguiente, en caso de ser necesarias más líneas proceder de igual forma; de esa forma se puede formar una expresión más compleja. Entre el nombre de la macro y los paréntesis de la lista de argumentos no puede haber espacios en blanco.

Por ejemplo, la función media de tres valores se puede escribir:

```c
#define MEDIA3(x,y,z) ((x) + (y) + (z))/3.0
```

En este segmento de código se invoca a `MEDIA3`:

```c
double a = 2.9;
printf("\t %lf ", MEDIA3(a,4.5,7));
```

En esta llamada a `MEDIA3` se pasan argumentos de tipo distinto. Es importante tener en cuenta que en las macros con argumentos no hay comprobación de tipos. Para evitar problemas de prioridad de operadores, es conveniente encerrar entre paréntesis cada argumento en la expresión de definición e incluso encerrar entre paréntesis toda la expresión.

En la siguiente macro, la definición de la expresión ocupa más de una línea:

```c
#define FUNCION3(x) { \
    if ((x) < 1.0) \
        (-(x)*(x) + 3); \
    else if ((x) <= 1) \
        (2*(x) + 5); \
    else \
        ((x)*(x) - 5); \
}
```

Al tener la macro más de una sentencia, encerrarla entre llaves hace que sea una sola sentencia, aunque sea compuesta.

**Ejercicio**

Una aplicación completa de una macro con argumentos es `VOLCONO`, que calcula el volumen de la figura geométrica **cono**:

\[
V = \frac{\pi r^2 h}{3}
\]

```c
#include <stdio.h>
#define Pi 3.141592
#define VOLCONO(radio, altura) ((Pi*(radio*radio)*altura)/3.0)

int main()
{
    float radio, altura, volumen;
    printf("\nIntroduzca radio del cono: ");
    scanf("%f", &radio);
    printf("Introduzca altura del cono: ");
    scanf("%f", &altura);
    volumen = VOLCONO(radio, altura);
    printf("\nEl volumen del cono es: %.1f", volumen);
    return 0;
}
```
