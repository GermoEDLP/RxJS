import { from, of } from "rxjs";
import { distinct, distinctUntilChanged, map } from "rxjs/operators";


const numeros$ = of(1,1,3,1,2,2,3,3,4,5,5,6,1,2,2,3,5,6);

/**
 * Solo emitirá numeros que no haya emitido con anterioridad
 */
numeros$.pipe(
    distinctUntilChanged((anterior, actual)=> anterior === actual)   // Si son iguales NO PASA
)
.subscribe({
    next: (val) => console.log("Next: ", val),
    complete: () => console.log("Completado"),    
})
/**
Next:  1
Next:  3
Next:  1
Next:  2
Next:  3
Next:  4
Next:  5
Next:  6
Next:  1
Next:  2
Next:  3
Next:  5
Next:  6
 Completado
 */

 /**
  * En el caso de trabajar con objetos, le debo decir al distinctUntilChanged() 
  * con que propiedad comparar.
  */
 interface Personaje{
   nombre: string,
   marca: string
 }

 const personajes: Personaje[] = [
   {
     nombre: 'Batman',
     marca: 'DC'
   },
   {
    nombre: 'Batman',
    marca: 'DC'
  },
  {
    nombre: 'Spiderman',
    marca: 'Marvel'
  },
  {
    nombre: 'Spiderman',
    marca: 'Marvel'
  },
  {
    nombre: 'Joker',
    marca: 'DC'
  },
  {
    nombre: 'Spiderman',
    marca: 'Marvel'
  },
 ]

 const personajes$ = from(personajes);

 personajes$.pipe(
   distinctUntilChanged((ant, act) => ant.nombre === act.nombre),   // Le digo que compare con el nombre.
   map(p => p.nombre)         // Despues lo transformo por mero placer
 )
 .subscribe({
  next: (val) => console.log("Next: ", val),
  complete: () => console.log("Completado"),    
})
/**
 Next: Batman
 Next: Spiderman
 Next: Joker
 Next: Spiderman
 Completado
 */