---
title: Tipos de datos
description: A reference page in my new Starlight docs site.
---

C no soporta un gran número de tipos de datos predefinidos, pero tiene la capacidad para crear sus propios tipos de datos. Todos los tipos de datos simplres o básicos de C son, esencialmente, números. Los tres tipos de datos básicos son:

- Enteros.
- Números de coma flotante (reales).
- Caracteres

La siguiente tabla recoge los principales tipos de datos básicos, sus tamaños en bytes y el rango de valores que pueden almacenar.

**tabla 3.1. Tipos de datos simples de C**

| **Tipo**         | **Ejemplo**  | **Tamaño (bytes)** | **Rango**                          |
|------------------|--------------|---------------------|-------------------------------------|
| `char`           | `'C'`        | 1                   | 0 .. 255                            |
| `short`          | `-15`        | 2                   | -128 .. 127 *(o -32,768 .. 32,767)* |
| `int`            | `1024`       | 2                   | -32,768 .. 32,767                   |
| `unsigned int`   | `42325`      | 2                   | 0 .. 65,535                         |
| `float`          | `10.5`       | 4                   | ~3.4×10⁻³⁸ .. 3.4×10³⁸              |
| `double`         | `0.00045`    | 8                   | ~1.7×10⁻³⁰⁸ .. 1.7×10³⁰⁸            |
| `long double`    | `1e-8`       | 8 *(o más)*         | Igual o mayor que `double`         |

**Notas:**
- El rango de los tipos depende del compilador y la arquitectura, pero estos valores son típicos para sistemas de 16 o 32 bits.
- Los valores de punto flotante son aproximados y se expresan en notación científica.
- El tipo `char` puede ser *signed* o *unsigned* dependiendo del compilador. Aquí se ha tomado como *unsigned*.


Los tipos de datos fundamentales en C son:

- **Enteros**: (núemros completos y sus negativos), de tipo `int`.
- **Variantes de enteros:** tipos `short`, `long` y `unsigned`.
- **Reales**: Números decimales, tipo `float`, `double` o `long double`.
- **caracteres**: Letras, dígitos, símbolos y signos de puntuación, tipos char.

`char`, `int`, `float` y `double` son palabras reservadas, o más específicamente, ***especificadores de tipos***. Cada tipo de dato tiene su propia ***lista de atributos*** que definen las características de tipo y pueden variar de una máquina a otra. Los tipos `char`, `int` y `double` tienen variaciones o modificadores de tipso de datos, tales como `short`, `long`, `signed` y `unsigned`, para permitir un suso más eficiente de los tipos de datos.

Existe el tipo adicional `enum` (constante de enumeración).

## Enteros (Int)

Probablemente el tipo de dato más familiar es el entero, o tipo `int`. Los enteros son adecuados para aplicaciones que trabajen con datos numéricos. Los tipos enteros se almacenan internamente en 2 bytes (0 16bits) de memori. La tabla resume los tres tipos enteros básicos, juntos con el rango de valores y el tamaño en bytes usual, dependiendo de cada máquina. 

**tabla 3.2. Tipos de datos enteros en C**

| **Tipo en C**       | **Rango de valores**         | **Uso recomendado**                                |
|---------------------|------------------------------|----------------------------------------------------|
| `int`               | -32,768 .. +32,767           | Aritmética de enteros, bucles `for`, conteo.       |
| `unsigned int`      | 0 .. 65,535                  | Conteo, bucles `for`, índices.                     |
| `short int`         | -128 .. +127 *(o -32,768..+32,767)* | Aritmética de enteros, bucles `for`, conteo. |

**Notas:**

- El rango de `short int` suele ser **-32,768 a +32,767** en la mayoría de los compiladores modernos (2 bytes), pero en tu tabla aparece como **-128 a +127**, lo cual corresponde a `signed char`. Si quieres precisión técnica, se puede corregir ese punto.
- El uso recomendado es útil para elegir el tipo más eficiente en memoria y rendimiento.

### Declaración de variables

La forma más sible de una declaración de variable en C es poner primero el tipo de dato y a continuación el nombre de la variable. Si se desea dar un valor inicial a la variable, éste se pone a continuación.

El formato de la declaración es:

~~~c
<tipo de dato> <nombre de variable> = <valor inicial>
~~~

Se puede también declarar múltiples variables en la misma línea:

~~~c
<tipo_de_dato> <nom-variz, <nom_var2> ... <nom_varn>>
~~~

Así, por ejemplo,

~~~c
int longitud; int valor = 99;
int valor1, valor2;
int num_parte = 1141, num_items = 45;
~~~

Los tres modificadores (unsigned, short, int) que funcionan con `int` varían el rango de los enteros.

En aplicaciones generales, las constantes enteras se escriben en decimal o base 10; por ejemplo, 100, 200 0 450. Para escribir una constante sin signo, se añade la letra u (o bien u). Por ejemplo, para escribir 40.000, escriba 40000U.

Si se utiliza C para desarrollar software para sistemas operativos o para hardware de computadora, será útil escribir constantes enteras en octal(base 8) o hexadecimal (base 16). Una constante octal es cualquier número que comienza con un 0 o contiene dígitos en el rango de 1 a 7. Por ejemplo, 0377 es un número octal. Una constante hexadecimal comienza con Ox y va seguida de los dígitos 0 a 9 o las letras `A` a `F`( o bien a a f). Por ejemplo, 0xFF16 es una constante hexadecimal.

