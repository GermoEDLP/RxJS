import { forkJoin, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

/**
 * Ene ste caso usaremos el frokJoin para realizar 3 peticiones ajax 
 * simultaneas a una api. Cuando las peticiones se hayan completado devolvera 
 * un objeto con las respuestas de todas. En el caso de que querramos manejar errores
 * podemos hacerlo general como el ultimo pipe, o de manera puntual como el 
 * pipe colocado luego de la declaración repos (tener en cuenta que da error porque 
 * se escribio mal adrede la url)
 */

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER    = 'klerith';

forkJoin({
    usuario: ajax.getJSON(
        `${ GITHUB_API_URL }/${ GITHUB_USER }`
    ),
    repos: ajax.getJSON(
        `${ GITHUB_API_URL }/${ GITHUB_USER }/repo123123s`
    ).pipe(
        catchError( err => of([]) )
    ),
    gists: ajax.getJSON(
        `${ GITHUB_API_URL }/${ GITHUB_USER }/gists`
    )
}).pipe(
    catchError( err => of(err) )
)
.subscribe( console.log );





