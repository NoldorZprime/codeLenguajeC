---
title: Estructura
description: A reference page in my new Starlight docs site.
---

**Una función es, sencillamente, un conjunto de sentencias que se pueden llamar desde cualquier parte de un programa.**  
Las funciones permiten al programador un grado de abstracción en la resolución de un problema.  
Las funciones en C no se pueden anidar. Esto significa que una función no se puede declarar dentro de otra función. La razón para esto es permitir un acceso muy eficiente a los datos. En C todas las funciones son externas o globales, es decir, pueden ser llamadas desde cualquier punto del programa.  

La estructura de una función en C se muestra en la Figura 7.1.  

```
tipo-de-retorno nombreFunción (listaDeParámetros)
{
    cuerpo de la función
    return expresión
}
```

- **tipo-de-retorno**: Tipo de valor devuelto por la función o la palabra reservada `void` si la función no devuelve ningún valor.  
- **nombreFunción**: Identificador o nombre de la función.  
- **listaDeParámetros**: Lista de declaraciones de los parámetros de la función separados por comas.  
- **expresión**: valor que devuelve la función.  

```c
float resp;
resp = riii1 + rii1ri2;
return(resp);
```

Figura 7.1. Estructura de una función.  
*Programación en C. Metodología, algoritmos y estructura de datos*  


**Los aspectos más sobresalientes en el diseño de una función son:**

- **Tipo de resultado**. Es el tipo de dato que devuelve la función C y aparece antes del nombre de la función.  
- **Lista de parámetros**. Es una lista de parámetros tipificados (con tipos) que utilizan el formato siguiente: `tipo1 parámetro1, tipo2 parámetro2, ...`  
- **Cuerpo de la función**. Se encierra entre llaves de apertura `{` y cierre `}`. No hay punto y coma después de la llave de cierre.  
- **Paso de parámetros**. Posteriormente se verá que el paso de parámetros en C se hace siempre por valor.  
- **No se pueden declarar funciones anidadas.**  
- **Declaración local**. Las constantes, tipos de datos y variables declaradas dentro de la función son locales a la misma y no perduran fuera de ella.  
- **Valor devuelto por la función**. Mediante la palabra reservada `return` se devuelve el valor de la función.  
Una llamada a la función produce la ejecución de las sentencias del cuerpo de la función y un retorno a la unidad de programa llamadora después que la ejecución de la función se ha terminado, normalmente cuando se encuentra una sentencia `return`.

**Ejemplo**

Las funciones `cuadrado()` y `suma()` muestran dos ejemplos típicos de ellas:

```c
/* función que calcule los cuadrados de números enteros sucesivos a partir de un número dado (n), parámetro de la función y hasta obtener un cuadrado que sea mayor de 1000 */
void cuadrado(int n)
{
    int cuadrado = 0, q = 0;
    while (q <= 1000) /* el cuadrado ha de ser menor de 1000 */
        q = n * n;
    printf("El cuadrado de: %d es %d \n", n, q);
    n++;
    return;
}
```

```c
/*
Calcula la suma de un número dado (parámetro) de elementos leídos de la entrada estándar (teclado).
*/
float suma(int num_elementos)
{
    int indice;
    float total = 0.0;
    printf("\n \t Introduce %d números reales\n", num_elementos);
    for (indice = 0; indice < num_elementos; indice++)
    {
        float x;
        scanf("%f", &x);
        total += x;
    }
    return total;
}
```

## Nombre de una función

Un nombre de una función comienza con una letra o un subrayado `_` y puede contener tantas letras, números o subrayados como desee.  
El compilador ignora, sin embargo, a partir de una cantidad dada (32 en Borland/Inprise C, 248 en Microsoft).  
C es sensible a mayúsculas, lo que significa que las letras mayúsculas y minúsculas son distintas a efectos del nombre de la función.

```c
int max(int x, int y);           /* nombre de la función max */
double media(double x1, double x2); /* nombre de la función media */
double MAX(int* m, int n);       /* nombre de función MAX, distinta de max */
```

## Tipo de dato de retorno

Si la función no devuelve un valor `int`, se debe especificar el tipo de dato devuelto (de retorno) por la función.  
Cuando devuelve un valor `int`, se puede omitir ya que por defecto el C asume que todas las funciones son enteras.  
Aun así, siempre conviene especificar el tipo, incluso siendo de tipo `int`, para mejor legibilidad.

