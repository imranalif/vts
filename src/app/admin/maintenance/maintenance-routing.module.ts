import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/auth.guard';
import { MaintenanceAddComponent } from './pages/maintenance-add/maintenance-add.component';
import { MaintenanceListComponent } from './pages/maintenance-list/maintenance-list.component';
import { MaintenanceEditComponent } from './pages/maintenance-edit/maintenance-edit.component';

const routes: Routes = [
  {
    path: 'add',
    component: MaintenanceAddComponent,
    canActivate: [AuthGuard],
    data: {roles: 'maintenance_add'}
  },
  {
    path: 'list',
    component: MaintenanceListComponent,
    canActivate: [AuthGuard],
    data: {roles: 'maintenance_list'}
  },
  {
    path: 'edit/:id',
    component:MaintenanceEditComponent,
    canActivate: [AuthGuard],
    data: {roles: 'maintenance_edit'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule { }
