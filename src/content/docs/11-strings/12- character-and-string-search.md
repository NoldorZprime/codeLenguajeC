---
title: Búsqueda/caracteres y cadenas
description: A reference page in my new Starlight docs site.
---


**La biblioteca S T R I N G . H contiene un número de funciones que permiten localizar caracteres en cadenas y subcadenas en cadenas.**  

Funciones de búsqueda `strchr` `strrchr`  
de caracteres `strcspn` `strpbrk`  
Funciones de búsqueda `strstr` `strtok`  
de cadenas `strspn`

## La función `strchr()`

El prototipo de la función `strchr()` es  
```c
char *strchr(const char * s , int c);
```

`strchr()` permite buscar caracteres y patrones de caracteres en cadenas; localiza la primera ocurrencia de un carácter `c` en una cadena `s`. La búsqueda termina en la primera ocurrencia de un carácter coincidente.

**Ejemplo 12.23**  
Búsqueda del carácter 'v' en una cadena.
```c
char cad[81] = "C lenguaje de medio nivel";
char *cadPtr;
cadPtr = strchr(cad, 'v');
```

## La función `strrchr()`

La función `strrchr()` localiza la última ocurrencia del patrón `c` en la cadena `s`. La búsqueda se realiza en sentido inverso, desde el último carácter de la cadena al primero; termina con la primera ocurrencia de un carácter coincidente. Si no se encuentra el carácter `c` en la cadena `s`, la función produce un resultado `NULL`.

Su prototipo es:  
```c
char *strrchr(const char *s, int c);
```

**Ejemplo 12.24**  
Búsqueda en orden inverso del carácter 'x' en una cadena y escribe la cadena que está a continuación.
```c
#include <stdio.h>
#include <string.h>

int main(void) {
    char *cadena = "-x-";
    char *resultado;
    resultado = strrchr(cadena, 'x');
    printf("Cadena devuelta: %s\n", resultado);
    return 0;
}
```

## La función `strspn()`

La función `strspn()` devuelve el número de caracteres de la parte izquierda de una cadena `s1` que coincide con cualquier carácter de la cadena patrón `s2`.

Prototipo:  
```c
size_t strspn(const char *s1, const char *s2);
```

**Ejemplo 12.25**  
El siguiente ejemplo busca el segmento de cadena1 que tiene un subconjunto de cadena2.
```c
#include <stdio.h>
#include <string.h>

int main(void) {
    char *cadena1 = "3c1293456";
    char *cadena2 = "abcl23";
    int longitud;
    longitud = strspn(cadena1, cadena2);
    printf("Longitud = %d", longitud);
    return 0;
}
```

**Ejecución:**  
Longitud = 4

Este resultado se obtiene porque el primer carácter de `cadena1` es `3` y pertenece a `cadena2`, los tres caracteres siguientes también pertenecen a `cadena2`.

## La función `strcspn()`

La función `strcspn()` encuentra el índice del primer carácter de la primera cadena `s1` que está en el conjunto de caracteres especificado en la segunda cadena `s2`.

Prototipo:  
```c
size_t strcspn(const char *s1, const char *s2);
```

**Ejemplo 12.26**  
Búsqueda de la primera posición del carácter 'd' o 'w' en una cadena.
```c
char cadena[] = "Los manolos de Cárchelejo";
int i;
i = strcspn(cadena, "dw");
```

El ejemplo anterior asigna `12` (posición del carácter `d` en `cadena`) a la variable `i`.

## La función `strpbrk()`

La función `strpbrk()` recorre una cadena buscando caracteres pertenecientes a un conjunto de caracteres especificado.

Prototipo:  
```c
char *strpbrk(const char *s1, const char *s2);
```

Devuelve un puntero a la primera ocurrencia de cualquier carácter de `s2` en `s1`. Si las dos cadenas no tienen caracteres comunes, se devuelve `NULL`.

**Ejemplo 12.27**  
Encuentra la dirección en `cad` del primer carácter encontrado que pertenezca a `subcad`.
```c
char *cad = "Hello Dolly, hey Julio";
char *subcad = "hy";
char *ptr;
ptr = strpbrk(cad, subcad);
printf("\n%s\n", ptr);
```

El segmento de programa visualiza `"y, hey Julio"`, ya que encuentra `"y"` en la cadena antes que la `"h"`.

## La función `strstr()`

La biblioteca `STRING.H` contiene las funciones `strstr()` y `strtok()`, que permiten localizar una subcadena en una cadena o bien romper una cadena en subcadenas.

La función `strstr()` busca una cadena dentro de otra cadena.

Prototipo:  
```c
char *strstr(const char *s1, const char *s2);
```

Devuelve un puntero al primer carácter de la cadena `s1` que coincide con la cadena `s2`. Si la subcadena `s2` no está en la cadena `s1`, la función devuelve `NULL`.

**Ejemplo 12.28**  
Búsqueda de la cadena `"456"` en `cad1`.
```c
char *cad1 = "123456789";
char *cad2 = "456";
char *resultado;
resultado = strstr(cad1, cad2);
printf("\n%s\n", resultado);
```

El segmento de programa anterior visualiza `"456789"`.

## La función `strtok()`

La función `strtok()` permite romper una cadena en subcadenas, basada en un conjunto especificado de caracteres de separación.

Prototipo:  
```c
char *strtok(char *s1, const char *s2);
```

`strtok()` lee la cadena `s1` como una serie de cero o más símbolos y la cadena `s2` como el conjunto de caracteres que se utilizan como separadores de los símbolos de la cadena `s1`. Los símbolos en la cadena `s1` pueden encontrarse separados por un carácter o más del conjunto de caracteres separadores de la cadena `s2`. La segunda y posteriores llamadas a `strtok()` han de hacerse con el primer argumento en `NULL`.

**Ejercicio 11.6**  
Este programa rompe una cadena en subcadenas y se imprime cada una de ellas.
```c
#include <stdio.h>
#include <string.h>

int main() {
    char *cad = "Pepe Luis + Canovas * Marcos";
    char *separador = "+*";
    char *ptr = cad;

    printf("\n%s\n", cad);
    ptr = strtok(cad, separador);
    printf("\tSe rompe en tres subcadenas");

    while (ptr) {
        printf("\n%s", ptr);
        ptr = strtok(NULL, separador);
    }

    return 0;
}
```

**Salida esperada:**  
```
Pepe Luis + Canovas * Marcos  
Se rompe en tres subcadenas  
Pepe Luis  
Canovas  
Marcos
```
