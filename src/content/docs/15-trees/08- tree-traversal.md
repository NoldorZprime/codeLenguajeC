---
title: Recorrido de un árbol
description: A reference page in my new Starlight docs site.
---

Para visualizar o consultar los datos almacenados en un árbol se necesita recorrer el árbol o visitar los
nodos del mismo. Al contrario que las listas enlazadas, los árboles binarios no tienen realmente un
primer valor, un segundo valor, tercer valor, etc. Se puede afirmar que el raíz viene el primero, pero
¿,quiénviene a continuación? Existen diferentes métodos de recorrido de árbol ya que la mayoría de las
aplicaciones binarias son bastante sensibles al orden en el que se visitan los nodos, de forma que será
preciso elegir cuidadosamente el tipo de recorrido.
Un recorrido de un árbol binario requiere que cada nodo del árbol sea procesado (visitado) una
vez y sólo una en una secuencia predeterminada. Existen dos enfoques generales para la secuencia de
recorrido, profundidad y anchura.
En el recorrido en profundidad, el proceso exige un camino desde el raíz a través de un hijo, al
descendiente más lejano del primer hijo antes de proseguir a un segundo hijo. En otras palabras, en el
recorrido en profundidad, todos los descendientes de un hijo se procesan antes del siguiente hijo.
En el recorrido en anchura, el proceso se realiza horizontalmente desde el raíz a todos sus hijos,
a continuación a los hijos de sus hijos y así sucesivamente hasta que todos los nodos han sido
procesados. En otras palabras, en el recorrido en anchura, cada nivel se procesa totalmente antes de que
comience el siguiente nivel.
El recorrido de un árbol supone visitar cada nodo sólo una vez.
Dado un árbol binario que consta de un raíz, un subárbol izquierdo y un subárbol derecho se pueden
definir tres tipos de secuencia de recorrido en profundidad. Estos recorridos estándar se muestran en la
Figura 16.21.
Su bárbol Subárbol Su bárbol Subárbol Subárbol Subárbol
izquierdo derecho izquierdo derecho izquierdo derecho
(a) Recorrido preorden (b) Recorrido en orden (c) Recorrido postorden
Figura 16.21. Recorridos de árboles binarios
Árboles 519
La designación tradicional de los recorridos utiliza un nombre para el nodo raíz (N), para el subárbol
Según sea la estrategia a seguir, los recorridos se conocen como enorden (inorder),preorden
Preorden (nodo - izquierdo - derecho) (NID)
Enorden (izquierdo - nodo - derecho) (IND)
Postorden (izquierdo - derecho - nodo) (IDN)
izquierdo (I) y para el subárbol derecho (DI.
@reorder) y postorden (postorder)

## Recorrido preorden

El recorrido preorden' (NID) conlleva los siguientes pasos, en los que el raíz va antes que los subárboles:

1.  Recorrer el raíL (N).
2.  Recorrer el subárbol izquierdo ( I ) en preorden.
3.  Recorrer el subárbol derecho (D) en preorden.
    Dado las características recursivas de los árboles, el algoritmo de recorrido tiene naturaleza
    recursiva. Primero, se procesa la raíz, a continuación el subárbol izquierdo y a continuación el subárbol
    derecho. Para procesar el subárbol izquierdo, se hace una llamada recursiva al procedimiento preorden
    y luego se hace lo mismo con el subárbol derecho. El algoritmo recursivo correspondiente para un árbol
    T es:
    si T no es vacio entonces
    inicio
    v e r los datos en el r a i / de T
    Preorden (subarbol i/quierdo del r r i l z de T )
    Preorden (subarbol derecho del r d i L de T )
    fin

