# Creación de Observables y Suscripciones

1. Indices `of()` y `from()`

    * *of():* Genera un observable en basa los parametros que se le proveen
    * *from():* Genra un observale en base a un array que le hes provisto como parametro

Ambos emiten observables sincronos

2. Indice `fromEvent()`

    Genera un observable en base a la emision de un evento, es decir, cuando, en el objeto descripto en el primer parametro, se emite el evento descripto en el segundo parametro, el observable emite ese evento.

3. Indice `asyncScheduler()`

    Se puede utilizar como un `setTimeout()` o un `setInterval()` propios de JS pero devolviendo una subscripción que podmeos completar.

4. Indices `interval()` y `timer()`

    * *interval():* Genera un observable que emite numeros (de cero en adelante) espaciados por la cantidad de milisegundos provistas como parametro. El intervalo continua aunque no estemos subscriptos.
    * *timer():* Genera un observable que emite un valor (cero por defecto) al pasar los milisegundos especificados como para,etro. Luego se completa.

Ambos emiten obserbables asincronos

5. Indice `range()`

    Genera un observable que emite numeros (<_number_>) que van desde el primer parametro y una cantidad de veces igual al segundo parametro. Es, por default, sincronico, pero puede ser asincronico si colocamos como tercer parametro la llamada al indice `asyncSchedule`.


