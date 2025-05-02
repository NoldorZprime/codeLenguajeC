---
title: Estructuras anidadas
description: A reference page in my new Starlight docs site.
---

"Una estructura puede contener otras estructuras llamadas estructuras anidadas.Las estructuras anidadas ahorran tiempo en la escritura de programas que utilizan estructuras similares. Se han de definir los miembros comunes sólo una vez en su propia estructura y a continuación utilizar esa estructura como un miembro de otra estructura. Consideremos las siguientes dos definiciones de estructuras:
```c
struct empleado
{
  char nombre-emp [ 3O I ;
  char direccion [25];
  char ciudad [ 2 O I ;
  char provincia [2O];
  long int cod-postal;
  double salario;
};
struct clientes
{
  char nombre_cliente[30];
  char direccion [ 2 5 I ;
  char ciudad[20];
  char provincia[201;
  long int cod-postal;
  double saldo;
} ;
```
Estas estructuras contienen muchos datos diferentes, aunque hay datos que están solapados. Así, se podría disponer de una estructura, `info-dir`, que contuviera los miembros comunes.
```c
struct info-dir
{
  char direccion[25] ;
  char ciudadL201;
  char provincia [2O];
  long int cod-postal;
};
```
Esta estructura se puede utilizar como un miembro de las otras estructuras, es decir, anidarse.
```c
struct empleado
{
  char nombre-emp [ 3 O ] ;
  struct info-dir direccion-emp;
  double salario;
};
struct clientes
{
```
304 Programación en C. Metodología, algoritmos y estructura de datos
```c
  char nombre_cliente[30];
  struct info-dir direccion-clien;
  double saldo;
};
```
Gráficamente se podrían mostrar estructuras anidadas en la Figura 9.2.

```
empleado:           cliente:
nombre-emp           nombre-cliente
direccion            direccion
ciudad               ciudad
provincia            provincia
| cod-po st a 1      | cod-postal
  i n f o-di r         i n f o-dir
salario              saldo
Figura 9.2. Estructuras anidadas.
```
## Ejemplo de estructuras anidadas

