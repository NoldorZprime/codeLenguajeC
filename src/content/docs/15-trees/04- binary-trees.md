---
title: Arboles binarios
description: A reference page in my new Starlight docs site.
---

Un árbol binario es un árbol en el que ningún nodo puede tener más de dos subárboles. En un árbol binario, cada nodo puede tener, cero, uno o dos hijos (subárboles). Se conoce el nodo de la izquierda como hijo izquierdo y el nodo de la derecha como hijo derecho.

Un subárbol de un árbol es un subconjunto de nodos del árbol, conectados por ramas del propio árbol; esto es, a su vez, un árbol. O sea, un subárbol de un árbol A: si para cada nodo n de SA, SA contiene también todos los descendientes de n en A. SA se llama un subárbol completo de A.

Un árbol está equilibrado cuando, dado un número máximo K de hijos de cada nodo y la altura del árbol h, cada nodo de nivel k < h-1 tiene exactamente K hijos. El árbol está equilibrado perfectamente entre cada nodo de nivel I<h tiene exactamente K hijos.

En un árbol, la izquierda


506 Programación en C. Metodología, algoritmos y estructura de datos  
Figura 16.10. Árboles binarios.  
Nota  
Un árbol binario no puede tener más de dos subárboles.  
Un árbol binario es una estructura recursiva. Cada nodo es el raíz de su propio subárbol y tiene hijos, que son raíces de árboles llamados los subárboles derecho e izquierdo del nodo, respectivamente.  
Un árbol binario se divide en tres subconjuntos disjuntos:  
{R} Nodo raíz  
{I, I, . . . I} Subárbol izquierdo de R  
{D, D, . . . D} Subárbol derecho de R  

Figura 16.11. Árbol binario.

En cualquier nivel n, un árbol binario puede contener de 1 a 2 nodos. El número de nodos por nivel contribuye a la densidad del árbol.  
Figura 16.12. Árboles binarios: (a) profundidad 4; (b) profundidad 5.  
En la Figura 16.12 (a) el árbol A contiene 8 nodos en una profundidad de 4, mientras que el árbol 16.12 (b) contiene 5 nodos y una profundidad de 5. Este último caso es una forma especial, denominado árbol degenerado, en el que existe un solo nodo hoja (E) y cada nodo no hoja sólo tiene un hijo. Un árbol degenerado es equivalente a una lista enlazada.

## Equilibrio  

La distancia de un nodo al raíz determina la eficiencia con la que puede ser localizado. Por ejemplo, dado cualquier nodo de un árbol, a sus hijos se puede acceder siguiendo sólo un camino de bifurcación o de ramas, el que conduce al nodo deseado. De modo similar, los nodos a nivel 2 de un árbol sólo pueden ser accedidos siguiendo sólo dos ramas del árbol.  
La característica anterior nos conduce a una característica muy importante de un árbol binario, su balance o equilibrio. Para determinar si un árbol está equilibrado, se calcula su factor de equilibrio. El factor de equilibrio de un árbol binario es la diferencia en altura entre los subárboles derecho e izquierdo. Si definimos la altura del subárbol izquierdo como H, y la altura del subárbol derecho como H, entonces el factor de equilibrio del árbol B se determina por la siguiente fórmula: B = H - H.  
Utilizando esta fórmula el equilibrio del nodo raíz de los ocho árboles de la Figura 16.10 son (a) O, (h) O, (c) O, por definición, (d) 4, (e) -1, (f) -1, (g) 1, (h) 2.

Un árbol está perfectamente equilibrado si su equilibrio o balance es cero y sus subárboles son también perfectamente equilibrados. Dado que esta definición ocurre raramente, se aplica una definición alternativa. Un árbol binario está equilibrado si la altura de sus subárboles difiere en no más de uno (su factor de equilibrio es -1, 0, +1) y sus subárboles son también equilibrados.

## Árboles binarios completos  

Un árbol binario completo de profundidad n es un árbol en el que para cada nivel, del 0 al nivel n-1, tiene un conjunto lleno de nodos y todos los nodos hoja a nivel n ocupan las posiciones más a la izquierda del árbol.  
Un árbol binario completo que contiene 2^n nodos a nivel n es un árbol lleno. Un árbol lleno es un árbol binario que tiene el máximo número de entradas para su altura. Esto sucede cuando el último nivel está lleno. La Figura 16.13 muestra un árbol binario completo; el árbol de la Figura 16.14 (b) se corresponde con uno lleno.  
Figura 16.13. Árbol completo (profundidad 4).  
Figura 16.14. Clasificación de árboles binarios: (a) degenerado; (b) lleno.  
Figura 16.15. (a) Árboles llenos (en niveles 0, 1 y 2); (b), (c) y (d) árboles completos (en nivel 2).

Los árboles binarios y llenos de profundidad k+1 proporcionan algunos datos matemáticos que es necesario comentar. En cada caso, existe un nodo (2^n) al nivel 0 (raíz), dos nodos (2^1) a nivel 1, cuatro nodos (2^2) a nivel 2, etc. A través de los primeros k-1 niveles hay 2^k - 1 nodos.  
1 + 2 + 4 + ... + 2^k = 2^(k+1) - 1

A nivel k, el número de nodos adicionados para un árbol completo está en el rango de un mínimo de 1 a un máximo de 2^k (lleno). Con un árbol lleno, el número de nodos es  
1 + 2 + 4 + ... + 2^k + 2^(k+1) = 2^(k+1) - 1.

El número de nodos n en un árbol binario completo de profundidad k + 1 (de 0 a k niveles) cumple la desigualdad  
2^k <= n < 2^(k+1).

Aplicando logaritmos a la ecuación con desigualdad anterior:  
k ≤ log₂(n) < k + 1

Se deduce que la altura o profundidad de un árbol binario completo de n nodos es:  
h = ⌊log₂(n)⌋ + 1 (parte entera de log₂(n) + 1).

Por ejemplo, un árbol lleno de profundidad 4 (niveles 0 a 3) tiene 2^4 - 1 = 15 nodos.

Ejemplo 16.2  
Calcular la profundidad máxima y mínima de un árbol con 5 nodos.  
La profundidad máxima de un árbol con 5 nodos es 5.  
La profundidad mínima (número de niveles más uno) de un árbol con 5 nodos es  
k ≤ log₂(5) < k + 1  
log₂(5) = 2.32 y la profundidad mínima es 3.

Ejemplo 16.3  
La profundidad de un árbol degenerado con n nodos es n, dado que es la longitud del camino más largo (raíz a nodo) más 1.  
En el árbol binario completo con n nodos, la profundidad del árbol es el valor entero de log₂(n) + 1, que es a su vez la distancia del camino más largo desde la raíz a un nodo más uno.  
Suponiendo que el árbol tiene n = 10,000 elementos, el camino más largo es  
int(log₂(10000)) + 1 = int(13.28) + 1 = 14.

