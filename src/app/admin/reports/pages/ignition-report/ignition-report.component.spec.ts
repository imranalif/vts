import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgnitionReportComponent } from './ignition-report.component';

describe('IgnitionReportComponent', () => {
  let component: IgnitionReportComponent;
  let fixture: ComponentFixture<IgnitionReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgnitionReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgnitionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
