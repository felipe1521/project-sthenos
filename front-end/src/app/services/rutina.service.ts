import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rutina } from '../models/rutina';

@Injectable({
  providedIn: 'root'
})
export class RutinaService {

  private url = 'http://localhost:3000/api/rutina';

  constructor(private http: HttpClient) { }

  public getRutina(): Observable<Rutina> {
    return this.http.get<Rutina>(`${this.url}/find`);
  }

  public getRutinaById(id: string | undefined): Observable<Rutina> {
    return this.http.get<Rutina>(`${this.url}/get/${id}`);
  }

  public addRutina(Rutina: Rutina): Observable<Rutina> {
    return this.http.post<Rutina>(`${this.url}/add`,Rutina);
  }

  public finishRutina(id: string | undefined): Observable<void> {
    return this.http.delete<void>(`${this.url}/finish/${id}`);
  }

  public dropRutina(id: string | undefined): Observable<void> {
    return this.http.delete<void>(`${this.url}/drop/${id}`);
  }
}
