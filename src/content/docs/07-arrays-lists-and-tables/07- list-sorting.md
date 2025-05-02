---
title: Ordenación de listas
description: A reference page in my new Starlight docs site.
---

"La ordenación de arrays es otra de las tareas usuales en la mayoría de los programas. La ordenación o clasificación es el procedimiento mediante el cual se disponen los elementos del array en un orden especificado, tal como orden alfabético u orden numérico.

```
18
14
Lista
desordenada
Lista ordenada
(ascendente)
Lista ordenada
(descendente)
Figura 8.12. Lista de números desordenada y ordenada en orden ascendente y en orden descendente.
```

Un diccionario es un ejemplo de una lista ordenada alfabéticamente, y una agenda telefónica o lista de cuentas de un banco es un ejemplo de una lista ordenada numéricamente. El orden de clasificación u ordenación puede ser ascendente o descendente.

Existen numerosos algoritmos de ordenación de arrays: inserción, burbuja, selección, rápido (quick sort), fusión (merge), montículo (heap), shell, etc.

## Algoritmo de la burbuja

La ordenación por burbuja es uno de los métodos más fáciles de ordenación. El método (algoritmo) de ordenación es muy simple. Se compara cada elemento del array con el siguiente (por parejas), si no están en el orden correcto, se intercambian entre sí sus valores. El valor más pequeño flota hasta la parte superior del array como si fuera una burbuja en un vaso de refresco con gas.

La Figura 8.13 muestra una lista de números, antes, durante las sucesivas comparaciones y a la terminación del algoritmo de la burbuja. Se van realizando diferentes pasadas hasta que la lista se encuentra ordenada totalmente en orden ascendente.

```
Lista desordenada: 6 4 10 2 8
Primera pasada   6 4 4 4
                 4 6 6 6
                10 10 2 2
                 2 2 10 8
                 8 8 8 10
Segunda pasada   4 4
                 6 2
                 2 6
                 8 8
                10 10
Arrays (listas y tablas) 283
Tercera pasada   4 2
                 2 4
                 6 6
                 8 8
                10 10
Cuarta pasada    2
                 4
                 6
                 8
                10
Figura 8.13. Secuencias de ordenación.
```

La ordenación de arrays requiere siempre un intercambio de valores, cuando éstos no se encuentran en el orden previsto. Si, por ejemplo, en la primera pasada 6 y 4 no están ordenados se han de intercambiar sus valores. Suponiendo que el array se denomina `lista`:
```
lista [O I 6
lista[l] 4
lista [ 2 1 10
lista[3] 2
lista[4] 8
```
para intercambiar dos valores, se necesita utilizar una tercera variable auxiliar que contenga el resultado inmediato. Así, por ejemplo, si las dos variables son `1 i sta [ O I` y `11s t a [ 1 1`, el siguiente código realiza el intercambio de dos variables:

**Ejemplo**

La función `intercambio` intercambia los valores de dos variables `x` e `y`
El algoritmo de intercambio utiliza una variable auxiliar
```c
aux = x;
x = y ;
y = aux;
```
La función `intercambio` sirve para intercambiar dos elementos `x` e `y` que se pasan a ella. Al tener que pasar por referencia, los argumentos de la función son punteros.
```c
void intercambio(float* x , float" y)
{ f l o a t a u x ;
  aux = *x;
  *x = * y ;
  *y = aux;
}
```
Una llamada a esta función:
```c
float r , v;
intercambio(&r,&v) ;
```
284 Programación en C. Metodología, algoritmos y estructura de datos

**Ejemplo**

El programa siguiente ordena una lista de números reales y a continuación los imprime.
```c
#include <stdio.h>
/ * prototipos * /
void imprimir(f1oat a[], int n);
void intercambio(float* x, float* y);
void ordenar (float a[], int n) ;
int main( )
{
  float a[10]={25.5,34.1,27.6,15.24.3.27, 5.14, 6.21,7.57,4.61,5.41;
  imprimir(a,lO);
  ordenar (a,1O ) ;
  imprimir(a,lO);
  return O ;
}
void imprimir(f1oat a[], int n)
{ int i = O ;
  for ( ; i < n-1; i++) {
  }
  printf ("%f \n",a[n-11);
  printf ("%f,%c",a[i],((i+1)%10==0? '\n' : ' ' ) 1 ;
}
void intercambio(float* x, float* y)
{
  float aux;
  aux = *x;
  *x = *y;
  *y = aux;
}
/ * ordenar burbuja * /
void ordenar (float a[], int n)
{
  int i,j;
  for (i = n-1; i > O ; i--)
    for (j = , O ; j < i; j++)
      if (a[]] > a[j+ll)
        intercambio(&a[jl ,&a[j+ll1 ;
}
```"