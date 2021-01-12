import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesTableEntryComponent } from './sales-table-entry.component';

describe('SalesTableEntryComponent', () => {
  let component: SalesTableEntryComponent;
  let fixture: ComponentFixture<SalesTableEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesTableEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTableEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
