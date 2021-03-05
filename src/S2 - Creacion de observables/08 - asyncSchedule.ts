import { asyncScheduler } from "rxjs";

const saludar = () => console.log("Hola mundo");
const saludar2 = (nombre) => console.log(`Hola ${nombre}`);

const numeros = num => console.log(num);

/**
 * El asyncScheduler nos permite generar un setTimeout o un setInterval de manera
 * tal que nos devuelva una usbscripción. Tambien, cuando nos desubscribimos,
 * detenemos la ejecución del intervalo
 */

// Ejemplo usando funciones de JS

setTimeout(() => {
  saludar();
}, 3000);

setTimeout(() => {
  saludar2("German");
}, 3000);

setInterval(() => {
  saludar();
}, 1500);

setInterval(() => {
  saludar2("German");
}, 1500);

// Imprime numeros consecutivos cada 1,5 segundos
let num = 0;
setInterval(() => {
    numeros(num)
    num++;
  }, 1500);


// Ejemplo usando asyncScheduler

// setTimeout ==>
asyncScheduler.schedule(saludar, 3000);
asyncScheduler.schedule(saludar2, 3000, 'German');

// setInterval ==>
/**
 * La funcion no puede ser de flecha. El primer parametro es la función a ejecutar, 
 * el segundo es en cuanto empezar a ejecutar y el tercero es el valor inicial del parametro 
 * de la funcion. 
 * Dentro debe existir un llamado al this.shedule. Esto configura el siguiente intervalo.
 * EL primer parametro nuevo de la función y el segundo es el intervalo entre ejecuciones.
 */
asyncScheduler.schedule(function(numero){
    numeros(numero)
    this.schedule(numero + 1, 1000);    
}, 3000, 0)


/**
 * Si quiero parar la subscripción solo debo utilizar la función unsubscribe, 
 * ya que la devolución de la función asyncSchedule es una Subscription
 */

 const subs$ = asyncScheduler.schedule(saludar, 3000);

 subs$.unsubscribe();