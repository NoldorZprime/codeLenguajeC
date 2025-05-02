---
title: Funciones de utilidad
description: A reference page in my new Starlight docs site.
---

C incluyen una serie de funciones de utilidad que se encuentran en el archivo de cabecera STDLIB.H y que se listan a continuación.

**0 abs(n), labs(n)**  
```c
int abs (int n)  
long labs(long n)
```
Devuelven el valor absoluto de n.

**div(num, denom)**  
```c
div-t div(int num, int denom)
```
Calcula el cociente y el resto de `num`, dividido por `denom` y almacena el resultado en `quot` y `rem`, miembros `int` de la estructura `div-t`.

```c
typedef struct {
  int quot;  /* cociente */
  int rem;   /* resto */
} div-t;
```

El siguiente ejemplo calcula y visualiza el cociente y el resto de la división de dos enteros:

```c
#include <stdlib.h>
#include <stdio.h>

int main(void) {
  div-t resultado;
  resultado = div(16, 4);
  printf("Cociente %d", resultado.quot);
  printf(" Resto %d", resultado.rem);
  return 0;
}
```

**ldiv(num, denom)**  
Calcula el cociente y resto de `num` dividido por `denom`, y almacena los resultados de `quot` y `rem`, miembros `long` de la estructura `ldiv-t`.

```c
typedef struct {
  long int quot;  /* cociente */
  long int rem;   /* resto */
} ldiv-t;
```

```c
resultado = ldiv(1600L, 40L);
```
