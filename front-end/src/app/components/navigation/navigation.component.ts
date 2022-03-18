import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Perfil } from 'src/app/models/perfil';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public perfil: Perfil | undefined;

  constructor(private router: Router, private service: UsuarioService) { }

  ngOnInit(): void {
  }

  estaLogeado() {
    if(this.service.isLogged()) {
      return true;
    }
    return false;
  }

  cerrarSesion() {
    sessionStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}