## Regla

    En el recorrido preorden, el raíz se procesa antes que los subárboles izquierdo y derecho.
    Si utilizamos el recorrido preorden del árbol de la Figura 16.22 se visita primero el raíz (nodo A ).
    A continuación se visita el subárbol izquierdo de A, que consta de los nodos B , D y E . Dado que el
    subárbol es a su vez un árbol, se visitan los nodos utilizando el orden N I D . Por consiguiente, se visita
    primero el nodo B , después D (izquierdo) y, por último, E (derecho).
    Camino A, 6,0, E, C, F, G
    A
    3 4 6 7
    Figura 16.22. Recorrido preorden de un árbol binario.
    ' El noiribrc p r w r ú r / i . viene del prefijo latino prc qiic signilica (\<irantes»
    520 Programación en C. Metodología, algoritmos y estructura de datos
    A continuación se visita el subárbol derecho de A , que es un árbol que contiene los nodos c , F y
    G . De nuevo siguiendo el orden NID, se visita primero el nodo C,a continuación F (izquierdo) y, por
    Último, G (derecho). En consecuencia el orden del recorrido preorden para el árbol de la Figura 16.22 es
    A - B - D - E - C - F - G.
    Un refinamiento del algoritmo es:
    algoritmo preOrden (val rai7 \<puntero nodos\>)
    Recorrer un arbol binario en secuencia nodo-izdo-dcho
    Pre raiz es el nodo de entrada del árbol o subárbol
    Post cada nodo se procesa en orden
    1 si (raiz no es nulo)
    1 procesar (raiz)
    2 preOrden (raiz - \> cubarbolTzdo)
    3 preOrden (raiz - \> subarbolDcho
    2 return
    La función preorden muestra el código fuente en C del algoritmo ya citado anteriormente. El tipo j
    de los datos es entero.
    typedef int TipoElemento;
    struct nodo {
    TipoElemento datos;
    struct nodo \*hijo-izdo, \*hijo-dcho;
    } ;
    typedef struct nodo Nodo;
    void preorden (Nodo \* p )
    I
    if ( P )
    i
    printf ("%d " , p - \> ddtos) ;
    PreOrden(p - \> hijo-izdo);
    PreOrden(p - \> hijo-dcho);
    1
    1
### Gráficas de las llamadas recursivas de preorden
    El recorrido recursivo de un árbol se puede mostrar gráficamente por dos métodos distintos: 1 ) paseo
    preorden del árbol; 2) recorrido algorítmico.
    Un medio gráfico para visualizar el recorrido de un árbol es imaginar que se está dando un «paseo»
    alrededor del árbol comenzando por la raíz y siguiendo el sentido contrario a las agujas del reloj, un
    nodo a continuación de otro sin pasar dos veces por el mismo nodo. El camino señalado por una línea
    continua que comienza en el nodo 1 (Fig. 16.21 ) muestra el recorrido preorden completo. En el caso de
    la Figura 16.22 el recorrido es A H D E C F G.
    El otro medio gráfico de mostrar el recorrido algorítmico recursivo es similar a las diferentes etapas
    del algoritmo. Así la primera llamada procesa la raíz del árbol A . A continuación se llama recursivamente
    a procesar subárbol izquierdo, procesa el nodo B. La tercera llamada procesa el nodo D,que es un
    subárbol formado por un único nodo. En ese punto, se llama en preorden, con un puntero nulo, q u e
    produce un retorno inmediato al subárbol U para procesar a su subárbol derecho. Debido a que el
    subárbol derecho de D es también nulo, se vuelve al nodo B de modo que va a procesar (visitar) su
    subárbol derecho, E. Después de procesar el nodo E, se hacen dos llamadas más, una con el puntero
    izquierdo null de E y otra con su puntero derecho null. Como el subárbol R ha sido totalmente procesado,
    se vuelve a la raíz del árbol y se procesa su subárbol derecho, C. Después de procesar C , llama para
    procesar su subárbol izquierdo F'. Se hacen dos llamadas con null, vuelve al nivel donde está el nodo c
    para procesar su rama derecha G . Aún se realizan dos llamadas más, una al subárbol izquierdo null y otra
    al subárbol derecho. Entonces se retorna en el árbol, se concluye el recorrido del árbol.
    Árboles 521
## Recorrido enorden
    El recorrido en orden (inorder) procesa primero el subárbol izquierdo, después el raíz y a continuación
    el subárbol derecho. El signiticado de in es que la raíz se procesa entre los subárboles. Si el árbol no está
    vacío, el método implica los siguientes pasos:
