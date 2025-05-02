---
title: Lectura de cadenas
description: A reference page in my new Starlight docs site.
---

La lectura usual de datos se realiza con la función `scanf ( )`, cuando se aplica a datos cadena el código de formato es `%s`.La función da por terminada la cadena cuando encuentra un espacio (un blanco) o fin de línea. Esto puede producir anomalías al no poder captar cadenas con blancos entre caracteres. Así, por ejemplo, trate de ejecutar el siguiente programa:
```c
/ * Este programa muestra cómo scanfolee datos cadena * /
#include <stdio.h>
void main()
{
  char nombre [ 30 ] ; / * Define array de caracteres * /
  scanf ("%s",nombre) ;    / * Leer la cadena * /
  print f ( "%s \n",nombre) ; / * Escribir la cadena nombre * /
}
```
El programa define `nombre` como un array de caracteres de 30 elementos. Suponga que introduce la entrada `Pepe Margolles`,cuando ejecuta el programa se visualizará en pantalla `Pepe`.Es decir, la palabra `Margolles` no se ha asignado a la variable cadena `nombre`. La razón es que la función `scanf ( )` termina la operación de lectura siempre que se encuentra un espacio en blanco o fin de línea. Así pues, ¿,cuálserá la mejor forma para lectura de cadenas, cuando estas cadenas contienen más de una palabra (caso muy usual)? El método recomendado será utilizar una función denominada `gets ( )`.
La función `gets ( )`permitirá leer la cadena completa, incluyendo cualquier espacio en blanco, termina al leer el carácter de fin de línea.
El prototipo de la función está en el archivo `st d L O . h`. La función asigna la cadena al argumento transmitido a la función, que será un array de caracteres o un puntero (`char*`)a memoria libre, con un número de elementos suficiente para guardar la cadena leída. Si ha habido un error en la lectura de la cadena, devuelve `NULL`. i
```c
I/ * Lectura de caracteres hastd fin de líned * /
!
Cadenas 383
char b[81] ;
gets (b);
```

**Ejemplo 12.2**
Entrada y salida de cadenas. Lectura de palabrus de 79 curucteres de rncúcima longitud en una memoria intermedia (bufer) de 80 caracteres.
```c
#include <stdio.h>
void main ( )
{ char palabra[80];
  do {
    scanf ( " % S I ' , palabra) ;
    i f ( ! f e o f (stdin))
      print f ( I' \ t \ 'I %s\ 'I \ n",pal abr a ) ;
  } while (!feof(stdin));
}
```

**Ejecución**
```
Hoy es 1 de Enero del 2000.
	'Hoy'
	'es'
	'1'
	'de'
	'Enero'
	'del'
	'2000.'
Mañana es Domingo.
	'Mañana'
	'es'
	'Domingo.'
```
Al ejecutar este programa el número de veces que se repite el bucle `while` dependerá del número de palabras introducidas, incluido el carácter de control que termina el bucle control -z.

El bucle anterior se ejecuta I1 veces, una vez por cada palabra introducida (incluyendo Control - z que detiene el bucle). Cada palabra de la entrada (`stdin`) hace eco en la salida (`stdout`). El flujo de salida no «se limpia» hasta que el flujo de entrada encuentra el final de la línea.

Cada cadena se imprime encerrada entre comillas. No será fin de archivo (`f eof ( )` distinto de cero) mientras que no se pulse Control-Z (en Windows/DOS), que envía el carácter final de archivo del flujo estándar de entrada `stdin`.

**Advertencia**
Los signos de puntuación, apóstrofes, comas, puntos, etc., se incluyen en las cadenas, pero no así los caracteres espacios en blanco (blancos, tabulaciones, nuevas líneas, etc.).
Y .
384 Programación en C. Metodología, algoritmos y estructura de datos

