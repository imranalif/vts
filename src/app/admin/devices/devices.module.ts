import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';
import { MatTableExporterModule } from 'mat-table-exporter';

import { DevicesRoutingModule } from './devices-routing.module';
import { DeviceAddComponent } from './pages/device-add/device-add.component';
import { DeviceListComponent } from './pages/device-list/device-list.component';
import { DeviceEditComponent } from './pages/device-edit/device-edit.component';
import { DeviceUserComponent } from './pages/device-user/device-user.component';
import { CustomerDeviceComponent } from './pages/customer-device/customer-device.component';


@NgModule({
  declarations: [DeviceAddComponent, DeviceListComponent, DeviceEditComponent, DeviceUserComponent, CustomerDeviceComponent],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableExporterModule
  ]
})
export class DevicesModule { }
