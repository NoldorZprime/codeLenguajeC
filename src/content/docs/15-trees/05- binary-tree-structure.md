---
title: Estructura de un árbol binario
description: A reference page in my new Starlight docs site.
---

La estructura de un árbol binario se construye con nodos. Cada nodo debe contener el campo dato (datos
a almacenar) y dos campos punteros, uno ai subárbol izquierdo y otro al suhárbol derecho, que se cono -
cen como puntero izquierdo (izquierdo, izdo) y puntero derecho (derecho, dcho) respectivamente.
Un valor N U LL indica un árbol vacío.
hoja-izquierda hoja -derecha
1izquierdo datos derecho1izquierdo datos derecho
El algoritmo correspondiente a la estructura de un árbol es el siguiente:
Nodo
subarbolIzquierdo
datos
subarbolDerecho
Fin Nodo
< puntero a Nodo>
< T i p o d a t o >
< puntero a Nodo>
La Figura 16.16 muestra un árbol binario y su estructura en nodos:
lzdo B Dch
~
-
lzdo D Dch
~
-
lzdo G Dch
lzdo A Dch
I
lzdo C Dch
/ \
/ \ (a)Árbol
I
.;.‘;.;.I
(b) Estructura
Figura 16.16. Árbol binario y su estructura en nodos
512 Programación en C.Metodología, algoritmos y estructura de datos
Ejemplo 16.4
Representar la estructura en nodos de los dos árboles binarios de raíz A:
Nivel O
Nivel 1
Nivel 2
Nivel 3
Nivel 4
La representación enlazada de estos dos árboles binarios es:
I I I
I 7NUL G NULL

## Diferentes tipos de representaciones en C

Los nodos pueden ser representados con la estructura st ruct. Suponiendo que el nodo tiene los campo
Datos, Izquierdo y Derecho.
Representacicín I
typedef struct nodo "puntero-arbol;
typedef struct nodo {
int datos;
puntero-arbol hijo-izdo, hijo-dcho;
I ;
Árboles 513
datos
hijo -izdoAhijo-dc ho
hijo-izdo datos hijo-dcho
Representación 2
typedef int TipoElemento; / * Puede ser cualquier tipo * /
struct Nodo {
TipoElemento Info;
struct Nodo *hijo-izdo, *hijo-dcho;
1 ;
typedef struct Nodo Elemento»eArbolBin;
typedef ElementoUeArbolHin "ArbolBinario;
Para crear un nodo de un árbol binario, con la representación 2, se reserva memoria para el nodo, se
ArbolBinario CrearNodo(TipoE1emento x)
i
asigna el dato al campo i n f o y se inicializa los punteros hi jo-izdo, hijo-dcho a NULI, .
ArbolBinario a;
a = (ArbolBinario) mdlloc(si7eot (ElementoDeArbolBin ) 1 ;
a - > Info = x;
a - > hijo-dcho = a - > hijo-izdo = NUI,T,;
return a;
i
Si por ejemplo se desea crear un árbol binario de raíz 9, rama izquierda 7 y rama derecha 1 1 :
ArbolBinario rdiz;
raiz = CrearNodo(9);
raiz - > hijo-izdo = CrearNodo(7);
raiz - > hijo-dcho = CrearNodo(l1)