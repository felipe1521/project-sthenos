import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Perfil } from 'src/app/models/perfil';
import { Usuario } from 'src/app/models/usuario';
import { PerfilService } from 'src/app/services/perfil.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  public usuario: Usuario;
  public perfil: Perfil;

  constructor(private serviceUsuario: UsuarioService, private servicePerfil: PerfilService, private router: Router) { 
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

  public editarPerfil() {
    this.perfil.usuario = this.usuario;
    this.servicePerfil.editPerfil(this.perfil._id,this.perfil).subscribe(
      data => {
        this.perfil = data;
        console.log(data);
      }, error => console.log(error));
      
      this.router.navigate(['/profile/'])
        .then(() => {
          window.location.reload();
        });
  }

}
