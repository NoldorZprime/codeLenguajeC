---
title: Flujos
description: A reference page in my new Starlight docs site.
---


"Un flujo (stream) es una abstracción que se refiere a un flujo o corriente de datos que fluyen entre un  
origen o fuente (productor) y un destino o sumidero (consumidor). Entre el origen y el destino debe  
existir una conexión o canal (<<pipe.) por la que circulen los datos. La apertura de un archivo supone  
establecer la conexión del programa con el dispositivo que contiene al archivo, por el canal que  
comunica el archivo con el programa van a fluir las secuencias de datos.  

Hay tres flujos o canales abiertos automáticamente:  
extern F I L E *stdin;  
extern FILE *stdout;  
extern FILE *stderr;  

Estas tres variables se inicializan al comenzar la ejecución del programa para admitir secuencias de  
stdin  
stdout  
stderr  

Así cuando se ejecuta `printf("Calle Mayor 2.");` se escribe en `stdout`, en pantalla; si se  
desea leer una variable entera con `scanf("%d",&x);` se captan los dígitos de la secuencia de entrada  
`stdin`.  

El acceso a los archivos se hace con un buffer intermedio. Se puede pensar en el buffer como un  
array donde se van almacenando los datos dirigidos al archivo, o desde el archivo; el buffer se vuelca  
cuando de una forma u otra se da la orden de vaciarlo. Por ejemplo, cuando se llama a una función para  
leer del archivo una cadena, la función lee tantos caracteres como quepan en el buffer. A continuación  
se obtiene la cadena del buffer; una posterior llamada a la función obtendrá la siguiente cadena del buffer  
y así sucesivamente hasta que se quede vacío y se llene con una llamada posterior a la función de lectura.  

El lenguaje C trabaja con archivos con buffer, y está diseñado para acceder a una amplia gama de  
dispositivos, de tal forma que trata cada dispositivo como una secuencia, pudiendo haber secuencias de  
caracteres y secuencias binarias. Con las secuencias se simplifica el manejo de archivo en C."
