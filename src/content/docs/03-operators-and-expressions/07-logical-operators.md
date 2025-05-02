---
title: Operadores lógicos
description: A reference page in my new Starlight docs site.
---

Además de los operadores matemáticos, C tiene también operadores lógicos. Estos operadores se utilizan con expresiones para devolver un valor verdadero (cualquier entero distinto de cero) o un valor falso (0). Los operadores lógicos se denominan también operadores booleanos, en honor de George Boole, creador del álgebra de Boole.

Los operadores lógicos de C son: not (!), and (&&) y or (||). El operador lógico ! (not, no) produce falso (cero) si su operando es verdadero (distinto de cero) y viceversa. El operador lógico && (and, y) produce verdadero sólo si ambos operandos son verdaderos (no cero); si cualquiera de los operandos es falso produce falso. El operador lógico || (or, o) produce verdadero si cualquiera de los operandos es verdadero (distinto de cero) y produce falso sólo si ambos operandos son falsos. La Tabla 4.8 muestra los operadores lógicos de C.

**Operadores lógicos**

| Operador | Operación lógica | Ejemplo                 |
|----------|------------------|-------------------------|
| !        | Negación          | !(x >= y)               |
| &&       | Y lógica          | m < n && i > j          |
| ||       | O lógica          | m == 5 || n != 10       |

**Tabla de verdad del operador lógico NOT (!).**

| Operando (a) | NOT a |
|--------------|-------|
| Verdadero (1)| Falso (0) |
| Falso (0)    | Verdadero (1) |

**Tabla de verdad del operador lógico AND.**

| a           | b           | a && b     |
|-------------|-------------|------------|
| Verdadero (1)| Verdadero (1)| Verdadero (1) |
| Verdadero (1)| Falso (0)   | Falso (0)  |
| Falso (0)   | Verdadero (1)| Falso (0)  |
| Falso (0)   | Falso (0)   | Falso (0)  |

**Tabla de verdad del operador lógico OR (||).**

| a           | b           | a || b     |
|-------------|-------------|------------|
| Verdadero (1)| Verdadero (1)| Verdadero (1) |
| Verdadero (1)| Falso (0)   | Verdadero (1) |
| Falso (0)   | Verdadero (1)| Verdadero (1) |
| Falso (0)   | Falso (0)   | Falso (0)  |

Al igual que los operadores matemáticos, el valor de una expresión formada con operadores lógicos depende de: (a) el operador y (b) sus argumentos. Con operadores lógicos existen sólo dos valores posibles para expresiones: verdadero y falso. La forma más usual de mostrar los resultados de operaciones lógicas es mediante las denominadas tablas de verdad, que muestran cómo funcionan cada uno de los operadores lógicos.

**Ejemplo**

```c
!(x + 7 == 5)
(anum > 5) && (Respuesta == 'S')
(bnum > 3) || (Respuesta == 'N')
```

Los operadores lógicos se utilizan en expresiones condicionales y mediante sentencias if, while o for, que se analizarán en capítulos posteriores. Así, por ejemplo, la sentencia if (si la condición es verdadera/falsa...) se utiliza para evaluar operadores lógicos.

1. ```c
   if ((a < b) && (c > d)) {
       puts("Los resultados no son válidos");
   }
   ```
   Si la variable a es menor que b y, al mismo tiempo, c es mayor que d, entonces visualizar el mensaje: "Los resultados no son válidos".

2. ```c
   if ((ventas > 50000) || (horas < 100)) {
       prima = 100000;
   }
   ```
   Si la variable ventas es mayor a 50000 o bien la variable horas es menor que 100, entonces asignar a la variable prima el valor 100000.

3. ```c
   if (!(ventas >= 2500)) {
       prima = 12500;
   }
   ```
   En este ejemplo, si ventas es menor que 2500, se inicializará prima al valor 12500.

El operador ! tiene prioridad más alta que &&, que a su vez tiene mayor prioridad que ||. La asociatividad es de izquierda a derecha.

La precedencia de los operadores es: los operadores matemáticos tienen precedencia sobre los operadores relacionales, y los operadores relacionales tienen precedencia sobre los operadores lógicos. La siguiente sentencia:

```c
if ((ventas < salmin * 3 && ayos > 10 * iva) ...
```

equivale a:

```c
if ((ventas < (salmin * 3)) && (ayos > (10 * iva))) ...
```

## Evaluación en cortocircuito

