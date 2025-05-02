---
title: Diseño de bucles
description: A reference page in my new Starlight docs site.
---

**El diseño de un bucle necesita tres puntos a considerar:**

1. El cuerpo del bucle.
2. Las sentencias de inicialización.
3. Las condiciones para la terminación del bucle.

## Bucles para diseño de sumas y productos

Muchas tareas frecuentes implican la lectura de una lista de números y calculan su suma. Si se conoce  
cuántos números habrá, tal tarea se puede ejecutar fácilmente por el siguiente pseudocódigo. El valor de  
la variable `total` es el número de valores que se suman. La suma se acumula en la variable `suma`.

``` 
suma = 0;
repetir lo siguiente total veces:
    leer(siguiente);
    suma = suma + siguiente;
fin-bucle
```

Este código se implementa fácilmente con un bucle `for`.

```c
int cuenta, suma = 0;
for (cuenta = 1; cuenta <= total; cuenta++) {
    scanf ("%d", &siguiente);
    suma = suma + siguiente;
}
```

Obsérvese que la variable `suma` se espera tome un valor cuando se ejecuta la siguiente sentencia:  
`suma = suma + siguiente;`  
Dado que `suma` debe tener un valor la primera vez que la sentencia se ejecuta, `suma` debe estar  
inicializada a algún valor antes de que se ejecute el bucle. Con el objeto de determinar el valor correcto de  
inicialización de `suma`, se debe pensar sobre qué sucede después de una iteración del bucle. Después de  
añadir el primer número, el valor de `suma` debe ser ese número. Es decir, la primera vez que se ejecute  
el bucle, el valor de `suma + siguiente` será igual a `siguiente`. Para hacer esta operación, el valor  
de `suma` debe ser inicializado a 0.

Si en lugar de `suma`, se desea realizar productos de una lista de números, la técnica a utilizar es:

```c
int cuenta, producto;
for (cuenta = producto = 1; cuenta <= total; cuenta++) {
    scanf ("%d", &siguiente);
    producto = producto * siguiente;
}
```

La variable `producto` debe tener un valor inicial, se inicializa junto a `cuenta` en la expresión de  
inicialización a 1. No se debe suponer que todas las variables se deben inicializar a cero. Si `producto`  
se inicializa a cero, seguiría siendo cero después de que el bucle anterior terminara.

## Final de un bucle

Existen cuatro métodos utilizados normalmente para terminar un bucle de entrada. Estos cuatro métodos  
son:

1. Alcanzar el tamaño de la secuencia de entrada.
2. Preguntar antes de la iteración.
3. Secuencia de entrada terminada con un valor centinela.
4. Agotamiento de la entrada.

**Tamaño de la secuencia de entrada**

Si su programa puede determinar el tamaño de la secuencia de entrada por anticipado, bien preguntando  
al usuario o por algún otro método, se puede utilizar un bucle "repetir n veces" para leer la entrada  
exactamente n veces, en donde n es el tamaño de la secuencia.


**Preguntar antes de la iteración**

El segundo método para la terminación de un bucle de entrada es preguntar, simplemente al usuario,  
después de cada iteración del bucle, si el bucle debe ser o no iterado de nuevo. Por ejemplo:

```c
int numero, suma = 0;
char resp = 'S';
while ((resp == 'S') || (resp == 'S')) {
    printf("Introduzca un número: ");
    scanf("%d", &numero);
    suma += numero;
    printf("¿Existen más números? (S para Sí, N para No): ");
    scanf("%c", &resp);
}
```

Este método es muy tedioso para listas grandes de números. Cuando se lea una lista larga es  
preferible incluir una única señal de parada, como se incluye en el método siguiente.

**Valor centinela**

El método más práctico y eficiente para terminar un bucle que lee una lista de valores del teclado es  
con un valor centinela. Un valor centinela es aquel que es totalmente distinto de todos los valores  
posibles de la lista que se está leyendo y de este modo indica el final de la lista. Un ejemplo típico se  
presenta cuando se lee una lista de números positivos; un número negativo se puede utilizar como un  
valor centinela para indicar el final de la lista.

