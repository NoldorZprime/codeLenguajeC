---
title: Uniones
description: A reference page in my new Starlight docs site.
---

"Las uniones son similares a las estructuras en cuanto que agrupa a una serie de variables, pero la forma de almacenamiento es diferente y, por consiguiente, efectos diferentes. Una estructura (struct) permite almacenar variables relacionadas juntas y almacenadas en posiciones contiguas en memoria. Las uniones, declaradas con la palabra reservada `union`, almacenan también miembros múltiples en un paquete; sin embargo, en lugar de situar sus miembros unos detrás de otros, en una unión, todos los miembros se solapan entre sí en la misma posición. El tamaño ocupado por una unión se determina así: es analizado el tamaño de cada variable de la unión, el mayor tamaño de variable será el tamaño de la unión. La sintaxis de una unión es la siguiente:
```c
union n o m b r e {
  t i p o l m i e m b r o l ;
  t i p o 2 mi enibro2;
  . . .
};
```
Un ejemplo:
```c
union Pruebaünion
{
  float Iteml;
  int Item2;
};
```
Estructuras y uniones 31 1
La cantidad de memoria reservada para una unión es igual a la anchura de la variable más grande. En el tipo `union`,cada uno de los miembros dato comparten memoria con los otros miembros de la unión. La cantidad total de memoria utilizada por la unión `comparte` es de 8 bytes, ya que el elemento `double` es el miembro dato mayor de la unión.
```c
union comparte
{
  char letra;
  int elemento;
  float precio;
  double z;
};
```
Una razón para utilizar una unión es ahorrar memoria. En muchos programas se deben tener varias variables, pero no necesitan utilizarse todas al mismo tiempo. Considérese la situación en que se necesitan tener diversas cadenas de caracteres de entrada. Se pueden crear varios arrays de cadenas de caracteres, tales como las siguientes:
```c
char linea_ordenes[80];
char mensaje-error [ 80 I ;
char ayuda [ 80 I ;
```
Estas tres variables ocupan 240 bytes de memoria. Sin embargo, si su programa no necesita utilizar las tres variables simultáneamente, ¿por qué no permitirle compartir la memoria utilizando una unión? Cuando se combinan en el tipo `union frases`,estas variables ocupan un total de sólo 80 bytes.
```c
union frases {
  char linea_ordenes[80];
  char mensaje_error[80];
  char ayuda [80];
} cadenas, *pc;
```
Para referirse a los miembros de una unión, se utiliza el operador punto (.), o bien el operador `->` si se hace desde un puntero a unión. Así:
```c
cadenas.ayuda;
cadenas.mensaje-error;
pc - > mensaje-error;
```"

