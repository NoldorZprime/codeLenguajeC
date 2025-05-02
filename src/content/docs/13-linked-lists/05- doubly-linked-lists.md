---
title: Listas doblemente enlazadas
description: A reference page in my new Starlight docs site.
---

Hasta ahora el recorrido de una lista se realizaba en sentido directo (adelante) o, en algunos casos, en sentido inverso (hacia atrás). Sin embargo, existen numerosas aplicaciones en las que es conveniente poder acceder a los elementos o nodos de una lista en cualquier orden. En este caso se recomienda el uso de una lista doblemente enlazada. En tal lista, cada elemento contiene dos punteros, aparte del valor almacenado en el elemento. Un puntero apunta al siguiente elemento de la lista y el otro puntero apunta al elemento anterior. La Figura 14.6 muestra una lista doblemente enlazada y un nodo de dicha lista.

**Listas enlazadas**

Figura 14.6. Lista doblemente enlazada.  
(a) Lista con tres nodos;  
(b) nodo.

Existe una operación de insertar y eliminar (borrar) en cada dirección. La Figura 14.7 muestra el problema de insertar un nodo p a la derecha del nodo actual. Deben asignarse cuatro nuevos enlaces.

**Figura 14.7. Inserción de un nodo en una lista doblemente enlazada.**

En el caso de eliminar (borrar) un nodo de una lista doblemente enlazada es preciso cambiar dos punteros.

**Figura 14.8. Eliminación de un nodo en una lista doblemente enlazada.**

## Declaración de una lista doblemente enlazada

Una lista doblemente enlazada con valores de tipo `int` necesita dos punteros y el valor del campo `datos`. En una estructura se agrupan estos datos del modo siguiente:

```c
typedef int Item;
struct unnodo {
    Item dato;
    struct unnodo *adelante;
    struct unnodo *atras;
};
typedef struct unnodo Nodo;
```

## Insertar un elemento en una lista doblemente enlazada

El algoritmo empleado para añadir o insertar un elemento en una lista doble varía dependiendo de la posición en que se desea insertar el elemento. La posición de inserción puede ser:

- En la cabeza (elemento primero) de la lista.
- En el final de la lista (elemento último).
- Antes de un elemento especificado.
- Después de un elemento especificado.

### Insertar un nuevo elemento en la cabeza de una lista doble

El proceso de inserción se puede resumir en este algoritmo:

1. Asignar un nuevo nodo apuntado por `nuevo`, que es una variable puntero local que apunta al nuevo nodo que se va a insertar en la lista doble.
2. Situar el nuevo elemento en el campo `dato` (Info) del nuevo nodo.
3. Hacer que el campo enlace `adelante` del nuevo nodo apunte a la cabeza (primer nodo) de la lista original, y que el campo enlace `atras` del nodo cabeza apunte al nuevo nodo.
4. Hacer que `cabeza` (puntero cabeza) apunte al nuevo nodo que se ha creado.

Código C:

```c
typedef int Item;
typedef struct tipo-nodo {
    Item dato;
    struct tipo-nodo* adelante;
    struct tipo-nodo* atras;
} Nodo;

Nodo* nuevo;
nuevo = (Nodo*)malloc(sizeof(Nodo));
nuevo->dato = entrada;
nuevo->adelante = cabeza;
nuevo->atras = NULL;
cabeza->atras = nuevo;
cabeza = nuevo;
```

En este momento, la función de insertar un elemento en la lista termina su ejecución y la variable local `nuevo` desaparece, y solo permanece el puntero de `cabeza` que apunta a la nueva lista doblemente enlazada.

### Inserción de un nuevo nodo que no está en la cabeza de la lista

La inserción de un nuevo nodo en una lista doblemente enlazada se puede realizar en un nodo intermedio de ella. El algoritmo de la nueva operación insertar requiere las siguientes etapas:

1. Asignar el nuevo nodo apuntado por el puntero `nuevo`.
2. Situar el nuevo elemento en el campo `dato` (Info) del nuevo nodo.
3. Hacer que el campo enlace `adelante` del nuevo nodo apunte al nodo que va después de la posición del nuevo nodo (o bien a `NULL` si no hay ningún nodo después de la nueva posición). El campo `atras` del nodo siguiente al nuevo tiene que apuntar a `nuevo`.
4. La dirección del nodo que está antes de la posición deseada para el nuevo nodo está en la variable puntero `anterior`. Hacer que `anterior->adelante` apunte al nuevo nodo. El enlace `atras` del nuevo nodo debe apuntar a `anterior`.

Código C:

```c
nuevo = (Nodo*)malloc(sizeof(Nodo));
nuevo->dato = entrada;
nuevo->adelante = anterior->adelante;
anterior->adelante->atras = nuevo; /* campo atras del siguiente apunta al nodo nuevo creado */
anterior->adelante = nuevo;
nuevo->atras = anterior;
```

## Supresión de un elemento en una lista doblemente enlazada

La operación de eliminar un nodo de una lista doble supone realizar el enlace de dos punteros, el nodo anterior con el nodo siguiente al que se desea eliminar con el puntero `adelante` y el nodo siguiente con el anterior con el puntero `atras` y liberar la memoria que ocupa.

