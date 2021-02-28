import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificainEditComponent } from './notificain-edit.component';

describe('NotificainEditComponent', () => {
  let component: NotificainEditComponent;
  let fixture: ComponentFixture<NotificainEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificainEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificainEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
