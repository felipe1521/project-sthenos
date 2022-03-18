import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ejercicio } from '../models/ejercicio';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {

  private url = 'http://localhost:3000/api/ejercicio';

  constructor(private http: HttpClient) { }
  
  public getTodosEjercicios(): Observable<Ejercicio[]> {
    return this.http.get<Ejercicio[]>(`${this.url}/all`);
  }

  public getEjercicioById(id: string | undefined): Observable<Ejercicio> {
    return this.http.get<Ejercicio>(`${this.url}/find/${id}`);
  }

  public getEjercicioByNombre(nombre: string | undefined): Observable<Ejercicio[]> {
    return this.http.get<Ejercicio[]>(`${this.url}/findbynom/${nombre}`);
  }

  public getEjercicioByCategoria(cate: string | undefined): Observable<Ejercicio[]> {
    return this.http.get<Ejercicio[]>(`${this.url}/findbycate/${cate}`);
  }

  public addEjercicio(ejercicio: Ejercicio): Observable<Ejercicio> {
    return this.http.post<Ejercicio>(`${this.url}/add`,ejercicio);
  }

  public editEjercicio(id: string | undefined, ejercicio: Ejercicio): Observable<Ejercicio> {
    return this.http.put<Ejercicio>(`${this.url}/edit/${id}`, ejercicio);
  }

  public dropEjercicio(id: string | undefined): Observable<void> {
    return this.http.delete<void>(`${this.url}drop/${id}`);
  }
}
