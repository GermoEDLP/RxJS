import { fromEvent } from "rxjs";
import { ajax } from "rxjs/ajax";
import { debounceTime, map, mergeAll, pluck } from "rxjs/operators";

const body = document.querySelector("body");
const input = document.createElement("input");
body.append(input);

const input$ = fromEvent<KeyboardEvent>(input, "keyup");

/**
 * El MergeAll() nos permite trabajar con emisiones de observables 
 * internos, y podemos trabajarlos antes de emitirlos en nuestro codigo.
 * En este caso, solo vamos a emitir los items que devuelve la peticion 
 * al url.
 */
input$
  .pipe(
    debounceTime(500),
    pluck('target', 'value'),
    map((text) => ajax.getJSON(`http://api.github.com/search/users?q=${text}`)),
    mergeAll(),
    pluck('items')
  )
  .subscribe(console.log);
