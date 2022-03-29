import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Perfil } from 'src/app/models/perfil';
import { Usuario } from 'src/app/models/usuario';
import { PerfilService } from 'src/app/services/perfil.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public usuario: Usuario;
  public perfil: Perfil;

  constructor(private router: Router, private servicePerfil: PerfilService, private serviceUsuario: UsuarioService) { 
    this.usuario = new Usuario(); 
    this.perfil = new Perfil();
  }

  ngOnInit(): void {
    this.usuario = new Usuario(); 
    this.perfil = new Perfil();
    const token = sessionStorage["token"];
    this.serviceUsuario.tokenUsuario(token).subscribe(data => {
      this.perfil = data;
      console.log(this.perfil);
    }, error => console.log(error));
  }

  public cerrarSesion() {
    sessionStorage.removeItem('token');
    this.router.navigate(['/'])
    .then(() => {
      window.location.reload();
    });
  }

  public editClave(id: string | undefined){
    this.router.navigate(['/profile/pass', id]);
  }

}
