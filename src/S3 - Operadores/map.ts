import { fromEvent, range } from "rxjs";
import { map } from "rxjs/operators";

/**
 * Definimos un range() que devuelva 5 valores consecutivos y queremos que a nuestra
 * subscripcion le llegue multiplicado por 10, entonces:
 */

range(1, 5)
  .pipe(
    map<number, number>((value) => { // <[tipo que emite el observable], [tipo que emite el map]>
      return value * 10;             // value = cada emision del observable
    })
  )
  .subscribe(console.log);
/**
 10
 20
 30
 40
 50
 */

/**
 * Otro ejemplo: en este caso, deectaremos un tecla presionada y levantada por medio de un observable.
 * El problema es que lo que devuelve el observable es mucha info y solo quiero el code. Entonces ==>
 */
const keyUp = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map<KeyboardEvent, string>(value=>{
        return value.code
    })
).subscribe(console.log)
/**
 AL presionar la letra a, recibiremos 
 KeyA

 Al presionar la letra s, obtendremos
 KeyS
 */
