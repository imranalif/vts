import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';
import { MatTableExporterModule } from 'mat-table-exporter';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { CustomerEditComponent } from './pages/customer-edit/customer-edit.component';
import { CustomerAddComponent } from './pages/customer-add/customer-add.component';
import { CustomerQueryComponent } from './pages/customer-query/customer-query.component';
import { ResellerCustomerComponent } from './pages/reseller-customer/reseller-customer.component';
import { CustomerImportComponent } from './pages/customer-import/customer-import.component';
import { InvalidShowComponent } from './pages/invalid-show/invalid-show.component';


@NgModule({
  declarations: [CustomerListComponent, CustomerEditComponent, CustomerAddComponent, CustomerQueryComponent, ResellerCustomerComponent, CustomerImportComponent, InvalidShowComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableExporterModule,
    FlexLayoutModule
  ]
})
export class CustomerModule { }
