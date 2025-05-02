---
title: El tipo de dato lógico
description: A reference page in my new Starlight docs site.
---

Los compiladores de C que siguen la norma ANSI no incorporan el tipo de dato lógico cuyos valores son «verdadero» (`true`) y «falso» (`false`).  
El lenguaje C **simula este tipo de dato** tan importante en las estructuras de control (`if`, `while`...).  
Para ello utiliza el tipo de dato `int`.

C interpreta todo valor distinto de 0 como «verdadero» y el valor 0 como «falso».  
De esta forma se pueden escribir expresiones lógicas de igual forma que en otros lenguajes de programación se utiliza `true` y `false`.

Una expresión lógica que se evalúa a `0` se considera **falsa**; una expresión lógica que se evalúa a `1` (o valor entero distinto de 0) se considera **verdadera**.


**Ejemplo:**

```c
int bisiesto;
bisiesto = 1;

int encontrado, bandera;
```

Dadas estas declaraciones, las siguientes sentencias son todas válidas:

```c
if (encontrado)  /* sentencia de selección */
```

```c
indicador = 0;                 /* indicador toma el valor falso */
indicador = suma > 10;         /* indicador toma el valor 1 (true) si suma es mayor que 10, en caso contrario, 0 */
```

**Resumen:**

- Valor distinto de cero representa `true` (verdadero)  
- `0` representa `false` (falso)

En C, se puede definir un tipo que asocia valores enteros constantes con identificadores.  
Es el tipo **enumerado**.

Para representar los datos lógicos en C, el sistema usual es definir un tipo enumerado `Boolean` con dos identificadores `FALSE` (valor 0) y `TRUE` (valor 1) de la forma siguiente:

```c
enum Boolean { FALSE, TRUE };
```

Esta declaración hace a `Boolean` un tipo definido por el usuario con literales o identificadores constantes `TRUE` y `FALSE`.

**Ejercicio**

Si desea simular el tipo lógico pero al estilo de tipo incorporado propio, se podría conseguir construyendo un archivo `.h` (`boolean.h`) con constantes con nombre `TRUE` y `FALSE`, tal como:

```c
/* archivo: boolean.h */
#ifndef BOOLEAN_H
#define BOOLEAN_H

typedef int Boolean;
const int TRUE = 1;
const int FALSE = 0;

#endif /* BOOLEAN_H */
```

Entonces, basta con incluir el archivo `"boolean.h"` y utilizar `Boolean` como si fuera un tipo de dato incorporado, con los literales `TRUE` y `FALSE` como valores lógicos o booleanos.

Si desea utilizar las letras minúsculas para definir `boolean`, `true` y `false`, se puede utilizar esta versión del archivo de cabecera `boolean.h`:

```c
/* archivo: boolean.h */
#ifndef BOOLEAN_H
#define BOOLEAN_H

typedef int boolean;
const int true = 1;
const int false = 0;

#endif /* BOOLEAN_H */
```
### Escritura de valores lógicos

La mayoría de las expresiones lógicas aparecen en estructuras de control que sirven para determinar la secuencia en que se ejecutan las sentencias en C. Raramente se tiene la necesidad de leer valores lógicos como dato de entrada o de visualizar valores lógicos como resultados de un programa.

Si es necesario, se puede visualizar el valor de una variable lógica utilizando la función estándar de salida `printf()`. Por ejemplo:

```c
printf("El valor de encontrado es %d\n", encontrado);
```

Si la variable `encontrado` es `false` (es decir, tiene el valor `0`), la salida será:

```
El valor de encontrado es 0
```
