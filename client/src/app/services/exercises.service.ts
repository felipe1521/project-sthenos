import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  public apiUrl = "http://localhost:8080/app/exercise/";

  constructor(private http: HttpClient) { }

  public getExercises() {
    return this.http.get<any[]>(this.apiUrl+ "all").toPromise();
  }

  public getExerciseID(id: any) {
    return this.http.get<any>(this.apiUrl+ id).toPromise();
  }
}