Ejemplos:

```c
int max(int x, int y)             /* devuelve un tipo int */
double media(double x1, double x2)/* devuelve un tipo double */
float func0() { ... }            /* devuelve un float */
char func1() { ... }             /* devuelve un dato char */
int *func3() { ... }             /* devuelve un puntero a int */
char *func4() { ... }            /* devuelve un puntero a char */
int func5() { ... }              /* devuelve un int (es opcional) */
```

Si una función no devuelve un resultado, se puede utilizar el tipo `void`, que se considera como un tipo de dato especial.

```c
int calculo_kilometraje(int litros, int kilometros);
char mayusculas(char car);
float DesvEst(void);
struct Infopersona BuscarRegistro(int num_registro);

/**
Muchas funciones no develven resultados. La razón es que se utilizan como subrutinas para realizar
una tarea concreta. Una función que no devuelve un resultado, a veces se denomina procedimiento. Para indicar al
compilador que una función no devuelve resultado, se utiliza el tipo de retorno void, como en este ejemplo:
*/
void VisualizarResultados(float Total, int num_elementos);

// Si se omite un tipo de retorno para una función, como en
int VerResultados(float Total, int longitud);

/*
el compilador supone que el tipo de datos devuelto es int. Aunque el uso de int es opcional, por razones de claridad
y consistencia se recomienda su uso. Así, la función anterior se puede declarar también:

*/

int verResultados (float total, int longitud);
```

## Resultados de una función

Una función puede devolver un único valor. El resultado se muestra con una sentencia `return` cuya sintaxis es:

```c
return (expresión)
return;
```

El valor devuelto puede ser cualquier tipo de dato excepto una función o un array.  
Se pueden devolver valores múltiples devolviendo un puntero o una estructura.  
Una función puede tener cualquier número de sentencias `return`.  
Tan pronto como el programa encuentra una sentencia `return`, se devuelve el control a la función llamadora.

Si el tipo de retorno es `void`, la sentencia `return` se puede escribir como `return;` sin ninguna expresión.  
También se puede omitir por completo.

Ejemplo:

```c
void func1(void)
{
    puts("Esta función no devuelve valores");
}
int main()
{
    puts("Prueba de un programa C, devuelve 0 al sistema");
    return 0;
}
```

**Consejo**  
Aunque no es obligatorio el uso de la sentencia `return` al final, se recomienda para mayor claridad.  

**Precaución**  
Un error típico es olvidar la sentencia `return`, lo que hace impredecible el valor que devuelve la función.

```c
if (Total >= 0.0)
    return Total;
```

Si `Total` es menor que cero, no se ejecuta el `return`.


## Llamada a una función

Las funciones deben ser llamadas o invocadas para ejecutarse.  
Una expresión puede contener una llamada a una función.  
Normalmente, las llamadas se realizan desde `main()`, pero también pueden hacerse desde otras funciones.

**Nota**  
La función que llama se denomina *función llamadora* y la que recibe el control se denomina *función llamada*.

```c
void func1(void)
{
    puts("Segunda función");
    return;
}
void func2(void)
{
    puts("Tercera función");
    return;
}
int main()
{
    puts("Primera función llamada main()");
    func1(); // Segunda función llamada
    func2(); // Tercera función llamada
    puts("main se termina");
    return 0; // Devuelve control al sistema
}
```

**Salida del programa:**

```
Primera función llamada main()
Segunda función
Tercera función
main se termina
```

**Ejemplo**

La función `max` devuelve el número mayor de dos enteros:

```c
#include <stdio.h>
int max(int x, int y)
{
    if (x < y)
        return y;
    else
        return x;
}
int main()
{
    int m, n;
    do
    {
        scanf("%d %d", &m, &n);
        printf("Maximo de %d,%d es %d\n", m, n, max(m, n)); // llamada a max
    } while (m != 0);
    return 0;
}
```

**Ejemplo**

Calcular la media aritmética de dos números reales:

```c
#include <stdio.h>
double media(double x1, double x2)
{
    return (x1 + x2) / 2;
}
int main()
{
    double num1, num2, med;
    printf("Introducir dos números reales: ");
    scanf("%lf %lf", &num1, &num2);
    med = media(num1, num2);
    printf("El valor medio es %.4lf\n", med);
    return 0;
}
```
