---
title: Punteros a estructuras
description: A reference page in my new Starlight docs site.
---

Un puntero también puede apuntar a una estructura. Se puede declarar un puntero a una estructura tal como se declara un puntero a cualquier otro objeto y se declara un puntero estructura tal como se declara cualquier otra variable estructura: especificando un puntero en lugar del nombre de la variable estructura.
```c
struct persona
{
  char nombre [30I ;
  int edad;
  int altura;
  int peso;
};
```
```c
struct persona empleado = { " Amigo, Pepe " , 47, 182, 85);
struct persona *p; /* se crea un puntero de estructura */
p = &empleado;
```
Cuando se referencia un miembro de la estructura utilizando el nombre de la estructura, se especifica la estructura y el nombre del miembro separado por u n punto (.). Para referenciar el nombre de una persona, utilice `empleado.nombre`. Se referencia una estructura utilizando el puntero estructura. Se utiliza el operador `->` para acceder a un miembro de ella.

**Ejemplo 10.9**
En este ejemplo se declara el tipo estructura `t-persona`, que se asocia con el tipo `persona` para facilidad de escritura. Un array de esta estructura se iniciali7a con campos al azar y se muestran por pantalla.
```c
#include <stdio.h>
struct tsersona
{ char nombre [ 3 0 1 ;
  int edad;
  int altura;
  int peso;
};
typedef struct tsersona persona;
void mostrar_persona(persona *ptr);
void main()
{ int i;
  persona empleados [ ] = { { "Mort i er, Pepe " , 47, 182, 851,
                            {"García, L u i s " , 39, 170, 7 5 } ,
                            {"Jiménez, Tom&s",18, 175, 801 } };
  persona *p; /* puntero a estructura */
  p = empleados;
  for (i = O ; i < 3; i++, p + + )
    mostrar_persona(p);
}
void mostrar_persona(persona *ptr)
{
  printf ("\nNombre: %s",ptr - > nombre) ;
  printf ("\tEdad: %d 'l,ptr - > edad);
  printf ("\tAltura: %d ",ptr - > altura) ;
  printf ("\tPeso: %d\n",ptr - > peso);
}
```
Al ejecutar este programa se visualiza la salida siguiente:
```
Nombre: Mortimer, Pepe Edad: 47 Altura: 180 Peso: 85
Nombre: Garcia, Luis Edad: 39 Altura: 170 Peso: 75
Nombre: Jiménez, Tomás Edad: 18 Altura: 175 Peso: 80
```