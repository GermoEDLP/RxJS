import { of, range } from "rxjs";
import { filter } from "rxjs/operators";

/**
 * Definimos un range() que devuelva 10 valores consecutivos y queremos que a nuestra
 * subscripcion le lleguen solo los valores impares, entonces:
 */

range(1, 10)
  .pipe(
    filter<number>((value) => { 
      return value % 2 === 1;        // La condicion es que el resto de dividir por 2 sea 1 => numeros impares     
    })
  )
  .subscribe(console.log);
/**
1
3
5
7
9
 */

const pesonajes = [
  {
    nombre: 'Batman',
    tipo: 'heroe'
  },
  {
    nombre: 'Superman',
    tipo: 'heroe'
  },
  {
    nombre: 'Joker',
    tipo: 'villano'
  }
]
/**
 * Quiero un observable que emita cada uno de los objetos de la variable y solo quiero recibir
 * en la subscripcion aquellos que sean heroes
 */

 const obs$ = of(...pesonajes);
 //Tambien podría haberlo hecho asi:  const obs$ = from(pesonajes); aprovechando el indice from

 obs$.pipe(
   filter(value =>{
     return value.tipo === 'heroe'
   })
 ).subscribe(console.log)

