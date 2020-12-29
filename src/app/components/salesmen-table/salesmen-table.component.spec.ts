import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesmenTableComponent } from './salesmen-table.component';

describe('SalesmenTableComponent', () => {
  let component: SalesmenTableComponent;
  let fixture: ComponentFixture<SalesmenTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesmenTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesmenTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
