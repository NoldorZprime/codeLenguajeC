---
title: Constantes
description: A reference page in my new Starlight docs site.
---


**En C existen cuatro tipos de constantes:**

- constantes literales,
- constantes definidas,
- constantes enumeradas,
- constantes declaradas.


**Las constantes literales** son las más usuales; toman valores tales como 45.32564, 222 o bien "Introduzca sus datos", que se escriben directamente en el texto del programa.

**Las constantes definidas** son identificadores que se asocian con valores literales constantes y que toman determinados nombres.

**Las constantes declaradas** son como variables: sus valores se almacenan en memoria, pero no se pueden modificar.

**Las constantes enumeradas** permiten asociar un identificador, tal como Color, con una secuencia de otros nombres, tales como Azul, Verde, Rojo y Amarillo.


## Constantes literales

Las constantes literales o constantes, en general, se clasifican también en cuatro grupos, cada uno de los cuales puede ser de cualquiera de los tipos:

- constantes enteras,
- constantes caracteres,
- constantes de coma flotante,
- constantes de cadena.

### Constantes enteras

La escritura de constantes enteras requiere seguir unas determinadas reglas:

- No utilizar nunca comas ni otros signos de puntuación en números enteros o completos.

  Ejemplo: `123456` en lugar de `123.456`

- Para forzar un valor al tipo `long`, terminar con una letra `L` o `l`.

  Ejemplo: `1024` es un tipo entero; `1024L` es un tipo largo (`long`)

- Para forzar un valor al tipo `unsigned`, terminarlo con una letra mayúscula `U`.

  Ejemplo: `4352U`.

- Para representar un entero en octal (base 8), éste debe de estar precedido de `0`.

  Formato decimal: `123`

  Formato octal: `0777` (están precedidas de la cifra `0`)

- Para representar un entero en hexadecimal (base 16), este debe de estar precedido de `0x`.

  Formato hexadecimal: `0xFF3A` (están precedidas de `0x` o bien `0X`)

Se pueden combinar sufijos `L` (`l`), que significa `long` (largo), o bien `U` (`u`), que significa `unsigned` (sin signo).

Ejemplo: `3456UL`

### Constantes reales

Una constante flotante representa un número real; siempre tienen signo y representan aproximaciones en lugar de valores exactos.

Claro, a continuación te presento el texto ordenado según tus indicaciones, sin modificar su contenido:



8 2 . 3 4 7 . 6 3 8 3 . 4 7 e - 4 1.25E7 6l.e+4

La notación científica se representa con un exponente positivo o negativo.

2 . 5 E 4 equivale a 2 5 0 0 0

5 . 4 3 5 E - 3 equivale a O . 0 0 5 4 3 5

Existen tres tipos de constantes:

- float 4 bytes
- double 8 bytes
- long double 10 bytes

### Constantes carácter

Una constante carácter (char) es un carácter del código ASCII encerrado entre apóstrofes.

'A' 'b' ' C '

Además de los caracteres ASCII estándar, una constante carácter soporta caracteres especiales que no se pueden representar utilizando su teclado, como, por ejemplo, los códigos ASCII altos y las secuencias de escape. (El Apéndice B recoge un listado de todos los caracteres ASCII.)

Así, por ejemplo, el carácter sigma (C) - código ASCII 228, hex E4 - se representa mediante el prefijo \x y el número hexadecimal del código ASCII. Por ejemplo,

```c
char sigma = '\xE4';
```

Este método se utiliza para almacenar o imprimir cualquier carácter de la tabla ASCII por su número hexadecimal. En el ejemplo anterior, la variable sigma no contiene cuatro caracteres sino únicamente el símbolo sigma.

**Caracteres secuencias (códigos) de escape**

