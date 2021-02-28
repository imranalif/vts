import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { MaintenanceAddComponent } from './pages/maintenance-add/maintenance-add.component';
import { MaintenanceListComponent } from './pages/maintenance-list/maintenance-list.component';
import { MaintenanceEditComponent } from './pages/maintenance-edit/maintenance-edit.component';


@NgModule({
  declarations: [MaintenanceAddComponent, MaintenanceListComponent, MaintenanceEditComponent],
  imports: [
    CommonModule,
    MaintenanceRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MaintenanceModule { }
