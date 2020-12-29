import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesmenTableEntryComponent } from './salesmen-table-entry.component';

describe('SalesmenTableEntryComponent', () => {
  let component: SalesmenTableEntryComponent;
  let fixture: ComponentFixture<SalesmenTableEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesmenTableEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesmenTableEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