| Código de escape | Significado             | Códigos ASCII |
|------------------|-------------------------|---------------|
| '\n'             | nueva línea             | Dec: 10, Hex: 0A |
| '\r'             | retorno de carro        | Dec: 13, Hex: 0D |
| '\t'             | tabulación              | Dec: 9,  Hex: 09 |
| '\v'             | tabulación vertical     | Dec: 11, Hex: 0B |
| '\a'             | alerta (pitido sonoro)  | Dec: 7,  Hex: 07 |
| '\b'             | retroceso de espacio    | Dec: 8,  Hex: 08 |
| '\f'             | avance de página        | Dec: 12, Hex: 0C |
| '\\'             | barra inclinada inversa | Dec: 92, Hex: 5C |
| '\''             | comilla simple          | Dec: 39, Hex: 27 |
| '\"'             | doble comilla           | Dec: 34, Hex: 22 |
| '\?'             | signo de interrogación  | Dec: 63, Hex: 3F |
| '\000'           | número octal            | Todos         |
| '\xhh'           | número hexadecimal      | Todos         |

Un carácter que se lee utilizando una barra oblicua (\) se llama secuencia o código de escape. La Tabla 3.6 muestra diferentes secuencias de escape y su significado.


/* Programa: Pruebas códigos de escape */  
```c
#include <stdio.h>

int main() {
    char alarma = '\a'; /* alarma */
    char bs = '\b';     /* retroceso de espacio */
    printf("%c %c", alarma, bs);
    return 0;
}
```

### Aritmética con caracteres C

Dada la correspondencia entre un carácter y su código ASCII, es posible realizar operaciones aritméticas sobre datos de caracteres. Observe el siguiente segmento de código:

```c
char c;
c = 'T' + 5; /* suma 5 al carácter ASCII */
```

Realmente lo que sucede es almacenar `Y` en `c`. El valor ASCII de la letra `T` es 84, y al sumarle 5 produce 89, que es el código de la letra `Y`. A la inversa, se pueden almacenar constantes de carácter en variables enteras. Así,

```c
int j = 'p';
```

No pone una letra `p` en `j`, sino que asigna el valor 112 —código ASCII de `p`— a la variable `j`.

Observar este pequeño segmento de código:

```c
int m;
m = m + 'a' - 'A';
```

Está convirtiendo una letra mayúscula en su correspondiente minúscula. Para lo cual suma el desplazamiento de las letras mayúsculas a las minúsculas (`'a' - 'A'`).

### Constantes cadena

Una constante cadena (también llamada literal cadena o simplemente cadena) es una secuencia de caracteres encerrados entre dobles comillas. Algunos ejemplos de constantes de cadena son:

```c
"123"
"12 de octubre 1492"
"esto es una cadena"
```

Se puede escribir una cadena en varias líneas, terminando cada línea con `\`

```c
"esto es una cadena\
que tiene dos lineas"
```

Se puede concatenar cadenas, escribiendo:

```c
"ABC" "DEF" "GHI" "JKL"
```

que equivale a:

```c
"ABCDEFGHIJKL"
```

En memoria, las cadenas se representan por una serie de caracteres ASCII más un 0 o nulo. El carácter nulo marca el final de la cadena y se inserta automáticamente por el compilador C al final de las constantes de cadenas. Para representar valores nulos, C define el símbolo `NULL` como una constante en diversos archivos de cabecera (normalmente `STDEF.H`, `STDIO.H`, `STDLIB.H` y `STRING.H`). Para utilizar `NULL` en un programa, incluya uno o más de estos archivos en lugar de definir `NULL` con una línea tal como:

```c
#define NULL 0
```

Recuerde que una constante de caracteres se encierra entre comillas simples (apóstrofe), y las constantes de cadena encierran caracteres entre dobles comillas. Por ejemplo:

```c
'Z'    // constante carácter
"z"    // constante de cadena
```

El primer `'z'` es una constante carácter simple con una longitud de 1, y el segundo `"z"` es una constante de cadena de caracteres también con la longitud 1. La diferencia es que la constante de cadena incluye un cero (nulo) al final de la cadena, ya que C necesita conocer dónde termina la cadena, y la constante carácter no incluye el nulo ya que se almacena como un entero. Por consiguiente, no puede mezclar constantes caracteres y cadenas de caracteres en su programa.

## Constantes definidas (simbólicas)

Las constantes pueden recibir nombres simbólicos mediante la directiva `#define`:

```c
#define NUEVALINEA \n
#define PI 3.141592
#define VALOR 54
```

C sustituye los valores `\n`, `3.141592` y `54` cuando se encuentra las constantes simbólicas `NUEVALINEA`, `PI` y `VALOR`. Las líneas anteriores no son sentencias y, por ello, no terminan en punto y coma.

