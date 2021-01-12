import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SalesmanService} from "../../services/salesman.service";
import {EvaluationRecordService} from "../../services/evaluation-record.service";
import {Salesman} from "../../models/salesman";
import {EvaluationRecord} from "../../models/evaluationRecord";
import {EvaluationRecordEntry} from "../../models/evaluationRecordEntry";

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.css']
})
export class BonusComponent implements OnInit {
  id: number;
  salesman: Salesman;
  records: EvaluationRecord[];
  currentYear: number;
  currentRecord: EvaluationRecordEntry[];
  sum: number = 0;
  remarks:string = 'This is a Test';
  sales = [
    {
      product: 'Hoover GO',
      amount: 10,
      customer: {
        name: 'Telekom AG',
        rating: 'good'
      },
      bonus: 20000
    },
    {
      product: 'Hoover clean',
      amount: 6,
      customer: {
        name: 'KL Engineering',
        rating: 'superb'
      },
      bonus: 40000
    }
  ];

  constructor(private route:ActivatedRoute, private sm:SalesmanService, private ev:EvaluationRecordService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.loadSalesman();
      this.loadRecords().then(_=>{
        this.currentYear = Math.min(...this.records.map(rec => rec.year));
        this.calculateSum();
      });
    });
  }

  loadSalesman(){
    this.sm.getSalesman(this.id).subscribe(result => {
      this.salesman = result;
    });
  }

  async loadRecords(){
    return new Promise((res, rej) => {
      this.ev.getAllRecords(this.id).subscribe( result => {
        if(result === undefined) rej();
        this.records = result;
        if(result[0]) this.currentRecord = result[0].entries;
        res();
      });
    });
  }

  selectYear(year:number = this.currentYear){
    this.currentRecord = this.records.filter(x => x.year == year)[0].entries;
  }

  calculateSum(){
    this.sum = 0;
    for(let order of this.sales){
      this.sum += order.bonus;
    }
    for(let entry of this.currentRecord){
      if(entry.bonus) this.sum += entry.bonus;
    }
  }

  saveRemarks(){
    console.log(this.remarks);
  }
}
