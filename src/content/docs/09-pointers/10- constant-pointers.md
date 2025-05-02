---
title: Punteros constantes frente a punteros a constantes
description: A reference page in my new Starlight docs site.
---

"Ya está familiarizado con punteros constantes, como es el caso de un nombre de un array. Un puntero constante es un puntero que no se puede cambiar, pero que los datos apuntados por el puntero pueden ser cambiados. Por otra parte, un puntero a una constante se puede modificar para apuntar a una constante diferente, pero los datos apuntados por el puntero no se pueden cambiar.

## Punteros constantes

Para crear un puntero constante diferente de un nombre de un array, se debe utilizar el siguiente formato:
`<tipo de dato > *const <nombre puntero> = <dirección de variable >;`
Como ejemplo de una definición de punteros de constantes, considérense las siguientes sentencias:
```c
int x;
int y;
int *const pl = &x;
```
`pl` es un puntero de constantes que apunta a `x`,por lo que `p l` es una constante, pero `*pl` es una variable. Por consiguiente, se puede cambiar el valor de `*pl`, pero no `pl`.
Por ejemplo, la siguiente asignación es legal, dado que se cambia el contenido de memoria a donde apunta `PI`,pero no el puntero en sí.
```c
"PI = y;
```
Por otra parte, la siguiente asignación no es legal, ya que se intenta cambiar el valor del puntero
```c
pl = &y;
```
El sistema para crear un puntero de constante a una cadena es:
```c
c h a r *const nombre = " Luis " ;
```
`nombre` no se puede modificar para apuntar a una cadena diferente en memoria. Por consiguiente,
```c
*nombre = 'C';
```
es legal, ya que se modifica el dato apuntado por `nombre` (cambia el primer carácter). Sin embargo, no es legal:
```c
nombre = &Otra-Cadena;
```
dado que se intenta modificar el propio puntero

## Punteros a constantes

El formato para definir un puntero a una constante es:
`const <tipo de dato elemento> *<nombre puntero> = <dirección de constante >;`
Algunos ejemplos:
```c
const int x = 25;
const int y = 50;
const int *pl = &x;
```
340 Programación en C. Metodología, algoritmos y estructura de datos
en los que `pl` se define como un puntero a la constante `x`.Los datos son constantes y no el puntero; en consecuencia, se puede hacer que `pl` apunte a otra constante.
```c
p l = & y ;
```
Sin embargo, cualquier intento de cambiar el contenido almacenado en la posición de memoria a donde apunta `pl` creará un error de compilación. Así, la siguiente sentencia no se compilará correctamente:
```c
" p l = 15;
```

**Nota**
Una definición de un puntero constante tiene la palabra reservada `const` delante del nombre del puntero, mientras que el puntero a una definición constante requiere que la palabra reservada `COA&&` se sitúe antes del tipo de dato. Así, la definición en el pnmer caso se puede leer como «punteros constante o de constante», mientras que en el segundo caso la definición se lee «puntero a tipo constante de dato».

La creación de un puntero a una constante cadena se puede hacer del modo siguiente:
```c
const char *apellido = "Remirez";
```
En el prototipo de la siguiente función se declara el argumento como puntero a una constante:
```c
float cargo (const float "v) ;
```

## Punteros constantes a constantes

El último caso a considerar es crear punteros constantes a constantes utilizando el formato siguiente:
`const <tipo de dato elemento> *const <nombre puntero> = <dirección de constante >;`
Esta definición se puede leer como <<untipo constante de dato y un puntero constanten. Un ejemplo puede ser:
```c
c o n s t int x = 25;
const int "const pl = &x;
```
que indica: «PI es un puntero constante que apunta a la constante entera x». Cualquier intento de modificar `pl` o bien `*pl` producirá un error de compilación.

**Regla**
Si sabe que un puntero siempre apuntará a la misma posición y nunca necesita ser reubicado (recolocado), defínalo como un puntero constante.
Si sabe que el dato apuntado por el puntero nunca necesitará cambiar, defina el puntero como un puntero a una constante.
Punteros (apuntadores)76"
I
I

**Ejemplo**
Un puntero a una constante es diferente de un puntero constante. El siguiente ejemplo muestra las diferencias.
```c
/ *
Este trozo de código define cuatro variables:
un puntero p; un puntero constante cp; un puntero pc a una
constante y un puntero constdnte cpc a una constante
* /
int *p;
++ (*P);            / * incremento del entero *p * I
++p;                / * incrementa un puntero p * /
int *const cp;
++ (*CP);           / * incrementa el entero *cp * /
++cp;               / * no válido: puntero cp es constante * /
const int * pc;
++ (*pc);           / * no válido: int * pc es constante * /
++pc;               / * incrementa puntero pc * /
const int * const cpc; / * puntero constante a constante i n t * /
++ (*cpc);          / * no válido: int *cpc es constante * /
++cpc;             / * no válido: puntero cpc es constante * /
```

**Regla**
o en blanco no es significativo en la declaracidn de punteros. L son equivalentes:
```c
int* p;
int * p;
int *p;
```"