import { fromEvent, combineLatest, from } from 'rxjs';
import { pluck } from 'rxjs/operators';

/**
 * Este operador funciona de a grupo, es decir, nosotros le pasamos 
 * observables como parametro y el combineLatest() espera a que 
 * todos hayan emitido al menos una vez y retorna un arreglo con 
 * las ULTIMAS emisiones de cada observable.
 * Cuando todos los observables se completen, recien ahi se completaria la 
 * subscripcion
 */

// const keyup$ = fromEvent( document, 'keyup');
// const click$ = fromEvent( document, 'click');

// combineLatest( 
//     keyup$.pipe( pluck('type') ), 
//     click$.pipe( pluck('type') )
// ).subscribe( console.log );

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmail.com';

input2.placeholder = '*********';
input2.type = 'password'

document.querySelector('body').append(input1, input2);

/**
 * Cuando hayamos escrito en ambos inputs al menos una 
 * letra, se emitirá un objeto con que contenga el ultimo
 * value emito por ambos 
 */

// Helper
const getInputStream = ( elem: HTMLElement ) => 
    fromEvent<KeyboardEvent>( elem, 'keyup' ).pipe(
        pluck<KeyboardEvent,string>('target','value'));


combineLatest([
    getInputStream( input1 ),
    getInputStream( input2 )
]
).subscribe( console.log )