La tabla muestra ejemplos de constantes enteras representadas en sus notaciones (bases) decimal, hexadecimal y octal.

Cuando el rango de los tipos enteros básicos no es suficientemente grande para sus necesidades, se consideran tipos enteros largo. La tabla 3.4 muestra los tipos de datos enteros largos. Ambaros tipos requieren 4 bytes de memoria (32 bits) de almacenamiento. Un ejemplo de uso de enteros largos es:

Claro, aquí tienes el **texto ordenado y bien presentado**, sin modificar su contenido original:

---

```c
long medida_milimetros;
unsigned long distancia_media;
```

**Constantes enteras en tres bases diferentes**

| **Base 10 (Decimal)** | **Base 16 (Hexadecimal)** | **Base 8 (Octal)** |
|------------------------|----------------------------|---------------------|
| 8                      | 0x08                       | 010                 |
| 10                     | 0x0A                       | 012                 |
| 16                     | 0x10                       | 020                 |
| 65536                  | 0x10000                    | 0200000             |
| 24                     | 0x18                       | 030                 |
| 17                     | 0x11                       | 021                 |


**Nota:** Si se desea forzar al compilador para tratar sus constantes como `long`, añada la letra **L** (o bien **l**) a su constante.  
Por ejemplo:

```c
long numeros_grandes = 40000L;
```


**Tipos de datos enteros largos**

| **Tipo en C**     | **Rango de valores**               |
|-------------------|------------------------------------|
| `long`            | -2,147,483,648 .. +2,147,483,647   |
| `unsigned long`   | 0 .. +4,294,967,295                |

## Tipos de coma flotante (float/double)

**Los tipos de datos de coma (punto) flotante representan números reales** que contienen una coma (un punto) decimal, tal como `3.14159`, o números muy grandes, tales como `1.85*10`.

La declaración de las variables de coma flotante es igual que la de variables enteras. Así, un ejemplo es el siguiente:

```c
float valor;           /* declara una variable real */
float valor1, valor2;  /* declara varias variables de coma flotante */
float valor = 99.99;   /* asigna el valor 99.99 a la variable valor */
```

C soporta tres formatos de coma flotante (Tabla 3.5).  
El tipo `float` requiere 4 bytes de memoria, `double` requiere 8 bytes, y `long double` requiere 10 bytes (Borland C).


**Tipos de datos en coma flotante (Borland C)**

| **Tipo C**     | **Rango de valores**             | **Precisión**  |
|----------------|----------------------------------|----------------|
| `float`        | 3.4 × 10⁻³⁸ .. 3.4 × 10³⁸         | 7 dígitos      |
| `double`       | 1.7 × 10⁻³⁰⁸ .. 1.7 × 10³⁰⁸       | 15 dígitos     |
| `long double`  | 3.4 × 10⁻⁴⁹³² .. 1.1 × 10⁴⁹³²     | 19 dígitos     |


**Ejemplos**

```c
float f;             /* definición de la variable f */
f = 1.65;            /* asignación a f */
printf("f: %f\n", f); /* visualización de f: 1.65 */

double h;            /* definición de la variable de tipo double h */
h = 0.0;             /* asignación de 0.0 a h */

```

## Caracteres (char)

Un **carácter** es cualquier elemento de un conjunto de caracteres predefinidos o alfabeto.  
La mayoría de las computadoras utilizan el conjunto de caracteres **ASCII**.

C procesa datos carácter (tales como texto) utilizando el tipo de dato `char`.  
En unión con la estructura **array**, que se verá posteriormente, se puede utilizar para almacenar **cadenas de caracteres** (grupos de caracteres).

**Declaración de variables carácter**

Se puede definir una variable carácter escribiendo:

```c
char dato_car;
char letra = 'A';
char respuesta = 'S';
```

---

**Representación interna**

Internamente, los caracteres se almacenan como **números**.  
Por ejemplo:

- La letra `'A'` se almacena como el número `65`
- La letra `'B'` como `66`
- La letra `'C'` como `67`
- etc.

El tipo `char` representa valores en el rango de **-128 a +127**, y estos valores se asocian con el **código ASCII**.

Dado que el tipo `char` almacena valores en el rango de -128 a +127, C proporciona el tipo  
`unsigned char` para representar valores de 0 a 255 y así representar todos los caracteres ASCII.

Puesto que los caracteres se almacenan internamente como números, se pueden realizar **operaciones aritméticas** con datos tipo `char`.  
Por ejemplo, se puede convertir una letra minúscula `a` a una letra mayúscula `A`, restando 32 del código ASCII.

Las sentencias para realizar la conversión:

```c
char car_uno = 'a';
car_uno = car_uno - 32;
```

Esto convierte `a` (código ASCII 97) a `A` (código ASCII 65).  
De modo similar, añadiendo 32 convierte el carácter de letra mayúscula a minúscula:

```c
car_uno = car_uno + 32;
```

Como los tipos `char` son subconjuntos de los tipos enteros, se puede asignar un tipo `char` a un entero:

```c
int suma = 0;
char valor;
scanf("%c", &valor);  /* función estándar de entrada */
suma = suma + valor;  /* operador... */
```

Existen caracteres que tienen un propósito especial y no se pueden escribir utilizando el método normal.  
C proporciona **secuencias de escape**.

Por ejemplo, el literal carácter de un apóstrofe se puede escribir como:

```c
'\'' 
```

Y el carácter nueva línea:

```c
'\n'
```

La **Tabla 3.7** enumera las diferentes secuencias de escape de C.

