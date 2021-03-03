import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceDeviceComponent } from './maintenance-device.component';

describe('MaintenanceDeviceComponent', () => {
  let component: MaintenanceDeviceComponent;
  let fixture: ComponentFixture<MaintenanceDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
