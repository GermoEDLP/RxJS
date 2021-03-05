import { fromEvent } from "rxjs";
import { first, takeWhile } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

/**
 * Mientras la posición del click sea menor que 150 en y entonces emite
 */
click$.pipe(
    takeWhile(event => event.clientY < 150)      
    )
.subscribe({
  next: (val) => console.log("Next: ", val),
  complete: () => console.log("Completado"),
});

/**
 * Mientras la posición del click sea menor que 150 en y, entonces emite.
 * El valor que completo el observable tambien es emitido
 */
click$.pipe(
    takeWhile(event => event.clientY < 150, true)      
    )
.subscribe({
  next: (val) => console.log("Next: ", val),
  complete: () => console.log("Completado"),
});