---
title: Operador condicional 
description: A reference page in my new Starlight docs site.
---

El operador condicional, `? :`, es un operador ternario que devuelve un resultado cuyo valor depende de la condición comprobada. Tiene asociatividad a derechas (derecha a izquierda).

Al ser un operador ternario, requiere tres operandos. El operador condicional se utiliza para reemplazar a la sentencia `if-else` lógica en algunas situaciones.

El formato del operador condicional es:


```c
expresion-c ? expresion-v : expresion-f;
```

Se evalúa `expresion-c` y su valor (cero = falso, distinto de cero = verdadero) determina cuál es la expresión a ejecutar; si la condición es verdadera se ejecuta `expresion-v` y si es falsa se ejecuta `expresion-f`.

La Figura 4.3 muestra el funcionamiento del operador condicional:


```c
(ventas > 150000) ? comision = 100 : comision = 0;
```

Si ventas es mayor que 150,000 se ejecuta:


```c
comision = 100;
```

Si ventas no es mayor que 150,000 se ejecuta:


```c
comision = 0;
```

Formato de un operador condicional.

Otros ejemplos del uso del operador `? :` son:


```c
n >= 0 ? 1 : -1; // 1 si n es positivo, -1 si es negativo
m >= n ? m : n;  // devuelve el mayor valor de m y n
```

Escribe x, y escribe el carácter fin de línea (`\n`) si `x % 5` (resto 5) es 0, en caso contrario un tabulador (`\t`):


```c
printf("%d %c", x, x % 5 ? '\t' : '\n');
```

La precedencia de `?` y `:` es menor que la de cualquier otro operador tratado hasta ese momento. Su asociatividad es a derechas.

