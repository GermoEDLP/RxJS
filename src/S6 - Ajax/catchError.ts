import { ajax, AjaxError } from "rxjs/ajax";
import { catchError, map, pluck } from "rxjs/operators";

const url = 'https://api.github.com/users?per_page=5';

/**
 * Realizo una peticion a la url y recibo la info como observable.
 * Utilizo el catchError para atrapar y manejar un error proveniente de la petición
 */
ajax(url).pipe(
    pluck('response'),
    catchError((err: AjaxError) => {
        console.warn('Error: ', err.message);
        return [];
    })
).subscribe(console.log)

/**
 * El catchError debe retornar siempre algo.
 */