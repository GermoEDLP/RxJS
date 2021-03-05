import { from, of } from "rxjs";
import { distinct, map } from "rxjs/operators";


const numeros$ = of(1,1,1,2,2,3,3,4,5,5,6);

/**
 * Solo emitirá numeros que no haya emitido con anterioridad
 */
numeros$.pipe(
    distinct()
)
.subscribe({
    next: (val) => console.log("Next: ", val),
    complete: () => console.log("Completado"),    
})
/**
 1
 2
 3
 4
 5
 6
 Completado
 */

 /**
  * En el caso de trabajar con objetos, le debo decir al distinct() 
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
  }
 ]

 const personajes$ = from(personajes);

 personajes$.pipe(
   distinct(p => p.nombre),   // Le digo que compare con el nombre.
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
 Completado
 */