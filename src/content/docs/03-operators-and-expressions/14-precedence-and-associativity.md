---
title: Prioridad y asociatividad
description: A reference page in my new Starlight docs site.
---

La **prioridad o precedencia de operadores** determina el orden en el que se aplican los operadores a un valor.  
Los operadores de C vienen en una tabla con **dieciséis grupos**. Los operadores del grupo 1 tienen mayor prioridad que los del grupo 2, y así sucesivamente:

- Si dos operadores se aplican al mismo operando, el operador con **mayor prioridad** se aplica primero.
- Todos los operadores del mismo grupo tienen **igual prioridad y asociatividad**.
- La **asociatividad izquierda - derecha** significa aplicar el operador más a la izquierda primero.
- La **asociatividad derecha - izquierda** aplica primero el operador más a la derecha.
- Los **paréntesis** tienen la máxima prioridad.

| Prioridad | Operadores                           | Asociatividad       |
|-----------|--------------------------------------|---------------------|
| 1         | `() [] ->`                           | Izquierda - Derecha |
| 2         | `++ -- (unario) - ! + & * sizeof`     | Derecha - Izquierda |
| 3         | `* / %`                              | Izquierda - Derecha |
| 4         | `+ -`                                | Izquierda - Derecha |
| 5         | `<< >>`                              | Izquierda - Derecha |
| 6         | `< <= > >=`                          | Izquierda - Derecha |
| 7         | `== !=`                              | Izquierda - Derecha |
| 8         | `&`                                  | Izquierda - Derecha |
| 9         | `^`                                  | Izquierda - Derecha |
| 10        | `|`                                  | Izquierda - Derecha |
| 11        | `&&`                                 | Izquierda - Derecha |
| 12        | `||`                                 | Izquierda - Derecha |
| 13        | `? :` (expresión condicional)        | Derecha - Izquierda |
| 14        | `=` `+=` `-=` `*=` `/=` `%=` `&=` `^=` `|=` `<<=` `>>=` | Derecha - Izquierda |
| 15        | `,` (operador coma)                  | Izquierda - Derecha |

**Explicación:**

- **Prioridad:** Los operadores con mayor prioridad se ejecutan primero.
- **Asociatividad:** Define el orden en que los operadores de igual prioridad se ejecutan.
