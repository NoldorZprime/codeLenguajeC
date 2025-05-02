---
title: Arrays como parámetros
description: A reference page in my new Starlight docs site.
---

"En C todos los arrays se pasan por referencia (dirección). Esto significa que cuando se llama a una función y se utiliza un array como parámetro, se debe tener cuidado de no modificar los arrays en una función llamada. C trata automáticamente la llamada a la función como si hubiera situado el operador de dirección `&` delante del nombre del array. La Figura 8.1 1 ayuda a comprender el mecanismo.
Dadas las declaraciones
```c
#define MAX 100
double datos[MAXl;
```
se puede declarar una función que acepte un array de valores `double` como parámetro. La función `SumaDeDatos ( )` puede tener ei prototipo:
```c
double SumaDeDatos(doub1e datos[MAXl);
```
Incluso mejor si se dejan los corchetes en blanco y se añade un segundo parámetro que indica el tamaño del array:
```c
double SumaDeDatos(doub1e datos[], int n);
```

```
k
int m a i n 0
{
char
palabra [ 4 I ="AB(:";
cambiar- í pa labra ;
puts(pa1abra);
r e t u r n O ;
7
~ ~ ~ - -
Arrays (listas y tablas) 277
I
v o i d
Figura 8.11. Paso de un array por dirección.
```
A la función `SumaDeDatos` se pueden entonces pasar argumentos de tipo array junto con un entero `n`, que informa a la función sobre cuantos valores contiene el array. Por ejemplo, esta sentencia visualiza la suma de valores de los datos del array:
```c
printf ("\nSuma = %If",SumaDeDatos(datos, MAX) ) ;
```
La función `SumaDeDatos` no es difícil de escribir. Un simple bucle `for` suma los elementos del array y una sentencia `return` devuelve el resultado de nuevo al llamador:
```c
double SumaDeDatos(doub1e datosi], int n)
{ double suma = O ;
  while (n > O )
    suma += datos[--nl;
  return suma;
}
```
El código que se utiliza para pasar un array a una función incluye el tipo de elemento del array y su nombre. El siguiente ejemplo incluye dos funciones que procesan arrays. En ambas listas de parámetros, el array `a [ ]` se declara en la lista de parámetros tal como
```c
double a[l
```
El número real de elementos se pasa mediante una variable entera independiente. Cuando se pasa un array a una función, se pasa realmente sólo la dirección de la celda de memoria donde comienza el array. Este valor se representa por el nombre del array `a`. La función puede cambiar entonces el contenido del array accediendo directamente a las celdas de memoria en donde se almacenan los elementos del array. Así, aunque el nombre del array se pasa por valor, sus elementos se pueden cambiar como si se hubieran pasado por referencia.

**Ejemplo**
Paso de arrays a funciones. En el ejemplo se lee un array y se escribe.
El array tiene un tamaño máximo, `L`, aunque el número real de elementos es determinado en la función `leerArray ( )`. El segundo argumento es, por tanto, un puntero para así poder transmitir por referencia y obtener dicho dato de la función.
278 Programación en C. Metodología, algoritmos y estructura de datos
```c
#include <stdio.h>
#define L 100
void leerArray(doub1e a[], int* ) ;
void imprimirArray (const double [ ] , int);
int main()
{
  double a[L] ;
  int n;
  1eerArray (a, &n);
  printf("E1 array a tiene %d elementos, estos son\n ",n);
  imprimirArray (a, n) ;
  return O ;
}
void leerArray(doub1e a[], int* num)
{
  int n = 0;
  puts("1ntroduzca datos. Para terminar pulsar O.\n");
  for ( ; n < L; n++)
  {
    printf ("%d: ",n);
    scanf ("%lf",&a[n]);
    if (a[n] == O ) break;
  } ;
  *num = n;
}
void imprimirArray(const double a[ ],int n)
{
  int i = 0;
  for ( ; i < n; i++)
    printf ("\t%d: %lf\n",i,a[i]);
}
```
```
1: 15.25
2: 44.77
3: O
El array tiene tres elementos, éstos son:
O: 31.31
1: 15 - 2 5
2: 44.77
k
Arrays (listas y tablas) 279
```
**Ejercicio**
Escribir una función que calcule el máximo de los primeros n elementos de un array especificado.
```c
double maximo(const double a[ ],int n)
{ double mx;
  int i;
  m x = a[Ol;
  for (i = 1; i < n; i++)
    m~ = (a[i]>mx ? a[il: mx);
  return mx;
}
```
## Precauciones

Cuando se utiliza una variable array como argumento, la función receptora puede no conocer cuántos elementos existen en el array. Sin su conocimiento una función no puede utilizar el array. Aunque la variable array puede apuntar al comienzo de él, no proporciona ninguna indicación de donde termina el array.

La función `SumaDeEnteros ( )` suma los valores de todos los elementos de un array y devuelve el total.
```c
{
}
int main( )
{
  int SumaDeEnteros(int "ArrayEnteros)
  . . .
  int lista[i] = {lo, 11, 12, 13, 141;
  SumaDeEnteros (lista);
  . . .
}
```
Aunque `SumaDeEnteros ( )` conoce donde comienza el array, no conoce cuántos elementos hay en el array; en consecuencia, no sabe cuántos elementos hay que sumar.

