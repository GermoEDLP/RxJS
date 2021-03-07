import { fromEvent, interval } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';



const click$    = fromEvent( document, 'click' );
const interval$ = interval(1000);

/**
 * mergeMap()   ==>  Cada vez que haga un click va a iniciarse
 *                   un nuevo observable que emite valores y se suma 
 *                   al anterior
 * switchMap()  ==>  Cada vez que haga un click, se va a cancelar el 
 *                   observable anterior y se va a emitir nuevamente 
 *                   la cadena de valores. No se solapan   
 */
click$.pipe(
    switchMap( () => interval$ ),
    // mergeMap( () => interval$ ),
).subscribe( console.log );


