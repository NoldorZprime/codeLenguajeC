---
title: Punteros a funciones
description: A reference page in my new Starlight docs site.
---

Hasta este momento se han analizado punteros a datos. Es posible declarar punteros a cualquier tipo de variables, estructura o array. De igual modo, las funciones pueden declarar parámetros punteros para permitir que sentencias pasen las direcciones de los argumentos a esas funciones.

Es posible también crear punteros que apunten a funciones. En lugar de direccionar datos, los punteros de funciones apuntan a código ejecutable. Al igual que los datos, las funciones se almacenan en memoria y tienen direcciones iniciales. En C se pueden asignar las direcciones iniciales de funciones a punteros. Tales funciones se pueden llamar en un modo indirecto, es decir, mediante un puntero cuyo valor es igual a la dirección inicial de la función en cuestión.

La sintaxis general para la declaración de un puntero a una función es:
`Tipo-de-retorno (*PunteroFuncion) (<lista de parámetros>);`
Este formato indica al cornpilador que `P u n t e r o F u n c i on` es un puntero a una función que devuelve el tipo `Tipo-de-retorno` y tiene una lista de parámetros.

Un puntero a una función es simplemente un puntero cuyo valor es la dirección del nombre de la función. Dado que el nombre es, en sí mismo, un puntero; un puntero a una función es un puntero a un puntero constante.

```
Figura 10.9. Puntero a función.
```

Por ejemplo:
```c
int f(int);           / * declara la función f * /
int ( * p f ) (int);  / * define puntero pf o. función int con argumento
                         int * /
pf = f ;              / * a s i g n o . la dirección de f a pf * /
```

**Ejemplo**
```c
double ( * f p ) (int n);
float ( * p ) (int i , int j);
void (*sort) (int* ArrayEnt, unsigned n);
unsigned ("search)(int BuscarClave,int* ArrayEnt,unsigned n);
```
El primer identificador, `f p`, apunta a una función que devuelve un tipo `double` y tiene un Único parámetro de tipo `int`. El segundo puntero, `p`, apunta a una función que devuelve un tipo `float` y acepta dos parámetros de tipo `int`. El tercer puntero, `sort`, es un puntero a una función que devuelve un tipo `void` y toma dos parámetros: un puntero a `int` y u n tipo `unsigned`. Por Último, `search` es un puntero a una función que devuelve un tipo `unsigned` y tiene tres parámetros: un `int`, un puntero a `int` y un `unsigned`.

## Inicialización de un puntero a una función

La sintaxis general para inicializar u n puntero a una función es:
344 Programación en C. Metodología, algoritmos y estructura de datos
`PunteroFuncion = unaFuncion`
La función asignada debe tener el mismo tipo de retorno y lista de parámetros que el puntero a función; en caso contrario, se producirá un error de compilación. Así, por ejemplo, un puntero `qf` a una función `double`:
```c
double calculo (int* v; unsigned n); / * prototipo de función * /
double (*qf) (int*, unsigned);     / * puntero a función * /
int r[ll] = {3,5,6,7,1,7,3,34,5,11,44};
double x;
qf = calculo;                      / * asigna dirección de la función * /
x = qf(r,ll);                      / * llamada a la función con el puntero a función * /
```
Algunas de las funciones de la biblioteca, tales como `qsort ( )`, requiere pasar un argumento que consta de un puntero a una función. Se debe pasar a `qsort` un puntero de función que apunta a una función.

**Ejemplo 10.6**
Se desea ordenar un array de números reales, la ordenación se va a realizar con lafincicín `qsort ( )`. Esta función tiene un parámetro que es un puntero a función del tipo `int ( * ) (const void",const void* 1`. Se necesita un función de comparación, que devuelva negativo si primer argumento es menor que el segundo, O si son iguales y positivo si es mayor. A continuación se escribe el programa:
```c
#include <stdio.h>
#include <stdlib.h>
int compara-float(const void* a, const void* b); / * prototipo de función
                                                  de comparación * /
float v[]= {34.5, - 12.3, 4.5, 9.1, - 2.5, 18.0, lo., 5.5);
int main( )
{
  int j , n;
  int (*pf)(const void*,const void*); / * puntero a función * /
  n = sizeof(v)/sizeof(v[O]);         / * numero de elementos * /
  printf ( "\n Numero de elementos : %d\n",n) ;
  pf = compara-float;
  qsort( (void*)v,n,sizeof(v[O]),pf); / * Llamada a función de
                                        biblioteca. * /
  for (j = O ; j < n; j++)
    printf('%.2f 'I, vlj]);
  puts("\n Pulsa cualquier tecla para continuar. . . . ") ;
  j = getchar() ;
  return O ;
}
int compara-float(const void *a, const void *b)
{ float *x, *y;
  x = (float*)a; y = (float*)b;
  return(*x - *y);
}
```
Punteros (apuntadores) 345

