---
title: Operaciones en árboles binarios de búsqueda
description: A reference page in my new Starlight docs site.
---

De lo expuesto se deduce que los árboles binarios tienen naturaleza recursiva y en consecuencia las operaciones sobre los árboles son recursivas, si bien siempre tenemos la opción de realizarlas de forma iterativa. Estas operaciones son:  
- Búsqueda de un nodo.  
- Inserción de un nodo.  
- Recorrido de un árbol.  
- Borrado de un nodo.  

## Búsqueda  
La búsqueda de un nodo comienza en el nodo raíz y sigue estos pasos:  
1. La clave buscada se compara con la clave del nodo raíz.  
2. Si las claves son iguales, la búsqueda se detiene.  
3. Si la clave buscada es mayor que la clave raíz, la búsqueda se reanuda en el subárbol derecho. Si la clave buscada es menor que la clave raíz, la búsqueda se reanuda con el subárbol izquierdo.  

### Buscar una información específica**  
Si se desea encontrar un nodo en el árbol que contenga la información sobre una persona específica. La función buscar tiene dos parámetros, un puntero al árbol y un número de matrícula para la persona requerida. Como resultado, la función devuelve un puntero al nodo en el que se almacena la información sobre esa persona; en el caso de que la información sobre la persona no se encuentre se devuelve el valor 0.  

**El algoritmo de búsqueda es el siguiente:**  
1. Comprobar si el árbol está vacío. En caso afirmativo se devuelve 0.  
2. Si la raíz contiene la persona, la tarea es fácil: el resultado es, simplemente, un puntero a la raíz.  
3. Si el árbol no está vacío, el subárbol específico depende de que el número de matrícula requerido sea más pequeño o mayor que el número de matrícula del nodo raíz.  
4. La función de búsqueda se consigue llamando recursivamente a la función buscar con un puntero al subárbol izquierdo o derecho como parámetro.  

**El código C de la función buscar es:**  
```c
Nodo* buscar (Nodo* p , int buscado)  
if ( ! p )  
    return 0 ;  
else if (buscado == p -> nummat)  
    return p;  
else if (buscado < p -> nummat)  
    return buscar ( p -> izda , buscado);  
else  
    return buscar ( p -> dcha , buscado);  
```

## Insertar un nodo  
Una característica fundamental que debe poseer el algoritmo de inserción es que el árbol resultante de una inserción en un árbol de búsqueda ha de ser también de búsqueda. En esencia, el algoritmo de inserción se apoya en la localización de un elemento, de modo que si se encuentra el elemento (clave) buscado, no es necesario hacer nada; en caso contrario, se inserta el nuevo elemento justo en el lugar donde ha acabado la búsqueda (es decir, en el lugar donde habría estado en el caso de existir).  

**Antes de insertar 8**  
**Después de insertar 8**  
*Figura 16.26. Inserción en un árbol binario de búsqueda.*

Por ejemplo, considérese el caso de añadir el nodo 8 al árbol de la Figura 16.26. Se comienza el recorrido en el nodo raíz 25; la posición 8 debe estar en el subárbol izquierdo de 25 (8 < 25). En el nodo 10, la posición de 8 debe estar en el subárbol izquierdo de 10, que está actualmente vacío. El nodo 8 se introduce como un hijo izquierdo del nodo 10.  

**Ejemplo 16.11**  
Insertar un elemento con clave 80 en el árbol binario de búsqueda siguiente:  
A continuación insertar un elemento con clave 36 en el árbol binario de búsqueda resultante.  

**Solución**  
(a) Inserción de 80  
(b) Inserción de 36  

## Función insertar ( )  

La función insertar que pone nuevos nodos es sencilla. Se deben declarar tres argumentos: un puntero al raíz del árbol, el nuevo nombre y número de matrícula de la persona. La función creará un nuevo nodo para la nueva persona y lo inserta en el lugar correcto en el árbol de modo que el árbol permanezca como binario de búsqueda.  

**Los pasos a seguir son:**  
1. Asignar memoria para una nueva estructura nodo.  
2. Buscar en el árbol para encontrar la posición de inserción del nuevo nodo, que se colocará como nodo hoja.  
3. Enlazar el nuevo nodo al árbol.  

