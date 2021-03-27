import { fromEvent, merge } from 'rxjs';
import { pluck } from 'rxjs/operators';

/**
 * Es una funcion, no un operador.
 * Recibe observables como parametro y combina las emisiones
 * como si fuera de un observable solo. Recien cuando se completan
 * todos los observables internos es que se completa la subscripción
 */


const keyup$ = fromEvent( document, 'keyup');
const click$ = fromEvent( document, 'click');

/**
 * Queda escuchando cuando se presiona una tecla o el click del raton.
 * Dependiendo de lo que suceda, se emite en consola: 'click' o 'keyup'.
 */
merge( 
    keyup$.pipe( pluck('type') ), 
    click$.pipe( pluck('type') )
).subscribe( console.log );



