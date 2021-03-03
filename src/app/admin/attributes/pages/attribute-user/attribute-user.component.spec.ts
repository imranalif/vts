import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeUserComponent } from './attribute-user.component';

describe('AttributeUserComponent', () => {
  let component: AttributeUserComponent;
  let fixture: ComponentFixture<AttributeUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
