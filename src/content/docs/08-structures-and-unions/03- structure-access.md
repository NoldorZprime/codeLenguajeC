---
title: Acceso a estructuras
description: A reference page in my new Starlight docs site.
---

"Cuando se accede a una estructura, o bien se almacena información en la estructura o se recupera la información de la estructura. Se puede acceder a los miembros de una estructura de una de estas dos formas: 1 ) utilizando el operador punto (.), o bien 2) utilizando el operador puntero ->.

## Almacenamiento de información en estructuras

Se puede almacenar información en una estructura mediante inicialización, asignación directa o lectura del teclado. El proceso de inicialización ya se ha examinado, veamos ahora la asignación directa y la lectura del teclado.

### Acceso a una estructura de datos mediante el operador punto

La asignación de datos a los miembros de una variable estructura se hace mediante el operador punto. La sintaxis en C es:
`<nombre variable estructura> . <nombre miembro> = datos;`
m
Estructuras y uniones 301
Algunos ejemplos:
```c
strcpy(cd1.titulo,"Granada");
cdl.precio = 3450.75;
cdl.num-canciones = 7;
```
El operador punto proporciona el camino directo al miembro correspondiente. Los datos que se almacenan en un miembro dado deben ser del mismo tipo que el tipo declarado para ese miembro. En el siguiente ejemplo se lee del teclado los datos de una variable estructura `corredor`:
```c
struct corredor cr;
printf ( "Nombre: " ) ;
gets(cr.nombre);
printf ( "edad: " ) ;
scanf ( "%d", &cr .edad) ;
printf ( "Sexo: " ) ;
scanf ( "%c", &cr.sexo);
printf ( "Club: " ) ;
gets(cr.club);
if (cr.edad <= 18)
  cr .categoria = " Juvenil " ;
elseif (cr.edad <= 40)
  cr.categoria = "Senior";
else
  cr.categoria = 'Veterano";
```

## Acceso a una estructura de datos mediante el operadorpuntero

El operador puntero, `->`, sirve para acceder a los datos de la estructura a partir de un puntero. Para utilizar este operador se debe definir primero una variable puntero para apuntar a la estructura. A continuación, utilice simplemente el operador puntero para apuntar a un miembro dado.

La asignación de datos a estructuras utilizando el operador puntero tiene el formato:
`<puntero estructura> - > <nombre miembro> = datos;`
Así, por ejemplo, una estructura `estudiante`
```c
struct estudiante
{ char Nombre [ 41I ;
  int Num-Estudiante;
  int Anyo-de-matricula;
  float Nota;
};
```
Se puede definir `ptr-est` como un puntero a la estructura
```c
struct estudiante *ptr-est;
struct estudiante mejor;
```
A los miembros de la estructura `estudiante` se pueden asignar datos como sigue (siempre y cuando la estructura ya tenga creado su espacio de almacenamiento, por ejemplo, con `malloc ( )` ; o bien, tenga la dirección de una variable estructura).
```c
ptr-est = &mejor; / * ptr-est tiene la direcciÓn(apunta a) mejor * /
strcpy(ptr-est->Nombre, "Pepe alomdra");
ptr-est - > Num-Estudiante = 3425;
ptr-est - > Nota = 8.5;
```
302 Programación en C. Metodología, algoritmos y estructura de datos

**Nota**
Previamente habría que crear espacio de almacenamiento en memoria; por ejemplo, con la función `malloc ( )`.

## Lectura de información de una estructura

Si ahora se desea introducir la información en la estructura basta con acceder a los miembros de la estructura con el operador punto o flecha (puntero). Se puede introducir la información desde el teclado o desde un archivo, o asignar valores calculados.

Así, si `z` es una variable de tipo estructura `complejo`, se lee parte real, parte imaginaria y se calcula el módulo:
```c
st ruct complejo
{ float pr;
  float pi;
  float modulo;
};
struct complejo z;
printf ("\nParte real: " ) ;
scanf ("%í",&z.pr);
printf ("\nParte imaginaria: " ) ;
scanf ("%f",&z.pi);
/ * calculo del módulo * /
z.modulo = sqrt(z.pr*z.pr + z.pi*z.pi);
```
## Recuperación de información de una estructura

Se recupera información de una estructura utilizando el operador de asignación o una sentencia de salida (`printf ( )`, `puts ( )`, ...). Igual que antes, se puede emplear el operador punto o el operador flecha (puntero). El formato general toma uno de estos formatos:
```
1. <nombre variable> =
   <nombre variable estructura>.<nombre miembro>;
o bien
   <nombre variable> =
   <puntero de estructura> - > <nombre miembro>;
2 .para salida:
o bien
   printf(" " ,<nombre variable estructura>.<nombre miembro>);
   printf(" ",<punterode estructura> - > <nombre miembro>);
```
Algunos ejemplos del uso de la estructura `complejo`:
```c
float x , y ;
struct complejo z;
struct complejo *pz;
```
Estructuras y uniones 303
```c
pz = &z;
x = z.pr;
y = z.pi;
. . .
printf("\nNÚmero complejo (%.lf,%.lf),módulo: %.2f",
       pz->pr,pz->pi,pz->modulo);
```"