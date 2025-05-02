---
title: Archivos binarios en C
description: A reference page in my new Starlight docs site.
---

Para abrir un archivo en modo binario hay que especificar la opción b en el modo. Los archivos binarios son secuencias de 0s y 1s. Una de las características de los archivos binarios es que optimizan la memoria ocupada por un archivo, sobre todo con campos numéricos. Así, almacenar en modo binario un entero supone una ocupación de 2 bytes o 4 bytes (depende del sistema), y un número real 4 bytes o 8 bytes; en modo texto primero se convierte el valor numérico en una cadena de dígitos (%6d, %8.2f, ...) y después se escribe en el archivo. La mayor eficiencia de los archivos binarios se contrapone con el hecho de que su lectura se tiene que hacer en modo binario y que sólo se pueden visualizar desde el entorno de un programa C. Los modos para abrir un archivo binario son los mismos que para abrir un archivo de texto, sustituyendo la t por b: "r+b", "w+b", "ld+b", "llrb", "Ilwb", "ab".

Ejemplo 13.11  
En este ejemplo se declaran 3 punteros a FILE. A continuación se abren tres archivos en modo binario.  
```c
FILE *pfl, *pf2, *pf3;  
pfl = fopen("gorjal.arr","rb"); /*Lectura de archivo binario*/  
pf2 = fopen("tempes.feb","w+b"); /*leer/escribir archivo binario*/  
pf3 = fopen("te1con.tff","ab"); /*añadir a archivo binario*/  
```

La biblioteca de C proporciona dos funciones especialmente dirigidas al proceso de entrada y salida de archivos binarios con buffer, son `fread()` y `fwrite()`.

## Función de salida `fwrite()`

La función `fwrite()` escribe un buffer de cualquier tipo de dato en un archivo binario. El formato de llamada es:  
```c
fwrite(direccion-buffer, tamaño, numero-elementos, puntero-archivo);
```

Ejemplo 13.12  
En el ejemplo se abre un archivo en modo binario para escritura. Se escriben números reales en doble precisión en el bucle `for`. El buffer es la variable `x`, el tamaño lo devuelve el operador `sizeof`.  
```c
FILE *fd;  
double x;  
fd = fopen("reales.num","wb");  
for (x=0.5; x>0.01;)  
    fwrite(&x, sizeof(double), 1, fd);  
    x = pow(x, 2.);  
```

El prototipo de la función está en `stdio.h`:  
```c
size_t fwrite(const void *ptr, size_t size, size_t n, FILE *fp);
```
El tipo `size_t` está definido en `stdio.h` y es un tipo entero.

Ejercicio 13.5  
Se dispone de una muestra de las coordenadas de puntos de un plano representada por pares de números enteros `(x, y)`, tales que `0 <= x <= 1700` y `0 <= y <= 1100`. Se desea guardar en un archivo binario todos los puntos disponibles.

Análisis  
El nombre del archivo es `PUNTOS.DAT`. Según se lee un punto, se comprueba la validez del punto y se escribe en el archivo con una llamada a la función `fwrite()`. La condición de terminación del bucle es la lectura del punto `(0, 0)`.  
```c
#include <stdio.h>  
struct punto {  
    int x, y;  
};  
typedef struct punto PUNTO;  
int main() {  
    PUNTO p;  
    char *nom = "C:\\PUNTOS.DAT";  
    FILE *pp;  
    if ((pp = fopen(nom, "wb")) == NULL) {  
        puts("\nError en la operación de abrir archivo.");  
        return -1;  
    }  
    puts("\nIntroduce coordenadas de puntos, para acabar: (0,0)");  
    do {  
        scanf("%d %d", &p.x, &p.y);  
        if (p.x <= 0 || p.y <= 0) {  
            printf("Coordenadas deben ser >= 0: ");  
            scanf("%d %d", &p.x, &p.y);  
        }  
        if (p.x > 0 || p.y > 0) {  
            fwrite(&p, sizeof(PUNTO), 1, pp);  
        }  
    } while (p.x > 0 || p.y > 0);  
    fclose(pp);  
    return 0;  
}
```