```c
printf("El valor es %dNUEVALINEA", VALOR);
```

Escribe en pantalla la constante `VALOR`. Realmente, el compilador lo que hace es sustituir en el programa todas las ocurrencias de `VALOR` por `54`, antes de analizar sintácticamente el programa fuente.


## Constantes enumeradas

Las constantes enumeradas permiten crear listas de elementos afines. Un ejemplo típico es una constante enumerada de lista de colores, que se puede declarar como:

```c
enum Colores {Rojo, Naranja, Amarillo, Verde, Azul, Violeta};
```

Cuando se procesa esta sentencia, el compilador asigna un valor que comienza en 0 a cada elemento enumerado; así, `Rojo` equivale a 0, `Naranja` es 1, etc. El compilador enumera los identificadores por usted.

Después de declarar un tipo de dato enumerado, se pueden crear variables de ese tipo, como con cualquier otro tipo de datos. Así, por ejemplo, se puede definir una variable de tipo `enum Colores`:

```c
enum Colores Colorfavorito = Verde;
```

Otro ejemplo puede ser:

```c
enum Boolean {False, True};
```

Que asignará al elemento `False` el valor 0 y a `True` el valor 1.

Para crear una variable de tipo lógico se declara:

```c
enum Boolean Interruptor = True;
```

Es posible asignar valores distintos de los que les corresponde en su secuencia natural:

```c
enum LucesTrafico {Verde, Amarillo = 10, Rojo};
```

Al procesar esta sentencia, el compilador asigna el valor 0 al identificador `Verde`, 10 al identificador `Amarillo` y 11 a `Rojo`.


## Constantes declaradas `const` y `volatile`

El cualificador `const` permite dar nombres simbólicos a constantes, similar a otros lenguajes como Pascal. El formato general para crear una constante es:

```c
const tipo nombre = valor;
```

Si se omite el tipo, C utiliza `int` (entero por defecto). Algunos ejemplos son:

```c
const int Meses = 12;       // Meses es constante simbólica de tipo int
const char CARACTER = '@';
const int OCTAL = 0233;
const char CADENA[] = "Curso de C";
```

C soporta el calificativo de tipo variable `const`, lo que especifica que el valor de una variable no se puede modificar durante el programa. Cualquier intento de modificar el valor de la variable definida con `const` producirá un mensaje de error.

```c
const int semana = 7;
const char CADENA[] = "Borland C 3.013.1 Guía de referencia";
```

La palabra reservada `volatile` actúa como `const`, pero su valor puede ser modificado no solo por el propio programa, sino también por el hardware o por el software del sistema. Las variables volátiles, sin embargo, no se pueden guardar en registros, a diferencia de las variables normales.

### Diferencias entre `const` y `#define`

- Las definiciones `const` especifican tipos de datos, terminan con puntos y coma y se inicializan como las variables.
- La directiva `#define` no especifica tipos de datos, no utiliza el operador de asignación (`=`) y no termina con punto y coma.

### Ventajas de `const` sobre `#define`

En C, casi siempre es recomendable el uso de `const` en lugar de `#define`. Además de las ventajas ya mencionadas, se pueden considerar otras:

- El compilador, normalmente, genera código más eficiente con constantes `const`.
- Como las definiciones especifican tipos de datos, el compilador puede comprobar inmediatamente si las constantes literales en las definiciones de `const` están correctamente formateadas. Con `#define`, el compilador no puede realizar pruebas similares hasta que una sentencia utilice el identificador constante, lo que hace más difícil la detección de errores.

### Desventaja de `const` sobre `#define`

Los valores de los símbolos de `const` ocupan espacio de datos en tiempo de ejecución, mientras que `#define` solo existe en el texto del programa y su valor se inserta directamente en el código compilado.

Los valores `const` no se pueden utilizar donde el compilador espera un valor constante, por ejemplo, en la definición de un array. Por esta razón, algunos programadores de C siguen utilizando `#define` en lugar de `const`.

**Sintaxis de `const`**

La sintaxis para declarar una constante con `const` es la siguiente:

```c
const tipoDato nombreconstante = valorConstante;
```

Ejemplos:

```c
const unsigned DiasDeSemana = 7;
const HorasDelDia = 24;
```
