import { Component, OnInit, Input } from '@angular/core';
import {MenuEntry} from "../../models/menu-entry";

@Component({
  selector: 'app-menu-entry',
  templateUrl: './menu-entry.component.html',
  styleUrls: ['./menu-entry.component.css']
})
export class MenuEntryComponent implements OnInit {
  @Input() entry:MenuEntry;

  constructor() { }

  ngOnInit(): void {
  }

}
