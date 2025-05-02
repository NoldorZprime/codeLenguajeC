---
title: Arrays dinámicas
description: A reference page in my new Starlight docs site.
---

Un nombre de un array es realmente un puntero constante que se asigna en tiempo de compilación:
```c
float m[30]; / * m es un puntero constante a un bloque de 30 €loat*/
float* const p = ( float * ) m ~ l l o c ( 3 0 * s i z e o f o ) ;
```
`m` y `p` son punteros constantes a bloques de 30 números reales (float). La declaración de `m` se denomina ligadura estática debido a que se asigna en tiempo de compilación; el símbolo se enlaza a la memoria asignada aunque el array no se utiliza nunca durante la ejecución del programa.

Por el contrario, se puede utilizar un puntero no constante para posponer la asignación de memoria hasta que el programa se esté ejecutando. Este tipo de enlace o ligadura se denomina ligadura dinámica o ligadura en tiempo de ejecución
```c
float* p = (float*)rnal~oc(3Oxsizeof(float));
```
Un array que se declara de este modo se denomina array dinámico.
374 Programación en C. Metodología, algoritmos y estructura de datos

**Comparar los dos métodos de definición de un array**
```c
0 float m[301; / * array estático * /
float* p=(float*)malloc(30*sizeof(flo,=it));/ * array dinámico*/
```
El array estático `m` se crea en tiempo de compilación; su memoria permanece asignada durante toda la ejecución del programa. El arrav dinámico se crea en tiempo de ejecución; su memoria se asigna sólo cuando se ejecuta su declaración. No obstante, la memoria asignada al array `p` se libera tan pronto como se invoca a la función `free ( )`, de este modo
```c
free (p);
```"