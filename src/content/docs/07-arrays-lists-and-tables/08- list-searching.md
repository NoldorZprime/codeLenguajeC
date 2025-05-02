---
title: Búsqueda en listas
description: A reference page in my new Starlight docs site.
---

"Los arrays (listas y tablas) son uno de los medios principales por los cuales se almacenan los datos en programas C . Debido a esta causa, existen operaciones fundamentales cuyo tratamiento es imprescindible conocer. Estas operaciones esenciales son: la búsqueda de elementos y la ordenación o clasificación de las listas.
La búsqueda de un elemento dado en un array (lista o tabla) es una aplicación muy usual en el desarrollo de programas en C . Dos algoritmos típicos que realizan esta tarea son la búsqueda secuencial
1
Arrays (listas y tablas) 285
o en serie y la búsqueda binaria o dicotómica. La búsqueda secuencial es el método utilizado para listas no ordenadas, mientras que la búsqueda binaria se utiliza en arrays que ya están ordenados.

## Búsqueda secuencial

Este algoritmo busca el elemento dado, recorriendo secuencialmente el array desde un elemento al siguiente, comenzando en la primera posición del array y se detiene cuando se encuentra el elemento buscado o bien se alcanza el final del array.

Por consiguiente, el algoritmo debe comprobar primero el elemento almacenado en la primera posición del array, a continuación el segundo elemento y así sucesivamente, hasta que se encuentra el elemento buscado o se termina el recorrido del array. Esta tarea repetitiva se realizará con bucles, en nuestro caso con el bucle `while`.

**Algoritmo BusquedaSec**
Se utiliza una variable lógica, en C tipo `int`,denominada `E n c o n t r a d o`, que indica si el elemento se encontró en la búsqueda. La variable `Encontrado` se inicializa a `fulso(0)` y se activa a `verdudero(1)` cuando se encuentra el elemento. Se utiliza un operador `and` ( en c `&&` ) , que permita evaluar las dos condiciones de terminación de la búsqueda: elemento encontrado o no haya más elementos (índice del array excede al último valor válido del mismo).

Cuando el bucle se termina, el elemento o bien se ha encontrado, o bien no se ha encontrado. Si el elemento se ha encontrado, el valor de `E n c o n t r a d o` será verdadero y el valor del índice será la posición del array (índice del elemento encontrado). Si el elemento no se ha encontrado, el valor de `E n c o n t r a d o` será `falso` y se devuelve el valor `- I` ai programa llamador.

```
BusquedaSec
inicio
  Poner Encontrado = falso
  Poner Indice = primer indice del array
  mientras (Elemento no Encontrado) y (Indice < Ultimo) hacer
    si (A[indice] = Elemento) entonces
      Poner Encontrado a Verdadero
    si no
      Incrementar Indice
    fin-si
  fin-mientras
  si (Encontrado) entonces
    retorno ( Indice)
  si no
    retorno ( - 1)
  fin-si
€in
```

El algoritmo anterior implementado como una función para un array `Lista` es:
```c
enum {FALSE, TRUE};
int BusquedaSec(int Lista[MAX], int Elemento)
{
  int Encontrado = FALSE;
  int i = O ;
  / * Búsqueda en la lista hasta que se encuentra el elemento
   * /
  o se alcanza el final de la lista.
```
286 Programación en C. Metodología, algoritmos y estructura de datos
```c
  while ((!Encontrado) & & (i <= MAX - 1))
  {
    /*Si se encuentra el elemento se devuelve la posición en la lista. * /
    Encontrado = ((A[i] = = Elemento)?TRUE:i++);
  }
  if (Encontrado)
    return (i);
  else
    return ( - 1);
}
```
En el bucle `while` se ha utilizado el operado condicional `? :` para asignar `TRUE` si se encuentra el elemento, o bien incrementar el índice `i`.

