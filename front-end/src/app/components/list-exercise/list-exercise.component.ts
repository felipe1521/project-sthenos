import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { Ejercicio } from 'src/app/models/ejercicio';
import { CategoriaService } from 'src/app/services/categoria.service';
import { EjercicioService } from 'src/app/services/ejercicio.service';

@Component({
  selector: 'app-list-exercise',
  templateUrl: './list-exercise.component.html',
  styleUrls: ['./list-exercise.component.css']
})
export class ListExerciseComponent implements OnInit {

  public ejercicios: Ejercicio[] | undefined;
  public categoria: Categoria | undefined;
  public getejercicio: Ejercicio;

  constructor(private ejercicioService: EjercicioService, private categoriaService: CategoriaService) { 
    this.getejercicio = new Ejercicio();
  }

  ngOnInit(): void {
    this.ejercicioTodos();
  }

  public ejercicioByCategoria(id: string) {
    this.ejercicioService.getEjercicioByCategoria(id).subscribe(data => {
      this.ejercicios = data;
      console.log(this.ejercicios);
    }, error => console.log(error));
  }

  public ejercicioTodos() {
    this.categoria = new Categoria();
    this.ejercicioService.getTodosEjercicios().subscribe(data => {
      this.ejercicios = data;
      console.log(this.ejercicios);
    }, error => console.log(error));
  }

  public buscarEjercicio() {
    this.categoria = new Categoria();
    console.log(this.getejercicio.nombre);
    this.ejercicioService.getEjercicioByNombre(this.getejercicio.nombre).subscribe(
      data => {
        this.ejercicios = data;
        console.log(this.ejercicios);
      }, error =>console.log(error)
    );
  }

  public buscarCategoria(id: string) {
    this.categoriaService.getCategoriaById(id).subscribe(
      data => {
        this.categoria = data;
        console.log(this.categoria);
        //Llamando al metodo que busca los ejercicios por categoria
        this.ejercicioByCategoria(id);
      }, error => console.log(error)
    );
  }
}
