---
title: Listas circulares
description: A reference page in my new Starlight docs site.
---

En las listas lineales simples o en las dobles siempre hay un primer nodo y un último nodo que tiene el campo de enlace a nulo. Una lista circular, por propia naturaleza, no tiene ni principio ni fin. Sin embargo, resulta útil establecer un nodo a partir del cual se acceda a la lista y así poder acceder a sus nodos. La Figura 14.9 muestra una lista circular con enlace simple; podría considerarse como una lista lineal, de tal manera que el último nodo apunta al primero.

**Figura 14.9. Lista circular.**

Las operaciones que se realizan sobre una lista circular son similares a las operaciones sobre listas lineales, teniendo en cuenta que el último nodo no apunta a nulo sino al primero. La creación de una lista circular se puede hacer con un enlace simple o un enlace doble. Consideramos que la lista circular se enlaza con un solo enlace, la realización con enlace doble y otros es similar (se puede consultar el Apartado 14.4).

## Insertar un elemento en una lista circular

El algoritmo empleado para añadir o insertar un elemento en una lista circular varía dependiendo de la posición en que se desea insertar el elemento. La posición de inserción puede variar, consideramos que se hace como nodo anterior al del nodo de acceso a la lista L L , y que Lc tiene la dirección del último nodo insertado. A continuación se escribe la declaración de un nodo, una función que crea un nodo y la función que inserta el nodo en la lista circular.

```c
typedef char* Item;
typedef struct Elemento {
    Item dato;
    struct Elemento* siguiente;
} Nodo;

Nodo* NuevoNodo(Item x) {
    Nodo *a;
    a = (Nodo*)malloc(sizeof(Nodo));
    a->dato = x;
    a->siguiente = a;
    return a;
}

void InsertaCircular(Nodo** Lc, Item entrada) {
    Nodo* nuevo;
    nuevo = NuevoNodo(entrada);
    if (*Lc != NULL) {
        nuevo->siguiente = (*Lc)->siguiente;
        (*Lc)->siguiente = nuevo;
    }
    *Lc = nuevo;
}
```

## Supresión de un elemento en una lista circular

La operación de eliminar un nodo de una lista circular sigue los mismos pasos que los dados para eliminar un nodo en una lista lineal. Hay que enlazar el nodo anterior con el nodo siguiente al que se desea eliminar y liberar la memoria que ocupa. El algoritmo para eliminar un nodo de una lista circular:

1. Búsqueda del nodo que contiene el dato.
2. Se enlaza el nodo anterior con el siguiente.
3. En caso de que el nodo a eliminar sea el referenciado por el puntero de acceso a la lista, Lc.
4. Por último, se libera la memoria ocupada por el nodo.

En la función de eliminar hay que tener en cuenta la característica de lista circular, así para detectar si la expresión `Lc == Lc->siguiente` es cierta, la lista consta de un solo nodo.

A continuación se escribe el código de la función eliminar para una lista circular. Para ello recorre la lista con un puntero al nodo anterior, por esa razón se accede al dato con la sentencia `actual->siguiente->dato`. Esto permite, en el caso de encontrarse el nodo, tener en cuenta el nodo anterior. Después del bucle es necesario volver a preguntar por el campo dato, ya que no se comparó el nodo Lc y el bucle puede haber terminado sin encontrar el nodo:

```c
void eliminar(Nodo** Lc, Item entrada) {
    Nodo* actual;
    int encontrado = 0;
    actual = *Lc;
    while ((actual->siguiente != *Lc) && (!encontrado)) {
        encontrado = (strcmp(actual->siguiente->dato, entrada) == 0);
        if (!encontrado) {
            actual = actual->siguiente;
            encontrado = (strcmp(actual->siguiente->dato, entrada) == 0);
        }
        if (encontrado) {
            Nodo* p;
            p = actual->siguiente; // Nodo a eliminar
            if (*Lc == (*Lc)->siguiente) { // Lista con un solo nodo
                *Lc = NULL;
            } else {
                if (p == *Lc)
                    *Lc = actual; // Se borra el elemento referenciado por Lc
            }
            actual->siguiente = p->siguiente;
            free(p);
        }
    }
}
```

