import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private service: UsuarioService) {}

  canActivate() {
    if(this.service.isLogged()) {
        return true;
      
    }
    this.router.navigate(['/signin']);
    return false;
  }
  
}
