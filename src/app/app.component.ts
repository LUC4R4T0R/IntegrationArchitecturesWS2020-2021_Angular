import { Component, OnInit } from '@angular/core';
import { AuthService } from "./services/auth.service";
import {UserService} from "./services/user.service";
import {User} from "./models/user";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IntegrationArchitecturesWS20202021Angular';

  constructor(private auth:AuthService, private us:UserService) {
  }

  user: User = new User(undefined, undefined, undefined);

  ngOnInit(){
    this.us.getUserInfo().subscribe(user => {
      this.user = user;
    });
  }
}
