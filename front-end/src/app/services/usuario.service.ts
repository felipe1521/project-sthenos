import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Perfil } from '../models/perfil';
import { Respuesta } from '../models/respuesta';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'http://localhost:3000/api/usuario';

  constructor(private http: HttpClient) { }

  public signupUsuario(perfil: Perfil): Observable<Perfil> {
    return this.http.post<Perfil>(`${this.url}/signup/`, perfil);
  }

  public signinUsuario(usuario: Usuario) {
    return this.http.post<any>(`${this.url}/signin/`,usuario);
  }

  public tokenUsuario(tkn: string | null): Observable<Perfil> {
    return this.http.get<Perfil>(`${this.url}/token/${tkn}`);
  }

  public editClave(pass: string | undefined, usuario: Usuario): Observable<Respuesta> {
    return this.http.put<Respuesta>(`${this.url}/editpass/${pass}`, usuario);
  }
  
  public isLogged() {
    if(sessionStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  
}
