---
title: Prototipos
description: A reference page in my new Starlight docs site.
---

La declaración de una función se denomina **prototipo**. Los prototipos de una función contienen la cabecera de la función, con la diferencia de que los prototipos terminan con un punto y coma. Específicamente, un prototipo consta de los siguientes elementos: nombre de la función, una lista de argumentos encerrados entre paréntesis y un punto y coma.

En C no es estrictamente necesario que una función se declare o defina antes de su uso, no es necesario incluir el prototipo aunque sí es recomendable para que el compilador pueda hacer chequeos en las llamadas a las funciones. Los prototipos de las funciones llamadas en un programa se incluyen en la cabecera del programa para que así sean reconocidas en todo el programa.


**C recomienda que se declare una función si se llama a la función antes de que se defina.**

**Sintaxis:**
```
tipo-retorno nombre-función(lista-de-declaración_parámetros);
```

- **tipo-retorno**: Tipo del valor devuelto por la función o palabra reservada `void` si no devuelve un valor.  
- **nombre-función**: Nombre de la función.  
- **lista-de-declaración-parámetros**: Lista de declaración de los parámetros de la función, separados por comas (los nombres de los parámetros son opcionales, pero es buena práctica incluirlos para indicar lo que representan).

Un prototipo declara una función y proporciona una información suficiente al compilador para verificar que la función está siendo llamada correctamente, con respecto al número y tipo de los parámetros y el tipo devuelto por la función. Es obligatorio poner un punto y coma al final del prototipo de la función con el objeto de convertirlo en una sentencia.

**Ejemplos de prototipos válidos:**
```c
double FahrACelsius(double tempFahr);
int max(int x, int y);
int longitud(int h, int a);
struct persona entrada(void);
char* concatenar(char* c1, char* c2);
double intensidad(double, double);
```

Los prototipos se sitúan normalmente al principio de un programa, antes de la definición de la función `main()`. El compilador utiliza los prototipos para validar que el número y los tipos de datos de los argumentos reales de la llamada a la función son los mismos que el número y tipo de argumentos formales en la función llamada. Si se detecta una inconsistencia, se visualiza un mensaje de error. Sin prototipos, un error puede ocurrir si un argumento con un tipo de dato incorrecto se pasa a una función. En programas complejos, este tipo de errores son difíciles de detectar.

En C, la diferencia entre los conceptos **declaración** y **definición** es preciso tenerla clara. Cuando una entidad se declara, se proporciona un nombre y se listan sus características. Una definición proporciona un nombre de entidad y reserva espacio de memoria para esa entidad. Una definición indica que existe un lugar en un programa donde "existe" realmente la entidad definida, mientras que una declaración es sólo una indicación de que algo existe en alguna posición.

Una declaración de la función contiene sólo la cabecera de la función y una vez declarada la función, la definición completa de la función debe existir en algún lugar del programa, antes o después de `main()`.


**función `area()` del rectángulo**
```c
#include <stdio.h>
/* prototipos válidos */
float area_rectangulo(float b, float a); /* declaración */
float entrada(); /* prototipo o declaración */

int main()
{
    float b, h;
    printf("\nBase del rectángulo: ");
    b = entrada();
    printf("\nAltura del rectángulo: ");
    h = entrada();
    printf("\nÁrea del rectángulo: %.2f", area_rectangulo(b, h));
    return 0;
}

/* devuelve número positivo */
float entrada()
{
    float m;
    do {
        scanf("%f", &m);
    } while (m <= 0.0);
    return m;
}

/* calcula el área de un rectángulo */
float area_rectangulo(float b, float a)
{
    return b * a;
}
```

**función `media()`**
```c
#include <stdio.h>
double media(double x1, double x2); /* declaración */

int main()
{
    double med;
    // ...
    med = media(num1, num2);
    // ...
    return 0;
}

double media(double x1, double x2) /* definición */
{
    return (x1 + x2) / 2;
}
```

**Declaraciones de una función**
- Antes de que una función pueda ser invocada, debe ser declarada.
- Contiene sólo la cabecera de la función (llamado también prototipo).
```c
char* copiar(char* buffer, int n);
```

