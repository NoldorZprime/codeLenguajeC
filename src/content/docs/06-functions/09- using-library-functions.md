---
title: Uso de funciones de biblioteca
description: A reference page in my new Starlight docs site.
---

**"Todas las versiones del lenguaje C ofrecen con una biblioteca estándar de funciones en tiempo de ejecución que proporcionan soporte para operaciones utilizadas con más frecuencia.** Estas funciones permiten realizar una operación con sólo una llamada a la función (sin necesidad de escribir su código fuente).

Las funciones estándar o predefinidas, como así se denominan las funciones pertenecientes a la biblioteca estándar, se dividen en grupos; todas las funciones que pertenecen al mismo grupo se declaran en el mismo archivo de cabecera.

Los nombres de los archivos de cabecera estándar utilizados en nuestro programa se muestran a continuación encerrados entre corchetes tipo ángulo:

```
<assert.h>    <ctype.h>     <limits.h>   <stdarg.h>   <stddef.h>
<time.h>      <math.h>      <errno.h>    <setjmp.h>   <stdio.h>
<float.h>     <signal.h>    <string.h>
```

En los módulos de programa se pueden incluir líneas `#include` con los archivos de cabecera correspondientes en cualquier orden, y estas líneas pueden aparecer más de una vez.

Para utilizar una función o un macro, se debe conocer su número de argumentos, sus tipos y el tipo de sus valores de retorno. Esta información se proporcionará en los prototipos de la función. La sentencia `#include` mezcla el archivo de cabecera en su programa.

Algunos de los grupos de funciones de biblioteca más usuales son:

- E/S estándar (para operaciones de Entrada/Salida);
- Matemáticas (para operaciones matemáticas);
- Rutinas estándar (para operaciones estándar de programas);
- Visualizar ventana de texto;
- De conversión (rutinas de conversión de caracteres y cadenas);
- De diagnóstico (proporcionan rutinas de depuración incorporada);
- De manipulación de memoria;
- Control del proceso;
- Clasificación (ordenación);
- Directorios;
- Fecha y hora;
- De interfaz;
- Diversas;
- Búsqueda;
- Manipulación de cadenas;
- Gráficos.

Se pueden incluir tantos archivos de cabecera como sean necesarios en sus archivos de programa, incluyendo sus propios archivos de cabecera que definen sus propias funciones.
