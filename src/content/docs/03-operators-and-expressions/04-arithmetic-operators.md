---
title: Operadores aritméticos
description: A reference page in my new Starlight docs site.
---

**Los operadores aritméticos sirven para realizar operaciones aritméticas básicas.**  
Los operadores aritméticos en C siguen las reglas algebraicas típicas de jerarquía o prioridad. Estas reglas especifican la **precedencia** de las operaciones aritméticas.

Considere la expresión:

```c
3 + 5 * 2
```

¿Cuál es el valor correcto, 16 (8 * 2) o 13 (3 + 10)?  
De acuerdo a las citadas reglas, **la multiplicación se realiza antes que la suma**.  
Por consiguiente, la expresión anterior equivale a:

```c
3 + (5 * 2)
```

En C, las expresiones interiores a paréntesis se evalúan primero; a continuación, se realizan los operadores unitarios, seguidos por los operadores de multiplicación, división, resto, suma y resta.


**Operadores aritméticos**

| Operador | Tipos enteros            | Tipos reales              | Ejemplo    |
|----------|---------------------------|----------------------------|------------|
| `+`      | Suma                      | Suma                       | `X + Y`    |
| `-`      | Resta                     | Resta                      | `b - c`    |
| `*`      | Producto                  | Producto                   | `X * Y`    |
| `/`      | División entera: cociente | División en coma flotante | `b / 5`    |
| `%`      | División entera: resto    |                            | `b % 5`    |

**Precedencia de operadores matemáticos básicos**

| Operador   | Operación          | Nivel de precedencia |
|------------|--------------------|-----------------------|
| `+`, `-`   | `+25`, `-6745`     | 1                     |
| `*`, `/`, `%` | `5 * 5` es 25     | 2                     |
|            | `25 / 5` es 5       |                       |
|            | `25 % 6` es 1       |                       |
| `+`, `-`   | `2 + 3` es 5        | 3                     |
|            | `2 - 3` es -1       |                       |

Obsérvese que los operadores `+` y `-`, cuando se utilizan delante de un operando, actúan como **operadores unitarios más y menos**:

```c
+75    // significa que es positivo
-154   // significa que es negativo
```

**Ejemplo**

1. ¿Cuál es el resultado de la expresión:  
   `6 + 2 * 3 - 4 / 2`?

```
6 + 2 * 3 - 4 / 2
6 + 6 - 4 / 2
6 + 6 - 2
12 - 2
10
```

2. ¿Cuál es el resultado de la expresión:  
   `5 * (5 + (6 - 2) + 1)`?

```
5 * (5 + (6 - 2) + 1)
5 * (5 + 4 + 1)
5 * 10
50
```

3. ¿Cuál es el resultado de la expresión:  
   `7 - 6 / 3 + 2 * 3 / 2 - 4 / 2`?

```
7 - 6 / 3 + 2 * 3 / 2 - 4 / 2
7 - 2 + 6 / 2 - 4 / 2
7 - 2 + 3 - 2
5 + 3 - 2
8 - 2
6
```

## Asociatividad

En una expresión tal como:

```c
3 * 4 + 5
```

El compilador realiza primero la multiplicación (por tener `*` mayor prioridad) y luego la suma. Por tanto, produce: `17`. Para forzar un orden diferente en las operaciones, se deben utilizar paréntesis:

```c
3 * (4 + 5)
```

produce `27`, ya que `4 + 5` se realiza primero.

La **asociatividad** determina el orden en que se agrupan los operadores de igual prioridad; es decir, de izquierda a derecha o de derecha a izquierda.  
Por ejemplo:

```c
x - y + z
```

se agrupa como:

```c
(x - y) + z
```

ya que `-` y `+`, con igual prioridad, tienen **asociatividad de izquierda a derecha**.

Sin embargo:

```c
x = y = z
```

se agrupa como:

```c
x = (y = z)
```

dado que su asociatividad es **de derecha a izquierda**.

**Prioridad y asociatividad**

| Prioridad (mayor a menor) | Asociatividad             |
|---------------------------|---------------------------|
| `+`, `-` (unarios)        | izquierda → derecha ( + ) |
| `*`, `/`, `%`             | izquierda → derecha ( + ) |
| `+`, `-`                  | izquierda → derecha ( + ) |

---

**Ejemplo**  
¿Cuál es el resultado de la expresión: `7 * 10 - 5 % 3 * 4 + 9`?

1. Existen tres operadores de mayor prioridad: `*`, `%`, `*`

```
70 - 5 % 3 * 4 + 9
```

2. Se ejecuta `5 % 3`:

```
70 - 2 * 4 + 9
```

3. Se realiza la segunda multiplicación:

```
70 - 8 + 9
```

4. Las dos operaciones restantes (`-`, `+`) tienen igual prioridad y asociatividad izquierda:

```
62 + 9
71
```

## Uso de paréntesis

Los **paréntesis** se pueden utilizar para cambiar el orden usual de evaluación de una expresión determinada por su prioridad y asociatividad.  

Las subexpresiones entre paréntesis se evalúan **en primer lugar**. Si hay paréntesis **anidados**, se ejecutan primero los **más internos**.

Por ejemplo:

```c
(7 * (10 - 5) % 3) * 4 + 9
```

1. Se evalúa `10 - 5`:

```
(7 * 5 % 3) * 4 + 9
```

2. Se evalúa `7 * 5 % 3`:

```
(35 % 3) * 4 + 9
```

3. Se evalúa `35 % 3`:

```
2 * 4 + 9
```

4. Se realiza la multiplicación:

```
8 + 9
```

5. Se realiza la suma final:

```
17
```

---

**Precaución**  
Se debe tener **cuidado** al escribir expresiones con varias operaciones para asegurarse de que se evalúan en el **orden previsto**.  

Incluso aunque no se requieran paréntesis, deben **utilizarse para clarificar el orden** concebido de evaluación y escribir expresiones complicadas en términos de expresiones más simples.

Es importante, sin embargo, que los paréntesis estén **equilibrados** —cada paréntesis a la izquierda debe tener su correspondiente paréntesis a la derecha—, ya que si hay paréntesis **desequilibrados**, se producirá un error de compilación.

> `( ( 8 - 5 ) + 4 - ( 3 + 7 ` *error de compilación: falta paréntesis final a la derecha*
