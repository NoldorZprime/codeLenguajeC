---
title: Árbol binario de búsqueda
description: A reference page in my new Starlight docs site.
---

Los árboles vistos hasta ahora no tienen un orden definido; sin embargo, los árboles binarios ordenados tienen sentido. Estos árboles se denominan **árboles binarios de búsqueda**, debido a que se pueden buscar en ellos un término utilizando un algoritmo de búsqueda binaria similar al empleado en arrays.

Un árbol binario de búsqueda es aquel que, dado un nodo, todos los datos del subárbol izquierdo son menores que los datos de ese nodo, mientras que todos los datos del subárbol derecho son mayores que sus propios datos. El árbol binario del Ejemplo 16.8 es de búsqueda.

**Ejemplo 16.8**  
Árbol binario de búsqueda:

- 30 menor que 55  
- 41 mayor que 30  
- 75 mayor que 55  
- 85 mayor que 75  
- 4 menor que 30  

## Creación de un árbol binario de búsqueda

Supongamos que se desea almacenar los números:  
**8, 3, 1, 20, 10, 5, 4**  
en un árbol binario de búsqueda.

Siguiendo la regla:  
> Dado un nodo en el árbol, todos los datos a su izquierda deben ser menores que los datos del nodo actual, mientras que todos los datos a la derecha deben ser mayores que los datos.

- Inicialmente el árbol está vacío y se desea insertar el 8.  
  La única elección es almacenar el 8 en la raíz.

- A continuación viene el 3.  
  Ya que 3 es menor que 8, el 3 debe ir en el subárbol izquierdo.

- Luego se ha de insertar el 1, que es menor que 8 y que 3.  
  Por consiguiente, irá a la izquierda y debajo de 3.

- El siguiente número es 20, mayor que 8.  
  Lo que implica que debe ir a la derecha de 8.

Cada nuevo elemento se inserta como una hoja del árbol.  
Los restantes elementos se pueden situar fácilmente.

> Una propiedad de los árboles binarios de búsqueda es que no son únicos para los mismos datos.

**Ejemplo 16.9**  
Construir un árbol binario para almacenar los datos:  
**12, 8, 7, 16, 14**

**Solución**

**Ejemplo 16.10**  
Construir un árbol binario de búsqueda que corresponda a un recorrido **enorden** cuyos elementos son:  
**1, 3, 4, 5, 6, 7, 8, 9, 10**

## Implementación de un nodo de un árbol binario de búsqueda

Un árbol binario de búsqueda se puede utilizar cuando se necesita que la información se encuentre rápidamente.

Estudiemos un ejemplo de árbol binario en el que cada nodo contiene información relativa a una persona.  
Cada nodo almacena:

- Un nombre de una persona (tipo cadena)
- El número de matrícula en su universidad (tipo entero)

**Declaración de tipos**

```c
struct nodo {
    int nummat;              // Matrícula
    char nombre[30];         // Nombre
    struct nodo *izda, *dcha;
};
typedef struct nodo Nodo;
```

## Creación de un nodo

La función tiene como entrada un dato entero que representa un número de matrícula y el nombre.  
Devuelve un puntero al nodo creado.

```c
Nodo* CrearNodo(int id, char* n) {
    Nodo* t;
    t = (Nodo*) malloc(sizeof(Nodo));
    t->nummat = id;
    strcpy(t->nombre, n);
    t->izda = t->dcha = NULL;
    return t;
}
```
