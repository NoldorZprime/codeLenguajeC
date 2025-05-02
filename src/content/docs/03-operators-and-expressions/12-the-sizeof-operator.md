---
title: El operador sizeof
description: A reference page in my new Starlight docs site.
---

Con frecuencia su programa necesita conocer el tamaño en bytes de un tipo de dato o variable.  
C proporciona el operador `sizeof`, que toma un argumento, bien un tipo de dato o bien el nombre de una variable (escalar, array, registro, etc.).

**El formato del operador es:**

- `sizeof(nombre-variable)`
- `sizeof(tipo-dato)`
- `sizeof(expresión)`

**Ejemplo**

Si se supone que el tipo `int` consta de cuatro bytes y el tipo `double` consta de ocho bytes, las siguientes expresiones proporcionarán los valores 1, 4 y 8 respectivamente:

```c
sizeof(char)
sizeof(unsigned int)
sizeof(double)
```

El operador `sizeof` se puede aplicar también a expresiones. Se puede escribir:

```c
printf("La variable k es %d bytes", sizeof(k));
printf("La expresión a + b ocupa %d bytes", sizeof(a + b));
```

El operador `sizeof` es un operador **unitario**, ya que opera sobre un valor único.  
Este operador produce un resultado que es el tamaño, en bytes, del dato o tipo de dato especificados.

Debido a que la mayoría de los tipos de datos y variables requieren diferentes cantidades de almacenamiento interno en computadores diferentes, el operador `sizeof` permite consistencia de programas en diferentes tipos de computadores.

El operador `sizeof` se denomina también **operador en tiempo de compilación**, ya que en tiempo de compilación, el compilador sustituye cada ocurrencia de `sizeof` en su programa por un valor entero sin signo (`unsigned`).

El operador `sizeof` se utiliza en programación avanzada.

**Ejercicio**

Suponga que se desea conocer el tamaño, en bytes, de variables de coma flotante y de doble precisión de su computadora.  
El siguiente programa realiza esta tarea:

```c
/* Imprime el tamaño de valores de coma flotante y double */
#include <stdio.h>

int main()
{
    printf("El tamaño de variables de coma flotante es %d \n", sizeof(float));
    printf("El tamaño de variables de doble precisión es %d \n", sizeof(double));
    return 0;
}
```

Este programa producirá diferentes resultados en diferentes clases de computadores.

Compilando este programa bajo C, el programa produce la salida siguiente:

```
El tamaño de variables de coma flotante es: 4  
El tamaño de variables de doble precisión es: 8
```
