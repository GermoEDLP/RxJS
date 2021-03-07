import { fromEvent, of } from 'rxjs';
import { tap, map, mergeMap, pluck, catchError, switchMap, exhaustMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

// Helper
const peticionHttpLogin = ( userPass ) => 
    ajax.post('https://reqres.in/api/login?delay=1', userPass)
        .pipe(
            pluck('response', 'token'),
            catchError( err => of('xxx') )
        )


// creando un formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass  = document.createElement('input');
const submitBtn  = document.createElement('button');

// Configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append( inputEmail, inputPass, submitBtn );
document.querySelector('body').append( form );

// Streams
const submitForm$ = fromEvent<Event>( form, 'submit' )
    .pipe(
        tap( ev => ev.preventDefault() ),
        map( ev => ({
            email: ev.target[0].value,
            password: ev.target[1].value
        })),
        // mergeMap( peticionHttpLogin )
        // switchMap( peticionHttpLogin )
        exhaustMap( peticionHttpLogin )
    );

/**
 * SI PRESIONO EL BOTON SUBMIT 5 VECES RAPIDO
 * 
 * mergeMap()   ==>  Se realizan 5 peticiones y todas se manejan hasta 
 *                   que se completan. Por lo que se registran las 5 y se ejecutan 
 *                   las 5.
 * switchMap()  ==>  Se ejecutan las 5 peticiones, pero cada nueva peticion
 *                   cancela la anterior, por lo que solo se realiza 1 sola
 *                   de manera efectiva . Entonces se registran las 5 y se ejecuta 1.
 * exhaustMap() ==>  Al ejecutarse la primera emision, se ignoran las demas 
 *                   hasta que esta se completa, por lo que solo se regitra 1
 *                   y se ejecuta 1.   
 */


submitForm$.subscribe( token => {
    console.log(token);
})


