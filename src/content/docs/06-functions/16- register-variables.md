---
title: Variables registro
description: A reference page in my new Starlight docs site.
---

Una variable registro (`register`) es similar a una variable local, pero en lugar de ser almacenada en la pila, se almacena directamente en un registro del procesador (tal como `ax` o `bx`). Dado que el número de registros es limitado y además están limitados en tamaño, el número de variables registro que un programa puede crear simultáneamente es muy restringido.

Para declarar una variable registro, se hace preceder a la misma con la palabra reservada `register`:

```c
register int k;
```

La ventaja de las variables registro es su mayor rapidez de manipulación. Esto se debe a que las operaciones sobre valores situados en los registros son normalmente más rápidas que cuando se realizan sobre valores almacenados en memoria. Su uso se suele restringir a segmentos de código muchas veces ejecutados. Las variables registro pueden ayudar a optimizar el rendimiento de un programa proporcionando acceso directo de la CPU a los valores claves del programa.

Una variable registro debe ser local a una función; nunca puede ser global al programa completo. El uso de la palabra reservada `register` no garantiza que un valor sea almacenado en un registro. Esto sólo sucederá si un registro está disponible (libre). Si no existen registros disponibles, C crea la variable como si fuera una variable local normal.

Una aplicación usual de las variables registro es como variable de control de bucles `for` o en la expresión condicional de una sentencia `while`, que se deben ejecutar a alta velocidad.

```c
void usoregistro(void) {
    register int k;
    puts("\nContar con una variable registro.");
    for (k = 1; k <= 100; k++)
        printf("%8d", k);
}
```
