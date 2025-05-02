---
title: Árbol de expresiones
description: A reference page in my new Starlight docs site.
---

Una aplicación muy importante de los árboles binarios son los árbn1c.s de expresión. Una expresión es
una secuencia de tokens (componentes de léxicos que siguen unas reglas prescritas). Un token puede ser
o bien un operando o bien un operador.
La Figura 16.17 representa la expresión infija d * (b+c)td y su árbol de expresión. En una primera
Da * (b + c) + d
Figura 16.17. Una expresión infija y su árbol de expresión.
observación vemos que los paréntesis no aparecen en el árbol.
Un árbol de expresión es u n árbol binario con las siguientes propiedades:

1. Cada hoja es un operando.
2. Los nodos raíz e internos son operadores.
3. Los subárboles son subexpresiones en las que el nodo raíz es un operador.

Los árboles binarios se utilizan para representar expresiones en memoria; esencialmente, en
compiladores de lenguaje de programación. La Figura 16.I8 muestra un árbol binario de expresiones
para la expresión aritmética ( 3. + b)* c.
Obsérvese que los paréntesis no se almacenan en el árbol pero están implicados en la forma del
Figura 16.18. Árbol binario de expresiones que representa ( c ~t I ) ) *<..
Árboles 515
árbol. Si se supone que todos los operadores tienen dos operandos, se puede representar una expresión
por un árbol binario cuya raíz contiene un operador y cuyos subárboles izquierdo y derecho son los
operandos izquierdo y derecho respectivamente. Cada operando puede ser una letra (x, y , a , b ,
etc.) o una subexpresión representada como u n subárbol. En la Figura 16.19 se puede ver como el
operador que está en la raíz es *, su subárbol izquierdo representa la subexpresión (x + y ) y su
subárbol derecho representa la subexpresión ( a - b ). El nodo raíz del subárbol izquierdo contiene el
operador (+) de la subexpresión izquierda y el nodo raíz del subárbol derecho contiene el operador (-)
de la subexpresión derecha. Todos los operandos letras se almacenan en nodos hojas.
Utilizando el razonamiento anterior, se puede escribir la expresión almacenada en la Figura 16.20
como
Figura 16.19. Árbol de expresión ( x t y ) * ( 1 ) )
(x" ( y - z ) ) + (a-b)
en donde se han insertado paréntesis alrededor de subexpresiones del árbol (la operación y - Z ,
subexpresión inás interna, tiene el nivel de prioridad mayor).
Figura 16.20. Árbol de expresión (x*( y - / ) ) + ( a - 1 ) ) .
516 Programación en C. Metodología, algoritmos y estructura de datos

**Ejemplo 16.5**

Deducir las expresiones que representan l o s siguientes árboles binarios.
Soluciones
( a ) X*(Y/-Z)
(b) A + (B*-(c+D))
( c ) (A*(X+Y)) *C

**Ejemplo 16.6**

Dibujar la representación en árbol binario de cada una de las siguientes expresiones.
( a ) X*Y/ (A+B)*C
( 6 ) X*Y/A+B*C
Soluciones

## Reglas para la construcción de árboles de expresión

Los árboles de expresiones se utilizan en las coinputadoras para evaluar expresiones usadas en
programas. El algoritmo más sencillo para construir un árbol de expresión es uno que lee una expresión
completa que contiene paréiitesis en la misma. Una expresión con paréntesis es aquella en que
F- ~ ~-~
1
Árboles 517

1. La prioridad se determina sólo por paréntesis.
2. La expresión completa se sitúa entre paréntesis.

Por consiguiente ( 4 t ( 5 * 6 ) ) es un ejemplo de una expresión completa entre paréntesis. Su valor es
3 4. Si se desean cambiar las prioridades, se escribe ( ( 4t 5 ) * 6 ) , su valor es 54 . A fin de ver la prioridad
en las expresiones, considérese la expresión
(4*5) + 6/7 - (8+9)
Los operadores con prioridad más alta son * y /: es decir,
(4*5) + (6/7) ~ (8+9)
El orden de los operadores aquí es + y -. Por consiguiente, se puede escribir
((4*5) + (6/7)) - (8+9)
Por último la expresión completa entre paréntesis será
(((4*5) t (6/7)) - (8+9))
El algoritmo para la construcción de un árbol de expresión es:

1. La primera vez que se encuentra un paréntesis a izquierda, crea un nodo y lo hace en el raíz. Se
llama a éste, el nodo actual y se sitúa su puntero en una pila.
2. Cada vez que se encuentre un nuevo paréntesis a izquierda, crear un nuevo nodo. Si el nodo
actual no tiene un hijo izquierdo, hacer el nuevo nodo el hijo izquierdo; en caso contrario, hacerlo
el hijo derecho. Hacer el nuevo nodo el nodo actual y situar su puntero en una pila.
3. Cuando se encuentra un operando, crear un nuevo nodo y asignar el operando a su campo de
datos. Si el nodo actual no tiene un hijo izquierdo, hacer el nuevo nodo el hijo izquierdo; en caso
contrario, hacerlo el hijo derecho.
4. Cuando se encuentra un operador, sacar un puntero de la pila y situar el operador en el campo
datos del nodo del puntero.
5. Ignorar paréntesis derecho y blancos.

**Ejemplo 16.7**

Calcular las expresiones correspondientes de los árboles de expresión.
518 Programación en C. Metodología, algoritmos y estructura de datos
Las soluciones correspondientes son:
b. ((a + b) + c) + d
U. (a * b) + ( c / d) c* ( ( - d ) + ( X + y)) / ((+b) * ( C * d ) )

**Ejercicio 16.1 (a realizar por el lector)**

Dibujar los árboles hinarios de expresión c.orre.si~ondientea cada una de las siguientes expresiones:
( U ) (a + b) / (c - d * e) + e + 9 * h/a
(h) -x -y * z + (a + b + c / d * e)
( c ) ((a + b) > (c - e ) ) I I a < f & & (x < y I I y > z)