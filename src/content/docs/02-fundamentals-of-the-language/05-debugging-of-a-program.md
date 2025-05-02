---
title: Depuración de un programa
description: A reference page in my new Starlight docs site.
---

Rara vez los programas funcionan bien la primera vez que se ejecutan. Los errores que se producen en los programas han de ser detectados, aislados (fijados) y corregidos. El proceso de encontrar errores se denomina **depuración** del programa. La correción del error es probablemente la etapa más fácil, siendo la detección y aislamiento del error las tareas más difíciles. 

Existen diferentes situaciones en las cuales se suelen introducir errores en un programa. Dos de las más frecuentes son:

1. Violación (no cumplimiento) de las reglas gramaticales del lenguaje de alto nivel en el que se escribe el programa.

2. Los errores en el diseño del algoritmo en el qeu está basado el programa.

Cuando el compilador detecta un error, visualiza un ***mensaje de error*** indicando que se ha cometido un error y posible causa de error. Desgraciadamente los mensajes de error son dificiles de interpretar y a veces se llegan a conclusiones erróneas. También varían de un compilador a otro compilador. A medida que se gana en experiencia, el proceso de puesta a punto de un programa se mejore considerablemente. Nuestro objeto en cada capítulo es escribir los errores que ocurren más frecuentemente y sugerir posibles causas de error, junto con reglas de estilo de escritura de programas. Desde el punto de vista conceptual existen tres tipos de errores: ***sintaxis***, ***lógicos*** y de ***regresión***.

## Errores de sintaxis

Los **errores de sintaxis** son aquellos que se producen cuando el porgrama viola la sintaxis, es decir, las reglas de gramática del lenguaje. Errores de sintaxis típicos son: escritura incorrecta de palabras reservadas, omisión de signos de puntuación ( comillas, punto y coma...). Los errores de sintaxis son los más fáciles de fijar, ya que ellos son detectados y aislador por el compilador.

Estos errores se puede detectar por el compilador durante el proceso de compilación. A medida que se produce el proceso de traducción del código fuente (por ejemplo, programa escrito en C) a lenguaje máquina de la computadora, el compilador verifica si el programa que se está traduciendo cumple las reglas de sintaxis del lenguaje. Si el programa viola alguna de estas reglas, el compilador genera un ***mensaje de error (o diagnóstico)*** que explica el problema (aparente). Algunos errores típicos (ya citados anteriormente):

- Punto y coma después de la cabecera `main()`.
- Omisión de punto y coma al final de una sentencia.
- Olvido de secuencia `/*` para finalizar un comentario.
- Olvido de doble comillas al cerrar una cadena.
- etc.

Si una sentencia tiene un errore de sintaxis no se traducirá completamente y el programa no se ejecutará. Así, por ejemplo, si una línea de programa es `double radio` se producirá un error ya que falta el punto y coma `(;)` después de la letra última `"o"`. Posteriormente se explicará el proceso de corrección por parte del programador.

## Errores lógicos

Un segundo tipo de errore importante es el **error lógico**, ya que tal error representa errores del programador en el diseño del algoritmo y posterior programa. Los errores lógicos son más difíciles de encontrar y aislar ya que no suelen ser detectados por el compilador.

Suponga, por ejemplo, que una línea de un programa contiene la sentencia `double peso = densidad * 5.25 * PI * pow(longitud,5)/4.0` pero resulta que el tercer asterisco (operador de multiplicación) es en realidad un signo + (operador suma). El compilador no produce ningún mensaje de error de sintaxis ya que no se ha violado ninguna
regla de sintaxis y, por tanto, el cornpilador no detecta error y el programa se compilará y ejecutará bien, aunque producirá resultados de valores incorrectos ya que la fórmula utilizada para calcular el
peso contiene un error lógico.

Una vez que se ha determinado que un programa contiene un error lógico -si es que se encuentra en la primera ejecución y no pasa desapercibida al programador- encontrar el error es una de las tareas
más difíciles de la programación. El depurador (debugger) un programa de software diseñado específicamente para la detección, verificación y corrección de errores, ayudará en las tareas de
depuración.

