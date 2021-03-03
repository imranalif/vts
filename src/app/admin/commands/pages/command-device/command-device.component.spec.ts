import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandDeviceComponent } from './command-device.component';

describe('CommandDeviceComponent', () => {
  let component: CommandDeviceComponent;
  let fixture: ComponentFixture<CommandDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
