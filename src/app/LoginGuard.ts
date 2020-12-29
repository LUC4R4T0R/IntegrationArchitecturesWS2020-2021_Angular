import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService} from "./services/auth.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private auth: AuthService, private router:Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> {
    return this.auth.isLoggedIn().pipe(map(res =>{
      if(res) return true;
      this.router.navigate(['']);
      return false;
    }));
  }
}
