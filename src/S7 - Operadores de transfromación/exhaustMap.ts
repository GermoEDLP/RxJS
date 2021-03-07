import { interval, fromEvent } from 'rxjs';
import { take, exhaustMap } from 'rxjs/operators';



const interval$ = interval(500).pipe( take(3) );
const click$    = fromEvent( document, 'click' );


/**
 * El exhaustMap() se encarga de una subscripcion interna cuando
 * es emitida y la maneja hasta que se complete. Si, durante ese 
 * tiempo, se ejecuta otra emision, el exhaustMap() la ignora y sigue
 * trabajando con actual. Cuando se completa la actual, ya esta listo
 * para recivir una nueva emision y manejarla.
 */
click$.pipe(
    exhaustMap( () => interval$ )
)
.subscribe( console.log );

/**
 * Este operador sirve para trabajar la sobrealimentacion de un recurso 
 * por emisiones, por ejemplo, un 'enter' de un formulario al cual lo 
 * presionan muchas veces y solo necesito una.
 */



