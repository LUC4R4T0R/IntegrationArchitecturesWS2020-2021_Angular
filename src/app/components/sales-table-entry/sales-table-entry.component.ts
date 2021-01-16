import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: '[app-sales-table-entry]',
  templateUrl: './sales-table-entry.component.html',
  styleUrls: ['./sales-table-entry.component.css']
})
export class SalesTableEntryComponent implements OnInit {
  @Input() order;
  ratings = {
    1:'A (hot)',
    2:'B (warm)',
    3:'C (neutral)'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
