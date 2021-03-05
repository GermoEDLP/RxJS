import { fromEvent } from "rxjs";
import { first } from "rxjs/operators";


const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    first()
).subscribe({
    next: val => console.log('Next: ', val),
    complete: () => console.log('Completado')
});

/**
 Regresa los datos del primer click que realzo sobre le documento
 */

click$.pipe(
    first(click => click.clientY > 150)         // Emitira el primer click que realize sobre el documento
).subscribe({                                   // pero que este por encima de clientY = 150
    next: val => console.log('Next: ', val),    // Antes de eso es como si no emitiera
    complete: () => console.log('Completado')
});