---
title: Estructura de un programa
description: A reference page in my new Starlight docs site.
---

En esta sección repasamos los elementos constituyentes de un programa escrito en C, fijando ideas y describiendo ideas nuevas relativas a la mencionada estructura de un programa en C.

Un programa en C se compone de una o más funciones. Una de las funciones debe ser obligatoriamente **main**. Una función en C es un grupo de instrucciones que realizan una o mas acciones. Asimismo, un programa contendrá una serie de directivas **#include** que permite incluir en el mismo archivo de cabecera que a su vez constarán de funciones y datos predefinidos en ellos.

~~~c
#include <stdio.h> // Archivo de cabecera

int main() // cabecera de función
{
	printf("Hola Mundo\n"); // sentencia
	return 0;
}
~~~

* `#include`: Directivas del preprocesador
* `#define`: Macros del preprocesador

De un modo más explícito, un programa C puede incluir:

* Directivas del preprocesador
* Declaraciones globales
* La función `main()`
* Funciones definidas por el usuario
* Comentarios del programa (utilizados en su totalidad).

~~~c
/* Listado Demo_uno.c. Programa de saludo */

#include <stdio.h>

// Este programa imprime: Bienvenido a la programación en C
int main(){
	printf("Bienvenido a la programacion en C\n");
	return 0;
}
~~~

* La directiva `#include` de la primera línea es necesario para que el programa tenga salida. Se refiere a un archivo externo denominado `stdio.h` en el que se proporciona la información relativa a la función `printf()`. Obsérvese que los ángulos `<` y `>` no son parte del nombre del archivo; se utilizan para indicar que el archivo es un archivo de la biblioteca estándar C.

* La segunda línea es un ***comentario***, identificado por los caracteres `/*` y `*/`. Los comentarios se incluyen en programas que proporcionan explicaciones a los lectores de los mismos. Son ignorador por el compilador.

* La tercera línea contiene la cabecera de la función `main()`, obligatoria en cada programa C.Indica el comienzo del programa y requieren los paréntesis `()` a continuación de `main()`.

* La cuarta y séptima línea contienen sólo las llaves `{` y `}`que encierran el curpo de la función `main()`y son necesarios en todos los programas C.

* La quinta línea contiene la sentencia `printf("Bienvenido a la programacion en C\n");` que indica al sistema que escriba el mensaje `"Bienvenido a la programación en C\n"`. **`printf()`** es la función más utilizada para dar salida de datos por el dispositivo estándar. la pantalla. La salida será **Bienvenido a la programación en C**. El símbolo `\n` es el símbolo de nueva línea. Poniendo este símbolo al final de la cadena entre comillas, indica al sistema que comience nueva línea después de imprimir los caracteres precedentes, terminando, por consiguiente. la línea actual.

* La secta línea contiene la sentencia **return 0**. Esta sentencia termina la ejecución del programa y devuelve el control al sistema operativo de la computadora. El número 0 se utiliza para señalar que el programa ha terminado correctamente (con éxito).

Obsérvese el punto y coma (`;`) al final de la quinta y sexta línea. C require que cada sentencia termine con un punto y coma. No es necesario que esté al final de una línea. Se puede poner varias sentencias en la misma línea y se puede hacer que una sentencia se extienda sobre varias líneas.

***Advertencia***

* El programa más corto de C es el `programa vacío` que no hace nada.
* La sentencia `returno 0;` no es obligatoria en la mayoría de los compiladores, aunque algunos emiten un mensaje de advertencia si se omite.

## Directivas del preprocesador

El ***preprocesador*** es un programa en C que se puede considerar como un editor de texto inteligente que consta de ***directivas*** (instrucciones al compilador antes de que se compile el programa principal). La dos directivas más usuales son `#include` y `define`.

Todas la directivas del preprocesador comienzan con el signo de libro o ***almohadilla -> #***, que indica al compilador que lea las directivas antes de compilar la parte (función) principal del programa.

Las **directivas** son instrucciones al compilador. Las directivas no son generalmente sentencias -obsérvese que su línea no termina en punto y coma- , sino instrucciones que se dan al compilador antes de que el programa se compile. Aunque las directivas pueden definir macros, nombres de constantes, archivos fuentes adicionales, etc.., su uso mas frecuente en C es la inclusión de archivos de cabecera. 

Existen archivos de cabecera estándar que se utilizan ampliamente, tales como `STDIO.H`, `STDLIB.H`, `STRING.H` y se utilizarán otros archivos de cabecera definidos por el usurio para diseño estructurado.

