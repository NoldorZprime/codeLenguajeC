---
title: Arrays multidimensionales
description: A reference page in my new Starlight docs site.
---

"Los arrays vistos anteriormente se conocen como arrays unidimensionales (una sola dimensión) y se caracterizan por tener un solo subíndice. Estos arrays se conocen también por el término listas. Los arrays multidimensionales son aquellos que tienen más de una dimensión y, en consecuencia, más de un índice. Los arrays más usuales son los de dos dimensiones, conocidos también por el nombre de tablas o matrices. Sin embargo, es posible crear arrays de tantas dimensiones como requieran sus aplicaciones, esto es, tres, cuatro o más dimensiones.

Un array de dos dimensiones equivale a una tabla con múltiples filas y múltiples columnas (Fig. 8.6).

```
O 1 2 3 n
I 1 I I
mLuFigura 8.6. Estructura de un array de dos dimensiones.
```

Obsérvese que en el array bidimensional de la Figura 8.6, si las filas se etiquetan de O a m y las columnas de O a n, el número de elementos que tendrá el array será el resultado del producto (m+ 1 ) x (n+l). El sistema de localizar un elemento será por las coordenadas representadas por su número de fila y su número de columna (a, b).La sintaxis para la declaración de un array de dos dimensiones es:
`<tipo de datoElemento> <nombre array> [<NúmeroDeFilas<] [<NÚmeroDeColumnas>]`
L

Algunos ejemplos de declaración de tablas:
```c
char PantallaL251 [80];
int puestos [61 [ 8 1 ;
int equipos [ 4I [ 3 O 1 ;
int matriz[4] [21;
```

**Atención**
Al contrario que otros lenguajes, C requiere que cada dimensi6n esté encerrada entre corchetes. La sentencia
```c
int equipoc[4, 3 0 1
```
no es válida.
270 Programación en C. Metodología, algoritmos y estructura de datos

Un array de dos dimensiones en realidad es un array de arrays. Es decir, es un array unidimensional, y cada elemento no es un valor entero, o de coma flotante o carácter, sino que cada elemento es otro array.

Los elementos de los arrays se almacenan en memoria de modo que el subíndice más próximo al nombre del array es la fila y el otro subíndice, la columna. En la Tabla 8.1 se representan todos los elementos y sus posiciones relativas en memoria del array, `int tabla [ 4I [ 2 1 ;` suponiendo que cada entero ocupa 2 bytes.

## Un array bidimensional.
```
Elemento           Posición relativa de memoria
~
tablaL01 [O1           O
tabla[Ol [l]           2
tabla[ll [O1           4
tabla[ll [l]           6
tabla[2] [O]           8
tabla[21 [l]          10
tablaL31 [ O 1         12
tabla[31 [ll          14
```
8.4.1. Inicialización de arrays multidimensionales
Los arrays multidimensionales se pueden inicializar, al igual que los de una dimensión, cuando se declaran. La inicialización consta de una lista de constantes separadas por comas y encerradas entre llaves, como en los ejemplos siguientes:
```c
1. int tabla[2] [ 3 ] = (51, 52, 53, 54, 55, 56);
```
o bien en los formatos mas amigables:
```c
int tabla[2] [ 3 1 = { 151, 52, 531,
                     {54, 55, 1611 };
int tabla[2] [31= { {51, 52, 531,
                     {54, 55, 56) };
int tabla[2] [ 3 ] = {{Sl, 52, 531, 154, 55, 1611;
```

```
O 1 2 3 Columna
F i l d
Figura 8.7. Tablas de dos dimensiones.
```
Arrays (listas y tablas) 271
```c
2. int tabla:! [31 [ 4 1 = {
                        { 1 , 2 , 3 , 41,
                        {5, 6 , ' 1 , 8 1 ,
                        { 9 , 10, 11, 1 2 1
                      };
```

**Consejo**
Los arrays multidimensionales (a menos que sean globales) no se inicializan a valores específicos a menos que se les asignen valores en el momento de la declaración o en el programa. Si se inicializan uno o más elementos, pero no todos, G rellena el resto con ceros o valores nulos ( '\ 0 ' ) . Si se desea inicializar a cero un array multidimensional, utilice una sentencia tal como ésta:
```c
float ventasE31 [ 4 1 = { O . , O . ,O. ,O., O. ,O. , O . , O . , O . ,O. , O . , O . 1 ;
```

