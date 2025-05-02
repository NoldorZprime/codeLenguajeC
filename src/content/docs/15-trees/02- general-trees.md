---
title: Arboles generales
description: A reference page in my new Starlight docs site.
---

Intuitivamente el concepto de árbol implica una estructura en la que los datos se organizan de modo que los elementos de información están relacionados entre sí a través de ramas. El árbol genealógico es el ejemplo típico más representativo del concepto de árbol general. La Figura 16.1 representa dos ejemplos de árboles generales.

Luis  
(bisabuelo)  
Micaela  
(hermana) *I $q(hermana)  
Juana María  
(hija)  
p k - - - p q f i(hija) (hija) (hijo)

Figura 16.1. Árbol genealógico (bisabuelo - bisnietos).

Director de Director de Director red software intranet Ingeniero de 1 I Analista 1 I Programador 11 software

Figura 16.2. Estructura jerárquica tipo árbol.

Árboles 499  
Un árbol consta de un conjunto finito de elementos, denominados nodos y un conjunto finito de líneas dirigidas, denominadas ramas, que conectan los nodos. El número de ramas asociado con un nodo es el grado del nodo.

- **Definición 1:** Un árbol consta de un conjunto finito de elementos, llamados nodos y un conjunto finito de líneas dirigidas, llamadas ramas, que conectan los nodos.  

- **Definición 2:** Un árbol es un conjunto de uno o más nodos tales que:  
1. Hay un nodo diseñado especialmente llamado raíz.  
2. Los nodos restantes se dividen en n2o conjuntos disjuntos tales que T,...T,,,en donde cada uno de estos conjuntos es un árbol. A T,, T?,...T,, se les denomina subárboles del raíz.  

Si un árbol no está vacío, entonces el primer nodo se llama raíz. Obsérvese en la definición 2 que el árbol ha sido definido de modo recursivo ya que los subárboles se definen como árboles. La Figura 16.3 muestra un árbol.

Figura 16.3. Árbol.

## Terminología

Además del raíz exif :n muchos términos utilizados en la descripción de los atributos de un árbol. En la Figura 16.4, el nodo A es el raíz. Utilizando el concepto de árboles genealógicos, un nodo puede ser considerado como padre si tiene nodos sucesores.

Figura 16.4. Árbol general.

500 Programación en C. Metodología, algoritmos y estructura de datos  
Estos nodos sucesores se llaman hijos. Por ejemplo, el nodo B es el padre de los hijos E y F. El padre de H es el nodo D. Un árbol puede representar diversas generaciones en la familia. Los hijos de un nodo y los hijos de estos hijos se llaman descendientes y el padre y abuelos de un nodo son sus ascendientes. Por ejemplo, los nodos E, F, I y J son descendientes de B. Cada nodo no raíz tiene un único padre y cada padre tiene cero o más nodos hijos. Dos o más nodos con el mismo padre se llaman hermanos. Un nodo sin hijos, tales como E, I, J, G y H se llaman nodos hoja.

El nivel de un nodo es su distancia al raíz. El raíz tiene una distancia cero de sí misma, por lo que se dice que el raíz está en el nivel O. Los hijos del raíz están en el nivel I, sus hijos están en el nivel 2 y así sucesivamente. Una cosa importante que se aprecia entre los niveles de nodos es la relación entre niveles y hermanos. Los hermanos están siempre al mismo nivel, pero no todos los nodos de un mismo nivel son necesariamente hermanos. Por ejemplo, en el nivel 2 (Fig. 16.5), C y D son hermanos, al igual que lo son G, H e I, pero D y G no son hermanos ya que ellos tienen diferentes padres.

Nivel  
Nivel  
Nivel  
0 -  
1 -  
2 -  
Rama FI  
padre: A, B, F  
hijos: B, E, F, C, D, G, H, I  
hermanos: {B, E, F}, {C, D}, {G, H, I}  
hojas: C, D, E, G, H, I  

Figura 16.5. Terminología de árboles.

Existen varias formas de dibujar los atributos de los árboles y sus nodos. Un camino es una secuencia de nodos en los que cada nodo es adyacente al siguiente. Cada nodo del árbol puede ser alcanzado (se llega a él) siguiendo un único camino que comienza en el raíz. En la Figura 16.5, el camino desde el raíz a la hoja I, se representa por AFI. Incluye dos ramas distintas AF y FI.

