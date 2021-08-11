import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { AuthGuard } from '../../shared/auth.guard';
import { CustomerEditComponent } from './pages/customer-edit/customer-edit.component';
import { CustomerAddComponent } from './pages/customer-add/customer-add.component';

const routes: Routes = [
  {
    path: 'list',
    component: CustomerListComponent,
    canActivate: [AuthGuard],
    data: {roles: 'customer_list'}
  },
  {
    path: 'add',
    component: CustomerAddComponent,
    canActivate: [AuthGuard],
    data: {roles: 'customer_add'}
  },
  {
    path: 'edit/:id',
    component: CustomerEditComponent,
    canActivate: [AuthGuard],
    data: {roles: 'customer_edit'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
