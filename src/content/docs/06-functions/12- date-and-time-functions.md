---
title: Funciones de fecha y hora
description: A reference page in my new Starlight docs site.
---

La familia de microprocesadores 80x86 tiene un sistema de reloj que se utiliza principalmente para controlar el microprocesador, pero se utiliza también para calcular la fecha y la hora.  
El archivo de cabecera `TIME.H` define estructuras, macros y funciones para manipulación de fechas y horas. La fecha se guarda de acuerdo con el calendario gregoriano.

## Funciones

Las funciones `time`, `clock`, `strdate` y `strtime` devuelven la hora actual como el número de segundos transcurridos desde la medianoche del 1 de enero de 1970 (hora universal, GMT), el tiempo de CPU empleado por el proceso invocante, la fecha y hora actual, respectivamente.

La estructura de tiempo utilizada incluye los miembros siguientes:

```c
struct tm {
    int tm_sec;   /* segundos */
    int tm_min;   /* minutos */
    int tm_hour;  /* horas */
    int tm_mday;  /* día del mes 1 a 31 */
    int tm_mon;   /* mes, 0 para Ene, 1 para Feb, ... */
    int tm_year;  /* año desde 1900 */
    int tm_wday;  /* días de la semana desde domingo (0 - 6) */
    int tm_yday;  /* día del año desde el 1 de Ene (0-365) */
    int tm_isdst; /* siempre 0 para gmtime */
};
```

### `clock(void)`

La función `clock` determina el tiempo de procesador, en unidades de click, transcurrido desde el principio de la ejecución del programa.  
Si no se puede devolver el tiempo de procesador se devuelve `-1`.

```c
inicio = clock();
fin = clock();
```

### `time(hora)`

La función `time` obtiene la hora actual; devuelve el número de segundos transcurridos desde la medianoche (00:00:00) del 1 de enero de 1970.  
Este valor de tiempo se almacena entonces en la posición apuntada por el argumento `hora`.  
Si `hora` es un puntero nulo, el valor no se almacena.

Prototipo:
```c
time_t time(time_t *hora);
```
El tipo `time_t` está definido como tipo `long` en `time.h`.

### `localtime(hora)`

Convierte la fecha y hora en una estructura de tipo `tm`.

Prototipo:
```c
struct tm *localtime(const time_t *tptr);
```

### `mktime(t)`

Convierte la fecha en formato de calendario.  
Toma la información del argumento y determina los valores del día de la semana (`tm_wday`) y del día respecto al inicio del año, también conocido como fecha juliana (`tm_yday`).

Prototipo:
```c
time_t mktime(struct tm *tptr);
```

La función devuelve `-1` en caso de producirse un error.

**Código de ejemplo**

En este ejercicio se pide el año, mes y día; escribe el día de la semana y los días pasados desde el 1 de enero del año leído.  
Es utilizado un array de cadenas de caracteres, su estudio se hace en capítulos posteriores.

```c
#include <stdio.h>
#include <time.h>

char *dias[] = { "", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo" };

int main(void) {
    struct tm fecha;
    int anyo, mes, dia;

    /* Entrada: año, mes y día */
    printf("Año: ");
    scanf("%d", &anyo);
    printf("Mes: ");
    scanf("%d", &mes);
    printf("Día: ");
    scanf("%d", &dia);

    /* Asigna fecha a la estructura fecha, en formato establecido */
    fecha.tm_year = anyo - 1900;
    fecha.tm_mon = mes - 1;
    fecha.tm_mday = dia;
    fecha.tm_hour = 0;
    fecha.tm_min = 0;
    fecha.tm_sec = 1;
    fecha.tm_isdst = -1;

    /* mktime encuentra el día de la semana y el día del año.
       Devuelve -1 si error. */
    if (mktime(&fecha) == -1) {
        puts("Error en la fecha.");
        exit(-1);
    }

    /* El domingo, la función lo considera día 0 */
    if (fecha.tm_wday == 0)
        fecha.tm_wday = 7;

    printf("\nDía de la semana: %d; día del año: %d", fecha.tm_wday, fecha.tm_yday + 1);
    /* Escribe el día de la semana */
    printf("\nEs el día de la semana: %s\n", dias[fecha.tm_wday]);

    return 0;
}
```

**Ejercicio**

Una aplicación de `clock()` para determinar el tiempo de proceso de un programa que calcula el factorial de un número.

El factorial de `n! = n * (n-1) * (n-2) ... 2 * 1`.  
La variable que vaya a calcular el factorial se define de tipo `long` para poder contener un valor elevado.  
El número, arbitrariamente, va a estar comprendido entre 3 y 15.  
El tiempo de proceso va a incluir el tiempo de entrada de datos.  
La función `clock()` devuelve el tiempo en unidades de click. Cada `CLK_TCK` es un segundo.  
El programa escribe el tiempo en ambas unidades.

```c
/*
En este ejercicio se determina el tiempo del procesador para
calcular el factorial de un número requerido, entre 3 y 15.
*/

#include <time.h>
#include <stdio.h>

int main(void) {
    float inicio, fin;
    int n, x;
    long int fact;

    inicio = clock();
    do {
        printf("Factorial de (3 < x < 15): ");
        scanf("%d", &x);
    } while (x <= 3 || x >= 15);

    for (n = x, fact = 1; x; x--)
        fact *= x;

    fin = clock();
    printf("\nFactorial de %d! = %ld", n, fact);
    printf("\nUnidades de tiempo de proceso: %f,\tEn segundos: %f",
           (fin - inicio), (fin - inicio) / CLK_TCK);

    return 0;
}
```

