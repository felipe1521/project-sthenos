import { Component, OnInit } from '@angular/core';
import { Ejercicio } from 'src/app/models/ejercicio';
import { Estadistica } from 'src/app/models/estadistica';
import { Perfil } from 'src/app/models/perfil';
import { Record } from 'src/app/models/record';
import { Respuesta } from 'src/app/models/respuesta';
import { EjercicioService } from 'src/app/services/ejercicio.service';
import { RecordService } from 'src/app/services/record.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-list-record',
  templateUrl: './list-record.component.html',
  styleUrls: ['./list-record.component.css']
})
export class ListRecordComponent implements OnInit {

  public ejercicios: Ejercicio[] | undefined;
  public byEjercicio: Ejercicio;
  public records: Record[] | undefined;
  public estadistica: Estadistica;
  public record: Record;
  public perfil: Perfil;
  public respuesta: Respuesta | undefined;

  constructor(private service: RecordService, private serviceEjercicio: EjercicioService, 
              private usuarioService: UsuarioService, private recordService: RecordService) { 
    this.byEjercicio = new Ejercicio();
    this.estadistica = new Estadistica();
    this.record = new Record();
    this.perfil = new Perfil();
  }

  ngOnInit(): void {
    this.serviceEjercicio.getTodosEjercicios().subscribe(data => {
      this.ejercicios = data;
      console.log(this.ejercicios);
    }, error => console.log(error));

    const token = sessionStorage["token"];
    this.usuarioService.tokenUsuario(token).subscribe(data => {
      this.perfil = data;
      console.log(this.perfil);
    }, error => console.log(error));
  }

  public buscarRecords() {
    this.service.getRecordByEjercicio(this.byEjercicio._id).subscribe(data => {
      this.records = data;
    }, error => console.log(error));
    this.service.getStatsRecords(this.byEjercicio._id).subscribe(data => {
      this.estadistica = data;
      console.log(this.estadistica);
    }, error => console.log(error));
  }

  public errorGuardadoRecord() {
    if(this.respuesta?.error == 1) {
      return true;
    } else {
      return false;
    }
  }

  public deleteRecord(id: string | undefined) {
    this.service.dropRecord(id).subscribe(
      data => console.log('Se ha eliminado el Record'), 
      error => console.log(error));
  }

  public saveRecord() {
    if(this.record.sobrecarga === undefined) {
      this.record.sobrecarga = 0;
    }
    this.record.perfil = this.perfil;
    console.log(this.record);
    this.recordService.addRecord(this.record).subscribe(data => {
      this.respuesta = data;
      console.log(this.respuesta);
      if(this.respuesta.error == 0) window.location.reload();
    }, err => console.log("Se ha producido un error: "+err)
    );
  }

}
