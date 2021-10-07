import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepassPopupComponent } from './changepass-popup.component';

describe('ChangepassPopupComponent', () => {
  let component: ChangepassPopupComponent;
  let fixture: ComponentFixture<ChangepassPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangepassPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepassPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
