---
title: Asignación de memoria malloc()
description: A reference page in my new Starlight docs site.
---

La forma más habitual de C para obtener bloques de memoria es mediante la llamada a la función `rnalloc ( )`. La función asigna un bloque de memoria que es el número de bytes pasados como argumento. `malloc ( )` devuelve un puntero, que es la dirección del bloque asignado de memoria. El puntero se utiliza para referenciar el bloque de memoria y devuelve un puntero del tipo `void*`. La forma de llamar a la función `malloc ( )` es:
```c
puntero = malloc(tamaño en bytes);
```
Generalmente se hará una conversión al tipo del puntero:
```c
tipo *puntero;
puntero =(tipo *)malloc(tamaño en bytes);
```
358 Programación en C. Metodología, algoritmos y estructura de datos
Por ejemplo:
```c
long* p ;
p = (long") malloc(32);
```
El operador unario `sizeof` se utiliza con mucha frecuencia en las funciones de asignación de memoria. El operador se aplica a un tipo de dato (o una variable), el valor resultante es el número de bytes que ocupa. Así, si se quiere reservar memoria para un buffer de 10 enteros:
```c
int *r;
r = (int*) rnalloc(lO*sizeof(int)) ;
```
Al llamar a la función `mailoc ( )` puede ocurrir que no haya memoria disponible, en ese caso `malloc ( )` devuelve `NULL`.

**Sintaxis de llamada a meilloc ( )**
```
tipo *puntero;
puntero = (tipo*)malloc(tamaño);
```
La función devuelve la dirección de la variable asignada dinánhicarnente, el tipo que devuelve es `void*`.

```
Prototipo que incluye malloc ( 1
void* malloc(size-t n ) ;
Figura 10.2. Sintaxis (formato) de la función ma 1 1 o r í ) .
```

En la sintaxis de llamada, `puntero` es el nombre de la variable puntero a la que se asigna la dirección del objeto dato, o se le asigna la dirección de memoria de un bloque lo suficientemente grande para contener un array de `n` elementos, o `NULL`, si falla la operación de asignación de memoria. El siguiente código utiliza `malloc ( )` para asignar espacio para un valor entero:
```c
int *pEnt;
pEnt = ( i n t * ) rnalloc(sizeof(int));
```
La llamada a `malloc ( )` asigna espacio para un `int` (entero) y almacena la dirección de la asignación en `pEnt`. `pEnt` apunta ahora a la posición en el almacén libre (montículo) donde se establece la memoria. La Figura 10.3 muestra como `pEnt` apunta a la asignación del almacén libre. Así, por ejemplo, para reservar memoria para un array de 1 00 números reales:
```c
. . .
float "BloqueMem;
BloqueMern = (float") rnalloc(100*sizeof(float));
```
En el ejemplo se declara un puntero denominado `BloqueMerny` lo inicializan a la dirección devuelta por `malloc ( )`. Si un bloque del tamaño solicitado está disponible, `malloc ( )` devuelve un puntero al principio de un bloque de memoria del tamaño especificado. Si no hay bastante espacio de almacenamiento dinámico para cumplir la petición, `malloc ( )` devuelve cero o `NULL`.La reserva de `n` caracteres se puede declarar así:
```c
int n;
char * s ;
scanf ( "%d", &n);
s = (char*) rnalloc(n*sizeof(char));
```
Asignación dinámica de memoria 359
La función `mal I oc ( )` está declarada en el archivo de cabecera `stdlib .h`.

```
Montículo
(almacén libre)
I valor i r i t I -
p l h t -b Dirección de I r i t
I Código de programa I
Figura 11.3. Después de mdl ~ O C( ) , con el tamaño de un entero, pt'rit apunta a la posición del montículo
donde se ha asignado espacio para el entero.
```

**Ejemplo 11.1**
En el siguiente ejemplo se lee una línea de caracteres, se reserva memoria para un buffer de tantos caracteres como los leídos y se copia en el buffer la cadena.
```c
#include <stdio.h>
#include <string.h> / * por el uso de strcpyo * /
void main()
{
  char cad[l21], *ptr;
  int lon;
  puts ("\nIntroduce una linea de texto\n");
  gets (cad);
  lon = strlen(cad);
  ptr = (char*) malloc ( (lon+l)"sizeof (char)) ;
  strcpy (ptr, cad) ; / * copia cad a nueva área de memoria
                         apuntada por ptr * /
  printf ("ptr = %s",ptr); / * cad está ahora en ptr * /
  free (ptr);             / * libera memoria de ptr * /
}
```
La expresión
```c
ptr = (char*) malloc((lon+l)*sizeof(char));
```
devuelve un puntero que apunta a una sección de memoria capaz de contener la cadena de longitud `strlen ( )` más un byte extra por el carácter `\ O` al final de la cadena.
```
r - - -1
360 Programación en C. Metodología, algoritmos y estructura de datos
8 % , I
Figura 11.4. Memoria obtenida por función malloc í ) .
```

