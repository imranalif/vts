import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeofenceAddComponent } from './geofence-add.component';

describe('GeofenceAddComponent', () => {
  let component: GeofenceAddComponent;
  let fixture: ComponentFixture<GeofenceAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeofenceAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeofenceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
