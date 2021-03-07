# Operadores de transformación

El problema readica cuando tenemos un observable que retorna otro observable, lo que hace que debamos subscribirnos a la salida de una subscripción, lo que enreda nuestro codigo y lo hace complejo de mantener.

1. Operador `mergeAll()`

    Toma todas las emisiones de observables internos a un observable y las devuelve como si fueran emisiones del observable padre. A medida que haya mas observables internos, el mergeAll() se va a subscribir e incluira esas emisiones a la salida. El observable no se dará por completado hasta que todos los observables a los que esta subscripto el mergeAll() hayan sido completadas, aun cuando el observable padre ya halla sido completado.


2. Operador `mergeMap()`

    Devuelve un Observable que emite elementos en función de la aplicación de una función que usted proporciona a cada elemento emitido por el Observable de origen, donde esa función devuelve un Observable, y luego fusiona los Observables resultantes y emite los resultados de esta fusión.


3. Operador `switchMap()`

    Devuelve un Observable que emite elementos basándose en la aplicación de una función que usted proporciona a cada elemento emitido por el Observable de origen, donde esa función devuelve un Observable (llamado "interno"). Cada vez que observa uno de estos Observables internos, el Observable de salida comienza a emitir los elementos emitidos por ese Observable interno. Cuando se emite un nuevo Observable interno, switchMap deja de emitir elementos del Observable interno emitido anteriormente y comienza a emitir elementos del nuevo. Continúa comportándose así para los Observables internos posteriores.


4. Operador `concatMap()`

    Devuelve un Observable que emite elementos basándose en la aplicación de una función que se proporciona a cada elemento emitido por el Observable de origen, donde esa función devuelve un Observable (llamado "interno"). Cada nuevo Observable interno está concatenado con el Observable interno anterior como si se tartara de una cola.


5. Operador `exhaustMap()`

    Devuelve un Observable que emite elementos basándose en la aplicación de una función que se proporciona a cada elemento emitido por el Observable de origen, donde esa función devuelve un Observable (llamado "interno"). Cuando proyecta un valor fuente a un Observable, el Observable de salida comienza a emitir los elementos emitidos por ese Observable interno. Sin embargo, exhaustMap() ignora cada nuevo Observable interno si el Observable interno anterior aún no se ha completado. Una vez que se complete, aceptará y aplanará el siguiente Observable interno y repetirá este proceso.