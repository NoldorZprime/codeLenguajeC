---
title: Estructuras
description: A reference page in my new Starlight docs site.
---

"Los arrays son estructuras de datos que contienen un número determinado de elementos (su tamaño) y todos los elementos han de ser del mismo tipo de datos; es una estructura de datos homogénea. Esta característica supone una gran limitación cuando se requieren grupos de elementos con tipos diferentes de datos cada uno. Por ejemplo, si se dispone de una lista de temperaturas, es muy Útil un array; sin embargo, si se necesita una lista de información de clientes que contengan elementos tales como el nombre, la edad, la dirección, el número de la cuenta, etc., los arrays no son adecuados. La solución a este problema es utilizar un tipo de dato registro, en C llamado estructura.

Los componentes individuales de una estructura se llaman miembros. Cada miembro (elemento) de una estructura puede contener datos de un tipo diferente de otros miembros. Por ejemplo, se puede utilizar una estructura para almacenar diferentes tipos de información sobre una persona, tal como nombre, estado civil, edad y fecha de nacimiento. Cada uno de estos elementos se denominan nombre del miembro.

Una estructura puede contener cualquier número de miembros, cada uno de los cuales tiene un nombre único, denominado nombre del miembro. Supongamos que se desea almacenar los datos de una colección de discos compactos (CD) de música. Estos datos pueden ser:
* Título.
* Artista.
* Número de canciones.
* Precio.
* Fecha de compra.

La estructura CD contiene cinco miembros. Tras decidir los miembros, se debe decidir cuáles son los tipos de datos para utilizar por los miembros. Esta información se representa en la tabla siguiente:
```
~~
Nombre miembro       Tipo de dato
Título              Array de caracteres de tamaño 30.
Artista             Array de caracteres de tamaño 25.
Número de canciones Entero.
Precio              Coma flotante.
Fecha de compra     Array de caracteres de tamaño 8.
~~ ~
```
La Figura 9.1 contiene la estructura CD, mostrando gráficamente los tipos de datos dentro de la estructura. Obsérvese que cada miembro es un tipo de dato diferente.

```
I
Título                Ay, ay, a y , cómo se a l e j a el sol.
Artista               NO me p i s e s la sandalias.
Número de canciones   10
Precio                2222.25
Fecha de compra        8 - 10 - 1999
~~ ~
Figura 9.1. Representación gráfica d e una estructura CD.
```
IC-
Estructuras y uniones 297

## Declaración de una estructura

Una estructura es un tipo de dato definido por el usuario, que se debe declarar antes de que se pueda utilizar. El formato de la declaración es:
```c
struct <nombre de la estructura>
{
  <tipo de dato miembro > <nombre miembro>;
  <tipo de dato miembro> <nombre miembro>;
  <tipo de dato miembro> <nombre miembro>;
  . . .
};
```
La declaración de la estructura CD es
```c
struct coleccion-CD
{
  char titulo[30] ;
  char artista[25];
  int num-canciones;
  float precio;
  char f echa-compra [ 8 1 ;
};
```

**Ejemplo**
```c
struct complejo
{
  float parte-real, parte-imaginaria;
};
```
En este otro ejemplo se declara el tipo estructura `venta` ;
```c
struct venta
{
  char vededor [ 3 O I ;
  unsigned int codigo;
  int inids-articulos;
  float precio-unit;
};
```
t i
,

## Definición de variables de estructuras

AI igual que a los tipos de datos enumerados, a una estructura se accede utilizando una variable o 1 variables que se deben definir después de la declaración de la estructura. Del mismo modo que sucede en otras situaciones, en C existen dos conceptos similares a considerar, declaración y dejnición. La diferencia técnica es la siguiente, una declaración especifica simplemente el nombre y el formato de la estructura de datos, pero no reserva almacenamiento en memoria; la declaración especifica un nuevo tipo de dato: `struct <nombre-estructura>`.Por consiguiente, cada definición de variable para una estructura dada crea un área en memoria en donde los datos se almacenan de acuerdo al formato estructurado declarado.

