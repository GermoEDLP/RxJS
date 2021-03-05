import { fromEvent } from "rxjs";
import { filter, map, mapTo } from "rxjs/operators";

/* Dectaremos un tecla presionada y levantada por medio de un observable.
 * yo quiero que se me informe cada vez que se presiona la tecla 'Enter'. Entonces ==>
 */
const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup")
  .pipe(
    map<KeyboardEvent, string>((event) => event.code),  // Primero limpio la inofrmación devolviendo solo los codigos de tecla presionada
    filter((code) => code === "Enter")                  // Luego filtro en base al tipo de tecla
  )
  .subscribe(console.log);                              //Asi, que solo son escuchados eventos de presionado de tecla 'Enter'
/**
 AL presionar la letra a, no recibiremos nada

 Al presionar la letra s, no recibiremos nada

  Al presionar la letra Enter, recibiremos 
  Enter
 */
