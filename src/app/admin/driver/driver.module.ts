import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';


import { DriverRoutingModule } from './driver-routing.module';
import { DriverAddComponent } from './pages/driver-add/driver-add.component';
import { DriverListComponent } from './pages/driver-list/driver-list.component';
import { DriverEditComponent } from './pages/driver-edit/driver-edit.component';
import { DriverPopupComponent } from './pages/driver-popup/driver-popup.component';
import { DriverGroupComponent } from './pages/driver-group/driver-group.component';
import { DriverUserComponent } from './pages/driver-user/driver-user.component';


@NgModule({
  declarations: [DriverAddComponent, DriverListComponent, DriverEditComponent, DriverPopupComponent, DriverGroupComponent, DriverUserComponent],
  imports: [
    CommonModule,
    DriverRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DriverModule { }
