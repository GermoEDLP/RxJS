import { fromEvent, interval } from "rxjs";
import { sample } from "rxjs/operators";

/**
 * Defino un intervalo que comenzará a emitir numeros cuando 
 * es suscripto y un evento que detecta los clicks en el documento
 */
const interval$ = interval(500);
const click$ = fromEvent<MouseEvent>(document, 'click');

/**
 * El intervalo ira creciendo en valores, pero el sample()
 * no dejará pasar nada hasta que se haga click en el documento.
 * Recien ahi se dejará pasar el ultimo valor que emitio el intervalo
 */
interval$.pipe(
    sample(click$)
)
.subscribe(console.log);