---
title: Operador coma
description: A reference page in my new Starlight docs site.
---


El operador coma permite combinar dos o más expresiones separadas por comas en una sola línea.  

Se evalúa primero la expresión de la izquierda y luego las restantes expresiones de izquierda a derecha.  
La expresión más a la derecha determina el resultado global.  

El uso del operador coma es como sigue:  
```c
expresión , expresión , expresión , . . . , expresión
```

Cada expresión se evalúa comenzando desde la izquierda y continuando hacia la derecha.  
Por ejemplo, en:  
```c
int i = 10, j = 25;
```

Dado que el operador coma se asocia de izquierda a derecha, la primera variable está declarada e inicializada antes que la segunda variable `j`.

Otros ejemplos son:
```c
i++, j++;       // equivale a
i++; 
j++;

i++, j++, k++;  // equivale a
i++; 
j++; 
k++;
```

El operador coma tiene la menor prioridad de todos los operadores C, y se asocia de izquierda a derecha.  
El resultado de la expresión global se determina por el valor de la última expresión.  

Por ejemplo:
```c
int i, j, resultado;
resultado = j = 10, i = j, ++i;
```

El valor de esta expresión y valor asignado a `resultado` es `11`.  
En primer lugar, a `j` se asigna el valor `10`, a continuación a `i` se asigna el valor de `j`.  
Por último, `i` se incrementa a `11`.  

La técnica del operador coma permite operaciones interesantes:
```c
i = 10;
j = (i = 12, i + 8);
```

Cuando se ejecute la sección de código anterior, `j` vale `20`, ya que `i` vale `10` en la primera sentencia.  
En la segunda toma `i` el valor `12` y al sumar `i + 8` resulta `20`.
