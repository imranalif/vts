import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableExporterModule } from 'mat-table-exporter';

import { ResellerCustomerRoutingModule } from './reseller-customer-routing.module';
import { ResellerCustomerAddComponent } from './pages/reseller-customer-add/reseller-customer-add.component';
import { ResellerCustomerListComponent } from './pages/reseller-customer-list/reseller-customer-list.component';
import { ResellerCustomerEditComponent } from './pages/reseller-customer-edit/reseller-customer-edit.component';
import { ResellerDashboardComponent } from './pages/reseller-dashboard/reseller-dashboard.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [ResellerCustomerAddComponent, ResellerCustomerListComponent, ResellerCustomerEditComponent, ResellerDashboardComponent],
  imports: [
    CommonModule,
    ResellerCustomerRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatTableExporterModule
  ]
})
export class ResellerCustomerModule { }
