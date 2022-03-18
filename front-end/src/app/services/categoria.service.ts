import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private url = 'http://localhost:3000/api/categoria';

  constructor(private http: HttpClient) { }
  
  public getTodosCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.url}/all`);
  }

  public getCategoriaById(id: string | undefined): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.url}/find/${id}`);
  }
}
