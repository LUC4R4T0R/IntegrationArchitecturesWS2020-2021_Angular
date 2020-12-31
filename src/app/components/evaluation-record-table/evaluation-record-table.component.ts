import { Component, Input, OnInit } from '@angular/core';
import { EvaluationRecordEntry } from "../../models/evaluationRecordEntry";

@Component({
  selector: 'app-evaluation-record-table',
  templateUrl: './evaluation-record-table.component.html',
  styleUrls: ['./evaluation-record-table.component.css']
})
export class EvaluationRecordTableComponent implements OnInit {
  @Input() entries:EvaluationRecordEntry[];

  constructor() { }

  ngOnInit(): void {
  }

}
