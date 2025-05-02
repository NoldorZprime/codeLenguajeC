---
title: La biblioteca string.h
description: A reference page in my new Starlight docs site.
---

La biblioteca estándar de C contiene la biblioteca de cadena `STRING.H`, que incorpora las funciones de manipulación de cadenas utilizadas más frecuentemente. El archivo de cabecera `STDIO.H` también soporta E/S de cadenas. Algunos fabricantes de C también incorporan otras bibliotecas para manipular cadenas, pero como no son estándar no se considerarán en esta sección.  

Las funciones de cadena tienen argumentos declarados de forma similar a:  
`char *s1;` o bien, `const char *s1;`  

Esto significa que la función espera una cadena que puede o no modificarse. Cuando se utiliza la función, se puede usar un puntero a `char` o se puede especificar el nombre de una variable `array char`. Cuando se pasa un array a una función, C pasa automáticamente la dirección del array `char`.

La **Tabla 12.1** resume algunas de las funciones de cadena más usuales.

**Tabla 12.1. Funciones de `<string.h>`**

| Cabecera y prototipo                                     | Función |
|----------------------------------------------------------|---------|
| `void* memcpy(void* s1, const void* s2, size_t n);`      | Reemplaza los primeros `n` bytes de `*s1` con los primeros `n` bytes de `*s2`. Devuelve `s1`. |
| `char* strcat(char* destino, const char* fuente);`       | Añade la cadena fuente al final de destino. Concatena. Devuelve la cadena destino. |
| `char* strchr(char* s1, int ch);`                        | Devuelve un puntero a la primera ocurrencia de `ch` en `s1`. Devuelve `NULL` si `ch` no está en `s1`. |
| `int strcmp(const char *s1, const char *s2);`             | Compara alfabéticamente la cadena `s1` a `s2` y devuelve: `0` si `s1 == s2`, `<0` si `s1 < s2`, `>0` si `s1 > s2`. |
| `int strcmpi(const char *s1, const char *s2);`            | Igual que `strcmp()`, pero sin distinguir entre mayúsculas y minúsculas. |
| `char* strcpy(char* destino, const char* fuente);`       | Copia la cadena fuente a la cadena destino. Devuelve la cadena destino. |
| `size_t strcspn(const char* s1, const char* s2);`         | Devuelve la longitud de la subcadena más larga de `s1` que no contiene caracteres de `s2`. |
| `size_t strlen(const char* s);`                          | Devuelve la longitud de la cadena `s`. |
| `char* strncat(char* s1, const char* s2, size_t n);`      | Añade los primeros `n` caracteres de `s2` a `s1`. Devuelve `s1`. Si `n >= strlen(s2)`, el efecto es igual a `strcat(s1, s2)`. |
| `int strncmp(const char* s1, const char* s2, size_t n);`  | Compara `s1` con los primeros `n` caracteres de `s2`. Devuelve: negativo, cero o positivo según `s1` < `s2`, `s1` == `s2`, o `s1` > `s2`. |
| `char* strnset(char* s, int ch, size_t n);`              | Copia `n` veces el carácter `ch` en la cadena `s` desde la posición inicial. Máximo hasta la longitud de `s`. |
| `char* strpbrk(const char* s1, const char* s2);`         | Devuelve la dirección de la primera ocurrencia en `s1` de cualquier carácter de `s2`. Devuelve `NULL` si no hay coincidencia. |
| `char* strrchr(const char* s, int c);`                   | Devuelve un puntero a la **última** ocurrencia de `c` en `s`. Devuelve `NULL` si no se encuentra. Busca desde el final hacia el principio. |
| `size_t strspn(const char* s1, const char* s2);`          | Devuelve la longitud de la subcadena inicial más larga de `s1` que contiene únicamente caracteres de `s2`. |
| `char* strstr(const char* s1, const char* s2);`          | Busca `s2` dentro de `s1` y devuelve un puntero al primer carácter coincidente. |
| `char* strtok(char* s1, const char* s2);`                | Divide `s1` en tokens delimitados por caracteres de `s2`. La primera llamada devuelve el primer token, las siguientes llamadas con `NULL` retornan los siguientes tokens. Cambia la cadena original. |

## 12.3.1. La palabra reservada `const`

Las funciones de cadena declaradas en `<string.h>`, recogidas en la Tabla 12.1 y algunas otras, incluyen la palabra reservada `const`.

La ventaja de esta palabra es que se puede ver rápidamente la diferencia entre los parámetros de entrada y salida. Por ejemplo, el segundo parámetro `fuente` de `strcpy` representa el área fuente; se utiliza sólo para copiar caracteres de ella, de modo que esta área no se modificará.

La palabra reservada `const` se utiliza para esta tarea. Se considera un **parámetro de entrada**, ya que la función recibe datos a través de él.

En contraste, el primer parámetro `destino` de `strcpy` es el área de destino, la cual se sobreescribirá y, por consiguiente, **no se debe utilizar `const`** para ello. En este caso, el parámetro se denomina **parámetro de salida**, ya que los datos se escriben en el área de destino.
