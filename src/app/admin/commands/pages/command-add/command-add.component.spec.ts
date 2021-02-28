import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandAddComponent } from './command-add.component';

describe('CommandAddComponent', () => {
  let component: CommandAddComponent;
  let fixture: ComponentFixture<CommandAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
