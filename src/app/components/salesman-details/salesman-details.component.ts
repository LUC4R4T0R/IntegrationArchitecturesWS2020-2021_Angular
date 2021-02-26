import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Salesman} from "../../models/salesman";
import {SalesmanService} from "../../services/salesman.service";
import {EvaluationRecordService} from "../../services/evaluation-record.service";
import {EvaluationRecord} from "../../models/evaluationRecord";
import {EvaluationRecordEntry} from "../../models/evaluationRecordEntry";
import {ModalInput} from "../../models/modalInput";

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
  yearOptions:number[];
  currentYear:number;
  displayDeleteModal:boolean=false;
  addERInputs:ModalInput[] = [
    new ModalInput('Year', 'year', 'number', (new Date).getFullYear().toString())
  ];
  displayERModal:boolean = false;

  constructor(private route:ActivatedRoute, private sm:SalesmanService, private ev:EvaluationRecordService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.loadSalesman();
      this.loadRecords().then(_=>{
        this.loadYears();
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
        if(result.status !== 200) rej();
        this.records = result.body;
        if(this.records[0]) this.currentRecord = this.records[0].entries;
        res();
      });
    });
  }

  deleteMessage(state){
    this.displayDeleteModal = state;
  }

  selectYear(year:number = this.currentYear){
    this.currentRecord = this.records.filter(x => x.year == year)[0].entries;
    this.currentYear = year;
  }

  loadYears(){
    this.yearOptions = this.records.map(rec => rec.year);
    this.currentYear = Math.min(...this.records.map(rec => rec.year));
  }

  displayAddERModal(event:boolean){
    this.displayERModal = event;
  }

  deleteRecord(){
    this.ev.deleteRecord(this.id, this.currentYear).subscribe(res => {
      if(res.status === 200){
        this.yearOptions.unshift(this.currentYear)
        let year = this.yearOptions[0];
        console.log(year);
        this.reloadAll(year);
        this.deleteMessage(false);
      }
    });
  }

  addER(data){
    this.ev.addRecord(this.id, new EvaluationRecord(parseInt(data.year), [])).subscribe(res => {
      if(res.status === 200){
          this.displayAddERModal(false);
          this.reloadAll(data.year);
      }
    });
  }

  async reload(year){
    await this.loadRecords().then(()=>{
      this.selectYear(year);
    });
  }

  async reloadAll(year){
    await this.loadRecords()
      .then(()=>{
        this.loadYears();
      })
      .then(()=>{
        this.selectYear(year);
    });
  }
}
