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

  constructor(private router: Router, private service: UsuarioService) {
    this.usuario = new Usuario(); 
    this.perfil = new Perfil();
   }

  ngOnInit(): void {
  }

  public registrarUsuario() {
    this.perfil.usuario = this.usuario;
    this.service.signupUsuario(this.perfil).subscribe(data => {
        console.log("Se ha registrado Correctmente el usuario.");
        sessionStorage.setItem('token',data.token);
        this.router.navigate(['/']);
      },
      err => console.log("Se ha producido un error: "+err)
    );
  }

}
