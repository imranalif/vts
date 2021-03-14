import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/auth.guard';
import { QueryAddComponent } from './pages/query-add/query-add.component';
import { QueryEditComponent } from './pages/query-edit/query-edit.component';
import { QueryListComponent } from './pages/query-list/query-list.component';

const routes: Routes = [
  {
    path: 'add',
    component: QueryAddComponent,
    canActivate: [AuthGuard],
    data: {roles: 'query_add'}
  },
  {
    path: 'list',
    component: QueryListComponent,
    canActivate: [AuthGuard],
    data: {roles: 'query_list'}
  },
  {
    path: 'edit/:id',
    component: QueryEditComponent,
    canActivate: [AuthGuard],
    data: {roles: 'query_edit'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueryRoutingModule { }
