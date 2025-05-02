---
title: Asignación calloc() y realloc()
description: A reference page in my new Starlight docs site.
---

Además de la función `malloc ( )` para obtener bloques de memoria, hay otras dos funciones que permiten obtener memoria libre en tiempo de ejecución, éstas son `calloc ( )` y `real loc ( )`. Con ambas se puede asignar memoria, como con `mal loc ( )`, cambia la forma de transmitir el número de bytes de memoria requeridos. Ambas devuelven un puntero al bloque asignado de memoria. El puntero se utiliza para referenciar el bloque de memoria. El puntero que devuelven es del tipo `void*`.

## Función calloc ( )

La forma de llamar a la función `calloc ( )` es:
```c
puntero = calloc(número elementos,tamaño de cada elemento);
```
Generalmente se hará una conversión al tipo del puntero:
```c
tipo *puntero;
puntero =(tipo*)calloc(numero elernentos,tamaño de cada elemento);
```
El tamaño de cada elemento se expresa en bytes, se utiliza para obtenerlo el operador `s i z e o f`. Por ejemplo, se quiere reservar memoria para 5 datos de tipo `double`:
```c
#define N 5
double* pd;
pd = (double*) calloc(N,sizeof(double)) ;
```
En este otro ejemplo se reserva memoria para una cadena variable:
```c
char *c, B[121];
puts('1ntroduce una línea de caracteres.");
gets (B);
/ * Se reserva memoria para el número de caracteres + 1 para el carácter
 * fin de cadena.
 */
c = (char*) calloc(strlen(B)+l,sizeof(char));
strcpy(c,B);
```
Al llamar a la función `calloc ( )` puede ocurrir que no haya memoria disponible, en ese caso `calloc ( )` devuelve `N U L L`.

**Sintaxis de llamada a caiioc ( )**
```
tipo *puntero;
' intnumelementos;
...
puntero = (tipo*)calloc (numelementoc,tamaño de tipo);
```
La función devuelve la dirección de la variable asignada dinániicamente, el tipo que devuelve es `void*`.

```
La función devuelve la dirección de la variable asignada dinániicamente, el tipo que
tiene caiioc ( )
void* calloc(size-t n,size-t t ) ;
Figura 11.6. Sintaxis (formato) de la función calloc í i
--
```
Asignación dinámica de memoria 365
En la sintaxis de llamada, `puntero` es el nombre de la variable puntero al que se asigna la dirección de memoria de un bloque de `numelementos`,o `NULL` si falla la operación de asignación de memoria. La función `calloc ( )` está declarada en el archivo de cabecera `stdlib.h`,por lo que será necesario incluir ese archivo de cabecera en todo programa que llame a la función. Se puede reservar memoria dinámicamente para cualquier tipo de dato, incluyendo `char`, `float`,arrays, estructuras e identificadores de `typedef`.

En el siguiente programa se considera una secuencia de números reales, con una variable puntero a `float` se procesa un array de longitud variable, de modo que se puede ajustar la cantidad de memoria necesaria para el número de valores durante la ejecución del programa.
```c
int ,
#include <stdlib.h>
#include <stdio.h>
int main (void)
{
  float *pf = NULL;
  int num, i;
  do {
    printf("NÚmero de elementos del vector: " ) ;
    scanf ( "%d", &num) ;
  }while (num < 1);
  / * Asigna memoria: num*tamaño bytes * /
  pf = (float * ) calloc(num, sizeof(f1oat));
  if (pf == NULL)
  { puts('Error en la asignación de memoria. " );
    return 1;
  }
  printf ( " \Introduce %d valores ",num);
  for (izo; i<num; i++)
    scanf ( " % f " , & p f[i] ) ;
  / * proceso del vector * /
  / * liberación de la memoria ocupada * /
  free(pf);
  return O ;
}
```

## Función realloc ( )

Esta función también es para asignar un bloque de memoria libre. Tiene una variación respecto a `malloc ( )` y `calloc ( )`,permite ampliar un bloque de memoria reservado anteriormente. La forma de llamar a la función `realloc (` es:
```c
puntero = realloc (puntero a bloque,tamaño total de nuevo bloque) ;
```
Generalmente se hará una conversión al tipo del puntero:
```c
tipo *puntero;
puntero =(tipo*)realloc(puntero a bloque,tamaño total nuevo bloque);
```
El tamaño del bloque se expresa en bytes. El `puntero a bloque` referencia a un bloque de memoria reservado previamente con `malloc ( )`, `calloc ( )` o la propia `realloc ( )`.
366 Programación en C. Metodología, algoritmos y estructura de datos

