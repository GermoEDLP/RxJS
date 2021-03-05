import { Observable, Observer } from "rxjs";

const observer: Observer<number> = {
  next: (valor) => console.log("next: ", valor),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("complete"),
};

const intervalo$ = new Observable((subs) => {
  //Crear un contador
  let num = 0;

  let interval = setInterval(() => {
    subs.next(num);
    num++;
  }, 1000);

  setTimeout(() => {
      subs.complete();
  }, 2500);

  // Este return se llama cuando se realiza el unsubscribe()
  return () => {
      clearInterval(interval);
      console.log('Intervalo terminado');      
  }
});

// Si tengo varias subscripciones deberia de cancelarlas a todas
const subs1 = intervalo$.subscribe((num) => console.log("Num: ", num));
const subs2 = intervalo$.subscribe((num) => console.log("Num: ", num));
const subs3 = intervalo$.subscribe((num) => console.log("Num: ", num));


// Opcion 1 - desprolija y reiterativa 
setTimeout(() => {
    subs1.unsubscribe();
    subs2.unsubscribe();
    subs3.unsubscribe();
}, 3000);

// Opcion 2 - mas pulcra
subs1.add(subs2)
     .add(subs3);

setTimeout(() => {
    subs1.unsubscribe();
}, 3000);
//El problema con esta opcion, es que el metodo complete() solo es llamado en la subs1.