4.  Recorrer el subjrbol izquierdo (1)en inorden.
5.  Visitar el nodo raíz (N).
6.  Recorrer el subárbol derecho ( I ) ) en inorden.
    El algoritmo correspondiente es:
    Enorden(A)
    si el arbol no esta vacio e n t o n c e s
    Recorrer el subarbol i z q u i erdo
    Visitar el nodo r a i z
    Recorrer el subarbol derecho
    inicio
    fin
    U n refinamiento del algoritmo es:
    algoritmo enorden (vdl rai z \< p u r i L e r o cinodos\>)
    Recorrer un &,bol binario en la secuencia izquierdo-nodo-derecho
    pre raíz en el nodo de entradd de un árbol o subárbol
    post cada nodo se ha de p r - o c e s d r en orden
    1 si (raíz no es n u l o )
    1 enorden (raiz - \> subarbol I z y i i i erdo)
    2 procesar (raiz)
    3 enorden (rdi z\~-siibiirbolDerecho)
    2 r e t o r n o
    f i n enorden
    En el árbol de la Figura 16.23, los nodos se han numerado en el orden en que son visitados durante
    el recorrido enorden. El primer subárbol recorrido es el subárbol izquierdo del nodo raíz (árbol cuyo
    nodo contiene la letra 5.Este subárbol consta de los nodos 5 , D y E y es a su vez otro árbol con el nodo
    B como raíz, por lo que siguiendo el orden IND,se visita primero D , a continuación B (nodo raíz) y,
    por último, E (derecha). Después de la visita a este subárbol izquierdo se visita el nodo raíz A y, por
    Último, se visita el subárbol derecho que consta de los nodos c , F y G . A continuación, siguiendo el
    orden IND para el subárbol derecho, se visita primero F , después c (nodo raíz) y, por Último, G . Por
    consiguiente, el orden del recorrido inorden de la Figura 16.23 es D - B - E - A - F - C - G.
    i
    1 3 5 7
    Figura 16.23. Recorrido enorden de un árbol binario.
    522 Programación en C.Metodología, algoritmos y estructura de datos
    La siguiente función visita y escribe el contenido de los nodos de un árbol binario de acuerdo al
    recorrido EnOrden.La función tiene como parámetro un puntero al nodo raíz del árbol.
    void enorden (Nodo \*p)
    I
    if (P)
    1
    enorden(p -\> hijo-izqdo);
    printf ("%d ",p - \> datos) ;
    enorden (p -\> hijo-dcho);
    / \* recorrer subárbol izquierdo \* /
    / \* visitar la raíz \* /
    / \* recorrer subárbol derecho \* /
## Recorrido postorden
    El recorrido postorden (IDN) procesa el nodo raíz (post) después de que los subárboles izquierdo y
    derecho se han procesado. Se comienza situándose en la hoja más a la izquierda y se procesa. A
    continuación se procesa su subárbol derecho. Por último se procesa el nodo raíz. Las etapas del
    algoritmo son:
7.  Recorrer el subárbol izquierdo (I) en postorden.
8.  Recorrer el subárbol derecho (D) en postorden.
9.  Visitar el nodo raíz (N).
    El algoritmo recursivo para un árbol A es:
    si A no esta vacio entonces
    inicio
    Postorden (subarbol izquierdo del r a í z d e A )
    Postorden ( s u b a r b o l derecho del r a í z de A )
    Visitar la raíz de A
    fin
    El refinamiento del algoritmo es:
    algoritmo postorden (val raiz \<puntero a nodo\>)
    Recorrer un árbol binario en secuencia izquierda - derecha - nodo
    pre raíz es el nodo de entrada de un árbol a un subárbol
    post cada nodo ha sido procesado en orden
    í Si ( r a í z n o e s n u l o )
    IpostOrden (raíz - \> SubarbolIzdo)
    2postOrden (raíz -\> SubarbolDcho)
    3procesar (raiz)
    2 retorno
    fin postorden
    Si se utiliza el recorrido postorden del árbol de la Figura 16.24, se visita primero el subárbol
    izquierdo A. Este subárbol consta de los nodos B , D y E y siguiendo el orden IDN,se visitará primero D
    (izquierdo), luego E (derecho) y, por Último, B (nodo). A continuación, se visita el subárbol derecho A
    que consta de los nodos c , F y G. Siguiendo el orden IDN para este árbol, se visita primero F (izquierdo),
    después G (derecho) y, por Último, c (nodo). Finalmente se visita el raíz A (nodo). Así el orden del
    recorrido postorden del árbol de la Figura 16.24 es D - E - B - F - G - C - A.
    Árboles 523
    1 2 4 5
    Figura 16.24. Recorrido postorden de un árbol binario.
    La función postorden que implementa en C el código fuente del algoritmo correspondiente
    void postorden (Nodo *p)
    {
    if (P)
    t postorden (p - \> hijo-izqdo);
    postorden (p - \> hijo-dcho);
    printf ("%d ",p - \> datos);
    1
    1
    524 Programación en C. Metodología, algoritmos y estructura de datos
    ( 4
    Figura 16.25. Árboles de expresión.
    Ejercicio 16.2
    Si la,función visitar ( 1 se reemplaza por la .sentencia.
    printf ("%d ",t - \> dato) ;
    deducir los elementos de los árboles binarios siguientes en cada uno de los tres recorridos
    fundamentales.
    Los elementos de los árboles binarios listados en preorden, enorden y postorden.
    I Árbola Árbol 15 Árbol c
    P r e O r d e n +*ab/cd +++abcd / + - a + xy \* + b \* cd
    E n O r d e n a*c+c/d a+b+c+d - a + x + y / + b \* c \* d
    P o s torden ab*cd/+ ab+c+d+ a - xy ++ b + cd \* \* /
## Profundidad de un árbol binario
    La profundidad de un árbol binario es una característica que se necesita conocer con frecuencia durante
    el desarrollo de una aplicación con árboles. La función Profundidad evalúa la profundidad de un árbol
    binario. Para ello tiene un parámetro que es un puntero a la raíz del árbol.
    El caso más sencillo de cálculo de la profundidad es cuando el árbol está vacío en cuyo caso la
    profundidad es O. Si el árbol no está vacío, cada subárbol debe tener su propia profundidad, por lo que
    se necesita evaluar cada una por separado. Las variables profundidad1, profundidadD almacenarán
    las profundidades de los subárboles izquierdo y derecho respectivamente.
    El método de cálculo de la profundidad de los subárboles utiliza llamadas recursivas a la función
    Profundidad con punteros a los respectivos subárboles como parámetros de la misma. La fun -
    Árboles 525
    ción Profundidad devuelve como resultado la profundidad del subárbol mas profundo más I (la mis-
    ma del raíz).
    int Profundidad (Nodo \* p )
    {
    if (\!p)
    else
    return O ;
    i
    int profundidad1 = Profundiddd (p - \> hijo-izqdo);
    int profundidadD = Profundidad ( p - \> hijo-dcho) ;
    if (profundidad1 ’\> profimdidadD)
    else
    return profundidad1 + 1;
    return profundidadD + 1;
    1
    i"