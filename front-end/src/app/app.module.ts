import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FormSignupComponent } from './components/form-signup/form-signup.component';
import { FormSigninComponent } from './components/form-signin/form-signin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { ListRecordComponent } from './components/list-record/list-record.component';
import { ListExerciseComponent } from './components/list-exercise/list-exercise.component';
import { HomeComponent } from './components/home/home.component';
import { DetailExerciseComponent } from './components/detail-exercise/detail-exercise.component';
import { PlanningComponent } from './components/planning/planning.component';
import { AddPlanningComponent } from './components/add-planning/add-planning.component';
import { ListPlanningComponent } from './components/list-planning/list-planning.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ListProfileComponent } from './components/list-profile/list-profile.component';
import { ProfilePasswordComponent } from './components/profile-password/profile-password.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FormSignupComponent,
    FormSigninComponent,
    ProfileComponent,
    ListRecordComponent,
    ListExerciseComponent,
    HomeComponent,
    DetailExerciseComponent,
    PlanningComponent,
    AddPlanningComponent,
    ListPlanningComponent,
    EditProfileComponent,
    ListProfileComponent,
    ProfilePasswordComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'planning', component: PlanningComponent, children: [
        {path: '', component: ListPlanningComponent},
        {path: 'add/:id', component: AddPlanningComponent},
      ]},
      {path: 'exercises/detail/:id', component: DetailExerciseComponent},
      {path: 'exercises', component: ListExerciseComponent},
      {path: 'records', component: ListRecordComponent},
      {path: 'signup', component: FormSignupComponent},
      {path: 'signin', component: FormSigninComponent},
      {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], children: [
        {path: '', component: ListProfileComponent, canActivate: [AuthGuard]},
        {path: 'edit/:id', component: EditProfileComponent, canActivate: [AuthGuard]},
        {path: 'pass/:id', component: ProfilePasswordComponent, canActivate: [AuthGuard]},
      ]},
    ])
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
