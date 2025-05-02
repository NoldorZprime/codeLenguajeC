---
title: Punteros a punteros
description: A reference page in my new Starlight docs site.
---

Un puntero puede apuntar a otra variable puntero. Este concepto se utiliza con mucha frecuencia en programas complejos de C. Para declarar un puntero a un puntero se hace preceder a la variable con dos asteriscos ( `* *` ) .

En el ejemplo siguiente `ptr5` es un puntero a un puntero.
```c
int valor-e = 100;
i n t *ptrl = &valor-e;
int **ptr5 = &ptrl;
```
`ptri` y `ptr5` son punteros. `ptrl` apunta a la variable `valor-e` de tipo `i n t`. `ptr5` contiene la dirección de `p t r 1`.En la Figura 10.4 se muestran las declaraciones anteriores.
Se puede asignar valores a `valor-e` con cualquiera de las sentencias siguientes:
```c
valor-e = 95;
*pt.rl= 105;      / * Asigna 105 d valor-c * /
**ptr5 = 99;     / * Asignd 99 a valor-e * /
```
```
ptrl 8080
     8081
ptr5 8082
     8083
     8000
valor-e
     8080
Figura 10.4. Un puntero a un puntero.
```

**Ejemplo**
```c
char c = 'z';
char* pc = &c;
char** ppc = &pc;
char*** pppc = &ppc;
* * * pppc = 'm'; / * cambia el valor de c a 'm' * /
```