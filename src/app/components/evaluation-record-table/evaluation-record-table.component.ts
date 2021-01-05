import { Component, Input, OnInit } from '@angular/core';
import { EvaluationRecordEntry } from "../../models/evaluationRecordEntry";
import { ModalInput } from "../../models/modalInput";
import { EvaluationRecordEntryService } from "../../services/evaluation-record-entry.service";

@Component({
  selector: 'app-evaluation-record-table',
  templateUrl: './evaluation-record-table.component.html',
  styleUrls: ['./evaluation-record-table.component.css']
})
export class EvaluationRecordTableComponent implements OnInit {
  @Input() smId:number;
  @Input() year:number;
  @Input() entries:EvaluationRecordEntry[];
  displayEntryModal:boolean = false;
  entryModalInputs:ModalInput[] = [
    new ModalInput('Name', 'name', 'text'),
    new ModalInput('Target Value', 'target', 'number'),
    new ModalInput('Actual Value', 'actual', 'number')
  ];

  constructor(private eve:EvaluationRecordEntryService) { }

  ngOnInit(): void {
    console.log(this.year);
  }

  changeDisplayEntryModal(event:boolean){
    this.displayEntryModal = event;
  }

  addEntry(data){
    this.eve.addEntry(this.smId, this.year, new EvaluationRecordEntry(data.name, data.target, data.actual)).subscribe(res => {
      if(res === 'success'){
        this.reloadEntries();
        this.changeDisplayEntryModal(false);
      }
    });
  }

  reloadEntries(){
    this.eve.fetchEntries(this.smId, this.year).subscribe(res => {
      this.entries = res;
    });
  }
}
