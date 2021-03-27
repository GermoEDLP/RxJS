import { of, interval, forkJoin } from 'rxjs';
import { take, delay } from 'rxjs/operators';

/**
 * El forkJoin() recibe observables como parametro, se subscribe a todos
 * y espera a que se completen. Cuando todos se completen, emite un 
 * arreglo con las emisiones
 */


const numeros$   = of(1,2,3,4);
const intervalo$ = interval(1000).pipe( take(3) ); //0..1..2 
const letras$    = of('a','b','c').pipe( delay(3500) );


/**
 * Emite un arreglo con las emisiones
 */
// forkJoin(
//     numeros$,
//     intervalo$,
//     letras$
// ).subscribe( console.log  )


/**
 * Puedo diferenciar las emisiones por posición, pero esto lo hace complejo
 */
// forkJoin(
//     numeros$,
//     intervalo$,
//     letras$
// ).subscribe( resp => {
//     console.log('numeros: ', resp[0] )
//     console.log('intérvalo: ', resp[1] )
//     console.log('letras: ', resp[2] )
// });

/**
 * Colocando los parametros del forkJoin() dentro de llaves es que 
 * retorna un objeto con las propiedades llamadas igual a los observables
 */
forkJoin({
    num: numeros$,
    int: intervalo$,
    let: letras$
}).subscribe( resp => {
    console.log(resp.num)
});


