import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesmanInfoComponent } from './salesman-info.component';

describe('SalesmanInfoComponent', () => {
  let component: SalesmanInfoComponent;
  let fixture: ComponentFixture<SalesmanInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesmanInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesmanInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
