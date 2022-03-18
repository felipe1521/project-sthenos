import { Ejercicio } from "./ejercicio";
import { Perfil } from "./perfil";

export class Record {
    _id?: string;
    cantidad?: number;
    ejercicio?: Ejercicio;
    perfil?: Perfil;
    creacion?: string;
    sobrecarga?: number;
}
