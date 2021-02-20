import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Salesman } from "../../models/salesman";
import { SalesmanService } from "../../services/salesman.service";

@Component({
  selector: 'app-salesmen-table',
  templateUrl: './salesmen-table.component.html',
  styleUrls: ['./salesmen-table.component.css']
})
export class SalesmenTableComponent implements OnInit {

  salesmen:Salesman[];
  @Output() selected = new EventEmitter<Salesman>();
  selectedSm:Salesman;

  constructor(private sm:SalesmanService) { }

  ngOnInit(): void {
    this.sm.getAllSalesmen().subscribe(
      sms => {
        this.salesmen = sms;
      }
    );
  }

  select(sm:Salesman){
    this.selectedSm = sm;
    this.selected.emit(sm);
  }
}
