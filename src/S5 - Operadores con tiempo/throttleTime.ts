import { asyncScheduler, fromEvent } from "rxjs";
import { pluck, throttleTime } from "rxjs/operators";

/**
 * Inserto una caja de texto simulando una busqueda
 */
let input = document.createElement('input');
const body = document.querySelector('body');
body.append(input);


const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

/**
 * Esto me permitira escribir rapido en la caja de busqueda y ejecutar 
 * la llamada solo cuando empiezo a escribir despues del tiempo
 * Asi no sirve mucho, pero si le agrego algunas opciones, tiene mas sentido
 */
input$.pipe(
    throttleTime(500),
    pluck('target', 'value')
).subscribe(console.log);

/**
 * Esto me permitira escribir rapido en la caja de busqueda y ejecutar la busqueda 
 * cuando termina de escibir usando el trading
 */
input$.pipe(
    throttleTime(500, asyncScheduler, {
        leading: true,                      // Me devuelve lo primero que escribo
        trailing: true                      // Me devueve lo ultimo que escribo, es decir, cuando dejo de escribir
    }),
    pluck('target', 'value')
).subscribe(console.log);