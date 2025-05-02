---
title: Conversiones de tipos
description: A reference page in my new Starlight docs site.
---

Con frecuencia, se necesita convertir un valor de un tipo a otro sin cambiar el valor que representa.  
Las conversiones de tipos pueden ser **implícitas** (ejecutadas automáticamente) o **explícitas** (solicitadas específicamente por el programador).  

C hace muchas conversiones de tipos automáticamente:

- C convierte valores cuando se asigna un valor de un tipo a una variable de otro tipo.  
- C convierte valores cuando se combinan tipos mixtos en expresiones.  
- C convierte valores cuando se pasan argumentos a funciones.

## Conversión implícita

Los tipos fundamentales (básicos) pueden ser mezclados libremente en asignaciones y expresiones.  
Las conversiones se ejecutan automáticamente: los operandos de tipo más bajo se convierten en los de tipo más alto.

```c
int i = 12;
double x = 4;

x = x + i; // valor de i se convierte en double antes de la suma
x = i / 5; // primero hace una división entera i/5 == 2, 2 se convierte a tipo double: 2.0 y se asigna a x
x = 4.0;
x = x / 5; // convierte 5 a tipo double, hace una división real: 0.8 y se asigna a x
```

## Reglas

Si cualquier operando es de tipo `char`, `short` o `enumerado`, se convierte en tipo `int`.  
Y si los operandos tienen diferentes tipos, la siguiente lista determina a qué tipo se convertirá.  
Esta operación se llama **promoción integral**:

```
int  
unsigned int  
long  
unsigned long  
float  
double  
```

El tipo que viene primero en esta lista se convierte en el que viene segundo.  
Por ejemplo, si los operandos son `int` y `long`, el operando `int` se convierte en `long`.

```c
char c = 65;     // 65 se convierte en tipo char permitido
char c = 10000;  // permitido, pero resultados impredecibles
```

## Conversión explícita

C fuerza la conversión explícita de tipos mediante el **operador de molde (cast)**.  
El operador molde tiene el formato:

```c
(tipoNombre) valor  // convierte valor a tipoNombre
```

Ejemplos:

```c
(float)i;             // convierte i a float
(int)3.4;             // convierte 3.4 a entero, 3
(int*) malloc(2*16);  // convierte el valor devuelto por malloc: void* a int*. Es una conversión de punteros
```

El operador molde (tipo, cast) tiene la misma prioridad que otros operadores unitarios tales como `+`, `-` y `!`.

```c
precios = (int)19.99 + (int)11.99;
```
