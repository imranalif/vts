import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverUserComponent } from './driver-user.component';

describe('DriverUserComponent', () => {
  let component: DriverUserComponent;
  let fixture: ComponentFixture<DriverUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
