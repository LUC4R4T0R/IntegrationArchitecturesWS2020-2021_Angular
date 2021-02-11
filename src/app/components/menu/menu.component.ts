import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { MenuEntry } from "../../models/menu-entry";
import { Router } from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  entries:MenuEntry[] = [
    new MenuEntry('ia2020', '../overview'),
    new MenuEntry('Overview', '../overview'),
    new MenuEntry('User Management', '../users'),
    new MenuEntry('Settings', '../settings'),
    new MenuEntry('Swagger', undefined, 'http://localhost:8080/api/swagger-api'),
  ];

  constructor(private auth:AuthService, private us:UserService, private router:Router) { }

  displayName:string;

  ngOnInit(): void {
    this.loadDisplayname();
  }

  onLogout(){
    this.auth.logout().subscribe(() => {
      this.auth.isLoggedIn().subscribe(() =>{
        this.router.navigate(['']);
      });
    });
  }

  loadDisplayname(){
    this.us.getUserInfo().subscribe(user =>{
      this.displayName = user.displayname;
    });
  }
}
