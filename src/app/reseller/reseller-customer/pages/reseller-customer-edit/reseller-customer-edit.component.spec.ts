import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResellerCustomerEditComponent } from './reseller-customer-edit.component';

describe('ResellerCustomerEditComponent', () => {
  let component: ResellerCustomerEditComponent;
  let fixture: ComponentFixture<ResellerCustomerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResellerCustomerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResellerCustomerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
