import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';
import { MatTableExporterModule } from 'mat-table-exporter';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DevicesRoutingModule } from './devices-routing.module';
import { DeviceAddComponent } from './pages/device-add/device-add.component';
import { DeviceListComponent } from './pages/device-list/device-list.component';
import { DeviceEditComponent } from './pages/device-edit/device-edit.component';
import { DeviceUserComponent } from './pages/device-user/device-user.component';
import { CustomerDeviceComponent } from './pages/customer-device/customer-device.component';
import { DeviceImportComponent } from './pages/device-import/device-import.component';
import { ImportErrorComponent } from './pages/import-error/import-error.component';
import { ResellerDeviceComponent } from './pages/reseller-device/reseller-device.component';


import { DeviceCategoryListComponent } from './pages/device-category-list/device-category-list.component';
import { DeviceCategoryAddComponent } from './pages/device-category-add/device-category-add.component';
import { DeviceCategoryEditComponent } from './pages/device-category-edit/device-category-edit.component';


@NgModule({
  declarations: [DeviceAddComponent, DeviceListComponent, DeviceEditComponent, DeviceUserComponent, CustomerDeviceComponent, DeviceImportComponent, ImportErrorComponent, ResellerDeviceComponent, DeviceCategoryListComponent, DeviceCategoryAddComponent, DeviceCategoryEditComponent],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableExporterModule,
    FlexLayoutModule
  ]
})
export class DevicesModule { }
