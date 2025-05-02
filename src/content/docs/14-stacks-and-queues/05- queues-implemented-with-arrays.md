---
title: Colas implementados con arrays
description: A reference page in my new Starlight docs site.
---

AI igual que las pilas, las colas se pueden implementar utilizando arrays o listas enlazadas. En esta sección se considera la implementación utilizando arrays. La definición de una cola ha de contener un array para almacenar los elementos de la cola, y dos marcadores o punteros (variables) que mantienen las posiciones frente y final de la cola; es decir, un marcador apuntando a la posición de la cabeza de la cola y el otro al primer espacio vacío que sigue al final de la cola. Cuando un elemento se añade a la cola, se verifica si el marcador final apunta a una posición válida, entonces se añade el elemento a la cola y se incrementa el marcador final en 1. Cuando un elemento se elimina de la cola, se hace una prueba para ver si la cola está vacía y, si no es así, se recupera el elemento de la posición apuntada por el marcador (puntero) de cabeza y éste se incrementa en 1. Este procedimiento funciona bien hasta la primera vez que el puntero de cabeza o cabecera alcanza el extremo del array y el array queda o bien vacío o bien lleno.

## Definición de la especificación de una cola

Una cola debe manejar diferentes tipos de datos; por esta circunstancia, se define en primer lugar el tipo genérico TipoDato. La clase Cola contiene una lista (listaQ) cuyo máximo tamaño se determina por la constante MaxTamQ. Se definen dos tipos de variables puntero o marcadores, frente y final. Éstas son los punteros de cabecera y cola o final respectivamente.

Las operaciones típicas de la cola son: InsertarQ, EliminarQ, Qvacia, Qllena, y FrenteQ.

- **InsertarQ** toma un elemento del tipo TipoDato y lo inserta en el final de la cola.
- **EliminarQ** elimina (quita) y devuelve el elemento de la cabeza o frente de la cola.
- **FrenteQ** devuelve el valor del elemento en el frente de la cola, sin eliminar el elemento y, por tanto, no modifica la cola.
- La operación **Qvacia** comprueba si la cola está vacía, es necesario esta comprobación antes de eliminar un elemento.
- **Qllena** comprueba si la cola está llena, esta comprobación se realiza antes de insertar un nuevo miembro.

Si las precondiciones para **InsertarQ** y **EliminarQ** se violan, el programa debe imprimir un mensaje de error y terminar.

## Especificación del tipo cola

La declaración del tipo de dato Cola y los prototipos de las operaciones de la cola se almacena en un archivo de cabecera "colaarray.h".

```c
#include <stdio.h>
#include <stdlib.h>
#define MaxTamQ 100
typedef struct {
    int frente;
    int final;
    TipoDato listaQ[MaxTamQ];
} Cola;

/* Operaciones del tipo de datos Cola */

/* operaciones de modificación de la cola */
void CrearCola(Cola* Q);  /* inicializa la cola como vacía */
void InsertarQ(Cola* Q, TipoDato elemento);
TipoDato EliminarQ(Cola* Q);
void BorrarCola(Cola* Q);

/* acceso a la cola */
TipoDato FrenteQ(Cola Q);

/* métodos de verificación del estado de la cola */
int LongitudQ(Cola Q);
int Qvacia(Cola Q);
int Qllena(Cola Q);
```

## Implementación del tipo cola

La declaración que se ha hecho del tipo Cola contiene un array para el almacenamiento de los elementos de la cola y dos marcadores o punteros: uno apuntando a la posición de la cabeza o cabecera de la cola y el otro al primer espacio vacío a continuación del final de la cola. Cuando un elemento se añade a la cola, se hace un test (prueba) para ver si el marcador final apunta a una posición válida, a continuación se añade el elemento a la cola y el marcador final se incrementa en 1. Cuando se quita (elimina) un elemento de la cola, se realiza un test (prueba) para ver si la cola está vacía, y si no es así, se recupera el elemento que se encuentra en la posición apuntada por el marcador de cabeza y el marcador de cabeza se incrementa en 1.

Este procedimiento funciona bien hasta la primera vez que el marcador final alcanza el final del array. Si durante este tiempo se han producido eliminaciones, habrá espacio vacío al principio del array. Sin embargo, puesto que el marcador final apunta al extremo del array, implicará que la cola está llena y ningún dato más se añadirá. Se pueden desplazar los datos de modo que la cabeza de la cola vuelve al principio del array cada vez que esto sucede, pero el desplazamiento de datos es costoso en términos de tiempo de computadora, especialmente si los datos almacenados en el array son estructuras de datos grandes.

El medio más eficiente, sin embargo, para almacenar una cola en un array, es utilizar un tipo especial de array que junte el extremo final de la cola con su extremo cabeza. Tal array se denomina array circular y permite que el array completo se utilice para almacenar elementos de la cola sin necesidad de que ningún dato se desplace. Un array circular con n elementos se visualiza en la Figura 15.6.

