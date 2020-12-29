import {Component, Input, OnInit} from '@angular/core';
import {Salesman} from "../../models/salesman";

@Component({
  selector: '[app-salesmen-table-entry]',
  templateUrl: './salesmen-table-entry.component.html',
  styleUrls: ['./salesmen-table-entry.component.css']
})
export class SalesmenTableEntryComponent implements OnInit {
  @Input() salesman:Salesman;

  constructor() { }

  ngOnInit(): void {
  }

}
