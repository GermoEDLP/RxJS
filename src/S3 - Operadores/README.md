# Operadores

1. Operador `map()`

    El operador `map()` nos permite obtener toda la data que viene del observable y manejarla a nuestro gusto. Podemos devolver información basada en lo que viene, filtrada, acotada o transformada. Devemos siempre retornar algo para que el flujo de datos no se corte.


2. Operador `pluck()`

    En principio lo utilizamos para retornar el valor de una propiedad del objeto recibido por el observador.
    Puede entrar tanto como se quiera en el anidado de un objeto poniendo el path relativo convertido en una seguidilla de argumentos (Ej: relativePath: target.baseURI.url ==> pluck('target','baseURI','url'))


3. Operador `mapTo()`

    El operador retorna, lo que se le pase como parametro (sea un valor, un objeto, un array, una promesa, etc), cada vez que el observable emite. Tener en cuenta que retorna siempre lo mismo.


4. Operador `filter()`

    El operador retorna, aquellas emisiones que cumplen con la regla interna establecida. Es decir, se establece una regla interna que retorna `true` si la emision cumple con la regla, dejando pasar la emision, y `false` si no cumple con la regla, bloqueandola.


5. Operador `tap()`

    No cambia la información ni el flujo de datos, solo es una instancia de depuración. Podemos verlo como un punto de aviso que nos muestra cuando el codigo pasa por ese punto. Tambien podemos utilizarlo para ejecutar alguna acción externa. Podemos enviarle un PartialObserver como argumento y manejar el complete() de todo el observable, dandole mas poder para depurar codigo. 


6. Operador `reduce()`

    Este operador espera a que el observador se complete y emite el acumulado de todos los valores que se han emitido en base a la funcion de callback que recibe.


7. Operador `scan()`

    Este operador trabaja de manera muy similar al reduce(), solo que en vez de esperar al complete() para devolver el valor acumulado, lo hace cada vez que se emite algo desde el observable. 


8. Encadenamiento de operadores

    Para combinar operadores solo debo colocar una coma despues de finalizar el operador y colocar el siguiente. Tener en cuenta que lo que un operador toma como _input_ es lo que el anterior emite, por lo que el orden de los operadores es extremadamente importante.