Las variables de estructuras se pueden definir de dos formas: 1) listándolas inmediatamente después de la llave de cierre de la declaración de la estructura, o 2) listando el tipo de la estructura creado seguida por las variables correspondientes en cualquier lugar del programa antes de utilizarlas. La definición y declaración de la estructura `colecciones-CD` se puede hacer por cualquiera de los dos métodos:
I
F
298 Programación en C.Metodología, algoritmos y estructura de datos
```c
1. struct colecciones-CD
{ char titulo[301 ;
  char artistar251 ;
  int num-canciones;
  float precio;
  char fecha_compra[8];
} cdl, cd2, cd3;
2. struct colecciones-CD c d l , cd2, cd3;
```

## Otros ejemplos de definición/declaración

Considérese un programa que gestione libros y procese los siguientes datos: título del libro, nombre del autor, editorial y año de publicación. Una estructura `info-libro` podría ser:
```c
struct info-libro
{
  char titulo[60];
  char autor [ 3 O I ;
  char editorial [30];
  int anyo;
};
```
La definición de la estructura se puede hacer así:
```c
1.struct info-libro
{ char titulo[601;
  char autor [301;
  char editorial [301;
  int anyo ;
} librol, llbro2, libro3;
2.struct info-libro librol, libro2, libro3;
```
Ahora se nos plantea una aplicación de control de los participantes en una carrera popular, cada participante se representa por los datos: nombre, edad, sexo, categoría, club y tiempo. El registro se representa con la estructura `corredor` :
```c
struct corredor
{
  char nombre [ 40 I ;
  int edad;
  char sexo;
  char categoria[201 ;
  char clubL261 ;
  float tiempo;
};
```
La definición de variables estructura se puede hacer así:
```c
struct corredor vl, sl, cl;
```

## Uso de estructuras en asignaciones

Como una estructura es un tipo de dato similar a un `int` o un `char`,se puede asignar una estructura a otra. Por ejemplo, se puede hacer que `libro3`,`libro4` y `libro5` tengan los mismos valores en sus miembros que `1ibrol`.Por consiguiente, seda necesario realizar las siguientes sentencias:
7
Estructuras y uniones 299
I-
```c
libro3 = librol;
libro4 = librol;
libro5 = librol;
```
De modo alternativo se puede escribir
```c
libro4 = libro5 = libro6 = librol;
```

## Inicialización de una declaración de estructuras

Se puede inicializar una estructura de dos formas. Se puede inicializar una estructura dentro de la sección de código de su programa, o bien se puede inicializar la estructura como parte de la definición. Cuando se inicializa una estructura como parte de la definición, se especifican los valores iniciales, entre llaves, después de la definición de variables estructura. El formato general en este caso:
```c
struct <tipo> <nombre vdriable estructura> =
{ valor miembro,
  valor miembro ,
  valor miembro
  . . .
};
```
```c
struct info-libro
{
  char titulo[bOl ;
  char auto[30];
  char editorial [30];
  int anyo;
} librol = {"Maravilla del saber ",l'Lucas Garcia " , "McGraw-Hill", 1999);
```
Otro ejemplo podría ser:
```c
struct coleccion-CD
{
  char titulo[30];
  char artista[25];
  int num-canciones;
  float precio;
  char fecha-compra[8];
} cdl = {
  "El humo nubla tus o j o s " ,
  "col Porter " ,
  15,
  2545,
  " O 2 / 6/ 99I'
};
```
Otro ejemplo con la estructura `corredor`:
```c
struct corredor vl = {
  "Salvador Rapido",
  29,
  'V',
  'seni or 'I ,
  'Independiente',
  0.0
};
```
300 Programación en C. Metodología, algoritmos y estructura de datos
b

## El tamaño de una estructura

El operador `sizeof` se aplica sobre un tipo de datos, o bien sobre una variable. Se puede aplicar para determinar el tamaño que ocupa en memoria una estructura. El siguiente programa ilustra el uso del operador `s izeof` para determinar el tamaño de una estructura:
```c
#include <stdio.h>
/ * declarar una estructura Persona * /
struct persona
{
  char nombre [30I ;
  int edad;
  float altura;
  float peso;
};
void main( )
{
  struct persona mar;
  printf ("Sizeof(persona): %d \n",sizeof (mar)) ;
}
```
Al ejecutar el programa se produce la salida:
```
Sizeof (persona) : 40
```
El resultado se obtiene determinando el número de bytes que ocupa la estructura
```
Persona Miembros     dato    Tamaño (bytes)
nombre [ 3 0 1     char(1)           30
edad                int (2)            2
altura              float (4)          4
peso                float ( 4)          4
Total                                40
```"