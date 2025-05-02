---
title: Operaciones
description: A reference page in my new Starlight docs site.
---

Una lista enlazada requiere unos controles para la gestión de los elementos contenidos en ellas. Estos controles se manifiestan en forma de operaciones que tendrán las siguientes funciones:

- Declaración de los tipos nodo y puntero a nodo.
- Inicialización o creación.
- Insertar elementos en una lista.
- Eliminar elementos de una lista.
- Buscar elementos de una lista (comprobar la existencia de elementos en una lista).
- Recorrer una lista enlazada (visitar cada nodo de la lista).
- Comprobar si la lista está vacía.

## Declaración de un nodo

Una lista enlazada se compone de una serie de nodos enlazados mediante punteros. Cada nodo es una combinación de dos partes: un tipo de dato (entero, real, doble, carácter o tipo predefinido) y un enlace (puntero) al siguiente nodo. En C, se puede declarar un nuevo tipo de dato por un nodo mediante las palabras reservadas `struct` que contiene las dos partes citadas.

```c
struct Nodo {
    int dato;
    struct Nodo* enlace;
};
typedef struct Nodo NODO;
```

La declaración utiliza el tipo `struct` que permite agrupar campos de diferentes tipos, el campo `dato` y el campo `enlace`. Con `typedef` se puede declarar a la vez un nuevo identificador de `struct Nodo`, en el caso anterior se ha elegido `NODO`.

Dado que los tipos de datos que se puede incluir en una lista pueden ser de cualquier tipo (enteros, dobles, caracteres o incluso cadenas), con el objeto de que el tipo de dato de cada nodo se pueda cambiar con facilidad, se suele utilizar una sentencia `typedef` para declarar el nombre de `Elemento` como un sinónimo del tipo de dato de cada campo. El tipo `Elemento` se utiliza entonces dentro de la estructura nodo, como se muestra a continuación:

```c
typedef double Elemento;
struct nodo {
    Elemento dato;
    struct nodo* enlace;
};
```

Entonces, si se necesita cambiar el tipo de elemento en los nodos, sólo tendrá que cambiar la sentencia de declaración de tipos que afecta a `Elemento`. Siempre que una función necesite referirse al tipo del dato del nodo, puede utilizar el nombre `Elemento`.

**Ejemplo 14.1**

En este ejemplo se declara un tipo denominado `PUNTO` que representa un punto en el plano con su coordenada `x` e `y`. También se declara el tipo `NODO` con el campo `dato` del tipo `PUNTO`. Por último, se define un puntero a `NODO`.

```c
#include <stdlib.h>

typedef struct punto {
    float x, y;
} PUNTO;

typedef struct Nodo {
    PUNTO dato;
    struct Nodo* enlace;
} NODO;

NODO* cabecera;
cabecera = NULL;
```

## Puntero de cabecera y cola

Normalmente, los programas no declaran realmente variables de nodos. En su lugar, cuando se construye y manipula una lista enlazada, a la lista se accede a través de uno o más punteros a los nodos. El acceso más frecuente a una lista enlazada es a través del primer nodo de la lista que se llama cabeza o cabecera de la lista. Un puntero al primer nodo se llama puntero cabeza. En ocasiones, se mantiene también un puntero al último nodo de una lista enlazada. El último nodo es la cola de la lista, y un puntero al último nodo es el puntero cola. También se pueden mantener punteros a otros nodos de una lista enlazada.

```c
struct nodo* ptr-cabeza;
struct nodo* ptr-cola;
```

El tipo `struct nodo` a veces se simplifica utilizando la declaración `typedef`. Así podemos escribir:

```c
typedef struct nodo NODO;
typedef struct nodo* ptrnodo;

ptrnodo ptr-cabeza;
ptrnodo ptr-cola;
```

La construcción y manipulación de una lista enlazada requiere el acceso a los nodos de la lista a través de uno o más punteros a nodos. Normalmente, un programa incluye un puntero al primer nodo (cabeza) y un puntero al último nodo (cola). En cualquier forma, el último elemento de la lista contiene un valor de `NULL`, esto es, un puntero nulo que señala el final de la lista.

## El puntero nulo

La palabra `NULL` representa el puntero nulo, que es una constante especial de C. Se puede utilizar el puntero nulo para cualquier valor de puntero que no apunte a ningún sitio. El puntero nulo se utiliza, normalmente, en dos situaciones:

- Usar el puntero nulo en el campo `enlace` o `siguiente` del nodo final de una lista enlazada.
- Cuando una lista enlazada no tiene ningún nodo, se utiliza el puntero `NULL` como puntero de cabeza y de cola. Tal lista se denomina lista vacía.