## Precaución
El almacenamiento libre no es una fuente inagotable de memoria. Si la función `malloc ( )` se ejecuta con falta de memoria, se devuelve un puntero `NULL`. Es responsabilidad del programador comprobar siempre el puntero para asegurar que es válido, antes de que se asigne un valor al puntero. Supongamos, por ejemplo, que se desea asignar un array de 1.000 números reales en doble precisión:
```c
#define TOPE 1999
double *ptr-lista;
int i;
ptr-lista = (double*)malloc(lOOO*sizeof(double));
i f (ptr-lista == NULL)
{ puts ( " Error en la asignación de memoria " ) ;
  return -1; / * intentar recuperar memoria * /
}
for ( i = O ; i < 1000; i++)
  ptr-lista[i] = (double)*random(TOPE);
```
Si no existe espacio de almacenamiento suficiente, la función `malloc ( )` devuelve `NULL`. La escritura de un programa totalmente seguro, exige comprobar el valor devuelto por `malloc í )` para asegurar que no es `NULL`. `NULL` es una constante predefinida en G . Se debe incluir los archivos de cabecera `<stdlib.h>` para obtener la definición de `NULL`.
Asignación dinámica de memoria 361

**Ejemplo 11.2**
El programa `T E S T M E M` comprueba la cantidad de memoria que se puede asignar dinúmicamente (estú disponible). Para ello se llama a `malloc ( )`, solicitando en cada llamada 1.000 bytes de memoria.
```c
/ *
 * TESTMEM: programa para determinar memoria libre.
 */
#include <stdio.h>
int main()
{
  void * p ;
  int i;
  long m = 0;
  for ( i = I; ; i++)
  { p = malloc(1000);
    if (p == NULL) break;
    m += 1000;
  }
  printf ("\nTotal de memoria asignada %d\n",m);
  return O ;
}
```
Se asigna repetidamente 1 kB (Kilobytes) hasta que falla la asignación de memoria y el bucle se termina.

## Asignación de memoria de un tamaño desconocido
Se puede invocar a la función `malloc ( )` para obtener memoria para un array, incluso si no se conoce con antelación cuanta memoria requieren los elementos del array. Todo lo que se ha de hacer es invocar a `malloc ( )` en tiempo de ejecución, pasando como argumento el número de elementos del array multiplicado por el tamaño del tipo del array. El número de elementos se puede solicitar al usuario y leerse en tiempo de ejecución. Por ejemplo, este segmento de código asigna memoria para un array de `n` elementos de tipo `double`, el valor de `n` se conoce en tiempo de ejecución:
```c
double *ad;
int n;
printf ("Número de elementos del array: ' I ) ;
scanf ("%d", &n) ;
ad = (double*)malloc(n*sizeof(double));
```
En este otro ejemplo se declara un tipo de dato complejo, se solicita cuántos números complejos se van a utilizar, se reserva memoria para ellos y se comprueba que existe memoria suficiente. Al final, se leen los `n` números complejos.
```c
struct complejo
{ float x;
  float y;
};
int n, j;
struct complejo *p;
printf ("Cuantos números complejos: " ) ;
scanf ( "%d", &n) ;
float x, y;
-1
362 Programación en C. Metodologia, algoritmos y estructura de datos
p = (struct complejo*) malloc(n*sizeof(struct complejo));
if ( p == NULL)
{ puts("Fin de ejecución. Error de asignación de memoria. " );
  exit ( - 1);
}
for (j = O ; j<n; j + + , p + + )
{ printf("Parte real e imaginaria del complejo %d : ",j);
  scanf ( " % f %f",&p->x,&p->y);
}
```

## Uso de malioc ( ) para arrays multidimensionales

Un array bidimensional es, en realidad, un array cuyos elementos son arrays. Al ser el nombre de un array unidimensional un puntero constante, un array bidimensinal será un puntero a puntero constante (tipo `**`). Para asignar memoria a un array multidimensional, se indica cada dimensión del array de igual forma que se declara un array unidimensional. En el Ejemplo 1 1.3 se reserva memoria en tiempo de ejecución para una matriz de `n` filas y para cada fila `m` elementos.

Enel ejemplo, lasentencia `p = (int**) malloc (n*sizeof(int*)) ;` reservamemoriapara un array de `n` elementos, cada elemento es un puntero a entero (`int*`). Cada iteración del bucle `for` externo requiere por teclado, el número de elementos de la fila (`m`);reserva memoria para esos `m` elementos con la sentencia `p [ i 1 = ( int* ) mal loc (m*s i zeof ( int ) ) ;` a continuación lee los datos de la fila.

**Ejemplo 11.3**
```c
/ * matriz de n filas y cada fila de un número variable de elementos * /
#include <stdio.hi
#include cstdlib.h>
int main()
{
  int **p ;
  int n,m,i;
  do {
    printf ("\nNumero de filas: 'I); scanf ("%d",&n);
  } while (n<=O);
  p = (int**) malloc(n*sizeof(int*));
  for (i = O ; icn; i++)
  { int j;
    printf ("Número de elementos de fila %d 'I, i+l) ;
    scanf ( "%da',&m) ;
    p[i] = (int*)malloc(m*sizeof(int));
    for (j = O ; j<m; j + + )
      scanf ("%d",&p[il[ j l ) ;
  }
  return 1;
}
```"