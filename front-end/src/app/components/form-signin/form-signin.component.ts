import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Respuesta } from 'src/app/models/respuesta';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-form-signin',
  templateUrl: './form-signin.component.html',
  styleUrls: ['./form-signin.component.css']
})
export class FormSigninComponent implements OnInit {

  public usuario: Usuario;
  public error: number = 0; 

  constructor(private router: Router, private service: UsuarioService) {
    this.usuario = new Usuario(); 
   }

  ngOnInit(): void {
  }

  public iniciarSesion() {
    this.service.signinUsuario(this.usuario).subscribe( res => {
        sessionStorage.setItem('token',res.token);
        this.router.navigate(['/']);
      },error => {
        console.log(error);
        this.error = 1;
      });
    const resetForm = <HTMLFormElement>document.getElementById("formulario");
    resetForm.reset();
  }

  public errorInicioSesion() {
    if(this.error == 1) {
      return true;
    }
    return false;
  }
}
