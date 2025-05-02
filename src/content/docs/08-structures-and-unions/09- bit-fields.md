---
title: Campos de bit
description: A reference page in my new Starlight docs site.
---

"El lenguaje c permite realizar operaciones con los bits de una palabra. Ya se han estudiado los operadores de manejo de bits: >>, <<, . . . Con los campos de bits, C permite acceder a un número de bits de una palabra entera. Un campo de bits es un conjunto de bits adyacentes dentro de una palabra entera. La sintaxis para declarar campos de bits se basa en la declaración de estructuras. El formato general:
```c
struct identificador-campo {
  tipo nombrel: longitudl;
  tipo nombre2: longitud2;
  tipo nombre3: longitud3;
  tipo nombren: longitudn;
};
```
t
Programación en C.Metodología, algoritmos y estructura de datos
`tipo` ha de ser entero, `int`;generalmente `unsigned int`
`longitud` es el número de bits consecutivos que se toman

**Ejemplo 9.3**
En este ejemplo se declara un campo de bits para representar en formato comprimido el día, mes aiio (los dos últimos dígitos) y si el año es bisiesto.
```c
struct fecha {
  unsigned dia: 5;
  unsigned mes: 4;
  unsigned año: 7;
  unsigned bisiesto: 1;
};
```

**Ejemplo**
El siguiente ejemplo muestra cómo puede utilizarse campos de bits para representar .si están o no conectados diversos componentes eléctricos. Cada componente se representa con un pag, con un bit; cuando esté puesto a cero es que no está conectado, cuando esté puesto a uno está conectado.
```c
struct componentes {
  unsigned diodo: 1;
  unsigned resistencia: 1;
  unsigned amperimetro: 1;
  unsigned transistor: 1;
  unsigned condensador: 1;
  unsigned inductancia: 1;
};
```
Los campos individuales se referencian como cualquier otro miembro de una estructura: selector punto ( `.` ). Por ejemplo,
```c
struct componentes ct;
ct.diodo = 1;
if (ct.amperimetro)
{
}
```
Al declarar campos de bits, la suma de los bits declarados puede exceder el tamaño de un entero; en ese caso se emplea la siguiente posición de almacenamiento entero. No está permitido que un campo de bits solape los límites entre dos `int`.

Al declarar una estructura puede haber miembros que sean variables y otros campos de bits. La siguiente estructura tiene esta característica:
```c
struct reg-estudiante{
  char nombre [ 3 3 1 ;
  char ape111 [ 3 3 1 ;
  char ape112 [331 ;
  unsigned masculino: 1;
  unsigned femenino: 1;
  unsigned curso: 3 ;
};
```
Estructuras y uniones 317
Los campos de bits se utilizan para rutinas de encriptación de datos y fundamentalmente para ciertos interfaces de dispositivos externos. Presentan ciertas restricciones. Así, no se puede tomas la dirección de una variable campo de bits; no puede haber arrays de campos de bits; no se puede solapar fronteras de `int`.Depende del procesador que los campos de bits se alineen de izquierda a derecha o de derecha a izquierda (conviene hacer una comprobación para cada procesador, utilizando para ello un `union` con variable entera y campos de bits).

**Ejemplo**
Se tiene la función `pet icion-acceso í 1` capaz de direccionar una posición de memoria de 8 bits si recibe como argumento una variable llamada `ochobits`. Con esta variable controla a través de cada bit las peticiones de acceso a cada uno de los ocho periféricos distintos con que trabaja; eventos externos son los que se encargan de cargar la variable `ochobits`.

Se quiere escribir una función que determine cuantos accesos se producen por cada periférico en un bucle de 1000 llamadas a la función `peticion-acceso ( )`. Se supone que cada llamada sólo activa un periférico.

**Análisis**
El tipo de la variable `ochobits` va a ser una estructura de campos de bits, cada campo con longitud 1; por lo que puede tener dos estados, O o 1, para indicar no acceso o sí acceso. Un array de 8 elementos, tantos como periféricos se utiliza para contar los accesos a cada periférico.
```c
/ * Tipo estructura de campos de bits * /
struct perifericos{
  unsigned perfl: 1;
  unsigned perf2: 1;
  unsigned perf3: 1;
  unsigned perf4: 1;
  unsigned perf5: 1;
  unsigned perfó: 1;
  unsigned perf7: 1;
  unsigned perf8: 1;
};
/ * Prototipo de función peticion-acceso0 * /
void petition-acceso (const struct perifericos ochobits);
/ * Función que contabiliza los accesos a cada periférico. * /
void accesosgerf(int acceper[])
{
  int i;
  const struct perifericos ochobits;
  const neventos=1000;
  for (izo; i<8; )
    accper [i++l= 0;
  / * Bucle principal de 1000 llamadas * /
  for (¡=O; i<neventos; i++)
  {
```
318 Programación en C.Metodología, algoritmos y estructura de datos
```c
    petition-acceso(ochobits);
    if (ochobits.perf1)
      ++acceper[O I ;
    elseif (ocho.bits.perf2);
      ++acceper [ 13 ;
    elseif (ocho.bits.perf3);
      ++acceper[2];
    elseif (ocho.bits.perf4);
      ++acceper [ 3 I ;
    elseif (ocho.bits.perf5);
      ++acceper [ 4 3 ;
    elseif (ocho.bits.perf6);
      ++acceper[ 51 ;
    elseif (ocho.bits.perf7);
      ++acceper[ 61 ;
    elseif (ocho.bits.perf8);
      ++acceper [7];
  }
}
```

**Ejemplo**
Haciendo uso de una estructura de campo de bits y de una `union`,en este ejercicio se escribe un programa para visualizar la decodijkación en bits de cualquier carácter leído por teclado.

**Análisis**
Se declara un tipo estructura campo de bits, con tantos campos como bits tiene un byte, que a su vez es el almacenamiento de un carácter. La decodificación es inmediata declarando una `union` entre una variable carácter y una variable campo de bits del tipo indicado.
```c
#include <stdio.h>
#include <conio.h>
#define mayus (ch) ((ch>=’a’&& ch<=‘z’) ? (ch+’A’-’a‘): ch)
stuct byte {
  unsigned int a: 1;
  unsigned int b: 1;
  unsigned int c: 1;
  unsigned int d: 1;
  unsigned int e: 1;
  unsigned int f: 1;
  unsigned int g: 1;
  unsigned int h: 1;
};
union charbits{
  char ch;
  struct byte bits;
}caracter;
void decodifica (struct byte b);
```
Estructuras y uniones 319
```c
void main()
{
  puts ('Teclea caracteres. Para salir carácter XI);
  do {
    caracter.ch = getcheo;
    printf ('I : " ) ;
    decodifica(caracter.bits);
  }while mayusc(caracter.ch) !='X');
}
void decodifica(struct byte b)
{
  / * Los campos de bits se alinean de derecha a izquierda, por esa razón se
   * escriben los campos en orden inverso * /
  print f ( " % 2 u % 2 u % 2 ~ % 2 ~ % 2 u % 2 ~ % 2 U % 2 u % ~ u\nu',
          b.h, b.g, b.f, b.e, b.d, b.c, b.b, b.a);"
}

```"