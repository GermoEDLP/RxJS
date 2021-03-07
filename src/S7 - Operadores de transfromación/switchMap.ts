import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, pluck, mergeAll, mergeMap, switchMap } from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';

import { GithubUser } from '../interfaces/github-user.interface';
import { GithubUsersResp } from '../interfaces/github-users.interface';


// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append( textInput, orderList );

// Helpers
const mostrarUsuarios = ( usuarios: GithubUser[] ) => {
    
    console.log(usuarios);
    orderList.innerHTML = '';

    for( const usuario of usuarios ) {

        const li  = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor  = document.createElement('a');
        anchor.href   = usuario.html_url;
        anchor.text   = 'Ver página';
        anchor.target = '_blank';

        li.append( img );
        li.append( usuario.login + ' ' );
        li.append( anchor );

        orderList.append(li);
    }

}



// Streams
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );


input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>('target','value'),
    mergeMap<string, Observable<GithubUsersResp>>( texto => ajax.getJSON(
        `https://api.github.com/search/users?q=${ texto }`
    )),
    pluck<GithubUsersResp, GithubUser[]>('items')
);//.subscribe( mostrarUsuarios );

const url = 'https://httpbin.org/delay/1?arg='; // + fernando

/**
 * Como no tengo el debounceTime() cada vez que presione una tecla voy a 
 * realizar una peticion ajax, pero el switchMap va a cancelar cada una de esas
 * a medida que se haga una nueva (se presione otra tecla), por lo que solo
 * la ultima es la que se va a hacer.
 */
input$.pipe(
    pluck('target','value'),
    switchMap( texto => ajax.getJSON(url + texto)  )
).subscribe( console.log );













