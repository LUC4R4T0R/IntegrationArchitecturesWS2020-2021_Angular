import { Component, OnInit } from '@angular/core';
import { AuthService } from "./services/auth.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IntegrationArchitecturesWS20202021Angular';
  loginState = false;

  constructor(private auth:AuthService) {
  }

  ngOnInit(){
    this.loadLoginState();
  }

  loadLoginState(){
    this.auth.isLoggedIn().subscribe(result => {
      this.loginState = result;
    });
  }
}
