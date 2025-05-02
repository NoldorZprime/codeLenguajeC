---
title: Puntero FILE
description: A reference page in my new Starlight docs site.
---

Los archivos se ubican en dispositivos externos como cintas, cartuchos, discos, discos compactos, etc.  
y tienen un nombre y unas características. En el programa el archivo tiene un nombre interno que es un  
puntero a una estructura predefinida (puntero a archivo). Esta estructura contiene información sobre el  
archivo, tal como la dirección del buffer que utiliza, el modo de apertura del archivo, el último carácter  
leído del buffer y otros detalles que generalmente el usuario no necesita saber. El identificador del tipo  
de la estructura es FILE y está declarada en el archivo de cabecera `stdio.h`:  

```c
typedef struct{
    short level;
    unsigned flags;  /* estado del archivo: lectura, binario... */
    char fd;
    unsigned char hold;
    short bsize;
    unsigned char *buffer, *curp;
    unsigned istemp;
    short token;
} FILE;
```

El detalle de los campos del tipo FILE puede cambiar de un compilador a otro. Al programador le  
interesa saber que existe el tipo FILE y que es necesario definir un puntero a FILE por cada archivo a  
procesar. Muchas de las funciones para procesar archivos son del tipo `FILE *`, y tienen argumento(s)  
de ese tipo.  

Ejemplo 13.1  

Se declara un puntero a FILE; se escribe el prototipo de una función de tipo puntero a `FILE` y con un  
argumento del mismo tipo.

```c
FILE* pf;
FILE* mostrar(FILE*);
```

/* Prototipo de una función definida por el programador */

Cabe recordar que la entrada estándar, al igual que la salida, están asociadas a variables puntero a  
`FILE`:  

```c
*stdin, *stdout;
```
