import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/auth.guard';
import { DeviceAddComponent } from './pages/device-add/device-add.component';
import { DeviceListComponent } from './pages/device-list/device-list.component';
import { DeviceEditComponent } from './pages/device-edit/device-edit.component';
import { DeviceCategoryAddComponent } from './pages/device-category-add/device-category-add.component';
import { DeviceCategoryListComponent } from './pages/device-category-list/device-category-list.component';
import { DeviceCategoryEditComponent } from './pages/device-category-edit/device-category-edit.component';

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
  },
  {
    path: 'dcat-add',
    component: DeviceCategoryAddComponent,
    canActivate: [AuthGuard],
    data: {roles: 'device_category_add'}
  },
  {
    path: 'dcat-list',
    component: DeviceCategoryListComponent,
    canActivate: [AuthGuard],
    data: {roles: 'device_category_list'}
  },
  {
    path: 'dcat-edit/:id',
    component:DeviceCategoryEditComponent,
    canActivate: [AuthGuard],
    data: {roles: 'device_category_edit'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule { }
