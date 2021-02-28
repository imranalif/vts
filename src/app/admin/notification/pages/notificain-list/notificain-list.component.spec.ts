import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificainListComponent } from './notificain-list.component';

describe('NotificainListComponent', () => {
  let component: NotificainListComponent;
  let fixture: ComponentFixture<NotificainListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificainListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