La directiva `#include` indica al compilador que lea el archivo fuente que viene a continuación de ella y su contenido lo inserte en la posición donde se encuentra dicha directiva. Estos archivos se denominan ***archivos de cabecera o archivos de inclusión***.

Los archivos de cabecera (archivos con extensión `.h` contienen código fuente C) se sitúan en un programa C mediante la directiva del pre procesador `#include` con una instrucción que tienen el sigueinte formato:

`#include <nombrearch.h>` o bien `#include "nombrearch.h"`

`nombrearch` debe ser un archivo de texto **ARCII**(su archivo fuente) que reside en el disco. En realidad, la directiva del proprocesador mezcla un archivo de disco en un programa fuente.

La mayoría de los programadores C sitúan las directivas del proprocesador al principio del programa, aunque esta posición no es obligatoria. 

Además de los archivos de código fuente diseñado por el usuario, `#include` se utiliza para incluir archivos de sistemas especiales (también denominados archivos de cabecera) que se residen en su compilador C. Cuando se instala el compilador, estos archivos de cabecera se almacenarán automáticamente en su disco, en el directoria de inclusión (include) del sistema. Sus nombres de archivo siempre tienen la extensión `.h`.

El archivo de cabecera más frecuente es `STDIO.H`. Este archivo proporciona al compilador C la información necesaria sobre las funciones de biblioteca que realizan operaciones de entrada y salida. 

Como casi todos los programas que escriba información en pantalla y leerán datos de teclado, necesitarán incluir `scanf()` y `printf()` en los mismos.

Para ello será preciso que cada programa contenga la línea siguiente:

`#include <stdio.h>`

De igual modo es muy frecuente el uso de funciones de cadena, especialemente `strcpy();` por esta razón, se requiere el uso del archivo de cabecera denominado `string.h`. Por consiguiente, será muy usual que deba incluir en sus programas las líneas:

`#include <stdio.h>`
`#include <string.h>`

El orden de los archivos de inclusión no importan con tal que se incluyan antes de que se utilicen las funciones correspondientes. La mayoría de los programas C incluyen todos los archivos de cabecera necesarios antes de la primera función del archivo.

La directiva `#include`  puede adoptar uno de los siguientes formatos:

`#include <nombre del archivo>`
`#include "nombre del archivo"`

Dos ejemplos típicos son:

(a) `#include <stdio.h>`
(b) `#include "pruevas.h"`

El formato (a) (el nombre del archivo entre ángulos) significa que los archivos se encuentran en los directorios por defecto `include`. El formato (b) significa que el archivo está en el directorio actual. Los dos métodos no son excluyentes y pueden existir en el mismo programa archivos de cabecera estándar utilizando ángulos y otros archivos de cabecera utilizando comillas. Si desea utilizar un archivo de cabecera que se creó y no está en el directorio por defecto, se encierra el archivo de cabecera y el camino entre comillas, tal como `#include "D:\D:\MIPROG\CABEZA.H"` **`#define`**. La directiva `#define` indica el preprocesador que defina un item de datos u operación para el programa C. Por ejemplo, la directiva `#define TAM_LINEA 65` sustituirá **TAM_LINEA** por el valor 65 cada vez que aparezca en el programa.

## Declaraciones Globales

Las declaraciones globales indican al compilador que las funciones definidas por el usuario o variables así declaradas son comunes a todas las funciones de su programa. La declaraciones globales se situán antes de la función `main()`. Si se declara global una variable `grado-clase` del tipo.

~~~c
int Grado-clase;
~~~

cualquier función de su programa, incluyendo `main()`, puede haceder a la variable **Grado-clase**.

La zona de declaraciones globales de un programa puede incluir declaraciones de variables además de declaraciones de función. Las declaraciones de función se denominan ***prototipos***

~~~c
int media(int a, int b);
~~~

El siguiente programa es una estructura modelo que incluye declaraciones globales.

~~~c
/* Programa demo.c */
#include <stdio.h>

/* Definición de macros */
#define MICONST1 0.50
#define MICONST2 0.75

/* Declaraciones globales */
int Calificaciones;

int mainb(){
	//...
}
~~~

## Función main()

Cada programa C tiene una función `main()` que es el punto de entrada al programa. Su estructura es:

~~~c
int main(){
	//... Bloque de sentencias
}
~~~

Las sentencias incluidas entre llaves `{...}` se denominan ***bloque***. Un programa debe tener sólo una función `main()`. Si se intenta hacer dos funciones `main()` se produce un error. Además de la función `main()`, un programa C consta de una colección de funciones. 

***Una función C es un subprograma que devuelve un único valor, un conjuto de valores o realiza algunas tarea especifica tal como E/S.***

