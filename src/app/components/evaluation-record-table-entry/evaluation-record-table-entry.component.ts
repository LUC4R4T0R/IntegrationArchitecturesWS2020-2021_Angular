import {Component, Input, OnInit} from '@angular/core';
import { EvaluationRecordEntry } from "../../models/evaluationRecordEntry";

@Component({
  selector: '[app-evaluation-record-table-entry]',
  templateUrl: './evaluation-record-table-entry.component.html',
  styleUrls: ['./evaluation-record-table-entry.component.css']
})
export class EvaluationRecordTableEntryComponent implements OnInit {
  @Input() entry:EvaluationRecordEntry;

  constructor() { }

  ngOnInit(): void {
  }

}
