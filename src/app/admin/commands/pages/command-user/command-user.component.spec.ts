import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandUserComponent } from './command-user.component';

describe('CommandUserComponent', () => {
  let component: CommandUserComponent;
  let fixture: ComponentFixture<CommandUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
