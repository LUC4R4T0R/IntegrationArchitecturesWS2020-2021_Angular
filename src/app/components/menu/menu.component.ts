import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { MenuEntry } from "../../models/menu-entry";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  entries:MenuEntry[] = [
    new MenuEntry('ia2020', '../overview'),
    new MenuEntry('Overview', '../overview'),
    new MenuEntry('Settings', '../settings')
  ];

  constructor(private auth:AuthService) { }

  displayName:string;

  ngOnInit(): void {
    this.loadDisplayname();
  }

  onLogout(){
    console.log('logging out');
    this.auth.logout();
  }

  loadDisplayname(){
    this.auth.getUserInfo().subscribe(user =>{
      this.displayName = user.displayname;
    });
  }
}
