---
title: Conversión de cadenas a números
description: A reference page in my new Starlight docs site.
---

Es muy frecuente tener que convertir números almacenados en cadenas de caracteres a tipos de datos numéricos. C proporciona las funciones `atoi()`, `atof()` y `atol()`, que realizan estas conversiones.  
Estas tres funciones se incluyen en la biblioteca `STDLIB.H`, por lo que ha de incluir en su programa la directiva:

```c
#include <stdlib.h>
```

## Función `atoi()`

La función `atoi()` convierte una cadena a un valor entero. Su prototipo es:

```c
int atoi(const char *cad);
```

`atoi()` convierte la cadena apuntada por `cad` a un valor entero. La cadena debe tener la representación de un valor entero y el formato siguiente:  
- [espacio en blanco] [signo] [dígitos]

Una cadena que se puede convertir a un entero es:  
`"12321"`  

Sin embargo, la cadena siguiente no se puede convertir a un valor entero:  
`"-1234596.495"`  

La cadena anterior se puede convertir a un número de coma flotante con la función `atof()`.  
Si la cadena no se puede convertir, `atoi()` devuelve cero.

**Ejemplo 12.19**  
Convierte los dígitos de una cadena en un valor entero:

```c
char *cadena = "453423";
int valor;
valor = atoi(cadena);
```

## Función `atof()`

La función `atof()` convierte una cadena a un valor de coma flotante. Su prototipo es:

```c
double atof(const char *cad);
```

`atof()` convierte la cadena apuntada por `cad` a un valor `double` en coma flotante.  
La cadena de caracteres debe tener una representación de caracteres de un número de coma flotante.  
La conversión termina cuando se encuentre un carácter no reconocido. Su formato es:  
- [espacio en blanco] [signo] [dígitos][.][dígitos][e/E][signo][dígitos]

**Ejemplo 12.20**  
Convierte los dígitos de una cadena a un número de tipo `double`:

```c
char *cadena = "545.7345";
double valor;
valor = atof(cadena);
```

## Función `atol()`

La función `atol()` convierte una cadena a un valor largo (`long`). Su prototipo es:

```c
long atol(const char *cad);
```

La cadena a convertir debe tener un formato de valor entero largo:  
- [espacio en blanco] [signo] [dígitos]

**Ejemplo 12.21**  
Una cadena que tiene dígitos consecutivos se convierte en entero largo:

```c
char *cadena = "45743212";
long valor;
valor = atol(cadena);
```

## Entrada de números y cadenas

Un programa puede necesitar una entrada que consista en un valor numérico y a continuación una cadena de caracteres.  
La entrada del valor numérico se puede hacer con `scanf()` y la cadena con `gets()`.

**Ejemplo 12.22**  
Lectura de un entero largo y a continuación una cadena:

```c
long int k;
char cad[81];
printf("Metros cuadrados: "); 
scanf("%ld", &k);
printf("Nombre de la finca: "); 
gets(cad);
```

Al ejecutarse este fragmento de código, en pantalla sale:

```
Metros cuadrados: 1980756  
Nombre de la finca:
```

No se puede introducir el nombre de la finca; el programa le asigna la cadena vacía. ¿Por qué?  
Al teclear `1980756` y presionar retorno de carro, se asigna la cantidad a `k` y queda en el buffer interno el carácter fin de línea, que es el carácter en que termina la captación de una cadena por `gets()`, por lo que no se le asigna ningún carácter a `cad`.

Para solucionar este problema tenemos dos alternativas. La primera:

```c
printf("Metros cuadrados: "); 
scanf("%ld%*c", &k);
printf("Nombre de la finca: "); 
gets(cad);
```

Después de captar el número, `%*c` hace que se lea el siguiente carácter y no se asigne, así se queda el buffer de entrada vacío y `gets(cad)` puede captar la cadena que se teclee.

La segunda alternativa es leer el valor numérico como una cadena de dígitos y después transformarlo con `atol(cad)` a entero largo:

```c
printf("Metros cuadrados: "); 
gets(cad);
k = atol(cad);
printf("Nombre de la finca: "); 
gets(cad);
```
