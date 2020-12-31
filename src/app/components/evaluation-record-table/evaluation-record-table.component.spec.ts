import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationRecordTableComponent } from './evaluation-record-table.component';

describe('EvaluationRecordTableComponent', () => {
  let component: EvaluationRecordTableComponent;
  let fixture: ComponentFixture<EvaluationRecordTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationRecordTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationRecordTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
