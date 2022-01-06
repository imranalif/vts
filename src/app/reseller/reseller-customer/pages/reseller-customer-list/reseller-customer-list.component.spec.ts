import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResellerCustomerListComponent } from './reseller-customer-list.component';

describe('ResellerCustomerListComponent', () => {
  let component: ResellerCustomerListComponent;
  let fixture: ComponentFixture<ResellerCustomerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResellerCustomerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResellerCustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
