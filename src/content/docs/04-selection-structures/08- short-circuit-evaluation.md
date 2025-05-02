---
title: Evaluación en corto circuito
description: A reference page in my new Starlight docs site.
---

Cuando se evalúan expresiones lógicas en C, se puede emplear una técnica denominada **evaluación en cortocircuito**. Este tipo de evaluación optimiza el proceso al detener la evaluación de una expresión lógica tan pronto como su valor final pueda determinarse con certeza.

## Principio de la Evaluación en Cortocircuito

La evaluación en cortocircuito se basa en las propiedades de los operadores lógicos AND (`&&`) y OR (`||`):

* **Operador AND (`&&`)**: Una expresión `falso && (cualquier cosa)` siempre es `falso`. Por lo tanto, si el primer operando de un `&&` es falso, no es necesario evaluar el segundo operando para determinar que la expresión completa es falsa.

* **Operador OR (`||`)**: Una expresión `verdadero || (cualquier cosa)` siempre es `verdadero`. Por lo tanto, si el primer operando de un `||` es verdadero, no es necesario evaluar el segundo operando para determinar que la expresión completa es verdadera.

## Implementación en C

El compilador de C utiliza la evaluación en cortocircuito para los operadores `&&` y `||`. Esto significa que evalúa las expresiones de izquierda a derecha. Si la evaluación del primer operando proporciona suficiente información para determinar el valor final de la expresión, el compilador omite la evaluación del segundo operando.

En resumen:

* Para la expresión `C1 && C2`, si `C1` se evalúa como falsa, `C2` no se evalúa.
* Para la expresión `C1 || C2`, si `C1` se evalúa como verdadera, `C2` no se evalúa.

**Ejemplo 5.17**

```c
(x >= 0) && (y > 1)
```

Si `x` es negativo, la subexpresión `(x >= 0)` se evalúa como falsa. Debido a la evaluación en cortocircuito del operador `&&`, la subexpresión `(y > 1)` no se evalúa, y el valor final de la expresión completa es `falso`.

## Comportamiento Similar con el Operador OR (`||`)

De manera análoga, si la primera de dos expresiones unidas por el operador `||` es verdadera, la expresión completa es verdadera, independientemente del valor de la segunda expresión. Por lo tanto, la segunda expresión no se evalúa.

## Contraste con la Evaluación Completa

Otros lenguajes de programación pueden utilizar la **evaluación completa**. En este tipo de evaluación, ambos operandos de los operadores `&&` o `||` siempre se evalúan, y luego se aplican las tablas de verdad para obtener el resultado final.

**Importancia del Orden en la Evaluación en Cortocircuito**

```c
if ((x != 0.0) && (y / x > 7.5)) {
    // ...
}
```

Si `x` es cero, la primera condición `(x != 0.0)` es falsa. Gracias a la evaluación en cortocircuito, la segunda condición `(y / x > 7.5)` no se evalúa, lo que evita un error de división por cero en tiempo de ejecución.

Sin embargo, si el orden de las expresiones se invierte:

```c
if ((y / x > 7.5) && (x != 0.0)) {
    // ...
}
```

Si `x` es cero, la primera condición `(y / x > 7.5)` intentará realizar una división por cero, lo que provocará un error en tiempo de ejecución antes de que se pueda evaluar la segunda condición `(x != 0.0)`.

## Conclusión

El orden de las expresiones con los operadores `&&` y `||` puede ser crítico en ciertas situaciones, especialmente cuando la evaluación de una de las expresiones podría tener efectos secundarios (como la modificación de una variable o la generación de un error). La evaluación en cortocircuito en C puede mejorar la eficiencia y prevenir errores en tiempo de ejecución, pero requiere una comprensión cuidadosa del orden de evaluación.