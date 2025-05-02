---
title: Resumen de definiciones
description: A reference page in my new Starlight docs site.
---

1. Dado un conjunto E de elementos:
   - Un árbol puede estar vacío; es decir, no contiene ningún elemento.
   - Un árbol no vacío puede constar de un único elemento \(e \in E\), denominado un nodo, o bien
   - Un árbol consta de un nodo \(e \in E\), conectado por arcos directos a un número finito de otros árboles.

2. Definiciones:
   - El primer nodo de un árbol, normalmente dibujado en la posición superior, se denomina raíz.
   - Las flechas que conectan un nodo a otro se llaman arcos o ramas.
   - Los nodos terminales, esto es, nodos de los cuales no se deduce ningún nodo, se denominan hojas.
   - Los nodos que no son hojas se denominan nodos internos o nodos no terminales.
   - En un árbol, una rama va de un nodo \(n_1\) a un nodo \(n_2\); se dice que \(n_1\) es el padre de \(n_2\) y que \(n_2\) es un hijo de \(n_1\).
   - \(n_1\) se llama ascendiente de \(n_2\) si \(n_1\) es el padre de \(n_2\) o si \(n_1\) es el padre de un ascendiente de \(n_2\).
   - \(n_2\) se llama descendiente de \(n_1\) si \(n_1\) es un ascendiente de \(n_2\).
   - Un camino de \(n_1\) a \(n_2\) es una secuencia de arcos contiguos que van de \(n_1\) a \(n_2\).
   - La longitud de un camino es el número de arcos que contiene (en otras palabras, el número de nodos - 1).
   - El nivel de un nodo es la longitud del camino que lo conecta al raíz.
   - La profundidad o altura de un árbol es la longitud del camino más largo que conecta el raíz del árbol a una hoja.

- Un árbol binario es un árbol en el que ningún nodo puede tener más de dos subárboles. En un árbol binario, cada nodo puede tener, cero, uno o dos hijos (subárboles). Se conoce el nodo de la izquierda como hijo izquierdo y el nodo de la derecha como hijo derecho.

- Un subárbol de un árbol es un subconjunto de nodos del árbol, conectados por ramas del propio árbol; esto es, a su vez, un árbol. Es decir, si \(S\) es un subárbol de un árbol \(A\), si para cada nodo \(n\) de \(S_A\), \(S_A\) contiene también todos los descendientes de \(n\) en \(A\). \(S_A\) se llama un subárbol completo de \(A\).

- Un árbol está equilibrado cuando, dado un número máximo \(K\) de hijos de cada nodo y la altura del árbol \(h\), cada nodo de nivel \(k < h-1\) tiene exactamente \(K\) hijos. El árbol está equilibrado perfectamente cuando cada nodo de nivel \(I<h\) tiene exactamente \(K\) hijos.

