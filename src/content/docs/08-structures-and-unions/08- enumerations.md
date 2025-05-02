---
title: Enumeraciones
description: A reference page in my new Starlight docs site.
---

"Un `enum` es un tipo definido por el usuario con constantes de nombre de tipo entero. En la declaración de un tipo `enum` se escribe una lista de identificadores que internamente se asocian con las constantes enteras O, 1, 2, etc.

## Formato
```c
1. enum
{
  enumerador , enumerador , . . . enumerador
};
2. enum nombre
{
  enumerador , enumerador , . . . enumerador
};
```
Y
-7
312 Programación en C. Metodología, algoritmos y estructura de datos
En la declaración del tipo `enum` pueden asociarse a los identificadores valores constantes en vez de la asociación que por defecto se hace (O, 1, 2, etc.). Para ello se utiliza este formato:
```c
3. enum nombre
{
  enumeradorl = expresiÓn-constantel,
  enumerador = expresión-constante ,
  enumerador,= exprsesión-constante,
  . . .
};
```

**Ejemplo**

Usos tipicos de enUm
```c
enum Interruptor
{
  ENCENDIDO,
  APAGADO
};
enum Boolean
{
  FALSE,
  TRUE
};
```

**Ejemplo**
```c
enum
{
  ROJO, VERDE, AZUL
};
```
`define` tres constantes `ROJO`, `VERDE` y `AZUL` de valores iguales a O, 1 y 2, respectivamente. Los miembros datos de un `enum` se llaman enumeradores y la constante entera por defecto del primer enumerador de la lista de los miembros datos es igual a O. Obsérvese que, al contrario que `struct` y `union`, los miembros de un tipo `enum` se separan por el operador coma. El ejemplo anterior es equivalente a la definición de las tres constantes, `ROJO`, `VERDE` y `AZUL`, tal como:
```c
const int ROJO = O ;
const int VERDE = 1;
const int AZUL = 2;
```
En la siguiente declaración de tipo enumerado se le da un nombre al tipo
```c
enum dias-semana
{
  LUNES, MARTES, MIERCOLES, JUEVES, VIERNES, SABADO, DOMINGO
};
```
Una variable de tipo `enum dias-semana` puede tomar los valores especificados en la declaración del tipo. El siguiente bucle está controlado por una variable del tipo enumerado.
```c
enum dias-semana dia;
for (dia = LUNES; dia <= DOMINGO; dia++)
{
  . . .
```
n
Estructuras y uniones 313
```c
  printf ("%d ",dia);
}
```
La ejecución del bucle escribiría en pantalla: O 1 2 3 4 5 6.

A los enumeradores se pueden asignar valores constantes o expresiones constantes durante la declaración:
```c
enum Hexaedro
{
  VERTICES = 8,
  LADOS = 12,
  CARAS = 6
};
```

**Ejercicio**
El siguiente programa muestra el uso de la enumeracidn `boo1 ean`. El programa lee un texto y cuenta las vocales leídas. La función `vocal ( )` devuelve `T R U E` si el carácter de entrada es vocal.
```c
#include <stdio.h>
#include <ctype.h>
enum boolean
{
  FALSE, TRUE
};
enum boolean vocal(char c);
void main()
{
  char car;
  int numvocal = O ;
  puts("\nIntroduce un texto. Para terminar: INTRO
  while ( (car = getchar ( ) ) ! = ' \n')
  {
    if (vocal(tolower(car)) )
      numvocal++;
  }
  printf("\n Total de vocales leidas: %d\n",numvocal);
}
enum boolean vocal(char c)
{
  switch (c)
  {
    case 'a':
    case 'e':
    case 'ir:
    case ' o ' :
    case 'u':
      return TRUE;
    default:
      return FALSE;
  }
}
```
314 Programación en C. Metodología, algoritmos y estructura de datos

## `sizeof` de tipos de datos estructurados
El tamaño en bytes de una estructura, de una unión o de un tipo enumerado se puede determinar con el operador `sizeof`.

El siguiente programa extrae el tamaño de una estructura (`struct`), de una unión (`union`) con miembros dato idénticos, y de un tipo enumerado.
```c
/ * declara una union */
union tipo-union
{
  char c;
  int i;
  float f ;
  double d;
};
/ * declara una estructura */
struct tipo-estructura
{
  char c;
  int i;
  float f ;
  double d;
};
/ * declara un tipo enumerado */
enum monedas
{
  PESETA,
  DURO,
  CINCODUROS,
  CIEN
};
. . .
printf ("\nsizeof(tipo-estructura): %d\n",
        sizeof(struct tipo-estructura)1 ;
printf ("\nsizeof(tipo-union): Bd\n",
        sizeof(union tipo-union));
printf ("\nsizeof(monedas): %d\n",
        sizeof(enum monedas));
```
La salida que se genera con estos datos:
```
sizeof(tipo_estructura):15
sizeof(tipo-union): 8
sizeof(monedas): 2
```
## `typedef`

Un `typedef` permite a un programador crear un sinónimo de un tipo de dato definido por el usuario o de un tipo ya existente.
Estructuras y uniones 315

**Ejemplo**
Uso de `typedef` para declarar un nuevo nombre, `Longi t u d`, de tipo de dato `double`.
```c
. . .
typedef double Longitud;
Longitud Distancia (const struct Pto* p, const struct Pto* p2)
{
  . . .
  . . .
  Longitud longitud = sqrt(r-cua);
  return longitud;
}
```

**Otros ejemplos:**
```c
typedef char* String;
typedef const char* string;
```
Puede declararse un tipo estructura o un tipo unión y a continuación asociar el tipo estructrura a un nombre con `typedef`.

**Ejemplo**
Declaración del tipo de dato `complejo` y asociación a `complex`.
```c
struct complejo
{
  float x,y;
};
typedef struct complejo complex;
/ * definición de un array de complejos * /
complex v[121;
```
La ventaja de `typedef` es que permite dar nombres L; tipos LV datos más acordes con lo que representan en una determinada aplicación."