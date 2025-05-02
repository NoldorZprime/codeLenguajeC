---
title: Argumentos de main()
description: A reference page in my new Starlight docs site.
---

La línea de comandos o de órdenes es una línea de texto desde la que se puede ejecutar un programa. Por ejemplo, si se ha escrito el programa matrices.c, una vez compilado da lugar a matrices.exe. Su ejecución desde la línea de órdenes:

C:>matrices

La línea de órdenes puede ser una fuente de datos al programa, así se podría pasar las dimensiones de la matriz:

C:>matrices 4 5

Para que un programa C pueda captar datos, información en la línea de órdenes, la función main() tiene dos argumentos opcionales: el primero es un argumento entero que contiene el número de parámetros transmitidos al programa (incluyendo el mismo número de programa). El segundo argumento contiene los parámetros transmitidos, en forma de cadenas de caracteres; por lo que el tipo de este argumento es un array de punteros a char. Puede haber un tercer argumento que contiene las variables de entorno, definido también como array de punteros a carácter que no se va a utilizar. Un prototipo válido de la función main() :

```c
int main(int argc, char* argv[]);
```

También puede ser:

```c
int main(int argc, char** argv);
```

Los nombres de los argumentos pueden cambiarse, tradicionalmente siempre se pone argc, argv.

**Ejemplo 13.16**

En este ejemplo se escribe un programa que muestra en pantalla los argumentos escritos en la línea de órdenes.

```c
#include <stdio.h>
int main(int argc, char *argv[]) {
    int i;
    printf("Número de argumentos %d\n\n", argc);
    printf("Argumentos de la línea de órdenes pasados a main:\n\n");
    for (i = 0; i < argc; i++)
        printf("argv[%d] : %s\n\n", i, argv[i]);
    return 0;
}
```

Entradas y salidas por archivos 433

En el supuesto que el nombre del programa ejecutable sea ARGMTOS.EXE, y que esté en la unidad de disco C:, la ejecución se realiza con esta instrucción:

C:\ARGMTOS Buenas palabras "el amigo agradece" 6 7 Adios.

Los argumentos se separan por un blanco. Para que el blanco forme parte del argumento se debe de encerrar entre dobles comillas. La salida de la ejecución de ARGMTOS (ARGMTOS.EXE) será:

```
Número de argumentos 7
Argumentos de la línea de órdenes pasados a main:
argv[0]: C:\ARGMTOS.EXE
argv[1]: Buenas
argv[2]: palabras
argv[3]: el amigo agradece
argv[4]: 6
argv[5]: 7
argv[6]: Adios.
```

**Ejercicio 13.8**

Se desea escribir un programa para concatenar archivos. Los nombres de los archivos han de estar en la línea de órdenes, y el nuevo archivo resultante de la concatenación ha de ser el último argumento de la línea de órdenes.

**Análisis**

El número mínimo de argumentos de la línea de órdenes ha de ser 3: nombre del programa ejecutable, primer archivo, segundo archivo, etc., y el archivo nuevo. El programa debe de comprobar este hecho.

Para copiar un archivo se utiliza la función `fgets()`, que lee una línea del archivo de entrada, y la realiza la operación de copia, que se llamará tantas veces como archivos de entrada se introduzcan desde la línea de órdenes. La función `fputs()` escribe la línea en el archivo de salida.

En una función `copia-archivo()`, se tiene:

```c
#include <stdio.h>
#define MAX_LIN 120
void copia-archivo(FILE*, FILE*);
int main(int argc, char *argv[]) {
    FILE *pfe, *pfw;
    int i;
    if (argc < 3) {
        puts("Error en la línea de órdenes, archivos insuficientes.");
        return -2;
    }
    /* El último archivo es donde se realiza la concatenación */
    if ((pfw = fopen(argv[argc-1], "w")) == NULL) {
        printf("Error al abrir el archivo %s", argv[argc-1]);
        return -3;
    }
    for (i = 1; i < argc-1; i++) {
        if ((pfe = fopen(argv[i], "r")) == NULL) {
            printf("Error al abrir el archivo %s", argv[i]);
            return -1;
        }
        copia-archivo(pfe, pfw);
        fclose(pfe);
    }
    fclose(pfw);
    return 0;
}

/* Función copia un archivo en otro archivo */
void copia-archivo(FILE *f1, FILE *f2) {
    char cad[MAX_LIN];
    while (!feof(f1)) {
        fgets(cad, MAX_LIN, f1);
        if (!feof(f1)) {
            fputs(cad, f2);
        }
    }
}
```
