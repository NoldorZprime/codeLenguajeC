---
title: Punteros null y void
description: A reference page in my new Starlight docs site.
---

"Normalmente un puntero inicializado adecuadamente apunta a alguna posición específica de la memoria. Sin embargo, un puntero no inicializado, como cualquier variable, tiene un valor aleatorio hasta que se inicializa el puntero. En consecuencia, será preciso asegurarse que las variables puntero utilicen direcciones de memoria válida.

Existen dos tipos de punteros especiales muy utilizados en el tratamiento de sus programas: los punteros `void` y `null` (nulo).

Un puntero nulo no apunta a ninguna parte -dato válido- en particular, es decir, «un puntero nulo no direcciona ningún dato válido en memoria». Un puntero nulo se utiliza para proporcionar a u n programa un medio de conocer cuando una variable puntero no direcciona a un dato válido. Para declarar un puntero nulo se utiliza la macro `NULL`, definida en los archivos de cabecera `STDEF .H`, `S T D I O . H`, `S T D L I B . H` y `STRING . H`. Se debe incluir uno o más de estos archivos de cabecera antes de que se pueda utilizar la macro `NULL`. Ahora bien, se puede definir `NULL` en la parte superior de su programa (o en un archivo de cabecera personal) con la línea:
```c
#define NULL O
```
Un sistema de inicializar una variable puntero a nulo es:
```c
char *p = NULL;
```
Algunas funciones C también devuelven el valor `NUL,L` si se encuentra un error. Se pueden añadir test
```c
char * p ;
p = malloc(l2l*sizeof(char));
```
para el valor `NULL` comparando el puntero con `NULL`:
```c
~f ( p == N U L L )
  puts ("Error de asignación de memoria") ;
```
o bien
```c
if (p ! = N U L L ) . . .
if ( p ) . _ _
/ * este if es equivalente a : * /
```
Otra forma de declarar un puntero nulo es asignar un valor de O. Por ejemplo,
```c
int *ptr = (int * ) O ; / * ptr es un puntero nulo * /
```
El modelo (casting) anterior ( `int * 1` , no es necesario, hay una conversión estándar de O a una variable puntero.
```c
int *ptr = O ;
```
Nunca se utiliza un puntero nulo para referenciar un valor. Como antes se ha comentado, los punteros nulos se utilizan en un test condicional para determinar si un puntero se ha inicializado. En el ejemplo
```c
i f (ptr) i
  printf("Va1or de la variable apuntada por ptr es: Xd\n",*ptr); i
```
se imprime un valor si el puntero es válido y no es un puntero nulo.

Los punteros nulos se utilizan con frecuencia en programas con arrays de punteros. Cada posición del array se inicializa a `N U L L`; después se reserva memoria dinámicamente y se asigna a la posición correspondiente del array, la dirección de la memoria.

En C se puede declarar un puntero de modo que apunte a cualquier tipo de dato, es decir, no se asigna a un tipo de dato específico. El método es declarar el puntero como un puntero `vold *`, denominado puntero genérico.
Punteros (apuntadores) 331
```c
void *ptr; / * declara un puntero void, punLero genérico * /
```
El puntero `p t r` puede direccionar cualquier posición en memoria, pero el puntero no está unido a un tipo de dato específico. De modo similar, los punteros `void` pueden direccionar una variable `float`, una `c h a r`, o una posición arbitraria o una cadena.

**Nota**
No confundir punteros `void` y `N U LL`. Un puntero nulo no direcciona ningiín dato válido. Un puntero `void` direcciona datos de un tipo no especificado. Un puntero `void` se puede igualar a nulo si no se direcciona ningún dato válido. Nulo es un valor; `void` es un tipo de dato."