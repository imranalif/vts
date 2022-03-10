import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceCategoryAddComponent } from './device-category-add.component';

describe('DeviceCategoryAddComponent', () => {
  let component: DeviceCategoryAddComponent;
  let fixture: ComponentFixture<DeviceCategoryAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceCategoryAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceCategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
