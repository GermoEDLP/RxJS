import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<number> = {
  next: (valor) => console.log("next: ", valor),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("complete"),
};

// Emite numeros random cada 2,5 segundos
const obs$ = new Observable<number>(subs => {

    let interval = setInterval(()=>{
        subs.next(Math.random());
    }, 2500);

    return () =>{
        clearInterval(interval);
    }

});

// Situación 1 = al subscribirme 2 veces, cada subscripción recibira numeros distintos
const sub1 = obs$.subscribe(rnd => console.log('Sub1: ', rnd));
const sub2 = obs$.subscribe(rnd => console.log('Sub2: ', rnd));


// Situación 2 = Defino un subject (me crea un observable y me permite manejar multiples llamadas)
const subject$ = new Subject<number>();
obs$.subscribe(subject$);

const sub3 = subject$.subscribe(rnd => console.log('Sub3: ', rnd));
const sub4 = subject$.subscribe(rnd => console.log('Sub4: ', rnd));
//Ahora debo subscribirme al subject. De esta manera manejo la respuesta


// Situacion 3 - Puedo usar el subject para insertar información externa al observable
// convirtiendolo de un "Cold Observable" en un "Hot Observable"

const subject2$ = new Subject<number>();
const intervalSubject = obs$.subscribe(subject$);

const sub5 = subject$.subscribe(rnd => console.log('Sub5: ', rnd));
const sub6 = subject$.subscribe(rnd => console.log('Sub6: ', rnd));

setTimeout(() => {
    // Antes de terminar de recibir datos del observador obs$, se manda un 30 como dato y despues se completa
    subject$.next(30);
    subject$.complete();
    intervalSubject.unsubscribe();
}, 5000);
// Esto nos sirve para poder modificar el flujo de datos del observador y enviar info propia