**Figura 15.6. Un array circular.**

El array se almacena de modo natural en la memoria tal como un bloque lineal de n elementos. Se necesitan dos marcadores (punteros) cabeza y final para indicar la posición del elemento que precede a la cabeza y la posición del final, donde se almacenó el último elemento añadido. Una cola vacía se representa por la condición cabeza = final.

**Figura 15.7. Una cola vacía.**

La variable frente o cabeza es siempre la posición del elemento que precede al primero de la cola y se avanza en el sentido de las agujas del reloj. La variable final es la posición en donde se hizo la última inserción. Después que se ha producido una inserción, final se mueve circularmente a la derecha. La implementación del movimiento circular se realiza utilizando la técnica de los restos:

```c
(final + 1) % MaxTamQ
(frente + 1) % MaxTamQ
```

**Figura 15.8. Una cola que contiene un elemento.**

Los algoritmos que formalizan la gestión de colas en un array circular han de incluir al menos las siguientes tareas:

- **Creación de una cola vacía**: cabeza = final = 0.
- **Comprobar si una cola está vacía**: cabeza == final.
- **Comprobar si una cola está llena**: (final + 1) % MaxTamQ == cabeza.
- **Añadir un elemento a la cola**: si la cola no está llena, añadir un elemento en la posición siguiente y actualizar final: `final = (final + 1) % MaxTamQ`.
- **Eliminación de un elemento de la cola**: si la cola no está vacía, eliminarlo de la posición siguiente a cabeza y establecer `cabeza = (cabeza + 1) % MaxTamQ`.

## Operaciones de la cola

Una cola permite un conjunto limitado de operaciones, para inicializar la cola, para añadir un nuevo elemento (InsertarQ) o quitar/eliminar un elemento (EliminarQ). El tipo Cola proporciona también **FrenteQ**, que permite «ver» el primer elemento de la cola. Para esta implementación, con array circular, el tipo cola es el siguiente:

```c
#define MaxTamQ 100
typedef struct {
    int frente;
    int final;
    TipoDato listaQ[MaxTamQ];
} Cola;
```

### CrearCola

La primera operación que se realiza sobre una cola es inicializarla para que a continuación puedan añadirse elementos a la cola.

```c
void CrearCola(Cola* Q) {
    Q->frente = 0;
    Q->final = 0;
}
```

## InsertarQ

Antes de que comience el proceso de inserción, el índice final apunta al último elemento insertado. El nuevo elemento se sitúa en la posición siguiente. El cálculo de las posiciones sucesivas se consigue mediante el operador resto (`%`). Después de situar el elemento de la lista, el índice final se debe actualizar para apuntar en la siguiente posición.

```c
/* insertar elemento en la cola */
void InsertarQ(Cola* Q, TipoDato elemento) {
    /* terminar si la cola está llena */
    if (Qllena(Q)) {
        puts("desbordamiento cola");
        exit(1);
    }
    /* asignar elemento a listaQ y actualizar final */
    Q->final = (Q->final + 1) % MaxTamQ;
    Q->listaQ[Q->final] = elemento;
}
```

## EliminarQ

La operación **EliminarQ** borra o elimina un elemento del frente de la cola, una posición que se referencia por el índice frente. Comienza el proceso de eliminación avanzando frente, ya que se estableció que referencia al anterior elemento.

```c
frente = (frente + 1) % MaxTamQ;
```

En el modelo circular, la cabeza se debe volver a posicionar en el siguiente elemento de la lista utilizando el operador resto (`%`). El código fuente es:

```c
/* borrar elemento del frente de la cola y devuelve su valor */
TipoDato EliminarQ(Cola* Q) {
    TipoDato aux;
    /* si listaQ está vacía, terminar el programa */
    if (Qvacia(Q)) {
        puts("Eliminación de una cola vacía");
        exit(1);
    }
   

 /* acceder a la cabeza, devolver el elemento y actualizar frente */
    aux = Q->listaQ[Q->frente];
    Q->frente = (Q->frente + 1) % MaxTamQ;
    return aux;
}
```

## FrenteQ
La operación **FrenteQ** obtiene el elemento del frente de la cola, una posición que se referencia por el índice frente.

```c
TipoDato FrenteQ(Cola Q)
{
    TipoDato aux;
    /* si la cola está vacía, terminar el programa */
    if (Qvacia(Q)) {
        puts("Elemento frente de una cola vacía.");
        exit(1);
    }
    return Q.listaQ[Q.frente];
}
```

## Qvacia
Las operaciones que preguntan por el estado de la cola pueden implementarse preguntando por los campos frente y final. La operación **Qvacia** prueba si la cola no tiene elementos.

```c
int Qvacia(Cola Q)
{
    return (Q.frente == Q.final);
}
```

## Qllena
La operación **Qllena** prueba si la cola no puede contener más elementos.

```c
int Qllena(Cola Q)
{
    return (Q.frente == (Q.final + 1) % MaxTamQ);
}
```
