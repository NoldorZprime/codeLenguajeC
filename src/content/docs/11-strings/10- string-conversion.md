---
title: Conversión de cadenas
description: A reference page in my new Starlight docs site.
---

La biblioteca `STRING.H` de la mayoría de los compiladores C suele incluir funciones para convertir los caracteres de una cadena a letras mayúsculas y minúsculas respectivamente. Estas funciones se llaman `striwr()` y `strupr()` en compiladores de AT&T y Borland, mientras que en Microsoft se denominan `strlwr()` y `strupr()`.

## Función `strupr()`

La función `strupr()` convierte las letras minúsculas de una cadena a mayúsculas.  
Su prototipo es:

```c
char *strupr(char *s);
```

**Ejemplo 12.17**  
Este programa convierte los caracteres en minúsculas de una cadena a mayúsculas; se escribe la cadena por pantalla:

```c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char *cadena = "abcdefg";
    strupr(cadena);
    printf("La cadena convertida es: %s\n", cadena);
    return 0;
}
```

## Función `strlwr()`

La función `strlwr()` convierte las letras mayúsculas de una cadena a letras minúsculas.  
Su prototipo es:

```c
char *strlwr(char *s);
```

**Ejemplo 12.18**  
Una cadena formada por caracteres en mayúsculas se convierte en minúsculas:

```c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char *cadena = "ABCDEFG";
    strlwr(cadena);
    printf("La cadena convertida es: %s\n", cadena);
    return 0;
}
```

**Ejercicio 12.5**

Se desea encontrar una cadena que sea palíndromo. El programa lee cadenas hasta encontrar un palíndromo.

**Análisis**  
La cadena se lee con `gets()`, se transforman todos los caracteres a mayúsculas con la función `strupr()`, se obtiene la cadena inversa con `strrev()` y se comparan con `strcmp()`.  
No hubiera hecho falta convertir a mayúsculas si la comparación de cadenas se hubiera hecho con `stricmp()`.

```c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char ctr[81], ictr[81];
    puts("\n\tIntroducir una frase hasta que sea capicúa.");
    do {
        gets(ctr);
        strupr(ctr);      /* Todos los caracteres en mayúsculas */
        strcpy(ictr, ctr);
        strrev(ctr);      /* Invierte la cadena */
    } while (strcmp(ctr, ictr)); /* Termina el bucle cuando son iguales */
    printf("\nCadena %s es palíndromo\n", ictr);
    return 0;
}
```
