import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementTableEntryComponent } from './user-management-table-entry.component';

describe('UserManagementTableEntryComponent', () => {
  let component: UserManagementTableEntryComponent;
  let fixture: ComponentFixture<UserManagementTableEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserManagementTableEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementTableEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
