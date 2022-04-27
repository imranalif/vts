import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeofenceMapEditComponent } from './geofence-map-edit.component';

describe('GeofenceMapEditComponent', () => {
  let component: GeofenceMapEditComponent;
  let fixture: ComponentFixture<GeofenceMapEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeofenceMapEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeofenceMapEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
