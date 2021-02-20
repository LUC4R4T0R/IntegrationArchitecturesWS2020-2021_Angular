import {Component, Input, OnInit} from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { MenuEntry } from "../../models/menu-entry";
import { Router } from "@angular/router";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  entries:MenuEntry[] = [
    new MenuEntry('ia2020', './', 0, 0),
    new MenuEntry('ia2020', './', 1, 1),
    new MenuEntry('Bonus Sheet', './', 1, 1),
    new MenuEntry('ia2020', '../overview', 2),
    new MenuEntry('Overview', '../overview', 2),
    new MenuEntry('User Management', '../users', 2),
    new MenuEntry('Settings', '../settings', 2),
    new MenuEntry('Swagger', undefined, 4, undefined, 'http://localhost:8080/api/swagger-api'),
  ];

  constructor(private auth:AuthService, private us:UserService, private router:Router) { }

  @Input() user: User;

  ngOnInit(): void {
    this.entries[1].path = '../salesman/'+this.user.employeeId+'/bonus';
    this.entries[2].path = '../salesman/'+this.user.employeeId+'/bonus';
  }

  onLogout(){
    this.auth.logout().subscribe(() => {
      this.auth.isLoggedIn().subscribe(() =>{
        this.router.navigate(['']);
      });
    });
  }
}
