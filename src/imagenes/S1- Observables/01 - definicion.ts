import { Observable } from "rxjs";

const obs$ = new Observable<string>((subs) => {
  subs.next("Hola");
  subs.next("Mundo");

  subs.next("Hola");
  subs.next("Mundo");

  // AL completar el suscriptor, lo que emita despues no será escuchado por el escuchador externo
  subs.complete();

  subs.next("Hola");
  subs.next("Mundo");
});

//configuro una escucha externa
obs$.subscribe(console.log);