Se desea diseñar una estructura que contenga información de operaciones financieras. Esta estructura debe constar de un número de cuenta, una cantidad de dinero, el tipo de operación (depósito=O, retirada de fondos=l, puesta al día=2 o estado de la cuenta=3) y la fecha y hora en que la operación se ha realizado. A fin de realizar el acceso correcto a los campos día, mes y año, así como el tiempo (la hora y minutos) en que se efectuó la operación, se define una estructura `fecha` y una estructura `tiempo`. La estructura `registro-operacion` tiene como miembros una variable (un campo) de tipo `fecha`, otra variable del tipo `tiempo` y otras variables para representar los otros campos. La representación del tipo de operación se hace con una variable entera, aunque el tipo apropiado es un tipo enumerado (descrito en siguientes apartados). A continuación se declara estos tipos, se escribe una función que lee una operación financiera y devuelve la operación leída. La fecha y hora es captada del sistema.
```c
#include <stdio.h>
#include <dos.h>
struct registro-operation entrada();
struct fecha
{
  unsigned int mes, dia, anyo;
};
struct tiempo
{
  unsigned int horas, minutos;
};
struct registro-operacion
{
  long numero-cuenta;
  float cantidad;
  int tipo-operacion;
  struct fecha f ;
  struct tiempo t ;
};
int main()
{
  struct registro-operacion w;
```
Estructuras y uniones 305
```c
  w = entrada();
  printf ("\n\nOperaciCn realizada\n " ) ;
  print f ( 'I \ t% 1d\n",w . numero-cuent a ) ;
  printf("\t%d-%d-%d\n",w.f.dia,w.f.mes,w.f.anyo);
  printf ( " \ t%d:%d\n",w.t.horas,w.t.minutos ) ;
  return O ;
}
struct registro-operacion entrada0
{ struct time t ;
  struct date d;
  struct registro-operacion una;
  printf ("\nNÚmerode cuenta: " ) ;
  scanf ("%ld",&una.numero-cuenta) ;
  puts ("\n\tTipode operación ") ;
  puts("Deposito(0)");
  puts ( "Retirada de fondos (1)" ) ;
  puts('Puesta al dia(2)");
  puts ( "Estado de la cuenta ( 3 ) I' ) ;
  scanf ( "%d", &una.t ipo-operacion) ;
  / * Fecha y tiempo del sistema * /
  gettime (&t) ;
  una.t.horas = t.ti-hour;
  una.t.minutos = t.timin;
  getdate (&d);
  una.f.anyo = d.dajear;
  una.f.mes = d.darnon;
  una.f.dia = d.da-day;
  return una;
}
```
**Ejercicio**
Se desea registrar una estructura `PersonaEmpleado` que contenga como miembros los datos de una persona empleado que a su vez tenga los datos de la fecha de nacimiento. En un programa se muestra el uso de la estructura, se define una función para dar entrada a los datos de la estructura y otra finción para dar salida a los datos de una estructura persona. A la función de entrada se transmite por dirección ( `& p` ) la variable estructura, por lo que el argumento correspondiente tiene que ser un puntero( `*p` ) y el acceso a los campos se hace con el selector `->`
```
I persona-Empleado I
I fecha I
#include <stdio.h>
struct fecha
{
  unsigned int dia, mes, anyo;
};
-
[i-- 7!
```
306 Programación en C. Metodología, algoritmos y estructura de datos
```c
struct persona {
  char nombre [ 2 O 1 ;
  unsigned int edad;
  int altura;
  int peso;
  struct fecha fec;
};
struct persona-empleado
{ struct persona unapersona;
  unsigned int salario;
  unsigned int horas_por-semana;
};
/ * prototipos de funciones * /
void entrada(struct persona-empleado *p);
void muestra(struct persona-empleado up);
void main()
{ / * define una variable persona-empleado * /
  struct persona-empleado p;
  / * llamada a entrada() transmitiendo la direccion * /
  entrada(&p);
  / * salida de los datos almacenados * /
  muestra(p);
}
void entrada(struct persona-empleado *p)
{
  printf ("\nIntroduzca su nombre: " ) ;
  gets(p->unapersona.nombre);
  printf ( "introduzca su edad: " 1 ;
  scanf ("%d", &p->unapersona.edad) ;
  printf ("Introduzca su altura: " ) ;
  scanf ( "%d", &p->unapersona.altura) ;
  printf ('Introduzca su peso: " ) ;
  scanf ( "%d", &p->unapersona.peso) ;
  printf("1ntroduzca su fecha de nacimiento: " ) ;
  scanf ( "%d %d %d",&p->unapersona.fec.dia,
         &p->unapersona.fec.mes,
         &p->unapersona.fec.anyo);
  printf ( "Introduzca su salario:") ;
  scanf ("%d",&p->salario) ;
  printf ("introduzca numero de horas: " ) ;
  scanf ( "%d", &p->horas-por-semana) ;
}
void muestra(struct persona-empleado up)
{ puts ( "\n\n\tDatos de un empleado" ) ;
  print€("Nombre: %s \n",up.unapersona.nombre);
  printf("Edad: %d \n",up.unapersona.edad);
  printf("fecha de nacimiento: %d-%d-&d\n",
         up.unapersona.fec.dia,
         up.unapersona.tec.mes,
         up.unapersona.fec.anyo);
  printf("A1tura: %d \ n " , u p . u n a p e r s o n a . a I t u r d ) ;
  printf("Peso: %d \n",up.unapersona.peso);
  printf("Numero de horas: %d \n",up.horas-por-semana);
  puts ("\n\n\t " ) ;
  P- '.
```
Estructuras y uniones 307
```
up.unapersona.fec.dia,
up.unapersona.tec.mes,
up.unapersona.fec.anyo);
printf("A1tura: %d \ n " , u p . u n a p e r s o n a . a I t u r d ) ;
printf("Peso: %d \n",up.unapersona.peso);
printf("Numero de horas: %d \n",up.horas-por-semana);
}
```
El acceso a miembros dato de estructuras anidadas requiere el uso de múitiples operadores punto. Ejemplo: acceso ai áía del mes de la fecha de nacimiento de un e
```c
up.unapercona.Eec.dka
```
Las estructuras se pueden anidar a cualquier grado. También es posible inicializar estructuras anidadas en la definición. El siguiente ejemplo inicializa una variable `Luis` de tipo `struct persona`.
```c
struct persona Luis { " L u i s " , 25, 1940, 40, (12, 1, 701);";
```"