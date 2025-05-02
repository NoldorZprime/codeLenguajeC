---
title: Gestión dinámica de la memoria
description: A reference page in my new Starlight docs site.
---

Consideremos un programa que evalúe las calificaciones de los estudiantes de una asignatura. El programa almacena cada una de las calificaciones en los elementos de una lista o tabla (array) y el tamaño del array debe ser lo suficientemente grande para contener el total de alumnos matriculados en la asignatura. Por ejemplo, la sentencia
```c
int asignatura [ 4 0 ] ;
```
reserva 40 enteros, un número fijo de elementos. Los arrays son un método muy eficaz cuando se conoce su longitud o tamaño en el momento de escribir el programa. Sin embargo, presentan un grave inconveniente si el tamaño del array sólo se conoce en el momento de la ejecución. Las sentencias siguientes producirían un error durante la compilación:
```c
scanf ("%da', &num-estudiantes) ;
int asignatura[num-estudiantes];
```
ya que el compilador requiere que el tamaño del array sea constante. Sin embargo, en numerosas ocasiones no se conoce la memoria necesaria hasta el momento de la ejecución. Por ejemplo, si se desea almacenar una cadena de caracteres tecleada por el usuario, no se puede prever, a priori, el tamaño del array necesario, a menos que se reserve un array de gran dimensión y se malgaste memoria cuando no se utilice. En el ejemplo anterior, si el número de alumnos de la clase aumenta, se debe variar la longitud del array y volver a compilar el programa. El método para resolver este inconveniente es recurrir a punteros y a técnicas de asignación dinámica de memoria.

El espacio de la variable asignada dinámicamente se crea durante la ejecución del programa, al contrario que en el caso de una variable local cuyo espacio se asigna en tiempo de compilación. La asignación dinámica de memoria proporciona control directo sobre los requisitos de memoria de su programa. El programa puede crear o destruir la asignación dinámica en cualquier momento durante la ejecución. Se puede determinar la cantidad de memoria necesaria en el momento en que se haga la asignación. Dependiendo del modelo de memoria en uso, se pueden crear variables mayores de 64 K.

El código del programa compilado se sitúa en segmentos de memoria denominados segmentos de código. Los datos del programa, tales como variables globales, se sitúan en un área denominada segmento de datos. Las variables locales y la información de control del programa se sitúan en un área denominada pila. La memoria que queda se denomina memoria del montículo o almacén libre. Cuando el programa solicita memoria para una variable dinámica, se asigna el espacio de memoria deseado desde el montículo.
7
Asignación dinámica de memoria 357

## Almacén libre (freestorel

El mapa de memoria del modelo de un programa grande es muy similar al mostrado en la Figura I 1.1. El diseño exacto dependerá del modelo de programa que se utilice. Para grandes modelos de datos, el almacén libre (heap) se refiere al área de memoria que existe dentro de la pila del programa. Y el almacén libre es, esencialmente, toda la memoria que queda libre después de que se carga el programa.

```
Memoria
alta
SP -ss *
DS _____)
cs -
Memoria baja
El montículo (almacén libre)
Toda la memoria que queda libre está
disponible en asignaciones dinámicas
de memoria.
Segmento de Pila
La pila crece hacia abajo en memoria.
Datos no inicializados.
Datos inicializados.
Segmento de código #n.
Segmento de código #2.
Segmento de código # 1
Cada segmento dato, código o pila
se limita a 64 K.
Figura 11.1. Mapa de memoria de un programa.
```

En C las funciones `maiioc ( )`, `reaiioc ( )`, `caiioc ( )` y `free (` asignan y liberan memoria de un bloque de memoria denominado el montículo del sistema. Las funciones `rnalloc ( )`, `calloc ( )` y `realloc ( )` asignan memoria utilizando asignación dinámica debido a que puede gestionar la memoria durante la ejecución de un programa; estas funciones requieren, generalmente, moldeado (conversión de tipos)."