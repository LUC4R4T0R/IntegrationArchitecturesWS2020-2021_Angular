import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { EvaluationRecordEntry } from "../../models/evaluationRecordEntry";
import { EvaluationRecordEntryService } from "../../services/evaluation-record-entry.service";

@Component({
  selector: '[app-evaluation-record-table-entry]',
  templateUrl: './evaluation-record-table-entry.component.html',
  styleUrls: ['./evaluation-record-table-entry.component.css']
})
export class EvaluationRecordTableEntryComponent implements OnInit {
  @Input() entry:EvaluationRecordEntry;
  @Input() smId:number;
  @Input() year:number;
  @Output() update = new EventEmitter();
  displayDeleteModal:boolean;
  modalButtons = {
    submit:'Delete',
    dismiss:'Abort'
  }

  constructor(private eve:EvaluationRecordEntryService) { }

  ngOnInit(): void {
  }

  deleteMessage(event){
    this.displayDeleteModal = event;
  }

  deleteEntry(){
    this.eve.deleteEntry(this.smId, this.year, this.entry.name).subscribe(res => {
      if(res === 'success'){
        this.deleteMessage(false);
        this.update.emit();
      }
    });
  }
}
