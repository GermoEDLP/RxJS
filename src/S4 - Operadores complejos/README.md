# Operadores complejos

1. Operador `take()`

    El operador `take()` nos permite completar el observable al cual estoy suscripto, aun cuando este no se ha completado internamente, solo introduciendo como parametro la cantidad de veces que queremos que emita ese observable. Ej: si usamos `take(2)`, el observable se completará cuando se hayan escuchado 2 emisiones, no importa si esa era la ultima, si faltaban emisiones o si despues venia un error.


2. Operador `first()`

    El operador `first()` nos devuelve la primera emision del observable y luego lo completa. Puede recibir un parametro que representa un valor `true` o `false` y es una condicion para expresar cuando debemos tomar el primer elemento. Ejemplo: Si el observable devuelve numeros y yo no defino un argumento, el `first()` nos devuelve el primer valor emitido y completa el observable, en cambio si defino una condicion como parametro de la forma `first(val => val > 10)`, entonces nos devuelve el primer valor emitido que cumple con la condicion de ser mayor que 10 y completa el observable.


3. Operador `takeWhile()`

    Como dice el nombre, se recibirán emisiones hasta que no se cumpla una condición pasada como primer parametro. Cuando la condicion no se cumpla, el observable se completa y la emision que incumplio la condición no se escucha a menos que coloquemos un `true` como segundo parametro de la función `takeWhile(callback(), true)`


4. Operador `takeUntil()`

    Como dice el nombre, se recibirán emisiones hasta que el observable que se pasa por parametro emita por primera vez. Se puede usar para completar un observable cuando se realiza un click, por ejemplo.


5. Operador `skip()`

    No dejará pasar ninguna emision hasta que hayan pasado la cantidad de emisiones igual al parametro que se le pasa. Por ejemplo: `skip(2)` retendrá las primeras dos emisiones y recien dejará pasar la tercera.


6. Operador `distinct()`

    Nos permite filtrar el flujo continuo de datos solo dejando pasar aquellos valores que aun no han pasado, es decir, los que son distintos. En el caso de trabajar con la emisión de objetos, debemos pasarle una funcion callback al metodo que nos permita identificar que propiedad debe utilizar para medir la igualdad.


6. Operador `distinctUntilChanged()`

    Es similar al anterior, pero en vez de evaluar el historico de todos los elementos que pasaron, solo evalua el anterior, es decir: Si la emsión actual es distinta a la emisión anterior, entonces la deja pasar, pero si es la misma que la anterior, no la deja pasar. En el caso de trabajar con objetos, ahora voy a recibir, como parametros de la función callback, el valor de la anterior y de la actual emisión, por lo que debo compararlas internamente. 



6. Operador `distinctUntilKeyChanged()`

    Muy similar al anterior solo que atiende directamnete objetos, por lo que solo necesito pasarle la propiedad en forma de string y comparará los campos.