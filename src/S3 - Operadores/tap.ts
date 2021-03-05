import { range } from "rxjs";
import { map, tap } from "rxjs/operators";

/**
 * Definimos un range() que devuelva 5 valores consecutivos y queremos que cada vez que se emita,
 * nos avise que paso por dentro del codigo:
 */

range(1, 5)
  .pipe(
    tap<number>((value) => {
      console.log("Paso por aca");
    })
  )
  .subscribe(console.log);
/**
 Paso por aca
 10
 Paso por aca
 20
 Paso por aca
 30
 Paso por aca
 40
 Paso por aca
 50
 */

/**
 * Podemos realizarle una operación a la emsion antes que salga e informarnos como se procede internamente
 */

range(1, 3)
  .pipe(
    tap<number>((value) => {
      console.log("Sin transformar: ", value);
    }),
    map((value) => value * 10),
    tap<number>((value) => {
      console.log("Ya transformado: ", value);
    })
  )
  .subscribe(console.log);

/**
Sin transformar: 1
Ya transformado: 10
10
Sin transformar: 2
Ya transformado: 20
20
Sin transformar: 3
Ya transformado: 30
30
 */

 /**
 * El tap puede recibir un PartialObserver como argumento y de esta manera definirle un complete() que se 
 * ejecutará cuando termine el observable completo
 */

range(1, 3)
.pipe(
  tap<number>((value) => {
    console.log("Sin transformar: ", value);
  }),
  map((value) => value * 10),
  tap({
      next: valor => console.log('Ya transformado: ', valor),
      complete: () => console.log('Se termino todo')      
  })
)
.subscribe(console.log);

/**
Sin transformar: 1
Ya transformado: 10
10
Sin transformar: 2
Ya transformado: 20
20
Sin transformar: 3
Ya transformado: 30
30
Se termino todo
*/