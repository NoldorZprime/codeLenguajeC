---
title: Concepto de función
description: A reference page in my new Starlight docs site.
---

C fue diseñado como un lenguaje de programación estructurado, también llamado programación modular. Por esta razón, para escribir un programa se divide éste en varios módulos, en lugar de uno solo largo. El programa se divide en muchos módulos (rutinas pequeñas denominadas funciones), que producen muchos beneficios: aislar mejor los problemas, escribir programas correctos más rápido y producir programas que son mucho más fáciles de mantener.

Así pues, un programa C se compone de varias funciones, cada una de las cuales realiza una tarea principal. Por ejemplo, si está escribiendo un programa que obtenga una lista de caracteres del teclado, los ordene alfabéticamente y los visualice a continuación en la pantalla, se pueden escribir todas estas tareas en un único gran programa (función `main()`).

```c
int main()
{
    /* Código C para obtener una lista de caracteres */
    /* Código C para alfabetizar los caracteres */
    /* Código C para visualizar la lista por orden alfabético */
    return 0;
}
```

Sin embargo, este método no es correcto. El mejor medio para escribir un programa es escribir funciones independientes para cada tarea que haga el programa. El mejor medio para escribir el citado programa sería el siguiente:

```c
int main()
{
    obtenercaracteres(); /* Llamada a una función que obtiene los números */
    alfabetizar();       /* Llamada a la función que ordena alfabéticamente las letras */
    verletras();         /* Llamada a la función que visualiza letras en la pantalla */
    return 0;            /* Retorno al sistema */
}
```

```c
int obtenercaracteres()
{
    /* Código de C para obtener una lista de caracteres */
    return 0; /* Retorno a main() */
}
```

```c
int alfabetizar()
{
    /* Código de C para alfabetizar los caracteres */
    return 0; /* Retorno a main() */
}
```

```c
void verletras()
{
    /* Código de C para visualizar lista alfabetizada */
    return; /* Retorno a main() */
}
```

Cada función realiza una determinada tarea y cuando se ejecuta `return` se retorna al punto en que fue llamada por el programa o función principal.

**Consejo**

Una buena regla para determinar la longitud de una función (número de líneas que contiene) es que no ocupe más longitud que el equivalente a una pantalla.
