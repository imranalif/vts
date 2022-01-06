import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResellerCustomerAddComponent } from './reseller-customer-add.component';

describe('ResellerCustomerAddComponent', () => {
  let component: ResellerCustomerAddComponent;
  let fixture: ComponentFixture<ResellerCustomerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResellerCustomerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResellerCustomerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
