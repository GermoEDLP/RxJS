# Creación de Observables y Suscripciones

1. Operador `of()` y `from()`

    * *of():* Genera un observable en basa los parametros que se le proveen
    * *from():* Genra un observale en base a un array que le hes provisto como parametro

Ambos emiten observables sincronos

2. Operador `fromEvent()`

    Genera un observable en base a la emision de un evento, es decir, cuando, en el objeto descripto en el primer parametro, se emite el evento descripto en el segundo parametro, el observable emite ese evento.

3. Operador `asyncScheduler()`

    Se puede utilizar como un `setTimeout()` o un `setInterval()` propios de JS pero devolviendo una subscripción que podmeos completar.

4. Operadores `interval()` y `timer()`

    * *interval():* Genera un observable que emite numeros (de cero en adelante) espaciados por la cantidad de milisegundos provistas como parametro. El intervalo continua aunque no estemos subscriptos.
    * *timer():* Genera un observable que emite un valor (cero por defecto) al pasar los milisegundos especificados como para,etro. Luego se completa.

Ambos emiten obserbables asincronos

