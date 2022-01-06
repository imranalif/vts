import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceImportStatusComponent } from './device-import-status.component';

describe('DeviceImportStatusComponent', () => {
  let component: DeviceImportStatusComponent;
  let fixture: ComponentFixture<DeviceImportStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceImportStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceImportStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
