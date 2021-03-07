import { fromEvent } from "rxjs";
import { ajax } from "rxjs/ajax";
import { debounceTime, map } from "rxjs/operators";

const body = document.querySelector("body");
const input = document.createElement("input");
body.append(input);

const input$ = fromEvent<KeyboardEvent>(input, "keyup");

/**
 * Escucho el evento de escritura en el input y cuando pasa mas de 
 * 500 milisegundos sin escribir, tomo el valor escrito y hago una
 * peticion ajax a una api. Esta retorna un observable, por lo tanto
 * debo subscribirme a la salida de una subscripcion.
 */
input$
  .pipe(
    debounceTime(500),
    map((event) => {
      const texto = event.target["value"];

      return ajax.getJSON(`http://api.github.com/search/users?q=${texto}`);
    })
  )
  .subscribe((resp) => {
    resp.subscribe(console.log);
  });
