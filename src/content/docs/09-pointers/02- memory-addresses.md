---
title: Direcciones en memoria
description: A reference page in my new Starlight docs site.
---

"Cuando una variable se declara, se asocian tres atributos fundamentales con la misma: su nombre, su tipo y su dirección en memoria.

**Ejemplo**
```c
int n; /* asocia al nombre n, el tipo int y la dirección
           de alguna posición de memoria donde se almacena
           el valor de n
         */
```
```
Ox4f f fd34
  n
 int
```
Esta caja representa la posición de almacenamiento en memoria. El nombre de la variable está a la izquierda de la caja, la dirección de variable está encima de la caja y el tipo de variable está debajo en la caja. Si el valor de la variable se conoce, se representa en el interior de la caja
```
 int
```
Al valor de una variable se accede por medio de su nombre. Por ejemplo, se puede imprimir el valor de `n` con la sentencia:
```c
printf ("%d",n);
```
A la dirección de la variable se accede por medio del operador de dirección `&`. Por ejemplo, se puede imprimir la dirección de `n` con la sentencia:
```c
printf ("%p",&n) ;
```
El operador de dirección " `&` " «opera» (se aplica) sobre el nombre de la variable para obtener sus direcciones. Tiene precedencia de nivel 15 con el mismo nivel que el operador lógico NOT ( `!` ) y el operador de preincremento `++`. (Véase Capítulo 4.)

**Ejemplo**
Obtener el valor y la dirección de una variable.
```c
#include <stdio.h>
void main()
{
  int n = 75;
  print f ( "n = %d\n",n) ; / * visualiza el valor de n * /
  printf ("&n = %p\n",&n); / * visualiza dirección de n * /
}
```
Punteros (apuntadores) 325

**Ejecución**
```
n = 4 5
&n = Ox4fffd34
```
**Nota:** `0x4 f f f d3 4` es una dirección en código hexadecimal.
`IfOx"` es el prefijo correspondiente al código hexadecimal""