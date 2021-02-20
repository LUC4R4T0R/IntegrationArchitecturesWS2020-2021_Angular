import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import {ModalInput, Option} from "../../models/modalInput";

@Component({
  selector: 'app-user-management-table',
  templateUrl: './user-management-table.component.html',
  styleUrls: ['./user-management-table.component.css']
})
export class UserManagementTableComponent implements OnInit {

  users:User[];

  displayAddModal: boolean = false;
  passwordMessage: string = '';

  groupOptions: Option[] = [
    new Option('Guest', '0'),
    new Option('Sales', '1'),
    new Option('Human Resources', '2'),
    new Option('Management', '3'),
    new Option('Admin', '4')
  ];

  addModalInputs:ModalInput[] = [
    new ModalInput('Username', 'username', 'text'),
    new ModalInput('Name', 'displayname', 'text'),
    new ModalInput('Employee ID', 'employeeId', 'number'),
    new ModalInput('Usergroup', 'group', 'select', '0', undefined, false, this.groupOptions),
    new ModalInput('Password', 'passwordA', 'password'),
    new ModalInput('Password (Repeated)', 'passwordB', 'password')
  ];

  constructor(private us:UserService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void{
    this.us.getUsers().subscribe(users => {
      this.users = users;
    });
  }


  changeDisplayAddModal(state: boolean){
    this.displayAddModal = state;
  }

  addUser(data){
    if(data.passwordA === data.passwordB){
      this.us.addUser(new User(data.username, data.displayname, data.passwordA, data.group, data.employeeId)).subscribe(res => {
        if(res.status === 200){
          this.fetchUsers();
          this.changeDisplayAddModal(false);
        }
      });
    }else{
      this.passwordMessage = 'The passwords don\'t match!';
    }
  }
}
