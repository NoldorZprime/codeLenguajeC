---
title: Asignación de cadenas
description: A reference page in my new Starlight docs site.
---


**C soporta dos métodos para asignar cadenas.**  
Uno de ellos ya se ha visto anteriormente cuando se inicializaban las variables de cadena. La sintaxis utilizada:

```c
char VarCadena[LongCadena] = ConstanteCadena;
```

**Ejemplo 12.7**  
Inicializa dos arrays de caracteres con cadenas constantes:

```c
char Cadena[81] = "C maneja eficientemente las cadenas";
char nombre[] = "Luis Martin Cebo";
```

El segundo método para asignación de una cadena a otra es utilizar la función `strcpy()`.  
La función `strcpy()` copia los caracteres de la cadena fuente a la cadena destino. La función supone que la cadena destino tiene espacio suficiente para contener toda la cadena fuente.  

**El prototipo de la función:**

```c
char* strcpy(char* destino, const char* fuente);
```

**Ejemplo 12.8**  
Una vez definido un array de caracteres, se le asigna una cadena constante:

```c
char nombre[41];
strcpy(nombre, "Cadena a copiar");
```

La función `strcpy()` copia `"Cadena a copiar"` en la cadena `nombre` y añade un carácter nulo al final de la cadena resultante.

El siguiente programa muestra una aplicación de `strcpy()`:

```c
#include <stdio.h>
#include <string.h>

void main(void)
{
    char s[100] = "Buenos días Mr. Palacios", t[100];
    strcpy(t, s);
    strcpy(t + 12, "Mr. C");
    printf("\n%s\n%s", s, t);
}
```

Al ejecutarse el programa produce la salida:

```
Buenos días Mr. Palacios
Buenos días Mr. C
```

La expresión `t + 12` obtiene la dirección de la cadena `t` en `"Mr. Palacios"`. En esa dirección copia `"Mr. C"` y añade el carácter nulo (`'\0'`).

## La función `strncpy()`**

El prototipo de la función `strncpy` es:

```c
char* strncpy(char* destino, const char* fuente, size_t num);
```

Su propósito es copiar `num` caracteres de la cadena fuente a la cadena destino. La función realiza truncamiento o rellenado de caracteres si es necesario.

**Ejemplo 12.9**  
Estas sentencias copian 4 caracteres de una cadena en otra:

```c
char cad1[] = "Pascal";
char cad2[] = "Hola mundo";
strncpy(cad1, cad2, 4);
```

La variable `cad1` contiene ahora la cadena `"Hola"`.

**Consejo:**  
Los punteros pueden manipular las partes posteriores de una cadena, asignando la dirección del primer carácter a manipular:

```c
char *p = cad2;
p += 5;  /* p apunta a la cadena "mundo" */
strcpy(cad1, p);
puts(cad1);
```

La sentencia de salida visualiza la cadena `"mundo"`.
