---
title: Apertura de un archivo
description: A reference page in my new Starlight docs site.
---

Para procesar un archivo en C (y en todos los lenguajes de programación) la primera operación que hay  
que realizar es abrir el archivo. La apertura del archivo supone conectar el archivo externo con el  
programa, e indicar cómo va a ser tratado el archivo: binario, de caracteres, etc. El programa accede a  
los archivos a través de un puntero a la estructura FILE, la función de apertura devuelve dicho puntero.  
La función para abrir un archivo es `fopen()` y el formato de llamada es:

```c
fopen(nombre-archivo, modo);
```

- `nombre` = cadena  
- `modo` = cadena  

Contiene el identificador externo del archivo.  
Contiene el modo en que se va a tratar el archivo.  

La función devuelve un puntero a `FILE`, a través de dicho puntero el programa hace referencia al  
archivo. La llamada a `fopen()` se debe de hacer de tal forma que el valor que devuelve se asigne a una  
variable puntero a `FILE`, para así después referirse a dicha variable.

**Ejemplo 13.2**  
Declara una variable de tipo puntero a `FILE`. A continuación escribir una sentencia de apertura de un  
archivo.

```c
FILE* pf;
pf = fopen(nombre-archivo, modo);
```

La función puede detectar un error al abrir el archivo, por ejemplo, que el archivo no exista y se quiera  
leer, entonces devuelve `NULL`.

**Ejemplo 13.3**  
Se desea abrir un archivo de nombre `LICENCIA.EST` para obtener ciertos datos.

```c
#include <stdio.h>
#include <stdlib.h>
FILE *pf;
char nm[ ] = "C:\\LICENCIA.EST";
pf = fopen(nm, "r");
if (pf == NULL)
    puts("Error al abrir el archivo.");
    exit(1);
```

**Ejemplo 13.4**  
En este ejemplo se abre el archivo de texto `JARILLUNES.UAT` para escribir en él los datos de un programa.  
En la misma línea en que se ejecuta `fopen()`, se comprueba que la operación ha sido correcta, en caso  
contrario termina la ejecución.

```c
#include <stdio.h>
#include <stdlib.h>
FILE *ff;
char* arch = "C:\\AMUINTE\\JARILLUNES.UAT";
if ((ff = fopen(arch, "w")) == NULL)
    puts("Error al abrir el archivo para escribir.");
    exit(-1);
```

El prototipo de `fopen()` se encuentra en el archivo `stdio.h`, es el siguiente:

```c
FILE* fopen(const char* nombre-archivo, const char* modo);
```

## Modos de apertura de un archivo  

Al abrir el archivo con `fopen()`, se espera como segundo argumento el modo de tratar el archivo.  
Fundamentalmente se establece si el archivo es de lectura, escritura o añadido; y si es de texto o binario.  
Los modos básicos se expresan en esta tabla:

| Modo | Significado |
|------|-------------|
| `"r"` | Abre para lectura. |
| `"w"` | Abre para crear nuevo archivo (si ya existe se pierden sus datos). |
| `"a"` | Abre para añadir al final. |
| `"r+"` | Abre archivo ya existente para modificar (leer/escribir). |
| `"w+"` | Crea un archivo para escribir/leer (si ya existe se pierden los datos). |
| `"a+"` | Abre el archivo para modificar (escribir/leer) al final. Si no existe es como `w+`. |

En estos modos no se ha establecido el tipo del archivo, de texto o binario. Siempre hay una opción  
por defecto y aunque depende del compilador utilizado, suele ser modo texto. Para no depender del  
entorno es mejor indicar si es de texto o binario. Se utiliza la letra `t` para modo texto, la `b` para  
modo binario como último carácter de la cadena modo (también se puede escribir como carácter  
intermedio). Por consiguiente, los modos de abrir un archivo de texto:

```c
"rt", "wt", "at", "r+t", "w+t", "a+t"
```

Y los modos de abrir un archivo binario:

```c
"r+b", "w+b", "a+b", "r+b", "w+b", "a+b"
```

**Ejemplo 13.5**  
Se dispone de un archivo de texto `LICENCIA.EST`, se quiere leerlo para realizar un cierto proceso y escribir  
datos resultantes en el archivo binario `KESLJMEN.REC`. Las operaciones de apertura son:

```c
#include <stdio.h>
#include <stdlib.h>
FILE *pf1, *pf2;
char erg[] = "C:\\LICENCIA.EST";
char dst[] = "C:\\KESUMLEN.REC";
pf1 = fopen(erg, "rt");
pf2 = fopen(dst, "wb");
if (pf1 == NULL || pf2 == NULL)
    puts("Error al abrir los archivos.");
    exit(1);
```

## `NULL` y `EOF`  

Las funciones de biblioteca que devuelven un puntero (como `strcpy()`, `fopen()`, etc.) especifican que si  
no pueden realizar la operación (generalmente si hay un error) devuelven `NULL`. Esta es una macro  
definida en varios archivos de cabecera, entre los que se encuentran `stdio.h` y `stdlib.h`.

Las funciones de librería de E/S de archivos, generalmente empiezan por `f` (de `file`), tienen  
especificado que son de tipo entero de tal forma que si la operación falla devuelven `EOF`, también  
devuelven `EOF` para indicar que se ha leído el fin de archivo. Esta macro está definida en `stdio.h`.

**Ejemplo 13.6**  
El siguiente segmento de código lee del flujo estándar de entrada hasta fin de archivo:

```c
while ((c = getchar()) != EOF)
    putchar(c);
```

## Cierre de archivos  

Los archivos en C trabajan con una memoria intermedia, son con buffer. La entrada y salida de datos se  
almacena en ese buffer, volcándose cuando está lleno. Al terminar la ejecución del programa podrá  
ocurrir que haya datos en el buffer. Si no se volcaran en el archivo, quedaría este sin las últimas  
actualizaciones. Siempre que se termina de procesar un archivo y siempre que se termine la ejecución  
del programa, los archivos abiertos hay que cerrarlos para que, entre otras acciones, se vuelque el buffer.

La función `fclose(puntero-file)` cierra el archivo asociado al `puntero-file`, devuelve `EOF` si ha  
habido un error al cerrar. El prototipo de la función se encuentra en `stdio.h` y es:

```c
int fclose(FILE* pf);
```

**Ejemplo 13.7**  
Abrir dos archivos de texto, después se cierra cada uno de ellos:

```c
#include <stdio.h>
FILE *pf1, *pf2;
pf1 = fopen("C:\\DATOS.DAT", "r+");
pf2 = fopen("C:\\TEMPS.RET", "b+");
fclose(pf1);
fclose(pf2);
```
