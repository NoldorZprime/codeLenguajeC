---
title: Comparación de bucles
description: A reference page in my new Starlight docs site.
---

C proporciona tres sentencias para el control de bucles: `while`, `for` y `do-while`. El bucle `while` se  
repite mientras su condición de repetición del bucle es verdadero; el bucle `for` se utiliza normalmente  
cuando el conteo esté implicado, o bien el número de iteraciones requeridas se pueda determinar al  
principio de la ejecución del bucle, o simplemente cuando exista una necesidad de seguir el número de  
veces que un suceso particular tiene lugar. El bucle `do-while` se ejecuta de un modo similar a `while`  
excepto que las sentencias del cuerpo del bucle se ejecutan siempre al menos una vez.

La Tabla 6.1 describe cuándo se usa cada uno de los tres bucles. En C, el bucle `for` es el más  
frecuentemente utilizado de los tres. Es relativamente fácil reescribir un bucle `do-while` como un bucle  
`while`, insertando una asignación inicial de la variable condicional. Sin embargo, no todos los bucles  
`while` se pueden expresar de modo adecuado como bucles `do-while`, ya que un bucle `do-while` se  
ejecutará siempre al menos una vez y el bucle `while` puede no ejecutarse. Por esta razón un bucle  
`while` suele preferirse a un bucle `do-while`, a menos que esté claro que se debe ejecutar una iteración  
como mínimo.

**Formatos de los bucles.**

```
while      El uso más frecuente es cuando la repetición no está controlada por contador; el test de  
           condición precede a cada repetición del bucle; el cuerpo del bucle puede no ser ejecutado. Se  
           debe utilizar cuando se desea saltar el bucle si la condición es falsa.

for        Bucle de conteo, cuando el número de repeticiones se conoce por anticipado y puede ser  
           controlado por un contador; también es adecuado para bucles que implican control no contable  
           del bucle con simples etapas de inicialización y de actualización; el test de la condición precede  
           a la ejecución del cuerpo del bucle.

do-while   Es adecuada para asegurar que al menos se ejecuta el bucle una vez.
```

**Comparación de tres bucles**

```c
cuenta = valor-inicial;
while (cuenta < valor-parada) {
    ...
    cuenta++;
} /* fin de while */

for (cuenta = valor-inicial; cuenta < valor-parada; cuenta++) {
    ...
} /* fin de for */

cuenta = valor-inicial;
if (valor-inicial < valor-parada) {
    do {
        ...
        cuenta++;
    } while (cuenta < valor-parada);
}
```
