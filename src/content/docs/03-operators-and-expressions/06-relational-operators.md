---
title: Operadores relacionales
description: A reference page in my new Starlight docs site.
---

C no tiene tipos de datos lógicos o booleanos, como Pascal, para representar los valores verdadero (true) y falso (false). En su lugar se utiliza el tipo `int` para este propósito, con el valor entero 0 que representa a falso y distinto de cero a verdadero.

- falso: cero  
- verdadero: distinto de cero

Operadores tales como `>=` y `==` que comprueban una relación entre dos operandos se llaman operadores relacionales y se utilizan en expresiones de la forma:

- expresión operador-relacional expresión

- expresión, y expresión            expresiones compatibles c
- operadores-relacionales           Un operadore de la tabla

Los operadores relacionales se usan normalmente en sentencias de selección (`if`) o de iteración (`while`, `for`), que sirven para comprobar una condición. Utilizando operadores relacionales se realizan operaciones de igualdad, desigualdad y diferencias relativas. La Tabla 4.7 muestra los operadores relacionales que se pueden aplicar a operandos de cualquier tipo de dato estándar: `char`, `int`, `float`, `double`, etc.

Cuando se utilizan los operadores en una expresión, el operador relacional produce un 0 o un 1, dependiendo del resultado de la condición. 0 se devuelve para una condición falsa, y 1 se devuelve para una condición verdadera. Por ejemplo, si se escribe:

```c
c = 3 < 7;
```

La variable `c` se pone a 1, dado que como 3 es menor que 7, entonces la operación `<` devuelve un valor de 1, que se asigna a `c`.

**Precaución**

Un error típico, incluso entre programadores experimentados, es confundir el operador de asignación (`=`) con el operador de igualdad (`==`).

**Operadores relacionales de C**

| Operador | Significado       | Ejemplo  |
|----------|-------------------|----------|
| `==`     | Igual a           | `a == b` |
| `!=`     | No igual a        | `a != b` |
| `>`      | Mayor que         | `a > b`  |
| `<`      | Menor que         | `a < b`  |
| `>=`     | Mayor o igual que | `a >= b` |
| `<=`     | Menor o igual que | `a <= b` |

**Ejemplo**

Si `x`, `a`, `b` y `c` son de tipo `double`, `numero` es `int` e `inicial` es de tipo `char`, las siguientes expresiones booleanas son válidas:

- `x < 5.75`
- `b * b >= 5.0 * a * c`
- `numero == 100`
- `inicial != '5'`

- En datos numéricos, los operadores relacionales se utilizan normalmente para comparar. Así, si:

```c
x = 3.1;
```

La expresión:

```c
x < 7.5;
```

Produce el valor 1 (true). De modo similar, si:

```c
numero = 27;
```

La expresión:

```c
numero == 100;
```

Produce el valor 0 (false).

Los caracteres se comparan utilizando los códigos numéricos (véase Apéndice B, código ASCII):

- `'A' < 'C'` es 1, verdadera (true): (código 65) y `'C'` (código 67).
- `'a ' < 'c '` es I , verdadera (true): (código 97) y b (código 99).
- `'b' < 'B'` es 0, falsa (false), ya que `'b'` (código 98) no es menor que `'B'` (código 66).

Los operadores relacionales tienen menor prioridad que los operadores aritméticos, y asociatividad de izquierda a derecha. Por ejemplo:

```c
m + 5 <= 2 * n;
```

Equivale a:

```c
(m + 5) <= (2 * n);
```

Los operadores relacionales permiten comparar dos valores. Así, por ejemplo (`if` significa "si", se verá en el capítulo siguiente):

```c
if (Nota_asignatura < 9)
```

Comprueba si `Nota_asignatura` es menor que 9. En caso de desear comprobar si la variable y el número son iguales, entonces utilizar la expresión:

```c
if (Nota_asignatura == 9)
```

Si, por el contrario, se desea comprobar si la variable y el número no son iguales, entonces utilice la expresión:

```c
if (Nota_asignatura != 9)
```

Las cadenas de caracteres no pueden compararse directamente. Por ejemplo:

```c
char nombre[26];
gets(nombre);
if (nombre < "Marisa")
```

El resultado de la comparación es inesperado, no se están comparando alfabéticamente; lo que se compara realmente son las direcciones en memoria de ambas cadenas (punteros). Para una comparación alfabética entre cadenas se utiliza la función `strcmp()` de la biblioteca de C (`string.h`). Así:

```c
if (strcmp(nombre, "Marisa") < 0) /* alfabéticamente nombre es menor */
```
