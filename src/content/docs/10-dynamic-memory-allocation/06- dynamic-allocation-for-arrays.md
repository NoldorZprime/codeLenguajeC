---
title: Asignación dinámica para arrays
description: A reference page in my new Starlight docs site.
---

"La gestión de listas y tablas mediante arrays es una de las operaciones más usuales en cualquier programa. La asignación de memoria para arrays es, en consecuencia, una de las tareas que es preciso conocer en profundidad. para asignar memoria a un array de cadenas de longitud variable.
El listado de `ASIGCADS .c` muestra cómo se puede utilizar la función `malloc ()` para asignar memoria a un array de cadenas de longitud variable.


**Ejemplo 11.7**

El programa `ASIGCADS . c` lee `n` líneas de texto, reserva memoria según la longitud de la línea leída, cuenta las vocales de cada línea e imprime cada línea y el número de vocales que tiene.
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#define N 10
void salida(char*[N], int*);
void entrada(char*[N]);
int vocales (char*);
int main ( )
{
  char *cad[N];
  int j, voc[N] ;
  entrada (cad);
  / * Cuenta de vocales por cada linea * /
  for (j = O ; j<N; j++)
    voc[j] = vocales(cad[j]);
  salida(cad, voc) ;
  return O ;
}
void entrada(char* cd[N])
{ char B[121];
  int j, tam;
  printf("\n\tEscribe %d lineas de texto\n",N);
  for (j = 0; j<N; j++)
  { gets ( B ) ;
    tam = (strlen(B)+l)*sizeof(char);
    cd[j] = (char*)malloc(tam);
    strcpy(cd[j] ,B);
  }
}
int vocales (char* c)
{ int k, j;
  for (j=k = O ; jistrlen(c); j t t )
    / * Cuenta vocales de la cadena c * /
    switch (tolower(*(c+j)))
    { case 'a': ;
      case 'e':;
      case 'i' :;
      case 'o':;
      case 'u': k + t ;
    }
  return k;
}
void sallda(char* cd[N], int* v )
{ int j ;
  puts ("\n\tSalidade las lineas junto d l numero de vocales") ;
  for (j = O ; jiN; j + + )
  { printf ("%s : %2d\n",cd[j], v [ j ] ) ;
  }
}
```
Asignación dinámica de memoria-1369 E
El programa declara `char *cad [ N ]` como array de punteros a `char`,de tal forma que en la función `entrada ( )` se reserva memoria, con `mailoc ( )`, para cada línea de texto.

## Asignación de memoria interactivamente

El programa `ASIGMEM.c` muestra cómo se puede invocar a `calloc í )` para asignar memoria para un array. Cuando se ejecuta el programa, se pide al usuario teclear el tamaño de un array, y si se contesta adecuadamente el programa genera un array de números enteros aleatorios. A su vez, genera otro array con los mismos valores pero sin duplicidades; este segundo array se crea dinámicamente con la función `realloc ( )`. La estrategia para reservar memoria es llamar a `redlloc ( )` para expandir el array cada 10 valores; es decir, primero se asigna memoria para 10 valores y cuando se ha completado se asignan otros 10 y así sucesivamente.
```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#define S 10
#define NUM 99
struct array
{ int *v; / * puntero al array * /
  int n; / * numero de elementos del iirrdy * /
};
typedef struct array v e c t o r ; / * dcclaracion del nuevo tipo: vector * /
void gen-array(vector* inic); / * q e n e r c i drray con n valores * /
void nuevo-array(vector inic, vector* nd); / * genera nuevo
                                             vcctor sin diipli.cados * /
```
370 Programación en C. Metodología, algoritmos y estructura de datos
```c
void escribe-array(vector w);
int main0
{ vector prim, dest;
  do {
    printf("\nNumero de elementos del array: " ) ;
    scanf ("%d",&prim.n);
  }while (prim.n<l);
  randomize ( ) ;
  gen-array(&prim);
  escribe-array (prim);
  nuevo-array(prim,&dest);
  escribe-array(dest) ;
  return O ;
}
void gen-array(vector* inic)
{ int k;
  inic->v = (int*)calloc(inic->n,sizeof(int));/*reserva memoria * /
  f o r (k = O ; k< inic->n; k++)
    inic->v[k] = random(NUM)+l; / * genera valores enteros de 1 a NUM * /
}
void escribe-array(vector w)
{ int k;
  printf("\n\t Valores que contiene el vector\n");
  for (k = O ; k< w.n; k++)
    printf('%d%c',w.v[k],(ktl)%19==0?'\n':' ');/*cada 19 enteros salta
                                                    de linea*/
}
void nuevo-array(vector inic, vector* nd)
{ int k,tam;
  / * Reserva inicial de memoria para 10 valores * /
  nd->v = NULL;
  tam = sizeof(int)*S;
  nd->v = (int*)realloc (nd->v,tam) ;
  / * copia el primer elemento * /
  nd->v[O] = inic.v[O];
  nd->n = 1;
  / * copia los demas elementos si no estan ya en el array.
   * Cuenta los elementos copiados para reservar memoria * /
  f o r (k = 1; k< inic.n; k t + )
  { int j , dup;
    j=dup= O ;
    while ( (j<nd->n) && !dup)
    { dup = inic.v[k]==nd->v[j++];
    }
    if ( !dup)
    { if (nd->n%S == O ) / * amplid memoria * /
      { tarn += sizeof(int)*S;
        nd->v =(int*)realloc(nd->v,tam);
      }
      / *
       * asigna el elemento. Los indices en C estan en el rango de O a n-1, por
       * esa raion se dsiqna y despues se incrementa.
       * /
      nd->v[nd->n++] = inic.v[k];
    }
  }
}
```
-.-
Asignación dinámica de memoria 371

## Asignación de memoria para un array de estructuras

El programa `ASIGNA ES.^` define varios modelos de estructuras para representar u n curso de perfeccionamiento, al que asisten varios alumnos de diversos departamentos de una empresa. Se declara una estructura `persona`,una estructura `alumno`,otra `profesor` y la estructura `curso`.Un alumno es una persona y los campos `depdrtamento` y `nivel`.El profesor es una persona y el campo `expe` años de experiencia. El curso consta de `N` alumnos y un profesor,además del número de días de duración y la descripción del curso. El programa utiliza funciones de asignación de memoria dinámica para asignar memoria que contenga las cadenas de caracteres y un array de `N` estructuras `al umno`;define una función que recibe una cadena y reserva memoria para contener la cadena; la función de biblioteca `strcpy( )` se utiliza para copiar una constante de cadena en la memoria reservada. El programa da entrada a los datos referidos anteriormente y visualiza el contenido del curso.
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
typedef struct persona
{ char* nom;
  int edad;
  char* dir;
} PERSONA;
typedef struct dlumno
{ PERSONA p;
  char* depar;
  short nivel;
}ALUMNO;
typedef struct profesor
{ PERSONA p;
  short expe;
} PROFESOR;
struct curso
{ ALUMNO* ptral;
  PROFESOR* pf;
  char* descrip;
  short dias;
  short n; / * Numero de dlumnos del curso * /
};
char* asigcad(void);
PERSONA* asigper(void);
PROFESOR* asigprof(void);
ALUMNO* asigalms(short n);
int main()
{ struct curso dom;
  int J ;
  printf("\n\tCurso de perfeccionamiento.\nDescripcion del curso: " ) ;
  dom.descrip = asigcad();
  printf ("Dias lectivos del curso: " ) ;
  scanf ("%d%*c",&dom.dias) ;
  printf("\t Datos del profesor del curso.\n");
  dom.pf = asigprof();
  printf('\t Numero de alumnos del curso: " ) ;
  scanf ("%d%*c",&dom.n);
  dom.ptra1 = asigalms(dom.n);
  / * Mustra de los datos del curso * /
  printf ("\n\n\t\tCurso: %s\n",dom.descrip);
  print f ( " \ t Profesor :
  printf('\tRelacion de asistentes al curso\n");
  for (j = O ; j<dom.n; I + + )
  { printf ("\t\t-- " ) ;
    printf ("\t\t%s\n",(dom.ptral+j)->p.nom);
  }
  return O ;
}
char* asigcad ( )
{ char b[1211, *cd;
  gets (b);
  cd = (char*) malloc ( (strlen(b)+1)*sizeof (char)) ;
  if (cd == NULL)
  { puts("\n\t!! Error de dsignacion de memoria, fin de ejecucion.! ! " ) ;
    exit( - 1);
  }
  strcpy (cd,b) ;
  return cd;
}
PERSONA* asigpero
{ PERSONA* p;
  p = (PERSONA*)malloc(sizeof(PERSONA)) ;
```
11.6.
~-
Asignación dinámica de memoria
```c
  printf ("\nNombre: " ) ; p->nom = asigcad() ;
  printf ( "Edad: " ) ; scanf ("%d%*c",&p - >edad) ;
  printf ("Direccion: " ) ; p->dir = asigcad();
  return p;
}
PROFESOR* asigprofo
{ PROFESOR* t;
  t =(PROFESOR*)malloc(sizeof(PERSONA));
  t ->p = *asigper();
  printf ( " \ n A f i o s de experiencia: " ) ;
  scanf ("%d%*c", &t->expe);
  return t ;
}
ALUMNO* asigalms(short n)
{ int j;
  ALUMNO* a;
  a = (ALUMNO*)calloc(n,sizeof(ALUMNO));
  if (a == NULL)
  { puts('\n\t! !Error de asignacion de memoria, fin de ejecucion.!!');
    exit ( - 1);
  }
  / * Entrada de datos de cada alumno * /
  for ( j = O ; j<n; j++)
  { (a+j)->p = *asigper();
    printf("Departamento al que pertenece: " ) ;
    (a+j)->depar = asigcad();
    printf ( " Nivel en que se encuentra: " ) ;
    scanf ("%d%*c",&(a+j)->nivel);
  }
  return a;
}
```