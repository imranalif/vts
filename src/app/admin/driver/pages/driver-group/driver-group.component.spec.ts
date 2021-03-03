import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverGroupComponent } from './driver-group.component';

describe('DriverGroupComponent', () => {
  let component: DriverGroupComponent;
  let fixture: ComponentFixture<DriverGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
