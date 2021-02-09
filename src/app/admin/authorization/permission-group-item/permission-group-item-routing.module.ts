import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/shared/auth.guard';
import { ItemAddComponent } from './pages/item-add/item-add.component';
import { ItemEditComponent } from './pages/item-edit/item-edit.component';
import { ItemListComponent } from './pages/item-list/item-list.component';

const routes: Routes = [
  {
    path: 'add',
    component: ItemAddComponent,
    canActivate: [AuthGuard],
    data: {roles: 'item_add'}
  },
  {
    path: 'list',
    component: ItemListComponent,
    canActivate: [AuthGuard],
    data: {roles: 'item_list'}
  },
  {
    path: 'edit/:id',
    component: ItemEditComponent,
    canActivate: [AuthGuard],
    data: {roles: 'item_edit'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionGroupItemRoutingModule { }
