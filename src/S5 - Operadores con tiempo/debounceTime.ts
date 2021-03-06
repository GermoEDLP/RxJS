import { fromEvent } from "rxjs";
import { debounceTime, pluck } from "rxjs/operators";

/**
 * Inserto una caja de texto simulando una busqueda
 */
let input = document.createElement('input');
const body = document.querySelector('body');
body.append(input);


const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

/**
 * Esto me permitira escribir rapido en la caja de busqueda y no ejecutar 
 * la llamada cada vez que presiono una tecla
 */
input$.pipe(
    debounceTime(500),
    pluck('target', 'value')
).subscribe(console.log);