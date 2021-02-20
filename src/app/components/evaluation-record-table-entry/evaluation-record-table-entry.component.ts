import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { EvaluationRecordEntry } from "../../models/evaluationRecordEntry";
import { EvaluationRecordEntryService } from "../../services/evaluation-record-entry.service";
import {ModalInput} from "../../models/modalInput";

@Component({
  selector: '[app-evaluation-record-table-entry]',
  templateUrl: './evaluation-record-table-entry.component.html',
  styleUrls: ['./evaluation-record-table-entry.component.css']
})
export class EvaluationRecordTableEntryComponent implements OnInit {
  @Input() entry:EvaluationRecordEntry;
  @Input() smId:number;
  @Input() year:number;
  @Input() displayBonus:boolean = false;
  @Input() editable:boolean = false;
  @Output() update = new EventEmitter();
  displayDeleteModal:boolean;
  modalButtons = {
    submit:'Delete',
    dismiss:'Abort'
  }
  displayEditModal:boolean = false;
  editModalInputs:ModalInput[] = [
    new ModalInput('Name', 'name', 'text', undefined, undefined, true),
    new ModalInput('Target Value', 'target', 'number'),
    new ModalInput('Actual Value', 'actual', 'number')
  ];

  constructor(private eve:EvaluationRecordEntryService) { }

  ngOnInit(): void {
    this.editModalInputs[0].value = this.entry.name;
    this.editModalInputs[1].value = this.entry.target.toString();
    this.editModalInputs[2].value = this.entry.actual.toString();
  }

  deleteMessage(event){
    this.displayDeleteModal = event;
  }

  changeDisplayEditModal(event){
    this.displayEditModal = event;
  }

  saveEntry(data){
    this.eve.updateEntry(this.smId, this.year, new EvaluationRecordEntry(this.entry.name, data.target, data.actual)).subscribe(res => {
      if(res.status === 200){
        this.changeDisplayEditModal(false);
        this.update.emit();
      }
    });
  }

  deleteEntry(){
    this.eve.deleteEntry(this.smId, this.year, this.entry.name).subscribe(res => {
      if(res.status === 200){
        this.deleteMessage(false);
        this.update.emit();
      }
    });
  }
}