```
t ah I <i
Figura 8.8. Almacenamiento en memoria de tabla i31 141.
```
## Acceso a los elementos de los arrays bidimensionales

Se puede acceder a los elementos de arrays bidimensionales de igual forma que a los elementos de un array unidimensional. La diferencia reside en que en los elementos bidimensionales deben especificarse los índices de la fila y la columna.

El formato general para asignación directa de valores a los elementos es:
inserción de elementos
`<nombre array>[indice fila][indice columnal=valor elemento;`
272 Programación en C.Metodología, algoritmos y estructura de datos
extracción de elementos
`<variable> = <nombre array> [indice fila] [indice columna];`

Algunos ejemplos de inserciones:
```c
Tabla[2] [31 = 4.5;
Resistencias[LI [41 = 50;
AsientosLibres [5][12] = 5;
```
y de extracción de valores:
```c
Ventas = Tabla[ll [ll ;
Dia = Semana[31 [ 6 1 ;
```
## Lectura y escritura de elementos de arrays bidimensionales

Las funciones de entrada o salida se aplican de igual forma a los elementos de un array bidimensional. Por ejemplo,
```c
int tablar31 [ 4 1 ;
double resistencias [4][51;
scanf ("%d',&tabla[21 [311 ;
printf ("%4d",tabla[l][l]);
scanf ("%lf",&resistencias[21[411 ;
if (asientosLibres[3][11)
  puts ( " V E R D A D E R O " ) ;
else
  puts ( "FALSO" ) ;
```
## Acceso a elementos mediante bucles

Se puede acceder a los elementos de arrays bidimensionales mediante bucles anidados. Su sintaxis es:
```c
int IndiceFila, IndiceCol;
for (IndiceFila = O ; IndiceFila < N u m F i l a s ; ++IndiceFila)
  for (IndiceCol = O ; IndiceCol < NumCol; ++IndiceCol)
    Procesar elemento[IndiceFilal [IndiceColl;
```
**Ejemplo**
Dejine una tabla de discos, rellena la tabla con datos de entrada y se muestran por pantalla.
```c
float discos C21 [ 4 1 ;
int fila, col;
for (fila = O ; fila < 2 ; fila++)
{ for (col = O ; col < 4; col++)
  {
    scanf ("%f",&discos[fila][col]) ;
  }
}
/ * Visualizar la tabla * /
```
Arrays (listas y tablas) 273
```c
for (fila = O ; fila < 2; fila++)
{
  for (col = O ; col < 4; col++)
  {
    printf ("\n Pts %.lf \n",discos[fila][col]) ;
  }
}
```
**Ejercicio**
Lectura y visualización de un array de dos dimensiones.
La función `leer ( )` lee un array (una tabla) de dos dimensiones y la función `visualizar ( )` presenta la tabla en la pantalla.
```c
#include <stdio.h>
/ * prototipos * /
void leer(int a[l [5]);
void visualizar(const int all [51);
int main ( )
{
  int a[3] [5];
  leer (a);
  visualizar(a);
  return O ;
}
void leer (int a [ I [51
{ int i,j;
  puts("1ntroduzca 15 números enteros, 3 por fila " );
  for (i = O ; i < 3; i++)
  {
    printf ( " Fila %d: ' I , i) ;
    for (j = O ; j < 5; j++)
      scanf ("&d",&a[illjl 1 ;
  }
}
void visualizar (const int a[] 151)
{ int i,j;
  for (i = O ; i < 3; i++)
  {
r fila
h
274 Programación en C. Metodología, algoritmos y estructura de datos
```
```
Fila O: 45 75 25 10
Fila 1: 2 0 14 36 15
Fila 2: 2 1 15 37 16
45 75 25 10 40
20 14 36 15 26
21 15 37 16 27
```
## Arrays de más de dos dimensiones
~
```
4
5
Figura 8.10. Un arrayde tres dimensiones ( 4 x 5 x 3).
```
C proporciona la posibilidad de almacenar varias dimensiones, aunque raramente los datos del mundo real requieren más de dos o tres dimensiones. El medio más fácil de dibujar un array de tres dimensiones es imaginar un cubo tal como se muestra en la Figura 8.10.

