---
title: Realización de una cola con una lista enlazada
description: A reference page in my new Starlight docs site.
---

La realización de una cola mediante una lista enlazada permite ajustarse exactamente al número de elementos de la cola. Esta implementación utiliza dos punteros para acceder a la lista. El puntero Frente y el puntero Final.

**Figura 15.9. Cola con lista enlazada (representación gráfica típica)**

El puntero **Frente** referencia al primer elemento de la cola, el primero en ser retirado de la cola. El puntero **Final** referencia al último elemento en ser añadido, el último que será retirado.

Con esta representación no tiene sentido la operación que prueba si la cola está llena. Al ser una estructura dinámica puede crecer y decrecer según las necesidades (el límite está en la memoria libre del computador).

## Declaración del tipo cola con listas

Para esta representación se declara una estructura que represente al nodo de la lista enlazada, un puntero a esta estructura y la estructura cola con los punteros **Frente** y **Final**. Las operaciones son las mismas, excepto la operación **Qllena** que no es necesaria al ser una estructura dinámica. La declaración se almacena en el archivo **cola1ist.h**.

```c
#include <stdio.h>
#include <stdlib.h>

struct nodo {
    TipoDato elemento;
    struct nodo* siguiente;
};

typedef struct nodo Nodo;
typedef struct {
    Nodo* Frente;
    Nodo* Final;
} Cola;

/* Los prototipos de las operaciones */
void CrearCola(Cola* Q); /* Inicializa la cola como vacía */
void InsertarQ(Cola* Q, TipoDato elemento);
TipoDato EliminarQ(Cola* Q);
void BorrarCola(Cola* Q);

/* acceso a la cola */
TipoDato FrenteQ(Cola Q);

/* métodos de verificación del estado de la cola */
int Qvacia(Cola Q);
```

## Codificación de las operaciones del tipo cola con listas

Estas operaciones se van a almacenar en el archivo fuente **colalist.c**. En primer lugar, hay que incluir el archivo **colalist.h** y declarar el tipo de dato de los elementos de la cola. La inicialización de la cola, al ser una implementación con punteros, consiste en asignar el puntero nulo a **Frente** y **Final**. La operación de insertar se realiza creando un nuevo nodo (función auxiliar **crearnodo()**) y enlazándolo a partir del nodo final. La operación de eliminar se realiza sobre el otro extremo.

### Codificación de las operaciones.**

```c
typedef char TipoDato;
#include "colalist.h"

void CrearCola(Cola* Q) {
    Q->Frente = Q->Final = NULL;
}

Nodo* crearnodo(TipoDato elemento) {
    Nodo* t;
    t = (Nodo*)malloc(sizeof(Nodo));
    t->elemento = elemento;
    t->siguiente = NULL;
    return t;
}

int Qvacia(Cola Q) {
    return (Q.Frente == NULL);
}

void InsertarQ(Cola* Q, TipoDato elemento) {
    Nodo* a;
    a = crearnodo(elemento);
    if (Qvacia(*Q)) {
        Q->Frente = a;
    } else {
        Q->Final->siguiente = a;
    }
    Q->Final = a;
}

TipoDato EliminarQ(Cola* Q) {
    TipoDato aux;
    if (!Qvacia(*Q)) {
        Nodo* a = Q->Frente;
        aux = Q->Frente->elemento;
        Q->Frente = Q->Frente->siguiente;
        free(a);
    } else {
        printf("Error: intentar eliminar de una cola vacía");
        exit(1);
    }
    return aux;
}

void BorrarCola(Cola* Q) {
    while (Q->Frente != NULL) {
        Nodo* n = Q->Frente;
        Q->Frente = Q->Frente->siguiente;
        free(n);
    }
}
```

### Ejercicio 15.2

Una variante del famoso problema matemático llamado «problema de José» permite generar números de la suerte. Se parte de una lista inicial de **n** números, esta lista se va reduciendo siguiendo el siguiente algoritmo:

1. Se genera un número aleatorio **nₗ**.
2. Si **nₗ > n**, fin del algoritmo.
3. Si **nₗ <= n**, se quitan de la lista los números que ocupan las posiciones **1, I+nₗ, I+2*nₗ, ...**.
4. Se vuelve al paso 1.

**Análisis**

El problema se va a resolver utilizando la estructura **Cola**. En primer lugar, se genera una lista de **n** números aleatorios que se almacena en una cola. A continuación, se siguen los pasos del algoritmo. En cada pasada, se mueven los elementos de la cola a otra cola, excepto aquellos que están en las posiciones múltiplos de **nₗ**.

Las posiciones **I** se pueden expresar matemáticamente:

```
I mod nₗ = 1
```

El tipo cola y las operaciones sobre colas se agrupan en el archivo de inclusión **colalist.h**, implementado con estructuras dinámicas. Además, se añade la operación de **mostrarCola** para escribir los números que quedan en la lista.

### Archivo con el tipo cola y prototipos de las operaciones

```c
#include <stdio.h>
#include <stdlib.h>

struct nodo {
    TipoDato elemento;
    struct nodo* siguiente;
};

typedef struct nodo Nodo;
typedef struct {
    Nodo* Frente;
    Nodo* Final;
} Cola;

/* Los prototipos de las operaciones */
void CrearCola(Cola* Q); /* Inicializa la cola como vacía */
void InsertarQ(Cola* Q, TipoDato elemento);
TipoDato EliminarQ(Cola* Q);
void BorrarCola(Cola* Q);

/* acceso a la cola */
TipoDato FrenteQ(Cola Q);

/* métodos de verificación del estado de la cola */
int Qvacia(Cola Q);
```

### Archivo con la implementación de las operaciones

```c
typedef int TipoDato;
#include "colalist.h"
```

### Archivo con el algoritmo para obtener números de la suerte

```c
typedef int TipoDato;
#include "colalist.h"
#include <time.h>

void MostrarCola(Cola* Q);

int main() {
    Cola Q;
    int n, nl, n2, n3, i;
    randomize();
    nl = 1 + random(50);
    CrearCola(&Q);

    for (i = 1; i <= n; i++) {
        nl = 1 + random(11);
    }

    while (nl <= n) {
        /* Número de elementos de la lista */
        /* Se generan n números aleatorios */
        InsertarQ(&Q, 1 + random(100));

        printf("\nSe quitan elementos a distancia %d", nl);
        n2 = 0; /* Contador de elementos que quedan */

        for (i = 1; i <= n; i++) {
            n3 = EliminarQ(&Q); /* Retira el elemento frente */
            if (i % nl == 1) {
                printf("\t Se quitó %d", n3);
            } else {
                InsertarQ(&Q, n3); /* Se vuelve a meter en la cola */
                n2++;
            }
        }

        n = n2;
        nl = 1 + random(11);
    }

    printf("\nLos números de la suerte: ");
    MostrarCola(&Q);

    return 1;
}

void MostrarCola(Cola* Q) {
    while (!Qvacia(*Q)) {
        printf("%d ", EliminarQ(Q));
    }
}
```

