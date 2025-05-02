---
title: Inversión de cadenas
description: A reference page in my new Starlight docs site.
---

La biblioteca `STRING.H` incluye la función `strrev()` que sirve para invertir los caracteres de una cadena.  
Su prototipo es:

```c
char *strrev(char *s);
```

`strrev()` invierte el orden de los caracteres de la cadena especificada en el argumento `s`; devuelve un puntero a la cadena resultante.

**Ejemplo 12.16**  
Muestra de inversión de cadenas:

```c
char cadena[] = "Hola";
strrev(cadena);
puts(cadena);  /* visualiza "aloH" */
```

El programa siguiente invierte el orden de la cadena "Hola mundo":

```c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char *cadena = "Hola mundo";
    strrev(cadena);
    printf("\nCadena inversa: %s\n", cadena);
    return 0;
}
```

Estas dos sentencias:

```c
strrev(cadena);
printf("\nCadena inversa: %s\n", cadena);
```

Se podrían haber sustituido por:

```c
printf("\nCadena inversa: %s\n", strrev(cadena));
```
