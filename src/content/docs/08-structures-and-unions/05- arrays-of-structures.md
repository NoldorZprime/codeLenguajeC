---
title: Arrays de estructuras
description: A reference page in my new Starlight docs site.
---

"Se puede crear un array de estructuras tal como se crea un array de otros tipos. Los arrays de estructuras son idóneos para almacenar un archivo completo de empleados, un archivo de inventario, o cualquier otro conjunto de datos que se adapte a un formato de estructura. Mientras que los arrays proporcionan un medio práctico de almacenar diversos valores del mismo tipo, los arrays de estructuras le permiten almacenar juntos diversos valores de diferentes tipos, agrupados como estructuras.

Muchos programadores de C utilizan arrays de estructuras como un método para almacenar datos en un archivo de disco. Se pueden introducir y calcular sus datos de disco en arrays de estructuras y a continuación almacenar esas estructuras en memoria. Los arrays de estructuras proporcionan también un medio de guardar datos que se leen del disco.

La declaración de un array de estructuras `info-libro` se puede hacer de un modo similar a cualquier array, es decir,
```c
struct info-libro libros[100];
```
asigna un array de 100 elementos denominado `libros`.Para acceder a los miembros de cada uno de los elementos estructura se utiliza una notación de array. Para inicializar el primer elemento de `1ibros`,por ejemplo, su código debe hacer referencia a los miembros de `libros [ O I` de la forma siguiente:
```c
strcpy(libros[O].titulo, "C++ a su alcance " );
strcpy(1ibros[O] .autor, " Luis Joyanes " );
strcpy(1ibros[ O ] .editorial, "McGrdw-Hill') ;
libros[O] .anyo = 1999;
```
También puede inicializarse un array de estructuras en el punto de la declaración encerrando la lista de inicializadores entre llaves, `{ }`. Por ejemplo,
```c
struct info-libro libros[3] = { "C++ a su alcance " , "Luis Joyanes ",
                                 'McGraw-Hill",1999, "Estructura de datos " , "Luis Joyanes " ,
                                 "McGraw-Hill",1999, "Problemas en Pascal " , "Angel Hermoso",
                                 "McGraw-Hill",19971 ;
```
En el siguiente ejemplo se declara una estructura que representa a un número racional, un array de números racionales es inicializado con valores al azar.
308 Programación en C.Metodología, algoritmos y estructura de datos
```c
struct racional
{
  int N,
  int D;
};
struct racinal rs[4] = { 1,2, 2 , 3 , -4,7, O,l};
```

## Arrays como miembros

Los miembros de las estructuras puede ser asimismo arrays. En este caso, será preciso extremar las precauciones cuando se accede a los elementos individuales del array.

Considérese la siguiente definición de estructura. Esta sentencia declara un array de 1 O 0 estructuras, cada estructura contiene información de datos de empleados de una compañía.
```c
struct nomina
{
  char nombre [ 3 O 1 ;
  int dependientes;
  char departamento [ 10 1 ;
  float horas_dias[71; / * array de tipo float * /
  float salario;
} empleado [lo01 ; / * Un array de 100 empleados * /
```

**Ejemplo**
Una librería desea cafalogar su inventario de libros. El siguiente programa crea un array de 100 estructuras, donde cada estructura contiene diversos tipos de variables, incluyendo arrays.
```c
#include <stdio.h>
#include <ctype.h>
#include <stdlib.h>
struct inventario
{
  char titulo [25];
  char €echasub [ 2 O 1 ;
  char autor [ 3 0 1 ;
  int num;
  int pedido;
  €loat precio-venta;
};
int main ( )
{
  struct inventario libro[1001;
  int total = O ;
  char resp, b[211 ;
  do {
    printf ( " Total libros %d \n",(total+l));
    printf ("¿Cuál es el título?: " 1 ;
    gets(libro[totall .titulo);
    printf("iCuá1 es la fecha de publicación?: " ) ;
    gets ( libro [totalI . f echagub) ;
```
Estructuras y uniones
--
309
```c
    printf ("¿Quién es el autor?") ;
    gets(libro[total].autor);
    printf ("¿Cuántos libros existen?: " ) ;
    scanf ( "%d", &libro [totalI . num) ;
    printf("¿Cuántos ejemplares existen pedidos?: " 1 ;
    scanf ('%d",&libro[total].pedido);
    printf("¿Cuál es el precio de venta?: " ) ;
    gets (b);
    libro[total].precio-venta = atof(b); / * conversión a real * /
    f f lush (stdin);
    printf ("\n ¿ H a y más libros? (S/N)");
    scanf ("%e",&resp) ;
    f f lush (stdin);
    resp = toupper(resp); / * convierte a mayúsculas * /
    if (resp == 'S')
    { total++;
      continue;
    }
  } while (resp == ' S ' ) ;
  return O ;
}
```"