import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/auth.guard';
import { DeviceAddComponent } from './pages/device-add/device-add.component';
import { DeviceListComponent } from './pages/device-list/device-list.component';
import { DeviceEditComponent } from './pages/device-edit/device-edit.component';

const routes: Routes = [
  {
    path: 'add',
    component: DeviceAddComponent,
    canActivate: [AuthGuard],
    data: {roles: 'device_add'}
  },
  {
    path: 'list',
    component: DeviceListComponent,
    canActivate: [AuthGuard],
    data: {roles: 'device_list'}
  },
  {
    path: 'edit/:id',
    component:DeviceEditComponent,
    canActivate: [AuthGuard],
    data: {roles: 'device_edit'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule { }
