---
title: La función free()
description: A reference page in my new Starlight docs site.
---

Cuando se ha terminado de utilizar un bloque de memoria previamente asignado por `mal l o c ( )`, u otras funciones de asignación, se puede liberar el espacio de memoria y dejarlo disponible para otros usos, mediante una llamada a la función `free ( )`. El bloque de memoria suprimido se devuelve al espacio de almacenamiento libre, de modo que habrá más memoria disponible para asignar otros bloques de memoria. El formato de la llamada es
```c
free (puntero)
```
Así, por ejemplo, para las declaraciones
```c
1. int *ad;
   ad = (int*)malloc(sizeof(int));
2. char *adc;
   adc = (char*) malloc (lOO*sizeof(char)) ;
```
el espacio asignado se puede liberar con las sentencias
```c
free(ad);
```
Y
```c
free (adc);
```

**Sintaxis de Wads a free ( )**
```
tipo *puntero;
free (puntero);
```
La variable puntero puede apuntar a una dirección de memoria de cuaiquier tipo.

```
Prototipo que incluye free ( 1
void free(void * ) ;
...
Figura 11.5. Sintaxis (formato) de la función Free ( ) .
```

**Ejemplo 11.4**
En este ejemplo se reserva memoria para un array de 10 estructuras; después se libera la memoria reservada.
```c
struct gato *pgato; / * declara puntero a la estructura gato * /
pgato = (struct gato*)malloc(lO*sizeof(struct gato));
if (pgato == NULL)
  puts ( " Memoria agotada " ) ;
else
{
  . . .
  free (pgato); / * Liberar memoria asignada a pgato * /
}
```