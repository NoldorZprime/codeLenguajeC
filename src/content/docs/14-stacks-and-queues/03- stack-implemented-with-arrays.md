---
title: Pila implementado con arrays
description: A reference page in my new Starlight docs site.
---

Una pila se puede implementar mediante arrays o mediante listas enlazadas. Una implementación estática se realiza utilizando un array de tamaño fijo y una implementación dinámica mediante una lista enlazada. En C, para definir una pila con arrays se utiliza una estructura. Los miembros de la estructura pila incluyen una lista (array) y un índice o puntero a la cima de la pila; además, una constante con el máximo número de elementos. El tipo pila, junto al conjunto de operaciones de la pila, se pueden encerrar en un archivo de inclusión (pila.h). Al utilizar un array para contener los elementos de la pila, hay que tener en cuenta que el tamaño de la pila no puede exceder el número de elementos del array y la condición pila llena será significativa para el diseño.

El método usual de introducir elementos en una pila es definir el fondo de la pila en la posición 0 del array y sin ningún elemento en su interior, es decir, definir una pila vacía; a continuación, se van introduciendo elementos en el array (en la pila) de modo que el primer elemento añadido se introduce en una pila vacía y en la posición 0, el segundo elemento en la posición 1, el siguiente en la posición 2, y así sucesivamente. Con estas operaciones, el puntero (apuntador) que apunta a la cima de la pila se va incrementando en 1 cada vez que se añade un nuevo elemento; es decir, el puntero de la pila almacena el índice del array que se está utilizando como cima de la pila. Los algoritmos de introducir «insertar» (push) y quitar «sacar» (pop) datos de la pila utilizan el índice del array como puntero de la pila, y son:

### Insertar (push):
1. Verificar si la pila no está llena.
2. Incrementar en 1 el puntero de la pila.
3. Almacenar el elemento en la posición del puntero de la pila.

### Quitar (pop):
1. Si la pila no está vacía.
2. Leer el elemento de la posición del puntero de la pila.
3. Decrementar en 1 el puntero de la pila.

En el caso de que el array que define la pila tenga TamañoPila elementos, las posiciones del array, es decir, el índice o puntero de la pila, estarán comprendidas en el rango 0 a TamañoPila-1 elementos, de modo que en una pila llena el puntero de la pila apunta a TamañoPila-1 y en una pila vacía el puntero de la pila apunta a -1, ya que 0, teóricamente, será el índice del primer elemento.

**Ejemplo 15.1:**  
Una pila de 7 elementos se puede representar gráficamente así:

```
Cima
1A 0 1 2 3 4 5 6 A
Pila vacía
Puntero de la pila = -1
Pila llena
Puntero de la pila = 6
```

Si se almacenan los datos A, B, C, ... en la pila, se puede representar gráficamente por alguno de estos métodos.

**Pilas y colas 475**

**Cima = 2**

Veamos ahora cómo queda la pila en función de diferentes situaciones de un posible programa.

## Especificación del tipo pila

La declaración de una pila incluye los datos y operaciones ya citados anteriormente:
1. Datos de la pila (tipo T, que es conveniente definirlo mediante typedef).
2. Verificar que la pila no está llena antes de intentar insertar o poner («push») un elemento en la pila; verificar que una pila no está vacía antes de intentar quitar («pop») un elemento de la pila. Si estas precondiciones no se cumplen, se debe visualizar un mensaje de error y el programa debe terminar.
3. PilaVacía devuelve 1 (verdadero) si la pila está vacía y 0 (falso) en caso contrario.
4. PilaLlena devuelve 1 (verdadero) si la pila está llena y 0 (falso) en caso contrario.
5. LimpiarPila: Se limpia o vacía la pila, dejándola sin elementos y disponible para otras tareas.
6. Cima: Devuelve el valor situado en la cima de la pila, pero no se decrementa el puntero de la pila, ya que la pila queda intacta.

**Declaración del tipo Pila**

```c
/* archivo pildarray.h */
#include <stdio.h>
#include <stdlib.h>
#define MaxTamaPila 100
typedef struct {
    int listapila[MaxTamaPila];
    int cima;
} Pila;
```

Antes de incluir el archivo `pildarray.h`, debe declararse el tipo Pila. Así, si se quiere una pila de enteros:

```c
typedef int TipoPila;
#include "pildarray.h"
```

En el caso de que la pila fuera de números complejos:

```c
typedef struct {
    float x, y;
} TipoPila;
#include "pildarray.h"
```

---

**Ejemplo 15.2**

Escribir un programa que manipule una pila de enteros, con el tipo definido anteriormente, e introduzca un dato de tipo entero.

El programa crea una pila de números enteros, inserta en la pila un dato leído del teclado y visualiza el elemento cima.

```c
typedef int TipoDato;
#include "pildarray.h"
#include <stdio.h>

void main() {
    Pila P;
    int x;
    CrearPila(&P);  /* Crea una pila vacía */
    scanf("%d", &x);
    Insertar(&P, x);  /* inserta x en la pila P */
    printf("Cima: %d\n", Cima(P));  /* Visualiza el último elemento */
    LimpiarPila(&P);  /* Limpia la pila */
}
```

## Implementación de las operaciones sobre pilas

Las operaciones de la pila definidas en la especificación se implementan en el archivo `pildarray.c` para después formar un proyecto con otros módulos y la función principal.

