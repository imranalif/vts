import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/shared/auth.guard';
import { RoleAddComponent } from './pages/role-add/role-add.component';
import { RoleEditComponent } from './pages/role-edit/role-edit.component';
import { RoleListComponent } from './pages/role-list/role-list.component';
import { RolePermissionComponent } from './pages/role-permission/role-permission.component';

const routes: Routes = [
  {
    path: 'add',
    component: RoleAddComponent,
    canActivate: [AuthGuard],
    data: {roles: 'role_add'}
  },
  {
    path: 'list',
    component: RoleListComponent,
    canActivate: [AuthGuard],
    data: {roles: 'role_list'}
  },
  {
    path: 'edit/:id',
    component: RoleEditComponent,
    canActivate: [AuthGuard],
    data: {roles: 'role_edit'}
  },
  {
    path: 'permission/:id',
    component: RolePermissionComponent,
    canActivate: [AuthGuard],
    data: {roles: 'role_permission'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
