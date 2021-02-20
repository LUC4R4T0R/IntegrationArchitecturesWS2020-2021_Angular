import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SalesmanService} from "../../services/salesman.service";
import {EvaluationRecordService} from "../../services/evaluation-record.service";
import {Salesman} from "../../models/salesman";
import {EvaluationRecord} from "../../models/evaluationRecord";
import {EvaluationRecordEntry} from "../../models/evaluationRecordEntry";
import {BonusService} from "../../services/bonus.service";
import {Product} from "../../models/product";
import {moneyFormatter} from "../../lib/formatting";
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.css']
})
export class BonusComponent implements OnInit {
  id: number;
  salesman: Salesman = new Salesman(undefined, undefined, undefined);
  records: EvaluationRecord[];
  currentYear: number;
  currentRecord: EvaluationRecordEntry[];
  sum: number = 0;
  remarks:string = '';
  sales:Product[] = [];
  moneyFormatter = moneyFormatter;
  user: User = new User('', '', undefined);

  constructor(private route:ActivatedRoute, private sm:SalesmanService, private ev:EvaluationRecordService, private bo:BonusService, private us: UserService) { }

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

  loadUser(){
    this.us.getUserInfo().subscribe(user => {
      this.user = user;
    });
  }

  async loadEvaluation(){
    return new Promise((res, rej) => {
      this.bo.fetchOrderEvaluation(this.id, this.currentYear).subscribe(orderEv => {
        if(orderEv.status === 200){
          this.sales = orderEv.body.products;
          this.remarks = orderEv.body.remarks;
          res();
        }else{
         rej();
        }
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
    this.bo.saveRemarks(this.id, this.currentYear, this.remarks).subscribe();
  }
}
