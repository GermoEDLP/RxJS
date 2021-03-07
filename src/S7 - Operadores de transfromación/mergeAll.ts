import { fromEvent, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { debounceTime, map, mergeAll, pluck } from "rxjs/operators";
import { GithubUser } from "../interfaces/github-user.interface";
import { GithubUsersResp } from "../interfaces/github-users.interface";

const body = document.querySelector("body");
const input = document.createElement("input");
body.append(input);

const input$ = fromEvent<KeyboardEvent>(input, "keyup");

/**
 * El MergeAll() nos permite trabajar con emisiones de observables 
 * internos, y podemos trabajarlos antes de emitirlos en nuestro codigo.
 * En este caso, solo vamos a emitir los items que devuelve la peticion 
 * al url.
 */
input$
  .pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    map<string, Observable<GithubUsersResp>>((text) => ajax.getJSON(`http://api.github.com/search/users?q=${text}`)),
    mergeAll<GithubUsersResp>(),
    pluck<GithubUsersResp, GithubUser[]>('items')
  )
  .subscribe(console.log);

  /**
   * Los tipados nos ayudan a trabajar con las propiedades internas de
   * las estradas y salidas
   */