La **comprobación de tipos** es una acción realizada por el compilador. El compilador conoce cuáles son los tipos de argumentos que se han pasado una vez que se ha procesado un prototipo. Cuando se encuentra una sentencia de llamada a una función, el compilador confirma que el tipo de argumento en la llamada a la función es el mismo tipo que el del argumento correspondiente del prototipo. Si no son los mismos, el compilador genera un mensaje de error.

**Ejemplo de prototipo:**
```c
int procesar(int a, char b, float c, double d, char *e);
```

El compilador utiliza sólo la información de los tipos de datos. Los nombres de los argumentos, aunque se aconsejan, no tienen significado; el propósito de los nombres es hacer la declaración de tipos más fácil de leer y escribir.

La sentencia precedente se puede escribir también así:
```c
int procesar(int, char, float, double, char*);
```

Si una función no tiene argumentos, se ha de utilizar la palabra reservada `void` como lista de argumentos del prototipo (también se puede escribir paréntesis vacíos).
```c
int muestra(void);
```

**Ejemplo:**
```c
/* prototipo de la función cuadrado */
double cuadrado(double);

int main()
{
    double x = 11.5;
    printf("%6.2lf al cuadrado = %8.4lf \n", x, cuadrado(x));
    return 0;
}

double cuadrado(double n)
{
    return n * n;
}
```

**Ejemplo:**
```c
/* prototipo de visualizar_nombre */
void visualizar_nombre(char*);

void main()
{
    visualizar_nombre("Lucas El Fuerte");
}

void visualizar_nombre(char* nom)
{
    printf("Hola %s\n", nom);
}
```

## Prototipos con un número no especificado de parámetros

Un formato especial de prototipo es aquel que tiene un número no especificado de argumentos, que se representa por puntos suspensivos `...`.

**Ejemplos:**
```c
int muestras(int a, ...);
int printf(const char *formato, ...);
int scanf(const char *formato, ...);
```

Para implementar una función con lista variable de parámetros es necesario utilizar unas macros (especie de funciones en línea) que están definidas en el archivo de cabecera `stdarg.h`.

```c
#include <stdarg.h>
```

En el archivo está declarado el tipo `va_list`, un puntero para manejar la lista de datos pasada a la función.

```c
va_list puntero;
```

La función `va_start()` inicializa el puntero, de tal forma que referencia al primer parámetro.
```c
void va_start(va_list puntero, ultimo_fijo);
va_start(puntero, a);
```

La función `va_arg()` se utiliza para obtener los argumentos de la lista.
```c
tipo va_arg(va_list puntero, tipo);
```

**Ejemplo de uso:**
```c
int m;
m = va_arg(puntero, int);
```

La última llamada que hay que hacer en la implementación de estas funciones es a `va_end()`.
```c
void va_end(va_list puntero);
```

**Ejercicio**
Una aplicación completa de una función con lista de argumentos variables es `maximo(int, ...)`, que calcula el máximo de `n` argumentos de tipo `double`, donde `n` es el argumento fijo.

```c
#include <stdio.h>
#include <stdarg.h>

void maximo(int n, ...);

int main(void)
{
    puts("\t\tPRIMERA BÚSQUEDA DEL MÁXIMO\n");
    maximo(6, 3.0, 4.0, -12.5, 1.2, 4.5, 6.4);

    puts("\n\t\tNUEVA BÚSQUEDA DEL MÁXIMO\n");
    maximo(4, 5.4, 17.8, 5.9, -17.99);

    return 0;
}

void maximo(int n, ...)
{
    double mx, actual;
    va_list puntero;
    int i;

    va_start(puntero, n);
    mx = actual = va_arg(puntero, double);
    printf("\t\tArgumento actual: %.2lf\n", actual);

    for (i = 2; i <= n; i++) {
        actual = va_arg(puntero, double);
        printf("\t\tArgumento actual: %.2lf\n", actual);
        if (actual > mx)
            mx = actual;
    }

    printf("\t\tMáximo de la lista de %d números es %.2lf\n", n, mx);
    va_end(puntero);
}
```
