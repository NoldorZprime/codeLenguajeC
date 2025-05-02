---
title: Creación de archivo secuencial
description: A reference page in my new Starlight docs site.
---

Una vez abierto un archivo para escribir datos hay que grabar los datos en el archivo. La biblioteca C proporciona diversas funciones para escribir datos en el archivo a través del puntero a FILE asociado. Las funciones de entrada y de salida de archivos tienen mucho parecido con las funciones utilizadas para entrada y salida para los flujos stdin (teclado) y stdout (pantalla): printf( ), scanf( ), getchar( ), putchar( ), gets( ) y puts( ). Todas tienen una versión para archivos que empieza por la letra f, así se tiene fprintf( ), fscanf( ), fputs( ), fgets( ); la mayoría de las funciones específicas de archivos empiezan por f.

## Funciones putc( ) y fputc( )

Ambas funciones son idénticas, putc( ) está definida como macro. Escriben un carácter en el archivo asociado con el puntero a FILE. Devuelven el carácter escrito, o bien EOF si no puede ser escrito. El formato de llamada:  
putc(c, puntero-archivo);  
fputc(c, puntero-archivo);  
siendo c el carácter a escribir.

**Ejercicio 13.1**  
Se desea crear un archivo SALIDA.PTA con los caracteres introducidos por teclado.  
**Análisis**  
Una vez abierto el archivo, un bucle mientras (while) no sea fin de archivo (macro EOF) lee carácter a carácter y se escribe en el archivo asociado al puntero FILE.  
```c
#include <stdio.h>
int main() {
    int c;
    FILE* pf;
    char *salida = "#SALIDA.&%@";
    if ((pf = fopen(salida,"wt")) == NULL) {
        puts("ERROR EN LA OPERACION DE APERTURA");
        return 1;
    }
    fclose(pf);
    return 0;
}
```
En el Ejercicio 13.1, en vez de putc(c, pf) se puede utilizar fputc(c, pf). El prototipo de ambas funciones se encuentra en stdio.h, es el siguiente:  
int putc(int c, FILE* pf);  
int fputc(int c, FILE* pf);

## Funciones getc( ) y fgetc( )
Estas dos funciones son iguales, igual formato e igual funcionalidad; pueden considerarse que son recíprocas de putc( ) y fputc( ). Éstas, getc( ) y fgetc( ), leen un carácter (el siguiente carácter) del archivo asociado al puntero a FILE. Devuelven el carácter leído o EOF si es fin de archivo (o si ha habido un error). El formato de llamada es:  
getc(puntero-archivo);  
fgetc(puntero-archivo);

**Ejercicio 13.2**  
El archivo SALIDA.PTA, creado en el Problema 13.1, se desea leer para mostrarlo por pantalla y contar las líneas que tiene.  
**Análisis**  
Una vez abierto el archivo de texto en modo lectura, un bucle mientras no sea fin de archivo (macro EOF) lee carácter a carácter y se escribe en pantalla. En el caso de leer el carácter de fin de línea, se debe saltar a la línea siguiente y contabilizar una línea más.  
```c
#include <stdio.h>
int main() {
    int c, n = 0;
    FILE* pf;
    char *nombre = "\\SALIDA.TXT";
    if ((pf = fopen(nombre, "rt")) == NULL) {
        puts("ERROR EN LA OPERACION DE APERTURA");
        return 1;
    }
    if (c == '\n') {
        n++;
        printf("\n");
    }
    putchar(c);
    printf("\nNúmero de líneas del archivo: %d", n);
    fclose(pf);
    return 0;
}
```
El prototipo de ambas funciones se encuentra en stdio.h y es el siguiente:  
int getc(FILE* pf);  
int fgetc(FILE* pf);

## Funciones fputs( ) y fgets( )

Estas funciones escriben/leen una cadena de caracteres en el archivo asociado. La función fputs( ) escribe una cadena de caracteres. La función devuelve EOF si no ha podido escribir la cadena, un valor no negativo si la escritura es correcta; el formato de llamada es:  
fputs(cadena, puntero-archivo);  
La función fgets( ) lee una cadena de caracteres del archivo. Termina la captación de la cadena cuando lee el carácter de fin de línea, o bien cuando ha leído n - 1 caracteres, siendo n un argumento entero de la función. La función devuelve un puntero a la cadena devuelta, o NULL si ha habido un error. El formato de llamada es:  
fgets(cadena, n, puntero-archivo);

**Ejemplo 13.8**  
Lectura de un máximo de 80 caracteres de un archivo:  
```c
#define T 81
char cad[81];
FILE *f;
fgets(cad, T, f);
```

**Ejercicio 13.3**  
El archivo CARTAS.DAT contiene un texto al que se le desea añadir nuevas líneas, de longitud mínima 30 caracteres, desde el archivo PRIMERO.DAT.  
**Análisis**  
El problema se resuelve abriendo el primer archivo en modo añadir ('a'), el segundo archivo en modo lectura ('r'). Las líneas se leen con fgets( ), si cumplen la condición de longitud se escriben en el archivo CARTAS. Al tener que realizar un proceso completo del archivo, se realizan iteraciones mientras no fin de archivo.  
```c
#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#define MX 121
#define MN 30
int main() {
    FILE *in, *out;
    char nom1[] = "\\CARTAS.DAT";
    char nom2[] = "\\PRIMERO.DAT";
    char cad[MX];
    in = fopen(nom2, "rt");
    out = fopen(nom1, "at");
    if (in == NULL || out == NULL) {
        puts("Error al abrir archivos.");
        exit(-1);
    }
    while (fgets(cad, MX, in)) {
        if (strlen(cad) >= MN)
            fputs(cad, out);
        else
            puts(cad);
    }
    fclose(in);
    fclose(out);
    return 0;
}
```
El prototipo de ambas funciones está en stdio.h, es el siguiente:  
int fputs(char* cad, FILE* pf);  
char* fgets(char* cad, int n, FILE* pf);

