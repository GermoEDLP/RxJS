import { fromEvent } from "rxjs";
import { auditTime, map, tap } from "rxjs/operators";

/**
 * Un escuchador de los eventos click en el documento
 */
const click$ = fromEvent<MouseEvent>(document, 'click');

/**
 * Cuando haga el primer click en el documento va a empezar a contar
 * los 2000 milisegundos. Cuando se agoten esos 2 segundos, se emitirá 
 * el ultimo valor emitido por el click$ dentro de esos 2 segundos.
 */
click$.pipe(
    map(({x})=> {x}),
    tap(val => console.log('tap', val)),
    auditTime(2000)
)
.subscribe(console.log)
