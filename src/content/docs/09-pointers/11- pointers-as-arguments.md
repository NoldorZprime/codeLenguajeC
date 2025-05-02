---
title: Punteros como argumento
description: A reference page in my new Starlight docs site.
---

Con frecuencia se desea que una función calcule y devuelva más de un valor, o bien se desea que una función modifique las variables que se pasan como argumentos. Cuando se pasa una variable a una función (paso por valor) no se puede cambiar el valor de esa variable. Sin embargo, si se pasa un puntero a una variable a una función (paso por direccicín) se puede cambiar el valor de la variable.

Cuando una variable es local a una función, se puede hacer la variable visible a otra función pasándola como argumento. Se puede pasar un puntero a una variable local como argumento y cambiar la variable en la otra función.

Considere la siguiente definición de la función `~ncrernentar~(`
```c
void Incrementari(int *i)
{
  *i += 5;
}
```
La llamada a esta función se realiza pasando una dirección que itilice esa función. Por ejemplo,
```c
int i;
i = 10;
Incrementar5 (&i);
```
para llamar a la función `1ncrementar5 ( )` utilice:
, que incrementa un entero en 5 :
342 Programación en C. Metodología, algoritmos y estructura de datos
Es posible mezclar paso por referencia y por valor. Por ejemplo, la función `funcl` definida como
```c
void funcl(int * s , int t)
{
  * S = 6 ;
  t = 25;
}
```
y la invocación a la función podría ser:
```c
int i , j;
i = 5 ;
j = 7;
funcl (&i, j) ; /*llamada a funcl * /
```
Cuando se retorna de la función `tunc1` tras su ejecución, `i` será igual a 6 y `j` seguirá siendo 7, ya que se pasó por valor. El paso de un nombre de array a una función es lo mismo que pasar un puntero al array. Se pueden cambiar cualquiera de los elementos del array. Cuando se pasa un elemento a una función, sin embargo, el elemento se pasa por valor. En el ejemplo
```c
int lista[] = {l, 2 , 31;
func(lista[l], listaL21) ;
```
ambos elementos se pasan por valor.

En C , por defecto, el paso de parámetros se hace por valor. C no tiene parhetros por referencia, hay que emularlo mediante el paso de la dirección de una variable, utilizando punteros en los argumentos de la función.

En el siguiente ejemplo, se crea una estructura para apuntar las temperaturas más alta y más baja de un día determinado.
```c
struct temperatura {
  float alta;
  float ba ja ;
};
```
Un caso típico podría ser almacenar las lecturas de un termómetro conectado de algún modo posible a una computadora. Una función clave del programa lee la temperatura actual y modifica el miembro adecuado, `alta` o `baja`, en una estructura `temperatura` de la que se pasa la dirección del argumento a un parámetro puntero.
```c
void registrotemp(struct temperatura *t)
{ float actual ;
  leertempactual(actud1);
  if (actual > t - > alta)
    t - > alta = actual;
  else if (actual < t - > baja)
    t - > baja = actual;
}
```
La llamada a la función se puede hacer con estas sentencias:
```c
struct temperatura tmp;
registrotemp(&tmp);
```