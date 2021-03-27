import { interval, concat, of } from 'rxjs';
import { concatMap, take } from 'rxjs/operators';


/**
 * Recibe observables como parametros y los ejecuta de a uno.
 * Recien cuando el primero se completa es que pasa al segundo.
 * Es una funcion, no un operador
 */

const interval$ = interval(1000);

concat(
    interval$.pipe( take(3) ),
    interval$.pipe( take(2) ),
    of(1)
).subscribe( console.log  )

/**
 0
 1
 2
 0
 1
 1
 */


