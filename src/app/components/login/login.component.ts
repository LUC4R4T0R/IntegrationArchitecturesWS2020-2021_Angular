import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Credentials } from "../../models/credentials";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  model = new Credentials(undefined, undefined);

  onLogin(){
    this.auth.login(this.model).subscribe(res =>{
      if(res === 'success'){
        this.router.navigate(['overview']);
      }
    });
  }

  ngOnInit(): void {
  }

}
