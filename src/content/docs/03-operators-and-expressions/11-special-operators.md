---
title: Operadores especiales
description: A reference page in my new Starlight docs site.
---

C admite algunos operadores especiales que sirven para propósitos diferentes.  
Entre ellos se destacan:  
`(`, `[`, `]`.

## El operador `()`

El operador `()` es el **operador de llamada a funciones**.  
Sirve para:

- Encerrar los argumentos de una función.  
- Efectuar conversiones explícitas de tipo.  
- Indicar en el seno de una declaración que un identificador corresponde a una función.  
- Resolver los conflictos de prioridad entre operadores.


## El operador `[]`

Sirve para dimensionar los arrays y designar un elemento de un array.

**Ejemplos de ello:**

```c
double v[20];            /* define un array de 20 elementos */
printf("v[2] = %e", v[2]); /* escribe el elemento 2 de v */
return v[i - INFERIOR];    /* devuelve el elemento i - INFERIOR */
```
