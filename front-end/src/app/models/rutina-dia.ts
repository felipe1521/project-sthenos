import { Ejercicio } from "./ejercicio";
import { Rutina } from "./rutina";

export class RutinaDia {
    _id?: string;
    dia?: string;
    ejercicio?: Ejercicio;
    series?: number;
    repeticiones?: number;
    rutina?: Rutina;
}
