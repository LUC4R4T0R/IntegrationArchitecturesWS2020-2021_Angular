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
    1:'A (hot)',
    2:'B (warm)',
    3:'C (neutral)'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
