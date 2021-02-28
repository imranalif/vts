import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';

import { DevicesRoutingModule } from './devices-routing.module';
import { DeviceAddComponent } from './pages/device-add/device-add.component';
import { DeviceListComponent } from './pages/device-list/device-list.component';
import { DeviceEditComponent } from './pages/device-edit/device-edit.component';


@NgModule({
  declarations: [DeviceAddComponent, DeviceListComponent, DeviceEditComponent],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DevicesModule { }
