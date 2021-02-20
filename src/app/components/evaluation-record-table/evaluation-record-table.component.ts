import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { EvaluationRecordEntry } from "../../models/evaluationRecordEntry";
import {ModalInput, Option} from "../../models/modalInput";
import { EvaluationRecordEntryService } from "../../services/evaluation-record-entry.service";
import {SettingsService} from "../../services/settings.service";

@Component({
  selector: 'app-evaluation-record-table',
  templateUrl: './evaluation-record-table.component.html',
  styleUrls: ['./evaluation-record-table.component.css']
})
export class EvaluationRecordTableComponent implements OnInit {
  @Input() smId:number;
  @Input() year:number;
  @Input() displayBonus:boolean = false;
  @Input() editable:boolean = false;
  @Input() entries:EvaluationRecordEntry[];
  @Output() update = new EventEmitter();
  displayEntryModal:boolean = false;
  nameOptions: Option[] = [];
  entryModalInputs:ModalInput[] = [
    new ModalInput('Name', 'name', 'select', undefined, undefined, false, this.nameOptions),
    new ModalInput('Target Value', 'target', 'number'),
    new ModalInput('Actual Value', 'actual', 'number')
  ];

  constructor(private eve:EvaluationRecordEntryService, private ses: SettingsService) { }

  ngOnInit(): void {
    this.ses.getSetting('evaluationRecordEntryNames').subscribe(res => {
      if(res.status === 200){
        let first = true;
        for(let name of res.body.value){
          this.nameOptions.push(new Option(name));
          if(first){
            this.entryModalInputs[0].value = name;
            first = false;
          }
        }
      }
    });
  }

  changeDisplayEntryModal(event:boolean){
    if(this.year !== undefined && this.year !== Infinity) this.displayEntryModal = event;
  }

  addEntry(data){
    this.eve.addEntry(this.smId, this.year, new EvaluationRecordEntry(data.name, data.target, data.actual)).subscribe(res => {
      if(res.status === 200){
        this.reloadEntries();
        this.changeDisplayEntryModal(false);
      }
    });
  }

  reloadEntries(){
    this.update.emit();
  }
}
