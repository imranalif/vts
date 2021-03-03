import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDeviceComponent } from './attribute-device.component';

describe('AttributeDeviceComponent', () => {
  let component: AttributeDeviceComponent;
  let fixture: ComponentFixture<AttributeDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
