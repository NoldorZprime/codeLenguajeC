---
title: Creación de un programa 
description: A reference page in my new Starlight docs site.
---

Una vez creado un programa en C como el anterior, se debe ejecutar, ¿Cómo realizar esta tarea? Los pasos a dar dependerán del compilador C que utilice. Sin embargo, serán similares a los mostrados en la figura. En general, los pasos serían:

* Utilizar un editor de texto para escribir el programa y grabarlo en un archivo. Este archivo constituye el código fuente de un programa.

* Compilar el código fuente. Se traduce el código fuente en un código objeto (extensión .obj) (lenguaje máquina entendible por la computadora). Un archivo objeto contiene intruccióne en lenguaje máquina que se pueden ejecutar por una computadora. Los archivos estándar C y los de cabecera definidos por el usuario son incluidos (`#include`) en su código fuente por el preprocesador. Los archivos de cabecera contienen información necesaria para la compilación, como es el caso de `stdio.h` que contiene información `scanf()` y de `printf()`.

* Enlazar el código objeto con las bibliotecas correspondientes. Una biblioteca C contiene código objeto de una colección de rutinas o funciones que realizan tareas, como visualizar informaciones en la pantalla o calcular la raiz cuadrada de un número. El enlace del código objeto del programa con el objeto de las funciones utilizadas y cualquier otro código empleado en el enlace, producirá un código ejecutable. Un programa C consta de un número diferente de archivos de obejto y archivos biblioteca.  

Para crear un programa utiliza las siguientes etapas:

1. Definir su programa.
2. Definir directivas del preprocesador.
3. Definición de declaraciones globales.
4. Crear main().
5. Crear el cuerpo del programa.
6. Crear sus propias funciones definidas por el usuario.
7. Compilar, enlazar, ejecutar y comprobar su programa.
8. Utilizar comentarios. 
