import { fromEvent } from "rxjs";

/**
 * Crea un observable a partir de la detección de un evento realizado sobre el DOM
 */

// Crea un observable del realizar clicks sobre cualquier parte del decomuento
const scr1$ = fromEvent<MouseEvent>(document, "click");

// Crea un observable del apretar (...y soltar) cualquier tecla del teclado
const scr2$ = fromEvent<KeyboardEvent>(document, "keyup");

scr1$.subscribe((event) => {
  console.log(event.x, event.y);
});

scr2$.subscribe((event) => {
  console.log(event.key);
});
