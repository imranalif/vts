import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceCategoryEditComponent } from './device-category-edit.component';

describe('DeviceCategoryEditComponent', () => {
  let component: DeviceCategoryEditComponent;
  let fixture: ComponentFixture<DeviceCategoryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceCategoryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
