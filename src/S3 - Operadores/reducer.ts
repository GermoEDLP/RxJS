import { interval } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

const acumualdor = (acum: number, curr: number) => {
  return acum + curr;
};

/**
 * Un intervalo emite numeros cada 500 milesimas, lo detengo con un take(), evaluo los pasos
 * con un tap() y el reducer() usa la funcion acumulador() como callback para sumar todas las emisiones
 */
interval(500)
  .pipe(take(5), tap(console.log), reduce(acumualdor))
  .subscribe({
    next: (val) => console.log("reduce: ", val),
    complete: () => console.log("Completado"),
  });
/**
 0              --> Desde aca...
 1
 2
 3
 4              --> Hasta aca, son del tap
 reduce: 10     --> Solo emite cuando completa
 Completado
 */