**El código C de la función:**  
```c
void insertar (Nodo** raiz, int nuevomat, char *nuevo_nombre)  
{  
    if ( ! (*raiz))  
        *raiz = CrearNodo(nuevomat, nuevo_nombre) ;  
    else if (nuevomat < (*raiz) -> nummat)  
        insertar (&((*raiz) -> izda), nuevomat, nuevo_nombre);  
    else  
        insertar (&((*raiz) -> dcha), nuevomat, nuevo_nombre);  
}
```  

Si el árbol está vacío, es fácil insertar la entrada en el lugar correcto. El nuevo nodo es la raíz del árbol y el puntero `raiz` se pone apuntando a ese nodo. El parámetro `raiz` debe ser un parámetro por referencia ya que debe ser leído y actualizado, por esa razón se declara puntero a puntero (`Nodo**`).  

Si el árbol no está vacío, se debe elegir entre insertar el nuevo nodo en el subárbol izquierdo o derecho, dependiendo de que el número de matrícula de la nueva persona sea más pequeño o mayor que el número de matrícula en la raíz del árbol.  

## Eliminación  

La operación de eliminación de un nodo es también una extensión de la operación de búsqueda, si bien más compleja que la inserción debido a que el nodo a suprimir puede ser cualquiera y la operación de supresión debe mantener la estructura de árbol binario de búsqueda después de la eliminación de datos.  

**Los pasos a seguir son:**  
1. Buscar en el árbol para encontrar la posición del nodo a eliminar.  
2. Reajustar los punteros de sus antecesores si el nodo a suprimir tiene menos de 2 hijos, o subir a la posición que éste ocupa el nodo más próximo en clave (inmediatamente superior o inmediatamente inferior) con objeto de mantener la estructura de árbol binario.  

**Ejemplo 16.12**  
Suprimir el elemento de clave 36 del siguiente árbol binario de búsqueda:  

**Ejemplo 16.13**  
Borrar el elemento de clave 60 del siguiente árbol:  

Se reemplaza 60 bien con el elemento mayor (55) en su subárbol izquierdo o el elemento más pequeño (70) en su subárbol derecho. Si se opta por reemplazar con el elemento mayor del subárbol izquierdo, se mueve el 55 a la raíz del subárbol y se reajusta el árbol.  

---

### Ejercicio 16.3  
Con los registros de estudiantes formar un árbol binario de búsqueda, ordenado respecto al campo clave `nummat`. El programa debe tener las opciones de mostrar los registros ordenados y eliminar un registro dando el número de matrícula.  

**Análisis**  
Cada registro tiene sólo dos campos de información: nombre y `nummat`. Además, los campos de enlace con el subárbol izquierdo y derecho.  

Las operaciones que se van a implementar son las de insertar, eliminar, buscar y visualizar el árbol. Los algoritmos de las tres primeras operaciones ya están descritos anteriormente.  

La operación de visualizar va a consistir en un recorrido **inorden**, cada vez que se visite el nodo raíz se escriben los datos del estudiante.