En C, los operandos de la izquierda de && y || se evalúan siempre en primer lugar; si el valor del operando de la izquierda determina de forma inequívoca el valor de la expresión, el operando derecho no se evalúa. Esto significa que si el operando de la izquierda de && es falso o el de || es verdadero, el operando de la derecha no se evalúa. Esta propiedad se denomina evaluación en cortocircuito y se debe a que si p es falso, la condición p && q es falsa con independencia del valor de q y de este modo C no evalúa q. De modo similar, si p es verdadera, la condición p || q es verdadera con independencia del valor de q y C no evalúa a q.

**Ejemplo**

Supongamos que se evalúa la expresión:

```c
(x > 0.0) && (log(x) >= 0.5)
```

Dado que en una operación lógica Y (&&), si el operando de la izquierda (x > 0.0) es falso (x es negativo o cero), la expresión lógica se evalúa a falso, y en consecuencia, no es necesario evaluar el segundo operando. En el ejemplo anterior, la expresión evita calcular el logaritmo de números (x) negativos o cero.

La evaluación en cortocircuito tiene dos beneficios importantes:

1. Una expresión booleana se puede utilizar para guardar una operación potencialmente insegura en una segunda expresión booleana.
2. Se puede ahorrar una considerable cantidad de tiempo en la evaluación de condiciones complejas.

**Ejemplo**

Los beneficios anteriores se aprecian en la expresión booleana:

```c
(n != 0) && (x < 1.0 / n)
```

ya que no se puede producir un error de división por cero al evaluar esta expresión, pues si n es 0, entonces la primera expresión:

```c
n != 0
```

es falsa y la segunda expresión:

``x < 1.0 / n``

no se evalúa.  

De modo similar, tampoco se producirá un error de división por cero al evaluar la condición  

``(n == 0) || (x >= 5.0 / n)``

ya que si n es 0, la primera expresión  

``n -- 0``

es verdadera y entonces no se evalúa la segunda expresión  

``x >= 5.0 / n``

**Aplicación**  

Dado el test condicional  

``if ((7 > 5) || (ventas < 30) && (30 != 30)) ...``

C examina sólo la primera condición (7 > 5), ya que como es verdadera, la operación lógica `||` será verdadera, sea cual sea el valor de la expresión que le sigue.

Otro ejemplo es el siguiente:  

``if ((8 < 4) && (edad > 18) && (letra_inicial == 'Z')) ...``

En este caso, C examina la primera condición y su valor es falso; por consiguiente, sea cual sea el valor que sigue al operador `&&`, la expresión primitiva será falsa y toda la subexpresión a la derecha de (8 < 4) no se evalúa por C.

Por último, en la sentencia  

``if ((10 > 4) || (num == 0)) ...``

la operación `num == 0` nunca se evaluará.

## Asignaciones booleanas (lógicas)

Las sentencias de asignación booleanas se pueden escribir de modo que dan como resultado un valor de tipo `int` que será cero o uno.

**Ejemplo**  
```c
int edad, MayorDeEdad, juvenil;
scanf("%d", &edad);
MayorDeEdad = (edad > 18); // asigna el valor de edad > 18 a MayorDeEdad.
// Cuando edad es mayor que 18, MayorDeEdad es 1, sino 0
juvenil = (edad > 15) && (edad <= 18); // asigna 1 a juvenil si edad está
// comprendida entre 15 (mayor que 15) y 18 (inclusive 18).
```

**Ejemplo**  
Las sentencias de asignación siguientes asignan valores cero o uno a los dos tipos de variables `int`, `rango` y `es_letra`. La variable `rango` es 1 (`true`) si el valor de `n` está en el rango -100 a 100; la variable `es_letra` es 1 (verdadera) si `car` es una letra mayúscula o minúscula.

a.  
```c
rango = (n > -100) && (n < 100);
```

b.  
```c
es_letra = (('A' <= car) && (car <= 'Z')) || (('a' <= car) && (car <= 'z'));
```

La expresión de a es 1 (`true`) si `n` cumple las condiciones expresadas (n mayor de -100 y menor de 100); en caso contrario es 0 (`false`). La expresión b utiliza los operadores `&&` y `||`. La primera subexpresión (antes de `||`) es 1 (`true`) si `car` es una letra mayúscula; la segunda subexpresión (después de `||`) es 1 (`true`) si `car` es una letra minúscula. En resumen, `es_letra` es 1 (`true`) si `car` es una letra, y 0 (`false`) en caso contrario.