**Ejemplo 10.7**
Supongamos un puntero `p` a una función tul como
```c
íloat (*p) (int i, int j) ;
```
a continuación se puede asignar la dirección de la función `ejemplo`:
```c
float ejemplo(int i, int j)
{
  return 3.14159 * i * i + j;
}
```
al puntero `p` escribiendo
```c
p = ejemplo;
```
Después de esta asignación se puede escribir la siguiente llamada a la función:
```c
(*P)(12,45)
```
Su efecto es el mismo que
```c
e j emplo ( 12,45 )
```
También se puede omitir el asterisco (así como los paréntesis) en la llamada `( * p ) ( 12,45 )`:
```c
p (12,45)
```
convirtiéndose en esta otra llamada.

La utilidad de lasfunciones a punteros se ve más claramente si se imagina un programa grande, al principio del cual se desea elegir una entre varias funciones, de modo que la función elegida se llama, entonces, muchas veces. Mediante un puntero, la elección sólo se hace una vez: después de asignar (la dirección de) la función seleccionada a un puntero y a continuación se puede llamar a través de ese puntero.

Los punteros a funciones también permiten pasar una funcicín como un argumento a otra función. Para pasar el nombre de una función como un argumento función, se especifica el nombre de la función como argumento. Supongamos que se desea pasar la función `m i func ( )` a la función `sufunc ( )`. El código siguiente realiza las tareas anteriores:
```c
void sufunc(int (*f) 0); / * prototipo de sufunc * /
int mifunc(int i);       / * prototipo de mifunc * /
void main0
{
  sufunc (mifunc);
}
int mifunc(int i)
{
  return 5*i;
}
```
En la función llamada se declara la función pasada como un puntero función.
```c
void sufunc(int (*f)0)
{
  . . .
  j = f(5);
  . . .
}
```
346 Programación en C.Metodología, algoritmos y estructura de datos
Como ejemplo practico veamos cómo escribir una función general que calcule la suma de algunos valores, es decir,
```
f(1) + f(2) + . . . + f ( n )
```
para cualquier función `f` que devuelva el tipo `double` y con un argumento `int`. Diseñaremos una función `funcsuma` que tiene dos argumentos: `n`, el número de términos de la suma, y `f`, la función utilizada. Así pues, la función `funcsuma` se va a llamar dos veces, y va a calcular la suma de
```
inversos(k) = 1.0/k         {para k = 1 , 2 , 3 , 4, 5}
cuadrados(k1 = k * k       {para k = 1 , 2 , 3}
```
El programa siguiente muestra la función `funcsuma`, que utiliza la función `f` en un caso para `inversos` y en otro para `cuadrados`.
```c
#include <stdio.h>
/ * prototipos de funciones * /
double inversos (int k);
double cuadrados(int k);
double funcsuma(int n, double (*f)(int k)) ;
int main( )
{
  printf("Suma de cinco inversos: % . 3 1 f \n",funcsuma(5,inversos));
  printf("Suma de tres cuadrados: 8.31f \n",funcsuma(3,cuadrados));
  return O ;
}
double funcsuma(int n, double (*f) (int k))
{
  double s = O ;
  int i;
  for (i = 1; i <= n; i++)
    s + = f(i);
  return s;
}
double inversos (int k)
{
  return 1.0/k;
}
double cuadrados (int k)
{
  return (doub1e)k * k;
}
```
El programa anterior calcula las sumas de
a) $1 + \frac{1.0}{2} + \frac{1.0}{3} + \frac{1.0}{4} + \frac{1.0}{5}$
b) $1.0 + 4.0 + 9.0$
y su salida será:
```
Suma de cinco inversos: 2.283
Suma de t r e s ciiadrcidos: 14.000
```
Punteros (apuntadores) 347

## Aplicación de punteros a función para ordenación

Algunas de las funciones de la biblioteca, tal como `qsort ( )` o `bsearch( )`, requieren pasar un argumento que consta de un puntero a una función. Se debe pasar a ambas, `qsort ( )` y `bsearch ( )`, un puntero de función que apunta hacia una función que se debe definir. `qsort ( )` utiliza el algoritmo de ordenación rápida (quicksort) para ordenar un array de cualquier tipo de dato. `bsearch ( )` utiliza la búsqueda binaria para determinar si un elemento está en un array. La función que debe de proporcionarse es para realizar comparaciones de elementos de array. En el programa siguiente, la función `comparar ( )` se pasa a `qsort ( y a bsearch ( )`. La función `comparar ( )` compara entradas del array `tabla` y devuelve (retorna) un número negativo si `argl` es menor que `arg2`, devuelve cero si son iguales, o un número positivo si `argl` es mayor que `arg2`.

