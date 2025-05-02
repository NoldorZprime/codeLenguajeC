---
title: Ejecución de un programa
description: A reference page in my new Starlight docs site.
---

Un programa de computadora escrito en un lenguaje de programación (por ejemplo, C) tiene forma de un texto ordinario. Se escribe el programa en una oja de papel y a este programa se le denomina programa ***texto*** o código fuente. Considérese el ejemplo sencillo:

~~~c
#include <stdio.h>

int main(){
    printf("Longitud de circunferencia de radio: %f", 2*3.1416*5);
    return 0;
}
~~~

La primera operación en el proceso de ejecución de un programa es introducir las sentencias (instrucciones) del programa con un editor de texto. El editor elmacena el texto y debe proporcionarle un nombre tal como `area.c`. Si la ventana del editor le muestra un nombre tal como `nonamo.c`, es conveniente cambiar dicho nombre (por ejemplo, `area.c`). A continuación se debe guardar el texto en disco para su conservación y uso posterior, ya que en caso contrario el editor sólo almacena el texto en memoria central (RAM) y cuando se apague la computadora, o bien ocurra alguna anomalía, se perderá el texto de su programa. Sin embargo, si el texto del programa se almacena en un disquete, en un disco duro, o bien en un CD-ROM, el programa se guardará de modo permanente, includo después de apagar la computadora y siempre que ésta se vuelva a arrancar.

La figura muestra el método de edición de un programa y la creación de un programa en disco, en un archivo que se denomina archivo de texto (archivofuente). Con la ayuda de un editor de texto se pudede editar el texto fácilmente, es decir, cambiar, mover, cortar, pegar, borrar texto. Se puede ver, normalmente, una parte de texto en la pantalla y se puede marcar partes del texto a editar con ayuda de un ratón o el teclado. El modo de funcionamiento de un editor de texto y las órdenes de edición asociadas varían de un sistema a otro.


/////////////////         (IMAGEN)          //////////////////////////


Una vez editado el programa, se el proporciona un nombre. Se suele dar una extensión al nombre (normalmente .c, aunque en algunos sistemas peude tener otros sufijos).

La siguiente etapa de la compilación. En ella se traduce el código fuente escrito en el lenguaje C a código máquina (entendible por la computadora). El programa que realiza esta traducción se llama comilador. Cada compilador se construye para un determinado lenguaje de programación (por ejemplo C); un compilador puede ser un programa independiente (como suele ser el caso de sistemas operaditovos como VMS, UNIX, etc) o bien formar parte de un programa entorno integrado de desarrollo (EID). Los programas EID contienen todos los recursos que se necesitan para desarrollar y ejecutar un programa, por ejemplo, editores de texto, compiladores, enlazadores, navegadores y depuradores.

Cada lenguaje de programación tiene unas reglas especiales para la construcción de programas que se denomian sintaxis. El compilador leer el programa del archivo de texto creado anteriormente y comprueva que el programa sigue las reglas de sintaxis del lenguaje de programación. Cuando se compila su programa, el compilador traduce el código fuente C (las sentencias del programa) en un código máquina (código objeto). El código objeto consta de instrucciones máquina e información de cómo cargar el programa en memoria antes de su ejecución. Si el compilador encuentra errores, los presentará en la pantalla. Una vez corregido los errores con ayuda del editor se vuelve a compilar sucesivamente hasta que no se produzca errores. 

El código objeto así obtenido se almacena en un archivo independiente, normalmente con extensión `.obj` o bien `.o`. Por ejemplo, el programa `area` anterior, se puede almacenar con el nombre `area.obj`.

/////////////////    (IMG) /////////////


El archivo contiene sólo la traducción del código fuente. Esto no es suficiente para ejecutar realmente el programa.  Es necesario incluir los archivos de biblioteca (por ejemplo, en el programa `area.c`, `atdio.h`). Una biblioteca es una colección de código que ha sido programada y traducida y lista para utilizar en su programa.

Normalmente un programa cosnta de diferentes unidades o partes de programa que se han compilado independientemente. Por consiguiente, puede haver varios objetos. Un programa especial llamado **enalazador** toma el archivo objeto y las partes necesarias de la biblioteca del sitema y construye un ***archvivo ejecutable***. Los archivos ejecutables tienen un nombre con la extensión `.exe` (en el ejemplo, `area.exe` o simplemente `area` según sea su computadora). Este archivo ejecutable contiene todo el código máquina necesario para ejecutar el programa. Se puede ejecutar el programa escribiendo `area` en el indicador de órdenes o haciendo clic en el icono de archivos.


//////////////         (IMG)      //////////////


Se puede poner ese archivo en un disquete o en un CD-ROM, de modo que esté disponible después de salir del entorno del compilador a cualquier usuario que no tenga un compilador C o que puede no conocer lo que hace. 

El proceso de ejecución de un programa no suele funcionar a la primera vez; es decir, casi siempre hay errores de sisntaxis  o errores en tiempo de ejecución. El proceso de detectar o corregir errores se denomina ***depuración o puesta a punto*** de un programa.


///////////////              (IMG)             //////////////

Se comienza escribiendo el archivo fuente con el editor. Se compila el archivo fuente y se comprueva mensajes de errores. Se retornan al editor y se fijan los errores de sintaxis. Cuando el compilador tiene éxito, el enlazador construye el archivo ejecutable. Se ejecuta el archivo ejecutable. Si se encuentra un error, se puede activar el depurador para ejecutar sentencia a sentencia. Una vez que se encuentra la causa del error, se vuelve al editor y se repite la compilación. El proceso de compilar, enlazar y ejecutar el programa se repetirá  hasta que no se produzcan errores. 

***Etapas del proceso***

- El código fuente (archivo del programa) se crea con la ayuda del editor de texto.
- El compilador traduce el archivo texto en un archivo objeto.
- El enlazador pone juntos a diferentes archivos objetos para poner un archivo ejecutable.
- El sistema operativo pone el archivo ejecutable en la memoria central y se ejecuta el programa. 

