---
title: Reglas de asignación de memoria
description: A reference page in my new Starlight docs site.
---

Como ya se ha comentado se puede asignar espacio para cualquier objeto dato de C. Las reglas para utilizar las funciones `malloc ( )`, `cal 1 oc ( )`, `realloc ( )` y `free ( )` como medio para obtenerAiberar espacio libre de memoria son las siguientes:

1.  El prototipo de las funciones esta en `stdlib.h`.
    ```c
    #include <stdlib.h=
    int* datos;
    datos = (int*)malloc(sizeof(int));
    . . .
    ```
2.  Las funciones `malloc ( )`, `calloc í )`, `rcdlloc ( )` devuelven el tipo `void*`, lo cual exige hacer una conversión al tipo del puntero.
    ```c
    #include <stdlib.h>
    void main ( )
    {
      double* vec;
      int n;
      vec = (double*)calloc(n,sizeof(doiible));
    }
    ```
3.  Las funciones de asignación tienen como argumento el número de bytes a reservar.

4.  El operador `sizeof` permite calcular el tamaño de un tipo de objeto para el que está asignando memoria.
    ```c
    struct punto
    {
      float x , y , z ;
    };
    struct punto*p = (struct punto*)malloc(sizeof(struct punto));
    ```
5.  La función `realloc ( )` permite expandir memoria reservada.
    ```c
    #include <stdlib.h>
    int *v=NULL;;
    int n;
    scanf ("%d",&n);
    v = (int*)realloc(v,n);
    v = (int*)realloc(v,2*n);
    ```
    Asignación dinámica de memoria 375

6.  Las funciones de asignación de memoria devuelven `NULL` si no han podido reservar la memoria requerida.
    ```c
    double* v;
    v = malloc(l000*sizeof(double));
    if (v == NULL)
    { puts ("Error de asignación de memoria." ) ;
      exit( - 1);
    }
    ```
7.  Se puede utilizar cualquier función de asignación de memoria para reservar espacio de objetos más complejos, tales como estructuras, arrays, en el almacenamiento libre.
    ```c
    #include <stdlib.h>
    struct complejo
    { float x,y;
    };
    void main()
    { struct complejo* pz;
      int n;
      scanf/"%d",&n) ;
      / * Puntero a estructura complejo * /
      / * Asigna memoria para un array de tipo complejo * /
      pz = (struct complejo *)calloc(n,sizeof(struct complejo));
      if (pz == NULL)
      { puts ("Error de asignación de memoria. ") ;
        exit( - 1);
      }
    }
    ```
8.  Se pueden crear arrays multidimensionales de objetos con las funciones de asignación de memoria. Para un array bidimensional n x m, se asigna en primer lugar memoria para un array de punteros (de IZ elementos), y después se asigna memoria para cada fila ( m elementos) con un bucle desde O a n- 1.
    ```c
    #include <stdlib.h>
    double **mat;
    int n,m,i;
    mat = (double**)malloc(n*sizeof(double*));/*array de punteros * /
    for (i=O; i<n; i++)
    { mat[i]=(double*)malloc(m*sizeof(double));/*fila de m elementos * /
    }
    ```
9.  Toda memoria reservada con alguna de las funciones de asignación de memoria se puede liberar con la función `free ( )`. Para liberar la memoria de la matriz dinámica `mat`:
    ```c
    double **mat;
    for (i=O; i<n; i++)
    { free(mat[i] ) ;
    }
    ```