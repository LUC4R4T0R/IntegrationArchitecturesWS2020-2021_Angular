import {Component, Input, OnInit} from '@angular/core';
import {moneyFormatter} from "../../lib/formatting";

@Component({
  selector: '[app-sales-table-entry]',
  templateUrl: './sales-table-entry.component.html',
  styleUrls: ['./sales-table-entry.component.css']
})
export class SalesTableEntryComponent implements OnInit {
  @Input() order;
  moneyFormatter = moneyFormatter;
  ratings = {
    1:'excellent (A / hot)',
    2:'very good (B / warm)',
    3:'good (C / neutral)'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
