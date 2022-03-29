import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Perfil } from 'src/app/models/perfil';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-form-signup',
  templateUrl: './form-signup.component.html',
  styleUrls: ['./form-signup.component.css']
})
export class FormSignupComponent implements OnInit {

  public usuario: Usuario;
  public perfil: Perfil;
  public error: number = 0; 

  constructor(private router: Router, private service: UsuarioService) {
    this.usuario = new Usuario(); 
    this.perfil = new Perfil();
   }

  ngOnInit(): void {
  }

  public registrarUsuario() {
    this.perfil.usuario = this.usuario;
    this.service.signupUsuario(this.perfil).subscribe(data => {
        console.log("Se ha registrado Correctamente el usuario.");
        this.error = 2;
        //this.router.navigate(['/signin']);
      },error => {
        console.log("Se ha producido un error: "+error);
        this.error = 1;
      });
  }

  public errorRegistro() {
    return this.error == 1 ? true: false;
  }

  public exitoRegistro() {
   return this.error == 2 ? true: false;
  }

}
