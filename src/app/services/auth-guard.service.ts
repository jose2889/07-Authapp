import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth:AuthService) { }

  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    console.log(next);
    console.log(state);
    if ( this.auth.isAuthenticated() ){
      console.log("paso el guard")
      return true;
    }
    else{
      console.error("bloqueado por el guard")
      return false;
    }
  }
}
