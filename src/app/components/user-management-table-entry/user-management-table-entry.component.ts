import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../models/user";
import {ModalInput} from "../../models/modalInput";
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
  editModalInputs:ModalInput[] = [
    new ModalInput('Username', 'username', 'text'),
    new ModalInput('Name', 'displayname', 'text'),
    new ModalInput('Employee ID', 'employeeId', 'number'),
    new ModalInput('Usergroup', 'group', 'number')
  ];
  passwordModalInputs:ModalInput[] = [
    new ModalInput('Old Password', 'oldPassword', 'password'),
    new ModalInput('New Password', 'newPasswordA', 'password'),
    new ModalInput('New Password (Repeated)', 'newPasswordB', 'password')
  ];
  groups:string[] = [
    'guest',
    'sales',
    'human resources',
    'management',
    'admin'
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
      if(res === 'success'){
        this.deleteMessage(false);
        this.update.emit();
      }
    });
  }

  changeDisplayEditModal(state){
    this.displayEditModal = state;
  }

  saveUser(user){

  }

  changeDisplayPasswordUpdateModal(state){
    this.displayPasswordUpdateModal = state;
  }

  updatePassword(data){
    if(data.newPasswordA === data.newPasswordB){

    }else{
      this.changePasswordMessage = 'The new Passwords don\'t match!';
    }
  }
}
