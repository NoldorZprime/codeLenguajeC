---
title: Fundamentos teóricos
description: A reference page in my new Starlight docs site.
---

En capítulos anteriores se han estudiado estructuras lineales de elementos homogéneos (listas, tablas, vectores) y se utilizaban arrays para implementar tales estructuras. Esta técnica obliga a fijar por adelantado el espacio a ocupar en memoria, de modo que cuando se desea añadir un nuevo elemento que rebase el tamaño prefijado del array, no es posible realizar la operación sin que se produzca un error en tiempo de ejecución. Ello se debe a que los arrays hacen un uso ineficiente de la memoria. Gracias a la asignación dinámica de variables, se pueden implementar listas de modo que la memoria física utilizada se corresponda con el número de elementos de la tabla. Para ello se recurre a los punteros (apuntadores) que hacen un uso más eficiente de la memoria como ya se ha visto con anterioridad.

Una lista enlazada es una colección o secuencia de elementos dispuestos uno detrás de otro, en la que cada elemento se conecta al siguiente elemento por un «enlace» o «puntero». La idea básica consiste en construir una lista cuyos elementos llamados nodos se componen de dos partes o campos: la primera parte o campo contiene la información y es, por consiguiente, un valor de un tipo genérico (denominado Dato, TipoElemento, Znfo, etc.) y la segunda parte o campo es un puntero (denominado enlace o sgte) que apunta al siguiente elemento de la lista.

Figura 14.1. Lista enlazada (representación simple).

La representación gráfica más extendida es aquella que utiliza una caja (un rectángulo) con dos secciones en su interior. En la primera sección se escribe el elemento o valor del dato y en la segunda sección, el enlace o puntero mediante una flecha que sale de la caja y apunta al nodo siguiente.

Una lista enlazada consta de un número de elementos y cada elemento tiene dos componentes (campos), un puntero al siguiente elemento de la lista y un valor, que puede ser de cualquier tipo.

Los enlaces se representan por flechas para facilitar la comprensión de la conexión entre dos nodos; ello indica que el enlace tiene la dirección en memoria del siguiente nodo. Los enlaces también sitúan los nodos en una secuencia. En la Figura 14.2 los nodos forman una secuencia desde el primer elemento (e1) al último elemento (en). El primer nodo se enlaza al segundo nodo, el segundo nodo se enlaza al tercero y así sucesivamente hasta llegar al último nodo. El nodo último ha de ser representado de forma diferente para significar que este nodo no se enlaza a ningún otro. 

La Figura 14.3 muestra diferentes representaciones gráficas que se utilizan para dibujar el campo enlace del último nodo.

