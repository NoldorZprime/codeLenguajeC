---
title: Estructuras como parámetros
description: A reference page in my new Starlight docs site.
---

"C permite pasar estructuras a funciones, bien por valor o bien por referencia utilizando el operador &.
Si la estructura es grande, el tiempo necesario para copiar un parámetro `struct` a la pila puede ser prohibitivo. En tales casos, se debe considerar el método de pasar la dirección de la estructura.

El listado siguiente muestra un programa que pasa la dirección de una estructura a una función para entrada de datos. La misma variable estructura la pasa por valor a otra función para salida de los campos.
```c
#include <stdio.h>
/ * Define el tipo estructura infogersona * /
struct info-persona {
  char nombre [ 2 O I ;
  char calle[30];
  char ciudadL251;
  char provincia[25];
  char codiqopostal[ól;
};
/ * prototipos de funciones * /
void entrad_pna(struct infogersona* pp);
void ver-info(struct infogersona p);
void main (void)
{
  struct info-persona reg-dat;
  / * Pasa por referencia la variable * /
  entradgna(&reg-dat);
  / * Pasa por valor * /
  ver-info(reg-dat);
```
310 Programación en C. Metodología, algoritmos y estructura de datos
```c
  printt( "\nPulsa cualquier carácter para continuar\n");
  getchar ( ) ;
}
void entrad_pna(struct infogersona" pp)
{ puts("\n Entrada de los datos de una persona\n");
  printf ( "Nombre: 'I) ; gets (pp - >nombre);
  printf ("Calle: " ) ; gets (pp->calle);
  printf ( "Ciudad: " ) ; gets (pp->ciudad);
  printf ( "Provincia: " ) ; gets (pp - >provincia);
  printf ( "Código postal: " ) ; gets (pp->codigopostal);
  / * Para aceder a los campos se utiliza el selector - > * /
}
void ver-info(struct into-persona p )
{
  puts('\n\tInformación realativa a la persona " );
  puts (p.nombre);
  puts ( p .calle) ;
  puts ( p .ciudad);
  puts (p.provincia);
  puts (p.codigoposta1);
}
```
Si se desea pasar la estructura por referencia, necesita situar un operador de referencia `&` antes de `reg - dat` en la llamada a la función `e n t r a d a s n a ( )`. El parhetro de ser tipo puntero `s t r u c t i n f o q e r s o n a * pp`.El acceso a miembro a partir de un puntero requiere el uso del selector `->`."