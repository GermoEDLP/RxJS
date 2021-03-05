import { from, of } from "rxjs";
import { distinctUntilKeyChanged, map } from "rxjs/operators";

 /**
  * En el caso de trabajar con objetos,  es mas simple trabajar con 
  * le debo decir al distinctUntilKeyChanged() ya que atiende directamete a las propiedades 
  * de un objeto.
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
   distinctUntilKeyChanged('nombre'),   // Le digo que compare con el nombre.
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