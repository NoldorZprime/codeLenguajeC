---
title: Visibilidad de una función
description: A reference page in my new Starlight docs site.
---

**ÁMBITO Y DURACIÓN DE LOS ELEMENTOS**

El ámbito de un elemento es su visibilidad desde otras partes del programa y la duración de un elemento es su tiempo de vida, lo que implica no sólo cuánto tiempo existe la variable, sino cuando se crea y cuando se hace disponible. El ámbito de un elemento en C depende de donde se sitúe la definición y de los modificadores que le acompañan. En resumen, se puede decir que un elemento definido dentro de una función tiene ámbito local (alcance local), o si se define fuera de cualquier función, se dice que tiene un ámbito global. La Figura 7.6 resume el modo en que se ve afectado el ámbito por la posición en el archivo fuente.


**CLASES DE ALMACENAMIENTO**

Existen dos tipos de clases de almacenamiento en C: `auto` y `static`.  
Una variable `auto` es aquella que tiene una duración automática. No existe cuando el programa comienza la ejecución, se crea en algún punto durante la ejecución y desaparece en algún punto antes de que el programa termine la ejecución.

Una variable `static` es aquella que tiene una duración fija. El espacio para el elemento de programación se establece en tiempo de compilación; existe en tiempo de ejecución y se elimina sólo cuando el programa desaparece de memoria en tiempo de ejecución.

**VARIABLES GLOBALES**

Las variables con ámbito global se denominan **variables globales** y son las definidas externamente a la función (declaración externa). Las variables globales tienen el siguiente comportamiento y atributos:

```c
// prog-demo.c
int x0 ; /* variable global */
```

Las variables globales declaradas en este nivel tienen ámbito global.  
Son válidas para todas las funciones de este archivo fuente.  
Disponible en otros archivos fuente a menos que se utilice la palabra reservada `static`.

```c
Function-a() {
    int x1; /* variable local */
}
```

Las variables declaradas en este nivel son locales y tienen clase de almacenamiento `auto` al salir de la función, a menos que se utilice la palabra reservada `static`.  
Visible sólo a esta función.

**Ámbito global / Ámbito local**


## Variables locales frente a variables globales

Además de las variables globales, es preciso considerar las **variables locales**.  
Una variable local está definida solamente dentro del bloque o cuerpo de la función y no tiene significado (vida) fuera de la función respectiva.

```c
int x0; // global

funcion1(...) {
    int x1; // local
}
```

La variable `x0` es global al programa completo, mientras que `x1` es local a la función `funcion1`.

**VARIABLES LOCALES EN MÚLTIPLES FUNCIONES**

Examine ahora la Figura 7.8. Esta vez existen dos funciones, ambas definen `x1` como variable local.  
Nuevamente `x0` es una variable global. La variable `x1` sólo se puede utilizar dentro de las dos funciones.  
Sin embargo, cualquier operación sobre `x1` dentro de `funcion1()` no afecta al valor de `x1` en `funcion2()` y viceversa.

```c
int x0;

float funcion1() {
    int x1; // local a funcion1
}

float funcion2() {
    int x1; // local a funcion2
}
```

**DEFINICIONES Y DECLARACIONES**

Al contrario que las variables, las funciones son externas por defecto.  
Es preciso considerar la diferencia entre **definición** de una función y **declaración**.  
Una declaración de variable que comienza con la palabra reservada `extern` no se considera definición de variable.

Una variable sólo se define una vez, pero se puede declarar tantas veces como se desee.  
Una declaración de variable al nivel global (externa a las funciones) es válida desde esa declaración hasta el final del archivo.

```c
int x0 ;
extern int suma;
extern void f(void);
```

**EJEMPLO DE MÚLTIPLES ARCHIVOS**

Archivo `programa.c`:
```c
int total;
extern int suma;
extern void f(void);

void main(void) {
    ...
}
```

Archivo `modulo.c`:
```c
int suma;
void f(void) {
    ...
}
```

Utilizando `extern` se puede acceder a símbolos definidos en otros módulos.  
Las funciones son externas por defecto, a diferencia de las variables.

## VARIABLES ESTÁTICAS Y AUTOMÁTICAS

Los valores asignados a las variables locales de una función se destruyen cuando se termina la ejecución de la función y no se puede recuperar su valor para ejecuciones posteriores de la función.

Las variables locales se denominan **variables automáticas**.  
Por defecto, las variables locales son automáticas, por lo que el uso de `auto` es opcional.

```c
auto int ventas;
```

Las **variables estáticas**, por otra parte, **mantienen su valor** después que una función se ha terminado.

```c
static int ventas = 10000;
static int dias = 500;
```

Este valor se almacena solo la primera vez que se ejecuta la función.

**EJEMPLO DE VARIABLE ESTÁTICA**

```c
#include <stdio.h>

void Ejemplo_estatica(int);

void main() {
    Ejemplo_estatica(1);
    Ejemplo_estatica(2);
    Ejemplo_estatica(3);
}

void Ejemplo_estatica(int llamada) {
    static int cuenta;
    if (llamada == 1)
        cuenta = 1;
    printf("\n El valor de Cuenta en llamada nº %d es: %d", llamada, cuenta);
    ++cuenta;
}
```

Salida:
```
El valor de Cuenta en llamada nº 1 es: 1
El valor de Cuenta en llamada nº 2 es: 2
El valor de Cuenta en llamada nº 3 es: 3
```

Si se quita `static`, el comportamiento ya no es predecible.

**VARIABLES GLOBALES PRIVADAS**

Las variables globales se pueden ocultar de otros archivos fuente utilizando `static`.

```c
static int m = 25;
static char linea_texto[80];
static int indice_linea;
static char bufer[MAXLOGBUF];
static char *pBuffer;
```

Estas variables son privadas al archivo fuente.

**DECLARACIÓN DE FUNCIONES STATIC**

También se puede hacer una declaración de función `static` para que sea privada al archivo fuente.

Por defecto, todas las funciones tienen **enlace externo** y son visibles a otros módulos.  
Al declarar una función como `static`, su visibilidad se restringe al archivo.

