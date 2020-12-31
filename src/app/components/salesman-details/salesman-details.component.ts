import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Salesman} from "../../models/salesman";
import {SalesmanService} from "../../services/salesman.service";
import {EvaluationRecordService} from "../../services/evaluation-record.service";
import {EvaluationRecord} from "../../models/evaluationRecord";
import {EvaluationRecordEntry} from "../../models/evaluationRecordEntry";

@Component({
  selector: 'app-salesman-details',
  templateUrl: './salesman-details.component.html',
  styleUrls: ['./salesman-details.component.css']
})
export class SalesmanDetailsComponent implements OnInit {
  id:number;
  salesman:Salesman;
  records:EvaluationRecord[];
  currentRecord:EvaluationRecordEntry[];
  currentYear:number;

  constructor(private route:ActivatedRoute, private sm:SalesmanService, private ev:EvaluationRecordService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.loadSalesman();
      this.loadRecords();
    });
  }

  loadSalesman(){
    this.sm.getSalesman(this.id).subscribe(result => {
      this.salesman = result;
    });
  }

  loadRecords(){
    this.ev.getAllRecords(this.id).subscribe( result => {
      this.records = result;
      this.currentRecord = result[0].entries;
    });
  }

  selectYear(){
    this.currentRecord = this.records.filter(x => x.year == this.currentYear)[0].entries;
  }
}
