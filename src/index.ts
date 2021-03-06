import { fromEvent } from "rxjs";
import { debounceTime, pluck } from "rxjs/operators";


let input = document.createElement('input');
const body = document.querySelector('body');
body.append(input);


const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
    debounceTime(500),
    pluck('target', 'value')
).subscribe(console.log);