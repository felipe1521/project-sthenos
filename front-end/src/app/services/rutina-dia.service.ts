import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Perfil } from '../models/perfil';
import { RutinaDia } from '../models/rutina-dia';

@Injectable({
  providedIn: 'root'
})
export class RutinaDiaService {

  private url = 'http://localhost:3000/api/rutinadia';

  constructor(private http: HttpClient) { }

  public getTodosRutinaDias(): Observable<RutinaDia[]> {
    return this.http.get<RutinaDia[]>(`${this.url}/all`);
  }

  public getRutinaDiaByDia(dia: String | undefined,perfil: Perfil): Observable<RutinaDia[]> {
    return this.http.post<RutinaDia[]>(`${this.url}/dia/${dia}`,perfil);
  }

  public addRutinaDia(RutinaDia: RutinaDia): Observable<RutinaDia> {
    return this.http.post<RutinaDia>(`${this.url}/add`,RutinaDia);
  }

  public dropRutinaDia(id: String | undefined): Observable<void> {
    return this.http.delete<void>(`${this.url}drop/${id}`);
  }
}
