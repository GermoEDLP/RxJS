import { interval, fromEvent } from 'rxjs';
import { take, switchMap, concatMap } from 'rxjs/operators';



const interval$ = interval(500).pipe( take(3) );
const click$    = fromEvent( document, 'click' );

/**
 * A diferencia del switchMap(), el concatMap() concatena los
 * observables a ejecutar detras de del anterior y espera a que se ejecute
 * uno para dejar paso al otro y cuando ese se completa le deja paso al otro,
 * es decir, no los cancela sino que los pone en cola. 
 */

click$.pipe(
    concatMap( () => interval$ )
)
.subscribe( console.log );