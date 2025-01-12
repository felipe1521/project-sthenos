import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExercisesComponent } from './components/exercises/exercises.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'exercises', component: ExercisesComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
