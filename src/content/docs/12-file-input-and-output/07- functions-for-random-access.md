---
title: Funciones para acceso aleatorio
description: A reference page in my new Starlight docs site.
---

El acceso directo -aleatorio-a los datos de un archivo se hace mediante su posición, es decir, el lugar relativo que ocupan. Tiene la ventaja de que se pueden leer y escribir registros en cualquier orden y posición. Son muy rápidos de acceso a la información que contienen. El principal inconveniente que tiene la organización directa es que necesita programar la relación existente entre el contenido de un registro y la posición que ocupan.

Las funciones fseek() y ftell() se usan principalmente para el acceso directo a archivos en C. Éstas consideran el archivo como una secuencia de bytes; el número de byte es el índice del archivo. Según se va leyendo o escribiendo registros o datos en el archivo, el programa mantiene a través de un puntero la posición actual. Con la llamada a la función ftell() se obtiene el valor de dicha posición. La llamada a fseek() permite cambiar la posición del puntero al archivo a una dirección determinada.

## Función fseek()

Con la función fseek() se puede tratar un archivo en C como un array que es una estructura de datos de acceso aleatorio. fseek() sitúa el puntero del archivo en una posición aleatoria, dependiendo del desplazamiento y el origen relativo que se pasan como argumentos. En el Ejemplo 13.14 se supone que existe un archivo de productos, se pide el número de producto y se sitúa el puntero del archivo para leer el registro en una operación de lectura posterior.

Ejemplo 13.14  
Declarar una estructura (registro) PRODUCTO, y abrir un archivo para lectura. Se desea leer un registro cuyo número (posición) se pide por teclado.

```c
typedef struct
{
    char nombre[1411];
    int unidades;
    float precio;
    int pedidos;
} PRODUCTO;

PRODUCTO uno;
int n, stat;
FILE* pfp;
if ((pfp = fopen("conservas.dat", "r")) == NULL)
    puts("No se puede abrir el archivo.");
    exit(-1);
/* Se pide el número de registro */
printf("Número de registro: ");
scanf("%d", &n);
/* Sitúa el puntero del archivo */
stat = fseek(pfp, n * sizeof(PRODUCTO), 0);
/* Comprueba que no ha habido error */
if (stat != 0)
    puts("Error, puntero del archivo movido fuera de este.");
    exit(-1);
/* Lee el registro */
fread(&uno, sizeof(PRODUCTO), 1, pfp);
```

El segundo argumento de fseek() es el desplazamiento, el tercero es el origen del desplazamiento. El formato para llamar a fseek():

```c
fseek(puntero-archivo, desplazamiento, origen);
```

desplazamiento: es el número de bytes a mover; tienen que ser de tipo long.  
origen: es la posición desde la que se cuenta el número de bytes a mover. Puede tener tres valores, que son:  
0: Cuenta desde el inicio del archivo.  
1: Cuenta desde la posición actual del puntero al archivo.  
2: Cuenta desde el final del archivo.

Estos tres valores están representados por tres identificadores (macros):  
0: SEEK_SET  
1: SEEK_CUR  
2: SEEK_END

La función fseek() devuelve un valor entero, distinto de cero si se comete un error en su ejecución; cero si no hay error. El prototipo se encuentra en stdio.h:

```c
int fseek(FILE *pf, long desplazamiento, int origen);
```

**Ejercicio 13.7**

Para celebrar las fiestas patronales de un pueblo se celebra una carrera popular de 9 Km. Se establecen las categorías masculina (M) y femenina (F), y por cada una de ellas, senior y veterano. Los nacidos antes de 1954 son veteranos (tanto para hombres como para mujeres) y el resto seniors. Según se realizan inscripciones se crea el archivo binario CARRERA.POP, de tal forma que el número de dorsal es la posición que ocupa el registro en el archivo. La carrera se celebra; según llegan los corredores se toman los tiempos realizados y los números de dorsales.

Se desea escribir un programa para crear el archivo CARRERA.POP y un segundo programa que actualice cada registro, según el número de dorsal, con el tiempo realizado en la carrera.

Análisis:  
En una estructura se agrupan los campos necesarios para cada participante: nombre, año de nacimiento, sexo, categoría, tiempo empleado (minutos, segundos), número de dorsal y puesto ocupado. El primer programa abre el archivo en modo binario para escribir los registros correspondientes a los participantes en la posición del número de dorsal. Los números de dorsal se asignan según la categoría, para las mujeres veteranas del 51 al 100; para mujeres senior de 101 al 200. Para hombres veteranos de 251 al 500, y para senior del 501 al 1000.

El programa, en primer lugar inicializa los nombres de los registros del archivo a blancos. Los dorsales se asignan aleatoriamente, comprobando que no estén previamente asignados. El segundo programa abre el archivo en modo modificación, accede a un registro, según dorsal y escribe el tiempo y puesto. Los tipos de datos que se crean para la aplicación, estructura fecha, estructura tiempo, estructura atleta, se incluyen en el archivo atleta.h.

```c
/* Archivo atleta.h */
typedef struct fecha
{
    int d, m, a;
} FECHA;

typedef struct tiempo
{
    int h, m, s;
} TIEMPO;

struct atleta
{
    char nombre[28];
    FECHA f;
    char sx; /* Sexo */
    char cat; /* Categoria */
    TIEMPO t;
    unsigned int dorsal;
    unsigned short puesto;
};

typedef struct atleta ADTA;
#define desplazamiento(n) ((n-1) * sizeof(ADTA))
```

