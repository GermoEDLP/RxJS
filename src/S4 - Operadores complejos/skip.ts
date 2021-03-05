import { fromEvent, interval } from "rxjs";
import { skip, takeUntil } from "rxjs/operators";

/**
 * Un intervalo muestra valores numericos cada 1s y un listener escucha
 * los clicks en el documento
 */
const intervalo$ = interval(1000);
const click$ = fromEvent<MouseEvent>(document, "click")
                    .pipe(
                        skip(1)         // EL primer click no generará emisión, recien el segundo lo hará
                    );

/**
 * Cuando el lsitener del click escucha un evento, completa el intervalo
 */
intervalo$.pipe(takeUntil(click$)).subscribe({
  next: (val) => console.log("Next: ", val),
  complete: () => console.log("Completado"),
});

/**
 0
 1
 2      --> Hago un click en cualquier parte del documento
 3
 4
 5      --> Hago un segundo click en cualquier parte del documento
 Completado
 */
