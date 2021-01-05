import { TestBed } from '@angular/core/testing';

import { EvaluationRecordEntryService } from './evaluation-record-entry.service';

describe('EvaluationRecordEntryService', () => {
  let service: EvaluationRecordEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvaluationRecordEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
