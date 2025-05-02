---
title: Aritmética de punteros
description: A reference page in my new Starlight docs site.
---

Al contrario que un nombre de array, que es un puntero constante y no se puede modificar, un puntero es una variable que se puede modificar. Como consecuencia, se pueden realizar ciertas operaciones aritméticas sobre punteros.
Punteros (apuntadores) 337
A un puntero se le puede sumar o restar un entero n; esto hace que apunte n posiciones adelante, o atrás de la actual. Una variable puntero puede modificarse para que contenga una dirección de memoria n posiciones adelante o atrás. Observe el siguiente fragmento:
```c
int v [ l O ] ;
int *p;
p = v;
(v+4); / * apunta al 5" elemento * /
p = p+6; / * contiene la dirección del 7: elemento * /
```
A una variable puntero se le puede aplicar el operador `++`, o el operador `--`. Esto hace que contenga la dirección del siguiente, o anterior elemento. Por ejemplo:
```c
float m[201;
float *r;
r = m;
r++; / * contiene la dirección del elemento siguiente * /
```
Recuérdese que un puntero es una dirección, por consiguiente, sólo aquellas operaciones de «sentido común» son legales. No tiene sentido, por ejemplo, sumar o restar una constante de coma flotante.

**Operaciones no vadas con punteros**
* No se pueden sumar dos punteros.
* No se pueden multiplicar dos punteros.
* No se pueden dividir dos punteros.

**Ejemplo**
Si `p` apunta a la letra A en `alfabeto`, si se escribe
```c
p = p+l;
```
entonces `p` apunta a la letra B.

Se puede utilizar esta técnica para explorar cada elemento de `al f abeto` sin utilizar una variable de índice. Un ejemplo puede ser
```c
p = &alfabeto[Ol;
for (i = O ; i < strlen(a1fabeto); i++)
{ printf ("%c",* p ) ;
  p = p+l;
}
```
Las sentencias del interior del bucle se pueden sustituir por
```c
printf ("%cc",* p + + );
```
El ejemplo anterior con el bucle `for` puede ser abreviado, haciendo uso de la característica de terminador nulo al final de la cadena. Utilizando la sentencia `while` para realizar el bucle y poniendo la condición de terminación de nulo o byte cero al final de la cadena. Esto elimina la necesidad del bucle `for` y su variable de control. El bucle `for` se puede sustituir por
```c
while (*p) printf ("%c",* p + + );
```
mientras que `*p` toma un valor de carácter distinto de cero, el bucle `while` se ejecuta, el carácter se imprime y `p` se incrementa para apuntar al siguiente carácter. Al alcanzar el byte cero al final de la cadena, `*p` toma el valor de `\ O` o cero. El valor cero hace que el bucle termine.
338 Programación en C. Metodología, algoritmos y estructura de datos

## Una aplicación de punteros: conversión de caracteres

El siguiente programa muestra un puntero que recorre una cadena de caracteres y convierte cualquier carácter en minúsculas a caracteres mayúsculas.
```c
/ * Utiliza un puntero como índice de un array de caracteres
 * y convierte caracteres miniísculas a mayúsculas
 */
#include istdio.h>
#include <conio.h>
void main()
{
  char *p;
  char CadenaTextoí811;
  puts ("Introduzca cadena a convertir : " ) ;
  gets(CadenaTexto);
  / * p apunta al primer carácter de la cadena * /
  p = &CadenaTexto[OJ; / * equivale a p = CadenaTexto * /
  / * Repetir mientras *p no sea cero * /
  while (*p)
  { / * restar 32, constante de código ASCII * /
    i f ( ( * p >= 'a') & & (*p <= 'Z'))
      *p++ = " p - 32;
    else
      p + + ;
  }
  puts ( " La cadena conver t idd es : 'I ) ;
  puts(CadenaText0);
  puts ("\nPulse íntro (Enter) p a r d continudr");
  getch( ) ;
}
```
Obsérvese que si el carácter leído está en el rango entre `ii` y `z`;es decir, es una letra minúscula, la asignación
```c
*p++ = *p-32;
```
se ejecutará, y restar 32 del código ASCII de una letra minúscula convierte a esta letra en mayúscula).
```
C A R C H E L E J O
putchar(*p);
p + + ;
putchar(*p);
p+ t ;
putchar í * p ) ;
p + + ;
putchar ( * p );
Figura 10.8. * p I i se utiliza para acceder de modo incremental en la cadena
```"