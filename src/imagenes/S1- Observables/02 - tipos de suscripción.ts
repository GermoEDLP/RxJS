import { Observable, Observer } from "rxjs";

const obs$ = new Observable<string>((subs) => {
  subs.next("Hola");
  subs.next("Mundo");

  subs.next("Hola");
  subs.next("Mundo");

  subs.complete();

  subs.next("Hola");
  subs.next("Mundo");
});

// 3 formas de escuchar un observable

// Forma 1 (ambas son iguales)
obs$.subscribe(console.log);

obs$.subscribe((resp) => {
  console.log(resp);
});

//Forma 2
obs$.subscribe(
  (valor) => console.log("Arrojado por el next(): ", valor),
  (error) => console.log("Arrojado por un error: ", error),
  () => console.log("Funcion que ocurrecunado se llama al complete()")
);

// Forma 3
//Defino un objeto que me maneje toda la información de mi observador
const observer: Observer<any> = {
  next: (valor) => console.log("Arrojado por el next(): ", valor),
  error: (error) => console.log("Arrojado por un error: ", error),
  complete: () =>
    console.log("Funcion que ocurrecunado se llama al complete()"),
};

obs$.subscribe(observer);
