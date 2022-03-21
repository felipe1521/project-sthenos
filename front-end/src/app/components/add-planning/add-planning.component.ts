import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ejercicio } from 'src/app/models/ejercicio';
import { Rutina } from 'src/app/models/rutina';
import { RutinaDia } from 'src/app/models/rutina-dia';
import { EjercicioService } from 'src/app/services/ejercicio.service';
import { RutinaDiaService } from 'src/app/services/rutina-dia.service';
import { RutinaService } from 'src/app/services/rutina.service';

@Component({
  selector: 'app-add-planning',
  templateUrl: './add-planning.component.html',
  styleUrls: ['./add-planning.component.css']
})
export class AddPlanningComponent implements OnInit {

  public rutinaLunes: RutinaDia[] = [];
  public rutinaMartes: RutinaDia[] = [];
  public rutinaMiercoles: RutinaDia[] = [];
  public rutinaJueves: RutinaDia[] = [];
  public rutinaViernes: RutinaDia[] = [];
  public rutinaSabado: RutinaDia[] = [];
  public rutinaDomingo: RutinaDia[] = [];

  public ejercicios: Ejercicio[] | undefined;
  public rutinaDia: RutinaDia;
  public rutina: Rutina;
  public id: string | undefined;

  constructor(private serviceEjercicio: EjercicioService, private rutinadiaService: RutinaDiaService, 
              private rutinaService: RutinaService, private router: Router, private route: ActivatedRoute) { 
    this.rutinaDia = new RutinaDia();
    this.rutina = new Rutina();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.rutinaService.getRutinaById(this.id).subscribe(data => {
        this.rutina = data;
        console.log(this.rutina);
      }, error => console.log(error)
    );

    this.serviceEjercicio.getTodosEjercicios().subscribe(data => {
      this.ejercicios = data;
      console.log(this.ejercicios);
    }, error => console.log(error));
  }

  public saveRutina(dia: string | undefined) {
    this.rutinaDia.dia = dia;
    this.rutinaDia.rutina = this.rutina;
    this.rutinadiaService.addRutinaDia(this.rutinaDia).subscribe(
      data => console.log(data),
      error => console.log(error));

    switch(this.rutinaDia.dia) { 
      case 'Lunes': { 
         this.rutinaLunes?.push(this.rutinaDia);
         console.log(this.rutinaLunes);
         break; 
      } 
      case 'Martes': { 
        this.rutinaMartes?.push(this.rutinaDia);
        console.log(this.rutinaMartes);
         break; 
      }
      case 'Miercoles': { 
        this.rutinaMiercoles?.push(this.rutinaDia);
        console.log(this.rutinaMiercoles);
        break; 
      } 
      case 'Jueves': { 
        this.rutinaJueves?.push(this.rutinaDia);
        console.log(this.rutinaJueves);
        break; 
      }
      case 'Viernes': { 
        this.rutinaViernes?.push(this.rutinaDia);
        console.log(this.rutinaViernes);
        break; 
      }
      case 'Sabado': { 
        this.rutinaSabado?.push(this.rutinaDia);
        console.log(this.rutinaSabado);
        break; 
      }
      case 'Domingo': { 
        this.rutinaDomingo?.push(this.rutinaDia);
        console.log(this.rutinaDomingo);
        break; 
      }     
    }
    this.rutinaDia = new RutinaDia();
  }

  public finalizar() {
    this.rutinaService.getRutinaById(this.id).subscribe(data => {
      this.rutina = data;
      console.log(this.rutina.perfil);
      const perfil = this.rutina.perfil;
      this.rutinaService.finishRutina(perfil, this.rutina).subscribe(
        data => console.log(data),
        error => console.log(error)
      );
      this.router.navigate(['/planning/']);
    }, error => console.log(error)
  );
    
  }

  public cancelar() {
    this.rutinaService.dropRutina(this.id).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.router.navigate(['/planning/']);
  }

}
