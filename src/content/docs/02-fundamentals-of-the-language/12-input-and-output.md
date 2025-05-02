---
title: Entrada y salida
description: A reference page in my new Starlight docs site.
---

Los programas interactúan con el exterior, a través de datos de entrada o datos de salida. La biblioteca C proporciona facilidades para entrada y salida, para lo que todo programa deberá tener el archivo de cabecera `stdio.h`. En C, la entrada y salida se lee y escribe de los dispositivos estándar de entrada y salida, se denominan `stdin` y `stdout` respectivamente. La salida, normalmente, es a pantalla del ordenador, la entrada se capta del teclado.

En el archivo `stdio.h` están definidas macros, constantes, variables y funciones que permiten intercambiar datos con el exterior. A continuación se muestran las más habituales y fáciles de utilizar.

## Salida

La salida de datos de un programa se puede dirigir a diversos dispositivos: pantalla, impresora, archivos. La salida que se trata a continuación va a ser a pantalla, además será formateada. La función `printf()` visualiza en la pantalla datos del programa, transforma los datos, que están en representación binaria, a ASCII según los códigos transmitidos. Así, por ejemplo:

```c
suma = 0;
suma = suma + 10;
printf("%s %d", "Suma = ", suma);
```

Y visualiza:
```
Suma = 10
```

El número de argumentos de `printf()` es indefinido, por lo que se pueden transmitir cuantos datos se desee. Así, suponiendo que:

```c
i = 5; j = 12; c = 'A'; n = 40.791512;
printf("%d %d %c %f", i, j, c, n);
```

visualizará en pantalla:
```
5 12 A 40.791512
```

La forma general que tiene la función `printf()` es:
```c
printf(cadena_de_control, dato1, dato2, ...);
```

`cadena_de_control` contiene los tipos de los datos y la forma de mostrarlos. 
dato1, dato2, ...   Variables, constantes y datos de salida

`printf()` convierte, da forma de salida a los datos y los escribe en pantalla. La cadena de control contiene códigos de formato que se asocian uno a uno con los datos. Cada código comienza con el carácter `%`, a continuación puede especificarse el ancho mínimo del dato y termina con el carácter de conversión. Así, suponiendo que:

```c
i = 11; j = 12; c = 'A'; n = 40.791512;
printf("%x %3d %c %.3f", i, j, c, n);
```

visualizará en pantalla:
```
B 12 A 40.792
```

El primer dato es `11` en hexadecimal (`%x`), el segundo es el número entero `12` en un ancho de 3, le sigue el carácter `A` y, por último, el número real `n` redondeado a 3 cifras decimales (`%.3f`). Un signo menos a continuación de `%` indica que el dato se ajuste a la izquierda en vez del ajuste a la derecha por defecto.

```c
printf("%15s", "HOLA LUCAS");
printf("%-15s", "HOLA LUCAS ");
```

visualizará en pantalla:
```
        HOLALUCAS
HOLALUCAS        
```

**Los códigos de formato más utilizados y su significado:**

- `%d`: El dato se convierte a entero decimal.
- `%o`: El dato entero se convierte a octal.
- `%x`: El dato entero se convierte a hexadecimal.
- `%u`: El dato entero se convierte a entero sin signo.
- `%c`: El dato se considera de tipo carácter.
- `%e`: El dato se considera de tipo `float`. Se convierte a notación científica, de la forma `(-}n.mmmmmmE(+I-}dd`.
- `%f`: El dato se considera de tipo `float`. Se convierte a notación decimal, con parte entera y los dígitos de precisión.
- `%g`: El dato se considera de tipo `float`. Se convierte según el código `%e` o `%f` dependiendo de cuál sea la representación más corta.
- `%s`: El dato ha de ser una cadena de caracteres.
- `%lf`: El dato se considera de tipo `double`.

C utiliza secuencias de escape para visualizar caracteres que no están representados por símbolos tradicionales, tales como `\a`, `\b`, etc. Las secuencias de escape proporcionan flexibilidad en las aplicaciones mediante efectos especiales. 

```c
printf("\n Error ~ Pulsar una tecla para continuar \n");

printf("\n"); // Salida a una nueva línea

printf("Yo estoy preocupado \n no por el \n sino por ti. \n");
```

La última sentencia visualiza:
```
Yo estoy preocupado
no por el
sino por ti.
```

debido a que la secuencia de escape `\n` significa nueva línea o salto de línea. Otros ejemplos:

```c
printf("\n Tabla de números \n"); /* uso de \n para nueva línea */
printf("\nNum1\t Num2\t Num3\n"); /* uso de \t para tabulaciones */
printf("%c", '\a'); /* uso de \a para alarma sonora */
```

en los que se utilizan los caracteres de secuencias de escape de nueva línea (`\n`), tabulación (`\t`) y alarma (`\a`).


**Caracteres secuencias de escape.**

| Secuencia de escape | Significado         |
|---------------------|---------------------|
| `\a`                | Alarma              |
| `\b`                | Retroceso de espacio|
| `\f`                | Avance de página    |
| `\n`                | Nueva línea         |
| `\r`                | Retorno de carro    |
| `\t`                | Tabulación          |
| `\v`                | Tabulación vertical |
| `\\`                | Barra inclinada     |
| `\?`                | Signo de interrogación |
| `\"`                | Dobles comillas     |
| `\o00`              | Número octal        |
| `\xhh`              | Número hexadecimal  |
| `\0`                | Cero, nulo (ASCII 0)|

**Ejemplo**

El listado `SECESC.c` utiliza secuencias de escape, tales como emitir sonidos (pitidos) en el terminal dos veces y a continuación presentar dos retrocesos de espacios en blanco.