Los errores lógicos ocurren cuando un programa es la implementación de un algoritmo defectuoso. Dado que los errores lógicos normalmente no producen errores en tiempo de ejecución y no visualizan mensajes de error; son más difíciles de detectar porque el programa parece ejecutarse sin contratiempos. El único signo de un error lógico puede ser la salida incorrecta de un programa. La sentencia `total-grados-centigrados = f a h r e n h e i t - a - c e n t i g r d d o s * temperatura-cen;` es una sentencia perfectamente legal en C, pero la ecuación no responde a ningún cálculo válido para
obtener el total de grados centígrados en una sala.

Se pueden detectar errores lógicos comprobando el programa en su totalidad, comprobando su salida con los resultados previstos. Se pueden prevenir errores lógicos con un estudio minucioso y detallado del algoritmo antes de que el programa se ejecute, pero resultará fácil cometer errores lógicos y es el conocimiento de C, de las técnicas algorítmicas y la experiencia lo que permitirá la detección de los errores lógicos.

## Errores de regresión

Los **errores de regresión** son aquellos que se crean accidentalmente cuando se intenta corregir un errore lógico. Siempre que se corrige un error se debe comprobar  totalmente la exactitud (corrección) para asegurarse que se fija el error que se está tratando u no produce otro error. Los errores de regresión son comunes, pero son fáciles de leer y corregir. Una ley no escrita es que: <<Un error se ha producido, probablemente, por el último código modificado>>.

## Mensaje de error

Los compiladores emiten mensajes de error o de advertencia durante las fases de compilación, de enlace o de ejecución de un programa.

Los mensajes de error producidos durante la compilación se suelen producir, normalmente, por errores de sintaxis y suele variar según los compiladores; pero, en general, se agrupan en tres grandes bloques:

- **Errores fatales.** Son raros. Algunos de ellos indican un error interno del compilador. Cuando ocurre un error fatal, la compilación se detiene inmediatamente, se debe tomar la acción apropiada y a continuación se vuelve a iniciar la compilación.
- **Errores de sintaxis.** Son los errores típicos de sintaxis, errores de línea de órdenes y errores de acceso a memoria o disco. El compilador terminará la fase actual de compilación y se detiene.
- **Advertencias (warning)**.No impiden la compilación. Indican condiciones que son sospechosas, pero son legítimas como parte del lenguaje.

## Errores de ejecución

Existen dos tipos de errores en tiempo de ejecución: aquellos que son detectados por el sistema en tiempo de ejecución de C y aquellos que permiten la terminación del programa pero producen resultados incorrectos.

Un error en tiempo de ejecución puede ocurrir como resultado de que el programa obliga a la computadora a realizar una operación ilegal, tal como dividir un número por cero, raíz cuadrada de un número negativo o manipular datos no válidos o no definidos. Cuando ocurre este tipo de error, la computadora detendrá la ejecución de su programa y emitirá (visualizará) un mensaje de diagnóstico tal
como:

`Divide error, line number * * *`

Si se intenta manipular datos no válidos o indefinidos su salida puede contener resultados extraños.

Por ejemplo, se puede producir un desbordumiento aritmético cuando un programa intenta almacenar un número que es mayor que el tamaño máximo que puede manipular su computadora.

El programa ``depurar.c`` se compila con éxito; pero no contiene ninguna sentencia que asigne un valor a la variable ``x`` que pueda sumarse a ``y`` para producir un valor ``z``,por lo tanto al ejecutarse la sentencia de asignación

``z = x + y ;``
se produce un error en tiempo de ejecución, un error de lógica.


~~~c
/*
 * Archivo depurar
 * prueva de erroes en tiempo de ejecución**/

#include <stdio.h>

int main(){
    // variables locales
    float x, y, z;
    
    y = 10.0;
    z = x + y;  // valor inesperado: error de ejecución
    printf("El valor de z es: %f\n", z);
    return 0;
}
~~~

El programa anterior, sin embargo, podría terminar su ejecución, aunque produciría resultados incorrectos. Dado que no se asigna ningún valor a x,contendrá un valor impredecible y el resultado de
la suma será también impredecible. Muchos compiladores inicializan las variables automáticamente a cero, haciendo en este caso más difícil de detectar la omisión, sobre todo cuando el programa se
transfiere a otro compilador que no asigna ningún valor definido.

Otra fuente de errores en tiempo de ejecución se suele producir por errores en la entrada de datos producidos por la lectura del dato incorrecto en una variable de entrada.