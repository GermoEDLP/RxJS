# Operadores con tiempo

1. Operador `debounceTime()`

    El operador `debounceTime()` frena todas las peticiones que se hagan en un lapso menor al especificado como parametro. Es decir, si especifique como paramatero 1000 milisegundos (1s) y varias emisiones vinieron dejando entre ellas menos de 1 segundo, entonces esas no pasarán; si en algun momento se detienen y existe mas de 1 segundo libre de emisiones, entonces deja pasar a la ultima emision.  


2. Operador `throttleTime()`

    El operador `throttleTime()` emite lo primero que llega, despues espera el tiempo pasado por parametro y luego vuelve a dejar pasar si el observable vuelve a emitir. Se puede manejar lo ultimo escrito por medio de un operador asincrono y algunas configuraciones (ver ejemplo)  


3. Operador `sampleTime()`

    Deja pasar el utlimo valor emitido en el intervalo de tiempo que es pasado por parametro. Es decir: si se le pasa 2000 milisegundos (2s) entonces cada 2 segundos dejara parasar el ultimo evento emitido, si en eese periodo no hubo emisiones, entonces no emite nada.


4. Operador `sample()`

    Recibe otro observable como parametro y no deja pasar ninguna emisión hasta que el parametro recibe una emisión. En el momento que el parametro recibe una emisión, el sample() deja pasar la ultima emisión que recibio por parte del observable que opera.


5. Operador `auditTime()`

    Cuando recibe una emisión (trigger) por parte del observable, empieza a contar tiempo, cuando lega al tiempo pasado como parametro, emite el ultimo valor emitido por el observable. Si el observable solo emitio el trigger, entonces el suditTime() emite eso, sino emite lo ultimo que emitio el observable.