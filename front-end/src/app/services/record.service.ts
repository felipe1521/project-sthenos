import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Record } from 'src/app/models/record';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  private url = 'http://localhost:3000/api/record';

  constructor(private http: HttpClient) { }

  public getTodosRecords(): Observable<Record[]> {
    return this.http.get<Record[]>(`${this.url}/all`);
  }

  public getRecordById(id: string | undefined): Observable<Record> {
    return this.http.get<Record>(`${this.url}/find/${id}`);
  }

  public getRecordByEjercicio(id: string | undefined): Observable<Record[]> {
    return this.http.get<Record[]>(`${this.url}/findbyejer/${id}`);
  }

  public getStatsRecords(id: string | undefined) {
    return this.http.get<any>(`${this.url}/stats/${id}`);
  }

  public addRecord(Record: Record): Observable<Respuesta> {
    return this.http.post<Respuesta>(`${this.url}/add`,Record);
  }

  public dropRecord(id: string | undefined): Observable<void> {
    return this.http.delete<void>(`${this.url}/drop/${id}`);
  }
}
