import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Perfil } from 'src/app/models/perfil';
import { Rutina } from 'src/app/models/rutina';
import { RutinaDia } from 'src/app/models/rutina-dia';
import { RutinaDiaService } from 'src/app/services/rutina-dia.service';
import { RutinaService } from 'src/app/services/rutina.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-list-planning',
  templateUrl: './list-planning.component.html',
  styleUrls: ['./list-planning.component.css']
})
export class ListPlanningComponent implements OnInit {

  public perfil: Perfil;
  public rutina: Rutina | undefined;
  public rutinaLunes: RutinaDia[] | undefined;
  public rutinaMartes: RutinaDia[] | undefined;
  public rutinaMiercoles: RutinaDia[] | undefined;
  public rutinaJueves: RutinaDia[] | undefined;
  public rutinaViernes: RutinaDia[] | undefined;
  public rutinaSabado: RutinaDia[] | undefined;
  public rutinaDomingo: RutinaDia[] | undefined;

  constructor(private router: Router, private rutinadiaService: RutinaDiaService, private rutinaService: RutinaService,
              private usuarioService: UsuarioService) {
    this.perfil = new Perfil();
  }

  ngOnInit(): void {
    this.perfil = new Perfil();
    const token = sessionStorage["token"];
    this.usuarioService.tokenUsuario(token).subscribe(data => {
      this.perfil = data;
      
      this.rutinadiaService.getRutinaDiaByDia('Lunes', this.perfil).subscribe(
        data => this.rutinaLunes = data
        ,error => console.log(error)
      );
      this.rutinadiaService.getRutinaDiaByDia('Martes', this.perfil).subscribe(
        data => this.rutinaMartes = data
        ,error => console.log(error)
      );
      this.rutinadiaService.getRutinaDiaByDia('Miercoles', this.perfil).subscribe(
        data => this.rutinaMiercoles = data
        ,error => console.log(error)
      );
      this.rutinadiaService.getRutinaDiaByDia('Jueves', this.perfil).subscribe(
        data => this.rutinaJueves = data
        ,error => console.log(error)
      );
      this.rutinadiaService.getRutinaDiaByDia('Viernes', this.perfil).subscribe(
        data => this.rutinaViernes = data
        ,error => console.log(error)
      );
      this.rutinadiaService.getRutinaDiaByDia('Sabado', this.perfil).subscribe(
        data => this.rutinaSabado = data
        ,error => console.log(error)
      );
      this.rutinadiaService.getRutinaDiaByDia('Domingo', this.perfil).subscribe(
        data => this.rutinaDomingo = data
        ,error => console.log(error)
      );
    }, error => console.log(error)); 
  }

  public creaRutina() {
    this.rutina = new Rutina();
    this.rutina.perfil = this.perfil;
    
    this.rutinaService.addRutina(this.rutina).subscribe(data => {
        this.rutina = data;
        console.log(this.rutina);
        this.router.navigate(['/planning/add',this.rutina._id]);
      }, error => console.log(error)
    );
    
  }

}
