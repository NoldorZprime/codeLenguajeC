---
title: Arrays
description: A reference page in my new Starlight docs site.
---

Un array (lista o tabla) es una secuencia de datos del mismo tipo. Los datos se llaman elementos del array y se numeran consecutivamente 0, 1, 2, 3, etc. El tipo de elementos almacenados en el array puede ser cualquier tipo de dato de C, incluyendo estructuras definidas por el usuario, como se describirá más tarde. Normalmente el array se utiliza para almacenar tipos tales como char, int o float.

Un array puede contener, por ejemplo, la edad de los alumnos de una clase, las temperaturas de cada día de un mes en una ciudad determinada, o el número de personas que residen en cada una de las diecisiete comunidades autónomas españolas. Cada item del array se denomina elemento.

Los elementos de un array se numeran, como ya se ha comentado, consecutivamente 0, 1, 2, 3, ... Estos números se denominan valores índice o subíndice del array. El término «subíndice» se utiliza ya que se especifica igual que en matemáticas, como una secuencia tal como q1, a1, a2... Estos números localizan la posición del elemento dentro del array, proporcionando acceso directo al array.

Si el nombre del array es a, entonces a[0] es el nombre del elemento que está en la posición 0, a[1] es el nombre del elemento que está en la posición 1, etc. En general, el elemento i-ésimo está en la posición i-1. De modo que si el array tiene n elementos, sus nombres son a[0], a[1], ..., a[n-1].

Gráficamente se representa así el array a con seis elementos.

Figura 8.1. Array de seis elementos.  
El array a tiene 6 elementos: a[0] contiene 25.1, a[1] contiene 34.2, a[2] contiene 5.25, a[3] contiene 7.45, a[4] contiene 6.09 y a[5] contiene 7.54. El diagrama de la Figura 8.1 representa realmente una región de la memoria de la computadora, ya que un array se almacena siempre con sus elementos en una secuencia de posiciones de memoria contigua.

En C los índices de un array siempre tienen como límite inferior 0, como índice superior el tamaño del array menos 1.

## Declaración de un array  

Al igual que con cualquier tipo de variable, se debe declarar un array antes de utilizarlo. Un array se declara de modo similar a otros tipos de datos, excepto que se debe indicar al compilador el tamaño o longitud del array. Para indicar al compilador el tamaño o longitud del array se debe hacer seguir al nombre, el tamaño encerrado entre corchetes. La sintaxis para declarar un array de una dimensión determinada es:

`tipo nombreArray[numeroDeElementos];`

Por ejemplo, para crear un array (lista) de diez variables enteras, se escribe:

`int numeros[10];`

Esta declaración hace que el compilador reserve espacio suficiente para contener diez valores enteros. En C los enteros ocupan, normalmente, 2 bytes, de modo que un array de diez enteros ocupa 20 bytes de memoria. La Figura 8.2 muestra el esquema de un array de diez elementos; cada elemento puede tener su propio valor.

Arrays (listas y tablas)  
Array de datos enteros: a  
Un array de enteros se almacena en bytes consecutivos de memoria. Cada elemento utiliza dos bytes. Se accede a cada elemento de array mediante un índice que comienza en cero. Así, el elemento quinto (a[4]) del array ocupa los bytes 9" y 10".

Figura 8.2. Almacenamiento de un array en memoria.  
Se puede acceder a cada elemento del array utilizando un índice en el nombre del array. Por ejemplo:

`printf("%d \n", numeros[4]);`

visualiza el valor del elemento 5 del array. Los arrays siempre comienzan en el elemento 0. Así pues, el array numeros contiene los siguientes elementos individuales:

numeros[0], numeros[1], numeros[2], numeros[3], numeros[4], numeros[7], numeros[8]

Si por ejemplo, se quiere crear un array de números reales y su tamaño es una constante representada por un parámetro `#define N 20`:

`float vector[N];`

Para acceder al elemento 3 y leer un valor de entrada:

`scanf("%f", &vector[2]);`

