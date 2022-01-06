import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/auth.guard';
import { ResellerCustomerAddComponent } from './pages/reseller-customer-add/reseller-customer-add.component';
import { ResellerCustomerEditComponent } from './pages/reseller-customer-edit/reseller-customer-edit.component';
import { ResellerCustomerListComponent } from './pages/reseller-customer-list/reseller-customer-list.component';
import { ResellerDashboardComponent } from './pages/reseller-dashboard/reseller-dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: ResellerDashboardComponent,
    // canActivate: [AuthGuard],
    // data: {roles: 'dashboard'}
  },
  {
    path: 'add',
    component: ResellerCustomerAddComponent,
    // canActivate: [AuthGuard],
    // data: {roles: 'reseller-customer-add'}
  },
  {
    path: 'list',
    component: ResellerCustomerListComponent,
    // canActivate: [AuthGuard],
    // data: {roles: 'reseller-customer-list'}
  },
  {
    path: 'edit/:id',
    component: ResellerCustomerEditComponent,
    // canActivate: [AuthGuard],
    // data: {roles: 'reseller-customer-edit'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResellerCustomerRoutingModule { }
