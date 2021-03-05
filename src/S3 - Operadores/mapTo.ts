import { fromEvent } from "rxjs";
import { mapTo } from "rxjs/operators";

/* Dectaremos un tecla presionada y levantada por medio de un observable.
 * yo solo quiero que se me informe cada vez que se presiona una tecla, pero nada mas. Entonces ==>
 */
const keyUp = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    mapTo<KeyboardEvent, string>('Tecla presionada')
).subscribe(console.log)
/**
 AL presionar la letra a, recibiremos 
 Tecla presionada

 Al presionar la letra s, obtendremos
 Tecla presionada
 */
