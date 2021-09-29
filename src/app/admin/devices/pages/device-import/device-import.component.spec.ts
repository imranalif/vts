import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceImportComponent } from './device-import.component';

describe('DeviceImportComponent', () => {
  let component: DeviceImportComponent;
  let fixture: ComponentFixture<DeviceImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
