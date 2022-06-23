import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertAddComponent } from './alert-add.component';

describe('AlertAddComponent', () => {
  let component: AlertAddComponent;
  let fixture: ComponentFixture<AlertAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
