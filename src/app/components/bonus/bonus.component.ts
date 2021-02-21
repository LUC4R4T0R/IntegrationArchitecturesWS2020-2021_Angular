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
import {OrderEvaluation} from "../../models/order-evaluation";

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
  hrApproved: boolean = false;
  managementApproved: boolean = false;
  salesmanApproved: boolean = false;
  years: number[];

  constructor(private route:ActivatedRoute, private sm:SalesmanService, private ev:EvaluationRecordService, private bo:BonusService, private us: UserService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.loadSalesman();
      this.loadUser();
      this.getYears()
        .then(_=>{
          this.currentYear = Math.min(...this.years);
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
          this.setEvaluation(orderEv.body);
          res();
        }else{
          rej();
        }
      });
    });
  }

  setEvaluation(orderEv: OrderEvaluation){
    this.sales = orderEv.products;
    this.remarks = orderEv.remarks;
    this.currentRecord = orderEv.performance;
    this.managementApproved = orderEv.managementApproved;
    this.hrApproved = orderEv.hrApproved;
    this.salesmanApproved = orderEv.salesmanApproved;
  }

  selectYear(year:number = this.currentYear){
    this.currentRecord = this.records.filter(x => x.year == year)[0].entries;
    this.loadEvaluation()
      .then(_ => this.calculateSum());
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

  approveBonus(){
    this.bo.approveBonus(this.id, this.currentYear).subscribe(res => {
      if(res.status === 200){
        this.loadEvaluation();
      }
    });
  }

  saveRemarks(){
    this.bo.saveRemarks(this.id, this.currentYear, this.remarks).subscribe();
  }

  refreshBonus(){
    this.bo.refreshBonus(this.id, this.currentYear).subscribe(orderEv => {
      if(orderEv.status === 200){
        this.setEvaluation(orderEv.body);
      }
    });
  }

  async getYears(){
    let orderYears: number[] = [];
    let evYears: number[] = [];
    let orderPromise = new Promise((res, rej) => {
      this.bo.getYears(this.id).subscribe(response => {
        if(response.status === 200){
          orderYears = response.body;
          res();
        }else{
          rej();
        }
      });
    });
    let evPromise = new Promise((res, rej) => {
      this.ev.getAllRecords(this.id).subscribe(response => {
        if(response.status === 200){
          evYears = response.body.map(record => record.year);
          res();
        }else{
          rej();
        }
      });
    });
    await Promise.all([
      orderPromise,
      evPromise
    ]);
    this.years = await Array.from(new Set<number>(orderYears.concat(evYears)));
    console.log(this.years);
  }
}
