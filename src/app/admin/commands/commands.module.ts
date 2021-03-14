import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTableExporterModule } from 'mat-table-exporter';


import { CommandsRoutingModule } from './commands-routing.module';
import { CommandAddComponent } from './pages/command-add/command-add.component';
import { CommandListComponent } from './pages/command-list/command-list.component';
import { CommandEditComponent } from './pages/command-edit/command-edit.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { CommandDeviceComponent } from './pages/command-device/command-device.component';
import { CommandGroupComponent } from './pages/command-group/command-group.component';
import { CommandUserComponent } from './pages/command-user/command-user.component';


@NgModule({
  declarations: [CommandAddComponent, CommandListComponent, CommandEditComponent, CommandDeviceComponent, CommandGroupComponent, CommandUserComponent],
  imports: [
    CommonModule,
    CommandsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableExporterModule
  ]
})
export class CommandsModule { }
