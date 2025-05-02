---
title: Funciones de carácter
description: A reference page in my new Starlight docs site.
---

**"El archivo de cabecera `<CTYPE.H>` define un grupo de funciones/macros de manipulación de caracteres.**  
Todas las funciones devuelven un resultado de valor verdadero (distinto de cero) o falso (cero).  
Para utilizar cualquiera de las funciones (Tabla 7.3) no se olvide incluir el archivo de cabecera `<CTYPE.H>` en la parte superior de cualquier programa que haga uso de esas funciones.

**Funciones 235**

**Tabla Funciones de caracteres.**

| Función              | Prueba (test) de                                                         |
|----------------------|--------------------------------------------------------------------------|
| `int isalpha(int c)` | Letra mayúscula o minúscula.                                             |
| `int isdigit(int c)` | Dígito decimal.                                                          |
| `int isupper(int c)` | Letra mayúscula (A - Z).                                                 |
| `int islower(int c)` | Letra minúscula (a - z).                                                 |
| `int isalnum(int c)` | Letra o dígito; `isalpha(c)` || `isdigit(c)`                             |
| `int iscntrl(int c)` | Carácter de control.                                                     |
| `int isxdigit(int c)`| Dígito hexadecimal.                                                      |
| `int isprint(int c)` | Carácter imprimible incluyendo ESPACIO.                                  |
| `int isgraph(int c)` | Carácter imprimible excepto ESPACIO.                                     |
| `int isspace(int c)` | ESPACIO, AVANCE DE PÁGINA, NUEVA LÍNEA, RETORNO DE CARRO, TABULACIÓN... |
| `int ispunct(int c)` | Carácter imprimible no espacio, dígito o letra.                          |
| `int toupper(int c)` | Convierte a letras mayúsculas.                                           |
| `int tolower(int c)` | Convierte a letras minúsculas.                                           |

## Comprobación alfabética y de dígitos

Existen varias funciones que sirven para comprobar condiciones alfabéticas:

- `isalpha(c)`  
  Devuelve verdadero (distinto de cero) si `c` es una letra mayúscula o minúscula. Se devuelve un valor falso si se pasa un carácter distinto de letra a esta función.

- `islower(c)`  
  Devuelve verdadero (distinto de cero) si `c` es una letra minúscula. Se devuelve un valor falso (0), si se pasa un carácter distinto de una minúscula.

- `isupper(c)`  
  Devuelve verdadero (distinto de cero) si `c` es una letra mayúscula, falso con cualquier otro carácter.

Las siguientes funciones comprueban caracteres numéricos:

- `isdigit(c)`  
  Comprueba si `c` es un dígito de 0 a 9, devolviendo verdadero (distinto de cero) en ese caso, y falso en caso contrario.

- `isxdigit(c)`  
  Devuelve verdadero si `c` es cualquier dígito hexadecimal (0 a 9, A a F, o bien a a f) y falso en cualquier otro caso.

Las siguientes funciones comprueban argumentos numéricos o alfabéticos:

- `isalnum(c)`  
  Devuelve un valor verdadero, si `c` es un dígito de 0 a 9 o un carácter alfabético (bien mayúscula o minúscula) y falso en cualquier otro caso.

**Ejemplo**

Leer un carácter del teclado y comprobar si es una letra.

```c
#include <stdio.h>
#include <ctype.h>

int main() {
    // Solicita iniciales y comprueba que es alfabética
    char inicial;
    printf("¿Cuál es su primer carácter inicial?: ");
    scanf("%c", &inicial);

    while (!isalpha(inicial)) {
        puts("Carácter no alfabético");
        printf("¿Cuál es su siguiente inicial?: ");
        scanf("%c", &inicial);
    }

    puts("Terminado!");
    return 0;
}
```

## Funciones de prueba de caracteres especiales

Algunas funciones incorporadas a la biblioteca de funciones comprueban caracteres especiales, principalmente a efectos de legibilidad. Estas funciones son las siguientes:

- `iscntrl(c)`  
  Devuelve verdadero si `c` es un carácter de control (códigos ASCII 0 a 31) y falso en caso contrario.

- `isgraph(c)`  
  Devuelve verdadero si `c` es un carácter imprimible (no de control) excepto espacio; en caso contrario, se devuelve falso.

- `isprint(c)`  
  Devuelve verdadero si `c` es un carácter imprimible (código ASCII 32 a 127) incluyendo un espacio; en caso contrario, se devuelve falso.

- `ispunct(c)`  
  Devuelve verdadero si `c` es cualquier carácter de puntuación (un carácter imprimible distinto de espacio, letra o dígito); falso, en caso contrario.

- `isspace(c)`  
  Devuelve verdadero si `c` es un carácter espacio, nueva línea (`\n`), retorno de carro (`\r`), tabulación (`\t`) o tabulación vertical (`\v`).

## Funciones de conversión de caracteres

Existen funciones que sirven para cambiar caracteres mayúsculas a minúsculas o viceversa:

- `tolower(c)`  
  Convierte el carácter `c` a minúscula, si ya no lo es.

- `toupper(c)`  
  Convierte el carácter `c` a mayúscula, si ya no lo es.

**Funciones 237**  
**Ejemplo 7.5**  
El programa `MAYMIN1.c` comprueba si la entrada es una V o una H.

```c
#include <stdio.h>
#include <ctype.h>

int main() {
    char resp; // respuesta del usuario
    char c;

    printf("¿Es un varón o una hembra (V/H)?: ");
    scanf("%c", &resp);

    resp = toupper(resp);

    switch (resp) {
        case 'V':
            puts("Es un enfermero");
            break;
        case 'H':
            puts("Es una maestra");
            break;
        default:
            puts("No es ni enfermero ni maestra");
            break;
    }

    return 0;
}
```