```c
/* Programa para dar entrada en el archivo de atletas. */
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>
#include <ctype.h>
#include "atleta.h"

void inicializar(FILE*);
void unatleta(ADTA* at, FILE*);
unsigned numdorsal(char s, char cat, FILE* pf);

int main()
{
    FILE *pf;
    ADTA a;
    char *archivo = "C:\\CARRERA.POP";
    randomize();
    if ((pf = fopen(archivo, "wb+")) == NULL)
    {
        printf("\nError al abrir el archivo, fin del proceso.\n");
        return -1;
    }
    inicializar(pf);

    /* Se introducen registros hasta teclear como nombre: FIN */
    unatleta(&a, pf);
    do {
        fseek(pf, desplazamiento(a.dorsal), SEEK_SET);
        fwrite(&a, sizeof(ADTA), 1, pf);
        unatleta(&a, pf);
    } while (strcmp(a.nombre, "FIN"));
    fclose(pf);
    return 0;
}

void unatleta(ADTA* at, FILE* pf)
{
    printf("Nombre: ");
    gets(at->nombre);
    if (strcmp(at->nombre, "FIN") == 0)
        return;
    printf("Fecha de nacimiento: ");
    scanf("%d %d %d%*c", &at->f.d, &at->f.m, &at->f.a);
    if (at->f.a < 1954)
        at->cat = 'V';
    else
        at->cat = 'S';
    printf("Sexo: ");
    at->sx = (char)toupper(at->sx);
    at->t.h = 0; at->t.m = 0; at->t.s = 0;
    at->dorsal = numdorsal(at->sx, at->cat, pf);
    printf("Dorsal asignado: %u\n", at->dorsal);
    scanf("%c%*c", &at->sx);
}
```

```c
unsigned numdorsal(char s, char cat, FILE* pf)
{
    unsigned base, tope, d;
    ADTA a;
    if (s == 'M' && cat == 'V')
    {
        base = 251; tope = 500;
    }
    else if (s == 'M' && cat == 'S')
    {
        base = 501; tope = 1000;
    }
    d = (unsigned) random() % (tope + 1 - base) + base;
    fseek(pf, desplazamiento(d), SEEK_SET);
    fread(&a, sizeof(ADTA), 1, pf);
    if (!(*a.nombre)) /* Cadena nula: está vacío */
        return d;
    return numdorsal(s, cat, pf);
}
```

```c
void inicializar(FILE* pf)
{
    int k;
    ADTA a;
    a.nombre[0] = '\0';
    for (k = 1; k <= 1000; k++)
        fwrite(&a, sizeof(ADTA), 1, pf);
}
```

```c
/* Programa para dar entrada a los tiempos de los atletas. Primero, dado un número de dorsal se visualiza el registro del atleta, a continuación se introduce los minutos y segundos realizados por el atleta. */
#include <stdio.h>
#include <string.h>
#include "atleta.h"

void datosatleta(ADTA aL);

int main()
{
    FILE *pf;
    ADTA a;
    TIEMPO h = {0, 0, 0};
    char *archivo = "C:\\CARRERA.POL";
    unsigned dorsal = 1;

    if ((pf = fopen(archivo, "rb")) == NULL)
    {
        printf("\nError al abrir el archivo %s, fin del proceso.\n");
        return -1;
    }

    printf("\nDorsal del atleta: ");
    scanf("%u", &dorsal);
    while (dorsal) 
    {
        fseek(pf, desplazamiento(dorsal), SEEK_SET);
        fread(&a, sizeof(ADTA), 1, pf);
        if (*a.nombre)
            datosatleta(a);
        printf("\nTiempo realizado en minutos y segundos: ");
        scanf("%d %d", &h.m, &h.s);
        a.t = h;
        fseek(pf, desplazamiento(dorsal), SEEK_SET);
        fwrite(&a, sizeof(ADTA), 1, pf);
    }
    fclose(pf);
    return 0;
}

void datosatleta(ADTA aL)
{
    printf("Nombre: %s\n", aL.nombre);
    printf("Fecha de nacimiento: %d-%d-%d\n", aL.f.d, aL.f.m, aL.f.a);
    printf("Categoría: %c\n", aL.cat);
    printf("Dorsal: %u\n", aL.dorsal);
    printf("Tiempo de carrera: %d min %d seg\n", aL.t.m, aL.t.s);
}
```

## Función ftell()

La posición actual del archivo se puede obtener llamando a la función ftell() y pasando un puntero al archivo como argumento. La función devuelve la posición como número de bytes (en entero largo: long int) desde el inicio del archivo (byte 0).

Ejemplo 13.15  
En este ejemplo se puede observar cómo se desplaza el puntero del archivo según se escriben datos en él.

```c
#include <stdio.h>

int main(void)
{
    FILE *pf;
    float x = 123.5;
    pf = fopen("CARTAS.TXT", "w");
    printf("Posición inicial: %ld\n", ftell(pf)); /* muestra 0 */
    fprintf(pf, "Caracteres de prueba");
    printf("Posición actual: %ld\n", ftell(pf)); /* muestra 24 */
    fwrite(&x, sizeof(float), 1, pf);
    printf("Posición actual: %ld\n", ftell(pf)); /* muestra 28 */
    fclose(pf);
    return 0;
}
```

Para llamar a la función se pasa como argumento el puntero a FILE. El prototipo se encuentra en stdio.h:

```c
long int ftell(FILE *pf);
```