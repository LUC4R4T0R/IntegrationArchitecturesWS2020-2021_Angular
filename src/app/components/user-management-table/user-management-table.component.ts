import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-management-table',
  templateUrl: './user-management-table.component.html',
  styleUrls: ['./user-management-table.component.css']
})
export class UserManagementTableComponent implements OnInit {

  @Input() users:User[];

  constructor(private us:UserService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void{
    this.us.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
