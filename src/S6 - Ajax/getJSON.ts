import { ajax, AjaxError } from "rxjs/ajax";
import { catchError, map, pluck } from "rxjs/operators";

const url = 'https://httpbin.org/delay/1';

/**
 * Realizo una peticion a la url por medio de la funcion getJSON()
 * Esto nos permite enviar headers como segundo argumento
 */
const obs$ = ajax.getJSON(url, {
    'Content-type': 'application/json',
    'mi-token': 'ABC123'
});

obs$.pipe(
    catchError((err: AjaxError) => {
        console.warn('Error: ', err.message);
        return []
    })
).subscribe(console.log)

/**
 * El catchError debe retornar siempre algo.
 */