import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Credentials } from "../../models/credentials";
import { Router } from "@angular/router";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router, private us: UserService) { }

  user: User;

  model = new Credentials(undefined, undefined);

  onLogin(){
    this.auth.login(this.model).subscribe(async res =>{
      if(res === 'success'){
        await this.loadUser();
        if(this.user.group >= 2)
          this.router.navigate(['overview']);
        else if(this.user.group === 1 && this.user.employeeId !== undefined)
          this.router.navigate(['salesman/'+this.user.employeeId+'/bonus']);
        else
          this.router.navigate(['permission']);
      }
    });
  }

  ngOnInit(): void {

  }

  async loadUser(){
    return new Promise((res, rej) => {
      this.us.getUserInfo().subscribe(user => {
        this.user = user;
        res();
      });
    });
  }
}
