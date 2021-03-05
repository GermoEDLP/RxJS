import { asyncScheduler, of, range } from "rxjs";


/**
 * Estos dos observables son analogos. El metodo range() utiliza como 
 * primer parametro el numero inicial y como segundo parametro la cantidad de emisiones.
 */
const obs$ = of(1,2,3,4,5)
const obs1$ = range(1,5)

/**
 * El siguiente codigo nos muestra valores desde -5 hasta 4. Termina en 4 y no 
 * en 5 porque son emsiones y no numeros. POR DEFECTO ES SINCRONICO
 */

 const obs2$ = range(-5, 10);

 console.log('Inicio');
 obs2$.subscribe(console.log);
 console.log('Fin');
 /*
 Inicio
 -5
 -4
 -3
 -2
 -1
 0
 1
 2
 3
 4
 Fin
 */

 /**
  * Para hacerlo asicronico debemos pasarle como tercer parametro la funcion asyncSchedule
  */
 const obs3$ = range(-5, 10, asyncScheduler);

 console.log('Inicio');
 obs3$.subscribe(console.log);
 console.log('Fin');
 /*
 Inicio
 Fin
 -5
 -4
 -3
 -2
 -1
 0
 1
 2
 3
 4
 */