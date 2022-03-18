import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Perfil } from 'src/app/models/perfil';
import { Usuario } from 'src/app/models/usuario';
import { PerfilService } from 'src/app/services/perfil.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.css']
})
export class ListProfileComponent implements OnInit {

  public usuario: Usuario;
  public perfil: Perfil;

  constructor(private router: Router, private serviceUsuario: UsuarioService, private servicePerfil: PerfilService) {
    this.usuario = new Usuario(); 
    this.perfil = new Perfil();
  }

  ngOnInit(): void {
    const token = sessionStorage["token"];
    this.serviceUsuario.tokenUsuario(token).subscribe(data => {
      this.perfil = data;
      console.log(this.perfil);
    }, error => console.log(error));
  }

  public editPerfil(id: string | undefined){
    this.router.navigate(['/profile/edit', id]);
  }
}
