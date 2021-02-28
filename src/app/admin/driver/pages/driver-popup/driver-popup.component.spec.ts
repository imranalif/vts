import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverPopupComponent } from './driver-popup.component';

describe('DriverPopupComponent', () => {
  let component: DriverPopupComponent;
  let fixture: ComponentFixture<DriverPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
