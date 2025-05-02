---
title: Parámetros
description: A reference page in my new Starlight docs site.
---

C siempre utiliza el método de parámetros por valor para pasar variables a funciones. Para que una función devuelva un valor a través de un argumento hay que pasar la dirección de la variable, y que el argumento correspondiente de la función sea un puntero, es la forma de conseguir en C un paso de parámetro por referencia. Esta sección examina el mecanismo que C utiliza para pasar parámetros a funciones y cómo optimizar el paso de parámetros, dependiendo del tipo de dato que se utiliza.

Suponiendo que se tenga la declaración de una función circulo con tres argumentos  
```c
void circulo(int x, int y , int didmetro);
```  
Cuando se llama a circulo se deben pasar tres parámetros a esta función. En el punto de llamada cada parámetro puede ser una constante, una variable o una expresión, como en el siguiente ejemplo:  
```c
circulo(25, 40, vueltas*4);
```

## Paso de parámetros por valor

Pasopor valor (también llamadopaso por copia) significa que cuando C compila la función y el código que llama a la función, la función recibe una copia de los valores de los parámetros. Si se cambia el valor de un parámetro variable local, el cambio sólo afecta a la función y no tiene efecto fuera de ella. La Figura 7.3 muestra la acción de pasar un argumento por valor. La variable real i no se pasa, pero el valor de i, 6, se pasa a la función receptora.

En la técnica de paso de parámetro por valor, la modificación de la variable (parámetro pasado) en la función receptora no afecta al parámetro argumento en la función llamadora.

```c
main()
{
    int i = 6;
    func(i);
    return 0;
}
```
```c
func(int i)
{
    printf("%d", i);
}
```

**Figura 7.3. Paso de la variable i por valor.**  
**Funciones 223**

**Nota**  
El método por defecto de pasar parámetros es por valor, a menos que se pasen arrays. Los arrays se pasan siempre por dirección.

El siguiente programa muestra el mecanismo de paso de parámetros por valor:

```c
/* 
Muestra el paso de parámetros por valor
Se puede cambiar la variable del parámetro en la función
pero su modificación no puede salir al exterior 
*/
#include <stdio.h>

void DemoLocal(int valor);

void main(void)
{
    int n = 10;
    printf("Antes de llamar a DemoLocal, n = %d\n", n);
    DemoLocal(n);
    printf("Después de llamada a DemoLocal, n = %d\n", n);
}

void DemoLocal(int valor)
{
    printf("Dentro de DemoLocal, valor = %d\n", valor);
    valor = 999;
    printf("Dentro de DemoLocal, valor = %d\n", valor);
}
```

**Al ejecutar este programa se visualiza la salida:**

```
Antes de llamar a DemoLocal, n = 10  
Dentro de DemoLocal, valor = 10  
Dentro de DemoLocal, valor = 999  
Después de llamar a DemoLocal, n = 10  
```

## Paso de parámetros por referencia

Cuando una función debe modificar el valor del parámetro pasado y devolver este valor modificado a la función llamadora, se ha de utilizar el método de paso de parámetro por referencia o dirección. En este método el compilador pasa la dirección de memoria del valor del parámetro a la función. Cuando se modifica el valor del parámetro (la variable local), este valor queda almacenado en la misma dirección de memoria, por lo que al retornar a la función llamadora la dirección de la memoria donde se almacenó el parámetro contendrá el valor modificado. Para pasar una variable por referencia, el símbolo `&` debe preceder al nombre de la variable y el parámetro variable correspondiente de la función debe declararse como puntero.

```c
float x;
int y;
entrada(&x, &y);

void entrada(float* x, int* y)
```

C permite utilizar punteros para implementar parámetros por referencia, ya que por defecto en C el paso de parámetros es por valor.

```c
/* método de paso por referencia, mediante punteros */
void intercambio(int* a, int* b)
{
    int aux = *a;
    *a = *b;
    *b = aux;
}
```

En la llamada siguiente, la función `intercambio()` utiliza las expresiones `*a` y `*b` para acceder a los enteros referenciados por las direcciones de las variables `i` y `j`:

