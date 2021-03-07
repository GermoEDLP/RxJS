import { fromEvent, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { debounceTime, map, mergeAll, mergeMap, pluck } from "rxjs/operators";
import { GithubUser } from "../interfaces/github-user.interface";
import { GithubUsersResp } from "../interfaces/github-users.interface";

const body = document.querySelector("body");
const input = document.createElement("input");
body.append(input);

const input$ = fromEvent<KeyboardEvent>(input, "keyup");

/**
 * Podemos utilizar el mergeMap() integrando los dos operadores
 */
input$
  .pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    mergeMap<string, Observable<GithubUsersResp>>((text) => ajax.getJSON(`http://api.github.com/search/users?q=${text}`)),
    pluck<GithubUsersResp, GithubUser[]>('items')
  )
  .subscribe(console.log);

  /**
   * Los tipados nos ayudan a trabajar con las propiedades internas de
   * las estradas y salidas
   */