```c
/* archivo pildarray.c */
#include "pildarray.h"

/* Inicializa la pila a pila vacía */
void CrearPila(Pila* P) {
    P->cima = -1;
}

/* Inserta un elemento en la pila */
void Insertar(Pila* P, const TipoDato elemento) {
    if (PilaLlena(*P)) {
        puts("Desbordamiento pila");
        exit(1);
    }
    P->cima++;
    P->listapila[P->cima] = elemento;
}

/* Quitar un elemento de la pila */
TipoDato Quitar(Pila* P) {
    TipoDato aux;
    if (PilaVacía(*P)) {
        puts("Se intenta sacar un elemento en pila vacía");
        exit(1);
    }
    aux = P->listapila[P->cima];
    P->cima--;
    return aux;
}
```

## Operaciones de verificación del estado de la pila

Se debe proteger la integridad de la pila, por lo que el tipo `Pila` ha de proporcionar operaciones que comprueben el estado de la pila: pila vacía o pila llena. Asimismo, se ha de definir una operación que restaure la condición inicial de la pila, que fue determinada por el constructor `CrearPila` (cima de la pila a -1).

```c
/* Verificar pila vacía */
int PilaVacía(Pila P) {
    return P.cima == -1;
}

/* Verificar si la pila está llena */
int PilaLlena(Pila P) {
    return P.cima == MaxTamaPila - 1;
}

/* Limpiar la pila */
void LimpiarPila(Pila* P) {
    P->cima = -1;
}
```

**Ejercicio 15.1**  
Escribir un programa que utilice la clase y J y 1 d para comprobar si una determinada frase/palabra (cadena de caracteres) es un palíndromo. Nota: Una palabra o frase es un palíndromo si la lectura directa e inversa de la misma tiene igual valor: "alila" es un palíndromo; "cara" (arac) no es un palíndromo.

**Análisis**  
La palabra se lee carácter a carácter, de tal forma que a la vez que se añade a un string se inserta en una pila de caracteres. Una vez leída la palabra, se compara el primer carácter del string con el carácter que se extrae de la pila. Si son iguales, sigue la comparación con el siguiente carácter del string y de la pila; así hasta que la pila se queda vacía o hay un carácter no coincidente.  
Al guardar los caracteres de la palabra en la pila se garantiza que las comparaciones son entre caracteres que están en orden inverso: primero con el último.

La codificación consta de tres archivos:
- El archivo `pilarray.h` con las declaraciones de la pila.
- El archivo `pilarray.c` con la implementación de las operaciones de la pila.
- El archivo `palindrome.c` para leer la palabra y comprobar con ayuda de la pila si es palíndromo.

**Archivo `pilarray.h`**

```c
#include <stdio.h>
#include <stdlib.h>
#define MaxTamaPila 100
typedef struct {
    TipoDato listapila[MaxTamaPila];
    int cima;
} Pila;

/* Operaciones sobre la Pila */
void CrearPila(Pila* P);
void Insertar(Pila* P, const TipoDato elemento);
TipoDato Quitar(Pila* P);
void LimpiarPila(Pila* P);

/* Operación de acceso Pila */
TipoDato Cima(Pila P);

/* Verificación estado de la Pila */
int PilaVacia(Pila P);
int PilaLlena(Pila P);
```

**Archivo `pilarray.c`**

```c
typedef char TipoDato;
#include "pilarray.h"

/* Inicializa la pila a pila vacía */
void CrearPila(Pila* P) {
    P->cima = -1;
}

/* Insertar un elemento en la pila */
void Insertar(Pila* P, const TipoDato elemento) {
    /* Si la pila está llena, termina el programa */
    if (PilaLlena(*P)) {
        puts("Desbordamiento pila");
        exit(1);
    }
    /* Incrementar puntero cima y copiar elemento en listapila */
    P->cima++;
    P->listapila[P->cima] = elemento;
}

/* Quitar un elemento de la pila */
TipoDato Quitar(Pila* P) {
    TipoDato Aux;
    /* Si la pila está vacía, termina el programa */
    if (PilaVacia(*P)) {
        puts("Se intenta sacar un elemento en pila vacía");
        exit(1);
    }
    /* Guardar elemento de la cima */
    Aux = P->listapila[P->cima];
    P->cima--;
    return Aux;
}

/* Verificar pila vacía */
int PilaVacia(Pila P) {
    /* Devuelve el valor lógico resultante de expresión cima == -1 */
    return P.cima == -1;
}

/* Verificar si la pila está llena */
int PilaLlena(Pila P) {
    return P.cima == MaxTamaPila - 1;
}

/* Limpiar la pila */
void LimpiarPila(Pila* P) {
    P->cima = -1;
}

/* Devolver valor del elemento en la cima */
TipoDato Cima(Pila P) {
    if (P.cima == -1) {
        puts("Se intenta sacar un elemento en pila vacía");
        exit(1);
    }
    return P.listapila[P.cima];
}
```

**Archivo `palindrome.c`**

```c
#include "pilarray.h"
#include <ctype.h>

int main() {
    char palabra[100], ch;
    Pila P;
    int j, palmo;

    CrearPila(&P);
    do {
        /* Lee la palabra */
        puts("\nPalabra a comprobar si es palíndromo");
        for (j = 0; (ch = getchar()) != '\n'; j++) {
            palabra[j] = ch;
            Insertar(&P, ch); /* Pone en la pila */
        }
        palabra[j] = '\0';

        /* Comprueba si es palíndromo */
        palmo = 1;
        for (j = 0; palmo && !PilaVacia(P); ) {
            if (palmo)
                palmo = palabra[j++] == Quitar(&P);
        }
        if (palmo) {
            printf("\nLa palabra %s es un palíndromo\n", palabra);
        } else {
            printf("\nLa palabra %s no es un palíndromo\n", palabra);
        }
        printf("\n¿Otra palabra? : ");
        scanf("%c%*c", &ch);
    } while (tolower(ch) == 's');

    return 0;
}
```
