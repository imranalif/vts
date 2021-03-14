import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../shared/auth.guard';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

const routes: Routes = [
  {
    path: 'add',
    component: ProductAddComponent,
    canActivate: [AuthGuard],
    data: {roles: 'product_add'}
  },
  {
    path: 'list',
    component: ProductListComponent,
    canActivate: [AuthGuard],
    data: {roles: 'product_list'}
  },
  {
    path: 'edit/:id',
    component: ProductEditComponent,
    canActivate: [AuthGuard],
    data: {roles: 'product_edit'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