```c
/* ejemplo de valor centinela (número negativo) */
puts("Introduzca una lista de enteros positivos");
puts("Termine la lista con un número negativo");
suma = 0;
scanf("%d", &numero);
while (numero >= 0) {
    suma += numero;
    scanf("%d", &numero);
}
printf("La suma es: %d\n", suma);
```

Si al ejecutar el segmento de programa anterior se introduce la lista  
4 8 1 5 -99, el valor de la suma será 27. Es decir, -99, último número de la entrada de datos, no se añade a suma.  
-99 es el último dato de la lista que actúa como centinela y no forma parte de la lista de entrada de números.

**Agotamiento de la entrada**

Cuando se leen entradas de un archivo, se puede utilizar un valor centinela, aunque el método más  
frecuente es comprobar simplemente si todas las entradas del archivo han sido procesadas y se alcanza  
el final del bucle cuando no hay más entradas a leer. Éste es el método usual en la lectura de archivos,  
que se suele utilizar una marca al final de archivo, `EOF`. En el capítulo de archivos se dedicará una  
atención especial a la lectura de archivos con una marca de final de archivo.

## Otras técnicas de terminación de bucle

Las técnicas más usuales para la terminación de bucles de cualquier tipo son:

1. Bucles controlados por contador.
2. Preguntar antes de iterar.
3. Salir con una condición bandera.

Un bucle controlado por contador es cualquier bucle que determina el número de iteraciones antes  
de que el bucle comience y a continuación repite (itera) el cuerpo del bucle esas iteraciones. La técnica  
de la secuencia de entrada precedida por su tamaño es un ejemplo de un bucle controlado por contador.

La técnica de preguntar antes de iterar se puede utilizar para bucles distintos de los bucles de  
entrada, pero el uso más común de esta técnica es para procesar la entrada. La técnica del valor centinela  
es una técnica conocida también como salida con una condición bandera o señalizadora. Una variable  
que cambia su valor para indicar que algún suceso o evento ha tenido lugar, se denomina normalmente  
bandera o indicador. En el ejemplo anterior de suma de números, la variable bandera es `numero`, de  
modo que cuando toma un valor negativo, significa que indica que la lista de entrada ha terminado.

## Bucles for vacíos

La sentencia nula (`;`) es una sentencia que está en el cuerpo del bucle y no hace nada. Un bucle `for`  
se considera vacío si consta de la cabecera y de la sentencia nula (`;`).

**Ejemplo**

Muestra los valores del contador, de 0 a 4.

```c
#include <stdio.h>
int main() {
    int i;
    for (i = 0; i < 5; printf("i: %d\n", i++));
    return 0;
}
```

**Análisis**

El bucle `for` de la línea 8 incluye tres sentencias:  
- La sentencia de inicialización establece el valor inicial del contador `i` a 0.  
- La sentencia de condición comprueba `i < 5`.  
- La sentencia de acción imprime el valor de `i` y lo incrementa.

**Ejercicio**

Escribir un programa que visualice el factorial de un entero comprendido entre 2 y 20.  
El factorial de un entero `n` se calcula con un bucle `for` desde 2 hasta `n`, teniendo en cuenta que  
el factorial de 1 es 1 (`1! = 1`) y que `n! = n * (n-1)!`. Así, por ejemplo:

```
4! = 4 * 3! = 4 * 3 * 2! = 4 * 3 * 2 * 1! = 24
```

En el programa se escribe un bucle `do-while` para validar la entrada de `n`, entre 2 y 20. Otro bucle  
`for` para calcular el factorial. El bucle `for` va a ser vacío, en la expresión de incremento se va a  
calcular los `n` productos, para ello se utiliza el operador `*=` junto al de decremento (`--`).

```c
#include <stdio.h>
int main() {
    long int n, m, fact;
    do {
        printf("\nFactorial de número n, entre 2 y 20: ");
        scanf("%ld", &n);
    } while ((n < 2) || (n > 20));

    for (m = n, fact = 1; n > 1; fact *= n--);
    printf("%ld! = %ld", m, fact);
    return 0;
}
```
