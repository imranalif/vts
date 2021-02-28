import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/auth.guard';
import { GroupAddComponent } from './pages/group-add/group-add.component';
import { GroupListComponent } from './pages/group-list/group-list.component';
import { GroupEditComponent } from './pages/group-edit/group-edit.component';

const routes: Routes = [
  {
    path: 'add',
    component: GroupAddComponent,
    canActivate: [AuthGuard],
    data: {roles: 'group_add'}
  },
  {
    path: 'list',
    component: GroupListComponent,
    canActivate: [AuthGuard],
    data: {roles: 'group_list'}
  },
  {
    path: 'edit/:id',
    component: GroupEditComponent,
    canActivate: [AuthGuard],
    data: {roles: 'group_edit'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
