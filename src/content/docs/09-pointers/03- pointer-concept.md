---
title: Concepto de puntero
description: A reference page in my new Starlight docs site.
---

"Cada vez que se declara una variable C, el compilador establece un área de memoria para almacenar el contenido de la variable. Cuando se declara una variable `i n t` (entera), por ejemplo, el compilador asigna dos bytes de memoria. El espacio para esa variable se sitúa en una posición específica de la memoria, conocida como dirección de memoria. Cuando se referencia (se hace uso) al valor de la variable, el compilador de C accede automáticamente a la dirección de memoria donde se almacena el entero. Se puede ganar en eficacia en el acceso a esta dirección de memoria utilizando un puntero.

Cada variable que se declara en C tiene una dirección asociada con ella. Un puntero es una dirección de memoria. El concepto de punteros tiene correspondencia en la vida diaria. Cuando se envía una carta por correo, su información se entrega basada en un puntero que es la dirección de esa carta. Cuando se telefonea a una persona, se utiliza un puntero (el número de teléfono que se marca). Así pues, una dirección de correos y un número de teléfono tienen en común que ambos indican dónde encontrar algo. Son punteros a edificios y teléfonos, respectivamente. Un puntero en C también indica dónde encontrar algo, ¿,dóndeencontrar los datos que están asociados con una variable? Un puntero C es la dirección de una Variable. Los punteros se rigen por estas reglas básicas:

* un puntero es una variable como cualquier otra;
* una variable puntero contiene una dirección que apunta a otra posición en memoria;
* en esa posición se almacenan los datos a los que apunta el puntero;
* un puntero apunta a una variable de memoria.

El valor de un puntero es una dirección. La dirección depende del estado de la computadora en la cual se ejecuta el programa.

```
Direccion de
memoria alta
1 O01
999
p +1000 p contiene el valor 100, que
es la dirección de a i f ii
*p es el valor del elemento
al que apunta p Por consi -
guiente, * p toma el valor
'A'
1 o1
alia +100
99
Dirección de
memoria baja
Figura 10.1. Relaciones entre *p y el valor de p (dirección de al fa).
```

' En Latinoamérica es usual emplear el término u/xuttuúor.
326 Programación en C.Metodología, algoritmos y estructura de datos
I
,
1 El tipo de variable que almacena una dirección se denomina puntero.

**Ejemplo 10.2**
```c
#include <stdio.h>
void main()
{ int n = 75;
  int* p = &n; / * p variable puntero, tiene dirección de n*/
  printf("n = %d, &n = % p , p = %p\n",n,&n,p);
  printf ("&p = %p\n",&p);
}
```

**Ejecución**
```
n = 75, &n = Ox4fffd34, p = Ox4fffd34
Ox4fffd34
&p = 0~4fffd30
```
```
Ox4f € fd30
  p |0x4fffd34| n
int * int
```
La variable `p` se denomina «puntero»debido a que su valor «apunta» a la posición de otro valor. Es un puntero `int` cuando el valor al que apunta es de tipo `int` como en el ejemplo anterior.

## Declaración de punteros

Al igual que cualquier variable, las variables punteros han de ser declaradas antes de utilizarlas. La declaración de una variable puntero debe indicar al compilador el tipo de dato al que apunta el puntero; para ello se hace preceder a su nombre con un asterisco (`*`), mediante el siguiente formato:
`<tipo de dato apuntado> *<identificador de puntero>`
Algunos ejemplos de variables punteros:
```c
int* ptrl; /* Puntero a un tipo de dato entero (int)*/
long* ptr2; /* Puntero a un tipo de dato entero largo (long int)*/
char* ptr3; /* Puntero a un tipo de dato char * /
float *f; /* Puntero a un tipo de dato float * /
```
Un operador `*` en una declaración indica que la variable declarada almacenará una dirección de un tipo de dato especificado. La variable `p trl` almacenará la dirección de un entero, la variable `p tr 2` almacenará la dirección de un dato tipo `long`,etc.

Siempre que aparezca un asterisco ( `*` ) en una definición de una variable, ésta es una variable puntero.

## Inicialización\* (iniciación) de punteros

AI igual que otras variables, C no inicializa los punteros cuando se declaran y es preciso inicializarlos antes de su uso. La inicialización de u n puntero proporciona a ese puntero la dirección del dato correspondiente. Después de la inicialización, se puede utilizar el puntero para referenciar los datos direccionados. Para asignar una dirección de memoria a un puntero se utiliza el operador de referencia `&`. Así, por ejemplo,
`&valor`
significa «la dirección de valor». Por consiguiente, el método de inicialización (iniciación), también denominado estático, requiere:
* Asignar memoria (estáticamente) definiendo una variable y a continuación hacer que el puntero apunte al valor de la variable.
    ```c
    int i;
    int *p;
    p = &i;
    /* define una variable i * /
    /* define un puntero a un entero p * /
    /* asLgnd la dirección de i a p * /
    ```
* Asignar un valor a la dirección de memoria.
    ```c
    *p = 50;
    ```
Cuando ya se ha definido un puntero, el asterisco delante de la variable puntero indica «e/ contenido den de la memoria apuntada por el puntero y será del tipo dado.

