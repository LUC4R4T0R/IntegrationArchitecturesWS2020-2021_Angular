import { Component, OnInit } from '@angular/core';
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
  currentYear:number;
  addERInputs:ModalInput[] = [
    new ModalInput('Year', 'year', 'number', (new Date).getFullYear().toString())
  ];
  displayERModal:boolean = false;

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

  async loadRecords(){
    return this.ev.getAllRecords(this.id).subscribe( result => {
      this.records = result;
      this.currentRecord = result[0].entries;
    });
  }

  selectYear(year:number = this.currentYear){
    this.currentRecord = this.records.filter(x => x.year == year)[0].entries;
  }

  displayAddERModal(event:boolean){
    this.displayERModal = event;
  }

  addER(data){
    this.ev.addRecord(this.id, new EvaluationRecord(data.year, [])).subscribe(res => {
      if(res === 'success'){
          this.displayAddERModal(false);
          this.reload(data.year);
      }
    });
  }

  reload(year){
    this.loadRecords().then(()=>{
      console.log(this.records);
      this.selectYear(year);
    });
  }
}