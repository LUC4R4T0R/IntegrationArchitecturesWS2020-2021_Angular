import {Component, Input, OnInit} from '@angular/core';
import {Salesman} from "../../models/salesman";
import {Router} from "@angular/router";

@Component({
  selector: 'app-salesman-info',
  templateUrl: './salesman-info.component.html',
  styleUrls: ['./salesman-info.component.css']
})
export class SalesmanInfoComponent implements OnInit {
  @Input() salesman:Salesman;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onManageRecords(){
    this.router.navigate(['/salesman/'+this.salesman.id]);
  }

}
