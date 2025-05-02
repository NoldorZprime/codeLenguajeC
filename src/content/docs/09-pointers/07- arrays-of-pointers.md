---
title: Arrays de punteros
description: A reference page in my new Starlight docs site.
---

"Si se necesita reservar muchos punteros a muchos valores diferentes, se puede declarar un arrup de punteros. U n array de punteros es un array que contiene como elementos punteros, cada uno de los cuales apunta a un tipo de dato específico. La línea siguiente reserva un array de diez variables puntero a enteros:
```c
int *ptr[lOl; / * reserva un array de 10 punteros a enteros * /
```
La Figura 10.6 muestra cómo C organiza este array. Cada elemento contiene una dirección que apunta a otros valores de la memoria. Cada valor apuntado debe ser un entero. Se puede asignar a un elemento de `ptr` una dirección, tal como para variables puntero no arrays. Así, por ejemplo,
```c
ptr[5] = &edad; / * ptr[5] apunta u. la dirección de edad * /
ptr[4] = NULL; / * ptr[4] no contiene dirección alguna * /
```
Otro ejemplo de arrays de punteros, en este caso de caracteres es:
```c
char *puntos 1251 ; / * array de 25 punteros a carácter * /
```
De igual forma, se podría declarar un puntero a un array de punteros a enteros.
```c
int * (*ptrlO)[ I ;
```
y las operaciones paso a paso son:
* `(*ptrlO)` es un puntero, `ptrl0` P S un nombre de variable.
* `(*ptrlO)[ ]` es un puntero a un array
* `*(*ptrlO)[ ]` es un puntero u. un a r r a y de punteros
* `int *(*ptrlO)[]` es un puntero un array de punteros de variables `int`

Una matriz de número enteros, o reales, puede verse como un array de punteros; de tantos elementos como filas tenga la matriz, apuntando cada elemento del array a un array de enteros o reales, de tantos elementos como columnas.

```
Cada elemento puede apuntar a u n entero
memoria
í41
Figura 10.6. U n array de 10 punteros a enteros.
```
Punteros (apuntadores) 335

## Inicialización de un array de punteros a cadenas

La inicialización de un array de punteros a cadenas se puede realizar con una declaración similar a ésta:
```c
char *nombres-meses [121 = { "Enero", " Febrero " , " Marzo " ,
                                 "Abri1 I' , "Mayo" , "Junio" ,
                                 " Ju 1io",
                                 "Octubre", "Noviembre",
                                 "Diciembre" } ;
```