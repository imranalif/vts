import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivesStopsReportComponent } from './drives-stops-report.component';

describe('DrivesStopsReportComponent', () => {
  let component: DrivesStopsReportComponent;
  let fixture: ComponentFixture<DrivesStopsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrivesStopsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivesStopsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
