import { from, of, range } from "rxjs";
import { filter } from "rxjs/operators";

interface Personaje {
  nombre: string;
  tipo: string;
}

const personajes: Personaje[] = [
  {
    nombre: "Batman",
    tipo: "heroe",
  },
  {
    nombre: "Superman",
    tipo: "heroe",
  },
  {
    nombre: "Joker",
    tipo: "villano",
  },
];
