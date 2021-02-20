import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../models/user";
import {ModalInput, Option} from "../../models/modalInput";
import {UserService} from "../../services/user.service";

@Component({
  selector: '[app-user-management-table-entry]',
  templateUrl: './user-management-table-entry.component.html',
  styleUrls: ['./user-management-table-entry.component.css']
})
export class UserManagementTableEntryComponent implements OnInit {
  @Input() user:User;
  @Output() update = new EventEmitter();
  displayDeleteModal: boolean = false;
  displayEditModal: boolean = false;
  displayPasswordUpdateModal: boolean = false;
  changePasswordMessage: string = '';
  modalButtons = {
    submit:'Delete',
    dismiss:'Abort'
  }
  groupOptions: Option[] = [
    new Option('Guest', '0'),
    new Option('Sales', '1'),
    new Option('Human Resources', '2'),
    new Option('Management', '3'),
    new Option('Admin', '4')
  ];
  editModalInputs:ModalInput[] = [
    new ModalInput('Username', 'username', 'text', undefined, undefined, true),
    new ModalInput('Name', 'displayname', 'text'),
    new ModalInput('Employee ID', 'employeeId', 'number'),
    new ModalInput('Usergroup', 'group', 'select', undefined, undefined, false, this.groupOptions)
  ];
  passwordModalInputs:ModalInput[] = [
    new ModalInput('Old Password', 'oldPassword', 'password'),
    new ModalInput('New Password', 'newPasswordA', 'password'),
    new ModalInput('New Password (Repeated)', 'newPasswordB', 'password')
  ];
  groups:string[] = [
    'Guest',
    'Sales',
    'Human Resources',
    'Management',
    'Admin'
  ];

  constructor(private us: UserService) { }

  ngOnInit(): void {
    this.editModalInputs[0].value = this.user.username;
    this.editModalInputs[1].value = this.user.displayname;
    this.editModalInputs[2].value = this.user.employeeId ? this.user.employeeId.toString() : '';
    this.editModalInputs[3].value = this.user.group ? this.user.group.toString() : '';
  }

  deleteMessage(state){
    this.displayDeleteModal = state;
  }

  deleteUser(){
    this.us.deleteUser(this.user.username).subscribe(res => {
      if(res.status === 200){
        this.deleteMessage(false);
        this.update.emit();
      }
    });
  }

  changeDisplayEditModal(state){
    this.displayEditModal = state;
  }

  saveUser(user){
    this.us.updateUser(this.user.username, user.displayname, parseInt(user.employeeId), parseInt(user.group)).subscribe(res => {
      if(res.status === 200){
        this.changeDisplayEditModal(false);
        this.update.emit();
      }
    });
  }

  changeDisplayPasswordUpdateModal(state){
    this.displayPasswordUpdateModal = state;
  }

  updatePassword(data){
    if(data.newPasswordA === data.newPasswordB){

    }else{
      this.changePasswordMessage = 'The new passwords don\'t match!';
    }
  }
}
