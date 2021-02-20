import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService} from "./services/auth.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {UserService} from "./services/user.service";

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private auth: AuthService, private us: UserService, private router:Router) {}

  accessPermissions = {
    users: 2,
    settings: 2,
    overview: 2
  };

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> {

    return this.auth.isLoggedIn().pipe(map(res =>{
      if(res){
          return true;
      }else{
        this.router.navigate(['']);
        return false;
      }
    }));
  }

  hasPermission(route: ActivatedRouteSnapshot):Observable<boolean>{
    return this.us.getUserInfo().pipe(map(user => {
      if(this.accessPermissions[route.routeConfig.path] !== undefined){
        console.log(this.accessPermissions[route.routeConfig.path]);
        if(this.accessPermissions[route.routeConfig.path] <= user.group) return true;
      }
      return false;
    }));
  }


}
