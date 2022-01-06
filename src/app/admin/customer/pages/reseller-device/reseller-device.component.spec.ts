import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResellerDeviceComponent } from './reseller-device.component';

describe('ResellerDeviceComponent', () => {
  let component: ResellerDeviceComponent;
  let fixture: ComponentFixture<ResellerDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResellerDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResellerDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