En un programa corto, el programa completo puede incluir totalmente en la función `main()`. Un programa largo, sin embargo, tiene demasiados códigos para incluir en esta función. La función `main()` en un programa largo consta prácticamente de llamadas a las funciones definidas por el usuario. El programa siguiente se compone de tres funciones: `obtenerDatos()`, `alfabetizar()` y `verpalabras()` que se invocan sucesivamente.

~~~c
int main(){
	obtenerDatos();
	alfabetizar();
	verpalabras();

	return 0;
}
~~~

Las variables y constantes globales de declaran y definen fuera de la función de las funciones, generalmente en la cabecera del programa, antes de `main()`, mientras que las variables y constantes locales se declaran y definen en la cabecera del cuerpo o bloque de la función principal, o en la cabecera de cualquier bloque. Las sentencias situadas en el interior del cuerpo de la función `main()`, o cualquier otra función, debe terminar en punto y coma.

## Funciones definidas por el usuario

Un program en C es una colección de funciones. Todos los programas se construyen a partir de una o más funciones que se integran para crear una aplicación. Todas las funciones contienen una o más sentencias C y se crean generalmente para realizar una única tarea, tales como imprimir la pantalla, escribir un archivo o cambiar el color de la pantalla. Se pueden declarar y ejecutar un número de funciones casi eilimitado en un programa C. 

Las funciones definidas por el usuario se invocan por su nombre y los parámetros opcionales que puedan tener. Después de que la función es llamada, el código asociado con la función se ejecuta y, a continuación, se retorna a la función llamadora.

Toas las funciones tienen nombre y una lista de valores que reciben. Se puede asignar cualquier nombre a su función, pero normalmente se procura que dicho nombre describa el propósito de la función. En C, las funciones requieren una declaración o prototipo en el programa:

`void trazarCurva();`

Una declaración de función indica al compilador el nombre de la función por el que ésta será invocada en el programa. Si la función no se define, el compilador informa de un error. La palabra reservada `void` significa que la función no devuelve un valor.

~~~c
void contarVocales(char caracter);
~~~

La definición de una función es la estructura de la misma:

~~~c
/*
tipo-retorno nombre-función (lista-de-parámetros) principio de la función
{
	sentencias  Cuerpo de la función
	return 0;   retorno de la función
}               Fin de la función
*/
~~~

**tipo-retorno**: Es el valor, o void, devuelto por la función
**nombre-función**: Nombre de la función
**lista-de-parámetros**: Lista de parámetros, o void, pasados a la función. Se conoce también como argumentos de la función o argumentos formales.

C proporciona también funciones predefinidas que se denominan ***funciones de la bibliotaca***. Las funciones de biblioteca son funciones listas para ejecutar que vienen con el lenguaje C. Requieren la inclusión del archivo de cabecera estándar, tal como `STDIO.H`, `MATH.H`, etc. Existen centenares de funciones definidas en diversos archivos de cabecera. 

~~~c
/* Ejemplo funciones definidas por el usuario */

#include <stdio.h>

void visualizar();

int main(){
	visualizar();
	return 0;
}

void visualizar(){
	printf("Primeros pasos en C\n");
}
~~~

Los programas en C constan de un conjuto de funciones que normalmente están controladas por la función `main()`.

## Comentarios

Un comentario es cualquier información que se añade a su archivo fuente para proporcionar documentación de cuaquier tipo. El compilador ignora los comentarios, no realiza ninguna tarea concreta. El uso de comentarios es totalmente opcional, aunque dicho eso es muy recomendable. 

Generalmente, se considera buena práctica de programación comentar su archivo fuente tanto como sea posible, al objeto de que usted mismo y otros programadores puedan leer facilmente el programa con el paso de tiempo. Es buena práctica de programación comentar su programa en la parte superior de cada archivo fuente. La información que se suele incluir es el nombre del archivo, el nombre del programador, una breve descripción, la fecha en que se creó la versión y la información de la revisión. 

Los comentarios en C estándar comienzan con la secuencia `/*` y terminan con la secuencia `*/`. 

Todo el texto situado entre las dos sentencias es un comentario ignorado por el compilador.

`/* PRUEVA1.C   -- PRIMER PROGRAMA EN C */`

Si se necesitan varias líneas de programa se pueden hacer lo siguiente 
~~~c
/**
	Programa		: PRUEVA1.C
	Programador		: Timon
	Descripción		: Primer programa en C
	Fecha creación	: Setiembre 2000
	Revisión		: Ninguna
*/
~~~

También si pueden situar comentarios de la froma siguiente:

`scanf("%d", &x); /* Sentencia de entrada de un valor entero */`