**Ejemplo**
El siguiente programa busca todas las ocurrencias de un elemento y la posición que ocupa en una matriz. La posición viene dada porJila y columna; la matriz se genera con números aleatorios de O a 49.
La función de búsqueda devuelve O si no encuentra al elemento, 1 si lo encuentra. Tiene el argumento de la matriz y dos parámetros para devolver la fila y columna, por lo que tendrán que ser de tipo puntero para poder devolver dicha información. La búsqueda se hará a partir de la fila y columna de la última coincidencia.
```c
#include <stdlib.h>
#include <stdio.h>
#include <time.h>
#define F 8
#define C 10
#define N 50
void escribemat (int a [ ] [Cl) ;
void genmat (int a [ ] [Cl) ;
int buscar(int a[] [C],int* fila,int* co1,int elemento);
int main()
{ int a[Fl [Cl ;
  int item, nf ,nc,esta;
  int veces = O ;
  randomize ( ) ;
  genmat (a);
  printf ("\n Elemento a buscar: " ) ;
  scanf ("%d",&item) ;
  do {
    esta = buscar(a,&nf,&nc,item);
    if (esta)
    { veces = veces+l;
      printf ("\n coincidencia %d: Fila %d, Co1.umna %d\n",veces,nf,nc);
    }
  }while (esta);
  escribe-mat(a);
  printf("\nNÚmero de coincidencias del elemento %d : %d",
         item,veces);
  return O ;
}
```
Arrays (listas y tablas) 287
```c
/ * Busqueda lineal en toda la matriz * /
int buscar(int a[] [Cl,int* fila,int* co1,int elemento)
{
  static int x = O , y = - 1;
  int i,j,encontrado;
  / * avanza al siguiente elemento(fila,columna) * /
  if (y == C-1) / * ultima columna * /
  {
    y = o ;
    x = x+l;
  }
  else
    y = y + l ;
  encontrado = O ;
  while (!encontrado && ( x < F ) )
  {
    encontrado = (a[xl [ y ] == elemento) ;
    if (!encontrado) / * avanza a siguiente elemento * /
      if (y == C-1)
      {
        y = o ;
        x = x+l;
      }
      else
        y = y+l;
  }
  / * ultimo valor de x e y * /
  * f i l a = x;
  *col = y;
  return encontrado;
}
void gen-mat (int a[] [Cl )
{
  int i ,j;
  for ( i = O ; i<F; i++)
    for ( j = O ; j<C; j + + )
      a[i] [j]= random(N);
}
void escribemat (int a [ ] [Cl )
{ int i,j;
  puts ("\t\tMatrizanalizada " ) ;
  for (izo; k F ; i++)
  { putchar('\t');
    \n"1 ;puts ("\t\t-- -
    for ( j = O ; j<C; j++)
      printf("%d %c",a[il[j],(j==C-i?'\n ' : I I ) ) ;
  }
}
```
288 Programación en C. Metodología, algoritmos y estructura de datos

**Ejemplo**
En este programa se quiere buscar la fila de una matriz real que tiene la máxima suma de sus elementos en valor absoluto, La matriz se genera con números aleatorios, las dimensiones de la matriz se establecen con una constante predejinida.
Para determinar la suma de una fila se define la función `sumar ( )`, se la pasa la dirección del primer elemento de la fila para tratar cada fila como una array unidimensional. Para generar números aleatorios de tipo real, se divide el número que devuelve la función `rand ( )` entre 100.0.
```c
#include <stdlib.h>
#include <stdio.h>
#include <time.h>
#define F 6
#define C 10
#define V 100.0
void escribe-mat (float mt [ ] [Cl ) ;
void gen-mat (float mt [ ] [Cl ) ;
float sumar(f1oat v[l);
int maximo(f1oat mt [ ] [Cl ) ;
int main ( )
{
  float mat [Fl [C];
  int fila;
  randomize ( ) ;
  gen-mat (mat);
  escribemat(mat) ;
  fila = maximo(mat);
  printf("\n\nFila cuya suma de elementos es mayor: %d",fila);
  return O ;
}
void gen-mat (float mat [ ] [Cl )
{
  int i ,j;
  for ( i = O ; i<F; i++)
    for (j=O; j<C; j++)
      mat[il [jl= randO/V;
}
void escribemat(f1oat mat[ ][Cl)
{
  int i,j;
  puts ( I' \n\t \ tMatriz anal i zada\n") ;
  \n");puts(ll\t\t-- - ___ - - - - - -
  for ( i = O ; i<F; i++)
  {
    for (j=O; j<C; j++)
      printf("%.2f%c",mat[i][jl,(j==C-l ?'\n I : ' ' ) I ;
  }
}
float sumar (float v [ ] )
{
  int i;
  float s;
```
Arrays (listas y tablas) 289
```c
  for (s=O.O,i=O; i d ; i++)
    return s;
    s += v[i];
}
int maxirno(f1oat mt [ ] [Cl)
{
  float mx;
  int i, f;
  m x = sumar(&mt[O][O]); / * dirección de primera fila * /
  printf ("\nSuma fila %d %.2f",O,mx);
  for (f=O,i=l;i<F; i++)
  { float t ;
    t = sumar(&rnt [il [O]) ;
    printf ("\nSuma fila %d %.Lf",i,t);
    if (t > rnx)
    {
      mx = t;
      f = i;
    }
  }
  return f ;
}
```"