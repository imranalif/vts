import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDeviceComponent } from './customer-device.component';

describe('CustomerDeviceComponent', () => {
  let component: CustomerDeviceComponent;
  let fixture: ComponentFixture<CustomerDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
