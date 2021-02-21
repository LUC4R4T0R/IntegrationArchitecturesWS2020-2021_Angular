import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {moneyFormatter} from "../../lib/formatting";

@Component({
  selector: 'app-sales-table',
  templateUrl: './sales-table.component.html',
  styleUrls: ['./sales-table.component.css']
})
export class SalesTableComponent implements OnInit, OnChanges {
  @Input() sales;
  bonus: number = 0;
  moneyFormatter = moneyFormatter;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes){
    if(changes.sales !== undefined){
      this.calcBonus();
    }
  }

  calcBonus(){
    this.bonus = 0;
    for(let sale of this.sales){
      if(sale.bonus !== undefined && typeof sale.bonus === "number"){
        this.bonus += sale.bonus;
      }
    }
  }

}
