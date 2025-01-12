import { Component, inject, OnInit } from '@angular/core';
import { ExercisesService } from '../../services/exercises.service';
import { Observable } from 'rxjs/internal/Observable';
import { switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.scss'
})
export class ExercisesComponent implements OnInit {

  public exercises$: any;
  public exercise$: any;
  public exerciseService = inject(ExercisesService);

  async ngOnInit() {
    this.exercises$ = await this.exerciseService.getExercises();
    this.exercise$ = await this.exerciseService.getExerciseID(this.exercises$[0].id);
  }
}
