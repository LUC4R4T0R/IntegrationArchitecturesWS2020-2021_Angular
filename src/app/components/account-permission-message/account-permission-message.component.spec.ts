import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPermissionMessageComponent } from './account-permission-message.component';

describe('AccountPermissionMessageComponent', () => {
  let component: AccountPermissionMessageComponent;
  let fixture: ComponentFixture<AccountPermissionMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountPermissionMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPermissionMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
