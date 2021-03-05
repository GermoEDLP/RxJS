import { fromEvent, range } from "rxjs";
import { map, pluck } from "rxjs/operators";

/*En este caso, deectaremos un tecla presionada y levantada por medio de un observable.
 * El problema es que lo que devuelve el observable es mucha info y solo quiero el code. Entonces ==>
 */
const keyUp = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
   pluck('code')
).subscribe(console.log)
/**
 AL presionar la letra a, recibiremos 
 KeyA

 Al presionar la letra s, obtendremos
 KeyS
 */

 /**
  * Debemos tenercuidado, ya que al recibir como parametro un string, no verifica que esa propeidad
  * pertenezca al objeto.
  */

/**
 * OPCIONES ANIDADAS:
 * En el caso de necesitar acceder a una propiedad dentro de otra propiedad, debo colocar los nombres
 * como argumentos sucesivos. Por ejemplo: si quiero obtener el baseURI que se haya dentro del target
 * del objeto que retorn el fromEvent() al presionar una tecla, entonces ==>
 */

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
  pluck('target', 'baseURI')
).subscribe(console.log)

/**
  http://localhost:8081/
 */