**Ejemplo 11.5**
Reservar memoria para una cadena y a continuación, ampliar para otra cadena más larga.
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int main( )
{ char *cadena;
  int tam;
  tam = (strlen("Primavera")+l) "sizeof (char);
  cadena = (char*)malloc(tam);
  strcpy (cadena, "Primavera');
  puts (cadena);
  / * Amplia el bloque de memoria * /
  tam += (strlen(" en Lupiana\n")+1)"sizeof (char);
  cadena = (char * ) realloc (cadena, tam) ;
  strcat (cadena,'I en Lupiana\n");
  puts(cadena);
  / * liberación de memoria * /
  free (cadena);
  return O ;
}
```
El segundo argumento de `realloc ( )`, es el tamaño total que va a tener el bloque de memoria libre. Si se pasa cero (0) como tamaño se libera el bloque de memoria al que está apuntando el puntero primer argumento, y la función devuelve `NULL`. En el siguiente ejemplo se reserva memoria con `calloc ( )` y después se libera con `realloc ( )`.
```c
#define N 10
long* pl;
pl = (long*) calloc (N,sizeof (long)) ;
pl = realloc (pl,O ) ;
```
El puntero del primer argumento de `realloc ( )` puede tener el valor de `NULL`, en este caso la función `realloc ( )` reserva tanta memoria como la indicada por el segundo argumento, en definitiva, actúa como `malloc ( )`.
```c
. . .
```

**Ejemplo 11.6**
En este ejemplo se leen dos cadenas de caracteres; si la segunda cadena comienza por `C O P I A`,se añade a la primera. La memoria se reserva con `r e a l 1oc ( )`.
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int main( )
{
char *Cl=NULL,*C2=NULL, B[121];
char *clave = " COPIA " ;
```
Asignación dinámica de memoria 367
```c
int tam;
puts ("\n\tPrimera cadena I' ) ;
gets (B);
tam = (strlen(B)+l)*sizeof(char);
C1 = (char*)realloc (Cl,tam) ;
strcpy(C1,B);
puts ("\n\tSegunda cadena " ) ;
gets (B);
tam = (strlen(B)+l)*sizeof(char);
C2 = (char*)realloc (C2,tam) ;
strcpy (C2,B) ;
/ * Compara los primeros caracteres de C2 con clave.
 * La comparación se realiza con la función strcmpo * /
if (strlen(c1ave) <= strlen(C2))
{
  int j;
  char *R = NULL;
  R = realloc (R,(strlen(c1ave)+ I ) *sizeof (char)) ;
  for ( j = O ; j<strlen(clave);j++)
    *(R+j) = '\O';
  if (strcmp(clave,R)=:O)
    / * copia los strlen(c1ave) primeros caracteres * /
    *(R+j) = * ( C ~ + J ' ) ;
    / * compara con clave * /
}
/ * amplia el bloque de memoria * /
tam = (strlen(Cl)+strlen(C2)+l)*sizeof(char);
C1 = realloc(C1,tam);
strcat(Cl,C2);
printf ("\nCadenaprimera: %s",Cl);
printf ("\nCadena segunda: %s",C2);
return 1;
}
```
Al llamar a la función `realloc (` para ampliar el bloque de memoria puede ocurrir que no haya memoria disponible; en ese caso `real loc ( )` devuelve `NULL`.

**Sintaxis de ilamada a rsaiioc (`**
```
tipo *puntero;
puntero = (tipo*)realloc (puntero, tamaño del bloque de memoria);
```
La función devuelve la dirección de la variable asignada dinámicamente, el tipo que devuelve es `void*`.

```
Pro&ipo que tiene realioc ( )
void* realloc(void* puntero,size-t t);
Figura 11.7. Sintaxis (formato) de la función rpalloc ( 1 .
?
,
```
368 Programación en C. Metodología, algoritmos y estructura de datos
Hay que tener en cuenta que la expansión de memoria que realiza `realloc ( )` puede hacerla en otra dirección de memoria de la que contiene la variable puntero transmitida como primer argumento. En cualquier caso, `realloc ( )` copia los datos referenciados por `puntero` en la memoria expandida. La función `realioc ( )`, al igual que las demás funciones de asignación de memoria, está declarada en el archivo de cabecera `stdlib.h`."