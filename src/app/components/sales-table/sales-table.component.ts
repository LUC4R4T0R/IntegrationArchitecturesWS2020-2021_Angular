import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sales-table',
  templateUrl: './sales-table.component.html',
  styleUrls: ['./sales-table.component.css']
})
export class SalesTableComponent implements OnInit {
  @Input() sales;

  constructor() { }

  ngOnInit(): void {
  }

}
