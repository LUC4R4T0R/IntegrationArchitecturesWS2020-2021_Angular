import { Component, OnInit } from '@angular/core';
import {SalesmanDetailsComponent} from "../salesman-details/salesman-details.component";
import {Salesman} from "../../models/salesman";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  selected:Salesman;

  constructor() { }

  ngOnInit(): void {
  }

  setSelected(sm:Salesman){
    this.selected = sm;
  }
}