Se pueden utilizar dos métodos alternativos para permitir que una función conozca el número de argumentos asociados con un array que se pasa como argumento de una función:
* situar un valor de señal al final del array, que indique a la función que se ha de detener el proceso en ese momento;
* un segundo argumento que indica el número de elementos del array.

Todas las cadenas utilizan el primer método ya que terminan en nulo. Una segunda alternativa es pasar el número de elementos del array siempre que se pasa el array como un argumento. El array y el número de elementos se convierten entonces en una pareja de argumentos que se asocian con la función llamada. La función `SumaDeEnteros ( )`, por ejemplo, se puede actualizar así:
```c
I int SumaDeEnteros(int ArrayEnteros[], int NoElementos)
{
  . . .
}
```
280 Programación en C.Metodología, algoritmos y estructura de datos
El segundo argumento, `NoElementos`,es un valor entero que indica a la función `SumaDeEnteros ( )` cuantos elementos se procesarán en el array `ArrayEnteros`. Este método suele ser el utilizado para arrays de elementos que no son caracteres.

**Ejemplo**

Este programa introduce una lista de I O números enteros y calcula su suma y el valor máximo.
```c
#include <stdio.h>
int SumaDeEnteros(const int ArrayEnteros[], int NoElementos);
int maximo(const int ArrayEnteros[], int NoElementos);
int main0
{
  int items [lo];
  int Total, i;
  puts('1ntroduzca 10 números, seguidos por return " );
  for (i = O ; i < 10; i++)
    scanf ("%d",&Items[il);
  printf('Tota1 = %d \n',SumaDeEnteros(Items,lO));
  printf("Va1or máximo: %d \n",maximo(Items,lO)1 ;
  return O ;
}
int SumaDeEnteros(cons int ArrayEnteros[ ], int NoElementos)
{ int i , Total = O ;
  for (i = 0; i < NoElementos; i++)
    Total += ArrayEnteros[i];
  return Total;
}
int maximo(const int ArrayEnteros[], int NoElementos)
{ int mx;
  int i;
  mx = ArrayEnteros [ 0I ;
  for (i = 1; i < NoElementos; i++)
    mx = (ArrayEnteros[i]> m x ? ArrayEnteros [i]: mx) ;
  return mx;
}
```
El siguiente programa muestra cómo se pasa un array de enteros a una función de ordenación,
```c
#include <stdio.h>
void ordenar(int[ ],int); / * prototipo de ordenar * /
int main ( )
{
  ordenar ( ) .
  int ListaEnt[ ] = {9, 8, 7 , 6, 5 , 4, 3 , 2 , 1, 101;
  int i;
  int LongLista = sizeof(ListaEnt) / sizeof(int);
  ordenar(ListaEnt,LongLista);
```
Arrays (listas y tablas) 281
```c
  for (i = O ; i < LongLista; i++)
    return O ;
  printf ("%d ",ListaEnt[il ) ;
}
void ordenar(int lista[ ],int numElementos)
{
  / * cuerpo de la función ordenar el array * /
}
```
Como C trata las cadenas como arrays de caracteres, las reglas para pasar arrays como argumentos a funciones se aplican también a cadenas. El siguiente ejemplo de una función de cadena que convierte los caracteres de sus argumentos a mayúsculas, muestra el paso de parámetros tipo cadena.
```c
void conviertemayus(char cad[])
{ int i = O ;
  int intervalo = 'a'-'A ' ;
  while (cad[il)
  {
    cad[i] = (cad[i]>='a' & & cad[il<='z') ? cad[il - intervalo: cad[il ;
    i++;
  }
}
```
La función `conviertemayus ( )` recibe una cadena, un array de caracteres cuyo último carácter es el nulo (O). El bucle termina cuando se alcance el fin de cadena (nulo, condición `fulse`). La condición del operador ternario determina si el carácter es minúscula, en cuyo caso resta a dicho carácter el intervalo que hay entre las minúsculas y las mayúsculas.

## Paso de cadenas como parámetros

La técnica de pasar arrays como parámetros se utiliza para pasar cadenas de caracteres a funciones. Las cadenas terminadas en nulo utilizan el primer método dado anteriormente para controlar el tamaño de un array. Las cadenas son arrays de caracteres. Cuando una cadena se pasa a una función, tal como `st r1en ( )` (véase capítulo de tratamiento de cadenas), la función conoce que se ha almacenado el final del array cuando ve un valor de O en un elemento del array.

Las cadenas utilizan siempre un O para indicar que es el Último elemento del array de caracteres. Este O es el carácter nulo del código de caracteres ASCII.

Considérese estas declaraciones de una constante y una función que acepta un parámetro cadena y un valor de su longitud.
```c
#define MAXLON 1 2 8
void FuncDemo(char s[ ],int long);
```
El parámetro `s` es un array de caracteres de longitud no especificada. El parámetro `l o n g` indica a la función cuántos bytes ocupa (que puede ser diferente del número de caracteres almacenados en `s`).
Dadas las declaraciones siguientes:
```c
char presidente [MAXLON] = " Manuel Martinez " ;
FuncDemo(presidente, MAXLON);
```
la primera línea declara e inicializa un array de caracteres llamado `presidente`,capaz de almacenar hasta `MAXLON- 1` caracteres más un byte de terminación, carácter nulo. La segunda línea, pasa la cadena a la función."