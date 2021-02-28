import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/shared/auth.guard';
import { DriverAddComponent } from './pages/driver-add/driver-add.component';
import { DriverEditComponent } from './pages/driver-edit/driver-edit.component';
import { DriverListComponent } from './pages/driver-list/driver-list.component';

const routes: Routes = [
  {
    path: 'add',
    component: DriverAddComponent,
    canActivate: [AuthGuard],
    data: {roles: 'driver_add'}
  },
  {
    path: 'list',
    component: DriverListComponent,
    canActivate: [AuthGuard],
    data: {roles: 'driver_list'}
  },
  {
    path: 'edit/:id',
    component: DriverEditComponent,
    canActivate: [AuthGuard],
    data: {roles: 'driver_edit'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverRoutingModule { }
