import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SalesmanService} from "../../services/salesman.service";
import {EvaluationRecordService} from "../../services/evaluation-record.service";
import {Salesman} from "../../models/salesman";
import {EvaluationRecord} from "../../models/evaluationRecord";
import {EvaluationRecordEntry} from "../../models/evaluationRecordEntry";
import {BonusService} from "../../services/bonus.service";
import {Product} from "../../models/product";

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
  remarks:string = '';
  sales:Product[] = [];

  constructor(private route:ActivatedRoute, private sm:SalesmanService, private ev:EvaluationRecordService, private bo:BonusService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.loadSalesman();
      this.loadRecords()
        .then(_=>{
          this.currentYear = Math.min(...this.records.map(rec => rec.year));
          return this.loadEvaluation();
         })
        .then(_ => this.calculateSum());
    });
  }

  loadSalesman(){
    this.sm.getSalesman(this.id).subscribe(result => {
      this.salesman = result;
    });
  }

  async loadEvaluation(){
    return new Promise((res, rej) => {
      this.bo.fetchOrderEvaluation(this.id, this.currentYear).subscribe(orderEv => {
        this.sales = orderEv.products;
        this.remarks = orderEv.remarks;
        res();
      });
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
    this.loadEvaluation();
  }

  calculateSum(){
    this.sum = 0;
    for(let order of this.sales){
      if (order.bonus) this.sum += order.bonus;
    }
    if(this.currentRecord !== null) {
      for (let entry of this.currentRecord) {
        if (entry.bonus) this.sum += entry.bonus;
      }
    }
  }

  saveRemarks(){
    console.log(this.remarks);
  }
}
