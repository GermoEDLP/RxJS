# AJAX

RxJS nos permite trabajar con el método AJAX de una manera muy simple. Solo debemos llamar a la URL requerida mediante el método que retorna un observable y luego tartarlo mediante los operadores conocidos. A continuación se detallan algunos muy utiles.

1. Operador `catchError()`

    Atrapa el error proveniente de una peticion AJAX, y nos permite trabajarlo al definir la entrada del mismo con una interfaz `AjaxError`. El operador debe retornar siempre.


2. Funcion `getJSON()`

    Nos permite realizar la petición y pasar como segundo parametro los headers de nuestra petición.


3. Metodos del CRUD

    Para trabajar con métodos del CRUD, podemos utilizar las funciones con el nombre de cada uno o bien, enviar un objeto detallando todas las propiedades como parametro de la funcion ajax() 