**Ejercicio**

Este ejercicio crea una lista circular con palabras leídas del teclado. El programa debe tener un conjunto de opciones para:

a) Mostrar las cadenas que forman la lista;
b) Borrar una palabra dada;
c) Al terminar la ejecución, recorrer la lista eliminando los nodos.

**Análisis:**  
Los nodos de la lista tienen como campo dato un puntero a una cadena que es la palabra. Desde teclado se lee la palabra en un buffer suficientemente amplio; se ha de reservar memoria para tanto caracteres como longitud (`strlen()`) tenga la cadena leída y asignar su dirección al puntero del nodo. A continuación se copia el buffer a la memoria reservada (campo dato del nodo). El nodo se inserta llamando a la función `InsertaCircular()`. Para borrar una palabra se llama a la función `eliminar()`.

```c
#include <stdio.h>
#include <string.h>

typedef char* Item;
typedef struct Elemento {
    Item dato;
    struct Elemento* siguiente;
} Nodo;

Nodo* NuevoNodo(Item x);
void InsertaCircular(Nodo** Lc, Item entrada);
void eliminar(Nodo** Lc, Item entrada);
void recorrer(Nodo* Lc);
void borrarlista(Nodo** Lc);

int main() {
    char cadena[81];
    Nodo *Lc = NULL;
    int opc;

    printf("\n\nEntrada de Nombres. Termina con ^Z.\n");
    while (gets(cadena)) {
        recorrer(Lc);
        puts("\n\n\t Opciones para manejar la lista");
        do {
            puts("\n 1. Eliminar una palabra de la lista circular.");
            puts("\n 2. Mostrar todos los elementos de la lista.");
            puts("\n 3. Salir y eliminar los nodos de la lista.");
            scanf("%d", &opc);
            switch (opc) {
                case 1:
                    printf("Palabra a eliminar: ");
                    scanf("%s", cadena);
                    eliminar(&Lc, cadena);
                    break;
                case 2:
                    printf("\nPalabras que contienen la lista:\n");
                    recorrer(Lc);
                    break;
                case 3:
                    printf("Eliminación de los nodos de la lista.");
                    borrarlista(&Lc);
                    break;
            }
        } while (opc != 3);
    }
    return 0;
}

Nodo* NuevoNodo(Item x) {
    Nodo *a = (Nodo*)malloc(sizeof(Nodo));
    a->dato = (char*)malloc((strlen(x) + 1) * sizeof(char));
    strcpy(a->dato, x);
    a->siguiente = a; // Apunta a sí mismo, es un nodo circular
    return a;
}

void InsertaCircular(Nodo** Lc, Item entrada) {
    Nodo* nuevo;
    nuevo = NuevoNodo(entrada);
    if (*Lc != NULL) {
        nuevo->siguiente = (*Lc)->siguiente;
        (*Lc)->siguiente = nuevo;
    }
    *Lc = nuevo;
}

void recorrer(Nodo* Lc) {
    Nodo* p;
    if (Lc != NULL) {
        p = Lc->siguiente;
        do {
            printf("\t%s\n", p->dato);
            p = p->siguiente;
        } while (p != Lc->siguiente);
    } else {
        printf("\n\tLista vacía.\n");
    }
}

void borrarlista(Nodo** Lc) {
    Nodo* p;
    if (*Lc != NULL) {
        p = *Lc;
        do {
            Nodo* t = p;
            p = p->siguiente;
            free(t);
        } while (p != *Lc);
        *Lc = NULL;
    } else {
        printf("\n\tLista vacía.\n");
    }
}
```

---

Este es el texto ordenado y tal como lo pediste.