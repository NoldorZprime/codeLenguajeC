---
title: Elementos de un programa
description: A reference page in my new Starlight docs site.
---

Un programa C consta de un o más archivos. Un archivo es traducido en diferentes fases. La primera fase es el preprocesador, que realiza la inclusión de archivos y la sustitución de macros. El preprocesador se controla por directivas introducidas por líneas que contiene **#** como primer carácter. El resultado del preprocesador es una secuencia de ***tokens***.

## Tokens (elementos léxicos de los programas)

Existen cinco clases de ***tokens***: identificadores, palabras reservadas, literales, operadores y otros separadores.

## Identificadores 

Un ***identificador*** es una secuencia de caracteres, letras, dígitos y subrayados (_). El primer carácter debe ser una letra (algún compilador admite carácter de subrayado). Las letras mayúsculas y minúsculas son diferentes. 

nombre-clase                Indice              Dia_Mes_anyo
elemento_mayor              Cantidad_Total      Fecha-Compra-casa
a                           Habitacion120       1

En Borland C/C++ el identificador puede ser de cualquier longitud; sin embargo, el compilador ignora cualquier carácter fuera de los 32 primeros.

C es ***sensible a las mayúsculas***. Por consiguiente, C reconoce como distintos los identificadores **ALFA**, **alfa** y **ALFa**. (Le recomendamos que utilice siempre el mismo estilo al escribir sus identificadores.) Un consejo que puede servir de posible regla puede ser:

1. Escribir identificadores de variables en letras minúsculas.
2. Constantes en mayúsculas.
3. Funciones con tipo de letra mixto: mayúsculas/minúsculas. 

### Reglas básicas de formación de identificadores 

1. Secuencia de letras o dígitos; el primer carácter puede ser una letra o un subrayado (compiladores de Borland, entre otros).
2. Los identificadores son sensibles a las mayúsculas: ***minun*** es distinto de ***MiNum***
3. Los identificadores pueden tener cualquier longitud, pero sólo son identificativos los 32 primeros (ése es el caso de Borland y Microsoft).
4. Los identificadores no pueden ser palabras reservadas, tales como `if`, `switch` o `else`.

## Palabras reservadas 

Una palabra reservada ***(keyword o resewed word)***, tal como `void` es una característica del lenguaje C asociada con algún significdo especial. Una palabra reservada no se puede utilizar como nombre de identificador o función.

~~~c
void void(){       //Error
    // ...                 
    int char;      // Error
    // ...
}
~~~

Los siguientes identificadores están reservados para utilizarlos como palabras ***reservadas***, y no se deben emplear para otros propósitos.

asm                                     enum                    signed
auto                                    extern                  sizeof
break                                   float                   static
case                                    for                     struct
char                                    goto                    switch
const                                   if                      typedef
continue                                int                     union
default                                 long                    unsigned
do                                      register                void
double                                  return                  volatile
else                                    short                   while

## Comentarios
Ya se ha expuesto antes que los comentarios en C tienen el formato:

`/*...*/`

Los comentarios se encierran entre `/*` y `*/` pueden extenderse a lo largo de varias líneas.

`/* Titulo: Demo-uno por Mr. Sanchez */`

Otra forma, el comentrario en dos líneas:

~~~
/*
* Cabecera del programa text-uno
* Autor: J. R.
*/
~~~

## Signos de puntuación y separadores 

Todas las sentencias deben terminar con un punto y coma, Otros signos de puntuación son:

`!  %   &   *   ()  -   <>  =   {}`
`[] \   ;   :   ?   ,   .   /   "`

Los separadores son espacios en blanco, tabulaciones, retornos de carro y avances de línea.

## Archivos de cabecera

Un archivo de cabecera es un archivo especial que contiene declaraciones de elementos y funciones de biblioteca. Para utilizar macros, constantes, tipos y funciones almacenadas en una biblioteca, un programa debe utilizar la directiva `#include` para insertar el archivo de cabecera correspondiente. Por ejemplo, si un programa utiliza la función `pow()` que se alamcena en la biblioteca matemática `math.h`, debe contener la directiva `#include <math.h>` para hacer que el contenido de la biblioteca matemática esté disponible a un programa. La mayoría de los programas contienen líneas como ésta al principio, que se incluyen en el momento de la compilación.

~~~c
#include <stdio.h>
/* o bien */
#include "stdio.h"
~~~
