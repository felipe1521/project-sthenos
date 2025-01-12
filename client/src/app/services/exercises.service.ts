import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  public apiUrl = "https://exercisedb.p.rapidapi.com/exercises?limit=10&offset=0";

  constructor(private http: HttpClient) { }

  public getExercises() {
    const headers = new HttpHeaders({
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
      'x-rapidapi-key': 'e7c27b51eamshe639af0fd3c9ac9p141fcajsn9d099610edb7'
    });
    return this.http.get<any[]>(this.apiUrl, { headers });
  }

  public getExerciseID(id: any) {
    return this.http.get<any>(this.apiUrl+ id);
  }
}