El algoritmo para eliminar un nodo que contiene un dato es similar al algoritmo de borrado para una lista simple. Ahora, la dirección del nodo anterior se encuentra en el puntero `atras` del nodo a borrar. Los pasos a seguir:

1. Búsqueda del nodo que contiene el dato. Se ha de tener la dirección del nodo a eliminar y la dirección del anterior.
2. El puntero `adelante` del nodo anterior tiene que apuntar al puntero `adelante` del nodo a eliminar, esto en el caso de no ser el nodo cabecera.
3. El puntero `atras` del nodo siguiente a borrar tiene que apuntar al puntero `atras` del nodo a eliminar, esto en el caso de no ser el nodo último.
4. En caso de que el nodo a eliminar sea el primero, `cabeza`, se modifica `cabeza` para que tenga la dirección del nodo siguiente.
5. Por último, se libera la memoria ocupada por el nodo.

La codificación se presenta en la siguiente función:

```c
void eliminar(Nodo** cabeza, Item entrada) {
    Nodo* actual;
    int encontrado = 0;
    actual = *cabeza;
    while ((actual != NULL) && (!encontrado)) {
        /* Se sigue con la búsqueda */
        encontrado = (actual->dato == entrada);
        if (!encontrado)
            actual = actual->adelante;
        /* Enlace de nodo anterior con siguiente */
        if (actual != NULL) {
            if (actual == *cabeza) 
                *cabeza = actual->adelante;
            if (actual->adelante != NULL)
                actual->adelante->atras = NULL;
            else if (actual->adelante != NULL) { /* No es el último nodo */
                actual->atras->adelante = actual->adelante;
                actual->adelante->atras = actual->atras;
            } else { /* Último nodo */
                actual->atras->adelante = NULL;
            }
            free(actual);
        }
    }
}
```

**Ejercicio 14.3**

Se va a crear una lista doblemente enlazada con números enteros obtenidos aleatoriamente. Una vez creada la lista, se desea eliminar los nodos que estén fuera de un rango determinado.

**Análisis**

La inserción de elementos en la lista se hace por el nodo cabecera. El número de elementos de la lista se pide para ser introducido por teclado. También se pide por teclado el rango de valores que deben de estar en la lista. Para eliminar los elementos se recorre la lista, y los nodos que no están dentro del rango se borran de la lista. Para borrar los nodos se utiliza la función `eliminar()`, teniendo en cuenta que la dirección del nodo a suprimir ya se tiene.

Código completo:

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

typedef int Item;
typedef struct Elemento {
    Item dato;
    struct Elemento* adelante;
    struct Elemento* atras;
} Nodo;

void InsertarCabezaLista(Nodo** cabeza, Item entrada);
Nodo* NuevoNodo(Item x);
void eliminar(Nodo** cabeza, Nodo* actual);
void recorrer(Nodo* ptr);

void main() {
    Nodo* cabeza, *ptr;
    int x, y;
    cabeza = NULL;  /* Inicializa cabeza de lista vacía */
    srand(time(NULL));
    printf("\nNúmero de elementos a generar: ");
    scanf("%d", &x);
    for (; x--; )
        /* Se genera la lista doble */
        InsertarCabezaLista(&cabeza, rand());
    recorrer(cabeza);
    printf("\nRango de los valores que va a tener la lista: ");
    scanf("%d %d", &x, &y);
    /* Recorre la lista para eliminar nodos que no están en el rango de valores */
    printf("\n\tNodos eliminados\n");
    for (ptr = cabeza; ptr;)
        if ((ptr->dato < x) || (ptr->dato > y)) {
            Nodo* t;
            t = ptr->adelante;  /* Guarda el nodo por el que seguir */
            printf("%-d ", ptr->dato);
            eliminar(&cabeza, ptr);
            ptr = t;
        } else {
            ptr = ptr->adelante;
        }
    /* Recorre la lista para mostrar sus elementos */
    recorrer(cabeza);
}

void eliminar(Nodo** cabeza, Nodo* actual) {
    /* Elimina el nodo de dirección actual. Se distingue entre que el nodo sea el cabecera o del resto de la lista. */
    if (actual == *cabeza)
        *cabeza = actual->adelante;
    if (actual->adelante != NULL)
        actual->adelante->atras = NULL;
    else if (actual->adelante != NULL) {  /* No es el último nodo */
        actual->atras->adelante = actual->adelante;
        actual->adelante->atras = actual->atras;
    } else {  /* Último nodo */
        actual->atras->adelante = NULL;
    }
    free(actual);
}

void recorrer(Nodo* ptr) {
    int k = 0;
    printf("\n\n\tElementos de la lista\n");
    for (; ptr; ) {
        k++;
        printf("%-5d", ptr->dato);
        printf("%c", (k % 12 == 0 ? '\n' : ' '));
        ptr = ptr->adelante;
    }
}

void InsertarCabezaLista(Nodo** cabeza, Item entrada) {
    Nodo* nuevo;
    nuevo = NuevoNodo(entrada);
    nuevo->adelante = *cabeza;
    nuevo->atras = NULL;
    if (*cabeza != NULL)
        *cabeza = nuevo;
    (*cabeza)->atras = nuevo;
}

Nodo* NuevoNodo(Item x) {
    Nodo *a;
    a = (Nodo*)malloc(sizeof(Nodo));
    a->dato = x;
    a->adelante = NULL;
    return a;
}
```
