import { of, from } from "rxjs";

/**
 * of()   ==> Convierte los argumentos que le pasemos en una secuencia sincrona de emisiones
 * from() ==> Convierte un array que le pasemos a una secuencia sincrona de emisiones
 * 
 *  from([1,2,3]) es analogo a decir of(1,2,3) ó of(...[1,2,3])
 * 
 */
const obs$ = of(1,2,3,4,5,6);

const obs2$ = of([1,2,3,4,5,6]);

const obs2b$ = from([1,2,3,4,5,6]);

const obs3$ = of([1,2,3,4],5,6);

const obs4$ = of(...[1,2,3,4],5,6);

const obs5$ = of([1,2], true, Promise.resolve(true), {a: 3}, function(){});



obs$.subscribe();
/*
1
2
3
4
5
6
*/

obs2$.subscribe();
/*
Hay solo un argumento, el array de elementos
[1,2,3,4,5,6]
*/

obs2b$.subscribe();
/*
1
2
3
4
5
6
*/

obs3$.subscribe();
/*  
[1,2,3,4]
5
6
*/

obs4$.subscribe();
/*
El operador spred hace que evaluemos cada elemento dentro del array
1
2
3
4
5
6
*/

obs5$.subscribe();
/*
[1,2]
true
Promise.resolve(true)
{a: 3}
function(){}
*/


