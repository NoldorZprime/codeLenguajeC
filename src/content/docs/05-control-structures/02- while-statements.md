---
title: Bucle While
description: A reference page in my new Starlight docs site.
---

Un **bucle** (o ciclo) es una construcción de programa que repite una sentencia o una secuencia de sentencias un número de veces.

* La sentencia (o grupo de sentencias) que se repite en un bloque se denomina **cuerpo del bucle**.
* Cada repetición del cuerpo del bucle se llama **iteración del bucle**.

Las dos principales consideraciones de diseño al construir un bucle son:

1.  ¿Cuál es el cuerpo del bucle?
2.  ¿Cuántas veces se iterará el cuerpo del bucle?

**El Bucle `while`**

Un bucle `while` utiliza una **condición del bucle** (una expresión lógica) para controlar la secuencia de repetición. La condición del bucle se evalúa **antes** de la ejecución del cuerpo del bucle, lo que convierte al bucle `while` en un **bucle pretest**.

La Figura 6.1 (original del texto) representa el diagrama de flujo del bucle `while`:

```
        Inicio
          ↓
    [condición-bucle]
      /   \
   Verdadera Falsa
      ↓     ↓
    sentencia   ↓
      ↓
     (Volver a la condición)
```

El diagrama muestra que la ejecución de la sentencia o sentencias se repite mientras la `condición del bucle` permanezca verdadera y finaliza cuando se vuelve falsa. También indica que la condición se evalúa antes de cada ejecución del cuerpo del bucle, por lo que si la condición es inicialmente falsa, el cuerpo del bucle no se ejecutará nunca. En resumen, el cuerpo de un bucle `while` se puede ejecutar **cero o más veces**.

**Sintaxis**

Existen dos formas de la sintaxis del bucle `while`:

1.  `while (condición - bucle)`
    `Sentencia;` // cuerpo del bucle (una única sentencia)

2.  `while (condición - bucle)`
    `{`
        `sentencia - 1;`
        `sentencia - 2;`
        `...`
        `sentencia - n;`
    `}` // cuerpo del bucle (un bloque de sentencias)

Donde:

* `while` es una palabra reservada de C.
* `condición - bucle` es una expresión lógica o booleana.
* `sentencia` o el bloque `{}` contienen el cuerpo del bucle (una sentencia simple o compuesta).

**Funcionamiento de la Sentencia `while`**

1.  Se evalúa la `condición - bucle`.
2.  Si la `condición - bucle` es **verdadera** (distinta de cero):
    a.  Se ejecuta la sentencia (o bloque de sentencias) que constituye el cuerpo del bucle.
    b.  El control del programa vuelve al paso 1 (se evalúa de nuevo la condición).
3.  Si la `condición - bucle` es **falsa** (igual a cero):
    a.  El bucle `while` termina.
    b.  El control del programa se transfiere a la siguiente sentencia que sigue al bucle `while`.

Las sentencias dentro del cuerpo del bucle se repiten mientras la expresión lógica (`condición - bucle`) sea verdadera. Cuando la evaluación de la expresión lógica resulta falsa, el bucle termina y la ejecución continúa con la siguiente sentencia después del bucle `while`.

**Contar hasta 10**

```c
int x = 0;
while (x < 10)
    printf("x: %d ", x++);
```

**Visualizar `n` Asteriscos**

```c
int contador = 0; // Inicialización
while (contador < n) { // Prueba (condición)
    printf("*");
    contador++; // Actualización (incremento)
} // fin de while
```

**La Variable de Control del Bucle**

La variable que determina si el cuerpo del bucle se repite se denomina **variable de control del bucle**. Para que un bucle se ejecute correctamente, la variable de control del bucle debe ser:

1.  **Inicializada**: Se le asigna un valor inicial antes de que se alcance la sentencia `while`.
2.  **Probada (Condición)**: Su valor se comprueba en la condición del bucle antes de cada iteración.
3.  **Actualizada**: Su valor se modifica dentro del cuerpo del bucle durante cada iteración.

**Bucles Infinitos**

Si la variable de control del bucle no se actualiza de manera que la condición del bucle eventualmente se vuelva falsa, el bucle se ejecutará **siempre**. Tal bucle se denomina **bucle infinito** (sin terminación). Un bucle infinito ocurre cuando la condición del bucle permanece verdadera en todas las iteraciones.