El programa siguiente ordena un array de números enteros y busca si existe un valor clave.
```c
#include <stdio.h>
#include <search.h>
#include <stdlib.h>
#include <time.h>
int comparar(const void *argl, const void *arg2);
void main ( )
{
  irit i, x;
  int tablaLl51;
  int *b;
  randomize ( 1 ;
  / * genera tabla de elementos aleatorios de 1 a 100 * /
  f o r (i = O ; ii15; i++)
    tabla[i] = random(100)+1;
  printf ("\n\nListaoriginal : " ) ;
  for ( i = O ; i < 15; i++)
    printf ("%d 'I, tabla[il) ;
  / * Ordena tabla utilizando el algoritmo quicksort * /
  qsort((void *)tabla,(size_t)l5,sixeot(int),comparar);
  printf ("\nLista ordenada: " ) ;
  for (i = O ; i < 15; i++)
    printf ("%d ",tabla[il1 ;
  printf ("\n\nClavea buscar: " ) ;
  scanf ("%d",&x);
  / * Realiza una búsqueda binaria en el vector ordenado * /
  b = bsearch(&x,(void *)tabla,(size-t)15,sizeof(int),cornparar);
  if (b)
    / * clave encontrada * /
    printf("\nEl elemento %d está en la tabla',^);
  else
    printf("\nEl elemento %d no está en la tabla",^);
  printf("\nPulsd cualquier t e c h para continuar " ) ;
  1 = getch();
}
```
348 Programación en C. Metodología, algoritmos y estructura de datos
```c
/ * Comparar dos elementos de la lista * /
int comparar(const void *argl, const void *arg2)
{
  return *(int * ) argl - *(int * ) arq2;
}
```

**Recuerde**
Los padmetros de la función `q s o r t ( )` y `b s e a r c h ( )` son:
* `&X` Dirección de la clave a buscar.
* `(void * tabla` Array que contiene valores a ordenar.
* `( s i z e - t ) l S` Número de elementos del army.
* `s i z e o f ( i n t )` Tamaño en bytes de cada elemento del array.
* `comparar (` Nombre de la función que compara dos elementos del array.

## Arrays de punteros de funciones

Ciertas aplicaciones requieren disponer de numerosas funciones, basadas en el cumplimiento de ciertas condiciones. Un método para implementar tal aplicación es utilizar una sentencia `switch` con muchos selectores `case`.Otra solución es utilizar un array de punteros de función. Se puede seleccionar una función de la lista y llamarla.

La sintaxis general de un array de punteros de función es:
`tipoRetorno(*PunteroFunc[LongArray])(<Lista de parámetros>);`
I.

**Ejemplo 10.8**
```c
double ( * f p [ 3 ] ) (int n);
void (*ordenar[MAX-ORD]) (int* ArrdyF:nt, unsigned n) ;
```
`f p` apunta a un array de funciones; cada miembro devuelve un valor `double` y tiene un único parametro de tipo `int`. `ordenar` es un puntero a un array de funciones; cada miembro devuelve un tipo `void` y toma dos parámetros: un puntero a `int` y un `uns i gned`.

**Recuerde**
* `f unc`, nombre de un elemento.
* `func [ ]` es un array.
* `( * f unc [ ] )` es un array de punteros.
* `( * f unc [ ] ) ( )` es un array de punteros a funciones.
* `i n t ( *func [ ] ) ( )` es un array de punteros a funciones que devuelven valores `i n t`.

Se puede asignar la dirección de las funciones al array, proporcionando las funciones que ya han sido declaradas. Un ejemplo es
```c
int funcl(int i , int j);
int func2(int i , int j);
int ( * f u n c [ ] )(int,int) = {funcl, f u n c 2 ) ;
```
Punteros (apuntadores) 349

## Una aplicación de punteros de funciones

El listado siguiente, `C A L C U L A . c`, es un programa que simula calculador que puede sumar, restar, multiplicar o dividir números. Se escribe una expresión simple por teclado y el programa visualiza la respuesta.

El programa define cuatros funciones: `sumar ( )`, `restar ( )`, `mult ( )` y `div( )`, y un array de punteros a función que se inicializa a cada una de las funciones. Se pide la operación a realizar, se busca el índice del puntero a función que le corresponde (dependiendo del operador) y se realiza la llamada a la función con su puntero.
```c
#include <stdio.h>
#include <ctype.h>

/* prototipos de funciones */
float sumar(float x, float y);
float restar(float x, float y);
float mult(float x, float y);
float div(float x, float y);

void main() {
  char signo, operadores[] = {'+', '-', '*', '/'};
  float (*func[])(float, float) = {sumar, restar, mult, div};
  int i;
  unsigned char t;
  float x, y;

  puts("\nCalculadorde expresiones ");
  do {
    printf("\nExpresión: ");
    scanf("%f %c %f", &x, &signo, &y);

    for (i = 0; i < 4; i++) {
      /* búsqueda del operador */
      if (signo == operadores[i]) {
        printf("\n%.1f %c %.1f = %.2f", x, signo, y, func[i](x, y));
        break; /* Salir del bucle for una vez encontrado el operador */
      }
    }

    printf("\nOtra expresion?: ");
    scanf("%*c%c", &t);
    t = tolower(t);
  } while (t == 's');
}

float sumar(float x, float y) {
  return x + y;
}

float restar(float x, float y) {
  return x - y;
}

float mult(float x, float y) {
  return x * y;
}

float div(float x, float y) {
  return x / y;
}
```