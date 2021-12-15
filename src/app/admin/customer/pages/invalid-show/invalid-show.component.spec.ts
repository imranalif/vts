import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidShowComponent } from './invalid-show.component';

describe('InvalidShowComponent', () => {
  let component: InvalidShowComponent;
  let fixture: ComponentFixture<InvalidShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvalidShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
