import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { MaintenanceAddComponent } from './pages/maintenance-add/maintenance-add.component';
import { MaintenanceListComponent } from './pages/maintenance-list/maintenance-list.component';
import { MaintenanceEditComponent } from './pages/maintenance-edit/maintenance-edit.component';
import { MaintenanceDeviceComponent } from './pages/maintenance-device/maintenance-device.component';
import { MaintenanceGroupComponent } from './pages/maintenance-group/maintenance-group.component';
import { MaintenanceUserComponent } from './pages/maintenance-user/maintenance-user.component';


@NgModule({
  declarations: [MaintenanceAddComponent, MaintenanceListComponent, MaintenanceEditComponent,  MaintenanceDeviceComponent, MaintenanceGroupComponent, MaintenanceUserComponent],
  imports: [
    CommonModule,
    MaintenanceRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MaintenanceModule { }
