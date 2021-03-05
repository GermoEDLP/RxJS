import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (valor) => console.log("Arrojado por el next(): ", valor),
  error: (error) => console.log("Arrojado por un error: ", error),
  complete: () =>
    console.log("Funcion que ocurrecunado se llama al complete()"),
};
