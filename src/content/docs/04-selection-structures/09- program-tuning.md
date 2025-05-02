---
title: Puesta a punto de programas
description: A reference page in my new Starlight docs site.
---

**Estilo y Diseño de Sentencias `if`**

La claridad y legibilidad del código son cruciales. A continuación, se presentan algunas convenciones de estilo para escribir sentencias `if` e `if-else` en C.

**Sangría para `if` y `if-else`**

Se recomienda utilizar la sangría para estructurar visualmente las sentencias `if` e `if-else` de la siguiente manera:

```c
if (expresión_lógica)
    sentencia;

if (expresión_lógica) {
    sentencia_1;
    sentencia_2;
} else {
    sentencia_a;
    sentencia_b;
}
```

## Sangría para `if-else if-else` (Selección Múltiple)

Cuando se utilizan sentencias `if-else-if` para implementar una estructura de selección multi-alternativa, es común escribir el código de la siguiente forma para mejorar la legibilidad:

```c
if (expresión_lógica_1) {
    sentencia_1;
} else if (expresión_lógica_2) {
    sentencia_2;
} else if (expresión_lógica_3) {
    sentencia_3;
} else {
    sentencia_n;
}
```

## Eficiencia de `if-else if` vs. Secuencia de `if`

Una construcción de selección múltiple puede implementarse de manera más eficiente con una estructura `if-else-if` que con una secuencia de sentencias `if` independientes. Consideremos el siguiente ejemplo para evaluar una nota:

**Secuencia de sentencias `if` independientes:**

```c
printf("Introduzca nota: ");
scanf("%d", &nota);

if (nota < 0 || nota > 100) {
    printf("%d no es una nota válida.\n", nota);
    return '?';
}

if ((nota >= 90) && (nota <= 100))
    return 'A';

if ((nota >= 80) && (nota < 90))
    return 'B';

if ((nota >= 70) && (nota < 80))
    return 'C';

if ((nota >= 60) && (nota < 70))
    return 'D';

if (nota < 60)
    return 'F';
```

En este caso, **todas** las sentencias `if` se evalúan independientemente del valor de `nota`. Además, cinco de las expresiones lógicas son compuestas, lo que resulta en un total de 16 operaciones lógicas en el peor caso.

**Estructura `if-else if-else` anidada:**

```c
printf("Introduzca nota: ");
scanf("%d", &nota);

if (nota < 0 || nota > 100) {
    printf("%d no es una nota válida.\n", nota);
    return '?';
} else if (nota >= 90) {
    return 'A';
} else if (nota >= 80) {
    return 'B';
} else if (nota >= 70) {
    return 'C';
} else if (nota >= 60) {
    return 'D';
} else {
    return 'F';
}
```

En contraste, la estructura `if-else if-else` reduce considerablemente el número de operaciones a realizar (entre 3 y 7 en el peor caso). Todas las expresiones lógicas son simples, y no todas se evalúan siempre. La evaluación se detiene tan pronto como se encuentra una condición verdadera.

Por lo tanto, para implementar selecciones múltiples donde las condiciones son mutuamente exclusivas, la estructura `if-else if-else` no solo mejora la legibilidad sino también la eficiencia del código.