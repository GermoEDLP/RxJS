import { interval, Observer, timer } from "rxjs";

const observer: Observer<any> = {
  next: (val) => console.log("next: ", val),
  error: null,
  complete: () => console.log("complete"),
};

/**
 * interval() ==> Emitira valores numericos cada vez que pase e tiempo especificado, desde cero en adelante
 * timer()    ==> Emite un valor cero (por defecto) cuando pasa el tiempo especificado, luego se completa
 */
const interval$ = interval(1000);
const timer$ = timer(2000);

/**
 * Ambos son asincronos, por lo que se imprimirá primero los console.log y luego el resto, 
 * aun si se pone 0 como valro de intervalo o de timer
 */
console.log("Inicio");
interval$.subscribe(observer);
timer$.subscribe(observer);
console.log("Fin");