En un programa, el puntero nulo se puede escribir como `NULL`, que es una constante de la biblioteca estándar `stdlib.h`. El puntero nulo se puede asignar a una variable puntero con una sentencia de asignación ordinaria.

```c
ptr-cabeza = NULL;
```

## El operador `->` de selección de un miembro

Si `p` es un puntero a una estructura y `m` es un miembro de la estructura, entonces `p->m` accede al miembro `m` de la estructura apuntada por `p`. El símbolo `->` se considera como un operador simple (en vez de compuesto, al constar de dos símbolos independientes `-` y `>`). Se denomina operador de selección de miembro o también operador de selección de componente.

Suponiendo que un programa ha de construir una lista enlazada y crear un puntero de cabecera `ptr-cabeza` a un nodo `Nodo`, el operador `*` de indirección aplicado a una variable puntero representa el contenido del nodo apuntado por `ptr-cabeza`. Es decir, `*ptr-cabeza` es un tipo de dato `Nodo`.

```c
printf("%lf", (*ptr-cabeza).dato);
```

**Precaución**

Los paréntesis son necesarios alrededor de la primera parte de la expresión ( "ptr-cabeza) ya que los operadores unitarios que aparecen a la derecha tienen prioridad más alta que los operadores unitarios que aparecen en el lado izquierdo (el asterisco de indirección).
Sin los paréntesis, el significado de pt r-cabe La producirá un error de sintaxis, al intentar evaluar ptr-cabeza.dato antes de la indirección o desreferencia.

``I P - > m significa lo mismo que ( * p ) .m I``

Utilizando el operador de selección - > se pueden imprimir los datos del primer nodo de la lista

``printf ("%lf", ptr-cabeza->dato) ;``

**Error**

Uno de los errores típicos en el tratamiento de punteros es escribir la expresión *p o bien p->
cuando el valor del puntero p es el puntero nulo, ya que como se sabe el puntero nulo no apunta
a nada

## Construcción de una lista

Un algoritmo para la creación de una lista enlazada entraña los siguientes pasos:

1. Declarar el tipo de dato y el puntero de cabeza o primero.
2. Asignar memoria para un elemento del tipo definido anteriormente utilizando alguna de las funciones de asignación de memoria (`malloc()`, `calloc()`, `realloc()`) y un `cast` para la conversión de `void*` al tipo puntero a nodo; la dirección del nuevo elemento es `ptr-nuevo`.
3. Crear iterativamente el primer elemento (cabeza) y los elementos sucesivos de una lista enlazada simplemente.
4. Repetir hasta que no haya más entrada para el elemento.

**Ejemplo 14.2**

Crear una lista enlazada de elementos que almacenen datos de tipo entero.

```c
struct Elemento {
    int dato;
    struct Elemento* siguiente;
};
typedef struct Elemento Nodo;

Nodo* Primero = NULL;

Primero = (Nodo*)malloc(sizeof(Nodo));
Primero->dato = 11;
Primero->siguiente = NULL;
```

## Insertar un elemento en una lista**

El algoritmo empleado para añadir o insertar un elemento en una lista enlazada varía dependiendo de la posición en que se desea insertar el elemento. La posición de inserción puede ser:

- En la cabeza (elemento primero) de la lista.
- En el final de la lista (elemento último).
- Antes de un elemento especificado.
- Después de un elemento especificado.

### Insertar un nuevo elemento en la cabeza de una lista

Aunque normalmente se insertan nuevos datos al final de una estructura de datos, es más fácil y más eficiente insertar un elemento nuevo en la cabeza de una lista. El proceso de inserción se puede resumir en este algoritmo:

1. Asignar un nuevo nodo apuntado por `nuevo` que es una variable puntero local que apunta al nuevo nodo que se va a insertar en la lista.
2. Situar el nuevo elemento en el campo `dato` (Info) del nuevo nodo.
3. Hacer que el campo `enlace siguiente` del nuevo nodo apunte a la cabeza (primer nodo) de la lista original.
4. Hacer que cabeza (puntero cabeza) apunte al nuevo nodo que se ha creado.

**Ejemplo 14.3**

Una lista enlazada contiene tres elementos: 10, 25 y 40. Insertar un nuevo elemento, 4, en la cabeza de la lista.

He mantenido el formato original del contenido y solo lo he ordenado según la secuencia que proporcionaste.

**Código C**  

10 25 N U L L  
typedef int Item;  
typedef struct tipo-nodo  
{  
    Item dato;  
    struct tipo-nodo* siguiente;  
} Nodo;  /* declaración del tipo Nodo */  
Nodo* nuevo;  
nuevo = (Nodo*)malloc(sizeof(Nodo)); /*se asigna un nuevo nodo*/  
nuevo->dato = entrada;  

**Paso 3**  
El campo enlace (siguiente) del nuevo nodo apunta a la cabeza actual de la lista  

Código C  
nuevo->siguiente = cabeza;  

25 NTJLL  
cabeza  

**Paso 4**  
Se cambia el puntero de cabeza para apuntar al nuevo nodo creado: es decir, el puntero de cabeza apunta al mismo sitio que apunte nuevo  

Código C  
cabeza = nuevo;  

rabei:i<= nuevo;  
EE-+--7nuevo  
Listas enlazadas 449  
0 4  
En este momento, la función de insertar un elemento en la lista termina su ejecución y la variable local nuevo desaparece y sólo permanece el puntero de cabeza que apunta a la nueva lista enlazada  

10 25 N U I , I ,  
El código fuente de la función InsertarCabezaLista:  

```c
void InsertarCabezaLista(Nodo** cabeza, Item entrada)  
{  
    Nodo *nuevo ;  
    nuevo = (Nodo*)malloc(sizeof(Nodo)); /* asigna nuevo nodo */  
    nuevo->dato = entrada;  /* pone elemento en nuevo */  
    nuevo->siguiente = *cabeza;  /* enlaza nuevo nodo al frente de la lista */  
    *cabeza = nuevo;  /* mueve puntero cabeza y apunta al nuevo nodo */  
}
```

**Caso particular**  
La función InsertarCabezaLista actúa también correctamente si se trata el caso de añadir un primer nodo o elemento a una lista vacía. En este caso, y como ya se ha comentado, cabeza apunta a NULL y termina apuntando al nuevo nodo de la lista enlazada.  

**Ejercicio 14.1**  
Crear una lista de números aleatorios e insertar los nuevos nodos por la cabeza de la lista. Una vez creada la lista, se ha de recorrer los nodos para mostrar los números pares.  

**Análisis**  
La función InsertarCabezaLista() añade un nodo a la lista, siempre como nodo cabeza. El primer argumento es un puntero a puntero porque tiene que modificar la variable cabeza, que es a su vez un puntero a Nodo. La función NuevoNodo() reserva memoria para un nodo, asigna el campo dato y devuelve la dirección del nodo creado.  

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#define MX 99

typedef int item;
typedef struct Elemento
{
    Item dato;
    struct Elemento* siguiente;
} Nodo;

void InsertarCabezaLista(Nodo** cabeza, Item entrada);
Nodo* NuevoNodo(Item x);

void main()
{
    Item d;
    Nodo *cabeza, *Ptr;
    int k;
    cabeza = NULL;  /* Inicialización de cabeza como lista vacía */
    randomize();
    for (d = random(MX); d;)
    {
        InsertarCabezaLista(&cabeza, d);
        d = random(MX);
    }

    /* Ahora se recorre la lista para escribir los pares */
    for (k = 0, ptr = cabeza; ptr; ptr = ptr->siguiente)
    {
        if (ptr->dato % 2 == 0)
            printf("ad ", ptr->dato);
        k++;
        printf("%c", (k % 12 ? ' ' : '\n'));  /* Corresponde a 12 datos por línea */
    }
    printf("\n\n");
}
```

```c
void InsertarCabezaLista(Nodo** cabeza, Item entrada)
{
    Nodo *nuevo;
    nuevo = NuevoNodo(entrada);
    nuevo->siguiente = *cabeza;  /* Enlaza nuevo nodo al frente de la lista */
    *cabeza = nuevo;  /* Mueve puntero cabeza y apunta al nuevo nodo */
}
```

**Nodo* NuevoNodo(Item x)**  
```c
Nodo *a;
a = (Nodo*)malloc(sizeof(Nodo));  /* Asigna nuevo nodo */
a->dato = x;  /* Asigna dato */
a->siguiente = NULL;
return a;
```

**Inserción de un nuevo nodo que no está en la cabeza de lista**  
La inserción de un nuevo nodo no siempre se realiza al principio (en cabeza) de la lista. Se puede insertar en el centro o al final de la lista.  

**Ejemplo 14.4**  
Se desea insertar un nuevo elemento 75 entre el elemento 25 y el elemento 40 en la lista enlazada: 25, 40.  

**El algoritmo de la nueva operación insertar requiere las siguientes etapas:**  
1. Asignar el nuevo nodo apuntado por el puntero nuevo.  
2. Situar el nuevo elemento en el campo dato (Info) del nuevo nodo.  
3. Hacer que el campo enlace siguiente del nuevo nodo apunte al nodo que va después de la posición del nuevo nodo (o bien a NULL si no hay ningún nodo después de la nueva posición).  
4. En la variable puntero anterior tener la dirección del nodo que está antes de la posición deseada para el nuevo nodo. Hacer que anterior->siguiente apunte al nuevo nodo que se acaba de crear.

**Etapas I y 2**  
Se crea un nuevo nodo que contiene a 75  

Código C  
```c
nuevo = (Nodo*)malloc(sizeof(Nodo));  
nuevo->dato = entrada;
```

**Etapa 3**  
Código C  
```c
nuevo->siguiente = anterior->siguiente;
```

**Etapa 4**  
Código C  
```c
anterior->siguiente = nuevo;
```

Después de ejecutar todas las sentencias de las sucesivas etapas, la nueva lista comenzaría en el nodo 10, seguiría 25, 75 y, por último, 40.  

Código C  
```c
void InsertarLista(Nodo* anterior, Item entrada)
{
    Nodo *nuevo;
    nuevo = (Nodo*)malloc(sizeof(Nodo));
    nuevo->dato = entrada;
    nuevo->siguiente = anterior->siguiente;
    anterior->siguiente = nuevo;
}
```

### Inserción al final de la lista
La inserción al final de la lista es menos eficiente debido a que, normalmente, no se tiene un puntero al último elemento de la lista y entonces se ha de seguir la traza desde la cabeza de la lista hasta el último nodo de la lista y a continuación realizar la inserción. Cuando último es una variable puntero que apunta al último nodo de la lista, las sentencias siguientes insertan un nodo al final de la lista.  

```c
ultimo->siguiente = (Nodo*)malloc(sizeof(Nodo));
ultimo->siguiente->dato = entrada;
ultimo->siguiente->siguiente = NULL;
ultimo = ultimo->siguiente;
```

La primera sentencia asigna un nuevo nodo que está apuntado por el campo siguiente al último nodo de la lista (antes de la inserción) de modo que el nuevo nodo ahora es el último nodo de la lista. La segunda sentencia establece el campo dato del nuevo último nodo al valor de entrada. La tercera sentencia establece el campo siguiente del nuevo último nodo a NULL. La última sentencia pone la variable último al nuevo último nodo de la lista. 

## Búsqueda de un elemento

Dado que una función en C puede devolver un puntero, el algoritmo que sirva para localizar un elemento en una lista enlazada puede devolver un puntero a ese elemento.  

La función BuscarLista utiliza una variable puntero denominada índice que va recorriendo la lista nodo a nodo. Mediante un bucle, Índice apunta a los nodos de la lista de modo que si se encuentra el nodo buscado, se devuelve un puntero al nodo buscado con la sentencia de retorno (return); en el caso de no encontrarse el nodo buscado la función debe devolver NULL (return NULL).  

Código C  
```c
Nodo* BuscarLista(Nodo* cabeza, Item destino)  
{
    /* cabeza: puntero de cabeza de una lista enlazada.  
    destino: dato que se busca en la lista.  
    indice: valor de retorno, puntero que apunta al primer  
    nodo que contiene el destino (elemento buscado);  
    si no existe el nodo, se devuelve puntero nulo. */  

    Nodo* indice;  
    for (indice = cabeza; indice != NULL; indice = indice->siguiente)  
        if (destino == indice->dato)  
            return indice;  
}
```

**Ejemplo 14.5**  
En este ejemplo se escribe una función para encontrar la dirección de un nodo dada su posición en una lista enlazada.  

**Análisis**  
El nodo o elemento se especifica por su posición en la lista; para ello se considera posición 1, la correspondiente al nodo de cabeza, posición 2, la correspondiente al siguiente nodo, y así sucesivamente. El algoritmo de búsqueda del elemento comienza con el recorrido de la lista mediante un puntero índice que comienza apuntando al nodo cabeza de la lista. Un bucle mueve el índice hacia adelante el número correcto de sitios (lugares). A cada iteración del bucle se mueve el puntero índice un nodo hacia adelante. El bucle termina cuando se alcanza la posición deseada e índice apunta al nodo correcto. El bucle también se puede terminar si índice apunta a NULL, lo que indicará que la posición solicitada era más grande que el número de nodos de la lista.

Código C  
```c
Nodo* BuscarPosicion(Nodo* cabeza, size_t posicion)  
{
    Nodo* indice;  
    size_t i;

  
    for (indice = cabeza, i = 1; indice != NULL && i < posicion; indice = indice->siguiente, i++);  
    return indice;  
}
```
## Supresión de un nodo en una lista

La operación de eliminar un nodo de una lista enlazada supone enlazar el nodo anterior con el nodo siguiente al que se desea eliminar y liberar la memoria que ocupa. El algoritmo para eliminar un nodo que contiene un dato se puede expresar en estos pasos:

1. Búsqueda del nodo que contiene el dato. Se ha de tener la dirección del nodo a eliminar y la dirección del nodo siguiente.
2. El puntero siguiente del nodo anterior ha de apuntar al siguiente del nodo a eliminar.
3. En caso de que el nodo a eliminar sea el primero, cabeza, se modifica cabeza para que tenga la dirección del nodo siguiente.
4. Por último, se libera la memoria ocupada por el nodo.

A continuación se escribe una función que recibe la cabeza de la lista y el dato del nodo que se quiere borrar.

```c
void eliminar (Nodo** cabeza, item entrada) {
    Nodo* actual, *anterior;
    int encontrado = 0;
    actual = *cabeza; anterior = NULL;
    
    while ((actual != NULL) && (!encontrado)) {
        /* Bucle de búsqueda */
        encontrado = (actual->dato == entrada);
        if (!encontrado) {
            anterior = actual;
            actual = actual->siguiente;
        }
    }
    
    if (actual != NULL) {
        /* Enlace de nodo anterior con siguiente */
        /* Se distingue entre que el nodo sea el cabecera o del resto de la lista */
        if (actual == *cabeza) {
            *cabeza = actual->siguiente;
        } else {
            anterior->siguiente = actual->siguiente;
        }
        free(actual);
    }
}
```

**Ejercicio 14.2**

Se desea crear una lista enlazada de números enteros ordenada. La lista va a estar organizada de tal forma que el nodo cabecera tenga el mejor elemento, y así en orden creciente los demás nodos. Una vez creada la lista, se recorre para escribir los datos por pantalla.

**Análisis**

La función `InsertaOrden()` añade los nuevos elementos. Inicialmente la lista se crea con el primer valor. El segundo elemento se ha de insertar antes del primero o después, dependiendo de que sea menor o mayor. Así, en general, para insertar un nuevo elemento, primero se busca la posición de inserción en la lista actual, que en todo momento está ordenada, del nodo a partir del cual se ha de enlazar el nuevo nodo para que la lista siga ordenada. La función `Recorrer()` avanza por cada uno de los nodos de la lista con la finalidad de escribir el campo dato.

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define MX 101
typedef int Item;

typedef struct Elemento {
    Item dato;
    struct Elemento* siguiente;
} Nodo;

void InsertaOrden(Nodo** cabeza, Item entrada);
Nodo* NuevoNodo(Item x);
void recorrer(Nodo* cabeza);

void main() {
    Item d;
    Nodo* cabeza;
    cabeza = NULL; /* Inicia lista vacía */

    random();  /* Llamada a función random */
    
    /* El bucle termina cuando se quiere el número aleatorio */
    for (d = random(MX); d;) {
        InsertaOrden(&cabeza, d);
        d = random(MX);
    }
    
    recorrer(cabeza);
}

void InsertaOrden(Nodo** cabeza, Item entrada) {
    Nodo *nuevo;
    nuevo = NuevoNodo(entrada);
    
    if (*cabeza == NULL) {
        *cabeza = nuevo;
    } else if (entrada < (*cabeza)->dato) {
        nuevo->siguiente = *cabeza;
        *cabeza = nuevo;
    } else {
        /* Búsqueda del nodo anterior a partir del que se debe insertar */
        Nodo* anterior, *p;
        anterior = p = *cabeza;
        while ((p->siguiente != NULL) && (entrada > p->dato)) {
            anterior = p;
            p = p->siguiente;
        }
        
        if (entrada > p->dato) { /* Se inserta después del último nodo */
            anterior = p;
        }
        
        /* Se procede al enlace del nuevo nodo */
        nuevo->siguiente = anterior->siguiente;
        anterior->siguiente = nuevo;
    }
}

Nodo* NuevoNodo(Item x) {
    Nodo* a;
    a = (Nodo*)malloc(sizeof(Nodo)); /* Asigna nuevo nodo */
    a->dato = x; /* Pone elemento en nuevo nodo */
    a->siguiente = NULL;
    return a;
}

void recorrer(Nodo* cabeza) {
    int k;
    printf("\n\t\tLista Ordenada\n");
    for (k = 0; cabeza; cabeza = cabeza->siguiente) {
        printf("%d ", cabeza->dato);
        k++;
        printf("%c", (k % 15 ? ' ' : '\n'));
    }
    printf("\n\n");
}
```