**Precaución**  
C no comprueba que los índices del array estén dentro del rango definido. Así, por ejemplo, se puede intentar acceder a `numeros[12]` y el compilador no producirá ningún error, lo que puede producir un fallo en su programa, dependiendo del contexto en que se encuentre el error.

## Subíndices de un array  

El índice de un array se denomina, con frecuencia, subíndice del array. El término procede de las matemáticas, en las que un subíndice se utiliza para representar un elemento determinado.

`numeros[0]` equivale a  
`numeros[3]`  
El método de numeración del elemento i-ésimo con el índice o subíndice i-1 se denomina indexación usada en cero. Su uso tiene el efecto de que el índice de un elemento del array es siempre el mismo que el número de «pasos» desde el elemento inicial a ese elemento. Por ejemplo, a[3] está a 3 pasos o posiciones del elemento a[0]. La ventaja de este método se verá de modo más evidente al tratar las relaciones entre arrays y punteros.

Ejemplos:  
`int edad[5];`  
Array edad contiene 5 elementos: el primero, edad[0] y el último, edad[4].

Declara 2 arrays de enteros.  
Declara un array de 25 elementos float.  
Declara un array de 50 elementos double.  
`int pesos[25], longitudes[100];`  
`float salarios[25];`  
`double temperaturas[50];`  
`char letras[15];`  
Declara un array de caracteres.  
`#define MX 120`  
`char buffer[MX+1];`  
Declara un array de caracteres de tamaño MX+1, el primer elemento es `buffer[0]` y el último `buffer[MX]`.

En los programas se pueden referenciar elementos del array utilizando fórmulas para los subíndices. Mientras que el subíndice puede evaluar a un entero, se puede utilizar una constante, una variable o una expresión para el subíndice. Así, algunas referencias individuales a elementos son:

`edad[4]`  
`ventas[total+5]`  
`bonos[mes1]`  
`salario[mes[i]*5]`

## Almacenamiento en memoria de los arrays  

Los elementos de los arrays se almacenan en bloques contiguos. Así, por ejemplo:

`int edades[5];`  
`char codigos[5];`

se representan gráficamente en memoria en la Figura 8.3.

Figura 8.3. Almacenamiento en memoria de arrays.  

**Nota**  
Todos los subíndices de los arrays comienzan con 0.

**Precaución**  
C permite asignar valores fuera de rango a los subíndices. Se debe tener cuidado no hacer esta acción, debido a que se sobreescribirían datos o código.

Los arrays de caracteres funcionan de igual forma que los arrays numéricos, partiendo de la base de que cada carácter ocupa normalmente un byte. Así, por ejemplo, un array llamado nombre se puede representar en la Figura 8.4.

`char nombre[] = "azorId";`

Figura 8.4. Almacenamiento de un array de caracteres en memoria.  
A tener en cuenta, en las cadenas de caracteres el sistema siempre inserta un último carácter (nulo) para indicar fin de cadena.

## El tamaño de los arrays  

El operador `sizeof` devuelve el número de bytes necesarios para contener su argumento. Si se usa `sizeof` para solicitar el tamaño de un array, esta función devuelve el número de bytes reservados para el array completo.

Por ejemplo, supongamos que se declara un array de enteros de 100 elementos denominado `edades`; si se desea conocer el tamaño del array, se puede utilizar una sentencia similar a:

`n = sizeof(edades);`

donde n tomará el valor 200. Si se desea solicitar el tamaño de un elemento individual del array, tal como:

`n = sizeof(edades[6]);`

n almacenará el valor 2 (número de bytes que contienen un entero).

## Verificación del rango del índice de un array

C, al contrario que otros lenguajes de programación -por ejemplo, Pascal-, no verifica el valor del índice de la variable que representa al array. Así, por ejemplo, en Pascal si se define un array a con índices 0 a 5, entonces `a[6]` hará que el programa se «rompa» en tiempo de ejecución.

Ejemplo 8.1  
Protección frente a errores en el intervalo (rango) de valores de una variable de índice que representa un array.

```c
double suma(const double a[], const int n)
{
    double S = 0.0;
    if (n * sizeof(double) > sizeof(a))
        for (int i = 0; i < n; i++)
            S += a[i];
    return S;
}
```