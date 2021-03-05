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

  // Este return se llama cuando se realiza el unsubscribe()
  return () => {
      clearInterval(interval);
      console.log('Intervalo terminado');      
  }
});

// Me subscribo al observable y muestro en pantalla los numeros. 
// Al subscribirme, retorno un tipo "Subscription" que puedo almacenar en una variable
const subs = intervalo$.subscribe((num) => console.log("Num: ", num));


setTimeout(() => {
    // Llamando la subscripcion y ejecutando el metodo unsubscribe termino de observar.
    // Cuando llamo al unsubscribe(), dentro del observable se ejecuta lo que aparece como retorno, dentro del return.
    subs.unsubscribe();
}, 3000);