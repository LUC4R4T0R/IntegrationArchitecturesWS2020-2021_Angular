import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user";

@Component({
  selector: '[app-user-management-table-entry]',
  templateUrl: './user-management-table-entry.component.html',
  styleUrls: ['./user-management-table-entry.component.css']
})
export class UserManagementTableEntryComponent implements OnInit {
  @Input() user:User;
  groups:string[] = [
    'guest',
    'sales',
    'human resources',
    'management',
    'admin'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