```c
#include <stdio.h>
#include <stdlib.h>
#include <conio.h>

struct nodo {
    int nummat;
    char nombre[30];
    struct nodo *izda, *dcha;
};
typedef struct nodo Nodo;

Nodo* CrearNodo(int id, char* n);
Nodo* buscar(Nodo* p, int buscado);
void insertar(Nodo** raiz, int nuevo_mat, char *nuevo_nombre);
void eliminar(Nodo** r, int mat);
void visualizar(Nodo* r);

int main() {
    int nm;
    char nom[30];
    Nodo* R = 0;

    /* Crea el árbol */
    do {
        printf("Numero de matricula (0 -> Fin): ");
        scanf("%d%*c", &nm);
        if (nm) {
            printf("Nombre: ");
            gets(nom);
            insertar(&R, nm, nom);
        }
    } while (nm);

    /* Opciones de escribir el árbol o borrar un registro */
    clrscr();
    do {
        puts("1. Mostrar el árbol\n");
        puts("2. Eliminar un registro\n");
        puts("3. Salir\n");
        do {
            scanf("%d%*c", &nm);
        } while (nm < 1 || nm > 3);
        if (nm == 1) {
            printf("\n\tRegistros ordenados por número de matrícula:\n");
            visualizar(R);
        } else if (nm == 2) {
            int cl;
            printf("Clave: ");
            scanf("%d", &cl);
            eliminar(&R, cl);
        }
    } while (nm != 3);

    return 1;
}

Nodo* CrearNodo(int id, char* n) {
    Nodo* t;
    t = (Nodo*) malloc(sizeof(Nodo));
    t->nummat = id;
    strcpy(t->nombre, n);
    t->izda = t->dcha = NULL;
    return t;
}

Nodo* buscar(Nodo* p, int buscado) {
    if (!p)
        return 0;
    else if (buscado == p->nummat)
        return p;
    else if (buscado < p->nummat)
        return buscar(p->izda, buscado);
    else
        return buscar(p->dcha, buscado);
}

void insertar(Nodo** raiz, int nuevomat, char *nuevo_nombre) {
    if (!(*raiz)) {
        *raiz = CrearNodo(nuevomat, nuevo_nombre);
    } else if (nuevomat < (*raiz)->nummat) {
        insertar(&((*raiz)->izda), nuevomat, nuevo_nombre);
    } else {
        insertar(&((*raiz)->dcha), nuevomat, nuevo_nombre);
    }
}

void visualizar(Nodo* r) {
    if (r) {
        visualizar(r->izda);
        printf("Matricula %d \t %s \n", r->nummat, r->nombre);
        visualizar(r->dcha);
    }
}

void eliminar(Nodo** r, int mat) {
    if (!(*r)) {
        printf("!! Registro con clave %d no se encuentra !!\n", mat);
    } else if (mat < (*r)->nummat) {
        eliminar(&(*r)->izda, mat);
    } else if (mat > (*r)->nummat) {
        eliminar(&(*r)->dcha, mat);
    } else {
        Nodo* q;
        q = (*r);
        if (q->izda == NULL) {
            (*r) = q->dcha;
        } else if (q->dcha == NULL) {
            (*r) = q->izda;
        } else {
            Nodo *a, *p;
            p = q;
            a = q->izda;
            while (a->dcha) {
                p = a;
                a = a->dcha;
            }
            q->nummat = a->nummat;
            strcpy(q->nombre, a->nombre);
            if (p == q) {
                p->izda = a->izda;
            } else {
                p->dcha = a->izda;
            }
            q = a;
            free(q);
        }
    }
}
```

## Explicación teórica ordenada:

**16.9.5. Recorridos de un árbol**  
Existen dos tipos de recorrido de los nodos de un árbol: el recorrido en **anchura** y el recorrido en **profundidad**.

- En el recorrido **en anchura** se visitan los nodos por niveles. Se utiliza una estructura auxiliar tipo cola en la que, después de mostrar el contenido de un nodo (empezando por el nodo raíz), se almacenan los punteros correspondientes a sus hijos izquierdo y derecho.

- El recorrido **en profundidad** se realiza por uno de tres métodos recursivos:
  - **Preorden**: Raíz → Izdo → Dcho
  - **Inorden**: Izdo → Raíz → Dcho
  - **Postorden**: Izdo → Dcho → Raíz

---

**16.9.6. Determinación de la altura de un árbol**

La altura de un árbol depende del criterio para definirla. Si un árbol tiene nodo raíz, se considera que su altura es 1.

- La altura de un árbol con un nodo es 1.
- La altura de un árbol vacío (puntero `NULL`) es 0.
- La **altura de un árbol** es **1 más que la mayor de las alturas de sus subárboles izquierdo y derecho**.

**Ejemplo 16.14**  
Función que determina la altura de un árbol binario de manera recursiva.  
Se considera que la altura de un árbol vacío es 0. Si no está vacío, la altura es:

```c
int altura(Nodo* r) {
    if (r == NULL)
        return 0;
    else
        return 1 + max(altura(r->izda), altura(r->dcha));
}
```
