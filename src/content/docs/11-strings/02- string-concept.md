---
title: Concepto de cadena
description: A reference page in my new Starlight docs site.
---

Una cadena (también llamada constante de cadena o literal de cadena) es un tipo de dato compuesto, un array de caracteres (`char`), terminado por un carácter nulo (`'\\0'`), `NULL` (Fig. 12.1). Un ejemplo es `" ABC "`.
Cuando la cadena aparece dentro de un programa se verá como si se almacenarán cuatro elementos: `' A '`, `' B '`, `' c '` y `' \\0 '`. En consecuencia, se considerará que la cadena `"ABC"` es un array de cuatro elementos de tipo `char`.El valor real de esta cadena es la dirección de su primer carácter y su tipo es un puntero a `char`.Aplicando el operador `*` a un puntero a `char` se obtiene el carácter que forma su contenido; es posible también utilizar aritmética de direcciones con cadenas:
* `* "ABC "` es i g u a l a `' A '`
* `("ABC" + 1)` es i g u a l a `' B '`
* `(" A B C " + 2 )` es i g u a l a `' C '`
* `("ABC" + 3 )` e s i g u a l a `' \\0 '`

De igual forma, utilizando el subíndice del array se puede escribir:
`"ABC"[0]` es i g u a l a `'A'`
`"ABC"[1]` es i g u a l a `'B'`
`"ABC"[2]` es i g u a l a `'C'`
`"ABC"[3]` es i g u a l a `'\\0'`

```
(a) L a c a d e n a d e t e s t
(b L a c a d e n a d e t e s t \ o
Figura 12.1. (a) array de caracteres; (b)cadena de caracteres.
```
de una cadena en C es siempre i la longitud de la cadena y `'\\0'`. `cad` tiene ocho caracteres; `'L'`, `'u'`, `' p '`, `'i'`, `'a'`, `l n`, , `'a'`
Ejemplos
1.  `char cad [ ] = "Lupiana" ;`
2.  `printf ("%s",cad) ;`
    el sistema copiará caracteres de `cad` a `stdout` (pantalla) hasta que el carácter `NULL`, `' \\0 '`, se encuentre.
3.  `scanf ( ' ' % S I ' , cad) ;`
    el sistema copiará caracteres desde `stdin` (teclado) a `cad` hasta que se encuentre un carácter espacio en blanco o fin de línea. El usuario ha de asegurarse que el buffer `cad` esté definido como una cadena de caracteres lo suficiente grande para contener la entrada.
Cadenas 381
Las funciones declaradas en el archivo de cabecera `<string . h>` se utilizan para manipular cadenas.

## Declaración de variables de cadena

Las cadenas se declaran como los restantes tipos de arrays. El operador postfijo `[ ]` contiene el tamaño máximo del objeto. El tipo base, naturalmente, es `char`,o bien `unsigned char`:
```c
char texto [ 811 ; / * una línea de caracteres de texto * /
char orden [ 4O ] ; / * cadena utilizada para recibir una orden del
unsigned char datos; / * puede contener cualquier carácter ASCII * /
```
teclado * /
El tipo `unsigned char` puede ser de interés en aquellos casos en que los caracteres especiales presentes puedan tener el bit de orden alto activado. Si el carácter se considera con signo, el bit de mayor peso (orden alto) se interpreta como hit de signo y se puede propagar a l a posición de mayor orden (peso) del nuevo tipo.

Observe que el tamaño de la cadena ha de incluir el carácter `\ 0`. En consecuencia, para definir un array de caracteres que contenga la cadena `"ARCDEF"`, escriba
```c
char UnaCadena [ 7 ] ;
```
encontrar una declaración como ésta:
s. Es un puntero a un car&%er(el de una asignada,

## Inicialización de variables de cadena

Todos los tipos de arrays requieren una inicialización (iniciación) que consiste en una lista de valores separados por comas y encerrados entre llaves.
```c
char texto[81] = " E s t o es una cadend.";
char textodemo[255] = "Esta es una cadena muy larga";
char cadenatest[] = "¿Cuál es la longitud de esta cadena?";
```
Las cadenas `texto` y `textodemo` pueden contener 80 y 254 caracteres respectivamente más el carácter nulo. La tercera cadena, `cadenatest`,se declara con una especificación de tipo incompleta y se completa sólo con el inicializador. Dado que en el literal hay 36 caracteres y el compilador añade el carácter `\O'`, un total de 37 caracteres se asignarán a `cadenatest`.

Ahora bien, una cadena no se puede inicializar fuera de la declaración. Por ejemplo, si trata de hacer
```c
Unacadena = "ABC";
```
C le dará un error al compilar. La razón es que un identificador de cadena, como cualquier identificador de array se trata como un valor de dirección, como un puntero constante. ¿Cómo se puede inicializar una cadena fuera de la decluración? Más adelante se verá, pero podemos indicar que será necesario utilizar una función de cadena denominada `strcpy ( )`.
382 Programación en C. Metodología, algoritmos y estructura de datos

**Ejemplo 12.1**
Las cadenas terminan con el carácter nulo. Así en el siguiente programa se muestra que el carácter `NULL` (`'\\ 0 'I`) se añade a la cadena:
```c
#include <stdio.h>
int main( )
{
  char S [ 5 ] = " A B C D " ;
  for (int i = O ; i < 5; i++)
    print f ( "S[ %dl = %c \n", i , S [ i ] ) ;
  return O ;
}
```

**Ejecuc i Ón**
```
S [ O ] = A
S[1] = B
S[21 = C
S [ 3 ] = D
S [ 4 ] =
```

**Comentario:** Cuando el carácter `NUL,L` se mdndd imprimir, no escribe nada."