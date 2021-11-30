import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingReportComponent } from './parking-report.component';

describe('ParkingReportComponent', () => {
  let component: ParkingReportComponent;
  let fixture: ComponentFixture<ParkingReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