**Ejemplo de un bucle infinito:**

```c
int contador = 1; // Inicialización
while (contador < 100) { // Condición siempre verdadera
    printf("%d \n", contador);
    contador--; // ¡Error! Decrementa el contador, nunca alcanzará 100
}
```

En este ejemplo, `contador` se inicializa a 1 y se decrementa en cada iteración. Por lo tanto, la condición `contador < 100` siempre será verdadera, resultando en un bucle infinito que imprimirá una secuencia descendente de números.


```c
/* bucle infinito */
contador = 1;
while (contador < 100)
```

**172 Programación en C. Metodología, algoritmos y estructura de datos**

```c
{
    printf ("%d \n", contador);
    contador--; // decrementa en 1 contador
}
```

contador se inicializa a 1 (menor de 100) y como `contador--` decrementa en 1 el valor de  
contador en cada iteración, el valor del contador nunca llegará a valer 100, valor necesario de  
contador para que la condición del bucle sea falsa.  
Por consiguiente, la condición `contador < 100` siempre será verdadera, resultando un bucle infinito, cuya salida será:

```
1
0
-1
-2
-3
-4
```

**Ejemplo**

```c
/* Bucle de muestra con while */
#include <stdio.h>
int main()
{
    int contador = 0;  /* inicializa la condición */
    while(contador < 5) /* condición de prueba */
    {
        contador++;     /* cuerpo del bucle */
        printf("contador: %d \n", contador);
    }
    printf("Terminado. Contador: %d \n", contador);
    return 0;
}
```

**Ejecución:**
```
contador: 1
contador: 2
contador: 3
contador: 4
contador: 5
Terminado. Contador: 5
```

**Operadores de incremento y decremento (++ y --)**

C ofrece los operadores de incremento (`++`) y decremento (`--`) que soportan una sintaxis abreviada para  
añadir (incrementar) o restar (decrementar) 1 al valor de una variable.  
Recordemos del Capítulo 4 la sintaxis de ambos operadores:

**Estructuras de control: bucles – 173**

```c
++nombrevariable     /* preincremento */
nombrevariable++     /* postincremento */
--nombrevariable     /* predecremento */
nombrevariable--     /* postdecremento */
```

**Ejemplo**

Si `i` es una variable entera cuyo valor es 3, las variables `k` e `i` toman los valores sucesivos que se  
indican en las sentencias siguientes:

```c
k = i++;  /* asigna el valor 3 a k y 4 a i */
k = ++i;  /* asigna el valor 5 a k y 5 a i */
k = i--;  /* asigna el valor 5 a k y 4 a i */
k = --i;  /* asigna el valor 3 a k y 3 a i */
```


**Ejemplo**

Uso del operador de incremento `++` para controlar la iteración de un bucle (una de las aplicaciones más  
usuales de `++`).

```c
/* programa cálculo de calorías */
#include <stdio.h>
int main()
{
    int num_de_elementos, cuenta;
    int calorias_por_alimento, calorias_total;

    printf("¿Cuántos alimentos ha comido hoy? ");
    scanf("%d", &num_de_elementos);

    calorias_total = 0;
    cuenta = 1;

    printf("Introducir el número de calorías de cada uno de los ");
    printf("%d %s", num_de_elementos, "alimentos tomados:\n");

    while (cuenta++ <= num_de_elementos)
    {
        scanf("%d", &calorias_por_alimento);
        calorias_total += calorias_por_alimento;
    }

    printf("Las calorías totales consumidas hoy son = ");
    printf("%d\n", calorias_total);

    return 0;
}
```

**Ejecución de muestra:**

```
¿Cuántos alimentos ha comido hoy? 8
Introducir el número de calorías de cada uno de los 8 alimentos tomados:
500 50 1400 100 100 105 250 100
Las calorías totales consumidas hoy son = 3015
```

## Terminaciones anormales de un bucle (ciclo)

Un error típico en el diseño de una sentencia `while` se produce cuando el bucle sólo tiene una sentencia en lugar de varias sentencias como se planeó. El código siguiente  

```c
contador = 1;
while (contador < 25)
    printf ("%d\n",contador) ;
contador++;
```

visualizará infinitas veces el valor 1. Es decir, entra en un bucle infinito del que nunca sale porque no se actualiza (modifica) la variable de control `contador`.  
La razón es que el punto y coma al final de la línea `printf ("%d\n",contador);` hace que el bucle termine en ese punto y coma, aunque aparentemente el sangrado pueda dar la sensación de que el cuerpo de `while` contiene dos sentencias, `printf()` y `contador++;`  

El error se hubiera detectado rápidamente si el bucle se hubiera escrito correctamente  

```c
contador = 1;
while (contador < 25)
    contador++;
```

La solución es muy sencilla, utilizar las llaves de la sentencia compuesta:

```c
contador = 1;
while (contador < 25) {
    printf ("%d\n",contador);
    contador++;
}
```

## Diseño eficiente de bucles
Una cosa es analizar la operación de un bucle y otra diseñar eficientemente sus propios bucles.  
Los principios a considerar son: primero, analizar los requisitos de un nuevo bucle con el objetivo de determinar su inicialización, prueba (condición) y actualización de la variable de control del bucle.  
El segundo es desarrollar patrones estructurales de los bucles que se utilizan frecuentemente.

## Bucles while con cero iteraciones

El cuerpo de un bucle no se ejecuta nunca si la prueba o condición de repetición del bucle no se cumple, es falsa (es cero en C), cuando se alcanza `while` la primera vez.

```c
contador = 10;
while (contador > 100) {
    ...
}
```

El bucle anterior nunca se ejecutará ya que la condición del bucle `(contador > 100)` es falsa la primera vez que se ejecuta. El cuerpo del bucle nunca se ejecutará.

## Bucles controlados por centinelas

Normalmente, no se conoce con exactitud cuántos elementos de datos se procesarán antes de comenzar su ejecución.  
Esto se produce bien porque hay muchos datos a contar normalmente o porque el número de datos a procesar depende de cómo prosigue el proceso de cálculo.  

Un medio para manejar esta situación es instruir al usuario a introducir un único dato definido y especificado denominado **valor centinela** como último dato.  
La condición del bucle comprueba cada dato y termina cuando se lee el valor centinela. El valor centinela se debe seleccionar con mucho cuidado y debe ser un valor que no pueda producirse como dato. En realidad el centinela es un valor que sirve para terminar el proceso del bucle.  

En el siguiente fragmento de código hay un bucle con centinela; se introducen notas mientras que ésta sea distinta de centinela.

```c
/* entrada de datos numéricos, centinela -1 */
const int centinela = -1;
printf ("Introduzca primera nota:") ;
scanf ("%d", &nota);
while (nota != centinela) {
    cuenta++;
    suma += nota;
    printf ("Introduzca la siguiente nota: ");
    scanf ("%d", &nota);
} /* fin de while */
puts ("Final");
```

**Ejecución**  
Si se lee el primer valor de nota, por ejemplo 25 y luego se ejecuta, la salida podría ser ésta:

```
Introduzca primera nota: 25  
Introduzca siguiente nota: 30  
Introduzca siguiente nota: 90  
Introduzca siguiente nota: -1  
Final
/* valor del centinela */
```
## Bucles controlados por indicadores (banderas)

En lenguajes, como Pascal, que tienen el tipo `bool`, se utiliza una variable booleana con frecuencia como indicadores o banderas de estado para controlar la ejecución de un bucle.  
El valor del indicador se inicializa (normalmente a falso `"false"`) antes de la entrada al bucle y se redefine (normalmente a verdadero `"true"`) cuando un suceso específico ocurre dentro del bucle.  

En C no existe el tipo `boolean`, por lo que se utiliza como bandera una variable entera que puede tomar dos valores, 1 o 0.  
Un bucle controlado por bandera - indicador se ejecuta hasta que se produce el suceso anticipado y se cambia el valor del indicador.

**Ejemplo 6.3**  
Se desea leer diversos datos tipo carácter introducidos por teclado mediante un bucle `while` y se debe terminar el bucle cuando se lea un dato tipo dígito (rango `'0'` a `'9'`).  

La variable bandera, `digito_leido`, se utiliza como un indicador que representa cuando un dígito se ha introducido por teclado.

| Variable bandera | Significado |
|------------------|-------------|
| `digito_leido`   | su valor es falso (cero) antes de entrar en el bucle y mientras el dato leído sea un carácter, y es verdadero cuando el dato leído es un dígito. |

El problema que se desea resolver es la lectura de datos carácter y la lectura debe detenerse cuando el dato leído sea numérico (un dígito de `'0'` a `'9'`).  

Por consiguiente, antes de que el bucle se ejecute y se lean los datos de entrada, la variable `digito_leido` se inicializa a falso (cero).  
Cuando se ejecuta el bucle, éste debe continuar ejecutándose mientras el dato leído sea un carácter y en consecuencia la variable `digito_leido` tiene el valor falso.  
Se debe detener el bucle cuando el dato leído sea un dígito y en este caso el valor de la variable `digito_leido` se debe cambiar a verdadero (uno).  

En consecuencia, la condición del bucle debe ser `!digito_leido` ya que esta condición es verdadera cuando `digito_leido` es falso.  

El bucle `while` será similar a:

```c
digito_leido = 0; /* no se ha leído ningún dato */
while (!digito_leido) {
    printf ("Introduzca un carácter: ");
    scanf ("%c", &car);
    digito_leido = (('0' <= car) && (car <= '9'));
} /* fin de while */
```

**El bucle funciona de la siguiente forma:**

1. **Entrada del bucle:** la variable `digito_leido` tiene por valor falso.  
2. **La condición del bucle** `!digito_leido` es verdadera, por consiguiente se ejecutan las sentencias del interior del bucle.  
3. **Se introduce por teclado un dato** que se almacena en la variable `car`. Si el dato leído es un carácter, la variable `digito_leido` se mantiene con valor falso (0) ya que ése es el resultado de la sentencia de asignación:  
```c
digito_leido = (('0' <= car) && (car <= '9'));
```  
Si el dato leído es un dígito, entonces la variable `digito_leido` toma el valor verdadero (1), resultante de la sentencia de asignación anterior.  
4. **El bucle se termina** cuando se lee un dato tipo dígito (`'0'` a `'9'`) ya que la condición del bucle es falsa.



### Modelo de bucle controlado por un indicador

El formato general de un bucle controlado por indicador es el siguiente:  
1. Establecer el indicador de control del bucle a «falso» o «verdadero» (a cero o a uno) con el objeto de que se ejecute el bucle while correctamente la primera vez (normalmente se suele inicializar a «falso»).  
2. Mientras la condición de control del bucle sea verdadera:  
2.1 Realizar las sentencias del cuerpo del bucle.  
2.2 Cuando se produzca la condición de salida (en el ejemplo anterior que el dato carácter leído fuese un dígito) se cambia el valor de la variable indicador o bandera, con el objeto de que entonces la condición de control se haga falsa y, por tanto, el bucle se termina.
3. Ejecución de las sentencias siguientes al bucle.  
~~~~  

**Ejemplo 6.4**  
Se desea leer un dato numérico x cuyo valor ha de ser mayor que cero para calcular la función f(x) = x*log(x).  

La variable bandera, `x-positivo` se utiliza como un indicador que representa que el dato leído es mayor que cero. Por consiguiente, antes de que el bucle se ejecute y se lea el dato de entrada, la variable `x-positivo` se inicializa a falso (0). Cuando se ejecuta el bucle, éste debe continuar ejecutándose mientras el número leído sea negativo o cero y, en consecuencia, la variable `x-positivo` tenga el valor falso, y se debe detener el bucle cuando el número leído sea mayor que cero y en este caso el valor de la variable `x-positivo` se debe cambiar a verdadero (uno). En consecuencia, la condición del bucle debe ser `!x-positivo` ya que esta condición es verdadera cuando `x-positivo` es falso. A la salida del bucle se calcula el valor de la función y se escribe:

```c
#include <stdio.h>
#include <math.h>

int main()
{
    float f, x;
    int xpositivo;

    xpositivo = 0; /* inicializado a falso */
    while (!xpositivo)
    {
        printf("\nValor de x: ");
        scanf("%f", &x);
        xpositivo = (x > 0.0); /* asigna verdadero (1) si cumple la condición */
    }

    f = x * log(x);
    printf("f(%.1f) = %.3e", x, f);
    return 0;
}
```
~~~~

## La sentencia break en los bucles
La sentencia `break` se utiliza, a veces, para realizar una terminación anormal del bucle. Dicho de otro modo, una terminación antes de lo previsto.  
Su sintaxis es:

```c
break;
```

La sentencia `break` se utiliza para la salida de un bucle `while` o `do-while`, aunque también se puede utilizar dentro de una sentencia `switch`, siendo éste su uso más frecuente.  

