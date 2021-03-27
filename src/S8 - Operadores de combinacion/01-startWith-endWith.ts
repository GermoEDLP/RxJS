import { of } from 'rxjs';
import { startWith, endWith } from 'rxjs/operators';


/**
 * starteWith() ==>  Cada vez que el observable numeros$ sea subscripto
 *                   Antes de cualquier emisión, se emite lo que está 
 *                   como argumento del startWith()
 * endWith()    ==>  Cada vez que el observable numeros$ sea subscripto
 *                   al finalizar todas las emisiones, se emite lo que está 
 *                   como argumento del endWith()  
 */

const numeros$ = of(1,2,3).pipe(
    startWith('a','b','c'),
    endWith('x','y','z'),
);



numeros$.subscribe( console.log );



