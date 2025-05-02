---
title: Longitud y concatenación
description: A reference page in my new Starlight docs site.
---

Muchas operaciones de cadena requieren conocer el número de caracteres de una cadena (longitud), así como la unión (concatenación) de cadenas.


## La función `strlen()`

La función `strlen()` calcula el número de caracteres del parámetro cadena, excluyendo el carácter nulo de terminación de la cadena.  

**Prototipo de la función:**

```c
size_t strlen(const char* cadena);
```

El tipo de resultado `size_t` representa un tipo entero general.

```c
char cad[] = "1234567890";
unsigned i;
i = strlen(cad);
```

Estas sentencias asignan 10 a la variable `i`.

**Ejemplo**  
Este programa muestra por pantalla la longitud de varias cadenas:

```c
#include <string.h>
#include <stdio.h>

void main(void)
{
    char s[] = "IJKLMN";
    char bufer[81];

    printf("strlen(%s) = %d\n", s, strlen(s));
    printf("strlen(\"\") = %d\n", strlen(""));
    printf("Introduzca una cadena: ");
    gets(bufer);
    printf("strlen(%s) = %d", bufer, strlen(bufer));
}
```

**Ejecución:**

```
strlen(IJKLMN) = 6  
strlen("") = 0  
Introduzca una cadena: Sierra de Horche  
strlen(Sierra de Horche) = 16
```

## Las funciones `strcat()` y `strncat()`

En muchas ocasiones se necesita construir una cadena, añadiendo una cadena a otra cadena.  
Esta operación se conoce como **concatenación**.

Las funciones `strcat()` y `strncat()` realizan operaciones de concatenación.

- `strcat()` añade el contenido de la cadena fuente a la cadena destino, devolviendo un puntero a la cadena destino.

**Prototipo:**

```c
char* strcat(char* destino, const char* fuente);
```

---

**Ejemplo 12.10**  
Copia una constante cadena y a continuación concatena con otra cadena:

```c
char cadena[81];
strcpy(cadena, "Borland");
strcat(cadena, "C");
```

La variable `cadena` contiene ahora `"BorlandC"`.

Es posible limitar el número de caracteres a concatenar utilizando la función `strncat()`.

- `strncat()` añade `num` caracteres de la cadena fuente a la cadena destino y devuelve el puntero a la cadena destino.

**Prototipo:**

```c
char* strncat(char* destino, const char* fuente, size_t num);
```

Cuando se invoca con una llamada como:

```c
strncat(t, s, n);
```

`n` representa los primeros `n` caracteres de `s` que se van a unir a `t`, a menos que se encuentre un carácter nulo, en cuyo momento se termina el proceso.

**Ejemplo 12.11**  
Concatenar 4 caracteres:

```c
char cad1[81] = "Hola soy yo";
char cad2[41] = "Luis Merino";
strncat(cad1, cad2, 4);
```

La variable `cad1` contiene ahora `"Hola soy yoLui"`.

**Advertencia:**  
Ni la función `strcat()` ni `strncat()` comprueban que la cadena destino tenga suficiente espacio para la cadena resultante.  
Por ejemplo:

```c
char s1[] = "ABCDEFGH"; // reserva espacio para 8+1 caracteres
char s2[] = "XYZ";      // reserva espacio para 3+1 caracteres

strcat(s1, s2); // puede producir resultados extraños por falta de espacio
```

### **Ejercicio 12.4**

El programa añade la cadena `s2` al final de la cadena `s1`.  
**Reserva memoria dinámicamente en tiempo de ejecución:**

```c
#include <stdio.h>
#include <string.h>
#include <malloc.h>

void main(void)
{
    char* s1 = "ABCDEFGH";
    char s2[] = "XYZ";

    printf("\nAntes de strcat(s1, s2):\n");
    printf("\ts1 = [%s], longitud = %d\n", s1, strlen(s1));
    printf("\ts2 = [%s], longitud = %d\n", s2, strlen(s2));

    s1 = realloc(s1, (strlen(s1) + strlen(s2) + 1) * sizeof(char));

    printf("\ts1 = [%s], longitud = %d (amplía memoria)\n", s1, strlen(s1));

    strcat(s1, s2);

    puts("Después de strcat(s1, s2):");
    printf("\ts1 = [%s], longitud = %d\n", s1, strlen(s1));
    printf("\ts2 = [%s], longitud = %d\n", s2, strlen(s2));
}
```

**Ejecución:**

```
Antes de strcat(s1, s2):
s1 = [ABCDEFGH], longitud = 8
s2 = [XYZ], longitud = 3
s1 = [ABCDEFGH], longitud = 8 (amplía memoria)
Después de strcat(s1, s2):
s1 = [ABCDEFGHXYZ], longitud = 11
s2 = [XYZ], longitud = 3
```
