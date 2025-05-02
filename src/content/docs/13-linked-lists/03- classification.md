---
title: Clasificación
description: A reference page in my new Starlight docs site.
---

Las listas se pueden dividir en cuatro categorías:

- Listas simplemente enlazadas. Cada nodo (elemento) contiene un único enlace que conecta ese nodo al nodo siguiente o nodo sucesor. La lista es eficiente en recorridos directos («adelante»).

- Listas doblemente enlazadas. Cada nodo contiene dos enlaces, uno a su nodo predecesor y el otro a su nodo sucesor. La lista es eficiente tanto en recorrido directo («adelante») como en recorrido inverso («atrás»).

- Lista circular simplemente enlazada. Una lista enlazada simplemente en la que el último elemento (cola) se enlaza al primer elemento (cabeza) de tal modo que la lista puede ser recorrida de modo circular («en anillo»).

- Lista circular doblemente enlazada. Una lista doblemente enlazada en la que el último elemento se enlaza al primer elemento y viceversa. Esta lista se puede recorrer de modo circular (en anillo) tanto en dirección directa («adelante») como inversa («atrás»).

Por cada uno de estos cuatro tipos de estructuras de listas, se puede elegir una implementación basada en arrays o una implementación basada en punteros. Como ya se ha comentado, estas implementaciones difieren en el modo en que se asigna la memoria para los datos de los elementos, cómo se enlazan juntos los elementos y cómo se accede a dichos elementos. De forma más específica, las implementaciones pueden hacerse con cualquiera de éstas:

- Asignación fija, o estática, de memoria mediante array.
- Asignación dinámica de memoria mediante punteros.

Dado que la asignación fija de memoria mediante arrays es más ineficiente, utilizaremos en este capítulo y siguientes, la asignación de memoria mediante punteros, dejando como ejercicio al lector la implementación mediante arrays.

## Conceptos básicos sobre listas
Una lista enlazada consta de un conjunto de nodos. Un nodo consta de un campo dato y un puntero que apunta al «siguiente» elemento de la lista.

dato siguiente  dato siguiente  
4  
cola  
4  
Ptr actual  
4  
cabeza  

El primer nodo, frente, es el nodo apuntado por cabeza. La lista encadena nodos juntos desde el frente al final (cola) de la lista. El final se identifica como el nodo cuyo campo puntero tiene el valor NULL = 0. La lista se recorre desde el primero al último nodo; en cualquier punto del recorrido la posición actual se referencia por el puntero Ptr-actual. En el caso en que la lista no contiene ningún nodo (está vacía), el puntero cabeza es nulo.

cabeza