La altura o profundidad de un árbol es el nivel de la hoja del camino más largo desde la raíz más uno. Por definición, la altura de un árbol vacío es O. La Figura 16.5 contiene nodos en tres niveles: O, 1 y 2. Su altura es 3.

**Definición**

El nivel de un nodo es su distancia desde el raíz. La altura de un árbol es el nivel de la hoja del camino más largo desde el raíz más uno.

También se suele definir la profundidad de un árbol como el nivel de cada nodo. En consecuencia, la profundidad del nodo raíz es O, la de su hijo 1, etc. Las dos definiciones son aceptadas.

Árboles 501  
(a) Profundidad 4 (b) Profundidad 4  
(c) Profundidad 5  

Figura 16.6. Árboles de profundidades diferentes.

Un árbol se divide en subárboles. Un subárbol es cualquier estructura conectada por debajo del raíz. Cada nodo de un árbol es la raíz de un subárbol que se define por el nodo y todos los descendientes del nodo. El primer nodo de un subárbol se conoce como el raíz del subárbol y se utiliza para nombrar el subárbol. Además, los subárboles se pueden subdividir en subárboles. En la Figura 16.5, BCD es un subárbol al igual que E y FGHI. Obsérvese que por esta definición, un nodo simple es un subárbol. Por consiguiente, el subárbol B se puede dividir en subárboles C y D, mientras que el subárbol F contiene los subárboles G, H e I. Se dice que G, H, I, C y D son subárboles sin descendientes. El concepto de subárbol conduce a una definición recursiva de un árbol. Un árbol es un conjunto de nodos que:  
1. O bien es vacío, o bien  
2. Tiene un nodo determinado llamado raíz del que jerárquicamente descienden cero o más subárboles, que son también árboles.

Un árbol está equilibrado cuando, dado un número máximo de k hijos para cada nodo y la altura del árbol h, cada nodo de nivel 1 < h - 1 tiene exactamente k hijos. El árbol está equilibrado perfectamente cuando cada nodo de nivel 1 < h tiene exactamente k hijos.

502 Programación en C. Metodología, algoritmos y estructura de datos  
Figura 16.7. (a) Un árbol equilibrado; (b) Un árbol perfectamente equilibrado.

## Representación de un árbol  

Aunque un árbol se implementa en un lenguaje de programación como C mediante punteros, cuando se ha de representar en papel, existen tres formas diferentes de representación. La primera es el diagrama o carta de organización utilizada hasta ahora en las diferentes figuras. El término que se utiliza para esta notación es el de árbol general.

### Representación en niveles de profundidad

Este tipo de representación es el utilizado para representar sistemas jerárquicos en modo texto o número en situaciones tales como facturación, gestión de stocks en almacenes, etc.  
Por ejemplo, en las Figuras 16.8 y 16.9 se aprecia una descomposición de una computadora en sus diversos componentes en una estructura árbol. Otro ejemplo podría ser una distribución en árbol de las piezas de una tienda de recambios de automóviles distribuidas en niveles de profundidad según los números de parte o códigos de cada repuesto (motor, bujía, batería, piloto, faro, embellecedor, etc.).

Árboles 503  
Figura 16.8. Árbol general (computadora).  

Número código Descripción  
50 1  
501-1 1  
501-21 ...  
501-21 1  
501-212 ...  
501-219  
501-31 ...  
501-41  
501-411  
501-412  
501-51  
501-511  
501-512  
501-513

Computadora  
Monitor  
CPU  
Controlador  
ALU  
ROM ...  
Teclado ...  
Periféricos  
Escáner  
impresora  
Discos  
CD-ROM  
CD-RW  
DVD

Figura 16.9. Árbol en nivel de profundidad (computadora).

**Representación de lista**  
Otro formato utilizado para representar un árbol es la lista entre paréntesis. Ésta es la notación utilizada con expresiones algebraicas. En esta representación, cada paréntesis abierto indica el comienzo de un nuevo nivel; cada paréntesis cerrado completa un nivel y se mueve hacia arriba un nivel en el árbol. La notación en paréntesis de la Figura 16.3 es: A (a (c, D), E, F, (G, H, I)).

Ejemplo 16.1  
Convertir el árbol general siguiente en representación en lista.  

