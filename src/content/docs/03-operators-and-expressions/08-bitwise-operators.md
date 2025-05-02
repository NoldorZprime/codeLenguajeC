---
title: Operadores de bits
description: A reference page in my new Starlight docs site.
---

Una de las razones por las que C se ha hecho tan popular en computadoras personales es que el lenguaje ofrece muchos operadores de manipulación de bits a bajo nivel.  

Los operadores de manipulación o tratamiento de bits (binuise) ejecutan operaciones lógicas sobre cada uno de los bits de los operandos. Estas operaciones son comparables en eficiencia y en velocidad a sus equivalentes en lenguaje ensamblador.  

Cada operador de manipulación de bits realiza una operación lógica bit a bit sobre datos internos.  

Los operadores de manipulación de bits se aplican sólo a variables y constantes `char`, `int` y `long`, y no a datos en coma flotante. Dado que los números binarios constan de 1's y 0's (denominados bits), estos 1 y 0 se manipulan para producir el resultado deseado para cada uno de los operadores.  

Las siguientes tablas de verdad describen las acciones que realizan los diversos operadores sobre los diversos patrones de bit de un dato `int` (`char` o `long`).  

**Operadores lógicos bit a bit.**

| Operador | Operación |
|----------|-----------|
| `&`      | Y (AND) lógica bit a bit |
| `|`      | O (OR) lógica (inclusiva) bit a bit |
| `^`      | XOR lógica (exclusiva) bit a bit (OR exclusive, XOR) |
| `~`      | Complemento a uno (inversión de todos los bits) |
| `<<`     | Desplazamiento de bits a izquierda |
| `>>`     | Desplazamiento de bits a derecha |

**Ejemplo**  

1. Si se aplica el operador `&` de manipulación de bits a los números 9 y 14, se obtiene un resultado de 8. La Figura 4.1 muestra cómo se realiza la operación.  
2. `( 61 ) Ox3A6B`  
   `Ox00F0`  
   = `0011 1010 0110 1011`  
   = `0000 0000 1111 0000`  
   `Ox3A6B & Ox00F0 = 0000 0000 0110 0000 = 0x0060`  
3. `( | ) 152 Ox0098 = 0000 0000 1001 1000`  
   `50 Ox0005 = 0000 0000 0000 0101`  
   `152 | 5 = 0000 0000 1001 1101 = Ox009D`  
4. `(^) 83 0x53 = 0101 0011`  
   `204 0xCC = 1100 1100`  
   `83 ^ 204 = 1001 1111 = 0x9F`  

9 decimal equivale a 1001 binario  
14 decimal equivale a 1110 binario  
1001 & 1110 = 1000 binario  
→ 8 decimal  
`& & & &`  

**Operador `&` de manipulación de bits.**

## Operadores de asignación adicionales
Al igual que los operadores aritméticos, los operadores de asignación abreviados están disponibles también para operadores de manipulación de bits. Estos operadores se muestran en la **Tabla**.

**Operadores de asignación adicionales.**

| Símbolo | Uso         | Descripción                                                  |
|---------|-------------|--------------------------------------------------------------|
| `<<=`   | `a <<= b`   | Desplaza `a` a la izquierda `b` bits y asigna el resultado a `a`. |
| `>>=`   | `a >>= b`   | Desplaza `a` a la derecha `b` bits y asigna el resultado a `a`. |
| `&=`    | `a &= b`    | Asigna a del valor `a & b`.                                   |
| `^=`    | `a ^= b`    | Establece `a` a `a ^ b`.                                      |
| `|=`    | `a |= b`    | Establece `a` a `a | b`.                                      |

## Operadores de desplazamiento de bits (`>>`, `<<`)

Equivalen a la instrucción SHR (`>>`) y SHL (`<<`) de los microprocesadores 80x86. Efectúan un desplazamiento a la derecha (`>>`) o a la izquierda (`<<`) de `n` posiciones de los bits del operando, siendo `n` un número entero. El número de bits desplazados depende del valor a la derecha del operador. Los formatos de los operadores de desplazamiento son:

```c
1. valor << numero-de-bits;
2. valor >> numero-de-bits;
```

El valor puede ser una variable entera o carácter, o una constante. El `numero-de-bits` determina cuántos bits se desplazarán. La **Figura 4.2** muestra lo que sucede cuando el número 29 (binario `0001 1101`) se desplaza a la izquierda tres bits con un desplazamiento a la izquierda bit a bit (`<<`).

```
0001 1101 (29 decimal)
1110 1000
Después de tres desplazamientos
```

**DESPUÉS DE TRES DESPLAZAMIENTOS**

** Desplazamiento a la izquierda tres posiciones de los bits del número binario equivalente a 29.**

Supongamos que la variable `num1` contiene el valor 25. Si se desplaza tres posiciones (`num1 << 3`), se obtiene el nuevo número 200 (`1100 1000` en binario).

```c
int num1 = 25;/* 00011001 binario */
int despl, desp2;

despl = num1 << 3; /* 11001000 binario */
```

En los siguientes ejemplos se desplazan los bits de una variable a la derecha y a la izquierda. El resultado es una división y una multiplicación respectivamente.

```c
int x, y, d;
x = y = 24;
d = x >> 2; /* 0018 >> 2 = 0000 0110 = 6 (división por 4) */
d = y << 2; /* 0018 << 2 = 0110 0000 = 0x60 (96) (multiplicación por 4) */
```

## Operadores de direcciones
Son operadores que permiten manipular las direcciones de las variables y registros en general:

```c
*expresión
&valorpi (lvalue)
registro.miembro
puntero-hacia-registro -> miembro
```

**Operadores de direcciones**

| Operador | Acción |
|----------|--------|
| `*`      | Lee o modifica el valor apuntado por la expresión. Se corresponde con un puntero y el resultado es del tipo apuntado. |
| `&`      | Devuelve un puntero al objeto utilizado como operando, que debe ser un lvalue (variable dotada de una dirección de memoria). El resultado es un puntero de tipo idéntico al del operando. |
| `.`      | Permite acceder a un miembro de un dato agregado (unión, estructura). |
| `->`     | Accede a un miembro de un dato agregado (unión, estructura) apuntado por el operando de la izquierda. |