## Funciones fprintf( ) y fscanf( )
Las funciones printf( ) y scanf( ) permiten escribir o leer variables de cualquier tipo de dato estándar, los códigos de formato (%d, %f...) indican a C la transformación que debe realizar con la secuencia de caracteres (conversión a entero...). La misma funcionalidad tiene fprintf( ) y fscanf( ) con los flujos (archivos asociados) a que se aplican. Estas dos funciones tienen como primer argumento el puntero a file asociado al archivo de texto.

**Ejercicio 13.4**  
Se desea crear el archivo de texto PERSONAS.DAT de tal forma que cada línea contenga un registro con los datos de una persona que contenga los campos nombre, fecha de nacimiento (día(nn), mes(nn), año(nnnn) y mes en ASCII).  
**Análisis**  
En la estructura persona se declaran los campos correspondientes. Se define una función que devuelve una estructura persona leída del teclado. El mes en ASCII se obtiene de una función que tiene como entrada el número de mes y devuelve una cadena con el mes en ASCII. Los campos de la estructura son escritos en el archivo con fprintf( ).  
```c
#include <malloc.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>

typedef struct {
    char* nm;
    int dia;
    int ms;
    int aa;
    char mes[11];
} PERSONA;

void entrada(PERSONA* p);
char* mes_ascii(short n);

int main() {
    FILE *pff;
    char nf[] = "\\PERSONAS.DAT";
    char r = 'S';
    if ((pff = fopen(nf, "wt")) == NULL) {
        puts("Error al abrir archivos.");
        exit(-1);
    }
    while (toupper(r) == 'S') {
        PERSONA pt;
        entrada(&pt);
        printf("%s %d - %d - %d %s\n", pt.nm, pt.dia, pt.ms, pt.aa, pt.mes);
        fprintf(pff, "%s %d - %d - %d %s\n", pt.nm, pt.dia, pt.ms, pt.aa, pt.mes);
        printf("¿Otro registro? : ");
        scanf("%c%*c", &r);
    }
    fclose(pff);
    return 0;
}

void entrada(PERSONA* p) {
    char bf[81];
    printf("Nombre: ");
    gets(bf);
    p->nm = (char*)malloc((strlen(bf) + 1) * sizeof(char));
    strcpy(p->nm, bf);
    printf("Fecha de nacimiento (dd mm aaaa): ");
    scanf("%d %d %d%*c", &p->dia, &p->ms, &p->aa);
    printf("\n%s\n", mes_ascii(p->ms));
    strcpy(p->mes, mes_ascii(p->ms));
}

char* mes_ascii(short n) {
    static char* mes[12] = {
        "Enero", "Febrero", "Marzo", "Abril",
        "Mayo", "Junio", "Julio", "Agosto",
        "Septiembre", "Octubre", "Noviembre", "Diciembre"
    };
    if (n >= 1 && n <= 12)
        return mes[n - 1];
    return "Error mes";
}
```
El prototipo de ambas funciones está en stdio.h, y es el siguiente:  
int fprintf(FILE* pf, const char* formato, ...);  
int fscanf(FILE* pf, const char* formato, ...);

## Función feof( )

Diversas funciones de lectura de caracteres devuelven EOF cuando leen el carácter de fin de archivo. Con dicho valor, que es una macro definida en stdio.h, ha sido posible formar bucles para leer un archivo completo. La función feof( ) realiza el cometido anterior, devuelve un valor distinto de 0 (true) cuando se lee el carácter de fin de archivo, en caso contrario devuelve 0 (false).  

**Ejemplo 13.9**  
El siguiente ejemplo transforma el bucle del ejercicio 13.2, utilizando la función feof( ):  
```c
int c, n = 0;
FILE* pf;
char *nombre = "\\SALIDA.TXT";
while (!feof(pf)) {
    c = getc(pf);
    if (c == '\n') {
        n++;
        printf("\n");
    }
}
```
El prototipo de la función está en stdio.h, es el siguiente:  
int feof(FILE* pf);

## Función rewind( )

Una vez que se alcanza el fin de un archivo, nuevas llamadas a feof( ) siguen devolviendo un valor distinto de cero (true). Con la función rewind( ) se sitúa el puntero del archivo al inicio de éste. El formato de llamada es:  
rewind(puntero-archivo).

**Ejemplo 13.10**  
Este ejemplo lee un archivo de texto, cuenta el número de líneas que contiene y a continuación sitúa el puntero del archivo al inicio para una lectura posterior.  
```c
#include <stdio.h>
#include <string.h>
FILE* pg;
char nom[] = "PLWIO.DAT";
char buf[121];
int nl = 0;
if ((pg = fopen(nom, "rt")) == NULL) {
    puts("Error al abrir el archivo.");
    exit(-1);
}
while (!feof(pg)) {
    rewind(pg);
    while (!feof(pg)) {
        fgets(buf, 121, pg);
        nl++;
    }
}
```