**Metodología, algoritmos y estructura de datos – p. 178**  
```c
while (condición)
{
    if (condición2)
        break;
    /* sentencias */
}
```

**Ejemplo**  
El siguiente código extrae y visualiza valores de entrada desde el dispositivo estándar de entrada (`stdin`) hasta que se encuentra un valor especificado:

```c
int clave = -9;
int entrada;

while (scanf("%d", &entrada))
{
    if (entrada != clave)
        printf("%d\n", entrada);
    else
        break;
}
```

**¿Cómo funciona este bucle while?**  
La función `scanf()` devuelve el número de datos captados del dispositivo de entrada o bien cero si se ha introducido fin-de-fichero. Al devolver un valor distinto de cero, el bucle se ejecutaría indefinidamente. Sin embargo, cuando `entrada == clave`, la ejecución sigue por `else` y la sentencia `break`, que hace que la ejecución siga en la sentencia siguiente al bucle `while`.

**Ejecución**  
El uso de `break` en un bucle no es muy recomendable ya que puede hacer difícil la comprensión del comportamiento del programa. En particular, suele hacer muy difícil verificar los invariantes de los bucles. Por otra parte, suele ser fácil la reescritura de los bucles sin la sentencia `break`.  

**escrito sin la sentencia break:**

```c
int clave;
int entrada;

while ((scanf("%d", &entrada)) && (entrada != clave))
{
    printf("%d\n", entrada);
}
```

## Bucles `while (true)`

La condición que se comprueba en un bucle `while` puede ser cualquier expresión válida en C. Mientras que la condición permanezca verdadera (distinta de 0), el bucle `while` continuará ejecutándose.  

Se puede crear un bucle que nunca termine utilizando el valor `1` (verdadero) para la condición que se comprueba.

```c
/* Listado while (true) */
#include <stdio.h>

int main()
{
    int flag = 1, contador = 0;
    while (flag)
    {
        contador++;
        if (contador > 10)
            break;
    }
    printf("Contador: %d\n", contador);
    return 0;
}
```

**Salida**  
```
Contador: 11
```

**Análisis**  
En la línea 6, un bucle `while` se establece con una condición que nunca puede ser falsa. El bucle incrementa la variable `contador` en la línea 8, y a continuación la línea 9 comprueba si el contador es mayor que 10. Si no es así, el bucle se itera de nuevo. Si `contador` es mayor que 10, la sentencia `break` de la línea 10 termina el bucle `while`, y la ejecución del programa pasa a la línea 12.

**Ejercicio** 

**Calcular la media de seis números.**  
El cálculo típico de una media de valores numéricos es: leer sucesivamente los valores, sumarlos y dividir la suma total por el número de valores leídos.  

El código más simple podría ser:

```c
float num1;
float num2;
float num3;
float num4;
float num5;
float num6;
float media;

scanf("%f %f %f %f %f %f", &num1, &num2, &num3, &num4, &num5, &num6);
media = (num1 + num2 + num3 + num4 + num5 + num6) / 6;
```

Evidentemente, si en lugar de 6 valores fueran 1000, la modificación del código no sólo sería de longitud enorme, sino que la labor repetitiva de escritura sería tediosa.  

Por ello, la necesidad de utilizar un bucle.  

**El algoritmo más simple sería:**

- Definir número de elementos como constante de valor 6  
- Inicializar contador de números  
- Inicializar acumulador (sumador) de números  
- Mensaje de petición de datos  
- Mientras no estén leídos todos los datos hacer  
  - Leer número  
  - Acumular valor del número a variable acumulador  
  - Incrementar contador de números  
- Fin-mientras  
- Calcular media (Acumulador / Total número)  
- Visualizar valor de la media  
- Fin  

**El código en C es:**

```c
/* Cálculo de la media de seis números */
#include <stdio.h>
#include <string.h>

int main()
{
    const int TotalNum = 6;
    int ContadorNum = 0;
    float SumaNum = 0;
    float media;

    printf("Introduzca %d números\n", TotalNum);

    while (ContadorNum < TotalNum)
    {
        /* valores a procesar */
        float numero;
        scanf("%f", &numero); /* leer siguiente número */
        SumaNum += numero;    /* añadir valor a Acumulador */
        ++ContadorNum;        /* incrementar números leídos */
    }

    media = SumaNum / ContadorNum;
    printf("Media: %.2f\n", media);

    return 0;
}
```

