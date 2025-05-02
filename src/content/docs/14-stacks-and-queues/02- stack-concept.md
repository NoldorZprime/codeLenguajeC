---
title: Concepto de pila
description: A reference page in my new Starlight docs site.
---

Una pila (stack) es una colección ordenada de elementos a los que sólo se puede acceder por un único lugar o extremo de la pila. Los elementos de la pila se añaden o quitan (borran) de la misma sólo por su parte superior (cima) de la pila. Éste es el caso de una pila de platos, una pila de libros, etc. de entradas ordenadas tales que cima.

Cuando se dice que la pila está ordenada, lo que se quiere decir es que hay un elemento al que se puede acceder primero (el que está encima de la pila), otro elemento al que se puede acceder en segundo lugar (justo el elemento que está debajo de la cima), un tercero, etc. No se requiere que las entradas se puedan comparar utilizando el operador «menor que» (<) y pueden ser de cualquier tipo.

Las entradas de la pila deben ser eliminadas en el orden inverso al que se situaron en la misma. Por ejemplo, se puede crear una pila de libros, situando primero un diccionario, encima de él una enciclopedia y encima de ambos una novela de modo que la pila tendrá la novela en la parte superior.

Novela  
Enciclopedia  
Diccionario  
Figura 15.1. Pila de libros.  

Cuando se quitan los libros de la pila, primero debe quitarse la novela, luego la enciclopedia y, por último, el diccionario. Debido a su propiedad específica «último en entrar, primero en salir» se conoce a las pilas como estructura de datos LIFO (last-in, first-out). Las operaciones usuales en la pila son Insertar y Quitar. La operación Insertar (push) añade un elemento en la cima de la pila y la operación Quitar (pop) elimina o saca un elemento de la pila. La Figura 15.3 muestra una secuencia de operaciones Insertar y Quitar. El último elemento añadido a la pila es el primero que se quita de la pila.

Insertar M  
Insertar A  
Entrada: MAC  
Insertar C  
M  
Quitar C  
1A  
M  
Quitar A  
^  
M  
Salida: CAM  
Figura 15.2. Poner y quitar elementos de la pila.  

Quitar M  
Pilas y colas 473  
La operación Insertar (push) sitúa un elemento dato en la cima de la pila y Quitar (pop) elimina o quita el elemento de la pila.

Insertar I  
Quitar  
Cima ---Y  
+-- Fondo  
Figura 15.3. Operaciones básicas de una pila.  

La pila se puede implementar mediante arrays en cuyo caso su dimensión o longitud es fija, y mediante punteros o listas enlazadas en cuyo caso se utiliza memoria dinámica y no existe limitación en su tamaño.

Una pila puede estar vacía (no tiene elementos) o llena (en el caso de tener tamaño fijo, si no cabe más elementos en la pila). Si un programa intenta sacar un elemento de una pila vacía, se producirá un error debido a que esa operación es imposible; esta situación se denomina desbordamiento negativo (underflow). Por el contrario, si un programa intenta poner un elemento en una pila se produce un error llamado desbordamiento (overflow) o rehozamiento. Para evitar estas situaciones se diseñan funciones que comprueban si la pila está llena o vacía.

## Especificaciones de una pila  

Las operaciones que sirven para definir una pila y poder manipular su contenido son las siguientes (no todas ellas se implementan al definir una pila):

Tipo de dato  
Insertar (push)  
Quitar (pop)  
Pila vacía  
Pila llena  
Limpiar pila  
Tamaño de la pila  
Cima  
Dato que se almacena en la pila.  
Insertar un dato en la pila.  
Sacar (quitar) un dato de la pila.  
Comprobar si la pila no tiene elementos.  
Comprobar si la pila está llena de elementos.  
Quitar todos sus elementos y dejar la pila vacía.  
Número de elementos máximo que puede contener la pila.  
Obtiene el elemento cima de la pila."