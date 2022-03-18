import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Ejercicio } from 'src/app/models/ejercicio';
import { EjercicioService } from 'src/app/services/ejercicio.service';

@Component({
  selector: 'app-detail-exercise',
  templateUrl: './detail-exercise.component.html',
  styleUrls: ['./detail-exercise.component.css']
})
export class DetailExerciseComponent implements OnInit {

  id: string | undefined;
  ejercicio: Ejercicio;

  constructor(private route: ActivatedRoute ,private location: Location, private ejercicioService: EjercicioService) { 
    this.ejercicio = new Ejercicio();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id) {
      console.log("Buscando Ejercicio: "+this.id);
      this.ejercicioService.getEjercicioById(this.id).subscribe(
        data => {
          this.ejercicio = data;
          console.log(this.ejercicio);
        }, error => console.log(error)
      );
    }
  }
  
  public volver() {
    this.location.back();
  }
}
