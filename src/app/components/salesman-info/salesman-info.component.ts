import {Component, Input, OnInit} from '@angular/core';
import {Salesman} from "../../models/salesman";

@Component({
  selector: 'app-salesman-info',
  templateUrl: './salesman-info.component.html',
  styleUrls: ['./salesman-info.component.css']
})
export class SalesmanInfoComponent implements OnInit {
  @Input() salesman:Salesman;

  constructor() { }

  ngOnInit(): void {
  }

}
