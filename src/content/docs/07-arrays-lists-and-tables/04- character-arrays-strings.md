---
title: Caracteres/cadena de texto
description: A reference page in my new Starlight docs site.
---

Una cadena de texto es un conjunto de caracteres, tales como «ABCDEFG». C soporta cadenas de texto utilizando un array de caracteres que contenga una secuencia de caracteres:

```c
char cadena[] = "ABCDEFG";
```

Es importante comprender la diferencia entre un array de caracteres y una cadena de caracteres. Las cadenas contienen un carácter nulo al final del array de caracteres.

Cadena: `A B C D E F \0`

Las cadenas se deben almacenar en arrays de caracteres, pero no todos los arrays de caracteres contienen cadenas.

Examine la Figura 8.5, donde se muestra una cadena de caracteres y un array de caracteres.

**Figura 8.5**  
(a) Array de caracteres; (b) Cadena.

```c
Cadena[3] = 'D';
Cadena[4] = 'E';
Cadena[5] = 'F';
Cadena[6] = '\0';
```

Sin embargo, no se puede asignar una cadena a un array del siguiente modo:

```c
Cadena = "ABCDEF";
```

Para copiar una constante cadena o copiar una variable de cadena a otra variable de cadena se debe utilizar la función de la biblioteca estándar, que se estudiará posteriormente: `strcpy()` («copiar cadenas»). `strcpy()` permite copiar una constante de cadena en una cadena. Para copiar el nombre "Abracadabra" en el array `nombre`, se puede escribir:

```c
strcpy(nombre, "Abracadabra"); /* Copia Abracadabra en nombre */
```

`strcpy()` añade un carácter nulo al final de la cadena. A fin de que no se produzcan errores en la sentencia anterior, se debe asegurar que el array de caracteres `nombre` tenga elementos suficientes para contener la cadena situada a su derecha.

**Ejemplo**  
Rellenar los elementos de un array con números reales positivos procedentes del teclado.

```c
#include <stdio.h>
/* Constantes y variables globales */
#define MAX 10
float muestra[MAX];
void main() {
    int i;
    printf("\nIntroduzca una lista de %d elementos positivos.\n", MAX);
    for (i = 0; i < MAX; muestra[i] > 0 ? ++i : i)
        scanf("%f", &muestra[i]);
}
```

En el bucle principal, sólo se incrementa `i` si `muestra[i]` es positivo: `muestra[i] > 0 ? ++i : i`. Con este incremento condicional se consigue que todos los valores almacenados sean positivos.

**Ejemplo**  
Visualizar el array `muestra` después de introducir datos en el mismo, separándolos con el tabulador:

```c
#include <stdio.h>
#define MAX 10
float muestra[MAX];
void main() {
    int i;
    printf("\nIntroduzca una lista de %d elementos positivos.\n", MAX);
    for (i = 0; i < MAX; muestra[i] > 0 ? ++i : i)
        scanf("%f", &muestra[i]);
    printf("\nDatos leídos del teclado: ");
    for (i = 0; i < MAX; ++i)
        printf("%f\t", muestra[i]);
}
```
