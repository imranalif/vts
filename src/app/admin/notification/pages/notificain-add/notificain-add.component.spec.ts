import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificainAddComponent } from './notificain-add.component';

describe('NotificainAddComponent', () => {
  let component: NotificainAddComponent;
  let fixture: ComponentFixture<NotificainAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificainAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificainAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
