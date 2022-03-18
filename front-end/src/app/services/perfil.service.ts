import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Perfil } from '../models/perfil';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private url = 'http://localhost:3000/api/perfil';

  constructor(private http: HttpClient) { }

  public editPerfil(id: string | undefined, perfil: Perfil): Observable<Perfil> {
    return this.http.put<Perfil>(`${this.url}/edit/${id}`, perfil);
  }

  public getPerfil(id: string | undefined): Observable<Perfil> {
    return this.http.get<Perfil>(`${this.url}/find/${id}`);
  }

  public getUsuario(token: string | null): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}/getuser/${token}`);
  }
}
