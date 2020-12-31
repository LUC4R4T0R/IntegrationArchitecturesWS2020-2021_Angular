import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationRecordTableEntryComponent } from './evaluation-record-table-entry.component';

describe('EvaluationRecordTableEntryComponent', () => {
  let component: EvaluationRecordTableEntryComponent;
  let fixture: ComponentFixture<EvaluationRecordTableEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationRecordTableEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationRecordTableEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
