---
title: Punteros y arrays
description: A reference page in my new Starlight docs site.
---

"Los arrays y punteros están fuertemente relacionados en el lenguaje C . Se pueden direccionar arrays como si fueran punteros y punteros como si fueran arrays. La posibilidad de almacenar y acceder a punteros y arrays, implica que se pueden almacenar cadenas de datos en elementos de arrays. Sin punteros eso no es posible, ya que no existe el tipo de dato cadena (string)en C . No existen variables de cadena. Únicamente constantes de cadena.

## Nombres de arrays como punteros

Un nombre de un array es simplemente un puntero. Supongamos que se tiene la siguiente declaración de un array:
```c
int lista[5] = 110, 20, 3 0 , 40, 5 0 1 ;
```
```
M i m o r i u
L O
L O
3 0
40
Figura 10.5. U n array almacenado en memoria.
```
Si se manda visualizar `i i sta [ O 1` se verá `1O`. Pero, ¿qué sucederá si se manda visualizar `* 1i s ta`? Como un nombre de un array es un puntero, también se verá `1O`. Esto significa que
```
lista + O apunta a lista[Ol
lista + 1 apunta a lista[ll
lista + 2 apunta a lista [2I
lista + 3 apunta a lista [3]
lista + 4 apunta a lista[4]
```
--
Punteros (apuntadores) 333
Por consiguiente, para imprimir (visualizar), almacenar o calcular un elemento de un array, se puede utilizar notación de subíndices o notación de punteros. Dado que un nombre de un array contiene la dirección del primer elemento del array, se debe indireccionar el puntero para obtener el valor del elemento.

El nombre de un array es un puntero, contiene la dirección en memoria de comienzo de la secuencia de elementos que forma el array. Es un puntero constante ya que no se puede modificar, sólo se puede acceder para indexar a los elementos del array. En el ejemplo se pone de manifiesto operaciones correctas y erróneas con nombres de array.
```c
float v[101;
float *p;
floa x = 100.5;
int j;
/ * se indexa a partir de v * /
for (j= 0; j<10; j++)
  *(v+j) = j"10.0;
p = v+4; / * se asigna la dirección del quinto elemento * /
v = &x; / * error: intento de modificar un puntero constante * /
```
## Ventajas de los punteros

Un nombre de un array es una constante puntero, no una variable puntero. No se puede cambiar el valor de un nombre de array, como no se pueden cambiar constantes. Esto explica por qué no se pueden asignar valores nuevos a un array durante una ejecución de un programa. Por ejemplo, si `cnombre` es un array de caracteres, la siguiente sentencia no es válida en C:
```c
cnombre = "Hermanos DaltÓn";
```
Se pueden asignar valores al nombre de un array sólo en el momento de la declaración, o bien utilizando funciones, tales como (ya se ha hecho anteriormente) `strcpy ( )`.

Se pueden cambiar punteros para hacerlos apuntar a valores diferentes en memoria. El siguiente programa muestra como cambiar punteros. El programa define dos valores de coma flotante. Un puntero de coma flotante apunta a la primera variable `V I` y se utiliza en `printf ( )`. El puntero se cambia entonces, de modo que apunta a la segunda variable de coma flotante `v2`.
```c
#include <stdio.h>
int main()
{
  float vl = 756.423;
  lloat v2 = 900.545;
  lloat *p-v;
  p-v = 6,vl;
  printf ( " El primer valor es %f \n",*p-v) ; /*se imprime 756.423 * /
  p-v = &v2;
  printI("E1 segundo valor es %I\n",*p-v) ; /*se imprime 900.545 * /
  return 0;
}
```
Por esta facilidad para cambiar punteros, la mayoría de los programadores de C utilizan punteros en lugar de arrays. Como los arrays son fáciles de declarar, los programadores declaran arrays y a continuación utilizan punteros para referencia a los elementos de dichos arrays."