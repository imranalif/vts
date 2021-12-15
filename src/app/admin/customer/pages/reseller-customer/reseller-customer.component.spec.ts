import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResellerCustomerComponent } from './reseller-customer.component';

describe('ResellerCustomerComponent', () => {
  let component: ResellerCustomerComponent;
  let fixture: ComponentFixture<ResellerCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResellerCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResellerCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
