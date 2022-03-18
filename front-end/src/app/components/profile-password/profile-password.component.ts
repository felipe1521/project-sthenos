import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/models/perfil';
import { Respuesta } from 'src/app/models/respuesta';
import { Usuario } from 'src/app/models/usuario';
import { PerfilService } from 'src/app/services/perfil.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-profile-password',
  templateUrl: './profile-password.component.html',
  styleUrls: ['./profile-password.component.css']
})
export class ProfilePasswordComponent implements OnInit {

  public usuario: Usuario;
  public perfil: Perfil;
  public respuesta: Respuesta | undefined;
  public nuevaclave: string = "";
  public actualclave: string = "";

  constructor(private serviceUsuario: UsuarioService, private servicePerfil: PerfilService) { 
    this.usuario = new Usuario();
    this.perfil = new Perfil();
  }

  ngOnInit(): void {
    const token = sessionStorage["token"];

    this.serviceUsuario.tokenUsuario(token).subscribe(data => {
      this.perfil = data;
    }, error => console.log(error));

    this.servicePerfil.getUsuario(token).subscribe(data => {
      this.usuario = data;
      console.log(this.usuario);
    }, error => console.log(error));
  }

  public editarClave() {
    this.usuario.clave = this.actualclave;
    this.serviceUsuario.editClave(this.nuevaclave,this.usuario).subscribe(data => {
        this.respuesta = data;
        console.log(this.respuesta);
      }, error => console.log(error));
  }
}
