import { Categoria } from "./categoria";

export class Ejercicio {
    _id?: string;
    nombre?: string;
    nombreingles?: string;
    dificultad?: string;
    categoria?: Categoria;
    descripcion?: string;  
    url?: string; 
    progresion1?: string;
    progresion2?: string;
    progresion3?: string; 
}