```c
/* Programa: SECESC.C */
 /* Propósito: Mostrar funcionamiento de secuencias de escape */
#include <stdio.h>

int main() {
    char sonidos = '\a'; /* secuencia de escape alarma en sonidos */
    char bs = '\b'; /* almacena secuencia escape retroceso en bs */
    printf("%c%c", sonidos, sonidos); /* emite el sonido dos veces */
    printf("zz"); /* imprime dos caracteres */
    printf("%c%c", bs, bs); /* mueve el cursor al primer carácter 'Z' */
    return 0;
}
```


## Entrada  

La entrada de datos a un programa puede tener diversas fuentes, teclado, archivos en disco. La entrada que consideramos ahora es a través del teclado, asociado al archivo estándar de entrada stdin. La función más utilizada, por su versatilidad, para entrada formateada es `scanf()`.

El archivo de cabecera `stdio.h` de la biblioteca C proporciona la definición (el prototipo) de `scanf()`, así como de otras funciones de entrada o de salida. La forma general que tiene la función `scanf()` es:

```
scanf(cadena-de-control, var1, var2, var3, . . . )
```

**cadena-de-control**  Contiene los tipos de datos y si se desea su anchura.
**var1, var2 . . .** variables del tipo de los códigos de control.

Los códigos de formato más comunes son los ya indicados en la salida. Se pueden añadir, como sufijo del código, ciertos modificadores como `l` o `L`. El significado es «largo», aplicado a `float` (%lf) indica tipo `double`, aplicado a `int` (%ld) indica entero largo.

```
int n; double x;
scanf("%d %lf", &n, &x);
```
La entrada tiene que ser de la forma:

134 -1.4E-4

En este caso la función `scanf()` devuelve `n = 134`, `x = -1.4E-4` (en doble precisión). Los argumentos `var1, var2 . . .` de la función `scanf()` se pasan por dirección o referencia pues van a ser modificados por la función para devolver los datos. Por ello necesitan el operador de dirección, el prefijo `&`. Un error frecuente se produce al escribir, por ejemplo:

```c
double x;
scanf("%lf", x); // Error
```

En vez de:

```c
scanf("%lf", &x); // Correcto
```

Las variables que se pasan a `scanf()` se transmiten por referencia para poder ser modificadas y transmitir los datos de entrada, para ello se hacen preceder de `&`.

Un ejemplo típico es el siguiente:

```c
printf("Introduzca v1 y v2: ");
scanf("%d %f", &v1, &v2);  /* lectura valores v1 y v2 */
printf("Precio de venta al público: ");
scanf("%f", &Precio-venta);
printf("Base y altura: ");
scanf("%f %f", &b, &h);
```

La función `scanf()` termina cuando ha captado tantos datos como códigos de control se han especificado, o cuando un dato no coincide con el código de control especificado.

**Ejemplo**  

¿Cuál es la salida del siguiente programa, si se introducen por teclado las letras L y J?

```c
#include <stdio.h>
int main()
{
    char primero, ultimo;
    printf("Introduzca su primera y última inicial: ");
    scanf("%c %c", &primero, &ultimo);
    printf("Hola, %c. %c.\n", primero, ultimo);
    return 0;
}
```

## Salida de cadenas de caracteres

Con la función `printf()` se puede dar salida a cualquier dato, asociándolo al código que le corresponde. En particular, para dar salida a una cadena de caracteres se utiliza el código `%s`. Así:

```c
char arbol[1] = "Acebo";
printf("%s\n", arbol);
```

Para salida de cadenas, la biblioteca C proporciona la función específica `puts()`. Tiene un solo argumento, que es una cadena de caracteres. Escribe la cadena en la salida estándar (pantalla) y añade el fin de línea. Así:

```c
puts(arbol);
```

Muestra en pantalla lo mismo que `printf("%s\n", arbol)`.

**Ejemplo**  
¿Cuál es la salida del siguiente programa?

```c
#include <stdio.h>
#define T "Tambor de hojalata."
int main()
{
    char st[21];
    puts(T);
    puts("Permiso para salir en la toto.");
    puts(st);
    puts(&st[8]);
    return 0;
}
```

## Entrada de cadenas de caracteres

La entrada de una cadena de caracteres se hace con la función más general `scanf()` y el código `%s`. Así, por ejemplo:

```c
char nombre[51];
printf("Nombre del atleta: ");
scanf("%s", nombre);
printf("Nombre introducido: %s", nombre);
```

La entrada del nombre podría ser:
```
Junípero Serra
```

La salida sería:
```
Nombre introducido: Junípero
```

`scanf()` con el código `%s` capta palabras, el criterio de terminación es el encontrarse un blanco, o bien fin de línea.

También comentar que `nombre` no tiene que ir precedido del operador de dirección `&`. En C el identificador de un array, `nombre`, tiene la dirección del array, por lo que en `scanf()` se transmite la dirección del array `nombre`.

La biblioteca de C tiene una función específica para captar una cadena de caracteres, la función `gets()`. Capta del dispositivo estándar de entrada una cadena de caracteres, termina la captación con un retorno de carro. El siguiente ejemplo muestra cómo captar una línea de como máximo 80 caracteres.

```c
char linea[81];
puts("Nombre y dirección");
gets(linea);
```

La función `gets()` tiene un solo argumento, una variable tipo cadena. Capta la cadena de entrada y la devuelve en la variable pasada como argumento.

```c
gets(variable-cadena);
```

Tanto con `scanf()` como con `gets()`, el programa inserta al final de la cadena el carácter que indica fin de cadena, el carácter nulo `\0`. Siempre hay que definir las cadenas con un espacio más del previsto como máxima longitud para el carácter fin de cadena.