Un array tridimensional se puede considerar como un conjunto de arrays bidimensionales combinados juntos para formar, en profundidad, una tercera dimensión. El cubo se construye con filas (dimensión vertical), columnas (dimensión horizontal) y planos (dimensión en profundidad). Por consiguiente, un elemento dado se localiza especificando su plano, fila y columna. Una definición de un array tridimensional `equipos` es:
```c
int equipos[31 [151 [lo1 ;
```
Un ejemplo típico de un array de tres dimensiones es el modelo libro, en el que cada página del libro es un array bidimensional construido por filas y columnas. Así, por ejemplo, cada página tiene cuarenta y cinco líneas que forman las filas del array y ochenta caracteres por línea, que forman las columnas del array. Por consiguiente, si el libro tiene quinientas páginas, existirán quinientos planos y el número de elementos será 500 x 80 x 45 = 1.800.000.
```
h
I
i I
```
Arrays (listas y tablas) 275

## Una aplicación práctica

El array `l i b r o` tiene tres dimensiones `[PAGINAS] [ LINEAS] [COLUMNAS]`, que definen el tamaño del array. El tipo de datos del array es `char`, ya que los elementos son caracteres.

¿Cómo se puede acceder a la información del libro? El método más fácil es mediante bucles anidados. Dado que el libro se compone de un conjunto de páginas, el bucle más externo será el bucle de página; y el bucle de columnas el bucle más interno. Esto significa que el bucle de filas se insertará entre los bucles página y columna. El código siguiente permite procesar el array `l`
```c
int pagina, linea, columna;
for (pagina = O ; pagina < PAGINAS; ++pagina)
  for (linea = O ; linea < LINEAS; ++linea)
    for (columna = O ; columna < COLUMNAS; ++columna)
      <procesar Libro [pagina][ lineal [columna]>
```
**Ejercicio**
Comprobar si una matriz de números enteros es simétrica respecto a la diagonal principal.
La matriz se genera internamente, con la función `random ( )` y argumento `N(8)` para que la matriz tenga valores de O a 7. El tamaño de la matriz se pide como dato de entrada. La función `s imetrica ( )` determina si la matriz es simétrica. La función `main ( )` genera matrices hasta encontrar una que sea simétrica y la escribe en pantalla.
```c
/ *
Determina si una matriz es simétrica. La matriz se genera con números
aleatorios de O a 7. El programa itera hasta encontrar una matriz
simétrica.
* /
#include <stdlib.h>
#include <stdio.h>
#include <time.h>
#define N 8
void genmat (int a[] [NI, int n) ;
int simetrica(int a[] [NI, int n) ;
void escribemat (int a[] [NI, int n) ;
int main (void)
{ int a[N][N]; / * define matriz de tamaño máximo N * /
  int n,i,j ;
  int es-sim;
  randomize ( ) ;
  do {
    printf("\nTamaño de cada dimensión de la matriz, máximo %d: ",N);
    scanf ("%d", &n) ;
  }while (n<2 1 I n>N);
  do {
    gen-mat (a,n) ;
    es-sim = simetrica(a,n);
    if (es-sim)
    { puts ("\n\Encontradamatriz simétrica.\n");
      escribe-mat(a,n);
    }
  } while ( !es-sim) ;
  return O ;
}
```
276 Programación en C.Metodología, algoritmos y estructura de datos
```c
void genmat (int a [ ] [NI , int n)
{ int i,j;
  for (i=0; i<n; it++)
    for (j=O; j<n; j++)
      a[i] [jl= random(N);
}
int simetrica(int a[] [NI, int n)
{
  int i,j;
  int es-simetrica;
  for (es-símetrica=l,i=O;i<n-i & & es-simetrica; i++)
  {
    for (j=i+l; jcn && es-simetrica; j++)
      if (a[i][jl ! = a[jl [il)
        es-simetrica= O ;
  }
  return es-simetrica;
}
void escribemat (int a[] [NI, int n)
{
  int i ,j;
  puts ("\tMatrizanalizada");
  for ( i z o ; i m ; i++)
  { putchar('\t');
    \n");puts ("\t-- - _ _ _ - - - - ~ -
    f o r (j=0; j<n; j++)
      printf ("%d %c",a[i][j],(j==n-l ?'\n ' : ' ' 1 ) ;
  }
}
```"