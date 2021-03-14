import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../shared/auth.guard';
import { CategoryAddComponent } from './pages/category-add/category-add.component';
import { CategoryEditComponent } from './pages/category-edit/category-edit.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';

const routes: Routes = [
  {
    path: 'add',
    component: CategoryAddComponent,
    canActivate: [AuthGuard],
    data: {roles: 'category_add'}
  },
  {
    path: 'list',
    component: CategoryListComponent,
    canActivate: [AuthGuard],
    data: {roles: 'category_list'}
  },
  {
    path: 'edit/:id',
    component: CategoryEditComponent,
    canActivate: [AuthGuard],
    data: {roles: 'category_edit'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