**Ejemplo 12.3**
El siguiente programa solicita introducir un nombre, comprueba la operación y lo escribe en pantalla.
```c
#include <stdio.h>
int main()
{ char nombre[80];
  printf ("\nIntroduzca su nombre: " ) ;
  if (gets(nombre)! = NULL)
    printf ( " Hola %s ¿cómo esth usted?",nombre);
  return O ;
}
```
si al ejecutarlo se introduce ia cadena `M a d Mar tind`,el array `nombre` almacenará los caracteres siguientes:
```
nombre
M a r a M a r t i n = i . ' \ o
```

**Ejemplo 11.4**
El siguiente programa lee y escribe el nombre, dirección y teléfono de un usuario.
```c
#include <stdio.h>
void main()
{
  char Nombre [ 32 ];
  char Calle [32];
  char Ciudad[27];
  char Provincia[27];
  char CodigoPostal[15] ;
  char Telefono[10] ;
  print f
  print f
  printf
  printf
  print f
  print f
  / * vis
  printf ("\nNombre: " ) ; gets (Nombre);
  printf ("\nCalle: " ) ; gets (Calle);
  printf ("\nCiudad: " ) ; gets (Ciudad);
  printf ("\nProvincid: " ) ; gets (Provincia);
  printf ("\nCodigo Postal: " ) ; gets(CodigoPostal);
  printf ("\nTelefono: " ) ; gets (Telefono);
  alizar cadenas * /
  printf ("\n\n%s \ t %s\n",Nombre,Calle);
  printf ("%s \t %s\n",Ciudad,Provincia);
  printf ( " %s \t %s\n",CodigoPostal,Telefono);
}
```
O La llamada `getc ( cad)` lee todos los caracteres hasta encontrar el carácter fin de línea, `\ n I`, que en la cadena `cad` se sustituye por `' \ O I`.
Cadenas 385

## Función getchar ( )

La función `getchar ( )` se utiliza para leer carácter a carácter. La llamada a `getchar ( )` devuelve el carácter siguiente del flujo de entrada `stdin`.En caso de error, o de encontrar el fin de archivo, devuelve `EOF` (macro definida en `stdio.h`).

**Ejemplo 12.5**
El siguiente programa cuenta las ocurrencias de la letra `' t '` delflujo de entrada. Se diseña un bucle `while` que continúa ejecutándose mientras que la.finci6n `getchar ( )` lee caracteres y se asignan a `car`.
```c
#include <stdio.h>
int main()
{
  int car;
  int cuenta = O ;
  while ( (car = getchar ( ) ) ! =EOF)
    if (car == 't') ++cuenta;
  printf ("\n%d letras t \n",cuenta) ;
  return O ;
}
```

**Nota**
La salida del bucle es con Control- z.

## Función putchar ( )

La función opuesta de `getchar ( )` es `putchar ( )`. La función `putchar (` se utiliza para escribir en la salida (`stdout`) carácter a carácter. El carácter que se escribe es el transmitido como argumento. Esta función (realmente es una macro definida en `s t d i o .h`)tiene como prototipo:
```c
int putchar(int ch);
```

**Ejercicio 12.1**
El siguiente programa hace «eco>>delpujo de entrada y convierte las palabras en palabras iguales que comienzan con letra mayúscula. Es decir, si la entrada es "poblado de peñas rubias" se ha de convertir en " Poblado De Peñas Rubias". Para realizar esa operación se recurre a la función `toupper (car)`que devuelve el equivalente mayúscula de `car` si `car` es una letra minúscula. El archivo de cabecera necesario para poder utilizar la función `toupper (car)`es `<ctype . h>`.
```c
#include <stdio.h>
#include <ctype.h>
int main()
{
  char car, pre = '\n';
  while ( (car=getchar( ) ) ! =EOF)
  { if (pre == '\n' || pre == ' ' )
      putchar(toupper(car));
    else
      putchar (car);
    pre = car;
  }
  return O ;
}
```
386 Programación en C. Metodología, algoritmos y estructura de datos

**Ejeciución**
```
poblado de peñas rubias con capital en Lupiana
Poblado De Peñas Rubias Con Capital En Lupiana
```

**Análisis**
La variable `pre` contiene el carácter leído anteriormente. El algoritmo se basa en el hecho de que si `pre` es un blanco o el carácter nueva línea, entonces el carácter siguiente `car` será el primer carácter de la siguiente palabra. En consecuencia, `car`,se reemplaza por su carácter mayúscula equivalente: `car + 'A' - 'a'`.

## Función puts ( )

La función `puts ( )` escribe en la salida una cadena de caracteres, incluyendo el carácter fin de línea por los que situa el puntero de salida en la siguiente línea. Es la función recíproca de `gets ( )`; si `g e t s ( )` capta una cadena hasta fin de línea, `puts (` escribe una cadena y el fin de línea. El prototipo de la función se encuentra en `stdio`:
```c
int puts(const char *s);
```

**Ejercicio 12.2**
El programa siguiente lee una frase y escribe en pantalla tantas líneas como palabras tiene la frase; cada línea que escribe, a partir de la primera, sin la última palabra de la línea anterior:

**Análisis**
La función `sgtepal ( )` explora los caracteres pasados en `p` hasta que encuentra el primer blanco (separador de palabras). La exploración se realiza de derecha a izquierda, en la posición del blanco asigna `\ O` para indicar fin de cadena. I
```c
#include <stdio.h>
#include <string.h>
void sgtepal(char* p);
void main()
{ char linea [ 81 ] ;
  printf("\n\tIntroduce una linea de caracteres.\n");
  gets (linea);
  while (*linea)
  { puts (linea);
    sgtepal (linea);
  }
}
void sgtepal(char* p)
{ int j ;
  j = strlen(p)-1;
  while(j>O && p [ j ] != ' ' )
    p [ j ] = '\ O ' ;
  j--;
}
```
Cadenas 387
```c
i
Ejecucíón
Introduce una linea de caracteres.
Erase una vez la Mancha
Erase una vez la Mancha
Erase una vez La
Erase una vez
Erase una
Erase
i 12.2.4. Funciones getch( ) y getche ( )
i n t J ;
j = strlen(p)-1;
while(j>O && p [ j ] != ' ' )
  p[11 = ' \ O ' ;
j--;
Introduce una linea de caracteres.
Erase una vez la Mancha
Erase una vez la Mancha
Erase una vez La
Erase una vez
Erase una
Erase
```

## Funciones getch ( ) y getche ( )

Estas dos funciones no pertenecen a ANSI C, sin embargo, se incorporan por estar en casi todos los compiladores de C. Ambas funciones leen un carácter tecleado sin esperar el retorno de carro. La diferencia entre ellas reside en que con `getch ( )` el carácter tecleado no se visualiza en pantalla (no hace eco en la pantalla), y con `getche (` si hay eco en la pantalla. La llamada a cada una de ellas:
```c
car = getch();
car = getche();
```
Estas dos funciones no pertenecen a ANSI C, sin embargo, se incorporan por estar en casi todos los compiladores de C. Ambas funciones leen un carácter tecleado sin esperar el retorno de carro. La diferencia entre ellas reside en que con `getch ( )` el carácter tecleado no se visualiza en pantalla (no hace eco en la pantalla), y con `getche ( )` si hay eco en la pantalla. La llamada a cada una de ellas:
```c
car = getch();
car = getche();
```
El prototipo de ambas funciones se encuentra en al archivo `conio .h`
```c
i n t getch(void);
i n t getche (void);
```

**Ejemplo 12.6**
La siguiente funcicín devuelve el carácter `s` o `N`:
```c
I
: #include <conio.h>
#include <ctype.h>
i
int respuesta ( )
{ char car;
  do
    car = toupper(getche( ));
  while (car ! = 'S' && car !='N');
  return car;
}
```