Este tipo de inicialización es estática, ya que la asignación de memoria utilizada para almacenar el valor es fijo y no puede desaparecer. Una vez que la variable se define, el compilador establece suficiente memoria para almacenar un valor del tipo de dato dado. La memoria permanece reservada para esta variable y no se puede utilizar para otra cosa durante la ejecución del programa. En otras palabras, no se puede liberar la memoria reservada para una variable. El puntero a esa variable se puede cambiar, pero permanecerá la cantidad de memoria reservada.

El operador `&` devuelve la dirección de la variable a la cual se aplica,

**Otros ejemplos de inicialización estáticos:**
```c
1. int edad = 50; /*define una variable edad de valor 50 * /
   int *p-edad = &edad; /*define un puntero de enteros inicializándolo
                           con la dirección de edad * /
2. char *p; /*Fi.gura 10.1 * /
   char alfa = 'A';
   p = &alfa;
3. char cd[] = "Compacto';
   char *c;
   . C = cd; /*c tiene la dirección de Id cadena cd * /
```
Es un error asignar un valor, a un contenido de una variable puntero si previamente no se ha inicializado con la dirección de una variable, o bien se le ha asignado dinámicamente memoria. Por ejemplo:
```c
float* px;
*px = 23.5;
/* puntero a float * /
/* error, px no contiene dirección * /
```

' El diccionario de la Real Academia dc la Lengua Española s d o acepta el término iniciar y el término inicial. El empleo de iniridircir sólo se.justifica por el extenso uso de dicho término en .jerga informática.
328 Programación en C.Metodología, algoritmos y estructura de datos
t -
Existe un segundo método para inicializar un puntero, es mediante asignación dinámica de memoria. Este método utiliza las funciones de asignación de memoria `malloc ( )`, `calloc ( )`, `reallot ( )` y `free ( )`, y se analizará más adelante en el capítulo siguiente.

## Indirección de punteros

Después de definir una variable puntero, el siguiente paso es inicializar el puntero y utilizarlo para direccionar algún dato específico en memoria. El uso de u n puntero para obtener el valor al que apunta, es decir, su dato apuntado se denomina indireccionar el puntero («desreferencia- el puntero»); para ello, se utiliza el operador de indirección `*`.
```c
int edad;
int* p-edad;
p-edad= &edad;
*p-edad= 50;
```
Las dos sentencias anteriores se describen en la Figura 10.2. Si se desea imprimir el valor de edad,
```c
printf ("%d",edad); /* imprime el valor de edad * /
```
También se puede imprimir el valor de edad dereferenciando el puntero a edad:
```c
printf ( "%da',*p-edad) ; /*indirecciona p-edad * /
```
se puede utilizar la siguiente sentencia:
```
memoria
direcciones
~ d x len
120.000
p-edad en
350.420
línea de memoria
a-
-
Figura 10.2. p-rdad contiene la dirección de ( d d ( i , i)-cTti,iri apunta a la variable edad
```
El listado del siguiente programa muestra el concepto de creación, inicialización e indirección de una variable puntero.
```c
#include <stdio.h>
char c ; / * variable global de tipo carácter*/
int main0
{
  char *pc; / * un puntero a una variable carácter*/
  pc = &c;
  for (c = 'A'; c <= ' Z ' ; e++);
  return O ;
  printf ("%e"I *pc);
}
```
Punteros (apuntadores) 329
La ejecución de este programa visualiza el alfabeto. La variable puntero `pc` es un puntero a una variable carácter. La línea `pc = &c;` asigna a `pc` la dirección de la variable `c` (`&c`). El bucle `for` almacena en `c` las letras del alfabeto y la sentencia `print f ( "%c", *pc) ;` visualiza el contenido de la variable apuntada por `pc`; `c` y `pc` se refieren a la misma posición en memoria. Si la variable `c` , que se almacena en cualquier parte de la memoria, y `pc` , que apunta a esa misma posición, se refiere a los mismos datos, de modo que el cambio de una variable debe afectar a la otra; `pc` y `c` se dice que son alias, debido a que `pc` actúa como otro nombre de `c`.

```
,Valor de dirección del
puntero
Dircccione5 O0 0 1 0 2 03 04 05 06 07
Memoria
Figura 10.3. pc' y c direccionan la misma posición de memoria.
```
La Tabla 1 O. 1 resume los operadores de punteros.

**Tabla 10.1. Operadores de punteros.**
```
~~
Operador Propósito
&        Obtiene la dirección de una variable.
* Define una variable como puntero.
* Obtiene el contenido de una variable puntero.
Nota
Son variables punteros aquellas que apuntan a la posición en donde otrds variablels de programa
se almacenan.
I
```
## Punteros y verificación de tipos

Los punteros se enlazan a tipos de datos específicos, de modo que C verificará si se asigna la dirección de un tipo de dato al tipo correcto de puntero. Así, por ejemplo, si se define un puntero a `float`,no se le puede asignar la dirección de un carácter o un entero. Por ejemplo, este segmento de código no funcionará:
```c
float * f p ;
char c;
fp = &c; / * no es válido * /
```
C no permite la asignación de la dirección de `c` a `f p`, ya que `f p` es una variable puntero que apunta a datos de tipo real, `float`.

C requiere que las variables puntero direccionen realmente variables del mismo tipo de dato que está ligado a los punteros en sus declaraciones."