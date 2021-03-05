import { of } from "rxjs";
import { take } from "rxjs/operators";


const numeros$ = of(1,2,3,4,5);

numeros$.pipe(
    take(3)
).subscribe({
    next: val => console.log(val),
    complete: () => console.log('Complete')        
});

/**
 1
 2
 3
 Complete      --> Aunque aun tenia dos emisiones más
 */