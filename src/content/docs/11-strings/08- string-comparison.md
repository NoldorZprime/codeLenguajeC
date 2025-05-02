---
title: Comparación de cadenas
description: A reference page in my new Starlight docs site.
---

Dado que las cadenas son arrays de caracteres, la biblioteca STK I DIG. H proporciona un conjunto de funciones que comparan cadenas. Estas funciones comparan los caracteres de dos cadenas utilizando el valor ASCII de cada carácter. Las funciones son `strcmp()`, `stricmp()`, `strncmp()` y `strnicmp()`.


## La función strcmp ( )

Si se desea determinar si una cadena es igual a otra, mayor o menor que otra, se debe utilizar la función `strcmp()`. La comparación siempre es alfabética. `strcmp()` compara su primer parámetro con su segundo, y devuelve 0 si las dos cadenas son idénticas; un valor menor que cero si la cadena 1 es menor que la cadena 2; o un valor mayor que cero si la cadena 1 es mayor que la cadena 2 (los términos «mayor que» y «menor que» se refieren a la ordenación alfabética de las cadenas).  
Por ejemplo, Alicante es menor que Sevilla. Así, la letra A es menor que la letra a, la letra Z es menor que la letra a.  
El prototipo de la función `strcmp()` es:

```c
int strcmp(const char* cad1, const char* cad2);
```

La función compara las cadenas `cad1` y `cad2`. El resultado entero es:  
- `< 0` si `cad1` es menor que `cad2`  
- `= 0` si `cad1` es igual a `cad2`  
- `> 0` si `cad1` es mayor que `cad2`

**Ejemplo 12.12**  
Resultados de realizar comparaciones de cadenas:

```c
char cad1[] = "Microsoft C";
char cad2[] = "Microsoft Visual C";
int i;
i = strcmp(cad1, cad2);  // i toma un valor negativo
```

```c
strcmp("Waterloo","Windows") < 0     // Devuelve un valor negativo  
strcmp("Mortimer","Mortim") > 0      // Devuelve un valor positivo  
strcmp("Jertru", "Jertru") == 0      // Devuelve cero
```

La comparación se realiza examinando los primeros caracteres de `cad1` y `cad2`; a continuación los siguientes caracteres y así sucesivamente. Este proceso termina cuando:  
- se encuentran dos caracteres distintos  
- se encuentra el carácter nulo en `cad1` o `cad2`

- Waterloo es menor que Windows  
- Mortimer es mayor que Mortim  
- Jertru es igual que Jertru

## La función stricmp ( )

La función `stricmp()` compara las cadenas `cad1` y `cad2` sin hacer distinción entre mayúsculas y minúsculas.  
El prototipo es:

```c
int stricmp(const char* cad1, const char* cad2);
```

**Ejemplo 12.13**  
Comparación de dos cadenas, con independencia de que sean letras mayúsculas o minúsculas:

```c
char cad1[] = "Turbo C";
char cad2[] = "TURBO C";
int i;
i = stricmp(cad1, cad2);
```

Asigna 0 a la variable `i` ya que al no distinguir entre mayúsculas y minúsculas, las dos cadenas son iguales.

## La función strncrnp ( )

La función `strncmp()` compara los `num` caracteres más a la izquierda de las dos cadenas `cad1` y `cad2`.  
El prototipo es:

```c
int strncmp(const char* cad1, const char* cad2, size_t num);
```

El resultado de la comparación será (considerando los `num` primeros caracteres):  
- `< 0` si `cad1` es menor que `cad2`  
- `= 0` si `cad1` es igual que `cad2`  
- `> 0` si `cad1` es mayor que `cad2`

**Ejemplo 12.14**  
Comparar los 7 primeros caracteres de dos cadenas:

```c
char cadena1[] = "Turbo C";
char cadena2[] = "Turbo Prolog";
int i;
i = strncmp(cadena1, cadena2, 7);
```

Esta sentencia asigna un número negativo a la variable `i`, ya que "Turbo C" es menor que "Turbo Prolog".

En el caso de comparar los 5 primeros caracteres:

```c
i = strncmp(cadena1, cadena2, 5);
```

Esta sentencia asigna un cero a la variable `i`, ya que "Turbo" es igual que "Turbo".

## La función strnicrnp( )

La función `strnicmp()` compara los caracteres `num` a la izquierda en las dos cadenas, `cad1` y `cad2`, sin distinguir entre mayúsculas y minúsculas.  
El prototipo es:

```c
int strnicmp(const char* cad1, const char* cad2, size_t num);
```

El resultado será (considerando `num` primeros caracteres):  
- `< 0` si `cad1` es menor que `cad2`  
- `= 0` si `cad1` es igual que `cad2`  
- `> 0` si `cad1` es mayor que `cad2`

**Ejemplo 12.15**  
Comparación de los 5 primeros caracteres, sin distinción entre mayúsculas y minúsculas:

```c
char cadena1[] = "Turbo C";
char cadena2[] = "TURBO C";
int i;
i = strnicmp(cadena1, cadena2, 5);
```

Esta sentencia asigna 0 a la variable `i`, ya que las cadenas "Turbo" y "TURBO" difieren sólo en que son mayúsculas o minúsculas.

