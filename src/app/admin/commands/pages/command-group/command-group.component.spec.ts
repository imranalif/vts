import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandGroupComponent } from './command-group.component';

describe('CommandGroupComponent', () => {
  let component: CommandGroupComponent;
  let fixture: ComponentFixture<CommandGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
