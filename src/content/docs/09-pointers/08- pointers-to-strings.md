---
title: Punteros a cadenas
description: A reference page in my new Starlight docs site.
---

Los punteros se pueden utilizar en lugar de índices de arrays. Considérese la siguiente declaración de un array de caracteres que contiene las veintiséis letras del alfabeto internacional (no se considera la f i ) .
```c
char alfabeto [27] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ";
```
Declaremos ahora `p` un puntero a `char`
```c
char *p;
```
Se establece que `P` apunta al primer carácter de `alfabeto` escribiendo
```c
p = &alfabeto[Ol; / * o también p = alfabeto * /
```
de modo que si escribe la sentencia
```c
p r i n t f ("%c \ n " , * p ) ;
```
se visualiza la letra A, ya que `p` apunta al primer elemento de la cadena. Se puede hacer también
```c
p = halfabetotl51;
```
de modo que `p` apuntará al carácter 16" (la letra Q). Sin embargo, no se puede hacer
```c
p = &alfabeto;
```
ya que `alfabeto` es un array cuyos elementos son de tipo `char`, y se produciría un error al compilar (tipo de asignación es incompatible).
```
______L
A B C D E F G H I J K L M
Figura 10.7. Un puntero a i i l f . i h = t o I 1 ',I .
```
Es posible, entonces, considerar dos tipos de definiciones de cadena:
```c
char cadenal[]='Hola viejo mundo " ; / * array contiene una cadena * /
char *cptr = "C a su alcance"; / * puntero a cadena, el sistema
                                  reserva memoria para la cadena*/
```
##  Punteros versus arrays

El siguiente programa implementa una función para contar el número de caracteres de una cadena. En el primer programa, la cadena se describe utilizando un array, y en el segundo, se describe utilizando un puntero.
. I
336 Programación en C. Metodología, algoritmos y estructura de datos
```c
/ * Implementación con un array * /
#include <stdio.h>
int longitud(const char cad[]1 ;
void main()
{
  static char cad[ I = "Universidad Pont i.ficid";
  printf("La longitud de % s es %d caracteres\n",
         cad, longitud(cad1 ) ;
}
int longitud(const char cad[])
{ int posicion = O ;
  while (cad[posicion] ! = '\O')
  {
    posícion++;
  }
  return posicion;
}
```
El segundo programa utiliza un puntero para la función que cuenta los caracteres de la cadena. Además, utiliza la aritmética de punteros para indexar los caracteres. El bucle termina cuando llega al último carácter, que es el delimitador de una cadena: `\ O`.
```c
/ * Implementación con un puntero * /
#include istdio.h>
int longitud(const char*);
void main()
{
  static char cad[] = "Universidad Pontificia ";
  print€ ( " La longitud de %s es %d cdracteres\n",
          cad, longitud (cad)) ;
}
int longitud(const char* cad)
{
  int cuenta = O ;
  while (*cad++) cuenta++;
  return cuenta;
}
```
En ambos casos se imprimirá:
```
L a longitud de Universidad Pontificia es 22 caracteres
```

### Comparaciones entre punteros y arrays de punteros

```c
int *ptrl[ 1 ; / * Array de punteros a int * /
int (*ptr21 [ 1 ; / * Puntero a un array de elementos int * /
int * (*ptr3)[ I ; / * Puntero a un array de punteros a int * /
```"