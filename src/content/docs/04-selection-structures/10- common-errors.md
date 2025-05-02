---
title: Errores frecuentes
description: A reference page in my new Starlight docs site.
---

Al trabajar con sentencias de selección en C, es importante evitar ciertos errores comunes que pueden llevar a un comportamiento inesperado del programa. A continuación, se enumeran algunos de estos errores:

1.  **Uso incorrecto del operador de asignación en `if`:** Uno de los errores más frecuentes en una sentencia `if` es utilizar el operador de asignación simple (`=`) en lugar del operador de igualdad (`==`) en la condición. Por ejemplo:

    ```c
    if (a = 5) { // ¡Error! Asigna 5 a 'a' y la condición siempre es verdadera (si a es distinto de 0 después de la asignación)
        // ...
    }
    ```

    La intención probablemente era comparar si `a` es igual a 5:

    ```c
    if (a == 5) {
        // ...
    }
    ```

2.  **Asociación incorrecta de la cláusula `else` en `if` anidados:** En una sentencia `if` anidada, cada cláusula `else` se asocia con la sentencia `if` precedente más cercana que no tenga aún una cláusula `else`. Consideremos el siguiente fragmento de código:

    ```c
    if (a > 0)
        if (b > 0)
            c = a + b;
        else
            c = a + abs(b);
    d = a * b * c;
    ```

    En este caso, la cláusula `else` está asociada con la segunda sentencia `if` (`if (b > 0)`). La forma más clara de visualizar esta asociación es mediante la indentación:

    ```c
    if (a > 0) {
        if (b > 0) {
            c = a + b;
        } else {
            c = a + abs(b);
        }
    }
    d = a * b * c;
    ```

3.  **Comparaciones inexactas con `==` para números reales:** Las comparaciones de igualdad (`==`) entre cantidades algebraicamente iguales que involucran números reales pueden resultar en una expresión lógica falsa. Esto se debe a que la mayoría de los números reales no se almacenan en la memoria de la computadora con precisión exacta. Por ejemplo, aunque algebraicamente las siguientes expresiones son equivalentes:

    ```
    a * (1 / a)
    1.0
    ```

    La expresión en C:

    ```c
    a * (1 / a) == 1.0
    ```

    podría evaluarse como falsa debido a las limitaciones en la representación de números reales.

4.  **Falta de llaves en bloques de sentencias `switch` o `if-else`:** La omisión de una de las llaves de apertura (`{`) o cierre (`}`) en una sentencia `switch` o en un bloque de sentencias `if-else` puede generar errores de compilación. Un mensaje de error común en estos casos es:

    ```
    Error ... : Compound statement missing } in function
    ```

    Una presentación clara y consistente del código (con una correcta indentación) facilita la identificación de la llave faltante.

5.  **Tipo incorrecto del selector en `switch`:** El selector (la expresión entre paréntesis después de la palabra clave `switch`) debe ser de tipo entero o compatible con entero (`int` o `char`). Las constantes de tipo real (como `2.4`, `-4.5`, `3.1416`) no pueden utilizarse como selector en una sentencia `switch`.

6.  **Incompatibilidad de tipos entre el selector y las etiquetas `case` en `switch`:** Al utilizar una sentencia `switch`, es fundamental asegurarse de que el tipo de la expresión `selector` coincida con el tipo de las etiquetas `case` (`int` o `char`, pero no `float`). Si el selector se evalúa a un valor que no coincide con ninguna de las etiquetas `case`, la sentencia `switch` no ejecutará ninguna acción, a menos que se haya incluido una etiqueta `default` para manejar este caso. La inclusión de una etiqueta `default` es una práctica recomendada para asegurar que se gestione cualquier valor inesperado del selector.