import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofilePopupComponent } from './userprofile-popup.component';

describe('UserprofilePopupComponent', () => {
  let component: UserprofilePopupComponent;
  let fixture: ComponentFixture<UserprofilePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserprofilePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserprofilePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
