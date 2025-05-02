---
title: Aplicaciones de árboles en algoritmos de exploración
description: A reference page in my new Starlight docs site.
---

Los algoritmos recursivos de recorridos de árboles son el fundamento de muchas aplicaciones de árboles. Proporcionan un acceso ordenado y metódico a los nodos y a sus datos. Vamos a considerar en esta sección una serie de algoritmos de recorrido usuales en numerosos problemas de programación, tales como: contar el número de nodos hoja, calcular la profundidad de un árbol, imprimir un árbol o copiar y eliminar árboles.


## Visita a los nodos de un árbol

En muchas aplicaciones se desea explorar (recorrer) los nodos de un árbol pero sin tener en cuenta un orden de recorrido preestablecido. En esos casos, el cliente o usuario es libre para utilizar el algoritmo oportuno.

La función `ContarHojas` recorre el árbol y cuenta el número de nodos hoja. Para realizar esta operación se ha de visitar cada nodo comprobando si es un nodo hoja. El recorrido utilizado será el **postorden**.

```c
/* Función ContarHojas
   La función utiliza recorrido postorden
   En cada visita se comprueba si el nodo es un nodo hoja
   (no tiene descendientes)
*/
void contarhojas(Nodo *r, int *nh)
{
    if (r != NULL) {
        contarhojas(r->izda, nh);
        contarhojas(r->dcha, nh);
        if (r->izda == NULL && r->dcha == NULL) (*nh)++;  // procesar raíz: determinar si es hoja
    }
}
```

La función `eliminarbol` utiliza un recorrido postorden para liberar todos los nodos del árbol binario. Este recorrido asegura la liberación de la memoria ocupada por un nodo después de haber liberado su rama izquierda y derecha.

```c
/* Función eliminarbol
   Recorre en postorden el árbol. Procesar la raíz, en esta
   función es liberar el nodo con free().
*/
void eliminarbol(Nodo *r)
{
    if (r != NULL) {
        eliminarbol(r->izda);
        eliminarbol(r->dcha);
        printf("\tNodo borrado: %d ", r->numat);
        free(r);
    }
}
```
