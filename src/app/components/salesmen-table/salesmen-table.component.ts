import { Component, OnInit } from '@angular/core';
import {Salesman} from "../../models/salesman";
import {SalesmanService} from "../../services/salesman.service";

@Component({
  selector: 'app-salesmen-table',
  templateUrl: './salesmen-table.component.html',
  styleUrls: ['./salesmen-table.component.css']
})
export class SalesmenTableComponent implements OnInit {

  salesmen:Salesman[];

  constructor(private sm:SalesmanService) { }

  ngOnInit(): void {
    this.sm.getAllSalesmen().subscribe(
      sms => {
        this.salesmen = sms;
      }
    );
  }

}