```c
int i = 3, j = 50;
printf("i = %d y j = %d\n", i, j);
intercambio(&i, &j);
printf("i = %d y j = %d\n", i, j);
```

El operador `&` delante de una variable significa «dame la dirección de la variable».

```c
double x;
&x; /* dirección en memoria de x */
```

Una variable, o parámetro puntero se declara poniendo el asterisco (`*`) antes del nombre de la variable. Las variables `p`, `r` y `q` son punteros a distintos tipos.

```c
char* p;    /* variable puntero a char */
int* r;     /* variable puntero a int */
double* q;  /* variable puntero a double */
```

## Diferencias entre paso de variables por valor y por referencia

Las reglas que se han de seguir cuando se transmiten variables por valor y por referencia son las siguientes:

- Los parámetros valor reciben copias de los valores de los argumentos que se les pasan;
- La asignación a parámetros valor de una función nunca cambian el valor del argumento original;
- Los parámetros para el paso por referencia (declarados con `*`, punteros) reciben la dirección de los argumentos pasados; a estos les debe de preceder del operador `&`, excepto los arrays;
- En una función, las asignaciones a parámetros referencia (punteros) cambian los valores de los argumentos originales.

Por ejemplo, la escritura de una función `potrat()` para cambiar los contenidos de dos variables, requiere que los datos puedan ser modificados.

**Paso por valor**

```c
float a, b;
potrat1(float x, float y)
{
    x = x * x;
    y = sqrt(y);
}
```

**Paso por referencia**

```c
potrat2(float* x, float* y)
{
    *x = (*x) * (*x);
    *y = sqrt(*y);
}
```

Sólo en el caso de `potrat2` los valores de `a` y `b` se cambiarán. Veamos una aplicación completa de ambas funciones:

```c
#include <stdio.h>
#include <math.h>

void potrat1(float, float);
void potrat2(float*, float*);

void main()
{
    float a, b;
    a = 5.0;
    b = 1.0e2;
    potrat1(a, b);
    printf("\na = %.1f b = %.1f", a, b);
    potrat2(&a, &b);
    printf("\na = %.1f b = %.1f", a, b);
}
```

```c
void potrat1(float x, float y)
{
    x = x * x;
    y = sqrt(y);
}

void potrat2(float* x, float* y)
{
    *x = (*x) * (*x);
    *y = sqrt(*y);
}
```

**La ejecución del programa producirá:**

```
a = 5.0 b = 100.0  
a = 25.0 b = 10.0  
```

**Nota**  
Todos los parámetros en C se pasan por valor. C no tiene parámetros por referencia, hay que hacerlo con punteros y el operador `&`. Se puede observar en el programa cómo se accede a los punteros, el operador `*` precediendo al parámetro puntero devuelve el contenido.

## Parámetros const de una función

Con el objeto de añadir seguridad adicional a las funciones, se puede añadir a una descripción de un parámetro el especificador `const`, que indica al compilador que sólo es de lectura en el interior de la función. Si se intenta escribir en este parámetro se producirá un mensaje de error de compilación.

```c
void f1(const int, const int*);
void f2(int, int const*);
```

```c
void f1(const int x, const int* y)
{
    x = 10;      /* error por cambiar un objeto constante */
    *y = 11;     /* error por cambiar un objeto constante */
    y = &x;      /* correcto */
}

void f2(int x, int const* y)
{
    x = 10;      /* correcto */
    *y = 11;     /* error */
    y = &x;      /* correcto */
}
```

**Programación en C. Metodología, algoritmos y estructura de datos – 226**

**Paso de parámetros en C.**

| Parámetro especificado como: | Ítem pasado por | Cambia item dentro de la función | Modifica parámetros al exterior |
|-----------------------------|-----------------|----------------------------------|---------------------------------|
| `int item`                 | valor           | Sí                               | No                              |
| `const int item`           | valor           | No                               | No                              |
| `const int* item`          | por dirección   | No su contenido                  | No                              |


