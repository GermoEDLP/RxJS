import { of, interval, fromEvent } from 'rxjs';
import { mergeMap, take, map, takeUntil } from 'rxjs/operators';



const letras$ = of('a', 'b', 'c');

/**
 * Cada vez que el observable letras$ emite una letra, se dispara 
 * un observable interval, por lo que al final tengo 4 observables emitiendo.
 * Recien cuando el ultimo interval haya finalizado se dará por completado
 * todo el observable. 
 * Tener en cuenta que la salida no es un observable sino el resultado 
 * suscripto del mismo.
 */
letras$.pipe(
    mergeMap( (letra) => interval(1000).pipe(
        map( i => letra + i ), 
        take(3)
    ))
)
// .subscribe({
//     next: val => console.log('next:', val),
//     complete: () => console.log('Complete')
// });

/**
 * En este caso usamos un evento para cancelar otro mediante le 
 * takeUntil(). Ademas usamos el interval$ para contabilizar el tiempo.
 * Este pequeño sistema cuenta el tiempo que dejamos presionado el mouse.
 */
const mousedown$ = fromEvent( document, 'mousedown');
const mouseup$   = fromEvent( document, 'mouseup');
const interval$  = interval();

mousedown$.pipe(
    mergeMap( () => interval$.pipe(
        takeUntil( mouseup$ )
    ))
)
.subscribe( console.log );