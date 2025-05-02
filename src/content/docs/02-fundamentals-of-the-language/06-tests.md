---
title: Pruevas
description: A reference page in my new Starlight docs site.
---

Los **errores de ejecución** ocurren después que el programa se ha compilado con éxito y aún se está ejecutando. Existen ciertos errores que la computadora sólo puede detectar cuando se ejecuta el
programa. La mayoría de los sistemas informáticos detectarán ciertos errores en tiempo de ejecución y presentarán un mensaje de error apropiado. Muchos errores en tiempo de ejecución tienen que ver con
los cálculos numéricos. Por ejemplo, si la computadora intenta dividir un número por cero o leer un archivo no creado, se produce un error en tiempo de ejecución.

Es preciso tener presente que el compilador puede no emitir ningún mensaje de error durante la ejecución y eso no garantiza que el programa sea correcto. Recuerde que el compilador sólo le indica
si se escribió bien sintácticamente un programa en C. N o indica si el programa hace lo que realmente desea que haga. Los errores lógicos pueden aparecer -y de hecho aparecerán -por un mal diseño del
algoritmo y posterior programa.

Para determinar si un programa contiene un error lógico, se debe ejecutar utilizando datos de muestra y comprobar la salida verificando su exactitud. Esta prueba (testing)se debe hacer varias veces utilizando diferentes entradas, preparadas - e n el caso ideal-, por personas diferentes al programador, que puedan indicar suposiciones no evidentes en la elección de los datos de prueba. Si cualquier combinación de entradas produce salida incorrecta, entonces el programa contiene un error lógico

Una vez que se ha determinado que un programa contiene un error lógico, la localización del error es una de las partes más difíciles de la programación. La ejecución se debe realizar paso a paso (seguir
la traza) hasta el punto en que se observe que un valor calculado difiere del valor esperado. Para simplificar este seguimiento o traza, la mayoría de los compiladores de C proporcionan un depurador
integrado' incorporado con el editor, y todos ellos en un mismo paquete de software, que permiten al programador ejecutar realmente un programa, línea a línea, observando los efectos de la ejecución de
cada línea en los valores de los objetos del programa. Una vez que se ha localizado el error, se utilizará el editor de texto para corregir dicho error.

Es preciso hacer constar que casi nunca será posible comprobar un programa para todos los posibles conjuntos de datos de prueba. Existen casos en desarrollos profesionales en los que, aparentemente, los programas han estado siendo utilizados sin problemas durante años, hasta que se utilizó una combinación específica de entradas y ésta produjo una salida incorrecta debida a un error lógico. El conjunto de datos específicos que produjo el error nunca se había introducido.

A medida que los programas crecen en tamaño y complejidad, el problema de las pruebas se convierte en un problema de dificultad cada vez más creciente. No importa cuantas pruebas se hagan:

<<las pruebas nunca se terminan, sólo se detienen y no existen garantías de que se han encontrado y corregido todos los errores de un programa». 

Dijkstra ya predijo a principios de los setenta una máxima que siempre se ha de tener presente en la construcción de un programa: 

<<Las pruebas sólo muestran la presencia de errores, no su ausencia. N o se puede probar que un programa es correcto (exacto) sólo se puede mostrar que es incorrecton».