Los archivos binarios están indicados especialmente para guardar registros, estructuras en C. El método habitual es la escritura sucesiva de estructuras en el archivo asociado al puntero; la lectura de estos archivos es similar.

## Función de lectura `fread()`

Esta función lee de un archivo n bloques de bytes y los almacena en un buffer. El número de bytes de cada bloque (tamaño) se pasa como parámetro, al igual que el número n de bloques y la dirección del buffer (o variable) donde se almacena. El formato de llamada:  
```c
fread(direccion-buffer, tamaño, n, puntero-archivo);
```

La función devuelve el número de bloques que lee y debe coincidir con `n`. El prototipo de la función está en `stdio.h`:  
```c
size_t fread(void *ptr, size_t size, size_t n, FILE *pf);
```

Ejemplo 13.13  
En el ejemplo se abre un archivo en modo binario para lectura. El archivo se lee hasta el final del archivo; cada lectura de un número real se acumula en la variable `s`.  
```c
FILE *fd;  
double x, s = 0.0;  
if ((fd = fopen("reales.num", "rb")) == NULL)  
    exit(-1);  
while (!eof(fd)) {  
    fread(&x, sizeof(double), 1, fd);  
    s += x;  
}
```

Ejercicio 13.6  
En el Ejercicio 13.5 se ha creado un archivo binario de puntos en el plano. Se desea escribir un programa para determinar los siguientes valores:  
- `n`: número de veces que aparece un punto dado `(i, j)` en el archivo.  
- Dado un valor de `j`, obtener la media de `i` para los puntos que contienen a `j`.

Análisis  
La primera instrucción es abrir el archivo binario para lectura. A continuación se solicita el punto donde se cuentan las ocurrencias en el archivo. En la función `cuenta-pto()` se determina dicho número; para lo cual hay que leer todo el archivo. Para ejecutar el segundo apartado, se solicita el valor de `j`. Con un bucle desde `i = 1` hasta `i = 10`, se cuenta las ocurrencias de cada punto `(i, j)` llamando a la función `cuenta-pto()`. Antes de cada llamada hay que situar el puntero del archivo al inicio, llamando para ello a la función `rewind()`.  
```c
#include <stdio.h>  
struct punto {  
    int i, j;  
};  
typedef struct punto PUNTO;  
FILE *pp;  
int cuenta-pto(PUNTO w);  
int main() {  
    PUNTO p;  
    char *nom = "C:\\PUNTOS.DAT";  
    float media, nmd, dnm;  
    if ((pp = fopen(nom, "rb")) == NULL) {  
        puts("\nError al abrir archivo para lectura.");  
        return -1;  
    }  
    printf("\nIntroduce coordenadas de punto a buscar: ");  
    scanf("%d %d", &p.i, &p.j);  
    printf("\nRepeticiones del punto (%d,%d): %d\n", p.i, p.j, cuenta-pto(p));  
    /* Cálculo de la media i para un valor J */  
    printf("Valor de J: ");  
    scanf("%d", &p.j);  
    media = nmd = dnm = 0.0;  
    for (p.i = 1; p.i <= 10; p.i++) {  
        int st;  
        rewind(pp);  
        st = cuenta-pto(p);  
        nmd += (float)st * p.i;  
        dnm += (float)st;  
    }  
    if (dnm > 0.0)  
        printf("\nMedia de los valores de i: %.2f\n", nmd / dnm);  
    return 0;  
}  

int cuenta-pto(PUNTO w) {  
    PUNTO p;  
    int r = 0;  
    while (!feof(pp)) {  
        fread(&p, sizeof(PUNTO), 1, pp);  
        if (p.i == w.i && p.j == w.j) r++;  
    }  
    return r;  
}
```
